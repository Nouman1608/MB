---
title: "AQA A-Level Computer Science (7517): Context-free languages -- Practice Questions"
seoTitle: "AQA A-Level Computer Science BNF Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.4.3 questions with answers: checking strings against BNF, writing production rules, syntax diagrams and the limits of regular expressions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Context-free languages study guide](/resources/aqa-a-level-computer-science-7517-context-free-languages/) | [Context-free languages revision notes](/resources/aqa-a-level-computer-science-7517-context-free-languages-revision-notes/)

In Backus-Naur Form, `<name>` is a non-terminal, `::=` means "is defined as" and `|` means "or".

---

## Section A

**1.** State what is meant by a terminal in Backus-Naur Form. **[1]**

**2.** State what is meant by a non-terminal in Backus-Naur Form. **[1]**

**3.** Explain what makes a production rule recursive. **[1]**

**4.** State what is meant by the syntax of a programming language. **[1]**

**5.** State why a recursive production rule must have a non-recursive alternative. **[2]**

## Section B

**6.** This BNF defines a name.

```
<name>   ::= <letter> | <letter><rest>
<rest>   ::= <char> | <char><rest>
<char>   ::= <letter> | <digit>
<letter> ::= a | b | c | d
<digit>  ::= 0 | 1 | 2
```

**(a)** State whether each string is a valid `<name>` and, for any invalid string, say why: `ca2`, `2ca`, `dd`, `a4`. **[4]**
**(b)** Show how the rules produce the string `b21`. **[3]**
**(c)** State whether an empty string is a valid `<name>`, with a reason. **[1]**

**7.** A signed integer is an optional + or - sign, followed by one or more digits. The digits are 0 to 9.

**(a)** Write production rules in BNF for `<integer>`. **[4]**
**(b)** State whether `-407` and `+` are valid according to your rules. **[2]**

**8.** This BNF defines a language.

```
<s> ::= a b | a <s> b
```

**(a)** State which of these strings are in the language: `ab`, `aabb`, `aab`, `abab`, `aaabbb`. **[3]**
**(b)** Describe the strings in the language in words. **[1]**

**9.** A syntax diagram for `<digits>` consists of a rectangle labelled `<digit>` with an arrow leading from its exit back to its entry.

**(a)** Write the equivalent BNF rule. **[2]**
**(b)** State the shortest string that the diagram can produce and give an example of a longer one, taking `<digit>` to mean 0 or 1. **[2]**

**10.** Write BNF rules for a string consisting of one or more letters x followed by exactly one letter y. **[3]**

**11.** Draw, or describe in words, a syntax diagram for `<integer>` in Question 7. Say what each shape represents. **[4]**

**12.** Explain why the language `{0ⁿ1ⁿ | n ≥ 1}` can be defined by BNF but not by a regular expression. **[4]**

**13.** A student says that BNF is only better than regular expressions because it is shorter to write. Evaluate this statement with reference to nested brackets in an arithmetic expression. **[4]**

---

## Answers

**1.** A symbol that appears literally in the strings of the language and has no further definition [1].

**2.** A name, written in angle brackets, for a category that is defined by a production rule (it is replaced by other symbols) [1].

**3.** The rule refers to its own non-terminal on the right-hand side [1].

**4.** The rules that say how symbols may be combined to make valid statements (strings) in the language [1].

**5.** Without a non-recursive alternative (a base case) [1], the rule could keep producing non-terminals for ever and never finish with only terminals [1].

**6. (a)** `ca2` is valid [1]. `2ca` is invalid because a name must start with a letter and 2 is not a letter [1]. `dd` is valid [1]. `a4` is invalid because 4 is not a digit in this language [1].
**(b)** `<name>` becomes `<letter><rest>`, with `<letter>` as b [1]; `<rest>` becomes `<char><rest>`, with `<char>` as the digit 2 [1]; the final `<rest>` becomes `<char>`, which becomes the digit 1 [1].
**(c)** No: every alternative of `<name>` begins with a `<letter>`, so at least one character is needed [1].

**7. (a)**
```
<integer> ::= <digits> | + <digits> | - <digits>
<digits>  ::= <digit> | <digit><digits>
<digit>   ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```
Rule for `<integer>` with the three alternatives [1]; recursive rule for `<digits>` [1]; base case in `<digits>` [1]; rule for `<digit>` listing all ten digits [1].
**(b)** `-407` is valid, as a minus sign followed by digits [1]. `+` is not valid because a sign must be followed by at least one digit [1].

**8. (a)** `ab`, `aabb` and `aaabbb` are in the language [3]. `aab` has unequal numbers of a's and b's, and `abab` is not of the form a's followed by b's.
**(b)** One or more a's followed by the same number of b's [1].

**9. (a)** `<digits> ::= <digit> | <digit><digits>` [2]. (One mark for the base case, one for the recursive alternative.)
**(b)** The shortest string is a single digit, 0 or 1 [1]; a longer example is 0110 [1] (any string of 0s and 1s with at least one character).

**10.**
```
<s>  ::= <xs> y
<xs> ::= x | x <xs>
```
Rule putting a group of x's before y [1]; recursive alternative for one or more x [1]; base case with a single x [1].

**11.** The diagram has a single path from entry to exit with a branch at the start [1]; the branch allows an optional circle containing + or a circle containing - (or a path that skips the sign) [1]; this is followed by a rectangle labelled `<digit>` (or `<digits>`) with a loop back to allow one or more digits [1]; circles hold terminals (+ and -), rectangles hold non-terminals [1].

**12.** A regular expression (or finite state machine) can only remember which state it is in, and there are a finite number of states [1]; to accept `0ⁿ1ⁿ` it would need to count the 0s with no upper limit, to compare with the number of 1s [1]; BNF can use a recursive rule, `<s> ::= 0 1 | 0 <s> 1` [1]; each use of the recursive alternative adds one 0 at the start and one 1 at the end, so the numbers stay equal [1].

**13.** The statement is false [1]; arithmetic expressions can have brackets nested to any depth and each opening bracket must have a matching closing one [1]; a regular expression cannot match the brackets because it cannot count how many are open, whereas BNF can use a rule such as `<factor> ::= ( <expr> )` which is recursive through `<expr>` [1]; so BNF can describe languages that regular expressions cannot, which is a difference in power and not just length [1].

---

## Where marks are usually lost

- Declaring a string valid without checking every symbol against the rules.
- Missing the base case in a recursive rule.
- Using regular-expression symbols such as `*` or `+` inside BNF.
- Giving "BNF is shorter" instead of recursion or nesting as the reason BNF is more powerful.
- Confusing circles (terminals) with rectangles (non-terminals) in syntax diagrams.
