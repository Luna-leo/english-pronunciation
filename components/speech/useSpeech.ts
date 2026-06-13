"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import * as speech from "./speechManager";

/**
 * @param id このボタン固有のID(useId 等)。playingId と一致したボタンだけが「再生中」になる
 */
export function useSpeech(id: string): {
  speak: (text: string, rate?: number) => void;
  cancel: () => void;
  playing: boolean;
  /** マウント前は null(SSRとの不一致回避)。false で確定したら非対応環境 */
  supported: boolean | null;
} {
  const playingId = useSyncExternalStore(
    speech.subscribe,
    speech.getPlayingId,
    () => null,
  );
  const [supported, setSupported] = useState<boolean | null>(null);
  useEffect(() => {
    setSupported(speech.isSupported());
  }, []);
  const speak = useCallback(
    (text: string, rate?: number) => speech.speak(id, text, rate),
    [id],
  );
  const cancel = useCallback(() => speech.cancel(), []);
  return { speak, cancel, playing: playingId === id, supported };
}
