---
resourceId: "mb-ap-calcbc-10.1-practice"
title: "Defining Convergent and Divergent Infinite Series: Practice Questions (Calculus BC 10.1)"
description: "Seven original Marlbridge practice questions on partial sums and the definition of convergence: terms from Sₙ, telescoping sums and divergent series, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.1"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity (Topic 1.15), partial fractions (Topic 6.12) and laws of logarithms"
prerequisiteResources: ["mb-ap-calcbc-10.1-study-guide"]
learningObjectives:
  - "Compute partial sums and recover terms from a formula for Sₙ"
  - "Decide whether a series converges by finding the limit of its partial sums, and state the sum"
  - "Find the sum of a telescoping series from its partial sums"
  - "Explain why terms tending to 0 do not prove convergence"
skills: ["1", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: calculator allowed; give decimals to 3 decimal places unless told otherwise."
related: ["mb-ap-calcbc-10.1-study-guide", "mb-ap-calcbc-10.1-revision-notes", "mb-ap-calcbc-10.1-checklist"]
next: "mb-ap-calcbc-10.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: ln is the natural logarithm; no calculator for Questions 1–6; in Question 7 a calculator may be used and decimals should be given to 3 decimal places. Notation: Sₙ is the nth partial sum, the sum of the first n terms of the series; k! = 1 · 2 · … · k.

## Question 1 (multiple choice · foundation)

For the series Σ from k = 1 to ∞ of (2k − 1)/k!, what is the third partial sum S₃?

- (A) 5/6
- (B) 10/3
- (C) 3/2
- (D) 29/8

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The first three terms are a₁ = 1/1 = 1, a₂ = 3/2 and a₃ = 5/6. So S₃ = 1 + 3/2 + 5/6 = 6/6 + 9/6 + 5/6 = 20/6 = 10/3.

- (A) is the third **term** a₃, not the sum of the first three terms.
- (C) starts at k = 0 (term −1/0! = −1) and adds three terms: −1 + 1 + 3/2 = 3/2. The series starts at k = 1.
- (D) adds one term too many: S₄ = 10/3 + 7/24 = 29/8.
</details>

## Question 2 (multiple choice · core)

The nth partial sum of a series Σ from n = 1 to ∞ of aₙ is Sₙ = 6n/(2n + 1). Which statement is true?

- (A) The series converges to 3.
- (B) The series converges to 0, because lim as n → ∞ of aₙ = 0.
- (C) The series diverges, because Sₙ increases for every n.
- (D) The series converges to 2, because a₁ = 2.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By definition, the sum is the limit of the partial sums: lim 6n/(2n + 1) = lim 6/(2 + 1/n) = 3. (The terms are aₙ = Sₙ − Sₙ₋₁ = 6/((2n − 1)(2n + 1)), which do tend to 0, but that is not what gives the sum.)

- (B) confuses the limit of the **terms** with the limit of the **partial sums**. The terms tend to 0; the sum is 3.
- (C) is wrong because an increasing sequence of partial sums can still have a limit. Here Sₙ increases towards 3.
- (D) uses S₁ = a₁ = 2, which is only the first partial sum, not the limit.
</details>

## Question 3 (multiple choice · core)

Which of the following series **diverges**?

- (A) Σ from n = 1 to ∞ of (1/√n − 1/√(n + 1))
- (B) Σ from n = 1 to ∞ of (∛(n + 1) − ∛n)
- (C) Σ from n = 1 to ∞ of (1/(n + 1) − 1/(n + 2))
- (D) Σ from n = 1 to ∞ of (1/n² − 1/(n + 1)²)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each series telescopes. For (B), Sₙ = (∛2 − ∛1) + (∛3 − ∛2) + … + (∛(n + 1) − ∛n) = ∛(n + 1) − 1, which grows without bound. So lim Sₙ does not exist and the series diverges, even though its terms tend to 0.

- (A) Sₙ = 1 − 1/√(n + 1) → 1. It converges to 1.
- (C) Sₙ = ½ − 1/(n + 2) → ½. It converges to ½.
- (D) Sₙ = 1 − 1/(n + 1)² → 1. It converges to 1.

If you chose (A), (C) or (D), you may have thought that every telescoping series converges. What matters is whether the surviving piece has a limit.
</details>

## Question 4 (multiple choice · stretch)

The nth partial sum of a series is Sₙ = 1/n + (−1)ⁿ, for n ≥ 1. Which statement is true?

- (A) The series converges to 0, because 1/n → 0 and the values of (−1)ⁿ average to 0.
- (B) The series converges to 1, because Sₙ → 1 when n is even.
- (C) The series diverges, because Sₙ is close to 1 for large even n and close to −1 for large odd n, so lim Sₙ does not exist.
- (D) The series diverges, because the partial sums grow without bound.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** For example, S₁₀₀ = 1.01 and S₁₀₁ = −100/101 ≈ −0.990. The partial sums keep jumping between values near 1 and values near −1, so they have no single limit. By definition, the series diverges.

- (A) treats an "average" as a limit. A limit must be one value that Sₙ gets close to for all large n.
- (B) looks only at even n. The odd partial sums approach −1, so the whole sequence has no limit.
- (D) gives the wrong reason: the partial sums stay between −1 and 1.5. A series can diverge without its partial sums becoming large.
</details>

## Question 5 (calculation · core)

Consider the series Σ from n = 1 to ∞ of 4/((2n − 1)(2n + 1)).

(a) Show that 4/((2n − 1)(2n + 1)) = 2/(2n − 1) − 2/(2n + 1).
(b) Find S₁, S₂ and S₃, then find a formula for Sₙ.
(c) Use the definition of convergence to find the sum of the series.

<details>
<summary>Worked solution</summary>

**(a)** 2/(2n − 1) − 2/(2n + 1) = [2(2n + 1) − 2(2n − 1)] / ((2n − 1)(2n + 1)) = 4/((2n − 1)(2n + 1)). ✓

**(b)** S₁ = 2 − 2/3 = **4/3**. S₂ = (2 − 2/3) + (2/3 − 2/5) = **8/5**. S₃ = 8/5 + (2/5 − 2/7) = **12/7**.
In general the middle pieces cancel: Sₙ = 2 − 2/3 + 2/3 − … + 2/(2n − 1) − 2/(2n + 1) = **2 − 2/(2n + 1)** (which can also be written 4n/(2n + 1)).

**(c)** lim as n → ∞ of (2 − 2/(2n + 1)) = 2 − 0 = 2. The partial sums have a limit, so the series converges and **its sum is 2**.

Suggested mark points (3): 1 for the partial-fraction identity; 1 for correct S₁ to S₃ and the formula Sₙ = 2 − 2/(2n + 1); 1 for taking the limit of **Sₙ** and stating that the series converges to 2.

Common error: stating "the terms go to 0, so the series converges". That is not a valid reason and earns no credit for (c).
</details>

## Question 6 (constructed response · core)

The nth partial sum of a series Σ from n = 1 to ∞ of aₙ is Sₙ = ln((2n + 1)/(n + 1)).

(a) Find a₁ and a₄ as exact values.
(b) Does the series converge? If so, find its sum. Justify your answer.
(c) Find the exact value of Σ from n = 3 to ∞ of aₙ.
(d) A student says: "Any series whose terms tend to 0 must converge." Give an example of a series that shows this claim is false, and explain why it is a counter-example.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** a₁ = S₁ = ln(3/2). a₄ = S₄ − S₃ = ln(9/5) − ln(7/4) = ln((9/5) · (4/7)) = **ln(36/35)**.

**(b)** lim as n → ∞ of (2n + 1)/(n + 1) = 2, and ln is continuous, so lim Sₙ = **ln 2**. The partial sums have a limit, so the series converges, and **Σ aₙ = ln 2**.

**(c)** Σ from n = 3 to ∞ of aₙ = (whole sum) − a₁ − a₂ = ln 2 − S₂ = ln 2 − ln(5/3) = **ln(6/5)** (about 0.182).

**(d)** For example, Σ from n = 1 to ∞ of ln((n + 1)/n). Its terms ln(1 + 1/n) tend to 0, but its partial sums telescope to Sₙ = ln(n + 1), which grows without bound. So lim Sₙ does not exist and the series diverges. (Σ (√(n + 1) − √n), with Sₙ = √(n + 1) − 1, works equally well.)

| Point | What earns it |
|---|---|
| 1 | a₁ = ln(3/2), using a₁ = S₁ |
| 1 | a₄ = ln(36/35), using S₄ − S₃ |
| 1 | lim Sₙ = ln 2, with a conclusion that the series converges **because** the limit of the partial sums exists |
| 1 | ln(6/5), by subtracting S₂ from the sum |
| 1 | A valid counter-example whose terms tend to 0 **and** a reason it diverges based on its partial sums |

Total: 5 points. In (b), an answer that says "converges because aₙ → 0" does not earn the point, even with the correct value. In (d), any series with terms tending to 0 and partial sums with no limit is accepted, provided the divergence is justified.
</details>

## Question 7 (constructed response · stretch)

Consider the series Σ from n = 1 to ∞ of ln(1 + 1/(n(n + 2))). A calculator is allowed.

(a) Use a calculator to find S₁, S₅ and S₂₀ to 3 decimal places.
(b) Show that 1 + 1/(n(n + 2)) = (n + 1)²/(n(n + 2)), and use the laws of logarithms to show that Sₙ = ln(2(n + 1)/(n + 2)).
(c) Find the sum of the series as an exact value.
(d) Find the smallest n for which Sₙ is within 0.01 of the sum.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** S₁ = ln(4/3) ≈ **0.288**; S₅ ≈ **0.539**; S₂₀ ≈ **0.647**.

**(b)** 1 + 1/(n(n + 2)) = (n² + 2n + 1)/(n(n + 2)) = (n + 1)²/(n(n + 2)).
A sum of logs is the log of a product, so Sₙ = ln of the product, for k = 1 to n, of (k + 1)²/(k(k + 2)) = ln of the product of [(k + 1)/k] · [(k + 1)/(k + 2)].
The first factors multiply to (2/1)(3/2)…((n + 1)/n) = n + 1. The second factors multiply to (2/3)(3/4)…((n + 1)/(n + 2)) = 2/(n + 2).
So **Sₙ = ln(2(n + 1)/(n + 2))**. Check: S₁ = ln(4/3). ✓

**(c)** 2(n + 1)/(n + 2) → 2, so lim Sₙ = **ln 2** (about 0.693). The series converges to ln 2.

**(d)** ln 2 − Sₙ = ln(2 · (n + 2)/(2(n + 1))) = ln((n + 2)/(n + 1)). Every term is positive, so Sₙ < ln 2 and this is the gap.
Need ln((n + 2)/(n + 1)) < 0.01. For n = 98 the gap is ln(100/99) ≈ 0.01005 (too big); for n = 99 it is ln(101/100) ≈ 0.00995. So the smallest n is **99**.
(Algebra route: 1/(n + 1) < e^0.01 − 1 gives n + 1 > 99.50…, so n ≥ 99.)

| Point | What earns it |
|---|---|
| 1 | All three partial sums correct to 3 decimal places |
| 1 | Correct factorisation and use of ln(product) = sum of ln |
| 1 | Cancelling the product to reach Sₙ = ln(2(n + 1)/(n + 2)) |
| 1 | Sum ln 2 from lim Sₙ, with a statement that the series converges |
| 1 | n = 99, supported by the gap ln((n + 2)/(n + 1)) or by checking n = 98 and n = 99 |

Total: 5 points. Acceptable alternatives in (d): a calculator table of Sₙ near n = 99, provided both n = 98 and n = 99 are shown against ln 2 − 0.01.
</details>

## How did you do?

- **Q1 wrong:** revisit "Three objects you must keep apart" in the [study guide](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/), and count terms from the starting index.
- **Q2 or Q6 wrong:** work through Worked example 1 (partial sums given, terms and sum required).
- **Q3 or Q5 wrong:** redo Worked example 2 (telescoping) and write out the first and last few brackets.
- **Q4 or Q6(d) wrong:** reread "The definition: convergence is a limit" and Worked example 3.
- **Q7 wrong:** check the laws of logarithms, then compare with the cancelling in Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-checklist/).
