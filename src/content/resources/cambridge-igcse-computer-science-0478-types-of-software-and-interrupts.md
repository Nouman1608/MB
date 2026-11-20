---
title: "Cambridge IGCSE Computer Science (0478): Types of software and interrupts"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Software"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 4.1
syllabusTopics:
  - qualification: "igcse"
    topic: "software"
  - qualification: "igcse"
    topic: "software"
    subtopic: "types-of-software-and-interrupts-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 4.1: system and application software, the functions of an operating system, the role of firmware and how interrupts are generated and handled."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
Section 4.1 of the Cambridge IGCSE Computer Science 0478 syllabus asks four things. You must **describe the difference between system software and application software** and give examples of each. You must **describe the role and basic functions of an operating system**. You must **understand how hardware, firmware and an operating system are required to run application software**. And you must **describe the role and operation of interrupts**: how an interrupt is generated, how it is handled using an interrupt service routine, and what happens as a result.

This guide takes each of those in turn, adds worked examples, and ends with the mistakes that cost marks.

## System software and application software

**Software** is the set of programs and data that tell the hardware what to do. The syllabus splits it into two groups according to who benefits from it.

| | System software | Application software |
|---|---|---|
| Provides | The services that **the computer** requires | The services that **the user** requires |
| Includes | Operating system and utility software | Word processors, spreadsheets, web browsers, games, photo editors, databases |
| Used by | The computer itself, and indirectly by the user | The user directly, to complete a task |
| Can the computer run without it? | No. Without an operating system nothing else will run | Yes. The computer still works if you uninstall a game |

A quick test is to ask: "Is this software doing a job for the person, or keeping the computer able to work?" A spreadsheet helps a person calculate, so it is application software. A program that checks a disk for malware keeps the computer in good order, so it is system software.

### Utility software

Utility software is a kind of system software that performs maintenance or protection tasks. Common examples are anti-malware software, backup software, file compression tools and disk defragmentation or formatting tools. Utilities are not needed for the computer to start, but they help it stay secure, tidy and efficient.

### Examples to learn

- **System software:** Windows, macOS, Linux, Android (operating systems); anti-virus program, backup tool, file compression tool (utilities).
- **Application software:** a word processor, a spreadsheet, a web browser, a presentation program, a computer game, a photo editing program.

Be careful with a web browser. It is application software because the user chooses to use it for a task. It runs on top of the operating system.

## The operating system

An **operating system (OS)** is system software that controls the computer and acts as the link between the user, the application software and the hardware. The syllabus lists nine functions. Learn each one with a short example.

| Function | What it means | Example |
|---|---|---|
| Managing files | Creates, names, stores, copies, moves and deletes files and folders and keeps track of where they are on storage | Saving a document into a folder and finding it again later |
| Handling interrupts | Receives signals that need attention and decides what the processor does next | A key press while a video is playing |
| Providing an interface | Lets the user communicate with the computer, for example through a graphical user interface (GUI), a command line or a touch screen | Icons, windows, menus and a pointer |
| Managing peripherals and drivers | Sends data to and from input and output devices, using a **driver** that lets the OS communicate with each device | Installing a driver for a new printer |
| Managing memory | Decides which programs use which part of RAM, and stops programs overwriting each other | Loading two programs at once without them interfering |
| Managing multitasking | Shares processor time so that several programs seem to run at the same time | Listening to music while writing an essay |
| Providing a platform for running applications | Supplies the environment and services that application software needs in order to run | A game asking the OS to draw on the screen |
| Providing system security | Protects the computer and data, for example with logins, permissions and firewall settings | Needing a password before the computer unlocks |
| Managing user accounts | Lets several people share a computer, each with their own settings, files and access rights | A school computer with separate student and teacher logins |

### Driver

A **driver** is a small program that tells the operating system how to control one particular device. Without the correct driver, a new printer may be connected but the OS does not know how to send it a job.

### Multitasking in more detail

A single processor core can only execute one instruction at a time. The OS gives each program a very short slice of processor time, then switches to the next. The switches happen so fast that the user sees all the programs apparently running together. The OS must also share memory, so each program has its own area and cannot corrupt the others.

## Hardware, firmware and operating system working together

Application software cannot talk to hardware directly. It relies on a stack of layers. Each layer runs on the one beneath it.

1. **Hardware** is the physical computer: processor, memory, storage and devices.
2. **Firmware** is permanent software stored in non-volatile memory such as ROM. It contains the **bootloader**, the first program that runs when the computer is switched on.
3. **The operating system** is loaded from storage into RAM by the bootloader.
4. **Applications** are run on the operating system.

The syllabus puts it as three steps: applications are run on the operating system, the operating system is run on the firmware, and the bootloader (firmware) is run on the hardware.

### Why the bootloader is needed

When a computer is switched off, RAM is empty. The processor needs some instructions to begin with. These are held in firmware, which keeps its contents without power. The bootloader loads the operating system from storage into RAM and then hands control to it. Only then can the user open applications.

### Worked example: opening a photo editor

Describe what has to be in place for a photo editor to run.

1. The hardware must be switched on.
2. The firmware (bootloader) runs first and loads the operating system.
3. The operating system starts and provides the interface, memory management and file management.
4. The user opens the photo editor. The OS gives it memory and processor time and lets it read the picture file from storage.

If you remove any layer the photo editor cannot run.

## Interrupts

An **interrupt** is a signal sent to the processor to tell it that something needs its attention immediately. The processor is normally busy running a program, so the interrupt asks it to pause and deal with the event.

### How an interrupt is generated

The signal can come from hardware or software.

| | Hardware interrupt | Software interrupt |
|---|---|---|
| Generated by | A device | A program, or an error in a program |
| Examples | Pressing a key on the keyboard; moving the mouse | Division by zero; two processes trying to access the same memory location |

### How an interrupt is handled

The processor checks for interrupts regularly, at the end of each fetch-decode-execute cycle. If it finds one, it works through these steps:

1. The processor decides whether the interrupt is more important than the program it is currently running. Interrupts have different **priorities**. A low priority interrupt may wait.
2. If it must be handled now, the processor **saves the current state** of the running program, including the contents of its registers, so that it can carry on later.
3. The processor runs a special program called an **interrupt service routine (ISR)**. Each type of interrupt has its own ISR, for example one that reads a key press and stores it.
4. When the ISR finishes, the saved state is **restored** and the original program carries on from exactly where it stopped.
5. If no interrupts are waiting, the processor carries on with the program as normal.

### Worked example: a key press

A user is running a spreadsheet and presses a key.

1. The keyboard sends an interrupt signal to the processor.
2. At the end of the current cycle the processor sees the interrupt and compares its priority with the spreadsheet task.
3. The processor saves the register contents for the spreadsheet.
4. The ISR for the keyboard runs. It reads the key code and passes it to the operating system.
5. The register contents are restored and the spreadsheet continues. The character appears on screen.

All of this takes a tiny fraction of a second, so the user does not notice any delay.

### Worked example: division by zero

A program contains `Result ← Total / Count` and `Count` is 0.

1. The division cannot be done, so the processor generates a **software interrupt**.
2. The saved state of the program is stored and the ISR for the error runs.
3. The ISR typically displays an error message or stops the program, depending on how the operating system handles it.

What happens as a result of an interrupt depends on the type. A key press leads to data being read and passed on. An error may end the program. In both cases the interrupt means the processor does not waste time repeatedly checking each device and instead responds when it is told something has happened.

### Why use interrupts?

- The processor does not have to keep checking every device to see if it needs attention.
- Urgent events, such as a hardware fault, can be dealt with quickly.
- The program that was running is not lost, because its state is saved and restored.

## Annotated model answer

**Question:** Describe how an interrupt is handled by the processor. [4]

> The processor checks for interrupts at the end of each fetch-decode-execute cycle [1]. If the interrupt has a higher priority than the current task, the processor saves the current state, such as the register contents [1]. The processor then runs the interrupt service routine for that type of interrupt [1]. When the routine has finished, the saved state is restored and the original program carries on [1].

**Why it scores 4:** each sentence is one separate marking idea, in order. Writing "the computer stops and does something else" earns nothing because it does not name the processor, the state being saved or the ISR.

## Common mistakes

- Saying system software is "software that is built into the computer". Firmware is built in; system software is any software that provides services the computer requires, such as the OS and utilities.
- Putting utility software under application software. Utility software is system software.
- Listing only the name of an OS function without describing it. "Memory" earns less than "managing memory so that programs do not overwrite one another".
- Saying the OS is stored in ROM. The bootloader is in firmware, and the OS is loaded into RAM from storage.
- Confusing a driver with a device. A driver is software.
- Describing interrupts as errors only. Pressing a key or moving a mouse also generates one.
- Forgetting the ISR, or forgetting to say that the program carries on afterwards.

## Exam technique

- **Describe the difference**: always refer to both types, using the services-for-the-computer and services-for-the-user wording.
- **Give an example**: name a specific piece of software, not just "a game" for system software.
- **Describe the functions of an operating system**: give a function and one short explanation of what it does.
- **Describe the operation of an interrupt**: use the sequence generate, check, save, run the ISR, restore.

## Practise this sub-topic

Use the [Types of software and interrupts revision notes](/resources/cambridge-igcse-computer-science-0478-types-of-software-and-interrupts-revision-notes/) for quick recall and the [Types of software and interrupts practice questions](/resources/cambridge-igcse-computer-science-0478-types-of-software-and-interrupts-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 4.1 Types of software and interrupts:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
