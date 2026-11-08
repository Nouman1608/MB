---
title: "OxfordAQA IGCSE Computer Science: Computer Systems — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
description: "Recall notes on NOT, AND and OR logic, software types, Von Neumann architecture, the fetch-execute cycle, memory and storage for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Computer systems (topic 3.4 of OxfordAQA International GCSE Computer Science 9210) covers hardware and software,
Boolean logic with NOT, AND and OR gates, system and application software, and the systems architecture -- the
CPU, the fetch-execute cycle, main memory and secondary storage, cloud storage and embedded systems. It is
assessed on Paper 2 with definitions, truth tables, logic circuits and "compare and recommend" questions.

Condensed for the final weeks. For the full explanation, use the
[Computer systems study guide](/resources/oxfordaqa-igcse-computer-science-computer-systems-study-guide/).
Practise with the [Computer systems practice questions](/resources/oxfordaqa-igcse-computer-science-computer-systems-practice/).

## Syllabus coverage

OxfordAQA 9210 specification (Version 3.4), section 3.4:

- **3.4.1** Hardware and software -- definitions and the relationship between them
- **3.4.2** Boolean logic -- NOT, AND, OR truth tables; circuits with up to three inputs; Boolean expressions
- **3.4.3** Software classification -- system and application software; operating systems and utilities
- **3.4.4** Systems architecture -- Von Neumann architecture; main memory, ALU, control unit, clock, buses;
  performance; fetch-execute cycle; RAM and ROM; secondary storage; cloud storage; embedded systems

NAND, NOR and XOR are **not** required for 9210.

## Hardware and software

- **Hardware**: the physical components of a computer system.
- **Software**: the programs that run on the hardware and tell it what to do.
- They depend on each other: hardware needs software to do anything useful, and software needs hardware to run on.

## Boolean logic

Notation used in 9210: **NOT A** is written as A with a bar over it (Ā), **A AND B** as **A · B**,
**A OR B** as **A + B**.

| A | B | NOT A | A · B | A + B |
|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |

### Worked example: a three-input circuit

Q = (A · B) + C̄ -- A and B go into an AND gate; C goes into a NOT gate; both outputs go into an OR gate.

| A | B | C | A · B | C̄ | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

Three inputs give 2³ = **8 rows**. Add a column for each intermediate gate output -- it prevents errors.

## System and application software

| Type | Purpose | Examples |
|---|---|---|
| **System software** | Manages the computer's resources and acts as a platform to run application software | Operating system, utility programs |
| **Application software** | Performs end-user tasks | Word processor, web browser, game |
| **Utility programs** | Maintenance tasks that keep the computer working well | Antivirus, backup, disk defragmenter, compression |

The **operating system** manages the **processor(s)**, **memory**, **I/O devices**, **applications** and
**security** (for example user accounts and access permissions).

## Von Neumann architecture and the CPU

In the **Von Neumann architecture**, program instructions and data are both stored in the same **main memory**,
and the CPU fetches and executes the instructions one at a time.

| Component | Role |
|---|---|
| **ALU** (arithmetic logic unit) | Carries out arithmetic (e.g. addition) and logical operations (e.g. comparisons) |
| **Control unit** | Decodes instructions and sends control signals to coordinate the other components |
| **Clock** | Sends regular electrical pulses that keep the CPU's components working in step |
| **Buses** | Collections of wires that carry data, addresses and control signals between components |
| **Main memory** | Memory directly accessible by the CPU (except cache and registers) holding running programs and data |

**Fetch-execute cycle:** **fetch** -- the next instruction is fetched to the CPU from main memory; **decode** --
the instruction is decoded to work out what it is; **execute** -- the instruction is carried out, which may
include reading from or writing to main memory. This repeats continually.

**CPU performance:**

| Factor | Effect |
|---|---|
| **Clock speed** | Higher speed -> more fetch-execute cycles per second |
| **Number of cores** | More cores -> more instructions processed at the same time (if the task can be split) |
| **Cache size** | Larger cache -> more frequently used data and instructions held in very fast memory, so fewer slow trips to main memory |

## Memory and storage

- **Volatile** memory loses its contents when the power is off; **non-volatile** memory keeps them.
- **RAM**: volatile, read and write, holds the programs and data currently in use. **ROM**: non-volatile,
  read-only, holds the start-up (boot) instructions.
- **Secondary storage** is any non-volatile storage not directly accessible by the CPU. It is needed because
  RAM is volatile and too small to hold all programs and files permanently.

| Type | How it works | Strengths | Weaknesses |
|---|---|---|---|
| **Magnetic** (hard disk) | Read/write heads magnetise areas of spinning platters | High capacity, low cost per GB | Moving parts can be damaged; slower than SSD |
| **Solid state** (SSD, USB stick) | Electrical circuits store data persistently, with no moving parts | Fast access, robust, low power, silent | Higher cost per GB |
| **Optical** (CD, DVD, Blu-ray) | A laser reads pits and lands on the disc's surface | Cheap, portable | Low capacity, slow, scratches easily |

- **Cloud storage**: files stored on remote servers (using magnetic and increasingly solid state storage) and
  accessed over the Internet. *Advantages:* access from anywhere, no local hardware to buy, provider handles
  backups, easy sharing. *Disadvantages:* needs an Internet connection, ongoing fees, less control over security
  and privacy of data.
- **Embedded system**: a computer built into a larger device to perform one dedicated function, e.g. a washing
  machine controller, a car's engine management unit. A **non-embedded** system, such as a laptop, is
  general-purpose and runs many different programs.

## Common mistakes / exam traps

- Drawing NAND, NOR or XOR gates -- use only NOT, AND and OR.
- Missing rows in a three-input truth table: there must be 8.
- Describing ROM as "memory you cannot change" without saying it is non-volatile and holds start-up instructions.
- Saying more cores always make a program faster -- only if it can be split into parallel tasks.
- Calling cache "secondary storage" -- cache is very fast memory inside or near the CPU.
- Recommending a storage type without linking it to the scenario (capacity, speed, portability, durability, cost).

## Frequently asked questions

**What is the difference between main memory and secondary storage?**
Main memory (RAM) is directly accessed by the CPU and holds what is currently running; most of it is volatile.
Secondary storage is non-volatile, is not directly accessed by the CPU and keeps files permanently.

**Why does a larger cache improve performance?**
Cache is much faster than main memory. A larger cache holds more of the instructions and data the CPU uses often,
so it waits less often for main memory.

**Give an example of an embedded system.**
A microwave oven's controller is an embedded system: a small computer that performs one dedicated job inside a
larger device.

## Related resources

[Computer systems study guide](/resources/oxfordaqa-igcse-computer-science-computer-systems-study-guide/) |
[Computer systems practice questions](/resources/oxfordaqa-igcse-computer-science-computer-systems-practice/) |
[Data representation revision notes](/resources/oxfordaqa-igcse-computer-science-data-representation-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.4 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
