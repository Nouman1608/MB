---
title: "AQA A-Level Computer Science: Computer Organisation and Architecture — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7: Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
description: "Original practice questions with answers on buses, the fetch-execute cycle, instruction formats, assembly, interrupts and storage for AQA A-Level CS 7517."
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

Related: [Computer organisation and architecture study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study-guide/) | [Computer organisation and architecture revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-revision-notes/)

These questions cover section 4.7 of the AQA A-Level Computer Science (7517) specification: internal
components (4.7.1), the stored program concept (4.7.2), the processor (4.7.3) and external devices (4.7.4).
Assembly language questions use AQA-style mnemonics: `#n` is an immediate value; a plain number is a memory
address.

---

## Section A: components and the stored program concept

**1.** Describe the role of the address bus, data bus and control bus, stating which is one-way. **[4]**

**2.** Explain the difference between Von Neumann and Harvard architectures and state where each is typically
used. **[4]**

**3.** Describe the stored program concept. **[2]**

## Section B: the processor

**4.** Describe the fetch stage of the fetch-execute cycle, naming the registers and buses used. **[5]**

**5.** State the purpose of the status register. **[1]**

**6.** A processor uses 16-bit instructions: a 6-bit opcode followed by a 10-bit operand.
**(a)** State how many different opcodes are possible. **[1]**
**(b)** State how many memory locations can be addressed directly by the operand. **[1]**
**(c)** State the largest unsigned value that can be used with immediate addressing. **[1]**

**7.** Memory location 20 holds the value 7. State the value in R1 after each instruction, and name the
addressing mode used: (a) `LDR R1, 20` (b) `MOV R1, #20`. **[4]**

## Section C: assembly language

**8.** Trace this program, giving R0 and R1 each time the `CMP` instruction is executed, and state the value
stored in location 200.
```
      MOV R0, #0
      MOV R1, #1
loop: ADD R0, R0, R1
      ADD R1, R1, #1
      CMP R1, #5
      BNE loop
      STR R0, 200
      HALT
```
**[5]**

**9.** Write an assembly language program that loads the value in location 50 into a register; if the value is
0 it stores 1 in location 51, otherwise it stores 0 in location 51. **[4]**

**10.** **(a)** R0 holds 01101101. State the result of `AND R1, R0, #15` and explain what the instruction does.
**[2]**
**(b)** State the effect of `LSL R0, R0, #2` on an unsigned value. **[1]**

## Section D: interrupts and performance

**11.** Explain how an interrupt is handled, including the role of the ISR and the volatile environment. **[5]**

**12.** **(a)** Explain how cache memory improves processor performance. **[2]**
**(b)** Explain why doubling the number of cores does not always double performance. **[2]**
**(c)** A processor has a 24-bit address bus. Calculate how many memory locations it can address. **[1]**
**(d)** Explain the effect of increasing the data bus width. **[1]**

## Section E: external devices

**13.** Describe the principles of operation of an RFID system. **[3]**

**14.** **(a)** Describe how data is written to and erased from an SSD. **[3]**
**(b)** A photographer needs fast storage in a laptop and a low-cost way to archive several terabytes of old
photos. Recommend a storage device for each and justify your choices. **[4]**

---

## Answers

**1.** Address bus: carries the address of the memory location (or I/O port) being accessed [1]; it is
**one-way**, from the processor [1]. Data bus: carries data and instructions between the processor, memory and
I/O controllers, in both directions [1]. Control bus: carries control signals such as memory read, memory write
and clock signals [1].

**2.** Von Neumann uses a single memory and one set of buses for both instructions and data [1]; Harvard uses
separate memories and buses for instructions and data, so both can be accessed at the same time [1]. Von
Neumann is used in general-purpose computers [1]; Harvard is used extensively in embedded systems such as
digital signal processing systems [1].

**3.** Machine code instructions are stored in main memory [1] and are fetched and executed serially by a
processor that performs arithmetic and logical operations [1].

**4.** The contents of the **PC** are copied to the **MAR** [1], and the address is sent along the **address
bus** [1]. A memory read signal is sent on the **control bus** [1]. The instruction at that address is sent along
the **data bus** into the **MBR** [1]. The PC is incremented, and the contents of the MBR are copied to the
**CIR** [1].

**5.** It holds flags giving information about the result of the last operation (e.g. zero, negative,
overflow, carry) or the processor's state, such as whether interrupts are enabled [1].

**6. (a)** 2⁶ = **64** [1] **(b)** 2¹⁰ = **1,024** [1] **(c)** 2¹⁰ - 1 = **1,023** [1].

**7. (a)** R1 = **7** [1]; **direct** addressing -- 20 is the address of the datum [1].
**(b)** R1 = **20** [1]; **immediate** addressing -- the operand is the datum [1].

**8.**

| CMP executed | R0 | R1 |
|---|---|---|
| 1st | 1 | 2 |
| 2nd | 3 | 3 |
| 3rd | 6 | 4 |
| 4th | 10 | 5 |

1 mark per correct row [4]. After the 4th comparison R1 = 5, so the branch is not taken and **10** is stored in
location 200 [1]. (The program adds 1 + 2 + 3 + 4.)

**9.** One possible answer:
```
      LDR R0, 50
      CMP R0, #0
      BEQ zero
      MOV R1, #0
      B   save
zero: MOV R1, #1
save: STR R1, 51
      HALT
```
Load from location 50 [1]; compare with #0 and conditional branch [1]; correct values set on each path,
including an unconditional branch past the other path [1]; store in location 51 and halt [1].

**10. (a)** 01101101 AND 00001111 = **00001101** [1]. It **masks** the value, keeping the lower four bits and
clearing the upper four [1].
**(b)** It shifts the bits two places left, **multiplying** the value by 4 (provided no 1s are lost from the left)
[1].

**11.** A device or program sends an interrupt signal to the processor [1]. At the end of the current
fetch-execute cycle the processor checks for interrupts and, if the interrupt has sufficient priority, it is
serviced [1]. The **volatile environment** -- the contents of the PC, status register and other registers -- is
saved, e.g. on a stack [1]. The address of the appropriate **interrupt service routine** is loaded into the PC
and the ISR is executed [1]. Afterwards the saved values are restored, so the original program continues from
where it was interrupted [1].

**12. (a)** Cache is small, fast memory close to (or on) the processor that holds frequently used instructions and
data [1], so fewer slower accesses to main memory are needed [1].
**(b)** Only tasks that can be split into parts that run **in parallel** benefit [1]; some programs are sequential,
and coordinating cores adds overhead [1].
**(c)** 2²⁴ = **16,777,216** locations [1].
**(d)** More bits can be transferred in one memory access, so fewer transfers are needed [1].

**13.** The reader sends out radio waves [1]; these power the (passive) tag's circuit through its aerial [1]; the
tag transmits its stored data back to the reader by radio, where it is decoded [1].

**14. (a)** An SSD uses NAND flash memory, in which floating gate transistors trap charge to store bits [1]. Data is
written in pages, but a page cannot be overwritten [1]; the whole **block** containing it must be erased before
new data can be written, which the controller manages [1].
**(b)** Laptop: an **SSD** [1], because it has lower latency and faster transfer speeds, and with no moving parts it
copes with being carried around [1]. Archive: a **hard disk** [1], because it gives high capacity at a lower cost
per gigabyte, and access speed matters less for rarely used files [1]. (Accept optical disks for the archive if
justified by low cost and portability, noting their low capacity.)

---

## Where marks are usually lost

- Describing the fetch stage without naming the buses, or copying the PC straight to the CIR.
- Forgetting the unconditional branch in an IF-ELSE assembly program, so both paths run.
- Writing `LDR R0, #50` when the question asks for the contents of location 50.
- Recommending a device without linking the choice to the scenario (speed, capacity, cost, portability).

## Frequently asked questions

**Do I have to use AQA's exact mnemonics?**
Use the instruction set given in the question. AQA papers supply a table of the mnemonics and their formats,
and answers are marked against it.

**Is the fetch-execute cycle always described with these four registers?**
For AQA 7517 the specification names the PC, CIR, MAR, MBR and status register, so use those names in answers.
