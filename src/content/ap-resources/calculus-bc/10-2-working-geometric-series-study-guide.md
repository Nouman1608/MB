---
resourceId: "mb-ap-calcbc-10.2-study-guide"
title: "Working with Geometric Series: Study Guide (Calculus BC 10.2)"
description: "Recognise a geometric series, derive its partial-sum formula, and use |r| < 1 to decide convergence and find the sum a/(1 − r), including ratios that contain x and a context."
course: "calculus-bc"
unit: 10
topics: ["10.2"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "The definition of a convergent series as the limit of its partial sums (Topic 10.1)"
  - "Limits at infinity, including lim rⁿ (Topic 1.15)"
  - "Laws of exponents, such as 3ⁿ⁺¹ = 3 · 3ⁿ and 2²ⁿ = 4ⁿ"
  - "Solving an inequality with logarithms, such as 0.9ⁿ ≤ 0.125"
prerequisiteResources: ["mb-ap-calcbc-10.1-study-guide"]
learningObjectives:
  - "Recognise a geometric series and identify its first term and common ratio, whatever the starting index"
  - "Derive the nth partial sum of a geometric series and use it to explain when the series converges"
  - "Decide whether a geometric series converges, and find its sum a/(1 − r) when |r| < 1"
  - "Find the values of x for which a geometric series whose ratio contains x converges, and its sum"
  - "Use geometric series and their partial sums in a context, including repeating decimals"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 3 are by hand. Worked example 2 uses a calculator for powers such as 0.9¹⁰ and for logarithms; give decimals to 3 decimal places unless the context needs whole numbers."
related: ["mb-ap-calcbc-10.2-revision-notes", "mb-ap-calcbc-10.2-practice", "mb-ap-calcbc-10.2-checklist"]
next: "mb-ap-calcbc-10.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "A geometric series has a constant ratio r between each term and the one before it."
  - "If |r| < 1, the series converges and its sum is (first term)/(1 − r). If |r| ≥ 1 (and the first term is not 0), it diverges."
  - "The nth partial sum is Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1, where a is the first term."
  - "When the series does not start at n = 0, use the actual first term, not the coefficient in front."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Geometric series are BC-only content, like the rest of Unit 10."
  - question: "Does a/(1 − r) work if the series starts at n = 1 or n = 2?"
    answer: "Yes, provided a means the first term actually added. Work it out by substituting the starting index into the formula for the terms."
  - question: "Is a series with r = −1 convergent, since its terms just switch sign?"
    answer: "No. With r = −1 the partial sums alternate between a and 0, so they have no limit. A geometric series converges only when |r| < 1 (strictly)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Geometric series are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic applies the definition from [Topic 10.1](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/) to the most important family of series. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Convergence means lim Sₙ exists | [10.1](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/) | Every decision on this page |
| Limits at infinity | [1.15](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/) | lim rⁿ as n → ∞ |
| Laws of exponents | — | Rewriting terms into the form a·rⁿ |
| Logarithms | — | Solving rⁿ ≤ c for n |

Notation on this page: **Σ from n = 0 to ∞ of a·rⁿ** means a + ar + ar² + …. Here **a** is the first term and **r** is the common ratio.

## What makes a series geometric

A series is **geometric** when each term is the previous term multiplied by the **same number r**, the **common ratio**. To test a series, divide each term by the one before it:

| Series | Ratios of successive terms | Geometric? |
|---|---|---|
| 2 + 6 + 18 + 54 + … | 6/2 = 3, 18/6 = 3, 54/18 = 3 | Yes, r = 3 |
| 6 − 3 + 3/2 − 3/4 + … | −1/2 each time | Yes, r = −1/2 |
| 1 + 1/2 + 1/3 + 1/4 + … | 1/2, then 2/3, … | No: the ratio changes |

A negative ratio makes the signs alternate. The pizza series from Topic 10.1, ½ + ¼ + ⅛ + …, is geometric with a = ½ and r = ½.

In **standard form**, a geometric series is written Σ from n = 0 to ∞ of a·rⁿ. Starting at n = 0 makes the first term a·r⁰ = a.

## The partial sum formula

Let Sₙ be the sum of the first n terms:

**Sₙ = a + ar + ar² + … + arⁿ⁻¹**

Multiply both sides by r:

**r·Sₙ = ar + ar² + … + arⁿ⁻¹ + arⁿ**

Subtract the second line from the first. Everything cancels except the first term of the top line and the last term of the bottom line:

**Sₙ − r·Sₙ = a − arⁿ, so Sₙ(1 − r) = a(1 − rⁿ)**

> **Sₙ = a(1 − rⁿ)/(1 − r), for r ≠ 1**

Check with the pizza series: a = ½, r = ½, n = 10 gives S₁₀ = ½(1 − 1/1024)/(½) = 1023/1024, as found in Topic 10.1. ✓

## When does a geometric series converge?

By the definition from Topic 10.1, the series converges exactly when lim Sₙ exists. In the formula, only rⁿ depends on n, so everything depends on what rⁿ does. Assume a ≠ 0.

| Ratio | What rⁿ does | Partial sums | Verdict |
|---|---|---|---|
| \|r\| < 1 | rⁿ → 0 | Sₙ → a(1 − 0)/(1 − r) | **Converges to a/(1 − r)** |
| r = 1 | — (formula not valid) | Sₙ = na, grows without bound | Diverges |
| r = −1 | Alternates 1, −1 | Sₙ = a, 0, a, 0, … | Diverges (no limit) |
| \|r\| > 1 | \|rⁿ\| → ∞ | Sₙ is unbounded | Diverges |

> **If |r| < 1, then Σ from n = 0 to ∞ of a·rⁿ = a/(1 − r). If |r| ≥ 1 and a ≠ 0, the series diverges.**

A memory aid that also handles other starting indices:

> **Sum = (first term) / (1 − common ratio), valid only when |r| < 1.**

<figure>
<svg viewBox="0 0 540 330" role="img" aria-labelledby="geo102-title geo102-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="geo102-title">Partial sums of two geometric series that both converge to 4</title>
<desc id="geo102-desc">Graph of partial sum Sₙ against the number of terms n, from n = 1 to 10, with a dashed horizontal line at 4. Filled circles show the partial sums of 2 times (1/2) to the power n, which has a positive ratio: 2, 3, 3.5, 3.75, 3.875 and so on, rising steadily towards 4 from below. Open squares joined by a thin dotted line show the partial sums of 6 times (−1/2) to the power n, which has a negative ratio: 6, 3, 4.5, 3.75, 4.125, 3.94 and so on, jumping above and below 4 with shrinking jumps. For even n the two series have equal partial sums, so each square there surrounds a circle.</desc>
<rect x="0" y="0" width="540" height="330" fill="#ffffff"/>
<line x1="70" y1="270" x2="525" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="285" x2="70" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="114" y1="266" x2="114" y2="274"/><line x1="158" y1="266" x2="158" y2="274"/><line x1="202" y1="266" x2="202" y2="274"/><line x1="246" y1="266" x2="246" y2="274"/><line x1="290" y1="266" x2="290" y2="274"/><line x1="334" y1="266" x2="334" y2="274"/><line x1="378" y1="266" x2="378" y2="274"/><line x1="422" y1="266" x2="422" y2="274"/><line x1="466" y1="266" x2="466" y2="274"/><line x1="510" y1="266" x2="510" y2="274"/>
<line x1="66" y1="235" x2="74" y2="235"/><line x1="66" y1="200" x2="74" y2="200"/><line x1="66" y1="165" x2="74" y2="165"/><line x1="66" y1="130" x2="74" y2="130"/><line x1="66" y1="95" x2="74" y2="95"/><line x1="66" y1="60" x2="74" y2="60"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="114" y="288">1</text><text x="158" y="288">2</text><text x="202" y="288">3</text><text x="246" y="288">4</text><text x="290" y="288">5</text><text x="334" y="288">6</text><text x="378" y="288">7</text><text x="422" y="288">8</text><text x="466" y="288">9</text><text x="510" y="288">10</text>
<text x="300" y="312" font-size="13">number of terms added, n</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="274">0</text><text x="62" y="239">1</text><text x="62" y="204">2</text><text x="62" y="169">3</text><text x="62" y="134">4</text><text x="62" y="99">5</text><text x="62" y="64">6</text>
</g>
<text x="20" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 160)">partial sum Sₙ</text>
<line x1="70" y1="130" x2="520" y2="130" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="76" y="122" font-size="12" fill="#1d2b44">S = 4</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3" points="114,60.0 158,165.0 202,112.5 246,138.8 290,125.6 334,132.2 378,128.9 422,130.5 466,129.7 510,130.1"/>
<circle cx="114" cy="200.0" r="5" fill="#1d2b44"/><circle cx="158" cy="165.0" r="5" fill="#1d2b44"/><circle cx="202" cy="147.5" r="5" fill="#1d2b44"/><circle cx="246" cy="138.8" r="5" fill="#1d2b44"/><circle cx="290" cy="134.4" r="5" fill="#1d2b44"/><circle cx="334" cy="132.2" r="5" fill="#1d2b44"/><circle cx="378" cy="131.1" r="5" fill="#1d2b44"/><circle cx="422" cy="130.5" r="5" fill="#1d2b44"/><circle cx="466" cy="130.3" r="5" fill="#1d2b44"/><circle cx="510" cy="130.1" r="5" fill="#1d2b44"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="107" y="53.0" width="14" height="14"/><rect x="151" y="158.0" width="14" height="14"/><rect x="195" y="105.5" width="14" height="14"/><rect x="239" y="131.8" width="14" height="14"/><rect x="283" y="118.6" width="14" height="14"/><rect x="327" y="125.2" width="14" height="14"/><rect x="371" y="121.9" width="14" height="14"/><rect x="415" y="123.5" width="14" height="14"/><rect x="459" y="122.7" width="14" height="14"/><rect x="503" y="123.1" width="14" height="14"/>
</g>
<rect x="262" y="22" width="258" height="48" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<circle cx="276" cy="36" r="5" fill="#1d2b44"/>
<text x="288" y="40" font-size="12" fill="#1d2b44">Σ 2(½)ⁿ: r = ½, rises to 4</text>
<rect x="270" y="50" width="12" height="12" fill="none" stroke="#1d2b44" stroke-width="2"/>
<text x="288" y="60" font-size="12" fill="#1d2b44">Σ 6(−½)ⁿ: r = −½, zig-zags to 4</text>
</svg>
<figcaption>Figure 1. Two geometric series starting at n = 0, both with sum 4. Filled circles: 2/(1 − ½) = 4, approached from below. Open squares: 6/(1 − (−½)) = 6/(3/2) = 4, approached from alternate sides. In both cases the gap to 4 shrinks by the factor |r| = ½ with each new term.</figcaption>
</figure>

## Worked example 1: rewrite, then decide (no calculator)

**Question.** Decide whether each series converges. Give the sum of each convergent series.

(a) Σ from n = 1 to ∞ of 3ⁿ⁺¹/5ⁿ  (b) Σ from n = 0 to ∞ of 4ⁿ/3ⁿ⁺¹  (c) Σ from n = 2 to ∞ of 8(−3/4)ⁿ

**(a)**
1. **Write out terms.** n = 1: 9/5. n = 2: 27/25. n = 3: 81/125.
2. **Ratio.** (27/25) ÷ (9/5) = 3/5. Or rewrite: 3ⁿ⁺¹/5ⁿ = 3 · (3/5)ⁿ, so r = 3/5.
3. **Decide.** |3/5| < 1, so the series converges.
4. **Sum.** First term ÷ (1 − r) = (9/5)/(1 − 3/5) = (9/5)/(2/5) = **9/2**.

**(b)**
1. **Rewrite.** 4ⁿ/3ⁿ⁺¹ = (1/3)(4/3)ⁿ. First term 1/3, ratio 4/3.
2. **Decide.** |4/3| > 1, so the series **diverges**. The partial sums grow without bound (S₁₀ is already about 16.8).
3. **Warning.** Blindly using a/(1 − r) gives (1/3)/(1 − 4/3) = −1, a negative "sum" of positive terms. The formula is meaningless when |r| ≥ 1.

**(c)**
1. **First term.** The series starts at n = 2, so the first term is 8(−3/4)² = 8 · 9/16 = **9/2**, not 8.
2. **Decide.** r = −3/4 and |r| < 1, so it converges.
3. **Sum.** (9/2)/(1 − (−3/4)) = (9/2)/(7/4) = **18/7**.

**Check for (c).** Using 8 as the first term would give 8/(7/4) = 32/7. That is the sum from n = 0, which includes the two extra terms 8 and −6. Indeed 32/7 − 8 + 6 = 18/7. ✓

## Worked example 2: a slowing flywheel (calculator allowed)

**Context.** A fictional exercise bike has a heavy flywheel. After a single push, it turns **40** times in the first minute. Model: in each later minute it turns **0.9** times as many rotations as in the minute before, forever.

(a) According to the model, how many rotations does the flywheel make in total?
(b) How many rotations does it make in the first 10 minutes?
(c) After how many whole minutes has it completed at least 350 rotations?

1. **Identify the series.** Rotations per minute: 40, 40(0.9), 40(0.9)², …. Geometric with a = 40 and r = 0.9.
2. **(a) Total.** |0.9| < 1, so the series converges: total = 40/(1 − 0.9) = 40/0.1 = **400 rotations**.
3. **(b) First 10 minutes.** This is a partial sum, not the full sum:
   S₁₀ = 40(1 − 0.9¹⁰)/(1 − 0.9) = 400(1 − 0.9¹⁰) = 400(1 − 0.34868…) ≈ **260.529 rotations**.
4. **(c) Set up an inequality.** Sₙ = 400(1 − 0.9ⁿ) ≥ 350 gives 0.9ⁿ ≤ 0.125.
   Take ln of both sides: n·ln 0.9 ≤ ln 0.125. Because ln 0.9 < 0, dividing **reverses** the inequality: n ≥ ln 0.125 / ln 0.9 ≈ 19.74.
   So the smallest whole number is **n = 20 minutes**.
5. **Check (c).** S₁₉ ≈ 345.966 (not yet 350) and S₂₀ ≈ 351.369. ✓

**Interpretation.** The model says the flywheel never quite reaches 400 rotations, but it gets as close as you like. After 20 minutes, about 48.6 rotations are still "to come", spread over the rest of time. A real flywheel would stop after a finite time, so the infinite total is a property of the model, not a measurement.

## Worked example 3: a ratio that contains x

**Question.** Consider Σ from n = 0 to ∞ of ((x − 1)/3)ⁿ.
(a) For which values of x does the series converge?
(b) Find the sum in terms of x.
(c) Find the value of x for which the sum is 2.

1. **Identify a and r.** First term (n = 0) is 1. Ratio r = (x − 1)/3.
2. **(a) Convergence condition.** Need |r| < 1: |(x − 1)/3| < 1, so |x − 1| < 3, so **−2 < x < 4**.
   At the ends: x = 4 gives r = 1 and x = −2 gives r = −1. Both diverge, so the endpoints are **excluded**.
3. **(b) Sum.** 1/(1 − (x − 1)/3) = 3/(3 − (x − 1)) = **3/(4 − x)**, valid only for −2 < x < 4.
4. **(c) Solve.** 3/(4 − x) = 2 gives 4 − x = 3/2, so **x = 5/2**.
   **Check it is allowed:** at x = 5/2, r = (3/2)/3 = ½, and |½| < 1. ✓ Sum = 1/(1 − ½) = 2. ✓

**Why check?** Solving 3/(4 − x) = ½ gives x = −2, but then r = −1 and the series diverges. The formula 3/(4 − x) only describes the series inside the interval of convergence. This idea returns in the power series topics later in Unit 10.

## Repeating decimals are geometric series

A repeating decimal is a geometric series in disguise. For example,

0.454545… = 0.45 + 0.0045 + 0.000045 + … , with a = 0.45 and r = 0.01.

Since |r| < 1, the sum is 0.45/(1 − 0.01) = 0.45/0.99 = 45/99 = **5/11**. Check: 5 ÷ 11 = 0.4545…. ✓

## Common misconceptions

- **Using the coefficient as the first term.** In Σ from n = 2 of 8(−3/4)ⁿ, the first term is 9/2, not 8. Always substitute the starting index.
- **Applying a/(1 − r) when |r| ≥ 1.** The formula then gives nonsense, such as a negative sum of positive terms. Check |r| < 1 first and say so in your answer.
- **Including the endpoints |r| = 1.** r = 1 and r = −1 both diverge. The condition is strict: |r| < 1.
- **Dropping the minus sign of a negative ratio.** For r = −3/4, 1 − r = 1 + 3/4 = 7/4, not 1/4.
- **Finding the ratio upside down.** r = (later term)/(earlier term), not the other way round.
- **Confusing Sₙ with the sum.** "How many in the first 10 minutes?" needs S₁₀; "how many in total?" needs a/(1 − r).
- **Forgetting to reverse the inequality** when dividing by ln r, which is negative for 0 < r < 1.
- **Thinking alternating signs mean divergence.** Σ 6(−½)ⁿ converges to 4 (Figure 1).

## Where this leads

Geometric series give you a reliable benchmark. Next, [Topic 10.3, The nth Term Test for Divergence](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-study-guide/), gives a quick test for divergence that works for any series. Later, geometric series are the comparison series in Topic 10.6, the model behind the ratio test in Topic 10.8, and the starting point for power series such as 1/(1 − x) = 1 + x + x² + … in Topics 10.13 to 10.15. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-checklist/) to consolidate.
