---
resourceId: "mb-ap-stats-5.5-study-guide"
title: "Least-Squares Regression: Study Guide (Statistics 5.5)"
description: "Learn how the least-squares regression line is chosen, find its slope, intercept, r and r² with technology, and interpret each one in context, including when the intercept makes no sense."
course: "statistics"
unit: 5
topics: ["5.5"]
resourceType: "study-guide"
prerequisites:
  - "Predicting with a linear regression model ŷ = a + bx, and extrapolation (Topic 5.3)"
  - "Residuals: observed y − predicted y (Topic 5.4)"
  - "The correlation coefficient r (Topic 5.2)"
prerequisiteResources: ["mb-ap-stats-5.4-study-guide"]
learningObjectives:
  - "Explain that the least-squares regression line is the line that makes the sum of the squared residuals as small as possible"
  - "Use technology to find the slope, y-intercept, correlation coefficient and coefficient of determination for a data set"
  - "Use the fact that the least-squares line passes through the point (x̄, ȳ)"
  - "Interpret the slope and the y-intercept in context, and recognise when the intercept has no sensible meaning"
  - "Interpret r² as the proportion of the variation in the response variable explained by the linear relationship"
  - "Explain that the slope and intercept are statistics that would change with a different sample"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the linear regression function (form a + bx) with diagnostics on to get a, b, r and r². Enter the explanatory variable as x. Keep full precision for predictions; round reported values to 2 or 3 decimal places."
related: ["mb-ap-stats-5.5-revision-notes", "mb-ap-stats-5.5-practice", "mb-ap-stats-5.5-checklist"]
next: "mb-ap-stats-5.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The least-squares regression line (LSRL) is the line ŷ = a + bx with the smallest possible sum of squared residuals."
  - "In this course a, b, r and r² are found with technology. The line always passes through (x̄, ȳ)."
  - "Slope: for each 1-unit increase in x, the predicted y changes by b units. Always say 'predicted' and use context and units."
  - "Intercept: the predicted y when x = 0. It may have no sensible meaning if x = 0 is far outside the data or the prediction is impossible."
  - "r² is the proportion of the variation in y that is explained by the linear relationship with x."
faqs:
  - question: "Do I need to calculate the slope and intercept by hand?"
    answer: "No. The course expects you to find a, b, r and r² with technology and to interpret them. A formula linking b to r is shown in this guide as background only."
  - question: "What is the difference between r and r²?"
    answer: "r measures the direction and strength of the linear association and has a sign. r² is always between 0 and 1 and tells you what fraction of the variation in y the line explains. It has no sign, so it cannot tell you the direction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Which line is the best line?

In Topic 5.3 you used a line ŷ = a + bx to predict a response y from an explanatory variable x. In Topic 5.4 you measured how far each point is from the line with a **residual**:

**residual = observed y − predicted y = y − ŷ**

Many lines could be drawn through a scatterplot. Statisticians need one agreed rule for the "best" line, so that everyone using the same data gets the same answer. The rule used in this course is **least squares**:

**The least-squares regression line (LSRL) is the line that makes the sum of the squared residuals, Σ(y − ŷ)², as small as possible.**

Why square the residuals?

- Some residuals are positive and some are negative. If you simply added them, they could cancel out and a bad line could look good.
- Squaring makes every term positive.
- Squaring also gives large misses more weight than small ones, so the line is pulled to avoid big errors.

There is exactly one line that gives the smallest sum of squared residuals for a given data set. You find it with technology.

## Seeing least squares on a small data set

A fictional school charity car wash recorded the number of volunteers working (x) and the number of cars washed in one hour (y) on five occasions.

| Volunteers, x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Cars washed, y | 3 | 4 | 8 | 9 | 11 |

Technology gives the least-squares regression line:

**predicted cars washed = 0.7 + 2.1 × (volunteers)**

The table compares it with a line a student drew by eye through the first and last points, ŷ = 1 + 2x.

| x | y | LSRL ŷ | LSRL residual | Eye-line ŷ | Eye-line residual |
|---|---|---|---|---|---|
| 1 | 3 | 2.8 | 0.2 | 3 | 0 |
| 2 | 4 | 4.9 | −0.9 | 5 | −1 |
| 3 | 8 | 7.0 | 1.0 | 7 | 1 |
| 4 | 9 | 9.1 | −0.1 | 9 | 0 |
| 5 | 11 | 11.2 | −0.2 | 11 | 0 |
| | | | **Σ(residual)² = 1.90** | | **Σ(residual)² = 2.00** |

The eye-line hits three points exactly, yet its sum of squared residuals (2.00) is larger than the LSRL's (1.90). No other line can beat 1.90 for these data. That is what "least squares" means.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="lsrl-title lsrl-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lsrl-title">Scatterplot of cars washed against volunteers with the least-squares line and residuals</title>
<desc id="lsrl-desc">The horizontal axis shows the number of volunteers from 0 to 6. The vertical axis shows cars washed in one hour from 0 to 12. Five dots are at (1, 3), (2, 4), (3, 8), (4, 9) and (5, 11). A solid straight line, the least-squares line y-hat equals 0.7 plus 2.1 x, rises through the dots. Short vertical dashed segments join each dot to the line; these are the residuals: 0.2, negative 0.9, 1.0, negative 0.1 and negative 0.2. An open square on the line at (3, 7) marks the point x-bar, y-bar, which the line passes through.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="70" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="70" y1="250" x2="70" y2="257"/><line x1="156.7" y1="250" x2="156.7" y2="257"/><line x1="243.3" y1="250" x2="243.3" y2="257"/><line x1="330" y1="250" x2="330" y2="257"/><line x1="416.7" y1="250" x2="416.7" y2="257"/><line x1="503.3" y1="250" x2="503.3" y2="257"/><line x1="590" y1="250" x2="590" y2="257"/>
<line x1="63" y1="250" x2="70" y2="250"/><line x1="63" y1="213.3" x2="70" y2="213.3"/><line x1="63" y1="176.7" x2="70" y2="176.7"/><line x1="63" y1="140" x2="70" y2="140"/><line x1="63" y1="103.3" x2="70" y2="103.3"/><line x1="63" y1="66.7" x2="70" y2="66.7"/><line x1="63" y1="30" x2="70" y2="30"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="70" y="272">0</text><text x="156.7" y="272">1</text><text x="243.3" y="272">2</text><text x="330" y="272">3</text><text x="416.7" y="272">4</text><text x="503.3" y="272">5</text><text x="590" y="272">6</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="58" y="255">0</text><text x="58" y="218">2</text><text x="58" y="181">4</text><text x="58" y="145">6</text><text x="58" y="108">8</text><text x="58" y="71">10</text><text x="58" y="35">12</text>
</g>
<text x="330" y="298" text-anchor="middle" font-size="14" fill="#1d2b44">Volunteers</text>
<text x="18" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 18 140)">Cars washed in one hour</text>
<line x1="113.3" y1="217.9" x2="529.3" y2="33.1" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3">
<line x1="156.7" y1="195" x2="156.7" y2="198.7"/><line x1="243.3" y1="176.7" x2="243.3" y2="160.2"/><line x1="330" y1="103.3" x2="330" y2="121.7"/><line x1="416.7" y1="85" x2="416.7" y2="83.2"/><line x1="503.3" y1="48.3" x2="503.3" y2="44.7"/>
</g>
<g fill="#1d2b44">
<circle cx="156.7" cy="195" r="5"/><circle cx="243.3" cy="176.7" r="5"/><circle cx="330" cy="103.3" r="5"/><circle cx="416.7" cy="85" r="5"/><circle cx="503.3" cy="48.3" r="5"/>
</g>
<rect x="324" y="115.7" width="12" height="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="252" y="182">residual −0.9</text>
<text x="322" y="98" text-anchor="end">residual 1.0</text>
<text x="344" y="140">(x̄, ȳ) = (3, 7)</text>
<text x="380" y="215">solid line: ŷ = 0.7 + 2.1x</text>
<text x="380" y="232">dashed segments: residuals</text>
</g>
</svg>
<figcaption>Figure 1. Fictional car-wash data. The least-squares line (solid) makes the sum of the squared lengths of the dashed residual segments as small as possible. The open square marks (x̄, ȳ) = (3, 7), which lies on the line. Shapes and labels, not colour, carry the meaning.</figcaption>
</figure>

## Facts about the least-squares line

| Fact | What it means for you |
|---|---|
| Found with technology | Enter x and y as two lists and run linear regression (form a + bx). Read off a, b, r and r². |
| Passes through (x̄, ȳ) | Put x = x̄ into the equation and you get ȳ. Car wash: 0.7 + 2.1(3) = 7 = ȳ. |
| Residuals add to 0 | Positive and negative residuals balance: 0.2 − 0.9 + 1.0 − 0.1 − 0.2 = 0. |
| Order of variables matters | The line for predicting y from x is not the same as the line for predicting x from y. Put the explanatory variable in the x list. |
| a and b are statistics | They come from one sample. Another sample from the same population would give a slightly different slope and intercept. |

The point (x̄, ȳ) fact is useful in calculations. If you know the slope, x̄ and ȳ, you can find the intercept: a = ȳ − b·x̄.

## Background: how the slope is linked to r

You will not need to calculate b by hand, but this link explains several facts. For the least-squares line,

**b = r × (s_y / s_x)** and **a = ȳ − b·x̄**

where s_x and s_y are the standard deviations of x and y. For the car wash, r = 0.9791, s_y = 3.3912 and s_x = 1.5811, so b = 0.9791 × 3.3912 ÷ 1.5811 = 2.1, as technology gave. Two consequences:

- Standard deviations are positive, so **b and r always have the same sign**.
- r has no units, but b does: units of y per unit of x.

## Interpreting the slope and the y-intercept

**Slope, b.** The slope is the **predicted** change in y for each **one-unit increase** in x. A good template:

> For each additional [1 unit of x], the predicted [y variable] increases (or decreases) by [|b| units of y].

Car wash: for each additional volunteer, the predicted number of cars washed in one hour increases by 2.1 cars.

Use the word "predicted" (or "on average"). The line does not say that every extra volunteer adds exactly 2.1 cars.

**y-intercept, a.** The intercept is the **predicted** value of y when x = 0.

> When [x variable] is 0 [units], the predicted [y variable] is [a units of y].

Car wash: with 0 volunteers, the predicted number of cars washed is 0.7. This has no sensible meaning: with nobody working, no cars are washed. Also, x = 0 is outside the data (1 to 5 volunteers), so using it is extrapolation.

The intercept may have **no reasonable interpretation** when:

- **x = 0 is outside the interval of x-values** in the data, so the prediction is an extrapolation; or
- **the predicted value is impossible**, such as a negative height, mass or price.

In those cases, say so. The intercept is still needed to position the line; it just should not be read as a real prediction.

## The coefficient of determination, r²

Technology also gives **r²**, the square of the correlation coefficient. It is called the **coefficient of determination**.

**r² is the proportion of the variation in the response variable that is explained by the linear relationship with the explanatory variable.**

Template:

> About [r² as a percentage] of the variation in [y variable] is explained by the linear relationship with [x variable].

Car wash: r = 0.9791, so r² = 0.9587. About 95.9% of the variation in the number of cars washed is explained by the linear relationship with the number of volunteers. The other 4.1% is left over, shown by the residuals.

Facts about r²:

- 0 ≤ r² ≤ 1. It is usually reported as a percentage.
- r² has **no sign**. To get r from r², take the square root and give it **the sign of the slope**.
- A high r² does not prove that a linear model is right. Check the residual plot (Topic 5.4).

## Worked example 1: e-scooter batteries

**Question.** A fictional scooter-hire firm tested 10 scooters. For each one it recorded the number of full charge cycles the battery had done (in hundreds) and the range on a full charge (km).

| Charge cycles (hundreds), x | 1.0 | 1.8 | 2.5 | 3.2 | 4.0 | 4.6 | 5.5 | 6.1 | 7.0 | 7.8 |
|---|---|---|---|---|---|---|---|---|---|---|
| Range (km), y | 42 | 41 | 38 | 39 | 36 | 35 | 33 | 33 | 30 | 28 |

The scatterplot is linear and the residual plot shows no pattern.

(a) Use technology to find the least-squares regression line, r and r².
(b) Interpret the slope and the y-intercept in context.
(c) Interpret r² in context.
(d) Predict the range of a scooter that has done 500 charge cycles.

**(a)** Enter charge cycles as x and range as y. Technology gives a = 44.2492… and b = −2.0113…, so

**predicted range = 44.25 − 2.01 × (charge cycles, in hundreds)**

with r = −0.9880 ≈ −0.99 and r² = 0.9761 ≈ 0.976.

**Check.** x̄ = 4.35 and ȳ = 35.5. Then 44.2492 − 2.0113(4.35) = 35.5 = ȳ, so the line passes through (x̄, ȳ). The slope and r are both negative, as they must be.

**(b)** **Slope:** for each additional 100 charge cycles, the predicted range of a scooter decreases by about 2.01 km.

**Intercept:** a scooter whose battery has done 0 charge cycles has a predicted range of about 44.25 km. This is a reasonable meaning (a brand-new battery), but x = 0 is a little below the smallest x-value in the data (100 cycles), so it is a mild extrapolation.

**(c)** About 97.6% of the variation in the range of these scooters is explained by the linear relationship with the number of charge cycles.

**(d)** 500 cycles is x = 5.0. ŷ = 44.2492 − 2.0113(5.0) = 34.19 km. This is interpolation: 5.0 lies inside 1.0 to 7.8. Prediction: about **34.2 km**.

**Check.** Do not use the line far outside the data. At 3,000 cycles (x = 30) it predicts 44.2492 − 2.0113(30) = −16.09 km, which is impossible. The linear trend cannot continue that far.

## Worked example 2: an intercept with no meaning

**Question.** A fictional greenhouse measured tomato plants between 20 and 60 days after planting. Technology output for predicting plant height (cm) from days since planting is shown.

| Predictor | Coefficient |
|---|---|
| Constant | −14.6 |
| Days | 1.85 |

R-sq = 89.0%. The mean number of days for the plants measured was x̄ = 40.

(a) Write the equation of the least-squares regression line.
(b) Interpret the slope. Explain why the y-intercept should not be interpreted.
(c) Find the mean height ȳ of the plants in the sample.
(d) Find and interpret the correlation coefficient.

**(a)** In technology output, the "Constant" row is the intercept a and the row named after the explanatory variable is the slope b:

**predicted height = −14.6 + 1.85 × (days since planting)**

**(b)** **Slope:** for each additional day since planting, the predicted height of a tomato plant increases by 1.85 cm.

**Intercept:** it says a plant has a predicted height of −14.6 cm on the day it is planted. This makes no sense for two reasons. A height cannot be negative, and x = 0 days is far below the smallest x-value used (20 days), so it is an extrapolation. Early growth is probably not linear.

**(c)** The LSRL passes through (x̄, ȳ). So ȳ = −14.6 + 1.85(40) = **59.4 cm**.

**(d)** r² = 0.890. The slope is positive, so r = +√0.890 = 0.9434 ≈ **0.94**. There is a strong, positive, linear association between days since planting and plant height for these plants.

**Check.** A prediction for day 120 (207.4 cm) would be far outside the 20 to 60 days in the data. Treat it with great caution.

## Common misconceptions

- **"The LSRL goes through as many points as possible."** It minimises the **sum of the squared residuals**. It may pass through no data points at all (the car-wash line passes through none).
- **"The slope tells me exactly what will happen."** It gives a **predicted** change. Say "the predicted range decreases by 2.01 km", not "the range decreases by 2.01 km".
- **"Every intercept must be interpreted as a real value."** If x = 0 is outside the data or the prediction is impossible, say that the intercept has no sensible meaning in context.
- **"r² = 0.89 means 89% of the points lie on the line"** or **"the line is correct 89% of the time"**. r² is about **variation in y explained** by the linear relationship.
- **"r = √r², always positive."** r takes the sign of the slope. With r² = 0.64 and a negative slope, r = −0.8.
- **"Swapping x and y gives the same line."** r stays the same, but the least-squares line changes. Put the explanatory variable as x.
- **"A big slope means a strong association."** The slope depends on units. Strength is measured by r (and r²), not by b.
- **"A strong LSRL shows that x causes y."** Regression describes an association. Cause needs a well-designed experiment.
- **"These a and b are the true values for everyone."** They are sample statistics. A new sample would give slightly different values.

## Where this leads

This is the last topic in the course. It brings together all of Unit 5: describe the scatterplot (Topic 5.1), measure the linear association with r (Topic 5.2), fit and use a line (Topic 5.3), and check it with residuals (Topic 5.4, see the [residuals study guide](/advanced-course-resources/statistics/5-4-residuals-study-guide/)). A full regression answer often uses all of these steps. Try the [practice questions](/advanced-course-resources/statistics/5-5-least-squares-regression-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/5-5-least-squares-regression-revision-notes/) and the [checklist](/advanced-course-resources/statistics/5-5-least-squares-regression-checklist/) to consolidate, or return to the [course roadmap](/advanced-course-resources/statistics/#roadmap) to review earlier units.
