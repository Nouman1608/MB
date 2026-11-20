---
title: "OxfordAQA A-Level Computer Science (9645): Boolean algebra -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Boolean Algebra Questions"
resourceType: "practice-questions"
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
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.7.7 Boolean algebra: precedence, identities, De Morgan's laws and simplification, with worked answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.7.7 Boolean algebra** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: precedence, the commutative, associative and distributive laws, the listed identities and De Morgan's laws. Boolean notation: ⋅ is AND, + is OR, ⨁ is XOR, A̅ is NOT A, and NOT( ) stands for a bar drawn over a whole group. Show each step and name the law or identity you use.

Related pages: [Boolean algebra study guide](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra/) ·
[Boolean algebra revision notes](/resources/oxfordaqa-a-level-computer-science-9645-boolean-algebra-revision-notes/) ·
[computer organisation and architecture practice questions](/resources/oxfordaqa-a-level-computer-science-computer-organisation-and-architecture-practice/)

## Section A

**1.** State the order of precedence of the operators NOT, AND and OR, from highest to lowest. **[2]**

**2.** State De Morgan's laws for NOT(A + B) and NOT(A⋅B). **[2]**

**3.** Name the law that justifies each statement.

**(a)** A⋅(B + C) = A⋅B + A⋅C **[1]**
**(b)** A + B = B + A **[1]**

**4.** Evaluate A + B⋅C̅ and (A + B)⋅C̅ for A = 1, B = 0 and C = 1. **[2]**

## Section B

**5.** Simplify X = A⋅B̅ + A⋅B, showing each step. **[3]**

**6.** Simplify X = NOT(A̅⋅B), showing each step. **[3]**

**7.** Simplify X = (A + B)⋅(A + B̅), showing each step. **[4]**

**8.** Simplify X = A̅⋅B̅ + A̅⋅B, showing each step. **[3]**

**9.** Simplify X = NOT(A + B⋅C̅), giving your answer with no bar over a group. **[4]**

**10.** Simplify X = A⋅B + A̅⋅B + A̅⋅C. **[4]**

**11.** Use a truth table to show that A⋅B̅ + B = A + B. **[4]**

**12.** A circuit is described by P + P⋅Q + P⋅R.

**(a)** Simplify the expression. **[2]**
**(b)** State the saving in the number of gates, assuming one gate for each AND and each OR (the original uses two AND gates and two OR gates). **[2]**

**13.** NAND gates are used to build other gates.

**(a)** Show how a NOT gate is made from one NAND gate. **[1]**
**(b)** Show how A⋅B is made from NAND gates only. **[2]**
**(c)** Use De Morgan's laws to show that A + B can be made from NAND gates and NOT gates only. **[2]**

**14.** Simplify X = NOT(A + B)⋅(A + C), giving your answer as a single product of letters and complements. **[4]**

## Answers

**1.** NOT [1], then AND, then OR [1]. **[2]**

**2.** NOT(A + B) = A̅⋅B̅ [1]; NOT(A⋅B) = A̅ + B̅ [1]. **[2]**

**3. (a)** Distributivity (AND distributes over OR) [1]
**(b)** Commutativity [1]

**4.** A + B⋅C̅ = 1 + 0⋅0 = **1** [1]. (A + B)⋅C̅ = 1⋅0 = **0** [1]. **[2]**

**5.** Factorise: X = A⋅(B̅ + B) [1]. B̅ + B = 1, so X = A⋅1 [1]. A⋅1 = A, so **X = A** [1]. **[3]**

**6.** De Morgan: X = NOT(A̅) + B̅ [1]. Double negation: NOT(A̅) = A [1]. **X = A + B̅** [1]. **[3]**

**7.** Expand: X = A⋅A + A⋅B̅ + B⋅A + B⋅B̅ [1]. A⋅A = A and B⋅B̅ = 0, so X = A + A⋅B̅ + A⋅B + 0 [1]. A + A⋅B̅ = A (absorption), so X = A + A⋅B [1]. A + A⋅B = A, so **X = A** [1]. **[4]**
**8.** Factorise: X = A̅⋅(B̅ + B) [1]. B̅ + B = 1, so X = A̅⋅1 [1]. **X = A̅** [1]. **[3]**

**9.** De Morgan: X = A̅⋅NOT(B⋅C̅) [1]. De Morgan on the group: NOT(B⋅C̅) = B̅ + NOT(C̅) [1]. Double negation: NOT(C̅) = C [1]. **X = A̅⋅(B̅ + C)** [1]. **[4]**

**10.** Factorise the first two terms: X = B⋅(A + A̅) + A̅⋅C [1]. A + A̅ = 1, so X = B⋅1 + A̅⋅C [1]. B⋅1 = B [1]. **X = B + A̅⋅C** [1]. **[4]**

**11.**

| A | B | A⋅B̅ | A⋅B̅ + B | A + B |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 |

All four rows listed [1]; A⋅B̅ column correct [1]; A⋅B̅ + B column correct [1]; A + B column correct and a statement that the last two columns match in every row, so the expressions are equal [1]. **[4]**

**12. (a)** Factorise: P⋅(1 + Q + R) [1]. 1 + Q + R = 1, so **P⋅1 = P** [1]. (Absorption applied twice is also accepted.)
**(b)** The original has 4 gates and the simplified form is just the input P, with **no gates** [1], so all **4 gates** are saved [1].

**13. (a)** Join both inputs of a NAND gate together: A NAND A = A̅ [1].
**(b)** A NAND B gives NOT(A⋅B) [1]. Feeding that into a NOT gate (a NAND with its inputs joined) gives A⋅B [1].
**(c)** De Morgan: A + B = NOT(A̅⋅B̅) [1], which is a NAND gate whose inputs are A̅ and B̅, each made with a NOT gate [1].

**14.** De Morgan: NOT(A + B) = A̅⋅B̅, so X = A̅⋅B̅⋅(A + C) [1]. Expand: X = A̅⋅B̅⋅A + A̅⋅B̅⋅C [1]. A̅⋅A = 0, so the first term is 0 [1]. **X = A̅⋅B̅⋅C** [1]. **[4]**

## Frequently asked questions

**Do I have to use the exact route in the mark scheme?**
No. Any valid sequence of steps that uses the identities and laws correctly is accepted, as long as each step is justified.

**Can I check my answer?**
Yes. Substitute one set of values into the original and simplified expressions. If they differ, there is an error. If they agree, try one more row.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.7.7 Boolean algebra.
