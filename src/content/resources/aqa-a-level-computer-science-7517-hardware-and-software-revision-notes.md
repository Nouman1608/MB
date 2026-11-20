---
title: "AQA A-Level Computer Science (7517): Hardware and software -- Revision Notes"
seoTitle: "AQA A-Level CS Hardware and Software Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "hardware-and-software-7517"
description: "Condensed AQA 7517 section 4.6.1 recall: hardware, software, system and application software, and the role of operating systems, utilities, libraries and translators."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.6.1 Hardware and software**, AQA A-Level Computer Science (7517). Fuller explanations are in the [hardware and software study guide](/resources/aqa-a-level-computer-science-7517-hardware-and-software/); exam-style questions are in the [hardware and software practice questions](/resources/aqa-a-level-computer-science-7517-hardware-and-software-practice/).

## Definitions

- **Hardware:** the physical components of a computer system (processor, memory, storage, input and output devices).
- **Software:** programs and data: the instructions that tell the hardware what to do. No physical form.
- **Relationship:** hardware needs software to do anything useful; software needs hardware to run.

## Classification of software

| | System software | Application software |
|---|---|---|
| Purpose | Manages and controls the hardware; provides a platform for other software | Carries out tasks the **user** wants done |
| Examples | Operating system, utility programs, libraries, translators | Word processor, spreadsheet, browser, game |
| User contact | Mostly indirect | Direct |

### Types of application software (attributes)

| Type | Attributes |
|---|---|
| General-purpose | Many uses and features; widely available; may need tailoring |
| Special-purpose | Designed for one job; efficient for it; inflexible |
| Bespoke | Written for one customer; fits exactly; costly and slow to develop |
| Off-the-shelf | Mass market; cheap; ready now; may not fit exactly |

## System software

| Type | Function |
|---|---|
| Operating system | Manages hardware and provides services and an interface to users and programs |
| Utility program | Maintains, protects or manages the system (antivirus, defragmenter, backup, compression) |
| Library | Collection of pre-written, tested subroutines that programs can reuse |
| Translator | Converts a program into another language (usually machine code) |

### Translators

- **Assembler:** assembly language to machine code.
- **Compiler:** whole high-level program to machine code before it runs.
- **Interpreter:** translates and executes a program statement by statement.

## Role of the operating system

1. **Hides the complexity of the hardware.** Programs and users deal with a simple interface (for example "save file") and the OS handles disks, printers and so on through device drivers.
2. **Resource management.** It manages hardware to **allocate processors, memories and I/O devices among competing processes**.

| Resource | What the OS does |
|---|---|
| Processor | Decides which process runs and for how long |
| Memory | Allocates areas of memory to processes and keeps them separate |
| I/O devices | Controls access, using buffers and queues |

Other functions: file management, security (accounts and permissions), the user interface.

## Why libraries are useful

- Save development time: code is already written.
- Fewer errors: code has been tested.
- Consistent behaviour across programs.
- May be linked when the program is built or loaded when it runs (a dynamic link library).

## Layers

| Layer | Example |
|---|---|
| Application | Word processor |
| Library | Printing or graphics routines |
| Operating system | Windows, Linux, macOS |
| Hardware | Processor, memory, disk, screen |

## Examples to classify

| Program | Class |
|---|---|
| Web browser | Application |
| Compiler | System (translator) |
| Antivirus | System (utility) |
| Disk defragmenter | System (utility) |
| Spreadsheet | Application (general-purpose) |
| Payroll package | Application (special-purpose) |
| Windows | System (operating system) |

## Worked scenario: printing a document

1. The word processor (**application software**) is asked to print.
2. A **library** routine prepares the page data.
3. The **operating system** queues the job in a buffer (**resource management** of an I/O device).
4. The printer's **device driver** converts the request into commands for that model (**hiding hardware complexity**).
5. The **printer hardware** prints.

Each layer needs to know only about the layer below it. Replacing the printer changes the driver but not the word processor.

## Multitasking

- The OS shares the **processor** between processes, giving each a short period of time in turn.
- It records each process's **state** so that it can be resumed.
- It keeps processes' **memory separate**.
- To the user, programs appear to run at the same time.

## Questions the examiners like

- "Explain what the OS does when two programs want the printer." (queue, buffer, serve in order)
- "Why is a compiler system software?" (it supports the running of the computer by translating programs and does not carry out a user's own task)
- "Why use a library?" (saves time, tested, consistent)

## Exam traps

- **Compiler as application software.** It is system software.
- **OS defined only as an interface.** Include resource management.
- **Utility as part of the OS kernel.** Utilities are system software but separate from the OS core.
- **No example** given where one is asked for.
- **Hardware and software** defined without "physical" and "instructions".
- **Compiler and interpreter** confused.

## Key terms

| Term | Definition |
|---|---|
| Hardware | The physical components of a computer system |
| Software | Programs and data that instruct the hardware |
| System software | Software that manages the computer and provides a platform for other software |
| Application software | Software that carries out tasks for the user |
| Operating system | System software that manages the hardware and provides services |
| Utility program | System software that maintains, protects or manages the system |
| Library | A collection of pre-written, reusable subroutines |
| Translator | Software that converts a program from one language to another |
| Resource management | Allocating processors, memory and I/O devices among processes |

## Self-test

1. Define hardware.
2. Define software.
3. Is a compiler system or application software?
4. Give two examples of utility programs.
5. What is the purpose of a library?
6. Name the two parts of the role of an operating system.
7. Name three resources managed by the operating system.
8. State one advantage of off-the-shelf software over bespoke software.
9. State one advantage of bespoke software over off-the-shelf software.
10. What does an assembler do?

**Answers**

1. The physical components of a computer system.
2. Programs and associated data: the instructions that tell the hardware what to do.
3. System software.
4. Any two: antivirus, disk defragmenter, backup, compression, disk formatting.
5. To provide pre-written, tested subroutines that programs can use without writing them again.
6. Hiding the complexity of the hardware; resource management.
7. Processor, memory and I/O devices.
8. Any one: cheaper; available immediately; widely tested.
9. Any one: fits the customer's needs exactly; can be adapted as needs change.
10. Translates assembly language into machine code.

## Related resources

- [Hardware and software study guide](/resources/aqa-a-level-computer-science-7517-hardware-and-software/)
- [Hardware and software practice questions](/resources/aqa-a-level-computer-science-7517-hardware-and-software-practice/)
- [Classification of programming languages revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes/)
- [Types of program translator revision notes](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes/)
