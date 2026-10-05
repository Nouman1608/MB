---
resourceId: "mb-ap-physcm-3.4-practice"
title: "Conservation of Energy: Practice Questions (Physics C: Mechanics 3.4)"
description: "Seven original Marlbridge calculus-based practice questions on energy conservation: system choice, U(x) graphs, escape speed, pendulums, hanging springs, a track experiment and lowering at constant speed."
course: "physics-c-mechanics"
unit: 3
topics: ["3.4"]
resourceType: "practice-questions"
prerequisites:
  - "Potential energy functions (Topic 3.3) and centripetal acceleration (Topic 2.10)"
prerequisiteResources: ["mb-ap-physcm-3.4-study-guide"]
learningObjectives:
  - "Decide how a system's mechanical energy changes from the choice of system and the external work"
  - "Find speeds and turning points from U(x) and a total energy"
  - "Compare launch speeds using U_g = −GMm/r"
  - "Combine energy conservation with Newton's second law for circular motion"
  - "Design and analyse an experiment that tests energy conservation"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculator for arithmetic. g = 9.8 m/s², G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-3.4-study-guide", "mb-ap-physcm-3.4-revision-notes", "mb-ap-physcm-3.4-checklist"]
next: "mb-ap-physcm-3.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "State your system before writing any energy equation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, U is in J and x is in m, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Ignore air resistance unless told otherwise. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A rope pulls a box up a frictionless ramp at constant speed. A student chooses the **box + Earth** as the system. Which statement is correct while the box moves up?

- (A) The system's mechanical energy increases by the work done on the box by the rope.
- (B) The system's mechanical energy is constant, because the box moves at constant speed.
- (C) The system's mechanical energy decreases, because gravity does negative work on the box.
- (D) The system's mechanical energy is constant, because the net work on the box is zero.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** K is constant but U_g of the box–Earth system rises. The rope is the only external force doing work on this system, so ΔK + ΔU_g = W_rope > 0.

- (B) looks only at kinetic energy. Constant speed fixes K, not K + U.
- (C) treats gravity as an external force. In this system gravity is an internal interaction, stored as U_g, so it cannot also be counted as work.
- (D) uses the work–energy theorem for the box alone (net work zero, so ΔK = 0) and applies it to the mechanical energy of a different system.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**. A 0.50 kg particle moves without friction in a system with U(x) = (3.0 J/m²)x². Its total mechanical energy is 6.0 J. What is its speed at x = 1.0 m?

- (A) 2.4 m/s
- (B) 3.5 m/s
- (C) 4.9 m/s
- (D) 12 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** K = E − U(1.0) = 6.0 − 3.0 = 3.0 J. v = √(2K/m) = √(2 × 3.0 ÷ 0.50) = √12 = 3.5 m/s. (The turning points are where U = 6.0 J, at x = ±1.4 m.)

- (A) uses v = √(K/m) and drops the factor 2 from K = ½mv².
- (C) uses all 6.0 J as kinetic energy. That is the speed at x = 0, where U = 0, not at x = 1.0 m.
- (D) is v², 12 m²/s², without the square root.
</details>

## Question 3 (multiple choice · core)

A probe is launched straight up from the surface of an airless planet of mass M and radius R. Launched at the escape speed v_esc, it never returns. What launch speed makes it rise until it is a distance 2R from the planet's centre, then fall back?

- (A) 0.50 v_esc
- (B) 0.71 v_esc
- (C) 0.87 v_esc
- (D) v_esc

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Energy: ½mv² = GMm/R − GMm/(2R) = GMm/(2R), so v² = GM/R. Escape needs v_esc² = 2GM/R. So v = v_esc/√2 = 0.71 v_esc.

- (A) sees that the probe needs half the escape energy (1/R − 1/(2R) is half of 1/R) but then halves the speed. Kinetic energy goes as v², so half the energy means v_esc/√2, not v_esc/2.
- (C) uses 1/r² (as for force) instead of 1/r for energy: v² ∝ 1/R² − 1/(4R²) gives √(3/4) = 0.87.
- (D) is the escape speed itself, which takes the probe to infinite separation.
</details>

## Question 4 (calculation · core)

A 0.25 kg ball hangs on a light string 0.80 m long. It is pulled aside until the string is horizontal and released from rest. Use the ball + Earth system.

(a) Find the ball's speed at the lowest point.
(b) Find the tension in the string at the lowest point.
(c) Find the ball's speed when the string makes 60° with the vertical.

<details>
<summary>Worked solution</summary>

1. **(a)** The tension is always perpendicular to the motion, so it does no work. K + U_g is constant: ½mv² = mgL, so v = √(2gL) = √(2 × 9.8 × 0.80) = **4.0 m/s**.
2. **(b)** At the lowest point, the net force points up, towards the centre: T − mg = mv²/L. Using v² = 2gL: T = mg + 2mg = 3mg = 3 × 0.25 × 9.8 = **7.4 N**.
3. **(c)** The ball has dropped L cos 60° = 0.40 m below its start. v = √(2 × 9.8 × 0.40) = **2.8 m/s**.

Suggested mark points (4): 1 for the energy equation with no work by tension; 1 for v = 4.0 m/s; 1 for the radial Newton's second law with the net force towards the centre; 1 for the drop of 0.40 m and v = 2.8 m/s.

Common error: T = mg at the bottom. The ball is moving in a circle there, so the net force is not zero.
</details>

## Question 5 (constructed response · core)

Take **+y downward**, with y = 0 at the relaxed length. A 0.30 kg block is attached to the lower end of a vertical ideal spring (k = 49 N/m). A student holds the block at y = 0 and lets go.

(a) Derive an expression for the greatest extension y_max in terms of m, g and k, and evaluate it.
(b) Show that y_max is twice the extension at which the block could hang at rest.
(c) Find the block's greatest speed.
(d) In a second trial, the student lowers the block slowly by hand until it hangs at rest. Compare the energy changes in the two trials and say where the "missing" energy goes in the second.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** System: block + spring + Earth. No external work, no friction, so K + U_s + U_g is constant. At release and at y_max, K = 0: 0 = ½ky_max² − mgy_max (gravitational energy falls as y increases). So **y_max = 2mg/k** = 2 × 0.30 × 9.8 ÷ 49 = **0.12 m**.

**(b)** At rest, ky_eq = mg, so y_eq = mg/k = **0.060 m**, half of y_max.

**(c)** Speed is greatest where the net force is zero, at y_eq. K = mgy_eq − ½ky_eq² = 0.176 − 0.088 = 0.088 J, so v = √(2 × 0.088 ÷ 0.30) = **0.77 m/s**.

**(d)** In both trials U_g falls by 0.176 J between y = 0 and y_eq = 0.060 m, and U_s rises by 0.088 J. In the first trial the other 0.088 J becomes kinetic energy. In the second, the hand pushes up while the block moves down, so it does **−0.088 J** of work on the system: that energy is transferred out of the system (to the person). The block ends at rest at 0.060 m and never reaches 0.12 m.

| Point | What earns it |
|---|---|
| 1 | (a) Energy equation with both U_s and U_g and K = 0 at both ends |
| 1 | (a) y_max = 2mg/k = 0.12 m |
| 1 | (b) y_eq = mg/k from force balance and comparison |
| 1 | (c) Greatest speed at y_eq with a reason, v = 0.77 m/s |
| 1 | (d) Hand does negative work; 0.088 J leaves the system |
</details>

## Question 6 (experimental design · stretch)

Students test whether a cart's mechanical energy is conserved as it rolls down a curved track. They release it from rest at heights h above the lowest point and use a photogate at the lowest point to find its speed v.

| h (m) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| v (m/s) | 1.32 | 1.85 | 2.28 | 2.62 | 2.94 |

(a) Describe a procedure, including how v is found from the photogate and one way to reduce uncertainty.
(b) State what to plot to get a straight line through the origin if mechanical energy is conserved, and the slope you would expect.
(c) Plot or calculate the best-fit slope and find the fraction of the initial mechanical energy left as kinetic energy at the bottom.
(d) Suggest one physical reason for the difference and a change to the experiment that would test it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Measure the width of the flag on the cart with calipers. For each h (measured vertically with a metre rule from the photogate's height), release the cart from rest without pushing, record the gate's blocking time Δt, and calculate v = (flag width) ÷ Δt. Repeat three times at each height and average, to reduce random uncertainty.

**(b)** If K + U_g is constant, ½mv² = mgh, so v² = 2gh. Plot **v² against h**. Expected slope **2g = 19.6 m/s²**.

**(c)** v² values: 1.74, 3.42, 5.20, 6.86, 8.64 m²/s². A best-fit line through the origin has slope **17 m/s²** (17.2). The fraction kept is 17.2 ÷ 19.6 = **0.88**, so about 12% of the mechanical energy is dissipated.

**(d)** Friction in the wheel bearings and air resistance dissipate energy (some energy may also go into the wheels' rotation). Test: repeat with a heavier load on the same cart. If air resistance dominates, the fraction kept should rise with mass; or repeat with a cart with low-friction bearings and compare slopes.

| Point | What earns it |
|---|---|
| 1 | (a) Measured quantities and v = width ÷ Δt from the photogate |
| 1 | (a) Repeats or another valid way to reduce uncertainty |
| 1 | (b) v² against h, with the expected slope 2g derived from energy |
| 1 | (c) Slope 17 m/s² (accept 16.5–18.0) and fraction about 0.88 |
| 1 | (d) A dissipative mechanism and a matching test |

**Alternative for (c).** Calculating gh and ½v² for each row and averaging their ratio (each row gives 0.87–0.89; mean 0.88) earns the point.
</details>

## Question 7 (explanation · stretch)

A crane lowers a 150 kg crate 4.0 m at constant speed. Student P says: "The speed is constant, so the crate's mechanical energy is conserved." Student Q says: "Mechanical energy decreases."

(a) Using the crate + Earth system, calculate ΔK, ΔU_g and the work done by the cable.
(b) Decide which student is right and explain, naming the system each statement should refer to.
(c) Where does the energy go?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** ΔK = 0. ΔU_g = −mgh = −150 × 9.8 × 4.0 = **−5.9 × 10³ J**. At constant speed the tension equals mg = 1470 N, upward, while the crate moves down 4.0 m, so W_cable = **−5.9 × 10³ J**.

**(b)** **Student Q is right** for the crate + Earth system: ΔK + ΔU_g = −5.9 × 10³ J, which equals the (negative) work done by the cable, an external force. Student P has confused constant kinetic energy with constant mechanical energy. Constant speed means only that the **net** work on the crate alone is zero: gravity does +5.9 × 10³ J and the cable −5.9 × 10³ J.

**(c)** The energy leaves the crate–Earth system through the cable, into the crane. There it is dissipated in the brakes or motor as thermal energy (or stored, if the crane can recover it). Total energy is conserved once the crane is included in the system.

| Point | What earns it |
|---|---|
| 1 | (a) ΔU_g = −5.9 × 10³ J and ΔK = 0 |
| 1 | (a) W_cable = −5.9 × 10³ J, with tension = mg from constant velocity |
| 1 | (b) Q is right; ΔE_mech equals the external work by the cable |
| 1 | (b) Explains P's error: constant speed fixes K or net work on the crate alone, not K + U |
| 1 | (c) Energy is transferred out through the cable to the crane and dissipated or stored |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Choosing the system decides what stays constant" in the [study guide](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/). Write the system down first.
- **Q2 wrong:** revisit "Energy with a potential energy function" and Worked example 1. K is the gap between E and U(x).
- **Q3 wrong:** go through Worked example 2. Energy goes as 1/r, force as 1/r².
- **Q4 or Q5 wrong:** check which forces do work. Tension in a string swinging on a fixed point does none; a hand lowering a block does.
- **Q6 incomplete:** say *why* the graph should be straight, and link the slope to 2g.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-checklist/).
