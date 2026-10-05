---
resourceId: "mb-ap-calcbc-10.8-study-guide"
title: "Ratio Test for Convergence: Study Guide (Calculus BC 10.8)"
description: "Learn the ratio test: where it comes from, how to simplify ratios with powers and factorials, what L < 1, L > 1 and L = 1 mean, and when to pick another test."
course: "calculus-bc"
unit: 10
topics: ["10.8"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Geometric series and when they converge (Topic 10.2)"
  - "The nth term test for divergence (Topic 10.3)"
  - "Harmonic series and p-series (Topic 10.5)"
  - "Comparison and limit comparison tests (Topic 10.6)"
  - "Limits at infinity of rational expressions (Topic 1.15)"
prerequisiteResources: ["mb-ap-calcbc-10.7-study-guide"]
learningObjectives:
  - "State the ratio test and the meaning of each possible value of the limit L"
  - "Simplify aₙ₊₁/aₙ when the terms contain powers such as 3ⁿ and factorials such as n!"
  - "Use the ratio test to decide whether a series of numbers converges or diverges, and justify the conclusion"
  - "Recognise when the ratio test gives no conclusion and choose another test"
  - "Explain the link between the ratio test and geometric series"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Ratio-test limits are found by algebra. A calculator can list a few ratios to suggest the limit, but the justification must use the exact limit."
related: ["mb-ap-calcbc-10.8-revision-notes", "mb-ap-calcbc-10.8-practice", "mb-ap-calcbc-10.8-checklist"]
next: "mb-ap-calcbc-10.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Find L = lim |aₙ₊₁/aₙ|. If L < 1 the series converges; if L > 1 (or L = ∞) it diverges; if L = 1 the test gives no conclusion."
  - "The ratio test works best when terms contain powers like 5ⁿ or factorials like n!."
  - "Use (n + 1)! = (n + 1) · n! to cancel factorials."
  - "For terms built only from powers of n, such as 1/n² or n/(n³ + 1), L = 1 always: use a p-series or comparison test instead."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Infinite series, including the ratio test, are BC-only content."
  - question: "Why are there absolute value bars in the ratio test?"
    answer: "They let the test handle terms with any signs. When L < 1, the series of absolute values converges, which is a stronger result called absolute convergence (Topic 10.9). For series with positive terms, the bars change nothing."
  - question: "What should I do when L = 1?"
    answer: "Use a different test. Series with L = 1 can converge (Σ 1/n²) or diverge (Σ 1/n), so the ratio test says nothing about them."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** The ratio test is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Geometric series | 10.2 | The ratio test is built on them |
| nth term test | 10.3 | Explains why L > 1 means divergence |
| p-series | 10.5 | The usual fallback when L = 1 |
| Comparison tests | 10.6 | The other fallback, and the idea behind the proof |
| Limits at infinity | 1.15 | Finding L |

Notation on this page: **Σ from n = 1 to ∞ of aₙ** is the series a₁ + a₂ + a₃ + …, and **n! = 1 · 2 · 3 · … · n** (with 0! = 1). Read n! as "n factorial".

## The idea: compare each term with the one before

In a geometric series every term is the previous one times a fixed number r. For example, in Σ 5(2/3)ⁿ, each term is 2/3 of the one before. Such a series converges exactly when |r| < 1.

Most series do not have a fixed ratio. But many have a ratio that **settles down** as n grows. If, far along the series, each term is roughly 1/3 of the one before, then the tail of the series behaves like a geometric series with ratio 1/3, and it should converge. The ratio test turns that idea into a test.

## The ratio test

> **Ratio test.** For a series Σ aₙ whose terms are not zero, find
> **L = lim (n → ∞) |aₙ₊₁ / aₙ|**.
> - If **L < 1**, the series **converges** (in fact, Σ |aₙ| converges too).
> - If **L > 1**, or the ratio grows without bound (L = ∞), the series **diverges**.
> - If **L = 1**, the test gives **no conclusion**.

Why each case holds:

- **L < 1.** Pick a number r between L and 1. From some n on, every ratio |aₙ₊₁/aₙ| is below r. So from that point each |aₙ| is at most a fixed constant times rⁿ. The geometric series Σ rⁿ converges (r < 1), so by comparison Σ |aₙ| converges, and so does Σ aₙ.
- **L > 1.** From some n on, each |aₙ₊₁| is bigger than |aₙ|. The sizes grow, so aₙ cannot tend to 0. The series diverges by the nth term test.
- **L = 1.** The terms shrink (or grow) more slowly than any geometric series, so the comparison gives no information.

Other tests exist (for example the root test), but on this course you only need the ratio test alongside the tests from Topics 10.3 to 10.7.

### Algebra you will need

- **Powers:** 3ⁿ⁺¹/3ⁿ = 3, and 2²⁽ⁿ⁺¹⁾/2²ⁿ = 4.
- **Factorials:** (n + 1)! = (n + 1) · n!, so **(n + 1)!/n! = n + 1**.
- **Factorials of 2n:** (2(n + 1))! = (2n + 2)! = (2n + 2)(2n + 1) · (2n)!, so **(2n + 2)!/(2n)! = (2n + 2)(2n + 1)**.
- **Polynomials:** a ratio such as (n + 1)²/n² → 1. Any ratio of polynomials of the same degree tends to the ratio of leading coefficients.

Write aₙ₊₁/aₙ as aₙ₊₁ × (1/aₙ), group the powers together and the factorials together, then cancel.

## Worked example 1: powers of n against an exponential

**Question.** Determine whether Σ from n = 1 to ∞ of (n² + 1)/3ⁿ converges. Justify your answer.

1. **Write aₙ and aₙ₊₁.** aₙ = (n² + 1)/3ⁿ and aₙ₊₁ = ((n + 1)² + 1)/3ⁿ⁺¹ = (n² + 2n + 2)/3ⁿ⁺¹.
2. **Form the ratio.** All terms are positive, so the absolute value changes nothing:
   **aₙ₊₁/aₙ = (n² + 2n + 2)/3ⁿ⁺¹ × 3ⁿ/(n² + 1) = (n² + 2n + 2) / [3(n² + 1)]**.
3. **Find the limit.** Divide the top and bottom by n²:
   **L = lim (1 + 2/n + 2/n²) / [3(1 + 1/n²)] = 1/3**.
4. **Conclude.** L = 1/3 < 1, so **the series converges by the ratio test**.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="ratio-title ratio-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ratio-title">Ratios of consecutive terms of the series with terms (n² + 1)/3ⁿ approaching one third</title>
<desc id="ratio-desc">Graph of the ratio aₙ₊₁/aₙ against n for n = 1 to 10. The ratios, drawn as filled squares, are about 0.833, 0.667, 0.567, 0.510, 0.474, 0.450, 0.433, 0.421, 0.411 and 0.403. They fall towards a dashed horizontal line at one third, labelled L. A solid horizontal line at 1 is labelled as the cut-off: a limit below it means the series converges, and a limit above it means the series diverges. All ratios shown are below 1.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<line x1="60" y1="270" x2="545" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="280" x2="60" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="56" y1="215" x2="64" y2="215"/><line x1="56" y1="160" x2="64" y2="160"/><line x1="56" y1="105" x2="64" y2="105"/><line x1="56" y1="50" x2="64" y2="50"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="274">0</text><text x="52" y="219">0.25</text><text x="52" y="164">0.5</text><text x="52" y="109">0.75</text><text x="52" y="54">1</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="288">1</text><text x="130" y="288">2</text><text x="180" y="288">3</text><text x="230" y="288">4</text><text x="280" y="288">5</text><text x="330" y="288">6</text><text x="380" y="288">7</text><text x="430" y="288">8</text><text x="480" y="288">9</text><text x="530" y="288">10</text>
<text x="300" y="312" font-size="13">n</text>
</g>
<text x="18" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 160)">ratio aₙ₊₁ / aₙ</text>
<line x1="60" y1="50" x2="545" y2="50" stroke="#1d2b44" stroke-width="2.5"/>
<text x="540" y="42" font-size="12" fill="#1d2b44" text-anchor="end">ratio = 1: the cut-off</text>
<text x="540" y="66" font-size="12" fill="#1d2b44" text-anchor="end">limit below 1 → converges</text>
<line x1="60" y1="196.7" x2="545" y2="196.7" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="540" y="216" font-size="12" fill="#1d2b44" text-anchor="end">L = 1/3</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="1" points="80,86.7 130,123.3 180,145.3 230,157.8 280,165.6 330,170.9 380,174.7 430,177.5 480,179.7 530,181.4"/>
<g fill="#1d2b44">
<rect x="75" y="81.7" width="10" height="10"/><rect x="125" y="118.3" width="10" height="10"/><rect x="175" y="140.3" width="10" height="10"/><rect x="225" y="152.8" width="10" height="10"/><rect x="275" y="160.6" width="10" height="10"/><rect x="325" y="165.9" width="10" height="10"/><rect x="375" y="169.7" width="10" height="10"/><rect x="425" y="172.5" width="10" height="10"/><rect x="475" y="174.7" width="10" height="10"/><rect x="525" y="176.4" width="10" height="10"/>
</g>
<text x="96" y="80" font-size="12" fill="#1d2b44">5/6</text>
<text x="146" y="117" font-size="12" fill="#1d2b44">2/3</text>
</svg>
<figcaption>Figure 1. Ratios of consecutive terms for Σ (n² + 1)/3ⁿ. The early ratios (5/6, 2/3, …) are well above 1/3, but they settle towards L = 1/3 (dashed line), safely below the cut-off at 1 (solid line). Only the limit matters, not the early values.</figcaption>
</figure>

**What the graph shows.** The ratio test is about the **long run**. The first few ratios are not 1/3, and that does not matter. What matters is the value they settle towards and which side of 1 it is on.

Background (not needed for the exam): this series happens to sum to 2. The ratio test does not give the sum.

## Worked example 2: factorials

**Question.** Decide whether each series converges or diverges.

**(a) Σ from n = 1 to ∞ of (2n)! / [(n!)² · 5ⁿ]**

1. **Write aₙ₊₁.** aₙ₊₁ = (2n + 2)! / [((n + 1)!)² · 5ⁿ⁺¹].
2. **Group like parts.**
   aₙ₊₁/aₙ = [(2n + 2)!/(2n)!] × [(n!)²/((n + 1)!)²] × [5ⁿ/5ⁿ⁺¹].
3. **Cancel each group.**
   - (2n + 2)!/(2n)! = (2n + 2)(2n + 1).
   - (n!)²/((n + 1)!)² = 1/(n + 1)².
   - 5ⁿ/5ⁿ⁺¹ = 1/5.
4. **Simplify.** aₙ₊₁/aₙ = (2n + 2)(2n + 1) / [5(n + 1)²] = 2(n + 1)(2n + 1) / [5(n + 1)²] = **2(2n + 1) / [5(n + 1)]**.
5. **Limit.** L = lim (4n + 2)/(5n + 5) = **4/5**.
6. **Conclude.** L = 4/5 < 1, so **the series converges by the ratio test**.

Check with numbers: a₁ = 2/5, a₂ = 6/25 and a₂/a₁ = 3/5, which matches 2(3)/(5 · 2) = 3/5 from the formula. ✓

**(b) Σ from n = 1 to ∞ of n!/10ⁿ**

1. aₙ₊₁/aₙ = [(n + 1)!/n!] × [10ⁿ/10ⁿ⁺¹] = **(n + 1)/10**.
2. As n → ∞, (n + 1)/10 → ∞. So **L = ∞**, which counts as L > 1.
3. **Conclude.** The series **diverges by the ratio test**.

**Interpretation.** The first terms of (b) are tiny (a₁₀ ≈ 0.0004), which can fool you into thinking the series converges. But once n ≥ 10, each ratio (n + 1)/10 is above 1, so every term is bigger than the one before; by n = 30, aₙ is about 265. Factorials eventually beat any exponential.

## When the ratio test fails: L = 1

Try the ratio test on two p-series:

| Series | aₙ₊₁/aₙ | L | Truth |
|---|---|---|---|
| Σ 1/n | n/(n + 1) | 1 | diverges (harmonic) |
| Σ 1/n² | n²/(n + 1)² | 1 | converges (p = 2 > 1) |

Both give L = 1, but one converges and one diverges. So **L = 1 tells you nothing**. This happens for every series whose terms are built only from powers of n, such as (3n + 1)/(n³ + 2): the ratio of two such expressions at n + 1 and n always tends to 1.

When L = 1, switch to the test that fits: a p-series, a comparison or limit comparison test, the integral test, or (for alternating signs) the alternating series test.

## Choosing the ratio test

| Terms contain … | Ratio test? | Usually better |
|---|---|---|
| n! or (2n)! | Yes, first choice | — |
| A power with n in the exponent: 3ⁿ, (0.9)ⁿ, 2²ⁿ | Yes | Geometric test, if the series is exactly geometric |
| Only powers of n (rational functions, roots) | No: L = 1 | p-series, comparison, limit comparison |
| ln n, or forms like 1/(n ln n) | Usually L = 1 | Integral or comparison tests |

## Common misconceptions

- **Flipping the ratio.** The ratio is aₙ₊₁/aₙ (next over current). Using aₙ/aₙ₊₁ gives 1/L and reverses the conclusion.
- **"L = 1 means the series diverges."** L = 1 gives no conclusion. Σ 1/n² has L = 1 and converges.
- **"L < 1 means the terms tend to 0, so that is all it shows."** L < 1 proves the whole **series** converges, not just that the terms shrink.
- **Using early ratios.** The first few ratios can be above 1 even when L < 1, and the reverse. Only the limit counts.
- **Factorial errors.** (n + 1)! is (n + 1) · n!, not n! + 1, and (2n + 2)! is not (2n)! · 2.
- **Dropping the absolute value** for terms with signs, such as (−2)ⁿ. Without the bars, the "ratio" is negative and you may compare the wrong number with 1.
- **Forgetting to conclude.** End with the value of L, its comparison with 1, and "by the ratio test".

## Where this leads

Next, Topic 10.9 uses the ratio test on Σ |aₙ| to show absolute convergence: see the [absolute and conditional convergence study guide](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/). Topic 10.13 applies the same ratio to power series, where L depends on x, to find a radius and interval of convergence. The previous topic, the [alternating series test](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/), covers one of the cases where the ratio test gives L = 1. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-checklist/) to consolidate.
