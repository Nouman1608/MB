---
title: "Cambridge A Level Computer Science (9618): Language Translators"
resourceType: "study-guides"
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
description: "Assemblers, compilers and interpreters, Java's partial compilation and IDE features for coding and debugging, for Cambridge AS Computer Science 9618 section 5.2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **5.2 Language Translators** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, examined on Paper 1, Theory Fundamentals. The [System Software study guide](/resources/cambridge-a-level-computer-science-system-software-study-guide/) introduces the whole of Topic 5; this page stays with translators and IDEs and goes further, with new worked examples and model answers. Condensed notes are in the [Language Translators revision notes](/resources/cambridge-a-level-computer-science-9618-language-translators-revision-notes/) and you can test yourself with the [Language Translators practice questions](/resources/cambridge-a-level-computer-science-9618-language-translators-practice/).

## What 5.2 asks you to do

The syllabus lists four things:

- show understanding of the **need** for an assembler (for assembly language), a compiler (for a high-level language) and an interpreter (to translate *and execute* a high-level language program)
- explain the benefits and drawbacks of a compiler or an interpreter, and **justify** the use of each
- show awareness that a high-level program may be **partially compiled and partially interpreted**, such as Java (console mode)
- describe features of a typical **Integrated Development Environment (IDE)** for coding, initial error detection, presentation and debugging.

The more detailed stages of compilation (lexical analysis, syntax analysis and so on) belong to Topic 16 at A Level, so AS answers should not depend on them.

## Why any translator is needed

A processor can execute only **machine code**: binary instructions from its own **instruction set**. Different processor families have different instruction sets, so machine code written for one family will not run on another. Every program written in another form must therefore be converted into machine code before or while it runs, and the program that does this is a translator. The **source code** is the program as the programmer wrote it; the translated version is called **object code** (or, once it is ready to run, an executable).

## The assembler

Assembly language is a **low-level** language: each instruction is a **mnemonic** such as LDD or ADD, often with an operand, and usually corresponds to exactly one machine-code instruction. An **assembler** is needed because the processor cannot execute mnemonics. It:

- replaces each mnemonic with its binary **opcode**
- replaces **labels** and symbolic names with the numeric memory addresses they stand for
- produces machine code for one particular processor family, because the assembly language itself is tied to that instruction set.

The one-to-one relationship is the key difference from a compiler: one line of a high-level language such as `Total ← Total + Price * Quantity` may become several machine-code instructions. Assembly language is still chosen where a programmer needs direct control of the hardware, for example in a device driver or a small embedded system where memory is very limited. The [Processor Fundamentals guide](/resources/a-level-computer-science-processor-fundamentals/) covers the instruction groups themselves.

## The compiler

A **compiler** translates the **whole** of a high-level program before any of it runs. If it finds syntax errors, it reports them (often in a list for the whole program) and produces no executable. Once the program compiles, the executable can be run again and again with no further translation, on any computer with the same kind of processor and operating system, and without the compiler or the source code.

## The interpreter

An **interpreter** takes one statement, checks it, translates it and **executes it** before moving on to the next. It does not keep a translated copy, so:

- the source code and the interpreter must both be present every time the program runs
- a statement inside a loop is translated again on every pass through the loop
- execution stops at the first error reached, but every statement before that point has already run.

### Worked example 1: counting translations

A program has six statements. Three run once, and three form the body of a loop that repeats 1,000 times.

Take a simple model in which an interpreter translates each statement every time it is executed. One run needs 3 + (3 × 1,000) = **3,003** translations. If the program is run 10 times, that is **30,030** translations. A compiler translates the six statements **once**, before the first run, and the ten runs need no further translation.

Real interpreters reduce this cost, but the principle holds: interpreted code runs more slowly, especially in loops.

## Benefits and drawbacks, from two points of view

It helps to sort the arguments by **who** benefits.

**The developer, while writing and testing.** An interpreter lets the programmer run a program straight away, see exactly which statement failed, fix it and continue, without waiting for the whole program to be translated again. Part of an unfinished program can be tested before the rest exists. A compiler gives a list of all syntax errors at once, but the program cannot be run at all until every one is fixed.

**The user, once the program is finished.** A compiled executable runs faster, needs no translator on the user's computer, and does not give the user the source code, so the developer's work is harder to copy or change. Its drawback is that it runs only on the platform it was compiled for; a separate version must be compiled for each type of processor or operating system. An interpreted program can run on any computer that has the interpreter, but the user must have that interpreter installed and receives the readable source code.

### Annotated model answer: justifying a choice

*Scenario: a research scientist writes short programs to analyse each new set of results. Most programs are run once or twice and then changed. Justify the use of an interpreter.* **[3]**

> An interpreter executes the program as soon as it is written, so the scientist does not have to compile the whole program after every small change [1]. When an error is reached the program stops at that statement, so she can see where it is, correct it and run again immediately [1]. Each program is run only a few times, so the slower execution of interpreted code costs very little compared with the time saved during development [1].

Each sentence names a feature of the interpreter and links it to a detail of the scenario (frequent changes, few runs). A list of general advantages with no link to the scientist would earn less.

## Partially compiled, partially interpreted: Java (console mode)

Java source code is first **compiled** into **bytecode**, an intermediate code that is not the machine code of any real processor. The bytecode is then **interpreted** (executed) by a **Java Virtual Machine (JVM)** on the computer that runs the program. This combines features of both approaches:

- the compilation step finds syntax errors before the program is distributed, and the bytecode is quicker to execute than interpreting the original source
- the same bytecode runs on any computer with a JVM, so the developer distributes one version instead of compiling separately for each platform
- users receive bytecode, not the source code.

The cost is that every user needs a JVM, and running bytecode through a virtual machine is generally slower than running native machine code.

## IDE features named in the syllabus

An IDE brings the editor, translator and debugging tools into one program. The syllabus groups its features into four purposes.

| Purpose | Feature | What it does for the programmer |
|---|---|---|
| Coding | Context-sensitive prompts | Suggests keywords, identifiers or a subroutine's parameters as code is typed, based on what makes sense at that point |
| Initial error detection | Dynamic syntax checks | Checks each line as it is typed and highlights syntax errors before the program is translated |
| Presentation | Prettyprint | Displays code with consistent indentation and colour-coded keywords, so the structure is easier to read |
| Presentation | Expand and collapse code blocks | Hides or shows the body of a subroutine, loop or selection so the programmer can focus on one part |
| Debugging | Breakpoints | Pause execution at a chosen statement |
| Debugging | Single stepping | Execute one statement at a time |
| Debugging | Report window | Shows the current values of chosen variables and expressions while the program is paused |

Note that dynamic syntax checks find only **syntax** errors. A logic error, such as a loop that stops one pass too early, is grammatically correct, so only the debugging tools will expose it.

### Worked example 2: finding a logic error

This pseudocode should output the mean of five marks held in `Marks[1:5]`, which contain 12, 15, 9, 18 and 6. The correct mean is 60 ÷ 5 = 12, but the program outputs 10.8.

```
Total ← 0
FOR Index ← 1 TO 4
   Total ← Total + Marks[Index]
NEXT Index
Average ← Total / 5
OUTPUT Average
```

1. Set a **breakpoint** on the line `Average ← Total / 5`. When execution pauses, the **report window** shows `Total = 54`, not 60, so the fault is in the loop.
2. Run again and **single step** through the loop, watching `Index` and `Total` in the report window:

| Index | Marks[Index] | Total after the statement |
|---|---|---|
| 1 | 12 | 12 |
| 2 | 15 | 27 |
| 3 | 9 | 36 |
| 4 | 18 | 54 |

3. The loop ends after `Index` reaches 4, so `Marks[5]` is never added. The fix is `FOR Index ← 1 TO 5`.


## Common mistakes

- Writing that an assembler "compiles" assembly language. It assembles: one instruction to one machine-code instruction.
- Claiming a compiled program can run on any computer. It runs only on the platform it was compiled for.
- Saying an interpreter "finds all errors and then stops". It stops at the first error reached, after running the statements before it.
- Calling bytecode machine code. It is intermediate code for a virtual machine.
- Describing a breakpoint as something that "stops the program". It pauses it so the values can be inspected and execution can continue.
- Expecting a syntax check to catch a logic error.

## Exam technique

- **State** needs only the fact: "An interpreter translates and executes one statement at a time."
- **Describe** wants what happens, in order: for Java, compile to bytecode, then interpret with a JVM.
- **Explain** needs a reason with each point: "slower, *because* each statement is translated again every time it is executed".
- **Justify** needs a choice plus reasons tied to the scenario. Name the translator in the first sentence, then give one scenario-linked reason per mark, as in the model answer above.

For IDE questions, check which **category** is asked for. A feature from the wrong category scores nothing, even if it is described well.
