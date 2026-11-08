---
resourceId: "mb-ap-csp-3.10-practice"
title: "Lists: Practice Questions (Computer Science Principles 3.10)"
description: "Ten original Marlbridge practice questions on list operations, traversals, swapping, linear search and algorithms on lists, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.10"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.10-study-guide"]
learningObjectives:
  - "Use list indexing, assignment, INSERT, APPEND, REMOVE and LENGTH correctly"
  - "Traverse a list completely or partially with FOR EACH or an index loop"
  - "Write and trace algorithms for sum, average, maximum, minimum, counting and linear search"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.10-study-guide", "mb-ap-csp-3.10-revision-notes", "mb-ap-csp-3.10-checklist"]
next: "mb-ap-csp-3.10-checklist"
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

## Question 1 (multiple choice · core)

What is displayed?

```text
nums ← [5, 6, 7]
INSERT(nums, 1, 4)
REMOVE(nums, 3)
APPEND(nums, 9)
DISPLAY(nums[3])
DISPLAY(LENGTH(nums))
```

- (A) 9 4
- (B) 7 3
- (C) 7 4
- (D) 6 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The list changes: `[5, 6, 7]` → insert 4 at index 1 gives `[4, 5, 6, 7]` → remove index 3 (the 6) gives `[4, 5, 7]` → append 9 gives `[4, 5, 7, 9]`. So `nums[3]` is 7 and the length is 4.

- (A) reads the last element.
- (B) forgets the final APPEND for the length.
- (D) removes the wrong element or reads the wrong index.

</details>

## Question 2 (multiple choice · core)

What is displayed?

```text
vals ← [12, 5, 18, 10, 11]
count ← 0
FOR EACH v IN vals
{
  IF(v > 10)
  {
    count ← count + 1
  }
}
DISPLAY(count)
```

- (A) 5
- (B) 0
- (C) 2
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The loop counts values greater than 10: 12, 18 and 11. The values 5 and 10 are not greater than 10.

- (A) counts every element.
- (B) would result if the count were never updated.
- (C) would result from using `> 11`.

</details>

## Question 3 (multiple choice · core)

A programmer tries to swap the first two elements of `aList`, which holds `[3, 8]`, with the two lines `aList[1] ← aList[2]` then `aList[2] ← aList[1]`. What does `aList` hold afterwards?

- (A) `[3, 3]`
- (B) `[8, 8]`
- (C) `[3, 8]`
- (D) `[8, 3]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** After the first line the list is `[8, 8]`; the original 3 is lost. The second line copies 8 into index 2, which is already 8.

- (A) would need the second element to be overwritten first.
- (C) is the original list.
- (D) is the intended result; it needs a temporary variable.

</details>

## Question 4 (multiple choice · core)

Which segment correctly swaps `aList[1]` and `aList[2]`?

- (A) `aList[1] ← temp`, then `temp ← aList[2]`, then `aList[2] ← aList[1]`
- (B) `temp ← aList[1]`, then `aList[2] ← temp`, then `aList[1] ← aList[2]`
- (C) `temp ← aList[1]`, then `aList[1] ← aList[2]`, then `aList[2] ← temp`
- (D) `aList[1] ← aList[2]`, then `aList[2] ← aList[1]`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The first value is saved in `temp` before it is overwritten.

- (A) uses `temp` before it has been given a value.
- (B) overwrites `aList[2]` with the first value before copying it back, so both hold the first value.
- (D) loses the first value (see Question 3).

</details>

## Question 5 (multiple choice · core)

What happens when this code runs?

```text
aList ← [4, 5, 6]
REMOVE(aList, 0)
DISPLAY(aList)
```

- (A) The list becomes `[5, 6]`.
- (B) The program stops with an error at the `REMOVE` statement.
- (C) The list becomes `[4, 6]`.
- (D) The list becomes `[4, 5]`.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The list `[4, 5, 6]` has indices 1 to 3. Index 0 does not exist, so an error is produced and the program terminates.

- (A) assumes index 0 is the first element and removes the 4.
- (C) and (D) assume a different element is removed.

</details>

## Question 6 (multiple choice · core)

How many elements does the search examine, and what does it display for `found`?

```text
scores ← [14, 9, 21, 17, 9]
target ← 17
found ← false
i ← 1
REPEAT UNTIL(found OR i > LENGTH(scores))
{
  IF(scores[i] = target)
  {
    found ← true
  }
  i ← i + 1
}
DISPLAY(found)
DISPLAY(i - 1)
```

- (A) 4 elements, `true`
- (B) 5 elements, `false`
- (C) 5 elements, `true`
- (D) 3 elements, `true`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The loop examines 14, 9, 21 and 17, then `found` becomes true and the loop ends. The last line shows `i - 1`, which is 4.

- (B) would be the result only if 17 were not in the list.
- (C) assumes the loop continues to the end of the list.
- (D) stops one element too early.

</details>

## Question 7 (multiple choice · stretch)

What is displayed?

```text
nums ← [1, 2, 3]
FOR EACH item IN nums
{
  item ← item * 2
}
DISPLAY(nums[1])
```

- (A) 2 4 6
- (B) 0
- (C) 2
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `item` is a copy of each element. Assigning to `item` does not change `nums`, so `nums[1]` is still 1.

- (A) and (C) assume the list was doubled.
- (B) assumes the list was cleared.

</details>

## Question 8 (multiple select, choose two · core)

A list `aList` currently holds `[10, 20, 30]`. Which **two** statements are true?

- (A) After `REMOVE(aList, 2)`, `LENGTH(aList)` is 2.
- (B) After `REMOVE(aList, 3)`, `aList[3]` is 30.
- (C) `aList[0]` is 10.
- (D) After `APPEND(aList, 40)`, `aList[1]` is 40.
- (E) After `INSERT(aList, 1, 5)`, `aList[2]` is 10.

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (E).** Removing one element leaves 2. Inserting 5 at index 1 shifts 10 to index 2.

- (B) After removing index 3 the list has only two elements, so index 3 is out of range.
- (C) Index 0 is an error.
- (D) APPEND adds at the end; `aList[1]` is still 10.

</details>

## Question 9 (constructed response · core)

Write code that displays the average of the list `marks` using FOR EACH and LENGTH. Trace it for `[8, 6, 10, 4]`.

<details>
<summary>Answer and explanation</summary>

One correct answer:

```text
total ← 0
FOR EACH mark IN marks
{
  total ← total + mark
}
DISPLAY(total / LENGTH(marks))
```

Trace: `total` goes 0 → 8 → 14 → 24 → 28. `LENGTH(marks)` is 4, so the average is 28 / 4 = 7. `7` is displayed.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Initialises `total` to 0 | 1 |
| Traverses every element with FOR EACH (or an index loop to LENGTH) | 1 |
| Accumulates `total ← total + mark` | 1 |
| Divides by `LENGTH(marks)` after the loop | 1 |
| Trace values 8, 14, 24, 28 and result 7 | 1 |

</details>

## Question 10 (constructed response · stretch)

The list `temps` holds `[18, 25, 31, 22, 31, 19]`. Write code that finds the highest temperature and counts how many times it occurs, then displays both. State what is displayed.

<details>
<summary>Answer and explanation</summary>

One correct answer:

```text
highest ← temps[1]
FOR EACH t IN temps
{
  IF(t > highest)
  {
    highest ← t
  }
}
count ← 0
FOR EACH t IN temps
{
  IF(t = highest)
  {
    count ← count + 1
  }
}
DISPLAY(highest)
DISPLAY(count)
```

The highest is 31, and it occurs twice (indices 3 and 5), so `31 2` is displayed. Two passes are needed because the maximum must be known before it can be counted.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Starts `highest` at the first element, not 0 | 1 |
| First loop updates `highest` using `>` | 1 |
| Second loop counts elements equal to `highest` | 1 |
| Displays both values | 1 |
| Result 31 and 2 | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-10-lists-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/) before trying again.
