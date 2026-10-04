---
resourceId: "mb-ap-stats-1.8-revision-notes"
title: "Graphical Representations of Summary Statistics: Revision Notes (Statistics 1.8)"
description: "One-page recap of the five-number summary, how to draw and read a boxplot with outliers, and how the mean and median relate to shape, with the mistakes that cost marks."
course: "statistics"
unit: 1
topics: ["1.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-1.8-study-guide"]
learningObjectives:
  - "Recall the steps for drawing a boxplot that shows outliers"
  - "Recall how the mean and the median relate to the shape of a distribution"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Choose the calculator boxplot that marks outliers separately."
related: ["mb-ap-stats-1.8-study-guide", "mb-ap-stats-1.8-practice", "mb-ap-stats-1.8-checklist"]
next: "mb-ap-stats-1.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Five-number summary: min, Q1, median, Q3, max."
  - "Each section of a boxplot holds about 25% of the data."
  - "The mean is usually pulled towards the long tail."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-study-guide/).

## Recap

- The **five-number summary** is minimum, Q1, median, Q3, maximum.
- A **boxplot** draws it on a labelled number line. The **box** runs from Q1 to Q3 (the middle 50%), with a line at the **median**.
- **Whiskers** run from the box towards the minimum and maximum. If there are outliers, each whisker stops at the most extreme value that is **not** an outlier, and each outlier gets its own symbol.
- Each of the four sections holds about **25%** of the data. A longer section means more spread, not more values.
- Shape and centre: the mean is pulled towards a long tail; the median is not.

## Key relationships

| Feature | What it shows or means |
|---|---|
| Box length | IQR = Q3 − Q1, the spread of the middle 50% |
| Whole width (min to max) | Range |
| Fences (not drawn) | Q1 − 1.5 × IQR and Q3 + 1.5 × IQR |
| Roughly symmetric | Mean and median close together; halves of the boxplot similar in length |
| Skewed right | Right half longer; mean usually **greater** than median |
| Skewed left | Left half longer; mean usually **less** than median |
| Not shown by a boxplot | n, gaps, clusters, number of peaks, the mean (unless added) |

## Assumptions and conventions

- Quartiles: split at the median; when n is odd, leave the median out of both halves. Show your halves.
- Outliers are judged with the 1.5 × IQR rule unless a question says otherwise.
- The mean–median link is a **tendency**. Say "usually" or "suggests", not "always".

## Mistakes to avoid

1. **Running the whisker to an outlier** or to the fence. It ends at a real data value that is not an outlier.
2. **Calling the line in the box the mean.** It is the median.
3. **Saying a longer section has more data.** Every section has about a quarter.
4. **Getting the direction wrong.** The mean moves towards the tail: right tail, mean larger.
5. **Reading a symmetric boxplot as mound-shaped.** It could hide two clusters.
6. **No scale or no label.** Name the variable and the units on the axis.

## Quick self-check

1. Data (minutes): 3, 4, 4, 5, 6, 7, 8, 15. Where does the upper whisker end? *(Q1 = 4, Q3 = 7.5, IQR = 3.5, upper fence = 12.75; 15 is an outlier, so the whisker ends at 8 minutes.)*
2. A boxplot has Q1 = 22 and Q3 = 30. About what share of the data lies between 22 and 30? *(About 50%.)*
3. Mean 41, median 52. What shape is suggested? *(Skewed left: the mean is pulled below the median.)*

Next: [practice questions](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-practice/).
