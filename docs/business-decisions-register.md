# Marlbridge — Business decisions register (owner input required)

Last updated: 2026-08-26, as part of the QIGT programme (task #81).

This register consolidates every question the QIGT workstreams (D-034
through D-039, and one earlier finding from D-010/D-033) surfaced that
genuinely cannot be answered from the codebase, the live site, or public
awarding-body sources — each is a real business, operational, or
infrastructure decision that only the owner can make. None of these block
the remaining technical QIGT work (#82, #83); they are tracked here so
they are visible and actionable rather than silently left open.

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

## 2. Discount stacking

**Where it surfaces:** the pricing page/FAQ references a multi-subject
discount and a sibling discount separately, but never states whether a
family enrolling multiple children in multiple subjects can combine both.

**Question for the owner:** do the multi-subject and sibling discounts
stack, or is only the larger of the two applied?

## 3. Class duration and frequency

**Where it surfaces:** pricing is stated per subject/month, but no page
states how long a class session runs or how many sessions per week/month
that price assumes.

**Question for the owner:** what is the standard class length and
weekly/monthly frequency per subject, and does it vary by
qualification level (e.g., IGCSE vs A Level)?

## 4. Cancellation and refund policy

**Where it surfaces:** nowhere on the site. There is no stated policy for
what happens if a family cancels mid-month, wants a refund, or wants to
pause enrolment.

**Question for the owner:** what is the actual cancellation/refund policy
(notice period, prorated refunds, pause options), so it can be published
rather than left as an unstated gap a prospective or enrolled family
would have to ask about directly?

## 5. Payment schedule and fees

**Where it surfaces:** pricing is shown as a headline rate per
subject/month, but no page states billing cadence (monthly in advance?
termly?), accepted payment methods, or whether any one-time enrolment/
registration fee applies.

**Question for the owner:** what is the actual billing cadence, accepted
payment methods, and are there any fees beyond the published per-subject
rate?

## 6. www.marlbridge.com does not resolve (DNS/CDN configuration)

**Where it surfaces:** first identified in D-010 (2026-08-23), reconfirmed
unchanged in D-033 (QIGT indexing workstream, 2026-08-26).
`https://www.marlbridge.com/` currently times out rather than redirecting
to the canonical `https://marlbridge.com/`. This is not a code-level
defect — every page already carries a correct self-referencing canonical
tag, so Google is not at risk of indexing it as a duplicate — but it is a
real-world dead end for anyone who types "www." out of habit, and it sits
entirely outside this repository, in Cloudflare's DNS/dashboard
configuration.

**Action needed from the owner:** add a DNS record (or Cloudflare Page
Rule / redirect rule) so `www.marlbridge.com` 301-redirects to
`https://marlbridge.com/`, matching what the canonical tags already
assume is true.

---

## Not included here (already resolved or not a business decision)

- Faculty/reviewer role mapping (D-004/D-005/D-006) — resolved: owner
  approved publishing all 19 real Learners Academy teachers with
  subject-matched roles; one residual minor gap (per-teacher board-by-
  board coverage isn't recorded, since the source page doesn't break it
  down) is a data-completeness note, not an open business question.
- The `/resources/` index page's performance issue (Performance 71, TBT
  1,370ms, from rendering all 731 cards unfiltered — D-039) is a
  technical/engineering follow-up, not a business decision, and is
  tracked as a recommendation in the final QIGT report (#83) instead.
