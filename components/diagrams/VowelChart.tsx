import Link from "next/link";
import type { ReactNode } from "react";
import { IPA } from "@/components/ui/IPA";
import { VOWELS } from "@/lib/data/vowels";
import type { ChartPoint, Vowel } from "@/lib/types";

/* 正規化チャート座標 → SVG px(viewBox 400×300)。他の図でも使えるよう export */
export const yPx = (y: number) => 30 + y * 240;
export const xPx = (x: number, y: number) => {
  const left = 60 + y * 120; // 台形: 開口が広いほど左辺が内側へ寄る
  return left + x * (360 - left);
};

const JP_FONT = { fontFamily: "var(--jp)" } as const;
const IPA_FONT = { fontFamily: "var(--ipa)" } as const;

function isMono(pos: Vowel["chartPos"]): pos is ChartPoint {
  return "x" in pos;
}

interface VowelChartProps {
  highlightId?: string;
  interactive?: boolean;
  className?: string;
}

/** 母音台形チャート(製図風)。interactive=索引用リンク付き / highlightId=詳細ページ用ハイライト */
export function VowelChart({ highlightId, interactive = false, className }: VowelChartProps) {
  const monos = VOWELS.flatMap((v) => (isMono(v.chartPos) ? [{ v, pos: v.chartPos }] : []));
  const highlighted = highlightId ? VOWELS.find((v) => v.id === highlightId) : undefined;

  let highlightNode: ReactNode = null;
  let needsArrow = false;
  if (highlighted) {
    const pos = highlighted.chartPos;
    if (isMono(pos)) {
      const cx = xPx(pos.x, pos.y);
      const cy = yPx(pos.y);
      highlightNode = (
        <g>
          <circle cx={cx} cy={cy} r={5} fill="var(--vermilion)" />
          <text x={cx + 10} y={cy + 5} fill="var(--ink)" fontSize={16} style={IPA_FONT}>
            {highlighted.symbol}
          </text>
        </g>
      );
    } else {
      // 二重母音: 始点ドット + 朱の矢印(始点→終点)
      needsArrow = true;
      const x1 = xPx(pos.from.x, pos.from.y);
      const y1 = yPx(pos.from.y);
      const x2 = xPx(pos.to.x, pos.to.y);
      const y2 = yPx(pos.to.y);
      highlightNode = (
        <g>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--vermilion)"
            strokeWidth={2}
            markerEnd="url(#vowel-chart-arrow)"
          />
          <circle cx={x1} cy={y1} r={3.5} fill="var(--vermilion)" />
          <text x={x1 + 8} y={y1 + 14} fill="var(--ink)" fontSize={16} style={IPA_FONT}>
            {highlighted.symbol}
          </text>
        </g>
      );
    }
  }

  return (
    <div className={"relative " + (className ?? "")}>
      <svg viewBox="0 0 400 300" aria-hidden="true" className="block w-full">
        {needsArrow && (
          <defs>
            <marker
              id="vowel-chart-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0 0 L8 4 L0 8 Z" fill="var(--vermilion)" />
            </marker>
          </defs>
        )}

        {/* 台形外形 */}
        <path
          d="M60 30 L360 30 L360 270 L180 270 Z"
          fill="none"
          stroke="var(--line)"
          strokeWidth={1.5}
        />

        {/* 内部ガイド(破線): 横2本(y=1/3, 2/3) + 斜め2本(x=1/3, 2/3) */}
        <line
          x1={xPx(0, 1 / 3)}
          y1={110}
          x2={360}
          y2={110}
          stroke="var(--ink-faint)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <line
          x1={xPx(0, 2 / 3)}
          y1={190}
          x2={360}
          y2={190}
          stroke="var(--ink-faint)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <line
          x1={xPx(1 / 3, 0)}
          y1={30}
          x2={xPx(1 / 3, 1)}
          y2={270}
          stroke="var(--ink-faint)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <line
          x1={xPx(2 / 3, 0)}
          y1={30}
          x2={xPx(2 / 3, 1)}
          y2={270}
          stroke="var(--ink-faint)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />

        {/* 軸ラベル */}
        <text x={60} y={18} fill="var(--ink-soft)" fontSize={11} style={JP_FONT}>
          前舌
        </text>
        <text x={360} y={18} textAnchor="end" fill="var(--ink-soft)" fontSize={11} style={JP_FONT}>
          後舌
        </text>
        <text x={50} y={34} textAnchor="end" fill="var(--ink-soft)" fontSize={11} style={JP_FONT}>
          狭
        </text>
        <text x={170} y={272} textAnchor="end" fill="var(--ink-soft)" fontSize={11} style={JP_FONT}>
          広
        </text>

        {/* 単母音: interactive=ドットのみ(記号はHTMLリンク側) / 非interactive=文脈用の薄い記号 */}
        {interactive
          ? monos.map(({ v, pos }) => (
              <circle
                key={v.id}
                cx={xPx(pos.x, pos.y)}
                cy={yPx(pos.y)}
                r={3}
                fill="var(--ink-faint)"
              />
            ))
          : monos
              .filter(({ v }) => v.id !== highlightId)
              .map(({ v, pos }) => (
                <text
                  key={v.id}
                  x={xPx(pos.x, pos.y)}
                  y={yPx(pos.y) + 4}
                  textAnchor="middle"
                  fill="var(--ink-faint)"
                  fontSize={13}
                  style={IPA_FONT}
                >
                  {v.symbol}
                </text>
              ))}

        {highlightNode}
      </svg>

      <p className="sr-only">母音チャート(舌の前後と口の開き)</p>

      {/* interactive: 記号をリンクとして svg 上に重ねる(二重母音は対象外 — 一覧側に出す) */}
      {interactive &&
        monos.map(({ v, pos }) => (
          <Link
            key={v.id}
            href={"/vowels/" + v.id}
            className="absolute font-ipa text-ink hover:text-vermilion focus-visible:outline-2 focus-visible:outline-vermilion"
            style={{
              left: `${(xPx(pos.x, pos.y) / 400) * 100}%`,
              top: `${(yPx(pos.y) / 300) * 100}%`,
              transform: "translate(-50%,-110%)",
            }}
          >
            <IPA brackets="none" className="text-[15px]">
              {v.symbol}
            </IPA>
          </Link>
        ))}
    </div>
  );
}
