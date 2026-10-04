---
resourceId: "mb-ap-stats-1.8-study-guide"
title: "Graphical Representations of Summary Statistics: Study Guide (Statistics 1.8)"
description: "Learn to build a five-number summary and a boxplot that shows outliers, read what each part of a boxplot means, and link a distribution's shape to its mean and median."
course: "statistics"
unit: 1
topics: ["1.8"]
resourceType: "study-guide"
prerequisites:
  - "Finding the median, quartiles, IQR and the 1.5 × IQR outlier fences (Topic 1.7)"
  - "Describing shape as symmetric, skewed right or skewed left (Topic 1.6)"
prerequisiteResources: ["mb-ap-stats-1.7-study-guide"]
learningObjectives:
  - "Write the five-number summary of a quantitative data set"
  - "Draw a boxplot on a labelled scale, with whiskers that stop at the most extreme values that are not outliers and outliers marked separately"
  - "Read a boxplot: say what fraction of the data lies in each section and what the box shows"
  - "Use the positions of the mean and the median to describe the shape of a distribution, and predict one from the other"
  - "Explain what a boxplot cannot show, such as gaps, clusters and the number of values"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "A graphing calculator can draw a boxplot that marks outliers separately and one that does not. Choose the one that shows outliers. Quartiles in this guide split the ordered data at the median and leave the median out of both halves when n is odd."
related: ["mb-ap-stats-1.8-revision-notes", "mb-ap-stats-1.8-practice", "mb-ap-stats-1.8-checklist"]
next: "mb-ap-stats-1.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The five-number summary is minimum, Q1, median, Q3, maximum. A boxplot is a picture of it."
  - "The box covers the middle 50% of the data, with a line at the median. Each whisker covers about 25%."
  - "If there are outliers, the whiskers stop at the most extreme values that are not outliers, and each outlier gets its own symbol."
  - "Skewed right: the mean is usually greater than the median. Skewed left: usually smaller. Roughly symmetric: they are close."
  - "A longer section of a boxplot means the values are more spread out there, not that it holds more values."
faqs:
  - question: "Do I have to show outliers on a boxplot?"
    answer: "If the data have outliers, the usual boxplot in this course marks them with a separate symbol and stops the whisker at the most extreme value that is not an outlier. State which outlier rule you used; the 1.5 × IQR rule is the standard choice for boxplots."
  - question: "Can I tell the shape of a distribution from its mean and median alone?"
    answer: "Only as a hint. A mean well above the median suggests skew to the right, and a mean well below suggests skew to the left. It is a tendency, not a rule, so check a graph when you have one."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From five numbers to a picture

In Topic 1.7 you calculated summary statistics. Now you will **draw** them. The most common graph of summary statistics is the **boxplot** (also called a box-and-whisker plot). It is built from five numbers.

The **five-number summary** of a quantitative data set is:

1. the **minimum** (smallest value),
2. the **first quartile, Q1**,
3. the **median**,
4. the **third quartile, Q3**,
5. the **maximum** (largest value).

These five numbers cut the ordered data into four parts. Each part holds about a quarter (25%) of the values. A boxplot shows those four parts on a number line, so you can see the centre, the spread and the shape at a glance.

## The data set used in this guide

A fictional café, the Copper Kettle, recorded how long 15 food deliveries took on one evening. The variable is **delivery time, in minutes**. Ordered from smallest to largest:

**18, 21, 22, 24, 25, 26, 27, 28, 30, 31, 33, 35, 40, 45, 62** (n = 15)

For these data, the mean is x̄ = 467 ÷ 15 ≈ 31.13 minutes.

## How to draw a boxplot

1. **Order the data** and find the five-number summary. With n odd, leave the median out of both halves when you find Q1 and Q3.
2. **Check for outliers** with the 1.5 × IQR rule from Topic 1.7. Find IQR = Q3 − Q1, then the **fences**: Q1 − 1.5 × IQR and Q3 + 1.5 × IQR. Any value beyond a fence is a potential outlier.
3. **Draw a scale.** Use a number line with equal steps that covers every value. Label it with the variable name and the units.
4. **Draw the box** from Q1 to Q3, with a vertical line inside it at the median.
5. **Draw the whiskers.** If there are no outliers, each whisker runs from the box to the minimum or the maximum. If there are outliers, the whisker stops at the **most extreme value that is not an outlier**.
6. **Mark each outlier** with its own symbol, such as an asterisk (✱) or a dot.

You do not draw the fences. They are only a tool for deciding where the whiskers stop.

## Outliers and where the whiskers stop

For the delivery times:

- Median = 8th value = **28 minutes**.
- Lower half (first 7 values): 18, 21, 22, 24, 25, 26, 27, so **Q1 = 24 minutes**.
- Upper half (last 7 values): 30, 31, 33, 35, 40, 45, 62, so **Q3 = 35 minutes**.
- IQR = 35 − 24 = 11 minutes and 1.5 × IQR = 16.5 minutes.
- Fences: 24 − 16.5 = 7.5 minutes and 35 + 16.5 = 51.5 minutes.

No value is below 7.5. One value, 62 minutes, is above 51.5, so it is a potential outlier. The upper whisker stops at **45 minutes**, the largest value that is not an outlier. The lower whisker runs to the minimum, 18 minutes.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="deliv-title deliv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="deliv-title">Dot plot and boxplot of 15 delivery times on the same scale</title>
<desc id="deliv-desc">A horizontal axis from 10 to 70 minutes. In the top row, one dot for each delivery at 18, 21, 22, 24, 25, 26, 27, 28, 30, 31, 33, 35, 40, 45 and 62 minutes. Below it, a boxplot: the box runs from Q1 at 24 to Q3 at 35 minutes with a solid line at the median, 28 minutes. The left whisker runs from 24 down to the minimum, 18. The right whisker runs from 35 up to 45, the largest value that is not an outlier. A dotted line marks the upper fence at 51.5 minutes. An asterisk marks the outlier at 62 minutes. A small triangle under the box marks the mean, about 31.1 minutes, to the right of the median.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g fill="#1d2b44">
<circle cx="112" cy="50" r="5"/><circle cx="139" cy="50" r="5"/><circle cx="148" cy="50" r="5"/><circle cx="166" cy="50" r="5"/><circle cx="175" cy="50" r="5"/><circle cx="184" cy="50" r="5"/><circle cx="193" cy="50" r="5"/><circle cx="202" cy="50" r="5"/><circle cx="220" cy="50" r="5"/><circle cx="229" cy="50" r="5"/><circle cx="247" cy="50" r="5"/><circle cx="265" cy="50" r="5"/><circle cx="310" cy="50" r="5"/><circle cx="355" cy="50" r="5"/><circle cx="508" cy="50" r="5"/>
</g>
<text x="40" y="28" font-size="13" fill="#1d2b44">Dot plot</text>
<text x="40" y="96" font-size="13" fill="#1d2b44">Boxplot</text>
<rect x="166" y="105" width="99" height="50" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="202" y1="105" x2="202" y2="155" stroke="#1d2b44" stroke-width="3"/>
<line x1="112" y1="130" x2="166" y2="130" stroke="#1d2b44" stroke-width="2"/>
<line x1="112" y1="120" x2="112" y2="140" stroke="#1d2b44" stroke-width="2"/>
<line x1="265" y1="130" x2="355" y2="130" stroke="#1d2b44" stroke-width="2"/>
<line x1="355" y1="120" x2="355" y2="140" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2"><line x1="508" y1="122" x2="508" y2="138"/><line x1="501" y1="126" x2="515" y2="134"/><line x1="501" y1="134" x2="515" y2="126"/></g>
<line x1="413.5" y1="100" x2="413.5" y2="200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="413.5" y="94" text-anchor="middle" font-size="12" fill="#1d2b44">upper fence 51.5</text>
<text x="508" y="114" text-anchor="middle" font-size="12" fill="#1d2b44">outlier 62</text>
<path d="M230.2 160 L224.2 170 L236.2 170 Z" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="242" y="172" font-size="12" fill="#1d2b44">mean ≈ 31.1</text>
<text x="202" y="186" text-anchor="middle" font-size="12" fill="#1d2b44">median 28</text>
<line x1="40" y1="205" x2="580" y2="205" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="40" y1="205" x2="40" y2="212"/><line x1="130" y1="205" x2="130" y2="212"/><line x1="220" y1="205" x2="220" y2="212"/><line x1="310" y1="205" x2="310" y2="212"/><line x1="400" y1="205" x2="400" y2="212"/><line x1="490" y1="205" x2="490" y2="212"/><line x1="580" y1="205" x2="580" y2="212"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="40" y="228">10</text><text x="130" y="228">20</text><text x="220" y="228">30</text><text x="310" y="228">40</text><text x="400" y="228">50</text><text x="490" y="228">60</text><text x="580" y="228">70</text>
</g>
<text x="310" y="252" text-anchor="middle" font-size="14" fill="#1d2b44">Delivery time (minutes)</text>
</svg>
<figcaption>Figure 1. Delivery times of 15 orders from the fictional Copper Kettle café. The dot plot and the boxplot use the same scale. Box: Q1 = 24 to Q3 = 35 minutes; thick line: median, 28 minutes; triangle: mean. The upper whisker stops at 45 minutes and the outlier at 62 minutes is marked with an asterisk. The dotted fence line is drawn here only to explain the rule.</figcaption>
</figure>

Compare the two plots in Figure 1. Between each pair of neighbouring numbers in the five-number summary there are exactly 3 deliveries. For example, 18, 21 and 22 lie below Q1, and 40, 45 and 62 lie above Q3. The right section of the plot is long because the large values there are **spread out**, not because there are more of them.

## Reading a boxplot

Each of the four sections of a boxplot holds about 25% of the values:

| Section | From → to | About what share of the data? |
|---|---|---|
| Lower whisker | minimum → Q1 | 25% |
| Left part of the box | Q1 → median | 25% |
| Right part of the box | median → Q3 | 25% |
| Upper whisker (plus any outliers) | Q3 → maximum | 25% |

So the **box** shows the middle 50% of the data, and its length is the IQR. The whole width of the plot, from minimum to maximum, is the range. When outliers are shown, the upper whisker and the outliers above it together make up the top 25%.

These shares are approximate. With a small n, or with repeated values at a quartile, a section may hold a few more or fewer values than exactly one quarter.

Because each section holds about the same number of values, a **longer** section means the values in it are **more spread out**. A shorter section means they are packed more closely.

## Shape, the mean and the median

The mean and the median react differently to a long tail. The median depends only on the middle position. The mean uses the size of every value, so a few very large or very small values pull it towards the tail. This gives a useful link:

- **Roughly symmetric:** the mean and the median are close to each other.
- **Skewed right** (long tail to the right): the mean is **usually greater** than the median.
- **Skewed left** (long tail to the left): the mean is **usually less** than the median.

On a boxplot, you judge the shape by comparing the two halves. For right skew, the right half (median to Q3, plus the upper whisker) is longer than the left half. For left skew, the left half is longer.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="shape-title shape-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="shape-title">Three sketch boxplots showing symmetric, right-skewed and left-skewed shapes</title>
<desc id="shape-desc">Three boxplot sketches on the same scale from 0 to 100, with no units. Top, roughly symmetric: the median line is in the middle of the box, the whiskers are about equal in length, and a triangle marking the mean sits directly under the median. Middle, skewed right: the median is near the left end of the box, the right whisker is much longer than the left, and the mean triangle is to the right of the median. Bottom, skewed left: the median is near the right end of the box, the left whisker is much longer, and the mean triangle is to the left of the median.</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<g fill="#1d2b44" font-size="13">
<text x="60" y="22">Roughly symmetric: mean ≈ median</text>
<text x="60" y="117">Skewed right: mean usually greater than median</text>
<text x="60" y="212">Skewed left: mean usually less than median</text>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<rect x="235" y="32" width="150" height="36"/><line x1="310" y1="32" x2="310" y2="68" stroke-width="3"/>
<line x1="110" y1="50" x2="235" y2="50"/><line x1="385" y1="50" x2="510" y2="50"/>
<line x1="110" y1="42" x2="110" y2="58"/><line x1="510" y1="42" x2="510" y2="58"/>
<rect x="135" y="127" width="135" height="36"/><line x1="180" y1="127" x2="180" y2="163" stroke-width="3"/>
<line x1="85" y1="145" x2="135" y2="145"/><line x1="270" y1="145" x2="510" y2="145"/>
<line x1="85" y1="137" x2="85" y2="153"/><line x1="510" y1="137" x2="510" y2="153"/>
<rect x="350" y="222" width="135" height="36"/><line x1="440" y1="222" x2="440" y2="258" stroke-width="3"/>
<line x1="110" y1="240" x2="350" y2="240"/><line x1="485" y1="240" x2="535" y2="240"/>
<line x1="110" y1="232" x2="110" y2="248"/><line x1="535" y1="232" x2="535" y2="248"/>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="1.5">
<path d="M310 72 L304 82 L316 82 Z"/>
<path d="M225 167 L219 177 L231 177 Z"/>
<path d="M395 262 L389 272 L401 272 Z"/>
</g>
<g fill="#1d2b44" font-size="12">
<text x="322" y="82">mean</text>
<text x="237" y="177">mean</text>
<text x="385" y="272" text-anchor="end">mean</text>
</g>
<line x1="60" y1="295" x2="560" y2="295" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="295" x2="60" y2="302"/><line x1="160" y1="295" x2="160" y2="302"/><line x1="260" y1="295" x2="260" y2="302"/><line x1="360" y1="295" x2="360" y2="302"/><line x1="460" y1="295" x2="460" y2="302"/><line x1="560" y1="295" x2="560" y2="302"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="318">0</text><text x="160" y="318">20</text><text x="260" y="318">40</text><text x="360" y="318">60</text><text x="460" y="318">80</text><text x="560" y="318">100</text>
</g>
</svg>
<figcaption>Figure 2. Sketches of three shapes (no real data, no units). Thick line: median. Triangle: mean. The mean is pulled towards the long tail, so its position relative to the median is a clue to the shape.</figcaption>
</figure>

This link is a **tendency**, not a law. Some unusual distributions break it, especially discrete data with many repeated values. So use words like "usually" or "suggests", and check a graph when you have one.

The link works in both directions. If a graph shows right skew, you can **predict** that the mean is larger than the median. If you are told only the mean and the median, a big gap between them **suggests** skew in the direction of the mean.

## What a boxplot cannot show

A boxplot is built from only five numbers, so it hides detail. It does **not** show:

- the **number of values**, n (a boxplot of 15 values and one of 15,000 can look the same);
- **gaps** and **clusters** inside a section;
- whether the distribution has **one peak or two** (a bimodal distribution can produce a boxplot that looks symmetric);
- the **mean**, unless it is added with its own symbol, as in Figures 1 and 2.

If you need to see gaps, clusters or peaks, use a dot plot, stem-and-leaf plot or histogram.

## Worked example 1: a boxplot of the delivery times

**Question.** Using the 15 delivery times, (a) give the five-number summary, (b) decide whether any value is a potential outlier, (c) describe how to draw the boxplot, and (d) describe the shape and say whether the mean or the median is larger.

**(a)** Ordered data: 18, 21, 22, 24, 25, 26, 27, 28, 30, 31, 33, 35, 40, 45, 62. With n = 15, the median is the 8th value, 28. The lower 7 values give Q1 = 24 (their 4th value). The upper 7 values give Q3 = 35. Five-number summary: **18, 24, 28, 35, 62 minutes**.

**(b)** IQR = 35 − 24 = 11 minutes. 1.5 × 11 = 16.5. Lower fence = 24 − 16.5 = 7.5 minutes. Upper fence = 35 + 16.5 = 51.5 minutes. Since 62 > 51.5, the 62-minute delivery is a potential outlier. No value is below 7.5.

**(c)** Draw a number line from 10 to 70 minutes in steps of 10, labelled "Delivery time (minutes)". Draw a box from 24 to 35 with a line at 28. Draw the lower whisker from 24 to 18. Draw the upper whisker from 35 to **45**, the largest value that is not an outlier. Mark 62 with an asterisk.

**(d)** The distribution is **skewed right**. The median to Q3 distance (7 minutes) is longer than Q1 to the median (4 minutes). The upper whisker (10 minutes) is longer than the lower whisker (6 minutes). There is also a high outlier. So we expect the mean to be greater than the median. Check: x̄ = 467 ÷ 15 ≈ 31.13 minutes, which is greater than the median of 28 minutes.

**Interpretation.** The middle half of these deliveries took between 24 and 35 minutes. One delivery, at 62 minutes, took unusually long and pulls the mean above the median.

**Check.** Only 5 of the 15 deliveries took longer than the mean, which fits a mean pulled up by the long right tail.

## Worked example 2: reading the shape from a five-number summary

**Question.** A teacher gave a fictional 50-point quiz to 40 students. The five-number summary of the scores is 16, 31, 38, 42, 47 points, and the mean is about 36.2 points.

(a) Check for outliers. (b) Describe the shape and explain whether the mean fits that shape. (c) About how many students scored 38 or more? (d) A student says, "More students scored between 16 and 31 than between 38 and 42, because that part of the boxplot is much longer." Is the student right?

**(a)** IQR = 42 − 31 = 11 points, so 1.5 × IQR = 16.5. Fences: 31 − 16.5 = 14.5 and 42 + 16.5 = 58.5 points. The minimum (16) and maximum (47) lie inside the fences, so there are no outliers. The whiskers run to 16 and 47.

**(b)** The left half is much longer than the right half. Q1 to the median is 7 points but the median to Q3 is only 4 points. The lower whisker covers 15 points (16 to 31) but the upper whisker covers only 5 (42 to 47). So the distribution is **skewed left**. We expect the mean to be less than the median, and it is: 36.2 < 38 points.

**(c)** The median splits the data in half, so about 50% of 40, **about 20 students**, scored 38 points or more.

**(d)** No. Each section holds about 25% of the students, so about 10 students are in each section. The section from 16 to 31 is longer because those low scores are **more spread out**, not because there are more of them.

**Check.** In the fictional data set behind this summary, exactly 10 students scored from 16 to 30 and exactly 10 scored from 39 to 41, which matches the "about a quarter in each section" idea.

## Common misconceptions

- **"The whisker always goes to the maximum."** Only when there are no outliers. With outliers, the whisker stops at the most extreme value that is not an outlier.
- **"The whisker goes to the fence."** The fence (for example, 51.5 minutes) is not a data value. Whiskers end at actual data values.
- **"A longer section contains more data."** Every section holds about 25%. Longer means more spread out.
- **"The line in the box is the mean."** It is the median. The mean is not part of a standard boxplot.
- **"The mean is always greater than the median in a skewed distribution."** It depends on the direction of the skew, and it is only a tendency.
- **"A symmetric boxplot means a bell-shaped, single-peaked distribution."** A boxplot cannot show peaks, gaps or clusters.
- **"The box shows the range."** The box shows the IQR, the middle 50%. The range is the whole width of the plot.
- **Unlabelled scale.** A boxplot needs a number line with the variable name and units.

## Where this leads

In Topic 1.9 you will put two or more boxplots side by side on the same scale and compare centre, variability, outliers and skewness. Start with the [practice questions](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-practice/), then use the [revision notes](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-checklist/). When you are ready, move on to the [Topic 1.9 study guide](/advanced-course-resources/statistics/1-9-comparisons-distributions-one-quantitative-variable-study-guide/). To revise quartiles and outlier fences, go back to the [Topic 1.7 study guide](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-study-guide/).
