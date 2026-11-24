// The One-Line Exit — a one-line resignation letter.
// Writes exactly one line (138 characters) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Please accept my resignation: after three years of fixing the office printer, I realised I was never in IT — I was in a hostage situation.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space, and exactly one line.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line invalid: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
