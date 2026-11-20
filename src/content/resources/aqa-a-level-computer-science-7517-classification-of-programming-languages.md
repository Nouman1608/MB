---
title: "AQA A-Level Computer Science (7517): Classification of programming languages"
seoTitle: "AQA A-Level CS Programming Languages Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "classification-of-programming-languages-7517"
description: "Deeper guide to AQA 7517 section 4.6.2 Classification of programming languages: low-level machine code and assembly language, imperative high-level languages, and the trade-offs between them."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.6.2 Classification of programming languages** in AQA A-Level Computer Science (7517). The specification asks you to:

- show awareness of the **development of types of programming language** and their classification into **low-level** and **high-level** languages;
- know that the low-level languages are **machine code** and **assembly language**, and that the high-level languages include the **imperative high-level language**;
- **describe machine code and assembly language**;
- understand the **advantages and disadvantages** of machine code and assembly language programming compared with high-level language programming;
- explain the term **imperative high-level language** and its relationship to low-level languages.

The wider [fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/) covers all of section 4.6. Condensed notes are in the [classification of programming languages revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes/), and exam-style questions are in the [classification of programming languages practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-practice/).

## Why languages developed in stages

The first computers were programmed directly in the binary instructions the processor understands. This was slow and error-prone, so programmers invented symbolic notations to make programs easier to write, read and correct. Each step moved further from the machine and closer to the problem being solved:

1. **Machine code**: binary instructions.
2. **Assembly language**: a readable symbolic form of machine code.
3. **High-level languages**: statements that describe the task in terms of the programmer's problem, translated by software into machine code.

The classification into **low-level** and **high-level** describes how close the language is to the processor's own instruction set. A **low-level** language is close to the hardware, with one instruction closely matching one machine operation. A **high-level** language is far from it, with each statement standing for many machine operations.

## Machine code

**Machine code** is the instruction set that the processor can execute directly, written in binary. Each instruction is a pattern of bits made up of an **opcode**, saying what operation to perform, and usually one or more **operands**, saying which registers, values or memory addresses to use.

For example, a processor might encode an instruction that adds two registers as a 16-bit pattern whose first few bits identify "add" and whose remaining bits identify the registers. (The exact layout differs from processor to processor.)

Properties:

- It is the **only language the processor executes directly**, so no translation is needed to run it.
- Each type of processor has its own instruction set, so machine code is **processor-specific**; code for one family does not run on another.
- It is very hard for people to read and write. Errors are easy to make and hard to find.

## Assembly language

**Assembly language** uses **mnemonics**, short memorable names such as `ADD` and `LDR`, in place of binary opcodes, together with **labels** for memory locations and branch targets. There is generally a **one-to-one** correspondence between assembly instructions and machine code instructions. An **assembler** translates assembly language into machine code.

The following short sequence in the style of the AQA assembly language adds two numbers held in memory and stores the answer:

```
LDR R0, 100      ; load the value at address 100 into register R0
LDR R1, 101      ; load the value at address 101 into R1
ADD R2, R0, R1   ; R2 = R0 + R1
STR R2, 102      ; store R2 at address 102
HALT
```

In a high-level language the same task is a single statement: `c = a + b`.

Properties:

- It is easier to read and write than machine code, because of the mnemonics and labels.
- It is still **processor-specific**: a program written for one processor must be rewritten for another.
- It gives the programmer **direct control** over registers, memory and individual instructions.
- It must be translated by an assembler before it can run.

## Imperative high-level languages

A **high-level language** is designed around the programmer's way of thinking rather than the processor's. The specification gives the **imperative** high-level language as its example.

An **imperative** language describes a program as a **sequence of commands** (statements) which the computer carries out in order, changing the **state** of the program (the values of its variables) as it goes. Programs use the constructs sequence, assignment, selection and iteration, and are organised into procedures and functions. Python, Java, C, C# and Visual Basic can all be used in an imperative way.

```
total = 0
for item in prices:
    total = total + item
print(total)
```

Relationship to low-level languages:

- A **high-level imperative statement is translated into several low-level instructions**. One assignment such as `total = total + item` becomes a load, an add and a store.
- High-level programs are translated by a **compiler or interpreter** into machine code (or bytecode) for the target processor.
- The structure of an imperative program reflects the way machine code works: the processor also executes instructions in sequence, modifying registers and memory. High-level imperative languages give a more convenient form of the same model.
- A high-level language hides details such as registers and memory addresses; **the programmer works with variables, data types and control structures**.

## Comparison

| | Machine code | Assembly language | Imperative high-level language |
|---|---|---|---|
| Form | Binary instructions | Mnemonics and labels | Statements close to English and mathematics |
| Translation | None; executed directly | Assembler | Compiler or interpreter |
| Readability | Very poor | Poor to moderate | Good |
| Portability | One processor family | One processor family | Portable across processors (given a translator for each) |
| Ease of writing and debugging | Very hard | Hard | Easier |
| Development time | Longest | Long | Shortest |
| Control of hardware | Complete | Very high | Limited |
| Efficiency of the final code | Can be the best | Can be very good | Depends on the translator; often somewhat less than hand-written low-level code |

### Advantages of low-level programming

- **Fine control** of the hardware, registers and memory, needed for device drivers and parts of an operating system.
- Programs can be made **small and fast**, which is important in systems with very limited memory or tight timing, such as small embedded controllers.
- The programmer can use special processor features directly.

### Disadvantages of low-level programming

- **Hard to read, write, debug and maintain**, so development takes much longer and costs more.
- **Not portable**: a different processor needs a new program.
- The programmer must manage details such as registers and memory themselves, which leads to more errors.
- Programs are long, because each operation needs its own instruction.

### Advantages of high-level programming

- Faster development, with fewer errors, and easier maintenance.
- **Portable** between machines.
- Powerful constructs and built-in data types and libraries.
- The programmer does not need detailed knowledge of the processor.

### Disadvantages of high-level programming

- Needs a translator, and the generated code may be slower or larger than carefully written assembly.
- Less direct control of the hardware.

A useful way to remember the scale is to count instructions. A task such as "add two numbers and store the answer" is one statement in a high-level language, four or five lines in assembly language, and the same number of binary instructions in machine code. The more instructions the programmer must write, the more places there are to make a mistake, and the more difficult it is to change the program later.

## Choosing a language

| Task | Likely choice | Reason |
|---|---|---|
| A word processor | High-level | Large, complex program; fast development; portability |
| A device driver for a new sensor | Low-level or a high-level language with low-level access | Direct control of hardware |
| The code for a very small controller with a few hundred bytes of memory | Assembly | Every byte and cycle matters |
| A website back end | High-level | Fast development and maintenance |

## Common mistakes

- Saying machine code and assembly language are the same. Assembly uses mnemonics and needs an assembler, whereas machine code is binary and runs directly.
- Saying assembly language is portable. It is processor-specific.
- Saying that high-level programs run directly on the processor. They must be translated first.
- Giving "faster to run" as an automatic advantage of high-level languages. High-level languages are faster to **write**.
- Defining imperative languages as "the languages that give orders" without mentioning the sequence of statements and changing state.
- Stating only advantages or only disadvantages when asked to compare.

## Exam technique

- **Describe** machine code (binary instructions executed directly, processor specific) and assembly language (mnemonics, labels, one-to-one with machine code, needs an assembler).
- **Compare** using the categories ease of writing, portability, control of hardware and efficiency.
- **Imperative**: sequence of commands that change program state; each statement is translated into several machine instructions.
- **Justify** a language choice with a feature of the task.

## Related resources

- [Classification of programming languages revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes/)
- [Classification of programming languages practice questions](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-practice/)
- [Types of program translator study guide](/resources/aqa-a-level-computer-science-7517-types-of-program-translator/)
- [Hardware and software study guide](/resources/aqa-a-level-computer-science-7517-hardware-and-software/)

*Written against the AQA A-level Computer Science (7517) specification, 4.6.2 Classification of programming languages. Always check the current specification on the AQA website.*
