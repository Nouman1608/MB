---
title: "IB DP Mathematics: Analysis and Approaches -- Counting principles, partial fractions, proof and linear systems (HL) Study Guide"
seoTitle: "IB Maths AA HL Counting, Proof and Linear Systems Guide"
resourceType: "study-guides"
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
description: "IB DP Maths AA HL study guide to counting, the extended binomial theorem, partial fractions, proof and 3×3 linear systems, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches counting, the extended binomial theorem, partial fractions, proof and linear systems for IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 1.10, 1.11, 1.15 and 1.16. All of this content is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you have worked through it, use the [revision notes for this unit](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems-revision-notes/) for final-weeks recall and the [practice questions](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems-practice/) to test yourself. For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 1.10 | Use counting principles, including permutations and combinations; expand (a + b)ⁿ for n ∈ ℚ, including fractional and negative indices | HL only |
| 1.11 | Split a rational function into partial fractions (at most two distinct linear factors in the denominator, numerator of lower degree) | HL only |
| 1.15 | Prove results by mathematical induction and by contradiction; use a counterexample, with an explanation, to show a statement is not always true | HL only |
| 1.16 | Solve systems of up to three linear equations in three unknowns, by hand and with technology; identify a unique solution, infinitely many solutions (and give the general solution) or no solution | HL only |

HL Paper 1 allows no technology, so every method here must work by hand. Papers 2 and 3 require a GDC.

## 1.10 Counting principles

### The multiplication principle

If one choice can be made in m ways and a second, independent choice in n ways, the pair can be made in m × n ways. Separate cases are added.

The number of ways to arrange n different objects in a row is n! = n × (n − 1) × … × 2 × 1, with 0! = 1.

### Permutations and combinations

- A **permutation** is an ordered selection. The number of ways to choose and arrange r objects from n different objects is ⁿPᵣ = n!/(n − r)!.
- A **combination** is an unordered selection. The number of ways to choose r objects from n different objects is ⁿCᵣ = n!/(r!(n − r)!), also written as the binomial coefficient (n r).

Ask yourself one question: does the order matter? A podium is ordered; a committee is not. For example, gold, silver and bronze for 8 runners can be awarded in ⁸P₃ = 8 × 7 × 6 = 336 ways.

Not required by the guide: permutations where some objects are identical, and circular arrangements.

### Worked example 1: "at least" conditions

A committee of 5 is chosen from 6 teachers and 4 parents. How many committees contain at least 2 parents?

Use the complement, because it has fewer cases:

```
all committees:   ¹⁰C₅ = 252
0 parents:        ⁶C₅ = 6
1 parent:         ⁴C₁ × ⁶C₄ = 4 × 15 = 60
at least 2 = 252 − 6 − 60 = 186
```

Adding the exact cases (120 + 60 + 6) agrees.

### Worked example 2: items together or apart

How many arrangements of the letters of FACTOR (six different letters) have the vowels A and O next to each other?

Glue A and O into one block. You now arrange 5 items: 5! = 120 ways. The block can be AO or OA: 2 ways. Total = 120 × 2 = **240**.

The number with A and O apart is 6! − 240 = 720 − 240 = **480**.

### The binomial theorem for n ∈ ℚ

At SL you expanded (a + b)ⁿ for n ∈ ℕ. At HL the index can be any rational number. The expansion starts from

```
(1 + x)ⁿ = 1 + nx + (n(n − 1)/2!)x² + (n(n − 1)(n − 2)/3!)x³ + …
```

When n is a negative integer or a fraction, the series never stops, and it is valid only for |x| < 1. For a general bracket, take out the first term as the guide shows:

```
(a + b)ⁿ = (a(1 + b/a))ⁿ = aⁿ(1 + b/a)ⁿ,   valid for |b/a| < 1
```

### Worked example 3: negative index

Expand (1 − 2x)⁻² up to the term in x³.

Here n = −2 and the "x" in the formula is −2x.

```
1 + (−2)(−2x) + ((−2)(−3)/2)(−2x)² + ((−2)(−3)(−4)/6)(−2x)³
= 1 + 4x + 3(4x²) + (−4)(−8x³)
= 1 + 4x + 12x² + 32x³
```

Valid for |−2x| < 1, so |x| < 1/2.

### Worked example 4: fractional index and an approximation

Expand √(4 + x) up to x³ and use it to estimate √4.2.

```
√(4 + x) = 4^(1/2) (1 + x/4)^(1/2) = 2(1 + x/4)^(1/2)
(1 + x/4)^(1/2) = 1 + (1/2)(x/4) + ((1/2)(−1/2)/2)(x/4)² + ((1/2)(−1/2)(−3/2)/6)(x/4)³
               = 1 + x/8 − x²/128 + x³/1024
√(4 + x) ≈ 2 + x/4 − x²/64 + x³/512,   valid for |x| < 4
```

Put x = 0.2: 2 + 0.05 − 0.000625 + 0.000015625 = 2.049390625, within 0.000001 of the true value. Choose x close to 0 for a good approximation.

## 1.11 Partial fractions

A proper rational function with two distinct linear factors in the denominator can be split as

```
(px + q)/((ax + b)(cx + d)) ≡ A/(ax + b) + B/(cx + d)
```

You will use this to integrate rational functions (section 5.15).

### Method

1. Factorise the denominator.
2. Write the identity with unknowns A and B, and multiply through by the denominator.
3. Substitute the value of x that makes each bracket zero, or equate coefficients.
4. Check by testing one value of x.

### Worked example 5: substitution

Express (4x + 7)/(x² + 3x + 2) in partial fractions.

```
x² + 3x + 2 = (x + 1)(x + 2)
4x + 7 ≡ A(x + 2) + B(x + 1)
x = −1:  3 = A(1)     so A = 3
x = −2: −1 = B(−1)    so B = 1
(4x + 7)/(x² + 3x + 2) ≡ 3/(x + 1) + 1/(x + 2)
```

### Worked example 6: equating coefficients

Express (5x + 1)/((2x − 1)(x + 3)) in partial fractions.

```
5x + 1 ≡ A(x + 3) + B(2x − 1)
x terms:   5 = A + 2B
constants: 1 = 3A − B
From the second, B = 3A − 1. Then 5 = A + 6A − 2, so A = 1 and B = 2.
(5x + 1)/((2x − 1)(x + 3)) ≡ 1/(2x − 1) + 2/(x + 3)
```

Check with x = 0: left side 1/(−3) = −1/3; right side −1 + 2/3 = −1/3.

## 1.15 Proof

### Proof by mathematical induction

Induction proves a statement P(n) for all n ∈ ℤ⁺ (or from some starting value). It has four parts.

1. **Basis:** show P(1) is true.
2. **Assumption:** assume P(k) is true for some k ∈ ℤ⁺.
3. **Inductive step:** using the assumption, show P(k + 1) is true.
4. **Conclusion:** since P(1) is true, and P(k) true implies P(k + 1) true, P(n) is true for all n ∈ ℤ⁺ by mathematical induction.

The guide links induction to sums of sequences, divisibility, differentiation and complex numbers.

### Worked example 7: a sum

Prove that Σ(r = 1 to n) r(r + 1) = n(n + 1)(n + 2)/3 for all n ∈ ℤ⁺.

```
n = 1: LHS = 1 × 2 = 2;  RHS = 1 × 2 × 3/3 = 2.  True.
Assume Σ(r = 1 to k) r(r + 1) = k(k + 1)(k + 2)/3.
Σ(r = 1 to k+1) r(r + 1) = k(k + 1)(k + 2)/3 + (k + 1)(k + 2)
                         = (k + 1)(k + 2)(k/3 + 1)
                         = (k + 1)(k + 2)(k + 3)/3
```

This is the formula with n = k + 1. Write the conclusion sentence.

### Worked example 8: divisibility

Prove that 9ⁿ − 1 is divisible by 8 for all n ∈ ℤ⁺.

```
n = 1: 9 − 1 = 8, divisible by 8.
Assume 9ᵏ − 1 = 8m for some integer m.
9^(k+1) − 1 = 9 × 9ᵏ − 1 = 9(9ᵏ − 1) + 8 = 9(8m) + 8 = 8(9m + 1)
```

9m + 1 is an integer, so 9^(k+1) − 1 is divisible by 8. Conclude as above.

### Proof by contradiction

Assume the statement is false and deduce something impossible. So the statement must be true.

### Worked example 9: √3 is irrational

Suppose √3 = p/q where p, q ∈ ℤ, q ≠ 0, and p and q have no common factor.

```
3 = p²/q²,  so p² = 3q²
```

So p² is a multiple of 3, which forces p to be a multiple of 3 (3 is prime). Write p = 3s. Then 9s² = 3q², so q² = 3s², and q is also a multiple of 3. Now p and q share the factor 3, which contradicts "no common factor". So √3 is irrational.

The same structure shows that rational + irrational is irrational: if a + b = c with a, c rational, then b = c − a is rational. Euclid's proof of infinitely many primes also works this way.

### Counterexamples

One example shows a statement is not always true. The guide says stating the counterexample alone is not sufficient: you must explain why it is one.

### Worked example 10: a counterexample

Show that the statement "n² − n + 11 is prime for every n ∈ ℕ" is false.

Take n = 11: 11² − 11 + 11 = 121 = 11 × 11. So 121 is not prime, and the statement fails for n = 11. (It holds for n = 0 to 10.)

## 1.16 Systems of linear equations

### Three possible outcomes

- **Unique solution:** exactly one (x, y, z) fits all equations.
- **Infinitely many solutions:** one equation is a combination of the others. You must give the **general solution** in terms of a parameter.
- **No solution:** the equations contradict each other. The system is called **inconsistent**.

### By hand: row reduction (elimination)

Use one equation to remove x from the other two, then use the new pair to remove y. The last equation then tells you which case you are in.

### Worked example 11: unique solution

```
x + y + z = 6      (1)
2x − y + z = 3     (2)
x + 2y − z = 2     (3)
(2) − 2(1):  −3y − z = −9     (4)
(3) − (1):    y − 2z = −4     (5)
(4) + 3(5):  −7z = −21, so z = 3
(5): y = −4 + 6 = 2;  (1): x = 6 − 2 − 3 = 1
```

Solution: x = 1, y = 2, z = 3.

### Worked example 12: parameters and the three cases

```
x + y + z = 4       (1)
x − y + 3z = 2      (2)
3x − y + kz = m     (3)
(2) − (1):          −2y + 2z = −2          (4)
(3) − 3(1):         −4y + (k − 3)z = m − 12 (5)
(5) − 2(4):         (k − 7)z = m − 8
```

- If k ≠ 7, z = (m − 8)/(k − 7): **unique solution**.
- If k = 7 and m ≠ 8, the last line reads 0 = m − 8 ≠ 0: **no solution** (inconsistent).
- If k = 7 and m = 8, the last line reads 0 = 0: **infinitely many solutions**. Let z = λ. From (4), y = 1 + λ. From (1), x = 3 − 2λ.

General solution: x = 3 − 2λ, y = 1 + λ, z = λ, λ ∈ ℝ. Check in (3): 3(3 − 2λ) − (1 + λ) + 7λ = 8.

### Using your GDC

The guide expects technology as well as hand methods. On Paper 2 or 3, use the simultaneous equation solver or matrix row reduction, and write down the system you entered. If the GDC reports no unique solution, find the general solution by elimination.

## Common errors

- Using ⁿPᵣ for a committee or ⁿCᵣ for a race: decide whether order matters first.
- In (a + b)ⁿ, forgetting to multiply the whole series by aⁿ, or writing a instead of aⁿ.
- Giving a binomial expansion with a negative or fractional index and no validity condition.
- Starting partial fractions without factorising, or with the numerator degree not lower.
- Induction proofs that never use the assumption or leave out the conclusion.
- Stating a counterexample with no calculation showing why it breaks the statement.
- Writing "no solution" when the last row is 0 = 0.

## Where to go next

Condense this unit with the [revision notes](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems-revision-notes/), then test it with the [practice set](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems-practice/). Partial fractions feed into the [calculus study guide](/resources/ib-dp-mathematics-aa-calculus/). For the whole course, read the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) and the [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
