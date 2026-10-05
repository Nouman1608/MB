---
resourceId: "mb-ap-phys1-5.5-practice"
title: "Rotational Equilibrium and Newton's First Law in Rotational Form: Practice Questions (Physics 1 5.5)"
description: "Seven original Marlbridge practice questions on rotational equilibrium: balancing torques, tipping, a derived tension, a balance experiment and couples, with worked solutions and suggested mark points."
course: "physics-1"
unit: 5
topics: ["5.5"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating torque with τ = r⊥F = rF sin θ"
prerequisiteResources: ["mb-ap-phys1-5.5-study-guide"]
learningObjectives:
  - "Apply Στ = 0 and ΣF = 0 to find unknown forces and positions on rigid systems at rest"
  - "Find the condition for an object to start tipping"
  - "Derive a symbolic expression for a force in equilibrium and predict how it changes"
  - "Linearise balance data and use the slope to test a torque model"
  - "Justify whether a system is in rotational equilibrium, translational equilibrium, both or neither"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-5.5-study-guide", "mb-ap-phys1-5.5-revision-notes", "mb-ap-phys1-5.5-checklist"]
next: "mb-ap-phys1-5.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "State your sign convention (for example, counterclockwise positive) before writing Στ = 0."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine. Unless a question says otherwise, take **counterclockwise (ccw) as positive**.

## Question 1 (multiple choice · foundation)

A uniform metre stick has a mass of 0.20 kg. It rests on a pivot placed under its 30 cm mark. Where should a 0.50 kg mass be hung so that the stick balances horizontally?

- (A) At the 10 cm mark
- (B) At the 22 cm mark
- (C) At the 38 cm mark
- (D) At the 0 cm mark

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The stick's weight acts at its centre, the 50 cm mark, which is 0.20 m to the right of the pivot. Its torque about the pivot is (0.20 kg)(9.8 m/s²)(0.20 m) = 0.392 N·m clockwise. The 0.50 kg mass must give an equal counterclockwise torque, so it hangs on the **left**, a distance d from the pivot:
(0.50 kg)(9.8 m/s²) d = 0.392 N·m, so d = 0.080 m. That is the 30 − 8 = **22 cm mark**.

- (A) measures the stick's lever arm from the 0 cm end (0.50 m) instead of from the pivot (0.20 m). Lever arms are always measured from the axis.
- (C) is the right distance on the wrong side: it adds to the clockwise torque.
- (D) gives a counterclockwise torque of (0.50)(9.8)(0.30) = 1.47 N·m, far more than 0.392 N·m, so the stick would tip to the left. Further out is not automatically better.
</details>

## Question 2 (multiple choice · core)

Which of the following systems is in rotational equilibrium but **not** in translational equilibrium?

- (A) A ceiling fan turning at a steady rate on its fixed mount
- (B) A spinning ball in flight after being thrown, with air resistance ignored
- (C) A steering wheel at the moment a driver starts to turn it with equal and opposite forces from two hands
- (D) A car wheel while the car brakes to a stop

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Gravity is the only force on the ball and it acts at the centre of mass, so it has zero lever arm about an axis through the centre of mass. Στ = 0, so the ball keeps spinning at a constant rate. But the net force is mg downward, so the centre of mass accelerates: not translational equilibrium.

- (A) is in **both** kinds of equilibrium: constant ω and a centre of mass that stays put.
- (C) is the **reverse** case. The two hand forces cancel (ΣF = 0), but they form a couple, so Στ ≠ 0 and ω starts to change.
- (D) is in **neither**: the wheel's centre slows down and its spin slows down too.
</details>

## Question 3 (multiple choice · core)

A wheel's angular velocity is plotted against time. The graph is a single straight line falling from +4.0 rad/s at t = 0 to −4.0 rad/s at t = 8.0 s. Which statement about the instant t = 4.0 s, when ω = 0, is correct?

- (A) The net torque on the wheel is zero, because the wheel is not rotating at that instant.
- (B) The net torque is non-zero and has the same sense as at every other time on the graph.
- (C) The net torque is zero, because the torque changes direction at that instant.
- (D) The net torque cannot be found without knowing the wheel's rotational inertia.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A straight, sloping line means ω is changing at a steady rate the whole time (slope = −1.0 rad/s²). Unbalanced torques are needed for any change in ω, so the net torque is non-zero at every instant, including when ω passes through zero. It is clockwise throughout (the same sense as the negative slope).

- (A) confuses ω = 0 with constant ω. Zero net torque would need a flat line.
- (C) mixes up ω changing sign with the torque changing sign. The slope does not change sign, so the torque does not either.
- (D) is wrong: you need I for the torque's size, but the graph alone shows it is non-zero and clockwise.
</details>

## Question 4 (calculation · core)

A uniform shelf plank is 2.4 m long and has a mass of 15 kg. It rests on two brackets placed 0.40 m and 1.60 m from its left end. It is not fixed to the brackets. A 4.0 kg cat walks along the plank towards the right end.

(a) Show that the plank does not tip, even when the cat reaches the right end.
(b) Find the largest mass that could sit at the right end without the plank tipping.
(c) With the cat at the right end, find the upward force from each bracket.

<details>
<summary>Worked solution</summary>

**(a)** If the plank starts to tip, it pivots about the **right bracket** and the left bracket's force falls to zero. Take torques about the right bracket. The plank's centre (1.2 m) is 0.40 m left of it: torque (15)(9.8)(0.40) = 58.8 N·m ccw. The cat at the right end is 0.80 m right of it: torque (4.0)(9.8)(0.80) = 31.36 N·m cw. The cw torque is smaller than 58.8 N·m, so the plank stays level.

**(b)** At the tipping point: M(9.8)(0.80) = (15)(9.8)(0.40), so **M = 7.5 kg**.

**(c)** Take torques about the **left bracket** (x = 0.40 m), ccw positive. The right bracket force F_R acts 1.20 m away (ccw); the plank's weight acts 0.80 m away (cw); the cat acts 2.00 m away (cw).
F_R(1.20) = (15)(9.8)(0.80) + (4.0)(9.8)(2.00) = 117.6 + 78.4 = 196 N·m, so **F_R = 163 N ≈ 160 N**.
Forces: F_L = (19 kg)(9.8 m/s²) − 163.3 N = 186.2 − 163.3 = **22.9 N ≈ 23 N**.

Suggested mark points (5): 1 for identifying the right bracket as the tipping axis with F_L = 0; 1 for comparing the two torques in (a); 1 for 7.5 kg; 1 for F_R with a correct torque equation; 1 for F_L from ΣF_y = 0. Check: torques about the right bracket, (22.9)(1.20) + 31.36 = 58.8 N·m, balance.
</details>

## Question 5 (derivation and functional dependence · core)

A uniform bar of mass m and length L is held horizontal. Its left end rests on a frictionless hinge on a wall. A vertical string is tied to the bar a distance x from the hinge, where L/4 ≤ x ≤ L.

(a) Derive an expression for the tension T in the string in terms of m, L, x and g.
(b) The string is moved from the far end (x = L) to x = L/4. By what factor does T change?
(c) Derive an expression for the vertical force from the hinge. Find its size and direction when x = L/4.
(d) Sketch T against x for L/4 ≤ x ≤ L, labelling the values at x = L/4, L/2 and L.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Torques about the hinge, so the hinge force drops out. The string pulls up at x (ccw); the weight acts at L/2 (cw).
Tx − mg(L/2) = 0, so **T = mgL / (2x)**.

**(b)** T is inversely proportional to x. Making x four times smaller makes T **four times larger**: from mg/2 to 2mg.

**(c)** Vertical forces, up positive: H + T − mg = 0, so **H = mg − mgL/(2x) = mg(1 − L/(2x))**. At x = L/4, H = mg(1 − 2) = −mg: the hinge pulls **down** on the bar with a force mg. The string is now closer to the hinge than the centre of mass, so T exceeds mg and the hinge must hold the end down.

**(d)** A curve falling as x increases (T ∝ 1/x, not a straight line): T = 2mg at x = L/4, T = mg at x = L/2, T = mg/2 at x = L.

| Point | What earns it |
|---|---|
| 1 | Torque equation about the hinge with the correct lever arms (x and L/2) |
| 1 | T = mgL/(2x) |
| 1 | Factor of 4 increase, justified by T ∝ 1/x |
| 1 | H = mg − T, or equivalent, from ΣF_y = 0 |
| 1 | H = mg directed downward at x = L/4 |
| 1 | Sketch: decreasing curve (not a line) through the three labelled points |

**Alternative method.** Taking torques about the string's attachment point gives H directly: H·x + mg(L/2 − x) = 0 with clockwise positive, which leads to the same result.
</details>

## Question 6 (experimental design and analysis · stretch)

A student balances a light metre rule at its centre. She hangs a fixed 0.200 kg mass 0.150 m to the left of the pivot. She then hangs different masses m on the right and moves each until the rule balances, recording its distance d from the pivot. The data below are invented for practice.

| m (kg) | 0.075 | 0.100 | 0.150 | 0.200 | 0.250 |
|---|---|---|---|---|---|
| d (m) | 0.401 | 0.298 | 0.201 | 0.150 | 0.121 |

(a) Use Στ = 0 to predict a relationship between m and d.
(b) Explain what to plot to get a straight line, and give the predicted slope.
(c) Carry out the processing and find the slope.
(d) Do the data support the torque model? Give a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Torques about the pivot: (0.200 kg)g(0.150 m) = m g d, so **m d = 0.030 kg·m**, a constant. g cancels.

**(b)** m = (0.030 kg·m)(1/d). Plot **m (vertical) against 1/d (horizontal)**. The model predicts a straight line through the origin with **slope 0.030 kg·m**.

**(c)**

| m (kg) | 0.075 | 0.100 | 0.150 | 0.200 | 0.250 |
|---|---|---|---|---|---|
| 1/d (m⁻¹) | 2.49 | 3.36 | 4.98 | 6.67 | 8.26 |

Slope from the first and last points: (0.250 − 0.075) ÷ (8.26 − 2.49) = 0.175 ÷ 5.77 = **0.0303 kg·m**. A best-fit line gives the same value to 3 significant figures.

**(d)** The data **support** the model. The points lie close to a straight line through the origin, and the slope (0.0303 kg·m) is within 1% of the predicted 0.030 kg·m. Each product m·d is between 0.0298 and 0.0303 kg·m.

| Point | What earns it |
|---|---|
| 1 | Torque balance written with both lever arms, leading to m d = constant |
| 1 | Plots m against 1/d (or d against 1/m) and gives a predicted slope with unit |
| 1 | Correct 1/d values and a slope near 0.030 kg·m |
| 1 | Supports the model **because** the line is straight, passes through the origin and the slope matches |

A plot of m against d earns no credit for (b): it is a curve, so you cannot test the model by eye.
</details>

## Question 7 (constructed response · stretch)

A light rod 0.40 m long lies at rest on frictionless ice. At the same moment, two people push horizontally on its ends, each with a force of 3.0 N perpendicular to the rod: one pushes north at the west end, the other pushes south at the east end.

A student says: "The two forces cancel, so the rod stays exactly as it is."

(a) Find the net force on the rod.
(b) Find the net torque about the rod's centre.
(c) Show that the net torque about the rod's west end has the same value.
(d) Evaluate the student's claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** 3.0 N north + 3.0 N south: **ΣF = 0**.

**(b)** Each force acts 0.20 m from the centre, perpendicular to the rod, and both turn the rod the same way. Seen from above, both are clockwise. Net torque = 2 × (3.0 N)(0.20 m) = **1.2 N·m** (clockwise).

**(c)** About the west end, the north force there has zero lever arm. The south force at the east end acts 0.40 m away: (3.0 N)(0.40 m) = **1.2 N·m**, clockwise again. A couple gives the same torque about every point.

**(d)** The claim is **only half right**. ΣF = 0, so the centre of mass stays at rest (translational equilibrium). But Στ ≠ 0, so the angular velocity must change: the rod starts to rotate about its centre.

| Point | What earns it |
|---|---|
| 1 | ΣF = 0 |
| 1 | 1.2 N·m about the centre, with both torques in the same sense |
| 1 | 1.2 N·m about the end, using a zero lever arm for the force at the pivot |
| 1 | Separates the two conditions: centre of mass stays at rest, rotation starts |
| 1 | Links the non-zero net torque to a changing angular velocity |
</details>

## How did you do?

- **Q1 or Q4 wrong:** rework Worked example 1 and "Choosing the pivot" in the [study guide](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-study-guide/). Measure every lever arm from the pivot.
- **Q2 or Q7 wrong:** re-read "The two kinds of equilibrium are independent".
- **Q3 wrong:** go back to Figure 2: only a flat ω–t line means zero net torque.
- **Q5 incomplete:** compare with the symbolic steps in Worked example 2.
- **Q6 incomplete:** your answer needs a straight-line plot and a reason linking the slope to the model.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-checklist/).
