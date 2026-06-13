import { ConsonantTable } from "@/components/diagrams/ConsonantTable";
import { PhonemeSpecStrip } from "@/components/diagrams/PhonemeSpecStrip";
import { VowelChart } from "@/components/diagrams/VowelChart";
import { ExampleWordList } from "@/components/phoneme/ExampleWordList";
import { MinimalPairTable } from "@/components/phoneme/MinimalPairTable";
import { SpeakButton } from "@/components/speech/SpeakButton";
import { SpeechSupportNote } from "@/components/speech/SpeechSupportNote";
import { IPA } from "@/components/ui/IPA";
import type { Manner, Phoneme, Vowel } from "@/lib/types";

const VOWEL_GROUP_LABEL: Record<Vowel["group"], string> = {
  lax: "緩母音(短母音)",
  tense: "緊張母音(長母音)",
  rhotic: "R音性母音",
  diphthong: "二重母音",
};

const MANNER_LABEL: Record<Manner, string> = {
  plosive: "破裂音",
  fricative: "摩擦音",
  affricate: "破擦音",
  nasal: "鼻音",
  liquid: "流音",
  glide: "半母音",
};

function groupLabel(p: Phoneme): string {
  return p.kind === "vowel"
    ? VOWEL_GROUP_LABEL[p.group]
    : `${MANNER_LABEL[p.manner]}${p.voiced ? "・有声" : "・無声"}`;
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
      {children}
    </h2>
  );
}

/** 母音・子音ページ共通の音素詳細テンプレート */
export function PhonemeDetail({ phoneme: p }: { phoneme: Phoneme }) {
  return (
    <div className="max-w-4xl space-y-6">
      {/* 見出しブロック: 記号 + 通称 + 代表語 */}
      <div className="flex flex-wrap items-baseline gap-4">
        <IPA className="text-5xl text-ink">{p.symbol}</IPA>
        <div>
          <p className="text-base font-bold">{p.nameJa}</p>
          <p className="mt-1 flex flex-wrap items-center gap-2">
            <span lang="en" className="font-mono text-sm">
              {p.keyword.word}
            </span>
            <IPA className="text-sm text-ink-soft">{p.keyword.ipa}</IPA>
            <span className="text-sm text-ink-soft">{p.keyword.gloss}</span>
            <SpeakButton text={p.keyword.ttsText ?? p.keyword.word} />
          </p>
          <p className="mt-1 font-mono text-[11px] tracking-[.12em] text-ink-faint">
            {groupLabel(p)}
          </p>
        </div>
      </div>

      <SpeechSupportNote />

      <section className="space-y-3">
        <SectionHeading>01 — 調音(口の構え)</SectionHeading>
        {p.articulation.map((text, i) => (
          <p key={i} className="max-w-3xl text-sm leading-relaxed text-ink">
            {text}
          </p>
        ))}
      </section>

      <section className="space-y-3">
        <SectionHeading>02 — 位置</SectionHeading>
        {p.kind === "vowel" ? (
          <VowelChart highlightId={p.id} className="max-w-md" />
        ) : (
          <>
            <PhonemeSpecStrip consonant={p} />
            <ConsonantTable highlightId={p.id} className="max-w-3xl" />
          </>
        )}
      </section>

      <section className="space-y-3">
        <SectionHeading>03 — 日本語話者の注意</SectionHeading>
        <ul className="space-y-2">
          {p.pitfalls.map((text, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink">
              <span aria-hidden className="mt-2 size-[5px] shrink-0 bg-vermilion" />
              {text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <SectionHeading>04 — 例単語</SectionHeading>
        <ExampleWordList words={p.examples} />
      </section>

      {p.minimalPairs.length > 0 && (
        <section className="space-y-3">
          <SectionHeading>05 — ミニマルペア(聞き分け)</SectionHeading>
          <MinimalPairTable pairs={p.minimalPairs} />
          <p className="text-xs text-ink-faint">
            PLAY で聞き比べ、SLOW でゆっくり確認。クイズ(/quiz)で聞き分けを試せます。
          </p>
        </section>
      )}
    </div>
  );
}
