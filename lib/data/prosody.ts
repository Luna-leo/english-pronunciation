import type { Topic } from "@/lib/types";

/** 超分節音 5 トピック。表記規約は lib/data/vowels.ts のヘッダ参照。 */
export const PROSODY_TOPICS: readonly Topic[] = [
  {
    id: "word-stress",
    section: "prosody",
    title: "語強勢",
    titleEn: "WORD STRESS",
    summary: "単語の中で最も強く読む音節。位置を間違えると個々の音が正しくても通じない。",
    blocks: [
      {
        type: "paragraph",
        text: "英語の単語には必ず「最も強く・長く・はっきり」発音する音節がある。これが語強勢。強勢の位置はつづりからは完全には予測できないため、単語を覚えるときは音と一緒に強勢の位置も覚えるのが鉄則。",
      },
      {
        type: "paragraph",
        text: "強い音節は「強く・長く・高く」、弱い音節は「弱く・短く・あいまいに」。この強弱の差こそが英語らしさの核心で、日本語(音節ごとの強弱差が小さい)の感覚では差が足りない。大げさなくらいでちょうどよい。",
      },
      {
        type: "note",
        text: "発音記号では ˈ が直後の音節の第1強勢、ˌ が第2強勢を表す: information /ˌɪnfɚˈmeɪʃn/ は「メイ」が最も強い。",
      },
      { type: "heading", text: "名詞と動詞で強勢が変わる語" },
      {
        type: "paragraph",
        text: "つづりが同じでも、名詞では前、動詞では後ろに強勢が来るペアが多数ある。強勢だけで品詞が伝わる好例。",
      },
      {
        type: "table",
        header: ["単語", "名詞(前強勢)", "動詞(後強勢)"],
        rows: [
          ["record", "/ˈrɛkɚd/ 記録", "/rɪˈkɔːrd/ 記録する"],
          ["present", "/ˈprɛznt/ 贈り物", "/prɪˈzɛnt/ 贈呈する"],
          ["object", "/ˈɑːbdʒɪkt/ 物体", "/əbˈdʒɛkt/ 反対する"],
          ["increase", "/ˈɪnkriːs/ 増加", "/ɪnˈkriːs/ 増える"],
        ],
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          {
            text: "I need to record this meeting.",
            gloss: "この会議を録音する必要がある。(record = 動詞 → 後ろ強勢)",
          },
          {
            text: "She broke the world record.",
            gloss: "彼女は世界記録を破った。(record = 名詞 → 前強勢)",
          },
        ],
      },
      { type: "heading", text: "接尾辞が強勢の位置を決める" },
      {
        type: "paragraph",
        text: "一部の接尾辞は強勢の位置を固定する。これを知っていると初見の長い単語でも強勢を予測できる。",
      },
      {
        type: "table",
        header: ["接尾辞", "ルール", "例"],
        rows: [
          ["-tion / -sion", "直前の音節に強勢", "information /ˌɪnfɚˈmeɪʃn/"],
          ["-ity", "直前の音節に強勢", "possibility /ˌpɑːsəˈbɪləti/"],
          ["-ic", "直前の音節に強勢", "economic /ˌɛkəˈnɑːmɪk/"],
          ["-graphy", "直前の音節に強勢", "photography /fəˈtɑːɡrəfi/"],
        ],
      },
      {
        type: "paragraph",
        text: "同じ語根でも接尾辞が付くと強勢が移動し、母音の音色まで変わる(弱まった母音は /ə/ に → 母音弱化の章)。",
      },
      {
        type: "wordList",
        words: [
          { word: "photograph", ipa: "ˈfoʊtəɡræf", gloss: "写真" },
          { word: "photography", ipa: "fəˈtɑːɡrəfi", gloss: "写真術" },
          { word: "photographic", ipa: "ˌfoʊtəˈɡræfɪk", gloss: "写真の" },
        ],
      },
    ],
  },
  {
    id: "schwa-reduction",
    section: "prosody",
    title: "シュワーと母音弱化",
    titleEn: "VOWEL REDUCTION",
    summary: "強勢のない母音はあいまい母音 /ə/ に弱まる。英語のリズムを作る大原則。",
    blocks: [
      {
        type: "paragraph",
        text: "強勢のない音節の母音は、あいまい母音 /ə/(シュワー)に弱まるのが英語の大原則。つづり字が a でも o でも e でも、弱い音節ではみな同じ /ə/ になる。",
      },
      {
        type: "wordList",
        words: [
          { word: "about", ipa: "əˈbaʊt", gloss: "〜について(a が /ə/)" },
          { word: "today", ipa: "təˈdeɪ", gloss: "今日(o が /ə/)" },
          { word: "banana", ipa: "bəˈnænə", gloss: "バナナ(1・3番目の a が /ə/)" },
          { word: "police", ipa: "pəˈliːs", gloss: "警察(o が /ə/)" },
          { word: "chocolate", ipa: "ˈtʃɑːklət", gloss: "チョコレート(2音節に縮む)" },
        ],
      },
      {
        type: "paragraph",
        text: "chocolate が「チョ・コ・レー・ト」の4拍ではなく /ˈtʃɑːklət/ の2音節になるように、弱化は母音の音色だけでなく音節の数まで変える。banana は「バ・ナ・ナ」と3つ均等に読まず、真ん中だけ強く /bəˈnænə/。",
      },
      {
        type: "note",
        text: "「すべての母音をはっきり発音しない」ことが、英語らしいリズムへの最短ルート。強い音節だけ丁寧に、弱い音節は思い切って手を抜く。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          {
            text: "I'd like a banana and a cup of coffee.",
            gloss: "バナナとコーヒーをください。(a / and / of がすべて /ə/ 系の弱い音)",
          },
          {
            text: "The police arrived at seven o'clock today.",
            gloss: "警察は今日7時に到着した。(police の po、today の to が /ə/)",
          },
        ],
      },
    ],
  },
  {
    id: "sentence-stress",
    section: "prosody",
    title: "文強勢とリズム",
    titleEn: "SENTENCE STRESS & RHYTHM",
    summary: "内容語は強く、機能語は弱く。強勢が等間隔に並ぼうとする「強勢拍リズム」。",
    blocks: [
      {
        type: "paragraph",
        text: "文の中では、意味を担う内容語(名詞・動詞・形容詞・副詞・疑問詞)に強勢が置かれ、機能語(冠詞・前置詞・代名詞・助動詞・接続詞)は弱く発音される(→ 弱形の章)。",
      },
      {
        type: "paragraph",
        text: "英語は強勢から次の強勢までの時間がほぼ一定になろうとする「強勢拍リズム」の言語。間に挟まる弱い語が何語あっても、速く・あいまいに潰して等間隔を保つ。1音1音を等しく読む日本語(モーラ拍)とはリズムの原理そのものが違う。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          {
            text: "Cats chase mice.",
            gloss: "猫はネズミを追う。(内容語3つ = 3拍)",
          },
          {
            text: "The cats will chase the mice.",
            gloss: "その猫たちはネズミを追うだろう。(語は増えても拍は3つのまま — the / will は弱く速く)",
          },
          {
            text: "The cats have been chasing the mice.",
            gloss: "猫たちはずっとネズミを追っている。(さらに増えても3拍。弱い語が潰れる)",
          },
        ],
      },
      {
        type: "note",
        text: "上の3文は語数が違っても発話時間がほぼ同じ — これが強勢拍リズム。機能語まで日本語の感覚で均等に読むと、リズムが崩れて逆に聞き取ってもらえなくなる。",
      },
      { type: "heading", text: "焦点(新情報)への強勢" },
      {
        type: "paragraph",
        text: "文の中で最も伝えたい語(新情報・対比)に、文全体で一番強い強勢が置かれる。同じ文でも焦点が変われば強勢の位置が動き、意味の重心が変わる: I didn't say HE stole it.(彼だとは言っていない=別の誰か)/ I didn't say he STOLE it.(盗んだとは言っていない=借りたのかも)。",
      },
      {
        type: "note",
        text: "合成音声は焦点を読み分けられないため、ここは仕組みの理解が目的。会話では「一番伝えたい語を一番強く」を意識するだけで伝わり方が変わる。",
      },
    ],
  },
  {
    id: "weak-forms",
    section: "prosody",
    title: "機能語の弱形",
    titleEn: "WEAK FORMS",
    summary: "can は /kən/、to は /tə/。機能語の「もうひとつの発音」を知らないと聞き取れない。",
    blocks: [
      {
        type: "paragraph",
        text: "高頻度の機能語には、単独で読むときの「強形」と、文中での「弱形」の2つの発音がある。文中では弱形が標準。辞書の最初に載っている強形しか知らないと、リスニングで「音が消えた」ように感じる正体がこれ。",
      },
      {
        type: "table",
        header: ["語", "強形", "弱形", "例"],
        rows: [
          ["can", "/kæn/", "/kən/", "I can swim."],
          ["to", "/tuː/", "/tə/", "I want to go."],
          ["for", "/fɔːr/", "/fɚ/", "This is for you."],
          ["of", "/ʌv/", "/əv/", "a cup of coffee"],
          ["and", "/ænd/", "/ən/", "bread and butter"],
          ["at", "/æt/", "/ət/", "at the station"],
          ["them", "/ðɛm/", "/ðəm/", "Tell them."],
        ],
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          {
            text: "I can swim.",
            gloss: "泳げる。(can は /kən/。「キャン」とはっきり聞こえたら can't の可能性を疑う)",
          },
          {
            text: "A cup of coffee, please.",
            gloss: "コーヒーを1杯ください。(of は /əv/、速い発話ではほぼ /ə/)",
          },
          {
            text: "I want to go to the station.",
            gloss: "駅に行きたい。(to は両方 /tə/)",
          },
        ],
      },
      {
        type: "note",
        text: "強形が現れるのは、文末(What are you looking at?)・強調・対比(Yes, I CAN.)のとき。ゆっくり再生では弱形が消えて強形に戻ることがある — 通常速度で聞くこと。",
      },
    ],
  },
  {
    id: "intonation",
    section: "prosody",
    title: "イントネーション",
    titleEn: "INTONATION",
    summary: "文末の上げ下げが意味を運ぶ。下降=断定・wh疑問、上昇=yes/no疑問・未完。",
    blocks: [
      {
        type: "paragraph",
        text: "イントネーションは文全体にかかる音の高さの動き。同じ語の並びでも、下げれば断定に、上げれば問いかけや疑いになる — 文法と同じくらい意味を運ぶ。",
      },
      { type: "heading", text: "下降調 ↘" },
      {
        type: "paragraph",
        text: "平叙文・命令文・wh疑問文(what / where / why...)の基本形。文末に向けて確実に下げ切る。日本語話者は下げ切らずに終える傾向があり、自信がない・話が続くように聞こえてしまう。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          { text: "I live in Tokyo.", gloss: "東京に住んでいます。(文末を下げ切る)" },
          {
            text: "Where do you live?",
            gloss: "どこに住んでいますか。(wh疑問文も下降が基本)",
          },
        ],
      },
      { type: "heading", text: "上昇調 ↗" },
      {
        type: "paragraph",
        text: "yes/no疑問文の基本形。文末で上げる。平叙文の語順のまま文末だけ上げて疑問にすることもある(You're coming?)。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          { text: "Do you live in Tokyo?", gloss: "東京に住んでいますか。(文末を上げる)" },
          { text: "Are you ready?", gloss: "準備はいい?" },
        ],
      },
      { type: "heading", text: "リストと対比" },
      {
        type: "paragraph",
        text: "列挙は「上げ、上げ、最後だけ下げ」: apples ↗, bananas ↗, and oranges ↘。最後の下降が「これで終わり」の合図になる。途中で下げると列挙が終わったと誤解される。",
      },
      {
        type: "sentences",
        withSlow: true,
        items: [
          {
            text: "I bought apples, bananas, and oranges.",
            gloss: "りんごとバナナとオレンジを買った。(oranges だけ下降)",
          },
        ],
      },
      {
        type: "note",
        text: "合成音声のイントネーションはあくまで参考例。実際の会話では話者の感情・意図でさらに大きく動く。",
      },
    ],
  },
];
