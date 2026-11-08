---
resourceId: "mb-ap-csa-4.15-study-guide"
title: "Sorting Algorithms: Study Guide (Computer Science A 4.15)"
description: "How selection sort and insertion sort work in Java: pass-by-pass traces on arrays and ArrayLists, what is true after each pass, comparison counts, best and worst cases, and common bugs."
course: "computer-science-a"
unit: 4
topics: ["4.15"]
resourceType: "study-guide"
prerequisites:
  - "Traversing arrays and ArrayLists (Topics 4.4 and 4.9)"
  - "Swapping two elements with a temporary variable (Topic 4.5)"
  - "Nested loops and informal counting of loop iterations (Topics 2.11 and 2.12)"
learningObjectives:
  - "Describe selection sort and insertion sort in words and state what is guaranteed about the array after each pass"
  - "Trace each sort pass by pass on an array or ArrayList and give the state after any number of passes"
  - "Compare the sorts: number of comparisons and swaps or shifts on sorted, reversed and random data"
  - "Write both sorts and recognise bugs such as an incorrect swap or a wrong loop bound"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.15-revision-notes", "mb-ap-csa-4.15-practice", "mb-ap-csa-4.15-checklist"]
next: "mb-ap-csa-4.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Selection sort repeatedly selects the smallest element of the unsorted portion and swaps it into its correct and final position at the front."
  - "Insertion sort takes the next element of the unsorted portion and inserts it into its correct, but not necessarily final, position in the sorted portion by shifting larger elements to make room."
  - "After k passes of selection sort the first k elements are final; after k passes of insertion sort the first k + 1 elements are in order among themselves."
  - "Selection sort always makes n(n - 1)/2 comparisons; insertion sort makes about n - 1 comparisons on sorted data and many more on reversed data."
faqs:
  - question: "What is the difference between selection sort and insertion sort?"
    answer: "Selection sort chooses the smallest remaining element and puts it into its final place with a swap. Insertion sort takes the next element and inserts it into its correct place among the elements already sorted, shifting larger ones to the right. Selection sort's front part is final after each pass; insertion sort's front part is only sorted among itself."
  - question: "Do I need to memorise the code for these sorts?"
    answer: "You need to understand the algorithm well enough to trace what it does pass by pass and to recognise correct code. Exam questions typically give the code or a description and ask for the array after a number of passes, or about the initial conditions and the number of passes."
  - question: "Why does selection sort need a temporary variable?"
    answer: "To swap two elements you must keep one value somewhere while you overwrite it. Without a temporary variable one value is copied over the other and lost, leaving duplicates."
  - question: "Which sort is faster?"
    answer: "On already sorted data insertion sort does very little work (about n - 1 comparisons) while selection sort still does about n squared over 2 comparisons. On reversed data insertion sort does about as many comparisons as selection sort, and also shifts many elements."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Why sort at all?

A sorted collection is easier to use. A telephone directory, a leaderboard and a list of results are all sorted so that people can find or compare things quickly. For a program there is a second reason: binary search (Topic 4.17) finds an element far faster than linear search, but only in sorted data. **Sorting** puts the elements of an array or `ArrayList` in order (here, ascending).

The course names three sorting algorithms. Two are **iterative**, which means they use loops: **selection sort** and **insertion sort**. The third, **merge sort**, is recursive and appears in Topic 4.17. Other sorts are outside the scope of the exam. For selection and insertion sort you must be able to determine the result of executing **each step** of the algorithm. So the skill is tracing: write the array after each pass.

## Selection sort

**Idea.** Repeatedly **select** the smallest element from the unsorted portion and **swap** it into its correct, **final** position in the sorted portion.

**Procedure** for an array `a` of length n:

1. For `i` from 0 to n - 2: find the position `min` of the smallest element among `a[i]` to `a[n - 1]`.
2. Swap `a[i]` with `a[min]`.

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

After pass `i`, the elements at indices 0 to `i` hold the smallest `i + 1` values, in order, and they never move again. That is the meaning of "final". Figure 1 shows the state after two passes.

<figure>
<svg viewBox="0 0 420 120" role="img" aria-labelledby="sel415-t sel415-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sel415-t">Selection sort on 8, 3, 5, 1, 9, 2 after two passes</title>
<desc id="sel415-d">Six boxes holding 1, 2, 5, 8, 9, 3 at indices 0 to 5. The boxes at indices 0 and 1 are highlighted and labelled final: they hold the two smallest values, 1 and 2, in their permanent places. The remaining four boxes are the unsorted portion.</desc>
<rect width="420" height="120" fill="#ffffff"/>
<text x="30" y="18" font-size="13" fill="#1d2b44" font-weight="bold">Selection sort after 2 passes</text>
<rect x="30" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="60.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<text x="60.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="90" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="120.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">2</text>
<text x="120.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="150" y="34" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="180.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="180.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="210" y="34" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="240.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">8</text>
<text x="240.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="270" y="34" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="300.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">9</text>
<text x="300.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<rect x="330" y="34" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="360.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="360.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<text x="60.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">final</text>
<text x="120.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">final</text>
</svg>
<figcaption>Figure 1. Selection sort after two passes on 8, 3, 5, 1, 9, 2. Pass 1 swapped 1 into index 0 and pass 2 swapped 2 into index 1. The highlighted elements are in their final positions; the rest are not yet sorted.</figcaption>
</figure>

**The cost.** The inner loop makes n - 1 comparisons on the first pass, n - 2 on the second, and so on. The total is always (n - 1) + (n - 2) + ... + 1 = n(n - 1)/2, whatever the data. For n = 5 that is 10. Sorted, reversed or random, selection sort does the same number of comparisons (the counter gave 10 for `{5, 2, 9, 1, 7}` and 10 for the already sorted `{1, 2, 3, 4, 5}`). It also makes at most n - 1 swaps.

## Insertion sort

**Idea.** Treat the first element as a sorted portion of size one. Take the next element (the **key**) from the unsorted portion, and **insert** it into its correct position in the sorted portion by **shifting** the larger sorted elements one place to the right to make room. Its position is correct among the sorted elements, but **not necessarily final**, because later elements may still have to be inserted before it.

```java
public static void insertionSort(int[] a)
{
    for (int i = 1; i < a.length; i++)
    {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key)
        {
            a[j + 1] = a[j];     // shift right
            j--;
        }
        a[j + 1] = key;          // drop the key into the gap
    }
}
```

After pass `i`, the elements at indices 0 to `i` are in order among themselves, but they are not necessarily the smallest values of the whole array. Figure 2 shows the state after two passes of the same array.

<figure>
<svg viewBox="0 0 420 120" role="img" aria-labelledby="ins415-t ins415-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ins415-t">Insertion sort on 8, 3, 5, 1, 9, 2 after two passes</title>
<desc id="ins415-d">Six boxes holding 3, 5, 8, 1, 9, 2 at indices 0 to 5. The boxes at indices 0, 1 and 2 are highlighted and labelled sorted: they hold 3, 5 and 8 in order, but these are not necessarily their final positions because 1 and 2 still have to be inserted before them. The remaining three boxes are the unprocessed portion.</desc>
<rect width="420" height="120" fill="#ffffff"/>
<text x="30" y="18" font-size="13" fill="#1d2b44" font-weight="bold">Insertion sort after 2 passes</text>
<rect x="30" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="60.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="60.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="90" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="120.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="120.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="150" y="34" width="60" height="40" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="180.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">8</text>
<text x="180.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="210" y="34" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="240.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">1</text>
<text x="240.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="270" y="34" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="300.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">9</text>
<text x="300.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<rect x="330" y="34" width="60" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="360.0" y="60" text-anchor="middle" font-size="15" fill="#1d2b44">2</text>
<text x="360.0" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">5</text>
<text x="60.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">sorted</text>
<text x="120.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">sorted</text>
<text x="180.0" y="112" text-anchor="middle" font-size="12" fill="#1d2b44" font-weight="bold">sorted</text>
</svg>
<figcaption>Figure 2. Insertion sort after two passes on 8, 3, 5, 1, 9, 2. The first three elements are in order among themselves, but the 1 and 2 still to come will be inserted before them, so those positions are not final.</figcaption>
</figure>

**The cost.** On **sorted** data the `while` test fails at once every time, so the sort makes only n - 1 comparisons and no shifts. On **reversed** data every key must travel all the way to the front, so it makes about n(n - 1)/2 comparisons and shifts. For `{1, 2, 3, 4, 5}` the counter gave 4 comparisons and 0 shifts; for `{5, 4, 3, 2, 1}` it gave 10 comparisons and 10 shifts.

**Order of the test matters.** `j >= 0` must come before `a[j] > key`. With `&&` the second part is skipped when `j` is -1, so `a[-1]` is never evaluated.

## Worked example 1: selection sort, pass by pass

**Task.** Trace selection sort on `{5, 2, 9, 1, 7}`.

| Pass (`i`) | Unsorted portion searched | Smallest found at index | Swap | Array after the pass |
|---|---|---|---|---|
| 0 | 5, 2, 9, 1, 7 | 3 (value 1) | `a[0]` and `a[3]` | 1, 2, 9, 5, 7 |
| 1 | 2, 9, 5, 7 | 1 (value 2) | `a[1]` with itself | 1, 2, 9, 5, 7 |
| 2 | 9, 5, 7 | 3 (value 5) | `a[2]` and `a[3]` | 1, 2, 5, 9, 7 |
| 3 | 9, 7 | 4 (value 7) | `a[3]` and `a[4]` | 1, 2, 5, 7, 9 |

The loop stops after pass 3 (`i < a.length - 1`), because when only one element remains it must already be the largest. The program printed the same four arrays, and totals of 10 comparisons and 4 swaps.

**Notes.** Pass 1 swaps an element with itself: the minimum was already in place. That is allowed and harmless. After every pass the front part is final: after pass 2 the array begins `1, 2, ...` and those two never move again.

**Check.** The final array has the same five values as the start, in ascending order.

## Worked example 2: insertion sort, pass by pass

**Task.** Trace insertion sort on `{5, 2, 9, 1, 7}`.

| Pass (`i`) | Key | Sorted portion before | Elements shifted right | Array after the pass |
|---|---|---|---|---|
| 1 | 2 | 5 | 5 | 2, 5, 9, 1, 7 |
| 2 | 9 | 2, 5 | none (5 is not greater than 9) | 2, 5, 9, 1, 7 |
| 3 | 1 | 2, 5, 9 | 9, 5, 2 | 1, 2, 5, 9, 7 |
| 4 | 7 | 1, 2, 5, 9 | 9 | 1, 2, 5, 7, 9 |

The run printed these four arrays, with 7 comparisons and 5 shifts. Compare with selection sort on the same data: the arrays after pass 3 agree (`1, 2, 5, 9, 7`), but the reasoning is different. In insertion sort the key **1** moved from index 3 to index 0 by shifting three elements. In selection sort the **1** was swapped into place on the first pass.

**Two arrays, two meanings.** After two passes of each sort on `{8, 3, 5, 1, 9, 2}`:

- Selection sort: `1, 2, 5, 8, 9, 3`. The first two elements are the two smallest overall (final).
- Insertion sort: `3, 5, 8, 1, 9, 2`. The first three elements are sorted among themselves, but 1 and 2 are still to come.

Exam questions often ask for the array after a stated number of passes, so you must keep the difference clear. Both results came from the runs.

## Sorting an ArrayList

The same ideas work with `get` and `set`:

```java
public static void insertionSortList(ArrayList<Integer> list)
{
    for (int i = 1; i < list.size(); i++)
    {
        int key = list.get(i);
        int j = i - 1;
        while (j >= 0 && list.get(j) > key)
        {
            list.set(j + 1, list.get(j));
            j--;
        }
        list.set(j + 1, key);
    }
}
```

On `[4, 1, 3, 2]` it produced `[1, 2, 3, 4]`. Here `set` replaces elements without changing the size, which is what the sort needs. A selection sort for a list swaps with `get` and `set` through a temporary variable in the same way.

## Common bugs

- **A swap without a temporary variable.** Writing `a[i] = a[min]; a[min] = a[i];` copies one value over the other, so the original `a[i]` is lost. Running a selection sort with that swap on `{5, 2, 9, 1, 7}` produces `[1, 1, 1, 1, 7]`.
- **Outer loop one too far.** `i < a.length` instead of `a.length - 1` in selection sort does one useless extra pass; it is harmless.
- **Using the index where the value is needed.** `min` holds an **index**; compare `a[j] < a[min]`, not `a[j] < min`.
- **Searching the whole array for the minimum.** The inner loop must start at `i + 1`, not 0, or elements already in place are reconsidered.
- **Forgetting to drop the key** (`a[j + 1] = key`) in insertion sort, which loses the key.
- **Checking `a[j] > key` before `j >= 0`**, which can read index -1.

## Common misconceptions

- **"After each pass of insertion sort the front elements are in their final places."** Only selection sort guarantees that. Insertion sort guarantees only that the front part is in order among itself.
- **"Selection sort is faster on sorted data."** It does the same n(n - 1)/2 comparisons for every input.
- **"Insertion sort swaps adjacent elements."** The standard version shifts elements and places the key once; it does not swap.
- **"The sorts are different in what they produce."** Both produce the same fully sorted array; they differ only in the steps.
- **"A pass is one comparison."** A pass is one iteration of the outer loop.
- **"Duplicates break the sorts."** Both handle duplicates (sorting `{3, 1, 3, 2}` gives `1, 2, 3, 3`).
- **"Selection sort needs `n` passes."** It needs n - 1, since the last element is then in place.

## Where this leads

Topic 4.17 uses sorted data for **binary search** and introduces **merge sort**, a recursive sort that is much faster on large inputs than either of these. Informal run-time comparison (Topic 2.12) is the idea behind the counts above. Practise with the [Topic 4.15 practice questions](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-15-sorting-algorithms-checklist/). Next: the [Topic 4.16 study guide on recursion](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/).
