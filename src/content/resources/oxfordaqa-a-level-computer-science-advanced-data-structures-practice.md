---
title: "OxfordAQA A-Level Computer Science: Advanced data structures (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Advanced Data Structures Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
description: "Original practice questions with worked answers on graphs, trees, hashing, priority queues and dictionaries for OxfordAQA A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section **3.10 Advanced data structures** (3.10.1 to 3.10.5) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. All of it is International A-level only (Unit 3: Advanced Programming). Code is in Python, one of the three exam languages. Priority 1 is the highest. Hash collisions go to the next available position, wrapping from the last position to 0.

Links: [study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) · [revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-revision-notes/) · [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [free 10-minute diagnostics](/diagnostics/)

## Questions

**1.** Explain what is meant by each term: **(a)** vertex, **(b)** directed graph, **(c)** weighted graph. **[3]**

**2.** A minibus service links five stops, L, M, N, P and R. The links work in both directions and their lengths in minutes are: L–M 8, L–N 3, M–P 6, N–P 9, N–R 2, P–R 5.

**(a)** Draw the adjacency matrix for this graph. **[3]**
**(b)** Write the adjacency list entry for stop N. **[1]**

**3.** A directed graph has this adjacency matrix (rows are "from", columns are "to"):

| | S | T | V | Y |
|---|---|---|---|---|
| **S** | 0 | 1 | 1 | 0 |
| **T** | 0 | 0 | 1 | 0 |
| **V** | 0 | 0 | 0 | 1 |
| **Y** | 1 | 0 | 0 | 0 |

**(a)** State the number of edges. **[1]**
**(b)** Write the adjacency list. **[2]**
**(c)** A search engine models 50,000 web pages as a directed graph; each page links to about 10 others. Explain whether a matrix or a list suits it better. **[2]**

**4.** An undirected graph has vertices A to F and edges A–B, B–C, C–A, C–D, D–E, E–F.

**(a)** Explain why this graph is not a tree. **[2]**
**(b)** Explain why a class hierarchy with Object at the top is an example of a rooted tree. **[2]**

**5.** These values are inserted, in order, into an empty binary search tree:

`47, 23, 68, 15, 35, 59, 80, 28, 63`

**(a)** Draw the tree. **[3]**
**(b)** List the nodes visited when searching for 63. **[1]**
**(c)** List the nodes visited when searching for 30, and state how the search shows 30 is absent. **[2]**

**6.** A hash table has 13 positions (0 to 12). The hash function is `key MOD 13`.

**(a)** Insert 4019, 2745, 1300, 6512 and 3018 in that order. Give the hash and final position of each key. **[4]**
**(b)** State how many keys are compared when searching for 3018. **[1]**
**(c)** Explain how a search shows that 5214 is not in the table. **[1]**
**(d)** A designer suggests using only the first digit of each key as the hash. Explain why this is a poor hash function for this table. **[2]**

**7.** A school library finds its 9,000 book records by barcode and adds about 30 books a week. Discuss the advantages and disadvantages of storing the records in a hash table instead of an array kept in barcode order. **[4]**

**8.** A priority queue is held in a one-dimensional array of size 5, kept in priority order, with a variable `count`. It starts empty.

**(a)** Show the contents of the array and `count` after each operation: enqueue R1 (4), enqueue R2 (2), enqueue R3 (4), dequeue, enqueue R4 (1), enqueue R5 (2), enqueue R6 (3). **[4]**
**(b)** State the tests for an empty queue and a full queue, and say what happens if R7 is now enqueued. **[2]**

**9.** This class stores a priority queue as `(priority, name)` pairs in a fixed-size list:

```python
class PriorityQueue:
    def __init__(self, size):
        self.items = [None] * size
        self.size = size
        self.count = 0
```

Write the method `enqueue(self, name, priority)`. It returns `False` if the queue is full; otherwise it inserts the pair in priority order, keeping ties in arrival order, and returns `True`. **[6]**

**10.** A shop stores prices in pence in a dictionary:

```python
prices = {"A4 pad": 120, "ruler": 45, "glue": 80}
order = ["glue", "ruler", "glue", "sharpener"]
```

Write code that totals the prices of the items in `order` that are in `prices`, prints any item not in `prices`, then prints the total. State the output. **[5]**

**11.** A hiking app models 4,000 mountain huts and the trails between them. Every trail can be walked both ways, and the app stores each trail's length. Each hut connects to between 2 and 5 others. Users look up a hut's details by typing its name.

**(a)** State whether the graph is weighted and whether it is directed, giving a reason for each. **[2]**
**(b)** Recommend an adjacency matrix or an adjacency list, using figures to justify your choice. **[3]**
**(c)** Suggest a data structure for looking up a hut's details by name, and explain why it suits. **[2]**

## Answers

**1. (a)** One item (node) in a graph, such as a place [1]. **(b)** A graph in which each edge has a direction, so a link from one vertex to another does not imply a link back [1]. **(c)** A graph in which each edge has a value, such as a distance or cost [1].
*Examiner insight:* "Has arrows" is weak for (b); say what the direction means.

**2. (a)**

| | L | M | N | P | R |
|---|---|---|---|---|---|
| **L** | 0 | 8 | 3 | 0 | 0 |
| **M** | 8 | 0 | 0 | 6 | 0 |
| **N** | 3 | 0 | 0 | 9 | 2 |
| **P** | 0 | 6 | 9 | 0 | 5 |
| **R** | 0 | 0 | 2 | 5 | 0 |

All six weights correctly placed [1]; each entered both ways, so the matrix is symmetric [1]; 0 (or a stated symbol) for no link [1].
**(b)** **N: L(3), P(9), R(2)** [1]
*Examiner insight:* Writing 1s instead of the minutes throws away the weights.

**3. (a)** **5** edges [1]
**(b)** S: T, V; T: V; V: Y; Y: S. Rows S and T correct [1]; rows V and Y correct [1].
**(c)** An adjacency **list** [1]: about 500,000 links against 2,500,000,000 cells in a matrix, so the graph is sparse and a list stores only the links that exist [1].
*Examiner insight:* Back "sparse" by comparing edges with vertices; a bare choice of structure gains little.

**4. (a)** It contains a cycle, A–B–C–A [1]; a tree must be a connected, undirected graph with **no cycles** [1].
**(b)** Object is the root, the only class with no parent [1]; every other class descends from Object through parent-child relationships [1].
*Examiner insight:* Name the actual cycle; "it has a loop" is too vague.

**5. (a)**

```
            47
          /    \
        23      68
       /  \    /  \
     15   35  59   80
         /      \
       28        63
```

Root 47 with 23 and 68 as children [1]; 15, 35, 59, 80 correct [1]; 28 as left child of 35 and 63 as right child of 59 [1].
**(b)** **47, 68, 59, 63** [1]
**(c)** 47, 23, 35, 28 [1]; 30 is larger than 28 but 28 has no right child, so the search ends at an empty branch: **not present** [1].
*Examiner insight:* Each insert starts again from the root, not from the previous value.

**6. (a)**

| Key | key MOD 13 | Position |
|---|---|---|
| 4019 | 2 | 2 |
| 2745 | 2 | 3 |
| 1300 | 0 | 0 |
| 6512 | 12 | 12 |
| 3018 | 2 | 4 |

Correct hashes for all five keys [1]; 4019, 1300 and 6512 at their home positions [1]; 2745 moved to 3 [1]; 3018 moved past 2 and 3 to 4 [1].
**(b)** **3** (positions 2, 3, 4) [1]
**(c)** 5214 MOD 13 = 1 and position 1 is empty, so the key cannot be in the table [1].
**(d)** A four-digit key's first digit is 1 to 9, so positions 0 and 10 to 12 are never used [1]; keys sharing a first digit all collide, so the spread is uneven [1].
*Examiner insight:* In (d), judge against both properties; it is quick to compute, so the case rests on uneven spread.

**7.**
- Advantage: the position is calculated from the barcode, so no linear or binary search is needed [1].
- Advantage: new books are added without shifting records to keep the array in order [1].
- Disadvantage: collisions slow searches and inserts, more so as the table fills [1].
- Disadvantage: spare empty positions are needed, so more memory is used; or records are not in barcode order, so a sorted list needs extra work [1].
*Examiner insight:* A "discuss" answer needs both sides, not four advantages.

**8. (a)**

| Operation | Array (front first) | count |
|---|---|---|
| enqueue R1 (4) | R1 | 1 |
| enqueue R2 (2) | R2, R1 | 2 |
| enqueue R3 (4) | R2, R1, R3 | 3 |
| dequeue → R2 | R1, R3 | 2 |
| enqueue R4 (1) | R4, R1, R3 | 3 |
| enqueue R5 (2) | R4, R5, R1, R3 | 4 |
| enqueue R6 (3) | R4, R5, R6, R1, R3 | 5 |

First three rows correct, R3 behind R1 [1]; dequeue returns R2 [1]; R4 and R5 rows correct [1]; final row correct with count 5 [1].
**(b)** Empty when `count = 0`; full when `count` equals the array size, 5 [1]. The queue is full, so R7 is refused and an error is reported [1].
*Examiner insight:* R3 ties with R1 but arrived later, so it goes behind R1.

**9.**

```python
    def enqueue(self, name, priority):
        if self.count == self.size:
            return False
        i = self.count - 1
        while i >= 0 and self.items[i][0] > priority:
            self.items[i + 1] = self.items[i]
            i -= 1
        self.items[i + 1] = (priority, name)
        self.count += 1
        return True
```

Returns `False` when full [1]; starts at the rear, index `count - 1` [1]; loop stops at the front or at an item whose priority number is not larger, with `>` keeping ties in arrival order [1]; moves each lower-priority item back one place [1]; stores the pair at `i + 1` [1]; adds 1 to `count` and returns `True` [1].
*Examiner insight:* Using `>=` puts a new item ahead of older items of equal priority; test your code on a tie.

**10.**

```python
total = 0
for item in order:
    if item in prices:
        total += prices[item]
    else:
        print(item)
print(total)
```

Loops through every item in `order` [1]; tests whether the item is a key in `prices` [1]; adds the price looked up by key [1]; prints items not found [1]. Output: **sharpener**, then **205** [1].
*Examiner insight:* `prices[item]` without a key test raises an error for "sharpener"; test with `in` first.

**11. (a)** Weighted, because each trail has a length [1]; undirected, because every trail can be walked both ways [1].
**(b)** A matrix needs 4,000 × 4,000 = 16,000,000 cells [1]; a list holds at most 4,000 × 5 = 20,000 entries [1]; the graph is sparse, so use an **adjacency list** [1].
**(c)** A **dictionary** (or hash table) keyed on hut name [1]; details are reached directly from the key, with no search through 4,000 huts [1].
*Examiner insight:* "A list saves memory" without the figures asked for does not justify the choice.

## Where marks are usually lost

- Copying each edge of a directed graph into both cells of the matrix.
- Calling a graph sparse or dense without comparing edges with vertices.
- Defining a tree with a root, or a binary tree as having exactly two children.
- In hash tables, stopping a search at the first mismatch instead of at a match or an empty position.
- Forgetting that a full priority queue rejects an enqueue, or testing "full" with the wrong condition.
- Looking up a missing dictionary key without testing for it first.

## Next steps

- [Revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-revision-notes/)
- [Study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/)
- [Course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA: section 3.10 Advanced data structures.
