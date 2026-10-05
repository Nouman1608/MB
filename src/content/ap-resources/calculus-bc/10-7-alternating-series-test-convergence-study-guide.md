---
resourceId: "mb-ap-calcbc-10.7-study-guide"
title: "Alternating Series Test for Convergence: Study Guide (Calculus BC 10.7)"
description: "Learn the alternating series test: its two conditions, why the partial sums settle down, how to show terms decrease, and how to write a full justification."
course: "calculus-bc"
unit: 10
topics: ["10.7"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Limits of sequences, including limits at infinity and L'Hospital's Rule (Topics 1.15 and 4.7)"
  - "Using the sign of a derivative to decide where a function decreases (Topic 5.3)"
  - "Partial sums and the meaning of convergence of a series (Topic 10.1)"
  - "The nth term test for divergence (Topic 10.3)"
prerequisiteResources: ["mb-ap-calcbc-10.6-study-guide"]
learningObjectives:
  - "Recognise an alternating series, including one written with cos(nπ)"
  - "State the two conditions of the alternating series test and check each one"
  - "Show that a sequence of terms is decreasing, from some point on, by algebra or by a derivative"
  - "Explain why the test can show convergence but never divergence"
  - "Write a complete justification that names the test and verifies its conditions"
skills: ["3"]
studyMinutes: 45
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Series tests are no-calculator reasoning. A calculator can help you list a few terms to see a pattern, but it cannot prove that terms decrease or tend to 0."
related: ["mb-ap-calcbc-10.7-revision-notes", "mb-ap-calcbc-10.7-practice", "mb-ap-calcbc-10.7-checklist"]
next: "mb-ap-calcbc-10.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "An alternating series has terms whose signs switch every time: (−1)ⁿ aₙ or (−1)ⁿ⁺¹ aₙ with every aₙ > 0."
  - "Alternating series test: if aₙ decreases (at least from some n on) and lim aₙ = 0, the series converges."
  - "The test can only show convergence. If a condition fails, it tells you nothing; try another test."
  - "If lim aₙ ≠ 0, the series diverges by the nth term test, not by the alternating series test."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Infinite series, including the alternating series test, are BC-only content."
  - question: "Do the terms have to decrease from the very first term?"
    answer: "No. Changing or removing finitely many terms does not affect convergence, so it is enough that aₙ₊₁ ≤ aₙ for all n from some point on. Say where the decrease starts."
  - question: "Does the alternating series test tell me the sum?"
    answer: "No. It only tells you that the sum exists. Estimating the sum, and bounding the error, comes in Topic 10.10."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** The alternating series test is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Limits at infinity and L'Hospital's Rule | 1.15, 4.7 | Showing that aₙ → 0 |
| Sign of a derivative | 5.3 | Showing that aₙ decreases |
| Partial sums and convergence | 10.1 | Understanding why the test works |
| nth term test for divergence | 10.3 | What to do when aₙ does not tend to 0 |

Notation on this page: **Σ from n = 1 to ∞ of bₙ** is the series b₁ + b₂ + b₃ + …, and **Sₙ** is its nth partial sum, the total of the first n terms. The series converges when Sₙ approaches a finite limit.

## What an alternating series is

A series is **alternating** when its terms switch sign every time: +, −, +, −, … or −, +, −, +, … You can write it as

**Σ (−1)ⁿ⁺¹ aₙ = a₁ − a₂ + a₃ − a₄ + …** or **Σ (−1)ⁿ aₙ = −a₁ + a₂ − a₃ + …**

where every **aₙ is positive**. The factor (−1)ⁿ or (−1)ⁿ⁺¹ carries the sign; aₙ carries the size.

Watch for disguised forms:

- **cos(nπ) = (−1)ⁿ**, because cos π = −1, cos 2π = 1, cos 3π = −1, and so on.
- **(−1)²ⁿ = 1** for every n. A series with (−1)²ⁿ is **not** alternating.
- A series such as Σ sin(n)/n² has terms of both signs, but not in a strict +, −, + pattern. It is not an alternating series, so this test does not apply.

The test examines only the positive part aₙ. So your first job is always to split each term into a sign factor and a positive size.

## The alternating series test

> **Alternating series test.** Suppose aₙ > 0 for every n. If
> 1. the terms **decrease**: aₙ₊₁ ≤ aₙ for all n from some point on, and
> 2. the terms **tend to zero**: lim (n → ∞) aₙ = 0,
>
> then Σ (−1)ⁿ aₙ and Σ (−1)ⁿ⁺¹ aₙ both **converge**.

Two features of this test matter most:

- **Both conditions are needed.** Check and state each one.
- **It is a one-way test.** If both conditions hold, the series converges. If a condition fails, the test gives **no conclusion**. It never proves divergence.

### Why it works

Take the alternating harmonic series, Σ (−1)ⁿ⁺¹ / n = 1 − ½ + ⅓ − ¼ + … Here aₙ = 1/n, which decreases and tends to 0.

Follow the partial sums:

- S₁ = 1. Then you step **down** by ½: S₂ = 0.5.
- Step **up** by ⅓: S₃ ≈ 0.833. Step down by ¼: S₄ ≈ 0.583.
- Each step is **smaller** than the one before, because aₙ decreases. So every step back overshoots less than the last.

The odd partial sums S₁, S₃, S₅, … keep falling. The even partial sums S₂, S₄, S₆, … keep rising. Every even sum stays below every odd sum. The gap between neighbours is the next step size, aₙ₊₁, and that gap tends to 0. The two sets of partial sums are squeezed together, so they approach one limit.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="alt-title alt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="alt-title">Partial sums of the alternating harmonic series closing in on a limit</title>
<desc id="alt-desc">Graph of the partial sum Sₙ against n for n = 1 to 10 for the series 1 − 1/2 + 1/3 − 1/4 and so on. Odd partial sums, drawn as open triangles, are above a dashed horizontal line at about 0.693 and fall: 1, 0.833, 0.783, 0.760, 0.746. Even partial sums, drawn as filled circles, are below the line and rise: 0.5, 0.583, 0.617, 0.635, 0.646. A thin line joins the points in order, making a zigzag that narrows towards the dashed line.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<line x1="60" y1="290" x2="545" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="300" x2="60" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="56" y1="250" x2="64" y2="250"/><line x1="56" y1="210" x2="64" y2="210"/><line x1="56" y1="170" x2="64" y2="170"/><line x1="56" y1="130" x2="64" y2="130"/><line x1="56" y1="90" x2="64" y2="90"/><line x1="56" y1="50" x2="64" y2="50"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="254">0.5</text><text x="52" y="214">0.6</text><text x="52" y="174">0.7</text><text x="52" y="134">0.8</text><text x="52" y="94">0.9</text><text x="52" y="54">1.0</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="306">1</text><text x="130" y="306">2</text><text x="180" y="306">3</text><text x="230" y="306">4</text><text x="280" y="306">5</text><text x="330" y="306">6</text><text x="380" y="306">7</text><text x="430" y="306">8</text><text x="480" y="306">9</text><text x="530" y="306">10</text>
<text x="300" y="325" font-size="13">number of terms n</text>
</g>
<text x="18" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 170)">partial sum Sₙ</text>
<line x1="60" y1="172.7" x2="545" y2="172.7" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="540" y="166" font-size="12" fill="#1d2b44" text-anchor="end">limit ≈ 0.693</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="1" points="80,50 130,250 180,116.7 230,216.7 280,136.7 330,203.3 380,146.2 430,196.2 480,151.7 530,191.7"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.8">
<polygon points="80,43 74,55 86,55"/><polygon points="180,109.7 174,121.7 186,121.7"/><polygon points="280,129.7 274,141.7 286,141.7"/><polygon points="380,139.2 374,151.2 386,151.2"/><polygon points="480,144.7 474,156.7 486,156.7"/>
</g>
<g fill="#1d2b44">
<circle cx="130" cy="250" r="5"/><circle cx="230" cy="216.7" r="5"/><circle cx="330" cy="203.3" r="5"/><circle cx="430" cy="196.2" r="5"/><circle cx="530" cy="191.7" r="5"/>
</g>
<rect x="300" y="40" width="235" height="46" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<polygon points="316,51 310,61 322,61" fill="#ffffff" stroke="#1d2b44" stroke-width="1.8"/>
<text x="330" y="60" font-size="12" fill="#1d2b44">odd n: S₁, S₃, … fall</text>
<circle cx="316" cy="75" r="5" fill="#1d2b44"/>
<text x="330" y="79" font-size="12" fill="#1d2b44">even n: S₂, S₄, … rise</text>
</svg>
<figcaption>Figure 1. Partial sums of 1 − ½ + ⅓ − ¼ + … Odd partial sums (open triangles) fall and even partial sums (filled circles) rise. Each swing is smaller than the last, so the zigzag narrows onto one limit (the dashed line, about 0.693).</figcaption>
</figure>

Background (not needed for the exam): the limit of this series is ln 2 ≈ 0.693. The test itself only tells you that a limit exists.

This picture also shows why the test needs **both** conditions. If the steps did not shrink to 0, the zigzag could not close up. If the steps were not getting smaller, an up-step could be bigger than the step before it, and the partial sums could drift away.

## Showing that the terms decrease

Condition 1 needs a reason, not just a few listed terms. Three common methods:

1. **Compare directly.** For aₙ = 1/(2n + 7): 2(n + 1) + 7 > 2n + 7, so aₙ₊₁ < aₙ. A bigger denominator with the same positive numerator gives a smaller fraction.
2. **Use a derivative.** Write aₙ = f(n) for a function f defined for x ≥ 1. If f′(x) < 0 for x ≥ N, then f decreases there, so aₙ₊₁ ≤ aₙ for n ≥ N.
3. **Use a ratio or difference.** Show aₙ₊₁/aₙ ≤ 1, or aₙ₊₁ − aₙ ≤ 0.

**"From some point on" is enough.** Removing or changing finitely many terms can change the sum, but not whether the series converges. So if the terms rise at first and then decrease for good, the test still applies. State the value of n where the decrease begins.

## Worked example 1: terms that decrease only eventually

**Question.** Determine whether Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ √n/(n + 5) converges. Justify your answer.

1. **Identify the form.** The series is alternating with aₙ = √n/(n + 5), and aₙ > 0 for every n ≥ 1.
2. **Look at the first terms.** a₁ ≈ 0.167, a₂ ≈ 0.202, a₃ ≈ 0.217, a₄ ≈ 0.222, a₅ ≈ 0.224, a₆ ≈ 0.223. The terms **rise** until n = 5 and then fall. A list cannot prove the fall continues, so use a derivative.
3. **Differentiate.** Let f(x) = √x/(x + 5) for x > 0. By the quotient rule,
   **f′(x) = [(x + 5)/(2√x) − √x] / (x + 5)² = (5 − x) / [2√x (x + 5)²]**.
   The denominator is positive, so f′(x) < 0 when x > 5. So f decreases on [5, ∞), and **aₙ₊₁ ≤ aₙ for all n ≥ 5**.
4. **Find the limit.** Divide the numerator and denominator by n:
   **lim aₙ = lim (1/√n)/(1 + 5/n) = 0/1 = 0**.
5. **Conclude.** For n ≥ 5 the terms aₙ are positive, decreasing and tend to 0. By the alternating series test, **the series converges**.

**Check the reasoning.** Without the sign factor, Σ √n/(n + 5) behaves like Σ 1/√n (a limit comparison gives a ratio limit of 1), and that p-series diverges. So the alternation is what makes this series converge. Topic 10.9 names this situation "conditional convergence".

## Worked example 2: when the test does and does not apply

**Question.** For each series, decide whether it converges or diverges, and name the test you use.

**(a) Σ from n = 1 to ∞ of (−1)ⁿ · 2n/(3n + 1)**

1. The series is alternating with aₙ = 2n/(3n + 1).
2. **Check the limit first.** lim aₙ = lim 2/(3 + 1/n) = **2/3**, not 0.
3. Condition 2 fails, so the alternating series test **gives no conclusion**. Do not write "diverges by the alternating series test".
4. **Use the nth term test instead.** The terms (−1)ⁿ aₙ swing between values near −2/3 and +2/3 (−0.5, 0.571, −0.6, 0.615, …), so lim (−1)ⁿ aₙ does not exist and in particular is not 0. By the **nth term test**, the series **diverges**.

**(b) Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ n²/2ⁿ**

1. The series is alternating with aₙ = n²/2ⁿ > 0.
2. **Terms:** a₁ = ½, a₂ = 1, a₃ = 9/8, a₄ = 1, a₅ = 25/32, a₆ = 9/16. They rise to n = 3, then fall.
3. **Decreasing.** Let g(x) = x²/2ˣ. Then g′(x) = [2x − x² ln 2]/2ˣ = x(2 − x ln 2)/2ˣ. For x > 2/ln 2 ≈ 2.885, the bracket is negative, so g′(x) < 0. So **aₙ₊₁ ≤ aₙ for n ≥ 3**.
4. **Limit.** This is ∞/∞, so use L'Hospital's Rule twice:
   lim x²/2ˣ = lim 2x/(2ˣ ln 2) = lim 2/(2ˣ (ln 2)²) = **0**.
5. **Conclude.** For n ≥ 3, aₙ is positive, decreasing and tends to 0, so **the series converges by the alternating series test**.

**What to notice.** In (a) the first check, the limit, ended the test, and you had to switch tests. In (b) both conditions needed real work. A good habit is to **check the limit first**: if it is not 0, go straight to the nth term test.

## Writing a full justification

A complete justification has four parts:

1. Name the positive part: "This is an alternating series with aₙ = … > 0."
2. Show aₙ decreases, with a reason, and say from which n.
3. Show lim aₙ = 0, with working.
4. Conclude by naming the test: "Therefore the series converges by the alternating series test."

Saying "the terms get smaller" with no reason, or skipping the conclusion, leaves the argument incomplete.

## Common misconceptions

- **"The terms go to 0, so it converges."** Both conditions matter. The series ½ − 1/9 + ¼ − 1/81 + 1/6 − 1/729 + … (aₙ = 1/(n + 1) for odd n, 1/3ⁿ for even n) has terms that tend to 0 but do not decrease. It diverges: the positive terms ½ + ¼ + 1/6 + … are half the harmonic series, while the negative terms add to only 1/8.
- **"A condition failed, so the series diverges."** The alternating series test never proves divergence. Use the nth term test (or another test) to show divergence.
- **"The terms must decrease from n = 1."** Decreasing from some point on is enough, as long as you say where it starts.
- **"A few listed terms prove the terms decrease."** A list suggests a pattern. A derivative or an inequality proves it.
- **Treating (−1)²ⁿ as alternating.** (−1)²ⁿ = 1, so the series has no sign changes.
- **Putting the sign inside aₙ.** aₙ must be positive. Check the conditions on the size, not on the signed term.
- **"Convergence by this test means Σ aₙ also converges."** Σ (−1)ⁿ⁺¹/n converges, but Σ 1/n diverges. That difference is the subject of Topic 10.9.

## Where this leads

Next, Topic 10.8 introduces the ratio test, which handles series with factorials and powers such as 3ⁿ: see the [ratio test study guide](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-study-guide/). Topic 10.9 uses the alternating series test to separate absolute from conditional convergence, and Topic 10.10 shows how to bound the error when you stop an alternating series after n terms. The previous topic, [comparison tests](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-study-guide/), is the tool you need for the "without the signs" checks above. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-checklist/) to consolidate.
