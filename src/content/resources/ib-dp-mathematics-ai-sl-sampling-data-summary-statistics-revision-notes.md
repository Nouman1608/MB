---
title: "IB DP Mathematics: Applications and Interpretation -- Sampling, data presentation and summary statistics Revision Notes"
seoTitle: "IB Maths AI Sampling and Summary Statistics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Sampling, data presentation and summary statistics"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-3"
description: "Condensed revision notes on sampling, bias, outliers, cumulative frequency, box plots and summary statistics, with a self-test, for IB DP Maths AI."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, use the [study guide for this unit](/resources/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics/).

These revision notes cover sampling, data presentation and summary statistics for IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 4.1, 4.2 and 4.3, which are common content for SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Links: [course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) · [printable checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) · [practice questions](/resources/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics-practice/) · [statistics and probability overview](/resources/ib-dp-mathematics-ai-statistics-probability/)

## Definitions

- **Population**: the whole group you want to know about.
- **Sample**: the part of the population you collect data from.
- **Random sample**: each member of the population has an equal chance of selection.
- **Discrete data**: separate values, usually counted (number of pets).
- **Continuous data**: any value in a range, measured (reaction time, mass).
- **Bias**: the sample systematically over- or under-represents part of the population.
- **Outlier**: a value more than 1.5 × IQR below Q₁ or above Q₃.
- **Percentile**: the p-th percentile is the value below which p% of the data lie. Q₁ is the 25th, the median the 50th, Q₃ the 75th.

## Sampling methods at a glance

| Method | Key feature | Random? |
|---|---|---|
| Simple random | Random numbers pick from a full list | Yes |
| Convenience | Whoever is easiest to reach | No |
| Systematic | Random start, then every k-th item; k = population ÷ sample size | Only the start |
| Quota | Fixed number from each group, chosen by the collector | No |
| Stratified | Random sample from each group, sized in proportion to the group | Yes, within groups |

**Stratified sample size for a group** = (group size ÷ population size) × total sample size.

## Formulas and rules

| Quantity | Rule |
|---|---|
| Mean (list) | x̄ = Σx / n |
| Mean (frequency table) | x̄ = Σfx / Σf |
| Estimated mean (grouped) | x̄ ≈ Σfx / Σf with x = mid-interval value |
| Median position (list) | ((n + 1)/2)-th value |
| Median, quartiles (cumulative frequency graph) | read at n/2, n/4 and 3n/4 |
| p-th percentile (cumulative frequency graph) | read at (p/100) × n |
| Range | max − min |
| Interquartile range | IQR = Q₃ − Q₁ |
| Outlier boundaries | Q₁ − 1.5 × IQR and Q₃ + 1.5 × IQR |
| Variance | σ² (square of the standard deviation) |

Standard deviation and variance: **technology only**, as the guide states. At SL the data set is the population unless you are told otherwise, so use σx on your GDC.

## Effect of constant changes

| Every value... | Mean, median, quartiles | Standard deviation, IQR, range | Variance |
|---|---|---|---|
| + k or − k | + k or − k | no change | no change |
| × k (k > 0) | × k | × k | × k² |

## Method in steps

**Checking for outliers**

1. Put the data in order and find Q₁ and Q₃.
2. IQR = Q₃ − Q₁, then work out 1.5 × IQR.
3. Lower boundary Q₁ − 1.5 × IQR; upper boundary Q₃ + 1.5 × IQR.
4. Any value outside the boundaries is an outlier.
5. Say whether it is a valid value or a likely error, using the context.

**Drawing a cumulative frequency graph**

1. Add a running total column to the frequency table.
2. Plot each running total at the **upper boundary** of its class.
3. Start the curve at (lower boundary of the first class, 0).
4. Join with a smooth curve (or straight lines).
5. Read across from n/2, n/4, 3n/4 or a percentile, then down to the x-axis.

**Drawing a box and whisker diagram**

1. Find min, Q₁, median, Q₃, max.
2. Check for outliers.
3. Draw the box from Q₁ to Q₃ with a line at the median.
4. Whiskers go to the smallest and largest values that are **not** outliers.
5. Mark each outlier with a cross.

**Comparing two distributions**

1. Compare the medians, in context ("on average, group A took longer").
2. Compare IQRs or ranges, in context ("group B's times were more consistent").
3. Comment on symmetry if asked. Roughly symmetric box and whiskers suggest the data may be normally distributed.

## Small worked reminders

- Data 5, 8, 9, 12, 16: x̄ = 50/5 = 10; σ = 3.74 (GDC, 3 s.f.); variance = 14.
- A class 20 ≤ x < 30 has mid-interval value 25.
- Q₁ = 20, Q₃ = 32 → IQR = 12, 1.5 × IQR = 18, boundaries 2 and 50.
- Mean 40, sd 6. Subtract 5 from every value: mean 35, sd 6.
- Stratified sample of 80 from 1200 students, 300 of them in Year 12: 300/1200 × 80 = 20 from Year 12.
- Model comparison: "Group A's median time (24 min) is higher than group B's (19 min), so group A took longer on average. Group A's IQR (6 min) is smaller than group B's (11 min), so group A's times were more consistent."

## Must-know distinctions

- **Stratified vs quota**: both take set numbers from each group, but stratified chooses at random within each group; quota does not.
- **Systematic vs simple random**: systematic picks at a fixed interval after one random start; simple random picks every member at random.
- **Discrete vs continuous**: counts vs measurements. Age in whole years is often recorded as discrete even though age itself is continuous; read how the question records it.
- **Mode vs modal class**: mode is a value; modal class is the class with the highest frequency, and the guide uses it only for equal class intervals.
- **Exact vs estimated mean**: a mean from grouped data using mid-interval values is an estimate, because the actual values are unknown.
- **Standard deviation vs variance**: variance is the square of the standard deviation, so its units are squared.
- **Outlier vs error**: an outlier is defined by the 1.5 × IQR rule; whether it is an error depends on the context.
- **Hand quartiles vs technology quartiles**: different methods exist, so a GDC or spreadsheet may give slightly different values from a hand method.

## Quick self-test

1. Is the time taken to run 100 m discrete or continuous?
2. Q₁ = 20 and Q₃ = 32. Find the boundaries for outliers.
3. A school has 1200 students, 300 of them in Year 12. How many Year 12 students should be in a stratified sample of 80?
4. Find the mean of 3, 7, 8, 10, 12.
5. Find the median, Q₁ and Q₃ of 2, 4, 5, 7, 9, 11, 12, 15 using the median-of-halves method.
6. A data set has standard deviation 6. Every value is multiplied by 3, then 2 is added. Find the new standard deviation and variance.
7. A data set has mean 40. Every value has 5 subtracted. Find the new mean.
8. Write down the mid-interval value of 20 ≤ x < 30.
9. The variance of a data set is 2.25. Find the standard deviation.
10. A cumulative frequency graph is drawn for 200 values. At what cumulative frequency do you read the 90th percentile?
11. Every 12th name on a register is chosen after a random start. Name the sampling method.
12. Estimate the mean: 0 ≤ x < 10, frequency 4; 10 ≤ x < 20, frequency 6.

### Answers

1. Continuous (it is measured).
2. IQR = 12, 1.5 × 12 = 18: lower boundary **2**, upper boundary **50**.
3. 300/1200 × 80 = **20**.
4. 40/5 = **8**.
5. Median = (7 + 9)/2 = **8**; Q₁ = median of 2, 4, 5, 7 = **4.5**; Q₃ = median of 9, 11, 12, 15 = **11.5**.
6. Standard deviation 6 × 3 = **18**; variance 18² = **324**. Adding 2 changes neither.
7. **35**.
8. **25**.
9. √2.25 = **1.5**.
10. 0.9 × 200 = **180**.
11. **Systematic** sampling.
12. (4 × 5 + 6 × 15)/10 = 110/10 = **11** (an estimate).

## Where marks are usually lost

- Plotting cumulative frequencies at mid-interval values instead of upper class boundaries.
- Stating an outlier from a sketch without writing Q₁ − 1.5 × IQR or Q₃ + 1.5 × IQR with numbers.
- Drawing a whisker all the way to an outlier, or marking the outlier with a dot instead of a cross.
- Using the class width (10) or the upper boundary instead of the mid-interval value when estimating a grouped mean.
- Giving the modal class as a frequency ("22") rather than the class itself ("20 ≤ t < 30").
- Using Sx instead of σx at SL when nothing in the question says the data are a sample for estimating a population value.
- Saying that adding a constant changes the standard deviation, or multiplying the variance by k instead of k².
- Comparing box plots with numbers only: each comparison needs a sentence in context about centre and about spread.
- Calling a sample "random" when it is only systematic, quota or convenience.
- Rounding intermediate values (such as Q₁ from a graph) too early, which moves the IQR and the outlier boundaries.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 -- syllabus sections 4.1, 4.2 and 4.3.
