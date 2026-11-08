---
resourceId: "mb-ap-csa-4.9-practice"
title: "ArrayList Traversals: Practice Questions (Computer Science A 4.9)"
description: "Ten original questions on ArrayList traversals: tracing loops, element skipping after remove, backward loops, exceptions and enhanced for limits, plus two coding tasks."
course: "computer-science-a"
unit: 4
topics: ["4.9"]
resourceType: "practice-questions"
prerequisites:
  - "ArrayList methods size, get, set, add and remove (Topic 4.8)"
  - "for, enhanced for and while loops (Topics 2.7 and 2.8) and array traversal (Topic 4.4)"
  - "Comparing Strings with equals (Topic 1.15)"
learningObjectives:
  - "Trace traversals including removals"
  - "Predict exceptions"
  - "Write methods that traverse and delete"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.9-study-guide", "mb-ap-csa-4.9-revision-notes", "mb-ap-csa-4.9-checklist"]
next: "mb-ap-csa-4.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every program fragment was compiled and run; printed lists and exception names come from those runs."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every code fragment was compiled and run, and the printed lists and exception names come from those runs. Assume `import java.util.ArrayList;` is present.

## Question 1 (multiple choice · foundation)

`s` holds `[a, b, b, c]`. What does `s` hold after this loop?

```java
for (int i = 0; i < s.size(); i++)
{
    if (s.get(i).equals("b"))
    {
        s.remove(i);
    }
}
```

- (A) `[a, c]`
- (B) `[a, b, c]`
- (C) `[a, b, b, c]`
- (D) `[a, b]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At `i` = 1 the first `b` is removed, giving `[a, b, c]`. The second `b` has slid into index 1, but the loop moves to `i` = 2, which holds `c`. The second `b` is never tested.

- (A) is the result of a correct deletion loop, such as a backward one.
- (C) assumes nothing is removed.
- (D) removes `c`, which does not match the condition.
</details>

## Question 2 (multiple choice · core)

`d` is `[2, 4, 6]`. What happens when this loop runs?

```java
for (int i = 0; i <= d.size(); i++)
{
    System.out.print(d.get(i) + " ");
}
```

- (A) It prints `2 4 6` and ends normally
- (B) It prints `2 4 6` and then throws an `IndexOutOfBoundsException`
- (C) It prints `4 6` only
- (D) It does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The condition allows `i` = 3, but the valid indices are 0 to 2. The three valid passes print `2 4 6`, then `get(3)` throws (run and confirmed).

- (A) ignores the extra pass.
- (C) misunderstands where the loop starts.
- (D) The code is syntactically fine; the error occurs at run time.
</details>

## Question 3 (multiple choice · core)

What happens when this code runs on the list `t` holding `[a, b, c]`?

```java
for (String x : t)
{
    if (x.equals("a"))
    {
        t.remove(x);
    }
}
```

- (A) `t` becomes `[b, c]` and the loop finishes normally
- (B) A `ConcurrentModificationException` is thrown
- (C) An `IndexOutOfBoundsException` is thrown
- (D) The code does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The list changed size during an enhanced for traversal. The element is removed first (so `t` ends as `[b, c]`) and the exception is thrown when the loop asks for its next element.

- (A) describes the list correctly but the loop does not finish normally.
- (C) No index is used, so no index error arises.
- (D) The code compiles.
</details>

## Question 4 (multiple choice · core)

`a` holds `[3, -1, -2, 5, -4]`. What does it hold after this loop?

```java
for (int i = a.size() - 1; i >= 0; i--)
{
    if (a.get(i) < 0)
    {
        a.remove(i);
    }
}
```

- (A) `[3, -2, 5]`
- (B) `[3, 5]`
- (C) `[3, -1, -2, 5]`
- (D) `[5]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Going backwards removes -4, -2 and -1 in turn; each removal affects only elements already visited. Result `[3, 5]`.

- (A) is the result of the forward loop, which skips -2.
- (C) stops after removing the last element.
- (D) removes 3, which is not negative.
</details>

## Question 5 (multiple choice · core)

`d` holds `[1, 2, 3]` (type `ArrayList<Integer>`). What does it hold after the code?

```java
for (Integer x : d)
{
    x = x * 2;
}
```

- (A) `[2, 4, 6]`
- (B) `[1, 2, 3]`
- (C) `[2, 2, 3]`
- (D) The code throws an exception

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The loop variable is a copy. Assigning to it changes only the copy, so the list is unchanged (run and confirmed). To double the elements, use `d.set(i, d.get(i) * 2)` in an indexed loop.

- (A) would need `set`.
- (C) would double only the first element, which nothing in the code does.
- (D) The size does not change, so there is no exception.
</details>

## Question 6 (multiple choice · core)

`v` holds `[2, 4, 6]`. What is printed?

```java
String r = "";
for (int i = v.size() - 1; i >= 0; i--)
{
    r += v.get(i) + ",";
}
System.out.println(r);
```

- (A) `2,4,6,`
- (B) `6,4,2,`
- (C) `6,4,2`
- (D) `12,`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The loop visits indices 2, 1, 0, so it appends 6, 4 and 2, each followed by a comma. The trailing comma is kept (run and confirmed).

- (A) is forward order.
- (C) forgets the comma after the last item appended.
- (D) is the sum, not a String built from elements.
</details>

## Question 7 (multiple choice · core)

`z` holds `[5, 5, 6, 5]`. What does it hold after this loop?

```java
int i = 0;
while (i < z.size())
{
    if (z.get(i) == 5)
    {
        z.remove(i);
        i--;
    }
    i++;
}
```

- (A) `[6]`
- (B) `[5, 6]`
- (C) `[5, 6, 5]`
- (D) `[]`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** After each removal `i--` cancels the later `i++`, so the index stays put and the element that slid into place is tested. All three 5s are removed, leaving `[6]` (run and confirmed). Note that `z.get(i) == 5` compares an unboxed `Integer` with an `int`, which is a value comparison.

- (B) and (C) would result from skipping elements, as in a plain forward loop.
- (D) removes the 6, which is not equal to 5.
</details>

## Question 8 (multiple choice · stretch)

`neg` holds `[-3, -4, 7]`. The buggy forward deletion loop (remove when negative, no compensation) is run on it. What does `neg` hold?

- (A) `[7]`
- (B) `[-4, 7]`
- (C) `[-3, 7]`
- (D) `[-3, -4, 7]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At `i` = 0, -3 is removed leaving `[-4, 7]`. The loop moves to `i` = 1, which holds 7, so -4 is skipped. Result `[-4, 7]` (run and confirmed).

- (A) is what a correct loop would give.
- (C) removes -4 instead of -3.
- (D) assumes nothing is removed.
</details>

## Question 9 (constructed response · core)

Write `removeNegatives(ArrayList<Integer> list)`, which removes every negative number from `list`. It must work when negative numbers are next to each other.

<details>
<summary>Answer and explanation</summary>

```java
public static void removeNegatives(ArrayList<Integer> list)
{
    for (int i = list.size() - 1; i >= 0; i--)
    {
        if (list.get(i) < 0)
        {
            list.remove(i);
        }
    }
}
```

On `[3, -1, -2, 5, -4]` it leaves `[3, 5]` (run and confirmed). A `while` loop that increments `i` only when nothing was removed is equally correct.

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Traverses every index validly (no `<=` error and no out-of-range access) |
| 2 | Tests each element for being negative using `get` |
| 3 | Removes with `remove(index)` |
| 4 | Handles adjacent negatives correctly (backward loop, or index held after removal) |

Do not award point 4 for a plain forward `for` loop with `remove(i)`.
</details>

## Question 10 (constructed response · stretch)

(a) Write `removeAll(ArrayList<String> list, String target)`, which removes every element equal to `target`.

(b) Give the result of `removeAll` on `[a, b, b, c]` with target `"b"`, and explain what goes wrong if the forward loop `for (int i = 0; i < list.size(); i++)` is used with `remove(i)`.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static void removeAll(ArrayList<String> list, String target)
{
    for (int i = list.size() - 1; i >= 0; i--)
    {
        if (list.get(i).equals(target))
        {
            list.remove(i);
        }
    }
}
```

(b) The result is `[a, c]` (run and confirmed). With the forward loop, the first `b` at index 1 is removed, the second `b` slides into index 1, and the loop moves to index 2, so the second `b` is skipped; the result would be `[a, b, c]`.

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Compares Strings with `equals` (not `==`) |
| 2 | Traverses all indices without going out of range |
| 3 | Removes using `remove(index)` |
| 4 | Handles consecutive matches (backward loop or held index) |
| 5 | Part (b): result `[a, c]` and the explanation that the second `b` is skipped by the forward loop |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you tripped on a skipped element, re-read the removal section of the [Topic 4.9 study guide](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-checklist/).
