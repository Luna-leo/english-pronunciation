import type { Metadata } from "next";
import { LookupForm } from "@/components/lookup/LookupForm";
import { SpeechSupportNote } from "@/components/speech/SpeechSupportNote";
import { Crumbs } from "@/components/ui/Crumbs";
import { FootNav } from "@/components/ui/FootNav";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "発音記号検索 | English Pronunciation",
  description:
    "英単語を入力すると、GA(アメリカ英語)のIPA発音記号を表示する。約12万語収録。",
};

export default function LookupPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 pb-4 pt-2">
      <Crumbs items={[{ label: "HOME", href: "/" }, { label: "LOOKUP" }]} />
      <PageHeader
        code="SEC 07 / IPA LOOKUP"
        title="発音記号検索"
        lede="英単語を入力すると、GA(アメリカ英語)の発音記号を表示する。約12万語収録。音声でも確認できる。"
      />
      <SpeechSupportNote />
      <LookupForm />
      <p className="max-w-3xl text-xs leading-relaxed text-ink-faint">
        検索結果の表記は辞書データ(ipa-dict)の流儀に従うため、本サイトの解説ページと細部が異なることがある(r
        を ɹ と書く、長音 ː を略す等)。音そのものは同じ。
      </p>
      <FootNav items={[{ label: "HOME", href: "/" }]} />
      <p className="font-mono text-[10px] tracking-[.12em] text-ink-faint">
        DATA:{" "}
        <a
          href="https://github.com/open-dict-data/ipa-dict"
          className="underline hover:text-vermilion"
        >
          ipa-dict (open-dict-data)
        </a>{" "}
        en_US
      </p>
    </main>
  );
}
