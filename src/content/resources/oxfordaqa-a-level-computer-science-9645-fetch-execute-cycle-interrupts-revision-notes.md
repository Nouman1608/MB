---
title: "OxfordAQA A-Level Computer Science (9645): The Fetch-Execute cycle and interrupts -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Fetch-Execute Cycle Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.7.3: register transfers in fetch, decode and execute, buses, interrupts, ISRs, the volatile environment and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.7.3 The Fetch-Execute cycle and interrupts** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.7 Computer organisation and architecture). For longer explanations and traces, see the [Fetch-Execute cycle study guide](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts/); then practise with the [Fetch-Execute cycle practice questions](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-practice/).

## What the specification requires

- Explain how the **Fetch-Execute cycle** executes machine code programs: stages (**fetch, decode, execute**) and the **registers and buses** used.
- Describe the role of **interrupts** and **interrupt service routines (ISRs)**.
- Describe their **effect on the cycle**.
- Explain the need to **save the volatile environment** while the interrupt is serviced.
- Volatile environment: the **program counter, status register, stack pointer** and any other registers the ISR might alter.
- Not required: how interrupts of different priorities are dealt with.

## Key terms

| Term | Meaning |
|---|---|
| Fetch | Copy the next instruction from memory into the CIR |
| Decode | The control unit works out the opcode, addressing mode and operands |
| Execute | Carry out the instruction |
| Interrupt | A signal to the processor that an event needs attention |
| ISR | The subroutine that deals with the event that caused the interrupt |
| Volatile environment | The register values that must be saved and restored so the interrupted program can resume |
| Stack | Where the volatile environment is normally saved |
| Stack pointer | Register holding the address of the top of the stack |

## The fetch stage in one list

1. **MAR ← PC** (address copied from the PC).
2. Address on the **address bus**; **read** signal on the **control bus**.
3. **PC ← PC + 1** (so the PC already holds the next address).
4. **MBR ← memory[MAR]** (the contents arrive on the **data bus**).
5. **CIR ← MBR**.

## Decode and execute

- **Decode:** the control unit splits the CIR into opcode, addressing mode and operand and prepares the control signals.
- **Arithmetic or logic:** the ALU works on register values and the result goes to a register.
- **Load:** address to the MAR, read signal, value comes back on the data bus to the MBR, then to the register.
- **Store:** address to the MAR, value to the MBR, write signal, value goes out on the data bus.
- **Branch:** the target address is copied to the PC (for a conditional branch, only if the status register shows that the condition is met).

## Worked reminder: a load and a store

`LDR R3, 120` at address 300 (location 120 holds 58); then `STR R3, 121` at address 301.

| After | PC | MAR | MBR | R3 |
|---|---|---|---|---|
| Fetch 300 | 301 | 300 | `LDR R3, 120` | |
| Execute `LDR` | 301 | 120 | 58 | 58 |
| Fetch 301 | 302 | 301 | `STR R3, 121` | 58 |
| Execute `STR` | 302 | 121 | 58 | 58 |

Memory location 121 now holds 58.

## Interrupt handling in order

1. A device or event sends an **interrupt request** on the control bus.
2. The current Fetch-Execute cycle **finishes**.
3. At the end of the cycle the processor **checks** for an interrupt.
4. It **saves the volatile environment** (PC, SR, stack pointer, any other registers the ISR may change) on the stack.
5. It loads the PC with the **address of the ISR**.
6. The **ISR runs** using the normal cycle.
7. The saved values are **restored**, including the PC.
8. The interrupted program **resumes** where it left off.

Why save? Without the saved PC, the processor would not know where to resume. Without the saved status register, a stored comparison could be lost. Without the other registers, the program would carry on with values changed by the ISR.

## Examples of interrupt sources

| Source | Example |
|---|---|
| I/O device | Key press, mouse click, printer ready |
| Transfer complete | Disk or network data has arrived |
| Timer | Lets the operating system switch between programs |
| Error | Division by zero, invalid memory access |

## Tracing the order of execution

Program at 500 to 504; interrupt noticed after 502; ISR at 900 to 902.

Order executed: 500, 501, 502, 900, 901, 902, 503, 504.

The saved PC value was 503, because the PC already pointed at the next instruction when the interrupt was noticed.

## Registers during an indirect load

`LDR R5, [R4]` with R4 = 130 and location 130 holding 77. After the fetch, the CIR holds the instruction. In the execute stage the **contents of R4** (130) are copied to the **MAR**, 130 goes on the address bus, a read signal goes on the control bus and 77 returns on the data bus into the **MBR**. It is then copied to **R5**. The address came from a register, not from the instruction itself.

## Where interrupts fit in the cycle

Fetch, decode and execute are followed by an **interrupt check**. Normal case: nothing waiting, so the next fetch begins. Interrupt case: save, load the ISR address into the PC, run the ISR, restore, then carry on. The interrupted program is never aware that it was paused, because every value it depends on is put back.

## Exam traps

- **PC timing.** The PC is incremented during the fetch, not at the end of the execute stage.
- **Interrupt timing.** The processor completes the current cycle before it responds.
- **Incomplete saving.** Say "PC, status register and other registers that the ISR could change".
- **ISR is not the program.** It is a separate routine at its own address.
- **Which bus.** Address on the address bus, data on the data bus, read and write signals on the control bus.
- **Where it is saved.** The volatile environment goes on the stack, not in the MBR.

## Quick self-test

1. Name the three stages of the cycle.
2. Which register is copied to the MAR at the start of a fetch?
3. On which bus does the instruction travel from memory?
4. When is the PC incremented?
5. Which register receives the instruction after the MBR?
6. State two sources of interrupts.
7. When does the processor check for interrupts?
8. What is an ISR?
9. List the registers in the volatile environment named in the specification.
10. Why is the PC saved?
11. What is loaded into the PC to start the ISR?
12. A program at 40 to 43 is interrupted after the instruction at 41, with an ISR at 70 to 72. List the order of addresses executed.

### Answers

1. Fetch, decode, execute.
2. The PC.
3. The data bus.
4. During the fetch stage, after its value has been copied to the MAR.
5. The CIR.
6. Any two from: key press, mouse click, timer, disk transfer complete, network data arrived, error such as division by zero.
7. At the end of each Fetch-Execute cycle.
8. A subroutine that deals with the event that caused the interrupt.
9. The program counter, the status register and the stack pointer (plus any other registers the ISR might alter).
10. So the processor knows where to resume the interrupted program.
11. The start address of the ISR.
12. 40, 41, 70, 71, 72, 42, 43.

## More on this topic

- [Fetch-Execute cycle and interrupts study guide](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts/)
- [Fetch-Execute cycle and interrupts practice questions](/resources/oxfordaqa-a-level-computer-science-9645-fetch-execute-cycle-interrupts-practice/)
- [Factors affecting processor performance revision notes](/resources/oxfordaqa-a-level-computer-science-9645-factors-affecting-processor-performance-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.3 The Fetch-Execute cycle and interrupts.
