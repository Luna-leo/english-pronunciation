import Link from "next/link";

export interface Crumb {
  label: string;
  /** 省略時は現在地(リンクにしない) */
  href?: string;
}

/** 等幅のパス風パンくず: HOME / VOWELS / KIT */
export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="パンくず"
      className="sticky top-[env(safe-area-inset-top)] z-10 -my-2 border-b border-ink-faint bg-paper py-2 font-mono text-[11px] tracking-[.12em] text-ink-faint"
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
  );
}
