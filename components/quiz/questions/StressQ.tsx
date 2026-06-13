"use client";

import { Fragment } from "react";
import type { QuizQuestion } from "@/lib/types";

interface StressQProps {
  q: Extract<QuizQuestion, { type: "stress" }>;
  picked: number | null;
  locked: boolean;
  onPick: (i: number) => void;
}

/** 回答前の音声再生は無し(聞くと強勢が分かってしまう) — 正解後に QuizRunner が再生ボタンを出す */
export function StressQ({ q, picked, locked, onPick }: StressQProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-ink-soft">
        「{q.word.gloss}」— 最も強く読む音節を選んでください:
      </p>
      <div className="flex flex-wrap items-center gap-1">
        {q.word.syllables.map((syl, i) => {
          const mark = !locked
            ? null
            : i === q.answerIndex
              ? "correct"
              : i === picked
                ? "wrong"
                : null;
          return (
            <Fragment key={i}>
              {i > 0 && (
                <span aria-hidden="true" className="text-ink-faint">
                  ·
                </span>
              )}
              <button
                type="button"
                onClick={() => onPick(i)}
                disabled={locked}
                aria-pressed={picked === i}
                className="flex items-baseline gap-1.5 border-[1.5px] border-line bg-card px-3 py-2 font-mono text-base hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion disabled:opacity-60"
              >
                {mark === "correct" && <span className="text-ink">○</span>}
                {mark === "wrong" && <span className="text-vermilion">×</span>}
                <span lang="en">{syl}</span>
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
