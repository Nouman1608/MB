---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Proof by contradiction (P4.1) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on proof by contradiction for Edexcel IAL Maths Unit P4: negations, the √2 and infinity of primes proofs, unfamiliar proofs and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 1 of Unit P4 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "proof by contradiction", "including proof of the irrationality of √2 and the infinity of primes, and application to unfamiliar proofs". For full worked examples, use the [P4 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p4-proof/), then try the [P4 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-proof-practice/).

## The method in four lines

1. Assume the statement is false.
2. Argue correctly from that assumption.
3. Reach something impossible.
4. Conclude the assumption is false, so the statement is true.

## Negations to learn

| Statement | Negation (your opening assumption) |
|---|---|
| x is irrational | x = a/b, integers, b ≠ 0, no common factor |
| There are infinitely many ... | There are finitely many ... |
| There is no largest / smallest ... | There is a largest / smallest one, call it N |
| There are no integers with property P | There are integers with property P |
| For every x, P(x) | For some x, P(x) is false |
| If A, then B | A is true and B is false |

## The two named proofs: skeletons

**√2 is irrational.**

1. Assume √2 = a/b in lowest terms.
2. 2b² = a², so a² is even, so a is even: a = 2c.
3. 4c² = 2b², so b² = 2c², so b² is even and b is even.
4. a and b share the factor 2: contradiction.

**There are infinitely many primes.**

1. Assume the only primes are p₁, ..., pₙ.
2. N = p₁p₂...pₙ + 1 leaves remainder 1 when divided by each pᵢ.
3. N > 1 has a prime factor, which is not in the list.
4. Contradiction: the list was meant to contain every prime.

N need not itself be prime: 2 × 3 × 5 × 7 × 11 × 13 + 1 = 30031 = 59 × 509.

## Supporting facts you may need to prove on the way

- If n² is even, then n is even (assume n odd: n² = 2(2k² + 2k) + 1 is odd).
- If n² is a multiple of 3, then n is a multiple of 3 (cases n = 3k + 1, 3k + 2 give remainder 1).
- Rational + irrational is irrational; non-zero rational × irrational is irrational.
- An even number cannot equal an odd number.
- A real square is never negative.

## Sources of contradiction in unfamiliar proofs

| Type | Example |
|---|---|
| Parity | 2ᵖ = 3^q cannot hold for positive integers: even ≠ odd |
| Common factor | a and b both even, but assumed in lowest terms |
| Size or order | r/2 is a smaller positive rational than the "smallest" r |
| Sign | (x² − 1)² < 0 is impossible for real x |
| Integer arithmetic | 2(m − n) = 1 has no integer solutions |
| Angles or geometry | Two obtuse angles already add to more than 180° |

## Key terms

| Term | Meaning |
|---|---|
| Contradiction | A statement that is impossible, or inconsistent with what has been assumed or known |
| Negation | The statement "not S" |
| Rational number | One that can be written a/b, a and b integers, b ≠ 0 |
| Irrational number | A real number that is not rational |
| Lowest terms | a/b where a and b have no common factor other than 1 |
| Prime | An integer greater than 1 whose only positive factors are 1 and itself |

## Exam traps

- Starting "Assume √5 is irrational": that is the statement, not its negation.
- Omitting "in lowest terms" (or "no common factor").
- Saying "a² is even so a is even" in an odd-base proof such as √3, where the fact needed is about multiples of 3.
- Claiming that p₁p₂...pₙ + 1 must be prime.
- Ending at the contradiction without the concluding sentence.
- Negating "for all x" as "for no x".

## Self-test

**1.** Write the negation of "there is no integer n with n² = 2".

**2.** Write the negation of "every prime greater than 2 is odd".

**3.** Write the opening assumption for proving that √11 is irrational.

**4.** Why must a/b be in lowest terms in an irrationality proof?

**5.** Prove by contradiction that there is no largest integer.

**6.** In the √2 proof, which fact justifies "a² is even, so a is even"?

**7.** In the infinity of primes proof, is N = p₁p₂...pₙ + 1 claimed to be prime?

**8.** Prove that if x² is irrational, then x is irrational.

**9.** What is the contradiction in a proof that log₂ 3 is irrational?

**10.** Write the opening assumption for "if n² is odd, then n is odd".

**11.** Write the opening assumption for "there is no greatest multiple of 5".

### Answers

**1.** There is an integer n with n² = 2.

**2.** There is a prime greater than 2 that is even.

**3.** √11 = a/b, where a and b are integers with no common factor and b ≠ 0.

**4.** The contradiction comes from showing a and b share a factor; without the lowest-terms assumption, sharing a factor is not impossible.

**5.** Assume N is the largest integer. N + 1 is an integer and N + 1 > N, contradicting N being the largest.

**6.** If n² is even then n is even (proved by assuming n is odd).

**7.** No. It is claimed only that N has a prime factor not in the list.

**8.** Assume x² is irrational and x is rational, x = a/b. Then x² = a²/b², which is rational: a contradiction.

**9.** 2ᵖ = 3^q with p, q positive integers: the left side is even and the right side is odd.

**10.** n² is odd and n is even.

**11.** Assume there is a greatest multiple of 5, say 5k. (The contradiction then follows because 5(k + 1) is a larger multiple of 5.)

## Related resources

- [P4 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p4-proof/)
- [P4 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-proof-practice/)
- [Proof by contradiction, partial fractions and binomial series revision notes](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the-revision-notes/)
- [P2 proof revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-proof-revision-notes/)
