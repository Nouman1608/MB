---
title: "Cambridge A Level Computer Science (9618): Operating Systems -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9618 section 5.1: why an OS is needed, the five management tasks, six utilities, libraries and DLLs, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 5.1 Operating Systems of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. The [operating systems study guide](/resources/cambridge-a-level-computer-science-9618-operating-systems/) explains each point with scenarios; the [operating systems practice questions](/resources/cambridge-a-level-computer-science-9618-operating-systems-practice/) test them.

## Key terms

| Term | Meaning |
|---|---|
| Operating system (OS) | System software that manages the hardware and provides services and an interface for users and applications |
| Process | A program being executed |
| Device driver | Software that translates OS commands into instructions a specific device understands |
| File system | The way the OS names, organises and keeps track of files on storage |
| Access rights | Permissions saying which users can read, write or run a file |
| Utility software | System software that maintains, protects or optimises the computer |
| Fragmentation | A file stored in separate pieces across a disk |
| Program library | A collection of pre-written, pre-tested routines programmers can use |
| DLL | Dynamic Link Library: library code linked to a program at run time and shareable between programs |

## Why an OS is needed

- **Interface**: lets users run programs and manage files without knowing how the hardware works.
- **Platform**: gives applications standard services, so programmers do not write hardware-level code.
- **Resource management**: shares processor, memory, storage and devices between programs and users.
- **Hides complexity** of the hardware.

## The five management tasks

| Task | Key points to give |
|---|---|
| Memory management | Allocates and frees memory for processes; protects each process's memory; tracks free and used locations; moves data to secondary storage when memory is full |
| File management | Directory structure; create, open, save, copy, move, rename, delete; tracks where files are stored; access rights; naming and attributes |
| Security management | User accounts and authentication; access rights; security updates; firewall; logs of access |
| Hardware management | Device drivers; handles interrupts; buffers and queues (e.g. print queue); detects new devices |
| Process management | Schedules processes for multitasking; allocates resources; handles interrupts; keeps processes separate; stops one process monopolising the processor |

## Utility software

| Utility | One-line purpose |
|---|---|
| Disk formatter | Prepares a disk for use by setting up a file system; erases existing data |
| Virus checker | Detects malware by signatures and suspicious behaviour; quarantines or deletes it |
| Defragmentation | Rearranges fragmented files into contiguous blocks on a magnetic disk to speed up access |
| Disk contents analysis / repair | Shows how space is used; finds and marks bad sectors; repairs file system errors |
| File compression | Reduces file size to save space and transmission time |
| Back-up software | Copies files on a schedule (often only changed files) and restores them after loss |

**Not for SSDs:** defragmentation gives no speed benefit (no moving parts) and adds writes that shorten the drive's life.

## Program libraries and DLLs

**Benefits of libraries:** save development time; code already tested and reliable; written by specialists; makes complex tasks possible.

| Static library | DLL |
|---|---|
| Copied into the executable at compile/link time | Linked at run time |
| Larger executable | Smaller executable |
| Each program has its own copy in memory | One copy in memory shared by many programs |
| Library update needs every program rebuilt | Update the DLL once; all programs benefit |
| Self-contained | Program fails if DLL is missing or incompatible |

## Exam traps

- Naming a task ("memory management") without saying what the OS does.
- Calling a device driver hardware.
- "Defragmentation frees space": it reorganises files; it does not delete them.
- Recommending defragmentation for an SSD.
- Forgetting the drawbacks of DLLs.
- Confusing a disk formatter with disk repair software.
- Saying back-up software "prevents" data loss; it allows recovery after loss.

## Self-test

1. Give **two** reasons why a computer system needs an operating system.
2. State **two** actions the OS takes in memory management.
3. What is a device driver?
4. Which management task includes the print queue?
5. Give **two** features of security management.
6. What is a process?
7. Why does a fragmented file take longer to read from a magnetic hard disk?
8. Why should a solid state drive not be defragmented?
9. What does a disk formatter do?
10. How can a virus checker identify a virus?
11. Give **two** benefits to a developer of using program libraries.
12. Give **one** benefit and **one** drawback of DLL files.

### Answers

1. Any two: provides a user interface; provides a platform and services for applications; manages and shares hardware resources; hides hardware complexity.
2. Any two: allocates memory to processes; frees memory when a process ends; protects each process's memory from others; tracks free and used memory.
3. Software that translates the OS's general commands into the specific instructions a particular device understands.
4. **Hardware management** (input/output/peripherals).
5. Any two: user accounts and passwords; access rights; security updates; firewall; access logs.
6. A program that is being executed.
7. The read/write head must move to several separate areas of the disk to read all the pieces.
8. It has no moving head, so fragmentation does not slow access, and the extra writes shorten its life.
9. Prepares a storage device for use by setting up a file system, erasing any existing data.
10. By comparing files with a database of known virus signatures, or by detecting suspicious behaviour.
11. Any two: saves time; code is already tested and reliable; routines written by specialists; complex tasks made easier.
12. Benefit (any one): smaller executables; one copy shared in memory; updating the DLL updates every program. Drawback (any one): program fails if the DLL is missing; an updated DLL may be incompatible.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 5.1 Operating Systems. Published by Cambridge International.
