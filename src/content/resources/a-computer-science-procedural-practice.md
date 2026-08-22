---
title: "A Level Computer Science: Procedural Programming — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Procedural Programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "procedural-programming"
description: "Original exam-style practice questions with full worked answers on algorithms, searching, sorting, complexity and modular design."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Procedural Programming revision notes](/resources/a-computer-science-procedural-revision-notes/)

---

## Section A

**1.** Define algorithm and state **two** ways of representing one. **[3]**

**2.** Explain what is meant by decomposition and abstraction. **[2]**

## Section B

**3.** Compare linear search and binary search.

**(a)** Describe how each works. **[4]**
**(b)** State the time complexity of each in Big O notation. **[2]**
**(c)** State the precondition for binary search and explain why it is required. **[3]**

**4.** Write pseudocode for a bubble sort of an array of integers into ascending order. **[6]**

**5.** Explain **two** ways bubble sort can be optimised, and state why it is still unsuitable for large data sets. **[5]**

**6.** Explain the benefits of a modular, top-down approach to program design, giving **three** points. **[6]**

**7.** Trace the following for input n = 4 and state the output:

```
result ← 1
FOR i ← 1 TO n
    result ← result * i
NEXT i
OUTPUT result
```
**[3]**

---

## Answers

**1.** An algorithm is a **finite, ordered sequence of unambiguous steps that solves a problem** [1]. It can be represented as **pseudocode** [1] or as a **flowchart** (also structured English or a program) [1].

**2. Decomposition** — breaking a **large problem into smaller, more manageable sub-problems** that can be solved separately [1]. **Abstraction** — **removing unnecessary detail** so that only the features relevant to the problem remain [1].

**3. (a) Linear search** — examine **each element in turn from the start** until the target is found or the end is reached [1] [1]. **Binary search** — examine the **middle element**; if it is not the target, **discard the half that cannot contain it** and repeat on the remaining half [1] [1].
**(b)** Linear: **O(n)** [1]. Binary: **O(log n)** [1].
**(c)** The list must be **sorted** [1]. Binary search works by **deciding which half to discard based on whether the target is greater or less than the middle element** [1]; that decision is only valid if the elements are in order — on an unsorted list it would discard the half containing the target [1].

**4.**
```
FOR i ← 0 TO LENGTH(arr) - 2
    swapped ← FALSE
    FOR j ← 0 TO LENGTH(arr) - 2 - i
        IF arr[j] > arr[j+1] THEN
            temp ← arr[j]
            arr[j] ← arr[j+1]
            arr[j+1] ← temp
            swapped ← TRUE
        ENDIF
    NEXT j
    IF swapped = FALSE THEN
        EXIT FOR
    ENDIF
NEXT i
```
Outer loop [1]; inner loop with correct bounds [1]; comparison of adjacent elements [1]; correct three-line swap using a temporary variable [1]; swapped flag set [1]; early exit when no swaps occur [1].

**5.** **A swapped flag** — if a complete pass makes no swaps, the list is already sorted and the algorithm can stop, which makes the best case O(n) rather than O(n²) [1] [1]. **Reducing the inner loop bound by one each pass** — after pass i, the last i elements are already in their final positions, so re-comparing them is wasted work [1] [1].
It remains unsuitable for large data sets because its **average and worst case are still O(n²)**, so doubling the data quadruples the work — merge sort at O(n log n) is far faster [1].

**6.** Any three, 2 marks each: **each module can be written and tested independently**, so errors are localised and easier to find [1] [1]; **several programmers can work on different modules simultaneously**, shortening development time [1] [1]; **modules can be reused** in other programs, saving effort [1] [1]; the program is **easier to read and maintain**, since each module has a single clear purpose [1] [1].

**7.** i = 1: result = 1 [1]; i = 2: result = 2; i = 3: result = 6 [1]; i = 4: result = **24** [1]. This computes n factorial.

---

## Where marks are usually lost

- Omitting the temporary variable in a swap, which loses one of the values.
- Getting the inner loop bound wrong and reading past the end of the array.
- Stating O(n log n) for binary search.
- Forgetting that binary search requires a sorted list.
