---
resourceId: "mb-ap-calcbc-6.13-practice"
title: "Evaluating Improper Integrals: Practice Questions (Calculus BC 6.13)"
description: "Seven original Marlbridge practice questions on improper integrals: infinite limits, vertical asymptotes, hidden discontinuities, convergence and divergence, and a context, with rubrics."
course: "calculus-bc"
unit: 6
topics: ["6.13"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity, L'Hospital's rule (Topic 4.7) and the integration techniques of Topics 6.8 to 6.12"
prerequisiteResources: ["mb-ap-calcbc-6.13-study-guide"]
learningObjectives:
  - "Rewrite improper integrals as limits of definite integrals"
  - "Evaluate convergent improper integrals and show when an integral diverges"
  - "Detect asymptotes inside the interval of integration"
  - "Interpret improper integrals as totals in context"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: calculator allowed for the decimal values only; the limits must be shown by hand."
related: ["mb-ap-calcbc-6.13-study-guide", "mb-ap-calcbc-6.13-revision-notes", "mb-ap-calcbc-6.13-checklist"]
next: "mb-ap-calcbc-6.13-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working with limit notation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: ln is the natural logarithm; e ≈ 2.71828; no calculator for Questions 1–6; in Question 7 a calculator may be used for decimal values, which should be given to 3 decimal places. Notation: "∫ from a to b of f(x) dx" is a definite integral, "[F(x)] from a to b" means F(b) − F(a), and "lim as b → ∞" is the limit as b grows without bound. In written answers, show the limit; do not substitute ∞.

## Question 1 (multiple choice · foundation)

Which of the following improper integrals converges?

- (A) ∫ from 1 to ∞ of 1/√x dx
- (B) ∫ from 1 to ∞ of 1/x dx
- (C) ∫ from 0 to 1 of 1/x² dx
- (D) ∫ from 1 to ∞ of 1/x^(3/2) dx

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** ∫ from 1 to b of x^(−3/2) dx = [−2x^(−1/2)] from 1 to b = 2 − 2/√b → 2 as b → ∞. It converges to 2 (a p-integral on [1, ∞) with p = 3/2 > 1).

- (A) ∫ from 1 to b of x^(−1/2) dx = 2√b − 2 → ∞. Here p = ½ ≤ 1, so it diverges, even though 1/√x → 0.
- (B) ∫ from 1 to b of 1/x dx = ln b → ∞. p = 1 is the boundary case, and it diverges.
- (C) ∫ from t to 1 of 1/x² dx = 1/t − 1 → ∞ as t → 0⁺. On (0, 1], p = 2 ≥ 1 diverges: the region is too tall near x = 0.
</details>

## Question 2 (multiple choice · core)

What is ∫ from 0 to ∞ of x e^(−3x) dx?

- (A) 1/9
- (B) 1/3
- (C) −1/9
- (D) The integral diverges.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By parts with u = x and dv = e^(−3x) dx: v = −⅓ e^(−3x), and the antiderivative is −(x/3)e^(−3x) − (1/9)e^(−3x). So ∫ from 0 to b = −(b/3)e^(−3b) − (1/9)e^(−3b) + 1/9. As b → ∞, b e^(−3b) = b/e^(3b) → 0 by L'Hospital's rule, and e^(−3b) → 0. The value is **1/9**.

- (B) forgets the factor ⅓ in the second integration, using −(1/3)e^(−3x) instead of −(1/9)e^(−3x).
- (C) subtracts in the wrong order, computing F(0) − lim F(b).
- (D) assumes that the factor x → ∞ makes the integral diverge. The exponential shrinks much faster than x grows.
</details>

## Question 3 (multiple choice · core)

What is ∫ from 0 to 9 of 1/√(9 − x) dx?

- (A) 6
- (B) −6
- (C) 3
- (D) The integral diverges.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The integrand is unbounded as x → 9⁻, so the integral is improper at the upper endpoint. An antiderivative is −2√(9 − x) (check: its derivative is −2 · ½(9 − x)^(−1/2) · (−1) = 1/√(9 − x)). So lim as t → 9⁻ of [−2√(9 − x)] from 0 to t = lim as t → 9⁻ of (−2√(9 − t) + 6) = **6**.

- (B) loses the minus sign from the chain rule, using 2√(9 − x) as the antiderivative.
- (C) forgets the factor 2, using −√(9 − x).
- (D) assumes that an unbounded integrand always gives a divergent integral. This one behaves like a p-integral with p = ½ < 1 near x = 9, so it converges.
</details>

## Question 4 (multiple choice · stretch)

What is ∫ from 0 to 3 of 1/(x − 1)² dx?

- (A) −3/2
- (B) 3/2
- (C) ln 2
- (D) The integral diverges.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The integrand is unbounded at x = 1, which is inside [0, 3]. Split: ∫ from 0 to 1 + ∫ from 1 to 3. For the second part, lim as t → 1⁺ of [−1/(x − 1)] from t to 3 = lim as t → 1⁺ of (−½ + 1/(t − 1)) = ∞. One part diverges, so the whole integral diverges.

- (A) ignores the asymptote: [−1/(x − 1)] from 0 to 3 = −½ − 1 = −3/2. A negative answer for a positive integrand shows something is wrong.
- (B) takes the same invalid calculation and drops the sign. The method is still wrong.
- (C) integrates 1/(x − 1)² as ln|x − 1|, which is the antiderivative of 1/(x − 1), and also ignores the asymptote.
</details>

## Question 5 (calculation · core)

Evaluate ∫ from −∞ to ∞ of 1/(x² + 4) dx, showing the limits.

<details>
<summary>Worked solution</summary>

1. **Split** at 0: ∫ from −∞ to ∞ = ∫ from −∞ to 0 + ∫ from 0 to ∞. Both must converge.
2. **Antiderivative.** ∫ 1/(x² + 4) dx = ½ arctan(x/2) + C (Topic 6.10).
3. **Right half.** lim as b → ∞ of [½ arctan(x/2)] from 0 to b = lim as b → ∞ of ½ arctan(b/2) = ½ · π/2 = **π/4**.
4. **Left half.** lim as a → −∞ of [½ arctan(x/2)] from a to 0 = 0 − ½ · (−π/2) = **π/4**.
5. **Combine.** Both halves converge, so **∫ from −∞ to ∞ of 1/(x² + 4) dx = π/2**.

Suggested mark points (3): 1 for splitting into two improper integrals with correct limit notation; 1 for the antiderivative ½ arctan(x/2); 1 for both limits correct and the total π/2.

Common error: writing lim as b → ∞ of ∫ from −b to b. Here it happens to give π/2 as well, but it is not a valid method in general (∫ from −∞ to ∞ of x dx would wrongly come out as 0).
</details>

## Question 6 (constructed response · core)

(a) Write ∫ from 1 to ∞ of (ln x)/x² dx as a limit of a definite integral.
(b) Use integration by parts to find an antiderivative of (ln x)/x².
(c) Show that the integral in (a) converges, and find its value.
(d) Determine whether ∫ from 1 to ∞ of (ln x)/x dx converges or diverges. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ from 1 to ∞ of (ln x)/x² dx = **lim as b → ∞ of ∫ from 1 to b of (ln x)/x² dx**.

**(b)** u = ln x (du = (1/x) dx); dv = x^(−2) dx (v = −1/x).
∫ (ln x)/x² dx = −(ln x)/x + ∫ 1/x² dx = **−(ln x)/x − 1/x + C**.

**(c)** ∫ from 1 to b = (−(ln b)/b − 1/b) − (0 − 1) = 1 − (ln b)/b − 1/b.
(ln b)/b has the form ∞/∞; by L'Hospital's rule, lim as b → ∞ of (ln b)/b = lim as b → ∞ of (1/b)/1 = 0. Also 1/b → 0.
So the integral **converges to 1**.

**(d)** With u = ln x, du = (1/x) dx: ∫ (ln x)/x dx = ½(ln x)² + C. Then ∫ from 1 to b of (ln x)/x dx = ½(ln b)², which → ∞ as b → ∞. So **the integral diverges**.

| Point | What earns it |
|---|---|
| 1 | (a) Correct limit expression with a letter for the upper limit |
| 1 | (b) Correct u, dv and antiderivative −(ln x)/x − 1/x |
| 1 | (c) Correct expression 1 − (ln b)/b − 1/b, using both limits |
| 1 | (c) Uses L'Hospital's rule (or another valid argument) for (ln b)/b → 0, and states the value 1 |
| 1 | (d) Antiderivative ½(ln x)² and conclusion "diverges" with the limit ½(ln b)² → ∞ |

Total: 5 points. Acceptable alternative for (d): a comparison argument, (ln x)/x ≥ 1/x for x ≥ e, and ∫ from e to ∞ of 1/x dx diverges. Writing "[−(ln x)/x − 1/x] from 1 to ∞ = 1" without a limit does not earn the (c) limit point.
</details>

## Question 7 (constructed response · stretch)

Pollutant enters a fictional lake at a rate modelled by **r₁(t) = 80 e^(−0.2t)** kilograms per year, where t is the number of years after a factory upgrade. The lake can safely absorb at most 450 kg in total.

(a) Find the amount of pollutant that enters the lake in the first 10 years. Give the exact value, then a decimal (calculator allowed for the decimal).
(b) Using limit notation, find the total amount the model predicts will ever enter the lake. Does this model predict that the safe limit will be exceeded?
(c) A second model is r₂(t) = 80/(1 + 0.2t) kilograms per year. Show that ∫ from 0 to ∞ of r₂(t) dt diverges, and explain what this means for the safe limit.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ from 0 to 10 of 80 e^(−0.2t) dt = [−400 e^(−0.2t)] from 0 to 10 = **400 − 400e⁻² kg ≈ 345.866 kg**.

**(b)** ∫ from 0 to ∞ of r₁(t) dt = lim as b → ∞ of ∫ from 0 to b of 80 e^(−0.2t) dt = lim as b → ∞ of (400 − 400 e^(−0.2b)) = **400 kg**. Since 400 < 450, this model predicts that the safe limit is **never** exceeded, however long we wait.

**(c)** An antiderivative of 80/(1 + 0.2t) is 400 ln(1 + 0.2t), since d/dt [400 ln(1 + 0.2t)] = 400 · 0.2/(1 + 0.2t). Then
∫ from 0 to b of r₂(t) dt = 400 ln(1 + 0.2b), which → ∞ as b → ∞. So the integral **diverges**.
Meaning: under model 2, the total pollutant grows without bound, so it will **eventually exceed 450 kg**. (It does so after about 10.4 years, where 400 ln(1 + 0.2b) = 450.)

| Point | What earns it |
|---|---|
| 1 | (a) 400 − 400e⁻² kg, about 345.866 kg |
| 1 | (b) Correct limit expression and the value 400 kg |
| 1 | (b) Concludes the limit is not exceeded, comparing 400 with 450 |
| 1 | (c) Antiderivative 400 ln(1 + 0.2t) and the limit → ∞, so diverges |
| 1 | (c) Interprets divergence: the total is unbounded, so 450 kg is eventually exceeded |

Total: 5 points. The time 10.4 years is extra information and is not needed for the last point. Units: kg per year × years = kg. Common error: arguing that model 2 converges "because r₂(t) → 0". It does tend to 0, but too slowly, like 1/t.
</details>

## How did you do?

- **Q1 wrong:** learn the p-integral benchmarks in the [study guide](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/) and why 1/x diverges.
- **Q2 or Q6 wrong:** revise integration by parts and L'Hospital's rule for limits such as b e^(−3b) and (ln b)/b.
- **Q3 wrong:** reread the definitions table for an asymptote at an endpoint.
- **Q4 wrong:** see "The trap: a hidden asymptote" (Worked example 2).
- **Q5 wrong:** check the rule for integrals from −∞ to ∞: split and test both halves.
- **Q7 wrong:** compare with Worked example 3 (total output in context).

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-checklist/).
