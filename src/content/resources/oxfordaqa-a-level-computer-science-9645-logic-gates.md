---
title: "OxfordAQA A-Level Computer Science (9645): Logic gates"
seoTitle: "OxfordAQA A-Level CS 9645 Logic Gates Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.7.6 in depth: gate truth tables, reading and drawing circuits, half and full adders and the D-type flip-flop, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.7.6 Logic gates** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.7 Computer organisation and architecture (AS). The specification asks you to construct truth tables for **NOT, AND, OR, XOR, NAND and NOR**; to draw and interpret logic circuit diagrams; to complete a truth table for a given circuit; to write a Boolean expression for a circuit and draw a circuit for an expression; to recognise and trace the circuits of a **half-adder and a full-adder** and construct a half-adder; and to be familiar with the **edge-triggered D-type flip-flop** as a memory unit.

For quick recall use the [logic gates revision notes](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-revision-notes/), and test yourself with the [logic gates practice questions](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-practice/). Simplifying expressions belongs to the [Boolean algebra study guide](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra/). The [computer organisation and architecture study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/) covers the whole of topic 3.7.

**Notation.** The specification writes NOT as a bar over the letter, AND as ⋅, OR as + and XOR as ⨁. Here a bar over one letter appears as A̅, and a bar over a bracket is written NOT(A + B). The order of precedence is NOT first, then AND, then OR; brackets change the order.

## What a logic gate is

A logic gate is an electronic circuit with one or more inputs and one output. Each input and output is either 0 (low voltage) or 1 (high voltage). A gate applies a fixed rule to its inputs. Combining gates builds the circuits inside the ALU, the registers and the control unit, which is why the topic sits in computer organisation.

A **truth table** lists every combination of inputs with the resulting output. With *n* inputs there are 2^*n* rows, so two inputs give 4 rows and three inputs give 8 rows.

## The six gates

| A | B | NOT A | A AND B | A OR B | A XOR B | A NAND B | A NOR B |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |

In words:

- **NOT** outputs the opposite of its single input.
- **AND** outputs 1 only if **both** inputs are 1.
- **OR** outputs 1 if **at least one** input is 1.
- **XOR** (exclusive OR) outputs 1 if the inputs are **different**.
- **NAND** is AND followed by NOT: it outputs 0 only if both inputs are 1.
- **NOR** is OR followed by NOT: it outputs 1 only if both inputs are 0.

The symbols: AND is a shape with a flat back and a rounded front. OR has a curved back and a pointed front. XOR is the OR shape with a second curved line across the inputs. NOT is a triangle. NAND, NOR and the NOT gate have a small circle on the output, which means the output is inverted. Practise drawing each one neatly; in an exam, a gate that cannot be identified loses the mark.

## Reading a circuit: from diagram to expression

Work from the inputs towards the output and write an expression for every gate output.

**Worked example 1.** A and B go into a NAND gate. The output of the NAND and C go into an XOR gate, whose output is X.

1. NAND gives NOT(A⋅B).
2. XOR combines this with C, so **X = NOT(A⋅B) ⨁ C**.

To complete the truth table, work out the intermediate column first.

| A | B | C | NOT(A⋅B) | X |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 1 |

Check one row. For A = 1, B = 1, C = 1: NOT(1⋅1) = 0, and 0 ⨁ 1 = 1.

## Drawing a circuit: from expression to diagram

Follow the precedence rules to see which operation is done last. That operation is the final gate.

**Worked example 2.** Draw a circuit for Y = (A + B̅)⋅C.

1. The last operation is the AND with C, so the output gate is an AND.
2. One input to the AND is C.
3. The other input is the bracket A + B̅, which needs an OR gate.
4. The OR gate takes A and the output of a NOT gate whose input is B.

Y is 1 only when C is 1 and either A is 1 or B is 0.

| A | B | C | Y |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

Tips: label each wire as you go, draw a NOT gate on every inverted input, and use one gate per operation.

## The half-adder

A **half-adder** adds two single bits. It has two outputs: the **sum** (S) and the **carry** (C).

- S = A ⨁ B (an XOR gate)
- C = A⋅B (an AND gate)

| A | B | S | C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

A and B are each connected to both gates. The row 1 + 1 gives S = 0 and C = 1, which is binary 10. You may be asked to **construct** a half-adder, so be able to draw it: two input lines, each splitting to an XOR and an AND, with the XOR output labelled S and the AND output labelled C.

## The full-adder

A **full-adder** adds two bits **and a carry in** (Cin) from the previous column. It produces a sum and a carry out (Cout). It is built from **two half-adders and an OR gate**. The first half-adder adds A and B. The second adds the first sum and Cin. The OR gate combines the two carries.

- S = (A ⨁ B) ⨁ Cin
- Cout = A⋅B + Cin⋅(A ⨁ B)

You are expected to recognise and trace a full-adder. You will not be asked to construct one.

| A | B | Cin | A ⨁ B | A⋅B | Cin⋅(A ⨁ B) | S | Cout |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 |

In every row the number of 1s on the inputs equals S + 2 × Cout, so 1 + 1 + 1 gives S = 1 and Cout = 1 (binary 11).

**Worked example 3: adding 2-bit numbers.** Add 11 and 01 (3 + 1). The right-hand column uses a half-adder because there is no carry in: 1 + 1 gives S = 0, C = 1. The left-hand column uses a full-adder: 1 + 0 + carry 1 gives S = 0, Cout = 1. The result is Cout, S, S = 1 0 0, which is binary 100 = 4. This is how the ALU adds numbers, one column at a time, with the carry passed to the next.

## The D-type flip-flop

Logic gates have no memory: change the inputs and the output changes. A computer also needs circuits that **remember** a bit, and the **edge-triggered D-type flip-flop** is used as a memory unit. You need to know its behaviour only, not its internal circuit.

- It has a **data input (D)**, a **clock input** and an output **Q**.
- When the clock signal **goes high** (a rising edge), the current value of D is **stored** and appears on Q.
- Q **keeps that value** until the clock goes high again. Changes to D in between have no effect.

**Worked example.** The table follows the circuit through six events.

| Event | Clock | D at that moment | Q after the event |
|---|---|---|---|
| 1 | Rising edge | 1 | 1 |
| 2 | No edge | D changes to 0 | 1 |
| 3 | Rising edge | 0 | 0 |
| 4 | No edge | D changes to 1, then 0, then 1 | 0 |
| 5 | Rising edge | 1 | 1 |
| 6 | Rising edge | 1 | 1 |

A single flip-flop stores one bit. A row of them, sharing a clock, stores a word, which is how a register is built. You will not need to draw circuits containing D-type flip-flops, but you may be asked to state the output of a simple one.

## Exam technique

- **Add intermediate columns** to every truth table for a circuit. Each gate output gets a column.
- **List the rows in binary order** so that none is missed: 000, 001, 010 and so on.
- **Check the shape and the circles.** An inverting circle makes a NAND from an AND.
- **Obey precedence** when writing and reading expressions: NOT, then AND, then OR.
- **Use the notation** from the specification, or state clearly what your symbols mean.
- **For flip-flops, look for the clock edge.** Q only changes when the clock goes high.

## Common mistakes

- Confusing XOR with OR. OR outputs 1 for 1 and 1; XOR outputs 0.
- Confusing NOR with XOR, or NAND with AND.
- Reading A + B⋅C as (A + B)⋅C. AND is done first.
- Leaving out a row, especially when there are three inputs.
- Saying that the half-adder has a carry in.
- Saying that Q follows D all the time in a D-type flip-flop. It follows D only at the clock edge.

## Next steps

- [Logic gates revision notes](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-revision-notes/)
- [Logic gates practice questions](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-practice/)
- [Boolean algebra study guide](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.6 Logic gates.
