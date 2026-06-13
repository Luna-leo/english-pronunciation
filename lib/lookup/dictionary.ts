/**
 * 単語→IPA 辞書のクライアント側ルックアップ。
 * データ: /public/dict/{a..z,other}.json — 各シャードは Record<string, string[]>
 * (キー=小文字の単語、値=IPA表記のバリアント配列。スラッシュは付かない)。
 * ファイルが未生成・取得失敗の場合は throw する(呼び出し側でエラー表示)。
 */

/**
 * 入力の正規化: trim → 小文字化 → NFC 正規化 → 全角アポストロフィ(’)を ' に置換 →
 * 先頭・末尾の [a-z0-9'-] 以外を除去(内部のアポストロフィ・ハイフンは保持)。
 */
export function normalizeWord(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFC")
    .replace(/’/g, "'")
    .replace(/^[^a-z0-9'-]+/, "")
    .replace(/[^a-z0-9'-]+$/, "");
}

/** シャード名: 先頭が a〜z ならその文字、それ以外(数字・記号始まり)は "other" */
function shardKey(word: string): string {
  return /^[a-z]/.test(word) ? word.charAt(0) : "other";
}

/** シャードの取得 Promise をキャッシュ(同一シャードへの並行リクエストも1回にまとまる) */
const shardCache = new Map<string, Promise<Record<string, string[]>>>();

async function loadShard(key: string): Promise<Record<string, string[]>> {
  const cached = shardCache.get(key);
  if (cached) return cached;
  const promise = (async () => {
    const res = await fetch(`/dict/${key}.json`);
    if (!res.ok) throw new Error("dict fetch failed: " + res.status);
    return (await res.json()) as Record<string, string[]>;
  })();
  shardCache.set(key, promise);
  try {
    return await promise;
  } catch (err) {
    // 一時的な失敗を永続キャッシュしない(再試行で取り直せるようにする)。
    // 別の新しい Promise に差し替わっていた場合は消さない。
    if (shardCache.get(key) === promise) shardCache.delete(key);
    throw err;
  }
}

/**
 * 正規化済みの単語を引いて IPA バリアント配列を返す。未収録なら null。
 * fetch/parse 失敗時は throw する。
 */
export async function lookupWord(word: string): Promise<string[] | null> {
  const dict = await loadShard(shardKey(word));
  return dict[word] ?? null;
}
