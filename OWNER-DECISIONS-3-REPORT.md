# Owner decisions report 3

Prepared 26 Nov 2026, 22:30 PKT; updated 27 Nov 2026, 01:50 PKT after merge and live checks. Merged: [PR 256](https://github.com/Nouman1608/MB/pull/256) (`4b3965c2e`), [PR 257](https://github.com/Nouman1608/MB/pull/257) (`58a29678f`), [PR 258](https://github.com/Nouman1608/MB/pull/258) (`6b5867251`). All three deployed successfully. Decisions: D-546a to D-546q in `docs/decision-log.md`. No Search Console figures are in this file (the repository is public).

## Step 0: PR 255

- Its production build (`88793f7a`, merge `9d5b6f5fe`) **failed** after 31m15s. The Cloudflare dashboard showed the failure but the build log never loaded, so **the cause was not read**. The tree was identical to `f3d0fdb54`, which built fine as a preview.
- Nothing was retried. The same code was deployed by the next successful build (`4b3965c2e`), which supersedes it.
- Live checks after that deploy (cache-busted): UAE cited-facts section live; IAL boundaries and WDM11 live on /grade-thresholds/; WDM11 on 2 IAL Maths pages; (RA) in the 2058 descendants table; Singapore article has its English-only section and a Sources line; Malaysia, Lahore and Dubai articles have Sources lines.
- **Not verified live:** the three cleaned filler pages individually (three other cleaned pages show one common-mistakes block each); the Singapore "Published 10 October 2026" line (structured data still says 2026-10-10); the "(RA)" in the three equivalent lists was not rechecked.
- **Found live and fixed:** the 312 AP meta descriptions added in PR 255 were missing every lowercase "s". See PR 257 below.

## PR 257: AP meta description bug

- Cause: `apPageMetaDescription` in `src/utils/ap/text.ts` collapsed whitespace with `/s+/g` (missing backslash), which deletes the letter "s". It came in with D-539 and hit the 312 hand-written AP descriptions from PR 255. The same slip was in `scripts/audit-structured-data.mjs` (`/d+/g`).
- Fix: `/\s+/g` and `/\d+/g`.
- Live check: the speciation page now reads "Biology study guide to speciation: reproductive barriers…", two sampled AP pages with a hand-written description match their source exactly, and no sampled page has the missing-letter pattern.
- Not caught by validators or `astro check`: they check length and presence, not spelling. Consider a check that compares the built description to the source.

## Checks on the branch before merge

- `npm run build` (all validators, 24,318 pages, Pagefind): passed. A first attempt stopped on a schema error (exam-dates draft `seoDescription` over 160 characters); fixed and rebuilt.
- `astro check`: 0 errors, 0 warnings, 1,575 files.
- `npm run audit:all`: exit 0. Only warning: content store at 75.2% of its limit (D-440).

## Items

| # | Your answer | What changed | Live check | Waits on you |
|---|---|---|---|---|
| 10 Islamiyat packs | Sir Azam reviewed and approved | 5 drafts (3 Qur'an, 2 Pakistan Studies) carry reviewer `azam-siddique`, `reviewedDate` 2026-11-26 and a reviewNote saying the approval is owner-reported with no corrections supplied. Still hidden. | Not live (hidden, as intended) | Your yes to publish (`reviewStatus: "draft"` to `"reviewed"`, and delete the draft banner on the 3 Qur'an files). His profile has no credentials. |
| 11 Question sets | Sir Sajawal (maths), Sir Nouman (chemistry) | Three review sheets in `reports/owner-decisions-3/review-sheets/` (3 to 4 pages each, not one). | n/a | Reviewers return corrections |
| 12 Thin courses | Publish all | 33 of 36 published as `review-pending` with no reviewer; 15 are Islamiyat. 3 Hadith pages held. 21 duplicate-gate allow-list entries added. Table: `reports/owner-decisions-3/thin-drafts-table.md`. | 6 sampled pages return 200 | Sir Azam to check the Hadith numbering and the 15 Islamiyat pages |
| 13 Singapore IB | Existing IB reviewer re-reads | No change. IB school directory opens and has a programme filter; Singapore results did not render, so "some international schools in Singapore are IB World Schools" is unconfirmed. | n/a | Reviewer confirmation, then update `reviewedDate` |
| 14 Sources | Keep wording, add draft-law note | Qatar article keeps its sentence and adds a May 2026 draft-law note with two sources. British Council Pakistan supported; KHDA page unreadable (u.ae supports the wording); Qatar ministry pages unreadable (news reports support). | Qatar note live | Nothing |
| 15 Market-failure figure | Board-specific; remove on AQA GCSE and OCR | OxfordAQA and AQA A Level pages use new figures (on R2). Figure removed on the 2 AQA GCSE and 2 OCR A Level pages. Cambridge pages unchanged. | OxfordAQA figure live; old figure gone from AQA GCSE and OCR pages. The AQA A Level pages were not individually checked. | Nothing |
| 16 Trustpilot | Manual invitations to all families | Not done: Trustpilot Business needs your sign-in. Draft invitation is in `OWNER-DECISIONS-2-REPORT.md`. | n/a | Sign in; family list; yes before anything is sent |
| 17 Brand mentions | Edarabia, The Tutors' Association, Expatica, Dawn | Listing text and Dawn pitch outline in `reports/owner-decisions-3/brand-listings-text.md`. Nothing submitted. | n/a | Fees, membership and safeguarding rules, Gulf advertising rules, a teacher name for Dawn; yes per submission |
| 18 Social | 2 to 3 posts a week on three channels | Plan and two weeks of drafts in `reports/owner-decisions-3/social-plan-and-posts.md`. Nothing posted. | n/a | Review the posts |
| 19 Journal | Malaysia, exam dates, MYP, fees; one a week | First article (exam dates 2027) drafted hidden; plan in `reports/owner-decisions-3/journal-plan.md`. | Hidden: returns 404 as intended | Reviewer; open the Cambridge zone timetables once before approval |
| 20 (RA) figures | Upload (first skipped, then asked for) | Two redrawn figures uploaded to R2 under new names (both 200) and the four Islamiyat pages switched in PR 258 (D-546q). | All four pages point at the new images, each loads (200) | Nothing |
| 21 Search Console | Read only | Pages report read (figures kept out of this public repo). Normal: alternate canonical (parameter URLs), redirects, a few 404s from malformed links. Sitemap clean (no sitemap URL is a redirect source; 120 sampled URLs all 200). Not read: the noindex and "discovered, not indexed" lists. No validation or indexing requested. | n/a | Decide what to do with the "Google chose a different canonical" and "crawled, not indexed" groups (mostly business and economics resources) |
| 22 Economics 9708 | n/a | "See also" links added in both directions on 8 pages, no merging. | 9708 revision-notes cross-link live | Nothing |
| 23 Question sets | n/a | Three more hidden sets (9709 functions and algebra, 9701 acids and bases, 0625 energy), 137 script checks passed, review sheets written. | Hidden, as intended | Physics reviewer name; teachers confirm M/A/B conventions |

## Still waits on you

1. Publish decision for the Islamiyat packs (item 10).
2. Trustpilot sign-in and send rule (item 16).
3. Sir Azam: Hadith numbering and the 15 Islamiyat thin pages.
4. Search Console: the "Google chose a different canonical" and "crawled, not indexed" groups.
5. IB reviewer re-read of the Singapore article (item 13).
6. Reviewer names and corrections for the question sets (items 11, 23), including a physics reviewer.
7. Optional: the PR 255 build log cause is unknown; reopen Build #88793f7a in Cloudflare later if it matters.
