---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.10 The regression line of x on y -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.91
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-10"
description: "Revision notes on IB DP Maths AA section 4.10: the x on y regression line, choosing the right line, the mean point, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 4.10, the regression line of x on y**, in IB DP Mathematics:
Analysis and Approaches (first assessment 2021). It is SL content, examined at SL and HL. For full
explanations and worked examples, use the
[4.10 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-4-10/);
to test yourself under exam conditions, use the
[4.10 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-10-practice/).
The y on x line and Pearson's r from section 4.4 are summarised in the
[statistics and regression revision notes](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-revision-notes/).

## The core rule

**Predict x from y with the x on y line. Predict y from x with the y on x line. Never rearrange one
to do the other's job.**

| You are given | You want | Use |
|---|---|---|
| a value of x | an estimate of y | y on x: y = ax + b |
| a value of y | an estimate of x | x on y: x = cy + d |

## Condensed recall

- **What the line is.** The x on y line is the least squares line that minimises the sum of the
  squared horizontal distances (errors in x) from the points to the line. The y on x line minimises
  squared vertical distances.
- **How to find it.** By technology only. On the GDC, run linear regression with the y data as the
  independent list and the x data as the dependent list. Write the result as x = cy + d.
- **The mean point.** Both lines pass through (x̄, ȳ). Given both equations, solve them
  simultaneously to find x̄ and ȳ; this is a typical calculator-free task.
- **When the lines agree.** Only when r = ±1, when every point lies on one straight line.
- **When they are far apart.** As r moves towards 0 the y on x line flattens towards y = ȳ and the
  x on y line steepens towards x = x̄. At r = 0 the two lines are perpendicular.
- **Signs.** Both gradients have the same sign as r. If one line slopes up and the other slopes
  down, one of the equations is wrong.
- **Gradient on the diagram.** On axes with y vertical, the line x = cy + d has gradient 1/c.
  Since it is the steeper line (in size) whenever |r| < 1, |1/c| ≥ |a|.
- **Reliability.** A prediction is reliable when |r| is close to 1 and the given value of y lies
  inside the observed range of y values (interpolation). Predicting from a y value outside that
  range is extrapolation and unreliable.

## Key terms

| Term | Meaning |
|---|---|
| Bivariate data | Data in pairs (x, y) recorded from the same individuals |
| Independent variable | The variable whose value is given and used to make the prediction; for the x on y line it is y |
| Regression line of x on y | The least squares line x = cy + d used to estimate x from a given y |
| Least squares | Choosing the line that makes the sum of squared errors as small as possible |
| Mean point (x̄, ȳ) | The point whose coordinates are the two means; every regression line passes through it |
| Pearson's r | Measure of the strength of linear correlation, −1 ≤ r ≤ 1 |
| Interpolation | Predicting inside the range of the given data |
| Extrapolation | Predicting outside the range of the given data; unreliable |

## Mini-example 1: lines that almost coincide

A car's age, x years, and resale value, y (in thousands of dollars), were recorded for eight cars
of the same model aged 1 to 8 years, with values from 8.1 to 21.5. Technology gives r = −0.997,
y = −1.91x + 22.9 and x = −0.520y + 11.9. For a car valued at 12, the x on y line gives
x = −0.51960 × 12 + 11.9497 = 5.71 years. Rearranging the y on x line would give 5.72 years. The
answers are close because |r| is very close to 1, but only the first is the correct method. (Data
invented for practice.)

## Mini-example 2: finding the mean point by hand

y = 2x − 3 and x = 0.4y + 2.

```
x = 0.4(2x − 3) + 2 = 0.8x + 0.8
0.2x = 0.8  →  x̄ = 4
ȳ = 2(4) − 3 = 5   →  mean point (4, 5)
```

Both gradients are positive, which matches a positive r.

## Exam traps

- **Trap: the rearranged line.** "Estimate x when y = 45" after you have found y on x. The question
  may never mention the x on y line; you are expected to know you need it.
- **Trap: wrong line for y.** Once you have the x on y line, do not use it for a later part that
  asks for y.
- **Trap: list order.** The GDC gives the y on x line unless you swap the lists. If your two
  equations rearrange into each other exactly, you have not swapped.
- **Trap: the meaning of c.** In x = cy + d, c is the estimated change in x for each increase of 1
  in y. Interpret it in that direction, with units of x per unit of y.
- **Trap: rounding.** Rounded coefficients can change the third figure of an answer. Use stored
  values.
- **Trap: reliability comments.** "r is high" alone is incomplete if the y value is outside the data
  range. Mention both strength and range.

## Self-test

1. Which regression line should be used to estimate x from a given value of y?
2. Which distances does the x on y line minimise?
3. Through which point do both regression lines pass?
4. Under what condition are the two regression lines the same line?
5. The y on x line is y = 0.5x + 10 and the x on y line is x = 1.6y − 12. Find the mean point.
6. Using the lines in question 5, estimate x when y = 20.
7. Using the lines in question 5, estimate y when x = 30.
8. For a data set, the y on x line has a negative gradient. What is the sign of c in x = cy + d?
9. What happens to the two lines as r gets closer to 0?
10. On a GDC, how do you obtain the x on y line rather than the y on x line?
11. The x on y line for some data is x = 2.4y + 1.5. Interpret 2.4 in context if x is mass in kg
    and y is length in cm.
12. Data have y values from 20 to 50 and r = 0.94. Is an estimate of x when y = 80 reliable? Give a
    reason.

**Answers**

1. The regression line of x on y.
2. The squared horizontal distances (errors in x) from the points to the line.
3. The mean point (x̄, ȳ).
4. When r = 1 or r = −1 (perfect linear correlation).
5. x = 1.6(0.5x + 10) − 12 = 0.8x + 4, so 0.2x = 4, x̄ = 20 and ȳ = 0.5(20) + 10 = 20. Mean point
   (20, 20).
6. x = 1.6(20) − 12 = 20. (Here y = ȳ, so the estimate is x̄.)
7. y = 0.5(30) + 10 = 25, using the y on x line.
8. Negative: both gradients share the sign of r, which is negative here.
9. They move further apart: the y on x line approaches the horizontal line y = ȳ and the x on y line
   approaches the vertical line x = x̄.
10. Run linear regression with the y data as the independent (first) list and the x data as the
    dependent list.
11. Each extra 1 cm of length is associated with an estimated increase of 2.4 kg in mass.
12. No. Although r is strong, y = 80 is outside the observed range of 20 to 50, so this is
    extrapolation and the linear pattern may not continue.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 4.10: equation of the regression line of x on y; use of the
equation for prediction purposes.
