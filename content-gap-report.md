# Content gap report

**Generated 29 Sep 2026, 16:43 PKT** by `python3 scripts/content-gap-report.py` (content-breadth sprint).

Topic lists come from `src/data/academic/syllabus-topics.ts` (the current series only), which is the build-validated transcription of each board's official document. A topic counts as having a study guide (SG), revision notes (RN) or practice set (PQ) only if a resource of that type maps to it. Subtopic columns count exact subtopic mappings only. Nothing here says a page has been teacher-reviewed: all resources remain `review-pending`.

## Summary

| Syllabus | Series | Resources | SG / RN / PQ | Topics with all 3 types | Subtopics with all 3 types | Status |
|---|---|---|---|---|---|---|
| DP Mathematics: Analysis and Approaches (mathematics-analysis-and-approaches) | First assessment 2021 | 51 | 17 / 17 / 17 | 5 / 5 | 83 / 83 | complete |
| DP Mathematics: Applications and Interpretation (mathematics-applications-and-interpretation) | First assessments for SL and HL—2021 | 57 | 19 / 19 / 19 | 5 / 5 | 78 / 78 | complete |
| DP Language A: Language and Literature (language-a-language-and-literature) | First assessments for SL and HL 2021 | 30 | 10 / 10 / 10 | 3 / 3 | no subtopic data | complete |
| DP Language A: Literature (language-a-literature) | First assessments for SL and HL 2021 | 30 | 10 / 10 / 10 | 3 / 3 | no subtopic data | complete |
| DP Environmental Systems and Societies (environmental-systems-and-societies) | First assessment 2026 | 36 | 12 / 12 / 12 | 11 / 11 | 27 / 27 | complete |
| DP Global Politics (global-politics) | First assessment 2026 | 30 | 10 / 10 / 10 | 5 / 5 | no subtopic data | complete |
| DP Language B (language-b) | First assessment 2020 | 30 | 10 / 10 / 10 | 5 / 5 | no subtopic data | complete |
| MYP Language Acquisition (myp-language-acquisition) | From 2020 (first eAssessment May 2023/November 2023) | 31 | 10 / 10 / 10 | 5 / 5 | no subtopic data | complete |
| MYP Sciences (myp-sciences) | From 2014 | 31 | 10 / 10 / 10 | 3 / 5 | no subtopic data | gaps remain |
| MYP Design (myp-design) | From 2014 | 30 | 10 / 10 / 10 | 4 / 4 | 4 / 4 | complete |
| MYP Individuals and Societies (myp-individuals-and-societies) | From 2014 | 31 | 10 / 10 / 10 | 4 / 6 | no subtopic data | gaps remain |
| 0580 (mathematics) | 2025-2027 | 31 | 9 / 9 / 13 | 9 / 9 | 29 / 72 | complete |
| 0620 (chemistry) | 2026-2028 | 59 | 19 / 20 / 20 | 12 / 12 | 46 / 49 | complete |
| 0625 (physics) | For examination in 2026, 2027 and 2028 | 22 | 6 / 6 / 10 | 6 / 6 | 24 / 24 | complete |
| 0610 (biology) | For examination in 2026, 2027 and 2028 | 63 | 21 / 21 / 21 | 21 / 21 | 55 / 61 | complete |
| 9701 (chemistry) | 2025-2027 | 129 | 43 / 43 / 43 | 37 / 37 | 90 / 90 | complete |
| 9702 (physics) | 2025-2027 | 75 | 25 / 25 / 25 | 25 / 25 | 76 / 76 | complete |
| 9700 (biology) | For examination in 2025, 2026 and 2027 | 57 | 19 / 19 / 19 | 19 / 19 | 18 / 44 | complete |
| 9709 (mathematics) | 2026-2027 | 59 | 19 / 19 / 21 | 6 / 6 | 36 / 38 | complete |
| 4MA1 (mathematics) | Specification Issue 2, November 2017 | 18 | 6 / 6 / 6 | 6 / 6 | 17 / 36 | complete |
| 4CH1 (chemistry) | Issue 3, September 2024 | 14 | 4 / 4 / 6 | 4 / 4 | 1 / 17 | complete |
| 4PH1 (physics) | Issue 4 | 24 | 8 / 8 / 8 | 8 / 8 | 30 / 30 | complete |
| 4BI1 (biology) | Issue 3 | 15 | 5 / 5 / 5 | 5 / 5 | 1 / 12 | complete |
| 8461 (biology) | For first teaching 2016 | 24 | 8 / 8 / 8 | 8 / 8 | 1 / 6 | complete |
| 8462 (chemistry) | For teaching from September 2016 | 33 | 11 / 11 / 11 | 11 / 11 | 1 / 8 | complete |
| 8463 (physics) | For first teaching 2016 | 29 | 10 / 9 / 10 | 8 / 8 | 29 / 30 | complete |
| 8300 (mathematics) | For first teaching 2015 | 18 | 6 / 6 / 6 | 6 / 6 | 0 / 7 | complete |

## Largest remaining gaps

Topic-level gaps first, then subtopic depth. Past-paper guides (brief step 5) now exist for the Cambridge syllabuses whose examiner reports and grade-threshold tables were available (0620, 0610, 9700, 9701, 9702, 9708, 9609, 9618, 2281, 7115, 1123); 0580, 0625, 9709 and the Edexcel and AQA syllabuses still have none, because their examiner reports were not available.

1. MYP Sciences: 2 of 5 topics still lack at least one of study guide / revision notes / practice set
2. MYP Individuals and Societies: 2 of 6 topics still lack at least one of study guide / revision notes / practice set
3. 0580: 43 of 72 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)
4. 9700: 26 of 44 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)
5. 4MA1: 19 of 36 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)
6. 4CH1: 16 of 17 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)
7. 4BI1: 11 of 12 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)
8. 8462: 7 of 8 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)
9. 8300: 7 of 7 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)
10. 0610: 6 of 61 official subtopics have no exact-subtopic page of every type (covered only by topic-level pages)

## Detail by syllabus

### DP Mathematics: Analysis and Approaches -- mathematics-analysis-and-approaches (ib ib-dp, First assessment 2021)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Number and algebra | 4 | 4 | 4 | -- |
| 2 | Functions | 4 | 4 | 4 | -- |
| 3 | Geometry and trigonometry | 3 | 3 | 3 | -- |
| 4 | Statistics and probability | 2 | 2 | 2 | -- |
| 5 | Calculus | 4 | 4 | 4 | -- |

### DP Mathematics: Applications and Interpretation -- mathematics-applications-and-interpretation (ib ib-dp, First assessments for SL and HL—2021)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Number and algebra | 3 | 3 | 3 | -- |
| 2 | Functions | 2 | 2 | 2 | -- |
| 3 | Geometry and trigonometry | 5 | 5 | 5 | -- |
| 4 | Statistics and probability | 6 | 6 | 6 | -- |
| 5 | Calculus | 3 | 3 | 3 | -- |

### DP Language A: Language and Literature -- language-a-language-and-literature (ib ib-dp, First assessments for SL and HL 2021)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Readers, writers and texts | 6 | 6 | 6 | topic has no subtopic data |
| 2 | Time and space | 6 | 6 | 6 | topic has no subtopic data |
| 3 | Intertextuality: connecting texts | 4 | 4 | 4 | topic has no subtopic data |

### DP Language A: Literature -- language-a-literature (ib ib-dp, First assessments for SL and HL 2021)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Readers, writers and texts | 6 | 6 | 6 | topic has no subtopic data |
| 2 | Time and space | 5 | 5 | 5 | topic has no subtopic data |
| 3 | Intertextuality: connecting texts | 6 | 6 | 6 | topic has no subtopic data |

### DP Environmental Systems and Societies -- environmental-systems-and-societies (ib ib-dp, First assessment 2026)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Foundation | 2 | 2 | 2 | -- |
| 2 | Ecology | 3 | 3 | 3 | -- |
| 3 | Biodiversity and conservation | 1 | 1 | 1 | -- |
| 4 | Water | 1 | 1 | 1 | -- |
| 5 | Land | 1 | 1 | 1 | -- |
| 6 | Atmosphere and climate change | 1 | 1 | 1 | -- |
| 7 | Natural resources | 1 | 1 | 1 | -- |
| 8 | Human populations and urban systems | 1 | 1 | 1 | -- |
| 9 | HL.a Environmental law | 1 | 1 | 1 | topic has no subtopic data |
| 10 | HL.b Environmental and ecological economics | 1 | 1 | 1 | topic has no subtopic data |
| 11 | HL.c Environmental ethics | 1 | 1 | 1 | topic has no subtopic data |

### DP Global Politics -- global-politics (ib ib-dp, First assessment 2026)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Core topics: Understanding power and global politics | 6 | 6 | 6 | topic has no subtopic data |
| 2 | Thematic studies: Rights and justice | 1 | 1 | 1 | topic has no subtopic data |
| 3 | Thematic studies: Development and sustainability | 1 | 1 | 1 | topic has no subtopic data |
| 4 | Thematic studies: Peace and conflict | 1 | 1 | 1 | topic has no subtopic data |
| 5 | HL extension: Global political challenges | 1 | 1 | 1 | topic has no subtopic data |

### DP Language B -- language-b (ib ib-dp, First assessment 2020)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Identities | 5 | 5 | 5 | topic has no subtopic data |
| 2 | Experiences | 4 | 4 | 4 | topic has no subtopic data |
| 3 | Human ingenuity | 4 | 4 | 4 | topic has no subtopic data |
| 4 | Social organization | 5 | 5 | 5 | topic has no subtopic data |
| 5 | Sharing the planet | 5 | 5 | 5 | topic has no subtopic data |

### MYP Language Acquisition -- myp-language-acquisition (ib ib-myp, From 2020 (first eAssessment May 2023/November 2023))

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Key concepts (examples) | 1 | 1 | 1 | topic has no subtopic data |
| 2 | Related concepts (examples) | 2 | 2 | 2 | topic has no subtopic data |
| 3 | Global contexts | 1 | 1 | 1 | topic has no subtopic data |
| 4 | Assessment criteria (Listening, Reading, Speaking, Writing) | 8 | 8 | 8 | topic has no subtopic data |
| 5 | MYP eAssessment structure and proficiency levels | 2 | 2 | 2 | topic has no subtopic data |

### MYP Sciences -- myp-sciences (ib ib-myp, From 2014)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Key concepts (examples: change, relationships, systems) | 0 | 0 | 0 | topic has no subtopic data |
| 2 | Related concepts (examples: energy, movement, transformation, models) | 8 | 8 | 8 | topic has no subtopic data |
| 3 | Global contexts | 0 | 0 | 0 | topic has no subtopic data |
| 4 | Assessment criteria (A: Knowing and understanding; B: Inquiring and designing; C: Processing and evaluating; D: Reflecting on the impacts of science) | 1 | 1 | 1 | topic has no subtopic data |
| 5 | MYP eAssessment structure and on-screen examination topics (examples) | 9 | 9 | 9 | topic has no subtopic data |

### MYP Design -- myp-design (ib ib-myp, From 2014)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Key concepts (examples) | 1 | 1 | 1 | topic has no subtopic data |
| 2 | Related concepts (examples) | 3 | 3 | 3 | topic has no subtopic data |
| 3 | Global contexts | 2 | 2 | 2 | topic has no subtopic data |
| 4 | Assessment criteria | 6 | 6 | 6 | -- |

### MYP Individuals and Societies -- myp-individuals-and-societies (ib ib-myp, From 2014)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Constituent disciplines | 1 | 1 | 1 | topic has no subtopic data |
| 2 | Key concepts (examples) | 0 | 0 | 0 | topic has no subtopic data |
| 3 | Related concepts (examples) | 8 | 8 | 8 | topic has no subtopic data |
| 4 | Global contexts | 0 | 0 | 0 | topic has no subtopic data |
| 5 | Assessment criteria | 1 | 1 | 1 | topic has no subtopic data |
| 6 | MYP eAssessment topics (examples) | 9 | 9 | 9 | topic has no subtopic data |

### 0580 -- mathematics (cambridge igcse, 2025-2027)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Number | 1 | 1 | 2 | 1.2 (SG), 1.3 (SG), 1.4 (SG), 1.5 (SG), 1.6 (SG), 1.7 (SG/PQ), 1.9 (SG/RN), 1.12 (SG), 1.14 (SG), 1.15 (SG), 1.16 (SG), 1.17 (SG), 1.18 (SG) |
| 2 | Algebra and graphs | 1 | 1 | 2 | 2.1 (SG), 2.2 (SG), 2.3 (SG), 2.4 (SG), 2.8 (SG), 2.9 (SG/PQ), 2.10 (SG/PQ), 2.11 (SG), 2.13 (SG) |
| 3 | Coordinate geometry | 1 | 1 | 1 | 3.1 (SG), 3.2 (SG) |
| 4 | Geometry | 1 | 1 | 2 | 4.1 (SG), 4.2 (SG), 4.3 (SG), 4.5 (SG), 4.8 (SG) |
| 5 | Mensuration | 1 | 1 | 1 | 5.1 (SG), 5.2 (SG), 5.4 (SG) |
| 6 | Trigonometry | 1 | 1 | 2 | 6.1 (SG), 6.3 (SG), 6.4 (SG) |
| 7 | Transformations and vectors | 1 | 1 | 1 | 7.2 (SG), 7.3 (SG) |
| 8 | Probability | 1 | 1 | 2 | 8.1 (SG), 8.2 (SG) |
| 9 | Statistics | 1 | 1 | 2 | 9.1 (SG), 9.2 (SG), 9.4 (SG), 9.6 (SG) |

### 0620 -- chemistry (cambridge igcse, 2026-2028)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | States of matter | 1 | 1 | 1 | -- |
| 2 | Atoms, elements and compounds | 1 | 2 | 2 | 2.1 (SG), 2.2 (SG), 2.3 (SG) |
| 3 | Stoichiometry | 1 | 1 | 1 | -- |
| 4 | Electrochemistry | 1 | 1 | 1 | -- |
| 5 | Chemical energetics | 1 | 1 | 1 | -- |
| 6 | Chemical reactions | 3 | 3 | 3 | -- |
| 7 | Acids, bases and salts | 1 | 1 | 1 | -- |
| 8 | The Periodic Table | 1 | 1 | 1 | -- |
| 9 | Metals | 2 | 2 | 2 | -- |
| 10 | Chemistry of the environment | 1 | 1 | 1 | -- |
| 11 | Organic chemistry | 4 | 4 | 4 | -- |
| 12 | Experimental techniques and chemical analysis | 2 | 2 | 2 | -- |

### 0625 -- physics (cambridge igcse, For examination in 2026, 2027 and 2028)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Motion, forces and energy | 1 | 1 | 2 | -- |
| 2 | Thermal physics | 1 | 1 | 2 | -- |
| 3 | Waves | 1 | 1 | 1 | -- |
| 4 | Electricity and magnetism | 1 | 1 | 2 | -- |
| 5 | Nuclear physics | 1 | 1 | 2 | -- |
| 6 | Space physics | 1 | 1 | 1 | -- |

### 0610 -- biology (cambridge igcse, For examination in 2026, 2027 and 2028)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Characteristics and classification of living organisms | 1 | 1 | 1 | -- |
| 2 | Organisation of the organism | 1 | 1 | 1 | -- |
| 3 | Movement into and out of cells | 1 | 1 | 1 | -- |
| 4 | Biological molecules | 1 | 1 | 1 | -- |
| 5 | Enzymes | 1 | 1 | 1 | -- |
| 6 | Plant nutrition | 1 | 1 | 1 | 6.2 (PQ) |
| 7 | Human nutrition | 1 | 1 | 1 | -- |
| 8 | Transport in plants | 1 | 1 | 1 | -- |
| 9 | Transport in animals | 1 | 1 | 1 | -- |
| 10 | Diseases and immunity | 1 | 1 | 1 | -- |
| 11 | Gas exchange in humans | 1 | 1 | 1 | -- |
| 12 | Respiration | 1 | 1 | 1 | -- |
| 13 | Excretion in humans | 1 | 1 | 1 | -- |
| 14 | Coordination and response | 1 | 1 | 1 | 14.3 (PQ), 14.4 (PQ), 14.5 (PQ) |
| 15 | Drugs | 1 | 1 | 1 | -- |
| 16 | Reproduction | 1 | 1 | 1 | 16.5 (PQ), 16.6 (PQ) |
| 17 | Inheritance | 1 | 1 | 1 | -- |
| 18 | Variation and selection | 1 | 1 | 1 | -- |
| 19 | Organisms and their environment | 1 | 1 | 1 | -- |
| 20 | Human influences on ecosystems | 1 | 1 | 1 | -- |
| 21 | Biotechnology and genetic modification | 1 | 1 | 1 | -- |

### 9701 -- chemistry (cambridge a-level, 2025-2027)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Atomic structure | 2 | 2 | 2 | -- |
| 2 | Atoms, molecules and stoichiometry | 1 | 1 | 1 | -- |
| 3 | Chemical bonding | 2 | 2 | 2 | -- |
| 4 | States of matter | 1 | 1 | 1 | -- |
| 5 | Chemical energetics | 1 | 1 | 1 | -- |
| 6 | Electrochemistry | 1 | 1 | 1 | -- |
| 7 | Equilibria | 2 | 2 | 2 | -- |
| 8 | Reaction kinetics | 1 | 1 | 1 | -- |
| 9 | The Periodic Table: chemical periodicity | 1 | 1 | 1 | -- |
| 10 | Group 2 | 1 | 1 | 1 | -- |
| 11 | Group 17 | 1 | 1 | 1 | -- |
| 12 | Nitrogen and sulfur | 1 | 1 | 1 | -- |
| 13 | An introduction to AS Level organic chemistry | 1 | 1 | 1 | -- |
| 14 | Hydrocarbons | 1 | 1 | 1 | -- |
| 15 | Halogen compounds | 1 | 1 | 1 | -- |
| 16 | Hydroxy compounds | 1 | 1 | 1 | -- |
| 17 | Carbonyl compounds | 1 | 1 | 1 | -- |
| 18 | Carboxylic acids and derivatives | 1 | 1 | 1 | -- |
| 19 | Nitrogen compounds | 1 | 1 | 1 | -- |
| 20 | Polymerisation | 1 | 1 | 1 | -- |
| 21 | Organic synthesis | 1 | 1 | 1 | -- |
| 22 | Analytical techniques | 1 | 1 | 1 | -- |
| 23 | Chemical energetics | 1 | 1 | 1 | -- |
| 24 | Electrochemistry | 1 | 1 | 1 | -- |
| 25 | Equilibria | 1 | 1 | 1 | -- |
| 26 | Reaction kinetics | 1 | 1 | 1 | -- |
| 27 | Group 2 | 1 | 1 | 1 | -- |
| 28 | Chemistry of transition elements | 2 | 2 | 2 | -- |
| 29 | An introduction to A Level organic chemistry | 2 | 2 | 2 | -- |
| 30 | Hydrocarbons | 1 | 1 | 1 | -- |
| 31 | Halogen compounds | 1 | 1 | 1 | -- |
| 32 | Hydroxy compounds | 1 | 1 | 1 | -- |
| 33 | Carboxylic acids and derivatives | 1 | 1 | 1 | -- |
| 34 | Nitrogen compounds | 2 | 2 | 2 | -- |
| 35 | Polymerisation | 1 | 1 | 1 | -- |
| 36 | Organic synthesis | 1 | 1 | 1 | -- |
| 37 | Analytical techniques | 2 | 2 | 2 | -- |

### 9702 -- physics (cambridge a-level, 2025-2027)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Physical quantities and units | 1 | 1 | 1 | -- |
| 2 | Kinematics | 1 | 1 | 1 | -- |
| 3 | Dynamics | 1 | 1 | 1 | -- |
| 4 | Forces, density and pressure | 1 | 1 | 1 | -- |
| 5 | Work, energy and power | 1 | 1 | 1 | -- |
| 6 | Deformation of solids | 1 | 1 | 1 | -- |
| 7 | Waves | 1 | 1 | 1 | -- |
| 8 | Superposition | 1 | 1 | 1 | -- |
| 9 | Electricity | 1 | 1 | 1 | -- |
| 10 | D.C. circuits | 1 | 1 | 1 | -- |
| 11 | Particle physics | 1 | 1 | 1 | -- |
| 12 | Motion in a circle | 1 | 1 | 1 | -- |
| 13 | Gravitational fields | 1 | 1 | 1 | -- |
| 14 | Temperature | 1 | 1 | 1 | -- |
| 15 | Ideal gases | 1 | 1 | 1 | -- |
| 16 | Thermodynamics | 1 | 1 | 1 | -- |
| 17 | Oscillations | 1 | 1 | 1 | -- |
| 18 | Electric fields | 1 | 1 | 1 | -- |
| 19 | Capacitance | 1 | 1 | 1 | -- |
| 20 | Magnetic fields | 1 | 1 | 1 | -- |
| 21 | Alternating currents | 1 | 1 | 1 | -- |
| 22 | Quantum physics | 1 | 1 | 1 | -- |
| 23 | Nuclear physics | 1 | 1 | 1 | -- |
| 24 | Medical physics | 1 | 1 | 1 | -- |
| 25 | Astronomy and cosmology | 1 | 1 | 1 | -- |

### 9700 -- biology (cambridge a-level, For examination in 2025, 2026 and 2027)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Cell structure | 1 | 1 | 1 | 1.1 (SG/RN/PQ), 1.2 (SG/RN/PQ) |
| 2 | Biological molecules | 1 | 1 | 1 | 2.1 (SG/RN/PQ), 2.2 (SG/RN/PQ), 2.3 (SG/RN/PQ), 2.4 (SG/RN/PQ) |
| 3 | Enzymes | 1 | 1 | 1 | 3.1 (SG/RN/PQ), 3.2 (SG/RN/PQ) |
| 4 | Cell membranes and transport | 1 | 1 | 1 | 4.1 (PQ), 4.2 (PQ) |
| 5 | The mitotic cell cycle | 1 | 1 | 1 | -- |
| 6 | Nucleic acids and protein synthesis | 1 | 1 | 1 | -- |
| 7 | Transport in plants | 1 | 1 | 1 | -- |
| 8 | Transport in mammals | 1 | 1 | 1 | 8.1 (PQ), 8.2 (PQ), 8.3 (PQ) |
| 9 | Gas exchange | 1 | 1 | 1 | -- |
| 10 | Infectious diseases | 1 | 1 | 1 | 10.1 (PQ), 10.2 (PQ) |
| 11 | Immunity | 1 | 1 | 1 | 11.1 (PQ), 11.2 (PQ) |
| 12 | Energy and respiration | 1 | 1 | 1 | 12.1 (PQ), 12.2 (PQ) |
| 13 | Photosynthesis | 1 | 1 | 1 | -- |
| 14 | Homeostasis | 1 | 1 | 1 | 14.1 (PQ), 14.2 (PQ) |
| 15 | Control and coordination | 1 | 1 | 1 | 15.1 (PQ), 15.2 (PQ) |
| 16 | Inheritance | 1 | 1 | 1 | 16.1 (PQ), 16.2 (PQ), 16.3 (PQ) |
| 17 | Selection and evolution | 1 | 1 | 1 | -- |
| 18 | Classification, biodiversity and conservation | 1 | 1 | 1 | -- |
| 19 | Genetic technology | 1 | 1 | 1 | -- |

### 9709 -- mathematics (cambridge a-level, 2026-2027)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Pure Mathematics 1 | 8 | 8 | 9 | 1.1 (SG) |
| 2 | Pure Mathematics 2 | 7 | 7 | 7 | -- |
| 3 | Pure Mathematics 3 | 1 | 1 | 2 | -- |
| 4 | Mechanics | 1 | 1 | 1 | -- |
| 5 | Probability & Statistics 1 | 1 | 1 | 1 | 5.1 (PQ) |
| 6 | Probability & Statistics 2 | 1 | 1 | 1 | -- |

### 4MA1 -- mathematics (edexcel igcse, Specification Issue 2, November 2017)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Numbers and the number system | 1 | 1 | 1 | 1.1 (SG/RN/PQ), 1.2 (SG/RN/PQ), 1.3 (SG/RN/PQ), 1.4 (SG/RN/PQ), 1.5 (SG/RN/PQ), 1.6 (SG/RN/PQ), 1.7 (SG/RN/PQ), 1.8 (SG/RN/PQ), 1.9 (SG/RN/PQ), 1.10 (SG/RN/PQ), 1.11 (SG/RN/PQ) |
| 2 | Equations, formulae and identities | 1 | 1 | 1 | 2.1 (SG/RN/PQ), 2.2 (SG/RN/PQ), 2.3 (SG/RN/PQ), 2.4 (SG/RN/PQ), 2.5 (SG/RN/PQ), 2.6 (SG/RN/PQ), 2.7 (SG/RN/PQ), 2.8 (SG/RN/PQ) |
| 3 | Sequences, functions and graphs | 1 | 1 | 1 | -- |
| 4 | Geometry and trigonometry | 1 | 1 | 1 | -- |
| 5 | Vectors and transformation geometry | 1 | 1 | 1 | -- |
| 6 | Statistics and probability | 1 | 1 | 1 | -- |

### 4CH1 -- chemistry (edexcel igcse, Issue 3, September 2024)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Principles of chemistry | 1 | 1 | 2 | 1a (SG/RN/PQ), 1b (SG/RN/PQ), 1c (SG/RN/PQ), 1d (SG/RN/PQ), 1e (SG/RN), 1f (SG/RN/PQ), 1g (SG/RN/PQ), 1h (SG/RN/PQ), 1i (SG/RN/PQ) |
| 2 | Inorganic chemistry | 1 | 1 | 2 | a (SG/RN), b (SG/RN), c (SG/RN), e (SG/RN/PQ), f (SG/RN), g (SG/RN), h (SG/RN) |
| 3 | Physical chemistry | 1 | 1 | 1 | topic has no subtopic data |
| 4 | Organic chemistry | 1 | 1 | 1 | topic has no subtopic data |

### 4PH1 -- physics (edexcel igcse, Issue 4)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Forces and motion | 1 | 1 | 1 | -- |
| 2 | Electricity | 1 | 1 | 1 | -- |
| 3 | Waves | 1 | 1 | 1 | -- |
| 4 | Energy resources and energy transfers | 1 | 1 | 1 | -- |
| 5 | Solids, liquids and gases | 1 | 1 | 1 | -- |
| 6 | Magnetism and electromagnetism | 1 | 1 | 1 | -- |
| 7 | Radioactivity and particles | 1 | 1 | 1 | -- |
| 8 | Astrophysics | 1 | 1 | 1 | -- |

### 4BI1 -- biology (edexcel igcse, Issue 3)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | The nature and variety of living organisms | 1 | 1 | 1 | topic has no subtopic data |
| 2 | Structures and functions in living organisms | 1 | 1 | 1 | a (SG/RN/PQ), c (SG/RN/PQ), d (SG/RN/PQ), e (SG/RN/PQ), f (SG/RN/PQ), g (SG/RN/PQ), h (SG/RN/PQ), i (SG/RN/PQ), j (SG/RN/PQ) |
| 3 | Reproduction and inheritance | 1 | 1 | 1 | a (SG/RN/PQ), b (SG/RN/PQ) |
| 4 | Ecology and the environment | 1 | 1 | 1 | topic has no subtopic data |
| 5 | Use of biological resources | 1 | 1 | 1 | topic has no subtopic data |

### 8461 -- biology (aqa gcse, For first teaching 2016)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Cell biology | 1 | 1 | 1 | 4.1.1 (SG/RN/PQ), 4.1.2 (SG/RN/PQ), 4.1.3 (SG/RN/PQ) |
| 2 | Organisation | 1 | 1 | 1 | 4.2.1 (SG/RN/PQ), 4.2.2.2 (SG/RN/PQ) |
| 3 | Infection and response | 1 | 1 | 1 | topic has no subtopic data |
| 4 | Bioenergetics | 1 | 1 | 1 | topic has no subtopic data |
| 5 | Homeostasis and response | 1 | 1 | 1 | topic has no subtopic data |
| 6 | Inheritance, variation and evolution | 1 | 1 | 1 | topic has no subtopic data |
| 7 | Ecology | 1 | 1 | 1 | topic has no subtopic data |
| 8 | Key ideas | 1 | 1 | 1 | topic has no subtopic data |

### 8462 -- chemistry (aqa gcse, For teaching from September 2016)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Atomic structure and the periodic table | 1 | 1 | 1 | 4.1.1 (SG/RN/PQ), 4.1.2 (SG/RN/PQ), 4.1.3 (SG/RN/PQ) |
| 2 | Bonding, structure, and the properties of matter | 1 | 1 | 1 | 4.2.1.1 (SG/RN/PQ), 4.2.1.3 (SG/RN/PQ), 4.2.1.4 (SG/RN/PQ), 4.2.1.5 (SG/RN/PQ) |
| 3 | Quantitative chemistry | 1 | 1 | 1 | topic has no subtopic data |
| 4 | Chemical changes | 1 | 1 | 1 | topic has no subtopic data |
| 5 | Energy changes | 1 | 1 | 1 | topic has no subtopic data |
| 6 | The rate and extent of chemical change | 1 | 1 | 1 | topic has no subtopic data |
| 7 | Organic chemistry | 1 | 1 | 1 | topic has no subtopic data |
| 8 | Chemical analysis | 1 | 1 | 1 | topic has no subtopic data |
| 9 | Chemistry of the atmosphere | 1 | 1 | 1 | topic has no subtopic data |
| 10 | Using resources | 1 | 1 | 1 | topic has no subtopic data |
| 11 | Key ideas | 1 | 1 | 1 | topic has no subtopic data |

### 8463 -- physics (aqa gcse, For first teaching 2016)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Energy | 3 | 2 | 3 | 4.1.3 (RN) |
| 2 | Electricity | 1 | 1 | 1 | -- |
| 3 | Particle model of matter | 1 | 1 | 1 | -- |
| 4 | Atomic structure | 1 | 1 | 1 | -- |
| 5 | Forces | 1 | 1 | 1 | -- |
| 6 | Waves | 1 | 1 | 1 | -- |
| 7 | Magnetism and electromagnetism | 1 | 1 | 1 | -- |
| 8 | Space physics | 1 | 1 | 1 | -- |

### 8300 -- mathematics (aqa gcse, For first teaching 2015)

| # | Topic | SG | RN | PQ | Subtopics missing a type (missing types) |
|---|---|---|---|---|---|
| 1 | Number | 1 | 1 | 1 | 3.1.1 (SG/RN/PQ), 3.1.2 (SG/RN/PQ), 3.1.3 (SG/RN/PQ) |
| 2 | Algebra | 1 | 1 | 1 | 3.2.1 (SG/RN/PQ), 3.2.2 (SG/RN/PQ), 3.2.3 (SG/RN/PQ), 3.2.4 (SG/RN/PQ) |
| 3 | Ratio, proportion and rates of change | 1 | 1 | 1 | topic has no subtopic data |
| 4 | Geometry and measures | 1 | 1 | 1 | topic has no subtopic data |
| 5 | Probability | 1 | 1 | 1 | topic has no subtopic data |
| 6 | Statistics | 1 | 1 | 1 | topic has no subtopic data |
