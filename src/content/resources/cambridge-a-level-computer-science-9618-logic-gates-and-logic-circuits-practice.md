---
title: "Cambridge A Level Computer Science (9618): Logic Gates and Logic Circuits -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3.2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "logic-gates-and-logic-circuits"
description: "Original questions with mark-scheme answers on Cambridge 9618 section 3.2: gate functions, truth tables, logic expressions and circuits from problem statements."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available from your board.

These questions practise section 3.2 Logic Gates and Logic Circuits of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026. Because this page cannot show drawings, circuits are described gate by gate; in the exam you would draw them with the standard symbols. Every gate except NOT has two inputs. Revise first with the [logic gates study guide](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits/) and the [logic gates revision notes](/resources/cambridge-a-level-computer-science-9618-logic-gates-and-logic-circuits-revision-notes/).

## Section A

**1.** Describe the function of a NOR gate and give its truth table. **[2]**

**2.** Explain the difference between the outputs of an OR gate and an XOR gate. **[2]**

**3.** A light on a staircase is controlled by two switches, A at the top and B at the bottom. Changing the position of either switch changes the state of the light, X. Write a logic expression for X and name the single gate that performs it. **[2]**

**4.** Explain why the logic expression A AND B AND C needs two gates in a 9618 logic circuit. **[2]**

**5.** A circuit has three inputs. A and B are inputs to an XOR gate. The output of the XOR gate and input C are the inputs to a NOR gate, whose output is X.

**(a)** Write the logic expression for X. **[2]**

**(b)** Complete the truth table for the circuit. **[4]**

## Section B

**6.** Complete the truth table for the logic expression X = (A OR B) AND NOT (B AND C). Show the intermediate values. **[4]**

**7.** A drinks machine dispenses a drink (X = 1) when a coin has been inserted (C = 1) and a drink has been selected (S = 1), unless the machine is empty (E = 1).

**(a)** Write a logic expression for X. **[2]**

**(b)** Describe, gate by gate, the logic circuit for your expression. **[3]**

**8.** A warning light in a car, X, is on when the engine temperature is high (T = 1) or the oil pressure is low (P = 0), but only when the engine is switched on (E = 1).

**(a)** Write a logic expression for X. **[2]**

**(b)** Complete the truth table for X, with inputs in the order T, P, E. **[4]**

**9.** Write a logic expression for the truth table below. You do not need to simplify it. **[4]**

| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

**10.** A circuit has inputs P, Q and R. P and Q are inputs to a NAND gate. Q and R are inputs to an OR gate. The outputs of the NAND gate and the OR gate are inputs to an AND gate, whose output is X.

**(a)** Write the logic expression for X. **[2]**

**(b)** State the value of X when P = 1, Q = 1 and R = 0. Show your working. **[2]**

## Answers

**1.** The output is 1 only when both inputs are 0; otherwise it is 0 (it is NOT OR) [1]. Truth table: 0, 0 → 1; 0, 1 → 0; 1, 0 → 0; 1, 1 → 0 [1]. **[2]**

**2.** Both give 1 when exactly one input is 1 and 0 when both are 0 [1]; when both inputs are 1, OR gives 1 but XOR gives 0 [1]. **[2]**

**3.** X = **A XOR B** [1]; the **XOR (EOR)** gate [1]. **[2]**

**4.** The syllabus allows only two inputs for every gate except NOT [1], so A AND B is formed by one AND gate and its output is then ANDed with C by a second AND gate [1]. **[2]**

**5. (a)** X = **(A XOR B) NOR C** [2] (one mark for the XOR term, one for the NOR with C).

**(b)**

| A | B | C | A XOR B | X |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 | 0 |

Correct XOR column [1]; X column correct [3] (two marks for 6 or 7 correct rows, one mark for 4 or 5 correct rows). **[6]**

**6.**

| A | B | C | A OR B | B AND C | NOT (B AND C) | X |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 0 | 0 |

A OR B column correct [1]; NOT (B AND C) column correct [1]; X column correct [2] (one mark for 6 or 7 correct rows). **[4]**

**7. (a)** X = **(C AND S) AND NOT E** [2] (one mark for C AND S, one for AND NOT E).

**(b)** C and S are the two inputs to an AND gate [1]. E is the input to a NOT gate [1]. The outputs of the first AND gate and the NOT gate are the inputs to a second AND gate, whose output is X [1]. **[5]**

**8. (a)** X = **(T OR NOT P) AND E** [2] (one mark for T OR NOT P, one for AND E).

**(b)**

| T | P | E | X |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

All 8 rows correct [4] (three marks for 7 correct rows, two for 6, one for 5). **[6]**

**9.** X = (NOT A AND NOT B AND NOT C) OR (NOT A AND NOT B AND C) OR (A AND NOT B AND C) OR (A AND B AND C). One mark for each correct AND term, joined by OR [4]. (A correct equivalent expression, such as NOT (A OR B) OR (A AND C), also earns full marks.) **[4]**

**10. (a)** X = **(P NAND Q) AND (Q OR R)** [2] (one mark for each bracketed term combined with AND).

**(b)** P NAND Q = 1 NAND 1 = 0, and Q OR R = 1 OR 0 = 1 [1]; 0 AND 1 = **0**, so X = 0 [1]. **[4]**

## Where marks are usually lost

- Writing truth-table rows out of binary order, so a combination is missed.
- Confusing XOR with OR in the row where both inputs are 1.
- Drawing or describing a three-input gate.
- Missing NOT when a condition is "low", "off" or "unless".
- Leaving out brackets, so the order of operations is unclear.
- In sum of products, missing a row where the output is 1.
