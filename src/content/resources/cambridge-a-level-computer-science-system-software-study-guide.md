---
title: "Cambridge A Level Computer Science (9618): System Software -- Study Guide"
resourceType: "study-guides"
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
description: "Operating system functions, utility software, libraries, interrupts, assemblers, compilers, interpreters and IDE features for Cambridge International AS and A Level Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check which operating system topics (memory management, process management, paging) are in the AS content of 5.1 and which are A Level only."
publishedDate: 2026-11-08
featured: false
---

System software is the layer of programs that manages the hardware and lets other software run: the operating system, the utilities that maintain the computer, and the translators that turn programs written by people into code the processor can execute. This guide covers both parts of Topic 5 in the AS content, with an emphasis on being able to say precisely what each piece of software does and why it is needed.

## Where this fits in the syllabus

Topic 5 is part of the AS Level content of Cambridge 9618 and is examined in Paper 1, Theory Fundamentals. It relies on the hardware in the [Hardware](/resources/cambridge-a-level-computer-science-hardware-study-guide/) guide, since the operating system manages those components. Questions are mostly descriptions and comparisons, so say what the software does and give a consequence.

## 5.1 Operating systems

System software provides services for the computer; **application software** carries out tasks for the user. The **operating system (OS)** is the system software that manages the hardware and provides the platform that other programs run on. Without it, each program would need its own code to drive the screen, disk and keyboard.

### What an operating system does

- **Hardware management**: the OS controls devices through **device drivers**, which translate general OS requests into commands for a particular device. It also handles **interrupts**, signals that tell the processor a device needs attention.
- **Process management**: the OS decides which program the processor runs and for how long, so several programs appear to run at once (**multitasking**). It shares processor time between them.
- **Memory management**: the OS allocates main memory to programs, keeps each program's memory separate so one cannot corrupt another, and releases memory when a program ends. When RAM is full it can use **virtual memory** held on secondary storage.
- **File management**: the OS organises files in directories, controls where and how data is stored on a disk, and manages naming, opening, copying and deleting.
- **Security management**: user accounts and passwords, access rights to files, protection against unauthorised use, and often firewall and anti-malware support.
- **Provision of a user interface** so that people can control the computer.

### User interfaces

A **command line interface (CLI)** takes typed commands. It is fast for an expert and uses few resources, but the commands must be learned and exactly typed. A **graphical user interface (GUI)** uses windows, icons, menus and a pointer (WIMP), and is easy to learn and use but needs more memory and processing power. Other interfaces include **touch**, **voice** and gesture control, which suit mobile devices and hands-free use but may be less accurate or may be unsuitable in noisy or public places.

### Utility software

**Utility programs** carry out maintenance tasks that the OS does not itself do:

- **Disk formatter**: prepares a disk for use by creating the structure that the file system needs.
- **Virus checker** (anti-malware): scans files and incoming data for malicious code and removes or quarantines it.
- **Defragmentation software**: rearranges the pieces of files on a magnetic hard disk so that each file is in contiguous blocks, which speeds access. It is not needed on solid-state drives, which have no moving heads.
- **Disk contents analysis and repair**: reports on space used and checks for and fixes disk errors.
- **File compression**: reduces the size of files to save space or transmission time.
- **Back-up software**: copies data to another location so that it can be restored after loss, and can be set to run on a schedule or to copy only the changes.

### Program libraries and DLLs

A **program library** is a collection of pre-written, tested routines that a programmer can call rather than write again. This saves time, reduces errors and gives access to complex functions such as graphics. A **dynamic link library (DLL)** is loaded when the program runs, not built into it, so many programs share a single copy in memory, the executable is smaller, and a library update benefits every program that uses it with no recompilation. The drawback is that a program fails if the library is missing or is replaced by an incompatible version.

### Worked example 1: handling a keypress interrupt

A user presses a key while a word processor is running. The sequence is:

1. The keyboard sends an **interrupt** signal to the processor.
2. The processor finishes the instruction it is executing, then checks for interrupts at the end of the cycle.
3. It compares the **priority** of the interrupt with the program it is running. A keypress outranks routine work, so the processor continues.
4. The contents of its registers are saved so the program can be resumed.
5. The OS runs the **interrupt service routine (ISR)** for the keyboard, which reads the key code and places it in a buffer.
6. The saved registers are restored and the word processor carries on from where it stopped.

Without interrupts, the processor would need to **poll** every device continually, which wastes time.

## 5.2 Language translators

A processor can only execute **machine code**, so programs written in other languages must be translated.

- An **assembler** translates **assembly language** into machine code, with one machine instruction for each assembly instruction.
- A **compiler** translates the whole of a high-level program into **object code** before it is run. The result can be run any number of times without the compiler or the source code.
- An **interpreter** translates and executes the program one statement at a time and keeps no object code, so the source must be translated again every time it runs.

| Point | Compiler | Interpreter |
|---|---|---|
| When translation happens | Once, before running | During running, every run |
| Speed of execution | Faster | Slower |
| Error reporting | Lists errors across the whole program after compilation | Stops at the first error reached |
| Source code needed to run | No | Yes |
| Best use | Finished programs for distribution | Developing and testing, teaching |

Some languages use a mixture: they compile to **bytecode** for a virtual machine to interpret.

### Worked example 2: one program, two kinds of error

These four lines are run:

```python
print("Start")
total = 10
print("Total is", total)
print(total / 0)
```

The output is `Start` and `Total is 10`, and then the program stops with a division-by-zero error on line 4. A **runtime error** only happens when the line is reached, so the lines before it ran. Now suppose line 3 had a missing closing bracket. Python reports a syntax error before running anything, so `Start` is not printed, because Python first translates the entire file to bytecode and so detects syntax errors in advance. A purely line-by-line interpreter would print `Start` and then stop at the faulty line, while a compiler would report the syntax error and make no object code at all. Behaviour differs between languages, so describe the principle, not one product.

### Integrated development environments

An **integrated development environment (IDE)** brings together the tools a programmer needs. Features you should be able to describe include:

- A **code editor** with **syntax highlighting**, **auto-completion** and **auto-indentation**, which make code easier to read and reduce typing errors.
- **Error diagnostics** that highlight mistakes while typing and give messages with line numbers.
- **Run-time environment** to run and test the program inside the IDE.
- **Debugging tools**: **breakpoints** that pause the program at a chosen line, **single stepping** that runs one statement at a time, and **variable watch** or report windows that show values as they change.
- **Pretty printing** that lays out code in a standard format.
- An **in-built translator** (compiler or interpreter).

## Common mistakes

- Saying that an interpreter "does not translate". It does, line by line.
- Saying that compiled programs never contain errors because errors were found at compile time. Runtime errors and logic errors remain.
- Saying defragmentation speeds up solid-state drives.
- Describing the OS as a utility. Utilities are separate programs that perform maintenance.
- Giving "makes the computer faster" as the benefit of a DLL, when the benefits are smaller files and a shared single copy.

## Exam technique

For **describe** questions on the OS, give the task and how the OS performs it, for example "memory management: allocates each program its own area of RAM and stops one program overwriting another". For comparisons of translators, give a point for each side joined by "whereas". For scenario questions, choose a translator and justify it from the scenario: a compiler for software that is sold to customers, an interpreter for a student writing and testing short programs.

## Check your understanding

1. State two functions of an operating system. *Answer: for example memory management and file management.*
2. What is a device driver? *Answer: software that lets the OS communicate with a particular device.*
3. Why is defragmentation not used on an SSD? *Answer: an SSD has no moving heads, so scattered data does not slow access.*
4. Give one benefit of using a DLL. *Answer: several programs share one copy, which saves memory and means an update applies to all of them.*
5. What does the processor do after it receives an interrupt? *Answer: it saves its state, runs the interrupt service routine, restores its state and resumes the interrupted program.*
6. Give two differences between a compiler and an interpreter. *Answer: a compiler translates the whole program before it runs and produces object code; an interpreter translates a statement at a time, each time it runs, and produces none.*
7. What is the purpose of a breakpoint? *Answer: it pauses the program at a chosen line so the programmer can inspect variables.*
8. A company sells a finished game. Which kind of translator should it use and why? *Answer: a compiler, because the customer receives fast-running object code without the source code.*
