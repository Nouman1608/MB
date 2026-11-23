---
title: "IB DP Computer Science (DP Computer Science): Translation (HL) -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "A.1 -- Computer fundamentals"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
description: "Condensed HL notes on translation for IB DP Computer Science A.1: compilers, interpreters, assemblers, bytecode, JIT, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.4 label (Translation, HL only); the exact learning outcomes were not available, so please check scope and depth against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A1.4 Translation**, an HL-only section of A.1 Computer fundamentals (IB DP
Computer Science, first assessment 2027). For explanations and model answers, use the
[translation study guide](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-translation/);
for the machine-code execution these notes build on, see the
[A.1 Computer fundamentals revision notes](/resources/ib-dp-computer-science-a-1-revision-notes/).
Check the full guide for the exact outcomes.

## Key terms

| Term | Meaning |
|---|---|
| Machine code | Binary instructions from a processor's own instruction set |
| High-level language | Hardware-independent language with English-like keywords and structures |
| Assembly language | Low-level language using mnemonics, close to one per machine instruction |
| Translator | Program that converts source code into a form the machine can execute |
| Source code | The program as written by the programmer |
| Compiler | Translates the whole program into machine code before it runs |
| Executable (object code) | The compiled machine-code file |
| Interpreter | Translates and executes one statement at a time while the program runs |
| Assembler | Translates assembly language into machine code |
| Bytecode | Intermediate code produced by compiling source for a virtual machine |
| Virtual machine | Software that runs bytecode on the real hardware |
| Just-in-time (JIT) compilation | Compiling frequently used parts of bytecode to native code during execution |
| Portability | Ability of a program to run on different platforms |

## Compiler versus interpreter

| | Compiler | Interpreter |
|---|---|---|
| When translated | Once, before running | Every run, statement by statement |
| Output | Executable | None |
| Run speed | Fast | Slower (loops re-translated) |
| Errors | All reported after analysis; no executable until fixed | Stops at first error met; shows the line |
| Development | Recompile after each change | Test changes immediately |
| User needs | Executable only | Interpreter plus source |
| Source protection | Yes | Usually no |
| Portability | Recompile per platform | Runs wherever the interpreter exists |

## Assemblers

- Translate **mnemonics** (for example, load, add, store) into machine code.
- Roughly **one-to-one**: each line becomes one machine instruction.
- Output is specific to one processor family.

## Bytecode and JIT in one chain

Source → **compiled to bytecode** → **virtual machine** runs bytecode → **JIT** compiles hot sections
to native code → fast execution of those sections.

- **Java:** source compiled to bytecode; runs on the JVM, which uses JIT.
- **Python (standard implementation):** source compiled to bytecode automatically, then interpreted.
- **Gain:** portability (same bytecode on any platform with the VM) plus speed from JIT.
- **Cost:** slower start-up, extra memory, and the VM must be installed.

## Choosing a translator

| Scenario | Best fit | Reason |
|---|---|---|
| Learning to program; frequent small changes | Interpreter | Immediate testing, clear error location |
| Selling a game or app | Compiler | Fast execution; source code not shared |
| Software for many different devices | Bytecode + VM | Same code runs anywhere a VM exists |
| Code for a specific microcontroller with tight timing | Assembler or compiler | Direct control over machine instructions |

## Errors and when they appear

| Error type | Example | Found by |
|---|---|---|
| Syntax | Missing bracket or misspelt keyword | Compiler during syntax analysis, or interpreter when the line is reached |
| Runtime | Division by zero; file not found | Only when the program runs, whichever translator is used |
| Logic | Using `<` where `<=` was needed | Neither translator; found by testing |

## Compiler stages (outline)

Lexical analysis (tokens) → syntax analysis (grammar; syntax errors) → semantic analysis (meaning,
types) → code generation → optimisation.

## Exam traps

- Interpreters **do not** produce an executable.
- Compilation removes **syntax** errors, not logic errors or runtime errors.
- Bytecode is **not** machine code; it needs a virtual machine.
- JIT happens **during execution**, not before.
- An interpreter may **miss** errors in code that is never reached in a particular run.
- In "explain" questions, tie each feature to the scenario (development stage, distribution,
  performance, platforms).

## Self-test

1. Why can a CPU not execute high-level source code directly?
2. State one advantage of a high-level language over assembly language.
3. What does a compiler produce?
4. Why does interpreted code containing a loop usually run more slowly than compiled code?
5. Give one advantage of an interpreter during development.
6. Why might a company prefer to distribute a compiled executable?
7. What does an assembler translate?
8. Define bytecode.
9. Explain how bytecode makes a program portable.
10. What is JIT compilation, and what does it improve?
11. Name the compiler stage at which syntax errors are detected.
12. Give one disadvantage of a compiled executable.

**Answers:**
1. It can only execute machine code from its own instruction set; source code must be translated
   first.
2. Any one: easier to read, write and maintain; uses structures such as loops and functions;
   largely independent of the hardware.
3. An executable file of machine code (object code).
4. Each statement is translated every time it is executed, so loop statements are translated on every
   iteration.
5. Any one: changes run immediately without recompiling; it stops at the first error and shows the
   line.
6. It runs fast, users do not need a translator, and the source code is not shared.
7. Assembly language (mnemonics) into machine code.
8. Intermediate code, produced by compiling source code, that is run by a virtual machine rather than
   directly by a processor.
9. The same bytecode can run on any platform that has the virtual machine, so it does not need to be
   recompiled for each processor.
10. Compiling frequently executed parts of a program into native machine code while it runs; it
    improves execution speed.
11. Syntax analysis.
12. Any one: it only runs on the platform it was compiled for; it must be recompiled after every
    change; compilation can take time.

## Related pages

- [Translation practice questions](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-translation-practice/)
- [B.2 Programming revision notes](/resources/ib-dp-computer-science-b2-programming-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
