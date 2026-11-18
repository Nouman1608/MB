---
title: "Cambridge O Level Computer Science (2210): Computer architecture -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3.1
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "computer-architecture-2210"
description: "Revision notes for Cambridge O Level Computer Science 2210 section 3.1: registers, buses, the FDE cycle, CPU performance, instruction sets and embedded systems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 3.1, Computer architecture. For a full step-by-step trace and a model answer on performance, use the [Computer architecture study guide](/resources/cambridge-o-level-computer-science-2210-computer-architecture/).

## Five things to be able to do

1. Say what the CPU does and what a microprocessor is.
2. State the purpose of the ALU, CU, PC, MAR, MDR, CIR, ACC and the three buses.
3. Describe the FDE cycle, naming the component at each step.
4. Explain how cores, cache and clock speed affect performance.
5. Explain what an instruction set and an embedded system are.

## Key terms

| Term | Recall it as |
|---|---|
| CPU | Processes input instructions and data so results can be output |
| Microprocessor | A CPU made as an integrated circuit on a single chip |
| Stored program concept | Instructions and data share main memory (Von Neumann) |
| ALU | Arithmetic and logic: adds, subtracts, compares |
| CU | Decodes instructions; sends control signals |
| PC | Next instruction's address |
| MAR | Address being accessed |
| MDR | Contents read from or written to that address |
| CIR | Instruction being decoded and executed |
| ACC | Result from the ALU |
| Address bus | Addresses, CPU → memory only |
| Data bus | Data and instructions, both ways |
| Control bus | Read, write and clock signals, both ways |
| Core | An independent processing unit within the CPU |
| Cache | Small, fast memory in or beside the CPU for frequently used items |
| Clock speed | Number of pulses per second, in hertz |
| Instruction set | All the machine-code commands a CPU can process |
| Embedded system | Computer inside a larger device with a dedicated function |

## FDE cycle: fetch, decode, execute

**Fetch**
- PC copied to MAR.
- MAR address sent on the address bus; control bus sends read.
- Instruction comes back on the data bus to the MDR.
- MDR copied to CIR.
- PC incremented.

**Decode**
- CU decodes the instruction in the CIR.

**Execute**
- Instruction carried out; any data fetched via MAR and MDR; ALU calculates; result to ACC.

## Register values: a quick drill

PC = 80. Address 80 holds LOAD 95. Address 95 holds 64.

| Register | After fetch | After execute |
|---|---|---|
| PC | 81 | 81 |
| MAR | 80 | 95 |
| MDR | LOAD 95 | 64 |
| CIR | LOAD 95 | LOAD 95 |
| ACC | (unchanged) | 64 |

## Performance: feature, mechanism, effect

| Feature | Mechanism | Effect |
|---|---|---|
| More cores | Separate streams of instructions processed at the same time | Faster when work can be shared, such as several programs running |
| Bigger cache | More frequently used items stored close to the CPU | Fewer slow fetches from RAM |
| Faster clock | More pulses per second, so more FDE cycles | More instructions processed per second |

Clock arithmetic: 1 GHz = 1 billion cycles per second, so 4.2 GHz = 4.2 billion cycles per second.

## Instruction set points

- Machine code commands, each with its own binary code.
- The CU recognises them when decoding.
- Different CPU families have different instruction sets.

## Embedded or general purpose?

| Device | Embedded? | Reason |
|---|---|---|
| Washing machine controller | Yes | Only runs the wash programmes |
| Car engine management system | Yes | Dedicated to controlling the engine |
| Burglar alarm panel | Yes | Dedicated to monitoring sensors and sounding the alarm |
| Street lighting controller | Yes | Only switches lights by time or light level |
| Laptop | No | General purpose; runs many different programs |
| Desktop PC | No | General purpose |

Characteristics: dedicated function; part of a larger device; fixed program; small; low power; cheap to mass-produce.

## Exam traps

- **MAR with data in it.** Addresses only.
- **"PC stores the instruction."** It stores the next address.
- **Fetch without increment.** The PC increment is a marking point.
- **Address bus both ways.** It is one-way.
- **Performance without mechanism.** Always say what happens inside the CPU.
- **"Cache is part of RAM."** Cache is separate, smaller and faster.
- **Embedded defined only as "small"** without the dedicated function.

## Self-test

1. What is meant by the stored program concept?
2. State the purpose of the control unit.
3. State the purpose of the MDR.
4. Which register is incremented during the fetch stage?
5. Which bus carries the read signal to memory?
6. Which two registers hold an address at some point in the fetch stage?
7. In which register is the result of an addition stored?
8. Explain how more cores can improve performance.
9. Explain why a larger cache can improve performance.
10. How many pulses per second does a 1.8 GHz clock produce?
11. Why will machine code for one CPU family not run on another?
12. A microwave oven and a laptop both contain microprocessors. Explain which one is an embedded system.

**Answers**

1. Instructions and data are stored together in the same main memory.
2. To decode instructions and send control signals that manage the FDE cycle.
3. To hold the data or instruction read from, or to be written to, memory.
4. The program counter (PC).
5. The control bus.
6. The PC and the MAR.
7. The accumulator (ACC).
8. Each core processes its own instructions, so several instructions can be processed at the same time when the work can be shared.
9. More frequently used instructions and data can be stored in fast memory near the CPU, so it fetches from slower RAM less often.
10. 1.8 billion (1 800 000 000).
11. Each family has its own instruction set, and machine code uses the commands of one set.
12. The microwave oven: its microprocessor performs a dedicated function (controlling the oven); the laptop is general purpose.
