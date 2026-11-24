---
title: "OxfordAQA A-Level Computer Science (9645): Assembly language programming"
seoTitle: "OxfordAQA A-Level CS 9645 Assembly Programming Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8 – Machine code and assembly language"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 8.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
    subtopic: "assembly-language-programming-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.8.2 in depth: writing and tracing assembly programs, translating pseudocode, loops, indirect addressing and bitwise operations."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.8.2 Assembly language programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.8 Machine code and assembly language (AS). The specification asks you to understand and apply the basic operations **load, add, subtract, store, branching (conditional and unconditional), compare, the logical bitwise operators (AND, OR, NOT, XOR), logical shift right and left, and halt**; and to use them to **write, trace and reason about** assembly language programs using immediate, direct and indirect addressing. A question could ask you to write a program to meet a written requirement or to implement an algorithm expressed in pseudocode. You should be able to convert pseudocode into assembly language and assembly language into pseudocode.

For quick recall use the [assembly language revision notes](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-revision-notes/), and test yourself with the [assembly language practice questions](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-practice/). The [machine code and assembly language study guide](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language/) covers the whole topic, and the [instruction format study guide](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format/) explains the three addressing modes. This page is about building programs: the patterns, and a fresh set of worked programs with traces.

## The instruction set you will be given

Questions use the Standard OxfordAQA assembly language instruction set, based on the ARM instruction set. A copy is printed in any exam paper with an assembly language question, so you do not memorise it, but you must be able to use it quickly. In this guide, `<memory ref>` is written as a decimal address, and text after `;` is a comment.

| Instruction | Effect |
|---|---|
| `LDR Rd, <memory ref>` | Load the value at that memory location into Rd |
| `LDR Rd, [Rn]` | Load the value at the address held in Rn into Rd |
| `STR Rd, <memory ref>` | Store Rd into that memory location |
| `STR Rd, [Rn]` | Store Rd at the address held in Rn |
| `ADD Rd, Rn, <operand2>` | Rd = Rn + operand2 |
| `SUB Rd, Rn, <operand2>` | Rd = Rn − operand2 |
| `MOV Rd, <operand2>` | Rd = operand2 |
| `CMP Rn, <operand2>` | Compare Rn with operand2 |
| `B label` | Always branch to label |
| `BEQ`, `BNE`, `BGT`, `BGE`, `BLT`, `BLE` | Branch if the last comparison met the condition |
| `AND`, `ORR`, `EOR Rd, Rn, <operand2>` | Bitwise AND, OR, XOR |
| `MVN Rd, <operand2>` | Bitwise NOT of operand2 |
| `LSL`, `LSR Rd, Rn, <operand2>` | Shift left or right by operand2 bits |
| `HALT` | Stop |

Operand2 is `#n` (the decimal value n) or `Rm` (the value in register m). Registers are R0 to R12. A label is an identifier followed by a colon, placed before an instruction.

## Pseudocode patterns and their assembly equivalents

The specification does not define its own pseudocode, so this guide uses a plain language-neutral style with `←` for assignment.

**Assignment and arithmetic.** Load the variables into registers, calculate, then store the answer.

```
total ← price + tax
```

```
LDR R0, 100     ; price
LDR R1, 101     ; tax
ADD R2, R0, R1
STR R2, 102     ; total
```

**Selection.** Compare, then branch around the part that should be skipped. Test for the **opposite** condition when you want to jump past the "then" part.

**Iteration.** A loop needs a label at the top, a test, and a `B` back to the label. A test-at-the-top (WHILE) loop compares first and leaves through a branch.

**Arrays.** Put the address of the current item in a register and use indirect addressing, `LDR R2, [R1]`, then add 1 to the register to step on.

## Worked program 1: the larger of two numbers

*Pseudocode:* if a ≥ b then larger ← a, otherwise larger ← b. The values are at locations 100 and 101, and the result goes in 102.

```
      LDR R0, 100
      LDR R1, 101
      CMP R0, R1
      BGE first     ; a >= b: result is a
      STR R1, 102   ; otherwise the result is b
      B end
first: STR R0, 102
end:  HALT
```

Trace with a = 37 and b = 52: 37 ≥ 52 is false, so the branch is not taken, `STR R1, 102` stores **52**, and `B end` skips the other store. With a = 80 and b = 45: 80 ≥ 45 is true, so the program jumps to `first` and stores **80**. With a = 60 and b = 60 the values are equal, `BGE` is taken and 60 is stored. The `B end` is essential: without it, the program would carry on into `first` and overwrite the result with a.

## Worked program 2: multiplication by repeated addition

*Pseudocode:*

```
product ← 0
WHILE count > 0
    product ← product + number
    count ← count - 1
ENDWHILE
```

The number is at location 110, the count at 111, and the product is stored at 112.

```
      LDR R0, 110     ; number
      LDR R1, 111     ; count
      MOV R2, #0      ; product
loop: CMP R1, #0
      BEQ done        ; leave when count is 0
      ADD R2, R2, R0
      SUB R1, R1, #1
      B loop
done: STR R2, 112
      HALT
```

Trace with number 6 and count 4. The table shows the registers at the end of each pass round the loop.

| Pass | R1 (count) | R2 (product) |
|---|---|---|
| start | 4 | 0 |
| 1 | 3 | 6 |
| 2 | 2 | 12 |
| 3 | 1 | 18 |
| 4 | 0 | 24 |

On the fifth test, `CMP R1, #0` finds R1 equal to 0, `BEQ done` is taken, and **24** is stored. If the count were 0 at the start, the loop body would never run and the product would be 0, which is correct.

## Worked program 3: counting values above a threshold

Five values are stored at locations 120 to 124: 14, 3, 22, 9 and 17. Count how many are greater than 10 and store the count at location 125.

```
      MOV R0, #0       ; count
      MOV R1, #120     ; pointer
      MOV R3, #10      ; threshold
loop: LDR R2, [R1]     ; indirect: value the pointer addresses
      CMP R2, R3
      BLE skip         ; not above the threshold
      ADD R0, R0, #1
skip: ADD R1, R1, #1
      CMP R1, #125
      BLT loop
      STR R0, 125
      HALT
```

| Pass | R1 at `LDR` | R2 | Above 10? | R0 after |
|---|---|---|---|---|
| 1 | 120 | 14 | yes | 1 |
| 2 | 121 | 3 | no | 1 |
| 3 | 122 | 22 | yes | 2 |
| 4 | 123 | 9 | no | 2 |
| 5 | 124 | 17 | yes | 3 |

After pass 5, R1 becomes 125, `CMP R1, #125` followed by `BLT loop` is false, and **3** is stored in location 125. Notice that there are two comparisons in the loop. A conditional branch always uses the **most recent** `CMP`, so each branch must follow the comparison it belongs to.

## Bitwise operations and shifts

Bitwise instructions work on each bit position separately. A shift moves every bit, and bits shifted out of the end are lost. For these examples assume registers are 8 bits, since the specification does not fix the size.

**Worked example.** Location 140 holds 182, which is 10110110 in binary.

```
      LDR R0, 140
      AND R1, R0, #15   ; keep the low four bits
      LSR R2, R0, #4    ; move the high four bits down
      AND R3, R0, #1    ; isolate the lowest bit
      LSL R4, R0, #3    ; shift left by three places
      STR R1, 141
      STR R2, 142
      HALT
```

- `AND` with #15 (00001111): 10110110 AND 00001111 = 00000110 = **6**.
- `LSR` by 4: 10110110 becomes 00001011 = **11**.
- `AND` with #1: the lowest bit of 10110110 is 0, so R3 = **0**, which shows that 182 is even.
- `LSL` by 3: 10110110 becomes 10110000 in 8 bits (the top three bits are lost), which is **176**. Without the loss, 182 × 8 would be 1 456.

The uses to remember: **AND** with a mask clears bits and extracts bits; **ORR** sets bits; **EOR** toggles bits; **MVN** inverts every bit; **LSL** by *n* multiplies by 2^*n* and **LSR** by *n* divides by 2^*n* (rounding down), provided no significant bits fall off the end.

## Converting assembly into pseudocode

Read the program line by line and describe what it does in terms of variables.

```
      LDR R0, 150
      MOV R1, #0
l1:   CMP R0, #1
      BLE fin
      LSR R0, R0, #1
      ADD R1, R1, #1
      B l1
fin:  STR R1, 151
      HALT
```

1. R0 is loaded from location 150. Call it `n`. R1 starts at 0. Call it `count`.
2. The loop continues while n > 1 (it leaves when n ≤ 1).
3. In the loop, n is shifted right by 1, which is n DIV 2, and count increases by 1.
4. Finally, count is stored.

```
count ← 0
WHILE n > 1
    n ← n DIV 2
    count ← count + 1
ENDWHILE
```

Trace with n = 40: n takes the values 40, 20, 10, 5, 2, 1, with count increasing to **5** before n reaches 1. The program counts how many times n can be halved before it reaches 1.

## Reasoning about a faulty program

The specification asks you to reason about programs, not only write them. Here is a program meant to add the five values at locations 120 to 124, but it never finishes.

```
      MOV R0, #0
      MOV R1, #120
loop: LDR R2, [R1]
      ADD R0, R0, R2
      CMP R1, #125
      BLT loop
      STR R0, 125
      HALT
```

1. Follow the pointer R1. It starts at 120 and the `LDR` uses it as an address.
2. Nothing in the loop changes R1, so `CMP R1, #125` always compares 120 with 125.
3. 120 < 125 is always true, so `BLT loop` always branches and the loop never ends. The program keeps adding the first value again and again.
4. The fix is to add `ADD R1, R1, #1` inside the loop, before the `CMP`. Then R1 steps through 120, 121, 122, 123 and 124, becomes 125 and the loop ends.

Two habits help. First, ask what changes on every pass. If nothing that the test uses changes, the loop cannot end. Second, check the first and last passes, because off-by-one mistakes appear there. If the test were `CMP R1, #124` with `BLT`, the last value would be missed.

## Exam technique

- **Plan with variables.** Decide which register holds which variable before you write any instructions.
- **CMP before every conditional branch**, and use the right condition. Test for the opposite condition to skip a block.
- **Label every jump target** and check that each label is followed by a colon where it is defined.
- **Do not forget `B` to jump past the "else" part**, and `HALT` at the end.
- **Trace with a table**: a row per pass and a column per register.
- **Check boundary cases**: an empty loop, a count of 0, equal values.

## Common mistakes

- Using the wrong branch condition (for example `BGT` where `BGE` is needed).
- Placing a second `CMP` between a comparison and the branch that was meant to use it, so the branch tests the wrong comparison.
- Using `LDR R1, 120` when `LDR R1, [R1]` is intended (direct instead of indirect).
- Forgetting to store the result back into memory with `STR`.
- Forgetting to update the counter or pointer inside the loop, so that it never ends.
- Writing `#` before a register or leaving it off a value in operand2.

## More on this topic

- [Assembly language programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-revision-notes/)
- [Assembly language programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-practice/)
- [Instruction format study guide](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.8.2 Assembly language programming. The Standard OxfordAQA assembly language instruction set is printed in section 6 of the specification.
