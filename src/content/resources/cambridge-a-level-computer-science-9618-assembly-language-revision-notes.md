---
title: "Cambridge A Level Computer Science (9618): Assembly Language -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4 – Processor Fundamentals"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "processor-fundamentals"
    subtopic: "assembly-language"
description: "Revision notes for Cambridge 9618 section 4.2: instruction set by group, addressing modes, the two-pass assembler, tracing rules, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 4.2 Assembly Language of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. Questions use the instruction set printed in the syllabus and assume one general purpose register, the Accumulator (ACC); IX is the Index Register. The [assembly language study guide](/resources/cambridge-a-level-computer-science-9618-assembly-language/) has full worked traces; the [assembly language practice questions](/resources/cambridge-a-level-computer-science-9618-assembly-language-practice/) test them.

## Key terms

| Term | Meaning |
|---|---|
| Machine code | Binary instructions executed directly by the processor |
| Assembly language | Low-level language using mnemonics; usually one instruction per machine code instruction |
| Opcode | The part of an instruction that says which operation to perform |
| Operand | The value or address the operation uses |
| Mnemonic | A short code for an opcode, such as LDD |
| Label / symbolic address | A name standing for an address |
| Assembler | Translates assembly language into machine code |
| Symbol table | Table of labels and their addresses built in pass 1 |
| Forward reference | A label used before the line that defines it |

**Operand prefixes:** # denary, B binary, & hexadecimal; no prefix = address.

## Instruction set by group

| Group | Instruction | Effect |
|---|---|---|
| Data movement | LDM #n | ACC ← n |
| | LDD addr | ACC ← contents of addr |
| | LDI addr | ACC ← contents of (address held at addr) |
| | LDX addr | ACC ← contents of (addr + IX) |
| | LDR #n | IX ← n |
| | MOV IX | IX ← ACC |
| | STO addr | addr ← ACC |
| Arithmetic | ADD addr / ADD #n | ACC ← ACC + contents / + n |
| | SUB addr / SUB #n | ACC ← ACC − contents / − n |
| | INC reg / DEC reg | Add / subtract 1 (ACC or IX) |
| Compare | CMP addr / CMP #n | Compare ACC with contents / with n |
| | CMI addr | Compare ACC with contents of (address held at addr) |
| Jumps | JMP addr | Always jump |
| | JPE addr | Jump if last compare True |
| | JPN addr | Jump if last compare False |
| I/O | IN | ACC ← ASCII value of key pressed |
| | OUT | Display character whose ASCII value is in ACC |
| End | END | Return control to the OS |

## Addressing modes

| Mode | Operand means | Example (memory 60 → 75, 61 → 4, 75 → 30; IX = 1) |
|---|---|---|
| Immediate | The value itself | LDM #60 → ACC = 60 |
| Direct | Address of the value | LDD 60 → ACC = 75 |
| Indirect | Address holding the address of the value | LDI 60 → 60 → 75 → ACC = 30 |
| Indexed | Base address; IX is added | LDX 60 → address 61 → ACC = 4 |
| Relative | Offset from the current instruction's address (or a base) | Lets code run wherever it is loaded |

## Two-pass assembler

**Pass 1:** read lines, remove comments, count addresses, build the **symbol table** (labels and addresses), including forward references.
**Pass 2:** read again, convert mnemonics to binary opcodes, replace labels with addresses from the symbol table, output machine code, report errors.

Why two passes? Forward references: a label's address is not known when it is first used.

## Tracing rules

1. One row per instruction **executed** (loops repeat rows).
2. Columns: ACC, IX if used, each memory location that changes, output if any.
3. Write a value only when it changes.
4. STO changes memory, not ACC.
5. CMP changes nothing visible; it sets the outcome for JPE/JPN.
6. For LDX, address = operand + IX; for LDI, follow two steps.
7. Stop at END, and check the loop end condition.

## Mini trace

```
LDM #3
STO 90
LDD 90
ADD #4
STO 91
END
```

ACC: 3, then 3, then 7. Memory 90 = 3; memory 91 = 7.

## Exam traps

- LDM #n loads n; LDD n loads the contents of address n.
- Indirect needs two look-ups.
- JPE = jump if equal (True); JPN = jump if not equal (False).
- INC IX changes IX, not ACC.
- Pass 1 builds the symbol table; pass 2 generates code.
- Only one general purpose register (ACC) in 9618 questions.

## Self-test

1. What is the relationship between assembly language and machine code?
2. What does # mean in LDM #25?
3. Memory 40 holds 52 and memory 52 holds 9. What does LDI 40 load?
4. IX = 3. What address does LDX 100 use?
5. What is a forward reference?
6. State **one** task carried out in pass 1.
7. State **one** task carried out in pass 2.
8. ACC = 12 and memory 70 holds 12. CMP 70 is followed by JPE 300. What happens?
9. Which group does CMI belong to?
10. Give **one** advantage of indexed addressing.
11. ACC holds 72. What does OUT display if the ASCII code for "A" is 65?
12. Why does relative addressing make code relocatable?

### Answers

1. Each assembly language instruction is usually a mnemonic form of one machine code instruction, and an assembler translates one into the other.
2. The operand is a denary number.
3. **9**: 40 holds 52, and 52 holds 9.
4. 100 + 3 = **103**.
5. A label used in an instruction before the line where it is defined.
6. Any one: build the symbol table; record label addresses; remove comments; count instruction addresses.
7. Any one: replace mnemonics with opcodes; replace labels with addresses; produce machine code; report errors.
8. The comparison is True, so the program jumps to address 300.
9. **Compare** instructions (with indirect addressing).
10. One instruction can access consecutive locations, such as array elements, by changing IX in a loop.
11. **H** (72 is 7 more than 65).
12. Addresses are worked out as offsets from the current instruction, so no absolute addresses need changing when the program is loaded elsewhere.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 4.2 Assembly Language. Published by Cambridge International.
