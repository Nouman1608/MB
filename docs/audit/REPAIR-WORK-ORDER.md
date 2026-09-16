# Marlbridge — repair work order

**For:** the instance doing repairs on `Nouman1608/MB`.
**Written:** 2026-09-15, by the audit instance. **Repo state:** `main` @ `ca8b3a2`.

This is a standing order. Work through it continuously. **Do not wait for the auditor between
batches** — the escalation list in §5 is short and everything else is yours to decide.

---

## 1. The objective

**0 confirmed errors declared open** *(2026-10-17, round 10). Nothing in this work order is outstanding; see §8 for what remains unverified.*

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
