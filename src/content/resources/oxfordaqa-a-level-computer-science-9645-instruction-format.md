---
title: "OxfordAQA A-Level Computer Science (9645): Instruction format"
seoTitle: "OxfordAQA A-Level CS 9645 Instruction Format Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.8.1 in depth: instruction sets, opcode, addressing mode and operands, bit fields, and immediate, direct and indirect addressing."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.8.1 Instruction format** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.8 Machine code and assembly language (AS). The specification asks you to understand the term **processor instruction set** and that an instruction set is processor specific; to know that instructions consist of an **opcode, an addressing mode and one or more operands** (a value, a memory address or a register); to know that the format may depend on the type of instruction; to understand and apply **immediate, direct and indirect** addressing; and to know that machine code is expressed in **binary** and assembly language as **mnemonics**.

For quick recall use the [instruction format revision notes](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-revision-notes/), and test yourself with the [instruction format practice questions](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-practice/). The wider [machine code and assembly language study guide](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language/) covers both sub-topics of topic 3.8. This page concentrates on how an instruction is built from bit fields, with new worked examples of encoding and decoding, and then on the three addressing modes. Writing whole programs is the subject of the [assembly language programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming/).

## Processor instruction sets

A processor can only carry out the instructions it was designed to recognise. The complete collection of those instructions is its **instruction set**. It includes operations such as load, store, add, compare, branch and halt. Each processor family has its own set. The binary pattern that means "add" on one family may mean something else, or nothing at all, on another. This is what is meant by saying that an instruction set is **processor specific**.

Two results follow.

- A machine-code program written for one type of processor will not normally run on a different type. It would need to be rewritten or translated for the new instruction set.
- A compiler or assembler must be told which processor it is producing code for.

The specification states that you are not required to know the format of any particular instruction set. In the exam you will be shown a format, and your job is to read it correctly. The OxfordAQA assembly language you use in questions is based on the ARM instruction set.

## The three parts of an instruction

Every instruction is built from fields.

- The **opcode** says which operation to perform: load, add, branch and so on.
- The **addressing mode** says how the operand is to be interpreted.
- One or more **operands** give the data to be used: a **value**, a **memory address** or a **register**.

In **machine code** these fields are stored together as a pattern of bits. In **assembly language** the same instruction is written with a **mnemonic** such as `ADD` in place of the opcode, and with readable operands such as `R3` or `#20`.

### Counting patterns

An opcode field of *n* bits can represent 2^*n* different operations. A 4-bit opcode gives 16 operations, and a 5-bit opcode gives 32. An unsigned operand field of *m* bits can hold the values 0 to 2^*m* − 1, so an 8-bit operand field holds values up to 255. If an operand names a register, the field must be wide enough to number all the registers. The OxfordAQA instruction set has registers R0 to R12. That is 13 registers, which needs 4 bits because 3 bits only reach 8 values.

### The format depends on the type of instruction

Different instructions need different amounts of information, so their layout can differ.

| Instruction | What it needs | Operands |
|---|---|---|
| `HALT` | No data at all | None |
| `B loop` | The place to jump to | One (an address or label) |
| `LDR R1, 40` | A register and a memory address | Two |
| `ADD R1, R2, #7` | Two registers and a value | Three |

A single fixed layout for all of these would waste bits in the short ones. So, in practice, the way the bits are shared out between opcode, mode and operands can depend on the type of instruction.

### The specification's real example

The specification describes a 32-bit ARM data processing instruction.

- **12 bits** hold the opcode, the addressing mode and other information: 4 bits for the opcode, 1 bit for the addressing mode of the last operand (called operand2), and the remaining 7 bits for other information, such as the condition under which the instruction should be executed.
- **20 bits** hold up to three operands: 2 × 4 bits for two register numbers, and 12 bits for operand2. Operand2 can be a register number or a value, depending on the addressing mode bit.

Check: 4 + 1 + 7 = 12 bits, 4 + 4 + 12 = 20 bits, and 12 + 20 = 32. The 4-bit register fields can number 16 registers, and a 12-bit field can hold an unsigned value up to 4 095.

## Worked example 1: decoding a made-up instruction

A processor uses **14-bit** instructions, divided into a **4-bit opcode**, a **2-bit addressing mode** and an **8-bit operand**. The mode codes are 00 immediate, 01 direct and 10 indirect. In this example opcode 0110 means "load".

Decode `01101000000101`.

1. Split into fields of 4, 2 and 8 bits: `0110` | `10` | `00000101`.
2. Opcode 0110 = 6, which is "load".
3. Mode 10 = **indirect**.
4. Operand 00000101 = 5. In indirect mode, the operand names a register, so this is register **R5**.

Suppose R5 holds 60 and memory location 60 holds 17. The instruction reads the address from R5 (60) and loads the value at that address, so the register receives **17**. This made-up format has no destination field, so assume the result always goes to R1. In assembly language it would look like `LDR R1, [R5]`.

Written in hexadecimal, the 14 bits `00 0110 1000 0001 01` need two leading zeros to fill four hex digits: `0001 1010 0000 0101`, which is **1A05**.

## Worked example 2: encoding an instruction

Encode "add the immediate value 37" using opcode 0011 (add) in the same format. As before, assume the other operand and the destination are a fixed register, so the instruction carries only the value.

1. Opcode: 0011.
2. Mode: immediate, so 00.
3. Operand: 37 in 8 bits is 00100101.
4. Join: `0011` `00` `00100101` = `00110000100101`.
5. In hexadecimal (padding with two zeros on the left): `0000 1100 0010 0101` = **0C25**.

Check the largest immediate that this format can hold: 2^8 − 1 = 255. An attempt to encode 300 would not fit, because it needs 9 bits.

## Addressing modes

The addressing mode tells the processor what the operand means. There are three to know.

| Mode | The operand is... | OxfordAQA form |
|---|---|---|
| Immediate | The value to operate on | `MOV R1, #20` |
| Direct | The address (a memory address or a register number) from which to fetch the value | `LDR R1, 20` or `ADD R1, R1, R2` |
| Indirect | A register that holds the memory address from which to fetch the value | `LDR R1, [R2]` |

The specification says that "address" in direct addressing can mean either a main memory address or a register number. So `ADD R1, R1, R2`, in which operand2 is the register R2, uses direct addressing.

### Worked example 3: the same operand, three modes

The processor state is: R2 = 60, memory location 20 = 60, memory location 60 = 17, memory location 61 = 44.

| Instruction | Mode | What happens | Result in R1 |
|---|---|---|---|
| `MOV R1, #20` | Immediate | The value 20 itself is copied | 20 |
| `LDR R1, 20` | Direct | The value at memory address 20 is loaded | 60 |
| `LDR R1, [R2]` | Indirect | R2 holds 60; the value at address 60 is loaded | 17 |
| `ADD R1, R2, #1` | Immediate | R2 + 1 = 61 | 61 |
| `ADD R1, R2, R2` | Direct (register) | R2 + R2 = 120 | 120 |

The operand 20 in the first two rows produces different results, which is the point of an addressing mode: the same bits mean different things depending on the mode.

### Why indirect addressing is useful

With indirect addressing, the instruction does not fix the memory address. The address is in a register that can be changed while the program runs. After `LDR R1, [R2]` has read location 60, adding 1 to R2 and repeating the same instruction reads location 61, which holds 44. One instruction inside a loop can therefore step through a whole block of memory, such as an array.

## Machine code and assembly language

| | Machine code | Assembly language |
|---|---|---|
| Form | Binary patterns | Mnemonics and readable operands |
| Example (made-up format) | `00110000100101` | `ADD R1, R1, #37` |
| Read by | The processor directly | Programmers; an assembler converts it to machine code |
| Processor specific? | Yes | Yes |

Assembly language is processor specific because it corresponds one-to-one with the machine instructions of its processor. Number-base conversions often appear in these questions, because hexadecimal is used to write binary compactly.

## Exam technique

- **Split the bits first** using the field widths given, then convert each field.
- **Say which mode applies** before working out the value. The same operand has a different meaning in each mode.
- **Follow the register.** In indirect addressing, the register's contents are the address, and the value is at that address.
- **Count carefully.** Work out the number of opcodes (2 to the power of the bits) and the largest operand (2 to the power of the bits, minus 1).
- **Explain "processor specific" fully.** Each processor family has its own instruction set, so code for one will not run on another.

## Common mistakes

- Treating an immediate value as an address.
- Using the register number instead of the register's contents in indirect addressing.
- Giving the largest operand as 2^*m* instead of 2^*m* − 1.
- Forgetting that a register field must be wide enough for every register.
- Saying assembly language is not processor specific.
- Mixing up the bit order when converting to hexadecimal; group from the right-hand end.

## Next steps

- [Instruction format revision notes](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-revision-notes/)
- [Instruction format practice questions](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-practice/)
- [Assembly language programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.8.1 Instruction format.
