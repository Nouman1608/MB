---
title: "OxfordAQA A-Level Computer Science (9645): Logic gates -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Logic Gates Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.6
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "logic-gates-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.7.6 Logic gates: six gate truth tables, circuit to expression, adders, D-type flip-flop and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.7.6 Logic gates** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.7 Computer organisation and architecture). For explanations and full worked examples, see the [logic gates study guide](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates/); then practise with the [logic gates practice questions](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-practice/).

**Notation.** NOT is a bar (A̅ for one letter, NOT(A + B) for a group), AND is ⋅, OR is + and XOR is ⨁. Precedence: NOT, then AND, then OR.

## What the specification requires

- Construct truth tables for **NOT, AND, OR, XOR, NAND, NOR** and know their symbols.
- Draw and interpret circuits using these gates; complete a truth table for a circuit.
- Write a Boolean expression for a circuit; draw a circuit for an expression.
- Recognise and trace **half-adder** and **full-adder** circuits; construct a half-adder (not a full-adder).
- Know the **edge-triggered D-type flip-flop** as a memory unit: clock and data inputs; when the clock goes high the input is stored and output until the clock goes high again. The internal operation is not required, and you will not draw circuits using flip-flops but may state the output of a simple one.

## Key terms

| Term | Meaning |
|---|---|
| Truth table | Every combination of inputs with the output for each; 2^n rows for n inputs |
| Half-adder | Adds two bits: S = A ⨁ B, C = A⋅B |
| Full-adder | Adds two bits and a carry in; two half-adders and an OR gate |
| Carry | The bit passed to the next column when a column total is 2 or more |
| D-type flip-flop | Memory unit that stores one bit on the clock edge |
| Rising edge | The moment the clock signal goes high |

## The six gates

| A | B | NOT A | AND | OR | XOR | NAND | NOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |

Memory aids:

- AND: 1 only when both are 1. OR: 1 unless both are 0.
- XOR: 1 when the inputs differ. NAND and NOR are the opposites of AND and OR.
- A circle on the output means NOT.

## Method: circuit to truth table

1. List all input rows in binary order.
2. Add a column for the output of every gate, left to right.
3. Fill each column by applying the gate rule to the columns it takes as inputs.
4. The last column is the output.

*Example.* A into NOT, its output and B into OR, that output and C into AND gives X = (A̅ + B)⋅C. X is 1 only for ABC = 001, 011 and 111.

## Method: expression to circuit

1. Find the **last** operation by precedence (NOT, then AND, then OR; brackets first).
2. That operation is the output gate.
3. Build each input to that gate in the same way.
4. Draw a NOT gate on each inverted input.

## Adders

**Half-adder** (construct and trace)

| A | B | S | C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

**Full-adder** (recognise and trace)

- S = (A ⨁ B) ⨁ Cin
- Cout = A⋅B + Cin⋅(A ⨁ B)
- Check: number of 1s on the inputs = S + 2 × Cout.

| A | B | Cin | S | Cout |
|---|---|---|---|---|
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

*Adding 10 and 11 (2 + 3).* Right column, half-adder: 0 + 1 gives S = 1, C = 0. Left column, full-adder: 1 + 1 + 0 gives S = 0, Cout = 1. Result: Cout S S = 1 0 1 = 5.

## D-type flip-flop trace

Q changes only at the rising clock edge, when it takes the value of D at that moment.

| Event | D | Q after |
|---|---|---|
| Rising edge | 1 | 1 |
| D changes to 0, no edge | 0 | 1 |
| Rising edge | 0 | 0 |
| D changes to 1, no edge | 1 | 0 |

## Exam traps

- **XOR is not OR.** For 1 and 1 the XOR output is 0.
- **Missing rows.** Three inputs need eight rows.
- **Precedence.** A + B⋅C means A + (B⋅C).
- **Half-adder has no carry in.** Only the full-adder does.
- **Flip-flop.** Q ignores D between clock edges.
- **Unlabelled wires.** Label the output of each gate so you can see the expression.
- **Symbols.** The circle for NOT is easy to leave off; a gate without it is a different gate.

## Quick self-test

1. What is the output of A NAND B when A = 1 and B = 1?
2. For which inputs is A NOR B equal to 1?
3. How many rows does a truth table with four inputs have?
4. Write the expression for a circuit where A and B go into an AND, and the output and C go into an OR.
5. Give the expressions for S and C in a half-adder.
6. How many bits does a half-adder add?
7. What extra input does a full-adder have?
8. What does a full-adder output for A = 0, B = 1, Cin = 1?
9. What gates build a full-adder?
10. When does a D-type flip-flop store its input?
11. D = 1 between clock edges, then goes to 0 and stays there. Q was 0. A rising edge happens after D goes to 0. What is Q after the edge?
12. Why is a flip-flop called a memory unit?

### Answers

1. 0.
2. Both inputs 0.
3. 16.
4. X = A⋅B + C.
5. S = A ⨁ B and C = A⋅B.
6. Two bits.
7. A carry in.
8. S = 0 and Cout = 1.
9. Two half-adders and an OR gate.
10. When the clock signal goes high (the rising edge).
11. 0, because Q takes the value of D at the edge, which is 0.
12. It stores one bit and keeps outputting it until the next clock edge.

## Next steps

- [Logic gates study guide](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates/)
- [Logic gates practice questions](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-practice/)
- [Boolean algebra revision notes](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.6 Logic gates.
