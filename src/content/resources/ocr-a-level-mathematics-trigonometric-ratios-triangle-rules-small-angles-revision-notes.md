---
title: "OCR A Level Mathematics A: Trigonometric ratios, triangle rules, small angles, graphs and basic equations (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths H240 Trig Ratios Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for OCR A Level Maths A (H240): trig ratios, radians, triangle rules, small angles, graphs, simple equations and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections 1.05a to 1.05g and 1.05o of OCR A Level Mathematics A (H240), Version 3.1 (August 2026), for first assessment in 2018. Longer explanations and full worked examples are in the [study guide](/resources/ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles/). To test yourself afterwards, try the [practice questions](/resources/ocr-a-level-mathematics-trigonometric-ratios-triangle-rules-small-angles-practice/). Content that is **A Level only** (Stage 2) is labelled; everything else is Stage 1, shared with AS. Course hub: [/boards/ocr/a-level/mathematics/](/boards/ocr/a-level/mathematics/). Checklist: [/checklists/ocr/a-level/mathematics/](/checklists/ocr/a-level/mathematics/). Unsure where to begin? The [free diagnostics](/diagnostics/) will show you.

## Key facts at a glance

| Idea | Statement |
|---|---|
| Unit circle (1.05a) | Point at angle θ is (cos θ, sin θ); tan θ = sin θ / cos θ |
| Sine rule (1.05b) | a / sin A = b / sin B = c / sin C |
| Cosine rule (1.05b) | a² = b² + c² − 2bc cos A |
| Area (1.05c) | ½ab sin C, with C between a and b |
| Radians (1.05d) | 180° = π; A Level only |
| Arc and sector (1.05d) | s = rθ and A = ½r²θ, θ in radians; A Level only |
| Small angles (1.05e) | sin θ ≈ θ, cos θ ≈ 1 − θ²/2, tan θ ≈ θ, θ in radians; A Level only |
| Periods (1.05f) | sin and cos: 360° (2π); tan: 180° (π) |

## Exact values

| θ (degrees) | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| θ (radians, A Level only) | 0 | π/6 | π/4 | π/3 | π/2 |
| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan θ | 0 | √3/3 | 1 | √3 | undefined |

**Method for any angle**

1. Find the quadrant. Sine is positive in quadrants 1 and 2, cosine in 1 and 4, tangent in 1 and 3.
2. Find the reference angle: the acute angle to the x-axis.
3. Write the table value for the reference angle with the correct sign.

**Reminder.** tan 300°: quadrant 4, reference angle 60°, tangent negative there, so tan 300° = −√3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--01-unit-circle-any-angle.webp" width="900" height="850" alt="A circle of radius 1 with P at 210 degrees, measured anticlockwise from the positive x-axis. P = (cos 210°, sin 210°) = (−√3/2, −1/2) lies in the third quadrant, with reference angle 30°. Corner notes give where sin, cos and tan are positive." loading="lazy">
  <figcaption>The point P on the unit circle gives cos θ and sin θ for any angle, and its quadrant gives the signs.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--02-exact-value-triangles.webp" width="900" height="948" alt="Two right-angled triangles: legs 1, 1 and hypotenuse √2 (45°, 45°); and half an equilateral triangle with sides 1, √3, 2 (30°, 60°). A table gives sin, cos and tan of 30°, 45° and 60° read from them, with radian equivalents." loading="lazy">
  <figcaption>Two triangles generate every exact value you need for 30°, 45° and 60°.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--03-sector-triangle-segment.webp" width="900" height="765" alt="A sector of radius 10 cm and angle π/3 has area 50π/3. Subtracting the triangle of area 25√3 leaves the segment, ½r²(θ − sin θ), about 9.06 cm². The arc length is rθ = 10π/3 cm and θ must be in radians." loading="lazy">
  <figcaption>Segment area is sector area minus triangle area.</figcaption>
</figure>


## Radians

```
degrees → radians: multiply by π/180      radians → degrees: multiply by 180/π
```

Reminder: 72° = 72π/180 = 2π/5, and 7π/12 = 7 × 15° = 105°.

**Sector facts (A Level only):** arc length s = rθ, area A = ½r²θ, perimeter = 2r + rθ.

- If a sector has area A and arc s, then A = ½rs, which helps when two of r, θ, s, A are given.
- Area of a segment = sector area − triangle area = ½r²θ − ½r² sin θ.

**Reminder.** r = 6 and θ = 1.5 give s = 9 and A = ½ × 36 × 1.5 = 27.

**Reminder (segment).** r = 10 and θ = 0.6 give segment area = ½ × 100 × (0.6 − sin 0.6) = 50 × 0.0354 = 1.77 cm².

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--04-which-rule.webp" width="900" height="846" alt="Four triangles show the given information. Two sides and the angle between (SAS) or three sides (SSS) need the cosine rule: missing side 9.23, largest angle 96.4°. Two angles and a side (AAS) need the sine rule: missing side 22.9. Two sides and a non-included angle (SSA) use the sine rule but may have two answers." loading="lazy">
  <figcaption>Match the known sides and angles to the rule: cosine for SAS and SSS, sine for AAS and SSA.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--05-ambiguous-case.webp" width="900" height="890" alt="Angle A = 34°, a = 9, b = 13. A circle of radius 9 centred on C meets the line through A at two points, giving two triangles: B = 126.1° with c = 5.47, and B = 53.9° with c = 16.1. Two triangles exist when b sin A &lt; a &lt; b, here 7.27 &lt; 9 &lt; 13." loading="lazy">
  <figcaption>Two sides and a non-included angle can fit two different triangles.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--09-inverse-trig-graphs.webp" width="900" height="1218" alt="y = sin x restricted to −π/2 ≤ x ≤ π/2 reflects in y = x to give y = arcsin x, with domain −1 to 1 and range −π/2 to π/2. y = arccos x has range 0 to π; y = arctan x has range strictly between −π/2 and π/2 with horizontal asymptotes." loading="lazy">
  <figcaption>Restrict the domain so the function is one-to-one, then reflect in y = x to get the inverse.</figcaption>
</figure>


## Triangle rules

| You know | Use | Watch out for |
|---|---|---|
| Side, opposite angle, one more piece | Sine rule | Ambiguous case when finding an angle |
| Two sides and the included angle | Cosine rule for the third side | Negative cos means obtuse angle |
| Three sides | Cosine rule rearranged | Find the largest angle first |
| Two sides and the included angle | Area = ½ab sin C | The angle must be between the sides |

**Method for a bearings problem**

1. Mark a north line wherever the direction changes.
2. Mark each bearing clockwise from north.
3. Use the back bearing (add or subtract 180°) to find the interior angle at each turn.
4. Apply the sine or cosine rule.
5. Add the interior angle to, or subtract it from, a known bearing for the final answer. Write three figures, and state your answer as a distance and a bearing if both are asked for.

**The ambiguous case.** Given a, b and A (a opposite A), sin B = b sin A / a has solutions B and 180° − B. The second is valid only if A + (180° − B) < 180°.

**Reminder.** A = 50°, a = 9, b = 7. Then sin B = 7 sin 50° / 9 = 0.5958, so B = 36.6° or 143.4°. Since 50° + 143.4° is more than 180°, only B = 36.6° works. Here a is longer than b, so there is one triangle.

**Reminder (area).** Sides 9 and 14 and area 40: ½ × 9 × 14 × sin C = 40, so sin C = 80/126 = 0.635 and C = 39.4° or 140.6°. Give both unless told the angle is acute.

**Reminder (cosine rule for an angle).** Sides 5, 6, 7: cos of the angle opposite 7 is (25 + 36 − 49) / (2 × 5 × 6) = 0.2, so the angle is 78.5°.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--07-small-angle-approximations.webp" width="900" height="1100" alt="For θ from 0 to 1 radian, sin θ and tan θ hug the line y = θ near zero and cos θ hugs 1 − θ²/2. At θ = 0.2, sin = 0.1987, tan = 0.2027, cos = 0.9801 and 1 − θ²/2 = 0.9800." loading="lazy">
  <figcaption>For small θ in radians, sin θ and tan θ are close to θ and cos θ is close to 1 − θ²/2.</figcaption>
</figure>


## Graphs and symmetry

| Graph | Key points |
|---|---|
| y = sin x | passes through (0, 0), maximum 1 at 90°, minimum −1 at 270° |
| y = cos x | passes through (0, 1), zeros at 90° and 270°, minimum −1 at 180° |
| y = tan x | passes through (0, 0), asymptotes at 90° and 270°, repeats every 180° |

```
sin(−x) = −sin x      cos(−x) = cos x      tan(−x) = −tan x
sin(180° − x) = sin x       cos(180° − x) = −cos x
tan(x + 180°) = tan x       sin(90° − x) = cos x
```

**Reminder.** If cos 20° = c, then cos 160° = −c, cos 340° = c and sin 70° = c.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--06-trig-graphs.webp" width="900" height="930" alt="y = sin x and y = cos x over 0 to 360° have period 360° and range −1 to 1; cos is sin shifted. y = tan x has period 180°, zeros at 0, 180 and 360 degrees, passes through 1 at 45° and 225°, and has asymptotes at 90° and 270°." loading="lazy">
  <figcaption>Sine and cosine repeat every 360°; tangent repeats every 180° and has asymptotes.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--08-reciprocal-graphs.webp" width="900" height="1102" alt="y = sec x, cosec x and cot x drawn over their parent functions. sec has asymptotes at 90° and 270°, cosec and cot at 0°, 180° and 360°. sec and cosec only take values y ≥ 1 or y ≤ −1 with period 360°; cot takes all real values with period 180°." loading="lazy">
  <figcaption>A reciprocal graph has an asymptote wherever the parent function is zero.</figcaption>
</figure>


## Small angle approximations (A Level only)

With θ in radians and small: sin θ ≈ θ, cos θ ≈ 1 − θ²/2, tan θ ≈ θ.

1. Replace each trig function by its approximation.
2. Expand and simplify.
3. Neglect powers of θ the question tells you to ignore.

**Reminder.** For small θ, (1 − cos θ) / θ² ≈ (θ²/2) / θ² = 1/2, and tan 3θ − sin θ ≈ 3θ − θ = 2θ.

## Solving simple equations

**Steps**

1. Isolate sin, cos or tan of the angle: for example sin(kθ) = c.
2. Convert the given interval for θ into the interval for kθ.
3. Take the principal value, then use the symmetry for that function:
   sin: α and 180° − α. cos: α and 360° − α. tan: α and α + 180°.
4. Add or subtract full periods until you leave the interval, then divide by k.
5. Quadratics: treat sin θ (or cos θ, tan θ) as a single unknown, factorise, then solve each case.

**Reminder.** Solve cos 3x = −0.5 for 0° ≤ x < 180°. Then 0° ≤ 3x < 540°, and cos is −0.5 at 120°, 240°, 480°. So x = 40°, 80°, 160°.

**Reminder.** Solve tan²θ = 3 for 0° ≤ θ < 360°: tan θ = ±√3, so θ = 60°, 120°, 240°, 300°.

**Reminder (quadratic).** Solve 3 tan²θ − 2 tan θ − 1 = 0 for 0° ≤ θ < 360°. Factorise: (3 tan θ + 1)(tan θ − 1) = 0. Then tan θ = 1 gives 45° and 225°, and tan θ = −1/3 gives 161.6° and 341.6°.

**Reminder (radians, A Level only).** 2 cos x = 1 for −π ≤ x ≤ π gives cos x = 1/2, so x = ±π/3.

## Must-know distinctions

- **Degrees against radians.** Arc length, sector area and the small angle approximations need radians.
- **Principal value against all solutions.** The calculator gives one value only.
- **Included against non-included angle.** Included angle: cosine rule or area. Opposite pair: sine rule.
- **Acute against obtuse.** An angle and its supplement have the same sine, so use other information to choose.
- **Period.** The period of tan is half that of sin and cos.
- **Exact against decimal.** Exact values come from the table. Decimals come from a calculator set to the right mode, and a question that asks for "exact" wants surds or multiples of π.

## Quick self-test

1. Give the exact value of tan 300°.
2. Convert 7π/12 to degrees, and 72° to radians.
3. A sector has radius 6 cm and angle 1.5 radians. Find its arc length and area.
4. In triangle ABC, a = 9, A = 40° and B = 65°. Find b to 3 s.f.
5. A triangle has sides 5, 6 and 7. Find the angle opposite the side of length 7, to 1 d.p.
6. Find the area of a triangle with sides 10 and 12 and an included angle of 30°.
7. Given cos 20° = c, write cos 160° in terms of c.
8. What is the period of y = tan x in radians?
9. For small θ, approximate tan 3θ − sin θ.
10. Solve 2 cos θ = −1 for 0° ≤ θ < 360°.
11. Solve tan x = −1 for −π < x ≤ π.
12. How many solutions does sin x = 0.7 have for 0° ≤ x < 720°?

### Answers

1. −√3
2. 105°; 2π/5
3. Arc length 9 cm; area 27 cm²
4. b = 9 sin 65° / sin 40° = 12.7
5. 78.5°
6. 30
7. −c
8. π
9. 2θ
10. θ = 120°, 240°
11. x = −π/4, 3π/4
12. 4 (44.4°, 135.6°, 404.4°, 495.6°)

## Where marks are usually lost

- Leaving the calculator in the wrong angle mode, especially in radian questions.
- Giving only the principal value, or stopping after one solution of two.
- Rounding too early in a multi-step triangle problem. Keep full values until the final line.
- Writing a bearing as 70° instead of 070°, or giving an angle that is not a bearing at all.
- Choosing the sine rule when the given angle is the included angle. Check which pair of side and opposite angle you have.
- Missing the second triangle in an ambiguous case, or keeping a second angle that does not fit.
- Forgetting to convert the interval when solving for a multiple angle, which loses solutions.
- Applying small angle approximations to a large angle, or keeping terms the question says to neglect.
- Giving a decimal where an exact value was asked for, or the reverse.

## Official syllabus

OCR, *A Level in Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018, published by OCR.
