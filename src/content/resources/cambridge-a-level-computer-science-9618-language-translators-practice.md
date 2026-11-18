---
title: "Cambridge A Level Computer Science (9618): Language Translators -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 5: System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "system-software"
    subtopic: "language-translators"
description: "Original questions with mark-scheme answers on assemblers, compilers, interpreters, bytecode and IDE debugging for Cambridge AS Computer Science 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Language Translators study guide](/resources/cambridge-a-level-computer-science-9618-language-translators/) · [Language Translators revision notes](/resources/cambridge-a-level-computer-science-9618-language-translators-revision-notes/) · [System Software practice questions](/resources/cambridge-a-level-computer-science-system-software-practice/)

These questions practise section 5.2 Language Translators of Cambridge International AS & A Level Computer Science 9618, which is assessed on Paper 1. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** State what is meant by **object code**. **[1]**

**2.** Explain why one statement in a high-level language often becomes several machine-code instructions, whereas one assembly language instruction usually becomes one. **[2]**

**3.** Identify the IDE feature described in each case.

**(a)** A misspelt keyword is underlined as soon as the line is typed. **[1]**

**(b)** After the programmer types the name of a procedure, the editor shows the list of parameters it expects. **[1]**

**(c)** The body of a long function is hidden so that only its header line is shown. **[1]**

**4.** State **two** things that must be present on a user's computer to run a program written for an interpreter. **[2]**

**5.** Explain why an executable compiled for one type of computer may not run on a computer with a different type of processor. **[2]**

**6.** Which statement about Java bytecode is correct?

A: It is the machine code of the computer on which it was compiled.

B: It is executed by a Java Virtual Machine.

C: It is the source code with the comments removed.

D: It can only be produced by an interpreter.

**[1]**

## Section B

**7.** A program has 4 statements that run once and 5 statements in the body of a loop that repeats 200 times. Use the model in which an interpreter translates every statement each time it is executed.

**(a)** Calculate the number of translations an interpreter makes if the program is run 3 times. Show your working. **[2]**

**(b)** State how many statements a compiler translates, and when. **[1]**

**(c)** Explain why the interpreted version takes longer to run. **[1]**

**8.** A company writes control software for machines that use several different types of processor. It distributes the software as Java bytecode.

**(a)** Describe how the program is translated and executed, from source code to running on a machine. **[3]**

**(b)** Give **two** benefits to the company of this approach. **[2]**

**(c)** Give **one** drawback of this approach. **[1]**

**9.** Describe **two** differences between an assembler and a compiler. **[4]**

**10.** This pseudocode should output how many values in `Temps[1:6]` are greater than 25. The array holds 27, 22, 31, 26, 19, 24.

```
FOR Index ← 1 TO 6
   Count ← 0
   IF Temps[Index] > 25 THEN
      Count ← Count + 1
   ENDIF
NEXT Index
OUTPUT Count
```

**(a)** State the value that is output, and the value that should be output. **[2]**

**(b)** Describe how a breakpoint, single stepping and a report window could be used to locate the error. **[3]**

**(c)** Explain why the IDE's dynamic syntax checks did not report this error. **[1]**

**(d)** Write the correction. **[1]**

**11.** A college teaches programming to beginners using an interpreted language. Explain **two** benefits and **two** drawbacks of using an interpreter in this situation. **[4]**

**12.** A software house has finished a stock-control program that it will sell to many shops. Justify the use of a compiler to produce the version that is sold. **[3]**

---

## Answers

**1.** The translated program produced by a compiler or assembler, in machine code (or close to it) [1].

**2.** A high-level statement can describe several operations at once, such as fetching values, calculating and storing a result, so it needs several machine instructions [1]. Assembly language is low-level: each mnemonic corresponds to one machine operation, so the translation is one-to-one [1].

**3. (a)** Dynamic syntax checks [1].

**(b)** Context-sensitive prompts [1].

**(c)** Collapsing a code block (expand and collapse code blocks) [1].

**4.** The source code [1]; the interpreter for that language [1].

**5.** Each processor family has its own instruction set [1]. The executable contains machine code for the original processor's instruction set, which the other processor does not recognise / which the other processor cannot execute [1].

**6.** **B** [1].

**7. (a)** Per run: 4 + (5 × 200) = 1,004 translations [1]. Three runs: 3 × 1,004 = **3,012** [1].

**(b)** 9 statements, translated once before the program is first run [1].

**(c)** The interpreter translates each statement in the loop again on every pass, as well as executing it, so most of the time is spent re-translating the same five statements [1].

**8. (a)** The source code is compiled into bytecode [1]. The bytecode is distributed to each machine [1]. A Java Virtual Machine on each machine interprets / executes the bytecode [1].

**(b)** Any two: only one version needs to be compiled, because the same bytecode runs on every processor type that has a JVM [1]; syntax errors are found at compilation, before the software is distributed [1]; the source code is not given to customers [1]; bytecode runs faster than interpreting the source code [1].

**(c)** One of: each machine needs a JVM installed [1]; execution is generally slower than native machine code compiled for that processor [1].

**9.** Any two differences, two marks each:

- An assembler translates assembly language (low-level) [1]; a compiler translates a high-level language [1].
- An assembler translates one instruction into one machine-code instruction [1]; a compiler may translate one statement into many machine-code instructions [1].
- An assembler replaces mnemonics with opcodes and labels with addresses [1]; a compiler must analyse the structure of whole statements, such as expressions and loops, to generate code [1].

**10. (a)** Output: **0** [1]. Should be: **3** (27, 31 and 26) [1].

**(b)** Set a breakpoint on the `IF` line / inside the loop [1]. Single step through the loop one statement at a time [1]. The report window shows `Count` returning to 0 at the start of each pass, so the reset is happening inside the loop [1].

**(c)** The code is syntactically correct; it is a logic error, which dynamic syntax checks cannot detect [1].

**(d)** Move `Count ← 0` to before the `FOR` line [1].

**11.** Benefits (any two): a beginner can run a program as soon as it is written, without a separate compilation step [1]; the program stops at the statement with the error, so the student can see where it is [1]; the student can correct the error and run again immediately [1]; part of an unfinished program can be tested [1].
Drawbacks (any two): only the first error reached is reported each time, so a program with several errors needs several runs [1]; errors in parts of the program that are not reached are not found [1]; the program runs more slowly than a compiled version [1]; the program cannot be run on a computer without the interpreter [1].

**12.** Any three, each linked to selling to shops: the executable runs without the compiler, so the shops do not need to install any translator [1]; the source code is not distributed, so competitors or customers cannot easily copy or alter the program [1]; the program has already been translated, so it runs faster each time the shops use it [1]; translation is done once by the software house rather than every time the program runs in every shop [1].

---

## Where marks are usually lost

- Answering "less memory" or "faster" with no reason. Say *why* compiled code is faster: translation has already happened.
- Writing that bytecode is machine code, or that the JVM compiles the source code.
- Giving an IDE feature from the wrong group, for example prettyprint when debugging was asked for.
- In debugging questions, naming the tools without saying what the report window would show.
- In "justify" questions, giving reasons that ignore the scenario.
