---
title: "AQA A-Level Computer Science (7517): Classification of programming languages -- Practice Questions"
seoTitle: "AQA A-Level CS Programming Languages Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "classification-of-programming-languages-7517"
description: "Original AQA 7517 section 4.6.2 questions with answers: machine code, assembly language, imperative high-level languages and choosing between them."
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
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Classification of programming languages study guide](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages/) | [Classification of programming languages revision notes](/resources/aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes/)

---

## Section A

**1.** Name the two types of low-level programming language. **[2]**

**2.** State which type of program is executed directly by the processor without being translated. **[1]**

**3.** State what is meant by a mnemonic in assembly language. **[1]**

**4.** Name the program that translates assembly language into machine code. **[1]**

**5.** Give one example of an imperative high-level language. **[1]**

## Section B

**6.** Describe machine code. **[3]**

**7.** Describe assembly language, and explain how it differs from machine code. **[4]**

**8.** Consider this sequence of assembly language instructions.

```
LDR R0, 100
LDR R1, 101
ADD R2, R0, R1
STR R2, 102
HALT
```

**(a)** Describe what the program does if address 100 holds 7 and address 101 holds 5. **[2]**
**(b)** Write a high-level language statement that has the same effect. **[1]**
**(c)** Explain what this shows about the relationship between high-level and low-level languages. **[2]**

**9.** Explain what is meant by an imperative high-level language. **[3]**

**10.** Explain why assembly language is described as processor-specific. **[2]**

**11.** Give two advantages of programming in a high-level language rather than in assembly language. **[2]**

**12.** Give two advantages of programming in assembly language rather than in a high-level language. **[2]**

**13.** A company is developing:

**(i)** a payroll system used on many types of computer; and
**(ii)** firmware for a small sensor with a very small amount of memory.

For each, recommend a type of language and justify the choice. **[4]**

**14.** A student says that "high-level programs run faster because they are easier to understand". Evaluate this statement. **[3]**

**15.** Explain why a program written in machine code for one type of processor will not run on a different type of processor. **[2]**

**16.** The statement `total = total + price` is written in a high-level language. Describe the low-level operations that the processor must carry out to execute it. **[3]**

**17.** Describe what is meant by the development of programming languages from machine code to high-level languages, and give one reason why the development took place. **[3]**

---

## Answers

**1.** Machine code [1]; assembly language [1].

**2.** Machine code [1].

**3.** A short, memorable name used in place of a binary opcode, for example ADD or LDR [1].

**4.** An assembler [1].

**5.** Any one, for example Python, Java, C, C# or Visual Basic [1].

**6.** Instructions written in binary [1], each made of an opcode and operands [1], which the processor can execute directly (it is specific to a processor) [1].

**7.** Assembly language uses mnemonics (and labels) instead of binary opcodes [1]; there is usually one assembly instruction for each machine code instruction [1]; it is easier for people to read and write than machine code [1]; it must be translated by an assembler into machine code before it can be run, whereas machine code runs directly [1].

**8. (a)** It loads 7 and 5 into registers R0 and R1 [1], adds them and stores the result, 12, at address 102 [1].
**(b)** For example `c = a + b` (accept any statement that adds the two values and stores the result) [1].
**(c)** One high-level statement is translated into several low-level instructions [1]; the high-level language hides the details of registers and memory addresses from the programmer [1].

**9.** A program is a sequence of commands (statements) [1] that are carried out in order [1], changing the state of the program (the values of its variables) as they run [1].

**10.** Each type of processor has its own instruction set [1]; assembly language is a symbolic form of that instruction set, so a program written for one processor will not run on another and must be rewritten [1].

**11.** Any two from: faster to write; easier to read and debug; easier to maintain; portable between processors; the programmer does not need to know the processor details [2].

**12.** Any two from: direct control of the hardware; can produce smaller or faster code; can use special processor features; useful where memory or timing is limited [2].

**13.** (i) A high-level language [1], because the program is large and must run on different computers, and development time and maintenance matter [1]. (ii) Assembly language (or another low-level language) [1], because memory is very small so the program must be as small as possible and the programmer needs control of the hardware [1].

**14.** The statement is wrong [1]; high-level languages are faster to write and easier to read, but they must be translated, and the translated code may be slower or larger than carefully written low-level code [1]; the advantage of high-level languages is in development time and maintenance, not speed of execution [1].

**15.** Each type of processor has its own instruction set, with its own binary patterns for opcodes and operands [1]; the different processor would not recognise the instructions, or would interpret them as different operations [1].

**16.** The value of total is loaded from memory into a register [1]; the value of price is loaded (into another register) and added to it [1]; the result is stored back in the memory location for total [1].

**17.** Programmers first wrote binary machine code, then assembly language with mnemonics, and then high-level languages with statements that are translated into machine code [2]; the reason was to make programs easier and quicker to write, read and correct, and to make them independent of one type of processor [1].

---

## Where marks are usually lost

- Saying assembly language and machine code are the same.
- Calling assembly language portable.
- Not mentioning translation when describing high-level languages.
- Describing "imperative" without a sequence of statements or the changing state.
- Giving one-sided answers to comparison questions.
