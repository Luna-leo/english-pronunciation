"use client";

import Link from "next/link";
import { useReducer } from "react";
import { SpeakButton } from "@/components/speech/SpeakButton";
import { IPA } from "@/components/ui/IPA";
import { getPhoneme, phonemeLabel, phonemePath } from "@/lib/data/phonemes";
import type { QuizQuestion } from "@/lib/types";
import { IpaReadingQ } from "./questions/IpaReadingQ";
import { MinimalPairQ } from "./questions/MinimalPairQ";
import { StressQ } from "./questions/StressQ";

interface RunnerMode {
  key: string;
  en: string;
  ja: string;
}

interface QuizRunnerProps {
  mode: RunnerMode;
  questions: QuizQuestion[];
  onRestart: () => void;
  onExit: () => void;
}

interface RunnerState {
  phase: "question" | "feedback";
  /** questions.length に達したら結果表示 */
  index: number;
  correct: number;
  picked: number | null;
  /** 不正解だった問題の index(復習リスト用) */
  missed: number[];
}

type RunnerAction =
  | { type: "ANSWER"; picked: number; answerIndex: number }
  | { type: "NEXT" };

const INITIAL_STATE: RunnerState = {
  phase: "question",
  index: 0,
  correct: 0,
  picked: null,
  missed: [],
};

function reducer(state: RunnerState, action: RunnerAction): RunnerState {
  switch (action.type) {
    case "ANSWER": {
      if (state.phase !== "question") return state;
      const isCorrect = action.picked === action.answerIndex;
      return {
        ...state,
        phase: "feedback",
        picked: action.picked,
        correct: isCorrect ? state.correct + 1 : state.correct,
        missed: isCorrect ? state.missed : [...state.missed, state.index],
      };
    }
    case "NEXT": {
      if (state.phase !== "feedback") return state;
      return { ...state, phase: "question", index: state.index + 1, picked: null };
    }
  }
}

const BTN =
  "border-[1.5px] border-line bg-card hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion";

/** 対比音素ペアへの復習リンク(ミニマルペア用) */
function ContrastLinks({ contrast }: { contrast: readonly [string, string] }) {
  return (
    <>
      {contrast.map((id) => {
        const p = getPhoneme(id);
        return (
          <Link
            key={id}
            href={phonemePath(p)}
            className="font-mono text-xs text-ink-soft hover:text-vermilion"
          >
            {phonemeLabel(id)}
          </Link>
        );
      })}
    </>
  );
}

/** 強勢音節を太字+ˈ印で示した単語表示 */
function StressedWord({
  syllables,
  stressIndex,
}: {
  syllables: readonly string[];
  stressIndex: number;
}) {
  return (
    <span lang="en" className="font-mono text-base">
      {syllables.map((syl, i) =>
        i === stressIndex ? (
          <span key={i} className="font-bold">
            <IPA brackets="none">ˈ</IPA>
            {syl}
          </span>
        ) : (
          <span key={i}>{syl}</span>
        ),
      )}
    </span>
  );
}

/** 結果ビューの復習1行 */
function MissedRow({ q }: { q: QuizQuestion }) {
  switch (q.type) {
    case "minimal-pair":
      return (
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span lang="en" className="font-mono">
            {q.choices[0].word} / {q.choices[1].word}
          </span>
          <ContrastLinks contrast={q.contrast} />
        </span>
      );
    case "ipa-reading":
      return (
        <span className="flex flex-wrap items-center gap-2">
          <IPA>{q.ipa}</IPA>
          <span aria-hidden="true">=</span>
          <span lang="en" className="font-mono">
            {q.choices[q.answerIndex]}
          </span>
          <span className="text-ink-soft">{q.gloss}</span>
        </span>
      );
    case "stress":
      return (
        <span className="flex flex-wrap items-center gap-2">
          <StressedWord syllables={q.word.syllables} stressIndex={q.answerIndex} />
          <span className="text-ink-soft">{q.word.gloss}</span>
        </span>
      );
  }
}

export function QuizRunner({ mode, questions, onRestart, onExit }: QuizRunnerProps) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  /* 結果ビュー */
  if (state.index >= questions.length) {
    return (
      <section className="flex max-w-2xl flex-col gap-4 border-[1.5px] border-line bg-card p-4">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          {mode.en} — RESULT
        </h2>
        <p className="text-xl font-bold">
          {questions.length}問中 {state.correct}問正解
        </p>
        {state.missed.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <h3 className="font-mono text-[11px] tracking-[.12em] text-ink-faint">
              復習
            </h3>
            <ul className="flex flex-col gap-1.5 text-sm">
              {state.missed.map((qi) => (
                <li key={qi}>
                  <MissedRow q={questions[qi]} />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onRestart}
            className={`${BTN} px-3 py-1.5 text-sm`}
          >
            もう一度
          </button>
          <button
            type="button"
            onClick={onExit}
            className={`${BTN} px-3 py-1.5 text-sm`}
          >
            モード選択へ
          </button>
        </div>
      </section>
    );
  }

  const q = questions[state.index];
  const locked = state.phase === "feedback";
  const isCorrect = locked && state.picked === q.answerIndex;
  const isLast = state.index === questions.length - 1;
  const answer = (i: number) =>
    dispatch({ type: "ANSWER", picked: i, answerIndex: q.answerIndex });

  return (
    <section className="flex max-w-2xl flex-col gap-4">
      {/* ヘッダー行: 進行状況 + 正解数 + 中断 */}
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[.12em] text-ink-faint">
        <span>
          {mode.en} — Q {state.index + 1} / {questions.length}
        </span>
        <span className="flex items-center gap-3">
          <span>正解 {state.correct}</span>
          <button
            type="button"
            onClick={onExit}
            className={`${BTN} px-2 py-1 text-ink-soft`}
          >
            中断してモード選択へ
          </button>
        </span>
      </div>

      {/* 問題エリア */}
      {q.type === "minimal-pair" ? (
        <MinimalPairQ q={q} picked={state.picked} locked={locked} onPick={answer} />
      ) : q.type === "ipa-reading" ? (
        <IpaReadingQ q={q} picked={state.picked} locked={locked} onPick={answer} />
      ) : (
        <StressQ q={q} picked={state.picked} locked={locked} onPick={answer} />
      )}

      {/* フィードバックエリア */}
      {locked && (
        <div className="flex flex-col gap-3 border-t border-line pt-3">
          <p
            className={`font-mono text-sm ${isCorrect ? "text-ink" : "text-vermilion"}`}
          >
            {isCorrect ? "○ 正解" : "× 不正解"}
          </p>
          {q.type === "minimal-pair" && (
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-ink-faint">復習:</span>
              <ContrastLinks contrast={q.contrast} />
            </p>
          )}
          {q.type === "ipa-reading" && (
            <p className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-ink-faint">正解:</span>
              <span lang="en" className="font-mono text-base font-bold">
                {q.choices[q.answerIndex]}
              </span>
              <span className="text-ink-soft">{q.gloss}</span>
              <SpeakButton text={q.ttsText} />
            </p>
          )}
          {q.type === "stress" && (
            <p className="flex flex-wrap items-center gap-2 text-sm">
              <StressedWord
                syllables={q.word.syllables}
                stressIndex={q.answerIndex}
              />
              <SpeakButton text={q.word.word} />
            </p>
          )}
          <button
            type="button"
            onClick={() => dispatch({ type: "NEXT" })}
            className={`${BTN} self-start px-3 py-1.5 text-sm`}
          >
            {isLast ? "結果を見る →" : "次へ →"}
          </button>
        </div>
      )}
    </section>
  );
}
