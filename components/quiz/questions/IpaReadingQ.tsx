"use client";

import { IPA } from "@/components/ui/IPA";
import type { QuizQuestion } from "@/lib/types";

interface IpaReadingQProps {
  q: Extract<QuizQuestion, { type: "ipa-reading" }>;
  picked: number | null;
  locked: boolean;
  onPick: (i: number) => void;
}

/** 和訳(gloss)は答えが漏れるため出さない — 正解後に QuizRunner が表示する */
export function IpaReadingQ({ q, picked, locked, onPick }: IpaReadingQProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-md border-[1.5px] border-line bg-card p-4 text-center">
        <IPA className="text-3xl text-ink">{q.ipa}</IPA>
      </div>
      <p className="text-sm text-ink-soft">
        この発音記号が表す単語を選んでください。
      </p>
      <div className="grid max-w-md grid-cols-2 gap-2">
        {q.choices.map((word, i) => {
          const mark = !locked
            ? null
            : i === q.answerIndex
              ? "correct"
              : i === picked
                ? "wrong"
                : null;
          return (
            <button
              key={word}
              type="button"
              onClick={() => onPick(i)}
              disabled={locked}
              aria-pressed={picked === i}
              className="flex items-baseline gap-1.5 border-[1.5px] border-line bg-card px-3 py-2 text-left font-mono text-base hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion disabled:opacity-60"
            >
              {mark === "correct" && <span className="text-ink">○</span>}
              {mark === "wrong" && <span className="text-vermilion">×</span>}
              <span lang="en">{word}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
