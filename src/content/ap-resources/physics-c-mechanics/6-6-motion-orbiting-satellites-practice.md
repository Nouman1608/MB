---
resourceId: "mb-ap-physcm-6.6-practice"
title: "Motion of Orbiting Satellites: Practice Questions (Physics C: Mechanics 6.6)"
description: "Seven original Marlbridge calculus-based practice questions on orbits: conserved quantities, circular-orbit energies, factors of change, escape speed and an elliptical orbit solved from one end."
course: "physics-c-mechanics"
unit: 6
topics: ["6.6"]
resourceType: "practice-questions"
prerequisites:
  - "Newton's law of gravitation and circular motion"
  - "Conservation of energy and of angular momentum"
prerequisiteResources: ["mb-ap-physcm-6.6-study-guide"]
learningObjectives:
  - "Identify which quantities are constant in circular and elliptical orbits, with reasons"
  - "Derive the circular-orbit energy relations and sketch K, U and E against r"
  - "Predict how speed and energy change when an orbit's radius changes"
  - "Derive and use the escape velocity, including the speed left over far away"
  - "Combine energy and angular momentum conservation to find the far end of an elliptical orbit"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. G = 6.67 × 10⁻¹¹ N·m²/kg². All planets and moons are fictional. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-6.6-study-guide", "mb-ap-physcm-6.6-revision-notes", "mb-ap-physcm-6.6-checklist"]
next: "mb-ap-physcm-6.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "U_g is zero at infinite separation throughout, and r is measured from the central body's centre."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use G = 6.67 × 10⁻¹¹ N·m²/kg². In every question the satellite's mass is negligible compared with the central body's, the only force is gravity unless a thruster is mentioned, and U_g = 0 at infinite separation. All planets and moons are fictional. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A probe moves in an elliptical orbit around a planet. Which quantities stay constant as it goes round?

- (A) The probe's kinetic energy and the system's gravitational potential energy
- (B) The system's total mechanical energy and the probe's angular momentum about the planet
- (C) The system's total mechanical energy, the probe's angular momentum and the probe's speed
- (D) Only the probe's angular momentum, because thrust is needed to keep it on an ellipse

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Gravity is the only force and it is conservative, so E is constant. Gravity points at the planet's centre, so it has no torque about that point, and L is constant.

- (A) is true only for a circular orbit. On an ellipse r changes, so U changes, and K changes by the opposite amount.
- (C) adds the speed. The speed is greatest at the closest point (r_p v_p = r_a v_a), so it is not constant.
- (D) is wrong about thrust: gravity alone produces elliptical orbits, and with no thrust E is conserved too.
</details>

## Question 2 (multiple choice · core)

A satellite moves in a circular orbit. Its kinetic energy is 2.0 × 10⁹ J. What is the total mechanical energy of the satellite–planet system?

- (A) +2.0 × 10⁹ J
- (B) −1.0 × 10⁹ J
- (C) −2.0 × 10⁹ J
- (D) −4.0 × 10⁹ J

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** For a circular orbit, mv² = GMm/r, so K = GMm/(2r) and U = −GMm/r = −2K = −4.0 × 10⁹ J. Then E = K + U = −K = **−2.0 × 10⁹ J**.

- (A) forgets that U is negative and larger in size than K. A positive E would mean the satellite is not bound.
- (B) uses E = −½K, mixing up the factor of ½ that links K to U.
- (D) is the potential energy U, not the total.
</details>

## Question 3 (multiple choice · core)

A satellite is moved from a circular orbit of radius r to a circular orbit of radius 4r around the same planet. Which describes the new orbit?

- (A) The speed is halved, and E is one quarter as negative as before.
- (B) The speed is halved, and E is four times as negative as before.
- (C) The speed is one quarter of its old value, and E is one quarter as negative as before.
- (D) The speed is doubled, and E is one quarter as negative as before.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v = √(GM/r), so multiplying r by 4 multiplies v by 1/√4 = 1/2. E = −GMm/(2r), so E becomes one quarter of its old value: still negative, but closer to zero. The total energy has **increased**, which is why the move needs energy input.

- (B) gets the speed right but treats E as proportional to r instead of to −1/r.
- (C) uses v ∝ 1/r instead of 1/√r.
- (D) assumes a higher orbit is faster. Gravity is weaker farther out, so less speed is needed for a circle.
</details>

## Question 4 (calculation · core)

Ilmar is a fictional airless moon of mass 2.4 × 10²² kg and radius 1.2 × 10⁶ m.

(a) Starting from conservation of energy, derive the escape speed from Ilmar's surface, and evaluate it.
(b) A capsule is launched straight up at 2.4 km/s. Find its speed when it is very far from Ilmar.
(c) A second capsule is launched at exactly the escape speed. Find its speed when it is 4R from Ilmar's centre, and describe its motion after that.

<details>
<summary>Worked solution</summary>

1. **(a)** Escape means just reaching r → ∞, where U = 0, with K = 0: ½mv_esc² − GMm/R = 0 + 0. So v_esc = √(2GM/R) = √(2 × 6.67 × 10⁻¹¹ × 2.4 × 10²² ÷ 1.2 × 10⁶) = **1.6 × 10³ m/s** (1633 m/s).
2. **(b)** ½mv₀² − GMm/R = ½mv_∞². So v_∞ = √(v₀² − v_esc²) = √(2400² − 1633²) = **1.8 × 10³ m/s**.
3. **(c)** E = 0 throughout: ½mv² = GMm/r, so v = v_esc√(R/r) = 1633 × ½ = **8.2 × 10² m/s** at r = 4R. It keeps moving outward and keeps slowing, its speed tending to zero as r → ∞. It never turns back.

Suggested mark points (3): 1 for the energy equation with U = 0 and K = 0 at infinity and the value; 1 for v_∞ from energy (not 2.4 − 1.6 km/s); 1 for the speed at 4R and the description of speed tending to zero.

Common error: v_∞ = 2.4 − 1.6 = 0.8 km/s. Speeds do not subtract; kinetic energies do.
</details>

## Question 5 (constructed response · core)

A satellite of mass m moves in a circular orbit of radius r around a planet of mass M.

(a) Use Newton's second law to derive an expression for the satellite's kinetic energy K in terms of G, M, m and r.
(b) Show that K = −½U and that E = ½U.
(c) On one set of axes, sketch K, U and E against r for circular orbits of different radii. Label each curve.
(d) A student says: "To move to a larger orbit, the satellite must gain energy, so it ends up moving faster." Explain what is right and wrong in this statement.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Gravity provides the centripetal force: GMm/r² = mv²/r, so mv² = GMm/r and **K = ½mv² = GMm/(2r)**.

**(b)** U = −GMm/r, so K = −½U. Then E = K + U = −½U + U = **½U** = −GMm/(2r).

**(c)** All three curves approach zero as r → ∞. K is positive and falls as 1/r. U is negative and rises towards zero as −1/r. E lies between them, negative, at exactly half of U at every r, and is the mirror image of K in the r-axis (see Figure 1 in the study guide).

**(d)** Right: the total energy E = −GMm/(2r) increases (becomes less negative) as r increases, so energy must be supplied. Wrong: K = GMm/(2r) **decreases**, so the satellite moves more slowly. All the supplied energy, and the lost kinetic energy, go into U, which rises by twice the gain in E.

| Point | What earns it |
|---|---|
| 1 | (a) Sets gravity equal to mv²/r and reaches K = GMm/(2r) |
| 1 | (b) Uses U = −GMm/r to show K = −½U and E = ½U |
| 1 | (c) Correct signs and 1/r shapes for all three curves, all tending to zero |
| 1 | (c) E drawn between U and zero, half of U, mirror of K |
| 1 | (d) Agrees E increases but explains that K and v decrease, with energy going into U |
</details>

## Question 6 (constructed response · stretch)

A 1500 kg satellite orbits the fictional planet Teshun (mass 8.0 × 10²⁴ kg). At its closest point it is 9.0 × 10⁶ m from Teshun's centre, moving at 8.5 × 10³ m/s at right angles to the radius line.

(a) Show that the orbit is not circular and that the satellite is bound to Teshun.
(b) Find the satellite's greatest distance from Teshun's centre and its speed there.
(c) Find the system's total mechanical energy.
(d) At the closest point, a thruster increases the satellite's speed along its direction of motion. Find the smallest increase that lets it escape.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

GM = 6.67 × 10⁻¹¹ × 8.0 × 10²⁴ = 5.34 × 10¹⁴ N·m²/kg.

**(a)** Circular speed at r_p: √(GM/r_p) = √(5.34 × 10¹⁴ ÷ 9.0 × 10⁶) = 7.70 × 10³ m/s. Escape speed there: √2 × 7.70 × 10³ = 10.9 × 10³ m/s. The satellite's 8.5 × 10³ m/s is greater than the circular speed (so it swings outward: not circular) but less than the escape speed (so E < 0: bound).

**(b)** Angular momentum (v ⟂ r at both ends): v_a = v_p r_p/r_a. Energy: ½v_p² − GM/r_p = ½v_p² r_p²/r_a² − GM/r_a. This is a quadratic in 1/r_a. One root is r_a = r_p (the closest point itself); the other is

r_a = r_p ÷ (2GM/(r_p v_p²) − 1) = 9.0 × 10⁶ ÷ (1.641 − 1) = **1.4 × 10⁷ m**

and v_a = 8.5 × 10³ × 9.0 × 10⁶ ÷ 1.404 × 10⁷ = **5.5 × 10³ m/s**.

**(c)** E = ½ × 1500 × (8.5 × 10³)² − 5.34 × 10¹⁴ × 1500 ÷ 9.0 × 10⁶ = 5.42 × 10¹⁰ − 8.89 × 10¹⁰ = **−3.5 × 10¹⁰ J**. (Check at the far end gives the same value.)

**(d)** Escape needs E = 0, so the speed at r_p must reach v_esc = 1.089 × 10⁴ m/s. Increase: 1.089 × 10⁴ − 8.5 × 10³ = **2.4 × 10³ m/s**.

| Point | What earns it |
|---|---|
| 1 | (a) Compares v_p with the circular speed and the escape speed at r_p, with both conclusions |
| 1 | (b) Uses r_p v_p = r_a v_a, justified by v ⟂ r |
| 1 | (b) Uses energy conservation between the two ends |
| 1 | (b) Solves for r_a = 1.4 × 10⁷ m, rejecting the root r_a = r_p, and finds v_a |
| 1 | (c) E = −3.5 × 10¹⁰ J with correct signs |
| 1 | (d) Speed increase from v_esc − v_p |

**Alternative method for (c).** E = −GMm ÷ (r_p + r_a) gives the same value and earns the point if (b) is correct.
</details>

## Question 7 (explanation · stretch)

A student writes: "Gravity always acts at right angles to a satellite's velocity, so it does no work. That is why a satellite's kinetic energy is the same in every orbit. The planet does not move at all."

(a) Using the power P = F · v, explain when the student's first two sentences are true and when they are false.
(b) For an elliptical orbit, state the sign of P while the satellite moves away from the planet, and what this means for its speed.
(c) Comment on the claim that the planet does not move. Estimate Teshun's speed when the satellite in Question 6 is at its closest point.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Gravity points along −r̂, so P = F · v = −(GMm/r²) × (dr/dt): only the radial part of the velocity matters. In a **circular** orbit, dr/dt = 0, so gravity is perpendicular to v, P = 0 and K is constant: the student is right. In an **elliptical** orbit, dr/dt ≠ 0 except at the two ends, so gravity has a component along v and does work. K is not constant, so the claim is false in general.

**(b)** Moving away, dr/dt > 0, so **P < 0**. Gravity does negative work, the speed falls and U rises. Moving inward, P > 0 and the speed rises.

**(c)** The planet does move: the system's momentum is conserved, so the planet and satellite both orbit their common centre of mass, with v_M = (m/M)v. For Question 6: (1500 ÷ 8.0 × 10²⁴) × 8.5 × 10³ ≈ **1.6 × 10⁻¹⁸ m/s**. So "the planet's motion is negligible" is an excellent model, but "does not move at all" is not strictly true.

| Point | What earns it |
|---|---|
| 1 | Writes P in terms of the radial velocity and says it is zero for a circular orbit |
| 1 | Explains that on an ellipse gravity has a component along v, so K changes |
| 1 | P < 0 moving outward, with the speed decreasing |
| 1 | Explains the planet's motion by momentum conservation and estimates about 10⁻¹⁸ m/s |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "What is conserved, and why" in the [study guide](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-study-guide/).
- **Q2, Q3 or Q5 wrong:** revisit "Energy in a circular orbit", Figure 1 and Worked example 1.
- **Q4 wrong:** go through "Escape velocity". Use kinetic energies, not speeds, when you subtract.
- **Q6 incomplete:** work through Worked example 2, writing the angular momentum and energy equations separately before combining them.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-checklist/).
