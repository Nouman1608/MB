---
title: "Pearson Edexcel International Advanced Level Mathematics: Models and data summary (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths S1 Data Summary Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Statistical models and the representation and summary of data"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 161
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-mathematical-models-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-representation-and-summary-of-data-edexcel-alevel-maths"
description: "Condensed revision notes on models, histograms, quartiles, variance, coding, outliers and skewness for Pearson Edexcel IAL Mathematics Statistics 1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense Unit S1: Statistics 1, sections 1.1 and 2.1 to 2.4, of the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). The specification states that S1 is an optional unit for IAS and IAL Mathematics and Further Mathematics. For full explanations read the [study guide](/resources/edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary/), then test yourself with the [practice set](/resources/edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary-practice/).

Related pages: the [course hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key definitions and formulas

| Idea | Rule |
|---|---|
| Frequency density | frequency ÷ class width; bar area is proportional to frequency |
| Mean | Σx/n, or Σfx/Σf with class mid-points for grouped data |
| Median, mode | middle ordered value; most frequent value or modal class |
| Range | maximum − minimum |
| IQR | Q3 − Q1 |
| Interpercentile range | difference between two percentiles, such as the 10th and 90th |
| Variance | Σx²/n − (mean)², or Σfx²/Σf − (mean)² |
| Standard deviation | √variance |
| Coding y = (x − a)/b | mean of x = b × (mean of y) + a; SD of x = b × (SD of y) |
| Linear change y = ax + b | mean becomes a × mean + b; SD becomes |a| × SD; variance becomes a² × variance |

The specification lists the mean, standard deviation and interquartile range formulae among those you are expected to know.

## 1.1 Models: the cycle

1. Define the real problem.
2. Make assumptions to simplify it.
3. Build the model and predict.
4. Compare with data.
5. Revise the assumptions and go round again.

When asked to comment on a model, do three things: name an assumption, say why it may fail in this context, and suggest how to improve it. A model gives a prediction, never a certainty.

## 2.1 Diagrams: what to look for

- **Histogram**: unequal widths mean you must use frequency density. To find a frequency from a bar, multiply height by width.
- **Stem and leaf**: ordered leaves, a key, and the same stems for both sides of a back-to-back diagram. Count the leaves to find n.
- **Box plot**: whisker ends, Q1, median and Q3 give the five key values. Outliers are marked separately with a cross.
- **Comparing**: one point about location and one about spread, with numbers and context.

## Method in steps: quartiles, ungrouped

The convention used in the study guide is below. Say which positions you use.

```
position = n/4, n/2, 3n/4
whole number: mean of that value and the next
otherwise: round up and take that value
```

Example: n = 9 gives positions 2.25, 4.5 and 6.75, so Q1, median and Q3 are the 3rd, 5th and 7th values.

## Method in steps: interpolation, grouped

1. Find the position (n/2, n/4, 3n/4, or p% of n).
2. Locate the class using cumulative frequency.
3. Lower boundary + width × (position − cumulative frequency before) / class frequency.

**Worked reminder.** Thirty scores in classes 0–4 (6), 4–6 (9) and 6–12 (15).

```
Mid-points 2, 5, 9
Σfx = 12 + 45 + 135 = 192, so mean = 6.4
Σfx² = 24 + 225 + 1215 = 1464
variance = 1464/30 − 6.4² = 48.8 − 40.96 = 7.84
standard deviation = 2.8
Median: position 15, cumulative 6 then 15, so it sits at the top of 4–6: 6
Q1: position 7.5 in 4–6: 4 + 2 × (7.5 − 6)/9 = 4.33
Q3: position 22.5 in 6–12: 6 + 6 × (22.5 − 15)/15 = 9
```

## Method in steps: variance from a table

**Worked reminder.** Discrete scores x = 1 to 5 with frequencies 4, 7, 9, 6, 4 (n = 30).

```
Σfx = 89, Σfx² = 309
mean = 89/30 = 2.97 (3 s.f.)
variance = 309/30 − (89/30)² = 10.3 − 8.8011 = 1.50 (3 s.f.)
standard deviation = 1.22 (3 s.f.)
Median: values 15 and 16 are both 3 (cumulative 4, 11, 20), so the median is 3
Mode = 3
```

## Method in steps: coding

1. Write the coding in the form y = (x − a)/b, or x = by + a.
2. Find the mean and variance of y from the sums given.
3. Decode: mean of x = b × mean of y + a; SD of x = b × SD of y.
4. Check the size: the answer should look like the original data.

**Worked reminder.** A distance in metres is coded y = (x − 300)/20, giving mean 2.5 and standard deviation 0.8. Then x has mean 20 × 2.5 + 300 = 350 and standard deviation 20 × 0.8 = 16.

## Outliers: the process

The question supplies the rule. Typical wording: a value is an outlier if it is more than 1.5 × IQR above Q3 or below Q1.

**Worked reminder.** Q1 = 22 and Q3 = 34, so IQR = 12.

```
upper limit = 34 + 1.5 × 12 = 52
lower limit = 22 − 18 = 4
```

A reading of 55 is an outlier. A reading of 52 is not, because it is not more than the limit. On the box plot the whisker stops at the largest value inside the limits, and the outlier is marked with a cross.

If the rule involves the mean and standard deviation, such as "more than 2 standard deviations from the mean", apply it exactly as written.

## Skewness

| Type | Tail | Quartiles | Mean against median |
|---|---|---|---|
| Positive | right | Q2 − Q1 < Q3 − Q2 | mean > median |
| Negative | left | Q2 − Q1 > Q3 − Q2 | mean < median |
| Symmetric | none | gaps about equal | about equal |

Quote the numbers that support your choice. These are indicators, not proofs.

## Writing the comment

A short, specific sentence works best. Use this pattern: statistic, comparison, meaning in context.

- "The median time for group A is 12 minutes against 9 for group B, so A typically takes longer."
- "The IQR for B is smaller, so B's times are more consistent."
- "The mean is above the median, which suggests a few long times pull the mean up."

Do not claim a difference is significant: the specification says significance tests are not expected.

## Must-know distinctions

- Mean uses every value; median ignores how extreme the ends are.
- Range and standard deviation are strongly affected by outliers; IQR is much less so.
- Adding a constant shifts location and leaves spread alone; multiplying scales both.
- Variance is in squared units; standard deviation is in the original units.
- Grouped mean and quartiles are estimates, because individual values are lost.
- Frequency density is not frequency.

## Quick self-test

1. A class 8–12 has frequency 18. What is its frequency density?
2. For the values 7, 9, 12, 12, 15, 18, 21, 24, 40, find the median, Q1, Q3 and IQR with the convention above.
3. Using the rule "more than 1.5 × IQR above Q3", is 40 an outlier in question 2?
4. For n = 20, Σx = 240 and Σx² = 3960, find the mean and standard deviation.
5. If y = (x − 300)/20 has mean 2.5 and standard deviation 0.8, find the mean and standard deviation of x.
6. If y = 4x − 3, and x has mean 5 and standard deviation 2, find the mean and standard deviation of y.
7. In 60 observations the class 10–20 has frequency 18 and 24 observations lie below 10. Estimate the median.
8. Q1 = 12, Q2 = 15, Q3 = 24. Describe the skew.
9. A very large value is added to a data set. Which of the mean and the median changes more?
10. Why is a mean found from grouped data only an estimate?
11. After comparing a model's predictions with data, the fit is poor. What should you do?

### Answers

1. 18 ÷ 4 = **4.5**.
2. n = 9: the median is the 5th value **15**, Q1 is the 3rd value **12**, Q3 is the 7th value **21**, IQR = **9**.
3. Upper limit = 21 + 13.5 = 34.5, and 40 > 34.5, so **yes, it is an outlier**.
4. Mean = 240/20 = **12**. Variance = 3960/20 − 144 = 54, so SD = **7.35** (3 s.f.).
5. Mean = **350**, SD = **16**.
6. Mean = 4 × 5 − 3 = **17**, SD = 4 × 2 = **8**.
7. Position 30, with 24 below: 10 + 10 × (30 − 24)/18 = **13.3** (3 s.f.).
8. Q2 − Q1 = 3 and Q3 − Q2 = 9, so **positive skew**.
9. The **mean** changes more; the median moves by at most one position.
10. Each value is replaced by its class **mid-point**, so the exact values are not used.
11. **Refine the assumptions** or the model, then test it against data again.

## Where marks are usually lost

- Giving frequency, not frequency density, as the bar height.
- Using class boundaries, not mid-points, in a grouped mean.
- Forgetting to subtract the square of the mean, or giving variance when asked for standard deviation.
- Decoding the mean but not the standard deviation, or adding a to the standard deviation.
- Stopping the whisker at the outlier, or forgetting to mark outliers on the plot.
- Comparing two data sets with one statistic only, or with no context.
- Describing skew without quoting any numbers.
- Applying an outlier rule other than the one in the question.
- Quoting a model's assumptions without saying why they might fail here.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited: Unit S1: Statistics 1, sections 1.1 and 2.1 to 2.4.
