---
title: "Cambridge A Level Computer Science (9618): Central Processing Unit (CPU) Architecture -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
    subtopic: "cpu-architecture"
description: "Original questions with mark-scheme answers on Cambridge 9618 section 4.1: Von Neumann model, registers, buses, performance, ports, F-E cycle and interrupts."
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

These questions practise section 4.1 Central Processing Unit (CPU) Architecture of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026. Revise first with the [CPU architecture study guide](/resources/cambridge-a-level-computer-science-9618-cpu-architecture/) and the [CPU architecture revision notes](/resources/cambridge-a-level-computer-science-9618-cpu-architecture-revision-notes/).

## Section A

**1.** Describe the stored program concept. **[2]**

**2.** Explain the difference between a general purpose register and a special purpose register. **[2]**

**3.** State the purpose of each of the following registers.

**(a)** Current Instruction Register (CIR) **[1]**

**(b)** Index Register (IX) **[1]**

**(c)** Status Register **[1]**

**4.** State the role of the Control Unit and of the system clock. **[2]**

**5.** A computer has a 20-bit address bus. Calculate the number of memory locations it can address. **[1]**

**6.** Explain why the data bus is bidirectional but the address bus is unidirectional. **[2]**

**7.** State **two** differences between an HDMI port and a VGA port. **[2]**

## Section B

**8.** The Program Counter holds 520. Memory location 520 contains the instruction ADD 700, and location 700 contains the value 15. The Accumulator holds 40.

**(a)** Write the fetch stage of the F-E cycle in register transfer notation. **[4]**

**(b)** State the contents of the PC, MAR, CIR and ACC after the instruction has been executed. **[4]**

**9.** Explain how the address bus, data bus and control bus are used when the processor reads an instruction from memory. **[3]**

**10.** A company is choosing between two laptops. Laptop P has 8 cores at 2.4 GHz. Laptop Q has 4 cores at 3.2 GHz and a larger cache. Staff mainly run one older program that uses only one core. Explain which laptop is likely to run this program faster. **[3]**

**11.** Explain why increasing the size of cache memory improves the performance of a computer system. **[2]**

**12.** A user presses a key while a program is running. Describe how the processor handles the resulting interrupt. **[5]**

**13.** State **two** possible causes of an interrupt, other than a key press. **[2]**

## Answers

**1.** Program instructions are stored in main memory together with the data, in binary [1]; the processor fetches the instructions from memory and executes them one at a time in sequence [1]. **[2]**

**2.** A general purpose register can hold any data the program is using, such as the Accumulator [1]; a special purpose register has a single fixed function, such as the PC holding the address of the next instruction [1]. **[2]**

**3. (a)** Holds the instruction currently being decoded and executed [1].

**(b)** Holds a value that is added to an address to form the address used, in indexed addressing [1].

**(c)** Holds individual flags showing the result of operations and the state of the processor, such as carry, overflow, negative or zero [1]. **[3]**

**4.** The Control Unit decodes instructions and sends signals to coordinate the components and data flow [1]; the system clock produces regular timing pulses that synchronise all operations [1]. **[2]**

**5.** 2²⁰ = **1,048,576** locations [1]. **[1]**

**6.** Data and instructions must travel both from memory to the processor (reading) and from the processor to memory (writing) [1]; addresses are only ever sent by the processor to memory or input/output devices, never the other way [1]. **[2]**

**7.** Any two, one mark each [2]: HDMI carries a digital signal, VGA an analogue signal; HDMI carries audio as well as video, VGA video only; HDMI supports higher-definition images with better quality; VGA is mainly found on older equipment. **[2]**

**8. (a)** MAR ← [PC] [1]; PC ← [PC] + 1 [1]; MDR ← [[MAR]] [1]; CIR ← [MDR] [1].

**(b)** PC = **521** [1]; MAR = **700** (the operand address used during execution) [1]; CIR = **ADD 700** [1]; ACC = 40 + 15 = **55** [1]. **[8]**

**9.** The address of the instruction is sent from the MAR along the address bus to memory [1]; a memory read signal is sent along the control bus [1]; the instruction is sent from memory along the data bus into the MDR [1]. **[3]**

**10.** Laptop Q [1]. The program uses only one core, so P's extra cores bring no benefit [1]; Q's higher clock speed executes more cycles per second on that core, and its larger cache means fewer slow accesses to main memory [1]. **[3]**

**11.** Cache is faster to access than main memory and holds frequently used instructions and data [1]; a larger cache holds more of them, so the processor needs to wait for slower main memory less often [1]. **[2]**

**12.** At the end of the current F-E cycle the processor checks for interrupts and finds the keyboard interrupt [1]. It compares its priority with the current task and, if higher, suspends the program [1]. The contents of the PC and other registers are saved, for example on a stack [1]. The address of the keyboard ISR is loaded into the PC and the ISR is executed [1]. When the ISR finishes, the saved register values are restored and the program continues from where it stopped [1]. **[5]**

**13.** Any two, one mark each [2]: printer out of paper; data transfer from a disk finished; timer signalling the end of a time slice; a program error such as division by zero; a program requesting an OS service; a hardware fault or power failure. **[2]**

## Where marks are usually lost

- Saying the PC holds the current instruction rather than the address of the next one.
- Writing MDR ← [MAR] with single brackets.
- Leaving the PC unchanged after the fetch.
- Mixing up which bus carries addresses and which carries data.
- Choosing more cores without checking whether the software can use them.
- Describing interrupt handling without saving and restoring registers.
