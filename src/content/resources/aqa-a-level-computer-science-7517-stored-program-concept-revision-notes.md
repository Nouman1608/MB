---
title: "AQA A-Level Computer Science (7517): The Stored Program Concept -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.7.2 recall: the four parts of the stored program concept, instructions versus data, a traced example and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.7.2 The stored program concept**, AQA A-Level Computer Science (7517). The specification statement is: **machine code instructions stored in main memory are fetched and executed serially by a processor that performs arithmetic and logical operations.** The detailed explanation and a longer trace are in the [stored program concept study guide](/resources/aqa-a-level-computer-science-7517-stored-program-concept/); exam-style questions are in the [stored program concept practice questions](/resources/aqa-a-level-computer-science-7517-stored-program-concept-practice/).

## The four parts to state

| Part | Meaning |
|---|---|
| Machine code instructions | Binary patterns the processor can decode directly |
| Stored in main memory | The program is held in memory (RAM) while it runs, not wired into the processor |
| Fetched and executed serially | One instruction at a time, in order, unless a branch changes the order |
| Arithmetic and logical operations | The processor adds, subtracts, compares, ANDs, ORs, shifts and so on |

A full-mark description normally contains all four.

## Before and after

| Before | After (stored program) |
|---|---|
| Program set by rewiring or switches | Program held in memory as data |
| One machine, one job | One machine, any program |
| Changing task takes hardware changes | Changing task means loading a new program |

## Instructions and data look the same

- Memory holds binary patterns only.
- What a pattern means depends on **how the processor uses it**.
- `01100101` can be the integer 101, the ASCII letter e, or an instruction.
- This is why a program can be copied, loaded or altered by another program: to that program it is just data.

## The cycle in one line

**Fetch** the instruction at the address in the **program counter**, **decode** it, **execute** it, then repeat. The program counter normally increases after each fetch, so instructions run in the order stored. A **branch** changes the program counter to jump elsewhere.

## Traced example

Toy processor: 8-bit instruction, 4-bit opcode, 4-bit operand (a direct address). Invented opcodes: 0001 LOAD, 0010 ADD, 0011 STORE, 1111 HALT.

| Address | Contents | Meaning |
|---|---|---|
| 0 | 0001 1000 | LOAD 8 |
| 1 | 0010 1001 | ADD 9 |
| 2 | 0011 1010 | STORE 10 |
| 3 | 1111 0000 | HALT |
| 8 | 0000 0111 | data: 7 |
| 9 | 0000 0101 | data: 5 |
| 10 | 0000 0000 | data: result |

Result: accumulator becomes 7, then 12, then 12 is stored at address 10 (0000 1100) and the processor halts. The instructions ran in address order because the program counter increased by one each time.

## Advantages

- **General purpose:** any program in the instruction set can be run.
- **Easy to change:** load a new program instead of rewiring.
- **Programs as data:** loaders, compilers and operating systems can create and copy programs.
- **Flexible memory use:** space is shared between code and data as needed.

## Disadvantages

- **Serial execution** limits speed.
- Faulty or malicious code can **overwrite** instructions or data in the same memory.
- In a von Neumann design, instructions and data share one bus.

## Link to architectures

The concept underlies the **von Neumann** model (one memory for both). A **Harvard** machine also runs a stored program but keeps code and data in separate memories.

## Key terms

| Term | Definition |
|---|---|
| Stored program concept | Instructions are held in main memory as machine code and fetched and executed serially |
| Machine code | Binary instructions executed directly by the processor |
| Main memory | The memory that holds the program and data in use |
| Program counter | Register holding the address of the next instruction to fetch |
| Opcode | Part of an instruction that says which operation to carry out |
| Operand | Part of an instruction that gives a value, an address or a register |
| Serial execution | Instructions are carried out one after another |
| Branch | An instruction that changes the order of execution |

## Exam traps

- **Disk is not enough.** The program must be in **main memory** to run.
- **Say "machine code"**, not just "instructions" or "code".
- **Say "serially"** or "one after another".
- **The program counter holds an address**, not a value.
- **Do not claim memory can tell instructions from data.** The processor's use decides.
- **Use the standard cycle terms**: fetch, decode and execute.

## Self-test

1. State the stored program concept.
2. Where are the instructions held while a program runs?
3. What does "serially" mean here?
4. Name two types of operation the processor performs.
5. What decides whether a memory location is treated as data or an instruction?
6. What does the program counter hold?
7. How does a branch change execution?
8. Give one advantage of the stored program concept.
9. Give one risk caused by code and data sharing memory.
10. How did earlier machines change from one task to another?
11. In the traced example, what value is at address 10 at the end?
12. Which architecture keeps instructions and data in separate memories?

**Answers**

1. Machine code instructions stored in main memory are fetched and executed serially by a processor that performs arithmetic and logical operations.
2. In main memory.
3. One instruction after another, in order.
4. Any two of: arithmetic, logical, compare, shift, branch.
5. How the processor uses it.
6. The address of the next instruction to be fetched.
7. It changes the value of the program counter, so the next fetch is from a different address.
8. Any one of: general purpose; easy to change; programs can be treated as data; flexible use of memory.
9. A faulty or malicious program may overwrite instructions or data.
10. By rewiring the machine or resetting switches.
11. 12 (0000 1100).
12. Harvard architecture.

## Related resources

- [Stored program concept study guide](/resources/aqa-a-level-computer-science-7517-stored-program-concept/)
- [Stored program concept practice questions](/resources/aqa-a-level-computer-science-7517-stored-program-concept-practice/)
- [Internal hardware components revision notes](/resources/aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes/)
