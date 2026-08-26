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
## D-008 — IB commercial licensing status

- **Date:** 2026-08-22
- **Workstream:** IB programme build, in-session request
- **Fact provided:** Owner uploaded 22 real IB curriculum PDFs (`study
  resources/IB/`) and confirmed directly in chat that Marlbridge has, or
  is in the process of obtaining, a formal license from the IB
  ("We have/are getting an IB license"). This matters because two of the
  22 files — `economics-guide.pdf` and `physics-guide.pdf` — are full
  84-page internal IB subject guides carrying an explicit IB copyright
  notice restricting commercial use, naming "tutoring organizations" and
  "operators of curriculum mapping or teacher resource digital
  platforms" specifically, and requiring "a subsequent written license
  from the IB" for exactly this kind of use. The other 20 files are
  shorter public "subject brief" documents with only a plain © notice
  and no such restriction.
- **Final decision:** Build full topic-level syllabus data and
  study-guide resources from the two full guides (Economics, Physics)
  on the strength of this confirmation. All other 19 subjects (14
  further DP subjects + 5 MYP subjects) are sourced only from the public
  subject-brief documents and are deliberately kept at overview depth —
  a "subject-guides" resource describing course aims and structure, not
  a topic-by-topic syllabus map — so no unlicensed derivative of a
  restricted internal guide is ever published.
- **Implementation consequence:** `syllabus-topics.ts` gets two new
  `SyllabusVersion` entries (`ib|ib-dp|economics`, `ib|ib-dp|physics`)
  with real topic/subtopic data transcribed from the guides' own
  syllabus outline tables. The remaining 19 IB subjects get no
  `syllabus-topics.ts` entry at all — their hub pages rely on
  `subject-guides` resources only, consistent with the thin-page guard
  in `[subject].astro` (noindex only triggers when a page has *both*
  zero resources and zero syllabus topics; a subject-guides resource
  alone keeps the page indexable without overstating syllabus depth).
- **Follow-up required:** If the formal IB license is not finalized,
  or its terms differ from what "written license" implies here, this
  decision should be revisited before the two full-guide-derived pages
  go live. No corroborating documentation of the license itself was
  reviewed in this session — the decision rests on the owner's direct
  chat confirmation, the same evidence tier used for D-007.
- **Status:** answered, implementation in progress on
  `feature/ib-programme` (not yet merged to `main`).

---

## D-009 — IB tuition pricing (Pakistan, one-to-one)

- **Date:** 2026-08-22
- **Workstream:** IB programme build, in-session request
- **Fact provided:** Owner stated directly in chat: "IB tuitions are one
  to one only and fee is Rs 5000 per class." No figures were given for
  any region other than Pakistan, and no group-tuition option was
  described for IB.
- **Final decision:** IB pricing is documented and displayed as a
  distinct, Pakistan-only, per-class, one-to-one rate — Rs 5,000 per
  class — rather than being forced into the existing
  `REGION_PRICING`/`FeeTier` structure in `src/data/pricing.ts`, which
  is built for a per-subject-per-month rate quoted across all nine
  existing regions. Applying that structure to IB would either fabricate
  IB rates for the other eight regions (not authorized) or misrepresent
  a per-class rate as a per-month one (inaccurate). Neither is
  acceptable, so IB pricing gets its own small, separate presentation
  instead of a new row/column in the regional pricing table.
- **Implementation consequence:** No change to `REGION_PRICING` or
  `FeeTier`. A standalone IB pricing note is planned for the IB program
  page (`src/content/programs/ib.md` and/or its rendering template) and
  possibly a short callout near `/pricing/`, stating clearly: one-to-one
  only, Rs 5,000 per class, Pakistan. (Implementation not yet complete
  at the time this entry was written — tracked as an open task on
  `feature/ib-programme`.)
- **Follow-up required:** If IB pricing is later confirmed for other
  regions, or a group-tuition option is introduced, this entry and the
  pricing display it describes will need updating.
- **Status:** answered, implementation pending on `feature/ib-programme`.

---
## D-010 — Site-wide duplicate-content sweep

- **Date:** 2026-08-23
- **Workstream:** Post-v1.x, in-session request ("go through the website
  find duplicate content and make it so that Google Search Console does
  not flag them and has no issue with indexing")
- **Fact provided:** GSC itself had no processed data yet for this
  property (a fresh "Processing data, please check again in a day or so"
  state) so there was nothing to read off an existing report. The work was
  therefore proactive: crawl the live site and the source repo directly to
  find and fix real duplication before Google's own crawl has a chance to
  flag it.
- **Findings:**
  1. **URL-level duplication (www / http / apex):** `https://marlbridge.com/`,
     `https://www.marlbridge.com/` and `http://marlbridge.com/` all serve
     byte-identical content, but all three already carry a correct
     canonical tag pointing at
     `https://marlbridge.com/`. This is Google's documented safe pattern
     for this exact situation; no code change made. (A DNS/CDN-level
     redirect would still be tidier, but is infrastructure configuration
     outside this repo, not a page-level fix.)
  2. **i18n hreflang:** already correct on every page checked (reciprocal
     `hreflang` set including `x-default`, each locale keeping its own
     self-referencing canonical, correct `lang`/`dir` attributes). No
     change needed.
  3. **Whole-page exact duplicates:** a full-site crawl (1,144 indexable
     URLs, main-content hashed) found zero exact-duplicate pages.
  4. **Resource-level near-duplicates:** comparing every resource's
     declared `syllabusTopics` scope (board + qualification + subject +
     stage + resourceType + exact subtopic set) surfaced 39 file pairs
     sharing an identical official-topic signature. Each pair was read by
     hand rather than deleted on tag-match alone: **27 pairs (54 files)**
     were confirmed genuine duplicates -- same board/qualification/exam
     code/subtopic, substantially overlapping worked content, produced
     twice by the weekly automation under two different slug conventions
     (e.g. `as-chem-equilibria-practice` vs `as-chemistry-equilibria-practice`).
     **12 pairs (24 files) were false positives** and left untouched --
     genuinely different content that happens to share one coarse official
     subtopic label because the syllabus taxonomy doesn't split further
     (e.g. `forces-and-motion` vs `moments-and-stability`, both tagged only
     to O Level Physics 5054's single "1.5 Forces" subtopic, but covering
     Newton's-laws content and moments/stability content respectively;
     similarly two English Language 9093 Paper 1 pairs and two Sociology
     0495 Paper 1 pairs that turned out to be a "broad overview" resource
     paired with a "narrow deep-dive" resource on the same syllabus unit,
     not a duplicate).
  5. **Sitewide title bug (found incidentally):** 91 resource files had a
     doubled resource-type suffix baked into their frontmatter `title`
     field (e.g. `"... — Practice Questions — Practice Questions"`),
     unrelated to the duplicate-pair issue but a real title-quality defect
     across ~8% of the resource collection. Collapsed to a single suffix
     in all 91 files.
  6. Two smaller data-accuracy bugs surfaced while resolving the above and
     were fixed in the surviving files: a wrong syllabus code (`7100`
     instead of the correct `0715`) in one Commerce resource's prose
     description, and a duplicated title suffix specific to one Computer
     Science resource.
- **Final decision:** For each of the 27 confirmed duplicate pairs, keep
  the higher-word-count / more complete file and retire the other via the
  existing `CONSOLIDATED_RESOURCES` mechanism in
  `scripts/generate-redirects.mjs` (301 redirect, flat URL + every nested
  resource-type URL variant), consistent with how the two pre-existing
  entries in that map were handled. Two inline cross-reference links (in
  files that were kept) pointing at a file being retired were rewritten to
  point at the surviving file instead.
- **Implementation consequence:** 27 resource files deleted from
  `src/content/resources/`; `CONSOLIDATED_RESOURCES` in
  `scripts/generate-redirects.mjs` extended with 27 new entries;
  `public/_redirects` regenerated (`node scripts/generate-redirects.mjs`);
  91 files had a doubled title suffix collapsed; 2 additional small data
  fixes (syllabus code, title) made in files kept as canonical.
- **Follow-up required:** The weekly content-automation script itself
  still has no dedup check against existing `syllabusTopics` scope before
  generating a new resource -- this sweep fixes the 27 duplicates it has
  already produced, but does not prevent a 28th. Fixing the automation's
  generation logic itself was not in scope for this pass and should be
  tracked separately before the next scheduled run.
- **Status:** implemented on `fix/duplicate-content-cleanup`; not yet
  merged to `main` (main auto-deploys to production -- requires the
  founder's separate explicit approval, per the established pattern).

---
## D-011 — Weekly automation dedup guard

- **Date:** 2026-08-23
- **Workstream:** Post-v1.x, in-session request ("do it" -- fixing the
  follow-up flagged in D-010: the weekly automation had no dedup check
  against existing `syllabusTopics` scope before generating a new
  resource, so it could produce a 28th duplicate on its next run.)
- **Fact provided:** The `marlbridge-weekly-study-guides` scheduled task
  (Mondays 09:00, `cronExpression: "0 9 * * 1"`) is not a script in this
  repo -- it's an LLM agent run from a prompt file
  (`marlbridge-weekly-study-guides/SKILL.md`, managed outside this repo).
  Its existing step 4 dedup check ("if a resource already exists
  referencing that board+qualification+subject, skip it") is a loose,
  agent-judgment check against filenames/subject matches -- not a check
  against the actual declared syllabus scope. That gap is exactly how the
  27 duplicate pairs fixed in D-010 were produced: e.g.
  `as-chem-equilibria-practice` and `as-chemistry-equilibria-practice`
  don't look alike as filenames but declare the identical official
  board+qualification+subject+subtopic scope.
- **Final decision:** Two changes, deliberately keeping the check as a
  warning rather than a hard gate (see the new script's own doc comment
  for why a fully automatic hard-fail isn't safe here -- 12 of the 39
  candidate pairs found in D-010 turned out to be genuinely different
  content sharing one coarse official subtopic label, and a hard gate
  would have blocked those too):
  1. Added `scripts/check-duplicate-resource-scope.mjs` -- groups every
     resource by (subject, boards, qualifications, stage, resourceType,
     full syllabusTopics topic/subtopic set) and prints a warning listing
     any group with more than one file. Supports
     `--only-involving <slug1>,<slug2>,...` to scope the report to files
     just written in the current run. Deliberately NOT wired into
     `npm run validate:academic` -- exposed instead as its own
     `npm run check:duplicate-scope`.
  2. Updated the `marlbridge-weekly-study-guides` SKILL.md prompt: step 4
     (the in-run dedup check) now instructs running
     `node scripts/check-duplicate-resource-scope.mjs --only-involving <new-slug>`
     for each of the 3 candidate resources *before* writing its body, and
     treating any warning as a stop-and-reconsider signal (read the
     existing file, decide whether the new one would be a genuine
     duplicate or genuinely different content, and pick a different topic
     within the same subject if it would be a duplicate) rather than
     something to silently override. Also added an explicit warning that
     the `academic-coverage-report-v1.2.csv` used to shortlist
     "zero-resource" combinations can be stale within a single burst of
     runs, so the live check against `src/content/resources/` (not the
     CSV) is the actual source of truth for "does this already exist."
- **Implementation consequence:** New script + package.json entry;
  SKILL.md prompt updated via
  `mcp__scheduled-tasks__update_scheduled_task`. No change to the hard
  validation gate (`npm run validate:academic`) -- this stays a
  judgment-assisting warning, consistent with the `reviewNeeded`/
  `reviewNote` pattern already used elsewhere in this repo for
  human-judgment flags that shouldn't block a build.
- **Follow-up required:** None expected, but worth revisiting if a future
  weekly run reports a warning it doesn't know how to resolve -- the
  prompt instructs stopping and reporting rather than guessing in that
  case.
- **Status:** implemented on `fix/weekly-automation-dedup-guard`; not yet
  merged to `main`.

---
## D-012 — One-to-one class pricing (IGCSE/A Level, all regions)

- **Date:** 2026-08-23
- **Workstream:** Post-v1.x, in-session request ("add one to one classes
  pricing also for IGCSE Rs 3500 per class for A levels Rs 4000 per class
  do the conversions for other currencies as well on the pricing page add
  a separate table for one to one classes")
- **Fact provided:** Owner directly confirmed a Pakistan one-to-one (1:1)
  class rate, distinct from both the existing per-subject-per-month
  `REGION_PRICING` table and the existing IB per-class rate: Rs 3,500 per
  class for the IGCSE tier (GCSE, IGCSE, O Level), Rs 4,000 per class for
  the A Level tier (International AS, AS, A Level). Unlike D-009 (IB
  pricing, Pakistan-only, no other-region conversion authorized), the
  owner explicitly asked for currency conversions to be computed for the
  other eight regions already used elsewhere on the site.
- **Final decision:** Added `ONE_TO_ONE_PRICING` to `src/data/pricing.ts`
  as a `readonly RegionPricing[]` array (reusing the existing interface
  shape, not the flat `IB_PRICING` shape, since real conversions were
  authorized for every region). Only the Pakistan row is an owner-set
  rate; the other eight are currency conversions of that same Rs 3,500 /
  Rs 4,000 base, computed from live PKR exchange rates fetched from
  `open.er-api.com` (provider: exchangerate-api.com), rate date
  2026-08-22, applied 2026-08-23:
  - Saudi Arabia (SAR): 49 / 56
  - United Arab Emirates (AED): 48 / 54
  - Qatar (QAR): 47 / 54
  - Kuwait (KWD): 3.773 / 4.312
  - Bahrain (BHD): 4.872 / 5.568
  - Oman (OMR): 4.984 / 5.696
  - United Kingdom (GBP): 9 / 11
  - Europe (EUR): 11 / 12
  SAR/AED/QAR/GBP/EUR are rounded to the nearest whole unit; KWD/BHD/OMR
  keep 3-decimal precision, consistent with the existing
  `THREE_DECIMAL_CURRENCIES` convention already used for those same three
  currencies in `REGION_PRICING` (fils/baisa subunits at 1/1000, not
  1/100). A new `ONE_TO_ONE_TERMS` object records the unit
  ("per class"), the one-to-one-only delivery note, the verification
  date, and an explicit conversion-basis caveat so the page never implies
  these eight converted rates are independently published the way
  `REGION_PRICING`'s rows are.
- **Implementation consequence:** `src/pages/pricing/index.astro` gained
  a new, separate "One-to-one classes" table (region / IGCSE-tier /
  A-Level-tier, same column layout as the main table) plus a new FAQ
  entry, both reading from `ONE_TO_ONE_PRICING` / `ONE_TO_ONE_TERMS` --
  no number is hard-coded on the page itself.
  `scripts/validate-pricing-consistency.mjs` was not modified: it only
  guards `REGION_PRICING`'s figures, and no file outside
  `src/data/pricing.ts` / `src/pages/pricing/index.astro` hard-codes any
  of the new figures, so no gap is introduced.
- **Follow-up required:** The eight converted rates are FX-derived, not
  independently confirmed -- they should be refreshed if PKR exchange
  rates move meaningfully, the same way any FX-derived figure would need
  periodic revalidation. No other follow-up expected.
- **Status:** implemented on `feature/one-to-one-pricing`; not yet merged
  to `main`.
## D-013 — August audit fixes: IELTS status, Contact FAQ drift, homepage title

- **Date:** 2026-08-23
- **Workstream:** Post-v1.x, in-session request (new audit findings, not
  previously in the register)
- **Fact provided:** Owner confirmed IELTS is currently offered by
  Marlbridge (only SAT is genuinely unconfirmed) -- `src/content/programs/
  ielts.md` incorrectly carried `marlbridgeTeaches: "not-confirmed"` and
  "not yet offered" body copy identical to the genuinely-unconfirmed
  `sat.md`, a live public misstatement.
- **Final decision:**
  1. `src/content/programs/ielts.md`: `marlbridgeTeaches` changed to
     `"teaching"`; body copy rewritten from "not yet offered... register
     your interest" to "Marlbridge teaches Academic IELTS preparation,
     covering all four papers: Listening, Reading, Writing and Speaking."
  2. `src/pages/contact/index.astro` FAQ ("Which qualifications does
     Marlbridge teach?"): found two further pieces of drift while fixing
     IELTS in the same answer -- (a) it still said "IELTS and SAT are not
     yet offered" (now corrected: IELTS added to the taught list, only SAT
     called out as not yet offered) and (b) it still said "IB study
     resources are published, with teaching in development" even though
     `src/content/programs/ib.md` was changed to `marlbridgeTeaches:
     "teaching"` earlier this engagement (IB programme merge) -- this
     FAQ answer was never updated at that time. Now reads "...AS Level, A
     Level, IB (Middle Years Programme and Diploma Programme, one-to-one)
     and IELTS... SAT is not yet offered."
  3. `src/pages/index.astro`: homepage `<title>` changed from
     `site.tagline` ("Marlbridge — Bridging Knowledge and Opportunity.")
     to `"Marlbridge — IGCSE, A Level, IB & GCSE Tutoring"` -- a real
     category keyword instead of branding-only text, using only
     currently-taught program categories. `site.tagline` is unaffected
     everywhere else (footer, Organization schema `slogan`, homepage H1
     body copy).
- **Implementation consequence:** No validator or schema change needed --
  `checkQualificationClaims` in `validate-commercial-claims.mjs` only
  checks FAQ sentences against IGCSE/GCSE/AS Level/A Level/O Level (IB and
  IELTS are not matrix-tracked qualifications), and the copy-contradiction
  guard only scans `src/content/{subjects,programs}` bodies, not
  `src/pages/contact/index.astro` prose -- so neither edit needed a script
  change, only the content correction itself. Full validation gate
  re-run clean after all three edits.
- **Follow-up required:** None outstanding for these three items. Three
  further items from the same audit round were investigated and found to
  need either an external (non-repo) action or no code change at all --
  see the same-day audit-response report for HTTP→HTTPS/HSTS (Cloudflare
  dashboard setting), Organization `sameAs` (code already supports it,
  needs real social profile URLs), and hreflang/thin-content scope
  (already correctly implemented; not a bug).
- **Status:** implemented on `fix/august-audit-findings`; not yet merged
  to `main`.

## D-014 — HTTP->HTTPS redirect and HSTS enabled (Cloudflare zone setting)

- **Date:** 2026-08-23
- **Workstream:** Post-v1.x, in-session request (August audit item 2 --
  `http://marlbridge.com/` returned 200 OK directly instead of a 301, and
  the HTTPS response carried no `strict-transport-security` header)
- **Fact provided:** Confirmed via `curl -I` before and after -- prior to
  this fix, HTTP returned 200 with no redirect and HTTPS had no HSTS
  header at all.
- **Final decision:** Not a repo code change -- this is a Cloudflare
  zone-level setting (SSL/TLS > Edge Certificates), external to this
  codebase. Owner granted browser access (already logged into the
  Cloudflare dashboard) and a scoped API token; the API token lacked
  zone-list/zone-settings permission for this specific zone (confirmed via
  `/user/tokens/verify` succeeding but `/zones` and the settings endpoints
  returning "Unauthorized to access requested resource"), so the fix was
  applied directly in the Cloudflare dashboard via browser automation
  instead:
  1. **Always Use HTTPS** -- turned on (was off).
  2. **HTTP Strict Transport Security (HSTS)** -- enabled, Max-Age set to
     6 months (Cloudflare's own "Recommended" default). `includeSubDomains`,
     `preload` and the `X-Content-Type-Options: nosniff` header were left
     off/disabled -- the audit item only asked for the base HTTP->HTTPS
     redirect and HSTS presence, and `preload`/`includeSubDomains` are
     harder to safely reverse (preload in particular requires submission
     to browser preload lists and can make a site inaccessible if HTTPS
     ever needs to be disabled), so they were deliberately left for a
     separate, explicit decision rather than enabled by default.
- **Implementation consequence:** Verified live post-change:
  `curl -I http://marlbridge.com/` now returns `301 Moved Permanently`
  with `Location: https://marlbridge.com/`; `curl -I https://marlbridge.com/`
  now returns `strict-transport-security: max-age=15552000`.
- **Follow-up required:** None for the base fix. If `includeSubDomains`
  or `preload` are wanted later, that needs a separate explicit decision
  -- preload especially, since undoing it after browsers cache the
  preload list is slow and can affect subdomains not confirmed HTTPS-ready.
- **Status:** Done directly against the live Cloudflare zone (not a repo
  change, so no branch/PR applies here).

## D-015 — Organization schema sameAs: all 5 confirmed profiles added

- **Date:** 2026-08-23
- **Workstream:** Post-v1.x, in-session request (August audit item 3 --
  Organization schema had no `sameAs` links even though the code has
  supported it since it was written; `src/data/site.ts`'s `social[]` was
  simply empty)
- **Fact provided:** Owner supplied handles for Instagram
  (@marlbridgeofficial), LinkedIn ("Marlbridge"), Facebook ("Marlbridge"),
  TikTok (@marlbridge), X (@Marlbridgehq) and Threads (@marlbridge --
  explicitly noted as currently suspended).
- **Final decision:**
  1. Added Instagram, TikTok and X to `src/data/site.ts`'s `social[]` --
     all three were given as exact @handles, so the profile URL is an
     unambiguous, direct construction from what the owner typed (Instagram
     was additionally browser-verified live: page title resolved to
     "MarlBridge (@marlbridgeofficial) -- Instagram photos and videos").
  2. LinkedIn and Facebook URLs were supplied by the owner in a follow-up
     message and added the same day: `https://www.linkedin.com/company/
     144554905/` (the owner pasted the `/admin/dashboard/` URL, which only
     renders for a logged-in admin -- the public ID-based company page URL
     was used instead, since that's what a visitor/crawler actually sees)
     and `https://www.facebook.com/marlbridge` (the owner pasted the
     `web.facebook.com` desktop-app host -- the canonical `www.facebook.com`
     form was used instead; both are the same page, browser-verified live
     with the real "Marlbridge" / "Bridging knowledge and opportunity." /
     "Education website" page details visible).
  3. Threads was NOT added, despite being confirmed to exist, because the
     owner stated it is currently suspended -- a sameAs link to a
     suspended account would point at a dead page, not a live
     verification signal, and undermines the same accuracy principle.
- **Implementation consequence:** `src/utils/schema/organization.ts`
  required no change -- it already emits `sameAs` conditionally whenever
  `site.social` is non-empty. Verified in the built homepage's JSON-LD:
  `"sameAs":["https://www.instagram.com/marlbridgeofficial/",
  "https://www.linkedin.com/company/144554905/",
  "https://www.facebook.com/marlbridge",
  "https://www.tiktok.com/@marlbridge","https://x.com/Marlbridgehq"]`.
- **Follow-up required:** Revisit Threads if/when it is reinstated.
- **Status:** implemented on `fix/august-audit-findings`; not yet merged
  to `main`.

## D-016 — Privacy notice added to the enquiry form (Register #4 / Risk R10)

- **Date:** 2026-08-23
- **Workstream:** Post-v1.x, in-session request (external audit register
  item, confirmed still live: "No privacy/consent notice or checkbox on
  the /contact/ enquiry form")
- **Fact provided:** `src/components/forms/EnquiryForm.astro` (shared by
  both the student/tutoring and school-partnership enquiry forms) had no
  privacy disclosure of any kind at the point of data collection, despite
  `src/pages/legal/privacy.astro` already fully describing what the
  enquiry form collects and how it's used.
- **Final decision:** Added a plain-text privacy notice with a link to
  `/legal/privacy/`, positioned directly above the submit button: "By
  submitting this form you agree to Marlbridge's Privacy Policy — your
  information is used only to respond to your enquiry." A mandatory
  tick-box was deliberately NOT added -- this form collects data under
  legitimate-interest/contract processing to answer a genuine enquiry,
  not for marketing, so there is no opt-in requirement the way there is
  for the site's GA4 analytics (which already has its own dedicated
  cookie-consent banner via `ConsentAnalytics.astro`, D-003). A checkbox
  would add friction to a lead-generation form without a corresponding
  legal requirement.
- **Implementation consequence:** One shared component, so the notice
  covers both `/contact/` (student/tutoring enquiries) and the schools
  partnership form automatically. Verified present in the built
  `/contact/` page.
- **Follow-up required:** None expected. If the business later adds a
  marketing opt-in (e.g. a newsletter checkbox) to this form, that would
  need its own separate, genuinely-optional checkbox -- do not fold it
  into this required privacy notice.
- **Status:** implemented on `fix/enquiry-form-privacy-notice`; not yet
  merged to `main`.

## D-017 — Staff photos rendered on author bio pages

- **Date:** 2026-08-24
- **Workstream:** v1.x CLOSURE follow-up (user-reported: /authors/harris-zaman/
  and other author pages render no photo, despite a staff photo existing).
- **Fact provided:** The `authors` content collection has always had an
  optional `image` field (e.g.
  `image: "/images/faculty/harris-zaman.jpg"`), and the corresponding JPGs
  already exist in `public/images/faculty/` for 19 of the 20 author
  entries (the 20th, `marlbridge-academic-team`, is a team byline, not an
  individual, and correctly has no `image`). Grepping the codebase showed
  `images/faculty` was never referenced anywhere outside the content
  files themselves -- the data existed but nothing rendered it. The
  `personNode()` schema helper (`src/utils/schema/person.ts`) already
  accepted an `image` parameter too, but the author page never passed one.
- **Final decision:** Render the photo on `src/pages/authors/[slug].astro`
  via `PageLayout`'s existing `hero-extra` slot (a circular photo next to
  the name/role in the page header), and pass `image: d.image` into
  `personNode()` so the Person JSON-LD also carries it. For a `person`
  entityType with no `image` set, show a clearly-labelled "Photo" reserved
  placeholder (matching the site's existing "reserved frame" convention
  used elsewhere, e.g. `PhotoFrame.astro`) rather than silently omitting
  it, so a missing photo stays visible as a to-do rather than invisible.
  For `organization` entityType (the team byline), no photo and no
  placeholder is shown -- a team does not get a personal photo.
- **Implementation consequence:** Single-file change,
  `src/pages/authors/[slug].astro`. Verified in the built output: e.g.
  `dist/authors/harris-zaman/index.html` now contains
  `<img src="/images/faculty/harris-zaman.jpg" ...>` and the page's Person
  JSON-LD now includes
  `"image":"https://marlbridge.com/images/faculty/harris-zaman.jpg"`;
  `dist/authors/marlbridge-academic-team/index.html` correctly shows
  neither a photo nor a placeholder.
- **Follow-up required:** None expected. If a new individual author is
  added without a photo yet, the reserved "Photo" placeholder will show
  on their bio page until one is supplied -- that is the intended,
  visible-not-silent behaviour.
- **Status:** implemented on `content/staff-photos-authors`; not yet
  merged to `main`.

## D-018 — Subject-list resource-count badge overlapping the level label

- **Date:** 2026-08-24
- **Workstream:** v1.x CLOSURE follow-up (user-reported, screenshot of
  `/subjects/` at a mid-range browser width showing "N RESOURCES" badges
  overlapping the board/level text next to them, e.g. "Environmental
  Management" and "English Literature").
- **Fact provided:** `SubjectList.astro` (used only on `/subjects/`)
  renders each row as `<a class="flex items-baseline justify-between
  gap-4">` with two children: a title+badge wrapper (`min-w-0`, so it CAN
  shrink and wrap) and the level label (`whitespace-nowrap`, so it
  physically cannot shrink below its own text width). Reproduced directly
  against the live page (isolated the "English Literature" row's DOM in a
  fixed-width test container and swept the width down from 500px):
  overlap starts exactly where the two-column grid's column width gets
  narrow enough that the title wraps to 2 lines AND the level label no
  longer has room next to the shrunken title+badge group. Because the
  outer row has no `flex-wrap`, the browser cannot move the level label
  to a new line when it doesn't fit -- it gets forced into the same
  horizontal space as the badge, producing literal overlapping text. This
  reproduces on the real production page in the `sm:grid-cols-2` window
  (roughly 640-900px viewport), which is exactly what the user's
  screenshot showed.
- **Final decision:** Add `flex-wrap` to the row (`flex flex-wrap
  items-baseline justify-between gap-x-4 gap-y-1`, replacing the single
  `gap-4`). When a row's title+badge and level label don't both fit on
  one line, the level label now wraps to its own line below (left-aligned)
  instead of overlapping. Verified with the same isolated-DOM sweep,
  200px-500px, using the exact shipped classes: zero overlaps at any
  width, with a real gap (7-39px) wherever wrapping occurs.
- **Implementation consequence:** Single-file, single-line class change,
  `src/components/cards/SubjectList.astro`. `SubjectList` is used only on
  `/subjects/`, so no other page is affected.
- **Follow-up required:** None expected.
- **Status:** implemented on `fix/subject-list-badge-overlap`; not yet
  merged to `main`.

## D-019 — Same badge/level overlap bug, second location: homepage subjects preview

- **Date:** 2026-08-24
- **Workstream:** v1.x CLOSURE follow-up (user-reported, second screenshot
  -- this time the homepage's "Learn With Purpose" subjects preview, not
  `/subjects/` which D-018 already fixed).
- **Fact provided:** `src/components/sections/SubjectsSection.astro` is a
  separate component from `SubjectList.astro` (D-018), but its row markup
  is a near-identical copy: same `flex items-baseline justify-between
  gap-4` row with no wrap fallback. Here the list sits inside a narrower
  right-hand column (`lg:grid-cols-[minmax(280px,0.85fr)_1.6fr]`) that is
  itself split into 2 sub-columns, so the effective column width is
  narrower than on the standalone `/subjects/` page at the same viewport
  -- narrow enough that even a single-line title like "Mathematics"
  overlaps its own badge with the level label, without any title-wrapping
  needed. Reproduced directly against the live homepage the same way as
  D-018 (isolated the "Mathematics" row's DOM in a resizable test
  container): overlap starts at ~320px column width even for this
  single-line title.
- **Final decision:** Same fix as D-018, applied to this component:
  `flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1`.
  Verified with the same isolated-DOM sweep against the live page, widths
  180px-500px: zero overlaps at any width.
- **Implementation consequence:** Single-file, single-line class change,
  `src/components/sections/SubjectsSection.astro`. Used only on the
  homepage.
- **Follow-up required:** These two components (`SubjectList.astro` and
  `SubjectsSection.astro`) duplicate the same row markup. Worth
  considering a shared sub-component in a future pass so this class of
  bug can't recur a third time in a third copy -- out of scope for this
  fix, which matches the existing pattern of fixing each in place.
- **Status:** implemented on `fix/homepage-subjects-badge-overlap`; not
  yet merged to `main`.

## D-020 — /resources/ sections grouped by subject instead of one flat date-sorted grid

- **Date:** 2026-08-24
- **Workstream:** v1.x CLOSURE follow-up (user-reported: "the study guides
  are not well managed and arranged properly in the resources").
- **Fact provided:** `src/pages/resources/index.astro` rendered each
  resource-type section (Study Guides, Revision Notes, Practice Questions,
  Subject Guides) as one flat grid of `ResourceCard`s, sorted only by
  `publishedDate` descending across ALL subjects at once -- e.g. Study
  Guides showed 257 items in raw newest-first order with no subject or
  level grouping, no filter, no pagination. The built page was ~600KB of
  HTML on a single load. Per-subject browsing already works fine on
  subject hub pages (`/subjects/[slug]/`), but the resources directory
  itself had no organisation beyond type.
- **Options presented to the user:** (1) group by subject with
  subheadings within each type section, (2) add a client-side subject/
  level filter control, (3) switch the sort from date to alphabetical
  without adding grouping UI. User chose (1).
- **Final decision:** Within each type section, group entries by subject
  using the site's canonical subject order (the same order used on
  `/subjects/`, via `getSubjects()`), with an `<h3>` subheading per
  subject (name + count) and resources sorted alphabetically by title
  within each group -- a reference index, not a recency feed. Left the
  "Recently published" section (top of page, 6 most recent across all
  types) untouched, since date-recency is exactly the right sort for
  that distinct section.
- **Implementation consequence:** `src/pages/resources/index.astro`
  rewritten to build `bySubjectByType` (grouping + sort) alongside the
  existing `byType`. Because a per-subject `<h3>` now sits between the
  section's `<h2>` and each card's own heading, `ResourceCard.astro`
  gained an optional `headingLevel` prop (`'h3' | 'h4'`, default `'h3'`)
  so the card title becomes `<h4>` only in this newly-nested context --
  every other call site (subject hub pages, board pages, "Recently
  published", author/article "also relevant" lists, program pages) is
  unchanged and keeps `<h3>`, preserving correct heading hierarchy
  everywhere rather than skipping or doubling a level. Verified in the
  built output: 23 subject subheadings under Study Guides in the same
  order as `/subjects/`, entries alphabetical within each subject, 257
  cards total (unchanged count), all rendered as `<h4>`; the unrelated
  "Recently published" section's 6 cards still render as `<h3>`.
- **Follow-up required:** None expected for this change. Noted
  separately (see D-019) that `SubjectList.astro` and
  `SubjectsSection.astro` duplicate row markup -- this page's grouping
  logic is a third, independent implementation and not something to
  consolidate with those two, since its data shape (grouped-by-subject
  within a type) is genuinely different from theirs (flat subject list).
- **Status:** implemented on `feature/resources-group-by-subject`; not
  yet merged to `main`.

## D-021 — Subject/level filter dropdowns added to /resources/ sections

- **Date:** 2026-08-24
- **Workstream:** v1.x CLOSURE follow-up, direct continuation of D-020.
  D-020 grouped each resource-type section by subject; the user was asked
  which further arrangement improvement they wanted and chose adding a
  subject/level filter on top of that grouping (rather than sorting-only,
  or replacing the grouping with a flat filtered list).
- **Final decision:** Each type section (Study Guides, Revision Notes,
  Practice Questions, Subject Guides) gets a "Subject" `<select>` (options
  built from that section's own `bySubjectByType` groups, so a subject
  never appears as a filter option with zero results) and, when a section
  actually spans more than one level, a "Level" `<select>` (options
  limited to levels that actually occur in that section, in the same
  order as the `level` enum in content.config.ts). A "Clear filters"
  button appears only once a filter is active. Filtering is client-side,
  vanilla JS (no framework), matching the existing inline-`<script>`
  convention this codebase already uses for the mobile-menu toggle and
  cookie-consent banner (`BaseLayout.astro`) rather than introducing a new
  dependency. Selecting a subject hides non-matching subject groups
  entirely; selecting a level hides non-matching cards and, if that empties
  a subject group, hides the group too; a genuine zero-result combination
  shows a "No {type} match these filters" message instead of a blank
  section.
- **Implementation consequence:** `src/pages/resources/index.astro` only.
  Server-rendered: each card's `<li>` carries `data-levels="..."` (space-
  separated level slugs) and each subject group carries
  `data-subject-group="{subject-slug}"`; the section carries
  `data-resource-filter="{type-slug}"` so the script can scope
  independently per section. Verified the server-rendered markup directly
  (subject/level `<option>` lists match each section's real data, all 257
  Study Guides cards carry `data-levels`, all 23 subject groups carry
  `data-subject-group`), then verified the actual filter *behaviour* --
  not just that the build succeeded -- by running the shipped script
  logic verbatim against a live browser DOM (Chrome, via the same session
  used throughout this engagement) with representative single- and
  multi-level cards: subject-only filtering, level-only filtering across
  subjects, combined subject+level filtering (including a card with two
  levels correctly matching either), the reset button, and a genuine
  zero-match case correctly showing the empty-state message. All passed.
- **Follow-up required:** None expected.
- **Status:** implemented on `feature/resources-subject-level-filter`;
  not yet merged to `main`.

## D-022 — "Free Trial Class" header CTA added

- **Date:** 2026-08-24
- **Workstream:** v1.x CLOSURE follow-up (user request: a header button
  matching the "Free Trial Class" button on learnersacademy.com.pk).
- **Options presented to the user, and answers:** (1) replace the
  existing "Explore Programs" header CTA, or add a second button
  alongside it -- user chose add. (2) link target: no dedicated trial-
  booking page exists (the trial offer and the enquiry form live together
  on `/tutoring/`) -- user chose `/contact/` over the `/tutoring/`
  enquiry-form anchor.
- **Final decision:** Added a second header CTA, "Free Trial Class" ->
  `/contact/`, next to the existing "Explore Programs" -> `/programs/`.
  Colour and shape deliberately do NOT copy learnersacademy.com.pk's
  rounded-pill navy button -- this site's button system is `rounded-sm`
  everywhere (never fully rounded), so the new button keeps that shape.
  For colour, used the site's existing gold accent
  (`--color-gold-500` / `--color-gold-600` on hover) with navy-800 text,
  since gold is Marlbridge's own "highlighted action" colour already used
  for hover states and eyebrow labels site-wide, giving the new button a
  distinct, standout treatment against the navy header without competing
  with the existing ivory "Explore Programs" button or introducing any
  colour not already in the palette. Verified contrast visually in the
  browser (gold-500 on navy-800 header background, navy-800 text on
  gold-500 button face) before shipping.
- **Implementation consequence:** `src/components/navigation/Header.astro`
  -- new `<a>` added next to "Explore Programs", desktop-only
  (`lg:inline-flex`), matching that button's visibility pattern.
  `src/components/navigation/MobileMenu.astro` -- the existing "Contact"
  button (already linking to `/contact/`; "Contact" is not in
  `primaryNav`, so this was the only mobile-menu path to that page) was
  relabelled to "Free Trial Class" and restyled to match, rather than
  adding a third button that would duplicate the same destination.
  Verified in the built output on multiple page types (homepage,
  /subjects/, /pricing/, /contact/, since Header/MobileMenu are shared
  layout components) that both the desktop button and the mobile-menu
  button render with the correct classes and href.
- **Follow-up required:** None expected. If the business later wants a
  dedicated trial-booking landing page (distinct from the general
  `/contact/` enquiry form), this button's href is the only place that
  would need to change.
- **Status:** implemented on `feature/header-free-trial-button`; not yet
  merged to `main`.

## D-023 — Canonical academic-page indexability policy (isIndexableAcademicPage)

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 technical-SEO remediation brief (external, user-
  supplied) -- Phase 1 (canonical indexability policy) + Phase 2 (sitemap/
  robots alignment). First of ~12 phases in that brief; the rest remain
  pending (see Task list #61-70).
- **Baseline evidence gathered before any change (see full session for
  detail):** `npm run validate:academic` reports 160 ACTIVE combinations
  (not the 139 stated in the brief -- that number is stale, predating
  substantial resource-content work in earlier sessions).
  `coverage:academic-v2` reports 160/160 combinations with at least one
  resource -- i.e. zero true zero-resource combinations currently exist,
  contradicting the brief's "117 zero-resource combinations" claim.
  However, the underlying architectural problem the brief describes is
  real: the existing `isThin` guard in the page template
  (`resources.length === 0 && !hasSyllabusTopics`) treated ANY resource
  count >= 1 as sufficient for indexing, with no quality/substance bar.
  39 of 160 ACTIVE combinations have exactly one resource, and the IB
  subject-guide overviews written in an earlier session (Task #24) are
  ~200-300 words each -- exactly the kind of thin single-resource page
  the old guard let through. Only 1 page (404.html) rendered noindex on
  the pre-change production build.
- **Final decision:** Replaced the ad-hoc `isThin` boolean with a single
  canonical, reusable decision function, `isIndexableAcademicPage()` in
  `src/utils/seo/indexability.ts`. It sums word counts across a
  combination's *original Marlbridge-authored* resources only
  (study-guides, revision-notes, subject-guides, practice-questions,
  exam-preparation -- explicitly excluding past-papers, since those are
  official third-party material, not original writing) and requires >=400
  total words to count as indexable. The 400-word figure is not new --
  it's the same "expansion queue" threshold already used by
  `scripts/academic-coverage-report-v2.mjs`, reused here so "indexable"
  and "not flagged for expansion" describe the same quality bar sitewide.
  A combination with real syllabus topics but no substantial resource is
  still NOT indexable -- syllabus-topics-alone was exactly the old
  loophole.
- **Why one function, two callers:** astro:content (needed to read
  resource bodies) isn't available inside `astro.config.mjs` -- Astro's
  config file runs before the content layer exists. So
  `isIndexableAcademicPage()` itself is framework-free (plain input/output,
  no astro:content import), and each caller adapts its own data source to
  the same shape: the page template
  (`src/pages/boards/[board]/[qualification]/[subject].astro`) via
  `getResources()`, and a new `buildIndexabilityExclusions()` in
  `astro.config.mjs` via direct frontmatter reads off disk (same pattern
  already used there by `buildLastmodMap()`). Both compute the exact same
  decision from equivalent inputs, so sitemap inclusion and the page's own
  robots meta cannot drift apart. `LEVEL_FOR_QUALIFICATION` (previously a
  private constant inside the page template) was promoted to a shared
  export in `src/utils/academic/index.ts` for the same reason -- both
  callers need the qualification-slug -> resource-level mapping, and a
  second private copy in `astro.config.mjs` would have been exactly the
  kind of drift this change exists to prevent.
- **Sitemap change:** `astro.config.mjs`'s `sitemap()` filter now excludes
  any academic hub path `isIndexableAcademicPage()` marks non-indexable,
  in addition to the pre-existing `/styleguide` exclusion.
- **New automated safeguard:** `scripts/test-sitemap-noindex.mjs` --
  reads the *built* `dist/sitemap-*.xml` and, for every URL listed, reads
  the corresponding `dist/**/index.html` and fails if it renders a
  `noindex` robots meta tag. This does not re-derive or duplicate the
  indexability rule; it cross-checks two independently-generated build
  outputs (the sitemap filter and each page's own render) for agreement,
  which also catches future drift even if a later change touches only one
  side. Verified the test actually catches regressions: temporarily
  disabled the sitemap exclusion, rebuilt, confirmed the test correctly
  failed and named all 27 affected URLs, then restored and reconfirmed a
  clean pass. `scripts/test-negative-validation-suite.mjs`'s section [H]
  (previously a stale comment claiming "0 noindex tags" as the expected
  state) was corrected to point at this real test and explain that 27
  noindexed pages is the new, correct state.
- **Measured effect on the current build:** 27 academic hub pages moved
  from indexed to `noindex, follow` (still served, still linked, just
  withheld from search results): 5 English Literature hubs (aqa a-level +
  gcse, edexcel a-level + igcse, oxfordaqa a-level + igcse -- 6 total),
  2 more (aqa as-level Business, aqa gcse World History), and 19 of the 20
  IB hubs (ib-dp and ib-myp), whose subject-guide resources are ~200-300
  words each and have not yet been expanded. Total built page count
  unchanged (1122); sitemap URL count dropped from (previously
  unmeasured/unfiltered) to 1094, exactly matching 1122 minus the 27
  newly-noindexed pages minus 404.html (which the sitemap integration
  already excluded by default) -- confirms sitemap and robots meta are
  now in exact agreement.
- **Guardrail check:** does not delete or restructure any board,
  qualification or subject; does not touch `marlbridgeTeaches`; does not
  invent content; a noindexed page still renders and is still linked
  internally (`noindex, follow`), so link equity still flows and a human
  who lands on one still gets an honest page.
- **Follow-up required:** The 19 newly-noindexed IB hubs are a direct,
  visible cost of this change and the clearest concrete target for future
  content work -- expanding those subject-guide resources past 400 words
  (or adding a second qualifying resource) is the fastest way to earn
  those pages back into the index under the new, honest bar. Left for a
  future phase/session rather than done reflexively here, since writing
  substantial original IB content for 19 subjects properly belongs to the
  brief's later content-cluster phases (#70), not this policy-mechanics
  phase.
- **Status:** implemented on `feature/seo-indexability-policy`; full
  validation gate green (astro check, validate:academic, build, cross-
  board-regression, negative-validation-suite, unit tests, npm audit, tsc
  --noEmit, wrangler deploy --dry-run); not yet merged to `main`.

## D-024 — 27 pages expanded past the indexability bar instead of staying noindexed

- **Date:** 2026-08-25.
- **Workstream:** Follow-up to D-023, same feature branch. User reviewed
  the 27-page noindex impact from D-023, asked why noindexing was
  necessary rather than adding content, and -- after being told 7 pages
  needed only small, already-verifiable additions while 19 IB pages
  needed real per-subject research -- chose to do all 27 now rather than
  defer the IB ones.
- **Real bug found and fixed along the way:** `LEVEL_FOR_QUALIFICATION`
  (utils/academic/index.ts) had no entry for `as-level` qualifications.
  AQA AS Business (the matrix's only `as-level` row) could therefore
  never match a resource by `level`, regardless of content -- a
  structural gap independent of word count. Added `'as-level':
  'a-levels'`, matching how AS-stage content is already tagged elsewhere
  (`level: ["a-levels"]` + `stage: "AS"`, e.g. the existing 9701 pattern).
  This single fix retroactively surfaced 3 pre-existing, substantial
  resources (2,433 words combined) that were already written and tagged
  correctly but structurally invisible on this page.
- **Content added:**
  - New file `src/content/resources/aqa-as-level-business-course-structure.md`
    (subject-guides, 503 words) -- written directly from already-verified
    syllabus/topics data already in `syllabuses.ts`/`syllabus-topics.ts`
    (verifiedOn 2026-08-19), plus one fact (Paper 1/Paper 2 marks,
    weighting, AOs) confirmed via aqa.org.uk's scheme-of-assessment page
    this session.
  - 7 existing study-guide/subject-guide files (6 English Literature
    across AQA/Edexcel/OxfordAQA + AQA GCSE History) each got a new,
    factual "Assessment at a glance" section -- exam duration, marks,
    weighting, and question structure -- verified against the official
    board specification page already cited at the bottom of each file
    (aqa.org.uk, qualifications.pearson.com, oxfordaqa.com). Two of the
    seven also honestly noted a genuine spec refresh (AQA 7717 for 2027,
    OxfordAQA 9675/9275 revisions) without inventing any future content.
  - 19 IB subject-guide files (14 DP, 5 MYP) each got a new "How it's
    assessed" section, researched against ibo.org subject briefs
    (cross-checked against secondary sources where the primary brief was
    thin), covering SL/HL paper structure and IA weighting for DP
    subjects, and MYP's actual criterion-based model (four criteria per
    subject group, 1-8 scale) for MYP subjects -- explicitly not
    described using DP terminology, since the two programmes' assessment
    models are structurally different.
  - Caught and fixed one internal inconsistency during review: the IB
    History file's original intro (2020 brief) named "six key concepts",
    while the new assessment section (current 2028-examined syllabus)
    named "four specified historical concepts" -- same underlying ideas,
    consolidated differently across syllabus versions. Added one bridging
    sentence explaining this rather than leaving an unreconciled
    contradiction on the page.
  - Where a source didn't give a confirmable number (e.g. one Computer
    Science paper weighting, one ESS paper split), the relevant section
    describes the component without a fabricated percentage, per the
    guardrail against inventing facts.
- **Effect:** All 27 pages now clear the 400-word substantial-content
  bar under `isIndexableAcademicPage()` (D-023) purely on content
  volume/quality -- no threshold or logic change. Rebuilt: 1,123 pages
  (+1 for the new AS Business resource), sitemap 1,122 URLs, exactly
  1,123 minus 404.html -- the only page still noindexed. Full validation
  gate green (astro check, validate:academic, build, cross-board-
  regression, negative-validation-suite, sitemap-noindex safeguard, unit
  tests, npm audit, tsc --noEmit, wrangler deploy --dry-run).
- **Guardrail check:** no content states future syllabus years/reforms
  beyond what a source explicitly confirmed; no fabricated marks or
  weightings; MYP and DP are not conflated; no new duplicate/near-
  duplicate resource files were created (all 26 of the 27 were expansions
  of existing files in place); the one new file (AS Business) fills a
  genuine gap rather than duplicating existing content.
- **Status:** implemented on `feature/seo-indexability-policy`, same
  branch as D-023; not yet merged to `main`.

## D-025 — Phase 3/5/7/10 of the SEO remediation: classification, metadata, fonts, structured data

- **Date:** 2026-08-25.
- **Workstream:** Continuation of the Aug 2026 SEO remediation brief,
  after D-023/D-024 (Phases 1+2) merged to `main`. User said "go ahead
  and do the rest as well" -- proceeding phase by phase, mechanical/
  scriptable phases first.
- **Phase 3 (classification):** Built `docs/reports/seo-page-classification.json`
  and a readable `.md` companion, classifying all 160 ACTIVE
  board+qualification+subject combinations by indexability, resource
  depth and syllabus-verification status. Result: 9 strong (8+
  resources), 110 adequate (2-7), 18 minimal (exactly 1 matching
  resource -- down from 39 before D-024's expansion work, since most of
  that work deepened existing files rather than adding new ones), 23
  syllabus-unverified (all 19 IB DP/MYP combinations plus 4 others), 0
  not-indexable. The "0 not-indexable" figure directly confirms D-023's
  policy + D-024's content work are both holding.
- **Phase 5 (metadata audit):** Scanned all 1,122 built pages'
  `<title>` and meta description. Result was already very clean: 0
  missing, 0 duplicate descriptions, exactly 1 duplicate title pair --
  `src/content/resources/forces-and-motion.md` (Cambridge O Level
  Physics) and `edexcel-igcse-physics-forces-and-motion.md` (Edexcel
  IGCSE Physics) both used the bare title "Forces and Motion" with no
  board/qualification prefix, unlike the sitewide convention. Fixed by
  setting the existing (previously unused anywhere in the repo)
  `seoTitle` frontmatter field to a board-specific value on each --
  `title` (used for the on-page heading, breadcrumbs and internal
  cross-links) is untouched, only the `<title>` tag changes.
- **Phase 7 (fonts) -- real bug found, not just a performance nit:**
  Hash-compared every `public/fonts/*.woff2`. Found the Newsreader and
  Public Sans 500/600-weight files were byte-identical to their
  respective 400-weight files (Newsreader 400≡500, Public Sans
  400≡500≡600, both latin and latin-ext subsets) -- meaning `font-weight:
  500`/`600` in CSS was silently serving regular-weight glyphs. This is
  a visual defect, not merely a wasted-download one: any UI element
  styled with those weights was never actually rendering bolder text.
  Re-fetched the genuine static-weight files individually from Google
  Fonts (a combined `wght@400;500` query incorrectly returned the same
  URL for both weights -- fetching each weight in its own request
  returned correct, distinct URLs) and verified via `fontTools` that
  each replacement file now reports the correct `OS/2.usWeightClass`
  (500/600) and is structurally valid, not just byte-different. Also
  added a `/fonts/*` rule to `public/_headers` (previously absent, so
  fonts fell back to the default no-cache HTML policy) at a 30-day
  `Cache-Control`, matching the reasoning already used for `/images/*`.
  Checked preload usage (`BaseLayout.astro`, `LocaleLayout.astro`):
  already minimal and correct -- only the two base-weight fonts actually
  needed for above-the-fold render are preloaded, so no "unnecessary
  preload" problem existed despite the brief's concern; the real font
  problem was the duplicate binaries, not preload count.
- **Phase 10 (structured data):** Validated JSON-LD across all 1,122
  pages (5,308 typed nodes once `@graph` wrappers are unpacked
  correctly -- an early version of the check script wrongly flagged
  every `@graph`-wrapped page as "missing @type" by checking the
  wrapper object instead of its graph nodes; corrected before trusting
  the result). Result: 0 invalid JSON, 0 missing `@type`, sensible type
  distribution (EducationalOrganization, WebSite, WebPage on every
  page; BreadcrumbList on 979; Article on 727; Course on 167; Person on
  19; FAQPage on 49). No fixes needed -- structured data is clean.
- **Known gap, not addressed this round:** Phase 4 (the 8 named GSC
  priority pages with their exact stats) and the specific 14-item list
  for Phase 11 were given as literal text in the original brief, which
  is no longer available verbatim in this session (only a summary of
  its structure survived context compaction) -- proceeding on those two
  phases would mean guessing at page identities/query terms/test
  specifics rather than working from real GSC evidence, which
  contradicts the brief's own evidence-first method. Flagged to the
  user rather than fabricated.
- **Guardrail check:** no redesign; no invented facts (font weight
  claims verified via fontTools, not assumed); no page's
  content/structure changed, only metadata and static asset files.
- **Status:** implemented directly on `main` via
  `fix/seo-phase-3-5-7-10`, full validation gate green (astro check,
  validate:academic, build, cross-board-regression, negative-validation-
  suite, sitemap-noindex safeguard, unit tests, npm audit, tsc --noEmit,
  wrangler deploy --dry-run).

## D-026 — Phase 8: real Lighthouse/PageSpeed baseline captured

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 8.
- **What was done:** Ran a real, on-demand Lighthouse test against
  production (`https://marlbridge.com/`) via pagespeed.web.dev, through
  the browser (not the API directly -- the PageSpeed Insights REST
  endpoint returned empty via the fetch tool, so the interactive site was
  used instead; this is a legitimate escalation to a JS-rendered page,
  not a workaround of a content restriction). Confirmed via Cloudflare's
  own response headers that the deploy from D-025 was live before
  running the test. Results: Mobile 92/96/100/100 (Performance/
  Accessibility/Best Practices/SEO), Desktop 98/96/100/100. No CrUX
  field data exists yet (traffic below the reporting threshold) --
  reported honestly as lab-only data, not presented as real-user
  metrics. Full detail in `docs/reports/lighthouse-2026-08-25.md`.
- **Honest limitation:** No prior Lighthouse baseline exists from before
  this session's changes, so this is not a true before/after comparison
  -- it establishes the baseline going forward. The brief asked for real
  (not invented) measurement; a real single measurement was captured,
  but claiming a "before" figure would have meant fabricating one, which
  the guardrails explicitly forbid.
- **Status:** documentation-only change (`docs/reports/`), no code or
  content touched, committed directly to `main`.

## D-027 — Phase 4: the 8 named GSC priority pages, plus remaining query-term mappings

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 4.
- **What was done:**
  1. **Sitewide hub-page description fix** (`src/pages/boards/[board]/[qualification]/[subject].astro`):
     replaced the single fixed-boilerplate `<meta description>` template
     (identical wording across all 160 hub pages, the exact problem
     Section 9 of the brief flagged) with a generator that reflects real
     per-page differentiators -- syllabus code, the actual resource
     types present, and resource count, with an honest "no original
     Marlbridge resource yet" fallback for the zero-resource case. This
     is the smallest coherent fix: rather than hand-writing 3 one-off
     descriptions for the named priority pages, the shared template was
     corrected so all 160 hub pages benefit and the underlying
     duplicate-description mechanism can't recur. Re-ran
     `npm run audit:metadata` after the change: 0 missing, 0 duplicate
     titles, 0 duplicate descriptions.
  2. **3 priority hub pages verified/refined**
     (`src/data/academic/syllabuses.ts`): Cambridge A-level English
     Literature (9695) -- confirmed the successor 2027-2028 syllabus
     (721410) is already published and noted its unchanged four-paper
     structure; Cambridge O-Level Urdu (3247/3248) -- confirmed 3248's
     successor 2027-2029 syllabus (721465) is already published;
     Cambridge O-Level Computer Science (2210) -- checked against the
     board's own page and found already current, left unchanged. No
     internal-linking gap found for these pages: subject hub pages
     already auto-list every board/qualification combination via
     `offeringsForSubject()`, so no orphaned or under-linked priority
     page existed.
  3. **4 priority resource pages enriched**: added a direct-answer
     opening paragraph to each (Urdu O-Level Paper 1, Islamiyat IGCSE
     Paper 1, A-level Chemistry Group 2 trends, A-level Chemistry
     halogenoarenes), addressing Section 6's "answer the query in the
     first two sentences" requirement without altering existing content.
     Added "Related resources" sections (previously absent) to the Urdu
     and Islamiyat pages, cross-linking to the matching practice-question
     and revision-note resources plus the adjacent-level equivalent.
     Corrected one real staleness caught in the process: the Urdu
     O-Level Second Language (3248) resource page still cited the
     2024-2026 syllabus PDF; updated to the already-published 2027-2029
     successor (721465), consistent with the `syllabuses.ts` finding
     above.
  4. **6 remaining Section 7 query terms mapped to their correct
     canonical pages and verified/corrected**, closing the gap between
     the 8 named pages and the fuller query list:
     - "a level economics syllabus 2027" / "economics a level syllabus
       2027" -- Cambridge 9708 already current (2026-2028, unchanged);
       AQA 7136 confirmed genuinely current for June 2027 via AQA's own
       published key-dates page; Edexcel YEC11/XEC11 corrected to state
       honestly that it is an evergreen 2018 spec with no year-versioned
       reissue, rather than implying a "2027 syllabus" exists.
     - "cambridge a level english language syllabus" -- 9093 was stale
       (notes still cited the 2024-2026 version); corrected to the
       already-published 2027-2028 version (721359) with full paper
       weightings added.
     - "5070 syllabus 2028" / "physics o level syllabus 2028" -- brief
       mislabelled 5070 as Physics; corrected both real pages: O-Level
       Chemistry (5070, confirmed current, 2026-2028) and O-Level
       Physics (5054, confirmed current, 2026-2028, previously had no
       notes field at all -- added paper structure).
     - "edexcel igcse physics syllabus" -- 4PH1 already current (Issue
       4, September 2024), no change needed.
     - "cambridge a level accounting syllabus" -- 9706 updated to
       Version 2 (Dec 2025), added corrected topic-range and paper
       structure detail.
     - "estimation of physical quantities" -- confirmed the existing
       AQA A-level Physics resource covers this exactly; added a direct
       two-sentence answer opening (order-of-magnitude estimation,
       distinct from precise measurement).
     No future exam series was stated as confirmed unless found on the
     board's own official page; where a query implied a future syllabus
     that does not yet exist (Edexcel Economics, Edexcel IGCSE Physics
     as evergreen specs), this is stated honestly rather than silently
     dropped.
- **Guardrail check:** no redesign; no new pages created; no fact
  asserted without a board-cited source verified this session; existing
  content only added to, never rewritten or deleted; template change is
  the minimal shared fix rather than N one-off patches.
- **Status:** implemented on `feature/seo-phase4-priority-pages`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite, sitemap-noindex
  safeguard -- now 0 noindexed pages, confirming the earlier word-count
  expansion fully cleared the indexability bar -- audit:metadata,
  audit:structured-data, unit tests [13/13], npm audit [0
  vulnerabilities], tsc --noEmit, wrangler deploy --dry-run).

## D-028 — Phase 6: canonical/redirect audit and _redirects maintainability guard

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 6.
- **Context on scope:** the brief's Section 11 gives GSC category counts
  (385 alternate-canonical, 1 noindex-excluded, 489 crawled-not-indexed,
  48 discovered-not-indexed) and refers to "the supplied Google Search
  Console exports," but no actual URL-level export/file was ever
  provided in this session (only the summary counts survived the
  compaction that also lost the original brief, before it was
  re-pasted). Per the brief's own instruction to classify "the full
  export... where possible," and consistent with this engagement's
  standing rule to verify real repository/production state rather than
  guess, this phase proceeded as a repo-derived canonical/redirect
  health audit covering everything checkable from the actual built
  site and `_redirects` source of truth, rather than fabricating a
  385-row classification with no real data behind it.
- **What was built:** `scripts/audit-redirects.mjs` (new, wired to
  `npm run audit:redirects`), which reads the built `dist/` output and
  `public/_redirects` and checks five things: (1) no sitemap URL is
  also a redirect source; (2) no redirect chains or loops among the
  967 static rules; (3) every static redirect target resolves to a
  real built page; (4) no internal link in any built page points at a
  URL that is itself a redirect source (should link straight to the
  final destination); (5) no two different built pages emit the same
  `<link rel="canonical">` href. Also added a `_redirects`
  maintainability guard inside the same script: Cloudflare Pages caps
  `_redirects` at 2,000 static + 100 dynamic rules (confirmed via
  Cloudflare's own docs, matching the ceiling already noted in a code
  comment in `scripts/generate-redirects.mjs`); the audit now warns at
  85% of the static ceiling and fails outright at or over it, so
  future growth can't silently start dropping rules in production with
  no build-time signal. Current state: 967 static + 1 wildcard rule,
  well within headroom (~48% of the static budget).
- **Real findings, fixed:** the audit caught 2 genuine internal links
  pointing at redirect sources instead of final destinations --
  `the-basic-economic-problem-practice.md` and
  `fundamentals-of-accounting-practice.md` both had a hand-written
  "Related:" link to a pre-consolidation slug (from the Aug 23
  duplicate-content sweep, D-010) that 301-redirects rather than
  linking directly to the surviving resource. Both fixed to link
  straight at the real target
  (`igcse-economics-basic-problem-revision-notes`,
  `igcse-accounting-fundamentals-revision-notes`), verified both files
  exist as real content. Re-running the audit after the fix: 0
  problems (0 chains, 0 loops, 0 broken redirect targets, 0 sitemap/
  redirect overlaps, 0 duplicate canonicals, 0 redirect-pointing
  internal links).
- **No fixes needed for:** canonicals (generated identically from each
  page's own `path` prop via `Meta.astro` -- structurally can't
  diverge or duplicate, confirmed empirically across all 1,122 pages);
  redirect chains/loops (none exist); broken redirect targets (none).
- **Guardrail check:** no redesign; every finding traced to the real
  built site, not assumed; the two link fixes are single-line edits
  correcting a stale slug reference, nothing else touched.
- **Status:** implemented on `feature/seo-phase6-redirect-audit`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite, sitemap-noindex
  safeguard, audit:metadata, audit:structured-data, audit:redirects,
  unit tests [13/13], npm audit [0 vulnerabilities], tsc --noEmit,
  wrangler deploy --dry-run).

## D-029 — Phase 9: internal-link graph audit, sitewide

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 9.
- **What was built:** `scripts/audit-internal-links.mjs` (new, wired to
  `npm run audit:internal-links`), which reads the built `dist/` output
  and checks three things across every one of the 1,122 indexable
  pages: (1) no broken internal links -- every internal `href` resolves
  to a real built page or a valid `_redirects` source (a link that
  targets a redirect *source* rather than its destination is a
  separate finding, already covered by `audit:redirects` from D-028, so
  this script doesn't double-report it); (2) no orphan pages -- every
  sitemap URL except the homepage must have at least one inbound
  internal link from some other built page; (3) no non-descriptive
  anchor text ("click here", "read more", "here", "this page", "link",
  "learn more", "more" used as the full visible link text).
- **Independent confirmation of the earlier subagent finding:** the
  Phase 4 subagent (D-027) reported no internal-linking gap for the 3
  named priority hub pages, reasoning that subject hub pages already
  auto-list every board/qualification combination via
  `offeringsForSubject()`. This audit checks the claim exhaustively
  rather than by spot-check: result is 0 broken links, 0 orphan pages,
  0 generic-anchor instances across all 1,122 indexable pages and
  1,122 distinct internal link targets found. The subagent's finding
  holds sitewide, not just for the 3 pages it looked at directly.
- **Board-aware cross-linking:** the 4 priority resource pages already
  got board-appropriate "Related resources" links in D-027 (e.g. the
  Cambridge O-Level Urdu page links to the Cambridge IGCSE Urdu
  equivalent and to Edexcel A-Level Urdu, not to an unrelated board's
  unrelated subject). Extending this pattern sitewide to every resource
  page is the larger Phase 12 content-cluster effort, not a Phase 9
  scope item -- Phase 9 was link-graph *health* (broken/orphan/generic-
  anchor), which is now a permanent, enforced-on-every-build check.
- **Guardrail check:** no redesign; read-only audit script, no content
  or template changed this phase; the clean result reflects real
  measurement, not an assumption -- the full anchor-text and href graph
  of the built site was parsed, not sampled.
- **Status:** implemented on `feature/seo-phase9-internal-links`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite, sitemap-noindex
  safeguard, audit:metadata, audit:structured-data, audit:redirects,
  audit:internal-links, unit tests [13/13], npm audit [0
  vulnerabilities], tsc --noEmit, wrangler deploy --dry-run).

## D-030 — Phase 11: all 14 automated safeguard tests wired and green

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 11.
- **What was done:** mapped every one of the 14 required checks from
  Section 15 of the brief to a real, runnable script and ran the full
  set against the built site. 10 of the 14 were already enforced by
  scripts from earlier phases (Phase 2's `test-sitemap-noindex.mjs`;
  Phase 6's `audit-redirects.mjs`; Phase 9's `audit-internal-links.mjs`;
  Phase 10's `audit-structured-data.mjs`; the pre-existing
  `validate:academic` chain for board-aware filtering and syllabus-topic
  mappings). Two genuine gaps were closed this phase:
  - `scripts/audit-content-integrity.mjs` (new, `npm run
    audit:content-integrity`) -- covers items 4/5/6: no indexable
    zero-resource hub page (cross-checks the sitemap against the
    literal "no original Marlbridge resource yet" fallback phrase in
    each hub page's own rendered meta description); no metadata claim
    of N resources when the page body actually links to zero; no
    self-canonical that is itself a redirect source. Checked all 160
    academic hub pages, 0 problems.
  - `scripts/audit-fonts.mjs` (new, `npm run audit:fonts`) -- covers
    item 13: hashes every file in `public/fonts/` and fails if two
    files declaring DIFFERENT weights are byte-identical, which is
    exactly the bug found and hand-fixed in D-025 (a Google Fonts CSS2
    API quirk silently returned the 400-weight binary for a 500-weight
    request). That fix was never previously backed by a regression
    test; it is now. Checked 14 font files, 14 distinct binaries, 0
    problems.
  - Both new scripts wired into `package.json`, plus a new `npm run
    audit:all` convenience script chaining all six `audit:*` checks and
    the sitemap-noindex safeguard in one command.
  - Full mapping table (all 14 items, which script enforces each, and
    the clean result) written to
    `docs/reports/phase11-safeguard-tests.md`.
- **Guardrail check:** no redesign; two new read-only audit scripts, no
  content or template changed this phase; every "PASS" in the mapping
  table reflects a real script execution against the real built output
  this session, not an assumption of correctness.
- **Status:** implemented on `feature/seo-phase11-safeguard-tests`, full
  validation gate green (astro check, validate:academic, build, cross-
  board-regression, negative-validation-suite, `npm run
  audit:all` [all 6 checks + sitemap-noindex], unit tests [13/13], npm
  audit [0 vulnerabilities], tsc --noEmit, wrangler deploy --dry-run).

## D-031 — Phase 12: resource clusters for Urdu, Islamiyat, English Literature, Computer Science, Economics, Accounting

- **Date:** 2026-08-25/26.
- **Workstream:** Aug 2026 SEO remediation, Phase 12.
- **Scope decision:** the coverage report (`npm run coverage:academic`)
  showed real, uncovered topic gaps in every one of the 6 priority
  subjects across every board/qualification -- full coverage would have
  meant many dozens of new syllabus-verified resource files. Asked the
  user how to scope this; chosen approach was one complete, well-
  verified cluster (study guide + revision notes + practice questions,
  cross-linked) per subject, targeting the single highest-value real
  gap in each -- matching the brief's literal wording and keeping the
  batch of new content bounded and fully verifiable in one session.
- **Gap identification method:** rather than trust filename-pattern
  matching (which produced two false positives -- see below), wrote a
  one-off Python script grouping every resource by its
  `(boards, qualifications, syllabusTopics)` triple and flagging any
  study-guide group with no matching revision-notes/practice-questions
  in the SAME group. This caught two real false leads before any agent
  wasted effort on them: `a-level-oxfordaqa-computer-science-procedural-
  programming.md` already had a matching cluster under the differently-
  named `a-computer-science-procedural-revision-notes.md` /
  `-practice.md`; `a-level-oxfordaqa-accounting-role-of-the-accountant.md`
  already had one under `a-accounting-role-revision-notes.md` /
  `-practice.md`. Both were confirmed via frontmatter (`boards`,
  `syllabusCodes`, `syllabusTopics`), not guessed. Result: Computer
  Science and Accounting already had a complete cluster before this
  phase started -- no new content was needed for either, and none was
  fabricated to hit an artificial "6 clusters" quota. Only "Related
  resources" cross-links were added to those two guides, completing the
  triad's explicit interlinking without duplicating content.
- **4 real gaps found and filled**, each verified against the relevant
  official board syllabus (via WebSearch/web_fetch for 3, and directly
  from the existing guide's own already-cited, already-verified 2026
  syllabus PDF for the 4th):
  - **Urdu** -- Cambridge O-Level 3247/3248, Paper 1 Reading and
    Writing: `o-level-cambridge-urdu-first-and-second-language-
    revision-notes.md` and `-practice.md` (new).
  - **Islamiyat** -- Cambridge O-Level 2058, Paper 1:
    `o-level-islamiyat-paper-1-revision-notes.md` and `-practice.md`
    (new).
  - **English Literature** -- Cambridge A-Level 9695, Paper 1 Drama and
    Poetry: `a-level-english-literature-paper-1-drama-and-poetry-
    revision-notes.md` and `-practice.md` (new). English Literature had
    ZERO complete clusters anywhere in the repo before this phase,
    across every board -- the largest real gap of the 6 subjects, and
    directly relevant since Cambridge A-Level English Literature was
    one of the 8 named GSC priority pages from Phase 4. Practice
    questions use original, Marlbridge-written extracts rather than any
    named current set text, since the current examination series' set
    texts could not be independently confirmed this session -- avoiding
    the fabrication risk explicitly guarded against in this project's
    standing rules.
  - **Economics** -- Cambridge O-Level 2281, Topic 2 The Allocation of
    Resources: `o-level-economics-the-allocation-of-resources-revision-
    notes.md` and `-practice.md` (new, written directly from the
    existing guide's content, which was itself verified against the
    official 697295-2026-syllabus.pdf on 2026-08-24 -- no new external
    research needed since the guide already carried full section-by-
    section coverage of 2.1 through 2.11).
- **Cross-linking:** all 6 guide files (2 pre-existing complete + 4
  newly-completed) now carry a "Related resources" section pointing to
  their revision-notes and practice-questions siblings, and each new
  revision-notes/practice-questions file links back to its guide and to
  its sibling.
- **Guardrail check:** no redesign; no fabricated syllabus facts, mark
  schemes, or set texts; no duplicate content created (2 planned
  clusters turned out to already exist and were left alone rather than
  padded); every practice-questions file opens with the sitewide
  original-content disclaimer.
- **Status:** implemented on `feature/seo-phase12-resource-clusters`,
  full validation gate green on the combined 1,130-page build (astro
  check, validate:academic, build, cross-board-regression, negative-
  validation-suite, `npm run audit:all` [all 6 audits + sitemap-
  noindex safeguard], unit tests [13/13], npm audit [0 vulnerabilities],
  tsc --noEmit, wrangler deploy --dry-run).

## D-032 — QIGT Section 3: real publication-state enforcement + editorial-policy honesty fix

- **Date:** 2026-08-26.
- **Workstream:** Quality/Indexing/Growth/Trust (QIGT) remediation programme, Section 3 (Quality assurance).
- **Baseline finding:** the required `reviewStatus` enum
  (draft/review-pending/reviewed/changes-requested/archived) and `reviewer`
  reference already existed in `content.config.ts` for resources and
  articles (from an earlier session, docs/decision-log.md D-006). Current
  real data is honest -- 0 of 731 resources and only 1 of 4 articles
  claim `reviewed`, with a real, sourced reviewer on file for that one
  article. But NONE of this was enforced or displayed anywhere: no page
  template read `reviewStatus`/`reviewer`/`isReviewer`, no JSON-LD builder
  emitted a reviewer, and no validator checked the rules the schema
  implies. A genuine, verified gap existed in draft/archived gating:
  resources had no filtering mechanism at all (a `draft` or `archived`
  resource would still build, index and appear in the sitemap); articles
  had a working boolean `draft` field but a SEPARATE, unchecked
  `reviewStatus: "draft"` enum value that could silently disagree with it;
  authors had an equivalent unenforced `publicationState` field.
- **What was built:**
  - `reviewedDate` (optional, coerced date) added to both resources and
    articles schema -- when a genuine review actually happened, distinct
    from authoring dates.
  - `getResources()`, `getArticles()`, `getAuthors()`
    (`src/utils/content/collections.ts`) now all exclude `draft` content
    from routing by default; `getArticles()` also now checks
    `reviewStatus !== 'draft'` in addition to the pre-existing boolean
    field, reconciling the two mechanisms so they cannot disagree.
    `src/utils/content/related.ts` and `resourcesAvailableFor()`
    (`src/utils/content/status.ts`) — every place that lists, links to, or
    counts resources/articles — updated the same way, so a draft item
    can never appear in a listing, related-content block, or subject
    resource-count badge whose own page doesn't actually get built.
  - `astro.config.mjs` gained `buildArchivedContentExclusions()` (mirrors
    the existing `buildIndexabilityExclusions()` pattern): `archived`
    resources/articles still build (so old links don't 404) but are
    excluded from the sitemap, matching the page-level `noindex` the
    templates now derive from `reviewStatus === 'archived'`.
  - `src/pages/resources/[slug].astro` and `src/pages/articles/[slug].astro`
    both now compute a single `genuinelyReviewed` boolean (reviewStatus
    is exactly `'reviewed'`, AND the `reviewer` reference resolves, AND
    that author has `isReviewer: true`) and reuse the SAME computed value
    for both the visible "Reviewed by [name] on [date]" byline and the
    JSON-LD `editor` property (new optional param on
    `articleNode()`, `src/utils/schema/article.ts`) -- there is no
    separate code path where schema could claim a reviewer the page
    itself doesn't show.
  - `scripts/validate-review-integrity.mjs` (new, wired into
    `npm run validate:academic`): reviewStatus "reviewed" or
    "changes-requested" requires a `reviewer` field; that reviewer must
    exist in `src/content/authors/`; that author must have
    `isReviewer: true`; `reviewedDate` must not precede `publishedDate`
    and must not be in the future. Applies identically to every
    `resourceType` -- practice-questions and exam-preparation get no
    weaker rule, addressing the brief's specific concern about those
    types.
  - 5 new negative-fixture tests added to
    `scripts/test-negative-validation-suite.mjs` (section [I]), each
    mutating a real resource file, asserting the validator fails with
    the right message, and restoring the original -- all 5 pass (11/11
    suite total).
  - `docs/reports/review-priority-queue-2026-08-26.md`: the required
    review-priority queue. GSC-based criteria (impressions, positions
    4-20) are explicitly flagged as unavailable this session (no export
    supplied) rather than fabricated; the remaining criteria are
    data-driven from the real repository (225 worked-answer/practice
    resources, 58 on a confirmed spec-transition syllabus, 204 with a
    named author, 244 remainder).
- **Real, verified editorial-policy contradiction found and fixed:**
  `src/pages/legal/editorial-policy.astro` stated "Marlbridge has not yet
  published real, named individual author profiles" and that content
  "carries the Marlbridge Academic Team byline... until real individual
  author profiles are introduced." This is false today: 373 of 731
  resources (majority) already carry a real named individual author
  (`nouman-ahmed`, `iftikhar-azeemi`, `muhammad-ghazali-siddiqui`, and 5
  others), each with a genuine, sourced author page. Rewrote the
  "Editorial policy" and "Authorship and accountability" sections to
  describe the real current state (most resources named-authored, a
  minority organisationally bylined, author pages state only verified
  facts, author and reviewer are explicitly distinct roles). Also
  rewrote "Academic review policy" to honestly describe the newly-
  enforced reviewer model instead of flatly denying any reviewer
  mechanism exists -- it now states plainly that review is real but
  incomplete (one article reviewed so far, the rest honestly
  review-pending), rather than either overclaiming or underclaiming.
  `lastUpdated` bumped to 26 August 2026.
- **Guardrail check:** no fact invented -- every authorship/reviewer
  count cited in the policy rewrite was grepped directly from the
  content files, not assumed; no resource or article was bulk-marked
  reviewed; archived/draft handling is additive (no existing content
  changed state) and only activates once a future editor actually sets
  one of those values.
- **Status:** implemented on `feature/qa-review-integrity`, full
  validation gate green (astro check, validate:academic [now including
  validate-review-integrity.mjs], build, cross-board-regression,
  negative-validation-suite [11/11], `npm run audit:all`, unit tests
  [13/13], npm audit [0 vulnerabilities], tsc --noEmit, wrangler deploy
  --dry-run).

## D-033 — QIGT Section 4: indexing-efficiency audit + /search/ noindex fix

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 4 (Indexing efficiency).
- **Scope note:** the brief's GSC baseline (501/923/385/489/48/1) comes
  from an export not re-available this session and predates the entire
  preceding SEO remediation programme (D-023 through D-031). Rather than
  force a stale reconciliation, verified the CURRENT technical state
  directly -- full itemised results in
  `docs/reports/qigt-indexing-workstream-2026-08-26.md`.
- **Real gap found and fixed:** `/search/` (the Pagefind results page)
  was indexable despite having no fixed content of its own -- results
  render entirely client-side into a container no crawler populates.
  Added `noindex={true}` to `src/pages/search/index.astro` and excluded
  `/search/` from the sitemap in `astro.config.mjs`. Deliberately made
  the page-level fix first and ran `test-sitemap-noindex.mjs` before the
  sitemap-side fix -- it correctly failed ("in the sitemap but its own
  page renders a noindex robots meta tag"), real proof the safeguard
  built in the prior programme (D-023/D-024) actually catches drift
  rather than just existing.
- **Everything else checked came back clean, not re-implemented:**
  self-canonicals (structurally guaranteed by `Meta.astro`), HTTP→HTTPS
  redirect (verified live), trailing-slash consistency
  (`trailingSlash: 'always'`), no redirected/noindexed/chained/looped
  URLs in the sitemap (already enforced by `audit-redirects.mjs` and
  `test-sitemap-noindex.mjs` from the prior programme), robots.txt
  access, sitemap-index validity, query-parameter indexability (the
  `/resources/` filters are client-side DOM filtering, no URL params
  generated), locale hreflang/canonicals (verified against the existing
  i18n architecture, no change needed).
- **www/non-www finding, explicitly NOT fixed here:** `www.marlbridge.com`
  does not resolve at all (times out), rather than redirecting to the
  bare domain. This is a DNS/Cloudflare-dashboard setting outside this
  repository -- recorded as an infrastructure recommendation, not
  silently left unmentioned, and not attempted without dashboard access
  being explicitly requested.
- **Redirect-inventory audit:** reviewed every redirect-generation
  category in `scripts/generate-redirects.mjs` against its own
  documented rationale; found no synthetic, never-public, speculative
  redirect -- every rule traces to a genuinely-was-live URL shape
  (flattened resource type-prefixed paths, the `/learning/` → `/articles/`
  rename, or a named, dated, decision-logged content consolidation). No
  redirects removed.
- **Page-uniqueness / crawled-not-indexed risk:** the templates most
  likely responsible for that GSC category (thin academic hub pages)
  were the direct subject of the immediately preceding SEO programme;
  re-verified 0 remain below the substantial-original-guidance bar
  (`audit-content-integrity.mjs`, 160/160 checked, 0 problems). No
  further consolidation identified as necessary without a fresh,
  URL-level GSC export to confirm which specific pages are still
  affected.
- **Guardrail check:** no canonical URL changed; the one fix made
  (`/search/` noindex) does not remove or hide the page from users, only
  from search indexing, and is the standard, widely-recommended
  treatment for a client-rendered internal search page.
- **Status:** implemented on `feature/qigt-indexing-repairs`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite [11/11],
  `npm run audit:all`, unit tests [13/13], npm audit [0 vulnerabilities],
  tsc --noEmit, wrangler deploy --dry-run).

## D-034 — QIGT Section 5: trust-consistency workstream (pricing display, teaching-location, authorship, licensing, trial flow)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 5 (Trust consistency).
- **Pricing display bug fixed (duplicated currency):** `src/pages/pricing/index.astro` rendered every fee as
  `{symbol} {amount} {currency}/unit` -- for regions where the symbol already IS the ISO code (SAR, AED, QAR,
  KWD, BHD, OMR) this produced literal duplication ("SAR 270 SAR/subject/month"), and even where symbol and
  code differ (Rs/PKR, £/GBP) it showed both together, exactly the defect class the brief named. Standardised
  every fee cell, the IB card and both pricing FAQ answers on a single format -- amount + ISO currency code
  only, unit stated separately (e.g. "270 SAR /subject/month", "19,000 PKR /subject/month") -- across the two
  region tables, the one-to-one table, the IB card and the two FAQ answers that previously spelled out symbol
  + code together. No amount, rounding or region was changed; `src/data/pricing.ts` (the canonical source) was
  not touched. Confirmed the three localised homepages (`/ar/`, `/bn/`, `/ur/`) do NOT have this bug -- they
  already show currency in its own labelled table column, separate from the symbol+amount cell, and needed no
  change. Re-ran `validate-pricing-consistency.mjs` after the fix -- still 0 hard-coded fee values outside
  `pricing.ts` across 879 files.
- **Teaching-location wording:** checked homepage (`GlobalVision.astro`), About, Tutoring and Contact for
  consistency. All four already say the same thing in compatible wording -- in-person teaching in Pakistan,
  online for learners elsewhere, resource library open to anyone -- no contradiction found, no change made.
- **Authorship-policy contradiction found beyond D-032's editorial-policy fix:** `src/pages/about/index.astro`
  still claimed "Study material published on Marlbridge is written **and reviewed** by subject specialists"
  (an unqualified, blanket review claim) and separately implied ALL published work carries the organisational
  "Marlbridge Academic Team" byline. Both were false against current data: only 1 of 735 published
  resources+articles has `reviewStatus: reviewed` (`where-igcse-maths-marks-are-lost-early.md`; re-verified
  directly via grep against `src/content/`, matching the review-integrity validator's own count), and 373/731
  resources already carry a real named author, not the organisational byline (the same fact D-032 already used
  to fix `editorial-policy.astro`). Rewrote both paragraphs on About to state the true, current split (most
  resources named-authored, a minority organisationally credited; review is a separate, accountable,
  not-yet-universal check) -- bringing About into the same honest framing D-032 already established elsewhere,
  rather than inventing new wording independently.
- **Licensing contradiction found and reconciled:** `/schools/` explicitly tells schools "No licence, no
  account, no attribution required" to use published resources with their classes, while `/legal/terms/`'s
  "Using our content" section told the same audience to "write to us first" for exactly that use -- a direct
  page-to-page contradiction for the same audience (not just vague inconsistency). Reconciled by narrowing
  Terms to carve out an explicit exception matching what Schools already grants (class use, no permission
  needed) while keeping the "write to us first" requirement for the different, still-real cases Terms actually
  intends to gate -- republishing under another name, resale, other partnerships. Did not touch the sitewide
  footer copyright notice ("© 2026 Marlbridge. All rights reserved.") -- a standard ownership assertion, not
  itself a reuse restriction, so it does not conflict with a specific permission grant elsewhere. The deeper
  question of exactly how far the schools' class-use permission extends (bulk printing, LMS upload,
  modification) is a genuine unresolved scope question, not something inferable from existing wording --
  flagged for the business-decisions register (task #81), not resolved here.
- **Free Trial Class form flow built:** the header/mobile-menu "Free Trial Class" button previously linked to
  the generic five-field `/contact/` enquiry form (`kind="student"`), with qualification/board/subject/level
  left to free-text in the message hint -- exactly the gap the brief named. Added a `trial` `EnquiryKind`
  (`functions/_lib/enquiry-validation.ts`, `src/utils/forms/submit.ts`) with structured required fields
  (qualification, exam board, subject) plus optional availability, and a new dedicated page at `/trial/`
  (`routes.trial`) using `EnquiryForm kind="trial"`; both header buttons now point at `/trial/` instead of
  `/contact/`. Qualification/board/subject dropdown options are read live from `QUALIFICATIONS`/`BOARDS`/
  `SUBJECTS` in `src/utils/academic/`/`src/data/academic/` (the same verified academic-matrix data every board
  hub page already uses), plus IELTS and "General academic support" added on top since both are genuinely
  taught per the existing Contact FAQ but sit outside the examined-syllabus matrix. Deliberately did NOT add a
  separate "level" field distinct from qualification -- in this site's own data model qualification already IS
  the level (see `LEVEL_FOR_QUALIFICATION`), so a second field would either duplicate it or invent a
  schooling-year concept the site does not otherwise use; documented this consolidation in the code comment
  rather than silently doing something different from the brief's literal field list. The submission
  confirmation copy states plainly this is a request, not a confirmed booking, and makes no response-time
  promise (none exists to promise). Added 5 new unit tests for the `trial` kind (required-field validation,
  successful submission, email-body rendering) -- `functions/api/__tests__/enquiry-validation.test.mjs` now
  16/16 passing; updated `test-negative-validation-suite.mjs`'s stale "11 cases" reference to 16.
- **Explicitly identified as genuinely unresolved, not invented an answer for:** discount stacking (can the
  multi-subject and sibling discounts combine?), class duration/frequency, cancellation/refund rules, payment
  schedule/fees, and the precise scope of the schools' content-licence grant. All five are real gaps in
  publicly stated policy, none inferable from existing evidence -- routed to the business-decisions register
  (task #81) rather than guessed at here.
- **Guardrail check:** no business fact, price, or academic claim was invented; `pricing.ts` amounts are
  unchanged; the only qualification/board/subject options exposed anywhere are ones the site already publicly
  claims to teach.
- **Status:** implemented on `feature/qigt-trust-consistency`, full validation gate green (astro build,
  `validate:academic` chain incl. `validate-pricing-consistency.mjs` and `validate-review-integrity.mjs`,
  `audit:all`, `enquiry-validation.test.mjs` [16/16], `test-negative-validation-suite.mjs` [11/11]).

## D-035 — QIGT Section 6: demand-led optimization audit of 10 named GSC priority pages

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 6 (Demand-led search optimization).
- **Scope:** the 10 pages the brief named as ranking positions 4-20 for real queries --
  4 board-hub pages (`/boards/cambridge/a-level/english-literature/`,
  `/boards/cambridge/o-level/urdu-language/`, `/boards/oxfordaqa/igcse/pakistan-studies/`,
  `/boards/cambridge/igcse/urdu-language/`) and 6 resource pages (`o-level-cambridge-urdu-first-and-second-language`,
  `igcse-islamiyat-paper-1`, `a-group-2-quantitative-trends`, `organic-chemistry-formulae-and-naming`,
  `a-physics-medical-physics-revision-notes`, `a-arenes-and-halogenoarenes`), each re-checked fresh against a
  12-point on-page checklist (direct-answer opening, title/description with spec code, visible syllabus code,
  topic-mapped headings, tables where useful, real cross-linking, accurate schema, currency of any spec-code/year
  claims) rather than assumed already-done from the prior SEO programme's Phase 4/Phase 12 work.
- **7 of 10 already compliant, verified not re-edited:** the board-hub template
  (`src/pages/boards/[board]/[qualification]/[subject].astro`) already generates the checklist items
  programmatically for every combination (code-bearing title/lead, direct-answer opening, syllabus-topic
  headings from real board data, honest resource counts, cross-links, accurate `Course` schema), so all 4 hub
  pages passed as-is; 3 of the 6 resource pages (Urdu O-Level/1st-2nd-language, Islamiyat Paper 1, organic
  chemistry naming) were already compliant from the prior programme's work.
- **3 real, narrow gaps found and fixed:** `a-group-2-quantitative-trends.md` and
  `a-arenes-and-halogenoarenes.md` each ended their "Related resources" list with a bare, unlinked "Cambridge
  AS & A Level Chemistry hub" line while every sibling bullet was a real link -- both linked to
  `/boards/cambridge/a-level/chemistry/`. `a-physics-medical-physics-revision-notes.md` opened with generic
  sitewide boilerplate ("Condensed for the final weeks...") with its syllabus code (9702) appearing only in
  frontmatter, never in visible text -- rewrote the opening to name topic/code/series up front and added a
  "Related resources" section linking to the parent study guide and the Physics board hub. Diff: 3 files,
  11 insertions, 3 deletions -- no new pages, no amounts/facts invented, no bulk content added.
- **No syllabus code/year corrections needed:** spot-checked against Cambridge's own published pages for
  9695 (Literature in English) and 3247 (Urdu First Language) -- both already matched `src/data/academic/
  syllabuses.ts`.
- **Explicitly out of scope, flagged not fixed:** ~30 other `*-revision-notes.md` files across the site share
  the same "Condensed for the final weeks..." generic-opening convention as the one file fixed here -- a
  sitewide pattern, not one of the 10 named pages, left untouched rather than expanding scope unprompted.
- **Guardrail check:** no canonical URL, price, credential or syllabus fact changed; every added link points to
  a real, already-published page.
- **Status:** implemented on `feature/qigt-demand-optimization` (delegated to a subagent with the full checklist
  and ground rules, diff verified directly against the report before merge), full validation gate green
  (`npm run build` 1132 pages, `validate:academic`, `audit:all`, `npm run check` -- 0 errors/warnings/hints).

## D-036 — QIGT Section 7 (search): Pagefind primary-content scoping + filters

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 7 (Search/Pagefind).
- **Primary-content region fixed:** the production build log showed "Did not find a
  data-pagefind-body element on the site -- Indexing all `<body>` elements", meaning every
  search result on the site carried duplicate header nav, footer and WhatsApp-button text
  alongside the real content, diluting relevance. Added `data-pagefind-body` to the single
  `<main id="main">` element in `src/layouts/BaseLayout.astro` and `src/layouts/LocaleLayout.astro`
  -- together these two `<main>` elements are the sole content wrapper for every page on the
  site (`PageLayout.astro` wraps `BaseLayout.astro`; only `en`/direct-`BaseLayout` pages and the
  three locale pages exist). Confirmed via a clean rebuild: "Found a data-pagefind-body element
  on the site -- Ignoring pages without this tag."
- **Filters added, all from real existing frontmatter, none invented:** `src/pages/resources/[slug].astro`
  now tags Subject and Level (already visible fields) plus Board, Qualification and Resource
  type (not otherwise displayed on this template) via `data-pagefind-filter`; Board/Qualification/
  Resource-type use a `hidden aria-hidden="true"` block since making them visible for the first
  time on 731 pages was outside this workstream's scope -- Pagefind's own docs confirm filter
  capture still applies inside a hidden element. `src/pages/articles/[slug].astro` tags Subject
  (existing visible links) and a literal "Article" Resource-type value. Verified in the built
  HTML that captured values are real and correct (e.g. `Board:Cambridge`, `Qualification:A Level`,
  `Resource type:Study Guides`) -- rebuild log confirms "Indexed 5 filters". `/search/`'s existing
  Default Pagefind UI (`PagefindUI`, no config change made) auto-renders filter checkboxes for
  any indexed filter, per Pagefind's own UI documentation -- no separate filters config needed.
- **Not touched:** the `/resources/` index page's own client-side subject/level dropdown filters
  (already built, task #56/D-pre-QIGT) -- a separate system from Pagefind search, out of this
  item's scope. The Default vs. Component Pagefind UI choice -- left on Default UI (still
  supported per Pagefind's own docs) rather than migrating to Component UI, since that would be
  a UI rebuild disproportionate to what this workstream asked for.
- **Guardrail check:** every filter value is read live from the same frontmatter/data files every
  other page on the site already uses (board/qualification names from `src/data/academic/`,
  resource-type titles from `resourceCategoryMeta`) -- nothing hand-typed, nothing new claimed.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-search-filters`, full
  validation gate green (`npm run build` -- 1132 pages, 5 filters indexed; `validate:academic`;
  `audit:all`; `npm run check` -- 140 files, 0 errors/warnings/hints).

## D-037 — QIGT Section 7 (IA): empty-category navigation + subject-summary qualification honesty

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, IA/homepage-honesty item (task #78).
- **Empty categories confirmed:** Past Papers and Exam Preparation (`resourceType` values) genuinely have
  0 published resources (verified directly against `src/content/resources/`); Learning Articles (a third
  `resourceType`, distinct from the separate `articles` collection) also has 0. `/resources/` itself already
  handled this honestly from an earlier session (`v1.x CLOSURE WS6`) -- every type gets a real section with a
  truthful "No ... published yet -- in development" state, never hidden, never filled with filler. That page
  was NOT changed. What was fixed: two of the three empty categories (Past Papers, Exam Preparation) were
  linked from `footerNav.resources` in `src/data/navigation.ts` -- meaning literally every one of 1132 pages
  on the site repeatedly promoted two empty sections in its footer. Removed both from the footer nav (leaving
  the sections themselves fully intact and reachable via `/resources/`) and added "Practice Questions" in
  their place -- a real, 225-resource category that, oddly, was not previously linked from the footer at all.
  Same fix applied to the homepage's own resource-category card grid (`src/components/sections/
  ResourcesSection.astro`, the single most prominent page on the site): now filters to categories with
  `counts[slug] > 0` before rendering, so the homepage shows 4 real categories instead of 7 (including 3 that
  read "0 published"). Learning Articles was never linked from footer/homepage to begin with, so no change
  was needed there beyond what `/resources/` already does.
- **Subject-summary qualification-label honesty -- a real, more serious bug than expected:** while checking
  the homepage subject cards (`SubjectsSection.astro`, which display each subject's hand-authored
  `levelsLabel` frontmatter string), cross-referenced all 35 subjects' `levelsLabel` against the real,
  currently-ACTIVE academic matrix (`activeOnly()` logic re-derived independently) and confirmed against
  actually-built pages in `dist/boards/`. Found 11 subjects where the label was wrong -- not just on the
  homepage, but on the subject's own hub page (`/subjects/<slug>/`), which displays the same string directly
  above a "Choose your board and qualification" section listing the real combinations live -- meaning these
  pages were self-contradicting. Two kinds of error: **omission** (biology/chemistry/physics/geography/
  computer-science/world-history each missing "IB Diploma Programme" despite a real, live `/boards/ib/ib-dp/
  <subject>/` page existing; several also missing GCSE; mathematics missing "IB Middle Years Programme";
  business missing IGCSE, GCSE, AS Level AND IB DP; economics and psychology each missing 2-3 real
  qualifications) and **false claim** (Accounting's label said "O · A Level" -- Cambridge O Level Accounting
  does not exist in the matrix and no such page has ever been built; the real offering is IGCSE + A Level).
  Corrected all 11 `levelsLabel` values in `src/content/subjects/*.md` to exactly match the live matrix,
  verified programmatically afterward (33/35 subjects now parse-clean against the matrix; the remaining 2 --
  English and Languages -- are deliberately not qualification-enumerable this way: English spans multiple
  canonical subject entities and Languages already uses the honest "Selected levels" label for the same
  reason, both left untouched). Re-verified the two most-affected labels (`Accounting`, `Economics`) directly
  in the rebuilt HTML.
- **Guardrail check:** every corrected qualification claim was verified against a real, live, already-built
  page (`dist/boards/.../index.html`) before being added -- nothing added on the strength of the matrix data
  alone. No canonical URL changed; no resource content added; the empty-category sections themselves were not
  deleted, hidden from search, or altered in wording.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-ia-honesty`, full validation gate
  green (`npm run build` -- 1132 pages; `validate:academic`; `audit:all` incl. 0 orphan pages after the nav
  change; `npm run check` -- 140 files, 0 errors/warnings/hints).

## D-038 — QIGT Section 8: AEO/GEO/AIO schema and llms.txt truthfulness pass

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 8 (AEO/GEO/AIO / structured data / llms.txt).
- **Scope:** audited every schema-emitting utility (`src/utils/schema/*.ts`) and every `llms.txt` data path
  against the brief's specific concerns -- FAQ schema mirroring, Course/offering exaggeration,
  Organization/EducationalOrganization identity conflicts, and draft/archived content leaking into `llms.txt`.
  `npm run audit:structured-data` already checks syntactic validity (valid JSON, `@type`/`@context` present)
  but not semantic truthfulness, so this pass was manual/targeted rather than re-running an existing script.
- **FAQ schema mirroring -- verified airtight, no fix needed:** checked all 7 call sites of `faqNode()`
  (`/trial/`, `/contact/`, `/pricing/`, subject hubs, board hubs, qualification hubs, program pages) and
  confirmed every single one passes the exact same array to `faqNode()` and the visible `<FAQ items={...}>`
  component -- structurally guaranteed to match, not just currently matching.
- **Course schema -- verified minimal, no fix needed:** `courseNode()` emits only name/description/provider,
  no `offers`, `aggregateRating`, `hasCourseInstance` or enrollment claims; both call sites are gated to only
  ever run for genuinely ACTIVE, Marlbridge-taught combinations (one explicit check, one structurally
  guaranteed by route generation itself already filtering to `isPublishable()`).
- **Organization/EducationalOrganization identity -- verified no conflict, no fix needed:** exactly one
  `EducationalOrganization` node exists site-wide (`organization.ts`'s `siteGraph()`, `@id`
  `/#organization`); the "Marlbridge Academic Team" org-byline uses a distinct `Organization` type with its
  own `@id` and an explicit `parentOrganization` link back to the main entity (pre-existing design from an
  earlier session, `v1.2 WS7`) -- confirmed by grepping the entire codebase for the literal
  `'EducationalOrganization'` string (exactly one occurrence).
- **Real gap found and fixed -- llms.txt draft-resource leak:** `scripts/generate-llms-txt.mjs`'s "Study
  resources" line already only names resourceType categories with at least one real file present (a prior
  session's `v1.2 WS8` fix, still correct) -- but it counted ANY file with that `resourceType`, including a
  hypothetical `reviewStatus: draft` one, which never builds a page and is unreachable
  (`getResources()` excludes drafts -- see D-032/#73). Currently 0 draft resources exist, so this was not yet
  producing a live false claim, but it is a real, verified latent bug that would silently misstate the file's
  own stated honesty guarantee ("cannot appear here unless it already has a real, publishable page") the
  moment the draft state -- now a real, enforced feature -- is actually used. Added a `reviewStatus === 'draft'`
  skip. Confirmed behavior-preserving for current content (`git diff public/llms.txt` -- no output) and
  confirmed the existing negative-fixture test `[E]` (adds/removes a past-papers resource, asserts the line
  appears/disappears) still passes unchanged.
- **llms.txt never described as a ranking mechanism:** grepped the entire `src/` tree for any public-facing
  mention of `llms.txt` -- none exists anywhere on the site, so there is no description of it to be wrong
  about.
- **Guardrail check:** no schema property, FAQ answer, course description or llms.txt line was added or
  reworded with new claims -- the only change was closing a latent gap in an existing draft-exclusion rule.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-aeo-truthfulness`, full validation
  gate green (`npm run build`; `validate:academic`; `audit:all`; `npm run check` -- 0 errors/warnings/hints;
  `enquiry-validation.test.mjs` 23/23; `test-negative-validation-suite.mjs` 11/11 incl. `[E]`).

## D-039 — QIGT Section 9: performance + accessibility, fresh multi-page evidence

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 9 (Performance + accessibility).
- **Method:** real Lighthouse v13.4.1 runs (mobile, simulated throttling) against a local
  `astro preview` server built from this exact session's code -- not production, since several
  of today's merges might not have finished deploying at measurement time (production
  verification belongs to the deployment workstream, #83). Full method note, including how
  Chrome was made to run in this sandbox (`apt-get download` + `dpkg-deb -x` + `LD_LIBRARY_PATH`,
  no root required), and the complete before/after metrics table for all 6 required pages
  (homepage, resource page, board hub, resources index, Free Trial form, search) are in
  `docs/reports/qigt-performance-accessibility-2026-08-26.md`.
- **Real accessibility bugs found and fixed (all verified with a second Lighthouse pass, not
  assumed):**
  1. `--color-gold-600` (`src/styles/global.css`) measured 4.47:1 against `--color-ivory` --
     just under the 4.5:1 AA threshold -- flagged on every page tested. Darkened to `#7A5E10`
     (5.56:1 ivory, 6.11:1 white).
  2. `text-gold-500` (the on-navy gold token) was misused on light-surface numbered-list markers
     in `ResourcesSection.astro` and `resources/index.astro` -- switched to `text-gold-600`.
  3. Resource/article markdown body links relied on color alone to be distinguishable from
     surrounding text (axe `link-in-text-block`) -- added a scoped underline rule to the
     `<Content />` wrapper in both templates.
  4. The cookie-consent banner's Cookie Policy link had no explicit text color, so it fell
     through to the global light-background `a` color rule -- **1.1:1 contrast** against the
     banner's navy-900 background (essentially unreadable). Added `text-on-navy`.
  5. Footer copyright/founding-year text used a hardcoded `#6E7D93` (4.38:1 against navy-900,
     under threshold) instead of the existing `text-on-navy-mute` token (8.06:1) -- swapped in.
  - Net result: accessibility went from 93-97 across the 6 pages (color-contrast failing on
    all 6, link-in-text-block on 1) to **100/100 on all 6**, confirmed by rerunning Lighthouse
    after each fix.
- **Real performance issue found, documented, NOT fixed this pass:** `/resources/` scores
  Performance 71 with a 1,370ms Total Blocking Time. Root cause verified directly via the
  `mainthread-work-breakdown` audit: the page renders all 731 resource cards into the DOM at
  once (existing subject/level filters hide non-matching cards via the `hidden` attribute
  rather than removing them), producing ~5,200 DOM nodes and 3.7s of Style & Layout work on
  first paint. A structural fix (pagination, virtualization, or lazy per-section rendering)
  would mean restructuring the existing, working, already-tested client-side filter logic --
  more risk than this workstream's "smallest safe change" scope justifies without dedicated
  follow-up testing. Recorded as a recommendation for a future session rather than either
  silently left unmentioned or rushed under time pressure.
- **Confirmed already compliant, not touched:** heading order, accessible names/labels, ARIA
  attributes, `html[lang]`, form-field labeling, tabindex/focus order, target size -- none of
  these were ever flagged by axe-core across any of the 6 pages, in either the before or after
  run.
- **Guardrail check:** every color change is a token-level fix restoring an already-intended
  design relationship (a token's stated purpose vs. its actual measured contrast) -- no new
  color was invented, no visual redesign occurred, and each fix was scoped to exactly the
  elements that were actually failing.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-perf-a11y`, full
  validation gate green (`npm run build`; `validate:academic`; `audit:all`; `npm run check` --
  0 errors/warnings/hints); accessibility verified via real before/after Lighthouse runs, not
  static audit alone.

## D-040 — Business-decisions register (owner input required)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, task #81.
- **What this is:** a single consolidated document (`docs/business-
  decisions-register.md`) listing every question surfaced across this
  window's workstreams (and one earlier finding, D-010/D-033) that
  genuinely cannot be answered from the codebase, the live site, or
  public awarding-body sources -- not a new investigation, a
  consolidation of gaps already identified and explicitly deferred in
  D-034 and D-033.
- **Items registered:** (1) exact scope of the schools' content-licence
  grant (bulk printing / LMS upload / modification -- D-034); (2)
  whether the multi-subject and sibling pricing discounts stack
  (D-034); (3) standard class duration and frequency per subject/level
  (D-034); (4) cancellation/refund policy, currently unstated anywhere
  on the site (D-034); (5) billing cadence, accepted payment methods,
  and any fees beyond the published per-subject rate (D-034); (6)
  `www.marlbridge.com` not resolving at all rather than redirecting to
  the bare domain -- a DNS/Cloudflare-dashboard fix outside this repo
  (D-010, reconfirmed D-033).
- **Deliberately excluded, with reasoning given in the register itself:**
  faculty/reviewer role mapping (D-004/D-005/D-006) -- already resolved,
  owner approved publishing all 19 real teachers; and the `/resources/`
  index performance issue (D-039) -- an engineering follow-up, not a
  business decision, tracked in the final QIGT report (#83) instead.
- **Guardrail check:** no answer was invented or guessed for any item;
  each entry states only what the site currently does NOT say, and asks
  the specific question the owner would need to answer to close it.
- **Status:** delivered as `docs/business-decisions-register.md`; all six
  items remain `open` pending direct owner input; none block the
  remaining technical QIGT workstreams (#82, #83).

## D-041 — Full validation gate + before/after comparison (final QIGT gate)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, task #82. Consolidated validation of the combined effect of
  D-032 through D-040 (every QIGT workstream this window), run fresh against the merged `main`
  branch at commit `e870812` (not re-run per-workstream results from earlier in the day).
- **Full validation gate, all green:**
  - `npm run build`: succeeds. Pagefind indexed 1,132 HTML files, 4 languages, 5 filters (was
    "Indexing all `<body>` elements, 0 filters" before D-036).
  - `npx astro check`: 0 errors / 0 warnings / 0 hints (140 files).
  - `npm run validate:academic` (6 validators): all OK — matrix 183 rows (160 ACTIVE / 23
    NOT_SUPPORTED, unchanged from baseline), content tagging OK, commercial claims OK,
    cross-board integrity OK (5/5 rule categories), pricing consistency OK (0 hard-coded fees
    outside `pricing.ts` across 879 files), review-integrity OK (731 resources + 4 articles
    checked, 20 reviewer records, 9 `isReviewer: true`).
  - `npm run audit:all` (6 checks + sitemap-noindex): 0 problems across all. Structured-data
    audit: 1,131 pages with JSON-LD, 5,353 typed nodes (EducationalOrganization ×1,131,
    WebSite ×1,131, WebPage ×1,131, BreadcrumbList ×988, Article ×735, Course ×167,
    FAQPage ×50, Person ×19, Organization ×1). Redirect audit: 976 rules (975 static + 1
    wildcard), unchanged from baseline. Internal-link audit: 0 broken links, 0 orphan pages,
    0 generic anchor text, across 1,132 built pages / 1,130 indexable.
  - `node scripts/test-cross-board-regression.mjs`: OK, all previously-flagged and control
    pages intact.
  - `node scripts/test-negative-validation-suite.mjs`: 11/11 passed, including the 5 new
    review-integrity negative fixtures added under D-032.
  - `functions/api/__tests__/enquiry-validation.test.mjs`: 16/16 passed (was 11 before the
    `trial` kind was added under D-034).
  - `npx tsc --noEmit`: 0 errors. `npm audit`: 0 vulnerabilities. `npx wrangler deploy
    --dry-run`: succeeds, 3,622 files read from `dist`.
- **Before/after comparison (Section 11 requirements):**
  - **Route/page count:** 1,131 built pages at baseline (2026-08-26 morning, commit
    `e04fbc3...`) → 1,131-1,132 now (audit scripts count this two different ways, both
    pre-existing behaviour, not a regression) -- net unchanged; the QIGT programme reshaped and
    fixed existing pages, added exactly one net-new page (`/trial/`, D-034), and removed exactly
    one page from the indexable set (`/search/`, noindexed under D-033) -- the counts wash out.
  - **Sitemap URL set:** 1,130 URLs at baseline → **1,130 URLs now**, re-verified directly
    against the live production sitemap (`sitemap-0.xml`, 1,130 `<loc>` entries), not just the
    local build. `/search/` confirmed absent (0 matches); `/trial/` confirmed present (1 match).
  - **Redirect count:** 976 (975 static + 1 wildcard) at baseline → **976, unchanged** — no
    redirects added or removed this programme; the redirect-inventory audit (D-033) reviewed
    every existing rule's rationale and found nothing synthetic to remove.
  - **Indexable / noindexed pages:** baseline had 0 pages with an explicit code-level noindex
    that were also correctly excluded from the sitemap (the `isIndexableAcademicPage()` policy's
    27 pages were already excluded pre-QIGT). This programme added exactly one more:
    `/search/` (D-033) — verified live in production returning
    `<meta name="robots" content="noindex, follow">` and absent from the production sitemap.
  - **Titles/descriptions:** 0 missing, 0 duplicate titles, 0 duplicate descriptions at baseline
    and now (`audit-metadata.mjs`, 1,131 pages both times).
  - **Structured-data types:** not separately counted at baseline (D-038 confirmed the schema
    *builders* were already correct, not a counts-based check); now formally captured for the
    first time as the after-state (see counts above) for future comparison.
  - **Resource publication states:** 731 resources / 4 articles at both baseline and now (no
    resources added, removed, or reclassified this programme); reviewer records grew from
    implicitly-uncounted at baseline to a formally validated 20 records / 9 `isReviewer: true`
    once D-032's review-integrity validator landed.
  - **Internal links:** 0 broken, 0 orphans at baseline and now (`audit-internal-links.mjs`);
    D-036 added new internal `data-pagefind-filter` metadata (not visible links) rather than
    changing the link graph itself.
  - **Academic matrix:** 183 rows, 160 ACTIVE / 23 NOT_SUPPORTED at baseline and now — completely
    unchanged in row count, but D-037 corrected `levelsLabel` display copy for 11 subjects where
    it had drifted out of sync with the matrix's real ACTIVE combinations (a display-honesty fix,
    not a matrix change).
  - **Pricing data:** `src/data/pricing.ts` amounts unchanged throughout (0 amounts touched by
    D-034's display-bug fix, confirmed by `validate-pricing-consistency.mjs` passing identically
    before and after).
  - **Production headers:** re-verified live (not just locally) during this pass —
    `strict-transport-security: max-age=15552000` present on both `marlbridge.com` and
    `www.marlbridge.com`; `/search/` correctly serves `noindex, follow` in production, not just
    in the local build; `/trial/` confirmed live and rendering the new structured fields.
- **Unplanned discovery during this pass, register corrected:** re-checking `www.marlbridge.com`
  live (previously found not resolving at all in D-010/D-033) found it now resolves cleanly,
  returns HTTP 200, serves byte-identical content to the bare domain, and carries a correct
  self-referencing canonical to `https://marlbridge.com/` — the same safe pattern already
  verified for the other apex/protocol variants. Whatever caused the earlier timeout has
  resolved itself (DNS propagation or a Cloudflare-side change, not something in this
  repository). `docs/business-decisions-register.md` item 6 updated in place to reflect this —
  downgraded from "action needed" to an optional, non-blocking tidiness recommendation, with the
  correction dated and explained rather than silently overwritten.
- **Guardrail check:** every "after" figure in this entry was measured fresh this pass (local
  build + live production fetch), not carried over from an earlier workstream's own report
  without re-verification.
- **Status:** full validation gate green on `main` at commit `e870812`; before/after comparison
  complete; one register item corrected based on fresh live evidence.

## D-042 — Deployment verification + final evidence-based report (programme close-out)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, task #83 (final task).
- **Deployment verification:** rather than assume the auto-deploy pipeline (push to `main` ->
  Cloudflare Pages) succeeded, fetched a representative sample of production URLs live and
  checked each against the specific fix it is meant to demonstrate: `/pricing/` (no duplicated
  currency codes), `/about/` (old blanket review claim absent), `/legal/terms/` (schools carve-out
  live, dated), `/trial/` (new structured form live), `/search/` (serves `noindex, follow` and is
  absent from the live production sitemap -- 0 of 1,130 `<loc>` entries in `sitemap-0.xml` match
  "search", 1 matches "trial"), the homepage/`/resources/` footer nav (Past Papers/Exam
  Preparation absent, Practice Questions present, `data-pagefind-body` present), `/llms.txt` (no
  false past-papers claim), a resource page (`data-pagefind-filter` attributes and the
  link-underline fix both live), `/subjects/accounting/` (corrected label live), the compiled CSS
  bundle (`--color-gold-600:#7a5e10`, `--color-on-navy-mute:#9fadc2`, confirming the accessibility
  fix values are exactly what shipped), `robots.txt`, and HSTS headers on both `marlbridge.com`
  and `www.marlbridge.com`. Every check passed against the live site.
- **Final report:** `docs/reports/qigt-final-report-2026-08-26.docx` -- a 15-section report
  (executive summary; scope/method/ground rules; baseline; one section per workstream D-032
  through D-039; business decisions requiring owner input; full validation gate + before/after
  comparison; deployment verification; guardrails held/deliberately not changed; closing summary
  and recommendations) written for the owner, covering every real finding and fix from this
  programme with no invented facts. Rendered to PDF and visually reviewed page-by-page before
  delivery to confirm correct formatting (headings, tables, page breaks) rather than trusting the
  generation script alone.
- **Guardrail check:** the report states only what was directly verified this programme (repeating
  the specific evidence -- measured contrast ratios, real diff counts, live HTTP checks -- rather
  than summarising claims from earlier reports without re-confirmation); the one correction found
  mid-programme (the `www.marlbridge.com` DNS finding resolving itself) is stated plainly as a
  correction, not silently smoothed over.
- **Status:** implemented on `feature/qigt-final-report`, deployment independently re-verified
  live in production, report delivered. This is the final entry of the QIGT programme (D-032
  through D-042); task #83 and the full QIGT task list are now complete.

## D-043 — Business-decisions register: all five open items answered and implemented

- **Date:** 2026-08-26.
- **Workstream:** post-QIGT follow-up, at the owner's direct request ("ask me questions from the
  document i will give you the answers").
- **Method:** asked the owner each of the five open items from `docs/business-decisions-register.md`
  directly, one clarifying round-trip where the first answer needed follow-up (discount stacking:
  the owner's first answer restated the existing multi-subject-discount rule rather than confirming
  whether it combines with the sibling discount, so a second, more specific question was asked).
  Every fact below is the owner's own stated answer, not inferred or assumed.
- **Answers received and implemented:**
  1. **Discount stacking:** the 20% multi-subject discount (3+ subjects) and the 10% sibling
     discount (up to 2 siblings) combine when a family qualifies for both; both apply to group
     classes only, never one-to-one (already separately stated on the one-to-one FAQ). Added
     `PRICING_TERMS.discountsStack` to `src/data/pricing.ts`; updated the pricing page's discount
     FAQ answer and the "Discounts and trial" section intro to state this explicitly.
  2. **Schools' licence scope:** bulk printing for a whole year group and LMS upload (Google
     Classroom, Moodle, etc.) are both permitted; modifying, relabelling or rebranding the
     material is not -- it should be used as published. Updated `/schools/` with a new clarifying
     paragraph and `/legal/terms/`'s class-use carve-out to name both the permitted uses and the
     modification boundary explicitly.
  3. **Class duration/frequency:** group classes run 45-50 minutes, 3 times a week per subject;
     one-to-one classes run 1 hour, with the number of classes left to the student/family (no
     fixed frequency). Does not vary by qualification level. Added
     `PRICING_TERMS.classFormat` and a new pricing-page FAQ entry.
  4. **Cancellation/refund:** billing is monthly, starting once the free trial class has taken
     place; a family can cancel or pause at any time, the month already paid for is not refunded,
     and there is no further billing once cancelled. Added `PRICING_TERMS.billing` and
     `PRICING_TERMS.cancellationPolicy`, plus two new pricing-page FAQ entries.
  5. **Payment methods/fees:** bank transfer and international wire transfer are accepted; there
     is no separate registration/enrolment fee beyond the published per-subject rate. Added
     `PRICING_TERMS.paymentMethods` and `PRICING_TERMS.enrolmentFee`, surfaced in the same new FAQ
     entry as item 4's billing cadence.
- **Guardrail check:** every new fact traces to the owner's own direct answer in this
  conversation, none inferred; all new pricing-adjacent facts were added to `src/data/pricing.ts`
  (the single typed source of truth every pricing page already reads from) rather than
  hard-coded on any page, consistent with the file's own stated rule that "every page that shows
  a price MUST read from here"; `validate-pricing-consistency.mjs` re-ran clean afterward (0
  hard-coded fee values outside `pricing.ts` across 879 files, same as before this change).
  `docs/business-decisions-register.md` updated in place with each answer and exactly where it
  now appears live, rather than left stating the questions as still open.
- **Status:** implemented on `feature/qigt-business-decisions-answered`, full validation gate
  green (build, astro check, `validate:academic`, `audit:all`, negative-validation-suite [11/11],
  `tsc --noEmit`, `wrangler deploy --dry-run`).

## D-044 — /resources/ index page performance fix + regression testing

- **Date:** 2026-08-26.
- **Workstream:** post-QIGT follow-up, at the owner's direct request ("after that you can do the
  regression testing as suggested"), closing out the one performance issue D-039 deliberately
  left as a documented recommendation rather than a same-session fix.
- **The problem (recap from D-039):** `/resources/` renders every published resource card for
  every subject into the DOM up front (up to 257 cards in the largest type section), with
  client-side filtering toggling the `hidden` attribute rather than removing/adding elements.
  Measured cost: Performance 71, Total Blocking Time 1,370ms, ~5,200 DOM nodes, 3.7s of
  style-and-layout work on first paint (`mainthread-work-breakdown`).
- **Fix chosen:** `content-visibility: auto` (with a `contain-intrinsic-size` placeholder) applied
  to each `[data-subject-group]` block via a scoped `<style>` block in
  `src/pages/resources/index.astro`. This tells the browser to skip layout/paint work for a
  subject group until it is near the viewport -- a CSS-only, additive hint (harmlessly ignored in
  browsers that don't support it; supported in all evergreen browsers) specifically recommended
  by the Chrome/web.dev team for exactly this "long list of cards" scenario, and explicitly
  documented as compatible with search-engine indexing (the built static HTML is unchanged --
  Pagefind and crawlers read the full markup regardless of this CSS property). Deliberately not
  the riskier alternatives considered in D-039 (pagination, JS virtualization, lazy DOM
  insertion) -- those would have meant restructuring the existing, working, tested filter script;
  this fix changes zero JavaScript, zero DOM structure, and zero filter behaviour.
- **Regression testing performed (not assumed):**
  - Full validation gate re-run clean: build, `astro check` (0/0/0), `validate:academic` (all 6
    validators), `audit:all` (all 6 checks + sitemap-noindex), `npx tsc --noEmit`, `npm audit` (0
    vulnerabilities), `wrangler deploy --dry-run`, negative-validation-suite (11/11).
  - A dedicated Playwright functional test (`/tmp/pwtest/test-filters.mjs`, not committed --
    scratch verification, not a permanent project fixture) drove a real headless browser against
    the built preview site and confirmed, on the 257-card Mathematics/study-guides section:
    initial state shows all 23 subject groups and 257 cards; selecting a subject narrows to
    exactly 1 visible group matching that subject; the "Clear filters" button appears once
    filtered and correctly restores all groups on click; selecting a level hides non-matching
    cards and every still-visible card actually has that level; `content-visibility: auto` is
    confirmed applied via `getComputedStyle`; and the last (previously most implicitly
    deprioritized) subject group has real, nonzero rendered height once scrolled into view,
    confirming `content-visibility` does not silently drop or corrupt content -- 12/12 checks
    passed.
  - Fresh Lighthouse mobile runs against the local preview build: **Performance 71 -> 97**,
    **Total Blocking Time 1,370ms -> 50ms**, **mainthread-work-breakdown 3.7s -> 1.1s**, CLS
    stayed at 0 (confirming the `contain-intrinsic-size` placeholder didn't introduce layout
    shift), LCP/FCP/Speed Index unchanged or slightly improved. Accessibility re-confirmed at
    100/100 (unchanged from D-039 -- this fix touched no color, markup semantics, or focus
    order).
- **Guardrail check:** no JavaScript changed, no DOM structure changed, no filter behaviour
  changed (proven by the Playwright test, not assumed), no content removed from the built HTML
  (Pagefind/crawlers see the same markup as before); the fix is a single, scoped, additive CSS
  rule.
- **Status:** implemented on `feature/qigt-resources-performance`, full validation gate green,
  functional regression test 12/12 passed, before/after Lighthouse confirms the fix. This closes
  the one outstanding recommendation from the QIGT final report (D-042).

## D-053 — v1.x Closure WS6: resource depth (36 single-resource combinations)

**Context.** D-045's WS0 baseline flagged 36 ACTIVE board+qualification+subject combinations
with exactly one resource against the site's own established norm of a study-guide accompanied
by revision-notes and practice-questions siblings on the same verified topic. WS6's brief: bring
all 36 to 3+ resources. Of the 36, 15 are non-IB (Cambridge/Edexcel/AQA/OxfordAQA) and 21 are IB
(16 DP + 5 MYP total, including the 2 DP combinations -- Economics and Physics -- that already
had a verified topic map before this workstream began; see breakdown below).

**Research, not guessing.** For every non-IB combination, the added content is grounded strictly
in facts already verified and sourced in this repo: either `src/data/academic/syllabus-topics.ts`
(exact topic/component names, syllabus code, official source URL, verification date) for the 12
combinations whose sole existing resource was already a topic-specific `study-guides` page, or the
already-cited official specification facts (assessment objectives, paper structure, mark
allocations, section weightings) stated in the existing resource's own body text for the 3
combinations whose sole existing resource was a `subject-guides` course-structure overview with no
`syllabusTopics` entry (AQA GCSE English Language 8700, AQA GCSE History 8145, AQA A Level
Sociology 7192). No new external research or unverified claims were introduced for the non-IB set.

**IB source-access constraint (identified and disclosed, not silently worked around).** Full IB
subject guides (granular topic-by-topic syllabus content) sit behind a password-protected
teacher-only portal (resources.ibo.org) or require purchase; only short public "subject brief"
PDFs are freely accessible, covering aims and the assessment model (papers, weightings, IA
structure) but not a granular topic list. This is a genuine, board-specific limitation, already
reflected honestly in this repo's data as `topicMapStatus: 'being-verified'` for 19 of the 21 IB
combinations — only `ib-dp economics` and `ib-dp physics` are `'published'`, because
`syllabus-topics.ts` already carries a real, sourced, unit-by-unit breakdown for those two from
prior work (v1.2 WS7, D-008/D-009-era). WS6 therefore split the IB set:

- **`ib-dp economics` and `ib-dp physics` (2 combinations) — full 3-resource treatment.** New
  `revision-notes` + `practice-questions` companions were written on one already-verified,
  SL-appropriate sub-topic each (Economics: "Demand, Supply and Competitive Market Equilibrium",
  sub-topics 2.1-2.3; Physics: "Kinematics", sub-topic A.1), using the exact unit/sub-topic names
  already in `syllabus-topics.ts`. These two combinations now match the non-IB standard.
- **The remaining 19 IB combinations (16 DP + 5 MYP, wait — DP: Business, Language A: Language and
  Literature, Language A: Literature, Computer Science, Psychology, Biology, Chemistry,
  Environmental Systems and Societies, Geography, Global Politics, World History, Language B,
  Mathematics: Analysis and Approaches, Mathematics: Applications and Interpretation = 14 DP; MYP:
  Language Acquisition, Mathematics, Sciences, Design, Individuals and Societies = 5 MYP; 19 total)
  — one additional resource each, not two.** Fabricating topic-specific `study-guides`,
  `revision-notes` or `practice-questions` content (with invented topic breakdowns, mark schemes,
  or exam-style questions) for syllabus content this repo cannot verify against a public official
  source would violate the brief's core research rule. Instead, each of these 19 gained a single
  `revision-notes` companion condensing the assessment-model facts *already stated and sourced* in
  its existing `subject-guides` overview (paper weightings, SL/HL differences, IA structure,
  criteria for MYP subjects) into a quick-recall format — zero new facts, purely a different
  presentation of already-verified content. This is a disclosed, honest partial result: these 19
  combinations land at **2 resources**, not the 3+ achieved everywhere else, because a genuine
  source-access gap makes a third, topic-specific resource unsafe to write honestly right now.
  Closing this gap requires either purchased/licensed access to the IB's teacher portal or a
  future decision to accept a lower depth standard for IB — both out of scope for this closure
  release and explicitly deferred, not silently dropped.

**Total new content:** 53 new resource files (30 for the 15 non-IB combinations, 4 for
Economics/Physics DP, 19 assessment-recall companions for the remaining IB set). Every
`revision-notes`/`study-guides` file follows the established condensed-recall format (tables,
worked examples where applicable, an "exam traps" list, and a 4-question self-test with answers).
Every `practice-questions` file carries the sitewide originality disclaimer ("these are original
questions written for Marlbridge... not reproduced past-paper questions"), full worked answers
with mark allocations where a real official mark scheme structure is known, and a closing "where
marks are usually lost" section.

**Errors found and fixed during this workstream (self-caught, pre-commit):**
- Three new O Level (Cambridge 7100/4040) resource titles collided verbatim with pre-existing
  IGCSE-level (0479) sibling titles covering the same topic name at a different qualification —
  caught by `npm run audit:metadata`'s duplicate-title check. Fixed by adding an explicit
  qualification+code qualifier, e.g. "Commerce and Production (O Level 7100): Revision Notes".
- One new resource (`o-level-statistics-data-collection-revision-notes.md`) linked to a
  placeholder slug (`/resources/data-and-its-collection-4040-study-guide/`) that does not exist —
  caught by `npm run audit:internal-links`'s broken-link check. Fixed to link to the real existing
  resource (`o-level-cambridge-statistics-data-and-its-collection`). A full internal-link sweep of
  all 53 new files confirmed no other broken links.

**Verification:** `npm run validate:academic` passes (0 duplicate-scope regressions from the new
content; assessment/FX/matrix/cross-board validators all pass unaffected). `npm run build`
succeeds cleanly. `npm run audit:all` passes with 0 problems (0 duplicate titles/descriptions, 0
broken internal links, 0 orphan pages, sitemap/noindex agreement holds across all indexable URLs,
i18n route check unaffected). `node scripts/test-negative-validation-suite.mjs` 18/18. Fresh
`academic-coverage-report-v2.mjs` run confirms **0/160 ACTIVE combinations now have exactly 1
resource** (down from 36 at the WS0 baseline; the two counted separately from the original 34-item
mid-window snapshot are IB Economics/Physics, already at 3 pre-WS6-completion). The per-combination
`isIndexableAcademicPage()` 400-word substantial-content threshold is evaluated as a **sum across
all qualifying resources for a combination**, not per individual file — every touched combination
already carried an indexable (400+ word) resource before WS6, so even the shorter ~300-400 word IB
assessment-recall companions only add to an already-passing total; no indexability regression.

## D-054 — v1.x Closure WS4: regenerate and consolidate reports

**Scope.** Deliberately run last in this release, after WS2 (translation) and WS6 (resource
depth) had both already changed the data several standing reports describe, so this pass reflects
final state rather than needing a second regeneration.

**Regenerated:**
- `docs/reports/academic-coverage-report-v1.2.{json,csv,md}` — re-run via
  `scripts/academic-coverage-report-v2.mjs`. Row count 160 (unchanged since IB landed), but
  `zero-resource` and `exactly-1-resource` both now read 0/160, reflecting WS6. The `.md` narrative
  summary (hand-maintained, not auto-generated) was stale since 2026-08-18 — described 139 rows,
  pre-IB board coverage numbers, and a since-superseded risk-flag count. Rewritten against the
  current `.json`.
- `docs/reports/seo-page-classification.{md,json}` — no generator script previously existed for
  this file; it was a one-off hand-run analysis from Phase 3 of an earlier SEO remediation session
  (2026-08-25), directly invalidated by WS6 since its core classification depends on
  per-combination resource count (18 rows were `3-minimal-single-resource`, now correctly 0 after
  WS6). Regenerated using the same classification logic documented in the original file's own
  note (indexability -> syllabus-verification -> single-resource -> resource-count tier, checked
  in that priority order), computed fresh from the current coverage-report JSON.

**Bug fixed in the process (not a new feature — a stale-data fix directly blocking accurate
report regeneration):** `academic-coverage-report-v2.mjs`'s `indexable` column was a hardcoded
`true` for every row, with a code comment stating "no per-combination noindex mechanism exists."
That comment was accurate when written but went stale once Phase 1 of the Aug 2026 SEO
remediation shipped a real `isIndexableAcademicPage()` policy
(`src/utils/seo/indexability.ts`) that the live site's sitemap and hub-page templates both
actually use. Regenerating this report with the old hardcoded value would have reproduced a
now-false claim in a freshly "regenerated" report — worse than leaving the stale file alone. Fixed
by loading `QUALIFYING_RESOURCE_TYPES`/`SUBSTANTIAL_WORD_THRESHOLD` live from `indexability.ts`
(via the script's existing `load()`-via-execSync pattern, since the script itself runs under plain
`node` and can't statically import a `.ts` file directly) and reimplementing the same sum-and-compare
logic locally, so the two locations can never silently diverge on the *threshold*, and the report
now reflects the real policy rather than a pre-Phase-1 assumption. Added a `totalQualifyingWordCount`
column alongside it. Verified: 0/160 combinations are below the real indexability bar (matches the
live sitemap, which excludes 0 academic hub pages for this reason).

**Deliberately not touched (out of scope for report *regeneration*):**
- `docs/reports/review-priority-queue-2026-08-26.md` — its tier assignments are built from
  judgment-based cross-references (e.g., specific syllabus transition-year lookups), not a
  mechanical recount from live data the way the two reports above are. Regenerating it accurately
  would mean re-deriving each tier's membership logic, which is closer to redoing an earlier
  workstream's analysis than "regenerating a report" — out of WS4's scope per the brief's
  instruction not to reopen unrelated workstreams. Its resource-count figure (731) is now stale
  (WS6 added 53 resources) but this is disclosed here rather than silently left to look current.
- `docs/reports/v1.x-final-report.md`, `qigt-*` reports, `lighthouse-*`, `phase11-*` — dated,
  point-in-time historical artifacts from earlier, separate sessions/programmes, not living
  documents this release's changes invalidate. The definitive, current closure report is produced
  as this release's own Final step (see the task tracker's "Final" item), not by editing these.

**Verification:** `npm run build` clean; `npm run validate:academic` clean; `npm run audit:all`
clean (0 broken links/duplicate titles, sitemap/noindex agreement holds, i18n route check
passing).
