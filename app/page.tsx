import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

// design.md 付録A の ZONE 区画(ZONE 0n / 1ゾーン2〜3枚 / 3カラム)に準拠。
// tag は ZONE番号-連番(§A.3 / §A.5)。
const ZONES = [
  {
    no: "01",
    titleJa: "音の基礎",
    en: "SOUNDS",
    desc: "発音記号の読み方と、母音・子音を一つずつ。",
    items: [
      {
        tag: "01-A",
        en: "BASICS",
        titleJa: "発音記号の基礎",
        desc: "発音記号(IPA)の読み方と表記の約束。GA音素の全体図。",
        path: "/basics",
      },
      {
        tag: "01-B",
        en: "VOWELS",
        titleJa: "母音",
        desc: "17音素。チャートで舌の位置と口の開きを確認。",
        path: "/vowels",
      },
      {
        tag: "01-C",
        en: "CONSONANTS",
        titleJa: "子音",
        desc: "24音素。調音位置×調音方法の表から学ぶ。",
        path: "/consonants",
      },
    ],
  },
  {
    no: "02",
    titleJa: "連続音声",
    en: "IN SPEECH",
    desc: "語や文の中で音がどう変化するか。",
    items: [
      {
        tag: "02-A",
        en: "PROSODY",
        titleJa: "超分節音",
        desc: "語強勢・文強勢・リズム・弱形・イントネーション。",
        path: "/prosody",
      },
      {
        tag: "02-B",
        en: "CONNECTED",
        titleJa: "連結現象",
        desc: "連結・脱落・同化・たたき音化・短縮形。",
        path: "/connected",
      },
    ],
  },
  {
    no: "03",
    titleJa: "練習・ツール",
    en: "TOOLS",
    desc: "学んだ内容を試す・調べる。",
    items: [
      {
        tag: "03-A",
        en: "QUIZ",
        titleJa: "クイズ",
        desc: "ミニマルペア聞き分け・発音記号読み・強勢位置。",
        path: "/quiz",
      },
      {
        tag: "03-B",
        en: "LOOKUP",
        titleJa: "発音記号検索",
        desc: "単語を入力して発音記号と音声を確認。",
        path: "/lookup",
      },
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6 pb-4 pt-2">
      <PageHeader
        code="INDEX / 学習マップ"
        title="英語発音練習"
        lede="発音記号の読み方から、母音・子音、強勢・リズム・イントネーション(超分節音)、音のつながり(連結現象)まで。音声を聞きながら学べます。"
      />
      {/* ZONE 区画(付録A): 3カラム。≤1020px(lg未満)で縦積みにフォールバック */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
        {ZONES.map((zone, i) => (
          <section
            key={zone.no}
            className={
              "flex flex-col gap-3" +
              // 2列目以降: 縦積み時は上に破線横罫 / 3カラム時はゾーン間の破線縦罫
              (i > 0
                ? " border-t border-dashed border-ink-faint pt-6 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0"
                : "")
            }
          >
            {/* zone-head: 紺地白抜き「ZONE 0n」+ タイトル + 英コード + 一行説明 + 破線下罫 */}
            <div className="flex flex-col gap-1.5 border-b border-dashed border-ink-faint pb-2">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="bg-ink px-1.5 py-0.5 font-mono text-[11px] tracking-[.18em] text-paper">
                  ZONE {zone.no}
                </span>
                <h2 className="text-sm font-bold tracking-[.12em]">{zone.titleJa}</h2>
                <span className="font-mono text-[11px] tracking-[.2em] text-ink-faint">
                  {zone.en}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-ink-faint">{zone.desc}</p>
            </div>

            {/* カード縦積み。markup は現状を踏襲し、num → tag のみ差し替え */}
            <ol className="flex flex-col gap-2">
              {zone.items.map((s) => (
                <li key={s.tag}>
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
                      {s.tag} / {s.en}
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
          </section>
        ))}
      </div>
    </main>
  );
}
