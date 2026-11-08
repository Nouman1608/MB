---
title: "IGCSE Computer Science: Boolean Logic — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
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
description: "Original logic questions with full answers on naming gates, three-input truth tables and expressions from circuits and statements, for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Boolean logic study guide](/resources/cambridge-igcse-computer-science-boolean-logic-study-guide/) and
[revision notes](/resources/igcse-computer-science-boolean-logic-revision-notes/)

These questions cover Topic 10 of the Cambridge IGCSE Computer Science 0478 syllabus (2026–2028): the six logic gates and their truth tables, and moving between problem statements, logic expressions, logic circuits and truth tables. Topic 10 is assessed on Paper 2. Circuits are limited to three inputs and one output, and every gate except NOT has two inputs.

Because circuits cannot be drawn on this page, circuit questions describe the circuit in words. In the exam you would draw the standard gate symbols.

---

## Section A

**1.** Name the logic gate described in each statement. **[3]**

(a) The output is 1 only when both inputs are 1.
(b) The output is 1 when the two inputs are different.
(c) The output is 1 only when both inputs are 0.

**2.** Complete the truth table for an OR gate and a NOR gate. **[2]**

| A | B | A OR B | A NOR B |
|---|---|---|---|
| 0 | 0 | | |
| 0 | 1 | | |
| 1 | 0 | | |
| 1 | 1 | | |

**3.** State the output X for each expression when A = 1, B = 0 and C = 1. **[3]**

(a) `X = A NAND C` (b) `X = (A XOR B) AND C` (c) `X = NOT (B OR C)`

## Section B

**4.** A car engine can only be started (X = 1) when the key is turned (K = 1) and either the driver's foot is on the brake (B = 1) or the gear lever is in park (P = 1).

**(a)** Write a logic expression for X. **[2]**
**(b)** Complete the truth table for X. **[4]**
**(c)** Describe the logic circuit you would draw for this statement. **[2]**

**5.** A circuit is built like this: inputs A and B go into a NOR gate. The output of the NOR gate and input C go into an XOR gate, whose output is X.

**(a)** Write the logic expression for this circuit. **[2]**
**(b)** Complete the truth table for all eight input combinations. **[4]**

**6.** Complete the truth table for `X = NOT (A AND B) OR (B XOR C)`. Show a working column for each bracket. **[4]**

**7.** A truth table for a three-input circuit gives X = 1 only for these input combinations: A = 0, B = 1, C = 1; A = 1, B = 1, C = 0; and A = 1, B = 1, C = 1. For every other combination X = 0.

Write a logic expression for X. **[3]**

**8.** Describe the logic circuit for `X = (A OR NOT B) AND C`, stating each gate and what its inputs are. **[3]**

**9.** A greenhouse fan (X) switches on when the temperature is high (T = 1) and the window is closed (W = 0), or when the humidity is high (H = 1) whatever the temperature.

Write a logic expression for X. Do not simplify. **[3]**

---

## Answers

**1.** (a) AND [1]. (b) XOR (EOR) [1]. (c) NOR [1].

**2.** A OR B: 0, 1, 1, 1 [1]. A NOR B: 1, 0, 0, 0 [1].

**3.** (a) A NAND C = NOT (1 AND 1) = 0 [1]. (b) A XOR B = 1, and 1 AND C = 1, so X = 1 [1]. (c) B OR C = 1, NOT 1 = 0, so X = 0 [1].

**4. (a)** `X = K AND (B OR P)` [2]. (1 mark for K joined by AND; 1 mark for B OR P in brackets.)

**(b)**

| K | B | P | X |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

4 marks for all eight rows correct; 3 marks for 6–7 rows; 2 marks for 4–5 rows; 1 mark for 2–3 rows.

**(c)** B and P are the inputs to an OR gate [1]; the output of the OR gate and K are the inputs to an AND gate, whose output is X [1].

**5. (a)** `X = (A NOR B) XOR C` [2].

**(b)**

| A | B | C | A NOR B | X |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 1 |

Mark the X column as in Q4(b). *Tip:* A NOR B is 1 only on the first two rows; after that, X simply equals C.

**6.**

| A | B | C | NOT (A AND B) | B XOR C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 |

Marks: NOT (A AND B) column [1]; B XOR C column [1]; X column [2] (1 mark if one row wrong).

*Tip:* X is 0 only when both brackets are 0, which happens only in the last row.

**7.** `X = (NOT A AND B AND C) OR (A AND B AND NOT C) OR (A AND B AND C)` [3] — 1 mark for each correct bracketed term joined by OR.

Also accept an equivalent expression that gives the same truth table, such as `X = (B AND C) OR (A AND B)`.

**8.**
- Input B goes into a NOT gate [1].
- Input A and the output of the NOT gate go into an OR gate [1].
- The output of the OR gate and input C go into an AND gate, whose output is X [1].

**9.** `X = (T AND NOT W) OR H` [3]. (1 mark for T AND, 1 mark for NOT W, 1 mark for OR H with correct brackets.)

## Where marks are usually lost

- Q2 and Q5: confusing NOR with NAND, or treating XOR as OR in the 1, 1 row.
- Q4(a): dropping the brackets. `K AND B OR P` lets the engine start in park without the key, which does not match the statement.
- Q6: working out the whole expression in one step and making a slip — the working columns earn marks and catch errors.
- Q9: writing `W` instead of `NOT W`. The statement says the window is closed, which is W = 0.

## Frequently asked questions

**Can I simplify an expression before drawing the circuit?**
No. The 0478 syllabus says circuits must be drawn for the statement given, without simplification.

**Why are three-input terms such as A AND B AND C allowed in Q7?**
They are acceptable in an expression. If you draw that circuit, each three-input AND must be built from two two-input AND gates, because 0478 limits gates other than NOT to two inputs.

**How do I check a truth table answer?**
Pick two or three rows and work each one out directly from the original expression or statement. If they agree with your table, the method is probably right.
