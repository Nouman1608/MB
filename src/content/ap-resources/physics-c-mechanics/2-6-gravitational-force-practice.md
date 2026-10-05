---
resourceId: "mb-ap-physcm-2.6-practice"
title: "Gravitational Force: Practice Questions (Physics C: Mechanics 2.6)"
description: "Seven original Marlbridge calculus-based practice questions on gravitation: factors of change, apparent weight, fields inside spheres, two-body forces, a derivation and drop data."
course: "physics-c-mechanics"
unit: 2
topics: ["2.6"]
resourceType: "practice-questions"
prerequisites:
  - "Newton’s second law in components"
  - "Volume of a sphere and working with powers of ten"
prerequisiteResources: ["mb-ap-physcm-2.6-study-guide"]
learningObjectives:
  - "Predict factors of change in gravitational force and field"
  - "Find apparent weight from the normal force in an accelerating system"
  - "Use the partial-mass idea and the shell theorem to find fields inside and outside spheres"
  - "Find where two gravitational fields cancel"
  - "Find a planet’s field and mass from free-fall data, and explain weightlessness using the two kinds of mass"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "G = 6.67 × 10⁻¹¹ N·m²/kg²; g = 9.8 N/kg at Earth’s surface; Earth’s mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.6-study-guide", "mb-ap-physcm-2.6-revision-notes", "mb-ap-physcm-2.6-checklist"]
next: "mb-ap-physcm-2.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Distances in the law are always center to center."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use G = 6.67 × 10⁻¹¹ N·m²/kg², g = 9.8 N/kg at Earth's surface, Earth's mass 5.97 × 10²⁴ kg and Earth's radius 6.37 × 10⁶ m. Planets, moons and asteroids named here are fictional, and all spheres are uniform unless stated. Air resistance is negligible. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Two small spheres attract each other with a gravitational force F. One sphere is replaced by another with twice the mass, and the distance between their centers is tripled. What is the new force?

- (A) 2F/3
- (B) 2F/9
- (C) 9F/2
- (D) 6F

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** F ∝ m₁m₂/r². Doubling one mass gives × 2; tripling r gives × 1/3² = 1/9. Together: × 2/9.

- (A) divides by 3 instead of 3², treating the law as inverse, not inverse square.
- (C) inverts the whole factor, as if the force grew with distance.
- (D) multiplies by the distance factor instead of dividing.
</details>

## Question 2 (multiple choice · core)

Take **+y upward**. A lift is moving **downward** and **slowing down**. A passenger of mass m stands on a scale. Which statement about the scale reading N is correct?

- (A) N < mg, because the lift is moving downward.
- (B) N = mg, because the lift's speed is changing steadily.
- (C) N > mg, because the acceleration is upward.
- (D) N = 0, because the passenger and lift fall together.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Moving down (v_y < 0) and slowing down means the acceleration is opposite to the velocity, so a_y > 0. Then N = m(g + a_y) > mg.

- (A) uses the direction of the velocity. Apparent weight depends on the acceleration.
- (B) confuses constant acceleration with zero acceleration. N = mg only when a_y = 0.
- (D) describes free fall, where gravity is the only force. Here the floor is still pushing up.
</details>

## Question 3 (multiple choice · core)

Brevan is a planet of uniform density and radius R. A probe of mass m weighs W on its surface. A narrow shaft is drilled to the center. What is the gravitational force on the probe at the bottom of a shaft that reaches r = R/2?

- (A) W/8
- (B) W/4
- (C) W/2
- (D) 4W

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Only the partial mass within r = R/2 counts: M(½)³ = M/8. Then F = G(M/8)m/(R/2)² = (4/8)GMm/R² = W/2. Inside a uniform sphere, F ∝ r.

- (A) uses the partial mass M/8 but keeps the distance as R.
- (B) scales the force by (r/R)², as if the force grew with the square of r.
- (D) uses the whole mass at r = R/2, ignoring the shell theorem for the outer layers.
</details>

## Question 4 (calculation · core)

Take **+x from asteroid A toward asteroid B**. Two fictional asteroids, A (3.0 × 10¹² kg) and B (8.0 × 10¹¹ kg), are far from other bodies. Their centers are 2.0 km apart. Treat each as a uniform sphere.

(a) Find the size of the gravitational force each exerts on the other.
(b) Find each asteroid's acceleration, and explain why they differ although the forces are equal.
(c) Find the point on the line between their centers where the net gravitational field is zero.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** F_g = Gm_Am_B/r² = (6.67 × 10⁻¹¹)(3.0 × 10¹²)(8.0 × 10¹¹) ÷ (2.0 × 10³)² = **4.0 × 10⁷ N**.

**(b)** a_A = 4.0 × 10⁷ ÷ 3.0 × 10¹² = **1.3 × 10⁻⁵ m/s²** (toward B, +x). a_B = 4.0 × 10⁷ ÷ 8.0 × 10¹¹ = **5.0 × 10⁻⁵ m/s²** (toward A, −x). The forces are a third-law pair, equal in size, but a = F/m, so the less massive asteroid accelerates 3.75 times more.

**(c)** Let the point be a distance x from A. The fields cancel when Gm_A/x² = Gm_B/(d − x)², so x/(d − x) = √(m_A/m_B) = √3.75 = 1.94. Then x = 2.0 km × 1.94 ÷ 2.94 = **1.3 km from A** (0.68 km from B). The point is nearer the smaller mass, as it must be.

| Point | What earns it |
|---|---|
| 1 | (a) 4.0 × 10⁷ N with r in metres |
| 1 | (b) Both accelerations from a = F/m, with directions |
| 1 | (b) Equal forces by the third law, unequal accelerations because the masses differ |
| 1 | (c) Equates the two fields and uses the square root of the mass ratio to reach 1.3 km from A |

Common error in (c): using the mass ratio without the square root puts the point 1.6 km from A, where the fields do not cancel.
</details>

## Question 5 (constructed response · core)

A uniform solid sphere has mass M, radius R and density ρ. A small object of mass m is at distance r from the center.

(a) For r < R, write the mass enclosed within radius r in terms of ρ and r, then in terms of M, r and R.
(b) Derive an expression for the size of the gravitational force on the object for r < R, and show it has the form F = kr. Give k.
(c) Sketch the field strength g against r from r = 0 to r = 3R. Label the value at r = R as g_s and give the value at 2R and 3R.
(d) The same mass M is instead spread as a thin shell of radius R. State how your sketch changes, and why.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** M_partial = ρ(4/3)πr³. Since M = ρ(4/3)πR³, M_partial = **M r³/R³**.

**(b)** By the shell theorem, the mass outside radius r exerts no net force. The enclosed mass acts as if at the center: F = G M_partial m / r² = G(Mr³/R³)m / r² = **(GMm/R³) r**. So F = kr with **k = GMm/R³** (directed toward the center, F = −kr as a vector).

**(c)** A straight line from (0, 0) to (R, g_s), where g_s = GM/R². Then a curve falling as 1/r²: **g_s/4 at 2R** and **g_s/9 at 3R**. The graph is continuous at r = R, with its peak there.

**(d)** Inside (r < R), g = 0 everywhere, because the net force inside a thin shell is zero. At r = R the field jumps to g_s. Outside, the curve is unchanged, because a shell acts like a point mass at its center for points outside it.

| Point | What earns it |
|---|---|
| 1 | (a) Enclosed mass in both forms |
| 1 | (b) Uses the shell theorem to ignore the outer mass |
| 1 | (b) Reaches F = (GMm/R³)r and identifies k |
| 1 | (c) Linear rise to a peak at R, then 1/r² fall with g_s/4 and g_s/9 shown |
| 1 | (d) Zero inside and identical outside, each with its reason |

</details>

## Question 6 (data analysis · stretch)

Take **+y downward** for the drop. An astronaut on Orrin, a fictional planet with no atmosphere and radius 4.2 × 10⁶ m, releases a ball from rest at measured heights and times each fall (fictional data):

| h (m) | 0.50 | 1.00 | 1.50 | 2.00 | 2.50 |
|---|---|---|---|---|---|
| t (s) | 0.52 | 0.74 | 0.90 | 1.04 | 1.16 |

(a) Explain why the ball's acceleration can be treated as constant and equal to the field strength at Orrin's surface.
(b) State what to plot against what to get a straight line through the origin, and how to find g from its slope.
(c) Use the data to find g on Orrin.
(d) Find the mass of Orrin.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** There is no atmosphere, so gravity is the only force on the ball, and its acceleration equals the local field strength. The heights (at most 2.5 m) are tiny compared with the planet's radius (4.2 × 10⁶ m), so r hardly changes and the field is constant.

**(b)** For constant acceleration from rest, h = ½gt². Plot **h (vertical) against t² (horizontal)**: a straight line through the origin with slope g/2. So g = 2 × slope.

**(c)** t² = 0.270, 0.548, 0.810, 1.08, 1.35 s². A best-fit line through the origin gives slope ≈ 1.85 m/s², so **g ≈ 3.7 m/s² (3.7 N/kg)**.

**(d)** g = GM/R², so M = gR²/G = 3.7 × (4.2 × 10⁶)² ÷ (6.67 × 10⁻¹¹) = **9.8 × 10²³ kg**.

| Point | What earns it |
|---|---|
| 1 | (a) Gravity is the only force, so a = g |
| 1 | (a) Heights negligible compared with R, so g is constant |
| 1 | (b) h against t², slope = g/2 |
| 1 | (c) g ≈ 3.7 N/kg from the slope (accept 3.6–3.8) |
| 1 | (d) M = gR²/G ≈ 9.8 × 10²³ kg (carry forward g from (c)) |

**Alternative for (c).** Calculating g = 2h/t² for each drop and averaging gives the same answer and earns the point, but the graph also shows whether the line passes through the origin (a timing delay would give an intercept).
</details>

## Question 7 (explanation · stretch)

A spacecraft orbits Earth 400 km above the surface. Inside, a 70 kg astronaut floats beside a tool, a water drop and a sealed food packet. A student says: "They float because there is no gravity up there."

(a) Calculate the gravitational field strength at the spacecraft's height, and the gravitational force on the astronaut.
(b) Use the idea of apparent weight to explain why the astronaut floats.
(c) Explain why the tool, the drop and the packet all float together with the astronaut, even though their masses are very different. Your answer should refer to inertial mass and gravitational mass.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** r = 6.37 × 10⁶ + 4.0 × 10⁵ = 6.77 × 10⁶ m. g = GM/r² = (6.67 × 10⁻¹¹)(5.97 × 10²⁴) ÷ (6.77 × 10⁶)² = **8.7 N/kg**, about 89% of the surface value. Force on the astronaut: 70 × 8.69 = **610 N**. The student's claim is wrong: gravity is far from zero.

**(b)** Apparent weight is the normal force from the floor or a seat. In orbit, gravity is the only force on the astronaut and on the spacecraft: both are in free fall together with the same acceleration. The floor does not need to push on the astronaut, so N = 0 and the astronaut appears weightless.

**(c)** For each object, a = F_g/m_inertial = (GM m_grav/r²)/m_inertial. Experiments show that m_grav = m_inertial, so the mass cancels and every object has the same acceleration, GM/r². Having the same acceleration as the cabin, none of them moves relative to it.

| Point | What earns it |
|---|---|
| 1 | (a) Uses r = R + h and finds g ≈ 8.7 N/kg and F ≈ 610 N |
| 1 | (b) Gravity is the only force (free fall), so apparent weight (normal force) is zero |
| 1 | (c) Writes the acceleration with inertial and gravitational mass |
| 1 | (c) States that they are equal, so all objects share the same acceleration and stay together |

</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Newton's law of universal gravitation" in the [study guide](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-study-guide/). Square r, and measure it center to center.
- **Q2 or Q7(b) wrong:** revisit "Apparent weight and weightlessness" and Worked example 2. Find the direction of the acceleration first.
- **Q3 or Q5 wrong:** go through "Spheres and shells", Figure 1 and Worked example 3.
- **Q6 or Q7 incomplete:** link the field to free-fall acceleration ("The gravitational field") and look again at "Inertial mass and gravitational mass".

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-checklist/).
