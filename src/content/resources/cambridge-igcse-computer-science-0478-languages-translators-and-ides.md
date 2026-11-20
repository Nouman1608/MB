---
title: "Cambridge IGCSE Computer Science (0478): Types of programming language, translators and IDEs"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Software"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 4.2
syllabusTopics:
  - qualification: "igcse"
    topic: "software"
  - qualification: "igcse"
    topic: "software"
    subtopic: "types-of-programming-language-translators-and-integrated-development-environments-ides-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 4.2: high-level and low-level languages, assembly language and assemblers, compilers, interpreters and the functions of an IDE."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
Section 4.2 of the Cambridge IGCSE Computer Science 0478 syllabus is about how programs written by people become instructions a processor can run. You must **explain high-level and low-level languages** with the advantages and disadvantages of each, **understand assembly language** and the assembler, **describe the operation of a compiler and an interpreter** and their advantages and disadvantages, and **explain the role of an integrated development environment (IDE)** and its common functions.

## High-level and low-level languages

A **high-level language** uses words and structures close to human language, such as `IF`, `WHILE` and `OUTPUT`. Python, Java and Visual Basic are examples. The programmer thinks about the problem, not about the processor.

A **low-level language** is close to the way the processor works. It includes **machine code** (binary instructions the processor executes directly) and **assembly language**.

| | High-level language | Low-level language |
|---|---|---|
| Ease of reading and writing | Easier. Statements look like English and one statement does a lot | Harder. Instructions are short codes, so programs are long and hard to follow |
| Ease of debugging | Easier. Errors are reported using the programmer's own statements | Harder. A fault may be hidden in many small steps |
| Machine independence | Mostly **machine independent**: the same code can be translated for different processors | **Machine dependent**: written for one type of processor and will not run on another |
| Direct manipulation of hardware | Limited. The language hides memory addresses and registers | Direct. The programmer can control specific registers, memory locations and the hardware |
| Speed and size | Translated code may be larger or slower | Can be made small and fast because the programmer controls every step |

### When would you use each?

High-level languages suit most software: games, websites, school projects and business programs, because they are quicker to write and easier to maintain. Low-level languages suit tasks where the programmer needs exact control of hardware or tight use of memory, such as device drivers or the software inside a small embedded device.

## Assembly language and the assembler

**Assembly language** is a low-level language that uses **mnemonics** in place of binary codes. A mnemonic is a short, memorable abbreviation for an instruction. Typical mnemonics are `LDA` (load), `ADD`, `STO` (store) and `END`. Each assembly instruction usually matches one machine code instruction.

Example of what an assembly program may look like (the exact mnemonics depend on the processor):

```
LDA 20     // load the value at memory location 20
ADD 21     // add the value at location 21
STO 22     // store the result at location 22
END
```

The processor cannot execute mnemonics. An **assembler** translates assembly language into machine code. It is a translator that works on assembly language only.

Compare the three levels using the instruction "add two numbers":

| Level | What it looks like |
|---|---|
| High-level | `Total ← A + B` |
| Assembly | `LDA A`, `ADD B`, `STO Total` |
| Machine code | A string of binary digits for each instruction |

One high-level statement becomes several assembly instructions, and each becomes machine code.

## Translators: compiler and interpreter

Processors can only run machine code, so a program written in a high-level language must be translated. There are two kinds of translator for high-level code.

### Compiler

A **compiler** translates the **whole program at once** before it is run. It produces an **executable file** of machine code. The user can run the executable without the compiler or the original source code.

If the compiler finds errors it gives an **error report for the whole code**, listing the errors it found. The program does not run until the errors are fixed and the code is compiled again.

### Interpreter

An **interpreter** translates and executes the code **one line at a time**. It does not produce a separate executable file. Each time the program is run, it must be translated again.

When the interpreter reaches a line with an error, it **stops execution** at that line and reports the error. The lines before the error have already run.

### Comparison

| | Compiler | Interpreter |
|---|---|---|
| Translates | Whole program at once | One line at a time |
| Output | An executable file | No separate file |
| Error reporting | A report on the whole code after translation | Stops at the first error found |
| Running the program | Runs quickly because it is already translated | Slower because each line is translated as it runs |
| Source code needed to run? | No. The executable can be given to users | Yes, and the interpreter as well |
| Best used for | The final, finished program | Developing and testing |

### Advantages and disadvantages

**Compiler advantages:**

- The finished executable runs faster, because no translation is needed at run time.
- The user does not need the compiler or the source code, so the code is harder to copy or change.
- The executable can be distributed to many users.

**Compiler disadvantages:**

- The whole program must be compiled again after every change, which can take time during development.
- Errors are shown together after compilation, so it can be harder to locate them while testing a half-finished program.
- The executable works only on the type of processor it was compiled for.

**Interpreter advantages:**

- Execution stops at the line where an error is found, so the programmer sees exactly where the program failed.
- A section of the program can be tested without waiting for the whole program to be translated, which suits development.
- The same source code can run on different computers if each has an interpreter.

**Interpreter disadvantages:**

- The program runs more slowly because translation happens during execution.
- The user must have the interpreter and the source code.
- No executable file is produced, so the code is easier to copy or change.

The syllabus note is that an **interpreter is mostly used while developing** a program, and a **compiler is used to translate the final program**.

### Worked example: choosing a translator

A student is writing a game. They test it often and change small parts. Which translator is more suitable while writing, and which when the game is sold?

1. While writing, an **interpreter** lets the student run the program straight away. If there is an error, it stops at the line and reports it. There is no waiting for the whole game to compile.
2. When the game is finished, a **compiler** produces an executable file. Customers run it without needing the source code, and it runs faster.

## Integrated development environments (IDEs)

An **IDE** is a software package that gives a programmer the tools needed to write, test and correct programs in one place. The syllabus lists seven common functions.

| Function | What it does | Benefit |
|---|---|---|
| Code editor | A text editor for typing code, often with line numbers and colouring of keywords | Easier to type and read the program |
| Run-time environment | Lets the program be run and tested from inside the IDE | No need to leave the IDE to test |
| Translators | A built-in compiler or interpreter | One-click translation |
| Error diagnostics | Finds and reports errors, often highlighting the line and describing the fault | Faster debugging |
| Auto-completion | Suggests or completes names and keywords as the programmer types | Saves time; fewer typing mistakes |
| Auto-correction | Automatically fixes some simple mistakes, such as a wrongly spelt keyword | Fewer syntax errors |
| Prettyprint | Displays code in a clear layout, using colours, fonts and indentation for keywords, comments and structures | Easier to read and check |

Prettyprint is about how the code **looks on screen**. It does not change what the program does.

## Annotated model answer

**Question:** Explain **two** differences between a compiler and an interpreter. [4]

> A compiler translates the whole program at once [1], whereas an interpreter translates and executes the program one line at a time [1]. A compiler gives an error report for the whole code [1], but an interpreter stops as soon as it finds an error [1].

**Why it scores 4:** each difference states both sides ("whereas", "but"). Writing only "a compiler translates everything at once" earns half the credit for that difference.

## Common mistakes

- Saying a compiler translates "line by line". That is an interpreter.
- Writing that assembly language needs a compiler. It needs an **assembler**.
- Saying low-level languages are "faster for the programmer". They are harder to write.
- Writing that a high-level language is run directly by the processor. It has to be translated to machine code first.
- Confusing machine code with assembly. Machine code is binary; assembly uses mnemonics.
- Treating an IDE as a language. It is a set of tools.
- Calling prettyprint "making the code run better". It changes the layout on the screen only.

## Exam technique

- **Explain what is meant by**: give a definition and one example.
- **Advantages and disadvantages**: use the four syllabus headings (ease of reading and writing, ease of debugging, machine independence, direct manipulation of hardware).
- **Compare**: name both items in every sentence.
- **Describe an IDE function**: say what it does and how that helps the programmer.

## Practise this sub-topic

Use the [Types of programming language, translators and IDEs revision notes](/resources/cambridge-igcse-computer-science-0478-languages-translators-and-ides-revision-notes/) for quick recall and the [Types of programming language, translators and IDEs practice questions](/resources/cambridge-igcse-computer-science-0478-languages-translators-and-ides-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 4.2 Types of programming language, translators and IDEs:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
