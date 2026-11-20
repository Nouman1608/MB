---
title: "AQA A-Level Computer Science (7517): Internal Hardware Components of a Computer -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
    subtopic: "internal-hardware-components-of-a-computer-7517"
description: "Original AQA 7517 section 4.7.1 questions with answers: buses, addressable memory calculations, I/O controllers and von Neumann versus Harvard architecture."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Internal hardware components study guide](/resources/aqa-a-level-computer-science-7517-internal-hardware-components/) | [Internal hardware components revision notes](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes/)

Unless a question says otherwise, assume each memory location holds one byte.

---

## Section A

**1.** State what is meant by a bus. **[1]**

**2.** Name the bus that carries the address of a memory location, and state in which direction the signals on it travel. **[2]**

**3.** State what the width of the data bus affects. **[1]**

**4.** Give **two** examples of signals carried on the control bus. **[2]**

**5.** State **one** type of system in which Harvard architecture is typically used. **[1]**

## Section B

**6.** A computer has 24 address lines.

**(a)** Calculate the number of memory locations that can be addressed. **[2]**
**(b)** The designer doubles the number of memory locations that must be addressed. State how many address lines are now needed. **[1]**

**7.** A small embedded system needs to address 3,000 memory locations. Calculate the smallest number of address lines it needs, and show your working. **[3]**

**8.** Describe the steps by which the processor reads the contents of one memory location, referring to the address bus, the control bus and the data bus. **[4]**

**9.** A block of 6,000 bytes is copied from memory into the processor. Calculate the number of transfers needed over a data bus that is:

**(a)** 8 bits wide **[1]**
**(b)** 32 bits wide **[2]**
**(c)** 64 bits wide **[2]**

**10.** Explain why a processor cannot communicate with a printer directly through the data bus alone and needs an I/O controller. **[3]**

**11.** Explain what is meant by addressable memory. **[2]**

**12.** Compare von Neumann architecture with Harvard architecture. Your answer should refer to how instructions and data are stored and to how quickly the processor can fetch them. **[4]**

**13.** A designer is choosing between the two architectures for a washing-machine controller that runs one fixed program, and for a general purpose laptop.

**(a)** State, with a reason, which architecture suits the washing-machine controller. **[2]**
**(b)** State, with a reason, which architecture suits the laptop. **[2]**

**14.** A student says: "Doubling the width of the address bus makes the computer twice as fast." Evaluate this claim. **[3]**

---

## Answers

**1.** A set of parallel wires (lines) used to carry signals between components [1].

**2.** The address bus [1]; one direction only, from the processor to memory (and I/O controllers) [1].

**3.** The number of bits that can be transferred in one operation (so how much data moves at once) [1].

**4.** Any two from: memory read; memory write; I/O read; I/O write; clock; interrupt request; bus request; bus grant [1 each].

**5.** Any one from: an embedded system; a digital signal processing (DSP) system [1].

**6. (a)** 2²⁴ [1] = 16,777,216 locations [1].
**(b)** 25 lines [1].

**7.** 2¹¹ = 2,048, which is fewer than 3,000, so 11 lines are too few [1]; 2¹² = 4,096, which is at least 3,000 [1]; so 12 address lines are needed [1].

**8.** The processor places the address of the location on the address bus [1]; it sets the memory read signal on the control bus [1]; the memory finds the location and places its contents on the data bus [1]; the processor reads the value from the data bus [1].

**9. (a)** 8 bits is 1 byte per transfer, so 6,000 transfers [1].
**(b)** 32 bits is 4 bytes per transfer [1]; 6,000 ÷ 4 = 1,500 transfers [1].
**(c)** 64 bits is 8 bytes per transfer [1]; 6,000 ÷ 8 = 750 transfers [1].

**10.** The printer works at a different speed from the processor [1]; it uses different signals and data formats from the bus [1]; the controller converts between them and buffers data (and reports status such as ready or error) [1].

**11.** Main memory is divided into locations [1]; each location has a unique address which the processor uses to select it [1].

**12.** Von Neumann: instructions and data share one memory [1] and one set of buses, so an instruction fetch and a data access cannot happen at the same time [1]. Harvard: instructions and data are in separate memories [1] with separate buses, so the processor can fetch an instruction and access data at the same time, giving higher throughput [1].

**13. (a)** Harvard [1], because the program is fixed and instruction and data accesses can overlap, giving fast, predictable operation (or: it is an embedded system) [1].
**(b)** Von Neumann [1], because programs are loaded as data and the shared memory can be divided between code and data as needed, with simpler hardware (or: general purpose computers use it extensively) [1].

**14.** The claim is wrong [1]. Doubling the width of the address bus allows the processor to address far more memory (each extra line doubles the number of locations) [1], but it does not make instructions execute faster; speed depends more on clock speed, data bus width and cache [1].

---

## Where marks are usually lost

- Saying the address bus carries data, or that it is two-way.
- Mixing up address bus width (how much memory) and data bus width (how much per transfer).
- Forgetting to round up to the next whole number of address lines.
- Describing Harvard as "faster" without saying that accesses overlap.
- Writing "the I/O controller is a port" instead of explaining what it does.
