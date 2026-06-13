"use client";

import { useEffect, useState } from "react";
import { Note } from "@/components/ui/Note";
import { isSupported } from "./speechManager";

/** 音声合成が使えない環境でのみ注意書きを出す(対応環境では何も描画しない) */
export function SpeechSupportNote() {
  const [supported, setSupported] = useState<boolean | null>(null);
  useEffect(() => {
    setSupported(isSupported());
  }, []);
  if (supported !== false) return null;
  return (
    <Note>
      お使いのブラウザは音声合成(Web Speech API)に対応していないため、音声再生ボタンは利用できません。
    </Note>
  );
}
