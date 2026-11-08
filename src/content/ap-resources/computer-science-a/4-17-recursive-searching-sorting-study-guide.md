---
resourceId: "mb-ap-csa-4.17-study-guide"
title: "Recursive Searching and Sorting: Study Guide (Computer Science A 4.17)"
description: "How recursion traverses Strings, arrays and ArrayLists, how binary search halves a sorted range, and how merge sort splits and merges, with traced searches and a complete merge sort trace."
course: "computer-science-a"
unit: 4
topics: ["4.17"]
resourceType: "study-guide"
prerequisites:
  - "Recursion and tracing recursive methods (Topic 4.16)"
  - "Linear search and sorting by selection and insertion (Topics 4.14 and 4.15)"
  - "Arrays and ArrayLists, and integer division (Topics 4.3 and 1.3)"
learningObjectives:
  - "Trace a recursive method that traverses a String, array or ArrayList using an index or a shrinking piece"
  - "Determine the result of each iteration of a binary search, using low, high and mid, and state why the data must be sorted"
  - "Compare binary search with linear search in the number of elements examined"
  - "Determine the result of each step of merge sort, both the splits and the merges"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.17-revision-notes", "mb-ap-csa-4.17-practice", "mb-ap-csa-4.17-checklist"]
next: "mb-ap-csa-4.17-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Recursion can traverse a String, array or ArrayList; the parameter (an index, or a shorter String or range) records progress and a base case ends the traversal."
  - "Binary search needs sorted data. It looks at the middle element and discards half of the range each time, until it finds the target or the range is empty; it can be written iteratively or recursively and is typically more efficient than linear search."
  - "The middle index is (low + high) / 2 with integer division; if a[mid] is less than the target, low becomes mid + 1, and if it is greater, high becomes mid - 1."
  - "Merge sort is a recursive sort: it divides the array into smaller subarrays until each has one element, then recursively merges the sorted subarrays back together in order."
faqs:
  - question: "Why does binary search need sorted data?"
    answer: "Because it decides which half to discard by comparing the target with the middle element. That decision is only valid if every element in the discarded half is on the same side of the middle element, which is true only when the data are in order."
  - question: "How many steps does binary search take?"
    answer: "Each step halves the range, so for n elements it needs at most about log base 2 of n plus 1 comparisons. For 8 elements that is at most 4 comparisons, and for 1,000 elements at most 10 (a count gave 10 for a failed search in 1,000 elements)."
  - question: "Do I need to write merge sort from memory?"
    answer: "No. The exam asks you to determine the result of each iteration or step of the algorithm: the splits and the merges on a given collection. Writing recursive code is outside the scope."
  - question: "What does merging two sorted arrays do?"
    answer: "It repeatedly compares the front elements of the two arrays, copies the smaller one to the result and moves along in that array, and when one array is used up it copies what is left of the other."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recursion over a collection

Topic 4.16 traced recursive methods on numbers. The same idea works on collections. Recursion can **traverse** `String` objects, arrays and `ArrayList` collections. The trick is to choose a parameter that records the progress: an **index** that increases, or a **shorter piece** (a smaller String or a narrower range) on each call. The base case is "nothing left to look at".

```java
public static int sumFrom(int[] a, int i)
{
    if (i == a.length)
    {
        return 0;                    // base case: past the end
    }
    return a[i] + sumFrom(a, i + 1); // this element plus the rest
}
```

`sumFrom(new int[] {3, 4, 5}, 0)` returns 12: it expands to `3 + 4 + 5 + 0`. The `ArrayList` version is the same with `list.get(i)` and `i >= list.size()` as the base case (also 12 on the list `[3, 4, 5]`).

A String version peels characters from both ends:

```java
public static boolean isPalin(String s)
{
    if (s.length() <= 1)
    {
        return true;
    }
    if (!s.substring(0, 1).equals(s.substring(s.length() - 1)))
    {
        return false;
    }
    return isPalin(s.substring(1, s.length() - 1));
}
```

`isPalin("level")` and `isPalin("noon")` are `true`; `isPalin("lever")` is `false` (compared first and last: `l` and `r` differ) (all run and confirmed). Here the progress is the shrinking String: each call removes one character from each end.

These examples are for tracing; writing recursive code is outside the scope of the exam. The two big recursive algorithms of this topic are binary search and merge sort.

## Binary search

**The idea.** To find a name in a printed phone book you do not read from page 1. You open it in the middle, see whether the name comes before or after that page, and throw away the half that cannot contain it. You repeat with the half that remains. That is **binary search**.

**The condition.** Data **must be in sorted order**. The decision "the target is in the other half" is only valid if everything on one side of the middle is smaller and everything on the other side is larger.

**The algorithm.** Keep two indices, `low` and `high`, that mark the part of the array still under consideration.

1. If `low > high`, the range is empty: the target is not present. Return -1.
2. Let `mid = (low + high) / 2` (integer division).
3. If `a[mid]` equals the target, return `mid`.
4. If `a[mid]` is less than the target, the target can only be to the right: set `low = mid + 1`.
5. Otherwise it can only be to the left: set `high = mid - 1`.
6. Repeat from step 1.

It can be written with a loop:

```java
public static int binarySearch(int[] a, int target)
{
    int low = 0;
    int high = a.length - 1;
    while (low <= high)
    {
        int mid = (low + high) / 2;
        if (a[mid] == target)
        {
            return mid;
        }
        else if (a[mid] < target)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return -1;
}
```

or recursively, with the range as parameters:

```java
public static int binarySearchRec(int[] a, int target, int low, int high)
{
    if (low > high)
    {
        return -1;
    }
    int mid = (low + high) / 2;
    if (a[mid] == target)
    {
        return mid;
    }
    else if (a[mid] < target)
    {
        return binarySearchRec(a, target, mid + 1, high);
    }
    else
    {
        return binarySearchRec(a, target, low, mid - 1);
    }
}
```

Both versions give the same results. In the recursive one `low` and `high` capture the progress, like the loop variables in the loop version.

<figure>
<svg viewBox="0 0 520 250" role="img" aria-labelledby="bs417-t bs417-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bs417-t">Binary search for 17 in a sorted array of eight elements</title>
<desc id="bs417-d">Two rows of the sorted array 2, 5, 8, 11, 14, 17, 20, 23. In step 1 the whole array is the search range, low 0 and high 7, and the middle element at index 3, holding 11, has a thick border. Since 11 is less than 17 the search continues in the right half. In step 2 only indices 4 to 7 are shaded, the middle index is 5 with a thick border and it holds 17, so the target is found at index 5 after two comparisons.</desc>
<rect width="520" height="250" fill="#ffffff"/>
<text x="20" y="32" font-size="13" fill="#1d2b44" font-weight="bold">Step 1: low 0, high 7, mid 3 holds 11 (less than 17, so go right)</text>
<rect x="20" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="50" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">2</text>
<text x="50" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="80" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="110" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="140" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="170" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">8</text>
<text x="170" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="200" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="4"/>
<text x="230" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">11</text>
<text x="230" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="260" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="290" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">14</text>
<text x="290" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<rect x="320" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="350" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">17</text>
<text x="350" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<rect x="380" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="410" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">20</text>
<text x="410" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<rect x="440" y="40" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="470" y="61" text-anchor="middle" font-size="15" fill="#1d2b44">23</text>
<text x="470" y="88" text-anchor="middle" font-size="12" fill="#1d2b44">7</text>
<text x="20" y="142" font-size="13" fill="#1d2b44" font-weight="bold">Step 2: low 4, high 7, mid 5 holds 17 (found)</text>
<rect x="20" y="150" width="60" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="50" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">2</text>
<text x="50" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="80" y="150" width="60" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="110" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="140" y="150" width="60" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="170" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">8</text>
<text x="170" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="200" y="150" width="60" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="230" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">11</text>
<text x="230" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="260" y="150" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="290" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">14</text>
<text x="290" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<rect x="320" y="150" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="4"/>
<text x="350" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">17</text>
<text x="350" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<rect x="380" y="150" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="410" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">20</text>
<text x="410" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<rect x="440" y="150" width="60" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="2"/>
<text x="470" y="171" text-anchor="middle" font-size="15" fill="#1d2b44">23</text>
<text x="470" y="198" text-anchor="middle" font-size="12" fill="#1d2b44">7</text>
<text x="20" y="240" font-size="12" fill="#1d2b44">Shaded boxes are the search range; the thick border is the middle element examined.</text>
</svg>
<figcaption>Figure 1. Binary search for 17. Each comparison with the middle element removes half of the remaining range. Here the range shrinks from 8 elements to 4 and the target is found at index 5 on the second comparison.</figcaption>
</figure>

## Worked example 1: tracing binary search

**Task.** For the sorted array `a = {2, 5, 8, 11, 14, 17, 20, 23}` (indices 0 to 7), trace a search for 17, for 6 and for 23.

**Target 17.**

| Step | `low` | `high` | `mid` | `a[mid]` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 7 | 3 | 11 | 11 < 17, so `low = 4` |
| 2 | 4 | 7 | 5 | 17 | found: return 5 |

Result 5, after **2** comparisons (Figure 1; matches the run).

**Target 6 (not present).**

| Step | `low` | `high` | `mid` | `a[mid]` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 7 | 3 | 11 | 11 > 6, so `high = 2` |
| 2 | 0 | 2 | 1 | 5 | 5 < 6, so `low = 2` |
| 3 | 2 | 2 | 2 | 8 | 8 > 6, so `high = 1` |
| 4 | 2 | 1 | | | `low > high`: return -1 |

Result -1 after **3** comparisons.

**Target 23 (the last element).**

| Step | `low` | `high` | `mid` | `a[mid]` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 7 | 3 | 11 | go right: `low = 4` |
| 2 | 4 | 7 | 5 | 17 | go right: `low = 6` |
| 3 | 6 | 7 | 6 | 20 | go right: `low = 7` |
| 4 | 7 | 7 | 7 | 23 | found: return 7 |

Result 7 after **4** comparisons. Searching for 20 takes 3 steps and for 11 takes 1 (both run).

**Interpretation.** The range halves on every step: 8, then 4, then 2, then 1 elements. So for n elements the number of comparisons is at most about log base 2 of n, plus one. For 8 elements the worst case is 4. A **linear search** for 23 would have needed 8 comparisons. The gap widens fast: for 1,000 sorted elements binary search needs at most 10 comparisons (the run counted 10 for an absent target), while linear search may need 1,000. That is why binary search is typically more efficient than linear search.

**Unsorted data breaks it.** On `{5, 2, 9, 1, 7}` the recursive method searching for 1 returned **-1**, although 1 is in the array. The middle (9) is greater than 1, so the method discards the right half and then the 5 at index 0 is greater than 1 too, so it gives up: the 1 sat in a half that the logic discarded.

## Merge sort

**The idea.** Selection and insertion sort (Topic 4.15) work through the array with loops. **Merge sort** uses recursion and "divide and conquer":

1. **Divide**: split the array into two halves.
2. **Conquer**: sort each half by calling merge sort on it (recursively).
3. **Combine**: **merge** the two sorted halves into one sorted array.

The base case is an array (or range) of **one element**, which is already sorted. In terms of the course description: merge sort repeatedly divides an array into smaller subarrays until each subarray is one element and then recursively merges the sorted subarrays back together in order to form the final sorted array.

**The merge step.** Given two sorted lists, repeatedly compare their **front** elements, copy the smaller into the result and advance in that list. When one list is used up, copy the rest of the other. For `[3, 5, 8]` and `[1, 2, 9]`:

| Front of left | Front of right | Smaller copied | Result so far |
|---|---|---|---|
| 3 | 1 | 1 | 1 |
| 3 | 2 | 2 | 1, 2 |
| 3 | 9 | 3 | 1, 2, 3 |
| 5 | 9 | 5 | 1, 2, 3, 5 |
| 8 | 9 | 8 | 1, 2, 3, 5, 8 |
| (left empty) | 9 | copy the rest: 9 | 1, 2, 3, 5, 8, 9 |

**The code** (shown so that you can follow the trace; you will not be asked to write it):

```java
public static void mergeSort(int[] a, int lo, int hi)
{
    if (lo >= hi)
    {
        return;                       // one element (or none): already sorted
    }
    int mid = (lo + hi) / 2;
    mergeSort(a, lo, mid);            // sort the left half
    mergeSort(a, mid + 1, hi);        // sort the right half
    merge(a, lo, mid, hi);            // combine the two sorted halves
}
```

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="ms417-t ms417-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ms417-t">How merge sort splits the array 8, 3, 5, 1, 9, 2</title>
<desc id="ms417-d">A tree of boxes. The top box holds 8 3 5 1 9 2. It splits into 8 3 5 and 1 9 2. The box 8 3 5 splits into 8 3 and 5; the box 1 9 2 splits into 1 9 and 2. The box 8 3 splits into 8 and 3, and the box 1 9 splits into 1 and 9. Boxes with one element are not split further. The text says that merging then happens in the reverse order, from the bottom of the tree up to the top.</desc>
<rect width="560" height="270" fill="#ffffff"/>
<rect x="210.0" y="20" width="140" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="40" text-anchor="middle" font-size="14" fill="#1d2b44">8 3 5 1 9 2</text>
<rect x="100.0" y="85" width="100" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="150" y="105" text-anchor="middle" font-size="14" fill="#1d2b44">8 3 5</text>
<rect x="360.0" y="85" width="100" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="410" y="105" text-anchor="middle" font-size="14" fill="#1d2b44">1 9 2</text>
<rect x="45.0" y="150" width="70" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="80" y="170" text-anchor="middle" font-size="14" fill="#1d2b44">8 3</text>
<rect x="195.0" y="150" width="50" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="220" y="170" text-anchor="middle" font-size="14" fill="#1d2b44">5</text>
<rect x="305.0" y="150" width="70" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="340" y="170" text-anchor="middle" font-size="14" fill="#1d2b44">1 9</text>
<rect x="455.0" y="150" width="50" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="480" y="170" text-anchor="middle" font-size="14" fill="#1d2b44">2</text>
<rect x="25.0" y="215" width="40" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="45" y="235" text-anchor="middle" font-size="14" fill="#1d2b44">8</text>
<rect x="95.0" y="215" width="40" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="115" y="235" text-anchor="middle" font-size="14" fill="#1d2b44">3</text>
<rect x="285.0" y="215" width="40" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="305" y="235" text-anchor="middle" font-size="14" fill="#1d2b44">1</text>
<rect x="355.0" y="215" width="40" height="30" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="375" y="235" text-anchor="middle" font-size="14" fill="#1d2b44">9</text>
<line x1="280" y1="50" x2="150" y2="85" stroke="#1d2b44" stroke-width="2"/>
<line x1="280" y1="50" x2="410" y2="85" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="115" x2="80" y2="150" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="115" x2="220" y2="150" stroke="#1d2b44" stroke-width="2"/>
<line x1="410" y1="115" x2="340" y2="150" stroke="#1d2b44" stroke-width="2"/>
<line x1="410" y1="115" x2="480" y2="150" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="180" x2="45" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="180" x2="115" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="340" y1="180" x2="305" y2="215" stroke="#1d2b44" stroke-width="2"/>
<line x1="340" y1="180" x2="375" y2="215" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="260" text-anchor="middle" font-size="12" fill="#1d2b44">Splitting goes down until every piece has one element; merging then goes back up.</text>
</svg>
<figcaption>Figure 2. The splits made by merge sort on 8, 3, 5, 1, 9, 2 (the middle index is (low + high) / 2 with integer division, so the first half gets the extra element when the length is odd). Single elements are already sorted; the merges follow in the order shown in the trace table.</figcaption>
</figure>

## Worked example 2: a complete merge sort trace

**Task.** Show every split and merge made by merge sort on `{8, 3, 5, 1, 9, 2}`.

The code was instrumented to print each split and merge. The output, in the order the events happen, was:

| Event | Action | Result |
|---|---|---|
| 1 | split `[8, 3, 5, 1, 9, 2]` | `[8, 3, 5]` and `[1, 9, 2]` |
| 2 | split `[8, 3, 5]` | `[8, 3]` and `[5]` |
| 3 | split `[8, 3]` | `[8]` and `[3]` |
| 4 | merge `[8]` and `[3]` | `[3, 8]` |
| 5 | merge `[3, 8]` and `[5]` | `[3, 5, 8]` |
| 6 | split `[1, 9, 2]` | `[1, 9]` and `[2]` |
| 7 | split `[1, 9]` | `[1]` and `[9]` |
| 8 | merge `[1]` and `[9]` | `[1, 9]` |
| 9 | merge `[1, 9]` and `[2]` | `[1, 2, 9]` |
| 10 | merge `[3, 5, 8]` and `[1, 2, 9]` | `[1, 2, 3, 5, 8, 9]` |

**How to read it.** The first call splits the whole array, then immediately calls itself on the **left** half, which splits again, and so on, until a one-element piece is reached. Only then does the first merge happen (event 4). The whole left half is sorted (event 5) before any work starts on the right half (event 6). The final merge (event 10) is the one traced in the merge table above.

**A second check.** On `{4, 7, 1, 9}` the run gave: split into `[4, 7]` and `[1, 9]`; split each into singles; merge to `[4, 7]` and `[1, 9]`; merge to `[1, 4, 7, 9]`.

**What merge sort costs.** There are about log base 2 of n levels of splitting, and each level does a merge pass touching all n elements, so the work grows roughly like n times log n. For large arrays this is much less than the roughly n squared comparisons of selection or insertion sort. (This course asks only for an informal comparison.) Merge sort needs extra space for the merged results.

## Scope

The course covers **linear and binary search** only; other search algorithms are outside the scope. It covers **selection, insertion and merge sort** only; other sorting algorithms are outside the scope. You determine the result of each iteration of binary search and merge sort.

## Common misconceptions

- **"Binary search works on any array."** It needs sorted data.
- **"`mid` is always exactly the middle."** With an even number of elements, `(low + high) / 2` rounds down, so it is the left of the two middle elements.
- **"After a comparison, set `low = mid`."** It must be `mid + 1` (and `high = mid - 1`), because `a[mid]` has just been ruled out; otherwise the loop may never end.
- **"Binary search always finishes in log n steps."** That is the worst case; the target may be found on the first comparison.
- **"Merge sort sorts as it splits."** Splitting does not reorder anything; all the ordering happens in the merges.
- **"Merge sort handles the right half first."** In the standard code the left half is fully sorted before the right half is started.
- **"Merge sort on one element does a merge."** One element is the base case; it returns without doing anything.

## Where this leads

This is the last topic of Unit 4. It joins searching and sorting with recursion, and it is the best place to practise tracing. Your next steps are the Unit 4 diagnostic and review: the [Unit 4 diagnostic](/advanced-course-resources/computer-science-a/unit-4-diagnostic/) and the [Unit 4 review](/advanced-course-resources/computer-science-a/unit-4-review/). Practise this topic with the [Topic 4.17 practice questions](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-checklist/).
