---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Integration -- Study Guide"
seoTitle: "9709 P2 Integration Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Integration"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 41
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "integration-cambridge-alevel-maths-2"
description: "Study guide for Cambridge 9709 Pure Mathematics 2 section 2.5: integrating eˣ, 1/(ax + b) and trig functions, using identities, and the trapezium rule."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

This study guide teaches section 2.5, Integration, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.5 is part of Pure Mathematics 2 and is examined on Paper 2 (1 hour 15 minutes, 50 marks), which is taken only in the AS Level Pure Mathematics route of Paper 1 plus Paper 2. Knowledge of Paper 1 is assumed, so the integration of (ax + b)ⁿ, definite integrals, areas and volumes from section 1.8 can all appear inside a Paper 2 question.

A scientific calculator is allowed in every 9709 examination, but the syllabus states that no marks are given for unsupported answers from a calculator. Show each integration step and each substitution of limits. Give non-exact answers to 3 significant figures unless the question says otherwise, and do not round until the final answer. When a question asks for an exact value, leave π, e, ln and surds in the answer.

Use this page with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-integration-revision-notes/) and the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-integration-practice/). For the Paper 1 groundwork, see the [Pure Mathematics 1 integration guide](/resources/a-level-maths-9709-pure-mathematics-1-integration/). For an overview of the whole paper, see the [Pure Mathematics 2 guide](/resources/a-level-mathematics-pure-mathematics-2/). Course links: the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/) and the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/).

## What this unit covers

| Syllabus 2.5 | What you must be able to do | Paper |
|---|---|---|
| Reverse differentiation | Integrate e^(ax + b), 1/(ax + b), sin(ax + b), cos(ax + b) and sec²(ax + b). The general method of integration by substitution is **not** required | Paper 2 |
| Trigonometrical relationships | Use identities, such as the double-angle formulae, to turn an integrand into standard forms, e.g. sin²x or cos²(2x) | Paper 2 |
| Trapezium rule | Estimate a definite integral, and use a sketch graph in simple cases to decide whether the estimate is too big or too small | Paper 2 |

Two boundaries are worth knowing. First, recognising kf′(x)/f(x), partial fractions, integration by parts and substitution all belong to section 3.5 (Paper 3), not to Paper 2. Second, the trapezium rule is listed in section 2.5 but not in section 3.5, so it is Paper 2 content. The [Pure Mathematics 3 guide](/resources/a-level-maths-9709-pure-mathematics-3/) covers the Paper 3 techniques.

## Standard integrals of linear composites

### Why the 1/a appears

Differentiate e^(3x + 2) with the chain rule and you get 3e^(3x + 2). So to integrate e^(3x + 2) you need a factor of 1/3 to cancel the 3:

```
∫ e^(3x + 2) dx = (1/3) e^(3x + 2) + c
```

The same reasoning, reversing the chain rule for a linear inside function ax + b, gives every result in this section. Always check an answer by differentiating it back.

### The five results

| f(x) | ∫ f(x) dx |
|---|---|
| e^(ax + b) | (1/a) e^(ax + b) + c |
| 1/(ax + b) | (1/a) ln\|ax + b\| + c |
| sin(ax + b) | −(1/a) cos(ax + b) + c |
| cos(ax + b) | (1/a) sin(ax + b) + c |
| sec²(ax + b) | (1/a) tan(ax + b) + c |

The MF19 list of formulae gives the basic forms (eˣ, 1/x, sin x, cos x, sec²x) but not these (ax + b) versions, so you need to be able to produce the 1/a factor yourself. All angles are in radians: these results are false in degrees.

The sign pattern for sine and cosine catches many people. Differentiating cos gives −sin, so integrating sin gives −cos. Differentiating sin gives +cos, so integrating cos gives +sin.

### Worked example 1: several terms at once

Find ∫ (e^(4x + 1) + 6/(3x − 2)) dx.

```
∫ e^(4x + 1) dx   = (1/4) e^(4x + 1)          a = 4
∫ 6/(3x − 2) dx   = 6 × (1/3) ln|3x − 2|     a = 3
                  = 2 ln|3x − 2|

Answer: (1/4) e^(4x + 1) + 2 ln|3x − 2| + c
```

### Worked example 2: trig composites

Find ∫ (cos(2x + π/3) + 3 sec²(½x)) dx.

```
∫ cos(2x + π/3) dx = (1/2) sin(2x + π/3)
∫ 3 sec²(½x) dx    = 3 × 1/(½) × tan(½x) = 6 tan(½x)

Answer: (1/2) sin(2x + π/3) + 6 tan(½x) + c
```

Dividing by ½ means multiplying by 2. Writing "3 × ½" here is a common slip.

### Negative values of a

When a is negative, the 1/a factor is negative too.

```
∫ 1/(5 − 2x) dx   = −(1/2) ln|5 − 2x| + c        a = −2
∫ sin(1 − 3x) dx  = −(1/(−3)) cos(1 − 3x) + c
                  = (1/3) cos(1 − 3x) + c
```

Differentiate each answer to see the signs come out right: d/dx[(1/3) cos(1 − 3x)] = (1/3)(−sin(1 − 3x))(−3) = sin(1 − 3x).

### Definite integrals with exact answers

Worked example 3. Find the exact value of ∫₁⁴ 5/(2x + 1) dx.

```
∫₁⁴ 5/(2x + 1) dx = [ (5/2) ln(2x + 1) ]₁⁴
                  = (5/2)(ln 9 − ln 3)
                  = (5/2) ln 3
```

Between these limits 2x + 1 is positive, so the modulus signs can be dropped. The log law ln 9 − ln 3 = ln 3 comes from section 2.2. Questions often ask for the answer "in the form k ln m", so you must simplify.

Worked example 4. Show that ∫₀^(ln 2) (e^(2x) − e^(−x)) dx = 1.

```
∫ (e^(2x) − e^(−x)) dx = (1/2) e^(2x) + e^(−x)

Upper limit ln 2:  (1/2) e^(2 ln 2) + e^(−ln 2) = (1/2)(4) + 1/2 = 5/2
Lower limit 0:     (1/2)(1) + 1                                = 3/2

Integral = 5/2 − 3/2 = 1
```

The key facts are e^(2 ln 2) = e^(ln 4) = 4 and e^(−ln 2) = 1/2. On a "show that", write both limit values out in full.

### Simplify before you integrate

A product or quotient is not a standard form. Expand or divide first.

Worked example 5. Find ∫ (eˣ + 1)²/eˣ dx.

```
(eˣ + 1)² = e^(2x) + 2eˣ + 1

Divide each term by eˣ:  eˣ + 2 + e^(−x)

∫ (eˣ + 2 + e^(−x)) dx = eˣ + 2x − e^(−x) + c
```

Do not try to "integrate the top and the bottom" separately. There is no quotient rule for integration.

## Integration using trigonometrical relationships

You cannot integrate sin²x, cos²x, tan²x or sin x cos x directly. Use an identity to turn each into terms from the table above.

| Integrand | Identity to use | Becomes |
|---|---|---|
| sin²x | cos 2x = 1 − 2 sin²x | ½ − ½ cos 2x |
| cos²x | cos 2x = 2 cos²x − 1 | ½ + ½ cos 2x |
| sin x cos x | sin 2x = 2 sin x cos x | ½ sin 2x |
| tan²x | sec²x = 1 + tan²x | sec²x − 1 |

The double-angle formulae and sec²x = 1 + tan²x are all printed in MF19. Rearranging them correctly is your job. The same identities work with any angle: cos²(2x) = ½ + ½ cos 4x, because the angle doubles from 2x to 4x.

### Worked example 6

Find the exact value of ∫₀^(π/6) 4 sin²x dx.

```
4 sin²x = 4 × ½(1 − cos 2x) = 2 − 2 cos 2x

∫ (2 − 2 cos 2x) dx = 2x − sin 2x

[2x − sin 2x]₀^(π/6) = (π/3 − sin(π/3)) − (0 − 0)
                     = π/3 − √3/2
```

### Worked example 7

Find the exact value of ∫₀^(π/8) tan²(2x) dx.

```
tan²(2x) = sec²(2x) − 1

∫ (sec²(2x) − 1) dx = ½ tan(2x) − x

[½ tan 2x − x]₀^(π/8) = (½ tan(π/4) − π/8) − 0
                      = ½ − π/8
```

### Worked example 8

Find ∫ (sin x + cos x)² dx.

```
(sin x + cos x)² = sin²x + 2 sin x cos x + cos²x
                 = 1 + sin 2x              (sin² + cos² = 1)

∫ (1 + sin 2x) dx = x − ½ cos 2x + c
```

Look for sin²x + cos²x = 1 whenever you expand a bracket of sines and cosines.

## The trapezium rule

### The formula

Split the interval from a to b into n strips of equal width h, so h = (b − a)/n. There are n + 1 ordinates (y-values) y₀, y₁, …, yₙ. Then

```
∫ₐᵇ y dx ≈ ½h { y₀ + 2(y₁ + y₂ + … + yₙ₋₁) + yₙ }
```

The first and last ordinates count once. Every ordinate in between counts twice. The formula is not printed in the MF19 list, so learn it.

### Method in steps

1. Find h = (b − a)/n. Check: n strips need n + 1 ordinates.
2. Make a table of x and y. Keep at least 4 decimal places, or store values in your calculator.
3. Substitute into the formula, showing the bracket.
4. Round only the final answer, usually to 3 significant figures.

### Worked example 9

Use the trapezium rule with 4 intervals to estimate ∫₀¹ e^(x²) dx, giving your answer to 3 significant figures.

```
h = (1 − 0)/4 = 0.25

x    : 0        0.25     0.5      0.75     1
y    : 1        1.0645   1.2840   1.7551   2.7183

Estimate = ½ × 0.25 × { 1 + 2(1.0645 + 1.2840 + 1.7551) + 2.7183 }
         = 0.125 × { 3.7183 + 8.2072 }
         = 0.125 × 11.9255
         = 1.49  (3 s.f.)
```

This integral cannot be found exactly with any method in the syllabus, which is exactly when the trapezium rule is useful.

### Over-estimate or under-estimate?

Each strip replaces the curve by a straight chord. Sketch the curve and look at which way it bends.

| Shape of curve on the interval | Chords lie | Trapezium rule gives |
|---|---|---|
| Bends upward (like y = eˣ, y = 1/x for x > 0) | above the curve | an **over-estimate** |
| Bends downward (like y = ln x, y = √x) | below the curve | an **under-estimate** |

It does not matter whether the curve is going up or down, only which way it bends. If the curve changes the way it bends inside the interval, a simple sketch argument does not work.

In worked example 9, y = e^(x²) is U-shaped and bends upward on the whole interval, so 1.49 is an over-estimate.

### Worked example 10: checking against an exact value

(a) Use the trapezium rule with 2 intervals to estimate ∫₁³ 6/(x + 1) dx.
(b) Find the exact value and comment.

```
(a) h = 1.  x = 1, 2, 3 give y = 3, 2, 1.5

    Estimate = ½ × 1 × { 3 + 2(2) + 1.5 } = 4.25

(b) ∫₁³ 6/(x + 1) dx = [6 ln(x + 1)]₁³ = 6(ln 4 − ln 2) = 6 ln 2 = 4.159 (4 s.f.)
```

The estimate is too large by about 2.2%. This matches the sketch: y = 6/(x + 1) bends upward for x > −1, so the chords lie above the curve. More strips would reduce the error.

## Common errors

- Multiplying by a instead of dividing: ∫ e^(4x) dx written as 4e^(4x).
- Wrong sign on sine or cosine: ∫ sin 3x dx written as (1/3) cos 3x.
- Using the Paper 1 power rule on (ax + b)⁻¹, which gives division by zero. The power −1 always gives a logarithm.
- Forgetting that a is negative in 1/(5 − 2x) or sin(1 − 3x).
- Integrating sin²x as (sin³x)/3. You must use the double-angle identity first.
- Rearranging cos 2x wrongly, for example sin²x = ½(1 + cos 2x). The sin² version has the minus sign.
- Calculator in degree mode when evaluating trig integrals.
- In the trapezium rule, counting strips as ordinates (5 ordinates means 4 strips), or doubling the first and last y-values.
- Giving "over-estimate" with no reason. The reason must refer to the shape of the curve.
- Leaving an exact answer as ln 9 − ln 3 when a single log is asked for.

## Where to go next

Condense this page with the [integration revision notes](/resources/a-level-maths-9709-pure-mathematics-2-integration-revision-notes/), then test yourself with the [integration practice questions](/resources/a-level-maths-9709-pure-mathematics-2-integration-practice/). Several examples above use log laws from section 2.2: the [logarithms and exponentials guide](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials/) covers them. To check your readiness across the AS course, try the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.5 Integration.
