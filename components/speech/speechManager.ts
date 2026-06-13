/**
 * speechSynthesis のモジュールシングルトン。クライアント専用ファイルからのみ import すること。
 * 再生は常に1本(単語/短文)。「どのボタンが再生中か」を playingId で全ボタンに共有する。
 */

export const RATE_NORMAL = 1.0;
/** これ以下にすると Windows のローカル音声が崩れる */
export const RATE_SLOW = 0.7;

const VOICE_TIMEOUT_MS = 1500;
/** cancel() 直後に同期で speak すると Chrome/Windows で発話が落ちることがあるための遅延 */
const SPEAK_DELAY_MS = 50;

type Listener = () => void;

let playingId: string | null = null;
/** Chrome は参照を失った utterance を GC して onend を発火しないことがある — 終了まで保持 */
let currentUtterance: SpeechSynthesisUtterance | null = null;
let pendingSpeak: ReturnType<typeof setTimeout> | null = null;
let voicePromise: Promise<SpeechSynthesisVoice | null> | null = null;
const listeners = new Set<Listener>();

export function isSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getPlayingId(): string | null {
  return playingId;
}

function setPlaying(id: string | null): void {
  if (playingId === id) return;
  playingId = id;
  for (const l of listeners) l();
}

function normLang(v: SpeechSynthesisVoice): string {
  return v.lang.toLowerCase().replace("_", "-");
}

/** en-US 優先: Natural(Edge) > Google US English(Chrome) > ローカル Microsoft 音声 > その他 en */
function rank(v: SpeechSynthesisVoice): number {
  if (normLang(v) === "en-us") {
    if (v.name.includes("Natural")) return 0;
    if (v.name.includes("Google US English")) return 1;
    if (/Zira|David|Mark/.test(v.name)) return 2;
    return 3;
  }
  return 4;
}

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const english = voices.filter((v) => normLang(v).startsWith("en"));
  if (english.length === 0) return null;
  return english.sort((a, b) => rank(a) - rank(b))[0];
}

export function getVoice(): Promise<SpeechSynthesisVoice | null> {
  if (!isSupported()) return Promise.resolve(null);
  if (voicePromise) return voicePromise;
  voicePromise = new Promise((resolve) => {
    const immediate = speechSynthesis.getVoices();
    if (immediate.length > 0) {
      resolve(pickVoice(immediate));
      return;
    }
    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      speechSynthesis.removeEventListener("voiceschanged", settle);
      resolve(pickVoice(speechSynthesis.getVoices()));
    };
    // Chrome は voiceschanged を発火しないことがある — タイムアウトで必ず解決する
    speechSynthesis.addEventListener("voiceschanged", settle);
    setTimeout(settle, VOICE_TIMEOUT_MS);
  });
  return voicePromise;
}

export function cancel(): void {
  if (!isSupported()) return;
  if (pendingSpeak !== null) {
    clearTimeout(pendingSpeak);
    pendingSpeak = null;
  }
  speechSynthesis.cancel();
  currentUtterance = null;
  // cancel 後の onend はブラウザによって発火しない — ここで確実に消灯する
  setPlaying(null);
}

export function speak(id: string, text: string, rate: number = RATE_NORMAL): void {
  if (!isSupported()) return;
  cancel();
  setPlaying(id);
  pendingSpeak = setTimeout(async () => {
    pendingSpeak = null;
    const voice = await getVoice();
    // 声の解決を待つ間に cancel / 別ボタンの speak が割り込んだら中止
    if (playingId !== id) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    if (voice) u.voice = voice;
    u.rate = rate;
    const finish = () => {
      // interrupted / canceled の onerror も正常停止として扱う
      if (currentUtterance === u) currentUtterance = null;
      if (playingId === id) setPlaying(null);
    };
    u.onend = finish;
    u.onerror = finish;
    currentUtterance = u;
    speechSynthesis.speak(u);
  }, SPEAK_DELAY_MS);
}
