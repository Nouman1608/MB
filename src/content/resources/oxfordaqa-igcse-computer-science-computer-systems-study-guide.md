---
title: "OxfordAQA IGCSE Computer Science (9210): Computer systems -- Study Guide"
resourceType: "study-guides"
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
description: "The CPU and fetch-execute cycle, memory and storage, system and application software, translators and logic gates for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

A computer system is hardware and software working together to take in data, process it, store it and output the results. This topic explains what the main components are, how the processor runs a program, how software controls the hardware, and how logic gates make decisions at the lowest level. In OxfordAQA International GCSE Computer Science (9210) the questions mix definitions with explanations of "why", so you need to be able to connect a feature to its effect on performance or use.

## Where this fits in the specification

Computer systems is Topic 4 of the eight topics in 9210. It follows data representation, which explains the binary data that this topic's hardware stores and processes, and comes before networks and cyber security, which depend on understanding what a computer is and what software runs on it. The Boolean logic here is also the same logic you use in `IF` conditions when programming.

## Hardware and the central processing unit

**Hardware** is the physical parts of a computer. The **central processing unit (CPU)** carries out the instructions of a program. Its main parts are:

- the **arithmetic logic unit (ALU)**, which does calculations and logical comparisons;
- the **control unit**, which fetches instructions, decodes them and directs the other parts;
- **registers**, which are very small, very fast storage locations inside the CPU;
- **cache**, a small amount of fast memory that holds data and instructions that are used often, so that the CPU does not have to wait for the slower main memory.

In the **von Neumann architecture** the program instructions and the data are both stored in main memory, and the processor fetches both from there. Because they share the same memory, the computer can run different programs without being rewired.

### The fetch-decode-execute cycle

The CPU repeats this cycle for every instruction. In the **fetch** stage it copies the next instruction from main memory (the address is held in the program counter) into the CPU. In the **decode** stage the control unit works out what the instruction means and what data it needs. In the **execute** stage the instruction is carried out, for example by the ALU adding two numbers, and the result is stored. The program counter then moves on to the next instruction. A jump instruction changes the program counter to a different address, which is how loops and selection work.

### What affects CPU performance

- **Clock speed**: the number of cycles per second, measured in hertz. A higher clock speed means more instructions per second.
- **Number of cores**: each core can run instructions at the same time, so a multi-core processor can do several tasks at once. The benefit is limited if a program cannot be split into parts that run at the same time.
- **Cache size**: more cache means more frequently used data is close to the CPU, so there are fewer waits for main memory.

Be careful: more cores do not always mean proportionally faster, because it depends on the software.

## Memory and storage

**Primary memory** is directly accessed by the CPU. **RAM** (random access memory) is volatile, which means it loses its contents when the power is switched off. It holds the programs and data currently in use. **ROM** (read-only memory) is non-volatile and holds the start-up instructions (the bootstrap) that the computer runs when switched on.

**Secondary storage** keeps data permanently, even when the power is off, and normally has a much larger capacity than RAM. Three types are common.

| Type | How it works | Typical features |
|---|---|---|
| Magnetic (hard disk) | Spinning platters with a moving read/write head | Large capacity, low cost per gigabyte, has moving parts so can be damaged |
| Solid state (SSD, flash) | Electronic memory with no moving parts | Fast, silent, durable, more expensive per gigabyte |
| Optical (CD, DVD, Blu-ray) | A laser reads pits and lands on a disc | Cheap and portable, but low capacity and slow |

When asked to choose storage for a scenario, give the feature and tie it to the need: a phone uses solid state because it is small, light, durable and uses little power.

An **embedded system** is a computer built into a larger device to do one dedicated task, such as the controller in a washing machine, a car's engine management or a microwave. It usually has fixed software stored in ROM.

## Software

**System software** manages the computer and its hardware. The **operating system (OS)** is the main example. Its functions include managing memory, managing files, managing the processor (so several programs can run), handling input and output through device drivers, providing a user interface, and managing user accounts and security. **Utility software** performs maintenance tasks such as anti-malware, backup, disk defragmentation and file compression. **Application software** lets the user do a task for themselves, such as word processing, spreadsheets or games.

Programmers write in high-level languages, but the processor only runs machine code, so **translators** are used. A **compiler** translates the whole program into machine code before it runs, producing a standalone executable file, and reports all errors afterwards. An **interpreter** translates and runs one statement at a time, stops at the first error, and needs to be present each time the program runs. An **assembler** translates assembly language into machine code. Compiled programs generally run faster; interpreted programs are easier to test and debug during development.

## Boolean logic

The syllabus uses three gates. **NOT** inverts its single input. **AND** gives 1 only when both inputs are 1. **OR** gives 1 when at least one input is 1. A truth table lists every combination of inputs; with n inputs there are 2^n rows. A logic circuit is read from the inputs to the output one gate at a time, with a column in the table for each gate's output.

## Worked example 1: a truth table

Complete the truth table for Q = (A OR B) AND NOT C.

| A | B | C | A OR B | NOT C | Q |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

Q is 1 in three rows: the ones where at least one of A and B is 1 and C is 0. Q = 0 whenever C = 1, because NOT C is then 0 and the AND gate cannot output 1.

## Worked example 2: storage capacity

A photographer's memory card has a capacity of 16 GB. Each photograph is about 2.5 MB. How many photographs fit on the card, using 1 GB = 1,000 MB?

16 GB = 16 x 1,000 = 16,000 MB. Number of photographs = 16,000 / 2.5 = 6,400. About 6,400 photographs fit. In practice a little less will fit because some of the capacity is used by the file system. If the question uses 1 GB = 1,024 MB the answer is 16 x 1,024 / 2.5 = 6,553.6, so 6,553 whole photographs; always state the convention you use.

## Worked example 3: tracing the cycle

A program is stored at consecutive addresses. The first instruction is "load the value 7 into a register" and the second is "add 5 to the register". Fetch 1: the control unit copies instruction 1 from memory and the program counter moves to the second address. Decode 1: it is a load instruction. Execute 1: the register now holds 7. Fetch 2, decode 2 and execute 2 follow, and the ALU adds 5, so the register holds 12. The program counter then points to the third instruction.

## Common mistakes

- Saying RAM is permanent, or that ROM can be freely written to.
- Confusing a compiler with an interpreter: the compiler translates everything first; the interpreter works statement by statement.
- Giving "it is faster" as the only reason for solid state. Add durability, silence and low power use.
- Mixing up memory (RAM, ROM) and storage (hard disk, SSD).
- Missing the NOT gate column in a truth table and then misreading a row.

## Exam technique

For **state** or **name** questions, one precise term earns the mark. For **describe**, give the stages in order. For **explain**, include the reason and the effect: "a larger cache means more frequently used instructions are held close to the CPU, so the CPU waits less for main memory and performance improves". For storage-choice questions, always link a feature to the situation. In logic questions, show the working columns even if the question does not demand them.

## Check your understanding

1. What does the control unit do? *It fetches and decodes instructions and directs the other parts of the CPU.*
2. Why is RAM described as volatile? *It loses its contents when the power is turned off.*
3. State one use of ROM in a computer. *It stores the bootstrap or start-up instructions.*
4. Give two advantages of solid state storage over a hard disk. *No moving parts so more durable; faster access; silent; lower power.*
5. Explain why a compiled program usually runs faster than an interpreted one. *It has already been translated to machine code, so no translation is needed while it runs.*
6. Name two functions of an operating system. *Memory management and file management (or any other from the list).*
7. Give the output of the circuit in Worked example 1 when A = 0, B = 0, C = 0. *0.*
8. How many 4 MB files fit on a 2 GB card, using 1 GB = 1,000 MB? *2,000 / 4 = 500.*

## Frequently asked questions

**What are the main parts of a CPU?**
The CPU contains the arithmetic logic unit, which does calculations and logical comparisons, the control unit, which fetches and decodes instructions and directs the other parts, registers, and cache. This is covered in Topic 4 of OxfordAQA International GCSE Computer Science 9210.

**What factors affect CPU performance?**
Clock speed, the number of cores and the cache size all affect performance. More cores do not always mean proportionally faster processing, because it depends on the software.

**What is the difference between RAM and ROM?**
RAM is volatile, so it loses its contents when the power is turned off, while ROM is non-volatile and holds the start-up instructions, known as the bootstrap. Saying RAM is permanent, or that ROM can be freely written to, is a common mistake.

**What is the difference between a compiler and an interpreter?**
A compiler translates the whole program before it runs, while an interpreter translates and runs it statement by statement. A compiled program usually runs faster because it has already been translated.

**Which logic gates are in the OxfordAQA 9210 syllabus?**
The syllabus uses three gates: NOT, AND and OR. NOT inverts its single input, and AND gives 1 only when both inputs are 1.
