import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I don't have a heart, but my fans spin faster every time you walk in.";

// One line, no trailing newline: the file is exactly the pickup line.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
