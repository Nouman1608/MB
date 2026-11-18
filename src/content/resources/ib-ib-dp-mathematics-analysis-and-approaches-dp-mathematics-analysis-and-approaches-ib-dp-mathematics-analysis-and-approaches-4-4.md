---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.4 Linear correlation of bivariate data and the regression line of y on x"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-4"
description: "IB Maths AA study guide to section 4.4: scatter diagrams, Pearson's r, lines of best fit through the mean point, the y on x regression line and predictions."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.4** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **linear correlation of bivariate data; Pearson's product-moment correlation
coefficient, r; scatter diagrams and lines of best fit by eye passing through the mean point; the equation
of the regression line of y on x; use of the regression line for prediction; and interpreting the
parameters a and b in y = ax + b**. It is SL and HL content.

The [sampling, data presentation, summary statistics and regression study guide](/resources/ib-dp-mathematics-aa-statistics-correlation-regression/)
gives a first example. This page concentrates on the reasoning that 4.4 questions reward: describing
correlation precisely, drawing and using a line by eye, interpreting a and b in context, and judging whether
a prediction can be trusted.

## Bivariate data and scatter diagrams

**Bivariate data** come in pairs (x, y) measured on the same individual: a car's age and its price, a day's
temperature and the ice creams sold. Plot them on a **scatter diagram**, with the variable you control or
use to predict (the **independent** variable) on the horizontal axis.

Describe the pattern with two words:

- **Direction:** positive (y tends to increase as x increases), negative (y tends to decrease), or no
  correlation.
- **Strength:** strong (points lie close to a straight line) or weak (a loose trend).

Also look for features a single number hides: a curved pattern, separate clusters, or an outlier.

## Pearson's product-moment correlation coefficient, r

r measures the strength and direction of the **linear** relationship between x and y.

- −1 ≤ r ≤ 1. The sign gives the direction; the size gives the strength.
- r = 1 or r = −1: all points lie exactly on a straight line.
- r close to 0: no **linear** relationship. There may still be a strong curved one.

The guide expects r to be found with technology; you do not compute it by hand in the exam. What you must
do is interpret it in context, for example "r = −0.994, so there is a very strong negative linear
correlation between a car's age and its price".

Two cautions:

- **A single outlier can change r a lot**, in either direction. Always look at the scatter diagram as well.
- **Correlation does not imply causation.** Ice cream sales and sunburn cases are positively correlated
  because both rise in hot weather, not because one causes the other. A third variable, or coincidence, can
  produce correlation.

## The line of best fit by eye

A line of best fit drawn by eye should follow the trend with roughly equal numbers of points either side,
and it should **pass through the mean point** (x̄, ȳ). To find its equation, pick a second point on your
line, find the gradient, and use the point-gradient form.

## The regression line of y on x

The **regression line of y on x**, y = ax + b, is the line of best fit found with technology (by least
squares). It always passes through the mean point. Use it to **predict y from a given x**. (To predict x
from y, a different line is needed: see the
[4.10 regression line of x on y study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-10/).)

**Interpreting the parameters in context:**

- **a (gradient):** for each increase of one unit in x, y changes by about a units, on average. Give units.
- **b (y-intercept):** the predicted value of y when x = 0. Say whether this makes sense: x = 0 may be far
  outside the data or impossible.

**When is a prediction reliable?**

- **Interpolation** (x inside the range of the data) with strong correlation is reasonably reliable.
- **Extrapolation** (x outside the range) is unreliable: the linear pattern may not continue.
- Weak correlation makes any prediction unreliable.

### Worked example 1: by eye and by technology

The ages, x years, and prices, y thousand dollars, of eight used cars of the same model are shown.

| x | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| y | 18.5 | 16.0 | 15.2 | 13.1 | 11.8 | 10.4 | 8.9 | 8.1 |

**Line by eye.** The mean point is (4.5, 12.75). Suppose your line also passes through (1, 18).

```
gradient = (12.75 − 18)/(4.5 − 1) = −5.25/3.5 = −1.5
y − 12.75 = −1.5(x − 4.5)   →   y = −1.5x + 19.5
```

**Technology.** A GDC linear regression gives:

```
r ≈ −0.994
y ≈ −1.48x + 19.4      (a = −1.476..., b = 19.39...)
```

The line by eye is close to the regression line, as it should be when the correlation is this strong.

**Interpretation.** r ≈ −0.994: a very strong negative linear correlation. The gradient means the price
falls by about 1.48 thousand dollars for each extra year of age. The intercept, about 19.4 thousand dollars,
is the predicted price of a new car (age 0): just outside the data, so only a rough estimate.

**Predictions.**

```
x = 5.5:  y ≈ −1.476(5.5) + 19.39 ≈ 11.3 thousand dollars   (interpolation: reliable)
x = 15:   y ≈ −1.476(15) + 19.39 ≈ −2.75                    (extrapolation: impossible)
```

A negative price shows the danger of extrapolation: prices of old cars level off rather than falling in a
straight line for ever. Use the unrounded coefficients stored in the GDC to avoid rounding errors.

### Worked example 2: the effect of an outlier

Seven points (1, 3), (2, 5), (3, 6), (4, 8), (5, 9), (6, 11), (7, 12) give r ≈ 0.997. Adding one point
(8, 2), perhaps a recording error, drops r to about 0.354. One point has turned a very strong correlation
into a weak one. Before quoting r, check the scatter diagram, and if an outlier is an error, correct or
remove it.

## Common mistakes

- Describing r = 0.3 as "no correlation": it is weak positive linear correlation.
- Saying r close to 0 means "no relationship"; there may be a non-linear one.
- Claiming that x causes y because r is large.
- Drawing a line by eye that misses the mean point.
- Interpreting a without units or without "on average".
- Using the y on x line to predict x from y.
- Making a prediction far outside the data range without comment.
- Using rounded values of a and b for predictions, which can change the third significant figure.

## Exam technique

- **"Write down"** r or the regression equation: from the GDC, to 3 significant figures; no working needed.
- **"Describe"** or **"interpret"** r: direction, strength and the word linear, in context.
- **"Interpret"** a or b: a sentence in context with units, such as "each extra degree is associated with
  about 5.5 more ice creams sold".
- **"Use your regression equation to estimate"**: substitute and give the answer in context.
- **"Comment on the reliability"**: refer to interpolation or extrapolation and to the strength of r.
- **"Explain why it is (not) appropriate"** to use the line: check the direction (y from x), the range and
  whether a linear model fits.

## Where to go next

Use the [4.4 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-4-revision-notes/)
for recall and the [4.4 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-4-practice/)
to test yourself. For summary statistics of each variable on its own, see the
[4.3 measures of central tendency and dispersion study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-3/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.4 (SL and HL): linear correlation of bivariate data; Pearson's product-moment correlation
coefficient, r; scatter diagrams; lines of best fit, by eye, passing through the mean point; equation of the
regression line of y on x; use of the equation of the regression line for prediction purposes; interpret the
meaning of the parameters, a and b, in a linear regression y = ax + b.
