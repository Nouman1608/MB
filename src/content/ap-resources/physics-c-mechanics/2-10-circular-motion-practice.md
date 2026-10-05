---
resourceId: "mb-ap-physcm-2.10-practice"
title: "Circular Motion: Practice Questions (Physics C: Mechanics 2.10)"
description: "Seven original Marlbridge practice questions on circular motion: factors of change, loops, a centrifuge, a moon's orbit, an icy banked curve, a conical pendulum experiment and a braking kart."
course: "physics-c-mechanics"
unit: 2
topics: ["2.10"]
resourceType: "practice-questions"
prerequisites:
  - "Free-body diagrams and Newton's second law along chosen axes"
prerequisiteResources: ["mb-ap-physcm-2.10-study-guide"]
learningObjectives:
  - "Predict factors of change in centripetal acceleration from its dependence on speed and radius"
  - "Identify the forces that provide centripetal acceleration and write the radial equation"
  - "Derive the minimum speed on a banked curve with friction"
  - "Use Kepler's third law to find a central mass and to compare orbits"
  - "Combine tangential and centripetal acceleration and justify the direction of the net force"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Calculator in degrees. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.10-study-guide", "mb-ap-physcm-2.10-revision-notes", "mb-ap-physcm-2.10-checklist"]
next: "mb-ap-physcm-2.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Radial equations take + toward the centre unless a question says otherwise."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. The planet and moons in Question 4 are invented. Use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A cyclist rides round a circular track. On a second lap she rides at twice the speed on a lane with half the radius. By what factor does her centripetal acceleration change?

- (A) 1 (no change)
- (B) 2
- (C) 4
- (D) 8

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** a_c = v²/r. Doubling v multiplies v² by 4; halving r doubles 1/r. Total factor 4 × 2 = 8.

- (A) treats the two changes as cancelling, as if a_c depended on v/r.
- (B) forgets to square the speed and ignores the change in radius, so it counts only one factor of 2.
- (C) squares the speed correctly but ignores the change in radius.
</details>

## Question 2 (multiple choice · core)

A small cart goes round the inside of a vertical loop. At the top it moves at exactly the minimum speed needed to stay on the track. Which forces act on the cart at that point?

- (A) Gravity only, downward.
- (B) Gravity downward and a normal force downward.
- (C) Gravity downward and a centripetal force downward.
- (D) Gravity downward and a normal force upward, equal in size.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At the top, N + mg = mv²/r. The minimum speed is when N = 0, so gravity alone provides the centripetal acceleration and v = √(gr).

- (B) is true at speeds above the minimum, when the track still pushes down on the cart.
- (C) draws "centripetal force" as an extra force. It is the name for the inward net force, here just gravity.
- (D) gives zero net force, so the cart could not accelerate toward the centre. Also, on the inside of the loop the track can only push down.
</details>

## Question 3 (multiple choice · core)

A laboratory centrifuge spins a sample tube at 50 revolutions per second. The sample is 0.10 m from the axis. What is the size of its centripetal acceleration?

- (A) 2.5 × 10² m/s²
- (B) 1.6 × 10³ m/s²
- (C) 9.9 × 10³ m/s²
- (D) 3.1 × 10¹ m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** v = 2πrf = 2π × 0.10 × 50 = 31.4 m/s. a_c = v²/r = 31.4² ÷ 0.10 = 9.9 × 10³ m/s² (about 1000 times g). Equivalently a_c = 4π²rf².

- (A) uses v = rf, leaving out 2π: rf² = 250 m/s².
- (B) puts in only one factor of 2π: 2πrf² ≈ 1.6 × 10³ m/s².
- (D) is the speed, 31 m/s, not the acceleration.
</details>

## Question 4 (calculation · core)

A moon moves in a circular orbit of radius 3.2 × 10⁸ m around the invented planet Veyra, with a period of 6.0 days.

(a) Starting from Newton's second law, derive T² = 4π²r³/(GM).
(b) Find the mass of Veyra.
(c) A second moon orbits Veyra at 8.0 × 10⁸ m. Predict its period in days without calculating M again.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Gravity is the only force, toward the centre: GMm/r² = mv²/r, so v² = GM/r. With v = 2πr/T: 4π²r²/T² = GM/r, which gives **T² = 4π²r³/(GM)**.

**(b)** T = 6.0 × 86 400 = 5.18 × 10⁵ s. M = 4π²r³/(GT²) = 4π² × (3.2 × 10⁸)³ ÷ (6.67 × 10⁻¹¹ × (5.18 × 10⁵)²) = **7.2 × 10²⁵ kg**.

**(c)** T ∝ r^(3/2). The radius ratio is 8.0/3.2 = 2.5, so T₂ = 6.0 × 2.5^(3/2) = **24 days**.

| Point | What earns it |
|---|---|
| 1 | (a) Gravity set equal to mv²/r, with m cancelling |
| 1 | (a) Substitutes v = 2πr/T and rearranges |
| 1 | (b) Converts days to seconds |
| 1 | (b) 7.2 × 10²⁵ kg |
| 1 | (c) Uses T ∝ r^(3/2) to get 24 days |

Common error: leaving T in days in (b), which gives a mass about 7.5 × 10⁹ times too large.
</details>

## Question 5 (constructed response · core)

A ring road has an icy bend of radius 60 m, banked at 20°. The coefficient of static friction between the tyres and the ice is 0.10. Take +x horizontal toward the centre and +y up.

(a) A car moves round the bend at the lowest speed at which it does not slide. Draw its free-body diagram and state the direction of friction.
(b) Derive an expression for this lowest speed in terms of r, g, θ and μ_s.
(c) Calculate the lowest speed, and the speed that needs no friction.
(d) Describe what happens to a car moving more slowly than the lowest speed you found in (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three forces: weight mg straight down; normal force N perpendicular to the road, tilted θ from the vertical toward the centre; static friction f **up the slope**, because a slow car tends to slide down and in.

**(b)** With f = μ_s N up the slope:
- x: N sin θ − μ_s N cos θ = mv²/r
- y: N cos θ + μ_s N sin θ − mg = 0

Dividing: **v_min² = rg(sin θ − μ_s cos θ)/(cos θ + μ_s sin θ)**.

**(c)** v_min² = 60 × 9.8 × (0.3420 − 0.0940)/(0.9397 + 0.0342) = 149.8 m²/s², so **v_min = 12 m/s**. No friction: v² = rg tan 20°, so **v = 15 m/s**.

**(d)** Below 12 m/s, even maximum static friction up the slope cannot stop the car sliding down the bank toward the inside. It slips inward and down. (Here tan 20° = 0.36 is bigger than μ_s = 0.10, so a parked car would slide too.)

| Point | What earns it |
|---|---|
| 1 | (a) Three correct forces with friction up the slope, justified |
| 1 | (b) Both component equations with correct signs |
| 1 | (b) Eliminates N to reach the expression |
| 1 | (c) 12 m/s and 15 m/s |
| 1 | (d) Car slides down and in, linked to friction reaching its maximum |
</details>

## Question 6 (experimental · stretch)

A student whirls a small bob on a string as a conical pendulum. For each run she measures the vertical height h from the bob's circle up to the point of suspension, and times 10 revolutions to find the period T.

| h (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| T (s) | 0.90 | 1.27 | 1.55 | 1.80 | 2.01 |

(a) Show that a conical pendulum has period T = 2π√(h/g).
(b) State what to plot to get a straight line through the origin, and what its slope represents.
(c) Use the data to find g.
(d) Explain why the student times 10 revolutions rather than one, and name one other source of uncertainty.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Vertical: F_T cos θ = mg. Toward the centre: F_T sin θ = mv²/r. Divide: tan θ = v²/(rg). Use v = 2πr/T and r = h tan θ: tan θ = 4π²r/(gT²), so T² = 4π²r/(g tan θ) = 4π²h/g. Hence **T = 2π√(h/g)**: independent of mass and of string length on its own.

**(b)** Plot **T² (s²) against h (m)**. The slope is 4π²/g.

**(c)** T² values: 0.81, 1.61, 2.40, 3.24, 4.04 s². A best-fit line has slope ≈ 4.04 s²/m (for example (4.04 − 0.81) ÷ 0.80 = 4.04). So g = 4π²/4.04 ≈ **9.8 m/s²**.

**(d)** Reaction time adds a fixed error to each timing, so timing 10 revolutions makes that error a tenth as large per period. Other sources: measuring h while the bob moves; the circle not staying horizontal; the bob slowing because of air resistance.

| Point | What earns it |
|---|---|
| 1 | (a) Both component equations for the bob |
| 1 | (a) Eliminates θ and r to reach T = 2π√(h/g) |
| 1 | (b) T² against h, slope 4π²/g |
| 1 | (c) g ≈ 9.8 m/s² from the slope (accept 9.6–10.0) |
| 1 | (d) Reaction-time reasoning plus one other valid source |
</details>

## Question 7 (explanation · stretch)

A 150 kg go-kart (with driver) brakes while going round a circular bend of radius 30 m. Its speed is v(t) = (12 m/s) − (2.0 m/s²)t.

A student says: "The kart is going round a circle, so the net force on it points to the centre."

(a) At t = 3.0 s, find the tangential and centripetal accelerations.
(b) Find the size of the net force on the kart and its angle from the inward radius.
(c) Evaluate the student's claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** a_t = dv/dt = **−2.0 m/s²** (against the velocity). At 3.0 s, v = 6.0 m/s, so a_c = 6.0² ÷ 30 = **1.2 m/s²** toward the centre.

**(b)** |a| = √(1.2² + 2.0²) = 2.33 m/s², so |F_net| = 150 × 2.33 ≈ **350 N**. tan φ = 2.0/1.2, so φ ≈ **59°** from the inward radius, tilted backward (against the direction of travel).

**(c)** The claim is false here. The net force points to the centre only if the speed is constant. Braking needs a force component against the velocity (300 N), while the inward component (180 N) keeps the kart on the circle. The net force is the vector sum, so it points between "inward" and "backward", closer to backward at this moment.

| Point | What earns it |
|---|---|
| 1 | (a) a_t = −2.0 m/s² from the derivative |
| 1 | (a) a_c = 1.2 m/s² using v at 3.0 s |
| 1 | (b) 350 N and about 59° from the radius, backward |
| 1 | (c) Rejects the claim: inward only at constant speed, with the two components named |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Period and frequency" and the derivation of a_c in the [study guide](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/).
- **Q2 or Q5 wrong:** revisit "Where the inward force comes from", the loop section and Worked example 2.
- **Q4 wrong:** go through "Circular orbits and Kepler's third law" and Worked example 3.
- **Q6 or Q7 incomplete:** your reasoning must say *why* a graph is straight or *why* a claim fails. Compare with Figure 1 and Worked example 1.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-checklist/).
