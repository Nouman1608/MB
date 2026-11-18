---
title: "AQA A-Level Computer Science (7517): Trees"
resourceType: "study-guides"
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
description: "Trees, rooted trees, binary trees and binary search trees for AQA A-Level Computer Science 7517 4.2.5, with insertion, searching and array representation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on one subtopic of AQA A-Level Computer Science
(7517): 4.2.5 Trees. The specification asks you to know that a tree is a
connected, undirected graph with no cycles (and that it does not have to
have a root), that a rooted tree has one vertex designated as the root,
that a binary tree is a rooted tree in which each node has at most two
children, that a common application of a binary tree is the binary
search tree, and to be familiar with typical uses for rooted trees.
Section 4.2.1.4 adds that you should know how to represent a structure
when a language has no built-in support for it. The overview of all the
4.2 structures is in the
[abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/).

## What makes a graph a tree?

A tree must pass three tests at once:

| Test | What it rules out |
|---|---|
| **Connected** | A graph in two separate pieces (that is two trees, sometimes called a forest) |
| **Undirected** | Edges with arrows; a tree's edges have no direction of their own |
| **No cycles** | Any route that leaves a vertex and returns to it without reusing an edge |

Two useful consequences follow, and both can be used to justify an
answer:

- A tree with *n* vertices always has exactly *n* − 1 edges. Add one
  more edge and you create a cycle; remove one and the graph is no
  longer connected.
- There is exactly **one path** between any pair of vertices. If there
  were two different paths, together they would form a cycle.

So a graph with 6 vertices and 6 edges cannot be a tree, whatever it
looks like. A graph with 6 vertices and 5 edges is a tree only if it is
also connected.

Notice that nothing here mentions a root, a top or a bottom. AQA is
explicit that a tree does not have to have a root.

## Rooted trees and their vocabulary

Choosing one vertex as the **root** turns a tree into a **rooted tree**.
The undirected edges now gain a sense of direction, away from the root,
which creates **parent-child relationships**. The specification states
that the root is the only node with no parent and all other nodes are
descendants of the root.

| Term | Meaning |
|---|---|
| Parent | The node directly above a node, on its path back to the root |
| Child | A node directly below another; every node except the root has exactly one parent |
| Leaf | A node with no children |
| Subtree | A node together with all its descendants |
| Descendant | Any node reached by moving down from a given node |

Any vertex of a tree can be chosen as the root, so the same tree can be
drawn as several different rooted trees.

## Binary trees and binary search trees

A **binary tree** is a rooted tree in which each node has **at most two
children**, called the left child and the right child. "At most" means
zero, one or two; a node with one child is still allowed.

A **binary search tree (BST)** is a binary tree that keeps an ordering
rule at every node: every value in the left subtree is less than the
node, and every value in the right subtree is greater than it. The rule
applies to the whole subtree, not just to the immediate children.

### Worked example: building a BST

Insert 41, 20, 65, 11, 29, 50, 91, 32 in that order into an empty tree.
Each new value starts at the root and moves left if it is smaller and
right if it is larger, until it reaches an empty position.

| Value | Path taken | Placed as |
|---|---|---|
| 41 | (tree empty) | Root |
| 20 | 20 < 41, go left | Left child of 41 |
| 65 | 65 > 41, go right | Right child of 41 |
| 11 | < 41 left, < 20 left | Left child of 20 |
| 29 | < 41 left, > 20 right | Right child of 20 |
| 50 | > 41 right, < 65 left | Left child of 65 |
| 91 | > 41 right, > 65 right | Right child of 65 |
| 32 | < 41, > 20, > 29 | Right child of 29 |

Drawn level by level, the tree is: 41 at the root; 20 and 65 below it;
11, 29, 50 and 91 on the next level; and 32 hanging to the right of 29.
The leaves are 11, 32, 50 and 91.

**Searching.** To find 32: compare with 41 (go left), 20 (go right), 29
(go right), 32 (found) - four comparisons. To search for 55: 41 (go
right), 65 (go left), 50 (go right), and the right pointer of 50 is
empty, so 55 is not in the tree after three comparisons. Each comparison
discards a whole subtree.

**Order of insertion matters.** Inserting the same eight values in
ascending order (11, 20, 29, ...) would make every node the right child
of the previous one. The tree would look like a list, and a search
could need eight comparisons instead of four. Binary tree search is
listed in 4.3.4.3 with time complexity O(log *n*), which assumes a
reasonably balanced tree; a tree built from sorted data loses that
advantage.

## Representing a binary tree without built-in support

Most languages have no built-in tree type, so a binary tree is usually
stored as an array of records (or three parallel arrays). Each record
holds the data and two pointers giving the array index of the left and
right child, with −1 meaning "no child". The tree from the worked
example, stored in insertion order:

| Index | Data | Left | Right |
|---|---|---|---|
| 0 | 41 | 1 | 2 |
| 1 | 20 | 3 | 4 |
| 2 | 65 | 5 | 6 |
| 3 | 11 | −1 | −1 |
| 4 | 29 | −1 | 7 |
| 5 | 50 | −1 | −1 |
| 6 | 91 | −1 | −1 |
| 7 | 32 | −1 | −1 |

A root pointer (here 0) records where the tree starts, and a free
pointer (here 8) records the next unused slot. Inserting a new value
means: store it at the free position, then walk down from the root and
set the left or right pointer of the correct parent to that index.

An insertion routine in AQA-style pseudocode:

```
SUBROUTINE Insert(value)
  Data[free] ← value
  Left[free] ← -1
  Right[free] ← -1
  IF root = -1 THEN
    root ← free
  ELSE
    current ← root
    placed ← False
    WHILE placed = False
      IF value < Data[current] THEN
        IF Left[current] = -1 THEN
          Left[current] ← free
          placed ← True
        ELSE
          current ← Left[current]
        ENDIF
      ELSE
        IF Right[current] = -1 THEN
          Right[current] ← free
          placed ← True
        ELSE
          current ← Right[current]
        ENDIF
      ENDIF
    ENDWHILE
  ENDIF
  free ← free + 1
ENDSUBROUTINE
```

The routine does not test whether the array is full; in an exam answer
that asks for robust code, add a check that `free` is within the array
bounds before storing the value. A dynamic version would allocate each
node on the heap and store references instead of indices.

## Typical uses for rooted trees

- **Hierarchical data**: a file system (folders containing folders and
  files), an organisation chart, or a website's menu structure. Each item
  has one parent, which a rooted tree enforces.
- **Searching and keeping data sorted**: a binary search tree supports
  fast search and insertion, and an in-order traversal outputs its
  contents in ascending order (traversals are traced in 4.3.2).
- **Processing syntax**: compilers and interpreters build syntax trees,
  and an expression such as (3 + 4) × 2 can be held as an expression
  tree whose post-order traversal gives Reverse Polish notation.
- **Decisions and games**: a tree of possible moves, where each child is
  a position reached from its parent.

When a question asks for a use, name the use and say what the tree
structure gives it: "a file system, because every file or folder sits
inside exactly one parent folder".

## Common mistakes

- Defining a tree as "a graph with a root" or "a graph with no cycles".
  Both connected and undirected are needed, and the root is optional.
- Saying a binary tree node "must have two children". It has **at most**
  two.
- Checking the BST rule only against a node's parent. A value placed in
  the left subtree of 41 must be less than 41 as well as obeying every
  node on the way down.
- Forgetting that −1 (or another rogue value) is needed to mark a missing
  child in an array representation.
- Claiming every BST search is O(log *n*) without mentioning balance.

## Exam technique for AQA command words

- **State / give**: one precise fact. "A leaf is a node with no
  children" is enough.
- **Describe**: the steps in order, for example how a value is inserted
  into a BST, starting from the root.
- **Explain**: a reason linked to a consequence. "Because each comparison
  discards one subtree, fewer items are checked than in a linear search
  of the same data."
- **Draw**: show every node, label values clearly and make left and
  right children visibly distinct.
- **Complete the table / trace**: update the Left and Right columns of
  the parent row as well as the new row; marks are often lost by filling
  only the new node.

## Next steps

- Condensed recall and a self-test are in the
  [Trees revision notes](/resources/aqa-a-level-computer-science-7517-trees-revision-notes/).
- Original exam-style questions with full answers are in the
  [Trees practice questions](/resources/aqa-a-level-computer-science-7517-trees-practice/).
- For graphs, the parent structure of trees, see the
  [abstract data types revision notes](/resources/aqa-a-level-computer-science-abstract-data-types-revision-notes/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.5 Trees -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
