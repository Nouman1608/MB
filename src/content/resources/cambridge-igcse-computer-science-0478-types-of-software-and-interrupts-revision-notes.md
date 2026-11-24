---
title: "Cambridge IGCSE Computer Science (0478): Types of software and interrupts -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 4.1: software types, operating system functions, the hardware-firmware-OS-application layers and interrupts."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 4.1, Types of software and interrupts. They follow the four content statements: software types, operating system functions, how hardware, firmware and the OS run applications, and interrupts.

## Four facts to start with

1. **System software** provides the services the computer requires. **Application software** provides the services the user requires.
2. The **operating system** has nine functions to learn.
3. Applications run on the OS, the OS runs on the firmware, and the bootloader (firmware) runs on the hardware.
4. An **interrupt** is a signal that makes the processor pause, run an **interrupt service routine (ISR)**, then carry on.

## Key terms

| Term | Definition |
|---|---|
| System software | Software that provides the services the computer requires, including the OS and utility software |
| Application software | Software that provides the services the user requires |
| Utility software | System software for maintenance or protection, such as anti-malware or backup |
| Operating system | System software that manages the hardware and provides a platform for applications |
| Driver | Software that lets the OS communicate with one particular device |
| Firmware | Permanent software held in non-volatile memory, including the bootloader |
| Bootloader | First program to run at start-up; loads the OS into RAM |
| Interrupt | Signal telling the processor that something needs attention |
| Interrupt service routine | Program that deals with one type of interrupt |
| Priority | How urgent an interrupt is compared with the current task |

## System versus application software

| | System | Application |
|---|---|---|
| Serves | The computer | The user |
| Examples | Windows, Linux, macOS, anti-virus, backup, file compression | Word processor, spreadsheet, browser, game, photo editor |
| Needed to run the computer? | Yes (the OS) | No |

## The nine functions of an operating system

1. **Managing files**: create, name, move, copy, delete and locate files and folders.
2. **Handling interrupts**: receive signals from devices and programs and respond.
3. **Providing an interface**: GUI, command line or touch so the user can communicate with the computer.
4. **Managing peripherals and drivers**: control input and output devices using drivers.
5. **Managing memory**: allocate RAM to programs and keep them apart.
6. **Managing multitasking**: share processor time so several programs seem to run together.
7. **Providing a platform for running applications**: give applications the services they need.
8. **Providing system security**: logins, permissions and protection from unauthorised access.
9. **Managing user accounts**: separate settings, files and access rights for each user.

Memory aid: group them as *files, interrupts, interface* / *peripherals, memory, multitasking* / *platform, security, user accounts*.

## The software stack

| Layer | Runs on | Notes |
|---|---|---|
| Applications | Operating system | What the user opens |
| Operating system | Firmware | Loaded into RAM from storage |
| Firmware (bootloader) | Hardware | Held in ROM; runs first at start-up |
| Hardware | | Processor, memory, storage, devices |

## Hardware and software interrupts

| | Hardware | Software |
|---|---|---|
| Cause | A device needs attention | A program event or error |
| Examples | Key pressed; mouse moved | Division by zero; two processes trying to use the same memory location |

## Interrupt handling in five steps

1. An interrupt is **generated**.
2. The processor **checks** for it at the end of each fetch-decode-execute cycle and compares its **priority** with the current task.
3. If it must be handled, the processor **saves the current state** (register contents).
4. The **ISR** for that interrupt runs.
5. The state is **restored** and the original program **continues**. If no interrupt is waiting, the program carries on as normal.

## Why interrupts are useful

- The processor does not waste time repeatedly checking every device.
- Urgent events get a quick response.
- The interrupted program is not lost.

## Exam traps

- **Utility software as application software.** It is system software.
- **Firmware and OS mixed up.** The bootloader is firmware; the OS is loaded into RAM.
- **Driver treated as hardware.** A driver is software.
- **Interrupts as errors only.** A key press is an interrupt too.
- **Missing the restore step.** Say that the saved state is restored so the program carries on.
- **Vague function names.** "Memory" scores less than "managing memory so that programs do not overwrite each other".

## Self-test

1. Define application software.
2. Is anti-virus software system or application software?
3. State **three** functions of an operating system.
4. What is a driver?
5. Which layer is run on the hardware?
6. What does the bootloader do?
7. Give one example of a hardware interrupt and one of a software interrupt.
8. When does the processor check for interrupts?
9. What does the processor save before running an ISR?
10. Why is it useful for the processor to use interrupts?

**Answers**

1. Software that provides the services the user requires.
2. System software (it is utility software).
3. Any three from: managing files, handling interrupts, providing an interface, managing peripherals and drivers, managing memory, managing multitasking, providing a platform for applications, providing system security, managing user accounts.
4. Software that lets the OS communicate with and control a particular device.
5. The firmware (the bootloader).
6. It runs at start-up and loads the operating system into RAM.
7. Hardware: pressing a key or moving the mouse. Software: division by zero or two processes trying to access the same memory location.
8. At the end of each fetch-decode-execute cycle.
9. The current state of the running program, including register contents.
10. It does not need to keep checking devices; urgent events are handled quickly; the interrupted program is not lost.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## More on this topic

Read the full explanations in the [Types of software and interrupts study guide](/resources/cambridge-igcse-computer-science-0478-types-of-software-and-interrupts/), then try the [Types of software and interrupts practice questions](/resources/cambridge-igcse-computer-science-0478-types-of-software-and-interrupts-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 4.1:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
