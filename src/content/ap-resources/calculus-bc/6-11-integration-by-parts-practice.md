---
resourceId: "mb-ap-calcbc-6.11-practice"
title: "Integrating Using Integration by Parts: Practice Questions (Calculus BC 6.11)"
description: "Seven original Marlbridge practice questions on integration by parts: choosing u, definite, repeated and self-returning integrals, and an accumulation context, with rubrics."
course: "calculus-bc"
unit: 6
topics: ["6.11"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Product rule (Topic 2.8), basic antiderivatives (Topic 6.8) and substitution (Topic 6.9)"
prerequisiteResources: ["mb-ap-calcbc-6.11-study-guide"]
learningObjectives:
  - "Find indefinite integrals by parts, including repeated and self-returning cases"
  - "Evaluate definite integrals by parts exactly"
  - "Choose u and dv and justify the choice"
  - "Apply integration by parts to an accumulation problem with units"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: calculator allowed for the decimal values only; the antiderivative must be found by hand."
related: ["mb-ap-calcbc-6.11-study-guide", "mb-ap-calcbc-6.11-revision-notes", "mb-ap-calcbc-6.11-checklist"]
next: "mb-ap-calcbc-6.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc", "exam-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; e ≈ 2.71828; no calculator for Questions 1–6; in Question 7 a calculator may be used for decimal values, which should be given to 3 decimal places. Notation: "∫ from a to b of f(x) dx" is a definite integral, and "[F(x)] from a to b" means F(b) − F(a).

## Question 1 (multiple choice · foundation)

Which of the following is ∫ x e^(2x) dx?

- (A) ½ x e^(2x) − ¼ e^(2x) + C
- (B) ½ x e^(2x) − ½ e^(2x) + C
- (C) x e^(2x) − ½ e^(2x) + C
- (D) ¼ x² e^(2x) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Let u = x and dv = e^(2x) dx. Then du = dx and v = ½ e^(2x). So ∫ x e^(2x) dx = ½ x e^(2x) − ∫ ½ e^(2x) dx = ½ x e^(2x) − ¼ e^(2x) + C. Check: the derivative is ½ e^(2x) + x e^(2x) − ½ e^(2x) = x e^(2x). ✓

- (B) forgets the chain-rule factor ½ in the **second** integration, ∫ ½ e^(2x) dx. Its derivative is (x − ½) e^(2x).
- (C) takes v = e^(2x), forgetting the ½ in the **first** integration. Its derivative is 2x e^(2x).
- (D) multiplies the antiderivatives of the two factors, ½x² and ½e^(2x). The integral of a product is not the product of the integrals.
</details>

## Question 2 (multiple choice · core)

What is ∫ from 1 to e of ln x dx?

- (A) 0
- (B) 1
- (C) e
- (D) 1/e − 1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With u = ln x and dv = dx, the antiderivative is x ln x − x. Then [x ln x − x] from 1 to e = (e · 1 − e) − (1 · 0 − 1) = 0 − (−1) = 1.

- (A) evaluates only at the upper limit, e ln e − e = 0, and forgets to subtract the value at the lower limit.
- (C) evaluates [x ln x] from 1 to e = e and forgets the − ∫ v du term (the − x).
- (D) differentiates ln x instead of integrating it, using 1/x as the "antiderivative": 1/e − 1.
</details>

## Question 3 (multiple choice · core)

A student wants to find ∫ x³ e^(x²) dx by parts. Which choice of u and dv leads to a complete answer?

- (A) u = x³, dv = e^(x²) dx
- (B) u = e^(x²), dv = x³ dx
- (C) u = x², dv = x e^(x²) dx
- (D) u = x, dv = x² e^(x²) dx

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** dv = x e^(x²) dx can be integrated by substitution: v = ½ e^(x²). With du = 2x dx, the new integral is ∫ ½ e^(x²) · 2x dx = ∫ x e^(x²) dx = ½ e^(x²). So ∫ x³ e^(x²) dx = ½ x² e^(x²) − ½ e^(x²) + C.

- (A) is what LIATE suggests ("algebraic before exponential"), but e^(x²) has no elementary antiderivative, so v cannot be found. LIATE is a guide, not a rule.
- (B) can be started (v = ¼x⁴), but du = 2x e^(x²) dx makes the new integral ∫ ½ x⁵ e^(x²) dx, which is harder than the original.
- (D) needs the antiderivative of x² e^(x²), which is not elementary either.
</details>

## Question 4 (multiple choice · stretch)

Which of the following is ∫ eˣ cos x dx?

- (A) ½ eˣ(sin x + cos x) + C
- (B) eˣ(sin x + cos x) + C
- (C) ½ eˣ(cos x − sin x) + C
- (D) eˣ sin x + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Let I = ∫ eˣ cos x dx. With u = cos x, dv = eˣ dx: I = eˣ cos x + ∫ eˣ sin x dx. With u = sin x, dv = eˣ dx again: ∫ eˣ sin x dx = eˣ sin x − I. So I = eˣ cos x + eˣ sin x − I, giving 2I = eˣ(sin x + cos x) and I = ½ eˣ(sin x + cos x) + C. Check: the derivative is ½ eˣ(sin x + cos x) + ½ eˣ(cos x − sin x) = eˣ cos x. ✓

- (B) reaches 2I = eˣ(sin x + cos x) but forgets to divide by 2. Its derivative is 2eˣ cos x.
- (C) makes a sign error in the second application (writing ∫ eˣ sin x dx = −eˣ sin x − I, so 2I = eˣ(cos x − sin x)). Its derivative is −eˣ sin x.
- (D) stops after one application and drops the remaining integral, or multiplies eˣ by the antiderivative of cos x.
</details>

## Question 5 (calculation · core)

Find ∫ x² sin x dx. Verify your answer by differentiating.

<details>
<summary>Worked solution</summary>

1. u = x², dv = sin x dx, so du = 2x dx and v = −cos x.
   ∫ x² sin x dx = −x² cos x + ∫ 2x cos x dx.
2. Parts again on ∫ 2x cos x dx: u = 2x, dv = cos x dx, so du = 2 dx and v = sin x.
   ∫ 2x cos x dx = 2x sin x − ∫ 2 sin x dx = 2x sin x + 2 cos x.
3. Combine: **∫ x² sin x dx = −x² cos x + 2x sin x + 2 cos x + C**.

**Verify.** d/dx[−x² cos x] = −2x cos x + x² sin x. d/dx[2x sin x] = 2 sin x + 2x cos x. d/dx[2 cos x] = −2 sin x. Sum: x² sin x. ✓

Tabular alternative: derivatives x², 2x, 2, 0; antiderivatives of sin x: −cos x, −sin x, cos x; signs + − +. Products: −x² cos x + 2x sin x + 2 cos x. Same answer.

Suggested mark points (3): 1 for the first application with v = −cos x and the correct sign; 1 for the second application; 1 for the correct final answer with + C and a correct derivative check.

Common error: v = cos x (sign lost) gives x² cos x − 2x sin x − 2 cos x, whose derivative is −x² sin x.
</details>

## Question 6 (constructed response · core)

Let R be the region between the graph of y = x e^(−x) and the x-axis for 0 ≤ x ≤ 2.

(a) Write a definite integral for the area of R.
(b) Using integration by parts, find an antiderivative of x e^(−x). State your choice of u and dv.
(c) Find the exact area of R.
(d) Verify your antiderivative from (b) by differentiating it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x e^(−x) ≥ 0 on [0, 2], so Area = **∫ from 0 to 2 of x e^(−x) dx**.

**(b)** u = x (du = dx); dv = e^(−x) dx (v = −e^(−x)).
∫ x e^(−x) dx = −x e^(−x) − ∫ (−e^(−x)) dx = −x e^(−x) + ∫ e^(−x) dx = **−x e^(−x) − e^(−x) + C**.

**(c)** [−x e^(−x) − e^(−x)] from 0 to 2 = (−2e⁻² − e⁻²) − (0 − 1) = **1 − 3e⁻²** (about 0.594 square units).

**(d)** d/dx[−x e^(−x) − e^(−x)] = (−e^(−x) + x e^(−x)) + e^(−x) = x e^(−x). ✓

| Point | What earns it |
|---|---|
| 1 | Correct definite integral with limits 0 and 2 (and dx) |
| 1 | Correct u, dv, du and v, with v = −e^(−x) (sign included) |
| 1 | Correct antiderivative −x e^(−x) − e^(−x) |
| 1 | Exact area 1 − 3e⁻², evaluating both limits |
| 1 | Differentiation check that uses the product rule correctly |

Total: 5 points. Acceptable alternative for (c): apply the definite form directly, [−x e^(−x)] from 0 to 2 + ∫ from 0 to 2 of e^(−x) dx = −2e⁻² + (1 − e⁻²). Both give 1 − 3e⁻². A decimal answer alone (0.594) does not earn the (c) point, because this part is no-calculator and asks for an exact value.
</details>

## Question 7 (constructed response · stretch)

A solar farm in a fictional town delivers power at a rate of **P(t) = 6 t e^(−t/3)** megawatts (MW), where t is the number of hours after 6 a.m., for 0 ≤ t ≤ 6.

(a) Without a calculator, find ∫ t e^(−t/3) dt.
(b) Find the exact total energy delivered between t = 0 and t = 6, in megawatt-hours (MWh). Then give it to 3 decimal places (calculator allowed for the decimal).
(c) The town needs at least 30 MWh from the farm between 6 a.m. and noon. Does the farm meet this need? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** u = t (du = dt); dv = e^(−t/3) dt (v = −3e^(−t/3)).
∫ t e^(−t/3) dt = −3t e^(−t/3) + 3 ∫ e^(−t/3) dt = **−3t e^(−t/3) − 9 e^(−t/3) + C**.
Check: d/dt gives −3e^(−t/3) + t e^(−t/3) + 3e^(−t/3) = t e^(−t/3). ✓

**(b)** Energy = ∫ from 0 to 6 of 6 t e^(−t/3) dt = 6 [−3t e^(−t/3) − 9e^(−t/3)] from 0 to 6
= 6[(−18e⁻² − 9e⁻²) − (0 − 9)] = 6(9 − 27e⁻²) = **54 − 162e⁻² MWh ≈ 32.076 MWh**.

**(c)** Yes. The energy delivered between 6 a.m. (t = 0) and noon (t = 6) is ∫ from 0 to 6 of P(t) dt ≈ 32.076 MWh, which is more than 30 MWh. The integral of a power (rate) over a time interval gives the total energy, so this is the right comparison.

| Point | What earns it |
|---|---|
| 1 | Correct choice u = t, dv = e^(−t/3) dt with v = −3e^(−t/3) |
| 1 | Correct antiderivative −3t e^(−t/3) − 9e^(−t/3) |
| 1 | Energy 54 − 162e⁻² MWh, with the factor 6 and both limits used |
| 1 | 32.076 MWh, with units |
| 1 | Answers yes **and** justifies it by comparing the integral (total energy, 6 a.m. to noon) with 30 MWh |

Total: 5 points. Acceptable alternatives: a correct answer to (b) from part (a) carried forward; for the decimal in (b), a calculator's numerical integral of P(t) from 0 to 6 is accepted, but the exact value still needs the antiderivative. Units: MW × hours = MWh.
</details>

## How did you do?

- **Q1 or Q5 wrong:** check the chain-rule factor in v and the sign of −cos x; see Worked example 1 in the [study guide](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/).
- **Q2 or Q6 wrong:** revisit the definite form, with limits on both pieces (Worked example 2).
- **Q3 wrong:** reread "Choosing u and dv", especially why LIATE is only a guide.
- **Q4 wrong:** work through "Integrals that come back: solve for the integral".
- **Q7 wrong:** compare with Worked example 2 (accumulation in context) and check your units.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-checklist/).
