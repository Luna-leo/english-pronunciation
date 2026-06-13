import type { StressWord } from "@/lib/types";

/**
 * 強勢位置クイズ用の頻出語 30。音節分割はつづり字ベース(クイズの選択肢表示用)。
 * stressIndex は第1強勢の音節(0始まり)。
 */
export const STRESS_WORDS: readonly StressWord[] = [
  { word: "photograph", ipa: "ˈfoʊtəɡræf", gloss: "写真", syllables: ["pho", "to", "graph"], stressIndex: 0 },
  { word: "photography", ipa: "fəˈtɑːɡrəfi", gloss: "写真術", syllables: ["pho", "to", "gra", "phy"], stressIndex: 1 },
  { word: "information", ipa: "ˌɪnfɚˈmeɪʃn", gloss: "情報", syllables: ["in", "for", "ma", "tion"], stressIndex: 2 },
  { word: "banana", ipa: "bəˈnænə", gloss: "バナナ", syllables: ["ba", "na", "na"], stressIndex: 1 },
  { word: "hotel", ipa: "hoʊˈtɛl", gloss: "ホテル", syllables: ["ho", "tel"], stressIndex: 1 },
  { word: "coffee", ipa: "ˈkɔːfi", gloss: "コーヒー", syllables: ["cof", "fee"], stressIndex: 0 },
  { word: "understand", ipa: "ˌʌndɚˈstænd", gloss: "理解する", syllables: ["un", "der", "stand"], stressIndex: 2 },
  { word: "important", ipa: "ɪmˈpɔːrtnt", gloss: "重要な", syllables: ["im", "por", "tant"], stressIndex: 1 },
  { word: "interesting", ipa: "ˈɪntrəstɪŋ", gloss: "面白い", syllables: ["in", "te", "res", "ting"], stressIndex: 0 },
  { word: "development", ipa: "dɪˈvɛləpmənt", gloss: "発展", syllables: ["de", "ve", "lop", "ment"], stressIndex: 1 },
  { word: "economic", ipa: "ˌɛkəˈnɑːmɪk", gloss: "経済の", syllables: ["e", "co", "no", "mic"], stressIndex: 2 },
  { word: "necessary", ipa: "ˈnɛsəsɛri", gloss: "必要な", syllables: ["ne", "ce", "ssa", "ry"], stressIndex: 0 },
  { word: "communicate", ipa: "kəˈmjuːnɪkeɪt", gloss: "伝える", syllables: ["com", "mu", "ni", "cate"], stressIndex: 1 },
  { word: "engineer", ipa: "ˌɛndʒəˈnɪr", gloss: "技術者", syllables: ["en", "gi", "neer"], stressIndex: 2 },
  { word: "computer", ipa: "kəmˈpjuːtɚ", gloss: "コンピュータ", syllables: ["com", "pu", "ter"], stressIndex: 1 },
  { word: "chocolate", ipa: "ˈtʃɑːklət", gloss: "チョコレート", syllables: ["cho", "co", "late"], stressIndex: 0 },
  { word: "tomorrow", ipa: "təˈmɑːroʊ", gloss: "明日", syllables: ["to", "mor", "row"], stressIndex: 1 },
  { word: "afternoon", ipa: "ˌæftɚˈnuːn", gloss: "午後", syllables: ["af", "ter", "noon"], stressIndex: 2 },
  { word: "comfortable", ipa: "ˈkʌmftɚbl", gloss: "快適な", syllables: ["com", "for", "ta", "ble"], stressIndex: 0 },
  { word: "possibility", ipa: "ˌpɑːsəˈbɪləti", gloss: "可能性", syllables: ["po", "ssi", "bi", "li", "ty"], stressIndex: 2 },
  { word: "university", ipa: "ˌjuːnəˈvɝːsəti", gloss: "大学", syllables: ["u", "ni", "ver", "si", "ty"], stressIndex: 2 },
  { word: "vocabulary", ipa: "voʊˈkæbjəlɛri", gloss: "語彙", syllables: ["vo", "ca", "bu", "la", "ry"], stressIndex: 1 },
  { word: "recommend", ipa: "ˌrɛkəˈmɛnd", gloss: "勧める", syllables: ["re", "com", "mend"], stressIndex: 2 },
  { word: "business", ipa: "ˈbɪznəs", gloss: "仕事・事業", syllables: ["busi", "ness"], stressIndex: 0 },
  { word: "event", ipa: "ɪˈvɛnt", gloss: "行事", syllables: ["e", "vent"], stressIndex: 1 },
  { word: "image", ipa: "ˈɪmɪdʒ", gloss: "画像・印象", syllables: ["im", "age"], stressIndex: 0 },
  { word: "damage", ipa: "ˈdæmɪdʒ", gloss: "損害", syllables: ["dam", "age"], stressIndex: 0 },
  { word: "success", ipa: "səkˈsɛs", gloss: "成功", syllables: ["suc", "cess"], stressIndex: 1 },
  { word: "career", ipa: "kəˈrɪr", gloss: "経歴", syllables: ["ca", "reer"], stressIndex: 1 },
  { word: "volunteer", ipa: "ˌvɑːlənˈtɪr", gloss: "ボランティア", syllables: ["vo", "lun", "teer"], stressIndex: 2 },
];
