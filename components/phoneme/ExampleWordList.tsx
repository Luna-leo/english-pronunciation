import { SpeakButton } from "@/components/speech/SpeakButton";
import { RATE_SLOW } from "@/components/speech/speechManager";
import { IPA } from "@/components/ui/IPA";
import type { ExampleWord } from "@/lib/types";

/** 例単語の図面風テーブル(単語 / IPA / 和訳 / PLAY / SLOW) */
export function ExampleWordList({ words }: { words: ExampleWord[] }) {
  return (
    <div className="divide-y divide-line border-[1.5px] border-line bg-card">
      {words.map((w) => (
        <div key={w.word} className="flex flex-wrap items-center gap-3 p-2">
          <span lang="en" className="w-24 shrink-0 font-mono text-sm text-ink">
            {w.word}
          </span>
          <IPA className="w-28 shrink-0 text-sm text-ink-soft">{w.ipa}</IPA>
          <span className="flex-1 text-sm text-ink-soft">{w.gloss}</span>
          <SpeakButton text={w.ttsText ?? w.word} />
          <SpeakButton
            text={w.ttsText ?? w.word}
            rate={RATE_SLOW}
            label="SLOW"
            ariaLabel={`${w.word} をゆっくり再生`}
          />
        </div>
      ))}
    </div>
  );
}
