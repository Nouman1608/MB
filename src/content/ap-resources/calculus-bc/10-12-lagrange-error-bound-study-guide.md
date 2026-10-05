---
resourceId: "mb-ap-calcbc-10.12-study-guide"
title: "Lagrange Error Bound: Study Guide (Calculus BC 10.12)"
description: "Use the Lagrange error bound to limit how far a Taylor polynomial estimate can be from the true value, choose M, find the degree needed and compare with the alternating series bound."
course: "calculus-bc"
unit: 10
topics: ["10.12"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Taylor polynomials and the coefficient f⁽ⁿ⁾(a)/n! (Topic 10.11)"
  - "Alternating series error bound (Topic 10.10)"
  - "Finding the greatest value of a function on an interval (Topics 5.2 and 5.5)"
prerequisiteResources: ["mb-ap-calcbc-10.11-study-guide"]
learningObjectives:
  - "State the Lagrange error bound and explain what each part of it means"
  - "Choose a valid value of M from a formula, a graph or a given bound, and justify it"
  - "Calculate an error bound and use it to give an interval that must contain the true value"
  - "Show that an error is less than a given number, with a clear comparison"
  - "Find the degree needed to reach a required accuracy"
  - "Decide when the alternating series error bound can be used for a Taylor estimate instead"
skills: ["1"]
studyMinutes: 55
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Error bounds are often asked without a calculator, so keep powers and factorials exact. Where a calculator is allowed, use it to evaluate and compare, but show the bound expression. Angles in radians."
related: ["mb-ap-calcbc-10.12-revision-notes", "mb-ap-calcbc-10.12-practice", "mb-ap-calcbc-10.12-checklist"]
next: "mb-ap-calcbc-10.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "|f(x) − Pₙ(x)| ≤ M · |x − a|ⁿ⁺¹ / (n + 1)!, where M is at least the largest value of |f⁽ⁿ⁺¹⁾| between a and x."
  - "Use the (n + 1)th derivative, the next one after the polynomial stops."
  - "The bound is a guarantee, not the actual error: the true error is usually smaller."
  - "f(x) lies between Pₙ(x) − bound and Pₙ(x) + bound."
  - "If the Taylor terms alternate and shrink, the alternating series error bound may be used instead."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. The Lagrange error bound is BC-only content."
  - question: "Does M have to be the exact maximum?"
    answer: "No. Any number that is at least as big as |f⁽ⁿ⁺¹⁾(z)| for every z between a and x works. A bigger M gives a safe but weaker bound. A smaller one is not allowed."
  - question: "Which bound should I use, Lagrange or alternating series?"
    answer: "Use whichever the question asks for. If it does not say, the alternating series bound is often quicker when the terms of the Taylor series alternate in sign and decrease in size; Lagrange works for any function with the needed derivative bound."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** The Lagrange error bound is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Taylor polynomials | 10.11 | The approximation Pₙ(x) whose error we bound |
| Alternating series error bound | 10.10 | A second way to bound some Taylor errors |
| Greatest value of a function on an interval | 5.2, 5.5 | Finding M |
| Higher-order derivatives | 3.6 | Finding f⁽ⁿ⁺¹⁾ |

Review the previous topic, [finding Taylor polynomial approximations](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-study-guide/), first if needed. Other prerequisites are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## The question: how wrong could the estimate be?

In Topic 10.11 you used Pₙ(x) to estimate f(x). On the exam you usually cannot check the estimate against the true value. You need a **guaranteed** limit on the error, worked out from information you do have.

The **error** (or remainder) is

**Rₙ(x) = f(x) − Pₙ(x)**

The Lagrange error bound gives a number E with |Rₙ(x)| ≤ E. Then the true value must lie in the interval **[Pₙ(x) − E, Pₙ(x) + E]**.

## The Lagrange error bound

> If |f⁽ⁿ⁺¹⁾(z)| ≤ M for every z between a and x, then
> **|f(x) − Pₙ(x)| ≤ M · |x − a|ⁿ⁺¹ / (n + 1)!**

Read it piece by piece:

- **n** is the degree of the polynomial you used.
- **f⁽ⁿ⁺¹⁾** is the **next** derivative, the first one the polynomial does not match.
- **M** is any upper bound for the size of that derivative on the interval between the centre a and the point x.
- **|x − a|ⁿ⁺¹ / (n + 1)!** looks exactly like the next Taylor term, without the derivative.

So the bound is "the next term, with the unknown derivative replaced by its worst case". That is why it shrinks fast close to the centre (small |x − a|) and for high degree (large factorial).

**Where it comes from (background).** Taylor's theorem says the error equals f⁽ⁿ⁺¹⁾(c)/(n + 1)! · (x − a)ⁿ⁺¹ for some number c between a and x. For n = 0 this is the Mean Value Theorem: f(x) − f(a) = f′(c)(x − a). We do not know c, so we replace |f⁽ⁿ⁺¹⁾(c)| by M, which is at least as big. You do not need to prove Taylor's theorem; you need to use the bound.

## Choosing M

M must be **at least** the largest value of |f⁽ⁿ⁺¹⁾(z)| for z between a and x. Common ways to find one:

| Situation | How to get M | Example |
|---|---|---|
| sin or cos | The size of sin z or cos z is never more than 1 | f⁽ⁿ⁺¹⁾ = ±sin z or ±cos z gives M = 1 |
| The size of f⁽ⁿ⁺¹⁾ only increases or only decreases on the interval | Use the larger endpoint value | For f(x) = 1/(1 + x), the size of f‴(z) is 6/(1 + z)⁴, largest at the left end |
| eᶻ on [0, x] | eᶻ ≤ eˣ, then round up to a simple number | eᶻ ≤ e^0.6 < e < 3, so M = 3 |
| The question gives a bound | Use it as given | "The size of f⁽⁴⁾(x) is at most 6 for 1 ≤ x ≤ 1.5" gives M = 6 |

A bigger M is always **safe** (the bound is still true, just weaker). A smaller M than the true maximum is **wrong**, even if the arithmetic is neat.

## Worked example 1: √4.4 with a quadratic

**Question.** Let f(x) = √x. (a) Find P₂(x), the second-degree Taylor polynomial for f about x = 4, and use it to estimate √4.4. (b) Use the Lagrange error bound to show that the estimate differs from √4.4 by less than 0.0002. (c) Give an interval that must contain √4.4.

1. **Derivatives.** f(x) = x^(1/2), f′(x) = ½x^(−1/2), f″(x) = −¼x^(−3/2), f‴(x) = (3/8)x^(−5/2).
2. **Values at 4.** f(4) = 2, f′(4) = 1/4, f″(4) = −¼ · 1/8 = −1/32.
3. **Polynomial.** P₂(x) = 2 + ¼(x − 4) − (1/64)(x − 4)².
4. **Estimate.** x − 4 = 0.4: P₂(4.4) = 2 + 0.1 − (1/64)(0.16) = 2 + 0.1 − 0.0025 = **2.0975**.
5. **Find M (n = 2, so use f‴).** On 4 ≤ z ≤ 4.4, f‴(z) = 3/(8z^(5/2)) is positive and **decreasing**, because z^(5/2) grows. So its largest value is at z = 4: M = 3/(8 · 32) = **3/256**.
6. **Bound.** |f(4.4) − P₂(4.4)| ≤ (3/256) · 0.4³ / 3! = (3/256)(0.064)/6 = **1/8000 = 0.000125**.
7. **Compare and conclude.** 0.000125 < 0.0002, so **the estimate 2.0975 differs from √4.4 by less than 0.0002**.
8. **(c) Interval.** √4.4 lies in [2.0975 − 0.000125, 2.0975 + 0.000125] = **[2.097375, 2.097625]**.

<figure>
<svg viewBox="0 0 580 190" role="img" aria-labelledby="lag-title lag-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lag-title">Number line showing the interval guaranteed by the Lagrange error bound for √4.4</title>
<desc id="lag-desc">A number line from 2.0973 to 2.0978. A thick bracketed segment runs from 2.097375 to 2.097625: this is P2(4.4) = 2.0975 plus or minus the bound 0.000125. A filled circle marks the estimate 2.0975 at the middle of the segment. An open diamond marks the true value √4.4 ≈ 2.097618, inside the segment and close to its right end.</desc>
<rect x="0" y="0" width="580" height="190" fill="#ffffff"/>
<line x1="40" y1="100" x2="540" y2="100" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="94" x2="60" y2="106"/><line x1="152" y1="94" x2="152" y2="106"/><line x1="244" y1="94" x2="244" y2="106"/><line x1="336" y1="94" x2="336" y2="106"/><line x1="428" y1="94" x2="428" y2="106"/><line x1="520" y1="94" x2="520" y2="106"/>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="60" y="122">2.0973</text><text x="152" y="122">2.0974</text><text x="244" y="122">2.0975</text><text x="336" y="122">2.0976</text><text x="428" y="122">2.0977</text><text x="520" y="122">2.0978</text>
</g>
<line x1="129" y1="100" x2="359" y2="100" stroke="#1d2b44" stroke-width="6"/>
<path d="M135 88 L129 88 L129 112 L135 112" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M353 88 L359 88 L359 112 L353 112" fill="none" stroke="#1d2b44" stroke-width="2"/>
<circle cx="244" cy="100" r="7" fill="#1d2b44" stroke="#ffffff" stroke-width="1.5"/>
<path d="M352.3 90 L360.3 100 L352.3 110 L344.3 100 Z" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="244" y="70">estimate P₂(4.4) = 2.0975 (filled circle)</text>
<line x1="356" y1="88" x2="410" y2="44" stroke="#1d2b44" stroke-width="1"/>
<text x="460" y="38">true value √4.4 ≈ 2.097618 (diamond)</text>
<text x="129" y="148">2.097375</text>
<text x="359" y="148">2.097625</text>
<text x="244" y="172">guaranteed interval: 2.0975 ± 0.000125</text>
</g>
</svg>
<figcaption>Figure 1. The Lagrange error bound turns one estimate into an interval. The true value √4.4 (diamond) must lie inside the bracketed segment centred on the estimate (filled circle).</figcaption>
</figure>

**Checks.**
- *Calculator comparison (where allowed):* √4.4 ≈ 2.097618, so the actual error is about 0.000118, just under the bound 0.000125. The bound did its job.
- *Over or under?* By Taylor's theorem the error is f‴(c)/3! · (0.4)³ for some c between 4 and 4.4. Both factors are positive, so √4.4 > P₂(4.4): the estimate is an **underestimate**. That narrows the interval to [2.0975, 2.097625]. This sign argument works only when f⁽ⁿ⁺¹⁾ keeps one sign on the interval.

## Worked example 2: choosing the degree

**Question.** You want to estimate e^0.6 using a Maclaurin polynomial for eˣ, with error less than 0.001. Use the Lagrange error bound to find the smallest degree n that guarantees this.

1. **Derivative.** Every derivative of eˣ is eˣ, so f⁽ⁿ⁺¹⁾(z) = eᶻ.
2. **Choose M.** For 0 ≤ z ≤ 0.6, eᶻ ≤ e^0.6 < e¹ < 3. Take **M = 3**.
3. **Bound for degree n:** 3 · 0.6ⁿ⁺¹ / (n + 1)!.
4. **Test values of n.**

| n | Bound 3 · 0.6ⁿ⁺¹ / (n + 1)! | Less than 0.001? |
|---|---|---|
| 3 | 3(0.1296)/24 = 0.0162 | No |
| 4 | 3(0.07776)/120 ≈ 0.00194 | No |
| 5 | 3(0.046656)/720 ≈ 0.000194 | Yes |

5. **Conclusion.** The Lagrange bound guarantees the accuracy for **n = 5**, so use P₅(0.6) ≈ 1.822048.

**A subtle point.** The actual error of P₄(0.6) is about 0.000719, which is already less than 0.001. But the bound cannot **guarantee** it: even with the tightest M = e^0.6 ≈ 1.822, the n = 4 bound is about 0.00118. The bound is a guarantee, so it is always at least as big as the true error, often bigger. Answer the question that is asked: "guaranteed by the Lagrange error bound" means n = 5.

## When M is given: communicating the comparison

Exam questions often give a derivative bound directly. **Example.** P₃ is the third-degree Taylor polynomial for f about x = 1, and |f⁽⁴⁾(x)| ≤ 6 for 1 ≤ x ≤ 1.5. Show that |f(1.5) − P₃(1.5)| < 0.02.

- Lagrange: |f(1.5) − P₃(1.5)| ≤ 6 · (0.5)⁴ / 4! = 6(0.0625)/24 = **0.015625**.
- Comparison sentence: **0.015625 < 0.02**, so |f(1.5) − P₃(1.5)| < 0.02.

Both lines matter. Showing the bound and then stating that it is less than the target is what "show that" requires.

## The alternating series error bound as an alternative

Sometimes the Taylor polynomial is a partial sum of a series whose terms **alternate in sign, decrease in size and approach 0**. Then the error is at most the size of the **first omitted term** (Topic 10.10), and the sign of that term tells you whether the estimate is too high or too low.

**Example: sin 0.4 with P₃(x) = x − x³/6.**

- The Maclaurin series for sin x is x − x³/3! + x⁵/5! − … (Topic 10.14 shows it equals sin x). At x = 0.4 the terms alternate, shrink and tend to 0.
- **Alternating series bound:** the first omitted term is 0.4⁵/120 ≈ 0.0000853. It is positive, so P₃(0.4) ≈ 0.389333 is an **underestimate**.
- **Lagrange with n = 3:** |f⁽⁴⁾(z)| = |sin z| ≤ 1, giving 0.4⁴/24 ≈ 0.00107. That is valid but weaker.
- **Lagrange with n = 4:** the x⁴ coefficient of sin x is 0, so P₃ = P₄. Then |f⁽⁵⁾(z)| = |cos z| ≤ 1 gives 0.4⁵/120 ≈ 0.0000853, the same as the alternating bound.
- *Calculator check (where allowed):* sin 0.4 ≈ 0.389418, actual error ≈ 0.0000850. Both bounds hold.

**When you cannot use the alternating bound.** For eˣ at x = 0.6, every term 0.6ᵏ/k! is positive: nothing alternates, so use Lagrange. Always state the conditions (alternating, decreasing in size, limit 0) if you use the alternating bound.

## Common misconceptions

- **Using the wrong derivative.** For Pₙ you need f⁽ⁿ⁺¹⁾, not f⁽ⁿ⁾.
- **Using n! instead of (n + 1)!**, or |x − a|ⁿ instead of |x − a|ⁿ⁺¹.
- **Taking M at the centre without checking.** If |f⁽ⁿ⁺¹⁾| is largest at the other end of the interval, the value at a is too small and the "bound" may be false.
- **Taking M at x only.** M must cover every z between a and x.
- **Thinking the bound is the actual error.** It is an upper limit. The true error is usually smaller.
- **Leaving out the comparison.** "Show the error is less than 0.02" needs the number **and** the sentence "which is less than 0.02".
- **Using the alternating series bound on non-alternating terms**, or without checking that the terms decrease.
- **Forgetting the absolute values.** The bound limits the size of the error in either direction.

## Where this leads

So far each estimate uses a polynomial. [Topic 10.13, radius and interval of convergence of power series](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/), asks what happens when the polynomial goes on forever: for which x does the series converge? Topic 10.14 then writes full Taylor and Maclaurin series. See the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-checklist/) to consolidate.
