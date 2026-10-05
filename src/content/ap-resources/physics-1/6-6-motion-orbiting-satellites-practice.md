---
resourceId: "mb-ap-phys1-6.6-practice"
title: "Motion of Orbiting Satellites: Practice Questions (Physics 1 6.6)"
description: "Seven original Marlbridge practice questions on satellite energy and angular momentum in circular and elliptical orbits, linearised orbit data and escape speed, with worked solutions."
course: "physics-1"
unit: 6
topics: ["6.6"]
resourceType: "practice-questions"
prerequisites:
  - "U_g = −Gm₁m₂/r (Topic 3.3), circular orbits (Topic 2.9) and conservation of angular momentum (Topic 6.4)"
prerequisiteResources: ["mb-ap-phys1-6.6-study-guide"]
learningObjectives:
  - "Identify which quantities are constant in circular and elliptical orbits, and justify why"
  - "Calculate the kinetic, potential and total energy of a satellite and the energy needed to change orbit"
  - "Use conservation of angular momentum and energy to find speeds on an elliptical orbit"
  - "Linearise orbit data to find the mass of a central body"
  - "Derive and use the escape speed, including launches below escape speed"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. G = 6.67 × 10⁻¹¹ N·m²/kg². All distances r are from the centre of the central body. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-6.6-study-guide", "mb-ap-phys1-6.6-revision-notes", "mb-ap-phys1-6.6-checklist"]
next: "mb-ap-phys1-6.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Measure r from the centre, and keep the minus sign in U_g = −GMm/r."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. All planets, stars and probes are fictional. Use G = 6.67 × 10⁻¹¹ N·m²/kg². In every question the satellite's mass is negligible compared with the central body's, and gravity from the central body is the only force. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end.

## Question 1 (multiple choice · foundation)

A satellite moves in a circular orbit around a planet. Which of these quantities are **all** constant during the orbit?

- (A) The satellite's kinetic energy and angular momentum, the system's gravitational potential energy and its total mechanical energy
- (B) Only the system's total mechanical energy
- (C) Only the total mechanical energy and the satellite's angular momentum
- (D) The satellite's kinetic energy and angular momentum, but not the potential energy, because the satellite keeps moving

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In a circular orbit, r is fixed, so U_g = −GMm/r is fixed. The speed is fixed (v² = GM/r), so K is fixed. E = K + U_g is therefore fixed, and L = mvr is fixed because v is always perpendicular to r.

- (B) and (C) are true of every orbit, but incomplete. They describe what is guaranteed for an **elliptical** orbit; a circular orbit keeps K and U_g constant too.
- (D) confuses moving with changing distance. U_g depends only on r, and r does not change.
</details>

## Question 2 (multiple choice · core)

A satellite follows an elliptical orbit around a planet. Compared with the closest point of the orbit, at the farthest point the satellite's speed is ___, the system's gravitational potential energy is ___, and the total mechanical energy is ___.

- (A) lower; higher (less negative); the same
- (B) lower; lower (more negative); the same
- (C) the same; higher; higher
- (D) lower; higher; lower

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Gravity is the only force, so E is constant. Farther away, U_g = −GMm/r is less negative, so it is higher. K must fall by the same amount, so the speed is lower. Angular momentum agrees: mvr is constant at these two points, so larger r means smaller v.

- (B) treats U_g as if it became more negative with distance. A larger r makes −GMm/r closer to zero.
- (C) assumes constant speed, which is true only for circular orbits, and lets E change with nothing doing external work.
- (D) has the right trends for v and U_g but loses energy without any external force to remove it.
</details>

## Question 3 (multiple choice · core)

The escape speed from the surface of planet A is v₀. Planet B has 8 times the mass of A and 2 times its radius. What is the escape speed from the surface of planet B?

- (A) 2v₀
- (B) 4v₀
- (C) 2.8v₀
- (D) 8v₀

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v_esc = √(2GM/R). For B: √(2G × 8M / 2R) = √4 × √(2GM/R) = 2v₀.

- (B) forgets the square root: 8 ÷ 2 = 4.
- (C) is √8: it uses the larger mass but ignores the larger radius.
- (D) scales the speed directly with mass and ignores both the radius and the square root.
</details>

## Question 4 (calculation · core)

A 1500 kg satellite is in a circular orbit of radius 5.0 × 10⁶ m around a planet of mass 2.0 × 10²⁴ kg.

(a) Calculate the satellite's speed, its kinetic energy, the gravitational potential energy of the system and the total mechanical energy.
(b) Calculate the minimum energy that must be supplied to move the satellite into a circular orbit of radius 8.0 × 10⁶ m.
(c) Find the ratio of the planet's acceleration to the satellite's acceleration, and use it to explain why the planet may be treated as fixed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** GM = 6.67 × 10⁻¹¹ × 2.0 × 10²⁴ = 1.334 × 10¹⁴ N·m²/kg.
v = √(GM/r) = √(2.668 × 10⁷) = **5.2 × 10³ m/s** (5.17 × 10³).
K = ½mv² = GMm/(2r) = **2.0 × 10¹⁰ J**.
U_g = −GMm/r = **−4.0 × 10¹⁰ J**.
E = K + U_g = **−2.0 × 10¹⁰ J**.

**(b)** New orbit: E₂ = −GMm/(2r₂) = −1.334 × 10¹⁴ × 1500 ÷ (2 × 8.0 × 10⁶) = −1.25 × 10¹⁰ J.
Energy supplied = E₂ − E₁ = −1.25 × 10¹⁰ − (−2.00 × 10¹⁰) = **+7.5 × 10⁹ J**.

**(c)** The two objects pull on each other with equal forces, so a_planet / a_satellite = m / M = 1500 ÷ 2.0 × 10²⁴ = **7.5 × 10⁻²²**. The planet's acceleration is so tiny that its motion is negligible.

| Point | What earns it |
|---|---|
| 1 | v from GMm/r² = mv²/r |
| 1 | K and U_g, with the negative sign on U_g |
| 1 | E = −2.0 × 10¹⁰ J |
| 1 | ΔE = 7.5 × 10⁹ J, using total energy of both orbits |
| 1 | Ratio m/M from equal and opposite forces, with the conclusion |

Common error in (b): using only the change in U_g (1.5 × 10¹⁰ J). The satellite also slows down, so its kinetic energy falls by 7.5 × 10⁹ J, which halves the energy needed.
</details>

## Question 5 (graph · core)

A computer simulation places a 500 kg satellite in circular orbits of different radius around a planet of unknown mass M, and reports the total mechanical energy of each orbit.

| r (× 10⁷ m) | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|---|---|---|---|---|---|
| E (× 10⁹ J) | −15.0 | −10.0 | −7.50 | −5.00 | −3.75 |

(a) State what to plot to get a straight line, and give the expected slope in terms of G, M and m.
(b) Calculate the values to plot, find the slope and use it to find M.
(c) On the same axes, the student also plots K and U_g for each orbit. Describe the two lines, giving their slopes.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For a circular orbit E = −GMm/(2r) = (−GMm/2) × (1/r). Plot **E against 1/r**: a straight line through the origin with slope **−GMm/2**.

**(b)**

| 1/r (× 10⁻⁸ m⁻¹) | 10.0 | 6.67 | 5.00 | 3.33 | 2.50 |
|---|---|---|---|---|---|
| E (× 10⁹ J) | −15.0 | −10.0 | −7.50 | −5.00 | −3.75 |

The points lie on a line through the origin. Slope = (−15.0 × 10⁹ − (−3.75 × 10⁹)) ÷ (10.0 × 10⁻⁸ − 2.50 × 10⁻⁸) = **−1.5 × 10¹⁷ J·m**.
M = −2 × slope ÷ (Gm) = 3.0 × 10¹⁷ ÷ (6.67 × 10⁻¹¹ × 500) = **9.0 × 10²⁴ kg**.

**(c)** K = GMm/(2r): a straight line through the origin with slope **+1.5 × 10¹⁷ J·m**, the mirror image of the E line. U_g = −GMm/r: a straight line through the origin with slope **−3.0 × 10¹⁷ J·m**, twice as steep as the E line. All three meet at the origin, which stands for an infinitely distant orbit.

| Point | What earns it |
|---|---|
| 1 | E against 1/r, with slope −GMm/2 |
| 1 | Correct 1/r values and a straight line through the origin |
| 1 | Slope −1.5 × 10¹⁷ J·m from the line, with unit |
| 1 | M = 9.0 × 10²⁴ kg |
| 1 | K line with positive slope equal in size to E's; U_g line with twice E's slope, both through the origin |

Plotting E against r gives a curve and earns no credit for (a).
</details>

## Question 6 (constructed response · stretch)

A 2.0 × 10³ kg probe orbits a fictional star of mass 3.0 × 10³⁰ kg on an elliptical path. At its closest point it is 1.0 × 10¹¹ m from the star's centre and moving at 5.66 × 10⁴ m/s. Its farthest point is 4.0 × 10¹¹ m from the star's centre.

(a) Calculate the probe's speed at its farthest point. Justify the principle you use.
(b) Show that the mechanical energy of the probe–star system is the same at both points.
(c) Explain, in terms of the work done by gravity, why the probe slows down as it moves from the closest to the farthest point.
(d) Is the probe bound to the star? Support your answer with a calculation.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Gravity on the probe points at the star's centre, so it exerts no torque about that centre and the probe's angular momentum is constant. At both points v ⟂ r, so mv_near r_near = mv_far r_far:
v_far = 5.66 × 10⁴ × (1.0 × 10¹¹ ÷ 4.0 × 10¹¹) = **1.4 × 10⁴ m/s** (1.415 × 10⁴).

**(b)** GM = 6.67 × 10⁻¹¹ × 3.0 × 10³⁰ = 2.0 × 10²⁰ N·m²/kg.
Closest: K = ½ × 2000 × (5.66 × 10⁴)² = 3.20 × 10¹² J; U_g = −2.0 × 10²⁰ × 2000 ÷ 1.0 × 10¹¹ = −4.00 × 10¹² J; E = **−8.0 × 10¹¹ J**.
Farthest: K = ½ × 2000 × (1.415 × 10⁴)² = 0.20 × 10¹² J; U_g = −1.00 × 10¹² J; E = **−8.0 × 10¹¹ J**. The same, to within rounding of the given speed.

**(c)** While the probe moves away, its velocity has a component pointing away from the star, and gravity points towards the star. So gravity has a component opposite to the motion and does **negative work** on the probe. Its kinetic energy falls, and the system's potential energy rises by the same amount.

**(d)** **Yes.** E = −8.0 × 10¹¹ J is negative, so the probe cannot reach infinite distance. Equivalently, the escape speed at the closest point is √(2GM/r) = √(2 × 2.0 × 10²⁰ ÷ 1.0 × 10¹¹) = 6.3 × 10⁴ m/s, more than the probe's 5.66 × 10⁴ m/s.

| Point | What earns it |
|---|---|
| 1 | Angular momentum conserved, because gravity exerts no torque about the star's centre |
| 1 | v_far = 1.4 × 10⁴ m/s using v ⟂ r at both points |
| 1 | K and U_g at both points with correct signs |
| 1 | Both totals about −8.0 × 10¹¹ J |
| 1 | Gravity has a component opposite the velocity, so it does negative work and K falls |
| 1 | Bound, from E < 0 or speed below escape speed |
</details>

## Question 7 (constructed response · stretch)

A probe is launched from the surface of an airless fictional planet of mass M and radius R.

(a) Starting from conservation of energy, derive the escape speed from the surface.
(b) A student says: "A 2000 kg probe needs a higher escape speed than a 200 kg probe, because the planet pulls on it ten times harder." Evaluate this claim.
(c) The planet has M = 5.0 × 10²³ kg and R = 2.5 × 10⁶ m. A probe is launched straight up at 0.70 times the escape speed. Derive an expression for the greatest distance it reaches from the planet's centre in terms of R, and evaluate it.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Gravity is the only force, so ½mv² − GMm/R = ½mv_∞² − GMm/r_∞. Just escaping means reaching r → ∞ (U_g → 0) with speed → 0, so the total energy is zero: ½mv_esc² − GMm/R = 0, giving **v_esc = √(2GM/R)**.

**(b)** The claim is **incorrect**. The planet does pull ten times harder on the heavier probe, but the heavier probe also has ten times the kinetic energy at the same speed. Both ½mv² and GMm/R are proportional to m, so m cancels and the escape speed is the same. The heavier probe needs ten times as much **energy**, not more speed.

**(c)** Launch speed v = 0.70v_esc, so ½v² = 0.49 × GM/R. Energy per kilogram: ½v² − GM/R = −GM/r_max, so 0.49GM/R − GM/R = −GM/r_max, which gives **r_max = R / (1 − 0.49) = R / 0.51 ≈ 1.96R**.
r_max = 2.5 × 10⁶ ÷ 0.51 = **4.9 × 10⁶ m**, about 2.4 × 10⁶ m above the surface. (For reference, v_esc = 5.2 × 10³ m/s, so the launch speed is 3.6 × 10³ m/s.)

| Point | What earns it |
|---|---|
| 1 | Total energy zero, with U_g = 0 at infinity, as the escape condition |
| 1 | v_esc = √(2GM/R) |
| 1 | Claim rejected, because both energy terms are proportional to m |
| 1 | Energy equation with −GM/r_max at the top (not mgh) |
| 1 | r_max = R/0.51 ≈ 1.96R = 4.9 × 10⁶ m |

Using mgh with surface gravity in (c) gives r_max = 1.49R, which is wrong because gravity weakens as the probe rises.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Circular orbits: everything is constant" and "Elliptical orbits" in the [study guide](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-study-guide/).
- **Q3 or Q7 wrong:** go back to "Escape speed" and Worked example 3.
- **Q4 or Q5 incomplete:** revisit Worked example 1 and Figure 1. Remember E = −K in a circular orbit.
- **Q6 incomplete:** see Worked example 2 and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-checklist/).
