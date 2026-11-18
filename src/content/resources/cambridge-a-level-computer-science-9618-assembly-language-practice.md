---
title: "Cambridge A Level Computer Science (9618): Assembly Language -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with mark-scheme answers on Cambridge 9618 section 4.2: addressing modes, the two-pass assembler, instruction groups and program traces."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available from your board.

These questions practise section 4.2 Assembly Language of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026. They use the instruction set printed in the syllabus, with one general purpose register (ACC) and the Index Register (IX). Revise first with the [assembly language study guide](/resources/cambridge-a-level-computer-science-9618-assembly-language/) and the [assembly language revision notes](/resources/cambridge-a-level-computer-science-9618-assembly-language-revision-notes/).

## Section A

**1.** Explain the relationship between assembly language and machine code. **[2]**

**2.** State the instruction group to which each of these instructions belongs: JPN and MOV. **[2]**

**3.** The memory contents are: address 80 holds 7, address 81 holds 83, address 82 holds 14 and address 83 holds 5. The Index Register holds 1. State the value in the ACC after each instruction is executed separately.

**(a)** LDM #81 **[1]**

**(b)** LDD 81 **[1]**

**(c)** LDI 81 **[1]**

**(d)** LDX 81 **[1]**

**4.** Explain why an assembler needs two passes to translate a program that uses labels. **[2]**

**5.** Describe relative addressing and give **one** benefit of using it. **[2]**

**6.** Address 205 holds 61. State the value in the ACC after this code runs, and explain why.

```
LDM #5
MOV IX
LDX 200
END
```

**[2]**

## Section B

**7.** Write assembly language instructions, using the syllabus instruction set, to add the values stored at the labels X and Y and store the result at the label Z. **[3]**

**8.** The program below is assembled starting at address 400.

```
400  BEGIN: LDD FIRST
401         CMP SECOND
402         JPE SAME
403         LDM #0
404         JMP DONE
405  SAME:  LDM #1
406  DONE:  STO RESULT
407         END
408  FIRST: 9
409  SECOND: 9
410  RESULT: 0
```

**(a)** Complete the symbol table produced by pass 1 for the labels SAME, DONE, FIRST, SECOND and RESULT. **[3]**

**(b)** State the value stored in RESULT when the program runs. **[1]**

**(c)** Describe what the program does. **[1]**

**9.** The program below reads characters typed by the user. The ASCII values are: "H" = 72, "I" = 73 and "*" = 42.

```
300  LOOP:   IN
301          CMP #42
302          JPE FINISH
303          OUT
304          JMP LOOP
305  FINISH: END
```

The user types H, then I, then *.

**(a)** State the output. **[1]**

**(b)** Explain the purpose of the instructions at addresses 301 and 302. **[2]**

**10.** Trace the program below, which starts at address 200. Show the ACC, IX and the contents of addresses 212 and 213 each time they change.

```
200         LDR #0
201  LOOP:  LDX DATA
202         ADD SUM
203         STO SUM
204         INC IX
205         LDD COUNT
206         DEC ACC
207         STO COUNT
208         CMP #0
209         JPN LOOP
210         LDD SUM
211         END
212  COUNT: 3
213  SUM:   0
214  DATA:  8
215         11
216         6
```

**[6]**

**11.** State what the program in question 10 calculates, and explain why indexed addressing is used. **[2]**

## Answers

**1.** Each assembly language instruction is usually a mnemonic version of one machine code instruction (a one-to-one relationship) [1]; an assembler translates the mnemonics and symbolic addresses into the binary opcodes and addresses of machine code [1]. **[2]**

**2.** JPN: conditional instructions [1]; MOV: data movement [1]. **[2]**

**3. (a)** **81** [1].

**(b)** **83** [1].

**(c)** Address 81 holds 83, and address 83 holds **5** [1].

**(d)** 81 + 1 = 82, which holds **14** [1]. **[4]**

**4.** A label may be used in an instruction before the line that defines it, so its address is not yet known (a forward reference) [1]; pass 1 builds a symbol table of every label and its address, so that pass 2 can replace each label with its address when generating the machine code [1]. **[2]**

**5.** The operand is an offset that is added to the address of the current instruction (or a base address) to give the address used [1]; the program can be loaded anywhere in memory without changing its addresses (it is relocatable) [1]. **[2]**

**6.** ACC = **61** [1]. LDM #5 puts 5 in the ACC and MOV IX copies it into the Index Register, so LDX 200 loads the contents of 200 + 5 = 205 [1]. **[2]**

**7.** LDD X [1]; ADD Y [1]; STO Z [1] (END may follow). **[3]**

**8. (a)** SAME 405, DONE 406 [1]; FIRST 408, SECOND 409 [1]; RESULT 410 [1].

**(b)** **1** [1].

**(c)** It compares the values at FIRST and SECOND and stores 1 in RESULT if they are equal, or 0 if they are not [1]. **[5]**

**9. (a)** **HI** [1].

**(b)** CMP #42 compares the ASCII value of the character just typed with 42, the code for "*" [1]; JPE FINISH ends the program if they are equal, so "*" acts as a terminator and is not output [1]. **[3]**

**10.**

| Instruction | ACC | IX | COUNT (212) | SUM (213) |
|---|---|---|---|---|
| Start | | | 3 | 0 |
| 200 LDR #0 | | 0 | | |
| 201 LDX DATA | 8 | | | |
| 202 ADD SUM | 8 | | | |
| 203 STO SUM | | | | 8 |
| 204 INC IX | | 1 | | |
| 205 LDD COUNT | 3 | | | |
| 206 DEC ACC | 2 | | | |
| 207 STO COUNT | | | 2 | |
| 208, 209 | (2 ≠ 0: jump to LOOP) | | | |
| 201 LDX DATA | 11 | | | |
| 202 ADD SUM | 19 | | | |
| 203 STO SUM | | | | 19 |
| 204 INC IX | | 2 | | |
| 205 to 207 | 2, 1 | | 1 | |
| 208, 209 | (1 ≠ 0: jump) | | | |
| 201 LDX DATA | 6 | | | |
| 202 ADD SUM | 25 | | | |
| 203 STO SUM | | | | 25 |
| 204 INC IX | | 3 | | |
| 205 to 207 | 1, 0 | | 0 | |
| 208, 209 | (0 = 0: no jump) | | | |
| 210 LDD SUM | 25 | | | |

IX column correct [1]; first pass of the loop correct (ACC 8, SUM 8, COUNT 2) [1]; second pass correct (ACC 11 then 19, SUM 19) [1]; third pass correct (ACC 6 then 25, SUM 25) [1]; COUNT reaches 0 and the loop ends with no further jump [1]; final ACC 25 [1]. **[6]**

**11.** It adds the three values stored from DATA onwards (8 + 11 + 6) and leaves the total, 25, in SUM and the ACC [1]. Indexed addressing lets the same LDX DATA instruction read a different location on each pass of the loop, because IX is increased by 1 each time [1]. **[2]**

## Where marks are usually lost

- Writing the address instead of its contents for LDD, or the contents instead of the value for LDM.
- Following only one step for LDI.
- Forgetting to add IX for LDX.
- Changing the ACC on STO or CMP lines.
- Confusing JPE with JPN, and so running a loop once too often or not at all.
- Saying pass 2 builds the symbol table.
