---
title: "OxfordAQA A-Level Computer Science: Theory of computation (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Theory of Computation Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
description: "Original practice questions with marked answers on FSMs, regex, Turing machines, BNF and Big O for OxfordAQA International A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

This set covers section **3.13 Theory of computation** (3.13.1 to 3.13.5) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1 (International AS exams May/June 2025 onwards, International A-level exams May/June 2026 onwards). Every question is on **International A-level only** content, examined in Unit 4: Advanced concepts and principles of computer science, a written exam. Pseudo-code is language-neutral, as the specification sets no conventions here. A missing FSM transition means the string is rejected.

Before you start: [theory of computation study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) · [matching revision notes](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-revision-notes/) · [OxfordAQA A-level Computer Science hub](/boards/oxfordaqa/a-level/computer-science/) · [checklist to print](/checklists/oxfordaqa/a-level/computer-science/) · [free 10-minute diagnostics](/diagnostics/)

## Questions

**1.** Regular languages.

**(a)** State what is meant by a regular language. **[1]**
**(b)** State the relationship between regular expressions and finite state machines. **[1]**

**2.** A regular expression is `[PR]o+(ll|t)?`. For each string below, state whether it matches the expression. For any string that does not match, give the reason: `Poll`, `Pt`, `Root`, `Rol`. **[4]**

**3.** Write a regular expression for all strings over the alphabet {0, 1} that begin with 1 and never contain two 0s next to each other. **[3]**

**4.** Design a finite state machine, as a state transition table, that accepts every string over {0, 1} that ends in `11` and rejects all others. Identify the start state and the accepting state(s). **[4]**

**5.** An FSM over {a, b} has start state S0 and one accepting state, S2. Its transitions are: S0 on a → S1; S1 on b → S1; S1 on a → S2; S2 on a → S2. Write a regular expression for the language this FSM accepts. **[2]**

**6.** A Mealy machine has start state S0 and these transitions, written `input / output`:

| State | Input a | Input b |
|---|---|---|
| S0 | a / 0 → S1 | b / 0 → S0 |
| S1 | a / 0 → S1 | b / 1 → S0 |

**(a)** Give the output string for input `abbaba`. **[2]**
**(b)** Describe what the machine does. **[1]**
**(c)** State one difference between a Mealy machine and an FSM without output. **[1]**

**7.** A Turing machine has start state S0 and halting state S2. `□` is a blank square. Its transition function is:

```
δ(S0, 0) = (S0, 0, R)     δ(S1, 0) = (S1, 1, L)
δ(S0, 1) = (S0, 1, R)     δ(S1, 1) = (S2, 0, R)
δ(S0, □) = (S1, □, L)
```

The tape holds `1100` followed by blanks, and the head starts on the leftmost 1.

**(a)** Trace the machine, showing the state and the tape contents as it runs, until it halts. **[4]**
**(b)** State the purpose of this machine when the tape holds a binary number that is not zero. **[1]**
**(c)** Show how `δ(S1, 0) = (S1, 1, L)` would be labelled on a state transition diagram. **[1]**
**(d)** Explain why S2 is a halting state. **[1]**

**8.** Turing machines and computation.

**(a)** Explain why Turing machines are important to the subject of computation. **[2]**
**(b)** Describe a Universal Turing machine. **[2]**

**9.** A theatre defines seat codes with this BNF:

```
<seat>    ::= <row><col>
<row>     ::= <nonzero> | <nonzero><digit>
<nonzero> ::= 1|2|3|4|5|6|7|8|9
<digit>   ::= 0 | <nonzero>
<col>     ::= A|B|C|D
```

**(a)** For each of `7B`, `07C`, `4F` and `105A`, state whether it is a valid `<seat>`, giving a reason for any that are invalid. **[4]**
**(b)** Rewrite the `<row>` rule so that a row number can have any number of digits but still cannot start with 0. **[2]**
**(c)** State one type of language that BNF can define but a regular expression cannot, and explain why. **[2]**

**10.** Consider these three fragments, where `scores` holds n items.

```
Fragment A:  total ← 0
             FOR i ← 1 TO n
                 total ← total + scores[i]

Fragment B:  FOR i ← 1 TO n
                 FOR j ← 1 TO n
                     grid[i][j] ← i * j

Fragment C:  first ← scores[1]
```

**(a)** State the time complexity of Fragment A in Big O notation. **[1]**
**(b)** Derive the time complexity of Fragment B, showing your reasoning. **[2]**
**(c)** Fragment B takes 0.2 seconds when n = 2000. Estimate the time when n = 6000. **[2]**
**(d)** State the time complexity of Fragment C. **[1]**

**11.** Comparing algorithms.

**(a)** State the best-case and worst-case time complexity of searching a binary search tree of n items, and describe when each case happens. **[4]**
**(b)** Explain the difference between an algorithm being efficient time-wise and space-wise. **[2]**

**12.** A drone company wants the shortest route that visits 12 drop points once each.

**(a)** State what is meant by a tractable problem. **[1]**
**(b)** Calculate how many different orders the 12 drop points could be visited in, and explain why checking every order is not a practical method as the number of drop points grows. **[2]**
**(c)** Explain what is meant by a heuristic and describe how a heuristic method could help the company. **[2]**
**(d)** The company wants a tool that reports, without running it, whether any route-planning program will ever stop. Explain why this tool cannot be written. **[2]**

## Answers

**1. (a)** A language that can be represented by a regular expression. [1]
**(b)** They are equivalent ways of defining a regular language. [1]
*Examiner insight:* For (b), "both describe strings" is too vague; the answer needs the word equivalent, linked to regular languages.

**2.** `Poll`: **matches**. [1]
`Pt`: **does not match**, because `o+` needs at least one o. [1]
`Root`: **matches**. [1]
`Rol`: **does not match**: the optional group must be `ll` or `t`, not a single l. [1]
*Examiner insight:* A bare "no" usually earns nothing when a reason is asked for; name the part that fails.

**3.** Starts with a literal 1. [1]
A repeated group that only allows a 0 when it is followed by a 1, such as `(1|01)*`. [1]
An optional single 0 at the end: **`1(1|01)*0?`** (an equivalent answer is `(1|10)+`). [1]
*Examiner insight:* Test your expression on a string it must reject, such as `100`; an expression that accepts extra strings gains less credit.

**4.** Three states, with S0 as the start state. [1]
On input 1: S0 → S1, S1 → S2, S2 → S2. [1]
On input 0: every state returns to S0. [1]
S2 is the only accepting state. [1]

*Examiner insight:* Sending `0` to a trap state is a common error; a 0 must reset the count, because `011` must still be accepted.

**5.** An `a`, then any number of `b`s, then one `a`. [1]
Then any number of further `a`s: **`ab*a+`** (or `ab*aa*`). [1]
*Examiner insight:* `ab*a*` is wrong because it accepts `ab`, which ends in non-accepting S1.

**6. (a)** States visited S0, S1, S0, S0, S1, S0, S1 [1]; output **010010**. [1]
**(b)** It outputs 1 each time the input completes the pattern `ab`, and 0 otherwise. [1]
**(c)** A Mealy machine produces an output on each transition; an FSM without output only accepts or rejects the input. [1]
*Examiner insight:* In (a), write the state sequence beside the output so a single slip can be seen and the method still credited.

**7. (a)** In S0 the head moves right over 1, 1, 0, 0 unchanged. [1]
At the blank it moves left into S1. [1]
In S1 both 0s become 1 as it moves left (tape `1111`). [1]
The second 1 becomes 0 and the machine moves right into S2, halting with tape **`1011`**. [1]
**(b)** It subtracts 1 from the binary number (12 → 11). [1]
**(c)** An arc from S1 back to S1 labelled **`0 / 1, L`**. [1]
**(d)** S2 has no outgoing transitions. [1]
*Examiner insight:* A final tape alone is hard to credit; show the state and tape after each change.

**8. (a)** They provide a general, formal model of computation. [1]
They define what is computable. [1]
**(b)** A Turing machine that can simulate the behaviour of any other Turing machine. [1]
A description of the machine to simulate and that machine's input are stored on the UTM's tape. [1]
*Examiner insight:* Make two distinct points in (a) and two in (b); one idea written twice in different words is credited only once.

**9. (a)** `7B`: **valid** (row 7, column B). [1]
`07C`: **invalid**, a row must start with `<nonzero>`, so 0 cannot come first. [1]
`4F`: **invalid**, F is not an option in `<col>`. [1]
`105A`: **invalid**, `<row>` allows at most two digits. [1]
**(b)** A recursive rule with a non-recursive base case: [1]
**`<row> ::= <nonzero> | <row><digit>`** [1]
**(c)** Palindromes, or strings that must contain equal numbers of certain characters. [1]
They need unlimited memory of earlier symbols, which BNF gets through recursion but an FSM, with a fixed number of states, cannot provide. [1]
*Examiner insight:* In (b), `<row> ::= <nonzero> | <digit><row>` accepts `05` and rejects `10`, because the base case sits at the wrong end; test your rule on both.

**10. (a)** **O(n)**. [1]
**(b)** The inner loop runs n times for each of the n passes of the outer loop [1], so there are n × n = n² assignments: **O(n²)**. [1]
**(c)** n is multiplied by 3, so the time is multiplied by 3² = 9 [1]; 0.2 × 9 = **1.8 seconds**. [1]
**(d)** **O(1)**. [1]
*Examiner insight:* In (c), multiplying by 3 instead of 9 assumes linear growth; state the scaling factor so your method is visible.

**11. (a)** Best case **O(1)**. [1]
This happens when the item searched for is at the root. [1]
Worst case **O(n)**. [1]
This happens when the tree is unbalanced, such as one long chain built from sorted data. [1]
**(b)** Time-wise: it runs quickly as the problem grows [1]; space-wise: it uses minimal memory. [1]
*Examiner insight:* Quoting O(log n) as the worst case is a common slip; O(log n) applies to a balanced tree, not to every tree.

**12. (a)** A problem that has a polynomial (or less) time solution. [1]
**(b)** 12! = **479,001,600** orders. [1]
The count grows faster than any polynomial, so checking every order soon takes far too long. [1]
**(c)** A heuristic is a set of rules or knowledge about the problem domain. [1]
For example, "always fly to the nearest unvisited point" quickly gives an approximate but non-optimal route; or relax a constraint, accepting any route under a set distance. [1]
**(d)** This is the Halting problem: deciding whether a program will stop for a given input, without running it, is unsolvable. [1]
Some problems cannot be solved by a computer at all, however much time or power is available. [1]
*Examiner insight:* In (d), saying the check would be "too slow" confuses intractable with non-computable; the answer must say the problem is unsolvable.

## Where marks are usually lost

- Writing Mealy outputs in the states instead of on the arcs.
- Using `*` where at least one repetition is required, so the expression also accepts too-short strings.
- Writing a recursive BNF rule with no base case, or with the recursion on the wrong side.
- Treating the binary search tree worst case as O(log n).
- Showing only the final tape in a Turing machine trace, with no intermediate states.
- Mixing up intractable (no polynomial-time solution) and non-computable (no algorithm at all).

## Next steps

- Go over the key facts in the [revision notes](/resources/oxfordaqa-a-level-computer-science-theory-of-computation-revision-notes/).
- Return to the [study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) for anything you got wrong.
- See the [course hub](/boards/oxfordaqa/a-level/computer-science/) and the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.13 Theory of computation.
