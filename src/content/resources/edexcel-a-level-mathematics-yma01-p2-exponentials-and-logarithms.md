---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Exponentials and logarithms (P2.5)"
resourceType: "study-guides"
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
description: "The graph of y = a^x, the laws of logarithms and solving a^x = b for Edexcel IAL Maths Unit P2, including log equations, hidden quadratics and inequalities."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5 of Unit P2 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). There are three content statements:

- **5.1** "y = aˣ and its graph", for a > 0, a ≠ 1
- **5.2** "Laws of logarithms", including log_a(1/x) ≡ −log_a x and log_a a = 1
- **5.3** "The solution of equations of the form aˣ = b", where "students may use the change of base formula"

The [Unit P2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) shows how this section links to geometric series, and the [guide to exponentials, logarithms and trigonometric equations](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric/) introduces each statement. This page goes further: why the laws hold, equations where the unknown appears on both sides, equations hidden inside logarithms, quadratics in aˣ, and inequalities where the direction can flip. Afterwards, use the [P2 exponentials and logarithms revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-revision-notes/) and the [P2 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-practice/).

The natural logarithm ln x and the function eˣ belong to Unit P3; see the [P3 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms/).

## The graph of y = aˣ

For every base a > 0, a ≠ 1:

- the curve passes through **(0, 1)**, because a⁰ = 1
- it also passes through (1, a)
- y > 0 for all x; the x-axis, **y = 0, is an asymptote**
- if a > 1 the curve rises (growth); if 0 < a < 1 it falls (decay)
- y = a⁻ˣ = (1/a)ˣ is the reflection of y = aˣ in the y-axis

For y = k × aˣ the y-intercept moves to (0, k). Two points on such a curve determine k and a. If the curve passes through (0, 3) and (2, 75), then k = 3 and 3a² = 75, so a² = 25 and a = 5 (a must be positive).

## Logarithms as inverse powers

log_a x = n means exactly aⁿ = x. So log₂ 32 = 5 because 2⁵ = 32, and log₉ 3 = ½ because 9^½ = 3. Two special values follow directly: log_a a = 1 and log_a 1 = 0.

### Why the laws hold

Let log_a x = m and log_a y = n, so x = aᵐ and y = aⁿ. Then

- xy = aᵐ⁺ⁿ, so **log_a(xy) = m + n = log_a x + log_a y**
- x/y = aᵐ⁻ⁿ, so **log_a(x/y) = log_a x − log_a y**
- xᵏ = aᵐᵏ, so **log_a(xᵏ) = k log_a x**

Putting x = 1 in the second law gives **log_a(1/y) = −log_a y**. Each law is an index law rewritten, which is why there is no law for log_a(x + y).

### Worked example 1: combining logarithms

**Write 2 log₅ 10 − log₅ 4 as a single logarithm and evaluate it.**

2 log₅ 10 = log₅ 10² = log₅ 100 (power law first)

log₅ 100 − log₅ 4 = log₅(100/4) = log₅ 25 = **2**

Always apply the power law before combining sums and differences.

## Solving aˣ = b

Take logarithms of both sides (any base, usually base 10 on a calculator):

x log a = log b, so x = log b ÷ log a.

This is the same as the **change of base formula**: log_a b = log b ÷ log a. A useful special case is log_a b = 1 ÷ log_b a.

### Worked example 2: the unknown on both sides

**Solve 5ˣ⁺¹ = 3²ˣ⁻¹, giving x to 3 significant figures.**

Take logs: (x + 1) log 5 = (2x − 1) log 3.

Expand and collect the x terms:

x log 5 + log 5 = 2x log 3 − log 3

log 5 + log 3 = x(2 log 3 − log 5)

x = log 15 ÷ log(9/5) = 4.6072... so **x = 4.61** (3 s.f.)

Writing log 15 and log(9/5) uses the laws to tidy the exact answer before the calculator step, which reduces rounding errors.

## Equations inside logarithms

When the unknown is inside a logarithm, combine the logs into one, then undo the logarithm by writing the equation in index form.

### Worked example 3: rejecting a root

**Solve log₃(2x + 3) + log₃ x = 2.**

Combine: log₃(x(2x + 3)) = 2, so x(2x + 3) = 3² = 9.

2x² + 3x − 9 = 0, so (2x − 3)(x + 3) = 0, giving x = 3/2 or x = −3.

log₃ x is undefined for x = −3, so **x = 3/2** is the only solution. Check: log₃ 6 + log₃ 1.5 = log₃ 9 = 2.

## Quadratics in aˣ

Because a²ˣ = (aˣ)², an equation such as 5²ˣ − 7(5ˣ) + 12 = 0 is a quadratic in disguise.

### Worked example 4

**Solve 5²ˣ − 7(5ˣ) + 12 = 0, giving answers to 3 significant figures.**

Let y = 5ˣ: y² − 7y + 12 = 0, so (y − 3)(y − 4) = 0 and y = 3 or y = 4.

- 5ˣ = 3 gives x = log 3 ÷ log 5 = **0.683**
- 5ˣ = 4 gives x = log 4 ÷ log 5 = **0.861**

If one value of y is negative, reject it: 5ˣ > 0 for all x. Also watch for terms such as 5ˣ⁺¹ = 5 × 5ˣ and 2²ˣ⁺¹ = 2 × (2ˣ)², which must be rewritten before substituting.

## Inequalities and the direction of the sign

Multiplying or dividing an inequality by a negative number reverses it, and log a is **negative when 0 < a < 1**.

### Worked example 5

**Find the smallest integer n for which 0.8ⁿ < 0.05.**

Take logs: n log 0.8 < log 0.05.

log 0.8 is negative, so dividing reverses the inequality: n > log 0.05 ÷ log 0.8 = 13.43.

So **n = 14**. Check: 0.8¹³ ≈ 0.0550 (too big) and 0.8¹⁴ ≈ 0.0440 (less than 0.05).

This is the standard form of geometric-series and decay questions such as "after how many years does the value first fall below ...".

## Common mistakes

- **Inventing laws:** log(x + y) is not log x + log y, and log x ÷ log y is not log(x/y).
- **Power law misapplied:** 2 log x = log x², but (log x)² is something else.
- **Combining before the power law:** in 3 log 2 + log 5 − log 4, change 3 log 2 to log 8 first.
- **Not rejecting invalid roots:** log of a negative number or zero is undefined.
- **Dividing by a negative logarithm** without reversing the inequality.
- **Premature rounding:** keep full calculator values until the final answer.
- **Treating 5ˣ⁺¹ as 5ˣ + 1** when making a substitution.

## Exam technique

- **"Give your answer to 3 significant figures"** means the method can use a calculator, but show the line x = log b ÷ log a.
- **"Exact"** means leave answers as logarithms or fractions, such as x = log 15 ÷ log 1.8, or simplify to integers where possible.
- **"Show that"** questions with logs often require you to name the law at each step implicitly by writing each step separately.
- **"Hence"** after a substitution such as "using y = 2ˣ" means you must use that substitution.
- **Check solutions** of log equations in the original equation; one line of checking can save a mark lost to an invalid root.

## Related resources

- [P2 exponentials and logarithms revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-revision-notes/)
- [P2 exponentials and logarithms practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-exponentials-and-logarithms-practice/)
- [Exponentials, logarithms and trigonometric equations](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric/)
- [Sequences and series: arithmetic, geometric and the binomial expansion](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the/)
- [P3 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms/)
