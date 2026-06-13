import type { Consonant, Phoneme, PhonemeId, Vowel } from "@/lib/types";
import { CONSONANTS } from "./consonants";
import { VOWELS } from "./vowels";

export const ALL_PHONEMES: readonly Phoneme[] = [...VOWELS, ...CONSONANTS];

const BY_ID = new Map<PhonemeId, Phoneme>(ALL_PHONEMES.map((p) => [p.id, p]));

/* ビルド時(SSG)の整合性チェック: 参照切れの contrastWith / voicedPair はビルドを落とす */
for (const p of ALL_PHONEMES) {
  for (const mp of p.minimalPairs) {
    if (!BY_ID.has(mp.contrastWith)) {
      throw new Error(
        `phonemes: ${p.id} の minimalPair (${mp.a.word}/${mp.b.word}) の contrastWith "${mp.contrastWith}" が見つかりません`,
      );
    }
  }
  if (p.kind === "consonant" && p.voicedPair && !BY_ID.has(p.voicedPair)) {
    throw new Error(`phonemes: ${p.id} の voicedPair "${p.voicedPair}" が見つかりません`);
  }
}

export function findPhoneme(id: PhonemeId): Phoneme | undefined {
  return BY_ID.get(id);
}

/** dynamicParams=false の音素ページ用 — 存在しなければビルドエラーにする */
export function getPhoneme(id: PhonemeId): Phoneme {
  const p = BY_ID.get(id);
  if (!p) throw new Error(`phonemes: 未知の音素 id "${id}"`);
  return p;
}

export function getVowel(id: PhonemeId): Vowel {
  const p = getPhoneme(id);
  if (p.kind !== "vowel") throw new Error(`phonemes: "${id}" は母音ではありません`);
  return p;
}

export function getConsonant(id: PhonemeId): Consonant {
  const p = getPhoneme(id);
  if (p.kind !== "consonant") throw new Error(`phonemes: "${id}" は子音ではありません`);
  return p;
}

/** 音素ページの「対比」リンク表示用ラベル: /æ/ trap */
export function phonemeLabel(id: PhonemeId): string {
  const p = getPhoneme(id);
  return `/${p.symbol}/ ${p.keyword.word}`;
}

export function phonemePath(p: Phoneme): string {
  return p.kind === "vowel" ? `/vowels/${p.id}` : `/consonants/${p.id}`;
}
