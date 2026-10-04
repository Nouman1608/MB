---
resourceId: "mb-ap-phys1-1.2-practice"
title: "Displacement, Velocity, and Acceleration: Practice Questions (Physics 1 1.2)"
description: "Seven original Marlbridge practice questions on displacement, average and instantaneous velocity, acceleration signs and motion-detector data, with worked solutions and suggested mark points."
course: "physics-1"
unit: 1
topics: ["1.2"]
resourceType: "practice-questions"
prerequisites:
  - "Using + and − signs for direction along one axis"
prerequisiteResources: ["mb-ap-phys1-1.2-study-guide"]
learningObjectives:
  - "Calculate displacement, average velocity, average speed and average acceleration with correct signs"
  - "Estimate an instantaneous velocity from shrinking time intervals"
  - "Use the signs of velocity and acceleration to decide whether an object speeds up or slows down"
  - "Process motion-detector data into a straight-line graph and interpret its slope"
  - "Justify a claim about acceleration at an instant of zero velocity"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-1.2-study-guide", "mb-ap-phys1-1.2-revision-notes", "mb-ap-phys1-1.2-checklist"]
next: "mb-ap-phys1-1.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1", "exam-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Use it for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A toy cart moves from x = +3.0 m to x = −5.0 m, then back to x = −1.0 m. The whole trip takes 4.0 s. What is the cart's average velocity for the whole trip?

- (A) +1.0 m/s
- (B) −1.0 m/s
- (C) 3.0 m/s
- (D) −2.0 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Average velocity uses only the start and end positions.
Δx = x − x₀ = (−1.0 m) − (+3.0 m) = −4.0 m, so v_avg = −4.0 m ÷ 4.0 s = −1.0 m/s. The minus sign means "to the left" overall.

- (A) subtracts the wrong way round (x₀ − x), which flips the sign.
- (C) is the average speed: distance 8.0 m + 4.0 m = 12 m, divided by 4.0 s. It uses the whole path, not the displacement.
- (D) divides only the first stretch (−8.0 m) by the total time, forgetting the return trip changes the final position.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**. Four objects have the velocities and accelerations below at one instant. Which object is slowing down?

- (A) v_x = +4.0 m/s, a_x = +2.0 m/s²
- (B) v_x = −4.0 m/s, a_x = −2.0 m/s²
- (C) v_x = −4.0 m/s, a_x = +2.0 m/s²
- (D) v_x = +4.0 m/s, a_x = 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** An object slows down when v_x and a_x have opposite signs. In (C) it moves left while the acceleration points right, so its speed is falling.

- (A) has both signs positive: speeding up to the right.
- (B) is the classic trap "negative acceleration means slowing down". Both signs are negative, so it is speeding up to the left.
- (D) has zero acceleration, so the speed stays at 4.0 m/s. Choosing it reflects the old idea that a moving object "naturally" slows down without a cause.
</details>

## Question 3 (multiple choice · core)

Take **+x along a straight track**. A motion detector records a cart's position:

| t (s) | 2.00 | 2.01 | 2.10 | 2.50 | 3.00 |
|---|---|---|---|---|---|
| x (m) | 8.0000 | 8.0601 | 8.6100 | 11.2500 | 15.0000 |

What is the best estimate of the cart's instantaneous velocity at t = 2.00 s?

- (A) 7.0 m/s
- (B) 6.4 m/s
- (C) 6.0 m/s
- (D) 4.0 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Find the average velocity from t = 2.00 s over shorter and shorter intervals:

| Interval ends at | Δx (m) | Δt (s) | v_avg (m/s) |
|---|---|---|---|
| 3.00 s | 7.0000 | 1.00 | 7.00 |
| 2.50 s | 3.2500 | 0.50 | 6.50 |
| 2.10 s | 0.6100 | 0.10 | 6.10 |
| 2.01 s | 0.0601 | 0.01 | 6.01 |

The values approach 6.0 m/s as Δt shrinks, so the instantaneous velocity is about 6.0 m/s.

- (A) uses the longest interval only. That is a secant slope, not a tangent slope.
- (B) takes the mean of the four averages (6.4 m/s). Averaging averages does not remove the bias of the long intervals.
- (D) divides position by clock time (8.0 m ÷ 2.00 s). Velocity is a *change* in position over a *change* in time.
</details>

## Question 4 (calculation · core)

Take **+x towards a wall**. A ball rolls towards the wall at 2.4 m/s. It is in contact with the wall for 0.12 s and rolls away at 1.8 m/s. Calculate the ball's average acceleration during the contact.

<details>
<summary>Worked solution</summary>

1. Signed velocities: v_x0 = +2.4 m/s (towards the wall); v_x = −1.8 m/s (away from it).
2. Change in velocity: Δv_x = (−1.8) − (+2.4) = −4.2 m/s.
3. Average acceleration: a_avg = −4.2 m/s ÷ 0.12 s = **−35 m/s²** (35 m/s² directed away from the wall).

Suggested mark points (2): 1 for using opposite signs for the two velocities; 1 for −35 m/s² with direction stated. A student who takes +x away from the wall gets +35 m/s²; that is fully correct if the axis is stated.

Common error: using speeds only, (1.8 − 2.4) ÷ 0.12 = −5.0 m/s². This ignores the reversal of direction and is seven times too small.
</details>

## Question 5 (graph · core)

Take **+x to the right**. A velocity–time graph for a trolley is made of two straight segments. It runs from (0 s, +4.0 m/s) to (2.0 s, +4.0 m/s), then from (2.0 s, +4.0 m/s) to (6.0 s, −4.0 m/s).

(a) Find the acceleration from 2.0 s to 6.0 s.
(b) At what time is the trolley momentarily at rest?
(c) Over which time intervals is the trolley slowing down, and over which is it speeding up? Give a reason.
(d) Find the displacement and the distance travelled from 0 to 6.0 s.

<details>
<summary>Worked solution</summary>

**(a)** Slope = (−4.0 − 4.0) m/s ÷ (6.0 − 2.0) s = **−2.0 m/s²**.

**(b)** The line crosses v_x = 0 halfway between 2.0 s and 6.0 s, because it falls 4.0 m/s at 2.0 m/s² per second: 2.0 s + 2.0 s = **4.0 s**.

**(c)** 0–2.0 s: a_x = 0, constant velocity (neither). 2.0–4.0 s: v_x positive, a_x negative, so **slowing down**. 4.0–6.0 s: v_x negative, a_x negative, so **speeding up** (to the left).

**(d)** Areas: 0–2.0 s rectangle 2.0 × 4.0 = +8.0 m; 2.0–4.0 s triangle ½ × 2.0 × 4.0 = +4.0 m; 4.0–6.0 s triangle −4.0 m.
Displacement = 8.0 + 4.0 − 4.0 = **+8.0 m**. Distance = 8.0 + 4.0 + 4.0 = **16 m**.

Suggested mark points (5): 1 for (a); 1 for (b); 1 for (c) with the sign-comparison reason; 1 for the displacement with the negative area subtracted; 1 for the distance with all areas added. Area under a velocity–time graph is developed further in Topic 1.3.
</details>

## Question 6 (constructed response · stretch)

Take **+x down a ramp**, with the origin where a cart is released from rest at t = 0. A motion detector records the cart's position every 0.20 s (readings rounded to the nearest millimetre):

| t (s) | 0 | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|---|
| x (m) | 0 | 0.010 | 0.040 | 0.090 | 0.160 | 0.250 |

A student claims the cart's acceleration is constant.

(a) Using only the definitions of average velocity and average acceleration, describe how to process these data into a graph that should be a straight line if the claim is true. Say what to plot on each axis.
(b) Carry out the processing and find the acceleration.
(c) State whether the data support the claim, with a reason.
(d) Suggest one change to the experiment that would make the value of the acceleration more reliable.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For each 0.20 s interval, calculate v_avg = Δx / Δt. For constant acceleration, the average velocity over a short interval equals the instantaneous velocity at the **middle** of that interval. Plot v_avg (vertical axis, m/s) against the **midpoint time** (horizontal axis, s). If acceleration is constant, the points lie on a straight line whose slope is the acceleration.

**(b)**

| Interval (s) | Midpoint t (s) | Δx (m) | v_avg (m/s) |
|---|---|---|---|
| 0–0.20 | 0.10 | 0.010 | 0.050 |
| 0.20–0.40 | 0.30 | 0.030 | 0.15 |
| 0.40–0.60 | 0.50 | 0.050 | 0.25 |
| 0.60–0.80 | 0.70 | 0.070 | 0.35 |
| 0.80–1.00 | 0.90 | 0.090 | 0.45 |

Slope = (0.45 − 0.050) m/s ÷ (0.90 − 0.10) s = 0.40 ÷ 0.80 = **0.50 m/s²**.

**(c)** The data **support** the claim. Each velocity is 0.10 m/s more than the one before, for equal 0.20 s steps, so the points lie on one straight line: the average acceleration is the same (0.50 m/s²) in every interval.

**(d)** Any one: repeat each run several times and average; record at a higher sampling rate; check the detector against a metre rule; use a longer ramp so the times are longer and timing errors matter less.

| Point | What earns it |
|---|---|
| 1 | Calculates average velocities as Δx / Δt for each interval |
| 1 | Assigns each average velocity to the midpoint time and names the axes (v_avg against t) |
| 1 | Acceleration 0.50 m/s² from the slope, with unit |
| 1 | Supports the claim **because** the velocity rises by equal amounts in equal times (straight line) |
| 1 | A sensible improvement that reduces a named uncertainty |

**Alternative method.** Plotting x against t² also gives a straight line for constant acceleration from rest; its slope is ½a_x = 0.25 m/s², so a_x = 0.50 m/s². This uses an equation from Topic 1.3 and earns full credit when the link "slope = ½a_x" is stated. Plotting x against t alone does **not** give a straight line and earns no credit for (a).
</details>

## Question 7 (constructed response · stretch)

Take **+y upward**. A ball is thrown straight up. A student says: "At the very top, the ball's velocity is zero, so its acceleration there is zero too."

The ball's velocity is +0.98 m/s at 0.10 s before it reaches the top, and −0.98 m/s at 0.10 s after.

(a) Calculate the ball's average acceleration over this 0.20 s interval.
(b) Evaluate the student's claim, using your answer to (a) and the meaning of acceleration.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** a_avg = Δv_y / Δt = (−0.98 − 0.98) m/s ÷ 0.20 s = **−9.8 m/s²**.

**(b)** The claim is **incorrect**. Acceleration is the rate at which velocity *changes*, not the size of the velocity. Around the top, the velocity changes from upward to downward, so it is still changing: even over this short interval centred on the top, the average acceleration is −9.8 m/s². Making the interval shorter gives the same value, so the instantaneous acceleration at the top is −9.8 m/s² (downward). If the acceleration really were zero at the top, the velocity would stay zero and the ball would hang in the air.

| Point | What earns it |
|---|---|
| 1 | −9.8 m/s², with the sign matching +y upward |
| 1 | States that acceleration depends on the change in velocity, not its value |
| 1 | Links the short interval centred on the top to the instantaneous acceleration there |
| 1 | Concludes the claim is wrong, with the consequence or direction (downward) stated |

An answer that skips (a) and argues only from "gravity still acts at the top, so a_y = −g" can earn the second and fourth points, but not the first or third.
</details>

## How did you do?

- **Q1 wrong:** re-read "Displacement and distance" and Worked example 1 in the [study guide](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-study-guide/).
- **Q2 or Q4 wrong:** revisit the speeding-up table and Worked example 2. Always substitute signed velocities.
- **Q3 wrong:** go back to "Instantaneous velocity without calculus" and Figure 1.
- **Q5 incomplete:** work through Figure 2 (slope and area of a velocity–time graph).
- **Q6 or Q7 incomplete:** your reasoning needs the *why*: equal changes in equal times, or "acceleration is a change in velocity". See "Limiting cases worth knowing".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/1-2-displacement-velocity-acceleration-checklist/).
