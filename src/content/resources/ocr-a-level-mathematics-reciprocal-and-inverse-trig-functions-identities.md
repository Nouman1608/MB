---
title: "OCR A Level Mathematics A: Reciprocal and inverse trig, identities, compound angles, R-form and proof (H240)"
seoTitle: "OCR A Level Maths A Trig Identities Study Guide"
resourceType: "study-guides"
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
description: "Study guide to sec, cosec, cot, inverse trig, identities, compound and double angles, R-form, proof and modelling for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide follows the OCR A Level Mathematics A specification (Version 3.1, August 2026, for first assessment in 2018). It covers sections 1.05h to 1.05q of the Pure Mathematics trigonometry content: reciprocal and inverse trigonometric functions, the Pythagorean identities, compound and double angle formulae, the R-form, trigonometric equations, proof and modelling. In the specification, 1.05j and the basic form of 1.05o are Stage 1 (shared with AS Level); everything else here is Stage 2, so A Level only. Pure Mathematics content is assessed on all three written papers.

Use it with the [revision notes](/resources/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-practice/). The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/), the printable list is the [checklist](/checklists/ocr/a-level/mathematics/), and the [free diagnostics](/diagnostics/) show where to start. For the wider Pure Mathematics picture see the [pure mathematics overview](/resources/ocr-a-level-mathematics-pure-mathematics/). Basic ratios, triangle rules, small angles and the basic graphs are assumed.

## What this unit covers

| Section | You must be able to | Stage |
|---|---|---|
| 1.05h | Use sec, cosec, cot and arcsin, arccos, arctan, and their links to sin, cos, tan | 2 |
| 1.05i | Know the graphs, domains and ranges of those functions | 2 |
| 1.05j | Use sin²θ + cos²θ = 1 together with tan θ = sin θ / cos θ | 1 |
| 1.05k | Use sec²θ = 1 + tan²θ and cosec²θ = 1 + cot²θ | 2 |
| 1.05l | Use the double angle formulae and the sin, cos, tan of A ± B | 2 |
| 1.05m | Understand the geometrical proofs of those formulae | 2 |
| 1.05n | Write a cos θ + b sin θ as R cos(θ ± α) or R sin(θ ± α) | 2 |
| 1.05o | Solve equations with multiples of the angle, quadratics and identities | 1 and 2 |
| 1.05p | Construct proofs using trigonometric identities | 2 |
| 1.05q | Use trigonometric functions to model situations | 2 |

## 1.05h and 1.05i: reciprocal and inverse functions

The three reciprocal functions are:

| Function | Definition | Undefined when | Range |
|---|---|---|---|
| sec θ | 1 / cos θ | cos θ = 0 | sec θ ≤ −1 or sec θ ≥ 1 |
| cosec θ | 1 / sin θ | sin θ = 0 | cosec θ ≤ −1 or cosec θ ≥ 1 |
| cot θ | 1 / tan θ = cos θ / sin θ | sin θ = 0 | all real numbers |

The graph of sec θ has vertical asymptotes wherever cos θ = 0, and it touches 1 or −1 where cos θ is 1 or −1. Between asymptotes it is a U shape (where cos is positive) or a ∩ shape (where cos is negative). cosec θ is the same picture built from sin θ, with asymptotes at 0, π, 2π and so on. cot θ falls from +∞ to −∞ between each pair of asymptotes, crosses zero where cos θ = 0, and has period π.

The inverse functions undo sin, cos and tan on a restricted domain, giving the principal values:

| Function | Domain | Range |
|---|---|---|
| arcsin x (or sin⁻¹ x) | −1 ≤ x ≤ 1 | −π/2 ≤ y ≤ π/2 |
| arccos x (or cos⁻¹ x) | −1 ≤ x ≤ 1 | 0 ≤ y ≤ π |
| arctan x (or tan⁻¹ x) | all real x | −π/2 < y < π/2 |

Each graph is the reflection in the line y = x of the matching piece of the original graph. arcsin rises from (−1, −π/2) through the origin to (1, π/2). arccos falls from (−1, π) through (0, π/2) to (1, 0). arctan rises through the origin and flattens towards y = ±π/2.

**Worked example 1.** Given cosec θ = −13/5 and cos θ > 0, find sec θ and cot θ.

```
sin θ = 1 / cosec θ = −5/13
cos θ is positive, so cos θ = +√(1 − 25/169) = 12/13
sec θ = 13/12
cot θ = cos θ / sin θ = (12/13) ÷ (−5/13) = −12/5
```

**Worked example 2.** Evaluate (a) arcsin(−√3/2), (b) arccos(−1/2), (c) arcsin(sin 5π/6).

(a) The angle in −π/2 ≤ y ≤ π/2 with sine −√3/2 is **−π/3**.
(b) The angle in 0 ≤ y ≤ π with cosine −1/2 is **2π/3**.
(c) sin 5π/6 = 1/2, and the principal value with sine 1/2 is **π/6**, not 5π/6.

In (c), arcsin always returns a value in its own range.

## 1.05j and 1.05k: identities

Dividing sin²θ + cos²θ = 1 by cos²θ gives sec²θ = 1 + tan²θ. Dividing by sin²θ gives cosec²θ = 1 + cot²θ. Both hold for every θ where the functions are defined. Use sin²θ + cos²θ = 1 to turn a mixed equation into one trig function, and the other two when sec, cosec, tan or cot appear.

**Worked example 3 (Stage 1).** Solve 2 sin²x − cos x − 1 = 0 for 0 ≤ x < 360°.

```
2(1 − cos²x) − cos x − 1 = 0
1 − cos x − 2cos²x = 0
2cos²x + cos x − 1 = 0
(2cos x − 1)(cos x + 1) = 0
cos x = 1/2  → x = 60°, 300°
cos x = −1   → x = 180°
```

**Worked example 4 (radians).** Solve 2 tan²θ + sec θ = 1 for 0 ≤ θ < 2π.

```
2(sec²θ − 1) + sec θ − 1 = 0
2sec²θ + sec θ − 3 = 0
(2sec θ + 3)(sec θ − 1) = 0
sec θ = −3/2 → cos θ = −2/3 → θ = 2.3005 or 2π − 2.3005 = 3.9827
sec θ = 1    → cos θ = 1    → θ = 0
```

## 1.05l: compound and double angle formulae

| Formula | Statement |
|---|---|
| sin(A ± B) | sin A cos B ± cos A sin B |
| cos(A ± B) | cos A cos B ∓ sin A sin B |
| tan(A ± B) | (tan A ± tan B) / (1 ∓ tan A tan B) |
| sin 2A | 2 sin A cos A |
| cos 2A | cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A |
| tan 2A | 2 tan A / (1 − tan²A) |

Watch the sign in cos(A ± B): the sign flips. The double angle formulae are the compound ones with B = A.

**Worked example 5.** Find the exact value of cos 105°.

```
cos 105° = cos(60° + 45°)
         = cos 60° cos 45° − sin 60° sin 45°
         = (1/2)(√2/2) − (√3/2)(√2/2)
         = (√2 − √6) / 4
```

**Worked example 6.** A is acute with sin A = 4/5. B is obtuse with cos B = −5/13. Find sin(A + B).

cos A = 3/5 and sin B = 12/13. Then sin(A + B) = (4/5)(−5/13) + (3/5)(12/13) = (−20 + 36)/65 = **16/65**.

**Worked example 7.** Solve cos 2x + 3 sin x = 2 for 0 ≤ x ≤ 360°.

Use cos 2x = 1 − 2sin²x so that only sin x remains:

```
1 − 2sin²x + 3 sin x − 2 = 0
2sin²x − 3 sin x + 1 = 0
(2 sin x − 1)(sin x − 1) = 0
sin x = 1/2 → x = 30°, 150°
sin x = 1   → x = 90°
```

**Worked example 8.** Solve tan(θ + 45°) = 4 for 0 ≤ θ < 180°. Expand: (tan θ + 1)/(1 − tan θ) = 4, so tan θ + 1 = 4 − 4 tan θ, giving tan θ = 3/5 and θ = **31.0°**.

## 1.05m: geometrical proofs

You should understand where the formulae come from. Here is a proof of sin(A + B) for acute A and B.

Take a triangle XYZ with ZX = p and ZY = q. Draw the perpendicular ZW from Z to XY, with W between X and Y. Let ZW = h, ∠XZW = A and ∠WZY = B. Then ∠XZY = A + B.

```
Area of XYZ = ½ p q sin(A + B)
Also area = area ZXW + area ZWY
          = ½ p h sin A + ½ q h sin B
In the two right-angled triangles, h = q cos B and h = p cos A
So area = ½ p (q cos B) sin A + ½ q (p cos A) sin B
        = ½ p q (sin A cos B + cos A sin B)
```

Comparing the two area expressions gives sin(A + B) = sin A cos B + cos A sin B. Replacing B by −B gives sin(A − B). Then cos x = sin(90° − x) turns it into the cosine formula:

```
cos(A + B) = sin(90° − A − B) = sin((90° − A) − B)
           = cos A cos B − sin A sin B
```

Dividing sin(A + B) by cos(A + B) and then dividing top and bottom by cos A cos B gives the tan formula.

## 1.05n: the R-form

To write a cos θ + b sin θ as R sin(θ + α), expand R sin(θ + α) = R cos α sin θ + R sin α cos θ and match coefficients. Then R cos α = (the sin θ coefficient) and R sin α = (the cos θ coefficient), with R = √(a² + b²) and R > 0. Take α acute when both coefficients are positive; otherwise check the quadrant from the signs of R cos α and R sin α.

**Worked example 9.** Write 7 sin x − 24 cos x as R sin(x − α), with R > 0 and 0 < α < π/2. Hence solve 7 sin x − 24 cos x = 10 for 0 ≤ x < 360°, and state the greatest value.

R sin(x − α) = R cos α sin x − R sin α cos x. So R cos α = 7 and R sin α = 24.

```
R = √(49 + 576) = 25
tan α = 24/7 → α = 1.287 rad (73.74°)
25 sin(x − 73.74°) = 10 → sin(x − 73.74°) = 0.4
x − 73.74° = 23.58° or 156.42°
x = 97.3° or 230.2°
```

The greatest value of 7 sin x − 24 cos x is **25**, at x = α + 90° = 163.7°; the least value is −25. The graph is a sine wave of amplitude 25, shifted right by α, crossing the y-axis at −24.

For R cos(θ ± α), match R cos θ cos α ∓ R sin θ sin α. For example √3 cos θ − sin θ = 2 cos(θ + π/6).

## 1.05o: equations with multiples of the angle

For sin(kθ + c), cos(kθ + c) or tan(kθ + c), first widen the interval: if 0 ≤ x < 360°, then 2x + 20° runs from 20° to 740°. Solve for the whole expression, then undo the shift and the multiple.

**Worked example 10.** Solve cos(2x + 20°) = 0.4 for 0 ≤ x < 360°.

```
2x + 20° runs from 20° to 740°
cos⁻¹ 0.4 = 66.42°, so 2x + 20° = 66.42°, 293.58°, 426.42°, 653.58°
2x = 46.42°, 273.58°, 406.42°, 633.58°
x = 23.2°, 136.8°, 203.2°, 316.8°
```

A doubled angle gives twice as many solutions.

## 1.05p: proof

Proofs of identities start from one side and reach the other, using the identities above. Do not work on both sides at once.

**Worked example 11.** Prove that cosec 2x + cot 2x ≡ cot x.

```
LHS = 1/sin 2x + cos 2x / sin 2x
    = (1 + cos 2x) / sin 2x
    = 2cos²x / (2 sin x cos x)
    = cos x / sin x = cot x = RHS
```

For an inequality, use the R-form: since sin x + cos x = √2 sin(x + π/4) and sin never exceeds 1, sin x + cos x ≤ √2 for all x.

## 1.05q: modelling

Periodic situations such as tides, sound waves and alternating quantities are modelled by a + R sin(kt + α). The constant a is the mean level, R is the amplitude and 2π/k is the period.

**Worked example 12.** The depth of water, d metres, in a harbour t hours after midnight is d = 7 + 2.4 sin(πt/6) + 1.8 cos(πt/6). Find the greatest and least depths, and when the depth is 8.5 m for 0 ≤ t < 12.

```
R = √(2.4² + 1.8²) = 3, tan α = 1.8/2.4 → α = 0.6435
d = 7 + 3 sin(πt/6 + 0.6435)
Greatest 7 + 3 = 10 m, least 7 − 3 = 4 m
Greatest depth when πt/6 + 0.6435 = π/2 → t = 1.771 (01:46)
d = 8.5 → sin(πt/6 + 0.6435) = 0.5
πt/6 + 0.6435 = 5π/6 or 13π/6
t = 3.771 or 11.771, that is 03:46 and 11:46
```

In mechanics, a force P at angle θ above the horizontal has components P cos θ and P sin θ. Resolving first, then using the R-form, finds the best angle: cos θ + μ sin θ has greatest value √(1 + μ²).

## Common errors

- Using arcsin(sin x) = x for any x; it only holds in the principal range.
- Writing cos(A + B) = cos A cos B + sin A sin B.
- Dividing both sides by cos x, which loses the solutions where cos x = 0.
- Finding R sin(x + α) with α negative or obtuse without checking signs.
- Solving cos(2x + 20°) = 0.4 and giving only two answers.

When you are ready, try the [practice questions](/resources/ocr-a-level-mathematics-reciprocal-and-inverse-trig-functions-identities-practice/).

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Sections 1.05h to 1.05q.
