# Owner decisions report 3

Prepared 26 Nov 2026, 22:30 PKT. Branch `owner-decisions-3` (worktree `C:\Users\nouma\repos\MB-owner-decisions-3`, from origin/main `9d5b6f5fe`). **Not pushed, not deployed.** Decisions: D-546a to D-546p in `docs/decision-log.md`. No Search Console figures are in this file (the repository is public).

## Step 0: PR 255 is not live

- Merge `9d5b6f5fe`: GitHub shows `validate` passed and `Workers Builds: mb` **failed** (build 88793f7a, started 20:18 PKT, failed 20:49 PKT).
- The merged tree is byte-identical to `f3d0fdb54`, which built as a preview and passed `npm run build`, `astro check` and `audit:all`. So the cause looks like a timeout or one-off failure, but **the Cloudflare build log was not read** (Cloudflare was signed out; the owner chose GitHub only).
- Live checks on a cache-busted URL at 20:40 PKT: UAE cited facts not live, IAL boundaries not live, Singapore article still dated 10 Oct 2026. Not rechecked after the failure, because nothing new deployed.
- **Retry not done.** It needs the owner's yes and a Cloudflare sign-in.

## Checks on this branch

- `npm run build` (all validators, 24,318 pages, Pagefind): passed. A first attempt stopped on a schema error (exam-dates draft `seoDescription` over 160 characters); fixed and rebuilt.
- `astro check`: 0 errors, 0 warnings, 1,575 files.
- `npm run audit:all`: exit 0. Only warning: content store at 75.2% of its limit (D-440).
- Not done: live checks (nothing deployed), full `check-duplicate-resource-scope` was reported failing earlier for MYP groups before the allow-list entries were added; it passes after them (agent run).

## Items

| # | Your answer | What changed | Live check | Waits on you |
|---|---|---|---|---|
| 10 Islamiyat packs | Sir Azam reviewed and approved | 5 drafts (3 Qur'an, 2 Pakistan Studies) carry reviewer `azam-siddique`, `reviewedDate` 2026-11-26 and a reviewNote saying the approval is owner-reported with no corrections supplied. Still hidden. | Not live | Your yes to publish (`reviewStatus: "draft"` to `"reviewed"`, and delete the draft banner on the 3 Qur'an files). His profile has no credentials. |
| 11 Question sets | Sir Sajawal (maths), Sir Nouman (chemistry) | Three review sheets in `reports/owner-decisions-3/review-sheets/` (3 to 4 pages each, not one). | n/a | Reviewers return corrections (shared Google Doc was my recommendation; you replied that review was done for item 10 only). |
| 12 Thin courses | Publish all | 33 of 36 published as `review-pending` with no reviewer; 15 are Islamiyat. 3 Hadith pages held. 21 duplicate-gate allow-list entries added. Table: `reports/owner-decisions-3/thin-drafts-table.md`. | Not live | Sir Azam to check the Hadith numbering and the 15 Islamiyat pages. |
| 13 Singapore IB | Existing IB reviewer re-reads | No change. IB school directory opens and has a programme filter; the Singapore results did not render, so "some international schools in Singapore are IB World Schools" is unconfirmed. | Not live | Reviewer confirmation, then update `reviewedDate`. |
| 14 Sources | Keep wording, add draft-law note | Qatar article keeps its sentence and adds a May 2026 draft-law note with two sources. British Council Pakistan supported; KHDA page unreadable (u.ae supports the wording); Qatar ministry pages unreadable (news reports support). | Not live | Nothing |
| 15 Market-failure figure | Board-specific; remove on AQA GCSE and OCR | OxfordAQA and AQA A Level pages use new figures (uploaded to R2, return 200). Figure removed on the 2 AQA GCSE and 2 OCR A Level pages. Cambridge pages unchanged. | Not live | Nothing |
| 16 Trustpilot | Manual invitations to all families | Not done: Trustpilot Business needs your sign-in. Draft invitation is in `OWNER-DECISIONS-2-REPORT.md`. | n/a | Sign in; family list; yes before anything is sent |
| 17 Brand mentions | Edarabia, The Tutors' Association, Expatica, Dawn | Listing text and Dawn pitch outline in `reports/owner-decisions-3/brand-listings-text.md`. Nothing submitted. | n/a | Fees, membership and safeguarding rules, Gulf advertising rules, a teacher name for Dawn; yes per submission |
| 18 Social | 2 to 3 posts a week on three channels | Plan and two weeks of drafts in `reports/owner-decisions-3/social-plan-and-posts.md`. Nothing posted. | n/a | Review the posts |
| 19 Journal | Malaysia, exam dates, MYP, fees; one a week | First article (exam dates 2027) drafted hidden; plan in `reports/owner-decisions-3/journal-plan.md`. | Not live | Reviewer; open the Cambridge zone timetables once before approval |
| 20 (RA) figures | Skip the upload | Two redrawn figures exist locally only. The four Islamiyat pages point back at the existing figures (D-546p). | n/a | Upload when ready (Cloudflare authorization was failing) |
| 21 Search Console | Read only | Indexed 20.6K, not indexed 5.09K. Normal: alternate canonical (parameter URLs), redirects, a few 404s from malformed links. Sitemap clean (no sitemap URL is a redirect source; 120 sampled URLs all 200). Not read: noindex 32 and discovered-not-indexed 2,475. No validation or indexing requested. | n/a | Decide what to do with 225 "different canonical" and 648 "crawled, not indexed" pages (mostly business and economics resources) |
| 22 Economics 9708 | n/a | "See also" links added in both directions on 8 pages, no merging. | Not live | Nothing |
| 23 Question sets | n/a | Three more hidden sets (9709 functions and algebra, 9701 acids and bases, 0625 energy), 137 script checks passed, review sheets written. | Not live | Physics reviewer name; teachers confirm M/A/B conventions |

## Still waits on you

1. Sign in to Cloudflare so the PR 255 build log can be read and a retry approved (or retry it yourself).
2. Approve this branch before I push anything; after merge I check live with cache-busted URLs.
3. Publish decision for the Islamiyat packs (item 10).
4. Trustpilot sign-in and send rule (item 16).
5. Sir Azam: Hadith numbering and the 15 Islamiyat thin pages.
6. Upload the two (RA) figures later.
