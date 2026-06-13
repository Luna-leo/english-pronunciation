import type { Consonant } from "@/lib/types";

/**
 * GA(General American)子音 24 音素。表記規約は lib/data/vowels.ts のヘッダ参照。
 * スラッグは ASCII 近似: th=/θ/ dh=/ð/ ch=/tʃ/ j=/dʒ/ zh=/ʒ/ ng=/ŋ/ y=/j/。
 */
export const CONSONANTS: readonly Consonant[] = [
  /* ---- 破裂音 ---- */
  {
    kind: "consonant",
    id: "p",
    symbol: "p",
    nameJa: "強い息のパ行の音",
    manner: "plosive",
    place: "bilabial",
    voiced: false,
    voicedPair: "b",
    keyword: { word: "pen", ipa: "pɛn", gloss: "ペン" },
    articulation: [
      "両唇を閉じて息をため、一気に開放する。",
      "強勢のある音節の頭では強い息(帯気)を伴う: pen は「プ」と「ヘ」が混ざったように聞こえるほど。手のひらを口の前に置いて息を感じる練習が有効。",
    ],
    pitfalls: [
      "日本語のパ行は息が弱い。語頭では大げさなくらい強く破裂させると b と区別される。",
      "語末の p(stop)は破裂させず、唇を閉じたまま終わることも多い。",
    ],
    examples: [
      { word: "pen", ipa: "pɛn", gloss: "ペン" },
      { word: "paper", ipa: "ˈpeɪpɚ", gloss: "紙" },
      { word: "happy", ipa: "ˈhæpi", gloss: "幸せな" },
      { word: "stop", ipa: "stɑːp", gloss: "止まる" },
      { word: "pink", ipa: "pɪŋk", gloss: "ピンク" },
    ],
    minimalPairs: [
      {
        a: { word: "pat", ipa: "pæt", gloss: "軽くたたく" },
        b: { word: "bat", ipa: "bæt", gloss: "コウモリ" },
        contrastWith: "b",
        note: "pat は息が強く声が遅れて始まる。bat は最初から声が出る。",
      },
      {
        a: { word: "pie", ipa: "paɪ", gloss: "パイ" },
        b: { word: "buy", ipa: "baɪ", gloss: "買う" },
        contrastWith: "b",
      },
    ],
  },
  {
    kind: "consonant",
    id: "b",
    symbol: "b",
    nameJa: "濁ったバ行の音",
    manner: "plosive",
    place: "bilabial",
    voiced: true,
    voicedPair: "p",
    keyword: { word: "big", ipa: "bɪɡ", gloss: "大きい" },
    articulation: [
      "両唇を閉じて開放するのは /p/ と同じだが、声帯を震わせる(有声)。息は強くしない。",
    ],
    pitfalls: [
      "/v/ との混同に注意: b は唇を閉じる、v は下唇を上の歯に当てる。berry と very。",
    ],
    examples: [
      { word: "big", ipa: "bɪɡ", gloss: "大きい" },
      { word: "baby", ipa: "ˈbeɪbi", gloss: "赤ちゃん" },
      { word: "bed", ipa: "bɛd", gloss: "ベッド" },
      { word: "job", ipa: "dʒɑːb", gloss: "仕事" },
      { word: "club", ipa: "klʌb", gloss: "クラブ" },
    ],
    minimalPairs: [
      {
        a: { word: "berry", ipa: "ˈbɛri", gloss: "ベリー" },
        b: { word: "very", ipa: "ˈvɛri", gloss: "とても" },
        contrastWith: "v",
        note: "唇を一度閉じれば b、閉じずに歯を当てれば v。",
      },
      {
        a: { word: "boat", ipa: "boʊt", gloss: "ボート" },
        b: { word: "vote", ipa: "voʊt", gloss: "投票する" },
        contrastWith: "v",
      },
    ],
  },
  {
    kind: "consonant",
    id: "t",
    symbol: "t",
    nameJa: "舌先を歯茎に当てるタ行の音",
    manner: "plosive",
    place: "alveolar",
    voiced: false,
    voicedPair: "d",
    keyword: { word: "time", ipa: "taɪm", gloss: "時間" },
    articulation: [
      "舌先を歯茎(上の前歯の付け根の盛り上がり)に当てて息をため、開放する。日本語のタ行より少し奥に当てる。",
      "強勢音節の頭では強い帯気を伴う(/p/ /k/ と同様)。",
    ],
    pitfalls: [
      "GA では母音に挟まれた t がラ行のような音(たたき音 [ɾ])になる: water、letter(→ 連結現象「flapping」参照)。",
      "語末の t は破裂させず喉で止める(声門閉鎖)ことが多い: cat、not。",
    ],
    examples: [
      { word: "time", ipa: "taɪm", gloss: "時間" },
      { word: "tea", ipa: "tiː", gloss: "紅茶" },
      { word: "today", ipa: "təˈdeɪ", gloss: "今日" },
      { word: "cat", ipa: "kæt", gloss: "猫" },
      { word: "water", ipa: "ˈwɔːtɚ", gloss: "水" },
    ],
    minimalPairs: [
      {
        a: { word: "time", ipa: "taɪm", gloss: "時間" },
        b: { word: "dime", ipa: "daɪm", gloss: "10セント硬貨" },
        contrastWith: "d",
      },
      {
        a: { word: "ten", ipa: "tɛn", gloss: "10" },
        b: { word: "den", ipa: "dɛn", gloss: "巣穴" },
        contrastWith: "d",
      },
    ],
  },
  {
    kind: "consonant",
    id: "d",
    symbol: "d",
    nameJa: "濁ったダ行の音",
    manner: "plosive",
    place: "alveolar",
    voiced: true,
    voicedPair: "t",
    keyword: { word: "day", ipa: "deɪ", gloss: "日" },
    articulation: [
      "舌先を歯茎に当てて開放する /t/ の有声版。声帯を震わせ、息は強くしない。",
    ],
    pitfalls: [
      "語末の d を「ド」と読まない: red は /rɛd/ で母音を足さない。",
      "母音間では t と同じくたたき音化する: ladder と latter は GA ではほぼ同音。",
    ],
    examples: [
      { word: "day", ipa: "deɪ", gloss: "日" },
      { word: "dog", ipa: "dɔːɡ", gloss: "犬" },
      { word: "red", ipa: "rɛd", gloss: "赤い" },
      { word: "ladder", ipa: "ˈlædɚ", gloss: "はしご" },
      { word: "dinner", ipa: "ˈdɪnɚ", gloss: "夕食" },
    ],
    minimalPairs: [
      {
        a: { word: "down", ipa: "daʊn", gloss: "下へ" },
        b: { word: "town", ipa: "taʊn", gloss: "町" },
        contrastWith: "t",
      },
      {
        a: { word: "do", ipa: "duː", gloss: "する" },
        b: { word: "two", ipa: "tuː", gloss: "2" },
        contrastWith: "t",
      },
    ],
  },
  {
    kind: "consonant",
    id: "k",
    symbol: "k",
    nameJa: "強い息のカ行の音",
    manner: "plosive",
    place: "velar",
    voiced: false,
    voicedPair: "g",
    keyword: { word: "key", ipa: "kiː", gloss: "鍵" },
    articulation: [
      "舌の奥を軟口蓋(上あごの奥のやわらかい部分)に付けて息をため、開放する。",
      "強勢音節の頭では強い帯気を伴う: key、coffee。",
    ],
    pitfalls: [
      "日本語のカ行より息を強く。s の後では帯気しない(school の k は弱い)。",
    ],
    examples: [
      { word: "key", ipa: "kiː", gloss: "鍵" },
      { word: "school", ipa: "skuːl", gloss: "学校" },
      { word: "back", ipa: "bæk", gloss: "後ろ" },
      { word: "cake", ipa: "keɪk", gloss: "ケーキ" },
      { word: "quick", ipa: "kwɪk", gloss: "速い" },
    ],
    minimalPairs: [
      {
        a: { word: "coat", ipa: "koʊt", gloss: "コート" },
        b: { word: "goat", ipa: "ɡoʊt", gloss: "ヤギ" },
        contrastWith: "g",
      },
      {
        a: { word: "class", ipa: "klæs", gloss: "クラス" },
        b: { word: "glass", ipa: "ɡlæs", gloss: "ガラス・コップ" },
        contrastWith: "g",
      },
    ],
  },
  {
    kind: "consonant",
    id: "g",
    symbol: "ɡ",
    nameJa: "濁ったガ行の音",
    manner: "plosive",
    place: "velar",
    voiced: true,
    voicedPair: "k",
    keyword: { word: "go", ipa: "ɡoʊ", gloss: "行く" },
    articulation: ["舌の奥を軟口蓋に付けて開放する /k/ の有声版。"],
    pitfalls: [
      "語中で鼻にかけた「ガ゜」(鼻濁音)にしない。again の g は破裂させる。",
      "語末の g に母音を足さない: big は /bɪɡ/ で「ビッグ」と「グ」を強く言わない。",
    ],
    examples: [
      { word: "go", ipa: "ɡoʊ", gloss: "行く" },
      { word: "big", ipa: "bɪɡ", gloss: "大きい" },
      { word: "again", ipa: "əˈɡɛn", gloss: "再び" },
      { word: "garden", ipa: "ˈɡɑːrdn", gloss: "庭" },
      { word: "glass", ipa: "ɡlæs", gloss: "ガラス・コップ" },
    ],
    minimalPairs: [
      {
        a: { word: "gold", ipa: "ɡoʊld", gloss: "金" },
        b: { word: "cold", ipa: "koʊld", gloss: "寒い" },
        contrastWith: "k",
      },
    ],
  },

  /* ---- 破擦音 ---- */
  {
    kind: "consonant",
    id: "ch",
    symbol: "tʃ",
    nameJa: "唇を突き出す「チ」",
    manner: "affricate",
    place: "postalveolar",
    voiced: false,
    voicedPair: "j",
    keyword: { word: "chair", ipa: "tʃɛr", gloss: "椅子" },
    articulation: [
      "舌先を歯茎の後ろに当てて息を止め(/t/)、「シュ」の摩擦(/ʃ/)で開放する。閉鎖+摩擦のセットで1音。",
      "日本語の「チ」より唇を丸めて前に突き出す。",
    ],
    pitfalls: [
      "/ʃ/(sh)との区別: chair と share、watch と wash。ch は一瞬息が止まる、sh は止まらない。",
    ],
    examples: [
      { word: "chair", ipa: "tʃɛr", gloss: "椅子" },
      { word: "teacher", ipa: "ˈtiːtʃɚ", gloss: "先生" },
      { word: "watch", ipa: "wɑːtʃ", gloss: "見る・腕時計" },
      { word: "child", ipa: "tʃaɪld", gloss: "子ども" },
      { word: "lunch", ipa: "lʌntʃ", gloss: "昼食" },
    ],
    minimalPairs: [
      {
        a: { word: "chair", ipa: "tʃɛr", gloss: "椅子" },
        b: { word: "share", ipa: "ʃɛr", gloss: "共有する" },
        contrastWith: "sh",
        note: "息が一瞬止まれば chair、流れ続ければ share。",
      },
      {
        a: { word: "catch", ipa: "kætʃ", gloss: "捕まえる" },
        b: { word: "cash", ipa: "kæʃ", gloss: "現金" },
        contrastWith: "sh",
      },
    ],
  },
  {
    kind: "consonant",
    id: "j",
    symbol: "dʒ",
    nameJa: "濁った「ヂュ」",
    manner: "affricate",
    place: "postalveolar",
    voiced: true,
    voicedPair: "ch",
    keyword: { word: "juice", ipa: "dʒuːs", gloss: "ジュース" },
    articulation: [
      "/tʃ/ の有声版。舌先を歯茎の後ろに当てて止め、濁った「ジュ」で開放する。",
    ],
    pitfalls: [
      "/j/(y: わたり音)との区別: jet と yet。dʒ は一瞬の閉鎖がある、y はない。",
      "語中の「ジ」をザ行(/z/)にしない: major は /ˈmeɪdʒɚ/。",
    ],
    examples: [
      { word: "juice", ipa: "dʒuːs", gloss: "ジュース" },
      { word: "job", ipa: "dʒɑːb", gloss: "仕事" },
      { word: "age", ipa: "eɪdʒ", gloss: "年齢" },
      { word: "just", ipa: "dʒʌst", gloss: "ちょうど" },
      { word: "bridge", ipa: "brɪdʒ", gloss: "橋" },
    ],
    minimalPairs: [
      {
        a: { word: "jet", ipa: "dʒɛt", gloss: "ジェット機" },
        b: { word: "yet", ipa: "jɛt", gloss: "まだ" },
        contrastWith: "y",
        note: "jet は破裂から始まる。yet は「イ」からなめらかに始まる。",
      },
      {
        a: { word: "joke", ipa: "dʒoʊk", gloss: "冗談" },
        b: { word: "yolk", ipa: "joʊk", gloss: "卵黄" },
        contrastWith: "y",
      },
    ],
  },

  /* ---- 摩擦音 ---- */
  {
    kind: "consonant",
    id: "f",
    symbol: "f",
    nameJa: "下唇を当てる「フ」",
    manner: "fricative",
    place: "labiodental",
    voiced: false,
    voicedPair: "v",
    keyword: { word: "fish", ipa: "fɪʃ", gloss: "魚" },
    articulation: [
      "下唇の内側を上の前歯に軽く当て、その隙間から息を擦り出す。",
    ],
    pitfalls: [
      "日本語の「フ」は両唇の音([ɸ])で別物。必ず歯と唇で作る。",
      "coffee を「コーヒー」と h で発音しない。f と h の区別: fat と hat。",
    ],
    examples: [
      { word: "fish", ipa: "fɪʃ", gloss: "魚" },
      { word: "coffee", ipa: "ˈkɔːfi", gloss: "コーヒー" },
      { word: "life", ipa: "laɪf", gloss: "人生" },
      { word: "phone", ipa: "foʊn", gloss: "電話" },
      { word: "laugh", ipa: "læf", gloss: "笑う" },
    ],
    minimalPairs: [
      {
        a: { word: "fan", ipa: "fæn", gloss: "扇風機・ファン" },
        b: { word: "van", ipa: "væn", gloss: "バン(車)" },
        contrastWith: "v",
      },
      {
        a: { word: "fat", ipa: "fæt", gloss: "太った" },
        b: { word: "hat", ipa: "hæt", gloss: "帽子" },
        contrastWith: "h",
        note: "歯と唇の摩擦が聞こえれば fat、息だけなら hat。",
      },
    ],
  },
  {
    kind: "consonant",
    id: "v",
    symbol: "v",
    nameJa: "下唇を当てる濁った「ヴ」",
    manner: "fricative",
    place: "labiodental",
    voiced: true,
    voicedPair: "f",
    keyword: { word: "very", ipa: "ˈvɛri", gloss: "とても" },
    articulation: [
      "/f/ と同じ構え(下唇を上の歯に当てる)のまま声帯を震わせる。唇がくすぐったく感じれば正解。",
    ],
    pitfalls: [
      "日本語にない音なので /b/ で代用しがち: very が berry に聞こえてしまう。唇を閉じないこと。",
      "語末の v を「ブ」にしない: love は /lʌv/。",
    ],
    examples: [
      { word: "very", ipa: "ˈvɛri", gloss: "とても" },
      { word: "seven", ipa: "ˈsɛvn", gloss: "7" },
      { word: "love", ipa: "lʌv", gloss: "愛" },
      { word: "voice", ipa: "vɔɪs", gloss: "声" },
      { word: "move", ipa: "muːv", gloss: "動く" },
    ],
    minimalPairs: [
      {
        a: { word: "vote", ipa: "voʊt", gloss: "投票する" },
        b: { word: "boat", ipa: "boʊt", gloss: "ボート" },
        contrastWith: "b",
      },
      {
        a: { word: "vet", ipa: "vɛt", gloss: "獣医" },
        b: { word: "bet", ipa: "bɛt", gloss: "賭ける" },
        contrastWith: "b",
      },
    ],
  },
  {
    kind: "consonant",
    id: "th",
    symbol: "θ",
    nameJa: "舌先を歯に挟む無声音",
    manner: "fricative",
    place: "dental",
    voiced: false,
    voicedPair: "dh",
    keyword: { word: "think", ipa: "θɪŋk", gloss: "考える" },
    articulation: [
      "舌先を上下の前歯の間に軽く挟む(または上の前歯の裏に当てる)。その隙間から息を擦り出す。声は出さない。",
      "舌を強く噛む必要はない。軽く触れる程度で息が漏れればよい。",
    ],
    pitfalls: [
      "/s/ で代用するのが日本語話者の典型: think が sink に、mouth が mouse に聞こえる。",
      "舌先が歯に触れているかを必ず確認。鏡で舌先が見えるくらいでよい。",
    ],
    examples: [
      { word: "think", ipa: "θɪŋk", gloss: "考える" },
      { word: "three", ipa: "θriː", gloss: "3" },
      { word: "mouth", ipa: "maʊθ", gloss: "口" },
      { word: "birthday", ipa: "ˈbɝːθdeɪ", gloss: "誕生日" },
      { word: "math", ipa: "mæθ", gloss: "数学" },
    ],
    minimalPairs: [
      {
        a: { word: "think", ipa: "θɪŋk", gloss: "考える" },
        b: { word: "sink", ipa: "sɪŋk", gloss: "沈む・流し" },
        contrastWith: "s",
        note: "舌先が歯に触れていれば think、歯茎の近くで鋭く擦れば sink。",
      },
      {
        a: { word: "three", ipa: "θriː", gloss: "3" },
        b: { word: "free", ipa: "friː", gloss: "自由な" },
        contrastWith: "f",
      },
      {
        a: { word: "mouth", ipa: "maʊθ", gloss: "口" },
        b: { word: "mouse", ipa: "maʊs", gloss: "ネズミ" },
        contrastWith: "s",
      },
    ],
  },
  {
    kind: "consonant",
    id: "dh",
    symbol: "ð",
    nameJa: "舌先を歯に挟む有声音",
    manner: "fricative",
    place: "dental",
    voiced: true,
    voicedPair: "th",
    keyword: { word: "this", ipa: "ðɪs", gloss: "これ" },
    articulation: [
      "/θ/ と同じ構え(舌先を前歯に軽く挟む)のまま声帯を震わせる。",
      "the、this、that、they など超高頻度の機能語に現れるため、出現回数は /θ/ より多い。",
    ],
    pitfalls: [
      "/z/ や /d/(ザ行・ダ行)で代用しがち: they が day に、breathe が breeze に聞こえる。",
    ],
    examples: [
      { word: "this", ipa: "ðɪs", gloss: "これ" },
      { word: "mother", ipa: "ˈmʌðɚ", gloss: "母" },
      { word: "they", ipa: "ðeɪ", gloss: "彼ら" },
      { word: "weather", ipa: "ˈwɛðɚ", gloss: "天気" },
      { word: "breathe", ipa: "briːð", gloss: "呼吸する" },
    ],
    minimalPairs: [
      {
        a: { word: "they", ipa: "ðeɪ", gloss: "彼ら" },
        b: { word: "day", ipa: "deɪ", gloss: "日" },
        contrastWith: "d",
        note: "舌先が歯から擦りながら離れれば they、歯茎で破裂すれば day。",
      },
      {
        a: { word: "breathe", ipa: "briːð", gloss: "呼吸する" },
        b: { word: "breeze", ipa: "briːz", gloss: "そよ風" },
        contrastWith: "z",
      },
    ],
  },
  {
    kind: "consonant",
    id: "s",
    symbol: "s",
    nameJa: "鋭い「ス」",
    manner: "fricative",
    place: "alveolar",
    voiced: false,
    voicedPair: "z",
    keyword: { word: "see", ipa: "siː", gloss: "見る" },
    articulation: [
      "舌先を歯茎に近づけ(触れない)、狭い隙間から鋭く息を擦り出す。",
    ],
    pitfalls: [
      "si を「シ」にしない: see と she、sea と she は別の音。日本語の「シ」は /ʃ/ 寄り。",
      "/θ/(th)との区別も重要: sink と think。",
    ],
    examples: [
      { word: "see", ipa: "siː", gloss: "見る" },
      { word: "city", ipa: "ˈsɪti", gloss: "都市" },
      { word: "bus", ipa: "bʌs", gloss: "バス" },
      { word: "class", ipa: "klæs", gloss: "クラス" },
      { word: "six", ipa: "sɪks", gloss: "6" },
    ],
    minimalPairs: [
      {
        a: { word: "sea", ipa: "siː", gloss: "海" },
        b: { word: "she", ipa: "ʃiː", gloss: "彼女は" },
        contrastWith: "sh",
        note: "日本語の「シー」で言うと she に聞こえる。s は舌先を前に。",
      },
      {
        a: { word: "sip", ipa: "sɪp", gloss: "すする" },
        b: { word: "zip", ipa: "zɪp", gloss: "ファスナー" },
        contrastWith: "z",
      },
    ],
  },
  {
    kind: "consonant",
    id: "z",
    symbol: "z",
    nameJa: "摩擦の「ズ」(破擦にしない)",
    manner: "fricative",
    place: "alveolar",
    voiced: true,
    voicedPair: "s",
    keyword: { word: "zoo", ipa: "zuː", gloss: "動物園" },
    articulation: [
      "/s/ と同じ構えのまま声帯を震わせる。舌は歯茎に触れない — 触れると日本語の「ヅ」(破擦音)になってしまう。",
    ],
    pitfalls: [
      "語頭の z をはじいて「ヅー」にしない: zoo は摩擦だけで滑らかに始める。",
      "複数形・三単現の s はしばしば /z/: dogs /dɔːɡz/、plays /pleɪz/。",
    ],
    examples: [
      { word: "zoo", ipa: "zuː", gloss: "動物園" },
      { word: "music", ipa: "ˈmjuːzɪk", gloss: "音楽" },
      { word: "eyes", ipa: "aɪz", gloss: "目(複数)" },
      { word: "easy", ipa: "ˈiːzi", gloss: "簡単な" },
      { word: "zero", ipa: "ˈziːroʊ", gloss: "ゼロ" },
    ],
    minimalPairs: [
      {
        a: { word: "rise", ipa: "raɪz", gloss: "上がる" },
        b: { word: "rice", ipa: "raɪs", gloss: "米" },
        contrastWith: "s",
        note: "語末が有声(z)だと直前の母音が長めになる。rise の「アイ」は rice より長い。",
      },
      {
        a: { word: "zip", ipa: "zɪp", gloss: "ファスナー" },
        b: { word: "sip", ipa: "sɪp", gloss: "すする" },
        contrastWith: "s",
      },
    ],
  },
  {
    kind: "consonant",
    id: "sh",
    symbol: "ʃ",
    nameJa: "静かにさせる「シュ」",
    manner: "fricative",
    place: "postalveolar",
    voiced: false,
    voicedPair: "zh",
    keyword: { word: "she", ipa: "ʃiː", gloss: "彼女は" },
    articulation: [
      "舌先を /s/ より少し奥に引き、唇を丸めて「シュー」と息を擦り出す。「静かに!」の「シーッ」の音。",
    ],
    pitfalls: [
      "/s/ との区別: she と sea。日本語の「シ」はこの音に近いので、むしろ /s/ 側を矯正する。",
      "/tʃ/(ch)との区別: share と chair。",
    ],
    examples: [
      { word: "she", ipa: "ʃiː", gloss: "彼女は" },
      { word: "ship", ipa: "ʃɪp", gloss: "船" },
      { word: "station", ipa: "ˈsteɪʃn", gloss: "駅" },
      { word: "fish", ipa: "fɪʃ", gloss: "魚" },
      { word: "special", ipa: "ˈspɛʃl", gloss: "特別な" },
    ],
    minimalPairs: [
      {
        a: { word: "ship", ipa: "ʃɪp", gloss: "船" },
        b: { word: "sip", ipa: "sɪp", gloss: "すする" },
        contrastWith: "s",
      },
      {
        a: { word: "share", ipa: "ʃɛr", gloss: "共有する" },
        b: { word: "chair", ipa: "tʃɛr", gloss: "椅子" },
        contrastWith: "ch",
      },
    ],
  },
  {
    kind: "consonant",
    id: "zh",
    symbol: "ʒ",
    nameJa: "濁った「ジュ」(摩擦)",
    manner: "fricative",
    place: "postalveolar",
    voiced: true,
    voicedPair: "sh",
    keyword: { word: "vision", ipa: "ˈvɪʒn", gloss: "視覚・展望" },
    articulation: [
      "/ʃ/ と同じ構えのまま声帯を震わせる。摩擦だけで、/dʒ/ のような閉鎖(息の止まり)はない。",
      "英語で最も出現頻度の低い子音。語中の -sion、-sure、-sual のつづりに多い。",
    ],
    pitfalls: [
      "/dʒ/(j)と混同しやすい: vision の「ジ」は止まらずに流れる音。",
      "ミニマルペアがほとんど存在しない音なので、例単語ごと覚えるのが実用的。",
    ],
    examples: [
      { word: "vision", ipa: "ˈvɪʒn", gloss: "視覚・展望" },
      { word: "usually", ipa: "ˈjuːʒuəli", gloss: "ふつう" },
      { word: "measure", ipa: "ˈmɛʒɚ", gloss: "測る" },
      { word: "Asia", ipa: "ˈeɪʒə", gloss: "アジア" },
      { word: "beige", ipa: "beɪʒ", gloss: "ベージュ" },
    ],
    minimalPairs: [],
  },
  {
    kind: "consonant",
    id: "h",
    symbol: "h",
    nameJa: "息だけの「ハ」",
    manner: "fricative",
    place: "glottal",
    voiced: false,
    keyword: { word: "hat", ipa: "hæt", gloss: "帽子" },
    articulation: [
      "口の中では何も触れず、声帯の隙間を息が通るだけの音。次に来る母音の口の構えを先に作り、息だけを先に出す。",
    ],
    pitfalls: [
      "「ヒ」([ç])や「フ」([ɸ])で代用しない: he は「ヒー」より息っぽく、who は唇をすぼめすぎない。",
      "弱形では h が落ちることが多い: tell him → 「テリム」(→ 連結現象「脱落」参照)。",
    ],
    examples: [
      { word: "hat", ipa: "hæt", gloss: "帽子" },
      { word: "hello", ipa: "həˈloʊ", gloss: "こんにちは" },
      { word: "who", ipa: "huː", gloss: "誰" },
      { word: "home", ipa: "hoʊm", gloss: "家" },
      { word: "behind", ipa: "bɪˈhaɪnd", gloss: "後ろに" },
    ],
    minimalPairs: [
      {
        a: { word: "hat", ipa: "hæt", gloss: "帽子" },
        b: { word: "fat", ipa: "fæt", gloss: "太った" },
        contrastWith: "f",
      },
      {
        a: { word: "hold", ipa: "hoʊld", gloss: "持つ" },
        b: { word: "fold", ipa: "foʊld", gloss: "折る" },
        contrastWith: "f",
      },
    ],
  },

  /* ---- 鼻音 ---- */
  {
    kind: "consonant",
    id: "m",
    symbol: "m",
    nameJa: "唇を閉じる「ム」",
    manner: "nasal",
    place: "bilabial",
    voiced: true,
    keyword: { word: "man", ipa: "mæn", gloss: "男性" },
    articulation: ["両唇を閉じ、声を鼻から抜く。"],
    pitfalls: [
      "語末の m は唇を閉じたまま終える。「ム」と母音を足さない: time は /taɪm/ で「タイム」ではない。",
      "語末で唇を閉じるか(m)・舌先を付けるか(n)で単語が変わる: sum と sun。",
    ],
    examples: [
      { word: "man", ipa: "mæn", gloss: "男性" },
      { word: "summer", ipa: "ˈsʌmɚ", gloss: "夏" },
      { word: "name", ipa: "neɪm", gloss: "名前" },
      { word: "money", ipa: "ˈmʌni", gloss: "お金" },
      { word: "time", ipa: "taɪm", gloss: "時間" },
    ],
    minimalPairs: [
      {
        a: { word: "sum", ipa: "sʌm", gloss: "合計" },
        b: { word: "sun", ipa: "sʌn", gloss: "太陽" },
        contrastWith: "n",
        note: "最後に唇が閉じれば sum、舌先が歯茎に付けば sun。",
      },
      {
        a: { word: "map", ipa: "mæp", gloss: "地図" },
        b: { word: "nap", ipa: "næp", gloss: "昼寝" },
        contrastWith: "n",
      },
    ],
  },
  {
    kind: "consonant",
    id: "n",
    symbol: "n",
    nameJa: "舌先を付ける「ン」",
    manner: "nasal",
    place: "alveolar",
    voiced: true,
    keyword: { word: "no", ipa: "noʊ", gloss: "いいえ" },
    articulation: ["舌先を歯茎にしっかり付け、声を鼻から抜く。"],
    pitfalls: [
      "日本語の語末の「ン」は舌がどこにも付かない曖昧な音 — 英語の語末 n は必ず舌先を歯茎に付ける: pen、rain。",
      "/ŋ/(ng)との区別: sin と sing、thin と thing。",
    ],
    examples: [
      { word: "no", ipa: "noʊ", gloss: "いいえ" },
      { word: "dinner", ipa: "ˈdɪnɚ", gloss: "夕食" },
      { word: "sun", ipa: "sʌn", gloss: "太陽" },
      { word: "rain", ipa: "reɪn", gloss: "雨" },
      { word: "knife", ipa: "naɪf", gloss: "ナイフ" },
    ],
    minimalPairs: [
      {
        a: { word: "sun", ipa: "sʌn", gloss: "太陽" },
        b: { word: "sung", ipa: "sʌŋ", gloss: "sing の過去分詞" },
        contrastWith: "ng",
      },
      {
        a: { word: "night", ipa: "naɪt", gloss: "夜" },
        b: { word: "might", ipa: "maɪt", gloss: "かもしれない" },
        contrastWith: "m",
      },
    ],
  },
  {
    kind: "consonant",
    id: "ng",
    symbol: "ŋ",
    nameJa: "鼻に抜ける「ング」",
    manner: "nasal",
    place: "velar",
    voiced: true,
    keyword: { word: "sing", ipa: "sɪŋ", gloss: "歌う" },
    articulation: [
      "舌の奥を軟口蓋に付け(/ɡ/ と同じ位置)、声を鼻から抜く。日本語の「案外」の「ン」と同じ音。",
      "語末では g を破裂させない: sing は /sɪŋ/ で終わり、「グ」を言わない。",
    ],
    pitfalls: [
      "「シング」と g を破裂させるのが典型的な誤り。singer は /ˈsɪŋɚ/(g なし)、finger は /ˈfɪŋɡɚ/(g あり)。",
      "/n/ との区別: thin と thing。",
    ],
    examples: [
      { word: "sing", ipa: "sɪŋ", gloss: "歌う" },
      { word: "long", ipa: "lɔːŋ", gloss: "長い" },
      { word: "thing", ipa: "θɪŋ", gloss: "物・こと" },
      { word: "English", ipa: "ˈɪŋɡlɪʃ", gloss: "英語" },
      { word: "morning", ipa: "ˈmɔːrnɪŋ", gloss: "朝" },
    ],
    minimalPairs: [
      {
        a: { word: "thing", ipa: "θɪŋ", gloss: "物・こと" },
        b: { word: "thin", ipa: "θɪn", gloss: "薄い" },
        contrastWith: "n",
        note: "舌の奥で止めれば thing、舌先を付ければ thin。",
      },
      {
        a: { word: "sing", ipa: "sɪŋ", gloss: "歌う" },
        b: { word: "sin", ipa: "sɪn", gloss: "罪" },
        contrastWith: "n",
      },
    ],
  },

  /* ---- 流音 ---- */
  {
    kind: "consonant",
    id: "l",
    symbol: "l",
    nameJa: "舌先を付ける「ル」",
    manner: "liquid",
    place: "alveolar",
    voiced: true,
    keyword: { word: "light", ipa: "laɪt", gloss: "光" },
    articulation: [
      "舌先を歯茎にしっかり当てたまま、舌の両脇から声を流す。当てている時間が日本語のラ行よりずっと長い。",
      "語末・子音の前では「暗い L」(dark L)になる: 舌の奥も持ち上がり、「オ」や「ウ」に近い響きが混ざる(feel、milk)。",
    ],
    pitfalls: [
      "日本語のラ行は舌先で「はじく」音 — 英語の /l/ は当てたまま声を出し続ける。",
      "/r/ との区別が日本語話者最大の難所: light と right、glass と grass。",
      "語末の dark L を「ル」と読まない: feel は「フィール」より「フィーォ」に近い。",
    ],
    examples: [
      { word: "light", ipa: "laɪt", gloss: "光" },
      { word: "hello", ipa: "həˈloʊ", gloss: "こんにちは" },
      { word: "feel", ipa: "fiːl", gloss: "感じる" },
      { word: "milk", ipa: "mɪlk", gloss: "牛乳" },
      { word: "slowly", ipa: "ˈsloʊli", gloss: "ゆっくりと" },
    ],
    minimalPairs: [
      {
        a: { word: "light", ipa: "laɪt", gloss: "光" },
        b: { word: "right", ipa: "raɪt", gloss: "右・正しい" },
        contrastWith: "r",
        note: "舌先が歯茎に付けば light、どこにも付かなければ right。",
      },
      {
        a: { word: "long", ipa: "lɔːŋ", gloss: "長い" },
        b: { word: "wrong", ipa: "rɔːŋ", gloss: "間違った" },
        contrastWith: "r",
      },
      {
        a: { word: "glass", ipa: "ɡlæs", gloss: "ガラス・コップ" },
        b: { word: "grass", ipa: "ɡræs", gloss: "草" },
        contrastWith: "r",
      },
    ],
  },
  {
    kind: "consonant",
    id: "r",
    symbol: "r",
    nameJa: "舌をどこにも付けない「ル」",
    manner: "liquid",
    place: "postalveolar",
    voiced: true,
    keyword: { word: "red", ipa: "rɛd", gloss: "赤い" },
    articulation: [
      "舌先を口の中のどこにも触れさせず、軽く反らせる(または舌の奥を盛り上げる)。喉の方からこもった声を出す。",
      "語頭では唇を軽く丸めて始めるとそれらしくなる: red は「ゥレッド」のイメージ。",
    ],
    pitfalls: [
      "日本語のラ行(舌先ではじく音)で代用しない — はじいた瞬間 /l/ や /d/ に聞こえる。「触れない」ことが全て。",
      "母音の後の r(car、park)も GA では発音する(→ R音性母音 /ɚ ɝː/ も参照)。",
    ],
    examples: [
      { word: "red", ipa: "rɛd", gloss: "赤い" },
      { word: "sorry", ipa: "ˈsɑːri", gloss: "ごめんなさい" },
      { word: "car", ipa: "kɑːr", gloss: "車" },
      { word: "brother", ipa: "ˈbrʌðɚ", gloss: "兄弟" },
      { word: "write", ipa: "raɪt", gloss: "書く" },
    ],
    minimalPairs: [
      {
        a: { word: "rock", ipa: "rɑːk", gloss: "岩" },
        b: { word: "lock", ipa: "lɑːk", gloss: "錠" },
        contrastWith: "l",
      },
      {
        a: { word: "road", ipa: "roʊd", gloss: "道路" },
        b: { word: "load", ipa: "loʊd", gloss: "荷物" },
        contrastWith: "l",
      },
    ],
  },

  /* ---- 半母音(わたり音) ---- */
  {
    kind: "consonant",
    id: "y",
    symbol: "j",
    nameJa: "「ヤ」のわたり音",
    manner: "glide",
    place: "palatal",
    voiced: true,
    keyword: { word: "yes", ipa: "jɛs", gloss: "はい" },
    articulation: [
      "「イ」の構えから次の母音へ素早く滑る音。日本語のヤ行とほぼ同じ。",
      "music /ˈmjuːzɪk/、few /fjuː/ のように子音の後に隠れていることも多い。",
    ],
    pitfalls: [
      "/dʒ/(j)との区別: yet と jet。yes を「ジェス」にしない。",
      "year と ear: year は「イ」への滑りから始まり、ear は母音から始まる。",
    ],
    examples: [
      { word: "yes", ipa: "jɛs", gloss: "はい" },
      { word: "year", ipa: "jɪr", gloss: "年" },
      { word: "young", ipa: "jʌŋ", gloss: "若い" },
      { word: "music", ipa: "ˈmjuːzɪk", gloss: "音楽" },
      { word: "few", ipa: "fjuː", gloss: "少しの" },
    ],
    minimalPairs: [
      {
        a: { word: "yet", ipa: "jɛt", gloss: "まだ" },
        b: { word: "jet", ipa: "dʒɛt", gloss: "ジェット機" },
        contrastWith: "j",
      },
      {
        a: { word: "yam", ipa: "jæm", gloss: "ヤムイモ" },
        b: { word: "jam", ipa: "dʒæm", gloss: "ジャム" },
        contrastWith: "j",
      },
    ],
  },
  {
    kind: "consonant",
    id: "w",
    symbol: "w",
    nameJa: "唇を丸める「ワ」",
    manner: "glide",
    place: "bilabial",
    voiced: true,
    keyword: { word: "we", ipa: "wiː", gloss: "私たちは" },
    articulation: [
      "唇をしっかり丸めてすぼめた「ウ」の構えから、次の母音へ素早く滑る。同時に舌の奥も持ち上がる(両唇+軟口蓋の音)。",
      "日本語の「ワ」より唇の丸めがずっと強い。",
    ],
    pitfalls: [
      "w + /ʊ, uː/ の組み合わせで w が消えるのが典型: would、wood、woman は唇の丸め→開きの動きを意識的に作る。",
      "/v/ との混同: west と vest。w は歯を使わない。",
    ],
    examples: [
      { word: "we", ipa: "wiː", gloss: "私たちは" },
      { word: "window", ipa: "ˈwɪndoʊ", gloss: "窓" },
      { word: "away", ipa: "əˈweɪ", gloss: "離れて" },
      { word: "question", ipa: "ˈkwɛstʃən", gloss: "質問" },
      { word: "woman", ipa: "ˈwʊmən", gloss: "女性" },
    ],
    minimalPairs: [
      {
        a: { word: "west", ipa: "wɛst", gloss: "西" },
        b: { word: "vest", ipa: "vɛst", gloss: "ベスト" },
        contrastWith: "v",
        note: "唇だけで作れば west、歯と唇なら vest。",
      },
      {
        a: { word: "wine", ipa: "waɪn", gloss: "ワイン" },
        b: { word: "vine", ipa: "vaɪn", gloss: "つる植物" },
        contrastWith: "v",
      },
    ],
  },
];
