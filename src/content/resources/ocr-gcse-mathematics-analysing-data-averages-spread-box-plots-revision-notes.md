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
description: "Condensed revision notes on averages, quartiles, box plots, misleading graphs, scatter graphs and outliers for OCR GCSE Mathematics J560."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
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

## 12.03a Ungrouped data: method in steps

1. Put the data in order.
2. Mean: total ÷ count.
3. Median: middle position is (n + 1)/2. For an even count, average the two middle values.
4. Mode: tally, then pick the most frequent value.
5. Range: largest − smallest.

**Reminder.** Data: 2, 5, 6, 8, 9, 9, 9, 12. Sum = 60, so mean = 7.5. Median = (8 + 9)/2 = 8.5. Mode = 9. Range = 10.

**Working back.** If you know the mean of n values, the total is mean × n. Use this to find a missing value or the effect of adding one more value.

## 12.03a Grouped data: method in steps

1. Write the midpoint of each class.
2. Multiply midpoint × frequency for each class.
3. Add the products, then divide by the total frequency. This gives the estimated mean.
4. Modal class: highest frequency.
5. Estimated range: top boundary of the last class − bottom boundary of the first class.
6. Median class: the class that holds the (n/2)th value. Estimate where it sits by proportion within that class.

**Why estimates?** Individual values are not known, only which class they fall in. Using midpoints assumes values are evenly spread, which is rarely exactly true.

**Reminder.** Frequencies 3, 5, 2 for midpoints 5, 15, 25. Mean = (15 + 75 + 50) ÷ 10 = 14.

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

## Cumulative frequency and quartiles: Higher tier only

1. Make a running total of the frequencies.
2. Plot each total against the upper class boundary, starting at (lowest boundary, 0).
3. Join the points as the question asks, with a smooth curve or with straight lines.
4. With n values in total, mark n/4, n/2 and 3n/4 on the vertical axis. Draw a horizontal line to the graph from each, then drop a vertical line to the horizontal axis and read the value.
5. IQR = Q3 − Q1.
6. For "how many are more than x?", read the height at x and subtract from n.

Draw the reading lines on the graph so your working shows. Values read from a graph are estimates.

**Reminder.** n = 80: read at heights 20, 40 and 60. If Q1 = 3.7 and Q3 = 7.2, then IQR = 3.5.

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

## 12.03d Outliers

- Look for a value that is far from the others. In simple cases this is obvious by eye.
- Possible reasons: a recording error (such as 130 for 13.0) or a genuine unusual value.
- Effect: the mean and range change a lot. The median changes little.
- On a scatter graph, an outlier is a point well away from the trend. Draw the line through the main pattern.
- Say what you would do: check the original data before removing anything.

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

## Official syllabus

OCR, GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, section 12.03 Analysing data (12.03a to 12.03d).
