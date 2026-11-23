// One-Star Review of Something Essential
// Entry: a deadpan one-star review of sleep, written to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "Eight hours, fully charged, and still wakes up at 3 a.m. to replay a conversation from 2014.";

// The sealed scorer accepts 1-160 characters. Refuse to write an entry
// that could never pass the gate instead of failing silently.
if (review.length < 1 || review.length > 160) {
  throw new Error(
    `Review must be 1-160 characters, got ${review.length}.`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, review, "utf8");

console.log(review);
console.log(`Characters: ${review.length}`);
