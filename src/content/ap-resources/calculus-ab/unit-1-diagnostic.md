---
resourceId: "mb-ap-calcab-u1-diagnostic"
title: "Limits and Continuity: Unit Diagnostic (Calculus AB Unit 1)"
description: "Eighteen short original questions, one or two per topic of Limits and Continuity, to show which topics you should revisit, with explanations and links."
course: "calculus-ab"
unit: 1
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "Factoring quadratics and cubics, and working with square roots"
  - "Reading graphs and tables of values"
learningObjectives:
  - "Find out which Unit 1 topics are secure and which need more work"
  - "Check limit, continuity and asymptote ideas quickly across graphs, tables and formulas"
  - "Practise short justifications for continuity and the Intermediate Value Theorem"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Question 4 gives the table values you need; all other arithmetic is by hand."
related: ["mb-ap-calcab-u1-review", "mb-ap-calcab-1.6-study-guide", "mb-ap-calcab-1.11-study-guide", "mb-ap-calcab-1.16-study-guide"]
next: "mb-ap-calcab-u1-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 1, to decide which of the 16 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
  - "Shared diagnostic for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**What this is for.** Use this diagnostic to find which topics of Unit 1, Limits and Continuity, to revisit. There is one question per topic, and two for Topics 1.6 and 1.11. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Answer everything before opening any answer. c⁻ means from the left, c⁺ from the right. The unit is shared by Calculus AB and Calculus BC.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="d1-title d1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="d1-title">Figure 1: graph of f for −3 ≤ x ≤ 3, with a jump at x = −1 and a hole at x = 1</title>
<desc id="d1-desc">Three straight pieces. Piece one rises from the filled point (−3, 1) to an open circle at (−1, 3). Piece two starts at the filled point (−1, 1) and rises gently to an open circle at (1, 2). Piece three rises from that open circle at (1, 2) to the filled point (3, 5). A separate filled dot sits at (1, 4).</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<g stroke="#d9dee7" stroke-width="1">
<line x1="70" y1="30" x2="70" y2="280"/><line x1="140" y1="30" x2="140" y2="280"/><line x1="210" y1="30" x2="210" y2="280"/><line x1="350" y1="30" x2="350" y2="280"/><line x1="420" y1="30" x2="420" y2="280"/><line x1="490" y1="30" x2="490" y2="280"/>
<line x1="60" y1="230" x2="500" y2="230"/><line x1="60" y1="180" x2="500" y2="180"/><line x1="60" y1="130" x2="500" y2="130"/><line x1="60" y1="80" x2="500" y2="80"/><line x1="60" y1="30" x2="500" y2="30"/>
</g>
<line x1="55" y1="280" x2="505" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="280" y1="295" x2="280" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="297">−3</text><text x="140" y="297">−2</text><text x="210" y="297">−1</text><text x="350" y="297">1</text><text x="420" y="297">2</text><text x="490" y="297">3</text><text x="510" y="284">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="274" y="234">1</text><text x="274" y="184">2</text><text x="274" y="134">3</text><text x="274" y="84">4</text><text x="274" y="34">5</text><text x="274" y="18">y</text>
</g>
<line x1="70" y1="230" x2="210" y2="130" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="210" y1="230" x2="350" y2="180" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="350" y1="180" x2="490" y2="30" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="70" cy="230" r="5" fill="#1d2b44"/>
<circle cx="210" cy="130" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="210" cy="230" r="6" fill="#1d2b44"/>
<circle cx="350" cy="180" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="350" cy="80" r="6" fill="#1d2b44"/>
<circle cx="490" cy="30" r="5" fill="#1d2b44"/>
</svg>
<figcaption>Figure 1, for Questions 3, 11 and 12. Open circles are not on the graph; filled dots are.</figcaption>
</figure>

## Question 1 (multiple choice · 1.1)

The average rate of change of f over [1, 1 + h] is 6 + 2h for every h ≠ 0. What is the rate of change of f at x = 1?

- (A) 6
- (B) 8
- (C) Undefined, because h = 0 gives 0/0
- (D) It needs a formula for f.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The rate at an instant is the limit of the averages: lim (h → 0) (6 + 2h) = 6.

- (B) puts h = 1: the average over [1, 2].
- (C) The quotient is 0/0 at h = 0, but a limit never uses h = 0.
- (D) The simplified averages are enough.

**If you missed this:** [Topic 1.1 study guide](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-study-guide/).
</details>

## Question 2 (multiple choice · 1.2)

Which statement means the same as lim (x → −2) f(x) = 5?

- (A) f(−2) = 5
- (B) f(x) can be made as close to 5 as you like by taking x close enough to −2, with x ≠ −2.
- (C) As x approaches 5, f(x) approaches −2.
- (D) f(x) < 5 for every x near −2.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A limit describes values near −2, not at −2.

- (A) confuses the limit with f(−2). (C) swaps input and output.
- (D) Values may approach 5 from either side.

**If you missed this:** [Topic 1.2 study guide](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-study-guide/).
</details>

## Question 3 (multiple choice · 1.3)

Use Figure 1. Which statement is true?

- (A) lim (x → −1) f(x) = 1
- (B) lim (x → 1) f(x) = 4
- (C) lim (x → 1) f(x) = 2
- (D) lim (x → −1⁻) f(x) = 1

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** From both sides the graph heads to the open circle at height 2. The dot (1, 4) is f(1), which the limit ignores.

- (A) At −1 the sides head to 3 and 1: no two-sided limit.
- (B) reads f(1). (D) From the left the graph heads to 3.

**If you missed this:** [Topic 1.3 study guide](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-study-guide/).
</details>

## Question 4 (multiple choice · 1.4)

Values of k(x) = (2ˣ − 1)/x, to 4 decimal places (k(0) is undefined):

| x | −0.1 | −0.01 | −0.001 | 0.001 | 0.01 | 0.1 |
|---|---|---|---|---|---|---|
| k(x) | 0.6697 | 0.6908 | 0.6929 | 0.6934 | 0.6956 | 0.7177 |

What is the best estimate of lim (x → 0) k(x)?

- (A) 0.67
- (B) 0.69
- (C) 0.72
- (D) It does not exist, since k(0) is undefined.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The values nearest 0 (0.6929 and 0.6934) agree to 0.69, from both sides.

- (A) and (C) use the values furthest from 0.
- (D) A limit does not need k(0).

**If you missed this:** [Topic 1.4 study guide](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-study-guide/).
</details>

## Question 5 (multiple choice · 1.5)

You are told that lim (x → 2) f(x) = 4. What is lim (x → 2) [x·f(x) − 3] / √(f(x) + 5)?

- (A) 5/3
- (B) 5/9
- (C) 1/3
- (D) It needs a formula for f.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the limit properties, (2 × 4 − 3)/√(4 + 5) = 5/3. The bottom limit, 3, is not 0, so the quotient property applies.

- (B) forgets the square root.
- (C) uses f(x) − 3 on top.
- (D) The properties need only the limit of f.

**If you missed this:** [Topic 1.5 study guide](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-study-guide/).
</details>

## Question 6 (multiple choice · 1.6)

What is lim (x → −1) (x³ + 1)/(x² − 1)?

- (A) −3/2
- (B) 0
- (C) 3/2
- (D) It does not exist: the bottom is 0 at x = −1.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Substitution gives 0/0. Cancel the common factor (x + 1): for x ≠ −1 the expression is (x² − x + 1)/(x − 1), which gives 3/(−2) = −3/2.

- (B) treats 0/0 as 0. (C) drops the sign of x − 1 = −2.
- (D) 0/0 means "rewrite", not "no limit".

**If you missed this:** [Topic 1.6 study guide](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/).
</details>

## Question 7 (short answer · 1.6)

Find lim (x → 5) (x − 5)/(√(2x − 1) − 3). Show your method.

<details>
<summary>Worked answer</summary>

Substitution gives 0/0, with a square root on the bottom. Multiply top and bottom by the conjugate √(2x − 1) + 3. The bottom becomes (2x − 1) − 9 = 2(x − 5), so for x ≠ 5 the expression is (√(2x − 1) + 3)/2. The limit is (3 + 3)/2 = **3**.

**If you missed this:** Worked example 2 in the [Topic 1.6 study guide](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/).
</details>

## Question 8 (multiple choice · 1.7)

For which limit is factoring and cancelling a common factor the right procedure?

- (A) lim (x → 2) (x² + 4)/(x − 2)
- (B) lim (x → 2) (x² − 3x + 2)/(x² − 4)
- (C) lim (x → 2) (√(3x + 3) − 3)/(x − 2)
- (D) lim (x → 2) (x² − 4)/(x + 2)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Two polynomials give 0/0, so both contain (x − 2): (x − 1)/(x + 2) → 1/4.

- (A) gives 8/0: check signs for unbounded behaviour.
- (C) gives 0/0 from a square root: use the conjugate.
- (D) Substitution gives 0 directly.

**If you missed this:** [Topic 1.7 study guide](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-study-guide/).
</details>

## Question 9 (multiple choice · 1.8)

Which fact lets you conclude, by the squeeze theorem, that lim (x → 1) f(x) = 2?

- (A) 1 ≤ f(x) ≤ 3 for all x
- (B) 4x − x² − 1 ≤ f(x) ≤ x² + 1 for all x
- (C) f(x) ≤ x² + 1 for all x
- (D) The bounds in (B), but for x > 1 only

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both bounds tend to 2 as x → 1 (4 − 1 − 1 = 2 and 1 + 1 = 2), and they trap f on both sides of 1.

- (A) The bounds differ. (C) One bound traps nothing.
- (D) gives only the right-hand limit.

**If you missed this:** [Topic 1.8 study guide](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/).
</details>

## Question 10 (multiple choice · 1.9)

Both one-sided limits of p at x = 2 equal 5, and p(2) = 1. Which formula fits?

- (A) p(x) = x² + 1 for x ≠ 2, and p(2) = 1
- (B) p(x) = x² + 1 for x < 2, and p(x) = 1 for x ≥ 2
- (C) p(x) = 5 + 1/(x − 2) for x ≠ 2, and p(2) = 1
- (D) p(x) = x² + 1 for all x

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Near 2 the values approach 2² + 1 = 5 from both sides; p(2) = 1 does not affect the limit.

- (B) The right-hand limit is 1. (C) is unbounded near 2.
- (D) gives p(2) = 5.

**If you missed this:** [Topic 1.9 study guide](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-study-guide/).
</details>

## Question 11 (multiple choice · 1.10)

Use Figure 1. How are the discontinuities at x = −1 and x = 1 classified?

- (A) Both are removable.
- (B) Jump at −1, removable at 1
- (C) Removable at −1, jump at 1
- (D) Jump at −1; continuous at 1, because f(1) is defined

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At −1 the one-sided limits (3 and 1) differ: a jump. At 1 the limit is 2 but f(1) = 4: removable.

- (A) and (C) A jump has different one-sided limits.
- (D) Being defined is only one of three conditions.

**If you missed this:** [Topic 1.10 study guide](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-study-guide/).
</details>

## Question 12 (multiple choice · 1.11)

g(3) = 4 and lim (x → 3⁻) g(x) = 4. What is the least extra fact you need to conclude that g is continuous at x = 3?

- (A) Nothing more
- (B) That lim (x → 3⁺) g(x) = 4
- (C) That g is defined for x > 3
- (D) That g(x) = 4 for all x near 3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Then the two-sided limit is 4 = g(3).

- (A) One side is not enough (see x = −1 in Figure 1).
- (C) says nothing about the limit. (D) is far more than needed.

**If you missed this:** [Topic 1.11 study guide](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/).
</details>

## Question 13 (short answer · 1.11)

Let g(x) = x² − 1 for x < 2, g(2) = 3, and g(x) = 7 − 2x for x > 2.

(a) Is g continuous at x = 2? Justify using the definition.
(b) If the last piece were 8 − 2x, which condition would fail, and what type of discontinuity results?

<details>
<summary>Worked answer</summary>

**(a)** g(2) = 3 is defined. The left-hand limit is 2² − 1 = 3 and the right-hand limit is 7 − 4 = 3, so lim (x → 2) g(x) = 3 = g(2). **g is continuous at x = 2.**

**(b)** The one-sided limits would be 3 and 8 − 4 = 4, so the limit would not exist (the second condition fails): a **jump discontinuity**.

**If you missed this:** [Topic 1.11 study guide](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/).
</details>

## Question 14 (multiple choice · 1.12)

Let f(x) = ln(x)/(x² − 4). On which interval is f continuous?

- (A) [0, 2)
- (B) (0, 2)
- (C) (−2, 2)
- (D) (0, 3)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Log and polynomial functions are continuous on their domains. f needs x > 0 and x ≠ 2.

- (A) includes x = 0. (C) includes x ≤ 0.
- (D) includes x = 2.

**If you missed this:** [Topic 1.12 study guide](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-study-guide/).
</details>

## Question 15 (multiple choice · 1.13)

Let f(x) = sin(2x)/(x² + 5x) for x ≠ 0 and x ≠ −5. Which value of f(0) makes f continuous at x = 0?

- (A) 0
- (B) 5/2
- (C) 2/5
- (D) No value: the discontinuity cannot be removed.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** sin(2x)/(x(x + 5)) = [sin(2x)/(2x)] × 2/(x + 5) → 1 × 2/5 = 2/5. The limit exists, so f(0) = 2/5 removes the break.

- (A) treats 0/0 as 0. (B) inverts the ratio.
- (D) It can be removed because the limit exists.

**If you missed this:** [Topic 1.13 study guide](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-study-guide/).
</details>

## Question 16 (multiple choice · 1.14)

What is lim (x → −3⁺) (x − 1)/(x² + 3x)?

- (A) −∞
- (B) +∞
- (C) 4/3
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The top tends to −4. Just above −3, the bottom x(x + 3) is (negative) × (small positive): small and negative. So the quotient is large and positive.

- (A) is the limit from the left.
- (C) and (D) treat nonzero/0 as finite.

**If you missed this:** the sign check in the [Topic 1.14 study guide](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-study-guide/).
</details>

## Question 17 (multiple choice · 1.15)

Find every horizontal asymptote of the graph of f(x) = (2x − 5)/|x + 1|.

- (A) y = 2 only
- (B) y = 2 and y = −2
- (C) y = −5
- (D) None; there is only a vertical asymptote, x = −1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For large positive x, |x + 1| = x + 1, so f(x) → 2. For large negative x, |x + 1| = −(x + 1), so f(x) → −2.

- (A) checks only x → ∞. (C) uses the constant term.
- (D) A vertical asymptote does not rule out horizontal ones.

**If you missed this:** [Topic 1.15 study guide](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/).
</details>

## Question 18 (short answer · 1.16)

A function f is continuous on [1, 4], with f(1) = 6 and f(4) = −3.

(a) Explain why f(c) = 0 for some c in (1, 4).
(b) Show that f(c) = c for some c in (1, 4).
(c) Does the theorem guarantee f(c) = 7 for some c in (1, 4)?

<details>
<summary>Worked answer</summary>

**(a)** f is continuous on [1, 4], and 0 is between f(4) = −3 and f(1) = 6. By the Intermediate Value Theorem, f(c) = 0 for some c in (1, 4).

**(b)** g(x) = f(x) − x is continuous on [1, 4], with g(1) = 5 and g(4) = −7. By the theorem, g(c) = 0, so f(c) = c, for some c in (1, 4).

**(c)** No. 7 is not between −3 and 6, so the theorem makes no promise (f might still reach 7).

**If you missed this:** [Topic 1.16 study guide](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 1.1 Change at an instant | 1 | [Guide 1.1](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-study-guide/) |
| 1.2 Limit notation | 2 | [Guide 1.2](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-study-guide/) |
| 1.3 Limits from graphs | 3 | [Guide 1.3](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-study-guide/) |
| 1.4 Limits from tables | 4 | [Guide 1.4](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-study-guide/) |
| 1.5 Limit properties | 5 | [Guide 1.5](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-study-guide/) |
| 1.6 Algebraic rewriting | 6, 7 | [Guide 1.6](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/) |
| 1.7 Choosing a method | 8 | [Guide 1.7](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-study-guide/) |
| 1.8 Squeeze theorem | 9 | [Guide 1.8](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/) |
| 1.9 Representations | 10 | [Guide 1.9](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-study-guide/) |
| 1.10 Discontinuity types | 11 | [Guide 1.10](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-study-guide/) |
| 1.11 Continuity at a point | 12, 13 | [Guide 1.11](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/) |
| 1.12 Continuity on intervals | 14 | [Guide 1.12](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-study-guide/) |
| 1.13 Removing discontinuities | 15 | [Guide 1.13](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-study-guide/) |
| 1.14 Vertical asymptotes | 16 | [Guide 1.14](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-study-guide/) |
| 1.15 Horizontal asymptotes | 17 | [Guide 1.15](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/) |
| 1.16 IVT | 18 | [Guide 1.16](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (unsure or a slip) or gap (wrong).
- **Fix gaps in Topics 1.5–1.7 and 1.11 first**; the rest of the unit relies on them.
- **For a gap**, read the guide, then do the topic's practice set.
- **Then try the [Unit 1 mixed review](/advanced-course-resources/calculus-ab/unit-1-review/)**, where each question combines topics.
