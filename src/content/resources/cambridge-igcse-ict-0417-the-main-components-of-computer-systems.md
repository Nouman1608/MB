---
title: "Cambridge IGCSE ICT (0417): The main components of computer systems"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 1: Types and components of computer systems"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 1.2
syllabusTopics:
  - qualification: "igcse"
    topic: "types-and-components-of-computer-systems"
    subtopic: "the-main-components-of-computer-systems-0417"
description: "The CPU, RAM and ROM, input and output devices, and backing storage compared with internal memory, explained in depth for Cambridge IGCSE ICT 0417 section 1.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 1.2 of Cambridge IGCSE ICT 0417 looks at a computer system as a set of parts that work together: the **Central Processing Unit (CPU)**, **internal memory** (ROM and RAM), **input and output devices**, and **backing storage**. Every item in this section is examined through two verbs that the syllabus uses: you must know the **characteristics** of each part, and the **differences** between pairs of parts. That makes this a comparison topic. Most marks go to answers that set one component against another, point by point.

The [main components revision notes](/resources/cambridge-igcse-ict-0417-the-main-components-of-computer-systems-revision-notes/) condense this guide. For questions on this section, the [computer systems practice questions](/resources/ict-computer-systems-practice/) cover the CPU, memory, devices and backing storage.

## How the parts fit together

A computer system follows a simple pattern: **input**, **processing**, **output** and **storage**.

1. Data and instructions are entered through an **input device**, such as a keyboard.
2. They are held in **RAM** while they are being used.
3. The **CPU** processes them, following the instructions of a program.
4. The results are presented by an **output device**, such as a monitor.
5. Anything that must be kept after the computer is switched off is saved to **backing storage**.

**ROM** sits alongside this pattern: it supplies the instructions the computer needs as soon as it is switched on, before anything has been loaded into RAM.

## The CPU

The syllabus asks for "the role of the CPU in processing instructions entered into the computer in order to produce an output". In plain terms:

- The CPU **carries out the instructions** of the program that is running, one after another, at very high speed.
- It **processes the data**: it performs calculations, compares values and makes decisions, such as whether a number is above a limit.
- It **controls the other components**, so that data is sent from input devices into memory and results are sent to output devices.
- It works on instructions and data held in **RAM**, not directly on backing storage. A program on a hard disk must be loaded into RAM before the CPU can run it.

### Example: processing an instruction to produce an output

A user types a formula that adds two numbers into a spreadsheet cell and presses Enter. The keyboard is the input device; the formula and the numbers are placed in RAM; the CPU follows the spreadsheet program's instructions to calculate the result; the answer is sent to the monitor. If the user then saves the file, it is written to backing storage. A full answer to "describe the role of the CPU" identifies that the CPU **processes** what was **input** to **produce an output**, because those are the syllabus's own three ideas.

## Internal memory: ROM and RAM

Internal memory is memory the CPU can access directly. There are two types.

### Characteristics

**Read-only memory (ROM)**

- **Non-volatile**: contents are kept when the power is switched off.
- **Read only**: in normal use its contents cannot be changed by the user or by programs.
- Holds the **start-up instructions** (sometimes called the BIOS or boot program) that tell the computer how to start and how to load the operating system from backing storage.
- Usually **small in capacity**, because it only needs to hold a fixed set of instructions.

**Random access memory (RAM)**

- **Volatile**: contents are lost when the power is switched off.
- **Read and write**: data can be changed at any time.
- Holds the **operating system, programs and data currently in use**.
- Usually **larger in capacity** than ROM. More RAM lets more programs and larger files be open at once without slowing the computer.

### Differences

| ROM | RAM |
|---|---|
| Non-volatile | Volatile |
| Contents cannot normally be changed | Contents can be read and changed |
| Stores start-up instructions | Stores programs and data in current use |
| Contents are permanent and set when made | Contents change constantly as the user works |
| Smaller capacity | Larger capacity |

When an exam question says "describe **two** differences", write each difference as a matched pair. "ROM is non-volatile whereas RAM is volatile" is one difference; "RAM is volatile" on its own is only half of it.

## Input and output devices

**Input devices** are used to enter data or instructions into the computer, converting them into a form the computer can process. **Output devices** take the results of processing and present them in a form the user can understand or use, such as on screen, on paper or as sound, or use them to make something happen, as an actuator does.

| Input devices | Output devices |
|---|---|
| Send data **into** the computer | Receive data **from** the computer |
| Data comes from the user or the environment | Results go to the user or to a controlled device |
| Examples: keyboard, mouse, microphone, scanner, sensor | Examples: monitor, printer, speaker, projector, actuator |

The detailed uses, advantages and disadvantages of each device belong to Topic 2. In section 1.2 you need the general characteristics and the difference in the **direction of data flow**. A touch screen is a useful case: it acts as an input device when the user touches it and as an output device when it displays information, so in an answer you should say which role you mean.

## Backing storage

**Backing storage** (also called secondary storage) is used to store data and programs **permanently**, so that they are still there after the computer is switched off.

### Characteristics

- **Non-volatile**.
- **Much larger capacity** than internal memory.
- **Cheaper per unit of storage** than RAM.
- **Slower to access** than internal memory.
- **Not directly accessed by the CPU**: data must be copied into RAM first.
- Can be **internal** (inside the computer, such as an internal hard disk drive or solid-state drive) or **external and portable** (such as a pen drive or portable hard drive), so data can be moved between computers.

### Differences between backing storage and internal memory

| Backing storage | Internal memory (RAM and ROM) |
|---|---|
| Stores files and programs for the long term | Holds start-up instructions (ROM) and work in progress (RAM) |
| Non-volatile | RAM is volatile; ROM is non-volatile |
| Very large capacity | Smaller capacity |
| Slower access | Faster access |
| Cheaper per gigabyte | More expensive per gigabyte |
| CPU cannot access it directly | CPU accesses it directly |
| Can often be removed and carried | Fixed inside the computer |

Be careful with volatility. The statement "internal memory is volatile" is only true of RAM. If a question compares backing storage with ROM, the difference is not volatility (both are non-volatile); it is capacity, the ability to be changed and the type of contents.

## Worked example: a compare answer

*Question: A student saves a project at the end of a lesson. Describe **two** differences between the RAM the project was in while she worked and the backing storage it was saved to. [4]*

> RAM is volatile, so the project would be lost if the computer were switched off without saving (1), whereas backing storage is non-volatile and keeps the file permanently (1). RAM is accessed directly by the CPU and is faster (1), whereas backing storage is slower and the file must be loaded back into RAM before it can be edited again (1).

Each difference is written as a contrast and linked to the situation in the question, which shows the examiner the student understands why saving matters.

## Common mistakes

- Calling RAM "storage" or "backing storage". RAM is internal memory.
- Saying ROM "stores files". It holds a fixed set of instructions.
- Writing "the CPU stores data". The CPU processes data; memory and storage hold it.
- Saying "RAM is permanent". It is volatile.
- Describing a device without its direction: an answer to "why is a microphone an input device?" must say that it sends data into the computer.
- Listing only one side of a difference.

## Exam technique

- **Describe the characteristics**: give separate facts, for example "non-volatile", "read only", "holds start-up instructions".
- **Describe the differences**: write matched pairs using "whereas".
- **Explain why**: link the characteristic to a consequence. "RAM is volatile, so unsaved work is lost in a power cut."
- **Identify**: name the component only; no explanation is needed.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 1 "Types and components of computer systems", section 1.2 The main components of computer systems.
