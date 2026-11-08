---
resourceId: "mb-ap-csa-3.2-practice"
title: "Impact of Program Design: Practice Questions (Computer Science A 3.2)"
description: "Nine original Marlbridge practice questions on reliability, testing, the impact of programs on society and the economy, and code reuse and licensing, with suggested rubrics."
course: "computer-science-a"
unit: 3
topics: ["3.2"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.2-study-guide"]
learningObjectives:
  - "Define system reliability and explain why programmers test with a variety of conditions"
  - "Design a small set of test cases that includes ordinary, boundary and extreme values"
  - "Describe both beneficial and harmful effects of a program on society, the economy and culture, including unintended effects"
  - "Explain the legal and intellectual property issues in reusing code, including open-source code"
  - "Write a balanced, specific explanation of an impact in context"
skills: ["5", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.2-study-guide", "mb-ap-csa-3.2-revision-notes", "mb-ap-csa-3.2-checklist"]
next: "mb-ap-csa-3.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All apps, companies and data are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

Which statement best defines **system reliability**?

- (A) A program uses as little memory as possible.
- (B) A program performs its tasks as expected under stated conditions without failure.
- (C) A program has no comments in its code.
- (D) A program produces output in under one second.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Reliability is about behaving as expected, under stated conditions, without failure.

- (A) is about efficiency, not reliability.
- (C) is irrelevant: comments do not affect behaviour.
- (D) is about speed; a fast program can still fail.
</details>

## Question 2 (multiple choice · core)

A programmer must test a method `int half(int n)` that is meant to work for any `int` from 0 to 1,000,000. Which set of test inputs gives the **most useful variety of conditions**?

- (A) 10, 12, 14, 16, 18
- (B) 0, 1, 500000, 999999, 1000000
- (C) 500000, 500000, 500000, 500000, 500000
- (D) 2, 4, 6, 8, 10

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** It includes both boundaries (0 and 1,000,000), the smallest non-zero value, an ordinary value and a value just inside the upper limit, so odd and even values and both edges are exercised.

- (A) and (D) are all small even numbers in the same part of the range.
- (C) repeats one value five times and tests nothing new after the first.
</details>

## Question 3 (multiple choice · core)

A fictional shopping app was designed to suggest products to customers. Which of the following is an example of an **unintended harmful effect beyond its intended use**?

- (A) Customers find items they want more quickly.
- (B) The company's sales increase.
- (C) A recommendation feature built for sales also reveals to family members, on a shared screen, what a customer has been looking at.
- (D) The app runs on several types of phone.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The program does something its designers did not aim for, and it harms a person's privacy.

- (A) and (B) are intended benefits.
- (D) is a technical feature, not a harm.
</details>

## Question 4 (multiple choice · core)

A student building a game finds a graphics library on a website. The site says the code is published as open source and free to use. Which is the most accurate statement?

- (A) The student may use it as the licence allows, because it is published as open source.
- (B) The student must pay the original author before using any open-source code.
- (C) The student may claim to have written it, since it is free.
- (D) The student cannot use any code that someone else wrote.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Open-source code is published and free to use, within the terms of its licence.

- (B) describes code that is *not* open source.
- (C) is dishonest and breaks the idea of respecting intellectual property.
- (D) is false: reuse is normal and legitimate with permission or open licences.
</details>

## Question 5 (multiple choice · core)

Consider this method. Its stated condition is that `a` and `b` are `int` values from 0 to 2,147,483,647.

```java
public static int meanOfTwo(int a, int b)
{
    return (a + b) / 2;
}
```

Which test would most likely reveal that the method is **not reliable**?

- (A) `meanOfTwo(3, 4)`
- (B) `meanOfTwo(0, 0)`
- (C) `meanOfTwo(10, 20)`
- (D) `meanOfTwo(Integer.MAX_VALUE, Integer.MAX_VALUE)`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `Integer.MAX_VALUE + Integer.MAX_VALUE` overflows to −2, so the method returns −1 instead of 2,147,483,647. This was confirmed by running the code. It is inside the stated condition, so it is a genuine failure.

- (A) returns 3 (7 / 2 with integer division) and is fine.
- (B) returns 0 and is fine.
- (C) returns 15 and is fine.
</details>

## Question 6 (multiple choice · stretch)

A fictional city introduces a program that decides which of two bus stops a new route should serve, using past ridership data. After the route opens, one neighbourhood has no stop within a ten-minute walk. Which statement is the **best** explanation of a social and ethical issue involved?

- (A) The program must have a syntax error.
- (B) The program ran slowly, so its answer was wrong.
- (C) The data may not have represented everyone who would use the route, so the program's effects fell unevenly on different groups.
- (D) The route is not an example of computing's impact on society.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A program built from past data can reflect what the data did and did not include, and effects can differ between groups.

- (A) would stop the program compiling; this program ran.
- (B) confuses speed with correctness.
- (D) is false: transport decisions made with programs are an example of impact on society.
</details>

## Question 7 (constructed response · core)

A fictional company releases *StudyBuddy*, an app that reminds students when homework is due and shares each student's completion rate with their teacher.

(a) Describe one **beneficial** effect, naming the group affected and the reason.

(b) Describe one **possible harmful or unintended** effect, naming the group affected and the reason.

(c) State one change to the program that could reduce the harm in (b).

<details>
<summary>Answer and explanation</summary>

**(a)** Students who forget deadlines get timely reminders, so they are more likely to hand in work on time (because the app notifies them automatically).

**(b)** Students who are struggling may feel pressure or embarrassment because their completion rate is shared with a teacher, and a rate on its own does not show the reason for missed work. The designers intended to help, not to cause pressure. Another valid answer is a privacy concern about how the data are stored.

**(c)** Let students choose what is shared, share only whether work was handed in rather than a ranking, or allow the student to add a note of explanation.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): a plausible benefit |
| 1 | Part (a): a named group and a link to the program feature |
| 1 | Part (b): a plausible harmful or unintended effect |
| 1 | Part (b): a named group and a reason that connects to what the program does |
| 1 | Part (c): a realistic design change that targets the harm in (b) |
</details>

## Question 8 (constructed response · core)

A fictional method is meant to return the percentage of a tank that is full.

```java
public static int percentFull(int used, int capacity)
{
    return used * 100 / capacity;
}
```

The stated condition is that `capacity` is positive and `used` is from 0 to `capacity` inclusive.

(a) Give three test calls that together form a good variety of conditions, and state the value each returns.

(b) Find one test call that satisfies the stated condition and returns a wrong result, and explain why.

(c) Say whether the method is reliable.

<details>
<summary>Answer and explanation</summary>

**(a)** For example `percentFull(50, 200)` returns 25 (ordinary), `percentFull(0, 200)` returns 0 (boundary) and `percentFull(200, 200)` returns 100 (boundary).

**(b)** `percentFull(30000000, 40000000)`. The expected answer is 75, but `30000000 * 100` is 3,000,000,000, which exceeds `Integer.MAX_VALUE`, so the `int` overflows to −1,294,967,296 and dividing by 40,000,000 gives −32. The result of running it was `-32`.

**(c)** Not reliable: an input within the stated condition fails.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Three tests that include at least one boundary |
| 1 | Correct returned values for the tests in (a) |
| 1 | A valid failing call in (b) |
| 1 | Explanation that the `int` product overflows |
| 1 | Conclusion that the method is not reliable, because the failure is inside the stated condition |
</details>

## Question 9 (constructed response · stretch)

A small team building a school timetable program finds that another group has published code that sorts lessons efficiently. Another company sells a much faster module that is **not** open source.

(a) Explain what the team may do with the published code, assuming it is open source.

(b) Explain what the team must do before using the company's module.

(c) Give one reason why a team might still choose to write their own code instead.

<details>
<summary>Answer and explanation</summary>

**(a)** They may use it as its licence allows, because open-source code is published and free to use, but they should follow the licence terms (for example credit the author).

**(b)** They must obtain permission from the company, and usually pay, before including the code.

**(c)** Examples: to avoid cost, to understand and control the code, to avoid depending on another party, or to meet a licence condition they cannot accept.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Open-source code can be used because it is published and free to use |
| 1 | Mention of following the licence terms |
| 1 | Permission (and usually payment) is required for non-open-source code |
| 1 | A reasonable reason for writing their own code |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Anatomy of a Class study guide](/advanced-course-resources/computer-science-a/3-3-anatomy-class-study-guide/).
- Missed Questions 2, 5 or 8: reread "System reliability" and Worked example 2 in the [study guide](/advanced-course-resources/computer-science-a/3-2-impact-program-design-study-guide/).
- Missed Questions 3, 6 or 7: reread "Impact: beneficial, harmful, and unintended" and Worked example 1.
- Missed Questions 4 or 9: reread "Legal issues and intellectual property", then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-2-impact-program-design-checklist/).
