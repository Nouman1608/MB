---
title: "Cambridge A Level Computer Science (9618): System Software -- Practice Questions"
seoTitle: "Cambridge 9618 System Software Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5: System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "system-software"
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "operating-systems"
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "language-translators"
description: "Original exam-style questions with answers on OS management tasks, utilities, DLLs, compilers versus interpreters, Java bytecode and IDEs for Cambridge AS 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [System Software revision notes](/resources/cambridge-a-level-computer-science-system-software-revision-notes/) · [System Software study guide](/resources/cambridge-a-level-computer-science-system-software-study-guide/)

These questions cover all of Topic 5 System Software in Cambridge International AS & A Level Computer Science 9618: the operating system and its utilities (5.1) and language translators and IDEs (5.2). This topic is assessed in Paper 1. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Questions

**1.** Explain why a computer system needs an operating system. **[3]**

**2.** A school network has 400 users who share printers and store work on a file server. Describe how the operating system carries out **each** of the following on this network.

**(a)** security management **[2]**
**(b)** file management **[2]**
**(c)** hardware management **[2]**

**3.** Explain what is meant by process management, and why it is needed when several programs are open at once. **[3]**

**4.** A user's computer has a magnetic hard disk that has become slow to open files.

**(a)** Identify the utility software that would help, and explain how it improves performance. **[3]**
**(b)** State why this utility would not help if the computer had a solid-state drive. **[1]**

**5.** Describe the purpose of **each** of these utilities: disk formatter, back-up software, disk repair software. **[3]**

**6.** A team is developing an accounting application. They use routines from program libraries, some of them as DLL files.

**(a)** Give **two** benefits to the developers of using routines from program libraries. **[2]**
**(b)** Explain **two** benefits and **one** drawback of using DLL files. **[3]**

**7.** State why assembler software is needed to run a program written in assembly language. **[2]**

**8.** A student is writing a program for a coursework task. Her teacher will later distribute the finished program to other schools.

**(a)** Justify the use of an interpreter while the student is developing the program. **[2]**
**(b)** Justify the use of a compiler for the finished program. **[3]**

**9.** Describe how a Java (console mode) program is partially compiled and partially interpreted, and give **one** benefit of this approach. **[3]**

**10.** A programmer uses an integrated development environment (IDE). Describe **one** feature of the IDE in each of these categories:

**(a)** coding **[1]**
**(b)** initial error detection **[1]**
**(c)** presentation **[1]**
**(d)** debugging **[2]**

**11.** A program contains a loop that should run 10 times but gives the wrong total. Explain how breakpoints, single stepping and a report window could be used together to find the error. **[3]**

**12.** Give **two** differences between how errors are reported by a compiler and by an interpreter. **[2]**

---

## Answers

**1.** Any three: the OS hides the complexity of the hardware from the user / provides a user interface [1]; it manages resources such as processor time, memory and devices, sharing them between programs [1]; it provides services (file handling, input/output) that application software uses, so programs do not need to drive hardware themselves [1]; it provides a platform on which application software can run [1].

**2. (a)** Each of the 400 users has an account with a username and password checked at log-on [1]; access rights restrict which files/folders each user (e.g. student or teacher) can read or change [1].
**(b)** Stores users' work in a directory/folder structure on the file server [1]; keeps track of where each file is stored and handles naming, saving, opening and deleting (and prevents two users overwriting one file at once) [1].
**(c)** Uses device drivers to communicate with the shared printers [1]; queues print jobs / manages buffers and handles interrupts from devices [1].

**3.** Process management decides which process is given processor time, and for how long [1]. With several programs open, they must share one processor (or a few cores), so the OS switches between them so that they appear to run at the same time (multitasking) [1]. It also allocates resources to processes and resolves conflicts between them, so that no process is starved of time or blocks another [1].

**4. (a)** Defragmentation software [1]. Over time a file's parts are stored in non-adjacent blocks, so the read/write head has to move further to read the file [1]. The utility rearranges the blocks so each file is stored contiguously (and free space is grouped), so files are read with less head movement, faster [1].
**(b)** An SSD has no moving read head, so data in scattered blocks is accessed just as quickly [1].

**5.** Disk formatter: prepares a storage device for use by setting up the file system / tracks and sectors (removing existing data) [1]. Back-up software: makes copies of files, e.g. on a schedule or of changed files only, so they can be restored if lost or corrupted [1]. Disk repair software: scans the disk for errors and bad sectors, then marks them as unusable or fixes them [1].

**6. (a)** Any two: saves time, as the code does not have to be written [1]; routines are already tested, so fewer errors [1]; gives access to complex, expert-written code (e.g. financial or maths functions) [1].
**(b)** Benefits (any two): the executable is smaller, because the library code is not included in it [1]; one copy of a DLL in memory can be shared by several programs, saving memory [1]; when a DLL is updated, every program that uses it benefits without recompiling [1]. Drawback (any one): if the DLL is missing or deleted, the program will not run [1]; a new version of the DLL may be incompatible with the program [1].

**7.** The processor can only execute machine code (binary) [1]. Assembly language uses mnemonics and labels, so each instruction must be translated by the assembler into its machine-code equivalent before it can run [1].

**8. (a)** An interpreter stops at the first error it meets and reports it [1]; the student can correct it and run the program again straight away, without waiting to compile the whole program, which helps while code is frequently changed [1].
**(b)** The compiler produces an executable file, so other schools can run it without having the compiler/interpreter [1]; the source code is not distributed, so it cannot easily be copied or changed [1]; the compiled program runs faster because it is not translated each time it runs [1].

**9.** The source code is compiled into intermediate code called bytecode [1]. The bytecode is then interpreted / executed by a Java Virtual Machine on the user's computer [1]. Benefit: the same bytecode can run on any computer that has a JVM, so the program is portable / does not need compiling for each platform [1].

**10. (a)** Context-sensitive prompts: the editor suggests keywords, identifiers or parameters as code is typed [1].
**(b)** Dynamic syntax checking: syntax errors are highlighted (underlined) as each line is typed [1].
**(c)** Prettyprint, which colour-codes keywords and indents code consistently / expanding and collapsing code blocks to show or hide a section [1].
**(d)** One feature named, e.g. a breakpoint [1], with a description: execution pauses at the chosen line so the values at that point can be examined [1]. (Single stepping, running one statement at a time, or a report window showing variable values, are also accepted.)

**11.** Set a breakpoint at the start of the loop so the program pauses there [1]. Single step through the loop one statement at a time [1]. Use the report window to watch the value of the total and the loop counter after each step, and see where the value differs from what was expected (e.g. the loop runs 9 or 11 times, or the total is not initialised) [1].

**12.** Any two: a compiler reports all the errors it finds in the whole program after translation, whereas an interpreter stops at the first error it reaches [1]; with an interpreter, statements before the error have already been executed, whereas a compiler produces no executable until all syntax errors are corrected [1]; an interpreter's error is reported while the program is running, a compiler's before the program runs [1].

---

## Where marks are usually lost

- Naming an OS task (for example "memory management") without saying how the OS performs it in the given scenario.
- Saying an interpreter does not translate code, or that it produces object code.
- Giving defragmentation as a benefit for an SSD.
- Writing that a DLL makes a program run faster, instead of the smaller file size, shared memory and easier updates.
- Describing debugging in general terms instead of naming the IDE feature and what it lets the programmer see.

## Frequently asked questions

**How many points do I need for a "justify" question on translators?**
One per mark, and each must be linked to the scenario, for example "the student can fix each error and continue at once" rather than "an interpreter is good for testing".

**Do I need to know the stages of compilation for AS?**
No. Lexical analysis, syntax analysis, code generation and optimisation are in Topic 16 at A Level.

**Which IDE features does Cambridge name?**
Context-sensitive prompts, dynamic syntax checks, prettyprint, expand and collapse code blocks, single stepping, breakpoints, and a report window of variables and expressions.

## Official syllabus

Questions are written against Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 5 System Software. For examiner comments by series, see the [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
