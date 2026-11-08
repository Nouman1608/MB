---
title: "OCR A Level Mathematics A: Bivariate data: scatter diagrams, correlation and regression (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Correlation & Regression Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on scatter diagrams, regression lines, correlation and causation for OCR A Level Mathematics A (H240), with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense the bivariate data strand of OCR A Level Mathematics A (H240), Version 3.1 (August 2026), for first assessment in 2018: references 2.02c, 2.02d and 2.02e, all Stage 1 content. For the full explanations and worked examples, see the [study guide](/resources/ocr-a-level-mathematics-bivariate-data-scatter-diagrams-correlation-and/), then test yourself with the [practice questions](/resources/ocr-a-level-mathematics-bivariate-data-scatter-diagrams-correlation-and-practice/). Other links: [course hub](/boards/ocr/a-level/mathematics/), [printable checklist](/checklists/ocr/a-level/mathematics/), [OCR Statistics guide](/resources/ocr-a-level-mathematics-statistics/) and the [free diagnostics](/diagnostics/).

## What is in scope

| Ref | Skill |
|---|---|
| 2.02c | Read scatter diagrams and regression lines, and spot separate groups of points. You may be asked to add to a diagram, not draw a whole one. Calculating regression equations is excluded |
| 2.02d | Informal interpretation of correlation |
| 2.02e | Correlation does not imply causation |

Links to 2.05f and 2.05g (Pearson's coefficient, A Level only) are covered in the hypothesis testing unit.

## Describing a scatter diagram

Use this four-part checklist and write in context.

| Part | Words to use |
|---|---|
| Direction | Positive, negative, none |
| Strength | Strong, weak (how tightly points cluster) |
| Shape | Linear, or curved and levelling off |
| Unusual features | Points far from the pattern, separate groups |

Model sentence: "There is strong negative correlation between depth and temperature: deeper sites tend to be colder."

## Key definitions

| Term | Meaning |
|---|---|
| Bivariate data | Two variables recorded for each item |
| Explanatory variable | Plotted on x. The variable thought to influence the other |
| Response variable | Plotted on y. The variable you predict |
| Regression line | A straight line used to predict y from x |
| Interpolation | Predicting for x inside the range of the data |
| Extrapolation | Predicting for x outside the range of the data |
| Confounding variable | A third variable that influences both of the others |

## Method boxes

### Interpreting a regression line y = a + bx

```
1. Gradient b: when x goes up by 1, y is predicted to change
   by b units (rise if b > 0, fall if b < 0).
2. Intercept a: predicted y when x = 0. Meaningful only if x = 0
   is within or near the data. Otherwise say it has no real meaning.
3. Prediction: substitute x. Then state whether x is inside the
   data range (interpolation, fairly reliable) or outside it
   (extrapolation, unreliable).
4. Check the answer is possible in context (no negative counts).
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--07-extrapolation.webp" width="900" height="818" alt="A graph of the regression line y = 78 minus 2.4x for resting heart rate against weekly training hours. The data covered 2 to 10 hours, shown as a shaded band; the line is solid there and dashed outside. At 5 hours the prediction is 66 beats per minute, which is interpolation and reasonably reliable. At 30 hours the line gives 6 beats per minute, which is not credible, so predicting outside the data range is unreliable. The intercept 78 at x = 0 also lies outside the data." loading="lazy">
  <figcaption>Predictions are reliable inside the range of the data and unreliable outside it.</figcaption>
</figure>


### Adding a line to a diagram

```
1. Choose two x values inside the plotted range.
2. Substitute to get two y values. Plot both points.
3. Join with a ruler and extend across the data range only.
4. If the means are given, plot (x̄, ȳ) as a check: the line of
   y on x passes through it.
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--02-variance-squares.webp" width="900" height="1058" alt="Eight data values 2, 4, 4, 4, 5, 5, 7 and 9 are shown on a number line with their distances from the mean 5: minus 3, minus 1, minus 1, minus 1, 0, 0, plus 2 and plus 4. A square is drawn on each distance, with areas 9, 1, 1, 1, 0, 0, 4 and 16, which total 32. The mean of these areas is 32 divided by 8, which is 4: that is the variance. Its square root, the side of a square of area 4, is the standard deviation 2. The shortcut sum of x squared over n minus the mean squared gives 232 over 8 minus 25, which is also 4." loading="lazy">
  <figcaption>Variance is the mean of the squared distances from the mean; the standard deviation is the side of that mean square.</figcaption>
</figure>


### Dealing with distinct sections

```
1. Notice two or more clusters or bands.
2. Say the data appear to come from different sections of the
   population.
3. Say one line through all the points would fit neither group well.
4. Suggest a separate line for each group, or investigate what
   separates them.
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--04-sampling-methods.webp" width="900" height="1250" alt="Three grids of the same 60 numbered people, in 6 rows of 10, with three groups shown by shape: group A circles (24), group B squares (20) and group C diamonds (16). Systematic sampling picks every 4th person from a random start of 3, giving 15 people (3, 7, 11 up to 59); the risk is a repeating pattern in the list. Stratified sampling picks 6, 5 and 4 people at random from groups A, B and C, in proportion to group size, again 15 people. Cluster sampling picks 2 of the 6 rows at random and asks everyone in them, 20 people. A note says quota sampling is like stratified sampling but the people asked are not chosen at random." loading="lazy">
  <figcaption>How each method picks its sample; quota is stratified without random selection.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--06-two-groups-one-line.webp" width="900" height="910" alt="A scatter diagram of journey time in minutes against distance in kilometres for 6 cyclists (circles) and 6 van drivers (squares). Both groups rise left to right but the cyclists form a steeper band. A single dashed line fitted to all 12 points predicts about 17 minutes for 4 km, but the cyclist took 21.5 minutes and the van driver 14 minutes, so the line matches neither. The better approach is a separate line for each type of courier." loading="lazy">
  <figcaption>One line through two distinct groups matches neither, so fit and use a separate line for each group.</figcaption>
</figure>


## Worked reminder

The line y = 78 − 2.4x predicts resting heart rate (y beats per minute) from weekly training hours (x), for data between 2 and 10 hours.

- At 5 hours: 78 − 12 = 66. Interpolation.
- At 30 hours: 78 − 72 = 6. Extrapolation, and not credible.
- At the mean training time of 6 hours: 78 − 14.4 = 63.6, the mean heart rate.

## Second worked reminder: two sections

Cycle couriers (distance 1 to 5 km) and van drivers (distance 4 to 14 km) are plotted together for journey time against distance. Both groups rise, so the overall correlation is positive. The cycle points sit higher and climb faster. One line through all of them would suggest about 17 minutes for 4 km, while the cyclist took 21.5 and the van driver 14. Say that the line suits neither group and that each group needs its own line.

## Phrases that earn credit

| Situation | Phrase |
|---|---|
| Describing | "Strong positive correlation between [x in context] and [y in context]" |
| Gradient | "Each extra [unit of x] is associated with about [b] more/fewer [units of y]" |
| Interpolation | "[x] is within the range of the data, so the estimate is reasonably reliable" |
| Extrapolation | "[x] is outside the range of the data, so the estimate may be unreliable" |
| Causation | "This shows an association, not that one causes the other. [Third variable] may affect both" |
| Sections | "The data appear to come from different groups, so one line is not appropriate" |

## Must-know distinctions

| Pair | Difference |
|---|---|
| Correlation and causation | Correlation is an association between variables. Causation needs a mechanism or a controlled study |
| Interpolation and extrapolation | Inside the data range or outside it |
| Strong and linear | Points can follow a curve closely, so strong correlation does not make a straight line suitable |
| Gradient and intercept | Gradient is how much y changes when x rises by 1. Intercept is y at x = 0 |
| y on x and x on y | A y-on-x line predicts y. Do not rearrange it to estimate x |

## Four explanations for a correlation

1. x causes y.
2. y causes x.
3. A third variable causes both.
4. Chance, particularly in a small sample.

Good wording: "This shows an association, not that one causes the other. A possible third factor is ..., which affects both."

## Large data set reminders

- Use a spreadsheet scatter chart for two numerical variables.
- Filter or colour by a category to look for distinct sections.
- Note the range of each variable before predicting.
- Questions may give selected data or diagrams from the data set, so know the variables and units.

## Quick self-test

1. A scatter diagram shows y falling steadily as x rises, with points tightly packed along a line. Describe the correlation.
2. A regression line is y = 4.2 + 0.75x with x from 10 to 40. Interpret the gradient 0.75 if y is a height in cm and x is age in days.
3. For the same line, find the prediction at x = 24 and say whether it is interpolation or extrapolation.
4. For the same line, find the prediction at x = 90 and comment.
5. Why might the intercept 4.2 be unreliable?
6. A scatter diagram has two separate bands. What should you say about a single line of best fit?
7. Towns with more fire stations have higher numbers of reported fires. Suggest a confounding variable.
8. A line of y on x has x̄ = 20 and ȳ = 50. Does the point (20, 50) lie on it?
9. List the four possible explanations for a correlation.
10. A newspaper writes "this proves that X causes Y" about a correlation. What is wrong?
11. Points follow a clear curve that rises then levels off, and a straight line has been drawn. What would you say?
12. For y = 100 − 3x, is a prediction at x = 5 reliable if the data run from x = 12 to x = 30?

### Answers

1. Strong negative correlation (state the variables in context).
2. Each extra day of age is associated with about 0.75 cm more height on average.
3. y = 4.2 + 0.75 × 24 = 4.2 + 18 = 22.2. Interpolation, because 24 is between 10 and 40.
4. y = 4.2 + 0.75 × 90 = 4.2 + 67.5 = 71.7. Extrapolation, so unreliable, since growth may not stay linear.
5. It is the prediction at x = 0, outside the data range from 10 to 40, so it is extrapolation.
6. The data appear to be from distinct sections of the population, so one line fits neither group well. Use a line for each group.
7. Population (or town size), which increases both the number of stations and the number of fires.
8. Yes. The y-on-x regression line passes through (x̄, ȳ).
9. x causes y, y causes x, a third variable causes both, or coincidence.
10. Correlation shows association only. A third variable or coincidence could explain it, so causation is not proved.
11. A straight line is not appropriate: it fits the ends badly and extrapolating it would overestimate where the data level off. A curve is a better model.
12. No. x = 5 is below 12, so it is extrapolation (prediction 85, but not reliable).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--05-sample-variability.webp" width="900" height="955" alt="Three dot plots of one-way commuting times in minutes. Analyst A's random sample of 8 (18, 22, 25, 27, 30, 35, 38, 41) has mean 29.5. Analyst B's random sample of 8 (15, 17, 19, 20, 21, 24, 26, 33) has mean 21.9. Together the 16 values have mean 25.7. Triangles mark each mean. Both samples came from a fair method, so the 7.6 minute gap is sampling variability; combining the samples, or using larger ones, reduces it." loading="lazy">
  <figcaption>Two fair random samples from the same firm give different means, so samples are only estimates.</figcaption>
</figure>


## Where marks are usually lost

- Describing correlation without naming the variables.
- Writing "positive correlation" when the fall in y shows it is negative.
- Calling a prediction reliable without checking the data range.
- Giving the intercept a meaning in context when x = 0 is outside the data.
- Failing to give a number and a unit in a gradient interpretation.
- Saying "causes" when the data only show association.
- Not offering a specific alternative explanation in a causation comment.
- Using one line for two groups and not noticing the separate sections.
- Leaving out the scale or units when adding points to a diagram.

## Frequently asked questions

**What is the difference between the explanatory and response variable?**
The explanatory variable is plotted on the x-axis and is thought to influence the other. The response variable is plotted on the y-axis and is the one you predict.

**What is a confounding variable?**
A confounding variable is a third variable that influences both of the variables being studied, which can create a correlation without one causing the other.

**Does strong correlation mean a straight line is a good model?**
No. Points can follow a curve closely, so strong correlation does not make a straight line suitable. Check the shape of the pattern as well as its strength.

**Do you need to calculate regression lines in OCR A Level Mathematics A (H240)?**
Under specification reference 2.02c you read and interpret scatter diagrams and regression lines, and you may be asked to add to a diagram, but not draw a whole one; these notes treat calculating regression coefficients as outside this content.

**Can you use a y-on-x regression line to estimate x?**
No. A y-on-x line is for predicting y from x, so do not rearrange it to estimate x from a given y.

## Official syllabus

OCR, *Advanced GCE in Mathematics A (H240)*, specification Version 3.1 (August 2026), for first assessment in 2018, references 2.02c to 2.02e and the large data set section.
