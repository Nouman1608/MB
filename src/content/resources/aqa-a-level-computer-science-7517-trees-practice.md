---
title: "AQA A-Level Computer Science (7517): Trees -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA A-Level Computer Science 7517 questions on trees, rooted trees, binary search trees and array storage, with mark-scheme-style answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Trees study guide](/resources/aqa-a-level-computer-science-7517-trees/) | [Trees revision notes](/resources/aqa-a-level-computer-science-7517-trees-revision-notes/)

These questions cover 4.2.5 Trees of AQA A-Level Computer Science (7517),
with representation of a tree when a language has no built-in support
(4.2.1.4). Wider practice on queues, stacks, graphs and hash tables is in
the [abstract data types practice questions](/resources/aqa-a-level-computer-science-abstract-data-types-practice/).

---

## Section A

**1.** State what is meant by a **leaf** node in a rooted tree. **[1]**

**2.** A graph has 8 vertices and 8 edges. Explain why it cannot be a tree. **[2]**

**3.** State **two** ways in which a binary tree differs from a tree in general. **[2]**

**4.** Give **two** typical uses of rooted trees. **[2]**

**5.** State the rule that every node in a binary search tree must satisfy. **[2]**

## Section B

**6.** The words Mango, Fig, Pear, Apple, Kiwi, Plum and Grape are inserted in that order into an empty binary search tree, using alphabetical order.

**(a)** Draw the binary search tree. **[3]**
**(b)** List the nodes visited when searching for Grape, and state the number of comparisons made. **[2]**
**(c)** Describe how the search for Lime would end. **[2]**

**7.** A binary tree is stored in three arrays called Data, Left and Right. The root pointer is 0 and the free pointer is 5. A value of −1 means there is no child.

| Index | Data | Left | Right |
|---|---|---|---|
| 0 | 50 | 1 | 2 |
| 1 | 25 | 3 | −1 |
| 2 | 75 | −1 | 4 |
| 3 | 10 | −1 | −1 |
| 4 | 90 | −1 | −1 |

**(a)** Draw the tree that the arrays represent. **[2]**
**(b)** The value 60 is inserted using the binary search tree rule. State every change made to the arrays and pointers. **[3]**
**(c)** Explain why the value −1 is used in the Left and Right arrays. **[1]**

**8.** The values 5, 10, 15, 20 and 25 are inserted in that order into an empty binary search tree.

**(a)** Describe the shape of the resulting tree. **[1]**
**(b)** State the number of comparisons needed to find 25. **[1]**
**(c)** Give an insertion order for the same five values that would reduce the worst-case number of comparisons, and state that number. **[2]**

**9.** Two undirected graphs have the vertices A, B, C, D and E.

- Graph P has the edges A–B, B–C, C–A and D–E.
- Graph Q has the edges A–B, A–C, C–D and C–E.

**(a)** For each graph, state whether it is a tree and justify your answer. **[4]**
**(b)** Graph Q is redrawn as a rooted tree with C as the root. State the parent of A and list all the leaf nodes. **[2]**

## Section C

**10.** A binary search tree of integers is stored in the arrays Data, Left and Right described in Question 7, with a variable root holding the index of the root node and −1 meaning no child.

Write a subroutine in pseudocode, Search(target), that returns True if target is in the tree and False otherwise. Your subroutine must not visit nodes unnecessarily. **[6]**

**11.** An operating system stores folders and files as a rooted tree.

**(a)** Explain why a rooted tree is a suitable structure for a file system. **[2]**
**(b)** Explain one problem that could arise if folders could be linked in a way that formed a cycle. **[2]**

**12.** A program keeps a set of usernames that changes often, with new usernames added many times a day. Compare storing the usernames in a binary search tree with storing them in a sorted array. **[4]**

---

## Answers

**1.** A node that has no children [1].

**2.** A tree with *n* vertices has exactly *n* − 1 edges, so a tree with 8 vertices has 7 edges [1]. With 8 edges, the extra edge must create a cycle, and a tree has no cycles [1].

**3.** A binary tree must be rooted, whereas a tree need not have a root [1]. Each node of a binary tree has at most two children, whereas a node in a tree can have any number of neighbours [1]. Also credit: a binary tree distinguishes a left child from a right child.

**4.** Representing hierarchical data such as a file system, folder structure or organisation chart [1]. A binary search tree, for fast searching or keeping data in order [1]. Also credit syntax or expression trees in compilers, and game or decision trees.

**5.** Every value in a node's left subtree is less than the node's value [1]; every value in its right subtree is greater than the node's value [1]. (Accept "smaller to the left, larger to the right" applied to subtrees; a rule stated only for immediate children gets 1 mark.)

**6.** **(a)** Mango as the root [1]. Fig as the left child and Pear as the right child of Mango [1]. Apple left of Fig, Kiwi right of Fig, Grape left of Kiwi, and Plum right of Pear [1].
**(b)** Mango, Fig, Kiwi, Grape [1]; four comparisons [1].
**(c)** Lime is before Mango, so go left to Fig; Lime is after Fig, so go right to Kiwi; Lime is after Kiwi, so go right [1]. Kiwi has no right child, so the search ends and reports that Lime is not in the tree (after three comparisons) [1].

**7.** **(a)** 50 at the root with 25 as its left child and 75 as its right child [1]; 10 as the left child of 25 and 90 as the right child of 75 [1].
**(b)** 60 is stored at index 5 with Left = −1 and Right = −1 [1]. 60 > 50 so go right to 75; 60 < 75 and 75 has no left child, so Left at index 2 changes from −1 to 5 [1]. The free pointer changes from 5 to 6 [1].
**(c)** It is a rogue value showing there is no child, because −1 can never be a valid array index [1].

**8.** **(a)** Each value becomes the right child of the previous one, so the tree is a single chain, shaped like a linked list [1].
**(b)** Five [1].
**(c)** An order such as 15, 10, 20, 5, 25 (accept any order starting with 15 that places 10 and 20 next, in either order) [1]; the worst case becomes three comparisons [1].

**9.** **(a)** Graph P is not a tree [1] because A–B–C–A forms a cycle and the graph is not connected (D and E cannot be reached from A) [1]. Graph Q is a tree [1] because it is connected, undirected and has no cycles; it has 5 vertices and 4 edges [1].
**(b)** The parent of A is C [1]. The leaves are B, D and E [1].

**10.** Example answer:

```
SUBROUTINE Search(target)
  current ← root
  WHILE current <> -1
    IF Data[current] = target THEN
      RETURN True
    ELSE IF target < Data[current] THEN
      current ← Left[current]
    ELSE
      current ← Right[current]
    ENDIF
  ENDWHILE
  RETURN False
ENDSUBROUTINE
```

Marking points: starts at the root [1]; loop continues while the current pointer is not −1 [1]; returns True when the data matches the target [1]; moves to the left child when the target is smaller [1]; moves to the right child otherwise [1]; returns False when an empty pointer is reached [1]. A correct recursive version gains full marks.

**11.** **(a)** Every file or folder sits inside exactly one parent folder, which matches the parent-child relationship of a rooted tree [1]. The root folder is the single starting point, and every item is a descendant of it, so there is exactly one path to each file [1].
**(b)** A cycle could make a folder contain itself, directly or indirectly [1], so a program that walks through the folders (for example to calculate total size or copy them) could loop forever [1]. (Accept: a file could have more than one path, causing confusion when deleting or counting.)

**12.** Inserting into a binary search tree only needs one parent pointer to be changed, whereas inserting into a sorted array means shifting later items along to make space [1]. Both allow fast searching (binary search on the array, binary tree search on the tree), but the tree may become unbalanced as usernames are added, so its searches can slow down, whereas binary search on a sorted array always halves the range [1]. The tree needs extra memory for two pointers per node, whereas the array stores only the usernames [1]. A static array has a fixed size and may fill up, whereas a dynamic tree can grow as needed [1]. Also credit: an array allows direct access by index, which a tree does not. Each mark needs both structures compared.

---

## Where marks are usually lost

- Drawing a binary search tree that obeys the rule against each parent but not against the root.
- Writing "a tree has a root" in a definition question.
- Updating the new row in an array representation but not the parent's pointer or the free pointer.
- Search code that never stops at an empty (−1) pointer, so it would read outside the arrays.
- Comparison answers that describe one structure only, with no "whereas".
