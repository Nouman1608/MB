---
resourceId: "mb-ap-csa-4.13-checklist"
title: "Implementing 2D Array Algorithms: Checklist (Computer Science A 4.13)"
description: "A self-check for 2D array algorithms: adapting standard patterns to rows, columns and whole tables, rotating and reversing, checking neighbours safely, and tracing results."
course: "computer-science-a"
unit: 4
topics: ["4.13"]
resourceType: "topic-checklist"
prerequisites:
  - "Traversing 2D arrays in row-major and column-major order (Topic 4.12)"
  - "The 1D array and ArrayList algorithms (Topics 4.5 and 4.10)"
  - "Boolean expressions with && and || (Topic 2.5)"
learningObjectives:
  - "Check each skill in Topic 4.13 against the guide and the practice set"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.13-study-guide", "mb-ap-csa-4.13-revision-notes", "mb-ap-csa-4.13-practice"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Twelve I can statements mapped to the guide and the practice set."
  - "Use it after the practice questions to decide what to re-read."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Tick each line when you can do it without looking at the guide. Each line names where it is taught and tested. Revisit the [study guide](/advanced-course-resources/computer-science-a/4-13-implementing-2d-array-algorithms-study-guide/) for anything you cannot yet do.

## Understanding

- ☐ I can say how a row, a column and a whole-table version of the same algorithm differ in their loops (study guide: One idea, three shapes).
- ☐ I can explain why a per-row accumulator is declared inside the outer loop (study guide: Worked example 1; practice: Questions 2 and 3).
- ☐ I can explain why a rotation needs a saved element and a reversal only half the length (study guide: Worked example 2; practice: Questions 6 and 10).
- ☐ I can explain why the bounds test must come before the read of a neighbour (study guide: Neighbours and bounds; practice: Question 8).

## Skills

- ☐ I can find a maximum or minimum in a table, a row or a column (study guide: Maximum, minimum and where it sits; practice: Question 1).
- ☐ I can write count, any and all methods over a region (study guide: Counting, any, all, pairs and duplicates; practice: Question 9).
- ☐ I can count consecutive pairs along rows with the correct bound (study guide: Counting, any, all, pairs and duplicates; practice: Question 4).
- ☐ I can rotate or reverse a row or column in place (study guide: Worked example 2; practice: Questions 5 and 10).

## Reasoning

- ☐ I can trace a method on a small table and give its result (practice: Questions 2 and 5).
- ☐ I can find the row index with the largest sum, not just the sum (study guide: Worked example 1; practice: Question 2).
- ☐ I can count neighbours of an edge or corner cell correctly (study guide: Neighbours and bounds; practice: Question 7).
- ☐ I can find and fix the bug in a faulty 2D algorithm (practice: Questions 3 and 6).

Next: [Topic 4.14 searching algorithms](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/).
