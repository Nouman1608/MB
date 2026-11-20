---
title: "AQA A-Level Computer Science (7517): Tree-traversal"
seoTitle: "AQA A-Level Computer Science Tree Traversal Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.3.2 Tree-traversal: tracing pre-order, in-order and post-order traversal of binary trees and describing what each is used for."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.3.2 Tree-traversal** in AQA A-Level Computer Science (7517). The specification asks you to **trace the pre-order, in-order and post-order tree-traversal algorithms** and to **describe uses of tree-traversal algorithms**. Its examples of uses are: pre-order for copying a tree; in-order for a binary search tree, outputting the contents in ascending order; post-order for infix to Reverse Polish conversions, producing a postfix expression from an expression tree, and emptying a tree.

The wider [fundamentals of algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) summarises section 4.3. This page takes the three traversals one at a time, gives the recursive algorithm for each, and works through traces on a binary search tree and on an expression tree. Condensed notes are in the [tree-traversal revision notes](/resources/aqa-a-level-computer-science-7517-tree-traversal-revision-notes/), and exam-style questions are in the [tree-traversal practice questions](/resources/aqa-a-level-computer-science-7517-tree-traversal-practice/).

## Binary trees and traversal

A **binary tree** is a rooted tree in which each node has at most two children, a **left child** and a **right child**. A node with no children is a **leaf**. The **left subtree** of a node is the tree formed by its left child and everything below it, and likewise for the right subtree. Binary trees are covered in the [trees study guide](/resources/aqa-a-level-computer-science-7517-trees/).

A **traversal** visits every node exactly once. The three traversals below differ only in *when* the current node is processed relative to its two subtrees. Each is **recursive**: to traverse a tree, process the root and traverse the left and right subtrees in a fixed order. An empty subtree is the base case, and nothing happens.

| Traversal | Order | Memory aid |
|---|---|---|
| Pre-order | node, left subtree, right subtree | node comes **pre**(before) the subtrees |
| In-order | left subtree, node, right subtree | node comes **in** the middle |
| Post-order | left subtree, right subtree, node | node comes **post** (after) the subtrees |

In all three, the **left subtree is dealt with before the right**. Only the position of the node changes.

## The algorithms

```
SUBROUTINE PreOrder(node)
    IF node is not empty THEN
        OUTPUT node.value
        PreOrder(node.left)
        PreOrder(node.right)
    ENDIF
ENDSUBROUTINE

SUBROUTINE InOrder(node)
    IF node is not empty THEN
        InOrder(node.left)
        OUTPUT node.value
        InOrder(node.right)
    ENDIF
ENDSUBROUTINE

SUBROUTINE PostOrder(node)
    IF node is not empty THEN
        PostOrder(node.left)
        PostOrder(node.right)
        OUTPUT node.value
    ENDIF
ENDSUBROUTINE
```

The three subroutines are identical except for the position of the `OUTPUT` line. That is a good way to remember them, and it is also what an exam question may ask you to spot or to change.

## Worked example 1: a binary search tree

Insert these values, in this order, into an empty binary search tree (smaller values go left, others go right): 40, 25, 60, 15, 30, 50, 70, 10, 28.

```
            40
          /    \
        25      60
       /  \    /  \
     15   30  50   70
    /    /
  10   28
```

**Pre-order** (node, left, right). Start at 40. Output 40, then traverse the left subtree rooted at 25: output 25, then its left subtree rooted at 15: output 15, then its left subtree rooted at 10: output 10. Back up to 25's right subtree rooted at 30: output 30, then its left child 28. Then the right subtree of 40, rooted at 60: output 60, then 50, then 70.

Result: **40, 25, 15, 10, 30, 28, 60, 50, 70**.

**In-order** (left, node, right). Go as far left as possible first. The leftmost node is 10, so output 10, then its parent 15 (no right child), then 25. Next, 25's right subtree: 30's left child 28 comes first, then 30. Then 40. Then the right subtree: 50, then 60, then 70.

Result: **10, 15, 25, 28, 30, 40, 50, 60, 70**.

This is the values **in ascending order**. That is not a coincidence: in a binary search tree everything in the left subtree is smaller than the node, and everything in the right subtree is larger, so left, node, right must produce sorted output.

**Post-order** (left, right, node). A node is only output once both of its subtrees are finished. So the leaves come out first: 10, then 15 (after its left subtree), then 28, then 30, then 25 (after both its subtrees are done). On the right: 50, 70, then 60. The root is last.

Result: **10, 15, 28, 30, 25, 50, 70, 60, 40**.

In every post-order traversal the **root is the last item** output, and in every pre-order traversal it is the **first**.

## Worked example 2: an expression tree

An **expression tree** stores an arithmetic expression. Each leaf holds an operand (a number or variable) and each internal node holds an operator whose two children are its operands. The expression (8 + 4) × (9 − 3) gives:

```
        *
      /   \
     +     -
    / \   / \
   8   4 9   3
```

| Traversal | Output | What it gives |
|---|---|---|
| Pre-order | `* + 8 4 - 9 3` | Prefix (Polish) form |
| In-order | `8 + 4 * 9 - 3` | Infix form, but **without brackets** |
| Post-order | `8 4 + 9 3 - *` | **Postfix (Reverse Polish)** form |

The in-order output looks like 8 + 4 × 9 − 3, which would be evaluated as a different calculation. The tree itself has no brackets, because its shape already says which operation happens first. To produce a correct infix expression an algorithm must add brackets round each subtree. Post-order needs no brackets at all, and that is why it is the traversal used for conversion to Reverse Polish notation (see the [Reverse Polish study guide](/resources/aqa-a-level-computer-science-7517-reverse-polish/)). Evaluating the postfix form with a stack gives 12, then 6, then 72, which is the value of (8 + 4) × (9 − 3).

## Uses of the three traversals

- **Pre-order: copying a tree.** Creating each node before its children means a parent exists before the children are attached to it, so the copy can be built in the same order that the traversal runs. Pre-order output can also be stored and used to rebuild the same binary search tree: inserting the values in pre-order gives a tree of the same shape.
- **In-order: outputting a binary search tree in ascending order.** This is the standard way to print or export the contents of a binary search tree as a sorted list.
- **Post-order: several uses.**
  - Converting an infix expression to Reverse Polish notation, by first building an expression tree.
  - Producing a postfix expression from an expression tree.
  - **Emptying a tree.** A node can only be deleted safely after its children have been deleted, otherwise the references to the children would be lost. Post-order deals with the children first.

When answering "describe a use", name the traversal, name the task, and give the one-line reason it fits.

## Tracing technique

Recursive traces are easy to get wrong in your head. A reliable method:

1. Write the traversal order for the pattern, for example "node, left, right".
2. Start at the root. For a node, do things in the pattern's order, and treat each subtree as a smaller tree with the same pattern.
3. Tick off nodes as they are output and cross out empty subtrees.
4. Check the count: your output must contain every node exactly once.

A shortcut for small trees is the **flag method**. Walk round the outside of the tree from the left of the root, keeping the tree on your left. Output a node the first time you pass it for pre-order, the second time (from below) for in-order, and the third time (from the right) for post-order. If you are unsure, use the recursive method and flag method as a cross-check on each other.

## Common mistakes

- Doing the right subtree before the left. All three AQA traversals take the left first.
- Mixing up in-order and pre-order for a node with one child. Treat the missing child as an empty subtree and carry on.
- Forgetting that a subtree's own root follows the same rule, so you must apply the pattern at every level, not just at the top.
- Stating that in-order gives sorted output for **any** binary tree. It does so only for a binary search tree.
- Missing nodes out, or listing a node twice.
- Claiming that in-order of an expression tree gives a fully correct infix expression. It needs brackets.

## Exam technique

- **Trace**: write the order pattern next to the tree and keep a running list. Count the nodes at the end.
- **Describe a use**: give traversal, purpose, reason.
- **Explain why in-order gives ascending order**: left subtree is smaller, then the node, then the right subtree is larger.
- **Explain why post-order empties a tree safely**: children are removed before their parent.

## Related resources

- [Tree-traversal revision notes](/resources/aqa-a-level-computer-science-7517-tree-traversal-revision-notes/)
- [Tree-traversal practice questions](/resources/aqa-a-level-computer-science-7517-tree-traversal-practice/)
- [Trees study guide for 4.2.5](/resources/aqa-a-level-computer-science-7517-trees/)
- [Reverse Polish study guide](/resources/aqa-a-level-computer-science-7517-reverse-polish/)

*Written against the AQA A-level Computer Science (7517) specification, 4.3.2 Tree-traversal. Always check the current specification on the AQA website.*
