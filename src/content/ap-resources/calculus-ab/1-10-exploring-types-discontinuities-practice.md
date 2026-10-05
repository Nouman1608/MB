---
resourceId: "mb-ap-calcab-1.10-practice"
title: "Exploring Types of Discontinuities: Practice Questions (Calculus AB 1.10)"
description: "Seven original Marlbridge practice questions on classifying removable, jump and vertical-asymptote discontinuities from graphs, tables and formulas, with suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.10"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "One-sided limits and factoring rational expressions"
prerequisiteResources: ["mb-ap-calcab-1.10-study-guide"]
learningObjectives:
  - "Classify a discontinuity from one-sided limits and the function value"
  - "Find and classify the discontinuities of rational, absolute-value and piecewise functions"
  - "Read discontinuities from a graph and a table"
  - "Justify each classification with limits and explain common errors"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals)."
related: ["mb-ap-calcab-1.10-study-guide", "mb-ap-calcab-1.10-revision-notes", "mb-ap-calcab-1.10-checklist"]
next: "mb-ap-calcab-1.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator** and exact answers. Notation: lim (x → c) f(x) means "the limit as x approaches c of f(x)"; x → c⁻ means from the left and x → c⁺ means from the right. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A function f satisfies lim (x → 4⁻) f(x) = 3, lim (x → 4⁺) f(x) = 3 and f(4) = 1. Which statement is true?

- (A) f has a removable discontinuity at x = 4.
- (B) f has a jump discontinuity at x = 4.
- (C) f has a vertical asymptote at x = 4.
- (D) f is continuous at x = 4, because f(4) is defined.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Both one-sided limits equal 3, so lim (x → 4) f(x) = 3 exists. But f(4) = 1 ≠ 3. A limit that exists but disagrees with the function value is a removable discontinuity: the graph has a hole at (4, 3) and a separate point at (4, 1).

- (B) A jump needs the one-sided limits to be different. Here they are equal.
- (C) A vertical asymptote needs unbounded behaviour on at least one side. Both limits here are finite.
- (D) Being defined is only one condition. The limit must also equal f(4), and 3 ≠ 1.
</details>

## Question 2 (multiple choice · core)

Let h(x) = (x² − 16)/(x² − 3x − 4). Which statement describes the discontinuities of h?

- (A) A removable discontinuity at x = 4 and a vertical asymptote at x = −1
- (B) Vertical asymptotes at both x = 4 and x = −1
- (C) A removable discontinuity at x = −1 and a vertical asymptote at x = 4
- (D) Removable discontinuities at both x = 4 and x = −1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Factor: h(x) = (x − 4)(x + 4)/((x − 4)(x + 1)). For x ≠ 4 and x ≠ −1, h(x) = (x + 4)/(x + 1). At x = 4 the factor cancels and the limit is 8/5, but h(4) is undefined: a removable discontinuity (a hole at (4, 8/5)). At x = −1 the factor (x + 1) stays in the denominator, and substitution gives 3/0, so h is unbounded near x = −1: a vertical asymptote.

- (B) assumes every zero of the denominator gives an asymptote, without factoring the numerator.
- (C) swaps the two points. The factor that cancels, (x − 4), gives the hole.
- (D) assumes every zero of the denominator gives a hole. Only the factor shared with the numerator cancels.
</details>

## Question 3 (multiple choice · core)

What kind of discontinuity does q(x) = (x² − 5x)/|x − 5| have at x = 5?

- (A) Removable
- (B) Jump
- (C) Vertical asymptote
- (D) None: q is continuous at x = 5.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Write x² − 5x = x(x − 5). For x > 5, |x − 5| = x − 5, so q(x) = x and lim (x → 5⁺) q(x) = 5. For x < 5, |x − 5| = −(x − 5), so q(x) = −x and lim (x → 5⁻) q(x) = −5. Both one-sided limits are finite but different, so the discontinuity is a jump.

- (A) treats |x − 5| as if it were x − 5 and cancels, getting x → 5 from both sides. The absolute value changes sign on the left.
- (C) sees a zero denominator and stops. After rewriting, both sides are finite.
- (D) q(5) is undefined, so q cannot be continuous at 5.
</details>

## Question 4 (multiple choice · core)

A function r has r(2) = 0. The table shows some values of r near x = 2.

| x | 1.9 | 1.99 | 1.999 | 2.001 | 2.01 | 2.1 |
|---|---|---|---|---|---|---|
| r(x) | −10 | −100 | −1000 | 1000 | 100 | 10 |

Which conclusion is most consistent with the table?

- (A) r has a removable discontinuity at x = 2, because the values on the two sides cancel out to 0.
- (B) r has a jump discontinuity at x = 2.
- (C) r has a discontinuity due to a vertical asymptote at x = 2.
- (D) r is continuous at x = 2, because r(2) is defined.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** As x gets closer to 2, the values grow in size without settling: −10, −100, −1000 on the left and 1000, 100, 10 on the right (reading towards 2). This suggests r(x) → −∞ from the left and r(x) → +∞ from the right, which is the behaviour of a vertical asymptote. A table only suggests this; a formula or graph would be needed to justify it.

- (A) averages the two sides. A limit is not an average; each side must approach the same finite number.
- (B) A jump needs each side to approach a finite number. Neither side does here.
- (D) A defined value does not make a function continuous. The limit must exist and equal r(2).
</details>

## Question 5 (graph · core)

The graph of a function f is shown for −4 ≤ x ≤ 5.

<figure>
<svg viewBox="0 0 540 330" role="img" aria-labelledby="q5-title q5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q5-title">Graph of f for x from −4 to 5, with breaks at x = −1, x = 1 and x = 3</title>
<desc id="q5-desc">A straight line rises from (−4, −2) to an open circle at (1, 3), passing through (0, 2). On this line there is an open circle at (−1, 1), and a separate filled dot at (−1, 3). At x = 1 a filled dot sits at (1, 0.5). From this dot a curve rises slowly, then steeply, and leaves the top of the grid just before x = 3. A dashed vertical line is drawn at x = 3. To the right of it, a curve comes up from the bottom of the grid just after x = 3 and rises gently to (4, −1) and (5, −0.5).</desc>
<rect x="0" y="0" width="540" height="330" fill="#ffffff"/>
<line x1="50" y1="210" x2="525" y2="210" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="310" x2="260" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="206" x2="60" y2="214"/><line x1="110" y1="206" x2="110" y2="214"/><line x1="160" y1="206" x2="160" y2="214"/><line x1="210" y1="206" x2="210" y2="214"/><line x1="310" y1="206" x2="310" y2="214"/><line x1="360" y1="206" x2="360" y2="214"/><line x1="410" y1="206" x2="410" y2="214"/><line x1="460" y1="206" x2="460" y2="214"/><line x1="510" y1="206" x2="510" y2="214"/>
<line x1="256" y1="300" x2="264" y2="300"/><line x1="256" y1="270" x2="264" y2="270"/><line x1="256" y1="240" x2="264" y2="240"/><line x1="256" y1="180" x2="264" y2="180"/><line x1="256" y1="150" x2="264" y2="150"/><line x1="256" y1="120" x2="264" y2="120"/><line x1="256" y1="90" x2="264" y2="90"/><line x1="256" y1="60" x2="264" y2="60"/><line x1="256" y1="30" x2="264" y2="30"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="227">−4</text><text x="110" y="227">−3</text><text x="160" y="227">−2</text><text x="210" y="227">−1</text><text x="310" y="227">1</text><text x="360" y="227">2</text><text x="400" y="227">3</text><text x="460" y="227">4</text><text x="510" y="227">5</text><text x="532" y="214">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="252" y="304">−3</text><text x="252" y="274">−2</text><text x="252" y="244">−1</text><text x="252" y="184">1</text><text x="252" y="154">2</text><text x="252" y="124">3</text><text x="252" y="94">4</text><text x="252" y="64">5</text><text x="252" y="34">6</text><text x="252" y="16">y</text>
</g>
<line x1="410" y1="300" x2="410" y2="25" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="60" y1="270" x2="304.9" y2="123.1" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M310.0 195.0 L316.3 194.0 L322.6 192.8 L329.0 191.5 L335.3 189.9 L341.6 188.1 L347.9 185.8 L354.3 183.1 L360.6 179.7 L366.9 175.2 L370.1 172.4 L373.2 169.2 L376.4 165.4 L379.5 160.8 L382.7 155.1 L385.9 147.9 L389.0 138.5 L392.2 125.8 L395.3 107.6 L398.5 79.5 L401.7 30.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M426.7 300.0 L429.5 286.8 L432.4 276.9 L435.3 269.3 L438.2 263.3 L441.0 258.3 L443.9 254.2 L446.8 250.8 L449.7 247.8 L455.4 243.0 L461.1 239.3 L466.9 236.4 L472.6 233.9 L478.4 231.9 L484.1 230.2 L489.9 228.8 L495.6 227.5 L501.4 226.4 L507.1 225.4 L510.0 225.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="210" cy="180" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="210" cy="120" r="5" fill="#1d2b44"/>
<circle cx="310" cy="120" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="310" cy="195" r="5" fill="#1d2b44"/>
<text x="416" y="40" font-size="12" fill="#1d2b44">x = 3</text>
</svg>
<figcaption>Graph for Question 5. Open circles are not on the graph; filled dots are. The dashed line x = 3 is a vertical asymptote. Key points: open circle (−1, 1), filled dot (−1, 3), open circle (1, 3), filled dot (1, 0.5).</figcaption>
</figure>

(a) For each of c = −1, c = 1 and c = 3, state lim (x → c⁻) f(x), lim (x → c⁺) f(x) and f(c).
(b) Classify the discontinuity at each of these three points, and justify each answer using your results from (a).
(c) Is f continuous at x = 0? Give a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

| c | Left-hand limit | Right-hand limit | f(c) |
|---|---|---|---|
| −1 | 1 | 1 | 3 |
| 1 | 3 | 0.5 | 0.5 |
| 3 | +∞ (unbounded) | −∞ (unbounded) | undefined |

**(b)** At x = −1: **removable**. Both one-sided limits are 1, so lim (x → −1) f(x) = 1 exists, but f(−1) = 3 ≠ 1.
At x = 1: **jump**. The one-sided limits are 3 and 0.5, both finite but different. (f(1) = 0.5 matches the right side, but that does not repair the break.)
At x = 3: **vertical asymptote**. f(x) → +∞ as x → 3⁻ and f(x) → −∞ as x → 3⁺.

**(c)** Yes. f(0) = 2, and the graph is an unbroken line through (0, 2), so lim (x → 0) f(x) = 2 = f(0).

| Point | What earns it |
|---|---|
| 1 | All limits and values in (a) correct at x = −1 and x = 1 |
| 1 | Removable at x = −1, citing that the limit exists (1) and differs from f(−1) = 3 |
| 1 | Jump at x = 1, citing two different finite one-sided limits |
| 1 | Vertical asymptote at x = 3, citing unbounded behaviour on at least one side, **and** a correct reason for (c) |

Writing "∞" in (a) for x = 3 is acceptable if the student also says the limit does not exist as a number.
</details>

## Question 6 (constructed response · core)

Let R(x) = (2x² − 2x − 12)/(x² − 9).

(a) Find every value of x at which R is discontinuous.
(b) Classify each discontinuity. Justify each answer using limits.
(c) Give the coordinates of any hole in the graph of R.
(d) A student says: "R(3) and R(−3) are both undefined, so the two discontinuities must be the same type." Explain the student's error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x² − 9 = (x − 3)(x + 3) is zero at x = 3 and x = −3. R is a rational function, so these are its only discontinuities.

**(b)** Factor the numerator: 2x² − 2x − 12 = 2(x² − x − 6) = 2(x − 3)(x + 2). For x ≠ ±3,

R(x) = 2(x − 3)(x + 2)/((x − 3)(x + 3)) = 2(x + 2)/(x + 3).

At x = 3: lim (x → 3) R(x) = 2(5)/6 = **5/3**. The limit exists but R(3) is undefined, so the discontinuity is **removable**.

At x = −3: the simplified form gives 2(−1)/0 = −2/0, a nonzero number over 0. For x slightly greater than −3, x + 3 is small and positive while 2(x + 2) is close to −2, so R(x) → −∞ as x → −3⁺. From the left, x + 3 is small and negative, so R(x) → +∞ as x → −3⁻. This is a **vertical asymptote**.

**(c)** The hole is at **(3, 5/3)**.

**(d)** Being undefined only tells you where to look. The type depends on the limits. At x = 3 the factor (x − 3) cancels and the limit is the finite number 5/3. At x = −3 the factor (x + 3) remains in the denominator and R is unbounded.

| Point | What earns it |
|---|---|
| 1 | Both x = 3 and x = −3, from factoring the denominator |
| 1 | Simplifies to 2(x + 2)/(x + 3) and states removable at x = 3 with limit 5/3 |
| 1 | Vertical asymptote at x = −3, with the sign of R on at least one side correctly explained |
| 1 | Hole at (3, 5/3) **and** an explanation in (d) that the type depends on the limit, not on R(c) being undefined |

A table of values such as R(−2.99) = −198 and R(−3.01) = 202 supports the asymptote but does not replace the algebra.
</details>

## Question 7 (constructed response · stretch)

A function w is defined by

- w(x) = (x² − 4)/(x − 2) for x < 2
- w(2) = 3
- w(x) = x² for 2 < x ≤ 3
- w(x) = 1/(x − 5) for x > 3

(a) w has exactly three discontinuities. Find them, classify each one and justify each classification with limits.
(b) A student says: "w has a vertical asymptote at x = 2, because the first formula has x − 2 in the denominator." Explain why the student is wrong.
(c) Explain why no change to the single value w(3) could make w continuous at x = 3.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Candidates: x = 2 and x = 3, where the rule changes, and x = 5, where the last denominator is zero.

At **x = 2**: for x < 2, (x² − 4)/(x − 2) = (x − 2)(x + 2)/(x − 2) = x + 2, so lim (x → 2⁻) w(x) = 4. On the right, lim (x → 2⁺) x² = 4. The limit is 4, but w(2) = 3. **Removable.**

At **x = 3**: w(3) = 3² = 9 and lim (x → 3⁻) w(x) = 9. On the right, lim (x → 3⁺) 1/(x − 5) = 1/(−2) = −1/2. Both finite, 9 ≠ −1/2. **Jump.**

At **x = 5**: as x → 5⁺, x − 5 is small and positive, so w(x) → +∞. As x → 5⁻, w(x) → −∞. **Vertical asymptote.**

**(b)** The factor (x − 2) cancels with the numerator, so near x = 2 on the left w behaves like x + 2, which approaches 4, a finite number. Nothing is unbounded, so there is no asymptote. The break at x = 2 is a hole at (2, 4) with a separate point at (2, 3).

**(c)** Continuity at x = 3 needs lim (x → 3) w(x) to exist. The one-sided limits are 9 and −1/2, so the two-sided limit does not exist. Changing w(3) changes only the single point, not the one-sided limits, so the break remains whatever value w(3) takes.

| Point | What earns it |
|---|---|
| 1 | Removable at x = 2: simplifies the first piece, finds both one-sided limits equal to 4 and compares with w(2) = 3 |
| 1 | Jump at x = 3: one-sided limits 9 and −1/2, both finite and different |
| 1 | Vertical asymptote at x = 5, with unbounded behaviour on at least one side |
| 1 | (b): the factor cancels, so the left-hand limit at 2 is finite (4) |
| 1 | (c): the two-sided limit does not exist, and the value w(3) does not affect the one-sided limits |
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "The three types you need" and Figure 1 in the [study guide](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-study-guide/).
- **Q2 or Q6 wrong:** redo Worked example 1 and the "Rational functions: factor first" section.
- **Q3 wrong:** see "Piecewise functions and absolute values" and rewrite the absolute value on each side.
- **Q5 or Q7 wrong:** redo Worked example 2 and practise the "Writing the justification" sentences.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-10-exploring-types-discontinuities-checklist/).
