# ipa-dict en_US — 出典

- ソース: https://github.com/open-dict-data/ipa-dict (`data/en_US.txt`)
- ライセンス: MIT (c) 2016 dohliam — 同梱の `LICENSE` を参照
- 取得日: 2026-06-13
- 用途: `/lookup`(発音記号検索)の辞書データ。`scripts/build-dict.mjs` で
  `public/dict/{a..z,other}.json` に頭文字シャード化して配信する。
- 形式: `単語\t/発音1/, /発音2/`(タブ区切り、IPA はスラッシュ囲み)
- 注意: 転写の表記は ipa-dict の流儀(r を ɹ と書く、長音 ː を略す等)で、
  本サイトの表記規約(lib/data/vowels.ts ヘッダ)とは細部が異なる。
