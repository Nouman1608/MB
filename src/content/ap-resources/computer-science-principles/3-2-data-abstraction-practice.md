---
resourceId: "mb-ap-csp-3.2-practice"
title: "Data Abstraction: Practice Questions (Computer Science Principles 3.2)"
description: "Nine original Marlbridge practice questions on lists, indexing, mixed-type lists, index errors and explaining data abstraction, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.2"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.2-study-guide"]
learningObjectives:
  - "Explain what a data abstraction is and how a list provides one"
  - "Use list notation, indexes and mixed-type elements correctly"
  - "Predict when an index causes an error"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["3"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.2-study-guide", "mb-ap-csp-3.2-revision-notes", "mb-ap-csp-3.2-checklist"]
next: "mb-ap-csp-3.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "9 original questions: multiple choice, multiple select and constructed response."
  - "Every answer explains why each wrong option fails."
  - "Constructed-response answers come with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value). Mark points are a **suggested Marlbridge rubric**, not an official scoring guideline. No calculator is needed or allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

What is displayed?

```text
scores ← [12, 15, 9, 18, 14]
DISPLAY(scores[2])
```

- (A) 12
- (B) 15
- (C) 9
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The second element of `scores` is 15. Indices start at 1.

- (A) 12 is element 1, which is what you would get by counting from 0.
- (C) 9 is element 3.
- (D) 18 is element 4.

</details>

## Question 2 (multiple choice · foundation)

A list `names` contains four elements. Which expression refers to the **last** element?

- (A) `names[5]`
- (B) `names[4]`
- (C) `names[0]`
- (D) `names[LENGTH(names) + 1]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The last valid index equals the length, 4. (`LENGTH(names)` would also work.)

- (A) and (D) are beyond the end of the list and cause an error.
- (C) Index 0 does not exist in the exam notation.

</details>

## Question 3 (multiple choice · core)

What is displayed?

```text
nums ← [5, 6, 7]
APPEND(nums, 8)
DISPLAY(LENGTH(nums))
```

- (A) 4
- (B) 7
- (C) 5
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `nums` starts as `[5, 6, 7]`; `APPEND` adds 8 at the end, giving `[5, 6, 7, 8]`, so `LENGTH(nums)` is 4.

- (B) 7 is an element, not the length.
- (C) 5 is the first element.
- (D) 3 is the length before the append.

</details>

## Question 4 (multiple choice · core)

What happens when this code runs?

```text
prices ← [25, 30, 40]
DISPLAY(prices[3])
DISPLAY(prices[4])
```

- (A) It displays 40 and then ends with an error message when the program reaches the second `DISPLAY`.
- (B) It displays 0 and then 40.
- (C) It displays 40 and then 0.
- (D) It displays 40 40.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `prices[3]` is valid and shows 40. `prices[4]` is out of range because the list has only three elements, so an error is produced and the program terminates.

- (B) the display order is wrong and 0 is not produced.
- (C) invents a default value; the notation does not.
- (D) repeats the same element.

</details>

## Question 5 (multiple choice · core)

A program stores a pupil's name, age and whether they have paid in one list: `pupil ← ["Wei", 14, false]`. Which statement is true?

```text
pupil ← ["Wei", 14, false]
DISPLAY(pupil[3])
```

- (A) `pupil[2]` is "Wei".
- (B) `pupil[0]` is "Wei".
- (C) The list is invalid because it mixes types.
- (D) `pupil[3]` is false.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Index 3 holds `false`.

- (A) "Wei" is at index 1.
- (B) There is no index 0.
- (C) Lists may hold different types of elements.

</details>

## Question 6 (multiple choice · core)

Which is the **best** description of how a list used as a data abstraction manages complexity?

- (A) It gives a collection of related values one name so code does not depend on how many values there are.
- (B) It guarantees that the program has no errors.
- (C) It stores every value in a separate variable behind the scenes so the programmer can see them.
- (D) It makes the computer run the program faster.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A data abstraction separates the idea of "the collection" from the details of the individual values and their number.

- (B) Lists do not prevent errors, such as index errors.
- (C) Describes the opposite of abstraction.
- (D) Speed is not what is being claimed.

</details>

## Question 7 (multiple select, choose two · core)

A program uses a list called `playlist` and the loop `FOR EACH song IN playlist`. Which **two** statements describe benefits of the list as a data abstraction?

- (A) The loop runs once, whatever the length of the list.
- (B) The program does not need a separate variable for every song.
- (C) A song can be added to `playlist` without changing the loop.
- (D) The list stores songs in alphabetical order automatically.
- (E) The list removes the need for a loop.

<details>
<summary>Answer and explanation</summary>

**Answers: (B) and (C).** The loop works whatever the number of songs, and one name replaces many variables.

- (A) The loop runs once **per element**.
- (D) A list keeps the order in which elements are placed; it does not sort.
- (E) A loop is still needed to process every element.

</details>

## Question 8 (constructed response · core)

A fictional weather app stores each day's highest temperature in a list called `highs`. A loop adds up the values to find the weekly total. Explain how the list manages complexity in this program. Give one thing that would be harder to do without it.

<details>
<summary>Answer and explanation</summary>

A full-credit answer:

"The list `highs` stores all the daily maximum temperatures under one name. The loop that adds the values can process every element without the code mentioning how many days there are, so the same code works for 7 days or 365 days. Without the list the program would need a separate variable for every day and a separate addition statement for each one, which is longer and would have to be edited whenever the number of days changed."

Note the answer names the list, says what it holds, links to the loop, and states the alternative.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| Names the abstraction (the list `highs`) | 1 |
| States that it holds the daily temperatures under one name | 1 |
| Links it to the loop or the total so the program is tied to the explanation | 1 |
| Explains the harder alternative (a variable per day) and why it is worse | 1 |

</details>

## Question 9 (constructed response · foundation)

The list `marks` holds `[7, 3, 9]`. (a) State what `marks[2]` evaluates to. (b) Write a statement that changes the last element to 10. (c) Write the list after your statement. (d) State what happens if the program then uses `marks[4]`.

<details>
<summary>Answer and explanation</summary>

(a) `marks[2]` evaluates to 3.

(b) `marks[3] ← 10` (or `marks[LENGTH(marks)] ← 10`).

(c) `[7, 3, 10]`.

(d) The index 4 is greater than the length (3), so an error message is produced and the program terminates.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) 3 | 1 |
| (b) Assigns to index 3 or LENGTH(marks) | 1 |
| (c) [7, 3, 10] | 1 |
| (d) Error, and the program terminates | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/) before trying again.
