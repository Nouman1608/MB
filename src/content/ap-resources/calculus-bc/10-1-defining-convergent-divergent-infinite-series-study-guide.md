---
resourceId: "mb-ap-calcbc-10.1-study-guide"
title: "Defining Convergent and Divergent Infinite Series: Study Guide (Calculus BC 10.1)"
description: "Learn what an infinite series is, how partial sums are built, and how the limit of the partial sums decides whether a series converges or diverges, with telescoping examples."
course: "calculus-bc"
unit: 10
topics: ["10.1"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity, including limits of rational functions (Topic 1.15)"
  - "Sigma (summation) notation"
  - "Partial fractions (Topic 6.12), for splitting terms such as 2/((n + 1)(n + 3))"
  - "Laws of logarithms, such as ln a − ln b = ln(a/b)"
prerequisiteResources: ["mb-ap-calcbc-9.9-study-guide"]
learningObjectives:
  - "Tell the difference between a sequence of terms, a series and its sequence of partial sums"
  - "Write and evaluate the nth partial sum of a series"
  - "Decide whether a series converges or diverges by finding the limit of its partial sums, and state the sum when it exists"
  - "Recover individual terms of a series from a formula for its partial sums"
  - "Explain why terms that approach 0, or a table of partial sums, do not on their own prove convergence"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Everything on this page is done by hand. A calculator can list partial sums as evidence, but the decision must come from the limit of the partial sums."
related: ["mb-ap-calcbc-10.1-revision-notes", "mb-ap-calcbc-10.1-practice", "mb-ap-calcbc-10.1-checklist"]
next: "mb-ap-calcbc-10.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "The nth partial sum Sₙ is the sum of the first n terms of the series."
  - "A series converges to S exactly when the sequence of partial sums S₁, S₂, S₃, … has the limit S. Otherwise it diverges."
  - "Terms and partial sums are different sequences: aₙ → 0 does not guarantee that the series converges."
  - "From partial sums you can get the terms back: a₁ = S₁ and aₙ = Sₙ − Sₙ₋₁ for n ≥ 2."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Infinite series are BC-only content. Calculus AB ends with Unit 8, so AB students can skip all of Unit 10."
  - question: "Is the sum of a convergent series really an exact number, not an approximation?"
    answer: "Yes. By definition, the sum is the limit of the partial sums, and that limit is an exact number such as 5/6. Each partial sum is only an approximation to it."
  - question: "If I add up the first 1,000 terms on a calculator and the total settles down, has the series converged?"
    answer: "Not as a proof. A table of partial sums is evidence only. The series Σ ln((n + 1)/n) grows so slowly that it looks settled, yet it diverges. You need the limit of Sₙ or a convergence test."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Infinite series are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic opens Unit 10. It uses limits more than any new rule. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Limits at infinity | [1.15](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/) | Finding the limit of Sₙ as n → ∞ |
| Sigma notation | — | Reading and writing Σ |
| Partial fractions | [6.12](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-study-guide/) | Splitting a term so the partial sum collapses |
| Laws of logarithms | — | Combining a sum of logs into one log |

Notation on this page: **Σ from n = 1 to ∞ of aₙ** (also written Σ aₙ when the start is clear) means a₁ + a₂ + a₃ + …. The subscript n in Sₙ counts how many terms have been added.

## Can infinitely many numbers add up to a finite total?

Share a pizza like this: you get half, then half of what is left (a quarter), then half of what is left again (an eighth), and so on forever. Your running totals are

½, ¾, ⅞, 15/16, 31/32, …

After 10 helpings you have 1023/1024 of the pizza. You never get more than one whole pizza, and you get as close to one pizza as you like by waiting long enough. So it makes sense to say

½ + ¼ + ⅛ + 1/16 + … = 1.

But not every infinite sum behaves. If you add 1 + 1 + 1 + …, the totals 1, 2, 3, … grow without bound. And 1 − 1 + 1 − 1 + … has running totals 1, 0, 1, 0, … that never settle. We need a precise rule for when an infinite sum has a value. That rule is the main idea of this topic.

## Three objects you must keep apart

A series problem always involves three different things:

| Object | What it is | Example (pizza) |
|---|---|---|
| The **terms** aₙ | The numbers being added, one by one | aₙ = 1/2ⁿ: ½, ¼, ⅛, … |
| The **series** Σ aₙ | The instruction "add all the terms, forever" | Σ from n = 1 to ∞ of 1/2ⁿ |
| The **partial sums** Sₙ | The running totals | S₁ = ½, S₂ = ¾, S₃ = ⅞, … |

The **nth partial sum** is the sum of the first n terms:

> **Sₙ = a₁ + a₂ + … + aₙ = Σ from k = 1 to n of aₖ**

Each Sₙ is an ordinary finite sum, so you can always compute it. The list S₁, S₂, S₃, … is a new sequence, called the **sequence of partial sums**. If a series starts at n = 0 instead, then Sₙ still means "the first n terms", so S₁ = a₀, S₂ = a₀ + a₁, and so on. What matters is that you count the terms you have added.

## The definition: convergence is a limit

> **A series Σ aₙ converges to the real number S (it has sum S) if and only if lim as n → ∞ of Sₙ exists and equals S.** We then write Σ aₙ = S.
>
> **If the limit of the partial sums does not exist (as a real number), the series diverges.** A divergent series has no sum.

So deciding convergence is a limit problem about **Sₙ**, not about aₙ. This is the same idea you met with improper integrals in [Topic 6.13](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/): ∫ from 1 to ∞ was defined as the limit of ∫ from 1 to b as b → ∞. Here, the "upper limit" is the number of terms.

A series can diverge in two main ways:

- **The partial sums grow without bound** (Sₙ → ∞ or Sₙ → −∞). Example: 1 + 1 + 1 + …, where Sₙ = n.
- **The partial sums never settle**, even though they stay bounded. Example: Σ from n = 0 to ∞ of (−1)ⁿ = 1 − 1 + 1 − …, where Sₙ = 1, 0, 1, 0, …. There is no single value to approach, so the limit does not exist.

Writing "Σ aₙ = ∞" is shorthand for "the partial sums grow without bound". It does not mean the series has a sum. It still diverges.

## Seeing convergence on a graph

Plot Sₙ against n. A convergent series has points that close in on a horizontal line y = S. A divergent series does not.

<figure>
<svg viewBox="0 0 540 330" role="img" aria-labelledby="ps101-title ps101-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ps101-title">Partial sums of a convergent series and a divergent series, n = 1 to 10</title>
<desc id="ps101-desc">Graph of partial sum Sₙ against the number of terms n, from n = 1 to 10. Filled circles show the partial sums of the series 2 divided by (n + 1)(n + 3): 0.25, 0.38, 0.47, 0.52, 0.57, 0.60, 0.62, 0.64, 0.66 and 0.67. They rise more and more slowly towards a dashed horizontal line at 5/6, about 0.83, and never cross it. Open squares show the partial sums of the series ln((n + 1)/n), which equal ln(n + 1): 0.69, 1.10, 1.39, 1.61, 1.79, 1.95, 2.08, 2.20, 2.30 and 2.40. They keep climbing with no horizontal line to approach.</desc>
<rect x="0" y="0" width="540" height="330" fill="#ffffff"/>
<line x1="70" y1="270" x2="525" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="285" x2="70" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="114" y1="266" x2="114" y2="274"/><line x1="158" y1="266" x2="158" y2="274"/><line x1="202" y1="266" x2="202" y2="274"/><line x1="246" y1="266" x2="246" y2="274"/><line x1="290" y1="266" x2="290" y2="274"/><line x1="334" y1="266" x2="334" y2="274"/><line x1="378" y1="266" x2="378" y2="274"/><line x1="422" y1="266" x2="422" y2="274"/><line x1="466" y1="266" x2="466" y2="274"/><line x1="510" y1="266" x2="510" y2="274"/>
<line x1="66" y1="225" x2="74" y2="225"/><line x1="66" y1="180" x2="74" y2="180"/><line x1="66" y1="135" x2="74" y2="135"/><line x1="66" y1="90" x2="74" y2="90"/><line x1="66" y1="45" x2="74" y2="45"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="114" y="288">1</text><text x="158" y="288">2</text><text x="202" y="288">3</text><text x="246" y="288">4</text><text x="290" y="288">5</text><text x="334" y="288">6</text><text x="378" y="288">7</text><text x="422" y="288">8</text><text x="466" y="288">9</text><text x="510" y="288">10</text>
<text x="300" y="312" font-size="13">number of terms added, n</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="274">0</text><text x="62" y="229">0.5</text><text x="62" y="184">1.0</text><text x="62" y="139">1.5</text><text x="62" y="94">2.0</text><text x="62" y="49">2.5</text>
</g>
<text x="20" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 160)">partial sum Sₙ</text>
<line x1="70" y1="195" x2="520" y2="195" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="518" y="188" font-size="12" fill="#1d2b44" text-anchor="end">limit S = 5/6</text>
<circle cx="114" cy="247.5" r="5" fill="#1d2b44"/><circle cx="158" cy="235.5" r="5" fill="#1d2b44"/><circle cx="202" cy="228.0" r="5" fill="#1d2b44"/><circle cx="246" cy="222.9" r="5" fill="#1d2b44"/><circle cx="290" cy="219.1" r="5" fill="#1d2b44"/><circle cx="334" cy="216.2" r="5" fill="#1d2b44"/><circle cx="378" cy="214.0" r="5" fill="#1d2b44"/><circle cx="422" cy="212.2" r="5" fill="#1d2b44"/><circle cx="466" cy="210.7" r="5" fill="#1d2b44"/><circle cx="510" cy="209.4" r="5" fill="#1d2b44"/>
<rect x="109" y="202.6" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="153" y="166.1" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="197" y="140.2" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="241" y="120.2" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="285" y="103.7" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="329" y="89.9" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="373" y="77.9" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="417" y="67.2" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="461" y="57.8" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><rect x="505" y="49.2" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="96" y="22" width="262" height="48" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<circle cx="110" cy="36" r="5" fill="#1d2b44"/>
<text x="122" y="40" font-size="12" fill="#1d2b44">Σ 2/((n + 1)(n + 3)): converges</text>
<rect x="105" y="51" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="122" y="60" font-size="12" fill="#1d2b44">Σ ln((n + 1)/n): diverges</text>
</svg>
<figcaption>Figure 1. Filled circles: the partial sums of Σ 2/((n + 1)(n + 3)) close in on the dashed line at 5/6 (Worked example 2). Open squares: the partial sums of Σ ln((n + 1)/n) equal ln(n + 1) and keep rising (Worked example 3), even though the terms being added shrink towards 0.</figcaption>
</figure>

Notice that both sets of points rise more slowly as n grows. From ten points alone you could not be sure which series converges. The decision has to come from an exact formula for Sₙ and its limit, as in the worked examples below.

## Getting the terms back from the partial sums

Sometimes a question gives you a formula for Sₙ instead of a formula for aₙ. Each partial sum is the previous one plus one more term, Sₙ = Sₙ₋₁ + aₙ. So:

> **a₁ = S₁, and aₙ = Sₙ − Sₙ₋₁ for n ≥ 2.**

When you are given Sₙ, the question "does the series converge?" is already a single limit: find lim Sₙ.

## Worked example 1: partial sums given, terms and sum required

**Question.** The nth partial sum of the series Σ from n = 1 to ∞ of aₙ is **Sₙ = 3n/(n + 2)**. (a) Find a₁ and a₄. (b) Find a formula for aₙ. (c) Does the series converge? If so, find its sum.

1. **First term.** a₁ = S₁ = 3(1)/(1 + 2) = **1**.
2. **Fourth term.** a₄ = S₄ − S₃ = 12/6 − 9/5 = 2 − 9/5 = **1/5**.
3. **General term.** For n ≥ 2,
   aₙ = 3n/(n + 2) − 3(n − 1)/(n + 1)
   = [3n(n + 1) − 3(n − 1)(n + 2)] / ((n + 1)(n + 2))
   = [3n² + 3n − 3n² − 3n + 6] / ((n + 1)(n + 2))
   = **6/((n + 1)(n + 2))**.
   This also gives 6/6 = 1 when n = 1, so it works for every n ≥ 1.
4. **Convergence.** Take the limit of the **partial sums**:
   lim as n → ∞ of 3n/(n + 2) = **3** (divide top and bottom by n: 3/(1 + 2/n) → 3).
5. **Conclusion.** The limit exists, so the series converges, and **Σ from n = 1 to ∞ of 6/((n + 1)(n + 2)) = 3**.

**Checks.** a₄ from the formula: 6/(5 · 6) = 1/5. ✓ S₁₀₀ = 300/102 = 50/17 ≈ 2.941, just below 3, as expected since every term is positive. Note that the terms also tend to 0, but that fact alone would not have told you the series converges (see Worked example 3).

## Worked example 2: building the partial sums yourself (telescoping)

**Question.** Decide whether **Σ from n = 1 to ∞ of 2/((n + 1)(n + 3))** converges. If it does, find its sum.

1. **Split the term** with partial fractions: 2/((n + 1)(n + 3)) = 1/(n + 1) − 1/(n + 3). (Check at n = 1: ½ − ¼ = ¼, and 2/(2 · 4) = ¼. ✓)
2. **Write out a partial sum and look for cancelling.**
   Sₙ = (½ − ¼) + (⅓ − ⅕) + (¼ − ⅙) + (⅕ − 1/7) + … + (1/n − 1/(n + 2)) + (1/(n + 1) − 1/(n + 3))
   Each negative part cancels a positive part two brackets later. Only the first two positive parts and the last two negative parts survive:
   **Sₙ = ½ + ⅓ − 1/(n + 2) − 1/(n + 3)**.
   A sum that collapses like this is called **telescoping**.
3. **Test the formula.** S₁ = ½ + ⅓ − ⅓ − ¼ = ¼ = a₁. ✓ S₂ = 5/6 − ¼ − ⅕ = 23/60, and a₁ + a₂ = ¼ + 2/15 = 23/60. ✓
4. **Take the limit.** As n → ∞, 1/(n + 2) → 0 and 1/(n + 3) → 0, so lim Sₙ = ½ + ⅓ = **5/6**.
5. **Conclusion.** The partial sums have the limit 5/6, so the series **converges** and its sum is **5/6**.

**Check.** S₁₀ = 5/6 − 1/12 − 1/13 = 35/52 ≈ 0.673. The circles in Figure 1 show the partial sums climbing towards 5/6 ≈ 0.833 from below, as they must when every term is positive.

Telescoping is not a named test you must recognise. It is simply the definition of convergence used directly: find Sₙ, then find its limit.

## Worked example 3: terms shrink to 0, but the series diverges

**Question.** Decide whether **Σ from n = 1 to ∞ of ln((n + 1)/n)** converges.

1. **Look at the terms first (but do not stop there).** aₙ = ln(1 + 1/n) → ln 1 = 0. The terms do shrink to 0. For example, a₁₀ = ln(1.1) ≈ 0.095.
2. **Write the partial sum.** Use ln((n + 1)/n) = ln(n + 1) − ln n:
   Sₙ = (ln 2 − ln 1) + (ln 3 − ln 2) + (ln 4 − ln 3) + … + (ln(n + 1) − ln n)
   Everything cancels except the last positive part and the first negative part:
   **Sₙ = ln(n + 1) − ln 1 = ln(n + 1)**.
3. **Take the limit.** ln(n + 1) → ∞ as n → ∞. The partial sums grow without bound.
4. **Conclusion.** lim Sₙ does not exist as a real number, so the series **diverges**.

**Why this matters.** The growth is very slow. S₉ = ln 10 ≈ 2.303, and you need more than 22,000 terms before Sₙ passes 10. A calculator table would look as if it is settling down. It is not: given enough terms, the partial sums pass any number you choose. Shrinking terms are necessary for convergence (Topic 10.3 shows why), but they are **not enough**.

## Facts that follow from the definition

These short facts come straight from "convergence = limit of partial sums". You will use them throughout Unit 10.

- **The starting index does not affect convergence, but it does affect the sum.** Removing or adding finitely many terms shifts every later partial sum by the same fixed amount. From Worked example 2, Σ from n = 3 to ∞ of 2/((n + 1)(n + 3)) = 5/6 − ¼ − 2/15 = **9/20**.
- **A non-zero constant multiple keeps the behaviour.** If Σ aₙ = S, then Σ c·aₙ = cS. For example, Σ from n = 1 to ∞ of 12/((n + 1)(n + 3)) = 6 · 5/6 = 5.
- **Always state both parts of a conclusion:** whether the series converges, and the reason (the limit of Sₙ). Give the sum when you can.

## Common misconceptions

- **Mixing up terms and partial sums.** "lim aₙ = 0, so the sum is 0" confuses the limit of the terms with the limit of the partial sums. In Worked example 1, aₙ → 0 but the sum is 3.
- **"If the terms go to 0, the series converges."** False. Σ ln((n + 1)/n) has terms going to 0 and diverges (Worked example 3).
- **"A table of partial sums proves convergence."** A table gives evidence only. You need the limit of Sₙ (or, later, a test).
- **"Sₙ is increasing, so the series must diverge."** No. With positive terms Sₙ always increases. In Worked example 2 it increases towards 5/6.
- **"1 − 1 + 1 − 1 + … equals 0 (or ½)."** Its partial sums alternate 1, 0, 1, 0, … and have no limit, so it has no sum.
- **Treating ∞ as a sum.** "The sum is ∞" means the series diverges. It does not have a value.
- **Forgetting the start index.** Σ from n = 0 and Σ from n = 1 of the same formula can have different sums, because the first term differs.
- **Using aₙ = Sₙ − Sₙ₋₁ for n = 1.** S₀ is not usually defined. Use a₁ = S₁.

## Where this leads

The definition on this page is the foundation for every later idea in Unit 10. Next, in [Topic 10.2, Working with Geometric Series](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-study-guide/), you find an exact formula for Sₙ when each term is a fixed multiple of the one before, and use its limit to sum the pizza series and many others. After that, the convergence tests (Topics 10.3 to 10.9) let you decide convergence when no neat formula for Sₙ exists. Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-checklist/) to consolidate.
