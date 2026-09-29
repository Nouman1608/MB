---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 1 Trigonometry -- Study Guide"
seoTitle: "Cambridge 9709 Pure 1 Trigonometry Study Guide (Paper 1)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 1 Trigonometry"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 33
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "trigonometry-cambridge-alevel-maths-1"
description: "Study guide to Cambridge 9709 Pure Mathematics 1 section 1.5 Trigonometry: graphs, exact values, sin⁻¹x, two identities and equations, fully worked."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

This guide teaches **section 1.5 Trigonometry** of Pure Mathematics 1 in the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Pure Mathematics 1 is examined on **Paper 1** (1 hour 50 minutes, 75 marks, 10 to 12 structured questions). Paper 1 is compulsory for both AS Level and A Level, and it counts for 60% of the AS Level and 30% of the A Level. A scientific calculator is allowed, but you must show your working.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). To find your gaps first, take the [AS 10-minute diagnostic](/practice/9709/diagnostic/as/) or browse the [9709 self-check bank](/practice/9709/). For this unit there are also [revision notes](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry-revision-notes/) and a [practice set](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry-practice/).

## What this unit covers

| Syllabus 1.5 | What you must be able to do |
|---|---|
| Graphs | Sketch and use the graphs of sin, cos and tan for angles of any size, in degrees or radians, including forms such as y = a sin bx + c and y = tan(x + k) |
| Exact values | Use the exact sin, cos and tan of 30°, 45°, 60° and related angles |
| Inverse notation | Use sin⁻¹x, cos⁻¹x and tan⁻¹x for principal values, and understand them as inverse functions |
| Identities | Use tan θ ≡ sin θ / cos θ and sin²θ + cos²θ ≡ 1 to prove identities, simplify and solve |
| Equations | Find all solutions of simple trigonometric equations in a given interval |

General solutions are not required. The secant, cosecant and cotangent functions and the compound-angle formulae belong to later sections (2.3 and 3.3), not to Paper 1. Radians and the conversion 180° = π radians come from section 1.4 Circular measure; you need them here.

## Angles of any size

Take a point P on a circle of radius 1, centre O. The angle θ is measured anticlockwise from the positive x-axis (clockwise for negative angles). Then P = (cos θ, sin θ) and tan θ = sin θ / cos θ.

The sign of each ratio depends on the quadrant:

| Quadrant | Angles (degrees) | Positive ratios |
|---|---|---|
| First | 0° to 90° | all three |
| Second | 90° to 180° | sin only |
| Third | 180° to 270° | tan only |
| Fourth | 270° to 360° | cos only |

The **related acute angle** is the angle between OP and the x-axis. Every ratio equals ± the same ratio of the related angle, with the sign from the table. The rules you use most:

- sin(180° − θ) = sin θ, cos(180° − θ) = −cos θ
- sin(180° + θ) = −sin θ, cos(180° + θ) = −cos θ, tan(180° + θ) = tan θ
- sin(360° − θ) = −sin θ, cos(360° − θ) = cos θ
- sin(−θ) = −sin θ, cos(−θ) = cos θ

## Graphs of sin, cos and tan

| | y = sin x | y = cos x | y = tan x |
|---|---|---|---|
| Period | 360° (2π) | 360° (2π) | 180° (π) |
| Range | −1 ≤ y ≤ 1 | −1 ≤ y ≤ 1 | all real y |
| Zeros | 0°, 180°, 360°, … | 90°, 270°, … | 0°, 180°, 360°, … |
| Asymptotes | none | none | x = 90°, 270°, … |

For y = a sin bx + c (or a cos bx + c), with a > 0 and b > 0:

- the amplitude is a, so the graph runs from c − a to c + a;
- the period is 360°/b (or 2π/b);
- c moves the graph up by c.

For y = tan(x + k), the whole graph moves k to the left, so the zeros and asymptotes move by k too. These are the transformations from section 1.2; see the [functions study guide](/resources/a-level-mathematics-pure-mathematics-1-functions/).

**Worked example 1.** Sketch y = 2 + 3 cos 2x for 0 ≤ x ≤ π, and find where it crosses the x-axis.

```
Period = 2π/2 = π, so one full cycle.
Greatest value 2 + 3 = 5 at x = 0 and x = π.
Least value 2 − 3 = −1 at x = π/2.
y = 0:  cos 2x = −2/3
        2x = cos⁻¹(−2/3) = 2.3005   or   2x = 2π − 2.3005 = 3.9827
        x = 1.15  or  x = 1.99   (3 s.f.)
```

The sketch starts at (0, 5), falls to (π/2, −1), and rises back to (π, 5), crossing the x-axis at x = 1.15 and x = 1.99. Label all of these points.

**Worked example 2.** For y = tan(x − π/3), 0 ≤ x ≤ 2π, state the intercepts and asymptotes.

```
y-intercept: tan(−π/3) = −√3, so (0, −√3).
Zeros: x − π/3 = 0 or π, so x = π/3 and x = 4π/3.
Asymptotes: x − π/3 = π/2 or 3π/2, so x = 5π/6 and x = 11π/6.
```

## Exact values

| θ | 30° (π/6) | 45° (π/4) | 60° (π/3) |
|---|---|---|---|
| sin θ | 1/2 | 1/√2 = √2/2 | √3/2 |
| cos θ | √3/2 | 1/√2 = √2/2 | 1/2 |
| tan θ | 1/√3 = √3/3 | 1 | √3 |

Also: sin 0° = 0, cos 0° = 1, sin 90° = 1, cos 90° = 0, and tan 90° is undefined. You can rebuild the table from two triangles: half an equilateral triangle of side 2 (sides 1, √3, 2) and a right isosceles triangle (sides 1, 1, √2).

**Worked example 3.** Find the exact values of sin 300°, tan(5π/6) and cos(7π/4).

```
sin 300°: fourth quadrant, related angle 60°, sin negative  → −√3/2
tan(5π/6): 5π/6 = 150°, second quadrant, related 30°, tan negative  → −1/√3 = −√3/3
cos(7π/4): 7π/4 = 315°, fourth quadrant, related 45°, cos positive  → 1/√2 = √2/2
```

"Exact" means surds and fractions. A calculator decimal such as 0.707 scores nothing when an exact value is asked for.

## Inverse notation: sin⁻¹x, cos⁻¹x, tan⁻¹x

sin, cos and tan are many-one, so they have no inverse on their full domains. Restricting the domain makes each one-one. The inverse then gives one answer, the **principal value**:

| Notation | Domain | Principal value range |
|---|---|---|
| sin⁻¹x | −1 ≤ x ≤ 1 | −π/2 ≤ sin⁻¹x ≤ π/2 |
| cos⁻¹x | −1 ≤ x ≤ 1 | 0 ≤ cos⁻¹x ≤ π |
| tan⁻¹x | all real x | −π/2 < tan⁻¹x < π/2 |

These ranges are in the MF19 list of formulae. Your calculator's sin⁻¹, cos⁻¹ and tan⁻¹ keys return these values. The graph of y = sin⁻¹x is the reflection of y = sin x, for −π/2 ≤ x ≤ π/2, in the line y = x, as for any inverse function.

Note that sin⁻¹x is the inverse function, not 1/sin x.

**Worked example 4.** Find the exact values of sin⁻¹(−√3/2), cos⁻¹(−1/√2), tan⁻¹(−1) and sin⁻¹(sin(5π/6)).

```
sin⁻¹(−√3/2) = −π/3         (must lie in −π/2 to π/2)
cos⁻¹(−1/√2) = 3π/4         (must lie in 0 to π)
tan⁻¹(−1)    = −π/4
sin⁻¹(sin(5π/6)) = sin⁻¹(1/2) = π/6, not 5π/6, because 5π/6 is outside the principal range.
```

## The two identities

tan θ ≡ sin θ / cos θ   and   sin²θ + cos²θ ≡ 1

Both are in MF19. Rearranged forms you will use: sin²θ ≡ 1 − cos²θ and cos²θ ≡ 1 − sin²θ. The sign ≡ means true for every θ where both sides are defined.

**Worked example 5 (proof).** Prove that 1/cos θ − cos θ ≡ sin θ tan θ.

```
LHS = 1/cos θ − cos θ
    = (1 − cos²θ)/cos θ          (common denominator)
    = sin²θ / cos θ              (sin²θ + cos²θ ≡ 1)
    = sin θ × (sin θ / cos θ)
    = sin θ tan θ = RHS
```

Start from one side and work to the other. Do not treat the identity as an equation and do the same thing to both sides.

**Worked example 6 (using an identity).** θ is obtuse and sin θ = 5/13. Find the exact values of cos θ and tan θ.

```
cos²θ = 1 − 25/169 = 144/169, so cos θ = ±12/13.
θ is obtuse (second quadrant), so cos θ < 0:  cos θ = −12/13.
tan θ = (5/13) ÷ (−12/13) = −5/12.
```

## Solving trigonometric equations

Method:

1. Rearrange to sin(…) = k, cos(…) = k or tan(…) = k.
2. If the angle is a multiple or shift, such as 3x or x − 40°, change the interval to match.
3. Find the principal value with sin⁻¹, cos⁻¹ or tan⁻¹.
4. Use the graph or quadrant rules for the other values in the interval.
5. Undo the multiple or shift, and check each answer lies in the original interval.

**Worked example 7 (multiple angle).** Solve 2 cos 3x = −1 for 0° ≤ x ≤ 180°.

```
cos 3x = −1/2, and 0° ≤ 3x ≤ 540°.
Principal value: cos⁻¹(−1/2) = 120°.
Other values: 360° − 120° = 240°, then 120° + 360° = 480°. (600° is too big.)
3x = 120°, 240°, 480°
x = 40°, 80°, 160°
```

**Worked example 8 (quadratic in sin θ).** Solve 2cos²θ + 3 sin θ = 3 for 0° ≤ θ ≤ 360°.

```
2(1 − sin²θ) + 3 sin θ − 3 = 0
−2sin²θ + 3 sin θ − 1 = 0
2sin²θ − 3 sin θ + 1 = 0
(2 sin θ − 1)(sin θ − 1) = 0
sin θ = 1/2:  θ = 30°, 150°
sin θ = 1:    θ = 90°
θ = 30°, 90°, 150°
```

Replace cos²θ with 1 − sin²θ so the equation has one function only. The factorising is the same as in [quadratics](/resources/a-level-mathematics-pure-mathematics-1-quadratics/).

**Worked example 9 (using tan).** Solve 3 sin x = 2 cos x for 0 ≤ x ≤ 2π.

```
Divide by cos x (cos x = 0 is not a solution, since then sin x = ±1 and 3 ≠ 0):
tan x = 2/3
x = tan⁻¹(2/3) = 0.588   or   x = 0.588 + π = 3.73   (3 s.f.)
```

Dividing is safe here only because cos x = 0 does not satisfy the original equation. If cos x or sin x is a common factor, factorise instead. For example, sin θ tan θ = 3 sin θ gives sin θ(tan θ − 3) = 0, so sin θ = 0 (θ = 0°, 180°, 360°) or tan θ = 3 (θ = 71.6°, 251.6°). Dividing by sin θ loses the first three.

## Calculator and accuracy

- Put your calculator in the right mode. If the interval is in radians, give answers in radians.
- Give non-exact answers to 3 significant figures, or angles in degrees to 1 decimal place, unless the question says otherwise.
- Keep full calculator values until the end. Rounding a principal value early can change the last figure of later answers.
- The syllabus says no marks are given for unsupported answers from a calculator, so write down the equation you solved and the principal value.

## Common errors

- Stopping at the calculator's principal value and missing the second (or third) solution.
- Forgetting to change the interval for 2x or 3x, so solutions are missed.
- Changing the interval but not dividing back at the end.
- Mixing degrees and radians in one answer, for example x = π/6 and x = 150°.
- Writing sin⁻¹x as 1/sin x.
- Taking cos θ = +12/13 without checking the quadrant.
- Cancelling sin θ or cos θ and losing the solutions where it equals zero.
- Keeping a value such as sin θ = 1.5 (or cos θ = −3), which has no solutions.

## Next steps

Use the [revision notes](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry-revision-notes/) for tables, method boxes and a quick self-test, then work through the [trigonometry practice set](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry-practice/). Trigonometry also appears in the [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/). If you go on to [Pure Mathematics 2](/resources/a-level-mathematics-pure-mathematics-2/) or [Pure Mathematics 3](/resources/a-level-maths-9709-pure-mathematics-3/), these skills are the base for sec, cosec, cot and the compound-angle formulae.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Section 1.5 Trigonometry, in 1 Pure Mathematics 1 (for Paper 1).
