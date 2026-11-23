---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Correlation and regression -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-correlation-and-regression-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths S1 correlation and regression: S formulae, PMCC, least squares lines, coding, interpretation, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit S1, section 4: scatter diagrams, linear regression by least squares, explanatory and response variables, linear change of variable, and the product moment correlation coefficient with its use, interpretation and limitations. For worked examples, use the [correlation and regression study guide](/resources/edexcel-a-level-mathematics-yma01-s1-correlation-and-regression-edexcel-alevel-maths/).

## Formulae

```
Sxx = Σx² − (Σx)²/n        Syy = Σy² − (Σy)²/n        Sxy = Σxy − (Σx)(Σy)/n
r   = Sxy / √(Sxx Syy)          −1 ≤ r ≤ 1
y = a + bx,   b = Sxy / Sxx,   a = ȳ − b x̄
```

The regression line of y on x passes through (x̄, ȳ).

## Key terms

| Term | Meaning |
|---|---|
| Scatter diagram | Plot of paired data, explanatory variable on the horizontal axis |
| Explanatory (independent) variable | The variable set or used to explain; plotted as x |
| Response (dependent) variable | The variable that responds; plotted as y |
| Least squares regression line | Line minimising the sum of squared vertical distances from points to the line |
| PMCC, r | Measure of the strength and direction of linear association |
| Interpolation | Predicting within the range of the explanatory variable: reasonably reliable |
| Extrapolation | Predicting outside that range: unreliable |
| Linear coding | Replacing x by (x − a)/b, and similarly for y |

## Interpreting

- **r:** state strength (strong, moderate, weak), direction (positive, negative) and the word **linear**, then add context.
- **b:** "for each 1 unit increase in x, y increases (or decreases) by b units", in context.
- **a:** the predicted y when x = 0; often meaningless or extrapolation, so say so.
- **Prediction reliability:** inside the data range and |r| close to 1 means reliable; outside the range means extrapolation.

## Coding rules

```
p = (x − a)/h,  q = (y − c)/k   (h, k > 0)
r(p, q) = r(x, y)
Sxx = h² Spp      Syy = k² Sqq      Sxy = hk Spq
```

To convert a coded regression line: substitute p and q in terms of x and y, then rearrange to y = … + …x.

A negative scale factor on one variable reverses the sign of r.

## Mini example: decoding

p = (x − 50)/5, q = (y − 200)/10 and the line of q on p is q = −0.3 − 1.35p.

```
(y − 200)/10 = −0.3 − 1.35(x − 50)/5
 y − 200     = −3 − 2.7(x − 50)
 y           = 332 − 2.7x
```

## Limitations of r

- Linear association only: a curved pattern can give r near 0.
- Strongly affected by outliers.
- Association is not causation; a third variable may drive both.
- Says nothing beyond the data range.

## Quick checks

- Sxx and Syy must be positive.
- Sxy, b and r have the same sign.
- (x̄, ȳ) must satisfy your regression equation.
- If |r| > 1, there is an arithmetic error.

## Finding missing values

- Given the line y = a + bx and x̄, find ȳ by substitution, because the line passes through the mean point.
- Given b and Sxx, Sxy = b × Sxx.
- Given r, Sxx and Syy, Sxy = r√(Sxx Syy).

## Mini example: from summary statistics to a line

n = 8, Σx = 40, Σy = 96, Σx² = 240, Σy² = 1250, Σxy = 534.

```
Sxx = 240 − 40²/8 = 40       Syy = 1250 − 96²/8 = 98       Sxy = 534 − 40 × 96/8 = 54
r = 54/√(40 × 98) = 0.862     b = 54/40 = 1.35     a = 12 − 1.35 × 5 = 5.25
line: y = 5.25 + 1.35x
```

Check: the mean point (5, 12) satisfies 5.25 + 1.35 × 5 = 12.

## Reading a scatter diagram before calculating

- Points close to a straight line: r near 1 or −1; a linear model is reasonable.
- Points in a curve: r can mislead; a linear model is not appropriate.
- One point far from the rest: check whether it is an outlier that distorts r and the line.
- Two separate clusters: there may be two groups that should be analysed separately.

## Exam traps

- Dividing Sxy by Syy for the gradient.
- Rounding b before computing a.
- Interpreting a coded gradient as if it were the original gradient.
- Calling a prediction outside the range "accurate" because r is high.
- Writing "strong correlation" without "linear" and without context.
- Swapping explanatory and response variables when letters such as t and m are used.
- Concluding that x causes y from the value of r alone.

## Self-test

1. Write the formula for Sxy.
2. Which variable goes on the horizontal axis of a scatter diagram?
3. Sxx = 140 and Sxy = 210. Find the gradient of the regression line of y on x.
4. With the gradient from Question 3, x̄ = 12 and ȳ = 35, find the regression line.
5. Sxx = 140, Syy = 800 and Sxy = 210. Find r.
6. What is the effect on r of coding x as (x − 20)/4?
7. A regression line is y = 12.5 + 0.8x and x̄ = 20. Find ȳ.
8. Explain why a prediction outside the data range is unreliable.
9. Give one limitation of the PMCC.
10. Interpret b = −2.6 when y is a car's value in thousands of pounds and x its age in years.
11. For coded variables p = (x − 10)/2 and q = (y − 5)/3, Spq = 12. Find Sxy.
12. Can r = 0 when there is a clear relationship between x and y? Explain.

**Answers:** 1. Sxy = Σxy − (Σx)(Σy)/n. 2. The explanatory (independent) variable. 3. b = 210/140 = 1.5. 4. a = 35 − 1.5 × 12 = 17, so y = 17 + 1.5x. 5. r = 210/√(140 × 800) = 0.627 (3 s.f.). 6. None: r is unchanged. 7. ȳ = 12.5 + 0.8 × 20 = 28.5. 8. The linear relationship has only been observed within the range of the data and may not continue outside it. 9. Any one: measures linear association only; affected by outliers; does not show causation. 10. Each extra year of age is associated with a fall of about £2600 in value. 11. Sxy = 2 × 3 × 12 = 72. 12. Yes: r measures linear association only, so a strong curved relationship can give r close to 0.
