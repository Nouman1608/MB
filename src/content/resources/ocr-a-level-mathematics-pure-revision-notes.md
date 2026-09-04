---
title: "OCR A Level Mathematics: Pure Mathematics — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure mathematics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "For first assessment 2018"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
description: "Condensed recall notes on proof, algebra, functions, sequences, trigonometry, calculus and vectors for OCR A Level Mathematics H240."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Pure Mathematics study guide](/resources/ocr-a-level-mathematics-pure-mathematics/).

## Proof

| Method | Approach |
|---|---|
| **Deduction** | Argue directly from known results |
| **Exhaustion** | Check every case |
| **Counter-example** | One case disproves a general statement |
| **Contradiction** | Assume the negation, derive an impossibility |

**Contradiction is the one examined most.** The classic results are the irrationality of √2 and the infinitude of primes. The structure must be explicit: *assume the opposite*, derive a contradiction, conclude the original statement.

**A single counter-example disproves a statement, but no number of examples proves one.** Stating that explicitly is often worth a mark.

## Functions

- **Domain** — the set of permitted inputs. **Range** — the set of outputs.
- `fg(x)` means "do **g first**". The order is the most common error.
- **Inverse f⁻¹** exists only if f is **one-to-one**; the graph of f⁻¹ is the reflection of f in `y = x`, and the domain and range swap.
- **Modulus:** `|f(x)|` reflects negative parts above the axis; `f(|x|)` reflects the right-hand side into the left.

**Transformations:**

| | Effect |
|---|---|
| `f(x) + a` | Up by a |
| `f(x + a)` | **Left** by a |
| `af(x)` | Vertical stretch, factor a |
| `f(ax)` | Horizontal stretch, factor **1/a** |

Changes **inside** the bracket affect x and behave opposite to expectation. That is the trap.

## Sequences and series

```
arithmetic:  u_n = a + (n-1)d       S_n = (n/2)[2a + (n-1)d]
geometric:   u_n = ar^(n-1)         S_n = a(1-r^n)/(1-r)
sum to infinity:  S = a/(1-r)       ONLY if |r| < 1
```

**The convergence condition is a mark in itself.** A sum to infinity exists only when `|r| < 1`; stating the answer without the condition is incomplete.

**Binomial expansion:**

```
(1 + x)^n = 1 + nx + n(n-1)x^2/2! + ...
```

For **negative or fractional n** the expansion is infinite and valid only for **|x| < 1**. Stating the validity range is required.

## Trigonometry

```
sin^2 + cos^2 = 1      1 + tan^2 = sec^2      1 + cot^2 = cosec^2
sin2A = 2 sinA cosA    cos2A = cos^2A - sin^2A = 2cos^2A - 1 = 1 - 2sin^2A
R form:  a sinx + b cosx = R sin(x + alpha)
```

**Radians:** π rad = 180°. Arc length `s = rθ`; sector area `= ½r²θ`. **These formulae only work in radians** — using degrees is the standard error.

**Small angle approximations** (θ in radians): `sin θ ≈ θ`, `tan θ ≈ θ`, `cos θ ≈ 1 − θ²/2`.

## Differentiation

```
chain:     dy/dx = dy/du x du/dx
product:   (uv)' = u'v + uv'
quotient:  (u/v)' = (u'v - uv')/v^2

d/dx(e^x) = e^x        d/dx(ln x) = 1/x
d/dx(sin x) = cos x    d/dx(cos x) = -sin x
```

Trigonometric derivatives require **radians**.

**Implicit differentiation:** differentiate both sides with respect to x, applying the chain rule to every y term, so `d/dx(y²) = 2y·dy/dx`.

## Integration

```
integral of 1/x dx = ln|x| + c
integral of e^x = e^x + c
by parts:  integral of u dv = uv - integral of v du
```

**Choosing u for parts:** pick the term that **simplifies on differentiation** — logs first, then polynomials. Choosing the wrong way round makes the integral harder rather than easier.

**Substitution:** change the variable *and* the limits, or convert back before evaluating. Forgetting to change the limits is a routine loss.

## Numerical methods

**Locating a root:** if `f(x)` changes sign over an interval (one value positive, one negative) and `f` is continuous, a root lies between them.

**Iteration:** rearrange `f(x) = 0` into `x = g(x)` and iterate `x_(n+1) = g(x_n)` from a starting value. A **staircase diagram** shows convergence to the root; a **cobweb diagram** shows convergence that spirals in from both sides. Some rearrangements diverge — this must be checked, not assumed.

**Newton-Raphson:**

```
x_(n+1) = x_n - f(x_n)/f'(x_n)
```

Fails or converges to the wrong root if the starting value is chosen near a stationary point, where `f'(x_n)` is close to zero.

**Trapezium rule** approximates the area under a curve using `n` trapezia of equal width `h = (b-a)/n`:

```
integral ≈ (h/2)[y_0 + y_n + 2(y_1 + y_2 + ... + y_(n-1))]
```

For a **convex** (concave up) curve the rule **over-estimates** the true area; for a **concave** (concave down) curve it **under-estimates**. Stating which way the error runs, not just quoting the formula, is what the "comment on accuracy" mark requires.

## Vectors

```
magnitude  |a| = sqrt(x^2 + y^2 + z^2)
unit vector = a / |a|
```

Vectors are **parallel** if one is a scalar multiple of the other. Position vectors describe points; direction vectors describe lines.

## Exam traps

- Doing f before g in `fg(x)`.
- Getting `f(x + a)` the wrong way round.
- Omitting the `|r| < 1` condition for a sum to infinity.
- Omitting the validity range for a binomial expansion with fractional n.
- Using degrees in arc length, sector area, or calculus.
- Forgetting to change limits after a substitution.
- Omitting `+ c`.

## Self-test

1. Give the structure of a proof by contradiction.
2. In `fg(x)`, which function is applied first?
3. When does a geometric series have a sum to infinity?
4. Which term should you choose as u in integration by parts, and why?
5. Why must arc length and sector area formulae use radians?

**Answers:** 1. Assume the opposite of the statement, derive a logical contradiction, and conclude that the original statement must be true. 2. g. 3. Only when |r| < 1. 4. The one that simplifies when differentiated — logarithms first, then polynomials — because the aim is to make the remaining integral easier. 5. The formulae s = rθ and ½r²θ are derived from the definition of the radian as the angle subtending an arc equal in length to the radius, so they are only valid with θ in radians.
