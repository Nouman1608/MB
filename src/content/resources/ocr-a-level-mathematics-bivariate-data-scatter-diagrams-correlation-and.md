---
title: "OCR A Level Mathematics A: Bivariate data: scatter diagrams, correlation and regression (H240)"
seoTitle: "OCR A Level Maths Scatter Diagrams & Correlation Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Bivariate data: scatter diagrams, correlation and regression"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 125
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "data-presentation-and-interpretation-ocr-alevel-maths"
description: "Study guide to interpreting scatter diagrams, regression lines and correlation for OCR A Level Mathematics A (H240), with worked examples and errors."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers the bivariate data strand of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. It teaches specification references 2.02c, 2.02d and 2.02e, all listed in Stage 1, the column shared with AS Level. Statistics is examined in Paper 2, Pure Mathematics and Statistics, and the specification says that some Statistics questions use the pre-release large data set as their setting. Everything here is about reading and interpreting data. Calculating a regression equation is excluded by the specification, so you will be given any equation you need.

Related pages: [revision notes](/resources/ocr-a-level-mathematics-bivariate-data-scatter-diagrams-correlation-and-revision-notes/), [practice questions](/resources/ocr-a-level-mathematics-bivariate-data-scatter-diagrams-correlation-and-practice/), the wider [OCR A Level Mathematics Statistics guide](/resources/ocr-a-level-mathematics-statistics/), the [course hub](/boards/ocr/a-level/mathematics/) and the [printable checklist](/checklists/ocr/a-level/mathematics/). To see where you stand before you start, try the [free diagnostics](/diagnostics/).

## What you must be able to do

| Ref | What the specification asks | Covered in |
|---|---|---|
| 2.02c | Read and interpret scatter diagrams and regression lines, and spot diagrams where the points fall into separate groups. A question may ask you to add to a diagram, but not to draw a whole one | Sections 1 to 3 |
| 2.02d | Understand informal interpretation of correlation | Section 4 |
| 2.02e | Understand that correlation does not imply causation | Section 5 |

The specification links this work to Pearson's coefficient in 2.05f and 2.05g, which are A Level only and taught in the hypothesis testing unit. Here you only need the idea that correlation describes how closely points follow a pattern.

## 1. Reading a scatter diagram

Bivariate data means two variables recorded for each item, such as the depth of a lake and its water temperature at that depth. Each item becomes one point.

**Explanatory and response variables.** The variable you think influences the other goes on the horizontal axis (x, the explanatory variable). The variable you want to predict goes on the vertical axis (y, the response variable).

When you describe a scatter diagram, cover four things, always in the context of the question:

1. **Direction.** Positive (y tends to rise as x rises), negative (y tends to fall), or no pattern.
2. **Strength.** How tightly the points cluster around the pattern.
3. **Shape.** A straight-line pattern (linear) or a curve.
4. **Anything unusual.** Points far from the pattern, or points that fall into separate groups.

### Worked example 1

Eight sites on a lake were sampled. Depth in metres and temperature in °C:

| Depth (m) | 1 | 2 | 3 | 5 | 7 | 10 | 14 | 20 |
|---|---|---|---|---|---|---|---|---|
| Temperature (°C) | 21.4 | 20.1 | 18.2 | 15.0 | 12.9 | 10.5 | 8.9 | 7.8 |

Describe the relationship.

```
Temperature falls every time depth increases, so there is
negative correlation.
The points lie close to a smooth line, so the correlation is strong.
The fall is steep for the first 5 m (about 1.3 to 1.9 °C per
metre) and flattens beyond 10 m (about 0.2 to 0.4 °C per metre),
so the relationship is curved rather than a straight line.
```

**Answer:** strong negative correlation between depth and temperature, with a pattern that curves and levels off at greater depths.

## 2. Distinct sections of the population

Sometimes the points split into separate groups. The groups usually represent different types of item mixed into one data set.

### Worked example 2

A courier firm recorded journey distance (km) and journey time (minutes) for cycle couriers and for van drivers.

| Type | Distance (km) | Time (minutes) |
|---|---|---|
| Cycle | 1, 1.5, 2, 3, 4, 5 | 9.5, 11.5, 13, 17.5, 21.5, 25 |
| Van | 4, 6, 8, 10, 12, 14 | 14, 17, 19.5, 23, 26.5, 29 |

Plotted together, the points form two bands. Both bands rise from left to right, so there is positive correlation overall. The cycle band is steeper because each extra kilometre costs a cyclist more time than a van driver.

A single line of best fit through all twelve points would predict about 17 minutes for a 4 km journey. The cyclist's actual time was 21.5 minutes and the van driver's was 14 minutes. The prediction matches neither group.

**What to write in an exam answer:** the data appear to come from two distinct sections of the population, so a single line is not appropriate. Use a separate line for each type of courier, and predict only from the line for the correct type.

When you see two clusters, ask what category could separate them. In work with the large data set, this is often a categorical column such as location, which you can use to colour or filter the points in a spreadsheet.

## 3. Regression lines

A regression line is a straight line fitted to bivariate data so it can be used to predict y from a value of x. This specification excludes calculating its equation, so a question will give you the equation or draw the line.

You need three skills.

**Interpret the gradient.** The gradient tells you how much y is predicted to change when x goes up by 1, in the units of the question.

**Interpret the intercept.** The intercept is the predicted y when x is 0. It is only meaningful if x = 0 is a sensible value within or near the data. Otherwise say it has no practical meaning.

**Predict, and judge the prediction.**
- **Interpolation** means predicting for an x value inside the range of the data. This is generally reasonably reliable if the correlation is strong.
- **Extrapolation** means predicting for an x value outside the range of the data. This is unreliable because you do not know the pattern continues.

A regression line of y on x is built to predict y from x. Do not rearrange it to estimate x from a known y.

### Worked example 3

A gym records the weekly training hours, x, of its members and their resting heart rate, y beats per minute. The members trained between 2 and 10 hours a week. The regression line is

```
y = 78 − 2.4x
```

(a) Interpret the gradient.
```
Gradient = −2.4.
Each extra hour of weekly training is associated with a resting
heart rate about 2.4 beats per minute lower.
```

(b) Estimate the heart rate for 5 hours of training and comment.
```
y = 78 − 2.4 × 5 = 78 − 12 = 66
```
About 66 beats per minute. 5 hours lies inside the range 2 to 10, so this is interpolation and is reasonably reliable.

(c) Estimate the heart rate for 30 hours of training and comment.
```
y = 78 − 2.4 × 30 = 78 − 72 = 6
```
A resting heart rate of 6 beats per minute is not credible. 30 hours is outside the data range, so this is extrapolation and the line should not be used there.

(d) Comment on the intercept.
The intercept of 78 is the prediction for 0 hours of training, which is below the lowest recorded value of 2 hours. It is an extrapolation, so treat it with caution.

### Adding to a diagram

The specification says you may be asked to add to a diagram. Typical tasks are plotting an extra point, or drawing a regression line from its equation.

- To draw a line, substitute two x values inside the plotted range, plot both points and join them with a ruler.
- A regression line of y on x passes through the mean point (x̄, ȳ). If you are told the means, you can plot this point as a check.

Using the gym line, if the mean training time is 6 hours then the mean point has y = 78 − 2.4 × 6 = 63.6, so the line passes through (6, 63.6).

## 4. Informal interpretation of correlation

"Informal" means you describe correlation in words rather than calculating anything.

| Description | What the points look like |
|---|---|
| Strong positive | Tight band rising left to right |
| Weak positive | Loose cloud, rising trend |
| No correlation | No visible trend |
| Weak negative | Loose cloud, falling trend |
| Strong negative | Tight band falling left to right |

Three further points:

- Correlation is a statement about how closely points follow a pattern. Pearson's coefficient (2.05f, A Level only) puts a number on how closely points follow a straight line.
- Strong correlation does not mean a straight line is appropriate. A curve can have points that follow it closely but a straight line fits badly.
- Always name the variables in your description: "taller students tend to have longer arm spans", not just "positive correlation".

## 5. Correlation does not imply causation

Two variables moving together does not show that one causes the other. When two variables are correlated there are four possible explanations:

1. x causes y.
2. y causes x.
3. A third variable causes both, called a confounding variable.
4. Coincidence, especially in a small sample.

### Worked example 4

Across 40 towns, the number of dental practices and the number of registered cars show strong positive correlation. A councillor says more dental practices cause more car ownership. Comment.

```
Larger towns have more people.
More people means more dental practices and also more cars.
Population is a third variable causing both.
```

**Answer:** the correlation does not show that dental practices cause car ownership. Population size is a plausible confounding variable that explains both.

A good conclusion has two parts: state what the data show (association), then name a possible alternative explanation in the context.

## Working with the large data set

The specification asks you to use spreadsheets or statistical software to create diagrams from the large data set, and to explore it using visual techniques. For this topic that means:

- Make scatter charts of pairs of numerical variables and describe them using the four-point checklist in section 1.
- Look for distinct sections by filtering on a categorical column.
- Note the range of each variable so you can tell interpolation from extrapolation.
- Ask whether any strong association could have a third-variable explanation.

Questions may supply selected data or diagrams from the data set, so context knowledge helps you interpret them.

## Common errors

- Describing correlation without naming the variables or giving context.
- Treating a prediction outside the data range as reliable.
- Calling any prediction at x = 0 meaningful when 0 is far outside the data.
- Using one line for two clearly separate groups.
- Writing "this proves X causes Y".
- Using a y-on-x line to find x from y.
- Misreading the sign of the gradient: negative means y falls as x rises.

Next, use the [revision notes](/resources/ocr-a-level-mathematics-bivariate-data-scatter-diagrams-correlation-and-revision-notes/) for quick recall and the [practice questions](/resources/ocr-a-level-mathematics-bivariate-data-scatter-diagrams-correlation-and-practice/) to test yourself.

## Official syllabus

OCR, *Advanced GCE in Mathematics A (H240)*, specification Version 3.1 (August 2026), for first assessment in 2018, references 2.02c to 2.02e and the large data set section.
