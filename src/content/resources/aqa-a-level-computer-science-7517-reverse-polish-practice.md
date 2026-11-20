---
title: "AQA A-Level Computer Science (7517): Reverse Polish -- Practice Questions"
seoTitle: "AQA A-Level Computer Science Reverse Polish Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.3.3 questions with answers: converting between infix and Reverse Polish notation and evaluating with a stack."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Reverse Polish study guide](/resources/aqa-a-level-computer-science-7517-reverse-polish/) | [Reverse Polish revision notes](/resources/aqa-a-level-computer-science-7517-reverse-polish-revision-notes/)

In all questions, the symbols `+`, `-`, `*` and `/` mean add, subtract, multiply and divide. Operators of equal precedence are carried out from left to right.

---

## Section A

**1.** Give the Reverse Polish form of 6 + 9. **[1]**

**2.** State two reasons why Reverse Polish notation is used in computing. **[2]**

**3.** Name the data structure used to evaluate an expression in Reverse Polish notation. **[1]**

**4.** Give one example of where Reverse Polish notation is used. **[1]**

**5.** Give the Reverse Polish form of a * (b + c). **[2]**

## Section B

**6.** Convert each infix expression to Reverse Polish notation.

**(a)** (a + b) * (c - d) **[2]**
**(b)** a * b + c / d **[2]**
**(c)** 10 - 4 - 3 **[2]**
**(d)** a - (b - c) **[2]**

**7.** Evaluate the Reverse Polish expression `7 2 3 * + 4 -`. Show the contents of the stack after each item is read. **[4]**

**8.** Evaluate the Reverse Polish expression `24 4 2 + / 3 *`. Show the contents of the stack after each item is read. **[4]**

**9.** Convert the Reverse Polish expression `a b + c * d e / -` to infix form, with brackets only where they are needed. **[3]**

**10.** A student converts 8 - 3 - 2 to `8 3 2 - -`.

**(a)** Calculate the value of the student's Reverse Polish expression. **[1]**
**(b)** Calculate the value of 8 - 3 - 2. **[1]**
**(c)** Give the correct Reverse Polish expression. **[1]**

**11.** Describe the algorithm used to evaluate a Reverse Polish expression using a stack, including the order in which operands are taken from the stack for subtraction. **[4]**

**12.** An expression tree has root `/`. Its left child is `+`, with leaves 9 and 3. Its right child is the leaf 4.

**(a)** Give the post-order traversal of the tree. **[1]**
**(b)** Evaluate the Reverse Polish expression from part (a). **[1]**
**(c)** Write the infix expression with brackets. **[1]**

**13.** Explain why a compiler or interpreter that uses a stack to execute instructions finds Reverse Polish notation easier to deal with than infix notation. **[3]**

---

## Answers

**1.** `6 9 +` [1].

**2.** Any two from: no brackets are needed; no operator precedence rules are needed to decide the order of evaluation; it can be evaluated in one pass using a stack [2].

**3.** A stack [1].

**4.** Any one: stack-based interpreters, for example PostScript; bytecode [1].

**5.** `a b c + *` [2]. (One mark for `b c +` grouped correctly; one mark for the whole answer.)

**6. (a)** `a b + c d - *` [2]. (One mark for `a b +` and `c d -` correct; one mark for the full answer.)
**(b)** `a b * c d / +` [2]. (One mark for `a b *` and `c d /` correct; one mark for the full answer.)
**(c)** `10 4 - 3 -` [2]. (One mark for `10 4 -` first; one mark for the full answer.)
**(d)** `a b c - -` [2]. (One mark for `b c -` first; one mark for the full answer.)

**7.**

| Item read | Stack after |
|---|---|
| 7 | 7 |
| 2 | 7, 2 |
| 3 | 7, 2, 3 |
| `*` | 7, 6 |
| `+` | 13 |
| 4 | 13, 4 |
| `-` | 9 |

Pushing operands correctly [1]; `*` gives 6 [1]; `+` gives 13 [1]; final result 9 [1].

**8.**

| Item read | Stack after |
|---|---|
| 24 | 24 |
| 4 | 24, 4 |
| 2 | 24, 4, 2 |
| `+` | 24, 6 |
| `/` | 4 |
| 3 | 4, 3 |
| `*` | 12 |

Pushing operands correctly [1]; `+` gives 6 [1]; `/` gives 24 / 6 = 4 [1]; final result 12 [1].

**9.** ((a + b) * c) - (d / e), which is also written (a + b) * c - d / e. One mark for (a + b) [1]; one mark for (a + b) * c with d / e as a separate part [1]; one mark for the subtraction joining them with correct operand order [1]. Brackets required: (a + b) only.

**10. (a)** 3 - 2 = 1, then 8 - 1 = 7 [1].
**(b)** 8 - 3 = 5, then 5 - 2 = 3 [1].
**(c)** `8 3 - 2 -` [1].

**11.** Read the expression from left to right [1]; if the item is an operand, push it onto the stack [1]; if it is an operator, pop two values, apply the operator and push the result [1]; for subtraction the first value popped is the right-hand operand and the second popped is the left-hand operand, so the second popped minus the first popped is calculated; the single value left on the stack at the end is the result [1].

**12. (a)** `9 3 + 4 /` [1].
**(b)** 9 + 3 = 12, then 12 / 4 = 3, so the value is 3 [1].
**(c)** (9 + 3) / 4 [1].

**13.** In Reverse Polish notation the operators appear in the order in which they must be carried out [1]; so the expression can be read once from left to right, pushing operands and applying each operator to the top items of the stack, with no brackets and no need to look ahead or backtrack [1]; infix notation needs precedence rules and bracket handling to decide the order, which means extra work or a conversion step first [1].

---

## Where marks are usually lost

- Taking the operands of subtraction or division in the wrong order.
- Moving operands around when converting, instead of only placing operators.
- Giving a + b × c as `a b + c *`.
- Stating "it is quicker" without saying why (no brackets, one pass, stack).
- Writing a trace with only the final answer and no stack contents.
