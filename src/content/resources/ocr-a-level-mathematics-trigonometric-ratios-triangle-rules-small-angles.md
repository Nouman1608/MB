---
title: "OCR A Level Mathematics A: Trigonometric ratios, triangle rules, small angles, graphs and basic equations (H240)"
seoTitle: "OCR A Level Maths H240 Trig Ratios and Triangle Rules"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Trigonometric ratios, triangle rules, small angles, graphs and basic equations"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 112
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "trigonometry-ocr-alevel-maths"
description: "Study guide to OCR A Level Maths A (H240) trig ratios, radians, sine and cosine rules, small angles, graphs and basic equations, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers part of section 1.05 Trigonometry in the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. It teaches 1.05a to 1.05g and 1.05o: the ratios for all angles, radians, the triangle rules, small angle approximations, the basic graphs and simple equations. Content shared with the AS qualification is marked Stage 1, and content for the full A Level is marked **A Level only** (Stage 2). The specification lets you use a scientific or graphical calculator on every paper and expects you to support answers with working.

Reciprocal and inverse functions, identities, compound angles and the R-form are not covered here. Course hub: [/boards/ocr/a-level/mathematics/](/boards/ocr/a-level/mathematics/). Printable checklist: [/checklists/ocr/a-level/mathematics/](/checklists/ocr/a-level/mathematics/). Check where you stand first with the [free diagnostics](/diagnostics/). Also see [OCR A Level Mathematics: Pure Mathematics](/resources/ocr-a-level-mathematics-pure-mathematics/), the [revision notes](/resources/ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles-practice/).

## What this unit covers

| Ref | What you must be able to do | Stage |
|---|---|---|
| 1.05a | Use sin, cos and tan for all arguments | Stage 1 |
| 1.05b | Use the sine and cosine rules, including bearings and the ambiguous case | Stage 1 |
| 1.05c | Use area = ½ab sin C | Stage 1 |
| 1.05d | Work with radians, arc length and sector area | A Level only |
| 1.05e | Use the small angle approximations | A Level only |
| 1.05f | Know the graphs, symmetries and periodicity of sin, cos and tan | Stage 1 |
| 1.05g | Know exact values, in degrees (Stage 1) and in radians (A Level only) | Stage 1 and A Level only |
| 1.05o | Solve simple trigonometric equations in a given interval | Stage 1; radians A Level only |

## 1. Ratios for all angles (1.05a)

Take a circle of radius 1 centred on the origin. Rotate the radius anticlockwise by θ from the positive x-axis; its end-point has coordinates (cos θ, sin θ). The tangent is tan θ = sin θ / cos θ, which is the gradient of the radius, so it is undefined when cos θ = 0 (θ = 90°, 270°, and so on).

The signs follow the quadrant. Sine is positive in the first and second, cosine in the first and fourth, tangent in the first and third. To find a value, take the **reference angle** (the acute angle between the line and the x-axis), use its value, then fix the sign.

Exact values (Stage 1, in degrees):

| θ | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan θ | 0 | √3/3 | 1 | √3 | undefined |

Rebuild these from a right-angled isosceles triangle with sides 1, 1, √2 (45°) and half an equilateral triangle with sides 1, √3, 2 (30° and 60°).

**Worked example 1.** Find the exact value of (a) sin 210°, (b) cos 300°, (c) tan 135°, (d) cos(7π/6).

```
(a) 210° is in the third quadrant, reference angle 30°.
    Sine is negative there:        sin 210° = −1/2
(b) 300° is in the fourth quadrant, reference angle 60°.
    Cosine is positive there:      cos 300° = 1/2
(c) 135° is in the second quadrant, reference angle 45°.
    Tangent is negative there:     tan 135° = −1
(d) 7π/6 = 210°, third quadrant, reference angle 30°.
    Cosine is negative there:      cos(7π/6) = −√3/2
```

## 2. Radians, arcs and sectors (1.05d, A Level only)

One radian is the angle at the centre when the arc is exactly as long as the radius. A half-turn is π radians, so

```
180° = π radians      1° = π/180 radians      1 radian = 180°/π ≈ 57.3°
```

Common conversions: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 360° = 2π. The exact values in the table above hold with θ = 0, π/6, π/4, π/3, π/2, and multiples of these.

With radius r and sector angle θ **in radians**, the specification lists these as formulae you should know:

```
arc length    s = rθ
sector area   A = ½r²θ
```

**Worked example 2.** A sector has radius 7.5 cm and angle 2π/5. Find the arc length, the area and the perimeter.

```
s = rθ = 7.5 × 2π/5 = 3π ≈ 9.42 cm
A = ½r²θ = ½ × 7.5² × 2π/5 = 45π/4 ≈ 35.3 cm²
Perimeter = 2r + s = 15 + 3π ≈ 24.4 cm
```

Check: 2π/5 is 72°, one fifth of a turn, and 2π × 7.5 / 5 = 3π.

If an angle is given in degrees, convert it first.

## 3. The sine and cosine rules (1.05b)

For a triangle with angles A, B, C opposite sides a, b, c:

```
Sine rule     a / sin A = b / sin B = c / sin C
Cosine rule   a² = b² + c² − 2bc cos A
```

Use the sine rule when you know a side, its opposite angle and one more piece. Use the cosine rule for two sides and the included angle, or all three sides.

**Worked example 3 (sine rule).** In triangle ABC, A = 52°, B = 67° and a = 13.8 cm. Find b and c.

```
b = a sin B / sin A = 13.8 × sin 67° / sin 52° = 16.1 cm
C = 180° − 52° − 67° = 61°
c = 13.8 × sin 61° / sin 52° = 15.3 cm
```

**Worked example 4 (cosine rule).** Sides of 8, 10 and 13 cm. Find the largest angle.

It faces the 13 cm side.

```
cos θ = (8² + 10² − 13²) / (2 × 8 × 10) = (64 + 100 − 169) / 160 = −5/160 = −1/32
θ = 91.8°
```

A negative cosine means the angle is obtuse.

**The ambiguous case.** Given two sides and an angle that sits **outside** the pair, the sine rule can give two answers, because sin B = sin(180° − B).

**Worked example 5.** In triangle ABC, A = 35°, a = 7 cm and b = 9 cm. Find the possible values of c.

```
sin B = 9 sin 35° / 7 = 0.7375
B = 47.5° or B = 180° − 47.5° = 132.5°
```

Test each value: 35° + 132.5° = 167.5° < 180°, so both fit.

```
B = 47.5°:  C = 97.5°,  c = 7 sin 97.5° / sin 35° = 12.1 cm
B = 132.5°: C = 12.5°,  c = 7 sin 12.5° / sin 35° = 2.64 cm
```

There are two triangles. If the second B pushed the angle sum over 180°, only one would exist. The specification says questions may include bearings and the ambiguous case.

**Bearings** run clockwise from north and use three figures (070°). Sketch a north line at each point. Find the angle inside the triangle at a turning point from the **back bearing**: add or subtract 180°.

**Worked example 6.** A boat sails 8 km on a bearing of 070° from P to R, then 11 km on 150° to Q. Find PQ and the bearing of Q from P.

The bearing of P from R is 250°. The angle PRQ is 250° − 150° = 100°.

```
PQ² = 8² + 11² − 2 × 8 × 11 × cos 100° = 185 + 30.56 = 215.56
PQ = 14.7 km
sin(∠RPQ) = 11 sin 100° / 14.68 = 0.7379,  ∠RPQ = 47.5°
Bearing of Q from P = 070° + 47.5° = 117.5°
```

## 4. Area of a triangle (1.05c)

```
Area = ½ab sin C
```

C is the angle **between** sides a and b. For 6.5 cm and 9.2 cm with a 112° angle between them, the area is ½ × 6.5 × 9.2 × sin 112° = 27.7 cm².

**Worked example 7.** A triangle has sides 8 cm and 7 cm and area 20 cm². Find the angle between them.

```
½ × 8 × 7 × sin C = 20, so 28 sin C = 20, sin C = 5/7
C = 45.6° or C = 180° − 45.6° = 134.4°
```

Both are valid, because sin C = sin(180° − C). Unless the question says the angle is acute, give both.

## 5. Graphs, symmetry and periodicity (1.05f)

| Function | Period | Range | Key features |
|---|---|---|---|
| y = sin x | 360° (2π) | −1 to 1 | through the origin; maximum at 90°; odd |
| y = cos x | 360° (2π) | −1 to 1 | starts at 1; maximum at 0°; even |
| y = tan x | 180° (π) | all reals | through the origin; asymptotes at x = 90°, 270°, … |

Symmetries you should be able to use to relate values:

```
sin(−x) = −sin x     cos(−x) = cos x     tan(−x) = −tan x
sin(180° − x) = sin x         cos(180° − x) = −cos x
sin(x + 360°) = sin x         tan(x + 180°) = tan x
sin(90° − x) = cos x          cos(90° − x) = sin x
```

In radians replace 180° by π, 360° by 2π and 90° by π/2.

**Worked example 8.** Given sin 20° = k, write each in terms of k: (a) sin 160°, (b) sin 200°, (c) sin(−20°), (d) cos 70°, (e) cos 110°.

```
(a) sin 160° = sin(180° − 20°) = k
(b) sin 200° = sin(180° + 20°) = −k
(c) sin(−20°) = −k
(d) cos 70° = cos(90° − 20°) = sin 20° = k
(e) cos 110° = −cos 70° = −k
```

## 6. Small angle approximations (1.05e, A Level only)

When θ is small and measured in **radians**:

```
sin θ ≈ θ       cos θ ≈ 1 − θ²/2       tan θ ≈ θ
```

They are most accurate near zero. At θ = 0.2, the sin approximation is about 0.7% high, the tan approximation is about 1.3% low and the cos approximation is within 0.01%.

**Worked example 9.** For small θ, find an approximation for (1 − cos 2θ) / (θ sin θ).

```
1 − cos 2θ ≈ 1 − (1 − (2θ)²/2) = 2θ²
θ sin θ ≈ θ × θ = θ²
(1 − cos 2θ) / (θ sin θ) ≈ 2θ² / θ² = 2
```

**Worked example 10.** Use the approximations to find a small solution of cos θ + 4 sin θ = 1.2.

```
1 − θ²/2 + 4θ = 1.2  →  θ² − 8θ + 0.4 = 0
θ = (8 ± √(64 − 1.6)) / 2 = 4 ± √15.6
```

The small root is θ = 4 − 3.9497 = 0.0503. The other root, 7.95, is not small, so the approximation does not apply and you discard it.

## 7. Solving simple equations (1.05o)

Method for sin, cos or tan of a multiple of the unknown:

1. Write the equation as sin(kθ) = c (or cos, tan).
2. Convert the interval for θ into an interval for kθ.
3. Find the **principal value** on your calculator, then use symmetry or periodicity to list every kθ in the new interval.
4. Divide by k to return to θ.

Use the symmetries: sin has solutions α and 180° − α; cos has α and 360° − α; tan has α and α + 180°. Add whole periods to find more.

**Worked example 11.** Solve sin θ = −0.6 for 0° ≤ θ < 360°.

The principal value is −36.9°, which is outside the interval. The reference angle is 36.87°. Sine is negative in quadrants three and four.

```
θ = 180° + 36.87° = 216.9°     θ = 360° − 36.87° = 323.1°
```

**Worked example 12.** Solve cos 2θ = 0.3 for 0° ≤ θ < 360°.

Then 0° ≤ 2θ < 720°. Principal value: 72.54°.

```
2θ = 72.54°, 287.46°, 432.54°, 647.46°
θ  = 36.3°,  143.7°,  216.3°,  323.7°
```

**Worked example 13.** Solve tan 3θ = 2 for −180° < θ < 180°.

Then −540° < 3θ < 540°. Principal value 63.43°, and tan repeats every 180°.

```
3θ = −476.57°, −296.57°, −116.57°, 63.43°, 243.43°, 423.43°
θ  = −158.9°, −98.9°, −38.9°, 21.1°, 81.1°, 141.1°
```

**Quadratic equations.** The specification includes quadratics in sin θ, cos θ or tan θ. Treat sin θ as a single unknown and factorise.

**Worked example 14.** Solve 2 sin²θ − sin θ − 1 = 0 for 0° ≤ θ < 360°.

```
(2 sin θ + 1)(sin θ − 1) = 0
sin θ = 1 gives θ = 90°
sin θ = −1/2 gives θ = 210° or 330°
```

Equations that mix sin and cos need an identity to make them quadratic in one function. That belongs to the identities unit.

**Radians (A Level only).** Solve 2 sin(2x − π/3) = √3 for 0 ≤ x ≤ π.

```
sin(2x − π/3) = √3/2,  and −π/3 ≤ 2x − π/3 ≤ 5π/3
2x − π/3 = π/3 or 2π/3   (the next solution, 7π/3, is out of range)
x = π/3 or π/2
```

## Common errors

- Using arc length, sector area or the small angle approximations with an angle in degrees.
- Taking the first calculator answer and stopping. List every solution in the interval.
- Changing the interval for kθ but not dividing the final answers by k.
- In the ambiguous case, forgetting to check the second angle fits in the triangle.
- Using ½ab sin C with an angle that is not between sides a and b.
- Measuring a bearing from the wrong north line. Draw a sketch.

## Official syllabus

OCR, *A Level in Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018, published by OCR.
