---
title: "Cambridge IGCSE Statistics: Scatter diagrams, correlation, lines of best fit and estimation (0479)"
seoTitle: "IGCSE Statistics 0479 Scatter Diagrams Study Guide"
resourceType: "study-guides"
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
description: "Study guide to scatter diagrams, correlation, lines of best fit, semi-averages and estimation for Cambridge IGCSE Statistics, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers Topic 11, Bivariate distributions, of the Cambridge IGCSE Statistics 0479 syllabus for examination in 2027. It teaches outcomes 11.1 to 11.7: independent and dependent variables, correlation, plotting a scatter diagram, drawing a line of best fit by eye and by semi-averages, finding its equation, and using it to estimate. Use it with the [revision notes](/resources/cambridge-igcse-statistics-scatter-diagrams-correlation-lines-of-best-fit-and-revision-notes/) and the [practice questions](/resources/cambridge-igcse-statistics-scatter-diagrams-correlation-lines-of-best-fit-and-practice/). The [Cambridge IGCSE Statistics hub](/boards/cambridge/igcse/statistics/) and the [printable checklist](/checklists/cambridge/igcse/statistics/) cover the rest of the course, and the [Representation of Data guide](/resources/igcse-cambridge-statistics-representation-of-data/) covers the earlier charts and diagrams.

## What you must be able to do

| Outcome | What the syllabus asks |
|---|---|
| 11.1 | Understand the difference between an independent and a dependent variable |
| 11.2 | Use the terms positive, negative, weak, strong and no correlation, including from a scatter diagram or a table |
| 11.3 | Plot bivariate data to form a scatter diagram |
| 11.4 | Draw a line of best fit by eye and by the method of semi-averages (an even number of data pairs) |
| 11.5 | Find the equation of a line of best fit, in the form y = mx + c |
| 11.6 | Estimate one variable from the other, using the graph or the equation |
| 11.7 | Understand the assumptions made, including the limits of extrapolation |

## 11.1 Independent and dependent variables

Bivariate data means two variables measured on the same item, such as a runner's weekly practice and their 5 km time. The **independent variable** is the one you choose, control or use as the starting point. The **dependent variable** is the one that responds, or the one you want to estimate.

Ask: "which value would I use to predict the other?" That one is independent. It normally goes on the horizontal axis, with the dependent variable on the vertical axis.

| Pair | Independent | Dependent |
|---|---|---|
| Hours of practice, 5 km time | Hours of practice | 5 km time |
| Age of a bicycle, resale price | Age | Resale price |
| Rainfall in a month, reservoir level | Rainfall | Reservoir level |

Some pairs could be argued either way, such as height and arm span. The question will normally make the direction clear, for example by asking you to estimate one from the other.

## 11.2 Correlation

Correlation describes the relationship between the two variables. Describe it in two parts, **direction** (positive or negative) then **strength** (strong or weak), or say there is **no correlation**.

| Type | What the points do | Example |
|---|---|---|
| Positive | y tends to rise as x rises | Temperature and cold drinks sold |
| Negative | y tends to fall as x rises | Age of a car and its value |
| Strong | Points lie close to a straight line | Height and arm span |
| Weak | Points lie in a loose band around a line | Hours of sleep and a test mark |
| None | No pattern, points scattered | Shoe size and a test mark |

A table of values can be read the same way. Look at whether y generally goes up or down as x goes up, and how tightly it does so.

**Worked example 1.** Describe the correlation in this table.

| Altitude of village (m) | 100 | 400 | 700 | 1000 | 1300 |
|---|---|---|---|---|---|
| Mean July temperature (°C) | 27 | 25 | 22 | 19 | 17 |

As altitude rises, temperature falls every time, and the fall is roughly steady. This is **strong negative correlation**: higher villages tend to be cooler.

Always put your description in context. "Strong negative correlation" is the type; "higher villages tend to be cooler" shows you understand it.

## 11.3 Plotting a scatter diagram

1. Draw axes with a ruler. Put the independent variable on the x-axis.
2. Choose scales that use most of the grid. Start from zero, or use a broken axis marked with a zigzag if the values are all large.
3. Label each axis with the variable and its units.
4. Mark each pair as a small cross, and check every point against the table when you have finished.

**Running example.** A runner records the hours of practice per week (x) and the time in minutes for a 5 km run (y) over eight weeks.

| x (hours) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| y (minutes) | 34 | 32 | 31 | 29 | 26 | 25 | 22 | 21 |

The plotted points look like this (rows are minutes, columns are hours):

```
 35 | .  .  .  .  .  .  .  .
 34 | X  .  .  .  .  .  .  .
 33 | .  .  .  .  .  .  .  .
 32 | .  X  .  .  .  .  .  .
 31 | .  .  X  .  .  .  .  .
 30 | .  .  .  .  .  .  .  .
 29 | .  .  .  X  .  .  .  .
 28 | .  .  .  .  .  .  .  .
 27 | .  .  .  .  .  .  .  .
 26 | .  .  .  .  X  .  .  .
 25 | .  .  .  .  .  X  .  .
 24 | .  .  .  .  .  .  .  .
 23 | .  .  .  .  .  .  .  .
 22 | .  .  .  .  .  .  X  .
 21 | .  .  .  .  .  .  .  X
    +------------------------
      1  2  3  4  5  6  7  8
```

The points fall steadily from top left to bottom right and lie close to a straight line: **strong negative correlation**. More practice goes with faster times.

## 11.4 Lines of best fit

A line of best fit is a single straight line that follows the trend of the points. It lets you describe the relationship and make estimates.

### By eye

- Use a ruler and draw one straight line, not a join-the-dots.
- Follow the direction of the trend, with roughly equal numbers of points above and below the line.
- Pass close to the centre of the cloud of points. The line need not go through the origin or through any particular point.
- Extend it across the full range of the data.
- If one point is far from the rest (an outlier), the line should follow the main trend. Mention the outlier if the question asks about it.

Two sensible lines drawn by different people will differ a little. Estimates from a by-eye line are therefore approximate, so give them with that in mind.

### By semi-averages

This method gives one definite line. The syllabus says there will be an even number of data pairs.

1. Put the pairs in order of the x-value.
2. Split them into two equal groups: the lower half and the upper half.
3. Find the mean x and mean y of each group. These are two points on the line.
4. Plot both mean points and join them with a ruler. Extend the line.

**Worked example 2.** Use semi-averages on the running example.

Lower half (x = 1 to 4): mean x = (1 + 2 + 3 + 4)/4 = 2.5 and mean y = (34 + 32 + 31 + 29)/4 = 126/4 = 31.5.

Upper half (x = 5 to 8): mean x = (5 + 6 + 7 + 8)/4 = 6.5 and mean y = (26 + 25 + 22 + 21)/4 = 94/4 = 23.5.

The line passes through (2.5, 31.5) and (6.5, 23.5).

If the data are not listed in order, sort by x first. With six pairs you would have three in each group.

## 11.5 The equation y = mx + c

In y = mx + c, **m** is the gradient and **c** is the y-intercept, the value of y where the line crosses the y-axis. Find the equation from any two points on the line:

1. Gradient: m = (change in y)/(change in x).
2. Substitute one point into y = mx + c to find c.
3. Write the equation, using the variable names in the answer if the question does.

**Worked example 3.** Find the equation of the semi-averages line from example 2.

m = (23.5 − 31.5)/(6.5 − 2.5) = −8/4 = −2.

Use (2.5, 31.5): 31.5 = −2 × 2.5 + c, so c = 31.5 + 5 = 36.5.

The equation is **y = −2x + 36.5**.

In context, the gradient says that each extra hour of practice goes with a time about 2 minutes shorter. The intercept, 36.5, is the predicted time with no practice. That is outside the data (x runs from 1 to 8), so treat it with care.

**Worked example 4 (line drawn by eye).** A line of best fit for cold drinks sold (y) against midday temperature in °C (x) passes through (14, 40) and (30, 120). Find its equation.

m = (120 − 40)/(30 − 14) = 80/16 = 5. Then 40 = 5 × 14 + c gives c = −30.

The equation is **y = 5x − 30**. Choose two points that are far apart and that you can read exactly from the grid. Points close together make the gradient less accurate.

## 11.6 Estimating from the line

**From the graph.** To estimate y for a given x, go up from x to the line, then across to the y-axis. To estimate x for a given y, go across from y to the line, then down. Draw these guide lines faintly so the marker can see your method.

**From the equation.** Substitute. For an estimate of x, rearrange first.

**Worked example 5.** Using y = −2x + 36.5 from example 3:

- Time after 5.5 hours of practice: y = −2 × 5.5 + 36.5 = **25.5 minutes**.
- Practice needed for a 27-minute run: 27 = −2x + 36.5, so x = (36.5 − 27)/2 = 9.5/2 = **4.75 hours**.

Using the drinks line y = 5x − 30: at 22 °C, y = 5 × 22 − 30 = **80 drinks**. To sell 100, 100 = 5x − 30 gives x = **26 °C**.

The line is drawn to predict the dependent variable from the independent one. Working backwards to find x from y is allowed, but it is a rougher estimate.

## 11.7 Assumptions and extrapolation

**Interpolation** is estimating inside the range of the data. **Extrapolation** is estimating outside it. Interpolation is generally more trustworthy.

An estimate from a line of best fit assumes that:

- the straight-line pattern continues, which is only known for the range of the data;
- the sample is representative of the whole population;
- other factors that affect y stay the same;
- the variables are related in the way the line suggests. Correlation shows an association, but does not prove that one variable causes the other.

**Worked example 6.** Use the equation y = −2x + 36.5 for 20 hours of practice per week.

y = −2 × 20 + 36.5 = −3.5. A negative running time is impossible, so the estimate is meaningless. The data only cover 1 to 8 hours, and times cannot keep falling by 2 minutes for every extra hour. Even 10 hours, giving 16.5 minutes, lies beyond the data and should be treated as unreliable.

Likewise, the drinks line gives y = 5 × 5 − 30 = −5 at 5 °C. Sales cannot be negative, so the line fails outside its range.

## Common errors

- Putting the dependent variable on the x-axis without a reason, or leaving the axes unlabelled.
- Describing correlation as "positive" or "strong" only. Give both direction and strength.
- Joining the points instead of drawing one straight line.
- Not sorting by x before splitting the data for semi-averages.
- Using the first and last data points as if they were the semi-average points.
- Mixing up the order of subtraction, so the gradient has the wrong sign. Subtract y-values and x-values in the same order.
- Quoting an extrapolated estimate with full confidence.

## Next steps

Condense this unit with the [revision notes](/resources/cambridge-igcse-statistics-scatter-diagrams-correlation-lines-of-best-fit-and-revision-notes/), then try the [practice questions](/resources/cambridge-igcse-statistics-scatter-diagrams-correlation-lines-of-best-fit-and-practice/). To check your overall readiness, take the [free 10-minute diagnostics](/diagnostics/).

## Official syllabus

Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, Topic 11 Bivariate distributions, published by Cambridge University Press & Assessment (Cambridge International).
