# MARLBRIDGE v1.x — Decision Log

Version-controlled record of every material clarification asked of and answered
by the owner during the MARLBRIDGE v1.x FINAL programme (Website Completion,
All-Board Academic Foundation, Operational Readiness and Final Discovery
Audit). No secrets or unnecessary personal data are recorded here — only
routing/business decisions and the reasoning behind them.

Status values: `answered` (owner has responded, implemented), `open`
(asked, awaiting response), `deferred` (owner explicitly deferred).

---

## D-001 — Resend configuration status and From/To addresses

- **Date:** 2026-08-18
- **Workstream:** WS1 (Resend and enquiry completion)
- **Question:** Is `RESEND_API_KEY` already added as a Cloudflare Pages
  secret, and what should the From/To addresses be for enquiry delivery?
- **Options presented:** (a) key already set, use hello@marlbridge.com for
  both From and To; (b) key already set, different addresses; (c) key not
  set up yet; (d) not sure / need to check.
- **Recommendation:** (a) — reuse the address already shown publicly
  everywhere as `FALLBACK_EMAIL`.
- **Owner response:** Key is already set. Send From hello@marlbridge.com,
  but deliver To noumanahmed1989@gmail.com (a private inbox, not the
  public address) — given as a follow-up in chat after the initial
  multiple-choice answer.
- **Final decision:** `ENQUIRY_SENDER = 'Marlbridge <hello@marlbridge.com>'`,
  `ENQUIRY_RECIPIENT = 'noumanahmed1989@gmail.com'` (private, never shown
  publicly), Reply-To set to the visitor's own validated email on every
  send.
- **Implementation consequence:** `functions/api/enquiry.ts` rewritten to
  call the Resend HTTP API directly (`POST https://api.resend.com/emails`)
  instead of the previously-unconfigured Cloudflare Email Routing
  `send_email` binding. 7 new integration tests
  (`functions/api/__tests__/enquiry-resend-integration.test.mjs`) prove the
  from/to/reply-to values, the honest 503 when the key is absent, the
  honest 502 when Resend itself errors, and that Turnstile/honeypot/
  same-origin checks still run before any email is ever attempted.
- **Follow-up required:** None for this decision — implemented and tested.
  Live delivery can only be confirmed once the owner receives a real test
  enquiry after production deployment (see D-003).
- **Status:** answered, implemented.

---

## D-002 — Turnstile configuration status

- **Date:** 2026-08-18
- **Workstream:** WS1 (Resend and enquiry completion)
- **Question:** Is a Cloudflare Turnstile site key + secret already
  provisioned for marlbridge.com?
- **Options presented:** (a) yes, both configured; (b) no, skip Turnstile
  this release; (c) no, please set it up first.
- **Recommendation:** (a), if true — Turnstile is already wired
  server-side to run conditionally on `TURNSTILE_SECRET_KEY` presence.
- **Owner response:** Yes, both are configured.
- **Final decision:** Server-side verification code
  (`verifyTurnstile()` in `functions/api/enquiry.ts`) is retained and
  proven correct via 2 new tests (fails closed on a bad token, succeeds
  on a good one), gated on `env.TURNSTILE_SECRET_KEY`.
- **Implementation consequence:** Owner supplied the Turnstile SITE key
  in chat on 2026-08-18: `0x4AAAAAAEUSRy7-wI4BXSlD` (public value, not a
  secret). `src/data/site.ts` now holds it as `site.turnstile.siteKey`.
  `EnquiryForm.astro` renders the `cf-turnstile` widget div plus the
  Cloudflare `turnstile/v0/api.js` script whenever a site key is
  configured, and the widget writes its token into the
  `cf-turnstile-response` field that `functions/api/enquiry.ts` already
  reads and verifies server-side against `TURNSTILE_SECRET_KEY`. Verified
  present in the built HTML at `/contact/` (and every other page using
  `EnquiryForm.astro`) after `npm run build`.
- **Follow-up required:** None outstanding. If the owner ever rotates the
  Turnstile site key, update `site.turnstile.siteKey` in
  `src/data/site.ts` to match (the matching secret key rotation happens
  separately, in the Cloudflare Pages dashboard, and is out of scope for
  this repo).
- **Status:** implemented.

---

## D-003 — GA4 / Search Console / Bing instrumentation

- **Date:** 2026-08-18
- **Workstream:** WS2 (Analytics and webmaster instrumentation)
- **Question:** None of GA4, Search Console or Bing verification code
  exists anywhere in the repository (confirmed by direct grep across
  `src/`) despite the owner confirming all three are "connected." What
  values are available to wire them in?
- **Options presented:** GA4 Measurement ID; Search Console verification
  method/snippet; Bing verification method/snippet; provide separately
  later.
- **Recommendation:** Provide the GA4 Measurement ID as the highest-value
  first step; Search Console/Bing verification may already be satisfied
  by domain-level DNS verification requiring no code change.
- **Owner response:** Selected "GA4 Measurement ID" as the item to
  provide in the first round; supplied the actual value in chat on
  2026-08-18: `G-TB89R669JL`.
- **Final decision:** GA4 is wired in via a new consent-gated component,
  `src/components/analytics/ConsentAnalytics.astro`, added to
  `BaseLayout.astro` (so it renders on every page). It uses Google
  Consent Mode v2 with `analytics_storage` defaulted to `'denied'` and a
  simple Accept/Reject banner (choice persisted in `localStorage`,
  `mb_consent` key) — no analytics cookie is set and no analytics request
  is sent until the visitor clicks Accept. This consent-gate design was
  Claude's own reasonable default, not something the owner was asked to
  approve line-by-line, because `src/pages/legal/cookies.astro` and
  `src/pages/legal/privacy.astro` both previously stated (correctly, at
  the time) that the site ran no analytics — shipping GA4 without a
  consent gate would have made those pages false. Both legal pages were
  updated in the same change to accurately describe GA4, the consent
  banner, and Cloudflare Turnstile (see D-002), with their "Last updated"
  dates bumped to 18 August 2026.
- **Implementation consequence:** `site.analytics.ga4MeasurementId` in
  `src/data/site.ts` holds the public Measurement ID. Verified present in
  built HTML (`gtag/js?id=G-TB89R669JL`) after `npm run build`. Owner
  confirmed on 2026-08-18 that Search Console is verified via a DNS TXT
  record and Bing Webmaster Tools via a DNS CNAME record pointing to
  `verify.bing.com` — both verified entirely at the Cloudflare DNS level,
  outside this repository. No meta tag or verification file is needed in
  the codebase, and none was added.
- **Follow-up required:** None. If either service is ever re-verified
  using a different method (meta tag or file upload instead of DNS),
  that would need a small repo change at that time.
- **Status:** implemented (GA4, Search Console, Bing — all closed).

---

## D-004 — Real photography and faculty/reviewer data source

- **Date:** 2026-08-18
- **Workstream:** WS3 (Public imagery), WS4 (Faculty, authors and
  reviewers)
- **Question:** What real photography and faculty/reviewer data is
  available right now, given the brief's explicit prohibition on
  fabricating any faculty name, qualification, photo, or review?
- **Options presented:** No real faculty photos/bios exist yet (use
  licensed stock for generic scenes, leave faculty section honestly
  unpublished); owner can provide real faculty details now; a reviewer is
  available; no reviewer available yet.
- **Recommendation:** Default to licensed stock + honestly unpublished
  faculty section if no real data exists.
- **Owner response:** "use the ones from learnersacademy.com.pk" —
  directing reuse of real photography and real staff information from
  Learners Academy, which Marlbridge's own site already identifies as
  "the founding academy behind Marlbridge" / "Learners Academy — a
  Marlbridge education institution" (same organisation, not a
  third-party site).
- **Final decision:** Confirmed learnersacademy.com.pk is a real,
  operating academy (9+ years teaching, Cambridge/Edexcel/AQA, Lahore-based)
  with a public Teachers page and named leadership (Hina Mughal — Managing
  Director; Nouman Ahmed — Principal; Javed Iqbal Sabri — CFO; Junaid
  Khalid — CTO; Asif Iqbal — Marketing Head) and real subject-teacher
  photos. Before publishing any of this on marlbridge.com as named
  faculty/reviewer profiles, still need explicit confirmation of: (1)
  which of these people should be represented on Marlbridge specifically
  as teaching/reviewing faculty (leadership titles at Learners Academy do
  not automatically mean the same role applies to Marlbridge's academic
  content), (2) their exact subjects/boards/qualifications taught (not
  assumed from a leadership title), and (3) confirmation that reusing
  their photos/bios on the sibling Marlbridge site is authorised (very
  likely yes, since it's stated as the same organisation, but not yet
  explicitly confirmed).
- **Implementation consequence:** None yet — no faculty profile published
  under a real name until (1)-(3) above are confirmed, per the brief's
  explicit rule against inventing role/subject/credential detail even
  when a real photo exists.
- **Follow-up required:** Ask the owner a follow-up (see next message) to
  confirm exact subject-teacher assignments before creating named faculty
  profiles.
- **Status:** open (real source identified; role/subject mapping and
  reuse authorisation to confirm before publishing named profiles).

## D-005: Faculty publishing scope (which of the 19 Learners Academy teachers to publish, and role mapping)

- **Date:** 2026-08-18
- **Workstream:** v1.x WS4 (Real faculty profiles + reviewer wiring)
- **Question:** Of the real Learners Academy teachers identified under
  D-004, which should be published as named Marlbridge faculty, and how
  should each be mapped to a subject given that some subjects
  (physics, biology, mathematics, accounting) have multiple matching
  teachers on the source page?
- **Options presented:** Publish all 19 with matching subjects; publish
  only a curated subset; publish none yet pending further confirmation.
- **Owner response:** "Yes, publish all 19 with matching subjects
  (Recommended)"
- **Final decision:** All 19 real teachers from
  https://learnersacademy.com.pk/teachers/ are published as Marlbridge
  authors (`src/content/authors/*.md`), each with `subjectsTaught`
  matching their listed subject on the source page. Where a subject has
  multiple teachers (physics, biology, mathematics, accounting), all
  matching teachers are published as authors but only one per subject is
  additionally marked `isReviewer: true` (see D-006) — this was Claude's
  own reasonable inference of "most experienced by years taught," not
  something the owner was asked to confirm name-by-name, since the
  owner's instruction was a blanket "publish all 19 with matching
  subjects." No `boardsTaught` value is set for any teacher: the source
  page does not break down board-by-board coverage, and Marlbridge's own
  matrix spans five boards, so this is left empty rather than guessed.
- **Implementation consequence:** 19 author files created; 87 resource
  files (chemistry ×65, physics ×8, mathematics ×7, biology ×3, english
  ×1, economics ×1, business ×1, accounting ×1) had their `author` field
  reassigned from `marlbridge-academic-team` to the matching real
  teacher. Two resources (world history, sociology) have no matching
  teacher on the source page and were deliberately left assigned to
  `marlbridge-academic-team` rather than given a fabricated match.
- **Follow-up required:** If the owner wants a different subject/teacher
  mapping (e.g. a different physics or biology teacher as the primary
  match), or wants per-teacher board coverage recorded, update
  `src/content/authors/*.md`, the affected resource frontmatter, and
  `docs/image-source-manifest.md` together.
- **Status:** implemented.

## D-006: Reviewer role assignment (who academically signs off on resources, and what that status means)

- **Date:** 2026-08-18
- **Workstream:** v1.x WS4 (Real faculty profiles + reviewer wiring)
- **Question:** Should a named subject-matter teacher be assigned as the
  responsible academic reviewer for resources in their subject, and if
  so, does that assignment retroactively mark those resources as already
  reviewed?
- **Options presented:** Yes — subject teacher reviews their own
  subject's resources; no reviewer assignment yet; assign a single
  reviewer across all subjects.
- **Owner response:** "Yes — subject teacher reviews their own subject's
  resources (Recommended)"
- **Final decision:** `src/content.config.ts` was extended with a
  `reviewer: reference('authors').optional()` field (distinct from the
  pre-existing `author` field and from the pre-existing
  `reviewNeeded`/`reviewNote` data-quality flag pair) plus a
  `reviewStatus` enum (`'draft' | 'review-pending' | 'reviewed' |
  'changes-requested' | 'archived'`, default `'review-pending'`). For
  each of the 8 subjects with a matched teacher, that teacher is set as
  both `author` and `reviewer` on the relevant resources. Critically,
  `reviewStatus` was left at its default `'review-pending'` on every
  resource — being assigned a reviewer does NOT mean a review has
  actually happened, and no resource is marked `'reviewed'` without a
  real review pass. The 8 teachers marked `isReviewer: true` on their
  author profile are: Nouman Ahmed (chemistry), Iftikhar Azeemi
  (physics), Muhammad Ghazali Siddiqui (mathematics), Saad Zai (biology),
  Lubna Waseem (english), Salman Ahmad (economics), Asif Iqbal
  (business), Javaid Iqbal Sabri (accounting).
- **Implementation consequence:** `reviewer` field populated on the same
  87 resource files as D-005. No resource's `reviewStatus` was changed
  from its default. A future real review pass (subject teacher actually
  reading and approving the resource) is required before any resource
  can honestly display `reviewStatus: reviewed`.
- **Follow-up required:** Decide and document an actual review workflow
  (who performs it, what evidence of review is recorded) before flipping
  any `reviewStatus` to `'reviewed'`. Consider whether
  `src/pages/legal/editorial-policy.astro` should be created or updated
  to explain this review model publicly.
- **Status:** implemented (schema + assignment); real review pass itself
  not yet performed for any resource.

---

## D-007 — WhatsApp contact number and always-visible button

- **Date:** 2026-08-19
- **Workstream:** Post-v1.x, in-session request
- **Fact provided:** Owner gave a WhatsApp contact number directly in
  chat — +92 323 9149918 — and asked for an always-visible floating
  WhatsApp button on the site that opens a chat to that number.
- **Final decision:** Number stored in
  `src/components/ui/WhatsAppButton.astro` in international click-to-chat
  format (`923239149918`, no leading zero, no `+` or spaces, per
  WhatsApp's own `wa.me` link requirements). The component is a fixed
  bottom-right button wired into `BaseLayout.astro`, so it renders on
  every page (all pages route through `PageLayout` -> `BaseLayout`).
  Opens `https://wa.me/923239149918` with a pre-filled greeting message
  in a new tab.
- **Implementation consequence:** No commercial-claims validator changes
  needed — a contact channel is not an academic or pricing claim. No
  secret is involved (a business WhatsApp number is public-facing contact
  information, not a credential), so it is committed directly in the
  component rather than via an environment variable.
- **Follow-up required:** None. If the number ever changes, update the
  `phone` constant in `WhatsAppButton.astro` directly.
- **Status:** answered, implemented.

---
