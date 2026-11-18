---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.4 Linear correlation of bivariate data and the regression line of y on x -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB Maths AA 4.4: describing correlation, Pearson's r, lines by eye, the y on x regression line, a and b in context and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.4** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): linear correlation, Pearson's r, lines of best fit and the regression line of
y on x. Explanations and worked examples are in the
[4.4 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-4/).

## Core recall

- **Bivariate data:** pairs (x, y) measured on the same individuals.
- **Scatter diagram:** independent variable on the horizontal axis.
- **Describe correlation:** direction (positive, negative, none) and strength (strong, weak), in context.
- **Pearson's r:** −1 ≤ r ≤ 1; measures **linear** association only; found with technology.
- **Line of best fit by eye:** follows the trend and passes through the mean point (x̄, ȳ).
- **Regression line of y on x:** y = ax + b from technology; passes through (x̄, ȳ); predicts y from x.

## Reading r

| r | Description |
|---|---|
| Close to 1 | Strong positive linear correlation |
| Positive, nearer 0 | Weak positive linear correlation |
| Close to 0 | Little or no linear correlation (a curve is still possible) |
| Negative, nearer 0 | Weak negative linear correlation |
| Close to −1 | Strong negative linear correlation |

r has no units, and swapping x and y does not change it.

## Equation of a line by eye

```
gradient m = (ȳ − y₁)/(x̄ − x₁)      using the mean point and one other point on your line
y − ȳ = m(x − x̄)
```

## Interpreting y = ax + b in context

- **a:** for every one-unit increase in x, y changes by a units on average (state units and direction).
- **b:** predicted y when x = 0; say whether that is meaningful or an extrapolation.

## Predictions

| Situation | Reliability |
|---|---|
| x inside the data range, r close to 1 or −1 | Reliable (interpolation) |
| x outside the data range | Unreliable (extrapolation) |
| Weak correlation | Unreliable whatever the x |
| Predicting x from y with the y on x line | Wrong method: use the x on y line (section 4.10) |

## Key terms

| Term | Meaning |
|---|---|
| Bivariate data | Data in pairs of two variables |
| Independent variable | The variable used to predict, plotted on the x-axis |
| Mean point | (x̄, ȳ); every line of best fit and both regression lines pass through it |
| Interpolation | Predicting within the range of the data |
| Extrapolation | Predicting outside the range of the data |
| Causation | One variable directly changing the other; not shown by correlation alone |

## Exam traps

- **"No correlation" for a weak value of r.** r = 0.3 is weak positive linear correlation.
- **Forgetting "linear".** r says nothing about curved patterns.
- **Causation from correlation.** Name a possible third variable if asked.
- **Line by eye missing the mean point.**
- **a and b without context or units.**
- **Rounded coefficients.** Use stored values for predictions.
- **Extrapolating without comment.**
- **Outliers.** One point can change r dramatically: look at the scatter diagram.

## Worked reminder

Eight used cars: age x (1 to 8 years) and price y (thousand dollars) give r ≈ −0.994 and
y ≈ −1.48x + 19.4 from a GDC.

- Description: very strong negative linear correlation between age and price.
- Gradient: price falls by about 1.48 thousand dollars per extra year of age, on average.
- Prediction at 5.5 years: about 11.3 thousand dollars (interpolation, reliable).
- Prediction at 15 years: about −2.75 (extrapolation, impossible): the trend cannot continue.

## Self-test

1. Describe the correlation for r = −0.92, r = 0.15 and r = 0.68.
2. A data set has r = 0.02 but the scatter diagram shows a clear U-shape. Explain.
3. A line of best fit passes through the mean point (6, 40) and (0, 52). Find its equation.
4. For y = 2.4x + 31, where x is years of experience and y is salary in thousands of dollars, interpret 2.4.
5. In question 4, interpret 31.
6. Why is it unreliable to use y = 2.4x + 31 for someone with 45 years of experience if the data covered 0
   to 20 years?
7. Towns with more libraries have more crimes (strong positive correlation). Does building libraries cause
   crime? Explain.
8. Which line should be used to predict y from a given x?
9. Through which point does every regression line pass?
10. What does r = −1 tell you about the points?
11. Why must r be quoted together with the scatter diagram?
12. A regression line is y = −0.416x + 9.03 for x from 1 to 7. Predict y when x = 3.5.

### Answers

1. Strong negative linear; very weak (almost no) positive linear; moderately strong positive linear.
2. There is a strong non-linear relationship; r measures only linear correlation.
3. Gradient (40 − 52)/6 = −2, so y = −2x + 52.
4. Each extra year of experience is associated with about 2.4 thousand dollars more salary, on average.
5. The predicted salary for someone with no experience is about 31 thousand dollars.
6. 45 is far outside the data range (extrapolation); the linear pattern may not continue.
7. No: both are likely to increase with a third variable, the town's population.
8. The regression line of y on x.
9. The mean point (x̄, ȳ).
10. All the points lie exactly on a straight line with negative gradient.
11. Outliers and curves can make r misleading; the diagram shows whether a linear model is sensible.
12. −0.416 × 3.5 + 9.03 ≈ 7.57.

## Frequently asked questions

**Do I need to calculate r by hand?**
No. The guide expects r and the regression line from technology; your job is to interpret them in context.

**Can I rearrange y = ax + b to predict x?**
No. Predicting x from y needs the regression line of x on y (section 4.10).

## Where to go next

Practise with the [4.4 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-4-practice/)
and then the [4.10 regression line of x on y revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-10-revision-notes/).
