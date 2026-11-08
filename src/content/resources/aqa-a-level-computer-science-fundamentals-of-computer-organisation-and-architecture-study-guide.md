---
title: "AQA A Level Computer Science (7517): Fundamentals of computer organisation and architecture -- Study Guide"
resourceType: "study-guides"
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
description: "The stored-program concept, processor components, the fetch-decode-execute cycle, performance factors, assembly language and external devices for AQA A Level Computer Science."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

This topic looks inside the processor and explains how it runs a program one instruction at a time. You need to know the role of each component, trace the registers through a fetch-decode-execute cycle, explain what makes one processor faster than another, and read and write short programs in assembly language. It also covers the external devices that connect to the processor.

## Where this fits in the specification

This is section 4.7 of AQA 7517 and is assessed on Paper 2. It follows on from the logic gates in [Fundamentals of computer systems](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/): the registers, ALU and control unit are all built from those gates. Treat the instruction set as something to practise by tracing.

## The stored-program concept

In a **stored-program** computer, instructions and data are held in the same main memory as binary patterns, and the processor fetches instructions from memory in sequence. The **Von Neumann architecture** uses a single memory and a single set of buses for both instructions and data, which is simple and flexible but creates a bottleneck because instructions and data cannot be transferred at the same time. The **Harvard architecture** uses separate memories and buses for instructions and data so that both can be accessed at once. It is common in embedded systems and digital signal processors. A modern processor often uses a Von Neumann design externally but separates instruction and data caches internally, as in a Harvard design.

## Processor components

- **Arithmetic logic unit (ALU)**: performs arithmetic, logical operations and shifts.
- **Control unit (CU)**: decodes instructions and sends control signals to coordinate the other components.
- **Clock**: generates regular pulses that synchronise operations; its frequency is the clock speed.
- **Registers**: very fast storage inside the processor.
  - **Program counter (PC)** holds the address of the next instruction.
  - **Memory address register (MAR)** holds the address being read or written.
  - **Memory data register (MDR)** holds data just read from, or about to be written to, memory.
  - **Current instruction register (CIR)** holds the instruction being decoded and executed.
  - **Accumulator and general-purpose registers** hold values being processed.
  - **Status register** holds flag bits such as zero, negative, carry and overflow, set by operations and tested by branches.
- **Buses**: the **address bus** carries addresses one way, from the processor; the **data bus** carries data both ways; the **control bus** carries signals such as read, write and the clock.

The width of the address bus decides how many locations can be addressed: n lines give 2^n addresses, so a 32-bit address bus can address 2^32 locations. The width of the data bus decides how much data moves in one transfer.

## The fetch-decode-execute cycle

**Fetch**: the contents of the PC are copied to the MAR; the PC is incremented; the instruction at that address is read into the MDR and copied to the CIR. **Decode**: the control unit decodes the opcode in the CIR and identifies the operand. **Execute**: the operation is carried out, which may use the ALU, read or write memory, or alter the PC (for a branch). Then the cycle repeats. An **interrupt** is checked at the end of each cycle; if one is pending, the processor saves its state and runs an interrupt service routine.

## Factors affecting performance

- **Clock speed**: more cycles per second, so more instructions in a given time, though heat limits it.
- **Number of cores**: separate cores can run different tasks or threads at once, but only if the software is written to use them.
- **Cache memory**: small, fast memory that holds recently used instructions and data. A larger or better-organised cache means fewer slow accesses to main memory.
- **Word length** and **bus widths**: a wider data bus moves more per transfer and a wider address bus allows more memory.
- **Pipelining** overlaps the stages of consecutive instructions, so the processor is fetching one while decoding another. A branch can invalidate the pipeline, which costs time.

Do not claim that doubling the clock speed doubles performance: memory speed, cache misses and software also matter.

## Assembly language

Assembly language uses mnemonics that match machine-code instructions one for one. In the AQA instruction set, `Rd` is a destination register and `<operand2>` is either `#n` (an immediate value) or a register `Rm`.

| Instruction | Meaning |
|---|---|
| `LDR Rd, <memory ref>` | load the value at that address into Rd |
| `STR Rd, <memory ref>` | store Rd into memory |
| `ADD Rd, Rn, <operand2>` | Rd = Rn + operand2 |
| `SUB Rd, Rn, <operand2>` | Rd = Rn - operand2 |
| `MOV Rd, <operand2>` | copy a value into Rd |
| `CMP Rn, <operand2>` | compare and set status flags |
| `B <label>` | branch always |
| `BEQ`, `BNE`, `BGT`, `BLT` `<label>` | branch if equal, not equal, greater than, less than |
| `AND`, `ORR`, `EOR`, `MVN` | bitwise AND, OR, XOR, NOT |
| `LSL`, `LSR` | logical shift left, right |
| `HALT` | stop |

**Immediate addressing** uses the operand value itself (`#5`); **direct addressing** uses the operand as the address of the data. An **opcode** is the operation part of an instruction and the **operand** says what to operate on. Labels stand for addresses, so the programmer does not count line numbers.

## Worked example: multiplying by repeated addition

Memory location 100 holds 7 and 101 holds 4. The program leaves 7 x 4 in location 102.

```
      LDR R0, 100
      LDR R1, 101
      MOV R2, #0
loop: CMP R1, #0
      BEQ end
      ADD R2, R2, R0
      SUB R1, R1, #1
      B loop
end:  STR R2, 102
      HALT
```

R0 is the number to add (7), R1 counts remaining additions and R2 is the running total. Trace of R1 and R2 at the top of each loop:

| Pass | R1 (count) | R2 (total) | Action |
|---|---|---|---|
| 1 | 4 | 0 | not zero, so R2 = 7, R1 = 3 |
| 2 | 3 | 7 | R2 = 14, R1 = 2 |
| 3 | 2 | 14 | R2 = 21, R1 = 1 |
| 4 | 1 | 21 | R2 = 28, R1 = 0 |
| 5 | 0 | 28 | CMP sets equal, BEQ branches to end |

The program stores 28 in location 102 and halts. In all, 27 instructions are executed: 3 before the loop, 5 per pass for 4 passes (CMP, BEQ, ADD, SUB, B), 2 on the final test, then STR and HALT. If R1 started at 0 the result would be 0, which is correct.

## External hardware

You should be able to describe how input, output and storage devices work and when each suits a task.

- **Barcode reader**: a laser or camera reads the pattern of bars and sends the number to the computer, which looks up the product.
- **Digital camera**: a sensor of light-sensitive cells makes a bitmap from the light that reaches it.
- **RFID**: a tag with a chip and antenna responds to a reader's radio signal, so tags can be read without line of sight.
- **Laser printer**: a drum is charged and exposed to a laser, toner sticks to the charged areas and is fused onto paper.
- **Magnetic hard disk**: data held as magnetised regions on spinning platters, giving high capacity at low cost per bit but with moving parts.
- **Optical disc**: pits and lands read by a laser, suited to cheap distribution.
- **Solid-state drive (flash)**: no moving parts, fast access and robust, but higher cost per gigabyte and limited write cycles per cell.

## Common mistakes

- Saying the PC holds the current instruction. It holds the address of the next one.
- Confusing the MAR (an address) with the MDR (the data).
- Describing the address bus as two-way.
- Treating cache as the same thing as RAM. It is smaller, faster and holds copies.
- Forgetting that `CMP` only sets flags; the branch makes the decision.
- Naming a device without saying how it works.

## Exam technique

For a fetch-decode-execute question, use register transfer steps in order and name the register at each step. For performance questions, give a factor, say what changes and state the effect: "more cores allow several threads to run simultaneously, so more work is done per second, provided the program is multi-threaded". Assembly traces should be done in a table that records every register after every instruction.

## Check your understanding

1. State two differences between Von Neumann and Harvard architectures. *Answer: Von Neumann has one memory and bus set for instructions and data; Harvard has separate ones, so both can be accessed together.*
2. What is the purpose of the status register? *Answer: it holds flags describing the result of the last operation, which conditional branches test.*
3. How many memory locations can a 24-bit address bus address? *Answer: 2^24 = 16,777,216.*
4. Describe the fetch stage in register transfers. *Answer: PC to MAR; PC incremented; memory contents at MAR into MDR; MDR to CIR.*
5. Give two reasons why a processor with a higher clock speed might not be faster. *Answer: for example slow memory or cache misses, or software that cannot use the extra speed.*
6. What does `BNE loop` do? *Answer: it branches to the label loop if the last comparison found the values not equal.*
7. Explain why an SSD may be chosen for a laptop. *Answer: no moving parts, so it is quiet, fast and robust to knocks.*
8. In the worked example, what is stored if location 101 holds 3? *Answer: 21 (7 x 3).*
