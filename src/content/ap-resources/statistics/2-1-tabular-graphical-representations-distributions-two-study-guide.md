---
resourceId: "mb-ap-stats-2.1-study-guide"
title: "Tabular and Graphical Representations for Two Categorical Variables: Study Guide (Statistics 2.1)"
description: "Learn to read and build two-way tables, side-by-side bar charts, segmented bar charts and mosaic plots, and use them to judge whether two categorical variables are associated."
course: "statistics"
unit: 2
topics: ["2.1"]
resourceType: "study-guide"
prerequisites:
  - "Frequency and relative frequency tables for one categorical variable (Topic 1.3)"
  - "Bar charts, and comparing groups of different sizes with proportions (Topic 1.4)"
  - "Observational studies and experiments (Topics 1.10 to 1.13)"
prerequisiteResources: ["mb-ap-stats-1.13-study-guide"]
learningObjectives:
  - "Read a two-way table of counts or relative frequencies and complete its row and column totals"
  - "Build and read side-by-side bar charts, segmented bar charts and mosaic plots for two categorical variables"
  - "Compare the distribution of one categorical variable across the categories of the other, using proportions rather than counts when group sizes differ"
  - "Decide from a table or graph whether two categorical variables appear to be associated"
  - "Use a two-way table or graph to support or reject a claim in context, without claiming cause from observational data"
skills: ["4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "four-function"
calculatorNote: "Only addition and division are needed. Give proportions to 2 decimal places unless they are exact."
related: ["mb-ap-stats-2.1-revision-notes", "mb-ap-stats-2.1-practice", "mb-ap-stats-2.1-checklist"]
next: "mb-ap-stats-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A two-way (contingency) table shows two categorical variables at once: one sets the rows, the other the columns, and each cell counts the individuals in both categories."
  - "Side-by-side bar charts, segmented bar charts and mosaic plots all show one variable's distribution within each category of the other."
  - "When the groups have different sizes, compare proportions within each group, not raw counts."
  - "Two categorical variables are associated if the distribution of one changes from category to category of the other. Equal proportions in every group mean no association."
  - "Association in observational data does not show cause and effect."
faqs:
  - question: "Which variable should go on the horizontal axis of a segmented bar chart?"
    answer: "Put the explanatory variable (the grouping you want to compare across) on the axis, one bar per group. Split each bar by the response variable. If neither variable explains the other, either choice is fine, but say which you chose."
  - question: "What does the width of a column in a mosaic plot tell me?"
    answer: "The width shows what share of all the individuals are in that group. A wider column is a bigger group. The heights inside the column show the distribution of the other variable within that group, so the area of each rectangle matches the share of all individuals in that cell."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two variables at once

In Unit 1 you summarised **one** categorical variable at a time: a table of counts, a bar chart, a pie chart. Many real questions involve **two** categorical variables measured on the same individuals. For example:

- Does the way customers place an order depend on their age group?
- Are passengers in one ticket class more satisfied than passengers in another?

To answer questions like these you need a display that keeps the two variables together for every individual. This topic gives you one table and three graphs that do this. Each one answers the same question: **does the distribution of one variable change as you move across the categories of the other?**

## The data set used in this guide

A fictional café chain, Hartwell Coffee, recorded 250 orders on one Saturday. For each order it noted two categorical variables:

- **Age group** of the customer: Under 30, 30–49, or 50 and over.
- **Order channel**: placed on the café's App, or at the Counter.

Each order is one observational unit, and every order falls into exactly one age group and exactly one channel.

## Two-way tables

A **two-way table**, also called a **contingency table**, lists the categories of one variable along the rows and the categories of the other along the columns. Each **cell** holds the number of individuals who are in that row category **and** that column category.

| Order channel | Under 30 | 30–49 | 50 and over | **Total** |
|---|---|---|---|---|
| App | 56 | 55 | 21 | **132** |
| Counter | 24 | 45 | 49 | **118** |
| **Total** | **80** | **100** | **70** | **250** |

How to read it:

- **Cells.** 56 orders came from customers under 30 who used the App.
- **Row totals** (right-hand column) give the distribution of order channel on its own: 132 App and 118 Counter orders.
- **Column totals** (bottom row) give the distribution of age group on its own: 80, 100 and 70 customers.
- **Grand total** (bottom right): 250 orders. The row totals and the column totals must each add to it. Check: 132 + 118 = 250 and 80 + 100 + 70 = 250.

The entries in a two-way table can be **frequencies** (counts, as above) or **relative frequencies** (proportions). If you divide every cell by the grand total of 250, you get a table whose cells add to 1. For example, 56 ÷ 250 = 0.224, so 22.4% of all orders were App orders from customers under 30. Topic 2.2 names the different kinds of relative frequency you can work out from a two-way table. In this topic, the most useful proportions are the ones **within each group**, because they let you compare groups fairly.

**Which variable is which?** Here it is natural to ask whether age helps explain order channel. Age group is the **explanatory** variable and order channel is the **response**. When comparing, work out the distribution of the response **within each category of the explanatory variable**:

| Age group | n | App | Counter |
|---|---|---|---|
| Under 30 | 80 | 56 ÷ 80 = 0.70 | 24 ÷ 80 = 0.30 |
| 30–49 | 100 | 55 ÷ 100 = 0.55 | 45 ÷ 100 = 0.45 |
| 50 and over | 70 | 21 ÷ 70 = 0.30 | 49 ÷ 70 = 0.70 |

Each row of this table adds to 1, because every customer in a group used one channel or the other.

## Side-by-side bar charts

A **side-by-side bar chart** (also called a clustered bar chart) has a cluster of bars for each category of one variable. Within each cluster there is one bar for each category of the other variable, with a key to tell them apart.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="cafe-sbs-title cafe-sbs-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cafe-sbs-title">Side-by-side bar chart of order channel counts for three age groups</title>
<desc id="cafe-sbs-desc">For each of three age groups there are two bars side by side: a solid bar for orders placed on the app and a hatched bar for orders placed at the counter. The vertical axis is frequency, from 0 to 60 customers in steps of 10. Under 30: app 56, counter 24. Age 30 to 49: app 55, counter 45. Age 50 and over: app 21, counter 49. The count is written above each bar. A key shows solid for app and hatched for counter.</desc>
<defs><pattern id="cafe-hatch-a" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<text x="82" y="264" text-anchor="end" font-size="13" fill="#1d2b44">0</text>
<line x1="90" y1="226.7" x2="610" y2="226.7" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="230.7" text-anchor="end" font-size="13" fill="#1d2b44">10</text>
<line x1="90" y1="193.3" x2="610" y2="193.3" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="197.3" text-anchor="end" font-size="13" fill="#1d2b44">20</text>
<line x1="90" y1="160" x2="610" y2="160" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="164" text-anchor="end" font-size="13" fill="#1d2b44">30</text>
<line x1="90" y1="126.7" x2="610" y2="126.7" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="130.7" text-anchor="end" font-size="13" fill="#1d2b44">40</text>
<line x1="90" y1="93.3" x2="610" y2="93.3" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="97.3" text-anchor="end" font-size="13" fill="#1d2b44">50</text>
<line x1="90" y1="60" x2="610" y2="60" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="64" text-anchor="end" font-size="13" fill="#1d2b44">60</text>
<line x1="90" y1="260" x2="610" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="90" y1="50" x2="90" y2="260" stroke="#1d2b44" stroke-width="2"/>
<rect x="126.7" y="73.3" width="48" height="186.7" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="150.7" y="67.3" text-anchor="middle" font-size="12" fill="#1d2b44">56</text>
<rect x="178.7" y="180" width="48" height="80" fill="url(#cafe-hatch-a)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="202.7" y="174" text-anchor="middle" font-size="12" fill="#1d2b44">24</text>
<text x="176.7" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Under 30</text>
<rect x="300" y="76.7" width="48" height="183.3" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="324" y="70.7" text-anchor="middle" font-size="12" fill="#1d2b44">55</text>
<rect x="352" y="110" width="48" height="150" fill="url(#cafe-hatch-a)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="376" y="104" text-anchor="middle" font-size="12" fill="#1d2b44">45</text>
<text x="350" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">30–49</text>
<rect x="473.3" y="190" width="48" height="70" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="497.3" y="184" text-anchor="middle" font-size="12" fill="#1d2b44">21</text>
<rect x="525.3" y="96.7" width="48" height="163.3" fill="url(#cafe-hatch-a)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="549.3" y="90.7" text-anchor="middle" font-size="12" fill="#1d2b44">49</text>
<text x="523.3" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">50 and over</text>
<text x="350" y="310" text-anchor="middle" font-size="14" fill="#1d2b44">Age group</text>
<text x="22" y="155" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 155)">Frequency (customers)</text>
<rect x="470" y="14" width="18" height="14" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/><text x="494" y="26" font-size="13" fill="#1d2b44">App</text>
<rect x="470" y="34" width="18" height="14" fill="url(#cafe-hatch-a)" stroke="#1d2b44" stroke-width="1.5"/><text x="494" y="46" font-size="13" fill="#1d2b44">Counter</text>
</svg>
<figcaption>Figure 1. Side-by-side bar chart of counts for 250 orders at the fictional Hartwell Coffee. Solid bars: App. Hatched bars: Counter. The age groups have different sizes (80, 100 and 70), so counts alone can mislead.</figcaption>
</figure>

A side-by-side bar chart of **counts** shows the table exactly, but it can mislead when the groups have different sizes. In Figure 1, the App bars for "Under 30" (56) and "30–49" (55) look almost the same. That does not mean the two age groups use the App equally: the 30–49 group is bigger (100 against 80). As proportions, 0.70 of under-30s used the App against 0.55 of 30–49s.

The fix is the same as in Topic 1.4: if the groups differ in size, draw the bars as **relative frequencies within each group** (0.70 and 0.30, then 0.55 and 0.45, then 0.30 and 0.70). Then every cluster is measured out of 1 and the bars can be compared directly.

## Segmented bar charts

A **segmented bar chart** (also called a stacked bar chart) gives each group one bar of height 1 (or 100%). The bar is cut into segments, one for each category of the response variable. The length of each segment is the proportion of that group in that category.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="cafe-seg-title cafe-seg-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cafe-seg-title">Segmented bar chart of order channel within each age group</title>
<desc id="cafe-seg-desc">Three bars of equal height, one for each age group, each reaching 1.0 on a relative frequency axis that runs from 0 to 1.0. Each bar is split into a solid lower segment for app orders and a hatched upper segment for counter orders. Under 30: app 0.70, counter 0.30. Age 30 to 49: app 0.55, counter 0.45. Age 50 and over: app 0.30, counter 0.70. The solid app segment gets shorter from left to right.</desc>
<defs><pattern id="cafe-hatch-b" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<text x="82" y="264" text-anchor="end" font-size="13" fill="#1d2b44">0.0</text>
<line x1="90" y1="220" x2="560" y2="220" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="224" text-anchor="end" font-size="13" fill="#1d2b44">0.2</text>
<line x1="90" y1="180" x2="560" y2="180" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="184" text-anchor="end" font-size="13" fill="#1d2b44">0.4</text>
<line x1="90" y1="140" x2="560" y2="140" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="144" text-anchor="end" font-size="13" fill="#1d2b44">0.6</text>
<line x1="90" y1="100" x2="560" y2="100" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="104" text-anchor="end" font-size="13" fill="#1d2b44">0.8</text>
<line x1="90" y1="60" x2="560" y2="60" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="64" text-anchor="end" font-size="13" fill="#1d2b44">1.0</text>
<line x1="90" y1="260" x2="560" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="90" y1="50" x2="90" y2="260" stroke="#1d2b44" stroke-width="2"/>
<rect x="123.3" y="120" width="90" height="140" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="123.3" y="60" width="90" height="60" fill="url(#cafe-hatch-b)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="146.3" y="180" width="44" height="18" fill="#ffffff"/><text x="168.3" y="194" text-anchor="middle" font-size="13" fill="#1d2b44">0.70</text>
<rect x="146.3" y="80" width="44" height="18" fill="#ffffff"/><text x="168.3" y="94" text-anchor="middle" font-size="13" fill="#1d2b44">0.30</text>
<text x="168.3" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Under 30</text>
<rect x="280" y="150" width="90" height="110" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="280" y="60" width="90" height="90" fill="url(#cafe-hatch-b)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="303" y="195" width="44" height="18" fill="#ffffff"/><text x="325" y="209" text-anchor="middle" font-size="13" fill="#1d2b44">0.55</text>
<rect x="303" y="95" width="44" height="18" fill="#ffffff"/><text x="325" y="109" text-anchor="middle" font-size="13" fill="#1d2b44">0.45</text>
<text x="325" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">30–49</text>
<rect x="436.7" y="200" width="90" height="60" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="436.7" y="60" width="90" height="140" fill="url(#cafe-hatch-b)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="459.7" y="220" width="44" height="18" fill="#ffffff"/><text x="481.7" y="234" text-anchor="middle" font-size="13" fill="#1d2b44">0.30</text>
<rect x="459.7" y="120" width="44" height="18" fill="#ffffff"/><text x="481.7" y="134" text-anchor="middle" font-size="13" fill="#1d2b44">0.70</text>
<text x="481.7" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">50 and over</text>
<text x="325" y="310" text-anchor="middle" font-size="14" fill="#1d2b44">Age group</text>
<text x="22" y="155" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 155)">Relative frequency</text>
<rect x="575" y="80" width="18" height="14" fill="url(#cafe-hatch-b)" stroke="#1d2b44" stroke-width="1.5"/><text x="575" y="112" font-size="13" fill="#1d2b44">Counter</text>
<rect x="575" y="200" width="18" height="14" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/><text x="575" y="232" font-size="13" fill="#1d2b44">App</text>
</svg>
<figcaption>Figure 2. Segmented bar chart of order channel within each age group. Solid segment: App. Hatched segment: Counter. Every bar is one whole group, so the bars can be compared directly.</figcaption>
</figure>

How to draw one:

1. Find the proportion of each response category **within each group** (the table above).
2. Draw one bar per group, all the same height (1.0) and the same width.
3. Stack the segments in the same order in every bar. For Under 30, the App segment runs from 0 to 0.70 and the Counter segment from 0.70 to 1.00.
4. Tell the segments apart with a key. Use patterns or labels, not colour alone, so the chart works in black and white.

**Reading it.** Look at where the dividing line sits in each bar. In Figure 2 the line falls from 0.70 to 0.55 to 0.30 as age increases. The share of App orders goes down in each older group. That changing pattern is the visual sign of an **association**.

## Mosaic plots

A **mosaic plot** is a segmented bar chart in which the **width** of each bar also carries information. The width of each column is proportional to the size of that group, as a share of all individuals. The segments inside each column are the same within-group proportions as in a segmented bar chart.

<figure>
<svg viewBox="0 0 640 340" role="img" aria-labelledby="cafe-mos-title cafe-mos-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cafe-mos-title">Mosaic plot of order channel by age group</title>
<desc id="cafe-mos-desc">A mosaic plot with three columns, one for each age group. Column widths are proportional to group size: Under 30 is 0.32 of the width (80 customers), 30 to 49 is 0.40 (100 customers) and 50 and over is 0.28 (70 customers). Each column is split into a solid lower rectangle for app orders and a hatched upper rectangle for counter orders. The app rectangles have heights 0.70, 0.55 and 0.30. The area of each rectangle is proportional to the number of customers in that cell of the table.</desc>
<defs><pattern id="cafe-hatch-c" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="340" fill="#ffffff"/>
<text x="82" y="274" text-anchor="end" font-size="13" fill="#1d2b44">0.0</text>
<text x="82" y="234" text-anchor="end" font-size="13" fill="#1d2b44">0.2</text>
<text x="82" y="194" text-anchor="end" font-size="13" fill="#1d2b44">0.4</text>
<text x="82" y="154" text-anchor="end" font-size="13" fill="#1d2b44">0.6</text>
<text x="82" y="114" text-anchor="end" font-size="13" fill="#1d2b44">0.8</text>
<text x="82" y="74" text-anchor="end" font-size="13" fill="#1d2b44">1.0</text>
<rect x="90" y="130" width="156.2" height="140" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="90" y="70" width="156.2" height="60" fill="url(#cafe-hatch-c)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="134.1" y="190" width="68" height="18" fill="#ffffff"/><text x="168.1" y="204" text-anchor="middle" font-size="13" fill="#1d2b44">App 0.70</text>
<rect x="118.1" y="90" width="100" height="18" fill="#ffffff"/><text x="168.1" y="104" text-anchor="middle" font-size="13" fill="#1d2b44">Counter 0.30</text>
<text x="168.1" y="290" text-anchor="middle" font-size="13" fill="#1d2b44">Under 30</text>
<text x="168.1" y="58" text-anchor="middle" font-size="12" fill="#1d2b44">n = 80 (width 0.32)</text>
<rect x="252.2" y="160" width="195.2" height="110" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="252.2" y="70" width="195.2" height="90" fill="url(#cafe-hatch-c)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="315.8" y="205" width="68" height="18" fill="#ffffff"/><text x="349.8" y="219" text-anchor="middle" font-size="13" fill="#1d2b44">App 0.55</text>
<rect x="299.8" y="105" width="100" height="18" fill="#ffffff"/><text x="349.8" y="119" text-anchor="middle" font-size="13" fill="#1d2b44">Counter 0.45</text>
<text x="349.8" y="290" text-anchor="middle" font-size="13" fill="#1d2b44">30–49</text>
<text x="349.8" y="58" text-anchor="middle" font-size="12" fill="#1d2b44">n = 100 (width 0.40)</text>
<rect x="453.4" y="210" width="136.6" height="60" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="453.4" y="70" width="136.6" height="140" fill="url(#cafe-hatch-c)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="487.7" y="230" width="68" height="18" fill="#ffffff"/><text x="521.7" y="244" text-anchor="middle" font-size="13" fill="#1d2b44">App 0.30</text>
<rect x="471.7" y="130" width="100" height="18" fill="#ffffff"/><text x="521.7" y="144" text-anchor="middle" font-size="13" fill="#1d2b44">Counter 0.70</text>
<text x="521.7" y="290" text-anchor="middle" font-size="13" fill="#1d2b44">50 and over</text>
<text x="521.7" y="58" text-anchor="middle" font-size="12" fill="#1d2b44">n = 70 (width 0.28)</text>
<text x="340" y="318" text-anchor="middle" font-size="14" fill="#1d2b44">Age group (column width = share of all 250 customers)</text>
<text x="22" y="170" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 170)">Relative frequency within group</text>
<text x="340" y="24" text-anchor="middle" font-size="13" fill="#1d2b44">Solid: app. Hatched: counter.</text>
</svg>
<figcaption>Figure 3. Mosaic plot of the same data. Column widths show the share of all 250 orders in each age group (0.32, 0.40, 0.28); heights show the order channel within each group; the area of each rectangle matches the cell count.</figcaption>
</figure>

Because width × height = (share of all individuals in the group) × (share of the group in that response category), the **area** of each rectangle is proportional to the **count in that cell**. For example, the Under 30 App rectangle has area 0.32 × 0.70 = 0.224, which is 56 ÷ 250. So a mosaic plot shows three things at once: the group sizes (widths), the within-group distributions (heights) and the cell counts (areas).

The tallest App rectangle is in the Under 30 column, but the widest column is 30–49. So the mosaic also shows that the middle age group had the most orders overall, which a segmented bar chart hides.

## Association between two categorical variables

Two categorical variables are **associated** if knowing the category of one changes the distribution of the other. In practice, compare the distributions of the response within each group:

- **Associated:** the proportions differ noticeably from group to group. The dividing lines in a segmented bar chart or mosaic plot sit at different heights.
- **No association:** the proportions are the same (or almost the same) in every group. The dividing lines line up across the chart.

For the Hartwell data, the proportion of App orders is 0.70, 0.55 and 0.30 across the three age groups. These are clearly different, so **age group and order channel are associated** for these 250 orders. Younger customers were more likely to order on the App.

Two cautions:

- **Sample data vary.** Real data will rarely give exactly equal proportions even when there is no association in the population. Small differences are expected by chance. Later in the course you will learn a test for deciding whether a difference is too large to be explained by chance alone. For now, describe what the data show.
- **Association is not causation.** The café **observed** its customers; it did not assign ages or channels. Something else, such as how often a customer visits, could be linked to both age and App use. As in Topic 1.13, only a well-designed experiment with random assignment can support a cause-and-effect conclusion.

## Using a table or graph to justify a claim

A claim based on two categorical variables must:

1. **Compare like with like.** Use proportions within each group when group sizes differ.
2. **Quote the values** from the table or graph.
3. **Answer in context**, naming the individuals and both variables, and stay within what the data can show.

For example: "In this sample of 250 Saturday orders, customers under 30 were more likely to order on the App than customers aged 50 and over (0.70 against 0.30), so order channel is associated with age group."

## Worked example 1: a ferry survey with groups of different sizes

**Question.** A fictional ferry company asked 300 passengers to rate their journey as Good, Fair or Poor. There were 240 Standard-class passengers (120 Good, 84 Fair, 36 Poor) and 60 Premium-class passengers (42 Good, 12 Fair, 6 Poor). (a) Build the two-way table. (b) A manager says: "Standard passengers enjoyed the trip more, because 120 of them rated it Good and only 42 Premium passengers did." Is this supported? (c) Describe a segmented bar chart of the ratings and decide whether ticket class and rating are associated.

**(a)** Put ticket class in the columns and rating in the rows, then add totals.

| Rating | Standard | Premium | **Total** |
|---|---|---|---|
| Good | 120 | 42 | **162** |
| Fair | 84 | 12 | **96** |
| Poor | 36 | 6 | **42** |
| **Total** | **240** | **60** | **300** |

Check: 162 + 96 + 42 = 300 and 240 + 60 = 300.

**(b)** **Not supported.** The counts cannot be compared directly, because there were 4 times as many Standard passengers (240) as Premium passengers (60). Within each class:

- Standard: Good 120 ÷ 240 = 0.50; Fair 84 ÷ 240 = 0.35; Poor 36 ÷ 240 = 0.15.
- Premium: Good 42 ÷ 60 = 0.70; Fair 12 ÷ 60 = 0.20; Poor 6 ÷ 60 = 0.10.

A **larger** proportion of Premium passengers rated the journey Good (0.70 against 0.50). The data point the opposite way to the manager's claim.

**(c)** Draw two bars, Standard and Premium, each of height 1. Stack the segments in the same order (Good at the bottom, then Fair, then Poor). The boundaries are at 0.50 and 0.85 for Standard (0.50 + 0.35 = 0.85) and at 0.70 and 0.90 for Premium. The Good segment is clearly taller for Premium, and the Fair and Poor segments are shorter. Ticket class and rating **are associated** for these passengers: Premium passengers were more likely to rate their journey Good.

**Check.** Each class's proportions add to 1 (0.50 + 0.35 + 0.15 and 0.70 + 0.20 + 0.10). The conclusion is about these 300 passengers; this was a survey, not an experiment, so it does not show that buying a Premium ticket causes a better rating.

## Worked example 2: reading a mosaic plot with no association

**Question.** A fictional garden centre randomly assigned 160 seedlings to two fertilisers, X and Y, and recorded whether each seedling flowered within 6 weeks. In the mosaic plot of the results, the column for X has width 0.60 and the column for Y has width 0.40. In both columns, the "Flowered" segment runs from 0 to 0.75 and the "Did not flower" segment from 0.75 to 1. (a) How many seedlings got each fertiliser? (b) Rebuild the two-way table. (c) Is fertiliser associated with flowering in these data?

**(a)** Width = share of all 160 seedlings. Fertiliser X: 0.60 × 160 = **96 seedlings**. Fertiliser Y: 0.40 × 160 = **64 seedlings**.

**(b)** Height = proportion within the column.

| Outcome | Fertiliser X | Fertiliser Y | **Total** |
|---|---|---|---|
| Flowered | 0.75 × 96 = 72 | 0.75 × 64 = 48 | **120** |
| Did not flower | 24 | 16 | **40** |
| **Total** | **96** | **64** | **160** |

**(c)** **No association.** The proportion that flowered is the same for both fertilisers: 72 ÷ 96 = 0.75 and 48 ÷ 64 = 0.75. In the mosaic plot, the dividing line sits at the same height in both columns. Knowing which fertiliser a seedling got tells you nothing extra about whether it flowered.

**Check.** More seedlings flowered with X (72) than with Y (48), but only because more seedlings got X. The areas show this: 0.60 × 0.75 = 0.45 of all seedlings were X and flowered, against 0.40 × 0.75 = 0.30 for Y. Since this was an experiment with random assignment, a clear difference would have been evidence that fertiliser affects flowering. Here there is no difference to explain.

## Common misconceptions

- **"Bigger count, so more likely."** A larger group has larger counts in every category. Compare proportions within each group when group sizes differ.
- **"The bars in a segmented bar chart show counts."** Every bar is the whole group (height 1). Segment lengths are proportions within the group, so you cannot read group sizes from a segmented bar chart.
- **"All the columns in a mosaic plot should be the same width."** Different widths are the point: they show the group sizes. Equal widths only happen when the groups are equal in size.
- **Stacking segments in a different order in each bar.** The order must be the same in every bar, or the bars cannot be compared.
- **Using colour alone for the segments.** Use a key with patterns or labels so the chart is readable in print and by everyone.
- **"Association means one variable causes the other."** Observational data show only that the variables are linked. Confounding variables may explain the link.
- **"Any difference at all means association."** Sample proportions vary by chance. Describe the size of the difference, and remember that small differences may not be meaningful.
- **Forgetting the totals.** Check that rows and columns add to the grand total before you calculate anything.

## Where this leads

Next, Topic 2.2 turns the cells and totals of a two-way table into joint, marginal and conditional relative frequencies, and uses them to measure association: see the [Topic 2.2 study guide](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-study-guide/). Two-way tables also lead into probability later in this unit. Try the [practice questions](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-checklist/) to consolidate. For a reminder of why only experiments can show cause and effect, go back to the [Topic 1.13 study guide](/advanced-course-resources/statistics/1-13-experimental-design-study-guide/).
