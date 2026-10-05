---
resourceId: "mb-ap-physcm-1.4-practice"
title: "Reference Frames and Relative Motion: Practice Questions (Physics C: Mechanics 1.4)"
description: "Seven original Marlbridge practice questions on relative velocity in one and two dimensions, frame changes by differentiation, and why inertial observers agree on acceleration."
course: "physics-c-mechanics"
unit: 1
topics: ["1.4"]
resourceType: "practice-questions"
prerequisites:
  - "Vector components, magnitudes and angles"
  - "Differentiating and integrating polynomials"
prerequisiteResources: ["mb-ap-physcm-1.4-study-guide"]
learningObjectives:
  - "Convert velocities between frames with correct subscripts and signs"
  - "Add non-parallel velocities by components to find a speed and a direction"
  - "Find the heading needed to cross a current, and the time it takes"
  - "Differentiate a frame change to compare velocities and accelerations"
  - "Explain which quantities inertial observers agree on and which they do not"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculator for arithmetic, square roots and inverse trigonometry. g = 9.8 m/s² if needed. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-1.4-study-guide", "mb-ap-physcm-1.4-revision-notes", "mb-ap-physcm-1.4-checklist"]
next: "mb-ap-physcm-1.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes and the frame of each measurement."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Notation: v_PA is the velocity of P relative to frame A. In every formula, x is in m, v in m/s, a in m/s² and t in s, so each numerical coefficient carries whatever unit makes the term correct. All frames are inertial unless a question says otherwise. Use g = 9.8 m/s² and ignore air resistance. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x in the direction the walkway moves**. An airport walkway W moves at v_WF = +0.80 m/s relative to the floor F. A passenger P walks **against** the walkway at 1.5 m/s relative to the walkway. What is the passenger's velocity relative to the floor?

- (A) −2.3 m/s
- (B) −0.70 m/s
- (C) +0.70 m/s
- (D) +2.3 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v_PF = v_PW + v_WF = (−1.5) + (+0.80) = −0.70 m/s. The passenger still makes progress against the walkway, at 0.70 m/s.

- (A) subtracts the walkway velocity instead of adding it: −1.5 − 0.80. The chain v_PW + v_WF has a plus sign; the signs live inside the values.
- (C) has the right size but the wrong direction. It treats the walkway as winning, which needs |v_WF| > |v_PW|.
- (D) adds the speeds as if both pointed along +x. The passenger walks against the walkway, so v_PW is negative.
</details>

## Question 2 (multiple choice · core)

Take **+x along a straight track**. In frame A, a cart's position is x_A(t) = 3.0t² + 2.0t. Frame B moves along +x at a constant 5.0 m/s relative to A. At t = 1.0 s, what are the cart's velocity and acceleration measured in frame B?

- (A) v = +3.0 m/s, a = +6.0 m/s²
- (B) v = +13 m/s, a = +6.0 m/s²
- (C) v = +3.0 m/s, a = +1.0 m/s²
- (D) v = +8.0 m/s, a = +6.0 m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In frame A, v_A = 6.0t + 2.0 = 8.0 m/s at 1.0 s, and a_A = 6.0 m/s². Then v_B = v_A − 5.0 = +3.0 m/s. Frame B is inertial (constant velocity), so a_B = a_A = +6.0 m/s².

- (B) adds the frame's velocity instead of subtracting it. An observer moving with the cart's direction sees the cart move *more slowly*.
- (C) also subtracts 5.0 from the acceleration. The derivative of the constant 5.0 m/s is zero, so the acceleration does not change.
- (D) forgets to convert the velocity at all. That is the cart's velocity in frame A.
</details>

## Question 3 (multiple choice · core)

Take **+x east and +y up**, relative to the ground. Rain falls straight down at 6.0 m/s. A cyclist rides east at a constant 4.5 m/s. Which describes the velocity of the rain relative to the cyclist?

- (A) 7.5 m/s, directed downward and toward the west, at 37° from the vertical
- (B) 7.5 m/s, directed downward and toward the east, at 37° from the vertical
- (C) 10.5 m/s, directed downward and toward the west
- (D) 6.0 m/s, directed straight down

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v_RC = v_RG + v_GC = v_RG − v_CG = (0, −6.0) − (4.5, 0) = (−4.5, −6.0) m/s. Magnitude √(4.5² + 6.0²) = 7.5 m/s. Angle from the vertical: tan⁻¹(4.5/6.0) = 37°. The cyclist sees the rain coming toward them from the front, slanting backwards (west).

- (B) adds v_CG instead of subtracting it, which reverses the horizontal component.
- (C) adds the speeds as numbers. The two velocities are perpendicular, so you must combine components.
- (D) ignores the cyclist's motion. That is the rain's velocity in the ground frame, not the cyclist's frame.
</details>

## Question 4 (calculation · core)

Take **+x east and +y north**, relative to the bank. A channel is 240 m wide, with straight parallel banks running east–west. The water W flows east at 1.5 m/s relative to the bank B. A ferry F moves at 2.5 m/s relative to the water.

(a) The ferry points due north. Find the crossing time, how far east it lands, and its speed relative to the bank.
(b) Find the heading needed to land directly opposite the start, and the crossing time.
(c) How much longer does the crossing in (b) take than in (a)?

<details>
<summary>Worked solution</summary>

**(a)**
1. v_FB = v_FW + v_WB = (0, 2.5) + (1.5, 0) = (1.5, 2.5) m/s.
2. Crossing time: only the north component crosses the channel, t = 240 ÷ 2.5 = **96 s**.
3. Drift east: 1.5 × 96 = **144 m** (1.4 × 10² m).
4. Speed relative to the bank: √(1.5² + 2.5²) = **2.9 m/s**.

**(b)**
1. For no east drift, the ferry points θ west of north with 2.5 sin θ = 1.5, so sin θ = 0.60 and θ = **37° west of north** (upstream).
2. North component: 2.5 cos θ = √(2.5² − 1.5²) = 2.0 m/s.
3. Crossing time: 240 ÷ 2.0 = **120 s**.

**(c)** 120 − 96 = **24 s** longer.

Suggested mark points (4): 1 for the vector sum in (a) with the north component used for the time; 1 for the drift and the speed; 1 for sin θ = 1.5/2.5 with the heading stated upstream; 1 for the crossing time 120 s and the difference.

Common error: using the 2.9 m/s ground speed with the 240 m width to get the time in (a). The ferry's path is longer than 240 m; only the north component counts.
</details>

## Question 5 (constructed response · core)

Take **+x along a straight track**. Frames A and B have origins that coincide at t = 0. Frame B moves along +x at a constant velocity V = 3.0 m/s relative to A. A particle's position in frame A is x_A(t) = 4.0t − 0.50t³.

(a) Write x_B(t), the particle's position measured in frame B.
(b) By differentiating, find v_B(t) and a_B(t). Evaluate v_A, v_B, a_A and a_B at t = 2.0 s.
(c) Show in general that if B moves at any constant velocity V relative to A, then a_B = a_A for every motion.
(d) A third frame C has x_C = x_A − 3.0t − 1.0t². Find the particle's acceleration in frame C at t = 2.0 s, and explain why frame C does not satisfy the result in (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** O_B is at Vt in frame A, so x_B = x_A − Vt = **4.0t − 0.50t³ − 3.0t = 1.0t − 0.50t³**.

**(b)** v_B = dx_B/dt = **1.0 − 1.5t²**; a_B = dv_B/dt = **−3.0t**. In frame A, v_A = 4.0 − 1.5t² and a_A = −3.0t. At t = 2.0 s: v_A = **−2.0 m/s**, v_B = **−5.0 m/s**, a_A = a_B = **−6.0 m/s²**.

**(c)** x_B = x_A − Vt. Differentiate: v_B = v_A − V. Differentiate again: a_B = a_A − dV/dt. V is constant, so dV/dt = 0 and **a_B = a_A**.

**(d)** a_C = d²x_C/dt² = a_A − 2.0 = −6.0 − 2.0 = **−8.0 m/s²**. Frame C's origin is at 3.0t + 1.0t² in frame A, so it accelerates at 2.0 m/s² relative to A. Its velocity is not constant, so the step dV/dt = 0 in (c) fails. Frame C is **non-inertial**.

| Point | What earns it |
|---|---|
| 1 | (a) x_B = x_A − Vt with the correct polynomial |
| 1 | (b) Correct v_B(t) and a_B(t) by differentiation |
| 1 | (b) All four values at 2.0 s, with units and signs |
| 1 | (c) General derivation showing dV/dt = 0 is the step that makes the accelerations equal |
| 1 | (d) −8.0 m/s² **and** the reason: C accelerates relative to A, so it is not inertial |

**Alternative method.** For (b), subtracting V from v_A directly earns the velocity point if the acceleration is still found by differentiating.
</details>

## Question 6 (constructed response · stretch)

Take **+x along a straight road**, with all ground-frame values measured relative to the road G. At t = 0 a runner R and a cyclist C pass the same lamp post. The cyclist moves at a constant 4.0 m/s. The runner starts from rest with v_RG(t) = 1.0t for 0 ≤ t ≤ 10 s.

(a) Write v_RC(t), the runner's velocity relative to the cyclist. Describe how its graph against t compares with the graph of v_RG(t).
(b) At what time is the runner at rest relative to the cyclist? How far apart are they then, and who is ahead?
(c) Use an integral of v_RC to find when the runner catches the cyclist.
(d) State the runner's acceleration in the road frame and in the cyclist's frame.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v_RC = v_RG + v_GC = v_RG − v_CG = **1.0t − 4.0** (m/s). Its graph is a straight line with the **same slope** (1.0 m/s²) as v_RG, shifted **down by 4.0 m/s**: it runs from −4.0 m/s at t = 0 to +6.0 m/s at t = 10 s.

**(b)** v_RC = 0 at **t = 4.0 s**. Relative position: ∫₀⁴ (t − 4.0) dt = 8.0 − 16 = **−8.0 m**, so the runner is **8.0 m behind**. This is the furthest the runner falls behind, since v_RC changes sign there; by t = 10 s the runner leads by 10 m.

**(c)** x_RC(t) = ∫₀ᵗ (t − 4.0) dt = 0.50t² − 4.0t = 0.50t(t − 8.0). This is zero again at **t = 8.0 s**. Check in the road frame: runner 0.50 × 8.0² = 32 m, cyclist 4.0 × 8.0 = 32 m.

**(d)** **1.0 m/s² in both frames.** The cyclist moves at constant velocity, so the cyclist's frame is inertial.

| Point | What earns it |
|---|---|
| 1 | (a) v_RC = 1.0t − 4.0 with correct sign |
| 1 | (a) Graph: same slope, shifted down by 4.0 m/s (or end values −4.0 and +6.0 m/s) |
| 1 | (b) t = 4.0 s and an 8.0 m gap with the runner behind, from an integral or area |
| 1 | (c) t = 8.0 s from setting the relative displacement to zero |
| 1 | (d) Same acceleration in both frames, with the reason (constant v_CG) |

**Alternative method.** For (b) and (c), working in the road frame (x_R = 0.50t², x_C = 4.0t) and subtracting earns the same points.
</details>

## Question 7 (explanation · stretch)

Take **+x east and +y up**. A train moves east at a constant 12 m/s relative to the ground. A passenger drops a ball from rest (relative to the train), 1.6 m above the train floor.

(a) Find the time for the ball to reach the floor, as measured by the passenger and by an observer on the ground.
(b) Find the ball's speed just before it lands, in the train frame and in the ground frame.
(c) A student says: "The ground observer sees a longer, curved path, so the ball must have a larger acceleration in the ground frame." Evaluate this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** In the train frame the ball starts at rest with a_y = −9.8 m/s²: 1.6 = ½(9.8)t², so t = **0.57 s**. The ground frame is also inertial, the vertical motion is the same, and the time is the same: **0.57 s**.

**(b)** Vertical velocity at landing: 9.8 × 0.571 = 5.6 m/s downward in both frames.
- Train frame: v = (0, −5.6) m/s, speed **5.6 m/s**, straight down.
- Ground frame: v = (12, −5.6) m/s, speed √(12² + 5.6²) = **13 m/s**.

**(c)** The claim is **wrong**. Both frames are inertial, so the acceleration is the same: (0, −9.8) m/s² in each. Differentiating r_ball,G = r_ball,T + r_T,G twice gives a_ball,G = a_ball,T, because the train's velocity is constant. What differs is the velocity and the path. In the ground frame the ball shares the train's 12 m/s east, moving 12 × 0.571 = 6.9 m east as it falls, along a parabola. A longer path in the same time needs a larger *speed*, not a larger acceleration.

| Point | What earns it |
|---|---|
| 1 | (a) 0.57 s in both frames, with a reason the times agree |
| 1 | (b) 5.6 m/s in the train frame |
| 1 | (b) 13 m/s in the ground frame from vector addition of 12 and 5.6 m/s |
| 1 | (c) States the acceleration is the same in both inertial frames, with a reason |
| 1 | (c) Explains that the path and velocity differ because of the shared horizontal velocity |

A full answer does not need the non-inertial case (an accelerating train).
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Notation" and the one-dimensional examples in the [study guide](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/). Check that the inner letters match.
- **Q3 or Q4 wrong:** revisit Worked example 1 and Figure 2. Add components, never speeds, when the vectors are not parallel.
- **Q5 incomplete:** go through "Converting measurements between frames" and the differentiation steps.
- **Q6 or Q7 incomplete:** compare with Worked example 2. Your answer must say which quantities the two frames agree on, and why.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-checklist/).
