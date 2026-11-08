---
title: "IB DP Mathematics: Analysis and Approaches -- Sampling, data presentation, summary statistics and regression Revision Notes"
seoTitle: "IB Maths AA Statistics and Regression Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA SL and HL statistics: sampling, outliers, box plots, mean and standard deviation, r and both regression lines."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29."
---

These are condensed revision notes. For full explanations and longer worked examples, read the [statistics study guide](/resources/ib-dp-mathematics-aa-statistics-correlation-regression/) first.

The notes cover the descriptive statistics unit of IB Diploma Programme Mathematics: Analysis and Approaches. They are aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 4.1–4.4 and 4.10, and all of the content is common to SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 SL and HL sessions.

When you can recall everything here, test yourself with the [statistics practice questions](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-practice/). The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where this unit sits in the course.

## Definitions

- **Population**: every item of interest. **Sample**: the part you measure. **Random sample**: every item has an equal chance of selection.
- **Discrete data**: separate values, usually counts. **Continuous data**: any value in a range, usually measurements.
- **Bias**: some members of the population are more likely to be chosen than others, so the sample does not represent it.
- **Reliability**: consider who collected the data, missing data and recording errors.
- **Outlier**: a data item more than 1.5 × IQR from the nearest quartile.
- **Modal class**: the class with the highest frequency (equal class intervals only).
- **Variance**: the square of the standard deviation.
- **Mean point**: (x̄, ȳ). Lines of best fit by eye and both regression lines pass through it.
- **Extrapolation**: predicting outside the range of the data. It is unreliable.

At SL the data set is treated as the population unless you are told otherwise.

## Sampling methods

| Method | Key feature | Watch out for |
|---|---|---|
| Simple random | Random numbers from a full list | Needs a complete list |
| Convenience | Whoever is easy to reach | Usually biased |
| Systematic | Every kth item, random start, k = N/n | Patterns in the list |
| Quota | Fixed number per group, not random | Interviewer chooses |
| Stratified | Random sample from each group, in proportion | Needs group sizes |

> **Method in steps: stratified sample**
> 1. Find the total population N.
> 2. For each group, multiply (group size / N) by the sample size n.
> 3. Round sensibly and check the numbers add up to n.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--01-stratified-systematic-sampling.webp" width="900" height="990" alt="Top: a bar for the population of 600 students split into DP1 (360) and DP2 (240). An arrow multiplying by 50 over 600 leads to 50 dots, 30 for DP1 and 20 for DP2, because 360/600 times 50 is 30 and 240/600 times 50 is 20. Bottom: a row of the first 36 names with positions 5, 17 and 29 highlighted. Starting at a random position from 1 to 12 and then taking every 12th name (600 divided by 50 is 12) gives the systematic sample." loading="lazy">
  <figcaption>A stratified sample takes each group in proportion to its size; a systematic sample takes every kth item from a random start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--02-outlier-fences-box-plot.webp" width="900" height="890" alt="A dot plot of twelve weekly sport hours (3, 5, 6, 7, 7, 8, 9, 10, 11, 12, 14, 24) above a box and whisker diagram on the same scale. The box runs from Q1 = 6.5 to Q3 = 11.5 with the median at 8.5, so the IQR is 5. Dashed fences sit 1.5 times 5 = 7.5 beyond each quartile, at minus 1 and 19. The value 24 lies beyond the upper fence, so it is marked with a cross as an outlier and the upper whisker stops at 14." loading="lazy">
  <figcaption>Fences sit 1.5 × IQR beyond the quartiles; any value outside them is an outlier and the whisker stops at the last value inside.</figcaption>
</figure>


## Formulas and results

| Quantity | Result | How you find it |
|---|---|---|
| Mean | x̄ = Σx / n or Σfx / Σf | By hand or GDC |
| Grouped mean (estimate) | Σfx / Σf with x = mid-interval value | By hand or GDC |
| Median | Value at position (n + 1)/2 of ordered data | By hand or GDC |
| IQR | Q₃ − Q₁ | Quartiles by GDC; by hand for short lists |
| Outlier fences | Q₁ − 1.5 × IQR and Q₃ + 1.5 × IQR | By hand |
| Standard deviation | σ (use σx on the GDC) | Technology only |
| Variance | σ² | Square the standard deviation |
| Pearson's r | −1 ≤ r ≤ 1 | Technology |
| y on x line | y = ax + b | Technology |
| x on y line | x = cy + d | Technology (swap the lists) |

### Constant changes to every data item

| Change | Mean, median, quartiles | SD, IQR, range | Variance |
|---|---|---|---|
| + c | + c | unchanged | unchanged |
| × k (k > 0) | × k | × k | × k² |

Worked reminder: mean 50, SD 8. Every item becomes 3x − 10. New mean = 3(50) − 10 = 140. New SD = 3 × 8 = 24. New variance = 576.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--03-cumulative-frequency-quartiles.webp" width="900" height="850" alt="A cumulative frequency graph of waiting times for 60 patients through the points (0,0), (10,6), (20,20), (30,42), (40,54) and (50,60), plotted at the upper class boundaries. Dashed lines read across from 15, 30 and 45 and down to the axis: Q1 is about 16.4 minutes, the median about 24.5 and Q3 32.5, so the interquartile range is about 16.1 minutes." loading="lazy">
  <figcaption>Plot cumulative frequency at upper boundaries, then read across from n/4, n/2 and 3n/4 to find the quartiles.</figcaption>
</figure>


## Data displays

> **Method in steps: cumulative frequency graph**
> 1. Add a cumulative frequency column (running total).
> 2. Plot each total against the **upper** class boundary; start at zero at the lowest boundary.
> 3. Join the points with a smooth curve or straight lines.
> 4. Read across at n/2 (median), n/4 (Q₁), 3n/4 (Q₃) or p% of n (pth percentile).

- Class intervals are inequalities with no gaps, such as 20 ≤ t < 30.
- Frequency histograms use equal class widths; bar height is frequency. Frequency density is not required.
- **Box and whisker diagram**: minimum, Q₁, median, Q₃, maximum. Outliers are crosses, and the whisker ends at the most extreme value that is not an outlier.
- **Comparing two box plots**: one comment on the median, one on the IQR or range, both in context.
- **Possibly normal**: median near the centre of the box and whiskers of similar length.

Worked reminder: data 2, 3, 5, 6, 8, 9, 11, 20. Median = (6 + 8)/2 = 7. Q₁ = (3 + 5)/2 = 4, Q₃ = (9 + 11)/2 = 10, IQR = 6. Upper fence = 10 + 9 = 19, so 20 is an outlier.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--05-constant-changes-mean-sd.webp" width="900" height="960" alt="Three dot plots of the same twelve values on a 0 to 50 scale. Original: mean 9.67, standard deviation 5.23, variance 27.4. After adding 10 to every value the whole plot slides right, mean 19.67, but the standard deviation bar keeps the same length 5.23. After multiplying by 2 the mean doubles to 19.33 and the standard deviation bar doubles to 10.47, so the variance is multiplied by 4 to 109.6." loading="lazy">
  <figcaption>Adding a constant slides the data and the mean but not the spread; multiplying by k scales the spread by k and the variance by k².</figcaption>
</figure>


## Correlation and regression

> **Method in steps: bivariate data**
> 1. Plot a scatter diagram and look at the shape. Is it linear?
> 2. Find r with the GDC. Describe the direction (positive or negative) and the strength (strong or weak).
> 3. If a critical value is given, the correlation is significant when |r| is greater than it.
> 4. Find the regression line with the GDC and write the equation down.
> 5. Substitute to predict, using unrounded coefficients. Check the value is inside the data range.

- **a** in y = ax + b: the change in y for each increase of 1 in x.
- **b**: the value of y when x = 0. It may have no sensible meaning in context.
- **r is only meaningful for linear relationships.** A clear curve can give r near 0.
- **Correlation does not imply causation.** A third variable may drive both.

Worked reminder: y = 4.2x + 11 and x̄ = 5. Then ȳ = 4.2(5) + 11 = 32, because the line passes through (x̄, ȳ).

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--09-two-regression-lines.webp" width="900" height="810" alt="The same eight revision-hours and score points with both regression lines. The y on x line, y = 2.62x + 35.7, minimises the vertical gaps; the x on y line, x = 0.299y minus 9.06, minimises the horizontal gaps. They are different lines that cross at the mean point (7.5, 55.375). To estimate revision hours for a score of 55, read across to the x on y line: x is about 7.39 hours. Rearranging the y on x line would give 7.36, which is the wrong method." loading="lazy">
  <figcaption>To predict x from y use the x on y line, not a rearranged y on x line; both lines pass through the mean point.</figcaption>
</figure>


## Must-know distinctions

- **y on x vs x on y**: predict y from x with the y on x line; predict x from y with the x on y line. Never rearrange one to get the other. The lines are different unless r = ±1.
- **Interpolation vs extrapolation**: inside the data range is reasonable when correlation is strong; outside it is unreliable.
- **Correlation vs causation**: r measures association, not cause.
- **Median and IQR vs mean and SD**: the median and IQR resist outliers; the mean and SD do not.
- **Discrete vs continuous**: counts vs measurements.
- **Quota vs stratified**: both use groups, but only stratified chooses at random within each group.
- **σx vs sx on the GDC**: use σx unless the question says otherwise.
- **Hand quartiles vs GDC quartiles**: different methods exist, so answers may differ on some data sets.

## Quick self-test

1. State whether each is discrete or continuous: (i) the number of emails received in a day, (ii) the time taken to run 100 m.
2. A gym has 1200 members, of whom 450 are under 30. How many under-30s should be in a stratified sample of 80?
3. A data set has Q₁ = 20 and Q₃ = 32. Is 51 an outlier?
4. A data set has mean 12 and standard deviation 3. Every value is doubled and then 5 is subtracted. Find the new mean, standard deviation and variance.
5. Estimate the mean of this grouped data and state the modal class: 0 ≤ x < 4 (5), 4 ≤ x < 8 (9), 8 ≤ x < 12 (4), 12 ≤ x < 16 (2).
6. Find the median and IQR of 3, 4, 4, 6, 7, 9, 10, 13.
7. The regression line of y on x is y = −1.5x + 40. Interpret −1.5 and predict y when x = 10.
8. The regression line of y on x is y = 2.5x + 3 and x̄ = 6. Find ȳ.
9. Describe the correlation when r = −0.92.
10. You are given y and need to estimate x. Which regression line should you use?
11. A survey asks every 20th customer who enters a shop. Name the sampling method.
12. A scatter diagram shows points on a clear U-shaped curve and r = 0.1. What can you conclude?

### Answers

1. (i) Discrete. (ii) Continuous.
2. (450/1200) × 80 = **30**.
3. IQR = 12, upper fence = 32 + 18 = 50. 51 > 50, so **yes**.
4. Mean = 2(12) − 5 = **19**; SD = 2 × 3 = **6**; variance = **36**.
5. Mid-intervals 2, 6, 10, 14: Σfx = 10 + 54 + 40 + 28 = 132, Σf = 20, mean ≈ **6.6**. Modal class **4 ≤ x < 8**.
6. Median = (6 + 7)/2 = **6.5**. Q₁ = 4, Q₃ = 9.5, IQR = **5.5**.
7. y decreases by 1.5 on average for each increase of 1 in x. y = −15 + 40 = **25**.
8. ȳ = 2.5(6) + 3 = **18**.
9. **Strong negative linear correlation.**
10. The regression line of **x on y**.
11. **Systematic** sampling.
12. There is **no linear correlation**, but there is a clear non-linear relationship, so r is not a suitable measure here.

## Where marks are usually lost

- Rearranging the y on x line to predict x, instead of using the x on y line.
- Measuring the 1.5 × IQR fence from the median instead of the nearest quartile.
- Using class boundaries instead of mid-interval values for a grouped mean.
- Plotting cumulative frequency at mid-points instead of upper class boundaries.
- Adding the constant to the standard deviation, or multiplying variance by k instead of k².
- Using sx from the GDC when the data are the population.
- Rounding a and b to 3 s.f. before predicting, which can change the third significant figure of the answer.
- Describing correlation as "strong" without saying positive or negative, or without saying "linear".
- Comparing box plots without context, or giving two comments on centre and none on spread.
- Making a prediction far outside the data range without saying it is unreliable.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-statistics-correlation-regression--04-histogram-mean-modal-class.webp" width="900" height="860" alt="A frequency histogram with five equal classes 0-10, 10-20, 20-30, 30-40 and 40-50 and frequencies 6, 14, 22, 12 and 6. The tallest bar, 20 to 30, is the modal class. Each bar shows its mid-interval value 5, 15, 25, 35, 45. Multiplying each frequency by its mid value and adding gives 1480; divided by 60 patients the estimated mean is about 24.7 minutes, marked by a dashed line." loading="lazy">
  <figcaption>The modal class is the tallest bar; the grouped mean uses mid-interval values: Σfx ÷ Σf.</figcaption>
</figure>

## Frequently asked questions

**What happens to the mean and standard deviation if you add a constant to every value?**
Adding c to every value adds c to the mean, median and quartiles, but leaves the standard deviation, IQR, range and variance unchanged. Multiplying by k multiplies the standard deviation by k and the variance by k².

**What is the difference between quota and stratified sampling?**
In stratified sampling, each group is sampled at random in proportion to its size. In quota sampling, a fixed number is filled from each group but not at random, so the interviewer's choices can introduce bias.

**Does the regression line pass through the mean point?**
Yes. The regression line passes through (x̄, ȳ), so if you know the line and x̄ you can find ȳ.

**Do you calculate standard deviation by hand in IB Maths AA?**
No. The IB DP Mathematics: Analysis and Approaches guide expects standard deviation from technology only; use σx on the GDC, treating the data as the population unless told otherwise.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
