# International growth: 30/60/90-day measurement plan

Written 2026-09-23 (PKT) for branch `growth-programme` (decisions D-295 to D-308 on this branch. Another session merged its own D-295 to D-299 to `main` on the same day, so these numbers must move up by five, to D-300 to D-305, when the branch is merged). Day 0 is the day this work is deployed to production.

## Baseline (captured 2026-09-23, before deployment)

**Google Search Console, domain property, web search, last 3 months.** Totals: 709 clicks, 41K impressions.

| Country | Clicks | Impressions | Avg. position | Tier |
|---|---|---|---|---|
| Pakistan | 139 | 3,664 | 10.96 | Pilot (home) |
| United Kingdom | 136 | 6,658 | 37.58 | Pilot |
| UAE | 35 | 1,132 | 11.24 | Pilot |
| Malaysia | 20 | 979 | 40.6 | Pilot, Tier 1 |
| Qatar | 3 | 268 | n/a | Pilot, Tier 1 |
| Jordan | 3 | 324 | 45.18 | Tier 1 (measurement only, no page) |
| India | 48 | 4,224 | 49.1 | Hub only |
| United States | 7 | 4,984 | n/a | Hub only |

- `/tutoring/` and `/trial/` had no impressions in any pilot country (country exports, 2026-09-23).
- Page indexing: 1.51K indexed, 1.77K not indexed. That breaks down as:
  - 878 alternate with canonical (718 www URLs, 159 `?page=`, 1 `?program=`)
  - 667 discovered but not indexed (642 resources, 25 checklists)
  - 205 page with redirect
  - 7 crawled but not indexed
  - 5 noindex
  - 4 returning 404

**GA4, Marlbridge property, last 28 days (26 Aug to 22 Sep 2026).** GA4 is consent-gated, so every figure below counts consenting visitors only.

| Metric | Count |
|---|---|
| Users | 607 |
| Sessions | 850 |
| `page_view` | 2,025 |
| `whatsapp_click` | 24 (19 users) |
| `form_start` | 16 |
| `trial_form_start` | 7 |
| `generate_lead` | 6 (5 users) |
| `trial_cta_click` | 5 |

## What to watch, and where

| Signal | Source | How to read it |
|---|---|---|
| Impressions and clicks for `/international-tutoring/`, `/uae/`, `/qatar/`, `/malaysia/`, `/pakistan/`, `/uk/`, `/gulf/` | Search Console → Performance → Pages, filtered by country | New pages start at zero. Any impressions are new demand coverage. |
| Hub → hub-to-tuition movement | GA4 → Pages and screens, with `page_path` on `trial_cta_click` and `generate_lead` | Look for paths that start on `/boards/…` and end on `/international-tutoring/` or `/trial/` (D-305, D-306). |
| Leads by country and offer | GA4 `generate_lead` by Country, plus the parameters `qualification`, `exam_board`, `tuition_format` | This separates a UAE Edexcel IGCSE enquiry from a Pakistan O Level one. |
| "Alternate with canonical" count | Search Console → Pages | This should fall as the 718 www URLs and the 159 `?page=` URLs age out (D-298 moved those variants to `#` fragments). |
| "Discovered, not indexed" | Search Console → Pages | 1,653 resources now link to their hub, and hubs link back (D-306). A falling count means the internal-link change is working. |
| Security headers | `curl -sI https://marlbridge.com/` | Should show `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` and a frame-ancestors CSP after deploy (D-295). |

## Checkpoints

**Day 30**

- Confirm every new URL is indexed. Use URL Inspection for the hub and the three country pages, and request indexing once.
- Check that `generate_lead` still fires and carries `page_path`.
- Record impressions for each country page.
- Take no content decisions yet: the numbers will be too small.

**Day 60**

- Compare pilot-country clicks against the baseline table above.
- If a country page has impressions but a CTR below 1% at a position of 10 or better, rewrite its title and description. Never add claims to do this.
- If Malaysia or Qatar gets tuition-intent impressions, ask the owner for business decisions 12 and 13: the IB fee and the confirmed time bands.

**Day 90**

- Decide on further country pages (register item 20). A page needs both sustained tuition-intent impressions and something country-specific to say.
- Otherwise, the hub keeps serving that country.
- Re-run the Search Console country exports and the GA4 event table so this baseline can be compared like for like.

## What not to do

- Do not publish fees, availability promises, results or testimonials to lift conversion.
- Do not bulk-edit `updatedDate` to chase "Discovered, not indexed".
- Do not add pages for countries without evidence (doorway risk). See D-303 for the countries deliberately not given a page.
