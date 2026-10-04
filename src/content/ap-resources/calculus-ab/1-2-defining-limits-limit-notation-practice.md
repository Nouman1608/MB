---
resourceId: "mb-ap-calcab-1.2-practice"
title: "Defining Limits and Using Limit Notation: Practice Questions (Calculus AB 1.2)"
description: "Seven original Marlbridge practice questions on the meaning of a limit, writing and reading limit notation, and limits in graphs, tables and context, with full solutions."
course: "calculus-ab"
unit: 1
topics: ["1.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Function notation and reading graphs and tables"
prerequisiteResources: ["mb-ap-calcab-1.2-study-guide"]
learningObjectives:
  - "Write limit statements in correct notation from words, graphs and context"
  - "Interpret a limit statement in context, with units"
  - "Explain why the value f(c) does not decide the limit at c"
  - "Use the meaning of 'as close as you like' to reject a wrong limit value"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "No calculator is needed. Table values are given to 4 decimal places."
related: ["mb-ap-calcab-1.2-study-guide", "mb-ap-calcab-1.2-revision-notes", "mb-ap-calcab-1.2-checklist"]
next: "mb-ap-calcab-1.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, and all functions and contexts are invented for practice. Notation: lim (x → c) f(x) means "the limit as x approaches c of f(x)". This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Which statement means "as x approaches −1, the values of g(x) approach 4"?

- (A) lim (x → 4) g(x) = −1
- (B) lim (x → −1) g(x) = 4
- (C) g(−1) = 4
- (D) lim (g → 4) x = −1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The input x approaches −1, so "x → −1" goes under "lim". The outputs g(x) approach 4, so the limit equals 4.

- (A) swaps the input and the output. It says x approaches 4 and the outputs approach −1.
- (C) is a statement about one output, the value at x = −1. A limit says nothing about that value.
- (D) puts the function under "lim" and the input inside. The variable under "lim" must be the input of the function.
</details>

## Question 2 (multiple choice · core)

A function f is defined for all real x by f(x) = 2x − 1 for x ≠ 3, and f(3) = 7. What is lim (x → 3) f(x)?

- (A) 5
- (B) 7
- (C) 3
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The limit uses x near 3, with x ≠ 3. For those x, f(x) = 2x − 1, which approaches 2(3) − 1 = 5. The separate value f(3) = 7 is ignored.

- (B) uses the value f(3). A limit never uses the value at the point itself.
- (C) gives the number x approaches (the input c), not the number the outputs approach.
- (D) assumes that when f(3) differs from nearby outputs there is no limit. The outputs still approach one real number, 5, so the limit exists. (The mismatch affects continuity, which comes in Topic 1.11.)
</details>

## Question 3 (multiple choice · core)

The table shows values of a function h near x = 1. The function is not defined at x = 1.

| x | 0.9 | 0.99 | 0.999 | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|
| h(x) | 2.5789 | 2.5075 | 2.5008 | 2.4993 | 2.4925 | 2.4286 |

Which statement is best supported by the table?

- (A) h(1) = 2.5
- (B) lim (x → 2.5) h(x) = 1
- (C) The table suggests that lim (x → 1) h(x) = 2.5.
- (D) lim (x → 1) h(x) does not exist, because h(1) is not defined.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** As x closes in on 1 from both sides, h(x) closes in on 2.5: from above on the left (2.5008) and from below on the right (2.4993). A table can only suggest a limit, which is why (C) says "suggests".

- (A) talks about the value at x = 1, which the question says does not exist. A limit is not a function value.
- (B) swaps the input and the output.
- (D) confuses "undefined at 1" with "no limit at 1". A hole at x = 1 does not stop the outputs approaching 2.5.
</details>

## Question 4 (multiple choice · core)

A tank is being filled. V(t) is the volume of water in the tank, in litres, t minutes after a valve is opened. Which is the best interpretation of lim (t → 10) V(t) = 340?

- (A) At exactly 10 minutes, the tank must hold 340 litres.
- (B) As the volume approaches 10 litres, the time approaches 340 minutes.
- (C) At 10 minutes, the volume is increasing at 340 litres per minute.
- (D) As the time gets closer to 10 minutes, the volume gets as close as we like to 340 litres.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The input is time (approaching 10 minutes), the output is volume (approaching 340 litres). The statement describes times near 10 minutes.

- (A) treats the limit as the value V(10). The limit statement alone does not fix V(10), even though a real tank would probably hold 340 litres then too.
- (B) swaps the roles of input and output, and attaches the wrong units to each number.
- (C) describes a rate of change in litres per minute. That is a derivative, a Unit 2 idea, and it is not what this limit says.
</details>

## Question 5 (constructed response · foundation)

(a) Write in limit notation: "As x gets closer and closer to −4, but not equal to −4, the values of k(x) get as close as we like to 9."
(b) L(T) is the length of a metal rod, in millimetres, at a temperature of T degrees Celsius. Write a sentence, with units, that explains lim (T → 40) L(T) = 500.2.
(c) A student writes "lim k(x) = 9" for part (a). What is missing, and why does it matter?
(d) Another student writes "lim (x → −4) k(x) = k(−4) = 9". Is the middle step justified by the information in (a)? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** lim (x → −4) k(x) = 9.

**(b)** As the temperature gets closer and closer to 40 °C, the length of the rod gets as close as we like to 500.2 mm.

**(c)** The "x → −4" under "lim" is missing. Without it the reader cannot tell which input the limit is taken at, and the same function can have different limits at different inputs.

**(d)** No. The sentence in (a) describes only x values near −4, with x ≠ −4. It gives no information about k(−4), which might be 9, might be another number, or might not exist.

| Point | What earns it |
|---|---|
| 1 | Correct notation in (a), with "lim", "x → −4", k(x) and 9 all in place |
| 1 | Sentence in (b) with temperature as the input approaching 40 °C and length as the output approaching 500.2 mm (both units needed) |
| 1 | Identifies the missing "x → −4" in (c) and explains that a limit depends on where x is heading |
| 1 | States in (d) that the limit does not determine k(−4), because the definition excludes x = −4 |

Acceptable alternative for (a): "k(x) → 9 as x → −4". For (b), "tends to" or "approaches" in place of "gets as close as we like to" is fine.
</details>

## Question 6 (graph · core)

The graph shows a function f on −1 ≤ x ≤ 5.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="q6-title q6-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q6-title">Graph of f for Question 6, with a hole at x = 1 and a jump at x = 3</title>
<desc id="q6-desc">Two straight-line pieces. The left piece rises with gradient 1 from the solid point (−1, 0) towards (3, 4), where it ends in an open circle. On this piece there is an open circle at (1, 2), and a separate filled dot at (1, 4). The right piece starts at the filled dot (3, 1) and rises with gradient 1 to the filled dot (5, 3). It passes through (4, 2).</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="40" y1="280" x2="500" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="130" y1="300" x2="130" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="297">−1</text><text x="200" y="297">1</text><text x="270" y="297">2</text><text x="340" y="297">3</text><text x="410" y="297">4</text><text x="480" y="297">5</text>
<text x="506" y="275">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="123" y="234">1</text><text x="123" y="184">2</text><text x="123" y="134">3</text><text x="123" y="84">4</text><text x="123" y="34">5</text>
<text x="123" y="18">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="276" x2="60" y2="284"/><line x1="200" y1="276" x2="200" y2="284"/><line x1="270" y1="276" x2="270" y2="284"/><line x1="340" y1="276" x2="340" y2="284"/><line x1="410" y1="276" x2="410" y2="284"/><line x1="480" y1="276" x2="480" y2="284"/>
<line x1="126" y1="230" x2="134" y2="230"/><line x1="126" y1="180" x2="134" y2="180"/><line x1="126" y1="130" x2="134" y2="130"/><line x1="126" y1="80" x2="134" y2="80"/><line x1="126" y1="30" x2="134" y2="30"/>
</g>
<line x1="60" y1="280" x2="340" y2="80" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="340" y1="230" x2="480" y2="130" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="60" cy="280" r="5" fill="#1d2b44"/>
<circle cx="200" cy="180" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="200" cy="80" r="6" fill="#1d2b44"/>
<circle cx="340" cy="80" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="340" cy="230" r="6" fill="#1d2b44"/>
<circle cx="480" cy="130" r="5" fill="#1d2b44"/>
</svg>
<figcaption>Graph of f for Question 6. Open circles mark points not on the graph; filled dots mark points that are on it.</figcaption>
</figure>

(a) Find lim (x → 1) f(x) and f(1).
(b) Find lim (x → 4) f(x). How does it compare with f(4)?
(c) f(3) = 1. Explain why lim (x → 3) f(x) does not exist.
(d) A student says: "f(1) = 4, so the limit at 1 must be 4." Use the definition of a limit to explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Near x = 1 on both sides, the left piece heads to height 2, so **lim (x → 1) f(x) = 2**. The filled dot gives **f(1) = 4**.

**(b)** Near x = 4 the right piece heads to height 2, so lim (x → 4) f(x) = 2. Also f(4) = 2 (the point (4, 2) is on the graph). Here they are equal.

**(c)** Just to the left of 3, the outputs approach 4 (for example f(2.9) = 3.9). Just to the right, they approach 1 (f(3.1) = 1.1). No single real number is approached from both sides, so the limit does not exist. The value f(3) = 1 does not change this, because the limit ignores x = 3.

**(d)** The definition uses only x close to 1 with x ≠ 1. For those x, f(x) is close to 2, not 4. The single value f(1) = 4 plays no part.

| Point | What earns it |
|---|---|
| 1 | (a) Limit 2 and f(1) = 4, kept clearly separate |
| 1 | (b) Limit 2 and the comparison f(4) = 2, so they are equal |
| 1 | (c) Outputs approach different values from the two sides (4 and 1), so there is no single real number |
| 1 | (d) Explains that the definition excludes x = 1, so f(1) cannot decide the limit |

For (c), one-sided limit notation (Topic 1.3) is welcome but not required.
</details>

## Question 7 (constructed response · stretch)

*This question makes the phrase "as close as you like" concrete. It is background: the formal epsilon-delta definition is not assessed.*

Let f(x) = 4x − 3. You are told that lim (x → 2) f(x) = 5.

(a) Find the interval of x values around 2 for which f(x) is within 0.1 of 5.
(b) Find the interval of x values around 2 for which f(x) is within 0.001 of 5.
(c) Explain how (a) and (b) illustrate the definition of a limit.
(d) A student claims lim (x → 2) f(x) = 5.01, because "for x near 2, f(x) is within 0.1 of 5.01". Explain why the claim is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Within 0.1 of 5 means 4.9 < 4x − 3 < 5.1. Add 3: 7.9 < 4x < 8.1. Divide by 4: **1.975 < x < 2.025**, that is, x within 0.025 of 2. Check: f(2.02) = 5.08 and f(1.98) = 4.92, both within 0.1 of 5.

**(b)** Within 0.001 of 5 means 4.999 < 4x − 3 < 5.001, so 7.999 < 4x < 8.001, giving **1.99975 < x < 2.00025** (x within 0.00025 of 2).

**(c)** A tighter demand on the outputs is met by a narrower window of inputs around 2. However small the demand, such a window exists. That is exactly what "f(x) can be made as close to 5 as you like by taking x close enough to 2" means.

**(d)** Being within 0.1 of 5.01 is not enough: a limit needs *every* closeness to be achievable. Ask for f(x) within 0.005 of 5.01. That needs 5.005 < f(x) < 5.015, which only happens for 2.00125 < x < 2.00375. Inputs closer to 2 fail: at x = 2.0001, f(x) = 5.0004, which is 0.0096 away from 5.01. As x → 2 the outputs crowd towards 5, so they stay about 0.01 away from 5.01. So 5.01 is not the limit.

| Point | What earns it |
|---|---|
| 1 | (a) Correct inequality and interval 1.975 < x < 2.025 |
| 1 | (b) Correct interval 1.99975 < x < 2.00025 |
| 1 | (c) Links smaller output tolerance to a smaller input window, and says one always exists |
| 1 | (d) Shows a closeness to 5.01 that cannot be achieved for all x near 2 (any tolerance below 0.01 works), or argues the outputs approach 5, which differs from 5.01 |

Acceptable alternative for (a) and (b): |f(x) − 5| = 4|x − 2|, so |f(x) − 5| < 0.1 exactly when |x − 2| < 0.025, and similarly for 0.001.
</details>

## How did you do?

- **Q1 or Q5 wrong:** revisit "Reading and writing limit notation" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-study-guide/).
- **Q2 or Q6 wrong:** reread "The limit ignores f(c)", Figure 1 and Worked example 2.
- **Q3 wrong:** see "One limit, three representations".
- **Q4 wrong:** redo Worked example 1: name the input and the output, with units, before you interpret.
- **Q7 wrong:** see "What 'as close as you like' means" and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-checklist/).
