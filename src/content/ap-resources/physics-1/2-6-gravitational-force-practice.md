---
resourceId: "mb-ap-phys1-2.6-practice"
title: "Gravitational Force: Practice Questions (Physics 1 2.6)"
description: "Seven original Marlbridge practice questions on universal gravitation, field strength, apparent weight in lifts, linearising field data and inertial versus gravitational mass, with worked solutions."
course: "physics-1"
unit: 2
topics: ["2.6"]
resourceType: "practice-questions"
prerequisites:
  - "Newton’s second law and free-body diagrams"
  - "Scientific notation on a calculator"
prerequisiteResources: ["mb-ap-phys1-2.6-study-guide"]
learningObjectives:
  - "Predict factors of change in gravitational force and field strength"
  - "Calculate gravitational forces and field strengths with G, masses and centre-to-centre distances"
  - "Find accelerations from apparent-weight readings and relate them to possible motions"
  - "Linearise field-strength data to test an inverse-square model and find a mass"
  - "Use inertial and gravitational mass and the meaning of weightlessness to evaluate claims"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. G = 6.67 × 10⁻¹¹ N·m²/kg²; g = 9.8 N/kg at Earth’s surface. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-2.6-study-guide", "mb-ap-phys1-2.6-revision-notes", "mb-ap-phys1-2.6-checklist"]
next: "mb-ap-phys1-2.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Measure every distance between centres of mass."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use G = 6.67 × 10⁻¹¹ N·m²/kg² and g = 9.8 N/kg at Earth’s surface. For Earth, use mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m; for the Moon, mass 7.35 × 10²² kg; Earth–Moon distance (centre to centre) 3.84 × 10⁸ m. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Two asteroids attract each other with a gravitational force F. One asteroid’s mass is doubled and the distance between their centres is halved. What is the new force?

- (A) 2F
- (B) 4F
- (C) 8F
- (D) 16F

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** F_g ∝ m₁m₂ / r². Doubling one mass gives × 2. Halving r gives × 1/(½)² = × 4. Together: 2 × 4 = 8, so the new force is 8F.

- (A) includes the mass change but ignores the change in distance.
- (B) treats the force as ∝ 1/r instead of 1/r², so halving r only doubles it (2 × 2).
- (D) squares the mass factor as well as the distance factor. The force is proportional to each mass, not to its square.
</details>

## Question 2 (multiple choice · core)

Planet K has 4 times Earth’s mass and 2 times Earth’s radius. What is the gravitational field strength at its surface?

- (A) 2.5 N/kg
- (B) 9.8 N/kg
- (C) 20 N/kg
- (D) 39 N/kg

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** g = GM / R², so the factor is 4 ÷ 2² = 4 ÷ 4 = 1. The field strength is the same as Earth’s: 9.8 N/kg.

- (A) divides by 2² for the radius but ignores the larger mass (9.8 ÷ 4 ≈ 2.5).
- (C) divides by 2 instead of 2²: it forgets to square the radius (9.8 × 4 ÷ 2 ≈ 20).
- (D) multiplies by 4 for the mass and ignores the radius (9.8 × 4 ≈ 39).
</details>

## Question 3 (multiple choice · core)

A student stands on a scale in a lift. For a few seconds the scale reads **less** than the student’s true weight. Which motion of the lift is possible during that time?

- (A) Moving upward at constant speed
- (B) Moving upward and slowing down
- (C) Moving downward at constant speed
- (D) Moving upward and speeding up

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A reading below mg means F_N < mg, so the net force, and therefore the acceleration, points **down**. A lift moving up while slowing down has a downward acceleration.

- (A) and (C) are constant velocity: a = 0, so F_N = mg and the scale reads the true weight. The direction of motion alone does not change the reading.
- (D) has an upward acceleration, which makes the scale read **more** than mg.
</details>

## Question 4 (calculation · core)

(a) Calculate the gravitational force that Earth exerts on the Moon.
(b) Calculate the Moon’s acceleration due to this force.
(c) Calculate Earth’s gravitational field strength at the Moon’s distance, and explain why it equals your answer to (b).
(d) State the force that the Moon exerts on Earth.

<details>
<summary>Worked solution</summary>

**(a)** F_g = G M_E M_M / r² = (6.67 × 10⁻¹¹)(5.97 × 10²⁴)(7.35 × 10²²) ÷ (3.84 × 10⁸)² = **2.0 × 10²⁰ N**, directed towards Earth’s centre.

**(b)** a = F_g / M_M = 1.98 × 10²⁰ ÷ 7.35 × 10²² = **2.7 × 10⁻³ m/s²**.

**(c)** g = G M_E / r² = (6.67 × 10⁻¹¹)(5.97 × 10²⁴) ÷ (3.84 × 10⁸)² = **2.7 × 10⁻³ N/kg**. They are equal because gravity is the only force on the Moon, so its acceleration equals the field strength where it is.

**(d)** **2.0 × 10²⁰ N**, towards the Moon’s centre: the third-law partner of (a).

Suggested mark points (5): 1 for substituting both masses and the centre-to-centre distance squared; 1 for 2.0 × 10²⁰ N; 1 for 2.7 × 10⁻³ m/s²; 1 for the field value with the "gravity is the only force" reason; 1 for equal size and opposite direction in (d).

Check: the field at the Moon is about 3600 times weaker than at Earth’s surface, and (3.84 × 10⁸ ÷ 6.37 × 10⁶)² ≈ 3600 too. The inverse-square law is consistent.
</details>

## Question 5 (constructed response · core)

Take **+y upward**. A 0.50 kg mass hangs from a spring scale fixed to the ceiling of a lift. The scale shows the force it exerts on the mass. During one trip it reads:

| Stage | 1 | 2 | 3 |
|---|---|---|---|
| Scale reading (N) | 5.6 | 4.9 | 4.2 |

(a) Calculate the acceleration of the mass in each stage.
(b) A student says: "In stage 3 the lift must be moving down." Evaluate this claim.
(c) Predict the scale reading if the lift were in free fall, and explain it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ΣF_y = F_scale − mg = ma_y, with mg = 0.50 × 9.8 = 4.9 N.
Stage 1: a_y = (5.6 − 4.9) ÷ 0.50 = **+1.4 m/s²** (upward).
Stage 2: a_y = (4.9 − 4.9) ÷ 0.50 = **0** (constant velocity or at rest).
Stage 3: a_y = (4.2 − 4.9) ÷ 0.50 = **−1.4 m/s²** (downward).

**(b)** The claim is **not justified**. The reading tells us only that the acceleration is downward. That fits a lift moving down and speeding up, **or** moving up and slowing down. For a trip that starts at rest and speeds up upward in stage 1, stage 3 is most likely the lift slowing to a stop on its way **up**.

**(c)** **0 N**. In free fall a_y = −9.8 m/s², so F_scale = m(g + a_y) = 0.50(9.8 − 9.8) = 0. The mass and the scale fall together, so the spring is not stretched. The mass appears weightless, although the gravitational force on it is still 4.9 N.

| Point | What earns it |
|---|---|
| 1 | Correct second-law equation with mg = 4.9 N |
| 1 | All three accelerations with signs |
| 1 | States that the reading fixes the acceleration, not the velocity |
| 1 | Gives "moving up and slowing down" as a possibility |
| 1 | 0 N with the reason that gravity is the only force (gravity still acts) |
</details>

## Question 6 (data analysis · stretch)

A space probe measures the gravitational field strength at different distances r from the centre of a fictional planet, Veyra. All points are outside the planet.

| r (× 10⁶ m) | 4.0 | 5.0 | 6.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|
| g (N/kg) | 12.5 | 8.00 | 5.56 | 3.13 | 2.00 |

(a) State what to plot to give a straight line if g = GM / r², and what the slope represents.
(b) Use the data to find the mass of Veyra.
(c) A student claims the data show an inverse-square law. Use the data to support the claim in a second, independent way.
(d) Predict g at r = 20 × 10⁶ m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Plot g (vertical) against 1/r² (horizontal). The model predicts a straight line through the origin with **slope GM**.

**(b)** Values of 1/r²: 6.25, 4.00, 2.78, 1.56, 1.00 (× 10⁻¹⁴ m⁻²). A best-fit line has slope ≈ (12.5 − 2.00) ÷ ((6.25 − 1.00) × 10⁻¹⁴) = **2.0 × 10¹⁴ N·m²/kg** (a least-squares fit gives the same to 2 significant figures). M = slope ÷ G = 2.0 × 10¹⁴ ÷ 6.67 × 10⁻¹¹ = **3.0 × 10²⁴ kg**.

**(c)** Calculate g × r² for each point: 2.00, 2.00, 2.00, 2.00, 2.00 (× 10¹⁴ N·m²/kg, to 3 significant figures). The product is constant, which is exactly what g ∝ 1/r² requires. (Equivalently: doubling r from 4.0 to 8.0 × 10⁶ m divides g by 4.0.)

**(d)** r doubles from 10 × 10⁶ m, so g falls by a factor of 4: 2.00 ÷ 4 = **0.50 N/kg**.

| Point | What earns it |
|---|---|
| 1 | g against 1/r², slope = GM |
| 1 | Slope from a best-fit line, about 2.0 × 10¹⁴ N·m²/kg |
| 1 | M ≈ 3.0 × 10²⁴ kg |
| 1 | A valid second test (constant g r², or a doubling-distance ratio) |
| 1 | 0.50 N/kg by factor-of-change or by GM / r² |

Plotting g against r gives a curve, not a straight line, and earns no credit for (a).
</details>

## Question 7 (constructed response · stretch)

(a) A student claims: "A 5 kg ball feels five times the gravitational force of a 1 kg ball, so it must fall with five times the acceleration." Use the ideas of inertial mass and gravitational mass to evaluate the claim. Ignore air resistance.
(b) A space station orbits 300 km above Earth’s surface. Calculate Earth’s field strength there.
(c) Another student says: "Astronauts on the station float because there is no gravity at that height." Use your answer to (b) and the meaning of apparent weight to evaluate this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The first half is right: the gravitational force is proportional to **gravitational mass**, so the 5 kg ball feels five times the force. But the acceleration is a = F / m, where m is the **inertial mass**, which is also five times larger. Because inertial and gravitational mass are equal (confirmed by experiment), the factors cancel: a = (5m g) ÷ (5m) = g for both. Both balls fall at 9.8 m/s². The claim is **incorrect**.

**(b)** r = 6.37 × 10⁶ + 0.30 × 10⁶ = 6.67 × 10⁶ m.
g = (6.67 × 10⁻¹¹)(5.97 × 10²⁴) ÷ (6.67 × 10⁶)² = **9.0 N/kg** (about 91% of the surface value).

**(c)** The claim is **incorrect**. The field is 9.0 N/kg, so a 70 kg astronaut still has a gravitational force of about 630 N on her. Astronauts float because the station and everyone in it are in free fall together: gravity is the only force, so no floor or seat pushes on them. Their **apparent weight** (the normal force) is zero.

| Point | What earns it |
|---|---|
| 1 | Force ∝ gravitational mass; acceleration depends on inertial mass |
| 1 | Equal masses make the factors cancel, so all objects fall with g |
| 1 | r measured from Earth’s centre and g ≈ 9.0 N/kg |
| 1 | States gravity is still large at the station (uses (b)) |
| 1 | Explains floating as zero normal force in free fall (apparent weight zero) |
</details>

## How did you do?

- **Q1 or Q2 wrong:** practise factor-of-change with the inverse-square table in the [study guide](/advanced-course-resources/physics-1/2-6-gravitational-force-study-guide/).
- **Q3 or Q5 wrong:** revisit Worked example 3 and Figure 3. The scale responds to acceleration, not velocity.
- **Q4 wrong:** check that r is centre to centre and that you squared it.
- **Q6 incomplete:** revisit Figure 2 and the idea of plotting against 1/r².
- **Q7 incomplete:** re-read "Inertial mass and gravitational mass" and "Weightlessness and the equivalence principle".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/2-6-gravitational-force-checklist/).
