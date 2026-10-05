---
resourceId: "mb-ap-chem-3.13-revision-notes"
title: "Beer-Lambert Law: Revision Notes (Chemistry 3.13)"
description: "One-page recap of A = εbc, molar absorptivity, choosing λmax, calibration curves and the lab errors that push a calculated concentration too high or too low."
course: "chemistry"
unit: 3
topics: ["3.13"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-chem-3.13-study-guide"]
learningObjectives:
  - "Recall A = εbc with the meaning and unit of each symbol"
  - "Predict the direction of the effect of a lab error on a calculated concentration"
skills: ["2", "5"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-chem-3.13-study-guide", "mb-ap-chem-3.13-practice", "mb-ap-chem-3.13-checklist"]
next: "mb-ap-chem-3.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A = εbc; A has no unit."
  - "Fixed cuvette and wavelength: A is proportional to c."
  - "Error questions: effect on A first, then on c = A ÷ (εb)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/chemistry/3-13-beer-lambert-law-study-guide/).

## Recap

- A solution absorbs light when its particles absorb photons of a matching energy. **Absorbance, A**, measures how much.
- The **Beer-Lambert law**: **A = εbc**.
- **ε (molar absorptivity)** says how strongly one species absorbs one wavelength. It depends on the species and the wavelength, not on concentration.
- **b (path length)** and **c (concentration)** together set how many absorbing particles the beam meets, so A is proportional to each.
- With the same cuvette and wavelength, A is proportional to c alone. A graph of A against c for standards is a straight line through the origin with gradient εb: a **calibration curve**.
- Set the spectrophotometer to **λmax**, the wavelength of maximum absorbance: biggest ε, most sensitive, least affected by small wavelength drift.
- Zero the instrument with a **blank** (cuvette plus solvent) first.

## Key relationships

| Relationship | Symbols and units | Use it to |
|---|---|---|
| A = εbc | A no unit; ε in M⁻¹ cm⁻¹; b in cm; c in M | find any one quantity from the other three |
| c = A ÷ (εb) | as above | find the concentration of an unknown |
| gradient of A against c = εb | gradient in M⁻¹ | get ε from a calibration curve (ε = gradient ÷ b) |
| c(original) = c(measured) × dilution factor | dilution factor = final volume ÷ sample volume | undo a dilution made before measuring |

## Assumptions behind the numbers

- Only **one species** absorbs at the chosen wavelength (or the blank removes everything else).
- **Path length and wavelength are the same** for the standards and the unknown.
- The unknown's absorbance lies **within the range of the standards**, where the line is straight.
- The solution is **clear**: nothing in it scatters light.

## Mistakes to avoid

1. **Giving A a unit.** It has none.
2. **Thinking ε changes with concentration.** It does not.
3. **Picking the wavelength with the least absorbance.** Use λmax.
4. **Forgetting the dilution factor** after reading the calibration line.
5. **Wrong error direction.** Smudges, bubbles, cloudiness and a longer cuvette raise A (c too high). Water droplets that dilute the sample lower A (c too low).
6. **Vague error answers.** Say whether A goes up or down, then link to c.

## Quick self-check

1. A 3.00 × 10⁻⁵ M solution in a 1.00 cm cuvette has A = 0.450. What is ε? *(1.50 × 10⁴ M⁻¹ cm⁻¹)*
2. A solution has A = 0.20 in a 1.00 cm cuvette. What is A in a 2.00 cm cuvette? *(0.40)*
3. You halve the concentration and double the path length. What happens to A? *(No change: the beam meets the same number of particles.)*
4. Air bubbles are stuck in the cuvette holding the unknown. Is the calculated c too high or too low? *(Too high: bubbles scatter light, so A reads too high.)*

Next: [practice questions](/advanced-course-resources/chemistry/3-13-beer-lambert-law-practice/).
