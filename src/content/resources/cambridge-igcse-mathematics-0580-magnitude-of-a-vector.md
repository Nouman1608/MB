---
title: "Cambridge IGCSE Mathematics (0580): Magnitude of a vector"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 7 – Transformations and vectors"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 7.3
syllabusTopics:
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "magnitude-of-a-vector-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E7.3: the magnitude √(x² + y²), modulus notation, exact surd answers, unknown entries and magnitudes in triangles and journeys."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **E7.3 Magnitude of a vector** in Topic 7 Transformations and vectors of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the Core column reads "Extended content only", so it is tested on Paper 2 (non-calculator) and Paper 4 (calculator).

The [vectors and magnitude study guide](/resources/igcse-mathematics-0580-vectors-and-magnitude/) introduces the formula. This page goes further: magnitudes from coordinates, exact answers, unknowns that lead to quadratic equations, using magnitudes to classify triangles, and why the magnitude of a sum is not the sum of the magnitudes. Revise with the [magnitude of a vector revision notes](/resources/cambridge-igcse-mathematics-0580-magnitude-of-a-vector-revision-notes/) and practise with the [magnitude of a vector practice questions](/resources/cambridge-igcse-mathematics-0580-magnitude-of-a-vector-practice/).

## What subtopic E7.3 asks for

The syllabus statement is: calculate the magnitude of a vector (x, y) as √(x² + y²).

The notes add that magnitudes are written with **modulus signs**: |**a**| is the magnitude of **a**, and |AB| (with an arrow over AB) is the magnitude of the vector AB.

## What magnitude means

The magnitude of a vector is its **length**. Draw the column vector (x, y) as an arrow: it is the hypotenuse of a right-angled triangle with a horizontal side of length x and a vertical side of length y. Pythagoras’ theorem gives

```
|(x, y)| = √(x² + y²)
```

Three facts follow.

- A magnitude is **never negative**: squaring removes the signs, so (−3, 4), (3, −4) and (−3, −4) all have magnitude 5.
- Reversing a vector does not change its length: |BA| = |AB|.
- Multiplying by a scalar k multiplies the length by the size of k: |k**a**| = |k| × |**a**|. For example, |−3 × (4, −3)| = 3 × 5 = 15.

A useful list of whole-number lengths (Pythagorean triples): 3, 4, 5; 5, 12, 13; 8, 15, 17; 7, 24, 25; 9, 40, 41; and their multiples, such as 6, 8, 10.

### Worked example 1: a whole-number answer (non-calculator)

Find |**v**| where **v** = (7, −24).

```
|v| = √(7² + (−24)²) = √(49 + 576) = √625 = 25
```

Write (−24)², with brackets, so the square is clearly positive.

### Worked example 2: an exact surd (non-calculator)

Find the exact magnitude of (6, −3).

```
√(6² + 3²) = √(36 + 9) = √45 = √(9 × 5) = 3√5
```

On Paper 2, "exact" means leave the square root, simplified. Simplifying surds is part of E1.18.

## Magnitude from two points

To find |AB| from coordinates, find the vector AB first (end minus start), then its magnitude. This is the same calculation as the length of a line segment in coordinate geometry.

### Worked example 3 (non-calculator)

A is (−1, 3) and B is (5, −5). Find |AB|.

```
AB = (5 − (−1), −5 − 3) = (6, −8)
|AB| = √(36 + 64) = √100 = 10
```

## Magnitude of a combination

Always combine first, then find the magnitude of the result.

### Worked example 4 (calculator)

**a** = (3, 1) and **b** = (−1, 5). Find |2**a** − **b**|.

```
2a − b = (6 − (−1), 2 − 5) = (7, −3)
|2a − b| = √(49 + 9) = √58 = 7.615... → 7.62 (3 s.f.)
```

### Worked example 5: |a + b| is not |a| + |b|

**a** = (3, 4) and **b** = (5, −12). Compare |**a** + **b**| with |**a**| + |**b**|.

```
|a| = 5,  |b| = 13,  |a| + |b| = 18
a + b = (8, −8),  |a + b| = √128 = 8√2 = 11.31...
```

The direct route is shorter than going along **a** and then along **b**, just as one side of a triangle is shorter than the other two together. The two values are equal only when **a** and **b** point in the same direction.

## Unknown entries

If a magnitude is given and an entry is unknown, square both sides to remove the root. There are often **two** answers.

### Worked example 6 (non-calculator)

The vector (k, 2k) has magnitude √80. Find the possible values of k.

```
k² + (2k)² = 80
k² + 4k² = 80
5k² = 80
k² = 16
k = 4  or  k = −4
```

Note (2k)² = 4k², not 2k².

### Worked example 7: a quadratic (non-calculator)

The vector (t, t + 1) has magnitude 5. Find t.

```
t² + (t + 1)² = 25
t² + t² + 2t + 1 = 25
2t² + 2t − 24 = 0
t² + t − 12 = 0
(t + 4)(t − 3) = 0
t = −4  or  t = 3
```

Check: t = 3 gives (3, 4), and t = −4 gives (−4, −3); both have magnitude 5.

### Worked example 8: a missing point (non-calculator)

A is (2, 1) and B is (x, 5). The length of AB is 5 units. Find the possible values of x.

```
AB = (x − 2, 4)
(x − 2)² + 4² = 25
(x − 2)² = 9
x − 2 = 3   or   x − 2 = −3
x = 5       or   x = −1
```

Both points, (5, 5) and (−1, 5), lie on the horizontal line y = 5, one on each side of A. Taking only the positive square root loses one of them.

## Magnitudes in geometry

Comparing magnitudes tells you which sides of a shape are equal, and Pythagoras' converse tells you whether there is a right angle.

### Worked example 9 (non-calculator)

A is (1, 2), B is (5, 5) and C is (8, 1). Show that triangle ABC is isosceles and right-angled.

```
AB = (4, 3)    |AB| = 5
BC = (3, −4)   |BC| = 5
AC = (7, −1)   |AC| = √50

|AB| = |BC|, so the triangle is isosceles.
|AB|² + |BC|² = 25 + 25 = 50 = |AC|², so angle ABC = 90°.
```

## Magnitude in context

A vector often stands for a displacement. A boat that moves through the displacement (−9, 12), in kilometres, ends **15 km** from its start, because √(81 + 144) = √225 = 15. The distance it actually sails may be longer if it took a curved or multi-stage route.

## Paper 2 and Paper 4

On Paper 2 the numbers are chosen so that the answer is a whole number or a surd you can simplify; look for a Pythagorean triple first. On Paper 4 the entries may be decimals, and you give the magnitude to 3 significant figures unless it is exact.

## Common mistakes

- Forgetting the square root and giving x² + y² as the answer.
- Writing −3² as −9 inside the formula. Use (−3)² = 9.
- Adding the magnitudes of two vectors instead of finding the magnitude of their sum.
- Giving only the positive value when an unknown entry is squared.
- Expanding (2k)² as 2k² or (t + 1)² as t² + 1.
- Rounding a surd when the question asks for an exact value.

## Exam technique

- **Find the exact value**: simplified surd form, such as 3√5, not 6.71.
- **Show that** |**v**| = 13: write √(5² + 12²) = √169 = 13 in full.
- **Calculate** on Paper 4: give 3 significant figures unless the answer is exact.
- If the vector is given as AB, find its entries first and write them down; the method mark is usually for that line.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 7 Transformations and vectors, E7.3 Magnitude of a vector (Extended subject content), with C7.3 marked "Extended content only". See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
