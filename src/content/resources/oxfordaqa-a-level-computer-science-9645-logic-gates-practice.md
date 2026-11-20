---
title: "OxfordAQA A-Level Computer Science (9645): Logic gates -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Logic Gates Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.6
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "logic-gates-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.7.6 Logic gates: truth tables, circuits and expressions, adders and the D-type flip-flop, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.7.6 Logic gates** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: truth tables for the six gates, reading and drawing circuits, the half-adder and full-adder, and the D-type flip-flop. Boolean notation: ⋅ is AND, + is OR, ⨁ is XOR, A̅ is NOT A, and NOT( ) stands for a bar drawn over a whole group. Describe any circuit you are asked to draw in words, naming each gate and what is connected to it.

Related pages: [logic gates study guide](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates/) ·
[logic gates revision notes](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates-revision-notes/) ·
[computer organisation and architecture practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/)

## Section A

**1.** State the output of each gate when both inputs are 1.

**(a)** XOR **[1]**
**(b)** NAND **[1]**
**(c)** NOR **[1]**

**2.** State how the symbol for a NAND gate differs from the symbol for an AND gate. **[1]**

**3.** A circuit has A passing through a NOT gate. The output of the NOT gate and B go into an OR gate. The output of the OR gate and C go into an AND gate, whose output is X. Write a Boolean expression for X. **[2]**

**4.** State the number of rows in a truth table for a circuit with five inputs. **[1]**

## Section B

**5.** Complete a truth table for X = (A̅ + B)⋅C, with columns for A, B, C, A̅ + B and X. **[3]**

**6.** Complete a truth table for W = NOT(A⋅B)⋅(B + C), with columns for A, B, C, NOT(A⋅B), B + C and W. **[4]**

**7.** Describe a logic circuit for Z = NOT(A + B) + A⋅C. Name each gate and say what it is connected to. **[4]**

**8.** A half-adder adds two bits.

**(a)** Give the Boolean expressions for the sum S and the carry C. **[2]**
**(b)** Describe how a half-adder is constructed from logic gates. **[2]**
**(c)** State the values of S and C when A = 1 and B = 1, and explain what they represent. **[2]**

**9.** A full-adder has inputs A, B and Cin and outputs S and Cout.

**(a)** Trace the full-adder for A = 1, B = 1 and Cin = 0. Give the output of the first XOR gate, the output of the first AND gate, S and Cout. **[4]**
**(b)** State the values of S and Cout for A = 0, B = 1 and Cin = 1. **[2]**
**(c)** Show how one half-adder and one full-adder add the 2-bit numbers 10 and 11. Give the final 3-bit result. **[4]**

**10.** An edge-triggered D-type flip-flop starts with Q = 0. The clock goes high at the moments shown. Between clock rises, D changes as described.

| Event | What happens |
|---|---|
| 1 | D = 1, then the clock goes high |
| 2 | D changes to 0 (the clock does not go high) |
| 3 | D changes back to 1 (the clock does not go high) |
| 4 | The clock goes high |
| 5 | D changes to 0, then the clock goes high |

**(a)** State the value of Q after each of events 1 to 5. **[3]**
**(b)** Explain why a D-type flip-flop can be used as a memory unit but an AND gate cannot. **[2]**

## Answers

**1. (a)** **0** [1] **(b)** **0** [1] **(c)** **0** [1]

**2.** The NAND symbol has a small circle on the output (an AND shape with an inversion circle) [1]. **[1]**

**3.** X = (A̅ + B)⋅C: the OR of A̅ and B is in a bracket [1] and is ANDed with C [1]. **[2]**

**4.** 2^5 = **32** [1]. **[1]**

**5.**

| A | B | C | A̅ + B | X |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

All eight rows present [1]; A̅ + B column correct [1]; X column correct [1]. **[3]**

**6.**

| A | B | C | NOT(A⋅B) | B + C | W |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 |

All eight rows [1]; NOT(A⋅B) column [1]; B + C column [1]; W column [1]. **[4]**

**7.** A NOR gate takes A and B and produces NOT(A + B) [1]. An AND gate takes A and C [1]. An OR gate takes the output of the NOR gate and the output of the AND gate [1]. The output of the OR gate is Z [1]. (Accept an OR gate followed by a NOT gate in place of the NOR gate.) **[4]**

**8. (a)** S = A ⨁ B [1]; C = A⋅B [1]
**(b)** An XOR gate and an AND gate [1], with both inputs A and B connected to both gates; the XOR output is S and the AND output is C [1]
**(c)** S = **0** and C = **1** [1]. 1 + 1 = binary 10, so the sum digit is 0 and a carry of 1 passes to the next column [1]

**9. (a)** A ⨁ B = **0** [1]; A⋅B = **1** [1]; S = (0) ⨁ 0 = **0** [1]; Cout = 1 + 0 = **1** [1]. **[4]**
**(b)** S = **0** [1]; Cout = **1** [1]. (1 + 1 = binary 10.)
**(c)** Right-hand column: half-adder with 0 and 1 gives S = 1 and C = 0 [1]. Left-hand column: full-adder with 1, 1 and carry in 0 gives S = 0 [1] and Cout = 1 [1]. Result: Cout, S, S = **101** [1] (which is 2 + 3 = 5). **[4]**

**10. (a)** After event 1: **1** [1]. After events 2 and 3: **1** (no change, because the clock did not go high). After event 4: **1** (D was 1) [1]. After event 5: **0** [1]. So the sequence is 1, 1, 1, 1, 0. **[3]**
**(b)** The flip-flop stores the value of D when the clock goes high and keeps outputting it until the next clock rise, so it remembers a bit [1]. An AND gate's output depends only on its present inputs, so it keeps nothing when they change [1]. **[2]**

## Frequently asked questions

**Do I need to draw full-adders?**
No. You must recognise and trace a full-adder, but the specification says you will not be required to construct one. You may be asked to construct a half-adder.

**Do I need to know how a flip-flop works inside?**
No. Know its behaviour: the clock edge stores D and Q holds it until the next edge.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.6 Logic gates.
