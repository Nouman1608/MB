---
title: "OxfordAQA IGCSE Computer Science (9210): Boolean logic -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Boolean Logic Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4.02
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
  - qualification: "igcse"
    topic: "computer-systems-9210"
    subtopic: "boolean-logic-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.4.2: NOT, AND and OR gates, truth tables, Boolean expressions, logic circuits and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.4.2 Boolean logic** of OxfordAQA International GCSE Computer Science (9210). Worked
examples are in the [Boolean logic study guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-logic/).

## What the specification asks

- Construct truth tables for **NOT, AND, OR** gates. (NAND, NOR and XOR are **not** needed.)
- Construct truth tables for **simple logic circuits** (up to **three inputs**, using only NOT, AND, OR).
- **Interpret** truth tables.
- **Create, modify and interpret** simple logic circuit diagrams.
- **Write a Boolean expression** for a circuit and **draw a circuit** for an expression.

## Notation

| Operation | Expression | Gate shape |
|---|---|---|
| NOT | A with a bar over it, Ā | Triangle with a small circle at the output |
| AND | A · B | D shape |
| OR | A + B | Curved shape pointing right |

Order of working: **brackets, then NOT, then AND, then OR**. Always use brackets.

## Gate truth tables

| A | Ā |
|---|---|
| 0 | 1 |
| 1 | 0 |

| A | B | A · B | A + B |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

- **NOT** reverses its one input.
- **AND** gives 1 only when all inputs are 1.
- **OR** gives 1 when at least one input is 1 (including both).

## Truth table method

1. Number of rows is 2 to the power n (2 inputs: 4 rows; 3 inputs: 8 rows).
2. List the inputs in binary order (000, 001, 010, ... 111).
3. Add a working column for each gate before the last one.
4. Fill in one column at a time.
5. Check one row by tracing through the circuit.

## Worked examples

### Q = Ā + B

| A | B | Ā | Q |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 |

Q is 0 only when A is 1 and B is 0.

### Q = (A + B) · C

| A | B | C | A + B | Q |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

Q is 1 when C is 1 and at least one of A and B is 1.

### Q = A · (B + C̄)

| A | B | C | C̄ | B + C̄ | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 | 1 |

Q is 0 whenever A is 0. When A is 1, Q is 0 only when B is 0 and C is 1.

## From a description to an expression

| Description | Expression |
|---|---|
| Alarm (X) when armed (S) and the window (W) or door (D) sensor is on | X = S · (W + D) |
| Heater (H) when cold (C) and the window is not open (W) | H = C · W̄ |
| Light (L) when night (N) and motion (M) or door (D) | L = N · (M + D) |

Words to symbols: "and" gives a dot; "or" gives a plus; "not" gives a bar.

## Drawing a circuit from an expression

1. Find the **last** operation and draw that gate with output Q.
2. Treat each input of that gate as a smaller expression.
3. Continue until all inputs are single letters.
4. Put a NOT gate wherever a letter has a bar.

## Writing an expression from a circuit

1. Start at the inputs.
2. Write the expression at the output of each gate, with brackets.
3. The expression at the last gate is Q.

## Modifying a circuit

- Changing AND to OR (or the reverse) changes some rows of the table.
- Adding a NOT on the output reverses every row.
- Adding an input doubles the number of rows.

Rewrite the expression, then redo the truth table.

## Interpreting a truth table

Say **when the output is 1**, in plain words. In Q = (A + B) · C, the output is 1 when C is on and at least one of A and
B is on.

## Exam traps

- **Input rows in a different order** each time, so a row is lost.
- **No working columns**, so mistakes are not visible.
- **OR treated as exclusive**: the row 1, 1 gives 1.
- **NOT on the wrong letter**, or a bar that spans too much.
- **Missing brackets**: A + B · C is not (A + B) · C.
- **NOT with two inputs.** NOT has one.
- **NAND, NOR or XOR** used. They are not on the specification.
- **Wrong number of rows**: two inputs give 4 rows, three inputs give 8.

## Key terms

| Term | Meaning |
|---|---|
| Boolean | A value that is either 1 (true) or 0 (false) |
| Logic gate | A component that produces an output from its inputs by a fixed rule |
| Truth table | A table of every input combination and its output |
| Expression | A written rule using the notation for NOT, AND and OR |
| Logic circuit | Gates connected together |

## Self-test

1. State the output of a NOT gate when its input is 1.
2. State the output of an AND gate when its inputs are 1 and 0.
3. State the output of an OR gate when its inputs are 1 and 1.
4. State the number of rows in a truth table with three inputs.
5. Write the expression for a circuit where A and B go to an AND gate and the output goes with C to an OR gate.
6. State the value of Q = A · B̄ when A = 1 and B = 0.
7. State the value of Q = (A + B) · C when A = 0, B = 1 and C = 0.
8. Write an expression for "a fan (F) runs when it is hot (H) and the vent is open (V)".
9. State the effect of adding a NOT gate to the output of a circuit.
10. State when the output of Q = NOT (A + B) is 1.

**Answers:**
1. 0.
2. 0.
3. 1.
4. 8.
5. Q = (A · B) + C.
6. 1 (B̄ is 1, and 1 · 1 = 1).
7. 0 (A + B is 1; C is 0; 1 · 0 = 0).
8. F = H · V.
9. Every output in the truth table is reversed.
10. Only when A and B are both 0.

## More resources on this topic

- [Boolean logic study guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-logic/)
- [Boolean logic practice questions](/resources/oxfordaqa-igcse-computer-science-9210-boolean-logic-practice/)
- [Boolean operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations/)
