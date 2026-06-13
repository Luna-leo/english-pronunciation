"use client";

import { useId, useState, type FormEvent } from "react";
import { SpeakButton } from "@/components/speech/SpeakButton";
import { RATE_SLOW } from "@/components/speech/speechManager";
import { IPA } from "@/components/ui/IPA";
import { Note } from "@/components/ui/Note";
import { lookupWord, normalizeWord } from "@/lib/lookup/dictionary";

type LookupState =
  | { status: "idle" }
  | { status: "loading"; word: string }
  | { status: "found"; word: string; results: string[] }
  | { status: "notFound"; word: string }
  | { status: "error" };

/** 単語→IPA 検索フォーム(辞書シャードはクライアント側で fetch) */
export function LookupForm() {
  const inputId = useId();
  const [input, setInput] = useState("");
  const [state, setState] = useState<LookupState>({ status: "idle" });
  const loading = state.status === "loading";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const word = normalizeWord(input);
    if (!word) return;
    setState({ status: "loading", word });
    try {
      const results = await lookupWord(word);
      if (results && results.length > 0) {
        setState({ status: "found", word, results });
      } else {
        setState({ status: "notFound", word });
      }
    } catch {
      setState({ status: "error" });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-2">
        <label htmlFor={inputId} className="text-sm">
          単語
        </label>
        <div className="flex items-stretch gap-2">
          <input
            id={inputId}
            type="text"
            lang="en"
            spellCheck={false}
            autoComplete="off"
            placeholder="water"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full max-w-sm border-[1.5px] border-line bg-card px-3 py-2 font-mono text-sm text-ink focus-visible:outline-2 focus-visible:outline-vermilion"
          />
          <button
            type="submit"
            disabled={loading}
            className="shrink-0 border-[1.5px] border-line bg-card px-4 py-2 text-sm tracking-[.12em] text-ink hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "検索中…" : "検索"}
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {state.status === "found" && (
          <div className="flex max-w-xl flex-col gap-3 border-[1.5px] border-line bg-card p-4">
            <p lang="en" className="font-mono text-lg font-bold">
              {state.word}
            </p>
            <ul className="flex flex-col gap-1">
              {state.results.map((variant, i) => (
                <li key={i}>
                  <IPA className="text-base">{variant}</IPA>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-2">
              <SpeakButton text={state.word} />
              <SpeakButton
                text={state.word}
                rate={RATE_SLOW}
                label="SLOW"
                ariaLabel={`${state.word} をゆっくり再生`}
              />
            </div>
            <p className="text-xs text-ink-faint">
              複数表示は発音のゆれ(どれも通用する)。
            </p>
          </div>
        )}
        {state.status === "notFound" && (
          <Note>
            見つかりませんでした。つづりを確認するか、活用形は原形で(ran →
            run)、複合語は分けて試してください。
          </Note>
        )}
        {state.status === "error" && (
          <Note>辞書データを読み込めませんでした。再読み込みして試してください。</Note>
        )}
      </div>
    </div>
  );
}
