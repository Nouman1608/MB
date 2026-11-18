---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.15 Proof by mathematical induction, contradiction and counterexample (AHL only) -- Practice Questions"
resourceType: "practice-questions"
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
description: "12 original IB DP Maths AA HL questions on proof by induction, contradiction and counterexample (section 1.15), with mark-by-mark model proofs."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

This set covers **syllabus section 1.15** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): proof by mathematical induction, proof by contradiction, and counterexamples. Every question is **HL only** and calculator-free. In induction proofs, write all four parts: basis, assumption, inductive step and conclusion.

Study the methods first in the [section 1.15 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15/) and the [section 1.15 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15-revision-notes/).

## Section A

**1.** Use a counterexample to show that the statement "if x² > x, then x > 1" is not true for all real x. **[2]**

**2.** Use a counterexample to show that the statement "√(x²) = x for all real x" is false. **[2]**

**3.** Use a counterexample to show that the product of two irrational numbers need not be irrational. **[2]**

**4.** Let P(n) be the statement Σ (r = 1 to n) r³ = n²(n + 1)²/4.

**(a)** Show that P(1) is true. **[1]**
**(b)** Write down the statement P(k + 1). **[1]**

## Section B

**5.** Prove by mathematical induction that Σ (r = 1 to n) r³ = n²(n + 1)²/4 for all n ∈ ℤ⁺. **[6]**

**6.** Prove by mathematical induction that Σ (r = 1 to n) 1/(r(r + 1)) = n/(n + 1) for all n ∈ ℤ⁺. **[5]**

**7.** Prove by mathematical induction that 4ⁿ + 6n − 1 is divisible by 9 for all n ∈ ℤ⁺. **[6]**

**8.** Let f(x) = ln x, x > 0. Prove by mathematical induction that f⁽ⁿ⁾(x) = (−1)ⁿ⁻¹(n − 1)!/xⁿ for all n ∈ ℤ⁺. **[6]**

**9.** Prove by mathematical induction that Σ (r = 1 to n) r × r! = (n + 1)! − 1 for all n ∈ ℤ⁺. **[5]**

**10.** Prove by contradiction that √7 is irrational. **[5]**

**11.** Prove by contradiction that there are no positive integers x and y such that x² − y² = 2. **[4]**

**12.**

**(a)** Prove by contradiction that if n² is a multiple of 3, then n is a multiple of 3, for n ∈ ℤ. You may consider the cases n = 3m + 1 and n = 3m + 2. **[4]**
**(b)** Explain how the result in (a) is used in a proof that √3 is irrational. **[1]**

## Answers

**1.** Take x = −1: x² = 1 > −1 = x [1], but x = −1 is not greater than 1, so the statement fails [1]

**2.** Take x = −2: √((−2)²) = √4 = 2 [1], which is not equal to −2 [1]

**3.** √2 and √2 are irrational [1], but √2 × √2 = 2, which is rational [1]

**4. (a)** LHS = 1³ = 1; RHS = 1² × 2²/4 = 1. So P(1) is true [1]
**(b)** Σ (r = 1 to k + 1) r³ = (k + 1)²(k + 2)²/4 [1]

**5.** Basis: P(1) is true, as in Question 4(a) [1]. Assume Σ (r = 1 to k) r³ = k²(k + 1)²/4 for some k ∈ ℤ⁺ [1]. Then Σ (r = 1 to k + 1) r³ = k²(k + 1)²/4 + (k + 1)³ [1] = ((k + 1)²/4)(k² + 4k + 4) [1] = (k + 1)²(k + 2)²/4, which is P(k + 1) [1]. P(1) is true and P(k) true implies P(k + 1) true, so by mathematical induction the result holds for all n ∈ ℤ⁺ [1]
*Examiner insight:* Taking out the common factor (k + 1)²/4 before expanding keeps the algebra short and shows the target form at once.

**6.** n = 1: LHS = 1/2, RHS = 1/2, true [1]. Assume Σ (r = 1 to k) 1/(r(r + 1)) = k/(k + 1) [1]. Then Σ (r = 1 to k + 1) = k/(k + 1) + 1/((k + 1)(k + 2)) [1] = (k(k + 2) + 1)/((k + 1)(k + 2)) = (k + 1)²/((k + 1)(k + 2)) = (k + 1)/(k + 2) [1]. This is P(k + 1); P(1) is true and P(k) ⇒ P(k + 1), so true for all n ∈ ℤ⁺ by mathematical induction [1]

**7.** n = 1: 4 + 6 − 1 = 9, divisible by 9 [1]. Assume 4ᵏ + 6k − 1 = 9m for some integer m, so 4ᵏ = 9m − 6k + 1 [1]. Then 4^(k+1) + 6(k + 1) − 1 = 4 × 4ᵏ + 6k + 5 [1] = 4(9m − 6k + 1) + 6k + 5 [1] = 36m − 18k + 9 = 9(4m − 2k + 1) [1]. 4m − 2k + 1 is an integer, so the expression is divisible by 9. True for n = 1, and true for k implies true for k + 1, so true for all n ∈ ℤ⁺ by induction [1]
*Examiner insight:* Rearranging the assumption to make 4ᵏ the subject, then substituting, is the cleanest route when the expression has a non-exponential part such as 6n.

**8.** n = 1: f′(x) = 1/x, and (−1)⁰ 0!/x¹ = 1/x, so true [1]. Assume f⁽ᵏ⁾(x) = (−1)ᵏ⁻¹(k − 1)! x⁻ᵏ [1]. Then f⁽ᵏ⁺¹⁾(x) = (−1)ᵏ⁻¹(k − 1)! × (−k)x^(−k−1) [1] = (−1)ᵏ k(k − 1)! x^(−(k+1)) [1] = (−1)ᵏ k!/x^(k+1), which is the formula with n = k + 1 [1]. True for n = 1, and true for k implies true for k + 1, so true for all n ∈ ℤ⁺ by induction [1]
*Examiner insight:* The basis uses 0! = 1. Writing (k − 1)! × k = k! explicitly earns the accuracy mark.

**9.** n = 1: LHS = 1 × 1! = 1, RHS = 2! − 1 = 1, true [1]. Assume Σ (r = 1 to k) r × r! = (k + 1)! − 1 [1]. Then Σ (r = 1 to k + 1) r × r! = (k + 1)! − 1 + (k + 1)(k + 1)! [1] = (k + 1)!(1 + k + 1) − 1 = (k + 2)! − 1 [1], which is P(k + 1). P(1) true and P(k) ⇒ P(k + 1), so true for all n ∈ ℤ⁺ by mathematical induction [1]

**10.** Assume √7 = a/b, where a, b ∈ ℤ⁺ have no common factor [1]. Then a² = 7b², so 7 divides a², and since 7 is prime, 7 divides a [1]. Write a = 7c: 49c² = 7b², so b² = 7c² [1], and 7 divides b [1]. So a and b share the factor 7, contradicting "no common factor". Hence √7 is irrational [1]

**11.** Assume positive integers x, y exist with x² − y² = 2, so (x − y)(x + y) = 2 [1]. x + y and x − y differ by 2y, which is even, so they are both even or both odd [1]. If both are odd, their product is odd, not 2. If both are even, their product is a multiple of 4, not 2 [1]. Either way there is a contradiction, so no such x and y exist [1]

**12. (a)** Assume n² is a multiple of 3 but n is not, so n = 3m + 1 or n = 3m + 2 [1]. If n = 3m + 1, n² = 9m² + 6m + 1 = 3(3m² + 2m) + 1 [1]. If n = 3m + 2, n² = 9m² + 12m + 4 = 3(3m² + 4m + 1) + 1 [1]. In both cases n² leaves remainder 1 when divided by 3, contradicting the assumption. So n is a multiple of 3 [1]
**(b)** From √3 = a/b in lowest terms, a² = 3b², so a² is a multiple of 3; part (a) then gives that a is a multiple of 3, which leads to b being a multiple of 3 as well, the contradiction [1]

## Where marks are usually lost

- Basis checked on one side only.
- Assumption not written out in full.
- The (k + 1)th term of a sum written incorrectly.
- Inductive step that never substitutes the assumption.
- Conclusion sentence missing.
- Contradiction proofs that do not say "no common factor" or never state what is contradicted.
- Counterexamples without the calculation that shows the failure.

## Next steps

- Recap the templates in the [section 1.15 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15-revision-notes/).
- Practise the SL foundations of proof with the [section 1.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-6-practice/).
- For mixed HL practice, use the [counting principles, partial fractions, proof and linear systems practice set](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.15.
