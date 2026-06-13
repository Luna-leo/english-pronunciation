"use client";

import { useEffect, useState } from "react";
import { Note } from "@/components/ui/Note";
import { getVoice, isSupported } from "./speechManager";

function shortVoiceName(name: string): string {
  if (name.includes("Natural")) return "Edge Natural（高品質）";
  if (name.includes("Google US English")) return "Google US English（Chrome）";
  if (name.includes("Zira")) return "Microsoft Zira（Windows）";
  if (name.includes("David")) return "Microsoft David（Windows）";
  if (name.includes("Mark")) return "Microsoft Mark（Windows）";
  const base = name.split(" - ")[0];
  return base.length > 30 ? base.slice(0, 30) + "…" : base;
}

/**
 * 対応ブラウザ: 使用中の音声エンジンと特性を表示。
 * 非対応ブラウザ: 利用不可の旨を表示。
 */
export function SpeechSupportNote() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [voiceName, setVoiceName] = useState<string | null>(null);

  useEffect(() => {
    const s = isSupported();
    setSupported(s);
    if (s) {
      getVoice().then((v) => setVoiceName(v?.name ?? null));
    }
  }, []);

  if (supported === null) return null;

  if (!supported) {
    return (
      <Note>
        お使いのブラウザは音声合成(Web Speech API)に対応していないため、音声再生ボタンは利用できません。
      </Note>
    );
  }

  return (
    <Note>
      音声: ブラウザ内蔵の Web Speech API を使用
      {voiceName ? ` — 使用中の音声: ${shortVoiceName(voiceName)}` : ""}。
      音質はブラウザと OS によって異なります。Edge(Natural 音声)・Chrome(Google US
      English)で最高品質になります。
    </Note>
  );
}
