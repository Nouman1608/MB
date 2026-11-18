---
title: "Cambridge A Level Computer Science (9618): Operating Systems"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5 – System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "operating-systems"
description: "Study guide to Cambridge 9618 section 5.1: why an OS is needed, its five management tasks, the named utility programs, and program libraries including DLLs."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 5.1 Operating Systems of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. You must "explain why a computer system requires an Operating System (OS)"; explain the key management tasks it carries out, "including memory management, file management, security management, hardware management (input / output / peripherals), process management"; show understanding of the need for typical utility software (disk formatter, virus checker, defragmentation software, disk contents analysis/disk repair software, file compression, back-up software); and show understanding of program libraries, including the benefits to developers of library files such as Dynamic Link Library (DLL) files.

The [System Software study guide](/resources/cambridge-a-level-computer-science-system-software-study-guide/) covers sections 5.1 and 5.2 together. This page goes deeper into 5.1, with a scenario for each management task and a worked comparison of static and dynamic libraries. Recall: [operating systems revision notes](/resources/cambridge-a-level-computer-science-9618-operating-systems-revision-notes/) · Questions: [operating systems practice set](/resources/cambridge-a-level-computer-science-9618-operating-systems-practice/).

## Why a computer needs an operating system

Without an OS, every application would have to contain its own code to drive the keyboard, the screen, the disk and the memory, and two programs could not safely run at the same time. The OS:

- provides an **interface** between the user and the hardware, so users can run programs and manage files without knowing how the hardware works;
- provides a **platform** for applications, offering standard services (open a file, print, draw a window) so programmers do not write hardware-level code;
- **manages resources** (processor time, memory, storage, devices) so that several programs and users can share them fairly and safely;
- **hides the complexity** of the hardware behind consistent, simpler operations.

## The five management tasks

### Memory management

The OS decides which parts of main memory each program and its data occupy.

- **Allocates** memory when a program starts and **frees** it when the program ends, so it can be reused.
- **Protects** each process's memory, so one program cannot read or overwrite another's data, or the OS itself.
- **Keeps track** of which locations are in use and which are free.
- Moves data between main memory and secondary storage when memory is full, so that more programs can run than would otherwise fit.

*Scenario:* a user opens a spreadsheet while a browser is running. The OS finds free memory for the spreadsheet, keeps it separate from the browser's memory, and reclaims it when the spreadsheet closes.

### File management

- Provides a **file system** with named files organised into a hierarchy of directories (folders).
- Lets users and programs **create, open, save, copy, move, rename and delete** files.
- Keeps track of **where** each file is stored on the disk and which areas are free.
- Applies **access rights**, such as read-only, read and write, or no access, to files and folders.
- Enforces naming rules and records attributes such as size, type and date modified.

### Security management

- Requires **user accounts** with authentication, such as passwords or biometrics, before access is given.
- Gives each account **access rights**, so users can reach only the files and settings they need.
- Keeps the OS and applications up to date by installing **security updates**.
- Can run a **firewall** that controls network traffic in and out of the computer.
- Keeps logs of log-ins and access attempts so suspicious activity can be traced.

### Hardware management (input / output / peripherals)

- Communicates with each device through a **device driver**, the program that translates general OS commands into the specific instructions a device understands. A new printer works once its driver is installed.
- Handles **interrupts** from devices, such as a key press or a printer reporting it is out of paper.
- Uses **buffers** and **queues** so fast processors and slow devices can work together, for example a print queue holding documents from several users.
- Detects new devices plugged in while the computer is running and loads the right driver.

### Process management

A **process** is a program that is being executed.

- **Schedules** processes, deciding which one uses the processor and for how long, so that many appear to run at once (multitasking).
- **Allocates resources** such as memory and devices to each process.
- Handles **interrupts**, switching to the right routine and back.
- Keeps processes separate and lets them **communicate** safely when they need to.
- Prevents one process from monopolising the processor.

## Utility software

Utility programs help to maintain, protect and optimise the computer. Each one named in the syllabus solves a specific problem.

| Utility | What it does | Why it is needed |
|---|---|---|
| Disk formatter | Prepares a storage device for use: sets up the file system and organises the surface into areas data can be written to; erases existing data | A new or reused drive cannot store files until it has a file system |
| Virus checker | Scans files and memory, compares them with known virus signatures and looks for suspicious behaviour; quarantines or deletes infected files | Malware can corrupt or steal data and spread to other computers |
| Defragmentation software | Rearranges the pieces of fragmented files on a magnetic hard disk so each file is stored in contiguous blocks, and groups free space together | Fragmented files need many head movements to read, slowing access |
| Disk contents analysis / disk repair | Shows how storage is being used; checks the disk for errors and bad sectors, marks bad sectors so they are not used, and repairs file system errors | Finds wasted space and stops data being lost to damaged areas |
| File compression | Reduces file sizes, losslessly or lossily, and restores compressed files | Saves storage space and transmission time |
| Back-up software | Copies files to another device or location on a schedule, and restores them when needed; may copy only files changed since the last back-up | Data can be recovered after deletion, hardware failure, theft or malware |

**Worked example: defragmentation.** A file is saved, then other files are saved after it. When the first file grows, the extra data must go wherever there is free space, perhaps far across the disk. After months of this, one file may be spread over many separate areas, and reading it needs the read/write head to move many times. Defragmentation moves the pieces together so the file can be read in one sweep. Solid state drives do not benefit, because they have no moving head and access every location equally quickly; defragmenting them adds unnecessary writes, which shortens their life.

## Program libraries

A **program library** is a collection of pre-written, pre-compiled routines (such as functions for maths, graphics, file handling or encryption) that programmers can use in their own software. The syllabus notes that "software under development is often constructed using existing code from program libraries".

**Benefits to the developer:**

- Saves time: routines do not have to be written from scratch.
- The code is already **tested**, so it is likely to be more reliable.
- Routines may have been written by specialists, so they can be more efficient than a developer's own version.
- Complex tasks become possible without expert knowledge, such as drawing 3D graphics.

**Dynamic Link Library (DLL) files** are library files that are **linked to a program when it runs**, rather than being copied into the program's executable file when it is compiled.

| | Static library | DLL (dynamic) |
|---|---|---|
| When joined to the program | At compile or link time | At run time |
| Executable size | Larger, because library code is included | Smaller, because the library stays separate |
| Memory use with several programs | Each program holds its own copy | One copy in memory can be shared by several programs |
| Updating the library | Every program must be recompiled | Replace the DLL and every program using it benefits |
| Risk | Program is self-contained | Program fails if the DLL is missing, or an update makes it incompatible |

*Example:* several programs on a computer all print documents. If each uses a shared printing DLL, the routine is held in memory once, and a fix to the DLL improves printing in every program without any of them being rebuilt. If a faulty update to that DLL is installed, though, every one of those programs may stop printing at once.

## Common mistakes

- Listing management tasks without explaining what each involves.
- Confusing a device driver with the device itself.
- Saying defragmentation "frees up space": it reorganises files, it does not delete them.
- Recommending defragmenting a solid state drive.
- Saying a virus checker "stops all viruses": it detects known signatures and suspicious behaviour.
- Treating DLLs as having only benefits.

## Exam technique

- **Explain why an OS is needed**: give a function and its consequence for the user or programmer.
- **Explain a management task**: name it, then give two or three specific things the OS does for it.
- **Show understanding of the need for a utility**: describe what it does and the problem it solves.
- **Benefits of library files**: link each benefit to the developer (time, testing, reliability, smaller executables, easier updates).

Next: condense this with the [operating systems revision notes](/resources/cambridge-a-level-computer-science-9618-operating-systems-revision-notes/) and test it with the [operating systems practice questions](/resources/cambridge-a-level-computer-science-9618-operating-systems-practice/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 5.1 Operating Systems. Published by Cambridge International.
