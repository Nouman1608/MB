---
resourceId: "mb-ap-stats-2.1-practice"
title: "Tabular and Graphical Representations for Two Categorical Variables: Practice Questions (Statistics 2.1)"
description: "Seven original Marlbridge practice questions on two-way tables, side-by-side and segmented bar charts, mosaic plots and association, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.1"]
resourceType: "practice-questions"
prerequisites:
  - "Turning counts into proportions within a group"
prerequisiteResources: ["mb-ap-stats-2.1-study-guide"]
learningObjectives:
  - "Complete and read two-way tables of counts"
  - "Choose, build and read side-by-side bar charts, segmented bar charts and mosaic plots"
  - "Decide whether two categorical variables appear to be associated, and justify the decision with proportions"
  - "Judge claims in context, including claims of cause from observational data"
skills: ["4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "four-function"
calculatorNote: "Round proportions to 2 decimal places unless they are exact."
related: ["mb-ap-stats-2.1-study-guide", "mb-ap-stats-2.1-revision-notes", "mb-ap-stats-2.1-checklist"]
next: "mb-ap-stats-2.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Compare proportions within groups, and say what they mean in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets and organisations are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: each individual is in exactly one category of each variable; "proportion within a group" means the cell count divided by that group's total; round proportions to 2 decimal places unless they are exact.

## Question 1 (multiple choice · foundation)

A fictional bike-hire scheme recorded 400 hires. For each hire it noted the bike type (Electric or Standard) and the day type (Weekday or Weekend). There were 150 Electric hires and 250 Standard hires. The manager wants a graph that shows, for each bike type, what proportion of hires were at the weekend, so that the two bike types can be compared fairly. Which graph is the best choice?

- (A) A pie chart of bike type
- (B) A side-by-side bar chart showing the counts of Weekday and Weekend hires for each bike type
- (C) A segmented bar chart with one bar for each bike type, each bar split into the proportions of Weekday and Weekend hires
- (D) A histogram of the number of hires per day

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A segmented bar chart gives each bike type one bar of height 1, split into the proportions of Weekday and Weekend hires. Both bike types are measured out of 1, so they can be compared fairly.

- (A) shows only one variable (bike type). It says nothing about day type.
- (B) shows two variables, but as **counts**. With 250 Standard and 150 Electric hires, the Standard bars will tend to be taller in both day types simply because there were more Standard hires.
- (D) is a graph for a quantitative variable. Bike type and day type are categorical.
</details>

## Question 2 (multiple choice · core)

A fictional phone shop asked customers of three phone brands whether they use a protective case. The segmented bar chart has one bar per brand. In every bar, the "Uses a case" segment runs from 0 to 0.80. The three brands had 50, 120 and 80 customers. Which conclusion is best supported?

- (A) Brand and case use are strongly associated, because one brand has many more customers than the others.
- (B) Brand and case use do not appear to be associated, because the proportion using a case is the same for every brand.
- (C) Customers of the brand with 120 customers are the most likely to use a case, because that brand has the most case users.
- (D) No conclusion is possible from a segmented bar chart without the counts in each cell.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Within every brand, 0.80 of customers use a case. The distribution of case use does not change from brand to brand, so there is no sign of association in these data.

- (A) confuses the size of a group with association. Association is about whether the **proportions** change across groups.
- (C) is about counts: the 120-customer brand has the most case users (0.80 × 120 = 96) only because it is the biggest group. Its proportion is the same, 0.80.
- (D) is wrong because association is judged from within-group proportions, which a segmented bar chart shows directly.
</details>

## Question 3 (multiple choice · core)

A mosaic plot shows two categorical variables for 500 fictional festival visitors. One column has width 0.40. Inside that column, one segment has height 0.25. How many visitors are in the cell that this rectangle represents?

- (A) 50
- (B) 125
- (C) 200
- (D) 325

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The width is the share of all visitors in that column's group: 0.40 × 500 = 200 visitors. The height is the share of that group in the segment's category: 0.25 × 200 = 50. In one step, area × total = 0.40 × 0.25 × 500 = 50 visitors.

- (B) uses only the height: 0.25 × 500 = 125. The height is a proportion of the group, not of all 500 visitors.
- (C) uses only the width: 0.40 × 500 = 200 is the whole group, not one cell.
- (D) adds the width and height (0.65 × 500). Width and height multiply to give an area.
</details>

## Question 4 (calculation · core)

A fictional language school recorded whether each of its 180 students passed their first level test. Some entries in the two-way table are missing.

| Result | Spanish | Mandarin | **Total** |
|---|---|---|---|
| Passed | 77 | ? | ? |
| Not yet | ? | 28 | ? |
| **Total** | 110 | ? | 180 |

(a) Complete the table.
(b) Find the proportion of students in each course who passed.
(c) Do course and result appear to be associated for these students? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Spanish Not yet = 110 − 77 = 33. Mandarin total = 180 − 110 = 70. Mandarin Passed = 70 − 28 = 42. Passed total = 77 + 42 = 119. Not yet total = 33 + 28 = 61. Check: 119 + 61 = 180.

| Result | Spanish | Mandarin | **Total** |
|---|---|---|---|
| Passed | 77 | 42 | **119** |
| Not yet | 33 | 28 | **61** |
| **Total** | **110** | **70** | **180** |

**(b)** Spanish: 77 ÷ 110 = **0.70**. Mandarin: 42 ÷ 70 = **0.60**.

**(c)** **Yes, there appears to be an association.** A larger proportion of Spanish students passed (0.70) than Mandarin students (0.60), a difference of 10 percentage points. So knowing the course changes the pass rate for these 180 students.

| Point | What earns it |
|---|---|
| 1 | All five missing entries correct |
| 1 | Both within-course pass proportions correct |
| 1 | Conclusion of association justified by comparing the two proportions, in context |

Accept "a weak association" if it is justified by the two proportions. Do not award point 3 for comparing the counts 77 and 42.
</details>

## Question 5 (constructed response · core)

A fictional council asked 400 residents how often they recycle food waste. The results by housing type are:

| Recycles food waste | Flat | House | **Total** |
|---|---|---|---|
| Always | 45 | 150 | **195** |
| Sometimes | 60 | 75 | **135** |
| Never | 45 | 25 | **70** |
| **Total** | **150** | **250** | **400** |

(a) Find the distribution of recycling habit within each housing type.
(b) Describe how to draw a segmented bar chart of these distributions. Give the heights of the segment boundaries.
(c) A councillor says: "Flat residents are three times as likely as house residents to never recycle food waste." Use the data to decide whether this claim is supported.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Flat (n = 150): Always 45 ÷ 150 = 0.30; Sometimes 60 ÷ 150 = 0.40; Never 45 ÷ 150 = 0.30. House (n = 250): Always 150 ÷ 250 = 0.60; Sometimes 75 ÷ 250 = 0.30; Never 25 ÷ 250 = 0.10. Each set adds to 1.

**(b)** Draw two bars of equal width, labelled Flat and House, each of height 1 on a relative frequency axis from 0 to 1. Stack Always at the bottom, then Sometimes, then Never, in the same order in both bars. Flat boundaries: 0.30 and 0.70 (0.30 + 0.40). House boundaries: 0.60 and 0.90 (0.60 + 0.30). Use different patterns for the three segments and add a key.

**(c)** **Supported.** The proportion who never recycle is 0.30 for flats and 0.10 for houses, and 0.30 ÷ 0.10 = 3. The counts (45 and 25) would not show this, because there were more house residents. The data show a clear association between housing type and recycling habit for these 400 residents.

| Point | What earns it |
|---|---|
| 1 | All six within-group proportions correct |
| 1 | Bars of height 1, same segment order, correct boundaries (0.30, 0.70 and 0.60, 0.90) |
| 1 | A key or labels that do not rely on colour alone |
| 1 | Judges the claim using the proportions 0.30 and 0.10 (ratio 3), not the counts |

Accept any segment order that is the same in both bars, with matching boundaries.
</details>

## Question 6 (constructed response · stretch)

A fictional parcel company compared two depots over one week. North depot sent 600 parcels, of which 90 arrived late. South depot sent 200 parcels, of which 50 arrived late. A side-by-side bar chart of counts shows a taller "Late" bar for North.

(a) Build the two-way table with totals.
(b) A manager says: "North is the worse depot for late parcels." Is this supported? Justify your answer.
(c) Describe a side-by-side bar chart that would compare the depots fairly.
(d) Another manager says the data prove that something about South depot **causes** late deliveries. Explain why the data cannot show this.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

| Arrival | North | South | **Total** |
|---|---|---|---|
| On time | 510 | 150 | **660** |
| Late | 90 | 50 | **140** |
| **Total** | **600** | **200** | **800** |

**(b)** **Not supported.** North had more late parcels (90 against 50) only because it sent three times as many. Within each depot, the proportion late is 90 ÷ 600 = 0.15 for North and 50 ÷ 200 = 0.25 for South. A parcel from South was **more** likely to be late.

**(c)** Two clusters of bars, one for each depot, with an On time bar and a Late bar in each. The vertical axis is relative frequency within the depot, from 0 to 1, starting at 0. Heights: North 0.85 and 0.15; South 0.75 and 0.25. Use a key with patterns or labels.

**(d)** This is observational data: parcels were not randomly assigned to depots. The depots may differ in other ways, such as the distance to customers or the type of parcel, and these could explain the difference in late rates. Only an association can be concluded.

| Point | What earns it |
|---|---|
| 1 | Complete, correct table with totals |
| 1 | Rejects the claim by comparing 0.15 and 0.25, in context |
| 1 | Bars as proportions within each depot with correct heights |
| 1 | Explains that there was no random assignment **and** names a plausible confounding variable |

Saying only "correlation is not causation" without linking it to how the data were collected does not earn point 4.
</details>

## Question 7 (explanation · stretch)

A fictional museum recorded the visit length of 800 visitors. The mosaic plot has two columns: Members (width 0.25) and Non-members (width 0.75). Inside each column the segments are:

| Visit length | Members (height) | Non-members (height) |
|---|---|---|
| Under 1 hour | 0.20 | 0.50 |
| 1 to 2 hours | 0.30 | 0.35 |
| Over 2 hours | 0.50 | 0.15 |

(a) How many visitors were members? How many non-members stayed over 2 hours?
(b) Are membership and visit length associated? Justify your answer.
(c) A student looks at the plot and says: "The Over 2 hours segment is much taller for members, so members were much more likely to stay over 2 hours. But the counts are close." Explain how the mosaic plot shows both parts of this statement.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Members: 0.25 × 800 = **200**. Non-members: 0.75 × 800 = 600, and 0.15 × 600 = **90** stayed over 2 hours.

**(b)** **Yes.** The distribution of visit length is very different in the two columns. Half of the members (0.50) stayed over 2 hours, against only 0.15 of non-members. Half of the non-members (0.50) stayed under 1 hour, against 0.20 of members. Members tended to stay longer.

**(c)** The **height** of a segment is a proportion within the column, so the taller member segment (0.50 against 0.15) shows that members were more **likely** to stay over 2 hours. The **area** of a rectangle shows the count. Members over 2 hours: 0.25 × 0.50 = 0.125 of all visitors, which is 100 people. Non-members over 2 hours: 0.75 × 0.15 = 0.1125, which is 90 people. The areas are close because the member column is narrow, so the counts are close even though the proportions are very different.

| Point | What earns it |
|---|---|
| 1 | 200 members and 90 non-members over 2 hours |
| 1 | Association justified by comparing at least two pairs of within-group proportions, in context |
| 1 | Height = proportion within the group, so members were more likely to stay long |
| 1 | Area = share of all visitors, with both counts (100 and 90) or both areas shown |
</details>

## How did you do?

- **Q1 or Q6(c) wrong:** re-read "Side-by-side bar charts" and "Segmented bar charts" in the [study guide](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-study-guide/).
- **Q2, Q4(c) or Q7(b) wrong:** revisit "Association between two categorical variables".
- **Q3 or Q7 wrong:** revisit "Mosaic plots" and Worked example 2.
- **Q4(a) or Q6(a) wrong:** practise filling totals in "Two-way tables".
- **Q5(c) or Q6(b) wrong:** redo Worked example 1. Compare proportions, not counts.
- **Q6(d) incomplete:** revisit the causation point in "Association between two categorical variables".

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-checklist/).
