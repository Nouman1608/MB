---
title: "AQA A-Level Mathematics (7357): Functions in modelling -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.11
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b11-functions-in-modelling-aqa-alevel-maths"
description: "Condensed AQA A-level Maths 7357 B11 notes: modelling vocabulary, choosing and fitting functions, judging fit, limitations, refinements and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense content statement **B11** of AQA A-level Mathematics (7357), Section B: Algebra and functions: "Use of functions in modelling, including consideration of limitations and refinements of the models." The overarching theme OT3 in the specification sets out the modelling skills behind it. Read the [B11 functions in modelling study guide](/resources/aqa-a-level-mathematics-7357-b11-functions-in-modelling-aqa-alevel-maths/) for worked examples, and test yourself with the [B11 practice questions](/resources/aqa-a-level-mathematics-7357-b11-functions-in-modelling-aqa-alevel-maths-practice/). More model types appear in the [partial fractions and functions in modelling revision notes](/resources/aqa-a-level-mathematics-partial-fractions-and-functions-in-modelling-revision-notes/). All figures here are invented.

## Key terms

| Term | Meaning |
|---|---|
| Model | A function used to describe a real situation |
| Assumption | A simplification made so the model can be written, such as constant speed |
| Parameter | A constant in the model, found from data or given |
| Domain of validity | The inputs for which the model gives sensible outputs |
| Interpolation | Predicting inside the range of the data; usually more reliable |
| Extrapolation | Predicting outside the range of the data; less reliable |
| Error (residual) | Observed value minus predicted value |
| Percentage error | Error ÷ observed value × 100 |
| Limitation | A way the model fails to match reality, tied to an assumption |
| Refinement | A specific change that addresses a limitation |

## The five stages and what scores

1. **Formulate**: write the function; find parameters from data.
2. **Use**: substitute; give the answer with units and sensible rounding.
3. **Interpret**: one sentence about the real situation.
4. **Evaluate**: compare with data; check the domain and long-term behaviour.
5. **Refine**: name a concrete change.

## Recognising a family from equally spaced data

| Outputs show | Family | Example |
|---|---|---|
| Equal first differences | Linear | 12, 15, 18, 21 |
| Equal second differences | Quadratic | 3, 7, 13, 21 (differences 4, 6, 8) |
| x × y constant | Reciprocal y = k/x | (2, 30), (3, 20), (5, 12) |
| Two linear rules meeting at a point | Piecewise or modulus | Falls at a steady rate, then rises at a steady rate |

## Finding parameters

- **Two unknowns, two data points:** substitute both and solve simultaneously.
- **Quadratic from three points:** substitute all three, or use the vertex form if the turning point is known.
- **Use the data point you are given at t = 0 first**: it often gives one constant directly.
- After fitting, test the model on any data point you did not use.

*Reminder.* C = a + b/n with (n, C) = (20, 9) and (100, 5): b(1/20 − 1/100) = 4, so b = 4 ÷ 0.04 = 100 and a = 4. C = 4 + 100/n.

*Reminder.* A quadratic with vertex (5, 40) passing through (0, 15): y = 40 + a(x − 5)², and 15 = 40 + 25a gives a = −1, so y = 40 − (x − 5)².

## Judging a model

- Compare predicted and observed values; quote the largest error, ideally as a percentage.
- A model can fit the data well and still behave badly outside it.
- Check for impossible outputs: negative lengths, populations or prices; more than 100%; values that keep growing for ever.
- Check the input type: whole numbers (people, items) or continuous (time, length).
- Between two models, say which fits the data better **and** which behaves more sensibly beyond it.

## Limitation and refinement pairs

| Model behaviour | Limitation | Refinement |
|---|---|---|
| Quadratic turns down after the vertex | Predicts a decline that cannot happen | Restrict the domain or switch to a levelling-off function |
| Straight line keeps rising | No upper limit, but capacity is finite | Cap the value with a piecewise rule |
| Fitted from two points only | Sensitive to measurement error | Fit using more data |
| Constant rate assumed | Rates change with time or quantity | Use a different rate after a stated value |
| Continuous variable used for a count | Non-integer predictions | Round sensibly and state the domain as integers |

## Exam traps

- An answer with no units, or no sentence in context, when asked to interpret.
- A limitation such as "it is not realistic" with no reason.
- A refinement that only says "make it more accurate".
- Trusting a prediction far outside the data without comment.
- Giving a negative or impossible value without saying the model has broken down.
- Using rounded parameters in later working, so the final answer is off.

## Quick self-test

1. Define extrapolation and explain why it is less reliable.
2. Which family fits 5, 9, 15, 23, 33 at equally spaced inputs?
3. Which family fits (1, 24), (2, 12), (4, 6), (8, 3)?
4. Fit y = mx + c to (2, 17) and (6, 29).
5. A model gives 46 where 50 was observed. Find the percentage error.
6. Fit P = a + b/n to (10, 25) and (40, 10).
7. A quadratic model has vertex (3, 18) and passes through (0, 0). Find it.
8. h = 30t − 5t² models a ball's height in metres. For what t is the model valid?
9. A model predicts 1,250.4 tickets. How should this be reported, and why?
10. Give one limitation of using y = 2.5x + 40 to model a child's height (cm) at age x years for 2 ≤ x ≤ 10.
11. Suggest a refinement for the model in question 10.
12. Model A fits five data points to within 2%; Model B to within 5%. Give a reason Model B might still be preferred.

### Answers

1. Predicting outside the range of the data; the pattern may not continue there.
2. Differences 4, 6, 8, 10; second differences 2: **quadratic**.
3. xy = 24 each time: **reciprocal, y = 24/x**.
4. m = 12/4 = 3, c = 17 − 6 = 11: **y = 3x + 11**.
5. Error = 50 − 46 = 4; 4/50 × 100 = **8%**.
6. b(1/10 − 1/40) = 15, so b × 3/40 = 15 and b = 200; a = 25 − 20 = 5. **P = 5 + 200/n**.
7. y = 18 + a(x − 3)²; 0 = 18 + 9a, so a = −2: **y = 18 − 2(x − 3)²**.
8. h ≥ 0 when 5t(6 − t) ≥ 0: **0 ≤ t ≤ 6**.
9. As **1,250 tickets**: the count must be a whole number.
10. For example: growth is assumed constant at 2.5 cm a year, but children grow at different rates at different ages, and the model would predict growth continuing for ever.
11. For example: use different gradients for different age ranges (piecewise), or fit the constants using measurements from more ages.
12. For example: Model B may behave sensibly outside the data (levels off or stays positive) while Model A predicts impossible values when extrapolated.

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B11, with overarching theme OT3.
