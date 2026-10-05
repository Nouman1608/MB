---
resourceId: "mb-ap-phys1-8.3-practice"
title: "Fluids and Newton’s Laws: Practice Questions (Physics 1 8.3)"
description: "Seven original Marlbridge practice questions on buoyant force, floating, spring-scale readings and pressure-driven acceleration of fluids, with worked solutions and suggested mark points."
course: "physics-1"
unit: 8
topics: ["8.3"]
resourceType: "practice-questions"
prerequisites:
  - "Pressure and the change of pressure with depth (Topic 8.2)"
  - "Free-body diagrams and Newton's second law (Topics 2.2 and 2.5)"
prerequisiteResources: ["mb-ap-phys1-8.3-study-guide"]
learningObjectives:
  - "Calculate buoyant forces, volumes and densities from spring-scale readings"
  - "Predict how a submerged fraction or a scale reading changes when the fluid changes"
  - "Use Newton's third law to explain a balance reading when an object is lowered into a fluid"
  - "Derive and use the acceleration of a slug of fluid driven by a pressure difference"
  - "Draw free-body diagrams for objects held in a fluid and evaluate claims about depth and buoyancy"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², density of water 1000 kg/m³. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-8.3-study-guide", "mb-ap-phys1-8.3-revision-notes", "mb-ap-phys1-8.3-checklist"]
next: "mb-ap-phys1-8.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its positive direction. Use it for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² and a density of 1000 kg/m³ for water. Treat every fluid as ideal (incompressible, no viscosity) and ignore drag unless told otherwise. Round final answers to 2 significant figures unless told otherwise. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Three blocks have the same volume, 2.0 × 10⁻⁴ m³. One is cork, one is aluminium and one is lead. Each is held completely under water by a thin rod, at the same depth. Which statement about the buoyant forces on them is correct?

- (A) The cork block has the largest buoyant force, because cork floats.
- (B) The lead block has the largest buoyant force, because it is heaviest.
- (C) All three have the same buoyant force, about 2.0 N.
- (D) All three have a buoyant force equal to their own weights.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** F_b = ρ_water V_disp g = 1000 × 2.0 × 10⁻⁴ × 9.8 = 1.96 N ≈ 2.0 N for each block. The displaced volume and the fluid are the same, so the buoyant force is the same. The material changes only the weight.

- (A) mixes up "floats" with "feels a bigger buoyant force". Cork floats because its weight is *less* than this buoyant force, not because its buoyant force is bigger.
- (B) uses the object's weight instead of the displaced fluid's weight.
- (D) is true only for a floating object in equilibrium. Here the rod supplies the extra force needed for each block.
</details>

## Question 2 (multiple choice · core)

A beaker of water sits on an electronic balance, which reads 12.0 N. A metal block of weight 4.0 N hangs from a string held by a student's hand. The block is lowered until it is fully under water, not touching the beaker. The buoyant force on it is 1.5 N. What does the balance read now?

- (A) 12.0 N
- (B) 13.5 N
- (C) 14.5 N
- (D) 16.0 N

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The water pushes up on the block with 1.5 N. By Newton's third law, the block pushes down on the water with 1.5 N. That extra push passes through the water to the beaker and the balance: 12.0 + 1.5 = 13.5 N. The string still holds the rest of the block's weight (tension 4.0 − 1.5 = 2.5 N).

- (A) forgets the third-law partner of the buoyant force.
- (C) adds the string tension (2.5 N) instead of the buoyant force.
- (D) adds the whole weight of the block, as if it were resting on the bottom with the string slack.
</details>

## Question 3 (multiple choice · core)

A plastic block floats in water with 60% of its volume below the surface. The same block is placed in an oil of density 750 kg/m³. What fraction of its volume is now below the surface?

- (A) 0.45
- (B) 0.60
- (C) 0.80
- (D) It sinks, because the oil is less dense than water.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Floating in water: V_sub / V = ρ_block / ρ_water = 0.60, so ρ_block = 600 kg/m³. In the oil: V_sub / V = 600 / 750 = 0.80. The block must displace the same **weight** of liquid as before, and oil is less dense, so it needs more volume.

- (A) multiplies 0.60 by 750/1000. The fraction is inversely proportional to the fluid's density, not proportional to it.
- (B) assumes the fraction depends only on the block.
- (D) would be right only if the oil were less dense than the block. 750 kg/m³ is still more than 600 kg/m³.
</details>

## Question 4 (calculation · core)

A small metal ornament hangs from a spring scale. In air the scale reads 2.94 N. Fully under water, it reads 2.52 N.

(a) Calculate the buoyant force on the ornament.
(b) Calculate the ornament's volume and density.
(c) Predict the scale reading if the ornament is fully submerged in an oil of density 900 kg/m³ instead.

<details>
<summary>Worked solution</summary>

**(a)** Take +y upward. At rest under water: T + F_b − mg = 0, so F_b = 2.94 − 2.52 = **0.42 N**.

**(b)** V = F_b / (ρ_water g) = 0.42 ÷ (1000 × 9.8) = **4.3 × 10⁻⁵ m³**. Mass m = 2.94 ÷ 9.8 = 0.30 kg. Density ρ = 0.30 ÷ 4.29 × 10⁻⁵ = **7.0 × 10³ kg/m³**. (Check: mg / F_b = 2.94 / 0.42 = 7.0, so ρ = 7.0 × 1000 kg/m³.)

**(c)** Same volume, new fluid: F_b = 900 × 4.29 × 10⁻⁵ × 9.8 = 0.378 N. Reading = 2.94 − 0.378 = **2.56 N** (2.6 N to 2 significant figures).

Suggested mark points (4): 1 for F_b from the difference of readings with a force balance; 1 for the volume; 1 for the density with unit; 1 for the oil reading, showing F_b is smaller in the less dense fluid.
</details>

## Question 5 (graph · core)

A solid cylinder of height 0.080 m and cross-sectional area 1.25 × 10⁻³ m² hangs from a spring scale, with its axis vertical. In air the scale reads 2.94 N. The cylinder is lowered slowly into a deep tank of water. Let d be the depth of the cylinder's bottom face below the water surface.

(a) Calculate the scale reading when d = 0.040 m and when d = 0.080 m.
(b) Sketch a graph of the scale reading against d from 0 to 0.12 m, with numerical scales. Describe the two parts of the graph.
(c) What does the slope of the first part represent? Give its value.
(d) Explain, using pressure, why the reading stops changing after d = 0.080 m.
(e) Find the cylinder's density.

<details>
<summary>Worked solution</summary>

**(a)** F_b = ρ_water A d g. At d = 0.040 m: F_b = 1000 × 1.25 × 10⁻³ × 0.040 × 9.8 = 0.49 N, so the reading is 2.94 − 0.49 = **2.45 N**. At d = 0.080 m: F_b = 0.98 N, so the reading is **1.96 N**.

**(b)** Two straight-line parts:

| d (m) | 0 | 0.020 | 0.040 | 0.060 | 0.080 | 0.10 | 0.12 |
|---|---|---|---|---|---|---|---|
| reading (N) | 2.94 | 2.695 | 2.45 | 2.205 | 1.96 | 1.96 | 1.96 |

From d = 0 to 0.080 m the reading falls in a straight line, because the displaced volume grows in proportion to d. From 0.080 m onward the line is flat at 1.96 N.

**(c)** Slope = −ρ_water A g = −1000 × 1.25 × 10⁻³ × 9.8 = **−12 N/m** (−12.25 N/m before rounding). Its size is the extra buoyant force for each metre of extra depth while the cylinder is going in.

**(d)** Once fully submerged, lowering the cylinder raises the pressure on its top and bottom faces by the same amount, ρgΔd. The **difference** in pressure between the faces stays ρg × 0.080 m, so the buoyant force stays 0.98 N. Equivalently, the displaced volume no longer changes.

**(e)** V = A × h = 1.25 × 10⁻³ × 0.080 = 1.0 × 10⁻⁴ m³. m = 2.94 ÷ 9.8 = 0.30 kg. ρ = 0.30 ÷ 1.0 × 10⁻⁴ = **3.0 × 10³ kg/m³**.

| Point | What earns it |
|---|---|
| 1 | Both readings in (a), using the submerged volume A × d |
| 1 | Graph: sloping straight line to (0.080 m, 1.96 N), then horizontal, with labelled scales |
| 1 | Slope −12 N/m identified as −ρ_water A g (change in buoyant force per metre) |
| 1 | Flat part explained by equal pressure increase on top and bottom (or constant displaced volume) |
| 1 | Density 3.0 × 10³ kg/m³ with unit |
</details>

## Question 6 (constructed response · core)

Take **+x to the right**. Water flows through a horizontal pipe of uniform cross-sectional area A. Consider a short slug of water of length L. The pressure on its left end is P₁ and on its right end is P₂.

(a) Draw a free-body diagram of the slug, showing horizontal forces only, and label each force with an expression.
(b) Derive an expression for the slug's acceleration a_x in terms of P₁, P₂, ρ and L.
(c) For L = 0.030 m and P₁ − P₂ = 300 Pa, calculate a_x.
(d) A student says: "If P₁ = P₂, the water in the pipe must stop." Evaluate this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** A box with an arrow to the right labelled P₁A on its left face and an arrow to the left labelled P₂A on its right face. (Weight and the pipe's normal force are vertical and cancel; they are not needed.)

**(b)** Net force: ΣF_x = P₁A − P₂A. Mass of slug: m = ρAL. Newton's second law:

a_x = (P₁ − P₂)A / (ρAL) = **(P₁ − P₂) / (ρL)**

The area cancels.

**(c)** a_x = 300 ÷ (1000 × 0.030) = **+10 m/s²** (to the right, towards the lower pressure).

**(d)** The claim is **incorrect**. If P₁ = P₂, the net horizontal force on the slug is zero, so by Newton's first law its velocity stays **constant**: it keeps moving at whatever speed it had. An ideal fluid has no viscosity, so nothing slows it. A pressure difference is needed to *change* the velocity, not to keep it.

| Point | What earns it |
|---|---|
| 1 | Two opposite horizontal forces P₁A and P₂A on the correct faces |
| 1 | Net force (P₁ − P₂)A and mass ρAL written down |
| 1 | a_x = (P₁ − P₂) / (ρL) with the area cancelled |
| 1 | +10 m/s² with direction towards lower pressure |
| 1 | Claim rejected using zero net force → constant velocity (first law), not "stops" |

**Prediction check.** Doubling the pressure difference doubles a_x (to 20 m/s²); doubling L for the same pressure difference halves it (to 5.0 m/s²), because the same force now acts on twice the mass.
</details>

## Question 7 (constructed response · stretch)

Take **+y upward**. A wooden block of volume 5.0 × 10⁻⁴ m³ and density 600 kg/m³ is tied by a light string to the bottom of a tank. The block is fully under water and at rest.

(a) Draw a free-body diagram of the block.
(b) Calculate the tension in the string.
(c) The string is cut. Calculate the block's acceleration just after the cut, ignoring drag.
(d) A student claims: "If the block had been tied deeper in the tank, its acceleration just after the cut would be larger, because the water pressure is higher down there." Evaluate the claim.
(e) What volume of the block is under water once it floats at rest at the surface?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Three forces: F_b upward (longest arrow), weight mg downward, string tension T downward. F_b = mg + T.

**(b)** m = 600 × 5.0 × 10⁻⁴ = 0.30 kg, so mg = 2.94 N. F_b = 1000 × 5.0 × 10⁻⁴ × 9.8 = 4.90 N. T = F_b − mg = 4.90 − 2.94 = **2.0 N** (1.96 N).

**(c)** With the string gone, ΣF_y = F_b − mg = +1.96 N. a_y = 1.96 ÷ 0.30 = **+6.5 m/s²** (upward). Check: g(ρ_water / ρ_block − 1) = 9.8 × (1000/600 − 1) = 6.5 m/s².

**(d)** The claim is **incorrect**. Deeper water does have higher pressure, but it is higher on the top face *and* the bottom face by the same amount. The buoyant force depends on the **difference** between them, which depends only on the block's height (ρ_water g h). So F_b is still 4.90 N, the net force is still 1.96 N, and a_y is still 6.5 m/s². (The water is ideal, so its density does not increase with depth.)

**(e)** Floating at rest, F_b = mg = 2.94 N, so V_sub = 2.94 ÷ (1000 × 9.8) = **3.0 × 10⁻⁴ m³** (0.60 of the block).

| Point | What earns it |
|---|---|
| 1 | Free-body diagram with F_b up, mg and T down, F_b longest |
| 1 | T = 2.0 N from F_b − mg |
| 1 | a_y = +6.5 m/s² from the net force with no tension |
| 1 | Rejects the claim **because** the pressure rises equally on top and bottom, so F_b is unchanged |
| 1 | V_sub = 3.0 × 10⁻⁴ m³ from F_b = mg |

An answer to (d) that only says "the buoyant force does not depend on depth" earns the conclusion but not the reasoning point; it must say *why*.
</details>

## How did you do?

- **Q1 wrong:** re-read "Deriving F_b = ρVg" in the [study guide](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-study-guide/). The object's material is not in the formula.
- **Q2 wrong:** revisit the last misconception: the buoyant force has a Newton's third law partner.
- **Q3 wrong:** go back to "Floating" and Worked example 2.
- **Q4 or Q5 incomplete:** work through Worked example 1 and Figure 2(b).
- **Q6 incomplete:** see "When does a fluid's velocity change?" and Worked example 3.
- **Q7 incomplete:** use Figure 1 to explain why depth cancels, then Figure 2(c) for the forces.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-checklist/).
