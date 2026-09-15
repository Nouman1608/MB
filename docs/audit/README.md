# Audit findings — index

**If you are here to fix things, read this page first. It is short.**

There is no single file of problems. This folder is an **append-only series**: each dated
file is one round, findings are **never edited after publication**, and later rounds
**amend** earlier ones. Acting on an old file without checking what amended it is how the
corpus ended up worse than baseline on five files — see the amendment map below.

---

## Before you change anything

1. **Read [`correction-constraints.md`](correction-constraints.md).** Standing rules that
   apply to every finding, built from cases where applying a correction as written would
   have introduced a new error. It is the single most useful file here.
2. **Check the amendment map below** for the finding you are about to act on.
3. **Read the finding's own `Note for correction:`** if it has one. That sentence usually
   exists because the obvious reading of the finding is wrong.
4. **A correction is scoped to the code its finding examined.** Confirm the file you are
   editing belongs to that code before applying anything corpus-wide.

---

## The files

| files | what they are |
|---|---|
| `2026-09-11` … `2026-09-19-findings.md` | **The reading batches.** The bulk of the findings — every resource body read end to end against board documents. Large files. |
| `2026-09-20` … `2026-09-22-findings.md` | Absence re-verification rounds 1–3: findings re-checked against complete specifications. |
| `2026-09-23` … `2026-09-30-findings.md` | The **correction audit** — findings about the *instructions* attached to findings. Several reverse earlier advice. |
| `2026-10-01`, `2026-10-07-findings.md` | Absence re-verification rounds 4–5. |
| `2026-10-02-repair-regression.md` | A repair round that made the corpus worse. Read it before trusting any reversal. |
| `2026-10-03` … `2026-10-06-findings.md` | Repair verification and the coverage sweeps. |
| `2026-09-15-tier-resolution-response.md` | Cambridge 0620 tier question, resolved by coordinates. |
| `correction-constraints.md` | **Standing rules. Start here.** |

---

## Amendment map — later rounds that change earlier ones

**Check this before acting on anything dated 2026-09-11 to 2026-09-22.**

| if you are acting on | read this first | because |
|---|---|---|
| **E782** (2026-09-16) | **2026-10-02-repair-regression.md** | A repair round reversed it the wrong way. The eAssessment figure is **24 marks per criterion, not 32**. Five MYP files are currently wrong, including two that were right before. **E900** reverses the reversal. |
| the **27 section-structure findings** (2026-09-23) | 2026-09-29 (**Q358**), and §7 of the constraints | Six of them offer "or drop the section headings" for papers that genuinely have those headings. That option has already damaged five resources. **E335, E367, E391, E625, E631, E642 — do not take the drop option.** |
| any finding whose fix **removes** content | §2 of the constraints | Removal is often the wrong half. The finding is usually right about placement, not about subject matter. |
| any finding that hands you **a count or a closed list** | §4 of the constraints, and **Q359** (2026-09-30) | Two were found stating counts their own evidence does not support. **E276** and **E442** need checking before use. |
| any finding whose fix **states a count but not its contents** | **Q360** (2026-09-30) | Five do. Filling the gap from memory reintroduces the error being corrected. Ask for the list. |
| **E412, E404, E406** (IB Business management) | 2026-10-07 (**Q368**) | The guide is now read complete; all three are confirmed and U70 is closed. |
| the **open-error count** in any older file | 2026-10-04 (**Q365**) | It was overstated by 131. See the current figures below. |

---

## Reading a finding

Every finding carries:

- **an ID** — `E` confirmed error · `I` inconsistency · `Q` questionable claim ·
  `U` unverified item · `D` duplicate/overlapping scope. One shared numbering space; IDs are
  never reused.
- **Files** — the slugs it examined. **Not necessarily every file carrying the defect**; scope
  your fix to the defect, then check the family.
- **Locate by** — a string that exists verbatim on one line of the named file. Use it to find
  the spot rather than searching the prose.
- **What is wrong** / **Fix** / **Evidence** — evidence names the board document and, where it
  matters, whether it was read complete.

---

## Two rules that came out of things going wrong

**Reversing a finding.** You may reverse one — the audit has been wrong and been corrected
several times, correctly. But reverse it **only against the primary document the finding
cited, read at the point of reversal.** Secondary material — a webinar, a support article, a
forum, a mark-scheme commentary — may raise a question; it may never settle one. And before
recording that a finding is wrong, quote what it actually said: if the quotation has to be
paraphrased to make the contradiction work, there is no contradiction. (Q362)

**A flag is a document to open.** Screens in this audit have been mistaken for measurements
six times. Every published group size has turned out wrong on reading. Where a finding
reports a count of affected items, treat it as a reading list. (Q359, D10, Q367)

---

## Where the numbers stand

| | |
|---|---|
| findings recorded | 1,661 |
| confirmed errors open | **713** |
| declared closed by decision log D-192…D-210 | 130 |
| still open despite a closing round (deferred, partial, or reopened) | 48 |
| resources read end to end | 1,251 of 1,251 |

**"Declared closed" means a repair round recorded the finding as handled — not that the audit
verified it.** Of the closures spot-checked by reading: five sound, two better than the
correction asked for, one a regression.

Regenerated by the audit's build; the decision log remains the authoritative record of what
was *done*, and this folder the record of what was *found*.
