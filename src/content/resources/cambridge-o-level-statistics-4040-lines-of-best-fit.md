---
title: "Cambridge O Level Statistics (4040): Lines of best fit"
resourceType: "study-guides"
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
description: "Lines of best fit by eye and by semi-averages, finding y = mx + c, interpreting gradient and intercept, and judging predictions, for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 9.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: lines of best fit. The syllabus says this includes "the method of semi-averages, and the derivation of the equation of the fitted straight line in the form y = mx + c", together with the "use and limitations of a line of best fit in prediction". The whole of topic 9 is introduced in the [scatter diagrams and lines of best fit study guide](/resources/cambridge-o-level-statistics-scatter-diagrams-correlation-and-lines-of-best-fit/); describing correlation is covered in the [correlation study guide](/resources/cambridge-o-level-statistics-4040-elementary-ideas-of-correlation/). Use the [lines of best fit revision notes](/resources/cambridge-o-level-statistics-4040-lines-of-best-fit-revision-notes/) for recall and the [lines of best fit practice questions](/resources/cambridge-o-level-statistics-4040-lines-of-best-fit-practice/) for exam-style work.

## What section 9.2 expects

| Skill | What you do |
|---|---|
| Mean point | Calculate (x̄, ȳ) and plot it |
| Line by eye | Draw a straight line through the mean point that follows the pattern |
| Semi-averages | Split the ordered data into two halves, find each half's mean point, join them |
| Equation | Find m and c from two points on the line and write y = mx + c |
| Interpretation | Explain the gradient and intercept in context |
| Prediction | Use the line or equation, and judge how reliable the estimate is |

## The mean point and a line by eye

The mean point (x̄, ȳ) is the point whose coordinates are the mean of the x values and the mean of the y values. A line of best fit should pass through it.

To draw a line by eye:

1. Plot the mean point clearly, often as a small circle so it is not confused with the data.
2. Place a ruler through the mean point and turn it until it follows the direction of the points.
3. Aim for roughly equal numbers of points above and below the line along its whole length, not just overall.
4. Draw one straight line across the range of the data. Do not force it through the origin, and do not join the first and last points.

A line by eye is quick but personal; two people may draw slightly different lines. The method of semi-averages gives a line that everyone using the same data will agree on.

## The method of semi-averages

1. **Order the pairs by x.** Each y stays with its own x.
2. **Split into a lower half and an upper half.** With an even number of pairs the halves are equal. With an odd number, leave out the middle pair so that each half has the same number of pairs.
3. **Find the mean point of each half**, (x̄₁, ȳ₁) and (x̄₂, ȳ₂).
4. **Plot both semi-average points** and join them with a straight line extended across the data.

With equal halves and no pair left out, the midpoint of the two semi-average points is the overall mean point, so the line passes through (x̄, ȳ). This gives a free check on your arithmetic.

## Worked example 1: semi-averages with a check

Ten students recorded their hours of typing practice (x) and the number of errors (y) they then made in a typing test.

| x | 3 | 8 | 1 | 6 | 10 | 4 | 7 | 2 | 9 | 5 |
|---|---|---|---|---|---|---|---|---|---|---|
| y | 40 | 22 | 47 | 30 | 15 | 36 | 26 | 43 | 18 | 33 |

Order by x and split into halves of five.

```
Lower: (1, 47) (2, 43) (3, 40) (4, 36) (5, 33)
Upper: (6, 30) (7, 26) (8, 22) (9, 18) (10, 15)

Lower mean point: x̄₁ = 15 ÷ 5 = 3,  ȳ₁ = 199 ÷ 5 = 39.8
Upper mean point: x̄₂ = 40 ÷ 5 = 8,  ȳ₂ = 111 ÷ 5 = 22.2
```

Find the equation.

```
m = (22.2 − 39.8) ÷ (8 − 3) = −17.6 ÷ 5 = −3.52
c = 39.8 − (−3.52 × 3) = 39.8 + 10.56 = 50.36
y = 50.36 − 3.52x
```

Check through the overall mean point: x̄ = 55 ÷ 10 = 5.5 and ȳ = 310 ÷ 10 = 31. Substituting, 50.36 − 3.52 × 5.5 = 50.36 − 19.36 = 31. The check works.

Two errors are common here. Splitting the data in the order given, before sorting by x, gives the wrong halves. Finding the mean of the y values of each half but the median of the x values mixes measures.

## Deriving y = mx + c from a drawn line

When a line has already been drawn, read two points **on the line**, far apart, preferably where the line crosses grid lines exactly. Use the line, not data points, because data points rarely lie on it.

```
m = (y₂ − y₁) ÷ (x₂ − x₁)
c = y₁ − m x₁
```

Do not read c from the y-axis unless the x-axis starts at zero; on a broken axis the line's height at the left edge is not the intercept.

## Worked example 2: interpreting and predicting

A shop records the daily maximum temperature x (°C) and the electricity y (kWh) used for air-conditioning on days with temperatures between 20 °C and 40 °C. A line of best fit passes through (22, 30) and (38, 78).

```
m = (78 − 30) ÷ (38 − 22) = 48 ÷ 16 = 3
c = 30 − 3 × 22 = −36
y = 3x − 36
```

**Interpret the gradient.** "For each extra degree of temperature, about 3 more kWh of electricity are used." A gradient always means "change in y for an increase of 1 in x", with both units stated.

**Interpret the intercept.** At x = 0 the line gives −36 kWh, which is impossible. The intercept has no practical meaning here because 0 °C is far outside the data, which only cover 20 °C to 40 °C. Say this rather than inventing a meaning.

**Predict for 30 °C.** y = 3 × 30 − 36 = 54 kWh. This is **interpolation** (inside the range of the data), so it is reasonably reliable if the correlation is strong.

**Predict for 10 °C.** y = 3 × 10 − 36 = −6 kWh, impossible. This is **extrapolation** (outside the range). The relationship may not continue: on cold days the air-conditioning is simply switched off, so electricity use for it levels off at zero.

## Use and limitations in prediction

A prediction from a line of best fit is more reliable when:

- the correlation is **strong**, so points lie close to the line;
- the value used lies **within the range** of the data (interpolation);
- the sample is **reasonably large** and **free of unexplained outliers**;
- the conditions under which the data were collected still apply.

It is less reliable, or meaningless, when:

- it is an **extrapolation**, because the pattern may change outside the observed range;
- the correlation is **weak**, so individual values vary widely around the line;
- the relationship is **curved**, so a straight line fits badly;
- the result is **impossible** in context, such as a negative count, which shows the line has broken down.

Every prediction is an **estimate** of a typical value, not a guarantee for an individual. In Worked example 1, the line predicts about 34.5 errors after 4.5 hours of practice, but a particular student could make noticeably more or fewer.

## Common mistakes

- Not ordering by x before forming the halves.
- Including the middle pair in both halves, or in neither, inconsistently. With an odd number of pairs leave it out.
- Joining the two semi-average points but not extending the line across the data.
- Reading c off a broken axis.
- Using data points instead of points on the line to find m.
- Interpreting the gradient without units, or giving the intercept a meaning that is impossible.
- Calling an extrapolated value reliable because the arithmetic is correct.
- Rounding m before finding c, which shifts the line.

## Exam technique for the command words

- **Calculate** the mean point or semi-average points: show the totals divided by the count.
- **Draw** a line of best fit: through the mean point (or the semi-average points), straight, ruled, across the range of the data.
- **Find** the equation: show m as a fraction of differences, then c, and write the final equation.
- **Estimate**: substitute into the equation or read from the line, and show which.
- **Comment on the reliability**: decide interpolation or extrapolation, refer to the strength of correlation, and mention any impossible value in context.
- **Interpret** m or c: "for each additional [x unit], [y] changes by about m [y units]".

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 9.2: lines of best fit, including the method of semi-averages, the derivation of the equation of the fitted straight line in the form y = mx + c, and the use and limitations of a line of best fit in prediction.
