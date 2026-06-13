/**
 * 音素・コンテンツの共有型定義。
 * データ本体は lib/data/ 配下の TS モジュールに持ち、`satisfies` でビルド時検証する。
 */

/** スラッグ: 母音は Wells 語彙セット名("kit")、子音は ASCII 近似("th")。IPA記号はURLに使えないため */
export type PhonemeId = string;

export interface ExampleWord {
  word: string;
  /** IPA(General American)。スラッシュは付けない — 表示時に <IPA> が付与する */
  ipa: string;
  /** 和訳 */
  gloss: string;
  /** 同綴異音語(read 等)など TTS が誤読する語の読み上げ用上書き */
  ttsText?: string;
}

export interface ExampleSentence {
  text: string;
  /** 文全体の IPA 表記(任意) */
  ipa?: string;
  gloss: string;
  ttsText?: string;
}

export interface MinimalPair {
  /** この音素を含む語 */
  a: ExampleWord;
  /** 対比音素を含む語 */
  b: ExampleWord;
  contrastWith: PhonemeId;
  /** 聞き分けのヒント(任意) */
  note?: string;
}

interface PhonemeBase {
  id: PhonemeId;
  /** 表示用 IPA 記号("æ", "tʃ" など) */
  symbol: string;
  /** 日本語の通称(「『ア』と『エ』の間の母音」など) */
  nameJa: string;
  /** 索引・チャートに出す代表語 */
  keyword: ExampleWord;
  /** 調音のしかた(日本語、段落ごと) */
  articulation: string[];
  /** 日本語話者の落とし穴 */
  pitfalls: string[];
  /** 例単語 4〜6 */
  examples: ExampleWord[];
  /** ミニマルペア 0〜4(クイズはここから導出する) */
  minimalPairs: MinimalPair[];
}

/** 母音チャート(台形)上の正規化座標。x: 0=前舌〜1=後舌 / y: 0=狭〜1=広 */
export interface ChartPoint {
  x: number;
  y: number;
}

export interface Vowel extends PhonemeBase {
  kind: "vowel";
  group: "lax" | "tense" | "rhotic" | "diphthong";
  /** 単母音は点、二重母音は始点→終点 */
  chartPos: ChartPoint | { from: ChartPoint; to: ChartPoint };
}

export type Manner =
  | "plosive"
  | "fricative"
  | "affricate"
  | "nasal"
  | "liquid"
  | "glide";

export type Place =
  | "bilabial"
  | "labiodental"
  | "dental"
  | "alveolar"
  | "postalveolar"
  | "palatal"
  | "velar"
  | "glottal";

export interface Consonant extends PhonemeBase {
  kind: "consonant";
  manner: Manner;
  place: Place;
  voiced: boolean;
  /** 有声・無声の対(p↔b など) */
  voicedPair?: PhonemeId;
}

export type Phoneme = Vowel | Consonant;

/* ---- 超分節音・連結現象のトピックコンテンツ ---- */

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  /** 朱の左罫の注記 */
  | { type: "note"; text: string }
  | { type: "wordList"; words: ExampleWord[] }
  | { type: "sentences"; items: ExampleSentence[]; withSlow?: boolean }
  /** 連結現象の before/after 対比("want to" → "wanna") */
  | {
      type: "beforeAfter";
      gloss: string;
      ttsText: string;
      before: { text: string; ipa: string };
      after: { text: string; ipa: string };
    }
  | { type: "table"; caption?: string; header: string[]; rows: string[][] };

export interface Topic {
  id: string;
  section: "prosody" | "connected";
  /** 日本語タイトル("語強勢") */
  title: string;
  /** 等幅ラベル("WORD STRESS") */
  titleEn: string;
  /** 索引ページ用の要約 */
  summary: string;
  blocks: ContentBlock[];
}

/* ---- クイズ ---- */

export interface StressWord {
  word: string;
  ipa: string;
  gloss: string;
  /** 音節分割(つづり字ベース): ["pho","to","graph"] */
  syllables: string[];
  /** 強勢音節(0始まり) */
  stressIndex: number;
}

export type QuizQuestion =
  | {
      type: "minimal-pair";
      ttsText: string;
      choices: [ExampleWord, ExampleWord];
      answerIndex: 0 | 1;
      /** 復習リンク用の対比音素ペア */
      contrast: [PhonemeId, PhonemeId];
    }
  | {
      type: "ipa-reading";
      ipa: string;
      gloss: string;
      choices: string[];
      answerIndex: number;
      ttsText: string;
    }
  | { type: "stress"; word: StressWord; answerIndex: number };
