---
title: "AQA A-Level Computer Science (7517): Hardware and software"
seoTitle: "AQA A-Level CS Hardware and Software Study Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.6.1 Hardware and software: hardware and software, system and application software, and the role of operating systems, utilities, libraries and translators."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-20: the spec says only 'need for, and attributes of, different types of software' (4.6.1.2); check that the general-purpose, special-purpose, bespoke and off-the-shelf split matches the intended teaching."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.6.1 Hardware and software** in AQA A-Level Computer Science (7517). It has four content blocks:

- **4.6.1.1** the relationship between hardware and software, and definitions of both;
- **4.6.1.2** the classification of software into **system software** and **application software**, and the need for and attributes of different types of software;
- **4.6.1.3** the need for and functions of **operating systems, utility programs, libraries and translators** (compiler, assembler, interpreter);
- **4.6.1.4** the role of the **operating system**: hiding the complexity of the hardware, and resource management.

The wider [fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/) covers all of section 4.6. Condensed notes are in the [hardware and software revision notes](/resources/aqa-a-level-computer-science-7517-hardware-and-software-revision-notes/), and exam-style questions are in the [hardware and software practice questions](/resources/aqa-a-level-computer-science-7517-hardware-and-software-practice/).

## Hardware and software

**Hardware** is the physical components of a computer system: the parts you can touch. It includes the processor, main memory, storage devices, input devices such as keyboards and sensors, and output devices such as screens and printers.

**Software** is the programs and associated data, the sets of instructions, that tell the hardware what to do. Software has no physical form. It is held in storage and loaded into memory to be executed by the processor.

The two depend on each other. Hardware without software can do nothing useful, because it has no instructions to carry out. Software without hardware cannot run, because there is no processor to execute it. A program is stored as machine code in memory, and the processor fetches and executes those instructions.

## Classification of software

Software is divided by purpose into two broad classes.

### System software

**System software** manages and controls the computer hardware and provides a platform on which other software can run. The user does not usually use it directly to carry out a useful task. Examples:

- operating systems;
- utility programs;
- libraries;
- translators (compilers, assemblers and interpreters).

### Application software

**Application software** carries out tasks that the **user** wants to do. Examples: word processors, spreadsheets, web browsers, games, photo editors, accounting packages.

| | System software | Application software |
|---|---|---|
| Purpose | Run and manage the computer | Do tasks for the user |
| User interaction | Mostly indirect | Direct |
| Dependence | Needed for the computer to work | Needs system software to run |
| Examples | Operating system, compiler, disk defragmenter | Word processor, game, browser |

### Types of application software

Application software comes in different types with different attributes, depending on the need:

- **General-purpose** software can be used for many tasks (a spreadsheet can do budgeting, statistics or a timetable). It has many features and is widely available, but may be harder to tailor.
- **Special-purpose** software is designed for one particular job (a payroll package or a flight booking system). It is efficient for that task but cannot do much else.
- **Bespoke (custom-written)** software is written for one customer's specific needs. It fits exactly but costs more and takes longer to develop than buying an existing package.
- **Off-the-shelf** software is made for a wide market. It is cheaper and available immediately, and has been widely tested, but may not fit the customer's needs exactly.

When asked about "the need for different types of software", link the type to the requirement: cost, time, suitability, support and flexibility.

## System software in detail

### Operating systems

An **operating system (OS)** is the system software that manages the hardware and provides services to programs and to the user. Its role (4.6.1.4) has two main parts.

**Hiding the complexity of the hardware.** Hardware varies widely, and controlling it directly means dealing with detailed commands and timings. The OS presents a simpler **interface**. A program asks the OS to "save this file" or "print this page" and the OS deals with disks and printers through device drivers. The user, too, interacts through a graphical or command line interface rather than raw machine instructions. This lets programmers write software without knowing which model of disk or display is installed.

**Resource management.** The OS **manages the hardware to allocate processors, memory and input/output devices among competing processes**. Several programs normally want these resources at once.

- **Processor management:** deciding which process runs, and for how long, so that all make progress and the processor is kept busy.
- **Memory management:** allocating areas of main memory to processes and making sure they do not interfere with one another.
- **I/O device management:** controlling access to devices such as printers and disks, often with buffers and queues so that requests are served in order.

Other functions include managing files, providing security (accounts and permissions) and the user interface.

### Utility programs

**Utility programs** perform tasks that help to maintain, protect or manage the computer system, and they are not part of the core of the OS. Examples:

- **antivirus** software, which detects and removes malicious software;
- **disk defragmenter**, which reorganises files so that each is stored in a contiguous area of a disk;
- **backup** software, which copies files so that they can be recovered;
- **file compression** and **disk formatting** tools.

### Libraries

A **library** is a collection of pre-written, tested subroutines (and data) that programs can use without rewriting them. A programmer who needs to calculate a square root or draw a window calls a library routine. Libraries save development time, reduce errors because the code has been tested, and give consistent behaviour. They may be linked into the program when it is built or loaded when the program runs (a **dynamic link library**).

### Translators

A **translator** converts a program from one language to another, usually from a form that humans can write into machine code that the processor can run. The three types are:

- an **assembler**, which translates assembly language into machine code;
- a **compiler**, which translates a whole program written in a high-level language into machine code (or another low-level form) before it runs;
- an **interpreter**, which translates and executes a high-level program one statement at a time.

Translators are needed because the processor can run only machine code. They are described further in the [types of program translator study guide](/resources/aqa-a-level-computer-science-7517-types-of-program-translator/).

## Worked scenario: what happens when you print a document

1. The user presses Print in a word processor. The word processor is **application software**, and it does not control the printer itself.
2. The word processor calls a **library** routine that prepares the page data in a standard form, and passes the request to the **operating system**.
3. The operating system places the job in a **print queue** held in a buffer. This is **resource management** for an input/output device: several programs may want the printer at once, so their jobs must be served one at a time.
4. The operating system uses the printer's **device driver**, a small program that knows the commands that this particular model understands. This is how the operating system **hides the complexity of the hardware**.
5. The **printer hardware** produces the paper.

Notice how each layer needs only to know about the layer immediately below it. The word processor does not need to know the make of the printer. If the printer is replaced, only the driver changes.

## Multitasking and the processor

A processor can run only one instruction stream at a time (per core), but a user may have a browser, a music player and a download all running. The operating system gives each process a short period of processor time in turn and switches between them so quickly that they appear to run together. It must decide which process runs next, keep track of each process's state so it can resume it, and stop one process from damaging another's memory. This is why resource management is a core function of the operating system and not an optional extra.

## How the pieces fit together

The user runs an application program. The application calls library routines and makes requests to the operating system. The operating system uses device drivers to control the hardware. Underneath all of it the processor executes machine code, produced by translators from the programs that people wrote.

| Layer | Example |
|---|---|
| Application software | Word processor |
| Libraries | Routines for printing or graphics |
| Operating system | Windows, Linux, macOS |
| Hardware | Processor, memory, disk, screen |

## Common mistakes

- Defining hardware as "the computer" and software as "the programs", without saying that hardware is physical and software is instructions.
- Classifying a compiler or a utility as application software. They are system software.
- Describing an operating system only as the user interface, forgetting resource management and hiding hardware complexity.
- Saying that utility programs are part of the operating system. They are system software but separate from the OS core.
- Confusing a compiler with an interpreter.
- Saying that libraries are pieces of hardware.

## Exam technique

- **Define** each term in one sentence and add a clear example.
- **Classify** by asking whether the program serves the user's own task (application) or supports the running of the computer (system).
- **OS role**: give both parts, hiding hardware complexity and resource management, with an example of each.
- **Resource management**: name the resource (processor, memory or I/O) and say what the OS does with it.

## Related resources

- [Hardware and software revision notes](/resources/aqa-a-level-computer-science-7517-hardware-and-software-revision-notes/)
- [Hardware and software practice questions](/resources/aqa-a-level-computer-science-7517-hardware-and-software-practice/)
- [Classification of programming languages study guide](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages/)
- [Types of program translator study guide](/resources/aqa-a-level-computer-science-7517-types-of-program-translator/)

*Written against the AQA A-level Computer Science (7517) specification, 4.6.1 Hardware and software. Always check the current specification on the AQA website.*
