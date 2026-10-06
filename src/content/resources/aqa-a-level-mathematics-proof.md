---
title: "AQA A-Level Mathematics: A: Proof (7357)"
seoTitle: "AQA A-Level Maths Proof Study Guide (7357)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "A: Proof"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-proof-aqa-alevel-maths"
description: "Study guide to AQA A-level Maths section A: Proof -- deduction, exhaustion, counter-examples and contradiction, with fully worked proofs."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section 3.2 **A: Proof** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. The section has one content reference, **A1**, and this guide covers every part of it: the structure of a proof, proof by deduction, proof by exhaustion, disproof by counter-example and proof by contradiction. 7357 is a linear A-level, so there is no AS/A split to worry about. Proof is listed in the content for **Paper 1**, and Papers 2 and 3 can each assess any Paper 1 content, so a proof question can appear on any of the three papers.

Use this page with the [Proof revision notes](/resources/aqa-a-level-mathematics-proof-revision-notes/) and the [Proof practice questions](/resources/aqa-a-level-mathematics-proof-practice/). The wider skill of mathematical argument (OT1) is in the [Overarching themes study guide](/resources/aqa-a-level-mathematics-overarching-themes/). For the full course, see the [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/) and the [printable checklist](/checklists/aqa/a-level/mathematics/).

## What this section covers

| Content reference | What you must be able to do |
|---|---|
| A1 (structure) | Write a proof that starts from given assumptions and moves through logical steps to a conclusion |
| A1 (deduction) | Prove a general statement directly, usually with algebra |
| A1 (exhaustion) | Split a statement into a finite set of cases and prove every case |
| A1 (counter-example) | Disprove a general statement with one case where it fails |
| A1 (contradiction) | Assume the statement is false and reach an impossibility, including the irrationality of √2, the infinity of primes and unfamiliar proofs |

A calculator is allowed in every 7357 paper, but it cannot prove anything. A calculator check of a few values is evidence, not proof.

## The structure of a proof

Every proof has three parts.

1. **Assumptions.** What you are given, or what you may take as known. Write them down.
2. **Logical steps.** Each line must follow from earlier lines or from known facts.
3. **Conclusion.** A sentence that states exactly what has been proved.

### Notation from the specification

The specification's Appendix A sets out the symbols you are expected to use:

| Symbol | Meaning |
|---|---|
| p ⇒ q | p implies q (if p then q) |
| p ⇐ q | p is implied by q (if q then p) |
| p ⇔ q | p implies and is implied by q (p is equivalent to q) |
| ∴ | therefore |
| ∵ | because |
| ∈ | is an element of |
| ℕ | the natural numbers 1, 2, 3, … |
| ℤ | the integers 0, ±1, ±2, ±3, … |
| ℤ⁺ | the positive integers 1, 2, 3, … |
| ℚ | the rationals, {p/q : p ∈ ℤ, q ∈ ℤ⁺} |
| ℝ | the real numbers |

### Writing numbers algebraically

Most number proofs start by writing the numbers in a general form. Use a letter that can stand for any integer.

- Even number: 2n. Odd number: 2n + 1 (n ∈ ℤ).
- Two **different** odd numbers: 2m + 1 and 2n + 1. Using the same letter for both would only cover equal numbers.
- Consecutive integers: n, n + 1, n + 2.
- Multiple of k: kn. Leaves remainder r on division by k: kn + r.
- A rational number: a/b with a ∈ ℤ, b ∈ ℤ⁺.

## Proof by deduction

A proof by deduction argues directly from known facts to the result. In number proofs you usually expand, then factorise to show the required form.

### Worked example 1: consecutive odd squares

**Prove that the difference between the squares of any two consecutive odd numbers is a multiple of 8.**

Let the numbers be 2n + 1 and 2n + 3, where n ∈ ℤ.

```
(2n + 3)² − (2n + 1)²
  = (4n² + 12n + 9) − (4n² + 4n + 1)
  = 8n + 8
  = 8(n + 1)
```

n + 1 is an integer, so 8(n + 1) is a multiple of 8. Therefore the difference between the squares of any two consecutive odd numbers is a multiple of 8.

Notice the last line. It repeats the claim. Without it, the proof is not finished.

### Worked example 2: an inequality for all real x

**Prove that 2x² − 8x + 9 > 0 for all real values of x.**

Complete the square:

```
2x² − 8x + 9 = 2(x² − 4x) + 9
             = 2[(x − 2)² − 4] + 9
             = 2(x − 2)² + 1
```

(x − 2)² ≥ 0 for all real x, so 2(x − 2)² ≥ 0, and so 2(x − 2)² + 1 ≥ 1 > 0. Therefore 2x² − 8x + 9 > 0 for all real x.

The key reason is that a square of a real number is never negative. Say this in words. Completing the square is covered in the [quadratics and inequalities guide](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/).

## Proof by exhaustion

In proof by exhaustion you split every possibility into a **finite** number of cases and prove the statement in each case. The cases must cover everything. Two common types:

- **A small finite set.** Check every member.
- **Cases by remainder.** Every integer is 2k or 2k + 1; or 3k, 3k + 1 or 3k + 2; and so on. This turns infinitely many integers into a few cases.

### Worked example 3: squares and division by 4

**Prove that the square of any integer is of the form 4k or 4k + 1, where k ∈ ℤ.**

Every integer n is either even or odd.

Case 1: n is even, n = 2m (m ∈ ℤ).

```
n² = 4m², which is of the form 4k with k = m².
```

Case 2: n is odd, n = 2m + 1.

```
n² = 4m² + 4m + 1 = 4(m² + m) + 1, which is of the form 4k + 1 with k = m² + m.
```

Every integer is even or odd, so every square is of the form 4k or 4k + 1.

This result is useful later. For example, 4007 = 4 × 1001 + 3, so 4007 is of the form 4k + 3 and cannot be a square.

### Worked example 4: a finite check

**Prove that 97 is prime.**

If 97 = ab with 1 < a ≤ b, then a² ≤ ab = 97, so a ≤ √97 ≈ 9.85. So 97 has a factor greater than 1 only if it has one of 9 or less, and then it has a prime factor of 9 or less. The primes up to 9 are 2, 3, 5 and 7.

```
97 ÷ 2 = 48 remainder 1
97 ÷ 3 = 32 remainder 1
97 ÷ 5 = 19 remainder 2
97 ÷ 7 = 13 remainder 6
```

None divides 97, so 97 is prime.

## Disproof by counter-example

A statement that claims something for **all** cases is false if it fails in **one** case. That case is a counter-example. To use one, you must show clearly that it satisfies the conditions and that the conclusion fails.

### Worked example 5

**Show that the statement "n² + n + 41 is prime for every positive integer n" is false.**

Take n = 40:

```
40² + 40 + 41 = 1600 + 40 + 41 = 1681 = 41²
```

1681 = 41 × 41, so it is not prime. Therefore the statement is false.

This example shows why checking cases does not prove anything: the expression gives primes for n = 1 to 39, yet the statement is still false.

Two shorter ones:

- "If x² > 4 then x > 2." Take x = −3: x² = 9 > 4, but −3 < 2. False.
- "sin(A + B) = sin A + sin B for all angles." Take A = B = 90°: sin 180° = 0, but sin 90° + sin 90° = 2. False.

## Proof by contradiction

To prove a statement by contradiction:

1. **Assume the statement is false.** Write the negation precisely.
2. **Reason logically** from that assumption.
3. **Reach a contradiction**: something impossible, or something that clashes with the assumption.
4. **Conclude** that the assumption was wrong, so the original statement is true.

Getting the negation right matters. The negation of "√2 is irrational" is "√2 is rational". The negation of "there are infinitely many primes" is "there are finitely many primes". The negation of "there are no integers x, y with …" is "there exist integers x, y with …".

### A result you need first

**Prove that if n² is even, then n is even (n ∈ ℤ).**

Assume n² is even and n is odd, so n = 2k + 1. Then n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, which is odd. This contradicts n² being even. So if n² is even, n is even.

### Worked example 6: √2 is irrational

The specification names this proof, so learn its structure step by step.

- **Assumption.** Suppose √2 is rational. Then √2 = a/b with a ∈ ℤ, b ∈ ℤ⁺, and a/b in its **lowest terms** (a and b have no common factor other than 1).
- **Square.** 2 = a²/b², so a² = 2b². So a² is even.
- **Use the result above.** a² even ⇒ a even. Write a = 2c.
- **Substitute.** (2c)² = 2b² gives 4c² = 2b², so b² = 2c². So b² is even, and b is even.
- **Contradiction.** a and b are both even, so 2 is a common factor. This contradicts a/b being in lowest terms.
- **Conclusion.** The assumption is false, so √2 is irrational.

The phrase "in lowest terms" is what makes the contradiction work. If you leave it out of the assumption, there is nothing to contradict.

### Worked example 7: there are infinitely many primes

- **Assumption.** Suppose there are finitely many primes. List them all: p₁, p₂, …, pₙ.
- **Construct a number.** Let N = p₁ × p₂ × … × pₙ + 1.
- **Reason.** N > 1, so N has at least one prime factor. N leaves remainder 1 when divided by each of p₁, …, pₙ, so none of them is a factor of N.
- **Contradiction.** N has a prime factor that is not on the list, but the list was meant to contain every prime.
- **Conclusion.** There are infinitely many primes.

A common slip is to say "N is prime". That is not always true. For example, 2 × 3 × 5 × 7 × 11 × 13 + 1 = 30031 = 59 × 509. The proof only needs N to have a prime factor missing from the list.

### Worked example 8: an unfamiliar proof

The specification expects you to apply the method to unfamiliar statements.

**Prove that there are no positive integers x and y such that x² − y² = 1.**

Assume there are positive integers x and y with x² − y² = 1.

```
(x − y)(x + y) = 1
```

x + y is a positive integer, so x − y is positive too. Two positive integers with product 1 must both be 1, so x + y = 1 and x − y = 1. Adding gives x = 1, and then y = 0.

This contradicts y being a positive integer. So there are no positive integers x and y with x² − y² = 1.

## Choosing a method

| The statement says… | Try first |
|---|---|
| "for all n" with an algebraic form | Deduction |
| depends on whether n is even/odd, or on a remainder | Exhaustion by cases |
| "is not", "there is no", "irrational", "infinitely many" | Contradiction |
| "show that this is false" | Counter-example |

## Common errors

- **Checking examples instead of proving.** Testing n = 1, 2, 3 is not a proof by exhaustion unless those are the only cases.
- **Using one letter for two different numbers.** (2n + 1) + (2n + 1) only covers adding an odd number to itself.
- **Leaving a case out.** With remainders on division by 3 you need three cases, not two.
- **Stopping at an expression.** Writing 8(n + 1) and stopping loses the conclusion. Say why it is a multiple of 8 and restate the claim.
- **A vague counter-example.** Show the working, for example 1681 = 41², not just "n = 40 doesn't work".
- **Getting the negation wrong** in a contradiction proof, or never stating what the contradiction is.
- **Writing ⇔ when only ⇒ is true.** x = 3 ⇒ x² = 9, but x² = 9 does not imply x = 3.

## Next steps

- Condensed recall and a quick self-test: [Proof revision notes](/resources/aqa-a-level-mathematics-proof-revision-notes/).
- Original exam-style questions with marked answers: [Proof practice questions](/resources/aqa-a-level-mathematics-proof-practice/).
- More on argument and notation: [Overarching themes revision notes](/resources/aqa-a-level-mathematics-themes-revision-notes/) and [exam preparation](/resources/aqa-a-level-mathematics-exam-preparation/).
- Find your weak topics: [free diagnostics](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018 (A-level exams June 2018 onwards), published by AQA. Section 3.2 A: Proof, content reference A1.
