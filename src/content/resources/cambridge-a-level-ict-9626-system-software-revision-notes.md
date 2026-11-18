---
title: "Cambridge A Level Information Technology (9626): System software -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 2.2: translators, cross compilers, linkers, device drivers and operating system functions, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.2 System software** (Topic 2 Hardware and software) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. Full explanations and worked examples are in the [system software study guide](/resources/cambridge-a-level-ict-9626-system-software/); test yourself with the [system software practice questions](/resources/cambridge-a-level-ict-9626-system-software-practice/).

## The six types the syllabus names

Compilers · interpreters · linkers · device drivers · operating systems · utilities (studied in depth in 2.3).

## Key terms

| Term | Meaning |
|---|---|
| System software | Software that runs and manages the computer or supports other programs, rather than doing a user task |
| High-level language | Programming language with English-like statements, independent of any one processor |
| Machine code | Binary instructions a particular processor can execute directly |
| Source code | The program as written by the programmer |
| Object code | Machine code produced by compiling source code, not yet linked |
| Executable | A complete, linked machine-code program that can be run |
| Compiler | Translates the whole source code into object code before the program runs |
| Interpreter | Translates and executes one statement at a time, every time the program runs |
| Cross compiler | A compiler on a host system that produces machine code for a different target system |
| Linker | Combines object code modules and library routines into one executable |
| Library routine | Pre-written, pre-tested code that programs can call |
| Device driver | Software that lets the operating system control a specific hardware device |
| Host / target | The system that does the compiling / the system the code will run on |

## Compiler versus interpreter

| | Compiler | Interpreter |
|---|---|---|
| Translates | Whole program, once | One statement at a time, each run |
| Output | Executable file | None |
| Errors | Reported after the whole program is translated | Stops at the first error reached |
| Speed of running | Fast | Slower, especially in loops |
| Needed on user's machine? | No | Yes |
| Source code shared? | No | Yes |
| Best for | Distributing finished software | Developing and testing |

## Running one program on different systems

- **Interpreters:** distribute the same source code; each system has its own interpreter for the language, which turns the source into that system's machine code as it runs.
- **Cross compilers:** keep one source; on the host, compile a separate executable for each target system, then distribute the right executable to each.

## Linkers: recall

- Join separately compiled modules and library routines into one executable.
- Resolve references: a call in one module is pointed at the right routine in another.
- Only changed modules need recompiling; then relink.
- **Static linking:** library code copied in; bigger file, self-contained.
- **Dynamic linking:** shared libraries loaded at run time; smaller files, but fails if the library is missing or the wrong version.

## Device drivers: recall

- Translate general operating system commands into device-specific instructions, and pass status back.
- Each device needs a driver for the right operating system and version.
- Faulty or outdated drivers can stop a device or crash the system.

## Operating system functions

1. Processor management and scheduling (multitasking).
2. Memory management.
3. File management.
4. Input and output (peripheral) management.
5. Security: accounts, passwords, access rights.
6. User interface.
7. Interrupt handling.

## Advantages and disadvantages in one line each

- **Compiler**: fast and private, but recompile after every change and tied to one system.
- **Interpreter**: easy to debug and portable, but slow and needs the interpreter everywhere.
- **Cross compiler**: builds for devices that cannot compile, but testing needs an emulator or the real device.
- **Linker**: supports modular development and reuse, but missing modules or libraries cause failures.
- **Device driver**: new hardware works without changing the operating system, but drivers must match the version.
- **Operating system**: manages hardware and security for every program, but uses resources and its weaknesses affect everything.

## Exam traps

- Saying an interpreter creates an executable.
- Describing a cross compiler as translating between languages.
- Mixing up the linker (joins compiled code) with the compiler (translates source).
- Calling a driver a piece of hardware.
- Giving only one way to run a program on different systems.
- Generic disadvantages such as "it is slow" with no reason.

## Self-test

1. Define system software.
2. What does a compiler produce that an interpreter does not?
3. Why is an interpreter useful while a program is being developed?
4. Why does interpreted code run more slowly inside a loop?
5. What is meant by host and target in cross compiling?
6. Give one situation where a cross compiler is needed.
7. What does a linker do?
8. Give one advantage and one disadvantage of dynamic linking.
9. What is the function of a device driver?
10. List four functions of an operating system.
11. Explain how interpreters let the same program run on two different computer systems.
12. Why might a software company prefer to distribute compiled executables rather than source code?

### Answers

1. Software that runs and manages the computer or supports other programs, rather than carrying out a user's task.
2. An executable file in machine code.
3. It stops at the first error and reports it, so the programmer can fix it and carry on testing.
4. Each statement is retranslated every time it is executed, so a loop body is translated on every pass.
5. Host: the system the compiler runs on. Target: the different system the produced code will run on.
6. Writing control software for an embedded microprocessor, such as in a washing machine, that cannot run a compiler.
7. Combines separately compiled object code modules and library routines into one executable, resolving references between them.
8. Advantage: smaller executables and shared libraries. Disadvantage: the program fails if the library is missing or the wrong version.
9. It lets the operating system communicate with a specific hardware device by converting general commands into device-specific instructions.
10. Any four: processor scheduling, memory management, file management, input/output management, security, user interface, interrupt handling.
11. Each system has its own interpreter for the language; both receive the same source code and each interpreter translates it into its own machine's instructions as it runs.
12. Users cannot read or copy the source code, the program runs faster, and users do not need an interpreter installed.
