---
title: "OxfordAQA International GCSE Mathematics: Matrices and matrix transformations (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Matrices Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Matrices and matrix transformations"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 96
syllabusTopics:
  - qualification: "igcse"
    topic: "geometry-and-measures-oxfordaqa-igcse-maths"
    subtopic: "transformations-matrices-and-vectors-oxfordaqa-igcse-maths"
description: "Condensed revision notes on matrix multiplication, the identity matrix and matrix transformations for OxfordAQA International GCSE Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes are for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards), section 3.3.3, statements G23 to G26. All four statements are **Extension only**. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations/) first. Then try the [practice questions](/resources/oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-practice/).

Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/). If you are not sure where to start, take the [free 10-minute diagnostics](/diagnostics/).

In text and tables, a slash separates rows: (0 −1 / 1 0) has top row 0, −1 and bottom row 1, 0.

## Key terms

| Term | Meaning |
|---|---|
| Order of a matrix | Rows × columns. A 2 × 2 matrix has two rows and two columns; a 2 × 1 matrix is a column |
| Scalar multiple | Multiply every entry by the same number |
| Identity matrix I | (1 0 / 0 1). Leaves any 2 × 2 matrix or column unchanged |
| Unit square | Vertices O(0, 0), A(1, 0), B(1, 1), C(0, 1) |
| Image | The position of a point or shape after a transformation |
| Combined transformation | One transformation followed by another; found by multiplying matrices |

## G23: Multiplication

**Row times column.** Each entry of the answer is a row of the left matrix multiplied entry by entry with a column of the right matrix, then added.

```
( a  b ) ( x )  =  ( ax + by )
( c  d ) ( y )     ( cx + dy )

( a  b ) ( p  q )  =  ( ap + br   aq + bs )
( c  d ) ( r  s )     ( cp + dr   cq + ds )
```

Rules to remember:

- Matrix × matrix order matters. In general AB ≠ BA.
- A column goes on the right of a matrix, never the left.
- A 2 × 2 times a 2 × 1 gives a 2 × 1. A 2 × 2 times a 2 × 2 gives a 2 × 2.
- A scalar can be multiplied in at any stage: k(AB) can be worked out as (kA)B.

**Worked reminder.** (3 −2 / 1 4) multiplied by the column (5 / −1):

```
3×5 + (−2)×(−1) = 15 + 2 = 17
1×5 + 4×(−1)    = 5 − 4  = 1        answer (17 / 1)
```

**Solving for unknowns.** Multiply out, then set each entry of your answer equal to the matching entry given. (a 2 / 3 b)(1 / 4) = (11 / 19) gives a + 8 = 11 and 3 + 4b = 19, so a = 3 and b = 4.

## G24: Identity matrix

```
I = ( 1  0 )        MI = IM = M        I (x / y) = (x / y)
    ( 0  1 )
```

- I is the matrix of the "do nothing" transformation, which is also enlargement with scale factor 1.
- Multiplying a matrix by I on either side returns the same matrix. Use this to check you have the matrix right.
- Reflecting twice in the same line gives I, and so does rotating by 90° four times.

## G25: Matrices for transformations of the unit square

**Method in steps**

1. Write the point as a column (x / y).
2. Multiply on the left by the 2 × 2 matrix.
3. The answer is the image point.

**Reading a matrix:** the first column is the image of A(1, 0). The second column is the image of C(0, 1).

**To build a matrix:** find where A and C go, then write the two images as columns.

| Transformation | Matrix | Image of A(1, 0) | Image of C(0, 1) |
|---|---|---|---|
| Rotation 90° anticlockwise | (0 −1 / 1 0) | (0, 1) | (−1, 0) |
| Rotation 180° | (−1 0 / 0 −1) | (−1, 0) | (0, −1) |
| Rotation 270° anticlockwise | (0 1 / −1 0) | (0, −1) | (1, 0) |
| Reflection in x = 0 | (−1 0 / 0 1) | (−1, 0) | (0, 1) |
| Reflection in y = 0 | (1 0 / 0 −1) | (1, 0) | (0, −1) |
| Reflection in y = x | (0 1 / 1 0) | (0, 1) | (1, 0) |
| Reflection in y = −x | (0 −1 / −1 0) | (0, −1) | (−1, 0) |
| Enlargement, scale factor k, centre origin | (k 0 / 0 k) | (k, 0) | (0, k) |

Rotations in this unit are about the origin. A 270° anticlockwise turn is the same as a 90° clockwise turn. Reflections here are only in lines through the origin.

**Worked reminder: build the matrix.** A transformation sends A(1, 0) to (−2, 0) and C(0, 1) to (0, −2). The columns are (−2 / 0) and (0 / −2), so the matrix is (−2 0 / 0 −2): an enlargement with scale factor −2, centre the origin. Apply it to (3, 4): the image is (−6, −8). Questions like this test whether you read the columns correctly.

**Worked reminder: triangle.** To transform a shape, multiply the matrix by each vertex in turn. Write the images in a list, in the same order as the original vertices, so you can see which image goes with which corner.

**Describing a transformation from its matrix.** Work out where A and C go, then match the pattern in the table. Give full detail:

- Rotation: angle, direction and centre (the origin).
- Reflection: the equation of the mirror line.
- Enlargement: scale factor and centre (the origin).

(−1 0 / 0 −1) can be described as a rotation of 180° about the origin or an enlargement with scale factor −1 centred on the origin.

**Worked reminder.** Matrix (0 −1 / −1 0) applied to the point (4, 5):

```
0×4 + (−1)×5   = −5
(−1)×4 + 0×5   = −4        image (−5, −4)
```

## G26: Combining transformations

**If A is done first and B second, the single matrix is BA.** The first transformation sits nearest the point.

Method in steps:

1. Write the matrix for each transformation.
2. Put them in order: second matrix on the left, first matrix on the right.
3. Multiply row by column.
4. Describe the result, or apply it to the point asked for.
5. Check with one point by doing the two transformations separately.

| Combination | Result |
|---|---|
| Same reflection twice | I (identity) |
| Rotation 90° anticlockwise twice | Rotation 180° (−1 0 / 0 −1) |
| Reflection in y = 0, then rotation 90° anticlockwise | (0 1 / 1 0), reflection in y = x |
| Rotation 90° anticlockwise, then reflection in y = 0 | (0 −1 / −1 0), reflection in y = −x |

The last two rows use the same two transformations in different orders and give different answers.

**Worked reminder.** Enlargement scale factor 2, then rotation 180°. Combined matrix:

```
( −1   0 ) ( 2  0 )  =  ( −2   0 )
(  0  −1 ) ( 0  2 )     (  0  −2 )
```

An enlargement matrix (k 0 / 0 k) is a scalar multiple of I, so it gives the same result in either order.

## Must-know distinctions

- **Row × column, not entry × entry.** (a b)(c d) is not (ac bd).
- **BA is not AB.** For "A then B" write BA.
- **Columns of the matrix are images of A and C.** They are not the rows.
- **Reflection in y = x is not the same as in y = −x.** Check by sending A(1, 0).
- **Rotation direction is stated.** 90° clockwise is the matrix for 270° anticlockwise.

## Quick self-test

1. Work out 2(3 −1 / 4 0).
2. Work out (2 5 / 1 3)(−1 / 4).
3. Work out (2 −1 / 4 3)(1 0 / 2 5), then reverse the order.
4. Write down the matrix for reflection in y = x and use it to find the image of (6, −2).
5. Describe fully the transformation with matrix (1 0 / 0 −1).
6. Write down the matrix for a rotation of 270° anticlockwise about the origin.
7. Write down the matrix for an enlargement with scale factor ½, centre the origin, and find the image of (8, −6).
8. Find the single matrix for reflection in y = 0 followed by reflection in y = x, and describe it.
9. Find the image of (−3, 5) after a rotation of 180° about the origin using a matrix.
10. What is the matrix for rotation 90° anticlockwise applied twice?

### Answers

1. (6 −2 / 8 0)
2. 2×(−1) + 5×4 = 18 and 1×(−1) + 3×4 = 11, so (18 / 11)
3. (0 −5 / 10 15). Reversed: (2 −1 / 24 13). The two answers differ.
4. (0 1 / 1 0). The image of (6, −2) is (−2, 6).
5. Reflection in y = 0 (the x-axis).
6. (0 1 / −1 0)
7. (½ 0 / 0 ½). The image of (8, −6) is (4, −3).
8. Second matrix on the left: (0 1 / 1 0)(1 0 / 0 −1) = (0 −1 / 1 0), a rotation of 90° anticlockwise about the origin.
9. (−1 0 / 0 −1)(−3 / 5) = (3 / −5), so the image is (3, −5).
10. (−1 0 / 0 −1), which is a rotation of 180°.

## Where marks are usually lost

- Writing the matrices for "A then B" as AB. Show BA.
- Arithmetic slips with negative signs inside a row-times-column sum. Write each product in brackets before adding.
- Adding or multiplying the wrong pairs of entries. Say "row, column" to yourself as you go.
- Giving the matrix rows where the columns of the images are needed.
- Describing a transformation as just "reflection" or "rotation" without the line, angle, direction or centre.
- Swapping the two diagonal mirror lines, y = x and y = −x.
- Putting a column vector on the left of the matrix.
- Not checking one point at the end, when it takes ten seconds.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1 (for exams May/June 2018 onwards), section 3.3.3, statements G23 to G26.
