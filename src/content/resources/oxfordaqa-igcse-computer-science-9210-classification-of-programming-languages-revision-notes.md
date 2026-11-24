---
title: "OxfordAQA IGCSE Computer Science (9210): Classification of programming languages and translators -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.13: low- and high-level languages, the three translators, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.13 Classification of programming languages and translators** of OxfordAQA
International GCSE Computer Science (9210). Full explanations and a model answer are in the [classification of
programming languages and translators study
guide](/resources/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages/).

## What the specification asks

- Know the levels: **low-level** and **high-level**; explain the main differences.
- Know **machine code** and **assembly language** are low-level; explain the differences between them.
- All high-level and assembly code must be **translated into machine code**.
- Machine code is **binary** and **specific to a processor or family of processors**.
- Advantages and disadvantages of low-level compared with high-level programming.
- Three translators: **interpreter, compiler, assembler**; their differences; when each is appropriate.

## Language levels

| | Machine code | Assembly language | High-level language |
|---|---|---|---|
| Level | Low | Low | High |
| Form | Binary | Mnemonics (e.g. `ADD`, `STORE`) | English-like statements |
| Instructions per line | 1 | 1 (1:1 with machine code) | Usually many |
| Processor-specific? | Yes | Yes | No (portable) |
| Needs translating? | No: executed directly | Yes: assembler | Yes: compiler or interpreter |
| Typical use | What the processor runs | Embedded systems; controlling specific hardware | Most programs |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators--01-levels-of-language.webp" width="900" height="664" alt="Three stacked levels: high-level languages such as Python, C# and Visual Basic; assembly language with mnemonics and a 1:1 match to machine code; and binary machine code from one processor’s instruction set. High-level code reaches machine code through a compiler or interpreter and assembly through an assembler, because the processor runs only machine code." loading="lazy">
  <figcaption>Whatever the language, the processor only ever runs machine code.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators--02-one-to-one-correspondence.webp" width="900" height="658" alt="The high-level statement total ← price + tax becomes three assembly instructions, LOAD price, ADD tax and STORE total, and each assembly line becomes exactly one machine code instruction shown as an illustrative bit pattern. Below, machine code and assembly language are compared: both are processor-specific, but assembly uses mnemonics and must be assembled." loading="lazy">
  <figcaption>High-level to machine code is one-to-many; assembly to machine code is exactly 1:1.</figcaption>
</figure>

## Why most programs are high-level

- Easier to **write, read and understand**: faster development.
- Easier to **debug and maintain**.
- **Portable** across processors.
- Built-in structures (loops, selection, arrays, strings) save writing many instructions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators--03-portability.webp" width="900" height="690" alt="One high-level source program is translated separately for processor A and processor B. An assembly program written for processor A is assembled for A but will not run on processor B, which has a different instruction set, so it must be rewritten." loading="lazy">
  <figcaption>High-level source can be translated for any processor; assembly must be rewritten for each instruction set.</figcaption>
</figure>

## Low-level: advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Direct control of hardware | Hard and slow to write |
| Can produce small, fast code | Hard to read, debug and maintain |
| Suits embedded systems with limited resources | Not portable: tied to one instruction set |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators--04-low-level-trade-offs.webp" width="900" height="670" alt="Advantages of low-level languages: direct control of the hardware, very efficient code and precise control of what runs. Disadvantages: harder and slower to write, harder to read, debug and maintain, and not portable. So assembly is used for embedded systems and controlling specific hardware, not for most software." loading="lazy">
  <figcaption>Control and efficiency win for embedded systems and hardware; ease and portability win everywhere else.</figcaption>
</figure>

## Translators

| Feature | Compiler | Interpreter | Assembler |
|---|---|---|---|
| Source | High-level | High-level | Assembly |
| Generates machine code directly | Yes | **No** (calls its own machine code subroutines) | Yes |
| Unit of work | Whole program, before running | One statement at a time, while running | One instruction → one machine code instruction |
| Executable produced | Yes | No | Yes (machine code) |
| Translation repeated each run? | No | Yes | No |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators--05-three-translators.webp" width="900" height="822" alt="A compiler translates a whole high-level program into an executable file that can be run again without translating. An interpreter takes each statement in turn and carries it out by calling machine code routines within its own code, generating no machine code and no executable. An assembler converts each assembly instruction into one machine code instruction." loading="lazy">
  <figcaption>Only the interpreter does not generate machine code: it carries out each statement with its own routines.</figcaption>
</figure>

## When to use which

| Situation | Translator | Reason |
|---|---|---|
| Writing and testing a new program | Interpreter | Runs straight away; stops at the line with the error |
| Selling or distributing a finished program | Compiler | Standalone executable; faster; source code not shared |
| Code written in assembly for a hardware device | Assembler | Assembly must be converted to machine code |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators--06-choosing-a-translator.webp" width="900" height="538" alt="Three cards. Interpreter for development: run statements straight away, stop at the error and test changes immediately. Compiler for distribution: an executable that runs without the translator, usually faster, without giving away source code. Assembler whenever part of a program is in assembly language, such as a routine that controls hardware." loading="lazy">
  <figcaption>Interpreter while developing, compiler for distribution, assembler for anything in assembly language.</figcaption>
</figure>

## Model comparison sentences

- "A compiler translates the **whole** program **before** it runs and produces an **executable**; an interpreter
  translates and carries out **one statement at a time** each time the program runs and produces **no**
  executable."
- "Machine code is **binary** and runs **directly**; assembly language uses **mnemonics** and must be
  **assembled** first, with each line becoming **one** machine code instruction."

Writing both halves of a comparison, as in these sentences, is what "explain the difference" questions reward.

## Key terms

| Term | Meaning |
|---|---|
| Machine code | Binary instructions a processor executes directly |
| Instruction set | The machine code instructions a particular type of processor understands |
| Assembly language | A low-level language using mnemonics, with a 1:1 correspondence to machine code |
| Mnemonic | A short code word representing a machine code instruction |
| High-level language | A language with English-like statements that is independent of the processor |
| Portable | Able to be used on different types of processor |
| Translator | A program that converts code into machine code (or carries it out, for an interpreter) |
| Embedded system | A computer system built into a device to control it |

## Exam traps

- "An interpreter converts the program into machine code": **wrong**; it does not generate machine code directly.
- "A compiler works line by line": **wrong**; it translates the whole program first.
- Assembly language is **low-level**, despite using words.
- Assembly is **1:1**: one line, one machine code instruction.
- "High-level languages are faster": not a valid general advantage; low-level code can be more efficient.
- Choosing a translator with no reason linked to the scenario.

## Self-test

1. State the only type of language a processor can execute directly.
2. Explain why machine code written for one processor may not run on another.
3. State what is meant by a 1:1 correspondence between assembly language and machine code.
4. Give two reasons why most programs are written in high-level languages.
5. Give one situation where assembly language is often used.
6. Name the translator for assembly language.
7. State one difference between a compiler and an interpreter.
8. Explain how an interpreter carries out a statement.
9. Which translator is most suitable while a program is being developed? Give a reason.
10. Which translator is most suitable for a program sold to customers? Give a reason.
11. State two disadvantages of writing in assembly language.
12. Is assembly language high-level or low-level?

**Answers:**
1. Machine code.
2. Each processor (family) has its own instruction set, so the binary instructions differ.
3. Each assembly language instruction translates into exactly one machine code instruction.
4. Any two: easier to write and read; easier to debug and maintain; portable between processors; built-in
structures save effort.
5. Embedded systems, or controlling specific hardware components.
6. Assembler.
7. A compiler translates the whole program into machine code before it runs; an interpreter translates and carries
out one statement at a time (and produces no executable).
8. It analyses the statement and calls the appropriate machine code subroutines within its own code to carry it
out.
9. Interpreter: it runs code immediately and stops at the line containing an error.
10. Compiler: it creates an executable that runs without the translator and does not reveal the source code.
11. Any two: hard to write; hard to debug and maintain; not portable.
12. Low-level.

## More resources on this topic

- [Classification of programming languages and translators study guide](/resources/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages/)
- [Classification of programming languages and translators practice questions](/resources/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-practice/)
- [Data structures, subroutines and translators revision notes](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-revision-notes/)
