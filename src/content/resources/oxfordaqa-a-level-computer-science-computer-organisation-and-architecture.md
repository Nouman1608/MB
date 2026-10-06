---
title: "OxfordAQA A-Level Computer Science: Computer organisation and architecture (9645)"
seoTitle: "OxfordAQA A-Level CS Computer Architecture Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
description: "Study guide to OxfordAQA International A-level Computer Science topic 7: buses, the processor, Fetch-Execute, storage, logic gates and Boolean algebra."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches topic 7, Computer organisation and architecture, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Its scope is sections 3.7.1 to 3.7.7, every one of them International AS content. The specification places them in the Unit 2 written paper, Concepts and principles of computer science, and they count towards the full International A-level too.

Use the [revision notes](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/). See the [course hub](/boards/oxfordaqa/a-level/computer-science/), the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) and the [free diagnostics](/diagnostics/). Binary for adders is in [representing data](/resources/oxfordaqa-a-level-computer-science-representing-data/).

**Notation.** The specification writes NOT as a bar, AND as ⋅, OR as + and XOR as ⨁. Here a bar over one letter appears as A̅, and a bar over a bracket is written NOT(A + B).

## What this topic covers

| Section | You must be able to |
|---|---|
| 3.7.1 | Describe components and buses; addressable memory; stored program concept; von Neumann versus Harvard |
| 3.7.2 | Explain the ALU, control unit, clock and registers |
| 3.7.3 | Explain the Fetch-Execute cycle; interrupts and ISRs |
| 3.7.4 | Explain factors affecting processor performance |
| 3.7.5 | Explain secondary storage, hard disks, SSDs and cloud storage |
| 3.7.6 | Use logic gates, circuits, adders and the D-type flip-flop |
| 3.7.7 | Simplify with Boolean identities and De Morgan's laws |

## 3.7.1 Internal hardware components

The **processor** fetches, decodes and executes instructions. **Main memory** holds the running program and its data, and the processor reads and writes it directly. An **I/O controller** sits between the processor and a peripheral, handling the electrical detail of that device so the processor does not need to.

Components communicate over **buses**: sets of parallel wires, each carrying one bit.

- **Address bus**: carries the address of the memory location or I/O port to use. One-way, from the processor.
- **Data bus**: carries data or instructions. Two-way, because data is both read and written.
- **Control bus**: carries signals such as memory read, memory write, clock and interrupt request, in both directions.

**Addressable memory.** Each location has a unique address. With n address lines the processor can form 2ⁿ addresses. Questions state the size of each location, so multiply by it.

*Worked example.* An 18-line address bus, with 4 bytes per location: 2¹⁸ = 262,144 addresses; 262,144 × 4 = 1,048,576 bytes; 1,048,576 ÷ 2²⁰ = **1 MiB**.

**Stored program concept.** Machine code instructions stored in main memory are fetched and executed serially by a processor that performs arithmetic and logical operations.

**Von Neumann versus Harvard.** Von Neumann uses one memory, and one set of buses, for both instructions and data. Harvard uses separate memories with separate buses.

- Von Neumann advantage: simpler and cheaper, and memory is shared flexibly, so a large program or a large data set uses whatever space is free. Typical of general-purpose computers.
- Harvard advantage: an instruction and data can be accessed at the same time, removing the shared-bus bottleneck; each memory and bus can be sized to suit its job. Typical of embedded systems and digital signal processors.

## 3.7.2 The processor and its components

- **ALU**: arithmetic, logical operations, comparisons and shifts.
- **Control unit**: decodes instructions and sends control signals that coordinate components and buses.
- **Clock**: regular pulses that synchronise every processor step.
- **General-purpose registers**: fast storage inside the processor for values being worked on.
- **Program counter (PC)**: address of the next instruction.
- **Current instruction register (CIR)**: the instruction being decoded and executed.
- **Memory address register (MAR)**: address of the location about to be read or written.
- **Memory buffer register (MBR)**: data or instruction just read from, or about to be written to, memory.
- **Status register (SR)**: flags recording conditions such as zero, negative, carry and overflow, and whether interrupts are enabled.

## 3.7.3 The Fetch-Execute cycle and interrupts

Square brackets mean "contents of".

**Fetch**
1. MAR ← [PC]. The address goes on the address bus; the control unit sends a memory read signal on the control bus.
2. PC ← [PC] + 1.
3. MBR ← [memory addressed by MAR], over the data bus.
4. CIR ← [MBR].

**Decode.** The control unit splits the instruction in the CIR into opcode and operand(s).

**Execute.** The instruction runs: a load or store (using MAR, MBR and buses again), an ALU operation, or a branch that changes the PC. The SR is updated if needed.

*Worked example.* PC holds 212. Location 212 holds `LDR R3, 87` and location 87 holds 45.

| Step | PC | MAR | MBR | R3 |
|---|---|---|---|---|
| MAR ← [PC] | 212 | 212 | | |
| PC ← [PC] + 1 | 213 | 212 | | |
| MBR ← memory, then CIR ← [MBR] | 213 | 212 | the instruction | |
| Execute: MAR ← 87 | 213 | 87 | | |
| MBR ← memory[87] | 213 | 87 | 45 | |
| R3 ← [MBR] | 213 | 87 | 45 | **45** |

**Interrupts.** An interrupt is a signal that a device or program needs attention, such as a key press. At the end of every cycle the processor looks for a waiting interrupt. If there is one:

1. The current instruction finishes.
2. The **volatile environment** is saved, usually on a stack: the PC, status register, stack pointer and any other registers the ISR might alter.
3. The PC is loaded with the start address of the **interrupt service routine (ISR)**.
4. The ISR runs through normal Fetch-Execute cycles.
5. The saved values are restored and the interrupted program resumes where it stopped.

Saving matters because the ISR uses the same registers; without it, the original program would continue with a wrong PC or wrong values.

## 3.7.4 Factors affecting processor performance

- **Multiple cores**: each core runs its own instructions, so tasks run in parallel. Software that cannot be split gains little.
- **Cache memory**: small, fast memory near the processor holding recently used instructions and data. Each hit avoids slower main memory.
- **Clock speed**: more cycles per second, so more instructions per second. At 2.5 GHz one cycle lasts 1 ÷ (2.5 × 10⁹) s = **0.4 ns**. Heat limits increases.
- **Word length**: bits processed as one unit; a longer word handles larger values per operation.
- **Address bus width**: more lines, more addressable locations, so more memory can be used.
- **Data bus width**: more bits per transfer. Moving 48 bytes (384 bits) takes **24** transfers on a 16-bit bus but **6** on a 64-bit bus.

## 3.7.5 Secondary storage

Main memory is volatile and costly per gigabyte; secondary storage is non-volatile and keeps files when power is off. The processor cannot address it directly; data is copied into main memory first.

**Magnetic hard disk.** Platters coated in magnetic material spin at high speed. Each surface has concentric tracks split into sectors. A read/write head on a moving arm magnetises tiny regions in one of two directions to write bits, and senses those directions to read. Access waits for head movement and rotation.

**Solid-state drive (SSD).** Stores bits as charge trapped in NAND flash cells, with no moving parts. A controller manages pages and blocks. Data is erased a block at a time, and cells survive a limited number of writes, so the controller spreads writes evenly.

| Factor | Hard disk | SSD |
|---|---|---|
| Access speed | Slower | Much faster |
| Cost per gigabyte | Lower | Higher |
| Robustness | Moving parts can be damaged | Resists knocks |
| Power and noise | More power, audible | Less power, silent |

Judge from the scenario. A laptop carried around that must boot fast suits an SSD. An archive of footage that is rarely opened suits large hard disks, where cost per gigabyte matters more than speed.

**Cloud storage** is storage of data on servers at a remote location that is accessed via the Internet. Compared with local storage it gives access from any connected device, easy sharing, provider-managed backup and capacity that grows on demand. Against that: no access without a connection, speed limited by bandwidth, ongoing fees, and data held by a third party, which raises privacy and security concerns.

## 3.7.6 Logic gates

| A | B | NOT A | AND | OR | XOR | NAND | NOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |

Symbols: AND is a D shape; OR has a curved back and pointed front; XOR adds a second curved line at the inputs; NOT is a triangle. A small circle on an output inverts it, making NAND and NOR.

**Circuit to expression.** A and B enter a NOR gate; its output and C enter an AND gate. So X = NOT(A + B)⋅C. Of the 2³ = 8 rows, X is 1 only for A = 0, B = 0, C = 1.

**Expression to circuit.** Follow precedence. For Y = A⋅B̅ + C̅: a NOT gate inverts B, an AND gate combines A with B̅, a second NOT gate inverts C, and an OR gate joins the two. Y is 0 only for A, B, C = 0, 0, 1; 0, 1, 1; and 1, 1, 1.

**Half-adder** (you may be asked to construct it). Inputs A and B feed both an XOR gate, giving sum S = A ⨁ B, and an AND gate, giving carry C = A⋅B. Only 1 + 1 gives a carry: S = 0, C = 1.

**Full-adder** (trace only). Two half-adders and an OR gate: the first XOR gives A ⨁ B, a second XOR combines it with carry-in to give the sum, and carry-out = A⋅B + Cin⋅(A ⨁ B).

*Trace with A = 1, B = 0, Cin = 1.* A ⨁ B = 1. Sum = 1 ⨁ 1 = **0**. A⋅B = 0 and Cin⋅(A ⨁ B) = 1, so carry-out = **1**. Check: 1 + 0 + 1 = 2 = binary 10.

**Edge-triggered D-type flip-flop.** It has a data input D and a clock input. When the clock goes high, the current value of D is stored and output until the clock next goes high. Changes to D between rising edges are ignored, so it holds one bit: a memory unit. If D is 1, 1, 0, 1, 0 at five rising edges, the output after each edge is 1, 1, 0, 1, 0.

## 3.7.7 Boolean algebra

Precedence: NOT, then AND, then OR; brackets override.

Laws: commutative (A + B = B + A; A⋅B = B⋅A), associative (A + (B + C) = (A + B) + C, likewise for AND), and AND distributes over OR: A⋅(B + C) = A⋅B + A⋅C.

Identities: NOT(A̅) = A; A⋅A = A; A + A = A; A⋅A̅ = 0; A + A̅ = 1; A⋅0 = 0; A + 0 = A; A⋅1 = A; A + 1 = 1; A⋅(A + B) = A; A + A⋅B = A; A + A̅⋅B = A + B; A ⨁ B = A⋅B̅ + A̅⋅B.

De Morgan: NOT(A + B) = A̅⋅B̅ and NOT(A⋅B) = A̅ + B̅. Break the bar and change the operator.

*Worked example 1.* X = NOT(A̅⋅B) + B̅. De Morgan gives NOT(A̅) + B̅ + B̅. Double negation and A + A = A give **X = A + B̅**.

*Worked example 2.* X = (A + B̅)⋅(A̅ + B̅). Expand: A⋅A̅ + A⋅B̅ + A̅⋅B̅ + B̅⋅B̅ = 0 + A⋅B̅ + A̅⋅B̅ + B̅. Factor: B̅⋅(A + A̅ + 1) = B̅⋅1, so **X = B̅**.

*Worked example 3.* X = A⋅B + A̅⋅B + A̅⋅C. Factor B: B⋅(A + A̅) = B, so **X = B + A̅⋅C**.

## Common errors

- Calling the address bus two-way.
- Incrementing the PC after execution instead of during fetch.
- Listing only the PC as the volatile environment.
- Applying De Morgan without changing the operator.
- Ignoring precedence: A + B⋅C means A + (B⋅C).

## Next steps

Shorten all this into recall cards using the [revision notes](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-revision-notes/), and after that attempt the [practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/). Also useful: [exam preparation](/resources/oxfordaqa-a-level-computer-science-exam-preparation/) and the [computer systems guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.7 Computer organisation and architecture.
