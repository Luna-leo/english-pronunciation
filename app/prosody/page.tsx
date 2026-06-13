import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/ui/Crumbs";
import { FootNav } from "@/components/ui/FootNav";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROSODY_TOPICS } from "@/lib/data/prosody";

export const metadata: Metadata = {
  title: "超分節音 | English Pronunciation",
  description: "語強勢・母音弱化・文強勢とリズム・弱形・イントネーション",
};

export default function ProsodyIndexPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 pb-4 pt-2">
      <Crumbs items={[{ label: "HOME", href: "/" }, { label: "PROSODY" }]} />
      <PageHeader
        code="SEC 04 / PROSODY"
        title="超分節音"
        lede="個々の音(分節音)の上にかぶさる、強勢・リズム・イントネーションの層。通じる発音への寄与は分節音より大きいとも言われる。上から順に学ぶのがおすすめ。"
      />
      <ol className="grid max-w-4xl gap-2">
        {PROSODY_TOPICS.map((t, i) => (
          <li key={t.id}>
            <Link
              href={`/prosody/${t.id}`}
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
