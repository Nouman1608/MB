---
resourceId: "mb-ap-calcab-1.3-practice"
title: "Estimating Limit Values from Graphs: Practice Questions (Calculus AB 1.3)"
description: "Seven original Marlbridge practice questions on reading one-sided and two-sided limits from graphs, with jumps, holes, asymptotes, oscillation and misleading windows."
course: "calculus-ab"
unit: 1
topics: ["1.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation, including one-sided limits"
prerequisiteResources: ["mb-ap-calcab-1.3-study-guide"]
learningObjectives:
  - "Read one-sided and two-sided limits from a graph and keep them separate from function values"
  - "Identify and justify why a limit does not exist: a jump, unbounded behaviour or oscillation"
  - "Judge when a graph's scale may hide behaviour"
  - "Build a graph that matches given limit statements"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "No calculator is needed. Any function values you need for checking are given in the question or are quick to work out by hand."
related: ["mb-ap-calcab-1.3-study-guide", "mb-ap-calcab-1.3-revision-notes", "mb-ap-calcab-1.3-checklist"]
next: "mb-ap-calcab-1.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Questions 1, 2 and 5 use the graph of g in Figure P1."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and every point marked on a graph has exact coordinates. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)"; x → a⁻ means from the left (values less than a) and x → a⁺ means from the right. This set is for both Calculus AB and Calculus BC students.

Questions 1, 2 and 5 use Figure P1.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="p13-title p13-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p13-title">Graph of a function g on the interval from x = −3 to x = 5</title>
<desc id="p13-desc">Three straight pieces. First piece: from the filled point (−3, 2) a line falls to an open circle at (0, −1). Second piece: from the filled point (0, 2) a line rises to (4, 4); on this line there is an open circle at (2, 3), and a separate filled dot sits at (2, 0) on the x-axis. Third piece: from (4, 4) a line falls to the filled point (5, 3). The second and third pieces meet at (4, 4) with no gap, making a corner.</desc>
<rect x="0" y="0" width="560" height="370" fill="#ffffff"/>
<line x1="50" y1="255" x2="545" y2="255" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="235" y1="360" x2="235" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="70" y1="251" x2="70" y2="259"/><line x1="125" y1="251" x2="125" y2="259"/><line x1="180" y1="251" x2="180" y2="259"/><line x1="290" y1="251" x2="290" y2="259"/><line x1="345" y1="251" x2="345" y2="259"/><line x1="400" y1="251" x2="400" y2="259"/><line x1="455" y1="251" x2="455" y2="259"/><line x1="510" y1="251" x2="510" y2="259"/>
<line x1="231" y1="345" x2="239" y2="345"/><line x1="231" y1="300" x2="239" y2="300"/><line x1="231" y1="210" x2="239" y2="210"/><line x1="231" y1="165" x2="239" y2="165"/><line x1="231" y1="120" x2="239" y2="120"/><line x1="231" y1="75" x2="239" y2="75"/><line x1="231" y1="30" x2="239" y2="30"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="273">−3</text><text x="125" y="273">−2</text><text x="180" y="273">−1</text><text x="290" y="273">1</text><text x="335" y="273">2</text><text x="400" y="273">3</text><text x="455" y="273">4</text><text x="510" y="273">5</text><text x="541" y="247">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="227" y="349">−2</text><text x="227" y="304">−1</text><text x="227" y="214">1</text><text x="227" y="169">2</text><text x="227" y="124">3</text><text x="227" y="79">4</text><text x="227" y="34">5</text><text x="227" y="20">y</text>
</g>
<line x1="70" y1="165" x2="235" y2="300" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="235" y1="165" x2="455" y2="75" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="455" y1="75" x2="510" y2="120" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="235" cy="300" r="5.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="345" cy="120" r="5.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="70" cy="165" r="5" fill="#1d2b44"/>
<circle cx="235" cy="165" r="5" fill="#1d2b44"/>
<circle cx="345" cy="255" r="5" fill="#1d2b44"/>
<circle cx="510" cy="120" r="5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="75" y="153">(−3, 2)</text>
<text x="243" y="318">open (0, −1)</text>
<text x="243" y="186">filled (0, 2)</text>
<text x="352" y="142">open (2, 3)</text>
<text x="352" y="246">filled (2, 0)</text>
<text x="440" y="64">(4, 4)</text>
<text x="490" y="142">(5, 3)</text>
<text x="370" y="62">y = g(x)</text>
</g>
</svg>
<figcaption>Figure P1. The graph of g for −3 ≤ x ≤ 5. Open circles (rings) are points the graph approaches but does not include; filled dots are values of g. Axes are unitless.</figcaption>
</figure>

## Question 1 (multiple choice · foundation)

Use Figure P1. What is lim (x → 2) g(x)?

- (A) 0
- (B) 2
- (C) 3
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Follow the middle line towards x = 2 from the left: the heights approach 3. From the right, the heights also approach 3. Both sides agree, so the limit is 3.

- (A) is g(2), the height of the filled dot. The value at x = 2 does not affect the limit.
- (B) gives the x-value, 2, instead of the height.
- (D) assumes a hole means no limit. A hole affects the value, not the limit: both sides still head to the same height.
</details>

## Question 2 (multiple choice · core)

Use Figure P1. What is the value of lim (x → 0⁻) g(x) + lim (x → 4) g(x)?

- (A) 3
- (B) 5
- (C) 6
- (D) It does not exist, because lim (x → 0) g(x) does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** From the left of 0, the falling line heads to the open circle at (0, −1), so lim (x → 0⁻) g(x) = −1. At x = 4 the two lines meet at (4, 4) with no gap, so both sides approach 4 and lim (x → 4) g(x) = 4. The sum is −1 + 4 = 3.

- (B) misreads the left-hand limit as +1: 1 + 4 = 5. The open circle is below the x-axis.
- (C) uses the right-hand side at 0 (the filled dot at height 2) instead of the left: 2 + 4 = 6.
- (D) confuses the one-sided limit with the two-sided one. The two-sided limit at 0 does not exist, but the question asks only for the left-hand limit, which does exist.
</details>

## Question 3 (multiple choice · core)

Which of the following limits exists as a real number?

- (A) lim (x → 3) 1/(x − 3)²
- (B) lim (x → 0) cos(1/x)
- (C) lim (x → −1) |x + 1|/(x + 1)
- (D) lim (x → 1) (x − 1)²/|x − 1|

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** For x ≠ 1, (x − 1)² = |x − 1|², so the expression equals |x − 1|. Its graph is a V shape with a hole at (1, 0). Both sides approach height 0, so the limit is 0.

- (A) is unbounded. As x → 3 from either side, (x − 3)² is a tiny positive number, so 1/(x − 3)² grows without bound. You may write = ∞, but that describes why the limit does not exist.
- (B) oscillates. cos(1/x) = 1 at x = 1/(2π), 1/(4π), 1/(6π), … and cos(1/x) = −1 at x = 1/π, 1/(3π), 1/(5π), … Both lists get as close to 0 as you like, so no single height is approached.
- (C) jumps. For x > −1 the expression is 1; for x < −1 it is −1. The left-hand limit (−1) and right-hand limit (1) are different.
</details>

## Question 4 (multiple choice · core)

A student graphs y = x + 0.0001/(x − 4)² on a window with −10 ≤ x ≤ 10 and −10 ≤ y ≤ 10. The screen shows what looks like the straight line y = x. Which conclusion about lim (x → 4) of this function is correct?

- (A) The limit is 4, because the graph looks like y = x.
- (B) The limit does not exist, because the values grow without bound as x → 4 from either side.
- (C) The limit is 4.0001, because the extra term adds 0.0001.
- (D) The limit does not exist, because the left-hand and right-hand limits are different.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Close to 4, (x − 4)² is tiny, so the extra term is huge. At x = 3.99 or 4.01, (x − 4)² = 0.0001 and the extra term is 1, giving y ≈ 5. At x = 3.999 or 4.001, the extra term is 100, giving y ≈ 104. The values grow without bound from both sides. The spike is too narrow for the screen to show.

- (A) trusts the picture. The window's scale hides a very narrow vertical asymptote.
- (C) adds 0.0001 as if the denominator were 1. The denominator (x − 4)² approaches 0, so the term does not stay small.
- (D) gives the wrong reason. Both sides go to +∞, in the same direction. The limit fails because the function is unbounded, not because of a jump.
</details>

## Question 5 (graph · core)

Use Figure P1.

(a) Find lim (x → 0⁻) g(x), lim (x → 0⁺) g(x) and g(0).
(b) Does lim (x → 0) g(x) exist? Justify your answer using part (a).
(c) Find lim (x → 2) g(x) and g(2). Explain why it is not a contradiction that these are different.
(d) The graph starts at x = −3. Which one-sided limit at x = −3 can you find from the graph, and what is its value?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** lim (x → 0⁻) g(x) = **−1** (open circle at (0, −1)). lim (x → 0⁺) g(x) = **2**. g(0) = **2** (the filled dot).

**(b)** **No.** The left-hand limit is −1 and the right-hand limit is 2. A two-sided limit exists only when both one-sided limits exist and are equal, and −1 ≠ 2.

**(c)** lim (x → 2) g(x) = **3**, because the line approaches height 3 from both sides. g(2) = **0**, from the filled dot. A limit uses only x-values near 2, never x = 2 itself, so the separate dot at (2, 0) cannot change it.

**(d)** Only the **right-hand** limit can be found, because g is not defined to the left of −3. lim (x → −3⁺) g(x) = **2**.

| Point | What earns it |
|---|---|
| 1 | All three values in (a) correct: −1, 2 and 2 |
| 1 | (b) "does not exist", justified by the unequal one-sided limits (not by "there is a jump" alone without values) |
| 1 | (c) limit 3 and value 0, with the reason that a limit does not depend on the value at x = 2 |
| 1 | (d) right-hand limit only, equal to 2, with the reason that there are no x-values to the left of −3 |

Accept any wording that quotes both one-sided limits in (b).
</details>

## Question 6 (constructed response · core)

Consider three functions:

- r(x) = 1/(x + 2)²
- s(x) = (x + 2)/|x + 2|
- p(x) = sin(π/x)

(a) Describe the graph of r and of s near x = −2. For each, state whether the limit as x → −2 exists. If it does not, say which kind of behaviour causes this.
(b) Show that p(2/5) = 1 and p(2/7) = −1. Give two more x-values between 0 and 2/7 where p takes the values 1 and −1. Use these to explain why lim (x → 0) p(x) does not exist.
(c) A student writes: "lim (x → −2) r(x) = ∞, so the limit exists and equals infinity." Explain what is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **r:** (x + 2)² is a small positive number near x = −2, so r(x) is very large and positive on both sides. For example, r(−1.9) = 1/0.01 = 100 and r(−1.99) = 10 000. The graph rises without bound on both sides of a vertical asymptote at x = −2. The limit **does not exist** because r is **unbounded**.

**s:** For x > −2, x + 2 is positive, so s(x) = 1. For x < −2, x + 2 is negative, so s(x) = −1. The graph is two horizontal pieces with a gap at x = −2. The left-hand limit is −1 and the right-hand limit is 1, so the limit **does not exist** because the **one-sided limits differ** (a jump).

**(b)** p(2/5) = sin(5π/2) = 1 and p(2/7) = sin(7π/2) = −1. Closer to 0: p(2/9) = sin(9π/2) = 1 and p(2/11) = sin(11π/2) = −1. However close to 0 you go, p keeps taking both values 1 and −1, so the heights never settle on one number. The limit **does not exist** because p **oscillates**.

**(c)** ∞ is not a real number. Writing "= ∞" says the values grow without bound, which is one way a limit fails to exist. Correct statement: lim (x → −2) r(x) does not exist, because r is unbounded as x → −2.

| Point | What earns it |
|---|---|
| 1 | r: unbounded on both sides of x = −2, limit does not exist |
| 1 | s: left-hand limit −1, right-hand limit 1, limit does not exist because they differ |
| 1 | p: shows the two given values and gives two correct closer values (such as 2/9 and 2/11) |
| 1 | Explains oscillation (both 1 and −1 occur arbitrarily close to 0) **and** corrects the student in (c) |

Accept any correct closer values in (b): x = 2/(4n + 1) gives 1 and x = 2/(4n + 3) gives −1, for whole numbers n.
</details>

## Question 7 (constructed response · stretch)

A function f is defined for every real number except x = 5. It satisfies all of these:

- lim (x → 2⁻) f(x) = 3
- lim (x → 2⁺) f(x) = −1
- f(2) = 1
- lim (x → 5) f(x) = 4

(a) Describe a graph that meets all four conditions, or give a piecewise formula for one. Explain how each condition is shown.
(b) Does lim (x → 2) f(x) exist? Explain.
(c) A classmate says: "f(5) is undefined, so lim (x → 5) f(x) cannot be 4." Respond.
(d) Explain why a graphing calculator picture of your function might not show anything unusual at x = 5.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Many answers are possible. One example:

- f(x) = x + 1 for x < 2
- f(2) = 1
- f(x) = (5/3)(x − 2) − 1 for x > 2, x ≠ 5

On a graph: the line y = x + 1 ends at an **open circle at (2, 3)**, so the left-hand limit is 3. A **filled dot at (2, 1)** gives f(2) = 1. A second line starts with an **open circle at (2, −1)**, so the right-hand limit is −1. It rises with gradient 5/3 and passes through height (5/3)(3) − 1 = 4 at x = 5, where there is an **open circle at (5, 4)** and no filled dot, so f(5) is undefined but the limit there is 4.

**(b)** **No.** The left-hand limit is 3 and the right-hand limit is −1. They are different, so the two-sided limit does not exist. The value f(2) = 1 does not change this.

**(c)** The classmate is wrong. A limit depends on the heights approached near x = 5, not on the value at 5. Both sides head to height 4, so the limit is 4 even with a hole there.

**(d)** Most graphing tools do not draw open circles, and a single missing point leaves no visible gap at normal scale. The hole exists but is invisible.

| Point | What earns it |
|---|---|
| 1 | A graph or formula with the correct one-sided limits at x = 2 (3 from the left, −1 from the right) |
| 1 | f(2) = 1 shown as a separate filled dot, **and** a hole at (5, 4) with no value at x = 5 |
| 1 | (b) "does not exist" because 3 ≠ −1 **and** (c) limit depends on nearby values, not the value at 5 |
| 1 | (d) explains that a single missing point (hole) is too small to show at the screen's scale |

A clear sketch with open and filled circles is as good as a formula.
</details>

## How did you do?

- **Q1 or Q5(c) wrong:** reread "What a graph tells you about a limit" and Worked example 1(a) in the [study guide](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-study-guide/). The value at a point does not decide the limit.
- **Q2 or Q5(a)–(b) wrong:** redo Worked example 1(b) and reread "One-sided and two-sided limits".
- **Q3 or Q6 wrong:** see "Three ways a limit can fail to exist" and Figure 2 in the guide.
- **Q4 or Q7(d) wrong:** reread "When the picture can mislead" and Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-checklist/).
