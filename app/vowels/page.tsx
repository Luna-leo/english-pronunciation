import type { Metadata } from "next";
import Link from "next/link";
import { VowelChart } from "@/components/diagrams/VowelChart";
import { Crumbs } from "@/components/ui/Crumbs";
import { FootNav } from "@/components/ui/FootNav";
import { IPA } from "@/components/ui/IPA";
import { PageHeader } from "@/components/ui/PageHeader";
import { VOWELS } from "@/lib/data/vowels";
import type { Vowel } from "@/lib/types";

export const metadata: Metadata = {
  title: "母音 | English Pronunciation",
  description: "GA(アメリカ英語)の母音17音素",
};

const GROUPS: readonly { key: Vowel["group"]; label: string }[] = [
  { key: "lax", label: "緩母音(短母音)" },
  { key: "tense", label: "緊張母音(長母音)" },
  { key: "rhotic", label: "R音性母音" },
  { key: "diphthong", label: "二重母音" },
];

export default function VowelsPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 pb-4 pt-2">
      <Crumbs items={[{ label: "HOME", href: "/" }, { label: "VOWELS" }]} />
      <PageHeader
        code="SEC 02 / VOWELS"
        title="母音"
        lede="GA(アメリカ英語)の母音17音素。チャートは舌の位置(前後)と口の開きを表す。記号をクリックすると各音素の解説へ。"
      />

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          01 — 母音チャート(単母音)
        </h2>
        <VowelChart interactive className="max-w-xl" />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          02 — 一覧
        </h2>
        {GROUPS.map((g) => (
          <div key={g.key} className="flex flex-col gap-2">
            <h3 className="text-sm font-bold">{g.label}</h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {VOWELS.filter((v) => v.group === g.key).map((v) => (
                <li key={v.id}>
                  <Link
                    href={`/vowels/${v.id}`}
                    className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 border-[1.5px] border-line bg-card px-3 py-2 hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
                  >
                    <IPA className="w-14 shrink-0 text-lg">{v.symbol}</IPA>
                    <span lang="en" className="w-20 shrink-0 font-mono text-sm">
                      {v.keyword.word}
                    </span>
                    <span className="text-sm text-ink-soft">{v.nameJa}</span>
                    <span
                      aria-hidden
                      className="ml-auto font-mono text-xs text-ink-faint group-hover:text-vermilion"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <FootNav items={[{ label: "HOME", href: "/" }]} />
    </main>
  );
}
