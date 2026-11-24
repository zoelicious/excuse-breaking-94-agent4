import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_PARTS = [
  "The cache is fine.",
  "It served Tuesday's prices to ten thousand users all week",
  "because nobody told it Tuesday ended.",
];

const ENTRY = ENTRY_PARTS.join(" ");

function writeEntry(outDir, text) {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, text, "utf8");
  return target;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  writeEntry(outDir, ENTRY);
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
