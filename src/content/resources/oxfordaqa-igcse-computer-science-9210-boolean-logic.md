---
title: "OxfordAQA IGCSE Computer Science (9210): Boolean logic -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Boolean Logic Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.4.2: NOT, AND and OR gates, truth tables for circuits with up to three inputs, and Boolean expressions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.4.2 Boolean logic** of OxfordAQA International GCSE Computer Science (9210). You must
be able to construct truth tables for the logic gates **NOT, AND and OR**; construct truth tables for **simple logic
circuits** and interpret them; **create, modify and interpret** simple logic circuit diagrams; and **write a Boolean
expression** to represent a circuit and **draw a circuit** that implements an expression. The specification limits
the work: truth tables have **up to three inputs**, circuits use **only NOT, AND and OR**, and you do not need NAND, NOR
or XOR. For Boolean logic inside programs (conditions with AND, OR and NOT), see the [Boolean operations in a
programming language study guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations/).

## Boolean values

A **Boolean** value has only two possible states: **1** (true, on) or **0** (false, off). Computer circuits are built
from tiny switches, so the inputs and outputs of a logic circuit are each either 1 or 0. A **logic gate** is an electronic
component that takes one or more Boolean inputs and produces a Boolean output according to a fixed rule.

## The three gates

### NOT

The NOT gate has **one input** and **one output**. It **reverses** the input: 1 becomes 0 and 0 becomes 1. Its symbol is a
triangle with a small circle at the output. In a Boolean expression, NOT A is written as A with a bar over it, **Ā**.

| A | Ā |
|---|---|
| 0 | 1 |
| 1 | 0 |

### AND

The AND gate has two inputs (or more). The output is **1 only if all inputs are 1**. Its symbol is a D shape with a flat
left-hand side. In a Boolean expression, A AND B is written **A · B**.

| A | B | A · B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### OR

The OR gate has two inputs (or more). The output is **1 if at least one input is 1**. Its symbol is a curved shape that comes
to a point on the right. In a Boolean expression, A OR B is written **A + B**.

| A | B | A + B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Note that in OR, the row 1, 1 gives 1. OR here is not "one or the other but not both".

## Truth tables

A **truth table** lists every combination of inputs and the output for each. With **n inputs** there are **2ⁿ rows**: 2 rows
for one input, 4 rows for two inputs and 8 rows for three inputs.

To write the input columns in a reliable order, count in binary. For three inputs A, B and C, the rows run from 000 to
111, so that A changes slowest and C changes fastest. Using the same order every time makes it easy to check your
work against the answer.

## Boolean expressions and the order of working

The notation used in 9210 is:

- **NOT**: a bar over the letter, Ā.
- **AND**: a dot, A · B.
- **OR**: a plus sign, A + B.

When an expression has several operators, work in this order: **brackets first, then NOT, then AND, then OR**. So
A + B · C means A + (B · C), and the AND is done before the OR. Always put brackets in when you write an expression, to
make the order clear.

## Truth tables for circuits

To build the truth table for a circuit or an expression:

1. Write a column for each **input** and list all the combinations.
2. Add a **working column** for the output of each gate that is not the final one.
3. Complete the working columns from left to right, in the order that the signals pass through the circuit.
4. Complete the final column for the output Q.

### Worked example 1: Q = Ā · B

The expression has two inputs. The NOT gate acts on A, and its output goes to an AND gate with B.

| A | B | Ā | Q = Ā · B |
|---|---|---|---|
| 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 |

Q is 1 only when A is 0 and B is 1.

### Worked example 2: Q = (A · B) + C̄

Here A and B go into an AND gate; C goes into a NOT gate; and the two results go into an OR gate.

| A | B | C | A · B | C̄ | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

Q is 1 in five rows. It is 0 only when C is 1 and A · B is 0.

### Worked example 3: Q = Ā · (B + C)

| A | B | C | Ā | B + C | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 |

Whenever A is 1, Ā is 0, so Q is 0 whatever B and C are. When A is 0, Q follows B + C.

### Interpreting a truth table

"Interpret the results" means saying in words **when the output is 1**. In Worked example 3, Q is 1 when A is off and at
least one of B and C is on. You can check any answer by reading one row and tracing the signals through the circuit.

## From a situation to an expression and a circuit

You are often given a description and asked for an expression.

**A security light (L) turns on when it is night (N) and either motion is detected (M) or the door sensor is active (D).**

- "either motion or door" gives M + D.
- "night and (that)" gives N · (M + D).

The expression is **L = N · (M + D)**. The circuit has an OR gate with inputs M and D, and the output of that gate and
the input N go to an AND gate whose output is L.

**A heater (H) switches on when the room is cold (C) and the window is not open (W).**

- "window not open" gives W̄.
- "cold and not open" gives C · W̄.

The expression is **H = C · W̄**: a NOT gate on W, whose output and C go into an AND gate.

## Drawing a circuit from an expression

1. Find the **last** operation. For Q = (A · B) + C̄ it is the OR.
2. Draw that gate with its output labelled Q. Its two inputs are the two parts of the expression.
3. Treat each part as a smaller circuit, and continue until the inputs are single letters.
4. Draw the connections as lines, and use a NOT gate at each place where a letter is barred.

For Q = (A · B) + C̄ the OR gate comes last, with one input from an AND gate fed by A and B, and the other from a NOT gate fed by C.

## Writing an expression from a circuit

1. Start at the inputs, and write the expression at the output of each gate, working towards Q.
2. Use the dot, plus and bar notation, and **put brackets** around each part that comes out of a gate.
3. The expression at the final gate is the expression for Q.

If A and B feed an OR gate, and that output and the output of a NOT gate fed by C feed an AND gate, then Q = (A + B) · C̄.

## Modifying a circuit

A question may ask you to change a circuit so that it behaves differently.

- **Change a gate.** Replacing an AND gate by an OR gate in Q = (A · B) + C̄ gives Q = (A + B) + C̄, which is 0 only when A
  and B are both 0 and C is 1.
- **Add a NOT gate.** Adding a NOT on the output reverses every row of the table. Q = NOT (A + B) is 1 only when both A and B
  are 0.
- **Add an input.** Include a gate to combine the new input, then extend the truth table to eight rows.

Always rewrite the expression after the change, and then reuse the method for the truth table.

## Common mistakes

- Writing the input rows in a different order each time, so that a row is missed or repeated.
- Forgetting the **working columns**, and trying to find Q in your head.
- Treating OR as "exclusive" and giving 0 for the row 1, 1.
- Applying NOT to the wrong letter or to a whole bracket by accident. Check where the bar starts and ends.
- Missing brackets in an expression, so that A + B · C is read the wrong way.
- Drawing a NOT gate with two inputs. NOT has one input.
- Using **NAND**, **NOR** or **XOR** gates in a circuit. Only NOT, AND and OR are used.
- Giving the wrong number of rows. Two inputs need 4 rows and three inputs need 8.

## Exam technique

- **Truth table** questions: write all the input combinations in binary order, add a working column for each
  intermediate gate, and fill in one column at a time.
- **Expression** questions: write the expression gate by gate, with brackets.
- **Circuit** questions: draw the last gate first, label every input and the output Q, and use the standard gate shapes.
- **Interpret** questions: describe the rows in which the output is 1 in plain words.
- Check one row by tracing the signals through the circuit from the inputs to Q.

## Next steps

For a condensed summary and a self-test, use the [Boolean logic revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-boolean-logic-revision-notes/), and practise with the
[Boolean logic practice questions](/resources/oxfordaqa-igcse-computer-science-9210-boolean-logic-practice/).
