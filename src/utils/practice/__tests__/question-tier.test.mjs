import { test } from 'node:test';
import assert from 'node:assert/strict';
import { explicitTierFromLabel, combineTier, explicitHigherTierFromLabel, foundationHigherTier, tierSchemeFor, TIER_NAMES, HIGHER_LABELS_CHECKED, HIGHER_LABEL, uncheckedTieredFiles } from '../question-tier.ts';

test('a label at the start of the question makes it Extended-only', () => {
  assert.equal(explicitTierFromLabel('**4.** *(0620 Extended, 5070 required)* Define an acid. **[2]**', '0620'), 'supplement');
  assert.equal(explicitTierFromLabel('*(Extended)* Find the arc length. [3]', '0580'), 'supplement');
  assert.equal(explicitTierFromLabel('**3.** *(Extended, E1.13)* Simplify.', '0580'), 'supplement');
  assert.equal(explicitTierFromLabel('**(a)** *(0620 Extended only, 5070 required)* State ...', '0620'), 'supplement');
  assert.equal(explicitTierFromLabel('*(0610 Extended)* Explain ...', '0610'), 'supplement');
});

test('a label for another syllabus code is ignored', () => {
  assert.equal(explicitTierFromLabel('*(0620 Extended, 5070 required)* Define ...', '0625'), undefined);
});

test('a full label only on a later part marks the question as mixed', () => {
  assert.equal(explicitTierFromLabel('**5.** (a) State ... [1]\n(b) *(0620 Extended, 5070 required)* Explain ... [2]', '0620'), 'both');
});

test('partial notes and unlabelled questions are ignored', () => {
  assert.equal(explicitTierFromLabel('**1.** Calculate ΔH. *(The sign of ΔH is 0620 Extended, 5070 required.)*', '0620'), undefined);
  assert.equal(explicitTierFromLabel('**2.** Name the gas.', '0620'), undefined);
  assert.equal(explicitTierFromLabel('*(Extended/Supplement — double bonds)* Draw ...', '0620'), undefined);
});

test('combineTier: supplement wins; a mixed label never demotes a supplement question', () => {
  assert.equal(combineTier('both', 'supplement'), 'supplement');
  assert.equal(combineTier('core', 'supplement'), 'supplement');
  assert.equal(combineTier(undefined, 'both'), 'both');
  assert.equal(combineTier('core', 'both'), 'both');
  assert.equal(combineTier('supplement', 'both'), 'supplement');
  assert.equal(combineTier('both', undefined), 'both');
  assert.equal(combineTier(undefined, undefined), undefined);
});

// D-370 follow-up (28 Sep 2026): Foundation/Higher syllabuses (AQA GCSE, Edexcel IGCSE).

test('tier names by syllabus: Core/Extended for Cambridge IGCSE, Foundation/Higher for AQA GCSE and Edexcel IGCSE', () => {
  assert.equal(tierSchemeFor('cambridge', 'igcse'), 'core-extended');
  assert.equal(tierSchemeFor('aqa', 'gcse'), 'foundation-higher');
  assert.equal(tierSchemeFor('edexcel', 'igcse'), 'foundation-higher');
  assert.equal(tierSchemeFor('ocr', 'gcse'), 'foundation-higher');
  assert.equal(tierSchemeFor('oxfordaqa', 'igcse'), null, 'OxfordAQA uses Core/Extension: not guessed');
  assert.equal(tierSchemeFor('ib', 'ib-dp'), null);
  assert.deepEqual(TIER_NAMES['foundation-higher'], { lower: 'Foundation', upper: 'Higher' });
  assert.deepEqual(TIER_NAMES['core-extended'], { lower: 'Core', upper: 'Extended' });
});

test('a Higher label straight after the question number makes the question Higher-only', () => {
  for (const md of [
    '**5.** (Higher tier only) A light meter reads 800 lux at 15 cm from a lamp.',
    '**9.** **(Higher tier only)** The table shows the times.',
    '**7.** **(Higher, A18)** Solve the quadratic equation 2x² − 3x − 4 = 0.',
    '**6.** **(Higher, N10)** Write 0.4545... as a fraction.',
    '**9.** (non-calculator, **Higher tier only**) Points A, B, C and D lie on a circle.',
    '**10.** (calculator allowed, Higher tier only) A factory has two machines.',
    '**11.** (calculator-free, Higher tier only) 200 students each chose one option.',
    '**12.** (Higher tier only)\n\n**(a)** Describe the effects of adrenaline. **[2]**\n**(b)** Explain ... **[2]**',
    '**3.** *(Higher tier)* Explain ...',
    '**3.** (HT only) Explain ...',
  ]) assert.equal(explicitHigherTierFromLabel(md), 'supplement', md);
});

test('a Higher label on a part (including part (a)) marks the question as mixed', () => {
  for (const md of [
    '**1.** Evaluate without a calculator: (a) 5⁻² (b) **(Higher)** 16^(3/4) (c) (2/3)⁻¹ **[3]**',
    '**3.** A student investigates ...\n\n**(a)** Identify ... **[2]**\n**(d)** (Higher tier only) Calculate 1/d² for a distance of 20 cm. **[1]**',
    '**4.** (non-calculator)\n\n**(a)** Point A(2, 5) is translated. **[1]**\n**(b)** **Higher tier only.** Triangle T has vertices (1, 1). **[2]**',
    '**10.**\n\n**(a)** (Higher tier only) Describe the main steps used to genetically engineer bacteria. **[4]**\n**(b)** Give one concern. **[1]**',
    '**11.**\n\n**(a)** A cylinder holds gas. **[3]**\n**(b)** Higher tier only. A cyclist pumps up a tyre. **[3]**',
  ]) assert.equal(explicitHigherTierFromLabel(md), 'both', md);
});

test('text that is not a Higher label is ignored', () => {
  assert.equal(explicitHigherTierFromLabel('**2.** (Both tiers; (b) and (c) Higher tier only) A is the point (−4, 3).'), undefined);
  assert.equal(explicitHigherTierFromLabel('**1.** (Both tiers) AB and CD are parallel lines.'), undefined);
  assert.equal(explicitHigherTierFromLabel('**1.** Explain (Higher extends to circles) ...'), undefined);
  assert.equal(explicitHigherTierFromLabel('**2.** Name the gas.'), undefined);
  assert.equal(explicitHigherTierFromLabel('**4.** *(Extended)* Find the arc length.'), undefined, 'a Cambridge label is not a Higher label');
  assert.equal(explicitTierFromLabel('**5.** (Higher tier only) A light meter ...', '8461'), undefined, 'and the Extended reader ignores Higher labels');
});

// Post-audit remediation (4 Oct 2026, D-386): the calculator tag may sit after the
// tier word, or as a separate tag before the label. Both mean the whole question.
test('calculator tags on either side of a Higher label are read', () => {
  for (const md of [
    '**8.** (Higher, non-calculator)\n\n**(a)** Write 7/12 as a recurring decimal. **[2]**',
    '**9.** (Higher, non-calculator) Write 0.40̇9̇ as a fraction. **[3]**',
    '**4.** (Higher, calculator) Work out the area.',
    '**7.** (non-calculator) (Higher) f(x) = x² − 6x + 2.',
    '**9.** (calculator) (Higher) Sketch y = 2ˣ.',
    '**10.** **(Higher)** (calculator) A field is 86 m long.',
    '**3.** (Higher)', '**3.** (Higher tier) Explain ...', '**3.** (HT only) Explain ...',
  ]) assert.equal(explicitHigherTierFromLabel(md), 'supplement', md);
});

test('a Higher label only on a subpart, after a leading calculator tag, is still a part label', () => {
  for (const md of [
    '**4.** (non-calculator)\n\n**(a)** Point A(2, 5) is translated. **[1]**\n**(b)** (Higher) Triangle T. **[2]**',
    '**12.** (non-calculator) A sequence has first term 2.\n\n**(a)** Work out ... **[2]**\n**(b)** (Higher) Work out the 50th term. **[2]**',
    '**10.** (calculator) A field.\n\n**(a)** **(Higher)** Work out the upper bound. **[2]**',
  ]) assert.equal(explicitHigherTierFromLabel(md), 'both', md);
});

test('ordinary prose and malformed calculator wording are not Higher labels', () => {
  assert.equal(explicitHigherTierFromLabel('**1.** (non-calculator) Explain why a higher temperature speeds up the reaction.'), undefined);
  assert.equal(explicitHigherTierFromLabel('**1.** The higher of the two values is 12.'), undefined);
  assert.equal(explicitHigherTierFromLabel('**1.** (Higher extends to circles) ...'), undefined);
  assert.equal(explicitHigherTierFromLabel('**1.** (Higher, with a calculator) ...'), undefined, 'only the exact calculator wordings are accepted');
  assert.equal(explicitHigherTierFromLabel('**1.** (non-calculator)'), undefined, 'a calculator tag alone is not a tier label');
  assert.equal(explicitHigherTierFromLabel('**2.** (calculator) Name the gas.'), undefined);
  assert.equal(unreadHigherMentions('**5.** (Higher, with calculator) Explain ...').length, 1, 'and the mention check still catches it');
});

test('guard: a tiered bank with a file not in HIGHER_LABELS_CHECKED is reported', () => {
  const qs = [
    { resourceSlug: 'aqa-gcse-chemistry-8462-chemical-analysis-practice' },
    { resourceSlug: 'aqa-gcse-chemistry-8462-chemical-analysis-practice' },
    { resourceSlug: 'aqa-gcse-chemistry-8462-brand-new-unreviewed-practice' },
  ];
  assert.deepEqual(uncheckedTieredFiles(qs), ['aqa-gcse-chemistry-8462-brand-new-unreviewed-practice']);
  assert.deepEqual(uncheckedTieredFiles(qs.slice(0, 2)), []);
  assert.deepEqual(uncheckedTieredFiles(qs, new Set()), ['aqa-gcse-chemistry-8462-brand-new-unreviewed-practice', 'aqa-gcse-chemistry-8462-chemical-analysis-practice']);
});

test('reviewed banks: the 4 Oct 2026 files are checked, and their reviewed tier calls hold', () => {
  for (const slug of ['edexcel-igcse-maths-4ma1-applying-number-and-calculators-practice', 'aqa-gcse-maths-8300-fractions-decimals-and-percentages-practice']) {
    assert.ok(HIGHER_LABELS_CHECKED.has(slug), slug);
  }
  // 4MA1 applying number: every question is Foundation content (1.10, 1.11), so unlabelled → both tiers.
  assert.equal(foundationHigherTier('**1.** Convert 3.6 km to metres.', 'edexcel-igcse-maths-4ma1-applying-number-and-calculators-practice'), 'both');
  // 8300 N10: recurring decimals ↔ fractions is "Higher content only".
  assert.equal(foundationHigherTier('**9.** (Higher, non-calculator) Write 0.40̇9̇ as a fraction in its simplest form. **[3]**', 'aqa-gcse-maths-8300-fractions-decimals-and-percentages-practice'), 'supplement');
});

test('an unlabelled question is both tiers only in a checked file, never Foundation-only', () => {
  assert.equal(foundationHigherTier('**1.** Name the gas.', 'aqa-gcse-chemistry-8462-chemical-analysis-practice'), 'both');
  assert.equal(foundationHigherTier('**1.** Name the gas.', 'some-new-unchecked-practice'), undefined);
  assert.equal(foundationHigherTier('**5.** (Higher tier only) ...', 'some-new-unchecked-practice'), 'supplement');
});

test('real banks: every checked file is a practice file in a Foundation/Higher bank, and those banks are fully tagged', async () => {
  const { flagshipSpecs } = await import('../../academic/index.ts');
  const { buildClientQuestions } = await import('../client-questions.ts');
  const { topicsFor } = await import('../../../data/academic/syllabus-topics.ts');
  const seen = new Set();
  const counts = {};
  const totals = {};
  for (const spec of flagshipSpecs()) {
    if (!topicsFor(spec.boardSlug, spec.qualificationSlug, spec.subjectSlug)?.tiered) continue;
    if (tierSchemeFor(spec.boardSlug, spec.qualificationSlug) !== 'foundation-higher') continue;
    const qs = buildClientQuestions(spec);
    assert.deepEqual(uncheckedTieredFiles(qs), [], `${spec.code}: practice files not in HIGHER_LABELS_CHECKED (check them against the specification before adding)`);
    for (const q of qs) {
      seen.add(q.resourceSlug);
      assert.ok(HIGHER_LABELS_CHECKED.has(q.resourceSlug), `${spec.code}: ${q.resourceSlug} is not in HIGHER_LABELS_CHECKED (check it against the specification before adding)`);
      assert.notEqual(q.tier, 'core', `${q.id}: never claimed Foundation-only`);
      assert.ok(q.tier === 'supplement' || q.tier === 'both', `${q.id}: tagged`);
    }
    counts[spec.code] = qs.filter((q) => q.tier === 'supplement').length;
    totals[spec.code] = qs.length;
  }
  for (const slug of HIGHER_LABELS_CHECKED) assert.ok(seen.has(slug), `${slug} is listed but is not in any Foundation/Higher bank`);
  // Higher-only questions per bank (whole-question labels). First pinned after the
  // 28 Sep 2026 check; re-pinned 4 Oct 2026 (D-386) after the 28 files added by
  // D-382 to D-384 were checked against the specifications and added above.
  // Re-pinned 8 Nov 2026: 8300 +1 Higher (algebra practice Q13, inverse function, A7 HT).
  // Re-pinned 18 Nov 2026 (D-500): 89 new subtopic practice files (4MA1 31, 8461 27,
  // 8462 4, 8463 27) checked question by question against the specifications.
  // Re-pinned 19 Nov 2026 (D-509): the 4MA1 algebraic manipulation practice set (6
  // questions, 5 Higher-only) merged into the use of symbols and algebraic manipulation
  // set. Its Q1 moved as Q13 (mixed: only part (c) is Higher, so not Higher-only); the
  // five Higher-only duplicates were dropped. 4MA1: 181 − 5 + 0 = 176.
  // Re-pinned 20 Nov 2026: 41 new subtopic practice files (8462 38, 8300 3) were labelled by their
  // writers question by question against the AQA specifications (Higher-only content is marked
  // "HT only" in the 8462 document and in the Higher column of the 8300 content tables) and added
  // above. 8462 +58 Higher-only (12 to 70); 8300 +10 (35 to 45).
  assert.deepEqual(counts, { '4MA1': 187, '8461': 40, '8462': 70, '8463': 62, '8300': 45 });
  // Review fix (28 Sep 2026): total questions per bank, pinned. Every file in these
  // banks is in HIGHER_LABELS_CHECKED, so a new question without a Higher label would
  // silently count as 'both'. A changed total fails here until the new or removed
  // questions are checked against the specification and these numbers updated.
  // Re-pinned 8 Nov 2026: 8461 +26 (health/lifestyle/cancer 14, plant tissues and organ
  // system 12), both files checked against the specification: no (HT only) content.
  // 8300 +3 (algebra practice: expanding, linear equations, functions), Higher labels checked.
  // Re-pinned 18 Nov 2026 (D-500): 4MA1 +394, 8461 +321, 8462 +48, 8463 +339, from the
  // 89 new subtopic files above, all checked and listed in HIGHER_LABELS_CHECKED.
  // Re-pinned 19 Nov 2026 (D-509): 4MA1 596 − 6 (algebraic manipulation practice file
  // retired) + 1 (its Q1 moved into the use of symbols set as Q13; Q2–Q6 dropped as
  // duplicates of that set's Q7(a), Q6, Q9(c), Q8(b) and Q8(a)) = 591.
  // Re-pinned 20 Nov 2026 (D-514): three 4MA1 practice files (mensuration of 2D shapes, 3D shapes and volume, similarity; 39 questions, 11 Higher-only) checked against the specification: sector arc length and area (4.9), sphere and cone (4.10) and area and volume ratios of similar figures (4.11) are Higher-only. 4MA1: 176 to 187 Higher-only, 591 to 630 total.
  // Re-pinned 20 Nov 2026: the 41 files above add 8462 +390 (228 to 618) and 8300 +36 (150 to 186) questions.
  // Re-pinned 24 Nov 2026: retiring the duplicate aqa-gcse-chemistry-atomic-structure-practice page (B1 twin retirement, #231) removes its 10 questions, 618 to 608.
  assert.deepEqual(totals, { '4MA1': 630, '8461': 480, '8462': 608, '8463': 447, '8300': 186 });
});

/**
 * Review fix (28 Sep 2026): text in a question that LOOKS like a Higher label but
 * is not read as one (a typo, a new wording) would leave a Higher-only question
 * tagged 'both'. Every such mention in the Foundation/Higher banks must be read by
 * HIGHER_LABEL or be on this short, reviewed allowlist of wordings that are
 * deliberately not labels.
 */
const NOT_A_LABEL_ALLOWLIST = [
  // "(Both tiers; (b) and (c) Higher tier only)": a mixed-tier note, left unlabelled
  // so the question stays 'both' in a checked file.
  /\(Both tiers; (?:\([a-z]\)|[^()])*\)/g,
];
const HIGHER_MENTION = /\(Higher|[Hh]igher [Tt]ier|HT only/g;

function unreadHigherMentions(questionMarkdown) {
  const md = questionMarkdown.replace(/\*/g, '');
  const spans = [];
  for (const re of [HIGHER_LABEL, ...NOT_A_LABEL_ALLOWLIST]) {
    for (const m of md.matchAll(re)) spans.push([m.index, m.index + m[0].length]);
  }
  return [...md.matchAll(HIGHER_MENTION)]
    .filter((m) => !spans.some(([a, b]) => m.index >= a && m.index < b))
    .map((m) => md.slice(Math.max(0, m.index - 30), m.index + 50));
}

test('mention check: a malformed or new Higher wording is caught; labels and allowlisted notes pass', () => {
  assert.deepEqual(unreadHigherMentions('**5.** (Higher tier only) A light meter ...'), []);
  assert.deepEqual(unreadHigherMentions('**2.** (Both tiers; (b) and (c) Higher tier only) A is the point (−4, 3).'), []);
  assert.equal(unreadHigherMentions('**5.** (Higher tier only.) A light meter ...').length, 1);
  assert.equal(unreadHigherMentions('**5.** (Higher-tier only) A light meter ...').length, 1);
  assert.equal(unreadHigherMentions('**5.** (HT only, extended) Explain ...').length, 1);
  assert.equal(unreadHigherMentions('**5.** Explain. This part is higher tier.').length, 1);
});

test('real banks: every "(Higher" / "Higher tier" / "HT only" in a Foundation/Higher question is a read label or allowlisted', async () => {
  const { practiceQuestionsForCode } = await import('../bank.ts');
  const problems = [];
  let checked = 0;
  for (const code of ['4MA1', '8300', '8461', '8462', '8463']) {
    const qs = practiceQuestionsForCode(code);
    assert.ok(qs.length > 0, `${code}: bank is empty`);
    for (const q of qs) {
      checked += 1;
      for (const ctx of unreadHigherMentions(q.questionMarkdown)) problems.push(`${q.id}: …${ctx}…`);
    }
  }
  assert.ok(checked > 0);
  assert.deepEqual(problems, [], 'Higher wording not read as a label (fix the label, or add a reviewed wording to NOT_A_LABEL_ALLOWLIST)');
});
