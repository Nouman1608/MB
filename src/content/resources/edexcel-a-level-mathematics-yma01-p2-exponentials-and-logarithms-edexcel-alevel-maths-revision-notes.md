---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Exponentials and logarithms (P2.5) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-exponentials-and-logarithms-edexcel-alevel-maths"
description: "Condensed notes on y = a^x, the laws of logarithms, change of base and solving a^x = b for Edexcel IAL Maths Unit P2, with exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 5 of Unit P2 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "y = aˣ and its graph", the "laws of logarithms" and "the solution of equations of the form aˣ = b". For full worked examples, use the [P2 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-edexcel-alevel-maths/), then try the [P2 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-edexcel-alevel-maths-practice/).

## The graph of y = aˣ (a > 0, a ≠ 1)

- Through (0, 1) and (1, a).
- Always above the x-axis; asymptote y = 0.
- a > 1: increasing. 0 < a < 1: decreasing.
- y = (1/a)ˣ = a⁻ˣ is the reflection of y = aˣ in the y-axis.
- y = k aˣ: y-intercept k. Two points give k (from x = 0) and then a.

## Definition and special values

log_a x = n ⇔ aⁿ = x (for x > 0)

log_a a = 1, log_a 1 = 0, log_a(aⁿ) = n

## The laws (learn them; they are not in the formulae booklet for this unit)

| Law | Statement |
|---|---|
| Multiplication | log_a x + log_a y = log_a(xy) |
| Division | log_a x − log_a y = log_a(x/y) |
| Power | k log_a x = log_a(xᵏ) |
| Reciprocal | log_a(1/x) = −log_a x |
| Base | log_a a = 1 |
| Change of base | log_a b = log b ÷ log a |

All require a, x, y > 0 and a ≠ 1.

## Solving equations: which method?

| Equation type | Method |
|---|---|
| aˣ = b | x = log b ÷ log a |
| a^(px + q) = b | (px + q) log a = log b, then solve the linear equation |
| a^(x + p) = b^(x + q) (two bases) | Take logs, expand, collect x terms, factorise out x |
| log_a(f(x)) = c | f(x) = aᶜ |
| Sum or difference of logs = c | Combine into one log, then index form |
| a²ˣ + p aˣ + q = 0 | Let y = aˣ, solve the quadratic, reject y ≤ 0 |
| aⁿ > b or aⁿ < b | Take logs; reverse the inequality if dividing by log a < 0 |

## Typical rewrites before substituting

- 3²ˣ = (3ˣ)²
- 3ˣ⁺¹ = 3 × 3ˣ
- 3ˣ⁻¹ = 3ˣ ÷ 3
- 9ˣ = (3²)ˣ = (3ˣ)²
- 3²ˣ⁺¹ = 3 × (3ˣ)²

## Two routines in miniature

**Log equation with a quadratic.** log₂ x + log₂(x − 2) = 3 → log₂(x(x − 2)) = 3 → x² − 2x = 8 → (x − 4)(x + 2) = 0. Reject x = −2 (log₂ of a negative number is undefined), so x = 4.

**Two bases.** 3ˣ = 2ˣ⁺² → x log 3 = (x + 2) log 2 → x(log 3 − log 2) = 2 log 2 → x = log 4 ÷ log 1.5 = 3.42 (3 s.f.). Tidying with the laws (2 log 2 = log 4, log 3 − log 2 = log 1.5) gives a clean exact form before the calculator step.

## Key terms

| Term | Meaning |
|---|---|
| Base | The number a in aˣ or log_a x |
| Exponential function | A function of the form aˣ with a constant base and variable index |
| Logarithm | log_a x is the power to which a must be raised to give x |
| Asymptote | A line the curve approaches but never meets; y = 0 for y = aˣ |
| Index form | Writing log_a x = n as aⁿ = x |
| Change of base | Rewriting a logarithm in a base your calculator has |

## Exam traps

- log(x + y) cannot be simplified; log x + log y can.
- (log x)² ≠ 2 log x.
- Use the power law **before** combining terms.
- Logs of zero or negative numbers are undefined: reject such roots.
- In a quadratic in aˣ, a negative value of aˣ gives no solution.
- log a < 0 when 0 < a < 1: dividing by it reverses an inequality.
- "Smallest integer n" means the first integer above the boundary value once the inequality is solved as n > c; check the integers either side.
- Keep the full calculator value until the end; round only the final answer.

## Self-test

**1.** Evaluate log₂ 64.

**2.** Evaluate log₄ 2.

**3.** Evaluate log₃(1/27).

**4.** Write 3 log x − 2 log y as a single logarithm.

**5.** Solve 3ˣ = 20 to 3 significant figures.

**6.** Solve 2ˣ⁻² = 7 to 3 significant figures.

**7.** Solve log₂(x + 1) − log₂ x = 3.

**8.** Solve 4ˣ = 3ˣ⁺¹ to 3 significant figures.

**9.** Find the smallest integer n for which 1.06ⁿ > 2.

**10.** The curve y = k aˣ passes through (0, 2) and (3, 54). Find k and a.

**11.** Solve 2²ˣ − 9(2ˣ) + 8 = 0.

**12.** Explain why log₃(−9) has no value.

### Answers

**1.** 6, since 2⁶ = 64.

**2.** ½, since 4^½ = 2.

**3.** −3, since 3⁻³ = 1/27.

**4.** log(x³/y²).

**5.** x = log 20 ÷ log 3 = 2.73.

**6.** x − 2 = log 7 ÷ log 2 = 2.807, so x = 4.81.

**7.** log₂((x + 1)/x) = 3, so (x + 1)/x = 8, giving x + 1 = 8x and x = 1/7.

**8.** x log 4 = (x + 1) log 3, so x(log 4 − log 3) = log 3 and x = log 3 ÷ log(4/3) = 3.82.

**9.** n > log 2 ÷ log 1.06 = 11.9, so n = 12.

**10.** k = 2; 2a³ = 54 gives a³ = 27, so a = 3.

**11.** Let y = 2ˣ: y² − 9y + 8 = 0, so y = 1 or 8, giving x = 0 or x = 3.

**12.** 3ⁿ is positive for every real n, so no power of 3 equals −9.

## Related resources

- [P2 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-edexcel-alevel-maths/)
- [P2 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-edexcel-alevel-maths-practice/)
- [Exponentials, logarithms and trigonometric equations revision notes](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric-revision-notes/)
- [Unit P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/)
