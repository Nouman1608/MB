---
title: "OxfordAQA A-Level Computer Science (9645): Boolean algebra"
seoTitle: "OxfordAQA A-Level CS 9645 Boolean Algebra Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.7.7 in depth: precedence, commutative, associative and distributive laws, identities and De Morgan's laws, with step-by-step simplifications."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.7.7 Boolean algebra** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.7 Computer organisation and architecture (AS). The specification asks you to be familiar with the use of **Boolean identities and De Morgan's laws** to manipulate and simplify Boolean expressions. It gives the order of precedence (NOT, then AND, then OR, with brackets to change the order), the laws of **commutativity, associativity and distributivity** (AND distributes over OR), a list of identities you should be able to apply, and **De Morgan's laws**.

For quick recall use the [Boolean algebra revision notes](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-revision-notes/), and test yourself with the [Boolean algebra practice questions](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-practice/). The gates themselves, truth tables and adders are in the [logic gates study guide](/resources/oxfordaqa-a-level-computer-science-9645-logic-gates/).

**Notation.** NOT is a bar over the letter (shown here as A̅ for one letter and NOT( ) for a group), AND is ⋅, OR is + and XOR is ⨁.

## Why simplify?

Every Boolean expression can be built as a circuit, with one gate per operation. A shorter expression needs fewer gates, which makes a circuit cheaper, smaller and faster, and easier to check. Boolean algebra lets you replace an expression with a simpler one that always gives the same output.

## Precedence

From highest to lowest: **NOT**, then **AND**, then **OR**. Brackets are worked out first.

So A + B⋅C̅ means A + (B⋅(NOT C)). It does not mean (A + B)⋅C̅. To see the difference, take A = 1, B = 0, C = 1.

- A + B⋅C̅ = 1 + 0⋅0 = 1 + 0 = **1**.
- (A + B)⋅C̅ = (1 + 0)⋅0 = 1⋅0 = **0**.

The two expressions give different outputs, so they are different functions.

Writing expressions with the wrong precedence is one of the commonest ways to lose marks.

## The laws

**Commutativity** (order does not matter):

- A + B = B + A
- A⋅B = B⋅A

**Associativity** (grouping does not matter for a run of the same operator):

- A + (B + C) = (A + B) + C
- A⋅(B⋅C) = (A⋅B)⋅C

**Distributivity** (AND distributes over OR):

- A⋅(B + C) = A⋅B + A⋅C

Distributivity is used both ways. Expanding turns A⋅(B + C) into A⋅B + A⋅C. **Factorising** turns A⋅B + A⋅C back into A⋅(B + C), which is often the key move in a simplification.

## The identities

| Identity | Name or note |
|---|---|
| NOT(A̅) = A | Double negation |
| A⋅A = A | Idempotence |
| A + A = A | Idempotence |
| A⋅A̅ = 0 | Contradiction |
| A + A̅ = 1 | Excluded middle |
| A⋅0 = 0 | |
| A + 0 = A | |
| A⋅1 = A | |
| A + 1 = 1 | |
| A⋅(A + B) = A | Absorption |
| A + A⋅B = A | Absorption |
| A + A̅⋅B = A + B | |
| A ⨁ B = A⋅B̅ + A̅⋅B | XOR in terms of AND, OR and NOT |

You can always check an identity with a truth table. If both sides give the same output for every row, they are equal.

## De Morgan's laws

- NOT(A + B) = A̅⋅B̅
- NOT(A⋅B) = A̅ + B̅

The rule of thumb: **break the bar and change the operator**. A bar over a whole group is split into bars over each part, and the AND or OR between them is swapped. De Morgan's laws are used to remove a bar from over a bracket, or to convert between AND-based and OR-based forms.

## A method for simplifying

1. Remove any bars over groups with De Morgan's laws.
2. Expand brackets using distributivity if that exposes a pattern.
3. Look for a term and its complement (A⋅A̅ = 0 or A + A̅ = 1).
4. Look for absorption (A + A⋅B = A) or the A + A̅⋅B = A + B pattern.
5. Factorise common letters and simplify what is left.
6. Write the justification beside each line.

## Worked examples

**Example 1. Simplify X = A⋅B + A⋅B̅.**

1. Factorise: X = A⋅(B + B̅)
2. B + B̅ = 1, so X = A⋅1
3. A⋅1 = A, so **X = A**.

**Example 2. Simplify X = A⋅(A̅ + B).**

1. Expand: X = A⋅A̅ + A⋅B
2. A⋅A̅ = 0, so X = 0 + A⋅B
3. 0 + A⋅B = A⋅B, so **X = A⋅B**.

**Example 3. Simplify X = (A + B)⋅(A + C).**

1. Expand: X = A⋅A + A⋅C + B⋅A + B⋅C
2. A⋅A = A, so X = A + A⋅C + A⋅B + B⋅C
3. A + A⋅C = A (absorption), so X = A + A⋅B + B⋅C
4. A + A⋅B = A (absorption), so **X = A + B⋅C**.

**Example 4. Simplify X = NOT(A̅ + B).**

1. De Morgan: X = NOT(A̅)⋅B̅
2. Double negation: **X = A⋅B̅**.

**Example 5. Simplify X = NOT(A + B) + NOT(A⋅B).**

1. De Morgan on each part: X = A̅⋅B̅ + A̅ + B̅
2. Rearrange: X = A̅ + A̅⋅B̅ + B̅
3. A̅ + A̅⋅B̅ = A̅ (absorption), so X = A̅ + B̅
4. **X = A̅ + B̅**, which is also NOT(A⋅B).

**Example 6. Simplify X = A⋅B⋅C + A⋅B⋅C̅ + A⋅B̅.**

1. Factorise the first two terms: X = A⋅B⋅(C + C̅) + A⋅B̅
2. C + C̅ = 1, so X = A⋅B⋅1 + A⋅B̅ = A⋅B + A⋅B̅
3. Factorise: X = A⋅(B + B̅) = A⋅1
4. **X = A**.

**Example 7. Simplify X = NOT(A + B⋅C).**

1. De Morgan: X = A̅⋅NOT(B⋅C)
2. De Morgan again: **X = A̅⋅(B̅ + C̅)**.

This is a good place to stop. Expanding to A̅⋅B̅ + A̅⋅C̅ would give the same function but is no simpler.

**Example 8. Show A ⨁ A = 0.**

Using A ⨁ B = A⋅B̅ + A̅⋅B with B replaced by A: A ⨁ A = A⋅A̅ + A̅⋅A = 0 + 0 = **0**.

**Example 9. Simplify X = A⋅B + A̅⋅B + A̅⋅C.**

1. Factorise the first two terms: X = B⋅(A + A̅) + A̅⋅C
2. A + A̅ = 1, so X = B⋅1 + A̅⋅C
3. **X = B + A̅⋅C**.

**Example 10. Simplify X = (A + B̅)⋅(A̅ + B̅).**

1. Expand: X = A⋅A̅ + A⋅B̅ + B̅⋅A̅ + B̅⋅B̅
2. A⋅A̅ = 0 and B̅⋅B̅ = B̅, so X = A⋅B̅ + A̅⋅B̅ + B̅
3. B̅ + A⋅B̅ = B̅ (absorption) and B̅ + A̅⋅B̅ = B̅, so **X = B̅**.

## Proving two expressions equal with a truth table

To show that A + A̅⋅B = A + B, write both sides for every row.

| A | B | A̅⋅B | A + A̅⋅B | A + B |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 |

The last two columns match in all four rows, so the expressions are equal. For three variables you need eight rows. This is slower than using the laws, but it never goes wrong, so it is a good way to check an answer you are unsure of.

## Turning an expression into fewer gates

The expression X = A⋅B⋅C + A⋅B⋅C̅ + A⋅B̅ needs a NOT gate for C, a NOT gate for B, three AND gates (two with three inputs) and two OR gates. Example 6 shows it simplifies to X = A, which needs no gates at all: the output is simply the input A. The simplified circuit is cheaper, smaller and faster, and it makes the behaviour obvious. This is the practical point of Boolean algebra.

## Building with NAND gates

De Morgan's laws show that NAND gates can build the other gates. For example, A + B = NOT(A̅⋅B̅). A NAND gate whose inputs are A̅ and B̅ produces exactly NOT(A̅⋅B̅), and each NOT can itself be a NAND gate with both inputs joined. This is why NAND is called a universal gate.

## Worked example in context: a door alarm

An alarm sounds (X = 1) when the door is open (D) and the system is armed (M), or when the door is open and it is night (N), or when all three are true. A first attempt at the expression is:

X = D⋅M + D⋅N + D⋅N⋅M

1. Factorise D: X = D⋅(M + N + N⋅M)
2. Rearrange the bracket: M + N⋅M + N. Using the absorption identity A + A⋅B = A with A = M gives M + N⋅M = M.
3. The bracket becomes M + N, so **X = D⋅(M + N)**.

The simplified circuit needs one OR gate and one AND gate instead of five gates. In words, the alarm sounds when the door is open and the system is armed or it is night. The third condition in the original description was redundant, because it was already covered by the first two.

## Checking your answer

After simplifying, test the original and the result for a few input rows, or write both truth tables. For Example 3, with A = 0, B = 1, C = 0: the original is (0 + 1)⋅(0 + 0) = 1⋅0 = 0, and A + B⋅C = 0 + 0 = 0. They agree. Testing a single row cannot prove equality, but one row that disagrees proves an error.

## Exam technique

- **Show a line for each step** and name the law or identity used.
- **Use the notation** from the specification and put brackets round anything uncertain.
- **Remove bars over groups first** using De Morgan.
- **Look for the standard patterns**, such as A + A̅ = 1 and A + A̅⋅B = A + B, before expanding anything.
- **Check with a row.** Substitute one set of values into the first and last lines. If they differ, find the step that went wrong before moving on.
- **Stop when it is simple.** Repeating a correct step does not earn extra marks, and expanding can make an expression longer.

## Common mistakes

- Applying De Morgan's law but forgetting to change the operator.
- Writing NOT(A + B) = A̅ + B̅. The correct result is A̅⋅B̅.
- Treating A + B⋅C as (A + B)⋅C.
- Writing A + A̅ = 0 or A⋅A̅ = 1 (the wrong way round).
- Cancelling a term without a law that allows it.
- Dropping a bar when two bars should cancel (or keeping two bars that should cancel).

## Next steps

- [Boolean algebra revision notes](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-revision-notes/)
- [Boolean algebra practice questions](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-practice/)
- [Instruction format study guide](/resources/oxfordaqa-a-level-computer-science-9645-instruction-format/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.7 Boolean algebra.
