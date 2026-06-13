"use client";

import { useId } from "react";
import { RATE_NORMAL } from "./speechManager";
import { useSpeech } from "./useSpeech";

interface SpeakButtonProps {
  /** 読み上げるテキスト(呼び出し側で ttsText ?? word を渡す) */
  text: string;
  rate?: number;
  label?: string;
  ariaLabel?: string;
  className?: string;
}

export function SpeakButton({
  text,
  rate = RATE_NORMAL,
  label = "PLAY",
  ariaLabel,
  className,
}: SpeakButtonProps) {
  const id = useId();
  const { speak, cancel, playing, supported } = useSpeech(id);
  const disabled = supported === false;
  return (
    <button
      type="button"
      onClick={() => (playing ? cancel() : speak(text, rate))}
      disabled={disabled}
      aria-pressed={playing}
      aria-label={ariaLabel ?? `${text} を再生`}
      title={disabled ? "この環境では音声合成を利用できません" : undefined}
      className={`inline-flex shrink-0 items-center gap-1.5 border-[1.5px] border-line bg-card px-2 py-1 font-mono text-[11px] tracking-[.12em] text-ink hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion disabled:cursor-not-allowed disabled:opacity-40 ${className ?? ""}`}
    >
      {/* 再生中は朱の点(静的な色変化のみ — reduced-motion 安全) */}
      <span
        aria-hidden="true"
        className={`inline-block size-[7px] ${playing ? "bg-vermilion" : "border border-ink-faint"}`}
      />
      {label}
    </button>
  );
}
