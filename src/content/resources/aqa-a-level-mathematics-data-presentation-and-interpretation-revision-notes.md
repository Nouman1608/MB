---
title: "AQA A-Level Mathematics: L: Data presentation and interpretation (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Data Presentation Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "L: Data presentation and interpretation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "l-data-presentation-and-interpretation-aqa-alevel-maths"
description: "Revision notes for AQA A-Level Maths Section L: frequency density, correlation, standard deviation formulas, outlier rules and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section L: Data presentation and interpretation** (L1 to L4) of the
**AQA A-level Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018
onwards. The specification lists Section L under **Paper 3**. A calculator is required in every
7357 paper, and you must be able to use it to compute summary statistics. For full explanations
and longer worked examples, use the [Data presentation study guide](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation/).

Practise with the [Data presentation practice questions](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation-practice/),
see every topic on the [7357 course hub](/boards/aqa/a-level/mathematics/), tick off outcomes on
the [printable checklist](/checklists/aqa/a-level/mathematics/), and find your weak spots with
the free [10-minute diagnostics](/diagnostics/).

## Key definitions

- **Frequency density**: frequency ÷ class width. The height of a histogram bar.
- **Relative frequency**: frequency ÷ total frequency. Estimates a probability.
- **Interquartile range (IQR)**: Q₃ − Q₁. The spread of the middle half of the data.
- **Standard deviation**: the square root of the variance; a typical distance of values from
  the mean.
- **Correlation**: how closely bivariate data follow a straight-line pattern (positive,
  negative or none; strong or weak).
- **Regression line of y on x**: a line of best fit used to predict y from a given x.
- **Interpolation / extrapolation**: predicting inside / outside the range of the observed x
  values.
- **Outlier**: a value far from the rest of the data, judged by a stated rule.
- **Cleaning data**: dealing with missing values, errors and outliers before analysis.

## Formulas

| Quantity | Formula |
|---|---|
| Mean (Appendix B, must recall) | x̄ = Σx / n = Σfx / Σf |
| Variance, divisor n | σ² = Σ(x − x̄)²/n = Σx²/n − x̄² |
| Variance, divisor n − 1 | s² = (Σx² − n x̄²)/(n − 1) |
| Standard deviation | square root of the variance |
| Frequency density | frequency ÷ class width |
| Histogram frequency | bar area (× scale factor if needed) |
| IQR outlier limits | Q₁ − 1.5 × IQR and Q₃ + 1.5 × IQR |
| Standard deviation outlier limits | x̄ ± 2σ (or x̄ ± 3σ if the question says so) |

The specification's notation uses σ for a population standard deviation and s for a sample
standard deviation. Calculators show both (often labelled σx and sx). Use the one the question
asks for.

## L1: Single-variable diagrams

### Method: histogram questions

1. Find each class width from the class boundaries.
2. Frequency density = frequency ÷ width.
3. To find a frequency, find the bar's area.
4. If the axis is not frequency density, use a known bar to find "people per cm²" (or per square)
   first.
5. For part of a class, take the matching fraction of that bar's area (this assumes values
   are spread evenly within the class).

**Reminder.** The class 4 ≤ x < 6.5 has frequency 15, so its frequency density is 15 ÷ 2.5 = 6.
An estimate of the frequency for 4 ≤ x < 5 is 1 × 6 = 6.

### Other diagrams

- **Box plot**: read Q₁, median, Q₃, IQR and the range. A median nearer Q₁ with a long upper
  whisker shows positive skew.
- **Cumulative frequency**: plot at **upper class boundaries**. Median at n/2, quartiles at n/4
  and 3n/4.
- **Link to probability**: relative frequency histograms have total area 1, so area over an
  interval estimates a probability. A symmetrical, bell-shaped histogram suggests a Normal
  model (Section N).

## L2: Scatter diagrams and correlation

### Describing a scatter diagram

Say the **direction** and the **strength**, in context: "strong negative correlation: cars with
larger engines tend to travel fewer miles per gallon".

### Interpreting a regression line y = a + bx

- **b**: the estimated change in y when x increases by 1, in context, with units.
- **a**: the estimated y when x = 0. Often meaningless if x = 0 is far outside the data.
- Interpolation with strong correlation: reasonably reliable. Extrapolation: unreliable.
- Use a y on x line only to predict y from x.

Calculations involving regression lines are excluded from the specification. Focus on what the
line means and when it is safe to use.

### Must-know distinctions

| Idea | What it means |
|---|---|
| Correlation | Two variables vary together |
| Causation | A change in one variable produces a change in the other |
| Distinct sections | Separate clusters in a scatter diagram, for example two regions |

Correlation does not imply causation: a third variable may drive both. When a scatter diagram
has distinct sections, describe each group separately. One line through all the points can
suggest a correlation that does not hold within either group.

## L3: Location and spread

### Method: standard deviation from summary statistics

1. x̄ = Σx ÷ n.
2. σ² = Σx²/n − x̄². Check it is positive.
3. σ = √σ². Round to 3 s.f. at the end only.
4. If values are added or removed, update **n, Σx and Σx²** first, then recompute.

**Reminder.** n = 8, Σx = 96, Σx² = 1224. Then x̄ = 12, σ² = 153 − 144 = 9 and σ = 3.

### Method: grouped data

Use class midpoints as x and the frequencies as f. Enter both into calculator statistics mode.
The mean and standard deviation are estimates.

### Choosing a measure

| Data | Location | Spread |
|---|---|---|
| Roughly symmetrical, no outliers | Mean | Standard deviation |
| Skewed or with outliers | Median | IQR |

When comparing two data sets, give **one location and one spread comparison**, each in context.

## L4: Outliers, cleaning and choosing diagrams

### Method: outlier check

1. Use the rule given in the question.
2. Work out the limits exactly; show them.
3. Compare the suspect value with the limit and state a conclusion.

**Reminder.** Q₁ = 18 and Q₃ = 26, so IQR = 8. The limits are 18 − 12 = 6 and 26 + 12 = 38. A
value of 4 is an outlier; a value of 37 is not.

### Cleaning data

- **Missing values**: leave out, say so, reduce n. Never record them as 0.
- **Errors**: impossible or mistyped values. Correct if known, otherwise remove.
- **Outliers**: investigate. Remove only if they are errors or not from the population.

### Choosing a diagram

- Grouped continuous data: histogram or cumulative frequency diagram.
- Comparing distributions: box plots on a common scale.
- Bivariate data: scatter diagram.
- Categorical data: bar chart or pie chart.

## Quick self-test

1. A class 15 ≤ x < 25 has frequency 32. Find its frequency density.
2. On a histogram, a bar of area 4 cm² represents 10 people. How many people does a bar of
   area 9.2 cm² represent?
3. n = 10, Σx = 85, Σx² = 785. Find the mean and standard deviation (divisor n).
4. Q₁ = 30 and Q₃ = 42. Is 61 an outlier under the 1.5 × IQR rule?
5. A data set has mean 50 and standard deviation 6. Is 63 an outlier under the rule
   "more than 2 standard deviations from the mean"?
6. A data set is strongly positively skewed. Which measures of location and spread should you
   use?
7. Towns with more swimming pools have more doctors. Does building pools increase the number of
   doctors? Explain.
8. Describe the correlation when points lie close to a line sloping down from left to right.
9. A sleep survey records one value as −4 hours. What should you do with it?
10. Estimate the mean of: 0 ≤ x < 10, f = 5; 10 ≤ x < 20, f = 10; 20 ≤ x < 40, f = 5.
11. A regression line was found from data with x between 20 and 60. Which prediction is more
    reliable: x = 45 or x = 90? Why?
12. For the data in question 3, an 11th value of 13.5 is added. Find the new mean.

### Answers

1. 32 ÷ 10 = **3.2**
2. 10 ÷ 4 = 2.5 people per cm², so 9.2 × 2.5 = **23**
3. x̄ = **8.5**; σ² = 78.5 − 72.25 = 6.25, so **σ = 2.5**
4. IQR = 12; upper limit 42 + 18 = 60. 61 > 60, so **yes**.
5. Limits 50 ± 12, that is 38 and 62. 63 > 62, so **yes**.
6. **Median** and **IQR**: they are not distorted by the long tail.
7. **No.** Correlation does not imply causation. Larger towns have more of both.
8. **Strong negative correlation.**
9. It is impossible, so it is an **error**: correct it if the true value is known, otherwise
   remove it and reduce n.
10. Midpoints 5, 15, 30: Σfx = 25 + 150 + 150 = 325, Σf = 20, so x̄ ≈ **16.25**
11. **x = 45**: it lies inside the data range (interpolation); 90 is extrapolation.
12. (85 + 13.5) ÷ 11 = **8.95** (3 s.f.)

## Where marks are usually lost

- Bar heights read as frequencies on a histogram with unequal class widths.
- The area scale factor not found when the axis is not labelled frequency density.
- Cumulative frequency plotted at class midpoints rather than upper class boundaries.
- Σx² confused with (Σx)², or x̄² not subtracted in the variance.
- Standard deviation updated from the old σ instead of from new n, Σx and Σx².
- Outlier limits not shown, so the conclusion has no support.
- An outlier removed with no reason, when it is a genuine value.
- Comparisons made with numbers but no context, or with two measures of location and none
  of spread.
- "Causes" written when the data only show correlation.
- Predictions from a regression line trusted outside the data range.

## Related notes

Data you present usually come from a sample, so revise the
[statistical sampling revision notes](/resources/aqa-a-level-mathematics-statistical-sampling-revision-notes/)
alongside these.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.13, L: Data presentation and interpretation.
