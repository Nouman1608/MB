---
title: "Cambridge O Level Computer Science (2210): Programming languages, translators and IDEs"
seoTitle: "Cambridge O Level CS 2210 Languages, Translators Guide"
resourceType: "study-guides"
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
description: "Study guide to Cambridge O Level Computer Science 2210 section 4.2: high-level and low-level languages, assembly language and assemblers, compilers and interpreters, and the functions of an IDE."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Section 4.2 of Cambridge O Level Computer Science 2210 has five learning statements. Candidates should explain **high-level and low-level languages** with their advantages and disadvantages; understand that **assembly language** is a low-level language that uses mnemonics and needs an **assembler**; describe how a **compiler** and an **interpreter** work, including how errors are reported; explain the advantages and disadvantages of each; and explain the role of an **integrated development environment (IDE)**. This guide covers all five.

## Part 1: why languages and translators are needed

A processor can only run **machine code**, which is made of binary instructions. Writing programs in binary is slow and very error-prone, so programmers use languages that are easier to read and write. Whatever language the programmer chooses, the code must end up as machine code. A **translator** is a program that converts code written in one language into another. The translators in the syllabus are the **assembler**, the **compiler** and the **interpreter**.

## Part 2: high-level languages

A **high-level language** is written using English-like words and structures, and is designed to be easy for people to understand. Python, Java and Visual Basic are examples. A single high-level statement may turn into many machine code instructions.

**Advantages**

- **Easier to read and write**, because the words and structures are close to human language.
- **Easier to debug**, because the code is shorter and clearer and error messages refer to lines in the source code.
- **Machine independent** (portable): the same program can usually be translated to run on different types of processor.

**Disadvantages**

- It does not allow **direct manipulation of the hardware**, such as particular registers or memory locations.
- It must be **translated** before it can be run, and the translated code is often larger and slower than carefully written low-level code.

## Part 3: low-level languages

A **low-level language** is close to the instructions that the processor actually carries out. There are two kinds: **machine code** and **assembly language**.

- **Machine code** is the binary instructions that the processor can run directly, with no translation.
- **Assembly language** replaces binary with short codes called **mnemonics**, such as LOAD, ADD and STORE. Each assembly instruction usually matches exactly one machine code instruction.

Here is an illustration of the idea (mnemonics differ between processors):

```
LOAD  Price     // copy the value stored at Price into the accumulator
ADD   Tax       // add the value stored at Tax
STORE Total     // save the result in Total
```

The high-level statement `Total ← Price + Tax` does the same job in one line.

**Advantages of low-level languages**

- **Direct manipulation of the hardware**, such as registers and memory addresses.
- Programs can be very **fast and small**, because the programmer controls each instruction.
- Used where memory and speed are limited, such as in embedded systems.

**Disadvantages**

- **Hard to read and write**: long lists of mnemonics or binary.
- **Hard to debug**.
- **Machine dependent**: code written for one type of processor will not run on another.

### The assembler

Assembly language cannot be run directly. An **assembler** translates an assembly language program into machine code. Machine code needs no translator.

## Part 4: compilers and interpreters

Programs written in a high-level language are translated into machine code by a **compiler** or an **interpreter**. The original program is the **source code**.

### Compiler

A compiler translates the **whole** source code **at once**, before the program is executed. The result is an **executable file** that can be run without the compiler or the source code.

- If there are errors, the compiler produces an **error report for the whole code**. The program is not produced until all the errors have been fixed.
- Once compiled, the program runs without any further translation.

### Interpreter

An interpreter translates and executes the code **line by line**. It translates one statement, runs it, then moves on to the next.

- If an error is found, the interpreter **stops execution** at that line.
- No executable file is produced. The source code and the interpreter are needed each time the program is run.

### Worked contrast

A program has 200 lines, and line 120 contains a spelling mistake in a keyword.

- A **compiler** reads all 200 lines, reports the mistake on line 120 (and any others) in an error report, and produces no executable file until it is corrected.
- An **interpreter** runs lines 1 to 119, then **stops at line 120** and shows the error. The earlier lines have already run, so their output may already be on the screen.

## Part 5: advantages and disadvantages of each translator

| | Compiler | Interpreter |
|---|---|---|
| Translation | Whole program at once | Line by line |
| Output | Executable file | No executable file |
| Speed of running | Fast: already in machine code | Slower: translated each time it runs |
| Errors | Reported for the whole program after compilation | Stops at the first error found |
| Source code needed to run? | No | Yes, plus the interpreter |
| Sharing the program | The executable can be shared without the source code | The user needs the interpreter and the source |
| Best used | To translate the final program | While developing and testing |

The syllabus makes the point that an **interpreter is mostly used when developing a program**. A programmer can run part of the program, see the error immediately, fix it and run again without waiting for a complete translation. A **compiler is used to translate the final program**, giving a fast executable that can be distributed.

**Further advantage of an interpreter:** it is easy to test small sections of code, because it stops at the exact line with the error.

**Further disadvantage of a compiler:** a long program may take time to compile, and the whole program has to be recompiled after a change.

## Part 6: integrated development environments (IDEs)

An **integrated development environment (IDE)** is a program that brings together the tools a programmer needs to write, test and run code. The syllabus lists seven common functions.

| Function | What it does |
|---|---|
| Code editor | A text editor for writing code, often with line numbers and coloured keywords |
| Run-time environment | Lets the programmer run the program inside the IDE and see its output |
| Translators | Includes a compiler or interpreter (or both) so the code can be translated without leaving the IDE |
| Error diagnostics | Finds and reports errors, often highlighting the line and explaining the problem, and may allow the program to be stepped through |
| Auto-completion | Suggests or completes names and keywords as the programmer types |
| Auto-correction | Corrects obvious typing mistakes automatically |
| Prettyprint | Lays out the code neatly, with indentation and colours that make the structure clear |

Together these save time and reduce mistakes. Prettyprint, for example, shows at a glance where a loop or an IF statement starts and ends, which also helps when checking code.

## Common mistakes

- **Saying a compiler runs the program line by line.** That is an interpreter.
- **Saying a compiler "finds" all the errors.** It reports the errors it detects in the whole code. The programmer must still correct them.
- **Thinking assembly language runs directly.** It needs an assembler.
- **Calling machine code a high-level language.** It is the lowest level.
- **Describing an IDE as a translator.** A translator is one component of an IDE.
- **Listing "easier to use" as an advantage of an interpreter and stopping.** Say why: it stops at the error and can be run during development.

## Exam technique

- **Advantages and disadvantages:** give a balanced answer and refer to ease of reading, ease of debugging, machine independence or direct hardware control.
- **Compare compiler and interpreter:** use direct comparisons such as "a compiler translates all the code at once, whereas an interpreter translates one line at a time".
- **Error reporting:** compiler gives a report for the whole code; interpreter stops at the error.
- **IDE questions:** name the function and say what it does for the programmer.

## Quick check

1. Which type of language needs no translation? *Machine code.*
2. What does an assembler translate? *Assembly language into machine code.*
3. Which translator produces an executable file? *A compiler.*
4. Why is an interpreter useful while a program is being developed? *It stops at the line with the error so it can be fixed and rerun.*
5. Give one IDE function that helps to avoid typing mistakes. *Auto-completion or auto-correction.*

## Continue with

Revise with the [Programming languages, translators and IDEs revision notes](/resources/cambridge-o-level-computer-science-2210-programming-languages-translators-and-ides-revision-notes/) and practise with the [Programming languages, translators and IDEs practice questions](/resources/cambridge-o-level-computer-science-2210-programming-languages-translators-and-ides-practice/).
