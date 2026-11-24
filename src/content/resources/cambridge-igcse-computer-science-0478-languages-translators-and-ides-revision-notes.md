---
title: "Cambridge IGCSE Computer Science (0478): Types of programming language, translators and IDEs -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 4.2: language levels, assemblers, compiler against interpreter and IDE functions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---
Condensed notes for syllabus section 4.2: the types of programming language, the translators that turn code into machine code, and the functions of an IDE.

## Four facts to start with

1. A **high-level language** is close to human language; a **low-level language** is close to the processor.
2. **Assembly language** uses mnemonics and needs an **assembler** to become machine code.
3. A **compiler** translates the whole program at once into an executable file; an **interpreter** translates and runs one line at a time.
4. An **IDE** brings editing, running, translating and debugging tools together.

## Key terms

| Term | Definition |
|---|---|
| High-level language | Language using human-like words and structures; mostly machine independent |
| Low-level language | Language close to the processor, including machine code and assembly language |
| Machine code | Binary instructions the processor can execute directly |
| Assembly language | Low-level language using mnemonics |
| Mnemonic | Short abbreviation for an instruction, such as `ADD` |
| Assembler | Translator from assembly language to machine code |
| Compiler | Translator that converts the whole program to machine code before it runs |
| Interpreter | Translator that converts and executes code line by line |
| Executable file | Machine code file produced by a compiler |
| IDE | Integrated development environment: a package of programming tools |

## High-level versus low-level

| Feature | High-level | Low-level |
|---|---|---|
| Reading and writing | Easier | Harder |
| Debugging | Easier | Harder |
| Machine independence | Mostly independent | Machine dependent |
| Direct hardware control | Limited | Direct |

Memory aid: for ease of reading, debugging and independence, high-level wins. For hardware control, low-level wins.

## The translation chain

| Source code | Translator | Result |
|---|---|---|
| High-level language | Compiler or interpreter | Machine code |
| Assembly language | Assembler | Machine code |
| Machine code | None needed | Executed directly |

## Compiler versus interpreter

| | Compiler | Interpreter |
|---|---|---|
| Translates | Whole program at once | One line at a time |
| Product | Executable file | None |
| Errors | Report for the whole code | Stops at the error |
| Speed of the finished program | Faster | Slower |
| Needed by the user | Only the executable | Source code and the interpreter |
| Typical use | Final program | Development and testing |

## Advantages and disadvantages in one line each

- **Compiler plus:** fast to run; no source code or translator needed by the user.
- **Compiler minus:** must be recompiled after every change; errors reported together; tied to one type of processor.
- **Interpreter plus:** stops at the faulty line; good for testing parts; no executable needed.
- **Interpreter minus:** slower; translator and source code always needed; code is easier to copy.

## IDE functions

| Function | Meaning |
|---|---|
| Code editor | Text area for writing code |
| Run-time environment | Runs the program inside the IDE |
| Translators | Built-in compiler or interpreter |
| Error diagnostics | Finds and reports errors |
| Auto-completion | Suggests or finishes keywords and names |
| Auto-correction | Fixes simple mistakes automatically |
| Prettyprint | Clear display with colours and indentation |

## Worked example: matching the term

A programmer sees a line of code coloured blue, indented and with a comment in green. Which IDE function is this? **Prettyprint.** The same programmer starts typing `OUTP` and the IDE suggests `OUTPUT`. This is **auto-completion**.

## Worked example: which translator and why

A company writes a payroll program and wants to sell it to schools.

1. During writing, the programmers use an **interpreter** so that each change can be run at once and the run stops at the faulty line.
2. For the version sold to schools, they use a **compiler** to produce an **executable file**. Schools do not need the source code or the compiler, and the program runs faster.
3. If part of the program is written in assembly language, that part is translated by an **assembler** first.

## Giving the benefit of each IDE function

Exam questions often ask what an IDE feature does **and** why it helps. Use the pattern "it does X, so the programmer Y".

| Function | Pattern answer |
|---|---|
| Error diagnostics | Finds and reports the faulty line, so the programmer can fix it quickly |
| Auto-completion | Suggests keywords as they are typed, so typing is faster and has fewer spelling errors |
| Prettyprint | Colours and indents the code, so it is easier to read and check |
| Run-time environment | Runs the program inside the IDE, so testing needs no other software |

## Exam traps

- **Compiler line by line.** No: that is the interpreter.
- **Assembly needs a compiler.** No: an assembler.
- **"Low-level is faster to write."** No: it is harder to read and write.
- **Machine code and assembly the same.** Machine code is binary; assembly uses mnemonics.
- **One-sided comparison.** Always give both items.
- **Prettyprint changes how the program runs.** It only changes the layout on screen.

## Self-test

1. What is a high-level language?
2. Give two reasons why low-level languages are harder to debug than high-level languages.
3. What does an assembler do?
4. What is a mnemonic?
5. State what a compiler produces.
6. What does an interpreter do when it finds an error?
7. Which translator would you use while developing a program?
8. Give one disadvantage of using a compiler during testing.
9. Name three functions of an IDE.
10. Why might a programmer choose a low-level language for a device driver?

**Answers**

1. A language that uses human-like words and structures and is mostly machine independent.
2. Any two: programs are longer, instructions are hard to read, errors are hidden in many small steps, there are no helpful statements.
3. It translates assembly language into machine code.
4. A short abbreviation used in assembly language in place of a binary instruction.
5. An executable file of machine code.
6. It stops executing and reports the error.
7. An interpreter.
8. The whole program must be recompiled after each change.
9. Any three from code editor, run-time environment, translators, error diagnostics, auto-completion, auto-correction, prettyprint.
10. It allows direct manipulation of hardware, so the programmer can control registers and memory exactly.

## Command words to expect

| Command word | What to write |
|---|---|
| State, Give, Identify | A short answer with no explanation |
| Define | A precise meaning |
| Describe | The main points or characteristics, or the steps in order |
| Explain | A reason or "how and why", supported with evidence from the question |
| Compare | Similarities and differences, naming both sides every time |
| Suggest | A sensible proposal that applies your knowledge to the situation given |
| Evaluate | A judgement based on advantages and disadvantages, ending with a conclusion |

## More on this topic

Read the full explanations in the [Types of programming language, translators and IDEs study guide](/resources/cambridge-igcse-computer-science-0478-languages-translators-and-ides/), then try the [Types of programming language, translators and IDEs practice questions](/resources/cambridge-igcse-computer-science-0478-languages-translators-and-ides-practice/).

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 4.2:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
