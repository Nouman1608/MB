---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Proof by mathematical induction, contradiction and counterexample (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.15
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-15"
description: "IB DP Maths AA HL section 1.15 study guide: why induction works, sum, divisibility and derivative proofs, proof by contradiction and counterexamples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.15** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): proof by mathematical induction, proof by contradiction, and the use of a counterexample to show that a statement is not always true. It is **HL only**, and it builds on the simple deductive proof of section 1.6 (see the [section 1.6 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-6/)).

The HL unit overview, with its own examples of each method, is the [counting principles, partial fractions, proof and linear systems study guide](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems/). This page explains the logic behind each method, gives fresh examples, and shows exactly where marks are won and lost.

## What section 1.15 asks of you

- Prove statements about positive integers by mathematical induction. Typical contexts are sums of series, divisibility, derivatives, and complex numbers (De Moivre's theorem, section 1.14).
- Prove a statement by contradiction.
- Use a single counterexample to show that a general statement is false.

## Mathematical induction

### Why it works

Let P(n) be a statement about the positive integer n. Suppose you show:

1. P(1) is true, and
2. whenever P(k) is true, P(k + 1) is also true.

Then P(1) is true; so P(2) is true (by step 2 with k = 1); so P(3) is true; and so on, with no positive integer left out. Like a line of dominoes, the first falls and each knocks over the next. Both parts are needed: without the basis, the chain never starts; without the inductive step, it never continues.

### The four-part layout

1. **Basis.** Show P(1) is true by evaluating both sides.
2. **Assumption.** "Assume P(k) is true for some k ∈ ℤ⁺", and write out what that means.
3. **Inductive step.** Using the assumption, show P(k + 1) is true. Write the target statement first so you know where you are heading.
4. **Conclusion.** "P(1) is true, and P(k) true implies P(k + 1) true. Hence, by mathematical induction, P(n) is true for all n ∈ ℤ⁺."

Mark schemes typically award marks for each of the four parts, so the conclusion sentence is worth writing in full.

### Worked example 1: a sum

Prove that Σ (r = 1 to n) r × 2^(r − 1) = (n − 1)2ⁿ + 1 for all n ∈ ℤ⁺.

```
Basis, n = 1:  LHS = 1 × 2⁰ = 1;  RHS = 0 × 2 + 1 = 1.  True.
Assume:        Σ (r = 1 to k) r × 2^(r − 1) = (k − 1)2ᵏ + 1.
Target:        Σ (r = 1 to k+1) r × 2^(r − 1) = k × 2^(k+1) + 1.
Step:          Σ (r = 1 to k+1) = (k − 1)2ᵏ + 1 + (k + 1)2ᵏ     (add the (k + 1)th term)
                                = 2ᵏ(k − 1 + k + 1) + 1
                                = 2k × 2ᵏ + 1 = k × 2^(k+1) + 1
```

This is the target, so P(k + 1) is true. Write the conclusion sentence.

*Annotation.* The (k + 1)th term is (k + 1) × 2^k, found by putting r = k + 1 into r × 2^(r − 1). Writing the target first shows you need a factor 2^(k + 1), which guides the factorising.

### Worked example 2: divisibility

Prove that 7ⁿ − 3ⁿ is divisible by 4 for all n ∈ ℤ⁺.

```
Basis:  7 − 3 = 4, divisible by 4.
Assume: 7ᵏ − 3ᵏ = 4m for some integer m, so 7ᵏ = 4m + 3ᵏ.
Step:   7^(k+1) − 3^(k+1) = 7 × 7ᵏ − 3 × 3ᵏ
                          = 7(4m + 3ᵏ) − 3 × 3ᵏ
                          = 28m + 4 × 3ᵏ
                          = 4(7m + 3ᵏ)
```

7m + 3ᵏ is an integer, so 7^(k+1) − 3^(k+1) is divisible by 4. Conclude.

*Annotation.* Substituting 7ᵏ = 4m + 3ᵏ is the step that uses the assumption. A proof that never uses it is not an induction proof.

### Worked example 3: a derivative

Let f(x) = 1/x. Prove that the n-th derivative is f⁽ⁿ⁾(x) = (−1)ⁿ n!/xⁿ⁺¹ for all n ∈ ℤ⁺.

```
Basis:  f′(x) = −x⁻² = (−1)¹ 1!/x².  True.
Assume: f⁽ᵏ⁾(x) = (−1)ᵏ k! x^(−(k+1)).
Step:   f⁽ᵏ⁺¹⁾(x) = d/dx [(−1)ᵏ k! x^(−(k+1))]
                   = (−1)ᵏ k! × (−(k + 1)) x^(−(k+2))
                   = (−1)^(k+1) (k + 1)! / x^(k+2)
```

This is the formula with n = k + 1. Conclude.

## Proof by contradiction

Assume the statement is **false**. Reason correctly until you reach something impossible, such as a number that is both even and odd, or a fraction in lowest terms with a common factor. Since valid reasoning from the assumption led to an impossibility, the assumption is wrong, so the statement is true.

### Worked example 4: parity

Prove that if n² is even, then n is even (n ∈ ℤ).

Assume n² is even but n is odd, so n = 2m + 1 for some integer m. Then n² = 4m² + 4m + 1 = 2(2m² + 2m) + 1, which is odd. This contradicts n² being even. So n must be even.

### Worked example 5: infinitely many primes

Assume there are only finitely many primes, p₁, p₂, …, pₖ. Let N = p₁p₂…pₖ + 1. Dividing N by any pᵢ leaves remainder 1, so no pᵢ divides N. But N > 1, so N has at least one prime factor, and that prime is not in the list. This contradicts the list containing every prime. So there are infinitely many primes.

*Annotation.* This is Euclid's argument. N need not itself be prime; it only needs a prime factor outside the list.

## Counterexamples

A statement that claims something is true **for all** cases is disproved by one case where it fails. Show the calculation and state clearly why it breaks the claim.

- "2ᵖ − 1 is prime for every prime p." For p = 11, 2¹¹ − 1 = 2047 = 23 × 89, which is not prime. So the statement is false.
- "√(a² + b²) = a + b for all positive real a and b." For a = 3, b = 4, √25 = 5 but a + b = 7. So the statement is false.

Checking many cases that work never proves a "for all" statement, but a single failure always disproves it.

## Common mistakes

- Basis missing, or shown only for the left-hand side.
- Assumption written as "assume true for n = k" with no statement of what that means.
- Assuming P(k + 1) and working backwards.
- Inductive step that never uses the assumption.
- Conclusion missing or reduced to "hence proved".
- In contradiction proofs, not stating the assumption precisely (for √p, "p and q have no common factor" is essential).
- Counterexamples given without the calculation or without saying why they fail.

## Exam technique: the command words

- **Prove by mathematical induction**: all four parts, in order, with the conclusion sentence.
- **Prove by contradiction**: begin "Assume, for contradiction, that…", end by naming the contradiction.
- **Show that the statement is not always true** or **use a counterexample**: one explicit case with working.
- **Hence**: an induction result may be needed in a later part, for example to evaluate a sum quickly.

These proofs are calculator-free algebra, so they suit HL Paper 1, but they can appear on any HL paper.

## Where next

Condense the structures with the [section 1.15 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15-revision-notes/) and write full proofs in the [section 1.15 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15-practice/). De Moivre's theorem, the classic complex-number induction proof, is in the [section 1.14 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-14/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.15.
