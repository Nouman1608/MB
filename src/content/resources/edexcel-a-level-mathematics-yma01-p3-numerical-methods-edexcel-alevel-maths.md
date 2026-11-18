---
title: "Edexcel International A Level Mathematics (YMA01): Numerical methods (P3.6)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P3: Pure Mathematics 3"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 3.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-numerical-methods-edexcel-alevel-maths"
description: "Change-of-sign root location, when it fails, and solving equations by iteration for Edexcel IAL Maths Unit P3, with worked examples and accuracy checks."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 6 of Unit P3 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). There are two content statements:

- **6.1** "Location of roots of f(x) = 0 by considering changes of sign of f(x) in an interval of x in which f(x) is continuous"
- **6.2** "Approximate solution of equations using simple iterative methods, including recurrence relations of the form xₙ₊₁ = f(xₙ)", where the guidance adds that "leads will be given"

"Leads will be given" means the question supplies the iteration formula, or tells you how to rearrange the equation. You are not expected to invent a rearrangement from nothing, but you are expected to show that a given rearrangement is equivalent to the original equation.

The [guide to the exponential and natural logarithm functions and numerical methods](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions/) introduces both methods with exponential examples. This page goes further: when a sign change misleads, how to prove a root is correct to a stated accuracy, and why different rearrangements of one equation behave differently. Afterwards, use the [P3 numerical methods revision notes](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths-revision-notes/) and the [P3 numerical methods practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths-practice/). Recurrence relations themselves first appear in Unit P2; see the [sequences and series guide](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the/).

## Locating a root by change of sign

If f is **continuous** on [a, b] and f(a) and f(b) have opposite signs, then the graph must cross the x-axis between a and b, so f(x) = 0 has at least one root in (a, b).

### Worked example 1

**Show that x³ − 4x − 2 = 0 has a root between x = 2 and x = 3, and then that it lies between 2.2 and 2.3.**

Let f(x) = x³ − 4x − 2.

- f(2) = 8 − 8 − 2 = −2 < 0
- f(3) = 27 − 12 − 2 = 13 > 0

There is a change of sign and f is continuous (it is a polynomial), so there is a root in [2, 3].

- f(2.2) = 10.648 − 8.8 − 2 = −0.152 < 0
- f(2.3) = 12.167 − 9.2 − 2 = 0.967 > 0

So the root lies in [2.2, 2.3].

A complete answer has three parts: both values with their signs, the words "change of sign", and the condition "f is continuous".

## When the sign-change method misleads

| Situation | What happens | Example |
|---|---|---|
| f is not continuous in the interval | Sign changes with no root | tan x on [1, 2] (radians): tan 1 > 0, tan 2 < 0, but there is an asymptote at x = π/2, not a root |
| Repeated root, curve touches the axis | Root with no sign change | (x − 2)² ≥ 0 has a root at x = 2, but f never becomes negative |
| An even number of roots in the interval | Signs at the ends agree | x² − 3x + 2 on [0.5, 2.5]: f(0.5) = f(2.5) = 0.75, yet roots at 1 and 2 |
| Interval too wide | Roots missed or counted wrongly | Use narrower intervals near a suspected root |

This is why the continuity condition must be stated: it is what rules out the first row.

## Iteration: xₙ₊₁ = g(xₙ)

To solve f(x) = 0, rearrange it as x = g(x). Then start from a value x₀ near the root and compute x₁ = g(x₀), x₂ = g(x₁), and so on. If the sequence settles down (converges), its limit is a root.

### Worked example 2: iterating towards a root

**(a) Show that x³ − 4x − 2 = 0 can be written as x = ∛(4x + 2).**

x³ − 4x − 2 = 0 ⇔ x³ = 4x + 2 ⇔ x = ∛(4x + 2).

**(b) Using xₙ₊₁ = ∛(4xₙ + 2) with x₀ = 2, find x₁, x₂ and x₃ to 4 decimal places.**

- x₁ = ∛10 = 2.1544
- x₂ = ∛(4 × 2.1544... + 2) = 2.1979
- x₃ = 2.2098

On a calculator, type 2, press "=", then enter ∛(4 × Ans + 2) and press "=" repeatedly. This keeps full accuracy at each step; retyping rounded values can change the later decimals.

Further iterations give 2.2131, 2.2140, 2.2142, 2.2143, ... The values increase steadily towards the root. This is a **staircase** pattern: each value is on the same side of the root as the last.

**(c) Show that the root is 2.214 correct to 3 decimal places.**

Iteration alone does not prove accuracy. Use a sign change on the interval that rounds to 2.214:

- f(2.2135) = −0.00877 < 0
- f(2.2145) = 0.00193 > 0

There is a change of sign and f is continuous, so the root lies in (2.2135, 2.2145), and therefore **α = 2.214** to 3 decimal places.

### Worked example 3: the same equation, a different rearrangement

**x³ − 4x − 2 = 0 can also be written as x = (x³ − 2)/4. Use this with x₀ = 2.**

x₁ = (8 − 2)/4 = 1.5, x₂ = 0.3438, x₃ = −0.4898, x₄ = −0.5294, ... and the values settle near **−0.5392**.

The iteration converges, but to a **different root**. x³ − 4x − 2 = 0 has three real roots (about −1.675, −0.539 and 2.214), and which one an iteration finds, if any, depends on the rearrangement as well as on x₀. A rearrangement may also **diverge**, with values moving further apart, in which case it gives no root at all.

### Worked example 4: an oscillating iteration in radians

**The equation sin x = x/2 has a root α between 1.8 and 1.9. Use xₙ₊₁ = 2 sin xₙ with x₀ = 2 to find α to 3 decimal places.**

Calculator in **radians**. The values are:

2, 1.8186, 1.9389, 1.8660, 1.9135, 1.8837, 1.9029, 1.8907, ...

They lie alternately above and below the root, closing in slowly: a **cobweb** pattern. Many iterations are needed, so confirm the answer with a sign change. With f(x) = sin x − x/2:

- f(1.8945) = 0.00081 > 0
- f(1.8955) = −0.0000047 < 0

So **α = 1.895** to 3 decimal places. Notice how small f(1.8955) is: the root is very close to 1.8955, which is why checking the interval, not just rounding the iterates, matters.

## Common mistakes

- **Not stating continuity** in a sign-change argument.
- **Only one value of f** quoted, or values without their signs.
- **Wrong interval for accuracy:** to show α = 2.214 to 3 d.p. test 2.2135 and 2.2145, not 2.213 and 2.215.
- **Degrees mode** for trigonometric iterations; this unit's calculus uses radians.
- **Retyping rounded iterates,** which introduces drift; use the Ans key.
- **Assuming convergence means the root you want:** check which root the values approach.
- **Rearranging incorrectly:** show each algebraic step from f(x) = 0 to x = g(x).

## Exam technique

- **"Show that the equation has a root in the interval [a, b]"**: evaluate f(a) and f(b), state the change of sign and that f is continuous, and conclude.
- **"Show that the equation can be written as ..."**: start from the given equation and reach the printed form exactly.
- **"Use the iteration formula ... to find x₁, x₂ and x₃"**: give each value to the stated number of decimal places; marks are often for x₁ and for the final value.
- **"By choosing a suitable interval, show that α = ... to 3 decimal places"**: the interval is the rounding interval, and the sign change completes the proof.
- **"Explain why ..."** after an iteration that diverges or a sign test that fails: name the reason (discontinuity, repeated root, divergence) in words.

## Related resources

- [P3 numerical methods revision notes](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths-revision-notes/)
- [P3 numerical methods practice questions](/resources/edexcel-a-level-mathematics-yma01-p3-numerical-methods-edexcel-alevel-maths-practice/)
- [The exponential and natural logarithm functions, log graphs and numerical methods](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions/)
- [P3 exponentials and logarithms study guide](/resources/edexcel-a-level-mathematics-yma01-p3-exponentials-and-logarithms-edexcel-alevel-maths/)
- [Sequences and series: arithmetic, geometric and the binomial expansion](/resources/edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the/)
