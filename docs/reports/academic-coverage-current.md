# Academic coverage report — current (canonical)

**This is the canonical, current coverage report.** It is generated, never edited by
hand: `npm run coverage:academic-v2` writes this file, [`academic-coverage-current.json`](academic-coverage-current.json)
and [`academic-coverage-current.csv`](academic-coverage-current.csv) from one dataset in one run, so all three
agree. Older reports in this folder are dated historical evidence; see [README.md](README.md).

Data as of **2026-10-04** (the latest date found in the data; no generation timestamp is
written, so an unchanged repository regenerates identical files).

## Totals

| Measure | Value |
| --- | --- |
| Source resources | 2767 |
| Active board × qualification × subject combinations | 160 |
| Combinations with an official-source record | 160/160 |
| Combinations with a topic map | 160/160 |
| Zero-resource combinations | 0 |
| Combinations under 8 resources | 43 |
| Combinations with topics that have no resource | 80 |
| Median resources per combination | 9 |
| Median words per resource | 1251 |
| Resources under 900 words | 30 |
| Resources under 400 words | 1 |
| Demand | NO_DATA (no analytics, Search Console, CRM or enrolment source is read) |

### Assessment completeness

| Completeness | Combinations |
| --- | --- |
| VERIFIED_COMPLETE | 160 |
| VERIFIED_PARTIAL | 0 |
| NO_ASSESSMENT_RECORD | 0 |

A combination is `VERIFIED_COMPLETE` when every assessment record for it has an official
source, a verification date, components with marks and durations, and an assessment model.

### Review status

| reviewStatus | Resources |
| --- | --- |
| review-pending | 780 |
| reviewed | 1987 |

`reviewed` means a named Marlbridge subject teacher is credited as accountable for the page
(owner decision D-379); it is not a record of a dated, line-by-line check. `review-pending`
pages have no accountable teacher yet. The per-resource detail, including the repository-side
verification of every pending page, is in [academic-review/ledger-summary.md](academic-review/ledger-summary.md).

### Resources by type

| Type | Resources |
| --- | --- |
| study-guides | 909 |
| revision-notes | 835 |
| past-papers | 11 |
| practice-questions | 879 |
| exam-preparation | 110 |
| subject-guides | 23 |
| learning-articles | 0 |

### Resources by board tag

| boards | Resources |
| --- | --- |
| aqa | 396 |
| cambridge | 1198 |
| edexcel | 293 |
| ib | 536 |
| ocr | 86 |
| oxfordaqa | 258 |

## By board

| Board | Combinations | Official source record | Topic map | Resources | Under 8 resources | Assessment complete | Reviewed | Review-pending |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AQA | 25 | 25 | 25 | 406 | 0 | 25 | 254 | 152 |
| Cambridge | 54 | 54 | 54 | 1263 | 0 | 54 | 981 | 282 |
| Pearson Edexcel | 18 | 18 | 18 | 293 | 9 | 18 | 202 | 91 |
| International Baccalaureate | 21 | 21 | 21 | 536 | 0 | 21 | 362 | 174 |
| OCR | 12 | 12 | 12 | 86 | 10 | 12 | 86 | 0 |
| OxfordAQA | 30 | 30 | 30 | 258 | 24 | 30 | 171 | 87 |

## By qualification

| Qualification | Combinations | Resources (per-combination count, a resource can count for more than one) |
| --- | --- | --- |
| GCSE | 17 | 273 |
| A Level | 59 | 970 |
| AS Level | 1 | 10 |
| IGCSE | 45 | 787 |
| O Level | 17 | 266 |
| IB Diploma Programme | 16 | 378 |
| IB Middle Years Programme | 5 | 158 |

## Known risks

| Risk | Combinations |
| --- | --- |
| topics-without-resources | 80 |
| evidence-is-blanket-authorization-not-subject-specific-confirmation | 74 |
| under-8-resources | 43 |

## Zero-resource combinations

- None.

## Combinations under the 8-resource depth target

- Pearson Edexcel A Level Accounting (YAC11): 7
- Pearson Edexcel A Level Biology (YBI11): 7
- Pearson Edexcel A Level Business (YBS11): 7
- Pearson Edexcel A Level Chemistry (YCH11): 7
- Pearson Edexcel A Level Economics (YEC11): 7
- Pearson Edexcel A Level Law (YLA1): 7
- Pearson Edexcel A Level Mathematics (YMA01): 7
- Pearson Edexcel IGCSE World History (4HI1): 7
- Pearson Edexcel A Level English Literature (YET01): 7
- OCR GCSE Chemistry (J248): 7
- OCR GCSE Physics (J249): 7
- OCR GCSE Biology (J247): 7
- OCR GCSE Mathematics (J560): 7
- OCR GCSE Business (J204): 7
- OCR GCSE Economics (J205): 7
- OCR A Level Chemistry (H432): 7
- OCR A Level Physics (H556): 7
- OCR A Level Mathematics (H240): 7
- OCR A Level Economics (H460): 7
- OxfordAQA IGCSE Accounting (9215): 7
- OxfordAQA IGCSE Business (9225): 7
- OxfordAQA IGCSE Computer Science (9210): 7
- OxfordAQA IGCSE Economics (9214): 7
- OxfordAQA IGCSE Mathematics (9260): 7
- OxfordAQA IGCSE Biology (9201): 7
- OxfordAQA IGCSE Chemistry (9202): 7
- OxfordAQA IGCSE Physics (9203): 7
- OxfordAQA IGCSE English Language (9270): 7
- OxfordAQA IGCSE English Literature (9275): 7
- OxfordAQA IGCSE World History (9245): 7
- OxfordAQA IGCSE Islamiyat (9237): 7
- OxfordAQA IGCSE Pakistan Studies (9236): 7
- OxfordAQA IGCSE Psychology (9218): 7
- OxfordAQA IGCSE Sociology (9292): 7
- OxfordAQA A Level Accounting (9615): 7
- OxfordAQA A Level Business (9625 / 9725): 7
- OxfordAQA A Level Computer Science (9645): 7
- OxfordAQA A Level Economics (9640): 7
- OxfordAQA A Level Mathematics (9660): 7
- OxfordAQA A Level Biology (9610): 7
- OxfordAQA A Level Physics (9630): 7
- OxfordAQA A Level English Language (9670): 7
- OxfordAQA A Level English Literature (9675): 7

## Topic-map gaps (topics no resource maps to)

- AQA GCSE Business (8132): human-resources-aqa-gcse-business, marketing-aqa-gcse-business, finance-aqa-gcse-business
- AQA GCSE English Language (8700): spoken-language-8700
- AQA A Level Accounting (7127): verification-of-accounting-records-aqa, accounting-concepts-used-in-the-preparation-of-accounting-records, preparation-of-financial-statements-of-sole-traders, limited-company-accounts, analysis-and-evaluation-of-financial-information, budgeting-aqa, marginal-costing, standard-costing-and-variance-analysis, absorption-and-activity-based-costing, capital-investment-appraisal, accounting-for-organisations-with-incomplete-records, partnership-accounts, accounting-for-limited-companies, interpretation-analysis-and-communication-of-accounting-information, the-impact-of-ethical-considerations
- AQA A Level Biology (7402): genetic-information-variation-and-relationships-between-organisms-aqa-alevel-biology, energy-transfers-in-and-between-organisms-aqa-alevel-biology, organisms-respond-to-changes-in-their-internal-and-external-environments-aqa-alevel-biology, genetics-populations-evolution-and-ecosystems-aqa-alevel-biology, the-control-of-gene-expression-aqa-alevel-biology
- AQA A Level Business (7132): marketing-management-aqa-alevel-business, operational-management-aqa-alevel-business, financial-management-aqa-alevel-business, human-resource-management-aqa-alevel-business, analysing-the-strategic-position-of-a-business-aqa-alevel-business, choosing-strategic-direction-aqa-alevel-business, strategic-methods-how-to-pursue-strategies-aqa-alevel-business, managing-strategic-change-aqa-alevel-business
- AQA A Level Chemistry (7405): energetics-7405, kinetics-7405, chemical-equilibria-le-chateliers-principle-and-kc-7405, oxidation-reduction-and-redox-equations-7405, thermodynamics-7405, rate-equations-7405, equilibrium-constant-kp-for-homogeneous-systems-7405, electrode-potentials-and-electrochemical-cells-7405, acids-and-bases-7405, periodicity-7405, group-2-the-alkaline-earth-metals-7405, group-7-17-the-halogens-7405, properties-of-period-3-elements-and-their-oxides-7405, transition-metals-7405, reactions-of-ions-in-aqueous-solution-7405, introduction-to-organic-chemistry-7405, alkanes-7405, halogenoalkanes-7405, alkenes-7405, alcohols-7405, organic-analysis-7405, optical-isomerism-7405, aldehydes-and-ketones-7405, carboxylic-acids-and-derivatives-7405, aromatic-chemistry-7405, amines-7405, polymers-7405, amino-acids-proteins-and-dna-7405, organic-synthesis-7405, nuclear-magnetic-resonance-spectroscopy-7405, chromatography-7405
- AQA A Level Computer Science (7517): theory-of-computation-7517, fundamentals-of-data-representation, fundamentals-of-computer-systems, fundamentals-of-computer-organisation-and-architecture, consequences-of-uses-of-computing, fundamentals-of-communication-and-networking, fundamentals-of-databases, big-data, fundamentals-of-functional-programming, systematic-approach-to-problem-solving-7517
- AQA A Level Law (7162): law-of-contract-7162, human-rights-7162
- AQA A Level Mathematics (7357): a-proof-aqa-alevel-maths, c-coordinate-geometry-aqa-alevel-maths, d-sequences-and-series-aqa-alevel-maths, e-trigonometry-aqa-alevel-maths, f-exponentials-and-logarithms-aqa-alevel-maths, h-integration-aqa-alevel-maths, i-numerical-methods-aqa-alevel-maths, j-vectors-aqa-alevel-maths, k-statistical-sampling-aqa-alevel-maths, l-data-presentation-and-interpretation-aqa-alevel-maths, m-probability-aqa-alevel-maths, n-statistical-distributions-aqa-alevel-maths, o-statistical-hypothesis-testing-aqa-alevel-maths, p-quantities-and-units-in-mechanics-aqa-alevel-maths, q-kinematics-aqa-alevel-maths, r-forces-and-newtons-laws-aqa-alevel-maths, s-moments-aqa-alevel-maths, use-of-data-in-statistics-aqa-alevel-maths
- AQA A Level Physics (7408): particles-and-radiation-aqa-alevel, waves-aqa-alevel, mechanics-and-materials-aqa-alevel, electricity-aqa-alevel, further-mechanics-and-thermal-physics, fields-and-their-consequences, nuclear-physics-aqa-alevel, astrophysics-aqa-alevel, medical-physics-aqa-alevel, engineering-physics-aqa-alevel, turning-points-in-physics-aqa-alevel, electronics-aqa-alevel
- AQA GCSE English Literature (8702): skills-8702
- Cambridge A Level Accounting (9706): as-cost-and-management-accounting, a-financial-accounting, a-cost-and-management-accounting
- Cambridge A Level Business (9609): finance-and-accounting-as-cambridge-alevel-business, business-and-its-environment-a-cambridge-alevel-business
- Cambridge A Level Computer Science (9618): hardware, system-software, security-privacy-and-data-integrity, ethics-and-ownership, algorithm-design-and-problem-solving, data-types-and-structures, programming, software-development, hardware-and-virtual-machines, security, artificial-intelligence-ai, computational-thinking-and-problem-solving
- Cambridge A Level Economics (9708): government-macroeconomic-intervention-cambridge-alevel-economics, international-economic-issues-cambridge-alevel-economics, the-macroeconomy-a-cambridge-alevel-economics
- Cambridge A Level World History (9489): historical-interpretations-9489, depth-study-european-interwar-9489, depth-study-usa-9489, depth-study-international-history-9489
- Cambridge A Level Information Technology (9626): algorithms-and-flowcharts, esecurity, the-digital-divide, expert-systems, spreadsheets, modelling, database-and-file-concepts, video-and-audio-editing, it-in-society, new-and-emerging-technologies, communications-technology, project-management, system-life-cycle, data-analysis-and-visualisation, mail-merge, graphics-creation, animation, programming-for-the-web
- Cambridge A Level Law (9084): law-of-contract-9084, law-of-tort-9084
- Cambridge IGCSE Business (0450 / 0264): understanding-business-activity-0264, people-in-business-0264, marketing-0264, operations-management-0264, financial-information-and-decisions-0264, external-influences-on-business-activity-0264
- Cambridge IGCSE Computer Science (0478): software, the-internet-and-its-uses, automated-and-emerging-technologies, algorithm-design-and-problem-solving-0478, programming-0478, databases-0478, boolean-logic
- Cambridge IGCSE Economics (0455): government-and-the-macroeconomy-cambridge-igcse-economics, economic-development-cambridge-igcse-economics, international-trade-and-globalisation-cambridge-igcse-economics
- Cambridge IGCSE ICT (0417): the-systems-life-cycle, safety-and-security, audience, communication-0417, file-management, images, layout, styles, proofing, graphs-and-charts, document-production, databases-0417, presentations, spreadsheets-0417, website-authoring
- Cambridge O Level Biology (5090): classification, movement-into-and-out-of-cells, plant-nutrition, transport-in-flowering-plants, human-nutrition, human-gas-exchange, respiration, transport-in-humans, disease-and-immunity, excretion, coordination-and-control, coordination-and-response-in-plants, development-of-organisms-and-continuity-of-life, inheritance, biotechnology-and-genetic-modification, relationships-of-organisms-with-one-another-and-with-the-environment
- Cambridge O Level Commerce (7100): logistics-in-commerce-7100, aids-to-trade-that-support-commerce-7100, sustainability-and-ethics-7100
- Cambridge O Level Mathematics (4024): transformations-and-vectors, statistics
- Cambridge O Level Statistics (4040): formation-of-cumulative-frequency-distributions-4040, statistical-measures-interpretation-and-use-4040, transformations-involving-mean-and-standard-deviation-4040, bivariate-distributions-and-scatter-diagrams-4040, elementary-ideas-of-probability-4040, probability-distributions-4040
- Cambridge IGCSE English Literature (0475): component-5-coursework-0475
- Cambridge A Level English Literature (9695): paper-4-pre-and-post-1900-poetry-and-prose-9695
- Cambridge IGCSE Environmental Management (0680): the-atmosphere-and-human-activities-0680, ecosystems-biodiversity-and-fieldwork-0680, natural-hazards-0680, human-population-0680
- Cambridge O Level Environmental Management (5014): water-5014-2027, the-atmosphere-and-human-activities-5014-2027, ecosystems-biodiversity-and-fieldwork-5014-2027, natural-hazards-5014-2027, human-population-5014-2027
- Cambridge IGCSE Statistics (0479): measures-of-central-tendency-0479, quartiles-percentiles-and-measures-of-dispersion-0479, transformations-of-data-sets-0479, probability-0479, probability-distributions-0479, bivariate-distributions-0479
- Cambridge IGCSE Commerce (0715): logistics-in-commerce-0715, aids-to-trade-that-support-commerce-0715, sustainability-and-ethics-0715
- Pearson Edexcel A Level Accounting (YAC11): financial-statements-of-organisations, introduction-to-costing, analysis-of-accounting-statements, social-and-ethical-accounting, limited-companies-yac, investment-ratios, statement-of-cash-flows, budgeting-yac, standard-costing-yac, project-appraisal, break-even-analysis, marginal-costing-and-absorption-costing, ict-in-accounting
- Pearson Edexcel A Level Biology (YBI11): cell-structure-reproduction-and-development-edexcel-alevel-biology, plant-structure-and-function-biodiversity-and-conservation-edexcel-alevel-biology, energy-flow-ecosystems-and-the-environment-edexcel-alevel-biology, microbiology-immunity-and-forensics-edexcel-alevel-biology, respiration-muscles-and-the-internal-environment-edexcel-alevel-biology, coordination-response-and-gene-technology-edexcel-alevel-biology
- Pearson Edexcel A Level Business (YBS11): business-decisions-and-strategy-edexcel-alevel-business, global-business-edexcel-alevel-business
- Pearson Edexcel A Level Chemistry (YCH11): unit-2-energetics-group-chemistry-ych11, unit-3-practical-skills-in-chemistry-i-ych11, unit-4-rates-equilibria-further-organic-ych11, unit-5-transition-metals-organic-nitrogen-ych11, unit-6-practical-skills-in-chemistry-ii-ych11
- Pearson Edexcel A Level Economics (YEC11): business-behaviour-edexcel-alevel-economics, developments-in-the-global-economy-edexcel-alevel-economics
- Pearson Edexcel A Level Mathematics (YMA01): unit-p3-pure-mathematics-3-edexcel-alevel-maths, unit-p4-pure-mathematics-4-edexcel-alevel-maths, unit-m1-mechanics-1-edexcel-alevel-maths, unit-m2-mechanics-2-edexcel-alevel-maths, unit-s1-statistics-1-edexcel-alevel-maths, unit-s2-statistics-2-edexcel-alevel-maths, unit-d1-decision-mathematics-1-edexcel-alevel-maths
- Pearson Edexcel A Level Physics (YPH11): unit-3-practical-skills-in-physics-i, unit-6-practical-skills-in-physics-ii
- Pearson Edexcel A Level Urdu Language (9UR0): theme-1-evolving-pakistani-society-9ur0, theme-2-art-and-culture-urdu-speaking-world-9ur0, theme-3-immigration-multicultural-society-9ur0
- Pearson Edexcel IGCSE Economics (4EC1): government-and-the-economy-edexcel-igcse-economics, the-global-economy-edexcel-igcse-economics
- Pearson Edexcel IGCSE English Language (4EA1): spoken-language-endorsement-4ea1
- Pearson Edexcel A Level English Literature (YET01): unit-3-poetry-and-prose-yet01, unit-4-shakespeare-and-pre-1900-poetry-yet01
- International Baccalaureate IB Diploma Programme Business (DP Business Management): ib-dp-business-unit-1, ib-dp-business-unit-2, ib-dp-business-unit-5
- International Baccalaureate IB Diploma Programme Psychology (DP Psychology (2019) / DP Psychology (2027)): ib-dp-psychology-sociocultural-approach, ib-dp-psychology-approaches-to-researching-behaviour, ib-dp-psychology-abnormal-psychology, ib-dp-psychology-developmental-psychology, ib-dp-psychology-health-psychology, ib-dp-psychology-psychology-of-human-relationships
- International Baccalaureate IB Diploma Programme Biology (DP Biology): ib-dp-biology-interaction-interdependence, ib-dp-biology-continuity-change
- International Baccalaureate IB Diploma Programme Chemistry (DP Chemistry): ib-dp-chemistry-structure-2, ib-dp-chemistry-structure-3, ib-dp-chemistry-reactivity-1, ib-dp-chemistry-reactivity-2
- International Baccalaureate IB Diploma Programme Geography (DP Geography): ib-dp-geography-freshwater, ib-dp-geography-oceans-coastal-margins, ib-dp-geography-extreme-environments, ib-dp-geography-geophysical-hazards, ib-dp-geography-leisure-tourism-sport, ib-dp-geography-food-health, ib-dp-geography-urban-environments, ib-dp-geography-global-resource-consumption, ib-dp-geography-power-places-networks, ib-dp-geography-human-development-diversity, ib-dp-geography-global-risks-resilience, ib-dp-geography-fieldwork
- International Baccalaureate IB Diploma Programme World History (DP History): ib-dp-world-history-prescribed-subjects, ib-dp-world-history-world-history-topics, ib-dp-world-history-hl-options-depth-studies
- International Baccalaureate IB Middle Years Programme Mathematics (MYP Mathematics): ib-myp-mathematics-key-concepts, ib-myp-mathematics-related-concepts, ib-myp-mathematics-global-contexts
- OCR GCSE Chemistry (J248): topic-c3-chemical-reactions-j248, topic-c4-predicting-identifying-reactions-j248, topic-c5-monitoring-controlling-reactions-j248, topic-c6-global-challenges-j248
- OCR GCSE Physics (J249): electricity-ocr-gcse, magnetism-and-magnetic-fields-ocr-gcse, waves-in-matter-ocr-gcse, radioactivity-ocr-gcse, energy-ocr-gcse, global-challenges-ocr-gcse
- OCR GCSE Biology (J247): organism-level-systems-ocr-gcse-biology, community-level-systems-ocr-gcse-biology, genes-inheritance-and-selection-ocr-gcse-biology, global-challenges-ocr-gcse-biology, practical-skills-ocr-gcse-biology
- OCR GCSE Mathematics (J560): indices-and-surds-ocr-gcse-maths, approximation-and-estimation-ocr-gcse-maths, ratio-proportion-and-rates-of-change-ocr-gcse-maths, algebra-ocr-gcse-maths, graphs-of-equations-and-functions-ocr-gcse-maths, basic-geometry-ocr-gcse-maths, congruence-and-similarity-ocr-gcse-maths, mensuration-ocr-gcse-maths, probability-ocr-gcse-maths, statistics-ocr-gcse-maths
- OCR GCSE Economics (J205): economic-objectives-and-the-role-of-government-ocr-gcse-economics, international-trade-and-the-global-economy-ocr-gcse-economics
- OCR A Level Chemistry (H432): ocr-a-level-chemistry-development-of-practical-skills-in-chemistry, ocr-a-level-chemistry-periodic-table-and-energy, ocr-a-level-chemistry-core-organic-chemistry, ocr-a-level-chemistry-physical-chemistry-and-transition-elements, ocr-a-level-chemistry-organic-chemistry-and-analysis
- OCR A Level Physics (H556): forces-and-motion-ocr-alevel, electrons-waves-and-photons, newtonian-world-and-astrophysics, particles-and-medical-physics
- OCR A Level Biology (H420): biodiversity-evolution-and-disease-ocr-alevel-biology, communication-homeostasis-and-energy-ocr-alevel-biology, genetics-evolution-and-ecosystems-ocr-alevel-biology
- OCR A Level Mathematics (H240): mechanics-ocr-alevel-maths
- OCR A Level Business (H431): operational-strategy-ocr-alevel-business, human-resources-ocr-alevel-business, accounting-and-financial-considerations-ocr-alevel-business, the-global-environment-of-business-ocr-alevel-business
- OCR A Level Economics (H460): themes-in-economics-ocr-alevel-economics
- OxfordAQA IGCSE Accounting (9215): development-of-the-accounting-model, preparation-of-financial-statements-oxfordaqa-igcse, interpretation-analysis-and-communication-of-financial-information
- OxfordAQA IGCSE Business (9225): business-operations-oxfordaqa-igcse-business, human-resources-oxfordaqa-igcse-business, marketing-oxfordaqa-igcse-business, finance-oxfordaqa-igcse-business
- OxfordAQA IGCSE Computer Science (9210): data-representation-9210, computer-systems-9210, computer-networks, cyber-security-9210, relational-databases-and-sql, web-page-design
- OxfordAQA IGCSE Mathematics (9260): geometry-and-measures-oxfordaqa-igcse-maths, statistics-and-probability-oxfordaqa-igcse-maths
- OxfordAQA IGCSE Biology (9201): ecology-oxfordaqa-igcse-biology, organisms-interaction-with-the-environment-oxfordaqa-igcse-biology, inheritance-oxfordaqa-igcse-biology, variation-and-evolution-oxfordaqa-igcse-biology
- OxfordAQA IGCSE Chemistry (9202): structure-bonding-and-the-properties-of-matter-9202, chemical-changes-9202, chemical-analysis-9202, acids-bases-and-salts-9202, trends-within-the-periodic-table-9202, the-rate-and-extent-of-chemical-change-9202, energy-changes-9202, organic-chemistry-9202
- OxfordAQA IGCSE Physics (9203): waves-oxfordaqa-igcse, particle-model-of-matter-oxfordaqa-igcse, electricity-and-magnetism-oxfordaqa-igcse, generating-and-distributing-electricity-and-household-use, nuclear-physics-oxfordaqa-igcse, space-physics-oxfordaqa-igcse
- OxfordAQA IGCSE English Language (9270): non-exam-assessment-9270, speaking-and-listening-optional-endorsement-9270
- OxfordAQA IGCSE English Literature (9275): route-b-poetry-and-non-exam-assessment-9275
- OxfordAQA A Level Accounting (9615): the-double-entry-model-oxfordaqa, verification-of-accounting-records-oxfordaqa-alevel, accounting-concepts-used-in-the-preparation-of-accounting-records-oxfordaqa, preparation-of-financial-statements-of-sole-traders-oxfordaqa, limited-company-accounts-oxfordaqa, analysis-and-evaluation-of-financial-information-oxfordaqa, budgeting-oxfordaqa, marginal-costing-oxfordaqa, standard-costing-and-variance-analysis-oxfordaqa, absorption-and-activity-based-costing-oxfordaqa, capital-investment-appraisal-oxfordaqa, accounting-for-organisations-with-incomplete-records-oxfordaqa, partnership-accounts-oxfordaqa, accounting-for-limited-companies-oxfordaqa, manufacturing-accounts-oxfordaqa, clubs-and-non-profit-making-organisations, interpretation-analysis-and-communication-of-accounting-information-oxfordaqa, the-impact-of-ethical-considerations-oxfordaqa
- OxfordAQA A Level Business (9625 / 9725): operational-performance-oxfordaqa-alevel-business, human-resources-oxfordaqa-alevel-business, finance-oxfordaqa-alevel-business, mission-objective-and-swot-analysis-oxfordaqa-alevel-business, analysing-the-existing-internal-position-of-a-business-oxfordaqa-alevel-business, analysing-the-industry-environment-oxfordaqa-alevel-business, analysing-the-external-environment-oxfordaqa-alevel-business, analysing-future-sales-oxfordaqa-alevel-business, strategic-options-choosing-markets-and-products-oxfordaqa-alevel-business, strategic-positioning-choosing-how-to-compete-oxfordaqa-alevel-business, deciding-on-a-strategic-investment-oxfordaqa-alevel-business, types-of-strategies-oxfordaqa-alevel-business, implementing-a-strategy-oxfordaqa-alevel-business, change-risk-and-uncertainty-oxfordaqa-alevel-business
- OxfordAQA A Level Computer Science (9645): program-design-9645, searching-and-sorting-algorithms, representing-data, computer-systems-9645, computer-organisation-and-architecture, machine-code-and-assembly-language, object-oriented-and-additional-programming, advanced-data-structures, advanced-algorithms, functional-programming, theory-of-computation-9645, networking-and-cyber-security, databases-9645, artificial-intelligence-9645
- OxfordAQA A Level Economics (9640): the-economics-of-business-behaviour-and-the-distribution-of-income-oxfordaqa-alevel-economics, economic-development-and-global-environment-oxfordaqa-alevel-economics, quantitative-skills-oxfordaqa-alevel-economics
- OxfordAQA A Level Mathematics (9660): unit-psm1-pp1-pure-maths-oxfordaqa-alevel-maths, unit-psm1-m1-mechanics-oxfordaqa-alevel-maths, unit-p2-pure-maths-oxfordaqa-alevel-maths, unit-s2-statistics-oxfordaqa-alevel-maths, unit-m2-mechanics-oxfordaqa-alevel-maths
- OxfordAQA A Level Biology (9610): populations-and-genes-oxfordaqa-alevel-biology, control-oxfordaqa-alevel-biology
- OxfordAQA A Level Chemistry (9620): oxfordaqa-a-level-chemistry-oxidation-reduction-and-redox-equations, oxfordaqa-a-level-chemistry-kinetics, oxfordaqa-a-level-chemistry-thermodynamics, oxfordaqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells, oxfordaqa-a-level-chemistry-acids-and-bases, oxfordaqa-a-level-chemistry-rate-equations, oxfordaqa-a-level-chemistry-equilibrium-constant-kp-for-homogeneous-systems, oxfordaqa-a-level-chemistry-periodicity, oxfordaqa-a-level-chemistry-group-2-the-alkaline-earth-metals, oxfordaqa-a-level-chemistry-group-7-17-the-halogens, oxfordaqa-a-level-chemistry-properties-of-period-3-elements-and-their-oxides-and-chlorides, oxfordaqa-a-level-chemistry-transition-metals, oxfordaqa-a-level-chemistry-reactions-of-ions-in-aqueous-solution, oxfordaqa-a-level-chemistry-introduction-to-organic-chemistry, oxfordaqa-a-level-chemistry-alkanes, oxfordaqa-a-level-chemistry-halogenoalkanes, oxfordaqa-a-level-chemistry-alkenes, oxfordaqa-a-level-chemistry-alcohols, oxfordaqa-a-level-chemistry-organic-analysis, oxfordaqa-a-level-chemistry-optical-isomerism, oxfordaqa-a-level-chemistry-aldehydes-and-ketones, oxfordaqa-a-level-chemistry-carboxylic-acids-and-derivatives, oxfordaqa-a-level-chemistry-aromatic-chemistry, oxfordaqa-a-level-chemistry-amines, oxfordaqa-a-level-chemistry-polymers, oxfordaqa-a-level-chemistry-amino-acids-and-proteins, oxfordaqa-a-level-chemistry-organic-synthesis, oxfordaqa-a-level-chemistry-nuclear-magnetic-resonance-spectroscopy, oxfordaqa-a-level-chemistry-chromatography
- OxfordAQA A Level Physics (9630): particles-radiation-and-radioactivity, electricity-oxfordaqa-alevel, oscillations-and-waves-oxfordaqa-alevel, circular-and-periodic-motion-oxfordaqa, gravitational-fields-and-satellites, electric-fields-and-capacitance, exponential-change-oxfordaqa, magnetic-fields-oxfordaqa-alevel, thermal-physics-oxfordaqa-alevel, nuclear-energy-oxfordaqa-alevel, energy-sources-oxfordaqa-alevel
- OxfordAQA A Level English Language (9670): unit-3-language-variation-9670, unit-4-language-exploration-9670
- OxfordAQA A Level English Literature (9675): unit-3-elements-of-crime-and-mystery-9675, unit-4-literary-representations-9675

## Stale verification (older than 180 days before 2026-10-04)

- None.

## Missing reviewer

- AQA GCSE Biology (8461): 12 review-pending resource(s) with no reviewer
- AQA GCSE Chemistry (8462): 15 review-pending resource(s) with no reviewer
- AQA GCSE Mathematics (8300): 21 review-pending resource(s) with no reviewer
- AQA GCSE Physics (8463): 1 review-pending resource(s) with no reviewer
- AQA GCSE Psychology (8182): 8 review-pending resource(s) with no reviewer
- AQA GCSE Sociology (8192): 23 review-pending resource(s) with no reviewer
- AQA A Level Psychology (7182): 38 review-pending resource(s) with no reviewer
- AQA A Level Sociology (7192): 34 review-pending resource(s) with no reviewer
- Cambridge A Level Biology (9700): 32 review-pending resource(s) with no reviewer
- Cambridge A Level Mathematics (9709): 2 review-pending resource(s) with no reviewer
- Cambridge A Level Psychology (9990): 9 review-pending resource(s) with no reviewer
- Cambridge A Level Sociology (9699): 18 review-pending resource(s) with no reviewer
- Cambridge IGCSE Biology (0610): 3 review-pending resource(s) with no reviewer
- Cambridge IGCSE Mathematics (0580): 29 review-pending resource(s) with no reviewer
- Cambridge IGCSE Sociology (0495): 8 review-pending resource(s) with no reviewer
- Cambridge O Level Sociology (2251): 8 review-pending resource(s) with no reviewer
- Cambridge O Level Statistics (4040): 6 review-pending resource(s) with no reviewer
- Cambridge IGCSE Geography (0460): 32 review-pending resource(s) with no reviewer
- Cambridge O Level Geography (2217): 9 review-pending resource(s) with no reviewer
- Cambridge A Level Geography (9696): 32 review-pending resource(s) with no reviewer
- Cambridge IGCSE Global Perspectives (0457): 75 review-pending resource(s) with no reviewer
- Cambridge A Level Global Perspectives (9239): 12 review-pending resource(s) with no reviewer
- Cambridge IGCSE Statistics (0479): 6 review-pending resource(s) with no reviewer
- Cambridge IGCSE Chemistry (0620): 1 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Biology (4BI1): 30 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Chemistry (4CH1): 25 review-pending resource(s) with no reviewer
- Pearson Edexcel IGCSE Mathematics (4MA1): 36 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Psychology (DP Psychology (2019) / DP Psychology (2027)): 10 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Geography (DP Geography): 10 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Environmental Systems and Societies (DP Environmental Systems and Societies): 40 review-pending resource(s) with no reviewer
- International Baccalaureate IB Diploma Programme Global Politics (DP Global Politics): 34 review-pending resource(s) with no reviewer
- International Baccalaureate IB Middle Years Programme Sciences (MYP) (MYP Sciences): 6 review-pending resource(s) with no reviewer
- International Baccalaureate IB Middle Years Programme Design (MYP) (MYP Design): 34 review-pending resource(s) with no reviewer
- International Baccalaureate IB Middle Years Programme Individuals and Societies (MYP) (MYP Individuals and Societies): 40 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Geography (9230): 10 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Psychology (9218): 7 review-pending resource(s) with no reviewer
- OxfordAQA IGCSE Sociology (9292): 7 review-pending resource(s) with no reviewer
- OxfordAQA A Level Geography (9635): 22 review-pending resource(s) with no reviewer
- OxfordAQA A Level Psychology (9685): 25 review-pending resource(s) with no reviewer
- OxfordAQA A Level Sociology (9690): 16 review-pending resource(s) with no reviewer

## Recommended next action

| Next action | Combinations |
| --- | --- |
| Write resources for unmapped topics (n). | 80 |
| None. | 37 |
| Named-reviewer sign-off of review-pending resources. | 34 |
| Add resources to reach the 8-resource depth target. | 9 |

Overall: the largest outstanding item is human sign-off: 780 review-pending resources need a named, authorised reviewer (queue: [academic-review/signoff-queue.md](academic-review/signoff-queue.md)).

## Every combination

| Board | Qualification | Subject | Code | Resources | Reviewed / pending | Assessment | Topics without resources | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AQA | GCSE | Biology | 8461 | 37 | 25 / 12 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Business | 8132 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| AQA | GCSE | Chemistry | 8462 | 49 | 34 / 15 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Economics | 8136 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | GCSE | English Language | 8700 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 1 | Write resources for unmapped topics (1). |
| AQA | GCSE | World History | 8145 | 11 | 11 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | GCSE | Mathematics | 8300 | 40 | 19 / 21 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Physics | 8463 | 31 | 30 / 1 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Psychology | 8182 | 8 | 0 / 8 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | GCSE | Sociology | 8192 | 23 | 0 / 23 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Accounting | 7127 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 15 | Write resources for unmapped topics (15). |
| AQA | A Level | Biology | 7402 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 5 | Write resources for unmapped topics (5). |
| AQA | A Level | Business | 7132 | 10 | 10 / 0 | VERIFIED_COMPLETE (linear) | 8 | Write resources for unmapped topics (8). |
| AQA | A Level | Chemistry | 7405 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 31 | Write resources for unmapped topics (31). |
| AQA | A Level | Computer Science | 7517 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 10 | Write resources for unmapped topics (10). |
| AQA | A Level | Economics | 7136 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | A Level | English Language | 7702 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | A Level | Law | 7162 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 2 | Write resources for unmapped topics (2). |
| AQA | A Level | Mathematics | 7357 | 10 | 10 / 0 | VERIFIED_COMPLETE (linear) | 18 | Write resources for unmapped topics (18). |
| AQA | A Level | Physics | 7408 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 12 | Write resources for unmapped topics (12). |
| AQA | A Level | Psychology | 7182 | 38 | 0 / 38 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | A Level | Sociology | 7192 | 34 | 0 / 34 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| AQA | AS Level | Business | 7137 | 10 | 10 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| AQA | GCSE | English Literature | 8702 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 1 | Write resources for unmapped topics (1). |
| AQA | A Level | English Literature | 7712 / 7717 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | A Level | Accounting | 9706 | 8 | 8 / 0 | VERIFIED_COMPLETE (staged) | 3 | Write resources for unmapped topics (3). |
| Cambridge | A Level | Biology | 9700 | 90 | 58 / 32 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Business | 9609 | 15 | 15 / 0 | VERIFIED_COMPLETE (staged) | 2 | Write resources for unmapped topics (2). |
| Cambridge | A Level | Computer Science | 9618 | 15 | 15 / 0 | VERIFIED_COMPLETE (staged) | 12 | Write resources for unmapped topics (12). |
| Cambridge | A Level | Economics | 9708 | 15 | 15 / 0 | VERIFIED_COMPLETE (staged) | 3 | Write resources for unmapped topics (3). |
| Cambridge | A Level | English Language | 9093 | 13 | 13 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Cambridge | A Level | World History | 9489 | 9 | 9 / 0 | VERIFIED_COMPLETE (staged) | 4 | Write resources for unmapped topics (4). |
| Cambridge | A Level | Information Technology | 9626 | 9 | 9 / 0 | VERIFIED_COMPLETE (staged) | 18 | Write resources for unmapped topics (18). |
| Cambridge | A Level | Law | 9084 | 8 | 8 / 0 | VERIFIED_COMPLETE (staged) | 2 | Write resources for unmapped topics (2). |
| Cambridge | A Level | Mathematics | 9709 | 61 | 59 / 2 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Physics | 9702 | 76 | 76 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Cambridge | A Level | Psychology | 9990 | 9 | 0 / 9 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Sociology | 9699 | 18 | 0 / 18 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Accounting | 0452 | 21 | 21 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | IGCSE | Biology | 0610 | 67 | 64 / 3 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Business | 0450 / 0264 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 6 | Write resources for unmapped topics (6). |
| Cambridge | IGCSE | Computer Science | 0478 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 7 | Write resources for unmapped topics (7). |
| Cambridge | IGCSE | Economics | 0455 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| Cambridge | IGCSE | World History | 0470 | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Cambridge | IGCSE | ICT | 0417 | 19 | 19 / 0 | VERIFIED_COMPLETE (component-based) | 15 | Write resources for unmapped topics (15). |
| Cambridge | IGCSE | Mathematics | 0580 | 60 | 31 / 29 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Physics | 0625 | 22 | 22 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Cambridge | IGCSE | Sociology | 0495 | 8 | 0 / 8 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Biology | 5090 | 9 | 9 / 0 | VERIFIED_COMPLETE (component-based) | 16 | Write resources for unmapped topics (16). |
| Cambridge | O Level | Business | 7115 | 13 | 13 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Commerce | 7100 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| Cambridge | O Level | Computer Science | 2210 | 16 | 16 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Economics | 2281 | 13 | 13 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | English Language | 1123 | 10 | 10 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | World History | 2147 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Mathematics | 4024 | 27 | 27 / 0 | VERIFIED_COMPLETE (linear) | 2 | Write resources for unmapped topics (2). |
| Cambridge | O Level | Physics | 5054 | 29 | 29 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Cambridge | O Level | Sociology | 2251 | 8 | 0 / 8 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Statistics | 4040 | 14 | 8 / 6 | VERIFIED_COMPLETE (linear) | 6 | Write resources for unmapped topics (6). |
| Cambridge | IGCSE | English Literature | 0475 | 12 | 12 / 0 | VERIFIED_COMPLETE (component-based) | 1 | Write resources for unmapped topics (1). |
| Cambridge | A Level | English Literature | 9695 | 9 | 9 / 0 | VERIFIED_COMPLETE (staged) | 1 | Write resources for unmapped topics (1). |
| Cambridge | IGCSE | Pakistan Studies | 0448 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Pakistan Studies | 2059 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | IGCSE | Islamiyat | 0493 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Islamiyat | 2058 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | IGCSE | Geography | 0460 | 32 | 0 / 32 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Geography | 2217 | 9 | 0 / 9 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Geography | 9696 | 32 | 0 / 32 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Global Perspectives | 0457 | 75 | 0 / 75 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | A Level | Global Perspectives | 9239 | 12 | 0 / 12 | VERIFIED_COMPLETE (staged) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | IGCSE | Environmental Management | 0680 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 4 | Write resources for unmapped topics (4). |
| Cambridge | O Level | Environmental Management | 5014 | 16 | 16 / 0 | VERIFIED_COMPLETE (linear) | 5 | Write resources for unmapped topics (5). |
| Cambridge | IGCSE | Urdu Language | 0539 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | O Level | Urdu Language | 3247 / 3248 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Cambridge | IGCSE | Statistics | 0479 | 15 | 9 / 6 | VERIFIED_COMPLETE (linear) | 6 | Write resources for unmapped topics (6). |
| Cambridge | IGCSE | Commerce | 0715 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| Cambridge | IGCSE | Chemistry | 0620 | 61 | 60 / 1 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| Cambridge | O Level | Chemistry | 5070 | 59 | 59 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Cambridge | A Level | Chemistry | 9701 | 130 | 130 / 0 | VERIFIED_COMPLETE (staged) | 0 | None. |
| Pearson Edexcel | A Level | Accounting | YAC11 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 13 | Write resources for unmapped topics (13). |
| Pearson Edexcel | A Level | Biology | YBI11 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 6 | Write resources for unmapped topics (6). |
| Pearson Edexcel | A Level | Business | YBS11 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 2 | Write resources for unmapped topics (2). |
| Pearson Edexcel | A Level | Chemistry | YCH11 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 5 | Write resources for unmapped topics (5). |
| Pearson Edexcel | A Level | Economics | YEC11 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 2 | Write resources for unmapped topics (2). |
| Pearson Edexcel | A Level | Law | YLA1 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| Pearson Edexcel | A Level | Mathematics | YMA01 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 7 | Write resources for unmapped topics (7). |
| Pearson Edexcel | A Level | Physics | YPH11 | 33 | 33 / 0 | VERIFIED_COMPLETE (modular) | 2 | Write resources for unmapped topics (2). |
| Pearson Edexcel | A Level | Urdu Language | 9UR0 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| Pearson Edexcel | IGCSE | Biology | 4BI1 | 45 | 15 / 30 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | Chemistry | 4CH1 | 40 | 15 / 25 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | Economics | 4EC1 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 2 | Write resources for unmapped topics (2). |
| Pearson Edexcel | IGCSE | English Language | 4EA1 | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 1 | Write resources for unmapped topics (1). |
| Pearson Edexcel | IGCSE | World History | 4HI1 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| Pearson Edexcel | IGCSE | Mathematics | 4MA1 | 55 | 19 / 36 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| Pearson Edexcel | IGCSE | Physics | 4PH1 | 24 | 24 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| Pearson Edexcel | IGCSE | English Literature | 4ET1 | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| Pearson Edexcel | A Level | English Literature | YET01 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 2 | Write resources for unmapped topics (2). |
| International Baccalaureate | IB Diploma Programme | Business | DP Business Management | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 3 | Write resources for unmapped topics (3). |
| International Baccalaureate | IB Diploma Programme | Language A: Language and Literature | DP Language A: Language and Literature | 34 | 34 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Language A: Literature | DP Language A: Literature | 34 | 34 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Computer Science | DP Computer Science (2014) / DP Computer Science (2027) | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Psychology | DP Psychology (2019) / DP Psychology (2027) | 10 | 0 / 10 | VERIFIED_COMPLETE (component-based) | 6 | Write resources for unmapped topics (6). |
| International Baccalaureate | IB Diploma Programme | Biology | DP Biology | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 2 | Write resources for unmapped topics (2). |
| International Baccalaureate | IB Diploma Programme | Chemistry | DP Chemistry | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 4 | Write resources for unmapped topics (4). |
| International Baccalaureate | IB Diploma Programme | Economics | DP Economics | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Geography | DP Geography | 10 | 0 / 10 | VERIFIED_COMPLETE (component-based) | 12 | Write resources for unmapped topics (12). |
| International Baccalaureate | IB Diploma Programme | World History | DP History | 10 | 10 / 0 | VERIFIED_COMPLETE (component-based) | 3 | Write resources for unmapped topics (3). |
| International Baccalaureate | IB Diploma Programme | Language B | DP Language B | 34 | 34 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Mathematics: Analysis and Approaches | DP Mathematics: Analysis and Approaches | 55 | 55 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Mathematics: Applications and Interpretation | DP Mathematics: Applications and Interpretation | 61 | 61 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Physics | DP Physics | 8 | 8 / 0 | VERIFIED_COMPLETE (component-based) | 0 | None. |
| International Baccalaureate | IB Diploma Programme | Environmental Systems and Societies | DP Environmental Systems and Societies | 40 | 0 / 40 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Diploma Programme | Global Politics | DP Global Politics | 34 | 0 / 34 | VERIFIED_COMPLETE (component-based) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Middle Years Programme | Language Acquisition (MYP) | MYP Language Acquisition | 34 | 34 / 0 | VERIFIED_COMPLETE (criterion-referenced) | 0 | None. |
| International Baccalaureate | IB Middle Years Programme | Mathematics | MYP Mathematics | 10 | 10 / 0 | VERIFIED_COMPLETE (criterion-referenced) | 3 | Write resources for unmapped topics (3). |
| International Baccalaureate | IB Middle Years Programme | Sciences (MYP) | MYP Sciences | 40 | 34 / 6 | VERIFIED_COMPLETE (criterion-referenced) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Middle Years Programme | Design (MYP) | MYP Design | 34 | 0 / 34 | VERIFIED_COMPLETE (criterion-referenced) | 0 | Named-reviewer sign-off of review-pending resources. |
| International Baccalaureate | IB Middle Years Programme | Individuals and Societies (MYP) | MYP Individuals and Societies | 40 | 0 / 40 | VERIFIED_COMPLETE (criterion-referenced) | 0 | Named-reviewer sign-off of review-pending resources. |
| OCR | GCSE | Chemistry | J248 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 4 | Write resources for unmapped topics (4). |
| OCR | GCSE | Physics | J249 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 6 | Write resources for unmapped topics (6). |
| OCR | GCSE | Biology | J247 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 5 | Write resources for unmapped topics (5). |
| OCR | GCSE | Mathematics | J560 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 10 | Write resources for unmapped topics (10). |
| OCR | GCSE | Business | J204 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OCR | GCSE | Economics | J205 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 2 | Write resources for unmapped topics (2). |
| OCR | A Level | Chemistry | H432 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 5 | Write resources for unmapped topics (5). |
| OCR | A Level | Physics | H556 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 4 | Write resources for unmapped topics (4). |
| OCR | A Level | Biology | H420 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| OCR | A Level | Mathematics | H240 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 1 | Write resources for unmapped topics (1). |
| OCR | A Level | Business | H431 | 8 | 8 / 0 | VERIFIED_COMPLETE (linear) | 4 | Write resources for unmapped topics (4). |
| OCR | A Level | Economics | H460 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 1 | Write resources for unmapped topics (1). |
| OxfordAQA | IGCSE | Accounting | 9215 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 3 | Write resources for unmapped topics (3). |
| OxfordAQA | IGCSE | Business | 9225 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 4 | Write resources for unmapped topics (4). |
| OxfordAQA | IGCSE | Computer Science | 9210 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 6 | Write resources for unmapped topics (6). |
| OxfordAQA | IGCSE | Economics | 9214 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Mathematics | 9260 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | IGCSE | Biology | 9201 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 4 | Write resources for unmapped topics (4). |
| OxfordAQA | IGCSE | Chemistry | 9202 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 8 | Write resources for unmapped topics (8). |
| OxfordAQA | IGCSE | Physics | 9203 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 6 | Write resources for unmapped topics (6). |
| OxfordAQA | IGCSE | English Language | 9270 | 7 | 7 / 0 | VERIFIED_COMPLETE (mixed) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | IGCSE | English Literature | 9275 | 7 | 7 / 0 | VERIFIED_COMPLETE (component-based) | 1 | Write resources for unmapped topics (1). |
| OxfordAQA | IGCSE | Geography | 9230 | 10 | 0 / 10 | VERIFIED_COMPLETE (linear) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | IGCSE | World History | 9245 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Islamiyat | 9237 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Pakistan Studies | 9236 | 7 | 7 / 0 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Psychology | 9218 | 7 | 0 / 7 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Sociology | 9292 | 7 | 0 / 7 | VERIFIED_COMPLETE (linear) | 0 | Add resources to reach the 8-resource depth target. |
| OxfordAQA | IGCSE | Urdu Language | 9264 | 9 | 9 / 0 | VERIFIED_COMPLETE (linear) | 0 | None. |
| OxfordAQA | A Level | Accounting | 9615 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 18 | Write resources for unmapped topics (18). |
| OxfordAQA | A Level | Business | 9625 / 9725 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 14 | Write resources for unmapped topics (14). |
| OxfordAQA | A Level | Computer Science | 9645 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 14 | Write resources for unmapped topics (14). |
| OxfordAQA | A Level | Economics | 9640 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 3 | Write resources for unmapped topics (3). |
| OxfordAQA | A Level | Mathematics | 9660 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 5 | Write resources for unmapped topics (5). |
| OxfordAQA | A Level | Biology | 9610 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | A Level | Chemistry | 9620 | 8 | 8 / 0 | VERIFIED_COMPLETE (modular) | 29 | Write resources for unmapped topics (29). |
| OxfordAQA | A Level | Physics | 9630 | 7 | 7 / 0 | VERIFIED_COMPLETE (modular) | 11 | Write resources for unmapped topics (11). |
| OxfordAQA | A Level | English Language | 9670 | 7 | 7 / 0 | VERIFIED_COMPLETE (mixed) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | A Level | English Literature | 9675 | 7 | 7 / 0 | VERIFIED_COMPLETE (mixed) | 2 | Write resources for unmapped topics (2). |
| OxfordAQA | A Level | Geography | 9635 | 22 | 0 / 22 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Psychology | 9685 | 25 | 0 / 25 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
| OxfordAQA | A Level | Sociology | 9690 | 16 | 0 / 16 | VERIFIED_COMPLETE (modular) | 0 | Named-reviewer sign-off of review-pending resources. |
