---
resourceId: "mb-ap-calcab-exam-skills-notation-justification"
title: "Notation, Justification and Communication: Exam Skills Guide (Calculus AB and BC)"
description: "How to write calculus answers that earn credit: clear notation, theorem conditions, sign-chart justifications, units in context, and calculator set-ups."
course: "calculus-ab"
unit: 1
topics: []
resourceType: "exam-skills"
calculusScope: "ab-and-bc"
prerequisites:
  - "You have studied most of the course, or at least Units 1 to 5"
  - "You can find derivatives and definite integrals with and without a graphing calculator"
learningObjectives:
  - "Write limits, derivatives, integrals and their units in notation a marker can follow line by line"
  - "Check and state the conditions of the Intermediate Value, Mean Value and Extreme Value Theorems before using them"
  - "Turn a sign chart or a second-derivative value into a written justification that names the function and the reason"
  - "Interpret a derivative, an integral or an approximation in context, with the time, the units and the direction of change"
  - "Show the set-up a calculator-active answer needs and the steps a calculator-free answer needs"
skills: ["2", "3", "4"]
studyMinutes: 55
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Worked example 4 needs a graphing calculator; everything else is calculator-free. Store unrounded values and give calculator answers to three decimal places unless a question says otherwise."
related: ["mb-ap-calcab-1.16-study-guide", "mb-ap-calcab-4.6-study-guide", "mb-ap-calcab-5.4-study-guide", "mb-ap-calcab-5.1-study-guide", "mb-ap-calcab-8.3-study-guide", "mb-ap-calcab-exam-skills-task-verbs"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A correct number with no supporting work can lose credit: write the expression, then the value."
  - "Before you use a theorem, name it and state that its conditions hold for this function on this interval."
  - "A sign chart is evidence, not a justification. Write a sentence: name the function, the x-value and the sign change."
  - "In context, say what is changing, at what time, in which direction, and in which units."
  - "Shared guide for Calculus AB and Calculus BC students; one short section is BC only and is labelled."
faqs:
  - question: "Is this guide for Calculus AB or Calculus BC?"
    answer: "Both. Everything is shared content except one short section on series, parametric and polar notation, which is labelled BC only."
  - question: "Will I lose credit for writing dy/dx instead of f′(x)?"
    answer: "Either notation is fine if it is correct and clear. What costs credit is notation that is wrong, such as dropping the limit symbol or the differential, or writing an equals sign between things that are not equal."
  - question: "How many decimal places should I give?"
    answer: "Unless the question says otherwise, give calculator answers correct to three decimal places, and keep full accuracy in the calculator until the final step."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This guide is shared by Calculus AB and Calculus BC. One section near the end is **BC only** and says so in its heading.

## How to use this guide

This guide is for students who can do the calculus but lose marks on how they write it down.

Every question here is **original Marlbridge practice**, not past exam material. The point values are a **suggested Marlbridge rubric**, not official scoring. For what each command word asks of you, see the companion guide on [task verbs and free-response technique](/advanced-course-resources/calculus-ab/exam-skills-task-verbs/).

Notation on this page: **lim (x → c) f(x)** is the limit as x approaches c, and **∫ (a to b) f(t) dt** is the definite integral from a to b.

## The free-response section at a glance

Both exams have this structure. You read the questions on screen and answer by hand in a paper booklet.

| Part | Questions | Time | Calculator | Share of exam score |
|---|---|---|---|---|
| Section II, Part A | 2 | 30 minutes | Graphing calculator required | 16.7% |
| Section II, Part B | 4 | 60 minutes | Not permitted | 33.3% |
| Section II total | 6 | 90 minutes | — | 50% |

- The AB and BC exams share three free-response questions built on AB content. The BC paper also tests BC-only units.
- In the free-response section, justification (Practice 3) carries 35–60% of the weighting and communication and notation (Practice 4) carries 10–25%. Practice 4 is not assessed in multiple choice.

## Correct notation

**Limits**

- Keep **lim (x → c)** on every line until you take the limit.
- **0/0 is a label, not a value.** Say "substitution gives the indeterminate form 0/0"; never write "= 0/0" in a chain of equals signs.
- For continuity at x = c, state all three facts: f(c) exists, lim (x → c) f(x) exists, and they are equal. Use lim (x → c⁻) and lim (x → c⁺) for one-sided limits.

**Derivatives**

- f′(x), y′ and dy/dx are all fine. At a point, write **f′(3)** or **dy/dx at x = 3**, not just "dy/dx = 7".
- With table values, show the rule's structure first, such as f′(3) = u′(3)v(3) + u(3)v′(3), then substitute.
- When you estimate a derivative from a table, write the difference quotient, not just the number.

**Integrals**

- A definite integral needs **both limits, the integrand and the differential**: ∫ (0 to 6) W(t) dt.
- An indefinite integral needs **+ C**. In a differential equation, losing C makes the particular solution wrong.
- Use brackets: ∫ (1 to 4) (f(x) − g(x)) dx.
- Never join unequal things with "=", as in "x² + 1 = 2x = 2".

**Units**

| Quantity | Units | Example |
|---|---|---|
| f(t) | units of the quantity | litres |
| f′(t) | units of f per unit of t | litres per hour |
| f″(t) | units of f′ per unit of t | litres per hour per hour |
| ∫ (a to b) r(t) dt | units of r × units of t | (litres per hour) × hours = litres |

A quick check: the units of a derivative contain "per"; the units of an integral of a rate do not.

## Justifying with theorem conditions

Use this pattern: **name the theorem, show its conditions hold for this function on this interval, then state the conclusion.**

| Theorem | Conditions to state | Conclusion you may write |
|---|---|---|
| Intermediate Value Theorem (IVT) | f is continuous on [a, b]; k is between f(a) and f(b) | There is a c in (a, b) with f(c) = k |
| Mean Value Theorem (MVT) | f is continuous on [a, b] and differentiable on (a, b) | There is a c in (a, b) with f′(c) = (f(b) − f(a))/(b − a) |
| Extreme Value Theorem (EVT) | f is continuous on the closed interval [a, b] | f has an absolute maximum and an absolute minimum on [a, b] |

**Continuity and differentiability.** If f is differentiable, it is continuous. Say so: "f is differentiable, so f is continuous on [2, 5]." The reverse is false.

**Functions given by a table.** A table cannot prove continuity. The condition must come from the question ("g is twice differentiable") or from a formula.

## Sign-chart and derivative-test justifications

A sign chart is working. The justification is the sentence you write from it.

| You want to show | Write this reason |
|---|---|
| f is increasing on an interval | f′(x) > 0 on that interval |
| Relative maximum at x = c | f′ changes from positive to negative at x = c |
| Relative minimum at x = c | f′ changes from negative to positive at x = c |
| Neither, at a critical point | f′ does not change sign at x = c |
| Relative minimum by the Second Derivative Test | f′(c) = 0 and f″(c) > 0 |
| Graph of f concave up | f″ > 0, or f′ increasing, on the interval |
| Point of inflection at x = c | f″ changes sign at x = c |

Three habits: **echo the question** ("g has a relative minimum at x = 4 because…"); **name the function** (f, f′ or f″, never "it"); and **use calculus, not appearance** ("f′(x) > 0 for 1 < x < 3", not "the graph goes up").

## Interpreting answers in context

An interpretation has four parts: **the time or input, the quantity, the direction, and the value with units.**

- Weak: "It is going down by 3."
- Strong: "At t = 6 hours, the depth of the water is decreasing at a rate of 3 centimetres per hour."

For an integral of a rate, say what accumulates and over which interval. For an approximation, say over or under and why: concavity for a tangent line; increasing or decreasing for a left or right Riemann sum.

## Calculator-active and calculator-free answers

| | Calculator-active (Part A) | Calculator-free (Part B) |
|---|---|---|
| What to write | The set-up: the integral, equation or derivative you evaluate | Each step, including the antiderivative |
| The answer | Decimal to three places, with units | Exact form, such as 4/3 or e² − 1, unless a decimal is asked for |
| Not accepted | Calculator syntax such as fnInt(W, 0, 6) | An integral followed straight by its value |
| Rounding | Store unrounded values; round only the final answer | Not needed |

Graphing, solving an equation, a derivative at a point and a definite integral need only the set-up and result. For any other calculator feature, show the mathematical steps.

## Worked example 1: continuity before the IVT (Unit 1, no calculator)

**Question.** Let h(x) = (x² + 2x − 15)/(x − 3) for x < 3 and h(x) = kx + 2 for x ≥ 3. (a) Find the value of k that makes h continuous at x = 3. (b) With this k, explain why there must be a value c, 1 < c < 5, with h(c) = 10.

**Weak answer.** (a) x + 5 = 8 = 3k + 2 so k = 2. (b) h(1) = 6 and h(5) = 12, so by the IVT h(c) = 10.

**What it misses.** No limits in (a), and "x + 5 = 8" joins unequal things with "=". Part (b) never says h is continuous on [1, 5], the key fact for a two-piece function, or that 10 is between 6 and 12.

**Strong answer.**

(a) Substitution gives the indeterminate form 0/0, so factor: lim (x → 3⁻) h(x) = lim (x → 3⁻) (x − 3)(x + 5)/(x − 3) = lim (x → 3⁻) (x + 5) = 8. Also lim (x → 3⁺) h(x) = 3k + 2 = h(3). For continuity these are equal, so 3k + 2 = 8 and **k = 2**.

(b) h is continuous for x < 3 (the denominator is not zero), for x > 3 (a polynomial), and at x = 3 by part (a). So h is continuous on [1, 5]. h(1) = (−12)/(−2) = 6, h(5) = 12 and 6 < 10 < 12. By the Intermediate Value Theorem, there is a c in (1, 5) with h(c) = 10.

| Suggested Marlbridge rubric | Point |
|---|---|
| (a) One-sided limits in limit notation, and k = 2 | 1 |
| (b) h continuous on [1, 5], including at the join x = 3 | 1 |
| (b) h(1) = 6, h(5) = 12, 6 < 10 < 12, conclusion naming the IVT | 1 |

## Worked example 2: a rate in context (Unit 4, no calculator)

**Question.** A slowly leaking bicycle tyre has air pressure P(t) kilopascals, t hours after a puncture, for 0 ≤ t ≤ 20. P(4) = 210, P′(4) = −2.5 and P″(t) > 0 for all t in the interval. (a) Interpret P′(4) in context, with units. (b) Use the tangent line at t = 4 to approximate P(4.8). Is this an overestimate or an underestimate? Give a reason.

**Weak answer.** (a) The pressure drops by 2.5. (b) P(4.8) ≈ 208. Overestimate, because the tyre is losing air.

**What it misses.** Part (a) has no time, units or rate. Part (b) has no tangent-line expression, and the sign of P′ does not decide over or under.

**Strong answer.**

(a) At t = 4 hours, the air pressure in the tyre is decreasing at a rate of 2.5 kilopascals per hour.

(b) P(4.8) ≈ P(4) + P′(4)(4.8 − 4) = 210 + (−2.5)(0.8) = **208 kilopascals**. Since P″(t) > 0, the graph of P is concave up and lies above its tangent line near t = 4, so the approximation is an **underestimate**.

| Suggested Marlbridge rubric | Point |
|---|---|
| (a) t = 4, "decreasing", 2.5, kilopascals per hour | 1 |
| (b) Tangent-line expression and 208 | 1 |
| (b) Underestimate, with P″ > 0 (concave up) as the reason | 1 |

## Worked example 3: the derivative tests in writing (Unit 5, no calculator)

**Question.** f is defined for all real x, and f′(x) = (x − 3)(x + 1)²/(x² + 4). Find each critical point of f and decide whether f has a relative maximum, a relative minimum or neither there. Justify your answers.

**Weak answer.** f′(x) = 0 at x = 3 and x = −1, so f has relative extrema at x = 3 and x = −1.

**What it misses.** f′ = 0 only says where to look, and the claim about x = −1 is wrong.

**Strong answer.** The denominator x² + 4 is always positive, so f′ exists everywhere and f′(x) = 0 only at x = 3 and x = −1. Since (x + 1)² ≥ 0, the sign of f′ is the sign of (x − 3), except at x = −1.

| Interval | Test value | f′(test value) | Sign of f′ |
|---|---|---|---|
| x < −1 | −2 | −5/8 | − |
| −1 < x < 3 | 0 | −3/4 | − |
| x > 3 | 4 | 5/4 | + |

- f has **neither** a relative maximum nor a relative minimum at x = −1, because f′ is negative on both sides of x = −1.
- f has a **relative minimum** at x = 3, because f′ changes from negative to positive at x = 3.

**Another route at x = 3.** The quotient rule gives f″(3) = 16/13. Since f′(3) = 0 and f″(3) > 0, the Second Derivative Test also gives a relative minimum. At x = −1, f″(−1) = 0, so that test says nothing; only the sign chart decides.

| Suggested Marlbridge rubric | Point |
|---|---|
| Critical points x = −1 and x = 3 | 1 |
| Relative minimum at x = 3, with a sign-change or f″ reason | 1 |
| Neither at x = −1, because f′ does not change sign | 1 |

## Worked example 4: a complete calculator answer (Unit 8, calculator active)

**Question.** Water flows into a tank at W(t) = 20 + 9t·e^(−0.3t) litres per hour, for 0 ≤ t ≤ 8 hours, and drains out at a constant 40 litres per hour. At t = 0 the tank holds 200 litres. (a) How many litres flow in from t = 0 to t = 6? (b) How many litres are in the tank at t = 8? (c) Is the amount of water increasing or decreasing at t = 7? Give a reason.

**Weak answer.** (a) fnInt(W, 0, 6) = 173.7 (b) 109 (c) Decreasing because the graph goes down.

**What it misses.** Calculator syntax and early rounding in (a), no set-up in (b), and a picture instead of rates in (c).

**Strong answer.** Let A(t) be the amount of water in the tank, in litres.

(a) ∫ (0 to 6) W(t) dt = **173.716 litres**.

(b) A(8) = 200 + ∫ (0 to 8) (W(t) − 40) dt = **109.156 litres**.

(c) A′(7) = W(7) − 40 = 27.715 − 40 = −12.285 < 0, so the amount of water is **decreasing** at t = 7.

| Suggested Marlbridge rubric | Point |
|---|---|
| (a) Integral with limits and dt, value with units | 1 |
| (b) 200 plus the integral of the net rate | 1 |
| (b) 109.156 | 1 |
| (c) A′(7) = W(7) − 40 < 0 and the conclusion | 1 |

## BC only: series, parametric and polar notation

*Calculus AB students can skip this section.*

**Series.** Write the index and its range: ∑ (n = 0 to ∞) (−1)ⁿ/(n + 1)², not just ∑ aₙ. Check every test's conditions in writing.

- **Ratio test:** write lim (n → ∞) |aₙ₊₁/aₙ| with the absolute value bars, simplify, and compare with 1. For an interval of convergence, test each endpoint separately.
- **Alternating series test:** state that bₙ is positive, decreasing and has limit 0. For the series above, bₙ = 1/(n + 1)² meets all three, so it converges.
- **Error bounds:** name the bound and compare it with the target. Using S₄ (terms n = 0 to 4) for the sum S above, |S − S₄| ≤ b₅ = 1/36, and 1/36 < 0.03. The comparison is part of the answer.

**Parametric and vector-valued functions.** dy/dx = (dy/dt)/(dx/dt), where dx/dt ≠ 0. Speed is √((dx/dt)² + (dy/dt)²), not dx/dt + dy/dt. Name the time: "at t = 2".

**Polar curves.** Area is ∫ (α to β) ½ r² dθ, with **dθ** as the differential.

## Common mistakes

- Dropping lim before the limit is taken, or writing "= 0/0".
- An integral with no dx or dt; an indefinite integral with no + C.
- Writing "it" instead of f, f′ or f″.
- Giving f′(c) = 0 as the reason for an extremum.
- Using the IVT or MVT without stating continuity (and, for the MVT, differentiability).
- Calculator syntax instead of a set-up, or rounding stored values early.
- Confusing the average value of f with the average rate of change of f.

## Practise it

**Task 1 (Unit 2, no calculator).** A cyclist's distance D(t), in kilometres, t minutes after the start: D(10) = 4.2, D(14) = 5.8, D(20) = 8.0. Estimate D′(17), showing your work, with units.

<details><summary>Model answer</summary>

D′(17) ≈ (D(20) − D(14))/(20 − 14) = (8.0 − 5.8)/6 = 2.2/6 ≈ 0.367 kilometres per minute.

</details>

**Task 2 (Unit 5, no calculator).** f is differentiable for all x, with f(1) = 4 and f(5) = 12. Must there be a c, 1 < c < 5, with f′(c) = 2? Justify.

<details><summary>Model answer</summary>

Yes. f is differentiable, so it is continuous on [1, 5] and differentiable on (1, 5). (f(5) − f(1))/(5 − 1) = 8/4 = 2. By the Mean Value Theorem, there is a c in (1, 5) with f′(c) = 2.

</details>

**Task 3 (Unit 6, no calculator).** Let g(x) = ∫ (2 to x) (t² − 5) dt. Find g′(3) and g(3), and say whether g is increasing at x = 3.

<details><summary>Model answer</summary>

By the Fundamental Theorem of Calculus, g′(x) = x² − 5, so g′(3) = 4. g(3) = [t³/3 − 5t] from 2 to 3 = (9 − 15) − (8/3 − 10) = 4/3. g is increasing at x = 3 because g′(3) = 4 > 0.

</details>

**Task 4 (Unit 7, no calculator).** Find the particular solution y = f(x) of dy/dx = (3x² + 1)/(2y) with f(1) = 2.

<details><summary>Model answer</summary>

Separate: 2y dy = (3x² + 1) dx. Antidifferentiate: y² = x³ + x + C. At (1, 2): 4 = 1 + 1 + C, so C = 2 and y² = x³ + x + 2. Since f(1) = 2 > 0, y = √(x³ + x + 2).

</details>

**Task 5 (Unit 10, BC only, no calculator).** Use the ratio test to find the radius of convergence of ∑ (n = 1 to ∞) (x − 2)ⁿ/(n · 3ⁿ).

<details><summary>Model answer</summary>

lim (n → ∞) |aₙ₊₁/aₙ| = lim (n → ∞) |x − 2| · n/(3(n + 1)) = |x − 2|/3. The series converges when |x − 2|/3 < 1, that is |x − 2| < 3, so the radius of convergence is 3.

</details>

## Where to practise next

- [Working with the Intermediate Value Theorem](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/)
- [Approximating values with local linearity](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/)
- [The Mean Value Theorem](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/)
- [The First Derivative Test](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-study-guide/)
- [Accumulation in applied contexts](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/)
- [Unit 5 mixed review](/advanced-course-resources/calculus-ab/unit-5-review/)
