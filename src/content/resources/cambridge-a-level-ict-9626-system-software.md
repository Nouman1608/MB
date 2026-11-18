---
title: "Cambridge A Level Information Technology (9626): System software"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "system-software"
description: "Cambridge 9626 IT section 2.2 study guide: compilers, interpreters, cross compilers, linkers, device drivers and operating systems, with worked scenarios."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches **section 2.2 System software** of Topic 2 Hardware and software in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [Hardware and software overview](/resources/a-level-cambridge-ict-hardware-and-software/) introduces the topic; this page explains each type of system software in the depth the syllabus asks for. Use it with the [system software revision notes](/resources/cambridge-a-level-ict-9626-system-software-revision-notes/) and the [system software practice questions](/resources/cambridge-a-level-ict-9626-system-software-practice/).

## What section 2.2 covers

| Syllabus point | What you must be able to do |
|---|---|
| Types and functions | Describe compilers, interpreters, linkers, device drivers, operating systems and utilities |
| Uses | Explain how a high-level language is translated to run on different computer systems using interpreters and cross compilers |
| Evaluation | Give advantages and disadvantages of the different types |

**System software** is software that runs and manages the computer itself, or helps programs run on it, rather than doing a user's task directly. A word processor is application software; the operating system it runs on and the compiler that built it are system software. The syllabus lists **utilities** as a type of system software; section 2.3 studies them in detail, so this page only places them in the family.

## Translators: why they are needed

Programmers write in **high-level languages**, which use English-like words and are easy for people to read. A processor can only execute **machine code**, binary instructions specific to its own design. A **translator** converts one into the other. Section 2.2 names two translators and one variant.

### Compilers

A compiler translates the **whole** source code into machine code (object code) in one go, before the program runs. The result is an executable file that can be run again and again without the compiler.

- If the source contains errors, the compiler reports them after it has attempted the whole program, and no executable is produced until they are fixed.
- The executable runs quickly, because translation has already happened.
- The source code does not need to be given to users, which protects the developer's work.
- The executable only runs on the type of processor and operating system it was compiled for. To run on a different system, the program must be compiled again for that system.

### Interpreters

An interpreter translates and executes the program **one statement at a time**, every time it runs. No separate executable is created.

- It stops at the first error it reaches and reports it, so the programmer can fix that line and continue. This makes interpreters convenient during development and testing.
- Execution is slower, because each statement is translated every time it runs, including statements inside loops.
- Every computer that runs the program needs the interpreter installed, and the source code is shared with users.

### Cross compilers

A cross compiler runs on one type of computer system (the **host**) but produces machine code for a different type (the **target**). For example, a developer on a desktop PC compiles control software for the microprocessor inside a washing machine, a car's engine-management unit or a games console.

Cross compilers are used when the target cannot run a compiler itself, because it has too little memory, no keyboard or no development tools, or when one team needs to produce versions for several different targets from the same workstation.

## How a high-level program runs on different computer systems

This is the "uses" point of the syllabus and a common exam question. There are two routes.

**Route 1: interpreters.** The same source code is distributed. Each computer system has its own interpreter for that language, written for its own processor and operating system. Each interpreter translates the same source into its own machine's instructions as it runs. The program is portable as long as an interpreter exists for every system.

**Route 2: cross compilers.** The developer keeps one copy of the source code and, on the host machine, uses a cross compiler for each target system. Each produces a separate executable in that target's machine code. Users receive only the executable for their system.

### Worked example 1: choosing a route

A company writes a stock-checking program in a high-level language. It must run on office PCs, on staff laptops with a different operating system, and on handheld barcode scanners with small microprocessors.

- PCs and laptops: if both have an interpreter for the language, the same source can run on both, with no recompiling. Updates are simply a new copy of the source.
- Barcode scanners: they cannot run a compiler or a full interpreter, so the developers use a cross compiler on a PC to produce a compact executable for the scanners' processor.

A full answer names the translator for each device and explains why, linking to the device's limitations.

## Linkers

Large programs are written as separate modules, often by different programmers, and they use ready-written **library routines** (for example for printing or maths). Each module is compiled to object code separately. A **linker** joins these object code files and the library routines into a **single executable**, connecting each call in one module to the routine it refers to in another.

### Worked example 2: the build chain

A booking system has three modules: Main, Payments and Reports, and uses a printing library.

1. The compiler translates Main, Payments and Reports into three object code files.
2. The linker combines the three object files with the printing library's object code.
3. It resolves references, so that when Main calls a Payments routine, the call points to the correct address.
4. The output is one executable file.

If only Reports is changed, only Reports needs recompiling; the linker then rebuilds the executable. This saves time on large projects.

**Static and dynamic linking.** With **static** linking the library code is copied into the executable, which is larger but self-contained. With **dynamic** linking the executable refers to shared library files on the computer, loaded when the program runs: files are smaller and several programs share one copy, but the program fails if the right library version is missing.

## Device drivers

A device driver is a small program that lets the operating system communicate with one particular hardware device, such as a printer, graphics card or scanner. The operating system sends general commands ("print this page"); the driver converts them into the exact signals that model of device understands, and passes back status messages ("paper jam").

- **Advantage:** the operating system does not need built-in knowledge of every device ever made; new devices work once their driver is installed.
- **Disadvantages:** each device needs a driver written for the right operating system and version; an out-of-date or faulty driver can stop the device working or make the whole system unstable.

## Operating systems

The operating system manages the computer's hardware and provides a platform for applications. Its functions include:

- **Processor management:** scheduling which task uses the processor and when, allowing multitasking.
- **Memory management:** allocating memory to programs and keeping each program's area separate.
- **File management:** organising storage into files and folders and controlling access.
- **Input and output management:** controlling peripherals through their drivers.
- **Security:** user accounts, passwords and access rights.
- **User interface:** the command line or graphical interface through which the user works.
- **Interrupt handling:** responding to signals such as a key press or a printer running out of paper.

## Advantages and disadvantages summary

| Type | Advantages | Disadvantages |
|---|---|---|
| Compiler | Fast execution; no translator needed to run; source code kept private | Whole program must be recompiled after changes; errors reported only after compiling; executable tied to one system |
| Interpreter | Easy debugging, stops at first error; same source runs on any system with an interpreter | Slow execution; interpreter needed on every machine; source code exposed |
| Cross compiler | Produces code for devices that cannot compile; one host serves many targets | Code cannot be tested directly on the host; needs an emulator or the real device |
| Linker | Lets modules be developed and compiled separately; reuses library code | Errors if modules or libraries are missing; static linking gives large files |
| Device driver | New hardware works without changing the operating system | Must match the operating system version; faulty drivers cause crashes |
| Operating system | Manages hardware so applications need not; provides security and an interface | Uses memory and processing time; vulnerabilities can affect every program |

## Common mistakes

- Saying an interpreter "converts the program into an executable". It does not create one.
- Confusing a linker with a compiler: the linker joins already-compiled code.
- Describing a cross compiler as "a compiler for different languages". It is for a different **target system**, not a different language.
- Calling a device driver hardware. It is software.
- Answering "how does a program run on different systems" with only one route.

## Exam technique

- **Describe** the function: what it takes in, what it does, what it produces.
- **Explain** the use: link the function to a scenario with "so" or "because".
- **Advantages and disadvantages**: be specific to the type ("an interpreter is slower because every statement in a loop is retranslated each time"), never generic ("it is slow").

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 2 Hardware and software, section 2.2 System software.
