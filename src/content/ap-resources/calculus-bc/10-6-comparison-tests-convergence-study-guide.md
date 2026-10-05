---
resourceId: "mb-ap-calcbc-10.6-study-guide"
title: "Comparison Tests for Convergence: Study Guide (Calculus BC 10.6)"
description: "Use the direct comparison test and the limit comparison test with p-series and geometric benchmarks, learn which comparisons give no conclusion, and write complete justifications."
course: "calculus-bc"
unit: 10
topics: ["10.6"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity of rational and root expressions (Topic 1.15)"
  - "Geometric series (Topic 10.2)"
  - "The nth term test for divergence (Topic 10.3)"
  - "Harmonic series and p-series (Topic 10.5)"
prerequisiteResources: ["mb-ap-calcbc-10.5-study-guide"]
learningObjectives:
  - "State the direct comparison test and the limit comparison test with all their conditions"
  - "Choose a p-series or geometric benchmark by keeping the dominant terms"
  - "Use a direct comparison, with an inequality that holds for every n from some point on, to decide convergence"
  - "Use the limit comparison test, finding the limit of aₙ/bₙ and interpreting it"
  - "Recognise when a comparison gives no conclusion and switch to a better comparison or test"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "stretch"
calculator: "none-needed"
calculatorNote: "Comparison tests are a no-calculator skill. Limits are found by algebra, by dividing by the highest power."
related: ["mb-ap-calcbc-10.6-revision-notes", "mb-ap-calcbc-10.6-practice", "mb-ap-calcbc-10.6-checklist"]
next: "mb-ap-calcbc-10.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Both comparison tests need series with positive (or non-negative) terms."
  - "Direct comparison: smaller than a convergent series converges; bigger than a divergent series diverges. The other two directions tell you nothing."
  - "Limit comparison: if aₙ/bₙ → L with 0 < L < ∞, the two series both converge or both diverge."
  - "Pick the benchmark bₙ by keeping only the dominant terms of the numerator and the denominator."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Series are BC-only content. AB students can skip this page."
  - question: "Which comparison test should I try first?"
    answer: "If an easy inequality points the right way (for example a bounded sine on top, or dropping a positive term from the denominator of a convergent-looking series), use direct comparison. If the inequality points the wrong way or is messy, use limit comparison."
  - question: "Can I use a comparison test on a series with negative terms?"
    answer: "Not directly. Both tests are for series whose terms are positive (at least from some point on). For series with mixed signs you will use the alternating series test (Topic 10.7) or compare the absolute values (Topic 10.9)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** The comparison tests are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You compare a new series with one you already understand, so you need a good stock of known series. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Limits at infinity | 1.15 | Finding lim aₙ/bₙ by dividing by the highest power |
| Geometric series | 10.2 | Benchmarks such as ∑ (3/4)ⁿ |
| nth term test | 10.3 | Checking first whether the terms even go to 0 |
| p-series | [10.5](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-study-guide/) | Benchmarks such as ∑ 1/n² and ∑ 1/√n |

Notation on this page: aₙ is the term of the series you are testing; bₙ is the term of the benchmark series you compare it with. ∑ means the sum from n = 1 to ∞ unless stated.

## The idea: compare with a series you know

Consider ∑ 1/(n² + 3). It is not a p-series, and the integral test would need an arctangent. But its terms are close to 1/n², and in fact a little **smaller**:

1/(n² + 3) < 1/n² for every n ≥ 1.

∑ 1/n² converges (p = 2). A series of positive terms that are each smaller than the terms of a convergent series cannot add up to more than that series does. So ∑ 1/(n² + 3) converges too.

That is the whole idea of this topic. You need two things: a **benchmark** series whose behaviour you know (usually a p-series or a geometric series), and a **link** between the two series. The link is either an inequality (direct comparison) or a limit (limit comparison).

**Why positivity matters.** When every term is positive, the partial sums only go up. Increasing partial sums do one of two things: they stay below some ceiling and settle to a limit, or they grow without bound. A comparison supplies the ceiling, or proves there is none. With negative terms this reasoning breaks down, so both tests require positive terms.

## The direct comparison test

**Test.** Suppose 0 ≤ aₙ ≤ bₙ for every n from some N onwards.

- If ∑ bₙ **converges**, then ∑ aₙ **converges**. (Smaller than convergent.)
- If ∑ aₙ **diverges**, then ∑ bₙ **diverges**. (Bigger than divergent.)

The inequality only needs to hold "eventually", because the first few terms never decide convergence (Topic 10.5).

The other two directions are useless. A series that is **smaller than a divergent** series might converge or diverge. A series that is **bigger than a convergent** series might converge or diverge. Figure 1 sums this up.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="dct106-title dct106-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dct106-title">The four cases of the direct comparison test</title>
<desc id="dct106-desc">A two by two grid. Columns: your series is smaller (0 ≤ aₙ ≤ bₙ), or your series is bigger (aₙ ≥ bₙ ≥ 0). Rows: the benchmark series converges, or the benchmark series diverges. Top left, smaller than a convergent benchmark: conclusion, the series converges. Bottom right, bigger than a divergent benchmark: conclusion, the series diverges. The other two cells, top right and bottom left, are hatched and say no conclusion, try another test.</desc>
<defs><pattern id="hatch106" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="0.8"/></pattern></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="270" y="28" font-weight="bold">your series is smaller</text>
<text x="270" y="46">0 ≤ aₙ ≤ bₙ</text>
<text x="450" y="28" font-weight="bold">your series is bigger</text>
<text x="450" y="46">aₙ ≥ bₙ ≥ 0</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="90" y="120" font-weight="bold">benchmark</text>
<text x="90" y="138" font-weight="bold">∑ bₙ converges</text>
<text x="90" y="225" font-weight="bold">benchmark</text>
<text x="90" y="243" font-weight="bold">∑ bₙ diverges</text>
</g>
<rect x="180" y="60" width="180" height="110" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="360" y="60" width="180" height="110" fill="url(#hatch106)" stroke="#1d2b44" stroke-width="1"/>
<rect x="180" y="170" width="180" height="110" fill="url(#hatch106)" stroke="#1d2b44" stroke-width="1"/>
<rect x="360" y="170" width="180" height="110" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="270" y="105" font-weight="bold">✓ CONCLUSION</text>
<text x="270" y="125">∑ aₙ converges</text>
<text x="270" y="145" font-size="12">(smaller than convergent)</text>
<text x="450" y="215" font-weight="bold">✓ CONCLUSION</text>
<text x="450" y="235">∑ aₙ diverges</text>
<text x="450" y="255" font-size="12">(bigger than divergent)</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<rect x="385" y="93" width="130" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="450" y="111" font-weight="bold">✗ no conclusion</text>
<text x="450" y="128" font-size="12">try another test</text>
<rect x="205" y="203" width="130" height="44" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="270" y="221" font-weight="bold">✗ no conclusion</text>
<text x="270" y="238" font-size="12">try another test</text>
</g>
</svg>
<figcaption>Figure 1. Direct comparison works in only two of the four cases (plain cells with a tick). In the hatched cells marked with a cross, the comparison is true but gives no information.</figcaption>
</figure>

**Useful inequality tricks.**

- Bounded pieces: −1 ≤ sin n ≤ 1, 0 ≤ cos² n ≤ 1, 0 < arctan n < π/2.
- Making a fraction **bigger**: make the numerator bigger or the denominator smaller (for example, drop a positive term from the denominator).
- Making a fraction **smaller**: make the numerator smaller or the denominator bigger.
- ln n > 1 when n ≥ 3, because e ≈ 2.718 < 3.

## Worked example 1: direct comparison

**Question.** Decide whether each series converges. (a) ∑ (2 + sin n)/n²  (b) ∑ from n = 2 to ∞ of (ln n)/√n

**(a)**
1. **Check positivity.** −1 ≤ sin n ≤ 1, so 1 ≤ 2 + sin n ≤ 3. Every term is positive.
2. **Guess.** The top stays between 1 and 3; the bottom is n². The terms behave like a constant over n², so expect convergence. Aim to show the terms are smaller than a convergent series.
3. **Inequality.** (2 + sin n)/n² ≤ 3/n² for every n ≥ 1.
4. **Benchmark.** ∑ 3/n² is 3 times a p-series with p = 2 > 1, so it converges.
5. **Conclusion.** 0 < aₙ ≤ 3/n² and ∑ 3/n² converges, so by the direct comparison test, **∑ (2 + sin n)/n² converges**.

**(b)**
1. **Guess.** ln n grows, but only slowly; the bottom is n^(1/2). The terms are at least as big as 1/√n (from some point), which suggests divergence. Aim to show the terms are bigger than a divergent series.
2. **Inequality.** For n ≥ 3, ln n ≥ ln 3 > 1, so (ln n)/√n > 1/√n > 0.
3. **Benchmark.** ∑ 1/√n is a p-series with p = 1/2 ≤ 1, so it diverges.
4. **Conclusion.** The terms are bigger than those of a divergent series for every n ≥ 3. Leaving out the n = 2 term does not affect divergence. By the direct comparison test, **the series diverges**.

**A wrong turn to avoid in (a).** Comparing with (2 + sin n)/n² ≤ 3/n is true, but ∑ 3/n diverges. "Smaller than divergent" gives no conclusion. Choose the comparison that matches your guess.

## The limit comparison test

Direct comparison needs an inequality in the right direction, and sometimes the natural one points the wrong way. Take ∑ 1/(n² − n + 1). Since n² − n + 1 ≤ n² for n ≥ 1, we get 1/(n² − n + 1) ≥ 1/n². That is "bigger than convergent": no conclusion. Yet for large n the terms are almost exactly 1/n². The limit comparison test captures "almost exactly".

**Test.** Suppose aₙ > 0 and bₙ > 0 for every n from some point on, and

> **lim as n → ∞ of aₙ/bₙ = L, where L is a finite positive number (0 < L < ∞).**

Then ∑ aₙ and ∑ bₙ **both converge or both diverge**.

**Why it works.** If aₙ/bₙ → L > 0, then eventually aₙ/bₙ is between L/2 and 3L/2. So (L/2)·bₙ < aₙ < (3L/2)·bₙ. Each inequality gives a direct comparison: the right one shows ∑ aₙ converges if ∑ bₙ does, and the left one shows ∑ aₙ diverges if ∑ bₙ does.

**Choosing bₙ.** Keep only the term that grows fastest in the numerator and the one that grows fastest in the denominator, and drop constant multiples.

| aₙ | Dominant terms | Benchmark bₙ |
|---|---|---|
| (n + 4)/(2n² − n + 3) | n/(2n²) | 1/n |
| (√n + 5)/(n² + 1) | √n/n² | 1/n^(3/2) |
| 3ⁿ/(4ⁿ + 7) | 3ⁿ/4ⁿ | (3/4)ⁿ |

You can keep the constant (for example bₙ = 1/(2n)); it only changes L, not the conclusion.

## Worked example 2: limit comparison

**Question.** Decide whether each series converges. (a) ∑ 1/(n² − n + 1)  (b) ∑ (n + 4)/(2n² − n + 3)

**(a)**
1. **Positivity.** n² − n + 1 = 1, 3, 7, … for n = 1, 2, 3, and it is positive for every n ≥ 1. So aₙ > 0.
2. **Benchmark.** Dominant term n², so bₙ = 1/n² (positive; ∑ bₙ converges, p = 2).
3. **Limit.** aₙ/bₙ = n²/(n² − n + 1). Divide top and bottom by n²: 1/(1 − 1/n + 1/n²) → 1/(1 − 0 + 0) = **1**.
4. **Conclusion.** L = 1 is finite and positive, and ∑ 1/n² converges, so by the limit comparison test **∑ 1/(n² − n + 1) converges**.

**(b)**
1. **Positivity.** For n ≥ 1, n + 4 > 0, and 2n² − n + 3 = n(2n − 1) + 3 > 0. So aₙ > 0.
2. **Benchmark.** Dominant terms n/(2n²) = 1/(2n). Take bₙ = 1/n.
3. **Limit.** aₙ/bₙ = n(n + 4)/(2n² − n + 3) = (n² + 4n)/(2n² − n + 3). Divide by n²: (1 + 4/n)/(2 − 1/n + 3/n²) → **1/2**.
4. **Conclusion.** 0 < 1/2 < ∞ and ∑ 1/n diverges (harmonic), so **∑ (n + 4)/(2n² − n + 3) diverges**.

**Check the guess.** In (b) the terms behave like 1/(2n), half the harmonic terms. Half of an infinite sum is still infinite, which matches L = 1/2 and divergence.

## Worked example 3: geometric benchmarks and choosing a method

**Question.** (a) Show that ∑ 3ⁿ/(4ⁿ + 7) converges, and find an upper bound for its sum. (b) Decide whether ∑ (√n + 5)/(n² + 1) converges.

**(a)**
1. **Inequality.** Adding 7 makes the denominator bigger, so 0 < 3ⁿ/(4ⁿ + 7) < 3ⁿ/4ⁿ = (3/4)ⁿ for every n ≥ 1.
2. **Benchmark.** ∑ (3/4)ⁿ is geometric with ratio 3/4, and |3/4| < 1, so it converges. Starting at n = 1, its sum is (3/4)/(1 − 3/4) = 3.
3. **Conclusion.** By direct comparison, the series converges, and its sum is **less than 3**. (Background: adding terms numerically gives about 2.30.)

Here direct comparison is the natural choice: the inequality points the right way and also gives a bound.

**(b)**
1. **Benchmark.** Dominant terms √n/n² = 1/n^(3/2), so bₙ = 1/n^(3/2), a convergent p-series (p = 3/2).
2. **Why not direct comparison?** The +5 on top makes aₙ bigger than √n/n², and the +1 below makes it smaller. The two effects pull in opposite directions, so a quick inequality is awkward.
3. **Limit.** aₙ/bₙ = (√n + 5) n^(3/2)/(n² + 1) = (n² + 5n^(3/2))/(n² + 1). Divide by n²: (1 + 5/√n)/(1 + 1/n²) → **1**.
4. **Conclusion.** All terms are positive and L = 1, so by the limit comparison test **the series converges**.

## Writing a complete justification

In this unit a decision without the conditions of the test checked is not a full justification. For a comparison test, write down:

1. That the terms are **positive** (for every n, or from some N on).
2. The **benchmark** series and why it converges or diverges (p-series with the value of p, or geometric with the ratio).
3. **Either** the inequality and the n for which it holds, **or** the limit L with working, and that 0 < L < ∞.
4. The **name** of the test and the conclusion.

**Background: the cases L = 0 and L = ∞.** If aₙ/bₙ → 0, then eventually aₙ < bₙ, so convergence of ∑ bₙ gives convergence of ∑ aₙ (nothing follows if ∑ bₙ diverges). If aₙ/bₙ → ∞, then eventually aₙ > bₙ, so divergence of ∑ bₙ gives divergence of ∑ aₙ. These are direct comparisons in disguise. The safest habit is to choose bₙ from the dominant terms, so that L is a positive number.

## Common misconceptions

- **Comparing in the useless direction.** "1/(n + 2) < 1/n and ∑ 1/n diverges, so ∑ 1/(n + 2) diverges" is invalid reasoning (even though the conclusion happens to be true). Smaller than divergent tells you nothing.
- **Forgetting to check positivity.** Both tests assume positive terms. Do not use them on ∑ (−1)ⁿ/n² directly.
- **Taking the limit of aₙ instead of aₙ/bₙ.** lim aₙ = 0 is the nth term test, which cannot prove convergence.
- **Accepting L = 0 or L = ∞ as "both behave the same".** The basic test needs 0 < L < ∞. With bₙ = 1/n for aₙ = 1/n², L = 0, and the two series behave differently.
- **Choosing a benchmark you have not classified.** The comparison is only as good as your knowledge of ∑ bₙ. State why it converges or diverges.
- **An inequality that fails for small n but is claimed "for all n".** Say "for n ≥ 3" (or whatever is true). That is enough.
- **Thinking the comparison gives the sum.** It decides convergence, and at most gives a bound.

## Where this leads

Next, [Topic 10.7, Alternating Series Test for Convergence](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/), deals with series whose signs alternate, where comparison tests cannot be used directly. The ratio test (Topic 10.8) compares a series with a geometric series automatically. In [Topic 10.9](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/) you will apply comparison tests to |aₙ| to show absolute convergence. See the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-checklist/) to consolidate.
