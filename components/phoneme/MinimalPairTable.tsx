import Link from "next/link";
import { SpeakButton } from "@/components/speech/SpeakButton";
import { IPA } from "@/components/ui/IPA";
import { Note } from "@/components/ui/Note";
import { getPhoneme, phonemeLabel, phonemePath } from "@/lib/data/phonemes";
import type { ExampleWord, MinimalPair } from "@/lib/types";

/** ペアの片側: 単語 + IPA + PLAY */
function PairWord({ w }: { w: ExampleWord }) {
  return (
    <>
      <span lang="en" className="font-mono text-sm font-bold">
        {w.word}
      </span>
      <IPA className="text-sm text-ink-soft">{w.ipa}</IPA>
      <SpeakButton text={w.ttsText ?? w.word} />
    </>
  );
}

/** ミニマルペアの聞き比べリスト(対比音素ページへのリンク付き) */
export function MinimalPairTable({ pairs }: { pairs: MinimalPair[] }) {
  return (
    <div className="space-y-3">
      {pairs.map((p) => (
        <div
          key={`${p.a.word}-${p.b.word}`}
          className="border-[1.5px] border-line bg-card p-3"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <PairWord w={p.a} />
            <span aria-hidden className="font-mono text-ink-faint">
              vs
            </span>
            <PairWord w={p.b} />
          </div>
          <p className="mt-2 text-xs text-ink-faint">
            {p.a.word}={p.a.gloss} / {p.b.word}={p.b.gloss}
          </p>
          <p className="mt-1 text-xs text-ink-soft">
            対比:{" "}
            <Link
              href={phonemePath(getPhoneme(p.contrastWith))}
              className="font-mono text-xs tracking-[.12em] text-ink hover:text-vermilion"
            >
              {phonemeLabel(p.contrastWith)} →
            </Link>
          </p>
          {p.note && <Note className="mt-1 text-xs">{p.note}</Note>}
        </div>
      ))}
    </div>
  );
}
