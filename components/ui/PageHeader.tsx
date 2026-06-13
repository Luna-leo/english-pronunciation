interface PageHeaderProps {
  /** 等幅のセクションコード("SEC 03 / VOWELS") */
  code: string;
  /** ページ見出し(日本語) */
  title: string;
  /** 説明文(任意) */
  lede?: string;
}

export function PageHeader({ code, title, lede }: PageHeaderProps) {
  return (
    <header className="border-b-[1.5px] border-line pb-3">
      <p className="font-mono text-[11px] tracking-[.32em] text-ink-faint">{code}</p>
      <h1 className="mt-1 text-xl font-bold tracking-[.12em]">{title}</h1>
      {lede && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">{lede}</p>}
    </header>
  );
}
