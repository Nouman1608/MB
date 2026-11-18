---
title: "AQA A-Level Computer Science (7517): Vectors -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA A-Level Computer Science 7517 vector questions: notation, representations, translation, scaling, convex combinations and dot products, with answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Vectors study guide](/resources/aqa-a-level-computer-science-7517-vectors/) | [Vectors revision notes](/resources/aqa-a-level-computer-science-7517-vectors-revision-notes/)

These questions cover 4.2.8 Vectors of AQA A-Level Computer Science
(7517). Give angles to one decimal place unless a question says
otherwise, and show your working.

---

## Section A

**1.** State what is meant by the notation ℝ⁴. **[1]**

**2.** State the condition that all the entries of a vector must satisfy. **[1]**

**3.** State the geometric effect of **(a)** vector addition and **(b)** scalar-vector multiplication. **[2]**

**4.** State the conditions on α and β for αu + βv to be a convex combination of u and v. **[2]**

**5.** The 3-vector [1.5, 0.0, −4.0] is viewed as a function.

**(a)** Write the vector using the function interpretation. **[1]**
**(b)** Write the vector as a Python dictionary. **[1]**

## Section B

**6.** u = [3, −1] and v = [1, 2].

**(a)** Calculate u + v. **[1]**
**(b)** Calculate 2u − v. **[2]**
**(c)** Calculate u · v. **[1]**
**(d)** Calculate the angle between u and v. **[3]**

**7.** A square in a drawing program has corners at (0, 0), (2, 0), (2, 2) and (0, 2), each stored as a position vector.

**(a)** The square is translated by the vector [5, 1]. State the new corners. **[2]**
**(b)** Instead, each original corner's position vector is multiplied by the scalar 3. State the new corners. **[1]**
**(c)** State the side length of the square produced in part (b), and the factor by which its area has increased. **[2]**

**8.** u = [1, 9] and v = [9, 1].

**(a)** Calculate the convex combination 0.75u + 0.25v. **[2]**
**(b)** Explain whether 1.5u − 0.5v is a convex combination of u and v. **[2]**

**9.** A vector in ℝ⁵⁰⁰ has every entry equal to 0 except at positions 3 (value 2.0), 120 (value −1.0) and 499 (value 4.5). Positions are numbered from 0.

**(a)** Write a dictionary representation that stores only the non-zero entries. **[1]**
**(b)** Explain **one** advantage of this representation over a 1-D array of 500 elements. **[2]**

## Section C

**10.** Two vectors of the same length are stored as lists u and v. Write a subroutine that returns the angle between them in degrees. You may assume that functions Sqrt(x) and ArcCosDegrees(x) are available. **[6]**

**11.** Calculate the angle between u = [1, 0, 2] and v = [3, 1, −1]. **[4]**

**12.** In a two-dimensional game, a character faces in the direction f = [0, 1]. The direction from the character to enemy A is [3, 4], and the direction to enemy B is [−2, −1]. Use dot products to decide which enemy is within 90° of the direction the character is facing, explaining your method. **[4]**

---

## Answers

**1.** The set of 4-vectors whose four entries are all real numbers (a 4-vector over ℝ) [1].

**2.** All entries must be drawn from the same field, such as the real numbers ℝ [1].

**3.** **(a)** Translation [1]. **(b)** Scaling [1].

**4.** α ≥ 0 and β ≥ 0 [1]; α + β = 1 [1].

**5.** **(a)** 0 ↦ 1.5, 1 ↦ 0.0, 2 ↦ −4.0 [1].
**(b)** `{0: 1.5, 1: 0.0, 2: -4.0}` [1].

**6.** **(a)** [4, 1] [1].
**(b)** 2u = [6, −2] [1]; 2u − v = [5, −4] [1].
**(c)** (3 × 1) + (−1 × 2) = 3 − 2 = 1 [1].
**(d)** |u| = √10 and |v| = √5 [1]; cos θ = 1 ÷ √50 = 0.1414 [1]; θ = **81.9°** [1].

**7.** **(a)** (5, 1) and (7, 1) [1]; (7, 3) and (5, 3) [1].
**(b)** (0, 0), (6, 0), (6, 6) and (0, 6) [1].
**(c)** The side length is 6 [1]. The area increases by a factor of 9 (from 4 to 36 square units) [1].

**8.** **(a)** 0.75u = [0.75, 6.75] and 0.25v = [2.25, 0.25] [1]; sum = **[3, 7]** [1].
**(b)** It is not a convex combination [1]: the coefficients do add to 1, but β = −0.5 is negative, so the result ([−3, 13]) lies on the line through u and v but outside the segment between them [1].

**9.** **(a)** {3: 2.0, 120: -1.0, 499: 4.5} [1].
**(b)** Only three key-value pairs are stored instead of 500 elements [1], so far less memory is used and operations such as the dot product only need to process the non-zero entries [1].

**10.** Example answer in pseudocode:

```
SUBROUTINE Angle(u, v)
  dot ← 0
  lenU ← 0
  lenV ← 0
  FOR i ← 0 TO LEN(u) - 1
    dot ← dot + u[i] * v[i]
    lenU ← lenU + u[i] * u[i]
    lenV ← lenV + v[i] * v[i]
  ENDFOR
  cosTheta ← dot / (Sqrt(lenU) * Sqrt(lenV))
  RETURN ArcCosDegrees(cosTheta)
ENDSUBROUTINE
```

Marking points: loop over every position of the vectors [1]; accumulate the dot product as the sum of u[i] × v[i] [1]; accumulate the sums of squares of each vector [1]; take square roots to find the magnitudes [1]; divide the dot product by the product of the magnitudes [1]; apply the inverse cosine and return the result [1].

**11.** u · v = 3 + 0 − 2 = 1 [1]. |u| = √5 and |v| = √11 [1]. cos θ = 1 ÷ √55 = 0.1348 [1]. θ = **82.3°** [1].

**12.** For a target to be within 90° of the facing direction, the dot product of f and the direction to the target must be positive [1]. f · [3, 4] = (0 × 3) + (1 × 4) = 4 [1]. f · [−2, −1] = (0 × −2) + (1 × −1) = −1 [1]. Enemy A gives a positive result, so it is within 90° of straight ahead; enemy B gives a negative result, so it is more than 90° away, behind the character [1].

---

## Where marks are usually lost

- Writing the dot product as a list of products instead of their sum.
- Forgetting the square roots when working out magnitudes.
- Rounding cos θ to one or two figures before using the inverse cosine.
- Checking only that the coefficients sum to 1 in a convex combination question.
- Dictionary answers that use the values as keys.
