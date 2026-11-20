---
title: "OxfordAQA IGCSE Computer Science (9210): Software classification -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Software Classification Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4.03
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
  - qualification: "igcse"
    topic: "computer-systems-9210"
    subtopic: "software-classification-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.4.3: system and application software, OS functions, utility programs and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.4.3 Software classification** of OxfordAQA International GCSE Computer Science
(9210). Explanations are in the [Software classification study
guide](/resources/oxfordaqa-igcse-computer-science-9210-software-classification/).

## What the specification asks

- Explain **system software** and **application software**, with examples of both.
- Understand the **need for and functions of** operating systems (OS) and utility programs.
- Understand that the OS manages the **processor(s), memory, I/O devices, applications and security**.

## Definitions

| Term | Definition |
|---|---|
| System software | Manages the computer system's resources; acts as a platform to run application software |
| Application software | Performs end-user tasks |
| Operating system | The main system software; manages hardware and runs applications |
| Utility program | A system program that carries out maintenance or housekeeping tasks |

## Examples

| System software | Application software |
|---|---|
| Operating system | Word processor |
| Anti-virus | Spreadsheet |
| Backup | Web browser |
| Disk defragmenter | Game |
| File compression | Media player |
| Device drivers | Photo editor, presentation program |

Quick test: is it for **the user's task** (application) or does it **look after the computer** (system)?

## Why an OS is needed

- Provides a **platform** for application programs.
- **Shares** hardware resources between programs.
- Acts as the **go-between** for user, applications and hardware.
- Hides hardware detail, so programs do not need to be written for each device.

## The five areas the OS manages

| Area | What the OS does |
|---|---|
| Processor | Decides which program the processor runs and for how long; switches quickly between them (multitasking) |
| Memory | Allocates RAM to programs, keeps each program's memory separate, frees it when finished |
| I/O devices | Controls keyboard, mouse, screen, printer and storage using device drivers |
| Applications | Loads, runs and closes programs; provides services to them |
| Security | User accounts, passwords and access rights; stops programs interfering with each other |

Other commonly accepted functions: providing a **user interface** and managing **files**.

## Utility programs

| Utility | Task |
|---|---|
| Anti-virus | Finds and removes malware |
| Backup | Copies files for restoring later |
| Defragmenter | Gathers file pieces together on a magnetic disk |
| File compression | Makes files smaller |
| Encryption | Scrambles data to keep it private |
| Firewall | Blocks unauthorised network connections |

## Worked examples

**Classify: a spreadsheet, a firewall, a game, a device driver.** Application: spreadsheet, game. System: firewall,
device driver.

**Describe memory management.** The OS allocates RAM to a program when it starts, prevents it from using another
program's memory, and frees the memory when the program closes.

**Describe security management.** The OS uses user accounts and passwords to identify users, and access rights to
decide who may read or change each file.

**Explain the need for an OS.** Without an OS each application would have to control the hardware itself, and the
processor and memory could not be shared between programs.

## Exam traps

- **OS described as hardware.** It is software.
- **Function named but not described.** Say what the OS does, not only the name.
- **Browser, spreadsheet or game as system software.** They are application software.
- **Utility under application software.** Utilities are system software.
- **Anti-virus "fixes the hardware".** It protects against malware.
- **Processor and memory management mixed up.** Processor is about processing time; memory is about RAM.
- **"Makes the computer faster."** The OS manages resources.
- **Brand names only.** Give the type of software.

## Key terms

| Term | Meaning |
|---|---|
| Multitasking | Running several programs at the same time by sharing processor time |
| Device driver | A program that lets the OS communicate with a hardware device |
| Access rights | Permissions that decide what a user may do with a file |
| Malware | Software designed to harm or gain unauthorised access |
| Platform | The system on which other programs run |

## Self-test

1. Define application software.
2. Define system software.
3. State whether a web browser is system or application software.
4. State whether an anti-virus program is system or application software.
5. Name the five areas that an operating system manages.
6. Describe what is meant by memory management.
7. State the job of a device driver.
8. State one purpose of a backup utility.
9. Explain why a computer needs an operating system.
10. Give one example of an application and one of a utility program.

**Answers:**
1. Software that performs end-user tasks.
2. Software that manages the computer system's resources and acts as a platform to run application software.
3. Application software.
4. System software (a utility program).
5. Processor, memory, I/O devices, applications and security.
6. Allocating RAM to programs, keeping each program's memory separate, and freeing it when the program ends.
7. It lets the OS and applications communicate with a particular hardware device.
8. To copy files so that they can be restored if the originals are lost or damaged.
9. It manages the hardware, shares resources between programs and provides a platform on which applications run.
10. For example a word processor (application) and a file compression program (utility).

## Related resources

- [Software classification study guide](/resources/oxfordaqa-igcse-computer-science-9210-software-classification/)
- [Software classification practice questions](/resources/oxfordaqa-igcse-computer-science-9210-software-classification-practice/)
- [Systems architecture revision notes](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture-revision-notes/)
