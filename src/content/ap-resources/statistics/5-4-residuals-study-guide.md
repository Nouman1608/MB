---
resourceId: "mb-ap-stats-5.4-study-guide"
title: "Residuals: Study Guide (Statistics 5.4)"
description: "Learn to calculate a residual as observed minus predicted, interpret its sign as under- or overprediction in context, and use a residual plot to judge whether a linear model is appropriate."
course: "statistics"
unit: 5
topics: ["5.4"]
resourceType: "study-guide"
prerequisites:
  - "Making predictions with a linear regression model ŷ = a + bx (Topic 5.3)"
  - "Describing the form of a scatterplot (Topic 5.1)"
  - "Interpreting the correlation coefficient r (Topic 5.2)"
prerequisiteResources: ["mb-ap-stats-5.3-study-guide"]
learningObjectives:
  - "Calculate a residual as the observed value minus the predicted value"
  - "Interpret a positive or negative residual in context as the model underpredicting or overpredicting"
  - "Work backwards from a residual and a model to find an observed value"
  - "Describe what a residual plot is and construct one against x or against ŷ"
  - "Use a residual plot to decide whether a linear model is appropriate: random scatter supports it; curvature does not"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Many graphing calculators store the residuals of the last regression in a list (often called RESID), so you can plot them. Round residuals to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-5.4-revision-notes", "mb-ap-stats-5.4-practice", "mb-ap-stats-5.4-checklist"]
next: "mb-ap-stats-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Residual = observed y − predicted ŷ, in the units of the response variable."
  - "A positive residual means the model underpredicted; a negative residual means it overpredicted."
  - "A residual plot shows the residuals against x (or against ŷ)."
  - "Random scatter in a residual plot supports a linear model. A curved pattern means a line is not the best model."
  - "A value of r close to −1 or 1 does not replace checking the residual plot."
faqs:
  - question: "Is it observed minus predicted, or predicted minus observed?"
    answer: "Always observed minus predicted: y − ŷ. Getting the order wrong flips the sign and reverses your interpretation."
  - question: "Should I plot residuals against x or against ŷ?"
    answer: "Either is acceptable. With one explanatory variable, ŷ is just a linear function of x, so both plots show the same pattern (mirrored left to right if the slope is negative). Use whichever you are given or whichever your calculator makes easiest."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## How wrong was the prediction?

In Topic 5.3 you used a linear regression model ŷ = a + bx to make predictions. Real data points do not sit exactly on the line, so most predictions are a little too high or a little too low. A **residual** measures that error for one data point:

**residual = y − ŷ = observed value − predicted value**

- The residual has the **same units as the response variable**.
- On a scatterplot, it is the **vertical distance** from the point to the line: up is positive, down is negative.

## What the sign tells you

| Residual | Point is… | The model… | In words |
|---|---|---|---|
| positive (y > ŷ) | above the line | **underpredicts** (underestimates) | the actual value was bigger than predicted |
| negative (y < ŷ) | below the line | **overpredicts** (overestimates) | the actual value was smaller than predicted |
| zero | on the line | predicts exactly | the prediction was exactly right for this point |

A good memory aid: residual = **actual − predicted**. If the actual value is bigger, the answer is positive and the model guessed too low.

## The data set used in this guide

A fictional taxi company in the city of Port Avery recorded the distance (km) and the fare ($) for 10 rides. Fares depend mainly on distance, but waiting in traffic adds extra charges, so the points scatter around a line.

| Distance (km) | 2.1 | 3.5 | 4.0 | 5.2 | 6.8 | 7.5 | 8.3 | 9.9 | 11.2 | 12.6 |
|---|---|---|---|---|---|---|---|---|---|---|
| Fare ($) | 8.40 | 8.80 | 12.30 | 12.80 | 14.40 | 18.40 | 18.00 | 23.20 | 23.10 | 26.80 |

Technology gives the model **ŷ = 3.83 + 1.80x**, where x is the distance in km and ŷ is the predicted fare in dollars.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="taxi-title taxi-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="taxi-title">Taxi fare against distance, with the regression line and residuals drawn as vertical segments</title>
<desc id="taxi-desc">The horizontal axis shows distance from 0 to 14 kilometres. The vertical axis shows fare from 5 to 30 dollars. Ten dots rise from 8.40 dollars at 2.1 kilometres to 26.80 dollars at 12.6 kilometres. A straight line, y-hat equals 3.83 plus 1.80 x, runs through the middle of the dots. From each dot, a short dotted vertical segment joins the dot to the line; these are the residuals. Some dots lie above the line and some below, with no pattern. The dot at 9.9 kilometres and 23.20 dollars is above the line and labelled residual plus 1.55 dollars. The dot at 6.8 kilometres and 14.40 dollars is below the line and labelled residual minus 1.67 dollars.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="70" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="70" y1="250" x2="70" y2="257"/><line x1="144.3" y1="250" x2="144.3" y2="257"/><line x1="218.6" y1="250" x2="218.6" y2="257"/><line x1="292.9" y1="250" x2="292.9" y2="257"/><line x1="367.1" y1="250" x2="367.1" y2="257"/><line x1="441.4" y1="250" x2="441.4" y2="257"/><line x1="515.7" y1="250" x2="515.7" y2="257"/><line x1="590" y1="250" x2="590" y2="257"/>
<line x1="63" y1="250" x2="70" y2="250"/><line x1="63" y1="206" x2="70" y2="206"/><line x1="63" y1="162" x2="70" y2="162"/><line x1="63" y1="118" x2="70" y2="118"/><line x1="63" y1="74" x2="70" y2="74"/><line x1="63" y1="30" x2="70" y2="30"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="70" y="272">0</text><text x="144.3" y="272">2</text><text x="218.6" y="272">4</text><text x="292.9" y="272">6</text><text x="367.1" y="272">8</text><text x="441.4" y="272">10</text><text x="515.7" y="272">12</text><text x="590" y="272">14</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="58" y="255">5</text><text x="58" y="211">10</text><text x="58" y="167">15</text><text x="58" y="123">20</text><text x="58" y="79">25</text><text x="58" y="35">30</text>
</g>
<text x="330" y="298" text-anchor="middle" font-size="14" fill="#1d2b44">Distance (km)</text>
<text x="18" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 18 140)">Fare ($)</text>
<line x1="107.1" y1="244.5" x2="590" y2="38.5" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3">
<line x1="148" y1="220.1" x2="148" y2="227"/><line x1="200" y1="216.6" x2="200" y2="204.9"/><line x1="218.6" y1="185.8" x2="218.6" y2="196.9"/><line x1="263.1" y1="181.4" x2="263.1" y2="177.9"/><line x1="322.6" y1="167.3" x2="322.6" y2="152.6"/><line x1="348.6" y1="132.1" x2="348.6" y2="141.5"/><line x1="378.3" y1="135.6" x2="378.3" y2="128.8"/><line x1="437.7" y1="89.8" x2="437.7" y2="103.5"/><line x1="486" y1="90.7" x2="486" y2="82.9"/><line x1="538" y1="58.2" x2="538" y2="60.7"/>
</g>
<g fill="#1d2b44">
<circle cx="148" cy="220.1" r="5"/><circle cx="200" cy="216.6" r="5"/><circle cx="218.6" cy="185.8" r="5"/><circle cx="263.1" cy="181.4" r="5"/><circle cx="322.6" cy="167.3" r="5"/><circle cx="348.6" cy="132.1" r="5"/><circle cx="378.3" cy="135.6" r="5"/><circle cx="437.7" cy="89.8" r="5"/><circle cx="486" cy="90.7" r="5"/><circle cx="538" cy="58.2" r="5"/>
</g>
<text x="430" y="72" text-anchor="end" font-size="12" fill="#1d2b44">residual +1.55 (above line)</text>
<text x="332" y="190" text-anchor="start" font-size="12" fill="#1d2b44">residual −1.67 (below line)</text>
<text x="150" y="80" text-anchor="start" font-size="12" fill="#1d2b44">ŷ = 3.83 + 1.80x</text>
</svg>
<figcaption>Figure 1. Taxi fares at the fictional Port Avery company. Each dotted vertical segment is a residual: the distance from the observed fare to the line. Points above the line have positive residuals; points below have negative residuals.</figcaption>
</figure>

## Worked example 1: calculating and interpreting residuals

**Question.** (a) Find and interpret the residual for the 9.9 km ride. (b) Find and interpret the residual for the 6.8 km ride. (c) Which of the 10 rides did the model predict least well?

**(a)**

1. Predicted fare: ŷ = 3.83 + 1.80(9.9) = 3.83 + 17.82 = $21.65.
2. Residual = observed − predicted = 23.20 − 21.65 = **+$1.55**.
3. **Interpretation:** the actual fare for the 9.9 km ride was $1.55 **more** than the model predicted. The model **underpredicted** this fare.

**(b)**

1. ŷ = 3.83 + 1.80(6.8) = 3.83 + 12.24 = $16.07.
2. Residual = 14.40 − 16.07 = **−$1.67**.
3. **Interpretation:** the actual fare was $1.67 **less** than predicted. The model **overpredicted** this fare.

**(c)** The full set of residuals, in order of distance, is:

| Distance (km) | 2.1 | 3.5 | 4.0 | 5.2 | 6.8 | 7.5 | 8.3 | 9.9 | 11.2 | 12.6 |
|---|---|---|---|---|---|---|---|---|---|---|
| ŷ ($) | 7.61 | 10.13 | 11.03 | 13.19 | 16.07 | 17.33 | 18.77 | 21.65 | 23.99 | 26.51 |
| Residual ($) | 0.79 | −1.33 | 1.27 | −0.39 | −1.67 | 1.07 | −0.77 | 1.55 | −0.89 | 0.29 |

The residual furthest from 0 is −1.67, for the **6.8 km ride**. "Least well" means the largest residual **in size**, ignoring the sign.

**Check.** The residuals add to −0.08, which is very close to 0. For a least-squares line the residuals always add to exactly 0 (Topic 5.5); the small difference here comes from rounding a and b.

## Worked example 2: working backwards from a residual

A residual question can also run the other way: you know the residual and must find the observed value.

**observed y = ŷ + residual**

**Question.** (a) A 10.5 km ride had a residual of −$0.86. What was the actual fare? (b) A 6.0 km ride cost $15.80. Find its residual and say whether the model under- or overpredicted.

**(a)**

1. Predicted fare: ŷ = 3.83 + 1.80(10.5) = 3.83 + 18.90 = $22.73.
2. Observed fare = ŷ + residual = 22.73 + (−0.86) = **$21.87**.
3. The negative residual means the actual fare was less than predicted, and $21.87 is indeed less than $22.73.

**(b)**

1. ŷ = 3.83 + 1.80(6.0) = 3.83 + 10.80 = $14.63.
2. Residual = 15.80 − 14.63 = **+$1.17**.
3. The model **underpredicted** this fare by $1.17. Perhaps the taxi waited in traffic.

## Writing a residual interpretation

A full interpretation of a residual has four parts. Use this frame and fill in the context:

"The actual **[response, with units]** for **[this individual, with its x-value]** was **[size of residual]** **more / less** than the model predicted, so the model **underpredicted / overpredicted**."

For example: "The actual fare for the 9.9 km ride was $1.55 more than the model predicted, so the model underpredicted it."

Check each part before you move on:

- **Size:** give the residual without its sign; the words "more" or "less" carry the direction.
- **Direction:** positive means more than predicted; negative means less.
- **Context:** name the response variable and the individual, not just "y".
- **Units:** the residual is in the units of the response.

## Residual plots

A **residual plot** is a scatterplot of the **residuals** (vertical axis) against the **explanatory variable x** or the **predicted values ŷ** (horizontal axis). A horizontal line at residual = 0 marks where the model is exactly right.

A residual plot takes away the overall upward or downward trend, so any pattern that the line has missed becomes easy to see. You use it to judge whether a linear model is **appropriate**.

| What you see in the residual plot | What it means |
|---|---|
| **Random scatter** above and below 0, with no clear pattern | The form is linear. A linear model is appropriate. |
| **Curvature**: a U-shape or an arch (residuals positive, then negative, then positive, or the reverse) | The form is not linear. A linear model is not the most appropriate model. |

With one explanatory variable, a plot against ŷ shows the same pattern as a plot against x (mirrored left to right if the slope b is negative), so either is fine.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="rp-title rp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rp-title">Two residual plots: taxi fares with random scatter and phone charging with an arch</title>
<desc id="rp-desc">Left panel, labelled A, taxi fares: residuals in dollars from minus 2 to 2 plotted against distance from 0 to 14 kilometres. Ten dots lie above and below the horizontal zero line in no particular order, with no curve or trend. Right panel, labelled B, phone charging: residuals in percentage points from minus 15 to 15 plotted against time from 0 to 90 minutes. Ten dots form a clear arch: the first dot is far below zero at minus 13, the middle dots are above zero at up to about 8, and the last dots fall below zero again to about minus 10.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="50" y1="60" x2="50" y2="200"/><line x1="50" y1="200" x2="300" y2="200"/>
<line x1="370" y1="60" x2="370" y2="200"/><line x1="370" y1="200" x2="620" y2="200"/>
<line x1="44" y1="60" x2="50" y2="60"/><line x1="44" y1="130" x2="50" y2="130"/><line x1="44" y1="200" x2="50" y2="200"/>
<line x1="364" y1="60" x2="370" y2="60"/><line x1="364" y1="130" x2="370" y2="130"/><line x1="364" y1="200" x2="370" y2="200"/>
</g>
<line x1="50" y1="130" x2="300" y2="130" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="370" y1="130" x2="620" y2="130" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="40" y="64">2</text><text x="40" y="134">0</text><text x="40" y="204">−2</text>
<text x="360" y="64">15</text><text x="360" y="134">0</text><text x="360" y="204">−15</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="50" y="218">0</text><text x="175" y="218">7</text><text x="300" y="218">14</text>
<text x="370" y="218">0</text><text x="490" y="218">45</text><text x="610" y="218">90</text>
<text x="175" y="240">Distance (km)</text><text x="490" y="240">Time charging (minutes)</text>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="175" y="30">A: taxi fares (random scatter)</text><text x="495" y="30">B: phone charging (arch)</text>
</g>
<text x="58" y="52" font-size="12" fill="#1d2b44">residual ($)</text>
<text x="378" y="52" font-size="12" fill="#1d2b44">residual (% points)</text>
<g fill="#1d2b44">
<circle cx="87.5" cy="102.3" r="4.5"/><circle cx="112.5" cy="176.5" r="4.5"/><circle cx="121.4" cy="85.6" r="4.5"/><circle cx="142.9" cy="143.7" r="4.5"/><circle cx="171.4" cy="188.4" r="4.5"/><circle cx="183.9" cy="92.5" r="4.5"/><circle cx="198.2" cy="157" r="4.5"/><circle cx="226.8" cy="75.7" r="4.5"/><circle cx="250" cy="161.2" r="4.5"/><circle cx="275" cy="119.8" r="4.5"/>
<circle cx="370" cy="191.4" r="4.5"/><circle cx="396.7" cy="143.5" r="4.5"/><circle cx="423.3" cy="114.3" r="4.5"/><circle cx="450" cy="99.1" r="4.5"/><circle cx="476.7" cy="93.2" r="4.5"/><circle cx="503.3" cy="96.6" r="4.5"/><circle cx="530" cy="109.4" r="4.5"/><circle cx="556.7" cy="126.9" r="4.5"/><circle cx="583.3" cy="149" r="4.5"/><circle cx="610" cy="175.8" r="4.5"/>
</g>
</svg>
<figcaption>Figure 2. Residual plots for two fictional data sets. Dashed line: residual = 0. Plot A (taxi fares, Worked example 1) shows random scatter, so a linear model is appropriate. Plot B (phone charging, Worked example 3) shows an arch, so a linear model is not the most appropriate model, even though r = 0.96.</figcaption>
</figure>

## Worked example 3: a high r, but a curved residual plot

**Question.** A student charged a phone of a fictional model from 5% and recorded the battery level every 10 minutes.

| Time (min) | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|
| Battery (%) | 5 | 24 | 39 | 51 | 61 | 69 | 75 | 80 | 84 | 87 |

Technology gives r = 0.96 and ŷ = 18.15 + 0.874x. The residual plot is plot B in Figure 2. Is a linear model appropriate?

1. **Calculate a few residuals to see the pattern.** At 0 min: ŷ = 18.15, residual = 5 − 18.15 = −13.15. At 40 min: ŷ = 18.15 + 0.874(40) = 53.11, residual = 61 − 53.11 = +7.89. At 90 min: ŷ = 18.15 + 0.874(90) = 96.81, residual = 87 − 96.81 = −9.81.
2. **Describe the residual plot.** The residuals are negative at the start, positive in the middle, and negative again at the end. They form a clear **arch**, not random scatter.
3. **Link to the data.** The battery gains 19 percentage points in the first 10 minutes but only 3 in the last 10. The charging slows down, so the true relationship curves. A straight line is too high at both ends and too low in the middle.
4. **Conclusion.** Despite r = 0.96, the curvature in the residual plot shows that a linear model is **not** the most appropriate model for these data. A curved model would fit better.

**Check.** The model also predicts 123.03% after 120 minutes, which is impossible for a battery. That extrapolation fails for the same reason: the line ignores the levelling off.

## Common misconceptions

- **Residual = predicted − observed.** It is observed − predicted, y − ŷ. Reversing the order flips the sign and the interpretation.
- **"A negative residual means the model underpredicted."** Negative means the actual value was **below** the prediction, so the model **overpredicted**.
- **Forgetting units.** A residual is in the units of the response: dollars, kg, minutes.
- **"Least well predicted" means the most negative residual.** It means the residual furthest from 0 in either direction.
- **"r is close to 1, so the residual plot doesn't matter."** Worked example 3 has r = 0.96 and a clearly curved residual plot.
- **"Random scatter means the predictions are exact."** Random scatter shows the **form** is linear. The residuals can still be large if the association is weak.
- **Plotting residuals against y.** Plot them against x or against ŷ, not against the observed y-values.
- **"A residual of 0 means the model is perfect."** It means that one point lies on the line. Other points can still be far away.

## Where this leads

The least-squares regression line is the line that makes the sum of the **squared residuals** as small as possible. In [Topic 5.5: Least-Squares Regression](/advanced-course-resources/statistics/5-5-least-squares-regression-study-guide/) you will find its slope and intercept with technology, interpret them in context, and meet r², the coefficient of determination. Try the [practice questions](/advanced-course-resources/statistics/5-4-residuals-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/5-4-residuals-revision-notes/) and the [checklist](/advanced-course-resources/statistics/5-4-residuals-checklist/) to consolidate.
