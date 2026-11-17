---
title: "AQA A-Level Computer Science: Fundamentals of Algorithms — Revision Notes"
seoTitle: "AQA A-Level Computer Science Algorithms Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes on graph and tree traversal, Reverse Polish, searching, sorting and Dijkstra's algorithm, with complexities, for AQA A-Level Computer Science 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

Fundamentals of algorithms (section 4.3 of AQA A-Level Computer Science 7517) covers the standard
traversal, searching, sorting and shortest-path algorithms. The exam expects you to **trace** each one on
a given input, **state its time complexity**, and **say when it is used** -- you are not asked to recall
Dijkstra's steps from memory, only to trace it.

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of Algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/).
Test yourself with the [Fundamentals of Algorithms practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.3:

- **4.3.1.1** Simple graph-traversal algorithms -- breadth-first and depth-first
- **4.3.2.1** Simple tree-traversal algorithms -- pre-order, in-order, post-order
- **4.3.3.1** Reverse Polish -- infix transformations
- **4.3.4.1-4.3.4.3** Linear search, binary search, binary tree search
- **4.3.5.1-4.3.5.2** Bubble sort, merge sort
- **4.3.6.1** Dijkstra's shortest path algorithm

This is Paper 1 content (the on-screen paper), so expect tracing tables and short complexity questions.

## The one table to learn

| Algorithm | Time complexity | Needs | Typical use given in the specification |
|---|---|---|---|
| Breadth-first search | -- | A **queue** | Shortest path in an **unweighted** graph |
| Depth-first search | -- | A **stack** (or recursion) | **Navigating a maze** |
| Linear search | **O(n)** | Nothing -- works on unsorted data | Small or unsorted lists |
| Binary search | **O(log n)** | **Sorted** data | Large sorted lists |
| Binary tree search | **O(log n)** | A binary search tree | Searching a BST |
| Bubble sort | **O(n²)** | -- | Example of a particularly **inefficient** sort |
| Merge sort | **O(n log n)** | Extra memory for merging | Example of **divide and conquer** |
| Dijkstra's algorithm | -- | A weighted graph (non-negative weights) | Shortest path, e.g. route finding |

The complexities in bold are the ones the specification states. Do not quote a complexity for the
traversals or Dijkstra unless a question gives you one.

## How do breadth-first and depth-first search differ?

- **Breadth-first (BFS)**: visit the start node, then **all** its neighbours, then their neighbours. Uses
  a **queue**: dequeue a node, enqueue its unvisited neighbours. Because it works outward one "level" at a
  time, the first time it reaches a node is by the fewest edges -- hence shortest path in an unweighted graph.
- **Depth-first (DFS)**: go as far as possible along one branch, then **backtrack**. Uses a **stack** (or
  the call stack in a recursive version). This mirrors exploring a maze: follow a corridor to a dead end,
  then return to the last junction.

**Trace tip:** keep three columns -- current node, queue/stack contents, visited list. When neighbours
are equal choices, the question normally tells you an order (e.g. alphabetical); follow it exactly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-algorithms--01-alg-bfs-dfs.webp" width="900" height="940" alt="The same seven-node graph (illustrative) traversed from A two ways. Breadth-first search uses a queue and visits A B C D E F G level by level. Depth-first search uses a stack and visits A B D C E G F, going deep before backtracking. After A and B are visited the queue and the stack both hold C and D, but the queue next releases C and the stack next releases D." loading="lazy">
  <figcaption>Breadth-first search takes the front of a queue; depth-first search takes the top of a stack.</figcaption>
</figure>

## Tree traversal: which order outputs what?

For each node, the three traversals differ only in **when the node itself is output**:

| Traversal | Order | Use named in the specification |
|---|---|---|
| **Pre-order** | node, left, right | Copying a tree |
| **In-order** | left, node, right | Outputting a binary search tree in **ascending order** |
| **Post-order** | left, right, node | Infix to RPN conversion; producing a postfix expression from an expression tree; emptying a tree |

**Dot method:** draw the outline round the tree anticlockwise from the root. Output a node as you pass its
**left** side (pre-order), its **underneath** (in-order) or its **right** side (post-order).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-algorithms--02-alg-tree-traversal.webp" width="900" height="1030" alt="An illustrative binary search tree with root 40, children 20 and 60 and leaves 10, 30, 50 and 70, drawn three times with nodes numbered in visiting order. Pre-order gives 40 20 10 30 60 50 70 (copying a tree), in-order gives 10 20 30 40 50 60 70 (ascending order) and post-order gives 10 30 20 50 70 60 40 (postfix expressions, emptying a tree)." loading="lazy">
  <figcaption>In-order traversal of a binary search tree always comes out in ascending order.</figcaption>
</figure>

## Reverse Polish notation (RPN)

In RPN (postfix) the operator comes **after** its operands: `3 + 4` becomes `3 4 +`.

Why it is used (from the specification): it **eliminates the need for brackets**, expressions are in a
form suitable for **evaluation using a stack**, and it is used in **stack-based interpreters** such as
PostScript and bytecode.

**Evaluating RPN with a stack:** read left to right; push each operand; on an operator, pop two values,
apply the operator (second-popped *op* first-popped), push the result.

### Worked example

Infix `(5 - 2) * (4 + 1)` -> RPN `5 2 - 4 1 + *`

```
Token  Stack after
5      5
2      5 2
-      3          (5 - 2)
4      3 4
1      3 4 1
+      3 5        (4 + 1)
*      15         (3 * 5)
```

Order matters for `-` and `/`: in `8 2 /` the result is 8 / 2 = 4, not 2 / 8.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-algorithms--03-alg-rpn.webp" width="900" height="1092" alt="Converting (3 + 4) * 2 to RPN with an operator stack: the table shows each symbol read, the output so far and the operator stack, ending with 3 4 + 2 *. Below, evaluating 3 4 + 2 * with a number stack: push 3, push 4, plus gives 7, push 2, multiply gives 14." loading="lazy">
  <figcaption>RPN needs no brackets and is evaluated left to right with a stack.</figcaption>
</figure>

## Searching: what to say about each

- **Linear search** checks each item in turn until found or the list ends. Worst case n comparisons -> O(n).
- **Binary search** compares with the middle item of a **sorted** list and discards half each time.
  Doubling n adds only one extra comparison -> O(log n). A list of 1,000 items needs at most 10 comparisons
  (2^10 = 1024).
- **Binary tree search** starts at the root and goes left if the target is smaller, right if larger.
  O(log n) assumes a reasonably balanced tree.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-algorithms--04-alg-search.webp" width="900" height="1020" alt="Finding 34 in the sorted list 3, 8, 12, 17, 21, 26, 34, 41 (illustrative). Linear search checks seven items in turn. Binary search checks the middle item three times (17, 26, then 34), halving the search area each time, but only works because the list is sorted. For 1,024 sorted items linear search needs up to 1,024 checks and binary search at most 11." loading="lazy">
  <figcaption>Binary search is much faster than linear search, but only on sorted data.</figcaption>
</figure>

## Sorting: bubble sort versus merge sort

- **Bubble sort** passes through the list comparing adjacent pairs and swapping them if out of order. After
  each pass the largest remaining item has "bubbled" to its final position. Nested loops over n items ->
  O(n²). A common improvement stops early if a pass makes no swaps.
- **Merge sort** splits the list in half repeatedly until each sub-list has one item, then **merges** pairs
  of sorted sub-lists. There are about log n levels of splitting and each level merges n items -> O(n log n).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-algorithms--05-alg-bubble-sort.webp" width="900" height="956" alt="Bubble sort on 6, 3, 5, 1, 4, 2 (illustrative) shown after each pass, with the values already in their final place at the end. Six items need five passes and 15 comparisons. Comparisons grow with the square of the number of items: 15 for 6 items, 66 for 12 and 276 for 24, so the time complexity is O(n squared)." loading="lazy">
  <figcaption>Bubble sort is O(n²): doubling the number of items roughly quadruples the comparisons.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-algorithms--06-alg-merge-sort.webp" width="900" height="904" alt="Merge sort on 6, 3, 7, 1, 8, 2, 5, 4 (illustrative). The list is divided into two fours, four twos and eight single items, then merged back through four sorted pairs and two sorted fours into one sorted list 1 to 8. Three levels of splitting and three of merging give n log n growth: 24 for 8 items, against 64 for n squared." loading="lazy">
  <figcaption>Merge sort repeatedly halves the problem, which is why it reaches O(n log n).</figcaption>
</figure>

## Dijkstra's shortest path algorithm

Finds the shortest path from **one start node to every other node** in a weighted graph.

1. Give the start node distance 0 and every other node infinity.
2. Pick the **unvisited node with the smallest distance**; mark it visited.
3. For each neighbour, if (current distance + edge weight) is less than the neighbour's recorded distance,
   update it and record the current node as its **previous** node.
4. Repeat until all nodes are visited. Read the route backwards using the previous-node column.

You will be given the algorithm or a table to fill in; the marks come from **tracing it accurately**.
Applications include route finding in satellite navigation and routing packets across a network.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-algorithms--07-alg-dijkstra.webp" width="900" height="850" alt="A weighted graph with nodes A to F (illustrative): A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6, E-F 3. From A the algorithm fixes nodes in the order A, C, B, D, E, F with shortest distances 0, 2, 3, 8, 10, 13. The shortest route from A to F is A, C, B, D, E, F with total 13." loading="lazy">
  <figcaption>Dijkstra's algorithm fixes the closest unfixed node each time and updates its neighbours' distances.</figcaption>
</figure>

## Common mistakes / exam traps

- Swapping the pairings: BFS uses a **queue**, DFS uses a **stack**.
- Giving binary search's complexity but forgetting the **precondition that the data is sorted**.
- Mixing up in-order and pre-order outputs -- check that in-order on a BST really is ascending.
- Popping RPN operands in the wrong order, so `-` and `/` give the wrong sign or value.
- In Dijkstra, visiting nodes in alphabetical order instead of **smallest tentative distance** first.
- Writing "O(n log n)" for binary search or "O(log n)" for merge sort -- learn the table above.

## Frequently asked questions

**Do I need to memorise the steps of Dijkstra's algorithm?**
No. The AQA 7517 specification says students will not be expected to recall the steps. You must be able to
trace it on a given graph and know applications of shortest-path algorithms.

**Why is merge sort faster than bubble sort?**
Merge sort is O(n log n) because it halves the problem about log n times and merges n items at each level.
Bubble sort is O(n²) because it can need up to n passes, each comparing up to n pairs.

**When would I choose linear search over binary search?**
When the data is unsorted or the list is small. Sorting first just to use binary search costs more than a
single linear search.

**Which traversal produces Reverse Polish from an expression tree?**
Post-order traversal, because each operator is output after both of its operands.

## Quick self-test

- Name the data structure used by BFS and by DFS, and one use of each.
- Write the in-order, pre-order and post-order outputs for a small tree you draw yourself.
- Convert `a * (b + c) - d` to RPN. (Answer: `a b c + * d -`)
- State the complexity of all five searching and sorting algorithms.
- Trace Dijkstra on a five-node graph and read off one shortest route.

## Related resources

[Fundamentals of Algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) |
[Fundamentals of Algorithms practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms-practice/) |
[Theory of computation revision notes](/resources/aqa-a-level-computer-science-theory-of-computation-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.3 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
