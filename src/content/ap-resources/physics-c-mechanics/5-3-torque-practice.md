---
resourceId: "mb-ap-physcm-5.3-practice"
title: "Torque: Practice Questions (Physics C: Mechanics 5.3)"
description: "Seven original Marlbridge practice questions on torque: rF sin θ, lever arms, the cross product and right-hand rule, force diagrams, net torque about an axis, and sensor data."
course: "physics-c-mechanics"
unit: 5
topics: ["5.3"]
resourceType: "practice-questions"
prerequisites:
  - "Vector components, magnitudes and the angle between two vectors"
prerequisiteResources: ["mb-ap-physcm-5.3-study-guide"]
learningObjectives:
  - "Calculate the size of a torque with rF sin θ, rF⊥ or r⊥F"
  - "Find the direction of r × F with the right-hand rule and with unit-vector components"
  - "Draw a force diagram and add signed torques about a stated axis"
  - "Linearise experimental data to test a claim about torque"
  - "Show when the net torque does and does not depend on the choice of axis"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-5.3-study-guide", "mb-ap-physcm-5.3-revision-notes", "mb-ap-physcm-5.3-checklist"]
next: "mb-ap-physcm-5.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Counterclockwise (out of the page) is positive."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Unless a question says otherwise, +x is to the right, +y is up the page, +z is out of the page, and counterclockwise torques are positive. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A valve lever is 0.50 m long, measured from the valve spindle (the axis) to the end. A worker pulls on the end with a force of 40 N. The angle between the lever and the force is 30°. What is the size of the torque about the spindle?

- (A) 5.0 N·m
- (B) 10 N·m
- (C) 17 N·m
- (D) 20 N·m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** τ = rF sin θ = 0.50 × 40 × sin 30° = 0.50 × 40 × 0.50 = 10 N·m.

- (A) applies sin 30° twice: it multiplies the lever arm r sin θ by the perpendicular component F sin θ. Use one or the other, not both.
- (C) uses cos 30°. That is the component along the lever, which gives no torque.
- (D) is rF, which is only correct when the force is perpendicular to the lever.
</details>

## Question 2 (multiple choice · core)

A small object is at r = (0.40 m)î from an axle along the z-axis. A force F = −(15 N)ĵ acts on it. Which way does the torque τ = r × F about the axle point?

- (A) +z, out of the page
- (B) −z, into the page
- (C) +x, along r
- (D) −y, along F

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** τ = (0.40î) × (−15ĵ) = −6.0 (î × ĵ) = −6.0k̂ N·m. With the right-hand rule: fingers along +x, curl towards −y, and the thumb points into the page. The object tends to turn clockwise.

- (A) is F × r. Reversing the order reverses the direction.
- (C) and (D) give the direction of one of the two vectors. A cross product is perpendicular to both r and F, so it cannot lie along either of them.
</details>

## Question 3 (multiple choice · core)

A capstan wheel of radius 0.20 m turns about its central axle. Four forces, all in the plane of the wheel, are tried one at a time. Which force exerts the **largest** torque about the axle?

- (A) 50 N at the rim, tangent to the rim
- (B) 110 N at the rim, at 30° to the radius at that point
- (C) 150 N at the rim, directed straight towards the axle
- (D) 90 N at a point 0.10 m from the axle, perpendicular to the radius there

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** τ = 0.20 × 110 × sin 30° = 11 N·m. The others: (A) 0.20 × 50 = 10 N·m; (C) 0, because the line of action passes through the axle; (D) 0.10 × 90 = 9.0 N·m.

- (A) has the best direction, but a smaller force. Angle and size both count.
- (C) has the largest force and acts at the largest distance, but a force aimed at the axis has zero lever arm.
- (D) acts at half the distance.
</details>

## Question 4 (calculation · core)

A bracket turns about an axle along the z-axis through the origin. A force F = (−12î + 5.0ĵ) N acts at r = (0.60î + 0.80ĵ) m.

(a) Find τ = r × F and state whether it tends to turn the bracket clockwise or counterclockwise.
(b) Find the angle between r and F, and use it to check your answer to (a).
(c) Find the lever arm of F about the axle.
(d) Find the component of F perpendicular to r.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** τ_z = xF_y − yF_x = (0.60)(5.0) − (0.80)(−12) = 3.0 + 9.6 = 12.6 N·m. So **τ = +13k̂ N·m** (12.6 N·m), out of the page: **counterclockwise**.

**(b)** |r| = √(0.60² + 0.80²) = 1.0 m; |F| = √(12² + 5.0²) = 13 N. r · F = (0.60)(−12) + (0.80)(5.0) = −3.2 N·m, so cos θ = −3.2 ÷ 13 = −0.246 and **θ = 104°**. Check: rF sin θ = 1.0 × 13 × sin 104.2° = 1.0 × 13 × 0.969 = 12.6 N·m. ✓

**(c)** r⊥ = τ ÷ F = 12.6 ÷ 13 = **0.97 m**.

**(d)** F⊥ = τ ÷ r = 12.6 ÷ 1.0 = **13 N** (12.6 N), nearly all of F, because θ is close to 90°.

| Point | What earns it |
|---|---|
| 1 | (a) Correct τ_z = 12.6 N·m with unit and the counterclockwise (+z) sense |
| 1 | (b) Angle between r and F found correctly (about 104°, or its supplement 76° with the sense from (a)) |
| 1 | (b) rF sin θ evaluated and compared with (a) |
| 1 | (c) and (d) Lever arm 0.97 m and F⊥ = 12.6 N (both needed) |

**Alternative method.** For (a), rF sin θ with the right-hand rule earns the point.
</details>

## Question 5 (constructed response · core)

A uniform square plate has side 0.60 m and mass 2.0 kg. It hangs in a vertical plane from a horizontal axle through its **top-left corner O**, perpendicular to the plate. Put the origin at O, with +x to the right and +y up, so the plate fills 0 ≤ x ≤ 0.60 m and −0.60 m ≤ y ≤ 0. Three other forces act:

- its weight;
- a horizontal pull of 15 N in +x at the **bottom-left** corner;
- a vertical pull of 12 N in +y at the **top-right** corner.

(a) Draw a force diagram of the plate, showing where every force acts, including the axle force.
(b) Find the torque of each force about O, with its sign.
(c) Find the net torque about O and state which way the plate tends to turn.
(d) Explain why you did not need the axle force in (b) and (c).
(e) The 15 N pull is moved to the **bottom-right** corner, still in +x. Without a new calculation, say how its torque about O changes, and explain why.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A square outline with O marked at the top-left corner. Arrows, with lengths roughly in proportion to the forces: weight W = 2.0 × 9.8 = 19.6 N straight down from the centre (0.30 m, −0.30 m); 15 N to the right from the bottom-left corner; 12 N upwards from the top-right corner; the axle force drawn at O (direction unknown, so any labelled arrow at O is fine).

**(b)** Use τ_z = xF_y − yF_x:

- Weight: (0.30)(−19.6) − (−0.30)(0) = **−5.9 N·m** (clockwise).
- 15 N pull: (0)(0) − (−0.60)(15) = **+9.0 N·m** (counterclockwise).
- 12 N pull: (0.60)(12) − (0)(0) = **+7.2 N·m** (counterclockwise).
- Axle force: r = 0, so **0**.

**(c)** τ_net = −5.88 + 9.0 + 7.2 = **+10 N·m** (10.3 N·m): counterclockwise.

**(d)** The axle force acts at O itself, so r = 0 and r × F = 0 whatever its size and direction.

**(e)** **No change.** Moving a force along its own line of action does not change its lever arm. The line y = −0.60 m passes 0.60 m below O at both corners, so the lever arm is still 0.60 m and the torque is still +9.0 N·m.

| Point | What earns it |
|---|---|
| 1 | (a) Every force starts at its correct point of application, including weight at the centre, with arrow lengths roughly in proportion (weight longest) |
| 1 | (b) Weight torque −5.9 N·m with sign (lever arm 0.30 m) |
| 1 | (b) Both pull torques +9.0 N·m and +7.2 N·m with signs |
| 1 | (c) Net +10 N·m, counterclockwise (carry forward errors from (b)) |
| 1 | (d) and (e) Axle force has r = 0; moved force keeps the same line of action, so the same lever arm |
</details>

## Question 6 (constructed response · stretch)

A stiff valve wheel starts to turn only when the torque on it reaches a fixed value τ₀. A student hooks a spring scale onto a handle 0.25 m from the axis and pulls at different angles θ between the handle and the scale. She records the reading F just as the valve starts to turn:

| θ (°) | 30 | 45 | 60 | 75 | 90 |
|---|---|---|---|---|---|
| F (N) | 47.6 | 34.2 | 27.5 | 25.0 | 24.1 |

(a) Explain in terms of torque why the reading is largest at θ = 30°.
(b) Show that the claim predicts F = τ₀/(r sin θ). State what to plot against what to get a straight line through the origin, and what the slope means.
(c) Use the data to find τ₀.
(d) Do the data support the claim that the threshold torque is the same at every angle? Justify your answer with evidence from the data.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Only the perpendicular component F sin θ turns the wheel. At 30° that component is only half of F, so the total pull must be larger to give the same torque.

**(b)** At the threshold, τ₀ = rF sin θ, so F = τ₀/(r sin θ). Plot **F (N) on the vertical axis against 1/sin θ** on the horizontal axis. The slope is **τ₀/r**.

**(c)** Values of 1/sin θ: 2.00, 1.41, 1.15, 1.04, 1.00. A best-fit line through the origin has slope ≈ 24.0 N, so τ₀ = 24.0 × 0.25 = **6.0 N·m**. (A fit with a free intercept gives slope 23.6 N and intercept 0.5 N, so τ₀ ≈ 5.9 N·m; either is fine.)

**(d)** **Yes.** The product rF sin θ for each row is 5.95, 6.05, 5.95, 6.04 and 6.03 N·m: all within about 1% of 6.0 N·m, with no trend with angle. The graph is a straight line, and its intercept (0.5 N) is small compared with the readings of 24–48 N.

| Point | What earns it |
|---|---|
| 1 | (a) Only F sin θ produces torque, so a smaller fraction of F is useful at 30° |
| 1 | (b) F = τ₀/(r sin θ) from τ = rF sin θ |
| 1 | (b) F against 1/sin θ, slope τ₀/r |
| 1 | (c) τ₀ ≈ 6.0 N·m (accept 5.8–6.2 N·m) from the slope |
| 1 | (d) Supports the claim, quoting evidence: constant rF sin θ, or a straight line with a near-zero intercept |

**Alternative method.** Plotting F sin θ against θ and showing a horizontal line at 24 N earns the (b) and (c) points if τ₀ = 24 × 0.25 is found.
</details>

## Question 7 (explanation · stretch)

A student says: "The net torque on an object is the same whichever axis you choose."

A tap wrench is a bar with a handle at each end. You push on the two handles with forces of 18 N in opposite directions, both perpendicular to the bar. The handles are 0.50 m apart. Put the bar along the x-axis, with one handle at x = a and the other at x = a + 0.50 m, where a depends on where you put the axis. The force at x = a is +18ĵ N; the force at x = a + 0.50 m is −18ĵ N.

(a) Find the net torque about the origin in terms of a, and comment on the result.
(b) Use Worked example 3 of the study guide, or one force on its own, to show that the student's claim is false in general.
(c) Using τ = r × F, show that shifting the axis changes the net torque by an amount that depends on the net force. State when the student's claim is true.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** τ_net = (a)(18) + (a + 0.50)(−18) = 18a − 18a − 9.0 = **−9.0 N·m**. The a cancels: the net torque is 9.0 N·m clockwise **about every axis** along the bar. A pair like this, equal and opposite forces on different lines of action, is called a **couple**.

**(b)** One force of +18ĵ N at x = 0.50 m gives +9.0 N·m about the origin and zero about x = 0.50 m. In Worked example 3, the net torque was 0 about the left end and −30 N·m about the midpoint. So the claim fails in general.

**(c)** Move the axis to a point at position **s**. Each r becomes r − s, so the new net torque is Σ(r_i − s) × F_i = Σ(r_i × F_i) − s × (ΣF_i). The change is −s × F_net. If **F_net = 0**, the change is zero for every s, so the net torque is the same about every axis. The claim is true **only when the net force is zero**.

| Point | What earns it |
|---|---|
| 1 | (a) τ_net = −9.0 N·m with a cancelling |
| 1 | (a) States that the result does not depend on the axis position |
| 1 | (b) A valid counterexample with numbers |
| 1 | (c) Shows the change is −s × F_net (or argues it from the a-cancelling) and states the condition F_net = 0 |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Only the perpendicular component turns" and Worked example 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/).
- **Q2 or Q4 wrong:** revisit "Torque as a vector: the cross product" and Worked example 2. Put r first.
- **Q5 incomplete:** go back to "Force diagrams for rigid systems" and the sign rules in Worked example 3.
- **Q6 or Q7 incomplete:** say *why* a graph is straight or *why* the axis matters, as in Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/5-3-torque-checklist/).
