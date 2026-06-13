import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/ui/Crumbs";
import { FootNav } from "@/components/ui/FootNav";
import { PageHeader } from "@/components/ui/PageHeader";
import { CONNECTED_TOPICS } from "@/lib/data/connected";

export const metadata: Metadata = {
  title: "連結現象 | English Pronunciation",
  description: "連結・脱落・同化・たたき音化・短縮形 — 音のつながりの現象",
};

export default function ConnectedIndexPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 pb-4 pt-2">
      <Crumbs items={[{ label: "HOME", href: "/" }, { label: "CONNECTED" }]} />
      <PageHeader
        code="SEC 05 / CONNECTED SPEECH"
        title="連結現象"
        lede="単語と単語の境目で音がつながり・落ち・変わる現象。「知っている単語なのに聞き取れない」原因の大半はここにある。"
      />
      <ol className="grid max-w-4xl gap-2">
        {CONNECTED_TOPICS.map((t, i) => (
          <li key={t.id}>
            <Link
              href={`/connected/${t.id}`}
              className="group flex flex-col gap-1 border-[1.5px] border-line bg-card p-4 hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
            >
              <span className="font-mono text-[11px] tracking-[.32em] text-ink-faint">
                {String(i + 1).padStart(2, "0")} / {t.titleEn}
              </span>
              <span className="text-base font-bold tracking-[.12em]">{t.title}</span>
              <span className="text-sm leading-relaxed text-ink-soft">{t.summary}</span>
            </Link>
          </li>
        ))}
      </ol>
      <FootNav items={[{ label: "HOME", href: "/" }]} />
    </main>
  );
}
