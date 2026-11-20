---
title: "Cambridge A Level Information Technology (9626): Graphs and charts"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 8 – Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8.4
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
  - qualification: "a-level"
    topic: "spreadsheets"
    subtopic: "graphs-and-charts"
description: "Cambridge 9626 IT section 8.4 study guide: choosing chart types, selecting data series, formatting axes, labels, legends and scales, secondary axes and pie sector extraction."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 8.4 Graphs and charts** of Topic 8 Spreadsheets in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, tested mainly in Paper 2 Practical, where you build and format charts to a specification, and in Paper 1 Theory, where you choose a chart type and justify it. The [Spreadsheets overview](/resources/a-level-cambridge-ict-spreadsheets/) lists the chart types; this page explains how to choose them, select data and format each part. Use it with the [graphs and charts revision notes](/resources/cambridge-a-level-ict-9626-graphs-and-charts-revision-notes/) and the [graphs and charts practice questions](/resources/cambridge-a-level-ict-9626-graphs-and-charts-practice/).

## What section 8.4 covers

| Skill | Content |
|---|---|
| Creating a chart for a purpose | Choosing appropriate data series, from contiguous or non-contiguous data or specified ranges; bar, pie, line, comparative bar, comparative line and combination charts |
| Formatting a chart | Title, legend, segment labels, values and percentages, category and series labels, value axis labels, scales, axis maximum and minimum, data intervals, secondary axis, extracting a pie sector, field selection buttons |

## Choosing the right chart

A chart is chosen to suit the **purpose** and the **type of data**.

| Chart | Best for | Data needed | Notes |
|---|---|---|---|
| Bar (column) chart | Comparing values between categories | One series, text labels | Bars start at zero; gaps between bars |
| Comparative bar chart | Comparing several series for each category | Two or more series | Clustered, or stacked to show a total |
| Pie chart | Showing each part's share of one whole | One series of positive values | Use few sectors (about six or fewer); values must add to a whole |
| Line graph | Showing change over time, or a trend | Continuous data such as dates or months | One series |
| Comparative line graph | Comparing trends of several series over the same time | Two or more series | Different lines need clear colours or styles |
| Combination chart | Showing data of different kinds or units together | Two series with different units or scales | For example columns for rainfall and a line for temperature, with a **secondary axis** |

### Choosing: worked reasoning

- "Show how rainfall changes from January to June" is change over time: a **line graph**.
- "Compare the units sold in each region" compares categories: a **bar chart**.
- "Show the percentage of units sold by each region" is share of a whole: a **pie chart**.
- "Compare the sales of pens and books in each region" is several series per category: a **comparative bar chart**.
- "Show rainfall (millimetres) and temperature (degrees Celsius) by month in one chart" has two different units: a **combination chart** with a secondary axis.

## Selecting the data

The **data series** are the sets of values plotted. The **category labels** are the names along the horizontal axis (or the pie sectors).

### Contiguous data

**Contiguous** data is in cells that are next to each other, such as `A1:B7`. Select the block, including the labels in the first row and column, and insert the chart.

### Non-contiguous data

**Non-contiguous** data is in separate blocks, for example the region names in column A and the units in column C, with the price in column B between them that you do not want to plot. Select the first range, hold the Ctrl key (or the equivalent) and select the second range, then insert the chart.

### Specified ranges

Some tasks name the exact ranges to use, such as "use `A2:A4` for the labels and `C2:C4` for the values". Choose the series values and the category labels directly in the chart data settings, and check that the series names are correct.

### Worked example 1: pie chart of units by region

The table below summarises the units sold, taken from a sales sheet.

| Region | Units | Share of total | Angle of sector |
|---|---|---|---|
| North | 102 | 58.29% | 209.8 degrees |
| South | 43 | 24.57% | 88.5 degrees |
| East | 30 | 17.14% | 61.7 degrees |
| Total | 175 | 100% | 360 degrees |

Calculation: North is 102 divided by 175, which is 0.5829, or 58.29%, and the angle is 0.5829 × 360, which is 209.8 degrees. The spreadsheet does this automatically when you display percentages.

To build the chart: select `A2:B4` (the region names and units), insert a pie chart, add the title "Units sold by region", show **percentages** and **category names** as segment labels, and delete the legend if the labels already show the names (or keep the legend and remove the names from the segments). To draw attention to North, **extract** (pull out) its sector from the pie.

## Formatting a chart

Each item the syllabus lists has a purpose. A chart is not finished until the reader can understand it without asking.

| Item | Purpose and how to apply it |
|---|---|
| Title | Says what the chart shows, including the period or unit |
| Legend | Explains which colour or line is which series; needed when there are two or more series; position it without covering the data |
| Segment labels | Names of the pie sectors |
| Segment values and percentages | The number or the share on each pie sector |
| Category axis labels | Names (or dates) along the horizontal axis; the category axis title says what they are |
| Series labels | The names of each data series, taken from the heading cells |
| Value axis labels (axis title) | Says what the numbers on the vertical axis measure, including the unit, for example "Rainfall (mm)" |
| Scale | The range and spacing of numbers on the value axis |
| Axis maximum and minimum | The lowest and highest values on the axis; set them so the chart is easy to read and not misleading |
| Data intervals (major unit) | The gap between gridlines or tick marks, such as every 10 |
| Secondary axis | A second value axis on the right, for a series with different units or a very different size |
| Extract pie sector | Pull one sector out of the pie to emphasise it |
| Field selection buttons | The buttons on a pivot chart that let the reader choose which fields to show |

### Axis scales: what to set

- **Minimum:** for a bar chart, start the value axis at **zero**. A bar that starts at 80 makes small differences look huge. A line graph may start higher if the values are all high, but the choice must be clear.
- **Maximum:** a little above the highest value so the data is not squashed against the top.
- **Interval:** choose a regular step that gives about five to ten gridlines, such as 10 for rainfall values up to 60.

### Worked example 2: a combination chart

Monthly climate data for six months:

| Month | Rainfall (mm) | Temperature (degrees Celsius) |
|---|---|---|
| January | 60 | 5 |
| February | 45 | 6 |
| March | 50 | 9 |
| April | 38 | 12 |
| May | 30 | 15 |
| June | 22 | 19 |

The task: show both series in one chart for the reader.

1. Select all of `A1:C7`, including headings.
2. Insert a **combination chart**. Set the rainfall series as a **column** chart and the temperature series as a **line**.
3. The rainfall values (22 to 60) and the temperature values (5 to 19) are on different scales and units, so put temperature on a **secondary axis**.
4. Set the primary axis from 0 to 70 with intervals of 10, and the secondary axis from 0 to 25 with intervals of 5.
5. Add the title "Rainfall and temperature, January to June".
6. Add axis titles "Rainfall (mm)" on the left, "Temperature (degrees Celsius)" on the right, and "Month" on the horizontal axis.
7. Add a legend so the reader can tell the columns from the line.

Without the secondary axis, the temperature line would hug the bottom of the chart and the trend would be hard to see.

## Making charts clear and honest

- Use **one idea per chart**.
- Use distinct colours or patterns that remain clear when printed in black and white.
- Avoid **3-D effects**, which distort the sizes of bars and pie sectors.
- Do not use a pie chart if the values do not add up to a meaningful whole, or if there are too many sectors.
- Keep text large enough to read.
- Make sure the chart is the right size and does not hide the data table or other content.

## Common mistakes

- Choosing a line graph for categories that have no order (such as regions), or a pie chart for change over time.
- Forgetting axis titles with units.
- Starting a bar chart axis above zero.
- Selecting the wrong cells, so the headings are plotted as data.
- Selecting a non-contiguous range without holding Ctrl, so the wrong block is plotted.
- Leaving out the legend when there is more than one series.
- Showing a legend and segment labels that repeat the same information on a pie chart.
- Putting two series with different units on the same axis.

## Exam technique

- When asked to **choose** a chart, state the type, the data it uses and a reason that links to the purpose (change over time, share of a whole, comparison).
- In the practical paper, follow **every** instruction for labels, scale, intervals and position. Each is likely to be a mark.
- Re-read the specification after drawing the chart and tick each item off.
- Make sure the chart is readable when printed: check that labels do not overlap.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 8 Spreadsheets, section 8.4 Graphs and charts.
