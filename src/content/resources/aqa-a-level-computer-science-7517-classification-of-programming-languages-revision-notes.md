---
title: "AQA A-Level Computer Science (7517): Classification of programming languages -- Revision Notes"
seoTitle: "AQA A-Level CS Programming Languages Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "classification-of-programming-languages-7517"
description: "Condensed AQA 7517 section 4.6.2 recall: low-level and high-level languages, machine code, assembly language, imperative languages and their trade-offs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.6.2 Classification of programming languages**, AQA A-Level Computer Science (7517). Fuller explanations are in the [classification of programming languages study guide](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages/); exam-style questions are in the [classification of programming languages practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-practice/).

## The classification

| Level | Languages | Closeness to hardware |
|---|---|---|
| Low-level | **Machine code** and **assembly language** | Close to the processor's instruction set |
| High-level | Includes **imperative** high-level languages | Close to the programmer's problem |

Development: machine code first, then assembly language (symbolic, easier for people), then high-level languages (statements translated into many machine instructions).

## Machine code

- **Binary** instructions: an **opcode** (the operation) and **operands** (registers, values or addresses).
- The only language the processor **executes directly**.
- **Processor-specific**: each instruction set is different.
- Very difficult to read, write and debug.

## Assembly language

- **Mnemonics** (ADD, LDR) instead of binary opcodes, plus **labels**.
- Roughly **one assembly instruction per machine code instruction** (one-to-one).
- Translated by an **assembler**.
- **Processor-specific**, not portable.
- Easier than machine code, but still hard.

```
LDR R0, 100     load the value at address 100 into R0
LDR R1, 101     load the value at address 101 into R1
ADD R2, R0, R1  R2 = R0 + R1
STR R2, 102     store R2 at address 102
HALT
```

High-level equivalent: `c = a + b`.

## Imperative high-level language

- A program is a **sequence of commands (statements)** carried out in order, changing the **state** (variable values).
- Uses **sequence, assignment, selection, iteration**, and procedures and functions.
- Examples: Python, Java, C, C#, Visual Basic.
- **Relationship to low-level:** one high-level statement is **translated into several low-level instructions** by a compiler or interpreter. The structure mirrors how the processor executes instructions in sequence, changing registers and memory.
- The programmer works with **variables, data types and control structures**, not registers and addresses.

## Comparison

| | Machine code / assembly | High-level |
|---|---|---|
| Readability | Poor | Good |
| Development time | Long | Short |
| Debugging and maintenance | Hard | Easier |
| Portability | Processor-specific | Portable |
| Hardware control | Very high | Limited |
| Size and speed of final code | Can be smallest and fastest | May be larger or slower |
| Translation | None (machine code) or assembler | Compiler or interpreter |

### When low-level is the right choice

- Device drivers and parts of an operating system.
- Very small embedded systems with tiny memory.
- Time-critical routines needing exact control of timing.
- Using special processor features directly.

### When high-level is the right choice

- Large applications and websites.
- Programs that must run on several types of computer.
- Projects where development time and cost matter.

## Worked comparison

| Task | Choice | Reason |
|---|---|---|
| A spreadsheet application | High-level | Large, complex, needs to be portable and quick to build |
| Firmware for a tiny sensor with 512 bytes of memory | Assembly | Every byte and cycle matters |
| A device driver for a new graphics card | Low-level (or high-level with hardware access) | Direct control of hardware registers |

## What one statement becomes

`total = total + price` in a high-level language is translated into several low-level operations:

1. Load `total` from memory into a register.
2. Load `price` into another register.
3. Add the registers and put the result in a register.
4. Store the result in the memory location for `total`.

This is the **one-to-many** relationship between a high-level statement and machine instructions. An assembly language program has about **one instruction per machine instruction**, so it is as long as the machine code.

## Why portability differs

- Machine code and assembly language are written for one **instruction set**. Moving to a different processor means rewriting.
- A high-level program is portable because a **translator** for each processor produces the right machine code from the same source.
- Even high-level programs are not always portable in practice if they use features that exist only on one operating system.

## Exam traps

- **Machine code equals assembly.** They differ: binary against mnemonics, translator needed or not.
- **Assembly portable.** It is processor-specific.
- **High-level runs directly.** It must be translated.
- **High-level "runs faster".** It is faster to **write**.
- **Imperative** defined without sequence of statements or changing state.
- **One-sided comparison.** Give both advantages and disadvantages when asked to compare.

## Key terms

| Term | Definition |
|---|---|
| Low-level language | A language close to the processor's instruction set |
| High-level language | A language designed around the programmer's problem, translated into machine code |
| Machine code | Binary instructions the processor can execute directly |
| Assembly language | A symbolic form of machine code using mnemonics and labels |
| Mnemonic | A short name for an instruction, such as ADD |
| Opcode | The part of an instruction that says which operation to perform |
| Imperative language | A language in which a program is a sequence of commands that change its state |
| Portable | Able to run on different types of processor with little or no change |

## Self-test

1. Name the two kinds of low-level language.
2. What does the processor execute directly?
3. What translates assembly language?
4. State why assembly language is not portable.
5. What is an opcode?
6. What is meant by an imperative language?
7. How many machine instructions might one high-level statement become?
8. Give one advantage of low-level programming.
9. Give one advantage of high-level programming.
10. Name a task for which assembly language might be chosen.

**Answers**

1. Machine code and assembly language.
2. Machine code.
3. An assembler.
4. Each type of processor has its own instruction set, so the program must be rewritten for another.
5. The part of a machine code instruction that specifies the operation.
6. A language in which a program is a sequence of commands carried out in order, changing the state of the program.
7. Usually several.
8. Any one: direct control of hardware; small and fast code.
9. Any one: faster to develop; easier to read and debug; portable.
10. Any one: a device driver; firmware for a very small embedded system; a time-critical routine.

## More resources on this topic

- [Classification of programming languages study guide](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages/)
- [Classification of programming languages practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-practice/)
- [Types of program translator revision notes](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes/)
- [Hardware and software revision notes](/resources/aqa-a-level-computer-science-7517-hardware-and-software-revision-notes/)
