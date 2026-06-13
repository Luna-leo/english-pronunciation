import type { Metadata } from "next";
import { PhonemeDetail } from "@/components/phoneme/PhonemeDetail";
import { Crumbs } from "@/components/ui/Crumbs";
import { FootNav } from "@/components/ui/FootNav";
import { getVowel } from "@/lib/data/phonemes";
import { VOWELS } from "@/lib/data/vowels";

export const dynamicParams = false;

export function generateStaticParams() {
  return VOWELS.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const v = getVowel(id);
  return {
    title: `/${v.symbol}/ ${v.keyword.word} — 母音 | English Pronunciation`,
    description: v.nameJa,
  };
}

export default async function VowelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const v = getVowel(id);
  return (
    <main className="flex flex-1 flex-col gap-6 pb-4 pt-2">
      <Crumbs
        items={[
          { label: "HOME", href: "/" },
          { label: "VOWELS", href: "/vowels" },
          { label: v.id.toUpperCase() },
        ]}
      />
      <PhonemeDetail phoneme={v} />
      <FootNav
        items={[
          { label: "VOWELS", href: "/vowels" },
          { label: "HOME", href: "/" },
        ]}
      />
    </main>
  );
}
