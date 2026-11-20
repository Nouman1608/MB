---
title: "AQA A-Level Computer Science (7517): Tree-traversal -- Practice Questions"
seoTitle: "AQA A-Level Computer Science Tree Traversal Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.3.2 questions with answers: tracing pre-order, in-order and post-order traversal and describing their uses."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Tree-traversal study guide](/resources/aqa-a-level-computer-science-7517-tree-traversal/) | [Tree-traversal revision notes](/resources/aqa-a-level-computer-science-7517-tree-traversal-revision-notes/)

In every question the left subtree is traversed before the right subtree.

---

## Section A

**1.** State the order in which the root, the left subtree and the right subtree are dealt with in a pre-order traversal. **[1]**

**2.** State which traversal outputs the items of a binary search tree in ascending order. **[1]**

**3.** State which traversal is used to produce a postfix expression from an expression tree. **[1]**

**4.** Describe one use of pre-order traversal. **[1]**

**5.** Explain why post-order traversal is a suitable way to empty a tree. **[2]**

## Section B

**6.** The values 50, 30, 70, 20, 40, 60, 80 and 35 are inserted, in that order, into an empty binary search tree. Smaller values go to the left.

**(a)** Draw the tree, or describe the children of each node. **[3]**
**(b)** Give the pre-order traversal. **[2]**
**(c)** Give the in-order traversal. **[1]**
**(d)** Give the post-order traversal. **[2]**

**7.** Explain why the in-order traversal in Question 6 is in ascending order. **[2]**

**8.** A binary tree has root K. K has left child B and right child C. B has two children, D (left) and E (right). C has only a right child, F. This is not a binary search tree.

**(a)** Give the pre-order traversal. **[2]**
**(b)** Give the in-order traversal. **[2]**
**(c)** Give the post-order traversal. **[2]**

**9.** An expression tree has root `-`. Its left child is `+` and its right child is the leaf e. The `+` node has left child `*` and right child `/`. The `*` node has leaves a and b. The `/` node has leaves c and d.

**(a)** Write the expression in infix form with brackets. **[2]**
**(b)** Give the post-order traversal. **[2]**
**(c)** Give the pre-order traversal. **[1]**

**10.** Explain why the in-order traversal of an expression tree cannot always be used directly as the infix form of the expression, using an example of a tree where this matters. **[3]**

**11.** Write a recursive subroutine `PostOrder(node)` that outputs the values of a binary tree in post-order. A node has fields `value`, `left` and `right`, and an empty subtree is represented by the value `NULL`. **[4]**

**12.** A programmer wants to copy a binary tree. Name the traversal that is most suitable and explain why it is suitable. **[3]**

**13.** A binary tree has 9 nodes. State how many values are output by a pre-order traversal, and explain whether this number is the same for in-order and post-order traversals. **[2]**

---

## Answers

**1.** Root (node) first, then the left subtree, then the right subtree [1].

**2.** In-order [1].

**3.** Post-order [1].

**4.** Any one: copying a tree; producing prefix form of an expression tree [1].

**5.** Each node is processed after both of its subtrees [1]; so a node is removed only after its children have been removed, and no child is lost or left unreachable [1].

**6. (a)** 50 has children 30 and 70 [1]; 30 has children 20 and 40, and 70 has children 60 and 80 [1]; 40 has left child 35 [1].
**(b)** 50, 30, 20, 40, 35, 70, 60, 80 [2]. (One mark for the left subtree 30, 20, 40, 35 in the right place; one mark for the whole order.)
**(c)** 20, 30, 35, 40, 50, 60, 70, 80 [1].
**(d)** 20, 35, 40, 30, 60, 80, 70, 50 [2]. (One mark for the left subtree ending in 30 and the root last; one mark for the whole order.)

**7.** In a binary search tree every value in the left subtree is smaller than the node and every value in the right subtree is larger [1]; in-order outputs left subtree, then node, then right subtree, so each node comes after all smaller values and before all larger values at every level [1].

**8. (a)** K, B, D, E, C, F [2].
**(b)** D, B, E, K, C, F [2].
**(c)** D, E, B, F, C, K [2].
(For each, one mark for the left subtree B, D, E in the correct order, and one mark for the whole order.)

**9. (a)** ((a * b) + (c / d)) - e [2]. (One mark for the correct operators and operands in order, one mark for the brackets showing the structure. Equivalent bracketing, such as (a * b + c / d) - e, is accepted.)
**(b)** a b * c d / + e - [2].
**(c)** - + * a b / c d e [1].

**10.** In-order traversal outputs only the operands and operators, and the tree has no brackets [1]; the order of evaluation is held in the shape of the tree, so brackets must be added [1]; for example, a tree for (8 + 4) * (9 - 3) gives 8 + 4 * 9 - 3 in-order, which would be calculated as 8 + 36 - 3 = 41, not 72 [1].

**11.**
```
SUBROUTINE PostOrder(node)
    IF node <> NULL THEN
        PostOrder(node.left)
        PostOrder(node.right)
        OUTPUT node.value
    ENDIF
ENDSUBROUTINE
```
Test for an empty subtree as the base case [1]; recursive call on the left subtree [1]; recursive call on the right subtree [1]; output of the node's value after both calls [1].

**12.** Pre-order [1]; the node is processed before its subtrees, so each parent is created in the copy before its children [1]; the children can then be attached to the copy of their parent as they are visited, giving a tree of the same shape [1].

**13.** 9 values are output [1]; every traversal visits each node exactly once, so in-order and post-order also output 9 values (in a different order) [1].

---

## Where marks are usually lost

- Taking the right subtree before the left.
- Applying the order only to the root and not to every subtree.
- Leaving out a leaf or listing a node twice.
- Forgetting that in-order output is sorted only for a binary search tree.
- Omitting the empty-subtree test in a recursive algorithm.
