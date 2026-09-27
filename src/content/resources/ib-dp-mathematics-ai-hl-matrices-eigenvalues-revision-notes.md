---
title: "IB DP Mathematics: Applications and Interpretation -- Matrices, eigenvalues and eigenvectors (HL) Revision Notes"
seoTitle: "IB Maths AI HL Matrices and Eigenvalues Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Matrices, eigenvalues and eigenvectors (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 1.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-15"
description: "Condensed IB DP Maths AI HL revision notes on matrices and eigenvalues: key results, method steps, a quick self-test and where marks go."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, use the [matrices and eigenvalues study guide](/resources/ib-dp-mathematics-ai-hl-matrices-eigenvalues/). These notes are for the final weeks.

They cover IB Diploma Programme Mathematics: Applications and Interpretation and are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 1.14 and 1.15. Everything here is HL only (AHL). The notes follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions.

When you are ready, test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-matrices-eigenvalues-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show the rest of the course.

## Definitions (1.14)

- **Element:** one entry of a matrix; aᵢⱼ is in row i, column j.
- **Order:** m × n means m rows and n columns. Rows first.
- **Equal matrices:** same order and every corresponding element equal.
- **Identity I:** square, 1s on the leading diagonal, 0s elsewhere. AI = IA = A.
- **Zero matrix 0:** every element 0.
- **Singular:** det A = 0, so there is no inverse.

## Definitions (1.15)

- **Eigenvector** of M: a non-zero vector v with Mv = λv.
- **Eigenvalue:** the scalar λ in Mv = λv.
- **Characteristic polynomial** of a 2 × 2 matrix M: det(M − λI), a quadratic in λ.
- **Diagonal matrix D:** non-zero elements only on the leading diagonal.

## Key results

| Result | Statement | Notes |
|---|---|---|
| Order of a product | (m × n)(n × p) gives m × p | Inner numbers must match |
| Associative | (AB)C = A(BC) | Brackets can move |
| Distributive | A(B + C) = AB + AC | Keep A on the left |
| Non-commutative | AB ≠ BA in general | Order matters |
| 2 × 2 determinant | det A = ad − bc | A has rows (a, b), (c, d) |
| 2 × 2 inverse | A⁻¹ = (1/(ad − bc)) × rows (d, −b), (−c, a) | Only if ad − bc ≠ 0 |
| Linear system | Ax = b gives x = A⁻¹b | A⁻¹ on the left |
| Eigenvalues | det(M − λI) = 0 | 2 × 2: solve a quadratic |
| Eigenvectors | (M − λI)v = 0, v ≠ 0 | Any non-zero multiple works |
| Diagonalization | M = PDP⁻¹ | P: eigenvector columns; D: eigenvalues, same order |
| Powers | Mⁿ = PDⁿP⁻¹ | Dⁿ: raise each diagonal element to n |

Determinants and inverses of 3 × 3 or larger matrices: use technology. For 2 × 2 matrices, be able to do them by hand.

## Method in steps

### Inverse of a 2 × 2 matrix

1. Find det A = ad − bc. If it is 0, stop: no inverse.
2. Swap a and d.
3. Change the signs of b and c.
4. Multiply by 1/det A.
5. Check that AA⁻¹ = I.

### Solving a system with matrices

1. Choose the unknowns and state what each one means.
2. Write the coefficient matrix A, the unknown column x and the constant column b.
3. Check det A ≠ 0 (GDC for 3 × 3).
4. Find x = A⁻¹b.
5. Substitute into one original equation to check, and answer in context with units.

### Coding and decoding

1. Convert letters to numbers (for example A = 1, …, Z = 26).
2. Split into pairs; write each pair as a column.
3. Encode: multiply each column by E.
4. Decode: multiply each coded column by E⁻¹, then convert back to letters.

### Eigenvalues, eigenvectors and powers (2 × 2)

1. Write det(M − λI) = (a − λ)(d − λ) − bc and expand.
2. Solve the quadratic for λ₁ and λ₂.
3. For each λ, write one row of (M − λI)v = 0 and solve for the ratio x : y.
4. Build P from the eigenvector columns and D from the eigenvalues, in the same order.
5. Find P⁻¹ (2 × 2 rule).
6. Mⁿ = PDⁿP⁻¹. Check with n = 1: it must give M.

### Worked reminder: inverse and a 2 × 2 system

Solve 5x + 3y = 19 and 3x + 2y = 12.

```
A = | 5  3 |    det A = 10 − 9 = 1    A⁻¹ = |  2  -3 |
    | 3  2 |                                | -3   5 |

x = A⁻¹b:  x = 2(19) − 3(12) = 2
           y = −3(19) + 5(12) = 3
```

Check in the first equation: 5(2) + 3(3) = 19. Correct.

### Worked reminder: eigenvalues

M has rows (2, 1) and (1, 2).

```
det(M − λI) = (2 − λ)² − 1 = λ² − 4λ + 3 = (λ − 1)(λ − 3)
```

Eigenvalues 1 and 3. For λ = 3: −x + y = 0, so v = (1, 1). For λ = 1: x + y = 0, so v = (1, −1).

### Worked reminder: a power formula

Continue with the same M. Put λ = 3 first in both P and D.

```
P = | 1   1 |    D = | 3  0 |    P⁻¹ = (1/2) | 1   1 |
    | 1  -1 |        | 0  1 |                | 1  -1 |

Mⁿ = PDⁿP⁻¹ = (1/2) | 3ⁿ + 1   3ⁿ − 1 |
                    | 3ⁿ − 1   3ⁿ + 1 |
```

Check n = 1: (1/2) × rows (4, 2), (2, 4) gives M. For n = 4, Mⁿ has rows (41, 40), (40, 41).

### Worked reminder: two-town model

If xₙ₊₁ = Txₙ, then xₙ = Tⁿx₀. Write x₀ as a combination of eigenvectors: x₀ = αv₁ + βv₂. Then

```
xₙ = α(λ₁)ⁿ v₁ + β(λ₂)ⁿ v₂
```

With λ₁ = 1 and |λ₂| < 1, the term with λ₂ⁿ shrinks to 0, so xₙ approaches αv₁.

## Must-know distinctions

- **Order vs element:** "2 × 3" is the order; a₂₃ is a single number.
- **AB vs BA:** both may exist and still be different. A product may also exist one way only.
- **Singular vs invertible:** det = 0 means no inverse. The guide says A in Ax = b will be invertible in examinations.
- **x = A⁻¹b vs x = bA⁻¹:** only the first is correct.
- **Eigenvalue vs eigenvector:** λ is a number; v is a non-zero vector.
- **D vs Dⁿ:** only diagonal matrices can be raised to a power element by element. Mⁿ is not found by raising each element of M to n.
- **By hand vs technology:** 2 × 2 work by hand; n × n determinants and inverses with technology.

## Quick self-test

1. A is 3 × 2 and B is 2 × 4. State the order of AB.
2. Find the determinant of the matrix with rows (7, 3) and (4, 2).
3. Find the inverse of the matrix in question 2.
4. A and B are both 2 × 3. Is AB defined? Give a reason.
5. Solve 2x + 5y = 1, 3x − y = 10 using matrices.
6. Find the characteristic polynomial and eigenvalues of the matrix with rows (2, 1) and (1, 2).
7. Find an eigenvector of that matrix for the larger eigenvalue.
8. Show that (1, 2) is an eigenvector of the matrix with rows (3, 1) and (2, 4), and state its eigenvalue.
9. D is diagonal with elements 2 and −1. Write down D⁴.
10. Use technology to find the determinant of the matrix with rows (2, 1, 0), (1, 3, −1), (0, 2, 4).
11. The matrix with rows (2x − y, 1) and (0, x + y) equals the matrix with rows (4, 1) and (0, 5). Find x and y.
12. State the two conditions on P and D for Mⁿ = PDⁿP⁻¹ to be used in this course.

### Answers

1. **3 × 4**
2. 7(2) − 3(4) = **2**
3. (1/2) × rows (2, −3), (−4, 7), which is rows **(1, −1.5)** and **(−2, 3.5)**.
4. **No.** A has 3 columns but B has 2 rows.
5. A has rows (2, 5), (3, −1); det A = −2 − 15 = −17. x = A⁻¹b gives **x = 3, y = −1**.
6. λ² − 4λ + 3; eigenvalues **1 and 3**.
7. **(1, 1)** or any non-zero multiple.
8. The product is (3 + 2, 2 + 8) = (5, 10) = 5(1, 2), so it is an eigenvector with **eigenvalue 5**.
9. Diagonal elements **16 and 1**.
10. **24**
11. 2x − y = 4 and x + y = 5, so **x = 3, y = 2**.
12. P has the eigenvectors of M as its columns and D has the matching eigenvalues on its diagonal in the same order; the eigenvalues must be **distinct and real**.

## Where marks are usually lost

- Writing an order as columns × rows, or giving a₂₃ as the element in column 2, row 3.
- Multiplying matrices in the wrong order in a context problem, so the labels do not line up and the answer has the wrong order.
- Swapping the signs of the leading diagonal in a 2 × 2 inverse, or forgetting to divide by the determinant.
- Writing x = bA⁻¹ or leaving the answer as a GDC matrix without stating what each value means.
- Copying 3 × 3 inverse entries from the GDC rounded too early; carry exact fractions or full accuracy.
- Using the zero vector as an eigenvector, or giving one eigenvector for both eigenvalues.
- Building P with eigenvectors in one order and D with eigenvalues in the other.
- Finding P⁻¹ wrongly and so getting a Mⁿ formula that fails the n = 1 check.
- Writing a transition matrix whose columns do not match the "from" state, so the columns do not each sum to 1.
- Giving non-integer population answers in context without rounding sensibly.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections AHL 1.14 and AHL 1.15.
