import Link from "next/link";
import { IPA } from "@/components/ui/IPA";
import { CONSONANTS } from "@/lib/data/consonants";
import type { Manner, Place } from "@/lib/types";

const PLACES: readonly { id: Place; ja: string }[] = [
  { id: "bilabial", ja: "両唇" },
  { id: "labiodental", ja: "唇歯" },
  { id: "dental", ja: "歯" },
  { id: "alveolar", ja: "歯茎" },
  { id: "postalveolar", ja: "後部歯茎" },
  { id: "palatal", ja: "硬口蓋" },
  { id: "velar", ja: "軟口蓋" },
  { id: "glottal", ja: "声門" },
];

const MANNERS: readonly { id: Manner; ja: string }[] = [
  { id: "plosive", ja: "破裂" },
  { id: "fricative", ja: "摩擦" },
  { id: "affricate", ja: "破擦" },
  { id: "nasal", ja: "鼻音" },
  { id: "liquid", ja: "流音" },
  { id: "glide", ja: "半母音" },
];

const TH = "border border-line bg-card p-1 font-jp text-[11px] text-ink-soft";

interface ConsonantTableProps {
  highlightId?: string;
  className?: string;
}

/** 子音表(調音位置×調音方法)。highlightId のセルを朱の枠線で囲む */
export function ConsonantTable({ highlightId, className }: ConsonantTableProps) {
  return (
    <table
      className={`w-full border-collapse border-[1.5px] border-line text-center ${className ?? ""}`}
    >
      <caption className="sr-only">子音表(調音位置×調音方法)</caption>
      <thead>
        <tr>
          <th scope="col" className={TH}>
            <span className="sr-only">調音方法</span>
          </th>
          {PLACES.map((p) => (
            <th key={p.id} scope="col" className={TH}>
              {p.ja}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {MANNERS.map((m) => (
          <tr key={m.id}>
            <th scope="row" className={TH}>
              {m.ja}
            </th>
            {PLACES.map((p) => {
              const cell = CONSONANTS.filter(
                (c) => c.manner === m.id && c.place === p.id,
              ).sort((a, b) => Number(a.voiced) - Number(b.voiced)); // 無声 → 有声
              const hasHighlight =
                highlightId !== undefined && cell.some((c) => c.id === highlightId);
              return (
                <td
                  key={p.id}
                  className={`border border-line p-1${
                    hasHighlight ? " outline outline-2 outline-vermilion -outline-offset-2" : ""
                  }`}
                >
                  {cell.map((c) => (
                    <Link
                      key={c.id}
                      href={"/consonants/" + c.id}
                      className={`px-1 text-ink hover:text-vermilion focus-visible:outline-2 focus-visible:outline-vermilion${
                        c.id === highlightId ? " font-bold" : ""
                      }`}
                    >
                      <IPA brackets="none" className="text-[15px]">
                        {c.symbol}
                      </IPA>
                    </Link>
                  ))}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
