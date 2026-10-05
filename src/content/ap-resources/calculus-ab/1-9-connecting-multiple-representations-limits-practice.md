---
resourceId: "mb-ap-calcab-1.9-practice"
title: "Connecting Multiple Representations of Limits: Practice Questions (Calculus AB 1.9)"
description: "Seven original Marlbridge practice questions that mix graphs, tables, piecewise formulas and words in limit problems, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.9"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "One-sided limits and the limit properties for sums, products and composites"
prerequisiteResources: ["mb-ap-calcab-1.9-study-guide"]
learningObjectives:
  - "Read limits from graphs, tables, piecewise formulas and verbal descriptions"
  - "Combine limits when the functions are given in different representations"
  - "Handle composite limits by tracking the side from which the inner function arrives"
  - "Build a function that matches given limit statements"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. All table values are given."
related: ["mb-ap-calcab-1.9-study-guide", "mb-ap-calcab-1.9-revision-notes", "mb-ap-calcab-1.9-checklist"]
next: "mb-ap-calcab-1.9-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. All functions, tables and prices are invented for practice. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)"; x → a⁻ and x → a⁺ mean from the left and from the right. This set is for both Calculus AB and Calculus BC students.

Questions 1, 3 and 6 use the graph of the function q in Figure 1.

<figure>
<svg viewBox="0 0 540 290" role="img" aria-labelledby="q19-title q19-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q19-title">Graph of a piecewise function q with a hole at x = 0 and a jump at x = 2</title>
<desc id="q19-desc">A line falls from the filled point (−3, 2) to an open circle at (0, −1). A filled point sits at (0, 2). A line rises from the open circle at (0, −1) to an open circle at (2, 1). A horizontal segment at height 3 runs from the filled point (2, 3) to the filled point (3, 3).</desc>
<rect x="0" y="0" width="540" height="290" fill="#ffffff"/>
<line x1="40" y1="200" x2="520" y2="200" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="280" y1="275" x2="280" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="218">−3</text><text x="140" y="218">−2</text><text x="210" y="218">−1</text><text x="350" y="218">1</text><text x="420" y="218">2</text><text x="490" y="218">3</text>
<text x="518" y="192">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="273" y="254">−1</text><text x="273" y="154">1</text><text x="273" y="104">2</text><text x="273" y="54">3</text>
<text x="273" y="26">y</text>
</g>
<path d="M70,196L70,204M140,196L140,204M210,196L210,204M350,196L350,204M420,196L420,204M490,196L490,204M276,250L284,250M276,150L284,150M276,100L284,100M276,50L284,50" stroke="#1d2b44" stroke-width="1" fill="none"/>
<line x1="70" y1="100" x2="275" y2="246" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="285" y1="246" x2="415" y2="154" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="420" y1="50" x2="490" y2="50" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="70" cy="100" r="5" fill="#1d2b44"/>
<circle cx="280" cy="250" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280" cy="100" r="5" fill="#1d2b44"/>
<circle cx="420" cy="150" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="420" cy="50" r="5" fill="#1d2b44"/>
<circle cx="490" cy="50" r="5" fill="#1d2b44"/>
<text x="292" y="270" font-size="12" fill="#1d2b44">open circle (0, −1)</text>
<text x="292" y="92" font-size="12" fill="#1d2b44">filled point (0, 2)</text>
<text x="430" y="172" font-size="12" fill="#1d2b44">open circle (2, 1)</text>
<text x="380" y="40" font-size="12" fill="#1d2b44">filled point (2, 3)</text>
</svg>
<figcaption>Figure 1. The function q, defined for −3 ≤ x ≤ 3. Open circles are not on the graph; filled points are. Axes are unitless.</figcaption>
</figure>

## Question 1 (multiple choice · foundation)

Which statement about the function q in Figure 1 is true?

- (A) lim (x → 0) q(x) = 2
- (B) lim (x → 0) q(x) = −1
- (C) lim (x → 2) q(x) = 3
- (D) lim (x → 2⁻) q(x) = 3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Cover up x = 0. From both sides the lines head to the open circle at height −1.

- (A) reads the filled point: q(0) = 2 is the function value, not the limit.
- (C) uses only the right side. From the left q(x) → 1, so the limit at 2 does not exist.
- (D) uses the wrong side: lim (x → 2⁻) q(x) = 1.
</details>

## Question 2 (multiple choice · core)

Some values of a function h are shown below. You are also told that h(−3) = 7.

| x | −3.1 | −3.01 | −3.001 | −2.999 | −2.99 | −2.9 |
|---|---|---|---|---|---|---|
| h(x) | 4.61 | 4.0601 | 4.006001 | 3.994001 | 3.9401 | 3.41 |

Assuming the trend in the table continues, what is the best estimate of lim (x → −3) h(x)?

- (A) 3.994
- (B) 4
- (C) 7
- (D) The limit does not exist, because h(−3) is not close to the table values.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From the left the outputs fall towards 4; from the right they rise towards 4.

- (A) copies the nearest table entry instead of following the trend.
- (C) is the function value h(−3). A limit ignores the value at the point itself.
- (D) mixes up the limit with continuity. The limit exists; it just differs from h(−3) (a discontinuity, Topic 1.10).
</details>

## Question 3 (multiple choice · core)

The function g has the values shown below. Assume the trend continues and that g(x) < 2 for every x ≠ 0 near 0.

| x | −0.1 | −0.01 | −0.001 | 0.001 | 0.01 | 0.1 |
|---|---|---|---|---|---|---|
| g(x) | 1.99 | 1.9999 | 1.999999 | 1.999999 | 1.9999 | 1.99 |

Using this table and Figure 1, what is lim (x → 0) q(g(x))?

- (A) 1
- (B) 2
- (C) 3
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** As x → 0, g(x) → 2 from **below**, so the input to q approaches 2 from the left. From the graph, lim (u → 2⁻) q(u) = 1.

- (B) is the limit of the inner function g only.
- (C) uses q(2) or the right-hand limit at 2. The inputs to q stay below 2.
- (D) forgets that the input arrives from one side only, so only the left-hand limit matters.
</details>

## Question 4 (multiple choice · core)

A student evaluates v(x) = sin(π/x) at x = 0.1, 0.01 and 0.001 and gets 0 each time. Which statement is correct?

- (A) lim (x → 0) v(x) = 0, because the table values are all 0.
- (B) lim (x → 0) v(x) = 0, because −1 ≤ sin(π/x) ≤ 1 for every x ≠ 0.
- (C) The limit does not exist: for example v(2/41) = 1 and v(2/43) = −1, and values like these occur however close x is to 0.
- (D) lim (x → 0) v(x) = 1, because the largest value of sine is 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At x = 2/41, π/x = 20.5π, so v = sin(0.5π) = 1. At x = 2/43, π/x = 21.5π, so v = sin(1.5π) = −1. Such inputs exist as close to 0 as you like, so v(x) oscillates and does not settle.

- (A) trusts inputs that all make π/x a whole multiple of π.
- (B) confuses bounded with convergent. (The squeeze theorem shows x · sin(π/x) → 0, but that has an extra factor x.)
- (D) picks the maximum of sine, but v(x) also reaches −1 near 0.
</details>

## Question 5 (constructed response · core)

A function f satisfies all of the following:

- f(1) = 4
- lim (x → 1⁻) f(x) = 2 and lim (x → 1⁺) f(x) = 2
- lim (x → 3⁻) f(x) = −1 and lim (x → 3⁺) f(x) = 0
- f is not defined at x = 3

(a) Does lim (x → 1) f(x) exist? If so, state it. Does it equal f(1)?
(b) Does lim (x → 3) f(x) exist? Explain.
(c) Describe, in words, a graph of f near x = 1 and near x = 3.
(d) Write a piecewise formula for one function that satisfies every condition.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Yes. Both one-sided limits at 1 equal 2, so lim (x → 1) f(x) = **2**. This is not equal to f(1) = 4.

**(b)** No. The one-sided limits −1 and 0 differ. (Whether f(3) is defined makes no difference.)

**(c)** Near x = 1: the curve approaches an open circle at (1, 2) from both sides, with a separate filled point at (1, 4). Near x = 3: from the left the curve heads to an open circle at (3, −1); from the right it heads to an open circle at (3, 0); there is no point on the graph at x = 3.

**(d)** One possible answer (many are correct):

- f(x) = x + 1 for x < 1
- f(1) = 4
- f(x) = 7/2 − (3/2)x for 1 < x < 3
- f(x) = x − 3 for x > 3

Check: 1 + 1 = 2; 7/2 − 3/2 = 2; 7/2 − 9/2 = −1; 3 − 3 = 0; and x = 3 is in no piece.

| Point | What earns it |
|---|---|
| 1 | (a) limit is 2, with the reason that both one-sided limits equal 2, and states that it differs from f(1) = 4 |
| 1 | (b) does not exist, because the one-sided limits −1 and 0 differ |
| 1 | (c) correct open circles and filled point at x = 1, and two different open circles with no point at x = 3 |
| 1 | (d) a formula whose pieces give the four one-sided limits correctly |
| 1 | (d) f(1) = 4 stated separately and x = 3 excluded from the domain |

Any correct formula earns the (d) points.
</details>

## Question 6 (constructed response · core)

The function q is shown in Figure 1. The function r is defined for all x, and some values of r are shown below. Assume that r(x) < 2 for x < 2, that r(x) > 2 for x > 2, and that the trend in the table continues.

| x | 1.9 | 1.99 | 1.999 | 2.001 | 2.01 | 2.1 |
|---|---|---|---|---|---|---|
| r(x) | 1.8 | 1.98 | 1.998 | 2.003 | 2.03 | 2.3 |

(a) Estimate lim (x → 2) r(x). Explain how the table supports your answer.
(b) Find lim (x → 2) [q(x) + r(x)], or explain why it does not exist.
(c) Find lim (x → 2) [r(x) · q(x − 2)].
(d) Find lim (x → 2) q(r(x)), or explain why it does not exist.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** From the left the values rise towards 2; from the right they fall towards 2. So lim (x → 2) r(x) ≈ **2**.

**(b)** q has no two-sided limit at 2, so work one side at a time.
Left: q(x) → 1 and r(x) → 2, so the sum → 3.
Right: q(x) → 3 and r(x) → 2, so the sum → 5.
3 ≠ 5, so lim (x → 2) [q(x) + r(x)] **does not exist**.

**(c)** As x → 2, x − 2 → 0 from both sides, and lim (u → 0) q(u) = −1. Both limits exist, so the product → 2 × (−1) = **−2**. Using q(0) = 2 would give 4, which is wrong: x − 2 ≠ 0 while x ≠ 2.

**(d)** As x → 2⁻, r(x) → 2 from **below**, so q(r(x)) → lim (u → 2⁻) q(u) = 1.
As x → 2⁺, r(x) → 2 from **above**, so q(r(x)) → lim (u → 2⁺) q(u) = 3.
1 ≠ 3, so lim (x → 2) q(r(x)) **does not exist**.

| Point | What earns it |
|---|---|
| 1 | (a) estimate 2, referring to the trend from both sides (not one table entry) |
| 1 | (b) one-sided sums 3 and 5, concluding the limit does not exist |
| 1 | (c) −2, using lim (u → 0) q(u) = −1 rather than q(0) |
| 1 | (d) links each side of x = 2 to the side from which r(x) approaches 2 |
| 1 | (d) one-sided values 1 and 3, concluding the limit does not exist |

Compare Question 3, where the inner function stayed below 2 on both sides.
</details>

## Question 7 (constructed response · stretch)

A fictional courier, Harrowgate Parcels, charges by the mass w of a parcel in kilograms:

- $6 for a parcel of more than 0 kg and up to and including 2 kg
- $9 for more than 2 kg and up to and including 5 kg
- $14 for more than 5 kg and up to and including 10 kg

Let C(w) be the charge in dollars.

(a) Write C(w) as a piecewise formula for 0 < w ≤ 10.
(b) Find lim (w → 2⁻) C(w), lim (w → 2⁺) C(w) and C(2). Does lim (w → 2) C(w) exist?
(c) Find lim (w → 3.5) C(w) and lim (w → 5⁺) C(w). Write the second one as a sentence about parcels.
(d) A student evaluates C(1.9), C(1.99) and C(1.999), gets 6 each time, and concludes that lim (w → 2) C(w) = 6. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** C(w) = 6 for 0 < w ≤ 2; C(w) = 9 for 2 < w ≤ 5; C(w) = 14 for 5 < w ≤ 10.

**(b)** Just below 2 kg the charge is 6, so lim (w → 2⁻) C(w) = **6**. Just above, it is 9, so lim (w → 2⁺) C(w) = **9**. C(2) = **6** ("up to and including 2 kg"). The one-sided limits differ, so lim (w → 2) C(w) **does not exist**.

**(c)** For every w near 3.5, C(w) = 9, so lim (w → 3.5) C(w) = **9**. Just above 5 kg the charge is 14, so lim (w → 5⁺) C(w) = **14**.
Sentence: "For parcels slightly heavier than 5 kg, the charge is $14." (Note that C(5) = 9, so this one-sided limit is not the charge at exactly 5 kg.)

**(d)** The student only used inputs **less than** 2, so the table shows the left-hand limit only. C(2.01) = 9 shows the right-hand limit is 9, so the two-sided limit does not exist.

| Point | What earns it |
|---|---|
| 1 | (a) correct three-piece formula with the correct endpoint inequalities (≤ on the right end of each band) |
| 1 | (b) one-sided limits 6 and 9, and C(2) = 6 |
| 1 | (b) concludes the limit does not exist because the one-sided limits differ |
| 1 | (c) 9 and 14, with a sentence that describes parcels slightly heavier than 5 kg (not exactly 5 kg) |
| 1 | (d) identifies that only the left side was tested and that the right-hand values are 9 |

A step graph with correct open and filled circles may support (b) and (c).
</details>

## How did you do?

- **Q1 or Q2 wrong:** reread "One limit, four representations" and "Reading a table" in the [study guide](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-study-guide/).
- **Q3 or Q6(d) wrong:** redo Worked example 2 and track the side.
- **Q4 wrong:** see "How a table can mislead" in the guide.
- **Q5 or Q7 wrong:** redo Worked example 3 and the piecewise section of "Reading a formula and reading words".
- **Q6(b) or (c) wrong:** see Worked example 1(c) and (d).

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-checklist/).
