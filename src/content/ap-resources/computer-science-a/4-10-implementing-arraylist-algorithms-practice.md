---
resourceId: "mb-ap-csa-4.10-practice"
title: "Implementing ArrayList Algorithms: Practice Questions (Computer Science A 4.10)"
description: "Ten original questions on ArrayList algorithms: maximum with a bad start value, integer division in averages, consecutive pairs, reversing, rotating, inserting in order, and two coding tasks."
course: "computer-science-a"
unit: 4
topics: ["4.10"]
resourceType: "practice-questions"
prerequisites:
  - "ArrayList methods and traversals, including safe removal (Topics 4.8 and 4.9)"
  - "Standard array algorithms: maximum, sum, count (Topic 4.5)"
  - "Boolean expressions and short-circuit evaluation (Topics 2.2 and 2.5)"
learningObjectives:
  - "Trace algorithms on given lists"
  - "Find the bug in a faulty algorithm"
  - "Write complete algorithms"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.10-study-guide", "mb-ap-csa-4.10-revision-notes", "mb-ap-csa-4.10-checklist"]
next: "mb-ap-csa-4.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every method was compiled and run on the lists shown; printed results come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every method was compiled and run on the lists shown, and the results quoted come from those runs. Assume `import java.util.ArrayList;` is present and that lists hold `Integer` objects unless stated.

## Question 1 (multiple choice · foundation)

What does this method return for the list `[-5, -2, -9]`?

```java
public static int maxBuggy(ArrayList<Integer> list)
{
    int max = 0;
    for (int x : list)
    {
        if (x > max)
        {
            max = x;
        }
    }
    return max;
}
```

- (A) -2
- (B) 0
- (C) -9
- (D) It throws an exception

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** No element is greater than the starting value 0, so `max` stays 0, a value that is not even in the list. Starting from `list.get(0)` would return -2.

- (A) is the correct maximum, but this method does not find it.
- (C) is the minimum.
- (D) Nothing here can throw; the list is non-empty and the loop is valid.
</details>

## Question 2 (multiple choice · core)

For `[4, 9, 2, 9, 7]` the sum is 31. What does this method return?

```java
public static double averageBuggy(ArrayList<Integer> list)
{
    int sum = 0;
    for (int x : list)
    {
        sum += x;
    }
    return sum / list.size();
}
```

- (A) 6.2
- (B) 6.0
- (C) 6
- (D) 31.0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `31 / 5` is integer division, giving the `int` 6, which is widened to the `double` 6.0 when returned (run and confirmed). The fix is `(double) sum / list.size()`, which gives 6.2.

- (A) is the correct mean, not this method's result.
- (C) is not a valid `double` print form; the method returns `6.0`.
- (D) is the sum, not the quotient.
</details>

## Question 3 (multiple choice · core)

What does `countIncreases` return for `[1, 3, 2, 5, 6]`?

```java
public static int countIncreases(ArrayList<Integer> list)
{
    int c = 0;
    for (int i = 0; i < list.size() - 1; i++)
    {
        if (list.get(i) < list.get(i + 1))
        {
            c++;
        }
    }
    return c;
}
```

- (A) 2
- (B) 3
- (C) 4
- (D) 5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The pairs are (1, 3) yes, (3, 2) no, (2, 5) yes and (5, 6) yes, so 3.

- (A) misses one increasing pair.
- (C) counts the number of pairs, not the increasing ones.
- (D) is the list length.
</details>

## Question 4 (multiple choice · core)

What is the list `r` after the call? Starting list `[1, 2, 3, 4]`.

```java
public static void reverseBuggy(ArrayList<Integer> list)
{
    for (int i = 0; i < list.size(); i++)
    {
        int j = list.size() - 1 - i;
        int tmp = list.get(i);
        list.set(i, list.get(j));
        list.set(j, tmp);
    }
}
```

- (A) `[4, 3, 2, 1]`
- (B) `[1, 2, 3, 4]`
- (C) `[4, 2, 3, 1]`
- (D) `[2, 1, 4, 3]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Passes `i` = 0 and 1 reverse the list to `[4, 3, 2, 1]`; passes `i` = 2 and 3 swap the same pairs again and restore `[1, 2, 3, 4]` (run and confirmed).

- (A) is the result if the loop stopped at `size() / 2`.
- (C) is the list after only the first swap.
- (D) swaps neighbours, which nothing in the code does.
</details>

## Question 5 (multiple choice · core)

`r` holds `[1, 2, 3, 4]`. What does it hold after this statement?

```java
r.add(0, r.remove(r.size() - 1));
```

- (A) `[2, 3, 4, 1]`
- (B) `[4, 1, 2, 3]`
- (C) `[4, 1, 2, 3, 4]`
- (D) `[1, 2, 3, 4]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `remove(3)` takes 4 out, leaving `[1, 2, 3]`, and returns 4. `add(0, 4)` puts it at the front: `[4, 1, 2, 3]`.

- (A) is a rotation to the left.
- (C) would happen if the element were copied rather than removed.
- (D) assumes the two actions cancel out.
</details>

## Question 6 (multiple choice · core)

Which method correctly returns `true` exactly when the list contains two equal values?

- (A) outer loop `i` from 0, inner loop `j` from 0, `if (list.get(i).equals(list.get(j))) return true;`
- (B) outer loop `i` from 0, inner loop `j` from `i + 1`, `if (list.get(i).equals(list.get(j))) return true;`, and `return false` after the loops
- (C) one loop, `if (list.get(i).equals(list.get(i + 1))) return true;` with `i < list.size()`
- (D) outer loop `i`, inner loop `j` from `i + 1`, `if (list.get(i) == list.get(j)) return true;`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Starting `j` at `i + 1` compares each element with each later one and never with itself.

- (A) compares each element with itself when `i` equals `j`, so it always returns `true` for a non-empty list.
- (C) checks only neighbours and runs out of range on the last pass.
- (D) uses `==`, which compares `Integer` references. It is unreliable: two separate `Integer` objects holding 1000 compared as `false` when run, although they are equal.
</details>

## Question 7 (multiple choice · core)

`list` holds the sorted list `[2, 5, 8, 11]`. What does it hold after `insertSorted(list, 6)`?

```java
public static void insertSorted(ArrayList<Integer> list, int value)
{
    int i = 0;
    while (i < list.size() && list.get(i) < value)
    {
        i++;
    }
    list.add(i, value);
}
```

- (A) `[2, 5, 8, 11, 6]`
- (B) `[6, 2, 5, 8, 11]`
- (C) `[2, 5, 6, 8, 11]`
- (D) `[2, 6, 8, 11]`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The loop advances past 2 and 5 (both below 6) and stops at index 2, where 8 is not below 6. `add(2, 6)` inserts there.

- (A) appends instead of inserting in order.
- (B) inserts at index 0.
- (D) removes 5, which nothing in the code does.
</details>

## Question 8 (multiple choice · stretch)

Two lists `a` holds `[a, b, c, d]` and `b` holds `[a, x, c, y]` (Strings). What is `c` after this code?

```java
int c = 0;
for (int i = 0; i < a.size() && i < b.size(); i++)
{
    if (a.get(i).equals(b.get(i)))
    {
        c++;
    }
}
```

- (A) 0
- (B) 1
- (C) 2
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Positions 0 and 2 hold equal Strings (`a`/`a` and `c`/`c`); positions 1 and 3 differ.

- (A) and (B) miss matches.
- (D) is the list size.
</details>

## Question 9 (constructed response · core)

Write `hasDuplicate(ArrayList<Integer> list)`, which returns `true` if any value occurs more than once and `false` otherwise (including for an empty list).

<details>
<summary>Answer and explanation</summary>

```java
public static boolean hasDuplicate(ArrayList<Integer> list)
{
    for (int i = 0; i < list.size(); i++)
    {
        for (int j = i + 1; j < list.size(); j++)
        {
            if (list.get(i).equals(list.get(j)))
            {
                return true;
            }
        }
    }
    return false;
}
```

`[3, 8, 3]` gives `true`; `[3, 8, 4]` gives `false`; `[7, 7, 7]` gives `true` (run and confirmed).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Two nested loops over valid indices |
| 2 | Inner loop starts at `i + 1` (no self-comparison, no repeated pairs) |
| 3 | Compares values with `equals` (or unboxes), not `==` on references |
| 4 | Returns `true` on a match and `false` only after all pairs are checked |

Do not award point 4 for a method that returns inside an else branch.
</details>

## Question 10 (constructed response · stretch)

(a) Write `insertSorted(ArrayList<Integer> list, int value)`, which inserts `value` into a list sorted in ascending order so that it stays sorted.

(b) Give the list after inserting 20 into `[2, 5, 8, 11]`, and explain why `i < list.size()` must be tested before `list.get(i) < value`.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static void insertSorted(ArrayList<Integer> list, int value)
{
    int i = 0;
    while (i < list.size() && list.get(i) < value)
    {
        i++;
    }
    list.add(i, value);
}
```

(b) The result is `[2, 5, 8, 11, 20]` (run and confirmed). When `i` reaches `list.size()`, the first part of the condition is false, and `&&` skips the second part (short-circuit evaluation), so `get(i)` is never called with an index that does not exist. In the other order the last test would call `get(4)` and throw `IndexOutOfBoundsException`.

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Finds the insertion index by traversing from the front |
| 2 | Stops at the first element not smaller than `value` |
| 3 | Bounds the search so that it also works when `value` is larger than every element |
| 4 | Inserts with `add(index, value)` after the loop |
| 5 | Part (b): the correct list and the short-circuit explanation |

Alternative: a `for` loop with a `break`, or scanning from the end, is acceptable if it handles the front, middle, end and empty-list cases.
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you missed a bug, re-read the matching pattern in the [Topic 4.10 study guide](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-checklist/).
