---
title: "Cambridge A Level Information Technology (9626): System software -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 2 – Hardware and software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware-and-software"
    subtopic: "system-software"
description: "Twelve original Cambridge 9626 IT section 2.2 questions with answers on compilers, interpreters, cross compilers, linkers, drivers and operating systems."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [System software study guide](/resources/cambridge-a-level-ict-9626-system-software/) | [System software revision notes](/resources/cambridge-a-level-ict-9626-system-software-revision-notes/)

These questions are for **section 2.2 System software** (Topic 2, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** Distinguish between object code and an executable file. **[2]**

**2.** State **two** functions of an operating system, other than providing a user interface. **[2]**

**3.** Explain what is meant by a cross compiler. **[2]**

**4.** Explain why a device driver is needed when a new printer is connected to a computer. **[3]**

**5.** State **two** advantages to a programmer of using library routines. **[2]**

**6.** Explain **one** disadvantage of static linking. **[2]**

## Section B

**7.** Harbourlight Games develops a game on desktop PCs. It will release the game on a games console and on smartphones.

**(a)** Explain why Harbourlight would use cross compilers. **[3]**

**(b)** Describe **one** difficulty Harbourlight faces when testing the compiled game. **[2]**

**(c)** Explain **two** reasons why Harbourlight distributes executables rather than source code. **[2]**

**8.** A college teaches programming using an interpreted high-level language. Students run their programs on computers with three different operating systems.

**(a)** Explain how the same programs can run on all three types of computer. **[4]**

**(b)** Explain **one** disadvantage of using an interpreter for the college's work. **[2]**

**9.** A booking program is made of three modules, A, B and C, which use routines from a library. A programmer changes module B.

**(a)** Describe the steps needed to produce a new executable. **[3]**

**(b)** Explain **one** benefit of building the program from separate modules. **[2]**

**10.** A user runs a web browser, a music player and a word processor at the same time. Describe how the operating system manages the processor and memory so that all three run. **[4]**

**11.** Ledgerline Software sells an accounting package to small businesses. Discuss whether Ledgerline should distribute the package as compiled code or as source code run by an interpreter. **[6]**

**12.** A user connects an old scanner to a new computer, but the scanner does not work although it is undamaged. Explain the likely cause and what the user should do. **[3]**

---

## Answers

**1.** Object code is machine code produced by compiling source code, which may still need linking with other modules [1]. An executable is a complete, linked machine-code program that can be run [1]. **[2]**

**2.** Any two from: processor management or scheduling [1]; memory management [1]; file management; input and output management; security through user accounts and access rights; interrupt handling. **[2]**

**3.** A compiler that runs on one computer system (the host) [1] but produces machine code for a different system (the target) [1]. **[2]**

**4.** The operating system sends general commands such as "print this page" [1]; each printer model needs instructions in its own form [1], so the driver translates the commands into signals that printer understands and returns status messages such as "out of paper" [1]. **[3]**

**5.** Any two from: saves time because the code is already written [1]; already tested, so fewer errors [1]; programmers can use routines they could not easily write themselves. **[2]**

**6.** The library code is copied into every executable [1], so files are larger and use more storage and memory, and a library fix needs every program to be relinked [1]. **[2]**

**7. (a)** The console and smartphones cannot be used to compile the game, or lack development tools [1]. A cross compiler on the PC produces machine code for each target's processor [1], so one team can build every version from the same source on its own workstations [1].

**(b)** The executable cannot run on the PC that built it [1], so Harbourlight must test on the real console and phones, or on an emulator that may not behave exactly like the device [1].

**(c)** Users cannot read or copy the source code, protecting Harbourlight's work [1], and the compiled game runs faster with no translator needed on the device [1]. **[7]**

**8. (a)** Each computer has an interpreter for the language written for its own operating system and processor [1]. The same source code is copied to every machine [1]. When run, each interpreter translates the source one statement at a time [1] into the machine code of the computer it is on, so no recompiling is needed [1].

**(b)** Programs run more slowly, because each statement is translated every time it is executed [1], which matters for programs with long loops or large data sets [1]. **[6]**

**9. (a)** Recompile only module B to produce new object code [1]. Run the linker to combine the new B with the existing object code for A and C [1] and the library routines, resolving references between them, to produce the new executable [1].

**(b)** Modules can be written and tested by different programmers at the same time, and only the changed module needs recompiling, which saves time [1] [1]. **[5]**

**10.** Processor: the operating system schedules the programs, giving each a short time slice in turn [1], switching so quickly that all three appear to run at once [1]. Memory: it allocates each program its own area of memory [1] and keeps the areas separate, so one program cannot overwrite another's data [1]. **[4]**

**11.** Compiled: runs faster for users [1]; customers do not need an interpreter installed [1]; source code stays private, protecting Ledgerline's product and reducing tampering [1]. Interpreted: one version of the source runs on any system with an interpreter [1], but customers can read and copy the code and it runs more slowly [1]. Conclusion: compiled code is better for a commercial package, with separate compiled versions for each operating system Ledgerline supports [1]. **[6]**

**12.** The new computer's operating system does not have a driver for the old scanner, or the old driver is not compatible with the new version [1], so the operating system cannot communicate with it [1]. The user should download and install a driver for that scanner model written for the new operating system, if the manufacturer provides one [1]. **[3]**

## Where marks are usually lost

- Saying an interpreter produces an executable.
- Describing a cross compiler as translating between programming languages.
- Forgetting the linker step after recompiling a module.
- Explaining multitasking without mentioning scheduling or memory separation.
- Concluding a "discuss" answer with no recommendation.
