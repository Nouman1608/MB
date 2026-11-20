---
title: "OxfordAQA A-Level Computer Science (9645): Trees -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Trees Practice Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.10.2 Trees: tree properties, rooted and binary trees, building and searching binary search trees, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.10.2 Trees** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: trees as graphs, rooted trees, binary trees and binary search trees. In binary search trees, all values are distinct, smaller values go left and larger values go right. The height of a tree is the number of levels.

Related pages: [trees study guide](/resources/oxfordaqa-a-level-computer-science-9645-trees/) ·
[trees revision notes](/resources/oxfordaqa-a-level-computer-science-9645-trees-revision-notes/) ·
[advanced data structures practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/)

## Section A

**1.** State the three properties that make a graph a tree. **[3]**

**2.** A tree has 12 vertices. State the number of edges it has. **[1]**

**3.** State what is meant by a rooted tree and name the only node that has no parent. **[2]**

**4.** State what is meant by a binary tree. **[1]**

## Section B

**5.** The values 45, 20, 60, 10, 30, 55, 70, 25 and 65 are inserted into an empty binary search tree in that order.

**(a)** Draw the tree. **[4]**
**(b)** State the root, the leaves and the height of the tree. **[3]**
**(c)** State the parent of 25 and the sibling of 20. **[2]**

**6.** Using the tree from question 5:

**(a)** List the values compared when searching for 65 and say how many comparisons are made. **[2]**
**(b)** List the values compared when searching for 28 and state the result. **[3]**

**7.** The table below stores a binary search tree. Each row gives the left pointer, the value and the right pointer. A dash means no child, and pointers are row numbers.

| Row | Left | Value | Right |
|---|---|---|---|
| 0 | 1 | 60 | 2 |
| 1 | 3 | 35 | 4 |
| 2 | 5 | 80 | 6 |
| 3 | 7 | 20 | 8 |
| 4 | – | 45 | – |
| 5 | – | 70 | – |
| 6 | – | 90 | – |
| 7 | – | 10 | – |
| 8 | – | 25 | – |

**(a)** State the root, the left child of 35 and the right child of 80. **[3]**
**(b)** Write the values in the left subtree of 60. **[1]**
**(c)** List the values compared when searching for 75 and state the result. **[2]**

**8.** A graph has 9 vertices and 9 edges and is connected. Explain whether it is a tree. **[2]**

**9.** A student draws a binary tree with root 40, left child 25 and right child 60. The right child of 25 is 45. Explain why this is not a valid binary search tree. **[2]**

**10.** Compare the shape of the trees made by inserting the values 5, 10, 15, 20 and 25 in that order and in the order 15, 10, 20, 5, 25. Give the height of each and explain the effect on searching for 25. **[4]**

## Answers

**1.** Connected [1]; undirected [1]; no cycles [1]. **[3]**

**2.** 12 − 1 = **11** edges [1]. **[1]**

**3.** A tree in which one vertex has been designated the root [1]; the root is the only node with no parent [1]. **[2]**

**4.** A rooted tree in which each node has at most two children [1]. **[1]**

**5. (a)** The tree:

```
              45
            /    \
         20        60
        /  \      /  \
      10    30  55    70
           /          /
         25         65
```

45 is the root [1]; 20 left and 60 right of 45 [1]; 10 and 30 below 20, 55 and 70 below 60 [1]; 25 left of 30 and 65 left of 70 [1]. **[4]**
**(b)** Root: **45** [1]. Leaves: **10, 25, 55 and 65** [1]. Height: **4** levels [1]. **[3]**
**(c)** The parent of 25 is **30** [1]. The sibling of 20 is **60** [1]. **[2]**

**6. (a)** 45, 60, 70, 65 [1]; **4 comparisons** [1]. **[2]**
**(b)** 45 (left), 20 (right), 30 (left), 25 (right) [2]. 25 has no right child, so 28 is **not in the tree** [1]. **[3]**

**7. (a)** Root: **60** (row 0) [1]. The left child of 35 is **20** (row 3) [1]. The right child of 80 is **90** (row 6) [1]. **[3]**
**(b)** 35, 20, 10, 25, 45 [1]. (The left subtree of 60 consists of rows 1, 3, 4, 7 and 8.) **[1]**
**(c)** 60 (go right), 80 (go left), 70 (go right, empty), so 75 is **not in the tree** [1 for the sequence, 1 for the result]. **[2]**

**8.** It is **not a tree** [1]. A connected graph with 9 vertices has exactly 8 edges if it has no cycle, so a ninth edge means it contains a cycle [1]. **[2]**

**9.** 45 is in the left subtree of 40 [1], because it is under 25, which is left of 40, but 45 is greater than 40, so it breaks the rule that everything in the left subtree is smaller than the node [1]. **[2]**

**10.** In the order 5, 10, 15, 20, 25 each value is larger than the one before, so each goes to the right of the previous node [1]. The tree is a chain of height **5** [1]. In the order 15, 10, 20, 5, 25 the tree has height **3** [1]. Searching for 25 takes 5 comparisons in the chain but 3 in the balanced tree, showing that the order of insertion affects the speed of searching [1]. **[4]**

## Frequently asked questions

**Is every binary tree a binary search tree?**
No. A binary search tree is a binary tree with the extra ordering rule: smaller values to the left and larger values to the right of every node.

**Do I need to remember how to delete from a BST?**
No. The specification asks you to understand how a binary tree can be used as a binary search tree, which is covered by insertion, searching and the ordering rule.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.2 Trees.
