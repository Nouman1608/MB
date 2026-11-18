---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.5 Definitions of cosθ, sinθ and tanθ using the unit circle"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.05
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-5"
description: "Study guide to IB Maths AA 3.5: unit circle definitions of sin, cos and tan, exact values of any multiple, y = x tan θ and the ambiguous case of the sine rule."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 3.5 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021). It is SL content, examined at SL and HL. The section asks for:

- the definitions of cos θ and sin θ in terms of the unit circle;
- the definition of tan θ as sin θ / cos θ;
- exact values of the trigonometric ratios of 0, π/6, π/4, π/3, π/2 and their multiples;
- the extension of the sine rule to the ambiguous case.

The [circular functions study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/) gives the quadrant signs, the table of exact values and one ambiguous-case example as part of a wider unit. This page goes further: angles larger than 2π and negative angles, where the exact values come from, reading ratios from a point, the line y = x tan θ, and a complete test for how many triangles the sine rule allows. Then use the [unit circle revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-5-revision-notes/) and the [unit circle practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-5-practice/).

## The definitions

Take the circle of radius 1 centred at the origin. Start at (1, 0) and rotate through an angle θ: anticlockwise for positive θ, clockwise for negative θ. The point reached is

**P = (cos θ, sin θ)**, and **tan θ = sin θ / cos θ** (defined whenever cos θ ≠ 0).

This definition works for **every** real θ, not just angles between 0 and π/2. The right-angled triangle definitions agree with it in the first quadrant, but only the unit circle explains, for example, why cos(2π/3) is negative.

Immediate consequences:

- −1 ≤ cos θ ≤ 1 and −1 ≤ sin θ ≤ 1, since P is on a circle of radius 1.
- Adding 2π brings P back to the same place, so the ratios of θ and θ + 2π are equal.
- tan θ is undefined at θ = π/2, 3π/2 and so on, where P is on the y-axis and cos θ = 0.
- tan θ is the gradient of OP.
- On a circle of radius r, the point at angle θ is (r cos θ, r sin θ).

## The line through the origin

Because tan θ is the gradient of OP, the straight line through the origin making angle θ with the positive x-axis is **y = x tan θ**.

For θ = 5π/6, tan θ = −√3/3, so the line is y = −(√3/3)x. Going the other way, the line y = √3x makes angle π/3 with the positive x-axis, since tan(π/3) = √3.

## Where the exact values come from

You should be able to rebuild the table, not only remember it.

- **π/4:** an isosceles right-angled triangle with shorter sides 1 has hypotenuse √2. So sin(π/4) = cos(π/4) = 1/√2 = √2/2 and tan(π/4) = 1.
- **π/6 and π/3:** cut an equilateral triangle of side 2 in half. The halves have sides 1, √3 and 2, with angles π/6 and π/3. So sin(π/6) = 1/2, cos(π/6) = √3/2, tan(π/6) = 1/√3 = √3/3, and the π/3 values swap sine and cosine, with tan(π/3) = √3.
- **0 and π/2:** read straight from the points (1, 0) and (0, 1).

## Exact values of any multiple

For an angle such as 11π/6 or −5π/4, use three steps:

1. **Locate** P: reduce by multiples of 2π if needed and decide the quadrant.
2. **Reference angle**: the acute angle between OP and the x-axis.
3. **Sign**: from the quadrant (x-coordinate for cos, y-coordinate for sin, their quotient for tan).

### Worked example 1

Find the exact values of sin(11π/6), cos(−5π/4), tan(7π/3) and cos(3π/2).

```
11π/6:  fourth quadrant, reference π/6, sin negative  → −1/2
−5π/4:  clockwise 5π/4 lands in the second quadrant,
        reference π/4, cos negative                    → −√2/2
7π/3 = 2π + π/3: same point as π/3                     → √3
3π/2:   P = (0, −1)                                    → 0
```

For −5π/4, sketch it. Clockwise rotation through π reaches (−1, 0); a further π/4 clockwise goes up into the second quadrant.

## Reading ratios from a point

If a point on the unit circle is given, its coordinates **are** the cosine and sine.

### Worked example 2

The point P(−3/5, 4/5) lies on the unit circle, with OP making angle θ with the positive x-axis.

```
cos θ = −3/5,  sin θ = 4/5,  tan θ = (4/5)/(−3/5) = −4/3
θ is in the second quadrant.
The point at angle θ + π is the reflection through O: (3/5, −4/5),
so cos(θ + π) = 3/5 and sin(θ + π) = −4/5.
```

Check that a given point really is on the unit circle: (−3/5)² + (4/5)² = 9/25 + 16/25 = 1.

## The ambiguous case of the sine rule

Suppose you know two sides, b and a, and an acute angle A that is **not** between them (so a is opposite A). Drawing the triangle, side a swings from the end of b and may meet the third line once, twice, or not at all. The height of the triangle from that end is b sin A, which decides it:

| Condition (A acute) | Number of triangles |
|---|---|
| a < b sin A | none |
| a = b sin A | one, right-angled |
| b sin A < a < b | two |
| a ≥ b | one |

The two triangles arise because sin B = sin(180° − B): the sine rule gives an acute value B and an obtuse value 180° − B, and both fit when b sin A < a < b.

### Worked example 3: two triangles, two methods

In triangle ABC, AB = 10 cm, BC = 7.5 cm and angle BAC = 35°. Find the possible lengths of AC.

```
Test: AB sin 35° = 5.736 < 7.5 < 10, so two triangles.

Method 1 (sine rule):
sin C = 10 sin 35° / 7.5 = 0.7648
C = 49.9°  or  C = 130.1°
B = 95.1°  or  B = 14.9°
AC = 7.5 sin B / sin 35° = 13.0 cm  or  3.36 cm

Method 2 (cosine rule, with AC = x):
7.5² = x² + 10² − 2(10)x cos 35°
x² − 16.38x + 43.75 = 0
x = 13.0 or 3.36
```

The cosine-rule route turns the ambiguity into a quadratic with two positive roots, which is a quick check. If BC had been 5 cm, then 5 < 5.736 and no triangle would exist; the sine rule would give sin C > 1.

## Common mistakes

- Treating sin, cos and tan as defined only for acute angles.
- Rotating clockwise for a positive angle, or anticlockwise for a negative one.
- Reference angle measured from the y-axis instead of the x-axis.
- tan(π/2) written as 0 or 1; it is undefined.
- Decimal answers when exact values are asked.
- Missing the obtuse solution in the ambiguous case, or keeping it when the angle sum exceeds 180°.
- Claiming two triangles without checking b sin A < a < b.

## Exam technique: command words

- **Write down the exact value**: one line; surds and fractions, no decimals.
- **Find the exact value** of cos θ given a point or a quadrant: state the quadrant and the sign reason.
- **Show that there are two possible triangles**: give the test value b sin A, or show both angles and check the angle sum.
- **Find the possible values**: give every value, labelled for each triangle.
- Paper 1 questions on exact values must be done without a calculator; on Paper 2, still state both ambiguous-case answers.

## Where to go next

Condense this guide with the [unit circle revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-5-revision-notes/) and practise with the [unit circle practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-5-practice/). The non-ambiguous sine rule is in the [sine rule, cosine rule and area guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-2/), and identities built on the unit circle continue in the [Pythagorean and double angle identities guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-6/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 3.5.
