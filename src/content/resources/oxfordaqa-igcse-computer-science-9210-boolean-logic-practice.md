---
title: "OxfordAQA IGCSE Computer Science (9210): Boolean logic -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Boolean Logic Practice Questions"
resourceType: "practice-questions"
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
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on NOT, AND and OR gates, truth tables, expressions and logic circuits."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Boolean logic study guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-logic/) | [Boolean logic revision notes](/resources/oxfordaqa-igcse-computer-science-9210-boolean-logic-revision-notes/)

These questions cover section 3.4.2 Boolean logic of the OxfordAQA International GCSE Computer Science (9210)
specification. The notation is NOT A (written with a bar over the letter), A · B for AND and A + B for OR. Where a bar
cannot be shown over a bracket, the word NOT is used.

---

## Section A

**1.** Complete the truth table for an AND gate.

| A | B | A · B |
|---|---|---|
| 0 | 0 | |
| 0 | 1 | |
| 1 | 0 | |
| 1 | 1 | |

**[2]**

**2.** State the output of each gate.

**(a)** a NOT gate with the input 1 **[1]**

**(b)** an OR gate with the inputs 0 and 1 **[1]**

**(c)** an AND gate with the inputs 1 and 1 **[1]**

**3.** State the number of rows in the truth table of a circuit with three inputs. **[1]**

**4.** A student writes that the output of an OR gate is 0 when both inputs are 1. Explain the mistake. **[1]**

## Section B

**5.** Complete the truth table for Q = Ā + B.

| A | B | Ā | Q |
|---|---|---|---|
| 0 | 0 | | |
| 0 | 1 | | |
| 1 | 0 | | |
| 1 | 1 | | |

**[3]**

**6.** A logic circuit has three inputs A, B and C. A and B are the inputs of an OR gate. The output of the OR gate
and C are the inputs of an AND gate. The output of the AND gate is Q.

**(a)** Write a Boolean expression for Q. **[2]**

**(b)** Complete the truth table.

| A | B | C | A + B | Q |
|---|---|---|---|---|
| 0 | 0 | 0 | | |
| 0 | 0 | 1 | | |
| 0 | 1 | 0 | | |
| 0 | 1 | 1 | | |
| 1 | 0 | 0 | | |
| 1 | 0 | 1 | | |
| 1 | 1 | 0 | | |
| 1 | 1 | 1 | | |

**[3]**

**(c)** State when Q is 1, in words. **[1]**

**7.** Complete the truth table for Q = A · (B + C̄), where C̄ is NOT C.

| A | B | C | C̄ | B + C̄ | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | | | |
| 0 | 0 | 1 | | | |
| 0 | 1 | 0 | | | |
| 0 | 1 | 1 | | | |
| 1 | 0 | 0 | | | |
| 1 | 0 | 1 | | | |
| 1 | 1 | 0 | | | |
| 1 | 1 | 1 | | | |

**[4]**

**8.** A security alarm (X) sounds when the system is armed (S) and either the window sensor (W) or the door sensor
(D) is triggered.

**(a)** Write a Boolean expression for X. **[2]**

**(b)** Describe the logic circuit that implements this expression, naming each gate and its inputs. **[3]**

**(c)** State how many rows of the truth table have X equal to 1. **[1]**

**9.** A heater (H) is on when the room is cold (C) and the window is not open (W). Write an expression for H and
draw the circuit using the standard gates. Describe your drawing in words if you cannot draw it. **[3]**

**10.** The truth table below is for a circuit with two inputs.

| A | B | Q |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

**(a)** State the values of A and B for which Q is 1. **[1]**

**(b)** Write a Boolean expression for Q using NOT and AND. **[2]**

**11.** The circuit for Q = (A · B) + C̄ is changed so that the OR gate is replaced by an AND gate.

**(a)** Write the new expression. **[1]**

**(b)** State the values of A, B and C for which the new circuit gives 1. **[2]**

**12.** Explain what is meant by a truth table, and explain why a circuit with three inputs needs eight rows. **[3]**

---

## Answers

**1.**

| A | B | A · B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

One mark for the first three rows correct, one for the last row [2].

**2.** **(a)** 0 [1]. **(b)** 1 [1]. **(c)** 1 [1].

**3.** 8 [1] (2 to the power 3).

**4.** An OR gate gives 1 if at least one input is 1, so the output is 1 when both inputs are 1 [1].

**5.**

| A | B | Ā | Q |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 |

Ā column correct [1]; Q correct for the first two rows [1]; Q correct for the last two rows [1].

**6.** **(a)** Q = (A + B) · C [2] (one mark for the OR of A and B, one mark for the AND with C and the brackets).
**(b)**

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

A + B column correct [1]; Q correct in the first four rows [1]; Q correct in the last four rows [1].
**(c)** Q is 1 when C is 1 and at least one of A and B is 1 [1].

**7.**

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

C̄ column correct [1]; B + C̄ column correct [1]; Q correct when A is 0 [1]; Q correct when A is 1 [1].

**8.** **(a)** X = S · (W + D) [2] (one mark for W + D, one mark for the AND with S and the brackets).
**(b)** An OR gate with inputs W and D [1]; an AND gate [1] whose inputs are S and the output of the OR gate; the output
of the AND gate is X [1].
**(c)** 3 rows [1] (S = 1 with W and D as 01, 10 or 11).

**9.** H = C · W̄ [1]; a NOT gate with input W [1]; an AND gate whose inputs are C and the output of the NOT gate, with
output H [1].

**10.** **(a)** A = 0 and B = 0 [1]. **(b)** Q = Ā · B̄ [2] (one mark for NOT on each input, one mark for the AND).

**11.** **(a)** Q = (A · B) · C̄ [1]. **(b)** The output is 1 only when A = 1 [1], B = 1 and C = 0 [1].

**12.** A truth table lists every possible combination of inputs [1] together with the output for each [1]. Each input can
be 0 or 1, so three inputs give 2 × 2 × 2 = 8 combinations [1].

---

## Where marks are usually lost

- Leaving out working columns, as in Questions 6 and 7.
- Treating OR as exclusive, as in Question 4.
- Writing the input rows in a different order from the table given.
- Omitting brackets in the expressions for Questions 6 and 8.
- Mixing up which inputs belong to which gate when describing a circuit.
