---
title: "OxfordAQA A-Level Computer Science (9645): The processor and its components"
seoTitle: "OxfordAQA A-Level CS 9645 Processor Components Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "the-processor-and-its-components-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.7.2 in depth: ALU, control unit, clock, general-purpose registers and the PC, CIR, MAR, MBR and status register, with worked traces."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.7.2 The processor and its components** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.7 Computer organisation and architecture (AS). The specification asks you to explain the role and operation of a processor and its major components: the **arithmetic logic unit (ALU)**, the **control unit**, the **clock**, **general-purpose registers**, and the **dedicated registers**, which are the **program counter (PC)**, **current instruction register (CIR)**, **memory address register (MAR)**, **memory buffer register (MBR)** and **status register (SR)**.

For quick recall use the [processor revision notes](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-revision-notes/), and test yourself with the [processor practice questions](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-practice/). The [computer organisation and architecture study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/) covers the whole of topic 3.7. This page looks at each component of the processor in turn, with worked examples of what the registers and the ALU actually hold.

## What a processor is for

A processor repeats one job billions of times a second: take an instruction from memory, work out what it means, and carry it out. To do that it needs somewhere to keep the instruction and its data (registers), a unit to calculate (the ALU), a unit to organise everything (the control unit) and a beat to keep it all in step (the clock). The sections below take each one.

## The arithmetic logic unit (ALU)

The ALU carries out **arithmetic** operations (add, subtract) and **logical** operations (AND, OR, NOT, XOR, shifts). It also performs the **comparison** needed by a conditional branch. It takes its inputs from registers and puts its result back into a register.

**Worked example: an 8-bit addition.** The ALU adds 01101011 and 00110101.

1. 01101011 is 107 and 00110101 is 53.
2. 107 + 53 = 160.
3. 160 in binary is **10100000**, which fits in 8 bits, so there is no overflow.

**Worked example: logical operations on the same values.**

| Operation | Result |
|---|---|
| 01101011 AND 00110101 | 00100001 |
| 01101011 OR 00110101 | 01111111 |
| 01101011 XOR 00110101 | 01011110 |

The ALU does these bit by bit, which is why the logic gates in 3.7.6 matter: the ALU is built from them.

## The control unit

The control unit does not calculate. It **directs** the rest of the processor and the other components:

- it **decodes** the instruction in the CIR to find out what has to happen;
- it sends **control signals** to the ALU, the registers and the buses, for example "read memory" or "add";
- it makes sure each step happens in the right **order**, in time with the clock;
- it responds to **interrupts** (3.7.3).

A good one-line answer is "the control unit decodes instructions and sends signals that coordinate the other parts of the processor".

## The clock

The clock produces a regular stream of pulses. Each step of the processor starts on a pulse, so the clock **synchronises** the components. The **clock speed** is the number of pulses per second, measured in hertz.

| Clock speed | Pulses per second | Time for one cycle |
|---|---|---|
| 2.5 GHz | 2.5 × 10^9 | 0.4 ns |
| 3.2 GHz | 3.2 × 10^9 | 0.3125 ns |
| 4.0 GHz | 4.0 × 10^9 | 0.25 ns |

The time for one cycle is 1 ÷ the frequency. For 2.5 GHz that is 1 ÷ 2.5 × 10^9 = 0.4 × 10^-9 s = 0.4 ns. A higher clock speed lets the processor start more steps each second; section 3.7.4 explains why that is not the only factor in performance.

## General-purpose registers

A **register** is a very small, very fast storage location inside the processor. **General-purpose registers** can hold whatever the program needs: a value just loaded from memory, an intermediate result, a loop counter or an address. The programmer chooses how to use them. In the OxfordAQA assembly language they are called R0 to R12, so `ADD R1, R1, #4` adds 4 to the value held in register 1.

Registers are used because reaching main memory is slow compared with the speed of the processor. Keeping the values you are working with in registers avoids a trip over the buses.

## Dedicated registers

A dedicated (special-purpose) register has one fixed job and is used by the processor itself rather than chosen by the programmer.

| Register | Holds | Used for |
|---|---|---|
| Program counter (PC) | The address of the next instruction to fetch | Keeps track of where the program has reached; usually increases by one instruction after each fetch; a branch changes it |
| Current instruction register (CIR) | The instruction now being decoded and executed | Gives the control unit something to decode |
| Memory address register (MAR) | The address of the memory location about to be read or written | Feeds the address bus |
| Memory buffer register (MBR) | The value just read from memory, or about to be written | Connects to the data bus |
| Status register (SR) | Bits (flags) that record the outcome of earlier operations | Lets a conditional branch test the result of a comparison |

The MAR and MBR are the processor's link to the buses. The processor never puts an address on the address bus directly from the PC; it copies it into the MAR first. Likewise, data passes through the MBR on its way in or out.

### The status register and branching

In the OxfordAQA instruction set a `CMP` instruction compares two values and a later `B<condition>` instruction, such as `BGT`, branches only "if the last comparison met the criterion". The processor needs somewhere to remember the outcome of the comparison between those two instructions. That place is the **status register**. Its individual bits are called flags, for example a flag that records that the result was zero and a flag that records that it was negative.

## Worked example: the registers during a short program

Suppose these three instructions are stored in consecutive locations, and each takes one location (a simplifying assumption). Location 90 holds the value 26.

| Address | Instruction |
|---|---|
| 50 | `LDR R1, 90` |
| 51 | `ADD R1, R1, #4` |
| 52 | `STR R1, 91` |

The table shows the registers after each instruction has been fetched and executed.

| After | PC | MAR | MBR | CIR | R1 |
|---|---|---|---|---|---|
| Fetch of instruction 50 | 51 | 50 | `LDR R1, 90` | `LDR R1, 90` | |
| Execute `LDR R1, 90` | 51 | 90 | 26 | `LDR R1, 90` | 26 |
| Fetch of instruction 51 | 52 | 51 | `ADD R1, R1, #4` | `ADD R1, R1, #4` | 26 |
| Execute `ADD R1, R1, #4` | 52 | 51 | `ADD R1, R1, #4` | `ADD R1, R1, #4` | 30 |
| Fetch of instruction 52 | 53 | 52 | `STR R1, 91` | `STR R1, 91` | 30 |
| Execute `STR R1, 91` | 53 | 91 | 30 | `STR R1, 91` | 30 |

Points to notice:

- The PC increases during the fetch, so it already points at the **next** instruction while the current one is executed.
- The MAR and MBR are used twice for a load: once to fetch the instruction, and again to read the data.
- The `ADD` uses only registers, so the MAR and MBR are not changed during its execute stage.
- After `STR`, location 91 holds 30. The MBR held 30 on its way to memory.

## Worked example: a comparison and a branch

Register R0 holds 7. These two instructions are next in the program.

```
CMP R0, #10
BLT small
```

1. The control unit decodes `CMP R0, #10` and tells the ALU to compare the value in R0 (7) with 10.
2. The ALU performs the comparison. It does not store a new value in R0. Instead the outcome, "7 is less than 10", is recorded in the **status register**.
3. The next instruction is fetched and decoded. `BLT small` means "branch if the last comparison found the first value less than the second".
4. The control unit reads the status register. The condition is met, so it copies the address of the label `small` into the **program counter**.
5. The next fetch therefore starts at `small`, not at the instruction that follows the branch in memory.

If R0 had held 12, the status register would record that 12 is not less than 10. The program counter would simply carry on to the next instruction. This is the only way in which the status register affects the program: it carries a result from one instruction to the next.

## Registers compared with main memory

| Feature | Registers | Main memory |
|---|---|---|
| Position | Inside the processor | Separate, reached over the buses |
| Speed | Fastest storage in the computer | Much slower |
| Number and size | A handful, each one word long | Millions of locations |
| Chosen by | The program (general purpose) or the hardware (dedicated) | Addressed by the program or the operating system |

This is why assembly programs load values into registers, work on them there and store the final results back to memory.

## Exam technique

- **Give the job and the content.** For a register, say what it holds and what it is used for: "the MAR holds the address of the location to be read or written".
- **Do not mix up the MAR and MBR.** MAR is for addresses, MBR is for data (including instructions as they arrive from memory).
- **Say "next".** The PC holds the address of the next instruction to be fetched, not the one being executed.
- **Link the control unit to signals.** "Decodes" alone is not enough; add that it sends control signals.
- **Do not confuse the ALU and control unit.** The ALU calculates; the control unit coordinates.

## Common mistakes

- Saying that the PC holds the current instruction. That is the CIR.
- Saying that the MBR holds addresses.
- Saying the clock speed is the number of instructions per second. It is the number of cycles per second.
- Describing registers as part of main memory. They are inside the processor.
- Saying that the status register stores the result of a calculation. It stores flags that describe the outcome.
- Forgetting that a branch can overwrite the PC with a new address.

## Next steps

- [Processor and its components revision notes](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-revision-notes/)
- [Processor and its components practice questions](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-practice/)
- [The Fetch-Execute cycle and interrupts study guide](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.2 The processor and its components.
