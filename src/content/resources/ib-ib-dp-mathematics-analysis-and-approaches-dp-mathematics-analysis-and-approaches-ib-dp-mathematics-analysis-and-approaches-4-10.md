---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.10 The regression line of x on y"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.91
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-10"
description: "Study guide to section 4.10 of IB DP Maths AA: why the x on y regression line differs from y on x, when to use it, and worked GDC and Paper 1 examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 4.10 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) asks for the
**equation of the regression line of x on y** and its **use for prediction purposes**. It is SL
content, so it is examined at both SL and HL. It builds directly on section 4.4, where you met
Pearson's r and the regression line of y on x. The
[statistics and regression study guide](/resources/ib-dp-mathematics-aa-statistics-correlation-regression/)
covers 4.1 to 4.4 and gives a first example of the x on y line; this page goes further into why the
two lines differ, how to choose between them, and the calculator-free questions Paper 1 can set.

When you have worked through it, use the
[4.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-10-revision-notes/)
for recall and the
[4.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-10-practice/)
to test yourself.

## What the section asks of you

- Find the regression line of x on y, in the form x = cy + d, with technology.
- Use it to estimate a value of x from a given value of y.
- Know that it is a different line from the regression line of y on x, and choose the right one for
  the prediction asked.
- Comment on whether a prediction is reliable, using r and the range of the data.

## Why there are two regression lines

A regression line is a **least squares** line. The y on x line is chosen to make the sum of the
squared **vertical** distances from the points to the line as small as possible. Those vertical
distances are errors in y, which is what you care about when y is the quantity you are predicting.

When x is the quantity you want to predict, the errors that matter are the **horizontal** distances
from the points to the line, measured in the x direction. Minimising the sum of their squares gives a
second line: the regression line of x on y. In that calculation y plays the part of the independent
variable.

The two lines are not rearrangements of each other. They answer different questions, so in general
they have different gradients. Three facts link them:

| Fact | What it means for you |
|---|---|
| Both lines pass through the mean point (x̄, ȳ) | If you know both equations, solving them simultaneously gives x̄ and ȳ |
| The lines coincide only when r = 1 or r = −1 | With perfect linear correlation every point lies on one line, so both errors are zero |
| The weaker the correlation, the wider the angle between the lines | With r close to 0 the y on x line is close to y = ȳ (horizontal) and the x on y line is close to x = x̄ (vertical) |

The last row explains why rearranging is dangerous: it gives a reasonable answer only when the
correlation is so strong that the lines almost coincide, which is exactly when the choice matters
least.

## Worked example 1: a GDC question

Eight athletes recorded their weekly training distance, x km, and a fitness test score, y.

| x (km) | 12 | 15 | 17 | 20 | 22 | 25 | 28 | 30 |
|---|---|---|---|---|---|---|---|---|
| y (score) | 54 | 49 | 58 | 52 | 63 | 57 | 66 | 61 |

**(a)** Find r and the regression line of y on x. **(b)** Find the regression line of x on y.
**(c)** Estimate the weekly distance of an athlete who scored 60.

```
(a) GDC, two-variable statistics with x as list 1, y as list 2:
    r = 0.710 (3 s.f.)
    y = 0.643x + 43.9
(b) Swap the lists so that y is the independent variable:
    x = 0.785y − 24.0
(c) We are predicting x from y, so use the x on y line:
    x = 0.78478... × 60 − 24.0 = 23.1 km (3 s.f.)
```

Rearranging the y on x line instead gives x = (60 − 43.9)/0.643 ≈ 25.0 km. That is almost 2 km
away from the correct estimate, because with r = 0.710 the two lines are well apart. The correct
method earns the marks; the rearranged answer earns none.

Check: both lines pass through the mean point (21.125, 57.5). Substituting y = 57.5 into the x on y
line gives 0.78478 × 57.5 − 24.0 = 21.125, as it should.

Is the estimate reliable? The score 60 lies inside the observed range of y (49 to 66), so this is
interpolation. The correlation is moderate rather than strong, so the estimate is reasonable but
should be treated with some caution. With only eight athletes, a single unusual point could shift
the line noticeably.

## Worked example 2: a Paper 1 question with no technology

Paper 1 does not allow a calculator, so it cannot ask you to compute a regression line from raw data.
It can give you both lines and test whether you understand them.

For a set of bivariate data, the regression line of y on x is y = 1.5x + 4 and the regression line
of x on y is x = 0.6y − 1.2.

**(a)** Find the mean point. **(b)** Estimate x when y = 30. **(c)** Estimate y when x = 10.

```
(a) Both lines pass through (x̄, ȳ), so solve them together.
    Substitute y = 1.5x + 4 into x = 0.6y − 1.2:
    x = 0.6(1.5x + 4) − 1.2
    x = 0.9x + 2.4 − 1.2
    0.1x = 1.2, so x̄ = 12
    ȳ = 1.5(12) + 4 = 22.   Mean point (12, 22).
(b) Predicting x, so use x on y:   x = 0.6(30) − 1.2 = 16.8
(c) Predicting y, so use y on x:   y = 1.5(10) + 4 = 19
```

Both gradients are positive, which is consistent: the two lines of one data set always have
gradients of the same sign as r.

## Worked example 3: deciding whether to predict at all

A café recorded the daily maximum temperature, T °C, and the number of iced drinks sold, n, on
twelve days with temperatures between 14 °C and 29 °C and sales between 38 and 112. The regression
line of T on n is T = 0.18n + 8.2 and r = 0.93.

- To estimate the temperature on a day when 90 drinks were sold: T = 0.18(90) + 8.2 = 24.4 °C.
  Sales of 90 are inside the data range and r is strong, so this is reliable.
- To estimate the temperature on a day when 200 drinks were sold: T = 0.18(200) + 8.2 = 44.2 °C.
  Sales of 200 are far outside the data, so this is extrapolation and unreliable, even though the
  arithmetic is correct.
- To estimate sales on a 20 °C day, this line is the wrong tool. You need the line of n on T.

(The figures in this example are invented for practice.)

## Common mistakes

- **Rearranging y = ax + b to get x.** This is the single most common error in 4.10. The rearranged
  line minimises the wrong distances.
- **Using the x on y line to predict y.** It is a one-way tool, just like the y on x line.
- **Forgetting to swap the lists** on the GDC, and so writing down the y on x line twice.
- **Mixing up the letters.** The x on y line is written x = cy + d; its gradient on a graph of y
  against x is 1/c, not c.
- **Using rounded coefficients** in a later calculation. Store the full values in the GDC.
- **Predicting outside the range of y values** without commenting that the result is unreliable.

## Exam technique and command words

- **Write down** the equation: a GDC result with no working needed, but give the full equation, not
  just the values of c and d.
- **Find** or **estimate** a value: write the line you are using with the substituted value, then the
  answer, so method marks are available if the final figure slips.
- **Hence**: use the line you have just found; a different method may not earn the marks.
- **Justify** or **comment on** a prediction: refer to the strength of r and to whether the given
  value lies inside the data range. Both points together make a complete comment.
- Give answers to three significant figures unless the question says otherwise.

## Where to go next

Condense the section with the
[4.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-10-revision-notes/),
then work through the
[4.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-10-practice/).
For the rest of the descriptive statistics unit, see the
[statistics and regression revision notes](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 4.10: equation of the regression line of x on y, and use of
the equation for prediction purposes.
