---
title: "O Level Computer Science: Software — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Software"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 4
syllabusTopics:
  - qualification: "o-level"
    topic: "software-2210"
description: "Condensed Topic 4 notes for Cambridge O Level Computer Science 2210: software types, OS functions, boot layers, interrupts, compilers, interpreters and IDEs."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

These notes compress Topic 4 Software of Cambridge O Level Computer Science (2210) into the facts Paper 1 asks for: the two types of software, nine operating system functions, how firmware starts the OS, how interrupts are serviced, and how compilers, interpreters and IDEs help programmers. Learn the wording in the tables, then rehearse the model answers at the end.

Condensed for the final weeks. For full explanations and worked examples, use the
[Software study guide](/resources/o-level-computer-science-software/), and practise with the
[Software practice questions](/resources/o-level-computer-science-software-practice/).

## Syllabus coverage (2210, 2026–2028)

| Ref | What you must be able to do |
|---|---|
| 4.1.1 | Describe the difference between system and application software, with examples |
| 4.1.2 | Describe the role and basic functions of an operating system |
| 4.1.3 | Understand how hardware, firmware and an OS are required to run application software |
| 4.1.4 | Describe the role and operation of interrupts |
| 4.2.1 | Explain high-level and low-level languages and their advantages and disadvantages |
| 4.2.2 | Understand assembly language, mnemonics and the assembler |
| 4.2.3 | Describe how a compiler and an interpreter translate code and report errors |
| 4.2.4 | Explain the advantages and disadvantages of a compiler and an interpreter |
| 4.2.5 | Explain the role of an IDE and its common functions |

## Recall grid

| Prompt | Answer to give |
|---|---|
| System software serves… | the computer (OS, utilities) |
| Application software serves… | the user (word processor, browser, game) |
| The OS runs on… | the firmware |
| The bootloader runs on… | the hardware |
| Applications run on… | the operating system |
| Hardware interrupt examples | key press, mouse movement |
| Software interrupt examples | division by zero, two processes accessing the same memory location |
| Code that deals with an interrupt | interrupt service routine (ISR) |
| Assembly language uses… | mnemonics, translated by an assembler |
| Translates whole code before running | compiler (produces an executable file) |
| Translates and runs line by line | interpreter (no executable file) |
| Reports all errors together | compiler |
| Stops at the first error | interpreter |

## The nine OS functions

Files · interrupts · interface · peripherals and drivers · memory · multitasking · platform for applications · system security · user accounts.

Exam habit: for each function you name, add a short "for example…" tied to the device in the question. A function with no link to the scenario often earns only half the marks available.

## Interrupt handling in five steps

1. A device or program **generates** an interrupt signal.
2. The interrupt is **prioritised** and the processor **checks** for it during its cycle.
3. The processor **saves** the state of the current task.
4. The matching **ISR** is executed.
5. The saved state is **restored** and the task resumes (or, after a fatal error, the program is stopped).

## Language levels at a glance

| | High-level | Low-level |
|---|---|---|
| Reading/writing | Easier | Harder |
| Debugging | Easier | Harder |
| Machine independent | Yes | No |
| Direct hardware control | No | Yes |

## Compiler versus interpreter at a glance

| | Compiler | Interpreter |
|---|---|---|
| Translation | Whole code before execution | Line by line, during execution |
| Output | Executable file | None |
| Errors | Report for the whole code | Stops when an error is found |
| Typical use | Final program for distribution | During development and testing |
| Translator needed to run? | No (after compiling) | Yes, every time |

## IDE functions — name and role

| Function | Role for the programmer |
|---|---|
| Code editor | Where code is typed and edited |
| Run-time environment | Runs the program so it can be tested |
| Translator | Compiles or interprets the code |
| Error diagnostics | Identify and highlight errors |
| Auto-completion | Suggests the rest of a keyword or identifier |
| Auto-correction | Fixes simple typing mistakes automatically |
| Prettyprint | Colour-codes and indents code to make it readable |

## Model answers to rehearse

**"Explain why a compiler is used for the final version of a program." [2]**
The compiler produces an executable file [1], so customers can run the program without needing a translator and without seeing the source code [1].

**"Describe what happens when a key is pressed while a video is playing." [3]**
Pressing the key generates a hardware interrupt that is sent to the processor [1]. The processor saves the state of the video task and runs the interrupt service routine for the keyboard [1]. It then restores the saved state and the video carries on [1].

## 2210 and its sibling syllabus

Cambridge O Level Computer Science (2210) shares its subject content with Cambridge IGCSE Computer Science (0478), so textbooks endorsed for 0478 can be used for Topic 4. The difference is in the qualification itself: 2210 is graded A* to E.

## Exam traps

These are drawn from the mark-scheme points summarised in our [Software practice questions](/resources/o-level-computer-science-software-practice/), which paraphrase the Cambridge 2210 June 2025 Paper 12 mark scheme.

- When a question already gives one reason (such as readability), do not repeat it; the credited extra reasons for high-level languages were easier debugging, fewer errors and machine independence.
- The compiler/interpreter gap-fill used precise phrases: "whole code", "line by line", "all" errors, "stops" at an error. Use those terms.
- IDE answers score one mark for the function and one for a **matching** role. A correct role attached to the wrong function scores nothing.
- An interrupt does not stop the processor for good — it saves the task and returns to it.
- Utility software is system software, not application software.

## Frequently asked questions

**Do I need to know specific utility programs for 2210?**
The 2026–2028 syllabus mentions utility software as an example of system software, so be ready to give one example, such as anti-virus software.

**Is firmware the same as the operating system?**
No. Firmware is held permanently in the hardware; the bootloader is firmware, and its job is to load the operating system.

**Can an interpreter produce an executable file?**
No. An interpreter translates and executes code line by line each time it runs, so no executable file is created.

## Self-test

1. Put these in the order they start: operating system, application, bootloader.
2. Give one software interrupt.
3. State one disadvantage of a high-level language.
4. Why is an interpreter useful during development?
5. Name two IDE functions other than translators.

**Answers:** 1. Bootloader, operating system, application. 2. Division by zero, or two processes trying to access the same memory location. 3. It cannot directly manipulate the hardware. 4. It stops when it finds an error, so the programmer can see where the error is, fix it and run the code again. 5. Any two of: code editor, run-time environment, error diagnostics, auto-completion, auto-correction, prettyprint.
