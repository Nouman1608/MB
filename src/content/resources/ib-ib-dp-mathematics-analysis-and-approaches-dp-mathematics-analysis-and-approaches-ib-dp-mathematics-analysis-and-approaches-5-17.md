---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Areas enclosed with the y-axis and volumes of revolution (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.17
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-17"
description: "IB DP Maths AA HL section 5.17 study guide: areas between a curve and the y-axis, and volumes of revolution about the x-axis or y-axis, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.17, the area of the region enclosed by a curve and the y-axis in a given interval, and volumes of revolution about the x-axis or y-axis**. It is AHL content, examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021. Rotations are through 2π (a full turn).

It extends the SL area work in the [section 5.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11/). The [AA HL further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/) gives one example of each formula; this page explains where the formulas come from, how to set up the integral in y, and how to handle regions between two curves.

## What section 5.17 asks of you

```
Area between a curve and the y-axis, from y = a to y = b:  ∫ₐᵇ |x| dy
Volume of revolution about the x-axis:  V = π ∫ₐᵇ y² dx
Volume of revolution about the y-axis:  V = π ∫ₐᵇ x² dy
```

You need to rearrange a curve to make x the subject when integrating with respect to y, choose the right limits, and evaluate by hand on Paper 1 or with technology on Papers 2 and 3.

## Areas with the y-axis

Swap the roles of x and y. Thin horizontal strips of width x and thickness δy add up to ∫ x dy. If the curve lies to the left of the y-axis, x is negative, which is why the guide writes |x|.

### Worked example 1 (calculator-free)

Find the area enclosed between the curve y = √(x − 1), the y-axis, the x-axis and the line y = 2.

```
Make x the subject: x = y² + 1
y runs from 0 to 2
Area = ∫₀² (y² + 1) dy = [y³/3 + y]₀² = 8/3 + 2 = 14/3
```

The limits are y-values. Using x-limits (here x = 1 to x = 5) with dy is the most common error.

### Worked example 2 (calculator-free): a curve to the left of the axis

Find the area enclosed by x = y² − 4 and the y-axis.

```
The curve meets the y-axis where y² − 4 = 0, so y = ±2
For −2 < y < 2, x = y² − 4 < 0
Area = ∫₋₂² |y² − 4| dy = ∫₋₂² (4 − y²) dy = [4y − y³/3]₋₂² = 32/3
```

## Volumes of revolution: where the formula comes from

Rotate the region under y = f(x), from x = a to x = b, about the x-axis. Cut the solid into thin discs perpendicular to the axis. A disc at position x has radius y and thickness δx, so its volume is about πy² δx. Adding the discs and letting δx → 0 gives V = π ∫ₐᵇ y² dx.

About the y-axis, the discs are horizontal, with radius x and thickness δy, giving V = π ∫ₐᵇ x² dy with y-limits.

### Worked example 3: deriving familiar volumes

```
Cone: rotate y = (r/h)x, 0 ≤ x ≤ h, about the x-axis
V = π ∫₀ʰ (r²/h²)x² dx = π(r²/h²)(h³/3) = (1/3)πr²h

Sphere: rotate y = √(r² − x²), −r ≤ x ≤ r, about the x-axis
V = π ∫₋ᵣʳ (r² − x²) dx = π[r²x − x³/3]₋ᵣʳ = (4/3)πr³
```

Recovering standard formulas is a good check that the method is set up correctly, and it is a common "show that" question.

### Worked example 4 (calculator-free): a trigonometric volume

Rotate the region under y = sin x, 0 ≤ x ≤ π, about the x-axis.

```
V = π ∫₀^π sin²x dx = π ∫₀^π (1 − cos 2x)/2 dx
  = π[x/2 − (sin 2x)/4]₀^π = π²/2
```

Squaring the function first, then using the double-angle identity, is the standard route for sin² and cos².

### Worked example 5 (calculator-free): about the y-axis

The region enclosed by y = x², the y-axis and the line y = 4, for x ≥ 0, is rotated about the y-axis.

```
x² = y, and y runs from 0 to 4
V = π ∫₀⁴ y dy = π[y²/2]₀⁴ = 8π
```

For rotation about the y-axis you need x², which here is simply y; there is no need to find x itself.

## Regions between two curves

If a region lies between an outer curve y = f(x) and an inner curve y = g(x), both on the same side of the axis, the solid is a disc with a hole (a washer). Subtract the volumes:

```
V = π ∫ₐᵇ (f(x)² − g(x)²) dx
```

### Worked example 6 (calculator-free)

The region between y = x and y = x², for 0 ≤ x ≤ 1, is rotated about the x-axis.

```
On (0, 1), x > x², so y = x is the outer curve
V = π ∫₀¹ (x² − x⁴) dx = π(1/3 − 1/5) = 2π/15
```

The trap is π ∫ (x − x²)² dx, which squares the difference of the radii instead of subtracting the squares. That expression gives π/30, a different and wrong answer.

## Area or volume: reading the question

Both kinds of question can use the same region, so read the instruction carefully. "The region is rotated through 2π about the y-axis" asks for π ∫ x² dy. "Find the area of the region" asks for ∫ |x| dy or ∫ |y| dx, with no π and no squaring. When a question asks for both, the limits and the rearranged equation found for the area can be reused for the volume, which is why the area part often comes first. Units also differ: an area is in square units and a volume in cubic units, and stating them is a quick check that the right formula has been used.

## With technology on Paper 2

For y = x e^(−x), 0 ≤ x ≤ 2, rotated about the x-axis:

```
V = π ∫₀² x² e^(−2x) dx = 0.598 (3 s.f.)
```

Write the integral with π, the squared function and the limits before quoting the GDC value. (By hand, two applications of integration by parts from section 5.16 give π(1 − 13e⁻⁴)/4, the same value.)

## Common mistakes

- Using x-limits for an integral with respect to y, or the reverse.
- Forgetting π, or squaring the wrong variable (y² for rotation about the y-axis).
- Writing π ∫ y dx: the radius must be squared.
- For a washer, squaring the difference of the curves instead of subtracting their squares.
- Forgetting the modulus when a curve lies to the left of the y-axis.
- Rearranging incorrectly: y = √(x − 1) gives x = y² + 1, not x = y² − 1.

## Exam technique: the command words

- **Write down an integral for the volume**: include π, the squared function, dx or dy, and the limits.
- **Show that the volume is …**: every step of the integration and the substitution of limits must appear.
- **Find the volume**: on Paper 2, an expression followed by a GDC value earns both the method and the answer marks.

## Where next

Condense the section with the [section 5.17 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-17-revision-notes/) and practise with the [section 5.17 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-17-practice/). Integration techniques used here are in the [section 5.16 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.17.
