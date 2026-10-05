---
resourceId: "mb-ap-calcbc-10.9-study-guide"
title: "Determining Absolute or Conditional Convergence: Study Guide (Calculus BC 10.9)"
description: "Learn to classify a series as absolutely convergent, conditionally convergent or divergent, why absolute convergence implies convergence, and why it lets you reorder terms safely."
course: "calculus-bc"
unit: 10
topics: ["10.9"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "The nth term test for divergence (Topic 10.3)"
  - "The integral test, p-series and the harmonic series (Topics 10.4 and 10.5)"
  - "The comparison and limit comparison tests (Topic 10.6)"
  - "The alternating series test (Topic 10.7) and the ratio test (Topic 10.8)"
prerequisiteResources: ["mb-ap-calcbc-10.8-study-guide"]
learningObjectives:
  - "Define absolute convergence, conditional convergence and divergence in terms of Σ aₙ and Σ |aₙ|"
  - "Classify a series by testing Σ |aₙ| first and then, if needed, Σ aₙ itself"
  - "Explain why a series that converges absolutely must converge"
  - "Use absolute convergence to handle series whose signs do not simply alternate"
  - "Explain why only an absolutely convergent series can be regrouped or reordered without changing its sum"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "stretch"
calculator: "none-needed"
calculatorNote: "Classifying a series is a no-calculator skill. Show each test and check its conditions in writing; a calculator adds nothing to the justification."
related: ["mb-ap-calcbc-10.9-revision-notes", "mb-ap-calcbc-10.9-practice", "mb-ap-calcbc-10.9-checklist"]
next: "mb-ap-calcbc-10.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Absolutely convergent: Σ |aₙ| converges. Conditionally convergent: Σ aₙ converges but Σ |aₙ| diverges. Otherwise the series diverges."
  - "If Σ |aₙ| converges, then Σ aₙ converges. The reverse is false."
  - "Test Σ |aₙ| first. If it diverges, check Σ aₙ itself, usually with the alternating series test."
  - "Only an absolutely convergent series keeps the same sum when its terms are regrouped or reordered."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Absolute and conditional convergence are BC-only content, like the rest of the series tests in Unit 10."
  - question: "If Σ |aₙ| diverges, does Σ aₙ diverge?"
    answer: "Not always. Σ (−1)ⁿ⁺¹/n converges even though Σ 1/n diverges. When Σ |aₙ| diverges you must test Σ aₙ separately."
  - question: "Which tests can I use on Σ |aₙ|?"
    answer: "Any test for series of positive terms that you have learned: p-series, geometric series, comparison, limit comparison, integral and ratio tests."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Absolute and conditional convergence are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic pulls together the tests from earlier in Unit 10. If any is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| nth term test | 10.3 | Spotting divergence quickly when the terms do not approach 0 |
| Integral test, p-series, harmonic series | 10.4, 10.5 | Deciding whether Σ \|aₙ\| converges |
| Comparison and limit comparison tests | 10.6 | Comparing Σ \|aₙ\| with a known series |
| Alternating series test | 10.7 | Showing Σ aₙ converges when Σ \|aₙ\| does not |
| Ratio test | 10.8 | Testing Σ \|aₙ\| when terms contain powers or factorials |

Notation on this page: **Σ aₙ** means the infinite series a₁ + a₂ + a₃ + …, and **Σ |aₙ|** is the same series with every term replaced by its absolute value.

## Two series hiding inside one

Most of the tests you have learned (integral, comparison, limit comparison) only work for series with **positive terms**. The alternating series test handles one special sign pattern. So what do you do with a series whose terms have mixed signs?

Every series Σ aₙ comes with a partner: **Σ |aₙ|**, where every negative term is flipped to positive. The partner has positive terms, so all your positive-term tests apply to it. Comparing the two series gives three possible outcomes:

| Σ \|aₙ\| | Σ aₙ | Name |
|---|---|---|
| converges | converges (always) | **absolutely convergent** |
| diverges | converges | **conditionally convergent** |
| diverges | diverges | **divergent** |

There is no fourth row. A series cannot have Σ |aₙ| converging while Σ aₙ diverges. The next section explains why.

**"Conditionally"** is a good word for the middle row. The series converges, but only because its positive and negative terms cancel each other. Make all the terms positive and the cancellation disappears, and so does the convergence.

## Why absolute convergence implies convergence

Suppose Σ |aₙ| converges. For any number a, the value a + |a| is either 0 (if a is negative) or 2a (if a is positive or zero). So

**0 ≤ aₙ + |aₙ| ≤ 2|aₙ|** for every n.

- The series Σ 2|aₙ| converges (it is twice a convergent series).
- By the **comparison test**, Σ (aₙ + |aₙ|) converges, because its terms are non-negative and no bigger than 2|aₙ|.
- Now aₙ = (aₙ + |aₙ|) − |aₙ|. The difference of two convergent series converges, so **Σ aₙ converges**.

So you never need a separate test for Σ aₙ once you know Σ |aₙ| converges. The reverse is false: Σ |aₙ| can diverge while Σ aₙ still converges.

## A decision path

<figure>
<svg viewBox="0 0 600 430" role="img" aria-labelledby="flow109-title flow109-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flow109-title">Flowchart for classifying a series as absolutely convergent, conditionally convergent or divergent</title>
<desc id="flow109-desc">Start with the series sum of a sub n. First question: do the terms a sub n approach 0? If no, the series is divergent by the nth term test. If yes, test the series of absolute values. If the series of absolute values converges, the original series is absolutely convergent and therefore converges. If the series of absolute values diverges, ask whether the original series itself converges, usually using the alternating series test. If yes, it is conditionally convergent; if no, it is divergent. A side note says that with the ratio test on the absolute values, a limit less than 1 means absolutely convergent, a limit greater than 1 means divergent, and a limit equal to 1 gives no conclusion. Final outcomes are drawn in boxes with thick borders.</desc>
<defs><marker id="arr109" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="600" height="430" fill="#ffffff"/>
<g stroke="#1d2b44" fill="#ffffff" stroke-width="1.5">
<rect x="200" y="10" width="200" height="34" rx="17"/>
<rect x="170" y="70" width="260" height="40" rx="6"/>
<rect x="110" y="140" width="380" height="56" rx="6"/>
<rect x="320" y="250" width="250" height="56" rx="6"/>
<rect x="30" y="330" width="240" height="86" rx="6" stroke-dasharray="5 4"/>
</g>
<g stroke="#1d2b44" fill="#fdf6e3" stroke-width="3">
<rect x="470" y="70" width="120" height="40" rx="2"/>
<rect x="30" y="250" width="250" height="56" rx="2"/>
<rect x="290" y="360" width="170" height="56" rx="2"/>
<rect x="470" y="360" width="120" height="56" rx="2"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#arr109)">
<line x1="300" y1="44" x2="300" y2="68"/>
<line x1="430" y1="90" x2="468" y2="90"/>
<line x1="300" y1="110" x2="300" y2="138"/>
<line x1="170" y1="196" x2="170" y2="248"/>
<line x1="430" y1="196" x2="430" y2="248"/>
<line x1="390" y1="306" x2="390" y2="358"/>
<line x1="510" y1="306" x2="510" y2="358"/>
</g>
<g fill="#1d2b44" font-size="13" text-anchor="middle">
<text x="300" y="32">Start: the series Σ aₙ</text>
<text x="300" y="95">Do the terms aₙ approach 0?</text>
<text x="300" y="164">Test Σ |aₙ| (every term made positive)</text>
<text x="300" y="184" font-size="11">p-series, comparison, limit comparison, integral or ratio test</text>
<text x="530" y="88" font-weight="bold">Divergent</text>
<text x="530" y="103" font-size="11">(nth term test)</text>
<text x="155" y="273" font-weight="bold">Absolutely convergent</text>
<text x="155" y="293" font-size="12">so Σ aₙ converges too</text>
<text x="445" y="273">Does Σ aₙ itself converge?</text>
<text x="445" y="293" font-size="11">(usually: alternating series test)</text>
<text x="375" y="383" font-weight="bold">Conditionally</text>
<text x="375" y="401" font-weight="bold">convergent</text>
<text x="530" y="393" font-weight="bold">Divergent</text>
</g>
<g fill="#1d2b44" font-size="12">
<text x="449" y="83" text-anchor="middle">No</text>
<text x="310" y="129">Yes</text>
<text x="162" y="226" text-anchor="end">converges</text>
<text x="438" y="226">diverges</text>
<text x="382" y="337" text-anchor="end">Yes</text>
<text x="518" y="337">No</text>
<text x="42" y="350" font-weight="bold">Ratio test on |aₙ| (limit L):</text>
<text x="42" y="370">L &lt; 1: absolutely convergent</text>
<text x="42" y="388">L &gt; 1: divergent (terms do not → 0)</text>
<text x="42" y="406">L = 1: no conclusion, try another test</text>
</g>
</svg>
<figcaption>Figure 1. A decision path for classifying a series. Final outcomes have thick borders. Test Σ |aₙ| first: if it converges you are finished; if it diverges, you still have to test Σ aₙ itself.</figcaption>
</figure>

Two practical points:

- **The nth term test first saves time.** If aₙ does not approach 0, the series diverges and there is nothing more to do.
- **When the ratio test is used on |aₙ| and gives L > 1**, the series Σ aₙ diverges as well, not just Σ |aₙ|. A ratio above 1 means the sizes |aₙ| eventually grow, so aₙ cannot approach 0.

## A reference family: Σ (−1)ⁿ⁺¹/nᵖ

This one family shows all three outcomes, and you can use it for comparisons.

| Value of p | Σ \|aₙ\| = Σ 1/nᵖ | Σ (−1)ⁿ⁺¹/nᵖ | Classification |
|---|---|---|---|
| p > 1 | converges (p-series) | converges | absolutely convergent |
| 0 < p ≤ 1 | diverges (p-series) | converges (alternating series test) | conditionally convergent |
| p ≤ 0 | diverges | diverges (terms do not → 0) | divergent |

For example, Σ (−1)ⁿ⁺¹/n² is absolutely convergent, Σ (−1)ⁿ⁺¹/√n is conditionally convergent, and Σ (−1)ⁿ⁺¹ (where p = 0) diverges.

## Worked example 1: a conditionally convergent series

**Question.** Determine whether Σ from n = 1 to ∞ of (−1)ⁿ (n + 2)/(n² + 3) converges absolutely, converges conditionally or diverges. Justify your answer.

1. **Terms approach 0?** (n + 2)/(n² + 3) → 0 as n → ∞ (degree 1 over degree 2). So the nth term test gives no conclusion; keep going.
2. **Test Σ |aₙ| = Σ (n + 2)/(n² + 3).** For large n this behaves like n/n² = 1/n. Use the **limit comparison test** with bₙ = 1/n:
   lim as n → ∞ of [(n + 2)/(n² + 3)] ÷ (1/n) = lim of (n² + 2n)/(n² + 3) = **1**.
   The limit is finite and positive, and Σ 1/n is the harmonic series, which diverges. So **Σ |aₙ| diverges**. The series is **not** absolutely convergent.
3. **Test Σ aₙ itself with the alternating series test.** Let bₙ = (n + 2)/(n² + 3) > 0. Check all three conditions:
   - The signs alternate because of (−1)ⁿ. ✓
   - **bₙ → 0** (step 1). ✓
   - **bₙ is decreasing.** Let f(x) = (x + 2)/(x² + 3). Then f′(x) = (−x² − 4x + 3)/(x² + 3)². At x = 1 the numerator is −1 − 4 + 3 = −2, and −x² − 4x + 3 only gets more negative as x grows. So f′(x) < 0 for x ≥ 1 and the terms decrease. ✓ (Check: b₁ = 3/4, b₂ = 4/7 ≈ 0.571, b₃ = 5/12 ≈ 0.417, b₄ = 6/19 ≈ 0.316.)
   So **Σ aₙ converges**.
4. **Conclusion.** The series converges, but the series of absolute values diverges. So Σ (−1)ⁿ (n + 2)/(n² + 3) is **conditionally convergent**.

**What to write.** Name each test, check every condition, and state both results: "Σ |aₙ| diverges by limit comparison with the harmonic series; Σ aₙ converges by the alternating series test; therefore conditionally convergent."

## Worked example 2: signs that do not alternate

**Question.** Does Σ from n = 1 to ∞ of cos(n)/n^(3/2) converge? Classify it.

1. **Look at the signs.** cos 1 ≈ 0.540, cos 2 ≈ −0.416, cos 3 ≈ −0.990, cos 4 ≈ −0.654. For n = 1 to 10 the sign pattern is + − − − + + + − − −. This is **not** an alternating series, so the alternating series test cannot be used.
2. **Use absolute values instead.** Since |cos n| ≤ 1 for every n,
   **0 ≤ |cos(n)/n^(3/2)| ≤ 1/n^(3/2)**.
3. **Compare.** Σ 1/n^(3/2) is a p-series with p = 3/2 > 1, so it converges. By the **comparison test**, Σ |cos(n)/n^(3/2)| converges.
4. **Conclusion.** The series is **absolutely convergent**, so it converges.

**Why this example matters.** Without absolute convergence there would be no test on this course that could handle these irregular signs. Testing Σ |aₙ| turns a mixed-sign problem into a positive-term problem.

## Worked example 3: the ratio test on |aₙ|

The ratio test (Topic 10.8) uses |aₙ₊₁/aₙ|, so it is really a test on Σ |aₙ|. When it gives L < 1, it proves **absolute** convergence.

**(a)** Classify Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ n²/3ⁿ.

- |aₙ₊₁/aₙ| = [(n + 1)²/3ⁿ⁺¹] × [3ⁿ/n²] = (n + 1)²/(3n²).
- As n → ∞, this approaches **1/3**.
- L = 1/3 < 1, so Σ |aₙ| converges. The series is **absolutely convergent**.

**(b)** Classify Σ from n = 1 to ∞ of (−1)ⁿ 3ⁿ/n².

- |aₙ₊₁/aₙ| = [3ⁿ⁺¹/(n + 1)²] × [n²/3ⁿ] = 3n²/(n + 1)², which approaches **3**.
- L = 3 > 1. The sizes |aₙ| grow without bound (3, 9/4, 3, 81/16, 243/25, …), so aₙ does not approach 0. The series **diverges** by the nth term test. It is not conditionally convergent: there is no cancellation that could rescue it.

## Regrouping and reordering terms

For a finite sum, order never matters. For an infinite series, it can.

**Absolutely convergent series behave like finite sums.** If Σ aₙ converges absolutely, then you can **regroup** the terms (add brackets) or **rearrange** them (change their order), and the new series converges to the **same** value. This is why manipulating an absolutely convergent series is safe.

**Conditionally convergent series do not.** Their convergence depends on the positive and negative terms cancelling in a particular order. Change the order and the cancellation changes.

*Background (beyond what is assessed).* The alternating harmonic series 1 − 1/2 + 1/3 − 1/4 + … converges to ln 2 ≈ 0.6931. Use exactly the same terms, but take two positive terms, then one negative term: 1 + 1/3 − 1/2 + 1/5 + 1/7 − 1/4 + … . This rearranged series converges to (3/2) ln 2 ≈ 1.0397. Same terms, different order, different sum. In fact, a theorem of Riemann says that a conditionally convergent series can be reordered to give **any** sum you like, or to diverge.

What you need for the exam is the safe direction: **absolute convergence guarantees that regrouping or reordering does not change the value.**

## Common misconceptions

- **"If Σ |aₙ| diverges, then Σ aₙ diverges."** False. Σ (−1)ⁿ⁺¹/n converges although Σ 1/n diverges. You must test Σ aₙ separately.
- **"If Σ aₙ converges, then Σ |aₙ| converges."** False for the same reason. Only the other direction is true.
- **"Conditionally convergent" means "might converge".** No. A conditionally convergent series **does** converge. The word describes **why** it converges (cancellation), not whether.
- **Using the alternating series test on irregular signs.** The test needs strictly alternating signs. For a series like Σ cos(n)/n^(3/2), test the absolute values instead.
- **Forgetting the absolute value bars.** Write Σ |aₙ| and |aₙ₊₁/aₙ|. A ratio test with signs left in can give a negative "limit".
- **Stopping after Σ |aₙ| diverges.** That only rules out absolute convergence. The classification is not finished until you have tested Σ aₙ.
- **Skipping the conditions of the alternating series test.** State that the terms decrease and approach 0, and show why.
- **Reordering a conditionally convergent series.** Its sum can change. Only reorder or regroup when the series converges absolutely.

## Where this leads

Next, Topic 10.10 shows how to bound the error when you stop an alternating series after a finite number of terms. Continue with [Topic 10.10, Alternating Series Error Bound](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-study-guide/). Absolute and conditional convergence return in Topic 10.13, where the endpoints of an interval of convergence are often exactly this kind of question. See the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-checklist/) to consolidate.
