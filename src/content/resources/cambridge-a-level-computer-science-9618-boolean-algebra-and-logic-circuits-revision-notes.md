---
title: "Cambridge A Level Computer Science (9618): Boolean Algebra and Logic Circuits -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15: Hardware and Virtual Machines"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 15.2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
    subtopic: "boolean-algebra-and-logic-circuits"
description: "Condensed 9618 notes on adders, SR and JK flip-flops, Boolean laws, De Morgan's laws and Karnaugh map rules, with exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 15.2 "Boolean Algebra and Logic Circuits" of Cambridge International AS & A Level Computer Science 9618: truth tables for circuits (including half and full adders and gates with more than two inputs), SR and JK flip-flops and their role in storing data, Boolean algebra and De Morgan's laws, and Karnaugh maps. It is assessed in Paper 3.

Related: [Boolean algebra and logic circuits study guide](/resources/cambridge-a-level-computer-science-9618-boolean-algebra-and-logic-circuits/) · [Boolean algebra and logic circuits practice questions](/resources/cambridge-a-level-computer-science-9618-boolean-algebra-and-logic-circuits-practice/) · [Topic 15 revision notes](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-revision-notes/)

## Key terms

| Term | Meaning |
|---|---|
| Sum of products | Product (AND) terms joined by OR, such as A.B + Ā.C |
| Half adder | Adds two bits: S = A ⊕ B, C = A.B |
| Full adder | Adds two bits and a carry in: S = A ⊕ B ⊕ Cin; Cout = 1 when two or more inputs are 1 |
| Flip-flop | Circuit with two stable states that stores one bit |
| Feedback | Outputs connected back to inputs, so the circuit remembers its state |
| SR flip-flop | Set/reset inputs; S = R = 1 not allowed |
| JK flip-flop | Clocked; J = K = 1 toggles the output |
| De Morgan's laws | NOT(A.B) = Ā + B̄ and NOT(A + B) = Ā.B̄ |
| Karnaugh map | Grid of a truth table in Gray-code order so adjacent cells differ in one variable |

## Truth tables: method

1. All input combinations in binary order: 2ⁿ rows for n inputs (3 inputs: 8 rows; 4 inputs: 16 rows).
2. One column per intermediate gate output.
3. Final output last.

**Multi-input gates**: 3-input AND = 1 only if all are 1; 3-input OR = 1 if any is 1; 3-input NAND = 0 only if all are 1; 3-input NOR = 1 only if all are 0.

**Row to term**: for each output-1 row, AND all inputs, barring those that are 0. OR the terms.

## Adders

| A | B | Cin | S | Cout |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

- The half adder's table is the four rows where Cin = 0 (first, third, fifth and seventh), reading Cout as its carry.
- Full adder = two half adders + one OR gate (OR of the two carries).
- n-bit adder = n full adders chained, carry out to the next carry in.

## Flip-flops

**SR (cross-coupled NOR gates)**

| S | R | Q |
|---|---|---|
| 0 | 0 | Unchanged (stores) |
| 1 | 0 | 1 (set) |
| 0 | 1 | 0 (reset) |
| 1 | 1 | Not allowed: Q and Q̄ both 0, then unpredictable |

**JK (clocked)**

| J | K | Q after clock |
|---|---|---|
| 0 | 0 | Unchanged |
| 1 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 1 | Toggles |

- The JK removes the invalid state by feeding Q and Q̄ back to the input AND gates.
- The clock makes all flip-flops in a register change together.
- **Role**: each flip-flop stores one bit; groups form registers and static RAM.

## Boolean laws

| Law | Forms |
|---|---|
| Identity | A.1 = A; A + 0 = A |
| Null | A.0 = 0; A + 1 = 1 |
| Idempotent | A.A = A; A + A = A |
| Inverse | A.Ā = 0; A + Ā = 1 |
| Double negation | NOT(Ā) = A |
| Absorption | A + A.B = A; A.(A + B) = A |
| Distributive | A.(B + C) = A.B + A.C |
| Useful result | A + Ā.B = A + B |

**De Morgan**: break the bar, change the sign. Work from the outermost bar in.

- NOT(A.B.C) = Ā + B̄ + C̄
- NOT(A + B + C) = Ā.B̄.C̄
- NOT(A.B̄ + C) = (Ā + B).C̄

## Karnaugh map rules

- Order rows and columns 00, 01, 11, 10.
- Group 1s only, in rectangles of 1, 2, 4, 8 (or 16).
- Groups as large as possible, as few as possible.
- Groups may overlap and wrap round edges; the four corners form a group.
- Each group gives one term: keep only variables that stay constant across it.
- A group of 2 removes one variable, 4 removes two, 8 removes three.

**Benefits**: systematic and visual; gives a minimal sum of products; fewer mistakes than algebra for 3 or 4 variables.

## Exam traps

- K-map ordered 00, 01, 10, 11.
- Missing the corner or edge wrap-round groups.
- A term keeps a variable that changes inside its group.
- Truth table with too few rows for the number of inputs.
- S = R = 1 described as toggling (that is JK with J = K = 1).
- De Morgan with the sign changed but the bar not split.
- Full adder carry written as A.B only, forgetting carries involving Cin.

## Self-test

1. How many rows does the truth table for a four-input circuit need?
2. Write the Boolean expressions for the sum and carry of a half adder.
3. A full adder has A = 1, B = 0, Cin = 1. State S and Cout.
4. What does an SR flip-flop do when S = 0 and R = 0?
5. Why is S = R = 1 not allowed in an SR flip-flop?
6. What happens to a JK flip-flop's output when J = 1, K = 1 and a clock pulse arrives?
7. State the role of flip-flops in a computer.
8. Apply De Morgan's laws to NOT(A + B̄).
9. Simplify A + A.B.
10. Simplify A.B + A.B̄.
11. In a four-variable K-map, which variables are removed by a group of four cells?
12. Give one benefit of a Karnaugh map over Boolean algebra.

### Answers

1. 2⁴ = 16 rows.
2. S = A ⊕ B; C = A.B.
3. S = 0, Cout = 1.
4. It holds its previous state (stores the bit).
5. Both outputs become 0, which is not a valid complementary pair, and the state after the inputs return to 0 is unpredictable.
6. The output toggles (inverts).
7. Each flip-flop stores one bit; they form registers and static memory.
8. Ā.B.
9. A (absorption).
10. A.(B + B̄) = A.1 = A.
11. The two variables that change across the group.
12. Any one: systematic and visual; gives a minimal expression directly; fewer errors for three or four variables.
