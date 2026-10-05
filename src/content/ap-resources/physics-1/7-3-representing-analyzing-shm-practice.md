---
resourceId: "mb-ap-phys1-7.3-practice"
title: "Representing and Analyzing SHM: Practice Questions (Physics 1 7.3)"
description: "Seven original Marlbridge practice questions on the displacement equations of simple harmonic motion, graph reading, acceleration and the amplitude–period link, with worked solutions and suggested mark points."
course: "physics-1"
unit: 7
topics: ["7.3"]
resourceType: "practice-questions"
prerequisites:
  - "T = 1/f and the period of a spring–object system (Topic 7.2)"
prerequisiteResources: ["mb-ap-phys1-7.3-study-guide"]
learningObjectives:
  - "Use x = A cos(2πft) and x = A sin(2πft) with the calculator in radians"
  - "Identify where velocity and acceleration are zero or largest"
  - "Turn position data into an equation and sketch the matching velocity and acceleration graphs"
  - "Calculate the acceleration of a spring–object system at any displacement"
  - "Use experimental data and graphs to support claims about amplitude, period and SHM"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Calculator in RADIANS. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-7.3-study-guide", "mb-ap-phys1-7.3-revision-notes", "mb-ap-phys1-7.3-checklist"]
next: "mb-ap-phys1-7.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every displacement is measured from equilibrium, with the axis stated."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Put your calculator in **radian mode**. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right** of equilibrium. A block on a spring oscillates with amplitude A on a frictionless surface. At the instant it is at x = +A, which statement is correct?

- (A) Its velocity is zero and its acceleration is zero.
- (B) Its speed is largest and its acceleration is zero.
- (C) Its velocity is zero and its acceleration is largest, directed to the left.
- (D) Its velocity is zero and its acceleration is largest, directed to the right.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At a turning point the block stops for an instant, so v_x = 0. The spring is stretched the most, so the restoring force, and therefore the acceleration, is largest. It points back towards equilibrium, which is to the left (a_x = −(k/m)x is negative when x is positive).

- (A) assumes zero velocity means zero acceleration. The block is about to move back, so its velocity is changing.
- (B) describes the block at equilibrium, x = 0, not at x = +A.
- (D) has the right size but the wrong direction: a restoring force points opposite to the displacement.
</details>

## Question 2 (multiple choice · core)

Take **+x upward** from equilibrium. A bob on a spring moves so that x = (0.12 m) cos(2π × 2.5 Hz × t). What is its displacement at t = 0.15 s?

- (A) −0.085 m
- (B) +0.085 m
- (C) +0.11 m
- (D) +0.12 m

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The angle is 2π × 2.5 × 0.15 = 2.36 rad (three-eighths of a cycle). cos(2.36 rad) = −0.707, so x = 0.12 × (−0.707) = −0.085 m. The period is 1/2.5 = 0.40 s; at 0.15 s the bob is past equilibrium (0.10 s) and on its way down to −A (0.20 s), so a negative answer makes sense.

- (B) has the right size but drops the sign of the cosine.
- (C) leaves out the 2π: 0.12 × cos(2.5 × 0.15) = 0.11 m.
- (D) comes from a calculator in **degree** mode: cos(2.36°) is almost 1.
</details>

## Question 3 (multiple choice · core)

A block on a spring oscillates on a frictionless surface. Its amplitude is then doubled. How do the period, the maximum speed and the maximum acceleration change?

- (A) Period unchanged; maximum speed doubles; maximum acceleration doubles.
- (B) Period doubles; maximum speed unchanged; maximum acceleration unchanged.
- (C) Period unchanged; maximum speed unchanged; maximum acceleration doubles.
- (D) Period increases by a factor of √2; maximum speed doubles; maximum acceleration doubles.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** T = 2π√(m/k) does not contain the amplitude, so the period is unchanged. With twice the amplitude, the x–t graph is stretched vertically by 2 but the zero crossings stay at the same times. Every slope doubles, so the maximum speed doubles. The spring force at the turning point, kA, doubles, so the maximum acceleration doubles.

- (B) reflects the idea that a longer path needs more time. It ignores the larger restoring force.
- (C) doubles the force but forgets that a larger acceleration over the same time builds a larger speed.
- (D) applies a square-root rule from the period equation to amplitude, which does not appear in it.
</details>

## Question 4 (graph · core)

Take **+x to the right** of equilibrium. A motion sensor records a glider's displacement:

| t (s) | 0 | 0.15 | 0.30 | 0.45 | 0.60 | 0.75 | 0.90 | 1.05 | 1.20 |
|---|---|---|---|---|---|---|---|---|---|
| x (mm) | 0 | 21.2 | 30.0 | 21.2 | 0 | −21.2 | −30.0 | −21.2 | 0 |

(a) State the amplitude, period and frequency.
(b) Write an equation for x as a function of t.
(c) At which times in the table is the glider moving fastest? At which time is its acceleration largest and positive?
(d) Describe the shape of the velocity–time graph for 0 to 1.20 s, giving the times where v_x is zero.
(e) Use your equation to find x at t = 0.10 s.

<details>
<summary>Worked solution</summary>

**(a)** A = 30.0 mm = **0.030 m**. The motion repeats after **T = 1.20 s**. f = 1/1.20 = **0.83 Hz**.

**(b)** At t = 0 the glider is at equilibrium moving in +x (x then increases), so **x = (0.030 m) sin(2πt/1.20 s)**.

**(c)** Fastest where x = 0: **t = 0, 0.60 s and 1.20 s**. The acceleration is largest and positive where x is most negative: **t = 0.90 s**.

**(d)** v_x starts at its **largest positive value**, falls to **zero at 0.30 s** (x = +A), reaches its most negative value at 0.60 s, returns to **zero at 0.90 s** (x = −A), and is largest positive again at 1.20 s. It is a cosine-shaped curve.

**(e)** x = 0.030 × sin(2π × 0.10 ÷ 1.20) = 0.030 × sin(0.524 rad) = 0.030 × 0.50 = **+0.015 m**.

Suggested mark points (6): 1 for A and T; 1 for f; 1 for the sine form with correct A and T; 1 for both parts of (c); 1 for the v–t description with zeros at 0.30 s and 0.90 s; 1 for (e).
</details>

## Question 5 (calculation · core)

Take **+x to the right** of equilibrium. A 0.40 kg block on a frictionless surface is attached to a spring with k = 80 N/m. It oscillates with amplitude 0.060 m.

(a) Find the largest acceleration of the block and say where it occurs.
(b) Find the block's acceleration when it is at x = −0.020 m.
(c) Find the period.
(d) The amplitude is reduced to 0.030 m. State the new period and the new largest acceleration.

<details>
<summary>Worked solution</summary>

**(a)** a_max = kA/m = 80 × 0.060 ÷ 0.40 = **12 m/s²**, at the turning points **x = ±0.060 m**.

**(b)** a_x = −(k/m)x = −(80 ÷ 0.40) × (−0.020) = **+4.0 m/s²** (to the right, towards equilibrium).

**(c)** T = 2π√(m/k) = 2π√(0.40 ÷ 80) = **0.44 s**.

**(d)** Period **0.44 s** (unchanged: T has no A). a_max = 80 × 0.030 ÷ 0.40 = **6.0 m/s²** (halved).

Suggested mark points (5): 1 for a_max with the position; 1 for the value in (b); 1 for the direction in (b); 1 for T; 1 for (d) with a reason for the unchanged period.

Common error: writing a = +4.0 m/s² with no direction, or −4.0 m/s² by forgetting that x itself is negative.
</details>

## Question 6 (constructed response · stretch)

A 0.50 kg object hangs on a spring. A student claims: "If I pull it further down before letting go, it will take longer to complete each oscillation." She times 10 oscillations for five amplitudes:

| Amplitude (cm) | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 |
|---|---|---|---|---|---|
| Time for 10 oscillations (s) | 6.28 | 6.30 | 6.27 | 6.29 | 6.28 |

(a) Explain why she times 10 oscillations rather than one.
(b) Calculate the period for each amplitude and the mean period.
(c) Do the data support her claim? Justify your answer.
(d) Explain in terms of force and acceleration why the result in (c) is expected.
(e) Use the mean period to find the spring constant.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The reaction-time error in starting and stopping the timer is about the same for 10 oscillations as for one. Dividing by 10 makes the error in each period ten times smaller.

**(b)** Periods: 0.628, 0.630, 0.627, 0.629, 0.628 s. Mean T = **0.628 s**.

**(c)** **No.** The periods differ by at most 0.003 s (less than 0.5%), with no trend as the amplitude grows. A fivefold change in amplitude made no measurable change in period, which refutes the claim.

**(d)** At every point of a larger oscillation, the displacement is larger, so the restoring force (and acceleration) is proportionally larger. The object speeds up more and covers the longer path in the same time.

**(e)** From T = 2π√(m/k): k = 4π²m/T² = 4π² × 0.50 ÷ 0.628² = **50 N/m**.

| Point | What earns it |
|---|---|
| 1 | Repeating cycles reduces the effect of reaction time on each period |
| 1 | Periods calculated (divide by 10) and mean 0.628 s |
| 1 | Claim refuted **because** the periods show no trend and differ by much less than any expected effect |
| 1 | Larger displacement → proportionally larger force and acceleration → same time for a longer path |
| 1 | k = 50 N/m with working |

**Alternative argument for (d).** Quoting T = 2π√(m/k) and noting that A does not appear earns the point only if the student also links it to the data or to the force argument.
</details>

## Question 7 (constructed response · stretch)

Take **+x to the right** of equilibrium. A sensor records the acceleration of an oscillating cart at five displacements:

| x (m) | −0.040 | −0.020 | 0 | +0.020 | +0.040 |
|---|---|---|---|---|---|
| a_x (m/s²) | +1.44 | +0.72 | 0 | −0.72 | −1.44 |

(a) Explain how the data show that the cart moves in simple harmonic motion.
(b) Find the slope of the a–x graph.
(c) Starting from Newton's second law and T = 2π√(m/k), derive an expression for the period in terms of the slope, and calculate the period and frequency.
(d) The cart is restarted with amplitude 0.050 m. Predict its largest acceleration.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The points lie on a straight line through the origin with a negative slope. So the acceleration, and hence the net force, is proportional to the displacement and always opposite to it: a restoring force proportional to displacement, which is the condition for SHM.

**(b)** Slope = (−1.44 − 1.44) ÷ (0.040 − (−0.040)) = **−36 s⁻²**.

**(c)** Newton's second law with F = −kx gives a_x = −(k/m)x, so the slope equals −k/m and k/m = 36 s⁻². Then T = 2π√(m/k) = 2π ÷ √(k/m) = 2π ÷ √36 = **1.0 s** (1.05 s unrounded), and f = 1/T = **0.95 Hz**.

**(d)** a_max = (k/m)A = 36 × 0.050 = **1.8 m/s²** (the period stays 1.0 s).

| Point | What earns it |
|---|---|
| 1 | Straight line through the origin: acceleration proportional to displacement |
| 1 | Negative slope: acceleration opposite to displacement (restoring) |
| 1 | Slope −36 s⁻² |
| 1 | Links slope to −k/m and derives T = 2π ÷ √(−slope) |
| 1 | T ≈ 1.0 s and f ≈ 0.95 Hz |
| 1 | a_max = 1.8 m/s² |

A student who never uses the mass (it is not given) but works with k/m throughout earns full credit.
</details>

## How did you do?

- **Q1 or Q3 wrong:** revisit "Where the zeros and extremes are" and Figure 1 in the [study guide](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-study-guide/).
- **Q2 wrong:** check radian mode, then redo Worked example 1.
- **Q4 incomplete:** work through Worked example 3 (reading an x–t graph) again.
- **Q5 wrong:** use a_x = −(k/m)x with the sign of x included (Worked example 2).
- **Q6 or Q7 incomplete:** see "Amplitude does not change the period" and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-checklist/).
