---
title: "OCR GCSE Mathematics: Analysing data: averages, spread, box plots, misrepresentation, scatter graphs and outliers (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Analysing Data Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Analysing data: averages, spread, box plots, misrepresentation, scatter graphs and outliers"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 71
syllabusTopics:
  - qualification: "gcse"
    topic: "statistics-ocr-gcse-maths"
    subtopic: "analysing-data-ocr-gcse-maths"
description: "Condensed exam revision notes on averages, quartiles, box plots, misleading graphs, scatter graphs and outliers for OCR GCSE Mathematics J560."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense section 12.03 (Analysing data) of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026). The [study guide](/resources/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots/) gives the full explanations and worked examples. Test yourself with the [practice questions](/resources/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots-practice/). Content marked **Higher tier only** is in the Higher column of the specification. See the [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/), the [printable checklist](/checklists/ocr/gcse/mathematics/) and the [10-minute diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Mean | Total of the values divided by how many there are |
| Median | Central value once the data are ordered; with an even count, halfway between the two central values |
| Mode | Most common value |
| Range | Largest − smallest |
| Modal class | Class with the highest frequency (equal class widths) |
| Quartiles (Higher tier only) | Q1 is the value a quarter of the way through the ordered data, Q3 is three quarters of the way through |
| IQR (Higher tier only) | Q3 − Q1: the spread of the middle half |
| Outlier | A value that stands apart from the pattern of the others |
| Interpolation | A prediction from within the span of the given data |
| Extrapolation | A prediction from beyond the span of the given data |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots--04-misleading-charts-more-ways.webp" width="900" height="1120" alt="Three ways a chart misleads: an uneven axis scale, an icon drawn twice as wide and tall so area is four times larger with no key, and a 3D bar whose top looks higher than a flat bar of the same value." loading="lazy">
  <figcaption>Uneven scales, different-sized icons with no key, and 3D effects change the apparent size.</figcaption>
</figure>


## 12.03a Ungrouped data: method in steps

1. Put the data in order.
2. Mean: total ÷ count.
3. Median: middle position is (n + 1)/2. For an even count, average the two middle values.
4. Mode: tally, then pick the most frequent value.
5. Range: largest − smallest.

**Reminder.** Data: 2, 5, 6, 8, 9, 9, 9, 12. Sum = 60, so mean = 7.5. Median = (8 + 9)/2 = 8.5. Mode = 9. Range = 10.

**Working back.** If you know the mean of n values, the total is mean × n. Use this to find a missing value or the effect of adding one more value.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--01-three-averages.webp" width="900" height="770" alt="Six values 2, 3, 3, 4, 5, 13 on a dot plot. The mode is 3 (most common), the median is 3.5 (middle of 3 and 4), the mean is 30 divided by 6 = 5, and the range is 13 - 2 = 11. The large value 13 pulls the mean above the median." loading="lazy">
  <figcaption>The mean, median, mode and range of one small list of data.</figcaption>
</figure>


## 12.03a Grouped data: method in steps

1. Write the midpoint of each class.
2. Multiply midpoint × frequency for each class.
3. Add the products, then divide by the total frequency. This gives the estimated mean.
4. Modal class: highest frequency.
5. Estimated range: top boundary of the last class − bottom boundary of the first class.
6. Median class: the class that holds the (n/2)th value. Estimate where it sits by proportion within that class.

**Why estimates?** Individual values are not known, only which class they fall in. Using midpoints assumes values are evenly spread, which is rarely exactly true.

**Reminder.** Frequencies 3, 5, 2 for midpoints 5, 15, 25. Mean = (15 + 75 + 50) ÷ 10 = 14.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots--06-grouped-median-interpolation.webp" width="900" height="830" alt="Frequencies 5, 9, 18, 13 and 5 with running totals 5, 14, 32, 45 and 50. The 25th value lies in the class 20 to 30, 11 of 18 steps in, so the median is about 26.1 minutes." loading="lazy">
  <figcaption>The median of grouped data is found by placing the 25th value within its class in proportion.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--03-grouped-mean-midpoints.webp" width="900" height="932" alt="Heights of 40 students in four 10 cm classes. Each class midpoint (155, 165, 175, 185) times its frequency totals 6740, giving an estimated mean of 168.5 cm. The modal class is 160 to under 170." loading="lazy">
  <figcaption>Use the midpoint of each class, not a boundary, so the mean is only an estimate.</figcaption>
</figure>


## 12.03a Describing, comparing and choosing a summary value

| Summary | Use it when | Weakness |
|---|---|---|
| Mean | Data are fairly symmetrical and you want every value to count | Distorted by extreme values |
| Median | Data contain extreme values or are skewed | Does not use every value |
| Mode | Data are categories, or you want the most common choice | May not exist, may be at one end |
| Range | You want a quick idea of spread | Only uses two values, so one extreme value changes it |
| IQR (Higher tier only) | You want spread that extreme values do not affect | Ignores the lowest and highest quarters |

**Comparison template:** "[Group 1] has a higher/lower [average] than [group 2], so [meaning in context]. [Group 1] has a larger/smaller [spread], so [its values are more/less consistent]."

Compare like with like: median with median, range with range, IQR with IQR. Always include context.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots--07-extreme-value-summaries.webp" width="900" height="820" alt="A dot plot of eight plant heights, seven between 12 and 16 cm and one at 130 cm. The median of 14 sits with the group, the mean of 28.4 is pulled away and the range of 118 depends only on the extremes." loading="lazy">
  <figcaption>One extreme value pulls the mean and sets the range, while the median stays put.</figcaption>
</figure>


## Cumulative frequency and quartiles: Higher tier only

1. Make a running total of the frequencies.
2. Plot each total against the upper class boundary, starting at (lowest boundary, 0).
3. Join the points as the question asks, with a smooth curve or with straight lines.
4. With n values in total, mark n/4, n/2 and 3n/4 on the vertical axis. Draw a horizontal line to the graph from each, then drop a vertical line to the horizontal axis and read the value.
5. IQR = Q3 − Q1.
6. For "how many are more than x?", read the height at x and subtract from n.

Draw the reading lines on the graph so your working shows. Values read from a graph are estimates.

**Reminder.** n = 80: read at heights 20, 40 and 60. If Q1 = 3.7 and Q3 = 7.2, then IQR = 3.5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-cumulative-frequency-diagrams--03-median-quartiles-iqr.webp" width="900" height="920" alt="On the curve for 120 students, reading across at 30, 60 and 90 and down gives LQ about 22, median 30 and UQ about 39 minutes. The IQR is 39 minus 22 = 17 minutes." loading="lazy">
  <figcaption>Read across at n/4, n/2 and 3n/4, then down; the IQR is UQ minus LQ.</figcaption>
</figure>


## Box plots: Higher tier only

A box plot uses five numbers, in order along a number line:

| Minimum | Q1 | Median | Q3 | Maximum |
|---|---|---|---|---|

- The box goes from Q1 to Q3. A line inside it marks the median.
- Whiskers go from the box to the minimum and the maximum.
- Use a ruler and a scale on the axis.

**Reading a box plot.** Median = typical value. Box width = IQR. Whisker ends give the range. The two parts of the box either side of the median show how the values are spread out.

**Comparing two box plots:** compare medians (typical value), then IQRs (consistency), then say what this means in context.

## 12.03b Misrepresentation: checklist

| Feature | Effect |
|---|---|
| Vertical axis does not start at zero | Differences look bigger than they are |
| Uneven scale steps | Trends look steeper or flatter |
| Missing title, units or labels | Reader cannot tell what is shown |
| Bars of unequal width, 3D effects | Area or volume suggests a false size |
| Pictogram icons of different sizes, or no key | Values cannot be compared fairly |
| Selected time period only | Hides the wider pattern |

State the feature and its effect.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots--01-compare-two-box-plots.webp" width="900" height="870" alt="Two box plots on one scale for test scores out of 40. Class A runs 13 to 38 with median 25 and IQR 12. Class B runs 19 to 32 with median 26 and IQR 7. B has the higher median and the narrower box." loading="lazy">
  <figcaption>Compare medians for typical value and IQRs for consistency.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-statistics--11-box-plot-build.webp" width="900" height="760" alt="Eleven ordered values from 3 to 22 sit on a number line. The 3rd value 6 is the lower quartile, the 6th value 10 is the median and the 9th value 15 is the upper quartile. The box runs from 6 to 15 with a line at 10, and whiskers reach 3 and 22, so the IQR is 9 and the range is 19." loading="lazy">
  <figcaption>Pick the minimum, three quartiles and maximum from the ordered list and draw them on one scale.</figcaption>
</figure>


## 12.03c Scatter graphs

- **Positive correlation:** both variables increase together.
- **Negative correlation:** one increases as the other decreases.
- **No correlation:** no pattern.
- Strength depends on how close the points are to a line.

**A correlation alone does not show that one variable causes the other.** Look for a third variable (for example, age) or coincidence.

**Line of best fit by eye** (steps):

1. Find the centre of the cloud of points; the line should pass close to it.
2. Draw one straight line with about as many points on each side.
3. Use a ruler and extend it only as far as you need.
4. To predict, go from the given value on one axis up to the line, then across to the other axis, and show the lines.

**Reminder.** Line y ≈ 15.4 − 1.3x (value against age). At x = 4.5, y ≈ 9.55 (interpolation, fairly reliable). At x = 12, y ≈ −0.2 (extrapolation, impossible value, unreliable).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots--03-correlation-not-causation.webp" width="900" height="1000" alt="A scatter graph of shoe size against reading score shows strong positive correlation, with points marked by age band. A diagram shows age driving both variables, so bigger feet do not cause better reading." loading="lazy">
  <figcaption>Shoe size and reading score rise together only because both rise with age.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-interpreting-graphs-comparing-distributions-and--02-misleading-axis.webp" width="900" height="1010" alt="Two bar charts of A = 52 and B = 56. With the axis starting at 50, B looks three times as tall as A. With the axis starting at 0, B is about 1.08 times A." loading="lazy">
  <figcaption>A vertical axis that does not start at zero exaggerates differences.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--04-correlation-types.webp" width="900" height="1010" alt="Three scatter diagrams: positive correlation (y rises with x), negative correlation (y falls as x rises) and zero correlation (no pattern, so no line of best fit)." loading="lazy">
  <figcaption>Judge the correlation by eye before drawing any line.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-scatter-diagrams-correlation-and-cumulative-frequency--03-using-the-line.webp" width="900" height="870" alt="The line of best fit gives about 10.3 thousand dollars at age 6.5. A triangle shows a drop of 2.85 over 2 years, gradient -1.425, so the value falls about 1 400 dollars a year. Beyond age 9 the line is dotted in a shaded region marked outside the data; age 12 gives about 2.4, which is unreliable." loading="lazy">
  <figcaption>Readings inside the data are reliable; extending the line beyond age 9 is not.</figcaption>
</figure>


## 12.03d Outliers

- Look for a value that is far from the others. In simple cases this is obvious by eye.
- Possible reasons: a recording error (such as 130 for 13.0) or a genuine unusual value.
- Effect: the mean and range change a lot. The median changes little.
- On a scatter graph, an outlier is a point well away from the trend. Draw the line through the main pattern.
- Say what you would do: check the original data before removing anything.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-analysing-data-averages-spread-box-plots--05-scatter-outlier.webp" width="900" height="920" alt="A scatter graph of car age and value with a clear downward trend and one outlier far below it. A line through the main pattern is compared with a dashed line pulled towards the outlier." loading="lazy">
  <figcaption>An outlier pulls a line of best fit away from the pattern, so draw the line ignoring it and comment.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-statistics-classifying-data-averages-spread-and--01-four-measures-outlier.webp" width="900" height="700" alt="A dot plot of eight delivery times: 9, 9, 9, 11, 12, 14, 22, 35. Mode 9, median 11.5, mean 121/8 = 15.1 and range 26. The outlier 35 pulls the mean above six of the eight values." loading="lazy">
  <figcaption>The mean, median, mode and range of one data set, with an outlier pulling the mean up.</figcaption>
</figure>


## Must-know distinctions

- **Estimate versus exact:** grouped statistics and graph readings are estimates. Ungrouped statistics are exact.
- **Range versus IQR (Higher tier only):** range uses the two extremes, IQR uses the middle half.
- **Mean versus median:** an extreme value moves the mean much more than the median.
- **Correlation versus causation:** a pattern in the data is not an explanation.
- **Interpolation versus extrapolation:** inside the data is usually safer than outside.

## Quick self-test

1. For the numbers 5, 9, 6, 9, 2, 12, 9, 8, work out the mean, the median, the mode and the range.
2. Explain why the mean from a grouped frequency table is only an estimate.
3. Class midpoints are 5, 15 and 25 with frequencies 3, 5 and 2. Estimate the mean.
4. A cumulative frequency graph represents 80 values. Which heights on the vertical axis give Q1, the median and Q3? (Higher tier only)
5. Q1 = 14 and Q3 = 31. Find the IQR. (Higher tier only)
6. Name the five values needed to draw a box plot. (Higher tier only)
7. As the temperature falls, the number of coats sold rises. What type of correlation is this?
8. What is extrapolation, and why can its results be unreliable?
9. A bar chart's vertical axis starts at 50 instead of 0. What effect does this have?
10. The mean of four numbers is 9. A fifth number, 14, is added. Find the new mean.

### Answers

1. Mean 7.5, median 8.5, mode 9, range 10.
2. The exact values are not known, only the class each lies in, so midpoints are used as stand-ins.
3. (15 + 75 + 50) ÷ 10 = 14.
4. Heights 20, 40 and 60.
5. 31 − 14 = 17.
6. Minimum, lower quartile, median, upper quartile, maximum.
7. Negative correlation.
8. Making a prediction from beyond the given data. The trend may not continue, so the prediction may be unrealistic.
9. Differences between bars look larger than they really are.
10. (4 × 9 + 14) ÷ 5 = 50 ÷ 5 = 10.

## Where marks are usually lost

- Using class boundaries instead of midpoints in a grouped mean.
- Dividing by the count of classes when you should divide by the total frequency.
- Giving a median from unordered data.
- Reading a cumulative frequency graph at the wrong height, such as 1/4 of the largest value instead of n/4.
- Plotting cumulative frequency at class midpoints rather than upper boundaries.
- Comparing without context, or comparing an average with a spread.
- Writing "the axis is wrong" without saying what effect it has.
- Describing correlation but not saying what it means for the two variables.
- Treating a prediction from extrapolation as reliable.
- Deleting an outlier with no comment about why.

## Frequently asked questions

**Is the interquartile range on the OCR GCSE Maths Foundation tier?**
No. In OCR GCSE Mathematics J560, quartiles, the interquartile range, cumulative frequency graphs and box plots are Higher tier only. Foundation students still need the mean, median, mode and range, including estimates for grouped data.

**When should you use the median instead of the mean?**
Use the median when the data contain extreme values or are skewed, because an extreme value moves the mean much more than the median. The mean is better when the data are fairly symmetrical and you want every value to count.

**Where do you plot points on a cumulative frequency graph?**
Plot each running total against the upper class boundary, starting at the lowest boundary with a cumulative frequency of zero. Plotting at class midpoints is a common error.

**Does correlation on a scatter graph prove that one variable causes the other?**
No. A correlation shows that two variables move together, but this could be due to a third variable, such as age, or to coincidence.

## Official syllabus

OCR, GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, section 12.03 Analysing data (12.03a to 12.03d).
