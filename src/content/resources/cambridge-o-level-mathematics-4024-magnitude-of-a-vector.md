---
title: "Cambridge O Level Mathematics (4024): Magnitude of a Vector"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Transformations and vectors"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 7.3
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-and-vectors"
    subtopic: "magnitude-of-a-vector-4024"
description: "Study guide to 4024 section 7.3: calculating the magnitude of a column vector with √(x² + y²), exact surd answers, unknown components and combined vectors."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 7.3, Magnitude of a vector, in the Transformations and vectors topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. It is a short section in the syllabus, but it appears inside many longer vector and coordinate questions, so it pays to be fluent. The overview page [Vectors in Two Dimensions: Column Vectors, Magnitude and Vector Geometry](/resources/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and/) introduces the formula; here you will find the variations examiners build on it. Afterwards, use the [magnitude of a vector revision notes](/resources/cambridge-o-level-mathematics-4024-magnitude-of-a-vector-revision-notes/) and the [magnitude of a vector practice questions](/resources/cambridge-o-level-mathematics-4024-magnitude-of-a-vector-practice/).

## What section 7.3 asks for

The single outcome is to **calculate the magnitude of a vector (x, y) as √(x² + y²)**. The syllabus notes that magnitudes are written with modulus signs: |**a**| is the magnitude of **a**, and |AB| is the magnitude of AB. On this page column vectors are typed as (x, y), with x on top.

## Why the formula works

Draw the vector (x, y) on a grid. It goes x units across and y units up, so it is the hypotenuse of a right-angled triangle with shorter sides of lengths |x| and |y|. Pythagoras' theorem gives the length:

```
|(x, y)| = √(x² + y²)
```

Because each component is squared, its sign makes no difference: (3, −4), (−3, 4) and (−3, −4) all have magnitude 5. A magnitude is a length, so it is never negative, and it is zero only for the zero vector (0, 0).

## Exact answers and rounding

Questions say how to give the answer. If they say "exact" or "in surd form", leave a square root, simplified as far as possible. If not, give 3 significant figures, as the syllabus requires for non-exact answers in general.

### Worked example 1

Find the magnitude of (a) (−8, 6), (b) (4, −2), giving (b) exactly and to 3 significant figures.

```
(a) √((−8)² + 6²) = √(64 + 36) = √100 = 10
(b) √(4² + (−2)²) = √(16 + 4) = √20 = √4 × √5 = 2√5 ≈ 4.47
```

On a calculator, put brackets round negative components, or square the positive value: −8² without brackets gives −64.

Some component pairs give whole-number magnitudes because they come from Pythagorean triples: (3, 4) gives 5, (5, 12) gives 13, (8, 15) gives 17 and (7, 24) gives 25. Multiples work too: (6, 8) gives 10. Recognising these saves time and acts as a check.

## Magnitude from two points

To find |AB| from coordinates, first find AB = B − A, then its magnitude. This is the same as the distance between A and B.

### Worked example 2

A is (−1, 3) and B is (5, −5). Find |AB|.

```
AB = (5 − (−1), −5 − 3) = (6, −8)
|AB| = √(36 + 64) = √100 = 10
```

|BA| is also 10: reversing a vector does not change its length.

## Magnitude of a combination

Always combine the vectors first, then find the magnitude. The magnitude of a sum is **not** usually the sum of the magnitudes.

### Worked example 3

a = (3, 4) and b = (5, −12). Find |a|, |b| and |a + b|.

```
|a| = √(9 + 16) = 5
|b| = √(25 + 144) = 13
a + b = (8, −8)
|a + b| = √(64 + 64) = √128 = 8√2 ≈ 11.3
```

|a + b| ≈ 11.3, while |a| + |b| = 18. The two are equal only when a and b point in the same direction. In the triangle formed by a, b and a + b, one side is always shorter than the other two together.

**Scalar multiples are the exception.** For any number k, |ka| = |k| × |a|. So |−3a| = 3 × 5 = 15. You can check: −3a = (−9, −12) and √(81 + 144) = √225 = 15.

## Finding an unknown component

If the magnitude is given, square both sides of the formula to remove the square root, then solve.

### Worked example 4

(a) The vector (k, −5) has magnitude 13. Find the possible values of k.

```
k² + 25 = 169
k² = 144
k = 12 or k = −12
```

Both values work, because squaring loses the sign. Give both unless the question restricts k, for example "k is negative".

(b) The vector (t, t + 1) has magnitude 5. Find t.

```
t² + (t + 1)² = 25
t² + t² + 2t + 1 = 25
2t² + 2t − 24 = 0
t² + t − 12 = 0
(t + 4)(t − 3) = 0
t = −4 or t = 3
```

Check: (3, 4) and (−4, −3) both have magnitude 5. This type links vectors with quadratic equations, so expand (t + 1)² carefully: it is t² + 2t + 1, not t² + 1.

## Using magnitudes in shapes

Magnitudes give side lengths, so they can answer questions about perimeters and the type of a triangle.

### Worked example 5

O is the origin, OA = (3, 4) and OB = (11, −2). Find the lengths of the sides of triangle OAB and show that the angle at A is a right angle.

```
|OA| = √(9 + 16) = 5
AB = OB − OA = (8, −6), so |AB| = √(64 + 36) = 10
|OB| = √(121 + 4) = √125 = 5√5 ≈ 11.2
```

5² + 10² = 25 + 100 = 125 = |OB|², so by the converse of Pythagoras the triangle has a right angle opposite OB, which is at A. The perimeter is 15 + 5√5 ≈ 26.2 units.

**Equal lengths, different directions.** (7, 1) and (5, 5) both have magnitude √50, but they are not equal vectors, because their components differ. Equal magnitude alone does not make vectors equal.

## Common mistakes

- Adding the components and then squaring, such as (x + y)², instead of x² + y².
- Forgetting the square root at the end.
- Calculator sign errors with negative components.
- Adding magnitudes when the question asks for the magnitude of a sum.
- Giving only the positive value of an unknown component.
- Rounding too early in a multi-step problem; keep surds or full calculator values until the end.

## Exam technique

- **Calculate** or **find |a|**: show the squares being added, then the root.
- **Give your answer in surd form**: simplify, so √20 becomes 2√5.
- **Show that**: the final line must be the stated value, reached by exact working.
- When vectors are given in letters, form the column first: if a = (2, 1), then |3a| needs 3a = (6, 3), or |3| × |a|.

## More on this topic

Try the [magnitude of a vector practice questions](/resources/cambridge-o-level-mathematics-4024-magnitude-of-a-vector-practice/) and recap with the [magnitude of a vector revision notes](/resources/cambridge-o-level-mathematics-4024-magnitude-of-a-vector-revision-notes/). For vector arithmetic, see [vectors in two dimensions](/resources/cambridge-o-level-mathematics-4024-vectors-in-two-dimensions/); for proofs in shapes, see [vector geometry](/resources/cambridge-o-level-mathematics-4024-vector-geometry/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 7.3 Magnitude of a vector.
