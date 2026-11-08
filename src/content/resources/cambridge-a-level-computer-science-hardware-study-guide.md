---
title: "Cambridge A Level Computer Science (9618): Hardware -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "hardware"
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "computers-and-their-components"
  - qualification: "a-level"
    topic: "hardware"
    subtopic: "logic-gates-and-logic-circuits"
description: "Computer components, memory and storage, input and output devices, logic gates, truth tables and logic circuits for Cambridge International AS and A Level Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check the exact bullet points in 3.1 (devices, ports, memory, virtual memory) and whether 3.2 stops at gates and circuits or also lists adders and flip-flops, and where processor registers sit (Topic 4)."
publishedDate: 2026-11-08
featured: false
---

Hardware is the physical side of a computer system: the processor, memory and storage inside the box, the devices that bring data in and take results out, and the logic gates from which all of it is built. This guide covers the two parts of Topic 3 in the AS content: the components of a computer and their roles, and logic gates and circuits, where you must draw circuits, write expressions and complete truth tables with complete accuracy.

## Where this fits in the syllabus

Topic 3 is part of the AS Level content of Cambridge 9618 and is examined in Paper 1, Theory Fundamentals, which is a written paper. It leads on to the processor detail in Topic 4 (registers, the fetch-execute cycle and assembly language), and the memory ideas here recur in Topic 5 on system software. Expect short recall questions on devices and a circuit or truth-table question.

## 3.1 Computers and their components

### The central processing unit and main memory

A **central processing unit (CPU)** or **microprocessor** carries out the instructions of a program. A computer needs **main memory** because the processor can only run instructions and use data that are held there. Main memory is **primary storage**; it is directly accessed by the processor, and is faster than secondary storage.

- **RAM (random access memory)** is volatile, so its contents are lost when power is removed, and it holds the programs and data in use. It is readable and writable. **DRAM** (dynamic RAM) stores each bit as a charge in a capacitor that leaks and must be refreshed constantly; it is cheaper and denser and is used for main memory. **SRAM** (static RAM) holds each bit in a flip-flop circuit with no need for refresh, so it is faster but more expensive and takes more space, and is used for **cache**.
- **ROM (read-only memory)** is non-volatile and holds data that is not normally changed, such as the **bootstrap** program that starts the computer and loads the operating system.

**Cache memory** is a small, fast store between the processor and main memory that holds copies of recently or frequently used data, so the processor waits less. **Virtual memory** uses part of secondary storage as an extension of RAM when RAM is full, so more programs can run than would fit, at the cost of slower access because the disk is much slower than RAM.

### Embedded systems

An **embedded system** is a computer built into a device to perform a dedicated function, such as a washing machine controller or a car engine management unit. Unlike a general-purpose computer, it runs fixed software held in ROM; it is typically small, low-power and cheap, but hard to upgrade.

### Secondary storage

**Secondary storage** is non-volatile, holds programs and data when power is off, and has a larger capacity than main memory.

| Type | How it works | Strengths | Weaknesses |
|---|---|---|---|
| Magnetic (hard disk) | Magnetised regions on spinning platters read by a moving head | High capacity, low cost per gigabyte | Moving parts, slower, can be damaged by knocks |
| Optical (CD, DVD, Blu-ray) | A laser reads pits and lands, or marks in a dye layer | Cheap, portable, suited to distributing media | Low capacity and slow compared with other types |
| Solid state (flash, SSD, USB drive) | Charge stored in transistor cells, with no moving parts | Fast, silent, robust, low power | Costs more per gigabyte, cells wear after many writes |

**Cloud storage** keeps data on remote servers that are reached over a network. It gives access from anywhere, easy sharing and backup managed by the provider, but it needs an internet connection, depends on the provider for security and availability, and may carry a continuing charge.

### Input, output and ports

**Input devices** convert real-world data into a form the computer can process. Examples are keyboards, a touch screen, a microphone, a barcode or QR code scanner and a camera. **Sensors** measure physical quantities such as temperature, pressure or light, and send analogue readings that an **analogue-to-digital converter (ADC)** turns into digital values. **Output devices** present results: a screen, speakers, and printers (laser, inkjet and 3D). An **actuator** turns a signal from the computer into physical action, such as a motor.

Devices connect through **ports**, for example USB, HDMI and VGA. A **buffer** is a temporary store that smooths the difference in speed between a fast processor and a slower device, as in a printer. An **interrupt** is a signal that makes the processor pause its current task to deal with an event such as a keypress.

## 3.2 Logic gates and logic circuits

Each gate takes one or two binary inputs and gives one output. The six you must know are:

| Gate | Output is 1 when |
|---|---|
| NOT | the input is 0 |
| AND | both inputs are 1 |
| OR | at least one input is 1 |
| NAND | not both inputs are 1 (NOT AND) |
| NOR | neither input is 1 (NOT OR) |
| XOR | the inputs are different |

A **truth table** lists the output for every combination of inputs. A circuit with n inputs has 2^n rows; list the inputs in binary counting order so no row is missed. A **logic expression** such as X = (A AND B) OR NOT C is a written form of a circuit. To draw a circuit from an expression, work from the innermost brackets out and give each gate the correct symbol. To write the expression from a circuit, label the output of each gate and build up.

NAND and NOR are **universal gates**, since any other gate can be built from NAND alone. Joining both inputs of a NAND gate makes a NOT. A NAND followed by a NAND with its inputs joined makes an AND.

### Worked example 1: truth table for a circuit

Complete the truth table for X = (A AND B) OR NOT C.

Work through the columns: first A AND B, then NOT C, then combine with OR.

| A | B | C | A AND B | NOT C | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

X is 0 only in rows 2, 4 and 6, where C = 1 and A AND B is false. Eight rows are listed, since 2^3 = 8.

### Worked example 2: designing from a description

A safe's alarm sounds (S = 1) if the door is open (D = 1) while the system is armed (A = 1), or if the panic button is pressed (P = 1).

1. Express the conditions: the first is D AND A, and the second is P. Either is enough.
2. Combine them: S = (D AND A) OR P.
3. The circuit has one AND gate whose output goes to an OR gate together with P.

Check against the description: with D = 1, A = 1, P = 0, S = 1; with D = 1, A = 0, P = 0, S = 0; with D = 0, A = 0, P = 1, S = 1. All three agree with the wording. A full table has S = 1 in 5 of its 8 rows: four with P = 1, plus D = 1, A = 1, P = 0.

## Common mistakes

- Confusing volatile (contents lost without power) with non-volatile.
- Saying that SRAM is cheaper than DRAM (it is the reverse), or that DRAM is used for cache.
- Treating virtual memory as a type of RAM chip. It is space on secondary storage.
- Describing a sensor as an output device.
- Omitting rows from truth tables, or listing the inputs in an irregular order.
- Writing XOR as "A or B". It excludes both being 1.

## Exam technique

For a device question, name the device, state what it does and give a feature that suits the scenario. For storage comparisons, make a point on each side: "SSD is faster because it has no moving parts, whereas a hard disk is cheaper per gigabyte". For logic questions, show the working columns in a truth table, as in worked example 1, because partly correct tables still earn marks. 

## Check your understanding

1. State why a computer needs RAM as well as secondary storage. *Answer: the processor can only run instructions and use data held in main memory, which is much faster than secondary storage.*
2. Give two differences between SRAM and DRAM. *Answer: SRAM needs no refresh and is faster but costs more and takes more space; DRAM needs constant refresh, is slower, cheaper and denser.*
3. What is stored in ROM in a typical computer? *Answer: the bootstrap program that starts the computer.*
4. Give one advantage and one disadvantage of cloud storage. *Answer: accessible from anywhere; it needs an internet connection.*
5. What does an actuator do? *Answer: it converts a signal from the computer into physical movement.*
6. Give the output of NOR for inputs 0 and 0. *Answer: 1.*
7. How can you make a NOT gate from a NAND gate? *Answer: join both inputs of the NAND gate together.*
8. In worked example 2, what is S when D = 0, A = 1 and P = 0? *Answer: 0, as D AND A is 0 and P is 0.*
