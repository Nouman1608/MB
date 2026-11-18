---
title: "Cambridge IGCSE ICT (0417): Hardware and software"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 1: Types and components of computer systems"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 1.1
syllabusTopics:
  - qualification: "igcse"
    topic: "types-and-components-of-computer-systems"
    subtopic: "hardware-and-software-0417"
description: "Hardware components, applications and system software, and analogue and digital data conversion, explained in depth for Cambridge IGCSE ICT 0417 section 1.1."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 1.1 of Cambridge IGCSE ICT 0417 sets out the vocabulary the rest of the course depends on. It has three parts: **hardware** (the physical components and what each one is for), **software** (applications software and system software, with named examples of each), and **analogue and digital data** (how they differ and why a computer system has to convert between them). Questions on this section are often short, but they are marked precisely: a vague description such as "the CPU is the brain" earns nothing, while "the CPU processes instructions and data to produce an output" does.

This guide goes through each named item in the syllabus list. Use the [hardware and software revision notes](/resources/cambridge-igcse-ict-0417-hardware-and-software-revision-notes/) for condensed recall and the [hardware and software practice questions](/resources/cambridge-igcse-ict-0417-hardware-and-software-practice/) to test yourself.

## Hardware: the physical components

The syllabus defines hardware as "the physical components of a computer system". If you can touch it, it is hardware. The syllabus then names three groups.

### Internal components

- **Central Processing Unit (CPU)**: the component that carries out (executes) the instructions in a program and processes data. In everyday use the word **processor** means the same thing; a modern processor chip may contain more than one processing core.
- **Motherboard**: the main printed circuit board inside the computer. It holds the CPU and the memory, has slots for expansion cards, and contains the connections (circuits) that let every component communicate with every other. Without the motherboard, the CPU, memory and cards could not exchange data.

### Internal memory

- **Random access memory (RAM)**: holds the programs and data that are currently in use. It can be read from and written to, and it is **volatile**, so its contents are lost when the power is switched off.
- **Read-only memory (ROM)**: holds instructions that must not change and must be available as soon as the computer is switched on, such as the start-up (boot) instructions. It is **non-volatile** and, in normal use, cannot be written to.

The detailed comparison of RAM and ROM belongs to section 1.2, but you need to be able to name them here as internal memory.

### Other hardware components

| Component | What it does |
|---|---|
| Graphics card | Processes image data and sends the signal that produces the picture on the monitor; takes graphics work away from the CPU |
| Sound card | Converts digital sound data into an analogue signal for speakers or headphones, and converts analogue input from a microphone into digital data |
| Network Interface Card (NIC) | Allows the computer to connect to a network, wired or wireless; each NIC has a unique hardware address |
| Camera | Captures still or moving images as digital data; built into most laptops, tablets and phones |
| Internal and external storage devices | Keep data and programs permanently, for example an internal solid-state drive or an external portable hard drive |
| Input and output devices | Get data into the computer (keyboard, mouse) and present results (monitor, printer) |

Notice that the sound card is an example of conversion between analogue and digital data, which links this list to the third part of the section.

## Software: programs that control the computer

The syllabus defines software as "programs for controlling the operation of a computer or processing of electronic data". Software has no physical form: the disc or drive it is stored on is hardware, the program itself is software.

### Applications software

Applications software "provides the services that the user requires to solve a task". The syllabus names these examples, so learn what each one is used for:

- **Word processing**: creating, editing and formatting text documents such as letters and reports.
- **Spreadsheet**: organising numbers in rows and columns, carrying out calculations with formulae and producing graphs and models.
- **Database management system**: storing data in tables so that it can be searched, sorted and reported on.
- **Control software**: uses data from sensors to decide when to switch devices such as heaters, pumps or motors on and off.
- **Measurement software**: collects and records readings from sensors over a period of time, such as temperatures in a laboratory, so that they can be analysed.
- **Applets and apps**: an app is a program written for a particular task, usually on a mobile device; an applet is a small program that performs one task and runs inside another program, such as a web browser.
- **Video editing**: cutting, joining and adding effects, titles and soundtracks to video clips.
- **Graphics editing**: creating and changing images, for example cropping, resizing and adjusting colour.
- **Audio editing**: recording, cutting, mixing and adding effects to sound files.
- **Computer aided design (CAD)**: producing accurate technical drawings and 3D models of products, buildings or parts.

### System software

System software "provides the services that the computer requires to operate". The named examples are:

- **Compiler**: translates a whole program written in a high-level language into machine code before it is run, producing a file that can be executed.
- **Linker**: combines separately compiled sections of a program (and any library routines it uses) into one single program that can be run.
- **Device driver**: a small program that tells the operating system how to communicate with a particular hardware device, such as a printer. A new printer will not work properly until its driver is installed.
- **Operating system**: manages the hardware, runs other software and provides the user interface (section 1.3 covers interface types).
- **Utilities**: programs that carry out housekeeping tasks that keep the computer working well, such as anti-virus scanning, backing up, file compression, disk formatting and defragmenting a hard disk.

A useful test: if the software would still be needed even when no user task is being carried out, it is probably system software.

## Analogue and digital data

**Analogue data** varies continuously and can take any value within a range. Temperature, sound and light levels in the real world are analogue. **Digital data** has discrete (separate) values, and inside a computer it is stored as binary, in 0s and 1s.

| Analogue data | Digital data |
|---|---|
| Continuous, smoothly changing values | Discrete, stepped values |
| Any value within a range | Only set values |
| Found in the physical world | Used and stored by computers |
| Cannot be processed directly by a computer | Can be processed, stored and transmitted by a computer |

The syllabus names two reasons for conversion:

1. **Analogue to digital**, so that data can be processed by a computer. A sensor produces an analogue signal; an **analogue-to-digital converter (ADC)** turns it into digital data.
2. **Digital to analogue**, so that data can be used to control devices. A computer's digital output passes through a **digital-to-analogue converter (DAC)** so that it can drive a device such as a motor or a loudspeaker.

## Worked example: classifying software in a scenario

*A small architecture firm uses the following software: a program that produces 3D models of buildings; a program that turns a programmer's high-level code into an executable file; the software that lets a new plotter work with the computer; a program that compresses large drawings before emailing them. Classify each as applications or system software.*

- 3D modelling program: **applications software** (CAD), because it solves the user's task of designing a building.
- Code translation program: **system software** (a compiler).
- Plotter software: **system software** (a device driver), even though it concerns only one device.
- Compression program: **system software** (a utility), because it maintains files rather than producing the user's work.

The common error is to call the device driver applications software because it "does one job". The syllabus lists device drivers under system software.

## Annotated model answer: why conversion is needed

*Question: A recording studio records a singer using a microphone and plays the edited track through speakers. Explain why the data has to be converted twice. [4]*

> The singer's voice produces sound waves, which the microphone turns into an analogue signal that varies continuously (1). The computer can only process digital data, so the signal is converted from analogue to digital before it is edited (1). The edited track is stored as digital data, but speakers need a continuously varying analogue signal to move and produce sound (1), so the data is converted from digital to analogue before it is played (1).

Each mark is attached to one step: the analogue source, the reason for the first conversion, the need of the output device, and the second conversion. Naming the sound card as the component that does the conversions would be a sound addition.

## Common mistakes

- Calling RAM "storage". RAM is internal memory; storage devices are backing storage.
- Saying ROM "stores the operating system". On most computers ROM holds the start-up instructions, which then load the operating system from backing storage.
- Defining hardware as "the parts inside the computer". External devices such as printers and keyboards are hardware too.
- Listing a brand name instead of a type of software. No marks are given for brand names; write "spreadsheet", not a product name.
- Describing digital data as "better" than analogue. The marks are for the characteristics: continuous versus discrete.
- Confusing compilers and linkers. A compiler translates; a linker joins the translated parts together.

## Exam technique

- **State** or **Name**: one word or phrase is enough, such as "motherboard".
- **Describe**: give the characteristics or what the item does. "A device driver allows the operating system to communicate with a hardware device."
- **Explain**: give a reason, often using "because" or "so that". The conversion question above is an explain question.
- **Give examples**: when asked for examples of applications or system software, use the types the syllabus names. Two examples from the same type, such as two different utilities, may count as one.
- **Compare** or **Describe the differences**: make each point a two-sided contrast, for example "analogue data is continuous, whereas digital data is discrete".

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 1 "Types and components of computer systems", section 1.1 Hardware and software.
