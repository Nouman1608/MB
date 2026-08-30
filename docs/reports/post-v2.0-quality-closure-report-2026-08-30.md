# MARLBRIDGE Post-v2.0 Quality and Conversion Closure — Status Report

**Date:** 2026-08-30
**Branch:** `main` (local only — see §7, deployment status)
**Baseline commit:** `5cd95b0` (matches `origin/main` at session start)
**Local commits, not yet pushed:** `798ee1c`, `5a36a53`, `e741b57`, `e9d53b5`, `5fb0ed9`, `a57672d`, `bdb2678`
**Repo:** `Nouman1608/MB`
**Live site (unaffected by this work so far):** https://marlbridge.com

## 1. Summary — read this first

This report covers the ten workstreams named in the Post-v2.0 Quality and Conversion Closure brief, plus the twelve live observations the owner asked this session to reproduce or refute rather than assume. **This is a status report, not a release announcement.** The build passing and the validation gate being clean does not mean the release is complete — per the brief's own instruction, that claim is deliberately not made here. Two things keep this open:

- **Nothing has been pushed.** `git push` to `Nouman1608/MB` has returned a 403 from the session's git proxy on every attempt (checked five times across the session) — read access works, push does not. All seven commits above sit locally on `main`, fully validated, waiting on repository access being granted to this session.
- **One workstream (WS1) was deliberately not touched.** A separate, concurrent work session already has WS1 (cookie-consent consolidation) in progress on branch `d-081-analytics-disclosure` (PR #44). This session avoided colliding with that in-flight work rather than attempting it in parallel.

Everything else below is real, verified work: two genuine bugs found and fixed (not just reported), one workstream closed with a real production email send verified end-to-end, real resource content added against a real content gap, and every claim in this report checked against the actual repository state, not assumed from an earlier pass.

## 2. Workstreams — status

| WS | Scope | Status |
|----|-------|--------|
| WS1 | Consolidate cookie consent (Zaraz vs. site banner) | **Not done here** — owned by a separate, concurrent session (PR #44, `d-081-analytics-disclosure`). Reproduced live during WS5 verification: two consent interfaces do still appear simultaneously on `/trial/`, confirming the brief's observation 6 is accurate as of today. |
| WS2 | Correct Edexcel Law's specification identity (YLA11→YLA1) | **Done.** `798ee1c`. New negative fixture proves a regression back to `YLA11` is caught, not just that today's data happens to be correct. |
| WS3 | Separate internal notes from public academic explanations | **Done.** `798ee1c`. Closed a real 41-problem gap the session's own new audit check found; also closed a detection-pattern gap (bare dataset filenames, sentinel values) the first pass hadn't anticipated. |
| WS4 | Complete translation consistency (ar/ur/bn) | **Core observed bug fixed.** `e9d53b5`. The three translated homepages told visitors the enquiry form was English-only and linked to the English `/contact/` page, even though a fully translated enquiry form already existed. Fixed the copy and the links. Broader WS4 scope (full route inventory beyond what `audit:all`'s i18n check already covers, a human-review queue for the AI-translated copy) not separately assessed. |
| WS5 | Verify enquiry delivery end-to-end | **Done and closed.** `bdb2678`. With explicit owner approval, submitted a real test enquiry on live production and confirmed actual delivery by reading the owner's Gmail directly — full chain verified (Turnstile → Resend → inbox, correct headers, DKIM/SPF passing). See §5 for detail. |
| WS6 | Make grade thresholds route-specific | **Done.** `e741b57`. Expanded from 13 routes (one "representative" combination per tier) to 73 (every published route across 5 specifications), re-fetched from the official Cambridge PDFs directly. New validator + 3 negative fixtures. |
| WS7 | Increase useful resource depth (Edexcel Law Paper 2) | **Done.** `a57672d`. Paper 2 ("The Law in Action") had zero resource content despite its syllabus data existing. Added a study guide, revision notes, and 8 original practice questions, matching Paper 1's existing depth, sourced from a fresh fetch of the official specification. |
| WS8 | Improve discovery/reliability of practice tools | **Real bug found and fixed while verifying the named observations.** `5fb0ed9`. Both named observations (5 specifications shown, Mathematics reveal-answer works) were already true. While confirming that, found the parser was silently dropping 44 of 84 flagship practice-question files (52%) — no error, just less content than existed. Fixed; question count went from 260 to 541. New validator + negative fixture. Broader "discoverability" scope beyond this parsing fix not separately assessed. |
| WS9 | Clarify discounts and FX policy | **Done.** `5a36a53`. Discount-combination arithmetic was genuinely undecided in the data; asked the owner directly rather than guessing, implemented the owner's answer (additive, 30%) as computed helper functions, propagated correctly across all four language versions of the pricing page. FX policy consolidated against the brief's full checklist; two genuinely unrecorded items (responsible approver, bank/transfer fees) flagged as open rather than invented. |
| WS10 | Regenerate acceptance evidence and close the release | **This report**, plus the full validation run in §4. Not a release — see §1 and §7. |

## 3. The twelve "observations to reproduce" — outcome

| # | Observation | Outcome |
|---|---|---|
| 1 | Trial form already used Name/Email/Phone/Country/Message | Confirmed true — reproduced live during WS5. |
| 2 | Homepage displayed 799 published resources | Not independently re-verified this session (the brief's own warning against hard-coding this count as truth was heeded — no code change made based on an assumed figure). |
| 3 | www pricing URL redirected to apex, preserving query string | Not re-verified this session; prior documentation (`business-decisions-register.md` item 9) records this as already resolved. |
| 4 | Self-check practice area contained five Cambridge specifications | **Confirmed true.** `/practice/` genuinely lists all 5 flagship specs (0620, 0625, 0580, 9701, 9702), computed live from real question counts, not hard-coded. |
| 5 | Revealing a worked answer functioned in one Mathematics sample | **Confirmed true**, and while verifying it, found and fixed the WS8 parsing bug above — Mathematics itself went from 10 to 18 working questions. |
| 6 | Two cookie-consent interfaces appeared simultaneously | **Confirmed still true**, reproduced live on production during WS5 (see §5). Not fixed here — WS1 scope, owned elsewhere. |
| 7 | Edexcel Law still displayed YLA11 | **Fixed** — WS2, `798ee1c`. |
| 8 | Public Law page exposed internal implementation notes | **Fixed** — WS3, `798ee1c`, and the whole-site sweep it was part of. |
| 9 | Translated homepages described enquiries as English-only despite an Arabic trial form existing | **Fixed** — WS4, `e9d53b5`. |
| 10 | Grade-threshold explorer showed selected representative combinations | **Fixed** — WS6, `e741b57`, now shows every published route. |
| 11 | Pricing page didn't explain discount combination math | **Fixed** — WS9, `5a36a53`, now shows the combined percentage and a worked example in all four languages. |
| 12 | No real enquiry was submitted, so inbox delivery wasn't independently verified | **Fixed** — WS5, `bdb2678`, real submission verified end-to-end with owner approval. |

## 4. Full validation gate — final run, 2026-08-30, this session's HEAD

All items below were run for real against the current local `main` (commit `bdb2678`), not assumed from an earlier pass in this session.

**`npm run build`** — 1,272 pages built (up from 1,269 at session start; +3 for the new WS7 resources), Pagefind index rebuilt (4 languages, 23,630 words).

**`npm run validate:academic`** (now 10 chained validators, up from 8 at session start) — **PASS**
- Academic matrix: 183 rows, 160 ACTIVE, scope lock OK
- Academic content tagging, syllabus topic references, stage consistency, syllabus code references — OK
- Commercial claims match the approved academic matrix — OK
- Cross-board integrity: 0 problems
- Pricing consistency: no hard-coded fee values outside `src/data/pricing.ts` across 978 scanned files
- FX policy: base rates unchanged, snapshot fresh, published conversions within tolerance
- Assessment validation: 141/160 ACTIVE combinations with a sourced record (unchanged this session — not this closure's scope)
- **Grade-threshold validation (new, WS6):** 5 syllabus records, 73 routes, no collisions, no mark-basis or unavailable-grade problems
- **Practice-bank validation (new, WS8):** 84 flagship-relevant files, all parse to at least one question, 541 questions total, no structural-markdown leakage

**`npm run audit:all`** (8 categories, unchanged count) — **PASS**: metadata (0 problems, 1,271 pages), structured data (1,271 pages, JSON-LD present on all), redirects (0 problems, 1,272 pages scanned), internal links (0 broken, 0 orphans, 0 generic anchors, 1,272 pages), content integrity (0 problems, 1,272 pages scanned for internal-note leakage — this is the check WS3 both fixed the underlying content for and hardened the detection pattern of), fonts (14 files, 14 distinct binaries), sitemap/noindex agreement (1,267 URLs, all indexable), i18n routes (19 routes × 4 locales = 76 pages, correct canonical/hreflang/lang/dir — the check that would have caught a WS4-style regression automatically).

**`node --experimental-strip-types scripts/test-negative-validation-suite.mjs`** — **27/27 fixture categories pass** (24 pre-existing plus `[W]`, `[X]` and `[Y]` added over the course of this session, for WS2, WS6 and WS8 respectively), including the new WS6 grade-threshold and WS8 practice-bank negative fixtures. Every mutation-based fixture was restored and re-verified byte-identical to its original after its assertion ran.

**Live production verification (WS5, browser-driven, not from the build output)** — see §5.

## 5. WS5 in detail — the one workstream that touched live production

With the owner's explicit approval (asked directly, since the brief's own rule requires it before sending a real production email), this session:

1. Navigated to the live `https://marlbridge.com/trial/` page.
2. Dismissed both cookie-consent interfaces present (incidentally reproducing observation 6, live).
3. Submitted a real, clearly-labelled synthetic enquiry — name "WS5 Delivery Test — Please Ignore", the owner's own email as the enquirer address, phone/country marked "N/A (automated test)", and a message explicitly stating this was an automated verification test.
4. Confirmed Cloudflare Turnstile passed and the form returned its real success message.
5. **Read the owner's Gmail inbox directly** (not just trusted the client-side message) and confirmed the email arrived within one second of submission, in Inbox (not spam), with `From: Marlbridge <hello@marlbridge.com>`, `To`/`Reply-To` both correct, DKIM passing for both `marlbridge.com` and `amazonses.com`, SPF passing, and the body correctly rendering all four submitted fields.

This is the first time this send path has been independently confirmed working end-to-end rather than assumed from the code being correctly wired.

## 6. Decisions requiring judgement calls this session (all recorded in `docs/decision-log.md`)

- **D-082** (renumbered from a planned D-081 after discovering a numbering collision with the concurrent WS1 session's own D-081 — caught and self-corrected proactively, not reported by the owner) — WS2/WS3 closure.
- **D-083** — WS9 discount-combination arithmetic: owner chose additive (30%) over successive (~28%) via an explicit question with a concrete worked example, rather than this session guessing.
- **D-084** — WS9 FX policy consolidation: distinguished "already implemented but undocumented" from "genuinely unrecorded" (responsible approver, bank/transfer fees), flagging the latter as open per the brief's own instruction not to invent an answer.
- **D-085** — WS6 grade-threshold expansion, including the explicit decision to exclude Cambridge's "staged assessment" routes (disclosed, not silently omitted) and to neutralize an unverifiable Component 50 label to its official neutral identifier rather than keep an unverified functional name.
- **D-086** — WS4 stale English-only claim, fixed without needing an owner decision (a factual correction, not a judgement call).
- **D-087** — WS8 practice-bank parser fix — a factual correction (the parser's own header comment's coverage claim did not hold), not a judgement call.
- **D-088** — WS7 Edexcel Law Paper 2 content, matching Paper 1's existing depth and structure exactly rather than inventing a different shape.
- **D-089** — WS5 live delivery verification, owner-approved before any email was sent.

## 7. What is genuinely NOT done — read this before treating anything as shipped

- **Not pushed, not deployed.** All seven commits are local-only. Cloudflare Pages / GitHub Actions has not built or deployed any of this work. The live site at https://marlbridge.com reflects the pre-session baseline (`5cd95b0`) except for whatever the separate concurrent WS1 session may have shipped independently.
- **WS1 is not this session's work.** Do not read anything above as a WS1 fix — the double cookie banner is still live, confirmed today.
- **Observations 2 and 3** were not independently re-verified this session (deliberately, per the brief's own warning against assuming a historical count is still current truth without checking).
- **WS4 and WS8's broader scope** (beyond the specific bug each observation pointed at) has not been separately, exhaustively assessed.
- **Two FX-policy items remain open by design**: a named responsible approver for rate refreshes, and bank/transfer-fee treatment — both flagged to the owner in `docs/business-decisions-register.md` (items 7–8) rather than invented.

## 8. Next steps

1. **Git push access** needs to be granted to this session (or these seven commits applied from a session that has it) before any of this reaches `origin/main` or production.
2. Once pushed, the standard CI/CD gate (`.github/workflows/deploy.yml`) will re-run this same validation chain and deploy via `wrangler-action` automatically — no manual deploy step is expected to be needed.
3. WS1 should be watched for and reconciled with this work once the concurrent session's PR #44 lands, since both sessions have now independently touched `docs/decision-log.md` (the D-081/D-082 renumbering above exists specifically to prevent that collision from causing a real conflict).
4. The two open FX-policy items and the broader WS4/WS8 scope remain available for a future, explicitly-scoped pass rather than being expanded here.
