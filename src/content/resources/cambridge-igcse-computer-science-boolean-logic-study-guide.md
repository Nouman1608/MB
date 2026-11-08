---
title: "Cambridge IGCSE Computer Science (0478): Boolean logic -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 10: Boolean logic"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 10
syllabusTopics:
  - qualification: "igcse"
    topic: "boolean-logic"
description: "NOT, AND, OR, NAND, NOR and XOR gates, truth tables, logic expressions and logic circuits from a problem statement, for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Boolean logic is the mathematics behind every digital circuit. Each input is either 1 (true, on) or 0 (false, off), and a logic gate produces an output that depends only on its inputs. In Cambridge IGCSE Computer Science 0478 you need to know six gates, build truth tables, convert between circuits, expressions and tables, and design a circuit from a written description. The work is methodical, and careful working is what earns the marks.

## Where this fits in the specification

Boolean logic is Topic 10, the last topic in the syllabus. It connects to the hardware topic, because processors are built from millions of logic gates, and to programming, because the AND, OR and NOT operators used in `IF` statements follow exactly the same truth tables. Questions generally appear on the algorithm and programming paper and are worth several marks at a time.

## The six logic gates

| Gate | Output is 1 when | Expression |
|---|---|---|
| NOT | the input is 0 (it inverts) | X = NOT A |
| AND | both inputs are 1 | X = A AND B |
| OR | at least one input is 1 | X = A OR B |
| NAND | not both inputs are 1 | X = A NAND B |
| NOR | neither input is 1 | X = A NOR B |
| XOR | the inputs are different | X = A XOR B |

NAND is NOT AND (the AND output inverted), and NOR is NOT OR. XOR means "one or the other but not both". The full two-input truth table is:

| A | B | AND | OR | NAND | NOR | XOR |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |

Learn the pattern: AND has exactly one 1, OR has exactly one 0, NAND and NOR are their opposites, and XOR is 1 only when the inputs differ.

### Drawing the gates

Each gate has its own standard symbol. NOT is a triangle with a small circle at its output. AND has a flat back and curved front. OR has a curved back and a pointed front. The small circle on a NAND or NOR symbol means "inverted", and XOR looks like OR with an extra curved line across the back. Draw gates large, label every input and the output, and make sure each wire clearly joins a gate.

## Building truth tables

A truth table lists every combination of inputs and the resulting output. For n inputs there are 2^n rows: 4 rows for two inputs, 8 rows for three inputs. Write the input rows in binary counting order (000, 001, 010, 011 and so on) so you do not miss or repeat one.

For a circuit with more than one gate, add a column for the output of each gate. Work left to right through the circuit, filling one intermediate column at a time, then the final output. Do not try to find the final output in one step: this is where most errors come from.

## From circuit to expression, and expression to circuit

Reading a circuit, write the output of each gate in terms of its inputs, then combine. Use brackets to show the order. For example, if A and the NOT of B go into an AND gate, and that result and C go into an OR gate, the expression is X = (A AND (NOT B)) OR C.

Going the other way, build from the inside out: start with the innermost bracket, draw that gate, then feed its output into the next gate. Circuits at this level have at most three inputs and one output, and they are small, so if you find yourself drawing a very large circuit, check your expression.

## Writing a logic expression from a problem statement

Read the sentence and spot the key words. "Both" or "and" suggests AND. "Either" or "or" suggests OR. "Not" or "unless" suggests NOT. Break the statement into parts, give each condition a letter, then join them.

For example: "A safe alarm sounds (S = 1) when the door is open (D = 1) and the keypad is not unlocked (K = 0), or when the panic button is pressed (P = 1)." Then S = (D AND NOT K) OR P.

## Worked example 1: a three-input truth table

Complete the truth table for X = (A AND NOT B) OR C.

First find NOT B, then A AND NOT B, then OR with C. Work row by row:

| A | B | C | NOT B | A AND NOT B | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |

The output is 1 in rows 2, 4, 5, 6 and 8, so X has five 1s and three 0s. Check one row by hand: A = 1, B = 1, C = 0. NOT B is 0, so A AND NOT B is 0. C is 0, so 0 OR 0 gives 0. The table shows 0.

## Worked example 2: XOR and NOR in a circuit

Complete the truth table for P = (A XOR B) AND (NOT C), and for Q = (A NOR B) AND C.

| A | B | C | A XOR B | NOT C | P | A NOR B | Q |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |

P is 1 only when A and B differ and C is 0, which happens in rows 3 and 5. Q is 1 only when A and B are both 0 and C is 1, which happens only in row 2.

## Worked example 3: expression from a truth table

A circuit has inputs A and B and X = 1 only when the inputs differ. This is XOR. Using only AND, OR and NOT: X = (A AND NOT B) OR (NOT A AND B). Check: A = 1, B = 0 gives (1 AND 1) OR (0 AND 0) = 1; A = 1, B = 1 gives (1 AND 0) OR (0 AND 1) = 0. The expression matches XOR in all four rows.

## Common mistakes

- Missing a row, or listing rows in a random order, so that a combination is repeated.
- Treating NAND as "NOT A AND NOT B". It is NOT (A AND B), which is a different function.
- Confusing OR with XOR: OR is also 1 when both inputs are 1.
- Writing the final column only, with no working columns, then losing the method marks when a row is wrong.
- Mixing up the AND and OR symbols, or leaving a wire that does not clearly connect.

## Exam technique

Always give working. Even if the final column is wrong, correct intermediate columns can earn marks. For **complete the truth table**, check how many rows are expected (2^n) before you start. For **draw a logic circuit**, first write the expression, with brackets, from the problem statement, then draw one gate per operator, and label every gate input and the output. For **write a logic expression**, use the correct words (AND, OR, NOT) and brackets, or the symbols shown in the question. Finally, test your own answer using two rows of the truth table.

## Check your understanding

1. State when the output of a NOR gate is 1. *Only when both inputs are 0.*
2. How many rows does a truth table for three inputs have? *8.*
3. Complete: A NAND B when A = 1 and B = 1. *0.*
4. Write an expression for "the heater switches on (H = 1) when it is cold (C = 1) and the window is not open (W = 0)". *H = C AND (NOT W).*
5. For X = (A AND NOT B) OR C, give the value of X when A = 0, B = 1, C = 1. *1.*
6. What is the difference between OR and XOR? *OR is 1 when either or both inputs are 1; XOR is 1 only when exactly one input is 1.*
7. In Worked example 2, which rows give P = 1? *Rows 3 and 5 (A = 0, B = 1, C = 0 and A = 1, B = 0, C = 0).*
8. Why should you write the logic expression before drawing a circuit? *It gives you one gate per operator, shows the order of the brackets and reduces the risk of missing or adding a gate.*

## Frequently asked questions

**Which logic gates are in Cambridge IGCSE Computer Science 0478?**
The six gates are NOT, AND, OR, NAND, NOR and XOR. Circuits at this level have at most three inputs and one output.

**How many rows does a truth table need?**
A truth table for n inputs has 2^n rows, so two inputs need 4 rows and three inputs need 8. List the input rows in binary counting order so none is missed.

**What is the difference between OR and XOR?**
OR gives 1 when either or both inputs are 1, while XOR gives 1 only when exactly one input is 1.

**Is NAND the same as NOT A AND NOT B?**
No. NAND is NOT (A AND B), which is a different function from NOT A AND NOT B.
