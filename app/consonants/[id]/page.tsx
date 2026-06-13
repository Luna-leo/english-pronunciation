import type { Metadata } from "next";
import { PhonemeDetail } from "@/components/phoneme/PhonemeDetail";
import { Crumbs } from "@/components/ui/Crumbs";
import { CONSONANTS } from "@/lib/data/consonants";
import { getConsonant } from "@/lib/data/phonemes";

export const dynamicParams = false;

export function generateStaticParams() {
  return CONSONANTS.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const c = getConsonant(id);
  return {
    title: `/${c.symbol}/ ${c.keyword.word} — 子音 | English Pronunciation`,
    description: c.nameJa,
  };
}

export default async function ConsonantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const c = getConsonant(id);
  return (
    <main className="flex flex-1 flex-col gap-6 py-4">
      <Crumbs
        items={[
          { label: "HOME", href: "/" },
          { label: "CONSONANTS", href: "/consonants" },
          { label: c.id.toUpperCase() },
        ]}
      />
      <PhonemeDetail phoneme={c} />
    </main>
  );
}
