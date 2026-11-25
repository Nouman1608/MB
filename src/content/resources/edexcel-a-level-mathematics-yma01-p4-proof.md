---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Proof by contradiction (P4.1)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-proof-edexcel-alevel-maths"
description: "How to write a proof by contradiction for Edexcel IAL Maths Unit P4: negating a statement, irrationality, the infinity of primes and unfamiliar proofs."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1 of Unit P4 (WMA14) in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). The content statement is "proof by contradiction", and the guidance specifies that this includes "proof of the irrationality of √2 and the infinity of primes, and application to unfamiliar proofs".

Unit P4 assumes Units P1 to P3, so the methods from Unit P2 (proof by exhaustion, disproof by counter-example, and representing integers in algebra) are available inside a P4 proof; see the [P2 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p2-proof/).

The [guide to proof by contradiction, partial fractions and the binomial series](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/) sets out the two named proofs in full. This page concentrates on the skill that "application to unfamiliar proofs" demands: writing the correct opening assumption for any statement, and recognising what counts as a contradiction. Afterwards, use the [P4 proof revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-proof-revision-notes/) and the [P4 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-proof-practice/).

## The logic of the method

A proof by contradiction of a statement S has four steps:

1. **Assume S is false** (assume its negation).
2. **Reason correctly** from that assumption, using algebra and known facts.
3. **Reach a contradiction**: a statement that is impossible, or that conflicts with the assumption or a known fact.
4. **Conclude** that the assumption was wrong, so S is true.

The method works because a correct chain of reasoning cannot lead from a true statement to a false one. If the conclusion is impossible, the starting assumption must be false.

## Writing the negation

Most lost marks in unfamiliar proofs come from step 1.

| Statement to prove | Assume (the negation) |
|---|---|
| √5 is irrational | √5 is rational: √5 = a/b with a, b integers, b ≠ 0, in lowest terms |
| There are infinitely many primes | There are finitely many primes |
| There is no largest even integer | There is a largest even integer, N |
| There are no integers m, n with P(m, n) | There are integers m, n with P(m, n) |
| For all x, P(x) | There is some x for which P(x) is false |
| If A then B | A is true and B is false |

"In lowest terms" (a and b have no common factor other than 1) is part of the assumption for irrationality proofs, and it is usually what is contradicted.

## A building block: if n² is even, n is even

Many proofs need this fact, and it is itself a short proof by contradiction.

**Prove that, for an integer n, if n² is even then n is even.**

Assume n² is even and n is odd. Then n = 2k + 1 for some integer k, and n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, which is odd. This contradicts n² being even. So if n² is even, n is even.

## Worked example 1: √3 is irrational

The √2 proof uses evenness. For √3, the same structure needs the fact "if n² is a multiple of 3, then n is a multiple of 3".

**Step A: the fact about multiples of 3.** Suppose n² is a multiple of 3 but n is not. Then n = 3k + 1 or n = 3k + 2 for some integer k.

- n = 3k + 1: n² = 9k² + 6k + 1 = 3(3k² + 2k) + 1
- n = 3k + 2: n² = 9k² + 12k + 4 = 3(3k² + 4k + 1) + 1

Either way n² leaves remainder 1 on division by 3, so it is not a multiple of 3: a contradiction.

**Step B: the main proof.** Assume √3 is rational, so √3 = a/b where a and b are integers with no common factor and b ≠ 0.

- Squaring: 3 = a²/b², so a² = 3b².
- So a² is a multiple of 3, and by Step A, a is a multiple of 3: a = 3c.
- Then 9c² = 3b², so b² = 3c². So b² is a multiple of 3, and b is a multiple of 3.
- a and b are both multiples of 3, which contradicts their having no common factor.

Therefore **√3 is irrational**.

## Worked example 2: an irrational logarithm

**Prove that log₂ 3 is irrational.**

Assume log₂ 3 is rational: log₂ 3 = p/q, where p and q are integers and q ≠ 0. Since log₂ 3 > 0 (because 3 > 1), we can take p and q to be positive.

Then 2^(p/q) = 3, so raising both sides to the power q: **2ᵖ = 3^q**.

p ≥ 1, so 2ᵖ is even. 3^q is a product of odd numbers, so it is odd. An even number cannot equal an odd number: contradiction.

Therefore **log₂ 3 is irrational**.

This is a good model of an "unfamiliar" proof: the index law and parity facts are familiar, and only the structure is new.

## Worked example 3: no smallest positive rational

**Prove that there is no smallest positive rational number.**

Assume there is a smallest positive rational number, r. Then r/2 is also rational (if r = a/b then r/2 = a/(2b)), and 0 < r/2 < r.

So r/2 is a positive rational number smaller than r, contradicting the assumption that r is the smallest. Therefore there is no smallest positive rational number.

## The infinity of primes: getting the logic right

Assume there are finitely many primes, p₁, p₂, ..., pₙ. Let N = p₁p₂...pₙ + 1.

- N is greater than 1, so N has at least one prime factor.
- Dividing N by any pᵢ leaves remainder 1, so none of p₁, ..., pₙ divides N.
- So N has a prime factor not in the list, contradicting the assumption that the list contains every prime.

Therefore there are infinitely many primes.

The proof does **not** claim that N is prime. For example, 2 × 3 × 5 × 7 × 11 × 13 + 1 = 30031 = 59 × 509, which is not prime, but its prime factors 59 and 509 are not in the list 2, 3, 5, 7, 11, 13. That is all the proof needs.

## Common mistakes

- **Negating "for all" as "for none".** The negation of "every x satisfies P" is "some x does not satisfy P".
- **Missing "lowest terms"** in an irrationality proof, leaving nothing to contradict.
- **Assuming what you are proving,** for example using "√3 is irrational" as a step.
- **Unjustified steps** such as "a² is a multiple of 3, so a is a multiple of 3" without the supporting fact.
- **Claiming N is prime** in the primes proof.
- **No final sentence.** State that the assumption is false and the original statement is true.
- **Dividing by zero or by a variable** that could be zero during the algebra.

## Exam technique

- **"Prove by contradiction that ..."**: begin with "Assume that ..." and the exact negation.
- **Mark the contradiction clearly**, for example "this contradicts a and b having no common factor".
- **End with a conclusion** that repeats the statement.
- **"Use proof by contradiction to show ..." in an unfamiliar setting**: look for parity (even cannot equal odd), size (a number smaller than the smallest) or a square that would have to be negative.
- Write in sentences. Proof marks reward the logic between the lines of algebra.

## More resources on this topic

- [P4 proof revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-proof-revision-notes/)
- [P4 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-proof-practice/)
- [Proof by contradiction, partial fractions and the binomial series](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/)
- [P2 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p2-proof/)
- [P4 algebra and functions: partial fractions](/resources/edexcel-a-level-mathematics-yma01-p4-algebra-and-functions/)
