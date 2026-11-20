---
title: "OxfordAQA A-Level Computer Science (9645): Instruction format -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Instruction Format Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8 – Machine code and assembly language"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 8.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
    subtopic: "instruction-format-oxfordaqa-alevel-cs"
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.8.1: instruction sets, opcode and operand fields, encoding and decoding, and addressing modes, with answers."
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

These questions practise sub-topic **3.8.1 Instruction format** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the instruction set, the opcode, addressing mode and operands, and immediate, direct and indirect addressing. Assembly instructions follow the Standard OxfordAQA assembly language instruction set, and `<memory ref>` is written as a decimal address.

Related pages: [instruction format study guide](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format/) ·
[instruction format revision notes](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-revision-notes/) ·
[machine code and assembly language practice questions](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-practice/)

## Section A

**1.** State what is meant by a processor instruction set and explain why it is described as processor specific. **[3]**

**2.** Name the three parts of an instruction. **[3]**

**3.** State one difference between machine code and assembly language. **[1]**

**4.** Name the addressing mode used by each instruction.

**(a)** `MOV R2, #9` **[1]**
**(b)** `LDR R0, [R1]` **[1]**
**(c)** `ADD R3, R3, R4` **[1]**

## Section B

**5.** A processor uses 12-bit instructions: a 3-bit opcode, then a 2-bit addressing mode, then a 7-bit operand. Mode codes are 00 immediate, 01 direct and 10 indirect.

**(a)** Calculate the number of different opcodes. **[1]**
**(b)** Calculate the largest unsigned value the operand field can hold. **[1]**
**(c)** Decode the instruction `101100000101`. Give the opcode, the mode and the operand as denary numbers, and say what the operand represents. **[4]**
**(d)** Encode an instruction with opcode 5, direct addressing and operand 100. Give the result in binary and in hexadecimal. **[3]**

**6.** The state of a computer is: R3 = 30, memory location 30 holds 8, memory location 3 holds 99.

The following instructions are executed in order.

```
MOV R0, #30
LDR R1, 30
LDR R2, [R3]
LDR R4, 3
```

State the values held in R0, R1, R2 and R4 afterwards. **[4]**

**7.** Explain why indirect addressing is useful when processing the items in an array held in consecutive memory locations. **[3]**

**8.** The specification describes a 32-bit ARM data processing instruction in which 12 bits hold the opcode, addressing mode and other information, and 20 bits hold the operands. Four bits give the opcode, one bit gives the addressing mode for operand2, and the operands are two 4-bit register numbers and a 12-bit operand2.

**(a)** Calculate the number of bits available for other information. **[1]**
**(b)** State the largest unsigned value that can be stored in operand2. **[1]**
**(c)** State how many different registers can be numbered by a 4-bit register field. **[1]**

**9.** Explain why `HALT` and `ADD R1, R2, #7` are likely to use different layouts of bits. **[2]**

**10.** A programmer has a program written in machine code for one type of processor and wants to run it on a different type. Explain why this is unlikely to work without changes. **[2]**

**11.** The OxfordAQA instruction set has general-purpose registers numbered 0 to 12. Calculate the minimum number of bits needed to number them, and justify your answer. **[2]**

## Answers

**1.** An instruction set is the complete set of instructions that a processor can recognise and execute [1]. Each processor (family) has its own instruction set, with its own operations and binary patterns [1], so code for one type will generally not run on another [1]. **[3]**

**2.** Opcode [1], addressing mode [1], operand(s) [1]. **[3]**

**3.** Machine code is written in binary, whereas assembly language uses mnemonics [1]. **[1]**

**4. (a)** Immediate [1] **(b)** Indirect [1] **(c)** Direct (operand2 is a register number) [1]

**5. (a)** 2^3 = **8** [1]
**(b)** 2^7 − 1 = **127** [1]
**(c)** Split `101` | `10` | `0000101` [1]. Opcode = **5** [1], mode = 2, which is **indirect** [1], operand = **5**, which names register R5 because the mode is indirect, so the contents of R5 are the memory address from which the value is fetched [1]. **[4]**
**(d)** Opcode 101, mode 01, operand 1100100 [1]. Binary: **101011100100** [1]. Hexadecimal: 1010 1110 0100 = **AE4** [1]. **[3]**

**6.** R0 = **30** (immediate) [1]. R1 = **8** (direct: contents of location 30) [1]. R2 = contents of the location whose address is in R3, which is location 30, so **8** [1]. R4 = contents of location 3 = **99** [1]. **[4]**
*Examiner insight:* R1 and R2 are equal here, because R3 holds the address 30 that the direct instruction named. Do not assume the two modes always give different values.

**7.** The address is held in a register rather than fixed in the instruction [1]. After each access, the register can be increased by one [1], so the same instruction, repeated in a loop, reads each item in turn [1]. **[3]**

**8. (a)** 12 − 4 − 1 = **7** bits [1]
**(b)** 2^12 − 1 = **4 095** [1]
**(c)** 2^4 = **16** registers [1]

**9.** `HALT` needs no operands, while `ADD R1, R2, #7` needs two registers and a value [1]. The bits are therefore shared out differently between opcode, mode and operands for different types of instruction [1]. **[2]**

**10.** Each processor type has its own instruction set, so the same binary pattern may mean something different, or nothing, on another type [1]. The program would have to be rewritten, or translated, for the new processor's instruction set [1]. **[2]**

**11.** 13 registers need more than 8 values, so 3 bits (8 values) are not enough [1]. 4 bits give 16 values, which is enough, so the minimum is **4 bits** [1]. **[2]**

## Frequently asked questions

**Do I need to remember the ARM instruction format?**
No. The specification states that knowledge of the format of a particular instruction set is not required. You must be able to work from a format that you are given.

**Is `ADD R1, R1, R2` direct or indirect?**
Direct. The specification says "address" in direct addressing can mean a register number, so a register operand2 is direct addressing.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.8.1 Instruction format.
