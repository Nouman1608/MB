---
title: "AQA A-Level Mathematics: E: Trigonometry (7357)"
seoTitle: "AQA A-Level Maths 7357 Trigonometry Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "E: Trigonometry"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "e-trigonometry-aqa-alevel-maths"
description: "Study guide for AQA A-level Maths (7357) Section E: radians, exact values, sec/cosec/cot, identities, R-form, equations and proof, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section E: Trigonometry (E1 to E9)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. Section E is Paper 1 content, and Papers 2 and 3 can also assess any Paper 1 content, so trigonometry can appear on all three papers. A calculator is required in every 7357 paper, but questions that ask for **exact** values or say **"show that"** still need full working by hand.

Use it alongside the [Trigonometry revision notes](/resources/aqa-a-level-mathematics-trigonometry-revision-notes/) and the [Trigonometry practice questions](/resources/aqa-a-level-mathematics-trigonometry-practice/). The course hub is at [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/) and the printable checklist at [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/).

## What Section E covers

| Ref | What you must be able to do |
|---|---|
| E1 | Sine, cosine and tangent for all arguments; sine and cosine rules; area = ½ab sin C; radians, arc length and sector area |
| E2 | Small angle approximations for sin θ, cos θ, tan θ (θ in radians) |
| E3 | Graphs, symmetries and periodicity of sin, cos, tan; exact values |
| E4 | sec, cosec, cot and arcsin, arccos, arctan: definitions, graphs, domains and ranges |
| E5 | tan θ ≡ sin θ / cos θ and the three Pythagorean identities |
| E6 | Double angle formulae; sin(A ± B), cos(A ± B), tan(A ± B) and their geometric proofs; a cos θ + b sin θ as R cos(θ ± α) or R sin(θ ± α) |
| E7 | Trigonometric equations in an interval, including quadratics and multiple angles |
| E8 | Proofs involving trigonometric functions and identities |
| E9 | Trigonometry in context, including vectors, kinematics and forces |

Appendix B of the specification lists formulae you must be able to use **without them being provided**. For this section it includes the sine rule, cosine rule, area ½ab sin C, cos²A + sin²A ≡ 1, sec²A ≡ 1 + tan²A, cosec²A ≡ 1 + cot²A, and the double angle formulae for sin 2A, cos 2A and tan 2A. Learn these by heart.

## E1: trigonometry for any angle, triangles and radians

For any angle θ, take the point P where a line at angle θ (anticlockwise from the positive x-axis) meets the unit circle. Then **cos θ is the x-coordinate of P, sin θ is the y-coordinate, and tan θ = sin θ / cos θ**. This works for obtuse, reflex and negative angles, which is why sin 150° = sin 30° and cos 150° = −cos 30°.

For any triangle with sides a, b, c opposite angles A, B, C:

- Sine rule: a / sin A = b / sin B = c / sin C
- Cosine rule: a² = b² + c² − 2bc cos A
- Area = ½ab sin C

**Radians.** π radians = 180°. With θ in radians, for a circle of radius r:

- arc length s = rθ
- sector area A = ½r²θ

**Worked example 1.** In triangle ABC, AB = 8 cm, AC = 5 cm and angle BAC = 60°. Find BC, the area, and angle ABC.

```
BC² = 8² + 5² − 2(8)(5)cos 60° = 64 + 25 − 40 = 49  →  BC = 7 cm
Area = ½(8)(5)sin 60° = 20 × (√3/2) = 10√3 cm²
sin B / 5 = sin 60° / 7  →  sin B = 0.6186…  →  B = 38.2°
```

B must be acute because it is opposite the shortest side, so the other sine solution (141.8°) is rejected. When you use the sine rule to find an angle, always ask whether the obtuse option is possible.

**Worked example 2.** A sector has radius 6 cm and angle 2π/3. Find the exact arc length, sector area and area of the segment cut off by the chord.

```
Arc  = 6 × 2π/3 = 4π cm
Sector = ½ × 6² × 2π/3 = 12π cm²
Triangle = ½ × 6² × sin(2π/3) = 18 × √3/2 = 9√3 cm²
Segment = 12π − 9√3 cm²  (≈ 22.1 cm²)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--03-sector-triangle-segment.webp" width="900" height="765" alt="A sector of radius 10 cm and angle π/3 has area 50π/3. Subtracting the triangle of area 25√3 leaves the segment, ½r²(θ − sin θ), about 9.06 cm². The arc length is rθ = 10π/3 cm and θ must be in radians." loading="lazy">
  <figcaption>Segment area is sector area minus triangle area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--05-ambiguous-case.webp" width="900" height="890" alt="Angle A = 34°, a = 9, b = 13. A circle of radius 9 centred on C meets the line through A at two points, giving two triangles: B = 126.1° with c = 5.47, and B = 53.9° with c = 16.1. Two triangles exist when b sin A &lt; a &lt; b, here 7.27 &lt; 9 &lt; 13." loading="lazy">
  <figcaption>Two sides and a non-included angle can fit two different triangles.</figcaption>
</figure>


## E2: small angle approximations

When θ is small and **in radians**:

- sin θ ≈ θ
- cos θ ≈ 1 − θ²/2
- tan θ ≈ θ

**Worked example 3.** Show that, for small θ, (sin 3θ + cos 2θ − 1) / tan θ ≈ 3 − 2θ.

```
sin 3θ ≈ 3θ
cos 2θ ≈ 1 − (2θ)²/2 = 1 − 2θ²
tan θ ≈ θ
(3θ + 1 − 2θ² − 1) / θ = (3θ − 2θ²)/θ = 3 − 2θ
```

Replace the whole argument: cos 2θ becomes 1 − (2θ)²/2, not 1 − 2θ²/2. At θ = 0.05 the exact value is 2.886… and the approximation gives 2.9. These results underpin differentiation of sin x and cos x from first principles; see the [Differentiation study guide](/resources/aqa-a-level-mathematics-differentiation/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--07-small-angle-approximations.webp" width="900" height="1100" alt="For θ from 0 to 1 radian, sin θ and tan θ hug the line y = θ near zero and cos θ hugs 1 − θ²/2. At θ = 0.2, sin = 0.1987, tan = 0.2027, cos = 0.9801 and 1 − θ²/2 = 0.9800." loading="lazy">
  <figcaption>For small θ in radians, sin θ and tan θ are close to θ and cos θ is close to 1 − θ²/2.</figcaption>
</figure>


## E3: graphs, symmetries, periodicity and exact values

- y = sin x and y = cos x have period 2π and range −1 ≤ y ≤ 1.
- y = tan x has period π and vertical asymptotes at x = π/2 + nπ.
- y = sin kx has period 2π/k.

Useful symmetries: sin(π − θ) = sin θ, cos(−θ) = cos θ, sin(−θ) = −sin θ, cos(2π − θ) = cos θ, tan(θ + π) = tan θ, and sin(θ + π/2) = cos θ.

| θ | 0 | π/6 | π/4 | π/3 | π/2 | π |
|---|---|---|---|---|---|---|
| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 | 0 |
| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 | −1 |
| tan θ | 0 | √3/3 | 1 | √3 | undefined | 0 |

**Worked example 4.** Find exactly cos(7π/6) and tan(5π/3).

7π/6 = π + π/6 lies in the third quadrant, where cosine is negative: cos(7π/6) = −cos(π/6) = **−√3/2**. 5π/3 = 2π − π/3 lies in the fourth quadrant, where tangent is negative: tan(5π/3) = **−√3**.

## E4: reciprocal and inverse functions

- sec θ = 1/cos θ, cosec θ = 1/sin θ, cot θ = 1/tan θ = cos θ / sin θ.

| Function | Domain | Range |
|---|---|---|
| sec x | x ≠ π/2 + nπ | sec x ≤ −1 or sec x ≥ 1 |
| cosec x | x ≠ nπ | cosec x ≤ −1 or cosec x ≥ 1 |
| cot x | x ≠ nπ | all real numbers |
| arcsin x | −1 ≤ x ≤ 1 | −π/2 ≤ arcsin x ≤ π/2 |
| arccos x | −1 ≤ x ≤ 1 | 0 ≤ arccos x ≤ π |
| arctan x | all real x | −π/2 < arctan x < π/2 |

The graph of sec x has asymptotes where cos x = 0 and turning points where cos x = ±1. Each inverse function is the reflection in y = x of the restricted part of the original graph.

**Worked example 5.** Find exactly sec(3π/4), arccos(−½) and arcsin(sin(5π/6)).

```
sec(3π/4) = 1/cos(3π/4) = 1/(−√2/2) = −√2
arccos(−½) = 2π/3          (must lie in [0, π])
arcsin(sin(5π/6)) = arcsin(½) = π/6   (not 5π/6: outside the range)
```

## E5: tan θ and the Pythagorean identities

tan θ ≡ sin θ / cos θ, and sin²θ + cos²θ ≡ 1. Dividing the second by cos²θ gives **sec²θ ≡ 1 + tan²θ**; dividing by sin²θ gives **cosec²θ ≡ 1 + cot²θ**.

**Worked example 6.** Given tan x = 5/12 and π < x < 3π/2, find sec x and sin x exactly.

```
sec²x = 1 + 25/144 = 169/144  →  sec x = ±13/12
Third quadrant: cos x < 0, so sec x = −13/12
cos x = −12/13,  sin x = tan x · cos x = (5/12)(−12/13) = −5/13
```

## E6: compound angle, double angle and R-form

Compound angle formulae:

- sin(A ± B) ≡ sin A cos B ± cos A sin B
- cos(A ± B) ≡ cos A cos B ∓ sin A sin B
- tan(A ± B) ≡ (tan A ± tan B) / (1 ∓ tan A tan B)

Putting B = A gives the double angle formulae: sin 2A ≡ 2 sin A cos A; cos 2A ≡ cos²A − sin²A ≡ 2cos²A − 1 ≡ 1 − 2sin²A; tan 2A ≡ 2 tan A / (1 − tan²A).

**Geometric proof.** You need to understand the standard proof of sin(A + B). Draw a right-angled triangle with angle A at the origin O. On its hypotenuse, draw a second right-angled triangle with angle B at O and hypotenuse 1, so its far vertex P makes angle A + B with the x-axis. The second triangle's sides are cos B (along the first hypotenuse) and sin B. Dropping perpendiculars splits the height of P into two parts, sin A cos B and cos A sin B, which add to sin(A + B). A similar diagram gives cos(A + B). Replacing B by −B gives the "minus" versions.

**Worked example 7.** Find sin 75° exactly.

```
sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°
             = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4
```

**R-form.** a cos θ + b sin θ can be written as R cos(θ ∓ α) or R sin(θ ± α), with R = √(a² + b²). Expand the target form and compare coefficients to find α.

**Worked example 8.** Write 8 sin θ − 6 cos θ as R sin(θ − α), with R > 0 and 0 < α < π/2. Hence solve 8 sin θ − 6 cos θ = 5 for 0 ≤ θ < 2π.

```
R sin(θ − α) = R sin θ cos α − R cos θ sin α
R cos α = 8,  R sin α = 6
R = √(64 + 36) = 10,  tan α = 6/8  →  α = 0.6435 rad
10 sin(θ − α) = 5  →  sin(θ − α) = 0.5
θ − α lies in [−0.6435, 5.6397), so θ − α = π/6 or 5π/6
θ = 1.17 or 3.26 (3 s.f.)
```

The maximum value of the expression is 10, when θ − α = π/2.

## E7: solving trigonometric equations

Method:

1. Rearrange to a single function, using identities if needed.
2. Find the principal value with arcsin, arccos or arctan.
3. Use the symmetries (or a sketch) to find every solution in the interval.
4. For a multiple angle such as 2x, first change the interval to one for 2x, then divide at the end.

**Worked example 9.** Solve 2cos²x + 3 sin x − 3 = 0 for 0° ≤ x ≤ 360°.

```
2(1 − sin²x) + 3 sin x − 3 = 0
2 sin²x − 3 sin x + 1 = 0
(2 sin x − 1)(sin x − 1) = 0
sin x = ½: x = 30°, 150°      sin x = 1: x = 90°
```

**Worked example 10.** Solve tan 2x = −1 for 0 ≤ x < 2π.

```
0 ≤ 2x < 4π
Principal value: arctan(−1) = −π/4, so add π repeatedly:
2x = 3π/4, 7π/4, 11π/4, 15π/4
x = 3π/8, 7π/8, 11π/8, 15π/8
```

## E8: proving identities

Start from one side, usually the more complicated one, and work to the other. Never treat the identity as an equation and do the same operation to both sides. Use ≡ in the statement and = in the working lines.

**Worked example 11.** Prove that cos θ / (1 − sin θ) − cos θ / (1 + sin θ) ≡ 2 tan θ.

```
LHS = cos θ[(1 + sin θ) − (1 − sin θ)] / [(1 − sin θ)(1 + sin θ)]
    = 2 sin θ cos θ / (1 − sin²θ)
    = 2 sin θ cos θ / cos²θ
    = 2 sin θ / cos θ = 2 tan θ = RHS
```

For another fully set-out "show that" with a double angle, see the [exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/).

## E9: trigonometry in context

Periodic situations (tides, wheels, oscillations) are modelled by functions such as d = p + q cos(kt). Forces and velocities are resolved with trigonometry: a force F at angle θ to the horizontal has components F cos θ horizontally and F sin θ vertically. In the same way, a velocity or other vector of magnitude r at angle θ to i is r cos θ i + r sin θ j, and the vector ai + bj makes an angle with i whose tangent is b/a (check the quadrant).

**Worked example 12.** The depth of water in a harbour is d = 6 + 2.5 cos(πt/6) metres, t hours after midnight. Find the times in 0 ≤ t ≤ 12 when the depth is 7.25 m.

```
2.5 cos(πt/6) = 1.25  →  cos(πt/6) = 0.5
0 ≤ πt/6 ≤ 2π, so πt/6 = π/3 or 5π/3
t = 2 or t = 10, i.e. 02:00 and 10:00
```

The model's period is 12 hours. For the modelling cycle and how to criticise a model, see the [overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--01-unit-circle-any-angle.webp" width="900" height="850" alt="A circle of radius 1 with P at 210 degrees, measured anticlockwise from the positive x-axis. P = (cos 210°, sin 210°) = (−√3/2, −1/2) lies in the third quadrant, with reference angle 30°. Corner notes give where sin, cos and tan are positive." loading="lazy">
  <figcaption>The point P on the unit circle gives cos θ and sin θ for any angle, and its quadrant gives the signs.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--02-exact-value-triangles.webp" width="900" height="948" alt="Two right-angled triangles: legs 1, 1 and hypotenuse √2 (45°, 45°); and half an equilateral triangle with sides 1, √3, 2 (30°, 60°). A table gives sin, cos and tan of 30°, 45° and 60° read from them, with radian equivalents." loading="lazy">
  <figcaption>Two triangles generate every exact value you need for 30°, 45° and 60°.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--04-which-rule.webp" width="900" height="846" alt="Four triangles show the given information. Two sides and the angle between (SAS) or three sides (SSS) need the cosine rule: missing side 9.23, largest angle 96.4°. Two angles and a side (AAS) need the sine rule: missing side 22.9. Two sides and a non-included angle (SSA) use the sine rule but may have two answers." loading="lazy">
  <figcaption>Match the known sides and angles to the rule: cosine for SAS and SSS, sine for AAS and SSA.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--06-trig-graphs.webp" width="900" height="930" alt="y = sin x and y = cos x over 0 to 360° have period 360° and range −1 to 1; cos is sin shifted. y = tan x has period 180°, zeros at 0, 180 and 360 degrees, passes through 1 at 45° and 225°, and has asymptotes at 90° and 270°." loading="lazy">
  <figcaption>Sine and cosine repeat every 360°; tangent repeats every 180° and has asymptotes.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--08-reciprocal-graphs.webp" width="900" height="1102" alt="y = sec x, cosec x and cot x drawn over their parent functions. sec has asymptotes at 90° and 270°, cosec and cot at 0°, 180° and 360°. sec and cosec only take values y ≥ 1 or y ≤ −1 with period 360°; cot takes all real values with period 180°." loading="lazy">
  <figcaption>A reciprocal graph has an asymptote wherever the parent function is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--09-inverse-trig-graphs.webp" width="900" height="1218" alt="y = sin x restricted to −π/2 ≤ x ≤ π/2 reflects in y = x to give y = arcsin x, with domain −1 to 1 and range −π/2 to π/2. y = arccos x has range 0 to π; y = arctan x has range strictly between −π/2 and π/2 with horizontal asymptotes." loading="lazy">
  <figcaption>Restrict the domain so the function is one-to-one, then reflect in y = x to get the inverse.</figcaption>
</figure>


## Common errors

- Calculator in degree mode for a radian question, or using s = rθ with θ in degrees.
- Taking the obtuse sine-rule angle when the given side lengths rule it out, or missing it when they don't.
- Using cos 2θ ≈ 1 − 2θ²/2 instead of 1 − (2θ)²/2.
- Giving arcsin(sin(5π/6)) as 5π/6: inverse functions return values in their ranges only.
- Not changing the interval for a multiple angle, so solutions are lost.
- Dividing both sides by sin x or cos x instead of factorising, which loses solutions.
- Keeping a root such as sec x = 1/3, which is impossible because |sec x| ≥ 1.

## Next steps

Condense these ideas with the [revision notes](/resources/aqa-a-level-mathematics-trigonometry-revision-notes/), then test yourself on the [practice questions](/resources/aqa-a-level-mathematics-trigonometry-practice/). Try the [free 10-minute diagnostics](/diagnostics/) to check other topics.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.6 E: Trigonometry (E1 to E9), and Appendix B: mathematical formulae and identities.
