---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Trigonometry -- Study Guide"
seoTitle: "9709 P2 Trigonometry Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Trigonometry"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 39
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "trigonometry-cambridge-alevel-maths-2"
description: "Study guide for Cambridge 9709 Pure Mathematics 2 section 2.3: sec, cosec, cot, compound and double angles, and R-form, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

This study guide teaches section 2.3, Trigonometry, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.3 is part of Pure Mathematics 2 and is examined on Paper 2 (1 hour 15 minutes, 50 marks), which is taken only in the AS Level Pure Mathematics route of Paper 1 plus Paper 2. The same learning outcomes appear word for word as section 3.3 of Pure Mathematics 3, so this page also serves the A Level route.

Paper 1 knowledge is assumed. You need the Paper 1 work on sin, cos and tan (exact values, graphs, principal values, and solving equations in an interval), which is in the [Pure Mathematics 1 trigonometry study guide](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry/). A scientific calculator is allowed in every 9709 examination, but no marks are given for unsupported answers from a calculator. Give non-exact answers to 3 significant figures, or angles in degrees to 1 decimal place, unless the question says otherwise.

Use this page with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-trigonometry-revision-notes/) and the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-trigonometry-practice/). For the whole paper, see the [Pure Mathematics 2 guide](/resources/a-level-mathematics-pure-mathematics-2/). Course links: the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/) and the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/).

## What this unit covers

| Syllabus 2.3 | What you must be able to do | Paper |
|---|---|---|
| Six functions | Relate sec, cosec and cot to cos, sin and tan; use the properties and graphs of all six for angles of any size | Paper 2 |
| Pythagorean identities | Use sec²θ ≡ 1 + tan²θ and cosec²θ ≡ 1 + cot²θ | Paper 2 |
| Compound angles | Use sin(A ± B), cos(A ± B) and tan(A ± B) | Paper 2 |
| Double angles | Use the formulae for sin 2A, cos 2A and tan 2A | Paper 2 |
| R-form | Write a sin θ + b cos θ as R sin(θ ± α) or R cos(θ ± α) | Paper 2 |
| Using identities | Simplify, evaluate exactly and solve equations, choosing the right identity for the job | Paper 2 |

The formula list MF19, supplied in the exam, gives the Pythagorean identities, the compound-angle formulae and the double-angle formulae. It does **not** give the R-form method, or the definitions of sec, cosec and cot. You must know those.

## Secant, cosecant and cotangent

```
sec θ = 1/cos θ      cosec θ = 1/sin θ      cot θ = 1/tan θ = cos θ/sin θ
```

Each is undefined where its denominator is zero. The sign of each matches the sign of the function it comes from, so sec is positive wherever cos is positive, and so on.

### Graphs

| | y = sec x | y = cosec x | y = cot x |
|---|---|---|---|
| Period | 360° (2π) | 360° (2π) | 180° (π) |
| Asymptotes | x = 90°, 270°, … | x = 0°, 180°, 360°, … | x = 0°, 180°, 360°, … |
| Range | y ≤ −1 or y ≥ 1 | y ≤ −1 or y ≥ 1 | all real y |
| Key points | (0, 1), (180°, −1) | (90°, 1), (270°, −1) | crosses x-axis at 90°, 270° |

To sketch y = sec x, draw y = cos x lightly first. Where cos x = ±1, sec x = ±1. Where cos x approaches 0, sec x runs off to ±∞, giving an asymptote. The U-shaped branches never enter the band −1 < y < 1, so an equation such as sec x = 0.4 has **no** solutions.

### Worked example 1: exact values

Find the exact values of cosec 240°, sec(7π/4) and cot 150°.

```
sin 240° = -√3/2,   so cosec 240° = -2/√3 = -2√3/3
cos(7π/4) = √2/2,   so sec(7π/4) = 2/√2 = √2
tan 150° = -1/√3,   so cot 150° = -√3
```

Find sin, cos or tan first, using the quadrant, then take the reciprocal.

## The Pythagorean identities

Divide sin²θ + cos²θ ≡ 1 by cos²θ, then by sin²θ:

```
tan²θ + 1 ≡ sec²θ          1 + cot²θ ≡ cosec²θ
```

Use them when an equation mixes tan² with sec, or cot² with cosec. Replace the squared term so that the whole equation is a quadratic in one function.

### Worked example 2: a quadratic in sec θ

Solve 2 tan²θ + sec θ = 1 for 0° ≤ θ ≤ 360°.

```
2(sec²θ - 1) + sec θ = 1
2sec²θ + sec θ - 3 = 0
(2 sec θ + 3)(sec θ - 1) = 0
sec θ = 1       →  cos θ = 1     →  θ = 0°, 360°
sec θ = -3/2    →  cos θ = -2/3  →  θ = 131.8°, 228.2°
```

There are four answers. Change sec to cos before using the calculator, because there is no sec⁻¹ key.

### Worked example 3: proving an identity

Prove that sec θ − cos θ ≡ sin θ tan θ.

```
LHS = 1/cos θ - cos θ
    = (1 - cos²θ)/cos θ
    = sin²θ/cos θ
    = sin θ × (sin θ/cos θ) = sin θ tan θ = RHS
```

Start from one side and work to the other. Do not write an "equation" and change both sides at once.

## Compound-angle formulae

```
sin(A ± B) ≡ sin A cos B ± cos A sin B
cos(A ± B) ≡ cos A cos B ∓ sin A sin B
tan(A ± B) ≡ (tan A ± tan B)/(1 ∓ tan A tan B)
```

Watch the signs in the cos formula: cos(A + B) has a **minus** in the middle. sin(A + B) is **not** sin A + sin B.

### Worked example 4: an exact value

Find the exact value of sin 105°.

```
sin 105° = sin(60° + 45°)
         = sin 60° cos 45° + cos 60° sin 45°
         = (√3/2)(√2/2) + (1/2)(√2/2)
         = (√6 + √2)/4
```

### Worked example 5: angles in different quadrants

A is acute with sin A = 3/5, and B is obtuse with cos B = −5/13. Find the exact value of sin(A + B).

```
cos A = 4/5     (A acute, so positive)
sin B = 12/13   (B obtuse, second quadrant, so sin B > 0)
sin(A + B) = (3/5)(-5/13) + (4/5)(12/13) = -15/65 + 48/65 = 33/65
```

### Worked example 6: solving with a compound angle

Solve sin(θ + 30°) = 2 cos θ for 0° ≤ θ ≤ 360°.

```
sin θ cos 30° + cos θ sin 30° = 2 cos θ
(√3/2) sin θ + (1/2) cos θ = 2 cos θ
(√3/2) sin θ = (3/2) cos θ
tan θ = 3/√3 = √3
θ = 60°, 240°
```

Expand, use exact values of cos 30° and sin 30°, then collect sin θ and cos θ terms to reach a single tan θ.

### Simplifying

The same expansion simplifies expressions. For example, sin(x + 60°) + cos(x + 30°) expands to (1/2) sin x + (√3/2) cos x + (√3/2) cos x − (1/2) sin x, which is √3 cos x.

## Double-angle formulae

Put B = A in the compound-angle formulae:

```
sin 2A ≡ 2 sin A cos A
cos 2A ≡ cos²A - sin²A ≡ 2cos²A - 1 ≡ 1 - 2sin²A
tan 2A ≡ 2 tan A/(1 - tan²A)
```

Choose the version of cos 2A that matches the rest of the equation. If the equation also has sin θ, use 1 − 2sin²θ. If it has cos θ, use 2cos²θ − 1.

### Worked example 7: choosing the right cos 2θ

Solve cos 2θ + 3 sin θ = 2 for 0° ≤ θ ≤ 360°.

```
1 - 2sin²θ + 3 sin θ = 2
2sin²θ - 3 sin θ + 1 = 0
(2 sin θ - 1)(sin θ - 1) = 0
sin θ = 1/2  →  θ = 30°, 150°
sin θ = 1    →  θ = 90°
```

### Worked example 8: tan 2A

Given tan A = 2/3, find tan 2A: 2(2/3)/(1 − 4/9) = (4/3)/(5/9) = **12/5**.

## The R-form: a sin θ + b cos θ

Any a sin θ + b cos θ can be written as a single sine or cosine wave. Method for R sin(θ − α):

1. Expand: R sin(θ − α) = R sin θ cos α − R cos θ sin α.
2. Compare coefficients with the given expression to get R cos α and R sin α.
3. R = √(R²cos²α + R²sin²α). Divide to get tan α.

With R > 0 and α acute, both R cos α and R sin α are positive, which fixes α in the first quadrant.

### Worked example 9: R-form and an equation

(a) Express √7 sin θ − 3 cos θ in the form R sin(θ − α), where R > 0 and 0° < α < 90°.

```
R sin θ cos α - R cos θ sin α:   R cos α = √7,  R sin α = 3
R = √(7 + 9) = 4
tan α = 3/√7,  α = 48.59°
So √7 sin θ - 3 cos θ = 4 sin(θ - 48.59°)
```

(b) Hence solve √7 sin θ − 3 cos θ = 2 for 0° < θ < 360°.

```
4 sin(θ - 48.59°) = 2,  so sin(θ - 48.59°) = 1/2
Range: -48.59° < θ - 48.59° < 311.41°
θ - 48.59° = 30° or 150°
θ = 78.6°, 198.6°
```

(c) The greatest value of √7 sin θ − 3 cos θ is 4, when θ − 48.59° = 90°, that is θ = 138.6°. The least value is −4, at θ = 318.6°.

Keep α to at least 2 decimal places in part (b), and always shift the interval before solving.

## Choosing an identity

| The equation contains | Try |
|---|---|
| tan² and sec, or cot² and cosec | Pythagorean identity → quadratic |
| sin(θ ± k) or cos(θ ± k) with a numerical k | expand with exact values |
| 2θ together with θ | double-angle formula |
| a sin θ + b cos θ = c | R-form |
| sec, cosec or cot alone | change to cos, sin or tan |
| sin 2θ and sin θ with no constant | expand, factorise (do not cancel) |

## Using your calculator

- Write the exact equation, such as cos θ = −2/3, before any angle. The calculator only gives the principal value.
- Store α in memory. Using α = 48.6° instead of 48.59° can move a final answer by 0.1°.
- In radians, set the calculator to radian mode and give answers to 3 significant figures.

## Common errors

- Writing sec θ = 1/sin θ or cosec θ = 1/cos θ.
- Pressing cos⁻¹ to "undo" sec: sec⁻¹(1.5) is not cos⁻¹(1.5). Take the reciprocal first.
- Using cos(A + B) = cos A cos B + sin A sin B.
- Choosing 2cos²θ − 1 when the equation has sin θ, which leaves two different functions.
- Cancelling sin θ from sin 2θ = sin θ and losing the solutions of sin θ = 0.
- Solving for θ − α without shifting the range, so a solution is missed or an extra one appears.
- Taking the wrong ratio for tan α (b/a instead of a/b, or the reverse). Always compare coefficients first.
- Accepting sec θ = 0.5 or cosec θ = −0.3. These have no solutions.

## Next steps

Condense this unit with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-trigonometry-revision-notes/), then try the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-trigonometry-practice/). The [Pure Mathematics 2 practice set](/resources/a-level-mathematics-pure-mathematics-2-practice/) mixes trigonometry with the rest of Paper 2. For the A Level route, the [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) and the [Pure 3 trigonometry, vectors and complex numbers practice](/resources/a-level-mathematics-pure-3-trig-vectors-complex-practice/) cover section 3.3. Check your AS readiness with the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.3 Trigonometry.
