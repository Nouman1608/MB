---
title: "OxfordAQA A-Level Computer Science (9645): Programming languages and translation software"
seoTitle: "OxfordAQA A-Level CS 9645 Languages and Translators"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.6.3 in depth: low-level and high-level languages, assemblers, compilers, interpreters, bytecode, source and object code."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.6.3 Programming languages and translation software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.6 Computer systems (AS). It has two parts: **classification of programming languages** (3.6.3.1) and **types of program translator** (3.6.3.2). You must show awareness of how programming languages developed and how they are classified as **low-level** or **high-level**; know that the low-level languages are **machine code** and **assembly language**; describe them and the advantages and disadvantages of low-level against high-level programming; explain the term **imperative high-level language**; understand the role of an **assembler**, **compiler** and **interpreter**; explain the differences between **compilation and interpretation** and when each is appropriate; explain **intermediate languages such as bytecode**; and understand the difference between **source code** and **object (executable) code**.

For quick recall use the [programming languages and translation software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software-revision-notes/), then try the [programming languages and translation software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software-practice/). The topic-level [computer systems study guide](/resources/oxfordaqa-a-level-computer-science-computer-systems/) covers all of section 3.6.

## 3.6.3.1 Classification of programming languages

### Machine code

**Machine code** is the language the processor actually executes. Each instruction is a **binary pattern** that includes an opcode and its operands. It is specific to a particular processor design, so machine code written for one type of processor does not run on a different type. It is the only language a processor can execute without translation.

### Assembly language

**Assembly language** is a low-level language in which each machine code instruction is written as a readable **mnemonic** (such as `LDR`, `ADD`, `STR`), with operands such as registers and memory addresses. There is usually a **one-to-one correspondence** between an assembly instruction and a machine code instruction. It must be translated by an assembler into machine code. Using the OxfordAQA standard assembly instruction set, the high-level statement `total = a + b` (where `a` is held at address 100 and `b` at address 101, and the result goes to address 102) needs several instructions:

```
LDR R0, 100
LDR R1, 101
ADD R2, R0, R1
STR R2, 102
HALT
```

If memory location 100 holds 25 and location 101 holds 17, then R0 becomes 25, R1 becomes 17, R2 becomes 25 + 17 = 42, and 42 is stored at location 102. One high-level statement became four instructions (plus `HALT`), which illustrates why assembly takes more effort to write.

### High-level languages

A **high-level language** (such as Python, C# or Visual Basic) uses statements that resemble human language and mathematical notation. One statement can correspond to **many** machine code instructions. High-level languages are **independent of a particular processor**: the same program can be translated for different machines.

An **imperative high-level language** is one in which the **commands describe the process that should be followed** to carry out a task. The programmer writes the sequence of steps: assign this, test that, repeat these statements. Python, C# and Visual Basic are imperative (when used in the procedural style covered in topic 3.1). This contrasts with a language where you describe what you want rather than the steps.

### Development of languages

Early computers were programmed directly in machine code. This was slow and error-prone, so assembly languages were developed with mnemonics. Later, high-level languages made it possible to write programs more quickly, with less knowledge of the hardware, and portably. You do not need to use the terms first, second and third generation.

### Comparing low-level and high-level programming

| | Machine code and assembly (low-level) | High-level language |
|---|---|---|
| Readability | Hard to read and write | Easier; closer to human language |
| Development time | Long | Shorter |
| Number of statements for a task | Many | Fewer |
| Hardware dependence | Specific to the processor | Largely portable |
| Control of hardware | Direct, including registers and memory | Limited |
| Speed and size of program | Can be fast and small when carefully written | Usually larger and slower, though compilers optimise |
| Debugging and maintenance | Difficult | Easier |
| Translation | Assembly needs an assembler; machine code needs none | Needs a compiler or interpreter |

**Appropriate uses.** Low-level programming suits tasks needing exact control of hardware or tight limits on memory and time, such as device drivers, embedded controllers and parts of operating systems. High-level languages suit most application development.

## 3.6.3.2 Types of program translator

A **translator** converts a program from one language into another. The program as the programmer wrote it is **source code**. The translated machine code that can be executed is **object (executable) code**.

| Translator | Translates | Output |
|---|---|---|
| Assembler | Assembly language | Machine code |
| Compiler | A whole high-level program | Machine code (or intermediate code) |
| Interpreter | A high-level program, one statement at a time | No separate object code; the statements are executed as translated |

### Compilation

A **compiler** translates the **entire source program** in one go, creating an object code file. If there are syntax errors, it reports them and does not produce a working program. Once compiled, the object code can be run **many times without re-translating**, and the source code need not be supplied to users.

### Interpretation

An **interpreter** translates and executes the program **line by line** (statement by statement), each time it is run. It stops at the first error it meets. No separate object code file is made, and the source must be present and translated every run.

### Worked example 1: where errors show up

A program has five statements. Statements 1 to 3 print the letters A, B and C. Statement 4 contains a syntax error. Statement 5 prints D.

| | Compiler | Interpreter |
|---|---|---|
| Before running | Reports the error in statement 4; no object code is produced | Nothing is reported yet |
| When run | Nothing runs | Prints A, B, C, then stops at statement 4 with an error |
| Statements executed | 0 | 3 |

### Comparing compilation and interpretation

| | Compiler | Interpreter |
|---|---|---|
| Execution speed | Fast: translation is done once beforehand | Slower: each statement is translated every time |
| Distribution | Object code can be given to users without source | Source code is needed on the user's machine, plus the interpreter |
| Errors | All syntax errors reported together before running | One error at a time, when the line is reached |
| Testing and development | Must recompile after each change | Changes can be tried immediately; good for testing and learning |
| Portability | Object code is specific to a processor type (unless intermediate code is used) | The same source runs on any machine that has an interpreter |

**Situations.** A compiler suits finished software to be sold or run frequently, where speed matters and source code should be protected. An interpreter suits development, teaching, and small scripts where quick testing matters or the same source must run on different machines.

### Intermediate languages and bytecode

Some compilers produce an **intermediate language**, such as **bytecode**, rather than machine code for a particular processor. The bytecode is then run in one of two ways:

1. a **virtual machine** (VM) **interprets** the bytecode to execute it; or
2. a **just-in-time (JIT) compiler** converts the bytecode into machine code for the computer it is running on, at run time.

The reasons for using an intermediate language are:

- it is **more portable** than machine code: the same bytecode runs on any computer that has the virtual machine;
- **security checks** can be performed on the bytecode before it is executed;
- bytecode can use **less memory** than the equivalent machine code.

Languages such as C# and Visual Basic (on .NET) and Java use this approach, and Python also compiles to bytecode before interpreting it.

### Source code and object code

| | Source code | Object (executable) code |
|---|---|---|
| Written by | The programmer | Produced by a translator |
| Language | Assembly or high-level language | Machine code |
| Readable by a human? | Yes | No |
| Executed directly by the processor? | No: needs translating | Yes |

## Exam technique

- **Define the low-level languages** by name: machine code and assembly language.
- **Give advantages and disadvantages in pairs** that refer to something specific, such as portability or development time.
- **For translators,** state the input and the output of each.
- **For compilation against interpretation,** use a scenario to decide which is appropriate and justify it.
- **For bytecode,** give all three reasons and both ways it is executed.

## Common mistakes

- Saying assembly language needs no translation.
- Saying a compiler runs the program. It only translates it.
- Saying an interpreter produces an object code file.
- Saying bytecode is machine code.
- Describing portability as a property of object code in general.
- Calling "imperative" a measure of difficulty. It means commands describe the process to follow.

## Next steps

- [Programming languages and translation software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software-revision-notes/)
- [Programming languages and translation software practice questions](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software-practice/)
- [Software study guide](/resources/oxfordaqa-a-level-computer-science-9645-software/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.3 Programming languages and translation software.
