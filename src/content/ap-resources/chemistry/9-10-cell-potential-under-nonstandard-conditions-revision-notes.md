---
resourceId: "mb-ap-chem-9.10-revision-notes"
title: "Cell Potential Under Nonstandard Conditions: Revision Notes (Chemistry 9.10)"
description: "One-page recap of how Q moves a cell potential above or below E°, why E reaches zero at equilibrium, concentration cells and the qualitative Nernst equation."
course: "chemistry"
unit: 9
topics: ["9.10"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-chem-9.10-study-guide"]
learningObjectives:
  - "Recall how changes in Q change the cell potential relative to E°"
  - "Spot the reasoning errors that cost marks in non-standard cell questions"
skills: ["6"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
calculatorNote: "RT/F = 0.0257 V at 298 K"
related: ["mb-ap-chem-9.10-study-guide", "mb-ap-chem-9.10-practice", "mb-ap-chem-9.10-checklist"]
next: "mb-ap-chem-9.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry"]
keyPoints:
  - "Q = 1: E = E°. Q < 1: E > E°. Q > 1: E < E°. Q = K: E = 0."
  - "Cell potential is the drive towards equilibrium; it shrinks as the cell runs."
  - "Reason with Q, not Le Châtelier's principle."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the E against ln Q graph and worked examples, use the [full study guide](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-study-guide/).

## Recap

- E° is the cell potential at **standard conditions**, where Q = 1. A real cell usually has Q ≠ 1, so its potential E differs from E°.
- The cell potential is a **driving force towards equilibrium**. The further from equilibrium, the larger the size of E.
- As a galvanic cell runs, Q rises towards K, so E falls. At **Q = K**, E = 0: the cell is "dead" (at equilibrium, not necessarily empty).
- A **concentration cell** has the same half-reaction on both sides, so E° = 0. It still gives a voltage while the concentrations differ. The **dilute** side is the **anode**; electrons flow from dilute to concentrated until the concentrations are equal.
- Do **not** use Le Châtelier's principle: a working cell is not at equilibrium.

## Key relationships

| Relationship | What it tells you |
|---|---|
| E = E° − (RT/nF) ln Q | Q < 1 → E > E°; Q > 1 → E < E° |
| E = 0 when Q = K | equilibrium; no net current |
| E° = (RT/nF) ln K | positive E° ⇔ K > 1 |
| RT/F = 0.0257 V at 298 K | a tenfold change in Q shifts E by only a few hundredths of a volt |

## Assumptions behind the reasoning

- Temperature is constant (usually 298 K), so E° and K are fixed.
- Pure solids and liquids are left out of Q.
- The cell starts on the reactant side of equilibrium (Q < K), as every working galvanic cell does.

## Mistakes to avoid

1. **Le Châtelier language** ("shifts right"). Say instead: "Q decreases, so the cell is further from equilibrium, so E increases."
2. **Changing E°.** Concentrations change E, never E°.
3. **E = 0 means no reactant left.** It means Q = K.
4. **Concentration cell = no voltage.** E° = 0, but E ≠ 0 while Q ≠ 1.
5. **Diluting both half-cells changes nothing.** True only if Q stays the same; check the coefficients.
6. **Calculation without explanation.** Explain the change in Q first; a Nernst number only supports it.

## Quick self-check

1. A cell with E° = +0.50 V has Q = 50. Is E above or below 0.50 V? *(Below: Q > 1, so the cell is closer to equilibrium.)*
2. A galvanic cell's voltmeter reads 0.00 V. What is true about Q? *(Q = K; the cell is at equilibrium.)*
3. A concentration cell has Ni in 0.10 M Ni²⁺ and Ni in 1.0 M Ni²⁺. Which electrode is the anode, and roughly what is E? *(The one in 0.10 M; E = (0.0257/2) ln 10 ≈ 0.030 V.)*

Next: [practice questions](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-practice/).
