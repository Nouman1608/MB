---
resourceId: "mb-ap-calcab-1.5-practice"
title: "Determining Limits Using Algebraic Properties of Limits: Practice Questions (Calculus AB 1.5)"
description: "Seven original Marlbridge practice questions on the limit properties, composite and one-sided limits, from given values, formulas and graphs, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.5"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation and one-sided limits"
prerequisiteResources: ["mb-ap-calcab-1.5-study-guide"]
learningObjectives:
  - "Combine given limits using the sum, difference, product, quotient, power and root properties"
  - "Recognise when the quotient property cannot be used"
  - "Find limits of composite functions, tracking the side of approach when needed"
  - "Find one-sided and two-sided limits from piecewise formulas and from graphs"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals)."
related: ["mb-ap-calcab-1.5-study-guide", "mb-ap-calcab-1.5-revision-notes", "mb-ap-calcab-1.5-checklist"]
next: "mb-ap-calcab-1.5-checklist"
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
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)"; x → a⁻ and x → a⁺ mean approaching from the left and from the right. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

You are told that lim (x → 2) f(x) = 3 and lim (x → 2) g(x) = −4. What is

lim (x → 2) [ (f(x))² − 2g(x) ] / [ f(x) + g(x) ]?

- (A) 17/7
- (B) −14
- (C) −17
- (D) −1

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Top: (f(x))² → 3² = 9 (power) and 2g(x) → 2 × (−4) = −8 (constant multiple), so the top tends to 9 − (−8) = 17 (difference). Bottom: 3 + (−4) = −1 (sum). The bottom limit is not 0, so the quotient property gives 17/(−1) = −17.

- (A) uses 3 − (−4) = 7 in the bottom: the denominator is a sum, not a difference.
- (B) replaces (f(x))² by 2f(x), giving (6 + 8)/(−1) = −14. Squaring is not doubling.
- (D) loses the double negative in the top: 9 − 8 = 1, then 1/(−1) = −1. Subtracting −8 means adding 8.
</details>

## Question 2 (multiple choice · foundation)

What is lim (x → 2) (x³ − 3x)/√(x² + 5)?

- (A) 2/9
- (B) 2/3
- (C) 2/7
- (D) 14/3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The top is a polynomial, so its limit is 8 − 6 = 2. The inner part of the bottom tends to 4 + 5 = 9 > 0, so the root property gives √9 = 3. The bottom limit is 3, not 0, so the quotient property gives 2/3.

- (A) forgets the square root and divides by 9.
- (C) treats √(x² + 5) as √(x²) + 5 = 2 + 5 = 7. The root covers the whole of x² + 5.
- (D) adds instead of subtracting in the top: 8 + 6 = 14.
</details>

## Question 3 (multiple choice · core)

The function f is defined by f(y) = 3 − y for y < 0 and f(y) = 2y + 1 for y ≥ 0. What is lim (x → 0) f(x²)?

- (A) 0
- (B) 1
- (C) 3
- (D) The limit does not exist, because lim (y → 0) f(y) does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The inner function x² tends to 0. For every x ≠ 0, x² > 0, so the inner values approach 0 **from above**, from both sides of x = 0. So f(x²) uses only the piece 2y + 1, and f(x²) → lim (y → 0⁺) f(y) = 2(0) + 1 = 1.

- (A) gives the limit of the inner function, x² → 0, and forgets to apply f.
- (C) uses the left-hand limit of f at 0, which is 3. But x² is never negative, so that piece is never used.
- (D) is a tempting rule but it is false. f does jump at 0, yet x² only reaches 0 from one side, so the jump does not matter here.
</details>

## Question 4 (multiple choice · core)

Suppose lim (x → c) p(x) = 6 and lim (x → c) q(x) = 0. Which statement must be true?

- (A) lim (x → c) p(x)/q(x) = 0
- (B) lim (x → c) p(x)/q(x) = 6
- (C) lim (x → c) p(x) · q(x) = 0
- (D) lim (x → c) q(x)/p(x) does not exist

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Both limits exist, so the product property gives 6 × 0 = 0.

- (A) and (B) use the quotient property with a bottom limit of 0, which is not allowed. In fact, a top tending to 6 over a bottom tending to 0 is unbounded, so p/q has no finite limit.
- (D) is false: for q/p the bottom limit is 6 ≠ 0, so the quotient property applies and the limit is 0/6 = 0.
</details>

## Question 5 (graph · core)

The graphs of f and g are shown for −2 ≤ x ≤ 4.

<figure>
<svg viewBox="0 0 580 250" role="img" aria-labelledby="pq15-title pq15-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pq15-title">Graphs of f and g for Question 5, each with a break at x = 2</title>
<desc id="pq15-desc">Two panels, each for x from −2 to 4 and y from 0 to 3. Left panel, y = f(x): a line segment rises from (−2, 1) through (0, 2) to an open circle at (2, 3); there is a filled circle at (2, 2); a second segment rises from an open circle at (2, 1) to (4, 3). Right panel, y = g(x): a line segment falls from (−2, 2) through (0, 1) to an open circle at (2, 0); a second segment starts at a filled circle at (2, 2) and falls to (4, 0).</desc>
<rect x="0" y="0" width="580" height="250" fill="#ffffff"/>
<line x1="40" y1="214" x2="40" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="78" y1="214" x2="78" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="116" y1="214" x2="116" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="154" y1="214" x2="154" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="192" y1="214" x2="192" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="230" y1="214" x2="230" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="268" y1="214" x2="268" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="214" x2="268" y2="214" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="164" x2="268" y2="164" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="114" x2="268" y2="114" stroke="#d9dee7" stroke-width="1"/>
<line x1="40" y1="64" x2="268" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="32" y1="214" x2="278" y2="214" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="116" y1="222" x2="116" y2="54" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="40" y="230">−2</text><text x="78" y="230">−1</text><text x="154" y="230">1</text><text x="192" y="230">2</text><text x="230" y="230">3</text><text x="268" y="230">4</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="110" y="168">1</text><text x="110" y="118">2</text><text x="110" y="68">3</text><text x="110" y="230">0</text></g>
<text x="282" y="218" font-size="12" fill="#1d2b44">x</text>
<text x="122" y="52" font-size="12" fill="#1d2b44">y</text>
<text x="154" y="28" font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">y = f(x)</text>
<line x1="40" y1="164" x2="192" y2="64" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="192" y1="164" x2="268" y2="64" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="192" cy="64" r="5.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="192" cy="164" r="5.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="192" cy="114" r="5.5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
<line x1="320" y1="214" x2="320" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="358" y1="214" x2="358" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="396" y1="214" x2="396" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="434" y1="214" x2="434" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="472" y1="214" x2="472" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="510" y1="214" x2="510" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="548" y1="214" x2="548" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="214" x2="548" y2="214" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="164" x2="548" y2="164" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="114" x2="548" y2="114" stroke="#d9dee7" stroke-width="1"/>
<line x1="320" y1="64" x2="548" y2="64" stroke="#d9dee7" stroke-width="1"/>
<line x1="312" y1="214" x2="558" y2="214" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="396" y1="222" x2="396" y2="54" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="320" y="230">−2</text><text x="358" y="230">−1</text><text x="434" y="230">1</text><text x="472" y="230">2</text><text x="510" y="230">3</text><text x="548" y="230">4</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="390" y="168">1</text><text x="390" y="118">2</text><text x="390" y="68">3</text><text x="390" y="230">0</text></g>
<text x="562" y="218" font-size="12" fill="#1d2b44">x</text>
<text x="402" y="52" font-size="12" fill="#1d2b44">y</text>
<text x="434" y="28" font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">y = g(x)</text>
<line x1="320" y1="114" x2="472" y2="214" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="472" y1="114" x2="548" y2="214" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="472" cy="214" r="5.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="472" cy="114" r="5.5" fill="#1d2b44" stroke="#1d2b44" stroke-width="2"/>
</svg>
<figcaption>Question 5 graphs. Open circles are points not on the graph; filled circles show f(2) = 2 and g(2) = 2. Every piece is a straight line. Axes are unitless.</figcaption>
</figure>

(a) Find lim (x → 2⁻) f(x) and lim (x → 2⁺) f(x). Does lim (x → 2) f(x) exist?
(b) Find lim (x → 2) [f(x) + g(x)], or explain why it does not exist. Compare it with f(2) + g(2).
(c) Find lim (x → 2) f(x)g(x), or explain why it does not exist.
(d) Find lim (x → 0) f(g(x)).

<details>
<summary>Worked solution</summary>

**(a)** From the left, f heads to the open circle at height 3. From the right, f heads to the open circle at height 1. The one-sided limits are 3 and 1. They differ, so **lim (x → 2) f(x) does not exist**. (The filled dot, f(2) = 2, is not either limit.)

**(b)** The sum property cannot be used, because lim f(x) does not exist at 2. Use one-sided limits. For g: from the left, g → 0; from the right, g → 2.

- Left: 3 + 0 = 3. Right: 1 + 2 = 3.

So **lim (x → 2) [f(x) + g(x)] = 3**. But f(2) + g(2) = 2 + 2 = 4. The limit and the value are different, and that is allowed.

**(c)** Left: 3 × 0 = 0. Right: 1 × 2 = 2. They differ, so **the limit does not exist**.

**(d)** As x → 0, g(x) → g(0) = 1 (g has no break at 0). Near y = 1, f has no break, and f(1) = 1/2 + 2 = 5/2 (the left piece passes through (0, 2) and (2, 3), so it rises by 1/2 per unit). By the composite property, **lim (x → 0) f(g(x)) = 5/2**.

Suggested mark points (4): 1 for both one-sided limits of f and "does not exist"; 1 for one-sided sums 3 and 3, limit 3, and noting f(2) + g(2) = 4 is different; 1 for products 0 and 2 and "does not exist"; 1 for g(x) → 1 and f(1) = 5/2.
</details>

## Question 6 (constructed response · core)

For a constant k, the function q is defined by

- q(x) = x² − 2x + k for x < 3
- q(x) = 2k − x for x ≥ 3

(a) Find lim (x → 3⁻) q(x) and lim (x → 3⁺) q(x) in terms of k.
(b) Find the value of k for which lim (x → 3) q(x) exists. State the limit.
(c) Using your value of k, find lim (x → 3) [q(x) − x]/[q(x) + x]. Justify each step by naming a limit property.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For x < 3, q is the polynomial x² − 2x + k, so lim (x → 3⁻) q(x) = 9 − 6 + k = **3 + k**. For x > 3, q(x) = 2k − x, so lim (x → 3⁺) q(x) = **2k − 3**.

**(b)** The two-sided limit exists only if the one-sided limits are equal: 3 + k = 2k − 3, so **k = 6**. The limit is 3 + 6 = **9**.

**(c)** lim (x → 3) q(x) = 9 (part (b)) and lim (x → 3) x = 3 (identity).

- Top: 9 − 3 = 6 (difference property).
- Bottom: 9 + 3 = 12 (sum property).
- The bottom limit is 12 ≠ 0, so by the quotient property the limit is 6/12 = **1/2**.

| Point | What earns it |
|---|---|
| 1 | Both one-sided limits correct in terms of k: 3 + k and 2k − 3 |
| 1 | Sets the one-sided limits equal, with the reason (the two-sided limit needs them equal) |
| 1 | k = 6 and limit 9 |
| 1 | Limit 1/2, naming the difference, sum and quotient properties and checking the bottom limit is nonzero |

Acceptable alternative for (c): substitute q(x) = 2k − x = 12 − x for x > 3 and x² − 2x + 6 for x < 3, and find each one-sided limit of the quotient separately; both give 1/2. Reading the answer from a table of values earns no mark for (c), because it does not justify the value.
</details>

## Question 7 (constructed response · stretch)

You are told that lim (x → a) f(x) = 4 and lim (x → a) [f(x) + g(x)] = 1. You are also told that lim (x → a) h(x) does not exist.

(a) Find lim (x → a) g(x). Justify your answer.
(b) Find lim (x → a) f(x)g(x) / [2 + g(x)].
(c) Explain why lim (x → a) [f(x) + h(x)] cannot exist.
(d) A student says: "If neither lim (x → a) u(x) nor lim (x → a) v(x) exists, then lim (x → a) [u(x) + v(x)] cannot exist." Give an example that shows the student is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Write g(x) = [f(x) + g(x)] − f(x). Both limits on the right exist, so by the difference property, lim (x → a) g(x) = 1 − 4 = **−3**.

**(b)** Top: 4 × (−3) = −12 (product). Bottom: 2 + (−3) = −1 (sum). The bottom limit is not 0, so the quotient property gives −12/(−1) = **12**.

**(c)** Suppose lim [f(x) + h(x)] did exist. Then h(x) = [f(x) + h(x)] − f(x) would be a difference of two functions whose limits exist, so lim h(x) would exist by the difference property. That contradicts what you are told. So lim [f(x) + h(x)] cannot exist.

**(d)** Take u(x) = |x − a|/(x − a) and v(x) = −u(x). Near a, u is −1 on the left and 1 on the right, so lim u does not exist; the same is true for v. But u(x) + v(x) = 0 for all x ≠ a, so lim [u(x) + v(x)] = 0. Any pair of jumps that cancel works, as in Question 5(b).

| Point | What earns it |
|---|---|
| 1 | lim g = −3, justified by writing g as a difference of functions with known limits |
| 1 | 12, with the bottom limit −1 checked as nonzero |
| 1 | Argument for (c): if the sum had a limit, the difference property would give a limit for h, a contradiction |
| 1 | A valid counterexample in (d), with both one-sided limits shown for one function and the sum's limit stated |

Acceptable alternative for (d): a graphical example, such as the f and g of Question 5 at x = 2, with one-sided values stated.
</details>

## How did you do?

- **Q1, Q2 or Q7(b) wrong:** revisit the properties table and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-study-guide/).
- **Q3 or Q5(d) wrong:** reread "Limits of composite functions", especially the side of approach.
- **Q4 or Q7(c) wrong:** check the condition for each property, especially a nonzero bottom limit.
- **Q5 or Q6 wrong:** redo Worked examples 2 and 3: work one side at a time.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-checklist/).
