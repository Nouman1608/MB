---
title: "OxfordAQA A-Level Computer Science: Advanced data structures (9645)"
seoTitle: "OxfordAQA A-Level CS Advanced Data Structures Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA International A-level Computer Science topic 10: graphs, trees, hash tables, priority queues and dictionaries, worked through."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches topic 10, Advanced data structures, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It covers sections 3.10.1 to 3.10.5. All of it is International A-level only, assessed in Unit 3: Advanced Programming, which is taken on screen in C#, Python or VB.Net.

The specification does not define its own pseudo-code conventions, so code on this page is written in Python, one of the three exam languages. Lists start at index 0.

Pair this guide with the [revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/). The array and queue skills from AS are in [arrays and lists](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/). For the full course, see the [course hub](/boards/oxfordaqa/a-level/computer-science/) and the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/). A short [free diagnostic](/diagnostics/) will show which outcomes need the most work.

## What this topic covers

| Section | Outcomes in brief | Status |
|---|---|---|
| 3.10.1 Graphs | Explain graph terms; give typical uses; represent a graph as an adjacency matrix or adjacency list; compare the two | International A-level only |
| 3.10.2 Trees | Define tree, rooted tree and binary tree; use a binary tree as a binary search tree | International A-level only |
| 3.10.3 Hash tables | Describe hash tables and their uses; apply simple hash functions; state the properties of a good one; handle collisions by rehashing; compare a hash table with an array | International A-level only |
| 3.10.4 Priority queues | Define a priority queue; enqueue and dequeue; say when one is suitable; implement one in a one-dimensional array, including empty and full tests | International A-level only |
| 3.10.5 Dictionaries | Describe a dictionary and simple applications; use a library dictionary | International A-level only |

Searching graphs and traversing trees belong to 3.11 Advanced algorithms, so they are only mentioned here.

## 3.10.1 Graphs

A **graph** is a data structure for representing complex relationships between items.

- A **vertex** (or **node**) is one item, such as a town or a web page.
- An **edge** (or **arc**) joins two vertices and shows that they are related.
- In an **undirected graph** every edge works both ways: a footpath between two villages.
- In a **directed graph** each edge has a direction, shown by an arrow: "account W follows account X" does not mean X follows W.
- In a **weighted graph** each edge carries a value, such as a distance, a time or a cost.

**Typical uses:** road and rail maps (weights are distances), computer networks, social networks and links between web pages.

### Adjacency matrix

An adjacency matrix is a two-dimensional array with one row and one column per vertex. For an unweighted graph, a cell holds 1 if an edge exists and 0 if not. For a weighted graph, the cell holds the weight. There is more than one convention for "no edge" in a weighted matrix (0, a dash or ∞), so say which you use.

**Worked example 1: weighted, undirected.** A trail map has vertices F, G, H, J and K, with edges F–G 4, F–H 7, G–H 2, G–J 5, H–K 3 and J–K 6 (in kilometres). Using 0 for no edge:

| | F | G | H | J | K |
|---|---|---|---|---|---|
| **F** | 0 | 4 | 7 | 0 | 0 |
| **G** | 4 | 0 | 2 | 5 | 0 |
| **H** | 7 | 2 | 0 | 0 | 3 |
| **J** | 0 | 5 | 0 | 0 | 6 |
| **K** | 0 | 0 | 3 | 6 | 0 |

The graph is undirected, so each edge appears twice and the matrix is symmetric about the leading diagonal.

### Adjacency list

An adjacency list stores, for each vertex, only the vertices it connects to (with weights if the graph is weighted). For the trail map:

```
F: G(4), H(7)
G: F(4), H(2), J(5)
H: F(7), G(2), K(3)
J: G(5), K(6)
K: H(3), J(6)
```

**Worked example 2: directed, unweighted.** On a small app, W follows X and Y, X follows Z, Y follows Z, and Z follows W.

| | W | X | Y | Z |
|---|---|---|---|---|
| **W** | 0 | 1 | 1 | 0 |
| **X** | 0 | 0 | 0 | 1 |
| **Y** | 0 | 0 | 0 | 1 |
| **Z** | 1 | 0 | 0 | 0 |

Read a row as "from" and a column as "to"; the matrix is not symmetric. In Python the adjacency list can be a dictionary of lists: `{"W": ["X", "Y"], "X": ["Z"], "Y": ["Z"], "Z": ["W"]}`.

### Comparing the two

| Use an adjacency matrix when... | Use an adjacency list when... |
|---|---|
| edges are added or removed often (change one cell) | the graph is sparse: few edges compared with the number of vertices |
| you often test whether an edge exists (one cell look-up) | memory matters, because only existing edges are stored |
| the graph is dense: many edges compared with the number of vertices | |

**Worked example 3.** A delivery map has 1,000 vertices and 2,500 undirected edges. A matrix needs 1,000 × 1,000 = 1,000,000 cells, almost all 0. A list stores each edge once from each end: 5,000 entries. The graph is sparse, so use an adjacency list.

## 3.10.2 Trees

- A **tree** is a connected, undirected graph with no cycles. A tree does not have to have a root.
- A **rooted tree** is a tree in which one vertex is designated the **root**. This creates parent-child relationships. The root is the only node with no parent; every other node is a descendant of the root. A class hierarchy in object-oriented programming is an example, with Object as the root.
- A **binary tree** is a rooted tree in which each node has **at most two** children.

To test whether a graph is a tree, check that it is undirected, connected (every vertex reachable from every other) and has no cycles (no route returns to its start vertex without reusing an edge).

### Binary search trees

A binary tree becomes a **binary search tree** when every node obeys one rule: values in its left subtree are smaller, values in its right subtree are larger. To insert, start at the root and go left if the new value is smaller, right otherwise, until you reach an empty position.

**Worked example 4.** Insert 52, 30, 71, 18, 44, 60, 85, 39 in that order.

```
            52
          /    \
        30      71
       /  \    /  \
     18   44  60   85
         /
       39
```

39 is smaller than 52, larger than 30 and smaller than 44, so it becomes the left child of 44.

**Searching for 39** visits 52, 30, 44, 39: four comparisons. **Searching for 65** visits 52 (go right), 71 (go left), 60 (go right) and finds an empty position, so 65 is absent after three comparisons. Each comparison discards a whole subtree, so a well-balanced tree is quick to search.

In code, each node can be an object with a value and two references (classes are in 3.9). A recursive insert:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def insert(node, value):
    if node is None:
        return Node(value)
    if value < node.value:
        node.left = insert(node.left, value)
    else:
        node.right = insert(node.right, value)
    return node
```

## 3.10.3 Hash tables

A **hash table** maps keys to values. A **hash function** uses a record's key to calculate the position at which the record is stored. Hash functions often use MOD so the result always lies in the range 0 to table size − 1.

A **good hash function** spreads records evenly through the table and is quick to compute.

When two keys produce an identical hash value, that is a **collision**. The specification handles it by **rehashing**: the later record goes into the next available position. In this guide the search for a free position wraps round from the last position to position 0.

**Worked example 5.** A table has 11 positions (0 to 10) and the hash function is `key MOD 11`. Insert 3817, 2204, 5930, 1146, 7728, 6688.

| Key | key MOD 11 | Stored at |
|---|---|---|
| 3817 | 0 | 0 |
| 2204 | 4 | 4 |
| 5930 | 1 | 1 |
| 1146 | 2 | 2 |
| 7728 | 6 | 6 |
| 6688 | 0 | 0, 1, 2 taken → **3** |

**Searching** repeats the same steps. To find 6688, start at 0 and check 0, 1, 2, 3: found after four comparisons. To look for 8603 (8603 MOD 11 = 1), check positions 1, 2, 3 and 4, none of which hold 8603, then reach empty position 5: the key is absent.

A poor hash function clusters records. Adding the character codes of a word and taking MOD 7 gives "TEA" and "ATE" the same value (84 + 69 + 65 = 218, and 218 MOD 7 = 1), so every anagram collides.

**Uses:** finding a record directly from its key (a member number, a username, a product code) and implementing dictionaries.

**Hash table compared with an array**

- Advantage: a record is found by calculating its position from its key, so there is no linear or binary search through the data.
- Advantage: inserting does not require existing records to be shifted to keep an order.
- Disadvantage: collisions slow inserts and searches, and get worse as the table fills.
- Disadvantage: spare positions must be left empty, which uses more memory.
- Disadvantage: records are not held in key order, so producing a sorted list needs extra work.

## 3.10.4 Priority queues

A **priority queue** is a queue in which each item has a priority. Items leave in priority order; items with the same priority leave in the order they arrived. They suit scheduling jobs or processes by importance, where urgent work must jump ahead. The specification notes priority queues can be used to implement some graphing algorithms, such as breadth-first search or Dijkstra's algorithm.

**Implementation in a one-dimensional array.** Keep a fixed-size array and a `count`. Here 1 is the highest priority. Keep the array in priority order:

- **Enqueue:** if `count` equals the array size, the queue is **full**. Otherwise, start at the rear and move each item with a lower priority (larger number) one place back, then put the new item in the gap and add 1 to `count`.
- **Dequeue:** if `count` is 0, the queue is **empty**. Otherwise, take the item at index 0, move every other item forward one place, and subtract 1 from `count`.

**Worked example 6.** Array size 5. Operations: enqueue scan (2), print (3), save (1), sync (2), dequeue, enqueue mail (1).

| Operation | Array contents (front first) | count |
|---|---|---|
| enqueue scan (2) | scan | 1 |
| enqueue print (3) | scan, print | 2 |
| enqueue save (1) | save, scan, print | 3 |
| enqueue sync (2) | save, scan, sync, print | 4 |
| dequeue → save | scan, sync, print | 3 |
| enqueue mail (1) | mail, scan, sync, print | 4 |

sync goes after scan because both have priority 2 and scan arrived first.

## 3.10.5 Dictionaries

A **dictionary** is a collection of key-value pairs in which each value is accessed by its key. Simple applications include counting how often items occur, looking up a code to get a name, and storing settings by name.

Python's built-in `dict` type is a dictionary. In C# and VB.Net, the library class is `Dictionary<TKey,TValue>` in `System.Collections.Generic`.

**Worked example 7.** Count the birds in a survey log.

```python
log = ["heron", "finch", "heron", "stork", "finch", "heron"]
counts = {}
for bird in log:
    counts[bird] = counts.get(bird, 0) + 1
print(counts)
```

Output: `{'heron': 3, 'finch': 2, 'stork': 1}`. `counts.get(bird, 0)` returns 0 for a bird not yet seen.

## Common errors

- Making a directed graph's matrix symmetric by copying each edge into both cells.
- Saying "a tree must have a root". Only a rooted tree has one.
- Defining a binary tree as "each node has two children": it is *at most* two.
- Placing a colliding record in any empty slot instead of the next available one.
- Stopping a hash-table search at the first non-matching record instead of at a match or an empty position.
- Testing a priority queue for full with `count > size`: it is full when `count` equals the size.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA: section 3.10 Advanced data structures.
