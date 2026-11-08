---
title: "OCR A Level Mathematics A: Reciprocal and inverse trig, identities, compound angles, R-form and proof (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths A Trig Identities Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Reciprocal and inverse trig functions, identities, compound and double angles, R-form and proof"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 113
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "trigonometry-ocr-alevel-maths"
description: "Condensed formulae, methods and a ten-question self-test on reciprocal and inverse trig, identities, double angles and the R-form for OCR A Level Maths A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), first assessment 2018, sections 1.05h to 1.05q. Read the [study guide](/resources/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities/) for full explanations and worked examples. Section 1.05j and the basic form of 1.05o are Stage 1 (shared with AS Level); everything else here is Stage 2, A Level only.

Test yourself with the [practice questions](/resources/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-practice/). Related pages: the [OCR A Level Mathematics course page](/boards/ocr/a-level/mathematics/), the [checklist](/checklists/ocr/a-level/mathematics/), the [pure mathematics overview](/resources/ocr-a-level-mathematics-pure-mathematics/) and the [free diagnostics](/diagnostics/).

## Definitions (1.05h, 1.05i)

| Function | Meaning | Undefined when | Range |
|---|---|---|---|
| sec θ | 1 / cos θ | cos θ = 0 | sec θ ≤ −1 or sec θ ≥ 1 |
| cosec θ | 1 / sin θ | sin θ = 0 | cosec θ ≤ −1 or cosec θ ≥ 1 |
| cot θ | 1 / tan θ | sin θ = 0 | all reals |

| Inverse | Domain | Range (principal values) |
|---|---|---|
| arcsin x | −1 ≤ x ≤ 1 | −π/2 ≤ y ≤ π/2 |
| arccos x | −1 ≤ x ≤ 1 | 0 ≤ y ≤ π |
| arctan x | all real x | −π/2 < y < π/2 |

Graph key points: arcsin passes through (−1, −π/2), (0, 0), (1, π/2). arccos passes through (−1, π), (0, π/2), (1, 0). arctan passes through the origin with asymptotes y = ±π/2. Each is a reflection in y = x of the restricted original.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--01-reciprocal-sec-cosec.webp" width="900" height="1130" alt="Two graphs from −π to 2π. Secant (copper) has asymptotes where cosine is zero and touches cosine at its maximum and minimum values 1 and −1; none of it lies between −1 and 1. Cosecant is the same idea built from sine, with asymptotes at 0, π and 2π." loading="lazy">
  <figcaption>A reciprocal graph has asymptotes where the original is zero and touches it where the original is ±1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--02-cot-graph.webp" width="900" height="880" alt="Cotangent from 0 to 2π with tangent dotted. Asymptotes at 0, π and 2π; each branch falls and crosses zero at π/2 and 3π/2, where tangent is undefined. Period π." loading="lazy">
  <figcaption>Cot x falls in every branch, has period π and equals 0 where tan x is undefined.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--03-arcsin-reflection.webp" width="900" height="1070" alt="On equal axes the sine curve restricted to −π/2 ≤ x ≤ π/2 and its reflection in y = x, the arcsin curve, which runs from (−1, −π/2) to (1, π/2). Points swap coordinates, so domain and range swap too." loading="lazy">
  <figcaption>The graph of arcsin is the restricted sine graph reflected in y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--04-arccos-arctan.webp" width="900" height="1150" alt="Top: arccos falls from (−1, π) through (0, π/2) to (1, 0), domain −1 to 1, range 0 to π. Bottom: arctan rises through the origin towards asymptotes y = ±π/2, domain all real x." loading="lazy">
  <figcaption>arccos and arctan have different restricted ranges: 0 to π and −π/2 to π/2.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--05-arcsin-sin-trap.webp" width="900" height="910" alt="The zigzag graph of arcsin(sin x) against the line y = x. They agree only for x between −π/2 and π/2. At x = 5π/6 the value is π/6." loading="lazy">
  <figcaption>arcsin(sin x) always lands in [−π/2, π/2], so it equals x only on that interval.</figcaption>
</figure>


## Identities (1.05j, 1.05k)

| Identity | Stage |
|---|---|
| tan θ = sin θ / cos θ | 1 |
| sin²θ + cos²θ = 1 | 1 |
| sec²θ = 1 + tan²θ | 2 |
| cosec²θ = 1 + cot²θ | 2 |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--06-three-triangles.webp" width="900" height="770" alt="A quarter unit circle with a ray at 35°. The triangle with hypotenuse 1 gives sin² + cos² = 1; the triangle on the tangent line gives 1 + tan² = sec²; the triangle on the line y = 1 gives 1 + cot² = cosec²." loading="lazy">
  <figcaption>Pythagoras in three similar triangles gives all three identities.</figcaption>
</figure>


## Compound and double angles (1.05l, 1.05m)

| Formula | Result |
|---|---|
| sin(A ± B) | sin A cos B ± cos A sin B |
| cos(A ± B) | cos A cos B ∓ sin A sin B |
| tan(A ± B) | (tan A ± tan B) / (1 ∓ tan A tan B) |
| sin 2A | 2 sin A cos A |
| cos 2A | cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A |
| tan 2A | 2 tan A / (1 − tan²A) |

Geometrical proof outline: split a triangle by an altitude into angles A and B, write the whole area as ½pq sin(A + B), then as the sum of two smaller areas. Replace B by −B for the difference formula, use cos x = sin(90° − x) for the cosine formula, and divide for tan.

**Reminder.** tan 15° = tan(45° − 30°) = (1 − 1/√3) / (1 + 1/√3) = (√3 − 1)/(√3 + 1) = **2 − √3**.

**Reminder (double angle in an equation).** Solve sin 2x = sin x for 0 ≤ x ≤ 2π. Write 2 sin x cos x − sin x = 0, so sin x (2 cos x − 1) = 0. Then sin x = 0 gives x = 0, π, 2π, and cos x = 1/2 gives x = π/3, 5π/3. Five solutions in all.

**Reminder (finding exact values).** If sin A = 3/5 with A acute, then cos A = 4/5, so sin 2A = 2(3/5)(4/5) = 24/25 and cos 2A = 1 − 2(9/25) = 7/25. Pick the form of cos 2A that uses the value you already know.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--07-sin-sum-proof.webp" width="900" height="880" alt="Triangle XYZ is split by a perpendicular ZW into angles A and B. Its area is ½pq sin(A+B) and also ½ph sin A + ½qh sin B; with h = q cos B = p cos A this gives sin(A+B) = sin A cos B + cos A sin B." loading="lazy">
  <figcaption>The area of one triangle, written two ways, proves the sin(A + B) formula.</figcaption>
</figure>


## The R-form (1.05n)

| Starting form | Match | R and α |
|---|---|---|
| a cos θ + b sin θ = R cos(θ − α) | R cos α = a, R sin α = b | R = √(a² + b²), tan α = b/a |
| a cos θ + b sin θ = R sin(θ + α) | R cos α = b, R sin α = a | R = √(a² + b²), tan α = a/b |
| a cos θ − b sin θ = R cos(θ + α) | R cos α = a, R sin α = b | tan α = b/a |

### Method in steps

Choose R sin(θ ± α) or R cos(θ ± α) to suit the question. Use the form the question asks for; if it leaves the choice to you, a form whose signs match your coefficients keeps α acute.

1. Expand the target form, for example R cos θ cos α + R sin θ sin α.
2. Equate the coefficient of cos θ and the coefficient of sin θ.
3. Find R as √(a² + b²), then tan α as the ratio of the two equations.
4. Check the quadrant of α from the signs of R cos α and R sin α.
5. Use the single wave: greatest value is R, least is −R, and the wave has period 2π.

Features of the graph of y = a cos θ + b sin θ: it is a sine or cosine wave of amplitude R, period 2π, with y-intercept a. The greatest value R occurs where the bracket in R cos(θ − α) is 0, that is at θ = α. The least value −R occurs at θ = α + π.

**Reminder.** 8 cos θ + 6 sin θ = 10 cos(θ − α) with tan α = 6/8, α = 36.87°. To solve 8 cos θ + 6 sin θ = 7: cos(θ − 36.87°) = 0.7, so θ − 36.87° = ±45.57°, giving θ = 82.4° or 351.3° for 0 ≤ θ < 360°.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--08-r-form-wave.webp" width="900" height="1100" alt="y = 7 sin x − 24 cos x equals 25 sin(x − 73.74°): a sine wave of amplitude 25 shifted right by α. The 7, 24, 25 triangle gives R cos α = 7 and R sin α = 24. The line y = 10 meets the curve at 97.3° and 230.2°." loading="lazy">
  <figcaption>R is the amplitude and α the shift of the combined wave.</figcaption>
</figure>


## Solving equations (1.05o)

### Method in steps

1. Rewrite using an identity so that one trig function remains.
2. Treat as a quadratic (factorise or use the formula) and solve for that function.
3. Reject any value outside the range of the function, such as sec θ = 1/3.
4. For a multiple or shifted angle, widen the interval first.
5. Find the principal value, list every solution in the widened interval, then undo the multiple.
6. Never divide by a trig function that could be zero; factorise instead.

**Reminder.** Solve cosec²θ = 3 cot θ + 1 for 0 < θ < 2π.

```
1 + cot²θ = 3 cot θ + 1
cot θ (cot θ − 3) = 0
cot θ = 0 → θ = π/2, 3π/2
cot θ = 3 → tan θ = 1/3 → θ = 0.3217, 3.4633
```

**Reminder (tan with a multiple).** Solve tan 2x = −1 for 0 ≤ x < 180° by the same widening: 2x runs from 0 to 360°, tan is −1 at 135° and 315°, so x = 67.5° and 157.5°. Note that tan has period 180°, so the next value of 2x after 135° is 315°, not 225°.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities--09-solve-sin-symmetry.webp" width="900" height="960" alt="Sine graph with the line y = −0.4 meeting it at 203.6° and 336.4°, each a reference angle α = 23.58° from 180° and 360°. The calculator value −23.58° is outside the interval." loading="lazy">
  <figcaption>Find the reference angle, then use symmetry to list every solution in the interval.</figcaption>
</figure>


## Proof (1.05p)

### Method in steps

1. Pick the more complicated side and start there.
2. Replace every double angle, tan or reciprocal using a known identity.
3. Simplify step by step; do not work on both sides at once.
4. Finish with the exact form of the other side and write "as required".
5. For an inequality, use the R-form or a completed square and state why the bound holds.

**Reminder.** Prove that tan x + cot x ≡ 2 cosec 2x. Start with sin x / cos x + cos x / sin x = (sin²x + cos²x) / (sin x cos x) = 1 / (sin x cos x) = 2 / (2 sin x cos x) = 2 / sin 2x = 2 cosec 2x.

## Modelling (1.05q)

A model a + R sin(kt + α) has mean level a, amplitude R and period 2π/k. Its greatest value is a + R and its least is a − R. To find when the quantity reaches a given level, solve the sine equation and list every solution in the stated time interval. A model written as p sin kt + q cos kt is converted to the R-form first, which makes the greatest and least values and the times they occur easy to read off. When resolving a force at angle θ above the horizontal, the components are P cos θ and P sin θ.

## Must-know distinctions

- arcsin x is an angle; cosec x is 1/sin x. The notation sin⁻¹ x means arcsin x, not 1/sin x.
- arcsin(sin x) = x only when x is in the principal range.
- cos 2A has three forms; choose the one that leaves the function you want.
- cos(A + B) has a minus between the products; sin(A + B) has a plus.
- sin²θ + cos²θ = 1 is Stage 1; the sec and cosec identities are Stage 2.

## Quick self-test

1. State the domain and range of arccos x.
2. Find the exact value of cot(3π/4).
3. Given tan A = 1/3, find tan 2A.
4. Simplify (1 − cos 2x) / sin 2x.
5. Find the exact value of sin 75°.
6. Write 5 cos θ − 12 sin θ in the form R cos(θ + α), with α in radians to 3 decimal places.
7. Find the greatest value of 1 / (20 + 5 cos θ + 12 sin θ).
8. Solve sin 3x = 0.5 for 0 ≤ x ≤ 180°.
9. How many solutions does cos 3x = 0.2 have for 0 ≤ x < 360°?
10. Evaluate arctan(−√3), giving the answer in terms of π.

### Answers

1. Domain −1 ≤ x ≤ 1, range 0 ≤ y ≤ π.
2. cos(3π/4) = −√2/2 and sin(3π/4) = √2/2, so **−1**.
3. (2/3) / (1 − 1/9) = (2/3) × (9/8) = **3/4**.
4. 1 − cos 2x = 2sin²x and sin 2x = 2 sin x cos x, so the result is **tan x**.
5. sin(45° + 30°) = (√2/2)(√3/2) + (√2/2)(1/2) = **(√6 + √2)/4**.
6. R cos α = 5, R sin α = 12, so R = 13 and tan α = 12/5: **13 cos(θ + 1.176)**.
7. The denominator is 20 + 13 cos(θ − α), least value 7, so the greatest value is **1/7**.
8. 3x = 30°, 150°, 390°, 510°, so **x = 10°, 50°, 130°, 170°**.
9. 3x runs over 0 to 1080°, which holds three full turns with two solutions each, so **6**.
10. **−π/3**.

## Where marks are usually lost

- Giving 7π/6 for arcsin(sin 7π/6) instead of the principal value.
- Writing cos(A + B) = cos A cos B + sin A sin B.
- Cancelling a factor of cos x or sin x and so losing solutions.
- Keeping an impossible root such as sec θ = 1/3 or sin θ = 1.5 without comment.
- Not widening the interval for a multiple angle, so solutions are missing.
- Quoting α in degrees when the question asks for radians, or the reverse.
- Starting a proof from both sides at once.
- Rounding R or α early and then losing accuracy in the final answers.

## Frequently asked questions

**What are the principal ranges of arcsin, arccos and arctan?**
arcsin x gives values from −π/2 to π/2, arccos x from 0 to π, and arctan x strictly between −π/2 and π/2.

**Does sin⁻¹ x mean 1/sin x?**
No. sin⁻¹ x means arcsin x, which is an angle. The reciprocal 1/sin x is cosec x.

**Which form of cos 2A should you use?**
cos 2A has three forms: cos²A − sin²A, 2cos²A − 1 and 1 − 2sin²A. Choose the one that leaves only the function you want in the equation.

**How do you write a cos θ + b sin θ in R-form?**
Write it as R cos(θ − α), with R cos α = a and R sin α = b, so R = √(a² + b²) and tan α = b/a. Keep α unrounded in later working.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Sections 1.05h to 1.05q.
