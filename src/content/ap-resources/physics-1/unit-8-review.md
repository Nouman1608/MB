---
resourceId: "mb-ap-phys1-u8-review"
title: "Fluids: Mixed Unit Review (Physics 1 Unit 8)"
description: "Connect all four fluids topics: the big ideas, a one-table summary of key relationships, and seven original exam-style questions that each combine two or more topics."
course: "physics-1"
unit: 8
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have worked through the study guides for Topics 8.1 to 8.4"
prerequisiteResources: ["mb-ap-phys1-u8-diagnostic"]
learningObjectives:
  - "Link density, pressure at depth and the buoyant force into one method for floating and submerged objects"
  - "Use pressure readings and the depth rule to measure densities and flow speeds"
  - "Combine continuity and Bernoulli's equation with pressure from a force or a column of fluid"
  - "Explain a change in fluid speed with both Newton's second law and conservation of energy"
  - "Analyse plotted data to find a density and test a fluid model"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. We use g = 9.8 m/s², water density 1000 kg/m³ and 1 atm = 1.0 × 10⁵ Pa. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-u8-diagnostic", "mb-ap-phys1-8.1-checklist", "mb-ap-phys1-8.2-checklist", "mb-ap-phys1-8.3-checklist", "mb-ap-phys1-8.4-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Density links mass and volume; pressure links force and area. Most fluid answers need both."
  - "Pressure rises by ρgh with depth because each layer holds up the fluid above it; the buoyant force is that pressure difference acting on an object."
  - "A fluid speeds up only when it is pushed from higher to lower pressure, and Bernoulli's equation keeps the energy books for that change."
  - "Continuity fixes the speeds; Bernoulli then fixes the pressures."
  - "Questions 1–3 are multiple choice; Questions 4–7 are multi-part with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review is for the **algebra-based Physics 1 course**, Unit 8 (Fluids). Do the [unit diagnostic](/advanced-course-resources/physics-1/unit-8-diagnostic/) first if you have not yet done it.

## Big ideas of the unit

- **Particle interactions decide the state.** Liquids and gases have no fixed shape, so both are fluids ([Topic 8.1](/advanced-course-resources/physics-1/8-1-internal-structure-density-study-guide/)).
- **Density describes the material, not the sample.** Average density (total mass ÷ total volume) decides whether an object floats ([Topic 8.1](/advanced-course-resources/physics-1/8-1-internal-structure-density-study-guide/)).
- **Pressure is a scalar.** It makes a force PA perpendicular to any surface ([Topic 8.2](/advanced-course-resources/physics-1/8-2-pressure-study-guide/)).
- **Depth, not shape.** In a connected fluid at rest, P = P₀ + ρgh, with h the vertical depth. A liquid column in an open tube measures gauge pressure ([Topic 8.2](/advanced-course-resources/physics-1/8-2-pressure-study-guide/)).
- **The buoyant force is the pressure difference at work.** Bottom faces are deeper than top faces, so the fluid's net push is upward and equals the weight of fluid displaced ([Topic 8.3](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-study-guide/)).
- **Every buoyancy problem is a Newton's-laws problem.** Draw the free-body diagram, then use ΣF = 0 or ΣF = ma ([Topic 8.3](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-study-guide/)).
- **A fluid accelerates from high to low pressure.** Equal pressures on both ends mean constant velocity, not rest ([Topic 8.3](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-study-guide/)).
- **Mass is conserved in a full pipe:** A₁v₁ = A₂v₂, so narrow means fast ([Topic 8.4](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-study-guide/)).
- **Energy is conserved in an ideal flow:** P + ρgy + ½ρv² is the same at every point. At rest it gives the depth rule ([Topic 8.4](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method | When it applies |
|---|---|---|
| Density | ρ = m / V; slope of an m–V graph | any material; average density for composite objects |
| Pressure from a force | P = F⊥ / A | any surface; perpendicular component only |
| Absolute and gauge | P = P₀ + P_gauge | P₀ is usually 1.0 × 10⁵ Pa |
| Depth rule | P = P₀ + ρgh | connected fluid at rest; h vertical |
| Buoyant force | F_b = ρ_fluid V_disp g | any object in a fluid |
| Floating | F_b = mg; V_sub / V = ρ_object / ρ_fluid | object at rest at the surface |
| Fluid acceleration | net force = (P₁ − P₂)A on a parcel | from high to low pressure |
| Flow rate, continuity | V/t = Av; A₁v₁ = A₂v₂ | ideal fluid, full pipe |
| Bernoulli | P₁ + ρgy₁ + ½ρv₁² = P₂ + ρgy₂ + ½ρv₂² | ideal, steady flow; same pressure type at both points |
| Torricelli | v = √(2gh) | open tank much wider than the hole |

## Practice questions

These are **original Marlbridge practice questions**, not past exam questions. The rubric tables are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s², water density 1000 kg/m³ and 1 atm = 1.0 × 10⁵ Pa. Treat fluids as ideal and pipes as full; ignore drag.

## Question 1 (multiple choice · mixed)

A beaker holds a deep layer of oil (density 800 kg/m³) floating on water. A solid plastic block of density 950 kg/m³ is placed in it. The block ends up fully submerged, floating at rest across the boundary, with its top face in the oil. What fraction of the block's volume is in the water?

- (A) 0.25
- (B) 0.75
- (C) 0.95
- (D) None: it sinks to the bottom, because it is denser than the oil

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The buoyant force equals the weight of **both** displaced liquids. At rest: (x × 1000 + (1 − x) × 800)Vg = 950Vg, so x = 150 ÷ 200 = 0.75.

- (A) swaps the liquids in the algebra. The block is closer in density to water, so most of it sits in the water.
- (C) uses ρ_block / ρ_water, as if only water pushed up. The oil above still adds pressure on the bottom face.
- (D) is right that it sinks through the oil, but it stops at the water, which is denser than the block.
</details>

## Question 2 (multiple choice · mixed)

Water flows through a horizontal pipe. Thin vertical tubes, open at the top, rise from a wide section and from a narrow section with **one-third** of the wide area. Water stands 0.30 m above the pipe's axis in the wide-section tube and 0.10 m above it in the narrow-section tube. What is the speed in the wide section?

- (A) 0.70 m/s
- (B) 2.0 m/s
- (C) 2.1 m/s
- (D) 0.66 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each tube's water is at rest, so the depth rule gives the gauge pressure below it. The difference is ρg(0.20) = 1960 Pa. Continuity: v₂ = 3v₁. Bernoulli for a level pipe: 1960 = ½ρ(9v₁² − v₁²) = 4000v₁², so v₁ = 0.70 m/s.

- (B) uses Torricelli, √(2g × 0.20), which assumes the slow section is at rest.
- (C) is the speed in the narrow section.
- (D) drops the ½ρv₁² term, finds v₂ = 1.98 m/s, then divides by 3.
</details>

## Question 3 (multiple choice · mixed)

A wooden block floats in water inside a sealed container. A pump then raises the air pressure above the water from 1.0 × 10⁵ Pa to 1.5 × 10⁵ Pa. Ignore the buoyant force of the air. How does the block's floating depth change?

- (A) It sits deeper, because the extra air pressure pushes down on its top face.
- (B) It rises, because the extra pressure is transmitted to its bottom face.
- (C) It does not change, because the extra pressure adds equally to its top and bottom faces.
- (D) It rises, because the water is compressed and becomes denser.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The top face is in air at pressure P_air. The bottom face, at depth d, has pressure P_air + ρgd. The net upward force from air and water is (P_air + ρgd)A − P_air A = ρgdA. P_air cancels, so the depth that balances mg is unchanged.

- (A) counts only the top face. The bottom face gets the extra pressure too.
- (B) counts only the bottom face.
- (D) breaks the ideal-fluid model: the water is incompressible, so its density does not change.
</details>

## Question 4 (constructed response · mixed)

Take **+y up**. A hydrometer is a sealed glass tube with a flat bottom and a uniform cross-section of area 2.0 × 10⁻⁴ m². It is weighted so that its total mass is 0.030 kg, and it floats upright.

(a) Draw the free-body diagram of the hydrometer floating at rest. Show that it floats with its bottom 0.15 m below the surface of water.
(b) In an unknown liquid it floats with its bottom 0.125 m below the surface. Find the liquid's density.
(c) Find the gauge pressure on the bottom face in each liquid, and explain why the two values are equal.
(d) A student says: "The denser liquid pushes up harder on the hydrometer, so it floats higher." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two forces: weight mg down; buoyant force F_b up, equal lengths. At rest, ρ_water A d g = mg, so d = m ÷ (ρ_water A) = 0.030 ÷ (1000 × 2.0 × 10⁻⁴) = **0.15 m**.

**(b)** Same balance: ρ = m ÷ (A d) = 0.030 ÷ (2.0 × 10⁻⁴ × 0.125) = **1.2 × 10³ kg/m³**.

**(c)** Water: ρgh = 1000 × 9.8 × 0.15 = **1470 Pa**. Liquid: 1200 × 9.8 × 0.125 = **1470 Pa**. The side forces cancel, so the fluid's only upward push is P_gauge A on the bottom face. Newton's first law requires P_gauge A = mg = 0.294 N in any liquid, so P_gauge = 0.294 ÷ 2.0 × 10⁻⁴ = 1470 Pa every time.

**(d)** **Incorrect** reasoning. F_b = mg = 0.294 N in both liquids. It floats higher because a denser liquid supplies that same force with less displaced volume (depth ∝ 1/ρ).

| Point | What earns it |
|---|---|
| 1 | Two forces, F_b = mg |
| 1 | Depth 0.15 m from ρ_water A d g = mg |
| 1 | Density 1.2 × 10³ kg/m³ |
| 1 | 1470 Pa in both liquids |
| 1 | Explains equal pressure from P_gauge A = mg (side forces cancel) |
| 1 | Rejects "pushes harder": F_b is unchanged; less volume is needed |

**Total: 6 points.**
</details>

## Question 5 (constructed response · mixed)

A wide, sealed water tank has air above the water at a gauge pressure of 3.0 × 10⁴ Pa. A small hole of area 1.0 × 10⁻⁴ m² is opened in the side, 1.2 m below the water surface. The air outside is at atmospheric pressure.

(a) Find the gauge pressure in the water just inside the hole, before it is opened.
(b) Use Bernoulli's equation to find the speed of the water leaving the hole. Compare it with the speed if the tank were open at the top.
(c) Find the volume flow rate out of the hole.
(d) Sketch bar charts of P (gauge), ρgy and ½ρv² for a point on the water surface and a point in the jet, with y = 0 at the hole.
(e) A student says: "Doubling the air's gauge pressure will double the exit speed." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P_gauge = 3.0 × 10⁴ + ρgh = 3.0 × 10⁴ + 1000 × 9.8 × 1.2 = **4.2 × 10⁴ Pa** (41 760 Pa).

**(b)** Surface: P = 3.0 × 10⁴ Pa gauge, y = 1.2 m, v ≈ 0 (wide tank). Jet: P = 0 gauge, y = 0. Bernoulli: 3.0 × 10⁴ + 11 760 = ½(1000)v², so v = √(2 × 41 760 ÷ 1000) = **9.1 m/s**. Open tank: √(2 × 9.8 × 1.2) = 4.85 m/s, about half as fast.

**(c)** V/t = Av = 1.0 × 10⁻⁴ × 9.14 = **9.1 × 10⁻⁴ m³/s**.

**(d)**

| Point | P (gauge) | ρgy | ½ρv² | Total |
|---|---|---|---|---|
| Surface | 30 000 | 11 760 | 0 | 41 760 J/m³ |
| Jet | 0 | 0 | 41 760 | 41 760 J/m³ |

**(e)** **Incorrect.** ½ρv² = P_air + ρgh, so v grows with the square root. With 6.0 × 10⁴ Pa: v = √(2(60 000 + 11 760) ÷ 1000) = 12 m/s, only 1.31 times larger.

| Point | What earns it |
|---|---|
| 1 | 4.2 × 10⁴ Pa, adding the air's gauge pressure to ρgh |
| 1 | Bernoulli with both the air pressure and the height term |
| 1 | 9.1 m/s, compared with 4.9 m/s for an open tank |
| 1 | Flow rate 9.1 × 10⁻⁴ m³/s |
| 1 | Bar charts with equal totals, energy moving from P and ρgy to ½ρv² |
| 1 | Rejects the claim: 12 m/s, a factor of only 1.3 |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

A syringe lies horizontally, full of water. Its barrel has area 1.5 × 10⁻⁴ m², and its nozzle has area 1.5 × 10⁻⁶ m². A student pushes the plunger with a steady 3.0 N, so the plunger moves at a constant, slow speed. Ignore friction between the plunger and the barrel. Outside, the air is at atmospheric pressure.

(a) Find the gauge pressure of the water in the barrel.
(b) Use continuity and Bernoulli's equation to find the speed of the water leaving the nozzle. Justify any approximation.
(c) Using Newton's second law, explain where in the syringe the water speeds up, and why.
(d) Predict the exit speed if the student pushes with 6.0 N.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The plunger moves at constant velocity, so the forces on it balance: F + P_atm A = PA. So P_gauge = F ÷ A = 3.0 ÷ 1.5 × 10⁻⁴ = **2.0 × 10⁴ Pa**.

**(b)** Continuity: the barrel speed is v₁ = v₂ × (1.5 × 10⁻⁶ ÷ 1.5 × 10⁻⁴) = v₂ ÷ 100. Bernoulli (level, gauge pressures): 2.0 × 10⁴ + ½ρv₁² = 0 + ½ρv₂². Because v₁ = v₂/100, ½ρv₁² is only 1/10 000 of ½ρv₂² (about 2 Pa), so ignore it: v₂ = √(2 × 2.0 × 10⁴ ÷ 1000) = **6.3 m/s**. The plunger moves at about 6.3 cm/s.

**(c)** In the barrel the water moves slowly at nearly constant speed, so the pressure there is nearly uniform. In the narrowing nozzle, each parcel has higher pressure behind it than ahead, falling to atmospheric at the exit. That gives a forward net force, so the water speeds up in the taper.

**(d)** v ∝ √P and P ∝ F, so v ∝ √F. Doubling F gives v = 6.3 × √2 = **8.9 m/s**.

| Point | What earns it |
|---|---|
| 1 | P_gauge = F/A = 2.0 × 10⁴ Pa from a force balance on the plunger |
| 1 | Continuity: v₁ = v₂/100 |
| 1 | Justifies dropping ½ρv₁² (tiny compared with the other terms) |
| 1 | Exit speed 6.3 m/s |
| 1 | Speeding up happens where the pressure drops, because the net force points from high to low pressure |
| 1 | 8.9 m/s from v ∝ √F |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

A student measures an oil's density with a U-shaped glass tube, open at both ends. Water fills the bottom of the U. She pours oil into the left arm; it floats on the water there. She measures the height h_oil of the oil column above the oil–water boundary, and the height h_w of the water in the right arm above the level of that boundary.

| h_oil (m) | 0.050 | 0.100 | 0.150 | 0.200 |
|---|---|---|---|---|
| h_w (m) | 0.041 | 0.079 | 0.121 | 0.160 |

(a) Explain why the pressure at the boundary equals the pressure in the right arm at the same level. Use this to show that h_w = (ρ_oil / ρ_water) h_oil.
(b) State what to plot to get a straight line, and use the data to find ρ_oil.
(c) A plastic bead of density 850 kg/m³ is released from rest inside a beaker of this oil. Find its acceleration, taking +y up.
(d) The bead is moved to water. What fraction of its volume is under the surface when it floats at rest?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Below the boundary, the U holds only water, connected and at rest, so points at the same level have the same pressure. Both arms are open, so the pressures at the tops are both P_atm. Left: P_atm + ρ_oil g h_oil. Right: P_atm + ρ_water g h_w. Setting them equal: **h_w = (ρ_oil / ρ_water) h_oil**.

**(b)** Plot **h_w (vertical) against h_oil (horizontal)**. The points lie on a straight line through the origin, and the best-fit slope is 0.80 (0.798). So ρ_oil = 0.80 × 1000 = **8.0 × 10² kg/m³**.

**(c)** a_y = g(ρ_oil / ρ_bead − 1) = 9.8 × (800/850 − 1) = **−0.58 m/s²**. The bead sinks slowly: the buoyant force supports most of its weight.

**(d)** V_sub / V = 850 / 1000 = **0.85**.

| Point | What earns it |
|---|---|
| 1 | Same level in a connected fluid at rest means same pressure |
| 1 | Equates P_atm + ρ_oil g h_oil and P_atm + ρ_water g h_w to get the relation |
| 1 | Plots h_w against h_oil with slope = ρ_oil / ρ_water |
| 1 | ρ_oil ≈ 8.0 × 10² kg/m³ from the slope |
| 1 | a_y = −0.58 m/s² from F_b − mg |
| 1 | Fraction 0.85 from F_b = mg |

**Total: 6 points.**
</details>

## How did you do?

Questions 4–7 are worth 6 points each on the suggested Marlbridge rubric. Use the points you lost to choose what to study.

- **Questions 1, 4 or 7 (density, measuring ρ):** [Topic 8.1 checklist](/advanced-course-resources/physics-1/8-1-internal-structure-density-checklist/).
- **Questions 2–7 (depth rule, gauge pressure, F/A):** [Topic 8.2 checklist](/advanced-course-resources/physics-1/8-2-pressure-checklist/).
- **Questions 1, 3, 4, 6 or 7 (buoyancy, fluid acceleration):** [Topic 8.3 checklist](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-checklist/).
- **Questions 2, 5 or 6 (continuity, Bernoulli, Torricelli):** [Topic 8.4 checklist](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-checklist/).
- **Quick check of every topic:** retake the [unit diagnostic](/advanced-course-resources/physics-1/unit-8-diagnostic/).
