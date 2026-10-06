# A-level topic gaps, round 2 (D-400, 6 October 2026)

## What was done

Every topic with no page in the next five weakest specifications now has a study guide, revision notes and a
practice set: 88 topics, 264 new pages. `npm run coverage:academic-v2` now reports zero topics without
resources for all five.

| Specification | Topics filled | Version the pages cite |
|---|---|---|
| OxfordAQA International AS and A-level Chemistry (9620) | 29 | Version 5.3 |
| OxfordAQA International AS and A-level Accounting (9615) | 18 | Version 1.2 |
| OxfordAQA International AS and A-level Business (9725) | 14 | Version 1.1 (revised specification, first teaching September 2026) |
| OxfordAQA International AS and A-level Computer Science (9645) | 14 | Version 1.1 |
| Pearson Edexcel International A Level Accounting (YAC11) | 13 | Issue 2, September 2018 |

Official PDFs were downloaded from oxfordaqa.com and qualifications.pearson.com on 6 October 2026
(session workspace `/home/claude/syllabi/round2/`).

**Method.** One writer and one independent verifier per topic, as in D-399. Every number was recomputed in
Python by both; algorithm traces, SQL and code outputs were run. Verifiers mapped every learning outcome
to the page that teaches it.

**Originality across boards.** OxfordAQA 9620 and 9615 follow AQA 7405 and 7127 closely, and the D-399 pages
on those AQA specs went live today. First-wave verifiers found reused examples, figures and near-copied
sentences, so later writers ran a 10-word overlap scan against every page and checked that every invented
business or person name is unused on the site. Verifiers repeated the scan and replaced anything shared.

## Data and site fixes

- **9725 Business record:** now cites the Version 1.1 PDF (September 2026). Version 1.1 renumbered the
  second "3.2.1.2" to 3.2.1.3 and corrected the spelling "managment"; the record follows it. Slugs unchanged.
- **9615 exam-preparation page:** called the A-level papers "A-level Paper 1/2"; the specification names
  them Paper 3 and Paper 4. Corrected, and a sentence that stated how layout marks are awarded was reworded
  as advice.
- **Audit rule:** the "backticked internal value" check now ignores backticks inside rendered `<code>`/`<pre>`
  elements, because Haskell writes infix functions as `div` and `mod`.

## Facts

Writers in this round could search and fetch sources, so most outside facts were checked as they wrote:
standard electrode potentials, Kw and indicator ranges, IAS 1/2/7/16 points, Companies Act 2006 sections,
Partnership Act 1890 section 24, the IESBA Code threats and ISA 705 opinions, Haskell semantics, C#/VB.Net
syntax, port numbers, Deep Blue and AlphaGo. Verifiers checked the rest or softened them. Items worth a
teacher's eye: the OxfordAQA ratio guide prints dividend cover with "x 100" (the pages note it), and the
9645 specification's foldr write-out and factorial example differ from real Haskell (the pages teach
correct Haskell without saying the specification is wrong).
