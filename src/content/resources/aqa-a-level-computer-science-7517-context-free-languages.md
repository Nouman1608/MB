---
title: "AQA A-Level Computer Science (7517): Context-free languages"
seoTitle: "AQA A-Level CS BNF Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Theory of computation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
  - qualification: "a-level"
    topic: "theory-of-computation-7517"
    subtopic: "context-free-languages-7517"
description: "Deeper guide to AQA 7517 section 4.4.3 Context-free languages: Backus-Naur Form, syntax diagrams, production rules and why BNF can describe languages that regular expressions cannot."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.4.3 Context-free languages** in AQA A-Level Computer Science (7517). The only content block is **4.4.3.1 Backus-Naur Form (BNF) and syntax diagrams**. The specification asks you to:

- **check language syntax** by referring to BNF or syntax diagrams;
- **formulate simple production rules**;
- **explain why BNF can represent some languages that cannot be represented using regular expressions**.

The wider [theory of computation study guide](/resources/aqa-a-level-computer-science-theory-of-computation-study-guide/) gives an overview of section 4.4. This page explains the notation, shows how to check a string and write rules, and gives the argument for the last point. Condensed notes are in the [context-free languages revision notes](/resources/aqa-a-level-computer-science-7517-context-free-languages-revision-notes/), and exam-style questions are in the [context-free languages practice questions](/resources/aqa-a-level-computer-science-7517-context-free-languages-practice/).

## Why a notation for syntax is needed

A programming language, a data format or a command line has rules about which strings are valid. The **syntax** is the set of rules for how symbols may be put together. Compilers and interpreters have to check syntax exactly, and language designers have to describe it without ambiguity. English descriptions are not precise enough. BNF and syntax diagrams give a precise, shared way to define syntax.

## Backus-Naur Form

BNF defines a language using **production rules**. Each rule says how one **non-terminal** may be replaced by a sequence of other symbols.

- A **non-terminal** is a name for a category of thing, written in angle brackets, such as `<digit>` or `<expression>`.
- A **terminal** is an actual symbol that appears in valid strings, such as `7`, `+` or `if`. It has no further definition.
- `::=` means "is defined as".
- `|` means "or": it separates the alternatives.
- Putting symbols next to each other means "followed by".

A rule for the non-terminal `<digit>`:

```
<digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

A string belongs to the language if you can start from the starting non-terminal and apply rules until only terminals remain.

### Recursion gives repetition

A rule can use its own name. This is **recursion**, and it is how BNF describes things that repeat. A non-empty whole number is one or more digits:

```
<number> ::= <digit> | <digit><number>
```

The first alternative stops the recursion (one digit is a number). The second says a number is a digit followed by a number. So 407 is `<digit>` 4 followed by the number 07, which is the digit 0 followed by the number 7, which is just a digit.

Every recursive rule needs at least one non-recursive alternative, called the **base case**, or the rule can never produce a finished string.

### Worked example 1: checking a string

```
<identifier> ::= <letter> | <letter><rest>
<rest>       ::= <char> | <char><rest>
<char>       ::= <letter> | <digit>
<letter>     ::= a | b | c | d
<digit>      ::= 0 | 1 | 2
```

Is `ab1` a valid `<identifier>`?

1. `<identifier>` can be `<letter><rest>`, with `<letter>` as a and `<rest>` as b1.
2. `<rest>` can be `<char><rest>`, with `<char>` as b (a `<letter>`) and `<rest>` as 1.
3. `<rest>` can be `<char>`, and `<char>` can be `<digit>`, which is 1.

So `ab1` is valid. Now check `1ab`. An identifier must begin with a `<letter>`, and 1 is not in `<letter>`, so `1ab` is **not** valid. The empty string is also invalid, because every alternative of `<identifier>` begins with a letter.

When checking a string, work from the left, match each symbol to the alternative that allows it, and explain any failure by naming the rule that cannot be satisfied.

### Worked example 2: nested structure

This BNF describes simple arithmetic expressions with multiplication, addition and brackets:

```
<expr>   ::= <term> | <expr> + <term>
<term>   ::= <factor> | <term> * <factor>
<factor> ::= <number> | ( <expr> )
<number> ::= <digit> | <digit><number>
<digit>  ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

A **derivation** of `2*(3+4)`, replacing the left-most non-terminal each time:

```
<expr>
<term>
<term> * <factor>
<factor> * <factor>
<number> * <factor>
<digit> * <factor>
2 * <factor>
2 * ( <expr> )
2 * ( <expr> + <term> )
2 * ( <term> + <term> )
2 * ( <factor> + <term> )
2 * ( 3 + <term> )
2 * ( 3 + 4 )
```

(The last few steps replace `<factor>`, `<number>` and `<digit>` by 3 and by 4 in the same way as at the start.) The derivation shows the **structure** of the expression as well as its validity: the `*` joins a 2 to a bracketed sum, so the sum is calculated first.

The rule `<factor> ::= ( <expr> )` is what lets expressions contain brackets nested to any depth.

### Formulating production rules

To write a rule for a language, think of the shape of a valid string and break it into named parts.

**Example.** A product code is two capital letters (restricted here to A to C) followed by one to three digits (restricted to 0 and 1). The rules could be:

```
<code>   ::= <letter><letter><digits>
<letter> ::= A | B | C
<digits> ::= <digit> | <digit><digit> | <digit><digit><digit>
<digit>  ::= 0 | 1
```

Valid: `AB1`, `CC011`. Invalid: `A1` (one letter), `ABC1` (three letters), `AB1111` (four digits), `AB2` (2 is not a digit here).

Tips: list the alternatives for choices, use recursion for "one or more" or any unbounded repeat, use a base case, give each category a meaningful non-terminal name, and use only terminals the language really contains.

## Syntax diagrams

A **syntax diagram** shows the same information as BNF in a picture. Each rule has its own diagram. A diagram has an entry on the left and an exit on the right, with arrows between. A path from entry to exit through the diagram gives a valid string:

- a **rounded box or circle** holds a **terminal**, an actual symbol;
- a **rectangular box** holds a **non-terminal**, which refers to another diagram;
- **branches** show alternatives (the same as `|`);
- an arrow that **loops back** shows repetition (the same as recursion or "one or more").

The diagram for `<number> ::= <digit> | <digit><number>` is a single rectangle labelled `<digit>` with an arrow that goes round from its exit back to its entry. Any path goes through the digit box once, and may loop back as many times as needed.

You can convert one form into the other. Each alternative is a branch. Each non-terminal is a rectangle. Each terminal is a circle. A recursive rule that ends with itself becomes a loop.

## Why BNF can do more than regular expressions

A regular expression, or the finite state machine equivalent to it, can express **repetition** but cannot **count or match** things across a gap. A finite state machine has only a fixed number of states, so it cannot remember an unlimited quantity.

BNF rules can be **recursive**, with a non-terminal appearing in the middle of its own definition, which lets the language build nested structures whose two ends match.

**Example.** The language `{0ⁿ1ⁿ | n ≥ 1}` has strings 01, 0011, 000111, … with equal numbers of 0s and 1s. It is not regular. In BNF it is easy:

```
<s> ::= 0 1 | 0 <s> 1
```

Each use of the second alternative adds one 0 on the left and one 1 on the right, so the two counts always stay equal. Other examples are **balanced brackets** and the nested bracket structure of arithmetic expressions in worked example 2. Programming languages are full of nested constructs of this kind (brackets, `IF` inside `IF`, a function call inside a function call), so a regular expression alone cannot describe their syntax, but BNF can.

Every regular language can also be described in BNF, but not the other way round. The languages that BNF can describe are called **context-free languages**.

## Common mistakes

- Using terminal symbols in angle brackets, or non-terminals without them.
- Leaving out a base case from a recursive rule.
- Putting the `|` alternatives in the wrong place, so that a rule accepts strings it should not.
- Declaring a string valid after matching only its first few symbols.
- Writing `<number> ::= <digit>*` using regular expression symbols, which are not part of BNF.
- Saying BNF is better because "it is shorter". The point is recursion, which allows nested and matched structures.

## Exam technique

- **Check a string**: show the rule used at each stage, and state clearly whether the whole string is accepted.
- **Write a rule**: provide the alternatives, check them against one valid and one invalid example, and make sure you have a base case.
- **Explain the limits of regular expressions**: mention recursion, nesting or matching counts, and give an example such as `0ⁿ1ⁿ` or balanced brackets.
- **Syntax diagrams**: label every box as a terminal or a non-terminal and show every loop.

## Related resources

- [Context-free languages revision notes](/resources/aqa-a-level-computer-science-7517-context-free-languages-revision-notes/)
- [Context-free languages practice questions](/resources/aqa-a-level-computer-science-7517-context-free-languages-practice/)
- [Regular languages study guide](/resources/aqa-a-level-computer-science-7517-regular-languages/)
- [Types of program translator study guide](/resources/aqa-a-level-computer-science-7517-types-of-program-translator/)

*Written against the AQA A-level Computer Science (7517) specification, 4.4.3 Context-free languages. Always check the current specification on the AQA website.*
