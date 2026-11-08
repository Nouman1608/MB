---
resourceId: "mb-ap-csa-4.17-practice"
title: "Recursive Searching and Sorting: Practice Questions (Computer Science A 4.17)"
description: "Ten original questions on recursive searching and sorting: binary search traces and step counts, unsorted data, recursive traversals, merge sort splits and merges, plus two trace tasks."
course: "computer-science-a"
unit: 4
topics: ["4.17"]
resourceType: "practice-questions"
prerequisites:
  - "Recursion and tracing recursive methods (Topic 4.16)"
  - "Linear search and sorting by selection and insertion (Topics 4.14 and 4.15)"
  - "Arrays and ArrayLists, and integer division (Topics 4.3 and 1.3)"
learningObjectives:
  - "Trace binary searches and count steps"
  - "Trace splits and merges in merge sort"
  - "Trace recursive traversals"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.17-study-guide", "mb-ap-csa-4.17-revision-notes", "mb-ap-csa-4.17-checklist"]
next: "mb-ap-csa-4.17-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every method was compiled and run; the low, high and mid values, step counts and split and merge traces come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Writing recursive code is outside the scope of the course, so every question asks you to trace, count or explain. Every method was compiled and run, and the values quoted come from those runs. Unless stated, `a` is the sorted array `{2, 5, 8, 11, 14, 17, 20, 23}` and `mid` is `(low + high) / 2`.

## Question 1 (multiple choice · foundation)

What must be true of an array before binary search can be used on it?

- (A) It must contain no duplicate values
- (B) It must be sorted
- (C) It must have an even number of elements
- (D) It must contain only positive integers

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Binary search discards half of the range after one comparison, which is only valid if the elements are in order.

- (A) Duplicates do not break the method (it still finds a matching element).
- (C) Any length works.
- (D) The sign of the values is irrelevant.
</details>

## Question 2 (multiple choice · core)

Binary search for 17 in `a` begins with `low` = 0 and `high` = 7. Which element is examined first, and what happens next?

- (A) Index 3 (value 11); `low` becomes 4
- (B) Index 4 (value 14); `low` becomes 5
- (C) Index 3 (value 11); `high` becomes 2
- (D) Index 7 (value 23); `high` becomes 6

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `mid` is (0 + 7) / 2 = 3, holding 11. Since 11 < 17, the target is to the right, so `low = mid + 1 = 4`.

- (B) would be the middle if the division rounded up.
- (C) moves left, which is the wrong direction for 11 < 17.
- (D) starts at the end of the array, which is not binary search.
</details>

## Question 3 (multiple choice · core)

How many elements of `a` are compared with the target when searching for 6, and what is returned?

- (A) 3 elements; returns -1
- (B) 8 elements; returns -1
- (C) 3 elements; returns 2
- (D) 4 elements; returns -1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The middle elements examined are 11 (index 3), 5 (index 1) and 8 (index 2). Then `low` is 2 and `high` is 1, so the range is empty and the method returns -1 (run and confirmed: 3 steps).

- (B) is the number a linear search would make.
- (C) 6 is not in the array.
- (D) The 4th step finds `low > high`, which needs no comparison.
</details>

## Question 4 (multiple choice · core)

Binary search for 23 in `a` examines which indices, in order?

- (A) 3, 5, 6, 7
- (B) 3, 5, 7
- (C) 4, 6, 7
- (D) 0, 1, 2, 3, 4, 5, 6, 7

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `mid` is 3 (11, too small), then with `low` = 4 and `high` = 7 it is 5 (17, too small), then with `low` = 6 it is 6 (20, too small), then with `low` = 7 it is 7 (23, found). Four comparisons (run and confirmed).

- (B) skips index 6: after `low = 6` and `high = 7`, `mid` is 6.
- (C) does not start from the correct middle, 3.
- (D) is the order of a linear search.
</details>

## Question 5 (multiple choice · core)

A recursive binary search is run for the value 1 on the **unsorted** array `{5, 2, 9, 1, 7}`. What is returned?

- (A) 3
- (B) -1
- (C) 0
- (D) An exception is thrown

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `mid` is 2 (value 9 > 1) so the search moves left; `mid` is 0 (value 5 > 1) so it moves left again; the range is empty, giving -1, although 1 is at index 3 (run and confirmed).

- (A) is the correct index, which only a method that does not assume order would find.
- (C) is the index of 5.
- (D) No index goes out of range.
</details>

## Question 6 (multiple choice · core)

Merge sort is applied to `{8, 3, 5, 1, 9, 2}` with `mid = (lo + hi) / 2`. What are the two subarrays produced by the **first** split?

- (A) `[8, 3]` and `[5, 1, 9, 2]`
- (B) `[8, 3, 5]` and `[1, 9, 2]`
- (C) `[3, 8, 5]` and `[1, 2, 9]`
- (D) `[1, 2, 3]` and `[5, 8, 9]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With `lo` = 0 and `hi` = 5, `mid` is 2, so the left part is indices 0 to 2 (`8, 3, 5`) and the right part is indices 3 to 5 (`1, 9, 2`). Splitting does not reorder anything.

- (A) is an uneven split that does not follow the midpoint.
- (C) has already sorted parts of the halves; sorting happens in the merges.
- (D) is the answer to a different question (a sorted array cut in half).
</details>

## Question 7 (multiple choice · core)

In the trace of merge sort on `{8, 3, 5, 1, 9, 2}`, which is the **first merge** performed?

- (A) `[8, 3, 5]` with `[1, 9, 2]`
- (B) `[8]` with `[3]`, giving `[3, 8]`
- (C) `[1]` with `[9]`, giving `[1, 9]`
- (D) `[3, 8]` with `[5]`, giving `[3, 5, 8]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The left half is split first and then split again until `[8]` and `[3]` remain; the first merge combines them (run and confirmed). The sorted left half is completed before the right half is touched.

- (A) is the final merge.
- (C) is the first merge of the right half, which comes later.
- (D) is the second merge.
</details>

## Question 8 (multiple choice · stretch)

What does `sumFrom(new int[] {3, 4, 5}, 0)` return, and what does the parameter `i` do?

```java
public static int sumFrom(int[] a, int i)
{
    if (i == a.length)
    {
        return 0;
    }
    return a[i] + sumFrom(a, i + 1);
}
```

- (A) 12; `i` records how far along the array the traversal is
- (B) 3; `i` is the sum so far
- (C) 12; `i` is the number of calls remaining
- (D) 0; the base case is reached at once

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The calls unwind as `3 + 4 + 5 + 0 = 12`. The parameter `i` is the current position, which increases by one per call until it equals the length, the base case.

- (B) The sum is not stored in a parameter; it is built up from the returns.
- (C) `i` counts up, not down.
- (D) The base case is met only when `i` is 3.
</details>

## Question 9 (constructed response · core)

(a) Trace a binary search for 20 in `a`, giving `low`, `high`, `mid` and `a[mid]` at each step, and state the value returned.

(b) Explain why a linear search for 20 would examine more elements, and say how many.

<details>
<summary>Answer and explanation</summary>

(a)

| Step | `low` | `high` | `mid` | `a[mid]` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 7 | 3 | 11 | 11 < 20, so `low = 4` |
| 2 | 4 | 7 | 5 | 17 | 17 < 20, so `low = 6` |
| 3 | 6 | 7 | 6 | 20 | found |

The method returns 6 after 3 comparisons (run and confirmed).

(b) A linear search from the front compares 2, 5, 8, 11, 14, 17 and 20, so it examines 7 elements to find 20 at index 6. Binary search halves the remaining range each time, so it needs far fewer comparisons, and the advantage grows as the array gets larger.

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Correct first step: `low` 0, `high` 7, `mid` 3 (value 11) |
| 2 | Correct update to `low` = 4 and second step `mid` 5 (value 17) |
| 3 | Correct update to `low` = 6 and third step `mid` 6 (value 20) |
| 4 | Returns 6 |
| 5 | Part (b): 7 elements for linear search and the idea that binary search discards half each step |
</details>

## Question 10 (constructed response · stretch)

(a) Show every split and merge made by merge sort on `{4, 7, 1, 9}` (use `mid = (lo + hi) / 2`).

(b) Explain why merge sort is described as recursive and give its base case.

<details>
<summary>Answer and explanation</summary>

(a) In order:

1. split `[4, 7, 1, 9]` into `[4, 7]` and `[1, 9]`
2. split `[4, 7]` into `[4]` and `[7]`
3. merge `[4]` and `[7]` into `[4, 7]`
4. split `[1, 9]` into `[1]` and `[9]`
5. merge `[1]` and `[9]` into `[1, 9]`
6. merge `[4, 7]` and `[1, 9]` into `[1, 4, 7, 9]`

(Run and confirmed.) The last merge compares fronts: 4 and 1 (copy 1), 4 and 9 (copy 4), 7 and 9 (copy 7), then copy the remaining 9.

(b) Merge sort calls itself on each half of the array, so it is recursive; the sorting of each half is the same problem on a smaller array. The base case is a piece of one element, which is already sorted and needs no further splitting or merging.

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | First split into `[4, 7]` and `[1, 9]` |
| 2 | Splits down to single elements for both halves |
| 3 | Merges `[4]` and `[7]` into `[4, 7]` |
| 4 | Merges `[1]` and `[9]` into `[1, 9]` |
| 5 | Final merge into `[1, 4, 7, 9]` |
| 6 | Part (b): recursive because it calls itself on halves; base case one element |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you lost track of `low`, `high` and `mid`, redo the tables in the [Topic 4.17 study guide](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-checklist/). When you are ready, try the [Unit 4 diagnostic](/advanced-course-resources/computer-science-a/unit-4-diagnostic/).
