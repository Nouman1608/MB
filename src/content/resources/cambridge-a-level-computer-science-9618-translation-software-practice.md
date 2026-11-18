---
title: "Cambridge A Level Computer Science (9618): Translation Software -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 practice questions with answers on interpreters, compilation stages, optimisation, BNF rules, syntax diagrams and Reverse Polish Notation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Translation software study guide](/resources/cambridge-a-level-computer-science-9618-translation-software/) · [Translation software revision notes](/resources/cambridge-a-level-computer-science-9618-translation-software-revision-notes/)

---

## Section A

**1.** State **two** tasks carried out during lexical analysis. **[2]**

**2.** A programmer writes `Average ← Total / / Count`. State the stage of compilation at which this error is detected, and explain why. **[2]**

**3.** State what is stored in a symbol table and identify the stage at which identifiers are first added to it. **[2]**

**4.** Convert the infix expression (x + y * z) / (w − v) into Reverse Polish Notation. **[2]**

**5.** Convert the RPN expression `p q r + * s −` into infix notation. **[2]**

**6.** Explain why a programmer might choose to run a program with an interpreter while it is still being developed. **[2]**

## Section B

**7.** Describe how an interpreter executes a program without producing a translated version. **[4]**

**8.** A compiler's optimiser is given this code.

```
Rate ← 0.2
Count ← 0
FOR Item ← 1 TO 500
   Tax ← Rate * 100
   Charge[Item] ← Price[Item] + Tax
NEXT Item
Count ← 0
```

**(a)** Identify **two** improvements the optimiser could make, explaining each. **[4]**

**(b)** State **two** benefits of optimisation. **[2]**

**9.** A language for product tags is defined in BNF:

```
<vowel> ::= A | E | O
<consonant> ::= K | M | T
<digit> ::= 5 | 7 | 9
<syllable> ::= <consonant><vowel>
<word> ::= <syllable> | <syllable><word>
<tag> ::= <word>-<digit>
```

**(a)** For each string, state whether it is a valid `<tag>`. If it is not, give the reason. **KA-5**, **MOTE-9**, **KAM-7**, **TO7**, **KE-6**. **[5]**

**(b)** Rewrite the rule for `<tag>` so that a tag can end with one **or** two digits. **[2]**

**(c)** Explain why the rule for `<word>` is recursive. **[1]**

**10.** Describe how the rule `<word> ::= <syllable> | <syllable><word>` from Question 9 would be drawn as a syntax diagram. **[2]**

**11.** The RPN expression `4 7 3 − * 2 5 + +` is evaluated using a stack.

**(a)** Show the contents of the stack after each symbol is read. **[4]**

**(b)** Explain why RPN can be evaluated without considering brackets or the precedence of operators. **[2]**

**12.** Describe the syntax analysis stage of compilation, including what it receives, what it checks and what it produces. **[4]**

---

## Answers

**1.** Any two: removes white space [1]; removes comments [1]; breaks the source code into tokens [1]; adds identifiers to the symbol table [1]; reports symbols that are not valid tokens [1].

**2.** Syntax analysis [1]: each token (`Average`, `←`, `Total`, `/`, `/`, `Count`) is valid on its own, but two division operators in a row break the grammar rules of the language [1].

**3.** The identifiers used in the program, with details such as data type and memory address [1]. Identifiers are first added during lexical analysis [1].

**4.** `x y z * + w v − /` [2] (1 mark for `x y z * +`, 1 mark for `w v −` followed by the final `/`).

**5.** **p * (q + r) − s** [2] (1 mark for p * (q + r) with brackets, 1 mark for − s).

**6.** Any two: errors are reported as soon as the faulty statement is reached, so they can be found and corrected one at a time [1]; the program can be run and tested straight away without waiting for the whole program to compile [1]; a partly written program can be run up to the point reached [1].

**7.** Any four:
- The interpreter reads one statement of the source code at a time [1].
- It analyses the statement and checks its syntax [1].
- If there is an error, it reports it and stops [1].
- If the statement is valid, it executes it by calling its own pre-written routines for that kind of statement [1].
- It then moves to the next statement required by the program's logic [1].
- No object code is produced, so statements are analysed again each time they are reached, for example on each pass of a loop [1].

**8. (a)** Any two, 2 marks each (identify plus explain):
- `Tax ← Rate * 100` gives the same value on every pass [1], so it can be calculated once before the loop, saving 499 multiplications [1].
- Rate is set to 0.2 and never changed, so `Rate * 100` always has the same value [1] and can be evaluated once at compile time as 20.0 [1].
- The final `Count ← 0` repeats a value Count already has and Count is not used in between [1], so the redundant instruction can be removed (or both `Count ← 0` instructions removed if Count is not used later) [1].

**(b)** Any two: the program runs faster [1]; it uses less memory [1]; fewer instructions need to be executed [1].

**9. (a)** 1 mark each:
- **KA-5**: valid (syllable KA, then -, then digit 5) [1].
- **MOTE-9**: valid (syllables MO and TE form a `<word>`) [1].
- **KAM-7**: invalid: after KA, M is a consonant with no vowel following, so it is not a `<syllable>` [1].
- **TO7**: invalid: the `-` required between `<word>` and `<digit>` is missing [1].
- **KE-6**: invalid: 6 is not a `<digit>` [1].

**(b)** `<tag> ::= <word>-<digit> | <word>-<digit><digit>` [2] (1 mark for the alternative, 1 mark for correct use of `|` and both forms).

**(c)** It defines a word in terms of itself (a syllable followed by a word), which allows a word to contain any number of syllables [1].

**10.** A rectangle labelled `<syllable>` on the path from the start to the end [1], with a path from after the box looping back to its start, so the syllable can be repeated one or more times [1].

**11. (a)**

| Symbol | Stack (bottom → top) |
|---|---|
| 4 | 4 |
| 7 | 4, 7 |
| 3 | 4, 7, 3 |
| − | 4, 4 |
| * | 16 |
| 2 | 16, 2 |
| 5 | 16, 2, 5 |
| + | 16, 7 |
| + | 23 |

Pushes correct [1]; 7 − 3 = 4 [1]; 4 × 4 = 16 [1]; 2 + 5 = 7, then 16 + 7 = **23** [1].

**(b)** In RPN each operator comes immediately after the operands it applies to, so the order in which the symbols are written is the order in which the operations are done [1]. When an operator is read, its operands are always the top two values on the stack, so no brackets or precedence rules are needed [1].

**12.** Any four:
- It receives the sequence of tokens produced by lexical analysis [1].
- It checks that the sequence of tokens follows the grammar (syntax) rules of the language [1].
- It builds a parse tree showing how the statement's parts fit the rules [1].
- It reports any syntax errors, with their position [1].
- It may add further information, such as data types, to the symbol table [1].
- The parse tree is passed to the code generation stage [1].

---

## Where marks are usually lost

- Describing an interpreter as producing machine code.
- Saying the symbol table is first created during code generation.
- Naming an optimisation without explaining why it saves time or memory.
- Saying a BNF string is "invalid" without naming the rule it breaks.
- Reversing the operands of − or / when evaluating RPN.
- Stating the final RPN answer without showing the stack after each symbol.
