---
title: "AQA A-Level Mathematics: D: Sequences and series (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Sequences and Series Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "D: Sequences and series"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "d-sequences-and-series-aqa-alevel-maths"
description: "Condensed revision notes for AQA A-Level Maths 7357 Section D: key formulas, method steps, binomial validity, convergence and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section D: Sequences and series** (D1 to D6) of AQA A-Level Mathematics (7357), from the AQA A-level Mathematics specification, version 1.3 (31 January 2018), for exams from June 2018 onwards. The specification lists Section D under Paper 1, and Papers 2 and 3 can assess any Paper 1 content. For full explanations and worked examples, read the [Section D study guide](/resources/aqa-a-level-mathematics-sequences-and-series/). To practise exam-style questions, use the [Section D practice set](/resources/aqa-a-level-mathematics-sequences-and-series-practice/).

Course links: [AQA A-Level Mathematics hub](/boards/aqa/a-level/mathematics/) and [printable 7357 checklist](/checklists/aqa/a-level/mathematics/).

## Formulas at a glance

| Result | Formula | Condition |
|---|---|---|
| Factorial | n! = n(n − 1)…2 × 1, 0! = 1 | n a non-negative integer |
| Binomial coefficient | ⁿCᵣ = n!/(r!(n − r)!) | n, r integers, 0 ≤ r ≤ n |
| Coefficient, rational n | n(n − 1)…(n − r + 1)/r! | any rational n |
| Binomial, positive integer n | (a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ, r = 0 to n | exact, n + 1 terms |
| Binomial, rational n | (1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + … | \|x\| < 1 |
| General form | (a + bx)ⁿ = aⁿ(1 + bx/a)ⁿ | \|bx/a\| < 1 |
| Arithmetic nth term | uₙ = a + (n − 1)d | recall (Appendix B) |
| Arithmetic sum | Sₙ = (n/2)(2a + (n − 1)d) = (n/2)(a + l) | |
| Geometric nth term | uₙ = arⁿ⁻¹ | recall (Appendix B) |
| Geometric sum | Sₙ = a(1 − rⁿ)/(1 − r) | r ≠ 1 |
| Sum to infinity | S∞ = a/(1 − r) | \|r\| < 1 only |
| Useful sum | Σ r (r = 1 to n) = n(n + 1)/2 | it is arithmetic |

Notation from the specification: a first term, l last term, d common difference, r common ratio, Sₙ sum to n terms, S∞ sum to infinity.

## D1 -- Binomial expansion

**Method: positive integer n**

1. Write the general term ⁿCᵣ aⁿ⁻ʳ (bx)ʳ.
2. Bracket bx completely, sign included.
3. For a single coefficient, pick the r that gives the power you need. Don't expand everything.

**Method: rational n**

1. Rewrite as aⁿ(1 + (b/a)x)ⁿ. For a fractional n, aⁿ may be a root: 8^(1/3) = 2.
2. Use 1 + nX + n(n − 1)X²/2! + … with X = (b/a)x, bracketing X each time.
3. Multiply every term by aⁿ.
4. State validity: |bx/a| < 1, or equivalently |x| < |a/b|.

**Approximation:** pick x small and inside the valid range so the ignored terms are tiny. Check the substitution gives the number asked for.

**Link to probability:** for X ~ B(n, p), P(X = r) = ⁿCᵣ pʳ(1 − p)ⁿ⁻ʳ is a term of ((1 − p) + p)ⁿ.

Worked reminders:

- (1 − x)⁻¹ = 1 + x + x² + x³ + …, valid for |x| < 1.
- (2 + x)⁻¹ = (1/2)(1 + x/2)⁻¹ = (1/2)(1 − x/2 + x²/4 − …) = 1/2 − x/4 + x²/8 − …, valid for |x| < 2. Taking out 2⁻¹ = 1/2 first is the step that is most often skipped.

## D2 -- Sequences

- **nth-term formula:** uₙ given directly; substitute n.
- **Recurrence:** xₙ₊₁ = f(xₙ) plus a first term; generate one term at a time.
- **Increasing:** uₙ₊₁ − uₙ > 0 for all n. **Decreasing:** uₙ₊₁ − uₙ < 0 for all n.
- **Periodic:** terms repeat after k steps, k the order. Find a distant term by the remainder when its position is divided by k.
- Tip: rewrite a fraction like (2n + 3)/(n + 1) as 2 + 1/(n + 1) to see its behaviour at a glance.

Worked reminder: for uₙ = (2n + 3)/(n + 1),

```
uₙ₊₁ − uₙ = 1/(n + 2) − 1/(n + 1) = −1/((n + 1)(n + 2)) < 0
```

so the sequence is decreasing for every n ≥ 1, and the terms approach 2 from above.

## D3 -- Sigma notation

- Σ from r = k to m of f(r): substitute each integer from k to m and add.
- Number of terms = m − k + 1.
- Σ c (a constant) over N terms = cN.
- Σ (f(r) + g(r)) = Σ f(r) + Σ g(r), and Σ c f(r) = c Σ f(r).
- Sum from r = k to m = (sum from 1 to m) − (sum from 1 to k − 1).

Worked reminder: Σ from r = 5 to 12 of r² has 12 − 5 + 1 = 8 terms: 25 + 36 + 49 + 64 + 81 + 100 + 121 + 144 = 620. Writing out the first and last terms is the quickest way to confirm the count.

## D4 and D5 -- Method in steps

**Finding a and d (or a and r) from two terms**

1. Write each given term with the nth-term formula.
2. Arithmetic: subtract the equations. Geometric: divide them.
3. Back-substitute for a.

**Least n so that a sum passes a target**

1. Write the inequality with Sₙ.
2. Arithmetic: rearrange to a quadratic in n, solve, round **up**, then check both neighbours.
3. Geometric: isolate rⁿ, take logs. If 0 < r < 1, dividing by ln r flips the inequality sign.

Worked reminders:

- Arithmetic, a = 50, d = −4. Positive terms need 50 − 4(n − 1) > 0, so n < 13.5 and there are 13 positive terms (u₁₃ = 2, u₁₄ = −2). Their sum is (13/2)(50 + 2) = 338.
- Geometric, a = 5, r = 3. S₆ = 5(3⁶ − 1)/(3 − 1) = 5 × 728/2 = 1820. When r > 1, the form a(rⁿ − 1)/(r − 1) avoids negative signs.

**Convergence of a series in x**

1. Identify r as an expression in x.
2. Solve |r| < 1, that is −1 < r < 1.
3. Give the range of x; only then use S∞.

## D6 -- Modelling

| Situation | Model |
|---|---|
| Fixed amount added each step | Arithmetic |
| Fixed percentage change each step | Geometric, r = 1 ± rate |
| Repeated dose with a fixed fraction lost | Recurrence xₙ₊₁ = kxₙ + c |
| Total over many steps | The matching series |

Worked reminder: a ball dropped from 2 m rebounds to 60% of its previous height each time. The rebound heights 1.2, 0.72, … form a geometric series with S∞ = 1.2/(1 − 0.6) = 3. Each rebound is travelled up and down, so the total distance is 2 + 2 × 3 = 8 m. The model predicts infinitely many bounces, which is its obvious limitation.

Always say what n counts and whether term 1 is "now" or "after one step". Name one limitation: growth cannot continue forever, rates change, money is in whole pence. For modelling as an overarching theme, see the [overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/).

## Must-know distinctions

- **Arithmetic vs geometric:** constant difference vs constant ratio. Test with u₂ − u₁ = u₃ − u₂, or u₂/u₁ = u₃/u₂.
- **uₙ vs Sₙ:** a single term vs a running total. Sₙ − Sₙ₋₁ = uₙ.
- **Finite vs infinite expansion:** positive integer n stops; negative or fractional n does not and needs a validity condition.
- **Convergent sequence vs convergent series:** for a geometric sequence with |r| < 1 the terms tend to 0 and the series tends to a/(1 − r).
- **Increasing vs periodic:** a periodic sequence is neither increasing nor decreasing.

## Quick self-test

1. Evaluate ⁶C₂.
2. Simplify 5!/3!.
3. Expand (1 + x)⁻¹ up to x² and state when it is valid.
4. Find the coefficient of x² in (1 − 2x)^(1/2).
5. Evaluate Σ from r = 1 to 10 of 2ʳ.
6. An arithmetic sequence has a = 4 and d = −3. Find u₁₅.
7. Find 1 + 2 + 3 + … + 100.
8. Find S∞ for a geometric series with a = 10 and r = −0.6.
9. u₁ = 4 and uₙ₊₁ = −uₙ. Describe the sequence.
10. Does 3 + 6 + 12 + … have a sum to infinity? Why?
11. x₁ = 2 and xₙ₊₁ = xₙ/2 + 3. Find x₂ and x₃.
12. For which x is the expansion of (3 − 2x)⁻¹ valid?

### Answers

1. 15
2. 20
3. 1 − x + x², valid for |x| < 1
4. −1/2
5. 2046
6. −38
7. 5050
8. 6.25
9. 4, −4, 4, −4, …: periodic with order 2
10. No: r = 2 and |r| ≥ 1, so the series diverges
11. x₂ = 4, x₃ = 5
12. |x| < 3/2

## Where marks are usually lost

- Writing (2x)³ as 2x³ inside a binomial term, which loses the accuracy mark for every term after it.
- Using (1 + x)ⁿ for (4 − x)^(1/2) without first taking out 4^(1/2) = 2.
- Giving the validity of (a + bx)ⁿ as |x| < 1 when it should be |x| < |a/b|.
- Rounding a "least n" answer down instead of up, or failing to check the neighbouring integer.
- Not flipping the inequality when dividing by ln r with 0 < r < 1.
- Using S∞ when |r| ≥ 1; the question usually expects you to say no sum exists.
- Miscounting terms in sigma notation that does not start at r = 1.
- Losing the minus sign in r when solving r³ = negative number.
- In models, giving an answer with no context or units, or calling a geometric model "linear".

## Next steps

Work through the [practice questions](/resources/aqa-a-level-mathematics-sequences-and-series-practice/), revisit the [study guide](/resources/aqa-a-level-mathematics-sequences-and-series/) for any gap, and check paper timing with the [7357 exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/). Find weak topics fast with the [free diagnostics](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for teaching from September 2017 and exams from June 2018 onwards, published by AQA. Section 3.5, D: Sequences and series (D1 to D6).
