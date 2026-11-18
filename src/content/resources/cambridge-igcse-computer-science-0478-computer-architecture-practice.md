---
title: "Cambridge IGCSE Computer Science (0478): Computer architecture -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3.1
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
    subtopic: "computer-architecture-0478"
description: "Original questions with answers on Cambridge IGCSE Computer Science 0478 section 3.1: registers, buses, the FDE cycle, CPU performance and embedded systems."
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
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Computer architecture study guide](/resources/cambridge-igcse-computer-science-0478-computer-architecture/) and [Computer architecture revision notes](/resources/cambridge-igcse-computer-science-0478-computer-architecture-revision-notes/)

---

## Section A

**1.** State what is meant by a microprocessor. **[1]**

**2.** Identify the register that holds the instruction currently being decoded. **[1]**

**3.** State the purpose of the accumulator (ACC). **[1]**

**4.** Name the **three** buses in a Von Neumann computer, and state which one carries data in one direction only. **[4]**

**5.** State **two** tasks carried out by the control unit. **[2]**

**6.** State what is meant by an instruction set. **[2]**

## Section B

**7.** Describe the **fetch** stage of the fetch–decode–execute cycle. **[5]**

**8.** A program is stored in RAM from address 40. Address 70 holds the value 15 and address 71 holds the value 6.

| Address | Instruction |
|---|---|
| 40 | LOAD 70 |
| 41 | SUBTRACT 71 |
| 42 | STORE 72 |

The PC starts at 40. Complete the values in the PC, MAR, MDR and ACC after the STORE 72 instruction has been executed, and state the value now held at address 72. **[5]**

**9.** Explain why the memory address register and the memory data register are both needed during the fetch stage. **[2]**

**10.** A games company is choosing between two processors. Processor X has 2 cores and a 4 GHz clock. Processor Y has 8 cores and a 3 GHz clock. Explain how each difference could affect the performance of the game. **[4]**

**11.** Explain how the size of the cache affects the performance of a CPU. **[3]**

**12.** A car contains a microprocessor that controls only the electric windows.

**(a)** Identify the type of system this is.

**(b)** Give **three** characteristics of this type of system. **[4]**

**13.** A student says: "My laptop is an embedded system because it has a microprocessor inside it." Explain why the student is wrong. **[2]**

**14.** A program compiled to machine code for one processor will not run on a processor from a different family. Explain why. **[2]**

---

## Answers

**1.** An integrated circuit on a single chip that acts as the CPU [1].

**2.** The current instruction register (CIR) [1].

**3.** To hold the result of calculations carried out by the ALU [1].

**4.** Address bus [1]; data bus [1]; control bus [1]; the address bus is one-directional (CPU to memory) [1].

**5.** Any two from: decodes instructions [1]; sends control signals to manage the FDE cycle / to other components [1]. Also accept: coordinates the movement of data around the CPU; sends read and write signals to memory.

**6.** A list of all the commands that a CPU can process [1], where the commands are machine code [1].

**7.** The address in the PC is copied to the MAR [1]. The address is sent along the address bus to RAM, with a read signal on the control bus [1]. The instruction at that address is sent along the data bus to the MDR [1]. The instruction is copied from the MDR to the CIR [1]. The PC is incremented to hold the address of the next instruction [1].

**8.** PC = **43** [1]; MAR = **72** [1]; MDR = **9** [1]; ACC = **9** (15 − 6) [1]; address 72 now holds **9** [1].

Working: LOAD 70 puts 15 in the ACC. SUBTRACT 71 fetches 6 and the ALU calculates 15 − 6 = 9, stored in the ACC. STORE 72 copies 9 into the MDR, puts 72 in the MAR and writes 9 to address 72. The PC has been incremented three times from 40.

**9.** The MAR holds the address of the location being accessed, which is sent along the address bus [1]. The MDR holds the instruction or data that comes back along the data bus from that address [1].

**10.** Processor Y has more cores, so it can process more instructions at the same time [1], which helps if the game's tasks can be split across cores [1]. Processor X has a faster clock, so each core completes more FDE cycles per second [1], which helps tasks that must run one step after another on a single core [1].

**11.** Cache is fast memory close to / inside the CPU that stores frequently used instructions and data [1]. A larger cache can hold more of these [1], so the CPU needs to fetch from slower RAM less often, and more instructions are processed in the same time [1].

**12. (a)** An embedded system [1].
**(b)** Any three from: performs a dedicated function [1]; built into a larger device (the car) [1]; uses a fixed program that the user does not change [1]. Also accept: small; uses little power; cheap to mass-produce; simple interface (switches).

**13.** A laptop is a general-purpose computer that can perform many different functions / run many different programs [1]. An embedded system performs a dedicated function, so having a microprocessor does not make a device embedded [1].

**14.** Each CPU family has its own instruction set [1]. Machine code is made of instructions from one instruction set, so a processor with a different set cannot recognise / execute them [1].

---

## Where marks are usually lost

- Question 7: leaving out the PC increment, or putting the instruction straight into the CIR without passing through the MDR.
- Question 8: putting the instruction address (42) in the MAR at the end. After execution the MAR holds the data address used by STORE.
- Questions 10 and 11: writing "faster" without saying what happens inside the CPU.
- Question 13: arguing about size. The deciding idea is a dedicated function versus a general purpose.
- Question 5: writing "it controls the computer". Name a specific task, such as decoding instructions or sending read and write signals.
- Question 9: describing what each register holds without saying why both are needed: one holds where to look, the other what was found there.
