---
resourceId: "mb-ap-csa-4.14-study-guide"
title: "Searching Algorithms: Study Guide (Computer Science A 4.14)"
description: "How linear search works in Java on arrays, ArrayLists and 2D arrays: the index-or-minus-one pattern, early return, searching from either end, counting comparisons, and the String == trap."
course: "computer-science-a"
unit: 4
topics: ["4.14"]
resourceType: "study-guide"
prerequisites:
  - "Traversing arrays, ArrayLists and 2D arrays (Topics 4.4, 4.9 and 4.12)"
  - "Comparing Strings with equals (Topic 1.15)"
  - "Returning a value from the middle of a loop (Topic 2.9)"
learningObjectives:
  - "Write a linear search that returns the index of the first match or -1, for arrays and ArrayLists"
  - "State how many elements a linear search examines in the best case, the worst case and for a given target"
  - "Adapt the search to start from the end, to search objects with equals, and to search each row of a 2D array"
  - "Recognise the bugs: returning -1 inside the loop, comparing Strings with ==, and mixing up index and value"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.14-revision-notes", "mb-ap-csa-4.14-practice", "mb-ap-csa-4.14-checklist"]
next: "mb-ap-csa-4.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Linear search checks each element in order until it finds the target or runs out of elements; it can start from either end."
  - "The standard form returns the index of the first match inside the loop and returns -1 only after the loop has checked every element."
  - "The worst case checks every element (target last or absent); the data need not be sorted."
  - "For Strings and other objects compare with equals, not ==; for a 2D array apply the search to each row in turn."
faqs:
  - question: "Does linear search need sorted data?"
    answer: "No. Linear search works on any order, because it examines every element until it finds the target. Binary search, in Topic 4.17, is the one that needs sorted data."
  - question: "Why return -1 when the target is not found?"
    answer: "-1 can never be a valid index, so the caller can tell found from not found. The -1 must be returned after the loop, once every element has been checked."
  - question: "How many comparisons does a linear search make?"
    answer: "Between 1 and n for a successful search of n elements, depending on where the target is. An unsuccessful search makes exactly n comparisons. On average a successful search examines about half of the elements."
  - question: "How do I search a 2D array?"
    answer: "Access each row in turn and apply a linear search to that row. Equivalent code uses nested loops over rows and columns and returns as soon as it finds the target."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Looking for something in a collection

A program often has to answer questions of the form "is this value in the collection, and where?": is the username taken, which seat holds this name, did any score reach 90. **Searching** is the task of finding a target in a collection. The simplest approach is what a person does with an unsorted pile of papers: pick them up one at a time and look. That approach is **linear search** (also called sequential search).

A **linear search** checks each element **in order** until the desired value is found or all elements in the array or `ArrayList` have been checked. It can begin from either end. Because it only ever asks "is this the one?", it works on **any** collection, sorted or not.

## The standard pattern

```java
public static int linearSearch(int[] a, int target)
{
    for (int i = 0; i < a.length; i++)
    {
        if (a[i] == target)
        {
            return i;          // found: return the index at once
        }
    }
    return -1;                 // checked every element: not found
}
```

Three design decisions are packed in.

1. **Return the index.** The caller usually wants to know where the target is. (If you only need to know whether it exists, return a `boolean`.)
2. **Return inside the loop** as soon as the target is found. There is no reason to look further.
3. **Return -1 after the loop.** -1 is not a valid index, so it safely means "not found". It must come **after** the loop, because only then do you know every element failed the test.

The `ArrayList` version uses `size()` and `get`, and compares objects with `equals`:

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

Figure 1 shows a search on an array.

<figure>
<svg viewBox="0 0 380 120" role="img" aria-labelledby="ls414-t ls414-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ls414-t">Linear search for 9 in the array 7, 3, 9, 3, 5</title>
<desc id="ls414-d">Five boxes holding 7, 3, 9, 3, 5 at indices 0 to 4. The boxes at indices 0 and 1 are labelled checked 1 and checked 2. The box at index 2, holding 9, is labelled found, step 3. Boxes at indices 3 and 4 have no label because they are never examined. The search stops after three comparisons and returns 2.</desc>
<rect width="380" height="120" fill="#ffffff"/>
<text x="30" y="18" font-size="13" fill="#1d2b44" font-weight="bold">Target 9: elements examined in order</text>
<rect x="30" y="34" width="64" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="62.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">7</text>
<text x="62.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="94" y="34" width="64" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="126.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="126.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="158" y="34" width="64" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="190.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">9</text>
<text x="190.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="222" y="34" width="64" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="254.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="254.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="286" y="34" width="64" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="318.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="318.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="62.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">1st</text>
<text x="126.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">2nd</text>
<text x="190.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">found</text>
</svg>
<figcaption>Figure 1. Linear search for 9 examines the elements in order. It compares 7, then 3, then 9, finds the target at index 2 after three comparisons, and stops. The last two elements are never looked at.</figcaption>
</figure>

The array method was run on `a = {7, 3, 9, 3, 5}` and comparisons were counted (the number of times `a[i] == target` was evaluated).

| Target | Result | Comparisons | Why |
|---|---|---|---|
| 7 | 0 | 1 | first element: best case |
| 3 | 1 | 2 | first match is at index 1; the second 3 is never reached |
| 9 | 2 | 3 | matches at index 2 |
| 4 | -1 | 5 | not present: all 5 elements examined, the worst case |

So the work done depends on where the target is. In the **best case** the first element matches (1 comparison). In the **worst case** the target is last or absent and all n elements are checked. On average, for a target that is present, about half the elements are examined. The count grows in proportion to n, which is the reason binary search (Topic 4.17) is better for large sorted collections.

## Variations

**From the other end.** Start at the last index and go down. This finds the **last** match:

```java
for (int i = a.length - 1; i >= 0; i--)
{
    if (a[i] == target) { return i; }
}
return -1;
```

For target 3 in `a` it returned 3 (the second 3), whereas the forward search returned 1.

**Searching for a property.** The test need not be equality. "Index of the first element below 60" uses `a[i] < 60`. The loop and the two returns stay the same.

**Searching a 2D array.** Each row is a 1D array, so apply a linear search to each row in turn:

```java
public static int rowOf(int[][] m, int target)
{
    for (int r = 0; r < m.length; r++)
    {
        int c = linearSearch(m[r], target);
        if (c != -1)
        {
            return r;
        }
    }
    return -1;
}
```

Equivalent code uses two nested loops and returns inside the inner loop. For `m = { {4, 8, 15}, {16, 23, 42}, {5, 9, 3} }`, `rowOf(m, 23)` is 1, `rowOf(m, 3)` is 2 and `rowOf(m, 99)` is -1 (all run). A version that must report both coordinates can return the pair as a small array: for 23 it returned `1 1`, for 3 it returned `2 2` and for 99 it returned `-1 -1`.

## Worked example 1: trace a successful and an unsuccessful search

**Task.** For `a = {7, 3, 9, 3, 5}`, trace `linearSearch(a, 9)` and `linearSearch(a, 4)`.

**Target 9.**

| `i` | `a[i]` | `a[i] == 9`? | Action |
|---|---|---|---|
| 0 | 7 | false | continue |
| 1 | 3 | false | continue |
| 2 | 9 | true | `return 2` |

Result 2 after 3 comparisons (matches Figure 1 and the run).

**Target 4.**

| `i` | `a[i]` | `a[i] == 4`? |
|---|---|---|
| 0 | 7 | false |
| 1 | 3 | false |
| 2 | 9 | false |
| 3 | 3 | false |
| 4 | 5 | false |

The loop ends because `i` reaches 5. The statement after the loop runs and returns -1. Five comparisons were made.

**Interpretation.** For a successful search the number of comparisons is the target's index plus one, so a target near the front is found quickly. For an unsuccessful search it is always the length of the collection.

## Worked example 2: finding a name, and a famous bug

**Task.** `names` holds `[Ana, Ben, Cy, Ben]`. Find the first position of `"Ben"` and of `"Zed"`, then explain why a "tidier" version of the loop fails.

Using `indexOf`: `"Ben"` is at index 1 and `"Zed"` gives -1 (run and confirmed: `1 -1`).

**The buggy version.**

```java
for (int i = 0; i < a.length; i++)
{
    if (a[i] == target)
    {
        return i;
    }
    else
    {
        return -1;      // WRONG: decides after one element
    }
}
return -1;
```

This returns on the **first** pass, whatever the outcome. On `a` it returned 0 for target 7 (correct only by luck) and -1 for target 9, even though 9 is in the array (the run printed `-1 0`: that is, `badSearch(a, 9)` was -1 and `badSearch(a, 7)` was 0). The rule is: **never conclude "not found" until the whole collection has been checked.**

**The String trap.** Suppose `String t = new String("Ben");` makes a **new** object with the same characters as the element at index 1. Then `names.get(1) == t` is `false`, because `==` asks whether two names refer to the same object, while `names.get(1).equals(t)` is `true` (both from the run). `indexOf(names, t)` still returns 1 because it uses `equals`. Compare the **contents** of Strings with `equals`; use `==` only for primitives (and, deliberately, for checking that a reference is `null`).

## Searching for several matches

If you want every match, do not return early. Count instead:

```java
int n = 0;
for (int v : a)
{
    if (v == target) { n++; }
}
```

For `a` and target 3 this gives 2. The structure is a count, not a search; the loop must visit every element.

## Common misconceptions

- **"Linear search needs sorted data."** It does not. Only binary search does.
- **"Put `return -1` in an else branch to be efficient."** That makes the method wrong; the -1 belongs after the loop.
- **"The method should return the target value."** The usual convention returns the **index**; returning the value tells the caller nothing they did not know.
- **"== works for Strings."** `==` compares references. Use `equals`.
- **"It always examines all elements."** It stops at the first match. Only an unsuccessful search, or one whose target is last, examines all of them.
- **"The index of the match is the number of comparisons."** The comparisons are index + 1 for a successful search starting at the front.
- **"Search from the end finds the same element."** With duplicates it finds the last match, not the first.

## Where this leads

Topic 4.15 sorts a collection so that Topic 4.17 can use binary search, which examines far fewer elements. Linear search on a 2D array reappears in free-response problems that ask you to find an item in a grid. Practise with the [Topic 4.14 practice questions](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-14-searching-algorithms-checklist/). Next: the [Topic 4.15 study guide on sorting algorithms](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-study-guide/).
