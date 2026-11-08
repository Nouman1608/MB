---
resourceId: "mb-ap-csa-4.14-revision-notes"
title: "Searching Algorithms: Revision Notes (Computer Science A 4.14)"
description: "A short recap of linear search: the pattern, from-the-end variants, searching a 2D array row by row, comparison counts and the usual mistakes."
course: "computer-science-a"
unit: 4
topics: ["4.14"]
resourceType: "revision-notes"
prerequisites:
  - "Traversing arrays, ArrayLists and 2D arrays (Topics 4.4, 4.9 and 4.12)"
  - "Comparing Strings with equals (Topic 1.15)"
  - "Returning a value from the middle of a loop (Topic 2.9)"
learningObjectives:
  - "Recall the search pattern"
  - "Recall comparison counts"
  - "Avoid the common bugs"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.14-study-guide", "mb-ap-csa-4.14-practice", "mb-ap-csa-4.14-checklist"]
next: "mb-ap-csa-4.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Return the index inside the loop; return -1 after the loop."
  - "Comparisons: best case 1, worst case n, unsuccessful search n."
  - "2D: search every row, or nest the loops."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Full explanation, figures and traced examples: [Topic 4.14 study guide](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-study-guide/).

## Recap

**Linear search** checks each element in order until the target is found or all elements have been checked. It may start from either end. It works on unsorted data. The standard method returns the **index** of the first match from inside the loop and returns **-1** after the loop.

```java
for (int i = 0; i < a.length; i++)
{
    if (a[i] == target) { return i; }
}
return -1;
```

For objects such as Strings use `list.get(i).equals(target)`. For a 2D array search each row, or nest the loops and return inside the inner loop.

## Key relationships

| Idea | Rule |
|---|---|
| Result | index of the first match, or -1 |
| Best case | 1 comparison (target first) |
| Worst case | n comparisons (target last or absent) |
| Successful search | index + 1 comparisons when searching from the front |
| Unsuccessful search | exactly n comparisons |
| Data order | any order; no sort needed |
| From the end | `i` from `length - 1` down to 0; finds the last match |
| Strings and objects | `equals`, not `==` |
| 2D array | search each row; return a row (or row and column) |
| Count all matches | no early return; add to a counter |

## Assumptions

- The collection is not `null`; an empty collection returns -1.
- The test (equality or a property) can be applied to every element.
- For a 2D array the table is rectangular.

## A mini-example to rehearse

For `a = {7, 3, 9, 3, 5}`: target 9 gives index 2 after 3 comparisons; target 3 gives index 1 after 2 comparisons (the second 3 is never reached); target 4 gives -1 after 5 comparisons. Searching from the end for 3 gives index 3. A buggy loop that returns -1 in an else branch returns -1 for target 9, even though 9 is present.

## Mistakes to avoid

1. Returning -1 inside the loop.
2. Returning the element instead of its index.
3. Comparing Strings with `==`.
4. Writing `i <= a.length`.
5. Expecting linear search to need sorted data.
6. Counting the wrong number of comparisons for an unsuccessful search (it is n, not n - 1).

## How this topic is usually tested

- Trace a search and give the returned index or -1.
- State how many comparisons a given search makes.
- Identify the bug in a search method.
- Write a search for an array, an `ArrayList` or a row of a 2D array.

## Quick self-check

1. Search `{7, 3, 9, 3, 5}` for 3: result and comparisons? **Index 1, 2 comparisons.**
2. Search the same array for 4: result and comparisons? **-1, 5 comparisons.**
3. Where must `return -1` go? **After the loop.**
4. Which method compares Strings by their characters? **`equals`**
5. Does linear search need sorted data? **No.**
