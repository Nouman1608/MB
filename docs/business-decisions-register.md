# Marlbridge — Business decisions register (owner input required)

Last updated: 2026-08-26, as part of the QIGT programme (task #81).

This register consolidates every question the QIGT workstreams (D-034
through D-039, and one earlier finding from D-010/D-033) surfaced that
genuinely cannot be answered from the codebase, the live site, or public
awarding-body sources — each is a real business, operational, or
infrastructure decision that only the owner can make.

**Update (task #82, final validation pass, 2026-08-26):** item 6 below
(www.marlbridge.com) was re-checked live and found to have resolved itself
since it was first flagged — it no longer needed owner action.

**Update (2026-08-26, D-043): all five open items answered directly by the
owner and implemented on the site.** See each item below for the answer
given and exactly where it now appears live. This register is retained as
a historical record of the questions and answers, not because anything
remains open.

Per the programme's own ground rules, no answer has been invented or
guessed for any of these — the current site simply does not state a
position on them, and none should be assumed.

## 1. Schools' content-licence: exact scope of "no licence needed"

**Where it surfaces:** `/schools/` tells schools "No licence, no account,
no attribution required" to use Marlbridge's resources with their
classes. `/legal/terms/` requires permission for republishing, resale, or
"other partnerships." D-034 reconciled the direct contradiction between
these two pages (Terms now explicitly carves out class use), but the
deeper question of exactly how far the schools' permission extends was
not answered, because nothing on the site currently states a position:

- May a school bulk-print resources for a whole class/year group, or
  only use them one-to-one (e.g., projected in a lesson)?
- May a school upload resources to its own LMS (Google Classroom,
  Moodle, etc.) for students to access directly?
- May a teacher modify/adapt a resource (e.g., trim it, relabel it) before
  giving it to students, or must it be used as-is?

**Why it matters:** schools are already acting on the current "no licence
needed" wording; an unclear boundary is a real legal-exposure and
brand-control question, not just a copy nicety.

**Answered (2026-08-26):** bulk printing for a whole year group and
uploading to a school's LMS are both explicitly permitted; modifying,
relabelling or rebranding the material is not — it should be used as
published. Implemented in `/schools/` (new clarifying paragraph) and
`/legal/terms/` (the class-use carve-out now names both permitted uses and
the modification boundary explicitly).

## 2. Discount stacking

**Where it surfaces:** the pricing page/FAQ references a multi-subject
discount and a sibling discount separately, but never states whether a
family enrolling multiple children in multiple subjects can combine both.

**Question for the owner:** do the multi-subject and sibling discounts
stack, or is only the larger of the two applied?

**Answered (2026-08-26):** yes, they stack — a family qualifying for both
the 20% multi-subject discount (3+ subjects) and the 10% sibling discount
(up to 2 siblings) gets both together. Both discounts apply to group
classes only, never one-to-one. Implemented in `src/data/pricing.ts`
(`PRICING_TERMS.discountsStack`) and surfaced in the pricing page's FAQ and
the "Discounts and trial" section.

**Follow-up, resolved (2026-08-30, Post-v2.0 Quality Closure WS9):** the fact
that the two discounts stack was recorded above, but the exact arithmetic
for a family qualifying for both was not — additive (20% + 10% = 30% off)
and successive/compounding ((1-0.20)×(1-0.10) = 28% off) give different
answers, and nothing on the site or in this register said which applies.
Per the programme brief's own instruction not to choose the arithmetic
without approved evidence, this was put to the owner directly as a
multiple-choice question with a worked example (3 subjects at the Pakistan
IGCSE rate, Rs 19,000/subject/month). **Owner answered: additive — the two
percentages are added together (30% off), not applied successively
(28%).** Implemented in `src/data/pricing.ts`
(`PRICING_TERMS.discountCombinationMethod`, plus the new
`combinedDiscountPercent()`/`discountWorkedExample()` helpers so the
published example is always computed from the live discount percentages
and fee data, never restated as a separate literal) and published as a
worked example on the pricing page's FAQ and "Discounts and trial" section,
in English and all three translated locales (ar/ur/bn). See
`docs/decision-log.md` D-083.

## 3. Class duration and frequency

**Where it surfaces:** pricing is stated per subject/month, but no page
states how long a class session runs or how many sessions per week/month
that price assumes.

**Question for the owner:** what is the standard class length and
weekly/monthly frequency per subject, and does it vary by
qualification level (e.g., IGCSE vs A Level)?

**Answered (2026-08-26):** group classes run 45-50 minutes, 3 times a week
per subject. One-to-one classes run 1 hour, with the number of classes
left to the student/family rather than a fixed frequency. Does not vary by
qualification level. Implemented in `src/data/pricing.ts`
(`PRICING_TERMS.classFormat`) and a new pricing-page FAQ entry.

## 4. Cancellation and refund policy

**Where it surfaces:** nowhere on the site. There is no stated policy for
what happens if a family cancels mid-month, wants a refund, or wants to
pause enrolment.

**Question for the owner:** what is the actual cancellation/refund policy
(notice period, prorated refunds, pause options), so it can be published
rather than left as an unstated gap a prospective or enrolled family
would have to ask about directly?

**Answered (2026-08-26):** fees are billed monthly, starting once the free
trial class has taken place. A family can cancel or pause at any time; the
month already paid for is not refunded, but there is no further billing
once they cancel. Implemented in `src/data/pricing.ts`
(`PRICING_TERMS.billing`, `PRICING_TERMS.cancellationPolicy`) and two new
pricing-page FAQ entries.

## 5. Payment schedule and fees

**Where it surfaces:** pricing is shown as a headline rate per
subject/month, but no page states billing cadence (monthly in advance?
termly?), accepted payment methods, or whether any one-time enrolment/
registration fee applies.

**Question for the owner:** what is the actual billing cadence, accepted
payment methods, and are there any fees beyond the published per-subject
rate?

**Answered (2026-08-26):** billing is monthly (see item 4). Accepted
payment methods are bank transfer and international wire transfer. There
is no separate registration or enrolment fee — the published per-subject
rate is the only cost. Implemented in `src/data/pricing.ts`
(`PRICING_TERMS.paymentMethods`, `PRICING_TERMS.enrolmentFee`) and a new
pricing-page FAQ entry.

## 7. FX policy — responsible approver for refreshes/reprices

**Where it surfaces:** `docs/fx-rate-policy.md` (consolidated 2026-08-30,
Post-v2.0 Quality Closure WS9) documents the FX staleness/drift checks that
force a human decision when the exchange-rate snapshot ages out or a
published converted price drifts too far from a fresh conversion, but no
document names who that human is.

**Question for the owner:** is the site owner (Nouman Ahmed) the intended
approver for every FX-policy refresh and any resulting reprice, as every
past base-rate/price decision in this log has in practice been owner-made?
Or should a different named role handle routine 120-day refreshes, with the
owner only needed when a reprice is actually being considered?

**Status:** open. Not yet answered; `docs/fx-rate-policy.md` currently
states the owner-as-default reading as a proposal, not a confirmed policy.

## 8. FX policy — bank/wire-transfer fee treatment

**Where it surfaces:** `src/data/pricing.ts` (`PRICING_TERMS.paymentMethods`)
lists bank transfer and international wire transfer as the accepted payment
methods, but nothing on the site or in any document states who bears a
transfer/receiving fee a bank may charge on top of the published price --
whether the family pays the published rate net of any bank fee (Marlbridge
absorbs it), or the family is responsible for ensuring the full published
amount arrives (any bank fee is on top).

**Question for the owner:** does Marlbridge guarantee the published fee is
the net amount received regardless of bank fees, or does the family need to
cover any transfer fee separately?

**Status:** open. Genuinely unrecorded -- no answer has been invented or
assumed for this; the pricing page and FAQ make no claim either way.

## 9. www.marlbridge.com — minor recommendation only (re-verified fixed since D-033)

**Where it surfaces:** D-010 (2026-08-23) and D-033 (QIGT indexing
workstream, earlier on 2026-08-26) both found `https://www.marlbridge.com/`
timing out rather than resolving. Re-checked live during the final QIGT
validation pass (task #82, later on 2026-08-26): `www.marlbridge.com` now
resolves correctly, returns HTTP 200, serves byte-identical content to the
bare domain, and carries a correct self-referencing canonical tag pointing
at `https://marlbridge.com/` — the same safe dual-hostname pattern already
verified for the apex/`https`/`http` variants in D-010. Whatever caused the
earlier timeout (DNS propagation, or a Cloudflare-side change) has since
resolved itself; this is no longer a broken or dead-end state, and no owner
action is required to fix anything.

**Optional, non-blocking recommendation:** for tidiness (not correctness),
the owner could add a Cloudflare redirect rule so `www.marlbridge.com`
301s to `https://marlbridge.com/` instead of serving the same page twice —
purely cosmetic, since the canonical tag already tells Google which URL is
authoritative.

---

## Not included here (already resolved or not a business decision)

- Faculty/reviewer role mapping (D-004/D-005/D-006) — resolved: owner
  approved publishing all 19 real Learners Academy teachers with
  subject-matched roles; one residual minor gap (per-teacher board-by-
  board coverage isn't recorded, since the source page doesn't break it
  down) is a data-completeness note, not an open business question.
- The `/resources/` index page's performance issue (Performance 71, TBT
  1,370ms, from rendering all 731 cards unfiltered — D-039) was a
  technical/engineering follow-up, not a business decision. It has since
  been fixed (D-044, 2026-08-26): Performance is now 97 (TBT 50ms),
  Accessibility remains 100, and a full filter-functionality regression
  test confirms the existing subject/level filters still work correctly.
