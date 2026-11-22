import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { alignedBlocksPlugin, looksAligned } from '../hast-aligned-blocks.mjs';

const render = async (md, hastPlugins = [alignedBlocksPlugin]) => {
  const processor = await createSatteriMarkdownProcessor({ syntaxHighlight: { type: 'shiki' }, shikiConfig: { theme: 'github-light' }, hastPlugins });
  return (await processor.render(md, { fileURL: new URL('file:///test.md'), frontmatter: {} })).code;
};
const count = (s, re) => (s.match(re) || []).length;

const COLUMNS = ['alkene   ->  halogenoalkane      HBr, room temp', 'halogenoalkane -> alcohol        NaOH(aq), reflux', 'nitrile  ->  amine               LiAlH4 in ether'].join('\n');
const PROSE = ['Step one: add the two numbers together.', 'Step two:  then divide the total by three.', 'Step three: round the answer to 2 d.p.'].join('\n');

test('an unlabelled block in columns is marked, one of prose is not', async () => {
  const html = await render(`\`\`\`\n${COLUMNS}\n\`\`\`\n\n\`\`\`\n${PROSE}\n\`\`\`\n`);
  assert.equal(count(html, /<pre/g), 2);
  assert.equal(count(html, /data-aligned/g), 1);
});

test('without the plugin nothing is marked (the test can fail)', async () => {
  assert.equal(count(await render(`\`\`\`\n${COLUMNS}\n\`\`\`\n`, []), /data-aligned/g), 0);
});

test('a block with a real language is left to its own style, whatever its spacing', async () => {
  assert.equal(count(await render(`\`\`\`python\n${COLUMNS}\n\`\`\`\n`), /data-aligned/g), 0);
});

test('a block fenced as text is left alone (it already has the fixed-width style)', async () => {
  assert.equal(count(await render(`\`\`\`text\n${COLUMNS}\n\`\`\`\n`), /data-aligned/g), 0);
});

test('right-to-left text is left alone', async () => {
  const urdu = ['1  Hook + name the book   link: اس کے علاوہ', '2  What it is about      link: اس کے علاوہ', '3  What I learnt         link: اس کے علاوہ'].join('\n');
  assert.equal(count(await render(`\`\`\`\n${urdu}\n\`\`\`\n`), /data-aligned/g), 0);
});

test('looksAligned: needs three lines and a shared column start', () => {
  assert.equal(looksAligned(COLUMNS), true);
  assert.equal(looksAligned(PROSE), false);
  assert.equal(looksAligned('a    b\nc    d'), false, 'two lines are not enough');
  assert.equal(looksAligned('a    b\nc  d\ne      f\ng   h'), false, 'no column start is shared');
  assert.equal(looksAligned('one line\n\n\n'), false);
});

test('the plugin and the stylesheet rule are wired in', () => {
  const config = readFileSync(new URL('../../../../astro.config.mjs', import.meta.url), 'utf8');
  assert.match(config, /import \{ alignedBlocksPlugin \} from '\.\/src\/utils\/markdown\/hast-aligned-blocks\.mjs'/);
  assert.match(config, /hastPlugins: \[[^\]]*alignedBlocksPlugin[^\]]*\]/);
  const css = readFileSync(new URL('../../../styles/global.css', import.meta.url), 'utf8');
  assert.match(css, /pre\.astro-code\[data-aligned\]\s*\{[^}]*white-space:\s*pre;/);
});
