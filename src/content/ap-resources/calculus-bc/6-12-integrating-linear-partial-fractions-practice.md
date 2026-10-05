---
resourceId: "mb-ap-calcbc-6.12-practice"
title: "Integrating Using Linear Partial Fractions: Practice Questions (Calculus BC 6.12)"
description: "Seven original Marlbridge practice questions on linear partial fractions: decomposing, non-monic and three-factor cases, dividing first, definite integrals and a context, with rubrics."
course: "calculus-bc"
unit: 6
topics: ["6.12"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Adding algebraic fractions, ∫ 1/x dx (Topic 6.8), substitution (Topic 6.9) and long division (Topic 6.10)"
prerequisiteResources: ["mb-ap-calcbc-6.12-study-guide"]
learningObjectives:
  - "Decompose rational functions with different linear factors"
  - "Find indefinite integrals using linear partial fractions"
  - "Evaluate definite integrals exactly using linear partial fractions"
  - "Apply partial fractions to an accumulation problem with units"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: calculator allowed for the decimal values only; the decomposition and antiderivative must be found by hand."
related: ["mb-ap-calcbc-6.12-study-guide", "mb-ap-calcbc-6.12-revision-notes", "mb-ap-calcbc-6.12-checklist"]
next: "mb-ap-calcbc-6.12-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: ln is the natural logarithm; no calculator for Questions 1–6; in Question 7 a calculator may be used for decimal values, which should be given to 3 decimal places. Notation: "∫ from a to b of f(x) dx" is a definite integral, and "[F(x)] from a to b" means F(b) − F(a).

## Question 1 (multiple choice · foundation)

Which of the following is equal to (2x + 7)/(x² + x − 2)?

- (A) 3/(x − 1) − 1/(x + 2)
- (B) −1/(x − 1) + 3/(x + 2)
- (C) 3/(x − 1) + 1/(x + 2)
- (D) 9/(x − 1) + 3/(x + 2)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** x² + x − 2 = (x − 1)(x + 2). Write 2x + 7 = A(x + 2) + B(x − 1). At x = 1: 9 = 3A, so A = 3. At x = −2: 3 = −3B, so B = −1. Check: 3(x + 2) − (x − 1) = 2x + 7. ✓

- (B) puts the two constants over the wrong factors. Recombined, the top is 2x − 5.
- (C) loses the minus sign from −3B = 3. Recombined, the top is 4x + 5.
- (D) substitutes the roots into the top only and forgets to divide by the value of the other factor (9 and 3 instead of 9/3 and 3/(−3)).
</details>

## Question 2 (multiple choice · core)

What is ∫ 4/(x² + 2x − 3) dx?

- (A) ln|(x − 1)/(x + 3)| + C
- (B) 4 ln|x² + 2x − 3| + C
- (C) ln|(x + 3)/(x − 1)| + C
- (D) ln|(x − 1)(x + 3)| + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** x² + 2x − 3 = (x − 1)(x + 3). From 4 = A(x + 3) + B(x − 1): x = 1 gives A = 1, and x = −3 gives B = −1. So the integral is ln|x − 1| − ln|x + 3| + C = ln|(x − 1)/(x + 3)| + C.

- (B) treats the integrand as if it were the derivative of the bottom over the bottom. Its derivative is 8(x + 1)/(x² + 2x − 3).
- (C) has A and B the wrong way round. Its derivative is −4/((x − 1)(x + 3)), the negative of the integrand.
- (D) loses the minus sign on B. Its derivative is (2x + 2)/((x − 1)(x + 3)).
</details>

## Question 3 (multiple choice · core)

What is ∫ from 2 to 4 of 2/(x² − 1) dx?

- (A) ln(9/5)
- (B) ln(3/5)
- (C) 2 ln(9/5)
- (D) ln(5/9)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 2/((x − 1)(x + 1)) = 1/(x − 1) − 1/(x + 1). On [2, 4] both factors are positive, so the antiderivative is ln((x − 1)/(x + 1)). Then [ln((x − 1)/(x + 1))] from 2 to 4 = ln(3/5) − ln(1/3) = ln(9/5) ≈ 0.588.

- (B) evaluates at the upper limit only. A negative value for a positive integrand is a warning sign.
- (C) uses A = 2 and B = −2: it puts the top, 2, over each factor without dividing by the value of the other factor (2 at x = 1, and −2 at x = −1). This doubles the answer.
- (D) swaps the signs of A and B, giving the negative of the correct value.
</details>

## Question 4 (multiple choice · stretch)

Which of the following is ∫ 7/((2x + 1)(x − 3)) dx?

- (A) ln|(x − 3)/(2x + 1)| + C
- (B) ln|x − 3| − 2 ln|2x + 1| + C
- (C) ln|(2x + 1)/(x − 3)| + C
- (D) 7 ln|2x² − 5x − 3| + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Write 7 = A(x − 3) + B(2x + 1). At x = 3: 7 = 7B, so B = 1. At x = −½: 7 = A(−7/2), so A = −2. The integrand is −2/(2x + 1) + 1/(x − 3). Since ∫ 1/(2x + 1) dx = ½ ln|2x + 1|, the integral is −ln|2x + 1| + ln|x − 3| + C = ln|(x − 3)/(2x + 1)| + C.

- (B) finds A and B correctly but forgets the chain-rule factor ½ when integrating −2/(2x + 1).
- (C) has the signs reversed; its derivative is the negative of the integrand.
- (D) takes the log of the expanded denominator. Its derivative is 7(4x − 5)/(2x² − 5x − 3), which is not the integrand.
</details>

## Question 5 (calculation · core)

Find ∫ (4x² + x − 1)/(x³ − x) dx. Check your decomposition by recombining it.

<details>
<summary>Worked solution</summary>

1. **Factor.** x³ − x = x(x − 1)(x + 1): three different linear factors. The top has degree 2 and the bottom degree 3, so the fraction is proper.
2. **Set up.** (4x² + x − 1)/(x(x − 1)(x + 1)) = A/x + B/(x − 1) + C/(x + 1), so
   4x² + x − 1 = A(x − 1)(x + 1) + Bx(x + 1) + Cx(x − 1).
3. **Substitute the roots.**
   - x = 0: −1 = A(−1)(1), so A = 1.
   - x = 1: 4 = B(1)(2), so B = 2.
   - x = −1: 2 = C(−1)(−2), so C = 1.
4. **Integrate.** **∫ (4x² + x − 1)/(x³ − x) dx = ln|x| + 2 ln|x − 1| + ln|x + 1| + C**.

**Check.** 1/x + 2/(x − 1) + 1/(x + 1) has top (x − 1)(x + 1) + 2x(x + 1) + x(x − 1) = (x² − 1) + (2x² + 2x) + (x² − x) = 4x² + x − 1. ✓ Also, A + B + C = 4 matches the x² coefficient.

Suggested mark points (3): 1 for the correct factorisation and decomposition form with three constants; 1 for A = 1, B = 2, C = 1; 1 for the correct antiderivative with absolute values and + C.

Common error: using x(x² − 1) and trying A/x + B/(x² − 1). The factor x² − 1 is not linear; factor it fully first.
</details>

## Question 6 (constructed response · core)

Let f(x) = (x² + 2x − 10)/(x² − x − 6).

(a) Explain why f(x) must be rewritten before you decompose it into partial fractions.
(b) Show that f(x) = 1 + (3x − 4)/(x² − x − 6).
(c) Write (3x − 4)/(x² − x − 6) in partial fractions.
(d) Find the exact value of ∫ from 4 to 5 of f(x) dx.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The top and bottom both have degree 2, so f is not a proper fraction. A sum A/(x − 3) + B/(x + 2) can never produce the x² term on top, so you must divide first.

**(b)** x² + 2x − 10 = 1 · (x² − x − 6) + (3x − 4), because (x² − x − 6) + (3x − 4) = x² + 2x − 10. So f(x) = 1 + (3x − 4)/(x² − x − 6).

**(c)** x² − x − 6 = (x − 3)(x + 2). From 3x − 4 = A(x + 2) + B(x − 3): x = 3 gives 5 = 5A, so A = 1; x = −2 gives −10 = −5B, so B = 2.
**(3x − 4)/(x² − x − 6) = 1/(x − 3) + 2/(x + 2)**.

**(d)** On [4, 5], x − 3 and x + 2 are positive, so there is no asymptote in the interval.
∫ from 4 to 5 of f(x) dx = [x + ln(x − 3) + 2 ln(x + 2)] from 4 to 5
= (5 + ln 2 + 2 ln 7) − (4 + ln 1 + 2 ln 6) = **1 + ln 2 + 2 ln(7/6)**, which is 1 + ln(49/18), about 2.001.

| Point | What earns it |
|---|---|
| 1 | (a) States that the top's degree is not less than the bottom's |
| 1 | (b) Correct quotient 1 and remainder 3x − 4, with a check |
| 1 | (c) Correct factorisation and A = 1, B = 2 |
| 1 | (d) Correct antiderivative x + ln(x − 3) + 2 ln(x + 2) |
| 1 | (d) Correct exact value, using both limits |

Total: 5 points. Acceptable alternatives: matching coefficients in (c) (A + B = 3, 2A − 3B = −4); any correct equivalent exact form in (d), such as 1 + ln(49/18). A decimal alone does not earn the last point, because this part is no-calculator.
</details>

## Question 7 (constructed response · stretch)

A fictional company launches a new app. It gains users at a rate of **R(t) = 900/((t + 1)(t + 10))** thousand users per week, where t is the number of weeks after launch. Before launch, 20 thousand people had already signed up.

(a) Write R(t) in partial fractions.
(b) Find the exact number of users gained in the first 8 weeks, in thousands. Then give it to 3 decimal places (calculator allowed for the decimal).
(c) The company's target is 175 thousand users in total by the end of week 8. Does it meet the target? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 900 = A(t + 10) + B(t + 1). At t = −1: 900 = 9A, so A = 100. At t = −10: 900 = −9B, so B = −100.
**R(t) = 100/(t + 1) − 100/(t + 10)**.

**(b)** For t ≥ 0 both factors are positive.
∫ from 0 to 8 of R(t) dt = [100 ln(t + 1) − 100 ln(t + 10)] from 0 to 8 = 100[ln(9/18) − ln(1/10)] = 100 ln(10/2) = **100 ln 5 thousand users ≈ 160.944 thousand**.

**(c)** Yes. Users at the end of week 8 = 20 + ∫ from 0 to 8 of R(t) dt = 20 + 100 ln 5 ≈ 180.944 thousand, which is more than 175 thousand. The integral of the rate gives the users gained, so the starting 20 thousand must be added before comparing.

| Point | What earns it |
|---|---|
| 1 | Correct decomposition with A = 100 and B = −100 |
| 1 | Correct antiderivative 100 ln(t + 1) − 100 ln(t + 10) |
| 1 | Exact value 100 ln 5, with both limits used |
| 1 | 160.944 thousand users, with units |
| 1 | Answers yes **and** justifies it with 20 + ∫ from 0 to 8 of R(t) dt ≈ 180.944 > 175 |

Total: 5 points. Acceptable alternatives: a correct answer to (c) carried forward from an incorrect (b); a calculator's numerical integral for the decimal in (b), but the exact value still needs the decomposition. Common error in (c): comparing 160.944 with 175 and answering "no", forgetting the 20 thousand starting users.
</details>

## How did you do?

- **Q1 or Q5 wrong:** practise finding the constants by substituting roots, and check by recombining; see "Finding the constants" in the [study guide](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-study-guide/).
- **Q2 wrong:** reread Worked example 1 and the first misconception (log of the denominator).
- **Q3 or Q7 wrong:** revisit the definite integral in Worked example 2, including units.
- **Q4 wrong:** see "A linear factor that is not monic".
- **Q6 wrong:** see "A top that is too big: divide first".

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-checklist/).
