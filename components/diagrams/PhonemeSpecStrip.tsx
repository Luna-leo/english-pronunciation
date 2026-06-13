import Link from "next/link";
import { IPA } from "@/components/ui/IPA";
import { getPhoneme, phonemePath } from "@/lib/data/phonemes";
import type { Consonant, Manner, Place } from "@/lib/types";

const PLACE_JA: Record<Place, string> = {
  bilabial: "両唇音",
  labiodental: "唇歯音",
  dental: "歯音",
  alveolar: "歯茎音",
  postalveolar: "後部歯茎音",
  palatal: "硬口蓋音",
  velar: "軟口蓋音",
  glottal: "声門音",
};

const MANNER_JA: Record<Manner, string> = {
  plosive: "破裂音",
  fricative: "摩擦音",
  affricate: "破擦音",
  nasal: "鼻音",
  liquid: "流音",
  glide: "半母音",
};

const TH = "border border-line bg-card px-3 py-1 font-mono text-[10px] tracking-[.12em] text-ink-faint";
const TD = "border border-line p-2 text-center font-jp text-sm text-ink";

/** 表題欄風の1行スペック表(子音詳細ページ用) */
export function PhonemeSpecStrip({ consonant }: { consonant: Consonant }) {
  const pair = consonant.voicedPair ? getPhoneme(consonant.voicedPair) : undefined;
  return (
    <table className="border-collapse border-[1.5px] border-line">
      <caption className="sr-only">音素の諸元</caption>
      <thead>
        <tr>
          <th scope="col" className={TH}>
            調音位置
          </th>
          <th scope="col" className={TH}>
            調音方法
          </th>
          <th scope="col" className={TH}>
            有声性
          </th>
          {pair && (
            <th scope="col" className={TH}>
              対の音素
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={TD}>{PLACE_JA[consonant.place]}</td>
          <td className={TD}>{MANNER_JA[consonant.manner]}</td>
          <td className={TD}>{consonant.voiced ? "有声" : "無声"}</td>
          {pair && (
            <td className={TD}>
              <Link
                href={phonemePath(pair)}
                className="hover:text-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
              >
                <IPA>{pair.symbol}</IPA>
              </Link>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
}
