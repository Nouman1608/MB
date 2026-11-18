---
title: "Cambridge A Level Computer Science (9618): Boolean Algebra and Logic Circuits"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 15.2: truth tables, adders, SR and JK flip-flops, Boolean laws, De Morgan's laws and four-variable Karnaugh maps, with worked examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 15.2 of Cambridge International AS & A Level Computer Science 9618 asks you to "produce truth tables for logic circuits including half adders and full adders" (which "may include logic gates with more than two inputs"), to "show understanding of a flip-flop (SR, JK)", including drawing the circuit, deriving its truth table and understanding "the role of flip-flops as data storage elements", to "perform Boolean algebra using De Morgan's laws" and "simplify a logic circuit/expression", and to "solve logic problems using Karnaugh maps" and understand their benefits. It is A Level content, assessed in Paper 3.

Related: [Boolean algebra and logic circuits revision notes](/resources/cambridge-a-level-computer-science-9618-boolean-algebra-and-logic-circuits-revision-notes/) · [Boolean algebra and logic circuits practice questions](/resources/cambridge-a-level-computer-science-9618-boolean-algebra-and-logic-circuits-practice/) · [Topic 15 Hardware and Virtual Machines study guide](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide/)

## Notation used here

AND is a dot (A.B), OR a plus (A + B), NOT a bar (Ā) and XOR is A ⊕ B.

## Truth tables for circuits, including gates with more than two inputs

A gate with three inputs behaves exactly as you would expect from the two-input version: a three-input AND outputs 1 only when all three inputs are 1; a three-input OR outputs 1 when at least one input is 1; a three-input NOR outputs 1 only when all three are 0.

To produce the truth table of a whole circuit:

1. List every input combination in binary order (for three inputs, 000 to 111: eight rows).
2. Add a column for each **intermediate** output, labelled with where it is in the circuit (for example P = A.B).
3. Work each intermediate column from the inputs, then the final output from the intermediates.

Intermediate columns earn method marks and stop one slip spreading through the output.

### From a truth table to an expression

Each row with output 1 gives one product term containing every input, barred if it is 0 in that row. OR the terms together to get a **sum of products**. For example, rows 101 and 110 with output 1 give A.B̄.C + A.B.C̄. This expression is correct but rarely simplest, which is why simplification matters.

## Adders

A **half adder** adds two bits A and B. Sum S = A ⊕ B and carry C = A.B. It has no carry input, so it can only be used for the least significant bit.

A **full adder** adds A, B and a carry in (Cin):

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

S is 1 when an odd number of inputs are 1, so S = A ⊕ B ⊕ Cin. Cout is 1 when two or more inputs are 1. A full adder can be built from two half adders and an OR gate: the first half adder adds A and B; the second adds that sum to Cin; Cout is the OR of the two carries. Chaining full adders, each carry out feeding the next carry in, adds multi-bit numbers.

## Flip-flops as data storage

A **flip-flop** is a circuit with two stable states, so it can store one bit. Its output depends on its inputs **and** on its previous output, because the outputs are fed back into the gates. Eight flip-flops side by side form an 8-bit register; static RAM is built from flip-flop circuits.

### The SR flip-flop (NOR version)

Two NOR gates are cross-coupled: Q = NOT(R + Q̄) and Q̄ = NOT(S + Q). Derive its behaviour by trying each input pair:

- **S = 1, R = 0**: the lower gate has an input of 1, so Q̄ = 0; the upper gate then has inputs 0 and 0, so Q = 1. The flip-flop is **set**.
- **S = 0, R = 1**: by the same reasoning Q = 0 and Q̄ = 1. It is **reset**.
- **S = 0, R = 0**: each gate's output depends only on the other gate's output, so Q keeps its previous value. The bit is **stored**.
- **S = 1, R = 1**: both NOR gates output 0, so Q and Q̄ are both 0, which is not a valid pair. When the inputs return to 0 the state that results cannot be predicted, so this combination is **not allowed**.

| S | R | Q (next) | Meaning |
|---|---|---|---|
| 0 | 0 | Q (unchanged) | Hold |
| 1 | 0 | 1 | Set |
| 0 | 1 | 0 | Reset |
| 1 | 1 | Invalid | Not allowed |

### The JK flip-flop

A JK flip-flop adds a clock input and AND gates in front of the S and R inputs. Each AND gate also receives one of the outputs fed back: the J side is enabled only when Q̄ = 1, and the K side only when Q = 1. Changes happen on a clock pulse.

| J | K | Q after clock pulse |
|---|---|---|
| 0 | 0 | Unchanged |
| 1 | 0 | 1 (set) |
| 0 | 1 | 0 (reset) |
| 1 | 1 | Toggles (inverts) |

The feedback is what removes the invalid state: when J = K = 1, only the side matching the current output is enabled, so the output flips. Synchronising with a clock means many flip-flops in a register all change at the same moment.

## Boolean algebra

| Law | AND form | OR form |
|---|---|---|
| Identity | A.1 = A | A + 0 = A |
| Null | A.0 = 0 | A + 1 = 1 |
| Idempotent | A.A = A | A + A = A |
| Inverse | A.Ā = 0 | A + Ā = 1 |
| Absorption | A.(A + B) = A | A + A.B = A |
| Distributive | A.(B + C) = A.B + A.C | A + B.C = (A + B).(A + C) |
| De Morgan | NOT(A.B) = Ā + B̄ | NOT(A + B) = Ā.B̄ |

A useful result, derived from these, is A + Ā.B = A + B.

### Worked example 1: simplifying an expression from a circuit

*A circuit gives X = A.B + A.B̄.C. Simplify it.*

1. Take out the common factor A: X = A.(B + B̄.C). *(distributive)*
2. Use B + B̄.C = B + C: X = A.(B + C). *(the result above)*
3. Expand if a sum of products is wanted: X = A.B + A.C.

The result needs one OR and one AND gate instead of four gates. Check one row: A = 1, B = 0, C = 1 gives 0 + 1 = 1 in the original and 1.(0 + 1) = 1 in the result.

### Applying De Morgan's laws

The rule: **break the bar, change the sign**. Splitting a bar over an AND gives an OR of the barred parts, and the reverse. Work from the outermost bar inwards. For NOT(Ā.B + C): the outer bar covers an OR, so it becomes NOT(Ā.B) . C̄; then NOT(Ā.B) = A + B̄. Result: (A + B̄).C̄.

## Karnaugh maps

A **Karnaugh map** arranges the truth table so that cells next to each other differ in one variable only. Columns and rows use the order 00, 01, 11, 10. For four variables, put AB down the side and CD across the top.

**Benefits**: it is a systematic, visual method; making the largest possible groups gives a minimal sum of products without having to choose which law to apply next; it is quicker and less error-prone than algebra for three or four variables.

**Rules**: group only 1s; groups must be rectangles of 1, 2, 4, 8 or 16 cells; make groups as large as possible and as few as possible; groups may overlap and may wrap round the edges, including the four corners. For each group, keep only the variables that do not change across it.

### Worked example 2: a four-variable map

*F = 1 for the inputs ABCD = 0000, 0010, 0101, 0111, 1000, 1010, 1101 and 1111, and 0 otherwise.*

| AB \ CD | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 00 | 1 | 0 | 0 | 1 |
| 01 | 0 | 1 | 1 | 0 |
| 11 | 0 | 1 | 1 | 0 |
| 10 | 1 | 0 | 0 | 1 |

- **The four corners** form one group of four, because the map wraps both ways. Across these cells A changes and C changes, but B = 0 and D = 0 throughout: term **B̄.D̄**.
- **The centre square** (rows 01 and 11, columns 01 and 11) is a group of four with B = 1 and D = 1 throughout: term **B.D**.

F = B̄.D̄ + B.D. All eight 1s are covered by two terms, compared with eight four-variable terms in the sum of products. (This is NOT(B ⊕ D), output 1 when B and D are equal.)

## Common mistakes

- Columns ordered 00, 01, 10, 11 on a K-map: adjacent cells then differ in two variables and the groups are wrong.
- Groups of three or six cells, or missing the wrap-round and corner groups.
- Keeping a variable in a term when it changes within the group.
- De Morgan applied by changing the sign but not breaking the bar, or the reverse.
- In an SR flip-flop, describing S = R = 1 as "toggle"; that is the JK flip-flop.

## Exam technique

- **Complete** a truth table: include every intermediate column, then check the output against one row by hand.
- **Simplify**: name the law at each step, so that each valid step can earn method marks.
- **Draw** a circuit from an expression: one gate per operator, inputs on the left, output on the right; use multi-input gates where the expression allows.
- **Explain** a flip-flop: describe the effect of each input pair and the role of feedback, and say it stores one bit.
- **Solve** with a K-map: draw the map with labelled rows and columns, ring the groups, then write one term per group.
