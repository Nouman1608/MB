---
resourceId: "mb-ap-calcab-1.15-study-guide"
title: "Connecting Limits at Infinity and Horizontal Asymptotes: Study Guide (Calculus AB 1.15)"
description: "Learn what a limit as x → ∞ means, how it describes end behaviour and horizontal asymptotes, and how to compare how fast functions grow using limits."
course: "calculus-ab"
unit: 1
topics: ["1.15"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation and one-sided limits (Topics 1.2 to 1.4)"
  - "Infinite limits and vertical asymptotes (Topic 1.14)"
  - "The squeeze theorem (Topic 1.8)"
  - "Degree and leading coefficient of a polynomial; √(x²) = |x|"
learningObjectives:
  - "Explain what lim (x → ∞) f(x) = L and lim (x → −∞) f(x) = L mean, using values far from zero"
  - "Use limits at infinity to describe the end behaviour of a function and to find its horizontal asymptotes"
  - "Find limits at infinity of rational functions and of expressions with square roots by dividing by a suitable power of x"
  - "Move between a limit statement, a table, a graph and a formula when describing end behaviour"
  - "Compare how fast two functions grow by finding the limit of their ratio"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every limit here without a calculator. A table of large x values is a check, not a method."
related: ["mb-ap-calcab-1.15-revision-notes", "mb-ap-calcab-1.15-practice", "mb-ap-calcab-1.15-checklist"]
next: "mb-ap-calcab-1.15-practice"
prerequisiteResources: ["mb-ap-calcab-1.14-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "lim (x → ∞) f(x) = L means f(x) gets as close to L as you like once x is large enough. It describes end behaviour."
  - "The line y = L is a horizontal asymptote if f(x) → L as x → ∞ or as x → −∞. A graph has at most two, one at each end."
  - "Rational functions: divide top and bottom by the highest power of x in the denominator. Compare degrees to predict the answer."
  - "To compare growth, find lim (x → ∞) f(x)/g(x). A limit of 0 means g grows faster; ∞ means f grows faster."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.15 is common content, so the same page serves AB and BC students."
  - question: "Can a graph cross its horizontal asymptote?"
    answer: "Yes. A horizontal asymptote only describes what happens far to the left or far to the right. In the middle, the graph can cross it, even many times."
  - question: "Is ∞ a number I can substitute?"
    answer: "No. x → ∞ means x grows without bound. You never put ∞ into a formula. You rewrite the expression so that the terms that shrink to 0 are easy to see."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

**lim (x → ∞) f(x)** means "the limit as x increases without bound of f(x)".
**lim (x → −∞) f(x)** means "the limit as x decreases without bound of f(x)".

On paper, write "x → ∞" under "lim" as usual. Keep "lim" on every line until the last step.

## What "x → ∞" means

In Topic 1.14 you let x approach a number and allowed the **outputs** to grow without bound. That gave vertical asymptotes. In this topic it is the other way round: the **inputs** grow without bound, and you ask what the outputs do. This is called a **limit at infinity**.

Look at f(x) = (3x + 1)/x, which equals 3 + 1/x for x ≠ 0.

| x | 10 | 100 | 1000 | −10 | −100 | −1000 |
|---|---|---|---|---|---|---|
| f(x) | 3.1 | 3.01 | 3.001 | 2.9 | 2.99 | 2.999 |

As x gets larger, 1/x shrinks towards 0, so f(x) gets closer and closer to 3. The same happens as x becomes very negative. We write

**lim (x → ∞) (3x + 1)/x = 3** and **lim (x → −∞) (3x + 1)/x = 3**

> **Meaning.** lim (x → ∞) f(x) = L says that you can make f(x) as close to L as you like by taking x large enough. It does not say f(x) ever equals L.

∞ is not a number. You cannot substitute it. You use a few basic facts instead:

- lim (x → ±∞) 1/xⁿ = 0 for any positive integer n. A fixed number divided by a huge number is tiny.
- lim (x → −∞) eˣ = 0, but lim (x → ∞) eˣ = ∞.
- lim (x → ∞) x² = ∞. The outputs grow without bound, so there is no finite limit.

## End behaviour and horizontal asymptotes

Limits at infinity describe the **end behaviour** of a function: what the graph does at the far right (x → ∞) and the far left (x → −∞). There are three possibilities at each end.

| What the limit does | Example | What the graph does at that end |
|---|---|---|
| Approaches a number L | lim (x → ∞) (3x + 1)/x = 3 | Levels off towards the line y = L |
| Grows without bound | lim (x → ∞) x² = ∞ | Rises (or falls) forever; no horizontal asymptote |
| Neither | lim (x → ∞) sin x does not exist | Keeps oscillating; no single level |

> **Horizontal asymptote.** The line y = L is a horizontal asymptote of the graph of f if lim (x → ∞) f(x) = L or lim (x → −∞) f(x) = L.

Each end can give at most one horizontal asymptote, so a graph has **at most two**. They can be the same line or different lines. For example, arctan x approaches π/2 as x → ∞ and −π/2 as x → −∞, so its graph has two horizontal asymptotes, y = π/2 and y = −π/2.

A horizontal asymptote says nothing about the middle of the graph. The graph may cross it. The function (sin x)/x is a good example. For x > 0, −1/x ≤ (sin x)/x ≤ 1/x, and both outer functions approach 0, so by the squeeze theorem (Topic 1.8) lim (x → ∞) (sin x)/x = 0. The line y = 0 is a horizontal asymptote, yet the graph crosses it at every multiple of π.

## Rational functions: divide by the highest power

For a rational function, divide every term on the top and the bottom by the **highest power of x in the denominator**. Most terms then become a number over a power of x, which goes to 0.

For example, as x → ∞:

**(6x² − 5)/(2x² + x) = (6 − 5/x²)/(2 + 1/x)**, which approaches (6 − 0)/(2 + 0) = 3.

Doing this many times shows a pattern that depends only on the degrees (n on top, m on the bottom):

| Degrees | Limit as x → ±∞ | Horizontal asymptote | Example |
|---|---|---|---|
| n < m | 0 | y = 0 | (4x + 1)/(x² + 3) → 0 |
| n = m | ratio of leading coefficients | y = (leading coefficient of top)/(leading coefficient of bottom) | (6x² − 5)/(2x² + x) → 3 |
| n > m | ∞ or −∞ (no finite limit) | none | (x³ + 1)/(x² − 2) → ∞ as x → ∞ |

For a rational function the limit is the same at both ends when it is finite, so there is at most one horizontal asymptote. Use the table to predict, but **show the division** when you are asked to justify a limit.

## Worked example 1: a rational function and where it meets its asymptote

**Question.** Let f(x) = (6x² − x + 4)/(3x² + 5x − 2). Find lim (x → ∞) f(x) and lim (x → −∞) f(x). State the horizontal asymptote, and find where the graph meets it.

1. **Identify the highest power in the denominator.** It is x².
2. **Divide every term by x².** For x ≠ 0,
   **f(x) = (6 − 1/x + 4/x²)/(3 + 5/x − 2/x²)**
3. **Take the limit.** As x → ∞, each of 1/x, 4/x², 5/x and 2/x² approaches 0:
   **lim (x → ∞) f(x) = (6 − 0 + 0)/(3 + 0 − 0) = 6/3 = 2**
4. **Repeat for x → −∞.** The same terms still approach 0, so lim (x → −∞) f(x) = 2 as well.
5. **State the asymptote.** The line **y = 2** is the only horizontal asymptote.
6. **Find where f(x) = 2.** Set 6x² − x + 4 = 2(3x² + 5x − 2) = 6x² + 10x − 4. The x² terms cancel: −x + 4 = 10x − 4, so 11x = 8 and **x = 8/11**. The denominator there is 390/121, not 0, so f(8/11) = 2 really is a point on the graph.

**Answer.** Both limits equal 2. The horizontal asymptote is y = 2, and the graph crosses it once, at x = 8/11.

**Check.** f(1000) ≈ 1.9963 and f(−1000) ≈ 2.0037. The graph approaches 2 from below on the right and from above on the left.

**Connection to Topic 1.14.** The denominator factors as (3x − 1)(x + 2), and the top is not 0 at x = 1/3 or x = −2. So the graph also has vertical asymptotes x = 1/3 and x = −2. Vertical asymptotes come from limits *equal to* infinity; horizontal ones come from limits *at* infinity.

## Worked example 2: two different horizontal asymptotes

**Question.** Let g(x) = (5x + 3)/√(4x² + 1). Find the limits of g as x → ∞ and as x → −∞, and state every horizontal asymptote.

The key fact is **√(x²) = |x|**, not x. So √(4x² + 1) = |x|·√(4 + 1/x²) for x ≠ 0.

1. **As x → ∞**, x is positive, so |x| = x. Divide top and bottom by x:
   **g(x) = (5 + 3/x)/√(4 + 1/x²)**, which approaches 5/√4 = **5/2**.
2. **As x → −∞**, x is negative, so |x| = −x. Divide top and bottom by −x. The top becomes −5 − 3/x and the bottom becomes √(4 + 1/x²):
   **g(x) = (−5 − 3/x)/√(4 + 1/x²)**, which approaches −5/2.
3. **State the asymptotes.** The graph has two: **y = 5/2** on the right and **y = −5/2** on the left.

**Check.** g(1000) ≈ 2.5015 and g(−1000) ≈ −2.4985. This makes sense: the bottom is always positive, so g(x) has the same sign as 5x + 3, which is negative for very negative x.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="ha-title ha-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ha-title">Graph of y = (5x + 3)/√(4x² + 1) with horizontal asymptotes y = 2.5 and y = −2.5</title>
<desc id="ha-desc">A smooth curve drawn for x from −8 to 8. On the far left it sits just above the dashed line y = −2.5, at about −2.31 when x = −8. It rises steeply near x = 0, passes through (0, 3), crosses the dashed line y = 2.5 just left of the y-axis, reaches a peak of about 3.9 near x = 0.42, then falls slowly back towards the dashed line y = 2.5, at about 2.68 when x = 8. The curve approaches a different horizontal line at each end.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="30" y1="174" x2="505" y2="174" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="270" y1="300" x2="270" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="46" y="191">−8</text><text x="158" y="191">−4</text><text x="382" y="191">4</text><text x="494" y="191">8</text>
<text x="508" y="169">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="263" y="34">4</text><text x="263" y="106">2</text><text x="263" y="250">−2</text>
<text x="263" y="20">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="46" y1="170" x2="46" y2="178"/><line x1="158" y1="170" x2="158" y2="178"/><line x1="382" y1="170" x2="382" y2="178"/><line x1="494" y1="170" x2="494" y2="178"/>
<line x1="266" y1="30" x2="274" y2="30"/><line x1="266" y1="102" x2="274" y2="102"/><line x1="266" y1="246" x2="274" y2="246"/>
</g>
<line x1="30" y1="84" x2="505" y2="84" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4"/>
<line x1="30" y1="264" x2="505" y2="264" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4"/>
<text x="400" y="100" font-size="13" fill="#1d2b44">y = 2.5 (as x → ∞)</text>
<text x="40" y="284" font-size="13" fill="#1d2b44">y = −2.5 (as x → −∞)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="46.0,257.1 53.0,256.9 60.0,256.6 67.0,256.4 74.0,256.1 81.0,255.8 88.0,255.5 95.0,255.1 102.0,254.7 109.0,254.3 116.0,253.9 123.0,253.4 130.0,252.8 137.0,252.2 144.0,251.5 151.0,250.8 158.0,249.9 165.0,248.9 172.0,247.8 179.0,246.5 186.0,245.0 193.0,243.2 200.0,241.1 207.0,238.4 214.0,235.1 221.0,230.9 228.0,225.2 235.0,217.5 242.0,206.2 249.0,189.0 256.0,161.3 263.0,117.7 270.0,66.0 277.0,37.2 284.0,34.0 291.0,39.2 298.0,45.2 305.0,50.3 312.0,54.5 319.0,57.8 326.0,60.5 333.0,62.7 340.0,64.6 347.0,66.1 354.0,67.5 361.0,68.6 368.0,69.6 375.0,70.5 382.0,71.3 389.0,72.0 396.0,72.6 403.0,73.2 410.0,73.7 417.0,74.2 424.0,74.6 431.0,75.0 438.0,75.3 445.0,75.7 452.0,76.0 459.0,76.3 466.0,76.5 473.0,76.8 480.0,77.0 487.0,77.2 494.0,77.4"/>
<text x="292" y="30" font-size="12" fill="#1d2b44">peak ≈ 3.9</text>
</svg>
<figcaption>Figure 1. The graph of g(x) = (5x + 3)/√(4x² + 1). The dashed lines are the two horizontal asymptotes. On the right the curve approaches y = 2.5 from above; on the left it approaches y = −2.5 from above. Near x = 0 the curve crosses y = 2.5, which shows that a graph may cross a horizontal asymptote. Axes are unitless.</figcaption>
</figure>

Different asymptotes at the two ends usually come from |x| hiding inside a square root or from exponential terms such as eˣ, which behave very differently at −∞ and at ∞.

## Comparing how fast functions grow

Limits at infinity also let you compare two functions that both grow without bound. Look at the limit of their ratio as x → ∞, where f(x) and g(x) are both positive for large x:

| lim (x → ∞) f(x)/g(x) | Conclusion |
|---|---|
| ∞ | f grows faster than g; f dominates |
| 0 | g grows faster than f; g dominates |
| a positive number | f and g grow at the same rate |

For example, lim (x → ∞) (x² + 1)/(3x²) = 1/3, so x² + 1 and 3x² grow at the same rate. Constant multiples and lower-order terms do not change the rate.

Tables show the pattern for the three main families:

| x | 5 | 10 | 20 |
|---|---|---|---|
| x³ | 125 | 1000 | 8000 |
| 2ˣ | 32 | 1024 | 1 048 576 |
| x³/2ˣ | 3.906 | 0.977 | 0.00763 |

At first x³ is ahead, but the exponential overtakes it and the ratio collapses towards 0. In the same way, ln 100 ≈ 4.6 while √100 = 10, and ln 1 000 000 ≈ 13.8 while √1 000 000 = 1000.

For large x, the order from slowest to fastest is:

**logarithms (ln x) < positive powers (xᵖ, p > 0) < exponentials (bˣ, b > 1)**

So, for example, lim (x → ∞) (ln x)/√x = 0 and lim (x → ∞) x¹⁰⁰/1.01ˣ = 0, even though x¹⁰⁰ is enormous for moderate x.

**Background.** In this topic you use this order as a known fact, supported by tables and graphs. In Unit 4 (Topic 4.7), L'Hospital's rule gives a way to prove these limits.

## Worked example 3: using growth rates to find a limit

**Question.** Find lim (x → ∞) (2ˣ + x⁵)/(3·2ˣ − x²). Then describe the behaviour as x → −∞.

1. **Identify the fastest-growing term in the denominator.** As x → ∞, 2ˣ dominates x², so divide every term by 2ˣ:
   **(1 + x⁵/2ˣ)/(3 − x²/2ˣ)**
2. **Use relative magnitudes.** Exponentials beat powers, so x⁵/2ˣ → 0 and x²/2ˣ → 0.
3. **Take the limit.** (1 + 0)/(3 − 0) = **1/3**. So y = 1/3 is a horizontal asymptote on the right.
4. **As x → −∞**, 2ˣ → 0, so the expression behaves like x⁵/(−x²) = −x³. As x → −∞, −x³ → ∞. The limit is ∞, so there is no horizontal asymptote on the left.

**Answer.** lim (x → ∞) = 1/3; lim (x → −∞) = ∞. The only horizontal asymptote is y = 1/3.

**Check.** At x = 30 the expression is about 0.341, close to 0.333. (The denominator is also 0 at one negative value, x ≈ −1.16, which gives a vertical asymptote. That does not affect end behaviour.)

## Common misconceptions

- **"Substitute ∞."** Expressions such as ∞/∞ or ∞ − ∞ are not numbers. Rewrite first, then use facts like 1/x → 0.
- **"A graph can never cross its horizontal asymptote."** It can, as Figure 1 and (sin x)/x show. The asymptote only describes the far ends of the graph.
- **"The function eventually equals L."** A limit at infinity describes approach. In Worked example 1, f(x) is never 2 for large x.
- **"√(x²) = x."** It is |x|. Forgetting this gives the wrong sign as x → −∞.
- **"Both ends always give the same asymptote."** True for rational functions, but not for functions with roots, eˣ or arctan x.
- **"y = ∞ is a horizontal asymptote."** An asymptote is a line y = L with L a real number. If the limit is ∞, there is no horizontal asymptote at that end.
- **"x³ is bigger than 2ˣ, so it grows faster."** Compare the ratio as x → ∞, not values at small x.
- **Mixing up the two asymptote types.** Vertical: x → a and f(x) → ±∞ (Topic 1.14). Horizontal: x → ±∞ and f(x) → L (this topic).

## Where this leads

Limits at infinity return in Unit 5 when you sketch curves, and in Unit 4 when L'Hospital's rule handles ∞/∞. BC students use the same growth-rate ideas when they test series for convergence. If vertical asymptotes still feel shaky, look back at [Topic 1.14, Connecting Infinite Limits and Vertical Asymptotes](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-study-guide/). Next comes [Topic 1.16, Working with the Intermediate Value Theorem](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-checklist/) to consolidate.
