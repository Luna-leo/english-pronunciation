import type { ReactNode } from "react";

/** 朱の左罫の注記(線のみ — 面では使わない) */
export function Note({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`border-l-[3px] border-vermilion pl-3 text-sm leading-relaxed text-ink-soft ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
