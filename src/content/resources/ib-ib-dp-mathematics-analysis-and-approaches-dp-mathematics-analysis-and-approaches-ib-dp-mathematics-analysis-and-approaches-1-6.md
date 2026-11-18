---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Simple deductive proof"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.06
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-6"
description: "IB DP Maths AA section 1.6 study guide: numerical and algebraic deductive proof, LHS to RHS layout, = versus ≡, and proofs about integers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.6, simple deductive proof**, in IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is common content, so it is examined at SL and HL. The section asks for simple deductive proofs, both numerical and algebraic, set out from the left-hand side to the right-hand side (LHS to RHS), and for correct use of the symbols for equality and identity.

Proof is a theme of the whole AA course, not a one-off topic. "Show that" parts appear across every strand, and at HL the methods widen to induction, contradiction and counterexample in section 1.15 (see the [section 1.15 proof study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15/)). The unit overview is in the [exponents, logarithms, binomial theorem and proof study guide](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof/).

## What "deductive" means

A deductive proof starts from facts that are already accepted (definitions, algebraic rules, known results) and moves through steps that each follow from the one before, until it reaches the statement to be proved. Because every step is forced, the conclusion is certain.

Checking examples is not the same thing. Testing n = 1, 2, 3 and 4 can make a statement look true, but it cannot rule out a value you did not try. Examples are useful for two jobs only: spotting a pattern before you prove it, and checking a result after you prove it.

## Equality and identity

- **=** joins two expressions that are equal for the values under discussion. 3x + 1 = 7 is an equation: it is true only when x = 2.
- **≡** joins two expressions that are equal for **every** permitted value of the variable. (x + 3)² ≡ x² + 6x + 9 is an identity.

Many "show that" questions print an identity. Inside your working, each line is linked to the next by "=", because each line equals the one before it. Use ≡ when you state the identity itself, and state any excluded values: x/(x − 1) is not defined at x = 1, so an identity involving it holds only for x ≠ 1.

## Laying out an LHS to RHS proof

1. Write "LHS =" and copy the left-hand side exactly.
2. Transform it with one valid step per line: expanding, factorising, using a common denominator, applying an exponent law.
3. Stop when the expression is identical to the right-hand side, and write "= RHS".

Start from the more complicated side; there is more to simplify, so the steps are natural. If both sides are complicated, you may simplify each side separately to the same expression, labelling them "LHS = …" and "RHS = …" and finishing "so LHS = RHS". That is still deductive, because neither side assumed the other.

**What not to do.** Never write the statement you are proving at the top and then do the same thing to both sides until you get something true, such as 0 = 0. That assumes the result. It can also "prove" false statements: from −3 = 3, squaring both sides gives 9 = 9, which is true, yet −3 = 3 is false.

## Writing integers algebraically

Numerical proofs about integers depend on choosing the right algebraic form.

| Description | Algebraic form (n, m ∈ ℤ) |
|---|---|
| Any even number | 2n |
| Any odd number | 2n + 1 |
| Three consecutive integers | n, n + 1, n + 2 |
| Two consecutive even numbers | 2n, 2n + 2 |
| Two consecutive odd numbers | 2n + 1, 2n + 3 |
| A multiple of 5 | 5m |
| Two odd numbers that need not be related | 2m + 1 and 2n + 1 |

The last row matters. If two odd numbers are independent, use **different** letters. Writing both as 2n + 1 forces them to be the same number, so the proof covers only one special case.

To show a number is a multiple of k, write it as k × (an integer). To show it is odd, write it as 2 × (an integer) + 1.

## Worked example 1: from numerical to algebraic

**(a)** Show that 1 × 2 × 3 × 4 + 1 and 2 × 3 × 4 × 5 + 1 are both perfect squares.

```
1 × 2 × 3 × 4 + 1 = 24 + 1 = 25 = 5²
2 × 3 × 4 × 5 + 1 = 120 + 1 = 121 = 11²
```

**(b)** Prove that n(n + 1)(n + 2)(n + 3) + 1 ≡ (n² + 3n + 1)².

```
LHS = [n(n + 3)][(n + 1)(n + 2)] + 1        (pair outer and inner factors)
    = (n² + 3n)(n² + 3n + 2) + 1
    Let u = n² + 3n:
    = u(u + 2) + 1
    = u² + 2u + 1
    = (u + 1)²
    = (n² + 3n + 1)² = RHS
```

**(c)** Check: with n = 2, (4 + 6 + 1)² = 11² = 121, which matches part (a).

*Annotation.* Part (a) is numerical, part (b) is the general algebraic proof, and part (c) checks the identity against the numbers. Pairing n with n + 3 and n + 1 with n + 2 makes the same quadratic n² + 3n appear twice; spotting a repeated expression and naming it is a standard simplifying move.

## Worked example 2: a statement about odd numbers

Prove that the difference between the squares of two consecutive odd numbers is a multiple of 8.

```
Let the numbers be 2n + 1 and 2n + 3, where n ∈ ℤ.
(2n + 3)² − (2n + 1)² = (4n² + 12n + 9) − (4n² + 4n + 1)
                      = 8n + 8
                      = 8(n + 1)
n + 1 is an integer, so the difference is a multiple of 8.
```

*Annotation.* The final sentence earns the reasoning: 8(n + 1) is only a multiple of 8 because n + 1 is an integer. Check with 7 and 9: 81 − 49 = 32 = 8 × 4.

## Worked example 3: an algebraic identity with fractions

Show that x/(x − 1) − x/(x + 1) ≡ 2x/(x² − 1), for x ≠ ±1.

```
LHS = x(x + 1)/((x − 1)(x + 1)) − x(x − 1)/((x − 1)(x + 1))
    = (x² + x − x² + x)/((x − 1)(x + 1))
    = 2x/(x² − 1) = RHS
```

Check with x = 2: LHS = 2 − 2/3 = 4/3 and RHS = 4/3. The restriction x ≠ ±1 is needed because both sides are undefined there.

## Common mistakes

- Starting from the printed result and working on both sides at once.
- Using one letter for two unrelated numbers, which proves only a special case.
- Ending at 8n + 8 without factorising and saying why it is a multiple of 8.
- Dropping brackets when subtracting: −(4n² + 4n + 1) changes **every** sign.
- Treating a few numerical examples as a proof of a general statement.
- Writing ≡ between lines of a calculation, or using = for a stated identity and losing the meaning "for all values".
- Skipping steps in a "show that". The answer is printed, so the marks are for the working that reaches it.

## Exam technique: the command words

- **Show that**: reach the printed result with every step visible. A line that jumps straight to the answer earns nothing, because the answer was given.
- **Prove**: give a sequence of logical steps in a formal way, including a concluding statement.
- **Verify**: substitute values and confirm that the result holds. Verifying is not proving, so do not substitute numbers when a question asks you to show or prove something in general.
- **Hence**: use the result just proved. If part (b) proves an identity, part (c) usually wants it applied, as in Worked example 1.

On Paper 1 (no technology) these proofs are pure algebra. On Paper 2 they still require algebra: a GDC can check a numerical case but cannot prove a general statement.

## Where next

Revise the layouts and integer forms with the [section 1.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-6-revision-notes/), then write full proofs in the [section 1.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-6-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.6.
