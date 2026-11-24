---
title: "AQA A-Level Computer Science (7517): Reverse Polish"
seoTitle: "AQA A-Level Computer Science Reverse Polish Notation Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "reverse-polish-7517"
description: "Deeper guide to AQA 7517 section 4.3.3 Reverse Polish: converting simple infix expressions to Reverse Polish notation and back, evaluating with a stack, and why it is used."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.3.3 Reverse Polish** in AQA A-Level Computer Science (7517). The specification asks you to **convert simple expressions in infix form to Reverse Polish notation (RPN) form and vice versa**, and to **be aware of why and where it is used**. The additional information gives the reasons: RPN **eliminates the need for brackets** in sub-expressions, it gives expressions in a form **suitable for evaluation using a stack**, and it is used in stack-based interpreters, for example PostScript and bytecode.

The wider [fundamentals of algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) summarises section 4.3. This page sets out a reliable method for converting in each direction, a step-by-step method for evaluating RPN with a stack, and the reasoning an exam answer needs. Condensed notes are in the [Reverse Polish revision notes](/resources/aqa-a-level-computer-science-7517-reverse-polish-revision-notes/), and exam-style questions are in the [Reverse Polish practice questions](/resources/aqa-a-level-computer-science-7517-reverse-polish-practice/).

## Three ways of writing an expression

| Name | Operator position | Example for "add 3 and 4" |
|---|---|---|
| Infix | between its operands | `3 + 4` |
| Prefix (Polish) | before its operands | `+ 3 4` |
| Postfix (**Reverse Polish**) | after its operands | `3 4 +` |

**Infix** is the notation used in everyday arithmetic. It is ambiguous without extra rules: 3 + 4 × 5 could mean 7 × 5 or 3 + 20. Two devices fix this: **operator precedence** (multiplication and division before addition and subtraction) and **brackets** to override precedence.

In **Reverse Polish notation** the operator comes *after* its two operands. The order of the operators in the string is exactly the order in which they must be carried out, so there is nothing left to decide. No brackets and no precedence rules are needed.

## Why RPN is used

- **No brackets.** The position of the operators fixes the order of evaluation, so sub-expressions never need bracketing.
- **Simple to evaluate with a stack.** A program reads the expression once from left to right with no backtracking and no lookahead. Operands are pushed; an operator pops what it needs and pushes the result.
- **Fits stack-based machines.** Interpreters and virtual machines that use a stack to execute instructions use this form. The specification names **PostScript** (a page description language) and **bytecode** (the intermediate code run by a virtual machine). Instructions such as "push 3, push 4, add" are RPN in all but name.
- **Easy for a compiler to generate.** A post-order traversal of an expression tree produces RPN directly (see the [tree-traversal study guide](/resources/aqa-a-level-computer-science-7517-tree-traversal/)).

## Evaluating RPN with a stack

Read the expression from left to right.

1. If the item is an **operand**, push it onto the stack.
2. If the item is an **operator**, pop the top two values. The first one popped is the **right** operand and the second popped is the **left** operand. Apply the operator, then push the result.
3. At the end, the stack holds one value: the answer.

The order matters for subtraction and division. In `9 3 -`, 9 is pushed first and 3 second, so popping gives 3 and then 9. The calculation is 9 − 3 = 6, not 3 − 9.

### Worked example 1

Evaluate `7 2 3 * + 4 -`.

| Item read | Action | Stack after (top on right) |
|---|---|---|
| 7 | push | 7 |
| 2 | push | 7, 2 |
| 3 | push | 7, 2, 3 |
| `*` | pop 3 and 2, compute 2 × 3 = 6, push | 7, 6 |
| `+` | pop 6 and 7, compute 7 + 6 = 13, push | 13 |
| 4 | push | 13, 4 |
| `-` | pop 4 and 13, compute 13 − 4 = 9, push | 9 |

The answer is 9. The equivalent infix expression is 7 + 2 × 3 − 4.

### Worked example 2

Evaluate `12 4 1 - / 2 5 * +`.

| Item read | Action | Stack after |
|---|---|---|
| 12, 4, 1 | push each | 12, 4, 1 |
| `-` | 4 − 1 = 3 | 12, 3 |
| `/` | 12 ÷ 3 = 4 | 4 |
| 2, 5 | push each | 4, 2, 5 |
| `*` | 2 × 5 = 10 | 4, 10 |
| `+` | 4 + 10 = 14 | 14 |

The answer is 14, and the infix form is 12 ÷ (4 − 1) + 2 × 5. Notice that the RPN string needed no brackets although the infix one does.

## Converting infix to RPN

### Method 1: build the expression tree (good for small expressions)

1. Identify the operator that is carried out **last**. It is the root.
2. Its left and right operands (which may be sub-expressions) become the left and right subtrees.
3. Repeat for each sub-expression.
4. Read the tree in **post-order**: left, right, operator.

For (a + b) × (c − d): the last operation is ×, so × is the root with subtrees (a + b) and (c − d). Post-order gives `a b + c d - *`.

### Method 2: work from the inside outwards

Rewrite each innermost operation as `operand operand operator`, then treat that result as a single operand and continue. For a + b × c, multiplication has higher precedence, so write b × c as `b c *` first, giving `a b c * +`.

### Method 3: the stack method (shunting-yard)

Use an output list and an operator stack, reading the infix expression left to right.

1. **Operand**: add it to the output.
2. **Operator**: while the operator on top of the stack has **higher or equal precedence** (and is not an opening bracket), pop it to the output. Then push the new operator.
3. **Opening bracket**: push it.
4. **Closing bracket**: pop operators to the output until the opening bracket is found, then discard the pair of brackets.
5. At the end, pop all remaining operators to the output.

### Worked example 3

Convert 12 / (4 − 1) + 2 × 5.

| Item read | Output so far | Operator stack (top on right) |
|---|---|---|
| 12 | 12 | empty |
| `/` | 12 | `/` |
| `(` | 12 | `/` `(` |
| 4 | 12 4 | `/` `(` |
| `-` | 12 4 | `/` `(` `-` |
| 1 | 12 4 1 | `/` `(` `-` |
| `)` | 12 4 1 - | `/` |
| `+` | 12 4 1 - / | `+` (the `/` has higher precedence, so it is output first) |
| 2 | 12 4 1 - / 2 | `+` |
| `*` | 12 4 1 - / 2 | `+` `*` |
| 5 | 12 4 1 - / 2 5 | `+` `*` |
| end | 12 4 1 - / 2 5 * + | empty |

The result `12 4 1 - / 2 5 * +` is the expression evaluated in worked example 2.

### Operators of equal precedence

Subtraction and division are not commutative, so the order of operations of equal precedence matters. 8 − 3 − 2 means (8 − 3) − 2 = 3. Its RPN is `8 3 - 2 -`, not `8 3 2 - -`, which would mean 8 − (3 − 2) = 7. In the stack method, the "higher **or equal**" rule pops the first `-` before the second is pushed, giving the left-to-right grouping.

## Converting RPN to infix

Use the same stack as in evaluation, but push **strings** instead of numbers. When an operator is read, pop two items, join them as `(left operator right)`, and push the combined string.

**Example.** Convert `6 2 / 3 + 4 5 * -`.

| Item read | Stack after |
|---|---|
| 6, 2 | 6, 2 |
| `/` | (6 / 2) |
| 3 | (6 / 2), 3 |
| `+` | ((6 / 2) + 3) |
| 4, 5 | ((6 / 2) + 3), 4, 5 |
| `*` | ((6 / 2) + 3), (4 * 5) |
| `-` | (((6 / 2) + 3) - (4 * 5)) |

Remove brackets that precedence makes unnecessary: 6 / 2 + 3 − 4 × 5. Its value is 6 − 20 = −14, the same as evaluating the RPN directly. Evaluating first is a good check on your conversion.

## Common mistakes

- Reversing the operands of `-` or `/` when evaluating. The value popped first is the **right** operand.
- Writing operands in the wrong order in the output when converting. Operand order is never changed, only the operator positions.
- Putting a lower-precedence operator before a higher one: a + b × c is `a b c * +`, never `a b + c *`.
- Treating equal-precedence operators as right-to-left. For subtraction and division, group from the left.
- Leaving brackets in an RPN answer. There should be none.
- Ending with more than one value on the stack. If that happens, an operand or operator has been missed.

## Exam technique

- **Convert**: do the check by evaluating both forms with simple numbers when the question allows it.
- **Evaluate**: use a table with the item read and the stack after each step. State which values were popped for each operator.
- **Explain why it is used**: give two points, for example no brackets needed and simple to evaluate with a stack.
- **Name where it is used**: stack-based interpreters, for example PostScript, and bytecode.

## More resources on this topic

- [Reverse Polish revision notes](/resources/aqa-a-level-computer-science-7517-reverse-polish-revision-notes/)
- [Reverse Polish practice questions](/resources/aqa-a-level-computer-science-7517-reverse-polish-practice/)
- [Stacks study guide for 4.2.3](/resources/aqa-a-level-computer-science-7517-stacks/)
- [Tree-traversal study guide](/resources/aqa-a-level-computer-science-7517-tree-traversal/)

*Written against the AQA A-level Computer Science (7517) specification, 4.3.3 Reverse Polish. Always check the current specification on the AQA website.*
