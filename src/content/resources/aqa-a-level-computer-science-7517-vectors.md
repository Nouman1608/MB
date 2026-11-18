---
title: "AQA A-Level Computer Science (7517): Vectors"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.8
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "vectors-7517"
description: "Vectors for AQA A-Level Computer Science 7517 4.2.8: notations, list, array and dictionary forms, addition, scaling, convex combinations and dot products."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper on 4.2.8 Vectors in AQA A-Level Computer Science
(7517). The specification asks you to be familiar with the concept of a
vector and its notations (a list such as [2.0, 3.14159, −1.0,
2.718281828], "4-vector over ℝ written as ℝ⁴", and the function
interpretation 0 ↦ 2.0, 1 ↦ 3.14159 and so on); to know that all entries
must be drawn from the same field; to represent a vector as a list, a
1-D array, a dictionary and an arrow; and to use vector addition,
scalar-vector multiplication, convex combinations and the dot product,
including finding the angle between two vectors. The short overview of
all the 4.2 structures is in the
[abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/).

## Three ways of thinking about a vector

**1. A list of numbers.** [2.0, 3.0] is a 2-vector; [2.0, 3.14159,
−1.0, 2.718281828] is a 4-vector. When every entry is a real number, the
4-vector is said to be a vector over ℝ, and the set of all such vectors
is written ℝ⁴.

**2. A function.** The same 4-vector can be read as a function
f : S → ℝ, where S = {0, 1, 2, 3} is the set of positions and ℝ is the
co-domain. The function maps each position to its entry: 0 ↦ 2.0,
1 ↦ 3.14159, 2 ↦ −1.0, 3 ↦ 2.718281828 (↦ means "maps to").

**3. A geometric point or arrow.** A 2-vector [2.0, 3.0] can be drawn as
an arrow with its tail at the origin and its head at the point
(2.0, 3.0). A 3-vector is an arrow in three-dimensional space.

**Same field.** All entries of a vector must come from the same field,
for example all real numbers. [3, "red", 1.5] is not a vector: "red" is
not a number, so none of the operations below could be applied to it.

## Representing a vector in a program

| Representation | Example | When it suits |
|---|---|---|
| List | Python `[2.0, 3.0]` | Simple, short vectors |
| 1-D array | VB.NET `Dim example(3) As Single` (four elements, indices 0 to 3) | Fixed-length vectors in languages without lists |
| Dictionary | Python `{0: 2.0, 1: 3.14159, 2: -1.0, 3: 2.718281828}` | When the vector is viewed as a function from positions to values |
| Arrow | Tail at the origin, head at (2.0, 3.0) | Visualising 2- or 3-vectors |

The dictionary form follows directly from the function view: the key is
the position (an element of S) and the value is the entry. It is
especially useful when most entries are zero, because only the non-zero
positions need to be stored. A 1000-dimensional vector with three
non-zero entries, such as {4: 1.0, 250: 2.5, 998: −3.0}, needs three
pairs instead of a thousand array elements.

## Vector addition achieves translation

Add corresponding entries: [2, 1] + [3, −4] = [5, −3]. The vectors must
have the same number of entries.

Geometrically, adding a vector **translates** (moves) a point without
changing its shape or direction. A triangle with corners (1, 1), (4, 1)
and (1, 3), translated by [2, 3], has corners (3, 4), (6, 4) and (3, 6).
Every corner moves by the same amount, so the triangle keeps its size
and orientation. Games and graphics programs move objects this way every
frame.

## Scalar-vector multiplication achieves scaling

Multiply every entry by the same number (the scalar): 3 × [2, 1] =
[6, 3]. The result points in the same direction and is three times as
long. A scalar between 0 and 1 shrinks the vector, and a negative scalar
reverses its direction: −1 × [2, 1] = [−2, −1].

Scaling the triangle above by 2 (multiplying each corner's position
vector by 2) gives (2, 2), (8, 2) and (2, 6): twice the size, measured
from the origin.

Subtraction combines the two operations: u − v = u + (−1)v.

## Convex combinations

A **convex combination** of two vectors u and v is an expression of the
form αu + βv where α ≥ 0, β ≥ 0 and α + β = 1. Every convex combination
lies on the straight line segment joining the heads of u and v.

**Worked example.** u = [2, 6], v = [10, 2], α = 0.25 and β = 0.75.

- αu = 0.25 × [2, 6] = [0.5, 1.5]
- βv = 0.75 × [10, 2] = [7.5, 1.5]
- αu + βv = [8, 3]

Check: moving from u towards v is the vector v − u = [8, −4]. Three
quarters of that is [6, −3], and [2, 6] + [6, −3] = [8, 3]. So the
result is three quarters of the way from u to v. With α = 1, β = 0 the
result is u itself; with α = β = 0.5 it is the midpoint [6, 4].

Both conditions matter. α = 2, β = −1 also sums to 1, but gives
[−6, 10], which lies on the line through u and v but outside the segment.
Convex combinations are used to blend between two positions or colours,
for example in animation.

## The dot product and the angle between vectors

The **dot (scalar) product** of u = [u₁, ..., uₙ] and v = [v₁, ..., vₙ]
is u · v = u₁v₁ + u₂v₂ + ... + uₙvₙ. The answer is a single number, not
a vector.

Its application in the specification is finding the angle θ between two
vectors:

cos θ = (u · v) ÷ (|u| × |v|), where the length |u| = √(u · u).

**Worked example.** u = [1, 2, 2] and v = [2, −1, 2].

1. u · v = (1 × 2) + (2 × −1) + (2 × 2) = 2 − 2 + 4 = 4
2. |u| = √(1 + 4 + 4) = 3 and |v| = √(4 + 1 + 4) = 3
3. cos θ = 4 ÷ 9 = 0.444...
4. θ = 63.6° (to 1 decimal place)

The sign of the dot product gives quick information: positive means the
angle is less than 90°, zero means the vectors are perpendicular (for
example [3, −2] · [4, 6] = 12 − 12 = 0), and negative means the angle is
more than 90°. A game can use this to decide whether a target is in
front of a character: if the dot product of the facing direction and the
direction to the target is positive, the target is within 90° of
straight ahead.

A dot product routine in AQA-style pseudocode, for vectors held in
arrays of length n:

```
SUBROUTINE DotProduct(u, v, n)
  total ← 0
  FOR i ← 0 TO n - 1
    total ← total + u[i] * v[i]
  ENDFOR
  RETURN total
ENDSUBROUTINE
```

## Common mistakes

- Treating the dot product as a vector, for example writing [2, −2, 4]
  instead of adding the products to get 4.
- Forgetting the square root when finding a vector's length.
- Rounding cos θ too early, which changes the angle in the final answer.
- Stating only α + β = 1 for a convex combination; α, β ≥ 0 is also
  required.
- Mixing up the effects: addition translates, scalar multiplication
  scales.
- Writing a dictionary representation with values as keys; the key is
  the position.

## Exam technique for AQA command words

- **Calculate**: show each product before adding, then each length,
  then cos θ, so method marks survive an arithmetic slip.
- **State the effect**: one word is often enough, "translation" or
  "scaling", but name the operation that causes it.
- **Represent**: copy the exact notation the question asks for: list,
  array declaration, dictionary or arrow.
- **Explain**: for a convex combination, link the conditions to the
  result lying on the segment between the two vectors.

## Next steps

- Formulae, traps and a self-test are in the
  [Vectors revision notes](/resources/aqa-a-level-computer-science-7517-vectors-revision-notes/).
- Original exam-style questions with full answers are in the
  [Vectors practice questions](/resources/aqa-a-level-computer-science-7517-vectors-practice/).
- For the dictionary representation, see the
  [Dictionaries study guide](/resources/aqa-a-level-computer-science-7517-dictionaries/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.8 Vectors -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
