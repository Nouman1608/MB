---
title: "OxfordAQA A-Level Computer Science (9645): Tree algorithms -- Practice Questions"
seoTitle: "OxfordAQA 9645 Tree Algorithms Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11 – Advanced algorithms"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 11.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-algorithms"
  - qualification: "a-level"
    topic: "advanced-algorithms"
    subtopic: "tree-algorithms-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.11.2 Tree algorithms: traversal traces, array trees, expression trees, code and uses, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.11.2 Tree algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: tracing pre-order, in-order and post-order traversal, implementing them, and describing their uses. Code is Python.

Related pages: [tree algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms/) ·
[tree algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms-revision-notes/)

## Section A

**1.** State the order in which a post-order traversal visits the root, the left subtree and the right subtree of a binary tree. **[1]**

**2.** State which traversal you would use to:

**(a)** output the contents of a binary search tree in ascending order **[1]**
**(b)** produce a prefix expression from an expression tree **[1]**

**3.** A binary tree has root M. M has left child F and right child T. F has left child C and right child J. J has a left child G. T has a right child X. X has a left child V. Give the output of each traversal.

**(a)** Pre-order **[1]**
**(b)** In-order **[1]**
**(c)** Post-order **[1]**

## Section B

**4.** The values 55, 30, 80, 20, 45, 70, 95 and 40 are inserted, in that order, into an empty binary search tree. A value smaller than a node goes into its left subtree and any other value into its right subtree.

**(a)** State the parent of 40. **[1]**
**(b)** Give the in-order output. **[1]**
**(c)** Give the post-order output. **[2]**
**(d)** The same eight values are instead inserted in ascending order. State the height of the resulting tree, counting the root as level 1, and explain what this means for a search. **[2]**

**5.** A tree is stored in three arrays. Index 0 is the root and −1 means "no child".

| Index | data | left | right |
|---|---|---|---|
| 0 | H | 1 | 2 |
| 1 | C | 3 | −1 |
| 2 | P | −1 | 4 |
| 3 | A | −1 | −1 |
| 4 | T | 5 | −1 |
| 5 | R | −1 | −1 |

**(a)** Give the output of `in_order(0)`. **[2]**
**(b)** Give the output if the output statement moves above the two recursive calls. **[2]**
**(c)** The subroutine is called with the argument 0. State how many calls are made in total, counting calls on empty children. **[2]**

**6.** An expression tree represents (a + b) × c − d ÷ e.

**(a)** Give the postfix form obtained by traversing the tree. **[2]**
**(b)** Name the traversal used. **[1]**
**(c)** Evaluate the postfix expression `8 2 3 * + 4 2 / -`, showing the stack after each operator. **[3]**

**7.** Explain why a post-order traversal is used to delete every node of a tree. **[2]**

**8.** Write a recursive Python subroutine `count_nodes(node)` that returns the number of nodes in the binary tree whose root is `node`. A node has attributes `left` and `right`, and an empty subtree is `None`. **[3]**

**9.** Values 10, 20, 30, 40 and 50 are inserted in that order into an empty binary search tree.

**(a)** Describe the shape of the tree. **[1]**
**(b)** Give the pre-order and post-order outputs. **[2]**
**(c)** State how many comparisons are needed to find 50, and give the time complexity class for a search of this kind of tree with n nodes. **[2]**

**10.** Describe **two** different uses of tree traversal algorithms. For each, state the traversal and explain why that order is suitable. **[4]**

## Answers

**1.** Left subtree, then right subtree, then the root **[1]**

**2. (a)** In-order **[1]**
**(b)** Pre-order **[1]**

**3. (a)** M, F, C, J, G, T, X, V **[1]**
**(b)** C, F, G, J, M, T, V, X **[1]**
**(c)** C, G, J, F, V, X, T, M **[1]**

**4. (a)** 45 **[1]** (40 is less than 55 and 30, so goes left to 30, then greater than 30 and less than 45, so it is the left child of 45)
**(b)** 20, 30, 40, 45, 55, 70, 80, 95 **[1]**
**(c)** 20, 40, 45, 30, 70, 95, 80, 55. Award **[1]** for left subtree of the root correct (20, 40, 45, 30) and **[1]** for the right subtree and the root correct. **[2]**
**(d)** Height is **8** (a chain of eight nodes) **[1]**. A search may have to check every node, so searching becomes O(n) rather than O(log n) **[1]**.

**5. (a)** A, C, H, P, R, T. Award **[1]** for the left subtree part A, C, H and **[1]** for P, R, T. **[2]**
**(b)** H, C, A, P, T, R. This is pre-order. Award **[1]** for H, C, A and **[1]** for P, T, R. **[2]**
**(c)** There are 6 nodes, one call each **[1]**, plus 7 calls on empty children, giving **13** calls **[1]**. **[2]**

**6. (a)** a b + c * d e / - **[2]** (award **[1]** for a b + c * correct before the division part, **[1]** for the rest)
**(b)** Post-order **[1]**
**(c)** Push 8, 2, 3. For `*`: pop 3 and 2, push 6, stack 8, 6 **[1]**. For `+`: stack becomes 14 **[1]**. Push 4 and 2; for `/` stack becomes 14, 2; for `-` the result is **12** **[1]**. **[3]**

**7.** Post-order deals with both subtrees before the node itself **[1]**, so no node is deleted while its children can only be reached through it, and no part of the tree is lost or left unreachable **[1]**. **[2]**

**8.** Example answer:

```python
def count_nodes(node):
    if node is None:                                   # [1] base case
        return 0
    return 1 + count_nodes(node.left) + count_nodes(node.right)   # [1] one for this node, [1] both subtrees counted
```

**[3]**

**9. (a)** A single chain: each node is the right child of the previous one (or every node has only a right child) **[1]**
**(b)** Pre-order 10, 20, 30, 40, 50 **[1]**; post-order 50, 40, 30, 20, 10 **[1]**. **[2]**
**(c)** 5 comparisons **[1]**; O(n) (linear) **[1]**. **[2]**

**10.** Award **[1]** for each use with the right traversal and **[1]** for a valid reason, up to two uses. Examples: copying a tree uses pre-order, because each parent must be created before its children **[1] [1]**; emptying a tree uses post-order, because a node is deleted only after both its subtrees **[1] [1]**. Other valid pairs: in-order for ascending output of a binary search tree, because left values are smaller and right values larger; pre-order for a prefix expression; post-order for a postfix expression, because the operator follows its operands. **[4]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.11.2 Tree algorithms.
