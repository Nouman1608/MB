---
resourceId: "mb-ap-physcm-1.1-practice"
title: "Scalars and Vectors: Practice Questions (Physics C: Mechanics 1.1)"
description: "Seven original Marlbridge practice questions on scalars and vectors: components, unit vectors, resultants in two and three dimensions, a derivation and distance versus displacement."
course: "physics-c-mechanics"
unit: 1
topics: ["1.1"]
resourceType: "practice-questions"
prerequisites:
  - "Right-angled triangle trigonometry and Pythagoras"
prerequisiteResources: ["mb-ap-physcm-1.1-study-guide"]
learningObjectives:
  - "Classify quantities as scalars or vectors"
  - "Resolve a vector given as a magnitude and direction into components"
  - "Find magnitudes and unit vectors in three dimensions"
  - "Add several vectors by components and state the resultant as a magnitude and direction"
  - "Derive general results about vector magnitudes and resultants"
  - "Compare distance with displacement, and average speed with average velocity"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculator in degree mode. Give answers to 3 significant figures unless told otherwise"
related: ["mb-ap-physcm-1.1-study-guide", "mb-ap-physcm-1.1-revision-notes", "mb-ap-physcm-1.1-checklist"]
next: "mb-ap-physcm-1.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes. Sketch each vector before you calculate."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Unless a question says otherwise, **+x is east, +y is north and +z is up**. Angles are in degrees. Round final answers to 3 significant figures unless told otherwise. A calculator is used for arithmetic and trigonometry.

## Question 1 (multiple choice · foundation)

Which list contains **only** vector quantities?

- (A) distance, displacement, velocity
- (B) speed, velocity, acceleration
- (C) position, displacement, acceleration
- (D) displacement, time, velocity

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Position, displacement and acceleration all need a direction to describe them fully, so all three are vectors.

- (A) includes **distance**, a path length with no direction. It is a scalar.
- (B) includes **speed**, the size of a velocity without its direction. It is a scalar.
- (D) includes **time**. Asking "which way is 4 s?" has no answer, so time is a scalar.
</details>

## Question 2 (multiple choice · core)

A boat moves with velocity of magnitude 8.0 m/s directed **40° west of south**. Which is its velocity in unit vector notation?

- (A) (−6.1 î − 5.1 ĵ) m/s
- (B) (−5.1 î − 6.1 ĵ) m/s
- (C) (+5.1 î − 6.1 ĵ) m/s
- (D) (−5.1 î + 6.1 ĵ) m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The angle is measured from south (−y). The component next to the angle is along y: v_y = −8.0 cos 40° = −6.1 m/s (south, so negative). The component opposite the angle is along x: v_x = −8.0 sin 40° = −5.1 m/s (west, so negative). Check: √(5.14² + 6.13²) = 8.0 m/s.

- (A) uses cosine for x and sine for y, as if the angle were measured from the x-axis. The magnitude is still 8.0 m/s, so a magnitude check alone does not catch this; a sketch does.
- (C) gives the x-component the wrong sign. West is −x.
- (D) gives the y-component the wrong sign. South is −y.
</details>

## Question 3 (multiple choice · core)

A displacement is d = (6.0 î + 2.0 ĵ − 3.0 k̂) m. Which is the unit vector in the direction of d?

- (A) 0.55 î + 0.18 ĵ − 0.27 k̂
- (B) 1.0 î + 1.0 ĵ − 1.0 k̂
- (C) 0.12 î + 0.041 ĵ − 0.061 k̂
- (D) 0.86 î + 0.29 ĵ − 0.43 k̂

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** |d| = √(36 + 4.0 + 9.0) = √49 = 7.0 m. Divide each component by 7.0 m: 6.0/7.0 = 0.86, 2.0/7.0 = 0.29, −3.0/7.0 = −0.43. Check: 0.857² + 0.286² + 0.429² = 1.00, and the metres cancel.

- (A) divides by 11, the sum of the sizes of the components. Its magnitude is 0.64, not 1.
- (B) keeps only the signs. Its magnitude is √3 ≈ 1.7, and it points in a different direction from d.
- (C) divides by |d|² = 49. Its magnitude is 0.14, not 1.
</details>

## Question 4 (calculation · core)

A hiker makes three straight walks in turn:

- d₁ = (250 î + 100 ĵ) m
- d₂: 300 m at 60.0° north of west
- d₃: 150 m due south

Find (a) the resultant displacement R in unit vector notation, (b) its magnitude and direction, and (c) the total distance walked.

<details>
<summary>Worked solution</summary>

1. **Components of d₂.** The angle is measured from west (−x). x-component −300 cos 60.0° = −150 m; y-component +300 sin 60.0° = +259.8 m.
2. **Components of d₃.** d₃ = (0 î − 150 ĵ) m.
3. **(a)** R_x = 250 − 150 + 0 = 100 m; R_y = 100 + 259.8 − 150 = 209.8 m. **R = (100 î + 210 ĵ) m.**
4. **(b)** |R| = √(100² + 209.8²) = **232 m**. Both components are positive, so θ = tan⁻¹(209.8 / 100) = **64.5° north of east**.
5. **(c)** |d₁| = √(250² + 100²) = 269.3 m. Distance = 269.3 + 300 + 150 = **719 m**.

Suggested mark points (4): 1 for both components of d₂ with correct signs; 1 for R in unit vector notation; 1 for the magnitude and a direction with a reference line (for example "north of east"); 1 for the distance as the sum of the three magnitudes.

Common error: adding the three magnitudes and calling 719 m the displacement. That is the distance; the walks point different ways.
</details>

## Question 5 (constructed response · core)

A vector is given by A = p î − 2p ĵ + 2p k̂, where p is a positive constant with the unit metres.

(a) Derive an expression for |A| in terms of p.
(b) Write the unit vector Â in the direction of A. Show that its magnitude is 1 and that it has no unit.
(c) A vector B has magnitude L and points in the **opposite** direction to A. Write B in unit vector notation in terms of L.
(d) Find the angle between A and the +z axis.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** |A| = √(p² + (−2p)² + (2p)²) = √(9p²) = **3p** (p is positive, so no modulus sign is needed).

**(b)** Â = A / |A| = (p î − 2p ĵ + 2p k̂) / 3p = **⅓ î − ⅔ ĵ + ⅔ k̂**. Magnitude: √(1/9 + 4/9 + 4/9) = √1 = 1. The metres in p cancel with the metres in 3p, so Â has no unit.

**(c)** B = −L Â = **−(L/3) î + (2L/3) ĵ − (2L/3) k̂**. Check: |B| = L × |Â| = L.

**(d)** The z-component of A is |A| cos θ, where θ is the angle from +z. So cos θ = 2p / 3p = ⅔ and θ = **48.2°**.

| Point | What earns it |
|---|---|
| 1 | (a) Squares all three components, including the sign of −2p, to reach 3p |
| 1 | (b) Divides each component by 3p to get Â |
| 1 | (b) Shows the magnitude is 1 **and** states that the units cancel |
| 1 | (c) Uses −L Â (reverses every component and scales to length L) |
| 1 | (d) cos θ = A_z / \|A\| = ⅔, giving 48.2° |

**Alternative method.** For (d), the dot product with k̂ gives the same result, but it belongs to Topic 3.2 and is not needed here.
</details>

## Question 6 (constructed response · stretch)

Two displacements have magnitudes |A| = 4.0 m and |B| = 7.0 m. Their directions can be chosen freely.

(a) State the largest and smallest possible magnitudes of R = A + B, and the arrangement that gives each.
(b) Take +x along A, so A = 4.0 î m, with B at angle θ from +x in the x–y plane. Derive an expression for |R|² in terms of θ.
(c) Find θ when |R| = 8.0 m.
(d) A student claims: "If |R| = 8.0 m, the two displacements must be perpendicular, because then the magnitudes add like a right triangle." Evaluate the claim using your results.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Largest **11 m**, when A and B point the same way (θ = 0°). Smallest **3.0 m**, when they point opposite ways (θ = 180°). Along one axis this is +4.0 m + 7.0 m = +11 m, or +4.0 m + (−7.0 m) = −3.0 m.

**(b)** B = 7.0 cos θ î + 7.0 sin θ ĵ. Then R = (4.0 + 7.0 cos θ) î + 7.0 sin θ ĵ, so
|R|² = (4.0 + 7.0 cos θ)² + (7.0 sin θ)² = 16 + 56 cos θ + 49(cos² θ + sin² θ) = **65 + 56 cos θ** (in m²).

**(c)** 64 = 65 + 56 cos θ, so cos θ = −1/56 = −0.0179 and θ = **91.0°**.

**(d)** The claim is **false**, though close. For perpendicular vectors, cos θ = 0 and |R| = √65 = 8.06 m, not 8.0 m. A resultant of exactly 8.0 m needs θ = 91.0°, slightly more than a right angle. The right-triangle rule is a special case of the result in (b).

| Point | What earns it |
|---|---|
| 1 | (a) Both limits, 11 m and 3.0 m, with the parallel and antiparallel arrangements |
| 1 | (b) Writes R in components using cos θ and sin θ |
| 1 | (b) Expands and uses cos² θ + sin² θ = 1 to reach 65 + 56 cos θ |
| 1 | (c) θ = 91.0° (accept 91°) |
| 1 | (d) Rejects the claim, using \|R\| = 8.06 m at 90° or θ = 91.0° as evidence |

**Alternative method.** Quoting the law of cosines for (b) earns the second point only if the angle used is clearly the angle between the vectors' directions, not the angle inside the triangle.
</details>

## Question 7 (representation and explanation · stretch)

A warehouse robot starts at the origin and makes four straight moves in 30.0 s: 6.0 m east, 8.0 m north, 3.0 m west, then 4.0 m south.

(a) Describe how to draw a scaled vector diagram of the four moves and the resultant. State a sensible scale.
(b) Find the resultant displacement in unit vector notation, and as a magnitude and direction.
(c) Find the total distance travelled.
(d) Find the robot's average speed and the magnitude of its average velocity. Explain why they differ.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Choose a scale such as **1 cm : 1 m**. Draw the four arrows **tip to tail** in order, each with its length to scale and pointing in its compass direction. Draw the resultant from the tail of the first arrow to the tip of the last, and label every arrow with its magnitude.

**(b)** Add components: x: 6.0 − 3.0 = 3.0 m; y: 8.0 − 4.0 = 4.0 m. **D = (3.0 î + 4.0 ĵ) m**, magnitude √(9.0 + 16) = **5.0 m**, direction tan⁻¹(4.0 / 3.0) = **53.1° north of east**.

**(c)** Distance = 6.0 + 8.0 + 3.0 + 4.0 = **21 m**.

**(d)** Average speed = 21 m ÷ 30.0 s = **0.70 m/s**. Average velocity = D ÷ 30.0 s = (0.10 î + 0.133 ĵ) m/s, magnitude 5.0 m ÷ 30.0 s = **0.167 m/s**. Speed uses distance, a scalar that counts every metre of the path. Velocity uses displacement, a vector, so the parts of the path that point opposite ways cancel. Here the robot doubled back west and south, so the average speed is about 4.2 times the size of the average velocity.

| Point | What earns it |
|---|---|
| 1 | (a) Stated scale, arrows tip to tail in order, resultant from first tail to last tip |
| 1 | (b) D = 3.0 î + 4.0 ĵ m |
| 1 | (b) 5.0 m at 53.1° north of east |
| 1 | (c) 21 m |
| 1 | (d) Both values, 0.70 m/s and 0.167 m/s |
| 1 | (d) Explains the difference: distance (scalar) counts all the path; displacement (vector) lets opposite moves cancel |
</details>

## How did you do?

- **Q1 wrong:** re-read "Scalars and vectors" in the [study guide](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-study-guide/).
- **Q2 or Q4 wrong:** revisit "Unit vectors and components" and Worked example 1. Sketch each vector and decide which component is next to the angle.
- **Q3 or Q5 wrong:** go through "Position vectors and their unit vectors" and Worked example 2. A unit vector must have magnitude 1.
- **Q6 or Q7 incomplete:** your reasoning must say *why*. Compare with the resultant range rule and the distance–displacement check in Worked example 1.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-checklist/).
