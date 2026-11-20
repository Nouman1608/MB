---
title: "AQA A-Level Computer Science (7517): Types of program translator -- Practice Questions"
seoTitle: "AQA A-Level CS Program Translators Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "types-of-program-translator-7517"
description: "Original AQA 7517 section 4.6.3 questions with answers: assemblers, compilers, interpreters, source and object code, and bytecode."
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
> and they do **not** replicate the exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Types of program translator study guide](/resources/aqa-a-level-computer-science-7517-types-of-program-translator/) | [Types of program translator revision notes](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes/)

---

## Section A

**1.** State the purpose of an assembler. **[1]**

**2.** State what is meant by source code. **[1]**

**3.** State what is meant by object code. **[1]**

**4.** State the name of the type of translator that translates and executes a program one statement at a time. **[1]**

**5.** State what is meant by bytecode. **[2]**

## Section B

**6.** Explain why a program written in a high-level language must be translated before it can be run. **[2]**

**7.** Compare a compiler with an interpreter. You should refer to when the translation takes place, the speed of running the program and the way errors are reported. **[6]**

**8.** A software company has finished developing a word processor which it will sell to the public. Explain why it should be distributed as object code produced by a compiler rather than as source code run by an interpreter. **[3]**

**9.** A student is learning to program and is writing a short program that they run many times as they make small changes. Explain why an interpreter is a suitable translator. **[3]**

**10.** A compiler translates a program with a syntax error on line 42.

**(a)** State what the compiler does. **[1]**
**(b)** Explain how an interpreter would behave differently when running the same program. **[2]**

**11.** Some compilers produce bytecode rather than machine code.

**(a)** Explain how bytecode is then used to run the program. **[2]**
**(b)** Give two reasons why bytecode is produced. **[2]**
**(c)** State one disadvantage of using bytecode. **[1]**

**12.** A program compiled for one type of processor is copied to a computer with a different type of processor. Explain why it will not run, and state what must be done. **[3]**

**13.** Describe two situations in which an interpreter is more appropriate than a compiler. **[4]**

---

## Answers

**1.** It translates assembly language into machine code [1].

**2.** The program as written by the programmer, in assembly language or a high-level language [1].

**3.** The translated program in machine code, which the processor can execute [1].

**4.** An interpreter [1].

**5.** An intermediate language produced by some compilers [1]; made of low-level, compact instructions for a virtual machine, not for a real processor [1].

**6.** The processor can execute only machine code [1]; a translator converts the high-level program into machine code (or a form that can be executed) [1].

**7.** Any six from: a compiler translates the whole program before it is run; an interpreter translates and executes one statement at a time while the program runs; compiled programs run faster because the object code is already machine code; an interpreted program is slower because statements are translated every time they are executed; a compiler reports errors for the whole program after translating it and produces no object code if there are errors; an interpreter stops at the first error it meets, which is reported against the statement that caused it; a compiler produces an object code file that can be run without the compiler; an interpreter is needed every time the program is run [6].

**8.** Compiled code runs faster, which is important for a large program used by many people [1]; the customer does not need a compiler or the source code, and the translation is done once and not each time the program is run [1]; the source code is not distributed, so it is protected from being copied or modified [1].

**9.** An interpreter runs the program immediately without a separate compile step [1], so the student can see the effect of each small change quickly [1]; if there is an error, the interpreter reports it against the statement that caused it, which helps the student to find and fix it [1].

**10. (a)** It reports the error and does not produce object code [1].
**(b)** The interpreter would run the statements before line 42 as normal [1]; it would stop and report the error only when it reached line 42 [1].

**11. (a)** The bytecode is run by a bytecode interpreter (virtual machine) on the target computer [1], which translates each bytecode instruction into machine instructions as the program runs [1].
**(b)** Any two from: the same bytecode can run on any computer with a virtual machine, so it is portable and does not need to be compiled again for each processor; it is quicker to run than interpreting high-level source code; the source code is not distributed; the files are compact [2].
**(c)** It runs more slowly than native machine code, because it is interpreted [1].

**12.** The object code contains the machine code instructions of the first processor [1]; the second processor has a different instruction set and does not understand them [1]; the source code must be compiled again using a compiler for the second type of processor [1].

**13.** During development and testing [1], because changes can be run at once and errors are reported against the statement that caused them [1]; when the same source code must run on many different types of computer [1], because only an interpreter needs to be available for each type, not a separate compiled version [1]. (Other valid situations include short scripts and teaching.)

---

## Where marks are usually lost

- Saying that compilers translate line by line.
- Saying that interpreted programs run faster than compiled programs.
- Mixing up source code and object code.
- Calling bytecode machine code and not mentioning the virtual machine.
- Giving points about only one of the two translators in a comparison.
