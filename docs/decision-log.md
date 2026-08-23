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
