---
title: "Cambridge O Level Computer Science (2210): Types of software and interrupts -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Software and Interrupts Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 4.1: system and application software, operating system functions, the software stack, interrupts and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 4.1, Types of software and interrupts. For the full explanations and a model answer, use the [Types of software and interrupts study guide](/resources/cambridge-o-level-computer-science-2210-types-of-software-and-interrupts/).

## Syllabus checklist

- The difference between system software and application software, with examples of each.
- The role and basic functions of an operating system.
- How hardware, firmware and an operating system are needed to run application software.
- The role and operation of interrupts: how one is generated, how it is handled using an interrupt service routine, and what happens as a result.

## Key terms

| Term | Definition |
|---|---|
| System software | Software that provides the services the computer requires, including the operating system and utility software |
| Application software | Software that provides the services the user requires |
| Operating system (OS) | System software that manages the hardware and provides a platform for applications |
| Utility software | System software for maintenance tasks, such as anti-virus, backup and compression |
| Firmware | Software stored permanently on hardware, such as the bootloader |
| Bootloader | The firmware that starts the computer and loads the operating system |
| Driver | Software that lets the OS control a particular peripheral |
| Interrupt | A signal telling the processor that something needs attention |
| Interrupt service routine (ISR) | The code run to deal with a particular interrupt |

## System versus application software

| | System software | Application software |
|---|---|---|
| Serves | The computer | The user |
| Examples | Operating system, anti-virus, backup, disk formatter, compression tool | Word processor, spreadsheet, web browser, game, photo editor |

Sorting tip: could the user do a task they care about (write, calculate, browse, play) with it? If yes, it is application software.

## Functions of an operating system

| Function | One-line explanation |
|---|---|
| Managing files | Creates, names, moves, copies and deletes files and folders |
| Handling interrupts | Responds to signals from devices and programs |
| Providing an interface | Lets the user communicate with the computer |
| Managing peripherals and drivers | Controls devices and loads their drivers |
| Managing memory | Allocates RAM to programs and stops them overwriting each other |
| Managing multitasking | Shares processor time so several programs seem to run at once |
| Providing a platform for running applications | Supplies the environment in which applications run |
| Providing system security | Protects the system, for example with passwords and access control |
| Managing user accounts | Sets up logins and controls what each user may do |

## The software stack

Reading from the top down:

1. **Applications** run on the operating system.
2. The **operating system** runs on the firmware.
3. The **bootloader (firmware)** runs on the hardware.

At start-up: the processor runs the bootloader, the bootloader loads the OS into RAM, and then applications can be opened.

## Interrupts at a glance

| | Hardware interrupt | Software interrupt |
|---|---|---|
| Source | A device | A running program |
| Examples | Key pressed; mouse moved | Division by zero; two processes accessing the same memory location |

### Steps in handling an interrupt

1. An **interrupt signal** is generated.
2. The processor checks for interrupts (normally after each fetch-decode-execute cycle) and compares the **priority** with its current task.
3. If it must be handled now, the **current state is saved** (register contents).
4. The **ISR** for that interrupt is run.
5. The **saved state is restored** and the previous task **resumes**.

### Results of interrupts

| Interrupt | Result |
|---|---|
| Key pressed | Key code is read and stored for the program |
| Mouse moved | Pointer position is updated |
| Division by zero | Instruction stopped; error message shown or program ended |
| Two processes, same memory location | The clash is stopped and the OS decides which process continues |

## Answer templates

**Difference between system and application software (4 marks):** system software provides the services the computer needs; application software provides the services the user needs; an example of each, such as an operating system and a spreadsheet.

**Describe the role of an operating system (4 marks):** pick two or three functions and give a detail of each, for example managing memory by deciding which part of RAM each program uses; managing files by organising them into folders.

**Describe how an interrupt is handled (4 marks):** signal generated; priority checked or current task paused with its registers saved; ISR run; saved state restored and task continues.

**Explain how applications run (3 marks):** applications run on the OS; the OS runs on firmware; the bootloader firmware runs on the hardware.

## Exam traps

- **Anti-virus as application software.** It is a utility, so it is system software.
- **"The OS is the same as the interface".** The interface is one function of nine.
- **"Firmware is hardware".** Firmware is software stored on hardware.
- **Interrupt means the computer has crashed.** An interrupt is a normal signal.
- **Missing the return step.** Always finish with the processor resuming the earlier task.
- **Vague function answers.** "Manages memory" needs a detail to earn a mark.

## Self-test

1. State the difference between system software and application software.
2. Give two examples of utility software.
3. Name three functions of an operating system.
4. What is the job of a driver?
5. Which software loads the operating system when the computer is switched on?
6. State the order of the layers, from hardware up to applications.
7. What is an interrupt?
8. Give one hardware interrupt and one software interrupt.
9. What does an ISR do?
10. Why does the processor save the state of its current task when it handles an interrupt?
11. Describe one result of a division by zero interrupt.
12. Why might two interrupts be given different priorities?

**Answers**

1. System software provides the services the computer needs; application software provides the services the user needs.
2. Any two: anti-virus, backup, disk formatting, file compression, defragmentation.
3. Any three of the nine: file management, handling interrupts, user interface, managing peripherals and drivers, memory management, multitasking, platform for applications, security, user accounts.
4. It lets the operating system control a particular peripheral device.
5. The bootloader (firmware).
6. Hardware, firmware (bootloader), operating system, applications.
7. A signal to the processor that something needs its attention.
8. Hardware: key press or mouse movement. Software: division by zero or two processes accessing the same memory location.
9. It is the code that deals with a particular interrupt.
10. So that the task can be restored and carry on from where it stopped.
11. The faulty instruction is stopped and an error message is shown, or the program is ended.
12. So that the more urgent event is dealt with first.
