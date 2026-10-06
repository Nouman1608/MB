---
title: "OxfordAQA A-Level Computer Science: Advanced data structures (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Advanced Data Structures Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on graphs, trees, hash tables, priority queues and dictionaries for OxfordAQA International A-level Computer Science section 3.10."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense topic 10, Advanced data structures (sections 3.10.1 to 3.10.5), of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Everything here is International A-level only and sits in Unit 3: Advanced Programming, the on-screen exam in C#, Python or VB.Net. The [study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) has the full explanations and longer worked examples; to test yourself under exam-style conditions, use the [practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/).

Other links: [course hub](/boards/oxfordaqa/a-level/computer-science/) · [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) · [AS arrays and lists notes](/resources/oxfordaqa-a-level-computer-science-arrays-lists-revision-notes/) · [free diagnostics](/diagnostics/)

The specification sets no pseudo-code conventions of its own, so the snippets below are in Python.

## 3.10.1 Graphs -- key terms

| Term | Meaning |
|---|---|
| Graph | Data structure that represents complex relationships between items |
| Vertex / node | One item in the graph |
| Edge / arc | A connection between two vertices |
| Undirected graph | Edges have no direction; a link works both ways |
| Directed graph | Each edge points one way (drawn with an arrow) |
| Weighted graph | Each edge has a value, such as distance, time or cost |

**Typical uses:** maps and route planning, computer networks, social networks, web links.

### Two representations

- **Adjacency matrix:** a 2D array, one row and one column per vertex. Unweighted: 1 = edge, 0 = no edge. Weighted: the cell holds the weight. Undirected graph → symmetric matrix. Directed graph → read the row as "from", the column as "to".
- **Adjacency list:** for each vertex, list only its neighbours (plus weights if weighted). In Python, a dictionary of lists works well.

### Matrix or list? (the specification's criteria)

| Adjacency matrix is better when... | Adjacency list is better when... |
|---|---|
| edges are added or removed frequently | the graph is sparse (few edges relative to vertices) |
| the presence or absence of an edge is tested frequently | |
| the graph is dense (many edges relative to vertices) | |

Size reminder: a matrix for n vertices always has n × n cells, however few edges there are. A list grows with the number of edges.

## 3.10.2 Trees -- definitions to learn word for word

- **Tree:** a connected, undirected graph with no cycles. It does **not** need a root.
- **Rooted tree:** a tree with one vertex designated as the root, giving parent-child relationships. The root is the only node with no parent; all others descend from it. Example: an OOP class hierarchy with Object as the root.
- **Binary tree:** a rooted tree where each node has **at most** two children.
- **Binary search tree (BST):** a binary tree where, at every node, smaller values sit in the left subtree and larger values in the right subtree.

> **Method: insert into a BST**
> 1. Start at the root.
> 2. If the new value is smaller, go left; otherwise go right.
> 3. Repeat at each node until you reach an empty position.
> 4. Place the new node there.

> **Method: search a BST**
> Follow the same left/right rule. Stop when the value matches (found) or when the branch you need is empty (not present).

**Small reminder.** Inserting 25, 14, 37, 9, 20, 31 gives root 25; 14 (left) with children 9 and 20; 37 (right) with left child 31. Searching for 20 visits 25, 14, 20.

## 3.10.3 Hash tables

- **Hash table:** maps keys to values; the position of each record is calculated from its key.
- **Hash function:** takes a record's key and returns the position to store it. Using `key MOD size` keeps the result in the range 0 to size − 1.
- **Good hash function:** spreads records evenly across the table **and** is quick to compute.
- **Collision:** two keys produce the same hash.
- **Rehashing (the specification's method):** store the second record in the next available position. In these notes the search wraps from the last position back to 0.

> **Method: insert**
> 1. Calculate hash = key MOD size.
> 2. If that position is free, store the record there.
> 3. If not, move to the next position (wrapping to 0 after the end) until a free one is found.

> **Method: search**
> 1. Calculate the hash of the key you want.
> 2. Compare the key at that position. Match → found.
> 3. No match → move to the next position and compare again.
> 4. Reaching an empty position means the key is not in the table.

**Small reminder: clustering.** Table size 13, hash = key MOD 13. Keys 40, 53, 66 and 27 all give 1. They are stored at positions 1, 2, 3 and 4. The fourth key needs four probes to place, which shows why an even spread matters.

### Hash table vs array

| | Hash table | Array searched by key |
|---|---|---|
| Finding a record | Position calculated from key; no search through the data | Linear search, or binary search if kept in order |
| Inserting | No shifting of other records | Shifting needed to keep an ordered array in order |
| Memory | Needs spare empty positions | Can be filled completely |
| Order | Records not held in key order | Can be kept in order |
| Weak point | Collisions slow it down as it fills | Search time grows with the amount of data |

## 3.10.4 Priority queues

- **Priority queue:** each item has a priority; items are removed in priority order, and items of equal priority leave in arrival order.
- **Operations:** add an item (**enqueue**) and remove an item (**dequeue**).
- **When to use:** jobs, processes or requests that must be handled by importance rather than arrival time. The specification notes they can be used to implement some graphing algorithms, such as breadth-first search or Dijkstra's algorithm.

> **Method: one-dimensional array, kept in priority order** (array of fixed size, with a `count`)
> - **Empty test:** `count = 0`.
> - **Full test:** `count = size of the array`.
> - **Enqueue:** if full, report an error. Otherwise work back from the rear, moving each item with a lower priority one place towards the rear; place the new item in the gap; add 1 to `count`.
> - **Dequeue:** if empty, report an error. Otherwise return the item at the front, move the rest forward one place and subtract 1 from `count`.

Another valid design adds every item at the rear and searches for the highest priority when dequeuing. Either way, the empty and full tests use `count`.

**Small reminder.** Array size 4, priority 1 is highest. Enqueue A (3), B (1), C (3), D (2). Front to rear: B, D, A, C. `count` = 4, so the queue is full. A dequeue returns B.

## 3.10.5 Dictionaries

- **Dictionary:** a collection of key-value pairs; each value is accessed through its key. Keys are unique.
- **Simple applications:** frequency counts, translating codes into names, storing settings.
- **Libraries:** Python's built-in `dict`; `Dictionary<TKey,TValue>` in `System.Collections.Generic` for C# and VB.Net.

```python
grades = {"Ridge Loop": "hard", "Lake Walk": "easy"}
grades["Pine Track"] = "medium"     # add a pair
print(grades["Lake Walk"])          # look up by key: easy
print("Moss Hollow" in grades)      # test for a key: False
del grades["Ridge Loop"]            # remove a pair
```

## Must-know distinctions

- **Tree vs rooted tree:** a root is optional for a tree, defined for a rooted tree.
- **Binary tree vs binary search tree:** every BST is a binary tree; a binary tree only becomes a BST when its values obey the left-smaller, right-larger rule.
- **Queue vs priority queue:** a queue is strictly first in, first out; a priority queue lets a higher-priority item leave first.
- **Hash table vs dictionary:** a dictionary is the key-value idea; a hash table is one way to store it.
- **Dense vs sparse:** many edges relative to vertices vs few.

## Quick self-test

1. Define a weighted graph.
2. An undirected graph has 12 vertices. How many cells does its adjacency matrix have?
3. A directed graph's adjacency matrix (rows and columns A, B, C, D) has rows A: 0 1 1 0, B: 0 0 0 1, C: 1 0 0 0, D: 0 0 1 0. How many edges are there, and which vertices does A have an edge to?
4. Why is the adjacency matrix of an undirected graph symmetric?
5. True or false: every tree has a root.
6. Using the BST built from 25, 14, 37, 9, 20, 31, which nodes are visited when searching for 33, and what is the outcome?
7. A table has 8 positions and hash = key MOD 8. Insert 57, 82, 90 in order. Where is each stored?
8. State the two properties of a good hash function.
9. A priority queue is held in an array of size 6 with `count` = 6. What happens if you try to enqueue?
10. A dictionary `stock` has no key `"pen"`. What does `stock.get("pen", 0)` return?
11. Give one situation where an adjacency list is the better choice.

### Answers

1. A graph in which every edge has a value, such as a distance or cost.
2. 12 × 12 = **144** cells.
3. **5** edges (count the 1s). A has edges to **B and C**.
4. Each edge works both ways, so if row X column Y holds a value, row Y column X holds the same value.
5. **False.** Only a rooted tree has a root.
6. Visits 25, 37, 31; 33 is larger than 31 and 31's right branch is empty, so **33 is not present**.
7. 57 MOD 8 = 1 → position **1**. 82 MOD 8 = 2 → position **2**. 90 MOD 8 = 2, taken → position **3**.
8. Records are spread **evenly** through the table, and the function is **quick to compute**.
9. `count` equals the array size, so the queue is **full**: the enqueue is refused and an error is reported.
10. **0**, the default value.
11. When the graph is **sparse**, for example a large road network where each junction joins only a few others.

## Where marks are usually lost

- Calling a vertex a "point" or an edge a "line" in definitions instead of the specification's terms.
- Writing a weighted matrix with 1s instead of the weights.
- Mixing up rows and columns in a directed matrix, so every edge points the wrong way.
- Claiming adjacency lists are better for dense graphs, or matrices better for sparse ones.
- Giving "a tree has a root" or "a binary tree has two children per node" as definitions.
- Sending a larger value left, or a smaller value right, when building a BST.
- Placing a collided record in the first empty slot found anywhere, not the next available one.
- Giving only one property of a good hash function when asked for its properties.
- Testing for an empty priority queue by looking at the front item rather than `count`.
- Describing a dictionary as an ordered list, or forgetting that values are reached by key.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA: section 3.10 Advanced data structures.
