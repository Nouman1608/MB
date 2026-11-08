---
title: "OxfordAQA IGCSE Computer Science: Computer Systems — Practice Questions (9210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 4: Computer systems"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 4
syllabusTopics:
  - qualification: "igcse"
    topic: "computer-systems-9210"
description: "Original practice questions with answers on truth tables, logic circuits, the OS, the CPU, RAM and ROM, storage and cloud for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Computer systems study guide](/resources/oxfordaqa-igcse-computer-science-computer-systems-study-guide/) | [Computer systems revision notes](/resources/oxfordaqa-igcse-computer-science-computer-systems-revision-notes/)

These questions cover section 3.4 of the OxfordAQA International GCSE Computer Science (9210) specification,
which is assessed on Paper 2. Boolean expressions use the 9210 notation: NOT A is written "NOT A" here (a bar over A
in the exam), A · B for AND and A + B for OR.

---

## Section A: hardware, software and Boolean logic

**1.** Define **hardware** and **software** and explain the relationship between them. **[3]**

**2.** Complete the truth table for the expression Q = NOT A + B. **[2]**

| A | B | NOT A | Q |
|---|---|---|---|
| 0 | 0 | | |
| 0 | 1 | | |
| 1 | 0 | | |
| 1 | 1 | | |

**3.** A circuit has inputs A, B and C. A and B go into an OR gate. The output of the OR gate and C go into an AND
gate, whose output is Q.
**(a)** Write a Boolean expression for Q. **[1]**
**(b)** Complete a truth table for the circuit. **[3]**
**(c)** State the input combinations that give Q = 1. **[1]**

**4.** A greenhouse fan (F) must switch on when the temperature is high (T = 1) **and** the window is **not** open
(W = 0), **or** when the manual switch is pressed (M = 1).
**(a)** Write a Boolean expression for F. **[2]**
**(b)** Describe the logic circuit that implements it, using only NOT, AND and OR gates. **[2]**

## Section B: software

**5.** Explain the difference between system software and application software, giving one example of each. **[4]**

**6.** State four things that an operating system manages. **[4]**

**7.** Describe the purpose of two different utility programs. **[4]**

## Section C: systems architecture

**8.** Explain what is meant by the **Von Neumann architecture**. **[2]**

**9.** Describe the role of the ALU, the control unit and the clock. **[3]**

**10.** Describe the three stages of the fetch-execute cycle. **[3]**

**11.** A computer's CPU is upgraded from 2.4 GHz to 3.6 GHz, and its cache is increased. Explain how each change
affects performance. **[4]**

**12.** Explain why adding more processor cores may not make every program run faster. **[2]**

## Section D: memory and storage

**13.** **(a)** Explain the terms **volatile** and **non-volatile**. **[2]**
**(b)** State two differences between RAM and ROM. **[2]**
**(c)** Explain why a computer needs secondary storage. **[2]**

**14.** Describe how data is stored and read on (a) magnetic storage (b) optical storage. **[4]**

**15.** A field researcher needs storage for a laptop that is carried outdoors every day. Recommend solid state,
magnetic or optical storage and justify your choice. **[3]**

**16.** A school is considering moving students' work from its own file server to cloud storage. Discuss two
advantages and two disadvantages. **[4]**

**17.** Explain what an embedded system is and give one example of an embedded system and one of a non-embedded
system. **[3]**

---

## Answers

**1.** Hardware: the physical components of a computer system [1]. Software: the programs that run on the hardware
[1]. Hardware needs software to tell it what to do, and software needs hardware to run on [1].

**2.**

| A | B | NOT A | Q |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 |

NOT A column [1]; Q column [1].

**3. (a)** Q = (A + B) · C [1].
**(b)**

| A | B | C | A + B | Q |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

All eight input rows [1]; A + B column [1]; Q column [1].
**(c)** (A, B, C) = (0, 1, 1), (1, 0, 1) and (1, 1, 1) -- C must be 1 and at least one of A, B must be 1 [1].

**4. (a)** F = (T · NOT W) + M [2] (1 for T · NOT W, 1 for + M).
**(b)** W goes through a NOT gate; its output and T go into an AND gate [1]; the AND output and M go into an OR gate,
whose output is F [1].

**5.** System software manages the computer system's resources and acts as a platform for running application
software [1], e.g. an operating system [1]. Application software performs end-user tasks [1], e.g. a spreadsheet [1].

**6.** Any four: the processor(s); memory; input/output devices; applications; security [4].

**7.** Any two, described [2 each]: **antivirus** -- scans files and memory for malware and removes or quarantines it;
**backup** -- copies files so they can be restored if lost; **disk defragmenter** -- rearranges files on a hard disk
so each is stored in one place, speeding up access; **compression** -- reduces file sizes to save space.

**8.** Program instructions and data are stored together in the same main memory [1], and the CPU fetches the
instructions from memory and executes them one after another [1].

**9.** ALU: performs arithmetic and logical operations [1]. Control unit: decodes instructions and sends control
signals to coordinate the other components [1]. Clock: sends regular pulses to keep the components synchronised [1].

**10.** Fetch: the next instruction is fetched to the CPU from main memory [1]. Decode: the instruction is decoded to
work out what it is [1]. Execute: the instruction is carried out, which may involve reading from or writing to main
memory [1].

**11.** Clock speed: 3.6 GHz gives 3.6 billion cycles per second instead of 2.4 billion [1], so more instructions can
be fetched and executed each second [1]. Cache: more frequently used instructions and data can be kept in very fast
memory close to the CPU [1], so it waits less often for slower main memory [1].

**12.** Extra cores only help if the program can be split into tasks that run **at the same time** [1]; some tasks
must be done in order, so only one core can work on them [1].

**13. (a)** Volatile memory loses its contents when the power is switched off [1]; non-volatile memory keeps its
contents without power [1].
**(b)** Any two: RAM is volatile, ROM is non-volatile; RAM can be read and written, ROM is read-only; RAM holds the
programs and data in use, ROM holds the start-up instructions [2].
**(c)** RAM is volatile, so anything not saved to non-volatile storage is lost when the power is off [1]; main memory
is also too small to hold all programs and files permanently [1].

**14. (a)** A read/write head magnetises tiny areas of a spinning platter in one of two directions to represent 0s
and 1s [1]; when reading, the head detects the direction of magnetisation [1].
**(b)** A laser reads the disc as it spins [1]; pits and lands on the surface reflect the light differently, and the
changes are interpreted as binary data [1].

**15.** Solid state [1]: it has no moving parts, so it is not damaged by being knocked or dropped outdoors [1]; it is
also fast, light and uses little power, which helps battery life [1].

**16.** Advantages (any two): files can be accessed from any device with an Internet connection, including at home;
no need to buy and maintain a local server; the provider handles backups; easy sharing between students and teachers
[2]. Disadvantages (any two): no access without an Internet connection; ongoing subscription costs; the school has
less control over where data is stored and its security, which matters for students' personal data [2].

**17.** An embedded system is a computer built into a larger device to perform a dedicated function [1], unlike a
general-purpose computer that runs many programs [1]. Example: a washing machine controller (embedded) and a desktop
PC (non-embedded) [1].

---

## Where marks are usually lost

- Truth tables with missing or repeated rows -- list inputs in binary order (000 to 111).
- Writing the Boolean expression with brackets in the wrong place, which changes the logic.
- Explaining clock speed as "how fast the computer is" without saying cycles or instructions per second.
- Recommending a storage device without referring to the user's situation.

## Frequently asked questions

**Do I need to know NAND, NOR or XOR for 9210?**
No. The specification states that students do not need to know or use NAND, NOR and XOR gates. Circuits use only NOT,
AND and OR, with up to three inputs.

**What counts as main memory in 9210?**
Any memory directly accessible by the CPU, apart from cache and registers. Secondary storage is non-volatile and not
directly accessible by the CPU.
