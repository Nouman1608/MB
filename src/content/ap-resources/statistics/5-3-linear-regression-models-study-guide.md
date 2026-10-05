---
resourceId: "mb-ap-stats-5.3-study-guide"
title: "Linear Regression Models: Study Guide (Statistics 5.3)"
description: "Learn how a linear regression model ŷ = a + bx uses an explanatory variable to predict a response, how to calculate and report predictions in context, and why extrapolation is risky."
course: "statistics"
unit: 5
topics: ["5.3"]
resourceType: "study-guide"
prerequisites:
  - "Describing form, direction, strength and unusual features of a scatterplot (Topic 5.1)"
  - "Interpreting the correlation coefficient r (Topic 5.2)"
  - "Substituting a value into a linear equation"
prerequisiteResources: ["mb-ap-stats-5.2-study-guide"]
learningObjectives:
  - "Explain when a straight-line model is a sensible way to describe the relationship between two quantitative variables"
  - "Identify the explanatory variable, the response variable, the slope and the y-intercept in a model written as ŷ = a + bx"
  - "Calculate a predicted response from a linear regression model and report it in context with units"
  - "Decide whether a prediction is an interpolation or an extrapolation by comparing x with the interval of x-values in the data"
  - "Explain why a prediction becomes less reliable the further it is extrapolated"
skills: ["3"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the equation exactly as given. Keep the coefficients as stated and round only the final prediction, usually to 2 decimal places or to a sensible unit for the context."
related: ["mb-ap-stats-5.3-revision-notes", "mb-ap-stats-5.3-practice", "mb-ap-stats-5.3-checklist"]
next: "mb-ap-stats-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "If a scatterplot shows a linear form, a linear regression model ŷ = a + bx can approximate the relationship and predict y from x."
  - "ŷ (y-hat) is a predicted value of the response. a is the y-intercept and b is the slope."
  - "To predict, substitute the x-value into the equation and report ŷ in context, with units."
  - "Interpolation: x is inside the interval of x-values in the data. Extrapolation: x is outside it."
  - "Extrapolation is less reliable the further you go, because the linear pattern may not continue."
faqs:
  - question: "Where do the values of a and b come from?"
    answer: "In this topic they are given to you. In Topic 5.5 you will find them with technology as the least-squares regression line. The prediction method is the same either way."
  - question: "Is a prediction at the largest x-value in the data an extrapolation?"
    answer: "No. The interval of x-values includes its end points, so a prediction at the smallest or largest x-value is an interpolation."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From a scatterplot to a model

In Topic 5.1 you described a scatterplot. In Topic 5.2 you used r to measure how closely the points follow a straight line. Now you take the next step: you draw a line through the points and use it to **predict**.

A **linear regression model** is a straight-line equation that uses one variable to predict another.

- The **explanatory variable**, x, is the one you use to make the prediction. It goes on the horizontal axis.
- The **response variable**, y, is the one you want to predict. It goes on the vertical axis.

A line is only a sensible model when the **form** of the scatterplot looks **linear**. If the points follow a curve, a straight line will predict badly in places, however strong the association looks. Always look at the scatterplot first.

## The equation ŷ = a + bx

A linear regression model is written

**ŷ = a + bx**

| Symbol | Name | Meaning |
|---|---|---|
| ŷ | "y-hat" | the **predicted** value of the response variable |
| x | explanatory variable | the value you substitute in |
| a | y-intercept | the value of ŷ when x = 0 |
| b | slope | the change in ŷ for each increase of 1 in x |

The hat matters. **y** is a real, observed value. **ŷ** is what the model predicts. They are usually different, because real points do not lie exactly on the line. Writing "y = a + bx" for a model suggests that every point lies on the line, which is wrong.

In context, replace the letters with the names of the variables. For example: **predicted sales = −30.26 + 5.37 × (temperature)**. This makes clear what is being predicted and from what.

Where do a and b come from? In this topic they are given. In Topic 5.5 you will find them with technology, using the **least-squares** method, and you will learn to interpret the slope and intercept in context.

## The data set used in this guide

A fictional kiosk on a beach, Shellbay Snacks, recorded the **maximum temperature** (°C) and the **number of iced drinks sold** on 12 summer days.

| Max temperature (°C) | 14 | 16 | 17 | 19 | 20 | 22 | 23 | 25 | 26 | 28 | 29 | 31 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Iced drinks sold | 44 | 60 | 55 | 71 | 84 | 79 | 99 | 96 | 119 | 112 | 136 | 131 |

The scatterplot shows a strong, positive, linear association with no unusual points (r = 0.97). Temperature is the explanatory variable, because the owner wants to use the weather forecast to predict sales. Technology gives the model

**ŷ = −30.26 + 5.37x**

where x is the maximum temperature in °C and ŷ is the predicted number of iced drinks sold.

## Interpolation and extrapolation

The x-values in the data run from **14 °C to 31 °C**. This interval decides how far you can trust a prediction.

- **Interpolation:** predicting for an x-value **inside** the interval of x-values used to fit the line (here, from 14 to 31 °C, end points included). You have evidence that the linear pattern holds there.
- **Extrapolation:** predicting for an x-value **outside** that interval (here, below 14 °C or above 31 °C). You have no data there, so you are assuming the straight-line pattern continues.

Extrapolation is **less reliable**, and the further outside the interval you go, the less reliable it becomes. A small step outside may give a reasonable estimate. A large step can give nonsense, such as a negative number of drinks.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="kiosk-title kiosk-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="kiosk-title">Iced drinks sold against maximum temperature, with the regression line and the interpolation and extrapolation regions</title>
<desc id="kiosk-desc">The horizontal axis shows maximum temperature from 0 to 40 degrees Celsius. The vertical axis shows iced drinks sold from 0 to 200. Twelve dots rise from 44 drinks at 14 degrees to about 131 drinks at 31 degrees, in a tight linear band. A solid line, labelled y-hat equals negative 30.26 plus 5.37 x, runs through the dots from 14 to 31 degrees. A bracket above this stretch is labelled interpolation, the data interval. Dashed extensions of the line continue to the left down to 4 degrees and to the right up to 40 degrees; these stretches are labelled extrapolation. An open circle on the solid line at 24 degrees marks the prediction of 98.6 drinks. An open circle on the right dashed part at 38 degrees marks 173.8 drinks. An open circle on the left dashed part at 4 degrees lies just below the horizontal axis and is labelled minus 8.8 drinks, an impossible value.</desc>
<rect x="0" y="0" width="640" height="320" fill="#ffffff"/>
<line x1="70" y1="230" x2="600" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="70" y1="230" x2="70" y2="237"/><line x1="135" y1="230" x2="135" y2="237"/><line x1="200" y1="230" x2="200" y2="237"/><line x1="265" y1="230" x2="265" y2="237"/><line x1="330" y1="230" x2="330" y2="237"/><line x1="395" y1="230" x2="395" y2="237"/><line x1="460" y1="230" x2="460" y2="237"/><line x1="525" y1="230" x2="525" y2="237"/><line x1="590" y1="230" x2="590" y2="237"/>
<line x1="63" y1="230" x2="70" y2="230"/><line x1="63" y1="180" x2="70" y2="180"/><line x1="63" y1="130" x2="70" y2="130"/><line x1="63" y1="80" x2="70" y2="80"/><line x1="63" y1="30" x2="70" y2="30"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="70" y="268">0</text><text x="135" y="268">5</text><text x="200" y="268">10</text><text x="265" y="268">15</text><text x="330" y="268">20</text><text x="395" y="268">25</text><text x="460" y="268">30</text><text x="525" y="268">35</text><text x="590" y="268">40</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="58" y="235">0</text><text x="58" y="185">50</text><text x="58" y="135">100</text><text x="58" y="85">150</text><text x="58" y="35">200</text>
</g>
<text x="330" y="300" text-anchor="middle" font-size="14" fill="#1d2b44">Maximum temperature (°C)</text>
<text x="18" y="130" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 18 130)">Iced drinks sold</text>
<line x1="122" y1="238.8" x2="252" y2="185.1" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="252" y1="185.1" x2="473" y2="93.8" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="473" y1="93.8" x2="590" y2="45.5" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<g fill="#1d2b44">
<circle cx="252" cy="186" r="5"/><circle cx="278" cy="170" r="5"/><circle cx="291" cy="175" r="5"/><circle cx="317" cy="159" r="5"/><circle cx="330" cy="146" r="5"/><circle cx="356" cy="151" r="5"/><circle cx="369" cy="131" r="5"/><circle cx="395" cy="134" r="5"/><circle cx="408" cy="111" r="5"/><circle cx="434" cy="118" r="5"/><circle cx="447" cy="94" r="5"/><circle cx="473" cy="99" r="5"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="382" cy="131.4" r="6"/><circle cx="564" cy="56.2" r="6"/><circle cx="122" cy="238.8" r="6"/>
</g>
<path d="M252 40 V32 H473 V40" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="362" y="26" text-anchor="middle" font-size="12" fill="#1d2b44">interpolation: data from 14 to 31 °C</text>
<text x="545" y="105" text-anchor="middle" font-size="12" fill="#1d2b44">extrapolation</text>
<text x="190" y="252" text-anchor="middle" font-size="12" fill="#1d2b44">extrapolation</text>
<text x="390" y="155" text-anchor="start" font-size="12" fill="#1d2b44">24 °C: ŷ = 98.6</text>
<text x="480" y="40" text-anchor="start" font-size="12" fill="#1d2b44">38 °C: ŷ = 173.8</text>
<text x="78" y="200" text-anchor="start" font-size="12" fill="#1d2b44">4 °C: ŷ = −8.8</text>
<text x="78" y="214" text-anchor="start" font-size="12" fill="#1d2b44">(impossible)</text>
<text x="300" y="72" text-anchor="start" font-size="12" fill="#1d2b44">ŷ = −30.26 + 5.37x</text>
</svg>
<figcaption>Figure 1. Iced drinks sold against maximum temperature at the fictional Shellbay Snacks kiosk. Filled dots: observed days. Solid line: the model inside the data interval. Dashed line: the same equation outside the data (extrapolation). Open circles: the three predictions in Worked example 1.</figcaption>
</figure>

## Worked example 1: making and judging predictions

**Question.** Use the model ŷ = −30.26 + 5.37x for the Shellbay Snacks kiosk.
(a) Predict the number of iced drinks sold on a day with a maximum temperature of 24 °C.
(b) Predict sales for 38 °C and for 4 °C.
(c) For each prediction, say whether it is an interpolation or an extrapolation, and how far you would trust it.

**(a)**

1. Substitute x = 24: ŷ = −30.26 + 5.37(24).
2. Multiply first: 5.37 × 24 = 128.88.
3. Add: ŷ = −30.26 + 128.88 = **98.62**.
4. **In context:** the model predicts that the kiosk will sell about **99 iced drinks** on a day with a maximum temperature of 24 °C.

**(b)**

- x = 38: ŷ = −30.26 + 5.37(38) = −30.26 + 204.06 = **173.80**, about 174 drinks.
- x = 4: ŷ = −30.26 + 5.37(4) = −30.26 + 21.48 = **−8.78** drinks.

**(c)**

| Temperature | ŷ | Inside 14 to 31 °C? | Type | Trust? |
|---|---|---|---|---|
| 24 °C | 98.62 | yes | interpolation | reasonable: the data show a linear pattern here |
| 38 °C | 173.80 | no, 7 °C above | extrapolation | doubtful: we have no days this hot. Sales might level off (the kiosk could run out of ice, or people might stay away from the beach). |
| 4 °C | −8.78 | no, 10 °C below | extrapolation | not believable: a negative number of drinks is impossible |

**Check.** The answer to (a) should lie between the values seen at nearby temperatures. At 23 °C the kiosk sold 99 drinks and at 25 °C it sold 96, so a prediction of about 99 at 24 °C is sensible. Notice also that the prediction for (a) is a **predicted** value. On a real 24 °C day the kiosk will probably sell a few more or a few fewer.

## Reading the slope and intercept (a first look)

You can read two things straight from the equation:

- **Slope, b = 5.37.** For each extra 1 °C, the predicted number of drinks goes up by 5.37. You can check this: ŷ at 25 °C minus ŷ at 24 °C is 5.37.
- **y-intercept, a = −30.26.** This is ŷ when x = 0 °C. Here x = 0 is far outside the data, so a = −30.26 is an extrapolation and has no sensible meaning: you cannot sell −30 drinks.

You will interpret the slope and intercept formally, in context, in Topic 5.5.

## Worked example 2: a growing sunflower

**Question.** A student measured the height of a sunflower of a fictional variety on eight days, from **day 12 to day 40** after sowing. The scatterplot of height against days since sowing is strongly linear (r = 0.99). Technology gives

**ŷ = −22.12 + 3.59x**

where x is the number of days since sowing and ŷ is the predicted height in centimetres.

(a) Predict the height on day 30.
(b) Predict the height on day 44 and on day 365. Compare how reliable the two predictions are.
(c) The model predicts a height of −4.17 cm on day 5. What does this tell you?

**(a)** ŷ = −22.12 + 3.59(30) = −22.12 + 107.70 = **85.58 cm**. Day 30 lies inside the interval 12 to 40, so this is an **interpolation**. The model predicts the sunflower is about 85.6 cm tall 30 days after sowing.

**(b)**

1. Day 44: ŷ = −22.12 + 3.59(44) = −22.12 + 157.96 = **135.84 cm**.
2. Day 365: ŷ = −22.12 + 3.59(365) = −22.12 + 1,310.35 = **1,288.23 cm**, about **12.9 metres**.
3. Both are **extrapolations**, because both are after day 40.
4. Day 44 is only 4 days beyond the data. It is less reliable than an interpolation, but the plant may well still be growing at a similar rate, so the estimate could be reasonable.
5. Day 365 is 325 days beyond the data. The model assumes the plant grows by about 3.59 cm every day for a whole year. Real plants stop growing (and sunflowers die after one season), so 12.9 metres is not believable. **The further you extrapolate, the less reliable the prediction.**

**(c)** Day 5 is before the first measurement (day 12), so this is also an extrapolation. A negative height is impossible. The straight-line pattern seen between days 12 and 40 does not describe the early days, when the seedling was just emerging. This shows that extrapolation can fail in both directions.

**Check.** Over 10 days the model predicts growth of 10 × 3.59 = 35.9 cm, which fits the data: the measured heights rose from 20 cm on day 12 to 125 cm on day 40.

## A checklist for any prediction

1. **Is a line appropriate?** The scatterplot should show a linear form.
2. **Which variable is which?** Substitute the **explanatory** variable to predict the **response**.
3. **Substitute and calculate.** Multiply b by x, then add a. Keep the coefficients as given; round only at the end.
4. **Report in context.** Say "predicted", name the variable and give the units.
5. **Interpolation or extrapolation?** Compare x with the smallest and largest x-values in the data, and comment on reliability.

## Common misconceptions

- **Writing y instead of ŷ.** "y = −30.26 + 5.37x" claims every point is on the line. The model gives **predicted** values, ŷ.
- **"The prediction is what will happen."** ŷ is an estimate of a typical value for that x. Individual days vary around it.
- **"Extrapolation is always wrong" or "always fine".** Extrapolation is not banned, but it is less reliable, and more so the further you go. A step just outside the data is safer than a huge one.
- **"A prediction at the largest x-value is an extrapolation."** The interval includes its end points, so it is an interpolation.
- **Substituting the wrong variable.** The model predicts the response from the explanatory variable. Do not put a y-value into the place of x.
- **Mixing up a and b.** In ŷ = a + bx, b multiplies x. In ŷ = −30.26 + 5.37x, the slope is 5.37, not −30.26.
- **Using a line for a curved pattern.** A high r does not prove the form is linear. Check the scatterplot (and, in Topic 5.4, the residual plot).
- **Rounding too early.** Rounding 5.37 to 5 before predicting at 24 °C gives 89.74 instead of 98.62, an error of almost 9 drinks.
- **No context.** "ŷ = 98.62" alone is incomplete. Say "the model predicts about 99 iced drinks on a 24 °C day".

## Where this leads

A prediction ŷ is rarely exactly right. The difference between what really happened and what the model predicted is called a **residual**, and residuals help you judge whether a line is a good model. That is [Topic 5.4: Residuals](/advanced-course-resources/statistics/5-4-residuals-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/5-3-linear-regression-models-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/5-3-linear-regression-models-revision-notes/) and the [checklist](/advanced-course-resources/statistics/5-3-linear-regression-models-checklist/) to consolidate.
