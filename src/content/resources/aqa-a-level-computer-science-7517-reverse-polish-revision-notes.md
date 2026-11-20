---
title: "AQA A-Level Computer Science (7517): Reverse Polish -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Reverse Polish Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.3.3 recall: infix to Reverse Polish conversion both ways, evaluating with a stack, why RPN is used and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.3.3 Reverse Polish**, AQA A-Level Computer Science (7517): **convert simple infix expressions to Reverse Polish notation (RPN) and back**, and **know why and where RPN is used**. Methods and long worked examples are in the [Reverse Polish study guide](/resources/aqa-a-level-computer-science-7517-reverse-polish/); exam-style questions are in the [Reverse Polish practice questions](/resources/aqa-a-level-computer-science-7517-reverse-polish-practice/).

## The three notations

| Name | Operator position | `3 + 4` written as |
|---|---|---|
| Infix | between operands | `3 + 4` |
| Prefix | before operands | `+ 3 4` |
| Postfix (RPN) | after operands | `3 4 +` |

In RPN the order of the operators in the string is the order of calculation. No brackets and no precedence rules are needed.

## Why and where it is used

- **Eliminates brackets** in sub-expressions.
- **Suitable for evaluation using a stack**: one left-to-right pass, no backtracking.
- Used in **stack-based interpreters**, for example **PostScript**, and in **bytecode**.
- Easy to produce from an expression tree by **post-order** traversal.

## Evaluate RPN with a stack

1. Operand: **push**.
2. Operator: **pop two**, apply, **push the result**.
3. The single value left at the end is the answer.

**Operand order:** the value popped **first** is the **right** operand. For `9 3 -` the sum is 9 − 3 = 6.

**Worked check:** `7 2 3 * + 4 -`

| Read | Stack after |
|---|---|
| 7, 2, 3 | 7, 2, 3 |
| `*` | 7, 6 |
| `+` | 13 |
| 4 | 13, 4 |
| `-` | 9 |

Answer 9; infix form 7 + 2 × 3 − 4.

## Infix to RPN: three methods

**Tree method.** The operator done last is the root. Build subtrees for each operand. Read the tree in post-order: left, right, operator.

**Inside-out method.** Rewrite each innermost operation as `operand operand operator`, treat it as one operand and repeat. a + b × c: first `b c *`, then `a b c * +`.

**Stack (shunting-yard) method.** Operands go straight to the output. For an operator, pop operators of **higher or equal** precedence to the output, then push it. Push `(`. At `)`, pop to the output until `(`, and discard the pair. At the end pop everything.

## Worked conversions

| Infix | RPN |
|---|---|
| (3 + 4) × 5 | `3 4 + 5 *` |
| a + b × c | `a b c * +` |
| (a + b) × (c − d) | `a b + c d - *` |
| 8 − 3 − 2 | `8 3 - 2 -` |
| a × b + c × d | `a b * c d * +` |
| (a + b) × c − d / e | `a b + c * d e / -` |
| a − (b − c) | `a b c - -` |
| a × (b + c) × d | `a b c + * d *` |

Note that 8 − 3 − 2 groups from the left, but a − (b − c) has brackets that force the right-hand grouping.

## Conversion trace using the stack method

Convert (a + b) * c - d. The output list grows from the left and the operator stack has its top on the right.

| Item read | Output | Operator stack |
|---|---|---|
| `(` | empty | `(` |
| a | a | `(` |
| `+` | a | `(` `+` |
| b | a b | `(` `+` |
| `)` | a b + | empty |
| `*` | a b + | `*` |
| c | a b + c | `*` |
| `-` | a b + c * | `-` (the `*` has higher precedence, so it leaves first) |
| d | a b + c * d | `-` |
| end | a b + c * d - | empty |

Check by substituting numbers. With a = 2, b = 3, c = 4 and d = 5 the infix value is (2 + 3) * 4 - 5 = 15, and `2 3 + 4 * 5 -` gives 5, then 20, then 15. The two agree.

## RPN to infix

Use a stack of **strings**. Operand: push. Operator: pop two, join as `(left operator right)`, push.

`6 2 / 3 + 4 5 * -` gives (((6 / 2) + 3) − (4 × 5)), which is 6 − 20 = −14. Remove brackets that are not needed: 6 / 2 + 3 − 4 × 5.

## Precedence reminder

1. Brackets
2. Multiplication and division
3. Addition and subtraction

Equal precedence: group from the **left**.

## Exam traps

- **Swapped operands** for `-` and `/` when evaluating.
- **Reordered operands** when converting. Only the operators move.
- **Wrong precedence**: a + b × c is not `a b + c *`.
- **Brackets in the answer**. RPN has none.
- **More than one value left** on the stack at the end: something was missed.
- **No working shown**: use a table with item read and stack after.

## Key terms

| Term | Definition |
|---|---|
| Infix | Operator written between its two operands |
| Prefix (Polish) | Operator written before its operands |
| Postfix (Reverse Polish) | Operator written after its operands |
| Operand | A value or variable that an operator acts on |
| Operator | A symbol such as +, −, × or / |
| Precedence | The rule that decides which operator is applied first |
| Stack | Last in, first out data structure used to hold operands |
| Expression tree | A tree whose internal nodes are operators and leaves are operands |

## Self-test

1. Convert `4 + 5` to RPN.
2. Convert 2 × (3 + 4) to RPN.
3. Convert 10 − 4 − 3 to RPN.
4. Evaluate `5 1 2 + 4 * + 3 -`.
5. Evaluate `20 4 / 3 -`.
6. State two advantages of RPN.
7. Name one place where RPN is used.
8. Which tree traversal produces RPN from an expression tree?
9. Convert `a b c * +` to infix.
10. When evaluating `8 2 -`, which value is popped first and what is it?

**Answers**

1. `4 5 +`
2. `2 3 4 + *`
3. `10 4 - 3 -`
4. 5, then 1 2 + gives 3, 3 × 4 = 12, 5 + 12 = 17, 17 − 3 = 14. The answer is 14.
5. 20 / 4 = 5, then 5 − 3 = 2. The answer is 2.
6. Any two: no brackets needed; no precedence rules needed; easy to evaluate with a stack in one pass.
7. Any one: stack-based interpreters such as PostScript; bytecode.
8. Post-order.
9. a + (b × c), or a + b × c.
10. 2 is popped first (it is the right operand), then 8, so the calculation is 8 − 2 = 6.

## Related resources

- [Reverse Polish study guide](/resources/aqa-a-level-computer-science-7517-reverse-polish/)
- [Reverse Polish practice questions](/resources/aqa-a-level-computer-science-7517-reverse-polish-practice/)
- [Stacks revision notes](/resources/aqa-a-level-computer-science-7517-stacks-revision-notes/)
- [Tree-traversal revision notes](/resources/aqa-a-level-computer-science-7517-tree-traversal-revision-notes/)
