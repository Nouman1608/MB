---
resourceId: "mb-ap-phys1-5.3-practice"
title: "Torque: Practice Questions (Physics 1 5.3)"
description: "Seven original Marlbridge practice questions on torque, lever arms, angles, force diagrams and factor-of-change reasoning, with worked solutions and suggested mark points."
course: "physics-1"
unit: 5
topics: ["5.3"]
resourceType: "practice-questions"
prerequisites:
  - "Resolving a force into components with sine and cosine"
  - "Finding the centre of mass of a uniform object"
prerequisiteResources: ["mb-ap-phys1-5.3-study-guide"]
learningObjectives:
  - "Calculate torques with τ = rF sin θ, τ = rF⊥ and τ = r⊥F"
  - "Identify the lever arm of a force from its line of action"
  - "Draw a force diagram for a rigid object and identify the torque each force exerts about a stated axis"
  - "Derive a symbolic expression for a torque and use it to predict changes"
  - "Evaluate a claim about which push turns an object more"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only; calculator in degrees. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-5.3-study-guide", "mb-ap-phys1-5.3-revision-notes", "mb-ap-phys1-5.3-checklist"]
next: "mb-ap-phys1-5.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Measure every r and every lever arm from it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears and keep your calculator in degrees. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end.

## Question 1 (multiple choice · foundation)

A door is 0.90 m wide. The axis of rotation is the line of the hinges. Four people push on the door in turn, each in the plane at right angles to the hinge line. Which push exerts the **largest** torque about the hinges?

- (A) 40 N at the outer edge, at 30° to the door
- (B) 30 N at the outer edge, at right angles to the door
- (C) 50 N at the middle of the door, at right angles to the door
- (D) 60 N at the outer edge, directed along the door towards the hinges

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Use τ = rF sin θ for each, where θ is the angle between the door (the direction of r) and the force.

- (B): 0.90 m × 30 N × sin 90° = **27 N·m**.
- (A): 0.90 m × 40 N × sin 30° = 18 N·m. A bigger force, but only half of it is perpendicular to the door.
- (C): 0.45 m × 50 N × sin 90° = 22.5 N·m. The largest perpendicular force, but at half the distance.
- (D): θ = 180° between r (outward along the door) and F (inward along the door), so sin θ = 0 and τ = 0. The line of action passes through the hinge. Choosing (D) means looking only at the size of the force.
</details>

## Question 2 (multiple choice · core)

A student applies a force at right angles to a spanner, at distance r from the bolt. She then moves her hand to a point 2r from the bolt and pulls with a force of the same size, but now at 30° to the spanner. By what factor does the torque on the bolt change?

- (A) It becomes 4 times as large.
- (B) It becomes 2 times as large.
- (C) It stays the same.
- (D) It becomes half as large.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** τ_new / τ_old = (2r × F × sin 30°) ÷ (r × F × sin 90°) = 2 × 0.50 ÷ 1 = **1**. Doubling the distance is exactly cancelled by halving the perpendicular component.

- (A) doubles r and then doubles again, perhaps by treating torque as depending on r².
- (B) doubles r but ignores the change of angle.
- (D) halves for the angle but forgets that r doubled.
</details>

## Question 3 (multiple choice · core)

A 50 N force acts at point P on a flat plate that can turn about a fixed axis. P is 0.40 m from the axis. The force's line of action, extended in both directions, passes 0.25 m from the axis at its closest. What is the size of the torque about the axis?

- (A) 20 N·m
- (B) 13 N·m
- (C) 7.5 N·m
- (D) 0 N·m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The lever arm is the perpendicular distance from the axis to the line of action: r⊥ = 0.25 m. So τ = r⊥F = 0.25 m × 50 N = 12.5 N·m ≈ **13 N·m**.

Check: sin θ = r⊥ / r = 0.25 ÷ 0.40 = 0.625, so θ ≈ 39°, and rF sin θ = 0.40 × 50 × 0.625 = 12.5 N·m.

- (A) uses r = 0.40 m as if the force were perpendicular to r.
- (C) multiplies 50 N by the difference in distances (0.40 − 0.25 = 0.15 m). That difference has no physical meaning here.
- (D) assumes a force that is not perpendicular to r gives no torque. Only a force whose line of action passes *through* the axis does that.
</details>

## Question 4 (calculation · core)

Take the axle of a bicycle's pedal crank as the axis. The crank arm is 0.17 m long, from the axle to the pedal. A rider pushes **straight down** on the pedal with a force of 300 N.

(a) Calculate the torque when the crank arm is horizontal.
(b) Calculate the torque when the crank arm points 45° below the horizontal (forwards). Also state the lever arm.
(c) What is the torque when the crank arm points straight down? Explain in terms of the line of action.

<details>
<summary>Worked solution</summary>

**(a)** r is horizontal and F is vertical, so θ = 90°. τ = 0.17 m × 300 N = **51 N·m**.

**(b)** The angle between r (45° below horizontal) and F (straight down) is 45°. τ = 0.17 m × 300 N × sin 45° = **36 N·m** (36.1 N·m). The lever arm is the horizontal distance from the axle to the vertical line of action: r⊥ = 0.17 m × sin 45° = **0.12 m**. Check: 0.120 m × 300 N = 36 N·m.

**(c)** **Zero.** The downward force now acts along the crank arm, and its line of action passes through the axle. The lever arm is zero, so pushing harder does not turn the crank. This is the "dead spot" a rider feels at the bottom of the stroke.

Suggested mark points (4): 1 for (a); 1 for the correct angle (45°) in (b); 1 for 36 N·m and a lever arm of 0.12 m; 1 for (c) with the line of action through the axle as the reason.
</details>

## Question 5 (derivation and prediction · core)

A light rod is pivoted at one end. A string is tied to the rod at distance x from the pivot. The string pulls with tension T, at angle θ to the rod.

(a) Derive an expression for the size of the torque the string exerts about the pivot, in terms of T, x and θ.
(b) At first θ = 90°. A student moves the string to a point 2x from the pivot and keeps T the same. At what angle to the rod must the string now pull so that the torque is unchanged? Give the smaller angle.
(c) Instead, starting again from the original set-up, the student doubles T and halves x, keeping θ = 90°. By what factor does the torque change?

<details>
<summary>Worked solution</summary>

**(a)** r = x from the pivot to the point of application, and θ is the angle between r (along the rod) and the string. So **τ = Tx sin θ**.

**(b)** Original torque: Tx sin 90° = Tx. New torque: T(2x) sin θ′. Setting them equal: 2Tx sin θ′ = Tx, so sin θ′ = 0.50 and **θ′ = 30°** (150° also works).
Numerical check: with T = 12 N and x = 0.30 m, the original torque is 3.6 N·m; at 0.60 m and 30°, 0.60 × 12 × 0.50 = 3.6 N·m.

**(c)** τ_new / τ_old = (2T)(x/2) sin 90° ÷ (Tx sin 90°) = **1**. The torque is unchanged.

Suggested mark points (4): 1 for τ = Tx sin θ with θ identified as the angle between rod and string; 1 for setting the two torques equal in (b); 1 for 30°; 1 for (c) as a ratio with the factors shown.
</details>

## Question 6 (force diagram · stretch)

A uniform plank is 4.0 m long and has a mass of 20 kg. It rests horizontally on two supports: support A is 0.50 m from the left end and support B is 3.0 m from the left end. A painter of mass 60 kg stands on the plank directly above support B. Take the axis through **support A**.

(a) Draw a force diagram for the plank. Show each force at the point where it acts and label what exerts it.
(b) For each force, state its lever arm about A and calculate its torque (with turning sense) where you have enough information.
(c) A student says: "Support A pushes up on the plank, so it must exert a torque about A that helps hold the plank up." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Four forces on the plank, drawn as arrows starting where they act:

- weight of plank (Earth on plank), 196 N, downward at the centre, 2.0 m from the left end;
- push of painter's feet (painter on plank), 588 N, downward at 3.0 m from the left end;
- normal force from support A, upward at 0.50 m from the left end;
- normal force from support B, upward at 3.0 m from the left end.

Note the painter's force on the plank equals his weight in size (he is at rest), but it is a contact force exerted by the painter, not "the painter's weight acting on the plank".

**(b)** All forces are vertical and the plank is horizontal, so each lever arm is just the horizontal distance from A.

| Force | Lever arm about A | Torque about A |
|---|---|---|
| Normal force from A | 0 | 0 |
| Plank's weight, 196 N | 2.0 − 0.50 = 1.5 m | 196 × 1.5 = 294 ≈ **290 N·m, clockwise** |
| Painter's push, 588 N | 3.0 − 0.50 = 2.5 m | 588 × 2.5 = 1470 ≈ **1500 N·m, clockwise** |
| Normal force from B | 2.5 m | counterclockwise; size not yet known |

(Clockwise is as seen with the left end on the left.)

**(c)** The claim is **incorrect** about A. The normal force from A acts at the axis, so its lever arm is zero and its torque about A is zero, however large the force is. It still matters for the forces on the plank (it helps balance the weights in the vertical direction), but it plays no part in the torques *about A*. About a different axis, such as B, it would exert a torque.

| Point | What earns it |
|---|---|
| 1 | All four forces present, each drawn at its correct point and labelled by what exerts it |
| 1 | Lever arms measured from A (1.5 m and 2.5 m) |
| 1 | Torque of the plank's weight, 290 N·m, clockwise |
| 1 | Torque of the painter's push, 1500 N·m, clockwise |
| 1 | States that the force at A has zero lever arm, so zero torque about A |
| 1 | Notes that the torque depends on the axis chosen (it would not be zero about B) |

A student who draws a free-body diagram with all forces from one dot earns no credit for (a): the positions are needed for (b).
</details>

## Question 7 (constructed response · stretch)

A door is 0.80 m wide; the axis is the hinge line. Two students push on it with forces of the same size, 40 N. Student P pushes at the middle of the door, at right angles to it. Student Q pushes at the outer edge, at 30° to the door. Student Q says: "My push turns the door more, because pushing further from the hinge always gives more torque."

(a) Calculate the torque each student exerts.
(b) Evaluate Student Q's claim.
(c) Without changing the size or the point of application of Q's force, state how Q could double his torque, and justify it.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** P: τ = 0.40 m × 40 N × sin 90° = **16 N·m**. Q: τ = 0.80 m × 40 N × sin 30° = **16 N·m**.

**(b)** The claim is **incorrect**. The torques are equal. Torque depends on the perpendicular component of the force as well as the distance. Q is twice as far from the hinge, but only half of his force (40 N × sin 30° = 20 N) is perpendicular to the door. Equivalently, his lever arm is 0.80 m × sin 30° = 0.40 m, the same as P's. "Further out" gives more torque only when the angle stays the same.

**(c)** Push at **90° to the door**. Then sin θ = 1 instead of 0.50, so τ = 0.80 × 40 = 32 N·m, twice as much.

| Point | What earns it |
|---|---|
| 1 | Both torques correct, 16 N·m each |
| 1 | States that the claim is wrong because the torques are equal |
| 1 | Explains using the perpendicular component (20 N) or the lever arm (0.40 m) |
| 1 | Push at 90° to the door, with sin θ doubling from 0.50 to 1 as the reason |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "The torque equation" and Worked example 1 in the [study guide](/advanced-course-resources/physics-1/5-3-torque-study-guide/).
- **Q2 or Q5 wrong:** revisit "Predicting changes: functional dependence" and Worked example 3.
- **Q3 wrong:** go back to the lever-arm method and Figure 1. The lever arm is measured to the line of action.
- **Q6 incomplete:** work through Figure 2 and Worked example 2 on force diagrams.
- **Q7 incomplete:** your reasoning needs both factors, distance *and* angle. See "Common misconceptions".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/5-3-torque-checklist/).
