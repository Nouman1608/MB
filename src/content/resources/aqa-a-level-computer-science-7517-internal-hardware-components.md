---
title: "AQA A-Level Computer Science (7517): Internal Hardware Components of a Computer"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.7.1: processor, main memory, the address, data and control buses, I/O controllers, addressable memory and von Neumann versus Harvard architecture."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.7.1 Internal hardware components of a computer** in AQA A-Level Computer Science (7517). You must understand the role of six components and how they relate to each other: the **processor, main memory, address bus, data bus, control bus and I/O controllers**. You must also explain the need for communication between components, explain the difference between **von Neumann and Harvard architectures**, and understand the idea of **addressable memory**. The specification says that exam questions about specific machines will not be asked, so the focus is on the general model.

The wider [computer organisation and architecture study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study-guide/) covers the whole of section 4.7. This page goes further on the buses and on addressing, with calculations.

Condensed notes are in the [internal hardware components revision notes](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes/), and exam-style questions are in the [internal hardware components practice questions](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-practice/).

## The big picture

A computer system has three kinds of component that must work together:

- the **processor**, which executes instructions;
- **main memory**, which holds the instructions and data that the processor is using now;
- **input/output (I/O) devices**, such as a keyboard, screen or disk, which connect to the system through **I/O controllers**.

These parts are joined by **buses**. A bus is a set of parallel wires that carries signals between components. Without buses the processor would have no way to fetch an instruction, store a result or read a keypress. Because several components share the same wires, the processor controls who may use the bus and when.

## The processor

The processor (central processing unit, CPU) fetches instructions from main memory, decodes them and carries them out. It performs arithmetic and logical operations and directs the other components. Its internal structure (arithmetic logic unit, control unit and registers) is covered in 4.7.3. For this subtopic the key point is that **the processor is the only component that starts transfers on the buses in a basic model**: it decides which memory location or device to use and whether to read or write.

## Main memory

Main memory (RAM) holds the program currently being run and the data it is working on. It is **volatile**: its contents are lost when the power is removed. Some systems also have ROM, which keeps its contents without power and typically holds start-up code.

Main memory is much faster to access than secondary storage, but the processor still needs to wait for it. That gap in speed is why cache memory exists (see 4.7.3).

## Addressable memory

Main memory is divided into **locations**, and each location has a unique number called its **address**. The processor uses the address to say which location it wants, in the same way that a house number picks out one house in a street. In most systems each location holds one byte (8 bits).

The number of locations you can address depends on the **width of the address bus**. With n address lines, each carrying a 0 or a 1, there are 2ⁿ different addresses:

| Address bus width | Locations addressable | Bytes (if one byte per location) |
|---|---|---|
| 8 lines | 2⁸ = 256 | 256 B |
| 10 lines | 2¹⁰ = 1,024 | 1 KiB |
| 16 lines | 2¹⁶ = 65,536 | 64 KiB |
| 20 lines | 2²⁰ = 1,048,576 | 1 MiB |
| 32 lines | 2³² = 4,294,967,296 | 4 GiB |

**Worked example 1.** A system has 4,096 locations. How many address lines does it need? 4,096 = 2¹², so **12 lines**. If the count is not an exact power of two, round up: 5,000 locations need 13 lines, because 2¹² = 4,096 is too few and 2¹³ = 8,192 is enough.

## The three buses

### Address bus

- Carries the **address** of the memory location or I/O port that the processor wants to use.
- It is **unidirectional**: addresses travel from the processor to memory and I/O controllers, never the other way.
- Its **width** sets the maximum amount of memory that can be addressed (2ⁿ locations). A wider address bus allows more memory.

### Data bus

- Carries the **data** (or instructions) being transferred between the processor, memory and I/O controllers.
- It is **bidirectional**: data travels to the processor on a read and from the processor on a write.
- Its **width** sets how many bits can be moved in one transfer. A wider data bus moves more data per transfer.

### Control bus

- Carries **control signals** that coordinate the components.
- Typical signals are **memory read**, **memory write**, **I/O read**, **I/O write**, a **clock** signal for timing, **interrupt requests** from devices and **bus request/grant** signals.
- Each line usually carries a single signal in one direction. Together they ensure that only one component drives the data bus at a time and that all components agree on whether the current operation is a read or a write.

**Worked example 2: reading one word from memory.**

1. The processor puts the address of the required location on the **address bus**.
2. The processor sets the **memory read** signal on the **control bus**.
3. The memory decodes the address, finds the location and places its contents on the **data bus**.
4. The processor reads the value from the data bus.

For a write, step 2 uses the memory write signal and the processor, not the memory, puts the value on the data bus.

**Worked example 3: effect of data bus width.** A program of 1,024 bytes is loaded into memory. With an 8-bit data bus, each transfer carries 1 byte, so 1,024 transfers are needed. With a 32-bit data bus, each transfer carries 4 bytes, so 1,024 ÷ 4 = **256 transfers**. With a 64-bit data bus, 1,024 ÷ 8 = **128 transfers**. Fewer transfers means the same data moves in less time, if the clock speed is unchanged.

## I/O controllers

Peripheral devices differ from the processor in speed, data format and electrical signals. A keyboard sends a few characters a second; a disk may send millions of bytes a second. An **I/O controller** (also called an interface or device controller) sits between the processor and a device and deals with these differences. Its jobs include:

- converting between the signals and data formats of the device and those of the bus;
- **buffering** data, so the processor and a slow device can run at their own speeds;
- holding **status and control information** that the processor can read, for example "device ready" or "error";
- raising an **interrupt** to tell the processor that the device needs attention.

The processor talks to a controller using an address (often called a port), in the same way as it talks to memory. It does not need to know how the device works inside, only how to send commands to its controller.

## Why communication is needed

The processor cannot do useful work alone. It needs instructions and data from memory, a way to store results, and a way to receive input and send output. Components also need to **agree on timing and direction**: otherwise two parts might drive the same wires at once or one part might send data when the other is not ready. Sharing common buses with an address, data and control split solves both problems with relatively few wires. The cost is that, with a shared bus, only one transfer can happen at a time.

## Von Neumann architecture

In **von Neumann architecture**, instructions and data are stored in the **same memory** and travel along the **same buses**. The processor fetches an instruction and then fetches or writes data, one after the other.

**Advantages:** simple, flexible hardware; programs are held as data, so they can be loaded, changed and replaced easily; memory is shared between code and data in whatever proportion a program needs.

**Disadvantages:** the shared bus can limit speed, because an instruction fetch and a data access cannot happen at the same time. This limit is often called the **von Neumann bottleneck**. Also, because code and data share the same memory, a faulty program can overwrite its own instructions.

**Typical use:** general purpose computing systems such as desktop computers, laptops and servers.

## Harvard architecture

In **Harvard architecture**, instructions and data are stored in **separate memories** and travel along **separate buses**. The processor can therefore fetch the next instruction while it is reading or writing data for the current one.

**Advantages:** higher throughput, because instruction and data transfers overlap; the two memories can be different widths, each suited to its purpose; program memory cannot be overwritten by running code.

**Disadvantages:** more complex hardware, with more wires and more memory interfaces; unused instruction memory cannot be given to data, nor the reverse.

**Typical use:** embedded systems, especially digital signal processing (DSP) systems, where fast, predictable repetition of a fixed program matters.

Many modern general purpose processors are a mixture: main memory is shared, but the closest cache memory is split into an instruction cache and a data cache. You do not need this for the specification, but it explains why the two designs are not as far apart in practice as the definitions suggest.

## Comparison table

| Feature | Von Neumann | Harvard |
|---|---|---|
| Memory for instructions and data | One shared memory | Separate memories |
| Buses | One set shared | Separate sets |
| Fetch instruction and access data at once | No | Yes |
| Hardware complexity | Lower | Higher |
| Typical use | General purpose computers | Embedded and DSP systems |

## Common mistakes

- Saying the **address bus carries data**. It carries only addresses.
- Saying all buses are bidirectional. **The address bus is one-way**; the data bus is two-way.
- Confusing address bus width with data bus width. **Address width sets how much memory; data width sets how much per transfer.**
- Writing "faster" as the only reason for Harvard. Say that instruction and data accesses can **overlap** because the memories and buses are separate.
- Describing a bus as a single wire. A bus is a **group of parallel lines**.
- Forgetting to give a **use** when the question says "describe where each is typically used".

## Exam technique

- For **"explain the role of"** questions, give what the component does and which other components it communicates with.
- For **bus** questions, name the bus, state what it carries and state its direction or what its width controls.
- For **compare** questions on architecture, use the same feature for both designs in each point.
- For **calculations**, show the power of two used: 2ⁿ locations for n lines.

## Related resources

- [Internal hardware components revision notes](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes/)
- [Internal hardware components practice questions](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-practice/)
- [Computer organisation and architecture revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-revision-notes/)

*Written against the AQA A-level Computer Science (7517) specification, 4.7.1 Internal hardware components of a computer. Always check the current specification on the AQA website.*
