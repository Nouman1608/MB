---
title: "Cambridge IGCSE Computer Science (0478): Computer architecture -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3.1
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
    subtopic: "computer-architecture-0478"
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 3.1: registers, buses, the FDE cycle, cores, cache, clock and embedded systems."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 3.1, Computer architecture. For the full explanation and a worked register trace, use the [Computer architecture study guide](/resources/cambridge-igcse-computer-science-0478-computer-architecture/).

## What the syllabus lists

- Role of the CPU; what a microprocessor is.
- Purpose of the components of a Von Neumann CPU: ALU and CU; PC, MAR, MDR, CIR and ACC; address, data and control buses.
- The FDE cycle and the role of each component in it.
- Core, cache and clock, and how each affects performance.
- Purpose and use of an instruction set.
- Purpose and characteristics of embedded systems, with devices that use them.

## Key terms

| Term | One-line definition |
|---|---|
| CPU | Processes instructions and data so that a result can be output |
| Microprocessor | An integrated circuit on a single chip that acts as a CPU |
| Von Neumann architecture | Instructions and data share the same memory and buses |
| ALU | Performs arithmetic and logical operations |
| CU | Decodes instructions and sends control signals to manage the cycle |
| PC | Holds the address of the next instruction |
| MAR | Holds the address of the memory location to be read or written |
| MDR | Holds the data or instruction read from, or to be written to, memory |
| CIR | Holds the instruction currently being decoded and executed |
| ACC | Holds the results of ALU calculations |
| Address bus | Carries addresses from CPU to memory; one direction only |
| Data bus | Carries data and instructions both ways between CPU and memory |
| Control bus | Carries control signals (read, write, clock) both ways |
| Instruction set | List of all the machine-code commands a CPU can process |
| Embedded system | A computer system inside a larger device, performing a dedicated function |

## FDE cycle in nine moves

**Fetch**
1. PC → MAR.
2. Address sent on the address bus; read signal on the control bus.
3. Instruction returned on the data bus → MDR.
4. MDR → CIR.
5. PC incremented.

**Decode**
6. CU decodes the instruction in the CIR.

**Execute**
7. Any data address → MAR; data → MDR.
8. ALU performs any calculation; result → ACC.
9. Cycle repeats from step 1.

Memory hook for the fetch order: **P**lease **M**ake **M**ore **C**offee (PC, MAR, MDR, CIR), then **increment**.

## Mini trace to memorise

Program at address 30; address 60 holds 9 and address 61 holds 4.

| Instruction | PC after | MAR after | MDR after | ACC after |
|---|---|---|---|---|
| LOAD 60 | 31 | 60 | 9 | 9 |
| SUBTRACT 61 | 32 | 61 | 4 | 5 |

The ALU works out 9 − 4 = 5 and the result replaces the 9 in the ACC.

## Performance factors

| Factor | Mechanism | Limit |
|---|---|---|
| More cores | Several instructions processed at the same time | Software must be able to split its work; cores must co-ordinate |
| Larger cache | More frequently used data and instructions kept close to the CPU, so fewer slower fetches from RAM | Cache is expensive, so it stays small |
| Faster clock | More FDE cycles per second (for example 3.5 GHz = 3.5 billion cycles per second) | More heat produced |

Always write the mechanism: "a faster clock means more instructions can be fetched and executed per second".

## Instruction set facts

- Every command is a binary machine-code instruction.
- A CPU can only run instructions in its own instruction set.
- Programs in high-level languages must be translated into the CPU's machine code before they are executed.

## Embedded system checklist

- Dedicated function (one job).
- Built into a larger device.
- Fixed program, rarely changed by the user.
- Small, low power, low cost to mass-produce.
- Examples named by the syllabus area: domestic appliances (washing machine, microwave), cars (engine management, airbag control), security systems (alarm panel), lighting systems (timed or sensor-controlled lights), vending machines.
- Not embedded: a PC or laptop, because it is general purpose.

## Exam traps

- **MAR and MDR swapped.** MAR = address; MDR = data or instruction.
- **PC described as holding the instruction.** It holds an address, and it is the next address.
- **No increment.** A fetch description without "PC is incremented" usually drops a mark.
- **Bus directions.** Only the address bus is one-directional.
- **"More cores doubles the speed."** Not always: only if the task can be shared.
- **Cache confused with RAM or secondary storage.** Cache is a small, fast memory on or near the CPU.
- **Embedded system defined as "small".** Size is a characteristic; the defining idea is the dedicated function.

## Self-test

1. What does the CPU do, according to the syllabus?
2. What is a microprocessor?
3. In a Von Neumann computer, where are instructions stored?
4. Which register holds the address of the next instruction?
5. Which register receives the instruction from the data bus?
6. Which bus is one-directional, and why?
7. What happens to the PC during the fetch stage?
8. Which component decodes the instruction?
9. Explain how a larger cache improves performance.
10. A CPU has a clock speed of 2 GHz. How many cycles does it complete per second?
11. What is an instruction set?
12. Give two characteristics of an embedded system.

**Answers**

1. It processes instructions and data that are input so that the result can be output.
2. An integrated circuit on a single chip that acts as the CPU.
3. In main memory (RAM), together with the data.
4. The program counter (PC).
5. The memory data register (MDR).
6. The address bus: only the CPU sends addresses to memory, never the other way.
7. It is incremented so it holds the address of the next instruction.
8. The control unit (CU).
9. More frequently used instructions and data are kept in fast memory close to the CPU, so fewer slower fetches from RAM are needed.
10. 2 billion (2 000 000 000).
11. The list of all the machine-code commands that a CPU can process.
12. Any two: performs a dedicated function; built into a larger device; fixed program; small; low power; cheap to mass-produce.

Then try the [Computer architecture practice questions](/resources/cambridge-igcse-computer-science-0478-computer-architecture-practice/).
