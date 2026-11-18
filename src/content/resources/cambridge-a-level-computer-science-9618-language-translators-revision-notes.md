---
title: "Cambridge A Level Computer Science (9618): Language Translators -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5: System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "language-translators"
description: "Condensed notes on assemblers, compilers, interpreters, Java bytecode and the IDE features listed for Cambridge AS Computer Science 9618 section 5.2, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **5.2 Language Translators** (AS content, Paper 1). For full explanations and worked examples use the [Language Translators study guide](/resources/cambridge-a-level-computer-science-9618-language-translators/); for exam-style questions use the [Language Translators practice questions](/resources/cambridge-a-level-computer-science-9618-language-translators-practice/). The [System Software revision notes](/resources/cambridge-a-level-computer-science-system-software-revision-notes/) cover the operating system half of Topic 5.

## The core idea in three lines

- The processor executes only **machine code** from its own instruction set.
- Anything written in assembly language or a high-level language must be translated.
- The three translators differ in **what** they translate and **when** translation happens.

## Key terms

| Term | Meaning |
|---|---|
| Source code | The program as written by the programmer, in assembly or a high-level language |
| Object code | The translated program produced by a compiler or assembler |
| Executable | Object code in a form that can be loaded and run |
| Mnemonic | A short code for a machine operation in assembly language, such as ADD |
| Opcode | The binary code for an operation, which replaces the mnemonic |
| Assembler | Translates assembly language into machine code, one instruction to one instruction |
| Compiler | Translates a whole high-level program into object code before it runs |
| Interpreter | Translates and executes a high-level program one statement at a time, keeping no object code |
| Bytecode | Intermediate code produced by partially compiling a program, executed by a virtual machine |
| Java Virtual Machine (JVM) | Software that interprets (executes) Java bytecode on a particular computer |
| IDE | Integrated Development Environment: one program with tools for writing, translating, running and debugging code |

## Assembler: what it does

- Converts each mnemonic into its opcode.
- Converts labels and symbolic addresses into numeric addresses.
- Output is tied to **one processor family**, because the assembly language belongs to that instruction set.
- Needed because assembly language is readable by people but cannot be executed directly.

## Compiler versus interpreter: recall by situation

| Situation | Compiler | Interpreter |
|---|---|---|
| Program contains a syntax error | Errors reported after translating the whole program; nothing runs | Runs until the faulty statement is reached, then stops |
| Statement inside a loop of 500 passes | Translated once | Translated on each of the 500 passes |
| Customer runs the finished program | Needs only the executable | Needs the source code and the interpreter |
| Program moved to a different type of processor | Must be recompiled for that platform | Runs if that platform has an interpreter |
| Developer wants to protect the code | Source code is not distributed | Source code is visible to the user |
| Developer is testing a half-written program | Must compile successfully first | Can run the finished part immediately |

**Rule of thumb for "justify" questions:** interpreter while developing and testing; compiler for the finished product that is distributed and run many times.

## Java (console mode): partial compilation

1. The Java compiler translates the source code into **bytecode**.
2. The bytecode is distributed.
3. On each user's computer a **JVM** interprets the bytecode.

**Benefits:** one compiled version runs on any platform with a JVM; syntax errors are found before distribution; bytecode executes faster than interpreting the source; the source code is not given out.
**Drawbacks:** every user needs a JVM; generally slower than native machine code.

## IDE features (learn them in the syllabus groups)

| Group | Feature | One-line use |
|---|---|---|
| Coding | Context-sensitive prompts | Suggests keywords, variable names or parameters that fit at that point |
| Initial error detection | Dynamic syntax checks | Underlines syntax errors as each line is typed |
| Presentation | Prettyprint | Consistent indentation and colour-coded keywords |
| Presentation | Expand / collapse code blocks | Hide or show the body of a subroutine or loop |
| Debugging | Breakpoint | Pause execution at a chosen statement |
| Debugging | Single stepping | Execute one statement at a time |
| Debugging | Report window | Show the current values of variables and expressions |

**Debugging sequence to quote:** set a breakpoint just before the suspect code → run to the breakpoint → single step → watch the variables in the report window → find the statement where a value first goes wrong.

## Exam traps

- An interpreter **does** translate; it just keeps no translated copy.
- "Compiled programs have no errors" is false: run-time and logic errors survive compilation.
- An assembler is **not** a compiler. One-to-one translation is the difference to state.
- Bytecode is **not** machine code; a JVM is needed to execute it.
- Compiled code is platform-specific; interpreted source is portable wherever an interpreter exists.
- Dynamic syntax checks catch syntax errors only, never logic errors.
- In a "justify" answer, every reason must refer to the scenario; general lists earn little.
- The stages of compilation are A Level (Topic 16), not needed here.

## Self-test

1. Why can a processor not run assembly language directly?
2. State two things an assembler does when it translates a program.
3. A program has a syntax error on line 40 of 60. What happens with (a) a compiler, (b) an interpreter?
4. Why does an interpreted program spend so long in loops?
5. Give one drawback of a compiled executable for the developer who distributes it.
6. Give one reason a user must have the source code of an interpreted program.
7. What is bytecode?
8. State one benefit to a developer of distributing Java bytecode instead of an executable.
9. Which IDE feature group does prettyprint belong to?
10. What is the difference between a breakpoint and single stepping?
11. Why can dynamic syntax checking not find a loop that runs one time too few?
12. A games company releases a finished game to customers. Which translator should be used for the release, and why?

**Answers**

1. It executes only machine code (binary opcodes); assembly language uses mnemonics and labels.
2. Any two: replaces mnemonics with opcodes; replaces labels/symbolic addresses with numeric addresses; produces one machine-code instruction for each assembly instruction.
3. (a) The compiler reports the error and produces no executable, so none of the program runs. (b) Lines 1 to 39 run, then the interpreter stops at line 40 and reports the error.
4. Each statement in the loop body is translated again on every pass.
5. The program must be compiled separately for each platform it is to run on.
6. The interpreter translates the source code each time the program runs, so it must be present.
7. Intermediate code produced by partially compiling a high-level program, executed by a virtual machine.
8. One version runs on any computer with a JVM, so it does not have to be compiled separately for each platform.
9. Presentation.
10. A breakpoint pauses the program at a chosen statement; single stepping then executes one statement at a time.
11. The code is syntactically correct; it is a logic error, which only shows up when the program runs.
12. A compiler: the executable runs faster, customers need no translator, and the source code is not released.
