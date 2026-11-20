---
title: "AQA A-Level Computer Science (7517): Context-free languages -- Revision Notes"
seoTitle: "AQA A-Level Computer Science BNF Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.4.3 recall: Backus-Naur Form, syntax diagrams, recursion, checking and writing rules, and why BNF goes beyond regular expressions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.4.3 Context-free languages**, AQA A-Level Computer Science (7517): **check syntax using BNF or syntax diagrams**, **formulate simple production rules**, and **explain why BNF can represent some languages that regular expressions cannot**. Fuller explanations are in the [context-free languages study guide](/resources/aqa-a-level-computer-science-7517-context-free-languages/); exam-style questions are in the [context-free languages practice questions](/resources/aqa-a-level-computer-science-7517-context-free-languages-practice/).

## BNF notation

| Item | Meaning |
|---|---|
| `<name>` | A **non-terminal**: a category that is defined by a rule |
| Plain symbol, for example `7`, `+`, `if` | A **terminal**: it appears literally in the string |
| `::=` | "is defined as" |
| `\|` | "or": separates alternatives |
| Symbols side by side | "followed by" |

A rule is a **production rule**. A string is in the language if it can be derived from the starting non-terminal by repeatedly replacing non-terminals until only terminals are left.

## Recursion

A rule that uses its own name is **recursive**, and this is how BNF shows repetition:

```
<number> ::= <digit> | <digit><number>
```

- First alternative: the **base case** that ends the recursion.
- Second alternative: the **recursive case**.
- A recursive rule without a base case can never finish.

## Checking a string

1. Start with the starting non-terminal.
2. Choose the alternative that fits the next symbols.
3. Expand non-terminals until you reach terminals.
4. If the whole string is produced, it is valid. If no alternative fits, name the rule that fails.

**Worked check.**

```
<identifier> ::= <letter> | <letter><rest>
<rest>       ::= <char> | <char><rest>
<char>       ::= <letter> | <digit>
<letter>     ::= a | b | c | d
<digit>      ::= 0 | 1 | 2
```

- `ab1` is valid: letter a, then rest b1 (char b, then rest 1).
- `1ab` is invalid: an identifier must start with a letter.
- `a4` is invalid: 4 is not a digit in this language.

## Writing rules

1. Look at the shape of a valid string.
2. Name each part and give it a rule.
3. Use `|` for choices.
4. Use **recursion** for unlimited repeats, with a base case.
5. Test with one valid and one invalid string.

**Example.** One or more a's followed by a single b:

```
<s>  ::= <as> b
<as> ::= a | a <as>
```

Valid: `ab`, `aaab`. Invalid: `b`, `abb`.

## Syntax diagrams

A syntax diagram is a picture of the same rules.

| Element | Meaning |
|---|---|
| Circle or rounded box | A **terminal** |
| Rectangle | A **non-terminal** (refers to another diagram) |
| Branches | **Alternatives** (like `\|`) |
| Arrow looping back | **Repetition** (like recursion) |

Follow arrows from entry to exit to build a valid string. A rule such as `<number> ::= <digit> | <digit><number>` becomes one `<digit>` rectangle with a loop back.

## Why BNF is more powerful than regular expressions

- A regular expression (or FSM) can **repeat** but has only a **finite memory**, so it cannot match one part of a string with another by counting.
- BNF rules can be **recursive** with the recursion in the **middle** of the rule, which builds **nested** or **matched** structures.
- `{0ⁿ1ⁿ | n ≥ 1}` is not regular, but in BNF it is:

```
<s> ::= 0 1 | 0 <s> 1
```

- Other examples are **balanced brackets** and arithmetic with nested brackets.
- Programming languages use nesting everywhere (brackets, nested `IF`, nested calls), so BNF can describe their syntax and regular expressions alone cannot.
- Every regular language can be described in BNF, but not the reverse.

## Derivation example

Using the rules `<number> ::= <digit> | <digit><number>` and `<digit> ::= 0 | 1 | ... | 9`, the number 407 is derived as:

```
<number>
<digit><number>
4 <number>
4 <digit><number>
4 0 <number>
4 0 <digit>
4 0 7
```

## Where syntax rules are used

- **Compilers and interpreters** check that source code follows the rules of the language before translating it. A statement that cannot be derived from the rules causes a syntax error.
- **Language designers** use BNF to publish an unambiguous definition of a language.
- **Data formats and commands** can also be defined this way, for example the allowed form of a date or an input line.

A string that follows the rules is **syntactically valid**. This is not the same as being meaningful or correct: `2 * (3 + 4)` is valid syntax whatever the numbers mean in a program.

## Exam traps

- **No base case** in a recursive rule.
- **Angle brackets** missing on non-terminals or added to terminals.
- **Using `*` or `+`** from regular expressions in BNF.
- **Accepting a string** after checking only its start.
- **Weak explanation** of why BNF is more powerful: you need recursion or nesting, not "shorter".
- **Unlabelled boxes** in a syntax diagram.

## Key terms

| Term | Definition |
|---|---|
| Syntax | The rules about how symbols may be combined into valid strings |
| Backus-Naur Form | A notation that defines syntax using production rules |
| Production rule | A rule saying how a non-terminal may be replaced |
| Terminal | A symbol that appears literally in valid strings |
| Non-terminal | A named category defined by a production rule |
| Recursion | A rule that refers to itself |
| Syntax diagram | A graphical form of BNF |
| Context-free language | A language that can be defined by BNF rules |

## Self-test

1. What do the symbols `::=` and `|` mean in BNF?
2. What is the difference between a terminal and a non-terminal?
3. What is the base case in `<number> ::= <digit> | <digit><number>`?
4. Why does a recursive rule need a base case?
5. With `<s> ::= a b | a <s> b`, is `aabb` valid?
6. With the same rule, is `aab` valid?
7. Write a rule for a signed integer: an optional + or - sign, then digits (use `<digit>`).
8. How is repetition shown in a syntax diagram?
9. Why can a regular expression not describe balanced brackets?
10. Why is BNF used to define programming language syntax?

**Answers**

1. `::=` means "is defined as"; `|` means "or".
2. A terminal appears literally in the string; a non-terminal is a name for a category that is defined by a rule.
3. `<digit>`, a single digit.
4. Without it the rule can never finish producing a string.
5. Yes: `a <s> b` with `<s>` as `a b`.
6. No: the numbers of a's and b's are not equal.
7. `<int> ::= <digits> | + <digits> | - <digits>` and `<digits> ::= <digit> | <digit><digits>`.
8. By an arrow that loops back to an earlier point.
9. It would need to remember how many brackets are open, which needs unbounded memory.
10. It is precise, and its recursion can describe nested constructs.

## Related resources

- [Context-free languages study guide](/resources/aqa-a-level-computer-science-7517-context-free-languages/)
- [Context-free languages practice questions](/resources/aqa-a-level-computer-science-7517-context-free-languages-practice/)
- [Regular languages revision notes](/resources/aqa-a-level-computer-science-7517-regular-languages-revision-notes/)
- [Types of program translator revision notes](/resources/aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes/)
