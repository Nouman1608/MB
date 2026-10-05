---
resourceId: "mb-ap-stats-5.4-practice"
title: "Residuals: Practice Questions (Statistics 5.4)"
description: "Seven original Marlbridge practice questions on residuals: calculating observed minus predicted, interpreting under- and overprediction, and using residual plots to judge a linear model."
course: "statistics"
unit: 5
topics: ["5.4"]
resourceType: "practice-questions"
prerequisites:
  - "Making predictions with ŷ = a + bx (Topic 5.3)"
prerequisiteResources: ["mb-ap-stats-5.4-study-guide"]
learningObjectives:
  - "Calculate residuals and observed values from a linear model"
  - "Interpret residuals in context as under- or overprediction"
  - "Use a residual plot to decide whether a linear model is appropriate"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Round residuals to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-5.4-study-guide", "mb-ap-stats-5.4-revision-notes", "mb-ap-stats-5.4-checklist"]
next: "mb-ap-stats-5.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers."
  - "Residual = observed − predicted, in the units of the response."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: residual = observed value − predicted value (y − ŷ); each model was found with technology from the data described; residual plots show residuals against the explanatory variable; round final answers to 2 decimal places unless stated.

## Question 1 (multiple choice · foundation)

A fictional fish farm uses the model ŷ = −180 + 18.5x to predict the mass (g) of a trout from its length x (cm). A trout 30 cm long has a mass of 390 g. What is its residual?

- (A) −15 g
- (B) 15 g
- (C) 375 g
- (D) 765 g

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ŷ = −180 + 18.5(30) = −180 + 555 = 375 g. Residual = observed − predicted = 390 − 375 = **15 g**. The trout is 15 g heavier than the model predicts.

- (A) calculates predicted − observed, 375 − 390. The order is observed − predicted.
- (C) is the predicted mass ŷ, not the residual.
- (D) adds the observed and predicted masses, 390 + 375. A residual is a difference.
</details>

## Question 2 (multiple choice · foundation)

A fictional bakery uses a linear model to predict the number of loaves it sells each day from the number of online pre-orders. On Tuesday the residual was −2.3 loaves. Which is the correct interpretation?

- (A) The bakery sold 2.3 more loaves than the model predicted, so the model underpredicted.
- (B) The bakery sold 2.3 fewer loaves than the model predicted, so the model overpredicted.
- (C) The model predicted that the bakery would sell 2.3 loaves on Tuesday.
- (D) The bakery sold 2.3 fewer loaves than the model predicted, so the model underpredicted.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Residual = actual − predicted = −2.3, so the actual number sold was 2.3 loaves **below** the prediction. A prediction that is too high is an **overprediction**.

- (A) reverses the sign: "2.3 more" would be a residual of +2.3.
- (C) confuses the residual with the predicted value ŷ.
- (D) has the right size and direction for the sales but the wrong conclusion: if the actual value is below the prediction, the model predicted too much, not too little.
</details>

## Question 3 (multiple choice · core)

Four linear models were fitted to four different fictional data sets. Their residual plots are shown below. Which residual plot gives the best evidence that a linear model is appropriate?

<figure>
<svg viewBox="0 0 640 185" role="img" aria-labelledby="q3-title q3-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q3-title">Four residual plots labelled W, X, Y and Z</title>
<desc id="q3-desc">Each panel shows ten residuals against the explanatory variable, with a dashed horizontal line at zero. Plot W: residuals are high at both ends and low in the middle, a U-shape. Plot X: residuals are low at both ends and high in the middle, an arch. Plot Y: residuals are scattered above and below zero with no pattern. Plot Z: residuals rise, fall and rise again in a wave.</desc>
<rect x="0" y="0" width="640" height="185" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="30" y1="40" x2="30" y2="160"/><line x1="185" y1="40" x2="185" y2="160"/><line x1="340" y1="40" x2="340" y2="160"/><line x1="495" y1="40" x2="495" y2="160"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4">
<line x1="30" y1="100" x2="160" y2="100"/><line x1="185" y1="100" x2="315" y2="100"/><line x1="340" y1="100" x2="470" y2="100"/><line x1="495" y1="100" x2="625" y2="100"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="95" y="25">W</text><text x="250" y="25">X</text><text x="405" y="25">Y</text><text x="560" y="25">Z</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="95" y="178">x</text><text x="250" y="178">x</text><text x="405" y="178">x</text><text x="560" y="178">x</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="end">
<text x="26" y="104">0</text><text x="181" y="104">0</text><text x="336" y="104">0</text><text x="491" y="104">0</text>
</g>
<g fill="#1d2b44">
<circle cx="40" cy="52" r="3.5"/><circle cx="52" cy="78.4" r="3.5"/><circle cx="64" cy="100" r="3.5"/><circle cx="76" cy="116.8" r="3.5"/><circle cx="88" cy="126.4" r="3.5"/><circle cx="100" cy="128.8" r="3.5"/><circle cx="112" cy="119.2" r="3.5"/><circle cx="124" cy="102.4" r="3.5"/><circle cx="136" cy="78.4" r="3.5"/><circle cx="148" cy="49.6" r="3.5"/>
<circle cx="195" cy="150.4" r="3.5"/><circle cx="207" cy="119.2" r="3.5"/><circle cx="219" cy="95.2" r="3.5"/><circle cx="231" cy="80.8" r="3.5"/><circle cx="243" cy="71.2" r="3.5"/><circle cx="255" cy="73.6" r="3.5"/><circle cx="267" cy="83.2" r="3.5"/><circle cx="279" cy="102.4" r="3.5"/><circle cx="291" cy="121.6" r="3.5"/><circle cx="303" cy="148" r="3.5"/>
<circle cx="350" cy="85.6" r="3.5"/><circle cx="362" cy="121.6" r="3.5"/><circle cx="374" cy="92.8" r="3.5"/><circle cx="386" cy="73.6" r="3.5"/><circle cx="398" cy="109.6" r="3.5"/><circle cx="410" cy="124" r="3.5"/><circle cx="422" cy="80.8" r="3.5"/><circle cx="434" cy="104.8" r="3.5"/><circle cx="446" cy="88" r="3.5"/><circle cx="458" cy="116.8" r="3.5"/>
<circle cx="505" cy="133.6" r="3.5"/><circle cx="517" cy="104.8" r="3.5"/><circle cx="529" cy="76" r="3.5"/><circle cx="541" cy="64" r="3.5"/><circle cx="553" cy="80.8" r="3.5"/><circle cx="565" cy="114.4" r="3.5"/><circle cx="577" cy="136" r="3.5"/><circle cx="589" cy="124" r="3.5"/><circle cx="601" cy="92.8" r="3.5"/><circle cx="613" cy="68.8" r="3.5"/>
</g>
</svg>
<figcaption>Residual plots for Question 3. Vertical axis: residual. Horizontal axis: explanatory variable x. Dashed line: residual = 0.</figcaption>
</figure>

- (A) Plot W
- (B) Plot X
- (C) Plot Y
- (D) Plot Z

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** In plot Y the residuals are scattered above and below 0 with no curve or other pattern. Apparent randomness in a residual plot supports a linear form, so a linear model is appropriate.

- (A) Plot W is U-shaped: the model underpredicts at both ends and overpredicts in the middle. This curvature shows the form is not linear.
- (B) Plot X is an arch, the reverse of W. It also shows curvature.
- (D) Plot Z has a clear wave pattern. The residuals are not random, so the straight line is missing a systematic feature of the data.
</details>

## Question 4 (calculation · core)

A fictional bus company models journey time (minutes) from route distance (km) with ŷ = 4.5 + 2.6x. Five of the journeys in its data were:

| Distance (km) | 3 | 5 | 8 | 10 | 12 |
|---|---|---|---|---|---|
| Time (min) | 13 | 19 | 22 | 31 | 34 |

(a) Calculate the predicted time and the residual for each journey.
(b) Which journey did the model predict best? Which did it overpredict the most?
(c) Interpret the residual for the 8 km journey in context.

<details>
<summary>Worked solution</summary>

**(a)**

| Distance (km) | 3 | 5 | 8 | 10 | 12 |
|---|---|---|---|---|---|
| ŷ (min) | 12.30 | 17.50 | 25.30 | 30.50 | 35.70 |
| Residual (min) | 0.70 | 1.50 | −3.30 | 0.50 | −1.70 |

For example, at 8 km: ŷ = 4.5 + 2.6(8) = 25.30 minutes, and residual = 22 − 25.30 = −3.30 minutes.

**(b)** Best: the **10 km** journey, whose residual (0.50 min) is closest to 0. Most overpredicted: the **8 km** journey, with the most negative residual (−3.30 min).

**(c)** The 8 km journey took 3.30 minutes **less** than the model predicted, so the model **overpredicted** its journey time.

Suggested mark points (3): 1 for all five predicted values and residuals correct; 1 for 10 km (best) and 8 km (most overpredicted); 1 for an interpretation that names journey time, the direction (less than predicted, overpredicted) and the units.
</details>

## Question 5 (constructed response · core)

A fictional school models its daily heating energy use (kWh) from the mean outdoor temperature (°C) with ŷ = 210 − 4.2x. The data cover days from 2 °C to 24 °C.

(a) On a day with a mean temperature of 15 °C, the residual was −9.6 kWh. Find the actual energy use that day.
(b) Interpret the residual in (a) in context.
(c) On a 22 °C day the school used 125 kWh. Find the residual. Did the model underpredict or overpredict?
(d) Explain why a residual of 0 for one day does not show that the model predicts every day well.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ŷ = 210 − 4.2(15) = 210 − 63 = 147 kWh. Observed = ŷ + residual = 147 + (−9.6) = **137.4 kWh**.

**(b)** On the 15 °C day the school used 9.6 kWh **less** energy than the model predicted. The model overpredicted that day's energy use.

**(c)** ŷ = 210 − 4.2(22) = 210 − 92.4 = 117.6 kWh. Residual = 125 − 117.6 = **+7.4 kWh**. The model **underpredicted**: the school used 7.4 kWh more than predicted.

**(d)** A residual of 0 means only that this one day's point lies exactly on the line. Other days can have large residuals. To judge the model as a whole, you need to look at all the residuals, for example in a residual plot.

| Point | What earns it |
|---|---|
| 1 | Correct ŷ = 147 kWh and observed = 137.4 kWh, using y = ŷ + residual |
| 1 | Interpretation: 9.6 kWh less than predicted (overpredicted), in context |
| 1 | Correct residual +7.4 kWh **and** "underpredicted" |
| 1 | Explains that one residual describes only one point |

A common error in (a) is 147 + 9.6 = 156.6 kWh, which ignores the negative sign; it does not earn point 1.
</details>

## Question 6 (constructed response · stretch)

A fictional road-safety test measured the stopping distance (m) of one car on a wet track at nine speeds (km/h).

| Speed (km/h) | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 |
|---|---|---|---|---|---|---|---|---|---|
| Stopping distance (m) | 14 | 22 | 31 | 42 | 55 | 70 | 86 | 104 | 124 |

Technology gives r = 0.99 and ŷ = −35.24 + 1.373x. The residual plot is shown.

<figure>
<svg viewBox="0 0 640 270" role="img" aria-labelledby="q6-title q6-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q6-title">Residual plot of stopping distance against speed</title>
<desc id="q6-desc">The horizontal axis shows speed from 30 to 110 kilometres per hour. The vertical axis shows residuals from minus 8 to 10 metres, with a dashed line at zero. Nine dots form a U-shape: the residual is about plus 8 at 30 kilometres per hour, falls to about minus 6 at 70 kilometres per hour, then rises to about plus 8 at 110 kilometres per hour.</desc>
<rect x="0" y="0" width="640" height="270" fill="#ffffff"/>
<line x1="60" y1="215" x2="590" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="215" x2="60" y2="40" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="140" x2="590" y2="140" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="215" x2="80" y2="222"/><line x1="200" y1="215" x2="200" y2="222"/><line x1="320" y1="215" x2="320" y2="222"/><line x1="440" y1="215" x2="440" y2="222"/><line x1="560" y1="215" x2="560" y2="222"/>
<line x1="53" y1="50" x2="60" y2="50"/><line x1="53" y1="95" x2="60" y2="95"/><line x1="53" y1="140" x2="60" y2="140"/><line x1="53" y1="185" x2="60" y2="185"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="238">30</text><text x="200" y="238">50</text><text x="320" y="238">70</text><text x="440" y="238">90</text><text x="560" y="238">110</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="48" y="55">10</text><text x="48" y="100">5</text><text x="48" y="145">0</text><text x="48" y="190">−5</text>
</g>
<text x="325" y="262" text-anchor="middle" font-size="14" fill="#1d2b44">Speed (km/h)</text>
<text x="66" y="32" font-size="13" fill="#1d2b44">Residual (m)</text>
<g fill="#1d2b44">
<circle cx="80" cy="67.5" r="5"/><circle cx="140" cy="119.1" r="5"/><circle cx="200" cy="161.7" r="5"/><circle cx="260" cy="186.3" r="5"/><circle cx="320" cy="192.8" r="5"/><circle cx="380" cy="181.4" r="5"/><circle cx="440" cy="161" r="5"/><circle cx="500" cy="122.5" r="5"/><circle cx="560" cy="66.1" r="5"/>
</g>
</svg>
<figcaption>Residual plot for Question 6. Each dot is one test speed. Dashed line: residual = 0.</figcaption>
</figure>

(a) Calculate the residual at 70 km/h and check that it matches the plot.
(b) Describe the pattern in the residual plot.
(c) A student says: "r = 0.99, so a linear model is clearly appropriate." Do you agree? Explain.
(d) The test team wants to estimate the stopping distance at 120 km/h. Would the linear model probably give a value that is too high or too low? Explain using the residual plot.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ŷ = −35.24 + 1.373(70) = −35.24 + 96.11 = 60.87 m. Residual = 55 − 60.87 = **−5.87 m**. This matches the lowest dot in the plot, just below −5 at 70 km/h.

**(b)** The residuals form a clear **U-shape**: positive at low speeds (about +8 m at 30 km/h), negative at middle speeds (down to about −6 m at 70 km/h), and positive again at high speeds (about +8 m at 110 km/h). They are not randomly scattered.

**(c)** No. The value r = 0.99 shows a very strong association, but it does not show that the form is linear. The curvature in the residual plot shows that a straight line is not the most appropriate model. You can see the curve in the data too: the extra stopping distance for each 10 km/h rises from 8 m (30 to 40 km/h) to 20 m (100 to 110 km/h), so the relationship bends upwards.

**(d)** **Too low.** At the highest speeds the residuals are positive and rising, so the model already **underpredicts** there. The curve is getting steeper while the line keeps the same slope, so at 120 km/h (an extrapolation) the line's prediction, ŷ = −35.24 + 1.373(120) = 129.52 m, is likely to be less than the true stopping distance.

| Point | What earns it |
|---|---|
| 1 | Correct ŷ (60.87 m) and residual (−5.87 m) |
| 1 | Describes the U-shape (positive, negative, positive) as a curved, non-random pattern |
| 1 | Disagrees, explaining that a high r does not establish a linear form and citing the residual plot |
| 1 | Says "too low", linking positive residuals at high speeds to underprediction (and noting the extrapolation) |

In (c), "No, because the residual plot is curved" earns the point only if it also addresses why r = 0.99 is not enough.
</details>

## Question 7 (explanation · stretch)

At a fictional gym, a linear model predicts the calories burned in a session from the minutes spent on a rowing machine. The residual plot shows random scatter around 0. Three students comment:

- **Ali:** "My residual is −6 kcal, so the model underestimated the calories I burned."
- **Bea:** "My residual is 0, so this model is perfect for everyone."
- **Cem:** "The residual plot shows no pattern, so every residual must be small."

For each student, explain the mistake and give a correct statement.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Ali.** A residual of −6 kcal means Ali's actual calories were 6 kcal **below** the prediction (observed − predicted = −6). The model **overestimated** (overpredicted) the calories Ali burned.

**Bea.** A residual of 0 means only that Bea's own point lies exactly on the line: the model predicted her calories exactly. Other people can have large positive or negative residuals, so it says nothing about how well the model fits everyone.

**Cem.** Random scatter in a residual plot tells you that the **form** is linear, so a linear model is appropriate. It does not tell you how **big** the residuals are. If the association is weak, the residuals can be large and still random. To judge their size, look at the values on the residual axis.

| Point | What earns it |
|---|---|
| 1 | Ali: negative means actual below predicted, so the model overestimated |
| 1 | Bea: a zero residual describes one point only |
| 1 | Cem: random scatter shows a linear form, not small residuals |
</details>

## How did you do?

- **Q1 or Q4(a) wrong:** revisit Worked example 1 in the [study guide](/advanced-course-resources/statistics/5-4-residuals-study-guide/). Always calculate observed − predicted.
- **Q2, Q4(c) or Q7 (Ali) wrong:** revisit "What the sign tells you".
- **Q5 wrong:** work through Worked example 2. Use y = ŷ + residual and keep the sign.
- **Q3 or Q6 wrong:** revisit "Residual plots" and Worked example 3.
- **Q7 (Bea or Cem) wrong:** re-read the misconceptions list.

Then tick off the [topic checklist](/advanced-course-resources/statistics/5-4-residuals-checklist/).
