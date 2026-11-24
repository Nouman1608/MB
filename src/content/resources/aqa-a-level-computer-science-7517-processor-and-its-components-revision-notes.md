---
title: "AQA A-Level Computer Science (7517): Structure and Role of the Processor and its Components -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
    subtopic: "structure-and-role-of-the-processor-and-its-components-7517"
description: "Condensed AQA 7517 section 4.7.3 recall: processor components, register transfers in the Fetch-Execute cycle, instruction sets, addressing modes, interrupts and performance factors."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.7.3 Structure and role of the processor and its components**, AQA A-Level Computer Science (7517). Full explanations and traced examples are in the [processor study guide](/resources/aqa-a-level-computer-science-7517-processor-and-its-components/); exam-style questions are in the [processor practice questions](/resources/aqa-a-level-computer-science-7517-processor-and-its-components-practice/).

## Components

| Component | Role |
|---|---|
| ALU | Arithmetic and logical operations, including shifts and comparisons |
| Control unit | Decodes the instruction and sends control signals |
| Clock | Regular pulses that synchronise every step |
| General-purpose registers | Fast stores for data being worked on; any use |
| Program counter (PC) | Address of the next instruction to fetch |
| Current instruction register (CIR) | The instruction being decoded and executed |
| Memory address register (MAR) | Address of the location being read or written |
| Memory buffer register (MBR) | Data read from, or about to be written to, memory |
| Status register | Flags (zero, negative, carry, overflow) and interrupt information |

## Fetch-Execute cycle

**Fetch**

1. `MAR ← PC`
2. `PC ← PC + 1`
3. `MBR ← memory[MAR]` (address on the address bus, data on the data bus, read on the control bus)
4. `CIR ← MBR`

**Decode:** the control unit reads the opcode in the CIR.

**Execute:** carry out the operation.

- LOAD (direct): `MAR ← operand`, `MBR ← memory[MAR]`, value moves to a register.
- ADD: the ALU adds, the result goes to a register.
- Branch: operand copied into the PC.

## Instruction set

- The **instruction set** is the list of machine code instructions a processor can execute; it is **processor specific**.
- An instruction has an **opcode** and one or more **operands** (a value, a memory address or a register).
- In the AQA model the **addressing mode is part of the opcode bits**.

**Counting check:** 4-bit opcode gives 2⁴ = 16 opcodes. A 4-bit operand addresses 16 locations. A 6-bit opcode gives 64 opcodes. A 10-bit operand addresses 1,024 locations.

## Addressing modes

| Mode | Operand is | Example | Effect |
|---|---|---|---|
| Immediate | the datum | `MOV R0, #25` | R0 ← 25 |
| Direct | the address of the datum | `LDR R0, 25` | R0 ← contents of address 25 |

## Operations to know

load, add, subtract, store, branch (conditional and unconditional), compare, bitwise AND, OR, NOT, XOR, shift right, shift left, halt.

- **Shift left** by n places multiplies by 2ⁿ (if no 1 is lost). **Shift right** by n places divides by 2ⁿ, rounding down.
- **Compare** sets status flags. A **conditional branch** reads the flags.
- **AND** keeps a 1 only where both bits are 1. **OR** gives a 1 where either is 1. **XOR** gives a 1 where the bits differ.

**Bit check:** 11001010 AND 00111100 = 00001000. 00110101 shifted left one place = 01101010 (53 becomes 106).

## Interrupts

1. A device or event raises an **interrupt request**.
2. The processor checks for interrupts at the **end of each Fetch-Execute cycle**.
3. If the priority is high enough, it **saves the volatile environment** (PC, status register, registers), usually on a stack.
4. The PC is loaded with the address of the **interrupt service routine (ISR)**, which runs.
5. The saved values are **restored** and the interrupted program resumes where it stopped.

A higher-priority interrupt can interrupt a lower-priority ISR. The environment must be saved because the ISR would otherwise overwrite register contents.

## Performance factors

| Factor | Effect | Limit |
|---|---|---|
| Multiple cores | Run several instruction streams at once | Software must be able to run in parallel |
| Cache memory | Fast store of recently used items; fewer slow memory accesses | Small; a miss still goes to main memory |
| Clock speed | More cycles per second | Heat and power; waiting for memory |
| Word length | More bits processed at once | Needs software and memory to match |
| Address bus width | More addressable memory (2ⁿ) | Does not by itself speed up execution |
| Data bus width | More bits per transfer | Memory must match |

## Key terms

| Term | Definition |
|---|---|
| Register | A small, fast storage location inside the processor |
| Opcode | The part of an instruction that gives the operation (and here, the addressing mode) |
| Operand | The part of an instruction that gives a value, an address or a register |
| Immediate addressing | The operand is the datum |
| Direct addressing | The operand is the address of the datum |
| Interrupt | A signal that the processor must stop its current task and deal with an event |
| ISR | Interrupt service routine: the code that handles an interrupt |
| Volatile environment | The register values that would be lost or overwritten when an ISR runs |
| Word length | The number of bits a processor treats as one unit |
| Cache | Small, fast memory holding recently used instructions and data |

## Exam traps

- **MAR is an address; MBR is data.** Do not swap them.
- **The PC is incremented in the fetch stage**, before the instruction runs.
- **Immediate means the operand is the value.** Direct means it is an address.
- **Interrupts:** say the environment is saved and later restored, and that the check happens at the end of a cycle.
- **Cache is not extra RAM.**
- **Do not claim linear gains** from more cores or higher clock speed.
- **Read the instruction set printed in the question** before you interpret a mnemonic.

## Self-test

1. What does the control unit do?
2. Which register holds the address of the next instruction?
3. Write the first two register transfers of the fetch stage.
4. What does the MBR hold?
5. Why is an instruction set described as processor specific?
6. How many opcodes can a 5-bit opcode give?
7. What is the difference between immediate and direct addressing?
8. What is the effect of shifting 00010111 left by three places?
9. When does the processor check for interrupts?
10. Name two things that make up the volatile environment.
11. Give one factor, other than clock speed, that affects performance and say how.
12. Why might doubling the number of cores not halve the run time?

**Answers**

1. It decodes the instruction and sends control signals to the other components.
2. The program counter.
3. `MAR ← PC` and `PC ← PC + 1`.
4. Data (or an instruction) just read from memory, or about to be written.
5. Opcodes and operand layout differ between processor families, so machine code for one does not run on another.
6. 2⁵ = 32.
7. Immediate: the operand is the value. Direct: the operand is the address of the value.
8. It becomes 10111000, which multiplies 23 by 8 to give 184.
9. At the end of each Fetch-Execute cycle.
10. Any two of: PC, status register, general-purpose registers.
11. Any one with its effect, for example cache memory: fewer slow accesses to main memory.
12. Part of the program may not be able to run in parallel, and the cores may wait for memory.

## More resources on this topic

- [Processor study guide](/resources/aqa-a-level-computer-science-7517-processor-and-its-components/)
- [Processor practice questions](/resources/aqa-a-level-computer-science-7517-processor-and-its-components-practice/)
- [Stored program concept revision notes](/resources/aqa-a-level-computer-science-7517-stored-program-concept-revision-notes/)
