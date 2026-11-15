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
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-computer-systems-study-guide--01-cpu-parts.webp" width="900" height="700" alt="Block diagram. A large box labelled CPU holds four smaller boxes: the control unit (fetches, decodes and directs other parts), the ALU (calculates and compares values), registers (tiny, very fast storage in the CPU) and cache (fast memory for frequently used data). Short arrows show the control unit directing the ALU and the registers. To the right is a main memory box holding a program block and a data block, with an arrow labelled fetch from memory to the CPU and an arrow labelled store from the CPU to memory. A note says that in the von Neumann architecture program and data share one main memory." loading="lazy">
  <figcaption>The CPU holds the control unit, ALU, registers and cache, and fetches both program and data from one main memory.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-computer-systems-study-guide--02-cpu-performance.webp" width="900" height="960" alt="Three panels. Clock speed: two square-wave pulse trains in the same time, 3 cycles for the slower clock and 6 cycles for the faster clock, labelled more cycles per second. Number of cores: one core running task 1 compared with four cores running tasks 1 to 4 at the same time, with a warning that the gain is limited if the program cannot be split. Cache size: the CPU connects by a short route to cache and by a slower dashed route to main memory, and more cache means fewer waits for main memory." loading="lazy">
  <figcaption>Higher clock speed, more cores and more cache can each speed up a CPU, but extra cores only help if the program can be split.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-computer-systems-study-guide--04-ram-rom-storage.webp" width="900" height="950" alt="Two rows and three columns. In the power-on row, RAM (holds programs and data in use), ROM (holds start-up instructions, the bootstrap) and secondary storage (holds files long term) all contain data. In the power-off row, the RAM chip is empty with a cross and is labelled volatile, contents lost, while ROM and secondary storage still contain their data and are labelled non-volatile, contents kept. A note says embedded systems keep fixed software in ROM." loading="lazy">
  <figcaption>RAM loses its contents when the power is switched off; ROM and secondary storage keep theirs.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-computer-systems-study-guide--05-storage-types.webp" width="900" height="1048" alt="Three rows, one per secondary storage type. Magnetic hard disk: spinning platters with a moving read/write head; large capacity and low cost per gigabyte, but moving parts can be damaged. Solid state (SSD, flash): electronic memory with no moving parts; fast, silent and durable but more expensive per gigabyte. Optical (CD, DVD, Blu-ray): a laser reads pits and lands; cheap and portable but low capacity and slow. A note says a phone uses solid state because it is small, light, durable and uses little power." loading="lazy">
  <figcaption>Each storage type has strengths and weaknesses; link the feature to the need.</figcaption>
</figure>


## Software

**System software** manages the computer and its hardware. The **operating system (OS)** is the main example. Its functions include managing memory, managing files, managing the processor (so several programs can run), handling input and output through device drivers, providing a user interface, and managing user accounts and security. **Utility software** performs maintenance tasks such as anti-malware, backup, disk defragmentation and file compression. **Application software** lets the user do a task for themselves, such as word processing, spreadsheets or games.

Programmers write in high-level languages, but the processor only runs machine code, so **translators** are used. A **compiler** translates the whole program into machine code before it runs, producing a standalone executable file, and reports all errors afterwards. An **interpreter** translates and runs one statement at a time, stops at the first error, and needs to be present each time the program runs. An **assembler** translates assembly language into machine code. Compiled programs generally run faster; interpreted programs are easier to test and debug during development.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-computer-systems-study-guide--06-compiler-interpreter.webp" width="900" height="980" alt="Two lanes show how a four-line program is translated. Compiler: the whole program goes into the compiler, which produces a machine code file that is then run, fast; errors are reported afterwards, all of them. Interpreter: it translates and runs one statement at a time; line 1 and line 2 run, line 3 produces an error, and line 4 never runs because the interpreter stops at the first error; the interpreter is needed every time the program runs. A note says an assembler translates assembly language into machine code." loading="lazy">
  <figcaption>A compiler translates the whole program first; an interpreter translates and runs one statement at a time and stops at the first error.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-computer-systems-study-guide--07-logic-circuit-truth-table.webp" width="900" height="1014" alt="A logic circuit and its computed truth table for Q = (A OR B) AND NOT C. Inputs A and B feed an OR gate; input C feeds a NOT gate; the outputs of the OR gate and the NOT gate feed an AND gate whose output is Q. The truth table has eight rows with working columns A OR B and NOT C. Q is 1 in three rows: 0 1 0, 1 0 0 and 1 1 0. Q is 0 whenever C is 1." loading="lazy">
  <figcaption>The circuit for Q = (A OR B) AND NOT C with its eight-row truth table.</figcaption>
</figure>


## Worked example 2: storage capacity

A photographer's memory card has a capacity of 16 GB. Each photograph is about 2.5 MB. How many photographs fit on the card, using 1 GB = 1,000 MB?

16 GB = 16 x 1,000 = 16,000 MB. Number of photographs = 16,000 / 2.5 = 6,400. About 6,400 photographs fit. In practice a little less will fit because some of the capacity is used by the file system. If the question uses 1 GB = 1,024 MB the answer is 16 x 1,024 / 2.5 = 6,553.6, so 6,553 whole photographs; always state the convention you use.

## Worked example 3: tracing the cycle

A program is stored at consecutive addresses. The first instruction is "load the value 7 into a register" and the second is "add 5 to the register". Fetch 1: the control unit copies instruction 1 from memory and the program counter moves to the second address. Decode 1: it is a load instruction. Execute 1: the register now holds 7. Fetch 2, decode 2 and execute 2 follow, and the ALU adds 5, so the register holds 12. The program counter then points to the third instruction.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-computer-systems-study-guide--03-fetch-decode-execute-trace.webp" width="900" height="964" alt="A six-row trace of two instructions stored in consecutive memory cells: LOAD 7 at address 1 and ADD 5 at address 2, followed by the next instruction at address 3. Fetch 1 copies the first instruction and the program counter moves to 2. Decode 1 identifies a load. Execute 1 puts 7 in the register. Fetch 2 moves the program counter to 3, decode 2 identifies an add, and execute 2 adds 5 using the ALU so the register holds 12. The program counter then points at the third instruction. Address numbers are illustrative." loading="lazy">
  <figcaption>Two instructions traced through fetch, decode and execute, with the program counter and register at each step.</figcaption>
</figure>


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
