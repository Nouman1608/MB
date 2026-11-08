---
title: "AQA A-Level Mathematics: E: Trigonometry (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Trigonometry Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for AQA A-level Maths (7357) trigonometry, E1 to E9: formula tables, exact values, method steps and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, use the [Trigonometry study guide](/resources/aqa-a-level-mathematics-trigonometry/). These notes condense **Section E: Trigonometry (E1 to E9)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. Section E is Paper 1 content and can also be assessed on Papers 2 and 3. Test yourself afterwards with the [Trigonometry practice questions](/resources/aqa-a-level-mathematics-trigonometry-practice/). Course hub: [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/). Printable checklist: [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/).

## Formulae you must know without being given them

Appendix B of the specification says these must be used without being provided:

| Result | Formula |
|---|---|
| Sine rule | a / sin A = b / sin B = c / sin C |
| Cosine rule | a² = b² + c² − 2bc cos A |
| Area of triangle | ½ab sin C |
| Pythagorean | cos²A + sin²A ≡ 1 |
| | sec²A ≡ 1 + tan²A |
| | cosec²A ≡ 1 + cot²A |
| Double angle | sin 2A ≡ 2 sin A cos A |
| | cos 2A ≡ cos²A − sin²A |
| | tan 2A ≡ 2 tan A / (1 − tan²A) |

Also know (they follow from the above or are standard in E1 and E6):

- cos 2A ≡ 2cos²A − 1 ≡ 1 − 2sin²A
- sin(A ± B) ≡ sin A cos B ± cos A sin B
- cos(A ± B) ≡ cos A cos B ∓ sin A sin B
- tan(A ± B) ≡ (tan A ± tan B) / (1 ∓ tan A tan B)
- tan θ ≡ sin θ / cos θ
- Arc length s = rθ, sector area A = ½r²θ (θ in radians)

## E1: definitions and radians

- On the unit circle, the point at angle θ is (cos θ, sin θ). This defines sin and cos for **every** angle, including negative and reflex.
- Signs by quadrant (0 to 2π): first, all positive; second, sin positive; third, tan positive; fourth, cos positive.
- π rad = 180°, so 1 rad ≈ 57.3°. Multiply degrees by π/180 to convert.
- Segment area = sector − triangle = ½r²θ − ½r² sin θ.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--01-unit-circle-any-angle.webp" width="900" height="850" alt="A circle of radius 1 with P at 210 degrees, measured anticlockwise from the positive x-axis. P = (cos 210°, sin 210°) = (−√3/2, −1/2) lies in the third quadrant, with reference angle 30°. Corner notes give where sin, cos and tan are positive." loading="lazy">
  <figcaption>The point P on the unit circle gives cos θ and sin θ for any angle, and its quadrant gives the signs.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--04-which-rule.webp" width="900" height="846" alt="Four triangles show the given information. Two sides and the angle between (SAS) or three sides (SSS) need the cosine rule: missing side 9.23, largest angle 96.4°. Two angles and a side (AAS) need the sine rule: missing side 22.9. Two sides and a non-included angle (SSA) use the sine rule but may have two answers." loading="lazy">
  <figcaption>Match the known sides and angles to the rule: cosine for SAS and SSS, sine for AAS and SSA.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--05-ambiguous-case.webp" width="900" height="890" alt="Angle A = 34°, a = 9, b = 13. A circle of radius 9 centred on C meets the line through A at two points, giving two triangles: B = 126.1° with c = 5.47, and B = 53.9° with c = 16.1. Two triangles exist when b sin A &lt; a &lt; b, here 7.27 &lt; 9 &lt; 13." loading="lazy">
  <figcaption>Two sides and a non-included angle can fit two different triangles.</figcaption>
</figure>


## E2: small angles (θ in radians)

| Function | Approximation |
|---|---|
| sin θ | θ |
| cos θ | 1 − θ²/2 |
| tan θ | θ |

Substitute the **whole** argument: sin 4θ ≈ 4θ, cos 3θ ≈ 1 − 9θ²/2.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--07-small-angle-approximations.webp" width="900" height="1100" alt="For θ from 0 to 1 radian, sin θ and tan θ hug the line y = θ near zero and cos θ hugs 1 − θ²/2. At θ = 0.2, sin = 0.1987, tan = 0.2027, cos = 0.9801 and 1 − θ²/2 = 0.9800." loading="lazy">
  <figcaption>For small θ in radians, sin θ and tan θ are close to θ and cos θ is close to 1 − θ²/2.</figcaption>
</figure>


## E3: graphs and exact values

| Graph | Period | Range | Key features |
|---|---|---|---|
| y = sin x | 2π | [−1, 1] | odd: sin(−x) = −sin x |
| y = cos x | 2π | [−1, 1] | even: cos(−x) = cos x |
| y = tan x | π | all reals | asymptotes at x = π/2 + nπ |

y = sin kx and y = cos kx have period 2π/k; y = tan kx has period π/k.

Exact values to learn:

| θ | 0 | π/6 | π/4 | π/3 | π/2 |
|---|---|---|---|---|---|
| sin | 0 | ½ | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | ½ | 0 |
| tan | 0 | √3/3 | 1 | √3 | — |

Use the related acute angle and the quadrant sign for multiples, e.g. sin(4π/3) = −√3/2.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--02-exact-value-triangles.webp" width="900" height="948" alt="Two right-angled triangles: legs 1, 1 and hypotenuse √2 (45°, 45°); and half an equilateral triangle with sides 1, √3, 2 (30°, 60°). A table gives sin, cos and tan of 30°, 45° and 60° read from them, with radian equivalents." loading="lazy">
  <figcaption>Two triangles generate every exact value you need for 30°, 45° and 60°.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--06-trig-graphs.webp" width="900" height="930" alt="y = sin x and y = cos x over 0 to 360° have period 360° and range −1 to 1; cos is sin shifted. y = tan x has period 180°, zeros at 0, 180 and 360 degrees, passes through 1 at 45° and 225°, and has asymptotes at 90° and 270°." loading="lazy">
  <figcaption>Sine and cosine repeat every 360°; tangent repeats every 180° and has asymptotes.</figcaption>
</figure>


## E4: reciprocal and inverse functions

| Function | Domain | Range |
|---|---|---|
| sec x = 1/cos x | x ≠ π/2 + nπ | ≤ −1 or ≥ 1 |
| cosec x = 1/sin x | x ≠ nπ | ≤ −1 or ≥ 1 |
| cot x = cos x / sin x | x ≠ nπ | all reals |
| arcsin x | [−1, 1] | [−π/2, π/2] |
| arccos x | [−1, 1] | [0, π] |
| arctan x | all reals | (−π/2, π/2) |

- sec x has a local minimum of 1 where cos x = 1 and a local maximum of −1 where cos x = −1.
- cot x has asymptotes where sin x = 0 and zeros where cos x = 0.
- Inverse graphs: reflect the restricted original in y = x.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--08-reciprocal-graphs.webp" width="900" height="1102" alt="y = sec x, cosec x and cot x drawn over their parent functions. sec has asymptotes at 90° and 270°, cosec and cot at 0°, 180° and 360°. sec and cosec only take values y ≥ 1 or y ≤ −1 with period 360°; cot takes all real values with period 180°." loading="lazy">
  <figcaption>A reciprocal graph has an asymptote wherever the parent function is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--09-inverse-trig-graphs.webp" width="900" height="1218" alt="y = sin x restricted to −π/2 ≤ x ≤ π/2 reflects in y = x to give y = arcsin x, with domain −1 to 1 and range −π/2 to π/2. y = arccos x has range 0 to π; y = arctan x has range strictly between −π/2 and π/2 with horizontal asymptotes." loading="lazy">
  <figcaption>Restrict the domain so the function is one-to-one, then reflect in y = x to get the inverse.</figcaption>
</figure>


## E6: R-form in steps

To write a cos θ + b sin θ in a given form:

1. Expand the target, e.g. R cos(θ − α) = R cos θ cos α + R sin θ sin α.
2. Match coefficients: R cos α = a, R sin α = b.
3. R = √(a² + b²); tan α = b/a, checking the signs put α in the stated interval.
4. Max value R, min value −R. Set the bracket equal to 0 or π (for cos) or ±π/2 (for sin) to find where they occur.

Geometric proofs: you must **understand** the diagram proof of sin(A + B) and cos(A + B) (two right-angled triangles stacked at the origin), not just quote the results.

## E7: solving equations in steps

1. Use an identity to get one function: replace cos²x by 1 − sin²x, tan²x by sec²x − 1, and so on.
2. Factorise. Never divide by a trig expression that could be zero.
3. Reject impossible roots: |sin x| ≤ 1, |cos x| ≤ 1, |sec x| ≥ 1, |cosec x| ≥ 1.
4. For f(kx + c), change the interval first: if 0 ≤ x < 2π then c ≤ kx + c < 2πk + c.
5. Use symmetry: sin x = s gives x and π − x; cos x = c gives x and 2π − x; tan x = t gives x and x + π. Then add or subtract the period.
6. Give answers in the units of the interval, to 3 s.f. or exactly as asked.

**Worked reminder (factorise, don't divide).** Solve 2 sin x cos x = cos x for 0 ≤ x ≤ 2π.

```
2 sin x cos x − cos x = 0
cos x (2 sin x − 1) = 0
cos x = 0: x = π/2, 3π/2
sin x = ½: x = π/6, 5π/6
```

Dividing by cos x at the start would lose π/2 and 3π/2.

**Worked reminder (E5, choose the sign).** θ is obtuse and cos θ = −3/5. Then sin²θ = 1 − 9/25 = 16/25, and sin θ > 0 in the second quadrant, so sin θ = 4/5, tan θ = −4/3 and cosec θ = 5/4.

## E8: proof in steps

- Start from one side (usually the messier one) and finish with "= RHS".
- Common moves: write everything in sin and cos; combine fractions; use 1 − sin²θ = cos²θ; factorise.
- Don't cross-multiply an identity or work on both sides at once.

## E9: context reminders

- Model h = p + q cos(kt): mean level p, amplitude |q|, period 2π/k.
- Resolve a force F at angle θ to a direction: F cos θ along it, F sin θ perpendicular to it.
- State the units of t and h in your answer.

## Must-know distinctions

- **sin⁻¹x vs (sin x)⁻¹**: arcsin x is the inverse function; cosec x = 1/sin x.
- **Degrees vs radians**: arc length, sector area, small angles and calculus all need radians.
- **Identity (≡) vs equation (=)**: an identity is true for all values; an equation is solved for particular ones.
- **Principal value vs all solutions**: arcsin, arccos and arctan return one value; the question usually wants all in the interval.
- **R cos(θ − α) vs R sin(θ + α)**: the same R, but α comes from different coefficient pairs.

## Quick self-test

1. Convert 135° to radians.
2. A sector has radius 9 cm and angle 0.8 rad. Find its arc length and area.
3. Find tan(4π/3) exactly.
4. Find cosec(−π/6).
5. Find arctan(−1).
6. Use a small angle approximation to simplify 1 − cos 4θ.
7. State the period of y = cos 3x.
8. Expand cos(x + π/3).
9. Given sin A = 1/3, find cos 2A.
10. Write cos x − √3 sin x in the form R cos(x + α), with R > 0 and 0 < α < π/2.
11. State the range of arccos x.
12. How many solutions does sin 3x = ½ have for 0 ≤ x < 2π?

### Answers

1. 3π/4
2. Arc = 9 × 0.8 = 7.2 cm; area = ½ × 81 × 0.8 = 32.4 cm²
3. √3 (third quadrant, tan positive)
4. −2
5. −π/4
6. 1 − (1 − 16θ²/2) = 8θ²
7. 2π/3
8. ½cos x − (√3/2) sin x
9. 1 − 2(1/9) = 7/9
10. R = √(1 + 3) = 2; R cos α = 1 and R sin α = √3, so α = π/3: **2 cos(x + π/3)**
11. 0 ≤ arccos x ≤ π
12. Six (3x runs over [0, 6π): x = π/18, 5π/18, 13π/18, 17π/18, 25π/18, 29π/18)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-circular-measure--03-sector-triangle-segment.webp" width="900" height="765" alt="A sector of radius 10 cm and angle π/3 has area 50π/3. Subtracting the triangle of area 25√3 leaves the segment, ½r²(θ − sin θ), about 9.06 cm². The arc length is rθ = 10π/3 cm and θ must be in radians." loading="lazy">
  <figcaption>Segment area is sector area minus triangle area.</figcaption>
</figure>


## Where marks are usually lost

- Leaving the calculator in degrees for a radian interval, or giving a mixture of degrees and radians.
- Giving only the principal value from arcsin or arccos when the interval holds more solutions.
- Dividing an equation such as sin x cos x = sin x by sin x and losing the sin x = 0 solutions.
- Not extending the interval for a multiple angle, so solutions beyond 2π are missed.
- Keeping impossible roots such as cos x = 2 or sec x = 0.5 without comment.
- Choosing the wrong sign for a reciprocal value: check the quadrant before taking ±√ in sec²x = 1 + tan²x.
- Writing approximations like sin 3θ ≈ θ instead of 3θ.
- In "prove" questions, working on both sides or skipping the step that uses an identity.
- In R cos(θ − α) form, finding α from tan α = a/b instead of b/a, or giving α in degrees when the interval is in radians.
- Using the sine rule for an angle without checking whether the obtuse alternative is possible.

For the link between small angles and differentiating sin x from first principles, see the [Differentiation revision notes](/resources/aqa-a-level-mathematics-differentiation-revision-notes/). For examiner-style setting out of a "show that", see the [exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/). When you're ready, the [free 10-minute diagnostics](/diagnostics/) help you find other gaps.

## Frequently asked questions

**Which trigonometry formulae do you need to remember for AQA 7357?**
Appendix B of the specification lists formulae that must be used without being provided. In practice you should also know the compound angle formulae, the double angle forms of cos 2A, and the radian formulae for arc length and sector area.

**What are the small angle approximations?**
When θ is small and in radians, sin θ ≈ θ, cos θ ≈ 1 − θ²/2 and tan θ ≈ θ. Substitute the whole argument, so sin 4θ ≈ 4θ.

**What is the period of y = sin kx and y = tan kx?**
y = sin kx and y = cos kx have period 2π/k, while y = tan kx has period π/k.

**What is the difference between sin⁻¹x and (sin x)⁻¹?**
sin⁻¹x means arcsin x, the inverse function. (sin x)⁻¹ means 1/sin x, which is cosec x.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.6 E: Trigonometry (E1 to E9), and Appendix B: mathematical formulae and identities.
