# Marlbridge — repair work order

**For:** the instance doing repairs on `Nouman1608/MB`.
**Written:** 2026-09-15, by the audit instance. **Repo state:** `main` @ `ca8b3a2`.

This is a standing order. Work through it continuously. **Do not wait for the auditor between
batches** — the escalation list in §5 is short and everything else is yours to decide.

---

## 1. The objective

**3 confirmed-error groups open** *(2026-11-14, round 38: D-252 and D-253 verified — 76 of 80 items fixed; E386, E934 and E935 open; I388 and I389 open.)*

> **Amended 2026-10-12 (Q374).** This order first said 658. That figure never subtracted repair
> rounds D-138…D-191, which closed 508 of them. The list of what is actually open — 89 plain,
> 61 open despite a closing round, each with its reason — is in `2026-10-12-findings.md`. Work
> from that list, not from older findings files.

**Done means** every open confirmed error is either fixed, deferred with a stated reason, or
recorded as not reproducing — with the finding-ID table current through your last decision-log
entry.

That figure is current as of D-225 and counts findings no round has *declared* closed — not
errors verified to remain. The earlier 658 was overstated by 508, and before that by 131.

---

## 2. Read before the first batch

1. **`docs/audit/README.md`** — the index and the **amendment map**. Later findings rounds
   amend earlier ones. Acting on a finding without checking what amended it is how five files
   ended up worse than baseline.
2. **`docs/audit/correction-constraints.md`** — standing rules, organised by *the shape of the
   correction you are about to apply*. This is the difference between fixing and damaging.
   Match each finding to its section before you touch anything.

Both are short relative to the findings files. Read them once properly.

---

## 3. Order of work

**By subject cluster, largest first.** Clusters share specifications, so reading one document
serves many findings.

**Cambridge findings are workable again** — the audit read all thirty Cambridge absence
documents complete in round 8 (2026-10-15). If the board's site goes down again it serves a
maintenance page **at HTTP 200** — check for the maintenance string, not the status code. Do
**not** substitute revision sites, mirrors, cached copies or summaries. An unverified fix is
worse than an unfixed finding.

---

## 4. Per finding

**Before:**
- Check the amendment map for that finding.
- **Read the file as it stands on `main`.** A finding records what was true when it was
  written. The audit has published present-tense claims about already-fixed files four times.
- Find the section of `correction-constraints.md` that matches the correction's *shape*.

**While fixing:**
- **Scope to the defect, not to the slugs the finding lists.** Then check the family —
  same subject, same syllabus code, same topic — for siblings carrying the same defect. Ten of
  78 siblings once still carried a corrected defect after sign-off. This is the single most
  expensive failure mode in this project.
- If the correction offers *"or do Y"*, judge Y independently. The fallback is often unchecked,
  and in six cases it was the unsafe half.
- If the correction states a count without its contents, get the list from the source. **Do not
  fill it from memory** — that reintroduces the error the finding was raised about.
- If the correction removes content, check whether the specification requires that material
  anywhere, in any form, at any tier, before deleting.

**Better than asked is fine and welcome.** Two of your fixes this round were better than the
correction specified — reworking a solution to remove a rounding error rather than patching two
numbers, and adding a two-scales disambiguation section rather than swapping figures. Do that
when you see it.

---

## 5. The only four things worth escalating

1. **The "or drop the section headings" option on E335, E367, E391, E625, E631, E642.** Those
   six corrections offer deletion for papers their own observations establish as *having* those
   sections. That option has already damaged six files. **Do not take it.**
   *If you verify a paper's specification and find it genuinely has no lettered sections:
   publish that finding and stop. It reopens the question; it does not license the deletion.
   The two directions have very different costs.*
2. **Any fix that deletes content where the specification cannot be read end to end.**
3. **Any reversal of an audit finding.** See §6.
4. **A finding whose own evidence contradicts itself.**

**Everything else: fix it and log it.** Routine corrections, findings that turn out already
fixed, fixes better than specified — no relay needed. You have been right against the audit
repeatedly; use that judgement.

---

## 6. Reversing a finding

You may. The audit has been wrong and corrected several times, including four times in one
session — E901 withdrawn, a stale index row, a truncated commit list read as complete, and a
damage count that was wrong in both directions. Your pushback was right each time.

The rule that came out of the one reversal that went wrong:

> **Reverse a finding only against the primary document it cited, read at the point of
> reversal.** Secondary material — a webinar, a support article, a forum, a mark-scheme
> commentary — may raise a question. It may never settle one. Where secondary material and a
> published specification disagree, the specification governs.

And the corollary:

> **Before recording that a finding is wrong, quote what it actually said.** If the quotation
> has to be paraphrased to make the contradiction work, there is no contradiction.

Your D-211 entry already states this rule in its own words. Keep it.

---

## 7. Logging — this is what ends the message-passing

Per batch, a decision-log entry listing finding IDs in **three separate groups**:

- **closed** — fixed and verified
- **deferred** — with the reason, and what would unblock it
- **already correct / not reproducing** — with what you read to establish it

**Deferred is not closed. A qualifier is not a closure.** Never flatten "nearly all" or
"partial" into a clean closure — that error cost this project a 131-finding overstatement.

**Keep extending the finding-ID index table (D-219 onward).** That table is the single thing
that keeps the audit's reconciliation current without anyone relaying messages. It is why this
work order can be a document rather than a conversation.

---

## 8. Current specifics

- **Round 38 (2026-11-14, Q419): D-252 and D-253 verified.** Work **E386** (a-level-edexcel-business-marketing-and-people
  coverage list names risk and uncertainty, market research and sampling, marketing objectives, none taught), **E934**
  (law-english-legal-system-practice: CPR r.26.9(10)(b) needs all three conditions), **E935** (aqa-gcse-physics-energy-practice
  'sound store'; 9215 and 9670 data-record numbering), **I389** (stale 9236 link in five places; 'two optional sections')
  and **I388** (round 37). Round 39 reads the observations listed in D-252 and D-253.

- **Round 37 (2026-11-13, Q418): leads converted.** Apply **I388**: thirteen conservative rewordings covering the fourteen
  former leads (Geography boundaries, Boston Matrix dog, fetch registers, meiosis, ESS feedback question, Global politics
  'peace enforcement', History IA significance, Urdu 'ambition', fight or flight, 9275 attribution, 7136 'Step 4', 7717
  word count, IB Chemistry command terms). D-252 and D-253 are next to be read.

- **Round 36 (2026-11-12, Q417): leads worked with published mark schemes.** Add **I387** (0580 transformation names
  earn a mark; 9706 correct answers earn full credit without working; IB Chemistry Structure 1 'same proportion').

- **Round 35 (2026-11-11, Q416): leads worked.** Add **I386** (AQA micrometer uncertainty ±0.01 mm; AQA AS Business SMART
  and 'growth is not an objective'; OCR H556 'module-scoped'; IB Physics Paper 1A and 1B; the stale 9236 link) to the
  round 30-34 work. The leads still open are listed in Q416.

- **Round 34 (2026-11-10, Q415): closures E707–E901 read; 10 reopened; every declared closure now read.** Reopened
  (Q415 gives file and line): E708, E837, E846, E853, E901 (`syllabus-topics.ts` and `assessments.ts` records), E772,
  E779, E797, E838, E879. Also **E933** (9685 practice Q3 seven marks for [6]) and I385. Across rounds 30–34, 64
  closures are reopened (Q411–Q415): the usual cause is the same error left in a sibling file or a rendered data record.

- **Round 33 (2026-11-09, Q414): closures E467–E704 read; 20 reopened.** Ten are `syllabus-topics.ts` records printed
  on the subject pages and checklists (E496, E497, E507, E509, E521, E525, E526, E559, E560, E696): fix the data record
  in the same commit as the resource. The others (Q414 gives file and line): E495, E503, E511, E522, E529, E533, E550,
  E552, E567, E698. Also **E932** (9245 Question 4 is not the usefulness question; CPR r.26.9(7)(d) party rule) and I384.

- **Round 32 (2026-11-08, Q413): closures E338–E466 read; 11 reopened.** Reopened (Q413 gives file and line): E343,
  E399, E406 (`syllabus-topics.ts` records rendered on the subject pages and checklists), E354 (IB Economics practice
  Q5), E373 (7132 managers-leadership paper layout), E377 (0450 'Suggest'), E382 (9609 'State'), E386 (Edexcel
  organisational design), E390 (J204 'synoptic section'), E431 (9093 region sociolects), E458 (8702 unseen poetry).
  Also **E931** (0264 'renumbers every sub-topic'; 'lowers total cost to £135,000'; a scheme citing a fact the source
  lacks) and I383. E398 is withdrawn.

- **Round 31 (2026-11-07, Q412): closures E194–E337 read; 9 reopened; D-250 and D-251 verified.** Reopened (Q412 gives
  file and line): E199 (IAL Physics descriptions WPH14/WPH15), E218 (OCR Gateway exam-prep 'required practical'),
  E249 (5090 fifth food test), E276 (9201 Organisation notes), E284 (4MA1 coverage placements), E297, E300, E307
  (`syllabus-topics.ts` records rendered on the subject pages), E311 (8136 Section A). Also **E928** (repairs misstate
  9709 routes, IAL Economics cross-drawing, H460 numbering), **E929** (OxfordAQA measurements Q11 tariffs), **E930**
  (9702 '2mg' tensions; H556 practical skills), I381 and I382. D-250's paper-name dispute is upheld.

- **Round 30 (2026-11-06, Q411): 95 unread closures read; 14 reopened.** Each reopened closure still has the error in
  a named or sibling file (the Q411 text gives file and line): E54, E56, E83, E95, E96, E111, E118, E119, E120 (9701
  chemistry siblings, mostly `a-chemistry-synthesis-routes-practice` and the AS notes), E146, E147, E155 (0620),
  E160 (0625 moments tiering), E176 (5054 'sound stores'). Also **E926** (two repair explanations contradict 9701:
  26.1.2(a) misquoted; OH- 'not a ligand'), **E927** (moments-and-stability-practice Q10 [4] with six marks) and I380.
  Rounds 31-34 read the remaining 380 closures.

- **Round 29 (2026-11-05, Q410): D-249 verified; 40 more closures read, all fixed; leads worked.** Nothing more on
  E925 or I376. Work **I378** (CS Theme A: A2.1.3, SL and HL, maps network devices to the TCP/IP layers, so the
  layers are not HL only) and **I379** (11 items: 2058 edition labels, the accounting 25% conclusion, the maths
  identity's cos x condition, 0495 Q4, 0580 'equal weight', 0610 villus labelling and organism definition, the IB
  Literature oral timing, the MYP design ePortfolio, J247 digestion, J248 C3.2), with I377.

- **Round 28 (2026-11-04, Q409): the five unsettled round-12 closures read.** E360, E822 and E866 fixed; E850
  and E539 fixed with residues. Add **I377** (the IB Psychology subject guide's opening is 2027-guide text in a
  file sourced to the 2019 brief; the 9489 Paper 1 practice has two sources, the syllabus sets at least three)
  to E925 and I376.

- **Round 27 (2026-11-03, Q408): D-247 and D-248 verified.** Nothing more on E924, I374, U75 or I375. Work **E925** (9UR0
  Section A: students control the recording and may stop, revisit and replay it; three Urdu files say the
  audio cannot be paused) and **I376** (CS Theme A: the TCP/IP model A2.1.5 is HL only).

- **Round 26 (2026-11-02, Q407): D-245 and D-246 verified.** Nothing more on E923, I372, U74 or I373. Add
  **I375** (computer science HL A3.3.4-A3.3.6 missing; geography civil-society strategies and the
  non-governmental case study missing) to E924, I374 and U75.

- **Round 25 (2026-11-01, Q406): the last 95 U72 board claims checked.** Add **E924** (9UR0 Paper 3 is 30 + 30
  marks, not a Section B majority; YLA1 contract and criminal law are Paper 2 content; 9202's required practicals),
  **I374** (seven items: 4PH1 3.23 under 'Physics only', H431 synoptic components and Theme labels, H556 paper
  characterisation, 9615 AS Paper 2 title, 9725 misquotation, 9690 specimen papers now published) and **U75**
  (9675 Unit 2 mark scheme layout) to E923, I372, I373 and U74.

- **Round 24 (2026-10-31, Q405): D-244 verified.** Nothing more on E922, I371 or U73. Add **I373** (five items
  from your D-244 observations: 8192 'levels descriptors in the specification', 7192 Q8/Q9 point tokens, 8462
  exam-prep HT scenario unlabelled, 7131 added value placed in Topic 1, 0455 credit creation unlabelled) to E923,
  I372 and U74.

- **Round 23 (2026-10-30, Q404): IB board claims.** New: **E923** (seven IB families: Psychology biological
  approach topics, Biology gas-exchange properties, Physics SL Paper 2 marks and IA criteria, Geography global
  climate coverage and fieldwork, History 2028 Paper 1, Computer science SQL, Chemistry HL markers), **I372**
  (eight wording items) and **U74** (six claims the public IB documents cannot settle). D-241's IB fixes all hold.

- **Round 22 (2026-10-29, Q403): D-242 and D-243 verified.** Nothing more on E920, E921, I369 or I370; your
  I370.2 call was right. New: **E922** (seven families: 7131 external environment, 7136 3.2.2, 7405 3.1.3
  coverage, 8462 tiers and 4.3.5, 8463 power equation, 0625 grade eligibility, 0455 perfect competition),
  **I371** (six wording items) and **U73** (four claims needing a non-specification AQA document).

- **Round 21 (2026-10-28, Q402): D-241 verified.** Nothing more on E914–E919 or I363–I368. Add **I370** (two
  residuals: `ib-dp-psychology-cognitive-approach` L145-147; `ib-dp-chemistry-structure-1-revision-notes` L77-80)
  to E920, E921 and I369. Your four disputes are upheld.

- **Round 20 (2026-10-27, Q401): Cambridge board claims.** Work **E920** (5 statements) and **E921** (7 statements,
  13 files), then **I369**. Each item quotes the syllabus. Withdrawn, no change needed: I363.11, I363.21, Q400.9,
  Q400.11, Q400.12, Q400.13. Your I363.10 dispute is upheld. Q400.7 and Q400.14 stay leads (mark-scheme practice).

- **Round 19 (2026-10-26, Q397): post-baseline resources read.** Work **E914–E919** (80 errors, every item
  with file and line in `2026-10-26-findings.md`), then **I363–I368**. Q399 and Q400 are leads to confirm
  before editing; Q400 needs the board document. U72 is not repair work. D-240 verified (Q398).

- **Round 18 (2026-10-25, Q396): two low-priority data items.** **I361**: set 9270 5.1, 9275 5.1, 9675 5.3,
  9230 4.3, 9635 3.2 in `syllabus-topics.ts` and link the live copies; relink 9630; leave 9685 (unsettled).
  **I362**: the 3247 assessment record should cite 721463 (2027). No confirmed error is open.

- **Round 17 (2026-10-24, Q395): nothing to repair.** D-238 verified. Its two new observations (legacy
  `oaqaresources` paths in `syllabus-topics.ts`; the 3247 assessment record) are unchecked leads, not findings.

- **Round 16 (2026-10-23, Q394):** D-237 verified; I356 and I357 are closed. Still to repair: E912, E913,
  I358, I359, I360, Q393 (round 15).

- **Round 15 (2026-10-22, Q392): 2 errors, 4 lesser items.** D-235's observations were checked against
  their documents. E912 (J204/01 break-even and added value), E913 (9702 CMB question), I358 (3248 data link),
  I359 (OxfordAQA version declarations), I360 (9264 topic naming and Q7), Q393 (9610 genetic diversity).

- **Round 14 (2026-10-21, Q391): all 110 fixed.** Two low-priority inconsistencies found while verifying:
  **I356** (9225 influences description lists five as "the six") and **I357** (the aligned-to line shows 8464
  under GCSE Physics). E451's round-12 residue about Section B was wrong: 9670 sets one task from a choice of two.
  D-235's unactioned observations are unchecked claims; the audit will read them before recording anything.

- **Round 13 (2026-10-20, Q390):** D-234 verified, nothing to repair in it. The 110 from round 12 still stand;
  the status report sent with D-234 predates round 12 and should not be read as "0 open".

- **Round 12 (2026-10-19, Q389): 110 to repair.** The audit read the 692 closures D-138…D-225 declare.
  101 are not fixed and are reopened; the evidence for each (file and line on `main`) is tabled in
  `2026-10-19-findings.md`. Nine new confirmed errors, E903…E911, were introduced by repairs whose
  findings stay closed — six are science errors (E903…E908: chirality, H⁺ in electrolysis,
  halide solubility, third-law pair, centrioles, root hair glucose), one is seven tariff mismatches (E909),
  one is practice-paper apparatus contradicting its questions (E910), one is misstated assessment structure (E911).
  When a correction is applied, search the family and the frontmatter for the same wording, and re-add every
  tariff the edit touches: most reopenings are a missed sibling, description or self-test.

- **Round 11 (2026-10-18, Q388):** the audit has now read all 147 closures in D-226…D-233 on `main`;
  all are fixed. Nothing to repair.

- **Round 10 (2026-10-17, Q386–Q387): nothing to repair.** D-232 and D-233 verified. No confirmed
  error is declared open. The audit has read 89 of the 145 closures in D-226…D-233; the 56 unread
  (mainly D-227's E60–E69, E109, E114, E397 and D-228's E572–E657) will be read by the audit — no
  repair action unless that reading reopens one.

- **Round 9 (2026-10-16, Q383–Q385): seven left.**
  - **E615, E616, E617, E628:** read their texts from `post_baseline_findings` in the evidence file
    (not `findings[]` — that is why no round has worked them). `igcse-accounting-verification-practice`
    Q7, Q9 and Q9(b); `oxfordaqa-a-level-accounting-organisation-types-practice` Q4 (keep the E46
    bank-finance parenthetical).
  - **E605–E607:** the IB DP Geography guide *is* readable. Open a browser tab on an ibo.org page,
    load pdf.js into that page, and fetch the PDF from the same origin. No challenge was served. Fix all
    five files, including `ib-dp-geography-exam-preparation` and `ib-dp-geography-population-distribution`.
  - **E48 is withdrawn** — leave the file. **E64:** tidy the description, which still lists polarisation.

- **E276 needs no action.** Its correction was verified safe (Q373) — and **D-141 had already
  applied it** on 6 September; the file on `main` is correct. *This line first said "apply as
  written" (Q374).*
- **Round 8 (2026-10-15, Q380–Q382):** **E640 — do not use its first option.** Rewrite the
  approaches to 9990's four, but keep the free-will, nature–nurture, reductionism and
  idiographic sections: they are 9990's own A Level issues and debates. Label them A Level,
  add the five AS ones for Paper 1, drop the humanistic strand. **E175 is reopened:** add *the
  volume of a gas at constant pressure* to `a-physics-temperature`; the constant-volume row can
  stay. E759's correction stands as written.
- **Round 7 (2026-10-14, E902/Q379):** **Apply E902 first** — `a-law-the-law-in-action-practice`
  Q2: stem to three implied terms (s9, s10, s11), [3], and s13 out of the scheme or labelled
  extension with no credit. YLA1 names exactly three. Four bounds (E874, E347, E482, E331) are
  recorded; their applied fixes are already safe.
- **Round 6 (2026-10-13, Q377/Q378):** **E746 is withdrawn** — leave the stem as it is. **E738, E739
  are verified fixed.** **E736** needs only its linked-list table row removed; **E729** only the
  NEXT mention in its common-mistakes sentence. Apply **E602, E739, E763** only with the bounds
  in `2026-10-13-findings.md`.
- **E60–E69 and E109 are genuinely open** (Q375). D-138's heading covered them; no batch did.
  Read each file on `main` first. Also read E114 (skipped by D-138 as a mapping error; its
  marker has since gone).
- **E442 is closed** by your D-223. The cross-board *pattern* still applies to other
  remove-a-term corrections — check the other boards in the corpus before applying one.
- **The cycle-coverage register (21 Cambridge codes on 2026 windows) must not be worked yet.**
  It is derived from a frozen baseline snapshot rather than `main`, and already produced one
  withdrawn finding. It needs re-basing first.
- **I355 is real and open** — Cambridge 5014 has no live-cycle coverage and the subject listing
  page says nothing about it. Actionable now; does not need the board's site.

---

## 9. Two things to hold onto

**A screen is a reading list, not a measurement.** Every group size the audit published turned
out wrong on reading. If a finding hands you a count of affected items, treat it as a queue to
check, not a number to trust.

**Completeness is judged by a document's own closing matter, never by length.** An extraction
of 106,651 characters was complete; one of 135,110 was not. The same applies to tool output — a
result of exactly a round number is truncated until something else proves otherwise, and a
*negative* claim about a list needs a second route to confirm it.

Never bypass a bot challenge or CAPTCHA to reach a document, for any reason. A real browser
session reaches what a direct download cannot.
