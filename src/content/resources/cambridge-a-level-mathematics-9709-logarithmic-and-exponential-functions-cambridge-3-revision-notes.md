---
title: "Cambridge A Level Mathematics (9709): Logarithmic and exponential functions (Pure Mathematics 3) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "logarithmic-and-exponential-functions-cambridge-3"
description: "Revision notes for Cambridge 9709 Paper 3 section 3.2: log laws, e^x and ln x graphs, index equations, sign-reversing inequalities, linear form and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.2 Logarithmic and exponential functions** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. Worked explanations are in the [3.2 study guide](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3/); exam-style questions are in the [3.2 practice questions](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3-practice/).

## Core facts

- aˣ = b ⇔ x = logₐ b (a > 0, a ≠ 1). ln x means logₑ x.
- Laws: log(ab) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n log a. Change of base is **not** in the syllabus.
- log 1 = 0 in any base; ln e = 1.
- e^(ln x) = x for x > 0; ln(eˣ) = x for every real x. So y = eˣ and y = ln x are inverse functions.
- There is no rule for log(a + b) or for (log a)(log b).

## Graph features

| Graph | Passes through | Asymptote | Domain | Range |
|---|---|---|---|---|
| y = eˣ | (0, 1) | y = 0 | all real x | y > 0 |
| y = e^(kx), k < 0 | (0, 1) | y = 0 | all real x | y > 0, decreasing |
| y = ln x | (1, 0) | x = 0 | x > 0 | all real y |
| y = A + Be^(kx) | (0, A + B) | y = A | all real x | one side of y = A |

y = ln x is the reflection of y = eˣ in y = x.

## Solving with the unknown in the index

1. **One power each side.** Take ln of both sides, bring the powers down as whole brackets, collect x terms.
2. **Same base twice.** Spot a disguised quadratic: 4ˣ = (2ˣ)², e^(2x) = (eˣ)², 3^(2x+1) = 3(3ˣ)². Substitute y, solve, reject y ≤ 0.
3. **Terms in eˣ and e^(−x).** Multiply through by eˣ to get a quadratic in eˣ.
4. **Several logarithms.** Combine into one logarithm each side, then remove the logs. Check every argument is positive.

## Inequalities

- Taking ln of both sides keeps the inequality sign (ln is increasing).
- Dividing by ln a with 0 < a < 1 **reverses** the sign, because ln a < 0.
- "Smallest integer" questions: solve, then round in the correct direction and check two neighbouring integers.

## Linear form

| Model | Straight-line form | Vertical axis | Horizontal axis | Gradient | Intercept |
|---|---|---|---|---|---|
| y = kxⁿ | ln y = ln k + n ln x | ln y | ln x | n | ln k |
| y = k(aˣ) | ln y = ln k + x ln a | ln y | x | ln a | ln k |
| y = Ae^(bx) | ln y = ln A + bx | ln y | x | b | ln A |

From two points on the line: find the gradient, substitute one point to get the intercept, then exponentiate.

## Key terms

| Term | Meaning |
|---|---|
| Natural logarithm | ln x, the logarithm to base e |
| Exponential function | eˣ, and in general functions with the variable in the power |
| Inverse functions | Functions that undo each other; graphs reflect in y = x |
| Asymptote | A line a curve approaches but does not meet |
| Disguised quadratic | An equation that becomes quadratic after substituting y = aˣ |
| Linear form | A rearrangement that gives a straight line on transformed axes |
| Intercept | Value on the vertical axis when the horizontal variable is 0 |

## Exam traps

- ln(x + 4) is not ln x + ln 4.
- (2x − 1) ln 3 needs its bracket.
- ln 0.8 is negative: dividing by it reverses the inequality.
- 2ˣ = −3 has no solution; say so and reject it.
- In linear form the gradient may be n, ln a or b. Read the table carefully.
- With y = k(aˣ), a negative gradient means 0 < a < 1, not a negative a.
- Give the line with logarithms taken before any decimal answer.

## Self-test

1. Express ln(x³√y) in terms of ln x and ln y.
2. Solve eˣ = 7, exactly.
3. Solve 5^(x−1) = 20, giving x to 3 significant figures.
4. Solve ln(2x − 1) = 3, exactly.
5. Solve e^(2x) − 4eˣ + 3 = 0.
6. Solve 0.5ˣ < 0.1, giving the answer to 3 significant figures.
7. State the range of f(x) = 3 + e^(−2x).
8. Find f⁻¹(x) for f(x) = ln(x − 2), x > 2.
9. y = 4x^(−2). What is the gradient of the graph of ln y against ln x?
10. ln y = 1.5 + 0.2x. Write y in the form k(aˣ), constants to 3 significant figures.
11. Solve ln(x + 6) − ln x = ln 4.
12. Where does y = 2 − e^(−x) cross the x-axis?

**Answers**

1. 3 ln x + ½ ln y.
2. x = ln 7.
3. (x − 1) ln 5 = ln 20, so x = 1 + ln 20/ln 5 = **2.86**.
4. 2x − 1 = e³, so **x = (e³ + 1)/2**.
5. (eˣ − 1)(eˣ − 3) = 0, so **x = 0 or x = ln 3**.
6. x ln 0.5 < ln 0.1; ln 0.5 < 0, so x > ln 0.1/ln 0.5 = **3.32**, that is x > 3.32.
7. e^(−2x) > 0, so **f(x) > 3**.
8. y = ln(x − 2) gives x = eʸ + 2, so **f⁻¹(x) = eˣ + 2**, for all real x.
9. ln y = ln 4 − 2 ln x, so the gradient is **−2**.
10. y = e^1.5 × (e^0.2)ˣ = **4.48 × 1.22ˣ**.
11. (x + 6)/x = 4, so x + 6 = 4x and **x = 2**.
12. e^(−x) = 2, so −x = ln 2 and the curve crosses at **x = −ln 2**.

## Links

- Full explanations: [3.2 study guide](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3/)
- Marked questions: [3.2 practice questions](/resources/cambridge-a-level-mathematics-9709-logarithmic-and-exponential-functions-cambridge-3-practice/)
- All of Paper 3 condensed: [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/)
