---
resourceId: "mb-ap-csa-4.15-practice"
title: "Sorting Algorithms: Practice Questions (Computer Science A 4.15)"
description: "Ten original questions on selection and insertion sort: array state after a given number of passes, counts of comparisons and shifts, the broken swap, plus two coding tasks."
course: "computer-science-a"
unit: 4
topics: ["4.15"]
resourceType: "practice-questions"
prerequisites:
  - "Traversing arrays and ArrayLists (Topics 4.4 and 4.9)"
  - "Swapping two elements with a temporary variable (Topic 4.5)"
  - "Nested loops and informal counting of loop iterations (Topics 2.11 and 2.12)"
learningObjectives:
  - "Trace sorting passes"
  - "Count work done by each sort"
  - "Write both sorts"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.15-study-guide", "mb-ap-csa-4.15-revision-notes", "mb-ap-csa-4.15-checklist"]
next: "mb-ap-csa-4.15-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every sort was compiled and run; the states after each pass and the counts come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every sort was compiled and run, and the states after each pass and the counts quoted come from those runs. "Pass" means one iteration of the outer loop of the standard code in the study guide.

## Question 1 (multiple choice · foundation)

Selection sort is run on `{5, 2, 9, 1, 7}`. What does the array hold after the first pass?

- (A) `1, 2, 9, 5, 7`
- (B) `2, 5, 9, 1, 7`
- (C) `1, 5, 2, 9, 7`
- (D) `1, 2, 5, 7, 9`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The smallest element is 1 at index 3. It is swapped with the element at index 0 (the 5), giving `1, 2, 9, 5, 7`.

- (B) is the array after the first pass of **insertion** sort.
- (C) results from shifting instead of swapping.
- (D) is the final sorted array, reached after four passes.
</details>

## Question 2 (multiple choice · core)

Insertion sort is run on `{5, 2, 9, 1, 7}`. What does the array hold after the third pass (the key is the element at index 3)?

- (A) `2, 5, 9, 1, 7`
- (B) `1, 2, 5, 9, 7`
- (C) `1, 5, 2, 9, 7`
- (D) `1, 2, 5, 7, 9`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The key 1 is inserted into the sorted portion `2, 5, 9`: the 9, 5 and 2 each shift one place right and the 1 is placed at index 0.

- (A) is the state after pass 1 (and also after pass 2, since 9 needed no shift).
- (C) swaps the 1 with its neighbour only.
- (D) is the state after the fourth pass.
</details>

## Question 3 (multiple choice · core)

After two passes of **selection** sort on `{8, 3, 5, 1, 9, 2}`, what does the array hold?

- (A) `3, 5, 8, 1, 9, 2`
- (B) `1, 2, 5, 8, 9, 3`
- (C) `1, 3, 5, 8, 9, 2`
- (D) `1, 2, 3, 5, 8, 9`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Pass 1 swaps the 1 into index 0 giving `1, 3, 5, 8, 9, 2`. Pass 2 finds the smallest of the rest (the 2 at index 5) and swaps it with the 3 at index 1 giving `1, 2, 5, 8, 9, 3`.

- (A) is the state after two passes of insertion sort.
- (C) is the state after one pass.
- (D) is fully sorted and needs more passes.
</details>

## Question 4 (multiple choice · core)

After two passes of **insertion** sort on `{8, 3, 5, 1, 9, 2}`, what does the array hold?

- (A) `1, 2, 5, 8, 9, 3`
- (B) `3, 8, 5, 1, 9, 2`
- (C) `3, 5, 8, 1, 9, 2`
- (D) `1, 3, 5, 8, 9, 2`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Pass 1 inserts 3 before 8 giving `3, 8, 5, 1, 9, 2`. Pass 2 inserts 5 between 3 and 8 giving `3, 5, 8, 1, 9, 2`. The first three are in order, but they are not final.

- (A) is two passes of selection sort.
- (B) is the state after one pass.
- (D) is one pass of selection sort.
</details>

## Question 5 (multiple choice · core)

How many comparisons does selection sort make on an array of 5 elements that is already sorted, and how many does insertion sort make? (Count each execution of the comparison between array elements, including the one that ends a `while` loop.)

- (A) selection 4, insertion 4
- (B) selection 10, insertion 4
- (C) selection 10, insertion 10
- (D) selection 4, insertion 10

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Selection sort always does 4 + 3 + 2 + 1 = 10 comparisons. Insertion sort on sorted data compares each key once with its left neighbour and stops: 4 comparisons (run and confirmed: `comps=10` and `comps=4`).

- (A) assumes selection sort can stop early; it cannot.
- (C) is insertion sort's worst case, not its sorted case.
- (D) reverses the two.
</details>

## Question 6 (multiple choice · core)

How many elements does insertion sort shift on the reversed array `{5, 4, 3, 2, 1}`?

- (A) 4
- (B) 5
- (C) 10
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Each key moves past every element of the sorted portion: 1 + 2 + 3 + 4 = 10 shifts (run and confirmed).

- (A) counts one shift per pass.
- (B) is the array length.
- (D) is the answer for already sorted data.
</details>

## Question 7 (multiple choice · core)

A programmer writes this swap inside selection sort. What does `{5, 2, 9, 1, 7}` hold after the whole sort?

```java
a[i] = a[min];
a[min] = a[i];
```

- (A) `1, 2, 5, 7, 9`
- (B) `1, 1, 1, 1, 7`
- (C) `5, 2, 9, 1, 7`
- (D) The code throws an exception

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The first statement overwrites `a[i]`, so the second copies the same value back: no swap happens and the original `a[i]` is lost. The run gave `[1, 1, 1, 1, 7]`.

- (A) would need a temporary variable.
- (C) The array does change; values are overwritten.
- (D) No index is out of range.
</details>

## Question 8 (multiple choice · stretch)

Which statement about the standard sorts is true?

- (A) After k passes of insertion sort, the first k elements are in their final positions.
- (B) After k passes of selection sort, the first k elements are in their final positions.
- (C) Selection sort does fewer comparisons on sorted data than on reversed data.
- (D) Insertion sort never shifts elements.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each selection pass swaps the smallest remaining element to the next place at the front, and it is never moved again.

- (A) Insertion sort's front part is only sorted among itself; later elements may be inserted before them.
- (C) Selection sort makes n(n - 1)/2 comparisons for every input.
- (D) Insertion sort works by shifting elements.
</details>

## Question 9 (constructed response · core)

Write `selectionSort(int[] a)`, which sorts `a` into ascending order using selection sort.

<details>
<summary>Answer and explanation</summary>

```java
public static void selectionSort(int[] a)
{
    for (int i = 0; i < a.length - 1; i++)
    {
        int min = i;
        for (int j = i + 1; j < a.length; j++)
        {
            if (a[j] < a[min])
            {
                min = j;
            }
        }
        int tmp = a[i];
        a[i] = a[min];
        a[min] = tmp;
    }
}
```

On `{5, 2, 9, 1, 7}` the sort ends with `1, 2, 5, 7, 9` (run and confirmed).

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Outer loop over the positions to fill (0 up to the second last) |
| 2 | Inner loop searches from `i + 1` to the end for the smallest element |
| 3 | Tracks the index of the smallest element (not just its value) |
| 4 | Swaps `a[i]` with `a[min]` using a temporary variable |
| 5 | Sorts in ascending order and the method changes the array in place |

An implementation that finds the largest and fills from the back is also acceptable.
</details>

## Question 10 (constructed response · stretch)

(a) Write `insertionSort(int[] a)`, which sorts `a` into ascending order using insertion sort.

(b) Trace your method on `{5, 2, 9, 1, 7}` and give the array after each pass, and state how many shifts occur in total.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static void insertionSort(int[] a)
{
    for (int i = 1; i < a.length; i++)
    {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key)
        {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
}
```

(b) After pass 1: `2, 5, 9, 1, 7`; pass 2: `2, 5, 9, 1, 7`; pass 3: `1, 2, 5, 9, 7`; pass 4: `1, 2, 5, 7, 9`. Shifts: 1 + 0 + 3 + 1 = 5 (run and confirmed).

**Suggested Marlbridge rubric (6 points)**

| Point | Award for |
|---|---|
| 1 | Outer loop starts at index 1 and covers the rest of the array |
| 2 | Saves the key before it can be overwritten |
| 3 | Inner loop shifts larger sorted elements one place right |
| 4 | Inner loop is bounded so it cannot read before index 0 (`j >= 0` tested first) |
| 5 | Places the key at `a[j + 1]` |
| 6 | Part (b): all four arrays and the total of 5 shifts |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you confused the passes of the two sorts, re-read the pass tables in the [Topic 4.15 study guide](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-checklist/).
