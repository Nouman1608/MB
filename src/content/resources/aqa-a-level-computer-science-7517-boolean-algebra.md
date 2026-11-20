---
title: "AQA A-Level Computer Science (7517): Boolean Algebra"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of computer systems"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 6.5
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-computer-systems"
    subtopic: "boolean-algebra-7517"
description: "Deeper guide to AQA 7517 section 4.6.5 Boolean algebra: identities, De Morgan's laws and step-by-step simplification of Boolean expressions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.6.5 Boolean algebra** in AQA A-Level Computer Science (7517). The specification asks you to be **familiar with the use of Boolean identities and De Morgan's laws to manipulate and simplify Boolean expressions**. That means two skills: knowing the rules, and applying them one line at a time so that every step can be justified.

The wider [fundamentals of computer systems study guide](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-study-guide/) covers the whole of section 4.6. This page concentrates on the algebra itself: a full list of laws, a method for simplifying, six worked examples and the mistakes that lose marks.

Condensed notes are in the [Boolean algebra revision notes](/resources/aqa-a-level-computer-science-7517-boolean-algebra-revision-notes/), and exam-style questions are in the [Boolean algebra practice questions](/resources/aqa-a-level-computer-science-7517-boolean-algebra-practice/).

## Notation used on this page

AQA papers write Boolean expressions with these symbols:

- **¬A** means NOT A;
- **A ∧ B** means A AND B;
- **A ∨ B** means A OR B;
- **A ⊕ B** means A XOR B (true when exactly one of A and B is true).

Precedence matters. **NOT binds tightest, then AND, then OR.** So `A ∨ B ∧ C` means `A ∨ (B ∧ C)`. When you write an answer, add brackets wherever a reader could be unsure. Values are 1 (true) and 0 (false).

## Why simplify?

Every term in a Boolean expression becomes gates in a circuit. A shorter, equivalent expression needs fewer gates, so the circuit is cheaper, uses less power and has fewer places to fail. Algebra is also how you prove that two circuits behave identically without writing out a large truth table.

## The identities

Learn these as a set. Each pair is a **dual**: swap ∧ with ∨ and 0 with 1 and you get the other member.

| Law | AND form | OR form |
|---|---|---|
| Identity | A ∧ 1 = A | A ∨ 0 = A |
| Null (domination) | A ∧ 0 = 0 | A ∨ 1 = 1 |
| Idempotent | A ∧ A = A | A ∨ A = A |
| Complement | A ∧ ¬A = 0 | A ∨ ¬A = 1 |
| Commutative | A ∧ B = B ∧ A | A ∨ B = B ∨ A |
| Associative | (A ∧ B) ∧ C = A ∧ (B ∧ C) | (A ∨ B) ∨ C = A ∨ (B ∨ C) |
| Distributive | A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C) | A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C) |
| Absorption | A ∧ (A ∨ B) = A | A ∨ (A ∧ B) = A |

Two more rules stand alone:

- **Double negation:** ¬(¬A) = A.
- **XOR written with AND, OR and NOT:** A ⊕ B = (A ∧ ¬B) ∨ (¬A ∧ B).

The OR form of the distributive law is the one students forget, because it has no counterpart in ordinary arithmetic. In arithmetic, `a + (b × c)` is not `(a + b) × (a + c)`. In Boolean algebra it is.

## De Morgan's laws

De Morgan's laws tell you how to push a NOT through a bracket:

- **¬(A ∧ B) = ¬A ∨ ¬B**
- **¬(A ∨ B) = ¬A ∧ ¬B**

In words: negating an AND gives an OR of the negations, and negating an OR gives an AND of the negations. The rule is to **negate each term, swap the operator, and keep the bracket structure**. The laws extend to three or more terms: ¬(A ∨ B ∨ C) = ¬A ∧ ¬B ∧ ¬C.

Why they matter in a circuit: a NAND gate is ¬(A ∧ B), which by De Morgan is the same as ¬A ∨ ¬B. A NOR gate, ¬(A ∨ B), is the same as ¬A ∧ ¬B. This is how a circuit built only from NAND gates or only from NOR gates can still produce AND, OR and NOT.

To check a law you have only just met, write the truth table:

| A | B | A ∧ B | ¬(A ∧ B) | ¬A | ¬B | ¬A ∨ ¬B |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |

The fourth and seventh columns match on every row, so the two expressions are equivalent.

## A method for simplifying

1. **Remove XOR and any compound NOT first.** Rewrite ⊕ using its definition and use De Morgan to remove brackets that have a NOT in front.
2. **Look for a common factor** and use the distributive law to take it out.
3. **Look for a term and its complement** (A and ¬A) joined by AND or OR, and replace them using the complement law.
4. **Look for absorption:** a short term that makes a longer term containing it redundant.
5. **Apply identity, null and idempotent laws** to tidy up.
6. **Name the law at every step.** In an exam, a line with no reason may earn nothing.

## Worked example 1: factorising

Simplify `(¬A ∧ B) ∨ (A ∧ B)`.

1. B is common to both terms: `= B ∧ (¬A ∨ A)` (distributive law, applied in reverse).
2. `¬A ∨ A = 1` (complement law), so `= B ∧ 1`.
3. `B ∧ 1 = B` (identity law).

**Result: B.** A is irrelevant, so the whole circuit can be replaced by a wire carrying B.

## Worked example 2: three terms

Simplify `(A ∧ B) ∨ (A ∧ ¬B) ∨ (¬A ∧ B)`.

1. Take A out of the first two terms: `= (A ∧ (B ∨ ¬B)) ∨ (¬A ∧ B)`.
2. `B ∨ ¬B = 1`, so `= (A ∧ 1) ∨ (¬A ∧ B)`.
3. `A ∧ 1 = A`, so `= A ∨ (¬A ∧ B)`.
4. Apply the OR form of the distributive law: `= (A ∨ ¬A) ∧ (A ∨ B)`.
5. `A ∨ ¬A = 1`, so `= 1 ∧ (A ∨ B) = A ∨ B`.

**Result: A ∨ B.** A truth table agrees: the original expression is 0 only when A and B are both 0.

## Worked example 3: De Morgan then simplify

Simplify `¬(¬A ∨ B) ∧ C`.

1. Apply De Morgan to the bracket: `¬(¬A ∨ B) = ¬(¬A) ∧ ¬B`.
2. Double negation: `= A ∧ ¬B`.
3. Reattach C: `= A ∧ ¬B ∧ C`.

**Result: A ∧ ¬B ∧ C.** This is true for only one combination of inputs (A = 1, B = 0, C = 1), which you can confirm in a truth table. It cannot be simplified further.

## Worked example 4: complement inside a NOR

Simplify `¬(A ∨ B) ∨ (¬A ∧ B)`.

1. De Morgan on the first term: `= (¬A ∧ ¬B) ∨ (¬A ∧ B)`.
2. Take ¬A out: `= ¬A ∧ (¬B ∨ B)`.
3. Complement: `= ¬A ∧ 1`.
4. Identity: `= ¬A`.

**Result: ¬A.**

## Worked example 5: absorption

Simplify `A ∧ (¬A ∨ B)`.

1. Distribute: `= (A ∧ ¬A) ∨ (A ∧ B)`.
2. Complement: `= 0 ∨ (A ∧ B)`.
3. Identity: `= A ∧ B`.

**Result: A ∧ B.** Compare this with the absorption law `A ∧ (A ∨ B) = A`. The difference is the NOT, and it changes the result completely, so read each bracket with care.

## Worked example 6: XOR

Show that `(A ∨ B) ∧ ¬(A ∧ B)` is the same as `A ⊕ B`.

1. De Morgan on the second factor: `= (A ∨ B) ∧ (¬A ∨ ¬B)`.
2. Distribute the second bracket over the first: `= (A ∧ ¬A) ∨ (A ∧ ¬B) ∨ (B ∧ ¬A) ∨ (B ∧ ¬B)`.
3. Complement removes the first and last terms: `= (A ∧ ¬B) ∨ (B ∧ ¬A)`.
4. This is the definition of XOR.

**Result: A ⊕ B.** In words, "at least one is true, but not both".

## Building an expression from a circuit or a statement

You will often start from a description, not from an expression. Translate piece by piece:

- "The alarm sounds if the door is open and the system is armed, or if the panic button is pressed": `Alarm = (Door ∧ Armed) ∨ Panic`.
- "The motor runs unless both guards are open": `Motor = ¬(G1 ∧ G2)`, which by De Morgan is `¬G1 ∨ ¬G2`. The motor stops only if both guards are open.

Writing a statement as an expression and then simplifying it is a common way to show a circuit can use fewer gates.

## Common mistakes

- **Distributing a NOT over a bracket without changing the operator.** `¬(A ∧ B)` is not `¬A ∧ ¬B`. The AND must become OR.
- **Forgetting the NOT on one term** when applying De Morgan. Every term inside the bracket is negated.
- **Misusing absorption.** `A ∨ (A ∧ B) = A` needs the same A in both places. `A ∨ (¬A ∧ B)` is `A ∨ B`, not `A`.
- **Ignoring precedence.** `¬A ∧ B` is `(¬A) ∧ B`, not `¬(A ∧ B)`.
- **Saying a step is "obvious".** Cite the law.
- **Stopping early.** If a term and its complement are still both present, there is more to do.
- **Applying arithmetic habits.** `A ∨ A` is A, not 2A, and `A ∧ A` is A, not A squared.

## Exam technique

- When asked to **simplify**, show each step with its law named. Aim for the shortest correct expression.
- When asked to **show that** two expressions are equal, work on one side only until it matches the other, or reduce both to the same form.
- When a question allows a truth table, use it as a **check** on your algebra, but follow the instruction of the question about which method to use.
- When given a circuit, label the output of every gate with its sub-expression before you try to simplify.

## Related resources

- [Boolean algebra revision notes](/resources/aqa-a-level-computer-science-7517-boolean-algebra-revision-notes/)
- [Boolean algebra practice questions](/resources/aqa-a-level-computer-science-7517-boolean-algebra-practice/)
- [Fundamentals of computer systems revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-revision-notes/)

*Written against the AQA A-level Computer Science (7517) specification, 4.6.5 Boolean algebra. Always check the current specification on the AQA website.*
