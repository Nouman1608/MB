---
title: "Cambridge A Level Mathematics (9709): Trigonometry (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.3
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "trigonometry-cambridge-alevel-maths-3"
description: "Study guide to Cambridge 9709 Paper 3 section 3.3 Trigonometry: sec, cosec and cot, compound and double angles, the R-form and choosing the right identity."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.3 Trigonometry** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 3 (1 hour 50 minutes, 75 marks). The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) solves one cosec–cot equation and one R-form equation. This page works through the whole section: the graphs of the reciprocal functions, exact values, every family of identity the syllabus names, and the decision that most marks depend on, which is choosing the right identity. Afterwards use the [3.3 revision notes](/resources/cambridge-a-level-mathematics-9709-trigonometry-cambridge-alevel-maths-3-revision-notes/) and the [3.3 practice questions](/resources/cambridge-a-level-mathematics-9709-trigonometry-cambridge-alevel-maths-3-practice/).

## What section 3.3 asks for

| Syllabus statement | In practice |
|---|---|
| Relationship of sec, cosec and cot to cos, sin and tan; properties and graphs of all six functions for angles of any magnitude | Sketch the graphs, state asymptotes and ranges, and solve equations in any interval |
| Use identities to simplify, evaluate exactly and solve equations, selecting the appropriate identity | Use sec²θ ≡ 1 + tan²θ, cosec²θ ≡ 1 + cot²θ, the expansions of sin(A ± B), cos(A ± B) and tan(A ± B), the double-angle formulae, and a sin θ + b cos θ as R sin(θ ± α) or R cos(θ ± α) |

The Pythagorean, compound-angle and double-angle identities are printed in the formula list (MF19). The R-form method is not, so you need to know how to derive R and α.

## The three reciprocal functions

```text
sec θ = 1/cos θ      cosec θ = 1/sin θ      cot θ = 1/tan θ = cos θ/sin θ
```

| Function | Asymptotes (degrees) | Range | Period |
|---|---|---|---|
| sec θ | θ = 90°, 270°, … where cos θ = 0 | sec θ ≤ −1 or sec θ ≥ 1 | 360° |
| cosec θ | θ = 0°, 180°, 360°, … where sin θ = 0 | cosec θ ≤ −1 or cosec θ ≥ 1 | 360° |
| cot θ | θ = 0°, 180°, 360°, … | all real values | 180° |

Each sec and cosec graph is a set of U-shaped branches touching y = 1 or y = −1 where the cosine or sine graph has a maximum or minimum. The range explains a quick rejection rule: an equation such as cosec θ = 1/3 has **no** solutions, because |cosec θ| ≥ 1.

## Exact values from compound angles

*Worked example 1.* Find the exact value of tan 75°.

```text
tan(45° + 30°) = (tan 45° + tan 30°)/(1 − tan 45° tan 30°)
               = (1 + 1/√3)/(1 − 1/√3)
               = (√3 + 1)/(√3 − 1)          multiply top and bottom by √3
               = (√3 + 1)²/(3 − 1) = (4 + 2√3)/2 = 2 + √3
```

"Exact" means surds and fractions. A calculator value of 3.73 scores nothing here.

## Simplifying before solving

*Worked example 2.* Show that sin(x + 30°) + cos(x + 60°) ≡ cos x, and hence solve sin(x + 30°) + cos(x + 60°) = 0.4 for 0° < x < 360°.

```text
sin(x + 30°) = sin x cos 30° + cos x sin 30° = (√3/2) sin x + ½ cos x
cos(x + 60°) = cos x cos 60° − sin x sin 60° = ½ cos x − (√3/2) sin x
Sum = cos x
cos x = 0.4   →   x = 66.4° or x = 360° − 66.4° = 293.6°
```

## Choosing an identity

The syllabus asks you to "select an identity or identities appropriate to the context". Use this checklist.

| The equation contains | Use |
|---|---|
| sec²θ with tan θ, or tan²θ with sec θ | sec²θ ≡ 1 + tan²θ, then a quadratic |
| cosec²θ with cot θ, or cot²θ with cosec θ | cosec²θ ≡ 1 + cot²θ |
| sin 2θ or cos 2θ with sin θ or cos θ | Double-angle formulae; pick the cos 2θ version that matches the other terms |
| An angle such as θ + 45° | Expand with the compound-angle formula |
| a sin θ + b cos θ = c | R-form |

*Worked example 3.* Solve 2 tan²θ + sec θ = 1 for 0° ≤ θ ≤ 360°.

```text
2(sec²θ − 1) + sec θ − 1 = 0
2 sec²θ + sec θ − 3 = 0
(2 sec θ + 3)(sec θ − 1) = 0
sec θ = 1      →  cos θ = 1      →  θ = 0°, 360°
sec θ = −3/2   →  cos θ = −2/3   →  θ = 131.8°, 228.2°
```

Both end points are included because the interval uses ≤. Four solutions in all.

*Worked example 4.* Solve 2 sin 2θ = 3 cos θ for 0 < θ < π.

```text
4 sin θ cos θ = 3 cos θ
cos θ(4 sin θ − 3) = 0
cos θ = 0     →  θ = π/2
sin θ = 3/4   →  θ = 0.848 or π − 0.848 = 2.29
```

Dividing both sides by cos θ would lose θ = π/2. Factorise instead. The interval is in radians, so the answers must be in radians.

*Worked example 5.* Solve tan(θ + 45°) = 6 tan θ for 0° < θ < 360°.

```text
Let t = tan θ.  (t + 1)/(1 − t) = 6t
t + 1 = 6t − 6t²
6t² − 5t + 1 = 0   →   (3t − 1)(2t − 1) = 0
t = 1/3:  θ = 18.4°, 198.4°
t = 1/2:  θ = 26.6°, 206.6°
```

tan has period 180°, so each value of t gives two angles in this interval.

## The R-form and greatest or least values

a sin θ + b cos θ can be written as R sin(θ + α), and a cos θ + b sin θ as R cos(θ − α), with R = √(a² + b²). Expand the form you are given, compare coefficients, and find α from tan α.

*Worked example 6.* Express 5 cos θ + 12 sin θ in the form R cos(θ − α), with R > 0 and 0° < α < 90°. Hence find the greatest value of 1/(20 − 5 cos θ − 12 sin θ).

```text
R cos(θ − α) = R cos θ cos α + R sin θ sin α
R cos α = 5,  R sin α = 12
R = √(25 + 144) = 13,   tan α = 12/5   →   α = 67.38°
20 − 13 cos(θ − 67.38°) lies between 20 − 13 = 7 and 20 + 13 = 33
Greatest value of the fraction = 1/7, when θ = 67.4°
```

A fraction is greatest when its denominator is least, so you need the minimum of 20 − 13 cos(θ − α), not its maximum.

## Common mistakes

- Dividing by sin θ or cos θ and losing solutions.
- Keeping cosec θ = 1/3 or sec θ = 0.5, which are impossible.
- Using the cos 2θ form that leaves a mixture of sin θ and cos θ.
- Writing tan α = 5/12 instead of 12/5 by comparing the wrong coefficients.
- Answering in degrees when the interval is in radians, or the other way round.
- Missing the second angle in each period, or angles beyond 360° when solving for 2θ.
- Giving decimals when the question says "exact".

## Exam technique for Paper 3 command words

- **Show that** or **prove**: work on one side only, quote each identity as you use it, and finish with the target expression.
- **Hence**: use the identity or R-form just obtained. Starting again usually costs time and may lose method marks.
- **Find the exact value**: keep surds and simplify fully, rationalising where needed.
- **Solve for 0° < θ < 360°**: give all solutions in the interval to 1 decimal place for degrees, or 3 significant figures for radians, unless told otherwise.
- For an equation in 2θ, change the interval first: 0° < θ < 180° becomes 0° < 2θ < 360°.

## Frequently asked questions

**Is the R-form in the 9709 formula list?**
No. MF19 gives the compound-angle and double-angle formulae, but you must derive R and α by expanding and comparing coefficients.

**How do I know which double-angle formula for cos 2θ to use?**
Choose the version that matches the rest of the equation: 1 − 2 sin²θ if the other terms are in sin θ, 2 cos²θ − 1 if they are in cos θ.

**Why can cosec θ = 1/3 be rejected straight away?**
The range of cosec θ is cosec θ ≤ −1 or cosec θ ≥ 1, so no angle gives a value between −1 and 1.

## Where to go next

- [3.3 revision notes](/resources/cambridge-a-level-mathematics-9709-trigonometry-cambridge-alevel-maths-3-revision-notes/) with a self-test
- [3.3 practice questions](/resources/cambridge-a-level-mathematics-9709-trigonometry-cambridge-alevel-maths-3-practice/) with mark schemes
- Trigonometric identities in integration: [3.5 Integration](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.3 Trigonometry.
