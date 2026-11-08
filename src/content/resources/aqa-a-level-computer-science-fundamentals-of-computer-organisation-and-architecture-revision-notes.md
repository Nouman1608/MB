---
title: "AQA A-Level Computer Science: Computer Organisation and Architecture — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7: Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
description: "Recall notes on buses, Von Neumann and Harvard, registers, the fetch-execute cycle, addressing, assembly, interrupts and storage for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Fundamentals of computer organisation and architecture (section 4.7 of AQA A-Level Computer Science 7517)
explains how the processor, memory and buses work together to run a stored program, how machine code
instructions are built and executed, and how input, output and storage devices work. Paper 2 tests it with
register-by-register descriptions of the fetch-execute cycle, short assembly language programs and
comparisons of devices.

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of computer organisation and architecture study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study-guide/).
Practise with the [computer organisation and architecture practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.7, assessed on Paper 2:

- **4.7.1** Internal hardware components -- processor, main memory, address/data/control buses, I/O
  controllers, Von Neumann and Harvard architectures, addressable memory
- **4.7.2** The stored program concept
- **4.7.3** Structure and role of the processor -- components, Fetch-Execute cycle, instruction set,
  addressing modes, machine-code/assembly operations, interrupts, factors affecting performance
- **4.7.4** External hardware devices -- barcode reader, digital camera, laser printer, RFID; hard disk,
  optical disk, SSD

## Components and buses

| Component | Role |
|---|---|
| **Processor** | Fetches and executes instructions; performs arithmetic and logical operations |
| **Main memory** | Holds the instructions and data currently in use; each location has a unique **address** |
| **Address bus** | Carries the address of the memory location or I/O port being accessed; **one-way** from processor |
| **Data bus** | Carries data and instructions between processor, memory and I/O; **two-way** |
| **Control bus** | Carries control signals, e.g. memory read, memory write, clock, interrupt request |
| **I/O controller** | Interface between the processor and a peripheral device, translating signals |

- **Von Neumann**: one memory and one set of buses for both instructions and data. Used in
  **general-purpose computers**.
- **Harvard**: separate memories and buses for instructions and data, so both can be fetched at once.
  Used extensively in **embedded systems** such as digital signal processing (DSP) systems.

**Stored program concept** (specification wording): machine code instructions stored in main memory are
**fetched and executed serially** by a processor that performs arithmetic and logical operations.

## Registers and the fetch-execute cycle

| Register | Holds |
|---|---|
| **PC** (program counter) | Address of the **next** instruction |
| **CIR** (current instruction register) | The instruction being decoded and executed |
| **MAR** (memory address register) | Address of the location to be read or written |
| **MBR** (memory buffer register) | Data or instruction just read from, or about to be written to, memory |
| **Status register** | Flags about the last result, e.g. zero, negative, carry, overflow; interrupt flags |
| **General-purpose registers** | Temporary values used by instructions |

The **ALU** does arithmetic and logic; the **control unit** decodes instructions and sends control signals;
the **clock** produces pulses that synchronise operations.

```
FETCH    MAR ← [PC]               address copied via the address bus
         PC ← [PC] + 1            PC now points to the next instruction
         MBR ← [Memory]addressed  instruction arrives on the data bus (memory read signal)
         CIR ← [MBR]
DECODE   Control unit splits the instruction into opcode and operand and decodes the opcode
EXECUTE  The instruction is carried out (may read/write memory via MAR and MBR,
         or change the PC for a branch)
```

## Instructions and addressing modes

- An **instruction set** is the set of instructions a processor understands; it is **processor specific**.
- Instruction = **opcode** (the operation, and in AQA's model also the addressing mode) + **operand(s)**
  (a value, memory address or register).
- Example from the specification: 8-bit instruction = 4-bit opcode + 4-bit operand -> 2⁴ = **16 opcodes**.
- **Immediate addressing**: the operand **is** the datum (`#5` means the value 5).
- **Direct addressing**: the operand is the **address of** the datum (a memory location or register).

## Assembly language

Operations you must apply: load, add, subtract, store, branch (conditional and unconditional), compare,
logical bitwise AND, OR, NOT, XOR, logical shift left and right, and halt. Exam papers supply the AQA
instruction set table (mnemonics such as `LDR`, `STR`, `ADD`, `SUB`, `MOV`, `CMP`, `B`, `BEQ`, `BNE`,
`BGT`, `BLT`, `AND`, `ORR`, `EOR`, `MVN`, `LSL`, `LSR`, `HALT`), so read the table given in the question.

### Worked example

Add the values in memory locations 100 and 101; store the larger of the sum and 50 in location 102.

```
      LDR R0, 100        ; R0 ← value at address 100 (direct)
      LDR R1, 101
      ADD R0, R0, R1     ; R0 ← R0 + R1
      CMP R0, #50        ; compare with the value 50 (immediate)
      BGT store          ; if R0 > 50 skip the next line
      MOV R0, #50
store: STR R0, 102
      HALT
```

**Shifts:** a logical shift left by 1 multiplies an unsigned value by 2; a logical shift right by 1
divides by 2 (discarding the remainder).

## Interrupts

An **interrupt** is a signal to the processor that a device or program needs attention. The processor
checks for interrupts **at the end of each fetch-execute cycle**. If one is waiting (and has high enough
priority), it **saves the volatile environment** -- the PC, status register and other registers -- on a
stack, then loads the address of the **interrupt service routine (ISR)** into the PC. After the ISR, the
saved values are restored and the original program continues exactly where it left off.

## What affects processor performance?

| Factor | Effect |
|---|---|
| **Multiple cores** | Several instructions processed in parallel -- if the software can be split into parallel tasks |
| **Cache memory** | Fast memory near the processor holds frequently used data and instructions, reducing slow main memory accesses |
| **Clock speed** | More cycles per second, so more instructions executed per second |
| **Word length** | More bits processed in one operation |
| **Address bus width** | More addressable memory locations (n lines -> 2ⁿ addresses) |
| **Data bus width** | More bits transferred per memory access |

## External devices and secondary storage

- **Barcode reader**: light reflected from the black and white bars is detected and converted to a digital
  code. **Digital camera**: a sensor of light-sensitive cells converts light to an electrical charge per pixel,
  then to binary via an ADC. **Laser printer**: a laser draws the page as an electrostatic charge on a drum;
  toner sticks to the charged areas, is transferred to paper and fused by heat. **RFID**: a reader's radio
  waves power a passive tag, which transmits its stored data back.
- **Secondary storage** is needed because main memory (RAM) is **volatile** and smaller.
- **Hard disk**: magnetised platters spun under moving read/write heads -- high capacity, low cost per GB.
  **Optical disk**: a laser reads pits and lands on a spinning disc -- cheap, portable, low capacity.
  **SSD**: NAND flash memory plus a controller; floating gate transistors trap charge; a page cannot be
  overwritten -- the whole **block** must be erased first. **Lower latency and faster transfer** than a
  magnetic disk.

## Common mistakes / exam traps

- Saying the PC holds the **current** instruction -- it holds the address of the **next** one.
- Copying the PC to the MBR in the fetch stage instead of to the MAR.
- Confusing immediate (`#7` = the number 7) with direct (`7` = the contents of location 7).
- Claiming more cores always double speed; it depends on whether the task can run in parallel.
- Forgetting to mention saving the volatile environment when describing interrupt handling.

## Frequently asked questions

**Why does the PC increment during the fetch stage?**
So it already holds the address of the next instruction. A branch instruction executed later can then
overwrite it with a new address.

**Where is Harvard architecture used?**
In embedded systems such as digital signal processors, where fetching instructions and data at the same time
increases speed. General-purpose computers use Von Neumann architecture.

**Will I need to memorise AQA's assembly language instructions?**
The exam provides the instruction set table. You need to be able to use the operations -- load, store,
arithmetic, compare, branch, logic and shifts -- with immediate and direct addressing.

## Related resources

[Computer organisation and architecture study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study-guide/) |
[Computer organisation and architecture practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-practice/) |
[Fundamentals of computer systems revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.7 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
