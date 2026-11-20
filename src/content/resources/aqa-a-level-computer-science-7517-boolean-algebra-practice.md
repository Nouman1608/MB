---
title: "AQA A-Level Computer Science (7517): Boolean Algebra -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.6.5 questions with answers: Boolean identities, De Morgan's laws and simplifying expressions step by step."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Boolean algebra study guide](/resources/aqa-a-level-computer-science-7517-boolean-algebra/) | [Boolean algebra revision notes](/resources/aqa-a-level-computer-science-7517-boolean-algebra-revision-notes/)

In these questions ¬ means NOT, ∧ means AND, ∨ means OR and ⊕ means XOR. NOT is applied first, then AND, then OR. Show the law used at each step of a simplification.

---

## Section A

**1.** State De Morgan's two laws. **[2]**

**2.** State the value of each expression for any value of A.

**(a)** A ∨ 1
**(b)** A ∧ ¬A
**(c)** A ∨ A **[3]**

**3.** Name the law shown by each statement.

**(a)** A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)
**(b)** A ∨ (A ∧ B) = A **[2]**

**4.** Complete a truth table for A and B to show that ¬(A ∧ B) is equivalent to ¬A ∨ ¬B. **[3]**

**5.** A student writes ¬(A ∧ B) = ¬A ∧ ¬B. Give values of A and B that show this is wrong, and write the correct right-hand side. **[3]**

## Section B

**6.** Simplify (A ∨ B) ∧ (A ∨ ¬B). Name each law used. **[3]**

**7.** Simplify ¬(¬P ∨ ¬Q) ∧ R. **[3]**

**8.** Use De Morgan's law to write ¬((A ∨ B) ∧ C) without a NOT outside any bracket. **[3]**

**9.** Simplify (A ∧ B) ∨ (A ∧ ¬B ∧ C) to a form with a single occurrence of A. **[4]**

**10.** Simplify (A ∨ B) ∧ (A ∨ C) ∧ (¬A ∨ B). **[5]**

**11.** Show that (A ∨ B) ∧ ¬(A ∧ B) is equivalent to A ⊕ B. **[4]**

**12.** A greenhouse heater is on when it is cold and the window is closed, or when it is cold, the window is open and the frost sensor is active.

**(a)** Write an expression for the heater using the inputs Cold, Open and Frost. **[2]**
**(b)** Simplify your expression. **[3]**
**(c)** Explain one advantage of building the simplified circuit. **[1]**

**13.** A NAND gate gives ¬(A ∧ B). Show how an OR gate for inputs A and B can be built from NAND gates only, using De Morgan's law to justify your design. **[4]**

---

## Answers

**1.** ¬(A ∧ B) = ¬A ∨ ¬B [1]; ¬(A ∨ B) = ¬A ∧ ¬B [1].

**2. (a)** 1 [1].
**(b)** 0 [1].
**(c)** A [1].

**3. (a)** Distributive law [1].
**(b)** Absorption law [1].

**4.** Table:

| A | B | A ∧ B | ¬(A ∧ B) | ¬A | ¬B | ¬A ∨ ¬B |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 |

All four rows of ¬(A ∧ B) correct [1]; all four rows of ¬A ∨ ¬B correct [1]; the two columns are identical, so the expressions are equivalent [1].

**5.** Take A = 1 and B = 0 [1]. Then ¬(A ∧ B) = ¬0 = 1 but ¬A ∧ ¬B = 0 ∧ 1 = 0, so the two sides differ [1]. The correct right-hand side is ¬A ∨ ¬B (the AND must change to OR) [1].

**6.** Apply the OR form of the distributive law: A ∨ (B ∧ ¬B) [1]; complement law: B ∧ ¬B = 0, giving A ∨ 0 [1]; identity law: A [1].

**7.** De Morgan: ¬(¬P ∨ ¬Q) = ¬¬P ∧ ¬¬Q [1]; double negation: P ∧ Q [1]; so the whole expression is P ∧ Q ∧ R [1].

**8.** De Morgan on the outer NOT: ¬(A ∨ B) ∨ ¬C [1]; De Morgan on the inner bracket: (¬A ∧ ¬B) ∨ ¬C [1]; operators swapped correctly each time with each term negated [1].

**9.** Take A out as a common factor: A ∧ (B ∨ (¬B ∧ C)) [1]; OR distributive law inside the bracket: (B ∨ ¬B) ∧ (B ∨ C) [1]; complement law: 1 ∧ (B ∨ C) [1]; identity law: A ∧ (B ∨ C) [1].

**10.** Group the first and third factors: (A ∨ B) ∧ (¬A ∨ B) [1]; commute and apply the OR distributive law: B ∨ (A ∧ ¬A) [1]; complement and identity laws: B ∨ 0 = B [1]; the second factor remains, giving B ∧ (A ∨ C) [1]; no further simplification possible, or the result is checked against the original for one input combination [1].

**11.** De Morgan on the second factor: (A ∨ B) ∧ (¬A ∨ ¬B) [1]; expand: (A ∧ ¬A) ∨ (A ∧ ¬B) ∨ (B ∧ ¬A) ∨ (B ∧ ¬B) [1]; complement law removes the first and last terms [1]; result (A ∧ ¬B) ∨ (¬A ∧ B), which is the definition of XOR [1].

**12. (a)** (Cold ∧ ¬Open) ∨ (Cold ∧ Open ∧ Frost) [2] (1 for each term).
**(b)** Take Cold out: Cold ∧ (¬Open ∨ (Open ∧ Frost)) [1]; OR distributive law: (¬Open ∨ Open) ∧ (¬Open ∨ Frost), then complement law gives ¬Open ∨ Frost [1]; result Cold ∧ (¬Open ∨ Frost) [1].
**(c)** Fewer gates, so the circuit is cheaper, uses less power or has fewer parts that can fail [1].

**13.** By De Morgan, A ∨ B = ¬(¬A ∧ ¬B) [1]. A NAND gate with both inputs joined to A gives ¬(A ∧ A) = ¬A (idempotent law), and the same for B [1]. Feed ¬A and ¬B into a third NAND gate, which outputs ¬(¬A ∧ ¬B) [1], and that equals A ∨ B, so three NAND gates are enough [1].

---

## Where marks are usually lost

- Changing the NOT but leaving AND or OR unchanged when applying De Morgan.
- Omitting the NOT on one term inside the bracket.
- Treating `A ∨ (¬A ∧ B)` as A instead of A ∨ B.
- Giving a final answer with no named laws.
- Stopping while a term and its complement are still both present.
