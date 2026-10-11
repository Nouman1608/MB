---
title: "OxfordAQA International GCSE Mathematics: Matrices and matrix transformations (9260)"
seoTitle: "OxfordAQA IGCSE Maths Matrices Study Guide"
resourceType: "study-guides"
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
description: "Study guide to matrix multiplication, the identity matrix and matrix transformations of the unit square for OxfordAQA International GCSE Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is written for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). It covers statements G23, G24, G25 and G26 in section 3.3.3, Transformations, Matrices and Vectors. All four appear only in the Extension content column, so every skill here is **Extension only**. The specification says all content can be assessed on the Extension papers. It also says the use of i and j notation is not required, so this guide does not use it.

Work through the guide in order, then use the [revision notes](/resources/oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-revision-notes/) and the [practice questions](/resources/oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-practice/). Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/). To see where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

A note on writing matrices in text: a slash separates rows. So (0 −1 / 1 0) means top row 0, −1 and bottom row 1, 0. A column such as (5 / −1) is a point written as a column vector. Large examples are set out in blocks.

## What this unit covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| G23 | Multiply a 2 × 2 matrix by a 2 × 2 matrix or by a 2 × 1 matrix; multiply a matrix by a scalar | Extension only |
| G24 | Use the identity matrix I (2 × 2 only) | Extension only |
| G25 | Transform the unit square in the x–y plane using a 2 × 2 matrix: rotations of 90°, 180° or 270° about the origin, reflections in x = 0, y = 0, y = x and y = −x, and enlargements centred on the origin | Extension only |
| G26 | Combine transformations using matrix multiplication | Extension only |

All the arithmetic in this unit is small enough to do by hand. Show it line by line.

## G23: Matrix multiplication

A matrix is a rectangular array of numbers. Its **order** is rows × columns. A 2 × 2 matrix has two rows and two columns. A 2 × 1 matrix is a column with two entries.

### Multiplying by a scalar

Multiply every entry by the number.

```
3 ( 2  −1 )   =   ( 6  −3 )
  ( 0   4 )       ( 0  12 )
```

### Matrix times column

Take each row of the matrix in turn. Multiply it, entry by entry, with the column, and add. The result is a 2 × 1 matrix.

**Example 1.** Work out A × (5 / −1) where A = (3 −2 / 1 4).

```
( 3  −2 ) (  5 )   =   ( 3×5 + (−2)×(−1) )   =   ( 17 )
( 1   4 ) ( −1 )       ( 1×5 +  4×(−1)   )       (  1 )
```

The answer is (17 / 1).

### Matrix times matrix

Each entry of the answer is a row of the left matrix multiplied by a column of the right matrix. Row 1 with column 1 gives the top-left entry. Row 1 with column 2 gives the top-right entry, and so on.

**Example 2.** P = (2 1 / −3 4) and Q = (1 5 / 0 −2). Work out PQ and QP.

```
PQ:  top left      2×1 + 1×0       =   2
     top right     2×5 + 1×(−2)    =   8
     bottom left   −3×1 + 4×0      =  −3
     bottom right  −3×5 + 4×(−2)   = −23

PQ = (  2    8 )
     ( −3  −23 )

QP:  top left      1×2 + 5×(−3)   = −13
     top right     1×1 + 5×4      =  21
     bottom left   0×2 + (−2)×(−3) =  6
     bottom right  0×1 + (−2)×4    = −8

QP = ( −13   21 )
     (   6   −8 )
```

PQ and QP are different. **Order matters** in matrix multiplication, so never swap the matrices.

Two checks on order. A 2 × 2 matrix times a 2 × 1 matrix works and gives a 2 × 1 matrix. A 2 × 1 matrix times a 2 × 2 matrix is not defined in this unit, so a column always goes on the right.

**Example 3.** Find a and b when (a 2 / 3 b)(1 / 4) = (11 / 19).

Multiply out: a×1 + 2×4 = 11 and 3×1 + b×4 = 19. So a + 8 = 11, giving a = 3, and 3 + 4b = 19, giving b = 4.

## G24: The identity matrix

The 2 × 2 identity matrix is

```
I = ( 1  0 )
    ( 0  1 )
```

It does nothing. For any 2 × 2 matrix M, MI = IM = M. For any column, I(x / y) = (x / y).

**Example 4.** Show that IM = MI = M for M = (5 −2 / 3 1).

```
IM: top row    1×5 + 0×3 = 5,   1×(−2) + 0×1 = −2
    bottom row 0×5 + 1×3 = 3,   0×(−2) + 1×1 = 1     so IM = M

MI: top row    5×1 + (−2)×0 = 5,  5×0 + (−2)×1 = −2
    bottom row 3×1 + 1×0 = 3,     3×0 + 1×1 = 1      so MI = M
```

The identity is the matrix of the transformation that leaves every point where it is. It is also an enlargement with scale factor 1.

## G25: Transformations of the unit square

The **unit square** has vertices O(0, 0), A(1, 0), B(1, 1) and C(0, 1). To transform a point (x, y), write it as the column (x / y) and multiply it on the left by a 2 × 2 matrix M. The product is the image point.

### The key idea: read the columns

Let M = (a b / c d). Then:

```
M (1 / 0) = ( a )        M (0 / 1) = ( b )
            ( c )                     ( d )
```

So the **first column** of M is where A(1, 0) goes, and the **second column** is where C(0, 1) goes. To build a matrix for a transformation, find the images of A and C and write them as columns.

### Building the standard matrices

**Example 5.** Find the matrix for a rotation of 90° anticlockwise about the origin.

A(1, 0) turns to (0, 1). C(0, 1) turns to (−1, 0). Put these in as columns: the matrix is (0 −1 / 1 0).

Check with the vertex B(1, 1):

```
( 0  −1 ) ( 1 )  =  ( −1 )
( 1   0 ) ( 1 )     (  1 )
```

B moves to (−1, 1), which is B turned 90° anticlockwise about the origin.

The matrices to learn:

| Transformation | Matrix |
|---|---|
| Rotation 90° anticlockwise | (0 −1 / 1 0) |
| Rotation 180° | (−1 0 / 0 −1) |
| Rotation 270° anticlockwise (same as 90° clockwise) | (0 1 / −1 0) |
| Reflection in x = 0 (the y-axis) | (−1 0 / 0 1) |
| Reflection in y = 0 (the x-axis) | (1 0 / 0 −1) |
| Reflection in y = x | (0 1 / 1 0) |
| Reflection in y = −x | (0 −1 / −1 0) |
| Enlargement, scale factor k, centre the origin | (k 0 / 0 k) |

You do not have to memorise them blindly. Each one can be rebuilt in seconds from where A and C land.

For example, reflection in y = −x sends A(1, 0) to (0, −1) and C(0, 1) to (−1, 0). The columns are (0 / −1) and (−1 / 0), which gives (0 −1 / −1 0).

### Transforming a shape

**Example 6.** Triangle T has vertices (2, 1), (4, 1) and (4, 3). Reflect it in y = −x using matrix multiplication.

```
( 0  −1 ) ( 2 )  =  ( −1 )      so (2, 1) → (−1, −2)
(−1   0 ) ( 1 )     ( −2 )

( 0  −1 ) ( 4 )  =  ( −1 )      so (4, 1) → (−1, −4)
(−1   0 ) ( 1 )     ( −4 )

( 0  −1 ) ( 4 )  =  ( −3 )      so (4, 3) → (−3, −4)
(−1   0 ) ( 3 )     ( −4 )
```

The image has vertices (−1, −2), (−1, −4) and (−3, −4). A quick check: each image point should be the original with the coordinates swapped and both signs changed, which is what reflection in y = −x does.

### Describing a transformation from its matrix

**Example 7.** Describe the single transformation with matrix (−1 0 / 0 1).

The first column (−1 / 0) says A(1, 0) goes to (−1, 0). The second column (0 / 1) says C(0, 1) stays put. Reflection in x = 0 (the y-axis) does exactly this.

**Matrix (−1 0 / 0 −1)** has two correct descriptions: rotation of 180° about the origin, or enlargement with scale factor −1 centred on the origin. Either is a fair description. Write one fully, with the angle and centre, or the scale factor and centre.

For an enlargement matrix (k 0 / 0 k), the unit square becomes a square with side |k|, still with one vertex at the origin. A fraction such as ½ gives a smaller square, and a negative k puts the square on the opposite side of the origin.

**Example 8.** The unit square is enlarged and its image has A′ = (−3, 0) and C′ = (0, −3). Find the matrix.

The columns are (−3 / 0) and (0 / −3), so the matrix is (−3 0 / 0 −3). This is an enlargement, scale factor −3, centre the origin.

## G26: Combining transformations

When one transformation is followed by another, multiply their matrices. The key rule is the order:

> If A is done first and B is done second, the combined matrix is **BA**.

The first transformation is the matrix **nearest the point**: BA(x / y) = B(A(x / y)). Write it in reverse order to the way you say it.

**Example 9.** Find the single matrix for reflection in y = 0 followed by rotation of 90° anticlockwise about the origin. Describe it.

The first matrix is M = (1 0 / 0 −1). The second is R = (0 −1 / 1 0). The combined matrix is RM.

```
RM = ( 0  −1 ) ( 1   0 )  =  ( 0×1 + (−1)×0    0×0 + (−1)×(−1) )  =  ( 0  1 )
     ( 1   0 ) ( 0  −1 )     ( 1×1 + 0×0       1×0 + 0×(−1)     )     ( 1  0 )
```

The matrix (0 1 / 1 0) is reflection in y = x.

Check with (2, 3). Reflection in y = 0 gives (2, −3). Rotating that 90° anticlockwise gives (3, 2). The matrix gives (3 / 2) too.

**Example 10.** Now do the same two transformations in the other order: rotation first, then reflection in y = 0.

```
MR = ( 1   0 ) ( 0  −1 )  =  (  0  −1 )
     ( 0  −1 ) ( 1   0 )     ( −1   0 )
```

This is reflection in y = −x. A different order gives a different single transformation. That is why the order of multiplication matters.

**Example 11.** Enlargement with scale factor 3 centred on the origin, followed by reflection in x = 0. Find the image of (2, 1).

The enlargement matrix is (3 0 / 0 3) and the reflection matrix is (−1 0 / 0 1). The combined matrix, enlargement first, is:

```
( −1  0 ) ( 3  0 )  =  ( −3  0 )
(  0  1 ) ( 0  3 )     (  0  3 )
```

Then (−3 0 / 0 3)(2 / 1) = (−6 / 3), so (2, 1) goes to (−6, 3).

### Repeating a transformation

Doing the same transformation twice means squaring its matrix. For R = (0 −1 / 1 0):

```
R² = RR = ( −1   0 )
          (  0  −1 )
```

Two rotations of 90° make a rotation of 180°. A reflection done twice gives the identity matrix, because the second reflection undoes the first.

## Common errors

- Multiplying the matrices in the wrong order for G26. The first transformation is written on the **right**.
- Multiplying entry by entry, as in (a b)(c d) = (ac bd). Matrix multiplication is row times column.
- Reading the columns of a transformation matrix as rows, which gives the wrong image of A and C.
- Mixing up the two diagonal reflections. Test with A(1, 0): reflection in y = x sends it to (0, 1); reflection in y = −x sends it to (0, −1).
- Describing a transformation without its full detail, such as "rotation" with no angle, direction or centre.
- Putting a column on the left of a matrix. A column always goes on the right.

## Next steps

Use the [revision notes](/resources/oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-revision-notes/) for the quick-recall version, then test yourself with the [practice questions](/resources/oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-practice/).

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1 (for exams May/June 2018 onwards), section 3.3.3, statements G23 to G26.
