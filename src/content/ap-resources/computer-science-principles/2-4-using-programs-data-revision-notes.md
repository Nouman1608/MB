---
resourceId: "mb-ap-csp-2.4-revision-notes"
title: "Using Programs with Data: Revision Notes (Computer Science Principles 2.4)"
description: "One-page recap of using programs with data: filtering, transforming, combining, visualising, clustering, classifying and iterative, interactive analysis."
course: "computer-science-principles"
unit: 2
topics: ["2.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-2.4-study-guide"]
learningObjectives: 
  - "Recall the key ideas of using programs with data without notes"
  - "Spot the common errors before making them"
skills: ["2", "4", "5"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.4-study-guide", "mb-ap-csp-2.4-practice", "mb-ap-csp-2.4-checklist"]
next: "mb-ap-csp-2.4-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Programs process data to acquire information; users work with them iteratively and interactively, refining the question as they see results."
  - "Common processes are transforming every element, filtering, combining or comparing, and visualising."
  - "Combining data sources, clustering and classifying data are parts of using programs to gain insight."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-study-guide/).

## Recap

- Programs process data to acquire **information**; the work is **iterative and interactive**.
- **Transform**: apply the same operation to every element (same number of elements).
- **Filter**: keep only elements that meet a condition (usually fewer elements).
- **Combine or compare**: reduce many elements to one result, such as a total or a maximum.
- **Visualise**: show data as a chart, graph or table.
- **Combining data sources**, **clustering** (grouping similar items) and **classifying** (assigning categories) help gain insight.
- **Search tools**, **filtering systems** and **spreadsheets** help find information and trends.
- **Patterns** can emerge when data are transformed; insight depends on clean, representative data.

## Key relationships

| Process | Length of result | Typical code shape |
|---|---|---|
| Transform | same as input | `APPEND(result, f(item))` for every item |
| Filter | same or shorter | `IF (condition) { APPEND(result, item) }` |
| Combine | a single value | running total or running maximum |
| Visualise | a picture | chart of totals or counts |

## Assumptions and conventions

- Lists in the pseudocode are written `[a, b, c]` and are visited in order by `FOR EACH`; this is Marlbridge's rendering of the reference notation.
- In a trace table, record the loop variable and every variable that changes, after each pass.
- When data come from two tables, state the shared field used to combine them.

## Mistakes to avoid

1. Mixing up filter and transform.
2. Updating a running total outside the IF when only some elements should count.
3. Forgetting the starting value of a total or count.
4. Reading a chart as proof of cause.
5. Skipping cleaning before counting.
6. Giving only totals when the groups differ in size.

## Two quick worked examples

**1.** For `[3, 8, 5, 10]`, the code `total ← 0` then `FOR EACH n IN list { IF (n > 4) { total ← total + n } }` adds 8, 5 and 10, so it displays 23. It filters and then combines.

**2.** To double every price in a list of 5 prices, apply the same operation to each element: a **transform** with a result list of length 5. To keep only prices above 20, use a **filter**; the result list may be shorter.

## A revision routine

Take a list of six numbers and write three short pieces of code: one that filters, one that transforms every element and one that combines. Trace each on paper and give the output. Then write the sequence of steps you would use to answer a question about two linked tables, and say what each step shows.

## Quick self-check

1. Trace `FOR EACH n IN [3, 8, 5] { IF (n > 4) { DISPLAY(n) } }`. *(Displays 8 then 5.)*
2. A program doubles every number in a list of 6. How long is the result? *(6; it is a transform.)*
3. Why compare averages per runner rather than totals for clubs of different size? *(Totals favour the larger club.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/2-4-using-programs-data-practice/).
