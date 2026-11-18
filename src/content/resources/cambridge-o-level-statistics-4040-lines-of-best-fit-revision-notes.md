---
title: "Cambridge O Level Statistics (4040): Lines of best fit -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 9 – Bivariate distributions and their representation by scatter diagrams"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 9.2
syllabusTopics:
  - qualification: "o-level"
    topic: "bivariate-distributions-and-scatter-diagrams-4040"
    subtopic: "lines-of-best-fit-4040"
description: "Condensed notes on the mean point, semi-averages, y = mx + c, interpreting gradient and intercept and the limits of prediction, with a self-test, for 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 9.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: lines of best fit, including the method of semi-averages, the equation of the fitted line in the form y = mx + c, and the use and limitations of the line in prediction. Full explanations are in the [lines of best fit study guide](/resources/cambridge-o-level-statistics-4040-lines-of-best-fit/), and exam-style questions are in the [lines of best fit practice questions](/resources/cambridge-o-level-statistics-4040-lines-of-best-fit-practice/). Describing correlation is revised in the [correlation revision notes](/resources/cambridge-o-level-statistics-4040-elementary-ideas-of-correlation-revision-notes/).

## Core recall

```
Mean point          (x̄, ȳ) = (Σx ÷ n, Σy ÷ n)
Gradient            m = (y₂ − y₁) ÷ (x₂ − x₁)
Intercept           c = y₁ − m x₁
Line                y = mx + c
```

- A line of best fit passes through the mean point.
- Semi-averages: order by x, split into two equal halves (leave out the middle pair if n is odd), find each half's mean point, join and extend.
- With equal halves and no pair left out, the line also passes through the overall mean point: use it as a check.

## Key terms

| Term | Meaning |
|---|---|
| Line of best fit | A straight line that follows the pattern of a scatter diagram |
| Mean point | (x̄, ȳ); the line of best fit should pass through it |
| Semi-average point | The mean point of the lower or upper half of the ordered data |
| Gradient m | Change in y for an increase of 1 in x, in context units |
| Intercept c | Value of y when x = 0; meaningful only if x = 0 is sensible and near the data |
| Interpolation | Estimating inside the range of the data |
| Extrapolation | Estimating outside the range of the data |

## Method: semi-averages with an odd number of pairs

Nine pairs, already ordered by x:

| x | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 |
|---|---|---|---|---|---|---|---|---|---|
| y | 20 | 24 | 27 | 29 | 34 | 41 | 44 | 48 | 47 |

```
Leave out the middle pair (10, 34).
Lower: x̄₁ = 20 ÷ 4 = 5,   ȳ₁ = 100 ÷ 4 = 25
Upper: x̄₂ = 60 ÷ 4 = 15,  ȳ₂ = 180 ÷ 4 = 45
m = (45 − 25) ÷ (15 − 5) = 2
c = 25 − 2 × 5 = 15
y = 2x + 15
```

The omitted point (10, 34) lies close to the line, which predicts 35 at x = 10.

## Method: a line by eye

1. Calculate and plot (x̄, ȳ).
2. Rule a line through it following the trend.
3. Balance the points above and below along the whole line.
4. Extend across the range of the data only.

## Equation from a drawn line

- Choose two points on the line, far apart, at grid crossings.
- Use the line, not data points.
- Read c from the y-axis only if the x-axis starts at 0.

## Interpreting m and c

| Equation and context | Gradient means | Intercept means |
|---|---|---|
| Hours of practice x, errors y: y = 50.4 − 3.5x | About 3.5 fewer errors per extra hour | About 50 errors with no practice, if 0 hours is near the data |
| Temperature x (°C, 20 to 40), electricity y (kWh): y = 3x − 36 | About 3 kWh more per extra °C | No meaning: 0 °C is outside the data and −36 kWh is impossible |

## Judging a prediction

| More reliable | Less reliable |
|---|---|
| Strong correlation | Weak correlation |
| Interpolation | Extrapolation |
| Plenty of data | Few points |
| No unexplained outliers | Outliers distort the line |
| Straight-line pattern | Curved pattern |

Any impossible result, such as a negative length, is evidence that the line does not apply there.

## Exam traps

- Forming halves before sorting by x.
- Putting the middle pair into one half when n is odd.
- Not extending the line beyond the two semi-average points.
- Using a data point instead of a point on the line for the gradient.
- Reading c from a broken axis.
- Rounding m before finding c.
- Gradient without units or context.
- Treating extrapolation as reliable.
- Forgetting that a prediction is an estimate of a typical value.

## Quick self-test

1. What point should every line of best fit pass through?
2. Find the mean point of (1, 4), (3, 8), (5, 9), (7, 15).
3. A line passes through (2, 11) and (6, 23). Find its equation.
4. What do you do with the middle pair when n is odd in the method of semi-averages?
5. The lower semi-average point is (4, 30) and the upper is (12, 14). Find the equation of the line.
6. The line y = 0.8x + 2 relates x hours of study to a score y. Interpret the gradient.
7. A line for tree height y (m) against age x (years, 5 to 30) is y = 0.4x + 1.5. Estimate the height at 20 years and say whether it is interpolation.
8. Using the line in question 7, estimate the height at 100 years and comment.
9. Why should points on the line, not data points, be used to find the gradient?
10. State two conditions that make a prediction more reliable.
11. With equal halves, how can you check a line found by semi-averages?
12. Why might the intercept of a line have no practical meaning?

### Answers

1. The mean point (x̄, ȳ).
2. (16 ÷ 4, 36 ÷ 4) = (4, 9).
3. m = 12 ÷ 4 = 3, c = 11 − 6 = 5, so y = 3x + 5.
4. Leave it out, so that each half has the same number of pairs.
5. m = −16 ÷ 8 = −2, c = 30 + 8 = 38, so y = 38 − 2x.
6. Each extra hour of study is associated with about 0.8 more marks.
7. 0.4 × 20 + 1.5 = 9.5 m. Yes, 20 years is inside the range 5 to 30.
8. 41.5 m. This is extrapolation far beyond the data; trees stop growing at a steady rate, so it is unreliable.
9. Data points rarely lie exactly on the line, so they give a different gradient.
10. Any two of: strong correlation; interpolation; plenty of data; no outliers; straight-line pattern.
11. Substitute the overall mean point; it should satisfy the equation.
12. x = 0 may be outside the range of the data, or impossible in context, so the line need not hold there.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 9.2: lines of best fit, including the method of semi-averages, the derivation of the equation of the fitted straight line in the form y = mx + c, and the use and limitations of a line of best fit in prediction.
