---
title: "OxfordAQA A-Level Computer Science (9645): Internal hardware components of a computer -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Internal Hardware Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.7.1: components, the three buses, addressable memory sums, stored program concept, von Neumann versus Harvard."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.7.1 Internal hardware components of a computer** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.7 Computer organisation and architecture). For explanations and worked examples, see the [internal hardware study guide](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer/); then practise with the [internal hardware practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer-practice/).

## What the specification requires

- Know the basic internal components and how they relate: **processor, main memory, address bus, data bus, control bus, I/O controllers**.
- Understand the **need for communication** between components, and the concept of a **bus** (address, data and control).
- Understand **addressable memory**. Exam questions state the size of each location.
- Describe the **stored program concept**.
- Explain the difference between **von Neumann** and **Harvard** architectures and the advantages of each.

## Key terms

| Term | Meaning |
|---|---|
| Processor | Fetches, decodes and executes instructions |
| Main memory | Numbered locations holding the programs and data in use; volatile |
| Address | The number that identifies one memory location |
| Bus | A set of parallel lines shared between components; width = number of lines |
| Address bus | One-way; carries the address from the processor |
| Data bus | Two-way; carries the data being read or written |
| Control bus | Carries signals such as read, write, clock and interrupt request |
| I/O controller | Hardware between a peripheral and the buses; manages the device and holds data until it is ready |
| Stored program concept | Machine code instructions held in main memory are fetched and executed serially |
| Word | The unit of data a processor handles in one go; its length is the word length |

## Who does what

| Task | Component and bus |
|---|---|
| Choose the location to use | Processor puts the address on the **address bus** |
| Say read or write | Processor sends a signal on the **control bus** |
| Move the value | Value travels on the **data bus** (towards the processor for a read, away for a write) |
| Talk to a keyboard, screen or drive | Through that device's **I/O controller** |
| Ask the processor for attention | Device sets an interrupt request on the **control bus** |

## Memory sum method

1. Locations = 2 to the power of the **number of address lines**.
2. Total memory = locations × **size of each location**.
3. Convert units last: 1 KiB = 1 024 bytes, 1 MiB = 1 048 576 bytes.
4. To find lines from a memory size: divide the size by the location size, then take log base 2.

| Address lines | Location size | Locations | Total |
|---|---|---|---|
| 16 | 1 byte | 65 536 | 64 KiB |
| 12 | 2 bytes | 4 096 | 8 KiB |
| 10 | 4 bytes | 1 024 | 4 KiB |
| 20 | 1 byte | 1 048 576 | 1 MiB |
| 24 | 2 bytes | 16 777 216 | 32 MiB |

One extra address line **doubles** the locations. A wider data bus moves more bits per transfer but does **not** add locations. A 64-bit item on a 16-bit data bus needs 4 transfers.

## Worked reminder: a read and a write

*Read the value at address 5 120.* The processor places 5 120 on the address bus. It sends a memory read signal on the control bus. Memory puts the contents of location 5 120 on the data bus. The processor takes the value from the data bus.

*Write 42 to address 5 121.* The processor places 5 121 on the address bus and 42 on the data bus. It sends a memory write signal on the control bus. Memory stores 42 in location 5 121.

The only differences are the signal on the control bus and the direction in which the data travels. The address always comes from the processor.

## Why each component is needed

- **Processor:** without it nothing executes. It controls the buses and decides every read and write.
- **Main memory:** the processor can only work quickly on what is held here, so programs and data are copied in before they run.
- **Buses:** without shared lines the components could not exchange addresses, data or signals. A narrow bus limits how much moves at once.
- **I/O controllers:** devices differ in speed and signal type. The controller hides those differences and holds data until the device or processor is ready.

## Stored program concept

- Instructions are binary patterns stored in the **same main memory** as data.
- The processor fetches and executes them **one after another** (serially), unless a branch changes the order.
- To run a new program, load new contents into memory. The hardware stays the same.

## Von Neumann and Harvard

| Feature | Von Neumann | Harvard |
|---|---|---|
| Memories | One, for instructions and data | Two: one for instructions, one for data |
| Buses | One shared set | Separate sets |
| Instruction fetch and data access | One at a time | Can overlap |
| Advantage | Simpler and cheaper; flexible use of memory space | Faster; widths can differ; instructions can be protected |
| Disadvantage | Shared bus is a bottleneck | More complex and costly; space cannot be shared |

## Exam traps

- **Wrong direction.** The address bus is one-way. The data bus is two-way.
- **Wrong effect.** Address bus width sets how many locations exist. Data bus width sets how much moves at once.
- **Unit slip.** Multiply by the location size before converting to KiB or MiB.
- **"The bus" with no name.** Always say address, data or control.
- **Memory versus storage.** The stored program concept refers to main memory, not the disk.
- **Vague comparison.** Say "one memory" against "two memories", not just "different".

## Quick self-test

1. Name the six components or buses listed in 3.7.1.
2. Which bus is one-way?
3. What does the control bus carry?
4. A processor has 14 address lines and 2-byte locations. How much memory can it address?
5. How many address lines are needed for 64 KiB with 2-byte locations?
6. State what happens to the number of locations when one address line is added.
7. How many transfers move a 96-bit block over a 32-bit data bus?
8. State the stored program concept.
9. Give one advantage of Harvard architecture.
10. Give one advantage of von Neumann architecture.
11. What does an I/O controller do?
12. Why is main memory called volatile?

### Answers

1. Processor, main memory, address bus, data bus, control bus, I/O controllers.
2. The address bus.
3. Signals such as read, write, clock and interrupt requests.
4. 2^14 = 16 384 locations × 2 bytes = 32 768 bytes = 32 KiB.
5. 65 536 ÷ 2 = 32 768 locations = 2^15, so 15 lines.
6. It doubles.
7. 96 ÷ 32 = 3 transfers.
8. Machine code instructions are stored in main memory and fetched and executed serially by the processor.
9. It can fetch an instruction and access data at the same time, so it is faster (or instructions can be protected, or word widths can differ).
10. It is simpler and cheaper, with one memory and one set of buses (or memory space is shared flexibly).
11. It manages the exchange of data between a peripheral and the processor or memory, translating signals and holding data until ready.
12. Its contents are lost when the power is removed.

## More on this topic

- [Internal hardware components study guide](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer/)
- [Internal hardware components practice questions](/resources/oxfordaqa-a-level-computer-science-9645-internal-hardware-components-computer-practice/)
- [The processor and its components revision notes](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.1 Internal hardware components of a computer.
