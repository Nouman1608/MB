---
title: "AQA A-Level Computer Science: Fundamentals of Computer Systems — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6: Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
description: "Original practice questions with answers on system software, translators, bytecode, truth tables, adders and Boolean simplification for AQA A-Level CS 7517."
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
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/) | [Fundamentals of computer systems revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-revision-notes/)

These questions cover section 4.6 of the AQA A-Level Computer Science (7517) specification: hardware and
software (4.6.1), classification of programming languages (4.6.2), program translators (4.6.3), logic gates
(4.6.4) and Boolean algebra (4.6.5). This content is assessed on Paper 2.

---

## Section A: hardware and software

**1.** Define the terms **hardware** and **software**. **[2]**

**2.** Classify each as system or application software: (a) a compiler (b) a spreadsheet (c) a disk
defragmenter (d) a graphics library. **[2]**

**3.** Explain the two roles of an operating system given in the specification. **[4]**

## Section B: programming languages and translators

**4.** **(a)** Describe the difference between machine code and assembly language. **[2]**
**(b)** Give two advantages and one disadvantage of writing a program in assembly language rather than a
high-level language. **[3]**
**(c)** Explain the term **imperative high-level language**. **[2]**

**5.** A games company develops a program and then sells it to customers.
**(a)** Explain why the developers might use an interpreter during development. **[2]**
**(b)** Explain why the finished program is compiled before it is sold. **[3]**
**(c)** State the difference between source code and object code. **[1]**

**6.** Some compilers produce bytecode. Explain what bytecode is and how it is used, and give one advantage of
this approach. **[3]**

## Section C: logic gates and circuits

**7.** A circuit has inputs A, B and C. A and B are inputs to an AND gate; C is the input to a NOT gate; the
outputs of these two gates are the inputs to an OR gate whose output is Q.

**(a)** Write a Boolean expression for Q. **[1]**
**(b)** Complete a truth table for the circuit. **[4]**

**8.** Draw (or describe) the logic circuit for the expression Q = ¬(A + B) · C. **[2]**

**9.** **(a)** Construct a half-adder, stating the gate used for each output. **[3]**
**(b)** A full-adder has inputs A = 1, B = 0 and carry in = 1. State the sum and carry out. **[2]**
**(c)** Explain why full-adders, not half-adders, are chained to add two 8-bit numbers. **[2]**

**10.** Describe the use of an edge-triggered D-type flip-flop. **[2]**

## Section D: Boolean algebra

**11.** Simplify, showing each step and naming the identity used:
**(a)** A · B + A · ¬B **[2]**
**(b)** A · (¬A + B) **[2]**
**(c)** ¬(A + ¬B) **[2]**
**(d)** ¬(A · B) + B **[3]**

**12.** Use De Morgan's laws to show that ¬(¬A · ¬B) = A + B, and state what this means for building an OR gate
from other gates. **[3]**

---

## Answers

**1.** Hardware: the physical components of a computer system [1]. Software: the programs and data that run on
the hardware [1].

**2.** (a) System (b) Application (c) System (utility) (d) System (library) [2 -- all four correct; 1 for two or
three].

**3.** It **hides the complexities of the hardware** [1], giving users and programs a simpler interface (a
virtual machine) so they do not need to control devices directly [1]. It performs **resource management** [1],
allocating processors, memory and I/O devices among competing processes [1].

**4. (a)** Machine code is binary instructions executed directly by the processor [1]; assembly language uses
mnemonics, each corresponding to one machine code instruction, so it is easier for people to read but must be
assembled [1].
**(b)** Advantages (any two): direct control of hardware and memory; code can be very fast; code can be very
compact [2]. Disadvantage (any one): harder to write and debug; processor specific so not portable [1].
**(c)** A high-level language whose statements are commands that say **how** to solve a problem, executed in
sequence and changing the program's state [1]; each statement usually translates into several low-level machine
code instructions [1].

**5. (a)** An interpreter runs each statement straight away, so code can be tested without waiting for a full
compilation [1], and it stops at the statement that causes an error, making debugging easier [1].
**(b)** The compiled object code runs **faster** because it has already been translated [1]; customers do not
need the compiler or interpreter to run it [1]; the **source code is not distributed**, so it cannot easily be
copied or changed [1].
**(c)** Source code is the program as written by the programmer; object code is the translated, executable form
[1].

**6.** Bytecode is an **intermediate language** produced as the compiler's final output [1]. It is executed by a
**virtual machine** (a bytecode interpreter) on the target computer [1]. Advantage: the same compiled program
runs on any platform that has the virtual machine (portability), without distributing the source [1].

**7. (a)** Q = A · B + ¬C [1].
**(b)**

| A | B | C | A · B | ¬C | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

A · B column [1]; ¬C column [1]; Q column [2] (1 mark for up to two errors).

**8.** A and B into a **NOR** gate (or an OR gate followed by a NOT gate) [1]; its output and C into an **AND**
gate, giving Q [1].

**9. (a)** Inputs A and B both go to an **XOR** gate, whose output is the **Sum** [1], and to an **AND** gate,
whose output is the **Carry** [1]; correct circuit with both gates sharing the inputs [1].
**(b)** Sum = 1 ⊕ 0 ⊕ 1 = **0** [1]; carry out = 1 · 0 + 1 · (1 ⊕ 0) = **1** [1].
**(c)** Each bit position after the first must add two bits **and the carry from the previous position** [1]; a
half-adder has only two inputs, while a full-adder has a carry-in so it can be chained [1].

**10.** It is used as a **memory unit that stores one bit** [1]. On the triggering edge of the clock signal the
output takes the value of the D input, and it holds that value until the next triggering edge [1].

**11. (a)** = A · (B + ¬B) (distributive) [1] = A · 1 = **A** (complement, then identity) [1].
**(b)** = A · ¬A + A · B (distributive) [1] = 0 + A · B = **A · B** (complement, identity) [1].
**(c)** = ¬A · ¬¬B (De Morgan) [1] = **¬A · B** (double negation) [1].
**(d)** = ¬A + ¬B + B (De Morgan) [1] = ¬A + 1 (complement) [1] = **1** (null law) [1].

**12.** ¬(¬A · ¬B) = ¬¬A + ¬¬B (De Morgan) [1] = A + B (double negation) [1]. So an OR gate can be built by
inverting both inputs and passing them through a NAND gate -- in fact, NAND gates alone can build any circuit
[1].

---

## Where marks are usually lost

- Drawing a truth table without the intermediate columns, then making an error in Q that cannot earn
  method marks.
- Writing ¬(A + B) as ¬A + ¬B: De Morgan changes the operator as well as splitting the bar.
- Describing an interpreter as producing an executable file.
- Giving "faster" as an advantage of compilation without saying it is the **execution** that is faster.

## Frequently asked questions

**Do I need to know how a D-type flip-flop works inside?**
No. The AQA 7517 specification says knowledge of its internal operation is not required. Know that it stores
one bit and changes only on the clock's triggering edge.

**Which gate symbols should I draw?**
The ANSI/IEEE 91-1984 distinctive shape symbols, which are the ones the specification names. Practise drawing
NAND and NOR with the small circle (the inversion bubble) on the output.
