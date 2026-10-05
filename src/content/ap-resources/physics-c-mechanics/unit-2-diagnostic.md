---
resourceId: "mb-ap-physcm-u2-diagnostic"
title: "Force and Translational Dynamics: Unit Diagnostic (Physics C: Mechanics Unit 2)"
description: "A 30-minute check of forces and Newton's laws with calculus: twelve original questions on center of mass, free-body diagrams, gravity, friction, springs, drag and circular motion."
course: "physics-c-mechanics"
unit: 2
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 2.1 to 2.10"
  - "Differentiating and integrating polynomials, and the Unit 1 links between x, v and a"
learningObjectives:
  - "Find out which Unit 2 topics you can already handle and which ones to revisit"
  - "Test center of mass by integration, free-body diagrams and third-law pairs"
  - "Test Newton's first and second laws, including a net force found by differentiating v(t)"
  - "Test the force models for gravity, friction, springs and linear drag"
  - "Test the inward net force in circular motion at the top and bottom of a curve"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry (degrees). We use g = 9.8 m/s²; answers with g = 10 m/s² are equally acceptable"
related: ["mb-ap-physcm-u2-review", "mb-ap-physcm-2.5-study-guide", "mb-ap-physcm-2.7-study-guide", "mb-ap-physcm-2.10-study-guide"]
next: "mb-ap-physcm-u2-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Twelve short questions, one or more for every Unit 2 topic. Each answer links to the guide for that topic."
  - "It finds gaps. It is not a past exam, it is not calibrated and it gives no predicted score."
  - "Work without notes for about 30 minutes, then mark yourself and use the table at the end."
  - "Questions 1 to 10 are multiple choice; Questions 11 and 12 need short written working."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic shows which Unit 2 (Force and Translational Dynamics) topics to revisit: one question per topic, two for Topics 2.5 and 2.10. These are **original Marlbridge practice questions**, not past exam questions. The set is not calibrated against real exam results, so it **does not give a predicted score**. Each wrong answer points to one topic.

**How to sit it.** Allow about 30 minutes, without notes. Use a calculator for arithmetic and trigonometry; do the calculus by hand. Use g = 9.8 m/s² (10 m/s² is equally acceptable). Strings and springs are ideal. In formulas, t is in s and v in m/s.

## Question 1 (multiple choice · 2.1)

Take **+x along a thin rod** from x = 0 to x = L. Its linear mass density is λ(x) = C√x, where C is a positive constant. Where is its center of mass?

- (A) x = L/2
- (B) x = 3L/5
- (C) x = 0.63L
- (D) x = 2L/3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** M = ∫₀ᴸ Cx^(1/2) dx = (2/3)CL^(3/2) and ∫₀ᴸ x · Cx^(1/2) dx = (2/5)CL^(5/2). Dividing gives x_cm = **3L/5**.

- (A) is the uniform-rod answer. Density rising with x moves x_cm past the midpoint.
- (C) is the point with half the mass on each side. The center of mass weights each element by its distance.
- (D) is the answer for λ ∝ x, which is more lopsided than √x.

**If you missed this:** "Center of mass of a continuous object" in the [Topic 2.1 study guide](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-study-guide/).
</details>

## Question 2 (multiple choice · 2.2)

A crate sits on the flat bed of a lorry. The lorry speeds up forward and the crate does not slide. Which list gives every force on the crate's free-body diagram?

- (A) Gravity (Earth on crate), normal force (bed on crate), static friction (bed on crate) forward
- (B) Gravity, normal force, static friction (bed on crate) backward
- (C) Gravity, normal force, a forward push from the lorry's engine
- (D) Gravity, normal force, forward static friction and a backward "force of inertia"

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The crate speeds up forward, so the bed's friction on it points **forward**.

- (B) assumes friction always opposes travel. Here friction drags the crate along.
- (C) The engine does not touch the crate.
- (D) "Inertia" is exerted by nothing, so it fails the "by what, on what?" test.

**If you missed this:** "A method that never misses a force" in the [Topic 2.2 study guide](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-study-guide/).
</details>

## Question 3 (multiple choice · 2.3)

A small ball hangs at rest from a light string tied to a ceiling. Which pair is a Newton's third-law pair?

- (A) Earth on ball, and string on ball
- (B) String on ball, and ball on string
- (C) Earth on ball, and ceiling on string
- (D) String on ball, and string on ceiling

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Swap the names: "string on ball" becomes "ball on string". Same two objects, same type, equal and opposite.

- (A) Both act on the ball and they are different types; they are equal only because the ball is at rest.
- (C) involves three objects.
- (D) Both are exerted **by** the string. A pair swaps who exerts and who receives.

**If you missed this:** "Testing whether two forces form a pair" in the [Topic 2.3 study guide](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-study-guide/).
</details>

## Question 4 (multiple choice · 2.4)

Take **+x east and +y north**. A puck slides east at a constant 2.0 m/s on a smooth table under three horizontal forces, one of which is 3.0 N north. At t = 0 that force is removed. What happens next?

- (A) The puck slows down and stops.
- (B) It keeps 2.0 m/s east, because moving needs no force.
- (C) It keeps v_x = 2.0 m/s and gains a southward velocity, so its path curves south.
- (D) It turns at once and moves due south.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The two remaining forces add to 3.0 N **south**. East–west forces still balance, so v_x stays 2.0 m/s while v_y grows southward.

- (A) The new net force is perpendicular to the velocity, not against it.
- (B) is true only while ΣF = 0.
- (D) A net force sets the acceleration; the velocity changes gradually.

**If you missed this:** "Balanced in one direction, unbalanced in another" in the [Topic 2.4 study guide](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-study-guide/).
</details>

## Question 5 (multiple choice · 2.5)

Three blocks in a row on a smooth floor have masses 1.0 kg, 2.0 kg and 3.0 kg, from left to right. A hand pushes the 1.0 kg block to the right with 18 N. What force does the 2.0 kg block exert on the 3.0 kg block?

- (A) 6.0 N
- (B) 9.0 N
- (C) 15 N
- (D) 18 N

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** All three: a = 18 ÷ 6.0 = 3.0 m/s². The 3.0 kg block alone: F = 3.0 × 3.0 = **9.0 N**.

- (A) uses the middle block's mass.
- (C) is the force between the first two blocks, which accelerates 5.0 kg.
- (D) assumes the push passes unchanged through every block.

**If you missed this:** Worked example 2, "choosing the system", in the [Topic 2.5 study guide](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/).
</details>

## Question 6 (multiple choice · 2.6)

A probe hovers at a height 2R above the surface of a uniform planet of radius R. What is the gravitational field there, as a fraction of the surface value g_s?

- (A) g_s/3
- (B) g_s/4
- (C) g_s/9
- (D) g_s/27

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** r is measured from the **center**: r = 3R, so g = g_s/3² = **g_s/9**.

- (A) uses 1/r instead of 1/r².
- (B) uses the height, 2R, as r.
- (D) cubes the ratio. The r³ belongs to the partial-mass rule inside a uniform sphere.

**If you missed this:** "The gravitational field" in the [Topic 2.6 study guide](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-study-guide/).
</details>

## Question 7 (multiple choice · 2.7)

A 4.0 kg crate rests on a level floor, with μ_s = 0.50. A student pushes it with 24 N directed 30° **below** the horizontal. What is the friction force on the crate?

- (A) 21 N; the crate stays at rest
- (B) 20 N; the crate slides
- (C) 24 N; the crate stays at rest
- (D) 26 N; the crate stays at rest

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** F_N = mg + 24 sin 30° = 51.2 N, so the static limit is 0.50 × 51.2 = 25.6 N. The horizontal push, 24 cos 30° = 20.8 N, is below it. So static friction is just what is needed: **21 N**.

- (B) takes F_N = mg (limit 19.6 N) and wrongly predicts sliding.
- (C) balances the whole push, not its horizontal component.
- (D) is the maximum μ_s F_N, reached only when slipping is about to start.

**If you missed this:** "How to handle static friction in a problem" in the [Topic 2.7 study guide](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/).
</details>

## Question 8 (multiple choice · 2.8)

Ideal springs of 200 N/m and 300 N/m are joined end to end and pulled. The 200 N/m spring stretches 3.0 cm. What is the total stretch?

- (A) 1.2 cm
- (B) 5.0 cm
- (C) 6.0 cm
- (D) 7.5 cm

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The same force acts through both: F = 200 × 0.030 = 6.0 N. The 300 N/m spring stretches 2.0 cm, so the total is **5.0 cm** (check: k_eq = 120 N/m).

- (A) uses the parallel rule, k_eq = 500 N/m.
- (C) gives both springs the same stretch, the parallel condition.
- (D) gives the stiffer spring the larger stretch.

**If you missed this:** "Springs in series (end to end)" in the [Topic 2.8 study guide](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-study-guide/).
</details>

## Question 9 (multiple choice · 2.9)

Take **+y downward**. An object falls from rest with a resistive force F_r = −kv. When its speed is half its terminal speed, what is the size of its acceleration?

- (A) 0
- (B) 0.37g
- (C) g/2
- (D) g

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** a = g − kv/m and kv_T/m = g. At v = v_T/2 the drag is half the weight, so a = **g/2**.

- (A) applies at terminal velocity.
- (B) is g e^(−1), the acceleration at t = τ, when v = 0.63v_T.
- (D) applies only at release, when v = 0.

**If you missed this:** "Terminal velocity" in the [Topic 2.9 study guide](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/).
</details>

## Question 10 (multiple choice · 2.10)

A 1200 kg car drives over the top of a rounded hump of radius 40 m at 12 m/s. What is the normal force on the car at the top?

- (A) 4.3 × 10³ N
- (B) 7.4 × 10³ N
- (C) 1.2 × 10⁴ N
- (D) 1.6 × 10⁴ N

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Take + down, toward the center: mg − N = mv²/r, so N = 1200 × (9.8 − 3.6) = **7.4 × 10³ N**.

- (A) is mv²/r, the inward net force.
- (C) is mg, which leaves no inward net force.
- (D) adds mv²/r to mg, the rule at the bottom of a dip.

**If you missed this:** "Where the inward force comes from" in the [Topic 2.10 study guide](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/).
</details>

## Question 11 (short answer · 2.5)

Take **+x forward**. A 0.80 kg toy car on a straight track has v_x(t) = 1.5t² − 0.25t³ for 0 ≤ t ≤ 6.0 s.

(a) Find the net force F_x(t).
(b) Find the largest forward net force and when it acts.
(c) Find when the net force is zero, and the velocity then.
(d) Comment on the claim "the car is fastest when the net force is largest".

<details>
<summary>Answer and explanation</summary>

**(a)** a_x = 3.0t − 0.75t², so F_x = **2.4t − 0.60t²** (N).

**(b)** dF_x/dt = 2.4 − 1.2t = 0 at **t = 2.0 s**: F_x = **2.4 N**, while v_x is only 4.0 m/s.

**(c)** F_x = 0 at **t = 4.0 s**, where v_x = **8.0 m/s**, its greatest value.

**(d)** Wrong. The largest force gives the largest **acceleration**. Velocity rises while F_x > 0 and peaks when F_x = 0; afterwards the car slows, stopping at 6.0 s.

**If you missed this:** "Forces that change with time" in the [Topic 2.5 study guide](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/).
</details>

## Question 12 (short answer · 2.10)

A 0.20 kg ball on a light 0.50 m string is swung in a vertical circle. Its speed is 4.0 m/s at the bottom and 2.6 m/s at the top.

(a) Find the tension at the bottom.
(b) Find the tension at the top.
(c) Find the least speed at the top for the string to stay taut.

<details>
<summary>Answer and explanation</summary>

**(a)** The center is above the ball. T − mg = mv²/r, so T = 0.20 × (9.8 + 32) = **8.4 N**.

**(b)** The center is below; both forces point down. T + mg = mv²/r, so T = 0.20 × (13.5 − 9.8) = **0.74 N**.

**(c)** The string can only pull, so T ≥ 0. With T = 0: v_min = √(gr) = **2.2 m/s**.

**If you missed this:** "Vertical loops: the minimum speed at the top" in the [Topic 2.10 study guide](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/).
</details>

## Your next step

Count a short answer as missed if any part went wrong.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 2.1 Center of mass | 1 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-study-guide/) |
| 2.2 Free-body diagrams | 2 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-study-guide/) |
| 2.3 Third law | 3 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-study-guide/) |
| 2.4 First law | 4 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-study-guide/) |
| 2.5 Second law | 5, 11 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/) |
| 2.6 Gravity | 6 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-study-guide/) |
| 2.7 Friction | 7 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/) |
| 2.8 Springs | 8 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-study-guide/) |
| 2.9 Resistive forces | 9 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/) |
| 2.10 Circular motion | 10, 12 | [Study guide](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/) |

## How to use your result

- **Read every explanation.** A right answer for a wrong reason is still a gap.
- **Missed one question in a topic?** Read the named section, then try that topic's practice set.
- **Missed two, or most of a short answer?** Work through the whole study guide, then its practice set and checklist.
- **Missed several topics?** Start with 2.2 and 2.5: a complete free-body diagram and ΣF = ma, one axis at a time, feed everything else.
- **All right?** Go to the [mixed unit review](/advanced-course-resources/physics-c-mechanics/unit-2-review/).

Your result guides what to study next. It does not predict an exam score.
