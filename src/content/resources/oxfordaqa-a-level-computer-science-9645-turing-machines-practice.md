---
title: "OxfordAQA A-Level Computer Science (9645): Turing machines -- Practice Questions"
seoTitle: "OxfordAQA 9645 Turing Machines Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13 – Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
    subtopic: "turing-machines-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.13.3 Turing machines: transition functions, diagram arcs, hand-tracing, the UTM and their importance."
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

These questions practise sub-topic **3.13.3 Turing machines** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1. Each machine has one tape that is infinite in one direction. A transition function rule δ(state, symbol) = (new state, symbol to write, move) means: read the symbol, write the new symbol, move the head one square left (L) or right (R), and enter the new state. The symbol □ is a blank square. A state with no rules is a halting state. Unless stated, the head starts on the leftmost symbol.

Related pages: [Turing machines study guide](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines/) ·
[Turing machines revision notes](/resources/oxfordaqa-a-level-computer-science-9645-turing-machines-revision-notes/)

## Section A

**1.** State what is meant by a **halting state** of a Turing machine. **[1]**

**2.** Write as a state transition diagram arc label the rule δ(S2, 0) = (S3, 1, L). **[1]**

**3.** State why the transition function and the state transition diagram are described as equivalent. **[1]**

## Section B

**4.** A Turing machine has start state S0 and halting state SH. Its rules are

```
δ(S0, a) = (S0, b, R)
δ(S0, b) = (S0, a, R)
δ(S0, □) = (SH, □, R)
```

**(a)** Trace the machine on the tape `abba`, giving the state, position, symbol read, symbol written, move and new state for each step. **[4]**
**(b)** State the final tape and describe what the machine does. **[2]**

**5.** A machine has start state S0 and halting state SH. Its rules are

```
δ(S0, 1) = (S0, 1, R)
δ(S0, □) = (S1, □, L)
δ(S1, 1) = (SH, □, L)
```

**(a)** Trace the machine on the tape `111`. **[3]**
**(b)** State the final tape and describe what the machine does to a unary number. **[2]**

**6.** A machine appends a 0 to a binary number. Its rules are

```
δ(S0, 0) = (S0, 0, R)
δ(S0, 1) = (S0, 1, R)
δ(S0, □) = (SH, 0, R)
```

**(a)** Give the final tape when the input is `101`. **[1]**
**(b)** State the denary value of the input and the output, and describe what appending a 0 does to the value of a binary number. **[2]**

**7.** The following machine has start state S0 and halting state SH.

```
δ(S0, 0) = (S0, 0, R)
δ(S0, 1) = (S0, 1, R)
δ(S0, □) = (S1, □, L)
δ(S1, 1) = (S1, 0, L)
δ(S1, 0) = (SH, 1, L)
```

**(a)** Trace the machine on the tape `0101`, giving each step. **[4]**
**(b)** State the final tape and describe what the machine does to a binary number. **[2]**
**(c)** Explain why the input needs a leading 0. **[1]**

**8.** A machine has start state S0 and halting state SH, and the rules

```
δ(S0, 1) = (S0, 1, R)
δ(S0, 0) = (SH, 1, R)
```

Give the final tape and the number of steps when the input is `1101`. **[2]**

**9.** Explain what is meant by a **Universal Turing machine** and state what is stored on its tape. **[3]**

**10.** Explain why Turing machines are important to the subject of computation. **[2]**

## Answers

**1.** A state that has no outgoing transitions; the machine stops when it enters it **[1]**.

**2.** `0 / 1, L` (read 0, write 1, move left) on the arc from S2 to S3 **[1]**.

**3.** Each rule corresponds to exactly one arc, so either form can be converted into the other without any loss of information **[1]**.

**4. (a)** Award **[1]** for each correct pair of rows (up to 4).

| Step | State | Position | Read | Write | Move | New state |
|---|---|---|---|---|---|---|
| 1 | S0 | 0 | a | b | R | S0 |
| 2 | S0 | 1 | b | a | R | S0 |
| 3 | S0 | 2 | b | a | R | S0 |
| 4 | S0 | 3 | a | b | R | S0 |
| 5 | S0 | 4 | □ | □ | R | SH |

Rows 1 and 2 **[1]**, rows 3 and 4 **[1]**, row 5 with halting state SH **[1]**, state and position columns consistent **[1]**. **[4]**
**(b)** Final tape `baab` **[1]**; the machine swaps every a for b and every b for a (complements the string) **[1]**. **[2]**

**5. (a)** Step 1: S0, position 0, read 1, write 1, move R, S0. Step 2: position 1, same. Step 3: position 2, same **[1]**. Step 4: S0, position 3, read □, write □, move L, new state S1 **[1]**. Step 5: S1, position 2, read 1, write □, move L, new state SH **[1]**. **[3]**
**(b)** Final tape `11` **[1]**; the machine subtracts one from a unary number (removes the last 1) **[1]**. **[2]**

**6. (a)** `1010` **[1]**
**(b)** Input 101 = 5; output 1010 = 10 **[1]**; appending a 0 doubles the value **[1]**. **[2]**

**7. (a)**

| Step | State | Position | Read | Write | Move | New state |
|---|---|---|---|---|---|---|
| 1 to 4 | S0 | 0 to 3 | 0, 1, 0, 1 | same | R | S0 |
| 5 | S0 | 4 | □ | □ | L | S1 |
| 6 | S1 | 3 | 1 | 0 | L | S1 |
| 7 | S1 | 2 | 0 | 1 | L | SH |

Award **[1]** for steps 1 to 4 (moving right unchanged), **[1]** for step 5, **[1]** for step 6 and **[1]** for step 7. **[4]**
**(b)** Final tape `0110` **[1]**; the machine adds 1 to the binary number (5 becomes 6) **[1]**. **[2]**
**(c)** If the number is all 1s, the carry needs a 0 square to its left to become a 1; the head must not run off the left end of the tape **[1]**.

**8.** The head passes over 1, 1, then reads 0 at position 2, writes 1, moves right and halts **[1]**; final tape `1111` after **3** steps **[1]**. **[2]**

**9.** A UTM is a Turing machine that can simulate the behaviour of any other Turing machine **[1]**. A description of the machine to be simulated **[1]** and that machine's input **[1]** are stored on its tape. **[3]**

**10.** They provide a general (formal) model of computation **[1]** and a definition of what is computable: a problem that no Turing machine can solve cannot be solved by a computer **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.3 Turing machines.
