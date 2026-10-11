---
title: "OxfordAQA International AS and A-level Mathematics: Trigonometric identities and solving trigonometric equations (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Trig Identities Equations Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Trigonometric identities and solving trigonometric equations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 181
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-pp1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "pp1-trigonometry-oxfordaqa-alevel-maths"
description: "Condensed notes on tan and sin squared plus cos squared identities and solving simple trig equations, for OxfordAQA International AS and A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These are condensed notes for the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, content area PP1.2 (second part): the tangent identity and sin²θ + cos²θ = 1, and solving simple trigonometric equations in a given interval in degrees or radians. The specification states this content is part of International AS, Unit PSM1 (section 3.2, PP1). Read the [study guide](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric/) first, then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-practice/).

Useful links: the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), and the [free 10-minute diagnostics](/diagnostics/).

## Formulas to know

| Result | Form |
|---|---|
| Tangent identity | tan θ = sin θ / cos θ (cos θ ≠ 0) |
| Pythagorean identity | sin²θ + cos²θ = 1 |
| Rearranged | sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ |
| Notation | sin²θ means (sin θ)², not sin(θ²) |

## Solving: second solutions in one table

Let α be the acute reference angle (ignore the sign of the number on the right-hand side).

| Equation | Solutions in 0° to 360° | In radians (0 to 2π) |
|---|---|---|
| sin θ = k | α, 180° − α if k > 0; 180° + α, 360° − α if k < 0 | α, π − α; or π + α, 2π − α |
| cos θ = k | α, 360° − α if k > 0; 180° − α, 180° + α if k < 0 | α, 2π − α; or π − α, π + α |
| tan θ = k | α, α + 180° if k > 0; 180° − α, 360° − α if k < 0 | α, π + α; or π − α, 2π − α |

Quadrant check: sin is positive in quadrants 1 and 2, cos in 1 and 4, tan in 1 and 3. Add or subtract 360° (2π) for sine and cosine, or 180° (π) for tangent, to reach every value in a wider interval.

## Method in steps

1. Rearrange to one function equal to a number.
2. If the angle is shifted, such as θ − 20°, change the interval for the bracket first.
3. Find the principal value and reference angle, then list every solution in the interval.
4. Undo the shift, check each answer lies in the original interval, and round at the end.

## Four equation types

### Type 1: single function

sin θ = −0.4 with 0° ≤ θ < 360°: reference angle 23.58°, third and fourth quadrants.

```
θ = 180° + 23.58° = 203.6°      θ = 360° − 23.58° = 336.4°
```

### Type 2: shifted angle

sin(θ − 20°) = 0.2 with 0° ≤ θ ≤ 360°: the bracket lies between −20° and 340°.

```
bracket = 11.54° or 168.46°
θ = 31.5° or 188.5°
```

### Type 3: mixed sine and cosine

Divide by cos θ to make tan θ. For 2 sin θ − cos θ = 0:

```
2 tan θ = 1     tan θ = 1/2     θ = 26.6° or 206.6°
```

### Type 4: quadratic in one function

Replace the squared function using sin²θ + cos²θ = 1, collect terms, factorise. For 2 sin²θ + 5 cos θ = 4:

```
2(1 − cos²θ) + 5 cos θ = 4
2cos²θ − 5 cos θ + 2 = 0
(2 cos θ − 1)(cos θ − 2) = 0
cos θ = 1/2  (cos θ = 2 is impossible)
θ = 60° or 300°
```

## Small worked reminders

### Using the identities to find a missing value

Given cos θ = −12/13 with θ in the second quadrant:

```
sin²θ = 1 − 144/169 = 25/169
sin θ = 5/13           (positive in the second quadrant)
tan θ = (5/13) ÷ (−12/13) = −5/12
```

### Proving an identity

Start from one side and rewrite it until it matches the other side. Never move terms across the equals sign. For tan θ cos θ = sin θ:

```
tan θ cos θ = (sin θ / cos θ) × cos θ = sin θ
```

A common pattern is to replace 1 − cos²θ by sin²θ, or to write tan θ as sin θ / cos θ, then cancel.

### An equation in radians

Solve 2 sin x + 1 = 0 for 0 ≤ x ≤ 2π. Then sin x = −1/2, the reference angle is π/6, and sine is negative in the third and fourth quadrants.

```
x = π + π/6 = 7π/6      x = 2π − π/6 = 11π/6
```

### A shifted angle in radians

Solve tan(x − π/4) = 1 for 0 ≤ x ≤ 2π. The bracket lies between −π/4 and 7π/4. The tangent equals 1 at π/4 and 5π/4 inside that range, so x = π/2 and 3π/2.

### A quadratic with a sine

Solve 2cos²θ + sin θ = 2 for 0° ≤ θ ≤ 360°. Replace cos²θ by 1 − sin²θ.

```
2 − 2 sin²θ + sin θ = 2
sin θ (1 − 2 sin θ) = 0
sin θ = 0  or  sin θ = 1/2
θ = 0°, 180°, 360°, 30°, 150°
```

Notice that no constant remains, so the quadratic factorises by taking out sin θ. Cancelling sin θ here would lose three solutions.

## Checking an answer

Before you leave a trigonometric equation, run three quick checks. Is every answer inside the interval, including the endpoints if the interval is closed? Does substituting one answer back give the right-hand side to the accuracy you used? Does the number of answers match the graph you can picture? A sine or cosine curve meets a horizontal line twice per full turn when the line lies strictly between the maximum and minimum, and a tangent curve meets it once per half turn.

## Writing it up

Examiners can only reward what they can see, so lay out solutions in a fixed order.

1. State the rearranged equation, for example tan θ = 5/3.
2. Show the principal value or reference angle with at least four figures.
3. Show how the second solution is built, for example 180° + 59.04°.
4. Finish with a clearly labelled list of final answers to the accuracy asked.

Where the question says "hence" or "show that", the earlier part is meant to be used, so look back at it before you start from scratch. If an equation gives no solution in the interval, say so in a sentence rather than leaving the line blank.

## Degrees and radians together

| Angle | Degrees | Radians |
|---|---|---|
| Half turn | 180° | π |
| Full turn | 360° | 2π |
| Quarter turn | 90° | π/2 |
| Conversion | multiply by π/180 | multiply by 180/π |

The identities are unchanged in radians. Only the interval, and the way you write the second solution, change.

## Must-know distinctions

- Identity versus equation: an identity holds for all θ; an equation holds only for particular values, which you find.
- Reject versus solve: sin θ = 1.5 and cos θ = 2 have no solutions because both functions lie between −1 and 1. Say so and move on.
- Divide versus factorise: dividing by cos θ to get tan θ is safe in a linear equation; cancelling a function that could be zero from a product loses solutions. Factorise instead.
- Degrees versus radians: use the unit of the interval, and keep exact multiples of π when the values are exact.

## Quick self-test

Answer without looking at the answers. Intervals are 0° ≤ θ ≤ 360° unless stated.

1. Simplify (1 − sin²θ) / (sin θ cos θ).
2. Given sin θ = 8/17 and θ is acute, find cos θ and tan θ.
3. Solve cos θ = 0.25.
4. Solve tan θ = −0.5.
5. Solve sin x = 0.9 for 0 ≤ x ≤ 2π, giving answers to 3 s.f.
6. Solve sin(θ + 40°) = −0.5.
7. Solve 4 sin θ + cos θ = 0.
8. Solve 2cos²θ = 3 sin θ.
9. Explain why sin θ = 1.5 has no solution.
10. Solve tan x = 1 for 0 ≤ x ≤ 2π, in terms of π.
11. Given cos θ = −3/5 and θ is obtuse, find sin θ and tan θ.
12. Solve cos(θ − 50°) = 0.5 for 0° ≤ θ ≤ 360°.

### Answers

1. 1 − sin²θ = cos²θ, so the expression is cos²θ / (sin θ cos θ) = cos θ / sin θ, which is 1 / tan θ.
2. cos²θ = 1 − 64/289 = 225/289, so cos θ = 15/17 and tan θ = 8/15.
3. θ = 75.5° and 284.5°.
4. Reference angle 26.57°, tan negative: θ = 153.4° and 333.4°.
5. x = 1.12 and 2.02 (the second is π − 1.12).
6. The bracket lies between 40° and 400°. sin = −0.5 gives 210° and 330°, so θ = 170° and 290°.
7. 4 tan θ = −1, tan θ = −1/4: θ = 166.0° and 346.0°.
8. 2(1 − sin²θ) = 3 sin θ gives 2 sin²θ + 3 sin θ − 2 = 0, so (2 sin θ − 1)(sin θ + 2) = 0. Reject sin θ = −2; sin θ = 1/2 gives θ = 30° and 150°.
9. The sine of any angle lies between −1 and 1, so a value of 1.5 is never reached.
10. x = π/4 and 5π/4.
11. sin²θ = 1 − 9/25 = 16/25 and sine is positive for an obtuse angle, so sin θ = 4/5 and tan θ = (4/5) ÷ (−3/5) = −4/3.
12. The bracket lies between −50° and 310°. cos = 0.5 gives 60° and −60° (and 300°). The value −60° is below −50° so is out of range, leaving 60° and 300°, so θ = 110° and 350°.

## Where marks are usually lost

- Giving one solution when the interval holds two or more.
- Using 180° − α for a tangent equation instead of adding 180°.
- Solving a shifted equation in the original interval, then subtracting the shift, so a solution is missed or kept wrongly.
- Dividing both sides by sin θ or cos θ and losing the roots where it is zero.
- Leaving a quadratic root such as cos θ = 2 in the working without rejecting it.
- Rounding early. Round only the final answers, and quote them to the accuracy asked for.
- Mixing degrees and radians within one question.
- In a "show that", skipping the substitution line so the link to the given result is not visible.
- Writing sin²θ as sin θ² or sin(θ²) in the working.

## Official syllabus

These notes follow the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA (International AS exams from May/June 2018, A-level from May/June 2019), content area PP1.2 Trigonometry.
