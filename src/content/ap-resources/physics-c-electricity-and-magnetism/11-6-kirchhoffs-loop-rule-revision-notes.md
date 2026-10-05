---
resourceId: "mb-ap-physcem-11.6-revision-notes"
title: "Kirchhoff's Loop Rule: Revision Notes (Physics C: E&M 11.6)"
description: "One-page recap of Kirchhoff's loop rule: energy and potential round a loop, the sign convention, loop equations and potential-against-position graphs."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-11.6-study-guide"]
learningObjectives:
  - "Recall the loop rule, its energy basis and the sign convention"
  - "Spot sign and graph errors before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-11.6-study-guide", "mb-ap-physcem-11.6-practice", "mb-ap-physcem-11.6-checklist"]
next: "mb-ap-physcem-11.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "ΣΔV = 0 round any closed loop."
  - "It is conservation of energy, with ΔU_E = qΔV."
  - "One walking direction per loop; a negative current just means the other direction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the figures, the graph and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-study-guide/).

## Recap

- A charge moving through a potential difference ΔV changes its electric potential energy by ΔU_E = qΔV.
- Every point in a steady circuit has one value of potential. Go once round a closed loop and you return to the same potential, so the potential differences add to zero.
- That is **Kirchhoff's loop rule**, and it is a statement of **energy conservation**: energy gained from sources equals energy transferred in the other elements.
- The rule holds for every closed loop, including loops through branches and meters.
- Only potential differences are physical. You may choose any point as V = 0.

## Key relationships

| Quantity | Relationship |
|---|---|
| Energy change of a charge | ΔU_E = qΔV |
| Loop rule | ΣΔV = 0 round a closed loop |
| Single loop, real battery | I = ℰ/(r + ΣR) |
| Battery delivering current | ΔV_terminal = ℰ − Ir |
| Battery being charged | ΔV_terminal = ℰ + Ir |

| Crossing… | ΔV |
|---|---|
| resistor with the assumed current | −IR |
| resistor against the assumed current | +IR |
| battery, − to + | +ℰ |
| battery, + to − | −ℰ |
| ideal wire | 0 |

## Potential-against-position graphs

- Rise of ℰ across a source (crossed − to +).
- Straight-line fall of IR across a uniform resistor, in the direction of the current.
- Flat along ideal wires.
- Ends at the level where it started.

## Mistakes to avoid

1. **Switching walking direction half-way round a loop.**
2. **Giving a battery −ℰ when crossing it from − to +.**
3. **Treating a negative current as an error.**
4. **Drawing a drop along a wire** on the potential graph.
5. **Forgetting internal resistance** when the battery is not ideal.
6. **A graph that does not close.**

## Quick self-check

1. A loop has a 12 V ideal battery and resistors with 5.0 V and 4.5 V across them, plus one more resistor. What is the potential difference across the last one? *(2.5 V)*
2. You walk through a resistor against the current I. What term do you write? *(+IR)*
3. A loop equation gives I = −0.40 A. What does this tell you? *(The current is 0.40 A in the opposite direction to the one assumed)*
4. On a potential graph, what does a flat section show? *(An ideal wire: no potential difference)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-6-kirchhoffs-loop-rule-practice/).
