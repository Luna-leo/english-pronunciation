# ENG-APPS デザインシステム（english-pronunciation 適用版）

ENG-APPS Portal デザイン定義書の本アプリ向け適用版。
本アプリが継承するのは **配色トークン（§2.1）・タイポグラフィ（§2.2）・形状（§2.3）・モーション原則（§3）・禁則（§4）**。
加えて、**方眼背景・図枠（二重枠+トンボ）・ヘッダー（ワードマーク+ルーラー）をアプリシェルとして全ページに適用する（§6）**。
表題欄・ZONEカード・ロードモーションは引き続き適用しない（付録A参照）。

実装の正は `app/globals.css` の `:root` CSS変数（本書と差異があれば実装側を正とし、本書を更新する）。

---

## 1. コンセプト

**「技術図面（エンジニアリングドローイング）」** — 製図文化への敬意をモチーフにした、エンジニアリング部門共通のデザイン言語。

※ポータルの「ページ全体を1枚の図面とする」レイアウトのうち、方眼・図枠（二重枠+トンボ）・ルーラーは本アプリでも**アプリシェル**として採用する（§6）。表題欄・ZONE区画は採用しない。

### トーン

静的・実用・端正。派手なグラデーションや大きな動きは使わない。
動きは「定規で引いた線が伸びる」程度の控えめなものに限る。

---

## 2. デザイントークン

### 2.1 配色（`app/globals.css` の `:root`）

| 変数 | 値 | 用途 |
|---|---|---|
| `--paper` | `#f6f4ee` | 背景（図面用紙。わずかに温かみのある白） |
| `--ink` | `#16324f` | 主文字色（製図インクの濃紺。黒は使わない） |
| `--ink-soft` | `#44586e` | 補助文字（説明文・ラベル） |
| `--ink-faint` | `#8696a7` | 弱い文字・破線罫 |
| `--line` | `#2d4763` | 枠線・罫線 |
| `--vermilion` | `#c8401f` | **朱** — アクセント。ホバー・強調・矢印。面で使わず線と点で使う |
| `--ok` | `#1a7f4e` | 稼働ステータスのドット |
| `--card` | `#fdfcf9` | カード背景（用紙よりわずかに白い） |
| `--grid-fine` / `--grid-bold` | `rgba(45,71,99,.07)` / `rgba(45,71,99,.13)` | 方眼（8px細線 / 40px太線）。原典 `index.html` と一致確認済み |

**原則**: 紺（インク）が主役、朱はアクセントのみ（画面内の朱の面積は数%に抑える）。緑はステータス専用。

#### Tailwind ユーティリティ対応（`@theme inline` 経由）

| トークン | ユーティリティ例 |
|---|---|
| `--paper` | `bg-paper` |
| `--ink` | `text-ink` |
| `--ink-soft` | `text-ink-soft` |
| `--ink-faint` | `text-ink-faint` |
| `--line` | `border-line` |
| `--vermilion` | `text-vermilion` / `border-vermilion` |
| `--ok` | `text-ok` / `bg-ok` |
| `--card` | `bg-card` |
| `--jp` | `font-jp`（`font-sans` も同スタックに設定済み） |
| `--mono` | `font-mono` |
| 方眼背景 | `bg-grid-paper`（ルートレイアウトの `body` に常時適用 — §6。他の面にも再利用可） |

### 2.2 タイポグラフィ

| 変数 | スタック | 用途 |
|---|---|---|
| `--jp` | BIZ UDPGothic → Hiragino Kaku Gothic ProN → Yu Gothic Medium → Meiryo | 日本語本文・見出し |
| `--mono` | Cascadia Mono → Consolas → Courier New | 技術ラベル全般：ワードマーク、パス表記、メタ情報、番号・日付 |

- **外部Webフォントは使わない**（イントラ前提・軽量性のため。全てOS同梱フォント）
- 「技術的な情報（パス・ID・番号・日付）は等幅、日本語の説明は UD ゴシック」と使い分けるのがこのデザインの肝
- 字間: ワードマーク `.14em` / 和文サブタイトル `.32em` / セクション見出し `.12em`（広めのレタースペースで「銘板」感を出す）

### 2.3 形状・サイズ

- 角丸は**使わない**（図面なので直角のみ）。影は図枠（§6）等のごく控えめなものに限る
- サイズトークン（`app/globals.css` の `:root` に定義。アプリシェルが使用）:
  `--pad: clamp(10px,1.6vh,22px)` / `--gap: clamp(8px,1.2vh,16px)` / `--h1: clamp(26px,3.6vh,40px)` / `--frame: min(1480px,100%)`

---

## 3. モーション原則

- 動きは控えめなものに限る（「定規で引いた線が伸びる」程度）
- `prefers-reduced-motion: reduce` で全アニメーション停止（**必須** — `app/globals.css` で実装済み）
- スクロール連動・パララックス等は不使用

---

## 4. 禁則

- 角丸・グラデーション・紫系配色・外部Webフォント・大きなモーションは使わない
- 黒(#000)の文字は使わない（インク紺 `--ink` / `text-ink` を使う）

> **実装メモ**: Tailwind テーマで `--radius-*` を無効化済みのため `rounded-sm`〜`rounded-3xl` は生成されない。ただし `rounded-full` は静的ユーティリティのため残存する — **使用禁止**。

---

## 5. 運用ルール

- トークンの変更は `app/globals.css` を先に変更し、本書 §2 を同期する
- 朱は常に少量。ボタンの面塗り等に多用しない。緑（`--ok`）はステータス専用
- 新ページ・新コンポーネントは本書 §2〜§4・§6 に従う

---

## 6. アプリシェル（図面シート）

全ページ共通のシェル。`app/layout.tsx` + `app/globals.css`（`@layer components`）で実装。

```
body（bg-grid-paper: 方眼・100dvh・flex中央・padding clamp(10px,2.2vh,26px)）
└─ .sheet（図枠: 二重枠+トンボ・幅 var(--frame)・内部は無地 --paper・flex column）
   ├─ header.sheet-head … .wordmark（等幅 --h1・字間.14em。中身は `Link href="/"` = ホームへの動線。hover/focus は朱の細下線のみ）+ .subtitle（字間.32em）+ .ruler
   └─ .sheet-body       … flex:1・min-height:0・overflow-y:auto — ページ内容はここでスクロール
```

### 高さ方針

- 通常時: 図枠を画面高（100dvh）に固定し、コンテンツは `.sheet-body` の内側でスクロール（枠・トンボ・ヘッダーは常に見える）
- `@media (max-width:1020px)`: 固定を解除し、枠ごと伸びてページ全体がスクロール
- **既知バグ（要注意）**: 固定解除時は `height` と `max-height` の**両方**を解除する（`height:auto; max-height:none; overflow:visible`）。`max-height` の解除を忘れると、図枠が画面高で閉じ、収まりきらないコンテンツが枠の外へあふれる（ポータルで過去に発生した不具合）
- `.sheet-body` の `min-height:0` を消すと内部スクロールが効かなくなる（flexの定石）
- **Safari の sticky 再描画バグ（要注意）**: 固定解除時の `body` に `overflow-x: clip`/`hidden` を**付けない**こと。`body`（sticky な `Crumbs` の祖先）に `overflow-x` を付けると、Safari ではスクロールで通り過ぎたコンテンツが画面最上部（ステータスバー帯〜パンくず上部）に残像として焼き付く（Chrome では出ない／Safari 限定）。横はみ出し対策は `overflow` ではなくワードマーク縮小（下記）で行う
- **iOS 26 Safari のステータスバー透け（仕様・対処不可）**: スマホは全体スクロールのため、半透明グラス(Liquid Glass)のステータスバー裏に本文がスクロールして薄く透ける。iOS 26 は `theme-color` を無視し、グラス帯を Web から不透明化する手段は無い（Apple Dev Forums でも確認済み／Apple 純正アプリも同挙動）。**仕様として受容**。`viewport-fit:cover` + 固定パネルでの遮蔽は効かない（Safari ブラウザ表示では `env(safe-area-inset-top)` が縦向きで 0、かつ固定要素の背景色はツールバー色付けを誤作動させ逆効果）ため使わない。やれる最善（化粧）だけ実施: (1) `html`/`body` の `background-color` を `--paper` の無地に保つ（透明 root は iOS 26 で白帯にフォールバックする）、(2) **sticky/fixed なバー(例 `Crumbs`)は背景色・`backdrop-filter` を要素自体に置かず絶対配置の子に逃がす**（iOS 26 が sticky 要素の背景を拾って誤色付けするのを防ぐ）、(3) `themeColor:"#f6f4ee"` は Android Chrome の上端バー用に残置（iOS 26 では無視される。リテラル hex は `:root` の `--paper` と同値に保つ）。透けを本当に消すには全体スクロールを止めて枠固定＋内部スクロールにするしかない（今回は不採用）
- **ワードマークの横はみ出し（要注意）**: `.wordmark` は等幅 `--h1`(≥26px)+字間.14em のため、`@media (max-width:640px)` で `font-size: clamp(14px,5.2vw,26px)` / `letter-spacing:.10em` に縮小して1行に収める（左右余白は保持・全幅化はしない）。`ENGLISH&nbsp;PRONUNCIATION` の `&nbsp;` で折り返さない前提なので、縮小を外すとスマホで枠外へあふれる

### 装飾の実装値（原典 index.html 準拠）

- 二重枠: `border:2.5px solid var(--line)` + `box-shadow: inset 0 0 0 5px var(--paper), inset 0 0 0 6px var(--line)` + 控えめな図枠の影
- トンボ: `.sheet::before/::after`、16×16px・朱2px、枠の**内側9px**（`.sheet` の `overflow:hidden` と両立）
- ルーラー: 高さ11px・10px間隔の1px目盛（高さ7px・下端基準）+ 1px下罫・`opacity:.8`
- 図枠の内部は無地の `--paper`（方眼は枠の外周にのみ見える — ポータル同様）
- ヘッダー下の余白: `.sheet-head { padding-bottom: clamp(6px,1vh,12px) }`（旧 `var(--pad)`。ルーラーとコンテンツが空きすぎないよう詰めた）

### 原典からの意図的な逸脱

1. ポータル header の `border-bottom:1.5px` は省略（lede/meta の無い簡素ヘッダーではルーラーと罫が二重になるため）
2. 狭幅時は `align-items:stretch` で、内容が少なくてもシートが画面高を満たす（原典は flex-start + 自然高）

### ページ作法

- 各ページはルートに自前の `<main>` を置く（標準は `className="flex flex-1 flex-col gap-6 pb-4 pt-2"`。main ランドマークはページが所有。ワードマークは `<p>` 内のホームリンクで見出しではないため、h1 もページ用）。上パディングは `pt-2`(8px) と控えめ＝ヘッダー直下を詰めるため上下非対称（旧 `py-4`）
- `min-h-screen` / `h-screen` は**使わない**（内部スクロールと競合する）
- シェルのワードマークと重複する見出しを置かない
- サブページの `<main>` 先頭は `Crumbs`（`components/ui/Crumbs.tsx`）。`sticky top-0` で `.sheet-body` のスクロール時も上部に残り、`bg-paper` の帯 + 下辺の細罫 `border-ink-faint` でコンテンツとの境界を示す。リンクは `text-ink-soft` + 下線・現在地は下線なし、hover で朱
- Home 以外のページは `<main>` 末尾に `FootNav`（`components/ui/FootNav.tsx`）を置く — 索引ページは `← HOME`、詳細ページは `← セクション` + `← HOME`。`mt-auto` で短いページではシート下端に付く
- `body` への背景指定にショートハンド `background:` を使わない（`bg-grid-paper` の background-image が無効化される）。`background-color` を使う
- 枠の外へはみ出す装飾（検認スタンプ等）を将来足す場合は `.sheet` の `overflow:hidden` による見切れに注意

---

## 付録A. ポータル固有の意匠（参考・非拘束）

以下は ENG-APPS Portal（ポータルの `index.html`）固有の意匠・運用ルール。実装の正もポータル側にある。**本アプリには適用しない**が、ポータルを触る際の知見として保全する。

### A.1 レイアウト構造

※このうち方眼・図枠（二重枠+トンボ）・ルーラーは本アプリでも採用済み（§6）。表題欄・ZONE区画は非採用。

ページ全体が**1枚の図面**：方眼用紙の上に図枠（二重枠）、四隅にトンボ、右下に表題欄。アプリは図面上の**ゾーン（ZONE 01〜03）**に区画されたカードとして配置。**1画面（スクロールなし）完結**を原則とする（フルHD〜ノートPC 768px高まで）。

```
body（方眼背景・100dvh・flex）
└─ .sheet（図枠: 二重枠 + トンボ。flex column・幅 min(1480px,100%)）
   ├─ header   … ワードマーク+ルーラー / 案内文（朱の左罫） / メタ情報（右寄せ等幅）
   ├─ .zones   … flex:1。3カラム grid（ZONE間は破線の縦罫）
   │   └─ section × 3
   │       ├─ .zone-head … ZONE番号（紺地白抜き）+ タイトル + 破線
   │       └─ .grid      … カード縦積み
   └─ .bottom  … 左=注記（等幅小字） / 右=表題欄（テーブル）
```

- **ZONEは3つまで**（3カラム前提）。カードは1ゾーン2〜3枚が上限（1画面収納のため）
- `@media (max-width:1020px)` で縦積みにフォールバック（スクロール許容）
- フォールバック時の図枠の既知バグ（`height`/`max-height` 両方解除）→ 本アプリでの実装と注意点は §6「高さ方針」参照

### A.2 サイズ・余白（ポータルの1画面収納設計）

- 高さ方向は **`vh` 基準の `clamp()`** で画面高に追従
  例: `--pad: clamp(10px, 1.6vh, 22px)`、見出し `clamp(26px, 3.6vh, 40px)`
  （サイズトークン `--pad`/`--gap`/`--h1`/`--frame` は本アプリでも採用 → §2.3）
- 枠線の太さ: 外枠 `2.5px` + オフセット細線 `1px`（二重枠）、カード `1.5px`、区切り破線 `1.5px dashed`

### A.3 コンポーネント

#### アプリカード `.card`

```html
<a class="card" href="/path/">
  <span class="tag">01-A</span>            <!-- ゾーン番号: ZONE番号-連番 -->
  <h3>アプリ名</h3>
  <p>説明文（2行以内に収める。固定高 3.2em、超過は省略表示）</p>
  <div class="foot">
    <span class="path">/path/</span>        <!-- 等幅。矢印は CSS が自動付与 -->
    <span class="status"><i></i>稼働中・要ログイン</span>
  </div>
</a>
```

- **説明文は2行固定高**（カード高さを揃えるため。`height: 3.2em` + line-clamp）
- ステータス: 稼働中=緑ドット（pulse付き）/ 静的・常設=`.gray`（グレー・pulse無し）
- ホバー: 左端に朱ライン（上から伸長）+ 3px 浮き + 影。`focus-visible` も同じ表現
- カードは縮小させない（`flex:none`）。flex カラム内で本文が潰れ、`overflow:hidden` で隠れるのを防ぐため

#### 表題欄 `.titleblock`

図面の表題欄を模したテーブル。図番 / 名称 / 管理 / 改訂 + 検認スタンプ（朱の円・-8°回転）。**改訂時は `Rev.n` を上げる**（履歴は git で管理）。

- スタンプは `<table>` の直下に置かず、表題欄を囲む `.titleblock-wrap`（`position:relative`）を基準に絶対配置する（不正なHTML回避＋図枠の `overflow:hidden` での見切れ回避）

#### その他の意匠

- **ルーラー**・**トンボ**: 本アプリでも採用済み → 実装値は §6
- **ZONE番号** `.zone-no`: 紺地に白抜き等幅、`ZONE 0n`

### A.4 モーション（ポータルの具体実装）

| 対象 | 内容 |
|---|---|
| ページ読み込み | `rise`（10px下から fade-up、0.5s）。ヘッダー→カード（左上から右下へ 0.06s刻みのスタガー）→表題欄 |
| カードホバー | 朱ライン伸長（scaleY、0.2s）+ translateY(-3px) + 影 |
| 稼働ドット | `pulse`（2.6s周期の波紋） |

### A.5 カード追加の運用（ポータル）

1. 該当 ZONE の `.grid` に A.3 の構造をコピーして追記
2. `tag` はゾーン内の連番（例: `01-C`）。説明文は**全角50字以内**（2行に収まること）
3. ZONE内が4枚以上になる、またはZONEを増やしたい場合は1画面収納が崩れるため、レイアウト再設計を検討
4. 表題欄の `Rev.n` を +1 して push（webhook で自動反映）
