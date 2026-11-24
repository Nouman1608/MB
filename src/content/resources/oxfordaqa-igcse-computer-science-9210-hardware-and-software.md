---
title: "OxfordAQA IGCSE Computer Science (9210): Hardware and software -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Hardware and Software Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4.01
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
  - qualification: "igcse"
    topic: "computer-systems-9210"
    subtopic: "hardware-and-software-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.4.1: defining hardware and software and explaining how the two depend on each other."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.4.1 Hardware and software** of OxfordAQA International GCSE Computer Science (9210).
The specification has one statement: you must "define the terms hardware and software and understand the
relationship between them". It is a short section, but it underpins the rest of Topic 4. Software classification is
covered in the [software classification study
guide](/resources/oxfordaqa-igcse-computer-science-9210-software-classification/), and the main hardware
components are covered in the [systems architecture study
guide](/resources/oxfordaqa-igcse-computer-science-9210-systems-architecture/). This guide gives the definitions,
shows how to sort items into the right category, and explains the relationship in the way an examiner expects.

## Hardware

**Hardware** is the **physical** parts of a computer system: the components that you can see and touch. It includes
the circuits and devices that store, process, input and output data.

Examples of hardware:

| Type | Examples |
|---|---|
| Input devices | Keyboard, mouse, microphone, scanner, touch screen |
| Output devices | Monitor, speaker, printer |
| Processing | Central processing unit (CPU), motherboard |
| Memory | Random access memory (RAM), read only memory (ROM) |
| Storage | Hard disk drive, solid state drive, optical disc, memory card |
| Connections | Network card, cables, buses |

All of these are tangible. If you can hold it in your hand, or if it is a circuit that is built into a physical
device, it is hardware. A smartphone is a piece of hardware; so is a washing machine's controller board.

## Software

**Software** is the **programs**, that is the **sets of instructions**, that tell the hardware what to do. You cannot
touch software. It exists as data, stored as binary in memory or on a storage device, and it is run by the processor.

Examples of software:

- a word processor, a web browser, a game, a spreadsheet;
- an operating system such as the system that manages a laptop or phone;
- a utility program such as one that scans for viruses;
- the program that controls a washing machine.

Software is written by programmers, usually in a programming language, and then translated into the machine code that
the processor can follow. The words "program" and "software" are close in meaning. A software package may contain many
programs together with the data files they need.

### Hardware or software? A quick test

Ask: *Could I drop it on my foot?* A hard disk drive could be dropped on your foot, so it is hardware. A word processor
could not, because it is a set of instructions, so it is software. A file stored on that hard disk is data held on
hardware; the disk is the hardware, and the files and programs on it are software or data.

A common point of confusion is the **medium** and the **content**. A DVD (hardware) can hold a game (software). The
game is software; the disc is hardware.

## The relationship between hardware and software

The specification asks you to understand the relationship. The main ideas are as follows.

### 1. Hardware needs software to do anything useful

A computer with no software is just a collection of circuits. The processor can carry out instructions at great
speed, but it needs a program to tell it which instructions to carry out. Without an operating system and
application software, a laptop cannot display a desktop, open a document or connect to the internet.

### 2. Software needs hardware to run

A program is only a list of instructions stored as data. It cannot do anything unless hardware is there to **store** it
(on a disk or in memory), **execute** it (the processor) and **give** results (the screen, speakers or other output
devices). A program can be written on paper, but it does nothing until it is run on a computer.

### 3. Software is stored on hardware, and run by hardware

A program is normally stored on **secondary storage**, such as a solid state drive. When it is to be run, it is copied
into **main memory** (RAM), and the **processor** fetches each instruction from memory and carries it out. So the program
passes through three pieces of hardware: storage, memory and processor. Some instructions are held permanently in ROM,
which is also hardware.

### 4. The same hardware can do different jobs with different software

One laptop can be a games machine, a word processor or a music player, depending on the software that is installed
and run. The hardware does not change. This is what makes computers general-purpose machines. Installing or updating
software can add features to a computer without changing any of its physical parts.

### 5. Hardware limits what software can do

Software is designed with the hardware in mind. A program that needs a large amount of memory, or a fast processor, will
run slowly or not at all on a computer with too little. A video editing program needs a screen to show the pictures and
enough storage for the files. This is why software packages list their minimum hardware requirements.

### A summary

| | Hardware | Software |
|---|---|---|
| What it is | Physical components | Sets of instructions (programs) |
| Can it be touched? | Yes | No |
| Examples | CPU, RAM, keyboard, monitor | Word processor, operating system, game |
| What it does | Carries out the instructions, stores data, inputs and outputs | Tells the hardware what to do |
| Without the other | Does nothing useful | Cannot run |

## Worked examples

### Worked example 1: sorting items

Put each item into hardware or software.

| Item | Category | Reason |
|---|---|---|
| Solid state drive | Hardware | A physical storage device |
| Spreadsheet program | Software | A set of instructions for the user's task |
| Speaker | Hardware | A physical output device |
| Operating system | Software | A set of programs that manage the computer |
| Webcam | Hardware | A physical input device |
| Anti-virus program | Software | A utility program |

### Worked example 2: explain the relationship

**Question: explain the relationship between hardware and software. [3 marks]**

A strong answer: "Hardware is the physical components of a computer and software is the programs that tell it what
to do. Software cannot run without hardware, because the processor has to execute the instructions and memory has to
hold them. The hardware also needs software, because without a program the processor does not know which instructions
to carry out."

This answer is complete because it defines both terms, and it explains the dependence in **both directions**.

### Worked example 3: a scenario

A car has a satnav. Name one hardware part and one software part, and explain how they work together.

- Hardware: the screen (or the GPS receiver, processor or memory).
- Software: the mapping program that finds the route.

The program is stored in the satnav's memory; the processor runs it to work out a route from the position data; the
screen shows the route to the driver. If the map program is updated, the same hardware shows the newer maps.

## Why is the relationship important?

Understanding the relationship explains many ordinary computing situations.

- **An old computer runs a new program slowly.** The software demands more of the hardware than it can give.
- **A new feature arrives in an update.** The software has changed; the hardware has not.
- **A computer "does nothing" after a failed installation of the operating system.** The hardware is fine, but there is
  no software to start it up.
- **A broken screen means you cannot use your phone,** although the software is still fine.
- **Two computers with the same hardware behave differently** if they run different software.

## Common mistakes

- Defining hardware as "the parts of the computer" without saying they are **physical**.
- Defining software as "the programs" without saying they are **instructions** that tell the hardware what to do.
- Putting **files** or **data** in the hardware category. A file is stored on hardware but is not hardware.
- Calling the **operating system** hardware, or a **memory card** software.
- Describing the relationship in **one direction** only. A full answer says each depends on the other.
- Saying that "hardware is the inside of the computer and software is the outside". The case, screen and keyboard are
  hardware too.
- Using vague words such as "stuff" or "things" instead of "components", "instructions" or "programs".
- Writing that software can be damaged by being dropped. Only hardware can be physically damaged.

## Exam technique

- **Define** questions: for one mark, give one clear point, such as "the physical components of a computer system".
- **Explain the relationship**: write both definitions and a **because** sentence for each direction of dependence.
- **Classify** questions: say hardware or software, and give a one-line reason.
- **Scenario** questions: name a specific piece of hardware and a specific piece of software from the scenario, and
  say what each does.
- Keep to the plain meanings in the specification. You do not need the technical terms firmware or middleware for
  this section.

## More on this topic

For a condensed summary and a self-test, use the [Hardware and software revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-hardware-and-software-revision-notes/), and practise with the
[Hardware and software practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-hardware-and-software-practice/).
