---
title: "OxfordAQA A-Level Computer Science (9645): Backus-Naur Form (BNF) and syntax diagrams -- Practice Questions"
seoTitle: "OxfordAQA 9645 BNF and Syntax Diagrams Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13 – Theory of computation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 13.4
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
  - qualification: "a-level"
    topic: "theory-of-computation-9645"
    subtopic: "backus-naur-form-bnf-and-syntax-diagrams-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.13.4 BNF and syntax diagrams: checking syntax, writing rules, derivations and BNF compared with regular expressions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.13.4 Backus-Naur Form (BNF) and syntax diagrams** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: checking strings against production rules, writing rules, derivations, syntax diagrams, and what BNF can describe that regular expressions cannot. In BNF, `::=` means "is defined as", `|` means "or", and names in angle brackets are non-terminals.

Related pages: [BNF study guide](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams/) ·
[BNF revision notes](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams-revision-notes/)

## Section A

**1.** Explain the difference between a **terminal** and a **non-terminal** in BNF. **[2]**

**2.** A student says that BNF defines what a program does when it runs. Explain what is wrong with this statement. **[1]**

## Section B

**3.** A part code is defined by these rules.

```
<code>  ::= <area><num>
<area>  ::= <upper> | <upper><upper>
<upper> ::= A | B | C | D
<num>   ::= <d> | <d><d>
<d>     ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

**(a)** State whether each string is valid: `B7`, `CD12`, `ABC1`, `D123`, `Z1`. **[3]**
**(b)** Calculate the number of different valid codes. **[3]**

**4.** A list of digits is defined by

```
<list>  ::= [<items>]
<items> ::= <d> | <d>,<items>
```

where `<d>` is any single digit.

**(a)** State whether each string is valid: `[3]`, `[1,2,3]`, `[]`, `[1,]`. **[2]**
**(b)** Identify the base case and the recursive case in the rule for `<items>`. **[2]**

**5.** Write BNF production rules for a binary number made of one or more digits, each being 0 or 1. Use recursion. **[3]**

**6.** Write BNF rules for a laugh that consists of the two letters `ha` repeated one or more times, such as `ha` and `hahaha`. **[2]**

**7.** The following rules define a language of palindromes over the letters a and b.

```
<pal> ::= a | b | aa | bb | a<pal>a | b<pal>b
```

**(a)** Show a derivation of `abbba`. **[3]**
**(b)** State whether `abab` is valid, with a reason. **[1]**

**8.** The following rules define a language.

```
<eq> ::= ab | a<eq>b
```

**(a)** Show a derivation of `aaabbb`. **[2]**
**(b)** Explain why no regular expression can describe this language. **[2]**

**9.** A syntax diagram for `<name>` has an entry, then a box containing `letter`. After that box, there is a loop which can pass through a box `letter` or a box `digit` any number of times (including none) before reaching the exit.

**(a)** State whether each string is valid: `x`, `9a`, `a9b`, `ab2`, `a-`. **[3]**
**(b)** Write BNF rules that define the same language, using `<letter>` and `<digit>` as already defined. **[3]**

**10.** State **one** type of language that BNF can describe but a regular expression cannot, and explain what feature of BNF makes this possible. **[2]**

## Answers

**1.** A **terminal** is a symbol that appears in the final string and is not defined further **[1]**. A **non-terminal** is a name in angle brackets that stands for a set of strings and is defined by a production rule **[1]**. **[2]**

**2.** BNF defines only the **syntax** (whether a string is correctly formed), not its meaning or behaviour **[1]**.

**3. (a)** `B7` valid; `CD12` valid **[1]** (both). `ABC1` invalid: the area has at most two letters **[1]**. `D123` invalid: the number has at most two digits **[1]** (`Z1` is also invalid because Z is not an allowed letter). **[3]**
**(b)** Areas: 4 + 4 × 4 = 20 **[1]**. Numbers: 10 + 10 × 10 = 110 **[1]**. Codes: 20 × 110 = **2200** **[1]**. **[3]**

**4. (a)** `[3]` valid; `[1,2,3]` valid **[1]**. `[]` invalid because `<items>` needs at least one digit; `[1,]` invalid because a comma must be followed by more items **[1]**. **[2]**
**(b)** Base case: `<d>` **[1]**. Recursive case: `<d>,<items>` **[1]**. **[2]**

**5.** Example answer:

```
<binary> ::= <bit> | <bit><binary>     [1] base case and [1] recursive case
<bit>    ::= 0 | 1                       [1]
```

**[3]**

**6.** Example answer:

```
<laugh> ::= ha | ha<laugh>
```

Award **[1]** for the base case `ha` and **[1]** for the recursive alternative. **[2]**

**7. (a)**

```
<pal>
=> a<pal>a
=> ab<pal>ba
=> abbba
```

Award **[1]** for starting with `a<pal>a`, **[1]** for `b<pal>b` inside it and **[1]** for replacing the final `<pal>` by `b`. **[3]**
**(b)** Not valid: it is not a palindrome (reversed it reads `baba`) **[1]**.

**8. (a)** `<eq> => a<eq>b => aa<eq>bb => aaabbb` **[2]** (award **[1]** for two uses of the recursive rule and **[1]** for finishing with `ab`).
**(b)** The language needs the number of a symbols to be counted and matched against the number of b symbols **[1]**. A regular expression corresponds to a finite state machine, which has a finite number of states and cannot count without limit **[1]**. **[2]**

**9. (a)** `x`, `a9b` and `ab2` are valid **[1]**. `9a` is invalid because the first character must be a letter **[1]**. `a-` is invalid because `-` is neither a letter nor a digit **[1]**. **[3]**
**(b)** Example answer:

```
<name> ::= <letter> | <letter><rest>
<rest> ::= <letter> | <digit> | <letter><rest> | <digit><rest>
```

Award **[1]** for the first rule, **[1]** for the base cases of `<rest>` and **[1]** for the recursive cases. **[3]**

**10.** Any one of: palindromes; strings with equal numbers of certain characters (such as a^n b^n) **[1]**. BNF allows **recursion**, so a rule can refer to itself and nest to any depth, which gives the unlimited memory that a finite state machine lacks **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.4 Backus-Naur Form (BNF) and syntax diagrams.
