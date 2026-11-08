---
title: "IGCSE Computer Science: Boolean Logic — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Boolean logic"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 10
syllabusTopics:
  - qualification: "igcse"
    topic: "boolean-logic"
description: "Revision notes on NOT, AND, OR, NAND, NOR and XOR gates, truth tables, logic expressions and building circuits from problem statements for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 10 Boolean logic asks you to know six logic gates, their symbols and truth tables, and to move between four representations of the same logic: a problem statement, a logic expression, a logic circuit and a truth table. In Cambridge IGCSE Computer Science (0478) it is examined on Paper 2, with circuits of up to three inputs and one output, and circuits must be drawn exactly as the statement is given, without simplification.

Condensed for the final weeks. For the full explanation and gate symbols, use the
[Boolean logic study guide](/resources/cambridge-igcse-computer-science-boolean-logic-study-guide/); for exam practice, use the
[Boolean logic practice questions](/resources/igcse-computer-science-boolean-logic-practice/).

## Syllabus coverage

Learning outcomes from the Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028:

| Ref | Learning outcome (summarised) |
|---|---|
| 10.1 | Identify and use the standard symbols for logic gates |
| 10.2 | Define and understand the functions of NOT, AND, OR, NAND, NOR and XOR (EOR), including the output for every input combination |
| 10.3(a) | Create logic circuits from a problem statement, logic expression or truth table |
| 10.3(b) | Complete a truth table from a problem statement, logic expression or logic circuit |
| 10.3(c) | Write a logic expression from a problem statement, logic circuit or truth table |

NOT has one input; every other gate is limited to two inputs.

## The six gates

| Gate | Output is 1 when… | Symbol shape |
|---|---|---|
| NOT | the input is 0 | Triangle with a small circle at the tip |
| AND | both inputs are 1 | Flat back, D-shaped front |
| OR | at least one input is 1 | Curved back, pointed front |
| NAND | NOT both inputs are 1 (output 0 only when both are 1) | AND shape with a circle at the output |
| NOR | both inputs are 0 | OR shape with a circle at the output |
| XOR | the inputs are different | OR shape with an extra curved line at the back |

## Two-input truth tables

| A | B | AND | OR | NAND | NOR | XOR |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |

NAND is the opposite of AND in every row; NOR is the opposite of OR in every row.

## Writing a logic expression

Use the gate names as operators and brackets to show the order: for example `X = (A AND B) OR NOT C`. Where NOT applies to a whole bracket, write it before the bracket: `X = NOT (A OR B)`, which is the same as `X = A NOR B`.

**From a problem statement:** pick out each condition, give it a letter, then join with AND / OR exactly as the words do.

> An alarm sounds (X = 1) if a door is open (D = 1) **and** the system is armed (S = 1), **or** if a window sensor detects breakage (W = 1).
> `X = (D AND S) OR W`

**From a truth table:** for each row where X = 1, write the inputs joined by AND (using NOT for a 0), then join the rows with OR.

> X = 1 only for A = 0, B = 1 and for A = 1, B = 0.
> `X = (NOT A AND B) OR (A AND NOT B)` — this is the XOR function.

## Completing a three-input truth table

Always list the inputs in binary counting order, 000 to 111, as Cambridge does. Add a working column for each gate.

**Worked example:** `X = (A AND B) OR (NOT B AND C)`

| A | B | C | A AND B | NOT B AND C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

## Drawing a circuit from an expression

1. Start with the innermost brackets — each bracket is one gate.
2. Draw NOT gates on the inputs that need them.
3. Feed the outputs of the bracket gates into the final gate.
4. Label the inputs A, B, C on the left and the output X on the right.

For `X = (A AND B) OR (NOT B AND C)`: input B splits — one branch to an AND gate with A, the other through a NOT gate into a second AND gate with C; both AND outputs go into an OR gate giving X. That is four gates.

Do **not** simplify. If the statement gives an expression with four gates, the circuit must have those four gates.

## Common mistakes / exam traps

- Listing the eight input rows in a random order, so rows are missed or repeated.
- Confusing NOR (1 only when both are 0) with NAND (0 only when both are 1).
- Treating XOR as OR: with both inputs at 1, XOR gives 0.
- Drawing three-input AND or OR gates — 0478 limits gates other than NOT to two inputs, so use two gates.
- Simplifying the circuit when the question says draw it for the given statement.
- Losing brackets: `NOT A AND B` is not the same as `NOT (A AND B)`.
- Drawing XOR without the second curved line, or NAND/NOR without the circle — the symbol then shows a different gate.

## Frequently asked questions

**How many rows does a three-input truth table have?**
Eight, one for each combination from 000 to 111. A two-input truth table has four rows.

**Can I write AND as a dot or OR as a plus in 0478?**
The syllabus does not set a notation, but Cambridge 0478 questions normally write expressions with the gate names, such as `X = (A AND B) OR NOT C`. Using the words matches the question and avoids any ambiguity.

**What is the difference between XOR and EOR?**
None. Both names mean exclusive OR: the output is 1 when the inputs are different. The 0478 syllabus lists it as XOR (EOR).

## Self-test

1. Which gate gives an output of 0 only when both inputs are 1?
2. State the output of A XOR B when A = 1 and B = 1.
3. Write a logic expression for: a light comes on (X = 1) if it is dark (D = 1) and motion is detected (M = 1), but not if the override switch is on (S = 1).
4. Give the value of `X = NOT (A OR B) AND C` when A = 0, B = 0, C = 1.
5. How many gates would you draw for `X = (A OR B) AND (B XOR C)`?

**Answers:** 1. NAND. 2. 0. 3. `X = (D AND M) AND NOT S`. 4. 1 — A OR B is 0, NOT gives 1, and 1 AND 1 is 1. 5. Three: an OR gate, an XOR gate and an AND gate.
