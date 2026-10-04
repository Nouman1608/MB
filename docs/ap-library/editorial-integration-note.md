# Editorial and integration note: trademarks, accuracy claims, search visibility

Written 5 October 2026, 03:40 PKT. Kept out of student-facing content on purpose.

## 1. College Board trademarks — the reason the library is not live

Source: College Board copyright and trademark guidelines, https://privacy.collegeboard.org/copyright-trademark/guidelines (read 5 Oct 2026). What they say, as relevant here:

- **Permission:** third-party use of College Board marks needs **prior written consent**; requests go to College Board's trademark team with samples (allow 4–6 weeks). A disclaimer does **not** replace permission.
- **Symbols:** use ® / ™ with each mark (AP®, Advanced Placement®).
- **Attribution:** "[Mark] is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this [site]." On websites it must appear at the foot of the home page (if it uses the marks) and of every page that uses them.
- **Not allowed:** marks in **domain names, web addresses or meta tags**; any wording that implies affiliation, sponsorship, endorsement or certification; the College Board logo without a licence; using the marks in **search-engine and social advertising** (e.g. Google Ads keywords).
- **Titles:** the guidelines' own example is the referential form "John Doe's Guide to AP® Calculus", not "AP Calculus Guide".

How the build follows this now:

| Requirement | Implementation |
|---|---|
| No marks in URLs | Routes look like `/advanced-course-resources/chemistry/` and `/advanced-course-resources/calculus-ab/` |
| No marks in meta tags | `AP_MARK_IN_METADATA = false`: `<title>`, meta description, Open Graph/Twitter, JSON-LD names and resource `title`/`description` use neutral wording ("Chemistry (advanced course)"); the validator rejects marks there. FAQ JSON-LD that would contain marks is suppressed. |
| Referential visible headings with ® | "Marlbridge guide to AP® Chemistry"; breadcrumbs and eyebrows use "AP® …". |
| Attribution | `AP_TRADEMARK_ATTRIBUTION` at the foot of every library page and inside the subject-hub AP section. |
| No implied endorsement | Footer note: Marlbridge is independent, not an authorized AP course provider, AP school or exam centre; resources are not official College Board materials. |
| Not live without permission | `AP_LIBRARY_PUBLIC = false`: nothing is built or linked in production. |

**Owner decision needed:** (a) apply to College Board for written permission (send the preview pages as samples), or (b) take legal advice on referential use. Record the outcome here. If permission allows marks in titles/meta, set `AP_MARK_IN_METADATA = true` and re-run the validator. Whatever the outcome, do **not** buy AP keywords in Google/Meta ads.

## 2. Accuracy and honesty rules built in

- Course structure, unit/topic numbering, weightings and exam formats come only from the official documents in `source-register.md`; each hub shows its sources and check date.
- Every question is original and labelled "Marlbridge practice"; rubrics are labelled "suggested Marlbridge rubric", never official scoring.
- No predicted scores; diagnostics (when written) are learning tools.
- No teacher names, credentials, reviews, results or review claims. Pages show "Drafted, awaiting AP-teacher review". A reviewer name/date can only be entered with status `reviewed`, and only as actually supplied (validator rule).
- Laboratory: every page states that reading or simulations do not meet the AP science lab requirement; hubs quote each CED's lab requirement.
- Marlbridge has AP teachers, but none is named anywhere until the owner supplies names and profiles.

## 3. Search, answer-engine and AI visibility (SEO / AEO / GEO / AIO / SXO)

Built in now (active the moment the library is public):

- **SEO:** neutral, descriptive titles ≤60 chars with the brand suffix logic; unique meta descriptions; canonical URLs; clean neutral routes; breadcrumbs + BreadcrumbList; `LearningResource` JSON-LD (type, time required, `teaches`, free, version, dates); `ItemList` on hubs and index; sitemap entries and `lastmod` (switch-controlled); internal links hub ⇄ topic ⇄ next topic ⇄ subject hubs; Pagefind indexing.
- **AEO (answer engines / featured snippets):** every resource opens with an answer-first "In short" box; hubs answer the obvious questions (exam format, units, what changed, prerequisites, calculator) in a FAQ; definitions are one-sentence and self-contained; tables for formats and weightings.
- **GEO / AIO (generative and AI search):** facts are stated with dates and official sources (checked 5 Oct 2026) so AI systems can cite them; each page carries version, update date and status; `public/llms.txt` gains an "Advanced courses" section automatically when the library goes public (`scripts/generate-llms-txt.mjs`).
- **SXO (search experience):** mobile-first layout tested at 390 px with no horizontal scroll; keyboard-accessible native `<details>`; accessible SVG diagrams with titles/descriptions; clear next-step navigation; correction link on every page; realistic study-time and difficulty labels; `audit:accessibility` passes.

Not done (and why): no AP keywords in ads (prohibited); no hreflang/translations; no `Course` schema (that would describe Marlbridge as the course provider — it is not); no review/rating schema (no genuine reviews).

## 4. Integration choices worth knowing

- Separate collection, not the exam-board matrix (see README).
- Calculus AB/BC shared topics are written once (`calculusScope: ab-and-bc`) and listed on both hubs; BC-only material is labelled on the hub and page.
- Physics numbering follows the CEDs: Physics 2 Units 9–15; Physics C: E&M Units 8–13.
- Statistics uses only the revised 2026–27 five-unit framework; past Statistics exam papers before May 2027 follow the old nine-unit course (some removed topics), which is noted in the Papers 2025 folder README.
- The Chemistry course-overview PDF on AP Central still shows the old unit titles; the CED and course page (used here) show the current ones.
