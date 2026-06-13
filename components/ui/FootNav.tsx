import Link from "next/link";

export interface FootNavItem {
  label: string;
  href: string;
}

/** ページ末尾の戻りナビ: ← VOWELS / ← HOME(注記行の意匠) */
export function FootNav({ items }: { items: FootNavItem[] }) {
  return (
    <nav aria-label="戻る" className="mt-auto border-t border-line pt-3">
      <ul className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs tracking-[.12em]">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="text-ink-soft hover:text-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
            >
              <span aria-hidden>←</span> {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
