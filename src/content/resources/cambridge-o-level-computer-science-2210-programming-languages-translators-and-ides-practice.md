---
title: "Cambridge O Level Computer Science (2210): Programming languages, translators and IDEs -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Languages, Translators Questions"
resourceType: "practice-questions"
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
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 4.2: high-level and low-level languages, assemblers, compilers, interpreters and IDEs."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Programming languages, translators and IDEs study guide](/resources/cambridge-o-level-computer-science-2210-programming-languages-translators-and-ides/) and [Programming languages, translators and IDEs revision notes](/resources/cambridge-o-level-computer-science-2210-programming-languages-translators-and-ides-revision-notes/)

---

## Section A

**1.** State what is meant by machine code. **[1]**

**2.** Give **one** advantage of a high-level language compared with a low-level language. **[1]**

**3.** Give **one** advantage of a low-level language compared with a high-level language. **[1]**

**4.** State what is meant by a mnemonic in assembly language. **[1]**

**5.** Name the translator that converts assembly language into machine code. **[1]**

**6.** State what is meant by an executable file. **[1]**

**7.** Name **two** functions that are provided by an integrated development environment (IDE). **[2]**

## Section B

**8.** Explain what is meant by a high-level language and a low-level language. **[4]**

**9.** A company writes software for the control unit in a washing machine, which has very little memory. Another company writes a stock management program for a large retail business.

**(a)** Suggest, with a reason, the type of language that is more suitable for the washing machine software. **[2]**

**(b)** Suggest, with a reason, the type of language that is more suitable for the stock management program. **[2]**

**10.** Describe how a compiler translates a program. **[3]**

**11.** Describe how an interpreter translates a program. **[3]**

**12.** A program of 300 lines contains a mistake on line 85. Describe what happens when the program is translated using:

**(a)** a compiler **[2]**

**(b)** an interpreter **[2]**

**13.** A student is writing and testing a program. When it is finished, the program will be sold to customers.

**(a)** Explain why the student would use an interpreter while writing the program. **[2]**

**(b)** Explain why the student would use a compiler to translate the finished program. **[3]**

**14.** Compare a compiler and an interpreter. **[4]**

**15.** A student is using an IDE.

**(a)** Describe what the code editor is for. **[1]**

**(b)** The student starts typing the name of a variable and a list of suggested names appears. Name this IDE feature and explain how it helps the student. **[2]**

**(c)** Explain how error diagnostics help the student to correct a program. **[2]**

**(d)** Explain how prettyprint helps the student to understand the code. **[2]**

**16.** A student says: "Assembly language is the same as machine code, so no translator is needed." Explain why the student is wrong. **[2]**

---

## Answers

**1.** Binary instructions that the processor can run / execute directly [1].

**2.** Any one: easier to read and write; easier to debug; machine independent / portable [1].

**3.** Any one: can directly manipulate the hardware; programs can be faster / use less memory [1].

**4.** A short code (such as ADD or LOAD) that stands for a machine code instruction [1].

**5.** An assembler [1].

**6.** A file of machine code that can be run without the source code or the translator [1].

**7.** Any two: code editor; run-time environment; translators; error diagnostics; auto-completion; auto-correction; prettyprint [1 each].

**8.** A high-level language uses English-like words and structures, so it is easy for people to read and write [1], and it is machine independent, so it can run on different types of processor once translated [1]. A low-level language is close to the instructions that the processor uses / machine code or assembly language [1], so it is harder to read and write but allows direct control of the hardware [1].

**9. (a)** A low-level language [1], because it gives direct control of the hardware and can produce small, fast programs that fit in limited memory [1].
**(b)** A high-level language [1], because it is easier to write, read and debug a large program, and it is not tied to one type of processor [1].

**10.** The compiler translates the whole of the source code at once, before the program runs [1]. It produces an executable file / machine code [1]. If there are errors, it produces an error report for the whole code [1].

**11.** The interpreter translates one line of the code at a time [1] and executes it before it moves to the next line [1]. If it finds an error it stops the execution [1].

**12. (a)** The compiler reads the whole program and reports the error on line 85 (and any others) [1]. No executable file is produced until the mistake is corrected [1].
**(b)** The interpreter runs lines 1 to 84 normally [1]. It stops when it reaches the error on line 85 and reports it [1].

**13. (a)** The interpreter stops at the line with the error [1], so the student can see exactly where the problem is, correct it and run the program again without translating the whole program first [1].
**(b)** A compiler produces an executable file that can run without the source code or the translator [1]. The executable runs faster, because the code has already been translated [1]. Customers receive only the executable, so the student does not have to give away the source code [1].

**14.** Any four comparisons, one mark each: a compiler translates all the code at once, whereas an interpreter translates line by line; a compiler produces an executable file, whereas an interpreter does not; a compiler gives an error report for the whole code, whereas an interpreter stops at the first error; compiled programs run faster than interpreted programs; a compiler is used for the final program, whereas an interpreter is used mainly during development [1 each, maximum 4].

**15. (a)** It is where the program code is typed and edited [1].
**(b)** Auto-completion [1]. It saves typing and reduces spelling mistakes in names [1].
**(c)** They find errors and show where they are / explain what the problem is [1], so the student can go straight to the faulty line and fix it [1].
**(d)** It lays out the code with indentation and colours [1], so the structure, such as where a loop or a selection starts and ends, is easier to see [1].

**16.** Assembly language uses mnemonics, not binary [1]. It must be translated into machine code by an assembler before the processor can run it [1].

---

## Where marks are usually lost

- Question 2 and Question 3: writing "it is better" or "it is faster" with no feature. Name ease of reading, debugging, machine independence or hardware control.
- Question 8: describing only one of the two kinds of language.
- Question 9: choosing the right language but giving no reason that links to the scenario.
- Question 10 and Question 11: swapping the two translators, or saying the compiler works "line by line".
- Question 12: saying the compiler stops at line 85. It reports the errors for the whole code.
- Question 13: giving the advantage of the interpreter or the compiler without linking it to development or the finished product.
- Question 14: writing two separate lists. Use words such as "whereas" for each comparison.
- Question 15 (b): naming the feature but forgetting to say how it helps.

## Checking a comparison answer

Each mark in a comparison needs both items in the same sentence. Read each sentence and check that it names a compiler and an interpreter, and a feature that differs between them.
