---
title: "IB DP Mathematics: Applications and Interpretation -- Matrices, eigenvalues and eigenvectors (HL) Study Guide"
seoTitle: "IB Maths AI HL Matrices and Eigenvalues Study Guide"
resourceType: "study-guides"
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
description: "Study guide to IB DP Maths AI HL matrices: algebra, inverses, solving Ax = b, coding messages, eigenvalues, diagonalization and powers."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
---

This study guide teaches the matrices unit of IB Diploma Programme Mathematics: Applications and Interpretation from scratch. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 1.14 and 1.15, and all of it is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you have worked through it, condense it with the [revision notes](/resources/ib-dp-mathematics-ai-hl-matrices-eigenvalues-revision-notes/) and test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-matrices-eigenvalues-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits in the course.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 1.14 | Use the terms element, row, column and order; add, subtract and scale matrices; multiply matrices, including in practical problems | HL only |
| 1.14 | Know that matrix multiplication is associative and distributive but not commutative; use I and 0 | HL only |
| 1.14 | Find determinants and inverses of n × n matrices with technology, and of 2 × 2 matrices by hand | HL only |
| 1.14 | Write a linear system as Ax = b and solve it with the inverse matrix; code and decode messages | HL only |
| 1.15 | Find eigenvalues and eigenvectors, and the characteristic polynomial of a 2 × 2 matrix | HL only |
| 1.15 | Diagonalize a 2 × 2 matrix with distinct real eigenvalues and use Mⁿ = PDⁿP⁻¹ in applications | HL only |

All three HL papers require technology, so you will always have a GDC. The guide still expects the 2 × 2 determinant, inverse, characteristic polynomial and eigenvector calculations to be possible by hand, so practise them without the calculator.

## 1.14 Matrix definitions and algebra

A **matrix** is a rectangular array of numbers. Each number is an **element**. A matrix with m **rows** and n **columns** has **order** m × n (rows first). The element in row i, column j of A is written aᵢⱼ.

- **Equality:** two matrices are equal only if they have the same order and every corresponding element is equal.
- **Addition and subtraction:** only for matrices of the same order; add or subtract corresponding elements.
- **Scalar multiplication:** kA multiplies every element by k.
- **Identity matrix I:** a square matrix with 1s on the leading diagonal and 0s elsewhere. AI = IA = A.
- **Zero matrix 0:** every element is 0. A + 0 = A.

### Matrix multiplication

AB is defined only when the number of **columns of A** equals the number of **rows of B**. If A is m × n and B is n × p, then AB is m × p. Each element of AB is "row of A times column of B": multiply pairs and add.

Properties you must know:

- **Associative:** (AB)C = A(BC).
- **Distributive:** A(B + C) = AB + AC and (A + B)C = AC + BC.
- **Not commutative:** in general AB ≠ BA, even when both exist. The order matters.

### Worked example 1

Let

```
A = | 2  -1 |      B = | 1   5 |
    | 3   4 |          | 0  -2 |
```

Find 2A − B, AB and BA.

```
2A − B = | 4-1   -2-5 |  = | 3  -7 |
         | 6-0    8+2 |    | 6  10 |

AB = | 2(1)+(-1)(0)   2(5)+(-1)(-2) |  = | 2  12 |
     | 3(1)+4(0)      3(5)+4(-2)    |    | 3   7 |

BA = | 1(2)+5(3)      1(-1)+5(4)    |  = | 17  19 |
     | 0(2)+(-2)(3)   0(-1)+(-2)(4) |    | -6  -8 |
```

AB ≠ BA, which shows non-commutativity.

### Worked example 2: a practical product

A café records sales of coffee, tea and cake over two weeks. Prices are 2.50, 1.80 and 3.20 dollars.

```
          coffee tea cake            | 2.50 |
Q = wk1 |  120   80   45 |      p =  | 1.80 |
    wk2 |  150   60   50 |           | 3.20 |
```

Q is 2 × 3 and p is 3 × 1, so Qp is defined and is 2 × 1.

- Week 1: 120(2.50) + 80(1.80) + 45(3.20) = 300 + 144 + 144 = **588 dollars**
- Week 2: 150(2.50) + 60(1.80) + 50(3.20) = 375 + 108 + 160 = **643 dollars**

Always check that the labels line up: the columns of Q (products) must match the rows of p (products).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--01-row-times-column.webp" width="900" height="850" alt="Take row 1 of A and column 2 of B: 2 x 5 + (-1) x (-2) = 12 is the row 1, column 2 element of AB. AB has rows (2, 12), (3, 7) but BA has rows (17, 19), (-6, -8), so AB is not equal to BA. An m x n matrix times an n x p matrix gives m x p." loading="lazy">
  <figcaption>Each element of AB is a row of A times a column of B, and AB is not BA.</figcaption>
</figure>


## 1.14 Determinants and inverses

For a 2 × 2 matrix

```
A = | a  b |      det A = |A| = ad − bc
    | c  d |

A⁻¹ = (1 / (ad − bc)) × |  d  -b |      provided ad − bc ≠ 0
                         | -c   a |
```

Swap the leading diagonal, change the signs of the other two, and divide by the determinant. AA⁻¹ = A⁻¹A = I. If det A = 0 the matrix is **singular** and has no inverse.

For 3 × 3 and larger matrices, find the determinant and inverse with technology. Enter the matrix, use the det and inverse (x⁻¹) functions, and copy exact fractions where the GDC gives them.

### Worked example 3 (by hand)

Find the inverse of C, where the first row is (4, −2) and the second row is (3, 1).

det C = 4(1) − (−2)(3) = 4 + 6 = 10

```
C⁻¹ = (1/10) | 1   2 |  = | 0.1   0.2 |
             | -3  4 |    | -0.3  0.4 |
```

Check: C × C⁻¹ gives I. Always do this quick check on a 2 × 2 inverse.

A GDC example for n = 3: the matrix with rows (2, 1, 0), (1, 3, −1), (0, 2, 4) has determinant **24**, so it is invertible.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--02-determinant-area-scale.webp" width="900" height="902" alt="The matrix C sends the unit square to a parallelogram of area 10, so det C = 10 is the area scale factor. A singular matrix with determinant 0 squashes the square onto a line (area 0), so it has no inverse. C inverse is (1/10) times the matrix with rows (1, 2) and (-3, 4)." loading="lazy">
  <figcaption>The determinant is the area scale factor, and a zero determinant squashes the plane flat so there is no inverse.</figcaption>
</figure>


## 1.14 Systems of equations: Ax = b

A system of linear equations can be written as **Ax = b**, where A is the coefficient matrix, x is the column of unknowns and b is the column of constants. If A is invertible, multiply both sides on the **left** by A⁻¹:

x = A⁻¹b

The guide states that in examinations A will always be invertible, except when you are solving for eigenvectors.

### Worked example 4 (technology)

A cinema charges one price for an adult, one for a child and one for a senior. Three bookings cost:

- 2 adults, 3 children, 1 senior: 54 dollars
- 1 adult, 2 children, 2 seniors: 44 dollars
- 3 adults, 1 child, 1 senior: 52 dollars

Let a, c and s be the prices.

```
| 2  3  1 | | a |   | 54 |
| 1  2  2 | | c | = | 44 |
| 3  1  1 | | s |   | 52 |
```

With the GDC, det A = 10 ≠ 0, so A⁻¹ exists. Then x = A⁻¹b gives **a = 12, c = 7, s = 9**: 12 dollars per adult, 7 per child and 9 per senior. Substitute back into one equation to check: 2(12) + 3(7) + 9 = 54.

### Coding and decoding messages

Give each letter a number (A = 1, B = 2, …, Z = 26). Split the message into pairs and write each pair as a column vector. Multiply each column by an encoding matrix E. To decode, multiply each coded column by E⁻¹.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--04-coding-a-message.webp" width="900" height="1076" alt="MATH becomes 13, 1, 20, 8 and the pairs (13, 1), (20, 8). Multiplying by E with rows (3, 1), (5, 2) gives (40, 67) and (68, 116). Multiplying by E inverse, rows (2, -1), (-5, 3), returns the original pairs, which decode to MATH." loading="lazy">
  <figcaption>Multiply pairs of letter numbers by E to code a message and by E inverse to decode it.</figcaption>
</figure>


### Worked example 5

Encode "MATH" with E, where E has rows (3, 1) and (5, 2).

M = 13, A = 1, T = 20, H = 8, so the columns are (13, 1) and (20, 8).

```
E | 13 | = | 3(13)+1(1) | = | 40 |      E | 20 | = | 68  |
  |  1 |   | 5(13)+2(1) |   | 67 |        |  8 |   | 116 |
```

The coded message is 40, 67, 68, 116. To decode, det E = 6 − 5 = 1, so E⁻¹ has rows (2, −1) and (−5, 3). Then E⁻¹(40, 67) = (80 − 67, −200 + 201) = (13, 1), which is "MA". An encoding matrix with determinant ±1 keeps the decoded values as whole numbers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--03-solving-ax-equals-b.webp" width="900" height="870" alt="Three bookings are drawn as rows of ticket blocks: 2 adult, 3 child, 1 senior = 54 dollars; 1, 2, 2 = 44 dollars; 3, 1, 1 = 52 dollars. det A = 10 so A inverse exists and x = A inverse b gives adult 12, child 7, senior 9 dollars." loading="lazy">
  <figcaption>Writing the bookings as Ax = b and multiplying by A inverse gives the three prices.</figcaption>
</figure>


## 1.15 Eigenvalues and eigenvectors

A non-zero vector v is an **eigenvector** of a square matrix M, with **eigenvalue** λ, if

Mv = λv

Multiplying v by M only stretches it by the factor λ; its direction line is unchanged. Rearranging gives (M − λI)v = 0. A non-zero solution exists only when M − λI is singular, so

det(M − λI) = 0

For a 2 × 2 matrix, det(M − λI) is a quadratic in λ called the **characteristic polynomial**. Its roots are the eigenvalues. For each eigenvalue, solve (M − λI)v = 0 to get an eigenvector. Any non-zero multiple of an eigenvector is also an eigenvector.

The guide expects these calculations by hand and with technology for 2 × 2 matrices only.

### Worked example 6 (by hand)

Find the eigenvalues and eigenvectors of M, with rows (4, 1) and (2, 3).

```
det(M − λI) = (4 − λ)(3 − λ) − (1)(2)
            = λ² − 7λ + 10
            = (λ − 5)(λ − 2)
```

The eigenvalues are **λ = 5 and λ = 2**.

For λ = 5: M − 5I has rows (−1, 1) and (2, −2). The first row gives −x + y = 0, so y = x. An eigenvector is **(1, 1)**.

For λ = 2: M − 2I has rows (2, 1) and (2, 1). So 2x + y = 0, giving y = −2x. An eigenvector is **(1, −2)**.

Check: M(1, −2) = (4 − 2, 2 − 6) = (2, −4) = 2(1, −2). Correct.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--05-eigenvector-keeps-its-line.webp" width="900" height="1122" alt="The matrix M with rows (4, 1), (2, 3) sends v1 = (1, 1) to 5v1 and v2 = (1, -2) to 2v2, both staying on their dashed lines, so they are eigenvectors. The vector w = (1, 0) goes to (4, 2), which points in a new direction, so it is not an eigenvector." loading="lazy">
  <figcaption>An eigenvector is only stretched by M: it stays on the same line through the origin.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--06-characteristic-polynomial.webp" width="900" height="1004" alt="The graph of det(M - lambda I) = (4 - lambda)(3 - lambda) - 2 = lambda squared - 7 lambda + 10 is a parabola crossing the lambda axis at 2 and 5. These roots are the eigenvalues of M." loading="lazy">
  <figcaption>The eigenvalues are the roots of the characteristic polynomial det(M - lambda I).</figcaption>
</figure>


## 1.15 Diagonalization and powers

If a 2 × 2 matrix M has two distinct real eigenvalues λ₁ and λ₂, with eigenvectors v₁ and v₂, then

M = PDP⁻¹

where P has the eigenvectors as its **columns** and D is the diagonal matrix with λ₁ and λ₂ on the leading diagonal, **in the same order**. It follows that

Mⁿ = PDⁿP⁻¹

and Dⁿ just raises each diagonal element to the power n. The syllabus restricts diagonalization to the case of distinct real eigenvalues.

### Worked example 7

Using worked example 6, find an expression for Mⁿ.

```
P = | 1   1 |     D = | 5  0 |     P⁻¹ = (1/−3) | -2  -1 |  = (1/3) | 2   1 |
    | 1  -2 |         | 0  2 |                  | -1   1 |          | 1  -1 |
```

```
Mⁿ = PDⁿP⁻¹ = (1/3) | 2·5ⁿ + 2ⁿ      5ⁿ − 2ⁿ   |
                    | 2·5ⁿ − 2·2ⁿ    5ⁿ + 2·2ⁿ |
```

Check with n = 3: the top-left element is (2(125) + 8)/3 = 86, which matches M³ found directly on a GDC.

### Worked example 8: movement between two towns

Each year 10% of the people in Aville move to Bton and 20% of the people in Bton move to Aville. Nobody else arrives or leaves. At the start there are 3000 people in Aville and 6000 in Bton.

Write the populations as a column (a, b). Then xₙ₊₁ = Txₙ, where

```
T = | 0.9  0.2 |      (column 1: from Aville, column 2: from Bton)
    | 0.1  0.8 |
```

Characteristic polynomial: (0.9 − λ)(0.8 − λ) − 0.02 = λ² − 1.7λ + 0.7 = (λ − 1)(λ − 0.7).

- λ = 1: −0.1a + 0.2b = 0, so an eigenvector is (2, 1).
- λ = 0.7: 0.2a + 0.2b = 0, so an eigenvector is (1, −1).

Write x₀ = 3000(2, 1) − 3000(1, −1). Since Tⁿ multiplies each eigenvector by λⁿ:

xₙ = 3000(2, 1) − 3000(0.7)ⁿ(1, −1)

So Aville has 6000 − 3000(0.7)ⁿ people and Bton has 3000 + 3000(0.7)ⁿ. After 5 years, Aville has 6000 − 3000(0.16807) ≈ **5496** and Bton ≈ **3504**. As n grows, (0.7)ⁿ → 0, so the populations approach **6000 and 3000**. The same method models predator/prey numbers when the matrix has distinct real eigenvalues.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--07-powers-via-eigenvectors.webp" width="900" height="1166" alt="The vector x0 = (0, 3) equals v1 - v2. Applying M stretches the v1 part by 5 and the v2 part by 2, giving M x0 = 5v1 - 2v2 = (3, 9). In general M to the n times x0 = 5 to the n v1 - 2 to the n v2, which is why M to the n = P D to the n P inverse." loading="lazy">
  <figcaption>Splitting a vector into eigenvector parts lets each part be scaled by its own eigenvalue to the power n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-matrices-eigenvalues--08-two-towns-steady-state.webp" width="900" height="990" alt="Aville rises from 3000 towards 6000 as 6000 - 3000(0.7)^n and Bton falls from 6000 towards 3000. After 5 years there are about 5496 and 3504 people. The long-run split 6000 : 3000 = 2 : 1 is the eigenvector (2, 1) for eigenvalue 1." loading="lazy">
  <figcaption>The populations approach a steady state because 0.7 to the n fades away.</figcaption>
</figure>


## Common errors

- Writing the order as columns × rows. A matrix with 2 rows and 3 columns is 2 × 3.
- Multiplying element by element instead of row by column.
- Assuming AB = BA, or writing (A + B)² = A² + 2AB + B². The correct expansion is A² + AB + BA + B².
- Writing x = bA⁻¹. The product bA⁻¹ is not even defined when b is a column; x = A⁻¹b.
- Changing the signs of the leading diagonal in a 2 × 2 inverse instead of swapping them.
- Giving (0, 0) as an eigenvector. Eigenvectors must be non-zero.
- Putting eigenvalues in D in a different order from the eigenvector columns in P.
- Writing Mⁿ = PⁿDⁿ(P⁻¹)ⁿ. Only D is raised to the power n.
- Mixing up rows and columns of a transition matrix. State which column is "from" which town.

## Where to go next

Related AI resources: the [geometry and trigonometry study guide](/resources/ib-dp-mathematics-ai-geometry-trigonometry/), the [statistics and probability study guide](/resources/ib-dp-mathematics-ai-statistics-probability/), the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), the [AI subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/) and [AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/).

For this unit, move on to the [revision notes](/resources/ib-dp-mathematics-ai-hl-matrices-eigenvalues-revision-notes/) and then the [practice questions](/resources/ib-dp-mathematics-ai-hl-matrices-eigenvalues-practice/).

## Frequently asked questions

**When can two matrices be multiplied?**
AB is defined only when the number of columns of A equals the number of rows of B. If A is m × n and B is n × p, then AB has order m × p.

**What does it mean if a matrix is singular?**
A singular matrix has determinant 0, so it has no inverse. The IB guide says the matrix A in Ax = b will be invertible in examinations.

**Is matrix multiplication commutative?**
No. Matrix multiplication is associative and distributive, but in general AB ≠ BA even when both products exist, so the order matters.

**What are eigenvalues used for in IB Maths AI HL applications?**
Diagonalizing a 2 × 2 matrix as M = PDP⁻¹ gives a formula for Mⁿ, which models repeated changes such as populations moving between towns each year. When one eigenvalue is 1 and the other has modulus less than 1, the model settles to a long-term state.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections AHL 1.14 and AHL 1.15.
