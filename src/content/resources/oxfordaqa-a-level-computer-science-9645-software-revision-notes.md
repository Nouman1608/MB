---
title: "OxfordAQA A-Level Computer Science (9645): Software -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Software Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6 – Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
  - qualification: "a-level"
    topic: "computer-systems-9645"
    subtopic: "software-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.6.2: system and application software, operating system functions, utilities, libraries and translators."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.6.2 Software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.6 Computer systems). For fuller explanations and traces, see the [software study guide](/resources/oxfordaqa-a-level-computer-science-9645-software/); then practise with the [software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-software-practice/).

## What the specification requires

- Explain **system software** and **application software**.
- Understand the need for, and functions of: **operating systems**, **utility programs**, **libraries** and **translators** (compiler, assembler, interpreter).
- Utilities add functionality to help manage a computer system; examples are a **virus checker** and a **compression program**.
- A role of the operating system is to **hide the complexities of the hardware** from the user and other software.
- Describe the OS functions **scheduling**, **memory allocation**, **I/O device management** and **interrupt handling**. Only **main memory** allocation is needed; **virtual memory** is not required.

## Key terms

| Term | Meaning |
|---|---|
| System software | Software that manages the computer and supports other programs |
| Application software | Software used to carry out a task for its own sake |
| Operating system | System software that manages hardware and provides services to programs and users |
| Utility program | System program that adds functionality to help manage the computer |
| Library | A collection of pre-written, tested routines that programs can use |
| Translator | Software that converts a program from one language to another |
| Scheduling | Deciding which process uses the processor, and for how long |
| Interrupt | A signal that demands the processor's attention |
| Device driver | Software that controls a particular device |

## System or application?

| Item | Type | Reason |
|---|---|---|
| Operating system | System | Manages the computer |
| Virus checker | System (utility) | Helps manage and protect the system |
| Compression program | System (utility) | Adds functionality to manage files |
| Compiler | System (translator) | Converts programs |
| Word processor | Application | User task |
| Web browser | Application | User task |
| Computer game | Application | User task |

## Operating system functions

| Function | What it does | Example |
|---|---|---|
| Hiding hardware complexity | Gives programs and users a simple interface to the hardware | A program saves a file without knowing which drive is used |
| Scheduling | Decides which process uses the processor and for how long | Round robin time slices |
| Memory allocation | Gives each process a region of main memory, protects it and frees it later | 4 GiB shared between the OS and programs |
| I/O device management | Uses drivers and queues to control devices | A print queue |
| Interrupt handling | Suspends the current process, runs a handler, then resumes | A key press |

### Round robin trace (reminder)

Processes A (4 ms), B (6 ms) and C (2 ms), time slice 3 ms. Recomputed.

| Slot | Process | Start | End |
|---|---|---|---|
| 1 | A | 0 | 3 |
| 2 | B | 3 | 6 |
| 3 | C | 6 | 8 |
| 4 | A | 8 | 9 |
| 5 | B | 9 | 12 |

C finishes at 8 ms, A at 9 ms and B at 12 ms.

### Memory allocation reminder

A computer with 8 GiB (8,192 MiB) allocates 1,024 MiB, 2,048 MiB and 1,536 MiB to three processes: 4,608 MiB are used, so 8,192 − 4,608 = **3,584 MiB** are free. When a process ends its memory is freed for reuse.

### Interrupt sequence

1. A device or event raises an interrupt.
2. The processor finishes the current instruction and saves the state of the running process.
3. The OS runs the interrupt handler.
4. The saved process resumes (or another is scheduled).

## Utilities, libraries and translators

| Software | Purpose | Example |
|---|---|---|
| Utility | Adds functionality to manage the system | Virus checker, compression, backup |
| Library | Reusable, tested code for programmers | Mathematics or graphics library |
| Assembler | Assembly language to machine code | |
| Compiler | Whole high-level program to machine code (or intermediate code) | |
| Interpreter | Translates and executes a program statement by statement | |

Compression example: a 120 MiB file compressed to 45 MiB is about 2.67 times smaller, a 62.5% saving.

## Exam traps

- **Say why** an item is system or application.
- **Scheduling is about processor time.** Do not describe it as ordering by importance only.
- **Memory allocation means giving memory to processes.** It does not mean buying memory.
- **Hiding complexity** needs an example of what is hidden.
- **Interrupts** are signals, not errors.
- **Libraries supply code; translators convert code.**
- **Do not discuss virtual memory.** It is not required.

## Quick self-test

1. Define system software.
2. Define application software.
3. Give two roles of an operating system.
4. What does scheduling do?
5. What does memory allocation do?
6. How does an operating system manage printing from several programs?
7. What happens when an interrupt arrives?
8. Give two examples of utility programs.
9. What is a library?
10. Name the three types of translator.
11. In the round robin trace above, when does C finish?
12. How much of 8 GiB is free if 4,608 MiB is allocated?

### Answers

1. Software that manages and controls the computer system and supports other software.
2. Software that lets the user carry out a task, such as a word processor.
3. Any two of: hide hardware complexity, scheduling, memory allocation, I/O management, interrupt handling.
4. It decides which process uses the processor and for how long.
5. It gives each process a region of main memory, protects it and frees it when the process ends.
6. It uses a driver and a queue (spooler) so jobs are sent to the printer one at a time.
7. The current process is suspended, the interrupt handler runs, and the process then resumes.
8. For example, a virus checker and a compression program.
9. A collection of pre-written, tested code that programmers reuse.
10. Assembler, compiler, interpreter.
11. 8 ms.
12. 3,584 MiB.

## More on this topic

- [Software study guide](/resources/oxfordaqa-a-level-computer-science-9645-software/)
- [Software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-software-practice/)
- [Hardware and software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.2 Software.
