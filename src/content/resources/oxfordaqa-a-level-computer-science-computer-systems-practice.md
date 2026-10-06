---
title: "OxfordAQA A-Level Computer Science: Computer systems (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS Computer Systems Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
description: "Original practice questions with worked answers on OxfordAQA A-level Computer Science computer systems: OS, scheduling, memory and translators."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover topic 6, Computer systems, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. They test sections 3.6.1 to 3.6.3.2, all International AS content listed under Unit 2: Concepts and principles of computer science. Learn the topic first with the [study guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/) and the [revision notes](/resources/oxfordaqa-a-level-computer-science-computer-systems-revision-notes/). Course links: [course hub](/boards/oxfordaqa/a-level/computer-science/), [printable checklist](/checklists/oxfordaqa/a-level/computer-science/), [free diagnostics](/diagnostics/).

Assembly language answers use the mnemonics in the specification's appendix (Standard OxfordAQA assembly language instruction set).

## Questions

**1.** Define the terms hardware and software. **[2]**

**2.** Explain what is meant by a utility program and give two examples. **[3]**

**3.** One role of an operating system is to hide the complexities of the hardware. Explain what this means, using an example. **[2]**

**4.** Three processes arrive at the same time in the order A, B, C. They need 4 ms, 7 ms and 2 ms of processor time. The scheduler gives each process a time slice of 3 ms in turn; a process that has not finished goes to the back of the queue.

**(a)** State the order in which the processes use the processor, with the time period for each turn. **[2]**
**(b)** State the time at which each process finishes. **[3]**

**5.** Main memory has locations 0 to 127. The operating system occupies 0 to 23. The OS places each process in the first free block that is large enough. Processes P (40 locations), Q (30) and R (20) are loaded in that order.

**(a)** State the locations given to P, Q and R. **[2]**
**(b)** Q then ends, and process S (25 locations) is loaded. State the locations given to S. **[1]**
**(c)** Process T needs 16 locations. Explain why T cannot be loaded, even though 19 locations are free. **[2]**

**6.** Describe how an operating system carries out I/O device management and interrupt handling. **[4]**

**7.** A variable `x` is stored in memory location 150 and a variable `y` in location 151.

**(a)** Describe machine code and assembly language. **[2]**
**(b)** Write assembly language instructions for the statement `y ← x - 7`. **[3]**
**(c)** Location 150 holds 52. State the value in location 151 after your code runs. **[1]**

**8.**

**(a)** Explain the term "imperative high-level language". **[1]**
**(b)** State two differences between source code and object code. **[2]**
**(c)** State the role of an assembler. **[1]**

**9.** A team is writing a large app in a high-level language.

**(a)** Explain two differences between compilation and interpretation. **[4]**
**(b)** For each situation, state whether a compiler or an interpreter is more appropriate and justify your choice.
(i) Trying out a new feature, one part at a time, during development. **[2]**
(ii) Selling the finished app to customers without giving them the source code. **[2]**

**10.** Some compilers produce bytecode as their final output instead of machine code.

**(a)** Explain three reasons why an intermediate language such as bytecode is produced. **[3]**
**(b)** Describe two ways in which bytecode can be executed. **[2]**

**11.** A college computer has these programs installed: a web browser, a backup program, a graphics library, a Python interpreter and an operating system.

**(a)** Classify each program as application software or system software. For each piece of system software, state which kind it is. **[5]**
**(b)** Explain why the operating system must be running before the other programs can be used together. Refer to memory allocation and scheduling. **[4]**

**12.** A firmware engineer must write a small program that controls a temperature sensor in a kettle. Evaluate writing it in assembly language rather than a high-level language. **[6]**

## Answers

**1.** Hardware: the electronic components of a computer system [1]. Software: the sequences of instructions that are executed using the hardware [1]. **[2]**
*Examiner insight:* "Programs" alone is too vague for software; tie it to instructions executed using the hardware, as the specification does.

**2.** A utility program adds additional functionality to assist with the management of a computer system [1]. Examples (any two): **virus checker** [1], **compression program** [1]; also backup program, disk defragmenter. **[3]**
*Examiner insight:* An example that is really application software, such as a spreadsheet, gains nothing; each example must manage or maintain the computer.

**3.** The OS gives users and programs a simple interface, so a program can request "save this file" [1] without knowing which storage device is fitted or how to control it; the OS handles those details [1]. **[2]**
*Examiner insight:* Say what is hidden (hardware detail) and who it is hidden from (users and other software); "makes the computer easier to use" alone is too general.

**4. (a)** First round: **A 0-3, B 3-6, C 6-8** [1]. Second round: **A 8-9, then B 9-12 and B 12-13** (B runs on alone) [1].
**(b)** **C finishes at 8 ms** [1], **A at 9 ms** [1], **B at 13 ms** [1]. **[5]**
*Examiner insight:* C needs only 2 ms, so it gives up the processor after 2 ms, not 3; keep a running clock and check that the last finish time equals 4 + 7 + 2 = 13.

**5. (a)** **P: 24-63** [1]; **Q: 64-93 and R: 94-113** [1].
**(b)** **S: 64-88** (first free block large enough is the gap left by Q) [1].
**(c)** The free locations are split into two blocks, 89-93 (5) and 114-127 (14) [1]. A process needs one block large enough, and neither holds 16 [1]. **[5]**
*Examiner insight:* Count inclusively: locations 24 to 63 are 40 locations, not 39; write start and end for each block.

**6.** I/O device management: the OS controls devices through device drivers, so programs use them through standard requests [1], and it manages requests from several programs for the same device, for example by queuing print jobs [1]. Interrupt handling: when an interrupt signal arrives, the OS runs the matching interrupt service routine (ISR) [1], then lets the interrupted process continue from where it stopped [1]. **[4]**
*Examiner insight:* A "describe" question needs what the OS actually does; naming the two functions without explaining them earns little.

**7. (a)** Machine code: instructions in binary that the processor executes directly, specific to that processor [1]. Assembly language: the same instructions written as mnemonics, usually one per machine-code instruction, translated by an assembler [1].
**(b)**

```
LDR R2, 150       ; load x into register 2
SUB R3, R2, #7    ; subtract 7
STR R3, 151       ; store result in y
```

Load x from 150 [1]; subtract the immediate value 7 using #7 [1]; store the result in 151 [1].
**(c)** 52 - 7 = **45** [1]. **[6]**
*Examiner insight:* The appendix only allows #value or a register as the last operand, so `SUB R3, R2, 7` does not follow the instruction set; always write #7 for an immediate value.

**8. (a)** A high-level language in which the commands describe the process that should be followed to carry out a task [1].
**(b)** Source code is written by the programmer in a high-level or assembly language, while object code is machine code produced by a translator [1]; the processor can execute object code directly but not source code [1].
**(c)** It translates assembly language into machine code [1]. **[4]**
*Examiner insight:* For (b), each difference should state both sides; "object code is machine code" alone is only half a comparison.

**9. (a)** A compiler translates the whole program before it runs [1], whereas an interpreter translates and executes it one statement at a time while it runs [1]. A compiler produces object code that can be run again without retranslating [1], whereas an interpreter produces no object code, so the source is translated on every run [1].
**(b)(i)** **Interpreter** [1]: parts can be run straight away and execution stops at the first error reached, which helps testing [1].
**(ii)** **Compiler** [1]: customers receive object code that runs without the source code, which keeps the source private and usually runs faster [1]. **[8]**
*Examiner insight:* "Explain two differences" needs both translators in each point, linked by "whereas"; two facts about the compiler alone do not make a difference.

**10. (a)** Bytecode is more portable than machine code: it runs on any platform that can execute it [1]. Security checks can be performed on it before it is executed [1]. It can use less memory than equivalent machine code [1].
**(b)** A virtual machine interprets the bytecode to execute it [1]; or a just-in-time (JIT) compiler converts it into machine code suitable for the computer it is running on [1]. **[5]**
*Examiner insight:* Do not say the virtual machine "compiles" bytecode; the specification describes it as interpreting, and compiling is the JIT compiler's job.

**11. (a)** Web browser: **application software** [1]. Backup program: **system software, utility program** [1]. Graphics library: **system software, library** [1]. Python interpreter: **system software, translator** [1]. Operating system: **system software, operating system** [1].
**(b)** The OS allocates each program an area of main memory to load into [1] and keeps the areas separate so one program cannot overwrite another [1]. The scheduler shares processor time between the programs so they can all make progress [1]. The OS also gives the programs access to hardware, such as storage for the backup, through its own interface [1]. **[9]**
*Examiner insight:* When a question says "refer to" named functions, each one must appear and be applied to the scenario; generic OS lists score poorly.

**12.** For assembly: it gives direct control of the hardware and registers, useful for reading the sensor [1]; the code can be compact and fast, which suits a small device with limited memory [1]. Against: it is slower to write and harder to read, debug and maintain [1]; it is tied to one processor's instruction set, so it must be rewritten if the kettle's processor changes [1]. High-level code would be quicker to write and portable but must be translated and may be larger [1]. Conclusion: assembly is justified only if memory or speed is tightly limited; otherwise a high-level language is the better choice for maintenance [1]. **[6]**
*Examiner insight:* "Evaluate" needs points on both sides and a justified conclusion; a list of advantages alone cannot reach the top of the marks.

## Where marks are usually lost

- Classifying utilities as application software.
- Forgetting that a process with less remaining time than the slice finishes early in a schedule trace.
- Counting memory blocks exclusively, so block sizes come out one short.
- Explaining memory allocation with virtual memory, which is outside this topic.
- Leaving out # for immediate values in assembly answers.
- Stating that an interpreter creates object code or machine code files.
- Giving one-sided "differences" that only describe a compiler.
- Saying a virtual machine compiles bytecode.
- Ending an "evaluate" answer without a conclusion.

## Next steps

- [Computer systems revision notes](/resources/oxfordaqa-a-level-computer-science-computer-systems-revision-notes/)
- [Computer systems study guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/)
- [Exam preparation for this course](/resources/oxfordaqa-a-level-computer-science-exam-preparation/)
- [Course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.6 Computer systems.
