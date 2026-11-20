---
title: "OxfordAQA A-Level Computer Science (9645): The Fetch-Execute cycle and interrupts"
seoTitle: "OxfordAQA A-Level CS 9645 Fetch-Execute Interrupts Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "the-fetch-execute-cycle-and-interrupts-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.7.3 in depth: register transfers in fetch, decode and execute, buses used, interrupts, ISRs and saving the volatile environment."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.7.3 The Fetch-Execute cycle and interrupts** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.7 Computer organisation and architecture (AS). The specification asks you to explain how the **Fetch-Execute cycle** executes machine code programs, including the stages (**fetch, decode, execute**) and details of the **registers and buses** used, and to describe the role of **interrupts** and **interrupt service routines (ISRs)**, their effect on the cycle, and the need to **save the volatile environment** while the interrupt is serviced. The specification adds that the volatile environment is the program counter, status register, stack pointer and any other registers that might be altered by the ISR. It also says you will not be asked how interrupts with different priorities are dealt with.

For quick recall use the [Fetch-Execute cycle revision notes](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-revision-notes/), and test yourself with the [Fetch-Execute cycle practice questions](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-practice/). It helps to have read the [processor and its components study guide](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components/) first, because this page uses the PC, MAR, MBR and CIR throughout.

## The cycle in outline

A processor runs a program by repeating three stages.

1. **Fetch** the next instruction from main memory into the processor.
2. **Decode** it, to find out what it asks for.
3. **Execute** it.

Then it starts again with the next instruction. This repeats until the program halts. The program counter (PC) is what links one cycle to the next, because it always holds the address of the next instruction.

## The fetch stage

Fetching is the same for every instruction. Here it is as a sequence of register transfers, with an arrow showing where a value is copied to.

| Step | Transfer | Bus used |
|---|---|---|
| 1 | MAR ← PC | The address moves from the PC to the MAR, ready for the address bus |
| 2 | The address in the MAR is placed on the **address bus**, and a **memory read** signal is sent on the **control bus** | Address bus, control bus |
| 3 | PC ← PC + 1 | (inside the processor; can happen at the same time as step 2) |
| 4 | MBR ← memory[MAR] | The contents of the location travel on the **data bus** into the MBR |
| 5 | CIR ← MBR | The instruction is copied to the CIR |

In this guide, every instruction occupies one location, so the PC increases by one. If an instruction occupied several locations, the PC would be increased by the right amount. After the fetch, the instruction is in the CIR and the PC already holds the address of the next one.

## The decode stage

The **control unit** examines the instruction in the CIR. It separates the **opcode** (which operation), the **addressing mode** and the **operands**. From the opcode it works out what signals to send. From the addressing mode it works out whether the operand is a value, an address, or a register that holds an address. No buses are needed for decoding itself because everything is already inside the processor.

## The execute stage

What happens depends on the instruction. Here are the main types.

- **Arithmetic or logic** (`ADD`, `AND`, `LSL`): the control unit tells the ALU what to do; the ALU works on values in registers and returns the result to a register. No bus use is needed unless an operand comes from memory.
- **Load** (`LDR`): the address is put in the MAR and sent on the **address bus**, a read signal goes on the **control bus**, and the value arrives from memory on the **data bus** into the MBR, then into the destination register.
- **Store** (`STR`): the address goes in the MAR, the value to be stored goes in the MBR, and a **write** signal on the control bus makes memory take the value from the **data bus**.
- **Branch** (`B`, `BEQ`): the address of the label is copied into the PC. A conditional branch first checks the status register. If the condition is not met, the PC is left alone.

### Worked example: three instructions

These instructions are at addresses 300, 301 and 302. Memory location 120 holds 58.

```
LDR R3, 120
ADD R3, R3, #2
STR R3, 121
```

| After | PC | MAR | MBR | CIR | R3 |
|---|---|---|---|---|---|
| Fetch 300 | 301 | 300 | `LDR R3, 120` | `LDR R3, 120` | |
| Execute `LDR` | 301 | 120 | 58 | `LDR R3, 120` | 58 |
| Fetch 301 | 302 | 301 | `ADD R3, R3, #2` | `ADD R3, R3, #2` | 58 |
| Execute `ADD` | 302 | 301 | `ADD R3, R3, #2` | `ADD R3, R3, #2` | 60 |
| Fetch 302 | 303 | 302 | `STR R3, 121` | `STR R3, 121` | 60 |
| Execute `STR` | 303 | 121 | 60 | `STR R3, 121` | 60 |

After the last row, location 121 holds 60. Address 120 and address 121 were each placed on the address bus once. The `LDR` used the data bus to bring 58 in. The `STR` used it to send 60 out.

### Worked example: indirect addressing

`LDR R5, [R4]` with R4 = 130 and location 130 holding 77. The fetch stage is as above. In the execute stage, the contents of R4 (130) are copied to the MAR, a read is requested, and 77 returns in the MBR and is copied to R5. The address came from a register, which is the whole point of indirect addressing.

## Interrupts

Sometimes something needs the processor's attention at once, and it cannot wait for the program to finish. An **interrupt** is a signal sent to the processor to tell it that an event has happened. Examples include:

- a key is pressed or a mouse button is clicked (an I/O device);
- a disk or network transfer has finished;
- a timer has expired, so the operating system can switch to another program;
- an error, such as an attempt to divide by zero.

The signal arrives on the **control bus** as an interrupt request. The code that deals with it is the **interrupt service routine (ISR)**, a subroutine stored in memory.

### How the cycle changes

An interrupt does not stop an instruction half way through. At the **end of each Fetch-Execute cycle** the processor checks whether an interrupt is waiting. If not, it fetches the next instruction as usual. If one is, the processor does this:

1. **Save the volatile environment.** The values that belong to the interrupted program, and that the ISR might change, are stored (normally on the **stack**). These are the **PC** (so the processor knows where to resume), the **status register**, the **stack pointer**, and any other registers the ISR might alter.
2. **Load the PC with the start address of the ISR.** The next fetch therefore begins the ISR.
3. **Run the ISR** with the normal Fetch-Execute cycle.
4. **Restore the volatile environment** from the stack, putting back the saved values, including the PC.
5. **Resume** the interrupted program, which carries on as if nothing had happened.

The saving is essential. If the PC were not saved, the processor would not know where to go back to. If the status register were not saved, a comparison made just before the interrupt could be lost, and a following conditional branch would behave wrongly. If other registers were overwritten by the ISR and not restored, the interrupted program would carry on with wrong values.

### Worked example: tracing the PC through an interrupt

A program occupies addresses 500 to 504. An interrupt arrives while the instruction at 502 is being executed. The ISR occupies addresses 900 to 902.

| Event | Instruction executed | PC after fetch | Action |
|---|---|---|---|
| 1 | 500 | 501 | |
| 2 | 501 | 502 | |
| 3 | 502 | 503 | Interrupt flag found at the end of this cycle. PC (503), SR and other volatile registers are saved on the stack; PC ← 900 |
| 4 | 900 | 901 | ISR |
| 5 | 901 | 902 | ISR |
| 6 | 902 | 903 | ISR ends; saved values restored from the stack, so PC ← 503 |
| 7 | 503 | 504 | Program resumes |
| 8 | 504 | 505 | |

The order of instructions actually executed is 500, 501, 502, 900, 901, 902, 503, 504: eight instructions in total. The ISR was inserted between 502 and 503, and the program lost nothing.

## Exam technique

- **Name the register in every step.** "The address in the PC is copied to the MAR" is a mark. "The instruction is fetched" is not.
- **Name the bus when asked.** Address bus for the address, data bus for the value, control bus for read, write and interrupt request signals.
- **Describe interrupts in order.** Check at the end of the cycle, save the volatile environment, run the ISR, restore, resume.
- **Say why saving is needed.** "So the interrupted program can resume exactly where it left off" earns the mark.
- **Do not describe priorities.** The specification says you will not be required to explain how interrupts of different priorities are handled.

## Common mistakes

- Saying the PC is increased after the instruction has finished executing. It is increased during the fetch.
- Saying the interrupt stops the instruction in the middle. The current cycle completes first.
- Saving only the PC and forgetting the status register and other registers.
- Describing the ISR as part of the interrupted program. It is a separate routine.
- Mixing up the data bus and the address bus when describing a load.
- Saying the volatile environment is saved in the MBR. It is saved on the stack.

## Next steps

- [Fetch-Execute cycle and interrupts revision notes](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-revision-notes/)
- [Fetch-Execute cycle and interrupts practice questions](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-practice/)
- [Factors affecting processor performance study guide](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.3 The Fetch-Execute cycle and interrupts.
