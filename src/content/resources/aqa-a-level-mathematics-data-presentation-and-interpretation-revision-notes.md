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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--01-histogram-area.webp" width="900" height="870" alt="A histogram of 70 puzzle times with unequal class widths. Bar heights are frequency densities: 0.8 for 0 to 10 minutes (frequency 8), 2.8 for 10 to 15 (14), 4.0 for 15 to 20 (20), 1.8 for 20 to 30 (18) and 0.5 for 30 to 50 (10). Area equals frequency, so the bar areas add to 70. The part of the histogram between 12 and 25 minutes is shaded: 3 times 2.8 is 8.4, 5 times 4.0 is 20 and 5 times 1.8 is 9, giving 37.4, so about 37 people, assuming times are spread evenly within each class." loading="lazy">
  <figcaption>Frequency = frequency density times class width, so areas add up to the total frequency.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--04-sampling-methods.webp" width="900" height="1250" alt="Three grids of the same 60 numbered people, in 6 rows of 10, with three groups shown by shape: group A circles (24), group B squares (20) and group C diamonds (16). Systematic sampling picks every 4th person from a random start of 3, giving 15 people (3, 7, 11 up to 59); the risk is a repeating pattern in the list. Stratified sampling picks 6, 5 and 4 people at random from groups A, B and C, in proportion to group size, again 15 people. Cluster sampling picks 2 of the 6 rows at random and asks everyone in them, 20 people. A note says quota sampling is like stratified sampling but the people asked are not chosen at random." loading="lazy">
  <figcaption>How each method picks its sample; quota is stratified without random selection.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--06-two-groups-one-line.webp" width="900" height="910" alt="A scatter diagram of journey time in minutes against distance in kilometres for 6 cyclists (circles) and 6 van drivers (squares). Both groups rise left to right but the cyclists form a steeper band. A single dashed line fitted to all 12 points predicts about 17 minutes for 4 km, but the cyclist took 21.5 minutes and the van driver 14 minutes, so the line matches neither. The better approach is a separate line for each type of courier." loading="lazy">
  <figcaption>One line through two distinct groups matches neither, so fit and use a separate line for each group.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--07-extrapolation.webp" width="900" height="818" alt="A graph of the regression line y = 78 minus 2.4x for resting heart rate against weekly training hours. The data covered 2 to 10 hours, shown as a shaded band; the line is solid there and dashed outside. At 5 hours the prediction is 66 beats per minute, which is interpolation and reasonably reliable. At 30 hours the line gives 6 beats per minute, which is not credible, so predicting outside the data range is unreliable. The intercept 78 at x = 0 also lies outside the data." loading="lazy">
  <figcaption>Predictions are reliable inside the range of the data and unreliable outside it.</figcaption>
</figure>


## L3: Location and spread

### Method: standard deviation from summary statistics

1. x̄ = Σx ÷ n.
2. σ² = Σx²/n − x̄². Check it is positive.
3. σ = √σ². Round to 3 s.f. at the end only.
4. If values are added or removed, update **n, Σx and Σx²** first, then recompute.

**Reminder.** n = 8, Σx = 96, Σx² = 1224. Then x̄ = 12, σ² = 153 − 144 = 9 and σ = 3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--02-variance-squares.webp" width="900" height="1058" alt="Eight data values 2, 4, 4, 4, 5, 5, 7 and 9 are shown on a number line with their distances from the mean 5: minus 3, minus 1, minus 1, minus 1, 0, 0, plus 2 and plus 4. A square is drawn on each distance, with areas 9, 1, 1, 1, 0, 0, 4 and 16, which total 32. The mean of these areas is 32 divided by 8, which is 4: that is the variance. Its square root, the side of a square of area 4, is the standard deviation 2. The shortcut sum of x squared over n minus the mean squared gives 232 over 8 minus 25, which is also 4." loading="lazy">
  <figcaption>Variance is the mean of the squared distances from the mean; the standard deviation is the side of that mean square.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--03-outlier-fence.webp" width="900" height="1103" alt="A dot plot and box plot of 12 apple masses in grams: 138, 142, 144, 146, 147, 149, 150, 151, 153, 155, 160 and 210. The lower quartile is 145, the upper quartile 154 and the interquartile range 9. The outlier fences are 145 minus 13.5, which is 131.5, and 154 plus 13.5, which is 167.5. The value 210 lies beyond the upper fence, so it is marked with a cross as a possible outlier, and the upper whisker stops at 160, the largest value inside the fence. A second chart compares standard deviations: 17.9 grams with all 12 values and 5.91 grams with 210 left out. The figure warns that a value should be removed only if it is an error or does not belong to the population." loading="lazy">
  <figcaption>A value beyond Q3 + 1.5 x IQR is a possible outlier, but it is removed only if it is an error or not in the population.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--05-sample-variability.webp" width="900" height="955" alt="Three dot plots of one-way commuting times in minutes. Analyst A's random sample of 8 (18, 22, 25, 27, 30, 35, 38, 41) has mean 29.5. Analyst B's random sample of 8 (15, 17, 19, 20, 21, 24, 26, 33) has mean 21.9. Together the 16 values have mean 25.7. Triangles mark each mean. Both samples came from a fair method, so the 7.6 minute gap is sampling variability; combining the samples, or using larger ones, reduces it." loading="lazy">
  <figcaption>Two fair random samples from the same firm give different means, so samples are only estimates.</figcaption>
</figure>


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
