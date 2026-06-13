import type { Metadata } from "next";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { SpeechSupportNote } from "@/components/speech/SpeechSupportNote";
import { Crumbs } from "@/components/ui/Crumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROSODY_TOPICS } from "@/lib/data/prosody";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROSODY_TOPICS.map((t) => ({ topic: t.id }));
}

function getTopic(id: string) {
  const t = PROSODY_TOPICS.find((t) => t.id === id);
  if (!t) throw new Error(`prosody: 未知のトピック "${id}"`);
  return t;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const t = getTopic(topic);
  return {
    title: `${t.title} — 超分節音 | English Pronunciation`,
    description: t.summary,
  };
}

export default async function ProsodyTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const t = getTopic(topic);
  return (
    <main className="flex flex-1 flex-col gap-6 py-4">
      <Crumbs
        items={[
          { label: "HOME", href: "/" },
          { label: "PROSODY", href: "/prosody" },
          { label: t.titleEn },
        ]}
      />
      <PageHeader code={`SEC 04 / ${t.titleEn}`} title={t.title} lede={t.summary} />
      <SpeechSupportNote />
      <BlockRenderer blocks={t.blocks} />
    </main>
  );
}
