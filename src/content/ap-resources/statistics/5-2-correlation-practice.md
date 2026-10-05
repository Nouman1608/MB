---
resourceId: "mb-ap-stats-5.2-practice"
title: "Correlation: Practice Questions (Statistics 5.2)"
description: "Seven original Marlbridge practice questions on interpreting the correlation coefficient r, its properties, its limits with curves and outliers, and correlation versus causation."
course: "statistics"
unit: 5
topics: ["5.2"]
resourceType: "practice-questions"
prerequisites:
  - "Describing a scatterplot (Topic 5.1)"
prerequisiteResources: ["mb-ap-stats-5.2-study-guide"]
learningObjectives:
  - "Interpret r in context and compare strengths of linear association"
  - "Apply the properties of r: range, sign, no units"
  - "Explain why a large |r| does not prove a linear form, and why r is not resistant"
  - "Respond to a causal claim based on correlation"
skills: ["4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use technology to find r. Round r to 2 decimal places."
related: ["mb-ap-stats-5.2-study-guide", "mb-ap-stats-5.2-revision-notes", "mb-ap-stats-5.2-checklist"]
next: "mb-ap-stats-5.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers."
  - "Every interpretation of r names strength, direction, 'linear' and both variables."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: r is found with technology and rounded to 2 decimal places; the rough working guide for strength (|r| above about 0.8 strong, 0.5 to 0.8 moderate, below 0.5 weak) is not an official rule, so always justify with the scatterplot as well.

## Question 1 (multiple choice · foundation)

Four scatterplots have the correlations below. Which one shows the strongest linear association?

- (A) r = 0.87
- (B) r = 0.45
- (C) r = 0.08
- (D) r = −0.91

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Strength depends on how close r is to −1 or 1. |−0.91| = 0.91 is the largest of 0.87, 0.45, 0.08 and 0.91.

- (A) is strong, but 0.87 is further from ±1 than −0.91 is. Choosing it treats negative values as weaker.
- (B) is a weak to moderate association.
- (C) is very close to 0: almost no linear association.
</details>

## Question 2 (multiple choice · foundation)

At a fictional coastal weather station, the correlation between wind speed (km/h) and wave height (m) over 40 days is r = 0.74. The wind speeds are converted to miles per hour (1 km/h ≈ 0.621 mph). What is the correlation between wind speed in mph and wave height?

- (A) 0.46
- (B) 0.74
- (C) 1.19
- (D) It cannot be found without the original data.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** r has no units. Multiplying every wind speed by the same positive number does not change how closely the points follow a line, so r stays 0.74.

- (A) multiplies r by 0.621, as if r had units of km/h.
- (C) multiplies r by 1.609; it is also impossible, because r can never exceed 1.
- (D) is wrong because the unit-free property tells us the answer without the data.
</details>

## Question 3 (multiple choice · core)

A fictional study measured the speed (km/h) of 12 delivery vans and their fuel use (litres per 100 km). The scatterplot shows a clear U-shape: fuel use is high at very low and very high speeds and lowest at middle speeds. Technology gives r = 0.02. Which statement is correct?

- (A) There is no association between speed and fuel use.
- (B) There is almost no linear association, but there is a clear non-linear association.
- (C) There is a weak, positive, linear association, so faster vans use slightly more fuel.
- (D) The value of r must be wrong, because the scatterplot shows a clear pattern.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** r measures only linear association. A U-shape can give r close to 0 even though fuel use clearly depends on speed.

- (A) treats r = 0.02 as "no association of any kind". The plot shows a strong curved pattern.
- (C) reads meaning into a tiny r and ignores the curved form; a linear description does not fit a U-shape.
- (D) wrongly assumes r measures any pattern. r near 0 is exactly what a symmetric U-shape produces.
</details>

## Question 4 (calculation and interpretation · core)

Eight fictional weather stations on a mountain recorded altitude (hundreds of metres) and mean July temperature (°C).

| Altitude (hundreds of m) | 2 | 4 | 5 | 7 | 9 | 11 | 12 | 15 |
|---|---|---|---|---|---|---|---|---|
| Mean July temperature (°C) | 24.1 | 22.0 | 23.0 | 20.3 | 19.6 | 16.9 | 17.8 | 14.2 |

The scatterplot is linear with no unusual points.

(a) Use technology to find r. Interpret it in context.
(b) What would r be if altitude were recorded in metres? Explain.
(c) A ninth station at 1,300 m (13 hundred m) is added, with a mean July temperature of 27.5 °C. Use technology to find the new r. What does this show about r?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** r = −0.9775… ≈ **−0.98**. There is a strong, negative, linear association between altitude and mean July temperature at these stations: higher stations tend to have lower July temperatures.

**(b)** Still **−0.98**. Multiplying every altitude by 100 changes the units but not the pattern; r has no units.

**(c)** New r = −0.4661… ≈ **−0.47**. One station that does not fit the pattern (warm for its altitude) weakened r from −0.98 to −0.47. r is **not resistant** to unusual points. The station's reading should be checked; it might be an error, or the station might be in an unusual place, such as a sheltered sunny valley.

| Point | What earns it |
|---|---|
| 1 | r ≈ −0.98 from technology |
| 1 | Interpretation names strong, negative, linear and both variables in context |
| 1 | r unchanged by the change of units, with the reason (no units) |
| 1 | New r ≈ −0.47 and the conclusion that one unusual point can change r a lot (not resistant) |
</details>

## Question 5 (constructed response · core)

A fictional language study recorded the average number of words known by children at different ages.

| Age (months) | 12 | 15 | 18 | 21 | 24 | 27 | 30 | 33 | 36 |
|---|---|---|---|---|---|---|---|---|---|
| Words known | 5 | 20 | 50 | 110 | 220 | 380 | 560 | 760 | 950 |

(a) Use technology to find r.
(b) A researcher says: "Because r is so close to 1, a straight line is a good model for these data." Do the data support this claim? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** r = 0.9583… ≈ **0.96**.

**(b)** **No.** A value of r close to 1 does not show that the form is linear. The increase in words known over each 3-month step is 15, 30, 60, 110, 160, 180, 200 and 190. The rate of change is not roughly constant: the increases start very small and become more than ten times larger (15 words at first, about 200 words later). A scatterplot would show a curved (non-linear) pattern, so a straight line is not a good model, even though r is 0.96. The researcher should look at the scatterplot, not only at r.

| Point | What earns it |
|---|---|
| 1 | r ≈ 0.96 |
| 1 | States that a high r does not by itself show a linear form |
| 1 | Uses the data (changing increases or the shape of the plot) to show the pattern is curved |
</details>

## Question 6 (constructed response · stretch)

A fictional health survey asked 200 adults how many hours a week they spend gardening and measured their resting heart rate (beats per minute). The scatterplot is roughly linear, and r = −0.58. A magazine headline says: "Gardening lowers your heart rate."

(a) Interpret r = −0.58 in context.
(b) Explain why the survey does not support the headline. Name a possible lurking variable and explain how it could produce the association.
(c) Briefly describe a study that could give evidence for or against the headline.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** There is a moderate, negative, linear association between weekly hours of gardening and resting heart rate for these adults: those who garden more tend to have lower resting heart rates.

**(b)** This is an observational study, so the association does not show cause and effect. A possible lurking variable is **general fitness or overall activity**. People who are generally active may choose to garden more **and** have lower resting heart rates because of all their other exercise. (Other acceptable answers include having free time or health conditions that limit both gardening and fitness.)

**(c)** A randomised experiment: recruit volunteers, randomly assign half to garden for a set number of hours each week and half to a comparison activity of similar time with little exertion, for several months. Compare the change in resting heart rate between the groups. Random assignment balances lurking variables such as fitness.

| Point | What earns it |
|---|---|
| 1 | Moderate, negative, linear, with both variables in context |
| 1 | States that correlation from an observational study does not show causation |
| 1 | Names a plausible lurking variable **and** explains how it is linked to both variables |
| 1 | Describes an experiment with random assignment of a gardening treatment and a comparison group |
</details>

## Question 7 (explanation · stretch)

A student wrote three statements about correlation. Explain the error in each, and correct it.

1. "r = −0.85 shows a weaker relationship than r = 0.60, because it is negative."
2. "The correlation between height (cm) and arm span (cm) for my class is 0.82 cm."
3. "The correlation between hours of daylight and temperature is 0.97, so the line relating them is very steep."

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

1. **Sign is direction, not strength.** Strength depends on how close r is to −1 or 1; |−0.85| = 0.85 > 0.60, so r = −0.85 shows the **stronger** linear association (and it is negative).
2. **r has no units.** The correct statement is "r = 0.82", which shows a strong, positive, linear association between height and arm span for the class.
3. **r does not measure steepness.** r = 0.97 means the points lie very close to a straight line with a positive direction. The line could be steep or gentle; the slope is a separate quantity (Topic 5.3).

| Point | What earns it |
|---|---|
| 1 | Statement 1: strength from |r|, so −0.85 is stronger |
| 1 | Statement 2: r is unit-free, corrected statement given |
| 1 | Statement 3: r measures closeness to a line, not slope |
</details>

## How did you do?

- **Q1 or Q7 (1) wrong:** re-read "Properties of r" in the [study guide](/advanced-course-resources/statistics/5-2-correlation-study-guide/).
- **Q2 or Q7 (2) wrong:** revisit the "No units" property and Worked example 1(b).
- **Q3 wrong:** look again at Figure 1, panel D.
- **Q4(c) wrong:** revisit "When r misleads (2): unusual points".
- **Q5 wrong:** work through Worked example 2 again.
- **Q6 wrong:** work through Worked example 3 and revisit experimental design (Topic 1.13).

Then tick off the [topic checklist](/advanced-course-resources/statistics/5-2-correlation-checklist/).
