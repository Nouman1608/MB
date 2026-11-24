---
title: "OxfordAQA A-Level Computer Science (9645): Backus-Naur Form (BNF) and syntax diagrams"
seoTitle: "OxfordAQA 9645 BNF and Syntax Diagrams Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.13.4 in depth: BNF production rules, recursion, checking syntax, derivations, syntax diagrams, and what BNF can do that regular expressions cannot."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.13.4 Backus-Naur Form (BNF) and syntax diagrams** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.13 Theory of computation. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to **check language syntax** by referring to BNF or syntax diagrams, to **formulate simple production rules**, and to know that **BNF can represent some languages that regular expressions cannot**, for example palindromes and languages in which strings must contain equal numbers of certain characters.

The topic-level [theory of computation study guide](/resources/oxfordaqa-a-level-computer-science-theory-of-computation/) covers all of topic 3.13 in one pass. This page gives BNF its own space, with new grammars and a full derivation. Afterwards use the [BNF revision notes](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams-revision-notes/) and the [BNF practice questions](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams-practice/). It follows on from the [regular expressions study guide](/resources/oxfordaqa-a-level-computer-science-9645-regular-expressions-regular-languages/).

## What BNF is for

A programming language needs a precise definition of which strings count as valid. **Backus-Naur Form** defines a language by a set of **production rules**. A compiler or interpreter uses the rules to check the **syntax** of a program: whether it is correctly formed. BNF says nothing about what the program means.

## The notation

| Part | Meaning |
|---|---|
| `<name>` | A **non-terminal**: a name for a set of strings, defined by a rule |
| plain characters | **Terminals**: symbols that appear in the final string |
| `::=` | "is defined as" |
| `\|` | "or": separates alternatives |
| side by side | Items written next to each other follow one another |

Each rule has one non-terminal on the left of `::=` and one or more alternatives on the right. A string is **valid** if it can be produced by starting from the language's top non-terminal and replacing non-terminals using the rules until only terminals remain.

## Worked example 1: a time of day

```
<time>   ::= <hour>:<minute>
<hour>   ::= 0<digit> | 1<digit> | 2<low>
<low>    ::= 0 | 1 | 2 | 3
<minute> ::= <tens><digit>
<tens>   ::= 0 | 1 | 2 | 3 | 4 | 5
<digit>  ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

| String | Valid? | Reason |
|---|---|---|
| `09:45` | Yes | hour 0 then digit 9; minute tens 4 then digit 5 |
| `23:59` | Yes | hour starts with 2 then low digit 3; minute 5 then 9 |
| `24:00` | No | after 2 only 0, 1, 2 or 3 is allowed |
| `7:30` | No | the hour needs two digits |
| `12:60` | No | the tens of the minute can be only 0 to 5 |

The grammar accepts exactly 24 × 60 = 1,440 different times. Checking a string means working through the rules from `<time>` and testing each part.

## Recursion in BNF

BNF has no `*` or `+` for repetition. Repetition is done by **recursion**: a rule that uses its own name.

### Worked example 2: identifiers

An identifier is a letter followed by any mix of letters and digits.

```
<identifier> ::= <letter> | <letter><rest>
<rest>       ::= <letter> | <digit> | <letter><rest> | <digit><rest>
```

with `<letter>` and `<digit>` defined as the usual characters. The first alternative of each rule is the **base case** (the recursion stops). The alternatives that contain `<rest>` are the **recursive case**. `x7` is valid: `<letter>` x, then `<rest>` as `<digit>` 7. `7x` is invalid because the first character must be a letter. `a_b` is invalid because `_` is not defined.

### Worked example 3: arithmetic expressions with brackets

```
<expr> ::= <term> | <expr>+<term>
<term> ::= <digit> | (<expr>)
```

This defines sums of single digits and bracketed sums. Is `2+(3+4)` valid? A **derivation** shows it, replacing one non-terminal at each step:

```
<expr>
=> <expr>+<term>              (second alternative of <expr>)
=> <term>+<term>              (<expr> becomes <term>)
=> <digit>+<term>             (<term> becomes <digit>)
=> 2+<term>                   (<digit> becomes 2)
=> 2+(<expr>)                 (<term> becomes (<expr>))
=> 2+(<expr>+<term>)
=> 2+(<term>+<term>)
=> 2+(<digit>+<term>)
=> 2+(3+<term>)
=> 2+(3+<digit>)
=> 2+(3+4)
```

The derivation takes 11 substitution steps and ends with only terminals, so the string is valid. By the same rules `(2)`, `((5))`, `2+3+4` and `(2+3)+(3+4)` are valid, while `2+` is not, because `+` must be followed by a `<term>`; `(2+3` is not, because the bracket is never closed; and `23` is not, because two digits side by side are not a `<term>`. Because brackets can nest inside brackets, this grammar allows unlimited nesting, which no regular expression can describe.

## Formulating production rules

1. Name the parts of the language: the pieces that can be built from smaller pieces become non-terminals.
2. Write each rule as `<name> ::= alternatives`.
3. For anything that repeats, add a rule with a **base case** and a **recursive case**.
4. For anything optional, write two alternatives, one with the item and one without.
5. Test the rules on strings that should and should not be valid.

### Worked example 4: signed numbers

*Write rules for a number with an optional sign and optional fraction, such as `5`, `-23` and `+3.5`.*

```
<real>     ::= <integer> | <integer>.<fraction>
<integer>  ::= <unsigned> | +<unsigned> | -<unsigned>
<unsigned> ::= <digit> | <digit><unsigned>
<fraction> ::= <unsigned>
```

The two alternatives of `<real>` make the fraction optional. `4.25` is valid; `23.` is invalid because the point must be followed by digits; `.5` is invalid because an integer must come first; `--2` is invalid because only one sign is allowed.

## Syntax diagrams

A **syntax diagram** shows the same rules as paths through boxes. A rounded box holds a terminal, a rectangular box holds a non-terminal, and arrows show the allowed routes. A string is valid if there is a path from the entry to the exit that uses its symbols in order.

For `<unsigned>` the diagram is a single `digit` box with an arrow looping back from the exit to the entry, so it can go round once or many times. For `<integer>` there are three routes from the entry: straight to `unsigned`, through a `+` box first, or through a `-` box first. Each BNF alternative is one route, and each recursive rule is a loop. Converting between BNF and a syntax diagram means turning each alternative into a route and each self-reference into a loop.

## What BNF can do that regular expressions cannot

Regular expressions describe languages recognised by finite state machines, which have only finite memory. BNF rules can nest, so they can describe languages that need unlimited memory.

**Palindromes** over 0 and 1 (strings that read the same in both directions):

```
<pal> ::= 0 | 1 | 00 | 11 | 0<pal>0 | 1<pal>1
```

`11011` is valid: the outer 1s with `<pal>` = `101`, whose outer 1s surround `0`. `1101` is invalid.

**Equal numbers of 0 and 1, with all the 0s first:**

```
<same> ::= 01 | 0<same>1
```

This gives 01, 0011, 000111 and 00001111. The string `0101` is invalid and so is `011`. Each use of the recursive rule adds one 0 on the left and one 1 on the right, so the numbers always stay equal. A finite state machine would need a separate state for every possible count, so it cannot do this and neither can a regular expression.

### Worked example 5: finding the fault in a grammar

A student writes rules for a whole number:

```
<number> ::= <digit><number>
<digit>  ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

These rules can never produce a finished string. Every use of the `<number>` rule adds another `<digit>` and leaves another `<number>` still to be replaced, so there is no way to stop. The rule has a recursive case but **no base case**. The repair is to add the stopping alternative:

```
<number> ::= <digit> | <digit><number>
```

Now `7` is valid (first alternative) and `204` is valid: `<digit>` 2 followed by `<number>`, which is `<digit>` 0 followed by `<number>`, which is `<digit>` 4. Also check what the rule still allows: this version accepts `007`, which may or may not be wanted. If leading zeros were not allowed, the first digit would need its own rule using only the digits 1 to 9. Testing a grammar with both valid and invalid strings is the way to find these problems.

## Exam technique

- **Checking a string:** work from the top non-terminal and show each substitution, or break the string into the parts the rule names.
- **Writing rules:** give every non-terminal a rule, use `::=` and `|` correctly, and make sure each recursive rule has a base case.
- **Comparing with regular expressions:** state that BNF can nest or match counts, using the palindrome or equal-count example.

## Common mistakes

- Leaving out the base case of a recursive rule, so the string can never finish.
- Using `*` or `+` inside BNF; use recursion instead.
- Mixing up terminals and non-terminals by leaving out the angle brackets.
- Marking a string valid because the start matches, without checking the rest.
- Saying BNF defines meaning. It defines syntax only.

## More on this topic

- [BNF revision notes](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams-revision-notes/)
- [BNF practice questions](/resources/oxfordaqa-a-level-computer-science-9645-backus-naur-form-syntax-diagrams-practice/)
- [Classification of algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-classification-of-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.13.4 Backus-Naur Form (BNF) and syntax diagrams.
