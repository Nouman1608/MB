# First three exam-style question sets: hidden drafts (item 37)

Date: 26 Nov 2026. Nothing committed, pushed or built. All three sets are `reviewStatus: "draft"`, with no `reviewer` and no `reviewedDate`, so they cannot be published.

## Files

New pages (src/content/resources/):
1. `cambridge-a-level-mathematics-9709-differentiation-exam-style-questions-practice-draft.md` : 9709 Paper 1, syllabus 1.7. 10 questions, 49 marks. Topic ids `pure-mathematics-1-cambridge-alevel` / `differentiation-cambridge-alevel-maths-1`.
2. `cambridge-a-level-mathematics-9709-discrete-random-variables-exam-style-questions-practice-draft.md` : 9709 Paper 5, syllabus 5.4 (tables, E(X), Var(X), binomial, geometric). 10 questions, 46 marks. Ids `probability-and-statistics-1-cambridge-alevel` / `discrete-random-variables-cambridge-alevel-maths`.
3. `cambridge-a-level-chemistry-9701-chemical-equilibria-exam-style-questions-practice-draft.md` : 9701 syllabus 7.1 (Kc, Kp, effect of changes on K). 10 questions, 32 marks. Ids `as-equilibria` / `as-chemical-equilibria`, `stage: "AS"`.

Code change (one, needed to keep the drafts hidden): `src/utils/practice/bank.ts` now skips any practice-questions file with `reviewStatus: "draft"`.

Derivations: `reports/owner-decisions-2/question-sets-derivations.py` (standard library only) and its saved output `question-sets-derivations-output.txt`.

Template follows the 0620 moles pilot exactly: title "... -- Exam-Style Questions with Marks and Mark Scheme (Draft)", `resourceType: practice-questions`, same field set, original-content notice, Related link, "How to use this set" box with total marks and command words, Questions, Answers with marking key, "Where marks are usually lost". Added at the top: a DRAFT banner and a "What the teacher must confirm" list. Related links point only at reviewed revision-notes pages, never at the hidden drafts.

## How drafts are kept hidden: findings

- Routing: `src/utils/content/collections.ts` drops `reviewStatus === 'draft'` from `getResources()`, so no page is built and the sitemap (built from routes) cannot list it. Resource counts also exclude drafts (`status.ts`). Confirmed in code, not in a build (no build was run, as instructed).
- Practice bank: **this was NOT true before my change.** `buildPracticeBank()` reads the resources folder directly and had no draft test. With the three drafts in place the bank grew from 15,922 to 15,952 questions (30 draft questions, all in flagship codes 9709 and 9701), so they would have gone live on `/practice/`. The existing Islamiyat and English drafts are not flagship codes, which is why this never showed. I added a one-line skip for drafts. After the fix the bank is back to 15,922 and 0 questions come from the drafts. `gap-report.ts` derives from the bank, so it is fixed too. The lead should review this one-line change; it affects no existing page (no other flagship practice file is a draft).
- `check-duplicate-resource-scope.mjs` does NOT skip drafts (it only skips `archived`), so drafts count in the duplicate gate (see below).

## Gates: what is needed (nothing bypassed, no reviewed entries added)

`check-duplicate-resource-scope.mjs --only-involving <the three>` reports 3 unreviewed groups, i.e. it would fail the hard gate:
- differentiation draft vs `a-level-maths-9709-pure-mathematics-1-differentiation-practice.md`
- discrete random variables draft vs `cambridge-a-level-mathematics-9709-discrete-random-variables-practice.md`
- equilibria draft vs `as-chemistry-equilibria-practice.md`

Each needs either a `REVIEWED_LEGITIMATE` entry with specific evidence (what differs from the existing page) and a decision-log line, or a merge. This is a lead decision before any set is merged to main: as drafts they currently trip the gate on any branch that contains them. Options: hold the files off main until the entries are agreed, or add the entries (evidence: exam-style tariffs and M/A/B or ecf mark scheme with working versus the existing question list). I did neither.

Also needed for publication (not done): a named reviewer in `authors`, `reviewStatus: reviewed`, `reviewedDate`, and removal of "(Draft)" from the title and the banner and teacher list from the body.

## Syllabus check

Fetched from cambridgeinternational.org and read as text (both readable):
- 9701 syllabus 2025-2027 (664563-2025-2027-syllabus.pdf): 7.1 outcomes 4 to 9 (Kc, mole fraction, partial pressure, Kp, calculations without quadratics, effect of changes on K); command-word table (Deduce, Calculate, State, Explain used); statement that misuse of units or significant figures can be penalised.
- 9709 syllabus 2026-2027 (697427-2026-2027-syllabus.pdf): 1.7 and 5.4 outcomes and notes; three significant figures rule; MF19 formula list is supplied; calculator answers unsupported earn no marks; command-word table (Calculate, Determine, Explain, Show that, State, Verify used).
- Not defined by either syllabus: the M, A, B, ft mark conventions and Cambridge's per-point chemistry marking. They are the drafter's knowledge of Cambridge mark schemes, so each page tells the teacher to confirm them. "Find" is not in the 9709 command-word table but is used in maths questions as the papers do; the teacher list says so.
- Plan wording said "probability distributions and hypothesis tests" for the statistics set. Hypothesis tests are Paper 6 and there is a separate P5 topic page for the normal distribution, so I took 5.4 discrete random variables; the teacher list flags this for confirmation.

## Recompute evidence

`python reports/owner-decisions-2/question-sets-derivations.py` : 100+ checks, final line `FAILURES: none`. Method: differentiation answers checked by central-difference numerical derivatives and second derivatives, and the box minimum by brute-force scan; probabilities by `math.comb`, exact `Fraction` arithmetic and full enumeration (tetrahedral die, 16 outcomes); chemistry by recomputing from the stated amounts and volumes, including the "volume ignored" error value (45). The script caught one error in my first draft: the answer variance for the four-sided die question was first written as 1.1875 in the checks; the recompute gives E(X^2) = 2.5, Var = 0.9375, and the page uses 0.9375. All page figures now match.

Key results: D1 20x^3 - 4x^(-1/2) - 6x^-3; D3 max (1,6), min (2,5); D4 tangent y = 2.5x + 2, normal y = -0.4x + 7.8 crossing the x-axis at 19.5; D5 -2 < x < 3; D6 2.51 cm^2/s; D7 min S = 300 at x = 10; S1 p = 0.4, E = 4.6, Var = 4.04; S2 0.238, 0.738; S3 0.283, 0.275; S5 0.0819, 5, 0.512; S6 n = 14; S7 a = 0.3, b = 0.4; S8 table 0.25/0.375/0.25/0.125, E = 1.25, Var = 0.9375; S10 E = -1/3; C3 Kc = 27.0; C4 Kc = 180 dm^3 mol^-1; C5 0.80 mol; C6 0.068 mol dm^-3; C7 Kp = 267 kPa; C10 Kc = 0.0533 mol^-2 dm^6.

## Validators (temporary junction node_modules to MB-owner-decisions; removed afterwards)

- validate-academic-content: OK (tagging, syllabus topic references, stage consistency, code references).
- validate-review-integrity: PASS, 0 problems (18,353 resources).
- validate-resource-titles: PASS, 0 duplicate search titles.
- validate-course-consistency: hard problems 0, new findings 0, baselined 60.
- validate-practice-bank: OK with the drafts present and before the bank.ts change (15,952 questions). After the change a direct bank build gave 15,922 with 0 draft questions; the validator re-run after the change did not report back before I removed the junction, so the lead should re-run it.
- check-duplicate-resource-scope: FAILS for the three new groups, as expected (see Gates).

## Open items

1. Owner: name the maths teacher and the chemistry teacher (reviewer left blank by design).
2. Lead: approve the one-line `bank.ts` draft skip.
3. Lead: decide REVIEWED_LEGITIMATE entries (3) with decision-log lines, or keep these files off main until then.
4. Teachers: complete each page's "What the teacher must confirm" list (independent recompute, mark conventions, syllabus fit, originality).
5. Originality check was by construction (own contexts and numbers), not by search against past papers; the teacher should do the past-paper comparison.
6. Next weekly batch should wait for review feedback, per the plan's "no more than 3 ahead" rule.
