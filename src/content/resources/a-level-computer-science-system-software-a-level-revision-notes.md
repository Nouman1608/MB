---
title: "A Level Computer Science: System Software (A Level) — Revision Notes (Cambridge 9618)"
seoTitle: "Cambridge 9618 A Level System Software Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 16
syllabusTopics:
  - qualification: "a-level"
    topic: "a-system-software"
  - qualification: "a-level"
    topic: "a-system-software"
    subtopic: "purposes-of-an-operating-system-os"
  - qualification: "a-level"
    topic: "a-system-software"
    subtopic: "translation-software"
description: "Notes on process states, FCFS, SJF, SRT and round robin, kernel interrupts, paging, thrashing, compiler stages, BNF and RPN for Cambridge A Level 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These notes condense Topic 16 System Software, A Level content in Cambridge International AS & A Level Computer Science 9618. The OS half covers resource use, the user interface, process states, the four named scheduling routines, the kernel as interrupt handler, and virtual memory with paging, segmentation, page replacement and thrashing. The translation half covers interpreters, the four compilation stages, BNF and syntax diagrams, and Reverse Polish Notation. It is examined in Paper 3.

Related: [System Software (A Level) study guide](/resources/a-level-computer-science-system-software-a-level/) · [System Software (A Level) practice questions](/resources/a-level-computer-science-system-software-a-level-practice/) · [AS System Software revision notes](/resources/cambridge-a-level-computer-science-system-software-revision-notes/)

## Syllabus coverage

- **16.1 Purposes of an OS**: maximising the use of resources; how the user interface hides hardware complexity; process management (multi-tasking, processes, running/ready/blocked states, scheduling and the routines round robin, SJF, FCFS and SRT, the kernel as interrupt handler and low-level scheduling); virtual memory, paging and segmentation, their difference, page replacement and disk thrashing.
- **16.2 Translation Software**: how an interpreter executes without producing a translated version; lexical analysis, syntax analysis, code generation and optimisation; grammar in syntax diagrams or BNF; using RPN to evaluate expressions.

## Key terms

| Term | Meaning |
|---|---|
| Process | A program in execution, with its current state |
| Multi-tasking | Several processes in memory, sharing the processor so they appear to run at once |
| Time slice (quantum) | The fixed time a process may run before round robin switches to the next |
| Pre-emptive | The running process can be stopped so another runs |
| Kernel | The core of the OS that stays in memory and handles interrupts and low-level scheduling |
| Page / page frame | Fixed-size block of a process's logical memory / of physical RAM |
| Segment | Variable-size logical block of a program |
| Page fault | A process needs a page that is not in RAM |
| Thrashing | Pages are swapped so often that more time goes on swapping than on processing |
| Token | A unit of source code (keyword, identifier, operator, constant) produced by lexical analysis |

## Process states

| From → To | Why |
|---|---|
| Ready → Running | Selected by the scheduler |
| Running → Ready | Time slice ends (timer interrupt) or pre-empted |
| Running → Blocked | Waiting for I/O or another event |
| Blocked → Ready | The event completes (I/O interrupt) |

Not allowed: blocked → running, ready → blocked.

## Scheduling routines

| Routine | Pre-emptive? | Picks next | Good for | Weakness |
|---|---|---|---|---|
| FCFS | No | Earliest arrival | Simplicity | Short jobs wait behind long ones |
| SJF | No | Shortest total time | Low average wait | Needs run times; long jobs can starve |
| SRT | Yes | Least time remaining, checked whenever a process arrives | Fastest completion of short jobs | Long jobs can starve; more switching |
| Round robin | Yes | Next in a circular queue, for one time slice | Fair, responsive for interactive users | Switching overhead |

## Worked example: shortest remaining time

A arrives at 0 needing 5; B arrives at 1 needing 2; C arrives at 4 needing 1.

| Time | Event | Running | Remaining after |
|---|---|---|---|
| 0–1 | Only A present | A | A 4 |
| 1–3 | B arrives (2 < 4), pre-empts A | B | B 0 (B finishes at 3) |
| 3–4 | A resumes | A | A 3 |
| 4–5 | C arrives (1 < 3), pre-empts A | C | C 0 (C finishes at 5) |
| 5–8 | A resumes | A | A 0 (A finishes at 8) |

Waiting times (finish − arrival − run): A = 8 − 0 − 5 = 3; B = 3 − 1 − 2 = 0; C = 5 − 4 − 1 = 0.

## Kernel and interrupts

1. An interrupt arrives (timer at the end of a slice, or an I/O device).
2. The kernel saves the running process's state (registers, program counter) in its process control block.
3. The kernel's interrupt handler deals with the cause (e.g. marks a blocked process as ready).
4. The low-level scheduler picks the next ready process and restores its state; it runs.

## Paging vs segmentation

| | Paging | Segmentation |
|---|---|---|
| Block size | Fixed | Variable |
| Based on | Physical division of memory | Logical parts of the program |
| Table | Page table: page → frame | Segment map table: segment → start address and length |
| Programmer aware? | No | Yes |

**Page replacement**: on a page fault with no free frame, choose a victim (e.g. first in first out, least recently used), write it back to disk if it has changed, load the needed page, update the page table.

**Thrashing**: too little RAM for the active processes → pages swapped out are needed again at once → constant swapping → processor mostly idle waiting for the disk.

## Interpreter vs compiler stages

**Interpreter**: for each statement in turn, analyse it, then execute it by calling the interpreter's own routines; nothing translated is kept, so loops are re-analysed each time.

| Compiler stage | What it does |
|---|---|
| Lexical analysis | Removes white space and comments; splits code into tokens; builds the symbol table; reports illegal symbols |
| Syntax analysis | Checks the tokens against the grammar rules; builds a parse tree; reports syntax errors |
| Code generation | Produces object code from the parsed program |
| Optimisation | Makes the object code faster or smaller, e.g. removes redundant code |

## BNF and syntax diagrams

- `::=` "is defined as"; `|` "or"; `<name>` a non-terminal; other symbols are terminals.
- Repetition needs recursion: `<number> ::= <digit> | <digit><number>`.
- `|` goes only **between alternatives**, never at the start or end of a list or between items that must follow each other.
- Syntax diagram: follow the arrows; a branch is an alternative; a loop back is repetition.

**Example**: `<id> ::= <letter> | <letter><id>` with `<letter> ::= X|Y|Z`. Valid: X, ZZY. Invalid: X1 (1 is not a letter), an empty string (at least one letter is required).

## Reverse Polish Notation

| Infix | RPN |
|---|---|
| a + b | a b + |
| (a + b) × c | a b + c × |
| a + b × c | a b c × + |
| (a − b) / (c + d) | a b − c d + / |

**Evaluate with a stack**: push operands; for an operator, pop two values (first popped is the right operand), calculate, push the result.

Example: `9 3 / 2 4 × +` → push 9, 3; `/` gives 3; push 2, 4; `×` gives 8; `+` gives 3 + 8 = **11**.

## Common mistakes and exam traps

- Saying SRT runs "the shortest job first" without explaining pre-emption when a shorter job arrives.
- Using blocked → running.
- Virtual memory confused with virtual machines (June 2024).
- Lexical and syntax analysis merged, or interpretation described as compilation (November 2024, June 2025).
- BNF separators placed at the end of a list or between items in a sequence (November 2024); BNF written without recursion, so length is fixed.
- In RPN, operands applied in the wrong order for − and /.

## Frequently asked questions

**What is the difference between SJF and SRT?**
SJF is non-pre-emptive: once a job starts, it finishes. SRT is pre-emptive: if a new process needs less time than the running one has left, it takes over.

**Why does a compiler build a symbol table?**
To record each identifier with information such as its type and address, so later stages can check its use and generate code for it.

**Does optimisation change what a program does?**
No. It changes how the object code achieves the result, making it faster or smaller without changing the output.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 16 System Software (16.1 and 16.2). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
