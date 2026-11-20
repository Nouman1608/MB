---
title: "OxfordAQA A-Level Computer Science (9645): Trees -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Trees Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.10.2 Trees: tree definition, rooted and binary trees, binary search tree rules, insertion and search traces, self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.10.2 Trees** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.10 Advanced data structures). For explanations and worked examples, see the [trees study guide](/resources/oxfordaqa-a-level-computer-science-9645-trees/); then practise with the [trees practice questions](/resources/oxfordaqa-a-level-computer-science-9645-trees-practice/).

## What the specification requires

- A **tree** is a connected, undirected graph with no cycles. A tree does not have to have a root.
- A **rooted tree** has one vertex designated the root. It has parent-child relationships. The root is the only node with no parent; all other nodes are descendants of the root. (Example: a class hierarchy, with Object as the root.)
- A **binary tree** is a rooted tree in which each node has at most two children.
- Understand how a binary tree can be used as a **binary search tree**.

## Key terms

| Term | Meaning |
|---|---|
| Tree | Connected, undirected graph with no cycles |
| Cycle | A path that returns to its start without retracing its steps |
| Root | The top node; the only node with no parent |
| Parent / child | The node directly above / below a node |
| Leaf | A node with no children |
| Sibling | A node with the same parent |
| Subtree | A node and all of its descendants |
| Binary tree | Each node has at most two children (left and right) |
| Binary search tree | A binary tree in which left subtree values < node < right subtree values |

## Facts about trees

- Exactly **one path** between any two vertices.
- *n* vertices means **n − 1 edges**.
- A connected graph with *n* vertices and *n* edges contains a cycle, so it is not a tree.
- Removing an edge disconnects a tree; adding an edge makes a cycle.

## Binary search tree rule

For every node: all values in the **left** subtree are **smaller**; all values in the **right** subtree are **larger**.

**Insert:** start at the root, go left if smaller, right if larger, and put the value in the first empty place.

**Search:** the same comparisons; stop when found or when you reach an empty place.

## Worked reminder: building and searching

Insert 45, 20, 60, 10, 30, 55, 70, 25, 65 in order.

```
              45
            /    \
         20        60
        /  \      /  \
      10    30  55    70
           /          /
         25         65
```

- Leaves: 10, 25, 55, 65. Root: 45. Height: 4 levels.
- Parent of 25 is 30. The sibling of 20 is 60.
- Search for 65: 45 (right), 60 (right), 70 (left), 65 found: **4 comparisons**.
- Search for 28: 45 (left), 20 (right), 30 (left), 25 (right, empty). Not found after **4 comparisons**.

## Node structure in code

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

A tree can also be held in a table: each row holds a node's left pointer, value and right pointer, with – for no child.

## Efficiency

- A balanced BST halves the search area at each step, so about log₂ *n* comparisons are needed (1 000 values: at most about 10).
- Inserting values already in order, such as 5, 10, 15, 20, 25, gives a **chain** with 5 levels. Searching is then as slow as a list.
- A mixed order, such as 15, 10, 20, 5, 25, gives a tree of 3 levels.

## Checking whether a tree is a valid BST

For each node, ask two questions.

1. Is everything in the left subtree smaller than the node?
2. Is everything in the right subtree larger than the node?

It is not enough to compare a node with its own children. A value deeper down can break the rule. For example, a tree with root 40, left child 25 and the right child of 25 being 45 is **not** a valid BST: 45 is in the left subtree of 40, but 45 is larger than 40.

## Real examples of rooted trees

| Example | Root | Parent-child relationship |
|---|---|---|
| Class hierarchy | `Object` | A class's parent is the class it inherits from |
| Folder structure | The top-level drive or folder | A folder contains sub-folders and files |
| Family tree of descendants | The earliest ancestor | Parent and child |
| Expression tree | The final operator | An operator and its operands |
| Menu system | The main menu | A menu and its sub-menus |

In each case there is exactly one root, every other item has exactly one parent, and there are no cycles.

## Reading a table of nodes

Each row holds a left pointer, a value and a right pointer. Start from the root row, follow the pointer to the left if the search value is smaller and to the right if it is larger, and stop at a dash. A dash in the pointer you need means the value is not in the tree.

## Exam traps

- **Three conditions.** Connected, undirected, no cycles.
- **Root is optional for a plain tree.** Only a rooted tree has one.
- **Binary tree is not the same as BST.** A BST also has the ordering rule.
- **Wrong side.** Smaller goes left, larger goes right.
- **Insertion always starts at the root.** Do not put a value in the first free space.
- **Shape matters.** Efficient searching needs a reasonably balanced tree.

## Quick self-test

1. What is a tree, in graph terms?
2. How many edges does a tree with 12 vertices have?
3. What is special about the root?
4. What is a leaf?
5. How many children can a node of a binary tree have at most?
6. State the BST rule.
7. In the worked tree above, which value is the right child of 45?
8. How many comparisons does it take to find 55?
9. Why does inserting 1, 2, 3, 4, 5 in order give a poor BST?
10. Which structure in object-oriented programming is a rooted tree?
11. A connected graph has 9 vertices and 9 edges. Is it a tree?
12. Can a tree have a cycle?

### Answers

1. A connected, undirected graph with no cycles.
2. 11.
3. It is the only node with no parent; all other nodes are its descendants.
4. A node with no children.
5. Two.
6. For each node, the left subtree holds smaller values and the right subtree holds larger values.
7. 60.
8. 3 comparisons: 45, 60, 55.
9. Every value goes to the right of the one before, so the tree is a chain and searching is slow.
10. A class hierarchy (inheritance), with Object as the root.
11. No: a connected graph with as many edges as vertices contains a cycle.
12. No, a tree has no cycles by definition.

## Next steps

- [Trees study guide](/resources/oxfordaqa-a-level-computer-science-9645-trees/)
- [Trees practice questions](/resources/oxfordaqa-a-level-computer-science-9645-trees-practice/)
- [Hash tables revision notes](/resources/oxfordaqa-a-level-computer-science-9645-hash-tables-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.2 Trees.
