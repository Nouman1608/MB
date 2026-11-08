---
title: "OxfordAQA International GCSE Mathematics: Vectors and vector geometry (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Vectors Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Vectors and vector geometry"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 95
syllabusTopics:
  - qualification: "igcse"
    topic: "geometry-and-measures-oxfordaqa-igcse-maths"
    subtopic: "transformations-matrices-and-vectors-oxfordaqa-igcse-maths"
description: "Condensed revision notes on vector notation, sums, differences, scalar multiples and 2D vector geometry for OxfordAQA International GCSE Mathematics."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---
These notes condense the full explanations in the [study guide](/resources/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry/), so read that first if a step is unfamiliar. They are written for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards), statement G22 in section 3.3.3, Transformations, Matrices and Vectors. G22 appears only in the Extension content column, so all of it is **Extension only**. The specification says all content can be assessed on the Extension papers.

Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/). Test yourself with the [practice questions](/resources/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry-practice/), or check your level with the [free 10-minute diagnostics](/diagnostics/).

## Key facts

| Idea | What to remember |
|---|---|
| Column vector (x, y) | x across (right is positive), y up or down (up is positive) |
| Names | **a** (underline by hand), →AB (from A to B), or a column |
| Equal vectors | Same size and direction, wherever they are drawn |
| Negative | −**a** reverses direction; →BA = −→AB |
| Vector between points | →AB = position of B minus position of A |
| Sum | Add the matching entries |
| Difference | Subtract the matching entries, or add the negative |
| Scalar multiple | k(x, y) = (kx, ky); parallel to the original |
| Commutative | **a** + **b** = **b** + **a** |
| Associative | (**a** + **b**) + **c** = **a** + (**b** + **c**) |
| Not commutative | **a** − **b** ≠ **b** − **a**; they are negatives of each other |

## Calculating with columns

Work on the top entries, then the bottom entries. Put brackets round any negative number.

**Reminder.** **a** = (6, −2) and **b** = (1, 4).

```
a + b  = (7, 2)
2a - 3b = (12, -4) - (3, 12) = (9, -16)
```

Scalar multiples multiply both entries. Parallel vectors are scalar multiples: (−4, 6) and (6, −9) are parallel because (6, −9) = −1.5(−4, 6).

## Drawing vectors

* **Sum**: draw **a**, then draw **b** from the end of **a**. The sum runs from the start of **a** to the end of **b**.
* **Difference**: **a** − **b** = **a** + (−**b**). Draw −**b** from the end of **a**.
* **Scalar multiple**: 3**a** is the same direction and three times the length. −**a** is the same length and opposite.
* **Parallelogram**: drawing **a** and **b** from the same point and completing the shape gives **a** + **b** as one diagonal.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--02-adding-vectors.webp" width="900" height="1020" alt="p = (5,-2) is drawn from the origin, then q = (-1,7) from where p ends. The single arrow from the origin to (4,5) is p + q, found by adding tops and adding bottoms." loading="lazy">
  <figcaption>p + q means do p, then q; add the tops and add the bottoms.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--03-subtracting-vectors.webp" width="900" height="1026" alt="p = (5,-2), then -q = (1,-7) from the end of p. The arrow from the origin to (6,-9) is p - q, the same as subtracting entry by entry." loading="lazy">
  <figcaption>p − q is p plus the opposite of q.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--07-vector-proof-midpoints.webp" width="900" height="945" alt="In triangle OAB, M and N are midpoints of OA and OB. MN = ON - OM = half of (b - a), and AB = b - a, so MN is half of AB and parallel to it. Shown with a = (8,2), b = (2,6)." loading="lazy">
  <figcaption>Writing every vector in terms of a and b shows MN = half of AB, so the lines are parallel.</figcaption>
</figure>


## Method: finding a vector in a diagram

1. Choose a path from where you begin to where you finish, using only edges whose vectors you know.
2. Write the vector for each step. Going with an arrow adds it. Going against it subtracts it.
3. If a point splits a line in a ratio, turn the ratio into a fraction of that line first.
4. Collect the **a** terms and the **b** terms and give one simplified answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--05-find-scalars-m4-n1.webp" width="900" height="930" alt="On a grid, four copies of (2, 1) go from the origin to (8, 4) and one copy of (−1, 3) then reaches (7, 7), so m = 4 and n = 1, matching the simultaneous equations 2m − n = 7 and m + 3n = 7." loading="lazy">
  <figcaption>Solving for the scalars is the same as finding how many steps of each vector reach the target.</figcaption>
</figure>


## Method: ratios on a line

If X is on AB with AX : XB = m : n, then →AX = m/(m + n) of →AB.

**Reminder.** Triangle OAB has →OA = **a** and →OB = **b**. M halves AB, and N is on OB with ON : NB = 2 : 1. Find →MN.

```
OM = a + (1/2)(b - a) = (1/2)a + (1/2)b
ON = (2/3)b
MN = ON - OM = (2/3)b - (1/2)a - (1/2)b = -(1/2)a + (1/6)b
```

So →MN = −½**a** + ⅙**b**, or (**b** − 3**a**)/6.

## Method: proofs

| To show | Do this | Then say |
|---|---|---|
| Two lines are parallel | Show one vector is a number times the other | "So they are parallel" |
| Three points are collinear | Show →AB = k→BC (or →AB = k→AC) | "Parallel and share a point, so collinear" |
| A point is a midpoint | Show its vector from O is half the sum of the end points' vectors from O | "So it is the midpoint" |
| Two lines are equal in length | Show one vector is ±1 times the other | "So they are equal in length" |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--02-parallelogram-midpoints.webp" width="900" height="940" alt="Parallelogram OABC with OA=a, OC=c. M midpoint of AB, N midpoint of BC. MN = half of (c-a), which is half of AC, so MN is parallel to AC. Drawn with a=(6,1), c=(2,5)." loading="lazy">
  <figcaption>MN = ½AC, so it is parallel to AC and half as long.</figcaption>
</figure>


## Must-know distinctions

* **Vector or scalar?** A vector has direction. A scalar is only a size.
* **Point or vector?** A point is a place. A column vector is a movement that can start anywhere.
* **Parallel or collinear?** Parallel lines never need to meet. Collinear points are on one line, so the vectors also share a point.
* **a − b or b − a?** They are negatives. Check the order by asking which way the arrow points.
* **→AB or →BA?** Opposite vectors with opposite signs.

## More worked reminders

**Reminder: a vector from coordinates.** C is (−4, 6) and D is (3, −2). Then →CD = (3 − (−4), −2 − 6) = (7, −8). Its negative is →DC = (−7, 8).

**Reminder: solving for unknowns.** If m(1, 2) + n(3, −1) = (11, 8), compare entries:

```
m + 3n  = 11
2m - n  = 8
```

From the second, n = 2m − 8. Then m + 6m − 24 = 11, so m = 5 and n = 2. Check: (5, 10) + (6, −2) = (11, 8). Always check in the original expression.

**Reminder: parallelogram route.** ABCD is a parallelogram with →AB = **s** and →AD = **t**.

```
AC = s + t
BD = -s + t = t - s
CA = -s - t
```

The two diagonals are →AC and →BD. Notice that →BD uses the route B to A to D.

**Reminder: collinear with letters.** →OP = 2**a** + **b** and →OQ = 6**a** + 3**b**. Then →OQ = 3→OP, so O, P and Q are collinear and OQ is three times OP.

## Language to know

| Word | Meaning |
|---|---|
| Vector | A quantity with size and direction |
| Scalar | A number with no direction |
| Column vector | A pair of entries giving movement across and up or down |
| Scalar multiple | A vector multiplied by a number |
| Parallel | Same direction or exactly opposite, so one is a scalar multiple of the other |
| Collinear | On one straight line |
| Resultant | The single vector equal to a sum of vectors |
| Midpoint | The point halfway along a line |

## Exam technique

* Label every vector in a diagram with an arrow or a letter before you start. A clear diagram makes the route method much easier.
* Write each route as a line of working, such as →AM = →AB + ½→BC, before simplifying. A slip in the simplifying is then easier to find.
* When a question gives a ratio, write the fraction of the whole line it represents. A ratio of 2 : 3 means ²⁄₅ of the line from the first point.
* Finish with a sentence. For a proof, say what the working shows in the words of the question.
* If a final answer is a mixture of **a** and **b** terms, check you have collected all of each. Substitute a simple pair, such as **a** = (1, 0) and **b** = (0, 1), to test an answer.
* Use the marks as a guide to the amount of work. A two-mark vector is usually one route and one simplification.

## Quick self-test

1. Find (4, −3) + (−6, 5).
2. Find (9, 2) − (4, −7).
3. Find −3(2, −4).
4. A is (−3, 5) and B is (2, 1). Write →AB as a column.
5. **a** = (1, 4) and **b** = (−3, −2). Find 2**a** + **b**.
6. Are (−4, 6) and (6, −9) parallel? Give a reason.
7. Simplify →AB + →BC − →DC as one vector.
8. M is the midpoint of PQ, →OP = **p** and →OQ = **q**. Find →OM.
9. →PQ = 3**a** + **b** and →QR = **a** − 4**b**. Find →PR.
10. Find k if k(3, −1) + (1, 4) = (10, 1).
11. Is →AB = (2, −5) parallel to →CD = (−6, 10)? Give a reason.
12. X is on AB with AX : XB = 1 : 4. Write →AX as a fraction of →AB.

### Answers

1. (−2, 2)
2. (5, 9)
3. (−6, 12)
4. →AB = (2 − (−3), 1 − 5) = (5, −4)
5. (2, 8) + (−3, −2) = (−1, 6)
6. Yes. (6, −9) = −1.5 × (−4, 6), so one is a scalar multiple of the other.
7. →AB + →BC = →AC. Then −→DC = →CD, so the total is →AC + →CD = →AD.
8. →OM = **p** + ½(**q** − **p**) = ½(**p** + **q**)
9. →PR = →PQ + →QR = 4**a** − 3**b**
10. 3k + 1 = 10 gives k = 3. Check the lower entry: −3 + 4 = 1.
11. No. (−6, 10) would need a multiple of 3 on the top (−6 = −3 × 2), but −3 × (−5) = 15, not 10.
12. →AX = ⅕→AB. The line is split into 1 + 4 = 5 equal parts.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--01-commutative-associative-parallelogram.webp" width="900" height="1180" alt="a=(2,-3) and b=(5,4). Going along a then b, or b then a, reaches (7,1), the two routes round a parallelogram. (a+b)+c and a+(b+c) both equal (6,7) for c=(-1,6). a-b=(-3,-7) but b-a=(3,7)." loading="lazy">
  <figcaption>Adding in either order reaches the same point, but subtraction order reverses the vector.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--01-vector-between-points.webp" width="900" height="1020" alt="Grid with P(-3,5) and Q(4,-1). Going from P to Q is 7 right and 6 down, so PQ is the column vector (7, -6). QP goes the other way, (-7, 6), so QP = -PQ." loading="lazy">
  <figcaption>Finish minus start gives the column vector; the reverse vector has both signs changed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--04-scalar-multiples.webp" width="900" height="866" alt="r = (6,-4) with 3r = (18,-12) three times as long, half r = (3,-2) half as long, and -2r = (-12,8) twice as long and reversed. All lie along the same line." loading="lazy">
  <figcaption>Multiplying by k scales both entries and keeps the arrow parallel to r.</figcaption>
</figure>


## Where marks are usually lost

* Reading →AB as the vector from B to A.
* Sign errors when subtracting a negative entry, such as 2 − (−7).
* Forgetting to multiply the second entry in a scalar multiple.
* Writing "parallel" from a diagram instead of showing a scalar multiple.
* Proving parallel but not saying that a shared point makes the points collinear.
* Giving an answer such as **a** + 2**b** + 3**a** without collecting like terms.
* Writing a coordinate pair where a vector was asked for.
* Missing the brackets in 2**a** − 3**b** when the second vector has negative entries.
* Using one numerical example when the question says "prove" or "show that" for letters.
* Leaving a ratio as a ratio. Convert it to a fraction of the line.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--03-collinear-ratio-proof.webp" width="900" height="986" alt="Triangle OPQ, X on PQ with PX:XQ=2:3 so OX = 3/5 p + 2/5 q. Y has OY = 3p+2q = 5OX, so O, X and Y lie on one line with OX:OY = 1:5." loading="lazy">
  <figcaption>OY is a multiple of OX and both start at O, so O, X, Y are collinear.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--06-collinear-abc-numbers.webp" width="900" height="760" alt="A(1, −2), B(4, 3) and C(10, 13) on a grid. AB = (3, 5) and AC = (9, 15) = 3AB, so three equal steps from A pass through B and reach C, and the points are collinear." loading="lazy">
  <figcaption>AC = 3AB with a shared point A means A, B and C are on one line.</figcaption>
</figure>

## Frequently asked questions

**What is the difference between a vector and a scalar?**
A vector has a size and a direction, while a scalar is only a size. Multiplying a vector by a scalar gives a parallel vector.

**What is the difference between parallel and collinear?**
Parallel lines have vectors that are scalar multiples of each other but need never meet. Collinear points lie on one straight line, so the vectors are parallel and also share a point.

**How do you find a vector in a geometry diagram?**
Choose a route along edges whose vectors you know. Going with an arrow adds its vector and going against it subtracts it; then collect the a terms and b terms into one simplified answer.

**Is a − b the same as b − a?**
No. They are negatives of each other, so subtraction of vectors is not commutative. Addition is commutative: a + b = b + a.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), specification Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA. Statement G22, section 3.3.3 Transformations, Matrices and Vectors.
