---
title: "Cambridge IGCSE Mathematics (0580): Vectors in two dimensions"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 7 – Transformations and vectors"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 7.2
syllabusTopics:
  - qualification: "igcse"
    topic: "transformations-and-vectors-cambridge-igcse-maths"
    subtopic: "vectors-in-two-dimensions-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic E7.2: vector notation, translations as vectors, adding, subtracting and scaling column vectors, and solving vector equations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **E7.2 Vectors in two dimensions** in Topic 7 Transformations and vectors of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only**: the Core column reads "Extended content only", so it is tested on Paper 2 (non-calculator) and Paper 4 (calculator). Core candidates meet column vectors only as translations in 7.1.

The [vectors and magnitude study guide](/resources/igcse-mathematics-0580-vectors-and-magnitude/) introduces column vectors and their arithmetic. This page adds the meaning of the notation, journeys made of several vectors, the pictures behind addition and subtraction, scalar multiples and vector equations with unknowns on both sides. Revise with the [vectors in two dimensions revision notes](/resources/cambridge-igcse-mathematics-0580-vectors-in-two-dimensions-cambridge-igcse-maths-revision-notes/) and practise with the [vectors in two dimensions practice questions](/resources/cambridge-igcse-mathematics-0580-vectors-in-two-dimensions-cambridge-igcse-maths-practice/).

## What subtopic E7.2 asks for

| Statement | What you must be able to do |
|---|---|
| E7.2.1 | Describe a translation using a vector represented by a column vector (x, y), by AB with an arrow above it, or by **a** |
| E7.2.2 | Add and subtract vectors |
| E7.2.3 | Multiply a vector by a scalar |

The syllabus notes say vectors will be printed as AB (with an arrow) or as **a** in bold. In handwriting, show a vector by underlining the letter (a with a line beneath) or drawing the arrow; a plain letter a means an ordinary number.

On this page a column vector is written (x, y): x is the top number and y the bottom number.

## What a vector is

A vector has a **size** and a **direction**, but no fixed position. The column vector (3, −2) means "3 right and 2 down" wherever you start. Two consequences follow.

- **Equal vectors**: any two arrows with the same length and direction are the same vector. In a parallelogram ABCD, AB and DC (both with arrows) are equal.
- **Negative vectors**: −**a** has the same length as **a** and points the opposite way. Reversing the letters reverses the vector: BA = −AB.

The **zero vector**, (0, 0), is the result of going somewhere and coming back.

## Describing a translation with a vector

The vector from point A to point B is **end minus start** in each coordinate.

### Worked example 1: the vector between two points (non-calculator)

A translation maps A(−2, 4) onto B(3, −1). Write the translation as a column vector, then find BA.

```
across: 3 − (−2) = 5
up:    −1 − 4    = −5
AB = (5, −5)         BA = (−5, 5)
```

Each point of a shape moves by the same vector, so (5, −5) describes the whole translation.

## Adding vectors: journeys

Adding vectors means doing one movement after another. The single vector with the same effect is called the **resultant**. On a diagram, place the arrows **nose to tail**; the resultant goes from the start of the first to the end of the last. In letters: AB + BC = AC, with arrows.

### Worked example 2: a three-stage journey (non-calculator)

A robot on a grid moves by **p** = (3, 2), then **q** = (−1, 4), then **r** = (2, −5). Find the single vector for the whole journey and the vector that takes the robot straight back to its start.

```
p + q + r = (3 − 1 + 2, 2 + 4 − 5) = (4, 1)
return vector = −(4, 1) = (−4, −1)
```

The order of the stages does not change the resultant: vector addition can be done in any order.

## Subtracting vectors

**a** − **b** means **a** + (−**b**): go along **a**, then go backwards along **b**. If **a** and **b** start from the same point, **a** − **b** is the arrow from the end of **b** to the end of **a**. This picture is the reason for the rule AB = **b** − **a** when OA = **a** and OB = **b**, which you will use in [vector geometry](/resources/cambridge-igcse-mathematics-0580-vector-geometry-cambridge-igcse-maths/).

Order matters: **b** − **a** = −(**a** − **b**).

## Multiplying by a scalar

A **scalar** is an ordinary number. k**a** multiplies both entries by k.

- k > 0: same direction as **a**, k times as long.
- k < 0: opposite direction, the size of k times as long.
- k = 0: the zero vector.

So k**a** is always **parallel** to **a**. Two column vectors are parallel exactly when one is a scalar multiple of the other: (−9, 6) = −1.5 × (6, −4), so they are parallel; (3, 2) is not a multiple of (6, −4).

### Worked example 3: combining (non-calculator)

**a** = (2, −3) and **b** = (−4, 1). Find (a) 3**a** + 2**b**, (b) **a** − 2**b**, (c) ½**b** − **a**.

```
(a) 3a = (6, −9),  2b = (−8, 2)
    3a + 2b = (6 − 8, −9 + 2) = (−2, −7)

(b) 2b = (−8, 2)
    a − 2b = (2 − (−8), −3 − 2) = (10, −5)

(c) ½b = (−2, 0.5)
    ½b − a = (−2 − 2, 0.5 − (−3)) = (−4, 3.5)
```

Write the scaled vectors first, as above. Most errors come from subtracting a negative entry in one line of mental arithmetic.

### Worked example 4: a point after a combined translation (non-calculator)

**a** = (3, 1) and **b** = (−2, 4). The point P(1, −2) is translated by 2**a** − **b**. Find the image of P.

```
2a − b = (6 − (−2), 2 − 4) = (8, −2)
image  = (1 + 8, −2 + (−2)) = (9, −4)
```

## Vector equations

Two vectors are equal only if their top entries are equal **and** their bottom entries are equal. One vector equation therefore gives two ordinary equations.

### Worked example 5: unknowns on both sides (non-calculator)

Find x and y if 3(x, −1) + (5, y) = (2x, 7).

```
top:     3x + 5 = 2x    →  x = −5
bottom:  −3 + y = 7     →  y = 10
```

Check: 3(−5, −1) + (5, 10) = (−15 + 5, −3 + 10) = (−10, 7), and 2x = −10 ✓.

### Worked example 6: making a vector a multiple of another (non-calculator)

The vector (k, 10) is parallel to (3, −5). Find k.

```
(k, 10) = m(3, −5) for some number m.
bottom: 10 = −5m, so m = −2
top:    k = 3m = −6
```

**k = −6.** The bottom entries fix the multiplier; the top entries then give k.

## Paper 2 and Paper 4

E7.2 questions are mostly arithmetic with negatives and fractions, so they suit Paper 2. Show every entry of every intermediate vector. On Paper 4 the arithmetic is the same; the calculator only helps with awkward decimals.

## Common mistakes

- Writing a vector as coordinates, (5, −5) "as a point", or as a fraction 5/−5. Use a column with no line between the entries.
- Working out AB as start minus end, which gives the negative.
- Multiplying only the top entry by the scalar.
- Losing a sign: a − (−8) is a + 8.
- Treating **a** − **b** and **b** − **a** as the same vector.
- Describing a translation by the vector alone when asked to "describe fully"; you also need the word translation.

## Exam technique

- **Write down** questions (for instance, a vector read from a grid) need only the answer; count squares carefully, right and up positive.
- **Find** or **work out**: show the scaled vectors before combining them.
- For an equation, write "top:" and "bottom:" equations separately, then check by substituting back.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Subject content, Topic 7 Transformations and vectors, E7.2 Vectors in two dimensions (Extended subject content), with C7.2 marked "Extended content only". See also the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).
