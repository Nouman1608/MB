---
title: "AQA A-Level Computer Science (7517): Regular languages -- Practice Questions"
seoTitle: "AQA A-Level CS Regular Languages Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "regular-languages-7517"
description: "Original AQA 7517 section 4.4.2 questions with answers: finite state machines, Mealy machines, sets, regular expressions and regular languages."
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

Related: [Regular languages study guide](/resources/aqa-a-level-computer-science-7517-regular-languages/) | [Regular languages revision notes](/resources/aqa-a-level-computer-science-7517-regular-languages-revision-notes/)

In regular expressions, `*` means zero or more repetitions, `+` one or more, `?` zero or one, `|` alternation (or) and brackets group. A regular expression must match the whole string.

---

## Section A

**1.** State what is meant by an accepting state of a finite state machine. **[1]**

**2.** State where the output is produced in a Mealy machine. **[1]**

**3.** State the meaning of the symbol ∈ in set notation. **[1]**

**4.** State the meaning of the `+` metacharacter in a regular expression. **[1]**

**5.** State what is meant by a regular language. **[2]**

## Section B

**6.** A finite state machine has states R0 (the start state), R1 and R2 (the accepting state). Its transitions are:

| State | Input 0 | Input 1 |
|---|---|---|
| R0 | R0 | R1 |
| R1 | R2 | R1 |
| R2 | R2 | R2 |

**(a)** Draw the state transition diagram, or describe every arrow on it, marking the start and accepting states. **[3]**
**(b)** For each input, state whether it is accepted: `0011`, `0110`, `111`. **[3]**
**(c)** Describe the strings the machine accepts. **[1]**
**(d)** Write a regular expression for the strings it accepts. **[2]**

**7.** Design a finite state machine, as a state transition table, that accepts the strings over {a, b} that contain an even number of a's (including none). Name the states N0 (start) and N1. State which state or states are accepting. **[4]**

**8.** A Mealy machine has states Z (the start state) and W. Its transitions, written `next state / output`, are:

| State | Input 0 | Input 1 |
|---|---|---|
| Z | Z / 0 | W / 1 |
| W | Z / 1 | W / 0 |

**(a)** Give the output for the input `1101`. **[2]**
**(b)** Give the output for the input `1010`. **[1]**
**(c)** Describe what the machine outputs for each input bit. **[2]**

**9.** The sets A and B are A = {2, 4, 6, 8, 10} and B = {3, 6, 9}.

**(a)** Write down A ∪ B. **[1]**
**(b)** Write down A ∩ B. **[1]**
**(c)** Write down A \ B. **[1]**
**(d)** State the cardinality of A × B. **[1]**
**(e)** State whether {6} ⊂ A is true, and explain what ⊂ means. **[2]**

**10.** Write down the members of the set {x | x ∈ ℕ ∧ x < 5 ∧ x MOD 2 = 0}. **[2]**

**11.** Explain what is meant by a countably infinite set, and give an example of an infinite set which is not countable. **[2]**

**12.** For each regular expression, state which of the given strings it matches.

**(a)** `a+b?` : a, aab, ab, b, abb **[2]**
**(b)** `ab*c` : ac, abbbc, c, abcc **[2]**

**13.** Write a regular expression for each description, over the alphabet {a, b}.

**(a)** Strings that begin with b and end with a, with at least two characters. **[2]**
**(b)** The string a followed by any number of b's, including none. **[1]**

**14.** The language {0ⁿ1ⁿ | n ≥ 1} contains 01, 0011 and 000111. Explain why this language is not regular. **[3]**

---

## Answers

**1.** A state which, if the machine is in it when all the input has been read, means that the input is accepted [1].

**2.** On each transition (the output depends on the current state and the input symbol) [1].

**3.** "Is a member of" (belongs to the set) [1].

**4.** One or more repetitions of the preceding item [1].

**5.** A language that can be represented by a regular expression [1]; or one that a finite state machine will accept [1].

**6. (a)** R0 is the start state, drawn with an incoming arrow [1]; R2 is the accepting state, drawn with a double circle [1]; arrows: R0 to R0 on 0, R0 to R1 on 1, R1 to R1 on 1, R1 to R2 on 0, R2 to R2 on 0 and on 1 [1].
**(b)** `0011` ends in R1: rejected [1]. `0110` ends in R2: accepted [1]. `111` ends in R1: rejected [1].
**(c)** Strings that contain a 1 followed immediately by a 0 (the substring 10) [1].
**(d)** `(0|1)*10(0|1)*` [2]. (One mark for the substring 10 in the middle, one mark for `(0|1)*` on both sides.)

**7.**

| State | Input a | Input b |
|---|---|---|
| N0 (start, accepting) | N1 | N0 |
| N1 | N0 | N1 |

Two states with N0 as start [1]; a switches between N0 and N1 [1]; b leaves the state unchanged [1]; N0 identified as the accepting state [1].

**8. (a)** Z reads 1: output 1, state W. W reads 1: output 0, state W. W reads 0: output 1, state Z. Z reads 1: output 1. The output is `1011` [2]. (One mark for the first two digits correct.)
**(b)** `1111` [1].
**(c)** It outputs 1 when the current bit is different from the previous bit (taking the bit before the first to be 0), and 0 when it is the same [2].

**9. (a)** {2, 3, 4, 6, 8, 9, 10} [1].
**(b)** {6} [1].
**(c)** {2, 4, 8, 10} [1].
**(d)** 5 × 3 = 15 [1].
**(e)** True [1]; ⊂ means proper subset: every member of {6} is in A and A has at least one member that is not in {6} [1].

**10.** The numbers must be natural numbers less than 5 that are even [1]; {0, 2, 4} [1].

**11.** A countably infinite set is infinite but its members can be counted off using the natural numbers [1]; the set of real numbers is infinite but not countable [1].

**12. (a)** `a+b?` matches a, aab and ab [2]. It does not match b (needs at least one a) or abb (at most one b). One mark if two of the three matching strings are given with no wrong ones.
**(b)** `ab*c` matches ac and abbbc [2]. It does not match c (needs a first) or abcc (only one c). One mark for one correct string with no wrong ones.

**13. (a)** `b(a|b)*a` [2]. (One mark for starting with b and ending with a, one mark for `(a|b)*` in between.)
**(b)** `ab*` [1].

**14.** The machine must remember how many 0s have been read, so that it can check that the number of 1s is the same [1]; there is no limit on n, so it would need an unlimited number of states [1]; a finite state machine has only a finite number of states, so cannot accept this language, and so it has no regular expression [1].

---

## Where marks are usually lost

- Judging acceptance before the whole input has been read.
- Drawing the output on the state in a Mealy machine instead of on the transition.
- Leaving out transitions in a table.
- Mixing up ∪ and ∩, or writing A \ B as B \ A.
- Forgetting brackets in a regular expression, for example `ab+` for `(ab)+`.
