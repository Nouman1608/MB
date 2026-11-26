# Social plan and two weeks of draft posts (item 18, D-546j)

Date: 26 Nov 2026. Branch owner-decisions-3. **Nothing has been posted, scheduled or sent.** These are drafts for the owner to review. Every fact below points to a page path in this repo; if a page changes, the post must change with it. No grade promises, no prices, no testimonials, no figures about students, reviews or results.

## 1. Posting plan

- **Cadence:** 3 posts a week (Monday, Wednesday, Friday), the same idea adapted per profile. 2 a week is the minimum if time is short: keep the Monday tip and the Friday resource.
- **Weekly pattern:** Monday, a revision tip. Wednesday, a question with its answer. Friday, a new or useful resource page.
- **Platforms:** Instagram (image plus short caption; links go in the bio because captions do not carry clickable links), LinkedIn (a little longer, for parents and teachers, link in the post), Facebook (same as LinkedIn tone, link in the post).
- **Source rule:** a post may only state what the linked page states. Quote the page, do not extend it. The linked page URL is always on `https://marlbridge.com`.
- **Images:** only the Marlbridge brand files in `public/images/brand/` (`marlbridge-mark.png`, `marlbridge-horizontal.png`, `marlbridge-og.png`) or a plain text card in the brand colours made by the owner. No stock photography, no AI-generated people, no photo of a student or teacher without written consent. A screenshot of a site page is fine if it shows no personal data.
- **Never in a post:** fees or discounts, "guaranteed" or "will get" a grade, named student results, reviews, exam dates not on `/exam-calendar/`, any statement about student numbers or years in operation (not recorded on the site).
- **Trial offer wording** (only wording the site uses, `src/data/pricing.ts` `PRICING_TERMS.freeTrial`): "The first trial class is free."
- **Replying:** answer comments with the same page link; do not give individual grade predictions or fee quotes in comments (send to `/pricing/` or WhatsApp, number in `src/data/site.ts`).
- **Review step:** the owner approves each post before it goes out. No tracking parameters are used below.

## 2. Draft posts

Suggested dates only. Week 1 starts Monday 30 Nov 2026, week 2 Monday 7 Dec 2026.

### Week 1

**W1 Monday: revision tip, "Rereading is not recalling"**
- Link: `https://marlbridge.com/articles/how-to-revise-for-a-science-examination/`
- Source: `src/content/articles/how-to-revise-for-a-science-examination.md` ("Retrieve before you review": blank page, check and correct, question; "about a minute a mark").
- Image: text card, or `public/images/brand/marlbridge-mark.png`.
- Text (all three profiles):
  > Rereading notes feels like revision, but it measures familiarity, not recall. Try this instead: close the notes and write everything you can remember about one topic on a blank page. Then open the notes and correct it in a different colour. Then answer two or three exam questions on that topic, timed at about a minute a mark.
  > Full guide: marlbridge.com/articles/how-to-revise-for-a-science-examination/
- Instagram: same caption, with "Link in bio" in place of the URL.

**W1 Wednesday: question with answer, "Can a Core tier IGCSE student get an A?"**
- Link: `https://marlbridge.com/articles/igcse-or-o-level-which-should-my-child-take/`
- Source: same-named article, "Difference 1: tiers": Core leads to grades C to G, Extended to A* to E; the tier is chosen when the student is entered. It also states "O Level subjects are generally not tiered".
- Image: text card with the question.
- Text:
  > Question: can a student entered for the Core tier of a Cambridge IGCSE subject get an A?
  > Answer: no. Core leads to grades C to G and Extended to grades A* to E, so a student entered for Core cannot get an A. The tier is chosen when the student is entered, so ask the school early. O Level subjects are generally not tiered.
  > More on IGCSE and O Level: marlbridge.com/articles/igcse-or-o-level-which-should-my-child-take/

**W1 Friday: resource, command words**
- Link: `https://marlbridge.com/command-words/`
- Source: `src/pages/command-words/index.astro` and `src/data/academic/command-words.ts`: Cambridge's own generic command-word list, searchable; Cambridge defines "State" as "express in clear terms"; the Pearson Edexcel documents are listed separately, not blended.
- Image: screenshot of the search box on the page, or the brand mark.
- Text:
  > Command words tell you what an exam question wants. Cambridge defines "State" as "express in clear terms", so a short, direct answer is enough. Our free command-words page lists Cambridge's own generic list and keeps the Pearson Edexcel documents separate. Search it by word.
  > marlbridge.com/command-words/

### Week 2

**W2 Monday: revision tip, "Mark your own paper without mercy"**
- Link: `https://marlbridge.com/articles/understanding-mark-schemes-and-examiner-reports/`
- Source: `src/content/articles/understanding-mark-schemes-and-examiner-reports.md` ("How to use them together": for every mark lost, write one of three causes).
- Image: text card with the three causes.
- Text:
  > After a timed past paper, mark it against the official mark scheme. For every mark you lose, write one of three causes: you did not know it, you knew it but did not say it precisely, or you misread the question. Only the first is a content gap. The other two are habits, and both can be practised.
  > marlbridge.com/articles/understanding-mark-schemes-and-examiner-reports/

**W2 Wednesday: question with answer, "Do I get marks if my final answer is wrong?"**
- Link: same article as W2 Monday.
- Source: same file, "What a mark scheme actually tells you": "Method carries credit. In quantitative subjects, marks are often available for the correct method even when the final figure is wrong."
- Image: text card.
- Text:
  > Question: if my final answer is wrong in a maths or science question, can I still get marks?
  > Answer: often yes. In quantitative subjects, marks are often available for the correct method even when the final figure is wrong, which is why unexplained answers are expensive. Show your working.
  > marlbridge.com/articles/understanding-mark-schemes-and-examiner-reports/

**W2 Friday: resource, Cambridge exam calendar**
- Link: `https://marlbridge.com/exam-calendar/`
- Source: `src/data/academic/exam-calendar.ts`: results for the November 2026 series are 7 January 2027 (AS & A Level) and 14 January 2027 (IGCSE and O Level); May/June 2027 exam window 26 April to 11 June 2027 (zones 1 to 5) and to 12 June (zone 6); entry deadlines and results dates for June 2027 are not yet published.
- Image: screenshot of the calendar page, or the brand mark.
- **Check before posting:** if Cambridge has published the June 2027 key-dates document by then, the "not yet published" sentence is no longer true and the calendar page must be updated first (see `journal-plan.md`).
- Text:
  > Cambridge exam dates for 2027: the May/June 2027 exam window runs from 26 April to 11 June (to 12 June in zone 6). Cambridge has not yet published entry deadlines or results dates for that series, and we have not guessed them. Results for the November 2026 series are 7 January 2027 for AS & A Level and 14 January 2027 for IGCSE and O Level. Our calendar shows the dates Cambridge has published and the source for each.
  > marlbridge.com/exam-calendar/

### Spare posts (same rules; use when a slot is free)

- **Revision planner:** `/revision-planner/`. The page offers a free weekly plan for IGCSE, O Level, A Level, GCSE or IB: rate topics, add exam dates and free time, weak topics go first (page description in `src/pages/revision-planner/index.astro`).
- **Printable checklists:** `/checklists/`. Topic-by-topic revision checklists sourced from the official syllabus for each board, qualification and subject Marlbridge teaches (page description).
- **Free trial:** `/trial/`. "The first trial class is free." It is a real class in the format you are considering (group or one-to-one); details on the page. Use sparingly and never with a price.

## 3. Profile checklists (what is missing)

**Source note:** the brief refers to an "Update section" of `reports/owner-decisions-2/README-pack-and-uae.md`. That file in this worktree contains no such section (it covers review packs and UAE facts only), and no other report in the repo records the state of the profiles. The items below therefore come from the brief (Instagram: bio and link present, 0 posts; LinkedIn: no location) and from `src/data/site.ts`; anything else is marked "to check". Please confirm against the live profiles.

URLs (from `src/data/site.ts`): Instagram `https://www.instagram.com/marlbridgeofficial/`; LinkedIn `https://www.linkedin.com/company/144554905/`; Facebook `https://www.facebook.com/marlbridge`.

**Instagram**
- [x] Bio and link present (per brief). Confirm the link is `https://marlbridge.com`.
- [ ] 0 posts: publish the first approved post (W1 Monday) so the profile is not empty.
- [ ] Profile picture: brand mark from `public/images/brand/` (to check).
- [ ] Bio wording uses only site facts (for example "Online tutoring for learners anywhere" and "free study library", from `site.defaultDescription`); no claims about results (to check).

**LinkedIn (company page)**
- [ ] Location missing (per brief): add Lahore, Pakistan if the owner wants it shown. The site records the city and country (`site.about`); do not add the street address.
- [ ] Website field: `https://marlbridge.com` (to check).
- [ ] About text: from `site.defaultDescription` and "Marlbridge is the international branch of Learners Academy" (`site.founding`). No founding year and no head count (neither is on the site).
- [ ] Logo and banner (to check); industry and company size are the owner's choice.
- [ ] The public page could not be confirmed from a script (LinkedIn returns 403 to bots, `reports/S1.md`): owner to check it opens for a logged-out visitor.

**Facebook**
- [ ] Page link live (returned 200 to a script, `reports/S1.md`).
- [ ] Website, About text and profile picture match Instagram and LinkedIn (to check).
- [ ] Contact: WhatsApp number from `site.whatsapp.display` only; no street address.
- [ ] First post as above.

**All three**
- [ ] Same name "Marlbridge", same description, same URL (consistent with `brand-listings-text.md`).
- [ ] Decide who answers comments and messages, and how fast; keep replies consistent with `PRICING_TERMS.enquiryResponse` in `src/data/pricing.ts`.
- [ ] TikTok, X and YouTube profiles exist in `site.social` but are outside this plan (Threads is suspended and deliberately unlisted).
