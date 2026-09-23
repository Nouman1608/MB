# Marlbridge International Growth programme: final report

Written 2026-09-23, about 16:15 PKT; updated about 22:45 PKT after rebasing. Branch `growth-programme`, rebased onto `main` at `df8b6b36` (PR #55). **Not deployed yet (see section 25).** Decisions are D-295 to D-308; `main` already uses D-286 to D-293.

## 1. Summary

Security, trust copy, pricing honesty, crawl hygiene, hub metadata, search, internal linking and a full international layer are built and pass every gate. The international layer is one hub plus UAE, Qatar and Malaysia pages, with Pakistan, UK and Gulf brought into line.

**Rebased.** While this work was in progress, another session merged PRs #52 to #55 to `main` (free revision tools, a structured trial form, and tuition sections, recorded as D-286 to D-293). This branch has been rebased onto that `main`. `main`'s trial form is kept, and this branch's own trial form is withdrawn (D-300). Section 25 lists what was merged by hand.

## 2. Baseline (before)

- 2,151 built pages; 2,144 sitemap URLs; all self-canonical; 7 noindex (correct).
- 253 redirects; `audit:all` passing; `npm audit` clean after the devalue fix.
- Search Console:
  - 1.51K indexed, 1.77K not indexed.
  - 878 alternate with canonical: 718 www URLs, 159 `?page=`, 1 `?program=`.
  - 667 discovered but not indexed; 205 page with redirect.
  - 4 returning 404: 3 legacy URLs plus Zaraz.
- Performance, last 3 months: 709 clicks, 41K impressions.
- GA4, 28 days: 607 users, `generate_lead` 6, `trial_form_start` 7, `whatsapp_click` 24.
- Production responses carried no security headers (checked live 23 Sep).

## 3. Search Console analysis

Pilot-country searchers land on board hubs, resources and checklists. None reached `/tutoring/` or `/trial/`, which had zero impressions in PK, GB, AE, QA and MY. The UK has high impressions at a poor position (37.6). Pakistan and the UAE rank around 11. Low-CTR pages at a good position: the Islamiyat Paper 1 resource (position 8.5), the O Level Urdu hub (6.25) and the Jawad Tariq profile (7.8).

## 4. Crawl and indexing (D-298)

Correction links now use a `#page=` fragment, so the 1,653 resources no longer link to crawlable duplicates. Trial links keep `main`'s `?program=` / `?course=` / `?source=` parameters, which the owner-approved trial form reads. They self-canonicalise to `/trial/`. The 404 page no longer declares a canonical. Three legacy 404 URLs are redirected, with both slash variants. Two chemistry resources had broken links from unescaped markdown, which are fixed. The www-to-apex redirect was already live (a 301, checked).

## 5. Redirects

Redirect rules went from 253 to 259; `audit:redirects` shows 0 problems. The Zaraz 404 is left to Cloudflare (register item 17).

## 6. Metadata (D-299, D-307)

Hub titles now name the document searchers ask for: "Specification" or "Syllabus" with the edition years, or "Subject Guide" for MYP. Person profile titles now include the subject taught. 180 titles and 162 descriptions changed; there are 0 duplicates.

## 7. Direct-answer (AEO) patterns

- Each hub lead answers the question "what is the X syllabus, which years, how is it assessed".
- Each hub has at-a-glance rows for the official document and the checklist.
- Country pages carry FAQs with FAQPage JSON-LD. There are now 224 FAQPage nodes, up from 220.

## 8. Entity and schema graph

Unchanged and valid: EducationalOrganization, WebSite and WebPage on every page, plus Person for teachers. No LocalBusiness or AggregateRating markup was added: there is no local branch, and there are no genuine ratings to mark up.

## 9. Conversion paths (D-305, D-306)

- The trial form is `main`'s owner-approved form (D-286, D-291 to D-293). This branch's own form was withdrawn (D-300).
- Taught hubs link to the international hub.
- Every resource links to its syllabus hub. Before, 103 of 1,653 did; now all 1,653 do.

## 10. Editorial review states

This was already enforced by `validate-review-integrity`. A resource marked "reviewed" needs a real, named reviewer who is not its author. Current state: 1,653 resources are `review-pending` and 1 article is reviewed. Nothing was bulk-marked. A negative test confirmed the gate fails correctly.

## 11. Trust consistency (D-296)

- Every tuition invitation matches what is actually taught: 216 resources-only pages say classes are not offered.
- There is one teaching-location wording: in person in Lahore, online everywhere else.
- "Where a public source exists" was added to the teacher credentials wording.
- Free-trial wording is consistent.
- A Bengali typo was fixed.
- On the country pages:
  - Each states "no office, centre or teacher in the country".
  - The Gulf page had called one-to-one prices "confirmed". They are now labelled indicative.

## 12. International hub (D-302)

`/international-tutoring/` has:

- The at-a-glance block.
- A country selector.
- Boards and subjects taught, computed from the data.
- A time-zone table.
- Fee status: confirmed, indicative or on enquiry.
- The trial steps.
- The curricula that are not taught.
- FAQs.

The footer now links to the hub in place of three country links.

## 13 to 17. Pilot markets (D-303)

| Market | Page | Market-specific content |
|---|---|---|
| Pakistan | `/pakistan/` (improved) | Learners Academy relationship; Lahore address; searched Cambridge hubs; exam series |
| UK | `/uk/` (improved) | No UK office; UK routes not taught; searched AQA/Edexcel hubs; one-to-one marked indicative |
| UAE | `/uae/` (new) | Edexcel-first board order; one hour behind Lahore; AED fees; UAE curricula not taught |
| Qatar | `/qatar/` (new) | Edexcel, Cambridge and IB; two hours behind; QAR fees; the MYP I&S hub labelled resources-only |
| Malaysia | `/malaysia/` (new) | Cambridge-first; three hours ahead; RM fees, all indicative; SPM, STPM and UEC not taught |

- **Jordan (Tier 1)** is measured but gets no page. It had 3 clicks and 324 impressions, and has nothing country-specific to say, so a page would be a doorway.
- The countries deliberately not given a page are listed, with their figures, in the D-303 decision-log entry.

## 18. Pricing architecture (D-297, D-308)

- Each fee row carries a status: confirmed or indicative.
- Malaysia is shown at RM 279/353 for group classes and RM 51/59 one-to-one, all indicative. The conversion rate is 68.01 PKR per MYR, taken on 23 Sep.
- One-to-one fees outside Pakistan are indicative.
- IB outside Pakistan is "on enquiry".
- USD bands are **not** published (register item 11).
- Duplicate currency symbols were removed.
- The validator gained two checks:
  - [2d]: drift and labelling on indicative rows.
  - [2e]: only owner-set regions may show confirmed fees. The negative suite showed this gap before the fix.

## 19. Trial funnel (D-295; D-300 withdrawn)

The live funnel is `main`'s structured trial form. This branch adds only API hardening:

- a 20 KB body cap
- an exact Referer origin check
- own-property guards
- 200-character caps on short fields
- nosniff and noindex headers on JSON responses

Turnstile, the honeypot and the KV rate limit are unchanged. No real enquiry was sent: tests intercept the network call.

## 20. Pagefind (D-301)

- Calls to action and related-content grids are excluded from the index. The query "free trial" now matches 76 pages instead of 1,693.
- Filters were added on hubs and checklists.
- H1s are weighted.
- There is an accessible combobox that finds a syllabus by code or by name.
- The search input has a label and a live region.

## 21. Internal linking (D-305, D-306)

- Hub to the international hub: 135 taught hubs.
- Resource to its syllabus hub: 1,653 of 1,653.
- Country pages link to the hubs that searchers there actually find.
- Orphans: 0. Broken links: 0.

## 22. Performance and accessibility (D-304)

- axe (WCAG 2.2 AA tags) is clean on 15 sampled pages at 390 px, with no horizontal overflow.
- Scrollable tables were made keyboard-focusable across the site.
- The static audit covers 2,154 pages with 0 problems.
- Lighthouse was not re-run in this session. The last run is recorded in `docs/reports/lighthouse-2026-08-25.md`, and none of the changes add scripts to page load.

## 23. Security and privacy (D-295)

- The admin search-data API needs a bearer key. It fails closed until `ADMIN_API_KEY` is set (register item 10).
- The enquiry API has:
  - a body cap
  - an exact Referer origin check
  - own-property guards
  - nosniff and noindex headers
- Sitewide security headers: nosniff, Referrer-Policy, Permissions-Policy, X-Frame-Options DENY, and a CSP covering frame-ancestors, base-uri, object-src and form-action.
- GA4 remains consent-gated.
- **Secrets:** the uploaded "for claude.txt" held live API keys (GitHub, Cloudflare, Pexels, Pixabay, FLUX). They were not used or stored. **Revoke them.**

## 24. Business decisions register

Items 10 to 20 were added to `docs/business-decisions-register.md`:

- ADMIN_API_KEY
- USD bands
- IB fees outside Pakistan
- Time bands
- The "confirmed in writing" process
- The inbox, left as is
- Progress-report and safeguarding claims
- Cloudflare housekeeping
- `updatedDate` practice
- IB licence
- Further country pages

## 25. Deployment status and the merge

**Gates after the rebase, on a clean `npm ci`:**

| Gate | Result |
|---|---|
| `test:api` | 78 pass |
| `test:tools` | 60 pass |
| `astro check` | 0 errors |
| `validate:academic`, including diagnostics | pass |
| build | clean |
| `audit:all` | 0 problems |
| axe (WCAG 2.2 AA tags) at 390 px | clean on 15 pages, including `/`, `/trial/`, the hub and the country pages |
| `npm audit` | 0 vulnerabilities |
| Negative suite | 5 of 5 mutations caught |

**Merged by hand against `main` (PRs #52 to #55):**

- **Enquiry validation.** `main`'s trial fields and rules are kept. This branch adds the hardening listed in section 19.
- **Worker secrets.** `ADMIN_API_KEY` joins `main`'s "not yet set, fails closed" list, so the validator reminds you on every run until it is set.
- **Trial links.** `main`'s query parameters are kept (section 4).
- **Hub pages.** This branch's "Syllabus" / "Specification" titles are kept. The five hubs with a tuition section also keep "& Online Tuition" in the title and their "Request a free trial class" button. The international-tutoring link sits under that button.
- **Gulf and Pakistan pages.** `main`'s FAQs and computed counts are kept, along with this branch's no-office wording, indicative labels, searched hubs and hub breadcrumb. A duplicate "in person in Lahore" paragraph was removed.
- **`llms.txt`.** `main`'s revision-tool lines are kept, and this branch's hub and country lines are added.
- **`package-lock.json`.** `main`'s lock file is kept, with only the devalue security bump from 5.9.0 to 5.9.4.

**Push route.** The branch is pushed from your PC clone as `growth-programme`. It is never pushed to `main`, so merging stays your decision: open the pull request, check the preview, then merge.

## 26. Risks and limitations

- The country pages depend on Search Console snapshots dated 23 Sep. They need refreshing at day 90.
- Indicative fees drift with exchange rates. `validate-fx-policy` fails the build when they go stale.
- There is no teacher-availability data, so the pages only do time arithmetic and promise no slots.
- Translated pages keep the short trial form and do not show the new English-only sections.
- Measurement is consent-gated, so GA4 undercounts.

## 30/60/90-day plan

See `docs/growth/international-measurement-plan-2026-09-23.md` on the branch:

- **Day 30:** confirm indexing and events.
- **Day 60:** compare against the baseline by country, and fix titles only where the numbers say so.
- **Day 90:** decide on further country pages, using the evidence rule in register item 20.

*Numbering note.* This report uses the numbers as merged (D-295 to D-308). Earlier versions of this report used D-286 to D-300 for the same items.