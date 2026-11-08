---
resourceId: "mb-ap-csp-5.3-revision-notes"
title: "Computing Bias: Revision Notes (Computer Science Principles 5.3)"
description: "One-page recap of computing bias: biased data and algorithms, bias at all levels of development, group-by-group checking, proxies and ways programmers can reduce bias."
course: "computer-science-principles"
unit: 5
topics: ["5.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-5.3-study-guide"]
learningObjectives: 
  - "Recall the key ideas of computing bias without notes"
  - "Spot the common errors before making them"
skills: ["4", "5", "6"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-5.3-study-guide", "mb-ap-csp-5.3-practice", "mb-ap-csp-5.3-checklist"]
next: "mb-ap-csp-5.3-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Computing innovations can reflect existing human biases because of biases written into algorithms or biases in the data they use."
  - "Biases can be embedded at all levels of software development: in the problem chosen, the data collected, the rules written and the way results are used."
  - "An overall result can hide poor performance for a smaller group, so results should be checked group by group."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/5-3-computing-bias-study-guide/).

## Recap

- Computing innovations can **reflect existing human biases** through **biased algorithms** or **biased data**.
- Biases can be embedded at **all levels** of software development.
- **Proxy**: a feature closely linked to a characteristic that can have the same effect as using the characteristic.
- **Detect** bias by computing results **for each group** and comparing; an overall figure can hide a gap.
- **Reduce** bias: representative data, testing across groups, reviewing rules, varied perspectives, human review, monitoring after release.
- Bias is **not eliminated by simply collecting more data** from the same source.

## Key relationships

| Idea | How to recognise or check it |
|---|---|
| Biased data | One group is missing or under-represented, or past decisions were unfair |
| Biased algorithm | A rule or formula favours some groups, perhaps through a proxy |
| Group accuracy | correct ÷ tests, for each group |
| Overall accuracy | total correct ÷ total tests (a weighted average) |
| Gap | difference between group results, in percentage points |

## Assumptions and conventions

- Percentage point differences: subtract the percentages (96% - 60% = 36 percentage points).
- Say which group is affected and how, and keep the language neutral.
- A fix should be specific (what data, what test, what rule change).

## Mistakes to avoid

1. Reporting only the overall figure.
2. Claiming a program is fair because the code does not mention any group.
3. Suggesting "more data" without saying that it must be representative.
4. Forgetting that bias can arise at any stage.
5. Blaming only individuals when the data or design are the source.
6. Proposing a fix that is not specific.

## Two quick worked examples

**1.** A system is right on 45 of 50 tests for Group P (90%) and 20 of 40 for Group Q (50%). Overall it is right on 65 of 90 tests, about 72.2%. The overall figure hides a 40 percentage-point gap.

**2.** A hiring rule requires "at least 5 years in the same job". Applicants with career breaks, for reasons such as caring for family, are screened out. The rule never mentions the group, but it may act as a proxy, so the company should check results by group and ask whether the rule is needed.

## A revision routine

Write one example of biased data and one of a biased rule. Then invent test results for two groups of different sizes, calculate each group's accuracy and the overall accuracy, and write the gap in percentage points. Finish by listing three actions that reduce bias and saying which kind of bias each addresses.

## Quick self-check

1. A system is right on 45 of 50 tests for Group P and 15 of 25 for Group Q. Accuracy for each? *(90% and 60%.)*
2. Why might "postcode" be a poor input for a loan decision? *(It can act as a proxy for characteristics that should not matter.)*
3. Name two ways to reduce bias. *(For example, representative data and testing results by group.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/5-3-computing-bias-practice/).
