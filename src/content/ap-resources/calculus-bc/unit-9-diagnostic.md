---
resourceId: "mb-ap-calcbc-u9-diagnostic"
title: "Parametric Equations, Polar Coordinates and Vector-Valued Functions: Unit Diagnostic (Calculus BC Unit 9)"
description: "Eleven short original questions, one or two per topic of parametric, polar and vector-valued functions, to show which topics you should revisit, with explanations and links."
course: "calculus-bc"
unit: 9
topics: []
resourceType: "unit-diagnostic"
calculusScope: "bc-only"
prerequisites:
  - "Differentiation rules, including the chain and product rules (Units 2 and 3)"
  - "Integration by substitution and definite integrals (Unit 6)"
  - "Exact values of sin and cos at multiples of π/6 and π/4"
learningObjectives:
  - "Find out which Unit 9 topics are secure and which need more work"
  - "Check slopes, second derivatives, arc length, vector motion and polar area skills quickly"
  - "Practise short written answers for planar motion and for areas between polar curves"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Angles are in radians. Leave π, e and surds in exact answers; no constants or data beyond those in each question are needed."
related: ["mb-ap-calcbc-u9-review", "mb-ap-calcbc-9.2-study-guide", "mb-ap-calcbc-9.6-study-guide", "mb-ap-calcbc-9.9-study-guide"]
next: "mb-ap-calcbc-u9-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: Unit 9 is not part of Calculus AB."
  - "Use this before revising Unit 9, to decide which of the 9 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC only.** Unit 9 is part of Calculus BC only. Calculus AB students do not need this page.

**What this is for.** Use this diagnostic to find which Unit 9 topics to revisit. There is one question per topic, and two for Topics 9.6 and 9.9. These are **original Marlbridge practice questions**, not past exam questions. The questions are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Angles are in radians. Answer everything before opening any answer.

## Question 1 (multiple choice · 9.1)

A curve is given by x = 3t − t³ and y = 2t² + 1 for t > 0. At which point does the curve have a vertical tangent line?

- (A) (0, 1)
- (B) (2, 3)
- (C) (−2, 3)
- (D) (3, 2)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A vertical tangent needs dx/dt = 0 and dy/dt ≠ 0. dx/dt = 3 − 3t² = 0 at t = ±1, and only t = 1 is allowed. There dy/dt = 4t = 4 ≠ 0. The point is (3 − 1, 2 + 1) = (2, 3).

- (A) uses dy/dt = 0 (t = 0), the condition for a horizontal tangent, and t = 0 is not allowed.
- (C) comes from t = −1, which breaks the condition t > 0.
- (D) swaps the coordinates.

**If you missed this:** "Horizontal and vertical tangents" in the [Topic 9.1 study guide](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/).
</details>

## Question 2 (multiple choice · 9.2)

A curve is given by x = t³ and y = t² for t > 0. Which gives d²y/dx² at t = 1 and the concavity there?

- (A) −2/3; concave down
- (B) 1/3; concave up
- (C) −2/9; concave down
- (D) 2/9; concave up

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** dy/dx = 2t/(3t²) = 2/(3t). Differentiate with respect to t: −2/(3t²). Then divide by dx/dt = 3t²: d²y/dx² = −2/(9t⁴), which is −2/9 at t = 1. Negative, so concave down. (Check: y = x^(2/3), and its second derivative at x = 1 is −2/9.)

- (A) stops after differentiating dy/dx with respect to t and forgets to divide by dx/dt.
- (B) divides y″(t) by x″(t), which is not the method.
- (D) loses the minus sign from differentiating 2/(3t).

**If you missed this:** "Deriving the correct method" in the [Topic 9.2 study guide](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-study-guide/).
</details>

## Question 3 (multiple choice · 9.3)

What is the length of the curve x = t², y = (2/3)t³ for 0 ≤ t ≤ √3?

- (A) 16/3
- (B) 7/3
- (C) √21
- (D) 14/3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** (dx/dt)² + (dy/dt)² = 4t² + 4t⁴ = 4t²(1 + t²), so the integrand is 2t√(1 + t²) for t ≥ 0. With u = 1 + t², the length is (2/3)(1 + t²)^(3/2) from 0 to √3, which is (2/3)(8 − 1) = 14/3.

- (A) forgets to subtract the value at the lower limit.
- (B) loses the factor 2 when taking the square root of 4t².
- (C) is the straight-line distance from (0, 0) to (3, 2√3). The curve is longer than the chord.

**If you missed this:** Worked example 1 in the [Topic 9.3 study guide](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/).
</details>

## Question 4 (multiple choice · 9.4)

A point moves with position r(t) = ⟨t e^(−t), t² − 4t⟩. At t = 3, which describes its direction of motion and the slope of the tangent line?

- (A) Moving left and up; slope −e³
- (B) Moving right and up; slope 2e³
- (C) Moving left and up; slope −e^(−3)
- (D) Moving left and down; slope −e³

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the product rule, x′(t) = e^(−t) − t e^(−t) = (1 − t)e^(−t), so x′(3) = −2e^(−3) < 0: moving left. y′(t) = 2t − 4, so y′(3) = 2 > 0: moving up. The slope is y′/x′ = 2/(−2e^(−3)) = −e³.

- (B) differentiates t e^(−t) as e^(−t), missing the product rule.
- (C) divides x′ by y′.
- (D) misreads the sign of y′(3).

**If you missed this:** "What r′(t) tells you about the curve" in the [Topic 9.4 study guide](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/).
</details>

## Question 5 (multiple choice · 9.5)

A particle has velocity v(t) = ⟨2t, π cos(πt/2)⟩. At t = 1 it is at ⟨4, −2⟩. Where is it at t = 2?

- (A) ⟨8, −2⟩
- (B) ⟨3, −2⟩
- (C) ⟨7, −4⟩
- (D) ⟨7, −2 − π⟩

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Use r(2) = r(1) + ∫ from 1 to 2 of v(t) dt, one component at a time. x: 4 + [t²] from 1 to 2 = 4 + 3 = 7. y: −2 + [2 sin(πt/2)] from 1 to 2 = −2 + (0 − 2) = −4.

- (A) treats ⟨4, −2⟩ as the position at t = 0.
- (B) is the displacement from t = 1 to t = 2, not the position.
- (D) drops the chain-rule factor: the antiderivative of π cos(πt/2) is 2 sin(πt/2), not π sin(πt/2).

**If you missed this:** Worked example 1 in the [Topic 9.5 study guide](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/).
</details>

## Question 6 (multiple choice · 9.6)

A particle has velocity v(t) = ⟨4 − t², 2t⟩. What is its speed at t = 1, and is the speed increasing or decreasing then?

- (A) √13; increasing
- (B) √13; decreasing
- (C) 5; increasing
- (D) 13; decreasing

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v(1) = ⟨3, 2⟩, so the speed is √(9 + 4) = √13. a(t) = ⟨−2t, 2⟩, so a(1) = ⟨−2, 2⟩. The product v · a = 3(−2) + 2(2) = −2 < 0, so the speed is decreasing.

- (A) assumes the speed rises because both velocity components are positive.
- (C) adds the components instead of using Pythagoras.
- (D) is the square of the speed.

**If you missed this:** "Is the speed increasing or decreasing?" in the [Topic 9.6 study guide](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-study-guide/).
</details>

## Question 7 (short answer · 9.6)

A particle moves in the plane for 0 ≤ t ≤ 4 with velocity v(t) = ⟨t² − 4t + 3, 2 − t⟩. At t = 0 it is at (1, 0).

(a) On which interval is the particle moving left?
(b) Is the particle ever at rest? Justify.
(c) Find the particle's position at t = 3.

<details>
<summary>Worked answer</summary>

**(a)** x′(t) = (t − 1)(t − 3), which is negative between its zeros. The particle moves left for **1 < t < 3**.

**(b)** At rest needs both components zero at the same time. x′ = 0 only at t = 1 and t = 3, and there y′ = 1 and −1. y′ = 0 only at t = 2, where x′ = −1. So the particle is **never at rest**.

**(c)** x(3) = 1 + ∫ from 0 to 3 of (t² − 4t + 3) dt = 1 + (9 − 18 + 9) = 1. y(3) = 0 + ∫ from 0 to 3 of (2 − t) dt = 6 − 4.5 = 1.5. Position **(1, 1.5)**.

**If you missed this:** the sign table in Worked example 1 and "Integrals: displacement, position and distance" in the [Topic 9.6 study guide](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-study-guide/).
</details>

## Question 8 (multiple choice · 9.7)

What is the slope of the tangent line to the spiral r = θ at θ = π/2?

- (A) 1
- (B) −π/2
- (C) Undefined, because the ray θ = π/2 is vertical
- (D) −2/π

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Write x = θ cos θ and y = θ sin θ. By the product rule, dx/dθ = cos θ − θ sin θ = −π/2 and dy/dθ = sin θ + θ cos θ = 1 at θ = π/2. So dy/dx = 1/(−π/2) = −2/π.

- (A) is dr/dθ, the rate of change of the distance from the pole, not the slope.
- (B) divides dx/dθ by dy/dθ.
- (C) confuses the direction of the ray with the direction of the curve.

**If you missed this:** "Three derivatives, three meanings" in the [Topic 9.7 study guide](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-study-guide/).
</details>

## Question 9 (multiple choice · 9.8)

The polar curve r = 2 cos θ + 2 sin θ is a circle through the pole. What area does it enclose?

- (A) 2π
- (B) 4π
- (C) 2√2
- (D) π + 2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** r = 0 when tan θ = −1, at θ = −π/4 and θ = 3π/4, and r > 0 between them. So the circle is traced once for −π/4 ≤ θ ≤ 3π/4. Since r² = 4(1 + sin 2θ), Area = ½ ∫ from −π/4 to 3π/4 of 4(1 + sin 2θ) dθ = 2[θ − ½ cos 2θ] from −π/4 to 3π/4 = 2π. (Check: x² + y² = 2x + 2y is a circle of radius √2.)

- (B) integrates from 0 to 2π. The circle is traced twice on that interval.
- (C) forgets to square r.
- (D) integrates from 0 to π/2 only, which misses part of the circle.

**If you missed this:** "Choosing the limits: trace the region once" in the [Topic 9.8 study guide](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-study-guide/).
</details>

## Question 10 (multiple choice · 9.9)

What is the area of the region inside the circle r = 5 sin θ and outside the limaçon r = 2 + sin θ?

- (A) 4π/3 + √3/2
- (B) 8π/3 + √3
- (C) 16π/3 + 2√3
- (D) 4π − 6√3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The curves meet where 5 sin θ = 2 + sin θ, so sin θ = ½ and θ = π/6 or 5π/6. At θ = π/2 the circle (r = 5) is outside the limaçon (r = 3). Area = ½ ∫ from π/6 to 5π/6 of [25 sin²θ − (2 + sin θ)²] dθ = ½ ∫ from π/6 to 5π/6 of (8 − 12 cos 2θ − 4 sin θ) dθ = ½(16π/3 + 6√3 − 4√3) = 8π/3 + √3.

- (A) uses only π/6 to π/2, which is half the region.
- (C) leaves out the ½.
- (D) squares the difference of the radii, (R − r)², instead of using R² − r².

**If you missed this:** "From one curve to two" in the [Topic 9.9 study guide](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-study-guide/).
</details>

## Question 11 (short answer · 9.9)

Let R be the region inside the circle r = 3 and outside the cardioid r = 2 − 2 cos θ.

(a) Find the values of θ, for −π ≤ θ ≤ π, where the curves meet.
(b) Show which curve is farther from the pole between these angles.
(c) Find the exact area of R.

<details>
<summary>Worked answer</summary>

**(a)** 2 − 2 cos θ = 3 gives cos θ = −½, so **θ = −2π/3 and θ = 2π/3**, the points (−3/2, ±3√3/2).

**(b)** Test θ = 0: the circle has r = 3 and the cardioid has r = 0. So the **circle is outer** for −2π/3 < θ < 2π/3. (For other θ the cardioid has r > 3, so R has no points there.)

**(c)** Area = ½ ∫ from −2π/3 to 2π/3 of [9 − (2 − 2 cos θ)²] dθ = ½ ∫ from −2π/3 to 2π/3 of (3 + 8 cos θ − 2 cos 2θ) dθ = ½(4π + 8√3 + √3) = **2π + 9√3/2** (about 14.08).

**If you missed this:** Steps 1–3 and Worked example 1 in the [Topic 9.9 study guide](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 9.1 Parametric equations and dy/dx | 1 | [Guide 9.1](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/) |
| 9.2 Second derivatives of parametric equations | 2 | [Guide 9.2](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-study-guide/) |
| 9.3 Arc length of parametric curves | 3 | [Guide 9.3](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/) |
| 9.4 Differentiating vector-valued functions | 4 | [Guide 9.4](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/) |
| 9.5 Integrating vector-valued functions | 5 | [Guide 9.5](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/) |
| 9.6 Motion in the plane | 6, 7 | [Guide 9.6](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-study-guide/) |
| 9.7 Polar coordinates and derivatives | 8 | [Guide 9.7](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-study-guide/) |
| 9.8 Area of a polar region | 9 | [Guide 9.8](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-study-guide/) |
| 9.9 Area between two polar curves | 10, 11 | [Guide 9.9](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix gaps in Topics 9.1 and 9.4 first.** Almost every other topic uses dy/dx = (dy/dt) ÷ (dx/dt) or a derivative taken one component at a time.
- **Check your written answers** to Questions 7 and 11. Did you test both components for "at rest", and justify the outer curve with a test value?
- **For a gap**, read the guide, then do the topic's practice set.
- **Then try the [Unit 9 mixed review](/advanced-course-resources/calculus-bc/unit-9-review/)**, where each question combines topics.
