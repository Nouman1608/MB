---
title: "Cambridge O Level Computer Science (2210): Programming languages, translators and IDEs -- Revision Notes"
seoTitle: "Cambridge O Level Computer Science 2210 Languages and Translators Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 4 – Software"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 4.2
syllabusTopics:
  - qualification: "o-level"
    topic: "software-2210"
  - qualification: "o-level"
    topic: "software-2210"
    subtopic: "types-of-programming-language-translators-and-integrated-development-environments-ides-2210"
description: "Revision notes for Cambridge O Level Computer Science 2210 section 4.2: high-level and low-level languages, assembly and assemblers, compilers and interpreters, IDE functions and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 4.2, Types of programming language, translators and integrated development environments (IDEs). For the full explanations and a worked contrast, use the [Programming languages, translators and IDEs study guide](/resources/cambridge-o-level-computer-science-2210-programming-languages-translators-and-ides/).

## Syllabus checklist

- What is meant by a high-level language and a low-level language, with advantages and disadvantages of each.
- Assembly language is a low-level language that uses mnemonics, and an assembler translates it into machine code.
- The operation of a compiler and an interpreter, including how high-level language is translated and how errors are reported.
- The advantages and disadvantages of a compiler and an interpreter.
- The role of an IDE and its common functions.

## Key terms

| Term | Definition |
|---|---|
| Source code | The program as the programmer wrote it |
| Machine code | Binary instructions that the processor runs directly |
| High-level language | A language with English-like words that is easy for people to read and write |
| Low-level language | A language close to the processor's own instructions: machine code or assembly language |
| Assembly language | A low-level language that uses mnemonics |
| Mnemonic | A short code, such as ADD, standing for a machine code instruction |
| Assembler | Translates assembly language into machine code |
| Compiler | Translates the whole of the code at once, producing an executable file |
| Interpreter | Translates and executes the code line by line |
| IDE | A program that combines tools for writing, running and debugging code |

## High-level versus low-level

| Feature | High-level | Low-level |
|---|---|---|
| Ease of reading and writing | Easy | Hard |
| Ease of debugging | Easier | Harder |
| Machine independence | Machine independent (portable) | Machine dependent |
| Direct manipulation of hardware | Not possible or limited | Possible |
| Needs translating? | Yes: compiler or interpreter | Assembly: assembler. Machine code: no |
| Typical use | Most application programs | Embedded systems, device drivers, tight speed or memory limits |

Remember the pairs: ease of reading, ease of debugging, machine independence, direct hardware control. Examiners use these four.

## The three translators

| Translator | Translates | Input | Output |
|---|---|---|---|
| Assembler | Assembly language | Mnemonics | Machine code |
| Compiler | High-level language | Whole program | Executable file |
| Interpreter | High-level language | One line at a time | Runs each line; no executable file |

## Compiler versus interpreter

| | Compiler | Interpreter |
|---|---|---|
| Translates | All the code at once, before it runs | Line by line while it runs |
| Errors | Error report for the whole code | Stops when an error is found |
| Executable file | Produced | Not produced |
| Speed of the finished program | Fast | Slower, translating each time |
| Source code needed to run | No | Yes, with the interpreter |
| When used | To translate the final program | During development |

### Advantages and disadvantages

**Compiler**

- Advantage: the executable file runs quickly and can be shared without the source code.
- Advantage: no translator is needed to run the finished program.
- Disadvantage: errors are reported only after the whole program has been translated.
- Disadvantage: the whole program is translated again after every change.

**Interpreter**

- Advantage: stops at the line with the error, so errors are easy to find and fix during development.
- Advantage: parts of the program can be tested without translating the rest.
- Disadvantage: slower to run, because every line is translated each time.
- Disadvantage: the interpreter and the source code are needed to run the program.

## IDE functions

| Function | Use |
|---|---|
| Code editor | Write and edit the code |
| Run-time environment | Run the program and see the output |
| Translators | Compile or interpret the code in the IDE |
| Error diagnostics | Show errors and where they are |
| Auto-completion | Suggests or completes names and keywords |
| Auto-correction | Fixes obvious typing mistakes |
| Prettyprint | Neat layout, indentation and colour |

## Answer templates

**Explain high-level and low-level languages (4 marks):** high-level is English-like and easy to read; machine independent; low-level is close to machine code and gives direct hardware control; low-level is harder to read and debug.

**Describe how a compiler works (3 marks):** translates the whole code at once; produces an executable file; reports all the errors found for the whole code.

**Describe how an interpreter works (3 marks):** translates and runs one line at a time; stops when it finds an error; no executable file.

**Explain why a programmer uses an interpreter during development and a compiler at the end (3 marks):** interpreter stops at errors and lets the programmer test and fix quickly; compiler gives a fast executable; the finished program can be distributed without the source code.

## Exam traps

- **Mixing up "compiler" and "interpreter" descriptions.** Compiler: whole code. Interpreter: line by line.
- **Forgetting the assembler.** Assembly language needs an assembler, not a compiler.
- **Saying low-level languages are always faster to write.** They are harder to write.
- **"An IDE translates the code".** The IDE contains the translator.
- **"Interpreted programs are quicker".** They run more slowly because each line is translated each time.
- **Giving only one side.** A comparison question needs both items.

## Self-test

1. What is machine code?
2. Give two advantages of a high-level language.
3. Give two disadvantages of a low-level language.
4. What is a mnemonic?
5. Which translator is needed for assembly language?
6. State how a compiler reports errors.
7. State what an interpreter does when it finds an error.
8. Which translator produces an executable file?
9. Why is an interpreter mostly used while a program is being developed?
10. Why is a compiler used for the final program?
11. Name three common functions of an IDE.
12. What does prettyprint do?

**Answers**

1. Binary instructions that the processor can run directly.
2. Any two: easier to read and write; easier to debug; machine independent.
3. Any two: hard to read and write; hard to debug; machine dependent.
4. A short code in assembly language that stands for a machine code instruction.
5. An assembler.
6. It produces an error report for the whole code.
7. It stops execution at that point.
8. A compiler.
9. It stops at the line with the error and runs part-finished code, so the programmer can fix and test quickly.
10. It produces a fast executable file that can be shared without the source code.
11. Any three from: code editor, run-time environment, translators, error diagnostics, auto-completion, auto-correction, prettyprint.
12. It lays out the code with indentation and colours so that its structure is clear.
