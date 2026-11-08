---
title: "AQA A-Level Computer Science: Fundamentals of Algorithms — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
description: "Original practice questions with worked answers on BFS, DFS, tree traversal, RPN, searching, sorting and Dijkstra for AQA A-Level Computer Science 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Fundamentals of Algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) | [Fundamentals of Algorithms revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms-revision-notes/)

These questions cover every point of section 4.3 of the AQA A-Level Computer Science (7517) specification:
graph traversal (4.3.1), tree traversal (4.3.2), Reverse Polish (4.3.3), searching (4.3.4), sorting (4.3.5)
and Dijkstra's shortest path algorithm (4.3.6). In the real Paper 1 these skills are tested mainly by
tracing, so show every step.

---

## Section A: short answers

**1.** State the time complexity of: (a) linear search (b) binary search (c) bubble sort (d) merge sort. **[4]**

**2.** State the data structure used to hold the nodes waiting to be visited in (a) a breadth-first search
(b) an iterative depth-first search. **[2]**

**3.** Give one reason why Reverse Polish notation is used in stack-based interpreters. **[1]**

## Section B: tracing and explanation

**4.** An undirected graph has nodes A, B, C, D, E and F and the edges
A-B, A-C, B-D, C-D, C-E, D-F and E-F. Where there is a choice, neighbours are taken in alphabetical order.

**(a)** Give the order in which the nodes are visited by a breadth-first search starting at A. **[2]**
**(b)** Give the order in which the nodes are visited by a depth-first search starting at A. **[2]**
**(c)** Explain why breadth-first search finds the shortest path between two nodes in this graph but would
not necessarily do so if the edges had different weights. **[2]**

**5.** The values 50, 30, 70, 20, 40, 60, 80 are inserted, in that order, into an empty binary search tree.

**(a)** Give the output of a pre-order, an in-order and a post-order traversal of the tree. **[3]**
**(b)** State which of these traversals would be used to copy the tree, and which to output its contents in
ascending order. **[2]**
**(c)** State how many comparisons a binary tree search makes to find 60, and explain why searching a
binary search tree has time complexity O(log n). **[3]**

**6.** **(a)** Convert the infix expression `(a + b) * c - d / e` into Reverse Polish notation. **[2]**
**(b)** Evaluate the RPN expression `6 2 3 + * 4 -`, showing the contents of the stack after each token. **[3]**
**(c)** Give the infix form of the expression in (b). **[1]**

**7.** A sorted list holds the nine values `3, 8, 12, 19, 24, 31, 37, 45, 52` at indices 0 to 8. A binary
search uses `mid = (low + high) DIV 2`.

**(a)** List the values compared when searching for 37. **[2]**
**(b)** List the values compared when searching for 10, and explain how the algorithm knows 10 is not
present. **[3]**
**(c)** A list holds 1,000,000 items. Compare the worst-case number of comparisons for linear search and
binary search. **[2]**

**8.** The list `5, 1, 4, 2, 8` is sorted into ascending order with a bubble sort that stops when a pass
makes no swaps.

**(a)** Show the list after each pass. **[3]**
**(b)** Explain why bubble sort has time complexity O(n²). **[2]**

**9.** Show how merge sort sorts the list `38, 27, 43, 3, 9, 82, 10, 15`. Explain why merge sort is
described as a "divide and conquer" algorithm and state its time complexity. **[5]**

**10.** A weighted graph has the edges (with weights): S-A 4, S-B 2, B-A 1, A-C 5, B-C 8, B-D 10,
C-D 2, C-T 6, D-T 2.

**(a)** Trace Dijkstra's algorithm from S, giving the final shortest distance to every node and the
previous node on each shortest path. **[5]**
**(b)** State the shortest route from S to T and its length. **[2]**
**(c)** Give one real-world application of a shortest-path algorithm. **[1]**

---

## Answers

**1.** (a) O(n) [1] (b) O(log n) [1] (c) O(n²) [1] (d) O(n log n) [1].

**2.** (a) A **queue** [1] (b) A **stack** [1]. (A recursive DFS uses the call stack.)

**3.** Any one of: it removes the need for brackets; the expression is already in the order in which a stack
can evaluate it, one token at a time, without needing to know operator precedence [1].

**4. (a)** A, B, C, D, E, F [2] (1 mark for A, B, C first; 1 for D, E, F in that order).
Trace: queue [A] -> visit A, add B, C -> visit B, add D -> visit C, add E -> visit D, add F -> visit E -> visit F.

**(b)** A, B, D, C, E, F [2].
Trace: A -> B (first unvisited neighbour of A) -> D (B's only unvisited neighbour) -> C (D's first unvisited
neighbour) -> E (C's only unvisited neighbour) -> F.

**(c)** BFS visits all nodes one edge away before any node two edges away, so the first time it reaches a node
it has used the **fewest edges** [1]. With weights, the route with fewest edges is not necessarily the one with
the smallest total weight, so a weighted algorithm such as Dijkstra's is needed [1].

**5. (a)** Pre-order: 50, 30, 20, 40, 70, 60, 80 [1]
In-order: 20, 30, 40, 50, 60, 70, 80 [1]
Post-order: 20, 40, 30, 60, 80, 70, 50 [1]

**(b)** Copy the tree: **pre-order** [1]. Ascending order: **in-order** [1].

**(c)** **3** comparisons: 50 (60 is larger, go right), 70 (60 is smaller, go left), 60 (found) [1]. Each
comparison discards one subtree, roughly halving the nodes still to search [1], so a balanced tree of n nodes
has about log₂ n levels and the search makes at most that many comparisons [1].

**6. (a)** `a b + c * d e / -` [2] (1 mark for `a b + c *`, 1 for `d e / -` in the correct place).

**(b)**
```
Token  Stack
6      6
2      6 2
3      6 2 3
+      6 5
*      30
4      30 4
-      26
```
Correct stack after the `+` and `*` [1]; correct stack after `4` and `-` [1]; final answer **26** [1].

**(c)** `6 * (2 + 3) - 4` [1].

**7. (a)** 24 (index 4; 37 is larger so low = 5), then 37 (index 6) -- found [2].

**(b)** 24 (index 4; high = 3), 8 (index 1; low = 2), 12 (index 2; high = 1) [2]. Now low (2) is greater than
high (1), so there is no part of the list left to search and the item is not present [1].

**(c)** Linear search: up to **1,000,000** comparisons [1]. Binary search: about **20**, because
2^20 = 1,048,576 is the first power of 2 above one million [1].

**8. (a)**
- After pass 1: 1, 4, 2, 5, 8 [1]
- After pass 2: 1, 2, 4, 5, 8 [1]
- Pass 3 makes no swaps, so the algorithm stops: 1, 2, 4, 5, 8 [1]

**(b)** In the worst case the algorithm needs up to n - 1 passes [1], and each pass compares up to n - 1
adjacent pairs, so the number of comparisons grows with n × n, i.e. O(n²) [1].

**9.**
```
Split:  [38 27 43 3] [9 82 10 15]
Split:  [38 27] [43 3] [9 82] [10 15]
Split:  [38] [27] [43] [3] [9] [82] [10] [15]
Merge:  [27 38] [3 43] [9 82] [10 15]
Merge:  [3 27 38 43] [9 10 15 82]
Merge:  [3 9 10 15 27 38 43 82]
```
Correct splitting down to single items [1]; correct first and second merges [1]; correct final list [1].
It is divide and conquer because it **divides** the problem into smaller sub-problems (halves) that are
solved independently and then **combined** by merging [1]. Time complexity **O(n log n)** [1].

**10. (a)**

| Node | Shortest distance | Previous |
|---|---|---|
| S | 0 | -- |
| A | 3 | B |
| B | 2 | S |
| C | 8 | A |
| D | 10 | C |
| T | 12 | D |

Order visited: S (0), B (2), A (3), C (8), D (10), T (12). Key updates: A falls from 4 to 3 via B; C falls from
10 to 8 via A; D falls from 12 to 10 via C; T falls from 14 to 12 via D.
1 mark each for correct A, C, D and T entries with their previous node [4]; 1 mark for B and the correct order
of visiting [1].

**(b)** S -> B -> A -> C -> D -> T [1], length **12** [1].

**(c)** Any one: satellite navigation / route planning; routing packets through a network; planning
delivery routes [1].

---

## Where marks are usually lost

- Breaking the alphabetical (or stated) rule for choosing neighbours, so the traversal order is wrong.
- Writing pre-order when asked for post-order: say each node's position aloud (node-left-right and so on).
- Popping RPN operands in the wrong order, which changes the result of `-` and `/`.
- In binary search, forgetting to move `low` to `mid + 1` (or `high` to `mid - 1`), so the same item is compared twice.
- In Dijkstra, choosing the next node by name rather than by **smallest current distance**, or not recording the previous node, which makes the route impossible to read back.

## Frequently asked questions

**How many marks are tracing questions usually worth?**
Tracing questions on AQA 7517 Paper 1 typically award marks for each correct stage, so a partly correct
trace still earns credit. Always show the table or stack after each step.

**Do I have to show the pseudocode for these algorithms?**
Usually the algorithm is given and you trace it. You should still be able to recognise each algorithm from
its code, because questions may ask you to identify it or state its complexity.
