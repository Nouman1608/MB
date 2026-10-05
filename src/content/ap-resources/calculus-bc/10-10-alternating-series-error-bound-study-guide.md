---
resourceId: "mb-ap-calcbc-10.10-study-guide"
title: "Alternating Series Error Bound: Study Guide (Calculus BC 10.10)"
description: "Learn why a partial sum of a convergent alternating series is within one term of the true sum, how to find how many terms you need, and how to tell an overestimate from an underestimate."
course: "calculus-bc"
unit: 10
topics: ["10.10"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Partial sums and the meaning of a convergent series (Topic 10.1)"
  - "The alternating series test and its conditions (Topic 10.7)"
  - "Absolute and conditional convergence (Topic 10.9)"
prerequisiteResources: ["mb-ap-calcbc-10.9-study-guide"]
learningObjectives:
  - "State the alternating series error bound and the conditions it needs"
  - "Bound the error when a partial sum is used to approximate the sum of an alternating series"
  - "Find how many terms are needed to guarantee an error below a given tolerance"
  - "Decide whether a partial sum is an overestimate or an underestimate, and give an interval that must contain the sum"
  - "Explain why the bound works, using the way the partial sums move back and forth around the sum"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Error-bound questions appear with and without a calculator. Keep fractions exact where you can; when you use decimals, keep at least 6 decimal places in partial sums and round only the final answer."
related: ["mb-ap-calcbc-10.10-revision-notes", "mb-ap-calcbc-10.10-practice", "mb-ap-calcbc-10.10-checklist"]
next: "mb-ap-calcbc-10.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "If Σ (−1)ⁿ⁺¹ aₙ meets the conditions of the alternating series test, then |S − Sₙ| ≤ aₙ₊₁: the error is at most the first term you left out."
  - "Check the conditions first: terms positive in size, decreasing and approaching 0."
  - "The sum S lies between two consecutive partial sums Sₙ and Sₙ₊₁."
  - "The error has the same sign as the first omitted term, which tells you whether Sₙ is too big or too small."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. The alternating series error bound is BC-only content."
  - question: "Is the bound the actual error?"
    answer: "No. It is a guaranteed maximum. The actual error is usually smaller, often around half the bound."
  - question: "Can I use this bound for any series?"
    answer: "Only for an alternating series whose term sizes decrease to 0, which is exactly the setting of the alternating series test. For other approximations, such as many Taylor polynomials, you need a different tool (the Lagrange error bound, Topic 10.12)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** The alternating series error bound is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Partial sums Sₙ and the sum S of a series | 10.1 | The error is the gap between Sₙ and S |
| Alternating series test | 10.7 | Its three conditions are exactly what the error bound needs |
| Absolute and conditional convergence | 10.9 | Many series you approximate here converge only conditionally |

Notation on this page: for Σ (−1)ⁿ⁺¹ aₙ with every aₙ > 0, **aₙ** is the **size** of the nth term, **Sₙ** = a₁ − a₂ + a₃ − … ± aₙ is the nth partial sum, and **S** is the sum of the series. The **error** of the approximation S ≈ Sₙ is S − Sₙ. Revisit any topic from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## The problem: we know it converges, but to what?

The alternating series test (Topic 10.7) tells you that a series such as 1 − 1/4 + 1/9 − 1/16 + … converges. It does not tell you the sum. In practice you add up a finite number of terms and stop. The question is: **how far can the partial sum be from the true sum?**

For most series this is hard to answer. For an alternating series that passes the alternating series test, the answer is short.

## The alternating series error bound

> **If** Σ (−1)ⁿ⁺¹ aₙ is alternating, the sizes aₙ are **decreasing**, and **aₙ → 0**, so that the series converges to S by the alternating series test, **then**
>
> **|S − Sₙ| ≤ aₙ₊₁**

In words: **the error is no bigger than the size of the first term you left out.**

Two extra facts come from the same reasoning:

- **S lies between Sₙ and Sₙ₊₁** for every n.
- **The error S − Sₙ has the same sign as the first omitted term.** If the next term would be added, Sₙ is too small (an underestimate). If the next term would be subtracted, Sₙ is too big (an overestimate).

The same bound holds for a series written as Σ (−1)ⁿ aₙ, or one that starts at n = 0. Always use **the first term not included in your partial sum**.

## Why it works: the partial sums zigzag

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="zig1010-title zig1010-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="zig1010-title">Partial sums of 1 − 1/4 + 1/9 − 1/16 + … zigzag around the sum</title>
<desc id="zig1010-desc">Graph of partial sum S sub n against n for n from 1 to 8. The points are 1, 0.75, 0.861, 0.799, 0.839, 0.811, 0.831 and 0.816. They are joined by line segments that go down, up, down, up, so odd partial sums sit above and even partial sums sit below a dashed horizontal line at the sum, about 0.8225. A bracket at n = 3 shows the gap from S sub 3 = 0.861 down to S sub 4 = 0.799, labelled as the size of the fourth term, 1 over 16. The sum lies inside this bracket. Odd partial sums are drawn as filled circles and even partial sums as open squares.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<line x1="60" y1="300" x2="540" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="300" x2="60" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="56" y1="260" x2="64" y2="260"/><line x1="56" y1="220" x2="64" y2="220"/><line x1="56" y1="180" x2="64" y2="180"/><line x1="56" y1="140" x2="64" y2="140"/><line x1="56" y1="100" x2="64" y2="100"/><line x1="56" y1="60" x2="64" y2="60"/>
<line x1="90" y1="296" x2="90" y2="304"/><line x1="150" y1="296" x2="150" y2="304"/><line x1="210" y1="296" x2="210" y2="304"/><line x1="270" y1="296" x2="270" y2="304"/><line x1="330" y1="296" x2="330" y2="304"/><line x1="390" y1="296" x2="390" y2="304"/><line x1="450" y1="296" x2="450" y2="304"/><line x1="510" y1="296" x2="510" y2="304"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="304">0.70</text><text x="52" y="264">0.75</text><text x="52" y="224">0.80</text><text x="52" y="184">0.85</text><text x="52" y="144">0.90</text><text x="52" y="104">0.95</text><text x="52" y="64">1.00</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="90" y="318">1</text><text x="150" y="318">2</text><text x="210" y="318">3</text><text x="270" y="318">4</text><text x="330" y="318">5</text><text x="390" y="318">6</text><text x="450" y="318">7</text><text x="510" y="318">8</text>
<text x="300" y="336" font-size="13">n (number of terms added)</text>
</g>
<text x="16" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 16 170)">partial sum Sₙ</text>
<line x1="60" y1="202" x2="540" y2="202" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<text x="536" y="196" font-size="12" fill="#1d2b44" text-anchor="end">S = π²/12 ≈ 0.8225</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.5" points="90,60 150,260 210,171.1 270,221.1 330,189.1 390,211.3 450,195 510,207.5"/>
<g fill="#1d2b44">
<circle cx="90" cy="60" r="5"/><circle cx="210" cy="171.1" r="5"/><circle cx="330" cy="189.1" r="5"/><circle cx="450" cy="195" r="5"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<rect x="145" y="255" width="10" height="10"/><rect x="265" y="216.1" width="10" height="10"/><rect x="385" y="206.3" width="10" height="10"/><rect x="505" y="202.5" width="10" height="10"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<path d="M228 171.1 L236 171.1 L236 221.1 L228 221.1"/>
</g>
<text x="242" y="150" font-size="12" fill="#1d2b44">bracket: a₄ = 1/16 = 0.0625</text>
<text x="242" y="166" font-size="12" fill="#1d2b44">S lies between S₃ and S₄</text>
<text x="100" y="56" font-size="12" fill="#1d2b44">S₁ = 1</text>
<g font-size="12" fill="#1d2b44">
<circle cx="380" cy="64" r="5"/><text x="392" y="68">odd n: above S</text>
<rect x="375" y="79" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="392" y="88">even n: below S</text>
</g>
</svg>
<figcaption>Figure 1. Partial sums of 1 − 1/4 + 1/9 − 1/16 + … . Each new term overshoots the sum, but by less than the last one, so the partial sums zigzag in to S. The sum is always trapped between two consecutive partial sums, so the gap from Sₙ to S is less than the gap from Sₙ to Sₙ₊₁, which is aₙ₊₁.</figcaption>
</figure>

Follow the picture. You start at S₁ = 1. Subtracting a₂ = 1/4 overshoots S, down to 0.75. Adding a₃ = 1/9 overshoots back up, but by less, because a₃ < a₂. Each step is smaller than the one before, so the partial sums zigzag in on S from both sides. **S is always between two consecutive partial sums.** So the distance from Sₙ to S is at most the distance from Sₙ to Sₙ₊₁, which is exactly aₙ₊₁.

**An algebraic version.** After Sₙ, the rest of the series (the **tail**) is ±(aₙ₊₁ − aₙ₊₂ + aₙ₊₃ − aₙ₊₄ + …). Call the bracket T.

- Group it as (aₙ₊₁ − aₙ₊₂) + (aₙ₊₃ − aₙ₊₄) + … . Every bracket is ≥ 0 because the terms decrease, so **T ≥ 0**.
- Group it as aₙ₊₁ − (aₙ₊₂ − aₙ₊₃) − (aₙ₊₄ − aₙ₊₅) − … . Every bracket subtracted is ≥ 0, so **T ≤ aₙ₊₁**.

So 0 ≤ T ≤ aₙ₊₁, which gives |S − Sₙ| ≤ aₙ₊₁, and the sign of S − Sₙ is the sign in front of aₙ₊₁. Notice where the conditions were used: decreasing terms made each bracket non-negative, and aₙ → 0 made the series converge in the first place.

In Figure 1 the bound is generous: the actual error |S − S₃| ≈ 0.0386 is well below a₄ = 0.0625.

## Worked example 1: bounding the error of a given partial sum

**Question.** Let S = Σ from n = 1 to ∞ of (−1)ⁿ⁺¹/(n · 2ⁿ).
(a) Show that the series satisfies the conditions of the alternating series test.
(b) Find S₄ exactly.
(c) Show that S₄ differs from S by less than 0.01.
(d) Is S₄ an overestimate or an underestimate? Give an interval that must contain S.

**(a) Conditions.** aₙ = 1/(n · 2ⁿ) > 0. The signs alternate because of (−1)ⁿ⁺¹. The denominator n · 2ⁿ increases with n (both factors increase), so aₙ is decreasing. The denominator → ∞, so aₙ → 0. All conditions hold, so the series converges and the error bound applies.

**(b) The partial sum.** The first four terms are 1/2, −1/8, 1/24 and −1/64.
S₄ = 1/2 − 1/8 + 1/24 − 1/64 = 96/192 − 24/192 + 8/192 − 3/192 = **77/192 ≈ 0.401042**.

**(c) The bound.** The first omitted term is the 5th, of size a₅ = 1/(5 · 2⁵) = **1/160 = 0.00625**.
By the alternating series error bound, |S − S₄| ≤ 1/160 = 0.00625 < 0.01. ✓

**(d) Direction.** The 5th term has sign (−1)⁶ = +, so it would be **added**. S₄ stopped just before an addition, so **S₄ is an underestimate**.
Interval: S₄ ≤ S ≤ S₄ + a₅, that is **0.401042 ≤ S ≤ 0.407292** (to 6 decimal places).

**Check.** You will see in Topic 10.14 that this series equals ln(3/2) ≈ 0.405465. The actual error is about 0.004423, below the bound of 0.00625, and S is inside the interval. ✓

**What to write in (c).** State the bound **and** compare it with the tolerance: "By the alternating series error bound, |S − S₄| ≤ a₅ = 1/160 = 0.00625, which is less than 0.01." The comparison with 0.01 is the part students often leave out.

## Worked example 2: how many terms do you need?

**Question.** Let S = Σ from n = 1 to ∞ of (−1)ⁿ⁺¹/(n³ + 1). What is the smallest number of terms that guarantees, by the alternating series error bound, that Sₙ is within 0.001 of S? Find that partial sum and an interval for S.

1. **Conditions.** aₙ = 1/(n³ + 1) > 0; n³ + 1 increases, so aₙ decreases; n³ + 1 → ∞, so aₙ → 0. The signs alternate. ✓
2. **Set up the inequality.** You need aₙ₊₁ < 0.001, that is 1/((n + 1)³ + 1) < 0.001, so (n + 1)³ + 1 > 1000.
3. **Solve.** 9³ + 1 = 730 (too small) and 10³ + 1 = 1001 > 1000. So n + 1 = 10, giving **n = 9**.
   - Check n = 8: the bound is a₉ = 1/730 ≈ 0.00137, which is **not** below 0.001.
   - Check n = 9: the bound is a₁₀ = 1/1001 ≈ 0.000999, which **is** below 0.001. ✓
4. **Compute S₉** (calculator allowed for the arithmetic): S₉ = 1/2 − 1/9 + 1/28 − 1/65 + 1/126 − 1/217 + 1/344 − 1/513 + 1/730 **≈ 0.414874**.
5. **Direction and interval.** The 10th term has sign (−1)¹¹ = −, so S₉ is an **overestimate**: S₉ − a₁₀ ≤ S ≤ S₉, that is **0.413875 ≤ S ≤ 0.414874**.

**Answer.** Nine terms are enough; S ≈ 0.4149 with error less than 0.001.

**Two cautions.**
- The question asks what the **bound guarantees**. The actual error of S₈ might already be below 0.001, but the bound cannot promise it, so 8 is not the answer.
- Count carefully when a series starts at n = 0. Then "the first n + 1 terms" are indexed 0 to n, and the bound is the term with index n + 1.

## When the bound does not apply

- **The terms do not decrease.** The zigzag argument needs each step to be smaller than the last. If the sizes decrease only from some index onwards, the bound can be used only for partial sums that stop at or after that index, because the tail must satisfy the conditions.
- **The series is not alternating.** For a series such as Σ cos(n)/n² the partial sums do not zigzag, and this bound says nothing.
- **Taylor approximations.** When a Taylor series evaluated at a point gives an alternating series that meets the conditions, this bound works (Topic 10.11 onwards). When it does not, you need the Lagrange error bound (Topic 10.12).

## Common misconceptions

- **Using aₙ instead of aₙ₊₁.** The bound is the first term **not** included. For S₄ it is a₅.
- **Forgetting the conditions.** Write them down: alternating, decreasing sizes, limit 0. Without them the bound is not justified.
- **Treating the bound as the actual error.** The bound is a maximum. Saying "the error is 0.00625" is wrong; "the error is at most 0.00625" is right.
- **Not comparing with the tolerance.** "Error ≤ 1/160" does not answer "show the error is less than 0.01" until you say 1/160 < 0.01.
- **Confusing the number of terms with the index of the bound.** If you need aₙ₊₁ < 0.001 and find n + 1 = 10, the answer is n = 9 terms, not 10.
- **Mixing up over- and underestimates.** Look at the sign of the first omitted term: + means Sₙ is too small; − means Sₙ is too big.
- **Rounding partial sums too early.** Rounding each term to 2 decimal places can create an error bigger than the bound you are trying to show.

## Where this leads

Next, Topic 10.11 builds Taylor polynomials, and an alternating Taylor series lets you reuse this bound to say how good a polynomial approximation is. Topic 10.12 adds the Lagrange error bound for cases this one cannot handle. Continue with [Topic 10.11, Finding Taylor Polynomial Approximations of Functions](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-study-guide/), or see the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-checklist/) to consolidate.
