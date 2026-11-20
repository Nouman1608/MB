---
title: "OxfordAQA A-Level Computer Science (9645): Tree algorithms"
seoTitle: "OxfordAQA 9645 Tree Algorithms Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.11.2 in depth: tracing and coding pre-order, in-order and post-order traversal, with array trees, call traces and uses."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.11.2 Tree algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.11 Advanced algorithms. It is International A-level content. The specification asks you to **trace** the tree-traversal algorithms pre-order, post-order and in-order, to **understand how to implement** them, and to **describe uses** of each. Programming questions on this content sit in Unit 3, the on-screen exam in C#, Python or VB.Net, so the code below is Python. The specification sets no pseudo-code standard.

The topic-level [advanced algorithms study guide](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms/) gives a first pass through all of topic 3.11. This page stays on trees and goes deeper: a fresh tree, tracing the recursion call by call, trees held in arrays, and each use worked in full. Afterwards use the [tree algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms-revision-notes/) and the [tree algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms-practice/).

## Vocabulary you need first

A **binary tree** is a rooted tree in which every node has at most two children, called the **left child** and the **right child**. The **root** is the top node. A **leaf** has no children. A **subtree** is any node together with everything below it. The traversals work because every subtree is itself a binary tree, which is why they can be written recursively. A **traversal** visits every node exactly once and does something with each one, such as outputting its data.

## The three traversals

The three orders differ only in **when the current node is output** relative to its two subtrees.

| Traversal | Order at every node | Memory aid |
|---|---|---|
| Pre-order | node, left subtree, right subtree | node **pre**cedes its subtrees |
| In-order | left subtree, node, right subtree | node sits **in** the middle |
| Post-order | left subtree, right subtree, node | node comes **post** (after) its subtrees |

In every order the left subtree is dealt with before the right subtree. Only the position of the node changes.

### Worked example 1: all three traversals

Insert 42, 17, 58, 9, 30, 51, 76, 24 and 33 in that order into an empty binary search tree. Each value goes left of a node if it is smaller and right if it is larger.

```
              42
           /      \
         17        58
        /  \      /  \
       9    30   51   76
           /  \
          24   33
```

- Pre-order: **42, 17, 9, 30, 24, 33, 58, 51, 76**
- In-order: **9, 17, 24, 30, 33, 42, 51, 58, 76**
- Post-order: **9, 24, 33, 30, 17, 51, 76, 58, 42**

Check these by method, not by memory. For pre-order, output 42, then fully finish the left subtree rooted at 17 (17, then its left subtree 9, then its right subtree 30 with 24 and 33), and only then start the right subtree rooted at 58. For post-order, the root 42 is last, and each node appears after both of its subtrees.

Two quick sanity checks help in the exam. In pre-order the **first** item is the root; in post-order the **last** item is the root. In-order of a binary search tree is always ascending, as the output above shows.

## Implementing the traversals

Each traversal is a short recursive subroutine. The **base case** is an empty subtree. The **recursive case** makes two calls, one for each subtree, and outputs the node at the right moment.

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def pre_order(node):
    if node is not None:
        print(node.data)
        pre_order(node.left)
        pre_order(node.right)

def in_order(node):
    if node is not None:
        in_order(node.left)
        print(node.data)
        in_order(node.right)

def post_order(node):
    if node is not None:
        post_order(node.left)
        post_order(node.right)
        print(node.data)
```

The three bodies contain the same three lines in different orders. If you are asked to change one traversal into another, you move the output line and change nothing else. If a question asks you to collect the values instead of printing them, append to a list or return a joined string, but keep the same structure.

### Tracing the recursion call by call

Take the small subtree rooted at 30, which has left child 24 and right child 33, and trace `in_order` on it. A `None` call returns at once.

| Step | Call | What happens |
|---|---|---|
| 1 | in_order(30) | not empty, so call left subtree first |
| 2 | in_order(24) | not empty, so call its left subtree |
| 3 | in_order(None) | empty, returns |
| 4 | back in 24 | output **24** |
| 5 | in_order(None) | right subtree of 24, empty, returns |
| 6 | back in 30 | output **30** |
| 7 | in_order(33) | not empty |
| 8 | in_order(None) | left of 33, returns |
| 9 | back in 33 | output **33** |
| 10 | in_order(None) | right of 33, returns |

The output is 24, 30, 33. Every node causes one call, and every empty child causes one more call that returns at once. For the whole tree of nine nodes that is 9 + 10 = 19 calls. Traversal therefore visits each node a fixed number of times, so its time complexity is **O(n)**. At any moment the calls waiting to finish form a stack of subroutine calls, as in the subroutines section of the AS content. The stack is as deep as the tree is tall (here 4 calls), so a long thin tree uses far more stack space than a short bushy one.

## Trees held in arrays

A tree does not need objects. A common exam setup stores each node in a row of three parallel arrays: the data, the index of the left child and the index of the right child. A rogue value, here −1, means "no child". The tree above, filled in the order the values were inserted, is:

| Index | Data | Left | Right |
|---|---|---|---|
| 0 | 42 | 1 | 2 |
| 1 | 17 | 3 | 4 |
| 2 | 58 | 5 | 6 |
| 3 | 9 | −1 | −1 |
| 4 | 30 | 7 | 8 |
| 5 | 51 | −1 | −1 |
| 6 | 76 | −1 | −1 |
| 7 | 24 | −1 | −1 |
| 8 | 33 | −1 | −1 |

The root is at index 0. A traversal now takes an index instead of an object.

```python
def in_order(i):
    if i != -1:
        in_order(left[i])
        print(data[i])
        in_order(right[i])
```

Here the test `i != -1` plays the part of `node is not None`. Tracing starts at `in_order(0)`: go left to index 1, then index 3 (data 9, both pointers −1), output 9, return to index 1, output 17, go right to index 4, and so on. The result is the same list as before.

## Uses of the traversals

The specification names these uses. For each, learn the **reason** the order suits the job.

| Traversal | Use named in the specification | Why this order |
|---|---|---|
| Pre-order | Copying a tree | A parent must exist before its children can be attached |
| Pre-order | Producing a prefix expression from an expression tree | The operator is written before its two operands |
| In-order | Outputting the contents of a binary search tree in ascending order | Left values are smaller, then the node, then right values are larger |
| Post-order | Producing a postfix expression from an expression tree | The operator is written after its two operands |
| Post-order | Emptying a tree | A node is deleted only after both of its subtrees have gone |

### Worked example 2: expression tree

The expression ((7 + 5) × (9 − 3)) ÷ 4 has operators at the internal nodes and numbers at the leaves.

```
              ÷
           /     \
         ×         4
       /   \
     +       −
    / \     / \
   7   5   9   3
```

- Pre-order gives the **prefix** form: `÷ × + 7 5 − 9 3 4`
- Post-order gives the **postfix** form: `7 5 + 9 3 − × 4 ÷`
- In-order gives `7 + 5 × 9 − 3 ÷ 4`, which looks like the original but has lost its brackets, so it is **ambiguous**. This is why a plain in-order dump is not used to store an expression.

Evaluate the postfix form with a stack, reading left to right. Push a number; for an operator, pop two values, apply the operator (the first value popped is the right-hand operand) and push the result.

| Token | Action | Stack after (bottom to top) |
|---|---|---|
| 7 | push | 7 |
| 5 | push | 7, 5 |
| + | 7 + 5 | 12 |
| 9 | push | 12, 9 |
| 3 | push | 12, 9, 3 |
| − | 9 − 3 | 12, 6 |
| × | 12 × 6 | 72 |
| 4 | push | 72, 4 |
| ÷ | 72 ÷ 4 | **18** |

The answer 18 matches ((7 + 5) × (9 − 3)) ÷ 4 = 12 × 6 ÷ 4 = 18.

### Worked example 3: copying and emptying

To **copy** the tree in Worked example 1, create nodes in pre-order: 42, 17, 9, 30, 24, 33, 58, 51, 76. Each new node can be attached to a parent that already exists, so the copy has the same shape. To **empty** the tree, delete nodes in post-order: 9, 24, 33, 30, 17, 51, 76, 58, 42. In every case the children go before their parent, so no node is lost while it is still the only route to something that has not been deleted yet.

## Searching a binary search tree

A search for a value compares it with the current node and follows one branch only. Searching for 33 in the tree above visits 42, 17, 30 and 33: four comparisons. For a balanced tree the cost is O(log n). If the same values were inserted in ascending order, the tree would be one long chain and a search could need up to n comparisons, O(n). This best and worst case contrast is part of 3.13.5.2.

## Exam technique

- **Trace:** write the rule at the top of your answer, then work down the tree one subtree at a time. Finish a whole left subtree before the right.
- **Count:** the number of output items must equal the number of nodes. Counting catches skipped nodes.
- **Implement:** state the base case first, then the order of the three lines.
- **Describe a use:** name the traversal, the task and the reason the order fits.

## Common mistakes

- Reading the left subtree of the root and then jumping straight to the root's right child, skipping the lower levels of the left subtree.
- Saying in-order sorts any binary tree. It does so only for a binary search tree.
- Giving the in-order result as the prefix or postfix expression.
- Forgetting the base case, which gives infinite recursion or an error on an empty child.
- Calling post-order "reverse pre-order". They are different outputs.

## Next steps

- [Tree algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms-revision-notes/)
- [Tree algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms-practice/)
- [Advanced data structures study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.11.2 Tree algorithms.
