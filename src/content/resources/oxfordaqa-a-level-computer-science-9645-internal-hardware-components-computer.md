---
title: "OxfordAQA A-Level Computer Science (9645): Internal hardware components of a computer"
seoTitle: "OxfordAQA A-Level CS 9645 Internal Hardware Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.7.1 in depth: processor, main memory, the three buses, I/O controllers, addressable memory sums and von Neumann versus Harvard."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.7.1 Internal hardware components of a computer** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.7 Computer organisation and architecture (AS). The specification asks you to understand the role of the **processor, main memory, address bus, data bus, control bus and I/O controllers** and how they relate to each other, to understand the **need for communication** between components and the idea of a **bus**, to understand **addressable memory**, to describe the **stored program concept**, and to explain the difference between **von Neumann and Harvard architectures** and the advantages of each.

For quick recall use the [internal hardware revision notes](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer-revision-notes/), and test yourself with the [internal hardware practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer-practice/). The wider [computer organisation and architecture study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/) covers the whole of topic 3.7; this page goes deeper on the hardware inside the box and on the memory sums that examiners like to set.

## The big picture

A computer needs three things to run a program: something that carries out instructions, somewhere to keep the instructions and data, and a way to talk to the outside world. Each is a separate component. They are joined by **buses**, so that they can pass information to each other.

| Component | Role |
|---|---|
| Processor | Fetches, decodes and executes instructions; does the arithmetic and logic |
| Main memory | Holds the programs and data currently in use, as numbered locations |
| I/O controllers | Hardware that manages the exchange of data with a peripheral device |
| Address bus | Carries the address of the memory location or device being used |
| Data bus | Carries the data itself, in either direction |
| Control bus | Carries timing and command signals, such as read, write and interrupt |

## The processor

The processor is the part that does the work. It reads one instruction at a time from main memory, works out what it means, and carries it out. It contains an arithmetic logic unit, a control unit, a clock and registers; topic 3.7.2 covers these in detail. For 3.7.1 you need only the relationship: the processor is the **only component that executes instructions**, and it is in charge of the buses. It decides which address to use and whether to read or write.

## Main memory

Main memory (RAM) stores the instructions and data of the programs that are running now. It is split into equal-sized **locations**, and each location has its own number, called its **address**. The processor does not ask for "the third item of my program"; it asks for the contents of an address, for example location 3 200.

Main memory is much faster to access than secondary storage, which is why programs are copied into it before they run. It is also **volatile**: the contents are lost when the power is removed. Secondary storage is covered in 3.7.5.

## I/O controllers

A keyboard, a screen, a disk drive and a network card all work at different speeds and in different ways. An **I/O controller** sits between the device and the buses. It translates between the device's own signals and the processor's buses, and it can hold data until the processor or the device is ready. This means the processor does not need to know the details of every device. It talks to the controller, and the controller looks after the device.

## Buses: the need for communication

Every component has to exchange information with others. A **bus** is a set of parallel wires, or **lines**, shared between components. Each line carries one bit at a time, so the **width** of a bus is the number of lines it has. Three buses are used together:

- The **address bus** carries the address of the location to be read or written. It is **one-way**: addresses go from the processor to memory or an I/O controller.
- The **data bus** carries the value being read or written. It is **two-way**: a read moves data into the processor, and a write moves data out.
- The **control bus** carries signals that coordinate the transfer, such as a **memory read** or **memory write** signal, a clock signal, and an interrupt request coming from a device. Individual lines can go in either direction depending on their purpose.

**Worked example: reading one location.** The processor needs the value at address 5 120.

1. The processor places 5 120 on the **address bus**.
2. It sends a **memory read** signal on the **control bus**.
3. Memory finds location 5 120 and puts its contents on the **data bus**.
4. The processor takes the value from the data bus.

A write works the same way, except the processor puts the value on the data bus and sends a **memory write** signal. If you are asked to "describe how data is read from memory", name the three buses and say what each one carries. That is where the marks are.

## Addressable memory

Memory is **addressable**: each location has a unique address, and the address is a binary number carried on the address bus. If the address bus has *w* lines, it can carry 2^*w* different patterns, so the processor can address at most **2^*w* locations**.

The specification says that exam questions will **state the size of each addressable location**, so you do not need to assume that a location is one byte. The total memory that can be addressed is:

> number of locations × size of each location

**Worked example 1.** An address bus has 12 lines and each location holds 16 bits (2 bytes).

1. Locations = 2^12 = **4 096**.
2. Total = 4 096 × 2 bytes = **8 192 bytes**, which is **8 KiB**.

**Worked example 2.** A system needs 1 MiB of memory with 1 byte in each location. How many address lines are needed?

1. 1 MiB = 1 048 576 locations = 2^20.
2. The address bus needs **20 lines**.

**Worked example 3.** A memory is 32 KiB and each location holds 4 bytes. How many address lines are needed?

1. 32 KiB = 32 768 bytes. Locations = 32 768 ÷ 4 = 8 192 = 2^13.
2. The address bus needs **13 lines**.

Adding one line to the address bus **doubles** the number of locations that can be addressed. Widening the **data bus** does not change how many locations exist. It changes how much is moved at once. A 32-bit value on a 16-bit data bus needs **2 transfers**. On a 32-bit data bus it needs 1.

## The stored program concept

The specification describes the idea in one sentence: machine code instructions stored in main memory are **fetched and executed serially** by a processor that performs arithmetic and logical operations. Three consequences follow.

- **Programs are data.** Instructions are held in memory as binary patterns, in the same memory as the data they use. To run a different program, you load different contents into memory. You do not rewire the machine.
- **Serial execution.** The processor takes instructions one at a time, usually in the order they are stored, unless a branch changes the order.
- **A general-purpose machine.** The same hardware can run any program that is loaded into it.

Before this idea, early machines were wired or set up for each task. Storing the program in memory is what makes one computer able to be a word processor, a game and a spreadsheet in turn.

## Von Neumann and Harvard architectures

The two architectures differ in how instructions and data are stored and carried.

| Feature | Von Neumann | Harvard |
|---|---|---|
| Memory | One memory for instructions and data | Separate memories for instructions and data |
| Buses | One set of buses shared by both | Separate buses for instructions and data |
| Fetch and data access | Cannot both happen at the same moment | Can happen at the same time |

**Von Neumann advantages:**

- **Simpler and cheaper** to build, with one memory and one set of buses.
- **Flexible use of memory.** Free space can hold either instructions or data, as the program needs.
- A program can be loaded, treated as data and modified, which is how compilers and operating systems work.

**Harvard advantages:**

- **Faster**, because the processor can fetch the next instruction while it reads or writes data for the current one. The shared bus in a von Neumann machine is a bottleneck.
- Instructions and data can have **different word widths** and sizes, each chosen to suit their purpose.
- Instruction memory can be **protected** from being overwritten by a faulty program.

Harvard designs are common in small embedded devices. Most general-purpose computers present a von Neumann view to the programmer, even where the processor internally separates instruction and data caches. Examiners ask for "one advantage of each", so learn one clear sentence for each.

## Exam technique

- **Use the three bus names precisely.** "The address bus carries the address; the data bus carries the data; the control bus carries signals such as read and write." Do not say "the bus sends the instruction" without naming which one.
- **Show every step in a memory sum.** Write the number of locations, then multiply by the location size, then convert units. Convert only at the end.
- **For a difference question, compare, do not list.** "Von Neumann uses one memory, while Harvard uses two" earns the mark. "Von Neumann uses one memory" on its own does not.
- **Link a design choice to an effect.** A wider address bus means more locations. A wider data bus means more bits per transfer.

## Common mistakes

- Saying the data bus is one-way, or that the address bus carries data.
- Saying that widening the data bus increases the amount of memory that can be addressed.
- Multiplying by 8 or by 1 024 too early, or forgetting to multiply by the location size when the question states it.
- Writing "von Neumann is faster". The shared bus makes von Neumann slower in this respect.
- Confusing main memory with secondary storage. Main memory holds what is running now and is lost when power is off.
- Describing the stored program concept as "programs are stored on the hard disk". The concept is about instructions held in main memory.

## More on this topic

- [Internal hardware components revision notes](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer-revision-notes/)
- [Internal hardware components practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer-practice/)
- [The processor and its components study guide](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.1 Internal hardware components of a computer.
