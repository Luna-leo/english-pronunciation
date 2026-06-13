import type { ReactNode } from "react";

interface IPAProps {
  /** IPA文字列(スラッシュ・角括弧なし) */
  children: ReactNode;
  /** 既定は音素表記 /.../ */
  brackets?: "slash" | "square" | "none";
  className?: string;
}

/** IPA 表示。--ipa フォントスタック+lang="en"。letter-spacing はかけないこと */
export function IPA({ children, brackets = "slash", className }: IPAProps) {
  const [open, close] =
    brackets === "slash" ? ["/", "/"] : brackets === "square" ? ["[", "]"] : ["", ""];
  return (
    <span lang="en" className={`font-ipa ${className ?? ""}`}>
      {open}
      {children}
      {close}
    </span>
  );
}
