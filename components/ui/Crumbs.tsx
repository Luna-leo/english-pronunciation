"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { VoiceBadge } from "@/components/speech/VoiceBadge";

export interface Crumb {
  label: string;
  /** 省略時は現在地(リンクにしない) */
  href?: string;
}

/**
 * 等幅のパス風パンくず: HOME / VOWELS / KIT
 * スクロールで上端に貼り付くと GitHub 風のコンテキストバー化し、
 * `title`(音素名 例 `/ɪ/ kit`)がスライドインする。
 */
export function Crumbs({ items, title }: { items: Crumb[]; title?: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    // スクロールコンテナは window ではなく `.sheet-body`(app/layout.tsx)。
    // 見つからなければ viewport にフォールバック。
    const root = el.closest(".sheet-body");
    // バー自身を観測。貼り付くと -my-2 によりバーの border-box 上端が
    // コンテナ上端より上(約 -8px)に来てクリップされ ratio<1 → stuck。
    // (別要素のセンチネルは main の gap-6 で余白を生むため使わない)
    const obs = new IntersectionObserver(
      ([entry]) => setStuck(entry.intersectionRatio < 1),
      { root, threshold: [1], rootMargin: "-1px 0px 0px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      data-stuck={stuck ? "" : undefined}
      className="group/crumbs sticky top-0 z-10 -my-2 py-2"
    >
      {/* 背景・下罫・影は sticky 要素自体ではなく絶対配置の子に置く。
          iOS 26 Safari は sticky/fixed 要素の background-color を拾って
          ツールバーの色付けを誤作動させるため(子に逃がすと拾われない)。
          未スクロール時は透明、貼り付くと出現(装飾なし → フローティング)。 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 border-b border-ink-faint bg-paper opacity-0 transition group-data-[stuck]/crumbs:opacity-100 group-data-[stuck]/crumbs:shadow-[0_6px_14px_-12px_rgba(22,50,79,0.5)]"
      />
      <div className="relative flex items-center justify-between gap-3">
        <nav
          aria-label="パンくず"
          className="font-mono text-[11px] tracking-[.12em] text-ink-faint"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            {items.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="text-ink-soft underline decoration-ink-faint underline-offset-[3px] hover:text-vermilion hover:decoration-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink-soft">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="flex min-w-0 items-center gap-3">
          {/* 音素名: 貼り付き時のみスライドイン。直下の大見出しと重複させないため
              未スクロール時は非表示(space は確保=レイアウトシフト防止)。
              aria-hidden — 位置はパンくず、内容は本文見出しが担うため二重読み上げを避ける。 */}
          {title && (
            <span
              aria-hidden="true"
              className="-translate-y-1 max-w-[45vw] truncate font-mono text-[12px] tracking-[.06em] text-ink opacity-0 transition group-data-[stuck]/crumbs:translate-y-0 group-data-[stuck]/crumbs:opacity-100"
            >
              {title}
            </span>
          )}
          <VoiceBadge />
        </div>
      </div>
    </div>
  );
}
