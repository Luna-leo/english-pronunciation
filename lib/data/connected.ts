import type { Topic } from "@/lib/types";

/**
 * 連結現象 5 トピック。表記規約は lib/data/vowels.ts のヘッダ参照。
 * このセクションでは実際の音を示すため、たたき音 [ɾ] など精密表記を限定的に使う。
 */
export const CONNECTED_TOPICS: readonly Topic[] = [
  {
    id: "linking",
    section: "connected",
    title: "連結(リンキング)",
    titleEn: "LINKING",
    summary: "子音で終わる語+母音で始まる語がつながる。an apple → 「アナポー」。",
    blocks: [
      {
        type: "paragraph",
        text: "英語は単語ごとに区切らず、切れ目をまたいで音をつなげて発音する。最も基本の連結は「子音で終わる語+母音で始まる語」: 語末の子音が次の語の頭に移ったように聞こえる。",
      },
      {
        type: "beforeAfter",
        gloss: "りんご1個",
        ttsText: "an apple",
        before: { text: "an + apple", ipa: "ən + ˈæpl" },
        after: { text: "an‿apple", ipa: "ə ˈnæpl" },
      },
      {
        type: "beforeAfter",
        gloss: "それをつけて",
        ttsText: "turn it on",
        before: { text: "turn + it + on", ipa: "tɝːn + ɪt + ɑːn" },
        after: { text: "tur‿ni‿ton", ipa: "tɝː nɪ ˈtɑːn" },
      },
      {
        type: "beforeAfter",
        gloss: "見てみて",
        ttsText: "check it out",
        before: { text: "check + it + out", ipa: "tʃɛk + ɪt + aʊt" },
        after: { text: "che‿cki‿tout", ipa: "tʃɛ kɪ ˈtaʊt" },
      },
      {
        type: "paragraph",
        text: "「アン・アップル」と区切って言うより「アナポー」とつなげる方が英語として自然で、相手にも伝わりやすい。リスニングでも「ナ」の正体が an の n だと分かれば、知っている語が聞き取れるようになる。",
      },
      { type: "heading", text: "r の連結" },
      {
        type: "paragraph",
        text: "GA では語末の r はもともと発音されるが、次が母音だと特にはっきりつながる: far away は「ファー・アウェイ」ではなく /fɑː rəˈweɪ/。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          { text: "Can I have an apple?", gloss: "りんごをもらえますか。(Can‿I / have‿an もつながる)" },
          { text: "Turn it on.", gloss: "つけて。" },
          { text: "It's far away.", gloss: "遠くにある。(far‿away)" },
        ],
      },
      {
        type: "note",
        text: "ゆっくり再生では連結が解けて単語ごとの発音に戻ることがある。仕上げは通常速度で確認すること。",
      },
    ],
  },
  {
    id: "elision",
    section: "connected",
    title: "脱落(エリジョン)",
    titleEn: "ELISION",
    summary: "速い発話で音が落ちる。next day の t、tell him の h。",
    blocks: [
      {
        type: "paragraph",
        text: "自然な速さの発話では、一部の音が丸ごと落ちる。代表は2つ: 子音に挟まれた /t/ /d/ と、弱形の代名詞の /h/(him, her, his, he)。",
      },
      { type: "heading", text: "/t/ /d/ の脱落" },
      {
        type: "beforeAfter",
        gloss: "翌日",
        ttsText: "the next day",
        before: { text: "next + day", ipa: "nɛkst + deɪ" },
        after: { text: "nex(t) day", ipa: "nɛks deɪ" },
      },
      {
        type: "beforeAfter",
        gloss: "友達(複数)",
        ttsText: "friends",
        before: { text: "friends", ipa: "frɛndz" },
        after: { text: "frien(d)s", ipa: "frɛnz" },
      },
      { type: "heading", text: "/h/ の脱落" },
      {
        type: "beforeAfter",
        gloss: "彼に伝えて",
        ttsText: "tell him",
        before: { text: "tell + him", ipa: "tɛl + hɪm" },
        after: { text: "tell‿(h)im", ipa: "tɛ lɪm" },
      },
      {
        type: "paragraph",
        text: "「テル・ヒム」と聞こえることを期待していると tell him は永遠に聞き取れない。「テリム」が標準形だと知ってしまえば簡単に聞こえるようになる。h脱落は連結(リンキング)とセットで起きる。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          { text: "I asked him about the next day.", gloss: "翌日について彼に尋ねた。(asked‿(h)im / nex(t) day)" },
          { text: "Give her the book.", gloss: "彼女に本を渡して。(Give‿(h)er → ギヴァー)" },
        ],
      },
      {
        type: "note",
        text: "脱落は「起きてもよい」現象で、必ず起きるわけではない。丁寧な発話では戻る。合成音声も脱落させないことがある — その場合は before/after の発音記号で違いを確認する。",
      },
    ],
  },
  {
    id: "assimilation",
    section: "connected",
    title: "同化(アシミレーション)",
    titleEn: "ASSIMILATION",
    summary: "隣の音に引っ張られて音が変わる。meet you → 「ミーチュ」。",
    blocks: [
      {
        type: "paragraph",
        text: "隣り合った音が互いに引っ張られて別の音に変わる現象。日本人学習者に最重要なのは /t/ /d/ /s/ /z/ + /j/(you, your の頭の音)の組み合わせ — いわゆる「ヤ行融合」。",
      },
      {
        type: "table",
        header: ["組み合わせ", "結果", "例"],
        rows: [
          ["/t/ + /j/", "/tʃ/", "meet you → ミーチュ"],
          ["/d/ + /j/", "/dʒ/", "did you → ディヂュ"],
          ["/s/ + /j/", "/ʃ/", "miss you → ミシュ"],
          ["/z/ + /j/", "/ʒ/", "as you know → アジュノウ"],
        ],
      },
      {
        type: "beforeAfter",
        gloss: "会えてうれしい",
        ttsText: "Nice to meet you.",
        before: { text: "meet + you", ipa: "miːt + juː" },
        after: { text: "mee‿chu", ipa: "ˈmiːtʃə" },
      },
      {
        type: "beforeAfter",
        gloss: "〜した?",
        ttsText: "Did you see it?",
        before: { text: "did + you", ipa: "dɪd + juː" },
        after: { text: "di‿ju", ipa: "ˈdɪdʒə" },
      },
      { type: "heading", text: "調音位置の同化" },
      {
        type: "paragraph",
        text: "語末の /n/ は次の子音の構えに引っ張られる: ten bucks の n は唇を閉じる /m/ 寄りに(テム・バックス)、in case の n は喉の奥の /ŋ/ 寄りになる。意識して起こす必要はないが、聞こえ方の理由として知っておくと混乱しない。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          { text: "Nice to meet you.", gloss: "はじめまして。(meet you → ミーチュ)" },
          { text: "Did you see it?", gloss: "見た?(did you → ディヂュ)" },
          { text: "I miss you.", gloss: "会いたい。(miss you → ミシュ)" },
        ],
      },
    ],
  },
  {
    id: "flapping",
    section: "connected",
    title: "たたき音化(フラッピング)",
    titleEn: "FLAPPING",
    summary: "GA特有: 母音に挟まれた t/d が日本語のラ行に近い音 [ɾ] になる。water → 「ワラー」。",
    blocks: [
      {
        type: "paragraph",
        text: "GA(アメリカ英語)特有の現象。母音に挟まれた /t/ /d/ が、舌先で歯茎を一度だけ軽くはじく「たたき音」[ɾ] になる。条件は「直前の母音に強勢があり、直後の母音が弱い」こと。",
      },
      {
        type: "paragraph",
        text: "たたき音 [ɾ] は日本語のラ行の子音とほぼ同じ音。つまり日本語話者には「無料で使える」現象で、water を「ワラー」、better を「ベラー」と言えばそれらしく聞こえる。",
      },
      {
        type: "wordList",
        words: [
          { word: "water", ipa: "ˈwɔːtɚ", gloss: "水(ワラーに近い)" },
          { word: "better", ipa: "ˈbɛtɚ", gloss: "より良い(ベラー)" },
          { word: "city", ipa: "ˈsɪti", gloss: "都市(スィリー)" },
          { word: "little", ipa: "ˈlɪtl", gloss: "小さい(リロー)" },
          { word: "ladder", ipa: "ˈlædɚ", gloss: "はしご(d も同様にたたき音化)" },
        ],
      },
      {
        type: "beforeAfter",
        gloss: "取って",
        ttsText: "get it",
        before: { text: "get + it", ipa: "ɡɛt + ɪt" },
        after: { text: "ge‿rit", ipa: "ˈɡɛɾɪt" },
      },
      {
        type: "beforeAfter",
        gloss: "たくさんの",
        ttsText: "a lot of",
        before: { text: "a + lot + of", ipa: "ə + lɑːt + əv" },
        after: { text: "a‿lo‿ra", ipa: "ə ˈlɑːɾə" },
      },
      {
        type: "note",
        text: "本サイトで精密表記 [ɾ] を使うのはこのページだけ。辞書の音素表記では /t/ /d/ のまま書かれる(water /ˈwɔːtɚ/)。",
      },
      {
        type: "note",
        text: "たたき音化の結果、latter(後者)と ladder(はしご)、writing と riding はほぼ同音になる。文脈で判断する。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          { text: "I need a little bit of water.", gloss: "水が少し必要。(little / bit of / water すべてたたき音化)" },
          { text: "Get it out of here.", gloss: "ここから出して。(ge‿ri‿rou‿ra みたいに全部つながる)" },
        ],
      },
    ],
  },
  {
    id: "contractions",
    section: "connected",
    title: "短縮形(gonna / wanna)",
    titleEn: "CONTRACTIONS",
    summary: "弱形が固まって1語になった話し言葉の標準形。going to → gonna。",
    blocks: [
      {
        type: "paragraph",
        text: "弱形(→ 超分節音の章)がさらに進んで1語に固まったもの。くだけた話し言葉では標準形で、映画やドラマ、日常会話に頻出する。自分で使わなくても、聞き取れることは必須。",
      },
      {
        type: "table",
        header: ["短縮形", "元の形", "発音", "例"],
        rows: [
          ["gonna", "going to", "/ˈɡʌnə/", "I'm gonna leave."],
          ["wanna", "want to", "/ˈwɑːnə/", "I wanna go home."],
          ["gotta", "got to", "/ˈɡɑːtə/", "I gotta go."],
          ["lemme", "let me", "/ˈlɛmi/", "Lemme see."],
          ["gimme", "give me", "/ˈɡɪmi/", "Gimme a second."],
          ["kinda", "kind of", "/ˈkaɪndə/", "It's kinda cold."],
        ],
      },
      {
        type: "beforeAfter",
        gloss: "〜するつもり",
        ttsText: "gonna",
        before: { text: "going to", ipa: "ˈɡoʊɪŋ tuː" },
        after: { text: "gonna", ipa: "ˈɡʌnə" },
      },
      {
        type: "beforeAfter",
        gloss: "〜したい",
        ttsText: "wanna",
        before: { text: "want to", ipa: "wɑːnt tuː" },
        after: { text: "wanna", ipa: "ˈwɑːnə" },
      },
      {
        type: "note",
        text: "going to が「(場所へ)行く」の意味のときは gonna にできない: I'm going to Tokyo.(× I'm gonna Tokyo.)gonna になるのは助動詞的な be going to + 動詞 のときだけ。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          { text: "I'm gonna call you later.", gloss: "あとで電話するね。" },
          { text: "Do you wanna come with us?", gloss: "一緒に来る?" },
          { text: "I gotta go now.", gloss: "もう行かなきゃ。(gotta の t はたたき音化して「ガラ」)" },
        ],
      },
      {
        type: "note",
        text: "書き言葉(メール・レポート)では going to / want to と書くのが基本。gonna / wanna はくだけたチャットや歌詞向き。",
      },
    ],
  },
];
