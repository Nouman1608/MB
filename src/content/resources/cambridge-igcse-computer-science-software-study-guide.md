---
title: "Cambridge IGCSE Computer Science (0478): Software -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Software"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "software"
description: "IGCSE study guide to system and application software, operating system functions, utilities, interrupts, translators and IDEs for Cambridge Computer Science 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Software is the set of programs that tells computer hardware what to do. This topic separates software into types, explains what an operating system does for you behind the scenes, describes the utility programs that keep a computer healthy, and covers how programs written by humans are turned into the machine code a processor can run. It is a short topic with many definitions, so precise wording earns the marks.

## Where this fits in the syllabus

Topic 4 of Cambridge IGCSE Computer Science (0478) is examined on Paper 1 (Computer Systems). It follows the hardware topic and links to the programming topics on Paper 2. Interrupts also appear in the hardware work on the fetch-decode-execute cycle. Typical questions ask you to state functions, to choose the right type of translator for a situation or to describe a feature of an IDE.

## System software and application software

**System software** manages and controls the computer and provides a platform for other software. The main examples are the **operating system**, **utility software**, **device drivers** and **translators** (compilers, interpreters and assemblers).

**Application software** lets a user do a task that is useful in itself, such as writing a document, editing a photograph or sending email. Examples are a word processor, a spreadsheet, a web browser and a game. A good test is to ask "is this software doing the user's job, or running the computer?" If it does the user's job it is application software.

## The operating system

An **operating system (OS)** is the main system software. It is loaded when the computer starts and stays in control while it runs. Cambridge expects you to know these functions:

- **Managing files**: creating, naming, moving, copying, deleting and organising files and folders, and keeping track of where data is stored.
- **Handling interrupts**: when a device or program sends an interrupt signal, the OS pauses the current task, runs the correct routine and then resumes.
- **Providing a user interface**: a graphical interface (windows, icons, menus and pointer), a command line, or a touch interface lets the user control the computer.
- **Managing peripherals and their drivers**: the OS uses **device drivers**, small programs that translate OS commands into signals a particular printer, keyboard or scanner understands.
- **Managing memory**: deciding where programs and data are held in RAM, so that programs do not overwrite each other.
- **Managing multitasking**: sharing processor time between several running programs so they seem to run together.
- **Providing a platform for running applications**: applications call on the OS for memory, files and input and output.
- **Managing system security**: user accounts, passwords and access rights controlling who may use the computer and its files.
- **Managing user accounts**: separate settings and storage for each user.

### Interrupts

An **interrupt** is a signal to the processor that something needs attention at once. Sources include a key press, a printer running out of paper, a software error such as division by zero, or a timer signalling that a program has used its allocation of time. After each fetch-decode-execute cycle the processor checks for interrupts. If one has arrived and has high enough priority, the processor stores the current state, runs the **interrupt service routine** and then restores the state and carries on. Interrupts mean the processor does not waste time repeatedly checking each device.

## Utility software

**Utility software** carries out maintenance tasks. Know these and what each is for.

| Utility | Purpose |
|---|---|
| Antivirus | Scans for, quarantines and removes malware, and checks new files |
| Backup software | Makes copies of files so they can be restored after loss or damage |
| Disk formatter | Prepares a storage device by setting up the structure for storing files |
| Disk defragmenter | Rearranges the scattered parts of files on a hard disk drive so they are stored together, which can speed up reading; it is not needed for solid-state drives |
| File compression | Reduces the size of files so they use less storage and transfer faster |
| Disk content analysis or repair | Checks how storage is used and fixes problems |
| Firewall | Controls which network traffic is allowed in or out |

## Programming languages and translators

A **high-level language** such as Python is close to human language, is easier to read, write and debug, and does not depend on one processor. One statement usually becomes many machine instructions. A **low-level language** is closer to the processor. **Machine code** is binary instructions that the processor runs directly. **Assembly language** uses short mnemonics such as LDA and ADD, one for each machine instruction, and gives the programmer direct control over hardware, memory and speed, which is why it is used for device drivers and embedded systems. Low-level code is harder to write and is specific to one type of processor.

Processors only run machine code, so other code needs a **translator**.

- A **compiler** translates the whole high-level program into machine code before it is run, producing a separate executable file. It reports all errors after translation and the program runs fast without needing the compiler present. The source code is not shared when the executable is distributed.
- An **interpreter** translates and runs one statement at a time. It stops at the first error, which is useful for testing and debugging, but running is slower and the interpreter is needed every time.
- An **assembler** translates assembly language into machine code.

### Integrated development environment (IDE)

An **IDE** is software that provides tools for writing programs in one place. Features include a **code editor** with colour coding of keywords (syntax highlighting), auto-completion and auto-correction; **error diagnostics** that point to the line with an error; a **run-time environment** to run the code; **translators**; and **debugging tools** such as breakpoints, stepping and variable watching. Pretty printing lays out the code with correct indentation to improve readability.

## Worked example 1: compression and transfer time

A 48 MB video file is compressed to 15 MB. A user's connection runs at 20 megabits per second. Use 1 byte = 8 bits.

1. Compression ratio: 48 / 15 = 3.2 to 1.
2. Space saved: 48 - 15 = 33 MB, which is 33 / 48 x 100 = 68.75 percent.
3. Upload time before compression: 48 x 8 = 384 megabits, and 384 / 20 = 19.2 seconds.
4. Upload time after: 15 x 8 = 120 megabits, and 120 / 20 = 6 seconds.

So compression saves 13.2 seconds per upload. The recipient needs decompression software to open the file. Remember that lossy compression (covered in the data representation topic) permanently removes some data, whereas lossless compression does not.

## Worked example 2: choosing a translator

A developer is testing a new program and expects many small errors. A second developer has finished a program that will be sold to customers who do not have programming tools. Which translator suits each?

For the first, an **interpreter**, because it runs the program statement by statement, stops at an error, and the developer can fix it and run again with no wait for full compilation. For the second, a **compiler**, because it produces an executable file that runs without a translator on the customer's machine, runs faster and does not reveal the source code. A good answer names the translator and links each reason to the scenario.

## Common mistakes

- Calling a utility such as antivirus "application software". Utilities are system software.
- Stating the OS "runs the CPU". Say what it manages: files, memory, peripherals, security and multitasking.
- Describing an interpreter as translating the whole program first.
- Saying defragmentation deletes unwanted files; it only rearranges the parts of files.
- Mixing up the assembler and the compiler.
- Saying a high-level language is "better" without saying how.

## Exam technique

**State** needs a short fact; **describe** needs a sentence on how it works; **explain** needs a reason. Where marks are for a number of functions, give distinct points, not rewordings. For comparison questions on compilers and interpreters, give points about both and about the result (executable file or line by line). In calculations, show conversions such as bytes to bits.

## Check your understanding

1. Give two examples of system software. *Operating system, utility programs, device drivers or translators.*
2. State two functions of an operating system. *Any two such as managing files, handling interrupts, managing memory, providing a user interface or managing security.*
3. What is a device driver for? *It allows the OS to communicate with a particular peripheral by translating OS commands into signals the device understands.*
4. Describe what a disk defragmenter does. *It reorders the parts of files that are scattered across a hard disk drive so they are stored together, speeding up access.*
5. State one advantage of an interpreter over a compiler. *It runs the code line by line and stops at an error, so it helps with testing and debugging.*
6. Give two features of an IDE. *Code editor with syntax highlighting, error diagnostics, run-time environment, auto-completion or debugging tools.*
7. A 30 MB file compresses to 12 MB. Calculate the percentage saved. *18 / 30 x 100 = 60 percent.*
8. Why is assembly language used for a device driver? *It gives direct control of the hardware and uses memory and processing time efficiently.*
