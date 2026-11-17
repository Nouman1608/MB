---
title: "OxfordAQA IGCSE Computer Science (9210): Classification of programming languages and translators"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.13
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "classification-of-programming-languages-and-translators-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.2.13: machine code, assembly, high-level languages, compilers, interpreters and assemblers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---

This guide covers section **3.2.13 Classification of programming languages and translators** of OxfordAQA
International GCSE Computer Science (9210). The specification asks you to "know that there are different levels
of programming language", low-level and high-level, to "explain the main differences" between them, and to "know
that machine code and assembly language are considered to be low-level languages and explain the differences
between them". You must also understand the "three common types of program translator", **interpreter, compiler
and assembler**, explain how they differ and "understand when it would be appropriate to use each". A compact
summary is in the [data structures, subroutines and translators study
guide](/resources/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators/); this guide
explains the reasoning behind each comparison so that you can answer "explain" and "discuss" questions.

## Machine code: the only language a processor runs

A processor can execute only **machine code**: instructions expressed in **binary**. Each type of processor has its
own **instruction set**, the set of machine code instructions it understands, so machine code is **specific to a
processor or family of processors**. A program in machine code for one family will not run on a processor from a
different family.

The specification's key consequence: **all program code written in high-level or assembly languages must
ultimately be translated into machine code** before a processor can carry it out.

## Assembly language

Writing binary directly is slow and error-prone, so **assembly language** replaces each binary instruction with a
short, readable **mnemonic**, and lets the programmer use names for memory locations. Assembly language has a
**1:1 correspondence** with machine code: each line of assembly language becomes exactly **one** machine code
instruction. An illustrative fragment (the mnemonics and bit patterns are invented for the example; real
instruction sets differ) might be:

| Assembly language | Meaning | Machine code (illustrative) |
|---|---|---|
| `LOAD price` | Copy the value of `price` into the processor | `0001 1010` |
| `ADD tax` | Add the value of `tax` to it | `0011 1011` |
| `STORE total` | Copy the result into `total` | `0010 1100` |

In a high-level language the same task is a single statement, `total ← price + tax`. That contrast, three
instructions against one, is the heart of the difference between the two levels.

**Machine code and assembly compared:** both are low-level and processor-specific. Machine code is binary and is
executed directly; assembly uses mnemonics, is easier for people to read and write, and must be **assembled**
before it can run. Because of the 1:1 correspondence, an assembly programmer still controls exactly which
instructions the processor executes.

## High-level languages

Python, C# and Visual Basic are **high-level languages**. Their statements are closer to English and mathematical
notation, and one statement usually translates into **many** machine code instructions. The specification says
students should understand that **most programs are written in high-level languages** and explain why:

- they are **easier to write, read and understand**, so programs are produced faster;
- they are **easier to debug and maintain**, because the code shows what it is meant to do;
- they are **portable**: the same source code can be translated for different processors, instead of being
  rewritten for each instruction set;
- they provide **built-in features** such as selection, iteration, data structures and string handling, which in
  assembly would need many instructions each.

## Why low-level languages are still used

Assembly language is often used to develop software for **embedded systems** and for **controlling specific
hardware components**. In these situations its advantages matter:

| Low-level advantage | Why it matters |
|---|---|
| Direct control of the hardware | The programmer can work with specific memory locations and device components |
| Code can be very efficient | Programs can be small and fast, which suits devices with limited memory or processing power |
| Precise control of what is executed | Each instruction is chosen by the programmer, with nothing added by a translator |

The disadvantages explain why it is not used for most software: it is **harder and slower to write**, **harder to
read, debug and maintain**, and **not portable**, because it is tied to one processor's instruction set.

## The three translators

| | Compiler | Interpreter | Assembler |
|---|---|---|---|
| Translates | High-level language | High-level language | Assembly language |
| Generates machine code directly? | Yes | **No** | Yes |
| How it works | Translates the whole program into machine code before it runs | Takes each statement in turn and carries it out by calling machine code subroutines within its own code | Converts each assembly instruction into one machine code instruction |
| Output | An executable file that can be run again without translating | No executable; the program is translated every time it runs | Machine code |

The interpreter row is the one most often answered wrongly. The specification is explicit that interpreters **do
not generate machine code directly**: the interpreter is itself a machine code program, and for each statement it
analyses, it runs its own pre-written machine code routines that carry that statement out.

## When to use each translator

**Interpreter, during development.** The program can be run as soon as a statement is written, without waiting for
the whole program to be translated, and execution stops at the statement where an error occurs, which makes that
error easy to locate. Changes can be tested immediately.

**Compiler, for distribution.** The finished program becomes an executable that runs without the translator being
present, usually runs faster because translation has already been done, and does not give customers the source
code.

**Assembler, for assembly language.** Whenever the program, or part of it, has been written in assembly language
(for example, a routine that controls a device's hardware), an assembler is needed to produce the machine code.

## Annotated model answer

**Question:** A company is developing a game for several types of games console, each with a different processor.
Explain why the developers would write the game in a high-level language rather than in assembly language. [4]

**Model answer:** Assembly language is specific to one processor's instruction set, so the game would have to be
rewritten for each type of console. A high-level language is portable: the same source code can be translated for
each processor. A game is a large program, and high-level code is quicker to write and easier to debug and
maintain, so the game can be finished and updated more quickly.

**Why it scores:** it makes two distinct points, portability and ease of development, and each is linked to the
scenario (several processors; a large program that will be updated). Answers that say "high-level is easier"
without saying why, or without using the scenario, usually gain only part of the credit.

## Common mistakes

- **Saying an interpreter produces machine code or an executable.**
- **Saying a compiler translates "line by line".** It translates the whole program before it runs.
- **Calling assembly language high-level** because it uses words.
- **Forgetting that machine code is processor-specific**, so it is not portable.
- **Saying assembly has "a few" machine code instructions per line.** The correspondence is exactly 1:1.
- **Choosing a translator with no reason** tied to the situation (testing, distribution, assembly code).

## Exam technique

- **Explain the differences**: compare like with like, for example "a compiler translates the whole program before
  running; an interpreter translates and runs each statement in turn".
- **Discuss when to use**: link each translator to a stage or situation and give the benefit.
- **Use the specification's terms**: instruction set, mnemonic, 1:1 correspondence, embedded system, portable.

## Next steps

Revise the comparisons quickly in the [classification of programming languages and translators revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators-revision-notes/)
and practise written answers in the [classification of programming languages and translators practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators-practice/).
Embedded systems are also part of Topic 4, Computer systems.
