import type {
  ExampleWord,
  MinimalPair,
  PhonemeId,
  QuizQuestion,
} from "@/lib/types";
import { ALL_PHONEMES } from "@/lib/data/phonemes";
import { STRESS_WORDS } from "@/lib/data/stress-words";

/**
 * クイズの問題生成(純関数)。Math.random を使うため、
 * 必ずクライアント側のイベントハンドラ内から呼ぶこと(SSR中に呼ぶとハイドレーション不整合)。
 */

export function shuffle<T>(xs: readonly T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample<T>(xs: readonly T[], n: number): T[] {
  return shuffle(xs).slice(0, n);
}

interface PairSource {
  pair: MinimalPair;
  ownerId: PhonemeId;
}

/** 全音素の minimalPairs を集約。両側の音素に書かれたミラーペアは正規化キーで重複排除 */
export function getMinimalPairPool(): PairSource[] {
  const seen = new Set<string>();
  const pool: PairSource[] = [];
  for (const p of ALL_PHONEMES) {
    for (const pair of p.minimalPairs) {
      const key = [pair.a.word.toLowerCase(), pair.b.word.toLowerCase()]
        .sort()
        .join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      pool.push({ pair, ownerId: p.id });
    }
  }
  return pool;
}

export function generateMinimalPairQuestions(n: number): QuizQuestion[] {
  return sample(getMinimalPairPool(), n).map(({ pair, ownerId }) => {
    const target = Math.random() < 0.5 ? pair.a : pair.b;
    const choices: [ExampleWord, ExampleWord] =
      Math.random() < 0.5 ? [pair.a, pair.b] : [pair.b, pair.a];
    return {
      type: "minimal-pair",
      ttsText: target.ttsText ?? target.word,
      choices,
      answerIndex: choices[0].word === target.word ? 0 : 1,
      contrast: [ownerId, pair.contrastWith],
    };
  });
}

interface PoolWord extends ExampleWord {
  ownerId: PhonemeId;
}

/** 例単語+代表語+ミニマルペア両側を単語で重複排除した語彙プール */
function getWordPool(): PoolWord[] {
  const seen = new Set<string>();
  const pool: PoolWord[] = [];
  const add = (w: ExampleWord, ownerId: PhonemeId) => {
    const key = w.word.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    pool.push({ ...w, ownerId });
  };
  for (const p of ALL_PHONEMES) {
    add(p.keyword, p.id);
    for (const w of p.examples) add(w, p.id);
    for (const pair of p.minimalPairs) {
      add(pair.a, p.id);
      add(pair.b, pair.contrastWith);
    }
  }
  return pool;
}

export function generateIpaReadingQuestions(n: number): QuizQuestion[] {
  const pool = getWordPool();
  // 1音節相当の短い語を優先(発音記号の読み取り練習として紛らわしさが出る)
  const targets = sample(pool, n);
  return targets.map((target) => {
    // 紛らわしい選択肢: 同じ音素グループの語 → それ以外からランダム
    const distractors: string[] = [];
    const pick = (cands: PoolWord[]) => {
      for (const c of shuffle(cands)) {
        if (distractors.length >= 3) return;
        if (c.word === target.word) continue;
        if (distractors.includes(c.word)) continue;
        distractors.push(c.word);
      }
    };
    pick(pool.filter((w) => w.ownerId === target.ownerId));
    pick(pool);
    const choices = shuffle([target.word, ...distractors]);
    return {
      type: "ipa-reading",
      ipa: target.ipa,
      gloss: target.gloss,
      choices,
      answerIndex: choices.indexOf(target.word),
      ttsText: target.ttsText ?? target.word,
    };
  });
}

export function generateStressQuestions(n: number): QuizQuestion[] {
  return sample(STRESS_WORDS, n).map((word) => ({
    type: "stress",
    word,
    answerIndex: word.stressIndex,
  }));
}

export const QUESTIONS_PER_SESSION = 10;
