---
resourceId: "mb-ap-csp-3.11-practice"
title: "Binary Search: Practice Questions (Computer Science Principles 3.11)"
description: "Ten original Marlbridge practice questions on binary search: requirements, tracing, counting the greatest number of checks, and comparing with linear search, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.11"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.11-study-guide"]
learningObjectives:
  - "Describe how binary search works and why the data must be sorted"
  - "Trace a binary search and identify which half is eliminated at each check"
  - "Determine the greatest number of checks needed for a list of a given size"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["1"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.11-study-guide", "mb-ap-csp-3.11-revision-notes", "mb-ap-csp-3.11-checklist"]
next: "mb-ap-csp-3.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "10 original questions: multiple choice, multiple select and constructed response."
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

Which condition must be true before binary search can be used on a list?

- (A) The list contains no repeated values.
- (B) The data is in sorted order.
- (C) The list contains only numbers.
- (D) The list has an even number of elements.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Binary search discards half the data using comparisons, which is valid only for sorted data.

- (A) Repeated values do not break the idea.
- (C) Sorted strings can also be searched.
- (D) Odd or even lengths both work.

</details>

## Question 2 (multiple choice · foundation)

Which list can be searched using binary search **without first changing it**?

- (A) `[8, 4, 15, 16, 23, 42]`
- (B) `[42, 4, 23, 8, 16, 15]`
- (C) `[4, 8, 15, 16, 23, 42]`
- (D) `[15, 4, 42, 16, 8, 23]`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Only the first list is in ascending order.

- (A) has 8 before 4.
- (B) and (D) are in no order.

</details>

## Question 3 (multiple choice · core)

A sorted list contains 1,000 items. What is the greatest number of items that binary search needs to check to find any one value (or show it is absent)?

- (A) 1,000
- (B) 100
- (C) 500
- (D) 10

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Halving 1,000 repeatedly gives 500, 250, 125, 62, 31, 15, 7, 3, 1: nine halvings plus the last check = 10. Also 2 to the power 10 is 1,024, the first power of two above 1,000.

- (A) is the greatest number for a linear search.
- (B) is far too many.
- (C) is half the list.

</details>

## Question 4 (multiple choice · core)

A sorted list grows from 500 items to 1,000 items. By how many does the greatest number of checks for binary search increase?

- (A) It doubles
- (B) By 500
- (C) It does not change
- (D) By 1

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** For 500 items the greatest number is 9 (2 to the power 9 is 512). For 1,000 it is 10, so it increases by 1.

- (A) is true for linear search.
- (B) confuses the increase in list size with the number of checks.
- (C) is wrong: the list size crossed a power of two (512).

</details>

## Question 5 (multiple choice · core)

A sorted list holds 9 values. Which position does binary search compare with the target first?

- (A) 4
- (B) 5
- (C) 1
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The middle of nine items is the fifth item (four above and four below).

- (A) is not the exact middle.
- (C) and (D) are the ends, as a linear search would use.

</details>

## Question 6 (multiple choice · core)

The target is 20. A binary search of a sorted list compares it with the middle value 35. What happens next?

- (A) The search starts again from the first element.
- (B) Values 35 and below are eliminated and the search continues in the upper part.
- (C) The search stops because 20 is not 35.
- (D) Values 35 and above are eliminated and the search continues in the lower part.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** 20 < 35, so the target, if present, is in the part below 35. The middle value and everything above it can be discarded.

- (A) is a linear search.
- (B) is the opposite.
- (C) A different value does not mean the target is absent.

</details>

## Question 7 (multiple choice · core)

A shop has 20 prices in an unsorted list and wants to know whether a price of 7.50 appears once. Which is appropriate?

- (A) Binary search, because it is always faster.
- (B) Linear search, because the data is not sorted.
- (C) Binary search, because the list is short.
- (D) Neither search can be used.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Binary search needs sorted data. Linear search works on any list.

- (A) and (C) ignore the sorting requirement.
- (D) Linear search can be used.

</details>

## Question 8 (multiple select, choose two · core)

Which **two** statements about binary search are true?

- (A) Each check eliminates exactly one element.
- (B) It begins at the middle of the data.
- (C) It always takes fewer checks than a linear search.
- (D) It requires the data to be sorted.
- (E) It can only be used if the list length is even.

<details>
<summary>Answer and explanation</summary>

**Answers: (B) and (D).** These are the two defining facts.

- (A) Each check eliminates about half of the remaining elements.
- (C) Linear search can be quicker if the target is at the front.
- (E) The length does not need to be even.

</details>

## Question 9 (constructed response · core)

The sorted list `[4, 9, 17, 23, 30, 38, 45]` is searched for 30 using binary search. (a) State the position compared first and its value. (b) Show every comparison until 30 is found. (c) State how many checks were needed and the greatest possible number for a list of this length.

<details>
<summary>Answer and explanation</summary>

(a) The list has 7 items, so the middle is position 4, which holds 23.

(b)

| Check | Live positions | Middle | Value | Result |
|---|---|---|---|---|
| 1 | 1–7 | 4 | 23 | 23 < 30, keep positions 5–7 |
| 2 | 5–7 | 6 | 38 | 38 > 30, keep position 5 |
| 3 | 5–5 | 5 | 30 | found |

(c) 3 checks. For 7 items the greatest is 3, because 2<sup>3</sup> = 8 is the first power of two greater than 7 (or: 7 → 3 → 1, then the last check). So this search used the greatest possible number.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Position 4 and value 23 | 1 |
| (b) First comparison and correct half kept | 1 |
| (b) Second comparison (38) and correct half kept | 1 |
| (b) Third comparison finds 30 at position 5 | 1 |
| (c) 3 checks and greatest possible number 3 | 1 |

</details>

## Question 10 (constructed response · core)

A sorted list holds 5,000 usernames. (a) State the greatest number of checks binary search needs, with your working. (b) State the greatest number a linear search needs. (c) Explain in one or two sentences why using binary search on the same usernames in a random order could give a wrong answer.

<details>
<summary>Answer and explanation</summary>

(a) Double 1, 2, 4, 8, ..., 4,096, 8,192. The first power of two above 5,000 is 8,192 = 2<sup>13</sup>, so the greatest number of checks is **13**. (Check: 2<sup>12</sup> = 4,096 is not more than 5,000.)

(b) A linear search may need to examine every username: **5,000**.

(c) Binary search discards half of the list after each comparison on the assumption that the discarded half is on the wrong side of the target. In an unsorted list that assumption is false, so the target can be discarded and the search can report "not found" even though the username is present.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Uses doubling or halving to find the first power of two above 5,000 | 1 |
| (a) States 13 checks | 1 |
| (b) States 5,000 | 1 |
| (c) Explains that binary search discards half based on order | 1 |
| (c) Concludes that the target can be wrongly discarded when the data is unsorted | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-11-binary-search-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-11-binary-search-study-guide/) before trying again.
