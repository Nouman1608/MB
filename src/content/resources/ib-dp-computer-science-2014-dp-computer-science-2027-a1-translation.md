---
title: "IB DP Computer Science (DP Computer Science): Translation (HL)"
resourceType: "study-guides"
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
description: "HL study guide to translation in IB DP Computer Science A.1: compilers, interpreters, assemblers, bytecode and just-in-time compilation, with worked examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.4 label (Translation, HL only); the exact learning outcomes were not available, so please check scope and depth against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers A1.4 Translation, the part of A.1 Computer fundamentals that the guide marks HL
only.** The [A.1 Computer fundamentals study guide](/resources/ib-dp-computer-science-a-1/)
explains how the CPU fetches and executes machine-code instructions. Translation answers the next
question: how does a program written by a person in a high-level language become instructions the CPU
can execute?

> **Scope of this page.** The section number and its HL status come from the full DP Computer Science
> guide (first assessment 2027). Its individual statements were not available when this page was
> written, so check your school's copy for the exact outcomes and the depth required.

## Why translation is needed

A CPU can only execute **machine code**: binary instructions from its own instruction set. Writing
machine code directly is slow and error-prone, and a program written for one processor family will
not run on another.

**High-level languages** (such as Python and Java, the two languages used in the course) use
English-like keywords, variables and structures such as loops and functions. They are easier to
write, read and maintain, and are largely independent of the hardware. A **translator** converts
high-level (or assembly) code into a form the machine can execute.

| Level | Example | Translated by |
|---|---|---|
| High-level language | `total = price * quantity` | Compiler or interpreter |
| Assembly language | `LDA price` (mnemonics) | Assembler |
| Machine code | `10110100 ...` | Executed directly |

## The three kinds of translator

### Compiler

A compiler translates the **whole** source program into machine code (an **executable** or object
code) **before** it is run. The translation happens once; the executable can then be run many times
without the compiler.

- **Speed:** the compiled program runs fast, because no translation happens while it runs.
- **Errors:** the compiler reports all the syntax errors it finds after analysing the whole program;
  no executable is produced until they are fixed.
- **Distribution:** the developer can share the executable without the source code, which protects it
  from copying.
- **Portability:** the executable is specific to one processor family and operating system; it must
  be recompiled for each platform.

### Interpreter

An interpreter translates and executes the program **one statement at a time**, every time the
program is run. No separate executable is produced.

- **Speed:** slower to run, because each statement is translated as it is reached, and statements
  inside a loop are processed again on every iteration.
- **Errors:** execution stops at the first error, showing the line, which makes it easy to locate.
  However, an error in a part of the program that is never reached may go unnoticed.
- **Development:** a change can be tested immediately without waiting for compilation.
- **Distribution:** the user needs the interpreter installed, and the source code is usually shared.

### Assembler

An assembler translates **assembly language** into machine code. Each assembly mnemonic usually
corresponds to one machine-code instruction, so the translation is almost one-to-one.

## Compiler and interpreter compared

| | Compiler | Interpreter |
|---|---|---|
| Translates | Whole program before running | One statement at a time while running |
| Output | Executable file | None (program is run directly) |
| Execution speed | Fast | Slower |
| Error reporting | All errors listed after translation | Stops at the first error encountered |
| Testing during development | Must recompile after changes | Changes can be run immediately |
| Needed to run the program | Only the executable | The interpreter and the source |
| Source code protection | Good: only the executable is shared | Weak: source usually shared |

## Bytecode, virtual machines and just-in-time compilation

Modern languages often combine the two approaches.

**Bytecode.** The source program is compiled into an intermediate code, **bytecode**, which is not
the machine code of any real processor. A **virtual machine** then runs the bytecode on the actual
hardware. Java source code is compiled to bytecode, which runs on the Java Virtual Machine (JVM).
Because a JVM exists for many platforms, the same bytecode runs on all of them: "compile once, run on
any machine with a JVM". The standard Python implementation also compiles source code to bytecode
behind the scenes before interpreting it.

**Just-in-time (JIT) compilation.** While the program runs, the virtual machine identifies parts
that execute often, such as the body of a busy loop, and compiles those parts into native machine
code. Later executions use the fast native code. JIT gives some of the speed of compilation while
keeping the portability of bytecode, at the cost of a slower start and extra memory use.

## Worked example: why a loop exposes the difference

A program contains a loop that runs 1,000,000 times with four statements in its body.

- **Interpreter:** each statement in the loop is analysed and translated each time it is reached:
  4 × 1,000,000 = 4,000,000 translations during one run.
- **Compiler:** the four statements are translated once, before the run. During the run, the CPU
  executes machine code with no translation at all.
- **JIT:** the virtual machine notices that the loop is "hot" after some iterations and compiles it;
  the remaining iterations run as native code.

This is why a compute-heavy simulation is usually compiled or JIT-compiled, while a short script that
a teacher changes every lesson is comfortably interpreted.

## Worked example: an annotated model answer

**Question.** A games company is developing a new game. Explain why the programmers might use an
interpreter during development but distribute the finished game as a compiled program. [4]

> During development, programmers change code constantly, and an interpreter lets them run each change
> immediately without waiting for the whole program to compile **[1: development speed]**. It also
> stops at the first error and shows the line, which helps them find bugs **[1: debugging]**. The
> finished game must run as fast as possible, and compiled machine code runs faster because no
> translation happens during play **[1: execution speed linked to a game]**. Distributing an
> executable also means players do not need an interpreter and cannot easily see or copy the source
> code **[1: distribution and protection]**.

Each point names a feature of the translator and connects it to the stage of the project.

## A typical compiler's stages

You may meet the stages a compiler goes through. In outline:

1. **Lexical analysis:** removes spaces and comments and splits the source into tokens (keywords,
   identifiers, operators).
2. **Syntax analysis:** checks that the tokens follow the grammar of the language; syntax errors are
   reported here.
3. **Semantic analysis:** checks meaning, such as whether variables are declared and types match.
4. **Code generation:** produces machine code (or bytecode).
5. **Optimisation:** improves the code so that it runs faster or uses less memory.

Check your school's copy of the guide for whether these stages are required in detail.

## Common mistakes

- **"An interpreter produces an executable."** It does not; it executes the program directly.
- **"Compiled programs have no errors."** Compilation finds syntax errors; logic and runtime errors can
  still occur.
- **"Interpreted code is always slow."** JIT compilation can make interpreted or bytecode languages
  run close to compiled speed.
- **Confusing bytecode with machine code.** Bytecode needs a virtual machine to run.
- **Mixing up an assembler with a compiler.** Assemblers translate assembly language, almost one
  instruction at a time.

## Exam technique for the command words

- **Distinguish** or **Compare:** use paired statements about the same feature ("A compiler ... ;
  an interpreter ...").
- **Explain** a choice: name the translator's feature, then why it matters in the scenario
  (development, distribution, speed, portability).
- **Evaluate** a language or translator for a case study: weigh execution speed, development speed,
  portability and protection of source code, then conclude.

## Practise and revise

- [Translation revision notes](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-translation-revision-notes/)
- [Translation practice questions](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-translation-practice/)
- [B.2 Programming study guide](/resources/ib-dp-computer-science-b2-programming/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
