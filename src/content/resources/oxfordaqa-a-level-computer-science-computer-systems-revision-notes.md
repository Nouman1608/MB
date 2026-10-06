---
title: "OxfordAQA A-Level Computer Science: Computer systems (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Computer Systems Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
description: "Condensed revision notes on OxfordAQA A-level Computer Science computer systems: OS functions, utilities, low vs high-level languages and translators."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense topic 6, Computer systems, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. They cover sections 3.6.1 to 3.6.3.2, all International AS content listed under Unit 2: Concepts and principles of computer science. For full explanations and worked examples, use the [Computer systems study guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/).

Other links: [practice questions](/resources/oxfordaqa-a-level-computer-science-computer-systems-practice/), [course hub](/boards/oxfordaqa/a-level/computer-science/), [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) and the [free diagnostics](/diagnostics/).

## 3.6.1 Hardware and software

| Term | Definition to learn |
|---|---|
| Hardware | The electronic components of a computer system |
| Software | The sequences of instructions that are executed using the hardware |

Relationship: hardware needs software to do anything useful; software needs hardware to execute it.

## 3.6.2 Software

### Two categories

| Category | Purpose | Examples |
|---|---|---|
| Application software | Lets the user carry out a task | Word processor, spreadsheet, browser, game |
| System software | Manages and supports the computer so other software can run | Operating system, utility programs, libraries, translators |

### The four kinds of system software

- **Operating system** -- manages hardware and resources; gives programs and users a consistent way to use the computer.
- **Utility programs** -- add extra functionality to help manage the computer system. Learn examples: virus checker, compression program, backup program, disk defragmenter.
- **Libraries** -- collections of pre-written, tested subroutines that programs call, so code is not rewritten and errors are reduced.
- **Translators** -- compiler, assembler and interpreter; convert code into a form that can be executed.

### The OS hides hardware complexity

Programs and users make simple requests ("open this file", "print this page"). The OS turns them into the detailed operations a particular device needs. Programs therefore do not need to know the details of the hardware, and the same program can run on machines with different devices fitted.

### OS functions (describe each)

| Function | What the OS does |
|---|---|
| Scheduling | Decides which process uses the processor next and for how long; aims to keep the processor busy, share time fairly and stay responsive |
| Memory allocation | Places each process in main memory, records used and free areas, stops processes overwriting each other's areas, reclaims memory when a process ends |
| I/O device management | Controls input/output devices through device drivers; handles requests from several programs for the same device (for example, queuing print jobs) |
| Interrupt handling | Responds to interrupt signals by running the matching interrupt service routine (ISR), then lets the interrupted process continue |

Only allocation of **main** memory is needed. Leave virtual memory out.

### Method in steps: tracing a time-slice schedule

Round robin is a common way to illustrate scheduling (the specification does not name a method).

1. Put the processes in a queue in arrival order.
2. Give the front process one time slice, or less if it needs less.
3. If it still needs time, send it to the back of the queue.
4. Repeat until the queue is empty; record each finish time.

Check: the last finish time equals the total processor time needed (when all arrive at once and the processor is never idle).

### Method in steps: placing processes in memory

1. List the free blocks with their start and end locations.
2. Place the process in a free block big enough (state which rule the question uses).
3. Split the block: the process takes the start; the rest stays free.
4. When a process ends, mark its block free and join it to any free neighbour.
5. A process can fail to load even when total free space is enough, if no single free block is big enough.

## 3.6.3.1 Classification of programming languages

### Development and levels

Machine code came first, then assembly language (mnemonics instead of binary), then high-level languages. You do not need the "generation" terms.

| Low-level | High-level |
|---|---|
| Machine code, assembly language | For example Python, C#, VB.Net |

### Definitions

- **Machine code** -- instructions in binary that the processor executes directly; specific to one processor's instruction set.
- **Assembly language** -- instructions written as mnemonics (for example LDR, ADD, STR, B); each usually maps to one machine-code instruction; processor specific; translated by an assembler.
- **Imperative high-level language** -- a high-level language in which the commands describe the process that should be followed to carry out a task.

### Low-level versus high-level

| | Advantages | Disadvantages |
|---|---|---|
| Low-level | Direct control of hardware and registers; can be fast and use little memory | Slow to write; hard to read, debug and maintain; not portable between processor types |
| High-level | Quicker to write; easier to read, debug and maintain; portable; structures and libraries available | Must be translated; less direct hardware control; translated code may be larger or slower |

## 3.6.3.2 Types of program translator

### Roles

| Translator | Input | What it does |
|---|---|---|
| Assembler | Assembly language source | Translates it into machine code |
| Compiler | High-level source code | Translates the whole program into object code before it runs |
| Interpreter | High-level source code | Translates and executes one statement at a time, every run; no object code |

### Compiler versus interpreter

| | Compiler | Interpreter |
|---|---|---|
| Translation | Once, before execution | Each time, during execution |
| Object code | Produced | Not produced |
| Speed of running | Usually faster | Usually slower |
| Error reporting | After translating the whole program | Stops at the first error reached |
| Source needed to run? | No, only the object code | Yes, plus the interpreter |

**Choose a compiler** for a finished program run many times or distributed without its source. **Choose an interpreter** while developing and testing, or to run the same source on platforms that each have an interpreter.

### Intermediate language (bytecode)

Why some compilers output bytecode:

1. More portable than machine code.
2. Security checks can be done on it before it runs.
3. Can use less memory than equivalent machine code.

How it is then used: a **virtual machine** interprets it, **or** a **just-in-time (JIT) compiler** converts it into machine code for the computer it is running on.

### Source versus object code

- **Source code** -- the program as written in a high-level or assembly language; not directly executable.
- **Object (executable) code** -- machine code output by a compiler or assembler; directly executable by the processor.

## Must-know distinctions

- System software (supports the computer) versus application software (does the user's task).
- Utility (extra management function) versus operating system (core resource manager).
- Assembler (assembly to machine code) versus compiler (high-level, whole program) versus interpreter (high-level, statement by statement).
- Machine code (binary) versus assembly language (mnemonics): same level, different form.
- Virtual machine (interprets bytecode) versus JIT compiler (turns bytecode into machine code).

## Quick self-test

1. Define software.
2. Is a disk defragmenter application or system software? Name its category.
3. Give two reasons a programmer uses a library.
4. Name the four OS functions in section 3.6.2.
5. Processes X (3 ms) and Y (1 ms) arrive together, X first, with a 2 ms time slice. When does each finish?
6. State one advantage of assembly language over a high-level language.
7. Explain "imperative high-level language".
8. Which translator produces no object code?
9. A games company sells its program without the source code. Which translator suits, and why?
10. Give the two ways bytecode can be executed.
11. Name the two low-level languages.

### Answers

1. The sequences of instructions that are executed using the hardware.
2. System software; it is a utility program.
3. Any two: saves time; routines are already tested so fewer errors; no need to know how the routine works inside.
4. Scheduling, memory allocation, I/O device management, interrupt handling.
5. X runs 0-2, Y runs 2-3 and finishes at **3 ms**, X runs 3-4 and finishes at **4 ms**.
6. Any one: direct control of hardware/registers; can run faster; can use less memory.
7. A high-level language in which the commands describe the process that should be followed to carry out a task.
8. An interpreter.
9. A compiler: it produces object code that runs without the source, so the source stays private, and it usually runs faster.
10. Interpreted by a virtual machine, or converted to machine code by a JIT compiler.
11. Machine code and assembly language.

## Where marks are usually lost

- Calling a virus checker or compression program "application software" -- both are utilities, so system software.
- Listing OS functions without describing them when the question says "describe".
- Writing about virtual memory under memory allocation; only main memory allocation is in this topic.
- Saying an interpreter "converts the program into machine code" -- it executes statements and keeps no object code.
- Mixing up portability: high-level source and bytecode are portable; machine code and assembly are not.
- Giving one reason for bytecode when the question asks for more; there are three in the specification.
- Writing "a virtual machine compiles bytecode" -- a virtual machine interprets it; a JIT compiler compiles it.
- Saying "compiled code has no errors" -- it can still contain logic errors.
- Describing the OS's hiding role vaguely ("makes it easier") without saying what is hidden (hardware complexity) and from whom (users and other software).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.6 Computer systems.
