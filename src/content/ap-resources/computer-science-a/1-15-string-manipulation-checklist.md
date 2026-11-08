---
resourceId: "mb-ap-csa-1.15-checklist"
title: "String Manipulation: Checklist (Computer Science A 1.15)"
description: "A self-check list for String objects, immutability, concatenation, indices, length, substring, indexOf, equals and compareTo, linked to the guide sections and practice questions."
course: "computer-science-a"
unit: 1
topics: ["1.15"]
resourceType: "topic-checklist"
prerequisites: ["The Topic 1.15 study guide and practice questions"]
learningObjectives: ["Check which Topic 1.15 skills are secure", "Find the guide section or practice question to revisit for each gap"]
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.15-study-guide", "mb-ap-csa-1.15-revision-notes", "mb-ap-csa-1.15-practice"]
next: "mb-ap-csa-u1-diagnostic"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Tick a statement only if you can do it without notes.", "Each statement names the guide section or practice question that tests it."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Work through the list without notes. If you cannot do a statement, follow its link, then come back. Guide = [study guide](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/); Practice = [practice questions](/advanced-course-resources/computer-science-a/1-15-string-manipulation-practice/).

## Understanding

- I can say how `String` objects are created (literal or constructor) and that `String` is in `java.lang`. *(Guide: "Strings are objects")*
- I can explain that a `String` is immutable and that its methods return new values. *(Guide: "Strings cannot be changed"; Practice Question 4)*
- I can explain how `+` and `+=` combine strings with other values and why the order of evaluation matters. *(Guide: "Joining strings with + and +="; Practice Question 3)*
- I can state the range of valid indices and the exception thrown outside it. *(Guide: "Indices and the String methods"; Practice Question 7)*
- I can say what `compareTo` guarantees and why `equals` is used to compare content. *(Guide: "Comparing strings"; Practice Questions 6 and 8)*

## Skills

- I can evaluate `length`, `substring(from, to)`, `substring(from)` and `indexOf` calls by writing indices under the characters. *(Guide: Worked example 1; Practice Questions 1, 2 and 5)*
- I can get a one-character string with `substring(index, index + 1)`. *(Guide: "Indices and the String methods"; Practice Question 9)*
- I can take a string apart with `indexOf` and `substring`. *(Guide: Worked example 1; Practice Question 9)*
- I can trace a sequence of string statements in a table. *(Guide: Worked example 2; Practice Question 10)*
- I can write a short method that uses `substring` and state its precondition. *(Practice Question 11)*

## Reasoning

- I can explain why `word.substring(1);` leaves `word` unchanged and how to keep the result. *(Guide: "Strings cannot be changed"; Practice Question 4)*
- I can say which `substring` calls are legal edge cases and which throw an exception. *(Guide: "Out-of-range indices"; Practice Questions 7 and 11)*
- I can explain why `indexOf` returns `-1` and how to avoid using it as an index. *(Guide: "Indices and the String methods")*

All done? Take the [Unit 1 diagnostic](/advanced-course-resources/computer-science-a/unit-1-diagnostic/), then the [Unit 1 mixed review](/advanced-course-resources/computer-science-a/unit-1-review/), or return to the [course roadmap](/advanced-course-resources/computer-science-a/#roadmap).
