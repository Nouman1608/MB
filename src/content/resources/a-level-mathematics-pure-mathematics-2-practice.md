---
title: "A Level Mathematics: Pure Mathematics 2 — Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
description: "Original exam-style practice questions with full worked solutions on the modulus function, rational-function algebra, logarithms and exponentials, extended trigonometry, differentiation, integration and numerical methods, for Cambridge International AS & A Level Mathematics (9709) Pure Mathematics 2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Pure Mathematics 2 study guide](/resources/a-level-mathematics-pure-mathematics-2/) and
[revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/)

---

## Section A — Algebra and logarithms

**1.** Solve the equation |2x − 3| = 7. **[3]**

**2.** Use the factor theorem to show that (x − 2) is a factor of f(x) = x³ − 3x² − 4x + 12, then fully
factorise f(x). **[4]**

**3.** Solve the equation 3^(2x) = 5, giving your answer correct to 3 significant figures. **[3]**

**4.** Solve log₂(x) + log₂(x − 2) = 3 for x > 2. **[4]**

## Section B — Trigonometry, calculus and numerical methods

**5.** Simplify sec²θ − tan²θ, and hence solve sec²θ = 2 + tanθ for 0° ≤ θ ≤ 360°. **[5]**

**6.** Differentiate y = e^(2x) sin x with respect to x. **[3]**

**7.** Find ∫ (1/(2x + 1)) dx. **[2]**

**8.** Show by a change of sign that the equation x³ − x − 1 = 0 has a root between x = 1 and x = 2.
Use the iteration x_(n+1) = (x_n + 1)^(1/3) starting from x₀ = 1.5 to find this root correct to
3 decimal places, showing each iteration. **[5]**

**9.** Find the exact value of ∫₀^(π/4) sec²x dx. **[3]**

---

## Worked solutions

**1.** |2x − 3| = 7 means 2x − 3 = 7 or 2x − 3 = −7 [1]. Solving each: 2x = 10, so x = 5 [1]; or
2x = −4, so **x = 5 or x = −2** [1].

**2.** f(2) = (2)³ − 3(2)² − 4(2) + 12 = 8 − 12 − 8 + 12 = 0 [1], so by the factor theorem (x − 2) is a
factor [1]. Dividing f(x) by (x − 2) gives x² − x − 6 [1], which factorises as (x − 3)(x + 2). So
f(x) = (x − 2)(x − 3)(x + 2) [1].

**3.** Taking logs of both sides: 2x ln 3 = ln 5 [1]. So x = ln 5 / (2 ln 3) = 1.6094 / 2.1972 [1] =
**0.733** (3 s.f.) [1].

**4.** log₂(x) + log₂(x − 2) = log₂(x(x − 2)) = 3 [1], so x(x − 2) = 2³ = 8 [1]. This gives
x² − 2x − 8 = 0, which factorises as (x − 4)(x + 2) = 0, so x = 4 or x = −2 [1]. Since x > 2 is
required, **x = 4** [1] (x = −2 is rejected as it does not satisfy the domain of the original
logarithms).

**5.** Using the identity sec²θ = 1 + tan²θ, sec²θ − tan²θ = 1 [1]. Substituting sec²θ = 1 + tan²θ
into sec²θ = 2 + tanθ gives 1 + tan²θ = 2 + tanθ, so tan²θ − tanθ − 1 = 0 [1]. Using the quadratic
formula, tanθ = (1 ± √5)/2, giving tanθ = 1.618 or tanθ = −0.618 [1]. For tanθ = 1.618: θ = 58.3° or
238.3° [1]. For tanθ = −0.618: θ = 148.3° or 328.3° [1] (all four values in range, accept to 1 d.p.).

**6.** Using the product rule with u = e^(2x), v = sin x: du/dx = 2e^(2x), dv/dx = cos x [1].
dy/dx = u(dv/dx) + v(du/dx) = e^(2x)cos x + 2e^(2x)sin x [1] = **e^(2x)(cos x + 2 sin x)** [1].

**7.** ∫ 1/(2x + 1) dx = (1/2) ln|2x + 1| + c [2] (one mark for recognising the 1/2 scaling factor from
the chain rule in reverse, one for the correct ln form with the constant of integration).

**8.** Let f(x) = x³ − x − 1. f(1) = 1 − 1 − 1 = −1 (negative). f(2) = 8 − 2 − 1 = 5 (positive) [1].
Since f(x) changes sign between x = 1 and x = 2, a root lies in this interval [1].
Iterating x_(n+1) = (x_n + 1)^(1/3) from x₀ = 1.5:
x₁ = (2.5)^(1/3) = 1.3572, x₂ = (2.3572)^(1/3) = 1.3326, x₃ = (2.3326)^(1/3) = 1.3283,
x₄ = (2.3283)^(1/3) = 1.3275, x₅ = (2.3275)^(1/3) = 1.3273 [3]. The iteration converges to
**x = 1.327** (3 d.p.) [1].

**9.** The derivative of tan x is sec²x, so ∫ sec²x dx = tan x + c [1]. Evaluating between the limits:
[tan x] from 0 to π/4 = tan(π/4) − tan(0) = 1 − 0 [1] = **1** [1].

## A note on the numerical methods question

Question 8 illustrates the two habits the study guide and revision notes both flag as essential for
2.6: carrying more decimal places through each intermediate iteration than the final answer requires
(dropping precision too early is a common way marks are lost, since small rounding errors compound
across several iterations), and correctly interpreting what the sign change actually demonstrates —
that a root exists somewhere within the interval, not what its precise value is. A full-mark answer
states the sign-change conclusion explicitly before moving into the iteration itself, rather than
treating the two steps as one combined statement.

The same discipline applies across this whole practice set: question 5 rewards recognising which trigonometric identity turns an otherwise unmanageable equation into a standard quadratic in tanθ, and question 7 rewards spotting the chain-rule scaling factor before integrating, rather than reaching for a more complicated substitution than the question actually requires. Checking which representation of an expression is easiest to work with before starting a calculation is the single habit that connects every sub-topic tested here.
