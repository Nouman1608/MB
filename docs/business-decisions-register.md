# Marlbridge — Business decisions register (owner input required)

Last updated: 2026-09-25 00:10 PKT, register reconciliation (D-328). Previously 2026-09-23, International Growth programme (items 10-20 added); 2026-08-26, QIGT programme (task #81).

## Current status, 25 Sep 2026 00:10 PKT — read this table, not the per-item text below

The per-item sections below keep the original questions and answers as a
history. Where a later decision answered an item, the item's own `Status:`
line now says so. **This table is the current account.**

States used: *owner decision* (the owner has answered) · *implemented* (in
source on `main`) · *deployed* (on marlbridge.com) · *verified* (checked on
production by someone other than the implementer, with the date) · *open*
(the named decision or evidence is missing).

| # | Item | Current state | Evidence | What is still missing |
|---|---|---|---|---|
| 1-5 | Schools licence, discount stacking, class format, cancellation, payment | Owner decision, implemented, deployed | D-043, D-083; `PRICING_TERMS` in `src/data/pricing.ts` | Nothing |
| 7 | FX approver | **Open** | `docs/fx-rate-policy.md` still records a proposal only | One sentence from the owner: "Nouman Ahmed approves every FX refresh and reprice", or a named alternative for routine 120-day refreshes |
| 8 | Bank/wire fees | **Open** | Nothing on the site or in any document | Owner choice: Marlbridge absorbs receiving fees, or the family ensures the full published amount arrives |
| 9 | www redirect | Done (optional item overtaken) | www → apex 301 live since v1.x WS3; rechecked 23 Sep 2026 (item 17) | Nothing |
| 10 | `ADMIN_API_KEY` secret | **Done** | Production on 25 Sep 2026 00:05 PKT: `GET /api/admin/search-demand` returns **401 "Admin key required."**. The code returns 503 only while the secret is unset (`functions/api/admin/search-demand.ts`) | Not checked: that the owner's dashboard loads data with the key (needs the key, which only the owner has) |
| 11 | USD fees | Owner decision, implemented, deployed (D-311, D-313) | `ONE_TO_ONE_PRICING` "Other countries" row; live `/pricing/` shows 13 / 15 USD one-to-one and 69 / 87 USD group (checked 25 Sep 2026 00:10 PKT) | Nothing. Group USD fees remain indicative by design |
| 12 | IB fees outside Pakistan | Owner decision, implemented, deployed (D-311, D-313) | Live `/pricing/` shows "6,000 PKR per 1-hour class" and "22 USD (MYP) or 25 USD (Diploma" (checked 25 Sep 2026 00:10 PKT) | Nothing |
| 13 | Teacher availability | Owner decision, implemented, deployed (D-311) | `PRICING_TERMS.teacherAvailability`; the sentence "24 hours a day, 7 days a week" is live on `/international-tutoring/` and `/uae/` (checked 25 Sep 2026 00:10 PKT) | Nothing |
| 14 | "Confirmed in writing" | **Open (wording kept)** | Wording matches the owner's stated email practice | Owner confirmation that no standard quote template exists, or the template itself |
| 15 | Enquiry recipient | Owner decision (no change), 23 Sep 2026 | `functions/api/enquiry.ts` | Nothing |
| 16 | Progress reports, safeguarding, qualified-teacher claims | **Open (deliberately absent from the site)** | No policy document supplied | The document or policy for any of these the owner wants claimed |
| 17 | Cloudflare housekeeping | Optional | — | Nothing required |
| 18 | `updatedDate` practice | **Open (practice, not code)** | — | Owner confirmation that `updatedDate` changes only on a real revision |
| 19 | IB licence | **Answered 2026-09-05 (D-135)** — no IB licence is claimed or required; the D-008 wording was retired | D-135 in `docs/decision-log.md`; D-127 | Nothing. The "open, unchanged" text below predates this reconciliation, not the decision |
| 20 | Further country pages | Scheduled review at day 90 | `docs/growth/international-measurement-plan-2026-09-23.md` | Search Console data at day 90 |

| 21 | Multi-subject discount across levels | **Open (added 2026-09-25, D-330)** | The calculator does not apply the 20% to a basket mixing IGCSE-rate and A-Level-rate subjects, and asks for a written quote | Owner rule: do 3+ subjects at different rates count together? |
| 22 | Sibling discount with more than one child | **Open (D-330)** | The calculator applies 10% to one learner's fees, as the published worked example does | Owner rule: is the 10% taken off each child's fees, or only one child's? |
| 23 | Boards and levels per teacher | **Open (D-330)** | `boardsTaught` / `qualificationsTaught` are empty for all 20 teachers; profiles show subjects only | The boards and qualifications each teacher currently teaches |
| 24 | Notice for moving a confirmed trial class | **Open (D-330)** | Template 3 in `docs/operations/trial-follow-up.md` leaves it blank | A notice period, or confirmation that none is stated |

**Genuinely open owner items: 7, 8, 14, 16, 18, 21-24.** Each needs one answer from
the owner; none needs a new question drafted.


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

> **Superseded (2026-09-25):** the sentence above was true of items 1-5 on
> 2026-08-26. Items 7 and 8 were added on 2026-08-30 and items 10-20 on
> 2026-09-23, and several of those are open. Use the current-status table
> at the top of this file.

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

## International Growth programme (2026-09-23) — new open items

Raised while implementing D-295 to D-307. Each item is something only the
owner can decide or do. Nothing below has been assumed on the site: where
a fact is missing, the site says less, not more.

### 10. Set the ADMIN_API_KEY secret (action, not a decision)

D-295 locked `/api/admin/search-demand` behind a bearer key. Until the
secret is set, the endpoint **fails closed** (HTTP 503) and the admin
dashboard cannot load data. Set a random value of at least 16 characters
with `npx wrangler secret put ADMIN_API_KEY`, or in the Cloudflare dashboard
under Workers > mb > Settings > Variables and Secrets. Paste the same value
into the key box on `/admin/search-demand/`; it is kept only for the
browser tab.

**Status:** done — the secret is set. Checked on production 2026-09-25 00:05 PKT: the endpoint returns 401 ("Admin key required."), not 503. *(Was "open" until the 2026-09-25 reconciliation.)*

### 11. USD fee bands

**Decided 2026-09-24 (D-311):** owner said "use the USD price". Countries without their own row see indicative US dollar figures: group US$69 / US$87 per subject per month, one-to-one US$13 / US$14 per class, IB US$22 per 1-hour class (276.97 PKR per USD, 24 Sep 2026). **Revised the same day (D-313):** the owner set one-to-one at US$13 (IGCSE) / US$15 (A Level) and IB at US$22 (MYP) / US$25 (Diploma), as set prices rather than conversions. Group fees stay indicative at US$69 / US$87.

*Original question (2026-09-23), kept as history:* The brief mentions USD bands. No USD figure is owner-confirmed, so none is
published (D-297). If families outside the priced regions should see a
USD figure, the owner needs to set it. The alternative is to label it
indicative, as was done for Malaysia.

**Status:** decided 2026-09-24 (D-311, revised by D-313); implemented. *(Was "open" until the 2026-09-25 reconciliation, which corrected this stale line.)*

### 12. IB fee outside Pakistan

**Decided 2026-09-24 (D-311):** owner set IB at Rs 6,000 per 1-hour one-to-one class (was Rs 5,000). Other currencies are indicative conversions (`IB_CONVERSIONS`), checked by `validate-fx-policy` [2f].

*Original question (2026-09-23), kept as history:* The IB rate (5,000 PKR per class) is confirmed for Pakistan only. Every
country page shows IB as "on enquiry". The owner could confirm per-country
IB fees, or approve an indicative conversion as for one-to-one.

**Status:** decided 2026-09-24 (D-311: Rs 6,000 with indicative conversions; D-313: US$22 MYP / US$25 Diploma set); implemented. *(Was "open" until the 2026-09-25 reconciliation.)*

### 13. Tutor availability by time zone

**Decided 2026-09-24 (D-311):** owner said teachers are available 24/7. The site says so (`PRICING_TERMS.teacherAvailability`); time tables stay as orientation only.

The country pages give local-to-Lahore time arithmetic only. They do not
promise slots, because teacher availability by time of day has not been
recorded. UK after-school hours fall at 8:30 to 10:30 pm in Lahore, and
Malaysia's fall at 1 to 5 pm. The owner could confirm which bands teachers
actually cover, so pages can say, for example, "UK weekday slots 5 to 7 pm
UK time". *(Original question, 2026-09-23.)*

**Status:** decided 2026-09-24 (D-311: teachers available 24/7); implemented. *(Was "open" until the 2026-09-25 reconciliation.)*

### 14. "Confirmed in writing" process

Every indicative and on-enquiry price says the exact fee is "confirmed in
writing before any payment". That describes the owner's email practice as
stated. If a standard written quote template exists, it should be linked
or described. If one does not, the owner should confirm that the wording
matches practice.

**Status:** open (wording kept, since it is a commitment the owner already
makes by email).

### 15. Enquiry recipient and response time

The owner chose "leave as is" on 23 Sep 2026: the recipient email stays
hard-coded in `functions/api/enquiry.ts`. The published response times
(email within two working days, WhatsApp within one working day, D-149)
appear on every trial step list, including all three new country pages.

**Status:** decided (no change). This is recorded so a future inbox change
updates both the code and the promise.

### 16. Progress reports, safeguarding and qualified-teacher claims

The brief lists these as trust signals. None is owner-confirmed, so none is
claimed anywhere on the site. If any exists (for example, termly progress
reports, a safeguarding policy, or teacher background checks), the owner
should supply the document or policy and it can be published.

**Status:** open (deliberately absent from the site).

### 17. Cloudflare housekeeping (optional)

- Zaraz still produces a 404 and an "Other 4xx" in Search Console
  (`/cdn-cgi/zaraz/...`). This is harmless but noisy. A Zaraz setting or a
  robots rule could stop it being crawled.
- The www → apex redirect has been live since v1.x WS3 (checked 23 Sep
  2026: HTTP 301). The 718 www URLs Search Console still lists as
  "Alternate with canonical" were crawled in August and should decay
  without any action.

**Status:** optional.

### 18. Dates on resources (`updatedDate` / sitemap `lastmod`)

Sitemap `lastmod` comes from each resource's `updatedDate` or
`publishedDate`. For 667 URLs in "Discovered, currently not indexed", an
honest `updatedDate` whenever a resource is materially revised is the one
freshness signal left. The owner should confirm that the editor updates it
on real revisions only, never in bulk.

**Status:** open (practice, not code).

### 19. IB licence (R13)

This carries over from the earlier register. The IB subject-guide pages
link to the official IB pages and quote no IB material. Whether Marlbridge
may describe itself in relation to the IB beyond that still depends on the
IB's terms, and needs the owner's confirmation.

**Status:** answered — the owner decided on 2026-09-05 (D-135) that no IB licence is claimed or required, and the D-008 licence wording was retired then. This item was carried over on 2026-09-23 without checking D-135. *(Corrected in the 2026-09-25 reconciliation; no new question for the owner.)*

### 20. Country pages for further markets

Jordan, Saudi Arabia, India, Egypt, Kenya, Nigeria, Bangladesh and
Singapore were deliberately **not** given pages (D-303 has the Search
Console figures). A page should follow only when there is (a) sustained
impressions for tuition intent, not resources, and (b) something
country-specific to say: a set fee, a confirmed time band, or a curriculum
note.

**Status:** review at day 90 (see the measurement plan).

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
