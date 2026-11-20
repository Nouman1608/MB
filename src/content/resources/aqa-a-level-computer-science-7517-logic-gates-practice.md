---
title: "AQA A-Level Computer Science (7517): Logic gates -- Practice Questions"
seoTitle: "AQA A-Level CS Logic Gates Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.6.4 questions with answers: truth tables, circuits and Boolean expressions, half-adders and full-adders, and the D-type flip-flop."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Logic gates study guide](/resources/aqa-a-level-computer-science-7517-logic-gates/) | [Logic gates revision notes](/resources/aqa-a-level-computer-science-7517-logic-gates-revision-notes/)

In Boolean expressions, ¬A means NOT A, A·B means A AND B, A+B means A OR B and A⊕B means A XOR B.

---

## Section A

**1.** Draw the truth table for a NOR gate with inputs A and B. **[2]**

**2.** State the name of the gate whose output is 1 only when its two inputs are different. **[1]**

**3.** State what a small circle (bubble) at the output of a gate symbol means. **[1]**

**4.** State the two outputs of a half-adder and the gate that produces each. **[2]**

**5.** State the purpose of a D-type flip-flop. **[1]**

## Section B

**6.** A circuit has a NOT gate on input A. The output of the NOT gate and input B go to an AND gate. The output of the AND gate and input C go to an OR gate, whose output is X.

**(a)** Write the Boolean expression for X. **[2]**
**(b)** Complete the truth table for X for all combinations of A, B and C. **[4]**

**7.** Draw a circuit, or describe its gates and connections, for P = ¬(A+B)·C, and complete its truth table. **[5]**

**8.** A greenhouse heater switches on if the temperature is low (L) and the window is closed (W), or if the frost sensor (F) is triggered.

**(a)** Write a Boolean expression for the heater H. **[2]**
**(b)** State the value of H when L = 1, W = 0 and F = 0, and explain your answer. **[2]**

**9.** Show, using truth tables, that A⊕B is equivalent to (A+B)·¬(A·B). **[4]**

**10.** Explain how a NAND gate can be made to act as a NOT gate. **[2]**

**11.** Draw or describe a half-adder using logic gates, and give its truth table. **[4]**

**12.** A full-adder has inputs A = 1, B = 0 and carry in = 1.

**(a)** State the sum and the carry out. **[2]**
**(b)** Describe how a full-adder is built from half-adders and one other gate, naming that gate. **[3]**

**13.** Two 2-bit numbers, 11 and 01, are added using a chain of full-adders. The right-hand full-adder has a carry in of 0.

**(a)** State the sum bit and the carry out of the right-hand full-adder. **[2]**
**(b)** State the sum bit and the carry out of the left-hand full-adder. **[2]**
**(c)** State the 3-bit result. **[1]**

**14.** Describe how an edge-triggered D-type flip-flop behaves and explain why it can be used as a memory unit. **[3]**

---

## Answers

**1.**

| A | B | A NOR B |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

All four rows correct [2]. (One mark if three rows are correct.)

**2.** XOR (exclusive OR) [1].

**3.** The output of the gate is inverted (a NOT is applied) [1].

**4.** Sum, produced by an XOR gate [1]; carry, produced by an AND gate [1].

**5.** To store one bit of data [1].

**6. (a)** X = (¬A·B) + C [2]. (One mark for ¬A·B, one mark for the OR with C.)
**(b)**

| A | B | C | ¬A·B | X |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 1 |

Eight rows in a systematic order [1]; column ¬A·B correct [1]; column X correct for the first four rows [1] and the last four rows [1].

**7.** A NOR gate (or an OR gate followed by NOT) with inputs A and B [1]; its output and input C go to an AND gate whose output is P [1].

| A | B | C | ¬(A+B) | P |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |

All eight rows in the intermediate column correct [1]; P column correct [1]; P is 1 only when A = 0, B = 0 and C = 1 [1]. (The table carries the remaining three marks.)

**8. (a)** H = (L·W) + F [2]. (One mark for L·W, one mark for the OR with F.)
**(b)** H = 0 [1]; L·W = 1·0 = 0 and F = 0, so (0) + 0 = 0 [1].

**9.**

| A | B | A⊕B | A+B | ¬(A·B) | (A+B)·¬(A·B) |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 |

Column A⊕B correct [1]; column A+B correct [1]; column ¬(A·B) correct [1]; the final column matches A⊕B in every row [1].

**10.** Join both inputs of the NAND gate together and connect them to the input A [1]; then the output is A NAND A, which is 1 when A is 0 and 0 when A is 1, so it is NOT A [1].

**11.** Inputs A and B each connect to an XOR gate and to an AND gate [1]; the XOR output is the sum and the AND output is the carry [1].

| A | B | Sum | Carry |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Truth table correct [2].

**12. (a)** Sum 0 [1]; carry out 1 [1]. (1 + 0 + 1 = 10 in binary.)
**(b)** The first half-adder adds A and B [1]; the second half-adder adds the sum from the first and the carry in [1]; an OR gate combines the carry outputs of the two half-adders to give the carry out [1].

**13. (a)** The right-hand column adds 1 + 1 + 0: sum 0 [1], carry out 1 [1].
**(b)** The left-hand column adds 1 + 0 + 1 (the carry): sum 0 [1], carry out 1 [1].
**(c)** 100 [1]. (3 + 1 = 4.)

**14.** The value on the data input D is copied to the output only at the clock edge (for example when the clock changes from 0 to 1) [1]; between clock edges the output keeps its value, whatever D does [1]; because it holds a stored bit until the next edge it acts as a one-bit memory, and several together form a register [1].

---

## Where marks are usually lost

- Drawing the symbol without the bubble for NAND and NOR.
- Treating XOR as OR.
- Leaving out intermediate columns in a truth table.
- Using AND instead of OR to combine the carries in a full-adder.
- Saying a flip-flop output follows its input at all times.
