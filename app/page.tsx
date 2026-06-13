import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

const SECTIONS = [
  {
    num: "01",
    en: "BASICS",
    titleJa: "発音記号の基礎",
    desc: "発音記号(IPA)の読み方と表記の約束。GA音素の全体図。",
    path: "/basics",
  },
  {
    num: "02",
    en: "VOWELS",
    titleJa: "母音",
    desc: "17音素。チャートで舌の位置と口の開きを確認。",
    path: "/vowels",
  },
  {
    num: "03",
    en: "CONSONANTS",
    titleJa: "子音",
    desc: "24音素。調音位置×調音方法の表から学ぶ。",
    path: "/consonants",
  },
  {
    num: "04",
    en: "PROSODY",
    titleJa: "超分節音",
    desc: "語強勢・文強勢・リズム・弱形・イントネーション。",
    path: "/prosody",
  },
  {
    num: "05",
    en: "CONNECTED",
    titleJa: "連結現象",
    desc: "連結・脱落・同化・たたき音化・短縮形。",
    path: "/connected",
  },
  {
    num: "06",
    en: "QUIZ",
    titleJa: "クイズ",
    desc: "ミニマルペア聞き分け・発音記号読み・強勢位置。",
    path: "/quiz",
  },
  {
    num: "07",
    en: "LOOKUP",
    titleJa: "発音記号検索",
    desc: "単語を入力して発音記号と音声を確認。",
    path: "/lookup",
  },
] as const;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6 py-4">
      <PageHeader
        code="INDEX / 学習マップ"
        title="英語発音練習"
        lede="発音記号の読み方から、母音・子音、強勢・リズム・イントネーション(超分節音)、音のつながり(連結現象)まで。音声を聞きながら学べます。"
      />
      <ol className="grid gap-2 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <li key={s.num}>
            <Link
              href={s.path}
              className="group relative flex h-full flex-col gap-1 border-[1.5px] border-line bg-card p-4 hover:border-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
            >
              {/* 朱の左ライン(ホバーで上から伸長 — reduced-motion はグローバルCSSで停止) */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-vermilion transition-transform group-hover:scale-y-100"
              />
              <span className="font-mono text-[11px] tracking-[.32em] text-ink-faint">
                {s.num} / {s.en}
              </span>
              <span className="text-base font-bold tracking-[.12em]">{s.titleJa}</span>
              <span className="text-sm leading-relaxed text-ink-soft">{s.desc}</span>
              <span className="mt-auto pt-2 font-mono text-[11px] tracking-[.12em] text-ink-faint group-hover:text-vermilion">
                {s.path} →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
