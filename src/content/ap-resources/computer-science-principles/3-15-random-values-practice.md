---
resourceId: "mb-ap-csp-3.15-practice"
title: "Random Values: Practice Questions (Computer Science Principles 3.15)"
description: "Nine original Marlbridge practice questions on RANDOM(a, b): inclusive ranges, possible results, probabilities, dice sums and random list choices, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.15"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.15-study-guide"]
learningObjectives:
  - "State what RANDOM(a, b) returns and how many values are possible"
  - "Determine all possible results of an expression using RANDOM"
  - "Write expressions and conditions that give a required range or probability"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.15-study-guide", "mb-ap-csp-3.15-revision-notes", "mb-ap-csp-3.15-checklist"]
next: "mb-ap-csp-3.15-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "10 original questions: multiple choice, multiple select and constructed response."
  - "Every answer explains why each wrong option fails."
  - "Constructed-response answers come with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value). Mark points are a **suggested Marlbridge rubric**, not an official scoring guideline. No calculator is needed or allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

Which set contains every value that `RANDOM(3, 7)` could return?

- (A) 4, 5, 6, 7
- (B) 3, 4, 5, 6
- (C) 3, 4, 5, 6, 7
- (D) 4, 5, 6

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Both end values are included, giving five values.

- (A) excludes 3.
- (B) excludes 7.
- (D) excludes both ends.

</details>

## Question 2 (multiple choice · foundation)

How many different values can `RANDOM(0, 9)` return?

- (A) 11
- (B) 8
- (C) 9
- (D) 10

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** There are 9 − 0 + 1 = 10 integers from 0 to 9 inclusive.

- (A) and (B) are off by more.
- (C) counts b − a.

</details>

## Question 3 (multiple choice · core)

Which set contains all the possible results of `RANDOM(1, 3) * 2`?

- (A) 2, 4, 6
- (B) 1, 3, 5
- (C) 1, 2, 3, 4, 5, 6
- (D) 2, 4

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The values 1, 2, 3 become 2, 4, 6.

- (B) is the result of `2 * RANDOM(1, 3) - 1`.
- (C) assumes every integer to 6 is possible.
- (D) omits 6.

</details>

## Question 4 (multiple choice · core)

The expression `RANDOM(1, 6) + RANDOM(1, 6)` is evaluated. Which statement is true?

- (A) The result 1 is possible.
- (B) All results from 2 to 12 are equally likely.
- (C) The result 13 is possible.
- (D) The result 7 is more likely than the result 2.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** There are six ways to make 7 but only one way to make 2.

- (A) The smallest total is 2.
- (B) is false: a single call is uniform, a sum is not.
- (C) The largest total is 12.

</details>

## Question 5 (multiple choice · core)

Which code displays `heads` and `tails` with equal chances?

- (A) `IF(RANDOM(1, 10) ≤ 3) { DISPLAY("heads") } ELSE { DISPLAY("tails") }`
- (B) `IF(RANDOM(1, 2) = 1) { DISPLAY("heads") } ELSE { DISPLAY("tails") }`
- (C) `DISPLAY("heads")`
- (D) `IF(RANDOM(1, 3) = 1) { DISPLAY("heads") } ELSE { DISPLAY("tails") }`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Two equally likely values, one for each outcome.

- (A) gives heads with probability 3/10.
- (C) never gives tails.
- (D) gives heads with probability 1/3.

</details>

## Question 6 (multiple choice · core)

Which expression selects a random element of the list `songs`, whatever its length, with every element possible and no error?

- (A) `songs[RANDOM(1, LENGTH(songs))]`
- (B) `songs[RANDOM(0, LENGTH(songs))]`
- (C) `songs[RANDOM(1, 5)]`
- (D) `songs[RANDOM(1, LENGTH(songs) + 1)]`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The range 1 to `LENGTH(songs)` is exactly the set of valid indices.

- (B) may produce index 0, which is invalid.
- (C) is correct only if the list has exactly 5 items.
- (D) may produce an index past the end.

</details>

## Question 7 (multiple choice · foundation)

A student runs a program containing `DISPLAY(RANDOM(1, 100))` three times. Which statement is correct?

- (A) Each run must display 50.
- (B) Each run may display a different value from 1 to 100.
- (C) The three runs must display different values.
- (D) Each run displays a value from 2 to 99.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each execution may produce a different result; repeats are possible, and the end values are included.

- (A) is not a random value.
- (C) Repeats can happen.
- (D) excludes the ends.

</details>

## Question 8 (multiple select, choose two · core)

Which **two** expressions could produce the value 4?

- (A) `RANDOM(1, 2) * 3`
- (B) `RANDOM(1, 4)`
- (C) `RANDOM(1, 3) + 1`
- (D) `RANDOM(1, 3) * 2 - 1`
- (E) `RANDOM(5, 9)`

<details>
<summary>Answer and explanation</summary>

**Answers: (B) and (C).** `RANDOM(1, 4)` can return 4. `RANDOM(1, 3) + 1` gives 2, 3 or 4.

- (A) gives 3 or 6.
- (D) gives 1, 3 or 5.
- (E) gives 5 to 9.

</details>

## Question 9 (constructed response · core)

(a) Write an expression that returns a random multiple of 5 from 10 to 50, inclusive. (b) List every possible result and say how many there are. (c) State the probability of the result 25.

<details>
<summary>Answer and explanation</summary>

(a) `RANDOM(2, 10) * 5`

(b) The values 2 to 10 give 10, 15, 20, 25, 30, 35, 40, 45, 50: **9** possible results (10 − 2 + 1 = 9).

(c) Each result has probability 1/9, so the probability of 25 is 1/9 (about 11%).

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) Correct range 2 to 10 multiplied by 5 | 1 |
| (b) All nine results listed | 1 |
| (b) States 9 results with the counting reason | 1 |
| (c) 1/9 with the reason that each value is equally likely | 1 |

</details>

## Question 10 (constructed response · core)

A game gives a bonus with probability 25%. (a) Write a conditional that sets `bonus` to `true` with probability 25% and to `false` otherwise. (b) A programmer instead writes `IF(RANDOM(1, 3) = 1)`. State the probability of a bonus. (c) Explain why testing the code once is not enough.

<details>
<summary>Answer and explanation</summary>

(a)

```text
IF(RANDOM(1, 4) = 1)
{
  bonus ← true
}
ELSE
{
  bonus ← false
}
```

One of four equally likely values (1) triggers the bonus: 1/4 = 25%. (Any equivalent test, such as `RANDOM(1, 100) ≤ 25`, is also correct.)

(b) 1/3, about 33%, because one of three equally likely values qualifies.

(c) The result changes from run to run. A single run might take the bonus branch or might not, so it cannot show that both branches work. The code must be run many times, or tested so that both branches are exercised.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) A RANDOM test with the correct 1-in-4 or 25-in-100 ratio | 1 |
| (a) Assigns true and false correctly | 1 |
| (b) 1/3 (about 33%) | 1 |
| (c) Results vary between runs | 1 |
| (c) Both branches must be exercised or many runs made | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-15-random-values-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-15-random-values-study-guide/) before trying again.
