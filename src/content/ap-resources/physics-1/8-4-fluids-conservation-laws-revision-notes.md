---
resourceId: "mb-ap-phys1-8.4-revision-notes"
title: "Fluids and Conservation Laws: Revision Notes (Physics 1 8.4)"
description: "One-page recap of flow rate, the continuity equation, Bernoulli's equation and Torricelli's result for ideal fluids, with assumptions, bar-chart tips and the mistakes that cost marks."
course: "physics-1"
unit: 8
topics: ["8.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys1-8.4-study-guide"]
learningObjectives:
  - "Recall V/t = Av, A₁v₁ = A₂v₂, Bernoulli's equation and v = √(2gh), and know where each comes from"
  - "Spot the common pressure, area and unit errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-phys1-8.4-study-guide", "mb-ap-phys1-8.4-practice", "mb-ap-phys1-8.4-checklist"]
next: "mb-ap-phys1-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1"]
keyPoints:
  - "Continuity (mass): A₁v₁ = A₂v₂. Narrower means faster."
  - "Bernoulli (energy): P + ρgy + ½ρv² is the same at every point of an ideal flow."
  - "Level pipe: faster fluid, lower pressure. Opening: v = √(2gh)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, bar charts and worked examples, use the [full study guide](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-study-guide/). This is the algebra-based course: no calculus is needed.

## Recap

- A **pressure difference** between two places makes a fluid flow.
- In a **full pipe**, an incompressible fluid leaves at the same rate it enters. That is conservation of mass.
- **Volume flow rate** V/t = Av comes from the cylinder of fluid (area A, length vt) that passes a line in time t.
- **Bernoulli's equation** is conservation of energy for a small volume of ideal fluid: work done by pressure differences changes its kinetic and gravitational potential energy.
- **Torricelli's result** is Bernoulli between an open surface and an open hole: v = √(2gh), like free fall through h.

## Key relationships

| Relationship | Symbols and units | Use it to |
|---|---|---|
| V/t = Av | m³/s | find the volume flow rate |
| mass flow rate = ρAv | kg/s | find mass per second |
| A₁v₁ = A₂v₂ | A in m², v in m/s | compare speeds in two sections |
| A = πr² = πd²/4 | m² | turn a diameter into an area |
| P₁ + ρgy₁ + ½ρv₁² = P₂ + ρgy₂ + ½ρv₂² | each term in Pa = J/m³ | compare pressure, height and speed at two points |
| v = √(2gh) | h = depth of opening below the surface | speed of fluid leaving an opening |
| v = 0 in Bernoulli → P = P₀ + ρgh | Pa | check against the depth rule |

## Assumptions behind the numbers

- The fluid is **ideal**: incompressible and with no viscosity, so no mechanical energy is lost.
- Pipes are **completely full**.
- Flow is **steady**: the speed at a given point does not change with time.
- For Torricelli: the tank is much wider than the hole, so the surface speed is about zero, and both the surface and the jet are at atmospheric pressure.
- g = 9.8 m/s²; water 1000 kg/m³; 1 atm = 1.0 × 10⁵ Pa.

## Mistakes to avoid

1. **Faster means higher pressure.** In a level pipe, faster means **lower** pressure.
2. **Diameter ratio used as area ratio.** Square it.
3. **Mixing gauge and absolute pressure.** Use the same kind at both points.
4. **Dropping the ρgy term** when the points are at different heights.
5. **Units:** cm² to m² is × 10⁻⁴; litres to m³ is × 10⁻³.
6. **Density in Torricelli.** It cancels; the exit speed depends only on h.
7. **Unequal bar-chart totals.** For an ideal fluid, the total P + ρgy + ½ρv² must match at every point.

## Quick self-check

1. Water flows into a pipe section whose diameter is three times larger. By what factor does its speed change? *(It becomes 1/9 of its earlier value.)*
2. A small hole is 1.25 m below the open surface of a wide tank. What is the speed of the water leaving it? *(4.9 m/s)*
3. In a level pipe, water speeds up from 2.0 m/s to 4.0 m/s. By how much does its pressure fall? *(6000 Pa = 6.0 kPa)*

Next: [practice questions](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-practice/).
