---
title: "IB DP Computer Science (DP Computer Science): Translation (HL) -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "A.1 -- Computer fundamentals"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
description: "Twelve original HL questions on translation for IB DP Computer Science A.1: compilers, interpreters, assemblers, bytecode and JIT, with mark-scheme answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A1.4 label (Translation, HL only); please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A1.4 Translation** (HL only), inside A.1 Computer fundamentals. Related:
[translation study guide](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-translation/)
and [revision notes](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a1-translation-revision-notes/).

## Section A

**1.** Define the term *translator*. **[1]**

**2.** State the type of translator that converts assembly language into machine code. **[1]**

**3.** Outline **two** differences between a compiler and an interpreter. **[2]**

**4.** State **two** reasons why programmers write in high-level languages rather than machine code.
**[2]**

**5.** Define *bytecode* and state what is needed to run it. **[2]**

**6.** A student's interpreted program has a syntax error on line 40 in a section that only runs when
the user chooses option 3. The student tests the program by choosing options 1 and 2 only. Explain why
the error is not reported. **[2]**

## Section B

**7.** A loop body containing 5 statements runs 20,000 times.
**(a)** Calculate how many statement translations an interpreter performs while the loop runs, if
each statement is translated every time it is executed. **[1]**
**(b)** State how many times a compiler translates these statements, and when. **[2]**
**(c)** Use your answers to explain why compiled programs usually run faster. **[1]**

**8.** Describe how Java achieves the aim that one compiled program can run on many different kinds
of computer. **[4]**

**9.** Explain how just-in-time compilation improves the performance of a program running on a
virtual machine, and state **one** cost of this approach. **[4]**

**10.** A software company develops an accounting package that it sells to businesses.
**(a)** Explain **two** reasons why the company distributes a compiled version of the package. **[4]**
**(b)** Outline **one** disadvantage to the company of distributing compiled executables. **[2]**

**11.** Outline the purpose of the lexical analysis and syntax analysis stages of a compiler. **[4]**

**12.** A school is choosing between an interpreted language and a compiled language for teaching
beginners in their first year of programming. Evaluate the two options. **[6]**

---

## Answers

**1.** A program that converts source code written in one language (high-level or assembly) into a
form that the computer can execute (machine code or an intermediate code) [1].

**2.** An assembler [1].

**3.** Any two, [1] each: a compiler translates the whole program before running, an interpreter one
statement at a time during running; a compiler produces an executable, an interpreter does not;
compiled code runs faster; a compiler reports all errors after analysis, an interpreter stops at the
first error it meets; an interpreted program needs the interpreter each time it runs. Maximum 2.

**4.** Any two, [1] each: easier to read, write and debug; uses structures such as loops, functions and
named variables; programs are portable between different processors; faster to develop. Maximum 2.

**5.** An intermediate code produced by compiling source code, which is not the machine code of a
particular processor [1]; a virtual machine (for example the JVM) is needed to run it [1].

**6.** An interpreter only translates statements when they are reached during execution [1]; because
option 3 was never chosen, line 40 was never translated, so the error was not detected [1].

**7. (a)** 5 × 20,000 = 100,000 translations [1].
**(b)** Once each (5 translations in total) [1], before the program is run [1].
**(c)** The compiled program does no translation while it runs, so all of the time is spent executing
the machine code [1].

**8.** One mark per point, up to 4:
- Java source code is compiled into bytecode, not into the machine code of one processor [1].
- The bytecode is the same whatever platform it will run on [1].
- Each platform has its own Java Virtual Machine, written for that hardware and operating system [1].
- The JVM translates or executes the bytecode on the real processor [1].
- So the same bytecode file runs on any computer with a JVM without being recompiled [1].
Maximum 4.

**9.** Improvement, up to 3: the virtual machine monitors which parts of the program run most often
[1]; it compiles these frequently used sections into native machine code during execution [1]; later
executions of those sections use the native code, which runs faster than interpreting the bytecode
[1]. Cost, any one [1]: slower start-up while code is compiled; extra memory to hold compiled code;
processing time spent on compilation during the run. Maximum 4.

**10. (a)** Two reasons, each [1] for the reason and [1] for its explanation:
- The source code is not shared [1], so competitors and customers cannot easily copy or alter the
  company's work [1].
- The program runs fast [1], because no translation happens while it is used, which matters when
  processing large amounts of accounting data [1].
- Customers do not need an interpreter installed [1], so installation is simpler and support costs
  are lower [1].
Maximum 4.
**(b)** The executable runs only on the platform it was compiled for [1], so the company must compile,
test and distribute a separate version for each operating system or processor it supports, and a new
executable for every update [1].

**11.** Lexical analysis: removes spaces and comments [1] and splits the source code into tokens such
as keywords, identifiers and operators [1]. Syntax analysis: checks that the sequence of tokens
follows the grammar rules of the language [1] and reports syntax errors if it does not [1].

**12.** Award up to 6:
- Interpreted language: students can run code immediately after each change, giving quick feedback
  [1].
- Interpreted language: execution stops at the first error and shows the line, which helps beginners
  locate mistakes [1].
- Interpreted language limitation: errors in sections not reached may go unnoticed, and programs run
  more slowly (rarely a problem for beginners' small programs) [1].
- Compiled language: all syntax errors are reported before the program runs, encouraging careful
  checking [1].
- Compiled language limitation: the compile step slows the edit-run cycle, and long error lists can
  overwhelm beginners [1].
- Justified conclusion: for example, an interpreted language suits a first year because rapid feedback
  and clear error locations matter more than execution speed for small programs [1].
Maximum 6.

---

## Where marks are usually lost

- Saying an interpreter "creates an executable" or "compiles line by line".
- Describing bytecode as machine code.
- Giving features of compilers and interpreters without linking them to the scenario.
- Forgetting the cost side of JIT compilation.

## Frequently asked questions

**Is Translation examined at SL?**
No. The guide marks A1.4 Translation as HL only.

**Are these real IB questions?**
No. They are original practice questions written for revision.
