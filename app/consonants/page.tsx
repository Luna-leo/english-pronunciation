import type { Metadata } from "next";
import Link from "next/link";
import { ConsonantTable } from "@/components/diagrams/ConsonantTable";
import { Crumbs } from "@/components/ui/Crumbs";
import { IPA } from "@/components/ui/IPA";
import { PageHeader } from "@/components/ui/PageHeader";
import { CONSONANTS } from "@/lib/data/consonants";
import type { Manner } from "@/lib/types";

export const metadata: Metadata = {
  title: "子音 | English Pronunciation",
  description: "GA(アメリカ英語)の子音24音素",
};

const GROUPS: readonly { key: Manner; label: string }[] = [
  { key: "plosive", label: "破裂音" },
  { key: "fricative", label: "摩擦音" },
  { key: "affricate", label: "破擦音" },
  { key: "nasal", label: "鼻音" },
  { key: "liquid", label: "流音" },
  { key: "glide", label: "半母音" },
];

export default function ConsonantsPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 py-4">
      <Crumbs items={[{ label: "HOME", href: "/" }, { label: "CONSONANTS" }]} />
      <PageHeader
        code="SEC 03 / CONSONANTS"
        title="子音"
        lede="GA(アメリカ英語)の子音24音素。表は調音位置(横)×調音方法(縦)。記号をクリックすると各音素の解説へ。"
      />

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          01 — 子音表
        </h2>
        <ConsonantTable className="max-w-3xl" />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          02 — 一覧
        </h2>
        {GROUPS.map((g) => (
          <div key={g.key} className="flex flex-col gap-2">
            <h3 className="text-sm font-bold">{g.label}</h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {CONSONANTS.filter((c) => c.manner === g.key).map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/consonants/${c.id}`}
                    className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 border-[1.5px] border-line bg-card px-3 py-2 hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
                  >
                    <IPA className="w-14 shrink-0 text-lg">{c.symbol}</IPA>
                    <span lang="en" className="w-20 shrink-0 font-mono text-sm">
                      {c.keyword.word}
                    </span>
                    <span className="text-sm text-ink-soft">{c.nameJa}</span>
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
    </main>
  );
}
