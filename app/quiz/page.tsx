import type { Metadata } from "next";
import { QuizApp } from "@/components/quiz/QuizApp";
import { Crumbs } from "@/components/ui/Crumbs";
import { FootNav } from "@/components/ui/FootNav";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "クイズ | English Pronunciation",
  description:
    "ミニマルペアの聞き分け・発音記号の読み取り・強勢位置のクイズ。1セッション10問。",
};

export default function QuizPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 pb-4 pt-2">
      <Crumbs items={[{ label: "HOME", href: "/" }, { label: "QUIZ" }]} />
      <PageHeader
        code="SEC 06 / QUIZ"
        title="クイズ"
        lede="ミニマルペアの聞き分け・発音記号の読み取り・強勢位置。1セッション10問。問題は音素データから自動生成される。"
      />
      <QuizApp />
      <FootNav items={[{ label: "HOME", href: "/" }]} />
    </main>
  );
}
