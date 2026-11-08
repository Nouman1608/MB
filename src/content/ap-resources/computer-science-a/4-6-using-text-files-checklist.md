---
resourceId: "mb-ap-csa-4.6-checklist"
title: "Using Text Files: Checklist (Computer Science A 4.6)"
description: "A self-check for reading text files in Java: connecting a Scanner to a File, looping with hasNext, choosing the right Scanner method, using split, and handling exceptions."
course: "computer-science-a"
unit: 4
topics: ["4.6"]
resourceType: "topic-checklist"
prerequisites:
  - "while loops and the hasNext idea of looping until data runs out (Topic 2.7)"
  - "String methods and calling methods on objects (Topics 1.14 and 1.15)"
  - "Parsing a String to a number is new here; the wrapper-class topic (4.7) goes deeper"
learningObjectives:
  - "Check each skill in Topic 4.6 against the guide and the practice set"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.6-study-guide", "mb-ap-csa-4.6-revision-notes", "mb-ap-csa-4.6-practice"]
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

Tick each line when you can do it without looking at the guide. Each line names where it is taught and tested. Revisit the [study guide](/advanced-course-resources/computer-science-a/4-6-using-text-files-study-guide/) for anything you cannot yet do.

## Understanding

- ☐ I can explain why a file is needed to keep data after the program ends (study guide: Why programs need files).
- ☐ I can name the imports and the header clause needed to read a file (study guide: The standard pattern; practice: Question 1).
- ☐ I can describe the Scanner cursor and say why it never moves backwards (study guide: The Scanner methods you need; Figure 1).
- ☐ I can say what `hasNext()` does and that it does not move the cursor (practice: Question 7).

## Skills

- ☐ I can write the five-step pattern: File, Scanner, hasNext loop, read, close (study guide: Worked example 1; practice: Question 9).
- ☐ I can trace a Scanner loop token by token and give the final result (study guide: Worked example 1; practice: Question 2).
- ☐ I can choose between `next`, `nextInt`, `nextDouble`, `nextBoolean` and `nextLine` for a given file layout (practice: Questions 5 and 8).
- ☐ I can read records line by line, split them and convert a field to a number (study guide: Worked example 2; practice: Question 10).

## Reasoning

- ☐ I can predict which exception is thrown for a wrong-kind token or for reading past the end (practice: Questions 3 and 6).
- ☐ I can predict the length of a `split` result, including dropped trailing empty strings (practice: Question 4).
- ☐ I can explain why `>` and `>=` give different answers when records tie (study guide: Worked example 2).
- ☐ I can say what happens when the file is empty (study guide: Common misconceptions; practice: Question 10).

Next: [Topic 4.7 wrapper classes](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/).
