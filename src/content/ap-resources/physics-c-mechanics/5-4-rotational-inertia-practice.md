---
resourceId: "mb-ap-physcm-5.4-practice"
title: "Rotational Inertia: Practice Questions (Physics C: Mechanics 5.4)"
description: "Seven original Marlbridge practice questions on rotational inertia: point masses, integration for rods, shells, disks and rings, nonuniform rods, the parallel axis theorem and graph data."
course: "physics-c-mechanics"
unit: 5
topics: ["5.4"]
resourceType: "practice-questions"
prerequisites:
  - "Integrating polynomials with limits"
  - "Finding the centre of mass of a rod from λ(x)"
prerequisiteResources: ["mb-ap-physcm-5.4-study-guide"]
learningObjectives:
  - "Calculate I for point masses using perpendicular distances to the axis"
  - "Derive I by integration for rods, cylindrical shells and annular rings"
  - "Apply the parallel axis theorem correctly, starting from the centre-of-mass axis"
  - "Compare rotational inertias qualitatively from how mass is distributed"
  - "Plot and interpret data that test I = Σmr²"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Integrals by hand; calculator for arithmetic only. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-5.4-study-guide", "mb-ap-physcm-5.4-revision-notes", "mb-ap-physcm-5.4-checklist"]
next: "mb-ap-physcm-5.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. r is always the perpendicular distance to that axis."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. "Small" objects may be treated as point masses. Rods are thin. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Two small objects are fixed to a light frame in the xy-plane: 2.0 kg at (0.30 m, 0.40 m) and 1.0 kg at (−0.20 m, 0.10 m). The frame turns about the **y-axis**. What is its rotational inertia about that axis?

- (A) 0.33 kg·m²
- (B) 0.22 kg·m²
- (C) 0.55 kg·m²
- (D) 0.80 kg·m²

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The perpendicular distance to the y-axis is |x|. I = 2.0 × 0.30² + 1.0 × 0.20² = 0.18 + 0.04 = 0.22 kg·m².

- (A) uses the y-coordinates, which are the distances to the x-axis: 2.0 × 0.40² + 1.0 × 0.10².
- (C) uses the distance to the origin, which is the right distance only for the z-axis: 2.0 × 0.50² + 1.0 × (√0.05)².
- (D) uses mr instead of mr²: 2.0 × 0.30 + 1.0 × 0.20, which does not even have the unit kg·m².
</details>

## Question 2 (multiple choice · core)

A uniform disk of mass M and radius R turns about an axis perpendicular to the disk, through a point on its rim. About its central axis, I = ½MR². What is its rotational inertia about the rim axis?

- (A) ½MR²
- (B) MR²
- (C) (3/2)MR²
- (D) 2MR²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The rim axis is parallel to the central axis and a distance d = R from it, and the central axis passes through the centre of mass. I = ½MR² + MR² = (3/2)MR².

- (A) ignores the shift of axis. I about a non-cm axis is always larger.
- (B) is Md² alone; it leaves out I_cm.
- (D) adds MR² to the hoop value MR², using the wrong I_cm.
</details>

## Question 3 (multiple choice · core)

Disk A is uniform. Disk B has the same mass M and radius R, but its density increases steadily from the centre to the rim. Both turn about their central axes. Which statement about I_B is correct?

- (A) I_B = ½MR², because the two disks have the same mass and radius.
- (B) ½MR² < I_B < MR²
- (C) I_B < ½MR², because B's centre has less mass.
- (D) I_B > MR², because B's mass is concentrated near the rim.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** B has more of its mass at large r than A, so I_B > I_A = ½MR². But no part of B is farther than R from the axis, so I_B < MR², the value if all the mass were at the rim (a hoop).

- (A) assumes I depends only on M and R. The distribution matters.
- (C) has the effect backwards: moving mass outwards raises I.
- (D) is impossible: MR² is the largest I any object of mass M fitting inside radius R can have about that axis.
</details>

## Question 4 (calculation · core)

A uniform rod has mass 2.4 kg and length 1.5 m. It turns about an axis perpendicular to the rod through a point **L/4 from one end**.

(a) By integration, derive I about this axis in terms of M and L.
(b) Check your answer with the parallel axis theorem, using I_cm = ML²/12.
(c) Evaluate I, and compare it with the values about the centre and about an end.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Put the axis at the origin, so the rod runs from x = −L/4 to x = 3L/4, with λ = M/L.
I = ∫ x² (M/L) dx from −L/4 to 3L/4 = (M/3L)[(3L/4)³ − (−L/4)³] = (M/3L)(27L³/64 + L³/64) = (M/3L)(28L³/64) = **7ML²/48**.

**(b)** d = L/2 − L/4 = L/4. I = ML²/12 + M(L/4)² = 4ML²/48 + 3ML²/48 = **7ML²/48**. ✓

**(c)** I = 7 × 2.4 × 1.5² ÷ 48 = **0.79 kg·m²** (0.7875). About the centre: ML²/12 = 0.45 kg·m². About an end: ML²/3 = 1.8 kg·m². The value lies between the two, as expected, since the axis is between the centre and the end.

| Point | What earns it |
|---|---|
| 1 | (a) Sets up ∫x² λ dx with λ = M/L and limits that cover the rod once |
| 1 | (a) Evaluates to 7ML²/48 |
| 1 | (b) Parallel axis with d = L/4 gives the same result |
| 1 | (c) 0.79 kg·m² and a correct comparison with both 0.45 and 1.8 kg·m² |
</details>

## Question 5 (derivation · core)

(a) A thin cylindrical shell (a tube with very thin walls) has mass M, radius R and length h. Show that its rotational inertia about its central axis is MR², and explain why h does not appear.
(b) A uniform flat ring has mass M, inner radius R₁ and outer radius R₂. By treating it as a set of thin coaxial rings, derive I = ½M(R₁² + R₂²) about its central axis.
(c) Show that your result in (b) gives the correct answers for a solid disk and for a thin hoop.
(d) For a uniform solid disk of radius R, find what fraction of its rotational inertia comes from the outer part, R/2 < r < R. Comment on your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Every element dm of the thin shell is the same distance R from the axis, whatever its position along the length. So I = ∫R² dm = R²∫dm = **MR²**. Spreading the mass along the axis (changing h) does not change any distance from the axis, so h does not appear.

**(b)** Area density σ = M/[π(R₂² − R₁²)]. A ring of radius r and width dr has dm = σ(2πr dr), all at distance r.
I = ∫ r² σ 2πr dr from R₁ to R₂ = (πσ/2)(R₂⁴ − R₁⁴) = (πσ/2)(R₂² − R₁²)(R₂² + R₁²). Substitute σ: I = **½M(R₁² + R₂²)**.

**(c)** R₁ = 0 gives ½MR₂², the solid disk. R₁ = R₂ = R gives ½M(2R²) = MR², the hoop. ✓

**(d)** Outer part: I_out = (πσ/2)(R⁴ − R⁴/16) = (15/16)(πσR⁴/2) = (15/16) × ½MR². So **15/16 ≈ 94%** of I comes from the outer half of the radius, even though that part holds only 3/4 of the mass. Mass far from the axis dominates because r is squared (and there is more area at large r).

| Point | What earns it |
|---|---|
| 1 | (a) All of dm at distance R, so I = MR², with h irrelevant because no distance from the axis depends on it |
| 1 | (b) Correct dm = σ 2πr dr with σ in terms of M, R₁, R₂ |
| 1 | (b) Integration and factorising to reach ½M(R₁² + R₂²) |
| 1 | (c) Both limits checked |
| 1 | (d) 15/16 with a comment linking it to r² weighting |

**Alternative method.** For (b), subtracting a disk of radius R₁ from a disk of radius R₂ (same σ) earns both (b) points if the masses of the two disks are written in terms of σ correctly.
</details>

## Question 6 (constructed response · stretch)

A light horizontal bar can spin about a vertical axle through its centre. Two identical small masses m are clamped on the bar, one each side, both at distance r from the axle. A rotation sensor reports the rotational inertia I of the whole spinning system. The results are:

| r (m) | 0.05 | 0.10 | 0.15 | 0.20 | 0.25 |
|---|---|---|---|---|---|
| I (kg·m²) | 0.0068 | 0.0091 | 0.0127 | 0.0181 | 0.0246 |

(a) Write the predicted relationship between I and r, and explain why a graph of I against r² should be a straight line.
(b) Plot the graph (or tabulate the values) and find the slope and intercept of the best-fit line.
(c) Use your line to find m, and state what the intercept represents.
(d) Predict I for r = 0.30 m.
(e) The "small masses" are actually blocks 4 cm wide. Explain, using the parallel axis theorem, whether this would make the graph curve.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** I = I₀ + 2mr², where I₀ is the rotational inertia of the bar and axle. Plotting I (vertical) against r² (horizontal) gives slope 2m and intercept I₀, a straight line.

**(b)** r² values: 0.0025, 0.0100, 0.0225, 0.0400, 0.0625 m². A least-squares line gives slope ≈ **0.30 kg** (0.297) and intercept ≈ **0.0061 kg·m²**.

**(c)** 2m = 0.297 kg, so **m ≈ 0.15 kg**. The intercept, 0.0061 kg·m², is I₀, the rotational inertia of the bar, axle and clamps with the masses at r = 0.

**(d)** I = 0.0061 + 0.297 × 0.09 = **0.033 kg·m²**.

**(e)** Each block has its own I_block,cm about a vertical axis through its centre. By the parallel axis theorem each contributes I_block,cm + mr². The extra terms are constant, so the graph stays **straight**; only the intercept rises by 2I_block,cm. The slope still gives 2m.

| Point | What earns it |
|---|---|
| 1 | (a) I = I₀ + 2mr² and the slope/intercept meaning |
| 1 | (b) Slope 0.28–0.32 kg and intercept 0.005–0.007 kg·m² from a fitted line |
| 1 | (c) m ≈ 0.15 kg (carry forward) and the intercept identified as I₀ |
| 1 | (d) About 0.033 kg·m² (carry forward) |
| 1 | (e) Uses I_cm + mr² for each block to show the line stays straight, with only the intercept changing |
</details>

## Question 7 (explanation · stretch)

A rod of length L = 0.90 m lies along x from 0 to L. Its mass per unit length is λ = kx, where k is a constant, and its mass is M = 0.60 kg.

A student finds I₀ about the light end (x = 0) correctly. She then writes: "About the other end, I_L = I₀ + ML², by the parallel axis theorem."

(a) Find k in terms of M and L, and show that I₀ = ML²/2.
(b) Find the centre of mass and I_cm.
(c) Find I_L correctly, and evaluate it. Compare with the student's value.
(d) Explain the student's error.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** M = ∫₀ᴸ kx dx = kL²/2, so **k = 2M/L²**. I₀ = ∫₀ᴸ x² kx dx = kL⁴/4 = (2M/L²)(L⁴/4) = **ML²/2**.

**(b)** x_cm = (1/M)∫₀ᴸ x · kx dx = kL³/(3M) = **2L/3** = 0.60 m. I_cm = I₀ − M(2L/3)² = ML²/2 − 4ML²/9 = **ML²/18**.

**(c)** The dense end is L/3 from the centre of mass: I_L = ML²/18 + M(L/3)² = 3ML²/18 = **ML²/6**. (Direct check: ∫₀ᴸ (L − x)² kx dx = kL⁴/12 = ML²/6.) Numbers: I₀ = 0.243 kg·m², I_cm = 0.027 kg·m², I_L = **0.081 kg·m²**. The student's value is I₀ + ML² = 3ML²/2 = 0.729 kg·m², nine times too big.

**(d)** The parallel axis theorem relates I about **any** axis to I about the **centre-of-mass** axis. The student used it between two off-centre axes. The correct route goes through I_cm. Physically, I_L must be smaller than I₀ because most of the mass is near x = L, close to that axis.

| Point | What earns it |
|---|---|
| 1 | (a) k = 2M/L² and I₀ = ML²/2 by integration |
| 1 | (b) x_cm = 2L/3 and I_cm = ML²/18 |
| 1 | (c) I_L = ML²/6 = 0.081 kg·m², by the parallel axis theorem from I_cm or by direct integration |
| 1 | (d) Identifies that the theorem must start from the cm axis, and gives a physical reason I_L < I₀ |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Point masses: I = mr²" and "Why a hoop beats a disk" in the [study guide](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-study-guide/).
- **Q2 or Q4 wrong:** revisit "The parallel axis theorem" and the uniform-rod derivation.
- **Q5 incomplete:** work through "Deriving the standard results" and Worked example 3.
- **Q6 or Q7 incomplete:** compare with "Linking to experiments" and Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-checklist/).
