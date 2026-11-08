---
resourceId: "mb-ap-csa-4.7-checklist"
title: "Wrapper Classes: Checklist (Computer Science A 4.7)"
description: "A self-check for wrapper classes: autoboxing, unboxing, immutability, parsing Strings to numbers, and predicting compile and run-time problems with Integer and Double."
course: "computer-science-a"
unit: 4
topics: ["4.7"]
resourceType: "topic-checklist"
prerequisites:
  - "Primitive types int and double, and casting (Topics 1.2 and 1.5)"
  - "Calling methods on objects and class (static) methods (Topics 1.10 and 1.14)"
  - "The String type and its methods (Topic 1.15)"
learningObjectives:
  - "Check each skill in Topic 4.7 against the guide and the practice set"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.7-study-guide", "mb-ap-csa-4.7-revision-notes", "mb-ap-csa-4.7-practice"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Twelve I can statements mapped to the guide and the practice set."
  - "Use it after the practice questions to decide what to re-read."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Tick each line when you can do it without looking at the guide. Each line names where it is taught and tested. Revisit the [study guide](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/) for anything you cannot yet do.

## Understanding

- ☐ I can explain why Java has wrapper classes and give the example of ArrayList (study guide: Why a primitive needs a wrapper).
- ☐ I can state that Integer and Double are immutable and what that means for `n++` (study guide: Other behaviours to know; practice: Question 5).
- ☐ I can say which package holds Integer and Double and that no import is needed (study guide: Why a primitive needs a wrapper).
- ☐ I can distinguish autoboxing from unboxing (practice: Question 1).

## Skills

- ☐ I can trace code that mixes int, Integer, double and Double and give each final value (study guide: Worked example 1; practice: Question 8).
- ☐ I can use `Integer.parseInt` and `Double.parseDouble` to turn Strings into numbers (study guide: Turning a String into a number; practice: Questions 3 and 7).
- ☐ I can write a method that parses an array of Strings and sums or averages it (study guide: Worked example 2; practice: Questions 9 and 10).
- ☐ I can predict the result of integer division on Integer objects (practice: Question 2).

## Reasoning

- ☐ I can predict which declarations do not compile, such as `Double d = 7;` (practice: Question 4).
- ☐ I can predict when a `NumberFormatException` is thrown (study guide: Turning a String into a number; practice: Question 10).
- ☐ I can predict a `NullPointerException` from unboxing `null` (practice: Question 6).
- ☐ I can explain why `==` is unreliable for comparing wrapper objects and what to use instead (study guide: Other behaviours to know).

Next: [Topic 4.8 ArrayList methods](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/).
