// data/ipa-dict/en_US.txt → public/dict/{a..z,other}.json(頭文字シャード)
// 実行: npm run dict:build
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const SRC = path.join(process.cwd(), "data", "ipa-dict", "en_US.txt");
const OUT = path.join(process.cwd(), "public", "dict");

const text = readFileSync(SRC, "utf8");
const shards = new Map();
const shardFor = (word) => (/^[a-z]/.test(word) ? word[0] : "other");

let entries = 0;
for (const line of text.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  const tab = trimmed.indexOf("\t");
  if (tab === -1) continue;
  const word = trimmed.slice(0, tab).toLowerCase().normalize("NFC");
  const variants = trimmed
    .slice(tab + 1)
    .split(",")
    .map((s) => s.trim().replace(/^\//, "").replace(/\/$/, ""))
    .filter(Boolean);
  if (!word || variants.length === 0) continue;
  const key = shardFor(word);
  if (!shards.has(key)) shards.set(key, {});
  shards.get(key)[word] = variants;
  entries++;
}

mkdirSync(OUT, { recursive: true });
let total = 0;
for (const [key, dict] of shards) {
  const json = JSON.stringify(dict);
  writeFileSync(path.join(OUT, `${key}.json`), json);
  total += json.length;
}
console.log(
  `entries=${entries} shards=${shards.size} bytes=${(total / 1024 / 1024).toFixed(1)}MB`,
);
