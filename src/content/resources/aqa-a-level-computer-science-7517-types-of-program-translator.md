---
title: "AQA A-Level Computer Science (7517): Types of program translator"
seoTitle: "AQA A-Level CS Program Translators Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "types-of-program-translator-7517"
description: "Deeper guide to AQA 7517 section 4.6.3 Types of program translator: assemblers, compilers and interpreters, source and object code, and why some compilers produce bytecode."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.6.3 Types of program translator** in AQA A-Level Computer Science (7517). The specification asks you to:

- understand the role of each of the **assembler**, the **compiler** and the **interpreter**;
- explain the **differences between compilation and interpretation**, and describe situations in which each is appropriate;
- explain why an **intermediate language such as bytecode** is produced as the final output by some compilers, and how it is subsequently used;
- understand the difference between **source code** and **object (executable) code**.

The wider [fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/) covers all of section 4.6. Condensed notes are in the [types of program translator revision notes](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes/), and exam-style questions are in the [types of program translator practice questions](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-practice/).

## Why translators are needed

A processor can execute only **machine code**, the binary instructions of its own instruction set. People write programs in assembly language or in a high-level language because these are far easier to work with. A **translator** is a program that converts a program written in one language into another, normally into machine code that the processor can run.

### Source code and object code

- **Source code** is the program as the programmer wrote it, in assembly language or a high-level language. It is what is edited, read and maintained.
- **Object code** (also called **executable code**) is the translated machine code, which the processor can run. It is not designed to be read by people.

The translator takes source code as its input and produces object code as its output. A user of a finished program normally needs only the object code.

## Assembler

An **assembler** translates **assembly language into machine code**. Because there is a one-to-one relationship between assembly instructions and machine instructions, translation is straightforward: each mnemonic is replaced by its binary opcode, and labels are replaced by memory addresses. The output is object code, ready to be loaded and run.

## Compiler

A **compiler** translates a whole program written in a **high-level language** into machine code (or another low-level form) **before** the program is run. The compiler reads the complete source code, checks it for errors and, if there are none, produces the object code as a separate file. If there are syntax errors, the compiler reports them and does not produce the object code.

Features:

- The translation is done **once**. The object code can then be run again and again, without the compiler or the source code.
- The compiled program **runs quickly**, because it is already in machine code and the compiler can **optimise** it.
- The object code is **specific to one type of processor**; to run on another, the source code must be compiled again with a compiler for that processor.
- Distributing only object code **protects the source code** from being copied or changed easily.
- After any change to the source, the **whole program must be recompiled** before it can be tested, which can take time for large programs.
- Errors are reported for the whole program after compilation, with the compiler listing the faults it found.

## Interpreter

An **interpreter** translates and **executes** a high-level program **one statement at a time**, without producing a separate object code file. It reads a statement, translates it, carries it out, then moves to the next.

Features:

- There is **no separate compile step**. The program can be run at once, and a change can be tested immediately, which makes development and **debugging** quick.
- Execution stops at the **first error** it meets, and the error is reported against the statement that caused it, which helps the programmer to locate the fault.
- The program **runs more slowly**, because every statement is translated again each time it is executed (for example, each time round a loop).
- The **source code and an interpreter** are needed on every machine that runs the program, so the source code is exposed.
- The same source code runs on any machine that has a suitable interpreter, which helps **portability**.

## Compilation against interpretation

| | Compiler | Interpreter |
|---|---|---|
| Translates | The whole program, before it runs | One statement at a time, while it runs |
| Output | Object code (separate file) | None; statements are executed directly |
| Speed of execution | Fast | Slower |
| Speed of development | Slower; recompile after each change | Faster; run immediately |
| Error reporting | Reports errors after translating the whole program | Stops at the first error found while running |
| Source code needed at run time | No | Yes |
| Distribution | Object code only; source code protected | Source code and interpreter needed |
| Portability | Object code specific to a processor | Source code portable if an interpreter exists |

### When to use each

- **Compiler:** the final version of a program to be **distributed and run many times** at high speed, for example commercial software, games and operating system components. Also where the source code should be kept private.
- **Interpreter:** during **development and testing**, where the programmer wants to try changes quickly, and when learning to program. Also for **scripts** and short programs, and where the program must run on many different types of machine without being recompiled.

A programmer may use an interpreter while developing, then compile the finished program for release.

## What a compiler does internally

You do not need the detailed stages, but knowing the broad shape helps in explanations. A compiler reads the source code and breaks it into meaningful units such as keywords, names and operators. It checks that the units fit together according to the rules of the language (the syntax, which is often defined using BNF; see the [context-free languages study guide](/resources/aqa-a-level-computer-science-7517-context-free-languages/)). It then generates the object code, often improving it so that it runs faster or uses less memory. Because all of this happens before the program is run, the cost of translation is paid once by the developer and not by every user every time.

An interpreter does a similar analysis for each statement, but it does so at run time and then carries out the statement immediately instead of storing translated code. That is why the same loop body is analysed again on every pass.

## Bytecode

Some compilers do not produce machine code for a real processor. Instead they produce **bytecode**, an **intermediate language**: a low-level, compact instruction set for an imaginary processor, sometimes called a virtual machine.

The bytecode is then run by a **bytecode interpreter** (a virtual machine) on the target computer, which translates each bytecode instruction into real machine instructions as it runs.

Reasons for producing bytecode:

- **Portability:** the same bytecode can run on any computer with the virtual machine installed. The program does not need to be compiled again for each type of processor. Only the virtual machine has to be written for each processor.
- **Faster than interpreting the source:** bytecode is compact and simple, so interpreting it is quicker than interpreting high-level source statements. The syntax checking and much of the translation has already been done by the compiler.
- **Protects the source code** better than distributing it, since only the bytecode is supplied.
- **Smaller files** are easier to download.

The cost is that running bytecode through an interpreter is generally slower than running native machine code. Many systems reduce this by translating frequently used bytecode into machine code while the program runs.

**Typical sequence:** source code is compiled to bytecode; the bytecode is distributed; on each computer a virtual machine interprets the bytecode.

## Worked example

A company writes a game. Which translator should it use?

- During development, the programmers use an **interpreter** or quick compile and test cycles, so that changes can be tried immediately and errors are reported against statements.
- For release it uses a **compiler** to produce object code, which runs quickly and does not reveal the source code to players.
- If the game must run on several different types of device without separate versions, it might compile to **bytecode** and supply a virtual machine for each device type.

## Common mistakes

- Saying that a compiler translates "line by line". That describes an interpreter.
- Saying that interpreted programs run faster. They run slower.
- Saying that object code is the code the programmer writes. That is source code.
- Forgetting that compiled code is specific to a processor, so a different processor needs the program compiled again.
- Saying bytecode is machine code. It is an intermediate language that needs a virtual machine (interpreter) to run.
- Giving only one half of a comparison.

## Exam technique

- **Role of each translator:** one sentence on what it translates from and to, and when.
- **Compare:** use at least three points: when translation happens, speed, errors, source code and portability.
- **Situations:** give a reason tied to the situation, for example "release version, run many times, so compile".
- **Bytecode:** give the reason (portability), then how it is used (run by a virtual machine on each computer).

## Related resources

- [Types of program translator revision notes](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes/)
- [Types of program translator practice questions](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-practice/)
- [Classification of programming languages study guide](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages/)
- [Hardware and software study guide](/resources/aqa-a-level-computer-science-7517-hardware-and-software/)

*Written against the AQA A-level Computer Science (7517) specification, 4.6.3 Types of program translator. Always check the current specification on the AQA website.*
