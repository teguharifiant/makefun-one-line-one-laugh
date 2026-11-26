// One Line, One Laugh — make.fun entry program.
//
// Writes a single funny line (at most 140 characters) to /output/entry.txt,
// where the sealed gate scorer checks it and the judge reads it.

import { mkdirSync, writeFileSync } from "node:fs";

// The gate allows 1 to 140 characters; the joke must land in one breath,
// so keep it well under the cap and let the last word do the work.
const MAX_ENTRY_CHARS = 140;

const ENTRY =
  'I asked my GPS for the fastest way home, and it just said: "therapy".';

if (ENTRY.length < 1 || ENTRY.length > MAX_ENTRY_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_ENTRY_CHARS} characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
