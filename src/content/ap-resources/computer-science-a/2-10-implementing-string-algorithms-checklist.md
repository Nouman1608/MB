---
resourceId: "mb-ap-csa-2.10-checklist"
title: "Implementing String Algorithms: Topic Checklist (Computer Science A 2.10)"
description: "Specific I can statements for standard algorithms that process strings with loops, each linked to the guide section or practice question that tests it."
course: "computer-science-a"
unit: 2
topics: ["2.10"]
resourceType: "topic-checklist"
learningObjectives:
  - "Judge which parts of this topic are secure and which need more practice"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.10-study-guide", "mb-ap-csa-2.10-revision-notes", "mb-ap-csa-2.10-practice"]
next: "mb-ap-csa-2.11-study-guide"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Tick a statement only when you can do it without notes."
  - "Each statement names the guide section or practice question that tests it."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Work through the list without notes. If you cannot do a statement, follow its link, then come back. Guide = [study guide](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-study-guide/); Practice = [practice questions](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-practice/).

## Understanding

- I can state the valid indexes of a String and what `substring(a, b)` returns. *(Guide: "Strings as sequences you can loop over"; Practice question 1)*
- I can explain why `s.substring(1);` on its own does not change `s`. *(Guide: "Strings are immutable"; Practice question 5)*
- I can explain what causes a `StringIndexOutOfBoundsException`. *(Guide: "Out of range"; Practice questions 4 and 6)*
- I can explain why strings are compared with `equals` rather than `==`. *(Guide: "The three standard string algorithms"; Practice question 8)*

## Skills

- I can loop through a String one character at a time. *(Guide: "Visiting every character"; Practice question 2)*
- I can count characters that meet a criterion, including membership in a set with `indexOf`. *(Guide: Worked example 1; Practice question 7)*
- I can count substrings with a window of fixed length. *(Guide: Worked example 2; Practice questions 9 and 10)*
- I can build a new String, in order or reversed. *(Guide: "The three standard string algorithms"; Practice questions 3 and 8)*

## Reasoning

- I can find the correct upper bound for a window loop. *(Guide: Worked example 2; Practice questions 6 and 10)*
- I can trace a string loop in a table and report the output. *(Guide: Worked examples 1 and 2; Practice question 9)*
- I can write a correct palindrome test and explain why it works. *(Guide: "The three standard string algorithms"; Practice question 8)*

All ticked? Move on to the [Topic 2.11 study guide](/advanced-course-resources/computer-science-a/2-11-nested-iteration-study-guide/), Nested Iteration.
