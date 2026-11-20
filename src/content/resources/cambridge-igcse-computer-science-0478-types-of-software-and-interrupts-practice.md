---
title: "Cambridge IGCSE Computer Science (0478): Types of software and interrupts -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 4.1: system and application software, operating system functions, firmware and interrupts."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [Types of software and interrupts study guide](/resources/cambridge-igcse-computer-science-0478-types-of-software-and-interrupts/) and [Types of software and interrupts revision notes](/resources/cambridge-igcse-computer-science-0478-types-of-software-and-interrupts-revision-notes/)

---

## Section A

**1.** Define the term **application software**. **[1]**

**2.** State whether each of these is system software or application software: a spreadsheet, a file compression utility, a Linux operating system, a web browser. **[4]**

**3.** State **two** functions of an operating system. **[2]**

**4.** Give the name of the program that loads the operating system into RAM when a computer is switched on. **[1]**

**5.** State **one** example of a hardware interrupt and **one** example of a software interrupt. **[2]**

**6.** State what the abbreviation ISR stands for. **[1]**

## Section B

**7.** Explain the difference between system software and application software. **[3]**

**8.** A school shares a computer between several students. Explain how the operating system helps. **[3]**

**9.** A new printer is connected to a computer but will not print. Explain why installing a driver may solve the problem. **[2]**

**10.** Describe how hardware, firmware and an operating system are needed before a user can run a game. **[4]**

**11.** A user is typing a document when a message arrives from the network. Describe what happens when the processor handles the interrupt. **[4]**

**12.** Explain why a bootloader is stored in firmware rather than being loaded from the hard drive. **[2]**

**13.** A music player plays a song while the user writes an essay. Name the operating system function that makes this possible and explain how it works. **[3]**

**14.** A program tries to divide a number by zero.

**(a)** State the type of interrupt this generates. **[1]**

**(b)** Describe what the processor does when it receives this interrupt. **[3]**

**15.** Evaluate the statement: "Computers would work better if there were no interrupts and the processor checked each device in turn." **[4]**

---

## Answers

**1.** Software that provides the services that the user requires [1].

**2.** Spreadsheet: application [1]. File compression utility: system [1]. Linux operating system: system [1]. Web browser: application [1].

**3.** Any two from: managing files, handling interrupts, providing an interface, managing peripherals and drivers, managing memory, managing multitasking, providing a platform for running applications, providing system security, managing user accounts [1 each].

**4.** The bootloader [1].

**5.** Hardware: pressing a key or moving the mouse [1]. Software: division by zero or two processes trying to access the same memory location [1].

**6.** Interrupt service routine [1].

**7.** System software provides the services that the computer requires [1], such as the operating system and utility software [1]. Application software provides the services that the user requires, such as a word processor or a game [1].

**8.** It manages user accounts so each student has their own login, settings and files [1]. It provides system security, so one student cannot open another's files without permission [1]. It manages files and memory so each student's work is stored and kept apart from the others [1].

**9.** A driver is software that tells the operating system how to control a particular device [1]. Without it, the operating system does not know how to send print data to the printer in a form the printer understands [1].

**10.** The hardware must be switched on and working [1]. The firmware contains the bootloader, which runs first [1] and loads the operating system into RAM [1]. The game is application software, so it runs on the operating system, which provides memory, file access and a platform for it [1].

**11.** The network card sends an interrupt signal to the processor [1]. The processor checks for it at the end of the fetch-decode-execute cycle and decides if its priority is high enough to handle now [1]. It saves the state of the document program, including register contents, and runs the interrupt service routine [1]. When the routine finishes, the state is restored and the document program carries on [1].

**12.** Firmware is stored in non-volatile memory such as ROM, so it keeps its contents when the power is off [1]. The processor needs instructions to start with before the operating system has been loaded from storage, so the bootloader must already be available [1].

**13.** Managing multitasking [1]. The operating system gives each program a very short slice of processor time in turn [1]. This switches so quickly that both programs appear to run at the same time [1].

**14.** **(a)** A software interrupt [1].

**(b)** The processor saves the state of the program [1]. It runs the interrupt service routine for division by zero [1]. This usually displays an error message or ends the program, depending on the operating system [1].

**15.** Any four from: without interrupts the processor would have to check every device repeatedly, wasting processing time [1]; a device could wait a long time to be checked, so responses would be slower [1]; urgent events such as a hardware fault might not be dealt with quickly [1]; with interrupts, the state of the current program is saved and restored, so no work is lost [1]. Conclusion: interrupts make the computer more efficient and responsive, so the statement is not correct [1]. Maximum 4.

---

## Where marks are usually lost

- Question 2: placing the file compression utility under application software. Utilities are system software.
- Question 7: describing only one type, or saying "system software runs the computer" without the services wording.
- Question 9: saying a driver is a cable or part of the printer. It is software.
- Question 10: forgetting the firmware layer or saying the operating system is stored in the bootloader.
- Question 11: leaving out the saving and restoring of the program state.
- Question 12: saying firmware is "faster". The reason is that it is non-volatile and available at start-up.
- Question 13: naming "memory management" instead of multitasking.
- Question 15: describing interrupts without making a judgement.

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| System software | Services the computer requires (OS, utilities) |
| Application software | Services the user requires |
| Bootloader | Firmware; loads the OS |
| Interrupt handling | Generate, check, save state, run ISR, restore |
