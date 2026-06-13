import type { Vowel } from "@/lib/types";

/**
 * GA(General American)母音 17 音素。
 *
 * 表記規約(本サイト共通 — 全データファイルで統一すること):
 * - 長母音は ː を付す: iː uː ɑː ɔː ɝː
 * - R音性母音は ɚ(弱音節)/ ɝː(強勢音節)
 * - goat は oʊ、face は eɪ(英式の əʊ は使わない)
 * - 多音節語には強勢記号 ˈ ˌ を付す。IPA はスラッシュなしで持つ(<IPA> が付与)
 * - cot-caught 合流(ɑː/ɔː)は thought のページで注記
 * - たたき音 ɾ は連結現象(flapping)のページでのみ使う。通常表記は t のまま
 *
 * スラッグは Wells 語彙セット名(kit, dress, trap, ...)。
 */
export const VOWELS: readonly Vowel[] = [
  /* ---- 緩母音(短母音) ---- */
  {
    kind: "vowel",
    id: "kit",
    symbol: "ɪ",
    nameJa: "「イ」と「エ」の間の緩んだ母音",
    group: "lax",
    chartPos: { x: 0.18, y: 0.22 },
    keyword: { word: "kit", ipa: "kɪt", gloss: "道具一式" },
    articulation: [
      "口の力を抜き、舌を「イ」よりわずかに低く・奥に引いて短く発音する。「イ」と「エ」の中間の音色になる。",
      "日本語の「イ」のように唇を横に引かないこと。あごの力を抜いてわずかに下げるのがコツ。",
    ],
    pitfalls: [
      "日本語の「イ」で代用すると /iː/(fleece)と区別がつかなくなる。ship と sheep の言い分け・聞き分けが代表例。",
      "「短いイー」ではない。長さではなく音色そのものが /iː/ と違う点に注意。",
    ],
    examples: [
      { word: "sit", ipa: "sɪt", gloss: "座る" },
      { word: "big", ipa: "bɪɡ", gloss: "大きい" },
      { word: "fish", ipa: "fɪʃ", gloss: "魚" },
      { word: "gym", ipa: "dʒɪm", gloss: "ジム" },
      { word: "busy", ipa: "ˈbɪzi", gloss: "忙しい" },
    ],
    minimalPairs: [
      {
        a: { word: "ship", ipa: "ʃɪp", gloss: "船" },
        b: { word: "sheep", ipa: "ʃiːp", gloss: "羊" },
        contrastWith: "fleece",
        note: "ship は短く緩く、sheep は唇を横に引いて鋭く長く。",
      },
      {
        a: { word: "bit", ipa: "bɪt", gloss: "少し" },
        b: { word: "beat", ipa: "biːt", gloss: "打つ" },
        contrastWith: "fleece",
      },
      {
        a: { word: "sit", ipa: "sɪt", gloss: "座る" },
        b: { word: "set", ipa: "sɛt", gloss: "置く" },
        contrastWith: "dress",
      },
    ],
  },
  {
    kind: "vowel",
    id: "dress",
    symbol: "ɛ",
    nameJa: "日本語の「エ」に近い母音",
    group: "lax",
    chartPos: { x: 0.2, y: 0.5 },
    keyword: { word: "dress", ipa: "drɛs", gloss: "服" },
    articulation: [
      "舌は前寄りで中くらいの高さ。日本語の「エ」よりわずかに口を開いて短く発音する。",
      "辞書によっては /e/ と表記されるが同じ音を指す。",
    ],
    pitfalls: [
      "/æ/(trap)との区別が最重要。bed と bad、pen と pan は口の開きの大きさで分ける。",
    ],
    examples: [
      { word: "bed", ipa: "bɛd", gloss: "ベッド" },
      { word: "pen", ipa: "pɛn", gloss: "ペン" },
      { word: "head", ipa: "hɛd", gloss: "頭" },
      { word: "friend", ipa: "frɛnd", gloss: "友達" },
      { word: "said", ipa: "sɛd", gloss: "say の過去形" },
      { word: "many", ipa: "ˈmɛni", gloss: "多くの" },
    ],
    minimalPairs: [
      {
        a: { word: "bed", ipa: "bɛd", gloss: "ベッド" },
        b: { word: "bad", ipa: "bæd", gloss: "悪い" },
        contrastWith: "trap",
        note: "bad はあごを大きく下げる。bed は日本語の「エ」のまま。",
      },
      {
        a: { word: "pen", ipa: "pɛn", gloss: "ペン" },
        b: { word: "pan", ipa: "pæn", gloss: "フライパン" },
        contrastWith: "trap",
      },
      {
        a: { word: "let", ipa: "lɛt", gloss: "させる" },
        b: { word: "late", ipa: "leɪt", gloss: "遅い" },
        contrastWith: "face",
      },
    ],
  },
  {
    kind: "vowel",
    id: "trap",
    symbol: "æ",
    nameJa: "「ア」と「エ」の間の母音",
    group: "lax",
    chartPos: { x: 0.15, y: 0.85 },
    keyword: { word: "trap", ipa: "træp", gloss: "わな" },
    articulation: [
      "「エ」の口の構えから、舌を前寄りに保ったままあごを大きく下げる。「エァ」のように聞こえる。",
      "日本語にはない音。鏡で見て、指が縦に2本入るくらい口を開けるのが目安。",
    ],
    pitfalls: [
      "日本語の「ア」で代用すると /ʌ/(strut)や /ɑː/(palm)と混同される。hat・hut・hot は全部違う母音。",
      "口の開きが足りないのが日本語話者の典型的な失敗。思い切って開ける。",
    ],
    examples: [
      { word: "cat", ipa: "kæt", gloss: "猫" },
      { word: "map", ipa: "mæp", gloss: "地図" },
      { word: "apple", ipa: "ˈæpl", gloss: "りんご" },
      { word: "hand", ipa: "hænd", gloss: "手" },
      { word: "happy", ipa: "ˈhæpi", gloss: "幸せな" },
    ],
    minimalPairs: [
      {
        a: { word: "cat", ipa: "kæt", gloss: "猫" },
        b: { word: "cut", ipa: "kʌt", gloss: "切る" },
        contrastWith: "strut",
        note: "cat は口を大きく、cut は小さく短く。",
      },
      {
        a: { word: "hat", ipa: "hæt", gloss: "帽子" },
        b: { word: "hot", ipa: "hɑːt", gloss: "暑い" },
        contrastWith: "palm",
        note: "hat は前寄りの「エァ」、hot は喉の奥の「アー」。",
      },
    ],
  },
  {
    kind: "vowel",
    id: "strut",
    symbol: "ʌ",
    nameJa: "口をあまり開けない短い「ア」",
    group: "lax",
    chartPos: { x: 0.62, y: 0.65 },
    keyword: { word: "strut", ipa: "strʌt", gloss: "気取って歩く" },
    articulation: [
      "口は半開き、舌は中央のやや奥。力を抜いて短く「ア」と発音する。",
      "日本語の「ア」より口の開きが小さく、こもった響きになる。",
    ],
    pitfalls: [
      "hut(/ʌ/)・hat(/æ/)・hot(/ɑː/)の3つの「ア」の区別が日本語話者の最大の難所のひとつ。",
      "つづり字 u を「ウ」と読まない: bus は「ブス」ではなく /bʌs/。",
    ],
    examples: [
      { word: "cup", ipa: "kʌp", gloss: "カップ" },
      { word: "sun", ipa: "sʌn", gloss: "太陽" },
      { word: "love", ipa: "lʌv", gloss: "愛" },
      { word: "money", ipa: "ˈmʌni", gloss: "お金" },
      { word: "blood", ipa: "blʌd", gloss: "血" },
    ],
    minimalPairs: [
      {
        a: { word: "luck", ipa: "lʌk", gloss: "運" },
        b: { word: "lock", ipa: "lɑːk", gloss: "錠" },
        contrastWith: "palm",
        note: "luck は口を開けず短く、lock は大きく開けて奥から。",
      },
      {
        a: { word: "cup", ipa: "kʌp", gloss: "カップ" },
        b: { word: "cap", ipa: "kæp", gloss: "帽子" },
        contrastWith: "trap",
      },
    ],
  },
  {
    kind: "vowel",
    id: "foot",
    symbol: "ʊ",
    nameJa: "唇の力を抜いた短い「ウ」",
    group: "lax",
    chartPos: { x: 0.78, y: 0.2 },
    keyword: { word: "foot", ipa: "fʊt", gloss: "足" },
    articulation: [
      "舌は奥寄りで高め。唇は軽く丸める程度で、力を抜いて短く発音する。",
      "「ウ」と「オ」の間のような緩んだ音色。",
    ],
    pitfalls: [
      "/uː/(goose)との区別: full と fool、pull と pool。",
      "日本語の「ウ」は唇が平らで舌が前寄り — そのまま使うとどちらの音にもならない。",
    ],
    examples: [
      { word: "book", ipa: "bʊk", gloss: "本" },
      { word: "good", ipa: "ɡʊd", gloss: "良い" },
      { word: "put", ipa: "pʊt", gloss: "置く" },
      { word: "woman", ipa: "ˈwʊmən", gloss: "女性" },
      { word: "could", ipa: "kʊd", gloss: "can の過去形" },
    ],
    minimalPairs: [
      {
        a: { word: "full", ipa: "fʊl", gloss: "いっぱいの" },
        b: { word: "fool", ipa: "fuːl", gloss: "ばか者" },
        contrastWith: "goose",
        note: "full は緩く短く、fool は唇をしっかり丸めて長く。",
      },
      {
        a: { word: "pull", ipa: "pʊl", gloss: "引く" },
        b: { word: "pool", ipa: "puːl", gloss: "プール" },
        contrastWith: "goose",
      },
    ],
  },
  {
    kind: "vowel",
    id: "comma",
    symbol: "ə",
    nameJa: "あいまい母音(シュワー)",
    group: "lax",
    chartPos: { x: 0.5, y: 0.52 },
    keyword: { word: "comma", ipa: "ˈkɑːmə", gloss: "コンマ" },
    articulation: [
      "口も舌も完全に脱力して出す、最も弱く短い母音。口の構えは「中立」— どの母音の形でもない。",
      "強勢のない音節にだけ現れる。実は英語で最も出現頻度の高い母音で、リズムの要(母音弱化 → 超分節音の章を参照)。",
    ],
    pitfalls: [
      "つづり字につられて a を「ア」、o を「オ」と読まない: about の a、today の o は両方とも /ə/。",
      "はっきり発音しようとしないこと。「弱く・短く・あいまいに」が正解という珍しい音。",
      "強勢のない音節にしか現れないため、ミニマルペアは存在しない。",
    ],
    examples: [
      { word: "about", ipa: "əˈbaʊt", gloss: "〜について" },
      { word: "sofa", ipa: "ˈsoʊfə", gloss: "ソファ" },
      { word: "banana", ipa: "bəˈnænə", gloss: "バナナ" },
      { word: "today", ipa: "təˈdeɪ", gloss: "今日" },
      { word: "support", ipa: "səˈpɔːrt", gloss: "支える" },
    ],
    minimalPairs: [],
  },

  /* ---- 緊張母音(長母音) ---- */
  {
    kind: "vowel",
    id: "fleece",
    symbol: "iː",
    nameJa: "鋭く長い「イー」",
    group: "tense",
    chartPos: { x: 0.05, y: 0.05 },
    keyword: { word: "fleece", ipa: "fliːs", gloss: "フリース" },
    articulation: [
      "舌を高く前へ寄せ、唇を横に引いて緊張させ、長く「イー」と発音する。",
      "日本語の「イー」でほぼ通じるが、筋肉の緊張がより強い。",
    ],
    pitfalls: [
      "/ɪ/(kit)との対比が最重要。長さを保つことと、音色を緩めないこと。",
    ],
    examples: [
      { word: "see", ipa: "siː", gloss: "見る" },
      { word: "eat", ipa: "iːt", gloss: "食べる" },
      { word: "team", ipa: "tiːm", gloss: "チーム" },
      { word: "key", ipa: "kiː", gloss: "鍵" },
      { word: "people", ipa: "ˈpiːpl", gloss: "人々" },
    ],
    minimalPairs: [
      {
        a: { word: "eat", ipa: "iːt", gloss: "食べる" },
        b: { word: "it", ipa: "ɪt", gloss: "それ" },
        contrastWith: "kit",
      },
      {
        a: { word: "seat", ipa: "siːt", gloss: "席" },
        b: { word: "sit", ipa: "sɪt", gloss: "座る" },
        contrastWith: "kit",
      },
    ],
  },
  {
    kind: "vowel",
    id: "goose",
    symbol: "uː",
    nameJa: "唇を丸めた長い「ウー」",
    group: "tense",
    chartPos: { x: 0.92, y: 0.06 },
    keyword: { word: "goose", ipa: "ɡuːs", gloss: "ガチョウ" },
    articulation: [
      "舌を高く奥へ引き、唇をしっかり丸めて前に突き出し、長く「ウー」と発音する。",
      "口笛を吹く直前のような唇の形が目安。",
    ],
    pitfalls: [
      "日本語の「ウ」は唇が平ら — そのまま伸ばしても /uː/ にならない。唇の丸めが鍵。",
      "/ʊ/(foot)との対比: fool と full。",
    ],
    examples: [
      { word: "food", ipa: "fuːd", gloss: "食べ物" },
      { word: "blue", ipa: "bluː", gloss: "青い" },
      { word: "school", ipa: "skuːl", gloss: "学校" },
      { word: "new", ipa: "nuː", gloss: "新しい" },
      { word: "June", ipa: "dʒuːn", gloss: "6月" },
    ],
    minimalPairs: [
      {
        a: { word: "fool", ipa: "fuːl", gloss: "ばか者" },
        b: { word: "full", ipa: "fʊl", gloss: "いっぱいの" },
        contrastWith: "foot",
      },
      {
        a: { word: "Luke", ipa: "luːk", gloss: "ルーク(人名)" },
        b: { word: "look", ipa: "lʊk", gloss: "見る" },
        contrastWith: "foot",
      },
    ],
  },
  {
    kind: "vowel",
    id: "palm",
    symbol: "ɑː",
    nameJa: "口を大きく開ける奥の「アー」",
    group: "tense",
    chartPos: { x: 0.88, y: 0.95 },
    keyword: { word: "palm", ipa: "pɑːm", gloss: "手のひら" },
    articulation: [
      "口を大きく開け、舌を低く奥へ引いて、喉の奥から「アー」と発音する。医者に喉を見せるときの「アー」に近い。",
      "GA ではつづり字 o の短母音(hot, stop, body)もこの音になる。",
    ],
    pitfalls: [
      "hot を「ホット」のような「オ」で読まない — GA では /hɑːt/(「ハート」に近く聞こえる)。",
      "/ʌ/(strut)・/æ/(trap)との3点区別: hot・hut・hat。",
    ],
    examples: [
      { word: "father", ipa: "ˈfɑːðɚ", gloss: "父" },
      { word: "hot", ipa: "hɑːt", gloss: "暑い" },
      { word: "stop", ipa: "stɑːp", gloss: "止まる" },
      { word: "body", ipa: "ˈbɑːdi", gloss: "体" },
      { word: "watch", ipa: "wɑːtʃ", gloss: "見る・腕時計" },
    ],
    minimalPairs: [
      {
        a: { word: "hot", ipa: "hɑːt", gloss: "暑い" },
        b: { word: "hut", ipa: "hʌt", gloss: "小屋" },
        contrastWith: "strut",
        note: "hot は大きく開けて長く、hut は半開きで短く。",
      },
      {
        a: { word: "lock", ipa: "lɑːk", gloss: "錠" },
        b: { word: "luck", ipa: "lʌk", gloss: "運" },
        contrastWith: "strut",
      },
    ],
  },
  {
    kind: "vowel",
    id: "thought",
    symbol: "ɔː",
    nameJa: "「オ」寄りの長い「アー」",
    group: "tense",
    chartPos: { x: 0.85, y: 0.62 },
    keyword: { word: "thought", ipa: "θɔːt", gloss: "考え" },
    articulation: [
      "口を大きめに開けたまま唇をわずかに丸め、舌は奥の低め。「オー」と「アー」の中間の音。",
    ],
    pitfalls: [
      "law を日本語の「ロー」(唇を丸めた「オー」)にしない。口の開きはずっと大きい。",
      "GA では /ɑː/ と合流した話者が多い(cot-caught merger)。caught と cot を同じ母音で発音する人が多数派で、どちらで発音しても通じる。",
    ],
    examples: [
      { word: "law", ipa: "lɔː", gloss: "法律" },
      { word: "call", ipa: "kɔːl", gloss: "呼ぶ・電話する" },
      { word: "bought", ipa: "bɔːt", gloss: "buy の過去形" },
      { word: "daughter", ipa: "ˈdɔːtɚ", gloss: "娘" },
      { word: "walk", ipa: "wɔːk", gloss: "歩く" },
    ],
    minimalPairs: [
      {
        a: { word: "caught", ipa: "kɔːt", gloss: "catch の過去形" },
        b: { word: "cot", ipa: "kɑːt", gloss: "簡易ベッド" },
        contrastWith: "palm",
        note: "合流話者はこの2語を同じに発音する。聞き分けられなくても心配無用。",
      },
      {
        a: { word: "law", ipa: "lɔː", gloss: "法律" },
        b: { word: "low", ipa: "loʊ", gloss: "低い" },
        contrastWith: "goat",
        note: "low は「オ」から「ウ」へ動く二重母音。law は動かない。",
      },
    ],
  },

  /* ---- R音性母音(GA特有) ---- */
  {
    kind: "vowel",
    id: "letter",
    symbol: "ɚ",
    nameJa: "弱いR音性母音",
    group: "rhotic",
    chartPos: { x: 0.66, y: 0.42 },
    keyword: { word: "letter", ipa: "ˈlɛtɚ", gloss: "手紙" },
    articulation: [
      "シュワー(/ə/)の構えのまま、舌先をどこにも触れないよう軽く反らせる(または舌の奥を盛り上げる)。R の響きを持った弱い母音になる。",
      "強勢のない音節に現れる。つづり字 -er、-or、-ar の語末に多い。",
    ],
    pitfalls: [
      "teacher を「ティーチャー」のように「アー」で伸ばさない。最後まで R の響きを保つ。",
      "強勢のない音節にしか現れないため、ミニマルペアは存在しない。",
    ],
    examples: [
      { word: "teacher", ipa: "ˈtiːtʃɚ", gloss: "先生" },
      { word: "doctor", ipa: "ˈdɑːktɚ", gloss: "医者" },
      { word: "color", ipa: "ˈkʌlɚ", gloss: "色" },
      { word: "dollar", ipa: "ˈdɑːlɚ", gloss: "ドル" },
      { word: "percent", ipa: "pɚˈsɛnt", gloss: "パーセント" },
    ],
    minimalPairs: [],
  },
  {
    kind: "vowel",
    id: "nurse",
    symbol: "ɝː",
    nameJa: "強いR音性母音(強勢あり)",
    group: "rhotic",
    chartPos: { x: 0.34, y: 0.42 },
    keyword: { word: "nurse", ipa: "nɝːs", gloss: "看護師" },
    articulation: [
      "口をあまり開けず、舌先をどこにも触れないように反らせて(または舌の奥を盛り上げて)、こもった「アー」を長く出す。唇は軽く丸めてよい。",
      "/ɚ/ と同じ音色で、強勢があり長い版。",
    ],
    pitfalls: [
      "bird を「バード」と平らな「アー」で発音しない。R の響きが最初から最後まで続く。",
      "heart(/hɑːrt/ = 大きく開けた「アー」+ r)との区別: hurt と heart。",
      "girl は /ɝː/ の直後に暗い L が来る難語。「ガール」と2拍にしない。",
    ],
    examples: [
      { word: "bird", ipa: "bɝːd", gloss: "鳥" },
      { word: "work", ipa: "wɝːk", gloss: "働く" },
      { word: "learn", ipa: "lɝːn", gloss: "学ぶ" },
      { word: "girl", ipa: "ɡɝːl", gloss: "女の子" },
      { word: "Thursday", ipa: "ˈθɝːzdeɪ", gloss: "木曜日" },
    ],
    minimalPairs: [
      {
        a: { word: "hurt", ipa: "hɝːt", gloss: "傷つける" },
        b: { word: "heart", ipa: "hɑːrt", gloss: "心臓" },
        contrastWith: "palm",
        note: "hurt は口を開けずこもった音、heart は大きく開けてから r へ。",
      },
      {
        a: { word: "first", ipa: "fɝːst", gloss: "最初の" },
        b: { word: "fast", ipa: "fæst", gloss: "速い" },
        contrastWith: "trap",
      },
    ],
  },

  /* ---- 二重母音 ---- */
  {
    kind: "vowel",
    id: "face",
    symbol: "eɪ",
    nameJa: "「エイ」— 滑らかに動く母音",
    group: "diphthong",
    chartPos: { from: { x: 0.22, y: 0.52 }, to: { x: 0.18, y: 0.25 } },
    keyword: { word: "face", ipa: "feɪs", gloss: "顔" },
    articulation: [
      "「エ」から「イ」へ滑らかに移動する。出発点の「エ」を強く長めに、終点の「イ」は軽く添えるだけ。",
    ],
    pitfalls: [
      "日本語の「エー」と平らに伸ばさない: take は「テーク」ではなく /teɪk/。必ず「イ」へ動かす。",
      "「エ・イ」と2拍に切らない。1拍の中で滑らかにつなげる。",
    ],
    examples: [
      { word: "day", ipa: "deɪ", gloss: "日" },
      { word: "make", ipa: "meɪk", gloss: "作る" },
      { word: "rain", ipa: "reɪn", gloss: "雨" },
      { word: "eight", ipa: "eɪt", gloss: "8" },
      { word: "station", ipa: "ˈsteɪʃn", gloss: "駅" },
    ],
    minimalPairs: [
      {
        a: { word: "pain", ipa: "peɪn", gloss: "痛み" },
        b: { word: "pen", ipa: "pɛn", gloss: "ペン" },
        contrastWith: "dress",
      },
      {
        a: { word: "taste", ipa: "teɪst", gloss: "味" },
        b: { word: "test", ipa: "tɛst", gloss: "試験" },
        contrastWith: "dress",
      },
    ],
  },
  {
    kind: "vowel",
    id: "price",
    symbol: "aɪ",
    nameJa: "「アイ」",
    group: "diphthong",
    chartPos: { from: { x: 0.3, y: 0.92 }, to: { x: 0.2, y: 0.3 } },
    keyword: { word: "price", ipa: "praɪs", gloss: "値段" },
    articulation: [
      "口を大きく開けた「ア」から「イ」へ滑らかに移動する。前半の「ア」をはっきり、後半は軽く。",
    ],
    pitfalls: [
      "日本語話者には比較的易しい音。ただし後ろが有声音だと長め(eyes)、無声音だと短め(ice)になる傾向は知っておくとよい。",
    ],
    examples: [
      { word: "time", ipa: "taɪm", gloss: "時間" },
      { word: "my", ipa: "maɪ", gloss: "私の" },
      { word: "eye", ipa: "aɪ", gloss: "目" },
      { word: "light", ipa: "laɪt", gloss: "光" },
      { word: "buy", ipa: "baɪ", gloss: "買う" },
    ],
    minimalPairs: [
      {
        a: { word: "buy", ipa: "baɪ", gloss: "買う" },
        b: { word: "boy", ipa: "bɔɪ", gloss: "男の子" },
        contrastWith: "choice",
      },
      {
        a: { word: "like", ipa: "laɪk", gloss: "好む" },
        b: { word: "lake", ipa: "leɪk", gloss: "湖" },
        contrastWith: "face",
      },
    ],
  },
  {
    kind: "vowel",
    id: "choice",
    symbol: "ɔɪ",
    nameJa: "「オイ」",
    group: "diphthong",
    chartPos: { from: { x: 0.82, y: 0.6 }, to: { x: 0.25, y: 0.3 } },
    keyword: { word: "choice", ipa: "tʃɔɪs", gloss: "選択" },
    articulation: [
      "唇を丸めた「オ」から「イ」へ滑らかに移動する。移動距離が長いので、ゆっくり丁寧に。",
    ],
    pitfalls: ["出現頻度は低いが、boy と buy の区別は確実に。"],
    examples: [
      { word: "boy", ipa: "bɔɪ", gloss: "男の子" },
      { word: "voice", ipa: "vɔɪs", gloss: "声" },
      { word: "coin", ipa: "kɔɪn", gloss: "硬貨" },
      { word: "enjoy", ipa: "ɪnˈdʒɔɪ", gloss: "楽しむ" },
      { word: "toy", ipa: "tɔɪ", gloss: "おもちゃ" },
    ],
    minimalPairs: [
      {
        a: { word: "toy", ipa: "tɔɪ", gloss: "おもちゃ" },
        b: { word: "tie", ipa: "taɪ", gloss: "ネクタイ・結ぶ" },
        contrastWith: "price",
      },
    ],
  },
  {
    kind: "vowel",
    id: "mouth",
    symbol: "aʊ",
    nameJa: "「アウ」",
    group: "diphthong",
    chartPos: { from: { x: 0.28, y: 0.9 }, to: { x: 0.75, y: 0.25 } },
    keyword: { word: "mouth", ipa: "maʊθ", gloss: "口" },
    articulation: [
      "大きく開けた「ア」から、唇を丸めた「ウ」へ滑らかに移動する。",
    ],
    pitfalls: [
      "「オウ」(goat)と混同しない: now と no、found と phoned。出発点の口の開きが全く違う。",
    ],
    examples: [
      { word: "now", ipa: "naʊ", gloss: "今" },
      { word: "house", ipa: "haʊs", gloss: "家" },
      { word: "town", ipa: "taʊn", gloss: "町" },
      { word: "loud", ipa: "laʊd", gloss: "うるさい" },
      { word: "flower", ipa: "ˈflaʊɚ", gloss: "花" },
    ],
    minimalPairs: [
      {
        a: { word: "now", ipa: "naʊ", gloss: "今" },
        b: { word: "no", ipa: "noʊ", gloss: "いいえ" },
        contrastWith: "goat",
        note: "now は「ア」から、no は「オ」から始まる。",
      },
      {
        a: { word: "down", ipa: "daʊn", gloss: "下へ" },
        b: { word: "dawn", ipa: "dɔːn", gloss: "夜明け" },
        contrastWith: "thought",
      },
    ],
  },
  {
    kind: "vowel",
    id: "goat",
    symbol: "oʊ",
    nameJa: "「オウ」— 動く「オー」",
    group: "diphthong",
    chartPos: { from: { x: 0.72, y: 0.5 }, to: { x: 0.78, y: 0.22 } },
    keyword: { word: "goat", ipa: "ɡoʊt", gloss: "ヤギ" },
    articulation: [
      "「オ」から「ウ」へ滑らかに移動する。終点で唇の丸めが強くなる。",
    ],
    pitfalls: [
      "日本語の「オー」と平らに伸ばすのが最も多い誤り: note は「ノート」ではなく /noʊt/。必ず「ウ」へ動かす。",
      "law(/ɔː/ — 動かない)との対比: low と law、coat と caught。",
    ],
    examples: [
      { word: "go", ipa: "ɡoʊ", gloss: "行く" },
      { word: "home", ipa: "hoʊm", gloss: "家" },
      { word: "boat", ipa: "boʊt", gloss: "ボート" },
      { word: "know", ipa: "noʊ", gloss: "知っている" },
      { word: "phone", ipa: "foʊn", gloss: "電話" },
    ],
    minimalPairs: [
      {
        a: { word: "coat", ipa: "koʊt", gloss: "コート" },
        b: { word: "caught", ipa: "kɔːt", gloss: "catch の過去形" },
        contrastWith: "thought",
        note: "coat は「ウ」へ動く。caught は開いたまま動かない。",
      },
      {
        a: { word: "low", ipa: "loʊ", gloss: "低い" },
        b: { word: "law", ipa: "lɔː", gloss: "法律" },
        contrastWith: "thought",
      },
    ],
  },
];
