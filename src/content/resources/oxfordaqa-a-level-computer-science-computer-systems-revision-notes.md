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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These notes condense topic 6, Computer systems, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. They cover sections 3.6.1 to 3.6.3.2, all International AS content listed under Unit 2: Concepts and principles of computer science. For full explanations and worked examples, use the [Computer systems study guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/).

Other links: [practice questions](/resources/oxfordaqa-a-level-computer-science-computer-systems-practice/), [course hub](/boards/oxfordaqa/a-level/computer-science/), [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) and the [free diagnostics](/diagnostics/).

## 3.6.1 Hardware and software

| Term | Definition to learn |
|---|---|
| Hardware | The electronic components of a computer system |
| Software | The sequences of instructions that are executed using the hardware |

Relationship: hardware needs software to do anything useful; software needs hardware to execute it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-computer-systems--01-software-map.webp" width="900" height="930" alt="A stack. At the bottom is hardware, the electronic components. Above it is software, the instructions the hardware executes. Software has two layers: system software, which contains the operating system, utility programs, libraries and translators, and application software on top. Four examples from a laptop are matched with arrows: a video editor is application software, a compression program is a utility, a maths library is a library, and a C# compiler is a translator." loading="lazy">
  <figcaption>Four laptop programs sorted into application software or the kinds of system software.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-computer-systems--02-os-hides-hardware.webp" width="900" height="910" alt="A program asks the operating system to write data to notes.txt. The operating system passes the request through a device driver to whatever storage device is fitted. Machine 1 has storage device A and machine 2 has storage device B. The same program works on both because the operating system hides the details of the hardware." loading="lazy">
  <figcaption>The same program works on different storage devices because the OS hides the hardware.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-computer-systems--03-round-robin.webp" width="900" height="756" alt="Three processes P1, P2 and P3 need 5, 3 and 6 milliseconds of processor time. They wait in a ready queue and each gets a 2 millisecond time slice in turn; a process that is not finished goes to the back of the queue. The timeline shows P1 from 0 to 2, P2 2 to 4, P3 4 to 6, P1 6 to 8, P2 8 to 9, P3 9 to 11, P1 11 to 12 and P3 12 to 14. P2 finishes at 9 ms, P1 at 12 ms and P3 at 14 ms. Round robin is used only to show the idea of scheduling." loading="lazy">
  <figcaption>Round robin with a 2 ms slice: P2 finishes at 9 ms, P1 at 12 ms and P3 at 14 ms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-computer-systems--04-memory-allocation.webp" width="900" height="920" alt="Four snapshots of main memory, locations 0 to 99, with locations 0 to 15 used by the operating system. Step 1: process A (30 locations) is placed at 16 to 45, B (20) at 46 to 65 and C (25) at 66 to 90, leaving 91 to 99 free. Step 2: A ends and 16 to 45 become free. Step 3: D (12) goes in 16 to 27 and E (15) in 28 to 42, leaving free blocks of 3 and 9 locations. Step 4: process F needs 10 locations; 12 locations are free in total but no single block holds 10, so F cannot be loaded yet." loading="lazy">
  <figcaption>First-fit allocation leaves free blocks of 3 and 9, so process F of 10 cannot be loaded.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-computer-systems--05-assembly-three-steps.webp" width="900" height="860" alt="The statement total ← total + 5, where total is held in memory location 200, becomes three assembly instructions. LDR R1, 200 copies the value 37 from location 200 into register R1. ADD R1, R1, #5 adds 5 so R1 holds 42. STR R1, 200 stores R1 back in location 200, which now holds 42. One high-level statement became three instructions, and the programmer had to manage registers and addresses directly." loading="lazy">
  <figcaption>One high-level statement becomes LDR, ADD and STR, changing 37 into 42.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-computer-systems--06-three-translators.webp" width="900" height="860" alt="Three lanes show what each translator takes in and produces. An assembler translates assembly language into machine code. A compiler translates the whole source program once, before it runs, into object code; the object code can then be run again and again without translating it again. An interpreter translates and executes the program one statement at a time while it runs; it produces no object code, so the source is translated again on every run." loading="lazy">
  <figcaption>What an assembler, a compiler and an interpreter take in and produce.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-computer-systems--07-bytecode-paths.webp" width="900" height="990" alt="Some compilers produce bytecode, an intermediate language, instead of machine code. Bytecode is then either interpreted by a virtual machine, or converted to machine code by a just-in-time (JIT) compiler for the computer it is running on, and then run. Three reasons for bytecode are given: it is more portable than machine code, security checks can be made on it before it runs, and it can use less memory than equivalent machine code." loading="lazy">
  <figcaption>Bytecode is either interpreted by a virtual machine or converted by a JIT compiler.</figcaption>
</figure>


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
9. A firm sells its stock-control program without the source code. Which translator suits, and why?
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

## Frequently asked questions

**Is a virus checker system software or application software?**
A virus checker is a utility program, and utility programs are system software. Classifying utilities such as virus checkers or compression programs as application software is a common way to lose marks.

**What are the four functions of an operating system in OxfordAQA 9645?**
Section 3.6.2 lists scheduling, memory allocation, I/O device management and interrupt handling. In a "describe" question, explain what the OS does for each rather than just naming them.

**Is virtual memory in the OxfordAQA A-level Computer Science specification?**
Not in this topic. The 9645 specification excludes virtual memory here, so memory allocation answers should cover allocation of main memory only.

**Why do some compilers produce bytecode?**
The specification gives three reasons: bytecode is more portable than machine code, security checks can be performed on it before it runs, and it can use less memory than equivalent machine code. It is then interpreted by a virtual machine or converted to machine code by a just-in-time compiler.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.6 Computer systems.
