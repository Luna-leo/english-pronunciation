# English Pronunciation — 英語発音練習

英語発音練習アプリ。ENG-APPS 群のアプリケーションとして、[ENG-APPS デザインシステム](docs/design.md)（技術図面モチーフ）に従って構築する。

機能は現在準備中（アプリシェルのみ実装済み）。

## 技術スタック

- Next.js 16（App Router・Turbopack）
- React 19 / TypeScript
- Tailwind CSS v4（CSSファースト構成 — 設定は `app/globals.css` に集約。`tailwind.config` なし）
- フォントはOS同梱スタックのみ（Webフォント不使用 — イントラ前提）

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

## デザイン・実装規約

- デザイン定義: [docs/design.md](docs/design.md)（配色トークン・タイポグラフィ・禁則・アプリシェル仕様）
- トークンの実装の正: `app/globals.css` の `:root`
- ページ追加時の作法（`<main className="flex-1">` を自前で持つ等）: docs/design.md §6
- エージェント向け規約: [AGENTS.md](AGENTS.md)
