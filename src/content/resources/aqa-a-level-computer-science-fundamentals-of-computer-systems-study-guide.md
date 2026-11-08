---
title: "AQA A Level Computer Science (7517): Fundamentals of computer systems -- Study Guide"
resourceType: "study-guides"
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
description: "Hardware and software, system software, language classification, translators and compilation stages, Boolean algebra, adders and flip-flops for AQA A Level Computer Science."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

This topic explains what a computer system is made of and how a program written by a human becomes something hardware can run. It then moves down to the level of logic gates, showing how Boolean algebra describes circuits that add numbers and store bits. The material is mostly definitions and short procedures, which makes it a source of reliable marks if you learn the vocabulary precisely.

## Where this fits in the specification

Fundamentals of computer systems is section 4.6 of AQA 7517 and is assessed on Paper 2. It is the foundation for [Fundamentals of computer organisation and architecture](/resources/aqa-a-level-computer-science-fundamentals-of-computer-organisation-and-architecture-study-guide/), which uses the same gates to explain the processor. Typical questions ask you to define a term, compare two translators, simplify a Boolean expression or complete a truth table.

## Hardware, software and system software

**Hardware** is the physical components; **software** is the programs and data that run on it. Software divides into **system software**, which manages the computer and provides a platform, and **application software**, which carries out tasks for the user.

The **operating system** (OS) manages resources: it allocates memory, schedules the processor, controls input and output through device drivers, manages files, and provides a user interface and security. **Utility programs** perform maintenance tasks such as disk defragmentation, backup, compression and anti-malware scanning. **Libraries** are collections of pre-written, tested routines that programs can call, saving development time. A **linker** combines separately compiled modules and library routines into one executable; a **loader** places the program in memory ready to run. **Device drivers** let the OS communicate with a particular peripheral.

## Classification of programming languages

**Machine code** is binary instructions executed directly by the processor; each processor family has its own instruction set. **Assembly language** uses mnemonics such as `ADD` in place of binary and has a one-to-one correspondence with machine code, so it is machine-specific. Both are **low-level**. A **high-level language** is closer to human language, has statements that translate into many machine instructions, is portable across processors, and is easier to read, write and maintain. In an **imperative** language, a program is a sequence of statements that change state, and this includes procedural and object-oriented styles.

Low-level code is chosen for direct hardware control, small size and speed, for example in a device driver or an embedded controller. High-level code is chosen for productivity and portability.

## Translators

An **assembler** converts assembly language to machine code. A **compiler** translates the whole high-level program into machine code, called the object code, before it runs. An **interpreter** translates and executes one statement at a time, with no object code produced.

| Feature | Compiler | Interpreter |
|---|---|---|
| Output | Executable object code | None kept |
| Speed of running | Fast (already translated) | Slower (translated each time) |
| Errors | Reported for the whole program after translation | Stops at the first error found while running |
| Distribution | Executable can be given out without source | Source needed, plus an interpreter |
| Development | Slower edit-compile-test cycle | Quick to test small changes |

Some languages compile to **bytecode**, an intermediate code for a **virtual machine** that interprets or further translates it. The same bytecode then runs on any platform with a suitable virtual machine, which gives portability.

### Stages of compilation

1. **Lexical analysis** removes comments and whitespace and converts the source into **tokens** (keywords, identifiers, operators, literals), building a symbol table of identifiers.
2. **Syntax analysis** checks the tokens against the grammar and builds a parse tree; syntax errors are reported here.
3. **Semantic analysis** checks meaning, such as whether variables are declared and types are compatible.
4. **Code generation** produces the object code.
5. **Optimisation** makes the code faster or smaller without changing its result.

## Boolean algebra and logic gates

The gates are **NOT**, **AND**, **OR**, **XOR**, **NAND** and **NOR**. XOR outputs 1 when its inputs differ. NAND and NOR are **universal**: any circuit can be built from either one alone. In AQA notation, `.` means AND, `+` means OR, a bar or `¬` means NOT, and `⊕` means XOR.

Key rules for simplifying expressions:

- **De Morgan's laws**: NOT (A AND B) = NOT A OR NOT B, and NOT (A OR B) = NOT A AND NOT B.
- **Identity and null**: A + 0 = A, A . 1 = A, A + 1 = 1, A . 0 = 0.
- **Idempotent**: A + A = A, A . A = A.
- **Complement**: A + NOT A = 1, A . NOT A = 0.
- **Absorption**: A + A.B = A and A + NOT A.B = A + B.
- **Distribution**: A.(B + C) = A.B + A.C.
- **Commutative and associative** laws also apply.

A truth table is a reliable check: if two expressions have the same output in every row, they are equivalent.

## Adders and the D-type flip-flop

A **half adder** adds two bits: Sum = A XOR B and Carry = A AND B. It cannot accept a carry in. A **full adder** adds A, B and a carry-in C: Sum = A XOR B XOR C and Carry-out = (A AND B) OR (C AND (A XOR B)). Chaining full adders, carry-out to carry-in, builds a **ripple-carry adder** for several bits.

A **D-type flip-flop** stores one bit. The output Q takes the value of the data input D on the active edge of the clock and holds it until the next. It is the building block of registers and of memory, such as the register that holds a processor value between cycles.

## Worked example 1: simplifying an expression

Simplify X = A.B + A.NOT B + NOT A.B.

1. Group the first two terms: A.B + A.NOT B = A.(B + NOT B) = A.1 = A.
2. The expression is now A + NOT A.B.
3. By absorption, A + NOT A.B = A + B.

So X = A + B. Check with a truth table:

| A | B | X (original) | A + B |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 |

The columns agree, so the simplification is correct. One OR gate replaces a circuit of three AND gates, two NOT gates and two OR gates.

## Worked example 2: adding with full adders

Add 0110 (6) and 0111 (7) in a four-bit ripple-carry adder, starting from the least significant bit with carry-in 0.

| Bit | A | B | Carry in | Sum | Carry out |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |
| 2 | 1 | 1 | 1 | 1 | 1 |
| 3 | 0 | 0 | 1 | 1 | 0 |

Reading the sums from bit 3 down to bit 0 gives 1101, which is 13 (6 + 7). The final carry-out is 0, so there is no overflow for an unsigned four-bit result.

## Common mistakes

- Confusing assembler, compiler and interpreter: the assembler is for assembly language only.
- Stating that a compiled program "runs line by line". That describes interpretation.
- Applying De Morgan's law without changing AND to OR (or the reverse).
- Writing XOR as "A or B". It excludes both being 1.
- Forgetting the carry-in when completing a full adder table.
- Saying low-level languages are "harder" without saying why: they are tied to one processor and need many instructions per task.

## Exam technique

For **compare** questions, make a point about each translator and link them with a connective such as "whereas". For **simplify**, show each rule applied, name it if possible, and finish with the simplified expression. For truth tables, list the inputs in binary counting order so no row is missed. A "design" question asking for a circuit expects the gate symbols to be drawn correctly, with every input labelled.

## Check your understanding

1. State two functions of an operating system. *Answer: for example memory management and file management.*
2. What is the difference between a linker and a loader? *Answer: the linker joins object modules and library routines into an executable; the loader puts the executable into memory to run it.*
3. Why is bytecode portable? *Answer: it is not tied to a processor; any machine with the right virtual machine can run it.*
4. Name the first stage of compilation and its output. *Answer: lexical analysis, producing tokens.*
5. Use De Morgan's law to rewrite NOT (A + B). *Answer: NOT A . NOT B.*
6. Give the Sum and Carry outputs of a half adder for inputs 1 and 1. *Answer: Sum 0, Carry 1.*
7. What does a D-type flip-flop store, and when does it update? *Answer: one bit; it takes the value on D when the clock edge occurs.*
8. Complete the truth table for Q = (A AND B) OR NOT C. *Answer: Q is 1 for C = 0 in every case, and for C = 1 only when A = B = 1: rows ABC 000, 010, 100, 110 and 111 give 1; rows 001, 011 and 101 give 0.*
