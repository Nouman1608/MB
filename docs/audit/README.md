# Audit findings — index

**If you are here to fix things, read this page first. It is short.**

There is no single file of problems. This folder is an **append-only series**: each dated
file is one round, findings are **never edited after publication**, and later rounds
**amend** earlier ones. Acting on an old file without checking what amended it is how the
corpus briefly ended up worse than baseline on five files — see the amendment map below.

---

## Before you change anything

1. **Read [`correction-constraints.md`](correction-constraints.md).** Standing rules that
   apply to every finding, built from cases where applying a correction as written would
   have introduced a new error. It is the single most useful file here.
2. **Check the amendment map below** for the finding you are about to act on.
3. **Check the current state of the file itself.** Every finding here records what was true
   at a moment in time, and the repair work moves faster than the findings do. A finding that
   says a file "is wrong" may describe a state that has since been fixed. *The first version
   of this README got this wrong — see the E782 row.*
4. **Read the finding's own `Note for correction:`** if it has one. That sentence usually
   exists because the obvious reading of the finding is wrong.
5. **A correction is scoped to the code its finding examined.** Confirm the file you are
   editing belongs to that code before applying anything corpus-wide.

---

## The files

| files | what they are |
|---|---|
| `2026-09-11` … `2026-09-19-findings.md` | **The reading batches.** The bulk of the findings — every resource body read end to end against board documents. Large files. |
| `2026-09-20` … `2026-09-22-findings.md` | Absence re-verification rounds 1–3: findings re-checked against complete specifications. |
| `2026-09-23` … `2026-09-30-findings.md` | The **correction audit** — findings about the *instructions* attached to findings. Several reverse earlier advice. |
| `2026-10-01`, `2026-10-07-findings.md` | Absence re-verification rounds 4–5. |
| `2026-10-02-repair-regression.md` | A repair round that made the corpus worse. **Since fixed — see the E782 row below.** |
| `2026-10-03` … `2026-10-06-findings.md` | Repair verification and the coverage sweeps. |
| `2026-10-12-findings.md` | **The open count re-based (Q374, Q375)** — and the list of what is actually open. |
| `2026-10-13-findings.md` | Absence re-verification round 6: eight documents read complete, **E746 withdrawn**, three corrections bounded (Q376–Q378). |
| `2026-10-14-findings.md` | Absence re-verification round 7: the non-Cambridge documents finished; **E902** — a correction applied past its board. |
| `2026-10-15-findings.md` | Absence re-verification round 8: the Cambridge documents finished; U71 established; **E640 bounded (Q381)**; **E175 reopened (Q382)**. |
| `2026-10-16-findings.md` | Round 9: the repair side's "all fixed" report checked. 46 closures read, all fixed; **E48 withdrawn**; **7 still open**. |
| `2026-10-17-findings.md` | Round 10: D-232 and D-233 checked and fixed; 36 more closures read; **0 confirmed errors declared open** — correctness still not established. |
| `2026-10-18-findings.md` | Round 11: the last 54 D-226…D-233 closures read — **all 147 read and fixed**. The 692 earlier closures remain unread. |
| `2026-10-19-findings.md` | Round 12: the 692 D-138…D-225 closures read — **101 not fixed and reopened**, 20 fixed but with new errors (E903…E911), 26 fixed, 5 unsettled; 25 of 540 triaged-fixed sampled. |
| `2026-10-20-findings.md` | Round 13: D-234 (0452 to 2027–2029) read against both syllabuses — all claims correct; 110 still open. |
| `2026-10-21-findings.md` | Round 14: D-235 and D-236 read — **all 110 fixed; 0 confirmed errors declared open**. E451 round-12 residue corrected. I356, I357. |
| `2026-10-22-findings.md` | Round 15: D-235's unactioned observations checked — **E912, E913** open, I358–I360, Q393. |
| `2026-10-23-findings.md` | Round 16: D-237 read — I356, I357 fixed. E912, E913 still open. |
| `2026-10-24-findings.md` | Round 17: D-238 read — all six round-15 items fixed; **0 confirmed errors declared open**. |
| `2026-10-25-findings.md` | Round 18: repair-side observations on D-238 checked — I361, I362 (low). 0 confirmed errors open. |
| `2026-10-26-findings.md` | Round 19: the 370 unread post-baseline resources and D-239's twelve read end to end; D-240 verified. **E914–E919 open** (80 errors in six groups), I363–I368, Q397–Q400, U72 (365 board claims unchecked). |
| `2026-10-27-findings.md` | Round 20: 141 Cambridge board claims checked against 44 syllabus documents — **E920, E921 open** (12 statements), I369, Q401; 6 audit items withdrawn; U72 down to 245. D-241 not yet read. |
| `2026-10-28-findings.md` | Round 21: D-241 read — **190 of 195 fixed**, 1 partly, 4 disputes upheld; E914–E919 and I363–I368 closed. I370 (2 residuals). **2 confirmed-error groups open** (E920, E921). |
| `2026-10-29-findings.md` | Round 22: D-242 and D-243 read — **21 of 21 fixed** (I370.2 was an audit error); E920, E921, I369, I370 closed. 72 AQA board claims checked: 57 supported. E922 (7), I371 (6), U73 (4). **1 confirmed-error group open** (E922). |
| `2026-09-15-tier-resolution-response.md` | Cambridge 0620 tier question, resolved by coordinates. |
| `correction-constraints.md` | **Standing rules. Start here.** |

---

## Amendment map — later rounds that change earlier ones

**Check this before acting on anything dated 2026-09-11 to 2026-09-22.**

| if you are acting on | read this first | because |
|---|---|---|
| **E782** (2026-09-16) | 2026-10-02-repair-regression.md, then **this row** | **Resolved — no action needed.** The sequence: E782 was right (32 = classroom total across four criteria; 24 = eAssessment marks per criterion). D-202 reversed it on a webinar transcript and made five files worse. E900/Q362 caught that. **D-211 (`01f08fc`) then fixed all of it properly** — eAssessment passages read 24, classroom passages read 8/32, the derived total is corrected 96 → 72, and every file states the two scales explicitly. Verified file by file on `main`. The regression document describes a state that no longer exists. |
| the **27 section-structure findings** (2026-09-23) | 2026-09-29 (**Q358**), and §7 of the constraints | Six of them offer "or drop the section headings" for papers that genuinely have those headings. That option has already damaged five resources. **E335, E367, E391, E625, E631, E642 — do not take the drop option.** |
| any finding whose fix **removes** content | §2 of the constraints | Removal is often the wrong half. The finding is usually right about placement, not about subject matter. |
| any finding that hands you **a count or a closed list** | §4 of the constraints, **Q359** (2026-09-30), and **Q373** (2026-10-11) | Two were found stating counts their own evidence does not support. **E442** was closed by D-223. **E276**'s correction was read against the specification and found safe — and had in fact already been applied by **D-141** (`c9bc195`, 6 September). *An earlier version of this row cited "D-226"; no such decision-log entry exists (Q374).* The enumeration group now holds none. |
| any finding whose fix **states a count but not its contents** | **Q360** (2026-09-30) | Five do. Filling the gap from memory reintroduces the error being corrected. Ask for the list. |
| **E412, E404, E406** (IB Business management) | 2026-10-07 (**Q368**) | The guide is now read complete; all three are confirmed and U70 is closed. |
| the **open-error count** in any older file | 2026-10-04 (**Q365**), then 2026-10-12 (**Q374**) | Overstated by 131, and then by a further **508**: the reconciliation never read repair rounds D-138…D-191. See the current figures below. |
| **E746** (2026-09-15) | 2026-10-13 (**Q378**) | **Withdrawn.** The 9210 specification uses the phrase "combining principles" verbatim. Nothing to revert. |
| **E602, E739, E763** | 2026-10-13 (**Q377**) | Upheld, but each correction needs the bound stated there — E602 must not strip storm-hazard flood responses (3.1.1.5); E763's one-area rule depends on the theme. |
| **E680** (2026-09-14) | 2026-10-14 (**E902**) | Its note put the three-term list on the wrong board. YLA1 and AQA 7162 both name exactly three. The applied fix (adding s13) is now **E902**. |
| **E874, E347, E482, E331** | 2026-10-14 (**Q379**) | Upheld with bounds — first-year macro items, competitive-market characteristics, and two open lists. Applied fixes checked: no damage. |
| **E640** | 2026-10-15 (**Q381**) | Approaches claim holds. The four debate sections are 9990's **own A Level** issues and debates — do **not** relabel the file to another board or delete them. |
| **E175** | 2026-10-15 (**Q382**) | **Reopened.** The applied fix gave a gas at constant volume; 9702 names the volume of a gas at constant pressure. The syllabus list is *including*, so extra examples are fine. |
| **E377** | 2026-10-15 (**Q380**) | Overstated: *evaluate* and *distinguish* do occur in 0450 (aims, AOs), and its command-word table is not a closed list. Applied fix harmless. |
| **E798** | 2026-10-15 (**Q380**) | Its note misplaces the list: in 5014, surface and subsurface mining are the requirement; only opencast, shaft etc. are exemplification. Correction stands. |
| **E759, E820** | 2026-10-15 (**Q380**) | One aside each is unsupported (E759: "introduced at the last syllabus change"; E820: "claim is not a listed element"). The defects stand. |
| **U71** | 2026-10-15 (**Q380**) | Established — 9700 read complete; fractionation, homogenisation, centrifugation, artefact, endosymbiosis all absent. |
| **D-226…D-231** | 2026-10-16 (**Q383**) | 46 of 138 declared closures read on `main`, all fixed. Residual: E64's description. |
| **E48** | 2026-10-16 (**Q384**) | **Withdrawn.** 9237 v1.1 places Ijma and Qiyas at 3.2.2.5; the file is right. |
| **E615, E616, E617, E628** | 2026-10-16 (**Q385**) | Never worked — texts are in `post_baseline_findings`, not `findings[]`. Still live. |
| **E605–E607** | 2026-10-16 (**Q385**) | Upheld against the IB guide, read in a browser session at the ibo.org origin. Two more sibling files are affected. |
| **E605–E607, E615–E617, E628** | 2026-10-17 (**Q386**) | Closed by D-232/D-233 and verified on `main`. E628's two-source rewrite is the right departure from its fix. |
| **D-226/D-230 (36 more)** | 2026-10-17 (**Q387**) | Read on `main`, all fixed. Closures read in D-226…D-233: 89 of 145. |
| **E60…E657 (last 54)** | 2026-10-18 (**Q388**) | Read on `main` against the evidence-file texts, all fixed. D-226…D-233 fully verified. |
| **D-138…D-225 (692)** | 2026-10-19 (**Q389**, E903…E911) | All read by triage; the 152 flagged read by this audit: 101 reopened, 20 new errors recorded, 26 fixed, 5 unsettled. 25 of the 540 triaged fixed sampled, all fixed. |
| **D-234 (0452 move)** | 2026-10-20 (**Q390**) | Owner item, closes no finding. Every syllabus claim and the imprest correction verified against 718141 and 697149 read in full. |
| **D-235, D-236 (110)** | 2026-10-21 (**Q391**) | Every closure read on `main`, all fixed. E551 closed in D-235's commit without a row. |
| **E60–E69, E109** | 2026-10-12 (**Q375**) | D-138's heading declares them remediated; none of its batch lists names them, and E61–E69 still carry their markers on `main`. **Treat as open.** |

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

## Three rules that came out of things going wrong

**Reversing a finding.** You may reverse one — the audit has been wrong and been corrected
several times, correctly. But reverse it **only against the primary document the finding
cited, read at the point of reversal.** Secondary material — a webinar, a support article, a
forum, a mark-scheme commentary — may raise a question; it may never settle one. And before
recording that a finding is wrong, quote what it actually said: if the quotation has to be
paraphrased to make the contradiction work, there is no contradiction. (Q362 — and D-211's
own commit message adopts this rule.)

**A flag is a document to open.** Screens in this audit have been mistaken for measurements
six times. Every published group size has turned out wrong on reading. Where a finding
reports a count of affected items, treat it as a reading list. (Q359, D10, Q367)

**A finding is a timestamp, not a status.** It records what was true when it was written.
Before acting on one, check the file as it stands now. This cuts both ways: the audit has
published a stale alarm about files that were already fixed, and a repair round has closed a
finding against a snapshot that was three days old.

---

## Where the numbers stand

| | |
|---|---|
| findings recorded | 1,734 |
| confirmed errors open | **1 group** (E922, round 22) *(reconciliation current through **D-243**; every closure from D-226 to D-243 read, D-241's 195 items and D-242/D-243's 21 items checked. 515 closures in D-138…D-225 were sampled, not read. **Not a statement that the resources are correct.**)* |
| declared closed by decision log D-138…D-243 | 856 |
| still open despite a closing round (deferred, partial, disputed, heading-only, or reopened) | 0 |
| withdrawn by this audit | 1 (E746) |
| resources read end to end | 1,251 of 1,251 baseline; all 1,645 on `main` at `251571e` read at least once (round 19). Board claims in the 397 post-baseline resources unchecked (U72). |

**"Declared closed" means a repair round recorded the finding as handled — not that the audit
verified it.** Of the closures spot-checked by reading: five sound, two better than the
correction asked for, one a regression that has since been corrected.

The decision log remains the authoritative record of what was *done*, and this folder the
record of what was *found*.
