---
title: "AQA A-Level Computer Science (7517): Logic gates"
seoTitle: "AQA A-Level CS Logic Gates Study Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.6.4 Logic gates: truth tables for NOT, AND, OR, XOR, NAND and NOR, circuits, Boolean expressions, half and full adders and the D-type flip-flop."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.6.4 Logic gates** in AQA A-Level Computer Science (7517). The specification asks you to:

- construct **truth tables** for the **NOT, AND, OR, XOR, NAND and NOR** gates, and know the **ANSI/IEEE standard 91-1984 distinctive shape** symbols;
- **draw and interpret** logic gate circuit diagrams involving one or more of these gates;
- **complete a truth table** for a given circuit;
- **write a Boolean expression** for a given circuit, and **draw an equivalent circuit** for a given Boolean expression;
- **recognise and trace** the logic of a **half-adder** and a **full-adder**, and **construct** the half-adder;
- be familiar with the use of the **edge-triggered D-type flip-flop** as a memory unit (its internal operation is not required).

The wider [fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/) covers all of section 4.6. Condensed notes are in the [logic gates revision notes](/resources/aqa-a-level-computer-science-7517-logic-gates-revision-notes/), and exam-style questions are in the [logic gates practice questions](/resources/aqa-a-level-computer-science-7517-logic-gates-practice/).

## Gates and truth tables

A **logic gate** is a circuit that takes one or more binary inputs (0 or 1, for false or true) and produces one binary output. A **truth table** lists the output for every combination of inputs. A gate with n inputs has 2ⁿ rows.

In Boolean expressions this guide writes NOT A as ¬A, A AND B as A·B, A OR B as A+B and A XOR B as A⊕B.

### NOT

A NOT gate (an **inverter**) outputs the opposite of its input. Symbol: a triangle with a small circle (a "bubble") on the output.

| A | ¬A |
|---|---|
| 0 | 1 |
| 1 | 0 |

### AND

The output is 1 only if **both** inputs are 1. Symbol: a D-shape with a flat back. Expression A·B.

| A | B | A·B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### OR

The output is 1 if **at least one** input is 1. Symbol: a curved shield shape with a concave back. Expression A+B.

| A | B | A+B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### XOR (exclusive OR)

The output is 1 if the inputs are **different**: one or the other but not both. Symbol: the OR shape with an extra curved line across the back. Expression A⊕B.

| A | B | A⊕B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### NAND and NOR

**NAND** is AND followed by NOT: the output is 0 only if both inputs are 1. Symbol: the AND shape with a bubble on the output. Expression ¬(A·B).

**NOR** is OR followed by NOT: the output is 1 only if both inputs are 0. Symbol: the OR shape with a bubble on the output. Expression ¬(A+B).

| A | B | NAND | NOR |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

A bubble on any gate symbol means "invert". Learn the symbols as shapes: the bubble tells NAND from AND and NOR from OR.

## Reading a circuit

A circuit joins gates so that the output of one is an input of another. To **write the Boolean expression**, work from the inputs to the output, writing the expression at the output of each gate.

**Worked example 1.** A circuit has an XOR gate with inputs A and B. Its output goes into an AND gate together with C. The output is X.

- Output of the XOR gate: A⊕B.
- Output of the AND gate: X = (A⊕B)·C.

**Complete the truth table** by working out the intermediate value for each row.

| A | B | C | A⊕B | X = (A⊕B)·C |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |

The output is 1 only when exactly one of A and B is 1 and C is 1. Adding a column for each intermediate gate output reduces mistakes.

## Drawing a circuit from an expression

Work from the outside in. The last operation in the expression is the gate that produces the output; its operands are the inputs to that gate.

**Worked example 2.** Draw a circuit for Q = (A·B) + ¬C.

- The last operation is OR (+), so an OR gate produces Q.
- One input to the OR gate is A·B, produced by an AND gate with inputs A and B.
- The other input is ¬C, produced by a NOT gate with input C.

| A | B | C | A·B | ¬C | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

**Worked example 3: from a description.** A security light comes on if it is dark (D) and motion is detected (M), or if the manual switch (S) is on. Expression: light = (D·M) + S. The circuit is an AND gate on D and M feeding an OR gate with S.

Two different circuits can have the same truth table. For example, A⊕B can also be built as (A+B)·¬(A·B): an OR gate and a NAND gate feeding an AND gate. Checking the truth tables confirms they are equivalent.

## The half-adder

A **half-adder** adds two single bits, A and B, and produces two outputs: the **sum** S and the **carry** C.

- S = A⊕B (an XOR gate);
- C = A·B (an AND gate).

| A | B | S | C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

The rows are 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1 and 1 + 1 = 10 in binary (sum 0, carry 1). To construct a half-adder, connect A and B to both an XOR gate and an AND gate. The XOR output is the sum and the AND output is the carry.

## The full-adder

A half-adder cannot add a carry coming in from the previous column. A **full-adder** adds three bits: A, B and the **carry in** (C in), and produces a sum S and a **carry out** (C out).

| A | B | C in | S | C out |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

A full-adder is built from **two half-adders and an OR gate**:

1. The first half-adder adds A and B, giving a partial sum A⊕B and a partial carry A·B.
2. The second half-adder adds the partial sum and C in, giving the final sum S = A⊕B⊕C in, and a second partial carry (A⊕B)·C in.
3. An OR gate combines the two carries: C out = (A·B) + ((A⊕B)·C in).

Trace A = 1, B = 1, C in = 1: the first half-adder gives partial sum 0 and carry 1; the second adds 0 and 1 giving sum 1 and carry 0; the OR of the carries 1 and 0 is 1. So S = 1 and C out = 1, which is 1 + 1 + 1 = 11 in binary ✓.

Chaining full-adders, with each carry out joined to the next carry in, builds a circuit that adds binary numbers of several bits. This is how the arithmetic part of a processor adds.

## The D-type flip-flop

A **flip-flop** is a circuit that can store one bit. The **edge-triggered D-type flip-flop** has a data input D, a clock input and an output Q. The value on D is **copied to Q only at the clock edge** (for example when the clock changes from 0 to 1). At all other times Q **keeps its stored value**, whatever D does.

So a D-type flip-flop is a **one-bit memory unit**. Several of them in a row form a **register**, and flip-flops are the basis of the memory in a processor. You do not need to know the gates inside. What matters is its behaviour: it samples D at the clock edge, remembers it, and shows it at Q.

## Common mistakes

- Drawing an AND gate for NAND, or an OR gate for NOR, by leaving off the bubble.
- Treating XOR as OR: XOR gives 0 when both inputs are 1.
- Writing the expression for a circuit from the output backwards and getting operands in the wrong gates. Work from the inputs.
- Missing rows in a truth table. n inputs need 2ⁿ rows, in a systematic order.
- Forgetting the carry in the half-adder, or using an OR gate for the sum.
- Describing the D-type flip-flop as changing its output whenever D changes.
- Combining the two carries of a full-adder with an AND gate instead of OR.

## Exam technique

- **Truth tables:** use a column for each intermediate gate output.
- **Expressions:** state the output of each gate in turn, and use brackets.
- **Circuits from expressions:** identify the final operation first.
- **Adders:** give the XOR and AND for the half-adder, and two half-adders plus an OR for the full-adder.
- **Flip-flop:** say that D is stored at the clock edge, and Q holds the value until the next edge.

## Related resources

- [Logic gates revision notes](/resources/aqa-a-level-computer-science-7517-logic-gates-revision-notes/)
- [Logic gates practice questions](/resources/aqa-a-level-computer-science-7517-logic-gates-practice/)
- [Binary number system study guide](/resources/aqa-a-level-computer-science-7517-binary-number-system/)
- [Hardware and software study guide](/resources/aqa-a-level-computer-science-7517-hardware-and-software/)

*Written against the AQA A-level Computer Science (7517) specification, 4.6.4 Logic gates. Always check the current specification on the AQA website.*
