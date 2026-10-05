---
resourceId: "mb-ap-calcbc-10.4-study-guide"
title: "Integral Test for Convergence: Study Guide (Calculus BC 10.4)"
description: "Learn when the integral test applies, why rectangles link a series to an improper integral, and how to use it to prove convergence or divergence with full justification."
course: "calculus-bc"
unit: 10
topics: ["10.4"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Improper integrals with an infinite upper limit (Topic 6.13)"
  - "Integration by substitution and by parts (Topics 6.9 and 6.11)"
  - "Using the sign of the derivative to show a function is decreasing (Topic 5.3)"
  - "The nth term test for divergence (Topic 10.3)"
prerequisiteResources: ["mb-ap-calcbc-10.3-study-guide"]
learningObjectives:
  - "State the three conditions of the integral test and check each one for a given series"
  - "Explain, using rectangles, why a series and its matching improper integral either both converge or both diverge"
  - "Use the integral test to prove that a series converges or diverges, with a written justification"
  - "Handle a function that is only decreasing from some point onwards"
  - "Explain why the value of the integral is not the sum of the series"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Evaluate improper integrals by hand: this is a no-calculator skill. Where a calculator is allowed, you may use it for decimal values of terms, partial sums or integrals, but the limit argument must be shown."
related: ["mb-ap-calcbc-10.4-revision-notes", "mb-ap-calcbc-10.4-practice", "mb-ap-calcbc-10.4-checklist"]
next: "mb-ap-calcbc-10.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "If aₙ = f(n) where f is positive, continuous and decreasing for x ≥ N, then ∑ from n = N to ∞ of aₙ and ∫ from N to ∞ of f(x) dx both converge or both diverge."
  - "Check all three conditions and say so in your answer. 'Decreasing' only needs to hold from some point onwards."
  - "The integral's value is not the sum of the series. The test tells you only whether the series converges."
  - "Use it when f(x) has an antiderivative you can find and take to a limit."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Infinite series, including the integral test, are BC-only content."
  - question: "If the integral equals 1/(2e), is the sum of the series 1/(2e)?"
    answer: "No. The integral and the series converge together, but their values are usually different. In Worked example 1 the integral is about 0.184 while the series sums to about 0.405."
  - question: "Can I use the integral test on an alternating series?"
    answer: "Not directly. The terms must be positive. Alternating series have their own test in Topic 10.7."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** The integral test is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need four earlier ideas. If any is shaky, revisit it first. The [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) shows where each one sits.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Improper integrals | 6.13 | The test compares a series with ∫ from N to ∞ of f(x) dx; see the [Topic 6.13 study guide](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/) |
| Substitution and parts | 6.9, 6.11 | Finding the antiderivative |
| Decreasing functions | 5.3 | Showing f′(x) < 0 to check a condition |
| The nth term test | 10.3 | The quick first check; see the [Topic 10.3 study guide](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-study-guide/) |

Notation on this page: **∑ from n = 1 to ∞ of aₙ** is a series and **∫ from 1 to ∞ of f(x) dx** means the limit as b → ∞ of ∫ from 1 to b of f(x) dx. The integral **converges** if that limit is a finite number and **diverges** otherwise.

## The idea: a series is a sum of rectangle areas

The nth term test (Topic 10.3) can only prove divergence. When the terms approach 0, you need something sharper. The integral test uses a picture.

Suppose the terms come from a function: **aₙ = f(n)**. Draw a rectangle of width 1 and height aₙ for each term. The total area of the rectangles is the sum of the series. If f is positive and decreasing, the rectangles hug the curve y = f(x), either just above it or just below it.

<figure>
<svg viewBox="0 0 540 320" role="img" aria-labelledby="int-title int-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="int-title">Rectangles of height aₙ = f(n) placed above and below the curve y = 1/(1 + x²)</title>
<desc id="int-desc">Two panels, each showing the decreasing curve y = 1/(1 + x²) for x from about 0.8 to 6, with a vertical scale from 0 to 0.5. Left panel: hatched rectangles of width 1 sit on the intervals 1 to 2, 2 to 3, up to 5 to 6, with heights a₁ = 0.5, a₂ = 0.2, a₃ = 0.1, a₄ ≈ 0.059 and a₅ ≈ 0.038. Each rectangle's top-left corner touches the curve, so the rectangles lie above the curve and their total area is at least the area under the curve from 1 onwards. Right panel: hatched rectangles sit on the intervals 1 to 2 up to 5 to 6 with heights a₂, a₃, a₄, a₅ and a₆ ≈ 0.027. Each rectangle's top-right corner touches the curve, so the rectangles lie below the curve and their total area is at most the area under the curve from 1 onwards.</desc>
<defs><pattern id="hatch104" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="7" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="540" height="320" fill="#ffffff"/>
<g fill="url(#hatch104)" stroke="#1d2b44" stroke-width="1">
<rect x="85" y="83.3" width="35" height="166.7"/><rect x="120" y="183.3" width="35" height="66.7"/><rect x="155" y="216.7" width="35" height="33.3"/><rect x="190" y="230.4" width="35" height="19.6"/><rect x="225" y="237.2" width="35" height="12.8"/>
<rect x="335" y="183.3" width="35" height="66.7"/><rect x="370" y="216.7" width="35" height="33.3"/><rect x="405" y="230.4" width="35" height="19.6"/><rect x="440" y="237.2" width="35" height="12.8"/><rect x="475" y="241.0" width="35" height="9.0"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="50" y1="250" x2="268" y2="250"/><line x1="50" y1="262" x2="50" y2="40"/>
<line x1="300" y1="250" x2="518" y2="250"/><line x1="300" y1="262" x2="300" y2="40"/>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="85" y1="246" x2="85" y2="254"/><line x1="120" y1="246" x2="120" y2="254"/><line x1="155" y1="246" x2="155" y2="254"/><line x1="190" y1="246" x2="190" y2="254"/><line x1="225" y1="246" x2="225" y2="254"/><line x1="260" y1="246" x2="260" y2="254"/>
<line x1="335" y1="246" x2="335" y2="254"/><line x1="370" y1="246" x2="370" y2="254"/><line x1="405" y1="246" x2="405" y2="254"/><line x1="440" y1="246" x2="440" y2="254"/><line x1="475" y1="246" x2="475" y2="254"/><line x1="510" y1="246" x2="510" y2="254"/>
<line x1="46" y1="166.7" x2="54" y2="166.7"/><line x1="46" y1="83.3" x2="54" y2="83.3"/>
<line x1="296" y1="166.7" x2="304" y2="166.7"/><line x1="296" y1="83.3" x2="304" y2="83.3"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="85" y="267">1</text><text x="120" y="267">2</text><text x="155" y="267">3</text><text x="190" y="267">4</text><text x="225" y="267">5</text><text x="260" y="267">6</text>
<text x="335" y="267">1</text><text x="370" y="267">2</text><text x="405" y="267">3</text><text x="440" y="267">4</text><text x="475" y="267">5</text><text x="510" y="267">6</text>
<text x="160" y="284">x</text><text x="410" y="284">x</text>
<text x="102" y="78">a₁</text><text x="137" y="178">a₂</text><text x="172" y="211">a₃</text>
<text x="352" y="178">a₂</text><text x="387" y="211">a₃</text><text x="422" y="225">a₄</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="44" y="170.7">0.25</text><text x="44" y="87.3">0.5</text>
<text x="294" y="170.7">0.25</text><text x="294" y="87.3">0.5</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="78.0,46.7 81.5,65.8 85.0,83.3 88.5,99.2 92.0,113.4 95.5,126.1 99.0,137.4 102.5,147.4 106.0,156.4 109.5,164.3 113.0,171.4 116.5,177.7 120.0,183.3 123.5,188.4 127.0,192.9 130.5,197.0 134.0,200.7 137.5,204.0 141.0,207.0 144.5,209.8 148.0,212.3 151.5,214.6 155.0,216.7 158.5,218.6 162.0,220.3 165.5,222.0 169.0,223.5 172.5,224.8 176.0,226.1 179.5,227.3 183.0,228.4 186.5,229.4 190.0,230.4 193.5,231.3 197.0,232.1 200.5,232.9 204.0,233.6 207.5,234.3 211.0,235.0 214.5,235.6 218.0,236.1 221.5,236.7 225.0,237.2 228.5,237.7 232.0,238.1 235.5,238.5 239.0,238.9 242.5,239.3 246.0,239.7 249.5,240.0 253.0,240.4 256.5,240.7 260.0,241.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="328.0,46.7 331.5,65.8 335.0,83.3 338.5,99.2 342.0,113.4 345.5,126.1 349.0,137.4 352.5,147.4 356.0,156.4 359.5,164.3 363.0,171.4 366.5,177.7 370.0,183.3 373.5,188.4 377.0,192.9 380.5,197.0 384.0,200.7 387.5,204.0 391.0,207.0 394.5,209.8 398.0,212.3 401.5,214.6 405.0,216.7 408.5,218.6 412.0,220.3 415.5,222.0 419.0,223.5 422.5,224.8 426.0,226.1 429.5,227.3 433.0,228.4 436.5,229.4 440.0,230.4 443.5,231.3 447.0,232.1 450.5,232.9 454.0,233.6 457.5,234.3 461.0,235.0 464.5,235.6 468.0,236.1 471.5,236.7 475.0,237.2 478.5,237.7 482.0,238.1 485.5,238.5 489.0,238.9 492.5,239.3 496.0,239.7 499.5,240.0 503.0,240.4 506.5,240.7 510.0,241.0"/>
<text x="160" y="20" font-size="13" fill="#1d2b44" text-anchor="middle">Rectangles above the curve</text>
<text x="160" y="303" font-size="12" fill="#1d2b44" text-anchor="middle">a₁ + a₂ + a₃ + … ≥ ∫ from 1 to ∞ of f</text>
<text x="410" y="20" font-size="13" fill="#1d2b44" text-anchor="middle">Rectangles below the curve</text>
<text x="410" y="303" font-size="12" fill="#1d2b44" text-anchor="middle">a₂ + a₃ + a₄ + … ≤ ∫ from 1 to ∞ of f</text>
<text x="200" y="120" font-size="12" fill="#1d2b44" text-anchor="middle">y = 1/(1 + x²)</text>
</svg>
<figcaption>Figure 1. The same terms aₙ = f(n) drawn two ways, for f(x) = 1/(1 + x²). Left: each rectangle starts at x = n, so it sits above the curve and the sum from a₁ is at least the integral. Right: each rectangle ends at x = n, so it sits below the curve and the sum from a₂ is at most the integral. Here the integral is π/4 ≈ 0.785 and the series sums to about 1.077.</figcaption>
</figure>

**Why the two pictures settle the question.** Let I = ∫ from 1 to ∞ of f(x) dx.

- **If I is finite.** The right-hand picture says a₂ + a₃ + … + aₙ ≤ I for every n. The partial sums are increasing (all terms are positive) and they never pass a₁ + I. An increasing sequence with a ceiling has a finite limit, so the series **converges**.
- **If I is infinite.** The left-hand picture says a₁ + a₂ + … + aₙ is at least ∫ from 1 to n + 1 of f(x) dx. That integral grows without bound, so the partial sums do too. The series **diverges**.

Both cases need f to be **positive** (so that areas and partial sums only grow) and **decreasing** (so that the rectangles really stay on one side of the curve).

## The integral test

> **Integral test.** Suppose aₙ = f(n), where f is **positive**, **continuous** and **decreasing** for x ≥ N. Then
> ∑ from n = N to ∞ of aₙ and ∫ from N to ∞ of f(x) dx
> **either both converge or both diverge.**

Three points to notice.

1. **"Decreasing for x ≥ N" is enough.** The first few terms can do anything. Adding or removing finitely many terms changes the sum but never changes whether the series converges.
2. **The test gives the behaviour, not the sum.** In Figure 1 the integral is about 0.785 and the sum is about 1.077. They are different numbers.
3. **Always check the conditions in writing.** In a free-response answer, a correct integral with no mention of the conditions is an incomplete justification.

**How to show "decreasing".** Usually find f′(x) and show it is negative for x ≥ N. Sometimes a quick argument works: if the denominator of a positive fraction increases and the numerator is constant, the fraction decreases.

## Worked example 1: a convergent series, using substitution

**Question.** Use the integral test to decide whether ∑ from n = 1 to ∞ of n e^(−n²) converges.

1. **Choose f.** f(x) = x e^(−x²), so that f(n) = aₙ.
2. **Check the conditions for x ≥ 1.**
   - *Positive:* x > 0 and e^(−x²) > 0. ✓
   - *Continuous:* a product of continuous functions. ✓
   - *Decreasing:* f′(x) = e^(−x²) − 2x² e^(−x²) = e^(−x²)(1 − 2x²). For x ≥ 1, 1 − 2x² ≤ −1 < 0, so f′(x) < 0. ✓
3. **Evaluate the improper integral.** Substitute u = x², du = 2x dx:
   ∫ x e^(−x²) dx = −½ e^(−x²) + C.
   ∫ from 1 to b of x e^(−x²) dx = [−½ e^(−x²)] from 1 to b = ½e⁻¹ − ½e^(−b²).
4. **Take the limit.** As b → ∞, e^(−b²) → 0, so the integral converges to **½e⁻¹ = 1/(2e) ≈ 0.184**.
5. **Conclude.** Since f is positive, continuous and decreasing on [1, ∞) and ∫ from 1 to ∞ of f(x) dx converges, **∑ n e^(−n²) converges** by the integral test.

**Check.** The first terms are a₁ ≈ 0.368, a₂ ≈ 0.0366, a₃ ≈ 0.00037. They shrink very fast, so convergence is believable. The sum is about 0.405, not 0.184: the integral only told us *that* it converges.

## Worked example 2: a divergent series, decreasing only from n = 2

**Question.** Does ∑ from n = 1 to ∞ of 2n/(n² + 4) converge or diverge? Justify your answer.

1. **Try the nth term test first.** 2n/(n² + 4) → 0 (higher power on the bottom). Inconclusive, so a sharper test is needed.
2. **Choose f.** f(x) = 2x/(x² + 4). It is positive and continuous for x ≥ 1.
3. **Is it decreasing?** By the quotient rule,
   f′(x) = [2(x² + 4) − 2x · 2x]/(x² + 4)² = (8 − 2x²)/(x² + 4)².
   f′(x) < 0 only when x² > 4, that is, for x > 2. Check the terms: a₁ = 2/5 = 0.4, a₂ = 1/2 = 0.5, a₃ = 6/13 ≈ 0.462. The terms rise and then fall. So f is decreasing for **x ≥ 2**, and we apply the test with N = 2.
4. **Evaluate the improper integral from 2.** Substitute u = x² + 4:
   ∫ from 2 to b of 2x/(x² + 4) dx = [ln(x² + 4)] from 2 to b = ln(b² + 4) − ln 8.
5. **Take the limit.** As b → ∞, ln(b² + 4) → ∞. The integral **diverges**.
6. **Conclude.** f is positive, continuous and decreasing for x ≥ 2, and ∫ from 2 to ∞ of f(x) dx diverges, so ∑ from n = 2 to ∞ of aₙ diverges by the integral test. Adding the single term a₁ = 0.4 cannot make it converge, so **∑ from n = 1 to ∞ of 2n/(n² + 4) diverges**.

**Interpretation.** The integral from 2 to b grows like a logarithm: about 2.57 at b = 10, 7.13 at b = 100 and 11.74 at b = 1000. Slow, but without limit. The terms do approach 0, which is exactly the case where the nth term test is silent.

## Worked example 3: using integration by parts

**Question.** Use the integral test to show that ∑ from n = 1 to ∞ of (ln n)/n³ converges.

1. **First term.** a₁ = (ln 1)/1 = 0, so the series has the same behaviour (and the same sum) as ∑ from n = 2 to ∞ of (ln n)/n³.
2. **Choose f and check conditions for x ≥ 2.** f(x) = (ln x)/x³.
   - *Positive:* ln x > 0 for x > 1. ✓
   - *Continuous:* for x > 0. ✓
   - *Decreasing:* f′(x) = [(1/x) · x³ − ln x · 3x²]/x⁶ = (1 − 3 ln x)/x⁴. This is negative when ln x > 1/3, that is, x > e^(1/3) ≈ 1.40. So f is decreasing for x ≥ 2. ✓
3. **Antiderivative by parts.** u = ln x (du = dx/x), dv = x⁻³ dx (v = −1/(2x²)):
   ∫ (ln x)/x³ dx = −(ln x)/(2x²) + ∫ 1/(2x³) dx = −(ln x)/(2x²) − 1/(4x²) + C.
4. **Evaluate from 2 to b.**
   [−(ln x)/(2x²) − 1/(4x²)] from 2 to b = −(ln b)/(2b²) − 1/(4b²) + (ln 2)/8 + 1/16.
5. **Take the limit.** (ln b)/b² → 0 by L'Hospital's Rule: (1/b)/(2b) = 1/(2b²) → 0. And 1/(4b²) → 0. So the integral converges to **(ln 2)/8 + 1/16 ≈ 0.149**.
6. **Conclude.** The conditions hold for x ≥ 2 and ∫ from 2 to ∞ of f(x) dx converges, so ∑ (ln n)/n³ **converges** by the integral test.

**Check.** d/dx [−(ln x)/(2x²) − 1/(4x²)] = −1/(2x³) + (ln x)/x³ + 1/(2x³) = (ln x)/x³. ✓ The sum is about 0.198, which is between the integral (0.149) and the integral plus a₂ (0.149 + 0.087 = 0.236), as the rectangle pictures predict.

## Background: trapping the sum between two integrals

This is not required by the course framework, but it follows straight from Figure 1 and is a good check on your work. If f is positive, continuous and decreasing for x ≥ 1 and the integral converges, then

**∫ from 1 to ∞ of f(x) dx ≤ ∑ from n = 1 to ∞ of aₙ ≤ a₁ + ∫ from 1 to ∞ of f(x) dx.**

For Worked example 1: 0.184 ≤ sum ≤ 0.368 + 0.184 = 0.552. The true sum, about 0.405, sits inside.

## When the integral test does not fit

- **Terms that change sign**, such as (−1)ⁿ/n or (sin n)/n². f is not positive. Use the tests of Topics 10.7 and 10.9.
- **Terms that wobble**, such as (2 + cos n)/n². These are positive but not decreasing. A comparison test (Topic 10.6) is the right tool.
- **No usable f or antiderivative**, for example 1/n! (n! has no simple formula for non-whole x) or e^(−n²) (e^(−x²) has no elementary antiderivative). Even where the conditions hold, you cannot evaluate the integral. Choose another test.

## Common misconceptions

- **"The series converges to the value of the integral."** No. In Worked example 1 the integral is 1/(2e) ≈ 0.184 but the sum is about 0.405.
- **Skipping the conditions.** Write "f is positive, continuous and decreasing for x ≥ N" and show why, especially "decreasing".
- **Thinking "decreasing" must hold from n = 1.** It only has to hold from some N onwards (Worked example 2).
- **Using the test on terms that are not positive**, such as an alternating series.
- **Stopping at the antiderivative.** The integral is improper. You must take the limit as b → ∞.
- **Saying "the integral converges because f(x) → 0".** That is the same mistake as in Topic 10.3. In Worked example 2, f(x) → 0 but the integral diverges.
- **Mixing up the conclusions.** A divergent integral means a divergent series, and a convergent integral means a convergent series. Neither direction gives the sum.

## Where this leads

The integral test proves the most useful family of results in the unit: the p-series rule, which says when ∑ 1/nᵖ converges. Continue with [Topic 10.5, Harmonic Series and p-Series](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-study-guide/), or see the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-checklist/) to consolidate.
