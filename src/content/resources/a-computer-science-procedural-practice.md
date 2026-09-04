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

## Section C

**8.** A program uses both procedures and functions, and passes parameters in different ways.

**(a)** Distinguish between a procedure and a function. **[2]**

**(b)** Distinguish between passing a parameter by value and by reference, and explain why passing by value is generally preferred. **[3]**

**9.** A recursive function calculates factorial(n).

**(a)** Write pseudocode for a recursive factorial function, clearly identifying the base case and the general case. **[4]**

**(b)** Explain what happens on the call stack when factorial(3) is called, and why a missing base case causes a stack overflow. **[3]**

**10.** A programmer is choosing between a stack, a queue, a linked list and an array for different tasks.

**(a)** Distinguish between a stack and a queue in terms of the order in which elements are removed. **[2]**

**(b)** State one advantage and one disadvantage of a linked list compared with an array. **[2]**

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

**8. (a)** A **procedure** performs a task but **returns no value** [1]; a **function returns a value** [1].

**(b)** **By value** passes a **copy** of the argument, so the original is unaffected [1]; **by reference** passes the **address**, so the original can be changed [1]. Passing by value is generally preferred because it **prevents side effects**, where one subroutine unintentionally alters data another part of the program depends on [1].

**9. (a)**
```
FUNCTION factorial(n)
    IF n = 0 THEN
        RETURN 1
    ELSE
        RETURN n * factorial(n - 1)
    ENDIF
ENDFUNCTION
```
Base case: n = 0 returns 1 [2]. General case: n × factorial(n − 1), which moves progressively closer to the base case [2].

**(b)** Each call is placed on the **call stack** with its own local variables and return address, so factorial(3) calls factorial(2), which calls factorial(1), which calls factorial(0), stacking three unfinished calls before any of them can return [2]. Without a base case, the recursion never stops adding calls to the stack, eventually exhausting available memory and causing a **stack overflow** [1].

**10. (a)** A **stack** is **LIFO** (last in, first out) — the most recently added element is removed first [1]; a **queue** is **FIFO** (first in, first out) — the earliest added element is removed first [1].

**(b)** Advantage: a linked list **grows dynamically and inserts cheaply**, without resizing or shifting existing elements [1]. Disadvantage: it does not allow **direct indexed access** — reaching an element requires **traversing from the start** [1].

---

## Where marks are usually lost

- Omitting the temporary variable in a swap, which loses one of the values.
- Getting the inner loop bound wrong and reading past the end of the array.
- Stating O(n log n) for binary search.
- Forgetting that binary search requires a sorted list.
- Omitting the base case when writing a recursive function.
- Confusing a stack's LIFO order with a queue's FIFO order.
