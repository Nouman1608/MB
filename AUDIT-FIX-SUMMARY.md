# Audit fixes: summary report

**Written: 2026-11-23 12:10 PKT** (Pakistan Standard Time)

PRs [224](https://github.com/Nouman1608/MB/pull/224) (T1 only) and [225](https://github.com/Nouman1608/MB/pull/225) (everything else) are merged into `main`. The Cloudflare production build is running, so nothing is confirmed live yet. The full item-by-item table is in `AUDIT-FIX-REPORT.md` in the repo.

**Checks:** the full build passed (exit 0), and the new consistency check and the exam-calendar test pass. An independent reviewer re-derived every calculation. No page was viewed in a browser, and `astro check` was not run.

## Area 1: content accuracy

**Fixed**

| Item | What changed |
|---|---|
| C1, C2 | The mole-concept notes now have units, and the hydrogen exception to the "under 1 mol" sense check (5 g H₂ = 2.5 mol). The practice total is stated as 37 marks (8 + 29), with examiner notes on every question. |
| C4 | Economics: the toll is now a transfer, not a social benefit. The lemons example reconciles, the public and merit good definitions are added, and the Pareto wording and the MC value at Q=40 are corrected. To make the example reconcile I changed the page's own invented time saving from 35 to 55. Three diagrams that contradicted 9708 or the corrected text were removed. |
| C5 | The AQA transport-in-cells notes lost the three Cambridge images that carried "Extended" or water-potential badges. |
| C6, C7 | C6: x₂ = √(√5 + 3) = 2.2882, with later steps rechecked. C7: the Q11(a) working is corrected, and 183 V stands. |
| C8 | 229 titles now read "Pearson Edexcel International A Level Mathematics". |
| C9, C11, C12, C13, C14 | Fixed after confirming each claim was true. C13: Henderson-Hasselbalch symbols and working on the AP chemistry 8.9 notes. C14: the 0580 Q2 answer now has "kg". |
| C15 | Islamiyat: (pbuh) and (RA) are applied throughout, and the Zayd claim is qualified. The Safiyya incident, the Sunni note on the Imams, the caliph table heading, the Yathrib/Madinah note, "Hadith" as the plural and straight apostrophes are done. The same rules were applied by script to 131 other Islamiyat files. |
| C16-C18 | The RCD row now names Pakistan, Iran and Turkey. The 0478 file-handling loop and the Q9 file-mode wording are corrected. |
| C21, C23, C24 | Nine legacy 0450 titles carry "(Cambridge 0450, exams to 2026)". The C23 calculation wording is fixed. Set-text lists are added to the Edexcel 4ET1 and Cambridge 0475 guides. |
| C28 | The cross-board sweep found about 21,600 raw matches. 92 STEM files had "Extended", "(Cambridge)" and water-potential wording fixed in alt text and captions. 8 economics files lost the "0455 syllabus" caption. |

**Checked, no change needed**
- C3: 5.5 is retained alongside 5.11, since the IB guide's 5.5 covers definite integrals by technology.
- C10, C20 and C22: the claims were not reproducible, or verified correct.
- C14 (calculus-ab 8.5): the stray "text" is just the SVG axis labels.
- C15: the front matter shown as visible text is not a template bug.
- C25: 191 of 214 Urdu resources already contain Urdu script. No Urdu was written.

**Report only:** C26 (overlapping blocks) and C27 (old and new page pairs). About 860 files carry Cambridge-origin image filenames, and about 2,470 lines still show Cambridge badges inside the pictures, since images were not edited.

## Area 2: course pages and hub

- **P1:** already fixed on main.
- **P15 and P19:** already done on the unmerged `seo/audit-nov-2026` branch.
- **P2:** the Economics 9708 FAQ lists all 11 topics, and two wrong topic tags are removed.
- **P3:** the 2058 FAQ now says "2 papers and 8 topics". "Five questions" was correct, and the 50% is shown as 8 + 14 + 14 + 14 marks.
- **P4:** the doubled paper label ("Paper 1: Paper 1") is fixed on 202 of 628 components and on `/syllabus-updates/`.
- **P5:** a new consistency check is wired into the build. It tolerates 60 existing cases of one practice URL under two topics.
- **P6, P7, P8:** combined guides are marked. Shared AS and A Level resources are counted once on course pages. IGCSE and O Level overlap is explained (75 shared Accounting resources, 59 Chemistry, 0 Commerce).
- **P9:** the "Classes offered" tags are kept, paired-code notes (0450/0264, 0475/0992, 0460/0976, 3247/3248) are added, and the qualification order is consistent.
- **P10, P11:** report only. 107 of 166 courses have no past-papers resource, and 21 courses have fewer than 40 resources. Edexcel IGCSE Mathematics exists, is published and has 157 resources.
- **P13:** one tuition block at the end of resource pages.
- **P14:** the signup qualification control is now a labelled select, with a no-JavaScript note.
- **P16, P18, P20:** link-text spacing, hidden FAQ toggle icons and one article-category style are fixed.
- **P17:** partly fixed. Stray headings and the duplicate tuition block are removed. The duplicate "Next steps" and "Related resources" blocks are in the markdown of about a quarter of pages and need your decision.

## Area 3: tools and reference pages

- **T1:** the exam-calendar labels are computed in the browser from the visitor's date. Dates stay plain text without JavaScript, and any entry deadline within 14 days gets a warning.
- **T2:** May/June 2027 exam window only (26 April to 11 June 2027). Cambridge hasn't published the key-dates document yet.
- **T3:** OxfordAQA 9725 now says AS first examined May/June 2027 and full A Level May/June 2028.
- **T4:** IB History legacy first teaching is 2015. AQA 7131 and 7132 first teaching is September 2023. IB Psychology 2019 marks now read "Not confirmed". Cambridge 0450, IB Psychology 2019 and IB Computer Science 2014 stay "Not recorded".
- **T5:** OCR H031 deliberately not added, since it would need a matrix row.
- **T6, T7:** the command-words page now says it is Cambridge only. Adding thresholds or other boards is report only.
- **T9, T10:** flashcard decks show exam years and an "outgoing" tag, and the headline counts what is listed (166 courses, with the 15 AP decks named separately).
- **T11:** the relative atomic mass card has your wording.
- **T12, T13, T14:** the 0610 Core diagnostic now says it is modelled on Paper 42. Diagnostics read "N questions on M topics", and the validator also caught 0620 Extended labelled "Six topics" when it covers five. The page states exactly what the code does with answers.
- **T15:** kept the 84-link list, as you decided.
- **T16-T20:** the Chemistry counts were both correct, and the page now explains why they differ. The `/levels/` page has an AP card. SAT is out of the `/programs/` title. IB DP "World History" shows as "History", and IB Computer Science exam years are labelled. Languages shows "No resources published yet".

## Still needs you

The full report lists 24 questions. The ones that matter most:
- **Safiyya incident:** confirm it is the one the 2058 course uses (the Islamiyat teacher).
- **"Hadith":** should the other ~405 uses of "Hadiths" change, and should (RA) go on the Imams?
- **Urdu review:** the 27 Urdu pages with little or no script need a reviewer.
- **Images:** the Cambridge badges and the diagrams above need regenerating.
- **P17:** choose how to remove the duplicate "Next steps" blocks.
- **Title naming:** "International GCSE" or "IGCSE" on OxfordAQA Chemistry (56 titles use each).
- **Browser check:** the exam calendar, tuition block, signup form and FAQ icons.
