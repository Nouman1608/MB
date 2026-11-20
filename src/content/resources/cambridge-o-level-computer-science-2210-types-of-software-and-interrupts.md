---
title: "Cambridge O Level Computer Science (2210): Types of software and interrupts"
seoTitle: "Cambridge O Level CS 2210 Software and Interrupts Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 4 – Software"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 4.1
syllabusTopics:
  - qualification: "o-level"
    topic: "software-2210"
  - qualification: "o-level"
    topic: "software-2210"
    subtopic: "types-of-software-and-interrupts-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 4.1: system and application software, the functions of an operating system, firmware and the bootloader, and how interrupts are generated and handled."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 4.1 of Cambridge O Level Computer Science 2210 has four learning statements. Candidates should describe the difference between **system software** and **application software**; describe the role and basic functions of an **operating system**; understand how **hardware, firmware and an operating system** are needed to run application software; and describe the role and operation of **interrupts**. This guide takes them in that order.

## Part 1: system software and application software

Software is a set of instructions that tells hardware what to do. The syllabus splits it into two groups according to who benefits from it.

| | System software | Application software |
|---|---|---|
| Purpose | Provides the services that **the computer** requires | Provides the services that **the user** requires |
| Includes | Operating system and utility software | Programs for a task the user wants to do |
| Examples | Windows, Linux, macOS, Android; an anti-virus program; a backup tool; a disk formatter | Word processor, spreadsheet, web browser, photo editor, game |
| Used directly by the user? | Often runs in the background | Yes, the user opens and uses it |

**Utility software** is system software that carries out maintenance and housekeeping tasks. Typical utilities are anti-virus software, backup software, file compression and disk formatting or defragmentation tools.

A quick test: if the program exists so that the computer can run, stay safe or be looked after, it is system software. If it exists so that the person can write a letter, edit a photo or play a game, it is application software.

## Part 2: the operating system

An **operating system (OS)** is system software that manages the computer's hardware and provides a platform for other software to run. Without it, the user could not load programs or use the computer in any practical way. The syllabus lists nine functions.

| Function | What it means |
|---|---|
| Managing files | Creates, names, organises, copies, moves and deletes files and folders, and records where they are stored |
| Handling interrupts | Responds when a device or program signals that it needs attention |
| Providing an interface | Gives the user a way to communicate with the computer, such as a graphical user interface |
| Managing peripherals and drivers | Controls input and output devices and uses driver software so that each device can be used |
| Managing memory | Decides which parts of RAM each program uses, so programs do not overwrite each other |
| Managing multitasking | Shares processor time between programs so that several appear to run at once |
| Providing a platform for running applications | Provides the environment in which applications are loaded and run |
| Providing system security | Protects the system, for example with passwords and by controlling access |
| Managing user accounts | Sets up accounts with their own login and settings, and controls what each account may do |

When describing a function in an exam, do more than repeat the name. "Managing memory" earns little; "decides where each program is stored in RAM so that programs do not overwrite one another" earns the mark.

### A scenario: one laptop, three tasks

A student writes an essay in a word processor, plays music and downloads a file at the same time. The OS:

- gives each program a share of **processor time** in quick turns (multitasking);
- gives each program its **own area of RAM** (memory management);
- uses the **sound card driver** and **network card driver** to control those peripherals;
- saves the finished essay in a **named file** inside a folder (file management);
- checks that the student **logs in** to their own account (user accounts and security).

## Part 3: hardware, firmware and the operating system

Application software cannot run by itself. There is a chain of layers:

1. **Hardware**: the physical components, such as the processor, memory and storage.
2. **Firmware**: software stored permanently in non-volatile memory on the hardware. The **bootloader** is firmware.
3. **Operating system**: the system software that manages the machine.
4. **Applications**: the software the user wants.

The syllabus puts it this way:

- applications are run **on the operating system**;
- the operating system is run **on the firmware**;
- the bootloader (firmware) is run **on the hardware**.

### What happens at start-up

When the computer is switched on, the RAM is empty, and the operating system is stored on the main storage device. The computer needs some instructions that are already in place. These are the **firmware**. The processor starts running the **bootloader**, which is stored in non-volatile memory. The bootloader loads the **operating system** from storage into RAM. Once the OS is running, the user can open **applications**.

If any layer is missing, the stack fails. No firmware means the computer cannot start. No OS means there is nothing to manage the hardware or provide a platform for applications.

## Part 4: interrupts

An **interrupt** is a signal sent to the processor to say that something needs its attention immediately. The processor stops what it is doing, deals with the signal and then goes back to the earlier task. Interrupts allow the computer to respond quickly to events without constantly checking for them.

### How an interrupt is generated

An interrupt can come from hardware or software.

| Type | Source | Examples |
|---|---|---|
| Hardware interrupt | A hardware device | Pressing a key on the keyboard; moving the mouse; a printer reporting that it is out of paper |
| Software interrupt | A running program | Division by zero; two processes trying to access the same memory location |

### How an interrupt is handled

Each type of interrupt has a piece of code called an **interrupt service routine (ISR)**. The operating system handles interrupts like this.

1. An **interrupt signal** is generated, for example when a key is pressed.
2. The processor checks for interrupts, normally at the end of each fetch-decode-execute cycle, so the current instruction is finished first.
3. The processor decides whether the interrupt is more important than the task it is running. Interrupts can have different priorities, and a higher priority interrupt is dealt with first.
4. If it must be dealt with now, the processor **saves the current state** of the task (for example the contents of its registers) so that the task can carry on later.
5. The processor runs the **ISR** for that interrupt.
6. When the ISR finishes, the **saved state is restored** and the processor continues the task it was running before.

### What happens as a result

The result depends on the interrupt.

- **Key pressed:** the ISR reads the key code and stores the character so that the program can use it.
- **Mouse moved:** the ISR reads the movement and updates the pointer position.
- **Division by zero:** the ISR stops the faulty instruction and displays an error message, or ends the program.
- **Two processes accessing the same memory location:** the ISR stops the clash and the operating system decides which process may continue.

Because the saved state is restored, the user does not see the task that was interrupted lose its place.

## Worked example

**Question:** Describe how the operating system deals with an interrupt caused by the user pressing a key while a spreadsheet is calculating. [4]

> Pressing the key generates an interrupt signal that is sent to the processor [1]. The processor finishes the current instruction and checks the priority of the interrupt [1]. The contents of the registers for the spreadsheet calculation are saved, and the interrupt service routine for the keyboard runs, reading the key and storing it [1]. When the routine is complete, the saved registers are restored and the spreadsheet calculation continues from where it stopped [1].

## Common mistakes

- **Putting a utility in the wrong group.** Anti-virus and backup tools are system software, not application software.
- **Saying the OS "runs the computer" and stopping.** Give a specific function with its meaning.
- **Reversing the layers.** Applications run on the OS, the OS runs on the firmware and the bootloader runs on the hardware.
- **Describing an interrupt as an error.** Many interrupts, such as key presses, are normal events.
- **Forgetting to say the earlier task resumes.** The ISR is followed by restoring the saved state.
- **Mixing up hardware and software interrupts.** Hardware interrupts come from devices. Software interrupts come from programs.

## Exam technique

- **Difference between system and application software:** one mark for each of the two purposes, and a named example of each.
- **Role of an OS:** pick at least two named functions and say what each does.
- **Interrupts:** name the source, the signal, the ISR and the return to the previous task.
- **Scenario questions:** link the function or interrupt to the device or program in the scenario.

## Quick check

1. Is a spreadsheet system software or application software? *Application software.*
2. Name one utility program. *Anti-virus, backup, file compression or disk formatting.*
3. Which layer runs directly on the hardware? *The firmware, including the bootloader.*
4. Is pressing a key a hardware or a software interrupt? *Hardware.*
5. What runs when the processor deals with an interrupt? *An interrupt service routine.*

## Continue with

Revise with the [Types of software and interrupts revision notes](/resources/cambridge-o-level-computer-science-2210-types-of-software-and-interrupts-revision-notes/) and practise with the [Types of software and interrupts practice questions](/resources/cambridge-o-level-computer-science-2210-types-of-software-and-interrupts-practice/).
