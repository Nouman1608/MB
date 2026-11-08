---
resourceId: "mb-ap-csa-3.6-checklist"
title: "Methods: Passing and Returning References of an Object: Topic Checklist (Computer Science A 3.6)"
description: "Specific I can statements for passing and returning object references, each linked to the guide section or practice question that tests it."
course: "computer-science-a"
unit: 3
topics: ["3.6"]
resourceType: "topic-checklist"
learningObjectives:
  - "Judge which parts of this topic are secure and which need more practice"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.6-study-guide", "mb-ap-csa-3.6-revision-notes", "mb-ap-csa-3.6-practice"]
next: "mb-ap-csa-3.7-study-guide"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "Tick a statement only when you can do it without notes."
  - "Each statement names the guide section or practice question that tests it."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Work through the list without notes. If you cannot do a statement, follow its link, then come back. Guide = [study guide](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/); Practice = [practice questions](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-practice/); see also the [revision notes](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-revision-notes/).

## Understanding

- I can explain that an object argument gives the parameter a copy of the reference, not a copy of the object. *(Guide: "What does a method receive"; Practice Question 1)*
- I can explain why a method can change the caller's object but cannot change which object the caller's variable refers to. *(Guide: Consequences 1 and 2; Practice Questions 2 and 8)*
- I can explain that a returned object is the same object, not a copy. *(Guide: Consequence 3; Practice Questions 3 and 9)*
- I can state when a method may access private data of a parameter. *(Guide: Consequence 4; Practice Question 5)*

## Skills

- I can draw a reference diagram for a method call and use it to predict output. *(Guide: Figure 1 and Worked example 1; Practice Questions 2 and 4)*
- I can trace code that returns one of its object parameters and then changes it. *(Guide: Worked example 2; Practice Question 3)*
- I can write a method that returns a new object without changing its parameters. *(Guide: Worked example 2; Practice Questions 6 and 7)*
- I can find why a swap of two parameters has no effect on the caller. *(Guide: Worked example 2; Practice Question 8)*

## Reasoning

- I can say what `==` compares for object variables. *(Practice Question 9)*
- I can justify why a method should not modify a mutable parameter unless required. *(Guide: Consequence 2; Practice Question 6)*
- I can explain the risk of aliasing through a returned reference. *(Practice Question 9)*

All ticked? Move on to the [Topic 3.7 study guide](/advanced-course-resources/computer-science-a/3-7-class-variables-methods-study-guide/), Class Variables and Methods, or return to the [course roadmap](/advanced-course-resources/computer-science-a/#roadmap).
