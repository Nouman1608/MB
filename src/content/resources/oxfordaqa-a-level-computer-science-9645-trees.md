---
title: "OxfordAQA A-Level Computer Science (9645): Trees"
seoTitle: "OxfordAQA A-Level CS 9645 Trees Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "trees-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.10.2 in depth: trees as connected graphs with no cycles, rooted and binary trees, and binary search trees with insertion and search traces."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.10.2 Trees** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.10 Advanced data structures (A-level). The specification asks you to know that a **tree is a connected, undirected graph with no cycles** (and notes that a tree does not have to have a root); that a **rooted tree** is a tree in which one vertex has been designated the root, giving parent-child relationships, where the root is the only node with no parent and all other nodes are descendants of the root; that a **binary tree** is a rooted tree in which each node has at most two children; and to understand how a binary tree can be used as a **binary search tree**. The specification's example of a rooted tree is a class hierarchy in object-oriented programming, with Object as the root and all other classes descending from it.

For quick recall use the [trees revision notes](/resources/oxfordaqa-a-level-computer-science-9645-trees-revision-notes/), and test yourself with the [trees practice questions](/resources/oxfordaqa-a-level-computer-science-9645-trees-practice/). The [advanced data structures study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) covers all of topic 3.10. The ways of visiting every node of a tree (pre-order, in-order and post-order) belong to 3.11.2 Tree algorithms; this page concentrates on what a tree is and how a binary search tree is built and searched. Code is Python, and the output shown was produced by running the code.

## Trees as graphs

A tree is a special kind of graph (see the [graphs study guide](/resources/oxfordaqa-a-level-computer-science-9645-graphs/)). It is:

- **connected**: there is a path between every pair of vertices, so it is all in one piece;
- **undirected**: edges have no direction; and
- **acyclic**: there are no **cycles**, meaning no path that leads from a vertex back to itself without retracing its steps.

Two facts follow from this and are often useful.

- Between any two vertices of a tree there is **exactly one** path.
- A tree with *n* vertices has exactly **n − 1 edges**. Adding one more edge would create a cycle; removing one would disconnect the tree.

**Worked example.** A graph has 7 vertices and 6 edges and is connected. Is it a tree? A connected graph with *n* vertices and *n* − 1 edges has no cycle (a cycle would have given a spare edge), so yes, it is a tree. A connected graph with 7 vertices and 7 edges must contain a cycle, so it is not a tree.

The specification notes that a tree does **not** have to have a root. The root is added when we choose to treat one vertex as special.

## Rooted trees

In a **rooted tree** one vertex is designated the **root**. Edges are then thought of as running downwards from the root, which gives each vertex a place in a hierarchy.

| Term | Meaning |
|---|---|
| Root | The one node with no parent; the top of the tree |
| Parent | The node directly above a node |
| Child | A node directly below a node |
| Sibling | A node that shares the same parent |
| Leaf | A node with no children |
| Descendant | Any node below a given node, through any number of steps |
| Subtree | A node together with all of its descendants |
| Depth of a node | The number of edges from the root to that node |
| Height of the tree | The number of levels (or the longest path); here counted as the number of levels |

All the other nodes are descendants of the root. A class hierarchy is a good example: `Object` is the root, every other class descends from it, and a class's parent is the class it inherits from. A folder structure on a computer, a family tree of descendants and the organisation of a company are also rooted trees.

## Binary trees

A **binary tree** is a rooted tree in which each node has **at most two children**. The children are called the **left child** and the **right child**. A node may have no children, only a left child, only a right child, or both.

A binary tree is usually stored with a **node** for each item. Each node holds its value and a pointer (or index) to its left child and its right child, with a null value where there is no child. In Python:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

## Binary search trees

A **binary search tree (BST)** is a binary tree in which the values are arranged so that, for every node:

- every value in the **left subtree** is **less than** the node's value, and
- every value in the **right subtree** is **greater than** the node's value.

(This guide assumes that values are distinct.) This rule is what makes searching fast.

### Building a BST

To **insert** a value, start at the root and compare:

1. If the value is less than the current node, go left; if it is greater, go right.
2. Repeat until you reach an empty position.
3. Put a new node there.

**Worked example.** Insert 50, 30, 70, 20, 40, 60, 80 and 35, in that order.

1. 50 becomes the root.
2. 30 < 50, so it goes left of 50.
3. 70 > 50, so it goes right of 50.
4. 20 < 50, go left to 30; 20 < 30, so it goes left of 30.
5. 40 < 50, go left to 30; 40 > 30, so it goes right of 30.
6. 60 > 50, go right to 70; 60 < 70, so it goes left of 70.
7. 80 > 50, go right to 70; 80 > 70, so it goes right of 70.
8. 35 < 50, go left to 30; 35 > 30, go right to 40; 35 < 40, so it goes left of 40.

The tree is:

```
            50
          /    \
       30        70
      /  \      /  \
    20    40  60    80
         /
       35
```

It has four levels. The same data can also be held in a table in which each row holds a node's left pointer, value and right pointer, with the rows in insertion order.

| Index | Left | Value | Right |
|---|---|---|---|
| 0 | 1 | 50 | 2 |
| 1 | 3 | 30 | 4 |
| 2 | 5 | 70 | 6 |
| 3 | – | 20 | – |
| 4 | 7 | 40 | – |
| 5 | – | 60 | – |
| 6 | – | 80 | – |
| 7 | – | 35 | – |

### Searching a BST

To search for a value, follow the same comparisons as for insertion: go left if the value is smaller, right if it is larger, and stop when you find it or reach an empty position.

```python
def search(root, v):
    current = root
    while current is not None:
        if v == current.value:
            return True
        if v < current.value:
            current = current.left
        else:
            current = current.right
    return False
```

- Search for **35**: compare with 50 (go left), 30 (go right), 40 (go left), 35 (found). That is **4 comparisons**.
- Search for **65**: compare with 50 (go right), 70 (go left), 60 (go right to an empty position). The value is **not present**, after 3 comparisons.
- Search for **80**: compare with 50, 70, 80 and it is found after **3 comparisons**.

### Why a BST is efficient

Each comparison discards one whole subtree, so in a **well-balanced** tree each step roughly **halves** the number of values still to consider. A balanced BST of 1 000 values needs at most about 10 comparisons, because 2^10 = 1 024. A linear search of an unsorted list of 1 000 values could need 1 000.

The efficiency depends on the shape. If the values are inserted in order, such as 10, 20, 30, 40, 50, every value goes to the right of the one before. The tree becomes a **chain** with 5 levels, and finding 50 takes 5 comparisons, as slow as a list. A balanced insertion order such as 30, 20, 40, 10, 25, 35, 50 gives only 3 levels, and 50 is found in 3 comparisons.

The **in-order** traversal of a BST visits the values in ascending order. For the tree above, this is 20, 30, 35, 40, 50, 60, 70, 80. This is dealt with in the tree algorithms sub-topic.

## Exam technique

- **Define a tree precisely:** connected, undirected, no cycles. Mention the root only for a rooted tree.
- **Use the terms root, parent, child, leaf** accurately, and say that the root is the only node with no parent.
- **State the binary search tree rule** in both directions: left is smaller, right is larger.
- **Show the path** when asked how a value is searched for, listing each comparison and each turn.
- **Draw the tree after each insertion** in a build question, or number your steps.
- **Mention balance** when asked about efficiency.

## Common mistakes

- Saying that a tree has cycles, or that it is directed.
- Saying that every tree must have a root, when only a rooted tree has one.
- Confusing a binary tree (at most two children) with a binary search tree (ordered values).
- Putting a smaller value on the right.
- Placing a new value at the first free space instead of following the comparisons from the root.
- Saying that a BST is always fast. A badly shaped one is slow.

## Next steps

- [Trees revision notes](/resources/oxfordaqa-a-level-computer-science-9645-trees-revision-notes/)
- [Trees practice questions](/resources/oxfordaqa-a-level-computer-science-9645-trees-practice/)
- [Hash tables study guide](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.2 Trees.
