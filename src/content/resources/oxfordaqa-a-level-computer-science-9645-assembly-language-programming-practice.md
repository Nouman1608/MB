---
title: "OxfordAQA A-Level Computer Science (9645): Assembly language programming -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Assembly Programming Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.8.2: tracing and writing assembly programs, loops, indirect addressing and bitwise operations, with answers."
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

These questions practise sub-topic **3.8.2 Assembly language programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1. Programs use the Standard OxfordAQA assembly language instruction set; `<memory ref>` is written as a decimal address. Registers are 8 bits wide where bitwise operations or shifts are involved. Pseudocode uses `←` for assignment.

Related pages: [assembly language programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming/) ·
[assembly language programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-assembly-language-programming-revision-notes/) ·
[machine code and assembly language practice questions](/resources/oxfordaqa-a-level-computer-science-machine-code-and-assembly-language-practice/)

## Section A

**1.** State the difference in effect between `LDR R3, 40` and `LDR R3, [R5]`. **[2]**

**2.** State the values in R2, R3 and R4 after this program has run.

```
MOV R0, #12
MOV R1, #5
ADD R2, R0, R1
SUB R3, R2, #4
AND R4, R0, R1
HALT
```

**[3]**

**3.** State the difference between the instructions `BGT` and `BGE`. **[2]**

**4.** Write one assembly language instruction that multiplies the value in R0 by 8 and puts the result in R1. **[1]**

## Section B

**5.** Write an assembly language program for this pseudocode. The values of `a` and `b` are in locations 190 and 191 and `diff` is stored in location 192.

```
IF a > b THEN
    diff ← a - b
ELSE
    diff ← b - a
ENDIF
```

**[5]**

**6.** Trace this program.

```
      MOV R0, #1
      MOV R1, #0
top:  CMP R0, #9
      BGT end
      ADD R1, R1, R0
      ADD R0, R0, #2
      B top
end:  STR R1, 210
      HALT
```

**(a)** Complete a table showing R0 and R1 after each execution of `ADD R0, R0, #2`. **[3]**
**(b)** State the value stored in location 210. **[1]**
**(c)** Describe in one sentence what the program calculates. **[1]**

**7.** R0 holds 173 (10101101 in binary). The following instructions are run, with 8-bit registers.

```
AND R1, R0, #15
ORR R2, R0, #64
EOR R3, R0, #255
LSR R4, R0, #2
LSL R5, R0, #1
```

State the denary value in each of R1 to R5. **[5]**

**8.** Convert this program into pseudocode and state the values stored in locations 221 and 222 when location 220 holds 27.

```
      LDR R0, 220
      MOV R1, #0
again: CMP R0, #4
      BLT stop
      SUB R0, R0, #4
      ADD R1, R1, #1
      B again
stop: STR R1, 221
      STR R0, 222
      HALT
```

**[5]**

**9.** The following program should store 1 in location 231 if the value in location 230 is greater than 50, and 0 otherwise.

```
      LDR R0, 230
      CMP R0, #50
      BGT big
      MOV R2, #0
big:  MOV R2, #1
      STR R2, 231
      HALT
```

**(a)** State the value stored in location 231 when location 230 holds 30. **[1]**
**(b)** Explain the error and give the corrected program line or lines. **[3]**

**10.** Four values are stored in locations 250 to 253. Complete the missing instruction (marked ...) so that the program stores their total in location 254, and explain why indirect addressing is used.

```
      MOV R0, #0
      MOV R1, #250
loop: LDR R2, [R1]
      ADD R0, R0, R2
      ...
      CMP R1, #254
      BLT loop
      STR R0, 254
      HALT
```

**[4]**

**11.** State what would be stored in location 210 if the instruction `B top` were removed from the program in question 6, and explain why. **[3]**

## Answers

**1.** `LDR R3, 40` loads the value stored in memory location 40 (direct addressing) [1]. `LDR R3, [R5]` loads the value stored at the address held in R5 (indirect addressing) [1]. **[2]**

**2.** R2 = **17** [1]; R3 = **13** [1]; R4 = **4** [1] (1100 AND 0101 = 0100). **[3]**

**3.** `BGT` branches only if the first value is strictly greater than the second [1]; `BGE` also branches when they are equal [1]. **[2]**

**4.** `LSL R1, R0, #3` [1]. (Shifting left by 3 multiplies by 2^3 = 8.) **[1]**

**5.** Example answer:

```
      LDR R0, 190
      LDR R1, 191
      CMP R0, R1
      BLE other
      SUB R2, R0, R1
      B store
other: SUB R2, R1, R0
store: STR R2, 192
      HALT
```

Loads both values [1]; `CMP` followed by a suitable conditional branch [1]; correct subtraction in each case [1]; a `B` to skip the ELSE part [1]; stores the result and halts [1]. **[5]**
*Examiner insight:* using `BGT` to a label for the THEN part is equally valid. Check the equal case: when a = b, either branch gives 0.

**6. (a)**

| After pass | R0 | R1 |
|---|---|---|
| 1 | 3 | 1 |
| 2 | 5 | 4 |
| 3 | 7 | 9 |
| 4 | 9 | 16 |
| 5 | 11 | 25 |

R0 column correct [1]; R1 column correct [1]; five rows [1]. **[3]**
**(b)** **25** [1]
**(c)** It adds up the odd numbers from 1 to 9 [1].

**7.** R1 = **13** (00001101) [1]; R2 = **237** (11101101) [1]; R3 = **82** (01010010) [1]; R4 = **43** (00101011) [1]; R5 = **90** (the top bit is lost: 01011010) [1]. **[5]**

**8.** Pseudocode (example):

```
quotient ← 0
WHILE n >= 4
    n ← n - 4
    quotient ← quotient + 1
ENDWHILE
```

Loop condition correct [1]; subtracts 4 and adds 1 [1]; stores quotient and remainder [1]. Location 221 holds **6** [1] and location 222 holds **3** [1]. The program divides n by 4 by repeated subtraction; 221 holds the quotient and 222 the remainder. **[5]**

**9. (a)** **1** [1]. When 30 is not greater than 50, the branch is not taken, `MOV R2, #0` runs, and execution then continues into `MOV R2, #1`.
**(b)** There is no branch past the second `MOV` [1], so the "not greater" case falls through and R2 is overwritten with 1 [1]. Correction: add `B store` after `MOV R2, #0` and a label `store:` before `STR R2, 231` [1]. **[3]**

**10.** The missing instruction is `ADD R1, R1, #1` [2]. Indirect addressing is used because the address of the item to load changes on every pass [1], so one `LDR R2, [R1]` instruction can read each location in turn as R1 is increased [1]. **[4]**

**11.** **1** would be stored [1]. After the first pass (R0 = 1, R1 = 1, then R0 = 3) the program would no longer jump back to `top` [1] but would continue into `end:`, store R1 (1) and halt [1]. **[3]**

## Frequently asked questions

**Do I have to memorise the instruction set?**
No. The specification says a copy will be included in any exam paper with an assembly language question. Practise until you do not need to look up every instruction.

**Which pseudocode style will the exam use?**
The specification does not fix a pseudocode style. Use clear, language-neutral statements and make the meaning obvious.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.8.2 Assembly language programming. The Standard OxfordAQA assembly language instruction set is printed in section 6 of the specification.
