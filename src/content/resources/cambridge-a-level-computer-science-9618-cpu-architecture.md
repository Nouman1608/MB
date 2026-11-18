---
title: "Cambridge A Level Computer Science (9618): Central Processing Unit (CPU) Architecture"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
    subtopic: "cpu-architecture"
description: "Study guide to Cambridge 9618 section 4.1: Von Neumann model, registers, buses, performance, ports, interrupts and the fetch-execute cycle in RTN."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 4.1 Central Processing Unit (CPU) Architecture of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026 is AS content assessed on Paper 1, Theory Fundamentals. You must show understanding of "the basic Von Neumann model for a computer system and the stored program concept"; the purpose and role of general purpose and special purpose registers (PC, MDR, MAR, ACC, IX, CIR and the Status Register); the ALU, Control Unit, system clock and Immediate Access Store; the address, data and control buses; factors that affect performance (processor type and number of cores, bus width, clock speed, cache memory); ports (USB, HDMI, VGA); the stages of the fetch-execute (F-E) cycle, described in "register transfer" notation; and the purpose and handling of interrupts.

The [Processor Fundamentals study guide](/resources/a-level-computer-science-processor-fundamentals/) outlines the whole of Topic 4. This page follows one instruction through the processor step by step, which is the clearest way to understand how every component and register fits together. Recall: [CPU architecture revision notes](/resources/cambridge-a-level-computer-science-9618-cpu-architecture-revision-notes/) · Questions: [CPU architecture practice set](/resources/cambridge-a-level-computer-science-9618-cpu-architecture-practice/).

## The Von Neumann model and the stored program concept

In the Von Neumann model:

- there is a **single processor** that carries out instructions one after another;
- program **instructions and data are stored together** in the same main memory, in the same binary form;
- one set of buses carries both instructions and data between memory and processor.

The **stored program concept** is the idea that a program is loaded into main memory and its instructions are **fetched from memory and executed in sequence**. To run a different program, you load different instructions into memory; the hardware does not have to be rewired.

## The components

- **Arithmetic and Logic Unit (ALU)**: carries out arithmetic (addition, subtraction) and logical operations (AND, OR, comparisons, shifts).
- **Control Unit (CU)**: decodes instructions and sends control signals to coordinate the other components and the flow of data, so each step happens at the right time.
- **System clock**: generates regular timing pulses; every operation is synchronised to them.
- **Immediate Access Store (IAS)**: the main memory holding the programs and data currently in use, which the processor can access directly.

## Registers

A register is a very small, very fast storage location inside the processor. A **general purpose** register can hold any data the program needs; in 9618 questions the only one is the **Accumulator**. A **special purpose** register has one fixed role.

| Register | Role |
|---|---|
| Program Counter (PC) | Holds the address of the **next** instruction to be fetched |
| Memory Address Register (MAR) | Holds the address of the memory location about to be read from or written to |
| Memory Data Register (MDR) | Holds the data or instruction just read from memory, or about to be written to it |
| Current Instruction Register (CIR) | Holds the instruction currently being decoded and executed |
| Accumulator (ACC) | Holds values being processed and the results of ALU operations |
| Index Register (IX) | Holds a value added to an address to give the address actually used (indexed addressing) |
| Status Register | Holds individual bits (flags) recording conditions such as carry, overflow, a negative or zero result, or an interrupt |

## Buses

| Bus | Carries | Direction |
|---|---|---|
| Address bus | Memory addresses from the processor (from the MAR) | One way: processor to memory and I/O |
| Data bus | Data and instructions | Both ways |
| Control bus | Control and timing signals such as memory read, memory write, clock pulses and interrupt requests | Both ways |

**Address bus width** decides how many locations can be addressed: n lines give 2ⁿ addresses. A 16-bit address bus can address 2¹⁶ = 65,536 locations; a 32-bit bus can address 2³² = 4,294,967,296. **Data bus width** decides how many bits move in one transfer: a 64-bit data bus moves twice as much per transfer as a 32-bit one.

## Register transfer notation

The syllabus asks you to "describe and use 'register transfer' notation". The arrow means "is given the value of"; square brackets mean "the contents of".

```
MAR ← [PC]        copy the contents of PC into MAR
PC ← [PC] + 1     increment the PC
MDR ← [[MAR]]     copy into MDR the contents of the memory location
                  whose address is held in MAR
CIR ← [MDR]       copy the contents of MDR into CIR
```

The double brackets in MDR ← [[MAR]] are the step students most often get wrong: [MAR] is an address, and [[MAR]] is what is stored at that address.

## Worked example: one instruction through the F-E cycle

The PC holds 300. Memory location 300 holds the instruction LDD 450 ("load the contents of address 450 into the ACC"). Location 450 holds the value 27.

**Fetch**

| Step | Register transfer | Result |
|---|---|---|
| 1 | MAR ← [PC] | MAR = 300; address sent along the address bus |
| 2 | PC ← [PC] + 1 | PC = 301, ready for the next instruction |
| 3 | MDR ← [[MAR]] | Memory read signal on the control bus; LDD 450 travels on the data bus into the MDR |
| 4 | CIR ← [MDR] | CIR = LDD 450 |

**Decode**: the CU decodes the instruction in the CIR: the opcode LDD means direct addressing, and the operand 450 is an address.

**Execute**

| Step | Register transfer | Result |
|---|---|---|
| 5 | MAR ← 450 | Operand address placed in the MAR |
| 6 | MDR ← [[MAR]] | MDR = 27 |
| 7 | ACC ← [MDR] | ACC = 27 |

Notice that the PC is incremented during the **fetch**, not after execution. A jump instruction works by overwriting the PC during its execute stage, so the next fetch comes from a new address.

## Factors affecting performance

| Factor | Why it helps | Limitation |
|---|---|---|
| Processor type and number of cores | More cores can process separate tasks or threads at the same time | Software must be written to use several cores; doubling cores rarely doubles speed |
| Bus width | A wider data bus moves more bits per transfer; a wider address bus allows more memory to be addressed | Other components must support the width |
| Clock speed | More cycles per second, so more instructions per second | More heat and power use; limited by other bottlenecks such as memory speed |
| Cache memory | Fast memory near the processor holds frequently used instructions and data, cutting slower trips to main memory | Small and expensive; larger cache gives diminishing gains |

## Ports

A port is a connection point between the computer and a peripheral.

- **USB (Universal Serial Bus)**: connects many kinds of device (keyboards, drives, phones, printers); carries data and power; devices can be plugged in while the computer is running and are recognised automatically.
- **HDMI (High Definition Multimedia Interface)**: carries high-definition digital video **and** audio in one cable to monitors, televisions and projectors.
- **VGA (Video Graphics Array)**: an older port carrying an **analogue** video signal only; found on older monitors and projectors; quality is lower at high resolutions.

## Interrupts

An **interrupt** is a signal to the processor that something needs attention. Possible causes:

- **Hardware**: a key pressed, a printer out of paper, data arriving from a network, a disk transfer finished.
- **Software**: a program error such as division by zero, or a program requesting an operating system service.
- **Timer**: the time slice for the current process has ended.
- **Hardware failure**: for example a power supply problem.

**Applications** include responding to user input immediately, letting slow devices signal when they are ready instead of being checked constantly, and sharing processor time between processes.

**When interrupts are detected:** the processor checks for interrupts at the **end of each F-E cycle**, after the current instruction has been executed.

**How an interrupt is handled:**

1. If an interrupt is present and has a higher priority than the current task, the current task is suspended; otherwise the interrupt waits.
2. The contents of the PC and other registers are saved, usually on a stack.
3. The address of the appropriate **Interrupt Service Routine (ISR)** is loaded into the PC.
4. The ISR is executed using the normal F-E cycle.
5. When the ISR ends, the saved register contents are restored.
6. The interrupted program continues from where it stopped (or a higher-priority interrupt is serviced first).

## Common mistakes

- Saying the PC holds the current instruction: it holds the **address of the next** instruction.
- Writing MDR ← [MAR] instead of MDR ← [[MAR]].
- Making the address bus two-way.
- Claiming more cores always means proportionally faster programs.
- Saying the processor checks for interrupts in the middle of an instruction.
- Forgetting to mention saving registers before the ISR runs.

## Exam technique

- **Describe the F-E cycle**: give each step in register transfer notation or in words that name the registers and buses.
- **Explain the role of a register**: say what it holds and when it is used.
- **Explain a performance factor**: say what changes and why that increases the instructions or data processed per second.
- **Describe interrupt handling**: give the order of steps, including the check at the end of the cycle and the saving and restoring of registers.

Next: condense this with the [CPU architecture revision notes](/resources/cambridge-a-level-computer-science-9618-cpu-architecture-revision-notes/) and test it with the [CPU architecture practice questions](/resources/cambridge-a-level-computer-science-9618-cpu-architecture-practice/). The instructions themselves are covered in the [assembly language study guide](/resources/cambridge-a-level-computer-science-9618-assembly-language/).

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 4.1 Central Processing Unit (CPU) Architecture. Published by Cambridge International.
