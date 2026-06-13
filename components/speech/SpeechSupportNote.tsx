"use client";

import { useEffect, useState } from "react";
import { Note } from "@/components/ui/Note";
import { isSupported, getVoice } from "./speechManager";

function voiceLabel(voice: SpeechSynthesisVoice): string {
  const n = voice.name;
  if (n.includes("Natural")) return `Edge Natural（高品質）`;
  if (n.includes("Google US English")) return `Google US English（Chrome）`;
  if (/Zira|David|Mark/.test(n)) return `${n.match(/Zira|David|Mark/)?.[0]}（Windows）`;
  return n.slice(0, 30);
}

/** 音声エンジンの使用状況を常時表示し、非対応環境ではエラーを表示する */
export function SpeechSupportNote() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [voiceName, setVoiceName] = useState<string | null>(null);

  useEffect(() => {
    const ok = isSupported();
    setSupported(ok);
    if (ok) {
      getVoice().then((v) => {
        setVoiceName(v ? voiceLabel(v) : null);
      });
    }
  }, []);

  if (supported === null) return null;

  if (!supported) {
    return (
      <Note>
        お使いのブラウザは音声合成(Web Speech API)に対応していないため、音声再生ボタンは利用できません。
      </Note>
    );
  }

  return (
    <Note>
      音声: ブラウザ内蔵の Web Speech API を使用
      {voiceName && <> — 使用中の音声: <strong>{voiceName}</strong></>}。
      音質はブラウザと OS によって異なります。Edge(Natural 音声)・Chrome(Google US English)で最高品質になります。
    </Note>
  );
}
