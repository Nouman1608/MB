---
resourceId: "mb-ap-csa-4.14-practice"
title: "Searching Algorithms: Practice Questions (Computer Science A 4.14)"
description: "Ten original questions on linear search: tracing results and comparison counts, the early-else bug, String equality, searching from the end, 2D searches, plus two coding tasks."
course: "computer-science-a"
unit: 4
topics: ["4.14"]
resourceType: "practice-questions"
prerequisites:
  - "Traversing arrays, ArrayLists and 2D arrays (Topics 4.4, 4.9 and 4.12)"
  - "Comparing Strings with equals (Topic 1.15)"
  - "Returning a value from the middle of a loop (Topic 2.9)"
learningObjectives:
  - "Trace searches and count comparisons"
  - "Find bugs in search code"
  - "Write searches for lists and grids"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.14-study-guide", "mb-ap-csa-4.14-revision-notes", "mb-ap-csa-4.14-checklist"]
next: "mb-ap-csa-4.14-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every method was compiled and run on the data shown; results and comparison counts come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every method was compiled and run on the data shown, and the results quoted come from those runs. Unless stated, `a` is `{7, 3, 9, 3, 5}` and `linearSearch` is the standard method returning the first matching index or -1.

## Question 1 (multiple choice · foundation)

What does `linearSearch(a, 3)` return, and how many times is `a[i] == target` evaluated?

- (A) 3 and 4 times
- (B) 1 and 2 times
- (C) 1 and 5 times
- (D) 2 and 2 times

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The first 3 is at index 1. The comparisons are for `i` = 0 (7, false) and `i` = 1 (3, true), so 2.

- (A) is the index of the **second** 3 (found by searching from the end).
- (C) assumes the search continues through the whole array.
- (D) returns the number of comparisons as the index.
</details>

## Question 2 (multiple choice · core)

How many comparisons does `linearSearch(a, 4)` make, and what does it return?

- (A) 4 comparisons, returns -1
- (B) 5 comparisons, returns 5
- (C) 5 comparisons, returns -1
- (D) 0 comparisons, returns -1

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The target is absent, so all five elements are compared (the worst case), then -1 is returned (run and confirmed: `-1 comps=5`).

- (A) stops one element early.
- (B) returns the length, which is not the "not found" signal.
- (D) The loop runs; the array is not empty.
</details>

## Question 3 (multiple choice · core)

What do `badSearch(a, 9)` and `badSearch(a, 7)` return?

```java
public static int badSearch(int[] a, int target)
{
    for (int i = 0; i < a.length; i++)
    {
        if (a[i] == target)
        {
            return i;
        }
        else
        {
            return -1;
        }
    }
    return -1;
}
```

- (A) 2 and 0
- (B) -1 and 0
- (C) -1 and -1
- (D) 0 and 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The method returns on the first pass whatever happens. For 9, the first element 7 does not match, so it returns -1 immediately. For 7, the first element matches, so it returns 0 (run and confirmed).

- (A) is the correct pair for a correct search.
- (C) would require the first element to be wrong for both targets.
- (D) would return the index of the first element regardless of the target.
</details>

## Question 4 (multiple choice · core)

`names` is an `ArrayList<String>` holding `[Ana, Ben, Cy, Ben]` and `String t = new String("Ben");`. What is printed?

```java
System.out.println((names.get(1) == t) + " " + names.get(1).equals(t));
```

- (A) `true true`
- (B) `false true`
- (C) `true false`
- (D) `false false`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `t` refers to a new String object, so `==` (same object?) is false; `equals` compares the characters and is true (run and confirmed).

- (A) assumes `==` compares contents.
- (C) reverses the two operations.
- (D) The characters match, so `equals` is true.
</details>

## Question 5 (multiple choice · core)

What does this method return for `a`?

```java
public static int lastIndexOf(int[] a, int target)
{
    for (int i = a.length - 1; i >= 0; i--)
    {
        if (a[i] == target)
        {
            return i;
        }
    }
    return -1;
}
```

With `lastIndexOf(a, 3)`:

- (A) 1
- (B) 2
- (C) 3
- (D) -1

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The search starts at index 4 (5), then index 3 (3, match), so it returns 3, the last occurrence.

- (A) is the first occurrence.
- (B) is the index of 9.
- (D) is returned only when the target is absent.
</details>

## Question 6 (multiple choice · core)

`m = { {4, 8, 15}, {16, 23, 42}, {5, 9, 3} }` and `rowOf` applies `linearSearch` to each row in turn, returning the row index of the first row containing the target, or -1. What are `rowOf(m, 3)` and `rowOf(m, 99)`?

- (A) 2 and -1
- (B) 3 and -1
- (C) 2 and 2
- (D) 0 and 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The 3 is in row 2 (the third row). No row contains 99, so the search ends with -1 (run and confirmed: `2` and `-1`).

- (B) mixes the value with the row index.
- (C) returns a row number for an absent target.
- (D) is the answer for a target in the first row.
</details>

## Question 7 (multiple choice · core)

A linear search is made for a target in an array of 1,000 elements. Which statement is **true**?

- (A) The search always examines exactly 500 elements.
- (B) The search needs the array to be sorted.
- (C) In the worst case the search examines all 1,000 elements.
- (D) The search examines at most 10 elements.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** If the target is last or absent, every element is examined.

- (A) is only an average for successful searches, not an exact count.
- (B) Linear search works on unsorted data.
- (D) is closer to the behaviour of binary search (about 10 steps for 1,000 sorted elements), not linear search.
</details>

## Question 8 (multiple choice · stretch)

Which change makes `indexOf(ArrayList<String> list, String target)` incorrect?

- (A) Using `list.get(i).equals(target)` in the test
- (B) Placing `return -1;` immediately after the `if` inside the loop
- (C) Looping from `list.size() - 1` down to 0
- (D) Returning `i` when the test is true

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** That return would execute on the first pass of the loop whenever the first element does not match, so the method would give up too early (see Question 3).

- (A) is the correct way to compare Strings.
- (C) is valid; it finds the last match instead of the first.
- (D) is the standard way to report a match.
</details>

## Question 9 (constructed response · core)

Write `indexOf(ArrayList<String> list, String target)`, which returns the index of the first element equal to `target`, or -1 if there is none.

<details>
<summary>Answer and explanation</summary>

```java
public static int indexOf(ArrayList<String> list, String target)
{
    for (int i = 0; i < list.size(); i++)
    {
        if (list.get(i).equals(target))
        {
            return i;
        }
    }
    return -1;
}
```

On `[Ana, Ben, Cy, Ben]`, `"Ben"` gives 1 and `"Zed"` gives -1 (run and confirmed).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Loops over every valid index (`i < list.size()`) |
| 2 | Compares with `equals`, not `==` |
| 3 | Returns the index (not the element) from inside the loop |
| 4 | Returns -1 only after the loop |

Do not award point 4 if -1 can be returned before every element has been checked.
</details>

## Question 10 (constructed response · stretch)

(a) Write `findInGrid(int[][] m, int target)`, which returns a two-element array `{row, column}` giving the position of the first occurrence of `target` (searching row by row), or `{-1, -1}` if it does not occur.

(b) State the result for `target` 23, 3 and 99 on `m = { {4, 8, 15}, {16, 23, 42}, {5, 9, 3} }`.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static int[] findInGrid(int[][] m, int target)
{
    for (int r = 0; r < m.length; r++)
    {
        for (int c = 0; c < m[r].length; c++)
        {
            if (m[r][c] == target)
            {
                return new int[] { r, c };
            }
        }
    }
    return new int[] { -1, -1 };
}
```

(b) `{1, 1}`, `{2, 2}` and `{-1, -1}` (run and confirmed).

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Nested loops over every row and every column with correct bounds |
| 2 | Compares `m[r][c]` with `target` |
| 3 | Returns the position as soon as it is found |
| 4 | Returns `{-1, -1}` only after both loops end |
| 5 | Part (b): all three results correct |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you slipped on the not-found case, re-read the standard pattern in the [Topic 4.14 study guide](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-checklist/).
