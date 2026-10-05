---
resourceId: "mb-ap-physcm-2.9-practice"
title: "Resistive Forces: Practice Questions (Physics C: Mechanics 2.9)"
description: "Seven original Marlbridge practice questions on resistive forces F = −kv: terminal velocity, separation of variables, upward throws with drag and a braking-glider experiment."
course: "physics-c-mechanics"
unit: 2
topics: ["2.9"]
resourceType: "practice-questions"
prerequisites:
  - "Integrating 1/u and using e and natural logarithms"
prerequisiteResources: ["mb-ap-physcm-2.9-study-guide"]
learningObjectives:
  - "Find terminal velocity and the time constant from m, k and g"
  - "Set up and solve the differential equation for motion with a resistive force by separating variables"
  - "Find acceleration and position from v(t) using calculus and initial conditions"
  - "Linearise velocity data to test the F_r = −kv model and extract k"
  - "Compare the motion of objects with different masses under the same resistive force law"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². You need the e^x and ln keys. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.9-study-guide", "mb-ap-physcm-2.9-revision-notes", "mb-ap-physcm-2.9-checklist"]
next: "mb-ap-physcm-2.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis and uses the model F_r = −kv."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every question the resistive force is modelled as F_r = −kv, with k in kg/s, and buoyancy is ignored. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+y downward**. A 0.050 kg ball falls through a liquid with a resistive force F_r = −kv, where k = 0.20 kg/s. What is its terminal speed?

- (A) 0.098 m/s
- (B) 0.25 m/s
- (C) 0.41 m/s
- (D) 2.5 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** At terminal velocity the net force is zero: mg = kv_T, so v_T = mg/k = 0.050 × 9.8 ÷ 0.20 = 2.45 ≈ 2.5 m/s.

- (A) multiplies mg by k. The unit would be N·kg/s, not m/s.
- (B) is m/k = 0.25. That is the time constant τ, in seconds, not a speed. It leaves out g.
- (C) inverts the correct expression: k/(mg) has the unit s/m.
</details>

## Question 2 (multiple choice · core)

Take **+y downward**. An object is released from rest and falls with a resistive force F_r = −kv. Which statement describes its acceleration a(t)?

- (A) It starts at g and decreases exponentially towards zero.
- (B) It starts at zero and increases towards g as the object speeds up.
- (C) It stays equal to g until the object reaches terminal velocity, then drops suddenly to zero.
- (D) It decreases linearly from g and reaches zero at t = m/k.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v = v_T(1 − e^(−t/τ)), so a = dv/dt = g e^(−t/τ). At release v = 0, so there is no drag and a = g. As v grows, drag grows, the net force shrinks and a falls smoothly towards zero.

- (B) has it backwards. At release the only force is gravity, so the acceleration is greatest then.
- (C) treats drag as switching on at the end. Drag grows from the first instant, because it depends on v.
- (D) uses the initial tangent. A straight line from g would hit zero at t = τ, but the true curve is exponential and never reaches zero.
</details>

## Question 3 (multiple choice · core)

Take **+y downward**. A pebble is thrown straight down into a deep tank of thick oil at twice its terminal speed, v₀ = 2v_T. Which statement describes what happens next?

- (A) It keeps speeding up, because gravity points along its motion.
- (B) It moves at a constant 2v_T, because nothing pushes it forward any more.
- (C) It slows down, approaching v_T from above, because the drag is larger than its weight.
- (D) It slows down and stops, because drag acts against the motion.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At v = 2v_T the drag is k(2v_T) = 2mg, upward, while the weight is mg downward. The net force is mg upward, against the motion, so the pebble slows. As it slows the drag falls, and v → v_T, where the forces balance: v(t) = v_T + v_T e^(−t/τ).

- (A) ignores that drag here is bigger than the weight.
- (B) uses the idea that motion needs a forward push. The forces are unbalanced, so the velocity changes.
- (D) forgets gravity. Drag shrinks as the pebble slows, and once v reaches v_T the forces balance; the pebble never stops.
</details>

## Question 4 (calculation · core)

Take **+y upward**, origin at the launch point. A 0.10 kg ball is thrown straight up at 9.8 m/s. Model the air resistance as F_r = −kv with k = 0.10 kg/s.

(a) Write Newton's second law for the ball while it is rising, and explain the sign of each term.
(b) Show that v(t) = (v₀ + v_T)e^(−t/τ) − v_T, where v_T = mg/k and τ = m/k.
(c) Find the time to reach the top, and compare it with the time without air resistance.
(d) Find the acceleration just after launch and at the top.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** m dv/dt = −mg − kv. Gravity points down (−y). While rising, v > 0, so the drag −kv is also negative: it points down, against the velocity.

**(b)** Divide by m: dv/dt = −(g + kv/m) = −(v_T + v)/τ, since g = v_T/τ. Separate: dv/(v + v_T) = −dt/τ. Integrate from (0, v₀) to (t, v): ln[(v + v_T)/(v₀ + v_T)] = −t/τ. So v + v_T = (v₀ + v_T)e^(−t/τ), which gives the result.

**(c)** v_T = 0.10 × 9.8 ÷ 0.10 = 9.8 m/s and τ = 1.0 s. At the top v = 0: e^(−t/τ) = v_T/(v₀ + v_T) = ½, so t = τ ln 2 = **0.69 s**. Without drag, t = v₀/g = 1.0 s. Drag adds to gravity on the way up, so the ball stops sooner.

**(d)** Just after launch: a = −g − kv₀/m = −9.8 − 9.8 = **−20 m/s²** (19.6 m/s² downward). At the top v = 0, so drag is zero and **a = −9.8 m/s²**.

| Point | What earns it |
|---|---|
| 1 | (a) Both forces negative while rising, with drag opposing velocity |
| 1 | (b) Separates variables correctly |
| 1 | (b) Integrates with matching limits (0, v₀) and (t, v) to reach the result |
| 1 | (c) t = τ ln 2 ≈ 0.69 s, compared with 1.0 s |
| 1 | (d) −20 m/s² at launch and −9.8 m/s² at the top |

**Extension.** Integrating v(t) from 0 to 0.69 s gives a greatest height of about 3.0 m, compared with 4.9 m without drag.
</details>

## Question 5 (constructed response · core)

Take **+y downward**. A small object of mass m is released from rest and falls with a resistive force F_r = −kv.

(a) Draw and label a free-body diagram for the object while it falls.
(b) Write Newton's second law and solve it by separation of variables to find v(t).
(c) Find a(t), and show that a → 0 as t → ∞.
(d) Sketch v against t, labelling the asymptote and the initial slope.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two forces: weight mg, downward (+y); resistive force kv, upward (−y). The arrows should be drawn with the drag shorter than the weight while the object is speeding up.

**(b)** m dv/dt = mg − kv. Separate: dv/(mg − kv) = dt/m. Integrate from (0, 0) to (t, v): −(1/k) ln[(mg − kv)/mg] = t/m. So mg − kv = mg e^(−kt/m), and **v(t) = (mg/k)(1 − e^(−kt/m))**.

**(c)** a = dv/dt = (mg/k)(k/m) e^(−kt/m) = **g e^(−kt/m)**. As t → ∞, e^(−kt/m) → 0, so a → 0, and v → mg/k = v_T.

**(d)** A curve rising from the origin with initial slope g, bending over and levelling off below a horizontal asymptote at v_T = mg/k. It never crosses the asymptote.

| Point | What earns it |
|---|---|
| 1 | (a) Weight down and drag up, labelled, nothing else |
| 1 | (b) Correct differential equation with signs matching the axis |
| 1 | (b) Separation and integration with correct limits to the result |
| 1 | (c) a = g e^(−kt/m) and the limit argued |
| 1 | (d) Sketch: starts at origin with slope g, concave down, asymptote at mg/k labelled |

**Alternative method.** For (b), an indefinite integral with the constant fixed by v(0) = 0 earns both (b) points.
</details>

## Question 6 (experimental · stretch)

Take **+x along a level air track**. A student tests whether a magnetic brake gives a resistive force F_r = −kv. A 0.50 kg aluminium glider is pushed into the braking region at t = 0. A motion sensor records:

| t (s) | 0 | 0.50 | 1.00 | 1.50 | 2.00 | 2.50 |
|---|---|---|---|---|---|---|
| v (m/s) | 0.800 | 0.625 | 0.484 | 0.379 | 0.293 | 0.230 |

(a) Explain why the student uses an air track, and state one other step that improves the test.
(b) Show that the model predicts ln v = ln v₀ − (k/m)t, and state what to plot to get a straight line.
(c) Use the data to find k, with its unit.
(d) Use your value of k to predict the greatest distance the glider can travel in the braking region.
(e) Give one piece of evidence from the data, other than a graph, that supports the model.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The air track makes friction negligible, so the brake is the only horizontal force. Other good steps: level the track (so gravity has no component along it), keep the glider's distance from the magnets fixed, or repeat runs from different starting speeds.

**(b)** m dv/dt = −kv gives v = v₀ e^(−kt/m). Taking natural logs: ln v = ln v₀ − (k/m)t. Plot **ln v against t**: the model predicts a straight line with slope −k/m.

**(c)** ln v values: −0.223, −0.470, −0.726, −0.970, −1.228, −1.470. A best-fit line has slope −0.50 s⁻¹ (for example, (−1.470 − (−0.223)) ÷ 2.50 = −0.499 s⁻¹). So k/m = 0.50 s⁻¹ and k = 0.50 × 0.50 = **0.25 kg/s**.

**(d)** x_max = mv₀/k = 0.50 × 0.800 ÷ 0.25 = **1.6 m**.

**(e)** In each 0.50 s interval the velocity falls by the same factor, about 0.78 (0.625 ÷ 0.800 = 0.78; 0.293 ÷ 0.379 = 0.77). Equal fractional drops in equal times are the signature of an exponential decay. (A constant force would give equal **differences**, which these data do not show.)

| Point | What earns it |
|---|---|
| 1 | (a) Air track removes friction, plus one valid extra control |
| 1 | (b) Derives the log form and names ln v against t |
| 1 | (c) Slope ≈ −0.50 s⁻¹ from a fit or wide-spaced points |
| 1 | (c) k = 0.25 kg/s with unit (accept 0.24–0.26) |
| 1 | (d) 1.6 m from mv₀/k (carry forward their k) |
| 1 | (e) Constant ratio over equal times, contrasted with constant differences |
</details>

## Question 7 (explanation · stretch)

Two plastic spheres have the same size and surface, so they have the same k = 0.040 kg/s. Sphere P has mass 0.010 kg; sphere Q is filled with sand and has mass 0.020 kg. Both are released from rest at the same height. Take **+y downward**.

A student claims: "Q falls faster because its acceleration is bigger from the moment it is released."

(a) Compare the accelerations of P and Q at the instant of release.
(b) Find the terminal velocity and time constant of each.
(c) Find the velocity of each at t = 0.25 s.
(d) Evaluate the student's claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** At release v = 0, so neither feels any drag. Each has a = mg/m = **g = 9.8 m/s²**. The accelerations are equal.

**(b)** P: v_T = mg/k = 0.010 × 9.8 ÷ 0.040 = **2.45 m/s**, τ = m/k = **0.25 s**. Q: v_T = **4.9 m/s**, τ = **0.50 s**.

**(c)** v = v_T(1 − e^(−t/τ)). P: 2.45(1 − e^(−1)) = **1.5 m/s**. Q: 4.9(1 − e^(−0.5)) = **1.9 m/s**.

**(d)** The conclusion is right but the reason is wrong. Q does fall faster, but not because its initial acceleration is bigger. Both start at g. Once they move, at the same speed both feel the same drag kv, but the drag is a smaller fraction of Q's weight. So Q's acceleration, g − kv/m, stays larger for longer, and Q reaches a terminal speed twice as large.

| Point | What earns it |
|---|---|
| 1 | (a) Both a = g at release, because v = 0 means no drag |
| 1 | (b) Both terminal velocities and time constants |
| 1 | (c) 1.5 m/s and 1.9 m/s |
| 1 | (d) Rejects the reason, keeps the conclusion, and explains with a = g − kv/m or drag as a fraction of weight |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Terminal velocity" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/).
- **Q2 or Q5 incomplete:** go through "Separation of variables" and the table in "Acceleration and position from v(t)".
- **Q4 wrong:** check the sign of drag on the way up; compare with Worked example 2.
- **Q6 or Q7 incomplete:** your reasoning must say *why* a graph is straight or *why* a claim fails, using the forces.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-checklist/).
