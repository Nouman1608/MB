---
title: "Cambridge IGCSE Statistics: Scatter diagrams, correlation, lines of best fit and estimation (0479) -- Revision Notes"
seoTitle: "IGCSE Statistics 0479 Scatter Diagrams Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["igcse"]
topic: "Scatter diagrams, correlation, lines of best fit and estimation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 35
syllabusTopics:
  - qualification: "igcse"
    topic: "bivariate-distributions-0479"
description: "Condensed revision notes on correlation, scatter diagrams, semi-averages, y = mx + c and extrapolation for Cambridge IGCSE Statistics Topic 11."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Topic 11, Bivariate distributions, of the Cambridge IGCSE Statistics 0479 syllabus for examination in 2027 (outcomes 11.1 to 11.7). For full explanations and longer worked examples, read the [study guide](/resources/cambridge-igcse-statistics-scatter-diagrams-correlation-lines-of-best-fit-and/). Then test yourself with the [practice questions](/resources/cambridge-igcse-statistics-scatter-diagrams-correlation-lines-of-best-fit-and-practice/). The [Cambridge IGCSE Statistics hub](/boards/cambridge/igcse/statistics/) and the [printable checklist](/checklists/cambridge/igcse/statistics/) show the rest of the course, and the [free 10-minute diagnostics](/diagnostics/) show where to focus.

## Key terms (11.1 and 11.2)

| Term | Meaning |
|---|---|
| Bivariate data | Two variables measured on each item |
| Independent variable | The one you choose, control or predict from. Usually on the x-axis |
| Dependent variable | The one that responds, or that you estimate. Usually on the y-axis |
| Positive correlation | y tends to increase as x increases |
| Negative correlation | y tends to decrease as x increases |
| Strong correlation | Points close to a straight line |
| Weak correlation | Points spread loosely around a trend |
| No correlation | No pattern at all |

Always give **direction and strength**: "strong negative", "weak positive". Add the context in words, for example "older cars tend to be worth less".

**Worked reminder 1.** Describe the correlation in this table of the age of a laptop (years) and its resale value (£).

| Age | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Value | 620 | 540 | 470 | 380 | 330 | 250 |

The value falls every year by a similar amount. This is **strong negative correlation**: older laptops tend to be worth less.

Quick recall of what the points look like:

| Correlation | Shape of the points |
|---|---|
| Strong positive | Narrow band rising from bottom left to top right |
| Weak positive | Wide, loose band rising to the right |
| Strong negative | Narrow band falling from top left to bottom right |
| Weak negative | Wide, loose band falling to the right |
| None | Spread across the grid with no direction |

## Plotting (11.3) in steps

1. Independent variable on the x-axis, dependent on the y-axis.
2. Ruler-drawn axes, scales using most of the grid, labels with units.
3. Small crosses for each pair.
4. Recount the points against the table.

Choose a scale where each small square is a simple step, such as 1, 2, 5 or 10 units. If every value is large, a broken axis saves space, but mark the break clearly.

## Line of best fit (11.4)

**By eye:** one straight ruled line, following the trend, with similar numbers of points either side, through the middle of the cloud, covering the whole range. It need not pass through the origin or any data point. If one point lies far from the others, follow the main trend and mention the outlier if asked.

**By semi-averages (even number of pairs only):**

1. Sort the pairs by x.
2. Split into a lower half and an upper half of equal size.
3. Find the mean point (mean x, mean y) of each half.
4. Plot both mean points and join them.

**Worked reminder 2.** Weekly social media posts (x) and new enquiries (y), recorded in this order:

| x | 8 | 3 | 12 | 5 | 10 | 1 |
|---|---|---|---|---|---|---|
| y | 41 | 22 | 59 | 29 | 50 | 15 |

Sorted by x: (1, 15), (3, 22), (5, 29) | (8, 41), (10, 50), (12, 59).

Lower mean: x = (1 + 3 + 5)/3 = 3, y = (15 + 22 + 29)/3 = 22.

Upper mean: x = (8 + 10 + 12)/3 = 10, y = (41 + 50 + 59)/3 = 50.

The line passes through (3, 22) and (10, 50).

## Equation of the line (11.5)

| Step | Working |
|---|---|
| Gradient | m = (y₂ − y₁)/(x₂ − x₁) |
| Intercept | Put one known point into y = mx + c and solve for c |
| Equation | y = mx + c, with the numbers filled in |

**Worked reminder 3.** Continue from reminder 2.

m = (50 − 22)/(10 − 3) = 28/7 = 4. Then 22 = 4 × 3 + c gives c = 10.

**y = 4x + 10.** In context, each extra post goes with about 4 more enquiries. The value 10 is the predicted number of enquiries with no posts, and no posts lies outside the data (x runs from 1 to 12).

Meaning of the parts: **m** is the change in y for each one-unit increase in x. **c** is the value of y when x = 0.

## Estimating (11.6)

| You know | You want | From the graph | From y = mx + c |
|---|---|---|---|
| x | y | Up to the line, across to the y-axis | Substitute x |
| y | x | Across to the line, down to the x-axis | Rearrange to x = (y − c)/m, then substitute |

**Worked reminder 4.** Using y = 4x + 10 from reminder 3:

- 7 posts: y = 4 × 7 + 10 = **38 enquiries**.
- 54 enquiries: 54 = 4x + 10, so x = 44/4 = **11 posts**.

Show the substitution. A bare number shows no method if it turns out to be slightly off.

## Assumptions and extrapolation (11.7)

| Idea | Note |
|---|---|
| Interpolation | Estimate inside the range of the data. More reliable |
| Extrapolation | Estimate outside the range. Less reliable, since the pattern may not continue |
| Assumption 1 | The straight-line trend continues for the values used |
| Assumption 2 | The sample is representative |
| Assumption 3 | Other influences stay unchanged |
| Warning | Correlation does not by itself show that one variable causes the other |

**Worked reminder 5.** Use y = 4x + 10 for 20 posts a week. y = 4 × 20 + 10 = 90 enquiries. The data stop at 12 posts, so this is extrapolation. The pattern may level off, for instance if the audience is limited, so 90 is not reliable.

If an extrapolated value is impossible, say so. A negative number of sales or a negative time cannot be real, which shows the line stops working there.

## Routine for a full question

1. Name the independent and dependent variables.
2. Plot the points, or check the plotted points.
3. State the correlation, with direction, strength and context.
4. Draw the line, by eye or by semi-averages as instructed.
5. Find the equation from two accurate points on the line.
6. Estimate by reading the graph or substituting, and show the working.
7. Comment on how far the estimate can be trusted.

## Must-know distinctions

| Pair | Difference |
|---|---|
| Strong and weak | Strength is about how close the points are to the line |
| Positive and negative | Direction is about the sign of the gradient |
| Weak and none | Weak still shows a trend. None shows no trend |
| By eye and semi-averages | By eye depends on your judgement. Semi-averages gives a definite line |
| Gradient and intercept | Gradient is the rate of change. Intercept is the y-value at x = 0 |
| Interpolation and extrapolation | Inside and outside the data range |

## Quick self-test

1. In a trial relating medicine dose to blood pressure, which variable is independent?
2. The points on a scatter diagram fall closely along a line from top left to bottom right. Describe the correlation.
3. State the correct description if y rises with x but the points are widely spread.
4. Four pairs are (2, 10), (4, 14), (6, 19) and (8, 25). Find the two semi-average points.
5. Find the equation of the line through those two points.
6. Use your equation to estimate y when x = 5.
7. A line of best fit passes through (0, 6) and (10, 26). Find its equation.
8. Using the equation from question 7, find x when y = 40.
9. The data in question 4 have x between 2 and 8. Is an estimate at x = 20 interpolation or extrapolation, and how far should you trust it?
10. A friend says a line of best fit must pass through the origin. Is this right?

### Answers

1. The dose.
2. Strong negative correlation.
3. Weak positive correlation.
4. Lower half (2, 10) and (4, 14) gives (3, 12). Upper half (6, 19) and (8, 25) gives (7, 22).
5. m = (22 − 12)/(7 − 3) = 2.5. Then 12 = 2.5 × 3 + c gives c = 4.5. So y = 2.5x + 4.5.
6. y = 2.5 × 5 + 4.5 = 17.
7. m = (26 − 6)/10 = 2 and c = 6, so y = 2x + 6.
8. 40 = 2x + 6, so x = 34/2 = 17.
9. Extrapolation. It is far outside the data, so the estimate is unreliable.
10. No. It can cross the y-axis anywhere. Draw the line through the middle of the points.

## Where marks are usually lost

- Describing only the direction ("positive") and leaving out the strength.
- Not writing the description in the context of the question.
- Drawing a curve or joining dots instead of one ruled straight line.
- Splitting the data into halves before sorting by x.
- Reading values from a line that stops short of the data range or is drawn carelessly.
- Subtracting the coordinates in different orders, which gives the wrong sign for the gradient.
- Forgetting the units, or giving an equation without y and x.
- Trusting an estimate far outside the data, or not commenting when it is impossible.
- Guessing a by-eye equation from the picture instead of reading two accurate points from the grid.

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, Topic 11 Bivariate distributions, published by Cambridge University Press & Assessment (Cambridge International).
