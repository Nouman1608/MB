# Quick fixes (D-543a, c, d, l)

## 1. AP meta descriptions (D-543a)
- Ran `node reports/owner-decisions/apply-ap-seo-descriptions.mjs --write`: 312 added, 0 replaced, 312 rows. Script validates length 70-160, no markup, no duplicates, none equal to any description, before writing.
- git diff on src/content/ap-resources: 312 files, 312 insertions, 0 deletions; every added line is `seoDescription:` (schema allows 70-160). Note: D-543a says 120-165 characters; the script and schema limit is 160, and all rows passed the script.
- Validators: validate:ap-library PASS (3270 resources); validate:ap-flashcards OK; validate:resource-titles PASS (18309 resources, 0 duplicate search titles, course consistency 0 hard problems); validate:academic exit 0 (QA integrity OK). (First attempt hit ERR_MODULE_NOT_FOUND while another agent was working in node_modules; the rerun passed.)

## 2. IAL Maths D1 code WDM11 (D-543c)
Only 2 of the yma01 pages and the subject guide carry unit codes in this tree, so D-534d pages (WMA11/WME01/WST01) were used as the style model: code in brackets after the unit name in the opening paragraph. Added "(WDM11)" at first intro mention of Unit D1 in 16 files (src/content/resources/):
- edexcel-a-level-mathematics-yma01-d1-algorithms.md, -on-graphs.md, and their -revision-notes.md (4)
- edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt (.md, -practice, -revision-notes)
- edexcel-ial-mathematics-linear-programming-formulation-graphical-solution-and (.md, -practice, -revision-notes)
- edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling (.md, -practice, -revision-notes)
- edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum (.md, -practice, -revision-notes)
Unchanged: edexcel-a-level-mathematics-yma01-subject-guide.md (already lists WDM11/01 in its table), frontmatter `topic:` fields, assessments.ts, syllabus-topics.ts, flashcards, grade-thresholds.
Unresolved: the "33 yma01 pages, three course pages and one article" from D-534d do not match this tree (the article a-level-tuition-in-dubai-cambridge-or-edexcel.md names WMA11-14 and WME01/WST01 only and never mentions D1, so I added nothing there; syllabuses.ts line 758 names "Decision Mathematics" generically). Not added to the two yma01-d1 -practice pages (no intro naming the unit).

## 3. Islamiyat (RA) (D-543l)
Changed:
- cambridge-o-level-islamiyat-2058-first-islamic-community-revision-notes.md, descendants table: Zaynab (RA); Ruqayya (RA), Umm Kulthum (RA).
- cambridge-o-level-islamiyat-2058-first-islamic-community.md, "Children" list: same three names (Fatima (RA) was already marked in that list).
- cambridge-igcse-islamiyat-0493-first-islamic-community.md, "Daughters" list: same three.
- cambridge-igcse-islamiyat-0493-first-islamic-community-revision-notes.md, "Children of Khadija (RA)" list: same three.
Not changed (listed for decision):
- 0493 revision-notes line 64 table row "Married his daughters Ruqayya, then Umm Kulthum", 0493 practice lines 79-80, 128-129 (mark-scheme answers), 2058 practice line 78 and 85 (mark-scheme answers), 2058 revision-notes answer key line 196, 0493 revision-notes answer key line 192: answer text, left as is.
- oxfordaqa-igcse-islamiyat-9237-early-life-of-hazrat-muhammad-revision-notes.md line 83 ("Zainab, Ruqayyah, Umm Kulthum, Fatimah") and the 9237 main page line 69: no (RA) used for the daughters there, including Fatimah, so no equivalent list marking; left.
- Flashcards (src/data/flashcards/*islamiyat*.ts): no mention of these daughters.
- Figure scripts (scripts/topic-figures/lessons/cambridge-o-level-islamiyat-2058-first-islamic-community.mjs line 311, cambridge-igcse-islamiyat-0493-first-islamic-community.mjs line 185) contain no (RA) at all, even for Fatima, so the 03-descendants (2058) and 04-descendants (0493) images show these names without (RA). Images/scripts untouched; the owner may want the figures redrawn with (RA) throughout. Alt text and captions on the pages (2058 line 96/98, 0493 line 107/111) also lack (RA) as they describe the image.

## 4. Market-failure figure captions (D-543d)
Figure: igcse-economics-the-allocation-of-resources--03-causes-of-market-failure.webp (alt: public goods, merit and demerit goods, external costs and benefits, abuse of monopoly power, factor immobility). 19 pages use it. Caption everywhere: "Market failure has five main causes." No page edited (no caption says Cambridge-only).
Non-Cambridge pages (8), all in src/content/resources/:
- oxfordaqa-a-level-economics-market-failure-public-goods-and-externalities.md line 53-55 and -revision-notes.md line 50-52: CONFLICT. Page text (line 50 notes) lists the specification causes as public goods, externalities, merit and demerit goods, monopoly and other imperfections, and inequality of income and wealth; the figure's fifth cause is factor immobility and omits inequality. Recommend removing or recaptioning.
- aqa-a-level-economics-the-price-mechanism-and-the-meaning-of-market-failure.md lines 214-215 and -revision-notes.md lines 172-173: probable conflict. Page table (line 205) groups "monopoly and other imperfections" including immobile resources, so the five-cause caption and separate factor-immobility picture do not match AQA's grouping; check against the AQA spec before deciding.
- aqa-gcse-economics-market-failure-misallocation-of-resources.md lines 108-109 and -revision-notes.md lines 59-60: caption claims five main causes; AQA GCSE spec wording not verified here, page has no matching five-cause list.
- ocr-a-level-economics-scarcity-choice-the-margin-and-the-market-economy.md lines 266-267 and -revision-notes.md lines 290-291: figure is off-topic for a scarcity/margin page and the caption's five-cause claim has no support in the page text.
Cambridge IGCSE/O Level pages (11 files, including igcse-economics-the-allocation-of-resources.md and o-level-economics-the-allocation-of-resources*.md) not reviewed.
