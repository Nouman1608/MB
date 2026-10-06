---
title: "OxfordAQA A-Level Computer Science: Computer systems (9645)"
seoTitle: "OxfordAQA A-Level CS Computer Systems Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA International AS and A-level Computer Science topic 6: hardware, system software, the OS, language levels and translators."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches topic 6, Computer systems, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It covers specification sections 3.6.1 to 3.6.3.2. All of it is International AS content, listed under Unit 2: Concepts and principles of computer science, a written exam, so it also forms part of the full International A-level.

Use it with the [revision notes](/resources/oxfordaqa-a-level-computer-science-computer-systems-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-computer-science-computer-systems-practice/). The [course hub](/boards/oxfordaqa/a-level/computer-science/) lists every topic, and the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) lets you tick off outcomes. To find your weak areas first, try one of the [free diagnostics](/diagnostics/).

## What this topic covers

| Section | What you must be able to do |
|---|---|
| 3.6.1 | Define hardware and software and explain how they depend on each other |
| 3.6.2 | Explain system and application software; the need for and functions of operating systems, utility programs, libraries and translators; how the OS hides hardware complexity; describe scheduling, memory allocation, I/O device management and interrupt handling |
| 3.6.3.1 | Show awareness of how language types developed; classify machine code and assembly language as low-level; describe both; compare them with high-level languages; explain "imperative high-level language" |
| 3.6.3.2 | Explain the roles of assembler, compiler and interpreter; compare compilation with interpretation and say when each suits; explain intermediate languages such as bytecode; distinguish source code from object (executable) code |

The specification excludes the terms first, second and third generation, and virtual memory.

## 3.6.1 Hardware and software

Use the specification's definitions:

- **Hardware** is the electronic components of a computer system.
- **Software** is the sequences of instructions that are executed using the hardware.

The relationship runs both ways. Hardware on its own does nothing useful: a processor needs instructions to execute. Software cannot run on its own: instructions only have an effect when hardware executes them.

## 3.6.2 Software

### System software and application software

- **Application software** lets a user carry out a task: a spreadsheet, a photo editor, a game.
- **System software** manages and supports the computer itself, so that application software can run. The specification lists four kinds: operating systems, utility programs, libraries and translators.

**Worked example: classify the software.** A laptop has a video editor, a compression program, a C# compiler and a maths library. The video editor does a user task: application software. The compression program helps manage the computer: a utility (system software). The compiler is a translator and the maths library is a library: both system software.

### Why each kind of system software is needed

- **Operating system (OS):** manages the hardware and gives programs and users a consistent way to use it.
- **Utility programs:** add extra functions to help manage the computer system. Examples include a virus checker, a compression program, a backup program and a disk defragmenter.
- **Libraries:** collections of pre-written, tested subroutines (such as maths routines) that programmers call instead of writing the code again, saving time and reducing errors. Subroutines themselves are covered in [Procedural programming](/resources/a-level-oxfordaqa-computer-science-procedural-programming/).
- **Translators:** convert program code into a form the processor can execute. The three types (compiler, assembler, interpreter) are covered in 3.6.3.2 below.

### The OS hides the complexity of the hardware

A key role of the OS is to hide the complexities of the hardware from the user and from other software. A program that saves a file asks the OS to "write this data to notes.txt". It does not need to know which storage device is fitted or how to control it, so the same program works on machines with different hardware.

### Functions of an operating system

**Scheduling.** Several processes may want the processor at once. The scheduler decides which runs next and for how long, aiming to keep the processor busy, share time fairly and stay responsive.

**Worked example: a round-robin schedule.** The specification does not name a particular scheduling method; round robin is used here only to show the idea. Each process gets a fixed time slice of 2 ms in turn. If it is not finished, it goes to the back of the queue. Three processes arrive together: P1 needs 5 ms, P2 needs 3 ms and P3 needs 6 ms of processor time.

```
Time (ms)  0-2  2-4  4-6  6-8  8-9  9-11  11-12  12-14
Process    P1   P2   P3   P1   P2   P3    P1     P3
```

P2 finishes at 9 ms (it needs only 1 ms in its second turn), P1 at 12 ms and P3 at 14 ms, the total of 5 + 3 + 6. No process waits for another to finish completely.

**Memory allocation.** A running program and its data must be in main memory. The OS decides where each process goes, records which areas are used and free, stops processes overwriting each other's areas, and reclaims memory when a process ends.

**Worked example: allocating main memory.** Main memory has locations 0 to 99, and the OS uses 0 to 15. The OS places each process in the first free block big enough (one possible method).

1. Process A (30 locations) goes in 16–45; B (20) in 46–65; C (25) in 66–90. Locations 91–99 (9) are free.
2. A ends. The OS marks 16–45 as free.
3. D (12) goes in 16–27. Process E (15) goes in 28–42. Free blocks are now 43–45 (3 locations) and 91–99 (9 locations).
4. Process F needs 10 locations. There are 12 free locations in total, but no single free block holds 10, so F cannot be loaded yet.

**I/O device management.** The OS controls input and output devices such as keyboards, printers and storage drives. It uses device drivers so programs can use a device through standard requests, and it handles requests from several programs for the same device (for example, queuing print jobs).

**Interrupt handling.** An interrupt is a signal that something needs the processor's attention, such as a key press or an error. The OS provides interrupt service routines (ISRs) to deal with each type and lets the interrupted process carry on afterwards. How interrupts affect the Fetch-Execute cycle belongs to section 3.7.3.

## 3.6.3.1 Classification of programming languages

### How language types developed

Early computers were programmed directly in **machine code**. Writing long strings of 0s and 1s was slow and error-prone, so **assembly language** followed, replacing each binary instruction with a mnemonic. Later, **high-level languages** let programmers write statements closer to English and mathematics, with one statement standing for many machine instructions.

Low-level languages are machine code and assembly language. Python, C# and VB.Net are high-level.

### Describing machine code and assembly language

- **Machine code** is instructions expressed in binary, which the processor can execute directly. Each processor type has its own instruction set, so machine code is specific to that processor.
- **Assembly language** expresses the same instructions as mnemonics such as LDR, ADD and STR. Each assembly instruction usually corresponds to one machine-code instruction, so it is also processor specific. It must be translated by an assembler before it can run.

**Worked example: one high-level line as assembly.** The statement `total ← total + 5`, with `total` held in memory location 200, could be written in the OxfordAQA assembly language as:

```
LDR R1, 200       ; copy the value in location 200 into register 1
ADD R1, R1, #5    ; add 5 to register 1
STR R1, 200       ; store register 1 back in location 200
```

If location 200 held 37, it holds 42 afterwards. One high-level statement became three instructions, and the programmer had to manage registers and addresses directly. Assembly programming itself is section 3.8.

### Low-level versus high-level

| | Machine code and assembly | High-level languages |
|---|---|---|
| Advantages | Direct control of the hardware and registers; code can be very fast and compact; no compiler needed for machine code | Faster to write, read and maintain; easier to debug; portable between processor types once translated for each; built-in structures and libraries |
| Disadvantages | Slow to write; hard to read and debug; tied to one processor type | Needs translating; less direct control of hardware; the translated code may be larger or slower than hand-written low-level code |

### Imperative high-level language

An **imperative high-level language** is a high-level language in which the commands describe the process that should be followed to carry out a task. The program is a sequence of steps that change the program's state, for example:

```
total ← 0
FOR each mark IN marks
    total ← total + mark
ENDFOR
OUTPUT total
```

(This pseudo-code is language-neutral; it is not an official OxfordAQA notation.)

## 3.6.3.2 Types of program translator

### The three translators

- **Assembler:** translates assembly language into machine code.
- **Compiler:** translates the whole high-level program (source code) into object code before it runs. The object code can be run again without translating again.
- **Interpreter:** translates and executes a high-level program one statement at a time while it runs. No object code is produced, so the source is translated again on every run.

### Compilation versus interpretation

| | Compiler | Interpreter |
|---|---|---|
| When translation happens | Once, before running | Every time, during running |
| Output | Object (executable) code | None kept; statements are executed |
| Running speed | Usually faster | Usually slower |
| Errors | Reported for the whole program; no object code until fixed | Program runs until the first error is reached |

**When each is appropriate.** Compile a finished product that will be run many times or sold, where speed matters and the source should stay private. Interpret during development, to run part of a program straight away and find errors line by line, or to run the same source on different platforms that each have an interpreter.

### Intermediate languages such as bytecode

Some compilers produce an intermediate language such as **bytecode** as their final output rather than machine code. The specification gives three reasons:

1. Intermediate code is more portable than machine code: the same bytecode runs on any platform that can run it.
2. Security checks can be performed on the intermediate code before it is executed.
3. Intermediate code can use less memory than equivalent machine code.

The bytecode is then used by either a **virtual machine**, which interprets the bytecode to execute it, or a **just-in-time (JIT) compiler**, which converts it into machine code suitable for the computer it is running on. Java source is compiled to bytecode that is typically JIT-compiled before it runs, and C# is compiled to an intermediate language run by .NET.

**Worked example: seeing bytecode.** The standard Python interpreter (CPython) first compiles source to bytecode, then its virtual machine runs that bytecode. Python's `dis` module shows it. For

```python
def area(w, h):
    return w * h
```

Python 3.11 lists these bytecode instructions (other versions differ):

```
RESUME       0
LOAD_FAST    0 (w)
LOAD_FAST    1 (h)
BINARY_OP    5 (*)
RETURN_VALUE
```

The virtual machine executes these; they are not machine code.

### Source code and object code

- **Source code** is the program as written by the programmer, in a high-level or assembly language. The processor cannot execute it directly.
- **Object (executable) code** is the machine-code version produced by a compiler or assembler, which the processor can execute.

## Common errors

- Calling a virus checker application software. It is a utility, so it is system software.
- Saying an interpreter "produces machine code". It produces no object code; it executes each statement as it goes.
- Describing virtual memory under memory allocation. The specification excludes it; describe how main memory is allocated.
- Giving only "portable" when asked why bytecode is used. Learn all three reasons and both ways it is used.

## Next steps

Condense this with the [revision notes](/resources/oxfordaqa-a-level-computer-science-computer-systems-revision-notes/), then test yourself on the [practice questions](/resources/oxfordaqa-a-level-computer-science-computer-systems-practice/). For how written theory papers reward precise terms, see [exam preparation for this course](/resources/oxfordaqa-a-level-computer-science-exam-preparation/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.6 Computer systems.
