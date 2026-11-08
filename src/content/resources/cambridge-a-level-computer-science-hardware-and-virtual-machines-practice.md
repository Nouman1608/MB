---
title: "Cambridge A Level Computer Science (9618): Hardware and Virtual Machines -- Practice Questions"
seoTitle: "Cambridge 9618 Hardware and Virtual Machines Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15: Hardware and Virtual Machines"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 15
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
    subtopic: "processors-parallel-processing-and-virtual-machines"
  - qualification: "a-level"
    topic: "hardware-and-virtual-machines"
    subtopic: "boolean-algebra-and-logic-circuits"
description: "Paper 3-style questions with answers on RISC and CISC, pipelines, SIMD, virtual machines, adders, flip-flops, Boolean algebra and K-maps for Cambridge 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Hardware and Virtual Machines revision notes](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-revision-notes/) · [study guide](/resources/cambridge-a-level-computer-science-hardware-and-virtual-machines-study-guide/)

These questions cover Topic 15 of Cambridge International AS & A Level Computer Science 9618: processors, parallel processing and virtual machines (15.1) and Boolean algebra and logic circuits (15.2). The topic is A Level content, assessed in Paper 3. Answers show the working that earns method marks.

---

## Questions

**1.** Give **four** differences between RISC and CISC processors. **[4]**

**2.** **(a)** Explain how pipelining improves the performance of a RISC processor. **[2]**
**(b)** A processor has a four-stage pipeline in which each stage takes one clock cycle. Calculate the number of cycles needed to process 15 instructions with and without pipelining, assuming no hazards. **[2]**
**(c)** Describe how an interrupt can be handled by a pipelined processor. **[3]**

**3.** Explain why RISC processors have a large number of general-purpose registers. **[2]**

**4.** For each task, identify the most suitable architecture from SISD, SIMD, MISD and MIMD, and justify your choice.

**(a)** Increasing the brightness of every pixel in a large photograph by the same amount **[2]**
**(b)** A server running a database, a web server and an email server at the same time, each on its own core **[2]**

**5.** Describe **three** characteristics of a massively parallel computer. **[3]**

**6.** A software company tests its application on several operating systems using virtual machines on one computer.

**(a)** Explain what is meant by a virtual machine. **[2]**
**(b)** Give **two** benefits and **two** limitations of using virtual machines for this testing. **[4]**

**7.** **(a)** Complete the truth table for a full adder with inputs A, B and Cin. **[4]**
**(b)** State the Boolean expressions for the Sum and Carry outputs of a half adder. **[2]**

**8.** **(a)** Describe the role of a flip-flop in a computer. **[1]**
**(b)** Complete the table showing Q after a clock pulse for a JK flip-flop that currently has Q = 1. **[4]**

| J | K | Q after pulse |
|---|---|---|
| 0 | 0 | |
| 0 | 1 | |
| 1 | 0 | |
| 1 | 1 | |

**(c)** Explain why a JK flip-flop is used instead of an SR flip-flop. **[2]**

**9.** Use De Morgan's laws to write an expression equivalent to NOT(A + B.C) that contains no NOT applied to a bracket. **[2]**

**10.** Simplify the expression X = Ā.B̄ + Ā.B + A.B using Boolean algebra. Show each step. **[3]**

**11.** A circuit has inputs A, B, C, D. The output Z = 1 for ABCD = 0100, 0101, 0110, 0111, 1100, 1101 and 0011. Z = 0 for every other combination.

**(a)** Draw a Karnaugh map for Z. **[2]**
**(b)** Use the map to write a simplified sum-of-products expression for Z. **[3]**
**(c)** State **one** benefit of using a Karnaugh map. **[1]**

---

## Answers

**1.** Any four contrasting pairs [1 each]: RISC has fewer, simpler instructions, CISC many complex ones; RISC instructions mostly take one clock cycle, CISC instructions take several; RISC uses fixed-length instructions, CISC variable length; RISC has few addressing modes, CISC many; RISC has more general-purpose registers; in RISC only load/store instructions access memory; RISC needs more instructions per program (more RAM for code), CISC fewer; RISC pipelines more easily; RISC uses a hardwired control unit, CISC often a microprogrammed one.

**2. (a)** The fetch-execute process is split into stages, and while one instruction is being executed the next is being decoded and another fetched [1]. Several instructions are processed at the same time, so more instructions are completed per unit time (throughput increases) [1].
**(b)** Without pipelining: 15 × 4 = **60** cycles [1]. With pipelining: 4 + (15 − 1) = **18** cycles [1].
**(c)** When the interrupt is detected, several instructions are part-way through the pipeline [1]. One option is to flush (erase) the later instructions from the pipeline, finish the instruction furthest on, save the state and then load the ISR into the pipeline [1]. The other option is for each pipeline stage to hold its own program counter / register values, so the state of every instruction in the pipeline is saved and they can all resume after the ISR [1].

**3.** Most RISC instructions work only on data in registers (only load and store access memory) [1], so many registers are needed to hold operands and results, reducing slow memory accesses and keeping each instruction to one cycle so the pipeline is not held up [1].

**4. (a)** SIMD [1]: the same instruction (add a value) is applied to many data items (pixels) at the same time [1].
**(b)** MIMD [1]: each core runs different instructions (different programs) on different data, independently [1].

**5.** Any three: a very large number of processors (thousands or more) [1]; each processor has its own memory [1]; processors are connected by a fast network and communicate by passing messages [1]; all work at the same time on different parts of one large problem [1]; specially written software is needed to divide the problem and combine results [1].

**6. (a)** Software that emulates a complete computer system [1], so that a guest operating system and its applications run inside the host computer as if on their own hardware [1].
**(b)** Benefits (any two): several operating systems can be tested on one physical computer, saving the cost of extra hardware [1]; each VM is isolated, so if the application crashes a VM, the host and other VMs are not affected [1]; a VM can be saved and restored to a clean state (snapshot) for repeat tests [1]. Limitations (any two): applications run more slowly than on real hardware [1]; the host needs a lot of memory and processing power to run several VMs [1]; the VM may not behave exactly like real hardware, so some faults may not appear [1].

**7. (a)**

| A | B | Cin | Sum | Cout |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

Marks: Sum rows 1–4 [1]; Sum rows 5–8 [1]; Cout rows 1–4 [1]; Cout rows 5–8 [1].

**(b)** Sum = A XOR B [1]; Carry = A AND B [1].

**8. (a)** A flip-flop stores one bit of data, so flip-flops are used to build registers and static memory [1].
**(b)** J = 0, K = 0: **1** (no change) [1]; J = 0, K = 1: **0** (reset) [1]; J = 1, K = 0: **1** (set) [1]; J = 1, K = 1: **0** (toggles from 1) [1].
**(c)** In an SR flip-flop, S = R = 1 is an invalid input that leaves the output unpredictable [1]; a JK flip-flop has no invalid state (J = K = 1 toggles), and it is clocked, so changes are synchronised [1].

**9.** NOT(A + B.C) = Ā.NOT(B.C) [1] = Ā.(B̄ + C̄) [1].

**10.** X = Ā.B̄ + Ā.B + A.B
= Ā.(B̄ + B) + A.B = Ā + A.B [1]
= (Ā + A).(Ā + B) [1]
= Ā + B [1]

Check: X is 0 only when A = 1 and B = 0, which matches Ā + B.

**11. (a)**

| AB \ CD | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 00 | 0 | 0 | 1 | 0 |
| 01 | 1 | 1 | 1 | 1 |
| 11 | 1 | 1 | 0 | 0 |
| 10 | 0 | 0 | 0 | 0 |

Marks: Gray code labelling [1]; all seven 1s placed correctly [1].

**(b)** Group of four: row AB = 01 → Ā.B [1]. Group of four: AB = 01 and 11, CD = 00 and 01 → B.C̄ [1]. Group of two: AB = 00 and 01, CD = 11 → Ā.C.D [1].
Z = Ā.B + B.C̄ + Ā.C.D

Check: 1101 gives B.C̄ = 1, so Z = 1; 1110 gives all three terms 0, so Z = 0, as required.

**(c)** Any one: it gives the simplest sum-of-products expression more quickly / with less chance of error than Boolean algebra [1]; it reduces the number of gates needed [1].

---

## Where marks are usually lost

- Pipelining answers that say each instruction is executed faster.
- SIMD and MIMD swapped, or chosen without a reason from the task.
- Virtual machine answers that describe virtual memory.
- K-map groups that are not powers of two in size, or that miss a larger possible group.
- De Morgan applied without inverting each term.

## Frequently asked questions

**How do I check a Boolean simplification?**
Substitute two or three rows of the truth table, especially rows where the output is 0, into both the original and simplified expressions.

**Does Cambridge accept + and . notation?**
Expressions may be written with AND, OR and NOT or with the . + and bar notation; be consistent and use brackets to make the order clear.

**Can K-map groups overlap?**
Yes. A cell can belong to more than one group if that makes the groups larger.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 15 Hardware and Virtual Machines. Examiner comments by series are on the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
