---
title: "OxfordAQA A-Level Computer Science (9645): The processor and its components -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Processor Components Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "the-processor-and-its-components-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.7.2 The processor and its components: registers, ALU, control unit, clock and a register trace, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.7.2 The processor and its components** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the ALU, control unit, clock, general-purpose registers and the dedicated registers PC, CIR, MAR, MBR and SR. Assembly instructions follow the Standard OxfordAQA assembly language instruction set. In traces, each instruction occupies one memory location.

Related pages: [processor study guide](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components/) ·
[processor revision notes](/resources/oxfordaqa-a-level-computer-science-9645-processor-its-components-revision-notes/) ·
[computer organisation and architecture practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/)

## Section A

**1.** State the purpose of the program counter (PC). **[1]**

**2.** State the difference between the memory address register (MAR) and the memory buffer register (MBR). **[2]**

**3.** A processor has a clock speed of 3.2 GHz.

**(a)** State what is meant by clock speed. **[1]**
**(b)** Calculate the time for one clock cycle, in nanoseconds. **[2]**

**4.** Explain why a processor contains general-purpose registers when it can already read values from main memory. **[2]**

**5.** Name the register that holds the instruction while it is being decoded and state which component decodes it. **[2]**

## Section B

**6.** Describe the roles of the ALU and the control unit and explain how they differ. **[4]**

**7.** The following instructions are stored at addresses 200, 201 and 202. Location 40 holds the value 15.

```
LDR R0, 40
SUB R0, R0, #6
STR R0, 41
```

**(a)** State the values in the PC, MAR, MBR and CIR once the first instruction has been fetched but not yet executed. **[3]**
**(b)** State the value in R0 after the second instruction has been executed. **[1]**
**(c)** State the value held in the MBR when the third instruction is executed and say why. **[2]**

**8.** Register R2 holds 20. The next two instructions are:

```
CMP R2, #25
BGE done
```

**(a)** Explain what the ALU does when `CMP R2, #25` is executed. **[2]**
**(b)** Explain the part played by the status register. **[2]**
**(c)** State whether the program counter is changed by `BGE done`, giving a reason. **[2]**

**9.** The ALU is given the 8-bit values 10110100 and 01101101 and is told to perform AND.

**(a)** Give the result. **[2]**
**(b)** The ALU instead adds the two values. Give the 8-bit result and state whether it fits in 8 bits. **[2]**

**10.** A student says: "A processor with a higher clock speed is always faster". Evaluate this statement. **[3]**

## Answers

**1.** It holds the address of the next instruction to be fetched [1]. **[1]**

**2.** The MAR holds an **address** (of the location to be read or written) [1]; the MBR holds the **data** (or instruction) read from, or about to be written to, that location [1]. **[2]**

**3. (a)** The number of clock pulses (cycles) per second [1]
**(b)** 1 ÷ 3.2 × 10^9 [1] = **0.3125 ns** [1]

**4.** Registers are inside the processor and much faster to access than main memory [1]. Keeping values in registers avoids transfers over the buses, so calculations run faster [1]. **[2]**

**5.** The **current instruction register (CIR)** [1]; the **control unit** decodes it [1]. **[2]**

**6.** ALU: carries out arithmetic operations and logical operations such as AND, OR and comparisons [1]. Control unit: decodes instructions [1] and sends control signals to the ALU, registers and buses [1]. Difference: the ALU performs the calculations and the control unit coordinates and directs them without calculating [1]. **[4]**

**7. (a)** PC = **201** [1]; MAR = **200** [1]; MBR and CIR both hold **`LDR R0, 40`** [1]. **[3]**
**(b)** 15 − 6 = **9** [1]
**(c)** The MBR holds **9** [1], because the value is passed through the MBR on its way to memory when it is stored [1]. **[2]**
*Examiner insight:* by the time the `STR` is executed, the MBR has been used for the fetch of the instruction first. It is reloaded with the value to be stored during execution.

**8. (a)** The ALU compares the value in R2 (20) with 25 [1]. No value is stored in R2; only the outcome is kept [1]. **[2]**
**(b)** The status register records the outcome of the comparison as flags [1], so that the later `BGE` instruction can test it ("20 is not greater than or equal to 25") [1]. **[2]**
**(c)** No, in this case the condition is not met [1], so the PC is not changed and simply continues to the next instruction (if it had been met, the address of `done` would be copied into the PC) [1]. **[2]**

**9. (a)** 10110100 AND 01101101 = **00100100** [2].
**(b)** 180 + 109 = 289, which is more than 255 [1]. In 8 bits the result is **00100001** (33), so it does **not fit** and overflow has occurred [1]. **[2]**

**10.** The statement is not always true [1]. A higher clock speed means more cycles per second, so more steps can be started each second [1]. But performance also depends on other factors, for example the number of cores, cache size, word length and bus widths, so a lower-clocked processor with other advantages could be faster [1]. **[3]**

## Frequently asked questions

**Is the status register the same as the ALU?**
No. The ALU performs the operation. The status register is a separate dedicated register that records flags describing the outcome.

**Do I need to know the names of individual flags?**
The specification does not list them. Know that the status register records the outcome of operations, such as comparisons, so that later instructions can use it.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.2 The processor and its components.
