---
title: "OxfordAQA IGCSE Computer Science (9210): Classification of programming languages and translators -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.13
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "classification-of-programming-languages-and-translators-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on machine code, assembly, high-level languages and the three translators."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Classification of programming languages and translators study guide](/resources/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators/) | [Classification of programming languages and translators revision notes](/resources/oxfordaqa-igcse-computer-science-9210-classification-of-programming-languages-and-translators-revision-notes/)

These questions cover section 3.2.13 Classification of programming languages and translators of the OxfordAQA
International GCSE Computer Science (9210) specification.

---

## Section A

**1.** State **two** examples of low-level languages. **[2]**

**2.** State what is meant by a processor's **instruction set**. **[1]**

**3.** State the form in which machine code is expressed. **[1]**

**4.** State which translator does **not** generate machine code directly. **[1]**

**5.** Explain what is meant by saying that a high-level language is **portable**. **[2]**

## Section B

**6.** Explain **two** differences between machine code and assembly language. **[4]**

**7.** A programmer writes the high-level statement `area ← length * width`.

**(a)** Explain why this single statement may become several machine code instructions. **[2]**
**(b)** Explain why the statement must be translated before it can be executed. **[1]**

**8.** A company makes a smart thermostat with a small, low-power processor and very little memory. Part of its
software controls the temperature sensor and the display directly.

**(a)** Explain why the programmers might write this part in assembly language. **[2]**
**(b)** Name the translator they would use for it. **[1]**
**(c)** The company's phone app for the thermostat is written in a high-level language. Give **two** reasons
for this choice. **[2]**

**9.** Describe how a compiler and an interpreter each translate a high-level program. **[4]**

**10.** A school coding club uses an interpreter for its beginners' programs. Explain **two** reasons why an
interpreter is suitable for this situation. **[4]**

**11.** A software company sells a photo-editing program to the public. Discuss whether it should distribute the
program as compiled machine code or as source code to be run with an interpreter. **[4]**

**12.** Complete the table by writing the translator described by each statement:

| Statement | Translator |
|---|---|
| Converts each line into exactly one machine code instruction | |
| Produces an executable file from a whole high-level program | |
| Must be present every time the program is run | |

**[3]**

---

## Answers

**1.** Machine code [1]; assembly language [1].

**2.** The set of machine code instructions that a particular type (or family) of processor can execute [1].

**3.** Binary [1].

**4.** An interpreter [1].

**5.** The same source code can be used on different types of processor [1], because it is translated for each
processor rather than written for one processor's instruction set [1].

**6.** Any two, each with an explanation, for example:
- Machine code is written in binary [1], whereas assembly language uses mnemonics that are easier for people to
  read and write [1].
- Machine code can be executed directly by the processor [1], whereas assembly language must first be translated
  by an assembler [1].

Also accept, with the same two-mark split: assembly language can use names for memory locations, while machine
code uses binary addresses.

**7.** **(a)** A high-level statement can do several things at once, for example fetching two values, multiplying
them and storing the result [1]; each of these needs its own machine code instruction, so one high-level
statement corresponds to many [1].
**(b)** A processor can only execute machine code, so all high-level code must be translated into machine code
[1].

**8.** **(a)** Assembly language gives direct control of specific hardware components such as the sensor and
display [1], and can produce small, efficient code that suits the limited processor and memory [1].
**(b)** An assembler [1].
**(c)** Any two: it is quicker and easier to write and maintain [1]; it is portable, so the app can be translated
for different phones' processors [1]; it is easier to debug.

**9.** A compiler translates the whole program into machine code before it runs [1], producing an executable file
that can be run again without translating it [1]. An interpreter translates and carries out the program one
statement at a time while it runs [1], calling its own machine code subroutines rather than producing machine
code, so it translates again each time the program is run [1].

**10.** Any two, each with an explanation:
- Programs can be run straight away after each change, with no wait for the whole program to be translated [1],
  so beginners can experiment and see results quickly [1].
- Execution stops at the statement containing an error [1], which shows beginners exactly where the problem is
  [1].

Also accept, with the same two-mark split: parts of a program can be tested before the whole program is complete.

**11.** Compiled code: runs without the customer needing a translator installed [1]; usually runs faster, which
matters for processing large photos [1]; customers do not receive the source code, so the company's work is
harder to copy or alter [1]. Conclusion: the company should distribute compiled machine code, accepting that it
must compile a separate version for each type of processor it supports [1].

**12.** Assembler [1]; compiler [1]; interpreter [1].

---

## Where marks are usually lost

- Saying an interpreter produces an executable or machine code file.
- Describing a compiler as working "line by line".
- Answering scenario questions with general advantages that do not mention the scenario.
- Calling assembly language high-level because it uses words.
- Listing "faster" as an advantage of high-level languages.
