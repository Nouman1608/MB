import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { tableScrollPlugin } from '../hast-table-scroll.mjs';

const render = async (md, hastPlugins = [tableScrollPlugin]) => {
  const processor = await createSatteriMarkdownProcessor({
    syntaxHighlight: { type: 'shiki' },
    shikiConfig: { theme: 'github-light' },
    hastPlugins,
  });
  return (await processor.render(md, { fileURL: new URL('file:///test.md'), frontmatter: {} })).code;
};
const count = (s, re) => (s.match(re) || []).length;

const TWO_TABLES = `Intro.

| To find | Use |
|---|---|
| protons | proton number |
| neutrons | mass number − proton number |

Between.

| A | B | C |
|---|---|---|
| 1 | 2 | 3 |
`;

test('every table is wrapped exactly once', async () => {
  const html = await render(TWO_TABLES);
  assert.equal(count(html, /<table/g), 2);
  assert.equal(count(html, /class="table-scroll"/g), 2);
  assert.equal(count(html, /<div class="table-scroll"[^>]*><table>/g), 2, 'the table is the wrapper\'s only child');
});

test('without the plugin a table is not wrapped (the test can fail)', async () => {
  const html = await render(TWO_TABLES, []);
  assert.equal(count(html, /<table/g), 2);
  assert.equal(count(html, /table-scroll/g), 0);
});

test('the table keeps its semantics: header cells, body rows and cells are untouched', async () => {
  const html = await render(TWO_TABLES);
  assert.equal(count(html, /<th>/g), 5);
  assert.equal(count(html, /<thead>/g), 2);
  assert.equal(count(html, /<tbody>/g), 2);
  assert.equal(count(html, /<td>/g), 7, 'four body cells in the first table, three in the second');
  assert.ok(html.includes('<td>mass number − proton number</td>'));
});

test('the wrapper is a labelled, keyboard-focusable group', async () => {
  const html = await render(TWO_TABLES);
  assert.ok(html.includes('role="group"'));
  assert.ok(html.includes('aria-label="Scrollable table"'));
  assert.ok(html.includes('tabindex="0"'));
});

test('other content is left alone: no table, no wrapper; code blocks and text are not wrapped', async () => {
  const html = await render('A paragraph with | a pipe.\n\n```text\nnot a table | a | b\n```\n\n> a quote\n');
  assert.equal(count(html, /table-scroll/g), 0);
  assert.ok(html.includes('<pre'));
});

test('the plugin is registered in the Astro markdown config', () => {
  const config = readFileSync(new URL('../../../../astro.config.mjs', import.meta.url), 'utf8');
  assert.match(config, /import \{ tableScrollPlugin \} from '\.\/src\/utils\/markdown\/hast-table-scroll\.mjs'/);
  assert.match(config, /hastPlugins: \[[^\]]*tableScrollPlugin[^\]]*\]/);
});

test('the stylesheet gives the wrapper a sideways scroll and styles the cells', () => {
  const css = readFileSync(new URL('../../../styles/global.css', import.meta.url), 'utf8');
  assert.match(css, /\.resource-content \.table-scroll\s*\{[^}]*overflow-x:\s*auto/);
  assert.match(css, /\.resource-content :is\(th, td\)\s*\{[^}]*padding:/);
  assert.match(css, /overflow-wrap:\s*break-word/);
  assert.doesNotMatch(css, /\.resource-content :is\(th, td\)\s*\{[^}]*overflow-wrap:\s*anywhere/, '`anywhere` cut short columns mid-word');
});
