---
title: "OxfordAQA A-Level Computer Science: Computer organisation and architecture (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS Computer Architecture Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers on OxfordAQA 9645 topic 7: Fetch-Execute, interrupts, storage, logic circuits and Boolean algebra."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover topic 7 -- Computer organisation and architecture -- from the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Coverage runs from section 3.7.1 to 3.7.7; everything here is International AS content, which the specification places in Unit 2: Concepts and principles of computer science. If stuck, revisit the [study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/) or the [revision notes](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-revision-notes/). Also see the [course hub](/boards/oxfordaqa/a-level/computer-science/), [printable checklist](/checklists/oxfordaqa/a-level/computer-science/), [free diagnostics](/diagnostics/).

Instructions follow the Standard OxfordAQA assembly language instruction set, found in the appendix of the specification. Boolean notation: ⋅ is AND, + is OR, ⨁ is XOR, A̅ is NOT A, and NOT( ) stands for a bar drawn over a whole group.

## Questions

**1.** State the role of:

**(a)** the memory address register (MAR) **[1]**
**(b)** the status register (SR). **[1]**

**2.** A processor has a 20-line address bus. Each addressable memory location holds 2 bytes.

**(a)** Calculate the number of addressable locations. **[1]**
**(b)** Calculate the total addressable memory in MiB. Show your working. **[2]**
**(c)** The address bus is widened to 24 lines. State the factor by which the addressable memory increases. **[1]**

**3.** **(a)** Describe the stored program concept. **[2]**
**(b)** Explain one advantage of Harvard architecture compared with von Neumann architecture. **[2]**

**4.** The PC holds 340. Memory location 340 holds the instruction `STR R4, 205`. Register R4 holds 19.

**(a)** Describe the fetch stage of the Fetch-Execute cycle for this instruction. Name the registers and buses used. **[5]**
**(b)** State the values in the PC and the MBR, and in memory location 205, after this instruction has been executed. **[2]**

**5.** Explain what happens when a processor receives an interrupt while it is running a program. Refer to the volatile environment in your answer. **[5]**

**6.** **(a)** A block of 80 bytes is copied from main memory into the processor. Calculate the number of data bus transfers needed with a 32-bit data bus and with a 64-bit data bus. **[2]**
**(b)** Explain why adding a second core may not halve the running time of a program. **[2]**
**(c)** Explain how a larger cache can improve processor performance. **[2]**

**7.** In a logic circuit, inputs A and B feed an XOR gate. Inputs B and C feed a NAND gate. The outputs of these two gates feed an AND gate, whose output is P.

**(a)** Write a Boolean expression for P. **[2]**
**(b)** Complete a truth table for P, including a column for each intermediate gate output. **[3]**

**8.** A circuit is needed for Z = NOT(A⋅C)⋅(B + C).

**(a)** Describe a logic circuit for Z, naming each gate and its inputs. **[3]**
**(b)** State the value A must have for Z to be 1 when C = 1. **[1]**

**9.** Use Boolean identities to simplify each expression. Show each step.

**(a)** A⋅B + A⋅B̅⋅C **[3]**
**(b)** NOT(A̅ + B) + A⋅B **[3]**

**10.** **(a)** Draw or describe the circuit for a half-adder, and give its truth table. **[3]**
**(b)** A full-adder has inputs A = 1, B = 1 and carry-in = 1. Trace the circuit, giving the value of A ⨁ B, the sum, A⋅B, carry-in⋅(A ⨁ B) and the carry-out. **[3]**
**(c)** A half-adder adds the right-hand bits, and a full-adder adds the left-hand bits with the carry, of the 2-bit numbers 11 and 11. State the three output bits. **[2]**

**11.** Two edge-triggered D-type flip-flops share a clock. The output Q₁ of the first flip-flop is the D input of the second, whose output is Q₂. Both outputs start at 0. At four successive rising clock edges, the D input of the first flip-flop is 1, 0, 1, 1. State Q₁ and Q₂ after each of the four edges. **[4]**

**12.** A field research team works for months at remote sites with no reliable Internet, carrying laptops over rough ground and recording large amounts of camera footage. At base, years of footage must be kept and is opened only occasionally.

Evaluate the use of magnetic hard disks, solid-state drives and cloud storage for this team, and recommend a storage plan. **[8]**

## Answers

**1. (a)** Holds the **address of the memory location** about to be read from or written to [1].
**(b)** Holds **flags recording conditions** from the last operation, such as zero, negative, carry or overflow, and whether interrupts are enabled [1]. **[2]**
*Examiner insight:* Keep MAR and MBR apart: an answer that says the MAR "holds data from memory" describes the MBR.

**2. (a)** 2²⁰ = **1,048,576 locations** [1].
**(b)** 1,048,576 × 2 = 2,097,152 bytes [1]; 2,097,152 ÷ 2²⁰ = **2 MiB** [1].
**(c)** 2²⁴ ÷ 2²⁰ = 2⁴, so **16 times** as much [1]. **[4]**
*Examiner insight:* An answer of 1 MiB shows the bytes-per-location step was skipped.

**3. (a)** The program is held in main memory as machine code instructions [1]; the processor fetches and executes them one at a time, in sequence, carrying out arithmetic and logic operations [1].
**(b)** Instructions and data are held in separate memories with separate buses [1], so an instruction can be fetched at the same time as data is read or written, which speeds up execution [1]. **[4]**
*Examiner insight:* "Faster" alone earns little; link speed to simultaneous access.

**4. (a)** The PC's contents, 340, are copied to the MAR [1]. The address goes on the address bus and a memory read signal on the control bus [1]. The PC is incremented to 341 [1]. The instruction in location 340 travels along the data bus into the MBR [1]. The MBR's contents are copied to the CIR for decoding [1].
**(b)** **PC = 341** [1]; **MBR = 19** and **location 205 holds 19** [1]. **[7]**
*Examiner insight:* During execution, 205 goes into the MAR and R4's value passes through the MBR; putting 205 in the MBR confuses address and data.

**5.** The current instruction finishes; interrupts are checked at the end of the cycle [1]. The volatile environment (PC, status register, stack pointer and other registers the ISR may change) is saved, usually on a stack [1]. The PC is loaded with the ISR's start address [1] and the ISR runs through normal Fetch-Execute cycles [1]. The saved values are restored and the program resumes where it stopped [1]. **[5]**
*Examiner insight:* Explain why saving is needed (the ISR reuses the registers), not just that it happens; a bare list of steps rarely gains every mark.

**6. (a)** 80 × 8 = 640 bits. **32-bit bus: 20 transfers** [1]; **64-bit bus: 10 transfers** [1].
**(b)** Parts of the program must run in sequence and cannot be split [1]; cores also spend time coordinating, so the gain is less than double [1].
**(c)** Cache is faster than main memory and close to the processor [1]; more items found in cache means fewer slow main memory accesses [1]. **[6]**
*Examiner insight:* Convert bytes to bits before dividing by the bus width.

**7. (a)** The XOR gives A ⨁ B and the NAND gives NOT(B⋅C) [1]; the AND joins them: **P = (A ⨁ B)⋅NOT(B⋅C)** [1].
**(b)**

| A | B | C | A ⨁ B | NOT(B⋅C) | P |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 |

A ⨁ B column correct [1]; NOT(B⋅C) column correct [1]; P column correct [1]. **[5]**
*Examiner insight:* Intermediate columns show working that can still earn credit if the final column slips.

**8. (a)** An AND gate with inputs A and C, followed by a NOT gate, or a single NAND gate with inputs A and C [1]. An OR gate with inputs B and C [1]. An AND gate whose inputs are the NAND output and the OR output, giving Z [1].
**(b)** **A = 0** [1]. **[4]**
*Examiner insight:* C feeds two gates; a diagram that draws C into only one of them describes a different expression.

**9. (a)** Factor out A: A⋅(B + B̅⋅C) [1]. Use A + A̅⋅B = A + B with B in place of A: B + B̅⋅C = B + C [1]. **A⋅(B + C)** [1].
**(b)** De Morgan: NOT(A̅ + B) = NOT(A̅)⋅B̅ = A⋅B̅ [1]. So the expression is A⋅B̅ + A⋅B = A⋅(B̅ + B) [1]. B̅ + B = 1 and A⋅1 = A, so **A** [1]. **[6]**
*Examiner insight:* Show the identity used at each step; a bare answer may lose credit.

**10. (a)** Inputs A and B both feed an XOR gate, whose output is the sum S, and an AND gate, whose output is the carry C [1]. Truth table: 0, 0 gives S = 0, C = 0; 0, 1 and 1, 0 give S = 1, C = 0 [1]; 1, 1 gives S = 0, C = 1 [1].
**(b)** A ⨁ B = 0 and sum = 0 ⨁ 1 = **1** [1]. A⋅B = 1 and carry-in⋅(A ⨁ B) = 0 [1]. Carry-out = 1 + 0 = **1** [1].
**(c)** Right-hand bits: 1 + 1 gives sum 0, carry 1 [1]. Left-hand bits: 1 + 1 + 1 gives sum 1, carry-out 1, so the output is **110** (3 + 3 = 6) [1]. **[8]**
*Examiner insight:* Check every adder trace against ordinary arithmetic: 1 + 1 + 1 = 3 = binary 11, so both outputs must be 1.

**11.** Both flip-flops sample on the same edge, so Q₂ takes the old Q₁.
Edge 1: **Q₁ = 1, Q₂ = 0** [1]. Edge 2: **Q₁ = 0, Q₂ = 1** [1]. Edge 3: **Q₁ = 1, Q₂ = 0** [1]. Edge 4: **Q₁ = 1, Q₂ = 1** [1]. **[4]**
*Examiner insight:* Copying the new Q₁ into Q₂ on the same edge loses marks; Q₂ lags one edge behind.

**12.** Indicative points, one mark each up to 8:

- Laptop SSDs have no moving parts, so they survive knocks on rough ground [1].
- SSDs use less power, helping battery life [1].
- SSDs give fast access to footage [1].
- SSDs cost more per gigabyte, so laptop capacity is limited and footage must be moved off regularly [1].
- Hard disks are cheapest per gigabyte with large capacity, suiting the archive at base [1].
- Their slower access matters little for rarely opened footage [1].
- Cloud storage is unusable in the field without Internet, and large uploads are slow [1].
- Recommendation: laptop SSDs, a hard disk archive at base, and cloud as an off-site backup where the base connection allows, each justified [1]. **[8]**
*Examiner insight:* "Evaluate" needs points on both sides and a recommendation tied to this team's conditions; a generic feature list scores poorly.

## Where marks are usually lost

- Stopping an addressable memory calculation at 2ⁿ without multiplying by the location size.
- Placing the address in the MBR or the instruction in the MAR during fetch.
- Leaving out which bus carries the address and which carries the instruction.
- Describing interrupt steps without saying why the volatile environment is saved.
- Using De Morgan without swapping AND and OR.
- Recommending storage without linking each choice to the scenario.

## Next steps

- [Computer organisation and architecture revision notes](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-revision-notes/)
- [Computer organisation and architecture study guide](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Exam technique for this course](/resources/oxfordaqa-a-level-computer-science-exam-preparation/)
- [Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Book a free trial class](/trial/)
- [Printable topic checklist](/checklists/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. These questions draw on section 3.7, Computer organisation and architecture.
