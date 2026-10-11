---
title: "OxfordAQA International AS and A-level Mathematics: Trigonometric identities and solving trigonometric equations (9660)"
seoTitle: "OxfordAQA 9660 Trig Identities and Equations Guide"
resourceType: "study-guides"
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
description: "Study guide to the two trigonometric identities and solving simple trig equations in degrees or radians, for OxfordAQA International AS and A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is written for the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It covers the second part of content area PP1.2 (Trigonometry): the tangent identity, the Pythagorean identity sin²θ + cos²θ = 1, and the solution of simple trigonometric equations in a given interval in degrees or radians. The specification places this content in International AS, Unit PSM1 (section 3.2, PP1), and it carries no further tier label. Other pages cover the sine and cosine rules, radians with arcs and sectors, and the trigonometric graphs, so they are not repeated here.

Revise from the [revision notes](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-revision-notes/) and test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-practice/). The [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) show where this unit sits. For related pure maths, see the [Pure Maths 1 study guide](/resources/a-level-oxfordaqa-mathematics-unit-p1/). To check where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## Scope of this unit

| Reference | Skill |
|---|---|
| PP1.2 | Know and use tan θ = sin θ / cos θ |
| PP1.2 | Know and use sin²θ + cos²θ = 1 |
| PP1.2 | Solve simple equations such as sin θ = −0.4 in a given interval, in degrees or radians |
| PP1.2 | Solve equations with a shifted angle, such as sin(θ − 20°) = 0.2 |
| PP1.2 | Solve equations such as 2 sin θ − cos θ = 0 |
| PP1.2 | Solve equations such as 2 sin²θ + 5 cos θ = 4, which become quadratics |

The specification sets the maximum level of difficulty by the four example equations in that table. Anything harder, such as double-angle work, is outside this unit. You should be able to carry out each method below by hand, showing every step of the working.

## The two identities

An identity is true for every value of θ, not just for particular solutions.

```
tan θ = sin θ / cos θ          (cos θ ≠ 0)
sin²θ + cos²θ = 1
```

The second comes from Pythagoras' theorem in a right-angled triangle with hypotenuse 1, where the other sides are sin θ and cos θ. It rearranges two useful ways:

```
sin²θ = 1 − cos²θ
cos²θ = 1 − sin²θ
```

Note the notation: sin²θ means (sin θ)².

### Worked example 1: finding cos and tan from sin

Given sin θ = 3/5 and θ is acute, find cos θ and tan θ.

```
cos²θ = 1 − (3/5)² = 1 − 9/25 = 16/25
cos θ = 4/5          (positive, because θ is acute)
tan θ = (3/5) ÷ (4/5) = 3/4
```

If the question had said θ is obtuse, cos θ would be −4/5 and tan θ would be −3/4. The identity gives a square, so the sign comes from the angle's position.

### Worked example 2: simplifying and showing

Show that (1 − cos θ)(1 + cos θ) / cos²θ = tan²θ.

```
numerator = 1 − cos²θ = sin²θ          (difference of two squares)
sin²θ / cos²θ = (sin θ / cos θ)² = tan²θ
```

For a "show that", write each step and finish on exactly the expression you were given.

## Solving a basic equation in an interval

The inverse function (sin⁻¹, cos⁻¹ or tan⁻¹) returns one value, the principal value. The interval may contain others, so you find the rest from the symmetry of the graph. Write α for the acute reference angle, found by ignoring the sign on the right-hand side.

```
sin θ = k (k > 0):  θ = α  or  180° − α      (then add or subtract 360°)
cos θ = k (k > 0):  θ = α  or  360° − α      (equivalently ±α)
tan θ = k (k > 0):  θ = α  and  α + 180°     (add or subtract 180°)
```

In radians replace 180° with π and 360° with 2π. For k < 0, use the quadrant table below to decide which quadrants hold the solutions, as in worked example 3.

```
Quadrant:       1st   2nd   3rd   4th
sin positive:    yes   yes   no    no
cos positive:    yes   no    no    yes
tan positive:    yes   no    yes   no
```

### Method

1. Rearrange to sin θ, cos θ or tan θ equals a number.
2. Find the principal value and the reference angle.
3. Use the symmetry rules to list every solution, then add or subtract full periods.
4. Keep only those inside the interval and round at the end.

### Worked example 3: sin θ = −0.4, 0° ≤ θ < 360°

```
principal value: sin⁻¹(−0.4) = −23.58°
reference angle α = 23.58°
sine is negative in the 3rd and 4th quadrants:
θ = 180° + 23.58° = 203.6°
θ = 360° − 23.58° = 336.4°
```

Solutions: **θ = 203.6° and 336.4°** (to 1 d.p.).

### Worked example 4: tan θ = 2.5, 0° ≤ θ ≤ 360°

```
α = tan⁻¹(2.5) = 68.20°
θ = 68.2° and 68.2° + 180° = 248.2°
```

Solutions: **θ = 68.2° and 248.2°**. The next value, 428.2°, is outside the interval.

### Worked example 5: radians, cos θ = 0.3, −π ≤ θ ≤ π

```
principal value: cos⁻¹(0.3) = 1.266 radians
cosine is symmetric about 0, so θ = ±1.266
```

Solutions: **θ = −1.27 and 1.27** (3 s.f.). Here the interval is centred on 0, so using ±α is quicker than 2π − α.

### Why the symmetry rules work

On the unit circle, sin θ is the height of the point and cos θ is its horizontal position. Two angles that give the same height are mirror images in the vertical axis, which is why sin θ = k has the pair α and 180° − α. Two angles with the same horizontal position are mirror images in the horizontal axis, which is why cos θ = k has the pair α and 360° − α. The tangent repeats every 180°, so one added half-turn gives the other solution. Sketching a quick graph or circle beside your working is a good way to check you have not missed one.

### Choosing the right approach

| What the equation looks like | First move |
|---|---|
| One function equals a number | Use the reference angle and symmetry |
| Bracket such as (θ − 20°) | Change the interval, solve, undo the shift |
| sin θ and cos θ in a linear equation | Divide by cos θ to get tan θ |
| Squared function plus the other function | Substitute with sin²θ + cos²θ = 1, then solve the quadratic |
| Common factor on both sides | Move everything to one side and factorise |

## Equations with a shifted angle

For sin(θ − 20°) = 0.2, treat the bracket as a single angle. Find the interval for the bracket, solve for it, then undo the shift.

### Worked example 6: sin(θ − 35°) = 0.6, 0° ≤ θ ≤ 360°

```
let u = θ − 35°; the interval for u is −35° ≤ u ≤ 325°
sin⁻¹(0.6) = 36.87°, so u = 36.87° or 180° − 36.87° = 143.13°
(the next solutions, −216.87° and 396.87°, lie outside the interval for u)
θ = u + 35° = 71.87° or 178.13°
```

Solutions: **θ = 71.9° and 178.1°**. Changing the interval first is the step most often forgotten. If you solve for u in the original interval and subtract at the end, you can miss a solution or keep one that is out of range.

### Worked example 7: radians, cos(θ + π/3) = −1/2, 0 ≤ θ ≤ 2π

```
let u = θ + π/3; the interval for u is π/3 ≤ u ≤ 7π/3
cos u = −1/2 gives u = 2π/3 or 4π/3
(the next value, 8π/3, is greater than 7π/3 so is out of range)
θ = u − π/3 = π/3 or π
```

Solutions: **θ = π/3 and π**. When the numbers are exact, leave answers as multiples of π.

## Equations mixing sine and cosine

When sin θ and cos θ appear together in a linear equation, divide through by cos θ to produce tan θ.

### Worked example 8: 3 sin θ = 5 cos θ, 0° ≤ θ ≤ 360°

```
3 sin θ = 5 cos θ
divide by cos θ:   3 tan θ = 5
tan θ = 5/3
α = tan⁻¹(5/3) = 59.04°
θ = 59.0° or 59.04° + 180° = 239.0°
```

Solutions: **θ = 59.0° and 239.0°**. Dividing by cos θ is safe here because cos θ = 0 would force sin θ = 0 as well, and sin θ and cos θ are never both zero.

## Equations that become quadratics

When an equation contains both a squared trig function and a first-power function of the other, use sin²θ + cos²θ = 1 to write everything in terms of one function. Then solve the quadratic.

### Worked example 9: 3 sin²θ + 7 cos θ = 5, 0° ≤ θ ≤ 360°

```
replace sin²θ by 1 − cos²θ:
3(1 − cos²θ) + 7 cos θ = 5
3 − 3cos²θ + 7 cos θ − 5 = 0
3cos²θ − 7 cos θ + 2 = 0
(3 cos θ − 1)(cos θ − 2) = 0
cos θ = 1/3   or   cos θ = 2
```

Since cos θ cannot exceed 1, reject cos θ = 2 and say why. Then cos⁻¹(1/3) = 70.53°, so θ = 70.53° or 360° − 70.53° = 289.47°.

Solutions: **θ = 70.5° and 289.5°**.

### Worked example 10: tan θ = 3 sin θ, 0° ≤ θ ≤ 360°

```
sin θ / cos θ = 3 sin θ
sin θ = 3 sin θ cos θ
sin θ (1 − 3 cos θ) = 0
sin θ = 0   or   cos θ = 1/3
```

From sin θ = 0: θ = 0°, 180°, 360°. From cos θ = 1/3: θ = 70.5° or 289.5°.

Solutions: **θ = 0°, 70.5°, 180°, 289.5°, 360°**. Do not cancel sin θ from both sides. That throws away the solutions where sin θ = 0.

## Common errors

- Giving only the principal value. The interval usually contains two or more solutions.
- Using the wrong symmetry rule. For tan the second solution is 180° later, not 180° − α.
- Forgetting to change the interval when the angle is shifted, as in sin(θ − 20°).
- Writing sin²θ + cos²θ = 1 as sin θ + cos θ = 1, or sin²θ as sin(θ²).
- Dividing both sides by sin θ or cos θ when it could be zero, which loses solutions. Factorise instead.
- Not rejecting a quadratic root such as cos θ = 2, or giving an answer outside the stated interval.
- Rounding too early. Keep the full unrounded value until the last step, especially after adding a shift.
- Working in degrees when the interval is in radians, or the other way round.

## Next steps

Condense this into the [revision notes](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-revision-notes/), then try the [practice questions](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric-practice/) without looking at the answers. For a first look at your level, use the [free 10-minute diagnostics](/diagnostics/).

## Official syllabus

This guide follows the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA (International AS exams from May/June 2018, A-level from May/June 2019), content area PP1.2 Trigonometry.
