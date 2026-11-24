---
title: "AQA A-Level Computer Science (7517): Internal Hardware Components of a Computer -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.7.1 recall: processor, memory, buses, I/O controllers, addressable memory, von Neumann versus Harvard, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.7.1 Internal hardware components of a computer**, AQA A-Level Computer Science (7517): the role of the **processor, main memory, address bus, data bus, control bus and I/O controllers**, the need for communication between them, **addressable memory**, and **von Neumann versus Harvard** architecture. Fuller explanations and worked examples are in the [internal hardware components study guide](/resources/aqa-a-level-computer-science-7517-internal-hardware-components/); questions are in the [internal hardware components practice questions](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-practice/).

## Components at a glance

| Component | Role |
|---|---|
| Processor | Fetches, decodes and executes instructions; starts transfers on the buses |
| Main memory | Holds the program and data in use; volatile (RAM) |
| Address bus | Carries the address of the location or port wanted; one direction only (processor to memory and controllers) |
| Data bus | Carries data and instructions; both directions |
| Control bus | Carries control signals: read, write, clock, interrupt requests, bus request and grant |
| I/O controller | Interface between the bus and a peripheral device; converts signals and formats, buffers data, holds status |

## Buses

A **bus** is a set of parallel wires shared by components. The processor and other components use it to send signals to each other.

- **Address bus width** decides how many locations can be addressed: **2ⁿ for n lines**.
- **Data bus width** decides how many bits move in one transfer.
- **Control bus** makes sure only one component drives the data bus at a time and that both ends agree on read or write.

## Addressable memory

- Memory is split into locations. Each has a unique **address**.
- Usually one location holds one byte.
- n address lines give 2ⁿ addresses.

| Lines | Locations |
|---|---|
| 8 | 256 |
| 10 | 1,024 |
| 12 | 4,096 |
| 16 | 65,536 |
| 20 | 1,048,576 |
| 32 | 4,294,967,296 |

**Reverse calculation:** the number of lines needed is the smallest n with 2ⁿ at least the number of locations. Example: 5,000 locations need 13 lines (2¹² = 4,096 is too small; 2¹³ = 8,192 is enough).

## A memory read in four steps

1. Address placed on the **address bus**.
2. **Memory read** signal set on the **control bus**.
3. Memory places the contents on the **data bus**.
4. Processor reads the data bus.

A write uses the memory write signal and the processor drives the data bus.

**Transfer count check:** 1,024 bytes over a 32-bit (4-byte) data bus takes 1,024 ÷ 4 = 256 transfers.

## I/O controllers

- Devices differ from the processor in **speed, format and signals**.
- A controller **converts** between them, **buffers** data, holds **status** (ready, error) and can raise an **interrupt**.
- The processor addresses the controller by a port number, much as it addresses memory.

## Why components must communicate

The processor needs instructions and data from memory, somewhere to put results, and a route to receive input and send output. Shared buses with separate address, data and control roles give agreed timing and direction with few wires, but only one transfer can use a bus at a time.

## Von Neumann versus Harvard

| Feature | Von Neumann | Harvard |
|---|---|---|
| Instructions and data | One shared memory | Separate memories |
| Buses | One set, shared | Separate sets |
| Instruction fetch and data access together | No | Yes |
| Hardware | Simpler | More complex |
| Strength | Flexible; programs are data | Faster throughput; code cannot be overwritten |
| Weakness | Bus bottleneck; faulty code can overwrite instructions | More wires; memory cannot be shared between code and data |
| Typical use | General purpose computers | Embedded systems, DSP |

## Key terms

| Term | Definition |
|---|---|
| Bus | A set of parallel wires used to carry signals between components |
| Address | A unique number identifying a memory location |
| Addressable memory | Memory in which each location can be selected by its address |
| Unidirectional | Signals travel in one direction only |
| Bidirectional | Signals can travel in either direction |
| I/O controller | Hardware that connects a peripheral device to the buses |
| Buffer | Temporary store that evens out differences in speed |
| Von Neumann bottleneck | Limit on speed caused by instructions and data sharing one bus |
| DSP | Digital signal processing: repeated processing of a stream of signal data |

## Exam traps

- **The address bus carries only addresses, in one direction.**
- **Width roles:** address width gives memory size; data width gives transfer size.
- **A bus is many wires**, not one.
- **Harvard advantage:** say that instruction and data accesses can happen **at the same time**.
- **Give a use** for each architecture when asked where each is used.
- **Show 2ⁿ** in a memory size calculation.

## Self-test

1. What is a bus?
2. Which bus is one-way?
3. What does the width of the address bus decide?
4. What does the width of the data bus decide?
5. Name two signals carried on the control bus.
6. How many locations can 16 address lines address?
7. How many address lines are needed for 2,048 locations?
8. State one job of an I/O controller.
9. Give one advantage of Harvard architecture.
10. Give one disadvantage of von Neumann architecture.
11. Where is Harvard architecture typically used?
12. A 16-bit data bus moves 2 bytes at a time. How many transfers are needed for 512 bytes?

**Answers**

1. A set of parallel wires that carries signals between components.
2. The address bus.
3. The maximum number of memory locations that can be addressed.
4. How many bits can be transferred in one go.
5. Any two of: memory read, memory write, I/O read, I/O write, clock, interrupt request, bus request, bus grant.
6. 2¹⁶ = 65,536.
7. 11 (2¹¹ = 2,048).
8. Any one of: convert signals or formats; buffer data; hold status information; raise interrupts.
9. Instruction fetch and data access can overlap (or program memory cannot be overwritten).
10. The shared bus limits speed (the bottleneck), or faulty code can overwrite instructions.
11. Embedded systems such as DSP systems.
12. 512 ÷ 2 = 256.

## More resources on this topic

- [Internal hardware components study guide](/resources/aqa-a-level-computer-science-7517-internal-hardware-components/)
- [Internal hardware components practice questions](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-practice/)
- [Computer organisation and architecture revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-revision-notes/)
