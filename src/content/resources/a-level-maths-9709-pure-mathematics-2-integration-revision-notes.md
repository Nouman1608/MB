---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Integration -- Revision Notes"
seoTitle: "9709 P2 Integration Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9709 Paper 2 integration (section 2.5): standard results, trig identities, trapezium rule steps and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

For full explanations and longer worked examples, use the [integration study guide](/resources/a-level-maths-9709-pure-mathematics-2-integration/).

These notes cover section 2.5, Integration, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.5 belongs to Pure Mathematics 2 and is examined on Paper 2, the AS Level Pure Mathematics route (Paper 1 plus Paper 2). Paper 1 knowledge is assumed, so areas, volumes and (ax + b)ⁿ integrals can be built into Paper 2 questions. A scientific calculator is allowed, but unsupported calculator answers earn no marks.

Links: [integration practice questions](/resources/a-level-maths-9709-pure-mathematics-2-integration-practice/), [Pure Mathematics 1 integration notes](/resources/a-level-maths-9709-pure-mathematics-1-integration-revision-notes/), [Pure Mathematics 2 overview notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/), [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/) and the free [AS diagnostic](/practice/9709/diagnostic/as/).

## 2.5 at a glance

| Outcome | In one line |
|---|---|
| Reverse differentiation | Integrate e^(ax + b), 1/(ax + b), sin(ax + b), cos(ax + b), sec²(ax + b) |
| Trig relationships | Use identities (double-angle, sec² = 1 + tan²) to reach standard forms |
| Trapezium rule | Estimate a definite integral; say whether it over- or under-estimates, using a sketch |

Not on Paper 2: the general method of substitution (the syllabus says it is not required), integration by parts, partial fractions and the kf′(x)/f(x) pattern. Those are section 3.5, Paper 3.

## Standard results

| f(x) | ∫ f(x) dx | Check by differentiating |
|---|---|---|
| e^(ax + b) | (1/a) e^(ax + b) + c | (1/a) × a e^(ax + b) |
| 1/(ax + b) | (1/a) ln\|ax + b\| + c | (1/a) × a/(ax + b) |
| sin(ax + b) | −(1/a) cos(ax + b) + c | −(1/a) × (−a sin(ax + b)) |
| cos(ax + b) | (1/a) sin(ax + b) + c | (1/a) × a cos(ax + b) |
| sec²(ax + b) | (1/a) tan(ax + b) + c | (1/a) × a sec²(ax + b) |

Radians only. MF19 prints the a = 1, b = 0 versions; the 1/a is yours to supply.

### Method: integrating a linear composite

```
1. Spot the inside function ax + b and write down a (with its sign).
2. Write the outside result from the table.
3. Multiply by 1/a (and by any constant already in front).
4. Add + c for an indefinite integral.
5. Differentiate back in your head to check the sign and the factor.
```

### Small worked reminders

```
∫ 12e^(−3x) dx      = 12 × (1/(−3)) e^(−3x)  = −4e^(−3x) + c

∫₀² 3/(4 − x) dx    = [−3 ln|4 − x|]₀²
                    = −3 ln 2 + 3 ln 4      = 3 ln 2
```

In the second one a = −1, so the minus sign comes out in front. With a negative a the log term is subtracted, so take care over which limit gives which sign.

## Trigonometrical relationships

| Integrand | Rewrite as | Integral |
|---|---|---|
| sin²x | ½(1 − cos 2x) | ½x − ¼ sin 2x + c |
| cos²x | ½(1 + cos 2x) | ½x + ¼ sin 2x + c |
| sin x cos x | ½ sin 2x | −¼ cos 2x + c |
| tan²x | sec²x − 1 | tan x − x + c |
| cos²(kx) | ½(1 + cos 2kx) | ½x + (1/(4k)) sin 2kx + c |

Memory check for the signs: sin²x is small near x = 0, and ½(1 − cos 2x) = 0 at x = 0. So sin² goes with the minus.

### Method: trig integrand that is not in the table

```
1. Is it a power or product of trig functions?   → identity needed
2. Squares of sin or cos                          → double-angle formula
3. sin × cos of the same angle                    → sin 2A = 2 sin A cos A
4. tan²                                           → sec² − 1
5. Expanded bracket                               → look for sin² + cos² = 1
6. Integrate term by term, then apply limits in radians
```

### Small worked reminders

```
∫ cos²(½x) dx       = ∫ ½(1 + cos x) dx     = ½x + ½ sin x + c

∫ 2 sin 3x cos 3x dx = ∫ sin 6x dx          = −(1/6) cos 6x + c
```

In the first, the angle doubles from ½x to x. In the second, 2 sin A cos A with A = 3x is sin 6x.

## The trapezium rule

```
∫ₐᵇ y dx ≈ ½h { y₀ + 2(y₁ + … + yₙ₋₁) + yₙ },    h = (b − a)/n
```

Not printed in MF19. n strips, n + 1 ordinates.

### Method: trapezium rule questions

```
1. h = (b − a)/n
2. Table of x and y (4 d.p. or better; radians for trig)
3. Ends once, middles twice, times ½h
4. Round only at the end (3 s.f. unless told otherwise)
5. Over/under: sketch, look at which way the curve bends, then state it
```

### Over or under

| Curve on the interval | Estimate |
|---|---|
| Bends upward (chords above the curve), e.g. eˣ, sec²x on (−π/2, π/2), 1/x for x > 0 | over-estimate |
| Bends downward (chords below the curve), e.g. ln x, √x | under-estimate |

Worked reminder: two strips for ∫₂⁴ ln x dx give ½ × 1 × (ln 2 + 2 ln 3 + ln 4) = 2.14 (3 s.f.). The graph of ln x bends downward, so this is an under-estimate.

## Exact values you need at the limits

"Exact value" questions depend on these. Learn them so you never reach for a decimal.

| Expression | Value |
|---|---|
| e⁰, ln 1 | 1, 0 |
| e^(ln k), e^(2 ln k), e^(−ln k) | k, k², 1/k |
| ln a − ln b, k ln a | ln(a/b), ln(aᵏ) |
| sin(π/6), cos(π/3) | ½ |
| sin(π/3), cos(π/6) | √3/2 |
| sin(π/4), cos(π/4) | √2/2 |
| tan(π/6), tan(π/4), tan(π/3) | 1/√3, 1, √3 |
| sin(π/2), cos(π/2) | 1, 0 |

A lower limit of 0 rarely gives zero: e⁰ = 1 and cos 0 = 1 both leave a term to subtract.

## How 2.5 is combined with other topics

Paper 2 questions often link integration to another section of the paper or to Paper 1.

- **With 2.2 (logs and exponentials):** a curve such as y = e^(2x) − keˣ + c meets the x-axis where a quadratic in eˣ is solved; the limits are then logarithms.
- **With 2.3 (trigonometry):** writing a sin x + b cos x as R cos(x − α) can turn 1/(a sin x + b cos x)² into a multiple of sec²(x − α).
- **With 1.8 (Paper 1 integration):** areas under exponential or trig curves, finding a curve from dy/dx and a point, and volumes of revolution, where y² must be formed before integrating.
- **With the trapezium rule:** an estimate is compared with an exact value found by integration, and you explain the sign of the error from the shape of the curve.

## Must-know distinctions

- **1/(ax + b) vs 1/(ax + b)².** The first gives (1/a) ln|ax + b|. The second is (ax + b)⁻², a Paper 1 power: −1/(a(ax + b)).
- **Integrating vs differentiating sin and cos.** d/dx(sin) = cos but ∫ sin = −cos.
- **sin² vs cos² identities.** sin²x = ½(1 − cos 2x); cos²x = ½(1 + cos 2x).
- **Strips vs ordinates.** "4 intervals" means 5 y-values.
- **Exact vs decimal.** "Exact value" means leave ln, e, π and surds. "Estimate" or "3 s.f." means a decimal.
- **Increasing vs bending.** Over/under depends on which way the curve bends, not on whether it rises or falls.
- **Radians vs degrees.** All calculus results here need radians. Check calculator mode before any trig evaluation.

## Quick self-test

1. Find ∫ e^(5x − 2) dx.
2. Find ∫ 3/(2 − x) dx.
3. Find ∫ sec²(4x) dx.
4. Find ∫ 6 sin(2x + 1) dx.
5. Find the exact value of ∫₀^(π/2) cos(½x) dx.
6. Find the exact value of ∫₀¹ e^(2x) dx.
7. Find the exact value of ∫₂⁵ 1/(x − 1) dx.
8. Find ∫ cos²x dx.
9. Find ∫ (1 + tan²3x) dx.
10. Find ∫ sin x cos x dx.
11. The trapezium rule is used on the interval 0 ≤ x ≤ 3 with 6 strips. State h and the number of ordinates.
12. Does the trapezium rule over- or under-estimate ∫₁⁴ √x dx? Give a reason.

### Answers

1. (1/5) e^(5x − 2) + c
2. −3 ln|2 − x| + c (a = −1)
3. ¼ tan 4x + c
4. −3 cos(2x + 1) + c
5. [2 sin(½x)]₀^(π/2) = 2 sin(π/4) = √2
6. [½ e^(2x)]₀¹ = ½(e² − 1)
7. [ln(x − 1)]₂⁵ = ln 4 − ln 1 = ln 4
8. ½x + ¼ sin 2x + c
9. 1 + tan²3x = sec²3x, so (1/3) tan 3x + c
10. ½ sin 2x integrates to −¼ cos 2x + c
11. h = 0.5 and 7 ordinates
12. Under-estimate: y = √x bends downward, so each chord lies below the curve.

## Where marks are usually lost

- Writing ∫ e^(3x) dx = 3e^(3x): multiplying by a instead of dividing.
- Dropping the sign when a is negative, as in ∫ 1/(2 − x) dx or ∫ cos(1 − 4x) dx.
- Giving ∫ sin kx dx as (1/k) cos kx, losing the minus sign.
- Treating 1/(ax + b) as (ax + b)⁻¹ and applying the power rule, which fails at n = −1.
- Using sin²x = ½(1 + cos 2x) (wrong sign) or forgetting to halve the angle factor when integrating cos 2x.
- Evaluating trig limits with the calculator in degrees.
- In the trapezium rule, using n + 1 as the number of strips, or doubling y₀ and yₙ.
- Rounding ordinates to 2 d.p. before adding, so the 3 s.f. answer is wrong.
- Stating "over-estimate" or "under-estimate" with no reason about the shape of the curve.
- Leaving an "exact" answer as a decimal, or as ln 9 − ln 3 instead of ln 3.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.5 Integration.
