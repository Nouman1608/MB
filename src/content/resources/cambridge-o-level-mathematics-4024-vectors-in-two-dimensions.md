---
title: "Cambridge O Level Mathematics (4024): Vectors in Two Dimensions"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Transformations and vectors"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 7.2
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-and-vectors"
    subtopic: "vectors-in-two-dimensions-4024"
description: "Study guide to 4024 section 7.2: describing translations with column vectors, adding and subtracting vectors, scalar multiples and solving vector equations."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 7.2, Vectors in two dimensions, of the Transformations and vectors topic in the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Every candidate studies it. The page [Vectors in Two Dimensions: Column Vectors, Magnitude and Vector Geometry](/resources/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and/) gives an overview of the whole vectors unit; this guide goes further into the three 7.2 skills and the algebra they lead to. Check your understanding with the [vectors in two dimensions revision notes](/resources/cambridge-o-level-mathematics-4024-vectors-in-two-dimensions-revision-notes/) and the [vectors in two dimensions practice questions](/resources/cambridge-o-level-mathematics-4024-vectors-in-two-dimensions-practice/).

## What section 7.2 asks for

| Outcome | What you must be able to do |
|---|---|
| 7.2 (1) | Describe a translation using a column vector, a vector named by two letters such as AB, or a single letter such as a |
| 7.2 (2) | Add and subtract vectors |
| 7.2 (3) | Multiply a vector by a scalar |

The syllabus notes that vectors are printed as AB (with an arrow above) or as a bold letter **a**. On this page a column vector with top number x and bottom number y is written (x, y). In your own handwriting, show a single-letter vector by underlining it, because you cannot write in bold.

## Reading and writing column vectors

The top number is the movement parallel to the x-axis (positive to the right), and the bottom number is the movement parallel to the y-axis (positive upwards). So (−3, 2) means 3 left and 2 up.

To find the vector from a point P to a point Q from their coordinates, subtract: **PQ = (x of Q − x of P, y of Q − y of P)**. Always "end minus start".

### Worked example 1

P is (−1, 4) and Q is (5, −2). Find PQ and QP.

```
PQ = (5 − (−1), −2 − 4) = (6, −6)
QP = (−1 − 5, 4 − (−2)) = (−6, 6)
```

QP = −PQ: reversing the direction changes both signs. Two vectors are **equal** when both components match, wherever they are drawn on the grid; a vector has size and direction but no fixed position.

## Translations described by vectors

A translation slides every point of a shape by the same vector. If a triangle has vertices (1, 1), (4, 1) and (1, 3), the translation (2, −5) maps them to (3, −4), (6, −4) and (3, −2). To describe a translation shown on a grid, choose one vertex and its image and count the movement across and up. Check with a second vertex: the vector must be the same.

**Combining translations.** A translation by u followed by a translation by v is a single translation by u + v. The inverse of a translation by u is a translation by −u.

### Worked example 2

T₁ is the translation (2, −5) and T₂ is the translation (−4, 1).

(a) The point (7, 3) is translated by T₁ and then by T₂. Find its final position.

(b) Describe the single transformation that undoes T₁.

```
(a) T₁ then T₂ = (2 + (−4), −5 + 1) = (−2, −4)
    (7, 3) → (7 − 2, 3 − 4) = (5, −1)
(b) The inverse is the translation (−2, 5).
```

When you describe a translation in words, use the word **translation** and give the column vector. "Moved by (−2, 5)" does not name the transformation.

## Adding and subtracting

Add or subtract the top numbers, then the bottom numbers.

On a diagram, a + b means: draw a, then draw b starting where a ends. The result goes from the start of a to the end of b. This is the **triangle rule**. a − b is the same as a + (−b): draw a, then draw b reversed.

### Worked example 3

a = (3, −1) and b = (−2, 4). Find (a) a + b, (b) a − b, (c) the vector c such that a + c = b.

```
(a) a + b = (3 + (−2), −1 + 4) = (1, 3)
(b) a − b = (3 − (−2), −1 − 4) = (5, −5)
(c) c = b − a = (−2 − 3, 4 − (−1)) = (−5, 5)
```

Part (c) is an equation in vectors. You rearrange it exactly as you would with numbers: subtract a from both sides.

## Multiplying by a scalar

A scalar is a number. ka multiplies both components by k.

- k > 1 stretches the vector; 0 < k < 1 shortens it.
- k < 0 reverses the direction as well.
- ka always lies along the same line as a. If one vector is a number times another, the two are parallel; section 7.4 uses this in geometry.

So with a = (3, −1): 2a = (6, −2), −a = (−3, 1) and ½a = (1.5, −0.5). Recognising multiples is useful: (−6, 2) is −2a, because both components are −2 times those of a.

### Worked example 4

With a = (3, −1) and b = (−2, 4), find 2a − 3b.

```
2a = (6, −2)
3b = (−6, 12)
2a − 3b = (6 − (−6), −2 − 12) = (12, −14)
```

Write the scaled vectors on their own line before subtracting. Most errors happen when the scaling and the subtraction are done in one step.

## Solving vector equations

Because each component must match, one vector equation gives **two ordinary equations**: one from the top line and one from the bottom line.

### Worked example 5

(a) Find k and m such that (k, 3) + 2(1, m) = (7, −5).

```
Top:    k + 2 = 7     so k = 5
Bottom: 3 + 2m = −5   so m = −4
```

(b) With a = (3, −1) and b = (−2, 4), find p and q such that pa + qb = (0, 10).

```
Top:    3p − 2q = 0
Bottom: −p + 4q = 10
```

From the top equation, p = 2q ÷ 3. Substitute: −2q ÷ 3 + 4q = 10, so 10q ÷ 3 = 10 and q = 3. Then p = 2.

**Check:** 2a + 3b = (6, −2) + (−6, 12) = (0, 10). Substituting back is always worth the time.

## Common mistakes

- Writing PQ as start minus end, which reverses the vector.
- Swapping the components: the top number is across, the bottom number is up.
- Sign errors when subtracting a negative, such as 3 − (−2).
- Multiplying only one component by the scalar.
- Writing a vector answer as a coordinate pair. This page uses (3, −1) for a column only for typing; in the exam, write the numbers one above the other.
- Describing a translation without the word "translation" or without the vector.

## Exam technique for the command words

- **Write down** or **write as a column vector**: give the column; no working is expected but the answer must be exact.
- **Find** or **calculate**: show each scaled vector, then the combination.
- **Describe fully the single transformation**: name it as a translation and give its column vector.
- **Express in terms of a and b**: answer with letters, not columns.

## More on this topic

Try the [vectors in two dimensions practice questions](/resources/cambridge-o-level-mathematics-4024-vectors-in-two-dimensions-practice/) and recap with the [vectors in two dimensions revision notes](/resources/cambridge-o-level-mathematics-4024-vectors-in-two-dimensions-revision-notes/). Section 7.3 continues with the length of a vector: see [magnitude of a vector](/resources/cambridge-o-level-mathematics-4024-magnitude-of-a-vector/). Section 7.4 applies vectors to shapes: see [vector geometry](/resources/cambridge-o-level-mathematics-4024-vector-geometry/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 7.2 Vectors in two dimensions.
