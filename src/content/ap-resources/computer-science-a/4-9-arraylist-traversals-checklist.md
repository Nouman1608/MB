---
resourceId: "mb-ap-csa-4.9-checklist"
title: "ArrayList Traversals: Checklist (Computer Science A 4.9)"
description: "A self-check for ArrayList traversals: writing index and enhanced for loops, avoiding skipped elements when deleting, and predicting index and modification exceptions."
course: "computer-science-a"
unit: 4
topics: ["4.9"]
resourceType: "topic-checklist"
prerequisites:
  - "ArrayList methods size, get, set, add and remove (Topic 4.8)"
  - "for, enhanced for and while loops (Topics 2.7 and 2.8) and array traversal (Topic 4.4)"
  - "Comparing Strings with equals (Topic 1.15)"
learningObjectives:
  - "Check each skill in Topic 4.9 against the guide and the practice set"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.9-study-guide", "mb-ap-csa-4.9-revision-notes", "mb-ap-csa-4.9-practice"]
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

Tick each line when you can do it without looking at the guide. Each line names where it is taught and tested. Revisit the [study guide](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/) for anything you cannot yet do.

## Understanding

- ☐ I can define a traversal and name the three loop forms for an ArrayList (study guide: What a traversal is; The three loop forms).
- ☐ I can explain why the index condition is i < size() and not i <= size() (study guide: The three loop forms; practice: Question 2).
- ☐ I can explain why removing in a forward loop skips an element (study guide: Changing the size during a traversal; practice: Question 1).
- ☐ I can explain why assigning to an enhanced for variable does not change the list (practice: Question 5).

## Skills

- ☐ I can write an indexed loop that reads or replaces elements with get and set (study guide: Reading and replacing during a traversal).
- ☐ I can write a backward loop that removes matching elements (study guide: Worked example 1; practice: Questions 4 and 9).
- ☐ I can write a while loop that holds the index after a removal (study guide: Worked example 1; practice: Question 7).
- ☐ I can build a String or a total while traversing in forward or reverse order (study guide: Worked example 2; practice: Question 6).

## Reasoning

- ☐ I can trace a traversal that removes elements and write the list after each pass (study guide: Worked example 1; practice: Question 8).
- ☐ I can predict ConcurrentModificationException for a removal inside an enhanced for loop (practice: Question 3).
- ☐ I can explain why a deletion bug may pass a test with non-adjacent matches (study guide: Worked example 1).
- ☐ I can choose the right loop form for a task and justify it (study guide: The three loop forms; practice: Question 10).

Next: [Topic 4.10 implementing ArrayList algorithms](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/).
