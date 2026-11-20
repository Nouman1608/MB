---
title: "OxfordAQA A-Level Computer Science (9645): Programming languages and translation software -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Languages Translators Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6 – Computer systems"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-systems-9645"
  - qualification: "a-level"
    topic: "computer-systems-9645"
    subtopic: "programming-languages-and-translation-software-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.6.3: low- and high-level languages, assemblers, compilers, interpreters and bytecode, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.6.3 Programming languages and translation software** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: low-level and high-level languages, imperative languages, assemblers, compilers, interpreters, bytecode, and source and object code. Assembly code uses the OxfordAQA standard instruction set.

Related pages: [programming languages and translation software study guide](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software/) · [programming languages and translation software revision notes](/resources/oxfordaqa-a-level-computer-science-9645-programming-languages-translation-software-revision-notes/)

## Section A

**1.** Name the two types of low-level language. **[2]**

**2.** State what is meant by an imperative high-level language. **[1]**

**3.** State the difference between source code and object (executable) code. **[2]**

**4.** State what an assembler does. **[2]**

## Section B

**5.** A programmer is deciding whether to write a program for a washing machine's controller in assembly language or in a high-level language.

**(a)** Give **two** advantages of using a high-level language. **[2]**
**(b)** Give **one** advantage of using assembly language for the controller. **[1]**
**(c)** State the translator that would be needed for each language. **[2]**

**6.** This assembly language program runs on a processor. Memory location 300 contains 18 and location 301 contains 7.

```
LDR R0, 300
LDR R1, 301
ADD R2, R0, R1
SUB R3, R2, #5
STR R3, 302
HALT
```

**(a)** State the value in each of R0, R1, R2 and R3 when the program halts. **[4]**
**(b)** State the value stored in memory location 302. **[1]**
**(c)** Explain why one high-level statement such as `result = a + b - 5` needs several assembly instructions. **[2]**

**7.** A program has five statements. Statements 1 to 3 display output, statement 4 contains a syntax error and statement 5 displays output.

**(a)** Describe what happens when the program is run through a compiler. **[2]**
**(b)** Describe what happens when the program is run through an interpreter, stating the number of statements executed before it stops. **[3]**

**8.** A software company has finished a game and wants to sell it to thousands of customers.

**(a)** State which type of translator the company should use. **[1]**
**(b)** Give **two** reasons for this choice. **[2]**
**(c)** Give one reason why an interpreter would be more useful to a student writing a short program for the first time. **[1]**

**9.** Some compilers produce bytecode instead of machine code.

**(a)** State what is meant by bytecode. **[1]**
**(b)** Give **three** reasons why bytecode is used. **[3]**
**(c)** Describe the **two** ways in which bytecode can be executed. **[2]**

**10.** A student says: "A compiler is a program that runs your code and a virtual machine is the same as a compiler." Explain **two** errors in the student's statement. **[4]**

## Answers

**1.** **Machine code** [1] and **assembly language** [1]. **[2]**

**2.** A high-level language in which the commands **describe the process (the steps) to be followed** to carry out a task [1]. **[1]**

**3.** Source code is the program **as written by the programmer** (assembly or high-level language) [1]; object code is the **machine code produced by a translator** that the processor can execute [1]. **[2]**

**4.** An assembler **translates** [1] assembly language into machine code [1]. **[2]**

**5. (a)** Any two [1 each]: **quicker to write and test**; **easier to read and maintain**; can be **translated for different processors** (portable); fewer statements are needed.
**(b)** Any one [1]: **direct control** of the hardware; the program can be **smaller and faster**, which matters on a small controller with limited memory.
**(c)** Assembly language needs an **assembler** [1]; a high-level language needs a **compiler** (or an interpreter) [1]. **[2]**

**6. (a)** R0 = **18** [1]; R1 = **7** [1]; R2 = 18 + 7 = **25** [1]; R3 = 25 − 5 = **20** [1]. **[4]**
**(b)** **20** [1]. **[1]**
**(c)** Each assembly instruction performs only a **very simple operation**, such as loading one value, adding two registers or storing one result [1], so a statement that reads values, calculates and stores a result must be split into several of these steps [1]. **[2]**

**7. (a)** The compiler translates the **whole program** before it runs [1], reports the syntax error in statement 4, and produces **no executable program**, so nothing is displayed [1]. **[2]**
**(b)** The interpreter translates and executes **one statement at a time** [1]; statements 1 to 3 are executed and their output is displayed [1] (**3** statements); it then stops with an error at statement 4 [1]. **[3]**

**8. (a)** A **compiler** [1]. **[1]**
**(b)** Any two [1 each]: the compiled **object code runs faster**; customers receive only **executable code**, so the source code is protected; customers **do not need** a translator; the program is translated **once**, not every time it is run. **[2]**
**(c)** Any one [1]: the program can be **run and tested immediately**, line by line; errors are reported as each line is reached; there is no separate compile step after each change.

**9. (a)** An **intermediate language** produced by a compiler, which is not machine code for one particular processor [1]. **[1]**
**(b)** Any three [1 each]: it is **more portable** than machine code; **security checks** can be carried out before it is executed; it can use **less memory** than equivalent machine code. **[3]**
**(c)** It can be **interpreted by a virtual machine** [1]; or converted into machine code for the computer in use by a **just-in-time (JIT) compiler** [1]. **[2]**

**10.** Error 1: a compiler **translates** a program into object code; it does not run the code [2: statement of the error [1]; correct description [1]]. Error 2: a virtual machine **interprets bytecode** (executes it) whereas a compiler **translates source code** into machine code or bytecode, so they are not the same [2: statement of the error [1]; correct description [1]]. **[4]**

## Frequently asked questions

**Is Python compiled or interpreted?**
The standard implementation translates source code to bytecode and then interprets the bytecode in a virtual machine, so both ideas appear. For exam answers, use the definitions above.

**Does machine code need a translator?**
No. Machine code is what the processor executes. Assembly language needs an assembler to produce it.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.6.3 Programming languages and translation software.
