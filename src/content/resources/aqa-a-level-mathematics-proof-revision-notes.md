---
title: "AQA A-Level Mathematics: A: Proof (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths Proof Revision Notes (7357)"
resourceType: "revision-notes"
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
description: "Condensed AQA A-level Maths proof notes: method steps, algebraic forms, the √2 and primes proofs, key distinctions and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense section 3.2 **A: Proof** (content reference **A1**) of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. They cover the structure of proof, deduction, exhaustion, disproof by counter-example and proof by contradiction. 7357 is a linear A-level with no AS/A split. Proof is listed in the Paper 1 content, and Papers 2 and 3 can assess any Paper 1 content.

For full explanations and longer worked proofs, use the [Proof study guide](/resources/aqa-a-level-mathematics-proof/). Test yourself with the [Proof practice questions](/resources/aqa-a-level-mathematics-proof-practice/). Course links: [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/) and [printable checklist](/checklists/aqa/a-level/mathematics/).

## Definitions

- **Proof:** a chain of logical steps from given assumptions to a conclusion, valid for every case covered by the statement.
- **Proof by deduction:** argue directly from known facts.
- **Proof by exhaustion:** split all possibilities into a finite set of cases; prove each one.
- **Counter-example:** one case that meets the conditions of a statement but where the conclusion fails. One is enough to disprove.
- **Proof by contradiction:** assume the statement is false, reason to something impossible, conclude the statement is true.
- **Rational number:** can be written a/b with a ∈ ℤ, b ∈ ℤ⁺. **Irrational:** cannot.

## Notation (Appendix A of the specification)

| Symbol | Meaning | Example |
|---|---|---|
| ⇒ | implies | x = 4 ⇒ x² = 16 |
| ⇐ | is implied by | x² = 16 ⇐ x = −4 |
| ⇔ | is equivalent to | 2x + 1 = 7 ⇔ x = 3 |
| ∴ | therefore | |
| ∵ | because | |
| ℕ | 1, 2, 3, … | |
| ℤ | 0, ±1, ±2, … | |
| ℤ⁺ | 1, 2, 3, … | |
| ℚ | {p/q : p ∈ ℤ, q ∈ ℤ⁺} | |
| ℝ | real numbers | |

## Algebraic forms to write down first

| You need | Write | Condition |
|---|---|---|
| any even number | 2n | n ∈ ℤ |
| any odd number | 2n + 1 | n ∈ ℤ |
| two different odd numbers | 2m + 1, 2n + 1 | m, n ∈ ℤ |
| consecutive integers | n, n + 1, n + 2 | n ∈ ℤ |
| consecutive even / odd | 2n, 2n + 2 / 2n + 1, 2n + 3 | n ∈ ℤ |
| multiple of k | kn | n ∈ ℤ |
| remainder r on division by k | kn + r | 0 ≤ r < k |
| a rational number in lowest terms | a/b | a ∈ ℤ, b ∈ ℤ⁺, no common factor |

## Method in steps

### Deduction

```
1. State what each letter stands for (n ∈ ℤ).
2. Write the expression in general form.
3. Expand and simplify.
4. Factorise into the required form, e.g. 2(...), 3(...), (...)² + c.
5. Say why the bracket is an integer / why the square is ≥ 0.
6. Restate the claim as the conclusion.
```

**Reminder:** the product of two odd numbers is odd.

```
(2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1
2mn + m + n ∈ ℤ, so the product is odd.
```

**Inequalities "for all real x":** complete the square, then use (…)² ≥ 0.

### Exhaustion

```
1. Choose cases that cover everything (even/odd; 3k, 3k+1, 3k+2; or a finite list).
2. Say why the cases cover everything.
3. Prove the statement in each case separately.
4. Conclude: "the statement holds in every case, so it is true."
```

**Reminder:** every prime greater than 3 is of the form 6k + 1 or 6k + 5.

```
Every integer is 6k, 6k+1, 6k+2, 6k+3, 6k+4 or 6k+5 (k ∈ ℤ).
6k, 6k+2, 6k+4 = 2(3k), 2(3k+1), 2(3k+2): even, so not prime if > 2.
6k+3 = 3(2k+1): a multiple of 3, so not prime if > 3.
So a prime greater than 3 must be 6k+1 or 6k+5.
```

The converse is false: 25 = 6 × 4 + 1 is of the form 6k + 1 but is not prime.

**Testing for primes:** to show N is prime, check the primes up to √N. If none divides N, N is prime.

### Disproof by counter-example

```
1. Pick a value that satisfies the conditions.
2. Substitute and show the working.
3. Show the conclusion fails.
4. State: "so the statement is false."
```

### Contradiction

```
1. "Assume, for contradiction, that ..." (write the exact negation).
2. Reason logically from the assumption.
3. Identify the contradiction in words.
4. "So the assumption is false, and ... is true."
```

**Reminder:** there is no largest even integer. Assume N is the largest even integer. Then N + 2 is even and N + 2 > N. Contradiction, so there is no largest even integer.

## The two named proofs

The specification names both. Know them as outlines and be able to write them in full.

**√2 is irrational**

```
Assume √2 = a/b, a ∈ ℤ, b ∈ ℤ⁺, lowest terms.
a² = 2b²  ⇒  a² even  ⇒  a even, a = 2c.
4c² = 2b² ⇒  b² = 2c²  ⇒  b even.
a, b both even: contradicts lowest terms.  ∴ √2 is irrational.
```

You must justify "a² even ⇒ a even": if a were odd, a = 2k + 1 and a² = 2(2k² + 2k) + 1 would be odd.

**Infinitely many primes**

```
Assume finitely many primes: p₁, p₂, …, pₙ (all of them).
N = p₁p₂…pₙ + 1.
Each pᵢ leaves remainder 1 when dividing N, so no pᵢ divides N.
N > 1, so N has a prime factor, and it is not on the list.
Contradiction.  ∴ infinitely many primes.
```

N itself need not be prime. The argument only needs a prime factor of N that is missing from the list.

## Choosing a method

| Wording in the question | Method to try first |
|---|---|
| "Prove that … for all integers n" with a clear algebraic form | Deduction |
| "for all real x", an inequality | Deduction: complete the square |
| the result depends on even/odd or on a remainder | Exhaustion by cases |
| "for n = 1, 2, …, 6" or a small finite set | Exhaustion: check every member |
| "Show that this statement is false" / "disprove" | Counter-example |
| "is irrational", "there is no", "infinitely many" | Contradiction |

If the question names the method ("prove by contradiction"), you must use that method to earn the marks.

## Must-know distinctions

- **Example vs proof.** Examples that work never prove a "for all" statement. One example that fails disproves it.
- **Counter-example vs contradiction.** A counter-example shows a statement is **false**. Contradiction shows a statement is **true**.
- **Exhaustion vs checking some cases.** Exhaustion is a proof only when the cases cover every possibility.
- **⇒ vs ⇔.** x = 4 ⇒ x² = 16, but x² = 16 does not imply x = 4, since x = −4 also works. Use ⇔ only when both directions hold.
- **A statement vs its converse.** "If p then q" can be true while "if q then p" is false.
- **ℕ vs ℤ.** In the specification ℕ starts at 1; ℤ includes 0 and negatives. A proof for n ∈ ℤ must work for negative n too.

## Quick self-test

1. Write general algebraic forms for three consecutive integers and for two different odd numbers.
2. Prove that the sum of any three consecutive integers is a multiple of 3.
3. Find a counter-example to "n² − n + 11 is prime for every positive integer n".
4. Find a counter-example to "if a² = b² then a = b".
5. Prove that 221 is not prime.
6. Prove that the product of an odd number and an even number is even.
7. List the cases you would use to prove a result about n by considering remainders on division by 4.
8. Write the first line of a proof by contradiction that √5 is irrational.
9. Write the negation of "there are no integers x and y with 6x + 9y = 1".
10. The statement "x > 1 ⇒ x² > 1" is true. Is its converse true? Justify your answer.

### Answers

1. n, n + 1, n + 2; 2m + 1 and 2n + 1 (m, n ∈ ℤ).
2. n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1). n + 1 ∈ ℤ, so the sum is a multiple of 3.
3. n = 11: 121 − 11 + 11 = 121 = 11², not prime. (n = 1 to 10 give primes, so 11 is the first failure.)
4. a = 2, b = −2: a² = b² = 4, but a ≠ b.
5. √221 ≈ 14.9, so test primes up to 13: 221 = 13 × 17. It has a factor other than 1 and itself, so it is not prime.
6. (2m + 1)(2n) = 2n(2m + 1), and n(2m + 1) ∈ ℤ, so the product is even.
7. n = 4k, 4k + 1, 4k + 2, 4k + 3 (k ∈ ℤ).
8. "Assume, for contradiction, that √5 is rational, so √5 = a/b with a ∈ ℤ, b ∈ ℤ⁺ and a/b in lowest terms."
9. "There exist integers x and y with 6x + 9y = 1." (A proof would then note 6x + 9y = 3(2x + 3y) is a multiple of 3, but 1 is not.)
10. No. x = −2: x² = 4 > 1, but x is not greater than 1.

## Where marks are usually lost

- Testing a few values and calling it a proof. Only a complete set of cases counts.
- Using the same letter for two numbers that are meant to be independent.
- Not saying why the bracket is an integer, so "2(…)" does not yet prove "even".
- Missing the final sentence that restates what has been proved.
- In exhaustion, leaving out a case or not saying why the cases cover all integers.
- Giving a counter-example without the substituted working, or without checking it meets the conditions.
- In the √2 proof, leaving "lowest terms" out of the assumption, so there is nothing to contradict.
- In the primes proof, claiming that p₁p₂…pₙ + 1 must be prime.
- Not stating clearly what the contradiction is.
- Using ⇔ where only ⇒ holds.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018 (A-level exams June 2018 onwards), published by AQA. Section 3.2 A: Proof, content reference A1.
