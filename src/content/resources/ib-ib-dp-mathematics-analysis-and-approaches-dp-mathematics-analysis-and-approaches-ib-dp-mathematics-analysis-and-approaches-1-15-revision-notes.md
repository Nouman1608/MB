---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.15 Proof by mathematical induction, contradiction and counterexample (AHL only) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA HL section 1.15: induction layout for sums, divisibility and derivatives, contradiction, counterexamples and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.15** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): proof by mathematical induction, proof by contradiction, and counterexamples. It is **HL only**. For explanations and worked examples, use the [section 1.15 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15/).

## Condensed recall: induction

**Template**

1. **Basis:** P(1) true (evaluate both sides).
2. **Assumption:** assume P(k) true for some k ∈ ℤ⁺; write it out.
3. **Inductive step:** write the target P(k + 1); reach it using the assumption.
4. **Conclusion:** "P(1) is true and P(k) true ⇒ P(k + 1) true, so by mathematical induction P(n) is true for all n ∈ ℤ⁺."

**By context**

| Context | Key move in the inductive step |
|---|---|
| Sum Σ (r = 1 to n) | Sum to k + 1 = (sum to k, from the assumption) + (the (k + 1)th term); then factorise towards the target |
| Divisibility by d | From aᵏ + … = dm, substitute for aᵏ, or split a^(k+1) = a × aᵏ and rearrange so a multiple of d appears |
| n-th derivative | Differentiate the assumed formula for f⁽ᵏ⁾ once |
| Complex numbers | Multiply the assumed result by one more factor, such as cis θ, and use compound angle formulae |

**Factorising sums.** Take out the common factors first. For instance, k(k + 1)/2 + (k + 1) = (k + 1)(k/2 + 1) = (k + 1)(k + 2)/2.

**Divisibility substitution.** If 5ᵏ − 1 = 4m, then 5^(k+1) − 1 = 5 × 5ᵏ − 1 = 5(4m + 1) − 1 = 20m + 4 = 4(5m + 1).

**Starting value.** If a statement is claimed for n ≥ 2, the basis is n = 2 and the conclusion says "for all integers n ≥ 2".

## Condensed recall: contradiction

1. State the assumption that the result is false, precisely.
2. Reason correctly from it.
3. Reach an impossibility, and say what it contradicts.
4. Conclude that the original statement is true.

Classic uses:

- **Irrationality of √p (p prime):** assume √p = a/b in lowest terms; deduce p divides both a and b.
- **Irrational logarithms:** assume log₃ 2 = a/b; then 3ᵃ = 2ᵇ, odd equals even.
- **Parity:** if n² is odd then n is odd; assume n even, then n² is even.
- **Infinitely many primes:** assume a finite list; the product plus 1 has a prime factor not on the list.
- **Rational + irrational is irrational:** if r + x = s with r, s rational, then x = s − r is rational.

## Condensed recall: counterexamples

- One failing case disproves a "for all" statement.
- Show the working and say explicitly why the case fails.
- Many successful cases never prove a "for all" statement.

## Key terms

| Term | Meaning |
|---|---|
| Mathematical induction | Proof that P(n) holds for all positive integers via a basis and an inductive step |
| Basis (base case) | The first value, usually n = 1, checked directly |
| Inductive hypothesis | The assumption that P(k) is true |
| Inductive step | Showing P(k) ⇒ P(k + 1) |
| Proof by contradiction | Assume the result false and derive an impossibility |
| Counterexample | A single case showing a general statement is false |
| Rational number | A number p/q with p, q ∈ ℤ, q ≠ 0 |
| Irrational number | A real number that is not rational |

## Exam traps

- **"Hence proved".** Not a conclusion; write the full sentence.
- **Working from P(k + 1).** Assuming the target and simplifying both sides is circular.
- **Wrong (k + 1)th term.** For Σ r(r + 2), it is (k + 1)(k + 3).
- **Unused assumption.** The step must contain the substitution from P(k).
- **Integer not stated.** In divisibility, say the bracket is an integer.
- **Lowest terms omitted.** In √p proofs the contradiction depends on it.
- **Counterexample with no reason.** Writing "n = 16" without showing the value is composite scores little.

## Self-test

1. Name the four parts of an induction proof.
2. For P(n): Σ (r = 1 to n) (2r − 1) = n², write down P(k) and P(k + 1).
3. Complete the inductive step for question 2.
4. Show the basis for "6ⁿ − 1 is divisible by 5".
5. Complete the inductive step for question 4.
6. For f(x) = e^(2x), state the formula for f⁽ⁿ⁾(x) and prove the inductive step.
7. Give the first line of a proof by contradiction that √5 is irrational.
8. Prove by contradiction that if n² is odd, then n is odd.
9. Find a counterexample to "n² + n + 1 is prime for every positive integer n".
10. Find a counterexample to "if a² > b², then a > b".
11. Why does checking n = 1 to 1000 not prove a statement for all n?
12. Prove that the sum of a rational number and an irrational number is irrational.

**Answers**

1. Basis, assumption, inductive step, conclusion.
2. P(k): Σ (r = 1 to k) (2r − 1) = k². P(k + 1): Σ (r = 1 to k + 1) (2r − 1) = (k + 1)².
3. k² + (2(k + 1) − 1) = k² + 2k + 1 = (k + 1)².
4. n = 1: 6 − 1 = 5, divisible by 5.
5. Assume 6ᵏ − 1 = 5m. Then 6^(k+1) − 1 = 6(5m + 1) − 1 = 30m + 5 = 5(6m + 1).
6. f⁽ⁿ⁾(x) = 2ⁿe^(2x). If f⁽ᵏ⁾(x) = 2ᵏe^(2x), differentiating gives 2ᵏ × 2e^(2x) = 2^(k+1)e^(2x).
7. "Assume, for contradiction, that √5 = a/b where a, b ∈ ℤ⁺ have no common factor."
8. Assume n² odd and n even: n = 2m, so n² = 4m² = 2(2m²), which is even. Contradiction, so n is odd.
9. n = 4: 16 + 4 + 1 = 21 = 3 × 7, not prime.
10. a = −3, b = 2: a² = 9 > 4 = b², but a < b.
11. A statement can hold for many values and fail later; only a proof covers every case.
12. Assume r + x = s with r, s rational and x irrational. Then x = s − r, a difference of rationals, which is rational. Contradiction, so r + x is irrational.

## Where next

Write full proofs in the [section 1.15 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15-practice/). The SL foundations of proof are in the [section 1.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-6-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.15.
