---
resourceId: "mb-ap-physcm-2.5-practice"
title: "Newton’s Second Law: Practice Questions (Physics C: Mechanics 2.5)"
description: "Seven original Marlbridge calculus-based practice questions on Newton’s second law: factors of change, components, system choice, time-varying forces, a derivation and lab data."
course: "physics-c-mechanics"
unit: 2
topics: ["2.5"]
resourceType: "practice-questions"
prerequisites:
  - "Free-body diagrams and force components"
  - "Integrating polynomials with initial conditions"
prerequisiteResources: ["mb-ap-physcm-2.5-study-guide"]
learningObjectives:
  - "Apply a = ΣF/m in components and predict factors of change"
  - "Choose a system so internal forces cancel, and find an internal force from a smaller system"
  - "Integrate a time-dependent net force to find velocity and turning points"
  - "Derive the acceleration of a connected system in symbols and test it with limiting cases"
  - "Linearise lab data to test a ∝ 1/m and justify a claim about a system’s center of mass"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.5-study-guide", "mb-ap-physcm-2.5-revision-notes", "mb-ap-physcm-2.5-checklist"]
next: "mb-ap-physcm-2.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis and its system."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, F is in N, x in m, v_x in m/s, a_x in m/s² and t in s, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s². Surfaces called smooth are frictionless, strings and bars called light have negligible mass, and pulleys are light and frictionless. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

An ice yacht is pushed along by the wind. The net force on it becomes three times larger, and at the same moment cargo is thrown off so that its total mass halves. By what factor does the size of its acceleration change?

- (A) × 1/6
- (B) × 1.5
- (C) × 3
- (D) × 6

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** a = ΣF/m. The new acceleration is (3ΣF)/(m/2) = 6ΣF/m, so it is six times larger.

- (A) inverts the law, as if a = m/ΣF.
- (B) multiplies 3 by ½, treating acceleration as proportional to mass instead of inversely proportional.
- (C) includes the force change but ignores the change in mass.
</details>

## Question 2 (multiple choice · core)

Take **+x forward**. A 60 kg student stands inside a 30 kg cart that is at rest on a smooth level floor. Keeping her feet still on the cart floor, she pushes forward on the cart's front wall with a force of 50 N. Take the system to be the student and the cart. What is the acceleration of the system's center of mass?

- (A) 0
- (B) 0.56 m/s² forward
- (C) 1.7 m/s² forward
- (D) 1.7 m/s² backward

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every horizontal force here is internal: hands on wall, wall on hands, feet on floor, floor on feet. Internal forces cancel in third-law pairs. The external forces (weights and the floor's normal force) are vertical and balance. So ΣF_x = 0 on the system and the center of mass does not accelerate.

- (B) divides the 50 N push by the total mass, 90 kg. The push is internal, so it is not part of the net external force.
- (C) divides 50 N by the cart's mass alone. On the cart, the student's feet also push backward on the floor with an equal force, so the cart's own net force is zero too.
- (D) makes the same error as (C), with the direction reversed.
</details>

## Question 3 (multiple choice · core)

Take **+x east and +y north** on a smooth horizontal table. Two horizontal forces act on a 3.0 kg puck: 9.0 N east and 12 N north. Its weight and the table's normal force balance. What is the size of its acceleration?

- (A) 1.0 m/s²
- (B) 3.0 m/s²
- (C) 5.0 m/s²
- (D) 7.0 m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** ΣF = √(9.0² + 12²) = 15 N, so a = 15 ÷ 3.0 = 5.0 m/s², directed 53° north of east (the direction of ΣF).

- (A) subtracts the sizes (12 − 9.0 = 3.0 N). That only works for forces along one line in opposite directions.
- (B) uses the east force alone: 9.0 ÷ 3.0 is a_x, only one component.
- (D) adds the sizes (21 N). Perpendicular forces add as vectors, not as numbers.
</details>

## Question 4 (calculation · core)

Take **+x to the right**. A 4.0 kg cart on a smooth track has v_x0 = −3.0 m/s at t = 0. The net force on it is F_x(t) = 8.0 − 2.0t for 0 ≤ t ≤ 8.0 s.

(a) Find a_x(t) and v_x(t).
(b) Find the times when the cart is momentarily at rest.
(c) Find the greatest value of v_x in this interval and explain why it occurs when it does.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** a_x = F_x/m = (8.0 − 2.0t) ÷ 4.0 = **2.0 − 0.50t**. Then v_x = −3.0 + ∫₀ᵗ (2.0 − 0.50t) dt = **−3.0 + 2.0t − 0.25t²**.

**(b)** v_x = 0: 0.25t² − 2.0t + 3.0 = 0, so t² − 8.0t + 12 = 0, (t − 2.0)(t − 6.0) = 0. At rest at **t = 2.0 s and t = 6.0 s**.

**(c)** v_x is greatest when dv_x/dt = a_x = 0, at t = 4.0 s. Then v_x = −3.0 + 8.0 − 4.0 = **+1.0 m/s**. Before 4.0 s the net force is positive, so v_x keeps increasing; after 4.0 s it is negative, so v_x decreases. The maximum occurs where the net force changes sign, not where it is largest. (Check the end: v_x(8.0) = −3.0 m/s, below the maximum.)

| Point | What earns it |
|---|---|
| 1 | (a) a_x(t) from ΣF/m |
| 1 | (a) v_x(t) by integration, including v_x0 = −3.0 m/s with its sign |
| 1 | (b) Both times, 2.0 s and 6.0 s |
| 1 | (c) Uses a_x = 0 (or ΣF = 0) to locate the maximum, and gives +1.0 m/s with a reason |

Common error: leaving out v_x0 gives v_x(4.0) = 4.0 m/s.
</details>

## Question 5 (constructed response · core)

Take **+x toward the pulley** for the glider and **+ downward** for the hanging block, so both move in their positive directions together. A glider of mass M rests on a level, smooth air track. A light string runs from it over a pulley at the end of the track to a hanging block of mass m. The system is released from rest.

(a) Taking the glider, string and block as one system, derive an expression for the size of the acceleration a in terms of M, m and g.
(b) Using a second system, derive an expression for the tension T in the string.
(c) Evaluate a and T for M = 3.0 kg and m = 1.0 kg.
(d) Explain why T is less than mg, and check your answer to (a) in the limit M → 0.
(e) The hanging mass is doubled to 2.0 kg, with M unchanged. By what factor does a change? Explain why it is not 2.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For the whole system, tension is internal. Along the direction of motion the only unbalanced external force is the block's weight, mg (the glider's weight is balanced by the track's normal force). The whole mass M + m shares the same acceleration size, so mg = (M + m)a, and **a = mg/(M + m)**.

**(b)** System: the glider alone. The only horizontal force is T, so **T = Ma = Mmg/(M + m)**.

**(c)** a = (1.0 × 9.8) ÷ 4.0 = **2.45 ≈ 2.5 m/s²**. T = 3.0 × 2.45 = **7.35 ≈ 7.4 N**.

**(d)** For the block, mg − T = ma. The block accelerates downward, so the net force on it must point down: T must be less than mg (here 7.35 N < 9.8 N). If M → 0, a → mg/m = g, which is free fall, as expected with nothing holding the block back.

**(e)** New a = (2.0 × 9.8) ÷ 5.0 = 3.92 m/s², so a is multiplied by 3.92 ÷ 2.45 = **1.6**. Doubling m doubles the net force, but it also increases the total mass being accelerated, from 4.0 kg to 5.0 kg.

| Point | What earns it |
|---|---|
| 1 | (a) Identifies mg as the net external force on the whole system, with tension internal |
| 1 | (a) Divides by the total mass M + m |
| 1 | (b) T = Ma from the glider alone (or mg − T = ma from the block) |
| 1 | (c) and (d) Correct values, and T < mg justified by the block's downward acceleration, with the M → 0 limit giving g |
| 1 | (e) Factor 1.6, with the increase in total mass as the reason |

**Alternative method.** Writing T = Ma for the glider and mg − T = ma for the block, then adding, earns both (a) points.
</details>

## Question 6 (experimental design · stretch)

Take **+x along the track**. A student tests whether a ∝ 1/m at constant net force. A hanging block of mass 0.050 kg pulls a glider along a level, smooth air track by a light string over a pulley. She adds mass to the glider only, and measures the acceleration with a motion sensor. Here m_tot is the total moving mass, glider plus hanging block (fictional data):

| m_tot (kg) | 0.25 | 0.35 | 0.45 | 0.55 | 0.65 |
|---|---|---|---|---|---|
| a (m/s²) | 1.94 | 1.41 | 1.08 | 0.90 | 0.75 |

(a) Explain why m_tot must include the hanging block, and why the net force on the system stays the same in every run.
(b) State what to plot against what to get a straight line through the origin, and give the predicted slope.
(c) Use the data to find the slope, with its unit, and compare it with your prediction.
(d) Predict the acceleration when m_tot = 0.85 kg.
(e) Describe one step in the procedure that makes friction negligible, and how to check it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The hanging block moves with the glider and has the same acceleration size, so it is part of the accelerating system. The net external force is the block's weight, 0.050 × 9.8 = 0.49 N. Only the glider's mass is changed, so this force stays the same.

**(b)** Plot **a (vertical) against 1/m_tot (horizontal)**. The law predicts a straight line through the origin with slope ΣF = 0.49 N.

**(c)** 1/m_tot = 4.00, 2.86, 2.22, 1.82, 1.54 kg⁻¹. A best-fit line through the origin gives slope ≈ **0.49 N** (each a × m_tot is between 0.48 and 0.50 N). This matches the prediction, supporting a ∝ 1/m.

**(d)** a = 0.49 ÷ 0.85 = **0.58 m/s²**.

**(e)** Level the track: with the air on and no string, a gently nudged glider should coast at constant speed both ways (equal times between two light gates). Adjust the track's feet until it does.

| Point | What earns it |
|---|---|
| 1 | (a) Hanging block is part of the accelerating system, and its weight (0.49 N) is the unchanged net force |
| 1 | (b) a against 1/m_tot, with slope identified as the net force |
| 1 | (c) Slope ≈ 0.49 N with unit, compared with mg |
| 1 | (d) 0.58 m/s² (carry forward the slope from (c)) |
| 1 | (e) A specific levelling or friction check, with how to tell it has worked |</details>

## Question 7 (explanation · stretch)

Take **+x to the right**. Two skaters stand at rest on smooth ice: skater A (60 kg) on the left and skater B (45 kg) on the right. They push each other apart with a constant force of size 90 N for 0.50 s.

A student claims: "During the push, each skater has a 90 N force on them, so the two-skater system speeds up."

(a) Find each skater's acceleration and velocity at the end of the push.
(b) Starting from x_cm = (m_A x_A + m_B x_B)/(m_A + m_B), find the velocity of the system's center of mass at the end of the push.
(c) Evaluate the student's claim using Newton's second law for the system.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Skater A: a_x = −90 ÷ 60 = −1.5 m/s², so v_A = −1.5 × 0.50 = **−0.75 m/s**. Skater B: a_x = +90 ÷ 45 = +2.0 m/s², so v_B = **+1.0 m/s**.

**(b)** Differentiate: v_cm = (m_A v_A + m_B v_B)/(m_A + m_B) = (60 × (−0.75) + 45 × 1.0) ÷ 105 = (−45 + 45) ÷ 105 = **0**.

**(c)** The claim is **wrong** about the system. The two 90 N forces are internal to the two-skater system: they are a third-law pair, equal in size and opposite in direction, so they add to zero. The external forces (weights and normal forces) are vertical and balance. So ΣF_ext = 0, a_cm = 0, and the center of mass stays at rest, as (b) shows. Each skater does speed up, because for a one-skater system the push is external.

| Point | What earns it |
|---|---|
| 1 | (a) Both accelerations with correct signs from a = F/m |
| 1 | (a) Both velocities, −0.75 m/s and +1.0 m/s |
| 1 | (b) v_cm = 0 from the differentiated center-of-mass expression |
| 1 | (c) Identifies the pushes as internal forces that cancel, so ΣF_ext = 0 and the center of mass does not accelerate, while each skater alone does |

</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "The law and its parts" and Worked example 1 of the [study guide](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/). Forces add as vectors.
- **Q2 or Q7 wrong:** revisit "When does velocity change?" and Worked example 2. Name the system, then sort forces into internal and external.
- **Q4 incomplete:** go through "Forces that change with time" and Worked example 3. Include v_x0, and remember a maximum velocity means zero net force.
- **Q5 or Q6 incomplete:** check you divided by the mass of the system you chose, and look again at "Testing the law in the lab".

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-checklist/).
