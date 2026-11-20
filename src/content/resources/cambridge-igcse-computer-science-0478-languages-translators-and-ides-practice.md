---
title: "Cambridge IGCSE Computer Science (0478): Types of programming language, translators and IDEs -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with full answers on Cambridge IGCSE Computer Science 0478 section 4.2: high-level and low-level languages, translators and IDE features."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Use these alongside the official past papers available from your board.

Related: [Types of programming language, translators and IDEs study guide](/resources/cambridge-igcse-computer-science-0478-languages-translators-and-ides/) and [Types of programming language, translators and IDEs revision notes](/resources/cambridge-igcse-computer-science-0478-languages-translators-and-ides-revision-notes/)

---

## Section A

**1.** State what is meant by a **low-level language**. **[1]**

**2.** State the name of the translator used to convert assembly language into machine code. **[1]**

**3.** Give **one** advantage of a high-level language compared with a low-level language. **[1]**

**4.** State **two** functions of an IDE. **[2]**

**5.** State whether each statement describes a compiler or an interpreter.

**(a)** Translates and executes one line at a time. **[1]**

**(b)** Produces an executable file. **[1]**

**(c)** Stops when an error is found. **[1]**

**6.** State what a mnemonic is. **[1]**

## Section B

**7.** Describe **two** differences between machine code and assembly language. **[2]**

**8.** A company writes software for a small sensor that has very little memory. Explain why a low-level language might be chosen. **[2]**

**9.** A student writes a program in a high-level language. Explain why it must be translated before it can run. **[2]**

**10.** Explain **two** advantages of using an interpreter while a program is being developed. **[4]**

**11.** Explain why a software company uses a compiler for the final version of a product it sells. **[3]**

**12.** Describe how an error is reported by a compiler and by an interpreter. **[3]**

**13.** A programmer types `PRIN` and the IDE offers `PRINT`. The programmer also notices keywords appear in different colours. Name the **two** IDE functions that are being used and describe the benefit of each. **[4]**

**14.** Compare high-level and low-level languages. **[4]**

**15.** Evaluate the use of a compiler and an interpreter for a school project that is being written, tested and then sent to the teacher to run on a school computer. **[5]**

---

## Answers

**1.** A language that is close to the way the processor works, such as machine code or assembly language [1].

**2.** An assembler [1].

**3.** Any one from: easier to read and write; easier to debug; machine independent (can be used on different processors) [1].

**4.** Any two from: code editor, run-time environment, translators, error diagnostics, auto-completion, auto-correction, prettyprint [1 each].

**5.** **(a)** Interpreter [1]. **(b)** Compiler [1]. **(c)** Interpreter [1].

**6.** A short abbreviation used in assembly language to represent an instruction [1].

**7.** Machine code is written in binary, but assembly language uses mnemonics [1]. Machine code can be run directly by the processor, but assembly language must be translated by an assembler first [1].

**8.** A low-level language lets the programmer control memory and registers directly [1], so the program can be made small and use the limited memory efficiently [1].

**9.** The processor can only execute machine code [1]. A high-level language is written in human-like statements that the processor cannot execute, so a compiler or interpreter must translate it [1].

**10.** An interpreter stops at the line with the error [1], so the programmer knows exactly where the fault is [1]. Parts of the program can be run and tested without translating the whole program first [1], which saves time when small changes are made often [1].

**11.** The compiler produces an executable file [1], which runs faster because it is already translated [1]. Customers do not need the source code or the compiler, which also protects the code from being copied or changed [1].

**12.** A compiler translates the whole program and then gives an error report listing the errors in the whole code [1]. An interpreter stops execution at the line where it finds an error [1] and reports that error, so errors are found one at a time [1].

**13.** Auto-completion [1]: it suggests or finishes keywords as they are typed, saving time and reducing typing mistakes [1]. Prettyprint [1]: it shows keywords in colours and lays code out clearly, so the code is easier to read and check [1].

**14.** High-level languages are easier to read and write, whereas low-level languages are harder [1]. High-level languages are easier to debug, but low-level code is harder to debug [1]. High-level languages are mostly machine independent, but low-level languages are written for one type of processor [1]. Low-level languages allow direct manipulation of hardware, but high-level languages limit it [1].

**15.** Any five from: while writing and testing, an interpreter is useful because it runs the code straight away [1] and stops at the line with the error [1]; no executable needs to be rebuilt after each small change [1]. When the project is sent to the teacher, a compiler produces an executable file [1] that the teacher can run without the source code or a translator [1] and that will run faster [1]. A disadvantage of the interpreter for the final version is that the teacher would need the interpreter and the source code [1]. Judgement, for example: use the interpreter during development and the compiler for the final version [1]. Maximum 5.

---

## Where marks are usually lost

- Question 5: mixing up the compiler and the interpreter. The compiler translates everything at once.
- Question 7: describing only one language in each difference.
- Question 9: saying the program must be translated "so the computer can read it" without naming machine code.
- Question 10: giving one advantage and repeating it in different words.
- Question 12: saying both give "an error message" with no difference.
- Question 13: naming a function without the benefit.
- Question 14: listing features of one language only.
- Question 15: describing both translators without saying which stage of the project each suits.

## Quick reference for checking your answers

| Item | Key point |
|---|---|
| Assembler | Assembly language to machine code |
| Compiler | Whole program at once; executable file; error report |
| Interpreter | Line by line; stops at the first error |
| IDE | Editor, run-time environment, translators, diagnostics, auto-completion, auto-correction, prettyprint |
