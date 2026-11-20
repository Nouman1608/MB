---
title: "AQA A-Level Computer Science (7517): A model of computation -- Practice Questions"
seoTitle: "AQA A-Level CS Turing Machines Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.5
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "a-model-of-computation-7517"
description: "Original AQA 7517 section 4.4.5 questions with answers: tracing Turing machines, transition functions and diagrams, and the importance of the Universal Turing machine."
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
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [A model of computation study guide](/resources/aqa-a-level-computer-science-7517-a-model-of-computation/) | [A model of computation revision notes](/resources/aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes/)

In all questions the Turing machine has one tape that is infinite in one direction. The head starts on the leftmost symbol of the input. The blank symbol is written □. A rule gives the next state, the symbol to write and the direction to move (L or R). The machine halts when there is no rule for the current state and symbol.

---

## Section A

**1.** State what is meant by a halting state. **[1]**

**2.** Name the four things that a Turing machine's read-write head can do in one step. **[2]**

**3.** State what is meant by a Universal Turing machine. **[2]**

**4.** State one reason why Turing machines are important to the study of computation. **[1]**

**5.** Explain the meaning of the rule δ(S1, 0) = (S2, 1, R). **[2]**

## Section B

**6.** A Turing machine has start state S0 and halting state S1. Its rules are:

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 1 | 1 | R | S0 |
| S0 | □ | 1 | R | S1 |

**(a)** The tape holds `111`, followed by blanks. Trace the machine step by step. **[3]**
**(b)** Describe what the machine does to the number written in unary (as a row of 1s). **[1]**

**7.** A Turing machine has start state S0 and halting state S2. Its rules are:

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | a | b | R | S1 |
| S0 | b | a | R | S0 |
| S0 | □ | □ | R | S2 |
| S1 | a | a | R | S0 |
| S1 | b | b | R | S1 |
| S1 | □ | □ | R | S2 |

**(a)** Trace the machine for the input `aab`, giving the state, head position, symbol read and tape after each step. **[4]**
**(b)** State the contents of the tape when the machine halts for the input `baba`. **[2]**

**8.** A Turing machine reads a string of the symbols a and b and replaces every a with b, then halts at the first blank.

Write the rules as a table. Use S0 as the start state and S1 as the halting state. **[3]**

**9.** The parity machine below reads a binary string and writes a digit in the first blank square. S0 is the start state and S2 is the halting state.

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | 0 | 0 | R | S0 |
| S0 | 1 | 1 | R | S1 |
| S0 | □ | 0 | R | S2 |
| S1 | 0 | 0 | R | S1 |
| S1 | 1 | 1 | R | S0 |
| S1 | □ | 1 | R | S2 |

**(a)** Give the final contents of the tape for the input `1001`. **[2]**
**(b)** Give the final contents of the tape for the input `111`. **[2]**
**(c)** State what the digit that the machine writes tells you about the input, and what S0 and S1 represent. **[2]**

**10.** In a state transition diagram, an arrow from S3 to S4 is labelled `0 / 1, L`. Write the equivalent transition function. **[2]**

**11.** A Turing machine has a finite number of states, but it can process an input of any length. Explain how this is possible. **[2]**

**12.** Explain why the Universal Turing machine is important to the design of modern computers. **[3]**

---

## Answers

**1.** A state with no outgoing transitions; when the machine enters it, the machine stops [1].

**2.** Any two from: read the symbol in the current square; write a symbol in the current square; move one square left or right; (together with the head's actions) change the machine's state [2].

**3.** A Turing machine that can simulate any other Turing machine [1]; the description of the other machine and its input are supplied on the tape [1].

**4.** Any one: it is a general (formal) model of computation; it provides a definition of what is computable [1].

**5.** In state S1, when the symbol read is 0 [1], write 1, move the head one square right and change to state S2 [1].

**6. (a)**

| Step | State | Head position | Read | Write | Move | Next state |
|---|---|---|---|---|---|---|
| 1 | S0 | 0 | 1 | 1 | R | S0 |
| 2 | S0 | 1 | 1 | 1 | R | S0 |
| 3 | S0 | 2 | 1 | 1 | R | S0 |
| 4 | S0 | 3 | □ | 1 | R | S1 |

Steps 1 to 3 leave the 1s unchanged and move right [2]; step 4 writes 1 on the blank and halts, giving `1111` on the tape [1].
**(b)** It adds one to the number, because it appends one more 1 to the row of 1s [1].

**7. (a)**

| Step | State | Head position | Read | Tape after |
|---|---|---|---|---|
| 1 | S0 | 0 | a | bab, new state S1 |
| 2 | S1 | 1 | a | bab, new state S0 |
| 3 | S0 | 2 | b | baa, new state S0 |
| 4 | S0 | 3 | □ | baa, new state S2 (halt) |

One mark for each correct step [4].
**(b)** `abba` [2]. (S0 reads b and writes a; S0 reads a, writes b, goes to S1; S1 reads b and leaves it; S1 reads a and leaves it, going to S0; S0 reads the blank and halts. One mark for the machine ending in S2 and one mark for the correct tape.)

**8.**

| State | Read | Write | Move | Next state |
|---|---|---|---|---|
| S0 | a | b | R | S0 |
| S0 | b | b | R | S0 |
| S0 | □ | □ | R | S1 |

Rule replacing a by b and staying in S0 [1]; rule leaving b as b [1]; rule for the blank moving to the halting state S1 [1].

**9. (a)** `10010` [2]. (The input has two 1s, which is even, so 0 is written after the string. One mark for 10010 and one mark for a clear explanation of the even count in the working.)
**(b)** `1111` [2]. (The input has three 1s, which is odd, so 1 is written. One mark for the tape and one for the working.)
**(c)** The digit written is a parity digit: 0 if the number of 1s is even, 1 if it is odd [1]; S0 represents an even number of 1s read so far and S1 an odd number of 1s read so far [1].

**10.** δ(S3, 0) = (S4, 1, L) [2]. (One mark for the correct inputs S3 and 0, one mark for the correct outputs S4, 1 and L.)

**11.** The tape is infinite (unbounded), so any amount of input and working data can be stored on it [1]; the head moves along it one square at a time, so the same small set of rules is applied repeatedly, however long the input is [1].

**12.** A Universal Turing machine can simulate any other Turing machine [1]; the rules of the machine to be simulated are stored on the tape as data, together with its input [1]; this is the basis of the stored program computer, where a program is data held in memory so that the same hardware can run any program [1].

---

## Where marks are usually lost

- Moving the head before writing in a step.
- Forgetting the rule for the blank symbol, or inventing a rule when none exists.
- Giving only the final tape with no trace when a trace was asked for.
- Mixing up the inputs (state, symbol read) and outputs (next state, symbol written, direction) of the transition function.
- Describing the Universal Turing machine as faster rather than able to simulate any machine.
