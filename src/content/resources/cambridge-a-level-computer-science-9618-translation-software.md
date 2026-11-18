---
title: "Cambridge A Level Computer Science (9618): Translation Software"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 16: System Software"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 16.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-system-software"
    subtopic: "translation-software"
description: "Study guide to 9618 section 16.2: interpreters, lexical and syntax analysis, code generation, optimisation, BNF and syntax diagrams, and Reverse Polish Notation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 16.2 of Cambridge International AS & A Level Computer Science 9618 asks you to show understanding of "how an interpreter can execute programs without producing a translated version", of "the various stages in the compilation of a program" ("including lexical analysis, syntax analysis, code generation and optimisation"), of "how the grammar of a language can be expressed using syntax diagrams or Backus-Naur Form (BNF) notation", and of "how Reverse Polish Notation (RPN) can be used to carry out the evaluation of expressions". It is A Level content, assessed in Paper 3, and builds on the AS comparison of compilers and interpreters.

Related: [Translation software revision notes](/resources/cambridge-a-level-computer-science-9618-translation-software-revision-notes/) · [Translation software practice questions](/resources/cambridge-a-level-computer-science-9618-translation-software-practice/) · [Topic 16 System Software study guide](/resources/a-level-computer-science-system-software-a-level/)

## How an interpreter runs a program without translating it

An interpreter never produces an object-code file. For each statement, in the order the program's logic reaches it, it:

1. reads the statement from the source code;
2. analyses it: breaks it into its parts and checks its syntax;
3. if the statement is valid, carries it out by calling one of the interpreter's own pre-written machine-code routines for that type of statement (an assignment routine, an output routine, and so on);
4. moves to the next statement the program's logic requires.

Three consequences follow, and each makes a good exam point. A statement inside a loop is analysed again on every pass, so interpreted programs run more slowly. An error is reported only when execution reaches the faulty statement, so the program may run partly before stopping. And the interpreter must be present every time the program runs, because no translated version is kept.

## The stages of compilation

A compiler translates the whole program before any of it runs. The syllabus names four stages.

### 1. Lexical analysis

The lexical analyser reads the source code character by character and:

- removes white space and comments, which the computer does not need;
- groups characters into **tokens** (keywords, identifiers, operators, constants, punctuation);
- adds each identifier to the **symbol table**;
- reports characters that cannot form a valid token.

For the statement `Total ← Total + Price * 2   // add this item` the tokens are:

| Token | Type |
|---|---|
| Total | identifier |
| ← | assignment operator |
| Total | identifier |
| + | arithmetic operator |
| Price | identifier |
| * | arithmetic operator |
| 2 | numeric constant |

The comment and the spaces have gone. Total and Price are entered in the symbol table, where later stages add each identifier's data type and the memory address it will use.

### 2. Syntax analysis

The syntax analyser (parser) checks that the **sequence** of tokens obeys the grammar of the language, usually by building a parse tree. A statement such as `Total ← + Price 2` consists of valid tokens but in an invalid order, so it passes lexical analysis and fails here. Errors are reported with their position. Semantic checks, such as whether types are compatible, are often carried out at this point, adding information to the symbol table.

### 3. Code generation

The parsed program is turned into **object code**: machine code, or an intermediate code for a virtual machine. Each identifier is replaced by the address recorded in the symbol table.

### 4. Optimisation

The object code is improved so it runs faster, uses less memory, or both, without changing what it does. Typical improvements:

- **Remove redundant code**: an instruction that stores a value immediately overwritten, or code that can never be reached.
- **Evaluate constant expressions once**: `Seconds ← 60 * 60 * 24` becomes `Seconds ← 86400` at compile time.
- **Move unchanging work out of loops**:

```
FOR Count ← 1 TO 100
   Area ← Width * Height
   Cost[Count] ← Area * Count
NEXT Count
```

`Width * Height` does not change inside the loop, so the optimiser calculates it once before the loop, saving 99 multiplications.

## Expressing grammar in BNF

**Backus-Naur Form** defines a language with rules called productions. `::=` means "is defined as"; `|` means "or"; names in angle brackets are **non-terminals** (defined by other rules); characters outside brackets are **terminals** (actual symbols that appear in the code).

### Worked example 1: room codes

```
<letter> ::= A | B | C
<digit> ::= 0 | 1 | 2 | 3
<digits> ::= <digit> | <digit><digits>
<roomcode> ::= <letter><digits> | <letter><letter><digits>
```

The rule for `<digits>` is **recursive**: it defines a sequence of digits as either one digit, or a digit followed by more digits. Recursion is how BNF expresses "one or more".

Check each string against the rules:

| String | Valid? | Reason |
|---|---|---|
| B302 | Yes | One `<letter>` (B), then `<digits>`: 3, 0, 2 are all `<digit>` |
| AB1 | Yes | Two letters, then one digit |
| ABC1 | No | `<roomcode>` allows at most two letters |
| C | No | At least one digit must follow |
| D12 | No | D is not a `<letter>` |
| A4 | No | 4 is not a `<digit>` |

When checking, work from the top-level rule down, and give the **specific** rule that fails, not just "invalid".

### Syntax diagrams

A syntax diagram shows the same rules as paths to be followed from left to right. Non-terminals are drawn in rectangles; terminals in rounded boxes or circles; a branch in the path shows alternatives; a path that loops back shows repetition. The recursive `<digits>` rule becomes a single `<digit>` box with an arrow looping back round it. Diagrams are easier to read; BNF is easier for a program, such as a compiler's parser, to use.

## Reverse Polish Notation

In infix notation the operator is written between its operands, and the order of evaluation depends on brackets and on precedence rules. In **Reverse Polish Notation (RPN)**, or postfix, the operator follows its operands, so neither brackets nor precedence are needed: the order of the symbols alone fixes the order of evaluation. This is why a compiler or interpreter can evaluate RPN in a single left-to-right pass using a stack.

### Converting infix to RPN

Work out which operation happens first, write its two operands followed by the operator, and treat the result as a single operand. Repeat.

- (a + b) * (c − d) / e → `a b +` and `c d −`, then `a b + c d − *`, then **`a b + c d − * e /`**.
- a − b * c + d → b * c first gives `b c *`; then a minus that gives `a b c * −`; then plus d: **`a b c * − d +`**.

The operands stay in the same left-to-right order; only the operators move.

### Worked example 2: evaluating with a stack

Evaluate `a b + c d − * e /` with a = 6, b = 2, c = 9, d = 5, e = 4. Push operands; at an operator, pop two values, apply the operator (the first value popped is the right-hand operand) and push the result.

| Symbol | Action | Stack (bottom → top) |
|---|---|---|
| 6 | Push | 6 |
| 2 | Push | 6, 2 |
| + | Pop 2, pop 6, push 6 + 2 | 8 |
| 9 | Push | 8, 9 |
| 5 | Push | 8, 9, 5 |
| − | Pop 5, pop 9, push 9 − 5 | 8, 4 |
| * | Pop 4, pop 8, push 8 × 4 | 32 |
| 4 | Push | 32, 4 |
| / | Pop 4, pop 32, push 32 ÷ 4 | 8 |

Result **8**, which matches (6 + 2) × (9 − 5) ÷ 4. Exactly one value is left on the stack at the end; if there are more, or the stack empties too soon, the expression was not valid RPN.

## Common mistakes

- Saying an interpreter "translates the program line by line into machine code". It analyses each statement and runs it with its own routines; no translated version is produced.
- Placing the symbol table entirely in syntax analysis: identifiers are added during lexical analysis.
- Describing optimisation as "making the code shorter" without saying it makes it faster or use less memory.
- In BNF, confusing terminals with non-terminals, or forgetting that recursion is needed for repetition.
- In RPN, popping the operands in the wrong order for − and /, giving 5 − 9 instead of 9 − 5.
- Changing the order of the operands when converting infix to RPN.

## Exam technique

- **Describe** a stage of compilation: what goes in, what it does, what comes out (for example, source code → tokens and symbol table).
- **Explain** why a string is invalid: quote the rule it breaks.
- **Write** BNF: define the smallest parts first, then build up; use recursion for "one or more".
- **Show** RPN evaluation as a table with the stack after each symbol.
- **Convert** between notations by checking the result: evaluate both with simple numbers and compare.
