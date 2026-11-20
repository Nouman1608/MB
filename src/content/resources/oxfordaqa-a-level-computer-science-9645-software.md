---
title: "OxfordAQA A-Level Computer Science (9645): Software"
seoTitle: "OxfordAQA A-Level CS 9645 Software Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6 – Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
  - qualification: "a-level"
    topic: "computer-systems-9645"
    subtopic: "software-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.6.2 in depth: system and application software, the operating system's role and four functions, utilities, libraries and translators."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.6.2 Software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.6 Computer systems (AS). The specification asks you to explain what is meant by **system software** and **application software**; to understand the need for and functions of the **operating system**, **utility programs**, **libraries** and **translators** (compiler, assembler, interpreter); to understand that a role of the operating system is to **hide the complexities of the hardware** from the user and other software; and to describe four operating system functions: **scheduling**, **memory allocation**, **I/O device management** and **interrupt handling**. For utilities, you should understand that they add functionality to help manage a computer system, with examples such as a virus checker or compression program. For memory, you only need to understand how **main memory** is allocated; virtual memory does not need to be covered.

For quick recall use the [software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-software-revision-notes/), then try the [software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-software-practice/). The topic-level [computer systems study guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/) covers all of section 3.6. Calculations below were checked with a script.

## System software and application software

**System software** is software that **manages and controls the computer system** and provides a platform for other software to run. The user does not usually use it for a productive task directly. Examples: operating systems, utility programs, libraries and translators.

**Application software** is software that lets the user carry out a **task for its own sake**, such as writing a letter, editing a photograph, browsing the web or playing a game. Examples: word processor, spreadsheet, web browser, media player.

| | System software | Application software |
|---|---|---|
| Purpose | Run and manage the computer; support other programs | Perform a user task |
| User interaction | Usually in the background | Directly used |
| Examples | Operating system, virus checker, compression program, compiler | Word processor, game, spreadsheet, photo editor |
| Depends on | Hardware | Hardware and the operating system |

A useful test: would the user choose to run this program in order to get a job done (application), or does it exist to keep the computer working and to support other programs (system)?

## The operating system

The **operating system (OS)** is system software that manages the hardware and provides services to application programs and users. Examples include Windows, macOS, Linux and Android.

### Why an operating system is needed

Hardware is complicated. Different machines have different processors, different storage devices and different peripherals. If every program had to deal with this directly, each program would have to contain code for every possible device, and several programs could not share the hardware safely. The operating system solves this by acting as a layer between programs and hardware.

A key role is to **hide the complexities of the hardware** from the user and from other software. When a program saves a file, it asks the OS to do it with one simple request. The OS handles the details of which drive, where the data goes and how the device is controlled. A programmer does not need to know whether the file is going to a solid-state drive or a hard disk. The user sees a friendly interface (windows, icons or commands) instead of raw hardware.

### Function 1: scheduling

A processor can execute only one instruction at a time (on one core), but a user expects many programs to be active together. **Scheduling** is the OS deciding **which process gets the processor, and for how long**. By switching between processes very quickly, the OS gives the impression that they all run at once.

One simple method is **round robin**: each process gets the processor for a fixed time slice, then goes to the back of the queue.

#### Worked example 1: round robin

Three processes need processor time as follows: P1 needs 7 ms, P2 needs 3 ms and P3 needs 5 ms. The time slice is 2 ms.

| Slot | Process running | Start (ms) | End (ms) |
|---|---|---|---|
| 1 | P1 | 0 | 2 |
| 2 | P2 | 2 | 4 |
| 3 | P3 | 4 | 6 |
| 4 | P1 | 6 | 8 |
| 5 | P2 | 8 | 9 |
| 6 | P3 | 9 | 11 |
| 7 | P1 | 11 | 13 |
| 8 | P3 | 13 | 14 |
| 9 | P1 | 14 | 15 |

P2 finishes at 9 ms (it needed only 1 ms in its second slot), P3 at 14 ms and P1 at 15 ms. Every process gets a turn quickly, so the system seems responsive. If the processes were run one after another instead, P1 would finish at 7 ms, P2 at 10 ms and P3 at 15 ms.

### Function 2: memory allocation

Programs and data must be in **main memory** to be used. The OS **allocates** a region of main memory to each process when it starts, keeps track of which regions are in use, **protects** each process's memory from others, and **frees** the memory when the process ends so it can be reused.

#### Worked example 2: allocating memory

A computer has 4 GiB of main memory, which is 4 × 1,024 = 4,096 MiB. The OS allocates 768 MiB to itself, 1,200 MiB to a browser, 350 MiB to an editor and 210 MiB to a music player. The total allocated is 768 + 1,200 + 350 + 210 = 2,528 MiB, leaving 4,096 − 2,528 = **1,568 MiB** free for new processes. When the browser is closed, the OS frees its 1,200 MiB, leaving 2,768 MiB available.

### Function 3: I/O device management

The OS manages the communication between programs and **input and output devices** such as keyboards, screens, printers and storage devices. It uses **device drivers**, small programs that know how to control a particular device, so applications can use a standard request. It also **queues** requests: for example, several print jobs from different programs are held in a queue (a print spooler) and sent to the printer one at a time. It may use buffers to smooth the difference between fast processors and slow devices.

### Function 4: interrupt handling

An **interrupt** is a signal sent to the processor to indicate that something needs attention immediately, for example a key being pressed, a disk read finishing, or a timer expiring. The OS contains **interrupt handlers**. When an interrupt arrives, the processor suspends the current process (saving its state), the OS runs the handler for that interrupt, and then the suspended process resumes. Interrupts mean the processor does not have to keep checking every device. The mechanism is covered further in sub-topic 3.7.3.

## Utility programs

**Utility programs** are system programs that add **extra functionality** to help **manage the computer system**. They are not part of the core of the operating system, and many are supplied with it or installed separately. Examples include:

| Utility | Purpose |
|---|---|
| Virus checker (anti-malware) | Scans for and removes malicious software |
| Compression program | Reduces the size of files for storage or sending |
| Disk defragmenter or clean-up tool | Tidies storage and removes unneeded files |
| Backup software | Copies files so they can be recovered |
| File manager | Helps organise, copy and delete files |

For compression, a 12 MiB file compressed to 4.5 MiB is 12 ÷ 4.5 ≈ 2.67 times smaller, a saving of 62.5%.

## Libraries

A **library** is a collection of **pre-written, tested code** (functions and routines) that programmers can use in their own programs rather than writing it again. Examples include a mathematics library (`sqrt`, `sin`), a graphics library for drawing, and libraries that handle dates or networking. Libraries save development time, reduce errors because the code has been tested, and give a standard way of doing common tasks.

## Translators

A **translator** converts a program written in one language into another that the computer can execute. Three types are named:

- an **assembler** converts assembly language into machine code;
- a **compiler** translates a whole high-level program into machine code (or intermediate code) before it runs;
- an **interpreter** translates and executes a program one statement at a time.

Sub-topic 3.6.3 covers these in detail.

## Exam technique

- **Classify with a reason.** "System software, because it manages the computer rather than doing a user's task."
- **Describe each function by what the OS does,** not just by name. For scheduling, say that it decides which process uses the processor and for how long.
- **Link hiding complexity to an example.** A program asks the OS to save a file without knowing the device.
- **For utilities,** name an example and state its purpose.
- **Keep to main memory.** Virtual memory is not needed.

## Common mistakes

- Saying the operating system is an application.
- Describing scheduling as "putting programs in order of importance" without mentioning processor time.
- Saying memory allocation means adding memory to the computer.
- Confusing an interrupt with a program error.
- Saying a utility program is a part of the hardware.
- Mixing translators with libraries. A library supplies code; a translator converts code.

## Next steps

- [Software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-software-revision-notes/)
- [Software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-software-practice/)
- [Hardware and software study guide](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.2 Software.
