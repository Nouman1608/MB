---
title: "Cambridge O Level Computer Science (2210): Computer architecture -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3.1
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "computer-architecture-2210"
description: "Original questions with mark-scheme answers on Cambridge O Level Computer Science 2210 section 3.1: CPU components, the FDE cycle, cores, cache, clock and embedded systems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Computer architecture study guide](/resources/cambridge-o-level-computer-science-2210-computer-architecture/) and [Computer architecture revision notes](/resources/cambridge-o-level-computer-science-2210-computer-architecture-revision-notes/)

---

## Section A

**1.** State the role of the CPU in a computer. **[1]**

**2.** State what is meant by the term Von Neumann architecture. **[1]**

**3.** State the purpose of the program counter (PC). **[1]**

**4.** Identify the component of the CPU that carries out logical comparisons. **[1]**

**5.** Identify which bus is used to carry each of the following: an instruction travelling from RAM to the CPU; a "write" signal; the address of a memory location. **[3]**

**6.** A CPU has a clock speed of 3.4 GHz. State how many clock pulses it produces each second. **[1]**

**7.** Identify **two** devices from this list that contain embedded systems: desktop PC, traffic light controller, laptop, digital thermostat. **[2]**

## Section B

**8.** Describe the role of the memory address register (MAR) and the memory data register (MDR) in the **execute** stage of an instruction that stores a value in memory. **[3]**

**9.** The PC holds 64. Address 64 contains the instruction ADD 90. Address 90 contains the value 18, and the accumulator already contains 35. State the values in the PC, MAR, MDR and ACC after this instruction has been fetched, decoded and executed. **[4]**

**10.** Describe the decode and execute stages of the fetch–decode–execute cycle for an instruction that adds a value from memory to the accumulator. **[4]**

**11.** A school is choosing computers for a programming class. The salesperson says one model is better because "it has more cache". Explain what cache is and how a larger cache can improve performance. **[3]**

**12.** Explain why doubling the number of cores in a CPU does not always double its performance. **[2]**

**13.** Describe the purpose and use of an instruction set. **[3]**

**14.** A vending machine contains an embedded system. Describe **three** characteristics of the embedded system, relating each to the vending machine. **[3]**

---

## Answers

**1.** To process the instructions and data that are input into the computer so that the result can be output [1].

**2.** A design in which program instructions and data are stored together in the same main memory (and fetched along the same buses) [1].

**3.** To hold the address of the next instruction to be fetched [1].

**4.** The arithmetic logic unit (ALU) [1].

**5.** Instruction from RAM: data bus [1]; write signal: control bus [1]; address: address bus [1].

**6.** 3.4 billion (3 400 000 000) [1].

**7.** Traffic light controller [1]; digital thermostat [1].

**8.** The address where the value is to be stored is placed in the MAR [1], and the value to be stored (from the ACC) is placed in the MDR [1]. A write signal is sent on the control bus, and the contents of the MDR are written to the address held in the MAR [1].

**9.** PC = **65** [1]; MAR = **90** [1]; MDR = **18** [1]; ACC = **53** (35 + 18) [1].

**10.** Decode: the control unit decodes the instruction held in the CIR to find out what to do and which address is needed [1]. Execute: the address of the value is copied to the MAR and sent to memory along the address bus [1]. The value comes back along the data bus into the MDR [1]. The ALU adds the value to the contents of the accumulator, and the result is stored in the ACC [1].

**11.** Cache is a small amount of very fast memory inside or next to the CPU [1] that stores frequently used instructions and data [1]. A larger cache can hold more of these, so the CPU has to fetch from slower RAM less often and can process instructions more quickly [1].

**12.** Some tasks must be done one step after another, so they cannot be shared between cores [1]; the cores also have to co-ordinate and share data, which takes time [1].

**13.** An instruction set is the list of all the commands a CPU can process [1]. The commands are in machine code, each with its own binary code [1]. When the control unit decodes an instruction, it recognises it as one of the commands in the set and carries it out; programs must be in the CPU's own machine code to run [1].

**14.** Any three, each related to the vending machine: it performs a dedicated function, controlling item selection, payment and dispensing only [1]; it is built into a larger device, the vending machine [1]; it runs a fixed program that the customer cannot change [1]. Also accept: low power, so it can run all day cheaply; low cost, so it can be fitted to many machines; small, so it fits inside the cabinet.

---

## Where marks are usually lost

- Question 8: describing the fetch stage when the question asks about execute.
- Question 9: leaving the PC at 64 (it is incremented during fetch) or putting 64 in the MAR at the end.
- Question 11: saying cache is "extra RAM" or "storage".
- Question 14: listing characteristics without linking them to the vending machine.
- Question 5: naming the address bus for the instruction itself. The address bus only carries the address; the instruction comes back on the data bus.
- Question 12: saying "the cores get in each other's way" without explaining that some work cannot be split and that cores must share data.
- Question 13: defining an instruction set as "a programming language". It is the set of machine-code commands one CPU can process.

## Working for Question 9

During fetch, 64 goes from the PC to the MAR, ADD 90 arrives in the MDR and is copied to the CIR, and the PC becomes 65. During execute, 90 is placed in the MAR, the value 18 arrives in the MDR, and the ALU adds 18 to the 35 already in the accumulator, leaving 53.
