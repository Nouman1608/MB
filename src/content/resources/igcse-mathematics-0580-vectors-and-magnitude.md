---
title: "Cambridge IGCSE Mathematics 0580: Vectors in two dimensions and magnitude of a vector -- Study Guide"
seoTitle: "IGCSE Maths 0580 Vectors and Magnitude Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Vectors in two dimensions and magnitude of a vector"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "vectors-in-two-dimensions-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "magnitude-of-a-vector-cambridge-igcse-maths"
description: "Study guide for Cambridge IGCSE Maths 0580 subtopics E7.2 and E7.3: column vectors, adding, subtracting, scaling and finding magnitude."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches subtopics 7.2 (Vectors in two dimensions) and 7.3 (Magnitude of a vector) from topic 7, Transformations and vectors, of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. **Both subtopics are Extended only.** The Core column of the syllabus says "Extended content only" at C7.2 and C7.3, so this work is examined on Paper 2 (non-calculator) and Paper 4 (calculator), not on Core Papers 1 and 3. Core candidates still need translation by a column vector, which sits in C7.1 and is covered in the topic study guide.

Use this page with the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/) and the [printable 0580 checklist](/checklists/cambridge/igcse/mathematics/). For the whole of topic 7, including transformations and vector geometry, see the [Transformations and vectors study guide](/resources/igcse-mathematics-transformations-and-vectors/).

## What these subtopics cover

| 0580 reference | What you must be able to do | Tier |
|---|---|---|
| E7.2.1 | Describe a translation using a vector written as a column vector, as AB (with an arrow) or as **a** | Extended only |
| E7.2.2 | Add and subtract vectors | Extended only |
| E7.2.3 | Multiply a vector by a scalar | Extended only |
| E7.3 | Calculate the magnitude of a column vector with top entry x and bottom entry y as √(x² + y²) | Extended only |

Two notes from the syllabus matter for how questions look:

- **Notation.** Vectors are printed as AB with an arrow above the letters, or as a bold lower-case letter such as **a**. You cannot write bold by hand, so the usual convention is to underline the letter: a with a line under it.
- **Modulus signs.** The magnitude of **a** is written |**a**|, and the magnitude of AB is written |AB|.

The magnitude formula is not on the List of formulas printed on page 2 of Papers 2 and 4. You must recall it.

In running text this page writes a column vector as "the column vector (x, y)", x on top; in worked examples it is stacked, as in the exam.

## 7.2 Describing a translation with a vector

A translation slides every point of a shape the same distance in the same direction. A column vector records that movement:

```
( x )   x = movement across: positive to the right, negative to the left
( y )   y = movement up/down: positive up, negative down
```

So the column vector (−2, 5) means "2 left, 5 up". It does not say where the movement starts. Any two arrows with the same length and the same direction represent the same vector.

### Worked example 1: the vector between two points

A translation maps point P(−3, 5) onto point Q(4, −1). Write the translation as a column vector, then write the vector QP.

Work out how far you move in each direction, always **finish minus start**:

```
across: 4 − (−3) = 7      (7 to the right)
up:    −1 − 5    = −6     (6 down)

      (  7 )
PQ =  ( −6 )
```

The vector QP goes the other way, so both signs change:

```
      ( −7 )
QP =  (  6 )
```

QP is the **negative** of PQ: QP = −PQ. Same length, opposite direction.

### Worked example 2: applying a translation

Triangle T has vertices A(1, 2), B(4, 2) and C(1, 6). It is translated by the column vector (−5, 3). Find the vertices of the image, and the vector that maps the image back onto T.

Add the vector to each point: subtract 5 from every x-coordinate and add 3 to every y-coordinate.

```
A(1, 2) → (1 − 5, 2 + 3) = (−4, 5)
B(4, 2) → (4 − 5, 2 + 3) = (−1, 5)
C(1, 6) → (1 − 5, 6 + 3) = (−4, 9)
```

To undo the translation, reverse it: the column vector (5, −3).

When a question says "describe fully the single transformation", you need **both** the word "translation" and the column vector. The vector alone is not a description.

## 7.2 Adding and subtracting vectors

### Adding

Add the top entries, then add the bottom entries. Geometrically, **a** + **b** means "do translation **a**, then do translation **b**". The single translation that has the same effect is **a** + **b**. In letters, AB + BC = AC: going from A to B and then from B to C gets you from A to C.

### Subtracting

Subtract entry by entry. It helps to think of **a** − **b** as **a** + (−**b**): add the vector that points the opposite way to **b**. Order matters: **a** − **b** and **b** − **a** are negatives of each other.

### Worked example 3

**p** is the column vector (5, −2) and **q** is the column vector (−1, 7). Find **p** + **q**, **p** − **q** and **q** − **p**.

```
          (  5 )   ( −1 )   (  5 + (−1) )   ( 4 )
p + q  =  ( −2 ) + (  7 ) = ( −2 + 7    ) = ( 5 )

          (  5 )   ( −1 )   (  5 − (−1) )   (  6 )
p − q  =  ( −2 ) − (  7 ) = ( −2 − 7    ) = ( −9 )

          ( −1 )   (  5 )   ( −1 − 5    )   ( −6 )
q − p  =  (  7 ) − ( −2 ) = (  7 − (−2) ) = (  9 )
```

Check: **q** − **p** is exactly −(**p** − **q**), as it must be.

Sign errors happen on "minus a negative". Write the bracket in, as above, before you simplify.

## 7.2 Multiplying a vector by a scalar

A **scalar** is an ordinary number. To multiply a vector by a scalar k, multiply **both** entries by k.

What k does to the arrow:

| Value of k | Effect on the vector |
|---|---|
| k > 1 | same direction, longer |
| 0 < k < 1 | same direction, shorter |
| k = −1 | same length, opposite direction |
| k < 0 | opposite direction, length multiplied by the size of k |

In every case k**a** is **parallel** to **a**. Showing that one vector is a scalar multiple of another is the key move in vector geometry proofs, which belong to E7.4.

### Worked example 4

**r** is the column vector (6, −4). Find 3**r**, −2**r** and ½**r**. Then, with **p** and **q** from Worked example 3, find 3**p** − 2**q**.

```
3r   = (3 × 6,  3 × (−4))  = (18, −12)
−2r  = (−2 × 6, −2 × (−4)) = (−12, 8)
½r   = (½ × 6,  ½ × (−4))  = (3, −2)
```

(Each answer above is a column vector, written across to save space.)

For a combination, scale first, then add or subtract:

```
         (  15 )   ( −2 )   ( 15 − (−2) )   (  17 )
3p − 2q = ( −6 ) − ( 14 ) = ( −6 − 14   ) = ( −20 )
```

### Worked example 5: finding unknowns

Find x and y if the column vector (x, 4) plus 3 times the column vector (2, y) equals the column vector (11, −5).

Two vectors are equal only when their top entries are equal **and** their bottom entries are equal. So split the vector equation into two ordinary equations:

```
top:     x + 3 × 2 = 11   →  x + 6 = 11   →  x = 5
bottom:  4 + 3y    = −5   →  3y = −9      →  y = −3
```

**x = 5, y = −3.**

### Worked example 6: writing one vector in terms of two others

**a** is the column vector (2, 1) and **b** is the column vector (−1, 3). Find the numbers m and n such that m**a** + n**b** is the column vector (1, 11).

Compare top entries and bottom entries:

```
top:     2m − n  = 1     ... (1)
bottom:  m + 3n  = 11    ... (2)
```

From (1), n = 2m − 1. Substitute into (2):

```
m + 3(2m − 1) = 11
m + 6m − 3    = 11
7m            = 14   →  m = 2
n = 2(2) − 1  = 3
```

**m = 2, n = 3.** Check: 2**a** + 3**b** = (4, 2) + (−3, 9) = (1, 11). Correct.

This is a pair of simultaneous equations (E2.5). Always substitute back as a check.

## 7.3 Magnitude of a vector

The **magnitude** of a vector is its length. For the column vector (x, y), the arrow is the hypotenuse of a right-angled triangle with horizontal side x and vertical side y. Pythagoras' theorem gives:

```
|a| = √(x² + y²)
```

Squaring removes any minus sign, so a magnitude is never negative. The direction of the vector makes no difference: |AB| = |BA|.

### Worked example 7 (non-calculator)

Find the magnitude of the column vector (−8, 15).

```
|v| = √((−8)² + 15²)
    = √(64 + 225)
    = √289
    = 17
```

Put a negative entry in brackets before squaring. Without them, −8² can be misread as −64.

### Worked example 8: exact answer in surd form (non-calculator)

Find the exact magnitude of the column vector (4, −6).

```
|v| = √(4² + (−6)²) = √(16 + 36) = √52
√52 = √(4 × 13) = 2√13
```

**2√13.** On Paper 2, "exact" means leave the surd; simplifying surds is part of E1.18.

### Worked example 9 (calculator)

A translation maps A(1, −4) onto B(6, 3). Find |AB|.

```
       ( 6 − 1    )   ( 5 )
AB  =  ( 3 − (−4) ) = ( 7 )

|AB| = √(5² + 7²) = √74 = 8.602325...
```

**|AB| = 8.60** (3 s.f.). The syllabus asks for non-exact answers to 3 significant figures unless the question says otherwise, so keep the final zero: 8.6 is only 2 significant figures.

Finding |AB| from coordinates is the same calculation as the length of a line segment in E3.4.

### Worked example 10: magnitude of a combination

**a** is the column vector (3, −1) and **b** is the column vector (−2, 4). Find |2**a** − **b**| and compare |**a** + **b**| with |**a**| + |**b**|.

Find the vector first, then its magnitude:

```
2a − b = (6, −2) − (−2, 4) = (8, −6)
|2a − b| = √(8² + (−6)²) = √100 = 10

a + b = (1, 3)
|a + b| = √(1² + 3²) = √10 = 3.16 (3 s.f.)

|a| = √10 = 3.162...,  |b| = √20 = 4.472...
|a| + |b| = 7.63 (3 s.f.)
```

So |**a** + **b**| is **not** |**a**| + |**b**|. Never work out magnitudes separately and add them.

### Worked example 11: an unknown entry

The column vector (k, −24) has magnitude 25. Find the possible values of k.

```
k² + (−24)² = 25²
k² + 576    = 625
k²          = 49
k           = 7 or k = −7
```

Both values work, because squaring hides the sign. Give both unless the question restricts k.

### Worked example 12: a vector with a given magnitude

Find a vector of magnitude 25 that is parallel to the column vector (8, −6).

```
|(8, −6)| = √(64 + 36) = √100 = 10
25 ÷ 10 = 2.5
2.5 × (8, −6) = (20, −15)
```

The column vector (20, −15) works, and so does (−20, 15), which points the opposite way. This combines E7.2 (scalar multiples are parallel) with E7.3 (magnitude).

## Paper 2 and Paper 4

Both Extended papers can test this content.

- **Paper 2 (non-calculator):** expect whole-number arithmetic with negatives, Pythagorean triples such as 8, 15, 17, and exact surd answers. Practise the squares up to 25² so the arithmetic is quick.
- **Paper 4 (calculator):** magnitudes are often not exact. Write the unrounded root (√74) before the decimal, and round only at the end. If you use a magnitude later in the question, use the unrounded value.

## Common errors

- Working out a translation vector as **start minus finish**. It is finish minus start; check one point by adding the vector back.
- Losing a sign on "minus a negative" in subtraction, especially in 3**p** − 2**q** type questions.
- Multiplying only the top entry by the scalar.
- Forgetting the square root, so giving 289 instead of 17.
- Squaring a negative entry without brackets and getting −64 instead of 64.
- Adding magnitudes instead of adding vectors first.
- Giving only the positive root when the unknown could be negative.
- Rounding √74 to 8.6 instead of 8.60.

## Where this leads

E7.4 Vector geometry (Extended only) builds directly on this page. You represent vectors as directed line segments, use position vectors, write routes through a diagram in terms of two given vectors, and use scalar multiples to show that lines are parallel or that three points are collinear. The [Transformations and vectors study guide](/resources/igcse-mathematics-transformations-and-vectors/) has a worked parallel-lines proof.

Recap the whole topic with the [Transformations and vectors revision notes](/resources/igcse-mathematics-transformations-and-vectors-revision-notes/) and test yourself with the [Transformations and vectors practice questions](/resources/igcse-mathematics-transformations-and-vectors-practice/). If the Pythagoras step feels shaky, the [Pythagoras' theorem study guide](/resources/igcse-mathematics-0580-pythagoras-theorem/) covers it, and the [Coordinate geometry study guide](/resources/igcse-mathematics-coordinate-geometry/) covers length and midpoint. Check where you stand with the [Extended diagnostic](/practice/0580/diagnostic/extended/) (or the [Core diagnostic](/practice/0580/diagnostic/core/) if you sit Core).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027* (Version 3), Subject content, topic 7 Transformations and vectors: E7.2 Vectors in two dimensions and E7.3 Magnitude of a vector (Extended only; C7.2 and C7.3 are marked "Extended content only"). Linked references: C7.1/E7.1 Transformations, E7.4 Vector geometry, E1.18 Surds, E2.5 Equations and E3.4 Length and midpoint.
