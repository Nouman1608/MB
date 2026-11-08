---
resourceId: "mb-ap-csa-4.16-checklist"
title: "Recursion: Checklist (Computer Science A 4.16)"
description: "A self-check for recursion: identifying the base case, tracing returns and prints call by call, counting calls, explaining stack overflow and relating recursion to loops."
course: "computer-science-a"
unit: 4
topics: ["4.16"]
resourceType: "topic-checklist"
prerequisites:
  - "Writing and calling methods with parameters and return values (Topics 1.9 and 3.5)"
  - "Tracing loops and conditionals (Topics 2.3 and 2.7)"
  - "String methods length and substring (Topic 1.15)"
learningObjectives:
  - "Check each skill in Topic 4.16 against the guide and the practice set"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.16-study-guide", "mb-ap-csa-4.16-revision-notes", "mb-ap-csa-4.16-practice"]
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

Tick each line when you can do it without looking at the guide. Each line names where it is taught and tested. Revisit the [study guide](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/) for anything you cannot yet do.

## Understanding

- ☐ I can define a recursive method and name its two required parts (study guide: A method that calls itself).
- ☐ I can explain that each call has its own parameters and local variables (study guide: The call stack: how a trace really works; Figure 1).
- ☐ I can explain what happens when a base case is missing or never reached (study guide: Worked example 2; practice: Questions 5 and 9).
- ☐ I can state that recursion and iteration can solve the same problems and that writing recursive code is outside the exam scope (study guide: Recursion and iteration).

## Skills

- ☐ I can trace a recursive method with a return value by expanding down and substituting up (study guide: The first example; Worked example 1; practice: Questions 1 and 4).
- ☐ I can trace a recursive method on a String that uses substring (study guide: Worked example 1; practice: Question 3).
- ☐ I can give the exact output of a method that prints before and after the recursive call (study guide: Where printing goes matters; practice: Question 2).
- ☐ I can write a loop equivalent to a given recursive method (study guide: Recursion and iteration; practice: Questions 8 and 10).

## Reasoning

- ☐ I can count the calls made by a method with two recursive calls (study guide: Worked example 2; practice: Question 7).
- ☐ I can say what a simple recursive method computes in general (practice: Question 6).
- ☐ I can explain why a base case written with <= can be safer than one written with == (study guide: Worked example 2; practice: Question 9).
- ☐ I can explain why after-call output appears in reverse order of the calls (study guide: Where printing goes matters; practice: Question 2).

Next: [Topic 4.17 recursive searching and sorting](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/).
