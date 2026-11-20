---
title: "OxfordAQA A-Level Computer Science (9645): Finite state machines (FSMs) -- Practice Questions"
seoTitle: "OxfordAQA 9645 Finite State Machines Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13 – Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
    subtopic: "finite-state-machines-fsms-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.13.1 Finite state machines: state tables, tracing, Mealy machines, completing and interpreting FSMs."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.13.1 Finite state machines (FSMs)** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: state transition tables and diagrams, acceptance of strings, and Mealy machines. In every table the first state listed is the start state unless the question says otherwise.

Related pages: [FSM study guide](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines/) ·
[FSM revision notes](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-revision-notes/)

## Section A

**1.** State what is meant by an **accepting state** in a finite state machine without output. **[1]**

**2.** State the condition under which an FSM accepts the empty string. **[1]**

**3.** A Mealy machine reads an input string of 9 symbols. State the length of its output string. **[1]**

## Section B

**4.** An FSM has input symbols 0 and 1 and the following state transition table. S0 is the start state and S2 is the only accepting state.

| State | Input 0 | Input 1 |
|---|---|---|
| S0 | S0 | S1 |
| S1 | S0 | S2 |
| S2 | S2 | S2 |

**(a)** Trace the input `0110`, giving the state after each symbol, and state whether it is accepted. **[2]**
**(b)** Trace the input `1010` and state whether it is accepted. **[2]**
**(c)** Describe in words the strings that this machine accepts. **[1]**
**(d)** Explain why S2 has an arc back to itself for both inputs. **[1]**

**5.** An FSM has input symbols a and b. S0 is the start state and the only accepting state.

| State | Input a | Input b |
|---|---|---|
| S0 | S1 | S2 |
| S1 | S0 | S3 |
| S2 | S3 | S0 |
| S3 | S2 | S1 |

**(a)** State whether each string is accepted: `abab`, `aab`, `abba`. **[3]**
**(b)** Describe in words the strings that this machine accepts. **[2]**

**6.** An FSM must accept exactly those strings over {a, b} that **start with a**. A partly completed table is shown. S0 is the start state.

| State | Input a | Input b |
|---|---|---|
| S0 | S1 | S2 |
| S1 | | |
| S2 | | |

**(a)** State which of S1 and S2 is the accepting state. **[1]**
**(b)** Complete the table for S1 and S2. **[2]**
**(c)** State the name given to S2 and explain its purpose. **[2]**

**7.** The Mealy machine below reads a binary string and outputs a 1 whenever the current input bit is different from the previous one. Before any input the previous bit is taken to be 0. Each cell shows next state / output.

| State | Input 0 | Input 1 |
|---|---|---|
| S0 (start) | S0 / 0 | S1 / 1 |
| S1 | S0 / 1 | S1 / 0 |

**(a)** State what S0 and S1 each remember. **[1]**
**(b)** Trace the input `0011010`, giving the path and the output. **[3]**

**8.** A turnstile has two states, Locked (the start state) and Unlocked. Inserting a coin makes it Unlocked. Pushing makes it Locked. A coin in the Unlocked state leaves it Unlocked, and a push in the Locked state leaves it Locked.

**(a)** Draw the state transition table. **[2]**
**(b)** Give the final state after the events push, coin, coin, push, push, coin. **[1]**

**9.** The Mealy machine below adds 1 to a binary number sent least significant bit first. S1 is the start state.

| State | Input 0 | Input 1 |
|---|---|---|
| S1 | S0 / 1 | S1 / 0 |
| S0 | S0 / 0 | S0 / 1 |

**(a)** Give the output when the input is `1011`. **[2]**
**(b)** Convert the input and the output to denary, reading each with the least significant bit first. **[2]**

**10.** Explain why a finite state machine cannot accept exactly the strings that consist of some number of a symbols followed by the same number of b symbols, such as `ab`, `aabb` and `aaabbb`. **[2]**

## Answers

**1.** A state in which the machine must end after the last input symbol for the string to be accepted **[1]**.

**2.** The start state is also an accepting state **[1]**.

**3.** 9 symbols (one output symbol per transition) **[1]**.

**4. (a)** Path S0, S0, S1, S2, S2 **[1]**; the string ends in S2, so it is **accepted** **[1]**. **[2]**
**(b)** Path S0, S1, S0, S1, S0 **[1]**; it ends in S0, so it is **rejected** **[1]**. **[2]**
**(c)** Strings that contain two 1s in a row (`11`) somewhere **[1]**.
**(d)** Once `11` has been seen the string is accepted whatever follows, so the machine must stay in S2 for any input **[1]**.

**5. (a)** `abab`: path S0, S1, S3, S2, S0, accepted **[1]**. `aab`: path S0, S1, S0, S2, rejected **[1]**. `abba`: path S0, S1, S3, S1, S0, accepted **[1]**. **[3]**
**(b)** Strings that contain an even number of a symbols **[1]** and an even number of b symbols **[1]**. **[2]**

**6. (a)** S1 **[1]**
**(b)** S1: input a goes to S1, input b goes to S1 **[1]**. S2: input a goes to S2, input b goes to S2 **[1]**. **[2]**
**(c)** S2 is a **trap state** (or dead state) **[1]**. A string that starts with b can never be accepted, so the machine moves to S2 and stays there for all later symbols **[1]**. **[2]**

**7. (a)** S0 remembers that the previous bit was 0 (or no bit yet); S1 remembers that the previous bit was 1 **[1]**.
**(b)** Path S0, S0, S0, S1, S1, S0, S1, S0 **[1]**; output **0010111** (award **[1]** for the first four outputs `0010` and **[1]** for the last three `111`). **[3]**

**8. (a)**

| State | coin | push |
|---|---|---|
| Locked (start) | Unlocked | Locked |
| Unlocked | Unlocked | Locked |

Award **[1]** for each row. **[2]**
**(b)** Path Locked, Locked, Unlocked, Unlocked, Locked, Locked, Unlocked, so the final state is **Unlocked** **[1]**.

**9. (a)** S1 reads 1, outputs 0, stays in S1; reads 0, outputs 1, moves to S0 **[1]**; reads 1, outputs 1; reads 1, outputs 1. Output **0111** **[1]**. **[2]**
**(b)** Input `1011` with the least significant bit first is 1 + 0 + 4 + 8 = **13** **[1]**; output `0111` is 0 + 2 + 4 + 8 = **14** **[1]**. **[2]**

**10.** A finite state machine has a fixed, finite number of states **[1]**, so it can only remember a bounded count. To check that the number of b symbols equals the number of a symbols it would need to count without limit, which would need infinitely many states **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.1 Finite state machines (FSMs).
