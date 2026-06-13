import type { Metadata } from "next";
import Link from "next/link";
import { ConsonantTable } from "@/components/diagrams/ConsonantTable";
import { VowelChart } from "@/components/diagrams/VowelChart";
import { Crumbs } from "@/components/ui/Crumbs";
import { IPA } from "@/components/ui/IPA";
import { Note } from "@/components/ui/Note";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "発音記号の基礎 | English Pronunciation",
};

/** 英単語をデータとして示すときの技術ラベル表記 */
function En({ children }: { children: string }) {
  return <span className="font-mono text-[11px] tracking-[.12em]">{children}</span>;
}

export default function BasicsPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 py-4">
      <Crumbs items={[{ label: "HOME", href: "/" }, { label: "BASICS" }]} />
      <PageHeader
        code="SEC 01 / IPA BASICS"
        title="発音記号の基礎"
        lede="発音記号(IPA)が読めると、辞書だけで正しい発音にたどり着ける。最初に表記の約束を覚えてしまうのが近道。"
      />

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          01 — 発音記号(IPA)とは
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
          IPA(国際音声記号)は、世界中の言語の音を書き表すために作られた共通の記号体系だ。原則は「1つの記号が1つの音を表す」こと。つづり字と違って読み方に例外がないので、記号の読み方さえ覚えれば、初めて見る単語でも辞書の表記から正しい音を組み立てられる。
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
          一方、英語のつづりは発音と一致しないことが多い。たとえば <En>ough</En> は、
          <En>though</En> <IPA>ðoʊ</IPA>・<En>through</En> <IPA>θruː</IPA>・<En>tough</En>{" "}
          <IPA>tʌf</IPA> と、同じ4文字なのに読み方がすべて違う。つづりから発音を推測するのではなく、記号で音を確認する価値はここにある。
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          02 — 表記の約束
        </h2>
        <dl className="max-w-3xl divide-y divide-line border-[1.5px] border-line bg-card">
          <div className="flex items-baseline gap-4 px-4 py-3">
            <dt className="w-14 shrink-0 font-mono text-sm">/　/</dt>
            <dd className="text-sm leading-relaxed text-ink-soft">
              スラッシュ — 音素表記(意味の区別に効く音の単位)。本サイトは基本この表記。
            </dd>
          </div>
          <div className="flex items-baseline gap-4 px-4 py-3">
            <dt className="w-14 shrink-0 font-mono text-sm">[　]</dt>
            <dd className="text-sm leading-relaxed text-ink-soft">
              角括弧 — 精密表記(実際の音)。たたき音 <IPA brackets="square">ɾ</IPA>{" "}
              などで使用。
            </dd>
          </div>
          <div className="flex items-baseline gap-4 px-4 py-3">
            <dt className="w-14 shrink-0 text-sm">
              <IPA brackets="none">ˈ</IPA>
            </dt>
            <dd className="text-sm leading-relaxed text-ink-soft">
              第1強勢 — 直後の音節を最も強く読む。<IPA>əˈbaʊt</IPA> (<En>about</En>)
            </dd>
          </div>
          <div className="flex items-baseline gap-4 px-4 py-3">
            <dt className="w-14 shrink-0 text-sm">
              <IPA brackets="none">ˌ</IPA>
            </dt>
            <dd className="text-sm leading-relaxed text-ink-soft">
              第2強勢 — 第1強勢の次に強い音節。<IPA>ˌɪntɚˈnæʃnəl</IPA> (
              <En>international</En>)
            </dd>
          </div>
          <div className="flex items-baseline gap-4 px-4 py-3">
            <dt className="w-14 shrink-0 text-sm">
              <IPA brackets="none">ː</IPA>
            </dt>
            <dd className="text-sm leading-relaxed text-ink-soft">
              長音 — 直前の母音を長く。ただし <IPA>iː</IPA> と <IPA>ɪ</IPA>{" "}
              は長さだけでなく音色も違う点に注意。
            </dd>
          </div>
        </dl>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          03 — 辞書による表記の違い
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
          同じ音でも、辞書によって使う記号が違うことがある。別の表記を見かけても、別の音とは限らない。代表的な揺れは次のとおり。
        </p>
        <table className="max-w-xl border-[1.5px] border-line bg-card text-sm">
          <thead>
            <tr className="border-b border-line text-left font-mono text-[11px] tracking-[.12em] text-ink-faint">
              <th scope="col" className="px-4 py-2 font-normal">
                音
              </th>
              <th scope="col" className="px-4 py-2 font-normal">
                本サイト
              </th>
              <th scope="col" className="px-4 py-2 font-normal">
                別の表記の例
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            <tr>
              <td className="px-4 py-2 text-ink-soft">
                <En>dress</En> の母音
              </td>
              <td className="px-4 py-2">
                <IPA>ɛ</IPA>
              </td>
              <td className="px-4 py-2 text-ink-soft">
                <IPA>e</IPA>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-ink-soft">R音性の弱母音</td>
              <td className="px-4 py-2">
                <IPA>ɚ</IPA>
              </td>
              <td className="px-4 py-2 text-ink-soft">
                <IPA>ər</IPA>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-ink-soft">
                <En>goat</En> の母音
              </td>
              <td className="px-4 py-2">
                <IPA>oʊ</IPA>
              </td>
              <td className="px-4 py-2 text-ink-soft">
                <IPA>ou</IPA>
              </td>
            </tr>
          </tbody>
        </table>
        <Note className="max-w-3xl">
          本サイトの規約: GA(アメリカ英語)基準。長母音は <IPA brackets="none">ː</IPA>{" "}
          付き、R音性母音は <IPA>ɚ</IPA> / <IPA>ɝː</IPA>、goat の母音は <IPA>oʊ</IPA>{" "}
          で表記する。
        </Note>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          04 — GAの母音(クリックで各ページへ)
        </h2>
        <VowelChart interactive className="max-w-xl" />
        <p className="max-w-3xl text-xs text-ink-faint">
          二重母音(<IPA brackets="none">eɪ aɪ ɔɪ aʊ oʊ</IPA>
          )は動きのある母音のためチャートには載せていない — 母音ページの一覧から。
        </p>
        <Link
          href="/vowels"
          className="self-start font-mono text-xs tracking-[.12em] hover:text-vermilion"
        >
          SEC 02 / VOWELS →
        </Link>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-line pb-1 font-mono text-xs tracking-[.12em] text-ink-soft">
          05 — GAの子音(クリックで各ページへ)
        </h2>
        <ConsonantTable className="max-w-3xl" />
        <Link
          href="/consonants"
          className="self-start font-mono text-xs tracking-[.12em] hover:text-vermilion"
        >
          SEC 03 / CONSONANTS →
        </Link>
      </section>
    </main>
  );
}
