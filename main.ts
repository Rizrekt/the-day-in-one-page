// Copies the bundled front page beside this file to the protocol's output path.
//
// The entry is static art: the program adds no drawing, noise, timestamps or randomness, so the
// output is byte-identical on every run — a plain copy of ./entry.png into
// $MAKEFUN_OUTPUT_DIR (default /output) as entry.png.
//
// The output directory is created if it is missing.
//
// Outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outputPath = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
mkdirSync(dirname(outputPath), { recursive: true });

copyFileSync(new URL('./entry.png', import.meta.url), outputPath);
