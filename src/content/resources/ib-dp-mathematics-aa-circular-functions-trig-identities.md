---
title: "IB DP Mathematics: Analysis and Approaches -- Circular functions, trigonometric identities and equations Study Guide"
seoTitle: "IB Maths AA Trig Functions, Identities and Equations Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Circular functions, trigonometric identities and equations"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-11"
description: "Study guide to IB DP Maths AA sections 3.5-3.11: the unit circle, trig identities, circular function graphs and trig equations, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the circular functions unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 3.5–3.11. Sections 3.5–3.8 are for SL and HL; sections 3.9–3.11 are HL only (AHL) and are labelled as such. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

When you have worked through it, condense it with the [revision notes](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities-revision-notes/) and test yourself with the [practice questions](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities-practice/). The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where this unit sits in the course.

## What this unit covers

| Section | What you must be able to do | Level |
|---|---|---|
| 3.5 | Define cos θ and sin θ on the unit circle, tan θ = sin θ / cos θ; relate angles in different quadrants; exact values; the ambiguous case of the sine rule | SL and HL |
| 3.6 | Use cos²θ + sin²θ = 1 and the double angle identities for sine and cosine; find one ratio from another | SL and HL |
| 3.7 | Graph sin x, cos x, tan x; amplitude and period; f(x) = a sin(b(x + c)) + d; transformations; real-life models | SL and HL |
| 3.8 | Solve trig equations in a finite interval, graphically and analytically, including quadratics in sin x, cos x or tan x | SL and HL |
| 3.9 | sec θ, cosec θ, cot θ; 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ; arcsin, arccos, arctan with domains, ranges and graphs | HL only |
| 3.10 | Compound angle identities; the double angle identity for tan | HL only |
| 3.11 | Relationships from the symmetry of the graphs, such as sin(π − θ) = sin θ | HL only |

The guide says radian measure should be assumed on examination papers unless otherwise indicated. Paper 1 allows no technology, so exact values, identities and analytic solving must be done by hand. Paper 2 requires a GDC (and HL Paper 3 requires technology too).

## 3.5 The unit circle and exact values

Draw a circle of radius 1 centred at the origin. Rotate a radius anticlockwise from the positive x-axis through angle θ. The point where it meets the circle is (cos θ, sin θ). So cos θ is the x-coordinate and sin θ is the y-coordinate. Then:

- tan θ = sin θ / cos θ, which is the gradient of that radius.
- The straight line through the origin at angle θ to the positive x-axis is y = x tan θ.

Signs follow the coordinates: all three ratios are positive in the first quadrant, only sin in the second, only tan in the third, only cos in the fourth.

Reflecting the point in the axes gives the quadrant relationships:

- cos(−x) = cos x and sin(−x) = −sin x (reflection in the x-axis)
- sin(π + x) = −sin x, cos(π + x) = −cos x, tan(π + x) = tan x (half-turn)
- tan(2π − x) = −tan x, sin(2π − x) = −sin x

### Exact values

| θ | 0 | π/6 | π/4 | π/3 | π/2 |
|---|---|---|---|---|---|
| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan θ | 0 | √3/3 | 1 | √3 | undefined |

For a multiple such as 4π/3, find the reference angle (π/3), then the quadrant (third), then the sign. So sin(4π/3) = −√3/2 and tan(150°) = −√3/3.

### The ambiguous case of the sine rule

If you know two sides and a non-included angle, sin of the unknown angle can give two angles, θ and 180° − θ. Both are valid if their sum with the given angle is less than 180°.

**Worked example.** In triangle ABC, angle A = 40°, BC = 9 cm and AC = 12 cm. Find the possible values of angle B.

```
sin B / 12 = sin 40° / 9
sin B = 12 sin 40° / 9 = 0.8571
B = 59.0°   or   B = 180° − 59.0° = 121°
Check: 40° + 121° = 161° < 180°, so both triangles exist.
```

The side opposite the given angle (9 cm) is shorter than AC (12 cm) but longer than 12 sin 40° = 7.71 cm. That is the condition for two triangles. The two possible lengths of AB are 13.8 cm and 4.56 cm.

## 3.6 The Pythagorean and double angle identities

Because (cos θ, sin θ) lies on the unit circle:

- **cos²θ + sin²θ = 1**
- **sin 2θ = 2 sin θ cos θ**
- **cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ**

Choose the form of cos 2θ that matches what you know. Given only sin θ, use 1 − 2sin²θ.

**Worked example 1.** Given cos x = 2/3 and x is acute, find sin 2x without finding x.

```
sin²x = 1 − 4/9 = 5/9, and x is acute, so sin x = √5/3
sin 2x = 2 × (√5/3) × (2/3) = 4√5/9
```

**Worked example 2.** Given sin θ = 1/4, find the possible values of tan θ.

```
cos²θ = 1 − 1/16 = 15/16, so cos θ = ±√15/4
tan θ = (1/4) / (±√15/4) = ±1/√15 = ±√15/15
```

Both signs survive because θ could be in the first or second quadrant.

## 3.7 Circular functions and their graphs

- y = sin x and y = cos x have period 2π (360°), amplitude 1 and range −1 ≤ y ≤ 1.
- y = tan x has period π, no amplitude, and vertical asymptotes at x = π/2 + kπ.

For **f(x) = a sin(b(x + c)) + d** (or the cosine version):

| Parameter | Effect |
|---|---|
| a | amplitude |a|; vertical stretch, scale factor a |
| b | period 2π/b (360°/b in degrees); horizontal stretch, scale factor 1/b |
| c | horizontal translation by −c |
| d | vertical translation by d; the principal axis is y = d |

The maximum is d + |a| and the minimum is d − |a|. For tan(bx), the period is π/b. These are the transformations from section 2.11 applied to circular functions.

**Worked example.** A sine curve has a maximum at (1, 7) and the next minimum at (5, −1). Find it in the form f(x) = a sin(b(x + c)) + d.

```
a = (7 − (−1))/2 = 4        d = (7 + (−1))/2 = 3
half a period = 5 − 1 = 4, so period = 8 and b = 2π/8 = π/4
sin is maximal when b(x + c) = π/2: (π/4)(1 + c) = π/2, so c = 1
f(x) = 4 sin((π/4)(x + 1)) + 3
Check: f(5) = 4 sin(3π/2) + 3 = −1
```

In real-life models (tides, rotating wheels) read the parameters from the context: d is the mean level, a is half the range, and the period comes from the time for one cycle. The guide notes that not every regression tool produces a trig model in the form a sin(b(x + c)) + d, so check the form your GDC gives before comparing parameters.

## 3.8 Solving trigonometric equations

The guide requires solutions in a finite interval. The general solution is not required.

**Method**

1. Rearrange to sin(…) = k, cos(…) = k or tan(…) = k.
2. If the argument is bx + c, transform the interval too.
3. Find the reference angle, then all solutions in the new interval using the quadrant signs and the period.
4. Undo the transformation and check each answer lies in the original interval.

**Worked example 1.** Solve √3 tan 2x = 1 for 0 ≤ x ≤ 2π.

```
tan 2x = 1/√3, and 0 ≤ 2x ≤ 4π
2x = π/6, 7π/6, 13π/6, 19π/6      (tan repeats every π)
x = π/12, 7π/12, 13π/12, 19π/12
```

**Worked example 2 (quadratic).** Solve 2cos²x + sin x − 1 = 0 for 0° ≤ x ≤ 360°.

```
2(1 − sin²x) + sin x − 1 = 0
2sin²x − sin x − 1 = 0
(2 sin x + 1)(sin x − 1) = 0
sin x = 1:     x = 90°
sin x = −1/2:  x = 210°, 330°
```

Where an equation mixes sin x and cos 2x, replace cos 2x with 1 − 2sin²x to get a quadratic in sin x. If sin 2x appears with cos x, write sin 2x = 2 sin x cos x and factorise. Never divide by cos x: you lose the solutions of cos x = 0.

### Using your GDC

On Paper 2, solve graphically when no algebraic route is expected. Graph each side and find the intersections inside the interval. For example, 3 sin 2x = x + 1 on 0 ≤ x ≤ π has solutions x = 0.207 and x = 1.17. Set the calculator to radians unless the question uses degrees, and write down the equation you graphed.

## 3.9 Reciprocal ratios and inverse functions (HL only)

- sec θ = 1/cos θ, cosec θ = 1/sin θ, cot θ = cos θ / sin θ = 1/tan θ
- Divide cos²θ + sin²θ = 1 by cos²θ: **1 + tan²θ = sec²θ**
- Divide by sin²θ: **1 + cot²θ = cosec²θ**

**Worked example.** Given cosec θ = 5/2 and θ is obtuse, find cot θ and sec θ.

```
cot²θ = cosec²θ − 1 = 25/4 − 1 = 21/4
θ is in the second quadrant, where cot is negative: cot θ = −√21/2
sin θ = 2/5, cos θ = −√21/5, so sec θ = −5/√21 = −5√21/21
```

### Inverse circular functions

Each inverse uses a restricted domain of the original function so that it is one-to-one.

| Function | Domain | Range |
|---|---|---|
| arcsin x | −1 ≤ x ≤ 1 | −π/2 ≤ y ≤ π/2 |
| arccos x | −1 ≤ x ≤ 1 | 0 ≤ y ≤ π |
| arctan x | x ∈ ℝ | −π/2 < y < π/2 |

Each graph is the reflection of the restricted original in y = x. arctan x has horizontal asymptotes y = ±π/2. So arcsin(−√3/2) = −π/3, arccos(−√2/2) = 3π/4 and arctan(−1) = −π/4. To find sin(arccos(1/3)), let θ = arccos(1/3); then θ is in [0, π], so sin θ ≥ 0 and sin θ = √(1 − 1/9) = 2√2/3.

## 3.10 Compound angle identities (HL only)

- sin(A ± B) = sin A cos B ± cos A sin B
- cos(A ± B) = cos A cos B ∓ sin A sin B
- tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)

Put B = A to derive the double angle identities. For tan:

```
tan 2A = tan(A + A) = (tan A + tan A)/(1 − tan A tan A) = 2 tan A / (1 − tan²A)
```

**Worked example.** Find the exact value of sin 105°.

```
sin(60° + 45°) = sin 60° cos 45° + cos 60° sin 45°
             = (√3/2)(√2/2) + (1/2)(√2/2)
             = (√6 + √2)/4
```

## 3.11 Symmetry of the graphs (HL only)

The graph of sin x is symmetric about x = π/2, so sin(π − θ) = sin θ. The graph of cos x has rotational symmetry about (π/2, 0), so cos(π − θ) = −cos θ, and hence tan(π − θ) = −tan θ. cos x is an even function and sin x and tan x are odd functions. You can confirm each result with compound angles:

```
cos(π − θ) = cos π cos θ + sin π sin θ = (−1)cos θ + 0 = −cos θ
```

These results let you write a solution set quickly. If sin x = k has one solution α in [0, π/2], the other in [0, π] is π − α.

## Common errors

- Writing arccos of a negative value as negative. arccos always gives an angle between 0 and π.
- Forgetting the second triangle in the sine rule, or accepting a second angle that makes the angle sum exceed 180°.
- Solving sin 2x = k only for 0 ≤ 2x ≤ 2π when the interval for x is 0 ≤ x ≤ 2π. You need 0 ≤ 2x ≤ 4π.
- Taking the period of a sin(bx) as 2πb instead of 2π/b.
- Reading the horizontal shift in sin(2x − π/3) as π/3. Factorise first: 2(x − π/6), so the shift is π/6.
- Dividing both sides by sin x or cos x and losing solutions.
- Giving decimals on Paper 1 when exact values such as 5π/12 or −√3/2 are expected.
- Mixing degree and radian mode on the GDC.

## Where to go next

Review the unit with the [circular functions revision notes](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities-revision-notes/), then try the [practice questions](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities-practice/). Transformations of graphs are covered in the [AA functions guide](/resources/ib-dp-mathematics-aa-functions/), and the Calculus strand in the [AA calculus guide](/resources/ib-dp-mathematics-aa-calculus/). For the whole course, see the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
