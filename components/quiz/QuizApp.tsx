"use client";

import { useState } from "react";
import {
  generateIpaReadingQuestions,
  generateMinimalPairQuestions,
  generateStressQuestions,
  QUESTIONS_PER_SESSION,
} from "@/lib/quiz/generate";
import type { QuizQuestion } from "@/lib/types";
import { QuizRunner } from "./QuizRunner";

interface QuizMode {
  key: "minimal-pair" | "ipa-reading" | "stress";
  en: string;
  ja: string;
  desc: string;
  /** Math.random を使うため、必ずクリックハンドラ内からのみ呼ぶ(SSR/render中は禁止) */
  gen: (n: number) => QuizQuestion[];
}

const MODES: QuizMode[] = [
  {
    key: "minimal-pair",
    en: "MINIMAL PAIRS",
    ja: "ミニマルペア聞き分け",
    desc: "音声を聞いて、2つの紛らわしい単語のどちらかを当てる。",
    gen: generateMinimalPairQuestions,
  },
  {
    key: "ipa-reading",
    en: "IPA READING",
    ja: "発音記号読み",
    desc: "発音記号を読んで、対応する単語を4択から選ぶ。",
    gen: generateIpaReadingQuestions,
  },
  {
    key: "stress",
    en: "STRESS",
    ja: "強勢位置",
    desc: "単語の中で最も強く読む音節を選ぶ。",
    gen: generateStressQuestions,
  },
];

interface Session {
  mode: QuizMode;
  questions: QuizQuestion[];
}

export function QuizApp() {
  const [session, setSession] = useState<Session | null>(null);
  /** 再挑戦時に QuizRunner を key で確実に再マウントするための連番 */
  const [sessionId, setSessionId] = useState(0);

  const start = (mode: QuizMode) => {
    setSession({ mode, questions: mode.gen(QUESTIONS_PER_SESSION) });
    setSessionId((id) => id + 1);
  };

  if (session === null) {
    return (
      <div className="grid max-w-4xl gap-2 md:grid-cols-3">
        {MODES.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => start(m)}
            className="flex flex-col gap-1 border-[1.5px] border-line bg-card p-4 text-left hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
          >
            <span className="font-mono text-[11px] tracking-[.32em] text-ink-faint">
              {m.en}
            </span>
            <span className="text-base font-bold tracking-[.12em]">{m.ja}</span>
            <span className="text-sm leading-relaxed text-ink-soft">{m.desc}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <QuizRunner
      key={sessionId}
      mode={session.mode}
      questions={session.questions}
      onRestart={() => start(session.mode)}
      onExit={() => setSession(null)}
    />
  );
}
