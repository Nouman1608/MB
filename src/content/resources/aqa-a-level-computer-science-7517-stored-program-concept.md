---
title: "AQA A-Level Computer Science (7517): The Stored Program Concept"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
    subtopic: "the-stored-program-concept-7517"
description: "Deeper guide to AQA 7517 section 4.7.2: the stored program concept, machine code in main memory, serial fetch and execute, with a traced example."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.7.2 The stored program concept** in AQA A-Level Computer Science (7517). The specification asks you to **describe the stored program concept: machine code instructions stored in main memory are fetched and executed serially by a processor that performs arithmetic and logical operations**. That one sentence contains four separate ideas, and a good answer states all of them: the instructions are in **machine code**, they are held in **main memory**, they are **fetched and executed one after another**, and the processor carries out **arithmetic and logical operations**.

The wider [computer organisation and architecture study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study/) covers the whole of section 4.7. This page takes the concept slowly, shows why it matters, and traces a tiny program through memory so that you can see it working.

Condensed notes are in the [stored program concept revision notes](/resources/aqa-a-level-computer-science-7517-stored-program-concept-revision-notes/), and exam-style questions are in the [stored program concept practice questions](/resources/aqa-a-level-computer-science-7517-stored-program-concept-practice/).

## What the concept says

A **program** is a list of instructions. In a computer that uses the **stored program concept**, the program is held in the same place as the data it works on: **main memory**. The processor does not have the program built into its wiring. Instead it repeatedly:

1. **fetches** the next instruction from memory;
2. **decodes** it to work out what it means;
3. **executes** it, which may involve arithmetic, a logical operation, moving data, or changing which instruction comes next.

Then it goes back to step 1. The instructions are in **machine code**: binary patterns that the processor's hardware can decode directly. Programs written in a high-level language are translated into machine code before they can be run this way.

## Before the stored program

Early electronic calculators and computers had their programs set up by **physically rewiring** the machine or by setting switches and plugs. Changing the task meant changing the hardware, which could take days. Such a machine was effectively built for one job at a time.

The stored program concept replaced this. The hardware is built once, as a general machine, and the **program is just data in memory**. To change the task, you load a different program. A single computer can run a word processor, then a game, then a compiler.

## Instructions and data look the same

Memory holds only binary patterns. Nothing in a memory location says whether the pattern is an instruction or a piece of data. It is the **way the processor uses the location** that decides.

For example, the 8-bit pattern `01100101` can be:

- the unsigned integer **101** (64 + 32 + 4 + 1);
- the ASCII character **e**, whose code is 101;
- a machine code instruction, if the processor's instruction set happens to give that pattern a meaning.

If the processor fetches the location as an instruction, it is an instruction. If an instruction asks to load it as a value, it is data. This is the key reason a program can be loaded from disk, treated as data while it is copied into memory, and then run as instructions.

## The role of each part

- **Main memory** holds the instructions and the data, each in its own addressed locations.
- The **program counter** (PC) holds the address of the next instruction to fetch. After a fetch it normally increases by one instruction, which makes execution **serial**: one instruction after another in the order they are stored.
- The **processor** carries out the arithmetic (add, subtract) and logical (AND, OR, NOT, XOR, shifts, compare) operations.
- **Branch instructions** change the PC, so the processor can jump to another address and repeat or skip sections of code. Without branches a program could only run straight from its first instruction to its last.

The registers of the processor are covered in 4.7.3. Here it is enough to know that the PC drives the order of execution.

## Worked example: a four-instruction program

Suppose a toy processor has 8-bit instructions. The first 4 bits are the **opcode** and the last 4 bits are the **operand**, which is a memory address (direct addressing). The opcodes below are invented for this example only.

| Opcode | Meaning |
|---|---|
| 0001 | LOAD: copy the value at the operand address into the accumulator |
| 0010 | ADD: add the value at the operand address to the accumulator |
| 0011 | STORE: copy the accumulator to the operand address |
| 1111 | HALT: stop |

Memory contents (all addresses and values shown in decimal and binary):

| Address | Contents (binary) | Meaning |
|---|---|---|
| 0 | 0001 1000 | LOAD 8 |
| 1 | 0010 1001 | ADD 9 |
| 2 | 0011 1010 | STORE 10 |
| 3 | 1111 0000 | HALT |
| 8 | 0000 0111 | data: 7 |
| 9 | 0000 0101 | data: 5 |
| 10 | 0000 0000 | data: 0 (result goes here) |

Trace (PC is the program counter, ACC is the accumulator):

| Step | PC before fetch | Instruction | Effect | ACC after |
|---|---|---|---|---|
| 1 | 0 | LOAD 8 | ACC ← 7 | 7 |
| 2 | 1 | ADD 9 | ACC ← 7 + 5 | 12 |
| 3 | 2 | STORE 10 | memory[10] ← 12, which is 0000 1100 | 12 |
| 4 | 3 | HALT | processor stops | 12 |

Notice that the instructions sit at addresses 0 to 3 and the data at addresses 8, 9 and 10, but both are in the same memory and are reached the same way. Notice also that the PC moved on by one after each fetch, so the instructions ran **serially**.

## Why the concept matters

**Advantages**

- **General purpose:** one machine can run any program that can be expressed in its instruction set.
- **Easy to change:** a new program is loaded, not wired.
- **Programs can be treated as data:** a loader, compiler or operating system can create, copy or modify a program, because a program is just memory contents.
- **Efficient use of memory:** the same memory serves code and data in whatever proportion is needed.

**Disadvantages and consequences**

- **Serial execution** means one instruction at a time, which can limit speed (compare multiple cores in 4.7.3).
- Because code and data share memory, a **faulty or malicious program may overwrite instructions or data** belonging to another program. Operating systems add memory protection to deal with this.
- Instructions and data compete for the same bus in a von Neumann design (see 4.7.1).

## Linking to von Neumann architecture

The stored program concept is the defining idea behind the von Neumann model. A von Neumann computer has a single memory holding both instructions and data. A Harvard computer also keeps programs in memory and fetches them in sequence, but it keeps them in a separate memory from the data. The stored program concept as the specification states it is therefore compatible with both.

## Common mistakes

- Writing that **the program is stored on the hard disk**. A program is stored there when not running, but the concept requires it to be in **main memory** when it is run.
- Leaving out **"machine code"**. Instructions in memory are not high-level code.
- Leaving out **"serially"** or "one after another".
- Saying that the **processor stores the program**. The program is in memory; the processor fetches from it.
- Claiming that memory knows which locations hold instructions. It does not; the **processor's use** of the location decides.
- Mixing up the PC with the accumulator. The PC holds an **address**; the accumulator holds a **value**.

## Exam technique

- A **"describe the stored program concept"** question is a recall of the four parts: machine code, main memory, fetched and executed serially, arithmetic and logical operations.
- For a **trace**, write the PC and accumulator for every step and say what memory changes.
- For **"explain one advantage"**, link the advantage to the cause: for example "programs can be changed by loading new instructions, so one machine can do many jobs".
- If a question gives a binary pattern, use the question's table to interpret it, and do not assume it is an instruction.

## More resources on this topic

- [Stored program concept revision notes](/resources/aqa-a-level-computer-science-7517-stored-program-concept-revision-notes/)
- [Stored program concept practice questions](/resources/aqa-a-level-computer-science-7517-stored-program-concept-practice/)
- [Internal hardware components study guide](/resources/aqa-a-level-computer-science-7517-internal-hardware-components/)

*Written against the AQA A-level Computer Science (7517) specification, 4.7.2 The stored program concept. Always check the current specification on the AQA website.*
