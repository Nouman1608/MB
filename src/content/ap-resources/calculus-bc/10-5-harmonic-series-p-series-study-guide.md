---
resourceId: "mb-ap-calcbc-10.5-study-guide"
title: "Harmonic Series and p-Series: Study Guide (Calculus BC 10.5)"
description: "Learn the p-series rule (converges only when p > 1), why the harmonic series diverges although its terms shrink to 0, the alternating harmonic series, and how to spot p-series in disguise."
course: "calculus-bc"
unit: 10
topics: ["10.5"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Partial sums and what it means for a series to converge (Topic 10.1)"
  - "Geometric series (Topic 10.2)"
  - "The nth term test for divergence (Topic 10.3)"
  - "The integral test and improper integrals of x^(−p) (Topics 10.4 and 6.13)"
prerequisiteResources: ["mb-ap-calcbc-10.4-study-guide"]
learningObjectives:
  - "Recognise the harmonic series, the alternating harmonic series and p-series, and say whether each converges"
  - "Decide whether a p-series converges by checking whether p > 1, after rewriting the terms as a single power of n"
  - "Explain why the harmonic series diverges even though its terms approach 0"
  - "Justify the p-series rule using the integral test"
  - "Use constant multiples, shifts of the index and sums of series to classify series built from p-series"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Deciding convergence is a no-calculator skill. A calculator only helps you find partial sums as decimals; give decimals to 3 decimal places."
related: ["mb-ap-calcbc-10.5-revision-notes", "mb-ap-calcbc-10.5-practice", "mb-ap-calcbc-10.5-checklist"]
next: "mb-ap-calcbc-10.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "A p-series ∑ 1/nᵖ converges when p > 1 and diverges when p ≤ 1."
  - "The harmonic series ∑ 1/n (p = 1) diverges, even though 1/n → 0. Terms going to 0 is not enough."
  - "The alternating harmonic series 1 − 1/2 + 1/3 − 1/4 + … converges. The signs make the difference."
  - "Rewrite the terms as one power of n before you read off p. Multiplying by a non-zero constant or changing the first index does not change convergence."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Series are BC-only content. AB students can skip this page."
  - question: "Do I need to know the sum of a convergent p-series?"
    answer: "No. You need to decide whether it converges. There is no simple formula for the sum in general. One famous value, ∑ 1/n² = π²/6, is background only."
  - question: "Is ∑ 1/2ⁿ a p-series?"
    answer: "No. In a p-series the variable n is in the base and the power is fixed. In ∑ 1/2ⁿ the power is the variable, so it is a geometric series with ratio 1/2."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Harmonic series and p-series are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic builds directly on the integral test. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Partial sums and convergence | 10.1 | A series converges when its partial sums Sₙ approach a finite limit |
| Geometric series | 10.2 | Telling a geometric series apart from a p-series |
| nth term test | 10.3 | Dealing with p ≤ 0, and seeing why it says nothing about ∑ 1/n |
| Integral test; improper integrals | [10.4](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/), 6.13 | Proving the p-series rule |

Notation on this page: ∑ 1/nᵖ means the sum from n = 1 to ∞ unless another starting value is given. Sₙ is the nth partial sum, the sum of the first n terms.

## Three named series

After geometric series, three more series appear again and again in this unit. You should recognise each one on sight and know its behaviour without working it out each time.

| Name | Series | Behaviour |
|---|---|---|
| Harmonic series | ∑ 1/n = 1 + 1/2 + 1/3 + 1/4 + … | **Diverges** |
| p-series | ∑ 1/nᵖ = 1 + 1/2ᵖ + 1/3ᵖ + … (p a constant) | **Converges if p > 1; diverges if p ≤ 1** |
| Alternating harmonic series | ∑ (−1)ⁿ⁺¹/n = 1 − 1/2 + 1/3 − 1/4 + … | **Converges** |

The harmonic series is the p-series with p = 1. So the boundary case of the p-series rule is the harmonic series, and it falls on the divergent side.

## The p-series rule and why it is true

**Rule.** The p-series ∑ 1/nᵖ converges if p > 1 and diverges if p ≤ 1.

**Why, for p > 0.** The function f(x) = 1/xᵖ is positive, continuous and decreasing for x ≥ 1, so the integral test from Topic 10.4 applies. The series and the improper integral ∫ from 1 to ∞ of x^(−p) dx either both converge or both diverge.

- **p > 1:** ∫ from 1 to b of x^(−p) dx = [x^(1−p)/(1 − p)] from 1 to b = (b^(1−p) − 1)/(1 − p). Because 1 − p < 0, b^(1−p) → 0 as b → ∞. The integral converges to **1/(p − 1)**. So the series converges.
- **p = 1:** ∫ from 1 to b of 1/x dx = ln b, which grows without bound. The integral diverges, so the harmonic series diverges.
- **0 < p < 1:** 1 − p > 0, so b^(1−p) → ∞. The integral diverges, so the series diverges.

For example, ∫ from 1 to ∞ of x^(−2) dx = 1 and ∫ from 1 to ∞ of x^(−3/2) dx = 2, while ∫ from 1 to ∞ of x^(−1/2) dx diverges.

**Careful:** the integral's value is not the series' sum. The integral test only tells you *whether* the series converges.

**Why, for p ≤ 0.** Now 1/nᵖ = n^(−p) does not approach 0. For p = 0 every term is 1; for p < 0 the terms grow. The nth term test (Topic 10.3) shows divergence straight away.

## Seeing the partial sums

The graph shows the first 12 partial sums of three series. Look at how differently they behave.

<figure>
<svg viewBox="0 0 560 345" role="img" aria-labelledby="ps105-title ps105-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ps105-title">Partial sums of the harmonic series, the p-series with p = 2, and the alternating harmonic series, n = 1 to 12</title>
<desc id="ps105-desc">Graph of partial sum Sₙ against n from 1 to 12. Harmonic series partial sums, drawn as circles joined by a solid line, rise steadily from 1 to about 3.10 at n = 12 and keep climbing. Partial sums of the sum of 1 over n squared, drawn as squares joined by a solid line, rise from 1 to about 1.57 and level off below a dashed line at pi squared over 6, about 1.645. Alternating harmonic partial sums, drawn as triangles joined by a dotted line, zigzag between about 0.5 and 1, closing in on a dashed line at ln 2, about 0.693.</desc>
<rect x="0" y="0" width="560" height="345" fill="#ffffff"/>
<line x1="50" y1="300" x2="520" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="50" y1="310" x2="50" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="46" y1="220" x2="54" y2="220"/><line x1="46" y1="140" x2="54" y2="140"/><line x1="46" y1="60" x2="54" y2="60"/>
<line x1="60" y1="296" x2="60" y2="304"/><line x1="100" y1="296" x2="100" y2="304"/><line x1="140" y1="296" x2="140" y2="304"/><line x1="180" y1="296" x2="180" y2="304"/><line x1="220" y1="296" x2="220" y2="304"/><line x1="260" y1="296" x2="260" y2="304"/><line x1="300" y1="296" x2="300" y2="304"/><line x1="340" y1="296" x2="340" y2="304"/><line x1="380" y1="296" x2="380" y2="304"/><line x1="420" y1="296" x2="420" y2="304"/><line x1="460" y1="296" x2="460" y2="304"/><line x1="500" y1="296" x2="500" y2="304"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="318">1</text><text x="100" y="318">2</text><text x="140" y="318">3</text><text x="180" y="318">4</text><text x="220" y="318">5</text><text x="260" y="318">6</text><text x="300" y="318">7</text><text x="340" y="318">8</text><text x="380" y="318">9</text><text x="420" y="318">10</text><text x="460" y="318">11</text><text x="500" y="318">12</text>
<text x="290" y="338" font-size="13">number of terms n</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="42" y="304">0</text><text x="42" y="224">1</text><text x="42" y="144">2</text><text x="42" y="64">3</text>
</g>
<text x="16" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 16 170)">partial sum Sₙ</text>
<line x1="50" y1="168.4" x2="520" y2="168.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<line x1="50" y1="244.5" x2="520" y2="244.5" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="60,220.0 100,180.0 140,153.3 180,133.3 220,117.3 260,104.0 300,92.6 340,82.6 380,73.7 420,65.7 460,58.4 500,51.7"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<circle cx="100" cy="180.0" r="4"/><circle cx="140" cy="153.3" r="4"/><circle cx="180" cy="133.3" r="4"/><circle cx="220" cy="117.3" r="4"/><circle cx="260" cy="104.0" r="4"/><circle cx="300" cy="92.6" r="4"/><circle cx="340" cy="82.6" r="4"/><circle cx="380" cy="73.7" r="4"/><circle cx="420" cy="65.7" r="4"/><circle cx="460" cy="58.4" r="4"/><circle cx="500" cy="51.7" r="4"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="60,220.0 100,200.0 140,191.1 180,186.1 220,182.9 260,180.7 300,179.1 340,177.8 380,176.8 420,176.0 460,175.4 500,174.8"/>
<g fill="#1d2b44">
<rect x="96" y="196.0" width="8" height="8"/><rect x="136" y="187.1" width="8" height="8"/><rect x="176" y="182.1" width="8" height="8"/><rect x="216" y="178.9" width="8" height="8"/><rect x="256" y="176.7" width="8" height="8"/><rect x="296" y="175.1" width="8" height="8"/><rect x="336" y="173.8" width="8" height="8"/><rect x="376" y="172.8" width="8" height="8"/><rect x="416" y="172.0" width="8" height="8"/><rect x="456" y="171.4" width="8" height="8"/><rect x="496" y="170.8" width="8" height="8"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3" points="60,220.0 100,260.0 140,233.3 180,253.3 220,237.3 260,250.7 300,239.2 340,249.2 380,240.3 420,248.3 460,241.1 500,247.7"/>
<g fill="#1d2b44">
<path d="M100 255 L105 264 L95 264 Z"/><path d="M140 228.3 L145 237.3 L135 237.3 Z"/><path d="M180 248.3 L185 257.3 L175 257.3 Z"/><path d="M220 232.3 L225 241.3 L215 241.3 Z"/><path d="M260 245.7 L265 254.7 L255 254.7 Z"/><path d="M300 234.2 L305 243.2 L295 243.2 Z"/><path d="M340 244.2 L345 253.2 L335 253.2 Z"/><path d="M380 235.3 L385 244.3 L375 244.3 Z"/><path d="M420 243.3 L425 252.3 L415 252.3 Z"/><path d="M460 236.1 L465 245.1 L455 245.1 Z"/><path d="M500 242.7 L505 251.7 L495 251.7 Z"/>
</g>
<circle cx="60" cy="220" r="4.5" fill="#1d2b44"/>
<text x="330" y="60" font-size="12" fill="#1d2b44">○ harmonic ∑ 1/n: keeps rising</text>
<text x="300" y="160" font-size="12" fill="#1d2b44">■ ∑ 1/n²: levels off below π²/6 ≈ 1.645</text>
<text x="230" y="285" font-size="12" fill="#1d2b44">▲ alternating harmonic: zigzags in on ln 2 ≈ 0.693</text>
</svg>
<figcaption>Figure 1. Partial sums for n = 1 to 12. All three series start at S₁ = 1. The harmonic sums (circles) keep climbing; the sums of 1/n² (squares) level off under the dashed line at π²/6; the alternating harmonic sums (triangles, dotted line) zigzag towards the dashed line at ln 2. The two limit values are background facts, not something you need to find.</figcaption>
</figure>

Twelve terms cannot prove anything. The harmonic sums rise slowly, so from a table alone you might wrongly guess they level off. That is why we need a proof, not just a picture.

## Why the harmonic series diverges

The terms 1/n shrink to 0, yet the sum is infinite. Here is a proof that needs no integrals. Group the terms in blocks that double in length:

1 + 1/2 + (1/3 + 1/4) + (1/5 + 1/6 + 1/7 + 1/8) + (1/9 + … + 1/16) + …

In each block, every term is at least as big as the **last** term of the block:

- 1/3 + 1/4 ≥ 1/4 + 1/4 = 1/2
- 1/5 + 1/6 + 1/7 + 1/8 ≥ 4 × 1/8 = 1/2
- 1/9 + … + 1/16 ≥ 8 × 1/16 = 1/2

Each new block adds at least 1/2. After the first term, the term 1/2 and k − 1 full blocks, you have used 2ᵏ terms, so

> **S(2ᵏ) ≥ 1 + k/2**, where S(2ᵏ) is the sum of the first 2ᵏ terms.

As k → ∞, 1 + k/2 → ∞, so the partial sums are unbounded and the series diverges.

**How slow is it?** Very. S₁₀ ≈ 2.929, S₁₀₀ ≈ 5.187 and S₁₀₀₀ ≈ 7.485. Even one million terms give only about 14.39. The partial sums grow roughly like ln n (background: this comes from the same rectangles as the integral test). Slow growth is still growth without limit.

## The alternating harmonic series

Now change every second sign:

1 − 1/2 + 1/3 − 1/4 + 1/5 − …

The partial sums are 1, 1/2, 5/6, 7/12, 47/60, 37/60, … (about 1, 0.5, 0.833, 0.583, 0.783, 0.617). Each step goes the other way and by a smaller amount, so the sums zigzag and close in on a limit. This series **converges**. The test that proves it is the alternating series test in [Topic 10.7](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/). Its sum is ln 2 ≈ 0.693, a background fact you can check later with Taylor series.

Notice what this shows. The harmonic series and the alternating harmonic series have terms of exactly the same size. One diverges and one converges. The signs alone make the difference. In [Topic 10.9](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/) you will call this kind of convergence *conditional*.

## Recognising p-series in disguise

A series is a p-series if, after simplifying, each term is **1/nᵖ for one fixed number p** (or a constant times that). Use the laws of indices:

- √n = n^(1/2), ∛n = n^(1/3), and 1/nᵃ = n^(−a).
- nᵃ · nᵇ = n^(a+b) and nᵃ/nᵇ = n^(a−b).

Three rules let you handle near relatives of p-series.

1. **Constant multiples.** For a constant c ≠ 0, ∑ c·aₙ converges exactly when ∑ aₙ does. So ∑ 7/n³ converges and ∑ 1/(2n) = ½ ∑ 1/n diverges.
2. **Shifting the start.** Adding or removing finitely many terms does not change whether a series converges (it does change the sum). So ∑ from n = 1 of 1/(n + 5) = 1/6 + 1/7 + … is the harmonic series without its first five terms. It diverges.
3. **Adding series.** If ∑ aₙ and ∑ bₙ both converge, so does ∑ (aₙ + bₙ). If one converges and the other diverges, the sum **diverges**. (If both diverge, you cannot conclude anything from this rule alone.)

**Not a p-series:** ∑ 1/2ⁿ has the variable in the power, so it is geometric (ratio 1/2, converges). ∑ 1/(2n + 1) is not a constant times 1/nᵖ; you will handle series like that with the comparison tests in Topic 10.6.

## Worked example 1: classifying p-series

**Question.** Decide whether each series converges or diverges. Justify each answer. No calculator.

(a) ∑ 1/(n ∛n)  (b) ∑ n/n^(3/2)  (c) ∑ 5/n^0.98  (d) ∑ (√n)³/n³  (e) ∑ from n = 4 to ∞ of 1/(n − 3)  (f) ∑ n^e/n⁴

1. **(a)** n ∛n = n¹ · n^(1/3) = n^(4/3). This is a p-series with **p = 4/3 > 1**, so it **converges**.
2. **(b)** n/n^(3/2) = n^(1 − 3/2) = n^(−1/2) = 1/n^(1/2). So **p = 1/2 ≤ 1**: it **diverges**.
3. **(c)** A constant multiple (5) of a p-series with **p = 0.98**. Since 0.98 ≤ 1, it **diverges**. Being close to 1 does not help: the rule has a sharp boundary.
4. **(d)** (√n)³ = n^(3/2), so the term is n^(3/2)/n³ = 1/n^(3/2). **p = 3/2 > 1**, so it **converges**.
5. **(e)** When n = 4, 5, 6, …, the terms are 1/1, 1/2, 1/3, …. This is the harmonic series with a new label for the index. It **diverges**.
6. **(f)** n^e/n⁴ = 1/n^(4 − e). Since e ≈ 2.718, **p = 4 − e ≈ 1.282 > 1**, so it **converges**. The exponent does not need to be a whole number or even rational.

**What to write.** A full justification names the series type, gives the value of p and compares it with 1. For example: "∑ 1/n^(4/3) is a p-series with p = 4/3 > 1, so it converges."

## Worked example 2: how slowly the harmonic series grows

**Question.** Use the grouping argument to find a number of terms N that **guarantees** the harmonic partial sum Sₙ is at least 5. Then compare with the actual first n for which Sₙ ≥ 5.

1. **Use the bound.** S(2ᵏ) ≥ 1 + k/2, where S(2ᵏ) is the sum of the first 2ᵏ terms.
2. **Solve 1 + k/2 ≥ 5.** k/2 ≥ 4, so k ≥ 8.
3. **Convert to terms.** 2⁸ = 256. So **256 terms guarantee Sₙ ≥ 5**. (A calculator gives S₂₅₆ ≈ 6.124, comfortably above 5.)
4. **Compare.** Adding terms on a calculator shows the sum first reaches 5 at **n = 83**. The grouping bound is safe but generous: it throws away part of each block.
5. **Bigger targets.** The same bound guarantees Sₙ ≥ 10 after 2¹⁸ = 262,144 terms. In fact you first reach 10 at n = 12,367. Either way, the sums do pass 10, and any target you choose.

**Interpretation.** You cannot see divergence from a few partial sums. The proof matters because the growth is so slow.

## Worked example 3: sums built from p-series

**Question.** Decide whether each series converges. (a) ∑ (n + 2)/n³  (b) ∑ (√n + 1)/n^(3/2)

1. **(a) Split the fraction.** (n + 2)/n³ = n/n³ + 2/n³ = 1/n² + 2/n³.
2. ∑ 1/n² converges (p = 2 > 1). ∑ 2/n³ converges (constant multiple of p = 3 > 1).
3. The sum of two convergent series converges, so **∑ (n + 2)/n³ converges**.
4. **(b) Split the fraction.** (√n + 1)/n^(3/2) = n^(1/2)/n^(3/2) + 1/n^(3/2) = 1/n + 1/n^(3/2).
5. ∑ 1/n diverges (harmonic). ∑ 1/n^(3/2) converges (p = 3/2).
6. Convergent plus divergent is divergent, so **∑ (√n + 1)/n^(3/2) diverges**.

**Check (b) with a reason.** If the series in (b) converged, then subtracting the convergent ∑ 1/n^(3/2) would leave a convergent harmonic series. That is impossible, so (b) must diverge.

## Common misconceptions

- **"The terms go to 0, so the series converges."** The harmonic series is the standard counter-example. The nth term test can only prove divergence.
- **"The nth term test shows the harmonic series diverges."** It does not: 1/n → 0, so that test is inconclusive. You need the integral test or the grouping argument.
- **Mixing up the inequality.** Convergence needs p > 1, not p ≥ 1 and not p > 0. At p = 1 the series diverges.
- **Reading p before simplifying.** In ∑ n/n^(3/2), p is not 3/2. Simplify first: the term is 1/n^(1/2).
- **Confusing p-series with geometric series.** ∑ 1/n² (variable in the base) is a p-series; ∑ 1/2ⁿ (variable in the power) is geometric.
- **Using the integral as the sum.** ∫ from 1 to ∞ of x^(−2) dx = 1, but ∑ 1/n² ≈ 1.645. The integral test decides convergence only.
- **"A convergent series plus a divergent series might converge."** It never does. The sum always diverges.
- **Thinking the alternating harmonic series diverges because ∑ 1/n does.** Changing signs can make a series converge.

## Where this leads

Harmonic series and p-series are the benchmarks for the rest of the unit. In [Topic 10.6, Comparison Tests for Convergence](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-study-guide/), you will decide about series such as ∑ 1/(n² + 3) by comparing them with a p-series. The alternating harmonic series returns in Topic 10.7 (alternating series test) and in Topic 10.9 (absolute and conditional convergence). See the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-checklist/) to consolidate.
