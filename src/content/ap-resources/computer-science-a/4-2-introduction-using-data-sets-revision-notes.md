---
resourceId: "mb-ap-csa-4.2-revision-notes"
title: "Introduction to Using Data Sets: Revision Notes (Computer Science A 4.2)"
description: "One-page recap of data sets, processing values one at a time, and planning algorithms with tables, flowcharts and written language, with traces of count, total and maximum plans."
course: "computer-science-a"
unit: 4
topics: ["4.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-4.2-study-guide"]
learningObjectives:
  - "Say what a data set is and give examples from everyday life"
  - "Explain that a program processes a data set by accessing its values one at a time"
  - "Represent a pattern or algorithm for a data set in written language, a table or a flowchart"
  - "Trace a planned algorithm on a data set and record the result"
  - "Find a flaw in a plan, such as resetting a running count inside a loop"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.2-study-guide", "mb-ap-csa-4.2-practice", "mb-ap-csa-4.2-checklist"]
next: "mb-ap-csa-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "A data set is a collection of specific pieces of information, such as a column of readings or a table of records."
  - "Data sets can be manipulated and analysed to solve a problem or answer a question; values are accessed and used one at a time and then processed as the desired outcome requires."
  - "A chart, table or flowchart helps plan the algorithm before it is coded."
  - "Standard plans follow a pattern: set up (counter, total, best so far), repeat for each value, then report."
  - "Tracing a plan on a small data set with a table finds mistakes before any code is written."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These notes recap Topic 4.2. For worked examples, read the [study guide](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/).

## Recap

- A **data set** is a collection of specific pieces of information.
- Data sets can be **manipulated and analysed** to solve a problem or answer a question.
- Values are **accessed and used one at a time** and then **processed** to give the desired outcome.
- Data can be represented in a **chart or table**, which can be used to **plan** the algorithm.
- Patterns and algorithms can be described in **written language or diagrams** (such as a flowchart).

## Key relationships

| Plan step | What it does | Example (rainfall data) |
|---|---|---|
| Set up | Create what must be remembered | `wetDays = 0`, or `best` = first position |
| Repeat for each value | Examine one value, update what is remembered | If reading >= 10, add 1 |
| Report | Give the answer after all values | Report `wetDays` |

## Standard plans in outline

| Task | Remember | Update rule |
|---|---|---|
| Count with a property | A count (0 at start) | Add 1 when the property holds |
| Total | A running total (0 at start) | Add each value |
| Largest | Best so far (start from the first value) | Replace it when a value is larger |
| Average | Total and number of values | Total divided by number of values at the end |

## Worked reminder

Rainfall on seven days is 0, 12, 5, 20, 0, 8, 15 mm. The count of days with at least 10 mm is 3 (Tue, Thu, Sun). The largest is 20 mm on Thursday. The total is 60 mm and the mean is 60 ÷ 7, about 8.57 mm. A plan that resets the count to 0 inside the loop reports only whether the last reading qualifies, so it gives 1 instead of 3.

## Checking a plan

1. Choose a data set small enough to trace by hand, with an answer you can see by eye.
2. Write one table row per value and one column per remembered quantity.
3. Compare the final row with the answer you expected.
4. If they differ, look first at where each remembered quantity is set up and where it is updated.

## Mistakes to avoid

- Putting a set-up step (a count or total starting at 0) inside the repeated part.
- Starting a maximum at 0 for data that can be negative.
- Forgetting to say what is reported at the end.
- Treating the data set and the Java array as the same thing.
- Skipping the trace table.

## Quick self-check

1. What are the three parts of most plans for a data set? *Answer: set up, repeat for each value, report.*
2. For the data 3, 8, 2, 9, 4, how many values are below 5? *Answer: 3 (the values 3, 2 and 4).*
3. Why should a maximum start from the first value? *Answer: starting from 0 fails if all values are negative; the first value is always a valid starting candidate.*
4. Name a way to represent an algorithm other than code. *Answer: a flowchart, a table or written steps.*
