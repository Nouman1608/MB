---
resourceId: "mb-ap-physcm-5.2-practice"
title: "Connecting Linear and Rotational Motion: Practice Questions (Physics C: Mechanics 5.2)"
description: "Seven original Marlbridge calculus-based practice questions on s = rθ, v = rω, a_T = rα, centripetal acceleration, strings that unwind without slipping, graphs and derivations."
course: "physics-c-mechanics"
unit: 5
topics: ["5.2"]
resourceType: "practice-questions"
prerequisites:
  - "Rotational kinematics with ω = dθ/dt and α = dω/dt (Topic 5.1)"
  - "Centripetal acceleration (Topic 2.10)"
prerequisiteResources: ["mb-ap-physcm-5.2-study-guide"]
learningObjectives:
  - "Compare the linear motion of points at different distances from the axis of one rigid system"
  - "Use s = rθ, v = rω and a_T = rα with angles in radians"
  - "Predict how a_T and a_c change as a system spins up"
  - "Link a non-slipping cord to the rotation of a drum, including with ω(t)"
  - "Sketch linear-motion graphs for points on a rotating system and derive an expression for the total acceleration"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic and square roots. Angles in radians. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-5.2-study-guide", "mb-ap-physcm-5.2-revision-notes", "mb-ap-physcm-5.2-checklist"]
next: "mb-ap-physcm-5.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "All points of a rigid system share ω and α; linear quantities scale with r."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Angles are in rad, ω in rad/s, α in rad/s², distances in m and t in s, so each numerical coefficient carries whatever unit makes the term correct. Strings and belts do not slip or stretch. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A rotating advertising sign turns about a fixed vertical axis at a steady rate. Bolt A is 0.50 m from the axis and bolt B is 1.5 m from the axis. Which statement is correct?

- (A) Both bolts have the same angular velocity, and B's speed is three times A's.
- (B) B has three times the angular velocity of A.
- (C) Both bolts have the same speed, because they complete each turn in the same time.
- (D) B has one-third of A's centripetal acceleration, because a_c = v²/r.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The sign is rigid, so both bolts turn through the same angle in the same time: same ω. Then v = rω, so B's speed is 1.5 ÷ 0.50 = 3 times A's.

- (B) gives outer points a larger ω. Angular velocity is shared by every point of a rigid system.
- (C) confuses equal periods with equal speeds. B travels a circle three times as long in the same time.
- (D) uses a_c = v²/r as if v were the same for both. With v = rω, a_c = ω²r, so B has **three times** A's centripetal acceleration.
</details>

## Question 2 (multiple choice · core)

A point on a rigid wheel is 0.30 m from the axis. The wheel turns through 120°. How far does the point travel along its arc?

- (A) 0.10 m
- (B) 0.63 m
- (C) 1.3 m
- (D) 36 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Convert: 120° = 120 × π/180 ≈ 2.09 rad. Then s = rθ = 0.30 × 2.09 ≈ 0.63 m.

- (A) multiplies r by the fraction of a turn (1/3) and forgets the 2π: a full turn is 2πr, not r.
- (C) uses the diameter, 0.60 m, instead of the radius.
- (D) puts θ = 120 (degrees) straight into s = rθ. The formula only works with radians.
</details>

## Question 3 (multiple choice · core)

A flywheel starts from rest and speeds up with constant angular acceleration. Point P is on its rim. Compared with an earlier instant, P now has twice the angular velocity. How have P's tangential acceleration a_T and centripetal acceleration a_c changed?

- (A) a_T is unchanged; a_c is four times as large.
- (B) a_T and a_c are both twice as large.
- (C) a_T is unchanged; a_c is twice as large.
- (D) a_T is twice as large; a_c is four times as large.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** a_T = rα, and both r and α are constant, so a_T does not change. a_c = ω²r, so doubling ω multiplies a_c by 2² = 4.

- (B) assumes both components follow ω. a_T depends on α, not ω.
- (C) treats a_c as proportional to ω instead of ω².
- (D) links a_T to ω. A larger angular velocity does not mean a larger angular acceleration.
</details>

## Question 4 (calculation · core)

Take **counterclockwise as positive** for the drum. A stage curtain is pulled by a cord wound on a motor drum of radius 0.050 m. From rest, the drum's angular velocity is ω = 3.0t for 0 ≤ t ≤ 4.0 s. Find (a) the cord's speed and acceleration at t = 4.0 s, (b) how far the curtain moves in the 4.0 s, and (c) the number of turns the drum makes.

<details>
<summary>Worked solution</summary>

1. **(a)** No slipping: v = Rω = 0.050 × 3.0t = 0.15t. At 4.0 s, v = **0.60 m/s**. The cord's acceleration is dv/dt = Rα = 0.050 × 3.0 = **0.15 m/s²** (constant).
2. **(b)** Distance = ∫₀⁴ 0.15t dt = 0.075 × 16 = **1.2 m**.
3. **(c)** θ = ∫₀⁴ 3.0t dt = 1.5 × 16 = 24 rad, which is 24 ÷ 2π ≈ **3.8 turns**. Check: s = Rθ = 0.050 × 24 = 1.2 m. ✓

Suggested mark points (4): 1 for v = Rω; 1 for a = Rα (or dv/dt); 1 for the distance by integration or s = Rθ; 1 for the number of turns.

Common error: giving the cord a centripetal acceleration ω²R. The straight cord moves in a line, not a circle.
</details>

## Question 5 (graphs · core)

Take **counterclockwise as positive**. A disc sander starts from rest. Its angular velocity rises steadily to 40 rad/s in 2.0 s, stays at 40 rad/s for 3.0 s, then falls steadily to zero in 1.0 s. Point P is 0.040 m from the axis and point Q, on the rim, is 0.080 m from the axis.

(a) On one set of axes, sketch speed v against t for P and Q, with values.
(b) On one set of axes, sketch tangential acceleration a_T against t for P and Q, with values.
(c) Sketch a_c against t for Q, describing the shape in each stage, and give its maximum.
(d) Explain why Q's graphs in (a) and (b) are exactly twice P's.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Both graphs have the same shape as ω–t: a straight rise, a flat section, a straight fall. P rises to 0.040 × 40 = **1.6 m/s**; Q rises to **3.2 m/s**. Both reach their peaks at 2.0 s and return to zero at 6.0 s.

**(b)** α is +20 rad/s², then 0, then −40 rad/s². For P: a_T = **+0.80 m/s²**, 0, **−1.6 m/s²**. For Q: **+1.6 m/s²**, 0, **−3.2 m/s²**. Each graph is three horizontal segments.

**(c)** a_c = ω²r. In stage 1, ω = 20t, so a_c = 400t² × 0.080: a curve rising from 0, getting steeper (a parabola). In stage 2 it is constant at 40² × 0.080 = **128 m/s²**. In stage 3 it falls along a curve to zero, flattening as it reaches zero (ω² falls fastest at the start of the stage).

**(d)** Q and P are on the same rigid disc, so they have the same ω and α at every instant. v = rω and a_T = rα, and r_Q = 2r_P, so each value for Q is twice P's.

| Point | What earns it |
|---|---|
| 1 | (a) v–t shapes match ω–t, peaks 1.6 and 3.2 m/s at the right times |
| 1 | (b) a_T as three horizontal segments with the four non-zero values correct |
| 1 | (c) curved rise and fall (∝ ω²), with the flat section |
| 1 | (c) maximum a_c = 128 m/s² (about 130 m/s²) |
| 1 | (d) same ω and α for both points, and linear quantities ∝ r |
</details>

## Question 6 (derivation · stretch)

A wheel of radius r starts from rest and turns with constant angular acceleration α about a fixed axis. Point P is on its rim.

(a) Show that, after the wheel has turned through angle θ, P's centripetal acceleration is a_c = 2αθr.
(b) Hence derive an expression for the size of P's total acceleration in terms of α, r and θ.
(c) Show that the angle between P's total acceleration and the tangent depends only on θ, and find the value of θ at which a_T = a_c.
(d) For r = 0.20 m and α = 5.0 rad/s², find the size of P's acceleration after one complete revolution.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** From rest at constant α, ω² = 2αθ. Then a_c = ω²r = **2αθr**.

**(b)** a_T = rα. The components are perpendicular, so |a| = √((αr)² + (2αθr)²) = **αr√(1 + 4θ²)**.

**(c)** The angle φ from the tangent satisfies tan φ = a_c/a_T = 2αθr ÷ αr = **2θ**. The α and r cancel, so the direction depends only on how far the wheel has turned. a_T = a_c when 2θ = 1, so **θ = 0.50 rad** (about 29°).

**(d)** One revolution: θ = 2π rad. |a| = 5.0 × 0.20 × √(1 + 4(2π)²) ≈ 1.0 × 12.6 ≈ **13 m/s²**, pointing about 85° from the tangent (almost straight toward the axis).

| Point | What earns it |
|---|---|
| 1 | (a) Uses ω² = 2αθ (from rest, constant α) with a_c = ω²r |
| 1 | (b) a_T = rα and combines perpendicular components correctly |
| 1 | (c) tan φ = 2θ with α and r shown to cancel |
| 1 | (c) θ = 0.50 rad |
| 1 | (d) 13 m/s² with θ = 2π rad (carry forward from (b)) |

**Alternative method for (a).** Write ω = αt and θ = ½αt², so ω² = α²t² = 2αθ. This earns the point.
</details>

## Question 7 (explanation · stretch)

A test rig has a long horizontal arm that rotates about a vertical axis at a constant 1.5 rad/s. Seat 1 is 3.0 m from the axis; seat 2 is 1.2 m from the axis.

A student says: "The arm turns at a constant rate, so the riders have no acceleration. Anyway, both seats have the same ω, so they move in exactly the same way."

(a) Evaluate both parts of the claim, with calculations for each seat.
(b) Later the operator speeds the arm up with α = 0.25 rad/s². Find the size of seat 1's acceleration at the moment ω = 1.5 rad/s.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Both parts are **wrong**.

- Constant ω means α = 0, so a_T = 0. But each seat moves in a circle, so it has a centripetal acceleration a_c = ω²r toward the axis. Seat 1: a_c = 1.5² × 3.0 ≈ **6.8 m/s²**. Seat 2: 1.5² × 1.2 ≈ **2.7 m/s²**.
- The seats share ω, but their linear motion differs. Seat 1: v = 1.5 × 3.0 = **4.5 m/s**; seat 2: v = 1.5 × 1.2 = **1.8 m/s**. Every linear quantity is 3.0 ÷ 1.2 = 2.5 times larger for seat 1.

**(b)** a_T = rα = 3.0 × 0.25 = 0.75 m/s²; a_c = 6.75 m/s² as before. |a| = √(0.75² + 6.75²) ≈ **6.8 m/s²**. The tangential part adds very little, because the components are at right angles and a_c is much larger.

| Point | What earns it |
|---|---|
| 1 | States that constant ω gives a_T = 0 but not zero acceleration |
| 1 | a_c values 6.8 and 2.7 m/s² from ω²r |
| 1 | Same ω but different v (4.5 and 1.8 m/s), so the seats do not move the same way |
| 1 | (b) a_T = 0.75 m/s² from rα |
| 1 | (b) Combines perpendicular components to get about 6.8 m/s² |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Comparing points on one rigid system" and "The other component: centripetal acceleration" in the [study guide](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/).
- **Q2 wrong:** revisit "Arc length and the radian". Convert degrees to radians first.
- **Q4 wrong:** study "Strings, hoses and belts that do not slip" and Worked example 2.
- **Q5 or Q6 incomplete:** work through Worked example 1 and Figure 1, then "Graphs against time".
- **Q7 incomplete:** your reasoning must name both components and say why constant ω still means acceleration.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-checklist/).
