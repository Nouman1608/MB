---
title: "Cambridge A Level Computer Science (9618): Central Processing Unit (CPU) Architecture -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
    subtopic: "cpu-architecture"
description: "Revision notes for Cambridge 9618 section 4.1: registers, buses, performance, ports, the fetch-execute cycle, interrupts, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 4.1 Central Processing Unit (CPU) Architecture of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. The [CPU architecture study guide](/resources/cambridge-a-level-computer-science-9618-cpu-architecture/) follows an instruction through the processor in detail; the [CPU architecture practice questions](/resources/cambridge-a-level-computer-science-9618-cpu-architecture-practice/) test it.

## Von Neumann in three points

1. One processor executes instructions one after another.
2. Instructions and data share the same main memory, stored in the same binary form.
3. **Stored program concept**: the program is held in memory, and instructions are fetched and executed in sequence.

## Key terms

| Term | Meaning |
|---|---|
| ALU | Performs arithmetic and logic operations |
| Control Unit | Decodes instructions; sends control signals to coordinate components |
| System clock | Produces timing pulses that synchronise operations |
| Immediate Access Store | Main memory holding programs and data in use, directly accessible by the processor |
| Register | Small, very fast storage location inside the processor |
| General purpose register | Holds any data; in 9618 questions, the Accumulator |
| Special purpose register | Has one fixed role, such as PC or MAR |
| Interrupt | A signal telling the processor that something needs attention |
| ISR | Interrupt Service Routine: the code that deals with a particular interrupt |
| Port | A connection point for a peripheral device |

## Registers

| Register | Holds |
|---|---|
| PC | Address of the **next** instruction |
| MAR | Address about to be accessed in memory |
| MDR | Data or instruction just read from, or about to be written to, memory |
| CIR | Instruction currently being decoded and executed |
| ACC | Data being processed and ALU results |
| IX | Value added to an address in indexed addressing |
| Status Register | Flags: carry, overflow, negative, zero, interrupt |

## Buses

| Bus | Carries | Direction |
|---|---|---|
| Address | Addresses | Unidirectional (processor → memory) |
| Data | Data and instructions | Bidirectional |
| Control | Signals: read, write, clock, interrupt request | Bidirectional |

- Address bus of n lines → 2ⁿ addressable locations. 20 lines → 1,048,576 locations.
- Wider data bus → more bits per transfer.

## Fetch-execute cycle in register transfer notation

```
MAR ← [PC]
PC ← [PC] + 1
MDR ← [[MAR]]
CIR ← [MDR]
```

Then the CU decodes the instruction in the CIR and it is executed. At the end of the cycle the processor checks for interrupts.

**Meaning of the notation:** ← means "receives"; [X] means "contents of X"; [[MAR]] means "contents of the memory location whose address is in MAR".

## Performance factors

| Factor | Effect |
|---|---|
| More cores | Several instructions or threads processed at the same time, if software supports it |
| Wider data bus | More data per transfer |
| Wider address bus | More memory can be addressed |
| Higher clock speed | More cycles, so more instructions, per second; more heat |
| More cache | More frequently used data and instructions held close to the processor; fewer slow memory accesses |

## Ports

| Port | Carries | Typical use |
|---|---|---|
| USB | Data and power; plug and play; hot-swappable | Keyboards, mice, flash drives, printers, phones |
| HDMI | Digital high-definition video and audio | Monitors, televisions, projectors |
| VGA | Analogue video only | Older monitors and projectors |

## Interrupt handling in order

1. Processor checks for interrupts at the end of each F-E cycle.
2. Compare priority with current task; lower priority waits.
3. Save the PC and other registers (on a stack).
4. Load the ISR's start address into the PC.
5. Execute the ISR.
6. Restore the saved registers.
7. Resume the interrupted program.

**Causes:** hardware (key press, printer out of paper, I/O finished), software (division by zero, request for OS service), timer (time slice over), hardware failure.

## Exam traps

- PC holds an **address**, not an instruction.
- MDR ← [[MAR]], with double brackets.
- PC is incremented in the fetch stage.
- The address bus is one-way.
- Interrupts are checked at the end of the cycle, not part-way through an instruction.
- More cores do not guarantee proportionally faster performance.
- VGA is analogue; HDMI is digital and carries sound.

## Self-test

1. State the stored program concept.
2. Which register holds the address of the next instruction?
3. What is the difference between the MAR and the MDR?
4. Write the register transfer step that loads the CIR.
5. Why is the address bus one-way?
6. How many locations can a 24-bit address bus address?
7. Give **one** reason why increasing the clock speed may not increase performance as much as expected.
8. Why does cache memory improve performance?
9. State **one** difference between HDMI and VGA.
10. When does the processor check for interrupts?
11. Why are register contents saved before an ISR runs?
12. Name **two** flags held in the Status Register.

### Answers

1. Programs are stored in main memory alongside data, and their instructions are fetched and executed one at a time in sequence.
2. The **Program Counter (PC)**.
3. The MAR holds the **address** of the location to be accessed; the MDR holds the **data or instruction** read from or written to that location.
4. **CIR ← [MDR]**.
5. Addresses are only ever sent from the processor to memory or I/O devices.
6. 2²⁴ = **16,777,216** locations.
7. Any one: other components such as memory or buses may be slower bottlenecks; the processor may overheat and slow itself down.
8. Frequently used instructions and data are held in fast memory close to the processor, so fewer slower accesses to main memory are needed.
9. HDMI carries digital video and audio; VGA carries analogue video only.
10. At the **end of each fetch-execute cycle**.
11. So that the interrupted program can be resumed exactly where it stopped once the ISR finishes.
12. Any two: carry, overflow, negative, zero, interrupt.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 4.1 Central Processing Unit (CPU) Architecture. Published by Cambridge International.
