# Marlbridge International Growth programme: final report

Written 2026-09-23, about 16:15 PKT. Branch `growth-programme`, 16 commits on top of `main` at `17e97b72`. **Not deployed yet (see section 25).**

## 1. Summary

Security, trust copy, pricing honesty, crawl hygiene, hub metadata, search, internal linking and a full international layer are built and pass every gate. The international layer is one hub plus UAE, Qatar and Malaysia pages, with Pakistan, UK and Gulf brought into line.

**Blocker.** Another Claude session merged a large pull request to `origin/main` today, at 15:29 PKT: #52, "D-295..D-299: free revision tools, structured trial form, five tuition sections". It overlaps 19 of the files changed here, and uses the same decision numbers. The branch has **not** been rebased onto it. Section 25 sets out the choices.

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

Correction and trial links now use `#page=` and `#program=` fragments, so they create no new crawlable URL variants. The 404 page no longer declares a canonical. Three legacy 404 URLs are redirected, with both slash variants. Two chemistry resources had broken links from unescaped markdown, which are fixed. The www-to-apex redirect was already live (a 301, checked).

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

## 9. Conversion paths (D-300, D-305, D-306)

- A structured trial form was built on this branch as D-300. **Note:** PR #52 on `main` ships a different structured trial form (`TrialRequestForm`), which should win.
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

## 19. Trial funnel (D-300)

- Optional structured fields, all checked against allow-lists.
- Spam defences: Turnstile, a honeypot, the KV rate limit and a 20 KB body cap.
- "A request, not a booking" wording.
- Field-level server errors.
- Lead events carry the offer context.

No real enquiry was sent: the network call was intercepted in testing. **Superseded in practice by PR #52's form (section 25).**

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

## 25. Deployment status and the merge decision

**Gates, on a clean `npm ci`:**

| Gate | Result |
|---|---|
| `test:api` | 68 pass |
| `astro check` | 0 errors |
| `validate:academic` | pass |
| build | 2,155 pages |
| `audit:all` | 0 problems |
| `test:practice-analytics` | 24/24 |
| `npm audit` | 0 vulnerabilities |
| Negative suite | 5 mutations, all caught after D-308 |

**Why it is not pushed:**

1. The GitHub connector returned "Bad credentials", and the link to the PC dropped, so there was no push route.
2. `origin/main` moved to `d90bd7a0` (PR #52), which overlaps this branch.

**Overlap with PR #52:**

- Decision numbers: D-295 to D-299 are taken on both sides, so this branch's numbers must be renumbered D-300 to D-305.
- Trial form: `TrialRequestForm` on `main` versus this branch's fields.
- Syllabus finder: `SyllabusFinder` on `main` versus this branch's combobox.
- 19 shared files: `enquiry-validation.ts`, `_headers`, `worker/index.ts`, the gulf, pakistan and uk pages, `resources/[slug]`, the hub template, `authors/[slug]`, `llms.txt`, and others.

**Recommended merge:** rebase onto `main`, keep `main`'s trial form and finder, and carry over this branch's other work:

- security (the admin key, enquiry hardening, headers)
- pricing statuses and the validator checks
- crawl fixes and hub titles
- Pagefind scoping
- the international hub and country pages
- internal links
- accessibility
- the register and the measurement plan

A bundle of the 16 commits is provided (`marlbridge-growth-programme-2026-09-23.bundle`).

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

*Numbering note.* All D-numbers in this report are the numbers on the branch (D-295 to D-308). When the branch is merged onto the new `main`, each becomes n+5 (D-300 to D-305), because `main` already uses D-295 to D-299. For example, the hub is D-302 on the branch and becomes D-307.
