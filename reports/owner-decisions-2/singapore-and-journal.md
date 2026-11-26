# Singapore IB article and journal location articles (owner decisions round 2)

Date: 26 Nov 2026. Branch owner-decisions-2. Nothing committed, no build run.

## Files changed
- `src/content/articles/ib-in-singapore-online-diploma-and-myp-lessons.md` (still `draft: true`)
- `src/content/articles/ib-tuition-in-singapore-online.md` (live)
- `src/content/articles/a-level-tuition-in-dubai-cambridge-or-edexcel.md`
- `src/content/articles/edexcel-igcse-tutoring-in-qatar.md`
- `src/content/articles/how-online-igcse-and-a-level-tuition-works-from-the-uae.md`
- `src/content/articles/igcse-tuition-in-malaysia-online.md`
- `src/content/articles/o-level-tuition-in-lahore-online-or-in-person.md`
- `reports/owner-decisions-2/journal-topics.md` (proposal, new)
- This report. No slugs, URLs, prices or legal pages changed. `src/data/country-guides.ts` read only.

## 1. Singapore draft
- The four-language section is replaced by "Languages: lessons are in English only". It says Marlbridge teaches in English only, that no French, German, Spanish or other language is offered for DP Language B or MYP Language Acquisition, and that any language in a free resource is an example. The "four official languages" framing is removed (it implied other languages), and the excerpt and SEO description were changed to match.
- The clause "Language B is assessed the same way at SL and HL except for..." is deleted. The IB Language B guide is not in OneDrive (`new topicals/IB - MASTER` holds only a README and an inventory for Chemistry). The Paper 1/2/Oral mark totals are kept: they come from the repo's own record (`src/data/academic/assessments.ts`, DP Language B, which says it was checked on 2026-09-21 against the IB guide). I did not re-read the IB PDF.
- Left `draft: true`. Reasons:
  1. The analytics sentences (about 21 Singapore visits that stayed longer than five seconds, 1 July to early October 2026, with the pages they landed on) come from the owner's analytics. I could not check them; they are flagged, not changed.
  2. The article duplicates the live one (see below), and D-541 says the draft stays hidden while the owner decides.
  3. The Paper 1/2/Oral figures rest only on the repo record.
- Other statements in the draft that trace to a source: reply hours (`PRICING_TERMS.enquiryResponse`), UTC+8 and UTC+5 with no clock change (IANA time zone data, confirmed with Node `Intl` for 2027), Lahore teaching (site policy). Unverified in the draft: "no classes offered in Environmental Systems and Societies" (this follows the site's own 'resources only' convention; not re-checked).

### Does the new article duplicate the live one?
Yes, substantially. Both target "IB tuition Singapore, online, Diploma and MYP":
- Same subject lists (DP Mathematics, Computer Science, Economics, MYP Language Acquisition are in both).
- Same Singapore-time section (3 hours ahead of Lahore, one-to-one so the time is flexible).
- Same integrity paragraph (internal assessments, Extended Essay, MYP projects must be the student's own work).
- Same "not taught" list (the Singapore national curriculum and its exams).
- Same fees paragraph (Singapore dollar figure on `/singapore/`, indicative conversion, confirmed in writing).
- Same trial instructions.

What only the draft has: the analytics-led course list, the Singapore/Lahore time table, the WhatsApp reply hours, the Language B paper structure, and the English-only language statement. `country-guides.ts` lists only `ib-tuition-in-singapore-online` for Singapore; the draft is not linked anywhere.

Recommendation: do not publish both. Keep the live article and fold the draft's unique parts into it (time table, reply hours, English-only language note, Language B paper structure once the IB guide is read), then delete the draft. Publishing both would compete for the same query. Replacing the live article would lose its reviewer credit (nouman-ahmed, reviewed 2026-10-10), so that is the owner's call. I did not add the English-only note to the live article beyond the edits below.

## 2. Six location articles
Edits: shared template sentences were rewritten into location-specific text, and each article got a closing italic "Sources (read 26 November 2026)" line. The content model has no sources field (`src/content.config.ts`), so the line is in the body. Existing facts, links and slugs are kept. No fee or price was added; the Malaysia article's fee section now says fees are on the pricing page and the Malaysia page, with no figure.

Shared-sentence count from `reports/audit3/A5-article-overlap.py` (before, after):
| Article | Before | After |
|---|---|---|
| Dubai | 8 | 1 |
| Qatar | 11 | 0 |
| UAE | 10 | 0 |
| Singapore (live) | 8 | 2 |
| Malaysia | 11 | 1 |
| Lahore | 3 | 0 |
| Total | 51 | 4 |
The four left are the "Sources" line (Dubai, Singapore) and two near-identical headings ("Which IGCSE subjects are taught" / "Which IB subjects are taught").

New sourced content and its sources:
- Cambridge administrative zones: Dubai 4, Qatar 3, Malaysia (Kuala Lumpur) 5, Singapore 5, Pakistan (Karachi) 4. Source: Cambridge International administrative zone lookup, queried 26 Nov 2026.
- May/June 2027 exam window for zones 1 to 5, 26 April to 11 June 2027, and "entry and results dates unpublished on 23 November 2026". Source: Cambridge zone timetables as recorded in `src/data/academic/exam-calendar.ts` (verifiedOn 2026-11-23). Serves `cambridge exam dates 2027`; each article links to `/exam-calendar/`.
- UTC offsets (UAE +4, Qatar +3, Malaysia and Singapore +8, Pakistan +5, no daylight saving): IANA tz data, confirmed with Node `Intl` for January and July 2027.
- ADEK is "the Education Sector regulator across the Emirate of Abu Dhabi": read directly on adek.gov.ae/en/About-Us.
- Not read directly; taken from search-result summaries of official pages (the owner should glance at them): KHDA as the government authority for private education in Dubai (khda.gov.ae returned 403); MOEHE licensing private schools under Law No. 23 of 2015 (edu.gov.qa returned a certificate error); Malaysia MOE Private Education Division guideline defining an international school (offers another country's curriculum, English medium, admits foreign and Malaysian citizens) and the malaysia.gov.my list of British curriculum with Cambridge IGCSE and A Level as examples; British Council Pakistan handling Cambridge school entries (guides to making entries).
- Search Console queries served: `cambridge igcse malaysia`, `igcse tuition malaysia` (existing subject and board content plus the new Malaysia school/zone section), `igcse fees malaysia` (new "IGCSE fees in Malaysia" section, no figure), `cambridge exam dates 2027` (all six).

Not done, because I could not source them: school-term dates for any country (Malaysia MOE calendar page returned no dates; the other countries' calendars not found), and Singapore regulator text.

### Existing unsourced claims left in place (owner to decide)
- Qatar: "Pearson Edexcel International GCSE is one of the most common qualifications in Doha's British-curriculum schools".
- Singapore live: "Many international schools in Singapore teach the International Baccalaureate" (generally true, but not cited).
- UAE: I removed "UAE schools that follow a British curriculum mostly use Pearson Edexcel or Cambridge, often both in the same school" and replaced it with the regulator sentence. Dubai article intro still says "British-curriculum schools in Dubai and Abu Dhabi mostly teach one of two international A Levels".
- Malaysia: "Many international schools in Malaysia teach Cambridge IGCSE" (intro).
- Pakistan article: "Most O Level students in Pakistan sit Cambridge O Level in the June or November series" (intro).

## 3. Journal topics
Eight proposals with queries, sources and reasons are in `reports/owner-decisions-2/journal-topics.md`. None written. Items other than the four queries named in your brief are marked "(verify)" because I did not query Search Console.

## Validators run
- `scripts/validate-academic-content.mjs`: OK.
- `scripts/validate-commercial-claims.mjs`: OK.
- `scripts/validate-review-integrity.mjs`: PASS, 0 problems (16 articles checked).
- `reports/audit3/A5-article-overlap.py`: results above.
- The full `validate:academic` chain and the build were not run.

## Unresolved, needs the owner
1. Singapore: replace, merge or keep both (recommend merge into live, then delete the draft); confirm the analytics figures; give the IB Language B guide if the Paper 1/2/Oral figures are to be cited from it.
2. Open the KHDA, MOEHE, Malaysia MOE and British Council Pakistan pages and confirm the four regulator and registration sentences (listed above).
3. Decide on the unsourced intro claims listed above.
4. Add the June 2027 key dates (Cambridge, from 4 January 2027) to `exam-calendar.ts`; the six articles then need their "entry and results dates were unpublished" sentence updated.
