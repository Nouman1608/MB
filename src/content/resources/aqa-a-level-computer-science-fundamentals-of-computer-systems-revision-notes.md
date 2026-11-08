---
title: "AQA A-Level Computer Science: Fundamentals of Computer Systems — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6: Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
description: "Recall notes on software types, the OS, language levels, translators, logic gates, adders, flip-flops and Boolean algebra for AQA A-Level Computer Science 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Fundamentals of computer systems (section 4.6 of AQA A-Level Computer Science 7517) covers how software is
classified, how programs are translated for the hardware, and how logic gates and Boolean algebra describe
the circuits underneath. Paper 2 asks for precise definitions, comparisons of translators, truth tables,
circuit-to-expression conversions and Boolean simplification.

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/).
Practise with the [Fundamentals of computer systems practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.6, assessed on Paper 2:

- **4.6.1** Hardware and software -- relationship, classification of software, system software, role of the OS
- **4.6.2** Classification of programming languages -- low-level (machine code, assembly) and high-level
- **4.6.3** Types of program translator -- assembler, compiler, interpreter, bytecode, source and object code
- **4.6.4** Logic gates -- NOT, AND, OR, XOR, NAND, NOR; circuits; half- and full-adders; D-type flip-flop
- **4.6.5** Boolean algebra -- Boolean identities and De Morgan's laws

## Hardware, software and the operating system

| Term | Definition |
|---|---|
| **Hardware** | The physical components of a computer system |
| **Software** | The programs (sequences of instructions) and data that run on the hardware |
| **System software** | Manages the computer and provides a platform for other software: OS, utility programs, libraries, translators |
| **Application software** | Performs tasks for the user, e.g. a word processor or web browser |
| **Utility program** | A small system program for a maintenance task, e.g. backup, compression, defragmentation, antivirus |
| **Library** | Ready-compiled, tested routines that programs can call instead of rewriting them |

The **operating system** has two roles the specification names: it **hides the complexities of the
hardware** from users and programs (a virtual machine), and it carries out **resource management**,
allocating processors, memory and I/O devices among competing processes.

## Low-level versus high-level languages

- **Machine code**: binary instructions executed directly by the processor; processor specific.
- **Assembly language**: mnemonics (e.g. `LDR`, `ADD`) with a one-to-one correspondence to machine code
  instructions; also processor specific.
- **Imperative high-level language**: statements describe **how** to solve the problem as a sequence of
  commands that change the program's state; each statement typically translates into **several** machine
  code instructions.

| | Low-level | High-level |
|---|---|---|
| Ease of writing and debugging | Harder | Easier -- English-like keywords, structures |
| Portability | Tied to one processor | Can be translated for different processors |
| Control of hardware / memory | Direct and precise | Abstracted away |
| Speed and size of code | Can be very fast and compact | Depends on the translator |

## What does each translator do?

| Translator | Translates | How | Typical use |
|---|---|---|---|
| **Assembler** | Assembly language -> machine code | One instruction at a time, one-to-one | Device drivers, embedded code |
| **Compiler** | High-level source -> object (executable) code | Whole program at once, before it runs | Distributing finished software; fast execution; source code kept private |
| **Interpreter** | High-level source, statement by statement | Translates and executes each statement every time the program runs | Development and testing: stops at the first error |

- **Source code** is what the programmer writes; **object (executable) code** is the translated output.
- Some compilers produce **bytecode** -- an intermediate language -- as their final output. It is then run
  by a **virtual machine** (an interpreter for bytecode) on each platform, so the same compiled program can
  run on any machine that has the virtual machine: portability without distributing the source.

## Logic gates

| Gate | Expression | Output is 1 when |
|---|---|---|
| NOT | ¬A (Ā) | A is 0 |
| AND | A · B | both inputs are 1 |
| OR | A + B | at least one input is 1 |
| XOR | A ⊕ B | inputs are different |
| NAND | ¬(A · B) | not both 1 |
| NOR | ¬(A + B) | both 0 |

AQA uses the **ANSI/IEEE 91-1984 distinctive shape** symbols. Learn to go both ways: circuit -> Boolean
expression, and expression -> circuit, and to complete truth tables for circuits of several gates (use one
column per intermediate gate output).

### Adders and the flip-flop

- **Half-adder**: adds two bits. **Sum = A ⊕ B**, **Carry = A · B**. One XOR gate and one AND gate --
  you must be able to construct this circuit.
- **Full-adder**: adds two bits plus a carry in. Sum = A ⊕ B ⊕ Cin; Cout = A · B + Cin · (A ⊕ B). Full
  adders can be chained so each carry out feeds the next carry in. You must recognise and trace it.
- **Edge-triggered D-type flip-flop**: a **memory unit that stores one bit**. On the triggering edge of
  the clock, the output Q takes the value of the data input D and holds it until the next triggering edge.
  Its internal operation is **not required**.

## Boolean algebra

| Identity | AND form | OR form |
|---|---|---|
| Identity | A · 1 = A | A + 0 = A |
| Null | A · 0 = 0 | A + 1 = 1 |
| Idempotent | A · A = A | A + A = A |
| Complement | A · ¬A = 0 | A + ¬A = 1 |
| Double negation | ¬¬A = A | |
| Absorption | A · (A + B) = A | A + A · B = A |
| Distributive | A · (B + C) = A · B + A · C | A + B · C = (A + B) · (A + C) |
| **De Morgan** | ¬(A · B) = ¬A + ¬B | ¬(A + B) = ¬A · ¬B |

De Morgan in words: **break the bar and change the sign**.

### Worked example

Simplify `(A + B) · (A + ¬B)`:

```
= A·A + A·¬B + B·A + B·¬B      expand
= A + A·¬B + A·B + 0            A·A = A, B·¬B = 0
= A + A·(¬B + B)                factorise
= A + A·1 = A + A = A
```

Simplify `¬(¬A + B)`: De Morgan gives `¬¬A · ¬B` = **A · ¬B**.

## Common mistakes / exam traps

- Saying a compiler "runs" the program -- it translates; the object code is executed afterwards.
- Writing that an interpreter produces object code. It does not; it translates every time the program runs.
- Forgetting libraries and translators are system software, not application software.
- Mixing up the half-adder outputs: Sum is **XOR**, Carry is **AND**.
- Applying De Morgan without changing the operator, e.g. writing ¬(A · B) = ¬A · ¬B.
- Drawing NAND as an AND gate followed by a separate NOT when asked for a single NAND gate symbol.

## Frequently asked questions

**Why do some compilers produce bytecode instead of machine code?**
Bytecode is an intermediate language that a virtual machine on each platform can execute. The program is
compiled once and runs on any computer with the virtual machine, which makes it portable.

**When is an interpreter more appropriate than a compiler?**
During development and testing, because it runs code immediately and stops at the line with the error. A
compiler suits finished software that must run fast and be distributed without its source code.

**What does a D-type flip-flop do?**
It stores a single bit. On the clock's triggering edge it copies the D input to its Q output and holds that
value until the next triggering edge.

## Related resources

[Fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/) |
[Fundamentals of computer systems practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-practice/) |
[Fundamentals of computer organisation and architecture revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.6 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
