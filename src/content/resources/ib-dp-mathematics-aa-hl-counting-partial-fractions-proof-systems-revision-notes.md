---
title: "IB DP Mathematics: Analysis and Approaches -- Counting principles, partial fractions, proof and linear systems (HL) Revision Notes"
seoTitle: "IB Maths AA HL Counting, Proof and Systems Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Counting principles, partial fractions, proof and linear systems (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-16"
description: "Condensed IB DP Maths AA HL revision notes on counting, binomial series, partial fractions, proof and linear systems, with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and worked examples, start with the [study guide for this unit](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems/). These notes are for fast recall in the final weeks.

These revision notes cover counting principles, the extended binomial theorem, partial fractions, proof and systems of linear equations for IB Diploma Programme Mathematics: Analysis and Approaches. They are aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 1.10, 1.11, 1.15 and 1.16, and all of this content is HL only (AHL). They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions.

Test yourself afterwards with the [practice questions](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems-practice/). See where the unit sits on the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and tick it off on the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## Definitions

- **Permutation:** an ordered selection of different objects.
- **Combination:** an unordered selection of different objects.
- **Partial fractions:** writing one rational function as a sum of simpler fractions with linear denominators.
- **Proof by induction:** proves P(n) for all n ∈ ℤ⁺ from a basis case and an inductive step.
- **Proof by contradiction:** assume the statement is false and deduce something impossible.
- **Counterexample:** one case where a statement fails, with an explanation of why it fails.
- **Inconsistent system:** a system of equations with no solution.
- **General solution:** all solutions of a system with infinitely many, written with a parameter such as λ.

## Formulas

| Result | Formula | Notes |
|---|---|---|
| Arrangements of n different objects in a line | n! | 0! = 1 |
| Permutations | ⁿPᵣ = n!/(n − r)! | order matters |
| Combinations | ⁿCᵣ = n!/(r!(n − r)!) | order does not matter |
| Binomial series | (1 + x)ⁿ = 1 + nx + (n(n − 1)/2!)x² + (n(n − 1)(n − 2)/3!)x³ + … | n ∈ ℚ; infinite unless n ∈ ℕ; valid for \|x\| < 1 |
| General bracket | (a + b)ⁿ = aⁿ(1 + b/a)ⁿ | valid for \|b/a\| < 1 |
| Partial fractions | (px + q)/((ax + b)(cx + d)) ≡ A/(ax + b) + B/(cx + d) | two distinct linear factors, numerator degree lower |

Not required by the guide: permutations with identical objects, circular arrangements, and proof of the binomial theorem.

## Method in steps

### Counting problems

```
1. Does order matter?  yes → ⁿPᵣ or n!   no → ⁿCᵣ
2. Restrictions first: fix restricted items, glue "together" items into one block
3. "Apart": total − together, or place the others first and choose gaps
4. "At least": add exact cases, or total − the cases you do not want
5. Independent stages multiply; separate cases add
```

Worked reminder: 4 different red cards and 3 different blue cards in a row, with the blue cards together. Treat the blues as one block, so arrange 5 items in 5! = 120 ways, then order the blues in 3! = 6 ways: 120 × 6 = 720.

### Binomial expansion with n ∈ ℚ

```
1. Rewrite as aⁿ(1 + b/a)ⁿ so the bracket starts with 1
2. Let X = b/a (keep its sign and coefficient)
3. Substitute into 1 + nX + n(n−1)X²/2! + n(n−1)(n−2)X³/3!
4. Multiply every term by aⁿ
5. State validity: |X| < 1, then solve for x
```

Worked reminder: (1 + x)^(1/2) = 1 + x/2 − x²/8 + …, valid for |x| < 1.

Worked reminder with a ≠ 1: √(9 − x) = 3(1 − x/9)^(1/2) = 3(1 − x/18 − x²/648 + …) = 3 − x/6 − x²/216 + …, valid for |x| < 9.

### Partial fractions

```
1. Factorise the denominator
2. Write A/(first factor) + B/(second factor)
3. Multiply by the denominator
4. Substitute each root, or equate coefficients
5. Check with one value of x
```

### Induction layout

```
Basis:       show P(1) true
Assumption:  assume P(k) true for some k ∈ ℤ⁺
Step:        show P(k + 1) true, using P(k)
Conclusion:  P(1) true and P(k) ⇒ P(k + 1), so P(n) true for all n ∈ ℤ⁺
```

Divisibility tip: write aᵏ⁺¹ as a × aᵏ, then split off a multiple of the expression you assumed divisible. For example 9ᵏ⁺¹ − 1 = 9(9ᵏ − 1) + 8.

Differentiation tip: differentiate the assumed formula for the k-th derivative once, and factorise to the k + 1 form.

### Contradiction layout

```
1. "Assume, for a contradiction, that …"
2. For irrationality: let the number be p/q in lowest terms, q ≠ 0
3. Rearrange to a statement about integers
4. Show p and q share a factor, or even = odd, or similar
5. "This contradicts …, so the original statement is true."
```

Worked reminder, ∛5 is irrational: suppose ∛5 = p/q in lowest terms. Then p³ = 5q³, so 5 divides p³ and hence p (5 is prime). Write p = 5s: 125s³ = 5q³, so q³ = 25s³ and 5 divides q. Both p and q have the factor 5, a contradiction.

The guide's examples of this type include the irrationality of √3 and of the cube root of 5, the infinitude of primes (Euclid), and that rational + irrational is irrational.

### Linear systems by elimination

```
1. Use (1) to remove x from (2) and (3)
2. Use the new pair to remove y
3. Last line cz = d:
     c ≠ 0            → unique solution
     c = 0, d ≠ 0     → no solution (inconsistent)
     c = 0, d = 0     → infinitely many: let z = λ, back-substitute
```

Worked reminder: x + y + z = 1, x + 2y + 3z = 4, 2x + 3y + 4z = 6. Subtracting the first from the second gives y + 2z = 3. Subtracting twice the first from the third gives y + 2z = 4. Then 0 = 1, so the system is inconsistent.

On Paper 2 or 3, a GDC solver or matrix row reduction can do the arithmetic. The guide expects both algebraic and technological methods.

## Must-know distinctions

- **Permutation vs combination:** a president and secretary (ordered) vs a pair of reps (unordered). ⁵P₂ = 20 but ⁵C₂ = 10.
- **n ∈ ℕ vs n ∈ ℚ in the binomial theorem:** a natural-number index gives a finite expansion valid for all x; a negative or fractional index gives an infinite series with a validity condition.
- **Induction vs checking cases:** checking n = 1, 2, 3 proves nothing about all n. The inductive step does the work.
- **Counterexample vs proof:** one counterexample disproves a "for all" statement; examples never prove one.
- **No solution vs infinitely many:** 0 = 5 in the last line means inconsistent; 0 = 0 means infinitely many.
- **Substitution vs equating coefficients:** substituting the roots of the denominator is quickest; equating coefficients works every time and makes a good check.
- **Identity vs equation:** partial fractions are identities (≡), true for every x in the domain, which is why you can substitute any convenient x.

## Quick self-test

1. Evaluate ⁷P₃.
2. Evaluate ⁹C₄.
3. How many arrangements are there of all the letters of PRISM?
4. In how many ways can you choose 3 of 10 boys and 2 of 6 girls?
5. Find the first three terms of (1 − x)⁻³.
6. For which x is the expansion of (2 + 5x)^(1/2) valid?
7. Express 5/((x − 2)(x + 3)) in partial fractions.
8. Express 3x/((x + 1)(x − 2)) in partial fractions.
9. Show that "if p is prime then 2p + 1 is prime" is false.
10. Write the opening line of a proof by contradiction that √7 is irrational.
11. Solve x + y = 3, 2x + 2y = 7.
12. Find the general solution of x + y + z = 2, y − z = 1.

### Answers

1. 7 × 6 × 5 = **210**
2. 9!/(4!5!) = **126**
3. Five different letters: 5! = **120**
4. ¹⁰C₃ × ⁶C₂ = 120 × 15 = **1800**
5. n = −3, X = −x: 1 + (−3)(−x) + ((−3)(−4)/2)x² = **1 + 3x + 6x²**
6. 2^(1/2)(1 + 5x/2)^(1/2), so |5x/2| < 1: **|x| < 2/5**
7. 5 ≡ A(x + 3) + B(x − 2); x = 2 gives A = 1, x = −3 gives B = −1: **1/(x − 2) − 1/(x + 3)**
8. 3x ≡ A(x − 2) + B(x + 1); x = −1 gives A = 1, x = 2 gives B = 2: **1/(x + 1) + 2/(x − 2)**
9. p = 7 is prime but 2(7) + 1 = 15 = 3 × 5 is **not prime**, so the statement fails.
10. **Assume √7 = p/q, where p, q ∈ ℤ, q ≠ 0 and p, q have no common factor.**
11. Doubling the first gives 2x + 2y = 6, which contradicts 2x + 2y = 7: **no solution (inconsistent)**.
12. Let z = λ: **x = 1 − 2λ, y = 1 + λ, z = λ**, λ ∈ ℝ.

## Where marks are usually lost

- Using combinations when the question assigns roles (captain, first, second), which makes order matter.
- In "at least one" questions, choosing one special person and then choosing freely, which double-counts.
- Forgetting to multiply by aⁿ after taking a factor out of (a + b)ⁿ, especially when n is fractional (for example 4^(1/2) = 2).
- Missing brackets when raising the term: (−x/4)² is +x²/16, not −x²/16.
- Leaving out the validity interval, or giving |x| < 1 when the bracket was (1 + 3x), which needs |x| < 1/3.
- Partial fractions attempted before factorising the denominator, or with a sign error in (x − a) when substituting.
- Induction steps that restate P(k + 1) as the goal and "arrive" at it without using P(k).
- A missing or incomplete concluding sentence in induction; without it the proof is not complete.
- A counterexample given with no working to show it breaks the statement.
- A system with infinitely many solutions answered with one particular solution instead of the general solution.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
