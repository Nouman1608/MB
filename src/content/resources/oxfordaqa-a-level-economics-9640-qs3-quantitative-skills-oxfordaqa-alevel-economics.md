---
title: "OxfordAQA A-level Economics (9640): QS3 Understand and use the terms mean, median and relevant quantiles"
resourceType: "study-guides"
subject: "economics"
level: ["a-levels"]
topic: "Quantitative skills"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9640"]
syllabusSeries: "First teaching September 2020, first AS exams May/June 2021, first A-level exams May/June 2022"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "quantitative-skills-oxfordaqa-alevel-economics"
    subtopic: "qs3-quantitative-skills-oxfordaqa-alevel-economics"
description: "OxfordAQA 9640 QS3 study guide: combined and weighted means, grouped-data medians and quartiles, percentile ratios and quintile shares for inequality."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into quantitative skill QS3 from section 3.5 of the OxfordAQA International AS and A-level Economics (9640) specification: "understand and use the terms mean, median (for A2 assessments, students will also need to understand and use relevant quantiles)". The specification says the quantitative skills could be assessed in any of the assessments; the quantiles part applies to the A2 units.

The broader [ratios, percentages, mean, median and quantiles guide](/resources/oxfordaqa-a-level-economics-ratios-percentages-mean-median-and-quantiles/) shows how to find the mean and median of a list and of a simple frequency table, and quartiles of a short list. This page moves on to the data economics actually uses: averages of averages, weighted means, grouped income data, percentile ratios and income shares, and what happens to each measure when incomes change. All figures are invented; "cu" means currency units. Condense the page with the [QS3 revision notes](/resources/oxfordaqa-a-level-economics-9640-qs3-quantitative-skills-oxfordaqa-alevel-economics-revision-notes/) and test yourself with the [QS3 practice questions](/resources/oxfordaqa-a-level-economics-9640-qs3-quantitative-skills-oxfordaqa-alevel-economics-practice/).

## The economist's averages

Many headline statistics are means, even when they are not called that. GDP per capita (listed in 3.2.1.2 as a macroeconomic indicator) is total output divided by population: the mean output per person. Average earnings in a news report are usually a mean. Median income is the income of the person in the middle when everyone is lined up from poorest to richest. Because income distributions have a long tail of very high incomes, the mean is usually above the median.

## 1. Combining means: weight by size

You cannot average two averages unless the groups are the same size.

### Worked example 1

Region X has 2 million people with a mean income of 30,000 cu. Region Y has 3 million people with a mean income of 20,000 cu.

```
Total income X = 2m × 30,000 = 60,000m cu
Total income Y = 3m × 20,000 = 60,000m cu
Combined mean  = 120,000m / 5m = 24,000 cu
```

The simple average of the two means, 25,000 cu, is wrong because Region Y has more people. Always go back to totals.

## 2. Weighted means

When values matter unequally, weight each by its importance. The average price actually paid in a market is weighted by quantity.

### Worked example 2

A town's market sells 300 kg of rice at 2.00 cu per kg, 500 kg at 2.40 cu and 200 kg at 3.00 cu.

```
Total spending = 300(2.00) + 500(2.40) + 200(3.00) = 600 + 1,200 + 600 = 2,400 cu
Total quantity = 1,000 kg
Weighted mean price = 2,400 / 1,000 = 2.40 cu per kg
Unweighted mean of the three prices = (2.00 + 2.40 + 3.00)/3 = 2.47 cu
```

The weighted mean is lower because most rice is sold at the middle price and least at the highest. The same idea underlies weighted price indices (QS5).

## 3. Grouped data

Income and earnings data usually arrive in classes. You cannot find the exact mean or median, but you can estimate them.

### Worked example 3

Weekly earnings of 200 workers in an industry:

| Weekly earnings (cu) | Workers | Cumulative frequency | Midpoint | Midpoint × workers |
|---|---|---|---|---|
| 0 to under 200 | 30 | 30 | 100 | 3,000 |
| 200 to under 400 | 60 | 90 | 300 | 18,000 |
| 400 to under 600 | 50 | 140 | 500 | 25,000 |
| 600 to under 800 | 35 | 175 | 700 | 24,500 |
| 800 to under 1,200 | 25 | 200 | 1,000 | 25,000 |
| Total | 200 | | | 95,500 |

**Estimated mean.** Assume every worker in a class earns the midpoint: 95,500/200 = 477.50 cu.

**Estimated median.** With grouped data, use position n/2 = 100. The cumulative frequency passes 100 in the 400 to 600 class. Interpolate, assuming workers are spread evenly through the class:

```
Median = 400 + (100 − 90)/50 × 200 = 400 + 40 = 440 cu
```

**Quartiles (A2).** Lower quartile at position 50, upper quartile at position 150:

```
Q1 = 200 + (50 − 30)/60 × 200 = 266.67 cu
Q3 = 600 + (150 − 140)/35 × 200 = 657.14 cu
IQR = 657.14 − 266.67 = 390.48 cu
```

The mean (477.50) is above the median (440), so the distribution is positively skewed: the long top class, up to 1,200, pulls the mean up.

**Why "estimate".** Both methods assume something about the spread within each class. If most workers in the top class actually earn close to 800, the true mean is lower than 477.50.

## 4. Percentile ratios

A **percentile ratio** compares an income near the top with one near the bottom. Using the same data:

```
10th percentile, position 20:   0 + (20/30) × 200 = 133.33 cu
90th percentile, position 180:  800 + (180 − 175)/25 × 400 = 880 cu
90:10 ratio = 880 / 133.33 = 6.6
```

A worker at the 90th percentile earns 6.6 times as much as one at the 10th. The ratio ignores what happens above the 90th percentile and below the 10th, so it is not affected by a handful of extreme incomes.

## 5. Quantile shares and the Lorenz curve

Section 3.3.5.1 lists "Lorenz curve and Gini coefficients" and says students will be expected to interpret measures of inequality including the Gini coefficient, but not to calculate it. Quantile shares are the data a Lorenz curve is drawn from.

### Worked example 4

Country Z's households are split into fifths (quintiles) from poorest to richest. Their shares of total income are 6%, 10%, 15%, 23% and 46%.

| Cumulative share of households | 20% | 40% | 60% | 80% | 100% |
|---|---|---|---|---|---|
| Cumulative share of income | 6% | 16% | 31% | 54% | 100% |

- The poorest 40% receive 16% of income; with perfect equality they would receive 40%.
- The richest fifth receives 46/6 ≈ 7.7 times the share of the poorest fifth.
- Plotting the cumulative pairs gives the Lorenz curve. The further it sags below the 45° line of equality, the higher the Gini coefficient. A Gini coefficient of 0 means perfect equality and 1 means one household receives all income.

## 6. How the measures respond to change

| Change | Mean | Median | 90:10 ratio |
|---|---|---|---|
| Every income rises by 10% | Rises 10% | Rises 10% | Unchanged |
| Every income rises by the same 100 cu | Rises 100 cu | Rises 100 cu | Falls |
| One very rich household moves in | Rises noticeably | Barely changes | Unchanged or slightly changed |
| Incomes below the median rise | Rises | May not change | Falls |

For example, if the 10th and 90th percentiles are 15,000 and 75,000 cu, the ratio is 5. A flat payment of 10,000 cu to everyone makes them 25,000 and 85,000, and the ratio falls to 3.4. A 10% rise for everyone leaves the ratio at 5.

## Common mistakes

- Averaging two means without weighting by group size.
- Taking the median of grouped data as the midpoint of the middle class without interpolating.
- Forgetting to build the cumulative frequency column first.
- Calling a grouped-data estimate exact.
- Reading a quintile share of 46% as "the richest 46% of people".
- Trying to calculate a Gini coefficient when the specification asks you to interpret it.

## Exam technique

- **Calculate** a grouped median or quartile: show the position, the class, and the interpolation line.
- **Estimate**: state the assumption (midpoints, or even spread within the class).
- **Explain** why the mean exceeds the median: refer to skew and to high values in the data.
- **Assess** a claim about inequality: use more than one measure, such as a quintile share and a percentile ratio, and say what each leaves out.

## Where next

Practise with the [QS3 practice questions](/resources/oxfordaqa-a-level-economics-9640-qs3-quantitative-skills-oxfordaqa-alevel-economics-practice/) and condense with the [QS3 revision notes](/resources/oxfordaqa-a-level-economics-9640-qs3-quantitative-skills-oxfordaqa-alevel-economics-revision-notes/). For the economics of inequality, see the [poverty, inequality and redistribution guide](/resources/oxfordaqa-a-level-economics-poverty-inequality-and-government-redistribution/).

## Official syllabus

OxfordAQA International AS and A-level Economics (9640), section 3.5 Quantitative skills, QS3: understand and use the terms mean, median (for A2 assessments, students will also need to understand and use relevant quantiles). First teaching September 2020; first International AS exams May/June 2021; first International A-level exams May/June 2022. Published by OxfordAQA.
