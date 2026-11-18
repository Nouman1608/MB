---
title: "Cambridge O Level Computer Science (2210): Computer architecture"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3.1
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "computer-architecture-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 3.1: the CPU, Von Neumann components, the fetch-decode-execute cycle, cores, cache, clock and embedded systems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.1 of the Cambridge O Level Computer Science 2210 syllabus is about what happens inside the processor. The learning statements cover five areas:

1. the role of the **central processing unit (CPU)** and what is meant by a **microprocessor**;
2. the purpose of the **units, registers and buses** in a CPU with a **Von Neumann architecture**, and the **fetch–decode–execute (FDE) cycle**, including the role of each component;
3. what is meant by a **core, cache and clock**, and how they affect performance;
4. the purpose and use of an **instruction set**;
5. the purpose and characteristics of an **embedded system**, and devices in which they are used.

The [Hardware study guide](/resources/o-level-computer-science-hardware/) summarises all of Topic 3. This guide takes 3.1 further: it follows a single instruction through every step of the cycle, works through a performance comparison, and shows how to decide whether a device contains an embedded system.

## The CPU and microprocessors

The CPU's job, in the syllabus's words, is to process "instructions and data that are input into the computer so that the result can be output". A **microprocessor** is "a type of integrated circuit on a single chip": the CPU's circuits are all manufactured on one piece of silicon. This is why the same idea, a processor on a chip, is found in desktop computers, phones, cars and kitchen appliances.

## What "Von Neumann" means for the exam

The defining feature of the Von Neumann architecture is the **stored program concept**: **instructions and data are held in the same main memory**, and the CPU fetches both, one at a time, along the same buses. Because instructions and data share memory, the CPU needs registers that keep track of **where** it is reading (an address) and **what** it has read (the contents).

## Components and their purposes

**Units**

- **Arithmetic logic unit (ALU)**: performs arithmetic (such as addition) and logic operations (such as comparing two values).
- **Control unit (CU)**: decodes instructions and sends out control signals that make the other components carry out each step of the cycle at the right time.

**Registers** (tiny, very fast stores inside the CPU)

- **Program counter (PC)**: the address of the next instruction to fetch.
- **Memory address register (MAR)**: the address currently being read from or written to.
- **Memory data register (MDR)**: the instruction or data that has just been read from, or is about to be written to, memory.
- **Current instruction register (CIR)**: the instruction being decoded and executed now.
- **Accumulator (ACC)**: the result of the most recent calculation by the ALU.

**Buses** (groups of wires carrying signals)

- **Address bus**: carries addresses from the MAR to memory. Signals travel **one way only**.
- **Data bus**: carries instructions and data between memory and the MDR, in **both** directions.
- **Control bus**: carries signals such as memory read, memory write and clock pulses, in **both** directions.

## One instruction, every step

Suppose the PC holds **150**, and memory address 150 holds the instruction **ADD 240**. Address 240 holds the value **25**, and the ACC already holds **17**.

| Step | What happens | Register or bus involved |
|---|---|---|
| 1 | The address 150 is copied from the PC to the MAR | PC → MAR |
| 2 | 150 is sent to memory | Address bus |
| 3 | A "read" signal is sent to memory | Control bus |
| 4 | The instruction ADD 240 is sent from address 150 to the CPU | Data bus → MDR |
| 5 | The instruction is copied to the CIR | MDR → CIR |
| 6 | The PC is incremented to 151 | PC |
| 7 | The CU decodes ADD 240: "add the value at address 240 to the ACC" | CU, CIR |
| 8 | 240 is copied to the MAR and sent to memory with a read signal | MAR, address bus, control bus |
| 9 | The value 25 arrives | Data bus → MDR |
| 10 | The ALU adds 17 and 25 | ALU |
| 11 | The result 42 is stored | ACC |

Steps 1 to 6 are the **fetch**, step 7 is the **decode**, and steps 8 to 11 are the **execute**. At the end the PC holds 151, the MAR holds 240, the MDR holds 25, the CIR holds ADD 240 and the ACC holds 42. The cycle then starts again with the instruction at address 151.

## Cores, cache and clock

The syllabus says these "can affect the performance of a CPU". Learn what each is and the mechanism by which it helps.

- A **core** is an independent processing unit within the CPU that can carry out its own FDE cycles. A dual-core CPU can work on two streams of instructions at the same time. More cores help most when software is written to split work between them, for example when several programs run at once.
- **Cache** is a small amount of very fast memory built into or beside the CPU, holding instructions and data that are used often. Fetching from cache is much faster than fetching from RAM, so a larger cache means the CPU waits for RAM less often.
- The **clock** generates regular pulses that keep components working in step. Each pulse allows the next stage of the cycle to happen. Clock speed is measured in hertz: 2.5 GHz means 2.5 billion pulses per second. A higher clock speed means more instructions can be processed each second.

### Worked example: comparing processors

The two processors below are invented for this example.

| Processor | Cores | Clock speed | Cache |
|---|---|---|---|
| A | 2 | 3.6 GHz | 4 MiB |
| B | 6 | 3.0 GHz | 12 MiB |

**Question:** Explain which processor is likely to perform better for a user who edits video while other programs run. [4]

**Model answer:** Processor B has more cores, so it can process more instructions at the same time [1], which suits video editing with other programs running, as the work can be shared between cores [1]. B also has a larger cache, so more frequently used data and instructions can be kept close to the CPU, reducing slower fetches from RAM [1]. Although A has a faster clock, so each core completes more cycles per second, B's extra cores and cache are likely to give better overall performance for this user [1].

The answer weighs **both** processors and links each feature to the **task**, which is what "explain" requires.

## Instruction sets

An **instruction set** is "a list of all the commands that can be processed by a CPU", and the commands are **machine code**. Typical commands include loading a value, storing a value, adding, comparing and jumping to another instruction. Each has a binary code that the control unit recognises when it decodes. A program must be in the machine code of the CPU's own instruction set before it can run, so processors with different instruction sets cannot run each other's machine code directly.

## Embedded systems

The syllabus describes an embedded system as one "used to perform a dedicated function", with examples in domestic appliances, cars, security systems, lighting systems and vending machines. This is "different to a general purpose computer", such as a PC or laptop, which "is used to perform many different functions".

### How to decide

Ask three questions about the device:

1. Does it have one main job (or a fixed set of related jobs)?
2. Is the processor built into a larger product that is not sold as a computer?
3. Is the program fixed, so the user cannot install new software?

If the answers are yes, it is an embedded system. A **vending machine** qualifies: its processor reads the keypad and coin sensor and controls the motors that drop the item, and does nothing else. A **smartphone** is closer to a general-purpose computer, because the user can install and run many different apps.

**Characteristics of embedded systems:** dedicated function; built into a larger device; fixed program; small in size; low power use; low cost to mass-produce; often reliable enough to run for years without attention.

## Common mistakes

- Saying the MAR holds data. It holds addresses only.
- Saying the CIR holds "the next instruction". That is the PC's job, and the PC holds an address, not the instruction.
- Describing the ALU as "doing all the processing". The CU controls the cycle; the ALU does calculations and comparisons.
- Saying a faster clock "makes the computer quicker" without explaining that more cycles are completed per second.
- Calling any small device an embedded system. The test is a dedicated function inside a larger device.

## Exam technique

- **Describe** the FDE cycle as numbered steps, naming the register or bus each time.
- **State the purpose** of a component in one sentence.
- **Explain** performance by linking the feature (core, cache, clock) to what happens inside the CPU and then to the scenario.
- **Identify** embedded systems by their dedicated function.

Next, condense this with the [Computer architecture revision notes](/resources/cambridge-o-level-computer-science-2210-computer-architecture-revision-notes/) and test yourself with the [Computer architecture practice questions](/resources/cambridge-o-level-computer-science-2210-computer-architecture-practice/).
