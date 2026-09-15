# Correction constraints — read before applying any audit finding

*Consolidated from the absence re-verification (rounds one to five) and the correction
audit (rounds one to six). Every constraint below was verified against an official
specification read end to end, or against the audit's own records. Nothing here is inferred
from a finding's summary.*

*Updated 2026-09-15 with the coordinate pass on Cambridge 0620 (§6), the read-through audits
of the terminology (§5), over-deletion (§2) and enumeration (§4) groups — **every screened
group has now been read** — and with a correction to this document's own opening claim, which
described damage that had already been repaired. See "Why this exists" below.*

> **Before acting on anything here, check the file as it stands on `main`.** This document
> records what was true when each constraint was written. The repair work moves faster than
> the findings do, and this audit has twice published a present-tense claim about files that
> were already fixed. A finding is a timestamp, not a status.

---

## Why this exists

Across 42 absence findings re-checked against complete specifications, **one finding was
overturned and 24 corrections needed narrowing before they were safe to apply.** The
findings in this audit are mostly right. The instructions attached to them mostly are not
safe to apply as written.

That is not theoretical. **Six resources were damaged** by applying a correction at the wrong
scope — a practice paper's genuine lettered section headings deleted on the strength of a
correction whose own observation said the paper had them.

**All six have since been repaired**, verified by reading them on `main`: two at **D-168**
(`d71bcda`, 11 September), restoring the headings with a Resource Booklet paragraph and a
15-mark evaluative question each; four by the squash-merge of **PR #47** (`fbc277e`).

This document previously said *five* resources *have been* damaged, present tense — and it
said so while **§7 cited `d71bcda` by name as the template for a complete fix.** The count was
wrong, the tense was wrong, and the two halves of the contradiction were both this audit's
own, in this file, surviving several revisions. That is recorded rather than quietly edited,
because the failure it represents — carrying a conclusion forward without re-checking the
thing it describes — is the single most repeated error in this workstream.

**The damage is repaired. The reason for the rule is not weakened by that**, and neither is
the advice in §7: those six *corrections* are still open and still unsafe if picked up.

**The single rule:** a correction is scoped to the code its finding examined. Before you
apply one anywhere, confirm the file you are editing belongs to that code.

---

## 1. Cross-board contradictions — check these first

These are cases where **the same term is off-syllabus for one code and required by
another**, and this corpus holds resources for both. A corpus-wide sweep on any of them
deletes required content.

| term | absent from | but REQUIRED by | verified |
|---|---|---|---|
| magnetic as an **energy store** | Cambridge 5054 (seven stores, magnetic not among them) | Edexcel 4PH1 — names eight stores, magnetic expressly one | both read end to end (U69) |
| **report** as a transactional writing form | Edexcel 4EA1 (six named types, report not among them) | Cambridge O Level — a named writing form in the syllabus audited alongside it | stated in the finding's own observation (Q359) |
| **public / merit / demerit goods**, market failure | OCR J205 GCSE Economics | Cambridge 2281 — lists all three by name as its market-failure key terms | 2281 read end to end (Q352) |
| **added value** | AQA 8132 GCSE Business | OCR H431 — requires explaining, calculating and evaluating it | H431 read end to end (Q352) |
| **quadratic inequalities** | Cambridge 4024 (inequalities restricted to linear) | required at AS and A Level | inferred, not read (Q352) |
| perfect competition, public goods, consumer surplus, **income elasticity** | OxfordAQA 9214 International GCSE | the same board's AS and A-level specification | stated in the finding itself (Q352) |

The first four are proven — the first from complete reads of both documents, the second from
the finding's own record of both boards. The last two are the same pattern without a read to
confirm.

**E442 was the one to watch**, because it showed the hazard is not rare: its correction said
to remove "report" from three files, its own observation recorded that the same form is named
by the other board, and the correction carried no code. Nothing in the screening predicted it;
it was found by reading. **It has since been closed by D-223.** The hazard *pattern* stands —
check any remove-a-term correction against the other boards in the corpus before applying it.

---

## 2. Corrections that say "remove X"

**The failure:** X is required by the same specification in another form, another topic, or
another tier — so removal deletes content a candidate is examined on.

Verified instances:

- **Aluminium extraction** — a finding says an electrolysis page should not cover it.
  Cambridge 0620 describes that extraction *as electrolysis in its own words* and requires
  the electrode reactions and ionic half-equations. The defect is **topic placement, not
  subject matter**. Deleting it removes required content. (Q338)
- **Lever contexts** — a finding says lever classes are off-syllabus for Cambridge 5054, and
  that is right. But outcome 1.5.5.1 expressly requires *everyday examples* of a moment, and
  a lever is one. Remove **the taxonomy of lever classes and the force-multiplier
  treatment**, not the context. (Q340)
- **The magnetic-force material** in Edexcel 4PH1 — the equation F = BIL and the tesla are
  genuinely absent, but outcomes 6.11P and 6.12 require the force on a moving charged
  particle and an understanding of *why* a force acts on a current-carrying wire. Only the
  **quantitative** treatment goes. (Q341)
- **Paper 1 advance material** in IB Business management — the *case study* is unseen, so
  calling it pre-seen is wrong. But a pre-released **statement** and approximately the first
  **200 words** of the case study genuinely are released, three months ahead. Deleting all
  mention of pre-release introduces a new error. (Q345)

**Check:** does the specification require this material anywhere, in any form, at any tier?

### The remove-X corrections were then audited, and they are well built

All 24 corrections flagged for over-deletion were read individually. Ten are the
section-structure family, where the six unsafe corrections of §7 live. **Of the other
fourteen, the six with the classic "remove off-syllabus content" shape are all well
constructed, and none is the bare deletion that caused the damage above:**

- **E64** offers *"or move it to the A Level resource under an explicit A Level label"* —
  relocation rather than loss.
- **E79** offers *"or retain it explicitly labelled as background carrying no marks"* **and**
  redirects the four freed marks to a named outcome the paper never tests. The
  best-constructed correction in this audit.
- **E268** offers *"or mark them as extension material"*.
- **E378** offers *"or label it explicitly as content for the successor syllabus"* — and says
  *why* the material is there, so a corrector knows it will be needed from 2027.
- **E392** and **E611** each specify the **retariff that deletion requires**, rather than
  leaving a question short of its own mark total.

**The conclusion that matters: the over-deletion damage came from one family only.** The
section-structure corrections were unsafe; the subject-content deletion corrections are
consistently well-scoped. Do not treat "remove X" as a warning sign in general.

**But one caveat, and it is not small.** These corrections were assessed against the
findings' own text, **not against the specifications**. A well-built correction can still
rest on a wrong absence claim. Several of these rest on absence claims against Cambridge
9701 — the 98-page syllabus where silent truncation was *proven*, at pages 50–53. E79's
claim that ozone and CFCs "return no matches anywhere" in 9701 is exactly the shape that a
truncated read produces. **Those absence claims are unverified and sit in the task-42
backlog.** The correction is safe to apply *if* the finding is right; the finding has not
been re-established.

---

## 3. Corrections that say "add X"

**The failure:** X is tier-restricted, and the file being edited is at the other tier — so
the addition puts unassessed material in front of a candidate.

- **The IB efficiency-ratio sub-topic is higher level only.** Adding stock turnover, debtor
  days and creditor days to a standard-level resource pushes HL content into SL. The
  finding's correction does not say so. (Q345)
- **The one verified safe case, now fully settled:** an outcome on the aluminium oxide layer
  is *Supplement in 0620 and required in 5070*. Because it is required of every 5070
  candidate, adding the paragraph was right for that code whatever the column check said
  about 0620. The 0620 tier is now **coordinate-confirmed Supplement** (9.4, item 5,
  y=224.9). Nothing outstanding. (Q357, and §6 below)

**Check:** which tier is X, and which tier is the file? If the finding names two codes with
different answers, the correction may still be safe — see the case above.

**Caution on tier attributions themselves:** see §6.

---

## 4. Corrections that hand over a count or a closed list

**The failure:** the number is the finding's, not the specification's.

- **"Restate the count as six"** — a complete read of all 59 pages of Cambridge 0620 finds
  **four** outcomes requiring dot-and-cross diagrams, not six. The other two occurrences are
  in the appendices and are not learning outcomes. (Q336)
- **Market failure: six areas, not seven.** Cambridge 2281 phrases its list as six, pairing
  *merit and demerit goods* and pairing *external costs and external benefits*. A seven-item
  list is defensible teaching but must not be attributed to the syllabus. (Q342)
- **Massive-star evolution names no stages at all.** Edexcel 4PH1 outcome 8.10 is a single
  line, unlike 8.9 which enumerates four for Sun-like stars. Red supergiant, supernova,
  neutron star and black hole are correct physics but **must not be attributed to the
  specification**. (Q341)
- **Functions of money are not enumerated.** Cambridge 2281 requires "the forms, functions
  and characteristics of money" and gives no number. Do not promise four. (Q342)
- **A five-route preparation sub-topic**, not four — a fifth exists in the higher tier. (Q338)

**Check:** does the source itself enumerate this, or is the enumeration the finding's?

### This group has now been read, and it held two unsafe corrections

All 45 corrections flagged for handing over a count were read individually. Three are not
about enumeration at all — the screen fired on an ordinary number in corrections about
square roots, a mark tariff and a pair of dehydration temperatures. One is already on record
as unsafe, being one of the six section-structure corrections of §7. **Thirty-four hand over
a count their own observation has already taken from the specification, in most cases naming
the items one by one. Two were unsafe.** (Q359)

- **E276 — still open, still unsafe.** It says *"list the five sub-topics the topic actually
  contains."* Nothing in its own observation establishes that the topic has five — it proves
  only that digestion belongs to the next topic. **The count is the audit's, not the
  specification's**, in a finding whose whole subject is a list of the wrong length. Establish
  the count from the specification before applying it.
- **E442 — since closed by D-223.** It said to remove a writing form because it is not among
  the six the specification names, while its own observation recorded that the same form is
  named by another board, and it carried no code. See §1 for the pattern, which still applies
  to other corrections of the same shape.

**One more is not unsafe but was misdescribed.** E520 rebuilt two practice papers on *"the
five tariffs the board uses"*. The observation derives those tariffs from **nine live
papers**; the specification enumerates none. An empirically observed set is good evidence and
**is not a published closed list**, and a correction should say which of the two it is handing
over. *(E520 has since been closed by D-223.)*

**The two models worth copying:**

- **E210** closes a list and says *why it may be closed* — the specification enumerates the
  prefixes as a requirement rather than as examples.
- **E786** does the opposite and is equally right: it names the three categories the syllabus
  specifies and then instructs that the examples beneath them be presented as
  **non-exhaustive**, because the guide says its own table is neither prescriptive nor
  exhaustive.

**Already well handled:** E789 carries three notes for correction, states that the sibling
code's list is open because it is introduced with *including*, says expressly that the
correction **must not travel** there, and scopes itself to *"the two files of this code
only."*

### A count without its contents is not a finished correction

Five corrections state how many items a list should have and do not say what they are — a
plate name for each of three examples (E563), twelve core studies (E643), eight topic areas
(E896), thirteen items across three lists (E898), and a heading to be renamed to nothing
stated (E892). In every case the finding's own reading of the source retrieved the items and
none of them reached the correction. Not unsafe, but a corrector must re-open the
specification to redo work already done — and one who fills the gap from memory reintroduces
the error the finding was raised about. **A correction stating a count must also state its
contents.** (Q360)

---

## 5. Corrections that set a term, a name or a figure

- **"Growth matrix" is not the specification's name.** OCR H431 calls it **Ansoff's matrix**
  throughout. (Q343)
- **The area is "Business objectives and strategy."** "Business objectives and strategic
  decisions" is the wording of a *component content-overview bullet*, not the name of the
  area. Do not present a resource's own title as the specification's. (Q343)
- **A reaction term absent from Cambridge 0620** — a correction uses a name the syllabus
  does not use for a reaction the syllabus *does* require in both tiers. Do not import the
  term as syllabus vocabulary, and do not call the reaction off-syllabus. (Q338)
- **`assess` is not one figure.** Edexcel XBS11/YBS11 publishes **10 marks for the IAS units
  and 12 for the IA2 units**. "Set each question at the published figure for its command
  word" is wrong for any Unit 3 or Unit 4 resource. (Q344)
- **Moving averages are restricted to an odd number of years** in OCR H431. An even-period
  example is off-specification. (Q343)

**Check:** does the source use this exact term, and does it publish exactly one figure?

### The terminology corrections were audited too, and are clear

All 15 corrections flagged for importing a term were read individually. **None is a hazard.**
Almost all name a replacement term the finding's own observation has already sourced from the
board — *"rename the paper to the board's own title"*, *"retitle after the compound it
actually makes"*, *"retitle for the qualification it actually serves"*. Several were not about
terminology at all; the screen fired on the words *restate as* in corrections about a mark
tariff and an economics worked example.

Two worth knowing about:

- **E614 is the model.** It establishes that *neither* the AS/A Level syllabus *nor* either
  current IGCSE syllabus of that board uses "day books", that all three use "journal", names
  the four replacements, **and pre-empts the misreading** — noting the term is standard
  elsewhere in the UK, "so this is not an import from the board's own IGCSE material as a
  first reading might suggest." That is what a scoped correction looks like.
- **E790** renames a section *"question-stem guidance"*, which is the audit's own coinage
  rather than a board term. Harmless as a heading in a Marlbridge resource, but do not
  present it as the board's.

One small defect of a different kind: **E892's "rename the heading" does not say what to.**
Under-specified rather than unsafe — see the end of §4.

---

## 6. Corrections that turn on a tier — the column defect

**Extracting a two-column tiered syllabus as linear text emits both tier headings before the
body regardless of which column the body occupies.** Higher-tier content can read as
lower-tier. This was proved live on Cambridge 0620: one sub-topic has an empty lower-tier
column with both outcomes in the higher-tier column, and the extracted text reads *header,
header, outcome*. (U65)

Consequences:

- It is **independent of document length**. No syllabus is safe by being short.
- Any tier in an audit finding derived by reading order may be **backwards**.
- Both tiers of the 0620 electrolysis sub-topic require inert electrodes of platinum or
  carbon, with the copper-electrode case added at Supplement. A correction must not flatten
  the two. (Q337)

**Check:** resolve tier by the **horizontal position of the text block against the column
rule**, and record the coordinate — not the reading order. This requires a layout-aware
extraction, not linear text.

### Resolved for Cambridge 0620 — no live inversion exists

A coordinate pass was run against 0620 (2026–2028, v2) and pushed as
`docs/audit/2026-09-15-tier-resolution-response.md`, commit `87b8c41`. Method: pdf.js
injected into a browser tab at the PDF's own origin, so the bytes could be fetched
same-origin and parsed for per-run transform matrices — genuine coordinates, not reading
order. **The column rule held stable across pages 13–39, the full extent of the two-column
subject-content section, with no exceptions:**

| | header x | item-number x | body-text x | sub-item x |
|---|---|---|---|---|
| Core | 62.4 | 62.4 | 79.4 | 96.4 |
| Supplement | 309 | 309 | 326 | 343 |

All three named cases were confirmed rather than overturned:

- **2.7 metallic bonding** — the Core header exists at y=719.9 with **no body item beneath
  it**. The column is genuinely empty. Both outcomes are Supplement, so **Core candidates
  are not examined on 2.7 at all.** This is the U65 case, confirmed.
- **2.4 ionic bonds** — Core item 3 and Supplement item 6 sit at an *identical* y=646.4 in
  opposite columns. Two distinct outcomes on one printed row, which is the geometry that
  collapses under linear reading.
- **4.1 electrolysis** — **Q337's suspicion was wrong, and that is the good outcome.** Copper
  sulfate genuinely is Supplement; lead bromide, concentrated NaCl and dilute H₂SO₄ genuinely
  are Core. Not inverted.

**Cross-checked against the four live resources covering this content: all four already match
the coordinate-derived tiers exactly.** One states outright that "the Core column for 2.7 is
empty, so metallic bonding is not required for IGCSE Core candidates at all."

Git history explains why: commit `d2a76b3` (2026-08-17) resolved the 2.7 ambiguity by visual
inspection **a month before U65 was raised**, and the surrounding content was authored from
per-outcome text extracted directly from the PDF rather than a naive linear pass. **The
defect this audit identified was real in the extraction method and had no instance in the
corpus.** U65, Q337 and Q357 should be closed as *verified, no corpus change required* —
which is a different thing from a finding that identified a live defect.

**Still unchecked, and confirmed to have no subject:** no open finding asserts a
Core/Supplement/Extended tier on Physics 0625, Biology 0610 or 5090 — every mention of those
codes in the findings record is a source citation, never a tier claim. Cambridge 5070 and
5054 are untiered and single-column, so the defect cannot apply to them structurally.

---

## 7. Corrections about paper structure

Twenty-seven findings concern practice papers whose section structure does not match the real
paper. **They divide into two opposite remedies**, and each finding's own observation says
which applies. (Q347, Q358)

| | count | when it applies |
|---|---|---|
| **Removal** | 6 | the real paper genuinely has no lettered sections |
| **Rebuild** | 17 | the real paper has sections; the file invents an extra or has none |
| **Split** | 2 | the finding spans qualifications with opposite answers |

**Six corrections are unsafe as written** — they offer "or drop the section labels" for
papers their own observations establish as *having* those sections: **E335, E367, E391, E625,
E631, E642**. All six remain open. **Do not take the drop option on any of them.**

**On the damage that remedy caused, and its current state.** It was applied, and it deleted
genuine headings from six resources. **All six are now repaired** — two at D-168 (`d71bcda`,
11 September) and four by PR #47 (`fbc277e`), verified by reading them on `main`: correct
Section A/B headings throughout, Section C present only on the WBS12 file, which genuinely has
three sections, and no invented sections anywhere.

Two things follow, and they point in opposite directions:

- **The advice above is unaffected.** It concerns how those six *corrections* should be worked
  if picked up, not the state of those six files.
- **The audit's own record of the damage was stale when published.** `d71bcda` predates Q346
  by three days, so two of the files Q346 cited as damaged had already been repaired when it
  was written — and §7 of this document cited `d71bcda` as the fix template while the opening
  called the damage live. See "Why this exists".

Four further files (`business-activity-and-classification-practice`,
`igcse-business-understanding-activity-practice`,
`edexcel-igcse-economics-business-economics-practice`,
`igcse-edexcel-economics-market-system-practice`) carry no lettered headings at all and their
specifications have **not** been read. They stay exactly where Q348 left them: unverified,
pending a real read. Do not assume either way.

Two further constraints:

- **Do not rename headings that already carry the board's own names.** Two corrections offer
  this; it is wrong, though not damaging. (Q358)
- **A restored heading must not promise what the file lacks.** Cambridge 2281 Section A is
  *one compulsory 30-mark question on previously unseen source material*; Edexcel WBS11/12
  Sections A, B and C are all *based on sources*. Restoring those headings over content with
  no source material makes the heading a false claim. (Q351)
- **OCR H431 provides a Resource Booklet for all three components**, not only the two with a
  lettered Section B. (Q343)

The template for a complete fix: `d71bcda` restored two OCR H431 papers with **a resource
booklet and an explicit statement of which component the paper represents**, alongside the
headings.

---

## 8. Corrections that offer an alternative

Where a correction reads "do X, **or** do Y", Y has usually not been checked independently.

- **"Reframe around retention without the calculation"** — Edexcel XBS11/YBS11 reads *"labour
  turnover **and retention**"* as one IA2 bullet, so the fallback still lands on second-year
  content. The only clean first-year reframing avoids both terms. (Q344)
- The six "or drop the section labels" corrections in §7 are the same pattern.

**But the pattern is not general.** The read-through of §2 found the opposite: in the
subject-content deletion corrections, the alternative is usually the *safer* of the two
options — relabel rather than delete, relocate rather than lose. Judge the alternative, do
not assume it is an afterthought.

**Check:** is the alternative independently sound, or is it the first option restated?

---

## 9. For anyone verifying against a source document

- **Completeness is judged by closing matter, never by length.** An extraction that reached
  106,651 characters was complete; one that reached 135,110 was not — it stopped mid-word on
  page 56 of 70. Confirm you have reached the document's own closing matter: for a Cambridge
  syllabus the changes-to-this-syllabus page and the Cambridge Assessment address block; for
  a Pearson specification the glossary and registered-office block; for an OCR specification
  the summary of updates and registered-company block. (U68, U70 — now closed, see Q368)
- **Absence is established by reading the complete document plus appendices**, never by
  string search. A silently truncated extraction returns nothing and looks identical to a
  genuine absence.
- **The same applies to tool output.** A result of exactly a round length — 30, 100, 250 — is
  truncated until something else says otherwise, and a **negative** claim about a list must be
  confirmed by a second route addressed differently. A list that ended early and a list that
  genuinely omits something are indistinguishable from the inside. (Q371)
- **A command-word table introduced with "includes" is not exhaustive.** Nor is a bulleted
  list sitting in a column headed *notes and examples*, nor one introduced with *including* —
  E789 turns on exactly that distinction.
- **Coordinates beat reading order, and a browser can supply them.** Where a shell is
  unavailable, pdf.js injected into a tab at the PDF's own origin returns per-run transform
  matrices — the same-origin fetch avoids the CORS failure a cross-origin one hits. (§6)
- **Three retrieval routes, two of which fail deceptively.** An ordinary fetch may retrieve a
  document and truncate it *deterministically* — the same byte count twice is proof it will
  never succeed, not a flaky link. A direct download may return a bot challenge, **which must
  not be worked around**. A genuine browser session gets the document whole. (Q369)
- **Record the commit of any snapshot before using it as evidence.** A local directory named
  `repository-live` was three days stale and produced a finding that called two
  already-repaired files damaged. It was a git checkout with a readable HEAD the whole time.
  (Q350)
- **And check which commit your own data describes.** The audit's resource ledger is built
  from the frozen baseline, not `main`; a sweep over it reports the corpus as it was, not as
  it is. That produced a confirmed error which had to be withdrawn. (Q372)
- **Reconcile against the decision log before working any triage.** Repair work proceeds in
  parallel; reconciliation is current through **D-225**. (Q353, Q364)
- **Note which sources were not obtained from the board.** Two findings rest on documents
  taken from a school-hosted mirror, one of them truncated before its assessment section.
  Both say so in their own evidence lines; keep that visible when working them.

---

## 10. What this document does not cover

**The signature screens are a reading list, not a measurement.** Every group published with a
size has had that size turn out wrong — 89 became 301 through a regex bug, 86 became 68 then
~51, nine became six then one, and 45 became 34 sound, two unsafe and three not about
enumeration at all. Screening defects have been found in six rounds, all by inspecting
flagged items and none by the screens themselves.

The cause is structural: **this corpus's domain vocabulary is the screen's vocabulary.**
"Extended" matches *extended response*. "Core" matches *the argon core*, *the ferrous core in
a solenoid*, *core content*, *a core programme requirement*. No amount of regex tuning fixes
that.

**No group remains unread.** All four have been read through: section structure (27),
terminology (15), over-deletion (24) and enumeration (45). Adding those would double-count,
because a finding can carry more than one signature. Measured rather than added: the three
signature groups cover **83 distinct findings**, and the section family adds 27 of which 10
also carry OVER_DELETE — so **100 distinct corrections have been read, and 8 were unsafe.**
Six are the section-structure family and remain open; of the other two, E442 has been closed
by D-223 and **E276 is the only one still open.**

What this document still does not establish is whether the *findings* behind those
corrections are right. A well-scoped correction resting on a truncated absence read is still
wrong. That work is the task-42 backlog, and it is not finished.

The constraints in this document are different from the counts — each was verified
individually, and each names the specification or record it rests on.
