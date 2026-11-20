---
title: "OxfordAQA A-Level Computer Science (9645): Internal hardware components of a computer -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Internal Hardware Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "internal-hardware-components-of-a-computer-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.7.1 Internal hardware components: buses, memory sums, stored program concept, architectures, with full answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.7.1 Internal hardware components of a computer** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the processor, main memory, the three buses, I/O controllers, addressable memory, the stored program concept and von Neumann and Harvard architectures. In every memory question the size of each location is stated, as the specification says exam questions will do. Use 1 KiB = 1 024 bytes and 1 MiB = 1 048 576 bytes.

Related pages: [internal hardware study guide](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer/) ·
[internal hardware revision notes](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer-revision-notes/) ·
[computer organisation and architecture practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/)

## Section A

**1.** State the purpose of the control bus and give two examples of a signal that it carries. **[3]**

**2.** State which of the address bus and the data bus is one-way, and give the direction of travel. **[2]**

**3.** Explain why a keyboard is connected to the rest of the computer through an I/O controller rather than directly to the processor. **[2]**

**4.** A processor has an address bus with 11 lines. Each addressable location holds 2 bytes.

**(a)** Calculate the number of locations that can be addressed. **[1]**
**(b)** Calculate the total memory that can be addressed, in KiB. **[2]**

## Section B

**5.** Describe the stages of reading a value from main memory, stating which bus is used in each stage. **[4]**

**6.** A computer has 128 KiB of main memory. Each location holds 2 bytes.

**(a)** Calculate the number of locations. **[2]**
**(b)** State the minimum number of lines the address bus needs. **[1]**
**(c)** The address bus is widened from this size to 20 lines. State the factor by which the number of addressable locations increases. **[1]**

**7.** A block of 512 bits must be transferred from main memory to the processor.

**(a)** Calculate the number of transfers needed on a 64-bit data bus. **[1]**
**(b)** Calculate the number of transfers needed on a 16-bit data bus. **[1]**
**(c)** A designer widens the data bus. Explain why this does not change the number of locations that can be addressed. **[2]**

**8.** A student writes: "The stored program concept means that programs are kept on the hard disk so that they are not lost." Explain what is wrong with this statement and state the correct concept. **[3]**

**9.** Compare von Neumann and Harvard architectures. Include one advantage of each. **[4]**

**10.** An 18-line address bus is used with locations that each hold 4 bytes.

**(a)** Calculate the total addressable memory in MiB. Show your working. **[3]**
**(b)** A designer says: "If I double the data bus width, I double the addressable memory." State whether the designer is correct and justify your answer. **[2]**

## Answers

**1.** It carries signals that coordinate transfers and timing between components [1]. Two examples from: memory read, memory write, clock, interrupt request [1 each, max 2]. **[3]**

**2.** The **address bus** is one-way [1], from the processor to memory or an I/O controller [1]. The data bus is two-way. **[2]**

**3.** The keyboard works at a very different speed and with different signals from the processor [1]. The controller translates between them and holds the data until the processor is ready, so the processor does not need to know the details of the device [1]. **[2]**

**4. (a)** 2^11 = **2 048** [1]
**(b)** 2 048 × 2 = 4 096 bytes [1] = **4 KiB** [1]

**5.** The processor puts the address of the location on the **address bus** [1]. It sends a memory read signal on the **control bus** [1]. Memory places the contents of that location on the **data bus** [1]. The processor takes the value from the data bus [1]. **[4]**

**6. (a)** 128 KiB = 131 072 bytes [1]. 131 072 ÷ 2 = **65 536 locations** [1]
**(b)** 65 536 = 2^16, so **16 lines** [1]
**(c)** 2^20 ÷ 2^16 = a factor of **16** [1]

**7. (a)** 512 ÷ 64 = **8** transfers [1]
**(b)** 512 ÷ 16 = **32** transfers [1]
**(c)** The number of locations is set by the width of the **address bus** [1]. The data bus only sets how many bits move in one transfer [1]. **[2]**

**8.** The concept is about **main memory**, not the hard disk [1]. The correct concept: machine code instructions are stored in main memory and are fetched and executed serially by the processor [1]. Programs are held as binary data alongside other data, so the same hardware can run any program that is loaded [1]. **[3]**

**9.** Von Neumann uses **one memory** and one set of buses for instructions and data [1]. Harvard uses **separate memories and separate buses** for instructions and data [1]. Von Neumann advantage: simpler and cheaper, or memory space is shared flexibly between instructions and data [1]. Harvard advantage: an instruction can be fetched at the same time as data is read or written, so it can be faster [1]. Accept protection of instruction memory or different widths for the Harvard advantage. **[4]**

**10. (a)** Locations = 2^18 = 262 144 [1]. Total = 262 144 × 4 = 1 048 576 bytes [1] = **1 MiB** [1]
**(b)** The designer is **not correct** [1]. Addressable memory depends on the number of address lines and the location size, not on the data bus width [1]. **[2]**

## Frequently asked questions

**Do I need to know how many bits are in a location?**
Not from memory. The specification says exam questions will state the size of each addressable location, so read it from the question.

**Is the control bus one wire?**
No. It is a group of lines, each with its own purpose, such as read, write, clock or interrupt request.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.1 Internal hardware components of a computer.
