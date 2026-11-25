#!/usr/bin/env node
/**
 * Audit 3, item 46 (A5, 25 Nov 2026) -- headless browser check.
 *
 * Uses the Playwright + Chromium that are preinstalled in the audit container
 * (NOT a dependency of this repository; nothing is added to package.json).
 * Run from the repository root with the global module path, e.g.
 *
 *   NODE_PATH=$(npm root -g) node reports/screens/check.mjs live
 *   NODE_PATH=$(npm root -g) node reports/screens/check.mjs dev http://127.0.0.1:4325
 *
 * live  https://marlbridge.com/ (production = main as deployed):
 *       exam calendar status labels for "today" in Pakistan time, the
 *       end-of-page tuition block on one resource page, the sign-up form with
 *       JavaScript on and off, the FAQ open/closed marks, three recently
 *       added figures (D-525 board-neutral figures, A2 integration figure).
 * dev   a local `astro dev` of this branch: the pages A5 changed (diagnostics
 *       hub, course page past-papers section, exam calendar, grade thresholds).
 *
 * Screenshots go to reports/screens/ at deviceScaleFactor 2; findings are
 * printed as JSON lines and written to reports/screens/check-<mode>.json.
 */
import { createRequire } from 'node:module';
import { writeFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const mode = process.argv[2] ?? 'live';
const base = (process.argv[3] ?? (mode === 'live' ? 'https://marlbridge.com' : 'http://127.0.0.1:4325')).replace(/\/$/, '');
const OUT = new URL('./', import.meta.url).pathname;
const results = [];
const log = (o) => { results.push(o); console.log(JSON.stringify(o)); };

const browser = await chromium.launch();
const ctxOpts = { viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2, timezoneId: 'Asia/Karachi', locale: 'en-GB' };
const ctx = await browser.newContext(ctxOpts);
const noJs = await browser.newContext({ ...ctxOpts, javaScriptEnabled: false });
const phone = await browser.newContext({ ...ctxOpts, viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

async function open(c, path, wait = 'load') {
  const page = await c.newPage();
  let res = await page.goto(base + path, { waitUntil: wait, timeout: 180000 });
  if (mode === 'dev') {
    // The dev server may reload the page once while Vite optimises dependencies: settle, then load again.
    await page.waitForLoadState('networkidle', { timeout: 180000 }).catch(() => {});
    await page.waitForTimeout(3000);
    res = await page.goto(base + path, { waitUntil: 'networkidle', timeout: 180000 });
    await page.waitForTimeout(1000);
  }
  return { page, status: res?.status() };
}
const shot = async (target, name) => { await target.screenshot({ path: `${OUT}${name}`, ...(target.url ? { fullPage: false } : {}) }); return name; };

try {
  if (mode === 'live') {
    // 1. Exam calendar status labels on today's date (browser clock, Pakistan time).
    {
      const { page, status } = await open(ctx, '/exam-calendar/');
      await page.waitForTimeout(500);
      const today = await page.evaluate(() => new Date().toString());
      const series = await page.$$eval('[data-series]', (els) => els.map((b) => ({
        heading: b.querySelector('h2')?.textContent?.trim(),
        status: b.querySelector('[data-series-status]')?.hidden ? null : b.querySelector('[data-series-status]')?.textContent?.trim(),
        warning: b.querySelector('[data-series-warning]')?.hidden ? null : b.querySelector('[data-series-warning]')?.textContent?.trim(),
      })));
      const first = page.locator('[data-series]').first();
      await first.scrollIntoViewIfNeeded();
      await page.screenshot({ path: `${OUT}live-exam-calendar.png`, fullPage: true });
      log({ check: 'exam-calendar status labels', url: base + '/exam-calendar/', status, browserToday: today, series, screenshot: 'live-exam-calendar.png' });
    }

    // 2 + 3. End-of-page tuition block and the sign-up form on one resource page.
    const resource = '/resources/ocr-gcse-physics-matter/';
    {
      const { page, status } = await open(ctx, resource);
      const block = page.locator('[data-tutoring-prompt]').last();
      const n = await page.locator('[data-tutoring-prompt]').count();
      let text = null;
      if (n > 0) {
        await block.scrollIntoViewIfNeeded();
        text = (await block.innerText()).replace(/\s+/g, ' ').slice(0, 400);
        await block.screenshot({ path: `${OUT}live-resource-tuition-block.png` });
      }
      log({ check: 'end-of-page tuition block', url: base + resource, status, count: n, text, screenshot: n ? 'live-resource-tuition-block.png' : null });

      const box = page.locator('[data-subscribe-box]').first();
      const boxes = await page.locator('[data-subscribe-box]').count();
      let state = null;
      if (boxes > 0) {
        await box.scrollIntoViewIfNeeded();
        state = await box.evaluate((b) => ({
          formHidden: b.querySelector('[data-subscribe-form]')?.hidden,
          formVisible: !!b.querySelector('[data-subscribe-form]') && getComputedStyle(b.querySelector('[data-subscribe-form]')).display !== 'none' && !b.querySelector('[data-subscribe-form]').hidden,
          fields: [...b.querySelectorAll('input,select')].filter((x) => x.offsetParent !== null).map((x) => x.name || x.type),
        }));
        // Submit empty: the form should show its own error messages, not send anything.
        const requests = [];
        page.on('request', (r) => { if (r.url().includes('/api/subscribe')) requests.push(r.url()); });
        const submit = box.locator('button[type="submit"]');
        if (await submit.count()) { await submit.first().click(); await page.waitForTimeout(600); }
        state.errorsAfterEmptySubmit = await box.evaluate((b) => [...b.querySelectorAll('[data-err]')].filter((p) => !p.hidden).map((p) => p.textContent.trim()));
        state.requestsSent = requests.length;
        await box.screenshot({ path: `${OUT}live-signup-js-on.png` });
      }
      log({ check: 'sign-up form, JavaScript on', url: base + resource, boxes, state, screenshot: boxes ? 'live-signup-js-on.png' : null });
    }
    {
      const { page, status } = await open(noJs, resource);
      const box = page.locator('[data-subscribe-box]').first();
      const boxes = await page.locator('[data-subscribe-box]').count();
      let state = null;
      if (boxes > 0) {
        await box.scrollIntoViewIfNeeded();
        state = await box.evaluate((b) => ({
          formRendered: !!b.querySelector('[data-subscribe-form]') && getComputedStyle(b.querySelector('[data-subscribe-form]')).display !== 'none',
          noscriptText: b.innerText.match(/This sign-up needs JavaScript[^.]*\./)?.[0] ?? null,
          contactLink: !!b.querySelector('a[href="/contact/"]'),
        }));
        await box.screenshot({ path: `${OUT}live-signup-js-off.png` });
      }
      log({ check: 'sign-up form, JavaScript off', url: base + resource, status, boxes, state, screenshot: boxes ? 'live-signup-js-off.png' : null });
    }

    // 4. FAQ open/closed marks (CSS ::after on the summary), on a course page.
    {
      const course = '/boards/cambridge/igcse/chemistry/';
      const { page, status } = await open(ctx, course);
      const summary = page.locator('.faq-summary').first();
      const count = await page.locator('.faq-summary').count();
      const mark = () => summary.evaluate((s) => getComputedStyle(s, '::after').content);
      let closed = null; let opened = null; let ariaHidden = null;
      if (count > 0) {
        await summary.scrollIntoViewIfNeeded();
        closed = await mark();
        const faq = page.locator('.faq-summary').first().locator('xpath=ancestor::div[1]');
        await faq.screenshot({ path: `${OUT}live-faq-closed.png` });
        await summary.click();
        await page.waitForTimeout(200);
        opened = await mark();
        await faq.screenshot({ path: `${OUT}live-faq-open.png` });
        // The mark is decorative: "+" / "" gives it empty alternative text where supported.
        const snap = await page.accessibility?.snapshot?.({ root: await summary.elementHandle() }).catch(() => null);
        ariaHidden = snap ? snap.name : null;
      }
      log({ check: 'FAQ toggle marks', url: base + course, status, count, closedMark: closed, openMark: opened, accessibleNameOfFirstSummary: ariaHidden, screenshots: count ? ['live-faq-closed.png', 'live-faq-open.png'] : [] });
    }

    // 5. Three recently added figures.
    const FIGURES = [
      { page: '/resources/aqa-a-level-mathematics-integration/', src: 'mathematics-integration--08-parts-as-area-a2.webp', why: 'A2 integration figure (pill kept, owner 24 Nov 2026; e519239f2)' },
      { page: '/resources/ocr-gcse-physics-matter/', src: 'physics-thermal-physics--01-particle-states.webp', why: 'D-525 board-neutral replacement (23e6667af)' },
      { page: '/resources/a-level-edexcel-biology-membranes-gas-exchange-and-osmosis/', src: null, why: 'D-525 board-neutral replacement (23e6667af), first figure on the page' },
    ];
    for (const [i, f] of FIGURES.entries()) {
      const { page, status } = await open(ctx, f.page);
      const sel = f.src ? `figure img[src*="${f.src}"]` : 'figure.topic-figure img';
      const img = page.locator(sel).first();
      const found = await img.count();
      let info = null;
      if (found) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate((el) => el.decode?.().catch(() => {}));
        await page.waitForTimeout(800);
        info = await img.evaluate((el) => ({ src: el.currentSrc || el.src, complete: el.complete, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight, alt: el.alt.slice(0, 120), caption: el.closest('figure')?.querySelector('figcaption')?.textContent?.trim() ?? null }));
        await img.locator('xpath=ancestor::figure[1]').screenshot({ path: `${OUT}live-figure-${i + 1}.png` });
      }
      log({ check: 'figure', why: f.why, url: base + f.page, status, found, info, screenshot: found ? `live-figure-${i + 1}.png` : null });
    }
  } else {
    // dev: the pages changed on this branch.
    {
      const { page, status } = await open(ctx, '/diagnostics/');
      const lines = await page.$$eval('[data-diagnostic-link]', (as) => as.map((a) => a.innerText.replace(/\s+/g, ' ').trim()));
      await page.screenshot({ path: `${OUT}dev-diagnostics-hub.png`, fullPage: false, clip: undefined });
      const firstGroup = page.locator('section[id] ul').first();
      await firstGroup.scrollIntoViewIfNeeded();
      await firstGroup.screenshot({ path: `${OUT}dev-diagnostics-hub-sets.png` });
      log({ check: 'diagnostics hub: N questions on M topics', url: base + '/diagnostics/', status, sets: lines.length, lines, screenshot: 'dev-diagnostics-hub-sets.png' });
    }
    {
      const path = '/boards/cambridge/igcse/chemistry/';
      const { page, status } = await open(ctx, path);
      const sec = page.locator('[data-hub-past-paper-section]');
      const n = await sec.count();
      let text = null; let links = [];
      if (n) {
        await sec.scrollIntoViewIfNeeded();
        text = (await sec.innerText()).replace(/\s+/g, ' ');
        links = await sec.locator('a').evaluateAll((as) => as.map((a) => ({ text: a.innerText.replace(/\s+/g, ' ').trim(), href: a.getAttribute('href'), label: a.getAttribute('aria-label') })));
        await sec.screenshot({ path: `${OUT}dev-course-past-papers-FIXTURE.png` });
      }
      log({ check: 'course page past-papers section (temporary fixture manifest, never committed)', url: base + path, status, sections: n, text, links, screenshot: n ? 'dev-course-past-papers-FIXTURE.png' : null });
    }
    {
      const path = '/boards/cambridge/igcse/physics/';
      const { page, status } = await open(ctx, path);
      log({ check: 'course page with no manifest entries renders no past-papers section', url: base + path, status, sections: await page.locator('[data-hub-past-paper-section]').count(), hubLink: await page.locator('[data-hub-past-papers]').count() });
    }
    {
      const { page, status } = await open(ctx, '/exam-calendar/');
      const series = await page.$$eval('[data-series]', (els) => els.map((b) => ({ heading: b.querySelector('h2')?.textContent?.trim(), status: b.querySelector('[data-series-status]')?.textContent?.trim(), source: [...b.querySelectorAll('p')].pop()?.innerText.replace(/\s+/g, ' ').trim() })));
      await page.screenshot({ path: `${OUT}dev-exam-calendar.png`, fullPage: true });
      log({ check: 'exam calendar (dev)', url: base + '/exam-calendar/', status, series, screenshot: 'dev-exam-calendar.png' });
    }
    {
      const { page, status } = await open(ctx, '/grade-thresholds/');
      const info = await page.evaluate(() => ({
        description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
        panels: [...document.querySelectorAll('.mb-gt-panel')].map((p) => ({ code: p.dataset.code, series: [...p.querySelectorAll('[data-series]')].map((s) => s.dataset.series), rows: p.querySelectorAll('tbody tr').length })),
        options: [...document.querySelectorAll('#mb-gt-select option')].map((o) => o.value),
      }));
      log({ check: 'grade thresholds (dev)', url: base + '/grade-thresholds/', status, info });
    }
  }
} finally {
  writeFileSync(`${OUT}check-${mode}.json`, JSON.stringify(results, null, 2) + '\n');
  await browser.close();
}
