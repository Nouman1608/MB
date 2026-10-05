---
resourceId: "mb-ap-phys1-2.9-practice"
title: "Circular Motion: Practice Questions (Physics 1 2.9)"
description: "Seven original Marlbridge practice questions on centripetal acceleration, period, hump-backed bridges, banked tracks, a whirling-puck experiment and circular orbits, with worked solutions and suggested mark points."
course: "physics-1"
unit: 2
topics: ["2.9"]
resourceType: "practice-questions"
prerequisites:
  - "Drawing free-body diagrams and applying Newton's second law along one axis"
prerequisiteResources: ["mb-ap-phys1-2.9-study-guide"]
learningObjectives:
  - "Calculate centripetal acceleration from radius and frequency, and the net acceleration when speed changes"
  - "Apply Newton's second law towards the centre for a hump-backed bridge and a frictionless banked track"
  - "Describe the direction of static friction on a banked track below its design speed"
  - "Linearise circular-motion data to test a_c = v²/r and extract a physical quantity from the slope"
  - "Derive and use the period–radius relationship for circular orbits"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-2.9-study-guide", "mb-ap-phys1-2.9-revision-notes", "mb-ap-phys1-2.9-checklist"]
next: "mb-ap-phys1-2.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "In every circular-motion question, choose one axis pointing towards the centre."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. All planets and moons named here are fictional.

## Question 1 (multiple choice · foundation)

The tip of a desk-fan blade is 0.25 m from the axle. The blade turns at a steady 4.0 revolutions per second. What is the size of the centripetal acceleration of the tip?

- (A) 4.0 m/s²
- (B) 25 m/s²
- (C) 160 m/s²
- (D) 9.9 m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The frequency is 4.0 Hz, so the tip travels 4.0 circumferences per second:
v = 2πr f = 2π × 0.25 m × 4.0 Hz = 6.28 m/s. Then a_c = v² / r = (6.28)² ÷ 0.25 = 158 m/s² ≈ 160 m/s².

- (A) uses v = r f = 1.0 m/s, forgetting that one revolution is a distance of 2πr, not r.
- (B) is v / r = 25. It forgets to square the speed (and has the wrong units: 1/s, not m/s²).
- (D) multiplies by r instead of dividing: v² × r = 9.9. A quick unit check ((m/s)² × m = m³/s²) rules it out.
</details>

## Question 2 (multiple choice · core)

Two small moons, X and Y, orbit the same fictional planet in circular orbits. Moon Y's orbital radius is 4 times moon X's. What is the ratio of their periods, T_Y / T_X?

- (A) 2
- (B) 4
- (C) 8
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** For circular orbits around the same central mass, T² ∝ r³. So (T_Y / T_X)² = 4³ = 64, and T_Y / T_X = √64 = 8.

- (A) uses T ∝ √r, a square root in the wrong place.
- (B) assumes T ∝ r. That needs equal speeds, but the outer moon moves more slowly.
- (D) uses T ∝ r², squaring instead of taking T² ∝ r³.

The masses of the moons are not needed: they cancel when gravity supplies the centripetal acceleration.
</details>

## Question 3 (multiple choice · core)

A car drives counterclockwise (seen from above) round a circular test track and is **speeding up**. At one instant it is at the most northern point of the track, moving due west. Which statement best describes the direction of the car's net acceleration at that instant?

- (A) Due south, exactly towards the centre of the track
- (B) Due west, in the direction of motion
- (C) Between south and west: partly towards the centre and partly forward
- (D) Between north and west: partly outward and partly forward

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The car has two perpendicular parts of acceleration. The centripetal part points to the centre, which is due south from the northern point. The tangential part points forward (west) because the car is speeding up. Their vector sum points between south and west.

- (A) would be correct only at constant speed, when the tangential part is zero.
- (B) ignores the change in direction. A car moving on a curve always has a centripetal part.
- (D) points partly outward. Neither part of the acceleration points away from the centre.
</details>

## Question 4 (calculation · core)

A 1200 kg car drives over a hump-backed bridge. The top of the bridge is part of a vertical circle of radius 30 m.

(a) Find the greatest speed at which the car can pass over the top without losing contact with the road.
(b) The car crosses the top at 12 m/s. Find the normal force from the road on the car.

<details>
<summary>Worked solution</summary>

At the top, the centre of the circle is **below** the car. Take **"towards the centre" (downward) as positive**. Weight mg points down (inward); the normal force N points up (outward).

**(a)** Newton's second law inward: mg − N = m v² / r. The car loses contact when N falls to zero, so the greatest speed has mg = m v² / r:
v_max = √(g r) = √(9.8 × 30) = √294 = **17 m/s**.

**(b)** N = m(g − v² / r) = 1200 kg × (9.8 − 144 ÷ 30) m/s² = 1200 × (9.8 − 4.8) = 1200 × 5.0 = **6.0 × 10³ N**, upward.

**Check.** The normal force (6000 N) is less than the weight (11 760 N). It must be, because the net force has to point down, towards the centre.

Suggested mark points (4): 1 for a correct inward equation with mg and N in opposite directions; 1 for setting N = 0 at the greatest speed; 1 for 17 m/s; 1 for 6.0 × 10³ N with direction.

Common error: writing N − mg = m v²/r, as at the bottom of a dip. That gives N = 17 520 N, more than the weight, but on a crest the net force must point down.
</details>

## Question 5 (calculation and reasoning · core)

The track of a cycling arena is banked at 40° to the horizontal on a curve of radius 25 m. Treat each cyclist and bicycle as a single object.

(a) Show that the speed at which a cyclist needs no friction to follow the curve is about 14 m/s.
(b) A cyclist rides the curve at 10 m/s. State the direction of the static friction force on the tyres, and explain why without calculating its size.
(c) A second arena has the same bank angle but twice the radius. By what factor is its no-friction speed larger?

<details>
<summary>Worked solution</summary>

**(a)** With no friction: vertical N cos θ = mg; inward N sin θ = m v² / r. Dividing gives tan θ = v² / (r g), so
v = √(r g tan θ) = √(25 × 9.8 × tan 40°) = √(25 × 9.8 × 0.839) = √206 = **14.3 m/s ≈ 14 m/s**.

**(b)** Friction acts **up the slope**. At 10 m/s the cyclist needs only m v²/r = m × 4.0 m/s² inward, but the horizontal part of the normal force on this steep bank would provide more than that (it gives m × 8.2 m/s² when friction is zero). Without friction the cyclist would slide down and in towards the centre, so static friction acts up the slope to prevent it.

**(c)** From v = √(r g tan θ), with θ and g unchanged, v ∝ √r. Doubling r multiplies v by **√2 ≈ 1.4** (about 20 m/s).

Suggested mark points (5): 1 for both component equations (N cos θ = mg and N sin θ = m v²/r); 1 for tan θ = v²/(rg) or the equivalent, leading to about 14 m/s; 1 for friction up the slope; 1 for the reason (needed inward force is less than N sin θ would give, so it tends to slide down); 1 for √2.

With friction on a bank, the course asks only for descriptions like part (b).
</details>

## Question 6 (experimental · stretch)

A student tests whether the net inward force on an object moving in a circle equals m v² / r. A puck of mass 0.080 kg (measured on a balance) glides on an air table, tied by a light string to a force sensor at the centre. The radius is kept at 0.50 m. For each run, the student times 10 revolutions and reads the string tension F.

| Run | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Time for 10 revolutions (s) | 16.0 | 13.0 | 11.0 | 9.5 | 8.0 |
| Tension F (N) | 0.63 | 0.92 | 1.32 | 1.73 | 2.48 |

(a) Explain why the student times 10 revolutions rather than one.
(b) State what to plot on each axis to get a straight line if F = m v² / r is true, and state what the slope should equal.
(c) Process the data and find the slope of your graph.
(d) Use the slope to find the mass of the puck, and state whether the data support the relationship.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Reaction time adds roughly the same error to every timing. Spreading that error over 10 revolutions makes the error in each period about ten times smaller.

**(b)** Plot **F (vertical axis, N)** against **v² (horizontal axis, m²/s²)**. If F = (m / r) v², the points lie on a straight line through the origin with **slope m / r**.

**(c)** For each run: T = time ÷ 10, then v = 2πr / T.

| Run | T (s) | v (m/s) | v² (m²/s²) | F (N) |
|---|---|---|---|---|
| 1 | 1.60 | 1.96 | 3.86 | 0.63 |
| 2 | 1.30 | 2.42 | 5.84 | 0.92 |
| 3 | 1.10 | 2.86 | 8.16 | 1.32 |
| 4 | 0.95 | 3.31 | 10.94 | 1.73 |
| 5 | 0.80 | 3.93 | 15.42 | 2.48 |

Using points far apart on the best-fit line (here close to runs 1 and 5):
slope = (2.48 − 0.63) N ÷ (15.42 − 3.86) m²/s² = 1.85 ÷ 11.56 = **0.160 kg/m**. A computer best fit gives 0.160 kg/m with an intercept of almost zero.

**(d)** slope = m / r, so m = slope × r = 0.160 kg/m × 0.50 m = **0.080 kg**. This matches the balance reading, and the points lie close to a straight line through the origin, so the data **support** F = m v² / r.

| Point | What earns it |
|---|---|
| 1 | Timing many revolutions reduces the effect of reaction-time error on each period |
| 1 | F against v² (or an equivalent linear pair, such as F against 1/T²), with the slope identified |
| 1 | Correct T, v and v² values from v = 2πr / T |
| 1 | Slope about 0.16 kg/m from points on the best-fit line, with unit |
| 1 | Mass about 0.080 kg from slope × r, compared with the balance value to reach a conclusion |

**Alternative method.** Plotting F against 1/T² also gives a straight line, with slope 4π² m r. Here that is 4π² × 0.080 × 0.50 = 1.58 N·s². It earns full credit when the slope is linked to m correctly. Plotting F against v gives a curve and earns no credit for (b).
</details>

## Question 7 (constructed response · stretch)

A small moon of mass m moves in a circular orbit of radius r around a fictional planet of mass M, with period T.

(a) Starting from Newton's second law and the law of gravitation, derive an expression for T in terms of r, M and physical constants.
(b) A student says: "A second moon ten times heavier, in an orbit of the same radius, will have a shorter period, because the planet pulls on it ten times harder." Evaluate this claim using your answer to (a).
(c) The moon's orbit has r = 2.0 × 10⁸ m and T = 5.0 × 10⁵ s. Find the mass of the planet.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Gravity is the only force, and it points to the centre, so:
G M m / r² = m v² / r. Cancel m and one r: v² = G M / r.
For constant speed, v = 2πr / T, so 4π² r² / T² = G M / r, giving
T² = 4π² r³ / (G M), or **T = 2π √(r³ / (G M))**.

**(b)** The claim is **incorrect**. The heavier moon does feel a gravitational force ten times larger, but it also has ten times the mass, so its acceleration (F ÷ m) is the same. In (a) the moon's mass m cancels, and T depends only on r and M. Same radius and same planet means the **same period**.

**(c)** M = 4π² r³ / (G T²) = 39.5 × (2.0 × 10⁸)³ ÷ [(6.67 × 10⁻¹¹) × (5.0 × 10⁵)²] = (3.16 × 10²⁶) ÷ 16.7 = **1.9 × 10²⁵ kg**.

| Point | What earns it |
|---|---|
| 1 | Sets the gravitational force equal to m v² / r (gravity as the only inward force) |
| 1 | Substitutes v = 2πr / T and reaches T² = 4π² r³ / (G M) |
| 1 | States the claim is wrong because m cancels (equal force-to-mass ratio), so T is unchanged |
| 1 | M = 1.9 × 10²⁵ kg with unit |

An answer to (b) that says only "mass doesn't matter" without referring to the cancellation or to equal acceleration earns no credit for the third point.
</details>

## How did you do?

- **Q1 wrong:** re-read "Period and frequency" in the [study guide](/advanced-course-resources/physics-1/2-9-circular-motion-study-guide/).
- **Q2 or Q7 wrong:** go back to "Circular orbits and Kepler's third law".
- **Q3 wrong:** study Figure 1(b) and "Tangential acceleration and the net acceleration".
- **Q4 wrong:** revisit "Vertical loops and the minimum speed at the top" and Worked example 2. Check which way the centre is.
- **Q5 incomplete:** work through Figure 2 and Worked example 1, including the friction bullets.
- **Q6 incomplete:** make sure you can say *why* a graph should be straight and what its slope means.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/2-9-circular-motion-checklist/).
