---
resourceId: "mb-ap-stats-1.4-study-guide"
title: "Graphical Representations for One Categorical Variable: Study Guide (Statistics 1.4)"
description: "Learn to draw and read bar charts and pie charts for one categorical variable, use them to justify claims in context, and compare groups of different sizes fairly."
course: "statistics"
unit: 1
topics: ["1.4"]
resourceType: "study-guide"
prerequisites:
  - "Building frequency and relative frequency tables for one categorical variable (Topic 1.3)"
  - "Turning a count into a proportion and a percentage"
prerequisiteResources: ["mb-ap-stats-1.3-study-guide"]
learningObjectives:
  - "Draw a bar chart of counts or of relative frequencies for one categorical variable, with labelled axes and a scale that starts at 0"
  - "Draw a pie chart by turning each relative frequency into a slice angle, and check that the slices make the whole circle"
  - "Read counts and proportions from a bar chart or pie chart and use them to support or reject a claim in context"
  - "Compare two or more groups on the same categorical variable using relative frequencies, tables and graphs"
  - "Choose between a bar chart and a pie chart, and spot graphs that mislead"
skills: ["3", "4"]
studyMinutes: 35
difficulty: "foundation"
calculator: "four-function"
calculatorNote: "Only multiplication and division are needed. Slice angle = relative frequency × 360°. Give proportions to 2 or 3 decimal places and angles to 1 decimal place unless they are exact."
related: ["mb-ap-stats-1.4-revision-notes", "mb-ap-stats-1.4-practice", "mb-ap-stats-1.4-checklist"]
next: "mb-ap-stats-1.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A bar chart has one bar per category; the height (or length) of the bar is the count or the relative frequency."
  - "A pie chart has one slice per category; the slice's share of the whole circle is its relative frequency, so slice angle = proportion × 360°."
  - "The slices of a pie chart always make up the whole (360°, or 100%). Use a pie chart only when every individual is in exactly one category."
  - "To compare groups of different sizes, compare relative frequencies, not counts."
  - "A claim from a graph must quote the values it relies on and say what they mean in context."
faqs:
  - question: "What is the difference between a bar chart and a histogram?"
    answer: "A bar chart shows a categorical variable: each bar is a category, the bars have gaps between them, and the order of the categories can be changed. A histogram (Topic 1.5) shows a quantitative variable: each bar is an interval of numbers, the bars touch, and the order is fixed by the number line."
  - question: "Should my bar chart show counts or relative frequencies?"
    answer: "For one group, either is fine: the bars have the same shape and only the scale on the axis changes. To compare groups of different sizes, use relative frequencies so that each group is measured out of 1."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why draw a graph of a categorical variable?

In Topic 1.3 you summarised a categorical variable in a table: the count and the proportion in each category. A graph shows the same distribution as a picture. You can see at a glance which category is most common, which is rare, and how the categories compare in size.

The course uses two graphs for one categorical variable:

- a **bar chart** (also called a bar graph), and
- a **pie chart**.

Both are built from a frequency table or a relative frequency table. Neither adds new information. A good graph simply makes the information easier to see and to use as evidence.

## The data set used in this guide

This guide uses the same fictional data as the Topic 1.3 guide. Larkfield Academy asked 25 students: "How do you usually travel to school?" Each student gave exactly one answer. The observational units are the 25 students and the variable is **usual way of travelling to school**.

| Travel method | Frequency | Relative frequency |
|---|---|---|
| Bus | 9 | 0.36 |
| Walk | 7 | 0.28 |
| Car | 5 | 0.20 |
| Bicycle | 3 | 0.12 |
| Train | 1 | 0.04 |
| **Total** | **25** | **1.00** |

## Bar charts

A **bar chart** has one bar for each category. The **height** of a vertical bar (or the **length** of a horizontal bar) shows how many observational units are in that category. The height can be a **frequency** (a count) or a **relative frequency** (a proportion).

How to draw one:

1. Put the category names along one axis. Leave a **gap** between the bars, because the categories are separate groups.
2. Make every bar the **same width**. Only the height carries information.
3. Put the counts or proportions on the other axis, with an even scale that **starts at 0**.
4. Label both axes, and give the chart a title or caption that names the individuals and n.

You choose the order of the categories. Ordering from tallest bar to shortest makes comparisons easy. If the categories have a natural order, such as "Never, Sometimes, Often", keep that order instead.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="bar-title bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bar-title">Relative frequency bar chart of how 25 Larkfield students travel to school</title>
<desc id="bar-desc">Five separate vertical bars of equal width with gaps between them. The vertical axis is labelled relative frequency and runs from 0 to 0.40 in steps of 0.10. The horizontal axis is labelled usual way of travelling to school. The bars, from left to right, are: Bus 0.36 (9 students), Walk 0.28 (7 students), Car 0.20 (5 students), Bicycle 0.12 (3 students) and Train 0.04 (1 student). Each bar has its relative frequency and count written above it.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<text x="82" y="254" text-anchor="end" font-size="13" fill="#1d2b44">0.00</text>
<line x1="90" y1="200" x2="610" y2="200" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="204" text-anchor="end" font-size="13" fill="#1d2b44">0.10</text>
<line x1="90" y1="150" x2="610" y2="150" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="154" text-anchor="end" font-size="13" fill="#1d2b44">0.20</text>
<line x1="90" y1="100" x2="610" y2="100" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="104" text-anchor="end" font-size="13" fill="#1d2b44">0.30</text>
<line x1="90" y1="50" x2="610" y2="50" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="54" text-anchor="end" font-size="13" fill="#1d2b44">0.40</text>
<line x1="90" y1="250" x2="610" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="90" y1="40" x2="90" y2="250" stroke="#1d2b44" stroke-width="2"/>
<rect x="117" y="70" width="60" height="180" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="147" y="62" text-anchor="middle" font-size="13" fill="#1d2b44">0.36 (9)</text>
<text x="147" y="270" text-anchor="middle" font-size="13" fill="#1d2b44">Bus</text>
<rect x="221" y="110" width="60" height="140" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="251" y="102" text-anchor="middle" font-size="13" fill="#1d2b44">0.28 (7)</text>
<text x="251" y="270" text-anchor="middle" font-size="13" fill="#1d2b44">Walk</text>
<rect x="325" y="150" width="60" height="100" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="355" y="142" text-anchor="middle" font-size="13" fill="#1d2b44">0.20 (5)</text>
<text x="355" y="270" text-anchor="middle" font-size="13" fill="#1d2b44">Car</text>
<rect x="429" y="190" width="60" height="60" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="459" y="182" text-anchor="middle" font-size="13" fill="#1d2b44">0.12 (3)</text>
<text x="459" y="270" text-anchor="middle" font-size="13" fill="#1d2b44">Bicycle</text>
<rect x="533" y="230" width="60" height="20" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="563" y="222" text-anchor="middle" font-size="13" fill="#1d2b44">0.04 (1)</text>
<text x="563" y="270" text-anchor="middle" font-size="13" fill="#1d2b44">Train</text>
<text x="350" y="296" text-anchor="middle" font-size="14" fill="#1d2b44">Usual way of travelling to school</text>
<text x="22" y="145" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 145)">Relative frequency</text>
</svg>
<figcaption>Figure 1. Relative frequency bar chart for the 25 fictional Larkfield students. The number in brackets above each bar is the count. A bar chart of the counts would look exactly the same; only the numbers on the vertical axis would change.</figcaption>
</figure>

**Counts or proportions?** Every count is divided by the same n = 25. So a frequency bar chart and a relative frequency bar chart of one data set have bars of the same relative heights. The Bus bar is 9 ÷ 5 = 1.8 times as tall as the Car bar in both. Use relative frequencies when you compare groups of different sizes (see below).

**Reading a bar chart.** Read the top of each bar across to the axis. From a relative frequency chart you can get a count back only if you know n: for example, 0.28 × 25 = 7 students walk.

**A bar chart is not a histogram.** In Topic 1.5 you will draw histograms for quantitative data. There the bars touch, because they cover neighbouring intervals of numbers. In a bar chart the bars are separate and the order of categories is your choice. So words such as "skewed to the right" do not describe a bar chart of unordered categories: change the order of the bars and the "shape" changes.

## Pie charts

A **pie chart** is a circle cut into slices, one slice for each category. The **area** of a slice, as a fraction of the whole circle, equals the **relative frequency** of that category. Because every individual is in exactly one category, the slices together make up the whole circle: a total of 1, or 100%.

The angle at the centre of a slice is in the same proportion as its area. So:

**slice angle = relative frequency × 360°**

For the Larkfield data:

| Travel method | Relative frequency | Slice angle |
|---|---|---|
| Bus | 0.36 | 0.36 × 360° = 129.6° |
| Walk | 0.28 | 100.8° |
| Car | 0.20 | 72° |
| Bicycle | 0.12 | 43.2° |
| Train | 0.04 | 14.4° |
| **Total** | **1.00** | **360°** |

**Check:** the angles must add to 360°. If they do not (allowing for rounding), a category is missing or a calculation is wrong.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="pie-title pie-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pie-title">Pie chart of how 25 Larkfield students travel to school</title>
<desc id="pie-desc">A circle divided into five slices, starting at the top and going clockwise. Each slice is labelled with its category, percentage and angle: Bus 36 percent, 129.6 degrees; Walk 28 percent, 100.8 degrees; Car 20 percent, 72 degrees; Bicycle 12 percent, 43.2 degrees; Train 4 percent, 14.4 degrees. The slices are shaded from light to dark, but every slice also has a text label.</desc>
<rect x="0" y="0" width="640" height="360" fill="#ffffff"/>
<path d="M250 180 L250.0 60.0 A120 120 0 0 1 342.5 256.5 Z" fill="#e3e8f0" stroke="#ffffff" stroke-width="2"/>
<path d="M250 180 L342.5 256.5 A120 120 0 0 1 157.5 256.5 Z" fill="#b8c4d8" stroke="#ffffff" stroke-width="2"/>
<path d="M250 180 L157.5 256.5 A120 120 0 0 1 148.7 115.7 Z" fill="#8d9fbf" stroke="#ffffff" stroke-width="2"/>
<path d="M250 180 L148.7 115.7 A120 120 0 0 1 220.2 63.8 Z" fill="#62799f" stroke="#ffffff" stroke-width="2"/>
<path d="M250 180 L220.2 63.8 A120 120 0 0 1 250.0 60.0 Z" fill="#3d5277" stroke="#ffffff" stroke-width="2"/>
<line x1="355.0" y1="130.6" x2="382.1" y2="117.8" stroke="#1d2b44" stroke-width="1"/>
<text x="386.1" y="113.8" text-anchor="start" font-size="13" fill="#1d2b44">Bus 36% (129.6°)</text>
<line x1="250.0" y1="296.0" x2="250.0" y2="326.0" stroke="#1d2b44" stroke-width="1"/>
<text x="250.0" y="340.0" text-anchor="middle" font-size="13" fill="#1d2b44">Walk 28% (100.8°)</text>
<line x1="134.2" y1="187.3" x2="104.3" y2="189.2" stroke="#1d2b44" stroke-width="1"/>
<text x="100.3" y="193.2" text-anchor="end" font-size="13" fill="#1d2b44">Car 20% (72°)</text>
<line x1="181.8" y1="86.2" x2="164.2" y2="61.9" stroke="#1d2b44" stroke-width="1"/>
<text x="160.2" y="57.9" text-anchor="end" font-size="13" fill="#1d2b44">Bicycle 12% (43.2°)</text>
<line x1="235.5" y1="64.9" x2="231.7" y2="35.2" stroke="#1d2b44" stroke-width="1"/>
<text x="231.7" y="31.2" text-anchor="middle" font-size="13" fill="#1d2b44">Train 4% (14.4°)</text>
</svg>
<figcaption>Figure 2. Pie chart of the same 25 students. Each label gives the percentage and the slice angle. The Bus and Walk slices together cover 64% of the circle, a little under two-thirds.</figcaption>
</figure>

To read a count from a pie chart, reverse the steps: count = (angle ÷ 360°) × n. For Bus, (129.6 ÷ 360) × 25 = 0.36 × 25 = 9 students.

## Bar chart or pie chart?

Both graphs show the same distribution, but they suit different jobs.

| Question | Bar chart | Pie chart |
|---|---|---|
| Can it show counts? | Yes, on the axis | Only as labels; the slices show proportions |
| Is it easy to compare two similar categories? | Yes: compare heights against one scale | Harder: people judge angles and areas less accurately |
| Does it show "part of a whole"? | Not directly | Yes: the whole circle is everyone |
| Can it be used if individuals may give more than one answer? | Yes (each bar shows the proportion of individuals who gave that answer) | **No**: the parts would add to more than the whole |

So use a pie chart only when the categories are separate parts of one whole: every individual in **exactly one** category, with no category left out. A bar chart works in every case and is usually easier to read accurately.

**Graphs that mislead.** Watch for these faults, and avoid them in your own graphs:

- A vertical axis that does **not start at 0**. If the Larkfield axis started at 6 students, the Bus bar (9) would look 3 times as tall as the Walk bar (7), although 9 is only about 1.29 times 7.
- Bars of **different widths**, or pictures of different sizes, which change the area the eye compares.
- **3-D** pie charts, which make the front slices look bigger than they are.
- A pie chart whose percentages do **not add to 100%**.

## Using a graph to justify a claim

A graph is evidence. A good claim based on it does three things:

1. **Quotes the values** read from the graph (counts, proportions or percentages).
2. **Uses the right comparison words.** "Most common" means the largest category. "A majority" means more than half (more than 0.50). "Twice as many" needs a ratio of 2.
3. **States the conclusion in context**, naming the individuals and the variable.

For example: "Bus is the most common way for these 25 Larkfield students to travel to school (36%), but it is not a majority, because 0.36 is less than 0.50."

## Comparing two or more groups

You can compare groups on the **same categorical variable** with tables, bar charts or pie charts. The key rule: **if the groups have different sizes, compare relative frequencies, not counts.** A bigger group will tend to have bigger counts in every category, simply because it is bigger.

A clear way to compare is a **side-by-side bar chart**: for each category, the bars for the different groups stand next to each other, all against one relative frequency scale. Two pie charts can also be compared, slice by slice, because each circle is that group's whole. You will meet more graphs of this kind in Unit 2 (Topic 2.1), where the group becomes a second categorical variable.

## Worked example 1: drawing both graphs from a table

**Question.** A fictional cinema sold 120 tickets on one evening. The ticket types were Adult 54, Student 30, Child 24 and Senior 12. Find the relative frequencies, describe how to draw a relative frequency bar chart, and find the slice angles for a pie chart. Describe the distribution in context.

1. **Check the total.** 54 + 30 + 24 + 12 = 120. Every ticket is counted once.
2. **Relative frequencies.** Divide each count by n = 120: Adult 54 ÷ 120 = 0.45; Student 30 ÷ 120 = 0.25; Child 24 ÷ 120 = 0.20; Senior 12 ÷ 120 = 0.10. Check: 0.45 + 0.25 + 0.20 + 0.10 = 1.00.
3. **Bar chart.** Four separate bars of equal width, labelled Adult, Student, Child, Senior on the horizontal axis. Vertical axis "Relative frequency", from 0 to 0.50 in steps of 0.10. Bar heights 0.45, 0.25, 0.20 and 0.10.
4. **Slice angles.** Multiply each proportion by 360°: Adult 0.45 × 360° = 162°; Student 0.25 × 360° = 90°; Child 0.20 × 360° = 72°; Senior 0.10 × 360° = 36°.
5. **Check.** 162° + 90° + 72° + 36° = 360°. The Student slice is exactly a quarter of the circle (a right angle), which matches 0.25.
6. **Describe the distribution.** Adult tickets were the most common type (45% of the 120 tickets sold), followed by Student (25%) and Child (20%). Senior tickets were the least common (10%). There were 4.5 times as many Adult tickets as Senior tickets (54 ÷ 12 = 4.5).

**Check.** Adult tickets are less than half of the total (0.45 < 0.50), so "most tickets were Adult" would be wrong. The Adult slice should look a little less than a semicircle: 162° is less than 180°.

## Worked example 2: comparing two schools and judging claims

**Question.** A second fictional school, Hollins Park, asked 40 students the same travel question: Bus 12, Walk 8, Car 14, Bicycle 4, Train 2. Compare the two schools, then decide whether each claim is supported.

- Claim A: "Walking is more popular at Hollins Park, because 8 Hollins Park students walk and only 7 Larkfield students do."
- Claim B: "Most Hollins Park students come by car."
- Claim C: "Car travel is more common at Hollins Park than at Larkfield."

**Step 1: relative frequencies for Hollins Park** (n = 40). Bus 12 ÷ 40 = 0.30; Walk 0.20; Car 0.35; Bicycle 0.10; Train 0.05. Check: they add to 1.00.

<figure>
<svg viewBox="0 0 640 340" role="img" aria-labelledby="side-title side-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="side-title">Side-by-side relative frequency bar chart comparing travel to school at two schools</title>
<desc id="side-desc">For each of five travel methods there are two bars side by side: a solid bar for Larkfield, with 25 students, and a hatched bar for Hollins Park, with 40 students. The vertical axis is relative frequency from 0 to 0.40. Values written above the bars are: Bus, Larkfield 0.36 and Hollins Park 0.30; Walk, 0.28 and 0.20; Car, 0.20 and 0.35; Bicycle, 0.12 and 0.10; Train, 0.04 and 0.05. A key shows solid for Larkfield and hatched for Hollins Park.</desc>
<defs><pattern id="hp-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="340" fill="#ffffff"/>
<text x="82" y="264" text-anchor="end" font-size="13" fill="#1d2b44">0.00</text>
<line x1="90" y1="210" x2="610" y2="210" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="214" text-anchor="end" font-size="13" fill="#1d2b44">0.10</text>
<line x1="90" y1="160" x2="610" y2="160" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="164" text-anchor="end" font-size="13" fill="#1d2b44">0.20</text>
<line x1="90" y1="110" x2="610" y2="110" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="114" text-anchor="end" font-size="13" fill="#1d2b44">0.30</text>
<line x1="90" y1="60" x2="610" y2="60" stroke="#c9d1dd" stroke-width="1"/>
<text x="82" y="64" text-anchor="end" font-size="13" fill="#1d2b44">0.40</text>
<line x1="90" y1="260" x2="610" y2="260" stroke="#1d2b44" stroke-width="2"/>
<line x1="90" y1="50" x2="90" y2="260" stroke="#1d2b44" stroke-width="2"/>
<rect x="107" y="80" width="38" height="180" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="126" y="74" text-anchor="middle" font-size="11" fill="#1d2b44">0.36</text>
<rect x="149" y="110" width="38" height="150" fill="url(#hp-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="168" y="104" text-anchor="middle" font-size="11" fill="#1d2b44">0.30</text>
<text x="147" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Bus</text>
<rect x="211" y="120" width="38" height="140" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="230" y="114" text-anchor="middle" font-size="11" fill="#1d2b44">0.28</text>
<rect x="253" y="160" width="38" height="100" fill="url(#hp-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="272" y="154" text-anchor="middle" font-size="11" fill="#1d2b44">0.20</text>
<text x="251" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Walk</text>
<rect x="315" y="160" width="38" height="100" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="334" y="154" text-anchor="middle" font-size="11" fill="#1d2b44">0.20</text>
<rect x="357" y="85" width="38" height="175" fill="url(#hp-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="376" y="79" text-anchor="middle" font-size="11" fill="#1d2b44">0.35</text>
<text x="355" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Car</text>
<rect x="419" y="200" width="38" height="60" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="438" y="194" text-anchor="middle" font-size="11" fill="#1d2b44">0.12</text>
<rect x="461" y="210" width="38" height="50" fill="url(#hp-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="480" y="204" text-anchor="middle" font-size="11" fill="#1d2b44">0.10</text>
<text x="459" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Bicycle</text>
<rect x="523" y="240" width="38" height="20" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/>
<text x="542" y="234" text-anchor="middle" font-size="11" fill="#1d2b44">0.04</text>
<rect x="565" y="235" width="38" height="25" fill="url(#hp-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="584" y="229" text-anchor="middle" font-size="11" fill="#1d2b44">0.05</text>
<text x="563" y="280" text-anchor="middle" font-size="13" fill="#1d2b44">Train</text>
<text x="350" y="306" text-anchor="middle" font-size="14" fill="#1d2b44">Usual way of travelling to school</text>
<text x="22" y="155" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 155)">Relative frequency</text>
<rect x="420" y="14" width="18" height="14" fill="#5b7299" stroke="#1d2b44" stroke-width="1.5"/><text x="444" y="26" font-size="13" fill="#1d2b44">Larkfield (n = 25)</text>
<rect x="420" y="34" width="18" height="14" fill="url(#hp-hatch)" stroke="#1d2b44" stroke-width="1.5"/><text x="444" y="46" font-size="13" fill="#1d2b44">Hollins Park (n = 40)</text>
</svg>
<figcaption>Figure 3. Side-by-side bar chart of the two fictional schools. Solid bars: Larkfield (n = 25). Hatched bars: Hollins Park (n = 40). Because the bars show proportions, the two schools can be compared fairly even though their sample sizes differ.</figcaption>
</figure>

**Step 2: compare.** Larkfield's most common method is Bus (0.36); Hollins Park's is Car (0.35). A larger proportion of Hollins Park students travel by car (0.35 against 0.20), and a smaller proportion walk (0.20 against 0.28) or take the bus (0.30 against 0.36). The proportions for Bicycle (0.12 and 0.10) and Train (0.04 and 0.05) are similar.

**Step 3: judge the claims.**

- **Claim A is not supported.** The counts 8 and 7 cannot be compared directly, because Hollins Park asked more students (40 against 25). As proportions, 0.20 of Hollins Park students walk against 0.28 at Larkfield, so walking is **less** common at Hollins Park.
- **Claim B is not supported.** Car is the **most common** method at Hollins Park, but 0.35 is less than 0.50, so it is not "most" (a majority) of the students. 65% of Hollins Park students use some other method.
- **Claim C is supported.** 35% of Hollins Park students travel by car against 20% at Larkfield. Here the counts (14 and 5) point the same way, but the proportions are the fair evidence.

**Check.** Every judgement quotes values and compares like with like (proportion with proportion). These are two samples of students from two fictional schools, so the conclusions describe these students; Topic 1.10, later in this unit, discusses when results can be generalised to a larger population.

## Common misconceptions

- **"A taller bar means more individuals, whatever the groups."** Only if the groups have the same size or the bars show proportions. Compare relative frequencies when the n values differ.
- **"Most common" = "most".** The largest category may still be less than half. "Most" or "a majority" needs a proportion greater than 0.50.
- **Using a pie chart when people could give several answers.** The parts then add to more than the whole. Use a bar chart of the proportion of individuals who gave each answer.
- **Slice angle = percentage.** A slice of 36% has an angle of 0.36 × 360° = 129.6°, not 36°.
- **Leaving out a small category from a pie chart.** The slices must make the whole circle. Group small categories into "Other" if needed, but keep them in.
- **Truncating the axis of a bar chart.** Starting the axis above 0 exaggerates differences between bars.
- **Describing a bar chart as skewed.** Shape words belong to quantitative distributions. For a categorical variable, describe the most and least common categories and how the proportions compare.
- **A bar chart is a histogram with gaps.** They show different kinds of variable. A histogram's bars are intervals on a number line; a bar chart's bars are labels.

## Where this leads

Next, Topic 1.5 turns to quantitative variables and their graphs, starting with dot plots, stemplots and histograms: see the [Topic 1.5 study guide](/advanced-course-resources/statistics/1-5-graphical-representations-one-quantitative-variable-study-guide/). In Unit 2 (Topic 2.1), side-by-side and segmented bar charts return when you study two categorical variables at once. Try the [practice questions](/advanced-course-resources/statistics/1-4-graphical-representations-one-categorical-variable-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-4-graphical-representations-one-categorical-variable-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-4-graphical-representations-one-categorical-variable-checklist/) to consolidate. If tables of counts and proportions still feel unsure, go back to the [Topic 1.3 study guide](/advanced-course-resources/statistics/1-3-tabular-representation-summary-statistics-one-study-guide/).
