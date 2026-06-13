import Link from "next/link";
import { SpeakButton } from "@/components/speech/SpeakButton";
import { IPA } from "@/components/ui/IPA";
import { Note } from "@/components/ui/Note";
import { getPhoneme, phonemeLabel, phonemePath } from "@/lib/data/phonemes";
import type { ExampleWord, MinimalPair } from "@/lib/types";

/** ペアの片側: 単語を上段に、IPA・PLAY をその下へ縦に積む */
function PairWord({ w }: { w: ExampleWord }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span lang="en" className="font-mono text-sm font-bold">
        {w.word}
      </span>
      <IPA className="text-sm text-ink-soft">{w.ipa}</IPA>
      <SpeakButton text={w.ttsText ?? w.word} />
    </div>
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
          {/* 語と語は同じ行で vs を挟む。IPA・PLAY は各語の下段へ落として横幅を確保 */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-x-3">
            <PairWord w={p.a} />
            <span aria-hidden className="font-mono text-sm font-bold text-ink-faint">
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
