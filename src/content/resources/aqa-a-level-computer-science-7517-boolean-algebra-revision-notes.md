---
title: "AQA A-Level Computer Science (7517): Boolean Algebra -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.6.5 recall: Boolean identities, De Morgan's laws, a simplification method, common slips and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.6.5 Boolean algebra**, AQA A-Level Computer Science (7517): use **Boolean identities and De Morgan's laws** to manipulate and simplify Boolean expressions. Every law and six fully worked simplifications are in the [Boolean algebra study guide](/resources/aqa-a-level-computer-science-7517-boolean-algebra/); exam-style questions are in the [Boolean algebra practice questions](/resources/aqa-a-level-computer-science-7517-boolean-algebra-practice/).

## Notation

| Symbol | Meaning |
|---|---|
| ¬A | NOT A |
| A ∧ B | A AND B |
| A ∨ B | A OR B |
| A ⊕ B | A XOR B: true when exactly one input is true |

**Precedence:** NOT first, then AND, then OR. Add brackets when in doubt.

## The identities

| Law | AND form | OR form |
|---|---|---|
| Identity | A ∧ 1 = A | A ∨ 0 = A |
| Null | A ∧ 0 = 0 | A ∨ 1 = 1 |
| Idempotent | A ∧ A = A | A ∨ A = A |
| Complement | A ∧ ¬A = 0 | A ∨ ¬A = 1 |
| Commutative | A ∧ B = B ∧ A | A ∨ B = B ∨ A |
| Associative | (A ∧ B) ∧ C = A ∧ (B ∧ C) | (A ∨ B) ∨ C = A ∨ (B ∨ C) |
| Distributive | A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C) | A ∨ (B ∧ C) = (A ∨ B) ∧ (A ∨ C) |
| Absorption | A ∧ (A ∨ B) = A | A ∨ (A ∧ B) = A |

Also: **double negation** ¬¬A = A, and **XOR** A ⊕ B = (A ∧ ¬B) ∨ (¬A ∧ B).

**Dual rule:** swap ∧ with ∨ and 0 with 1 in any law and you get another true law. Use it to recall the OR form from the AND form.

## De Morgan's laws

- ¬(A ∧ B) = ¬A ∨ ¬B
- ¬(A ∨ B) = ¬A ∧ ¬B

**Procedure:** negate every term inside the bracket, swap ∧ and ∨, then remove any double negation.

- NAND = ¬(A ∧ B) = ¬A ∨ ¬B.
- NOR = ¬(A ∨ B) = ¬A ∧ ¬B.
- With three terms: ¬(A ∨ B ∨ C) = ¬A ∧ ¬B ∧ ¬C.

## Simplification method

1. Remove XOR (use its definition) and expand any NOT over a bracket (De Morgan).
2. Factorise with the distributive law.
3. Replace A and ¬A pairs using the complement law.
4. Apply absorption.
5. Tidy with identity, null and idempotent laws.
6. **Write the name of the law beside each line.**

## Results worth remembering

These come up so often that spotting them saves time. Each can be derived from the laws above.

| Expression | Simplifies to | Key law |
|---|---|---|
| (¬A ∧ B) ∨ (A ∧ B) | B | factorise, complement |
| A ∨ (¬A ∧ B) | A ∨ B | OR distributive, complement |
| A ∧ (¬A ∨ B) | A ∧ B | distribute, complement |
| (A ∨ B) ∧ (A ∨ ¬B) | A | OR distributive, complement |
| ¬(¬A ∨ ¬B) | A ∧ B | De Morgan, double negation |
| (A ∨ B) ∧ ¬(A ∧ B) | A ⊕ B | De Morgan, complement |
| A ∨ (A ∧ B) | A | absorption |

**Trap pair:** `A ∧ (A ∨ B) = A` (absorption), but `A ∧ (¬A ∨ B) = A ∧ B`. One NOT changes the answer.

## Worked check

Simplify `¬(A ∨ B) ∨ (¬A ∧ B)`.

1. De Morgan: `(¬A ∧ ¬B) ∨ (¬A ∧ B)`.
2. Factorise ¬A: `¬A ∧ (¬B ∨ B)`.
3. Complement: `¬A ∧ 1`.
4. Identity: `¬A`.

## Reading circuits and statements

- Label the output of each gate with its expression, working from the inputs to the output.
- "X and Y, or Z" is `(X ∧ Y) ∨ Z`.
- "Unless both are on" means `¬(P ∧ Q)`, which equals `¬P ∨ ¬Q`.
- Gate symbols: AND, OR, NOT, XOR, plus NAND and NOR (an AND or OR with a NOT on the output).

## Question styles to expect

- **Simplify:** reduce an expression to the fewest terms, naming each law.
- **Show that:** start from one side and reach the other, or reduce both to the same form.
- **Circuit to expression:** label every gate output, then write the final expression.
- **Expression to circuit:** one gate for each operator, working from the innermost bracket outwards.
- **NAND or NOR only:** use De Morgan's laws to rewrite AND, OR and NOT. For example, NOT A is NAND(A, A), because A ∧ A = A.
- **Truth table check:** write every input combination (2ⁿ rows for n inputs) and compare columns.

## Key terms

| Term | Definition |
|---|---|
| Boolean expression | A combination of variables and operators (AND, OR, NOT, XOR) that evaluates to 0 or 1 |
| Identity | A law that is true for every value of its variables |
| Equivalent expressions | Expressions with identical truth tables |
| Complement | The NOT of a variable: A and ¬A are complements |
| De Morgan's laws | Rules for negating an AND or an OR |
| Simplify | Rewrite as an equivalent expression with fewer terms or operators |
| Absorption | A short term makes a longer term that contains it redundant |

## Exam traps

- **De Morgan with the operator left unchanged.** `¬(A ∧ B)` is not `¬A ∧ ¬B`.
- **A missing NOT** on one term after expanding a bracket.
- **Absorption with a complement.** `A ∨ (¬A ∧ B)` is `A ∨ B`, not `A`.
- **Precedence errors.** `¬A ∧ B` is not `¬(A ∧ B)`.
- **Steps with no reasons.** Name each law.
- **Using arithmetic instincts.** `A ∨ A = A`, and `A ∧ A = A`.
- **Stopping with A and ¬A still joined** in the same term.

## Self-test

1. Write the complement law in both forms.
2. State De Morgan's law for ¬(A ∨ B).
3. What does ¬¬A equal?
4. Write A ⊕ B using only AND, OR and NOT.
5. Simplify `A ∧ (A ∨ B)`.
6. Simplify `A ∨ (¬A ∧ B)`.
7. Express `¬(P ∧ Q)` using OR.
8. Simplify `(X ∧ Y) ∨ (X ∧ ¬Y)`.
9. In what order are NOT, AND and OR evaluated?
10. Which gate has the same behaviour as ¬A ∨ ¬B?
11. Why does a shorter expression matter for a circuit?
12. Simplify `¬(¬A ∧ ¬B)`.

**Answers**

1. A ∧ ¬A = 0 and A ∨ ¬A = 1.
2. ¬(A ∨ B) = ¬A ∧ ¬B.
3. A (double negation).
4. (A ∧ ¬B) ∨ (¬A ∧ B).
5. A (absorption).
6. A ∨ B.
7. ¬P ∨ ¬Q.
8. X: factorise to `X ∧ (Y ∨ ¬Y)`, then `X ∧ 1`.
9. NOT, then AND, then OR.
10. NAND.
11. It needs fewer gates, so the circuit is cheaper and uses less power.
12. A ∨ B (De Morgan, then double negation).

## Related resources

- [Boolean algebra study guide](/resources/aqa-a-level-computer-science-7517-boolean-algebra/)
- [Boolean algebra practice questions](/resources/aqa-a-level-computer-science-7517-boolean-algebra-practice/)
- [Fundamentals of computer systems revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-computer-systems-revision-notes/)
