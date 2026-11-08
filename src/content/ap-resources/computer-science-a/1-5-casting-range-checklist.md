---
resourceId: "mb-ap-csa-1.5-checklist"
title: "Casting and Range of Variables: Checklist (Computer Science A 1.5)"
description: "A self-check list for casting with (int) and (double), rounding doubles, the range of int, integer overflow and round-off error, linked to the guide and practice questions."
course: "computer-science-a"
unit: 1
topics: ["1.5"]
resourceType: "topic-checklist"
prerequisites: ["The Topic 1.5 study guide and practice questions"]
learningObjectives: ["Check which Topic 1.5 skills are secure", "Find the guide section or practice question to revisit for each gap"]
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.5-study-guide", "mb-ap-csa-1.5-revision-notes", "mb-ap-csa-1.5-practice"]
next: "mb-ap-csa-1.6-study-guide"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Tick a statement only if you can do it without notes.", "Each statement names the guide section or practice question that tests it."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Work through the list without notes. If you cannot do a statement, follow its link, then come back. Guide = [study guide](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/); Practice = [practice questions](/advanced-course-resources/computer-science-a/1-5-casting-range-practice/).

## Understanding

- I can explain that casting a `double` to an `int` truncates the digits after the decimal point. *(Guide: "Casting a double to an int truncates"; Practice Question 1)*
- I can explain when an `int` is widened to a `double` automatically. *(Guide: "Automatic widening")*
- I can say what `Integer.MAX_VALUE` and `Integer.MIN_VALUE` hold and why an `int` has a limited range. *(Guide: "The range of int"; Practice Question 4)*
- I can explain what integer overflow is and that it throws no exception. *(Guide: "Integer overflow"; Practice Questions 4 and 8)*
- I can explain what a round-off error is and how using `int` values avoids it. *(Guide: "Round-off error in double"; Practice Question 5)*

## Skills

- I can evaluate expressions that contain `(int)` and `(double)`, including truncation of negative values. *(Guide: Worked example 2; Practice Questions 1 and 10)*
- I can place a cast so that a division keeps its fractional part. *(Guide: Worked example 1; Practice Questions 2, 7 and 9)*
- I can round a non-negative or a negative `double` to the nearest `int` using a cast. *(Guide: "Rounding to the nearest integer"; Practice Questions 3 and 7)*
- I can write an average or percentage expression that is correct for `int` variables. *(Practice Questions 7 and 9)*

## Reasoning

- I can explain why `(double) (a / b)` and `(double) a / b` differ. *(Guide: "Where the cast goes matters"; Practice Questions 2 and 6)*
- I can recognise code where an `int` expression can overflow and describe what the result will be like. *(Guide: Worked example 2; Practice Question 8)*
- I can explain why `double avg = sum / count;` can lose a fraction even though `avg` is a `double`. *(Practice Question 9)*

All ticked? Move on to the [Topic 1.6 study guide](/advanced-course-resources/computer-science-a/1-6-compound-assignment-study-guide/), Compound Assignment Operators, or return to the [course roadmap](/advanced-course-resources/computer-science-a/#roadmap).
