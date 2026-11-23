---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Proof (P2.1)"
resourceType: "study-guides"
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
description: "How to structure a proof, choose a complete set of cases for proof by exhaustion and disprove a claim by counter-example in Edexcel IAL Maths Unit P2."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1 of Unit P2 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). The specification asks students to "understand and use the structure of mathematical proof, proceeding from given assumptions through a series of logical steps to a conclusion", using two named methods: **proof by exhaustion** and **disproof by counter example**.

The [Unit P2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) places proof within the whole unit, and the [guide to proof, the factor theorem and circles](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the/) works through consecutive-integer and remainder proofs. This page goes further on the one skill both methods depend on: building an argument an examiner can follow line by line, with a case list that is provably complete. When you have read it, test yourself with the [P2 proof revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-proof-edexcel-alevel-maths-revision-notes/) and the [P2 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-proof-edexcel-alevel-maths-practice/).

## What the specification asks for

The content statements are short:

- **1.1** the structure of mathematical proof: assumptions, logical steps, conclusion
- **1.2** proof by exhaustion, which "involves trying all the options"
- **1.3** disproof by counter example

Proof by contradiction is not in this unit. It appears in Unit P4, and the [P4 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p4-proof-edexcel-alevel-maths/) covers it. Unit P1 content (indices, surds, quadratics, inequalities) can be used inside a P2 proof, because the specification says P1 knowledge "is assumed and may be tested".

## The structure of a proof

Every proof, whatever the method, has three visible parts.

1. **What you are given or assuming.** State it in algebra. "Let n be an integer" or "Let the two odd numbers be 2a + 1 and 2b + 1, where a and b are integers."
2. **A chain of steps.** Each line must follow from the one before by a rule the reader recognises: expanding, factorising, substituting, or a known fact such as "the sum of two even numbers is even".
3. **A conclusion that answers the question.** Repeat the statement you were asked to prove, in words, and say why your last line establishes it.

### Writing integers in algebra

Most P2 proofs are about integers, so choose a form that carries the property you need:

| Property | Algebraic form (k an integer) |
|---|---|
| even | 2k |
| odd | 2k + 1 |
| multiple of 3 | 3k |
| remainder 1 or 2 on division by 3 | 3k + 1, 3k + 2 |
| three consecutive integers | n, n + 1, n + 2 |
| last digit d | 10k + d |

To show a number is a multiple of m, factorise out m and say that the bracket is an integer: 6k² + 4k = 2(3k² + 2k), and 3k² + 2k is an integer, so the expression is even.

### Logical notation

The notation appendix of the specification uses ⇒ ("implies"), ⇐ ("is implied by") and ⇔ ("implies and is implied by"). Use ⇒ only when the next line really follows. A frequent slip is writing ⇔ between lines where the reverse step fails, for example x = 3 ⇒ x² = 9 is true, but x² = 9 ⇒ x = 3 is false because x could be −3.

## Proof by exhaustion

Proof by exhaustion splits every possibility into a finite number of cases and checks each one. The cases can be:

- **a finite list of values**, such as every prime between 3 and 30
- **classes that cover all integers**, such as even and odd, or the remainders 0, 1, 2 on division by 3, or the ten possible last digits

The second kind is what turns exhaustion into a proof about infinitely many numbers: every integer falls into exactly one class, so checking each class checks every integer.

### Worked example 1: the last digit of a square

**Prove that the last digit of a square number is never 2, 3, 7 or 8.**

Every integer n can be written as n = 10k + d, where k is an integer and d is its last digit, d ∈ {0, 1, 2, ..., 9}. Then

n² = 100k² + 20kd + d² = 10(10k² + 2kd) + d²

so the last digit of n² is the last digit of d². Checking all ten cases:

| d | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| d² | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 |
| last digit | 0 | 1 | 4 | 9 | 6 | 5 | 6 | 9 | 4 | 1 |

The possible last digits are 0, 1, 4, 5, 6 and 9 only. Since every integer has one of the ten last digits checked, no square ends in 2, 3, 7 or 8.

**Why it earns full credit:** the algebra justifies reducing infinitely many integers to ten cases; the table shows every case; the last sentence ties the cases back to the claim.

### Worked example 2: cases by parity

**Prove that n² + 3n + 1 is odd for every integer n.**

*Case 1: n is even.* Let n = 2k. Then n² + 3n + 1 = 4k² + 6k + 1 = 2(2k² + 3k) + 1, which is odd because 2k² + 3k is an integer.

*Case 2: n is odd.* Let n = 2k + 1. Then

n² + 3n + 1 = (4k² + 4k + 1) + (6k + 3) + 1 = 4k² + 10k + 5 = 2(2k² + 5k + 2) + 1

which is odd.

Every integer is even or odd, so n² + 3n + 1 is odd for every integer n.

A shorter route exists: n² + 3n = n(n + 3), and one of n and n + 3 is even, so n(n + 3) is even and adding 1 makes it odd. That argument still relies on cases (n even or n odd) to justify "one of them is even", so say so.

## Disproof by counter-example

A statement of the form "for all x, P(x)" is false if a single value of x makes P(x) false. To disprove it you must:

1. give one specific value
2. show the calculation for that value
3. state clearly that the statement is therefore false

### Worked example 3: two claims to disprove

**(a) "For every prime p, 2ᵖ − 1 is prime."** Small primes appear to work: 2² − 1 = 3, 2³ − 1 = 7, 2⁵ − 1 = 31, 2⁷ − 1 = 127. Take p = 11: 2¹¹ − 1 = 2047 = 23 × 89, which is not prime. So the statement is false.

This example shows why checking several cases that work never proves a statement about all primes: the first failure here is at the fifth prime.

**(b) "If x > y, then x² > y²."** Take x = 1 and y = −2. Then x > y, but x² = 1 and y² = 4, so x² < y². The statement is false.

Notice that a counter-example must satisfy the condition (here, x > y) and fail the conclusion. Choosing x = −2, y = 1 shows nothing, because the condition x > y is not met.

Some questions then ask you to amend the claim. The statement in (b) becomes true for x > y > 0: x² − y² = (x − y)(x + y), and both brackets are positive.

## Common mistakes

- **Using one letter for two different numbers.** Writing two odd numbers as 2n + 1 and 2n + 1 proves only that an odd number plus itself is even.
- **Checking examples instead of proving.** Testing n = 1, 2, 3, 4 is evidence, not proof, unless the question restricts n to exactly those values.
- **An incomplete case list.** Treating "n is a multiple of 3" and "n is not a multiple of 3" as one case each is fine; listing only 3k and 3k + 1 misses 3k + 2.
- **No concluding statement.** The final line must state the result. Examiners expect a conclusion such as "so n² + 3n + 1 is odd for all integers n".
- **A counter-example that does not satisfy the hypothesis**, as in Worked example 3(b).
- **Leaving a factor unexplained.** "2(2k² + 5k + 2) + 1 is odd" needs the words "because 2k² + 5k + 2 is an integer".

## Exam technique

- **"Prove that"** requires a general argument or a complete exhaustion, ending with a conclusion. Numerical checks alone score little.
- **"Prove by exhaustion"** tells you the method. Show the full case list, say why it is complete, and present each case on its own line or in a table.
- **"Show that ... is false"** or **"disprove"** needs one counter-example with its working shown and a sentence stating the claim is false.
- **"Hence"** means use the result just proved. If part (a) shows n² + 3n + 1 is odd, a part (b) about n² + 3n + 2 can follow in one line: it is one more than an odd number, so it is even.
- Proof questions in this unit are often worth only a few marks, so an answer of six or seven lines is usual. Write sentences between the algebra; the words carry the logic.

## Related resources

- [P2 proof revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-proof-edexcel-alevel-maths-revision-notes/)
- [P2 proof practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-proof-edexcel-alevel-maths-practice/)
- [Proof, the factor and remainder theorems and circles](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the/)
- [Proof by contradiction in Unit P4](/resources/edexcel-a-level-mathematics-yma01-p4-proof-edexcel-alevel-maths/)
- [Unit P2: Pure Mathematics 2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/)
