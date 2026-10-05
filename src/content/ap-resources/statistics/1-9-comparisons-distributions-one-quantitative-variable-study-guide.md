---
resourceId: "mb-ap-stats-1.9-study-guide"
title: "Comparisons of the Distributions for One Quantitative Variable: Study Guide (Statistics 1.9)"
description: "Learn to compare two or more distributions of a quantitative variable using dot plots, stemplots, histograms and boxplots, justify claims in context, and use z-scores for relative position."
course: "statistics"
unit: 1
topics: ["1.9"]
resourceType: "study-guide"
prerequisites:
  - "Describing shape, centre, variability and unusual features of one distribution (Topic 1.6)"
  - "Five-number summary, IQR, standard deviation and the outlier rules (Topics 1.7 and 1.8)"
prerequisiteResources: ["mb-ap-stats-1.8-study-guide"]
learningObjectives:
  - "Compare shape, centre, variability, outliers, clusters and gaps of two or more distributions shown on dot plots, stemplots or histograms"
  - "Compare centre, variability, outliers and skewness using parallel boxplots, and know what a boxplot cannot show"
  - "Use summary statistics such as the median, IQR, mean and standard deviation as evidence in a comparison"
  - "Justify or challenge a claim about a variable in context using several graphical representations"
  - "Calculate a z-score from a population mean and standard deviation, or from sample statistics when the parameters are unknown"
  - "Use z-scores to compare the relative positions of values within one distribution or across different distributions"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use one-variable statistics for each group separately. When you only have a sample, use x̄ and Sx for a z-score. Round z-scores to 2 decimal places."
related: ["mb-ap-stats-1.9-revision-notes", "mb-ap-stats-1.9-practice", "mb-ap-stats-1.9-checklist"]
next: "mb-ap-stats-1.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Compare distributions on the same scale, and cover shape, centre, variability and unusual features (outliers, clusters, gaps)."
  - "Use comparative words (greater than, more spread out) with values and units for both groups, in context."
  - "Boxplots show centre, spread, skewness and outliers, but they hide clusters, gaps and the number of values."
  - "A z-score, z = (x − μ) / σ, counts how many standard deviations a value lies above (+) or below (−) the mean."
  - "z-scores have no units, so they let you compare the relative position of values from different distributions."
faqs:
  - question: "Do I have to mention every feature when I compare two distributions?"
    answer: "A full comparison covers shape, centre, variability and any unusual features. If a question asks about only one feature, such as centre, compare that feature carefully, with values for both groups."
  - question: "Can I use a z-score if the distribution is not normal?"
    answer: "Yes. A z-score only measures distance from the mean in standard deviations, so you can calculate it for any distribution. Turning a z-score into a percentage of values needs a normal distribution, which comes in Topic 2.11."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why compare distributions?

Many statistical questions are about differences between groups. Do seedlings grow taller under one lamp than another? Do customers at one café wait longer than at another? To answer, you collect values of the **same quantitative variable** for each group and compare the distributions.

A good comparison does three things:

1. It uses representations drawn **on the same scale**, so that equal distances mean equal amounts.
2. It compares the four main features: **shape, centre, variability** and **unusual features** (outliers, clusters, gaps).
3. It uses **comparative words** ("greater than", "less variable", "more skewed"), gives **values for both groups**, and stays **in context** with units.

Listing two medians side by side is not a comparison. "The median height under Lamp A (24 cm) is 5 cm greater than under Lamp B (19 cm)" is.

## The data set used in this guide

At the fictional Thornbury College greenhouse, 30 seedlings of the same plant were split into two groups of 15. One group grew under Lamp A and the other under Lamp B. After three weeks the height of each seedling was measured, in centimetres. All values are invented for this guide.

- **Lamp A:** 17, 19, 20, 21, 22, 23, 24, 24, 25, 26, 27, 28, 29, 31, 33
- **Lamp B:** 12, 14, 15, 15, 16, 17, 18, 19, 21, 23, 26, 29, 33, 38, 52

Summary statistics (quartiles found by leaving the median out of each half, as in Topic 1.7):

| Lamp | n | Min | Q1 | Median | Q3 | Max | IQR | Mean x̄ | s |
|---|---|---|---|---|---|---|---|---|---|
| A | 15 | 17 | 21 | 24 | 28 | 33 | 7 | 24.60 | 4.50 |
| B | 15 | 12 | 15 | 19 | 29 | 52 | 14 | 23.20 | 10.92 |

All values are in centimetres.

## Which display shows which feature?

Each type of graph is good at showing some features and blind to others.

| Display | Centre | Variability | Shape | Outliers | Clusters and gaps |
|---|---|---|---|---|---|
| Dot plots on a common axis | yes | yes | yes | yes | yes |
| Back-to-back stem-and-leaf plot | yes | yes | yes | yes | yes |
| Histograms on the same scale | yes | yes | yes | yes | yes |
| Parallel (side-by-side) boxplots | yes | yes | skewness or symmetry only | yes | **no** |

A boxplot is drawn from just five numbers (plus any outliers). It cannot show where values bunch together inside the box or along a whisker, so clusters and gaps are hidden. It also does not show how many values there are.

When the groups have different sizes, compare histograms using **relative frequency** (proportion or percentage in each interval), not raw counts. Otherwise the bigger group looks larger in every bar.

## A back-to-back stem-and-leaf plot

In a back-to-back stemplot, the stems run down the middle. Leaves for one group go to the right; leaves for the other go to the left, and are read from the stem outwards.

| Lamp A leaves | Stem | Lamp B leaves |
|---:|:---:|:---|
| 9 7 | 1 | 2 4 5 5 6 7 8 9 |
| 9 8 7 6 5 4 4 3 2 1 0 | 2 | 1 3 6 9 |
| 3 1 | 3 | 3 8 |
| | 4 | |
| | 5 | 2 |

Key: 1 | 2 | 3 means 21 cm for Lamp A and 23 cm for Lamp B.

You can read straight off this display that Lamp A's heights are bunched in the 20s, while Lamp B's are piled up in the teens and trail off to the right. The empty stem 4 shows a **gap**: no Lamp B seedling grew between 39 and 51 cm, and then one grew to 52 cm.

## Parallel boxplots

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="lamps-title lamps-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lamps-title">Parallel boxplots of seedling heights under Lamp A and Lamp B</title>
<desc id="lamps-desc">Two horizontal boxplots on one axis from 10 to 55 centimetres. Lamp A, on top: whisker from 17 to 21, box from 21 to 28 with the median line at 24, whisker from 28 to 33. Lamp B, below: whisker from 12 to 15, box from 15 to 29 with the median line at 19, whisker from 29 to 38, and a separate star at 52 marking an outlier. Lamp A's box is narrower and further right; Lamp B's box is wider and its median sits near the left end of the box.</desc>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<line x1="80" y1="190" x2="575" y2="190" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="190" x2="80" y2="197"/><line x1="135" y1="190" x2="135" y2="197"/><line x1="190" y1="190" x2="190" y2="197"/><line x1="245" y1="190" x2="245" y2="197"/><line x1="300" y1="190" x2="300" y2="197"/><line x1="355" y1="190" x2="355" y2="197"/><line x1="410" y1="190" x2="410" y2="197"/><line x1="465" y1="190" x2="465" y2="197"/><line x1="520" y1="190" x2="520" y2="197"/><line x1="575" y1="190" x2="575" y2="197"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="212">10</text><text x="135" y="212">15</text><text x="190" y="212">20</text><text x="245" y="212">25</text><text x="300" y="212">30</text><text x="355" y="212">35</text><text x="410" y="212">40</text><text x="465" y="212">45</text><text x="520" y="212">50</text><text x="575" y="212">55</text>
</g>
<text x="328" y="238" text-anchor="middle" font-size="14" fill="#1d2b44">Seedling height after three weeks (cm)</text>
<text x="10" y="65" font-size="14" fill="#1d2b44">Lamp A</text>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="157" y1="60" x2="201" y2="60"/><line x1="157" y1="50" x2="157" y2="70"/>
<rect x="201" y="42" width="77" height="36" fill="#ffffff"/>
<line x1="234" y1="42" x2="234" y2="78" stroke-width="3"/>
<line x1="278" y1="60" x2="333" y2="60"/><line x1="333" y1="50" x2="333" y2="70"/>
</g>
<text x="234" y="34" text-anchor="middle" font-size="12" fill="#1d2b44">median 24</text>
<text x="10" y="135" font-size="14" fill="#1d2b44">Lamp B</text>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="102" y1="130" x2="135" y2="130"/><line x1="102" y1="120" x2="102" y2="140"/>
<rect x="135" y="112" width="154" height="36" fill="#ffffff"/>
<line x1="179" y1="112" x2="179" y2="148" stroke-width="3"/>
<line x1="289" y1="130" x2="388" y2="130"/><line x1="388" y1="120" x2="388" y2="140"/>
</g>
<text x="179" y="166" text-anchor="middle" font-size="12" fill="#1d2b44">median 19</text>
<text x="542" y="138" text-anchor="middle" font-size="22" fill="#1d2b44">*</text>
<text x="542" y="112" text-anchor="middle" font-size="12" fill="#1d2b44">52: outlier</text>
</svg>
<figcaption>Figure 1. Heights (cm) of 15 seedlings under each lamp at the fictional Thornbury College greenhouse, on one common scale. Thick line inside each box: median. The star marks the Lamp B outlier at 52 cm (upper fence 29 + 1.5 × 14 = 50 cm). The whisker for Lamp B stops at 38 cm, the largest value that is not an outlier.</figcaption>
</figure>

Reading the boxplots:

- **Centre:** compare the median lines. Lamp A's median (24 cm) is to the right of Lamp B's (19 cm).
- **Variability:** compare box widths (IQR) and overall lengths (range). Lamp B's box is twice as wide.
- **Skewness:** for Lamp B, the median is close to the left end of the box and the right whisker is long, so the distribution is skewed to the right. Lamp A's median sits near the middle of its box and the whiskers are similar in length, so it is roughly symmetric.
- **Outliers:** only Lamp B has one (52 cm).

Notice what the boxplots do **not** show: the gap between 38 and 52 cm, and how tightly Lamp B's heights cluster in the teens. That is why the stemplot and the boxplots together tell a fuller story than either alone.

## Using summary statistics in a comparison

You can include any numerical summary in a comparison: medians, quartiles, IQRs, means, standard deviations, ranges. Choose statistics that suit the shapes. Lamp B is skewed with an outlier, so the **median and IQR** are the fairer pair here (they are resistant). The means (24.60 cm and 23.20 cm) are only 1.4 cm apart because the 52 cm seedling pulls Lamp B's mean up. Lamp B's standard deviation (10.92 cm) is also inflated by that one seedling: without it, s drops to about 7.75 cm.

If both distributions were roughly symmetric with no outliers, comparing means and standard deviations would be fine.

## Z-scores: relative position

Sometimes you want to know how unusual one **individual value** is. Being 9 cm above the mean is remarkable if values usually differ from the mean by 2 cm, but ordinary if they usually differ by 15 cm. A **z-score** (standardised score) measures distance from the mean in units of standard deviations:

**z = (x − μ) / σ**

Here x is the value you want to place, μ is the mean of the whole population and σ is its standard deviation. If you only have a sample, use the sample mean x̄ and sample standard deviation s instead: z = (x − x̄) / s.

- A **positive** z-score means the value is above the mean; a **negative** z-score means it is below.
- z = 0 means the value equals the mean.
- z has **no units**: the units of x − μ and σ cancel. This is what lets you compare values measured on different scales, or values from different groups.

You can also reverse the formula to find the value with a given z-score: **x = μ + zσ**.

Z-scores do not require a particular shape. Using them with the normal distribution to find percentages comes later, in Topic 2.11.

## Worked example 1: comparing the two lamps and judging a claim

**Question.** The greenhouse manager claims: "Seedlings grow taller under Lamp A." Write a complete comparison of the two distributions, then say whether the data support the claim.

1. **Shape.** Lamp A's heights are roughly symmetric (median 24 cm near the middle of the box; leaves spread evenly across the 20s). Lamp B's heights are skewed to the right: most are in the teens, with a long tail up to 38 cm and one very tall seedling.
2. **Centre.** The median height under Lamp A (24 cm) is 5 cm greater than under Lamp B (19 cm).
3. **Variability.** Lamp B's heights are much more variable. Its IQR is 14 cm, twice Lamp A's 7 cm. Its range is 40 cm against 16 cm.
4. **Unusual features.** Lamp B has a potential outlier at 52 cm (beyond the upper fence of 50 cm) and a gap from 39 to 51 cm. Lamp A has no outliers (fences 10.5 cm and 38.5 cm) and no gaps.
5. **Extra evidence.** 13 of the 15 Lamp A seedlings are taller than Lamp B's median of 19 cm. Only 5 of the 15 Lamp B seedlings are taller than Lamp A's median of 24 cm.

**Conclusion.** The data support the claim for a typical seedling: the median height under Lamp A is 5 cm greater, and most Lamp A seedlings are taller than a typical Lamp B seedling. But the claim is not true for every seedling. The tallest seedling of all (52 cm) grew under Lamp B, and Lamp B's results are far less consistent.

**Check.** Every sentence names the variable (height), the groups (lamps) and the units (cm), and uses a comparative word. Whether the lamp *caused* the difference depends on how the seedlings were assigned to the lamps; you will meet that idea in the data-collection topics later in this unit.

## Worked example 2: comparing across different events with population parameters

**Question.** In the fictional Kestrel Valley schools' athletics league, the results for **all** competitors this season are:

- Shot put: μ = 9.20 m, σ = 1.10 m
- 800 m run: μ = 152 s, σ = 9 s

Leila threw 10.85 m and ran 800 m in 138 s. Relative to the league, in which event did she perform better?

1. **Shot put z-score:** z = (10.85 − 9.20) ÷ 1.10 = 1.65 ÷ 1.10 = **1.50**. Her throw was 1.50 standard deviations above the league mean.
2. **800 m z-score:** z = (138 − 152) ÷ 9 = −14 ÷ 9 = **−1.56** (to 2 d.p.). Her time was 1.56 standard deviations below the league mean.
3. **Think about direction.** In the shot put, a longer throw is better. In a race, a **shorter** time is better. So a negative z-score for the 800 m is a good result.
4. **Compare sizes.** Her run was 1.56 standard deviations better than the mean; her throw was 1.50 standard deviations better.

**Conclusion.** Relative to the league, Leila's 800 m run was very slightly more impressive than her shot put, although the two are close.

**Check.** You could not compare 10.85 m with 138 s directly: the units differ and "better" points in opposite directions. Z-scores solve both problems. As a reverse check, the time with z = 1.2 would be 152 + 1.2 × 9 = 162.8 s, a slower-than-average run, as expected for a positive z in a race.

## Worked example 3: relative position within two samples

**Question.** The tallest seedling under Lamp A is 33 cm. A seedling under Lamp B is 38 cm. Which seedling is more unusually tall **compared with its own group**?

The data are samples, so use x̄ and s.

1. Lamp A: z = (33 − 24.60) ÷ 4.5008 = 8.40 ÷ 4.5008 ≈ **1.87**.
2. Lamp B: z = (38 − 23.20) ÷ 10.9231 = 14.80 ÷ 10.9231 ≈ **1.35**.

**Conclusion.** The 33 cm seedling is 1.87 standard deviations above its group mean, compared with 1.35 for the 38 cm seedling. So the 33 cm seedling is more unusually tall within its own group, even though it is the shorter plant. Lamp A's heights vary much less, so 33 cm stands out more there.

**Within one group.** z-scores also compare values inside a single distribution. In Lamp B, the 12 cm seedling has z = (12 − 23.20) ÷ 10.9231 ≈ **−1.03**. So the 38 cm seedling (z ≈ 1.35) lies further from the Lamp B mean than the 12 cm seedling does, even though both look "extreme" on the stemplot.

## Common misconceptions

- **"A wider box means more data."** Every box holds about half the values of its group. A wider box means more **variability**, not more data.
- **"Boxplots show everything."** They hide clusters, gaps and sample size. Use a dot plot, stemplot or histogram if those features matter.
- **Comparing on different scales.** Two graphs with different axes can make similar groups look different. Always use a common scale.
- **Raw counts for groups of different sizes.** Compare proportions (relative frequencies) instead.
- **Listing instead of comparing.** "A: median 24. B: median 19" is two descriptions. Use a comparative word and say which is greater.
- **Forgetting context.** Name the variable, the groups and the units in every sentence.
- **"A negative z-score is a bad result."** It only means below the mean. For times or errors, below the mean is good.
- **"z-scores have the same units as the data."** They have no units.
- **"z-scores only work for normal distributions."** You can calculate them for any distribution.
- **"The group with the higher median beats the other group every time."** A difference in centres describes typical values; individual values can still overlap.

## Where this leads

In Topic 1.10 you return to the investigative question and start to plan how data are collected, which decides whether a difference between groups like the lamps can be generalised or explained by cause. Z-scores return with the normal distribution in Topic 2.11. If you need to revise boxplots first, see the [Topic 1.8 study guide](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-study-guide/); when you are ready, move on to the [Topic 1.10 study guide](/advanced-course-resources/statistics/1-10-investigative-question-revisited-data-collection-study-guide/).

Try the [practice questions](/advanced-course-resources/statistics/1-9-comparisons-distributions-one-quantitative-variable-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-9-comparisons-distributions-one-quantitative-variable-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-9-comparisons-distributions-one-quantitative-variable-checklist/) to consolidate.
