---
resourceId: "mb-ap-physcem-11.3-revision-notes"
title: "Resistance, Resistivity and Ohm's Law: Revision Notes (Physics C: E&M 11.3)"
description: "One-page recap of resistance for the calculus-based course: R = ρℓ/A, resistivity and temperature, integrating a varying resistivity, Ohm's law and reading R from an I–ΔV graph."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-11.3-study-guide"]
learningObjectives:
  - "Recall how resistance depends on length, area and resistivity"
  - "Spot graph-reading and geometry errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-11.3-study-guide", "mb-ap-physcem-11.3-practice", "mb-ap-physcem-11.3-checklist"]
next: "mb-ap-physcem-11.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "R = ΔV/I defines resistance; R = ρℓ/A gives it for a uniform wire."
  - "Varying resistivity: R = (1/A)∫ρ(x) dx."
  - "Ohmic: constant R, straight I–ΔV line through the origin, slope 1/R."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figures 1 and 2 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-study-guide/).

## Recap

- **Resistance** measures how strongly an object opposes the movement of charge. R = ΔV/I, in ohms (1 Ω = 1 V/A).
- **Resistivity** ρ (Ω·m) is a property of the material, set by its atomic and molecular structure. It does not depend on the shape of the sample.
- In a metal, resistivity usually **rises with temperature**, because carriers scatter more often off the more strongly vibrating ions.
- An **ohmic** element has constant resistance for all currents; in the ohmic model its resistivity does not change with temperature.
- Resistors convert electrical energy to thermal energy, which can warm the resistor and its surroundings.

## Key relationships

| Situation | Relationship | Note |
|---|---|---|
| Any element, at one moment | R = ΔV/I | Definition |
| Uniform wire | R = ρℓ/A | From E = ρJ, J = I/A and ΔV = Eℓ |
| Round wire | A = πr² = πd²/4 | Halve the diameter first |
| Wire stretched to n times its length | R → n²R | Volume fixed, so A → A/n |
| Resistivity varies along the wire | R = (1/A)∫₀ˡ ρ(x) dx | Thin slices in series |
| Ohmic element | ΔV = IR with R constant | Ohm's law |
| Graph of I (vertical) against ΔV | slope = 1/R | So R = 1/slope |

## Assumptions behind the results

- The wire has a uniform cross-section, and the current is spread evenly across it.
- The current is steady.
- Unless told otherwise, resistors are ohmic, and connecting wires have negligible resistance.

## Mistakes to avoid

1. **Calling R = ΔV/I "Ohm's law".** Ohm's law is the claim that R is constant.
2. **Diameter used as radius.** This makes A four times too large.
3. **Stretched wire: R × n.** It is R × n², because the area shrinks too.
4. **Slope of I against ΔV taken as R.** It is 1/R.
5. **Tangent slope for a lamp.** Use ΔV/I at the point.
6. **Single ρ when ρ varies.** Integrate.
7. **Line through the first and last points.** Draw a best-fit line through all the data.

## Quick self-check

1. A wire is 1.0 m long, with area 1.0 × 10⁻⁶ m² and ρ = 5.0 × 10⁻⁷ Ω·m. What is R? *(0.50 Ω)*
2. An ohmic element's I–ΔV graph has slope 0.10 A/V. What is R? *(10 Ω)*
3. A uniform wire of resistance R is cut into two equal halves. What is the resistance of each half? *(R/2)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-practice/).
