---
title: "OxfordAQA A-Level Computer Science: Computer organisation and architecture (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Computer Architecture Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
description: "Revision notes for OxfordAQA 9645 computer organisation and architecture: registers, buses, interrupts, HDD vs SSD, adders, flip-flops and De Morgan."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense topic 7 (Computer organisation and architecture) in the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Scope: sections 3.7.1 to 3.7.7, International AS content that the specification assigns to the Unit 2 written paper (Concepts and principles of computer science). The [study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/) has the full explanations and longer examples; start there if anything below is unfamiliar.

Once these notes feel secure, attempt the [practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/). Also useful: [course hub](/boards/oxfordaqa/a-level/computer-science/), [printable checklist](/checklists/oxfordaqa/a-level/computer-science/), [free diagnostics](/diagnostics/), [computer systems revision notes](/resources/oxfordaqa-a-level-computer-science-computer-systems-revision-notes/).

Notation: a bar over a single letter is shown as A̅; a bar over a group is shown as NOT( ). AND is ⋅, OR is +, XOR is ⨁.

## 3.7.1 Components, buses and architectures

| Item | One-line definition |
|---|---|
| Processor | Fetches, decodes and executes machine code instructions |
| Main memory | Directly addressable store for the running program and its data |
| I/O controller | Interface between the processor and a peripheral device |
| Address bus | Carries addresses; one-way, out of the processor |
| Data bus | Carries data and instructions; two-way |
| Control bus | Carries timing and command signals (read, write, clock, interrupt) |

**Addressable memory in steps**
1. Count the address lines, n.
2. Addresses = 2ⁿ.
3. Multiply by the bytes per location given in the question.
4. Convert: 2¹⁰ bytes = 1 KiB, 2²⁰ bytes = 1 MiB.

*Reminder:* 22 lines, 1 byte per location: 2²² = 4,194,304 bytes = **4 MiB**.

**Stored program concept:** the program sits in main memory as machine code; the processor fetches and runs those instructions one at a time, in order, carrying out arithmetic and logic.

**Von Neumann:** shared memory and buses for instructions and data; simpler, cheaper, flexible use of memory; general-purpose machines.
**Harvard:** separate instruction and data memories and buses; both can be accessed at once; memories can differ in size and type; embedded systems.

## 3.7.2 Processor components

| Component | Job |
|---|---|
| ALU | Arithmetic, logic, comparisons, shifts |
| Control unit | Decodes and issues control signals |
| Clock | Pulses that keep every step in time |
| General-purpose registers | Hold values in use by the program |
| PC | Address of the next instruction |
| CIR | Instruction now being decoded or executed |
| MAR | Address for the next memory read or write |
| MBR | Value travelling to or from memory |
| SR | Condition flags and interrupt-enable state |

## 3.7.3 Fetch-Execute and interrupts

**Fetch in four transfers**
1. MAR ← [PC] (address bus; read signal on control bus)
2. PC ← [PC] + 1
3. MBR ← [memory location in MAR] (data bus)
4. CIR ← [MBR]

**Decode:** control unit identifies opcode and operands. **Execute:** carry out the operation; the SR may change.

*Reminder:* PC = 75 and location 75 holds `ADD R1, R1, #9`, with R1 = 30. After fetch, PC = **76** and the CIR holds the ADD. Execute uses the ALU only, with no second memory access, so R1 becomes **39**.

**Must-know distinctions**
- MAR holds an address; MBR holds the data or instruction at that address.
- PC points to the next instruction; CIR holds the current one.
- General-purpose registers are used by the program; dedicated registers each have one fixed job in the cycle.

**Interrupt handling in steps**
1. Finish the current instruction; check for interrupts.
2. Push the volatile environment (PC, SR, stack pointer, other registers the ISR may alter) onto the stack.
3. Load the ISR start address into the PC.
4. Run the ISR.
5. Pop the saved values; carry on with the original program.

## 3.7.4 Performance factors

| Factor | Why it helps |
|---|---|
| More cores | Parallel instruction streams, if software splits the work |
| Larger cache | More hits, fewer slow main memory fetches |
| Faster clock | More cycles each second |
| Longer word | Bigger values handled per operation |
| Wider address bus | More locations can be addressed |
| Wider data bus | More bits moved per transfer |

*Reminder:* cycle time = 1 ÷ frequency. At 1.25 GHz: 1 ÷ (1.25 × 10⁹) s = **0.8 ns**.

## 3.7.5 Secondary storage

- Needed because main memory is volatile and too expensive to hold every file.
- **Hard disk:** spinning magnetic platters; tracks and sectors; a head on a moving arm writes by magnetising regions and reads by sensing them.
- **SSD:** NAND flash cells trap charge; no moving parts; erase in whole blocks; limited write cycles managed by the controller.
- **Cloud storage:** data stored on servers at a remote location, accessed via the Internet.

**Must-know distinctions**

| | Hard disk | SSD | Cloud |
|---|---|---|---|
| Speed | Slowest locally | Fastest | Limited by connection |
| Cost | Cheapest per gigabyte | Dearer | Subscription |
| Strength | Large capacity | Shock-proof, quiet, low power | Access anywhere, provider backup |
| Weakness | Moving parts | Write wear | Needs Internet; third-party control |

## 3.7.6 Logic gates and circuits

| Gate | Output is 1 when |
|---|---|
| NOT | Input is 0 |
| AND | Both inputs are 1 |
| OR | At least one input is 1 |
| XOR | Inputs differ |
| NAND | Not both inputs are 1 |
| NOR | Both inputs are 0 |

**Truth table for a circuit in steps**
1. List 2ⁿ input rows in binary order.
2. Add a column for each intermediate gate output.
3. Fill the final output column from those.

*Reminder:* W = (A ⨁ B)⋅C̅ is 1 only for A, B, C = 0, 1, 0 and 1, 0, 0.

**Adders**
- Half-adder: S = A ⨁ B (XOR), C = A⋅B (AND). Construct this one.
- Full-adder: S = A ⨁ B ⨁ Cin; Cout = A⋅B + Cin⋅(A ⨁ B). Trace only.

**D-type flip-flop:** inputs D and clock. On each rising clock edge, Q takes the value of D and keeps it until the next rising edge.

## 3.7.7 Boolean algebra

**Precedence:** NOT > AND > OR.

| Law or identity | Form |
|---|---|
| Commutative | A + B = B + A; A⋅B = B⋅A |
| Associative | A + (B + C) = (A + B) + C; A⋅(B⋅C) = (A⋅B)⋅C |
| Distributive | A⋅(B + C) = A⋅B + A⋅C |
| Double NOT | NOT(A̅) = A |
| Idempotent | A⋅A = A; A + A = A |
| Complement | A⋅A̅ = 0; A + A̅ = 1 |
| With 0 and 1 | A⋅0 = 0; A + 0 = A; A⋅1 = A; A + 1 = 1 |
| Absorption | A⋅(A + B) = A; A + A⋅B = A |
| Redundant term | A + A̅⋅B = A + B |
| XOR | A ⨁ B = A⋅B̅ + A̅⋅B |
| De Morgan | NOT(A + B) = A̅⋅B̅; NOT(A⋅B) = A̅ + B̅ |

**Simplifying in steps**
1. Remove bars over groups with De Morgan.
2. Cancel double bars.
3. Expand with distributivity if needed.
4. Apply complement, 0/1 and absorption identities.
5. Check one or two rows against the original.

*Reminder:* (A + B)⋅(A + B̅) = A + A⋅B̅ + A⋅B + 0, and absorption (A + A⋅X = A) leaves **A**.

## Quick self-test

1. A system has 15 address lines and 2 bytes per location. How much memory can it address, in KiB?
2. Name the register that stores where the next instruction will be fetched from.
3. Which bus is one-way?
4. State the output of a NAND gate when both inputs are 1.
5. State the output of a NOR gate when both inputs are 0.
6. Simplify A⋅(A + C).
7. Apply De Morgan to NOT(P⋅Q).
8. Simplify P + P̅⋅Q.
9. A half-adder has A = 1, B = 1. State S and C.
10. A D-type flip-flop stores 1 at a rising edge. D then falls to 0 while the clock stays high. State Q.
11. Give one reason the volatile environment is saved before an ISR runs.
12. State one advantage of Harvard architecture.

### Answers

1. 2¹⁵ × 2 = 65,536 bytes = **64 KiB**.
2. **Program counter**.
3. **Address bus**.
4. **0**.
5. **1**.
6. **A** (absorption).
7. **P̅ + Q̅**.
8. **P + Q**.
9. **S = 0, C = 1**.
10. **Q = 1**; nothing changes until the next rising edge.
11. The ISR overwrites registers, so the original PC and register values are needed to **resume the interrupted program correctly**.
12. Instructions and data can be **fetched at the same time**, as they use separate memories and buses.

## Where marks are usually lost

- Forgetting to multiply by the location size given in an addressable memory question.
- Writing MBR ← [PC] instead of MAR ← [PC] for the first fetch step.
- Naming the register transfers but leaving out which bus carries what when the question asks for both.
- Saying an interrupt stops the current instruction halfway.
- Describing cache as "extra RAM" without saying it is faster and closer to the processor.
- Calling an SSD "magnetic", or explaining a hard disk with no reference to tracks, sectors or a moving head.
- Listing cloud advantages only, when the question asks for advantages and disadvantages.
- Drawing NAND or NOR without the small output circle.
- Adding the carry to the sum column of a full-adder trace instead of producing a separate carry-out.
- De Morgan applied to one letter only, leaving the rest of the bar in place.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Relevant part: section 3.7, Computer organisation and architecture.
