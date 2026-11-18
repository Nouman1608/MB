---
title: "Cambridge IGCSE Computer Science (0478): Computer architecture"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3.1
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
    subtopic: "computer-architecture-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 3.1: the CPU, Von Neumann registers and buses, the FDE cycle, performance and embedded systems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.1 of the Cambridge IGCSE Computer Science 0478 syllabus looks inside the processor. It asks you to understand the role of the central processing unit (CPU) and what a microprocessor is; the purpose of the units, registers and buses in a computer with a **Von Neumann architecture**; the **fetch–decode–execute (FDE) cycle**, including the role of each component; how **cores, cache and clock** affect performance; the purpose of an **instruction set**; and the purpose and characteristics of **embedded systems**.

The [Hardware study guide](/resources/igcse-computer-science-hardware/) lists these components. This guide shows them working together, traces three instructions register by register, and explains what the examiner rewards in each type of question.

## The CPU and the microprocessor

The syllabus describes the CPU as the part that "processes instructions and data that are input into the computer so that the result can be output". Every program, from a spreadsheet to a game, reaches the CPU as a sequence of machine-code instructions.

A **microprocessor** is "a type of integrated circuit on a single chip". In other words, the whole CPU is manufactured as one chip. That is why one small component can be the processor in a laptop, a phone or a washing machine.

## Von Neumann architecture

In a Von Neumann computer, **program instructions and data are stored together in the same main memory (RAM)**, and the CPU fetches both along the same buses, one item at a time. This is why the processor must keep careful track of which address it is reading from, and why it uses dedicated registers for addresses and for data.

### The two units

- **Control unit (CU)**: sends control signals to manage the FDE cycle, decodes each instruction and coordinates the movement of data between components.
- **Arithmetic logic unit (ALU)**: carries out calculations (such as addition and subtraction) and logical operations (such as comparisons, AND, OR).

### The five registers

A register is a very small, very fast store inside the CPU.

| Register | What it holds |
|---|---|
| Program counter (PC) | The address of the next instruction to be fetched |
| Memory address register (MAR) | The address in memory that is about to be read from or written to |
| Memory data register (MDR) | The data or instruction just read from memory, or about to be written to it |
| Current instruction register (CIR) | The instruction currently being decoded and executed |
| Accumulator (ACC) | The result of calculations carried out by the ALU |

The MAR only ever holds **addresses**; the MDR holds **data or instructions**. Mixing them up is the most frequent error in this subtopic.

### The three buses

A bus is a set of parallel wires that carries signals between components.

- **Address bus**: carries an address from the MAR to memory. It is **one-directional**, from CPU to memory, because only the CPU chooses addresses.
- **Data bus**: carries data and instructions between the CPU and memory. It is **two-directional**, because data is both read and written.
- **Control bus**: carries control signals from the control unit, such as "read from memory", "write to memory" and the clock signal, and also signals back to the CPU. It is two-directional.

## The fetch–decode–execute cycle

### Fetch

1. The address in the **PC** is copied into the **MAR**.
2. The address is sent along the **address bus** to RAM, and the **control bus** carries a read signal.
3. The instruction stored at that address is sent along the **data bus** into the **MDR**.
4. The instruction is copied from the MDR into the **CIR**.
5. The **PC is incremented** by 1 so that it holds the address of the next instruction.

### Decode

6. The **control unit** decodes the instruction in the CIR to work out what operation is needed and which data it needs.

### Execute

7. The instruction is carried out. If data is needed from memory, its address goes into the MAR and the data arrives in the MDR. Calculations are done by the **ALU**, and results are placed in the **ACC**. The cycle then repeats.

## Worked example 1: tracing three instructions

A short program is stored in RAM starting at address 20. Memory address 50 holds the value 7 and address 51 holds 5.

| Address | Contents |
|---|---|
| 20 | LOAD 50 (copy the value at address 50 into the ACC) |
| 21 | ADD 51 (add the value at address 51 to the ACC) |
| 22 | STORE 52 (copy the ACC into address 52) |

The PC starts at 20. Register contents at the end of each complete cycle:

| After instruction | PC | MAR | MDR | CIR | ACC |
|---|---|---|---|---|---|
| LOAD 50 | 21 | 50 | 7 | LOAD 50 | 7 |
| ADD 51 | 22 | 51 | 5 | ADD 51 | 12 |
| STORE 52 | 23 | 52 | 12 | STORE 52 | 12 |

Points to notice:

- During each fetch the MAR briefly holds the instruction's address (20, 21, 22), but by the end of execution it holds the **data** address used by that instruction.
- The PC is always one ahead of the instruction being executed, because it is incremented during fetch.
- For ADD, the ALU adds 7 and 5; the result 12 replaces the old value in the ACC.
- For STORE, the value 12 is copied to the MDR, the address 52 goes to the MAR, and the control bus carries a **write** signal. Address 52 now holds 12.

## Cores, cache and clock

The syllabus states that "the number of cores, size of the cache and speed of the clock can affect the performance of a CPU". You need to explain **how**.

- **Core**: one complete processing unit that can run its own FDE cycle. A quad-core CPU can process four instructions at the same time. More cores can improve performance, but only if the software can divide its work between cores; some tasks must be done one step after another and gain little.
- **Cache**: a small amount of very fast memory inside or very close to the CPU. It holds frequently used instructions and data, so the CPU can fetch them without waiting for slower RAM. A larger cache means more items are found there, so fewer slow trips to RAM.
- **Clock**: sends regular pulses that keep the components synchronised. Clock speed is measured in hertz; a 3.2 GHz clock gives 3.2 billion cycles per second. A faster clock means more FDE cycles per second, so more instructions are processed in the same time.

A strong answer gives the mechanism, not just "it is faster": "a larger cache stores more frequently used instructions, so the CPU spends less time fetching from RAM".

## Instruction set

An **instruction set** is "a list of all the commands that can be processed by a CPU, and the commands are machine code". Each instruction, such as load, add, compare or jump, has its own binary code. The CPU can only execute instructions that are in its own instruction set, which is why machine code written for one family of processors will not run on a processor with a different instruction set.

## Embedded systems

An **embedded system** is a computer system built into a larger device to perform a **dedicated function**. The syllabus gives examples in domestic appliances, cars, security systems, lighting systems and vending machines. It contrasts this with a **general-purpose computer**, such as a PC or laptop, which can perform many different functions.

Characteristics to learn:

- performs one task or a small set of related tasks;
- usually controlled by a microprocessor (or microcontroller) inside the device;
- the program is fixed and is rarely changed by the user;
- small, uses little power and is cheap to mass-produce;
- often has a simple interface, such as buttons or a small display.

**Worked example 2.** A microwave oven is an embedded system because its microprocessor only ever runs the program that controls the timer, power level and turntable. A laptop is general purpose because the user can install and run any number of different programs.

## Common mistakes

- Writing that the **MAR holds data** or the **MDR holds addresses**.
- Saying the PC "holds the current instruction". It holds the **address of the next** instruction.
- Forgetting to increment the PC in a fetch description.
- Saying the address bus is two-directional.
- Answering a performance question with "it makes the computer faster" and no mechanism.
- Describing an embedded system as "a small computer" without the idea of a **dedicated function**.

## Exam technique

- **State the purpose of** a register: one precise line, for example "the MAR holds the address of the memory location to be accessed".
- **Describe** the FDE cycle: give the steps in order, naming the register or bus at each step. Examiners award marks for each correct step, so a numbered sequence works well.
- **Explain** performance: link the feature to what happens inside the CPU.
- **Identify** embedded systems in a list: look for devices with one dedicated job.

## Practise next

Use the [Computer architecture revision notes](/resources/cambridge-igcse-computer-science-0478-computer-architecture-revision-notes/) to drill the register and bus facts, then try the [Computer architecture practice questions](/resources/cambridge-igcse-computer-science-0478-computer-architecture-practice/), which include a full trace-table question.
