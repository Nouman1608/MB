---
title: "Cambridge A Level Computer Science (9618): System Software -- Revision Notes"
seoTitle: "Cambridge 9618 System Software Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5: System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "system-software"
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "operating-systems"
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "language-translators"
description: "Revision notes on operating system tasks, utility software, libraries and DLLs, compilers, interpreters, assemblers and IDE features for Cambridge AS 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 5 System Software is about the programs that run the computer rather than do the user's work: the operating system, the utilities supplied with it, program libraries, and the translators and IDEs that turn source code into something the processor can execute. In Cambridge International AS & A Level Computer Science 9618 it is tested in Paper 1, mostly through "explain" and "describe" questions set in a scenario, plus a compiler-versus-interpreter justification.

Related: [System Software study guide](/resources/cambridge-a-level-computer-science-system-software-study-guide/) · [System Software practice questions](/resources/cambridge-a-level-computer-science-system-software-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 5.1 | Explain why a computer system requires an operating system (OS) |
| 5.1 | Explain the key management tasks of the OS: memory, file, security, hardware (input/output/peripherals) and process management |
| 5.1 | Show understanding of the need for utility software: disk formatter, virus checker, defragmentation, disk contents analysis/disk repair, file compression, back-up software |
| 5.1 | Show understanding of program libraries, including the benefits to the developer of library files and Dynamic Link Library (DLL) files |
| 5.2 | Show understanding of the need for an assembler, a compiler and an interpreter |
| 5.2 | Explain the benefits and drawbacks of a compiler or an interpreter, and justify the use of each |
| 5.2 | Show awareness that some programs are partially compiled and partially interpreted, such as Java (console mode) |
| 5.2 | Describe IDE features for coding, initial error detection, presentation and debugging |

Topic 16 (A Level) goes further into process states, scheduling, paging and compilation stages; none of that is needed for Topic 5.

## Key definitions

| Term | Definition |
|---|---|
| System software | Software that runs and manages the computer, as opposed to application software that does a user's task |
| Operating system | System software that manages the hardware and provides a platform and interface for other programs |
| Utility software | Programs that carry out maintenance and housekeeping tasks for the computer |
| Program library | A collection of pre-written, pre-tested routines that programs can call |
| DLL | A library file linked to a program when the program is loaded or run, not copied into the executable |
| Assembler | Translates assembly language into machine code |
| Compiler | Translates a whole high-level program into object code / an executable before it is run |
| Interpreter | Translates and executes a high-level program one statement at a time, producing no object code |
| IDE | Integrated development environment: one application with the tools for writing, translating, running and debugging code |

## Why does a computer need an operating system?

The hardware cannot be used directly by most people or most programs. The OS hides the hardware's complexity behind an interface, provides services (file handling, input and output) so that each application does not have to drive the hardware itself, and shares resources (processor time, memory, devices) between programs and users.

## What are the key management tasks of an operating system?

| Task | What the OS does |
|---|---|
| Memory management | Allocates memory to each program, keeps programs' areas separate so one cannot overwrite another, frees memory when a program ends |
| File management | Organises files in a directory structure, handles naming, saving, opening, copying and deleting, and tracks where each file is stored |
| Security management | Controls user accounts and passwords, sets access rights to files and resources, and supports protection such as firewalls and recovery |
| Hardware management | Communicates with peripherals through device drivers, handles input and output, deals with interrupts and manages buffers |
| Process management | Decides which process uses the processor and for how long, allowing multitasking, and handles conflicts between processes over resources |

## Which utility programs should you know?

| Utility | Purpose |
|---|---|
| Disk formatter | Prepares a disk for use by setting up its file structure (tracks/sectors on a magnetic disk); removes existing data |
| Virus checker | Scans files and memory for malware, then quarantines or deletes infected files; must be kept up to date |
| Defragmentation | Moves the parts of each file on a hard disk into contiguous blocks so the read head moves less and access is faster |
| Disk contents analysis / disk repair | Reports how space is used and finds and marks or fixes bad sectors and file-system errors |
| File compression | Reduces file size to save storage space and transmission time |
| Back-up software | Makes copies of files, often on a schedule or of changed files only, so data can be restored after loss |

## Why do developers use program libraries and DLLs?

**Library routines** save development time because the code is already written, and they are already tested, so they are less likely to contain errors. They also give access to expert code (for example maths or graphics functions).

**DLL benefits**: the executable file is smaller because the library code is not included; one copy of the DLL in memory can be shared by several running programs; an updated DLL improves every program that uses it without recompiling them. **Drawbacks**: the program will not run if the DLL is missing, and a new version of the DLL may be incompatible.

## How do assemblers, compilers and interpreters compare?

| Feature | Compiler | Interpreter |
|---|---|---|
| Translation | Whole program, once, before running | One statement at a time, every time it runs |
| Output | Object code / executable file | No object code |
| Execution speed | Fast, once compiled | Slower, as each statement is translated again |
| Errors | Reported for the whole program after compilation; no executable until fixed | Program stops at the first error found; earlier lines have already run |
| Distribution | Executable can be given out without the source code | Users need the source code and the interpreter |
| Best for | Finished software for customers | Writing and testing code, as errors can be fixed and the program resumed quickly |

An **assembler** is needed because assembly language is a low-level language with mnemonics that the processor cannot execute; each instruction is translated to one machine-code instruction.

**Partially compiled, partially interpreted**: Java source code is compiled into **bytecode**, an intermediate code. The bytecode is then interpreted (executed) by a **Java Virtual Machine**, so the same bytecode runs on any computer with a JVM.

## What IDE features does the syllabus list?

| Purpose | Features |
|---|---|
| Coding | Context-sensitive prompts (the editor suggests keywords, variable names or parameters as you type) |
| Initial error detection | Dynamic syntax checks that underline syntax errors as code is typed |
| Presentation | Prettyprint (colour-coding and standard indentation of keywords and structures); expanding and collapsing code blocks |
| Debugging | Single stepping (run one statement at a time); breakpoints (pause at a chosen line); a report window showing the current values of variables and expressions |

## Worked example: justifying a translator

*A developer is writing a game that will be sold to customers. Which translator should be used during development, and which to produce the final version?*

- During development, an **interpreter**: each error is reported as soon as the line is reached and the developer can correct it and continue at once, without recompiling the whole program.
- For the version sold, a **compiler**: it produces an executable that runs faster (important for a game), needs no translator on the customer's computer, and does not give away the source code.

The marks come from linking each feature to the scenario, not from listing features.

## Common mistakes and exam traps

- Saying an interpreter "does not translate" the program. It translates each statement, but keeps no translated version.
- Listing OS tasks without saying how the OS carries them out.
- Claiming that defragmentation speeds up a solid-state drive. An SSD has no moving parts, so fragmentation does not slow access.
- Calling the OS a utility, or a virus checker part of the hardware.
- Writing that a DLL "makes the program faster". The benefits are a smaller executable, shared memory and easier updating.
- Defining a term with its own name, which November 2024 examiners said weaker scripts did on the AS theory papers (where OS tasks were tested). Say what is done: "memory management allocates RAM to each process", not "memory management manages memory".

## Frequently asked questions

**Is an IDE system software?** It is a programming tool that includes a translator; the syllabus places IDEs with language translators in 5.2. What matters is naming the features and saying how each helps the programmer.

**Why is compiled code faster to run?** Translation has already happened, so the processor executes machine code directly. An interpreter translates each statement every time it is executed, including every pass through a loop.

**Does a compiled program have no errors?** No. Compilation removes syntax errors only. Logic errors and run-time errors can still occur when the executable runs.

**What is bytecode?** An intermediate code produced by partly compiling a high-level program. A virtual machine interprets it, which lets one compiled version run on different platforms.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 5 System Software (5.1 Operating Systems, 5.2 Language Translators). Examiner comments are from Cambridge's Principal Examiner Reports, summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
