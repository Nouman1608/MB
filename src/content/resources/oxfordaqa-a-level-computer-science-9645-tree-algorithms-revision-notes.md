---
title: "OxfordAQA A-Level Computer Science (9645): Tree algorithms -- Revision Notes"
seoTitle: "OxfordAQA 9645 Tree Algorithms Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.11.2 Tree algorithms: the three traversals, code, array trees, uses, common errors and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.11.2 Tree algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.11 Advanced algorithms). For worked traces and the call-by-call recursion, see the [tree algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms/), then practise with the [tree algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms-practice/).

## What the specification requires

- **Trace** pre-order, post-order and in-order tree traversal.
- **Understand how to implement** each traversal.
- **Describe uses** of the traversals.

Code in the Unit 3 on-screen exam is C#, Python or VB.Net. The specification sets no pseudo-code standard, so these notes use Python.

## Key terms

| Term | Meaning |
|---|---|
| Binary tree | Every node has at most two children: left and right |
| Root | The top node, with no parent |
| Leaf | A node with no children |
| Subtree | A node and everything below it |
| Traversal | Visiting every node exactly once in a defined order |
| Binary search tree | Left subtree values are smaller than the node; right subtree values are larger |
| Expression tree | Operators at internal nodes, operands at leaves |
| Prefix, infix, postfix | Operator before, between or after its operands |

## The three orders

| Traversal | Order at each node | First item output | Last item output |
|---|---|---|---|
| Pre-order | node, left, right | the root | the last leaf on the right |
| In-order | left, node, right | the leftmost node | the rightmost node |
| Post-order | left, right, node | the leftmost leaf | the root |

The left subtree is always finished before the right subtree.

## Worked reminder: one tree, three outputs

Insert 55, 30, 80, 20, 45, 70, 95 and 40 into an empty binary search tree.

```
            55
          /    \
        30      80
       /  \    /  \
     20    45 70   95
          /
        40
```

| Traversal | Output |
|---|---|
| Pre-order | 55, 30, 20, 45, 40, 80, 70, 95 |
| In-order | 20, 30, 40, 45, 55, 70, 80, 95 |
| Post-order | 20, 40, 45, 30, 70, 95, 80, 55 |

The tree has 8 nodes and each output has 8 items. The in-order list is ascending because this is a binary search tree.

## Implementation pattern

```python
def in_order(node):
    if node is not None:        # base case: an empty subtree does nothing
        in_order(node.left)
        print(node.data)        # this line moves for the other orders
        in_order(node.right)
```

- **Pre-order:** move the `print` line above both calls.
- **Post-order:** move the `print` line below both calls.
- Each node causes one call and each empty child causes one more, so for n nodes there are 2n + 1 calls and the time complexity is **O(n)**.
- The depth of the recursion equals the height of the tree.

### Tree held in arrays

| Index | Data | Left | Right |
|---|---|---|---|
| 0 | 55 | 1 | 2 |
| 1 | 30 | 3 | 4 |
| 2 | 80 | 5 | 6 |
| 3 | 20 | −1 | −1 |
| 4 | 45 | 7 | −1 |
| 5 | 70 | −1 | −1 |
| 6 | 95 | −1 | −1 |
| 7 | 40 | −1 | −1 |

Start at index 0. Replace `node is not None` with `i != -1`, `node.left` with `left[i]`, and `node.data` with `data[i]`. A rogue value of −1 means "no child".

## Uses

| Traversal | Use | Reason |
|---|---|---|
| Pre-order | Copying a tree | Parents are created before their children |
| Pre-order | Prefix expression from an expression tree | Operator, then operands |
| In-order | Ascending output of a binary search tree | Smaller values, node, larger values |
| Post-order | Postfix expression from an expression tree | Operands, then operator |
| Post-order | Emptying a tree | Delete children before the parent |

### Expression tree reminder

For (a + b) × c − d ÷ e the three outputs are:

| Traversal | Output |
|---|---|
| Pre-order (prefix) | − × + a b c ÷ d e |
| In-order | a + b × c − d ÷ e (brackets lost) |
| Post-order (postfix) | a b + c × d e ÷ − |

A postfix expression is evaluated with a stack: push operands, and for each operator pop two values, apply it and push the result. The first value popped is the right-hand operand.

## Exam traps

- **Skipping levels.** Finish the whole left subtree before touching the right subtree.
- **In-order on a non-search tree.** It is not ascending unless the tree is a binary search tree.
- **Wrong output for the use.** Prefix needs pre-order, postfix needs post-order. In-order loses the brackets.
- **No base case.** Without the `is not None` test the code fails on an empty child.
- **Counting.** Always check that the number of outputs equals the number of nodes.
- **Search cost.** Searching a binary search tree is O(log n) when balanced but O(n) when the tree has degenerated into a chain.

## Quick self-test

1. State the visiting order for pre-order traversal.
2. Which traversal outputs a binary search tree in ascending order?
3. A tree has 12 nodes. How many items does a post-order traversal output?
4. Which item is always output last in post-order?
5. Which traversal produces a postfix expression?
6. Give one reason pre-order is used to copy a tree.
7. Why is post-order used to empty a tree?
8. In an array tree, what does −1 in the Left column mean?
9. Give the post-order output for a root 6 with left child 2 and right child 9.
10. State the time complexity of a traversal of n nodes.
11. A binary search tree is built from 5, 10, 15, 20. What is the worst-case search cost, in comparisons, for 20?
12. Name the traversal that outputs the root first.

### Answers

1. Node, then left subtree, then right subtree.
2. In-order.
3. 12.
4. The root.
5. Post-order.
6. A parent is created before its children, so each child can be attached to an existing node.
7. Both subtrees are deleted before the node, so no node is removed while it is still the only route to others.
8. The node has no left child.
9. 2, 9, 6.
10. O(n).
11. 4 comparisons, because the tree is a chain of four nodes.
12. Pre-order.

## Next steps

- [Tree algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms/)
- [Tree algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-tree-algorithms-practice/)
- [Advanced algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.11.2 Tree algorithms.
