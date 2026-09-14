# Correction constraints — read before applying any audit finding

*Consolidated from the absence re-verification (rounds one to three) and the correction
audit (rounds one to five). Every constraint below was verified against an official
specification read end to end, or against the audit's own records. Nothing here is inferred
from a finding's summary.*

---

## Why this exists

Across 42 absence findings re-checked against complete specifications, **one finding was
overturned and 24 corrections needed narrowing before they were safe to apply.** The
findings in this audit are mostly right. The instructions attached to them mostly are not
safe to apply as written.

That is not theoretical. **Five resources have already been damaged** by applying a
correction at the wrong scope, and the audit recorded the damage as two new confirmed errors
(E335, E494) without withdrawing the correction that caused it.

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
| **public / merit / demerit goods**, market failure | OCR J205 GCSE Economics | Cambridge 2281 — lists all three by name as its market-failure key terms | 2281 read end to end (Q352) |
| **added value** | AQA 8132 GCSE Business | OCR H431 — requires explaining, calculating and evaluating it | H431 read end to end (Q352) |
| **quadratic inequalities** | Cambridge 4024 (inequalities restricted to linear) | required at AS and A Level | inferred, not read (Q352) |
| perfect competition, public goods, consumer surplus, **income elasticity** | OxfordAQA 9214 International GCSE | the same board's AS and A-level specification | stated in the finding itself (Q352) |

The first three are proven from complete reads. The last two are the same pattern without a
read to confirm.

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

---

## 3. Corrections that say "add X"

**The failure:** X is tier-restricted, and the file being edited is at the other tier — so
the addition puts unassessed material in front of a candidate.

- **The IB efficiency-ratio sub-topic is higher level only.** Adding stock turnover, debtor
  days and creditor days to a standard-level resource pushes HL content into SL. The
  finding's correction does not say so. (Q345)
- **The one verified safe case:** an outcome on the aluminium oxide layer is *Supplement in
  0620 and required in 5070*. Because it is required of every 5070 candidate, adding the
  paragraph is right for that code whatever the column check says about 0620. Only the tier
  **label** is uncertain. (Q357)

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
- One electrolysis attribution is likely inverted: the lower tier names molten lead bromide,
  concentrated aqueous sodium chloride and dilute sulfuric acid; **aqueous copper sulfate is
  higher tier.** (Q337)
- The same sub-topic requires inert electrodes of platinum or carbon at both tiers, with the
  copper-electrode case added at the higher tier. A correction must not flatten the two.

**Check:** resolve tier by the **horizontal position of the text block against the column
rule**, and record the coordinate — not the reading order. This requires a layout-aware
extraction, not linear text.

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
E631, E642**. That remedy has already been applied and damaged five resources. Do not take
the drop option on any of them.

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

**Check:** is the alternative independently sound, or is it the first option restated?

---

## 9. For anyone verifying against a source document

- **Completeness is judged by closing matter, never by length.** An extraction that reached
  106,651 characters was complete; one that reached 135,110 was not — it stopped mid-word on
  page 56 of 70. Confirm you have reached the document's own closing matter: for a Cambridge
  syllabus the changes-to-this-syllabus page and the Cambridge Assessment address block; for
  a Pearson specification the glossary and registered-office block; for an OCR specification
  the summary of updates and registered-company block. (U68, U70)
- **Absence is established by reading the complete document plus appendices**, never by
  string search. A silently truncated extraction returns nothing and looks identical to a
  genuine absence.
- **A command-word table introduced with "includes" is not exhaustive.**
- **Record the commit of any snapshot before using it as evidence.** A local directory named
  `repository-live` was three days stale and produced a finding that called two
  already-repaired files damaged. It was a git checkout with a readable HEAD the whole time.
  (Q350)
- **Reconcile against the decision log before working any triage.** Repair work proceeds in
  parallel; D-192 to D-199 closed roughly 124 findings in 36 hours. (Q353)

---

## 10. What this document does not cover

**The signature screens are a reading list, not a measurement.** Five groups have been
published with sizes that were wrong every time — 89 became 301 through a regex bug, 86
became 68 then ~51, nine became six then one. Four screening defects were found, all by
inspecting flagged items and none by the screens themselves.

The cause is structural: **this corpus's domain vocabulary is the screen's vocabulary.**
"Extended" matches *extended response*. "Core" matches *the argon core*, *the ferrous core in
a solenoid*, *core content*, *a core programme requirement*. No amount of regex tuning fixes
that.

So: **the 234 flagged corrections in the reconciled triage are unverified.** Treat any count
from that file as a place to start reading, never as a quantity.

The constraints in this document are different — each was verified individually, and each
names the specification or record it rests on.
