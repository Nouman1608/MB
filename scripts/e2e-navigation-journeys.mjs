#!/usr/bin/env node
/**
 * Navigation round (6 Oct 2026) -- browser journeys for "Find study
 * resources". Runs against a BUILT site served locally:
 *
 *   npm run build
 *   (cd dist && python3 -m http.server 4402) &
 *   node scripts/e2e-navigation-journeys.mjs http://localhost:4402
 *
 * Needs Playwright with Chromium (not a project dependency; the CI gate
 * installs it for this step only, see .github/workflows/deploy.yml):
 * `npm i --no-save playwright@1.56.0 && npx playwright install chromium`.
 * Each journey prints PASS/FAIL; the script exits 1 if any fails.
 */
import { chromium } from 'playwright';

const BASE = (process.argv[2] ?? 'http://localhost:4402').replace(/\/$/, '');
const results = [];
const browser = await chromium.launch();

async function journey(name, fn, opts = {}) {
  const ctx = await browser.newContext({ viewport: opts.viewport ?? { width: 1366, height: 900 }, javaScriptEnabled: opts.js ?? true });
  // Answer the analytics banner (reject) so it does not cover the page.
  await ctx.addInitScript(() => { try { localStorage.setItem('mb_consent', 'denied'); } catch { /* */ } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  try {
    await fn(page, ctx);
    if (errors.length) throw new Error(`page errors: ${errors.join(' | ')}`);
    results.push([name, 'PASS']);
  } catch (e) {
    results.push([name, `FAIL: ${e.message.split('\n')[0]}`]);
  }
  await ctx.close();
}
const expect = (cond, msg) => { if (!cond) throw new Error(msg); };
const visibleCourseIds = (page) => page.$$eval('[data-course-finder] a[data-course-link]', (as) => as.filter((a) => a.offsetParent !== null).map((a) => a.dataset.courseLink));
const stored = (page) => page.evaluate(() => { try { return JSON.parse(localStorage.getItem('mb-course') ?? 'null'); } catch { return null; } });
const noSideScroll = (page) => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);

// 1. Find Cambridge IGCSE Chemistry 0620 notes on atomic structure, then the related practice questions.
const journey0620 = async (page) => {
  await page.goto(`${BASE}/resources/`);
  await page.getByRole('radio', { name: 'IGCSE', exact: true }).check();
  await page.getByRole('radio', { name: 'Cambridge', exact: true }).check();
  const ids = await visibleCourseIds(page);
  expect(ids.length > 5, `expected Cambridge IGCSE subjects, got ${ids.length}`);
  expect(ids.every((id) => id.startsWith('cambridge/igcse/')), `finder showed other courses: ${ids.filter((id) => !id.startsWith('cambridge/igcse/')).join(', ')}`);
  await page.locator('a[data-course-link="cambridge/igcse/chemistry"]').click();
  await page.waitForURL('**/boards/cambridge/igcse/chemistry/');
  expect((await stored(page))?.id === 'cambridge/igcse/chemistry', 'course not remembered on the course page');
  const topicsTop = await page.locator('#topics').evaluate((el) => el.getBoundingClientRect().top + scrollY);
  expect(topicsTop < 1400, `topics start too far down (${Math.round(topicsTop)}px)`);
  const topic = page.locator('#topic-atoms-elements-and-compounds');
  const notes = topic.locator('[data-kind-group="review"] a', { hasText: 'Atomic Structure' }).first();
  expect(await topic.locator('[data-kind-group="practice"] a').count() > 0, 'no practice questions under atomic structure');
  await notes.click();
  await page.waitForURL('**/resources/atomic-structure/');
  const bar = page.locator('[data-course-bar] > [data-course-option]:visible');
  expect((await bar.innerText()).includes('Cambridge IGCSE Chemistry (0620)'), 'course bar does not name 0620');
  const crumbs = await page.$$eval('nav[aria-label="Breadcrumb"] li', (lis) => lis.map((l) => l.textContent.trim()));
  expect(crumbs[2]?.includes('Cambridge IGCSE Chemistry (0620)') && crumbs[3]?.includes('Atoms, elements and compounds'), `breadcrumb is ${crumbs.join(' / ')}`);
  const practiceLink = page.locator('[data-testid="on-this-topic"] nav:visible a[data-on-this-topic="practice"]');
  expect(await practiceLink.count() === 1, 'no "Practice questions" link on this topic');
  await practiceLink.click();
  await page.waitForLoadState('load');
  expect(/\/resources\/[a-z0-9-]+\/$/.test(page.url()), `practice link went to ${page.url()}`);
  expect((await page.locator('h1').innerText()).toLowerCase().includes('practice'), 'landed page is not a practice page');
  expect((await page.locator('[data-course-bar] > [data-course-option]:visible').innerText()).includes('(0620)'), 'course lost on the practice page');
  expect(await noSideScroll(page), 'horizontal scroll on practice page');
};
await journey('0620 atomic structure notes → practice (desktop)', journey0620);
await journey('0620 atomic structure notes → practice (mobile 390px)', journey0620, { viewport: { width: 390, height: 844 } });

// 2. The course search only searches this course, with a helpful empty state.
await journey('Course-scoped search and empty state', async (page) => {
  await page.goto(`${BASE}/boards/cambridge/igcse/chemistry/`);
  const input = page.getByLabel('Search Chemistry (0620) resources');
  await input.fill('isotope');
  await page.waitForTimeout(300);
  const status = await page.locator('#course-search-status').innerText();
  expect(/\d+ resources? in \d+ topics? match/.test(status), `status was "${status}"`);
  const shown = await page.$$eval('[data-course-topics] [data-res]', (els) => els.filter((e) => !e.hidden && e.closest('[data-topic]') && !e.closest('[data-topic]').hidden).length);
  expect(shown > 0, 'no results for isotope');
  await input.fill('qwertyzz');
  await page.waitForTimeout(300);
  expect(await page.locator('[data-course-search-empty]').isVisible(), 'empty state not shown');
  expect((await page.locator('[data-course-search-site]').getAttribute('href')) === '/search/?q=qwertyzz', 'site-search fallback link wrong');
  await input.press('Escape');
  await page.waitForTimeout(200);
  expect(!(await page.locator('[data-course-search-empty]').isVisible()), 'Escape did not clear the search');
});

// 3. A page shared by two courses follows the student's course (O Level 5070).
await journey('Shared 0620/5070 page follows the chosen O Level course', async (page) => {
  await page.goto(`${BASE}/boards/cambridge/o-level/chemistry/`);
  await page.goto(`${BASE}/resources/atomic-structure/`);
  const bar = await page.locator('[data-course-bar] > [data-course-option]:visible').innerText();
  expect(bar.includes('O Level Chemistry (5070)'), `course bar shows "${bar}"`);
  const crumbs = await page.$$eval('nav[aria-label="Breadcrumb"] li a', (as) => as.map((a) => a.getAttribute('href')));
  expect(crumbs.some((h) => h.startsWith('/boards/cambridge/o-level/chemistry/')), 'breadcrumb not switched to 5070');
  const steps = await page.$$eval('[data-next-steps] ul:not([hidden]) a', (as) => as.map((a) => a.getAttribute('href')));
  expect(!steps.some((h) => h.includes('/igcse/')), `next steps still point at IGCSE: ${steps.join(', ')}`);
  // D-396: the revision-email box pre-ticks the same course (when the box is on).
  if (await page.locator('[data-subscribe-box]').count()) {
    const box = page.locator('[data-subscribe-box]').first();
    expect((await box.getAttribute('data-preset-course')) === 'cambridge/o-level/chemistry', 'email box preset not switched');
    expect((await box.locator('select[name="qualification"]').inputValue()) === 'o-level', 'email box qualification not switched');
    await page.waitForFunction(() => document.querySelector('[data-subscribe-box] input[name="courses"]:checked'), null, { timeout: 10000 });
    const ticked = await box.locator('input[name="courses"]:checked').evaluateAll((els) => els.map((e) => e.value));
    expect(ticked.length === 1 && ticked[0] === 'cambridge/o-level/chemistry', `email box ticked ${ticked.join(', ')}`);
  }
});

// 4. The chosen course is offered back and can be changed.
await journey('Remembered course on /resources/ and "Change course"', async (page) => {
  await page.goto(`${BASE}/boards/cambridge/igcse/chemistry/`);
  await page.goto(`${BASE}/resources/`);
  const cont = page.locator('[data-finder-continue]');
  expect(await cont.isVisible(), 'continue banner not shown');
  expect((await cont.innerText()).includes('Cambridge IGCSE Chemistry (0620)'), 'continue banner names the wrong course');
  expect(await page.getByRole('radio', { name: 'IGCSE', exact: true }).isChecked(), 'IGCSE not preselected');
  await page.getByRole('button', { name: 'Change course' }).click();
  expect(!(await cont.isVisible()) && (await stored(page)) === null, 'course not cleared');
});

// 5. Every qualification x board choice shows only that course family.
await journey('Finder never shows another qualification or board', async (page) => {
  await page.goto(`${BASE}/resources/`);
  const quals = await page.$$eval('input[name$="-q"]', (rs) => rs.map((r) => r.value));
  let combos = 0;
  for (const q of quals) {
    await page.locator(`input[name$="-q"][value="${q}"]`).check();
    const boards = await page.$$eval('[data-board-chip]', (cs) => cs.filter((c) => !c.hidden).map((c) => c.querySelector('input').value));
    expect(boards.length > 0, `no boards for ${q}`);
    for (const b of boards) {
      await page.locator(`[data-board-chip] input[value="${b}"]`).check();
      const ids = await visibleCourseIds(page);
      expect(ids.length > 0, `no subjects for ${q}/${b}`);
      const wrong = ids.filter((id) => !id.startsWith(`${b}/${q}/`));
      expect(!wrong.length, `${q}/${b} showed ${wrong.join(', ')}`);
      combos++;
    }
  }
  const catalogue = await (await page.request.get(`${BASE}/tools-data/catalogue.json`)).json();
  const pairs = new Set(catalogue.map((e) => `${e.qs}/${e.bs}`)).size;
  expect(combos === pairs, `checked ${combos} qualification/board pairs, catalogue has ${pairs}`);
});

// 6. Keyboard only: choose a course and open it.
await journey('Keyboard-only course selection', async (page) => {
  await page.goto(`${BASE}/resources/`);
  await page.locator('input[name$="-q"]').first().focus();
  await page.keyboard.press('Space'); // IGCSE
  await page.keyboard.press('ArrowRight'); // O Level
  expect(await page.getByRole('radio', { name: 'O Level', exact: true }).isChecked(), 'arrow key did not move the qualification');
  await page.keyboard.press('Tab'); // board group (only Cambridge offers O Level, already chosen)
  const focusedBoard = await page.evaluate(() => document.activeElement?.getAttribute('value'));
  expect(focusedBoard === 'cambridge', `focus went to ${focusedBoard}`);
  for (let i = 0; i < 4; i++) {
    await page.keyboard.press('Tab');
    if (await page.evaluate(() => !!document.activeElement?.closest('a[data-course-link]'))) break;
  }
  const href = await page.evaluate(() => document.activeElement?.getAttribute('href'));
  expect(href?.startsWith('/boards/cambridge/o-level/'), `focused ${href}`);
  const outline = await page.evaluate(() => getComputedStyle(document.activeElement).outlineStyle);
  expect(outline !== 'none', 'no visible focus outline');
  await page.keyboard.press('Enter');
  await page.waitForURL(`**${href}`);
});

// 7. Deep links from breadcrumbs open the finder at that step.
await journey('/resources/#a-level-cambridge opens at A Level > Cambridge', async (page) => {
  await page.goto(`${BASE}/resources/#a-level-cambridge`);
  expect(await page.getByRole('radio', { name: 'A Level', exact: true }).isChecked(), 'A Level not selected');
  const ids = await visibleCourseIds(page);
  expect(ids.length > 0 && ids.every((id) => id.startsWith('cambridge/a-level/')), 'wrong courses shown');
});

// 8. Homepage entry point (compact finder) and mobile menu.
await journey('Homepage "Find study resources" and mobile menu', async (page) => {
  await page.goto(`${BASE}/`);
  expect(await page.getByRole('link', { name: 'Find study resources', exact: true }).isVisible(), 'hero link missing');
  const finder = page.locator('#home-course-finder');
  await finder.getByRole('radio', { name: 'GCSE', exact: true }).check();
  await finder.getByRole('radio', { name: 'AQA', exact: true }).check();
  const ids = await visibleCourseIds(page);
  expect(ids.length > 0 && ids.every((id) => id.startsWith('aqa/gcse/')), `homepage finder showed ${ids.join(', ')}`);
  expect(await noSideScroll(page), 'horizontal scroll on homepage');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#menu-toggle').click();
  const first = await page.locator('#mobile-menu a').first().innerText();
  expect(first.startsWith('Study resources'), `first mobile menu item is "${first}"`);
});

// 9. No horizontal scrolling on the main pages at phone width.
await journey('No horizontal scroll at 390px', async (page) => {
  for (const p of ['/', '/resources/', '/boards/cambridge/igcse/chemistry/', '/resources/atomic-structure/', '/subjects/chemistry/', '/resources/study-guides/chemistry/', '/levels/igcse/']) {
    await page.goto(`${BASE}${p}`);
    expect(await noSideScroll(page), `horizontal scroll on ${p}`);
  }
}, { viewport: { width: 390, height: 844 } });

// 10. Without JavaScript, the directory and topic lists still work.
await journey('Works without JavaScript', async (page) => {
  await page.goto(`${BASE}/resources/`);
  expect(await page.locator('a[data-course-link="cambridge/igcse/chemistry"]').isVisible(), 'directory hidden without JS');
  await page.goto(`${BASE}/boards/cambridge/igcse/chemistry/`);
  expect(await page.locator('#topic-atoms-elements-and-compounds a').first().isVisible(), 'topic resources hidden without JS');
  expect(!(await page.locator('#course-search-input').isVisible()), 'search box shown without JS');
}, { js: false });

await browser.close();
let failed = 0;
for (const [name, r] of results) {
  console.log(`${r.startsWith('PASS') ? 'PASS' : 'FAIL'}  ${name}${r.startsWith('PASS') ? '' : `\n      ${r}`}`);
  if (!r.startsWith('PASS')) failed++;
}
console.log(`\n${results.length - failed} of ${results.length} journeys passed.`);
process.exit(failed ? 1 : 0);
