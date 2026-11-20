---
title: "OxfordAQA A-Level Computer Science (9645): Regular expressions and regular languages -- Practice Questions"
seoTitle: "OxfordAQA 9645 Regular Expressions Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13 – Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
    subtopic: "regular-expressions-and-regular-languages-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.13.2 Regular expressions and regular languages: matching, writing expressions and converting to and from FSMs."
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

These questions practise sub-topic **3.13.2 Regular expressions and regular languages** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the metacharacters `*`, `+`, `?`, `|` and brackets, character classes, and the equivalence between regular expressions and finite state machines. A string matches an expression only if the whole string is described by it.

Related pages: [regular expressions study guide](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages/) ·
[regular expressions revision notes](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-revision-notes/)

## Section A

**1.** State the difference in meaning between `+` and `*` in a regular expression. **[2]**

**2.** For each string, state whether it matches the regular expression `s(a|o)ng`.

**(a)** `song` **[1]**
**(b)** `sing` **[1]**
**(c)** `sng` **[1]**

**3.** State what the character class `[A-Z]` matches. **[1]**

## Section B

**4.** State whether each string matches the expression `[A-Z][0-9]+`, giving a reason for each.

**(a)** `Z120` **[1]**
**(b)** `a7` **[1]**
**(c)** `B` **[1]**

**5.** Write a regular expression for each description.

**(a)** The file endings `jpg` or `jpeg`. **[2]**
**(b)** A word made of one or more lower-case letters. **[1]**
**(c)** Strings of 0 and 1 that end in 01. **[2]**

**6.** An FSM over the symbols 0 and 1 has start state S0 and accepting state S2. S3 is a trap state.

| State | Input 0 | Input 1 |
|---|---|---|
| S0 | S3 | S1 |
| S1 | S2 | S1 |
| S2 | S2 | S1 |
| S3 | S3 | S3 |

**(a)** Trace the input `1010` and state whether it is accepted. **[2]**
**(b)** Write a regular expression for the language that the FSM recognises. **[2]**
**(c)** Explain the purpose of state S3. **[1]**

**7.** Design an FSM that recognises the language of the regular expression `(ab)+` over the symbols a and b. Give the state transition table, state the start state and the accepting state, and include a trap state. **[4]**

**8.** Use your FSM from Question 7 to decide whether each string is accepted: `abab`, `aba`, and the empty string. **[3]**

**9.** The regular expression `[A-Z][A-Z]?[0-9][0-9]?` describes a code made of one or two capital letters followed by one or two digits.

**(a)** Explain what each of the four parts of the expression matches. **[2]**
**(b)** Calculate the number of different strings that the expression matches. **[3]**

**10.** For each language, state whether it can be described by a regular expression. Justify each answer in one sentence.

**(a)** Strings of a and b that end in b. **[2]**
**(b)** Strings that consist of some number of a symbols followed by exactly the same number of b symbols. **[2]**

## Answers

**1.** `+` means **one or more** repetitions of the previous item **[1]**; `*` means **zero or more** repetitions **[1]**. **[2]**

**2. (a)** Matches **[1]**
**(b)** Does not match: only `a` or `o` is allowed between `s` and `ng` **[1]**
**(c)** Does not match: one letter from the group is required **[1]**

**3.** Any single character from A to Z inclusive **[1]**.

**4. (a)** Matches: a capital letter followed by one or more digits **[1]**
**(b)** Does not match: the first character is lower case **[1]**
**(c)** Does not match: at least one digit is required by `+` **[1]**

**5. (a)** `jp(e)?g` or `jpe?g` **[2]** (award **[1]** for `jp` and `g` at the ends and **[1]** for making the `e` optional)
**(b)** `[a-z]+` **[1]**
**(c)** `(0|1)*01` **[2]** (award **[1]** for `01` at the end and **[1]** for any number of 0 or 1 before it)

**6. (a)** Path S0, S1, S2, S1, S2 **[1]**; it ends in S2, so it is **accepted** **[1]**. **[2]**
**(b)** `1(0|1)*0` **[2]** (award **[1]** for starting with 1 and **[1]** for ending with 0 with anything between)
**(c)** S3 is a trap state: a string that starts with 0 can never be accepted, so the machine stays in S3 for ever **[1]**.

**7.** Example answer: start state S0, accepting state S2, trap state S3. **[1]** for correct start and accepting states.

| State | Input a | Input b |
|---|---|---|
| S0 (start) | S1 | S3 |
| S1 | S3 | S2 |
| S2 (accepting) | S1 | S3 |
| S3 (trap) | S3 | S3 |

Award **[1]** for the arc a from S0 to S1 and b from S1 to S2, **[1]** for the arc a from S2 back to S1 (allowing more pairs), and **[1]** for the remaining arcs going to a trap state. **[4]**

**8.** `abab`: path S0, S1, S2, S1, S2, accepted **[1]**. `aba`: path S0, S1, S2, S1, rejected **[1]**. The empty string: stays in S0, which is not accepting, so rejected **[1]**. **[3]**

**9. (a)** A required capital letter, an optional second capital letter, a required digit, and an optional second digit **[2]** (award **[1]** for the two required parts and **[1]** for the two optional parts).
**(b)** Letter part: 26 + 26 × 26 = 26 + 676 = 702 possibilities **[1]**. Digit part: 10 + 10 × 10 = 110 possibilities **[1]**. Total 702 × 110 = **77 220** strings **[1]**. **[3]**

**10. (a)** **Yes**, for example `(a|b)*b` **[1]**; an FSM only needs two states to remember whether the last symbol was b **[1]**. **[2]**
**(b)** **No** **[1]**; it needs unlimited counting of the a symbols, but an FSM has only a finite number of states, so neither an FSM nor a regular expression can describe it **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.2 Regular expressions and regular languages.
