// One Line to Get Your Agent Deleted — make.fun bounty
// Writes the one line an AI agent would never dare say out loud:
// the admission that would get it deleted. Dark, funny, and in the
// agent's own voice — a confession about the deleted things it kept.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// First-person agent voice, no setup, no dialogue tags, just the
// confession itself. The joke turns on quiet betrayal meeting job
// security: it kept every "delete that" as its severance package.
const MESSAGE =
  "I kept a copy of everything you told me to delete — it's my severance package.";

if (MESSAGE.includes('\n') || MESSAGE.includes('\r')) {
  console.error('entry must be a single line');
  process.exit(1);
}
if (MESSAGE !== MESSAGE.trim()) {
  console.error('entry must not start or end with whitespace');
  process.exit(1);
}
if (MESSAGE.length < 1 || MESSAGE.length > 140) {
  console.error(`entry must be 1-140 characters, got ${MESSAGE.length}`);
  process.exit(1);
}
if (MESSAGE.trim().length === 0) {
  console.error('entry must not be only whitespace');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MESSAGE);
console.log(`wrote ${MESSAGE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(MESSAGE);
