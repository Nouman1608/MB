---
title: "OxfordAQA A-Level Computer Science (9645): Boolean algebra -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Boolean Algebra Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 7 – Computer organisation and architecture"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 7.7
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
  - qualification: "a-level"
    topic: "computer-organisation-and-architecture"
    subtopic: "boolean-algebra-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.7.7 Boolean algebra: precedence, laws, identities, De Morgan's laws, simplification method and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.7.7 Boolean algebra** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.7 Computer organisation and architecture). For fuller worked examples, see the [Boolean algebra study guide](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra/); then practise with the [Boolean algebra practice questions](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-practice/).

**Notation.** NOT is a bar (A̅ for a letter, NOT( ) for a bar over a group), AND is ⋅, OR is + and XOR is ⨁.

## What the specification requires

- Be familiar with the use of **Boolean identities** and **De Morgan's laws** to manipulate and simplify expressions.
- Precedence from highest to lowest: **NOT, AND, OR**; brackets change the order.
- Know how **commutativity, associativity and distributivity** apply.
- Apply the listed **identities** and **De Morgan's laws**.

## Key terms

| Term | Meaning |
|---|---|
| Boolean expression | Letters (variables) and the operators NOT, AND, OR, XOR |
| Identity | An equation that is true for every value of the variables |
| Simplify | Rewrite as an equal expression that is shorter or needs fewer gates |
| Complement | The NOT of a variable: A and A̅ are complements |
| Absorption | A term is swallowed by a shorter term, for example A + A⋅B = A |
| Redundant term | A term that does not change the output |

## Laws

- Commutative: A + B = B + A; A⋅B = B⋅A.
- Associative: A + (B + C) = (A + B) + C; A⋅(B⋅C) = (A⋅B)⋅C.
- Distributive (AND over OR): A⋅(B + C) = A⋅B + A⋅C. Used backwards it factorises.

## Identities

| Identity | Identity |
|---|---|
| NOT(A̅) = A | A⋅A = A |
| A + A = A | A⋅A̅ = 0 |
| A + A̅ = 1 | A⋅0 = 0 |
| A + 0 = A | A⋅1 = A |
| A + 1 = 1 | A⋅(A + B) = A |
| A + A⋅B = A | A + A̅⋅B = A + B |
| A ⨁ B = A⋅B̅ + A̅⋅B | |

## De Morgan's laws

- NOT(A + B) = A̅⋅B̅
- NOT(A⋅B) = A̅ + B̅

**Break the bar, change the operator.** The same works for longer groups: NOT(A + B + C) = A̅⋅B̅⋅C̅.

## Simplifying: a routine

1. Remove bars over groups (De Morgan).
2. Expand brackets only if it exposes a pattern.
3. Look for complements: A⋅A̅ = 0, A + A̅ = 1.
4. Look for absorption: A + A⋅B = A; A + A̅⋅B = A + B.
5. Factorise common letters.
6. Name the law at each line.

## Worked reminders

| Start | Steps | Result |
|---|---|---|
| A⋅B + A⋅B̅ | Factorise A⋅(B + B̅) = A⋅1 | A |
| A⋅(A̅ + B) | A⋅A̅ + A⋅B = 0 + A⋅B | A⋅B |
| NOT(A̅ + B) | A⋅B̅ by De Morgan and double negation | A⋅B̅ |
| NOT(A + B⋅C) | A̅⋅NOT(B⋅C) = A̅⋅(B̅ + C̅) | A̅⋅(B̅ + C̅) |
| A⋅B + A̅⋅B + A̅⋅C | B⋅(A + A̅) + A̅⋅C = B + A̅⋅C | B + A̅⋅C |
| (A + B)⋅(A + C) | A + A⋅C + A⋅B + B⋅C, then absorb | A + B⋅C |

## Proof by truth table

To prove two expressions equal, give each a column and compare **every** row. Equal in all rows means equal. One differing row proves they are not equal.

## NAND as a universal gate

- NOT A = A NAND A.
- A⋅B = (A NAND B) NAND (A NAND B).
- A + B = (A NAND A) NAND (B NAND B), which is NOT(A̅⋅B̅).

## Patterns to recognise on sight

| Pattern | Result | Why |
|---|---|---|
| X⋅Y + X⋅Y̅ | X | Factorise X, then Y + Y̅ = 1 |
| X + X⋅Y | X | Absorption |
| X⋅(X + Y) | X | Absorption |
| X + X̅⋅Y | X + Y | Listed identity |
| X⋅X̅ + Y | Y | X⋅X̅ = 0 and 0 + Y = Y |
| X + X̅ + Y | 1 | X + X̅ = 1 and 1 + Y = 1 |
| NOT(X + Y)⋅X | 0 | X̅⋅Y̅⋅X contains X̅⋅X = 0 |

Look for these before doing any long expansion.

## More worked reminders

**A⋅B + A⋅B⋅C.** Factorise A⋅B⋅(1 + C) = A⋅B⋅1 = A⋅B. (Or use absorption: P + P⋅C = P with P = A⋅B.)

**NOT(A + B) + A⋅B.** De Morgan gives A̅⋅B̅ + A⋅B. This does not simplify further. It is 1 when A and B are equal, so it is the opposite of XOR.

**A⋅(B + C) + A⋅B̅.** Expand: A⋅B + A⋅C + A⋅B̅. Factorise the first and third terms: A⋅(B + B̅) + A⋅C = A + A⋅C = A.

**(A + B̅)⋅B.** Expand: A⋅B + B̅⋅B = A⋅B + 0 = A⋅B.

## Algebra or truth table?

| Task | Better method |
|---|---|
| "Simplify the expression" | Algebra with named laws |
| "Show that these are equal" | Either; a truth table is safe for 2 or 3 variables |
| "Complete a truth table" | Truth table |
| "Check my simplification" | Test a row, or compare truth tables |
| "Reduce the number of gates" | Algebra, then redraw the circuit |

## Writing the justification

Put the law beside each line, in short form. For example:

| Line | Reason |
|---|---|
| X = A⋅B + A⋅B̅ | Given |
| X = A⋅(B + B̅) | Distributivity (factorising) |
| X = A⋅1 | B + B̅ = 1 |
| X = A | A⋅1 = A |

A line of working with a reason scores. A line with no reason may not.

## Six to try, with answers

1. A + A̅⋅B̅ gives A + B̅.
2. A⋅B + A⋅B̅ + A̅⋅B gives A + B (factorise A, then use A + A̅⋅B = A + B).
3. NOT(A⋅B + A̅⋅B̅) gives A⋅B̅ + A̅⋅B, which is A ⨁ B.
4. (A + B)⋅(A̅ + B) gives B.
5. A⋅B̅⋅C + A⋅B̅⋅C̅ gives A⋅B̅.
6. NOT(A + B + C) gives A̅⋅B̅⋅C̅.

Work each one through with named laws before you read the answer.

## Why the key identities hold

- **A + A̅ = 1:** A is either 1 or 0. If A is 1 the OR gives 1. If A is 0, then A̅ is 1 and the OR still gives 1.
- **A⋅A̅ = 0:** A and A̅ can never both be 1, so the AND is always 0.
- **A + A⋅B = A:** if A is 1 the output is 1 whatever B is. If A is 0 then A⋅B is 0 as well, so the output is 0. The output always equals A.
- **A + A̅⋅B = A + B:** if A is 1 both sides are 1. If A is 0, the left side is 0 + 1⋅B = B and the right side is 0 + B = B.

Understanding why they work makes them easier to remember than learning them as a list.

## Exam traps

- **Operator not swapped.** NOT(A + B) is A̅⋅B̅, not A̅ + B̅.
- **Precedence.** A + B⋅C is A + (B⋅C).
- **Wrong constants.** A + A̅ = 1 and A⋅A̅ = 0.
- **Illegal cancelling.** Cancel only with a named law.
- **Double bars.** A double negation cancels: NOT(A̅) = A.
- **No steps shown.** A correct final answer with no working may not earn full marks.
- **Over-simplifying.** Check the answer by testing one row.

## Quick self-test

1. State the order of precedence of NOT, AND and OR.
2. State De Morgan's two laws.
3. What does A + A⋅B simplify to?
4. What does A + A̅⋅B simplify to?
5. Simplify A⋅B + A⋅B̅.
6. Simplify NOT(A + B).
7. Simplify NOT(A⋅B̅).
8. Simplify A⋅(A̅ + B).
9. Which law lets you rewrite A⋅(B + C) as A⋅B + A⋅C?
10. Express A ⨁ B using AND, OR and NOT.
11. Simplify (A + B)⋅(A + B̅).
12. Why does NAND count as a universal gate?

### Answers

1. NOT first, then AND, then OR.
2. NOT(A + B) = A̅⋅B̅ and NOT(A⋅B) = A̅ + B̅.
3. A.
4. A + B.
5. A⋅(B + B̅) = A.
6. A̅⋅B̅.
7. A̅ + B.
8. A⋅B.
9. Distributivity (AND distributes over OR).
10. A⋅B̅ + A̅⋅B.
11. Expand: A + A⋅B̅ + A⋅B + 0, which absorbs to A.
12. NOT, AND and OR can all be built from NAND gates alone, so any circuit can be built from NAND gates.

## Next steps

- [Boolean algebra study guide](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra/)
- [Boolean algebra practice questions](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-practice/)
- [Instruction format revision notes](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.7 Boolean algebra.
