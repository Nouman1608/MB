---
title: "AQA A-Level Mathematics: L: Data presentation and interpretation (7357)"
seoTitle: "AQA A-Level Maths 7357 Data Presentation Study Guide"
resourceType: "study-guides"
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
description: "Study guide to AQA A-Level Maths Section L: histograms, scatter diagrams, standard deviation, outliers and data cleaning, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section L: Data presentation and interpretation** (content references L1
to L4) of the **AQA A-level Mathematics (7357) specification**, version 1.3, for A-level exams
from June 2018 onwards. The specification lists Section L under **Paper 3**, which also assesses
any Paper 1 content. A calculator is required in every 7357 paper, and the specification says
you must be able to use calculator technology to compute summary statistics for Sections K to O.

Use it with the [Data presentation revision notes](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation-revision-notes/)
and the [Data presentation practice questions](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) lists every topic, the
[printable checklist](/checklists/aqa/a-level/mathematics/) lets you tick off outcomes, and the
free [10-minute diagnostics](/diagnostics/) show where to start.

## What Section L covers

| Ref | What you must be able to do |
|---|---|
| L1 | Interpret diagrams for single-variable data, understanding that area in a histogram represents frequency; connect to probability distributions |
| L2 | Interpret scatter diagrams and regression lines for bivariate data, including diagrams with distinct sections of the population; informal interpretation of correlation; correlation does not imply causation (calculations involving regression lines are excluded) |
| L3 | Interpret measures of central tendency and variation, extending to standard deviation; calculate standard deviation, including from summary statistics |
| L4 | Recognise and interpret possible outliers; select or critique data presentation techniques; clean data, including dealing with missing data, errors and outliers |

## L1: Diagrams for single-variable data

### Histograms: area represents frequency

A histogram shows grouped continuous data. The classes can have different widths, so the
height of a bar is **frequency density**, not frequency:

```
frequency density = frequency ÷ class width
frequency         = frequency density × class width  (bar area)
```

If the vertical axis is labelled frequency density, area equals frequency exactly. If a diagram
is drawn to some other scale, area is still **proportional** to frequency, so you find the scale
factor first.

### Worked example 1

The times, t minutes, that 70 people took to finish a puzzle are shown.

| Time t (min) | 0 ≤ t < 10 | 10 ≤ t < 15 | 15 ≤ t < 20 | 20 ≤ t < 30 | 30 ≤ t < 50 |
|---|---|---|---|---|---|
| Frequency | 8 | 14 | 20 | 18 | 10 |

(a) Find the frequency density of each class. (b) Estimate how many people took between 12 and
25 minutes.

**(a)** Divide each frequency by its class width:

```
8 ÷ 10 = 0.8    14 ÷ 5 = 2.8    20 ÷ 5 = 4.0    18 ÷ 10 = 1.8    10 ÷ 20 = 0.5
```

**(b)** Take the area of the histogram between 12 and 25. This assumes values are spread evenly
within each class.

```
12 to 15:  3 × 2.8 = 8.4
15 to 20:  5 × 4.0 = 20
20 to 25:  5 × 1.8 = 9
Total = 37.4, so about 37 people
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--04-sampling-methods.webp" width="900" height="1250" alt="Three grids of the same 60 numbered people, in 6 rows of 10, with three groups shown by shape: group A circles (24), group B squares (20) and group C diamonds (16). Systematic sampling picks every 4th person from a random start of 3, giving 15 people (3, 7, 11 up to 59); the risk is a repeating pattern in the list. Stratified sampling picks 6, 5 and 4 people at random from groups A, B and C, in proportion to group size, again 15 people. Cluster sampling picks 2 of the 6 rows at random and asks everyone in them, 20 people. A note says quota sampling is like stratified sampling but the people asked are not chosen at random." loading="lazy">
  <figcaption>How each method picks its sample; quota is stratified without random selection.</figcaption>
</figure>


### Worked example 2: a histogram drawn to a scale

On a histogram of the same data, the bar for 15 ≤ t < 20 is 2 cm wide and 8 cm tall. The bar for
20 ≤ t < 30 is 3.6 cm tall. Find the frequency of that class without using the table.

```
Bar for 15-20: area = 2 × 8 = 16 cm², representing 20 people
So 1 cm² represents 20 ÷ 16 = 1.25 people
A 5-minute class is 2 cm wide, so the 10-minute class is 4 cm wide
Bar for 20-30: area = 4 × 3.6 = 14.4 cm²
Frequency = 14.4 × 1.25 = 18
```

This matches the table.

### Box plots and cumulative frequency diagrams

A **box plot** shows the minimum, Q₁, median, Q₃ and maximum, with possible outliers often
plotted as crosses. Read off the median and IQR = Q₃ − Q₁, and judge skew:

- median closer to Q₁ and a long upper whisker: **positive skew**
- median central, whiskers similar: roughly **symmetrical**
- median closer to Q₃ and a long lower whisker: **negative skew**

A **cumulative frequency diagram** plots running totals against **upper class boundaries**.
Read the median at half the total frequency and the quartiles at a quarter and three-quarters.

### Connecting histograms to probability distributions

Divide every frequency by the total and the bar areas become **relative frequencies** that add
to 1. Area over an interval then estimates the probability that a randomly chosen value lies
in it. From Worked example 1:

```
P(15 ≤ t < 20) ≈ 20/70 = 0.286 (3 s.f.)
P(t ≥ 20)     ≈ (18 + 10)/70 = 0.4
```

A roughly symmetrical, bell-shaped histogram suggests a Normal model; Section N of the
specification links the Normal distribution back to histograms, mean and standard deviation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--01-histogram-area.webp" width="900" height="870" alt="A histogram of 70 puzzle times with unequal class widths. Bar heights are frequency densities: 0.8 for 0 to 10 minutes (frequency 8), 2.8 for 10 to 15 (14), 4.0 for 15 to 20 (20), 1.8 for 20 to 30 (18) and 0.5 for 30 to 50 (10). Area equals frequency, so the bar areas add to 70. The part of the histogram between 12 and 25 minutes is shaded: 3 times 2.8 is 8.4, 5 times 4.0 is 20 and 5 times 1.8 is 9, giving 37.4, so about 37 people, assuming times are spread evenly within each class." loading="lazy">
  <figcaption>Frequency = frequency density times class width, so areas add up to the total frequency.</figcaption>
</figure>


## L2: Scatter diagrams, correlation and regression lines

A **scatter diagram** plots pairs (x, y). Describe what you see in words:

- **direction**: positive correlation (y tends to rise as x rises), negative correlation (y tends
  to fall), or no correlation
- **strength**: strong if points lie close to a straight line, weak if widely scattered
- anything unusual: a point far from the pattern or separate clusters

A **regression line of y on x** is used to predict y from x. Calculations involving regression
lines are excluded, so the skill is interpretation:

- The **gradient** is the estimated change in y for each increase of 1 in x, in context.
- Predictions are more reliable **within** the range of the x data (interpolation) than outside
  it (extrapolation), and more reliable when the correlation is strong.
- Use a y on x line to predict y from x, not the other way round.

### Worked example 3

For 15 days at a garden centre, a manager records the hours of sunshine, h, and the number of
bags of compost sold, c. The values of h range from 2 to 11. The regression line of c on h is
c = 14 + 3.5h, and the scatter diagram shows strong positive correlation.

(a) Interpret the 3.5. (b) Comment on using the line for a day with 15 hours of sunshine.
(c) The manager says sunshine causes people to buy compost. Comment.

**(a)** For each extra hour of sunshine, about 3.5 more bags of compost are sold.

**(b)** 15 hours is outside the observed range of 2 to 11 hours. That is extrapolation, so the
linear pattern may not continue and the prediction is unreliable.

**(c)** Correlation does not imply causation. A third factor, such as the season, could raise
both: spring brings more sunshine and more gardening.

### Distinct sections of the population

A scatter diagram may contain separate clusters, for example data from two regions or two
species. Then:

- one line fitted to all the points can show a correlation that does not exist within either
  group, or hide one that does
- it is usually better to describe, or model, each group separately

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--06-two-groups-one-line.webp" width="900" height="910" alt="A scatter diagram of journey time in minutes against distance in kilometres for 6 cyclists (circles) and 6 van drivers (squares). Both groups rise left to right but the cyclists form a steeper band. A single dashed line fitted to all 12 points predicts about 17 minutes for 4 km, but the cyclist took 21.5 minutes and the van driver 14 minutes, so the line matches neither. The better approach is a separate line for each type of courier." loading="lazy">
  <figcaption>One line through two distinct groups matches neither, so fit and use a separate line for each group.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--07-extrapolation.webp" width="900" height="818" alt="A graph of the regression line y = 78 minus 2.4x for resting heart rate against weekly training hours. The data covered 2 to 10 hours, shown as a shaded band; the line is solid there and dashed outside. At 5 hours the prediction is 66 beats per minute, which is interpolation and reasonably reliable. At 30 hours the line gives 6 beats per minute, which is not credible, so predicting outside the data range is unreliable. The intercept 78 at x = 0 also lies outside the data." loading="lazy">
  <figcaption>Predictions are reliable inside the range of the data and unreliable outside it.</figcaption>
</figure>


## L3: Measures of central tendency and variation

**Central tendency**: mean, median and mode. **Variation**: range, interquartile range,
variance and standard deviation.

Appendix B of the specification lists the mean formula among those you must recall:

```
x̄ = Σx / n = Σfx / Σf
```

The variance is the mean of the squared deviations from the mean. The standard deviation is its
square root:

```
σ² = Σ(x − x̄)² / n = Σx²/n − x̄²        σ = √(σ²)
```

The specification's notation uses σ for a population standard deviation and s for a sample
standard deviation. Calculators usually show both σx (divisor n) and sx (divisor n − 1), which
are close for large n. This page uses the divisor n; follow the convention each question uses.

### Worked example 4: standard deviation from summary statistics

The lengths, x cm, of 20 leaves give n = 20, Σx = 340 and Σx² = 6100.

```
x̄  = 340 / 20 = 17 cm
σ² = 6100/20 − 17² = 305 − 289 = 16
σ  = 4 cm
```

With the divisor n − 1: s² = (6100 − 20 × 17²)/19 = 320/19, so s = 4.10 cm (3 s.f.).

Add a 21st leaf of length 23 cm by updating the sums:

```
n = 21,  Σx = 363,  Σx² = 6100 + 23² = 6629
x̄ = 363/21 = 17.3 cm (3 s.f.)
σ² = 6629/21 − (363/21)² = 16.87...
σ  = 4.11 cm (3 s.f.)
```

### Worked example 5: grouped data

Estimate the mean and standard deviation of the puzzle times in Worked example 1. Use class
midpoints: 5, 12.5, 17.5, 25 and 40.

```
Σf   = 70
Σfx  = 8(5) + 14(12.5) + 20(17.5) + 18(25) + 10(40) = 1415
Σfx² = 8(25) + 14(156.25) + 20(306.25) + 18(625) + 10(1600) = 35 762.5
x̄   = 1415/70 = 20.2 minutes (3 s.f.)
σ²  = 35 762.5/70 − (1415/70)² = 102.27...
σ   = 10.1 minutes (3 s.f.)
```

These are **estimates** because midpoints replace the actual values. Calculator statistics
mode, with midpoints as x and a frequency column, gives the same values.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--05-sample-variability.webp" width="900" height="955" alt="Three dot plots of one-way commuting times in minutes. Analyst A's random sample of 8 (18, 22, 25, 27, 30, 35, 38, 41) has mean 29.5. Analyst B's random sample of 8 (15, 17, 19, 20, 21, 24, 26, 33) has mean 21.9. Together the 16 values have mean 25.7. Triangles mark each mean. Both samples came from a fair method, so the 7.6 minute gap is sampling variability; combining the samples, or using larger ones, reduces it." loading="lazy">
  <figcaption>Two fair random samples from the same firm give different means, so samples are only estimates.</figcaption>
</figure>


### Interpreting the measures

- Mean and standard deviation use every value: best for roughly symmetrical data.
- Median and IQR resist outliers and skew: best for skewed data.
- When you compare two data sets, compare **one measure of location and one measure of spread**,
  each in the context of the question: "Group A took longer on average, and their times were
  less consistent."

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--02-variance-squares.webp" width="900" height="1058" alt="Eight data values 2, 4, 4, 4, 5, 5, 7 and 9 are shown on a number line with their distances from the mean 5: minus 3, minus 1, minus 1, minus 1, 0, 0, plus 2 and plus 4. A square is drawn on each distance, with areas 9, 1, 1, 1, 0, 0, 4 and 16, which total 32. The mean of these areas is 32 divided by 8, which is 4: that is the variance. Its square root, the side of a square of area 4, is the standard deviation 2. The shortcut sum of x squared over n minus the mean squared gives 232 over 8 minus 25, which is also 4." loading="lazy">
  <figcaption>Variance is the mean of the squared distances from the mean; the standard deviation is the side of that mean square.</figcaption>
</figure>


## L4: Outliers, data cleaning and choosing diagrams

### Possible outliers

An outlier is a value that lies far from the rest of the data. Use the rule a question gives.
Two common rules are:

- below Q₁ − 1.5 × IQR or above Q₃ + 1.5 × IQR
- more than 2 (or 3) standard deviations from the mean

### Worked example 6

The masses, in grams, of 12 apples from one orchard are:

138, 142, 144, 146, 147, 149, 150, 151, 153, 155, 160, 210

(a) Show that 210 is an outlier using the 1.5 × IQR rule. (b) The 210 g apple turns out to be a
different variety that was mixed into the batch. Clean the data and find the new mean and
standard deviation.

**(a)** Median = (149 + 150)/2 = 149.5. Taking the median of each half, Q₁ = (144 + 146)/2 = 145
and Q₃ = (153 + 155)/2 = 154, so IQR = 9.

```
Upper limit = 154 + 1.5 × 9 = 167.5
210 > 167.5, so 210 is an outlier
```

Other quartile methods change Q₁ and Q₃ slightly, but 210 is still well above the limit.

**(b)** The apple is not from the population being studied, so remove it. For the other 11
values, Σx = 1635 and Σx² = 243 405.

```
x̄ = 1635/11 = 149 g (3 s.f.)
σ = √(243 405/11 − (1635/11)²) = 5.91 g (3 s.f.)
```

With 210 included, σ = 17.9 g: one extreme value tripled the standard deviation.

### Cleaning data

Real data sets often need cleaning before you analyse them.

- **Missing data**: a blank or a code such as "n/a". Leave it out of calculations, say so, and
  never replace it with 0.
- **Errors**: impossible values (a negative mass) or obvious typing slips. Correct them if the
  true value is known; otherwise remove them.
- **Outliers**: investigate first. Remove one only if it is an error or does not belong to the
  population; a genuine extreme value stays.

### Selecting or critiquing a presentation technique

| Data | Suitable diagrams |
|---|---|
| Continuous, grouped, unequal classes | Histogram (frequency density), cumulative frequency diagram |
| Comparing two or more distributions | Box plots on the same scale |
| Bivariate (pairs of values) | Scatter diagram |
| Categorical | Bar chart, pie chart |

When you critique a diagram, look for frequency plotted instead of frequency density, different
scales on diagrams being compared, cumulative frequency plotted at midpoints, and one trend
line drawn through separate groups.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--03-outlier-fence.webp" width="900" height="1103" alt="A dot plot and box plot of 12 apple masses in grams: 138, 142, 144, 146, 147, 149, 150, 151, 153, 155, 160 and 210. The lower quartile is 145, the upper quartile 154 and the interquartile range 9. The outlier fences are 145 minus 13.5, which is 131.5, and 154 plus 13.5, which is 167.5. The value 210 lies beyond the upper fence, so it is marked with a cross as a possible outlier, and the upper whisker stops at 160, the largest value inside the fence. A second chart compares standard deviations: 17.9 grams with all 12 values and 5.91 grams with 210 left out. The figure warns that a value should be removed only if it is an error or does not belong to the population." loading="lazy">
  <figcaption>A value beyond Q3 + 1.5 x IQR is a possible outlier, but it is removed only if it is an error or not in the population.</figcaption>
</figure>


## Common errors

- Reading the height of a histogram bar as a frequency when class widths differ.
- Skipping the area scale factor on a histogram not labelled frequency density.
- Trusting a prediction without checking that x lies inside the data range.
- Saying one variable causes another because they are correlated.
- Confusing Σx² with (Σx)², or forgetting to subtract x̄².
- Recomputing a standard deviation from the old σ after adding or removing a value, instead of
  updating n, Σx and Σx².
- Removing an outlier just because it is large.

## Where to go next

Test yourself with the [practice questions](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation-practice/)
and recap with the [revision notes](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation-revision-notes/).
Section K, where your data come from, is in the
[statistical sampling guide](/resources/aqa-a-level-mathematics-statistical-sampling/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.13, L: Data presentation and interpretation.
