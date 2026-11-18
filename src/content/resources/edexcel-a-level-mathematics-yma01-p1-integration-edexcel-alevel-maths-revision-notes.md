---
title: "Edexcel International A Level Mathematics (YMA01): P1 Integration -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 1.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-integration-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths P1 integration: reverse differentiation, the constant c, rewriting powers of x and finding curves from f′(x), plus a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for section 5, Integration, of Unit P1: Pure Mathematics 1 in Pearson Edexcel International A Level Mathematics (YMA01), Specification Issue 3. For explanations and worked examples, read the [P1 integration study guide](/resources/edexcel-a-level-mathematics-yma01-p1-integration-edexcel-alevel-maths/), then test yourself with the [P1 integration practice questions](/resources/edexcel-a-level-mathematics-yma01-p1-integration-edexcel-alevel-maths-practice/). The rules being reversed are in the [P1 differentiation revision notes](/resources/edexcel-a-level-mathematics-yma01-p1-differentiation-edexcel-alevel-maths-revision-notes/).

## Scope

| In P1 | Not in P1 |
|---|---|
| Indefinite integration as the reverse of differentiation | Definite integrals with limits |
| The constant of integration | Area under a curve or between curves |
| ∫xⁿ dx for rational n ≠ −1, with sums, differences and multiples | ∫x⁻¹ dx (needs logarithms) |
| Finding y = f(x) from f′(x) and a point | Integrating eˣ, trigonometric functions, by substitution or by parts |

## Key terms

| Term | Meaning |
|---|---|
| Indefinite integral | The general function whose derivative is the given expression, including + c |
| Integrand | The expression being integrated |
| Constant of integration, c | An arbitrary constant, because constants differentiate to zero |
| Gradient function | f′(x) or dy/dx, from which f(x) is found by integrating |
| Family of curves | All curves y = F(x) + c; each value of c is a vertical translation |

## The rule

```
∫ axⁿ dx = a xⁿ⁺¹ / (n + 1) + c,     n ≠ −1
∫ k dx   = kx + c
```

Raise the power by 1; divide by the new power; one + c for the whole answer.

## Dividing by fractional powers

| Integrand | New power | Integral |
|---|---|---|
| x^(1/2) | 3/2 | (2/3)x^(3/2) |
| x^(−1/2) | 1/2 | 2x^(1/2) |
| x^(1/3) | 4/3 | (3/4)x^(4/3) |
| x^(−2) | −1 | −x^(−1) |
| x^(−3) | −2 | −½x^(−2) |
| x^(3/2) | 5/2 | (2/5)x^(5/2) |

## Rewrite first

- Roots: ∛x = x^(1/3); x√x = x^(3/2).
- Reciprocals: 4/x² = 4x^(−2); 1/(3x⁴) = (1/3)x^(−4).
- Brackets: expand, for example (x − 2)(x + 5) = x² + 3x − 10.
- Fractions: divide each term, for example (x³ + 6)/x² = x + 6x^(−2).

## Finding the curve

1. Integrate f′(x) with + c.
2. Substitute the given point (x, y).
3. Solve for c.
4. State y = f(x) in full.

Given f″(x): integrate twice, with c₁ then c₂, using one condition for each.

## Worked reminders

- ∫(8x³ − 6x + 5) dx = 2x⁴ − 3x² + 5x + c.
- ∫(4/√x) dx = 8x^(1/2) + c.
- ∫(x − 2)(x + 5) dx = (1/3)x³ + (3/2)x² − 10x + c.
- ∫(x³ + 6)/x² dx = ½x² − 6x^(−1) + c.
- dy/dx = 6x − 4, curve through (1, 3): y = 3x² − 4x + c, 3 = 3 − 4 + c, c = 4, so y = 3x² − 4x + 4.

## Must-know distinctions

- **Integrand versus integral**: the integrand is the expression after ∫; the integral is the answer, with + c.
- **General versus particular solution**: y = x³ − 3x + c describes a whole family of curves; using a point to fix c gives one particular curve.
- **f′(x) versus f(x)**: a given point lies on the curve y = f(x), so it is substituted after integrating, never into the gradient function.
- **Raising the power versus dividing by it**: both happen to every term; forgetting either is the most common slip.
- **Indefinite versus definite**: P1 uses only the first; limits and areas are Pure Mathematics 2.

## Exam traps

- Missing + c.
- Multiplying by the new power instead of dividing.
- Integrating numerator and denominator separately.
- A term in x⁻¹ left in the integrand (not possible in P1; recheck the rewriting).
- Using the given point in f′(x) instead of in f(x).
- Writing the general solution when the question asks for the particular curve.
- Treating ∫(ax + b)² dx as (ax + b)³/3.

## Quick self-test

1. Find ∫(9x² + 4x − 1) dx.
2. Find ∫6x^(1/2) dx.
3. Find ∫(3/x⁴) dx.
4. Find ∫(x + 3)² dx.
5. Find ∫(2x² − 5)/√x dx, x > 0.
6. Why is the constant of integration needed?
7. Why is n = −1 excluded in P1?
8. dy/dx = 4x³ − 2x and the curve passes through (1, 4). Find y.
9. f′(x) = 3√x and f(4) = 20. Find f(x).
10. f″(x) = 6, f′(0) = −2, f(0) = 1. Find f(x).
11. Integrate ∛x.
12. Show that the derivative of your answer to Question 5 gives back the integrand.

### Answers

1. **3x³ + 2x² − x + c**.
2. 6 × (2/3)x^(3/2) = **4x^(3/2) + c**.
3. 3x^(−4) integrates to 3x^(−3)/(−3) = **−x^(−3) + c**.
4. x² + 6x + 9, so **(1/3)x³ + 3x² + 9x + c**.
5. 2x^(3/2) − 5x^(−1/2), so **(4/5)x^(5/2) − 10x^(1/2) + c**.
6. Every constant differentiates to zero, so many functions share the same derivative.
7. The rule would divide by n + 1 = 0; ∫x⁻¹ dx needs logarithms.
8. y = x⁴ − x² + c; 4 = 1 − 1 + c, so **y = x⁴ − x² + 4**.
9. f(x) = 2x^(3/2) + c; f(4) = 16 + c = 20, so **f(x) = 2x^(3/2) + 4**.
10. f′(x) = 6x − 2; **f(x) = 3x² − 2x + 1**.
11. x^(1/3) integrates to **(3/4)x^(4/3) + c**.
12. d/dx[(4/5)x^(5/2)] = 2x^(3/2) and d/dx[−10x^(1/2)] = −5x^(−1/2), which together give (2x² − 5)/√x.

## Frequently asked questions

**Does a P1 integration answer need to be simplified?**
Yes. Combine numerical coefficients into single fractions and write powers clearly, for example (4/5)x^(5/2), unless the question asks for a particular form.

**If a question gives two x-values, should I find a definite integral?**
Not in P1, where all integration is indefinite. Two values usually mean two conditions, for example after integrating twice, or points to substitute into an equation.

**How can I check an integral quickly?**
Differentiate it. If the result is the original integrand, the integral is right apart from the constant, which must still be included.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019: Unit P1 Pure Mathematics 1, section 5, Integration, references 5.1 and 5.2.
