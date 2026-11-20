---
title: "AQA A-Level Computer Science (7517): The Stored Program Concept -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer organisation and architecture"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 7.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-organisation-and-architecture"
    subtopic: "the-stored-program-concept-7517"
description: "Original AQA 7517 section 4.7.2 questions with answers: describing the stored program concept, tracing a short machine code program and judging its effects."
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
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Stored program concept study guide](/resources/aqa-a-level-computer-science-7517-stored-program-concept/) | [Stored program concept revision notes](/resources/aqa-a-level-computer-science-7517-stored-program-concept-revision-notes/)

---

## Section A

**1.** State what is meant by machine code. **[1]**

**2.** State where the instructions of a program are held while the program is running. **[1]**

**3.** Describe what is meant by instructions being executed serially. **[1]**

**4.** State **two** types of operation that the processor performs when it executes instructions. **[2]**

**5.** Give **one** way in which an early computer was changed from one task to another, before the stored program concept was used. **[1]**

## Section B

**6.** Describe the stored program concept. **[4]**

**7.** The 8-bit binary pattern `01000001` is held in a memory location.

**(a)** Give the denary value of the pattern if it represents an unsigned integer. **[1]**
**(b)** Give the character it represents if it is an ASCII code (the code for A is 65). **[1]**
**(c)** Explain how the processor decides whether to treat the pattern as an instruction or as data. **[2]**

**8.** A toy processor has 8-bit instructions. The first 4 bits are the opcode and the last 4 bits are the operand, a memory address (direct addressing). The accumulator is ACC. The instructions are:

| Opcode | Instruction |
|---|---|
| 0001 | LOAD: copy the value at the operand address into ACC |
| 0010 | ADD: add the value at the operand address to ACC |
| 0100 | SUB: subtract the value at the operand address from ACC |
| 0011 | STORE: copy ACC to the operand address |
| 1111 | HALT: stop |

Memory contains:

| Address | Contents |
|---|---|
| 0 | 0001 1100 |
| 1 | 0100 1101 |
| 2 | 0011 1110 |
| 3 | 1111 0000 |
| 12 | 0001 0100 |
| 13 | 0000 0111 |
| 14 | 0000 0000 |

Execution starts with the program counter at 0.

**(a)** Write the program as assembly language instructions, one per line, for addresses 0 to 3. **[2]**
**(b)** State the value in ACC after each of the first two instructions. **[2]**
**(c)** Give the final contents of address 14 as an 8-bit binary number. **[2]**
**(d)** The pattern at address 12 looks like the instruction LOAD 4. Explain why the processor does not execute it in this program. **[2]**

**9.** Explain why the stored program concept makes it possible for one computer to run a word processor and then a game. **[3]**

**10.** Explain **two** problems that can arise because instructions and data are held in the same memory. **[4]**

**11.** Describe how a branch instruction changes the order in which instructions are carried out, and explain why a program without branches would be of limited use. **[4]**

**12.** A student writes: "The stored program concept means the program is kept on the hard disk." Evaluate this statement. **[3]**

---

## Answers

**1.** Binary instructions that the processor can decode and execute directly [1].

**2.** In main memory (RAM) [1].

**3.** The instructions are carried out one after another, in the order in which they are stored (unless a branch changes the order) [1].

**4.** Any two from: arithmetic operations; logical operations; comparison; shifts; branching [1 each].

**5.** By rewiring the machine, or by changing plugs or switches, so that the hardware was set up for the new task [1].

**6.** Instructions are in machine code [1]; they are stored in main memory [1]; they are fetched and executed one after another (serially) [1]; by a processor that performs arithmetic and logical operations [1].

**7. (a)** 65 [1] (64 + 1).
**(b)** A [1].
**(c)** The pattern in memory has no label to say which it is [1]; the processor treats it as an instruction when it fetches it as the next instruction (the program counter points to it) and as data when an instruction asks for it as a value [1].

**8. (a)** LOAD 12, SUB 13, STORE 14, HALT [2] (2 marks for all four correct, 1 mark for two or three correct).
**(b)** After LOAD 12: 0001 0100 is the pattern at address 12, which is 20 in denary, so ACC = 20 [1]. After SUB 13: 20 − 7 = 13, so ACC = 13 [1].
**(c)** STORE 14 copies ACC (13) to address 14 [1]; 13 as 8-bit binary is 0000 1101 [1].
**(d)** The program counter goes 0, 1, 2, 3 and HALT at address 3 stops the processor [1]; the program counter never reaches address 12, so the pattern there is only used as data when LOAD 12 reads it [1].

**9.** The word processor and the game are each a program, which is a set of machine code instructions held in memory [1]; the computer's hardware is general, so loading a different program into memory changes what it does [1]; the processor fetches and executes whichever instructions are in memory, so no rewiring is needed [1].

**10.** Any two problems, each with an explanation [2 marks each]. For example: a faulty program may write data over its own instructions or another program's instructions, so the program crashes [1] because the processor then executes the wrong patterns [1]. Malicious software can place code in an area meant for data and cause the processor to run it [1], which is a security risk because the processor cannot tell the difference between data and instructions by looking at them [1]. Instructions and data may share one bus in a von Neumann design [1], so they cannot be fetched at the same time, which limits speed [1].

**11.** A branch instruction changes the value in the program counter [1], so the next instruction is fetched from a different address instead of the following one [1]. A conditional branch does this only if a condition (such as a comparison result) is met [1]. Without branches, a program could only run once from first to last instruction in a fixed order, so there could be no loops or selection [1].

**12.** The statement is incorrect [1]. A program may be stored on a disk when it is not running, but the stored program concept requires the machine code instructions to be in main memory [1], from where the processor fetches them and executes them serially [1].

---

## Where marks are usually lost

- Leaving out "main memory" or "machine code" in a description.
- Forgetting that execution is serial.
- Treating the program counter as holding a value instead of an address.
- Giving the denary value of a pattern as the instruction's meaning without using the question's table.
- Saying that the memory itself knows which locations are instructions.
