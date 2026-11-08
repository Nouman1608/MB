---
title: "IGCSE Computer Science: Software — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Software"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "software"
description: "Quick-recall notes on system and application software, OS functions, interrupts, firmware, translators and IDEs for Cambridge IGCSE Computer Science 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 4 Software asks you to tell system software from application software, list what an operating system does, explain how interrupts are generated and handled, and compare high-level with low-level languages and compilers with interpreters. In Cambridge IGCSE Computer Science (0478) it is examined on Paper 1, mostly through short "state" and "describe" questions where exact wording earns the marks.

Condensed for the final weeks. For the full explanation, use the
[Software study guide](/resources/cambridge-igcse-computer-science-software-study-guide/), then test yourself with the
[Software practice questions](/resources/igcse-computer-science-software-practice/).

## Syllabus coverage

These notes follow the learning outcomes in the Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028.

| Ref | Learning outcome (summarised) |
|---|---|
| 4.1.1 | Difference between system software and application software, with examples |
| 4.1.2 | Role and basic functions of an operating system |
| 4.1.3 | How hardware, firmware and an operating system are needed to run applications |
| 4.1.4 | Role and operation of interrupts |
| 4.2.1 | High-level and low-level languages, with advantages and disadvantages |
| 4.2.2 | Assembly language, mnemonics and the assembler |
| 4.2.3 | Operation of a compiler and an interpreter, including how errors are reported |
| 4.2.4 | Advantages and disadvantages of a compiler and an interpreter |
| 4.2.5 | Role of an IDE and its common functions |

## Key definitions

| Term | Definition to learn |
|---|---|
| System software | Provides the services the computer itself requires, such as the operating system and utility software |
| Application software | Provides the services the user requires, such as a word processor, spreadsheet or web browser |
| Operating system (OS) | System software that manages the hardware and provides a platform on which applications run |
| Firmware | Software stored permanently on the hardware; the bootloader is firmware and it starts the OS |
| Interrupt | A signal sent to the processor to say that something needs attention |
| Interrupt service routine (ISR) | The block of code run to deal with a particular interrupt |
| High-level language | A language close to English that is machine independent, such as Python or Java |
| Low-level language | Machine code or assembly language, closely tied to one type of processor |
| Assembler | Translates assembly language mnemonics into machine code |
| Compiler | Translates the whole high-level program at once before it is run and produces an executable file |
| Interpreter | Translates and executes the high-level code one line at a time |
| IDE | Integrated development environment: one program that gives the tools for writing, translating and testing code |

## What does an operating system do? (4.1.2)

Learn the nine functions listed in the syllabus. A question worth 3 marks wants three different functions, not one function reworded three ways.

1. Managing files
2. Handling interrupts
3. Providing an interface
4. Managing peripherals and drivers
5. Managing memory
6. Managing multitasking
7. Providing a platform for running applications
8. Providing system security
9. Managing user accounts

A memory hook: **F I I P M M P S U** — files, interrupts, interface, peripherals, memory, multitasking, platform, security, users.

## How do hardware, firmware and the OS work together? (4.1.3)

The syllabus describes three layers, each running on the one below.

| Layer | Runs on |
|---|---|
| Application software | The operating system |
| Operating system | The firmware |
| Bootloader (firmware) | The hardware |

When the computer is switched on, the bootloader stored in firmware runs first and loads the operating system. Only once the OS is running can an application be started.

## How is an interrupt handled? (4.1.4)

| Type | Syllabus examples |
|---|---|
| Hardware interrupt | Pressing a key on the keyboard; moving the mouse |
| Software interrupt | Division by zero; two processes trying to access the same memory location |

Sequence to learn:

1. A device or program generates an interrupt signal and sends it to the processor.
2. The interrupt is given a priority and waits until the processor checks for interrupts.
3. If its priority is high enough, the processor saves the current task's state.
4. The correct interrupt service routine is run to deal with the event.
5. The saved state is restored and the original task carries on (or, after an error such as division by zero, the program may be stopped and an error shown).

## High-level or low-level? (4.2.1 and 4.2.2)

| Feature | High-level | Low-level |
|---|---|---|
| Ease of reading and writing | Easier, English-like statements | Harder; machine code is binary and assembly uses mnemonics |
| Ease of debugging | Easier | Harder |
| Machine independence | Yes, runs on different processors after translation | No, written for one processor type |
| Direct manipulation of hardware | No | Yes, can control registers and memory addresses directly |
| Translator needed | Compiler or interpreter | Assembler (for assembly language); machine code needs none |

Assembly language is a low-level language that uses **mnemonics** such as LDA or ADD. Each mnemonic stands for one machine code instruction.

## Compiler or interpreter? (4.2.3 and 4.2.4)

| | Compiler | Interpreter |
|---|---|---|
| How it translates | Whole code at once, before execution | Translates and executes line by line |
| Output | An executable file | No executable file |
| Errors | Error report for the whole code | Stops at the first error found |
| Best used | To translate the final program | While developing a program |
| Running later | Executable runs without the compiler | Interpreter needed every time |

The syllabus states the typical pattern directly: an interpreter is mostly used when developing a program, and a compiler is used to translate the final program.

## IDE functions (4.2.5)

Code editor · run-time environment · translators · error diagnostics · auto-completion · auto-correction · prettyprint. For each one, be ready to say what it does for the programmer: for example, auto-completion suggests the rest of a keyword or identifier as you type, and prettyprint colour-codes and indents code so it is easier to read.

## Worked example: choosing a translator for each stage

A charity is building a donation-tracking app. During development the programmers run the code many times a day. When it is finished it will be installed on volunteers' laptops.

- **During development: interpreter.** It runs the code line by line and stops at the first error, so the programmer sees exactly where the problem is, fixes it and runs again straight away.
- **Final version: compiler.** It produces an executable file, so the volunteers do not need a translator installed, and the source code does not have to be handed out.

A full-mark answer names the translator **and** links each reason to the situation in the question.

## Common mistakes / exam traps

- Calling utility software "application software". Utilities serve the computer, so they are system software.
- Writing "the OS controls the computer" — too vague to score. Name the specific function.
- Saying an interpreter "lists all the errors". It stops at the first one; the compiler gives the full error report.
- Mixing up the assembler (assembly language to machine code) with the compiler (high-level language to machine code).
- Describing an interrupt as the processor "stopping". It saves its current task, services the interrupt, then resumes.
- Giving a disadvantage of high-level languages as "they are slow". Link it to the syllabus point: they cannot directly manipulate hardware.
- Putting the layers in the wrong order: the bootloader runs on the hardware, not on the OS.

## Frequently asked questions

**Is a device driver system software or application software?**
A device driver is system software. The operating system uses drivers to manage peripherals, which is one of the OS functions listed in 0478 learning outcome 4.1.2.

**Why does a computer need firmware as well as an operating system?**
The OS is stored on secondary storage and must be loaded into memory before it can run. The bootloader, held as firmware, runs on the hardware at start-up and loads the OS.

**Do I need to write assembly language in the 0478 exam?**
The syllabus only requires you to understand that assembly language is a low-level language that uses mnemonics and needs an assembler. Writing assembly programs is not listed.

**Which IDE functions should I learn?**
The seven named in the syllabus: code editors, run-time environment, translators, error diagnostics, auto-completion, auto-correction and prettyprint.

## Self-test

1. Give one example each of system software and application software.
2. State the order in which the bootloader, operating system and application are run.
3. Give one hardware interrupt and one software interrupt.
4. State two advantages of a low-level language.
5. Describe how an interpreter reports an error.
6. What does an IDE's error diagnostics function do?

**Answers:** 1. System: operating system or a utility such as anti-virus; application: word processor, spreadsheet or web browser. 2. Bootloader (firmware, on the hardware), then the operating system, then the application. 3. Hardware: a key press or moving the mouse; software: division by zero or two processes trying to use the same memory location. 4. It can directly manipulate the hardware; the code can be written for the specific processor so it uses memory and processing time efficiently. 5. It stops executing when it reaches the first error and reports that error; the programmer corrects it and runs the code again. 6. It identifies errors in the code and shows the programmer where they are, often highlighting the line.
