# English Pronunciation — 英語発音練習

日本語話者向けの英語発音練習アプリ。発音記号(IPA)と音声で、母音・子音から強勢・リズム・イントネーション、音のつながりまでを学べる。ENG-APPS 群のアプリケーションとして、[ENG-APPS デザインシステム](docs/design.md)（技術図面モチーフ）に従って構築する。

音声は Web Speech API（`speechSynthesis`）を利用するため、OS の音声合成が使えるブラウザで動作する。

## 機能

学習マップ（トップページ）から各セクションへ。

- **音の基礎**
  - `/basics` — 発音記号(IPA)の読み方と表記の約束、GA 音素の全体図
  - `/vowels` — 母音 17 音素。母音チャート（舌の位置・口の開き）と音素別の詳細
  - `/consonants` — 子音 24 音素。調音位置 × 調音方法の表と音素別の詳細
- **連続音声**
  - `/prosody` — 超分節音 5 トピック（語強勢・弱化/シュワ・文強勢・弱形・イントネーション）
  - `/connected` — 連結現象 5 トピック（連結・脱落・同化・たたき音化・短縮形）
- **練習・ツール**
  - `/quiz` — クイズ 3 形式（ミニマルペア聞き分け・発音記号読み・強勢位置）
  - `/lookup` — 単語を入力して発音記号を検索（`public/dict` の辞書を引く）

各ページで例単語・例文を音声で再生できる（標準速度／低速）。

## 技術スタック

- Next.js 16（App Router・Turbopack）
- React 19 / TypeScript
- Tailwind CSS v4（CSSファースト構成 — 設定は `app/globals.css` に集約。`tailwind.config` なし）
- フォントはOS同梱スタックのみ（Webフォント不使用 — イントラ前提）
- 音声: Web Speech API（`speechSynthesis`）

## データ

- 学習コンテンツ（音素・トピック・クイズ）は `lib/data/` の TS モジュールに静的に保持し、`lib/types.ts` の型で `satisfies` 検証する。
- `/lookup` の発音記号辞書は [ipa-dict](https://github.com/open-dict-data/ipa-dict)（MIT）由来。`data/ipa-dict/en_US.txt` を `npm run dict:build` で頭文字シャード（`public/dict/{a..z,other}.json`）に変換して配信する。出典は [data/ipa-dict/ATTRIBUTION.md](data/ipa-dict/ATTRIBUTION.md)。

## 開発

```bash
npm install
npm run dev   # http://localhost:3000
```

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド（型チェック含む） |
| `npm run start` | 本番ビルドの配信（要 `build`） |
| `npm run lint` | ESLint |
| `npm run dict:build` | `/lookup` 用の辞書シャードを再生成 |

## デザイン・実装規約

- デザイン定義: [docs/design.md](docs/design.md)（配色トークン・タイポグラフィ・禁則・アプリシェル仕様）
- トークンの実装の正: `app/globals.css` の `:root`
- ページ追加時の作法（`<main className="flex-1">` を自前で持つ等）: docs/design.md §6
- エージェント向け規約: [AGENTS.md](AGENTS.md)
