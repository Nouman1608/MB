---
resourceId: "mb-ap-csa-3.2-revision-notes"
title: "Impact of Program Design: Revision Notes (Computer Science A 3.2)"
description: "One-page recap of system reliability, testing, social and economic impact, unintended harm, intellectual property and open-source code, with a quick self-check."
course: "computer-science-a"
unit: 3
topics: ["3.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.2-study-guide"]
learningObjectives:
  - "Define system reliability and explain why programmers test with a variety of conditions"
  - "Design a small set of test cases that includes ordinary, boundary and extreme values"
  - "Describe both beneficial and harmful effects of a program on society, the economy and culture, including unintended effects"
  - "Explain the legal and intellectual property issues in reusing code, including open-source code"
  - "Write a balanced, specific explanation of an impact in context"
skills: ["5", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.2-study-guide", "mb-ap-csa-3.2-practice", "mb-ap-csa-3.2-checklist"]
next: "mb-ap-csa-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "System reliability means a program performs as expected under stated conditions without failure; programmers test with a variety of conditions to maximise it."
  - "Programs affect society, the economy and culture, and the effects can be beneficial, harmful or both."
  - "A program built for one purpose can have unintended harmful effects beyond that purpose."
  - "Reused code raises legal and intellectual property issues: open-source code is free to use under its terms; other code needs permission and often payment."
  - "A good explanation names who is affected, what the effect is, and why it happens."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These notes recap Topic 3.2. For explanations and worked examples, see the [study guide](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/).

## Recap

- **System reliability**: a program performs its tasks as expected, under stated conditions, without failure.
- Programmers maximise reliability by **testing with a variety of conditions**: ordinary, boundary, extreme and special-case values.
- The creation of programs has **impacts on society, the economy and culture**. Impacts can be **beneficial and harmful**.
- A program built for one purpose can have **unintended harmful effects beyond its intended use**.
- **Legal and intellectual property issues** arise when creating programs. Programmers often reuse code that others have published as **open source** and free to use. Code **not** published as open source needs the owner's **permission and often payment**.

## Key relationships

| Idea | Question to ask | Good evidence in an answer |
|---|---|---|
| Reliability | Does it do what is expected under the stated conditions? | Tests covering ordinary, boundary, extreme and special values |
| Benefit | Who gains, and why? | A named group and a mechanism from the program's design |
| Harm or unintended effect | Who loses or is affected beyond the intended use? | A second named group and a mechanism |
| Open source | Is it published and free to use? | The licence terms are followed |
| Not open source | Do I have the owner's permission? | Permission obtained, usually with payment |

## Worked reminder

`Gauge.percentFull(used, capacity)` computes `used * 100 / capacity`. For `(50, 200)` it returns 25 and for `(200, 200)` it returns 100. For `(5, 0)` it throws `ArithmeticException: / by zero`. For `(30000000, 40000000)` the product 3,000,000,000 overflows `int`, so the method returns −32. That last result is inside the stated condition and yet wrong, so the method is not reliable. Only an extreme test value revealed it.

## Mistakes to avoid

- Saying "reliable" means "never crashes". A wrong value is also a failure.
- Testing five similar ordinary values and concluding the method works.
- Writing a one-sided impact answer ("this app is bad") or one with no named group.
- Treating a downloaded code file as free to use without checking whether it is open source and what its licence says.
- Confusing an unintended effect with a bug. The program may do exactly what it was designed to do and still cause a harm.

## Quick self-check

1. Name three kinds of test value that give a variety of conditions. *Answer: for example ordinary, boundary and extreme values (special cases are a fourth).*
2. A programmer copies a company's paid code into their app without asking. Which issue arises? *Answer: legal and intellectual property: permission (and usually payment) was needed.*
3. An app built to help people share photos is later used to spread false claims. What kind of effect is this? *Answer: an unintended harmful effect beyond the intended use.*
4. What does `Integer.MAX_VALUE` have to do with reliability? *Answer: arithmetic that exceeds the range of `int` overflows and gives wrong results, which a test with an extreme value can reveal.*
