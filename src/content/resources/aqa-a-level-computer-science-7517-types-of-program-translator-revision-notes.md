---
title: "AQA A-Level Computer Science (7517): Types of program translator -- Revision Notes"
seoTitle: "AQA A-Level CS Program Translators Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.6.3 recall: assembler, compiler and interpreter, source and object code, bytecode, and when to use each, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.6.3 Types of program translator**, AQA A-Level Computer Science (7517). Fuller explanations are in the [types of program translator study guide](/resources/aqa-a-level-computer-science-7517-types-of-program-translator/); exam-style questions are in the [types of program translator practice questions](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-practice/).

## Source and object code

| Term | Meaning |
|---|---|
| Source code | The program as written by the programmer (assembly language or high-level language) |
| Object code (executable code) | The translated machine code that the processor can run |

A **translator** takes source code as input and produces object code. A processor can only run machine code, so translation is essential.

## The three translators

| Translator | Translates | When | Output |
|---|---|---|---|
| Assembler | Assembly language into machine code | Before running | Object code |
| Compiler | A whole high-level program into machine code (or bytecode) | Before running | Object code file |
| Interpreter | A high-level program, one statement at a time | While running | No object code file |

## Compiler against interpreter

| | Compiler | Interpreter |
|---|---|---|
| Translation | Whole program first | Statement by statement as it runs |
| Speed of running | Fast (already machine code; can be optimised) | Slower (re-translates statements, for example in loops) |
| Development | Slower: recompile after each change | Faster: run and test immediately |
| Errors | Reported after the whole program is translated; no object code if errors | Stops at the first error, which is easy to locate |
| Source code at run time | Not needed | Needed |
| Source code protected | Yes, if only object code is released | No |
| Portability | Object code only for one processor | Source runs wherever there is an interpreter |

## When to use each

- **Compiler:** finished software to be distributed and run many times; speed matters; source code should be private.
- **Interpreter:** development and testing; learning; short scripts; running the same source on many types of machine.
- Many programmers **interpret while developing, then compile for release**.

## Bytecode

- **Bytecode** is an **intermediate language**: compact, low-level instructions for a virtual machine, not a real processor.
- Some compilers output bytecode instead of machine code.
- It is then **run by an interpreter (a virtual machine)** on the target computer.
- **Why:**
  - **Portability:** the same bytecode runs on any machine with a virtual machine, with no recompiling. Only the virtual machine is written for each processor.
  - **Quicker to run than interpreting source:** the checking and much of the translation have already been done.
  - **Source code is not distributed.**
  - **Compact** files.
- **Cost:** slower than native machine code. Some systems translate hot spots of bytecode into machine code at run time.

**Sequence:** source code, then compiler, then bytecode, then virtual machine on each computer.

## Worked scenarios

| Situation | Translator | Reason |
|---|---|---|
| A student testing a short Python program many times | Interpreter | Immediate run, errors pointed to the statement |
| A commercial video game released to customers | Compiler | Fast execution; source code hidden |
| A program that must run on phones, PCs and tablets without separate versions | Compiler to bytecode plus a virtual machine on each device | Portability |
| A hand-written routine in assembly language | Assembler | Assembly language needs an assembler |

## Features of compiled code to remember

- Translated **once**; can be run many times without the compiler.
- Runs quickly and can be **optimised**.
- Specific to the **type of processor**. Another processor means recompiling with a different compiler.

## Features of interpreted code to remember

- Must have the **interpreter** installed on every machine.
- Repeated statements are **translated again** each time round a loop.
- Good for **debugging**, because the program can be run and altered quickly.

## Quick contrasts to learn

- **Once against every time:** a compiler pays the translation cost once; an interpreter pays it every run.
- **Developer against user:** the compiler's work is done by the developer; the interpreter's work is done on the user's machine.
- **Error timing:** a compiler finds syntax errors before the program runs at all; an interpreter finds them when execution reaches the faulty statement.

## Exam traps

- **Compiler "line by line".** That is an interpreter.
- **Interpreted code faster.** It is slower.
- **Source and object code swapped.**
- **Compiled code portable.** The object code is specific to a processor.
- **Bytecode called machine code.** It needs a virtual machine.
- **One-sided comparison.** State points for both translators.

## Key terms

| Term | Definition |
|---|---|
| Translator | A program that converts a program from one language into another |
| Assembler | Translates assembly language into machine code |
| Compiler | Translates a whole high-level program into object code before it runs |
| Interpreter | Translates and executes a program one statement at a time |
| Source code | The program written by the programmer |
| Object code | The translated, executable machine code |
| Bytecode | An intermediate language run by a virtual machine |
| Virtual machine | Software that executes bytecode on a real computer |

## Self-test

1. What does an assembler translate?
2. What does a compiler produce?
3. Why can a compiled program run without the compiler?
4. Why do interpreted programs run more slowly?
5. Why is an interpreter useful during development?
6. State two reasons for producing bytecode.
7. What runs bytecode?
8. Why is compiled object code not portable between types of processor?
9. Which translator would you use for a program that is released to the public and must run fast?
10. What is the difference between source code and object code?

**Answers**

1. Assembly language into machine code.
2. Object code (machine code, or bytecode in some cases) as a separate file.
3. The object code is already machine code that the processor can execute directly.
4. Each statement is translated every time it is executed, including each time round a loop.
5. The program can be run and tested at once after a change, and an error is reported against the statement that caused it.
6. Any two: portability; faster than interpreting source code; source code not distributed; compact.
7. A bytecode interpreter (virtual machine).
8. It contains the instructions of one processor's instruction set, which other processors do not understand.
9. A compiler.
10. Source code is the program as the programmer wrote it; object code is the translated machine code that the processor runs.

## Related resources

- [Types of program translator study guide](/resources/aqa-a-level-computer-science-7517-types-of-program-translator/)
- [Types of program translator practice questions](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-practice/)
- [Classification of programming languages revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes/)
- [Hardware and software revision notes](/resources/aqa-a-level-computer-science-7517-hardware-and-software-revision-notes/)
