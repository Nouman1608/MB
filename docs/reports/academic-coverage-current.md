# Academic coverage report — current (canonical)

**This is the canonical, current coverage report.** It is generated, never edited by
hand: `npm run coverage:academic-v2` writes this file, [`academic-coverage-current.json`](academic-coverage-current.json)
and [`academic-coverage-current.csv`](academic-coverage-current.csv) from one dataset in one run, so all three
agree. Older reports in this folder are dated historical evidence; see [README.md](README.md).

Data as of **2026-11-05** (the latest date found in the data; no generation timestamp is
written, so an unchanged repository regenerates identical files).

## Totals

| Measure | Value |
| --- | --- |
| Source resources | 7379 |
| Active board × qualification × subject combinations | 166 |
| Combinations with an official-source record | 166/166 |
| Combinations with a topic map | 166/166 |
| Zero-resource combinations | 0 |
| Combinations under 8 resources | 13 |
| Combinations with topics that have no resource | 26 |
| Median resources per combination | 40 |
| Median words per resource | 2077 |
| Resources under 900 words | 15 |
| Resources under 400 words | 0 |
| Demand | NO_DATA (no analytics, Search Console, CRM or enrolment source is read) |

### Assessment completeness

| Completeness | Combinations |
| --- | --- |
| VERIFIED_COMPLETE | 166 |
| VERIFIED_PARTIAL | 0 |
| NO_ASSESSMENT_RECORD | 0 |

A combination is `VERIFIED_COMPLETE` when every assessment record for it has an official
source, a verification date, components with marks and durations, and an assessment model.

### Review status

| reviewStatus | Resources |
| --- | --- |
| review-pending | 5099 |
| reviewed | 2280 |

`reviewed` means a named Marlbridge subject teacher is credited as accountable for the page
(owner decision D-379); it is not a record of a dated, line-by-line check. `review-pending`
pages have no accountable teacher yet. The per-resource detail, including the repository-side
verification of every pending page, is in [academic-review/ledger-summary.md](academic-review/ledger-summary.md).

### Resources by type

| Type | Resources |
| --- | --- |
| study-guides | 2428 |
| revision-notes | 2396 |
| past-papers | 16 |
| practice-questions | 2406 |
| exam-preparation | 110 |
| subject-guides | 23 |
| learning-articles | 0 |

### Resources by board tag

| boards | Resources |
| --- | --- |
| aqa | 996 |
| cambridge | 2007 |
| edexcel | 956 |
| ib | 1016 |
| ocr | 1105 |
| oxfordaqa | 1299 |

## By board

| Board | Combinations | Official source record | Topic map | Resources | Under 8 resources | Assessment complete | Reviewed | Review-pending |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AQA | 26 | 26 | 26 | 1186 | 0 | 26 | 336 | 850 |
| Cambridge | 55 | 55 | 55 | 2150 | 0 | 55 | 1109 | 1041 |
| Pearson Edexcel | 21 | 21 | 21 | 956 | 3 | 21 | 204 | 752 |
| International Baccalaureate | 21 | 21 | 21 | 1016 | 0 | 21 | 413 | 603 |
| OCR | 13 | 13 | 13 | 1253 | 0 | 13 | 96 | 1157 |
| OxfordAQA | 30 | 30 | 30 | 1299 | 10 | 30 | 227 | 1072 |

## By qualification

| Qualification | Combinations | Resources (per-combination count, a resource can count for more than one) |
| --- | --- | --- |
| GCSE | 18 | 808 |
| A Level | 59 | 3551 |
| AS Level | 3 | 338 |
| IGCSE | 47 | 1534 |
| O Level | 18 | 613 |
| IB Diploma Programme | 16 | 822 |
| IB Middle Years Programme | 5 | 194 |

## Known risks

| Risk | Combinations |
| --- | --- |
| evidence-is-blanket-authorization-not-subject-specific-confirmation | 80 |
| topics-without-resources | 26 |
| under-8-resources | 13 |

## Zero-resource combinations

- None.

## Combinations under the 8-resource depth target

- Pearson Edexcel A Level Law (YLA1): 7
- Pearson Edexcel IGCSE World History (4HI1): 7
- Pearson Edexcel A Level English Literature (YET01): 7
- OxfordAQA IGCSE Computer Science (9210): 7
- OxfordAQA IGCSE English Language (9270): 7
- OxfordAQA IGCSE English Literature (9275): 7
- OxfordAQA IGCSE World History (9245): 7
- OxfordAQA IGCSE Islamiyat (9237): 7
- OxfordAQA IGCSE Pakistan Studies (9236): 7
- OxfordAQA IGCSE Psychology (9218): 7
- OxfordAQA IGCSE Sociology (9292): 7
- OxfordAQA A Level English Language (9670): 7
- OxfordAQA A Level English Literature (9675): 7

## Topic-map gaps (topics no resource maps to)

- AQA GCSE English Language (8700): spoken-language-8700
- AQA A Level Computer Science (7517): theory-of-computation-7517, fundamentals-of-data-representation, fundamentals-of-computer-systems, fundamentals-of-computer-organisation-and-architecture, consequences-of-uses-of-computing, fundamentals-of-communication-and-networking, fundamentals-of-databases, big-data, fundamentals-of-functional-programming, systematic-approach-to-problem-solving-7517
- AQA A Level Law (7162): law-of-contract-7162, human-rights-7162
- AQA GCSE English Literature (8702): skills-8702
- Cambridge A Level Computer Science (9618): hardware, system-software, security-privacy-and-data-integrity, ethics-and-ownership, algorithm-design-and-problem-solving, data-types-and-structures, programming, software-development, hardware-and-virtual-machines, security, artificial-intelligence-ai, computational-thinking-and-problem-solving
- Cambridge A Level World History (9489): historical-interpretations-9489, depth-study-european-interwar-9489, depth-study-usa-9489, depth-study-international-history-9489
- Cambridge A Level Law (9084): law-of-contract-9084, law-of-tort-9084
- Cambridge IGCSE Computer Science (0478): software, the-internet-and-its-uses, automated-and-emerging-technologies, algorithm-design-and-problem-solving-0478, programming-0478, databases-0478, boolean-logic
- Cambridge IGCSE ICT (0417): the-systems-life-cycle, safety-and-security, audience, communication-0417, file-management, images, layout, styles, proofing, graphs-and-charts, document-production, databases-0417, presentations, spreadsheets-0417, website-authoring
- Cambridge O Level Commerce (7100): logistics-in-commerce-7100, aids-to-trade-that-support-commerce-7100, sustainability-and-ethics-7100
- Cambridge IGCSE English Literature (0475): component-5-coursework-0475
- Cambridge A Level English Literature (9695): paper-4-pre-and-post-1900-poetry-and-prose-9695
- Cambridge IGCSE Environmental Management (0680): the-atmosphere-and-human-activities-0680, ecosystems-biodiversity-and-fieldwork-0680, natural-hazards-0680, human-population-0680
- Cambridge O Level Environmental Management (5014): water-5014-2027, the-atmosphere-and-human-activities-5014-2027, ecosystems-biodiversity-and-fieldwork-5014-2027, natural-hazards-5014-2027, human-population-5014-2027
- Cambridge IGCSE Commerce (0715): logistics-in-commerce-0715, aids-to-trade-that-support-commerce-0715, sustainability-and-ethics-0715
- Pearson Edexcel A Level Urdu Language (9UR0): theme-1-evolving-pakistani-society-9ur0, theme-2-art-and-culture-urdu-speaking-world-9ur0, theme-3-immigration-multicultural-society-9ur0
- Pearson Edexcel IGCSE English Language (4EA1): spoken-language-endorsement-4ea1
- Pearson Edexcel A Level English Literature (YET01): unit-3-poetry-and-prose-yet01, unit-4-shakespeare-and-pre-1900-poetry-yet01
- International Baccalaureate IB Diploma Programme Psychology (DP Psychology (2019) / DP Psychology (2027)): ib-dp-psychology-sociocultural-approach, ib-dp-psychology-approaches-to-researching-behaviour, ib-dp-psychology-abnormal-psychology, ib-dp-psychology-developmental-psychology, ib-dp-psychology-health-psychology, ib-dp-psychology-psychology-of-human-relationships
- International Baccalaureate IB Diploma Programme Geography (DP Geography): ib-dp-geography-freshwater, ib-dp-geography-oceans-coastal-margins, ib-dp-geography-extreme-environments, ib-dp-geography-geophysical-hazards, ib-dp-geography-leisure-tourism-sport, ib-dp-geography-food-health, ib-dp-geography-urban-environments, ib-dp-geography-global-resource-consumption, ib-dp-geography-power-places-networks, ib-dp-geography-human-development-diversity, ib-dp-geography-global-risks-resilience, ib-dp-geography-fieldwork
- International Baccalaureate IB Diploma Programme World History (DP History): ib-dp-world-history-prescribed-subjects, ib-dp-world-history-world-history-topics, ib-dp-world-history-hl-options-depth-studies
- OxfordAQA IGCSE Computer Science (9210): data-representation-9210, computer-systems-9210, computer-networks, cyber-security-9210, relational-databases-and-sql, web-page-design
- OxfordAQA IGCSE English Language (9270): non-exam-assessment-9270, speaking-and-listening-optional-endorsement-9270
- OxfordAQA IGCSE English Literature (9275): route-b-poetry-and-non-exam-assessment-9275
- OxfordAQA A Level English Language (9670): unit-3-language-variation-9670, unit-4-language-exploration-9670
- OxfordAQA A Level English Literature (9675): unit-3-elements-of-crime-and-mystery-9675, unit-4-literary-representations-9675

## Stale verification (older than 180 days before 2026-11-05)

- None.

## Missing reviewer

- AQA GCSE Biology (8461): 12 review-pending resource(s) with no reviewer
- AQA GCSE Business (8132): 29 review-pending resource(s) with no reviewer
- AQA GCSE Chemistry (8462): 15 review-pending resource(s) with no reviewer
- AQA GCSE Economics (8136): 36 review-pending resource(s) with no reviewer
- AQA GCSE Mathematics (8300): 21 review-pending resource(s) with no reviewer
- AQA GCSE Physics (8463): 1 review-pending resource(s) with no reviewer
- AQA GCSE Psychology (8182): 8 review-pending resource(s) with no reviewer
- AQA A Level Accounting (7127): 47 review-pending resource(s) with no reviewer
- AQA A Level Biology (7402): 81 review-pending resource(s) with no reviewer
- AQA A Level Business (7132): 51 review-pending resource(s) with no reviewer
- AQA A Level Chemistry (7405): 100 review-pending resource(s) with no reviewer
- AQA A Level Economics (7136): 121 review-pending resource(s) with no reviewer
- AQA A Level Mathematics (7357): 81 review-pending resource(s) with no reviewer
- AQA A Level Physics (7408): 37 review-pending resource(s) with no reviewer
- AQA A Level Psychology (7182): 38 review-pending resource(s) with no reviewer
- AQA AS Level Business (7137): 51 review-pending resource(s) with no reviewer
- AQA AS Level Economics (7135): 121 review-pending resource(s) with no reviewer
- Cambridge A Level Accounting (9706): 38 review-pending resource(s) with no reviewer
- Cambridge A Level Biology (9700): 32 review-pending resource(s) with no reviewer
- Cambridge A Level Business (9609): 69 review-pending resource(s) with no reviewer
- Cambridge A Level Economics (9708): 150 review-pending resource(s) with no reviewer
- Cambridge A Level Information Technology (9626): 54 review-pending resource(s) with no reviewer
- Cambridge A Level Mathematics (9709): 3 review-pending resource(s) with no reviewer
- Cambridge A Level Psychology (9990): 9 review-pending resource(s) with no reviewer
- Cambridge IGCSE Accounting (0452): 54 review-pending resource(s) with no reviewer
- Cambridge IGCSE Biology (0610): 3 review-pending resource(s) with no reviewer
- Cambridge IGCSE Business (0450 / 0264): 69 review-pending resource(s) with no reviewer
- Cambridge IGCSE Economics (0455): 78 review-pending resource(s) with no reviewer
- Cambridge IGCSE Mathematics (0580): 29 review-pending resource(s) with no reviewer
- Cambridge O Level Biology (5090): 48 review-pending resource(s) with no reviewer
- Cambridge O Level Business (7115): 50 review-pending resource(s) with no reviewer
- Cambridge O Level Computer Science (2210): 1 review-pending resource(s) with no reviewer
- Cambridge O Level Economics (2281): 88 review-pending resource(s) with no reviewer
- Cambridge O Level Mathematics (4024): 28 review-pending resource(s) with no reviewer
- Cambridge O Level Physics (5054): 11 review-pending resource(s) with no reviewer
- Cambridge O Level Statistics (4040): 50 review-pending resource(s) with no reviewer
- Cambridge O Level Accounting (7707): 54 review-pending resource(s) with no reviewer
- Cambridge IGCSE Global Perspectives (0457): 75 review-pending resource(s) with no reviewer
- Cambridge A Level Global Perspectives (9239): 12 review-pending resource(s) with no reviewer
- Cambridge IGCSE Statistics (0479): 33 review-pending resource(s) with no reviewer
- Cambridge IGCSE Chemistry (0620): 1 review-pending resource(s) with no reviewer
- Cambridge O Level Chemistry (5070): 2 review-pending resource(s) with no reviewer
- Pearson Edexcel A Level Accounting (YAC11): 51 review-pending resource(s) with no reviewer
- Pearson Edexcel A Level Biology (YBI11): 57 review-pending resource(s) with no reviewer
- Pearson Edexcel A Level Business (YBS11): 21 review-pending resource(s) with no reviewer
- Pearson Edexcel A Level Chemistry (YCH11): 96 review-pending resource(s) with no reviewer
- Pearson Edexcel A Level Economics (YEC11): 111 review-pending resource(s) with no reviewer
- Pearson Edexcel A Level Mathematics (YMA01): 109 review-pending resource(s) with no reviewer
- Pearson Edexcel A Level Physics (YPH11): 12 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Biology (4BI1): 30 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Chemistry (4CH1): 25 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Economics (4EC1): 60 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Mathematics (4MA1): 36 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Accounting (4AC1): 45 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Business (4BS1): 45 review-pending resource(s) with no reviewer
- Pearson Edexcel GCSE Business (1BS0): 54 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Business (DP Business Management): 84 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Psychology (DP Psychology (2019) / DP Psychology (2027)): 10 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Biology (DP Biology): 117 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Chemistry (DP Chemistry): 84 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Economics (DP Economics): 75 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Physics (DP Physics): 83 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Global Politics (DP Global Politics): 34 review-pending resource(s) with no reviewer
- International Baccalaureate IB Middle Years Programme Mathematics (MYP Mathematics): 36 review-pending resource(s) with no reviewer
- International Baccalaureate IB Middle Years Programme Sciences (MYP) (MYP Sciences): 6 review-pending resource(s) with no reviewer
- International Baccalaureate IB Middle Years Programme Design (MYP) (MYP Design): 34 review-pending resource(s) with no reviewer
- International Baccalaureate IB Middle Years Programme Individuals and Societies (MYP) (MYP Individuals and Societies): 40 review-pending resource(s) with no reviewer
- OCR AS Level Economics (H060): 141 review-pending resource(s) with no reviewer
- OCR GCSE Chemistry (J248): 45 review-pending resource(s) with no reviewer
- OCR GCSE Physics (J249): 105 review-pending resource(s) with no reviewer
- OCR GCSE Biology (J247): 93 review-pending resource(s) with no reviewer
- OCR GCSE Mathematics (J560): 108 review-pending resource(s) with no reviewer
- OCR GCSE Business (J204): 18 review-pending resource(s) with no reviewer
- OCR GCSE Economics (J205): 33 review-pending resource(s) with no reviewer
- OCR A Level Chemistry (H432): 115 review-pending resource(s) with no reviewer
- OCR A Level Physics (H556): 105 review-pending resource(s) with no reviewer
- OCR A Level Biology (H420): 95 review-pending resource(s) with no reviewer
- OCR A Level Mathematics (H240): 102 review-pending resource(s) with no reviewer
- OCR A Level Business (H431): 56 review-pending resource(s) with no reviewer
- OCR A Level Economics (H460): 141 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Accounting (9215): 54 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Business (9225): 21 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Economics (9214): 39 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Mathematics (9260): 93 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Biology (9201): 42 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Chemistry (9202): 54 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Physics (9203): 66 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Psychology (9218): 7 review-pending resource(s) with no reviewer
- OxfordAQA A Level Accounting (9615): 54 review-pending resource(s) with no reviewer
- OxfordAQA A Level Business (9625 / 9725): 57 review-pending resource(s) with no reviewer
- OxfordAQA A Level Computer Science (9645): 42 review-pending resource(s) with no reviewer
- OxfordAQA A Level Economics (9640): 132 review-pending resource(s) with no reviewer
- OxfordAQA A Level Mathematics (9660): 126 review-pending resource(s) with no reviewer
- OxfordAQA A Level Biology (9610): 66 review-pending resource(s) with no reviewer
- OxfordAQA A Level Chemistry (9620): 95 review-pending resource(s) with no reviewer
- OxfordAQA A Level Physics (9630): 99 review-pending resource(s) with no reviewer
- OxfordAQA A Level Psychology (9685): 25 review-pending resource(s) with no reviewer

## Recommended next action

| Next action | Combinations |
| --- | --- |
| Named-reviewer sign-off of review-pending resources. | 95 |
| None. | 38 |
| Write resources for unmapped topics (n). | 26 |
| Add resources to reach the 8-resource depth target. | 7 |

Overall: the largest outstanding item is human sign-off: 5099 review-pending resources need a named, authorised reviewer (queue: [academic-review/signoff-queue.md](academic-review/signoff-queue.md)).

## Every combination

| Board | Qualification | Subject | Code | Resources | Reviewed / pending | Assessment | Topics without resources | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AQA | GCSE | Biology | 8461 | 42 | 30 / 12 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Business | 8132 | 38 | 9 / 29 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Chemistry | 8462 | 49 | 34 / 15 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Economics | 8136 | 52 | 16 / 36 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | English Language | 8700 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 1 | Write resources for unmapped topics (1). |
| AQA | GCSE | World History | 8145 | 11 | 11 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | GCSE | Mathematics | 8300 | 40 | 19 / 21 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Physics | 8463 | 31 | 30 / 1 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Psychology | 8182 | 8 | 0 / 8 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Sociology | 8192 | 23 | 23 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | A Level | Accounting | 7127 | 55 | 8 / 47 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Biology | 7402 | 92 | 11 / 81 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Business | 7132 | 61 | 10 / 51 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Chemistry | 7405 | 108 | 8 / 100 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Computer Science | 7517 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 10 | Write resources for unmapped topics (10). |
| AQA | A Level | Economics | 7136 | 129 | 8 / 121 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | English Language | 7702 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | A Level | Law | 7162 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 2 | Write resources for unmapped topics (2). |
| AQA | A Level | Mathematics | 7357 | 91 | 10 / 81 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Physics | 7408 | 45 | 8 / 37 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Psychology | 7182 | 38 | 0 / 38 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Sociology | 7192 | 34 | 34 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | AS Level | Business | 7137 | 61 | 10 / 51 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | AS Level | Economics | 7135 | 129 | 8 / 121 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | English Literature | 8702 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 1 | Write resources for unmapped topics (1). |
| AQA | A Level | English Literature | 7712 / 7717 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | A Level | Accounting | 9706 | 46 | 8 / 38 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Biology | 9700 | 90 | 58 / 32 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Business | 9609 | 84 | 15 / 69 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Computer Science | 9618 | 15 | 15 / 0 | VERIFIED_COMPLETE (staged) | 12 | Write resources for unmapped topics (12). |
| Cambridge | A Level | Economics | 9708 | 165 | 15 / 150 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | English Language | 9093 | 13 | 13 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Cambridge | A Level | World History | 9489 | 9 | 9 / 0 | VERIFIED_COMPLETE (staged) | 4 | Write resources for unmapped topics (4). |
| Cambridge | A Level | Information Technology | 9626 | 63 | 9 / 54 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Law | 9084 | 8 | 8 / 0 | VERIFIED_COMPLETE (staged) | 2 | Write resources for unmapped topics (2). |
| Cambridge | A Level | Mathematics | 9709 | 62 | 59 / 3 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Physics | 9702 | 76 | 76 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Cambridge | A Level | Psychology | 9990 | 9 | 0 / 9 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Sociology | 9699 | 18 | 18 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Cambridge | IGCSE | Accounting | 0452 | 75 | 21 / 54 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Biology | 0610 | 67 | 64 / 3 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Business | 0450 / 0264 | 78 | 9 / 69 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Computer Science | 0478 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 7 | Write resources for unmapped topics (7). |
| Cambridge | IGCSE | Economics | 0455 | 86 | 8 / 78 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | World History | 0470 | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Cambridge | IGCSE | ICT | 0417 | 19 | 19 / 0 | VERIFIED_COMPLETE (component-based) | 15 | Write resources for unmapped topics (15). |
| Cambridge | IGCSE | Mathematics | 0580 | 60 | 31 / 29 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Physics | 0625 | 22 | 22 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Cambridge | IGCSE | Sociology | 0495 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Biology | 5090 | 57 | 9 / 48 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Business | 7115 | 63 | 13 / 50 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Commerce | 7100 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| Cambridge | O Level | Computer Science | 2210 | 17 | 16 / 1 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Economics | 2281 | 101 | 13 / 88 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | English Language | 1123 | 10 | 10 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | World History | 2147 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Mathematics | 4024 | 55 | 27 / 28 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Physics | 5054 | 40 | 29 / 11 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Sociology | 2251 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Statistics | 4040 | 58 | 8 / 50 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Accounting | 7707 | 75 | 21 / 54 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | English Literature | 0475 | 12 | 12 / 0 | VERIFIED_COMPLETE (component-based) | 1 | Write resources for unmapped topics (1). |
| Cambridge | A Level | English Literature | 9695 | 9 | 9 / 0 | VERIFIED_COMPLETE (staged) | 1 | Write resources for unmapped topics (1). |
| Cambridge | IGCSE | Pakistan Studies | 0448 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Pakistan Studies | 2059 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | IGCSE | Islamiyat | 0493 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Islamiyat | 2058 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | IGCSE | Geography | 0460 | 32 | 32 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Cambridge | O Level | Geography | 2217 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | A Level | Geography | 9696 | 32 | 32 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Cambridge | IGCSE | Global Perspectives | 0457 | 75 | 0 / 75 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Global Perspectives | 9239 | 12 | 0 / 12 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Environmental Management | 0680 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 4 | Write resources for unmapped topics (4). |
| Cambridge | O Level | Environmental Management | 5014 | 16 | 16 / 0 | VERIFIED_COMPLETE (linear) | 5 | Write resources for unmapped topics (5). |
| Cambridge | IGCSE | Urdu Language | 0539 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Urdu Language | 3247 / 3248 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | IGCSE | Statistics | 0479 | 42 | 9 / 33 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Commerce | 0715 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| Cambridge | IGCSE | Chemistry | 0620 | 61 | 60 / 1 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Chemistry | 5070 | 61 | 59 / 2 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Chemistry | 9701 | 130 | 130 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Pearson Edexcel | A Level | Accounting | YAC11 | 58 | 7 / 51 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | A Level | Biology | YBI11 | 65 | 8 / 57 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | A Level | Business | YBS11 | 28 | 7 / 21 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | A Level | Chemistry | YCH11 | 103 | 7 / 96 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | A Level | Economics | YEC11 | 119 | 8 / 111 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | A Level | Law | YLA1 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| Pearson Edexcel | A Level | Mathematics | YMA01 | 116 | 7 / 109 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | A Level | Physics | YPH11 | 45 | 33 / 12 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | A Level | Urdu Language | 9UR0 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| Pearson Edexcel | IGCSE | Biology | 4BI1 | 45 | 15 / 30 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | Chemistry | 4CH1 | 40 | 15 / 25 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | Economics | 4EC1 | 68 | 8 / 60 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | English Language | 4EA1 | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 1 | Write resources for unmapped topics (1). |
| Pearson Edexcel | IGCSE | World History | 4HI1 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| Pearson Edexcel | IGCSE | Mathematics | 4MA1 | 55 | 19 / 36 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | Physics | 4PH1 | 24 | 24 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Pearson Edexcel | IGCSE | Accounting | 4AC1 | 45 | 0 / 45 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | Business | 4BS1 | 45 | 0 / 45 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | GCSE | Business | 1BS0 | 54 | 0 / 54 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | English Literature | 4ET1 | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Pearson Edexcel | A Level | English Literature | YET01 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 2 | Write resources for unmapped topics (2). |
| International Baccalaureate | IB Diploma Programme | Business | DP Business Management | 94 | 10 / 84 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Diploma Programme | Language A: Language and Literature | DP Language A: Language and Literature | 34 | 34 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Language A: Literature | DP Language A: Literature | 34 | 34 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Computer Science | DP Computer Science (2014) / DP Computer Science (2027) | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Psychology | DP Psychology (2019) / DP Psychology (2027) | 10 | 0 / 10 | VERIFIED_COMPLETE (component-based) | 6 | Write resources for unmapped topics (6). |
| International Baccalaureate | IB Diploma Programme | Biology | DP Biology | 127 | 10 / 117 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Diploma Programme | Chemistry | DP Chemistry | 94 | 10 / 84 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Diploma Programme | Economics | DP Economics | 84 | 9 / 75 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Diploma Programme | Geography | DP Geography | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 12 | Write resources for unmapped topics (12). |
| International Baccalaureate | IB Diploma Programme | World History | DP History | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 3 | Write resources for unmapped topics (3). |
| International Baccalaureate | IB Diploma Programme | Language B | DP Language B | 34 | 34 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Mathematics: Analysis and Approaches | DP Mathematics: Analysis and Approaches | 55 | 55 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Mathematics: Applications and Interpretation | DP Mathematics: Applications and Interpretation | 61 | 61 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Physics | DP Physics | 91 | 8 / 83 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Diploma Programme | Environmental Systems and Societies | DP Environmental Systems and Societies | 40 | 40 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Global Politics | DP Global Politics | 34 | 0 / 34 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Middle Years Programme | Language Acquisition (MYP) | MYP Language Acquisition | 34 | 34 / 0 | VERIFIED_COMPLETE (criterion-referenced) | 0 | None. |
| International Baccalaureate | IB Middle Years Programme | Mathematics | MYP Mathematics | 46 | 10 / 36 | VERIFIED_COMPLETE (criterion-referenced) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Middle Years Programme | Sciences (MYP) | MYP Sciences | 40 | 34 / 6 | VERIFIED_COMPLETE (criterion-referenced) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Middle Years Programme | Design (MYP) | MYP Design | 34 | 0 / 34 | VERIFIED_COMPLETE (criterion-referenced) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Middle Years Programme | Individuals and Societies (MYP) | MYP Individuals and Societies | 40 | 0 / 40 | VERIFIED_COMPLETE (criterion-referenced) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | AS Level | Economics | H060 | 148 | 7 / 141 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | GCSE | Chemistry | J248 | 52 | 7 / 45 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | GCSE | Physics | J249 | 112 | 7 / 105 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | GCSE | Biology | J247 | 100 | 7 / 93 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | GCSE | Mathematics | J560 | 115 | 7 / 108 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | GCSE | Business | J204 | 25 | 7 / 18 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | GCSE | Economics | J205 | 40 | 7 / 33 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | A Level | Chemistry | H432 | 122 | 7 / 115 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | A Level | Physics | H556 | 112 | 7 / 105 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | A Level | Biology | H420 | 106 | 11 / 95 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | A Level | Mathematics | H240 | 109 | 7 / 102 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | A Level | Business | H431 | 64 | 8 / 56 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | A Level | Economics | H460 | 148 | 7 / 141 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | Accounting | 9215 | 61 | 7 / 54 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | Business | 9225 | 28 | 7 / 21 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | Computer Science | 9210 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 6 | Write resources for unmapped topics (6). |
| OxfordAQA | IGCSE | Economics | 9214 | 46 | 7 / 39 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | Mathematics | 9260 | 100 | 7 / 93 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | Biology | 9201 | 49 | 7 / 42 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | Chemistry | 9202 | 61 | 7 / 54 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | Physics | 9203 | 73 | 7 / 66 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | English Language | 9270 | 7 | 7 / 0 | VERIFIED_COMPLETE (mixed) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | IGCSE | English Literature | 9275 | 7 | 7 / 0 | VERIFIED_COMPLETE (component-based) | 1 | Write resources for unmapped topics (1). |
| OxfordAQA | IGCSE | Geography | 9230 | 10 | 10 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| OxfordAQA | IGCSE | World History | 9245 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Islamiyat | 9237 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Pakistan Studies | 9236 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Psychology | 9218 | 7 | 0 / 7 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Sociology | 9292 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Urdu Language | 9264 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| OxfordAQA | A Level | Accounting | 9615 | 61 | 7 / 54 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Business | 9625 / 9725 | 64 | 7 / 57 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Computer Science | 9645 | 49 | 7 / 42 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Economics | 9640 | 139 | 7 / 132 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Mathematics | 9660 | 133 | 7 / 126 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Biology | 9610 | 74 | 8 / 66 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Chemistry | 9620 | 103 | 8 / 95 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Physics | 9630 | 106 | 7 / 99 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | English Language | 9670 | 7 | 7 / 0 | VERIFIED_COMPLETE (mixed) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | A Level | English Literature | 9675 | 7 | 7 / 0 | VERIFIED_COMPLETE (mixed) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | A Level | Geography | 9635 | 22 | 22 / 0 | VERIFIED_COMPLETE (modular) | 0 | None. |
| OxfordAQA | A Level | Psychology | 9685 | 25 | 0 / 25 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Sociology | 9690 | 16 | 16 / 0 | VERIFIED_COMPLETE (modular) | 0 | None. |
