---
resourceId: "mb-ap-stats-1.5-study-guide"
title: "Graphical Representations for One Quantitative Variable: Study Guide (Statistics 1.5)"
description: "Learn to construct dotplots, stem-and-leaf plots and frequency or relative frequency histograms for one quantitative variable, and see how bin width changes a histogram."
course: "statistics"
unit: 1
topics: ["1.5"]
resourceType: "study-guide"
prerequisites:
  - "Telling a quantitative variable from a categorical one (Topic 1.2)"
  - "Frequency and relative frequency, and bar charts for categorical data (Topics 1.3 and 1.4)"
prerequisiteResources: ["mb-ap-stats-1.4-study-guide"]
learningObjectives:
  - "Construct a dotplot from raw data on an evenly scaled, labelled number line, stacking equal values"
  - "Construct a stem-and-leaf plot with ordered stems and leaves and a key, splitting stems when the plot is crowded"
  - "Group data into ordered, equal-width bins and draw a frequency or relative frequency histogram"
  - "Explain how changing the bin width can change the appearance of a histogram"
  - "Choose a suitable display for a quantitative variable and say what each display keeps and what it loses"
skills: ["3"]
studyMinutes: 35
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "A graphing calculator or software can draw a histogram once you set the first bin edge and the bin width. Draw dotplots and stem-and-leaf plots by hand. Round relative frequencies to 2 or 3 decimal places."
related: ["mb-ap-stats-1.5-revision-notes", "mb-ap-stats-1.5-practice", "mb-ap-stats-1.5-checklist"]
next: "mb-ap-stats-1.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Dotplots, stem-and-leaf plots and histograms show the distribution of a quantitative variable, with values kept in order from smallest to largest."
  - "A dotplot puts one dot per value above a number line; equal or nearly equal values stack."
  - "A stem-and-leaf plot splits each value into a stem and a one-digit leaf. Order both, keep empty stems, and always give a key."
  - "A histogram groups values into ordered, equal-width bins. Bar heights show frequency or relative frequency, and the bars touch."
  - "Changing the bin width can change how a histogram looks, so state your bins and check that they do not hide features."
faqs:
  - question: "A value sits exactly on the edge between two bins. Which bin does it go in?"
    answer: "Choose one rule and use it for every bin. This guide uses bins such as 30 ≤ x < 45, so a value of 45 goes in the next bin, 45 to under 60. Label the bins so the reader can see your rule."
  - question: "How many bins should a histogram have?"
    answer: "There is no single correct number. A small data set needs only a few bins; a large one can use more. Try two widths. If the shape changes a lot, choose the one that shows the pattern without lots of empty or one-value bars, and say which width you used."
  - question: "Is a histogram the same as a bar chart?"
    answer: "No. A bar chart shows a categorical variable, so its bars are separate and their order can be changed. A histogram shows a quantitative variable on a number line, so its bins are in numerical order and the bars touch."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why graph a quantitative variable?

A list of numbers is hard to read. A graph shows the **distribution** of a quantitative variable: which values occur and how often. This topic is about **constructing** three graphs:

- **Dotplots**
- **Stem-and-leaf plots** (stemplots)
- **Histograms**

All three keep the **natural order** of the values, from smallest to largest, along a number line or down a column of stems. All three show how often a value, or an interval of values, occurs. That can be a **frequency** (a count) or a **relative frequency** (a count divided by the total, a proportion between 0 and 1).

This is the key difference from the bar charts and pie charts of [Topic 1.4](/advanced-course-resources/statistics/1-4-graphical-representations-one-categorical-variable-study-guide/). Categories have no natural order, so you can rearrange the bars of a bar chart. A quantitative variable has a fixed order and real distances between values, so its graph must respect both.

Describing what a graph shows (shape, centre, spread, gaps and outliers) is Topic 1.6. Here the aim is to build each graph correctly, so it can be read correctly.

## The data sets used in this guide

All data in this guide are fictional.

- **Data set A.** The number of books each of 20 students borrowed from the library of Fernbrook School in one term.
- **Data set B.** The marks of 24 students at Brackley College on an end-of-unit test marked out of 60:

**18, 24, 27, 29, 31, 33, 34, 35, 36, 38, 38, 39, 40, 41, 42, 42, 44, 45, 47, 48, 51, 53, 56, 59**

## Dotplots

A **dotplot** shows each observation as one dot. The dot sits above a number line (or beside a vertical axis) at the value of that observation. Equal values, or values so close that they would overlap, are **stacked** on top of each other.

How to construct a dotplot:

1. Draw a number line that covers the smallest to the largest value. Use **equal spacing** for equal steps, and include values where there are no data.
2. Label the axis with the variable and its units.
3. For each observation, place a dot above its value. Stack repeated values in neat, evenly spaced columns.
4. Check that the number of dots equals n.

For data set A, 1 student borrowed 0 books, 2 borrowed 1, 4 borrowed 2, 5 borrowed 3, 3 borrowed 4, 2 borrowed 5, and one student each borrowed 6, 8 and 10 books.

<figure>
<svg viewBox="0 0 640 190" role="img" aria-labelledby="books-title books-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="books-title">Dotplot of the number of library books borrowed by 20 students</title>
<desc id="books-desc">A horizontal axis from 0 to 10 books. Dots stacked above each value show how many students borrowed that many books: 1 student borrowed 0, 2 borrowed 1, 4 borrowed 2, 5 borrowed 3, 3 borrowed 4, 2 borrowed 5, 1 borrowed 6, none borrowed 7, 1 borrowed 8, none borrowed 9 and 1 borrowed 10. The tallest stack is at 3 books.</desc>
<rect x="0" y="0" width="640" height="190" fill="#ffffff"/>
<line x1="50" y1="130" x2="590" y2="130" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="50.0" y1="130" x2="50.0" y2="137"/><line x1="104.0" y1="130" x2="104.0" y2="137"/><line x1="158.0" y1="130" x2="158.0" y2="137"/><line x1="212.0" y1="130" x2="212.0" y2="137"/><line x1="266.0" y1="130" x2="266.0" y2="137"/><line x1="320.0" y1="130" x2="320.0" y2="137"/><line x1="374.0" y1="130" x2="374.0" y2="137"/><line x1="428.0" y1="130" x2="428.0" y2="137"/><line x1="482.0" y1="130" x2="482.0" y2="137"/><line x1="536.0" y1="130" x2="536.0" y2="137"/><line x1="590.0" y1="130" x2="590.0" y2="137"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="50.0" y="152">0</text><text x="104.0" y="152">1</text><text x="158.0" y="152">2</text><text x="212.0" y="152">3</text><text x="266.0" y="152">4</text><text x="320.0" y="152">5</text><text x="374.0" y="152">6</text><text x="428.0" y="152">7</text><text x="482.0" y="152">8</text><text x="536.0" y="152">9</text><text x="590.0" y="152">10</text></g>
<text x="320.0" y="178" text-anchor="middle" font-size="14" fill="#1d2b44">Number of books borrowed in one term</text>
<g fill="#1d2b44"><circle cx="50.0" cy="118" r="6"/><circle cx="104.0" cy="118" r="6"/><circle cx="104.0" cy="104" r="6"/><circle cx="158.0" cy="118" r="6"/><circle cx="158.0" cy="104" r="6"/><circle cx="158.0" cy="90" r="6"/><circle cx="158.0" cy="76" r="6"/><circle cx="212.0" cy="118" r="6"/><circle cx="212.0" cy="104" r="6"/><circle cx="212.0" cy="90" r="6"/><circle cx="212.0" cy="76" r="6"/><circle cx="212.0" cy="62" r="6"/><circle cx="266.0" cy="118" r="6"/><circle cx="266.0" cy="104" r="6"/><circle cx="266.0" cy="90" r="6"/><circle cx="320.0" cy="118" r="6"/><circle cx="320.0" cy="104" r="6"/><circle cx="374.0" cy="118" r="6"/><circle cx="482.0" cy="118" r="6"/><circle cx="590.0" cy="118" r="6"/></g>
</svg>
<figcaption>Figure 1. Dotplot of the number of books borrowed by 20 students at the fictional Fernbrook School. Each dot is one student. The axis keeps equal spacing, so 7 and 9 appear even though no student borrowed those numbers.</figcaption>
</figure>

Because every value is visible, you can read counts straight off the graph. For example, 3 + 2 + 1 + 1 + 1 = 8 of the 20 students, a proportion of 0.40, borrowed 4 or more books.

Dotplots work best for **small data sets**, especially counts with only a few different values. With hundreds of values, the stacks become too tall to draw.

## Stem-and-leaf plots

A **stem-and-leaf plot** splits each value into two parts:

- the **stem**: the first digit or digits;
- the **leaf**: usually the single digit after the stem.

For a test mark of 38, the stem is 3 (tens) and the leaf is 8 (units).

How to construct a stem-and-leaf plot:

1. Order the data from smallest to largest.
2. Write the stems in a column, from smallest at the top to largest at the bottom. Include every stem in the range, **even stems with no leaves**, so that gaps show.
3. Write each leaf beside its stem, in increasing order, one digit per value. Repeated values get repeated leaves.
4. Add a **key** that shows what one stem and leaf mean, with units.
5. Count the leaves. There must be n of them.

For data set B:

| Stem | Leaves |
|---|---|
| 1 | 8 |
| 2 | 4 7 9 |
| 3 | 1 3 4 5 6 8 8 9 |
| 4 | 0 1 2 2 4 5 7 8 |
| 5 | 1 3 6 9 |

Key: 3 | 8 means a mark of 38 out of 60.

There are 1 + 3 + 8 + 8 + 4 = 24 leaves. The plot keeps every value, so you can still answer exact questions. For example, 12 of the 24 students (a proportion of 0.5) scored 40 or more. Turned on its side, the rows of leaves also act like the bars of a histogram.

The key matters because the same plot could mean very different numbers. With the key 3 | 8 = 3.8, the same rows would show lengths in centimetres from 1.8 to 5.9.

## Histograms

A **histogram** places the values into ordered intervals called **bins** (or classes) along the horizontal axis. Each bin gets one bar. The **height** of the bar is the frequency or relative frequency of the observations in that bin.

How to construct a histogram:

1. Choose the bins: a starting value and a **bin width**. Use equal widths that together cover every value.
2. Decide what happens to a value on a boundary. This guide uses **"from a up to but not including b"**, written a ≤ x < b. A mark of 40 goes in the bin 40 to under 50.
3. Count the values in each bin to make a frequency table. Divide each count by n for relative frequencies.
4. Draw the horizontal axis as a number line with the bin edges marked, and label it with the variable and units. Label the vertical axis "Frequency" or "Relative frequency" with an even scale starting at 0.
5. Draw one bar per bin. Adjacent bars **touch**, because the number line has no gaps between bins. A bin with frequency 0 is left empty but keeps its space.
6. Check that the frequencies add to n, or the relative frequencies add to 1 (allowing for rounding).

For data set B with bin width 10:

| Mark (out of 60) | Frequency | Relative frequency |
|---|---|---|
| 10 ≤ x < 20 | 1 | 1/24 ≈ 0.042 |
| 20 ≤ x < 30 | 3 | 3/24 = 0.125 |
| 30 ≤ x < 40 | 8 | 8/24 ≈ 0.333 |
| 40 ≤ x < 50 | 8 | 8/24 ≈ 0.333 |
| 50 ≤ x < 60 | 4 | 4/24 ≈ 0.167 |
| Total | 24 | 1.000 |

A frequency histogram and a relative frequency histogram with the same bins have the **same shape**. Only the scale on the vertical axis changes. Relative frequency is useful when you compare groups of different sizes.

You may also see a histogram drawn sideways: bins on the **vertical** axis and horizontal bars. The rules are the same.

## How bin width changes a histogram

The same data can give histograms that look different. Figure 2 shows data set B twice.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="marks-title marks-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="marks-title">Two histograms of the same 24 test marks, drawn with bin widths of 10 and 5</title>
<desc id="marks-desc">Left panel, bin width 10 marks: bars for 10 to under 20 (frequency 1), 20 to under 30 (3), 30 to under 40 (8), 40 to under 50 (8) and 50 to under 60 (4). The two middle bars are equal and form a flat top. Right panel, same data with bin width 5 marks: 15 to under 20 (1), 20 to under 25 (1), 25 to under 30 (2), 30 to under 35 (3), 35 to under 40 (5), 40 to under 45 (5), 45 to under 50 (3), 50 to under 55 (2) and 55 to under 60 (2). Both panels use the same axes: marks from 10 to 60 and frequency from 0 to 8. The bars touch because the marks scale is continuous.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<rect x="60.0" y="207.5" width="48.0" height="22.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="108.0" y="162.5" width="48.0" height="67.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="156.0" y="50.0" width="48.0" height="180.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="204.0" y="50.0" width="48.0" height="180.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="252.0" y="140.0" width="48.0" height="90.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="230" x2="300" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="230" x2="60" y2="44" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44"><line x1="60.0" y1="230" x2="60.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="60.0" y="250" text-anchor="middle">10</text><line x1="108.0" y1="230" x2="108.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="108.0" y="250" text-anchor="middle">20</text><line x1="156.0" y1="230" x2="156.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="156.0" y="250" text-anchor="middle">30</text><line x1="204.0" y1="230" x2="204.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="204.0" y="250" text-anchor="middle">40</text><line x1="252.0" y1="230" x2="252.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="252.0" y="250" text-anchor="middle">50</text><line x1="300.0" y1="230" x2="300.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="300.0" y="250" text-anchor="middle">60</text><line x1="54" y1="230.0" x2="60" y2="230.0" stroke="#1d2b44" stroke-width="1.5"/><text x="50" y="234.0" text-anchor="end">0</text><line x1="54" y1="185.0" x2="60" y2="185.0" stroke="#1d2b44" stroke-width="1.5"/><text x="50" y="189.0" text-anchor="end">2</text><line x1="54" y1="140.0" x2="60" y2="140.0" stroke="#1d2b44" stroke-width="1.5"/><text x="50" y="144.0" text-anchor="end">4</text><line x1="54" y1="95.0" x2="60" y2="95.0" stroke="#1d2b44" stroke-width="1.5"/><text x="50" y="99.0" text-anchor="end">6</text><line x1="54" y1="50.0" x2="60" y2="50.0" stroke="#1d2b44" stroke-width="1.5"/><text x="50" y="54.0" text-anchor="end">8</text></g>
<rect x="399.0" y="207.5" width="24.0" height="22.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="423.0" y="207.5" width="24.0" height="22.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="447.0" y="185.0" width="24.0" height="45.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="471.0" y="162.5" width="24.0" height="67.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="495.0" y="117.5" width="24.0" height="112.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="519.0" y="117.5" width="24.0" height="112.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="543.0" y="162.5" width="24.0" height="67.5" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="567.0" y="185.0" width="24.0" height="45.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="591.0" y="185.0" width="24.0" height="45.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="375" y1="230" x2="615" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="375" y1="230" x2="375" y2="44" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44"><line x1="375.0" y1="230" x2="375.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="375.0" y="250" text-anchor="middle">10</text><line x1="423.0" y1="230" x2="423.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="423.0" y="250" text-anchor="middle">20</text><line x1="471.0" y1="230" x2="471.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="471.0" y="250" text-anchor="middle">30</text><line x1="519.0" y1="230" x2="519.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="519.0" y="250" text-anchor="middle">40</text><line x1="567.0" y1="230" x2="567.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="567.0" y="250" text-anchor="middle">50</text><line x1="615.0" y1="230" x2="615.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="615.0" y="250" text-anchor="middle">60</text><line x1="369" y1="230.0" x2="375" y2="230.0" stroke="#1d2b44" stroke-width="1.5"/><text x="365" y="234.0" text-anchor="end">0</text><line x1="369" y1="185.0" x2="375" y2="185.0" stroke="#1d2b44" stroke-width="1.5"/><text x="365" y="189.0" text-anchor="end">2</text><line x1="369" y1="140.0" x2="375" y2="140.0" stroke="#1d2b44" stroke-width="1.5"/><text x="365" y="144.0" text-anchor="end">4</text><line x1="369" y1="95.0" x2="375" y2="95.0" stroke="#1d2b44" stroke-width="1.5"/><text x="365" y="99.0" text-anchor="end">6</text><line x1="369" y1="50.0" x2="375" y2="50.0" stroke="#1d2b44" stroke-width="1.5"/><text x="365" y="54.0" text-anchor="end">8</text></g>
<text x="180" y="32" text-anchor="middle" font-size="14" fill="#1d2b44">Bin width 10 marks</text>
<text x="495" y="32" text-anchor="middle" font-size="14" fill="#1d2b44">Bin width 5 marks</text>
<text x="180" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Test mark (out of 60)</text>
<text x="495" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Test mark (out of 60)</text>
<text x="18" y="140" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 18 140)">Frequency</text>
<text x="337" y="140" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 337 140)">Frequency</text>
</svg>
<figcaption>Figure 2. The same 24 fictional test marks drawn with bin width 10 (left) and bin width 5 (right), on the same axes. The total of the bar heights is 24 in both panels.</figcaption>
</figure>

- With width 10, the graph is blocky. The two middle bars are equal (8 each), so it looks flat-topped.
- With width 5, you can see the marks build up to a peak between 35 and 45 and then fall away.

Neither graph is wrong. Bins that are **too wide** lump values together and can hide features such as two separate peaks. Bins that are **too narrow** give many bars of height 0 or 1, and the graph looks jagged. A good habit is to try two widths, choose one that shows the pattern clearly, and state it.

Notice that the bars in the right panel are shorter. Each narrow bin holds fewer values, but the total is still 24.

## Choosing a display

| Display | Keeps each individual value? | Works well for |
|---|---|---|
| Dotplot | Yes | Small data sets, especially counts with few different values |
| Stem-and-leaf plot | Yes, to the place value of the leaf | Small to medium data sets of two- or three-digit numbers |
| Histogram | No: only how many values fall in each bin | Medium or large data sets, and any number of values |

A histogram loses detail. From Figure 2 (width 10) you know that one mark lies from 10 to under 20, but not that it is 18.

## Worked example 1: a stem-and-leaf plot with split stems

**Question.** A fictional weather station, Hollin Ridge, recorded the daily maximum temperature, in °C, on 16 days in April:

12, 15, 9, 14, 17, 21, 13, 16, 18, 11, 14, 19, 15, 23, 16, 14

Construct a stem-and-leaf plot. Then improve it by splitting the stems.

1. **Order the data:** 9, 11, 12, 13, 14, 14, 14, 15, 15, 16, 16, 17, 18, 19, 21, 23.
2. **Choose stems and leaves.** Stem = tens digit, leaf = units digit. The value 9 has stem 0 and leaf 9.
3. **Ordinary stems:**

| Stem | Leaves |
|---|---|
| 0 | 9 |
| 1 | 1 2 3 4 4 4 5 5 6 6 7 8 9 |
| 2 | 1 3 |

Key: 1 | 4 means 14 °C.

4. **Problem.** Thirteen of the 16 leaves are on one stem. With only three stems, the plot shows almost no detail.
5. **Split the stems.** Write each stem twice. "L" takes leaves 0 to 4 and "H" takes leaves 5 to 9. Start at the first stem that has a leaf and stop at the last.

| Stem | Leaves |
|---|---|
| 0H | 9 |
| 1L | 1 2 3 4 4 4 |
| 1H | 5 5 6 6 7 8 9 |
| 2L | 1 3 |

Key: 1H | 5 means 15 °C.

6. **Check.** 1 + 6 + 7 + 2 = 16 leaves, one per day. Every row of leaves is in increasing order.

**Interpretation.** The split plot shows that most days reached between 11 °C and 19 °C, and that only 2 of the 16 days (a proportion of 0.125) reached 20 °C or more. You can still read the exact temperatures: the most common value is 14 °C, on 3 days.

Splitting stems is not required in every question, but it is a standard fix when a plot has too few stems.

## Worked example 2: a relative frequency histogram from raw data

**Question.** Twenty-five students at the fictional Ashworth School recorded how many minutes they spent on homework one evening:

5, 12, 15, 20, 25, 28, 30, 30, 35, 40, 40, 42, 44, 45, 45, 50, 52, 55, 58, 60, 65, 70, 75, 85, 100

Construct a relative frequency histogram with bins of width 15 minutes, starting at 0.

1. **Bins.** The smallest value is 5 and the largest is 100, so the bins 0 to under 15, 15 to under 30, and so on up to 90 to under 105 cover every value. That is 7 bins.
2. **Boundary rule.** Each bin includes its left edge, not its right edge. So 15 goes in 15 to under 30, both 30s go in 30 to under 45, both 45s go in 45 to under 60, and so on.
3. **Frequency table.** Divide each count by n = 25.

| Homework time (minutes) | Frequency | Relative frequency |
|---|---|---|
| 0 ≤ x < 15 | 2 | 0.08 |
| 15 ≤ x < 30 | 4 | 0.16 |
| 30 ≤ x < 45 | 7 | 0.28 |
| 45 ≤ x < 60 | 6 | 0.24 |
| 60 ≤ x < 75 | 3 | 0.12 |
| 75 ≤ x < 90 | 2 | 0.08 |
| 90 ≤ x < 105 | 1 | 0.04 |
| Total | 25 | 1.00 |

4. **Axes.** Horizontal axis: homework time in minutes, marked 0, 15, 30, …, 105. Vertical axis: relative frequency from 0 to 0.30 in steps of 0.05.
5. **Bars.** Draw one touching bar per bin at the heights in the table.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="hw-title hw-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hw-title">Relative frequency histogram of homework time for 25 students</title>
<desc id="hw-desc">Horizontal axis: homework time in minutes from 0 to 105 in bins of width 15. Vertical axis: relative frequency from 0 to 0.30. Bar heights: 0 to under 15 minutes, 0.08; 15 to under 30, 0.16; 30 to under 45, 0.28; 45 to under 60, 0.24; 60 to under 75, 0.12; 75 to under 90, 0.08; 90 to under 105, 0.04. The tallest bar is 30 to under 45 minutes and the bars get shorter to the right.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<rect x="80.0" y="179.3" width="72.9" height="50.7" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="152.9" y="128.7" width="72.9" height="101.3" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="225.7" y="52.7" width="72.9" height="177.3" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="298.6" y="78.0" width="72.9" height="152.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="371.4" y="154.0" width="72.9" height="76.0" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="444.3" y="179.3" width="72.9" height="50.7" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="517.1" y="204.7" width="72.9" height="25.3" fill="#dbe4f0" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="230" x2="590" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="230" x2="80" y2="34" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44"><line x1="80.0" y1="230" x2="80.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="80.0" y="250" text-anchor="middle">0</text><line x1="152.9" y1="230" x2="152.9" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="152.9" y="250" text-anchor="middle">15</text><line x1="225.7" y1="230" x2="225.7" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="225.7" y="250" text-anchor="middle">30</text><line x1="298.6" y1="230" x2="298.6" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="298.6" y="250" text-anchor="middle">45</text><line x1="371.4" y1="230" x2="371.4" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="371.4" y="250" text-anchor="middle">60</text><line x1="444.3" y1="230" x2="444.3" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="444.3" y="250" text-anchor="middle">75</text><line x1="517.1" y1="230" x2="517.1" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="517.1" y="250" text-anchor="middle">90</text><line x1="590.0" y1="230" x2="590.0" y2="236" stroke="#1d2b44" stroke-width="1.5"/><text x="590.0" y="250" text-anchor="middle">105</text><line x1="74" y1="230.0" x2="80" y2="230.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="234.0" text-anchor="end">0.00</text><line x1="74" y1="198.3" x2="80" y2="198.3" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="202.3" text-anchor="end">0.05</text><line x1="74" y1="166.7" x2="80" y2="166.7" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="170.7" text-anchor="end">0.10</text><line x1="74" y1="135.0" x2="80" y2="135.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="139.0" text-anchor="end">0.15</text><line x1="74" y1="103.3" x2="80" y2="103.3" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="107.3" text-anchor="end">0.20</text><line x1="74" y1="71.7" x2="80" y2="71.7" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="75.7" text-anchor="end">0.25</text><line x1="74" y1="40.0" x2="80" y2="40.0" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="44.0" text-anchor="end">0.30</text></g>
<text x="335" y="280" text-anchor="middle" font-size="14" fill="#1d2b44">Homework time last night (minutes)</text>
<text x="22" y="135" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 135)">Relative frequency</text>
</svg>
<figcaption>Figure 3. Relative frequency histogram of homework time for 25 students at the fictional Ashworth School, bin width 15 minutes. Each bar's height is the proportion of students in that bin.</figcaption>
</figure>

**Check.** The frequencies add to 25 and the relative frequencies add to 1.00.

**Interpretation.** The histogram answers questions that line up with bin edges. The proportion of students who spent at least 60 minutes is 0.12 + 0.08 + 0.04 = 0.24, or 6 of the 25 students. It cannot answer "how many spent at least 50 minutes?", because 50 is inside a bin. For that you need the raw data.

## Common misconceptions

- **"A histogram is a bar chart, so the bars should have gaps."** Gaps between bars belong to bar charts of categorical data. Histogram bars touch, because the bins are next to each other on a number line.
- **"Leave out values or stems with no data."** A dotplot's axis needs equal spacing, and a stem-and-leaf plot needs every stem in its range. Leaving them out hides gaps and distorts the picture.
- **Leaves out of order or with two digits.** Each leaf is one digit, and the leaves on each stem go from smallest to largest.
- **No key on a stem-and-leaf plot.** Without a key, 3 | 8 could be 38, 3.8 or 380.
- **Counting a boundary value twice, or in the wrong bin.** State the rule, for example a ≤ x < b, and use it every time.
- **"A histogram shows the exact values."** It shows only how many values fall in each bin. You cannot read the exact maximum or median from it.
- **"If two histograms of the same data look different, one has an error."** Different bin widths can change the appearance. Both can be correct.
- **Unequal bin widths.** With unequal widths, bar heights can mislead, because a wide bin collects more values just by being wide. Use equal widths, as every histogram in this topic does.
- **"Relative frequencies can add to more than 1."** They always add to 1 (apart from rounding), because every value is in exactly one bin.

## Where this leads

Next you will describe the distributions these graphs show, using shape, centre, variability and unusual features, in [Topic 1.6](/advanced-course-resources/statistics/1-6-descriptions-one-quantitative-variable-distributions-study-guide/). Later in Unit 1 you will add boxplots and compare distributions with back-to-back stem-and-leaf plots, and with dotplots or histograms drawn on the same scale. Try the [practice questions](/advanced-course-resources/statistics/1-5-graphical-representations-one-quantitative-variable-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-5-graphical-representations-one-quantitative-variable-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-5-graphical-representations-one-quantitative-variable-checklist/) to consolidate.
