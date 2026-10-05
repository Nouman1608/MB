---
resourceId: "mb-ap-physcm-3.5-practice"
title: "Power: Practice Questions (Physics C: Mechanics 3.5)"
description: "Seven original Marlbridge calculus-based practice questions on power: P = F·v with vectors, net power as dK/dt, energy transfer and conversion, constant-power motion and data."
course: "physics-c-mechanics"
unit: 3
topics: ["3.5"]
resourceType: "practice-questions"
prerequisites:
  - "Dot products, work and the work–energy theorem (Topic 3.2)"
  - "Differentiating and integrating polynomials and powers of t"
prerequisiteResources: ["mb-ap-physcm-3.5-study-guide"]
learningObjectives:
  - "Calculate the power delivered by a force from its components and the velocity"
  - "Use net power as dK/dt and integrate power over time to find work and speed"
  - "Account for energy transferred into a system and converted inside it, in watts"
  - "Model and test constant-power motion with a linearised graph"
  - "Explain what a power–time relationship implies about the force"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic and trigonometry. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-3.5-study-guide", "mb-ap-physcm-3.5-revision-notes", "mb-ap-physcm-3.5-checklist"]
next: "mb-ap-physcm-3.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis or system. Coefficients in formulas carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, x is in m, v in m/s, F in N, P in W and t in s, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s². Ignore air resistance unless a question includes it. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

At one instant, a drone has velocity v = (2.0 x̂ + 4.0 ŷ + 1.0 ẑ) m/s. One of the forces on it is F = (5.0 x̂ − 3.0 ŷ + 2.0 ẑ) N. What power does this force deliver to the drone at that instant?

- (A) 0 W
- (B) −12 W
- (C) 24 W
- (D) 28 W

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** P = F·v = (5.0)(2.0) + (−3.0)(4.0) + (2.0)(1.0) = 10 − 12 + 2.0 = 0 W. The force is perpendicular to the velocity at this instant, so it transfers no energy.

- (B) uses only the y-components. The dot product adds all three products.
- (C) adds the sizes of the three products (10 + 12 + 2.0) and ignores the negative sign of the y-term.
- (D) multiplies the magnitudes, |F||v| = √38 × √21 ≈ 28 W. That would be the power only if F and v were parallel.
</details>

## Question 2 (multiple choice · core)

Take **+x along a straight track**. A 3.0 kg object moves with x(t) = (2.0 m/s³)t³ under a single net force. What power does the net force deliver at t = 1.0 s?

- (A) 54 W
- (B) 72 W
- (C) 216 W
- (D) 432 W

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** v_x = 6.0t² = 6.0 m/s and a_x = 12t = 12 m/s² at 1.0 s, so F = ma = 36 N and P = Fv = 36 × 6.0 = 216 W. Check: K = ½(3.0)(6.0t²)² = 54t⁴, so dK/dt = 216t³ = 216 W at 1.0 s.

- (A) is K(1.0) ÷ 1.0 s, the average power from 0 to 1.0 s, not the value at 1.0 s.
- (B) multiplies the force by x/t = 2.0 m/s, the average velocity, instead of the instantaneous velocity.
- (D) differentiates mv² instead of ½mv², losing the factor ½.
</details>

## Question 3 (multiple choice · core)

Two carts, of mass m and 4m, start from rest on level, frictionless tracks. Each is pulled by a motor that delivers the same constant power P, and no other force does work. After the same time t, which statement is correct?

- (A) Both carts have the same kinetic energy; the lighter cart moves twice as fast.
- (B) Both carts have the same speed, because the power is the same.
- (C) The lighter cart has four times the kinetic energy of the heavier cart.
- (D) Both carts have the same kinetic energy; the lighter cart moves four times as fast.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With constant power from rest, K = Pt for each cart, so the kinetic energies are equal. Then v = √(2Pt/m), so v ∝ 1/√m: the lighter cart's speed is √4 = 2 times larger.

- (B) treats equal power as equal speed. Equal power gives equal energy, and the same energy gives a lower speed to a larger mass.
- (C) forgets that K = Pt does not depend on mass.
- (D) gets the energies right but uses v ∝ 1/m instead of 1/√m.
</details>

## Question 4 (calculation · core)

A rope tow pulls a 65 kg skier up a straight slope at a constant 2.5 m/s. The slope is at 12° to the horizontal, the rope is parallel to the slope, and the coefficient of kinetic friction between skis and snow is 0.10. Take **+x up the slope**. Give answers to 3 significant figures.

(a) Find the rope tension.
(b) Find the power the rope delivers to the skier.
(c) Take the system to be **skier + Earth + snow**. At what rate is gravitational potential energy increasing, and at what rate is internal energy of the skis and snow increasing?
(d) The tow carries 20 such skiers at once. What is the least power the tow's motor must supply?

<details>
<summary>Worked solution</summary>

1. **(a)** Constant velocity, so the net force is zero. Along the slope: T = mg sin θ + μ_k mg cos θ = 65 × 9.8 × sin 12° + 0.10 × 65 × 9.8 × cos 12° = 132.4 + 62.3 ≈ **195 N** (194.7 N).
2. **(b)** The rope is parallel to v: P = Tv = 194.7 × 2.5 ≈ **487 W**.
3. **(c)** Gravitational potential energy: (mg sin θ)v = 132.4 × 2.5 ≈ **331 W**. Internal energy: (μ_k mg cos θ)v = 62.3 × 2.5 ≈ **156 W**. These add to 487 W: the rope **transfers** energy into the system, where it becomes potential energy or is **converted** by friction to internal energy. Kinetic energy is constant.
4. **(d)** 20 × 487 W ≈ **9.74 kW**, the least power, assuming no losses in the motor and cable.

Suggested mark points (4): 1 for T with both gravity and friction components; 1 for P = Tv; 1 for the two rates in (c) that add to the rope's power; 1 for (d).

Common error: using the horizontal or vertical speed in (b). The rope pulls along the slope, so use the speed along the slope.
</details>

## Question 5 (derivation · core)

An object of mass m is dropped from rest. Take **+y downward**, with y measured from the release point. Air resistance is negligible.

(a) Show that the power delivered by gravity at time t is P = mg²t.
(b) By integrating P, find the work done by gravity from t = 0 to t = T, and show that it equals mg times the distance fallen.
(c) Show that, in terms of the distance fallen y, the power is P = mg√(2gy).
(d) Describe the shapes of the P–t and P–y graphs.
(e) A 0.50 kg ball is dropped. Find P at t = 2.0 s using (a), then check the value using (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v_y = gt (from rest, +y downward). Gravity, mg, points along +y, parallel to v, so P = F·v = (mg)(gt) = **mg²t**.

**(b)** W = ∫₀ᵀ mg²t dt = ½mg²T². The distance fallen is d = ½gT², so mg·d = mg × ½gT² = ½mg²T². The two match, as the work–energy theorem requires (W = ΔK = ½m(gT)²).

**(c)** From v_y² = 2gy (constant acceleration from rest), v_y = √(2gy). So P = mg v_y = **mg√(2gy)**.

**(d)** P–t: a **straight line through the origin** with slope mg². P–y: a curve **proportional to √y**, rising steeply at first and then more gently. Each later metre takes less time, so the power rises more slowly with distance.

**(e)** P = 0.50 × 9.8² × 2.0 ≈ **96 W**. The ball has fallen y = ½ × 9.8 × 2.0² = 19.6 m, and mg√(2gy) = 0.50 × 9.8 × √(2 × 9.8 × 19.6) = 4.9 × 19.6 ≈ 96 W. Both agree.

| Point | What earns it |
|---|---|
| 1 | (a) Uses P = F·v with v_y = gt and the force parallel to v |
| 1 | (b) Integrates P over time to get ½mg²T² and links it to mg·d with d = ½gT² |
| 1 | (c) Uses v_y = √(2gy) to express P in terms of y |
| 1 | (d) Linear P–t through the origin **and** P ∝ √y shape, with a reason |
| 1 | (e) 96 W, with the check by the second method |
</details>

## Question 6 (data analysis · stretch)

Take **+x along a level track**. A student tests the claim that a battery-powered toy cart of mass 0.80 kg is driven at constant power. The cart starts from rest. A motion sensor gives:

| t (s) | 0.50 | 1.00 | 1.50 | 2.00 | 2.50 |
|---|---|---|---|---|---|
| v (m/s) | 1.36 | 1.95 | 2.36 | 2.75 | 3.05 |

Treat friction as negligible.

(a) Starting from P = dK/dt, show that constant power P from rest gives v² = (2P/m)t.
(b) State what to plot against what to obtain a straight line through the origin if the claim is correct.
(c) Use the data to find P.
(d) Find the driving force on the cart at t = 0.50 s and at t = 2.50 s.
(e) Explain why the claim cannot hold right from t = 0, and how the first data points would show this in a real test.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dK/dt = P, constant. Integrate from rest: K = Pt, so ½mv² = Pt and **v² = (2P/m)t**.

**(b)** Plot **v² (m²/s²) on the vertical axis against t (s) on the horizontal axis**. The claim predicts a straight line through the origin with slope 2P/m.

**(c)** v² values: 1.85, 3.80, 5.57, 7.56, 9.30 m²/s². A best-fit line through the origin has slope ≈ 3.74 m²/s³ (each v²/t is between 3.70 and 3.80). So P = m × slope ÷ 2 = 0.80 × 3.74 ÷ 2 ≈ **1.5 W**.

**(d)** F = P/v. At 0.50 s: 1.5 ÷ 1.36 ≈ **1.1 N**. At 2.50 s: 1.5 ÷ 3.05 ≈ **0.49 N**. The force falls as the cart speeds up.

**(e)** At constant power the force is F = P/v, which would be unlimited as v → 0. A real motor (and the grip of the wheels) can supply only a limited force, so near the start the power is less than P. In a real test, the earliest points would fall **below** the line, or the line through later points would cut the time axis slightly after t = 0.

| Point | What earns it |
|---|---|
| 1 | (a) Integrates P = dK/dt from rest to reach v² = 2Pt/m |
| 1 | (b) v² against t, with slope identified as 2P/m |
| 1 | (c) P ≈ 1.5 W from the slope (accept 1.4–1.6 W) |
| 1 | (d) Both forces from F = P/v (carry forward an incorrect P) |
| 1 | (e) F = P/v unlimited as v → 0, so real power is lower at first, with the effect on the graph |

**Alternative method for (c).** Averaging P = ½mv²/t over the five points also gives 1.5 W, but the graph shows any trend more clearly.
</details>

## Question 7 (explanation · stretch)

Take **+x along a level, frictionless track**. A single horizontal force acts on a 1.2 kg cart that starts from rest. A power sensor shows that the power delivered rises in proportion to time: P = (6.0 W/s)t.

A student says: "The power keeps rising, so the force on the cart must keep rising too."

Test the claim by finding the force as a function of time. Then describe how P(t) would have to behave if the force really did increase with time.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Model answer.**

- Kinetic energy: only this force does work, so K = ∫₀ᵗ P dt = ∫₀ᵗ 6.0t dt = **3.0t²** J.
- Speed: ½(1.2)v² = 3.0t², so v² = 5.0t² and v = √5.0 · t ≈ **2.24t** m/s.
- Force: F = P/v = 6.0t ÷ (2.24t) ≈ **2.7 N**, the same at every time (in general, F = √(cm) for P = ct from rest).

So the claim is **false**: the force is constant. The power rises only because the speed rises: at constant force from rest, v ∝ t, so P = Fv ∝ t. The acceleration is constant, a = 2.7 ÷ 1.2 ≈ 2.2 m/s², which matches dv/dt = 2.24 m/s².

If the force increased with time, P = Fv would grow **faster than linearly**, so the P–t graph would curve upwards. For example, a force proportional to t gives v ∝ t² and P ∝ t³ (study guide, Worked example 3).

| Point | What earns it |
|---|---|
| 1 | Integrates P(t) to find K(t) = 3.0t² |
| 1 | Finds v(t) from K and concludes F = P/v is constant, about 2.7 N |
| 1 | Explains that the power rises because v rises at constant F |
| 1 | States that an increasing force gives P rising faster than linearly (curving up), with a reason |

Numerical checks at two different times (for example at 3.0 s: P = 18 W, v ≈ 6.7 m/s, F ≈ 2.7 N) earn the first two points.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Instantaneous power: P = dW/dt = F·v" and Worked example 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/3-5-power-study-guide/). Use the dot product and the instantaneous velocity.
- **Q3 or Q6 wrong:** revisit Worked example 2. At constant power, K = Pt and v ∝ √t.
- **Q4 incomplete:** go back to "Power is a rate of energy change" and name your system before splitting the rope's power.
- **Q5 or Q7 incomplete:** your reasoning must link P to v at each instant and use W = ∫P dt. Compare with Worked example 3 and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/3-5-power-checklist/).
