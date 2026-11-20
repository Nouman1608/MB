---
title: "Cambridge O Level Computer Science (2210): Types of software and interrupts -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Software and Interrupts Questions"
resourceType: "practice-questions"
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
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 4.1: system and application software, operating system functions, firmware and interrupts."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Types of software and interrupts study guide](/resources/cambridge-o-level-computer-science-2210-types-of-software-and-interrupts/) and [Types of software and interrupts revision notes](/resources/cambridge-o-level-computer-science-2210-types-of-software-and-interrupts-revision-notes/)

---

## Section A

**1.** State what is meant by application software. **[1]**

**2.** Give **two** examples of utility software. **[2]**

**3.** State what is meant by firmware. **[1]**

**4.** Identify the software that is used to start a computer and load the operating system into RAM. **[1]**

**5.** State what is meant by an interrupt. **[1]**

**6.** Give **one** example of a hardware interrupt. **[1]**

**7.** Give **one** example of a software interrupt. **[1]**

## Section B

**8.** The table lists four programs. Copy the table and tick (✓) one box in each row to show whether the program is system software or application software.

| Program | System software | Application software |
|---|---|---|
| Web browser | | |
| Operating system | | |
| Backup program | | |
| Presentation software | | |

**[4]**

**9.** Describe **three** functions of an operating system. **[3]**

**10.** A school laptop is used by several students. Each student logs in with their own name and password.

**(a)** Name the operating system function that allows each student to have their own login. **[1]**

**(b)** Explain how the operating system can help to keep the students' work private. **[2]**

**11.** A user has a word processor, a music player and a web browser open at the same time.

**(a)** Name the operating system function that lets all three programs run at the same time. **[1]**

**(b)** Describe how the operating system makes sure the programs do not overwrite each other's data in RAM. **[2]**

**12.** The following layers are needed to run an application: operating system, hardware, application, firmware. Put the layers in order, starting with the layer that is closest to the hardware. **[2]**

**13.** Explain why a computer needs firmware as well as an operating system. **[3]**

**14.** A user is typing a report. The user presses a key on the keyboard.

**(a)** State whether this is a hardware interrupt or a software interrupt. **[1]**

**(b)** Describe how the interrupt is handled by the processor. **[4]**

**15.** A program tries to divide a number by zero.

**(a)** State the type of interrupt this causes. **[1]**

**(b)** Describe what could happen as a result of the interrupt. **[2]**

**16.** Explain why the processor stores the contents of its registers before it runs an interrupt service routine. **[2]**

---

## Answers

**1.** Software that provides the services that the user requires / software that lets the user carry out a task they want to do [1].

**2.** Any two: anti-virus; anti-spyware; backup software; file compression; disk formatting; defragmentation [1 each].

**3.** Software that is stored permanently on a hardware device (in non-volatile memory), such as the bootloader [1].

**4.** The bootloader [1].

**5.** A signal sent to the processor to tell it that something needs its attention [1].

**6.** Any one: pressing a key on the keyboard; moving the mouse; a printer reporting that it is out of paper [1].

**7.** Any one: division by zero; two processes trying to access the same memory location [1].

**8.** Web browser: application [1]. Operating system: system [1]. Backup program: system [1]. Presentation software: application [1].

**9.** Any three, with a detail for each: managing files (organising files into folders and keeping track of where they are stored) [1]; handling interrupts (responding to signals from devices and programs) [1]; providing an interface (so the user can communicate with the computer) [1]; managing peripherals and drivers (controlling devices) [1]; managing memory (allocating RAM to programs) [1]; managing multitasking (sharing processor time) [1]; providing a platform for running applications [1]; providing system security [1]; managing user accounts [1]. Award 1 mark for each function with a correct detail, up to 3.

**10. (a)** Managing user accounts [1].
**(b)** The operating system asks for a username and password before it lets a student log in [1]. It controls access to files, so that one student's files cannot be opened by another account unless permission is given [1].

**11. (a)** Managing multitasking [1].
**(b)** The operating system allocates each program its own separate area of RAM [1]. It stops a program from reading or writing outside its own area, so that the programs do not overwrite each other [1].

**12.** Hardware, firmware, operating system, application [2]. Award 1 mark if only one pair of neighbouring layers is in the wrong order.

**13.** When the computer is switched on, the operating system is stored on the storage device and is not yet in RAM [1]. The firmware (bootloader) is stored permanently on the hardware, so the processor can run it at start-up [1]. The bootloader loads the operating system into RAM, so without firmware the operating system could not start [1].

**14. (a)** Hardware interrupt [1].
**(b)** Pressing the key sends an interrupt signal to the processor [1]. The processor checks the priority of the interrupt, normally after the current fetch-decode-execute cycle, and saves the state of the report program (the contents of its registers) [1]. The interrupt service routine for the keyboard runs, reading the key and storing the character [1]. The saved state is restored and the processor carries on with the program [1].

**15. (a)** Software interrupt [1].
**(b)** Any two: the faulty instruction is stopped [1]; an error message is shown to the user [1]; the program is ended / the operating system takes control [1].

**16.** The processor must be able to return to what it was doing after the ISR has run [1]. Restoring the stored values means the interrupted program continues from where it stopped, with its data unchanged [1].

---

## Where marks are usually lost

- Question 2: giving examples of application software, such as a word processor, instead of utilities.
- Question 8: ticking "application" for the backup program. Backup software is a utility, so system software.
- Question 9: listing three function names with no detail, or giving three versions of the same function.
- Question 11: writing "multitasking" for part (b) with no mention of separate areas of RAM.
- Question 12: reversing the order, or putting the application first.
- Question 13: saying firmware "runs the computer" without explaining that it starts it.
- Question 14: forgetting to say that the earlier program resumes, or leaving out the ISR.
- Question 16: saying the registers are stored "in case of a crash". The reason is so the task can resume.

## Checking an interrupt answer

Tick off the five steps: signal generated, priority checked, state saved, ISR run, state restored and task resumed. If one is missing from a four- or five-mark answer, add it.
