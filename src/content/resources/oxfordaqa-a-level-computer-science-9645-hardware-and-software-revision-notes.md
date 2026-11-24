---
title: "OxfordAQA A-Level Computer Science (9645): Hardware and software -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Hardware and Software Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.6.1: definitions of hardware and software, how they relate, classification examples and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.6.1 Hardware and software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.6 Computer systems). For fuller explanations, see the [hardware and software study guide](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software/); then practise with the [hardware and software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software-practice/).

## What the specification requires

- Understand the **relationship between hardware and software**.
- **Define** the terms hardware and software.
  - **Hardware** is the electronic components of a computer system.
  - **Software** is the sequences of instructions that are executed using the hardware.

## Key terms

| Term | Meaning |
|---|---|
| Hardware | The electronic components of a computer system |
| Software | Sequences of instructions that are executed using the hardware |
| Data | Values that software processes; not instructions |
| Firmware | Software stored in a chip within a hardware device |
| Driver | Software that lets the operating system control a device |
| Execute | To carry out an instruction |

## The relationship

| Statement | Explanation |
|---|---|
| Hardware needs software | Without instructions the processor has nothing to do |
| Software needs hardware | Instructions only take effect when hardware executes them |
| Same hardware, many uses | Different software makes one computer a word processor, a game console or a media player |
| Software is stored on hardware | Programs are held as binary in secondary storage and loaded into main memory |
| Software controls hardware | Instructions direct the processor, memory and devices |

A program is not running just because it is stored. It works when the processor **executes** its instructions.

## Typical hardware

| Group | Examples |
|---|---|
| Processor | CPU |
| Main memory | RAM |
| Secondary storage | Hard drive, solid-state drive, flash memory |
| Input | Keyboard, mouse, microphone, scanner, sensors |
| Output | Screen, speakers, printer |
| Communication | Network card, wireless adapter |

## Classification practice

| Item | Class |
|---|---|
| Solid-state drive | Hardware |
| Web browser | Software |
| Operating system | Software |
| Graphics card | Hardware |
| Photograph file | Data (neither) |
| Printer driver | Software |
| Keyboard | Hardware |
| Spreadsheet package | Software |
| RAM | Hardware |
| Virus checker | Software |

Rule: ask "is it an electronic component, or instructions to be executed?"

## Worked reminder: a stored program

A program of 2,000 machine code instructions with 4 bytes per instruction occupies 2,000 × 4 = 8,000 bytes, which is 8 kB or 7.8125 KiB. The storage is hardware; the 8,000 bytes of instructions are software; the processor (hardware) executes them.

## Upgrade questions

| Change | Hardware or software? |
|---|---|
| Add 8 GiB of RAM (8,589,934,592 bytes) | Hardware |
| Replace a hard drive with a solid-state drive | Hardware |
| Update the operating system | Software |
| Uninstall a program | Software |

## Example chain: pressing Print

1. Keyboard or mouse (hardware) selects Print.
2. The word processor (software) runs on the processor (hardware).
3. The operating system (software) passes the job to the printer driver (software).
4. A cable or wireless adapter (hardware) carries the signals.
5. The printer (hardware) prints, controlled by its firmware (software).

## Layers of a computer system

| Layer | Contents | Type |
|---|---|---|
| Users | People who run programs | |
| Application software | Word processor, browser, games | Software |
| System software | Operating system, utilities, libraries, translators | Software |
| Hardware | Processor, memory, storage, input and output devices | Hardware |

Each layer uses the services of the layer below. A user never deals with the hardware directly. The application asks the operating system, and the operating system controls the hardware.

## General-purpose and embedded systems

| | General-purpose computer | Embedded system |
|---|---|---|
| Purpose | Many tasks, set by the software installed | One task, built into a device |
| Software | Many programs, changed often | Fixed program, usually firmware |
| Examples | Laptop, tablet | Washing machine controller, car engine controller |

In both, the hardware executes software. The difference is how flexible the software is.

## Why software is held as binary

Hardware can store only bits. Instructions and data are therefore both stored as binary. A program of 2,000 four-byte instructions is 8,000 bytes. What makes a bit pattern an instruction rather than data is how the processor is directed to use it. The processor fetches the pattern and executes it as an instruction.

## Reasons to upgrade each

| Reason | Upgrade |
|---|---|
| More programs open at once | Hardware: more RAM |
| Faster loading of programs | Hardware: solid-state drive |
| New features or security fixes | Software: update |
| A new device will not work | Software: install the correct driver |

## Exam traps

- **Use the definitions.** Electronic components; sequences of instructions executed using the hardware.
- **Data is not software.** A document or image is processed by software.
- **A disc is hardware; the instructions on it are software.**
- **Firmware is still software,** although it is stored in hardware.
- **Mention both directions** in relationship answers.
- **Give examples** with each definition.
- **Do not describe hardware only as visible parts.** Internal components count.

## Quick self-test

1. Define hardware.
2. Define software.
3. Give two examples of hardware and two of software.
4. Why can one computer do many different jobs?
5. Is a JPEG photograph hardware or software?
6. What is the difference between a program being stored and a program being executed?
7. What is firmware?
8. Is a printer driver hardware or software?
9. A program has 2,000 instructions of 4 bytes each. How many bytes is that?
10. Why does hardware need software?
11. Why does software need hardware?
12. Is installing extra RAM a hardware or software change?

### Answers

1. The electronic components of a computer system.
2. The sequences of instructions that are executed using the hardware.
3. For example, processor and keyboard (hardware); web browser and operating system (software).
4. Different software tells the same hardware to do different tasks.
5. Neither; it is data.
6. Stored means held in memory or storage; executed means the processor carries out its instructions.
7. Software stored in a chip in a hardware device.
8. Software.
9. 8,000 bytes.
10. Without instructions, hardware has nothing to execute.
11. Instructions only have an effect when hardware executes them.
12. Hardware.

## More on this topic

- [Hardware and software study guide](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software/)
- [Hardware and software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-hardware-and-software-practice/)
- [Software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-software-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.1 Hardware and software.
