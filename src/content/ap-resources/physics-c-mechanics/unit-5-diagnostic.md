---
resourceId: "mb-ap-physcm-u5-diagnostic"
title: "Torque and Rotational Dynamics: Unit Diagnostic (Physics C: Mechanics Unit 5)"
description: "A 30-minute check of rotation about a fixed axis: ten original questions on angular kinematics, torque, rotational inertia, equilibrium and Στ = Iα, each linked to a topic guide."
course: "physics-c-mechanics"
unit: 5
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 5.1 to 5.6"
  - "Differentiating and integrating polynomials; Newton's second law for a single object"
learningObjectives:
  - "Find out which Unit 5 topics you can already handle and which ones to revisit"
  - "Test angular kinematics with a changing angular acceleration and the links v = rω and a_T = rα"
  - "Test torque from lever arms and from the cross product, with its sense of turning"
  - "Test rotational inertia of point masses and of a nonuniform rod by integration"
  - "Test rotational equilibrium and Newton's second law in rotational form for linked systems"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry. We use g = 9.8 m/s². Angles in radians unless stated; 1 rev = 2π rad"
related: ["mb-ap-physcm-u5-review", "mb-ap-physcm-5.1-study-guide", "mb-ap-physcm-5.3-study-guide", "mb-ap-physcm-5.4-study-guide", "mb-ap-physcm-5.6-study-guide"]
next: "mb-ap-physcm-u5-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Ten short questions covering every Unit 5 topic, two each for Topics 5.2, 5.3, 5.4 and 5.6. Each answer links to the guide for that topic."
  - "It finds gaps. It is not a past exam, it is not calibrated and it gives no predicted score."
  - "Work without notes for about 30 minutes, then mark yourself and use the table at the end."
  - "Questions 1 to 7 are multiple choice; Questions 8 to 10 need short written working."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic shows which Unit 5 (Torque and Rotational Dynamics) topics to revisit. These are **original Marlbridge practice questions**, not past exam questions. It is not calibrated against exam results, so it **gives no predicted score**.

**How to sit it.** Allow about 30 minutes. Close your notes. Use a calculator for arithmetic and trigonometry, but do the calculus by hand. Use g = 9.8 m/s². Each question states its positive sense of rotation. θ is in rad, ω in rad/s, α in rad/s² and t in s; coefficients carry the units that make each term correct. Strings do not slip or stretch.

## Question 1 (multiple choice · 5.1)

Take **counterclockwise as positive**. A rotor has ω₀ = −9.0 rad/s (clockwise) at t = 0. From then on its angular acceleration is α(t) = 2.0t. At what time is the rotor momentarily at rest?

- (A) 2.1 s
- (B) 3.0 s
- (C) 4.5 s
- (D) Never: α is positive, so the rotor keeps spinning faster.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ω = −9.0 + ∫₀ᵗ 2.0t dt = −9.0 + 1.0t², which is zero at t = 3.0 s.

- (A) writes ω = ω₀ + α(t)·t = −9.0 + 2.0t². That formula needs a constant α.
- (C) treats α as a constant 2.0 rad/s². It grows with time.
- (D) ignores the signs: ω and α are opposite, so the rotor slows.

**If you missed this:** read "Angular velocity and angular acceleration as derivatives" and Worked example 2 in the [Topic 5.1 study guide](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-study-guide/).
</details>

## Question 2 (multiple choice · 5.2)

A motor turns a small pulley of radius 0.10 m at 60 rad/s. A belt that does not slip runs round it and round a large pulley of radius 0.30 m. What is the angular velocity of the large pulley?

- (A) 6.0 rad/s
- (B) 20 rad/s
- (C) 60 rad/s
- (D) 180 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both rims move with the belt: v = 0.10 × 60 = 6.0 m/s. For the large pulley, ω = v/R = 6.0 ÷ 0.30 = 20 rad/s.

- (A) is the belt speed in m/s, labelled as an angular velocity.
- (C) assumes the pulleys share ω. They share the belt speed, not ω.
- (D) multiplies by the radius ratio instead of dividing.

**If you missed this:** read "Strings, hoses and belts that do not slip" in the [Topic 5.2 study guide](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/).
</details>

## Question 3 (multiple choice · 5.3)

A 50 N force acts at the end of a bar, 0.80 m from the axis. The force's line of action passes 0.60 m from the axis. What is the size of the torque about the axis?

- (A) 23 N·m
- (B) 26 N·m
- (C) 30 N·m
- (D) 40 N·m

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The lever arm is the perpendicular distance from the axis to the line of action: τ = r⊥F = 0.60 × 50 = 30 N·m. (Check: sin θ = 0.75, so rF sin θ = 30 N·m.)

- (A) uses the sine twice. Use the lever arm **or** the perpendicular component, not both.
- (B) uses cos θ = 0.66, the component along the bar, which gives no torque.
- (D) is rF, correct only when the force is perpendicular to the bar.

**If you missed this:** read "Only the perpendicular component turns" in the [Topic 5.3 study guide](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/).
</details>

## Question 4 (multiple choice · 5.3)

Take **+x to the right, +y up the page and +z out of the page**. A force F = (−15î + 10ĵ) N acts at r = (0.60î + 0.20ĵ) m from an axle along the z-axis. What is the torque τ = r × F?

- (A) 9.0 N·m out of the page (counterclockwise)
- (B) 9.0 N·m into the page (clockwise)
- (C) 3.0 N·m out of the page (counterclockwise)
- (D) 11 N·m out of the page (counterclockwise)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** τ_z = xF_y − yF_x = (0.60)(10) − (0.20)(−15) = 6.0 + 3.0 = +9.0 N·m. +z (out of the page) means counterclockwise.

- (B) is F × r. Reversing the order reverses the direction.
- (C) drops the minus sign in the second term: 6.0 + (0.20)(−15) = 3.0.
- (D) is |r||F| = 11.4 N·m, as if F were perpendicular to r. The angle between them is about 128°.

**If you missed this:** read "Torque as a vector: the cross product" in the [Topic 5.3 study guide](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/).
</details>

## Question 5 (multiple choice · 5.4)

A uniform rod of mass 0.60 kg and length 0.90 m turns about a perpendicular axis through one end. A small 0.20 kg ball is fixed to the far end. What is the rotational inertia of the rod and ball about the axis?

- (A) 0.20 kg·m²
- (B) 0.22 kg·m²
- (C) 0.32 kg·m²
- (D) 0.65 kg·m²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** I = ML²/3 + mL² = 0.162 + 0.162 = 0.324 kg·m², both about the same axis.

- (A) uses ML²/12, the rod's value about its **centre**.
- (B) treats the ball as part of the rod, (M + m)L²/3. The ball is all at distance L.
- (D) puts all the mass at the far end, (M + m)L². Most of the rod is closer to the axis.

**If you missed this:** read "Point masses: I = mr²" and "Deriving the standard results" in the [Topic 5.4 study guide](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/).
</details>

## Question 6 (multiple choice · 5.5)

A uniform metre stick of mass 0.15 kg rests on a pivot at the 40 cm mark. Where must a 0.10 kg mass hang for the stick to balance horizontally?

- (A) At the 25 cm mark
- (B) At the 33 cm mark
- (C) At the 55 cm mark
- (D) Nowhere: the stick can balance only on its centre of mass.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The stick's weight acts at its centre of mass, the 50 cm mark, 0.10 m right of the pivot. Torques about the pivot: (0.10 kg)g d = (0.15 kg)g(0.10 m), so d = 0.15 m **left** of the pivot, at the 25 cm mark.

- (B) inverts the mass ratio: d = 0.10 × 0.10 ÷ 0.15 = 0.067 m.
- (C) is the right distance on the wrong side, where both torques are clockwise.
- (D) forgets the hanging mass: the **combined** centre of mass can sit over the pivot.

**If you missed this:** read "Extended force diagrams" and "Choosing the point for torques" in the [Topic 5.5 study guide](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-study-guide/).
</details>

## Question 7 (multiple choice · 5.6)

A 2.0 kg block hangs from a light string wound round a uniform disk pulley of mass 4.0 kg and radius 0.10 m, which turns on a frictionless axle (I = ½MR²). The block is released. What is the angular acceleration of the pulley?

- (A) 0.49 rad/s²
- (B) 4.9 rad/s²
- (C) 33 rad/s²
- (D) 49 rad/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** I = ½(4.0)(0.10)² = 0.020 kg·m². Block: mg − T = ma. Pulley: TR = Iα, with a = Rα. Combining, a = mg ÷ (m + I/R²) = 19.6 ÷ (2.0 + 2.0) = 4.9 m/s², so α = a/R = 49 rad/s².

- (A) multiplies a by R instead of dividing: α = a/R, not aR.
- (B) is the block's linear acceleration, in m/s², not α.
- (C) treats the pulley as a hoop, a = mg ÷ (m + M).

**If you missed this:** read "Linear and rotational analyses are separate" in the [Topic 5.6 study guide](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-study-guide/).
</details>

## Question 8 (short answer · 5.2)

Take **counterclockwise as positive** for the drum. A winch drum of radius 0.15 m lifts a bucket on a rope wound round it. Starting from rest, the drum's angular velocity is ω(t) = 0.80t².

(a) Find the bucket's speed and acceleration at t = 3.0 s.
(b) Find how far the bucket rises in the first 3.0 s.
(c) Find the size of a rim point's acceleration at t = 3.0 s, and explain why it exceeds the bucket's.

<details>
<summary>Answer and explanation</summary>

**(a)** ω(3.0) = 7.2 rad/s, so v = Rω = 0.15 × 7.2 = **1.1 m/s** (1.08 m/s). α = dω/dt = 1.6t = 4.8 rad/s², so a = Rα = **0.72 m/s²**.

**(b)** θ = ∫₀³ 0.80t² dt = 0.80 × 27 ÷ 3 = 7.2 rad. The bucket rises s = Rθ = 0.15 × 7.2 = **1.1 m** (1.08 m).

**(c)** a_T = 0.72 m/s² and a_c = ω²R = 7.2² × 0.15 = 7.8 m/s², so |a| = √(0.72² + 7.78²) = **7.8 m/s²**. The rim point moves in a circle, so it also has centripetal acceleration; the bucket does not.

**If you missed this:** read "Deriving v = rω and a_T = rα" and Worked example 2 in the [Topic 5.2 study guide](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/).
</details>

## Question 9 (short answer · 5.4)

A thin rod lies along x from 0 to L. Its mass per unit length is λ = cx², where c is a constant, and its mass is M.

(a) Find c in terms of M and L.
(b) Derive I about a perpendicular axis through x = 0.
(c) Find x_cm and I_cm, then use the parallel axis theorem to find I about x = L.
(d) Evaluate the three rotational inertias for M = 0.40 kg and L = 1.0 m.

<details>
<summary>Answer and explanation</summary>

**(a)** M = ∫₀ᴸ cx² dx = cL³/3, so **c = 3M/L³**.

**(b)** I₀ = ∫₀ᴸ x² (cx²) dx = cL⁵/5 = **3ML²/5**.

**(c)** x_cm = (1/M)∫₀ᴸ x(cx²) dx = cL⁴/(4M) = **3L/4**. I_cm = I₀ − M(3L/4)² = 3ML²/5 − 9ML²/16 = **3ML²/80**. The end x = L is L/4 from the centre of mass: I_L = 3ML²/80 + M(L/4)² = **ML²/10**.

**(d)** I₀ = **0.24 kg·m²**, I_cm = **0.015 kg·m²**, I_L = **0.040 kg·m²**. I_L < I₀ because most of the mass sits near x = L.

**If you missed this:** read "Continuous objects: I = ∫r² dm", "The parallel axis theorem" and Worked example 2 in the [Topic 5.4 study guide](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/).
</details>

## Question 10 (short answer · 5.6)

Take **counterclockwise as positive**. A grinding wheel is a uniform disk of mass 2.0 kg and radius 0.10 m. It spins counterclockwise at 150 rad/s with the motor off. A tool presses on the rim **straight towards the axle** with a normal force of 20 N. The coefficient of kinetic friction is 0.50. Ignore bearing friction.

(a) Find the angular acceleration of the wheel.
(b) Find the time to stop and the number of revolutions it makes while stopping.
(c) Explain why the 20 N normal force exerts no torque about the axle.

<details>
<summary>Answer and explanation</summary>

**(a)** I = ½MR² = 0.010 kg·m². Friction f = μN = 10 N acts along the rim against the rotation, with lever arm R: τ = −(10)(0.10) = −1.0 N·m. α = τ/I = **−100 rad/s²** (clockwise, so the wheel slows).

**(b)** α is constant. Time: 150 ÷ 100 = **1.5 s**. Angle: Δθ = ω₀² ÷ (2|α|) = 150² ÷ 200 = 112.5 rad, which is **18 revolutions** (17.9).

**(c)** The normal force points along the radius, so its line of action passes through the axis and its lever arm is zero. Only the tangential friction turns the wheel.

**If you missed this:** read "Newton's second law in rotational form" in the [Topic 5.6 study guide](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-study-guide/). For (c), see "Only the perpendicular component turns" in Topic 5.3.
</details>

## Your next step

Mark each question. Count a short answer as missed if any part went wrong.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 5.1 Rotational Kinematics | 1, 10(b) | [Topic 5.1 study guide](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-study-guide/) |
| 5.2 Connecting Linear and Rotational Motion | 2, 8 | [Topic 5.2 study guide](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-study-guide/) |
| 5.3 Torque | 3, 4, 10(c) | [Topic 5.3 study guide](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/) |
| 5.4 Rotational Inertia | 5, 9 | [Topic 5.4 study guide](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/) |
| 5.5 Rotational Equilibrium and Newton's First Law in Rotational Form | 6 | [Topic 5.5 study guide](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-study-guide/) |
| 5.6 Newton's Second Law in Rotational Form | 7, 10 | [Topic 5.6 study guide](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-study-guide/) |

## How to use your result

- **Read every explanation, even for questions you got right.** A right answer for a wrong reason is still a gap.
- **Missed one question in a topic?** Read the named section, then try its practice set.
- **Missed two or more in a topic?** Work through its whole study guide, practice set and checklist.
- **Missed questions across several topics?** Start with Topic 5.3. Torque feeds Topics 5.5 and 5.6, which also use I from Topic 5.4.
- **All right?** Go straight to the [mixed unit review](/advanced-course-resources/physics-c-mechanics/unit-5-review/).

Your result here is a guide to what to study next. It does not predict an exam score.
