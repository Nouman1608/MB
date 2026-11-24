---
title: "OxfordAQA A-Level Computer Science (9645): Regular expressions and regular languages -- Revision Notes"
seoTitle: "OxfordAQA 9645 Regular Expressions Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.13.2: metacharacters, character classes, converting between regular expressions and FSMs, and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.13.2 Regular expressions and regular languages** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.13, examined in Unit 4). For worked conversions, see the [regular expressions study guide](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages/), then practise with the [regular expressions practice questions](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-practice/).

## What the specification requires

- **Form and use** simple regular expressions for string matching.
- Know the metacharacters `*`, `+`, `?`, `|` and `( )`.
- Use **character classes**, such as `[CH]` and `[A-Z]`.
- Describe the **relationship** between regular expressions and FSMs.
- **Write a regular expression** for the language of a given FSM.
- **Design an FSM** for the language of a given regular expression.
- Know what a **regular language** is.

Any other metacharacter in an exam question is explained in the question.

## Key terms

| Term | Meaning |
|---|---|
| Regular expression | A pattern that describes a set of strings |
| Match | A string that belongs to the set the expression describes |
| Metacharacter | A symbol with a special meaning in an expression |
| Character class | Square brackets matching one character from a set or range |
| Regular language | A language that can be represented by a regular expression |
| FSM | A finite state machine that accepts or rejects strings |

## Metacharacters

| Symbol | Meaning | Example | Matches | Rejects |
|---|---|---|---|---|
| `*` | 0 or more | `zu*m` | zm, zuum | zam |
| `+` | 1 or more | `zu+m` | zum, zuum | zm |
| `?` | 0 or 1 | `colou?r` | color, colour | colouur |
| `\|` | or | `(sun\|moon)light` | sunlight, moonlight | light |
| `( )` | group | `(ab)+` | ab, abab | aba |
| `[ ]` | one character from a set | `[CH]at` | Cat, Hat | Bat, CHat |
| `[A-Z]` | one character in the range | `[A-Z][a-z]*` | Hello, H | hello, HELLO |

A repetition symbol applies to the single character, group or class **just before** it.

## Building expressions step by step

| Description | Expression | Check |
|---|---|---|
| One or two capitals then one or two digits | `[A-Z][A-Z]?[0-9][0-9]?` | A1, AB12 match; AB and A123 do not |
| Starts with a, any b or c, ends in d | `a(b\|c)*d` | ad, abccbd match; add does not |
| One or more pairs ab or ba | `(ab\|ba)+` | abba matches; aba does not |
| Ends in 01 | `(0\|1)*01` | 1101 matches; 10 does not |
| x, optional y, any z | `x+y?z*` | xxzz matches; y and xyy do not |

## Regular languages and FSMs

- A language is **regular** if it can be represented by a regular expression.
- **Any regular language can be recognised by an FSM.**
- A regular expression can be written for **the language recognised by any FSM**.
- Regular expressions and FSMs are **equivalent** ways to define a regular language.

## Converting from an FSM to an expression

Even number of 1s (start state S0 is accepting):

| State | Input 0 | Input 1 |
|---|---|---|
| S0 | S0 | S1 |
| S1 | S1 | S0 |

Each trip S0 to S1 and back is `10*1`. The language is `0*(10*10*)*`. It matches the empty string, 0, 11, 1010 and 10001, and rejects 111.

## Converting from an expression to an FSM

For `a(b|c)*d` over a, b, c and d:

| State | a | b | c | d |
|---|---|---|---|---|
| S0 (start) | S1 | S3 | S3 | S3 |
| S1 | S3 | S1 | S1 | S2 |
| S2 (accepting) | S3 | S3 | S3 | S3 |
| S3 (trap) | S3 | S3 | S3 | S3 |

Method: read the expression left to right and add one state for each stage. Loops come from `*` and `+`, extra arcs come from `|`, a skip comes from `?`, and everything else goes to a trap state.

For `(0|1)*01` the machine needs three states: no progress (start), last symbol 0, and last two symbols 01 (accepting).

## Limits

An FSM has finitely many states, so it cannot count without limit. No regular expression can describe "n symbols a followed by n symbols b". Backus-Naur Form can.

## Pattern-building checklist

1. List the characters that **must** appear and in what order.
2. For each position decide: exactly one (write it or a class), optional (`?`), one or more (`+`), zero or more (`*`) or a choice (`|` in brackets).
3. Group anything repeated or chosen with `( )`.
4. Test the shortest string you expect to match, one longer string and one that must fail.

Example: "a capital letter, then one or more digits, then an optional letter A or B" becomes `[A-Z][0-9]+[AB]?`. It matches `K7`, `K72B` and `M105`; it rejects `7K`, `K` and `K7C`.

## Exam traps

- **`+` is not optional.** Use `?` for zero or one.
- **Brackets.** `ab*` and `(ab)*` are different.
- **Classes match one character.** `[CH]at` does not match CHat.
- **`*` allows zero**, so the empty string can match.
- **Alternation scope.** Group the options: `(sun|moon)light`.
- **Trap states.** Mention them when you design an FSM.
- **All three links.** A full definition mentions expressions, FSMs and the word "regular".

## Quick self-test

1. What does `?` mean?
2. Does `ab*` match `a`?
3. Does `(ab)*` match `aba`?
4. What does `[A-Z]` match?
5. Write an expression for "cat" or "cot".
6. Write an expression for one or more digits.
7. Does `colou?r` match `colr`?
8. Does `x+y?z*` match `xz`?
9. What type of language can be recognised by an FSM?
10. What state is used to reject strings that have gone wrong?
11. Is `(0|1)*01` matched by `10101`?
12. Why can no regular expression describe equal numbers of a then b?

### Answers

1. Zero or one repetition (the previous item is optional).
2. Yes: an `a` followed by zero `b` characters.
3. No: after one `ab`, the remaining `a` cannot be matched.
4. Any single character from A to Z inclusive.
5. `c(a|o)t` or `c[ao]t`
6. `[0-9]+`
7. No: the letters `ou` are missing, and only the `u` is optional.
8. Yes: x, no y, one z.
9. A regular language.
10. A trap state.
11. Yes: it ends in 01.
12. It needs unlimited counting, but an FSM has only a finite number of states.

## More on this topic

- [Regular expressions study guide](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages/)
- [Regular expressions practice questions](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-practice/)
- [Finite state machines revision notes](/resources/oxfordaqa-a-level-computer-science-9645-finite-state-machines-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.2 Regular expressions and regular languages.
