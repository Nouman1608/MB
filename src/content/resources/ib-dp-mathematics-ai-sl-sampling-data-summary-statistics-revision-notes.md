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
reviewedDate: 2026-11-08
publishedDate: 2026-09-27
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics--06-outlier-effect-on-summaries.webp" width="900" height="940" alt="Two dot plots of the commute times on the same number line. With the outlier 47 the mean is 21.4, the standard deviation sigma is 8.14 and the median is 20. Without 47 the mean is 19.6, sigma is 4.56 and the median is 19.5. A bar shows the mean plus and minus one sigma and is much wider with the outlier. One outlier moves the mean and almost doubles sigma but moves the median only from 19.5 to 20, which is why the median and IQR are often better summaries when there are outliers." loading="lazy">
  <figcaption>One outlier changes the mean and standard deviation a lot but the median only a little.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics--07-constant-changes.webp" width="900" height="980" alt="Three dot plots of ten test marks on one number line from 0 to 100. The original marks have mean 26 and standard deviation 5. Adding 3 to every mark shifts the whole plot right: the mean becomes 29 but the standard deviation stays 5. Multiplying by 2.5 to get percentages shifts and stretches it: the mean becomes 72.5 and the standard deviation becomes 12.5, so the variance becomes 156.25, which is 2.5 squared times 25. Adding a constant does not change the spread; multiplying by k multiplies the standard deviation by k and the variance by k squared." loading="lazy">
  <figcaption>Adding a constant shifts the data and leaves the spread unchanged; multiplying by k stretches the spread by k.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics--03-cumulative-frequency-quartiles.webp" width="900" height="890" alt="A cumulative frequency graph of 60 shop times. Points are plotted at the upper class boundaries: (0, 0), (10, 6), (20, 20), (30, 42), (40, 54) and (50, 60), joined by straight lines. Reading across from n over 4 which is 15 gives the lower quartile 16.4 minutes; from n over 2 which is 30 gives the median 24.5 minutes; from 3n over 4 which is 45 gives the upper quartile 32.5 minutes. The interquartile range is about 16.1 minutes." loading="lazy">
  <figcaption>Plot running totals at upper boundaries, then read across from n/4, n/2 and 3n/4 to find the quartiles.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics--05-outlier-box-plot.webp" width="900" height="860" alt="Fifteen commute times: 12, 14, 15, 15, 17, 18, 19, 20, 21, 22, 23, 24, 26, 28 and 47 minutes, shown as a dot plot above a box and whisker diagram on one number line. The median is 20, Q1 is 15, Q3 is 24 and the IQR is 9, so 1.5 times the IQR is 13.5. The fences are 15 minus 13.5, which is 1.5, and 24 plus 13.5, which is 37.5. Only 47 lies beyond a fence, so it is an outlier and is marked with a cross. The box runs from 15 to 24 with a line at 20 and whiskers to 12 and 28, the last values inside the fences." loading="lazy">
  <figcaption>A value more than 1.5 x IQR beyond a quartile is an outlier; the whisker stops at the last value inside the fence.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics--01-stratified-sample.webp" width="900" height="810" alt="A gym has 450 members: 180 aged under 30, 150 aged 30 to 49 and 120 aged 50 or over. A stratified sample of 60 takes 60 over 450, which is 2 over 15, of each group at random: 180 times 2/15 is 24, 150 times 2/15 is 20 and 120 times 2/15 is 16, and 24 plus 20 plus 16 is 60. The bars of the sample have the same proportions as the bars of the population. A quota sample would use the same numbers but would not choose members at random within each group." loading="lazy">
  <figcaption>A stratified sample takes the same fraction of every group, chosen at random within each group.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics--02-systematic-sample.webp" width="900" height="790" alt="A list of 600 names is laid out in rows of 15. To take a systematic sample of 40, the interval is 600 divided by 40, which is 15. A random start between 1 and 15 is chosen, here 7, and then every 15th name is taken: 7, 22, 37, 52 and so on up to 592, which is 40 names. The chosen names line up in one column because the interval equals the row length. The method is biased if the list has a pattern that repeats every 15 names." loading="lazy">
  <figcaption>A systematic sample takes a random start and then every k-th name, with k equal to population size divided by sample size.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-sl-sampling-data-summary-statistics--04-grouped-mean-histogram.webp" width="900" height="914" alt="A frequency histogram of 60 shop times in five equal classes of width 10 minutes with frequencies 6, 14, 22, 12 and 6. Each class is represented by its mid-interval value 5, 15, 25, 35 and 45, giving fx values 30, 210, 550, 420 and 270, which total 1480. The estimated mean is 1480 divided by 60, about 24.7 minutes, marked as the balance point. The class 20 to 30 minutes has the highest frequency 22 and is the modal class. The mean is only an estimate because exact values within each class are unknown." loading="lazy">
  <figcaption>Grouped data give only an estimate of the mean, using the mid-interval value of each class.</figcaption>
</figure>


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

## Frequently asked questions

**What is the difference between quota and stratified sampling?**
Both take a set number from each group, but in stratified sampling the members of each group are chosen at random and in proportion to group size. In quota sampling the collector fills each quota with anyone available, so it is not random.

**How do you calculate a stratified sample size for one group?**
Multiply the fraction of the population in that group by the total sample size: (group size ÷ population size) × sample size. For example, 300 of 1200 students in a sample of 80 gives 20.

**Do you calculate standard deviation by hand in IB Maths AI SL?**
No. The IB guide says standard deviation and variance are found with technology only. At SL the data set is treated as the population unless you are told otherwise, so use σx on your GDC.

**Where do the whiskers go on a box and whisker diagram with outliers?**
The whiskers go to the smallest and largest values that are not outliers, and each outlier is marked separately with a cross. Drawing the whiskers out to the outliers loses marks.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 -- syllabus sections 4.1, 4.2 and 4.3.
