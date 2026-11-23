---
title: "Cambridge A Level Mathematics (9709): Differentiation (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.4
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "differentiation-cambridge-alevel-maths-3"
description: "Revision notes for Cambridge 9709 Paper 3 section 3.4 Differentiation: standard results, chain, product and quotient rules, parametric and implicit forms."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.4 Differentiation** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. For full worked examples see the [3.4 study guide](/resources/cambridge-a-level-mathematics-9709-differentiation-3/); for exam-style questions use the [3.4 practice questions](/resources/cambridge-a-level-mathematics-9709-differentiation-3-practice/).

## Results to know

| y | dy/dx |
|---|---|
| e^(ax + b) | a e^(ax + b) |
| ln(ax + b) | a/(ax + b) |
| ln f(x) | f′(x)/f(x) |
| sin(ax + b) | a cos(ax + b) |
| cos(ax + b) | −a sin(ax + b) |
| tan(ax + b) | a sec²(ax + b) |
| tan⁻¹ x | 1/(1 + x²) |
| tan⁻¹(ax) | a/(1 + a²x²) |
| aˣ | aˣ ln a (from aˣ = e^(x ln a)) |

Not required: derivatives of sin⁻¹ x and cos⁻¹ x. Trigonometric results need radians.

## Rules

```text
Chain:      dy/dx = dy/du × du/dx
Product:    (uv)′ = u v′ + v u′
Quotient:   (u/v)′ = (v u′ − u v′)/v²
Parametric: dy/dx = (dy/dt)/(dx/dt)
Implicit:   d/dx[f(y)] = f′(y) dy/dx;   d/dx(xy) = y + x dy/dx
```

## Using dy/dx

| Task | Method |
|---|---|
| Stationary point | Solve dy/dx = 0; factor out terms such as eˣ that are never zero |
| Nature of a stationary point | Sign of d²y/dx², or the sign of dy/dx either side |
| Tangent at (x₁, y₁) | y − y₁ = m(x − x₁) |
| Normal at (x₁, y₁) | gradient −1/m |
| Parametric: horizontal tangent | dy/dt = 0 (dx/dt ≠ 0) |
| Parametric: vertical tangent | dx/dt = 0 (dy/dt ≠ 0) |
| Implicit: horizontal tangent | numerator of dy/dx = 0, then substitute into the curve |
| Implicit: vertical tangent | denominator of dy/dx = 0, then substitute into the curve |

## Simplify before or after

- ln((x + 1)/(x − 1)) = ln(x + 1) − ln(x − 1): differentiate term by term, no quotient rule needed.
- ln(x³) = 3 ln x and ln(3x) = ln 3 + ln x, so d/dx ln(3x) = 1/x.
- After the quotient rule, factorise the numerator; common factors such as e^(2x) or cos x make dy/dx = 0 easy to solve.

## Four patterns in condensed form

**Stationary point of a product.** y = x e^(−3x): dy/dx = e^(−3x)(1 − 3x), so x = 1/3 and y = 1/(3e). The factor e^(−3x) is never zero.

**Quotient with a trigonometric part.** y = sin x/(1 + cos x): dy/dx = [(1 + cos x)cos x + sin²x]/(1 + cos x)² = (1 + cos x)/(1 + cos x)² = 1/(1 + cos x). Use sin²x + cos²x = 1 to simplify the numerator.

**Parametric tangent.** x = 2t², y = 4t at t = 1: dy/dx = 4/(4t) = 1/t = 1, point (2, 4), tangent y = x + 2.

**Implicit curve with a vertical tangent.** For y² + xy = 12, dy/dx = −y/(2y + x). The tangent is vertical where 2y + x = 0, so x = −2y; then y² − 2y² = 12 has no real solution, so the curve has no vertical tangent.

## Key terms

| Term | Meaning |
|---|---|
| Composite function | A function of a function, differentiated by the chain rule |
| Stationary point | A point where dy/dx = 0 |
| Parameter | A third variable, often t or θ, that defines both x and y |
| Implicit function | A relation between x and y not solved for y |
| Tangent | The line touching the curve with the same gradient |
| Normal | The line perpendicular to the tangent at the point of contact |
| Exact | Answer left in terms of e, ln, π or surds |

## Exam traps

- tan⁻¹(2x) differentiates to 2/(1 + 4x²), not 2/(1 + 2x²).
- Quotient rule order: v u′ − u v′ on top. Swapping gives the wrong sign.
- e^(−x) differentiates to −e^(−x): the chain-rule minus is often lost.
- In implicit work, every y-term needs dy/dx, and xy needs the product rule.
- dy/dx = 0 from an implicit derivative gives a relation like y = x, not a point.
- A normal's gradient is −1/m, not 1/m or −m.
- Write the answer exactly when asked: (−½, 2/e), not (−0.5, 0.736).

## Self-test

1. Differentiate e^(3x) cos x.
2. Differentiate ln(x² + 1).
3. Differentiate tan⁻¹(x/2).
4. Differentiate x/(2x + 1), simplifying fully.
5. Differentiate sin²(3x).
6. x = t³, y = t² + 1. Find dy/dx in terms of t.
7. x = cos θ, y = sin 2θ. Find dy/dx when θ = π/6.
8. Find dy/dx for x² + y² = 25 and the gradient at (3, 4).
9. Find dy/dx for xy = 4 by implicit differentiation.
10. Find the gradient of the normal to y = x ln x at x = e.
11. y = xe^(−x). Find the x-coordinate of the stationary point.
12. Differentiate 2ˣ.

**Answers**

1. 3e^(3x) cos x − e^(3x) sin x = **e^(3x)(3 cos x − sin x)**.
2. **2x/(x² + 1)**.
3. (½)/(1 + x²/4) = **2/(4 + x²)**.
4. [(2x + 1) − 2x]/(2x + 1)² = **1/(2x + 1)²**.
5. 2 sin 3x × 3 cos 3x = **6 sin 3x cos 3x** (= 3 sin 6x).
6. 2t/(3t²) = **2/(3t)**.
7. dy/dθ = 2 cos 2θ = 1, dx/dθ = −sin θ = −½, so **dy/dx = −2**.
8. 2x + 2y dy/dx = 0, so dy/dx = −x/y; at (3, 4) it is **−3/4**.
9. y + x dy/dx = 0, so **dy/dx = −y/x**.
10. dy/dx = ln x + 1 = 2 at x = e, so the normal gradient is **−½**.
11. dy/dx = e^(−x)(1 − x) = 0, so **x = 1**.
12. **2ˣ ln 2**.

## Links

- Full explanations: [3.4 study guide](/resources/cambridge-a-level-mathematics-9709-differentiation-3/)
- Marked questions: [3.4 practice questions](/resources/cambridge-a-level-mathematics-9709-differentiation-3-practice/)
- Paper 3 summary: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
