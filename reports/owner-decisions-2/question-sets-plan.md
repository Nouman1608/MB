# Exam-style question sets: plan for the next 20 (item 37)

Status: plan only, for owner approval. No set has been drafted. No figures from Search Console are written here: ranks and demand bands only (the raw data stays in the D1 store `mb-search-demand` and `.growth-private/`).

## 1. Template used by the pilot

Pilot: `src/content/resources/cambridge-igcse-chemistry-0620-moles-exam-style-questions-practice.md` (reviewed 24 Nov 2026; derivations in `reports/S5-pilot-derivations.txt`; background in `reports/S5.md`).

Front matter: title in the form "Cambridge IGCSE Chemistry (0620): <Topic> -- Exam-Style Questions with Marks and Mark Scheme"; `resourceType: practice-questions`; subject, level, topic, boards, qualifications, `syllabusCodes`, `syllabusSeries`, `order`, one `syllabusTopics` entry; a description saying the number of questions, that marks are shown per part, which command words are used, and that there is a mark scheme with full working; `author: marlbridge-academic-team`; review fields (below).

Page sections, in order:
1. Original-content notice (blockquote): original questions written for Marlbridge, not past-paper text, not the exam's structure, question count or tariffs, board holds copyright, use with the official free past papers.
2. Link to the matching revision notes page.
3. "How to use this set" blockquote: marks in square brackets after each part, total marks, command words follow the board's command-word glossary, tier note (which questions are Core and which Supplement/Extended), data given (Ar values, molar gas volume).
4. Questions: 12 questions, 38 marks in the pilot; parts (a), (b), (c); tariff [1] to [4] per part; command words used: Calculate, State, Explain, Compare; Core first, Supplement after, tier label on each.
5. Answers (mark scheme) with a marking key: M = method mark, A = answer mark, bare marks [1] where one point; correct final answer with no working scores full marks unless the question says "show"; error carried forward stated; final answers in bold with units; full working shown per part; accepted alternatives noted (for example 1.4 g or 1.39 g; cm3 versus dm3).
6. "Where marks are usually lost": 3 to 4 bullets of common errors.

Marks rule: each part carries marks matching the number of method and answer steps in its scheme; "Calculate" parts are M plus A; "State" is 1; "Explain" is 2 (statement plus reason); "Compare" is 1 with both sides referred to.

Review fields (front matter): `author`, `reviewer` (reference to authors), `reviewStatus` (draft, review-pending, reviewed, changes-requested, archived), `reviewedDate`, `reviewNote`, `publishedDate`. The pilot is `reviewed` by the accountable teacher named in the page. All later sets start as `reviewStatus: draft` or `review-pending` with no `reviewer`.

Independent answer check kept in the repo: a derivations text file per set (Python or equivalent) listing every answer recomputed from the stated constants.

Known gates to expect (from S5): each new set shares the same scope as the topic's existing `...-practice.md` page, so `scripts/check-duplicate-resource-scope.mjs` (hard gate) needs a reviewed entry in REVIEWED_LEGITIMATE per set, with a decision-log line; and a new page joins the live `/practice/<code>/` question bank automatically, so publishing a set changes live practice data. The lead decides both before any set goes live.

## 2. Next 20 topics, ranked by demand

Method: read-only queries on the Search Console store. For each topic keyword I summed impressions of matching pages and matching search queries over 26 Aug to 23 Nov 2026, then ranked topics by (a) demand and (b) quantitative fit (calculation-based topics first, since the template depends on marks for method and answer). Keyword matching is approximate (some keywords such as "statistics" or "functions" also match URLs from other subjects), so treat the order as indicative; the site's query volume is small and thin. Moles at 0620 is done (pilot) and is excluded. Economics and accounting need a rewrite of the "marks" model (see notes) but are included because demand is high.

Demand: high / med / low; Fit: calculation = A, mixed = B.

| Rank | Topic | Courses (examples, codes to confirm) | Demand | Fit |
|---|---|---|---|---|
| 1 | Accounting ratios and financial statements | Accounting (Cambridge 0452, 9706; AQA A Level) | high | A |
| 2 | Statistics: probability distributions and hypothesis tests | A Level Maths 9709 (Probability and Statistics), Further Maths | high | A |
| 3 | Differentiation | A Level Maths 9709 P1 and P3, 9231 | high | A |
| 4 | Functions and algebra | IGCSE Maths 0580, 4024, A Level Maths 9709 P1 | high | A |
| 5 | Chemical equilibrium: Kc, Kp and Le Chatelier calculations | A Level Chemistry 9701; 0620 (lighter) | high | A |
| 6 | Elasticity (price, income, cross) and demand and supply calculations | Economics 9708, 0455 | high | A |
| 7 | Acids, bases, pH and titration calculations | 9701, 0620 | med | A |
| 8 | Energy, work and power | Physics 0625, 9702, 0972 | med | A |
| 9 | Trigonometry | 0580, 4024, 9709 P1 | med | A |
| 10 | Integration | 9709 P1 and P3, 9231 | med | A |
| 11 | Forces, motion and kinematics (SUVAT, graphs) | 0625, 9702 AS, 4PH1 | med | A |
| 12 | Vectors | 0580, 9709 P1, 9231 | med | A |
| 13 | Probability | 0580, 9709 P5 | med | A |
| 14 | Logarithms and exponentials | 9709 P2, 0580 | low | A |
| 15 | Electric circuits (V = IR, series and parallel, resistivity) | 0625, 9702 | low | A |
| 16 | Quadratics and coordinate geometry | 0580, 4024, 9709 P1 | low | A |
| 17 | Energetics: enthalpy change and Hess cycles | 0620, 9701 | low | A |
| 18 | Sequences, series and the binomial expansion | 9709 P1 and P2 | low | A |
| 19 | Circular motion and momentum | 9702 | low | A |
| 20 | Redox and electrolysis calculations (Faraday, oxidation numbers) | 0620, 9701 | low | B |

Not selected, with reason: qualitative topics (periodic table, bonding, cell biology, respiration, photosynthesis, genetics, waves) have decent demand but do not suit marks-per-step calculation sets; they suit a different, structured-answer template. They stay on the later list. Sets for other boards (Edexcel, AQA, OCR, IB, AP) should reuse the topic list once the Cambridge template is proven, with that board's command words from its own glossary.

Template adaptation notes: accounting and economics are not M/A: use the board's own mark types (own figure, application, analysis) and require the owner's named teacher in those subjects before drafting. A Level Maths and Physics: use M, A, B marks and "correct answer only" rules as the board does. Statistics and Maths sets need a formula booklet statement rather than Ar data.

## 3. Review step

Every set goes through the same review before it is marked `reviewed`. No named reviewer exists yet.

Reviewer name field: `named teacher: TO BE SUPPLIED BY OWNER`. Until supplied the front matter keeps `reviewStatus: review-pending`, no `reviewer` reference, no `reviewedDate`, and the set stays hidden.

Checklist (all must be ticked, with the reviewer's initials and date in `reviewNote`):
- [ ] Every answer recomputed independently by the reviewer (not from the drafter's derivations file), using the constants stated on the page.
- [ ] The marks for each part match what the board's command word expects (Calculate = method plus answer; State = 1; Explain = 2; Compare/Evaluate per glossary) and totals add up.
- [ ] Syllabus fit: every question is in the stated topic and tier or paper for the stated syllabus series.
- [ ] No past-paper text copied or lightly reworded; contexts and numbers are original.
- [ ] Mark scheme shows full working, error carried forward and accepted alternatives; units and significant figures are right.
- [ ] Notice, Ar or data block, and tier labels present; no board-logo or exam-board mark use.
- [ ] Validators pass (practice bank, schema, review integrity, resource titles, commercial claims, duplicate scope).

## 4. Pace

3 sets per week; the owner's reviewing time is the limit, so drafting never runs ahead of review by more than 3 sets. 20 sets takes about 7 weeks (3 + 3 + 3 + 3 + 3 + 3 + 2). Suggested order follows the rank, with calculation-heavy A Level and IGCSE topics first. Publish nothing until the owner has approved the list and the lead has resolved the two gates above.

| Week | Sets (by rank) |
|---|---|
| 1 | 2, 3, 5 (see section 5) |
| 2 | 1, 4, 6 |
| 3 | 7, 8, 9 |
| 4 | 10, 11, 12 |
| 5 | 13, 14, 15 |
| 6 | 16, 17, 18 |
| 7 | 19, 20 |

## 5. First 3 candidates for hidden drafts

Chosen for high demand, clean fit with the pilot's method-and-answer marking, and no extra approval step. Accounting (rank 1) is held back until the owner names a teacher for it and chooses the mark model.

1. A Level Maths 9709: Differentiation (rank 3). Pure calculation; the board's mark scheme style is the pilot's M and A marks.
2. A Level Maths 9709: Statistics, probability distributions (rank 2). Calculation with a formula-booklet rather than Ar data.
3. A Level Chemistry 9701: Chemical equilibrium, Kc calculations (rank 5). Same constants layout as the pilot; shows the template works above IGCSE.

How to keep them hidden: write each as a draft (`reviewStatus: draft`, noindex) and confirm with the lead that draft pages are excluded from the build, sitemap, search and `/practice/` bank before the first file is created; not verified here. Do not draft until the owner approves this list.

## 6. Owner decisions needed

1. Approve or edit the 20-topic list and order.
2. Supply the named teacher for each subject (maths, chemistry, physics, accounting, economics).
3. Approve the first 3 hidden drafts, or pick others.
4. Agree whether accounting and economics get a separate mark model.
