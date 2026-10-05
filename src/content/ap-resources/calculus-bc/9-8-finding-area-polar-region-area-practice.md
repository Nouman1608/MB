---
resourceId: "mb-ap-calcbc-9.8-practice"
title: "Area of a Polar Region or the Area Bounded by a Single Polar Curve: Practice Questions (Calculus BC 9.8)"
description: "Seven original Marlbridge practice questions on polar area: sectors, circles, petals, spirals, limaçons, a lemniscate and an inner loop, with worked solutions and rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.8"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Polar curves (Topic 9.7), definite integrals and the power-reducing identities for sin² and cos²"
prerequisiteResources: ["mb-ap-calcbc-9.8-study-guide"]
learningObjectives:
  - "Set up and evaluate ½ ∫ r² dθ for regions bounded by a polar curve and rays"
  - "Choose limits that trace a petal, loop or closed curve exactly once"
  - "Explain why an integral over the wrong interval gives the wrong area"
  - "Use a calculator to find areas of loops whose endpoints are not exact angles"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: graphing calculator allowed in radian mode; give decimals to 3 decimal places."
related: ["mb-ap-calcbc-9.8-study-guide", "mb-ap-calcbc-9.8-revision-notes", "mb-ap-calcbc-9.8-checklist"]
next: "mb-ap-calcbc-9.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; no calculator for Questions 1–6; a graphing calculator is allowed for Question 7, with decimals given to 3 decimal places. Notation: "½ ∫ from α to β of r² dθ" is a definite integral. Useful identities: sin²θ = ½(1 − cos 2θ) and cos²θ = ½(1 + cos 2θ).

## Question 1 (multiple choice · foundation)

What is the area of the region bounded by r = 3 and the rays θ = 0 and θ = π/3?

- (A) π/2
- (B) π
- (C) 3π/2
- (D) 3π

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Area = ½ ∫ from 0 to π/3 of 3² dθ = ½ × 9 × π/3 = 3π/2. This is a sector of a circle of radius 3, one sixth of the full disc (9π ÷ 6 = 3π/2).

- (A) uses r instead of r²: ½ × 3 × π/3 = π/2.
- (B) uses ∫ r dθ with no ½ and no square: 3 × π/3 = π.
- (D) squares r but forgets the ½: 9 × π/3 = 3π.
</details>

## Question 2 (multiple choice · foundation)

Which integral gives the area of the region enclosed by the circle r = 4 sin θ?

- (A) ½ ∫ from 0 to 2π of 16 sin²θ dθ
- (B) ½ ∫ from 0 to π of 16 sin²θ dθ
- (C) ∫ from 0 to π of 4 sin θ dθ
- (D) ½ ∫ from 0 to π/2 of 16 sin²θ dθ

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** r = 4 sin θ is a circle of radius 2 through the pole. It is traced exactly once as θ goes from 0 to π: r = 0 at both ends and r > 0 in between. The integral equals 8 ∫ from 0 to π of sin²θ dθ = 8 × π/2 = 4π, which is π(2)², as expected.

- (A) traces the circle twice (for π < θ < 2π, r < 0 and the same points are plotted again), so it gives 8π, double the area.
- (C) integrates r, not ½ r². Its value is 8, which is not the area.
- (D) covers only the half of the circle to the right of the y-axis, giving 2π.
</details>

## Question 3 (multiple choice · core)

What is the area of one petal of the rose r = 3 sin 2θ?

- (A) 3/2
- (B) 9π/8
- (C) 9π/4
- (D) 9π/2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Consecutive zeros of r: sin 2θ = 0 at θ = 0 and θ = π/2, with r > 0 between, so one petal lies in the first quadrant.
Area = ½ ∫ from 0 to π/2 of 9 sin²2θ dθ = (9/2) ∫ from 0 to π/2 of ½(1 − cos 4θ) dθ = (9/4)[θ − ¼ sin 4θ] from 0 to π/2 = (9/4)(π/2) = 9π/8.

- (A) integrates ½ r instead of ½ r²: ½ ∫ from 0 to π/2 of 3 sin 2θ dθ = 3/2.
- (C) forgets the ½ in front of the integral.
- (D) is the area of all four petals, ½ ∫ from 0 to 2π of 9 sin²2θ dθ.
</details>

## Question 4 (multiple choice · stretch)

The spiral r = θ for 0 ≤ θ ≤ π starts at the pole and ends at the point (−π, 0). What is the area of the region bounded by the spiral and the x-axis?

- (A) π²/4
- (B) π³/6
- (C) π³/3
- (D) π³/2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For 0 ≤ θ ≤ π, r = θ ≥ 0, so the spiral stays in the upper half-plane and the ray from the pole sweeps the region exactly once. Area = ½ ∫ from 0 to π of θ² dθ = ½ [θ³/3] from 0 to π = π³/6.

- (A) integrates ½ r instead of ½ r²: ½ ∫ θ dθ = π²/4.
- (C) forgets the ½: ∫ θ² dθ = π³/3.
- (D) treats the region as a sector of radius π (the final r) and angle π: ½ π² × π. But r is not constant; it grows from 0 to π.
</details>

## Question 5 (calculation · core)

The curve r = 3 + 2 sin θ is a limaçon with no inner loop.

(a) Find the area of the whole region enclosed by the curve.
(b) Find the area of the part of that region that lies below the x-axis.

<details>
<summary>Worked solution</summary>

r = 3 + 2 sin θ ≥ 1 > 0, so the curve is traced once for 0 ≤ θ ≤ 2π. Expand: r² = 9 + 12 sin θ + 4 sin²θ.

**(a)** ∫ from 0 to 2π: 9 → 18π; 12 sin θ → 0; 4 sin²θ = 2(1 − cos 2θ) → 4π.
Area = ½(18π + 0 + 4π) = **11π** (about 34.558).

**(b)** Below the x-axis means π ≤ θ ≤ 2π (there sin θ ≤ 0 and r > 0).
∫ from π to 2π: 9 → 9π; 12 sin θ → 12[−cos θ] from π to 2π = 12(−1 − 1) = −24; 4 sin²θ → 2π.
Area = ½(9π − 24 + 2π) = **11π/2 − 12** (about 5.279).

*Check:* the lower half is much smaller than the upper half, 11π/2 + 12 ≈ 29.279. That fits the shape: r is as small as 1 at θ = 3π/2 but as large as 5 at θ = π/2.

Suggested mark points (3): 1 for the correct expansion of r² and the ½ ∫ setup; 1 for 11π; 1 for the limits π to 2π and 11π/2 − 12.

Common error: forgetting the 12 sin θ term (it vanishes in (a) but not in (b)), which gives 11π/2 for (b), exactly half of (a). The region is not symmetric about the x-axis.
</details>

## Question 6 (constructed response · core)

The lemniscate r² = 9 cos 2θ has two loops, one on each side of the y-axis.

(a) Explain why the curve has no points with π/4 < θ < 3π/4.
(b) The right-hand loop is traced by r = 3√(cos 2θ) for −π/4 ≤ θ ≤ π/4. Write an integral for its area and evaluate it.
(c) Find the total area enclosed by both loops.
(d) A student computes ½ ∫ from 0 to 2π of 9 cos 2θ dθ = 0 and concludes that the area is 0. Explain what has gone wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For π/4 < θ < 3π/4, 2θ is between π/2 and 3π/2, so cos 2θ < 0. Then r² = 9 cos 2θ would be negative, and no real r has a negative square. So there are no points on those rays.

**(b)** Here r² is given directly, so there is nothing to square.
Area = ½ ∫ from −π/4 to π/4 of 9 cos 2θ dθ = (9/2)[½ sin 2θ] from −π/4 to π/4 = (9/2)(½ − (−½)) = **9/2**.

**(c)** The curve is symmetric about the y-axis (replacing θ by π − θ leaves cos 2θ unchanged), so the left loop also has area 9/2. Total = **9**.

**(d)** On [0, 2π] the integrand 9 cos 2θ is negative on intervals where the curve has no points at all (from part (a)). Those negative values cancel the positive ones. The polar area formula only applies over intervals where the curve exists and is traced once, so ½ r² ≥ 0 throughout. Splitting the curve into the two loops, as in (b) and (c), gives the correct total 9.

| Point | What earns it |
|---|---|
| 1 | Explains that cos 2θ < 0 there, so r² would be negative |
| 1 | Correct integral ½ ∫ from −π/4 to π/4 of 9 cos 2θ dθ |
| 1 | Correct value 9/2 |
| 1 | Total 9, with symmetry (or a second integral, for example over 3π/4 to 5π/4) |
| 1 | Explains that the integrand is negative where there are no points, so positive and negative parts cancel |

Total: 5 points. Acceptable alternative for (c): 4 × ½ ∫ from 0 to π/4 of 9 cos 2θ dθ = 4 × 9/4 = 9, using symmetry in both axes.
</details>

## Question 7 (constructed response · stretch · calculator)

The limaçon r = 1 + 3 cos θ, for 0 ≤ θ ≤ 2π, has a small inner loop inside a larger outer loop.

(a) Find the values of θ in [0, 2π] where the curve passes through the pole.
(b) Write an integral for the area inside the inner loop, and evaluate it.
(c) A student claims that the area enclosed by the outer loop is ½ ∫ from 0 to 2π of (1 + 3 cos θ)² dθ. Find the value of this integral, explain why the claim is wrong, and find the correct area enclosed by the outer loop.
(d) Find the area of the region inside the outer loop but outside the inner loop.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** r = 0 when cos θ = −1/3: θ = cos⁻¹(−1/3) ≈ **1.911** and θ = 2π − cos⁻¹(−1/3) ≈ **4.373**.

**(b)** Between these angles cos θ < −1/3, so r < 0: the points are plotted on the opposite side of the pole and trace the inner loop once.
Inner loop area = ½ ∫ from 1.911 to 4.373 of (1 + 3 cos θ)² dθ ≈ **2.528**.

**(c)** ½ ∫ from 0 to 2π of (1 + 3 cos θ)² dθ = ½(2π + 0 + 9π) = 11π/2 ≈ **17.279**.
On [0, 2π] the curve traces the outer loop once **and** the inner loop once. The inner loop lies inside the outer loop, so its area has been swept twice: once as part of the outer region and once on its own. Correct area enclosed by the outer loop = 17.279 − 2.528 ≈ **14.751**.

**(d)** Inside the outer loop, outside the inner loop: 14.751 − 2.528 ≈ **12.223** (equivalently 17.279 − 2 × 2.528).

| Point | What earns it |
|---|---|
| 1 | θ ≈ 1.911 and 4.373 (from cos θ = −1/3) |
| 1 | Integral for the inner loop with these limits and the ½ |
| 1 | Inner loop area ≈ 2.528 |
| 1 | Value 17.279 and the explanation that the inner loop is swept as well as the outer loop |
| 1 | Outer-loop area ≈ 14.751 |
| 1 | Area between the loops ≈ 12.223 |

Total: 6 points. Answers within 0.001 are accepted; small differences may come from rounding the limits, so keep them stored in the calculator. An integral over [0, 1.911] ∪ [4.373, 2π] for the outer loop (giving 14.751 directly) is an acceptable alternative for (c).
</details>

## How did you do?

- **Q1 or Q4 wrong:** review "Building the formula from thin sectors" in the [study guide](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-study-guide/): square r and keep the ½.
- **Q2 or Q3 wrong:** reread "Choosing the limits: trace the region once".
- **Q5 wrong:** compare your expansion and limits with Worked example 1.
- **Q6 wrong:** check where r² can be negative, and use symmetry carefully.
- **Q7 wrong:** go back to zeros of r and negative r, then compare with Worked example 2 for calculator setup.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-checklist/).
