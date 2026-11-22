import { test } from 'node:test';
import assert from 'node:assert/strict';
import { subjectHubTitle, boardHubTitle, resourceListingTitle, shortQualifications, HUB_TITLE_TARGET } from '../hub-titles.ts';
import { sitemapGroup, SITEMAP_GROUPS } from '../sitemap-groups.ts';

test('shortQualifications: canonical order, AS folded into A Level, two IB programmes into IB', () => {
  assert.deepEqual(shortQualifications(['A Level', 'IGCSE', 'AS Level', 'O Level']), ['IGCSE', 'O Level', 'A Level']);
  assert.deepEqual(shortQualifications(['AS Level', 'GCSE']), ['GCSE', 'AS Level']);
  assert.deepEqual(shortQualifications(['IB Diploma Programme', 'IB Middle Years Programme', 'IGCSE']), ['IGCSE', 'IB']);
  assert.deepEqual(shortQualifications(['IB Diploma Programme']), ['IB Diploma']);
});

test('subjectHubTitle: names only the qualifications passed in', () => {
  assert.equal(subjectHubTitle('Accounting', ['A Level', 'IGCSE', 'O Level']), 'IGCSE, O Level & A Level Accounting Resources');
  assert.equal(subjectHubTitle('Law', ['A Level']), 'A Level Law Resources');
});

test('subjectHubTitle: shortens the IB programme before giving up the list', () => {
  const quals = ['A Level', 'IGCSE', 'GCSE', 'O Level', 'IB Diploma Programme'];
  assert.equal(subjectHubTitle('Chemistry', quals), 'IGCSE, O Level, GCSE, A Level & IB Chemistry Resources');
  assert.ok(subjectHubTitle('Chemistry', quals).length <= HUB_TITLE_TARGET);
});

test('subjectHubTitle: a subject that names its own programme is not given it twice', () => {
  assert.equal(subjectHubTitle('Sciences (MYP)', ['IB Middle Years Programme']), 'IB Sciences (MYP) Resources');
});

test('subjectHubTitle: no published course means no qualification is claimed', () => {
  assert.equal(subjectHubTitle('Languages', []), 'Languages Study Resources');
});

test('subjectHubTitle: an editorial seoTitle wins', () => {
  assert.equal(subjectHubTitle('Biology', ['IGCSE'], 'Hand-written'), 'Hand-written');
});

test('boardHubTitle: lists the board\'s qualifications, and falls back when the list is long', () => {
  assert.equal(boardHubTitle('Cambridge', ['A Level', 'IGCSE', 'O Level']), 'Cambridge IGCSE, O Level & A Level Subjects and Resources');
  assert.equal(boardHubTitle('OCR', ['AS Level', 'GCSE', 'A Level']), 'OCR GCSE & A Level Subjects and Resources');
  const ib = boardHubTitle('International Baccalaureate', ['IB Diploma Programme', 'IB Middle Years Programme']);
  assert.ok(ib.length <= HUB_TITLE_TARGET);
  assert.doesNotMatch(ib, /Baccalaureate IB/);
});

test('resourceListingTitle: the type keeps its label and gains the qualifications in the list', () => {
  assert.equal(resourceListingTitle('Law', 'Past Papers', ['A Level']), 'A Level Law Past Papers');
  assert.equal(resourceListingTitle('Physics', 'Study Guides', ['A Level', 'IGCSE', 'O Level', 'GCSE', 'IB Diploma Programme']), 'IGCSE, O Level, GCSE, A Level & IB Physics Study Guides');
  assert.equal(resourceListingTitle('Sciences (MYP)', 'Revision Notes', ['IB Middle Years Programme']), 'IB Sciences (MYP) Revision Notes');
  assert.equal(resourceListingTitle('ICT', 'Subject Guides', []), 'ICT Subject Guides');
});

test('sitemapGroup: every kind of URL has one group', () => {
  const cases = {
    '/': 'pages',
    '/pricing/': 'pages',
    '/programs/igcse/': 'pages',
    '/articles/': 'pages',
    '/articles/how-to-revise/': 'articles',
    '/boards/cambridge/igcse/physics/': 'courses',
    '/levels/a-level/': 'courses',
    '/subjects/biology/': 'courses',
    '/checklists/aqa/gcse/chemistry/': 'courses',
    '/resources/': 'courses',
    '/resources/study-guides/physics/': 'courses',
    '/resources/as-physics-waves/': 'resources',
    '/practice/0625/': 'practice',
    '/flashcards/cambridge/igcse/physics/forces/': 'practice',
    '/advanced-course-resources/biology/unit-1/': 'advanced-courses',
    '/authors/hina-mogul/': 'authors',
    '/authors/hina-mogul/resources/': 'author-archives',
    '/authors/hina-mogul/resources/3/': 'author-archives',
    '/ar/': 'localized',
    '/ur/pricing/': 'localized',
    '/bn/legal/privacy/': 'localized',
  };
  for (const [path, group] of Object.entries(cases)) assert.equal(sitemapGroup(path), group, path);
  for (const g of Object.values(cases)) assert.ok(SITEMAP_GROUPS.includes(g));
});
