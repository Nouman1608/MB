---
resourceId: "mb-ap-csa-4.9-revision-notes"
title: "ArrayList Traversals: Revision Notes (Computer Science A 4.9)"
description: "A short recap of ArrayList traversals: index loops, enhanced for, the removal pitfall, the backward fix, ConcurrentModificationException and index errors."
course: "computer-science-a"
unit: 4
topics: ["4.9"]
resourceType: "revision-notes"
prerequisites:
  - "ArrayList methods size, get, set, add and remove (Topic 4.8)"
  - "for, enhanced for and while loops (Topics 2.7 and 2.8) and array traversal (Topic 4.4)"
  - "Comparing Strings with equals (Topic 1.15)"
learningObjectives:
  - "Recall the three traversal forms"
  - "Recall the safe ways to remove while traversing"
  - "Avoid the common traps"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.9-study-guide", "mb-ap-csa-4.9-practice", "mb-ap-csa-4.9-checklist"]
next: "mb-ap-csa-4.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "for (int i = 0; i < list.size(); i++) is the standard traversal; use get(i) and set(i, x)."
  - "Delete safely by going backwards or by i-- after remove."
  - "Do not add or remove inside an enhanced for loop."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Full explanation and traced examples: [Topic 4.9 study guide](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/).

## Recap

Traversing an `ArrayList` means visiting its elements in order. The standard indexed loop runs `i` from 0 to `size() - 1`. The enhanced `for` loop reads each element without an index. A `while` loop lets you hold the index still. Reading and replacing (`get`, `set`) are safe during a traversal; **adding and removing change the size** and need care.

```java
for (int i = 0; i < list.size(); i++)    // indexed
{
    int x = list.get(i);
}
for (int x : list)                       // enhanced
{
    System.out.println(x);
}
for (int i = list.size() - 1; i >= 0; i--)   // backward: safe for remove
{
    if (list.get(i) < 0) { list.remove(i); }
}
```

## Key relationships

| Situation | Safe approach | Why |
|---|---|---|
| Read every element | enhanced `for` or indexed `for` | no size change |
| Replace elements | indexed `for` with `set(i, x)` | `set` does not shift anything |
| Remove matches | backward `for`, or `while` that skips `i++` after a removal | later elements move left |
| Remove inside enhanced `for` | avoid | may throw `ConcurrentModificationException` |
| Index loop condition | `i < list.size()` | `i <= list.size()` throws `IndexOutOfBoundsException` |

## Assumptions

- The list is not `null` and holds the element type you expect.
- No other code changes the list while the loop runs.
- Elements are compared with `equals` when they are Strings or other objects.

## A mini-example to rehearse

Remove the negatives from `[3, -1, -2, 5, -4]`. A forward loop with `remove(i)` gives `[3, -2, 5]`: after `-1` is removed, `-2` slides into index 1 and the loop's `i++` jumps over it. The backward loop gives `[3, 5]`. A `while` loop that adds one to `i` only in the else-branch also gives `[3, 5]`. On `[1, -2, 3, -4, 5, -6]` the forward bug happens to give the right answer, because no two negatives are adjacent, so test with adjacent matches.

## Mistakes to avoid

1. Writing `<=` in the loop condition.
2. Removing in a forward loop without compensating.
3. Removing or adding inside an enhanced `for` loop.
4. Assigning to the enhanced `for` variable and expecting the list to change.
5. Calling `get(i)` after a removal without rechecking that `i` is still valid.
6. Using `==` to compare Strings in a condition; use `equals`.

## How this topic is usually tested

- Trace a loop that removes elements and give the final list.
- Identify the bug in a deletion loop and say which element is skipped.
- Predict an exception: `IndexOutOfBoundsException` or `ConcurrentModificationException`.
- Write a method that removes all elements matching a condition.

## Quick self-check

1. Forward loop removes every `"b"` from `[a, b, b, c]`. Result? **`[a, b, c]`**, since the second `b` is skipped.
2. Same task with a backward loop? **`[a, c]`**.
3. What does `for (Integer x : d) { x = x * 2; }` do to `d`? **Nothing.**
4. Which loop condition throws on the last pass: `i < size()` or `i <= size()`? **`i <= size()`**.
5. Which exception can removing inside an enhanced for loop cause? **`ConcurrentModificationException`**.
