---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Proof (P2.1) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-proof-edexcel-alevel-maths"
description: "Condensed notes on proof structure, proof by exhaustion and disproof by counter-example for Edexcel IAL Maths Unit P2, with key terms, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 1 of Unit P2 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "the structure of mathematical proof, proceeding from given assumptions through a series of logical steps to a conclusion", with **proof by exhaustion** and **disproof by counter example**. For full explanations and worked examples, use the [P2 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p2-proof/), then try the [P2 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-proof-practice/).

## The section in five lines

1. A proof moves from stated assumptions, through justified steps, to a stated conclusion.
2. Proof by exhaustion checks every case in a set of cases that together cover all possibilities.
3. Infinitely many integers can be covered by finitely many classes: parity, remainders, last digits.
4. One counter-example is enough to show a "for all" statement is false.
5. Proof by contradiction is Unit P4 content, not P2.

## Building blocks to recall instantly

- Even: 2k. Odd: 2k + 1. Two *different* integers need two *different* letters.
- Multiple of m: show the expression equals m × (an integer), and say the bracket is an integer.
- Remainders on division by 3: every integer is 3k, 3k + 1 or 3k + 2.
- Remainders on division by 4: 4k, 4k + 1, 4k + 2, 4k + 3.
- Last digit: n = 10k + d with d from 0 to 9; the last digit of n² depends only on d.
- Product of two consecutive integers, n(n + 1), is always even: one of them is even.
- Product of three consecutive integers is always a multiple of 6 (one is even, one is a multiple of 3).

## Proof by exhaustion: the routine

1. **Name the cases** and say why they cover everything ("every integer is even or odd").
2. **Write each case in algebra** (or list each value if the set is finite and small).
3. **Simplify each case** to a form that shows the property.
4. **Conclude**: "Since every case satisfies the statement, it is true for all ...".

**Mini example.** *Prove that the cube of any integer leaves remainder 0, 1 or 2 on division by 3 and that the remainder equals the remainder of the integer itself.* Cases: n = 3k gives n³ = 27k³ = 3(9k³), remainder 0. n = 3k + 1 gives n³ = 27k³ + 27k² + 9k + 1 = 3(9k³ + 9k² + 3k) + 1, remainder 1. n = 3k + 2 gives n³ = 27k³ + 54k² + 36k + 8 = 3(9k³ + 18k² + 12k + 2) + 2, remainder 2. In every case n³ and n leave the same remainder, so n³ − n is always divisible by 3.

## Disproof by counter-example: the routine

1. Pick a value that **meets the condition** of the claim.
2. **Show** that it fails the conclusion, with the arithmetic visible.
3. **State** that the claim is false.

Good places to look: 0, 1, negative numbers, fractions between 0 and 1, and the first value outside a pattern. For example, "x³ > x for all x > 0" fails at x = ½, since ⅛ < ½.

## Key terms

| Term | Meaning |
|---|---|
| Assumption | What the proof starts from: the given facts or the general form of the objects |
| Conclusion | The statement being proved, restated at the end |
| Proof by exhaustion | Dividing all possibilities into a finite set of cases and proving each one |
| Counter-example | One specific case that satisfies the condition of a claim but not its conclusion |
| Disproof | Showing a statement is false, usually by a counter-example |
| ⇒ | "implies": the left-hand statement leads to the right-hand one |
| ⇔ | "if and only if": each statement implies the other |
| Parity | Whether an integer is even or odd |
| Exhaustive case list | A set of cases that between them include every possibility |

## Exam traps

- **Examples are not a proof.** Five numerical checks of "for all n" earn no proof marks unless the question limits n to those five values.
- **Same letter for two numbers.** (2n + 1) + (2n + 1) covers only pairs of equal odd numbers.
- **Missing the remainder 2 case.** With division by 3 there are three classes, not two.
- **A counter-example that ignores the condition.** For "if n is odd then n² + 1 is a multiple of 4", testing n = 2 is irrelevant; test an odd n (n = 1 gives 2, which is not a multiple of 4).
- **No final sentence.** The conclusion mark depends on stating what has been proved.
- **Wrong arrow.** x² = 16 does not imply x = 4.
- **Unjustified factor.** Write "which is even because k² + k is an integer", not just "which is even".

## Self-test

**1.** Write the general form of three consecutive odd integers.

**2.** Give a counter-example to "every number of the form 6n + 1 is prime".

**3.** How many cases are needed to prove a result about all integers by considering remainders on division by 4?

**4.** Show that the sum of two consecutive integers is odd.

**5.** Disprove: "for all real x, (x + 1)² ≥ x²".

**6.** Explain why 4k² + 4k + 1 is odd for every integer k.

**7.** Prove by exhaustion that 2ⁿ + 1 is a multiple of 3 for n = 1, 3, 5.

**8.** Which part of a proof does the sentence "every integer is either even or odd" belong to?

**9.** A student proves "n² − n is even" only for n = 2, 3 and 4. What is missing?

**10.** Disprove: "if a and b are irrational, then ab is irrational".

**11.** Prove that the square of any odd integer is one more than a multiple of 8.

### Answers

**1.** 2k + 1, 2k + 3, 2k + 5 for an integer k.

**2.** n = 4 gives 25 = 5 × 5, which is not prime. (n = 6 gives 37, prime, so choose carefully.)

**3.** Four: 4k, 4k + 1, 4k + 2, 4k + 3.

**4.** n + (n + 1) = 2n + 1, which is odd because n is an integer.

**5.** x = −1: (x + 1)² = 0 but x² = 1, so 0 ≥ 1 is false.

**6.** 4k² + 4k + 1 = 2(2k² + 2k) + 1, and 2k² + 2k is an integer, so it is one more than an even number.

**7.** n = 1: 3 = 3 × 1. n = 3: 9 = 3 × 3. n = 5: 33 = 3 × 11. All three cases are multiples of 3, so the result holds for the stated values.

**8.** It justifies that the case list is complete, so it belongs to the setting-up of a proof by exhaustion.

**9.** A general argument: for example n² − n = n(n − 1), a product of consecutive integers, so it is even for every integer n.

**10.** a = b = √2: ab = 2, which is rational.

**11.** (2k + 1)² = 4k² + 4k + 1 = 4k(k + 1) + 1. Since k(k + 1) is a product of consecutive integers it is even, say 2m, so the square is 8m + 1.

## More resources on this topic

- [P2 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p2-proof/)
- [P2 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-proof-practice/)
- [Unit P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/)
- [Proof, the factor and remainder theorems and circles revision notes](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the-revision-notes/)
