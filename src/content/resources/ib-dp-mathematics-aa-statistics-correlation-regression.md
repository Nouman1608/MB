---
title: "IB DP Mathematics: Analysis and Approaches -- Sampling, data presentation, summary statistics and regression Study Guide"
seoTitle: "IB Maths AA Statistics and Regression Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Sampling, data presentation, summary statistics and regression"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-10"
description: "Study guide to sampling, data displays, summary statistics, correlation and regression lines for IB DP Maths AA SL and HL, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29."
---

This study guide teaches the descriptive statistics unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 4.1–4.4 and 4.10. All of this content is common to SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 SL and HL sessions.

When you have worked through it, use the [statistics revision notes](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-revision-notes/) for final-weeks recall and the [statistics practice questions](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-practice/) to test yourself. For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 4.1 | Use the terms population, sample, random sample, discrete and continuous data; judge reliability and bias; identify and interpret outliers; describe simple random, convenience, systematic, quota and stratified sampling | SL and HL |
| 4.2 | Read and draw frequency tables, frequency histograms (equal class intervals), cumulative frequency graphs and box and whisker diagrams; use them to find the median, quartiles, percentiles, range and IQR | SL and HL |
| 4.3 | Find the mean, median and mode; estimate the mean of grouped data; state the modal class; find the IQR, standard deviation and variance; know the effect of constant changes to the data | SL and HL |
| 4.4 | Draw and describe scatter diagrams; find and interpret Pearson's r; find the regression line of y on x and use it to predict; interpret a and b in y = ax + b | SL and HL |
| 4.10 | Find the regression line of x on y and use it to predict x from y | SL and HL |

Most calculations in this topic are done with technology, and the data set is treated as the population unless you are told otherwise. Paper 1 allows no technology, so be ready to do these by hand: sampling calculations, quartiles of short lists, outlier checks, mid-interval means, constant-change rules and using a given regression line.

## 4.1 Populations, samples and sampling

The **population** is every item of interest; a **sample** is the part you measure. In a **random sample** every item has an equal chance of selection.

- **Discrete data** can take only separate values, usually counts: number of siblings, goals scored.
- **Continuous data** can take any value in a range, usually measurements: time, mass, length.

**Reliability and bias.** Ask who collected the data and why. A sample is **biased** if some members of the population are more likely to be chosen than others. Also check for missing data and recording errors (a height typed as 1.7 instead of 170).

### Sampling techniques

| Method | How it works | Main weakness |
|---|---|---|
| Simple random | Number the population and choose with random numbers | Needs a full list; may miss small groups by chance |
| Convenience | Use whoever is easiest to reach | Very likely to be biased |
| Systematic | Choose every kth item from a list, random start | Biased if the list has a repeating pattern |
| Quota | Fill a fixed number from each group, not chosen at random | The interviewer chooses, so bias creeps in |
| Stratified | Split into groups (strata); sample each group in proportion to its size, at random | Needs the size of each group |

**Worked example 1.** A school has 360 DP1 and 240 DP2 students. A stratified sample of 50 is needed.

```
Total = 360 + 240 = 600
DP1: (360/600) × 50 = 30
DP2: (240/600) × 50 = 20
```

For a systematic sample of 50 from the list of 600, take every 600/50 = 12th name, starting at a random position from 1 to 12.

### Outliers

An **outlier** is a data item more than 1.5 × IQR from the nearest quartile.

```
lower fence = Q₁ − 1.5 × IQR
upper fence = Q₃ + 1.5 × IQR
```

In context, decide whether an outlier is a genuine value that belongs in the data or an error that should be checked or removed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--01-stratified-systematic-sampling.webp" width="900" height="990" alt="Top: a bar for the population of 600 students split into DP1 (360) and DP2 (240). An arrow multiplying by 50 over 600 leads to 50 dots, 30 for DP1 and 20 for DP2, because 360/600 times 50 is 30 and 240/600 times 50 is 20. Bottom: a row of the first 36 names with positions 5, 17 and 29 highlighted. Starting at a random position from 1 to 12 and then taking every 12th name (600 divided by 50 is 12) gives the systematic sample." loading="lazy">
  <figcaption>A stratified sample takes each group in proportion to its size; a systematic sample takes every kth item from a random start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--02-outlier-fences-box-plot.webp" width="900" height="890" alt="A dot plot of twelve weekly sport hours (3, 5, 6, 7, 7, 8, 9, 10, 11, 12, 14, 24) above a box and whisker diagram on the same scale. The box runs from Q1 = 6.5 to Q3 = 11.5 with the median at 8.5, so the IQR is 5. Dashed fences sit 1.5 times 5 = 7.5 beyond each quartile, at minus 1 and 19. The value 24 lies beyond the upper fence, so it is marked with a cross as an outlier and the upper whisker stops at 14." loading="lazy">
  <figcaption>Fences sit 1.5 × IQR beyond the quartiles; any value outside them is an outlier and the whisker stops at the last value inside.</figcaption>
</figure>


## 4.2 Presenting data

Class intervals are written as inequalities with no gaps, for example 10 ≤ t < 20. A **frequency histogram** uses equal class widths, so bar height is frequency. Frequency density histograms are not required.

A **cumulative frequency** is a running total. Plot each cumulative frequency against the **upper class boundary** and join the points. For n items, read across from:

- n/2 for the median
- n/4 for Q₁ and 3n/4 for Q₃
- p% of n for the pth percentile

**Worked example 2.** Waiting times, t minutes, for 60 patients.

| t | 0 ≤ t < 10 | 10 ≤ t < 20 | 20 ≤ t < 30 | 30 ≤ t < 40 | 40 ≤ t < 50 |
|---|---|---|---|---|---|
| Frequency | 6 | 14 | 22 | 12 | 6 |
| Cumulative frequency | 6 | 20 | 42 | 54 | 60 |

Plot (10, 6), (20, 20), (30, 42), (40, 54), (50, 60), starting from (0, 0). The median is at 60/2 = 30, which lies in the class 20 ≤ t < 30. Reading from a graph joined with straight lines (linear interpolation):

```
median ≈ 20 + (30 − 20)/22 × 10 ≈ 24.5 minutes
Q₁ (15th) ≈ 10 + (15 − 6)/14 × 10 ≈ 16.4
Q₃ (45th) ≈ 30 + (45 − 42)/12 × 10 = 32.5
IQR ≈ 32.5 − 16.4 ≈ 16.1 minutes
90th percentile (54th) = 40 minutes
```

### Box and whisker diagrams

A box and whisker diagram shows the minimum, Q₁, median, Q₃ and maximum. Outliers are marked with a cross, and the whisker stops at the most extreme value that is not an outlier.

To **compare two distributions**, comment on a measure of centre (median) and a measure of spread (IQR or range), in context. If the median sits near the middle of the box and the whiskers are about the same length, the data are roughly symmetric and **may** be normally distributed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--03-cumulative-frequency-quartiles.webp" width="900" height="850" alt="A cumulative frequency graph of waiting times for 60 patients through the points (0,0), (10,6), (20,20), (30,42), (40,54) and (50,60), plotted at the upper class boundaries. Dashed lines read across from 15, 30 and 45 and down to the axis: Q1 is about 16.4 minutes, the median about 24.5 and Q3 32.5, so the interquartile range is about 16.1 minutes." loading="lazy">
  <figcaption>Plot cumulative frequency at upper boundaries, then read across from n/4, n/2 and 3n/4 to find the quartiles.</figcaption>
</figure>


## 4.3 Summary statistics

**Mean** x̄ = Σx / n, or Σfx / Σf from a frequency table. For grouped data, use mid-interval values to estimate the mean. The **modal class** is the class with the highest frequency (equal class intervals only).

**Worked example 3.** Estimate the mean waiting time in worked example 2.

```
mid-interval values: 5, 15, 25, 35, 45
Σfx = 5(6) + 15(14) + 25(22) + 35(12) + 45(6) = 1480
x̄ ≈ 1480 / 60 ≈ 24.7 minutes
```

The modal class is 20 ≤ t < 30.

**Worked example 4.** Twelve students recorded the number of hours of sport they did in a week:

3, 5, 6, 7, 7, 8, 9, 10, 11, 12, 14, 24

```
Σx = 116, so x̄ = 116/12 ≈ 9.67 hours
Mode = 7
Median = mean of 6th and 7th values = (8 + 9)/2 = 8.5
Lower half 3, 5, 6, 7, 7, 8  → Q₁ = (6 + 7)/2 = 6.5
Upper half 9, 10, 11, 12, 14, 24 → Q₃ = (11 + 12)/2 = 11.5
IQR = 11.5 − 6.5 = 5
Upper fence = 11.5 + 1.5 × 5 = 19, so 24 is an outlier
Lower fence = 6.5 − 7.5 = −1, so there are no low outliers
```

On a box plot, the whiskers reach 3 and 14 and 24 is a cross. Different quartile methods exist, so a GDC and a hand method can disagree on some data sets.

**Standard deviation and variance.** The guide expects these from technology only. Variance is the square of the standard deviation. On your GDC, treat the data as the population unless told otherwise and use σx. For the data above, σ ≈ 5.23 hours and variance ≈ 27.4 hours². Removing the outlier 24 would drop the mean to 8.36 but move the median only to 8: the median and IQR resist outliers.

### Effect of constant changes

| Change to every data item | Mean, median, quartiles | Standard deviation, IQR, range | Variance |
|---|---|---|---|
| Add or subtract c | Add or subtract c | Unchanged | Unchanged |
| Multiply by k (k > 0) | Multiply by k | Multiply by k | Multiply by k² |

**Worked example 5.** Daily temperatures have mean 18.5 °C and standard deviation 4.2 °C. Convert to Fahrenheit using F = 1.8C + 32.

```
new mean = 1.8 × 18.5 + 32 = 65.3 °F
new SD = 1.8 × 4.2 = 7.56 °F   (adding 32 does not change the spread)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--04-histogram-mean-modal-class.webp" width="900" height="860" alt="A frequency histogram with five equal classes 0-10, 10-20, 20-30, 30-40 and 40-50 and frequencies 6, 14, 22, 12 and 6. The tallest bar, 20 to 30, is the modal class. Each bar shows its mid-interval value 5, 15, 25, 35, 45. Multiplying each frequency by its mid value and adding gives 1480; divided by 60 patients the estimated mean is about 24.7 minutes, marked by a dashed line." loading="lazy">
  <figcaption>The modal class is the tallest bar; the grouped mean uses mid-interval values: Σfx ÷ Σf.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--05-constant-changes-mean-sd.webp" width="900" height="960" alt="Three dot plots of the same twelve values on a 0 to 50 scale. Original: mean 9.67, standard deviation 5.23, variance 27.4. After adding 10 to every value the whole plot slides right, mean 19.67, but the standard deviation bar keeps the same length 5.23. After multiplying by 2 the mean doubles to 19.33 and the standard deviation bar doubles to 10.47, so the variance is multiplied by 4 to 109.6." loading="lazy">
  <figcaption>Adding a constant slides the data and the mean but not the spread; multiplying by k scales the spread by k and the variance by k².</figcaption>
</figure>


## 4.4 Correlation and the regression line of y on x

Bivariate data come in pairs (x, y). Plot them on a **scatter diagram** and describe the correlation as positive, negative or zero, and as strong or weak. A **line of best fit by eye** should pass through the **mean point** (x̄, ȳ).

**Pearson's product-moment correlation coefficient**, r, measures the strength of a **linear** relationship, with −1 ≤ r ≤ 1. Values near 1 mean strong positive linear correlation, near −1 strong negative, and near 0 no linear correlation. Find r with technology. It is only meaningful for linear relationships: data on a clear curve can have r close to 0. Where a question gives a **critical value** of r, the correlation is significant if |r| is greater than it.

**Correlation does not imply causation.** Both variables may depend on a third.

The **regression line of y on x**, y = ax + b, is found with technology and is used to predict y from a given x. Here a is the gradient: the change in y for each increase of 1 in x. b is the value of y when x = 0, which may have no sensible meaning in context.

**Worked example 6.** Eight students recorded revision hours, x, and test score, y (out of 100).

| x | 2 | 4 | 5 | 7 | 8 | 10 | 11 | 13 |
|---|---|---|---|---|---|---|---|---|
| y | 38 | 52 | 45 | 50 | 64 | 58 | 70 | 66 |

Using a GDC (linear regression):

```
r ≈ 0.885  → strong positive linear correlation
y ≈ 2.62x + 35.7
mean point (7.5, 55.375) lies on this line
```

Each extra hour of revision is associated with about 2.62 more marks on average; 35.7 is the predicted score for no revision.

To predict the score for 9 hours: y ≈ 2.62 × 9 + 35.7 ≈ **59.3**. Use unrounded GDC coefficients.

Predicting for 25 hours gives about 101, which is impossible for a test out of 100. This is **extrapolation**: x = 25 is far outside the data range of 2 to 13, so the prediction is unreliable.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--06-what-r-tells-you.webp" width="900" height="1020" alt="Four small scatter diagrams of 15 points each. Strong positive correlation has r = 0.92 with points close to a rising dashed line. Strong negative correlation has r = minus 0.90 with points close to a falling line. Random scatter has r near zero (0.07). The fourth set follows a clear U-shaped curve yet r is exactly 0.00, because r only measures linear relationships." loading="lazy">
  <figcaption>r measures straight-line strength from −1 to 1; a clear curve can still give r close to 0.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--07-regression-y-on-x.webp" width="900" height="810" alt="Scatter diagram of eight students: revision hours on the x axis and test score on the y axis. The least-squares line y = 2.62x + 35.7 passes through the mean point (7.5, 55.375) and the correlation is r = 0.885. The gradient a means about 2.62 more marks for each extra hour; the intercept b = 35.7 is the predicted score at zero hours. Reading up from 9 hours gives a predicted score of about 59.3." loading="lazy">
  <figcaption>The gradient a is the change in y per extra unit of x; b is the predicted y at x = 0; the line passes through the mean point.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--08-extrapolation-warning.webp" width="900" height="810" alt="The same regression line drawn out to 26 hours of revision with a dashed line at the maximum score of 100. The shaded band from 2 to 13 hours is the range of the data. A prediction at 9 hours (about 59.3) is inside it and reasonable. Extending the line to 25 hours predicts about 101, which is impossible for a test out of 100, so predictions far outside the data range (extrapolation) are unreliable." loading="lazy">
  <figcaption>Predicting inside the data range is reasonable; extending far outside it can give impossible values.</figcaption>
</figure>


## 4.10 The regression line of x on y

To predict **x from a given y**, use the regression line of x on y, found with technology by making y the independent variable. Do not rearrange the y on x line. The two lines are different unless r = ±1, and both pass through the mean point.

**Worked example 6 continued.** Estimate the revision hours for a score of 55.

```
x on y line: x ≈ 0.299y − 9.06
x ≈ 0.299 × 55 − 9.06 ≈ 7.39 hours
```

Rearranging the y on x line would give 7.36, but that is the wrong method, even though the numbers here are close. Likewise, do not use the x on y line to predict y.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--09-two-regression-lines.webp" width="900" height="810" alt="The same eight revision-hours and score points with both regression lines. The y on x line, y = 2.62x + 35.7, minimises the vertical gaps; the x on y line, x = 0.299y minus 9.06, minimises the horizontal gaps. They are different lines that cross at the mean point (7.5, 55.375). To estimate revision hours for a score of 55, read across to the x on y line: x is about 7.39 hours. Rearranging the y on x line would give 7.36, which is the wrong method." loading="lazy">
  <figcaption>To predict x from y use the x on y line, not a rearranged y on x line; both lines pass through the mean point.</figcaption>
</figure>


## Using your GDC

- One-variable statistics (with a frequency list if needed) gives x̄, σx, Q₁, median and Q₃.
- Two-variable linear regression gives a, b and r. Swap the lists to get the x on y line.
- Write the equation down before using it.

## Common errors

- Plotting cumulative frequency at lower class boundaries or mid-points instead of upper boundaries.
- Measuring the outlier fence from the median instead of the nearest quartile.
- Adding a constant to the standard deviation, or multiplying the variance by k instead of k².
- Rearranging y = ax + b to predict x from y instead of using the x on y line.
- Treating a high r as proof of cause.
- Giving a prediction far outside the data range without a warning about extrapolation.

## Where to go next

Next, use the [revision notes](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-revision-notes/) and the [practice questions](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-practice/). For other units, see the [functions study guide](/resources/ib-dp-mathematics-aa-functions/) and the [calculus study guide](/resources/ib-dp-mathematics-aa-calculus/). See also the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) and [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/).

## Frequently asked questions

**What does Pearson's correlation coefficient r measure?**
r measures the strength of a linear relationship, with −1 ≤ r ≤ 1. Values near 1 mean strong positive linear correlation and values near −1 strong negative linear correlation.

**What is extrapolation and why is it unreliable?**
Extrapolation is predicting outside the range of the data. The pattern may not continue, so a prediction can be impossible, such as a test score above 100.

**Where do you plot points on a cumulative frequency graph?**
Plot each cumulative frequency against the upper class boundary and join the points, starting from the lower end at zero. Read the median at n/2 and the quartiles at n/4 and 3n/4.

**What is the difference between discrete and continuous data?**
Discrete data can take only separate values, usually counts such as goals scored. Continuous data can take any value in a range, such as a measured time or length.

**What do a and b mean in the regression line y = ax + b?**
a is the change in y for each increase of 1 in x, and b is the predicted value of y when x = 0, which may have no sensible meaning in context.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
