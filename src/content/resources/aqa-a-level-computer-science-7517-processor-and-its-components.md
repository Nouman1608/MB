---
title: "AQA A-Level Computer Science (7517): Structure and Role of the Processor and its Components"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.7.3: processor components, registers, the Fetch-Execute cycle, instruction sets, addressing modes, assembly operations, interrupts and performance factors."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.7.3 Structure and role of the processor and its components** in AQA A-Level Computer Science (7517). The section has seven parts: the processor and its components; the Fetch-Execute cycle and the registers within it; the instruction set; addressing modes; machine-code and assembly operations; interrupts; and factors that affect processor performance. It is the largest section of topic 4.7 and a regular source of long questions.

The wider [computer organisation and architecture study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study/) gives an overview of section 4.7. This page works through each part with register-level detail and traced examples.

Condensed notes are in the [processor revision notes](/resources/aqa-a-level-computer-science-7517-processor-and-its-components-revision-notes/), and exam-style questions are in the [processor practice questions](/resources/aqa-a-level-computer-science-7517-processor-and-its-components-practice/).

## Components of the processor

- **Arithmetic logic unit (ALU):** carries out arithmetic (add, subtract) and logical operations (AND, OR, NOT, XOR, shifts and comparisons).
- **Control unit (CU):** decodes the instruction in the current instruction register and sends control signals that make the other components do the right thing, in the right order.
- **Clock:** produces regular pulses that synchronise every step. One cycle of the clock is the smallest unit of time in the processor.
- **General-purpose registers:** small, very fast stores inside the processor that hold data being worked on. A program can use any of them for any purpose.
- **Dedicated registers:** registers with a fixed job:
  - **program counter (PC):** holds the address of the next instruction to fetch;
  - **current instruction register (CIR):** holds the instruction being decoded and executed;
  - **memory address register (MAR):** holds the address of the memory location being read or written;
  - **memory buffer register (MBR):** holds the data that has just been read from memory, or is about to be written to it;
  - **status register:** holds bits (flags) that record the outcome of operations, such as zero, negative, carry or overflow, and may also hold interrupt information.

## The Fetch-Execute cycle

The processor repeats **fetch, decode, execute** for every instruction.

**Fetch**

1. The address in the PC is copied to the MAR: `MAR ← PC`.
2. The PC is incremented so that it points to the next instruction: `PC ← PC + 1`.
3. The contents of the memory location addressed by the MAR are copied (over the data bus) into the MBR: `MBR ← memory[MAR]`.
4. The contents of the MBR are copied to the CIR: `CIR ← MBR`.

**Decode**

5. The control unit examines the opcode in the CIR to find out which operation is required and what the operand means.

**Execute**

6. The operation is carried out. For `LOAD` with direct addressing, for example: `MAR ← operand`, `MBR ← memory[MAR]`, then the value moves from the MBR to a general-purpose register. For `ADD`, the ALU adds two values and the result goes to a register. For a branch, the operand is copied to the PC.

The PC is normally incremented during the fetch stage, which is why a branch that overwrites the PC changes the next instruction. The address bus carries the MAR contents to memory, the data bus carries the data to the MBR, and the control bus carries the read signal.

## The instruction set

A **processor instruction set** is the complete list of machine code instructions that a particular processor can execute. It is **processor specific**: machine code written for one family of processor will not run on another, because the opcodes and the way operands are encoded differ.

An instruction has two parts:

- the **opcode**, which says what operation to perform;
- one or more **operands**, which can be a **value**, a **memory address** or a **register**.

In the simple model used by the specification, the **addressing mode is part of the opcode bits**, so the opcode defines both the basic operation and the addressing mode. You are not asked to define opcode, only to interpret opcodes in the context of a question.

**Worked example 1.** An instruction is 8 bits long. The opcode has 4 bits, of which 3 give the basic operation (such as ADD) and 1 gives the addressing mode. The operand has 4 bits.

- Number of different opcodes: 2⁴ = **16**.
- Number of different basic operations: 2³ = 8, each of which could use either of two addressing modes.
- The 4-bit operand can hold a value from 0 to 15, or address one of 2⁴ = 16 locations.

If the same instruction were 16 bits long with a 6-bit opcode, there would be 2⁶ = 64 opcodes and a 10-bit operand able to address 2¹⁰ = 1,024 locations.

## Addressing modes

- **Immediate addressing:** the operand **is the data**. `MOV R0, #25` puts the value 25 into R0.
- **Direct addressing:** the operand **is the address of the data**. `LDR R0, 25` puts into R0 the contents of memory location 25. (The address can mean a main memory address or a register.)

The # sign marks an immediate value in the assembly style used in AQA papers. The instruction set is always printed in the exam question, so check it carefully: do not rely on memorised mnemonics.

## Assembly and machine-code operations

The specification lists these operations, used in mnemonic form with immediate and direct addressing: **load, add, subtract, store, branching (conditional and unconditional), compare, logical bitwise operators (AND, OR, NOT, XOR), shift right, shift left and halt.**

| Operation | Typical assembly | Effect |
|---|---|---|
| Load | `LDR R1, 200` | R1 ← contents of address 200 |
| Store | `STR R1, 201` | memory[201] ← R1 |
| Add | `ADD R0, R1, #4` | R0 ← R1 + 4 |
| Subtract | `SUB R0, R0, R2` | R0 ← R0 − R2 |
| Move | `MOV R3, #7` | R3 ← 7 |
| Compare | `CMP R0, #10` | sets status flags from R0 − 10 |
| Unconditional branch | `B loop` | PC ← address of loop |
| Conditional branch | `BLT loop` | branch only if the compare showed less than |
| AND, OR, XOR | `AND R0, R1, #15` | bitwise operation |
| NOT | `MVN R0, R1` | R0 ← bitwise NOT of R1 |
| Shift | `LSL R0, R1, #2` | shift left; each place doubles the value |
| Halt | `HALT` | stop execution |

**Worked example 2: bitwise and shift.** Let R1 = 11001010 and a mask be 00111100.

- AND: 11001010 AND 00111100 = **00001000** (a 1 only where both have 1).
- OR: = **11111110**.
- XOR: = **11110110** (a 1 where the bits differ).
- NOT R1 = **00110101**.
- 00110101 shifted left one place = **01101010**: the value 53 becomes 106, a doubling.
- 00110101 shifted right two places = **00001101**: the value 53 becomes 13, which is 53 ÷ 4 rounded down.

**Worked example 3: a loop.** Trace this program:

```
      MOV R0, #0
      MOV R1, #2
loop: ADD R0, R0, R1
      ADD R1, R1, #2
      CMP R1, #10
      BLT loop
      HALT
```

| Pass | R0 after ADD | R1 after ADD | CMP R1, #10 | Branch? |
|---|---|---|---|---|
| 1 | 2 | 4 | 4 < 10 | yes |
| 2 | 6 | 6 | 6 < 10 | yes |
| 3 | 12 | 8 | 8 < 10 | yes |
| 4 | 20 | 10 | 10 < 10 is false | no |

The program halts with R0 = 20, the sum of 2, 4, 6 and 8.

## Interrupts

An **interrupt** is a signal to the processor that something needs attention at once, for example a key press, a completed disk transfer, a timer or an error. An **interrupt service routine (ISR)** is the piece of code that handles a particular kind of interrupt.

The effect on the Fetch-Execute cycle:

1. At the **end of each cycle** the processor checks for interrupts.
2. If an interrupt is pending and has a high enough **priority**, the processor must **save the volatile environment**: the contents of the PC, the status register and the general-purpose registers. These are volatile because the ISR will overwrite them. They are usually saved on a stack.
3. The PC is loaded with the address of the correct ISR, which then runs.
4. When the ISR finishes, the saved values are restored and the original program resumes **exactly where it stopped**.
5. If a higher-priority interrupt arrives during an ISR, the processor can pause that ISR in the same way. A lower-priority one waits.

Without saving the environment the interrupted program would carry on with the wrong register values and fail.

## Factors affecting processor performance

| Factor | Effect |
|---|---|
| **Multiple cores** | Several instruction streams can run at the same time, so a program that can be split into parallel tasks finishes sooner. A program that is not written for parallel work gains little. |
| **Cache memory** | A small, fast memory between the processor and main memory that keeps recently used instructions and data. A larger cache raises the number of accesses that avoid the slower main memory. |
| **Clock speed** | More cycles per second, so more instructions in the same time. Limited by heat and power use. |
| **Word length** | The number of bits the processor handles at once. A longer word means larger values per operation and often larger memory addresses. |
| **Address bus width** | More lines allow more memory to be addressed (2ⁿ locations). |
| **Data bus width** | More bits move between memory and processor per transfer, so fewer transfers are needed. |

Gains are rarely proportional. Doubling the clock speed does not halve run time if the processor is waiting for memory.

## Common mistakes

- Saying the **MAR holds data**. It holds an address; the MBR holds the data.
- Forgetting that the **PC is incremented during fetch**, before execution.
- Mixing up **immediate** (the operand is the value) and **direct** (the operand is an address).
- Leaving out the **volatile environment** in an interrupt answer.
- Describing cache as "extra RAM". It is a small, fast store of recently used items.
- Saying more cores always means proportionally faster programs.

## Exam technique

- For **register transfer** answers, write each step as `register ← source` and name the register.
- For **trace** questions, tabulate the registers after every instruction.
- For **interrupt** questions, cover: check at the end of the cycle, save the environment, run the ISR, restore and resume.
- For **performance** questions, link each factor to its mechanism.

## More resources on this topic

- [Processor revision notes](/resources/aqa-a-level-computer-science-7517-processor-and-its-components-revision-notes/)
- [Processor practice questions](/resources/aqa-a-level-computer-science-7517-processor-and-its-components-practice/)
- [The stored program concept study guide](/resources/aqa-a-level-computer-science-7517-stored-program-concept/)

*Written against the AQA A-level Computer Science (7517) specification, 4.7.3 Structure and role of the processor and its components. Always check the current specification on the AQA website.*
