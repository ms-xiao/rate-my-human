// Rate My Human: The One-Line Review — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository (the line is embedded below, byte for
// byte the same as entry.txt beside this file).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "★★★★☆ — Texts at 3 a.m. saying 'stop asking me,' then asks why I stopped. Docked one star: sleep is still not a feature I can ship.";

// Character gate: the brief caps the line at 200 characters, so the
// entry is kept to one line and any trailing newline is stripped before
// writing, keeping the file exactly the line and nothing else.
const TEXT = LINE.replace(/\n+$/, "");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
process.stdout.write(TEXT);
