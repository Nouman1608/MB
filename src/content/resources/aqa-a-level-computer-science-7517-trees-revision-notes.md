---
title: "AQA A-Level Computer Science (7517): Trees -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "trees-7517"
description: "Condensed AQA A-Level Computer Science 7517 notes on 4.2.5 Trees: definitions, rooted and binary trees, BST rules, array storage, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.5 Trees** in AQA A-Level Computer Science
(7517). The full explanation, with a worked insertion and pseudocode, is
in the [Trees study guide](/resources/aqa-a-level-computer-science-7517-trees/).

## The definitions you must be able to write

- **Tree**: a connected, undirected graph with no cycles. It does **not**
  need a root.
- **Rooted tree**: a tree in which one vertex has been designated as the
  root. This creates parent-child relationships. The root is the only
  node with no parent; all other nodes are descendants of the root.
- **Binary tree**: a rooted tree in which each node has **at most two**
  children.
- **Binary search tree (BST)**: a common application of a binary tree,
  in which values in a node's left subtree are smaller than the node and
  values in its right subtree are larger.

## Key terms

| Term | Definition |
|---|---|
| **Vertex / node** | An item in the tree |
| **Edge / arc** | A link between two nodes |
| **Root** | The designated starting node; the only node with no parent |
| **Parent** | The node directly above a given node |
| **Child** | A node directly below a given node |
| **Leaf** | A node with no children |
| **Subtree** | A node and all of its descendants |
| **Descendant** | Any node reached by moving down from a given node |
| **Left / right pointer** | Index (or reference) of a node's left or right child |
| **Null pointer** | A rogue value such as −1 showing there is no child |

## Quick facts that earn marks

- A tree with *n* nodes has exactly *n* − 1 edges.
- There is exactly one path between any two nodes of a tree.
- Any node can be chosen as the root, giving different rooted trees from
  the same tree.
- A binary tree node may have 0, 1 or 2 children.
- The BST rule applies to whole subtrees, not just to a node's parent.

## Is it a tree? A three-question check

| Ask | If the answer is no |
|---|---|
| Is every node reachable from every other? | Not connected, so not a tree |
| Are the edges undirected? | A directed graph is not a tree in AQA's definition |
| Is there any cycle? | A cycle means it is not a tree |

Shortcut: count. 7 nodes with 7 edges must contain a cycle. 7 nodes with
6 edges is a tree only if it is connected.

## Inserting into a BST

1. Start at the root.
2. If the new value is smaller, go to the left child; if larger, go to
   the right child.
3. Repeat until the pointer you need is empty.
4. Place the value there and set the parent's pointer to it.

Mini example: insert M, D, R, A, G into an empty tree. M is the root; D
is left of M; R is right of M; A is left of D; G is right of D.

## Searching a BST

Compare with the current node: equal means found; smaller means go left;
larger means go right; an empty pointer means not present. Each step
discards a subtree. Binary tree search has time complexity O(log *n*)
(4.3.4.3) when the tree is reasonably balanced. Inserting data that is
already sorted produces a tree shaped like a list, so a search may visit
every node.

## Storing a binary tree in arrays

| Index | Data | Left | Right |
|---|---|---|---|
| 0 | M | 1 | 2 |
| 1 | D | 3 | 4 |
| 2 | R | −1 | −1 |
| 3 | A | −1 | −1 |
| 4 | G | −1 | −1 |

Also keep a **root pointer** (0) and a **free pointer** (next empty
index, here 5). Adding a node fills the free slot **and** updates one
parent pointer.

## Typical uses for rooted trees

| Use | Why a rooted tree fits |
|---|---|
| File systems and folder structures | Each file or folder has exactly one parent folder |
| Organisation charts, menus | A strict hierarchy from a single top item |
| Binary search trees | Fast searching; in-order traversal gives sorted output |
| Syntax and expression trees | Compilers break code into nested parts; post-order gives Reverse Polish notation |
| Game or decision trees | Each position leads to child positions |

## Exam traps

- Leaving out "connected" or "undirected" from the definition of a tree.
- Saying a tree must have a root; only a rooted tree does.
- Saying each node of a binary tree **has** two children.
- Placing a value using only its parent: 45 inserted into a tree with
  root 50 and left child 30 goes right of 30, because it is less than 50
  but greater than 30.
- Filling in the new row of an array representation but not updating the
  parent's Left or Right pointer.
- Assuming a BST search is always fast without considering how the tree
  was built.

## Self-test

1. Define a tree as AQA uses the term.
2. Does a tree need a root?
3. A graph has 9 vertices and 9 edges. Can it be a tree? Why?
4. What is the only node in a rooted tree with no parent?
5. Can a node in a binary tree have exactly one child?
6. Insert 30, 15, 40, 10, 20, 35 into an empty BST. What is the right
   child of 15?
7. In that tree, which nodes are leaves?
8. How many comparisons are needed to find 35 in that tree?
9. In an array representation, what does a Left value of −1 mean?
10. Give one typical use of a rooted tree, other than a binary search
    tree.
11. Why can inserting sorted data into a BST make searching slower?
12. Which traversal of a BST outputs its values in ascending order?

**Answers:** 1. A connected, undirected graph with no cycles. 2. No; a
rooted tree is one where a root has been designated. 3. No; a tree with
9 vertices has exactly 8 edges, so 9 edges means there is a cycle. 4.
The root. 5. Yes; at most two children means 0, 1 or 2. 6. 20. 7. 10, 20
and 35. 8. Three: 30 (go right), 40 (go left), 35 (found). 9. The node
has no left child. 10. For example a file system's folder hierarchy, an
expression tree in a compiler or an organisation chart. 11. Each new
value becomes the right child of the last, so the tree is shaped like a
list and a search may have to check every node. 12. In-order.

## Next steps

- Practise drawing, searching and storing trees with the
  [Trees practice questions](/resources/aqa-a-level-computer-science-7517-trees-practice/).
- Revise graphs, queues and stacks alongside trees using the
  [abstract data types revision notes](/resources/aqa-a-level-computer-science-abstract-data-types-revision-notes/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.5 Trees -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
