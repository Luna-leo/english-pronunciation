"use client";

import { SpeakButton } from "@/components/speech/SpeakButton";
import { IPA } from "@/components/ui/IPA";
import type { QuizQuestion } from "@/lib/types";

interface MinimalPairQProps {
  q: Extract<QuizQuestion, { type: "minimal-pair" }>;
  picked: number | null;
  locked: boolean;
  onPick: (i: number) => void;
}

export function MinimalPairQ({ q, picked, locked, onPick }: MinimalPairQProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-ink-soft">
        音声を聞いて、どちらの単語か選んでください。
      </p>
      {/* 何度でも聞き直せる */}
      <SpeakButton text={q.ttsText} label="PLAY" className="self-start text-sm" />
      <div className="grid max-w-md grid-cols-2 gap-2">
        {q.choices.map((w, i) => {
          const mark = !locked
            ? null
            : i === q.answerIndex
              ? "correct"
              : i === picked
                ? "wrong"
                : null;
          return (
            <button
              key={w.word}
              type="button"
              onClick={() => onPick(i)}
              disabled={locked}
              aria-pressed={picked === i}
              className="flex flex-col items-start gap-1 border-[1.5px] border-line bg-card p-3 text-left hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion disabled:opacity-60"
            >
              <span className="flex items-baseline gap-1.5">
                {mark === "correct" && <span className="font-mono text-ink">○</span>}
                {mark === "wrong" && (
                  <span className="font-mono text-vermilion">×</span>
                )}
                <span lang="en" className="font-mono text-base font-bold">
                  {w.word}
                </span>
              </span>
              <IPA className="text-sm text-ink-soft">{w.ipa}</IPA>
            </button>
          );
        })}
      </div>
    </div>
  );
}
