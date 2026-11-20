---
title: "OxfordAQA A-Level Computer Science (9645): The processor and its components -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Processor Components Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.7.2: ALU, control unit, clock, general-purpose and dedicated registers (PC, CIR, MAR, MBR, SR) and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.7.2 The processor and its components** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.7 Computer organisation and architecture). For explanations and worked traces, see the [processor study guide](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components/); then practise with the [processor practice questions](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-practice/).

## What the specification requires

- Explain the **role and operation** of a processor and its major components.
- Components named: **arithmetic logic unit (ALU)**, **control unit**, **clock**, **general-purpose registers**.
- Dedicated registers named: **program counter (PC)**, **current instruction register (CIR)**, **memory address register (MAR)**, **memory buffer register (MBR)** and **status register (SR)**.

## Key terms

| Term | Meaning |
|---|---|
| Register | Very small, very fast storage inside the processor |
| ALU | Performs arithmetic and logical operations, including comparisons |
| Control unit | Decodes instructions and sends control signals to coordinate the processor and the buses |
| Clock | Produces regular pulses that synchronise the steps of the processor |
| Clock speed | Pulses per second, in Hz (1 GHz = 10^9 pulses per second) |
| General-purpose register | A register the programmer can use for any value (R0 to R12 in the OxfordAQA instruction set) |
| Dedicated register | A register with one fixed job used by the processor itself |
| Flag | One bit in the status register recording part of the outcome of an operation |

## The five dedicated registers

| Register | Holds | Linked to |
|---|---|---|
| PC | Address of the **next** instruction to fetch | Copied to the MAR at the start of a fetch; changed by a branch |
| MAR | Address of the location to be read or written | Address bus |
| MBR | Data or instruction just read, or about to be written | Data bus |
| CIR | The instruction being decoded and executed | Control unit |
| SR | Flags describing the outcome of an operation, such as a comparison | Used by conditional branches |

Memory aid for the order in a fetch: **PC to MAR, memory to MBR, MBR to CIR**.

## Component jobs in one line each

- **ALU:** calculates (add, subtract, AND, OR, XOR, NOT, shifts, compare).
- **Control unit:** decodes and directs. It does not calculate.
- **Clock:** keeps everything in step. A higher speed means more cycles per second.
- **General-purpose registers:** hold values being worked on, so the processor avoids slow memory trips.

## Clock arithmetic

Time for one cycle = 1 ÷ frequency.

| Speed | Cycle time |
|---|---|
| 2.5 GHz | 0.4 ns |
| 3.2 GHz | 0.3125 ns |
| 4.0 GHz | 0.25 ns |

Clock speed is cycles per second, **not** instructions per second.

## Worked reminder: a load

Instruction at address 50 is `LDR R1, 90`. Location 90 holds 26.

| Step | PC | MAR | MBR | CIR | R1 |
|---|---|---|---|---|---|
| Fetch | 51 | 50 | `LDR R1, 90` | `LDR R1, 90` | |
| Execute | 51 | 90 | 26 | `LDR R1, 90` | 26 |

The PC already points at address 51 during the execute stage. The MAR and MBR are reused for the data.

## Worked reminder: compare and branch

`CMP R0, #10` followed by `BLT small`, with R0 = 7. The ALU compares 7 with 10 and the outcome ("less than") goes into the **status register**. `BLT` reads the status register; the condition is met, so the address of `small` is copied into the **PC**. If R0 were 12, the PC would simply continue to the next instruction.

## ALU example

01101011 (107) + 00110101 (53) = 10100000 (160), which fits in 8 bits. AND gives 00100001, OR gives 01111111 and XOR gives 01011110.

## How the parts work together

1. The **clock** pulses and each step begins.
2. The **PC** supplies the address of the next instruction, which is copied to the **MAR** and put on the address bus.
3. The instruction arrives in the **MBR** and is copied to the **CIR**. The PC moves on to the next address.
4. The **control unit** decodes the instruction in the CIR and sends control signals.
5. If the instruction is arithmetic or logical, the **ALU** takes its inputs from registers and returns the result to a register.
6. If it is a load or store, the **MAR** and **MBR** are used again for the data.
7. If it is a branch whose condition is met, the new address is copied into the **PC**.

## Registers compared with main memory

| Feature | Registers | Main memory |
|---|---|---|
| Position | Inside the processor | Outside, reached over the buses |
| Speed | The fastest storage in the computer | Much slower than registers |
| Quantity | A handful, each one word long | Very many locations |
| Typical contents | The values being worked on now | Whole programs and their data |

Assembly programs therefore load values into registers, work on them there and store the final results back to memory.

## Which register? Quick decisions

| The question says | Answer |
|---|---|
| "address of the next instruction" | PC |
| "instruction being decoded" | CIR |
| "address about to be used on the address bus" | MAR |
| "data just read from memory" | MBR |
| "outcome of the last comparison" | SR |
| "value being added in a program" | A general-purpose register |

## Exam traps

- **PC holds the next instruction**, not the current one. The CIR holds the current one.
- **MAR is for addresses, MBR is for data.** Instructions pass through the MBR.
- **Control unit versus ALU.** Coordinating is not calculating.
- **Clock speed.** It is a rate of cycles, so it does not by itself tell you instructions per second.
- **Registers are not memory.** They are inside the processor and are the fastest storage there is.
- **Status register.** It stores flags about an outcome. It does not store the result.

## Quick self-test

1. What is the job of the ALU?
2. What does the control unit do?
3. What does the clock do?
4. What does the PC hold?
5. What does the MBR hold?
6. Which register feeds the address bus?
7. Which register holds the instruction being decoded?
8. Why does a conditional branch need the status register?
9. Calculate the cycle time of a 4.0 GHz clock.
10. Give two reasons why programs use registers rather than memory for values being worked on.
11. Which register is changed by an unconditional branch?
12. State how the MAR and MBR are used when `LDR R2, 70` is executed.

### Answers

1. It carries out arithmetic and logical operations, including comparisons.
2. It decodes instructions and sends control signals that coordinate the processor and buses.
3. It produces regular pulses that synchronise the steps of the processor.
4. The address of the next instruction to be fetched.
5. The data or instruction that has just been read from memory, or is about to be written to it.
6. The MAR.
7. The CIR.
8. The comparison is done by one instruction and the branch is a later instruction, so the outcome has to be remembered between them.
9. 1 ÷ 4.0 × 10^9 = 0.25 ns.
10. Registers are much faster to access, and using them avoids transfers over the buses.
11. The PC, which receives the branch address.
12. The MAR is loaded with 70 and the value held in location 70 arrives in the MBR, from where it is copied to R2.

## Next steps

- [Processor and its components study guide](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components/)
- [Processor and its components practice questions](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-practice/)
- [Fetch-Execute cycle and interrupts revision notes](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.2 The processor and its components.
