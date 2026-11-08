---
title: "Cambridge A Level Computer Science (9618): Computational thinking and Problem-solving -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 19: Computational thinking and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 19
syllabusTopics:
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
    subtopic: "algorithms-19-1"
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
    subtopic: "recursion"
description: "A Level study guide to binary search, insertion sort, abstract data types, Big O comparisons and recursion for Cambridge Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

This A Level topic raises the standard of the AS algorithm work. You must write and trace more efficient searching and sorting algorithms, build and use abstract data types such as stacks, queues, linked lists and binary trees, compare algorithms using Big O notation and understand recursion, including how it uses the call stack. Many of the longest questions on Paper 3 come from here.

## Where this fits in the specification

Topic 19 is A Level content. It builds on the AS topics on algorithm design and data types and structures, and it is applied in the A Level programming topic. Expect to trace code, complete or write short algorithms, and explain why one approach is better than another.

## Algorithms

### Binary search

A **binary search** finds an item in a **sorted** array by repeatedly halving the part still being searched. Compare the target with the middle item; if equal you are done; if the target is smaller, discard the upper half; otherwise discard the lower half. It is much faster than a linear search on large lists but requires sorted data.

```
Low ← 1
High ← 11
Found ← FALSE
WHILE Low <= High AND Found = FALSE
  Mid ← (Low + High) DIV 2
  IF List[Mid] = Target THEN
    Found ← TRUE
  ELSE
    IF List[Mid] < Target THEN
      Low ← Mid + 1
    ELSE
      High ← Mid - 1
    ENDIF
  ENDIF
ENDWHILE
```

### Insertion sort

An **insertion sort** builds a sorted section at the start of the list. It takes the next unsorted item, then shifts larger items in the sorted section one place right until the correct gap appears, and inserts the item there.

```
FOR i ← 2 TO n
  Value ← List[i]
  j ← i - 1
  WHILE j >= 1 AND List[j] > Value
    List[j + 1] ← List[j]
    j ← j - 1
  ENDWHILE
  List[j + 1] ← Value
NEXT i
```

It is efficient for short or nearly sorted lists and does not need extra array space. Bubble sort and insertion sort are both simple, but their time grows with the square of the list length in the worst case.

### Abstract data structures

At A Level you should be able to describe and use a **stack** (LIFO), a **queue** (FIFO), a **linked list** (nodes with pointers) and a **binary tree** (each node has at most a left and a right child). In a binary search tree every value in the left subtree is smaller than the node and every value in the right subtree is larger. To **insert** a value you start at the root and move left or right until you find an empty position. A **tree traversal** visits every node: in-order (left, node, right) gives the values in ascending order, pre-order (node, left, right) is useful for copying a tree, and post-order (left, right, node) is useful for deleting one. A linked list or tree can be stored in arrays by using integer indexes as pointers.

### Comparing algorithms: Big O

**Big O notation** describes how the time or memory an algorithm needs grows with input size n, ignoring constants. Common orders are shown below.

| Order | Name | Typical example |
|---|---|---|
| O(1) | constant | Accessing an array element by index |
| O(log n) | logarithmic | Binary search |
| O(n) | linear | Linear search |
| O(n log n) | linearithmic | Efficient sorts such as merge sort |
| O(n squared) | polynomial | Bubble sort, insertion sort (worst case) |
| O(2 to the n) | exponential | Naive recursive Fibonacci |

Doubling n adds one step to an O(log n) algorithm, doubles the work of an O(n) algorithm and quadruples the work of an O(n squared) algorithm.

## Recursion

A **recursive** subroutine is one that calls itself. It needs a **base case**, which gives a result with no further call, and a **general case**, which calls itself with a simpler problem so that the base case is eventually reached. Without a base case the calls never end and the program runs out of memory, called a stack overflow.

```
FUNCTION Factorial(n : INTEGER) RETURNS INTEGER
  IF n <= 1 THEN
    RETURN 1
  ELSE
    RETURN n * Factorial(n - 1)
  ENDIF
ENDFUNCTION
```

Each call is placed on the **call stack** with its parameters, local variables and return address. The calls pile up while the function keeps calling itself (winding), and once the base case returns, each call finishes in reverse order as the stack **unwinds**. Compared with iteration, recursion often gives shorter code that matches problems such as tree traversal, but it uses more memory because of the stack, and is usually slower. Any recursive solution can be rewritten with loops, perhaps with an explicit stack.

## Worked example 1: binary search

Search the sorted list 3, 9, 14, 22, 27, 31, 40, 46, 58, 63, 71 (positions 1 to 11) for 46.

| Low | High | Mid | List[Mid] | Action |
|---|---|---|---|---|
| 1 | 11 | 6 | 31 | 46 > 31, so Low = 7 |
| 7 | 11 | 9 | 58 | 46 < 58, so High = 8 |
| 7 | 8 | 7 | 40 | 46 > 40, so Low = 8 |
| 8 | 8 | 8 | 46 | found at position 8 |

It takes 4 comparisons, whereas a linear search needs 8. Now search for 30. The first midpoint (position 6, value 31) means 30 < 31 so High = 5; then Mid = 3 (value 14), Low = 4; then Mid = 4 (value 22), Low = 5; then Mid = 5 (value 27), Low = 6. Now Low > High, so the loop ends with Found still FALSE: 30 is not in the list, after 4 comparisons. For 11 items the maximum number of comparisons is 4, since 2 to the power 4 is 16, which is at least 11 + 1.

## Worked example 2: tracing recursion and counting calls

Trace Factorial(4). The calls wind down: Factorial(4) needs 4 x Factorial(3); Factorial(3) needs 3 x Factorial(2); Factorial(2) needs 2 x Factorial(1); Factorial(1) returns 1, the base case. Unwinding: Factorial(2) = 2 x 1 = 2, Factorial(3) = 3 x 2 = 6, Factorial(4) = 4 x 6 = 24. Four calls were made and 4 frames sat on the stack at the deepest point.

Now consider a recursive Fibonacci function that returns n when n is 0 or 1 and otherwise returns Fib(n - 1) + Fib(n - 2). Fib(6) is 8, but counting the calls shows 25 are made (Fib(6) calls Fib(5) and Fib(4), and so on down to the base cases), because the same values are recalculated many times. An iterative loop would need only 6 additions, which illustrates why a recursive solution is not always the efficient choice.

## Common mistakes

- Using a binary search on unsorted data.
- Getting Mid wrong by forgetting DIV, or by setting Low = Mid instead of Mid + 1 which can loop forever.
- Leaving out the base case in a recursive function, or writing a general case that does not move towards it.
- Writing the in-order traversal of a tree in the wrong order.
- Confusing O(n squared) with O(2 to the n), or saying Big O gives the exact running time.
- Stating that recursion is always faster or always shorter.

## Exam technique

For a trace, show a table with one row per iteration or per call, and show the unwinding of a recursive function separately. In "explain" questions on efficiency, refer to n and the growth of the number of steps. For "write an algorithm" questions, check boundary cases such as an empty list, a one-item list and a target at either end. When asked to compare recursion with iteration, mention memory (stack use), readability and speed.

## Check your understanding

1. State the condition needed before a binary search can be used. *The data must be sorted.*
2. How many comparisons at most does a binary search need for 1,000 items? *10, since 2 to the power 10 is 1,024.*
3. Describe how an insertion sort places each item. *It takes the next unsorted item, shifts larger sorted items one place right and inserts it into the gap.*
4. What is the Big O of linear search and of binary search? *O(n) and O(log n).*
5. Write the in-order traversal order for a binary tree. *Left subtree, then node, then right subtree.*
6. What is the base case of a recursive function and why is it needed? *The case that returns without another call; it stops the recursion so the calls can unwind.*
7. Calculate Factorial(5). *5 x 24 = 120.*
8. Give one disadvantage of recursion compared with iteration. *It uses more memory because each call is stored on the call stack, and may risk a stack overflow.*

## Frequently asked questions

**How many comparisons does a binary search need?**
The maximum is the smallest power of 2 that is at least the number of items plus 1, so 11 items need at most 4 comparisons and 1,000 items need at most 10.

**How does an insertion sort work?**
It builds a sorted section at the start of the list, taking each unsorted item in turn, shifting larger sorted items one place right and inserting the item into the gap.

**What happens on the call stack during recursion?**
Each call is placed on the call stack with its parameters, local variables and return address. The calls wind up until the base case returns, then each call finishes in reverse order as the stack unwinds.

**Is recursion always more efficient than iteration?**
No. Recursion uses more memory because of the call stack and is usually slower. A recursive Fibonacci function, for example, recalculates the same values many times.
