import type { Metadata } from "next";
import { BlockRenderer } from "@/components/content/BlockRenderer";
import { SpeechSupportNote } from "@/components/speech/SpeechSupportNote";
import { Crumbs } from "@/components/ui/Crumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { CONNECTED_TOPICS } from "@/lib/data/connected";

export const dynamicParams = false;

export function generateStaticParams() {
  return CONNECTED_TOPICS.map((t) => ({ topic: t.id }));
}

function getTopic(id: string) {
  const t = CONNECTED_TOPICS.find((t) => t.id === id);
  if (!t) throw new Error(`connected: 未知のトピック "${id}"`);
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
    title: `${t.title} — 連結現象 | English Pronunciation`,
    description: t.summary,
  };
}

export default async function ConnectedTopicPage({
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
          { label: "CONNECTED", href: "/connected" },
          { label: t.titleEn },
        ]}
      />
      <PageHeader code={`SEC 05 / ${t.titleEn}`} title={t.title} lede={t.summary} />
      <SpeechSupportNote />
      <BlockRenderer blocks={t.blocks} />
    </main>
  );
}
