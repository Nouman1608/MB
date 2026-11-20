---
title: "OxfordAQA A-Level Computer Science (9645): Programming languages and translation software -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Languages Translators Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6 – Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
  - qualification: "a-level"
    topic: "computer-systems-9645"
    subtopic: "programming-languages-and-translation-software-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.6.3: low- and high-level languages, assembler, compiler, interpreter, bytecode and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.6.3 Programming languages and translation software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.6 Computer systems). For fuller explanations, see the [programming languages and translation software study guide](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software/); then practise with the [programming languages and translation software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software-practice/).

## What the specification requires

| Ref | Requirement |
|---|---|
| 3.6.3.1 | Awareness of the development of languages and their classification as low-level or high-level; low-level languages are machine code and assembly language; describe them; advantages and disadvantages of low-level against high-level programming; explain **imperative high-level language** |
| 3.6.3.2 | Role of assembler, compiler and interpreter; differences between compilation and interpretation and situations for each; why some compilers produce an intermediate language such as bytecode and how it is used; difference between source code and object (executable) code |

## Key terms

| Term | Meaning |
|---|---|
| Machine code | Binary instructions that the processor executes directly |
| Assembly language | Low-level language using mnemonics, usually one instruction per machine code instruction |
| High-level language | Language close to human language; one statement may be many machine instructions |
| Imperative language | One where the commands describe the process to follow to carry out a task |
| Source code | The program as the programmer wrote it |
| Object (executable) code | Translated machine code that can be run |
| Assembler | Translates assembly language into machine code |
| Compiler | Translates a whole program before it runs |
| Interpreter | Translates and executes a program statement by statement |
| Bytecode | An intermediate language that is more portable than machine code |
| Virtual machine | Software that interprets bytecode |
| JIT compiler | Converts bytecode to machine code at run time |

## Low-level against high-level

| Feature | Low-level | High-level |
|---|---|---|
| Readability | Poor | Good |
| Development time | Long | Short |
| Hardware dependence | Specific to the processor | Largely portable |
| Hardware control | Direct | Limited |
| Maintenance | Hard | Easier |
| Translator needed | Assembler (assembly) or none (machine code) | Compiler or interpreter |
| Typical use | Drivers, embedded systems | General applications |

## Assembly example (OxfordAQA instruction set)

```
LDR R0, 200
LDR R1, 201
SUB R2, R0, R1
STR R2, 202
HALT
```

If location 200 holds 14 and location 201 holds 9: R0 = 14, R1 = 9, R2 = 14 − 9 = 5, and 5 is stored in location 202. In a high-level language this is one statement, `result = a - b`.

## Translators

| Translator | Input | Output |
|---|---|---|
| Assembler | Assembly language | Machine code |
| Compiler | Whole high-level program | Machine code or intermediate code |
| Interpreter | High-level program, one statement at a time | No object code file; executes as it translates |

## Compiler against interpreter

| | Compiler | Interpreter |
|---|---|---|
| Speed of running | Fast | Slower |
| Errors | All reported before running | Found one at a time as lines run |
| Distribution | Give users object code only | Users need source code and an interpreter |
| Development | Recompile after each change | Quick to test changes |
| Best for | Finished, frequently-run software | Development, teaching, scripts |

Recomputed error example: a program of five statements has a syntax error in statement 4. A compiler reports it before running and executes 0 statements. An interpreter executes statements 1 to 3 and stops at statement 4, so it executes 3.

## Bytecode

Some compilers output an **intermediate language** (bytecode).

Why:

1. More **portable** than machine code.
2. **Security checks** can be made before execution.
3. Can use **less memory** than machine code.

How it runs:

- a **virtual machine** interprets it; or
- a **JIT compiler** converts it to machine code for the computer in use.

## Source and object code

| | Source | Object |
|---|---|---|
| Written by | Programmer | Translator |
| Readable by humans | Yes | No |
| Run directly by the processor | No | Yes |

## Exam traps

- **Assembly language needs an assembler.** Machine code does not need translation.
- **A compiler translates; it does not run the program.**
- **An interpreter does not create a separate object code file.**
- **Bytecode is not machine code.** It runs on a virtual machine or is converted by a JIT compiler.
- **Say why** for each advantage or disadvantage.
- **Imperative** means the commands describe the process to follow.
- **Match the translator to the situation** and give a reason.

## Quick self-test

1. Name the two low-level languages.
2. What is the relationship between assembly instructions and machine code instructions?
3. Give two advantages of a high-level language over assembly.
4. Give one advantage of assembly language.
5. What does an imperative language do?
6. State the output of an assembler.
7. Give two differences between a compiler and an interpreter.
8. In the five-statement example, how many statements does an interpreter execute before the error in statement 4?
9. What is bytecode?
10. Give the three reasons for producing bytecode.
11. How can bytecode be executed?
12. Distinguish source code from object code.

### Answers

1. Machine code and assembly language.
2. Usually one assembly instruction corresponds to one machine code instruction.
3. Any two: easier to read and write, quicker to develop, portable, easier to maintain.
4. Direct control over hardware, or small and fast programs.
5. Its commands describe the process (the steps) to carry out a task.
6. Machine code.
7. For example: a compiler translates the whole program before running while an interpreter translates statement by statement; compiled code runs faster.
8. 3.
9. An intermediate language produced by some compilers, more portable than machine code.
10. More portable; security checks before execution; uses less memory.
11. By a virtual machine that interprets it, or by a JIT compiler that converts it to machine code.
12. Source is the programmer's code; object code is the machine code produced by a translator.

## Next steps

- [Programming languages and translation software study guide](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software/)
- [Programming languages and translation software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software-practice/)
- [Software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-software-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.3 Programming languages and translation software.
