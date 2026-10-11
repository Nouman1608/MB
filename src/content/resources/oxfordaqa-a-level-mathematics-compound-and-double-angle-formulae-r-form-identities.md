---
title: "OxfordAQA International AS and A-level Mathematics: Compound and double angle formulae and R-form (9660)"
seoTitle: "OxfordAQA 9660 Compound and Double Angle, R-form Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Compound and double angle formulae, R-form, identities and equations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 192
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-trigonometry-oxfordaqa-alevel-maths"
description: "Study guide to compound angle and double angle formulae, the R-form, proving identities and solving equations, for OxfordAQA International A-level Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers the second part of content area P2.4 (Trigonometry) in the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level Unit P2 (Pure Maths), so it is A2 content and is not examined at International AS. Inverse functions and the reciprocal functions are in a [separate guide](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant/), and the basic identities and equations are in the [Unit PSM1 trigonometry guide](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric/). Angles are in degrees or radians as the question states.

Use the [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [checklist](/checklists/oxfordaqa/a-level/mathematics/) to track progress. The [revision notes](/resources/oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-practice/) go with this guide, and the [free 10-minute diagnostics](/diagnostics/) show what to revise first.

## What this unit covers

| Specification (P2.4) | What you must be able to do |
|---|---|
| Compound angles | Use sin(A ± B), cos(A ± B) and tan(A ± B) |
| R-form | Write a cos θ + b sin θ as r cos(θ ± α) or r sin(θ ± α) |
| Double angles | Know and use sin 2x, the three forms of cos 2x, and tan 2x |
| Identities | Prove identities, for example one for sin 3x |
| Integration | Use the formulae to integrate, for example cos² x |
| Equations | Solve trigonometric equations in a given interval |

## Compound angle formulae

```
sin(A + B) = sin A cos B + cos A sin B
sin(A − B) = sin A cos B − cos A sin B
cos(A + B) = cos A cos B − sin A sin B
cos(A − B) = cos A cos B + sin A sin B
tan(A + B) = (tan A + tan B) / (1 − tan A tan B)
tan(A − B) = (tan A − tan B) / (1 + tan A tan B)
```

The sine formulae keep the sign. The cosine formulae flip it. These are not the same as sin A + sin B: the sine of a sum is never the sum of the sines.

### Worked example 1: an exact value

Find the exact value of cos 165°.

```
cos 165° = cos(120° + 45°) = cos 120° cos 45° − sin 120° sin 45°
         = (−1/2)(√2/2) − (√3/2)(√2/2)
         = −(√2 + √6)/4
```

### Worked example 2: from given ratios

A is acute with sin A = 12/37. B is obtuse with cos B = −4/5. Find sin(A + B) and cos(A − B).

Here cos A = 35/37 (positive, A acute) and sin B = 3/5 (positive, B obtuse).

```
sin(A + B) = (12/37)(−4/5) + (35/37)(3/5) = (−48 + 105)/185 = 57/185
cos(A − B) = (35/37)(−4/5) + (12/37)(3/5) = (−140 + 36)/185 = −104/185
```

### Worked example 3: tan(A + B)

A and B are acute, tan A = 2/5 and tan B = 3/7. Show that A + B = 45°.

```
tan(A + B) = (2/5 + 3/7)/(1 − 6/35) = (29/35)/(29/35) = 1
```

A + B lies between 0° and 180° and has tangent 1, so **A + B = 45°**.

### Worked example 4: an equation

Solve sin(x + 30°) = 2 cos x for 0° ≤ x ≤ 360°.

```
sin x cos 30° + cos x sin 30° = 2 cos x
(√3/2) sin x = (2 − 1/2) cos x = (3/2) cos x
tan x = 3/√3 = √3
```

So **x = 60° or 240°**.

## Double angle formulae

Put B = A in the compound formulae to get:

```
sin 2x = 2 sin x cos x
cos 2x = cos² x − sin² x = 2cos² x − 1 = 1 − 2sin² x
tan 2x = 2 tan x / (1 − tan² x)
```

The second and third forms of cos 2x come from the first and sin² x + cos² x = 1. Choose the form that matches what else is in the problem.

### Worked example 5: from one ratio

Given sin x = 7/25 and x is acute, find sin 2x, cos 2x and tan 2x.

cos x = 24/25. Then:

```
sin 2x = 2(7/25)(24/25) = 336/625
cos 2x = 1 − 2(49/625) = 527/625
tan 2x = (336/625)/(527/625) = 336/527
```

### Worked example 6: a triple angle

Prove that cos 3x ≡ 4cos³ x − 3cos x.

```
cos 3x = cos(2x + x) = cos 2x cos x − sin 2x sin x
       = (2cos² x − 1)cos x − (2 sin x cos x) sin x
       = 2cos³ x − cos x − 2 cos x (1 − cos² x)
       = 4cos³ x − 3cos x
```

The same method with sin(2x + x) gives sin 3x ≡ 3 sin x − 4 sin³ x (this is the specification's example, and the practice set asks you to prove it).

## Proving identities

1. Start from the more complicated side and aim for the other. Do not work on both sides at once.
2. Rewrite every angle in terms of one angle. Use a double angle or compound formula to do this.
3. Choose the form of cos 2x that cancels the most.
4. Write each line so it follows from the one before.
5. Finish on exactly the expression you were given.

### Worked example 7

Prove that (1 + cos 2x + sin 2x)/(1 − cos 2x + sin 2x) ≡ cot x.

```
Numerator:   1 + (2cos² x − 1) + 2 sin x cos x = 2cos x (cos x + sin x)
Denominator: 1 − (1 − 2sin² x) + 2 sin x cos x = 2sin x (sin x + cos x)
```

The common factor 2(sin x + cos x) cancels, leaving cos x/sin x = **cot x**. The form of cos 2x is chosen separately in the top and bottom so that a constant cancels in each.

### Worked example 8

Prove that cos 4x ≡ 8cos⁴ x − 8cos² x + 1.

```
cos 4x = cos 2(2x) = 2cos² 2x − 1
       = 2(2cos² x − 1)² − 1
       = 2(4cos⁴ x − 4cos² x + 1) − 1
       = 8cos⁴ x − 8cos² x + 1
```

### Worked example 8a: an identity with reciprocals

Prove that cosec θ/(cosec θ − sin θ) ≡ sec²θ.

```
cosec θ/(cosec θ − sin θ) = (1/sin θ)/(1/sin θ − sin θ)
                          = 1/(1 − sin²θ)    (multiply top and bottom by sin θ)
                          = 1/cos²θ = sec²θ
```

Write cosec θ as 1/sin θ, then multiply top and bottom by sin θ. This is the specification's own example.

## The R-form

For a cos θ + b sin θ, match it to one of four forms, with r > 0 and α acute (0° < α < 90°, or 0 < α < π/2):

| Form | Expands to | Matching |
|---|---|---|
| r cos(θ − α) | r cos α cos θ + r sin α sin θ | r cos α = a, r sin α = b |
| r cos(θ + α) | r cos α cos θ − r sin α sin θ | r cos α = a, r sin α = −b |
| r sin(θ + α) | r cos α sin θ + r sin α cos θ | r cos α = b, r sin α = a |
| r sin(θ − α) | r cos α sin θ − r sin α cos θ | r cos α = b, r sin α = −a |

In every case r = √(a² + b²). Pick the form whose matching gives positive numbers on the right, so that α is acute. Divide the two matching equations to get tan α.

### Worked example 9: finding r and α

Express 3 sin θ − 8 cos θ in the form r sin(θ − α).

Expand r sin(θ − α) = r cos α sin θ − r sin α cos θ. So r cos α = 3 and r sin α = 8.

```
r = √(9 + 64) = √73
tan α = 8/3, so α = 69.4° (to 1 decimal place)
3 sin θ − 8 cos θ = √73 sin(θ − 69.4°)
```

### Worked example 10: solving an equation

Solve 3 sin θ − 8 cos θ = 4 for 0° ≤ θ ≤ 360°.

```
√73 sin(θ − α) = 4, so sin(θ − α) = 4/√73 = 0.468...
θ − α = 27.9° or 180° − 27.9° = 152.1°
θ = 97.4° or 221.5°
```

Keep α unrounded in your working and round only at the end. Adding the rounded 69.4° to 27.9° gives 97.3°, which is out in the last decimal place. The interval for θ − α is −69.4° ≤ θ − α ≤ 290.6°, which holds both values and no others.

### Worked example 10a: a negative interval

Solve 2 sin x + 3 cos x = 1.5 for −180° < x < 180°.

```
2 sin x + 3 cos x = √13 sin(x + α), where tan α = 3/2, so α = 56.3°
sin(x + α) = 1.5/√13 = 0.416..., so x + α = 24.6° or 155.4°
```

The interval for x + α is −123.7° < x + α < 236.3°, which holds both values. So **x = −31.7° or 99.1°**.

### Worked example 11: greatest and least values

Find the range of 1/(10 + 3 cos θ + 8 sin θ).

Write 3 cos θ + 8 sin θ = √73 cos(θ − α), which takes every value from −√73 to √73. Then the denominator lies between 10 − √73 ≈ 1.46 and 10 + √73 ≈ 18.54, and is always positive. The fraction therefore lies between **1/(10 + √73) ≈ 0.0539** and **1/(10 − √73) ≈ 0.687**.

### Worked example 12: radians

Solve √3 cos x + sin x = √3 for 0 ≤ x ≤ 2π.

r = √(3 + 1) = 2, tan α = 1/√3, so α = π/6 and the left side is 2cos(x − π/6). Then cos(x − π/6) = √3/2. With −π/6 ≤ x − π/6 ≤ 11π/6, the solutions are x − π/6 = −π/6, π/6 or 11π/6. So **x = 0, π/3 or 2π**.

## Using the formulae in integration

Rearranging the cos 2x forms gives:

```
cos² x = (1 + cos 2x)/2        sin² x = (1 − cos 2x)/2
```

These turn a squared trigonometric function into something you can integrate.

### Worked example 13

Find ∫ sin²(x/2) dx.

```
sin²(x/2) = (1 − cos x)/2
∫ (1 − cos x)/2 dx = x/2 − (sin x)/2 + c
```

### Worked example 14

Find the exact value of ∫ 8cos² 2x dx from 0 to π/6.

```
8cos² 2x = 4(1 + cos 4x) = 4 + 4cos 4x
[4x + sin 4x] from 0 to π/6 = (2π/3 + sin(2π/3)) − 0 = 2π/3 + √3/2
```

Products work in the same way: 6 sin x cos x = 3 sin 2x, so ∫ 6 sin x cos x dx = −(3/2) cos 2x + c.

## Solving equations in an interval

Use a double angle or compound formula to reach one trigonometric function of one angle. Factorise rather than divide, because dividing by a function that can be zero loses solutions.

### Worked example 15

Solve 4 sin 2x = 3 sin x for 0 ≤ x ≤ 3π. Give non-exact answers to 3 decimal places.

```
8 sin x cos x − 3 sin x = 0
sin x (8 cos x − 3) = 0
```

sin x = 0 gives x = 0, π, 2π, 3π. cos x = 3/8 gives x = 1.186, then 2π − 1.186 = 5.097, then 2π + 1.186 = 7.470. The next value, 4π − 1.186, is beyond 3π. So **x = 0, 1.186, π, 5.097, 2π, 7.470, 3π**.

### Worked example 16

Solve 3 cos 2θ + sin θ + 2 = 0 for 0° ≤ θ ≤ 360°.

Use cos 2θ = 1 − 2 sin² θ:

```
3 − 6 sin² θ + sin θ + 2 = 0
6 sin² θ − sin θ − 5 = 0
(6 sin θ + 5)(sin θ − 1) = 0
```

sin θ = 1 gives θ = 90°. sin θ = −5/6 gives θ = 180° + 56.4° = 236.4° or 360° − 56.4° = 303.6°. So **θ = 90°, 236.4°, 303.6°**.

## Common errors

- Writing sin(A + B) = sin A + sin B, or cos(A + B) = cos A + cos B.
- Keeping the sign in the cos(A ± B) formulae instead of flipping it.
- Writing sin 2x = 2 sin x, or cos 2x = 2 cos x.
- Dividing by sin x, cos x or tan x and losing the solutions where it is zero.
- Picking an R-form that gives a negative cos α or sin α, and so an obtuse α.
- Solving R sin(θ − α) = k but forgetting to shift the interval for θ − α.
- Rounding α early, so the final angle is out in the last decimal place.
- Leaving out the constant of integration in an indefinite integral, or forgetting the factor from the inner angle, such as the 6 in sin 6x.

## Next steps

Condense this with the [revision notes](/resources/oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-revision-notes/), then attempt the [practice questions](/resources/oxfordaqa-a-level-mathematics-compound-and-double-angle-formulae-r-form-identities-practice/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: content area P2.4 Trigonometry (compound angle and double angle formulae, the forms r cos(θ ± α) and r sin(θ ± α), identities, integration and equations), International A-level Unit P2.
