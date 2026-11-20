---
title: "OxfordAQA A-Level Computer Science (9645): Backus-Naur Form (BNF) and syntax diagrams -- Revision Notes"
seoTitle: "OxfordAQA 9645 BNF and Syntax Diagrams Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.13.4: BNF notation, recursion, checking syntax, syntax diagrams, palindromes and equal counts, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.13.4 Backus-Naur Form (BNF) and syntax diagrams** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.13, examined in Unit 4). For derivations and worked grammars, see the [BNF study guide](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams/), then practise with the [BNF practice questions](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams-practice/).

## What the specification requires

- **Check language syntax** by referring to BNF or syntax diagrams.
- **Formulate simple production rules.**
- Know that BNF can represent some languages that regular expressions cannot, such as **palindromes** and languages where strings must contain **equal numbers of certain characters**.

## Key terms

| Term | Meaning |
|---|---|
| BNF | Backus-Naur Form, a notation that defines a language using production rules |
| Production rule | `<name> ::= alternatives`, saying how a non-terminal may be replaced |
| Non-terminal | A name in angle brackets that stands for a set of strings |
| Terminal | A symbol that appears in the final string |
| `::=` | "is defined as" |
| `\|` | "or" between alternatives |
| Recursion | A rule that uses its own name; used for repetition |
| Syntax diagram | A diagram of paths through boxes that shows the same rules |
| Derivation | A sequence of substitutions from the start non-terminal to a string of terminals |

## Reading a rule

```
<identifier> ::= <letter> | <letter><rest>
<rest>       ::= <letter> | <digit> | <letter><rest> | <digit><rest>
```

- The left side names the non-terminal being defined.
- Alternatives are separated by `|`.
- Items side by side must appear one after another.
- The alternatives that do not mention the rule's own name are the **base case**.
- The alternatives that do mention it are the **recursive case**.

## Checking strings

Time of day rules:

```
<time>   ::= <hour>:<minute>
<hour>   ::= 0<digit> | 1<digit> | 2<low>
<low>    ::= 0 | 1 | 2 | 3
<minute> ::= <tens><digit>
<tens>   ::= 0 | 1 | 2 | 3 | 4 | 5
```

| String | Valid? | Reason |
|---|---|---|
| `09:45` | Yes | all parts fit |
| `24:00` | No | after 2 only 0 to 3 is allowed |
| `7:30` | No | the hour needs two digits |
| `12:60` | No | minute tens must be 0 to 5 |

Method: split the string into the parts the top rule names, then test each part against its own rule.

## Expressions with brackets

```
<expr> ::= <term> | <expr>+<term>
<term> ::= <digit> | (<expr>)
```

| String | Valid? | Reason |
|---|---|---|
| `2+3+4` | Yes | `<expr>+<term>` applied twice |
| `2+(3+4)` | Yes | the bracket is a `<term>` |
| `((5))` | Yes | nested brackets around a digit |
| `2+` | No | `+` must be followed by a `<term>` |
| `(2+3` | No | the bracket is never closed |
| `23` | No | two digits are not a single `<term>` |

Brackets can nest to any depth, which regular expressions cannot match.

## Writing rules: a checklist

1. Name each part that can be built from smaller parts.
2. Give each name a rule with `::=`.
3. Repetition: recursion with a **base case** and a **recursive case**.
4. Optional item: two alternatives, one with and one without.
5. Test on valid and invalid strings.

Example: signed number with optional fraction.

```
<real>     ::= <integer> | <integer>.<fraction>
<integer>  ::= <unsigned> | +<unsigned> | -<unsigned>
<unsigned> ::= <digit> | <digit><unsigned>
<fraction> ::= <unsigned>
```

`4.25` valid; `23.` invalid; `.5` invalid; `--2` invalid.

## Syntax diagrams

| BNF feature | In a syntax diagram |
|---|---|
| Terminal | rounded box |
| Non-terminal | rectangular box |
| `\|` alternative | separate route from the entry |
| Recursive rule | a loop back to an earlier point |
| Items one after another | boxes in sequence along a route |

A string is valid if some route from entry to exit uses its symbols in order.

## BNF versus regular expressions

```
<pal>  ::= 0 | 1 | 00 | 11 | 0<pal>0 | 1<pal>1
<same> ::= 01 | 0<same>1
```

| Language | Examples | Regular expression? | BNF? |
|---|---|---|---|
| Palindromes over 0 and 1 | `11011`, `0110` | No | Yes |
| Equal 0s then 1s | `01`, `0011`, `000111` | No | Yes |
| Strings ending in 01 | `1101` | Yes | Yes |

`11011` is valid: outer 1s around `101`, whose outer 1s surround `0`. `0101` is not valid for `<same>`.

## Common faults in grammars

| Fault | Symptom | Repair |
|---|---|---|
| Recursive rule with no base case | No string can ever be completed | Add a non-recursive alternative |
| Missing alternative | A valid string is rejected | Add the alternative and re-test |
| Too many alternatives | An invalid string is accepted | Remove or tighten the alternative |
| Terminal written with angle brackets | Treated as a non-terminal with no rule | Write plain characters for terminals |

## Exam traps

- **Missing base case.** A recursive rule without a way to stop can never produce a string.
- **No `*` or `+` in BNF.** Use recursion.
- **Angle brackets.** Non-terminals have them; terminals do not.
- **Partial matches.** The whole string must fit the rule.
- **Syntax only.** BNF does not describe meaning.
- **Reasons.** When asked why a regular expression cannot do it, mention unlimited counting or nesting.

## Quick self-test

1. What does `::=` mean?
2. What does `|` mean in BNF?
3. What is a non-terminal?
4. How is repetition expressed in BNF?
5. Using the time rules, is `19:07` valid?
6. Using the time rules, is `20:75` valid?
7. Using the expression rules, is `(2)+3` valid?
8. Give the base case of `<unsigned> ::= <digit> | <digit><unsigned>`.
9. Name one language BNF can describe but a regular expression cannot.
10. Is `001` valid for `<same>`?
11. Name the two kinds of box in a syntax diagram.
12. What does a syntax diagram loop represent?

### Answers

1. "Is defined as".
2. "Or" between alternatives.
3. A name in angle brackets that stands for a set of strings, defined by a rule.
4. By recursion: a rule that uses its own name.
5. Yes: hour 1 then 9, minute 0 then 7.
6. No: the minute tens digit 7 is not between 0 and 5.
7. Yes: `(2)` is a `<term>`, so `<term>+<term>` is an `<expr>`.
8. `<digit>`
9. Palindromes, or strings with equal numbers of two characters.
10. No: it has two 0s and one 1.
11. Terminal (rounded) and non-terminal (rectangular).
12. Recursion or repetition.

## Next steps

- [BNF study guide](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams/)
- [BNF practice questions](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams-practice/)
- [Regular expressions revision notes](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.4 Backus-Naur Form (BNF) and syntax diagrams.
