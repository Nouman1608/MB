---
title: "A Level Computer Science: System Software (A Level) (Cambridge 9618)"
seoTitle: "Cambridge 9618 A Level System Software Study Guide"
resourceType: "study-guides"
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
description: "Study guide to process states, scheduling, interrupts, paging, segmentation, thrashing, compiler stages, BNF and Reverse Polish Notation for Cambridge 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 16 System Software takes the AS ideas about operating systems and translators to A Level depth. You need to explain how an operating system shares the processor and memory between processes (process states, scheduling routines, interrupts, virtual memory, paging and segmentation), and how translation software works (interpreters, the stages of compilation, BNF and syntax diagrams, and Reverse Polish Notation). In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 3.

Related: [System Software (A Level) revision notes](/resources/a-level-computer-science-system-software-a-level-revision-notes/) · [System Software (A Level) practice questions](/resources/a-level-computer-science-system-software-a-level-practice/) · [AS System Software study guide](/resources/cambridge-a-level-computer-science-system-software-study-guide/)

## Where this fits in 9618

AS Topic 5 introduced the operating system's management tasks and the compiler-versus-interpreter comparison. Topic 16 explains the mechanisms behind them. Paper 3 (1 hour 30 minutes, 75 marks) assesses sections 13 to 20; scheduling tables, BNF and RPN are common calculation-style questions.

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 16.1 | Show understanding of how an OS can maximise the use of resources |
| 16.1 | Describe the ways in which the user interface hides the complexities of the hardware from the user |
| 16.1 | Show understanding of process management: multi-tasking and a process; the states running, ready and blocked; the need for scheduling and the function and benefits of round robin, shortest job first, first come first served and shortest remaining time; how the kernel acts as an interrupt handler and how interrupt handling manages low-level scheduling |
| 16.1 | Show understanding of virtual memory, paging and segmentation: the concepts, the difference between paging and segmentation, how pages can be replaced, how disk thrashing can occur |
| 16.2 | Show understanding of how an interpreter can execute programs without producing a translated version |
| 16.2 | Show understanding of the stages of compilation: lexical analysis, syntax analysis, code generation and optimisation |
| 16.2 | Show understanding of how a language's grammar can be expressed using syntax diagrams or Backus-Naur Form (BNF) |
| 16.2 | Show understanding of how Reverse Polish Notation (RPN) can be used to evaluate expressions |

## 16.1 How does an OS maximise the use of resources?

The processor is far faster than input and output devices, and main memory is limited. The OS keeps every resource busy:

- **Processor**: while one process waits for input or output, the scheduler gives the processor to another, so it is rarely idle.
- **Memory**: memory is allocated to processes as they need it and freed when they finish; virtual memory lets more processes run than would fit in RAM.
- **Input/output**: devices signal with interrupts instead of being polled, buffers and spooling let slow devices work in the background, and access to shared devices is queued.

### How does the user interface hide the hardware?

The user works with windows, icons, files and folders, not with disk sectors or device registers. The OS provides device drivers, so a program prints by asking the OS to print rather than by controlling the printer; it presents storage as named files in directories, hiding where the blocks are on the disk; and it offers a consistent interface (for example a GUI) and system calls, so applications behave in the same way on different hardware.

## What is process management?

A **process** is a program that is being executed, together with its current state (register values, program counter, memory allocated). **Multi-tasking** means several processes are in memory and appear to run at the same time because the OS switches the processor between them very rapidly.

### Process states

| Transition | Cause |
|---|---|
| Ready → Running | The scheduler selects the process and gives it the processor |
| Running → Ready | Its time slice ends, or a higher-priority process pre-empts it |
| Running → Blocked | It must wait for an event, such as input or output to complete |
| Blocked → Ready | The event it was waiting for happens (signalled by an interrupt) |

A blocked process cannot go straight to running; it must first become ready.

### Why is scheduling needed?

The scheduler decides which ready process runs next, so that the processor is used fully, every process gets a fair share, response times for interactive users stay short, and no process waits for ever (starvation).

| Routine | How it works | Benefit | Drawback |
|---|---|---|---|
| First come first served (FCFS) | Processes run in order of arrival until they finish (non-pre-emptive) | Simple and fair in order | A long job delays every short job behind it |
| Shortest job first (SJF) | The waiting process with the shortest total time runs next, to completion | Minimises average waiting time for jobs present together | Needs burst times in advance; long jobs may starve |
| Shortest remaining time (SRT) | Pre-emptive: whenever a process arrives, the one with the least time left runs | Short jobs finish very quickly | Frequent switching; long jobs may starve; needs time estimates |
| Round robin (RR) | Each process gets a fixed time slice (quantum) in turn, then rejoins the back of the queue | Every process gets regular processor time; good response for interactive users | Overhead of frequent switching; long jobs take longer to finish |

### Worked example: comparing scheduling routines

Three processes: P1 arrives at 0 needing 6 units, P2 arrives at 1 needing 3, P3 arrives at 2 needing 1. Waiting time = finish time − arrival time − run time.

- **FCFS**: P1 0–6, P2 6–9, P3 9–10. Waits: 0, 5, 7. Average 4.
- **SJF**: only P1 is present at 0, so P1 0–6; then the shortest, P3 6–7; then P2 7–10. Waits: 0, 6, 4. Average 3.33.
- **SRT**: P1 runs 0–1; P2 arrives needing 3, less than P1's remaining 5, so P2 runs 1–2; P3 arrives needing 1, less than P2's remaining 2, so P3 runs 2–3; then P2 3–5 and P1 5–10. Finish times 10, 5, 3. Waits: 4, 1, 0. Average 1.67.
- **Round robin, quantum 2** (a process arriving as another's slice ends joins the queue first): P1 0–2, P2 2–4, P3 4–5, P1 5–7, P2 7–8, P1 8–10. Waits: 4, 4, 2. Average 3.33.

SRT gives the lowest average wait here because it always finishes the shortest work first; FCFS is worst because the long P1 holds up the others.

### How does the kernel handle interrupts and low-level scheduling?

The **kernel** is the core of the OS that stays in memory. It acts as the **interrupt handler**: when an interrupt arrives, the current process's state is saved (in its process control block), the kernel identifies the source and runs the appropriate routine, then the **low-level scheduler** chooses which ready process runs next and its state is restored. A **timer interrupt** marks the end of a time slice, which is how round robin pre-empts a process; an **I/O interrupt** tells the kernel that a blocked process's input or output is complete, so that process moves to ready.

## How do virtual memory, paging and segmentation work?

**Virtual memory** uses secondary storage as if it were extra main memory, so a process can run even if not all of it fits in RAM at once. Only the parts in use need to be in RAM.

- **Paging** divides a process's logical memory into fixed-size **pages** and physical memory into **page frames** of the same size. A **page table** maps each page to the frame holding it, or shows it is on disk. Pages need not be in adjacent frames.
- **Segmentation** divides a process into variable-sized **segments** that match logical parts of the program, such as a procedure or a data structure. A **segment map table** holds each segment's start address and length.

| | Paging | Segmentation |
|---|---|---|
| Size of block | Fixed, set by the OS / hardware | Variable, set by the program's structure |
| Division based on | Physical memory size | Logical units of the program |
| Visible to the programmer | No | Yes |
| Wasted space | Unused part of the last page (internal fragmentation) | Gaps between segments (external fragmentation) |

### How are pages replaced?

When a process needs a page that is not in RAM, a **page fault** occurs. If no frame is free, the OS chooses a page to remove using a replacement algorithm, for example **first in first out** (the page loaded longest ago) or **least recently used** (the page not used for the longest time). If the removed page has been changed, it is written back to disk; the required page is loaded into the freed frame and the page table is updated.

### What is disk thrashing?

If RAM is too small for the processes running, a page that has just been swapped out is needed again almost at once, so it is swapped straight back in, forcing out another page that is also about to be needed. The computer spends more time swapping pages between RAM and disk than executing instructions, and performance falls sharply. This is **disk thrashing**. It can be reduced by running fewer processes or adding RAM.

## 16.2 How does an interpreter execute a program without translating it?

An interpreter takes one statement at a time, analyses it (checking its syntax), and then carries it out by calling its own pre-written routines for that kind of statement. No object code is produced or saved, so the statement must be analysed again every time it runs, including each pass of a loop.

## What are the stages of compilation?

1. **Lexical analysis**: removes white space and comments, breaks the source code into **tokens** (keywords, identifiers, operators, constants), and builds the **symbol table** of identifiers. Unknown symbols are reported.
2. **Syntax analysis** (parsing): checks that the sequence of tokens follows the grammar rules of the language, usually building a parse tree, and reports syntax errors. Further information (such as data types) is added to the symbol table.
3. **Code generation**: produces object code (machine code or intermediate code) from the parsed program.
4. **Optimisation**: improves the object code so it runs faster or uses less memory, for example by removing redundant instructions or moving a calculation that does not change out of a loop.

Lexical and syntax analysis are separate stages (November 2024 and June 2025 examiner reports).

## How is grammar written in BNF and syntax diagrams?

**Backus-Naur Form** defines each element of a language with a rule:

```
<digit>   ::= 0|1|2|3|4|5|6|7|8|9
<letter>  ::= A|B|C|D
<integer> ::= <digit>|<digit><integer>
<code>    ::= <letter><integer>
```

`::=` means "is defined as", `|` separates alternatives, and angle brackets name a non-terminal. The rule for `<integer>` is **recursive**: it refers to itself, so an integer can have any number of digits. A valid `<code>` is a letter followed by one or more digits, such as C7 or A2026.

A **syntax diagram** shows the same rules as a flow of boxes and arrows: rectangles for non-terminals, rounded boxes or circles for terminal symbols, a fork for alternatives, and a loop back for repetition.

## How does Reverse Polish Notation evaluate expressions?

In **RPN** (postfix notation) operators come after their operands, so brackets and precedence rules are not needed. Infix (a + b) × c becomes `a b + c ×`; a − b × c becomes `a b c × −`.

Evaluation uses a **stack**: read left to right; push each operand; when an operator appears, pop two values, apply the operator (the second value popped is the left operand) and push the result. The value left at the end is the answer.

Evaluate `7 2 3 × − 4 +`:

| Symbol | Action | Stack (bottom → top) |
|---|---|---|
| 7 | Push | 7 |
| 2 | Push | 7, 2 |
| 3 | Push | 7, 2, 3 |
| × | Pop 3 and 2, push 2 × 3 = 6 | 7, 6 |
| − | Pop 6 and 7, push 7 − 6 = 1 | 1 |
| 4 | Push | 1, 4 |
| + | Pop 4 and 1, push 1 + 4 = 5 | 5 |

The result is 5, the value of (7 − 2 × 3) + 4.

## Common mistakes

- Treating blocked → running as a valid transition.
- Describing SRT as "shortest job first" without saying it is pre-emptive.
- Confusing virtual memory with virtual machines (June 2024).
- Saying thrashing is simply "using virtual memory"; it is excessive swapping that replaces useful processing.
- Merging lexical and syntax analysis, or describing compilation when the question asks about an interpreter.
- In BNF, putting a separator at the start or end of a list, or between items in a sequence (November 2024).

## Frequently asked questions

**Why is round robin good for interactive systems?** Every process gets the processor regularly, so no user waits long for a response, even when a long job is running.

**What is the difference between a page and a segment?** A page is a fixed-size block chosen by the system; a segment is a variable-size block matching a logical part of the program.

**Why is RPN useful to a compiler or interpreter?** It can be evaluated in one left-to-right pass with a stack, with no need to consider brackets or operator precedence.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 16 System Software (16.1 Purposes of an Operating System, 16.2 Translation Software). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
