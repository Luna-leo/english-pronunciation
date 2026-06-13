"use client";

import { useEffect, useRef, useState } from "react";
import { isSupported, getVoice } from "./speechManager";

function voiceLabel(voice: SpeechSynthesisVoice): string {
  const n = voice.name;
  if (n.includes("Natural")) return "Edge Natural（高品質）";
  if (n.includes("Google US English")) return "Google US English（Chrome）";
  if (/Zira|David|Mark/.test(n)) return `${n.match(/Zira|David|Mark/)?.[0]}（Windows）`;
  return n.slice(0, 30);
}

/** ヘッダー右肩に常時表示する音声エンジンバッジ。ホバー/タップで詳細を展開する。 */
export function VoiceBadge() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [voiceName, setVoiceName] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ok = isSupported();
    setSupported(ok);
    if (ok) {
      getVoice().then((v) => {
        setVoiceName(v ? voiceLabel(v) : null);
      });
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  if (supported === null) return null;

  return (
    <div
      ref={ref}
      className="group/badge relative flex-none"
      data-open={open ? "" : undefined}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 border border-line px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-ink-faint hover:border-vermilion focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vermilion"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="使用中の音声エンジンを確認"
      >
        <span
          className={`inline-block h-1.5 w-1.5 ${supported ? "bg-ok" : "bg-vermilion"}`}
          aria-hidden="true"
        />
        VOICE
      </button>
      <div
        className="invisible absolute right-0 top-full z-50 mt-1 w-72 border border-line bg-card p-3 text-xs leading-relaxed text-ink-soft group-hover/badge:visible group-data-[open]/badge:visible"
        role="tooltip"
      >
        {supported ? (
          <>
            <p className="mb-2 font-mono text-[10px] tracking-[0.1em] text-ink-faint">
              WEB SPEECH API — ブラウザ内蔵
            </p>
            {voiceName && (
              <p className="mb-2">
                使用中の音声:{" "}
                <strong className="text-ink">{voiceName}</strong>
              </p>
            )}
            <p className="text-ink-faint">
              音質はブラウザと OS によって異なります。Edge(Natural)・Chrome(Google US
              English)で最高品質。
            </p>
          </>
        ) : (
          <p>
            お使いのブラウザは Web Speech API
            に対応していないため、音声再生ボタンは利用できません。
          </p>
        )}
      </div>
    </div>
  );
}
