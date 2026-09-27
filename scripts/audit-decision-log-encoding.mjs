/**
 * D-360 (audit T-01) -- docs/decision-log.md was garbled by a non-UTF-8
 * rewrite during the D-355..D-358 rebases (911 lines of "—" and similar
 * characters turned into sequences such as "ΓÇö" and "Γò¼├┤Γö£├ºΓö£Γòó").
 * Fail if any such mojibake sequence appears again.
 */
import { readFileSync } from 'node:fs';

const FILE = 'docs/decision-log.md';
const MOJIBAKE = /ΓÇ|Γö|Γò|├┤|├º|╬ô|Γé|Γå|Γë|┬á/;
const lines = readFileSync(FILE, 'utf8').split('\n');
const bad = lines.map((l, i) => [i + 1, l]).filter(([, l]) => MOJIBAKE.test(l));
if (bad.length) {
  console.error(`Decision-log encoding FAILED: ${bad.length} garbled line(s) in ${FILE}. Write the file as UTF-8 (in PowerShell use -Encoding utf8NoBOM).`);
  for (const [n, l] of bad.slice(0, 10)) console.error(`  ${n}: ${l.slice(0, 100)}`);
  process.exit(1);
}
console.log(`Decision-log encoding OK: ${lines.length} lines, no mojibake.`);
