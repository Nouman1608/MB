---
title: "Cambridge A Level Computer Science (9618): Translation Software -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed 9618 notes on interpreters, the four compilation stages, optimisation, BNF, syntax diagrams and Reverse Polish Notation, with traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 16.2 "Translation Software" of Cambridge International AS & A Level Computer Science 9618: how an interpreter executes a program without producing a translated version, the stages of compilation (lexical analysis, syntax analysis, code generation, optimisation), grammar in BNF and syntax diagrams, and evaluating expressions with Reverse Polish Notation. It is assessed in Paper 3.

Related: [Translation software study guide](/resources/cambridge-a-level-computer-science-9618-translation-software/) · [Translation software practice questions](/resources/cambridge-a-level-computer-science-9618-translation-software-practice/) · [Topic 16 System Software revision notes](/resources/a-level-computer-science-system-software-a-level-revision-notes/)

## Key terms

| Term | Meaning |
|---|---|
| Source code | The program as written in a high-level language |
| Object code | The translated program produced by a compiler |
| Token | A meaningful unit of code: keyword, identifier, operator, constant |
| Symbol table | Table of identifiers with their type, address and other attributes |
| Parse tree | Tree showing how the tokens fit the grammar |
| Optimisation | Improving object code to run faster or use less memory without changing its effect |
| BNF | Backus-Naur Form: a notation for the rules (productions) of a grammar |
| Terminal | An actual symbol of the language (outside angle brackets) |
| Non-terminal | A named element defined by another rule, written in angle brackets |
| Syntax diagram | Graphical form of grammar rules: boxes joined by paths |
| RPN | Reverse Polish (postfix) Notation: operators follow their operands |

## Interpreter: how it runs code

For each statement reached: read → analyse (check syntax) → execute using the interpreter's own pre-written routines → next statement.

**Consequences**
- Statements in a loop are analysed on every pass, so execution is slower.
- Errors appear only when reached; the program may run partly first.
- The interpreter is needed every time; no object code is kept.

## The four compilation stages

| Stage | Input | Work done | Output |
|---|---|---|---|
| Lexical analysis | Source code characters | Remove spaces and comments; form tokens; add identifiers to symbol table; report invalid symbols | Token sequence, symbol table |
| Syntax analysis | Tokens | Check the order of tokens obeys the grammar; build parse tree; report syntax errors; add details (such as types) to symbol table | Parse tree |
| Code generation | Parse tree, symbol table | Produce machine code or intermediate code; replace identifiers with addresses | Object code |
| Optimisation | Object code | Remove redundant instructions; evaluate constant expressions once; move unchanging work out of loops | Faster or smaller object code |

**Lexical or syntax error?** A symbol that cannot be a token (for example an illegal character) is lexical. Valid tokens in an invalid order (for example `X ← + 3 Y`) is syntax.

## BNF essentials

- `::=` "is defined as"; `|` "or".
- Repetition is expressed by **recursion**: `<digits> ::= <digit> | <digit><digits>`.
- Optional parts are written as two alternatives: `<sign-num> ::= <num> | -<num>`.
- Build from the smallest elements upwards when writing rules.
- When checking a string, test it against the top rule and name the exact rule broken.

**Syntax diagram conventions**: rectangle = non-terminal; rounded box or circle = terminal; fork = alternatives; loop back = repetition. Read left to right.

## RPN essentials

**Why RPN**: no brackets or precedence; evaluated in one left-to-right pass using a stack.

**Evaluate**
1. Operand → push.
2. Operator → pop right operand, pop left operand, apply, push result.
3. At the end, exactly one value remains: the answer.

**Infix → RPN**: find the first operation to be done; write its operands then the operator; treat it as one operand; repeat. Operands keep their order.

| Infix | RPN |
|---|---|
| a + b * c | a b c * + |
| (a + b) * c | a b + c * |
| a * (b − c) / d | a b c − * d / |
| (a − b) * (c + d) | a b − c d + * |

**RPN → infix**: read left to right; at each operator combine the two most recent operands, adding brackets as needed.

## Exam traps

- Interpreter described as producing machine code line by line.
- Symbol table started in syntax analysis rather than lexical analysis.
- Lexical and syntax analysis merged into one stage.
- Optimisation explained only as "shorter code".
- BNF answer that uses a loop or "..." instead of recursion.
- RPN subtraction and division done with operands reversed.
- Operand order changed when converting to RPN.

## Self-test

1. What happens to comments during compilation?
2. Name the stage that builds a parse tree.
3. Give two items stored in the symbol table.
4. Is `Count ← Count +` a lexical or a syntax error?
5. Give two ways an optimiser improves code.
6. Why does an interpreted loop run more slowly than a compiled one?
7. In BNF, what does `|` mean?
8. How does BNF express "one or more"?
9. Convert (p + q) * r − s to RPN.
10. Evaluate `8 3 − 2 *` .
11. Evaluate `5 1 2 + 4 * + 3 −`.
12. Give one reason a compiler might convert expressions to RPN.

### Answers

1. They are removed during lexical analysis.
2. Syntax analysis.
3. Any two: identifier name; data type; memory address; whether it is a variable, constant or subroutine.
4. Syntax error: every token is valid but an operand is missing after +.
5. Any two: remove redundant or unreachable code; evaluate constant expressions at compile time; move unchanging calculations out of loops.
6. Each statement in the loop is analysed again on every pass, as no translated version is kept.
7. "Or": it separates alternatives.
8. By a recursive rule, such as `<digits> ::= <digit> | <digit><digits>`.
9. `p q + r * s −`.
10. (8 − 3) × 2 = 10.
11. 1 + 2 = 3; 3 × 4 = 12; 5 + 12 = 17; 17 − 3 = 14.
12. It can be evaluated in one left-to-right pass with a stack, with no need to handle brackets or precedence.
