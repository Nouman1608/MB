---
title: "OxfordAQA A-Level Computer Science: Machine code and assembly language (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS Assembly Language Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Machine code and assembly language"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 8
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "machine-code-and-assembly-language"
description: "Original practice questions with worked answers on OxfordAQA A-level Computer Science assembly: addressing modes, tracing and writing programs."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

Topic 8, Machine code and assembly language (sections 3.8.1 and 3.8.2), is tested here, following Version 1.1 of OxfordAQA's International AS and A-level Computer Science (9645) specification, which applies to International AS exams in May/June 2025 and later and International A-level exams in May/June 2026 and later. It is all International AS content from the written Unit 2 paper. If the topic is new, start with the [study guide](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language/) or the [revision notes](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-revision-notes/). Also useful: the [9645 hub page](/boards/oxfordaqa/a-level/computer-science/), the [checklist to print](/checklists/oxfordaqa/a-level/computer-science/) and a [free diagnostic](/diagnostics/).

Write answers in the instruction set given in the appendix to the specification (Standard OxfordAQA assembly language instruction set). Memory references are decimal addresses. If a question says registers are 8 bits, bits moved or carried past bit 7 are lost.

## Questions

**1.** **(a)** Define the term processor instruction set. **[1]**
**(b)** Explain why a machine-code program for one processor type may not run on a different type. **[1]**
**(c)** Describe how an instruction is expressed in machine code and in assembly language. **[2]**

**2.** For the instruction `ADD R4, R2, #9`, identify the operation, the operands and the addressing mode used for the final operand. **[3]**

**3.** A processor uses 24-bit instructions: a 6-bit opcode, a 2-bit addressing mode (00 immediate, 01 direct, 10 indirect) and a 16-bit operand.

**(a)** State how many different opcodes are possible. **[1]**
**(b)** State the largest unsigned value the operand field can hold. **[1]**
**(c)** One instruction is 15012C in hexadecimal. Give its opcode in denary, its addressing mode and its operand in denary. **[3]**
**(d)** Explain why another instruction in this processor's set might use a different format. **[1]**

**4.** Register R6 holds 25. Memory location 25 holds 61 and location 61 holds 8. These instructions run in order:

```
MOV R1, #25
LDR R2, 25
LDR R3, [R6]
LDR R4, [R2]
```

**(a)** State the value in each of R1, R2, R3 and R4 afterwards. **[4]**
**(b)** Explain the difference between direct and indirect addressing, using this example. **[2]**

**5.** Registers are 8 bits. R1 holds 01101001.

**(a)** Give the result of `AND R2, R1, #240` in binary. **[1]**
**(b)** Give the result of `EOR R3, R1, #170` in binary. **[1]**
**(c)** Give the result of `MVN R4, R1` in binary. **[1]**
**(d)** Give the result of `LSR R5, R1, #3` in binary and denary. **[1]**
**(e)** Write one instruction that sets the most significant bit of R1, leaves the other bits unchanged and stores the result in R6. State R6 in denary. **[2]**

**6.** A code is stored in location 140. Write an assembly language program for this pseudocode, storing flag in location 141. **[5]**

```
IF code = 0 THEN
    flag ← 255
ELSE
    flag ← code AND 15
ENDIF
```

**7.** Consider this program.

```
      LDR R0, 60
      MOV R1, #0
loop: CMP R0, #0
      BEQ end
      AND R2, R0, #1
      ADD R1, R1, R2
      LSR R0, R0, #1
      B loop
end:  STR R1, 61
      HALT
```

**(a)** Convert the program into pseudocode. **[4]**
**(b)** State the value stored in location 61 if location 60 holds 45. **[1]**
**(c)** State the purpose of the program. **[1]**

**8.** Complete a trace table for this program, showing R0 and R1 after each pass of the loop, and state the final value in location 150. **[5]**

```
      MOV R0, #1
      MOV R1, #0
loop: ADD R1, R1, R0
      LSL R0, R0, #1
      CMP R0, #20
      BLE loop
      STR R1, 150
      HALT
```

**9.** A whole number is stored in location 110.

```
count ← 0
WHILE total ≥ 7
    total ← total - 7
    count ← count + 1
ENDWHILE
```

**(a)** Write an assembly language program for this pseudocode, where total starts as the value in location 110. Store count in location 111 and the final total in location 112. **[7]**
**(b)** State the values stored in 111 and 112 when location 110 holds 45. **[1]**

**10.** Five readings are held in locations 120 to 124. A threshold is held in location 130.

**(a)** Write an assembly language program that counts how many readings are greater than the threshold and stores the count in location 131. Use indirect addressing to access the readings. **[7]**
**(b)** The readings are 15, 42, 8, 40 and 51, and the threshold is 40. State the value stored in 131. **[1]**
**(c)** Explain why indirect addressing suits this task. **[1]**

**11.** Registers are 8 bits. A value x is held in location 170.

**(a)** Without a multiply instruction, write a program that stores 10x in location 171, using the fact that 10x = 8x + 2x. **[4]**
**(b)** Your program is run with x = 30. State the value stored in 171 and explain why it is not 300. **[2]**
**(c)** State the value in R0 after `LSR R0, R0, #1` if R0 held 23, and explain the result. **[2]**

## Answers

**1. (a)** The complete set of instructions that a particular processor can decode and execute [1].
**(b)** Instruction sets are processor specific, so the binary patterns may mean different operations, or nothing, on another processor [1].
**(c)** Machine code: as binary patterns [1]. Assembly language: as mnemonics, such as `ADD`, with readable operands [1]. **[4]**
*Examiner insight:* In (c) one point is needed for each form; "assembly is easier to read" describes an advantage, not how instructions are expressed.

**2.** Operation (opcode): add [1]. Operands: registers R4 and R2, and the value 9 [1]. Final operand: immediate addressing, shown by # [1]. **[3]**
*Examiner insight:* Name the mode for the operand you are asked about; describing R2 as "direct" does not answer the question about #9.

**3. (a)** 2⁶ = **64** [1].
**(b)** 2¹⁶ − 1 = **65535** [1].
**(c)** 15012C = 0001 0101 0000 0001 0010 1100; split 6 | 2 | 16: 000101 | 01 | 0000000100101100 [1]. Opcode **5**, mode **direct** [1]. Operand **300** [1].
**(d)** Different instruction types need different numbers of operands, for example a halt needs none [1]. **[6]**
*Examiner insight:* Write the full binary expansion before splitting; a slip in one hex digit shifts every field and loses all three values in (c).

**4. (a)** R1 = **25** (immediate) [1]. R2 = **61** (contents of 25) [1]. R3 = **61** (R6 holds 25, so contents of 25) [1]. R4 = **8** (R2 holds 61, so contents of 61) [1].
**(b)** In direct addressing the operand is the address itself: `LDR R2, 25` reads location 25 [1]. In indirect addressing the operand is a register containing the address: `LDR R4, [R2]` reads the location whose address is in R2 [1]. **[6]**
*Examiner insight:* Each register needs its own correct value; giving R3 = 25 shows the brackets have been ignored.

**5. (a)** 01101001 AND 11110000 = **01100000** [1].
**(b)** 01101001 XOR 10101010 = **11000011** [1].
**(c)** **10010110** [1].
**(d)** **00001101** = **13** [1].
**(e)** `ORR R6, R1, #128` [1]; R6 = 11101001 = **233** [1]. **[6]**
*Examiner insight:* Convert each decimal operand to 8-bit binary first and line the bits up; mental shortcuts often flip the wrong bits.

**6.**

```
       LDR R0, 140
       CMP R0, #0
       BNE other
       MOV R1, #255
       B store
other: AND R1, R0, #15
store: STR R1, 141
       HALT
```

Load code [1]; compare with #0 and branch to the ELSE part on not equal [1]; `MOV R1, #255` [1]; unconditional branch past the ELSE part [1]; `AND` with #15 and store in 141 [1]. Check: code 92 gives 12; code 0 gives 255. **[5]**
*Examiner insight:* Other correct structures, such as `BEQ` to the THEN part, are equally valid, but each must still stop both blocks running.

**7. (a)**

```
n ← value in location 60
count ← 0
WHILE n ≠ 0
    count ← count + (n AND 1)
    n ← n DIV 2
ENDWHILE
location 61 ← count
```

Initialise n and count [1]; loop while n ≠ 0 [1]; add the lowest bit to count [1]; halve n and store count after the loop [1].
**(b)** 45 = 101101, so **4** [1].
**(c)** It counts the number of 1 bits in the value [1]. **[6]**
*Examiner insight:* Pseudocode that lists "LSR R0" or "compare R0" line by line is a translation, not a conversion; show the loop structure.

**8.**

| Pass | R1 | R0 |
|---|---|---|
| 1 | 1 | 2 |
| 2 | 3 | 4 |
| 3 | 7 | 8 |
| 4 | 15 | 16 |
| 5 | 31 | 32 |

Passes 1 and 2 [1]; passes 3 and 4 [1]; pass 5 [1]; loop ends because 32 > 20, so `BLE` is not taken [1]; location 150 = **31** [1]. **[5]**
*Examiner insight:* The test happens after the shift, so the loop runs once more when R0 reaches 16; stopping at 15 misses the final row and the stored value.

**9. (a)**

```
       LDR R0, 110      ; total
       MOV R1, #0       ; count
loop:  CMP R0, #7
       BLT done
       SUB R0, R0, #7
       ADD R1, R1, #1
       B loop
done:  STR R1, 111
       STR R0, 112
       HALT
```

Load total [1]; set count to 0 [1]; compare total with #7 [1]; leave the loop with `BLT` [1]; subtract 7 and add 1 to count [1]; unconditional branch back to the test [1]; store both values and halt [1].
**(b)** 111 holds **6**, 112 holds **3** [1]. **[8]**
*Examiner insight:* The exit condition is the opposite of the WHILE condition; branching out on `BLE` would wrongly stop when total is exactly 7.

**10. (a)**

```
       LDR R3, 130      ; threshold
       MOV R0, #0       ; count
       MOV R1, #120     ; pointer
loop:  LDR R2, [R1]
       CMP R2, R3
       BLE skip
       ADD R0, R0, #1
skip:  ADD R1, R1, #1
       CMP R1, #125
       BLT loop
       STR R0, 131
       HALT
```

Load threshold and set count and pointer [1]; `LDR R2, [R1]` [1]; compare reading with threshold [1]; skip on `BLE` so only "greater than" is counted [1]; add 1 to count [1]; move the pointer on and loop while it is below 125 [1]; store in 131 and halt [1].
**(b)** 42 and 51 exceed 40, so **2** [1].
**(c)** One load instruction can read every reading by changing the address held in the register [1]. **[9]**
*Examiner insight:* A reading equal to the threshold must not be counted; check the boundary by tracing with 40.

**11. (a)**

```
LDR R0, 170
LSL R1, R0, #3   ; 8x
LSL R2, R0, #1   ; 2x
ADD R3, R1, R2
STR R3, 171
HALT
```

Load x [1]; shift left by 3 for 8x [1]; shift left by 1 for 2x [1]; add and store in 171 [1].
**(b)** 240 + 60 = 300 needs 9 bits; bit 8 is lost, so 171 holds 300 − 256 = **44** [1]. An 8-bit register can only hold 0 to 255 [1].
**(c)** **11** [1]: 00010111 becomes 00001011, which halves 23 and loses the remainder because the 1 in bit 0 falls off [1]. **[8]**
*Examiner insight:* Questions about shifts usually reward the reason as well as the value; "it halves it" without the lost bit leaves 11.5 unexplained.

## Where marks are usually lost

- Writing `SUB R0, R0, 7` instead of `SUB R0, R0, #7`.
- Reading `LDR R2, 25` as loading the number 25.
- Treating `[R6]` as the value in R6 rather than the location it points at.
- Branching out of a loop on the WHILE condition instead of its opposite.
- Not moving a pointer on, so the loop never ends.
- Shifting without respecting the register size, so lost bits are still counted.
- Writing pseudocode that copies each instruction instead of showing IF or WHILE.

## Next steps

- [Machine code and assembly language revision notes](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-revision-notes/)
- [Machine code and assembly language study guide](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language/)
- [Topic 6 practice set](/resources/oxfordaqa-a-level-computer-science-computer-systems-practice/)
- [Course hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.8 Machine code and assembly language, and 6 Appendix: Standard OxfordAQA assembly language instruction set.
