---
title: "Cambridge IGCSE Computer Science (0478): Software -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Software"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "software"
description: "Cambridge IGCSE Computer Science 0478 Topic 4 study guide: system and application software, OS functions, firmware, interrupts, translators and IDE features."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Software is the set of programs that tells computer hardware what to do. Topic 4 of Cambridge IGCSE Computer Science (0478) separates software into system and application software, explains what an operating system does, how hardware, firmware and the operating system work together to run an application, how interrupts are handled, and how program code is translated. It is a short topic with many definitions, so precise wording earns the marks.

## What does the 0478 syllabus require in Topic 4?

| Ref | Learning outcome (2026–2028 syllabus) |
|---|---|
| 4.1.1 | Difference between system software and application software, with examples |
| 4.1.2 | Role and basic functions of an operating system |
| 4.1.3 | How hardware, firmware and an operating system are required to run applications software |
| 4.1.4 | Role and operation of interrupts |
| 4.2.1 | High-level and low-level languages, with advantages and disadvantages |
| 4.2.2 | Assembly language uses mnemonics; an assembler translates it into machine code |
| 4.2.3 | Operation of a compiler and an interpreter, and how each reports errors |
| 4.2.4 | Advantages and disadvantages of a compiler and an interpreter |
| 4.2.5 | Role of an IDE and its common functions |

Topic 4 is examined on Paper 1 (Computer Systems). It links to hardware (the fetch-decode-execute cycle, where interrupts are checked) and to the programming work on Paper 2.

## What is the difference between system software and application software?

**System software** provides the services that the **computer** requires. The syllabus names the **operating system** and **utility software**. A utility is a small program that helps maintain or protect the computer; anti-virus software is a common example. The syllabus does not list particular utilities, so one clear example is enough.

**Application software** provides the services that the **user** requires, such as writing a document, editing a photograph or browsing the web. Examples are a word processor, a spreadsheet, a web browser and a game. A good test is to ask "is this software doing the user's job, or running the computer?"

## What does an operating system do?

An **operating system (OS)** is loaded when the computer starts and stays in control while it runs. The syllabus lists these functions:

- **Managing files**: creating, naming, moving, copying, deleting and organising files and folders.
- **Handling interrupts**: pausing the current task to service an interrupt, then resuming.
- **Providing an interface**: for example a graphical user interface or a command-line interface.
- **Managing peripherals and drivers**: using **device drivers**, small programs that let the OS communicate with a particular printer, keyboard or other device.
- **Managing memory**: deciding where programs and data are held in RAM so they do not overwrite each other.
- **Managing multitasking**: sharing processor time between several running programs so they appear to run at the same time.
- **Providing a platform for running applications**: applications use the OS for memory, files, input and output.
- **Providing system security**: for example controlling access with passwords and access rights.
- **Managing user accounts**: separate settings, files and permissions for each user.

## How do hardware, firmware and the operating system work together?

Applications software cannot run on bare hardware. The syllabus describes three layers:

1. The **bootloader**, which is **firmware** stored in non-volatile memory, is run on the **hardware** when the computer is switched on.
2. The bootloader loads the **operating system**, so the OS is run on the firmware.
3. **Applications** are run on the operating system, which gives them access to the hardware.

An exam answer should keep this order: hardware, then firmware (bootloader), then OS, then application.

## What is an interrupt and how is it handled?

An **interrupt** is a signal sent to the processor to say that something needs attention.

- **Hardware interrupts** include pressing a key on the keyboard and moving the mouse.
- **Software interrupts** include division by zero and two processes trying to access the same memory location.

How it is handled:

1. A device or program **generates** the interrupt, which is placed in a queue in priority order.
2. At the end of each fetch-decode-execute cycle the processor checks for interrupts.
3. If an interrupt has a higher priority than the current task, the processor saves the state of the current task (the contents of its registers).
4. The correct **interrupt service routine (ISR)** is run to deal with the interrupt.
5. **As a result**, the saved state is restored and the interrupted task carries on, or another task is started (for example a program is stopped after a division by zero).

Interrupts mean the processor does not waste time repeatedly checking each device.

## What are high-level and low-level languages?

| | High-level language | Low-level language |
|---|---|---|
| Ease of reading and writing | Easier: uses English-like keywords | Harder: mnemonics or binary |
| Ease of debugging | Easier to find and fix errors | Harder |
| Machine independence | Runs on different processors once translated | Specific to one type of processor |
| Direct manipulation of hardware | Not usually possible | Possible, for example to control memory locations and registers |

**Machine code** is binary instructions the processor runs directly. **Assembly language** is a form of low-level language that uses **mnemonics** such as LDA and ADD. An **assembler** is needed to translate an assembly language program into machine code.

## How do a compiler and an interpreter differ?

- A **compiler** translates the whole code at once before it is executed, producing an **executable file**. It gives an **error report for the whole code** if errors are detected.
- An **interpreter** translates and executes the code **line by line**. It **stops execution when an error is found**.

| | Compiler | Interpreter |
|---|---|---|
| Advantages | Executable runs without the translator; runs fast once compiled; source code is not distributed | Errors found one at a time, at the line where they occur, so it is easy to test and debug while developing |
| Disadvantages | Errors are only reported after the whole program is translated; must recompile after every change | Slower to run; the interpreter is needed every time the program runs; the source code must be shared |

The syllabus's key point: an **interpreter is mostly used when developing** a program and a **compiler is used to translate the final program**.

## What is an IDE and what does it provide?

An **integrated development environment (IDE)** is software that provides the tools for writing program code in one place. The syllabus lists:

- **Code editors**: for entering and editing code.
- **Run-time environment**: lets the program be run within the IDE.
- **Translators**: a compiler and/or interpreter built in.
- **Error diagnostics**: identify and report errors, such as highlighting the line with a syntax error.
- **Auto-completion**: suggests the rest of a keyword or identifier as you type.
- **Auto-correction**: corrects common errors, such as misspelt keywords.
- **Prettyprint**: displays code with consistent indentation and colour-coded keywords to improve readability.

## Worked example: choosing a translator

A developer is testing a new program and expects many small errors. A second developer has finished a program that will be sold to customers who do not have programming tools. Which translator suits each?

For the first, an **interpreter**, because it executes the program line by line and stops at an error, so the developer can fix it and run again straight away. For the second, a **compiler**, because it produces an executable file that runs without a translator on the customer's machine and does not reveal the source code. A good answer names the translator and links each reason to the scenario.

## Worked example: describing an interrupt

"A user presses a key while a document is being printed. Describe how the interrupt is handled." A full-mark answer: the keyboard generates a hardware interrupt; the processor checks for interrupts at the end of the current cycle; it saves the current state of the printing task; it runs the interrupt service routine for the keyboard; then it restores the saved state and continues printing.

## Common mistakes

- Calling utility software "application software". The syllabus classes it as system software.
- Writing that the OS "runs the CPU". Say what it manages: files, memory, peripherals, security, multitasking.
- Describing an interpreter as translating the whole program first.
- Mixing up the assembler (assembly language) and the compiler (high-level language).
- Putting the layers in the wrong order: the bootloader runs on the hardware, not on the OS.
- Saying a high-level language is "better" without saying how.

## Exam technique

**State** needs a short fact; **describe** needs a sentence on how it works; **explain** needs a reason. Where marks are for a number of functions, give distinct points, not rewordings. For compiler and interpreter questions, say what each does, how errors are reported and when each is used.

## Frequently asked questions

**Do I need to learn a list of utility programs for 0478?**
No. The 2026–2028 syllabus names utility software as an example of system software but does not list particular utilities. Be ready to give one example, such as anti-virus software.

**What is firmware in 0478?**
Firmware is software stored permanently on the hardware. The bootloader is firmware: it runs on the hardware at start-up and loads the operating system.

**Is a keypress a hardware or a software interrupt?**
A hardware interrupt. Division by zero and two processes trying to access the same memory location are the syllabus's examples of software interrupts.

**Why use an interpreter during development?**
It stops at the first error and shows where it is, so errors can be fixed and the code re-run quickly. The final program is then compiled.

## Check your understanding

1. Give one example of system software and one of application software. *System: operating system or anti-virus utility. Application: word processor, spreadsheet or web browser.*
2. State four functions of an operating system. *Any four from the syllabus list, e.g. managing files, handling interrupts, managing memory, managing user accounts.*
3. What runs on the hardware when a computer is switched on? *The bootloader, which is firmware; it then loads the operating system.*
4. Give one hardware and one software interrupt. *Hardware: key press or mouse movement. Software: division by zero or two processes accessing the same memory location.*
5. What is run when an interrupt is serviced? *An interrupt service routine (ISR).*
6. State one advantage of an interpreter over a compiler. *It stops at the line with an error, which helps testing and debugging.*
7. Give three functions of an IDE. *Any three of code editor, run-time environment, translators, error diagnostics, auto-completion, auto-correction, prettyprint.*
8. Why is an assembler needed? *To translate assembly language mnemonics into machine code the processor can execute.*

## Related pages

- [Software revision notes](/resources/igcse-computer-science-software-revision-notes/)
- [Software practice questions](/resources/igcse-computer-science-software-practice/)

## Official syllabus

Cambridge International, *Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028*, Version 6, Topic 4 "Software" (4.1 and 4.2).
