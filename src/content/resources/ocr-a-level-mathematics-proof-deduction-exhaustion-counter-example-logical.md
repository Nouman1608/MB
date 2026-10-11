---
title: "OCR A Level Mathematics A: Proof: deduction, exhaustion, counter-example, logical connectives and contradiction (H240)"
seoTitle: "OCR A Level Maths Proof Study Guide (H240)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Proof: deduction, exhaustion, counter-example, logical connectives and contradiction"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 103
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "proof-ocr-alevel-maths"
description: "Study guide to OCR A Level Mathematics A proof: deduction, exhaustion, logical connectives, counter-examples and contradiction, with worked proofs."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide teaches section 1.01 Proof of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. It covers 1.01a to 1.01d. The specification splits the content in two stages: 1.01a, 1.01b and 1.01c are Stage 1, shared with the AS qualification, and 1.01d proof by contradiction is **A Level only**. Pure Mathematics content is assessed in all three components, so proof can turn up on any paper.

Use this guide with the [revision notes](/resources/ocr-a-level-mathematics-proof-deduction-exhaustion-counter-example-logical-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-proof-deduction-exhaustion-counter-example-logical-practice/). For the wider course, see the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/). The existing [pure mathematics guide](/resources/ocr-a-level-mathematics-pure-mathematics/) places this section in the whole course.

## What this section covers

| Reference | Skill | Stage |
|---|---|---|
| 1.01a | Use the structure of a proof: given assumptions, logical steps, conclusion. Use proof by deduction and proof by exhaustion | Stage 1 (AS) |
| 1.01b | Use the logical connectives ⇒, ⇐ and ⇔. Know the language "congruence", "if ... then" and "if and only if" (iff) | Stage 1 (AS) |
| 1.01c | Disprove a statement by counter-example | Stage 1 (AS) |
| 1.01d | Use proof by contradiction. Understand proofs that √2 is irrational and that there are infinitely many primes | A Level only |

The specification also expects you to use the words integer, real, rational and irrational. Proof questions are set on content you should already know, from GCSE and AS or A Level work. The command word "Prove" is described in the specification as a formal mathematical argument with variables clearly defined, correct algebraic manipulation and a concise conclusion. Write all three.

## 1.01a Structure of a proof

A proof has three parts.

1. **Assumptions.** Define your letters and say what they stand for.
2. **Logical steps.** Each line follows from the line before or from a fact you may quote.
3. **Conclusion.** A final sentence that says what has been shown, in the words of the question.

Testing values is not a proof. If a result works for the ten cases you try, you have evidence only. A proof covers every case at once.

### General forms

| Idea | Algebra |
|---|---|
| Even integer | 2n |
| Odd integer | 2n + 1 |
| Two integers that may differ | m and n (separate letters) |
| Three integers in a row | n, n + 1, n + 2 |
| Multiple of 3 | 3n |
| Rational number | a/b with a, b integers and b ≠ 0 |

Use a new letter for each unrelated integer. Writing two odd numbers as 2n + 1 and 2n + 1 forces them to be equal.

### Proof by deduction

Start from known facts and work forwards to the result. In algebra, expand, then factorise or complete the square to show the required form.

**Worked example 1.** Prove that the product of any two consecutive odd integers is one less than a multiple of 4.

Let the integers be 2n + 1 and 2n + 3, where n is an integer.

```
(2n + 1)(2n + 3) = 4n² + 8n + 3
                 = 4(n² + 2n + 1) − 1
                 = 4(n + 1)² − 1
```

(n + 1)² is an integer, so 4(n + 1)² is a multiple of 4. Hence the product of two consecutive odd integers is always one less than a multiple of 4.

**Worked example 2.** Prove that x² + y² ≥ 2xy for all real x and y.

```
x² + y² − 2xy = (x − y)²
```

A square of a real number is never negative, so (x − y)² ≥ 0. Therefore x² + y² − 2xy ≥ 0, which gives x² + y² ≥ 2xy. Equality holds only when x = y.

**Worked example 3.** Prove that the sum of two rational numbers is rational.

Let the numbers be a/b and c/d, where a, b, c, d are integers with b ≠ 0 and d ≠ 0.

```
a/b + c/d = (ad + bc)/(bd)
```

ad + bc is an integer, and bd is a non-zero integer because b and d are non-zero. So the sum is a ratio of two integers with a non-zero denominator, which is rational.

### Proof by exhaustion

Split all the possibilities into a **finite** list of cases and prove each one. The cases must cover everything. There are two common types.

- **A short list.** Check each member.
- **Cases by remainder.** Sort integers by their remainder on division by a small number. That turns infinitely many integers into a handful of cases.

**Worked example 4.** Prove that no cube number leaves remainder 2 when divided by 4.

Every integer n has the form 4k, 4k + 1, 4k + 2 or 4k + 3 for some integer k.

```
Case 1: n = 4k      n³ = 64k³ = 4(16k³)
Case 2: n = 4k + 1  n³ = 64k³ + 48k² + 12k + 1 = 4(16k³ + 12k² + 3k) + 1
Case 3: n = 4k + 2  n³ = 64k³ + 96k² + 48k + 8 = 4(16k³ + 24k² + 12k + 2)
Case 4: n = 4k + 3  n³ = 64k³ + 144k² + 108k + 27 = 4(16k³ + 36k² + 27k + 6) + 3
```

The remainders are 0, 1, 0 and 3. These four cases cover all integers, so no cube leaves remainder 2.

**Worked example 5.** Prove that 30 cannot be written as the sum of two squares of positive integers.

If 30 = a² + b² with a and b positive, then each of a² and b² is less than 30. The only squares below 30 are 1, 4, 9, 16 and 25. Subtract each from 30.

```
30 − 1 = 29    30 − 4 = 26    30 − 9 = 21
30 − 16 = 14   30 − 25 = 5
```

None of 29, 26, 21, 14 or 5 is a square. Every case fails, so 30 is not the sum of two positive squares.

## 1.01b Logical connectives

Three symbols connect statements P and Q.

| Symbol | Read as | Meaning |
|---|---|---|
| P ⇒ Q | P implies Q | If P is true then Q is true |
| P ⇐ Q | P is implied by Q | If Q is true then P is true |
| P ⇔ Q | P is equivalent to Q | P ⇒ Q and P ⇐ Q both hold |

"If and only if" (iff) means ⇔. The specification lists the language "congruence", "if ... then" and "if and only if". In this guide, ≡ means an identity: an equation true for every value of the variable, such as (x + 1)² ≡ x² + 2x + 1. An equation such as x² = 4 holds only for some x.

**Converse.** The converse of P ⇒ Q is Q ⇒ P. A statement can be true while its converse is false. For real x, x = 3 ⇒ x² = 9 is true, but x² = 9 ⇒ x = 3 is false, since x = −3 also works.

**Congruence.** The specification's symbol list also reads ≡ as "is congruent to": saying n ≡ 2 on division by 5 means n leaves remainder 2.

**Contrapositive.** "If P then Q" and "If not Q then not P" are equivalent. This is useful for proof: to show that n² even forces n even, show that n odd forces n² odd.

**Worked example 6.** Solve √(x + 2) = x, and say which symbol links each step.

```
√(x + 2) = x   ⇒   x + 2 = x²        (squaring)
               ⇔   x² − x − 2 = 0
               ⇔   (x − 2)(x + 1) = 0
               ⇔   x = 2 or x = −1
```

Squaring is only ⇒, because it can bring in values that make the original false: x = −1 would give √1 = 1, not −1. So check each answer in the original equation. For x = 2: √4 = 2, which works. The only solution is **x = 2**.

**Worked example 7.** Prove that, for integers a and b, ab is odd if and only if both a and b are odd.

"If and only if" needs two directions.

(⇐) Suppose a = 2m + 1 and b = 2k + 1. Then ab = 4mk + 2m + 2k + 1 = 2(2mk + m + k) + 1, which is odd.

(⇒) Use the contrapositive: if a or b is even, then ab is even. If a = 2m, then ab = 2mb, which is even. The case where b is even is the same.

Both directions hold, so ab is odd ⇔ a and b are both odd.

A frequent error is to prove one direction only and write "iff" in the conclusion. Mark each direction clearly.

## 1.01c Disproof by counter-example

To disprove a statement of the form "if P(x) is true then Q(x) is true", find **one** value of x where P(x) is true and Q(x) is false. That single case is enough. Check both halves: show that P holds and that Q fails.

**Worked example 8.** Disprove: "If x² > 25 then x > 5."

Take x = −6. Then x² = 36, which is greater than 25, so P holds. But −6 is not greater than 5, so Q fails. The statement is false.

**Worked example 9.** Disprove: "2n² + 11 is prime for every positive integer n."

The values for n = 1, 2, 3, ..., 10 are 13, 19, 29, 43, 61, 83, 109, 139, 173 and 211, which are all prime. This is why the claim looks plausible. For n = 11:

```
2 × 11² + 11 = 242 + 11 = 253 = 11 × 23
```

253 is not prime, so n = 11 is a counter-example.

Some points to remember:

- Ten successes prove nothing. One failure disproves everything.
- A counter-example must be a case the statement covers. For "n is a positive integer", n = 0.5 is not allowed.
- You need not explain how you found the counter-example. You must show that it works.

## 1.01d Proof by contradiction (A Level only)

Assume the statement is **false**, reason correctly, and reach something impossible. Then the assumption was wrong, so the statement is true. Three rules help.

- Write the assumption as the exact opposite of the claim. The opposite of "√2 is irrational" is "√2 is rational", not "√2 is a whole number".
- Every step after the assumption must be valid. The only thing that can be wrong is the assumption.
- State the contradiction and then the conclusion.

Questions on this are set on content you already know. Be fluent with integers, rational numbers and prime factors.

### Proof that √2 is irrational

Suppose √2 is rational. Then √2 = p/q, where p and q are positive integers with no common factor (the fraction is in its lowest terms).

```
2 = p²/q²     so     p² = 2q²
```

So p² is even. If p were odd, p² would be odd, so p is even. Write p = 2r.

```
(2r)² = 2q²    so    4r² = 2q²    so    q² = 2r²
```

So q² is even, and so q is even. Now p and q are both even, so they share the factor 2. This contradicts the assumption that they have no common factor. Hence √2 is irrational.

### Proof that there are infinitely many primes

Suppose there are only finitely many primes, p₁, p₂, ..., pₖ. Define

```
N = p₁ × p₂ × ... × pₖ + 1
```

Dividing N by any pᵢ leaves remainder 1, so no prime on the list divides N. But N > 1, so N is either prime or has a prime factor. Either way there is a prime that is not on the list. This contradicts the claim that the list contains all primes. Hence there are infinitely many primes.

N need not be prime itself. It only needs a prime factor missing from the list.

**Worked example 10.** Prove that log₂ 3 is irrational.

Suppose log₂ 3 = p/q, where p and q are positive integers. (Both are positive because log₂ 3 > 0.)

```
2^(p/q) = 3    so    2^p = 3^q
```

2^p is even, since p ≥ 1. 3^q is odd, since it is a product of odd numbers. An even number cannot equal an odd number. This is a contradiction, so log₂ 3 is irrational.

## Common errors

- Proving a result for a few numbers and writing "hence proved".
- Using one letter for two different integers.
- Treating ⇒ as ⇔, especially after squaring both sides.
- Giving a counter-example that does not satisfy P, or not showing that Q fails.
- In a contradiction proof, assuming the wrong opposite, or forgetting to state the contradiction.
- Ending without a conclusion in words.

## Next steps

Work through the [revision notes](/resources/ocr-a-level-mathematics-proof-deduction-exhaustion-counter-example-logical-revision-notes/), then the [practice questions](/resources/ocr-a-level-mathematics-proof-deduction-exhaustion-counter-example-logical-practice/). Use the [diagnostics](/diagnostics/) to find the weak areas first.

## Official syllabus

OCR, *A Level in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, section 1.01 Proof (references 1.01a to 1.01d), published by OCR.
