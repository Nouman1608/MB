---
resourceId: "mb-ap-calcbc-10.3-study-guide"
title: "The nth Term Test for Divergence: Study Guide (Calculus BC 10.3)"
description: "Learn why a series whose terms do not approach 0 must diverge, how to use the nth term test correctly, and why terms that do approach 0 tell you nothing on their own."
course: "calculus-bc"
unit: 10
topics: ["10.3"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity, including dominant terms in rational expressions (Topics 1.15 and 4.7)"
  - "L'Hospital's Rule for indeterminate forms (Topic 4.7)"
  - "Partial sums and the meaning of convergence for a series (Topic 10.1)"
  - "Geometric series and the condition |r| < 1 (Topic 10.2)"
prerequisiteResources: ["mb-ap-calcbc-10.2-study-guide"]
learningObjectives:
  - "Explain the difference between the sequence of terms and the sequence of partial sums"
  - "Show from partial sums why the terms of a convergent series must approach 0"
  - "Use the nth term test to prove that a series diverges, with a written justification"
  - "Recognise when the nth term test gives no conclusion, and say so correctly"
  - "Find the limit of the terms using algebra, dominant terms or L'Hospital's Rule"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Find every limit by hand. A calculator is only useful for seeing decimal values of a few terms or partial sums; it never proves convergence or divergence."
related: ["mb-ap-calcbc-10.3-revision-notes", "mb-ap-calcbc-10.3-practice", "mb-ap-calcbc-10.3-checklist"]
next: "mb-ap-calcbc-10.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "If the terms aₙ do not approach 0 (the limit is not 0, or does not exist), the series ∑ aₙ diverges."
  - "If aₙ → 0, the nth term test gives no conclusion. The series may converge or diverge."
  - "The test can only ever prove divergence. It never proves convergence."
  - "Write the justification in full: state the limit of the terms, compare it with 0, then conclude."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Infinite series, including the nth term test, are BC-only content."
  - question: "If the terms go to 0, does the series converge?"
    answer: "Not necessarily. Terms approaching 0 are needed for convergence but are not enough. Worked example 3 builds a series whose terms approach 0 while its partial sums grow without bound."
  - question: "Is the nth term test the same as checking whether the sequence converges?"
    answer: "No. The test looks at the limit of the terms aₙ. A sequence can converge (for example to 3/4) while the series built from it diverges."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** The nth term test is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need four earlier ideas. If any is shaky, revisit it first. The [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) shows where each one sits.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Limits at infinity and dominant terms | 1.15 | Finding the limit of a rational term such as (5n² − 2n)/(8n² + 3) |
| L'Hospital's Rule | 4.7 | Limits of the form ∞ · 0 or 1^∞, such as (1 + 2/n)ⁿ |
| Partial sums and convergence | 10.1 | The test is proved from partial sums |
| Geometric series | 10.2 | A quick source of examples; see the [Topic 10.2 study guide](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-study-guide/) |

Notation on this page: **∑ from n = 1 to ∞ of aₙ** is the infinite series a₁ + a₂ + a₃ + …. Its **nth partial sum** is **Sₙ = a₁ + a₂ + … + aₙ**. The series converges to S when Sₙ → S as n → ∞. If the partial sums have no finite limit, the series diverges.

## Two sequences, not one

Every series comes with **two** sequences. Keep them apart.

- The **sequence of terms**: a₁, a₂, a₃, …. These are the numbers you add.
- The **sequence of partial sums**: S₁, S₂, S₃, …. These are the running totals.

The series converges only if the **partial sums** settle down to a finite number. The terms settling down is a different question.

Take aₙ = 3n/(4n + 1). The terms are 0.6, 0.667, 0.692, 0.706, … and they approach 3/4. So the sequence of terms converges. But each new term adds roughly 0.75 to the running total. The partial sums are 0.6, 1.267, 1.959, 2.665, …, and by n = 10 the total is already about 7.01. The totals keep climbing by about 0.75 each step, so they cannot settle down. The series diverges.

<figure>
<svg viewBox="0 0 540 320" role="img" aria-labelledby="nterm-title nterm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="nterm-title">Terms and partial sums of the series with aₙ = 3n/(4n + 1), for n = 1 to 10</title>
<desc id="nterm-desc">Two sets of points plotted against n from 1 to 10, with a vertical scale from 0 to 8. The terms, drawn as open circles, stay close to the bottom of the graph: they start at 0.6 and creep up towards a dashed horizontal line at 0.75. The partial sums, drawn as filled squares joined by a line, rise steadily from 0.6 at n = 1 to about 7.01 at n = 10, climbing by roughly 0.75 at each step with no sign of levelling off.</desc>
<rect x="0" y="0" width="540" height="320" fill="#ffffff"/>
<line x1="70" y1="270" x2="525" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="285" x2="70" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="114" y1="266" x2="114" y2="274"/><line x1="158" y1="266" x2="158" y2="274"/><line x1="202" y1="266" x2="202" y2="274"/><line x1="246" y1="266" x2="246" y2="274"/><line x1="290" y1="266" x2="290" y2="274"/><line x1="334" y1="266" x2="334" y2="274"/><line x1="378" y1="266" x2="378" y2="274"/><line x1="422" y1="266" x2="422" y2="274"/><line x1="466" y1="266" x2="466" y2="274"/><line x1="510" y1="266" x2="510" y2="274"/>
<line x1="66" y1="215" x2="74" y2="215"/><line x1="66" y1="160" x2="74" y2="160"/><line x1="66" y1="105" x2="74" y2="105"/><line x1="66" y1="50" x2="74" y2="50"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="114" y="288">1</text><text x="158" y="288">2</text><text x="202" y="288">3</text><text x="246" y="288">4</text><text x="290" y="288">5</text><text x="334" y="288">6</text><text x="378" y="288">7</text><text x="422" y="288">8</text><text x="466" y="288">9</text><text x="510" y="288">10</text>
<text x="300" y="310" font-size="13">n</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="219">2</text><text x="62" y="164">4</text><text x="62" y="109">6</text><text x="62" y="54">8</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">value</text>
<line x1="70" y1="249.4" x2="520" y2="249.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<text x="520" y="242" font-size="12" fill="#1d2b44" text-anchor="end">aₙ → 0.75</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.5" points="114,253.5 158,235.2 202,216.1 246,196.7 290,177.1 334,157.3 378,137.4 422,117.4 466,97.3 510,77.2"/>
<g fill="#1d2b44">
<rect x="109" y="248.5" width="10" height="10"/><rect x="153" y="230.2" width="10" height="10"/><rect x="197" y="211.1" width="10" height="10"/><rect x="241" y="191.7" width="10" height="10"/><rect x="285" y="172.1" width="10" height="10"/><rect x="329" y="152.3" width="10" height="10"/><rect x="373" y="132.4" width="10" height="10"/><rect x="417" y="112.4" width="10" height="10"/><rect x="461" y="92.3" width="10" height="10"/><rect x="505" y="72.2" width="10" height="10"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<circle cx="158" cy="251.7" r="4"/><circle cx="202" cy="251.0" r="4"/><circle cx="246" cy="250.6" r="4"/><circle cx="290" cy="250.4" r="4"/><circle cx="334" cy="250.2" r="4"/><circle cx="378" cy="250.1" r="4"/><circle cx="422" cy="250.0" r="4"/><circle cx="466" cy="249.9" r="4"/><circle cx="510" cy="249.9" r="4"/>
</g>
<text x="482" y="68" font-size="12" fill="#1d2b44" text-anchor="end">S₁₀ ≈ 7.01</text>
<rect x="96" y="52" width="196" height="50" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<rect x="106" y="61" width="10" height="10" fill="#1d2b44"/>
<text x="124" y="70" font-size="12" fill="#1d2b44">partial sums Sₙ (squares)</text>
<circle cx="111" cy="88" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="124" y="92" font-size="12" fill="#1d2b44">terms aₙ (open circles)</text>
</svg>
<figcaption>Figure 1. For aₙ = 3n/(4n + 1), the terms (open circles) level off near 0.75, but the partial sums (filled squares) rise by about 0.75 each step. Terms that approach a non-zero number make the running total grow without bound. (At n = 1 the term and the partial sum are both 0.6, so only the square is visible.)</figcaption>
</figure>

## Why the terms of a convergent series must go to 0

Each term is the **difference of two neighbouring partial sums**:

**aₙ = Sₙ − Sₙ₋₁** (for n ≥ 2)

Suppose the series converges to a finite number S. Then Sₙ → S, and also Sₙ₋₁ → S, because it is the same sequence shifted by one place. So

**lim aₙ = lim Sₙ − lim Sₙ₋₁ = S − S = 0.**

That proves one fact: **if a series converges, its terms approach 0.**

Now turn the fact around (this is its *contrapositive*, which is always equally true): **if the terms do not approach 0, the series cannot converge.** That is the nth term test.

> **The nth term test for divergence.** If lim (n → ∞) of aₙ ≠ 0, or the limit does not exist, then ∑ aₙ **diverges**.
> If lim (n → ∞) of aₙ = 0, the test gives **no conclusion**.

Read the second line carefully. The test has only two possible outputs: "diverges" or "no conclusion". There is no "converges" output. The name says it: it is a test **for divergence**.

## How to use the test, step by step

1. **Identify aₙ**, the general term being added. Check where the sum starts; it does not affect the test, but you need the right formula.
2. **Find lim (n → ∞) of aₙ.** Use dominant terms for rational expressions, L'Hospital's Rule (treating n as a continuous variable x) for indeterminate forms, or known limits.
3. **Compare with 0.**
   - Limit is a non-zero number, or ±∞, or does not exist → the series **diverges** by the nth term test.
   - Limit is 0 → **no conclusion** from this test. Say so, then use another method (partial sums now; later tests in Topics 10.4 to 10.9).
4. **Write the justification.** Name the limit, say that it is not 0, name the test, and conclude.

A complete justification looks like this: "lim (n → ∞) of 3n/(4n + 1) = 3/4 ≠ 0, so by the nth term test, ∑ 3n/(4n + 1) diverges."

**Quick links with geometric series.** For ∑ a rⁿ with a ≠ 0 and |r| ≥ 1, the terms a rⁿ do not approach 0, so the series diverges by the nth term test. This explains half of the geometric series rule from Topic 10.2. The other half (convergence when |r| < 1) needs the partial-sum formula: the nth term test cannot supply it.

## Worked example 1: four series, four limits

**Question.** For each series, find the limit of the terms and state what the nth term test shows.

(a) ∑ from n = 1 to ∞ of (5n² − 2n)/(8n² + 3)
(b) ∑ from n = 1 to ∞ of (−1)ⁿ n/(3n + 2)
(c) ∑ from n = 1 to ∞ of 7/(2n + 5)
(d) ∑ from n = 1 to ∞ of (1.02)ⁿ

**(a)** The highest power of n is n² on the top and the bottom. Divide both by n²:

(5 − 2/n)/(8 + 3/n²) → 5/8 as n → ∞.

5/8 ≠ 0, so the series **diverges** by the nth term test.

**(b)** Look at the size first: n/(3n + 2) → 1/3. The sign factor (−1)ⁿ flips the sign every step. The terms are −1/5, 1/4, −3/11, 2/7, −5/17, 3/10, …. The odd terms approach −1/3 and the even terms approach +1/3. The terms do not approach a single number, so **lim aₙ does not exist**. In particular it is not 0, so the series **diverges** by the nth term test.

**(c)** 7/(2n + 5) → 0, because the denominator grows without bound. The limit is 0, so the nth term test gives **no conclusion**. Do not write "converges". (This series does in fact diverge, but you will need the integral test from Topic 10.4 to show it.)

**(d)** This is geometric with r = 1.02 > 1. The terms (1.02)ⁿ grow without bound, so lim aₙ = ∞ ≠ 0. The series **diverges** by the nth term test. (The geometric rule from Topic 10.2 gives the same answer, since |r| ≥ 1.)

**Check.** In (a), (b) and (d) the terms stay a fixed distance away from 0 for large n: about 0.625, about 0.333 in size, and more than 1. Adding infinitely many such numbers cannot give a finite total. In (c) the terms shrink, so the picture is unclear, which is why the test stays silent.

## Worked example 2: a limit that needs L'Hospital's Rule

**Question.** Does the series ∑ from n = 1 to ∞ of (1 + 2/n)ⁿ converge or diverge? Justify your answer.

1. **Identify the term.** aₙ = (1 + 2/n)ⁿ. As n → ∞, the base approaches 1 and the power grows: this is the indeterminate form 1^∞. You cannot just say "1 to any power is 1".
2. **Take logarithms.** Replace n by a continuous variable x and let y = (1 + 2/x)ˣ. Then
   **ln y = x ln(1 + 2/x) = ln(1 + 2/x) / (1/x).**
   As x → ∞, the top → ln 1 = 0 and the bottom → 0. This is 0/0, so L'Hospital's Rule applies.
3. **Differentiate top and bottom.**
   - d/dx [ln(1 + 2/x)] = (−2/x²) / (1 + 2/x).
   - d/dx [1/x] = −1/x².
   - Ratio: [(−2/x²)/(1 + 2/x)] / (−1/x²) = 2/(1 + 2/x) → 2.
4. **Undo the logarithm.** ln y → 2, so y → e². Therefore **lim aₙ = e² ≈ 7.389**.
5. **Conclude.** e² ≠ 0, so by the nth term test the series **diverges**.

**Check with numbers.** a₁ = 3, a₁₀ ≈ 6.192, a₁₀₀ ≈ 7.245, a₁₀₀₀ ≈ 7.374. The terms are creeping up towards 7.389. Adding infinitely many numbers that are bigger than 3 cannot give a finite total. ✓

**Note.** Using a continuous variable x is allowed: if f(x) → L as x → ∞ and aₙ = f(n), then aₙ → L too. (The reverse is not always true, but you only need this direction.)

## Worked example 3: terms go to 0, but the series still diverges

**Question.** A series is built in blocks. Block 1 is one copy of 1. Block 2 is two copies of 1/2. Block 3 is three copies of 1/3, and so on: block m is m copies of 1/m.

**1 + (1/2 + 1/2) + (1/3 + 1/3 + 1/3) + (1/4 + 1/4 + 1/4 + 1/4) + …**

(a) Do the terms approach 0? What does the nth term test show?
(b) Does the series converge?

**(a)** Every term in block m equals 1/m. As you go further along the series (n → ∞), you move into later and later blocks, so m → ∞ and the terms 1/m → **0**. The nth term test gives **no conclusion**.

**(b)** Look at the partial sums at the **end** of each block.

- Each block adds m copies of 1/m, which is exactly **1**.
- Blocks 1 to m use 1 + 2 + … + m = m(m + 1)/2 terms.
- So the partial sum after m(m + 1)/2 terms is exactly **m**.

For example, after 3 terms the total is 2, after 55 terms it is 10, and after 5050 terms it is 100. All the terms are positive, so the partial sums only ever go up. They pass every whole number m, so they grow without bound. The partial sums have no finite limit, and the series **diverges**.

**Interpretation.** The terms do shrink to 0, but slowly: each value 1/m appears m times, so together they always add up to 1. Shrinking terms are not enough. The total depends on how fast the terms shrink.

**The lesson.** "Terms approach 0" is **necessary** for convergence but **not sufficient**. This is exactly why the nth term test can never be used to prove that a series converges. You will meet the most famous series with this behaviour, the harmonic series ∑ 1/n, in Topic 10.5.

## Using the fact forwards

The statement behind the test, "if ∑ aₙ converges, then aₙ → 0", can also be used directly.

**Example.** You are told that ∑ aₙ converges and that aₙ ≠ −1 for all n. Find lim (n → ∞) of (5 − 2aₙ)/(1 + aₙ).

Since the series converges, aₙ → 0. The expression is continuous at 0, so the limit is (5 − 0)/(1 + 0) = **5**. You do not need to know the sum of the series, only that its terms approach 0.

## Common misconceptions

- **"The terms go to 0, so the series converges."** False. The block series in Worked example 3 has terms that approach 0 and still diverges. When aₙ → 0, write "the nth term test is inconclusive".
- **"The terms approach 3/4, so the series converges to 3/4."** This mixes up the two sequences. The terms approaching 3/4 means the *series diverges*. The sum of a series is the limit of the **partial sums**, not of the terms.
- **"The sequence converges, so the series converges."** The sequence n/(n + 1) converges (to 1), but the series ∑ n/(n + 1) diverges by the nth term test.
- **Treating "limit does not exist" as "no conclusion".** If the terms oscillate, as in Worked example 1(b), the limit is not 0, so the series diverges.
- **Getting the limit wrong in a 1^∞ form.** (1 + 2/n)ⁿ does not approach 1. It approaches e². Use logarithms and L'Hospital's Rule.
- **A justification with no limit stated.** "The terms are big, so it diverges" earns little. State the value of lim aₙ, say it is not 0, and name the test.
- **Thinking the starting index matters.** Changing where the sum starts, or removing finitely many terms, does not change lim aₙ, so it never changes the outcome of the nth term test.

## Where this leads

The nth term test is a quick first check: if the terms do not approach 0, you are done. When they do approach 0, you need a sharper tool. Topic 10.4 introduces the first one, which compares a series with an improper integral. Continue with [Topic 10.4, Integral Test for Convergence](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/), or see the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-checklist/) to consolidate.
