---
title: "AQA A-Level Computer Science (7517): Vectors -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-Level Computer Science 7517 notes on 4.2.8 Vectors: notation, representations, operations, convex combinations, dot product and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.8 Vectors** in AQA A-Level Computer Science
(7517). For full explanations and worked examples, use the
[Vectors study guide](/resources/aqa-a-level-computer-science-7517-vectors/).

## Notation

| Form | Example |
|---|---|
| List | [2.0, 3.14159, −1.0, 2.718281828] |
| Set it belongs to | A 4-vector over ℝ, written ℝ⁴ |
| Function interpretation | f : S → ℝ with S = {0, 1, 2, 3}: 0 ↦ 2.0, 1 ↦ 3.14159, 2 ↦ −1.0, 3 ↦ 2.718281828 |

↦ means "maps to". All entries must be drawn from the **same field**,
such as ℝ.

## Key terms

| Term | Definition |
|---|---|
| **n-vector** | A vector with n entries |
| **Field** | The set the entries come from, such as the real numbers ℝ |
| **Co-domain** | In the function view, the set of possible entry values (ℝ) |
| **Scalar** | A single number used to multiply a vector |
| **Translation** | Moving a point or shape without changing its size or direction; achieved by vector addition |
| **Scaling** | Changing the length of a vector; achieved by scalar-vector multiplication |
| **Convex combination** | αu + βv with α, β ≥ 0 and α + β = 1 |
| **Dot (scalar) product** | u · v = u₁v₁ + u₂v₂ + ... + uₙvₙ, a single number |
| **Magnitude** | Length of a vector, \|u\| = √(u · u) |

## Representations in code

| Representation | Example |
|---|---|
| List (Python) | `[2.0, 3.0]` |
| 1-D array (VB.NET) | `Dim example(3) As Single`: four elements, indices 0-3 |
| Dictionary (Python) | `{0: 2.0, 1: 3.14159, 2: -1.0, 3: 2.718281828}`; key = position |
| Arrow | Tail at the origin, head at the point, such as (2.0, 3.0) |

A dictionary can store only the non-zero entries of a mostly-zero
vector: [0, 0, 7, 0, 0, 1] becomes {2: 7, 5: 1}.

## Operations

| Operation | Rule | Example | Effect |
|---|---|---|---|
| Addition | Add matching entries | [1, 4] + [3, −2] = [4, 2] | Translation |
| Scalar multiplication | Multiply every entry | 2.5 × [2, −4] = [5, −10] | Scaling (negative also reverses) |
| Convex combination | αu + βv, α, β ≥ 0, α + β = 1 | 0.5[0, 0] + 0.5[6, 4] = [3, 2] | A point on the segment from u to v |
| Dot product | Sum of products | [1, 2] · [3, 4] = 3 + 8 = 11 | A number |

## Worked recall: moving and resizing a shape

A rectangle has corners (1, 1), (3, 1), (3, 2) and (1, 2).

| Operation | New corners | What changed |
|---|---|---|
| Add [4, −1] to each corner | (5, 0), (7, 0), (7, 1), (5, 1) | Position only: translation |
| Multiply each corner by 2 | (2, 2), (6, 2), (6, 4), (2, 4) | Size, measured from the origin: scaling |
| Multiply each corner by −1 | (−1, −1), (−3, −1), (−3, −2), (−1, −2) | Direction of each position vector reversed |

## Checking a convex combination

Ask three questions: is α ≥ 0, is β ≥ 0, and does α + β = 1? Only if
all three are yes is it convex.

| Expression | Convex? | Reason |
|---|---|---|
| 0.3u + 0.7v | Yes | Both non-negative, sum 1 |
| 1.2u − 0.2v | No | β is negative |
| 0.4u + 0.4v | No | Sum is 0.8 |
| 1u + 0v | Yes | Gives u itself, an end of the segment |

## Angle between two vectors

cos θ = (u · v) ÷ (|u| × |v|)

Method: dot product → each magnitude → divide → inverse cosine.

Example: u = [1, 1, 0], v = [0, 1, 1]. u · v = 1; |u| = |v| = √2;
cos θ = 1 ÷ 2 = 0.5; θ = 60°.

| Dot product | Angle |
|---|---|
| Positive | Less than 90° |
| Zero | Exactly 90° (perpendicular) |
| Negative | More than 90° |

## Dot product in pseudocode

```
total ← 0
FOR i ← 0 TO n - 1
  total ← total + u[i] * v[i]
ENDFOR
```

## Exam traps

- Giving the dot product as a vector of products instead of their sum.
- Adding vectors with different numbers of entries.
- Missing the square root in a magnitude.
- Rounding cos θ before taking the inverse cosine.
- Convex combination conditions: both α, β ≥ 0 **and** α + β = 1.
- Swapping keys and values in a dictionary representation.
- Calling addition "scaling" or multiplication "translation".

## Self-test

1. What does ℝ³ describe?
2. Write [4.0, −2.5, 7.0] in the function interpretation.
3. Give a dictionary representation of [0, 0, 5, 0, 1] that stores only
   the non-zero entries.
4. Calculate [3, −1] + [−2, 4].
5. Calculate 4 × [1.5, −2].
6. What is the effect of multiplying a vector by −2?
7. Is 0.6u + 0.5v a convex combination? Why?
8. Find the convex combination 0.5u + 0.5v for u = [4, 0] and
   v = [0, 8].
9. Calculate [2, 3] · [−1, 4].
10. Find the angle between [6, 8] and [5, 0] to 1 decimal place.
11. What does a dot product of zero tell you?
12. Why is [1, "a"] not a vector?

**Answers:** 1. The set of 3-vectors whose entries are real numbers. 2.
0 ↦ 4.0, 1 ↦ −2.5, 2 ↦ 7.0. 3. {2: 5, 4: 1}. 4. [1, 3]. 5. [6, −8]. 6.
Its length doubles and its direction is reversed. 7. No; 0.6 + 0.5 =
1.1, not 1. 8. [2, 4], the midpoint. 9. −2 + 12 = 10. 10. Dot product
30; magnitudes 10 and 5; cos θ = 30 ÷ 50 = 0.6; θ = 53.1°. 11. The
vectors are perpendicular. 12. The entries are not all drawn from the
same field: "a" is not a number.

## Next steps

- Practise every operation with the
  [Vectors practice questions](/resources/aqa-a-level-computer-science-7517-vectors-practice/).
- Revise the dictionary representation with the
  [Dictionaries revision notes](/resources/aqa-a-level-computer-science-7517-dictionaries-revision-notes/).

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2.8 Vectors -
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
