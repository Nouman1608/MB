---
title: "AQA A-Level Computer Science: Theory of Computation — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 4: Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
description: "Original practice questions with worked answers on abstraction, sets, FSMs, regex, BNF, Big-O, the Halting problem and Turing machines for AQA A-Level 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/) | [Theory of computation revision notes](/resources/aqa-a-level-computer-science-theory-of-computation-revision-notes/)

These questions cover section 4.4 of the AQA A-Level Computer Science (7517) specification: abstraction and
automation (4.4.1), regular languages (4.4.2), context-free languages (4.4.3), classification of algorithms
(4.4.4) and the Turing machine (4.4.5). Theory of computation is assessed on Paper 1.

---

## Section A: definitions

**1.** State what is meant by the term **algorithm**. **[2]**

**2.** A map of a railway network shows stations as dots and lines as straight coloured lines, ignoring real
distances and curves.

**(a)** Identify the type of abstraction used and explain your answer. **[2]**
**(b)** Explain what is meant by **abstraction by generalisation**, giving an example. **[2]**

**3.** Explain the difference between **procedural abstraction** and **functional abstraction**. **[2]**

**4.** Explain what is meant by **problem abstraction (reduction)**. **[2]**

## Section B: sets and regular languages

**5.** A = {1, 2, 3, 4} and B = {3, 4, 5}.

**(a)** Give A ∪ B, A ∩ B and A \ B. **[3]**
**(b)** State the cardinality of A. **[1]**
**(c)** State whether {3, 4} ⊂ A is true, and explain what the symbol ⊂ means. **[2]**
**(d)** Give the Cartesian product {0, 1} × {x, y}. **[1]**

**6.** **(a)** For the regular expression `10*1`, state which of these strings it matches:
"11", "101", "1001", "0110", "1". **[3]**
**(b)** Write a regular expression for all strings over {a, b} that start with b and end with a. **[2]**

**7.** An FSM has states S0 (start), S1 and S2. S2 is the only accepting state. Its transition table is:

| Current state | Input 0 | Input 1 |
|---|---|---|
| S0 | S0 | S1 |
| S1 | S2 | S1 |
| S2 | S0 | S1 |

**(a)** Trace the FSM on the inputs "0110" and "1001", and state whether each is accepted. **[3]**
**(b)** Describe the language the FSM accepts and write an equivalent regular expression. **[2]**
**(c)** State the relationship between FSMs and regular expressions. **[1]**

**8.** A Mealy machine has states A (start) and B. Its transitions, written input/output, are:
A --0/0--> A, A --1/1--> B, B --0/1--> A, B --1/0--> B.

**(a)** Give the output for the input 0110. **[2]**
**(b)** Describe what the machine does. **[2]**

## Section C: context-free languages and complexity

**9.** A language is defined in BNF:
```
<letter> ::= A | B | C
<digit>  ::= 0 | 1 | 2
<id>     ::= <letter> | <letter><id>
<code>   ::= <id><digit>
```
**(a)** State which of these are valid `<code>`s: "AB1", "A", "1A", "CCA2". **[2]**
**(b)** Explain why "AB12" is not a valid `<code>`. **[1]**
**(c)** Write a BNF rule for the language {0ⁿ1ⁿ | n ≥ 1} and explain why this language cannot be written as
a regular expression. **[3]**

**10.** Consider this algorithm, where `items` holds n values:
```
count ← 0
FOR i ← 1 TO n
  FOR j ← 1 TO n
    IF items[i] = items[j] THEN count ← count + 1 ENDIF
  ENDFOR
ENDFOR
```
**(a)** Derive its time complexity in Big-O notation. **[2]**
**(b)** Put these in order from slowest-growing to fastest-growing: O(2ⁿ), O(n), O(1), O(n²), O(log n). **[1]**
**(c)** State how many different orderings there are of the letters in the word COMPUTER. **[1]**

**11.** **(a)** Explain the difference between a **tractable** and an **intractable** problem. **[2]**
**(b)** Explain why heuristic methods are used for intractable problems. **[2]**

**12.** Describe the **Halting problem** and explain its significance for computation. **[3]**

## Section D: Turing machines

**13.** A Turing machine with alphabet {0, 1, □} (□ is blank) has start state S0 and halting state SH.
Its transition function is:
```
δ(S0, 0) = (S0, 0, R)     δ(S0, 1) = (S1, 1, R)
δ(S1, 0) = (S1, 0, R)     δ(S1, 1) = (S0, 1, R)
δ(S0, □) = (SH, 0, R)     δ(S1, □) = (SH, 1, R)
```
The tape holds 1011 followed by blanks, and the head starts on the leftmost 1.

**(a)** Trace the machine, giving the state after each move and the final contents of the tape. **[3]**
**(b)** Describe what the machine does. **[2]**
**(c)** Explain the importance of the Universal Turing machine. **[2]**

---

## Answers

**1.** A sequence of steps that can be followed to complete a task [1] and that **always terminates** [1].

**2. (a)** **Representational abstraction** [1]: unnecessary details such as real distances and curves are
removed, leaving only what is needed to plan a journey [1].
**(b)** Grouping things by common characteristics to form a hierarchy of the "is a kind of" type [1], e.g. a
car and a lorry are both kinds of road vehicle [1].

**3.** Procedural abstraction removes the actual values from a computation, leaving a computational method --
a **procedure** [1]. Functional abstraction goes further and **hides the particular computation method**, so
only the input-output relationship (a function) remains [1].

**4.** Details are removed until the problem is represented in a way that is possible to solve [1], because it
reduces to a problem that **has already been solved** [1].

**5. (a)** A ∪ B = {1, 2, 3, 4, 5} [1]; A ∩ B = {3, 4} [1]; A \ B = {1, 2} [1].
**(b)** 4 [1].
**(c)** True [1]. ⊂ means **proper subset**: every element of {3, 4} is in A, and A has at least one element
not in {3, 4} [1].
**(d)** {(0, x), (0, y), (1, x), (1, y)} [1].

**6. (a)** Matches: "11", "101", "1001" [3 -- 1 mark each; deduct 1 for each of "0110" or "1" wrongly included].
**(b)** `b(a|b)*a` [2] (1 for starting b and ending a; 1 for `(a|b)*` in between).

**7. (a)** "0110": S0 -> S0 -> S1 -> S1 -> S2; ends in S2, so **accepted** [1].
"1001": S0 -> S1 -> S2 -> S0 -> S1; ends in S1, so **rejected** [1]. Both traces correct [1].
**(b)** All binary strings that **end in 10** [1]; `(0|1)*10` [1].
**(c)** They are equivalent: both define regular languages, and any regular expression can be recognised by an
FSM and vice versa [1].

**8. (a)** A -0/0-> A, -1/1-> B, -1/0-> B, -0/1-> A: output **0101** [2].
**(b)** It outputs 1 whenever the input bit is **different from the previous bit** [1] (treating the bit before
the start as 0) and 0 when it is the same [1].

**9. (a)** Valid: "AB1" and "CCA2" [2] (1 each; deduct for "A" or "1A").
**(b)** `<code>` ends with exactly one `<digit>`, and digits are not allowed in `<id>`, so a second digit cannot
be produced [1].
**(c)** `<s> ::= 01 | 0<s>1` [1]. Recognising it requires counting an unlimited number of 0s to match the 1s
[1]; a regular expression is equivalent to an FSM, which has only a finite number of states, so it cannot
remember an unbounded count -- BNF can because its rule is recursive [1].

**10. (a)** The inner loop runs n times for each of the n iterations of the outer loop, so the comparison is
made n × n times [1]: **O(n²)** [1].
**(b)** O(1), O(log n), O(n), O(n²), O(2ⁿ) [1].
**(c)** COMPUTER has 8 distinct letters, so 8! = **40,320** [1].

**11. (a)** A tractable problem has a solution that runs in polynomial time (or less) [1]; an intractable problem
has no polynomial-time solution, so the time needed grows too quickly to be practical for large inputs [1].
**(b)** An exact solution would take too long for realistic input sizes [1], so a heuristic gives an
approximate or good-enough solution in a reasonable time, though it may not be optimal [1].

**12.** The Halting problem is the problem of deciding whether **any** program will eventually stop, given a
particular input [1]. It has been shown that no algorithm can solve it for all programs and inputs, so it is
**unsolvable / non-computable** [1]. Its significance is that it demonstrates there are some problems that
cannot be solved by a computer, however powerful [1].

**13. (a)**

| Step | State | Reads | Writes | Moves | New state |
|---|---|---|---|---|---|
| 1 | S0 | 1 | 1 | R | S1 |
| 2 | S1 | 0 | 0 | R | S1 |
| 3 | S1 | 1 | 1 | R | S0 |
| 4 | S0 | 1 | 1 | R | S1 |
| 5 | S1 | □ | 1 | R | SH |

Correct states for steps 1-4 [1]; correct final transition [1]; final tape **10111** [1].

**(b)** It appends an **even parity bit** [1]: S0 means an even number of 1s seen so far and S1 an odd number,
so on reaching the blank it writes the bit that makes the total number of 1s even [1].

**(c)** A Universal Turing machine can **simulate any other Turing machine** given that machine's description
on its tape [1]. Turing machines provide a general, formal model of computation and so a **definition of what
is computable** -- anything a computer can compute, a Turing machine can compute [1].

---

## Where marks are usually lost

- Leaving out "always terminates" from the definition of an algorithm.
- Writing set answers with repeated elements or forgetting that A \ B keeps only elements of A.
- Tracing an FSM correctly but forgetting to state "accepted" or "rejected".
- In Turing machine traces, omitting the symbol written or the direction moved at each step.
- Saying an intractable problem "cannot be solved" -- that describes a non-computable problem.

## Frequently asked questions

**How are FSM questions usually marked?**
Marks are given for correct transitions and the correct accepting state. Label every arrow with its input
(and output, for a Mealy machine) and mark the start state clearly.

**Do I need to prove the Halting problem?**
No. The AQA 7517 specification asks you to describe it and explain its significance, not prove it.
