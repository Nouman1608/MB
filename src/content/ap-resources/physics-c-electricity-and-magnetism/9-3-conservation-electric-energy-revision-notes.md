---
resourceId: "mb-ap-physcem-9.3-revision-notes"
title: "Conservation of Electric Energy: Revision Notes (Physics C: E&M 9.3)"
description: "One-page recap of energy conservation for charges in the calculus-based course: ΔU = qΔV, kinetic energy and speed, sign rules, turning points and the electron-volt."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-9.3-study-guide"]
learningObjectives:
  - "Recall ΔU = qΔV and ΔK = −qΔV and apply the sign rules"
  - "Spot sign and unit errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-9.3-study-guide", "mb-ap-physcem-9.3-practice", "mb-ap-physcem-9.3-checklist"]
next: "mb-ap-physcem-9.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "ΔU = qΔV for the object–field system."
  - "Only electric forces: ΔK = −qΔV."
  - "Positive charges speed up towards lower V; negative charges towards higher V."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figure 1 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-study-guide/). This page is for the calculus-based course.

## Recap

- When a charge q moves from potential V_i to V_f, the potential energy of the charge–field system changes by ΔU = q(V_f − V_i).
- If only the electric force does work, K + U is constant, so the kinetic energy changes by ΔK = −ΔU.
- With other forces, W_ext = ΔK + ΔU.
- The electrostatic force is conservative: the path does not matter, only the end potentials.
- A charge released from rest moves so that U decreases.
- 1 eV = 1.602 × 10⁻¹⁹ J, the energy one elementary charge gains through 1 V.

## Key relationships

| Quantity | Relationship | Note |
|---|---|---|
| Potential energy change | ΔU = qΔV | keep the signs of q and ΔV |
| Kinetic energy change (electric force only) | ΔK = −qΔV | gain when qΔV < 0 |
| Work done by the field | W_field = −ΔU = −qΔV | |
| Speed from rest | v = √(2\|q\|\|ΔV\|/m) | v ∝ √ΔV and v ∝ √(q/m) |
| Potential difference from a field | ΔV = −∫E·dr | then use ΔU = qΔV |
| Turning point | U = total energy, K = 0 | charge reverses there |
| Two free charges | Σp constant and K_total = −ΔU | lighter object gets more K |

## Assumptions

- The field is static (charges that create it do not move, or move as part of the system you analyse).
- No energy is lost to friction, collisions or radiation; the motion is in a vacuum.
- Speeds are well below the speed of light, so K = ½mv².

## Mistakes to avoid

1. **Losing the sign of q.** Electrons gain kinetic energy moving to **higher** V.
2. **Using V, not ΔV.** Only differences matter.
3. **Thinking speed ∝ ΔV.** K ∝ ΔV; v ∝ √ΔV.
4. **Forgetting to convert eV to J** before using ½mv².
5. **Using a plate separation you do not need.** Energy depends only on ΔV.
6. **Giving all the energy to one body** when both charges are free to move.

## Quick self-check

1. A particle of charge +2e is accelerated from rest through 500 V. What kinetic energy does it gain? *(1000 eV, or 1.60 × 10⁻¹⁶ J)*
2. The accelerating potential difference is made 9 times larger. By what factor does the final speed change? *(3 times, since v ∝ √ΔV)*
3. An electron moves from 0 V to +150 V, starting from rest. What is its kinetic energy? *(150 eV = 2.40 × 10⁻¹⁷ J)*
4. A proton has 50 eV in total and the potential rises to +60 V ahead of it (U = 0 where V = 0). Does it get through? *(No: it turns back where V = +50 V)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-practice/).
