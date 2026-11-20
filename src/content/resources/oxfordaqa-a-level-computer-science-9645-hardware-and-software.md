---
title: "OxfordAQA A-Level Computer Science (9645): Hardware and software"
seoTitle: "OxfordAQA A-Level CS 9645 Hardware and Software Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6 – Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
  - qualification: "a-level"
    topic: "computer-systems-9645"
    subtopic: "hardware-and-software-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.6.1 in depth: defining hardware and software, how the two depend on each other, classification examples and exam wording."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.6.1 Hardware and software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.6 Computer systems (AS). The specification asks you to understand the **relationship between hardware and software** and to **define the terms**. Its additional information gives the definitions: **hardware** is "the electronic components of a computer system", and **software** is "the sequences of instructions that are executed using the hardware".

For quick recall use the [hardware and software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software-revision-notes/), then try the [hardware and software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software-practice/). The topic-level [computer systems study guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/) covers all of section 3.6; this page goes deeper on the opening sub-topic. Calculations below were checked with a script.

## The two definitions

**Hardware** is the **electronic components** of a computer system. You can touch hardware: the processor, main memory, a keyboard, a screen, a hard drive, a network card, a printer.

**Software** is the **sequences of instructions** that are **executed using the hardware**. Software is not a physical thing. It is a set of instructions, written by people, that tell the hardware what to do. A web browser, a spreadsheet, a game and an operating system are all software.

Two points are worth stressing.

1. Software is **instructions**. The files that a program works on (a photograph, a document, a spreadsheet) are **data**, not software, although they are stored using the same hardware.
2. Software is **executed using the hardware**. A program that is only stored is not doing anything. It does work when the processor carries out its instructions.

## How software and hardware relate

Hardware and software depend on each other.

- **Hardware needs software.** Without instructions to execute, a processor does nothing useful. A computer with no operating system and no programs is a collection of electronic parts.
- **Software needs hardware.** Instructions are only effective when something executes them. A program cannot run on paper.
- **The same hardware can do many jobs.** A single laptop can be a word processor, a games machine and a music player, simply by running different software. This flexibility is a major reason general-purpose computers are so useful.
- **Software is stored on hardware.** A program is held as binary in secondary storage and loaded into main memory when it runs. Its instructions are stored as bit patterns, like any other data.
- **Software is written for particular hardware.** Machine code instructions are specific to a processor design, and software that deals with devices (drivers) depends on the device.

### Stored program idea

Instructions are loaded into main memory as binary numbers. The processor repeatedly fetches an instruction, decodes it and executes it (this is covered in sub-topic 3.7.3). Because the instructions are stored as data, a computer can switch between programs by loading different instructions, without any change to the physical parts.

### A size example

Suppose a small program consists of 2,000 machine code instructions, each occupying 4 bytes. It occupies 2,000 × 4 = 8,000 bytes. That is 8 kB in decimal units, or 7.8125 KiB in binary units. The program is stored on hardware (a drive or flash memory), copied into main memory, and executed by the processor, which is also hardware.

## Types of hardware in a computer system

| Group | Examples | Role |
|---|---|---|
| Processor | CPU | Executes instructions |
| Main memory | RAM | Holds the instructions and data currently in use |
| Secondary storage | Hard drive, solid-state drive, flash memory | Holds programs and data permanently |
| Input devices | Keyboard, mouse, microphone, scanner, sensors | Send data into the system |
| Output devices | Screen, speakers, printer | Present results |
| Communication hardware | Network card, wireless adapter | Connect to other systems |

Sub-topic 3.7 describes the internal components in more detail.

## Layers of a computer system

A computer system can be pictured as layers. At the bottom is the hardware. Above it is system software, mainly the operating system, which controls the hardware and hides its details. Above that is application software, which the user runs to get a job done. The user sits at the top. Each layer uses only the services of the layer directly below it, so a word processor asks the operating system to save a file, and the operating system uses the device driver and the drive to do it.

## General-purpose and embedded systems

A **general-purpose computer**, such as a laptop, can do many jobs because its software can be changed. An **embedded system**, such as the controller in a washing machine or a car engine, has hardware built into a device and runs one fixed program for a single purpose. That program is usually stored in a chip as firmware. In both kinds of system the hardware executes software, and the difference is how easily the software can be replaced.

## Hardware and software upgrades

Some problems are fixed by changing hardware and some by changing software. More RAM lets more programs be held in main memory at once. A solid-state drive loads programs faster. A software update can add features or repair security faults. A new peripheral often needs a new driver, which is software. When answering an exam question, say which kind of change is needed and explain the effect it has.

## Examples to classify

Deciding whether something is hardware or software is a classic short question. Apply the definitions: electronic component, or instructions?

| Item | Hardware or software? | Reason |
|---|---|---|
| Solid-state drive | Hardware | Electronic component |
| Web browser | Software | A program: sequences of instructions |
| Operating system | Software | Instructions that manage the computer |
| Graphics card | Hardware | Electronic component |
| Photograph file (JPEG) | Neither: it is data | Not instructions; it is stored on hardware and processed by software |
| Printer driver | Software | Instructions that let the OS control the printer |
| Keyboard | Hardware | Physical input device |
| Spreadsheet application | Software | Instructions for working with tables of data |
| RAM | Hardware | Electronic component |
| Virus checker | Software | Instructions, a utility program |

Some items are in between. **Firmware** is software stored in a hardware chip (such as the program a router or printer uses to start itself). It is still software, because it is sequences of instructions, even though it lives in hardware.

## Worked example 1: what happens when you print

A student presses Print in a word processor.

1. The student uses **hardware** (the keyboard and mouse) to select the option.
2. The word processor, which is **software**, is being executed by the **hardware** processor. Its instructions prepare the page.
3. The operating system (software) sends the job to the printer driver (software).
4. The driver instructions send signals through hardware (a cable or wireless adapter) to the printer.
5. The printer's hardware, controlled by its own firmware, produces the paper copy.

At every step software tells hardware what to do, and hardware carries out the instructions.

## Worked example 2: upgrading

A school is trying to speed up its computers. State whether each change is a hardware change or a software change.

| Change | Type | Notes |
|---|---|---|
| Install an extra 8 GiB of RAM | Hardware | More main memory, so more programs fit at once |
| Replace the hard drive with a solid-state drive | Hardware | Physical component replaced |
| Update the operating system | Software | New instructions replace old ones |
| Uninstall an unused program | Software | Instructions removed; frees storage space |

Adding 8 GiB of RAM adds 8 × 2^30 = 8,589,934,592 bytes of memory. Adding hardware changes what the system can do, but software must still be present to make use of it.

## Exam technique

- **Quote the definitions** in the specification's words: electronic components; sequences of instructions executed using the hardware.
- **Give an example of each** when defining, to make the answer concrete.
- **For relationship questions,** state that each is needed by the other and give a pair of connected examples, such as a processor executing a program.
- **For classification questions,** say which definition the item meets.
- **Do not call data software.** Mention that data is processed by software.

## Common mistakes

- Defining software as "programs" without saying they are instructions that the hardware executes.
- Describing hardware as "the parts you can see" (the processor chip is hardware even if it is inside a case).
- Saying a document or image file is software.
- Saying software is physical because it is stored on a disc. The disc is hardware; the instructions on it are software.
- Describing the relationship as "hardware runs software" without mentioning that software controls what the hardware does.
- Listing only input and output devices as hardware, forgetting the processor, memory and storage.

## Next steps

- [Hardware and software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software-revision-notes/)
- [Hardware and software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software-practice/)
- [Software study guide](/resources/oxfordaqa-a-level-computer-science-9645-software/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.1 Hardware and software.
