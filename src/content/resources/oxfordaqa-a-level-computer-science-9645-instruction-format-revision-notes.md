---
title: "OxfordAQA A-Level Computer Science (9645): Instruction format -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Instruction Format Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.8.1: instruction sets, opcode, addressing mode and operands, bit-field sums, three addressing modes and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.8.1 Instruction format** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.8 Machine code and assembly language). For longer explanations and worked examples, see the [instruction format study guide](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format/); then practise with the [instruction format practice questions](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-practice/).

## What the specification requires

- Understand **processor instruction set** and know that it is **processor specific**.
- Know an instruction consists of an **opcode, an addressing mode and one or more operands** (a value, a memory address or a register).
- Know the format may depend on the **type of instruction**. Knowledge of the format of a particular instruction set is not required.
- Understand and apply **immediate, direct and indirect** addressing.
- Know that machine code is in **binary** and assembly language uses **mnemonics**.

## Key terms

| Term | Meaning |
|---|---|
| Instruction set | All the instructions a particular processor can execute |
| Opcode | The part of an instruction that says which operation to perform |
| Addressing mode | How the operand is to be interpreted |
| Operand | The data for the instruction: a value, a memory address or a register |
| Machine code | Instructions as binary patterns |
| Assembly language | Instructions written as mnemonics such as ADD and LDR |
| Mnemonic | A short readable name for an opcode |
| Processor specific | Valid only for the processor family it was designed for |

## Addressing modes

| Mode | The operand is... | OxfordAQA example | Meaning |
|---|---|---|---|
| Immediate | The value itself | `MOV R1, #20` | R1 = 20 |
| Direct | An address: memory address or register number | `LDR R1, 20` / `ADD R1, R1, R2` | R1 = contents of location 20 / R1 + R2 |
| Indirect | A register holding a memory address | `LDR R1, [R2]` | R1 = contents of the location whose address is in R2 |

Operand2 in the instruction set is `#n` (a decimal value) or `Rm` (the value in register m).

## Worked reminder: three modes

R2 = 60, location 20 holds 60, location 60 holds 17.

- `MOV R1, #20` gives R1 = 20 (immediate).
- `LDR R1, 20` gives R1 = 60 (direct).
- `LDR R1, [R2]` gives R1 = 17 (indirect: R2 holds 60, location 60 holds 17).

## Bit-field sums

- n bits of opcode give **2^n** operations.
- m bits of unsigned operand hold values **0 to 2^m − 1**.
- Registers numbered 0 to 12 are 13 registers and need **4 bits**.
- Total instruction size = opcode bits + mode bits + operand bits (+ any other fields).

*The specification's 32-bit ARM example.* 12 bits for the opcode (4), addressing mode of operand2 (1) and other information (7); 20 bits for operands (4 + 4 + 12). Operand2 holds a register number or a value, depending on the mode bit.

## Decoding method

1. Split the bits using the field widths in the question.
2. Convert each field to denary.
3. Look up the opcode and the mode code.
4. Decide what the operand means in that mode.
5. For indirect, find the register, then use its contents as the address.

*Example (12-bit instruction: 3-bit opcode, 2-bit mode, 7-bit operand; mode codes 00 immediate, 01 direct, 10 indirect).* `101100000101` splits as `101` | `10` | `0000101`: opcode 5, mode 2 (indirect), operand 5. In indirect mode the operand names a register, so the processor uses the contents of R5 as the memory address.

## Hex and binary

Group binary in fours from the right: `1011 0000 0101` is hex **B05**. A 12-bit instruction fills exactly three hex digits; a 14-bit instruction needs two leading zeros to fill four.

## Format depends on the type

| Instruction | Operands needed |
|---|---|
| `HALT` | None |
| `B loop` | One (the branch target) |
| `LDR R1, 40` | Two |
| `ADD R1, R2, #7` | Three |

## Machine code against assembly

| | Machine code | Assembly language |
|---|---|---|
| Written in | Binary | Mnemonics and readable operands |
| Run by | The processor directly | Translated by an assembler first |
| Processor specific | Yes | Yes |

## Worked reminder: encoding

Encode opcode 5, direct mode, operand 100 in the 12-bit format (3 + 2 + 7 bits).

1. Opcode 5 = `101`.
2. Mode direct = `01`.
3. Operand 100 = `1100100` in 7 bits.
4. Join: `101` `01` `1100100` = `101011100100`.
5. Group in fours: `1010` `1110` `0100` = **AE4**.

If the value does not fit the field (for example, 130 in a 7-bit operand, because the maximum is 127), the instruction cannot be encoded in that format.

## Which mode? Quick decisions

| What you see | Mode |
|---|---|
| `#` followed by a number | Immediate |
| A number or label naming a memory location | Direct |
| A register name used as operand2 | Direct (register number) |
| A register in square brackets, `[R2]` | Indirect |

## Exam traps

- **Immediate as address.** `#20` is the value 20, not location 20.
- **Indirect.** The register's contents are the address; the value is in memory at that address.
- **Largest value.** m bits give 2^m − 1 as the largest unsigned value.
- **Register number needs bits.** 13 registers need 4 bits.
- **Unit mistakes in hex.** Group from the right.
- **Processor specific.** Both machine code and assembly language depend on the processor.
- **Mode applies to the operand.** The opcode says what to do; the mode says how to find the data.

## Quick self-test

1. What is an instruction set?
2. Why is an instruction set processor specific?
3. Name the three parts of an instruction.
4. How many operations can a 6-bit opcode represent?
5. What is the largest unsigned value in a 9-bit operand field?
6. What does `LDR R1, [R3]` do if R3 = 90?
7. What is the result in R0 of `MOV R0, #75`?
8. Which addressing mode does `ADD R1, R1, R2` use?
9. How many bits are needed to number registers R0 to R12?
10. Write `0110 1010 0001` in hexadecimal.
11. Why can the format of a `HALT` instruction differ from that of an `ADD`?
12. Give one difference between machine code and assembly language.

### Answers

1. All the instructions that a particular processor can execute.
2. Each processor family is designed with its own instructions and binary patterns.
3. Opcode, addressing mode, operand(s).
4. 2^6 = 64.
5. 2^9 − 1 = 511.
6. It loads into R1 the value stored at memory address 90.
7. R0 = 75.
8. Direct, because operand2 is a register number.
9. 4 bits, because 13 registers need more than 3 bits.
10. 6A1.
11. `HALT` needs no operands, while `ADD` needs register and value operands, so the bits are shared out differently.
12. Machine code is binary; assembly uses mnemonics.

## Next steps

- [Instruction format study guide](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format/)
- [Instruction format practice questions](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-practice/)
- [Assembly language programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.8.1 Instruction format.
