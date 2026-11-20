---
title: "OxfordAQA A-Level Computer Science (9645): The Fetch-Execute cycle and interrupts -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Fetch-Execute Cycle Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "the-fetch-execute-cycle-and-interrupts-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.7.3: register traces for fetch and execute, buses used, interrupts, ISRs and the volatile environment, with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.7.3 The Fetch-Execute cycle and interrupts** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the stages of the cycle, the registers and buses used, interrupts, interrupt service routines and the volatile environment. Assembly instructions follow the Standard OxfordAQA assembly language instruction set. Each instruction occupies one memory location.

Related pages: [Fetch-Execute cycle study guide](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts/) ·
[Fetch-Execute cycle revision notes](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-revision-notes/) ·
[computer organisation and architecture practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/)

## Section A

**1.** Name the three stages of the Fetch-Execute cycle in order. **[3]**

**2.** State which register is copied into the MAR at the start of a fetch, and which bus then carries the address. **[2]**

**3.** State two events that could cause an interrupt. **[2]**

**4.** State what an interrupt service routine (ISR) is. **[1]**

## Section B

**5.** The program counter holds 60. Location 60 holds the instruction `ADD R1, R2, #5`. Describe the fetch stage for this instruction, giving the contents of the PC, MAR, MBR and CIR at the end. **[5]**

**6.** `LDR R4, 85` is at address 20. Location 85 holds 31.

**(a)** State the contents of the PC and CIR after the fetch stage. **[2]**
**(b)** Describe how the value 31 reaches R4, naming the registers and the bus used. **[3]**

**7.** `STR R6, 90` is executed. R6 holds 44.

**(a)** State what is placed in the MAR and the MBR. **[2]**
**(b)** State which signal is sent on the control bus. **[1]**

**8.** Explain why the volatile environment must be saved before an ISR is run. **[3]**

**9.** A program occupies addresses 40 to 43. An interrupt is noticed at the end of the cycle for the instruction at address 41. The ISR occupies addresses 70 to 72.

**(a)** State the value of the program counter that must be saved. **[1]**
**(b)** List the addresses of the instructions in the order they are executed. **[2]**
**(c)** State the value placed in the PC when the ISR is about to start and the value restored when it finishes. **[2]**

**10.** Describe, in order, what the processor does from the moment an interrupt request is received until the interrupted program continues. **[5]**

**11.** `LDR R5, [R4]` is executed. Register R4 holds 130 and memory location 130 holds 77.

**(a)** State the name of the addressing mode used. **[1]**
**(b)** Describe the execute stage for this instruction, naming the registers and buses used. **[4]**

## Answers

**1.** Fetch [1], decode [1], execute [1]. Order matters. **[3]**

**2.** The **program counter (PC)** [1]; the **address bus** [1]. **[2]**

**3.** Any two from: a key press or mouse click, a disk or network transfer completing, a timer expiring, an error such as division by zero, a printer becoming ready [1 each]. **[2]**

**4.** A subroutine that handles the event that caused the interrupt [1]. **[1]**

**5.** The address 60 is copied from the PC to the MAR [1]. The address is placed on the address bus and a read signal on the control bus [1]. The PC is increased to 61 [1]. The contents of location 60 arrive on the data bus in the MBR [1]. The instruction is copied to the CIR [1]. End values: PC = **61**, MAR = **60**, MBR = **`ADD R1, R2, #5`**, CIR = **`ADD R1, R2, #5`**. **[5]**
*Examiner insight:* five marks need five distinct points; the end values are worth the marks only if you also describe how they were reached.

**6. (a)** PC = **21** [1]; CIR = **`LDR R4, 85`** [1]
**(b)** 85 is placed in the MAR [1]; the value 31 is read from location 85 and travels on the **data bus** into the MBR [1]; it is then copied from the MBR into R4 [1]

**7. (a)** MAR = **90** [1]; MBR = **44** [1]
**(b)** A **memory write** signal [1]

**8.** The ISR will use the processor's registers and so may change their values [1]. If the PC, status register and other registers were not saved, the interrupted program could not return to the right place or would continue with changed values [1]. Saving them (on the stack) and restoring them afterwards lets the program resume exactly as before [1]. **[3]**

**9. (a)** **42** [1]
**(b)** 40, 41, 70, 71, 72, 42, 43 [2]. **[2]**
**(c)** **70** when the ISR is about to start [1]; **42** restored when it finishes [1]. **[2]**

**10.** The current Fetch-Execute cycle is completed [1]. At the end of the cycle the processor detects the interrupt [1]. It saves the volatile environment (PC, status register, stack pointer and other registers the ISR could change) on the stack [1]. It loads the PC with the start address of the ISR and runs it [1]. When the ISR ends, the saved values are restored, including the PC, and the interrupted program resumes [1]. **[5]**

**11. (a)** **Indirect** addressing [1]
**(b)** The contents of R4 (130) are copied to the MAR [1]. The address 130 is placed on the address bus and a memory read signal is sent on the control bus [1]. The contents of location 130 (77) are sent on the data bus [1] into the MBR, and then copied to R5 [1]. **[4]**

## Frequently asked questions

**Does the interrupt stop an instruction part-way through?**
No. The processor finishes the current cycle and then checks for an interrupt.

**Do I need to explain priorities?**
No. The specification says students will not be required to explain how interrupts of different priorities are dealt with.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.3 The Fetch-Execute cycle and interrupts.
