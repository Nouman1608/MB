---
title: "Cambridge A Level Computer Science (9618): Computational thinking and Problem-solving -- Revision Notes"
seoTitle: "Cambridge 9618 Algorithms and Recursion Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on binary search, insertion and bubble sort, linked lists, binary trees, stacks, queues, graphs, Big O and recursion for Cambridge A Level 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 19 Computational thinking and Problem-solving is the A Level algorithms topic in Cambridge International AS & A Level Computer Science 9618: linear and binary search, insertion and bubble sort, algorithms that find, insert and delete items in abstract data types (stack, queue, linked list, binary tree), graphs and dictionaries, comparing algorithms with Big O notation, and recursion. It is examined in Paper 3 and is one of the two topics, with Topic 20, that Paper 4 Practical assesses in program code.

Related: [Computational thinking and Problem-solving study guide](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-study-guide/) · [practice questions](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 19.1 | Show understanding of linear and binary search: write each algorithm; the conditions for a binary search; how its performance varies with the number of items |
| 19.1 | Show understanding of insertion sort and bubble sort: write each algorithm; performance depends on the initial order and the number of items |
| 19.1 | Write algorithms to find an item in a linked list and a binary tree; insert into a stack, queue, linked list and binary tree; delete from a stack, queue and linked list |
| 19.1 | Show understanding that a graph is an ADT; describe its key features and justify its use (no code required) |
| 19.1 | Show how ADTs can be implemented from built-in types or other ADTs: stack, queue, linked list, dictionary, binary tree |
| 19.1 | Compare algorithms by time taken and memory used, including Big O notation for time and space complexity |
| 19.2 | Show understanding of recursion: essential features, how it is expressed, write and trace recursive algorithms, when it is beneficial |
| 19.2 | Show awareness of what a compiler has to do to translate recursive code: use of stacks and unwinding |

## Searching

**Linear search**: check each item in turn; works on unsorted data; up to n comparisons.

**Binary search**: the data **must be sorted**. Compare the target with the **middle element**; discard the half that cannot contain it by moving the bound past the middle; repeat.

```
FUNCTION BinarySearch(Target : INTEGER) RETURNS INTEGER
   DECLARE Lower, Upper, Mid : INTEGER
   Lower ← 1
   Upper ← 100
   WHILE Lower <= Upper
      Mid ← (Lower + Upper) DIV 2
      IF List[Mid] = Target THEN
         RETURN Mid
      ENDIF
      IF List[Mid] < Target THEN
         Lower ← Mid + 1
      ELSE
         Upper ← Mid - 1
      ENDIF
   ENDWHILE
   RETURN -1
ENDFUNCTION
```

Maximum comparisons ≈ log₂ n, rounded up: 1000 items need at most 10 (2¹⁰ = 1024); doubling n adds only one comparison.

Trace on 3, 8, 12, 17, 21, 26, 30, 35, 41 for 10: Mid 5 (21 > 10, Upper 4); Mid 2 (8 < 10, Lower 3); Mid 3 (12 > 10, Upper 2); Lower > Upper, so not found.

## Sorting

```
// insertion sort of List[1:n]
FOR Pointer ← 2 TO n
   ItemToInsert ← List[Pointer]
   Current ← Pointer - 1
   WHILE Current > 0 AND List[Current] > ItemToInsert
      List[Current + 1] ← List[Current]
      Current ← Current - 1
   ENDWHILE
   List[Current + 1] ← ItemToInsert
NEXT Pointer
```

| | Bubble sort | Insertion sort |
|---|---|---|
| Method | Compare and swap neighbours; largest value "bubbles" to the end each pass | Take each item and insert it into its place in the sorted part on its left |
| Best case (already sorted) | O(n) with a no-swaps flag | O(n) |
| Worst / average | O(n²) | O(n²) |
| Nearly sorted data | Few passes with the flag | Very fast: few shifts |

Performance depends on **the number of items** and **their initial order**. Keep the two algorithms distinct: an insertion sort shifts items along, it does not swap neighbours pass after pass (June 2024 to June 2025 examiner reports).

## ADT operations

| ADT | Operation | Key steps |
|---|---|---|
| Stack (array, TopPointer) | Push | If not full: increment TopPointer, store item |
| | Pop | If not empty: read item at TopPointer, decrement TopPointer |
| Queue (circular array, Front, Rear, Count) | Enqueue | If Count < size: Rear ← Rear + 1, wrapping to 1 past the upper bound; store; Count + 1 |
| | Dequeue | If Count > 0: read item at Front; Front + 1 with wrap; Count − 1 |
| Linked list (data and pointer arrays, Start, Free) | Find | Follow pointers from Start until the item is found or the null pointer is reached |
| | Insert | Take the node at Free; store data; find the place; set new node's pointer to the next node; set previous node's pointer (or Start) to the new node |
| | Delete | Find the node and its predecessor; set predecessor's pointer (or Start) to the node's pointer; add the node to the free list |
| Binary tree (LeftPointer, Data, RightPointer, Root) | Find | From Root: if equal, found; if smaller go left, if larger go right; stop at null |
| | Insert | Search as for find until a null pointer is reached; attach the new node there |

Check whether a queue is empty or full before **every** operation; a circular queue must wrap, a linear one must not (June 2025).

## Worked example: building a binary tree

Insert 50, 30, 70, 20, 40, 60, 80, 35 in that order.

| Index | Left | Data | Right |
|---|---|---|---|
| 1 | 2 | 50 | 3 |
| 2 | 4 | 30 | 5 |
| 3 | 6 | 70 | 7 |
| 4 | −1 | 20 | −1 |
| 5 | 8 | 40 | −1 |
| 6 | −1 | 60 | −1 |
| 7 | −1 | 80 | −1 |
| 8 | −1 | 35 | −1 |

Root = 1. Finding 35: 50 (go left) → 30 (go right) → 40 (go left) → 35, four comparisons. Compare the data in the nodes, not the nodes themselves (June 2025).

## Graphs and implementing ADTs

**Graph**: nodes joined by edges; edges may be weighted and/or directed; stored as an adjacency matrix or adjacency list. Justify a graph when the data is a network of connections (roads, computer networks, social links) and routes or relationships matter.

| ADT | Can be built from |
|---|---|
| Stack | A 1D array and a top pointer, or a linked list (push and pop at the head) |
| Queue | A circular array with front and rear pointers, or a linked list with head and tail pointers |
| Linked list | Arrays (or an array of records) of data and next-pointers, with start and free pointers |
| Dictionary | Key-value pairs held in arrays of keys and values, or a hash table that maps each key to an index |
| Binary tree | An array of node records with left and right pointers, and a root pointer |

## Big O notation

| Algorithm | Time (worst) | Notes |
|---|---|---|
| Stack push/pop, queue enqueue/dequeue | O(1) | Constant time |
| Binary search | O(log n) | Halves the data each step |
| Linear search | O(n) | Grows in step with n |
| Bubble sort, insertion sort | O(n²) | Nested loops; O(n) best case on sorted data |
| Search a balanced binary tree | O(log n) | O(n) if the tree has become a chain |

**Space complexity** measures extra memory: bubble and insertion sorts are O(1) (they sort in place); a recursive algorithm uses O(depth) stack space.

## Recursion

Essential features:

1. A **base case** that stops the recursion and returns a value without calling itself.
2. A **general (recursive) case** in which the subroutine calls itself.
3. Each call moves **closer to the base case**.

```
FUNCTION Factorial(N : INTEGER) RETURNS INTEGER
   IF N <= 1 THEN
      RETURN 1
   ELSE
      RETURN N * Factorial(N - 1)
   ENDIF
ENDFUNCTION
```

**Trace of Factorial(4)**: calls go down 4 → 3 → 2 → 1; the base case returns 1; the stack **unwinds**: 2 × 1 = 2, 3 × 2 = 6, 4 × 6 = 24.

**What the compiler must do**: each call pushes a **stack frame** holding the return address, parameters and local variables; when a call returns, its frame is popped and execution continues at the return address with the returned value. Too many calls without reaching the base case cause a **stack overflow**.

**When is recursion beneficial?** When the problem is defined in terms of smaller versions of itself (tree traversal, divide and conquer, factorial): the code is shorter and closer to the definition. **Drawbacks**: more memory and time for the stack frames, and the risk of stack overflow; an iterative version is often more efficient.

## Common mistakes and exam traps

- Comparing the middle **index** rather than the middle **element**, or not moving the bound past Mid (June 2024 to June 2025).
- Writing a recursive binary search when an iterative one is asked for, or the reverse (June 2024).
- Letting an insertion sort turn into a bubble sort.
- A recursive function with no base case, or one that never reaches it.
- Forgetting to update the start pointer when inserting at, or deleting from, the head of a linked list.

## Frequently asked questions

**Why must the data be sorted for a binary search?**
Discarding half the list relies on knowing every item to one side of the middle is smaller and every item to the other side larger.

**Which is faster on nearly sorted data, insertion or bubble sort?**
Usually insertion sort: each item moves only a short distance, so there are few shifts and comparisons.

**Do I write graph code in Paper 4?**
No. The syllabus says you will not write code for a graph structure; you describe and justify it.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 19 (19.1 Algorithms, 19.2 Recursion), using the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
