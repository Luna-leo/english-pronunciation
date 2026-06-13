import type { ReactNode } from "react";
import type { ContentBlock } from "@/lib/types";
import { IPA } from "@/components/ui/IPA";
import { Note } from "@/components/ui/Note";
import { SpeakButton } from "@/components/speech/SpeakButton";
import { RATE_SLOW } from "@/components/speech/speechManager";
import { ExampleWordList } from "@/components/phoneme/ExampleWordList";

/** 文字列中の /.../ を <IPA> として描画する(表セル・見出し用の簡易パーサ) */
function renderInline(text: string): ReactNode {
  const parts = text.split(/(\/[^/]+\/)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part.startsWith("/") && part.endsWith("/") && part.length > 2 ? (
      <IPA key={i} className="text-ink">
        {part.slice(1, -1)}
      </IPA>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function BeforeAfter({
  block,
}: {
  block: Extract<ContentBlock, { type: "beforeAfter" }>;
}) {
  return (
    <div className="max-w-2xl border-[1.5px] border-line bg-card p-3">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="text-center">
          <p lang="en" className="font-mono text-sm text-ink">
            {block.before.text}
          </p>
          <p className="mt-1 text-xs text-ink-soft">
            <IPA>{block.before.ipa}</IPA>
          </p>
        </div>
        {/* 朱の矢印(線として許容) */}
        <span aria-hidden="true" className="font-mono text-lg text-vermilion">
          →
        </span>
        <div className="text-center">
          <p lang="en" className="font-mono text-sm font-bold text-ink">
            {block.after.text}
          </p>
          <p className="mt-1 text-xs text-ink-soft">
            <IPA>{block.after.ipa}</IPA>
          </p>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-2">
        <span className="text-xs text-ink-faint">{block.gloss}</span>
        <SpeakButton text={block.ttsText} />
      </div>
    </div>
  );
}

function Sentences({
  block,
}: {
  block: Extract<ContentBlock, { type: "sentences" }>;
}) {
  return (
    <ul className="max-w-3xl divide-y divide-line border-[1.5px] border-line bg-card">
      {block.items.map((s, i) => (
        <li key={i} className="flex flex-wrap items-center gap-x-3 gap-y-2 p-2">
          <div className="min-w-0 flex-1">
            <p lang="en" className="font-mono text-sm text-ink">
              {s.text}
            </p>
            {s.ipa && (
              <p className="mt-0.5 text-xs text-ink-soft">
                <IPA>{s.ipa}</IPA>
              </p>
            )}
            <p className="mt-0.5 text-xs text-ink-faint">{s.gloss}</p>
          </div>
          <SpeakButton text={s.ttsText ?? s.text} />
          {block.withSlow && (
            <SpeakButton
              text={s.ttsText ?? s.text}
              rate={RATE_SLOW}
              label="SLOW"
              ariaLabel={`${s.text} をゆっくり再生`}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="border-b border-line pb-1 pt-2 text-sm font-bold tracking-[.12em] text-ink"
              >
                {renderInline(block.text)}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="max-w-3xl text-sm leading-relaxed text-ink">
                {renderInline(block.text)}
              </p>
            );
          case "note":
            return (
              <Note key={i} className="max-w-3xl">
                {renderInline(block.text)}
              </Note>
            );
          case "wordList":
            return <ExampleWordList key={i} words={block.words} />;
          case "sentences":
            return <Sentences key={i} block={block} />;
          case "beforeAfter":
            return <BeforeAfter key={i} block={block} />;
          case "table":
            return (
              <table
                key={i}
                className="w-full max-w-3xl border-collapse border-[1.5px] border-line bg-card text-left"
              >
                {block.caption && (
                  <caption className="sr-only">{block.caption}</caption>
                )}
                <thead>
                  <tr>
                    {block.header.map((h, j) => (
                      <th
                        key={j}
                        scope="col"
                        className="border border-line p-2 font-mono text-[10px] tracking-[.12em] text-ink-faint"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j}>
                      {row.map((cell, k) => (
                        <td
                          key={k}
                          className="border border-line p-2 text-sm text-ink"
                        >
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
        }
      })}
    </div>
  );
}
