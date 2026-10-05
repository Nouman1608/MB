---
resourceId: "mb-ap-calcbc-10.13-study-guide"
title: "Radius and Interval of Convergence of Power Series: Study Guide (Calculus BC 10.13)"
description: "Find where a power series converges: use the ratio test for the radius, test both endpoints for the interval, and see how term-by-term calculus keeps the radius."
course: "calculus-bc"
unit: 10
topics: ["10.13"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Geometric series (Topic 10.2) and the nth term test (Topic 10.3)"
  - "Harmonic series and p-series (Topic 10.5)"
  - "The alternating series test (Topic 10.7) and the ratio test (Topic 10.8)"
  - "Absolute and conditional convergence (Topic 10.9)"
  - "Taylor polynomials (Topic 10.11)"
prerequisiteResources: ["mb-ap-calcbc-10.12-study-guide"]
learningObjectives:
  - "Recognise a power series, its centre and its coefficients"
  - "Explain why a power series converges only at its centre, on an interval around the centre, or for every real x"
  - "Use the ratio test to find the radius of convergence of a power series"
  - "Test both endpoints with a suitable series test to state the interval of convergence"
  - "Link the coefficients of a power series with positive radius to the derivatives of the function it converges to"
  - "State the radius and decide the interval of a series made by differentiating or integrating term by term"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Radius and interval work is done by hand: limits, inequalities and series tests. A calculator does not decide whether a series converges at an endpoint."
related: ["mb-ap-calcbc-10.13-revision-notes", "mb-ap-calcbc-10.13-practice", "mb-ap-calcbc-10.13-checklist"]
next: "mb-ap-calcbc-10.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "A power series Σ aₙ(x − c)ⁿ converges only at x = c, or on an interval centred at c, or for every real x."
  - "Use the ratio test on the whole term: the series converges when |x − c| < R, the radius of convergence."
  - "The ratio test says nothing at x = c ± R. Test each endpoint separately with another test."
  - "Differentiating or integrating term by term keeps the radius, but the endpoints can change, so test them again."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Power series are BC-only content. AB students can skip this page."
  - question: "Is the radius of convergence the length of the interval?"
    answer: "No. The radius is the distance from the centre to each endpoint. The interval is 2R long."
  - question: "Why can't I use the ratio test at the endpoints?"
    answer: "At x = c ± R the ratio test limit is exactly 1, and a limit of 1 gives no conclusion. Use the p-series test, the alternating series test, the nth term test or a comparison instead."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Power series are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic uses almost every series test from earlier in Unit 10. If any is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first. The previous topic, the [Lagrange error bound](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-study-guide/), finished the work on Taylor polynomials.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Geometric series | 10.2 | The simplest power series; a model for everything else |
| nth term test | 10.3 | Showing divergence at an endpoint |
| Harmonic series and p-series | 10.5 | Deciding endpoints such as Σ 1/n or Σ 1/n² |
| Alternating series test | 10.7 | Deciding endpoints where the signs alternate |
| Ratio test | 10.8 | Finding the radius of convergence |
| Absolute and conditional convergence | 10.9 | Describing how the series converges at an endpoint |
| Taylor polynomials | 10.11 | Linking coefficients to derivatives |

Notation on this page: **Σ from n = 0 to ∞ of uₙ** is the infinite series u₀ + u₁ + u₂ + … . We use **c** for the centre of a power series and **R** for the radius. The course description writes the centre as r; it means the same thing.

## What a power series is

A **power series centred at c** is a series of the form

> **Σ from n = 0 to ∞ of aₙ(x − c)ⁿ = a₀ + a₁(x − c) + a₂(x − c)² + a₃(x − c)³ + …**

Here n counts up from 0 through the whole numbers, the **coefficients** a₀, a₁, a₂, … are real numbers, and c is a fixed real number. By convention (x − c)⁰ = 1, even when x = c.

A power series looks like a polynomial that never ends. The difference is important: a polynomial gives a number for every x, but an infinite sum might not. For each value of x you substitute, you get an ordinary series of numbers, and that series either converges or diverges.

**Example.** For Σ from n = 0 to ∞ of xⁿ (centre 0, every coefficient 1):

- at x = ½ you get 1 + ½ + ¼ + …, a geometric series with sum 2;
- at x = 3 you get 1 + 3 + 9 + …, which diverges.

So the question for this topic is: **for which x does the series converge?**

One value is always safe. At x = c every term after the first is 0, so the series converges to a₀.

## Only three things can happen

For any power series centred at c, exactly one of these is true:

1. It converges **only at x = c**. We say R = 0.
2. It converges for **every real x**. We say R = ∞.
3. There is a positive number R, the **radius of convergence**, such that the series converges (absolutely) when |x − c| < R and diverges when |x − c| > R.

In case 3 the open interval (c − R, c + R) is always inside the set where the series converges. The two **endpoints**, x = c − R and x = c + R, are not decided by R. Each one might converge or diverge, so there are four possible **intervals of convergence**: (c − R, c + R), [c − R, c + R), (c − R, c + R] and [c − R, c + R].

So the set of x where a power series converges is never scattered. It is a single point, a single interval centred at c, or the whole real line.

<figure>
<svg viewBox="0 0 560 280" role="img" aria-labelledby="roc-title roc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="roc-title">Where a power series converges: the general picture and one example</title>
<desc id="roc-desc">Two number lines. The top line shows the general case. The centre c is in the middle. A thick segment runs from c minus R to c plus R and is labelled converges absolutely. Beyond these points the line is dashed and labelled diverges. Each endpoint has a question mark and the note test separately. A double arrow from c to c plus R is labelled R. The bottom line shows the example series sum of (x + 1) to the n over n times 4 to the n, with x from minus 6 to 4. The thick segment runs from minus 5 to 3 around the centre minus 1. There is a filled dot at minus 5, labelled converges, and an open dot at 3, labelled diverges, so the interval of convergence is from minus 5 included to 3 excluded.</desc>
<rect x="0" y="0" width="560" height="280" fill="#ffffff"/>
<text x="20" y="22" font-size="13" fill="#1d2b44" font-weight="bold">General case: centre c, radius R</text>
<line x1="30" y1="80" x2="140" y2="80" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="420" y1="80" x2="530" y2="80" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="140" y1="80" x2="420" y2="80" stroke="#1d2b44" stroke-width="6"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="140" y1="72" x2="140" y2="88"/><line x1="280" y1="72" x2="280" y2="88"/><line x1="420" y1="72" x2="420" y2="88"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="104">c − R</text><text x="280" y="104">c</text><text x="420" y="104">c + R</text>
<text x="280" y="62">converges absolutely</text>
<text x="80" y="62">diverges</text><text x="485" y="62">diverges</text>
<text x="140" y="52" font-size="16" font-weight="bold">?</text><text x="420" y="52" font-size="16" font-weight="bold">?</text>
<text x="140" y="124">test separately</text><text x="420" y="124">test separately</text>
</g>
<line x1="286" y1="138" x2="414" y2="138" stroke="#1d2b44" stroke-width="1.2"/>
<polygon points="280,138 290,134 290,142" fill="#1d2b44"/><polygon points="420,138 410,134 410,142" fill="#1d2b44"/>
<text x="350" y="134" font-size="12" fill="#1d2b44" text-anchor="middle">R</text>
<text x="20" y="172" font-size="13" fill="#1d2b44" font-weight="bold">Example: Σ (x + 1)ⁿ / (n · 4ⁿ), interval [−5, 3)</text>
<line x1="30" y1="225" x2="530" y2="225" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="80" y1="225" x2="480" y2="225" stroke="#1d2b44" stroke-width="6"/>
<g stroke="#1d2b44" stroke-width="1"><line x1="30" y1="219" x2="30" y2="231"/><line x1="130" y1="219" x2="130" y2="231"/><line x1="180" y1="219" x2="180" y2="231"/><line x1="230" y1="219" x2="230" y2="231"/><line x1="280" y1="219" x2="280" y2="231"/><line x1="330" y1="219" x2="330" y2="231"/><line x1="380" y1="219" x2="380" y2="231"/><line x1="430" y1="219" x2="430" y2="231"/><line x1="530" y1="219" x2="530" y2="231"/></g>
<circle cx="80" cy="225" r="7" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<circle cx="480" cy="225" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="30" y="250">−6</text><text x="80" y="250">−5</text><text x="130" y="250">−4</text><text x="180" y="250">−3</text><text x="230" y="250">−2</text><text x="280" y="250">−1</text><text x="330" y="250">0</text><text x="380" y="250">1</text><text x="430" y="250">2</text><text x="480" y="250">3</text><text x="530" y="250">4</text>
<text x="80" y="203">filled dot: converges</text><text x="480" y="203">open dot: diverges</text>
<text x="280" y="270">centre −1, radius 4</text>
</g>
</svg>
<figcaption>Figure 1. Top: inside the radius the series converges absolutely, outside it diverges, and each endpoint needs its own test. Bottom: the result of Worked example 1, where the left endpoint is included (filled dot) and the right endpoint is not (open dot).</figcaption>
</figure>

**A useful consequence.** Suppose a series centred at 1 converges at x = 4 and diverges at x = −5. Convergence at distance 3 from the centre means R ≥ 3. Divergence at distance 6 means R ≤ 6. So the series must converge at x = 3.5 (distance 2.5) and must diverge at x = 8 (distance 7), but x = −2 and x = 6 (distances 3 and 5) could go either way.

## Finding the radius with the ratio test

The ratio test (Topic 10.8) works well because consecutive terms of a power series share almost everything. Let uₙ = aₙ(x − c)ⁿ be the **whole term**, including the x part.

1. Form |uₙ₊₁ / uₙ| and simplify. The powers of (x − c) cancel down to a single |x − c|.
2. Take the limit as n → ∞, keeping x fixed. Call it L. It will be |x − c| times a number, or 0, or ∞.
3. The series converges when L < 1 and diverges when L > 1. Solve L < 1 for |x − c|.
4. Read off R from **|x − c| < R**.

The three cases match the three outcomes above:

- **L = (number) · |x − c|.** Then L < 1 gives |x − c| < R for a positive R.
- **L = 0 for every x.** Then the series converges everywhere: R = ∞. Example: for Σ xⁿ/n!, |uₙ₊₁/uₙ| = |x|/(n + 1) → 0.
- **L = ∞ for every x ≠ c.** Then the series converges only at the centre: R = 0. Example: for Σ n! xⁿ, |uₙ₊₁/uₙ| = (n + 1)|x| → ∞ when x ≠ 0.

**Only even powers?** If the series is Σ x^(2n)/9ⁿ, the ratio is |x|²/9. Then |x|²/9 < 1 gives |x| < 3, so R = 3. Work with the whole term and you will not go wrong.

## Worked example 1: a radius, then the endpoints

**Question.** Find the radius and the interval of convergence of **Σ from n = 1 to ∞ of (x + 1)ⁿ / (n · 4ⁿ)**.

1. **Identify the centre.** x + 1 = x − (−1), so c = −1.
2. **Ratio of consecutive terms.**
   |uₙ₊₁ / uₙ| = |(x + 1)ⁿ⁺¹ / ((n + 1) · 4ⁿ⁺¹)| · |(n · 4ⁿ) / (x + 1)ⁿ| = (|x + 1| / 4) · n/(n + 1).
3. **Limit.** n/(n + 1) → 1, so L = |x + 1| / 4.
4. **Solve L < 1.** |x + 1| < 4, so **R = 4**. The series converges on −5 < x < 3 and diverges when |x + 1| > 4.
5. **Right endpoint, x = 3.** Then x + 1 = 4 and the series is Σ 4ⁿ/(n · 4ⁿ) = **Σ 1/n**, the harmonic series. It **diverges**.
6. **Left endpoint, x = −5.** Then x + 1 = −4 and the series is Σ (−4)ⁿ/(n · 4ⁿ) = **Σ (−1)ⁿ/n**. The terms alternate in sign, 1/n decreases and 1/n → 0, so by the alternating series test it **converges**. (Only conditionally: the absolute values give the harmonic series.)

**Answer.** Radius **4**. Interval of convergence **[−5, 3)**.

**Checks.**
- *Centre and symmetry:* −5 and 3 are both 4 units from −1. ✓
- *A point inside:* at x = 0 the series is Σ (1/4)ⁿ/n. Its terms are smaller than those of the convergent geometric series Σ (1/4)ⁿ, so it converges, as expected for a point inside.
- *Notation:* a square bracket at −5 (included), a round bracket at 3 (excluded).

## Worked example 2: when x has a coefficient

**Question.** Find the radius and the interval of convergence of **Σ from n = 1 to ∞ of (2x − 5)ⁿ / n²**.

1. **Ratio.** |uₙ₊₁ / uₙ| = |2x − 5| · n²/(n + 1)².
2. **Limit.** n²/(n + 1)² → 1, so L = |2x − 5|.
3. **Solve L < 1.** |2x − 5| < 1. This is **not** yet in the form |x − c| < R. Factor out the 2:
   |2x − 5| = 2|x − 5/2|, so 2|x − 5/2| < 1, which gives **|x − 5/2| < 1/2**.
4. **Read off.** Centre 5/2, **R = 1/2**. The open interval is (2, 3).
5. **Right endpoint, x = 3.** 2x − 5 = 1, so the series is **Σ 1/n²**, a p-series with p = 2 > 1. It **converges**.
6. **Left endpoint, x = 2.** 2x − 5 = −1, so the series is **Σ (−1)ⁿ/n²**. The series of absolute values is Σ 1/n², which converges, so this one **converges absolutely**.

**Answer.** Radius **1/2**. Interval of convergence **[2, 3]**.

**Why the factoring matters.** A common slip is to stop at |2x − 5| < 1 and say R = 1. But the interval (2, 3) has length 1, so the radius is half of that. Another way to see it: (2x − 5)ⁿ = 2ⁿ(x − 5/2)ⁿ, so the series is Σ [2ⁿ/n²](x − 5/2)ⁿ, a power series centred at 5/2.

**Check.** Both endpoints are 1/2 from 5/2. ✓

## Endpoint toolkit

At an endpoint, x is a number, so you have an ordinary numerical series. Choose the test by its shape.

| Endpoint series looks like | Test to use | Typical outcome |
|---|---|---|
| Σ 1/nᵖ | p-series | converges if p > 1, diverges if p ≤ 1 |
| Σ (−1)ⁿ bₙ with bₙ decreasing to 0 | alternating series test | converges |
| Terms that do not tend to 0 | nth term test | diverges |
| Σ rⁿ | geometric series | converges only if \|r\| < 1 |
| Close to a known series | comparison or limit comparison | same as the known series |

The ratio test is missing from the table on purpose. At an endpoint its limit is exactly 1, which tells you nothing.

## Power series and Taylor series

When a power series has a positive radius, its sum is a function on the open interval (c − R, c + R):

f(x) = a₀ + a₁(x − c) + a₂(x − c)² + … for |x − c| < R.

A key fact is that this power series **is the Taylor series for f about c**. In other words, the coefficients are tied to the derivatives:

> **aₙ = f⁽ⁿ⁾(c) / n!**, so **f⁽ⁿ⁾(c) = n! · aₙ**

You built Taylor polynomials from derivatives in Topic 10.11. Here you can run the idea backwards: read a coefficient and get a derivative.

**Example.** Let h(x) = Σ from n = 0 to ∞ of xⁿ/(n + 2). The ratio test gives |x| · (n + 2)/(n + 3) → |x|, so R = 1 and h is defined for |x| < 1. The coefficient of x⁴ is a₄ = 1/6, so h⁽⁴⁾(0) = 4! · 1/6 = **4**. You do not need a formula for h to find it.

**Example.** The geometric series 1/(1 − x) = Σ xⁿ for |x| < 1 has every coefficient equal to 1. Differentiating 1/(1 − x) repeatedly gives 1, 1, 2, 6, 24, … at x = 0, which is n!. Then n!/n! = 1 for every n, matching the coefficients. ✓

Topic 10.14 uses this link to build Taylor series directly.

## Differentiating and integrating term by term

Inside its open interval, a power series can be differentiated or integrated one term at a time, like a polynomial. The new series has **the same radius of convergence**. But the endpoints can behave differently, so you must test them again.

**Example.** Let f(x) = Σ from n = 1 to ∞ of xⁿ/n².

| Series | Radius | x = 1 | x = −1 | Interval |
|---|---|---|---|---|
| f(x) = Σ xⁿ/n² | 1 | Σ 1/n² converges | Σ (−1)ⁿ/n² converges | [−1, 1] |
| f′(x) = Σ xⁿ⁻¹/n | 1 | Σ 1/n diverges | Σ (−1)ⁿ⁻¹/n converges | [−1, 1) |
| f″(x) = Σ (n − 1)xⁿ⁻²/n | 1 | terms → 1, diverges | terms do not → 0, diverges | (−1, 1) |

Each derivative multiplies the coefficient by n, which makes the endpoint series larger, so endpoints can be **lost**. Integrating divides by n + 1, so endpoints can be **gained**. The radius never changes.

## Common misconceptions

- **"The radius is the length of the interval."** The interval (c − R, c + R) has length 2R.
- **Reading R straight from |2x − 5| < 1.** Factor first: |x − 5/2| < 1/2 gives R = 1/2, not 1.
- **Using the ratio test at the endpoints.** The limit is 1 there, so the test is inconclusive. Use a different test.
- **Forgetting to test the endpoints at all.** The radius only gives the open interval. The course expects both endpoints decided, with a reason.
- **Getting the centre's sign wrong.** (x + 1)ⁿ is centred at −1, not 1.
- **Leaving x out of the ratio.** If you take the limit of |aₙ₊₁/aₙ| on the coefficients alone, the result is 1/R, not R. Working with the whole term avoids this.
- **"Conditional convergence means divergence."** Σ (−1)ⁿ/n converges, so x = −5 belongs in the interval in Worked example 1.
- **Assuming the endpoints carry over after differentiating or integrating.** Only the radius is guaranteed to stay the same.

## Where this leads

The next topic, [Finding Taylor or Maclaurin series for a function](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/), builds full series for eˣ, sin x, cos x and 1/(1 − x), and you will state where each one converges using the methods on this page. Topic 10.15 then makes new series by substitution and term-by-term calculus, where the radius rule above saves time. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-checklist/) to consolidate.
