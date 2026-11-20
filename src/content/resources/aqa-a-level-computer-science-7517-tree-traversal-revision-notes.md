---
title: "AQA A-Level Computer Science (7517): Tree-traversal -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Tree Traversal Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "tree-traversal-7517"
description: "Condensed AQA 7517 section 4.3.2 recall: pre-order, in-order and post-order traversal, the recursive algorithms, uses of each and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.3.2 Tree-traversal**, AQA A-Level Computer Science (7517): **trace pre-order, in-order and post-order traversal** and **describe their uses**. Full algorithms and worked traces are in the [tree-traversal study guide](/resources/aqa-a-level-computer-science-7517-tree-traversal/); exam-style questions are in the [tree-traversal practice questions](/resources/aqa-a-level-computer-science-7517-tree-traversal-practice/).

## The three orders

Each traversal is recursive, and always takes the **left subtree before the right**. Only the position of the node changes.

| Traversal | Order | Root appears |
|---|---|---|
| Pre-order | node, left, right | first |
| In-order | left, node, right | between the subtrees |
| Post-order | left, right, node | last |

## The algorithms

```
PreOrder(node):   IF node not empty: output node; PreOrder(left); PreOrder(right)
InOrder(node):    IF node not empty: InOrder(left); output node; InOrder(right)
PostOrder(node):  IF node not empty: PostOrder(left); PostOrder(right); output node
```

An **empty subtree** is the base case: do nothing and return.

## Worked check: binary search tree

Insert 40, 25, 60, 15, 30, 50, 70, 10, 28 in that order. The tree is:

- 40 has children 25 and 60.
- 25 has children 15 and 30; 60 has children 50 and 70.
- 15 has left child 10; 30 has left child 28.

| Traversal | Output |
|---|---|
| Pre-order | 40, 25, 15, 10, 30, 28, 60, 50, 70 |
| In-order | 10, 15, 25, 28, 30, 40, 50, 60, 70 |
| Post-order | 10, 15, 28, 30, 25, 50, 70, 60, 40 |

In-order gives **ascending** order because the left subtree holds smaller values and the right holds larger.

## Worked check: expression tree

(8 + 4) × (9 − 3) is stored as: root `*`; left child `+` with leaves 8 and 4; right child `-` with leaves 9 and 3.

| Traversal | Output | Form |
|---|---|---|
| Pre-order | `* + 8 4 - 9 3` | prefix |
| In-order | `8 + 4 * 9 - 3` | infix, **brackets missing** |
| Post-order | `8 4 + 9 3 - *` | postfix (Reverse Polish) |

Post-order output needs no brackets and can be evaluated with a stack: 12, 6, then 72.

## Uses

| Traversal | Use | Why it fits |
|---|---|---|
| Pre-order | Copying a tree | A parent is created before its children, so children can be attached as they are made |
| In-order | Outputting a binary search tree in ascending order | Left (smaller), node, right (larger) |
| Post-order | Infix to Reverse Polish conversion; producing a postfix expression from an expression tree | Operands are output before their operator |
| Post-order | Emptying a tree | Children are deleted before their parent, so no references are lost |

## Quick tracing method

1. Write the pattern, for example "node, left, right", beside the tree.
2. Apply it to the root, treating each subtree as a smaller tree.
3. Cross out empty subtrees.
4. Count: every node must appear exactly once.

**Flag method for small trees:** walk round the outside of the tree keeping it on your left. Output a node on the first pass for pre-order, on the second (underneath) for in-order, on the third (from the right) for post-order.

## Facts worth knowing

- Pre-order starts with the root. Post-order ends with the root.
- In-order of a **binary search tree** is sorted. In-order of any other binary tree is not.
- The number of items output equals the number of nodes.
- A leaf produces the same output in all three orders (just itself).

## Reading the recursion

A trace of a recursive subroutine can be written as a list of calls. For the small tree with root 8, left child 3 and right child 12, a pre-order traversal runs like this:

| Call | Action |
|---|---|
| PreOrder(8) | output 8, then call on left child |
| PreOrder(3) | output 3, then call on its empty left subtree (nothing), then its empty right subtree (nothing) |
| PreOrder(12) | output 12, then both subtrees empty |

The output is 8, 3, 12. Each call finishes only when both of its subtree calls have finished, which is how the algorithm backtracks. The computer keeps the waiting calls on the **call stack**, so a depth-first walk of a tree is a stack-based process, just as depth-first search of a graph is.

## Tree shapes that cause slips

- **A node with only a right child.** Its left subtree is empty, so in-order outputs the node immediately and then moves right. Pre-order and post-order treat the empty left subtree as nothing too.
- **A node with only a left child.** In-order outputs the left subtree, then the node, then nothing more.
- **A long chain.** If every node has only a right child, pre-order and in-order both list the nodes from top to bottom and post-order lists them from bottom to top. If every node has only a left child, pre-order lists them top to bottom and in-order and post-order list them bottom to top. Either way every node is visited once.
- **Duplicates in a binary search tree.** If equal values go to the right, in-order still lists them in non-decreasing order.

## Exam traps

- Taking the right subtree before the left.
- Forgetting that every subtree follows the pattern, not just the root.
- Saying in-order always gives sorted output.
- Giving in-order of an expression tree as correct infix without brackets.
- Missing out a leaf or listing a node twice.

## Key terms

| Term | Definition |
|---|---|
| Binary tree | A rooted tree where each node has at most two children |
| Root | The top node, with no parent |
| Leaf | A node with no children |
| Subtree | A node together with all of its descendants |
| Pre-order | Traversal that outputs the node, then the left subtree, then the right |
| In-order | Traversal that outputs the left subtree, then the node, then the right |
| Post-order | Traversal that outputs the left subtree, then the right, then the node |
| Expression tree | A tree whose internal nodes are operators and whose leaves are operands |

## Self-test

1. Which traversal outputs the root first?
2. Which traversal outputs the root last?
3. Which traversal outputs a binary search tree in ascending order?
4. Give the base case of the recursive algorithms.
5. A binary search tree has root 8, left child 3 and right child 12. Give the pre-order output.
6. Give the in-order output of the same tree.
7. Give the post-order output of the same tree.
8. Which traversal of an expression tree gives Reverse Polish notation?
9. Why is post-order used to empty a tree?
10. Which traversal is used to copy a tree?

**Answers**

1. Pre-order.
2. Post-order.
3. In-order.
4. An empty subtree: do nothing.
5. 8, 3, 12.
6. 3, 8, 12.
7. 3, 12, 8.
8. Post-order.
9. Each node is removed only after its children, so no child is lost or left unreachable.
10. Pre-order.

## Related resources

- [Tree-traversal study guide](/resources/aqa-a-level-computer-science-7517-tree-traversal/)
- [Tree-traversal practice questions](/resources/aqa-a-level-computer-science-7517-tree-traversal-practice/)
- [Trees revision notes for 4.2.5](/resources/aqa-a-level-computer-science-7517-trees-revision-notes/)
- [Reverse Polish revision notes](/resources/aqa-a-level-computer-science-7517-reverse-polish-revision-notes/)
