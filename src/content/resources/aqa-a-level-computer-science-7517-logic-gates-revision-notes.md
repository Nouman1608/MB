---
title: "AQA A-Level Computer Science (7517): Logic gates -- Revision Notes"
seoTitle: "AQA A-Level CS Logic Gates Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "logic-gates-7517"
description: "Condensed AQA 7517 section 4.6.4 recall: gate truth tables and symbols, circuits and Boolean expressions, half and full adders, and the D-type flip-flop."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.6.4 Logic gates**, AQA A-Level Computer Science (7517). Fuller explanations are in the [logic gates study guide](/resources/aqa-a-level-computer-science-7517-logic-gates/); exam-style questions are in the [logic gates practice questions](/resources/aqa-a-level-computer-science-7517-logic-gates-practice/).

## Gates at a glance

Notation here: NOT A is ¬A, AND is ·, OR is +, XOR is ⊕. A bubble on a symbol means "invert". Symbols are the ANSI/IEEE 91-1984 distinctive shapes.

| Gate | Output is 1 when | Expression | Symbol |
|---|---|---|---|
| NOT | the input is 0 | ¬A | Triangle with a bubble |
| AND | both inputs are 1 | A·B | D-shape |
| OR | at least one input is 1 | A+B | Curved shield shape |
| XOR | the inputs are different | A⊕B | OR shape with an extra curve at the back |
| NAND | not both inputs are 1 | ¬(A·B) | AND shape with a bubble |
| NOR | both inputs are 0 | ¬(A+B) | OR shape with a bubble |

## Two-input truth tables

| A | B | AND | OR | XOR | NAND | NOR |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |

NOT: 0 gives 1, and 1 gives 0.

## Reading and writing circuits

- **Circuit to expression:** work from the inputs to the output, writing the expression at each gate output.
- **Expression to circuit:** find the **last operation** first; it is the final gate.
- **Truth table:** n inputs give 2ⁿ rows, in order 000, 001, 010, … Add a **column for each intermediate output**.

**Worked check.** X = (A⊕B)·C is 1 only for A, B, C = 0, 1, 1 and 1, 0, 1.

**Worked check.** Q = (A·B) + ¬C is 1 for rows (A, B, C) = 000, 010, 100, 110 and 111.

**Worked check.** X = (¬A·B) + C is 1 for rows 001, 010, 011, 101 and 111.

**Equivalent circuits.** A⊕B = (A+B)·¬(A·B). The OR and NAND outputs are both 1 for inputs 01 and 10 only. Equivalence is shown by identical truth tables.

**NAND as NOT.** Joining both inputs of a NAND gate together gives ¬A, because A NAND A = ¬A.

## Half-adder

Adds two bits A and B.

- **Sum S = A⊕B** (XOR).
- **Carry C = A·B** (AND).

| A | B | S | C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Construction: A and B each go to **both** an XOR gate and an AND gate.

## Full-adder

Adds A, B and a **carry in**; gives a sum and a **carry out**.

- Two half-adders and an OR gate.
- First half-adder: A and B give A⊕B and A·B.
- Second half-adder: A⊕B and carry in give S = A⊕B⊕carry in, and (A⊕B)·carry in.
- Carry out = (A·B) + ((A⊕B)·carry in).

| Inputs (A, B, carry in) | Sum | Carry out |
|---|---|---|
| 0, 0, 0 | 0 | 0 |
| 0, 0, 1 | 1 | 0 |
| 0, 1, 0 | 1 | 0 |
| 0, 1, 1 | 0 | 1 |
| 1, 0, 0 | 1 | 0 |
| 1, 0, 1 | 0 | 1 |
| 1, 1, 0 | 0 | 1 |
| 1, 1, 1 | 1 | 1 |

Chain full-adders (carry out to the next carry in) to add multi-bit numbers.

**Worked check.** 11 + 01: the right column adds 1 + 1, giving sum 0 and carry 1. The left column adds 1 + 0 + 1, giving sum 0 and carry 1. The result is 100 (3 + 1 = 4).

## D-type flip-flop

- **Edge-triggered:** the value on **D** is copied to the output **only at the clock edge** (for example 0 to 1).
- Between edges the output **holds** its value, whatever D does.
- It stores **one bit**: a basic **memory unit**. Several make a **register**.
- Internal gates are not required.

## Exam traps

- **Missing bubble:** AND against NAND, OR against NOR.
- **XOR as OR:** XOR gives 0 for 1, 1.
- **Skipped rows** in a truth table.
- **Wrong order** reading a circuit (start from the inputs).
- **Carry** missing from the half-adder, or an AND used to combine the full-adder carries instead of OR.
- **Flip-flop** output said to follow D at all times.

## Key terms

| Term | Definition |
|---|---|
| Logic gate | A circuit that gives a binary output from one or more binary inputs |
| Truth table | A table listing the output for every combination of inputs |
| Boolean expression | An algebraic expression in AND, OR, NOT and similar operators |
| Half-adder | A circuit that adds two bits, giving a sum and a carry |
| Full-adder | A circuit that adds two bits and a carry in |
| Flip-flop | A circuit that stores one bit |
| Clock edge | The moment a clock signal changes from one level to another |
| Register | A group of flip-flops that stores a binary word |

## Self-test

1. Which gate outputs 1 only if both inputs are 1?
2. Which gate outputs 1 only if the inputs differ?
3. Give the output of NOR for inputs 0 and 0.
4. How many rows does a truth table with four inputs have?
5. Write the expression for a half-adder's sum and carry.
6. Evaluate (A·B) + ¬C for A = 1, B = 0, C = 0.
7. How is a full-adder built?
8. What are the sum and carry out of 1 + 1 + 0 in a full-adder?
9. When does a D-type flip-flop change its stored value?
10. What does a bubble on a gate symbol mean?

**Answers**

1. AND.
2. XOR.
3. 1.
4. 16 (2⁴).
5. Sum S = A⊕B; carry C = A·B.
6. A·B = 0 and ¬C = 1, so the output is 1.
7. Two half-adders and an OR gate.
8. Sum 0, carry out 1.
9. Only at the clock edge, when it copies the value on D.
10. The output is inverted (NOT).

## Related resources

- [Logic gates study guide](/resources/aqa-a-level-computer-science-7517-logic-gates/)
- [Logic gates practice questions](/resources/aqa-a-level-computer-science-7517-logic-gates-practice/)
- [Binary number system revision notes](/resources/aqa-a-level-computer-science-7517-binary-number-system-revision-notes/)
- [Hardware and software revision notes](/resources/aqa-a-level-computer-science-7517-hardware-and-software-revision-notes/)
