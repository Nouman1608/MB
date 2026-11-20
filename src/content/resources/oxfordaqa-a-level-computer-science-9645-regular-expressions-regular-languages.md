---
title: "OxfordAQA A-Level Computer Science (9645): Regular expressions and regular languages"
seoTitle: "OxfordAQA 9645 Regular Expressions Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.13.2 in depth: regular expression metacharacters and classes, matching, converting between regular expressions and FSMs, regular languages."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.13.2 Regular expressions and regular languages** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.13 Theory of computation. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to form and use simple regular expressions for string matching, to describe the relationship between regular expressions and finite state machines (FSMs), to write a regular expression for the language an FSM recognises, to design an FSM for the language of a given regular expression, and to know what a regular language is.

The topic-level [theory of computation study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) covers all of topic 3.13 in one pass. This page gives regular expressions their own space, with more examples and a method for converting both ways. It builds on the [finite state machines study guide](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines/). Afterwards use the [regular expressions revision notes](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-revision-notes/) and the [regular expressions practice questions](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-practice/).

## What a regular expression does

A **regular expression** is a pattern that describes a **set of strings**. A string **matches** the expression if it is in that set. In this specification, treat a match as covering the **whole string**, unless a question says otherwise. Ordinary characters match themselves, so the expression `cat` matches only the string `cat`. The power comes from the metacharacters.

## The metacharacters you need

| Symbol | Meaning | Example | Matches | Does not match |
|---|---|---|---|---|
| `*` | 0 or more repetitions | `zu*m` | zm, zum, zuum | zam |
| `+` | 1 or more repetitions | `zu+m` | zum, zuum | zm |
| `?` | 0 or 1 (optional) | `colou?r` | color, colour | colouur, colr |
| `\|` | alternation (or) | `(sun\|moon)light` | sunlight, moonlight | light |
| `( )` | groups part of an expression | `(ab)+` | ab, abab | aba |

Two rules cause most of the errors.

1. **A repetition symbol applies to the character or group just before it.** `ab*` means an `a` followed by any number of `b`, whereas `(ab)*` means any number of the pair `ab`.
2. **Alternation covers everything in its group.** `(sun|moon)(light|shine)` has four matches: sunlight, sunshine, moonlight and moonshine. Without the brackets, `sun|moonlight` would mean "sun" or "moonlight".

Any other metacharacter that appears in an exam question will be explained in the question.

## Character classes

A **character class** in square brackets matches **one** character from the set listed. `[CH]at` matches Cat and Hat but not Bat. A **range** such as `[A-Z]` matches any one character from A to Z, including A and Z. A class can be followed by a repetition symbol.

| Expression | Meaning | Matches | Does not match |
|---|---|---|---|
| `[A-Z][a-z]*` | a capital letter, then any lower-case letters | Hello, H | hello, HELLO, the empty string |
| `[0-9]+` | one or more digits | 2024 | the empty string, 12a |
| `[A-Z][A-Z]?[0-9][0-9]?` | one or two letters then one or two digits | A1, AB12, B7 | AB, A123, ab1, ABC1 |

The third pattern is built in steps: a required capital letter, an optional second capital letter, a required digit and an optional second digit. Each `?` makes the character before it optional.

### Worked example 1: writing expressions

*Write an expression for each description.*

- **Strings of a, b or c that start with a and end with c, with only b between.** `ab*c` matches ac, abc and abbbc.
- **A word that is either "grey" or "gray".** `gr(e|a)y`, or with a class, `gr[ea]y`.
- **A part code of two or more digits.** `[0-9][0-9]+`: one required digit, then one or more further digits.
- **One or more words made of "ab" or "ba" pairs.** `(ab|ba)+` matches ab, ba, abba and baab, but not aba, because the final `a` is left over.

### Worked example 2: testing a string

Test the expression `x+y?z*` against four strings.

| String | Working | Result |
|---|---|---|
| `x` | one x, no y, no z | matches |
| `xxzz` | two x, no y, two z | matches |
| `y` | there must be at least one x first | does not match |
| `xyy` | only one y is allowed | does not match |

## Regular expressions and FSMs are equivalent

A language is called **regular** if it can be represented by a **regular expression**. Three facts follow from the specification, and you need all three:

1. A language is **regular** if a regular expression represents it.
2. **Any regular language can be recognised by an FSM.**
3. **A regular expression can be written to describe the language recognised by any FSM.**

So regular expressions and FSMs are two ways of defining the same class of languages. A regular expression is a compact written description; an FSM is a machine that can check a string step by step.

### Worked example 3: from an FSM to a regular expression

Consider the machine from the FSM guide that accepts strings of 0 and 1 with an **even number of 1s**. S0 is the start and accepting state.

| State | Input 0 | Input 1 |
|---|---|---|
| S0 | S0 | S1 |
| S1 | S1 | S0 |

Think about the paths that begin and end in S0. Reading 0s keeps the machine in S0. A 1 moves it to S1, where any number of 0s may follow, and the next 1 brings it back to S0. So each trip away from S0 and back looks like `10*1`, and the whole language is:

```
0*(10*10*)*
```

The leading `0*` covers 0s before the first 1; the group `10*10*` is one pair of 1s with 0s after each, and `( )*` allows any number of such pairs, including none. Check: the empty string and `0` match; `11`, `1010` and `10001` match; `111` does not. Comparing this expression and the machine on every string of 0s and 1s up to length 9 gives the same answer for every string.

### Worked example 4: from a regular expression to an FSM

Design an FSM for `a(b|c)*d` over the symbols a, b, c and d.

1. The string must start with `a`: S0 --a--> S1.
2. Then any number of `b` or `c`: S1 --b--> S1 and S1 --c--> S1.
3. It must end with `d`: S1 --d--> S2, and S2 is the **accepting state**.
4. Every other arc leads to a **trap state** S3 that loops to itself on every symbol. For example S0 on b, S1 on a, and S2 on any symbol all go to S3.

| State | a | b | c | d |
|---|---|---|---|---|
| S0 (start) | S1 | S3 | S3 | S3 |
| S1 | S3 | S1 | S1 | S2 |
| S2 (accepting) | S3 | S3 | S3 | S3 |
| S3 (trap) | S3 | S3 | S3 | S3 |

Check: `ad` and `abccbd` reach S2 and are accepted; `acb` ends in S1 and `add` falls into S3, so both are rejected. This table and the expression agree on every string over a, b, c and d up to length 7.

### Worked example 5: a design with memory

Design an expression for strings of 0 and 1 that **end in 01**. The expression is `(0|1)*01`: any string of 0s and 1s, then 01. The matching FSM needs to remember how much of "01" it has just seen:

| State | Meaning | Input 0 | Input 1 |
|---|---|---|---|
| S0 (start) | no progress | S1 | S0 |
| S1 | last symbol was 0 | S1 | S2 |
| S2 (accepting) | last two symbols were 01 | S1 | S0 |

`1101` ends in S2: accepted. `10` ends in S1: rejected.

## Limits of regular languages

A regular language needs only a finite memory, because an FSM has a finite number of states. A language such as "a number of a symbols followed by the same number of b symbols" needs unlimited counting, so no FSM and therefore no regular expression can describe it. The next sub-topic, [Backus-Naur Form and syntax diagrams](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams/), covers a notation that can.

## Exam technique

- **Write what each part matches** as you build an expression, working left to right.
- **Test with strings.** Check one string that should match, one that should not, and the shortest string.
- **Brackets matter.** Use them whenever a repetition or alternation applies to more than one character.
- **For FSM conversions,** state the start and accepting states, and add a trap state when strings can go wrong.
- **For definitions,** quote all three links between regular languages, regular expressions and FSMs.

## Common mistakes

- Using `+` where "optional" is meant: `zu+m` rejects `zm`.
- Writing `ab*` when `(ab)*` is meant.
- Treating `[CH]` as matching both characters; it matches exactly one of them.
- Forgetting that `*` allows zero repetitions, so the empty string can match.
- Leaving out trap-state arcs without saying what they do.

## Next steps

- [Regular expressions revision notes](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-revision-notes/)
- [Regular expressions practice questions](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-practice/)
- [Finite state machines study guide](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.2 Regular expressions and regular languages.
