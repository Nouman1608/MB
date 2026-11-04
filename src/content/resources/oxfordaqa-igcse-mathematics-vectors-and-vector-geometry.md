---
title: "OxfordAQA International GCSE Mathematics: Vectors and vector geometry (9260)"
seoTitle: "OxfordAQA IGCSE Maths Vectors and Vector Geometry"
resourceType: "study-guides"
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
description: "Study guide to vector notation, vector addition, subtraction, scalar multiples and simple 2D vector geometry for OxfordAQA International GCSE Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is written for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). It covers statement G22 in section 3.3.3, Transformations, Matrices and Vectors. The specification gives G22 only in the Extension content column, so everything here is **Extension only**. It also says all content can be assessed on the Extension papers. Transformations (G21) and matrices (G23) have their own pages and are not repeated here.

Work through the guide in order, then use the [revision notes](/resources/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry-revision-notes/) and the [practice questions](/resources/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry-practice/). Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/). To see where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| G22 | Understand and use vector notation | Extension only |
| G22 | Calculate the sum of two vectors, the difference of two vectors and a scalar multiple of a vector | Extension only |
| G22 | Represent these graphically | Extension only |
| G22 | Understand and use the commutative and associative properties of vector addition | Extension only |
| G22 | Solve simple geometrical problems in 2D using vector methods | Extension only |

## Vector notation

A **vector** has a size and a direction. A **scalar** is just a number.

A **column vector** gives the movement across, then up or down. On this page it is typed as (x, y), with x on top and y underneath. In your answers, write it as a true column:

```
(  3 )      means 3 to the right, 2 down
( -2 )
```

Positive x is right and negative x is left. Positive y is up and negative y is down.

There are three common ways to name a vector:

* A lower-case bold letter, such as **a**. By hand, underline it: a with a line beneath.
* Two capital letters with an arrow, such as →AB, meaning the movement from A to B.
* A column vector, such as (3, −2).

Two vectors are **equal** when they have the same size and direction. Where they start does not matter. A vector is not fixed to one place, so a vector can be drawn many times across a diagram.

The **negative** of a vector reverses its direction: if **a** = (3, −2) then −**a** = (−3, 2). Reversing the letters does the same job: →BA = −→AB.

### Worked example 1: the vector between two points

A is the point (2, −1) and B is the point (7, 3). Find →AB and →BA.

To go from A to B, subtract the coordinates of A from those of B.

```
AB = (7 - 2, 3 - (-1)) = (5, 4)
BA = -AB = (-5, -4)
```

So →AB = (5, 4) and →BA = (−5, −4). Check the signs: B is to the right of and above A, so →AB must have positive entries.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--01-vector-between-points.webp" width="900" height="1020" alt="Grid with P(-3,5) and Q(4,-1). Going from P to Q is 7 right and 6 down, so PQ is the column vector (7, -6). QP goes the other way, (-7, 6), so QP = -PQ." loading="lazy">
  <figcaption>Finish minus start gives the column vector; the reverse vector has both signs changed.</figcaption>
</figure>


## Sum, difference and scalar multiple

### Calculating

Add or subtract the top entries, then the bottom entries.

```
(a)   (c)   (a + c)          (a)   (c)   (a - c)
(b) + (d) = (b + d)          (b) - (d) = (b - d)
```

A **scalar multiple** multiplies both entries by the same number: k(x, y) = (kx, ky). If k is negative the direction reverses. If k = ½ the vector is halved.

Vectors that are scalar multiples of each other are **parallel**. For example (2, 1) and (6, 3) are parallel, because (6, 3) = 3(2, 1). Take extra care with the sign of each entry in a multiple.

### Worked example 2

**p** = (7, 1) and **q** = (−2, 5). Find **p** + **q**, **p** − **q** and 3**p** − 2**q**.

```
p + q   = (7 + (-2), 1 + 5)         = (5, 6)
p - q   = (7 - (-2), 1 - 5)         = (9, -4)
3p - 2q = (21, 3) - (-4, 10)        = (25, -7)
```

In the last line, subtracting (−4, 10) means the top entry is 21 − (−4) = 25 and the bottom entry is 3 − 10 = −7.

### Worked example 3: finding scalars

Find m and n such that m(2, 1) + n(−1, 3) = (7, 7).

Compare the entries to get two equations:

```
2m - n  = 7     (top)
 m + 3n = 7     (bottom)
```

From the second equation m = 7 − 3n. Substituting gives 2(7 − 3n) − n = 7, so 14 − 7n = 7, so n = 1. Then m = 4.

Check: 4(2, 1) + 1(−1, 3) = (8 − 1, 4 + 3) = (7, 7). **m = 4, n = 1.**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--05-find-scalars-m4-n1.webp" width="900" height="930" alt="On a grid, four copies of (2, 1) go from the origin to (8, 4) and one copy of (−1, 3) then reaches (7, 7), so m = 4 and n = 1, matching the simultaneous equations 2m − n = 7 and m + 3n = 7." loading="lazy">
  <figcaption>Solving for the scalars is the same as finding how many steps of each vector reach the target.</figcaption>
</figure>


## Representing vectors graphically

Draw a vector as an arrow. The arrow head shows the direction. The arrow runs across by x and up by y.

### Adding: tip to tail
<!-- marlbridge-diagram:maths-b21-vector-tip-to-tail -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b21-vector-tip-to-tail.svg" aria-label="Open full-size diagram: maths-b21-vector-tip-to-tail"><img src="/images/learning/mathematics/maths-b21-vector-tip-to-tail.svg" width="1528" height="940" alt="Starting at (0,0), p=(7,1) ends at (7,1); q=(-2,5) then ends at (5,6). The resultant p+q=(5,6) runs from the initial point to the final point." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Draw the second vector from the tip of the first. The resultant connects the starting point to the final tip. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b21-vector-tip-to-tail -->


To draw **a** + **b**, draw **a**, then draw **b** starting where **a** ends. The sum goes from the start of **a** to the end of **b**.

For **p** + **q** from worked example 2, starting at the origin:

| Step | Move | Position reached |
|---|---|---|
| Start | none | (0, 0) |
| Draw **p** | 7 right, 1 up | (7, 1) |
| Draw **q** | 2 left, 5 up | (5, 6) |

The single arrow from (0, 0) to (5, 6) is **p** + **q**. You can check it against the calculation (5, 6).

In words, the shape is a triangle with two sides **p** and **q** laid end to end, and the third side is the sum. Drawing both vectors from the same starting point and completing the parallelogram gives the same diagonal.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--02-adding-vectors.webp" width="900" height="1020" alt="p = (5,-2) is drawn from the origin, then q = (-1,7) from where p ends. The single arrow from the origin to (4,5) is p + q, found by adding tops and adding bottoms." loading="lazy">
  <figcaption>p + q means do p, then q; add the tops and add the bottoms.</figcaption>
</figure>


### Subtracting

**a** − **b** means **a** + (−**b**). Draw **a**, then draw −**b**, which is **b** reversed, from the end of **a**. Another view: **a** − **b** is the vector that goes from the end of **b** to the end of **a** when both start at the same point.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--03-subtracting-vectors.webp" width="900" height="1026" alt="p = (5,-2), then -q = (1,-7) from the end of p. The arrow from the origin to (6,-9) is p - q, the same as subtracting entry by entry." loading="lazy">
  <figcaption>p − q is p plus the opposite of q.</figcaption>
</figure>


### Scalar multiples

2**a** is an arrow in the same direction as **a**, twice as long. −**a** is the same length, pointing the opposite way. −½**a** points the opposite way and is half as long.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--04-scalar-multiples.webp" width="900" height="866" alt="r = (6,-4) with 3r = (18,-12) three times as long, half r = (3,-2) half as long, and -2r = (-12,8) twice as long and reversed. All lie along the same line." loading="lazy">
  <figcaption>Multiplying by k scales both entries and keeps the arrow parallel to r.</figcaption>
</figure>


## Commutative and associative properties

**Addition is commutative**: the order does not change the sum.

**a** + **b** = **b** + **a**

On a diagram, the two routes round a parallelogram, **a** then **b** or **b** then **a**, end at the same corner.

**Addition is associative**: you can group in any way.

(**a** + **b**) + **c** = **a** + (**b** + **c**)

Because of this you can write **a** + **b** + **c** with no brackets.

**Subtraction is not commutative.** **b** − **a** = −(**a** − **b**), so swapping the order reverses the vector.

### Worked example 4: checking the properties

Let **a** = (2, −3), **b** = (5, 4) and **c** = (−1, 6).

```
(a + b) + c = (7, 1) + (-1, 6) = (6, 7)
a + (b + c) = (2, -3) + (4, 10) = (6, 7)
```

Both groupings give (6, 7), as the associative property says. Also **a** − **b** = (−3, −7) but **b** − **a** = (3, 7). These are negatives of each other, not equal.

One example illustrates a property. It does not prove it. A proof would use letters for the entries.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--01-commutative-associative-parallelogram.webp" width="900" height="1180" alt="a=(2,-3) and b=(5,4). Going along a then b, or b then a, reaches (7,1), the two routes round a parallelogram. (a+b)+c and a+(b+c) both equal (6,7) for c=(-1,6). a-b=(-3,-7) but b-a=(3,7)." loading="lazy">
  <figcaption>Adding in either order reaches the same point, but subtraction order reverses the vector.</figcaption>
</figure>


## Geometrical problems using vectors

The key idea is the **route method**. To find a vector between two points, travel along edges you already know. Going along an edge in the direction of its arrow adds the vector. Going against it subtracts the vector.

If the route passes through a point that divides a line in a ratio, find that point's vector first. For example, if X is on PQ with PX : XQ = 2 : 3, then →PX = ²⁄₅ →PQ.

### Worked example 5: midpoints in a parallelogram

In parallelogram OABC, let **a** stand for →OA and **c** for →OC. M halves AB and N halves BC. Find →MN and say how it relates to →AC.

Since OABC is a parallelogram, →CB = **a** and →AB = **c**. So →OB = **a** + **c**.

```
OM = OA + (1/2)AB = a + (1/2)c
ON = OC + (1/2)CB = c + (1/2)a
MN = ON - OM = c + (1/2)a - a - (1/2)c = (1/2)c - (1/2)a
```

So →MN = ½(**c** − **a**). Now →AC = →AO + →OC = −**a** + **c** = **c** − **a**.

Therefore →MN = ½→AC. MN is parallel to AC and half its length.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--02-parallelogram-midpoints.webp" width="900" height="940" alt="Parallelogram OABC with OA=a, OC=c. M midpoint of AB, N midpoint of BC. MN = half of (c-a), which is half of AC, so MN is parallel to AC. Drawn with a=(6,1), c=(2,5)." loading="lazy">
  <figcaption>MN = ½AC, so it is parallel to AC and half as long.</figcaption>
</figure>


### Worked example 6: ratio and collinear points

In triangle OPQ, →OP = **p** and →OQ = **q**. X lies on PQ with PX : XQ = 2 : 3. The point Y is such that →OY = 3**p** + 2**q**. Show that O, X and Y lie on a straight line.

```
PQ = -p + q = q - p
PX = (2/5)(q - p)
OX = OP + PX = p + (2/5)q - (2/5)p = (3/5)p + (2/5)q
```

Compare with →OY:

```
OY = 3p + 2q = 5 x ((3/5)p + (2/5)q) = 5 OX
```

So →OY = 5→OX. The two vectors are parallel and both start at O, so O, X and Y lie on one straight line. Also OX : OY = 1 : 5.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--03-collinear-ratio-proof.webp" width="900" height="986" alt="Triangle OPQ, X on PQ with PX:XQ=2:3 so OX = 3/5 p + 2/5 q. Y has OY = 3p+2q = 5OX, so O, X and Y lie on one line with OX:OY = 1:5." loading="lazy">
  <figcaption>OY is a multiple of OX and both start at O, so O, X, Y are collinear.</figcaption>
</figure>


### Worked example 7: parallel and collinear with numbers

A is (1, −2), B is (4, 3) and C is (10, 13). Show that A, B and C are collinear.

```
AB = (4 - 1, 3 - (-2)) = (3, 5)
AC = (10 - 1, 13 - (-2)) = (9, 15) = 3(3, 5)
```

So →AC = 3→AB. The vectors are parallel and share the point A, so A, B and C are collinear, with AC three times AB.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-vectors-and-vector-geometry--06-collinear-abc-numbers.webp" width="900" height="760" alt="A(1, −2), B(4, 3) and C(10, 13) on a grid. AB = (3, 5) and AC = (9, 15) = 3AB, so three equal steps from A pass through B and reach C, and the points are collinear." loading="lazy">
  <figcaption>AC = 3AB with a shared point A means A, B and C are on one line.</figcaption>
</figure>


### Method for a proof

Always finish a "show that" with a sentence naming the property: "parallel and share a point, so collinear". Parallel alone only gives parallel lines. The shared point is what makes them one line.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--07-vector-proof-midpoints.webp" width="900" height="945" alt="In triangle OAB, M and N are midpoints of OA and OB. MN = ON - OM = half of (b - a), and AB = b - a, so MN is half of AB and parallel to it. Shown with a = (8,2), b = (2,6)." loading="lazy">
  <figcaption>Writing every vector in terms of a and b shows MN = half of AB, so the lines are parallel.</figcaption>
</figure>


## Common errors

* Writing →AB when you mean →BA. Read the letters as "from A to B".
* Subtracting coordinates the wrong way round. For →AB use B minus A.
* Dropping a sign when subtracting a column with a negative entry, such as 7 − (−2).
* Multiplying only one entry in a scalar multiple.
* Treating a column vector as a coordinate pair, or the reverse. A vector can sit anywhere; a point cannot.
* Saying vectors are parallel because they look alike. Show one is a scalar multiple of the other.
* Calling two lines "collinear" without a common point.
* Leaving a fraction of a vector uncombined. Collect the **a** terms and the **b** terms and write the answer as one expression.
* Assuming **a** − **b** = **b** − **a**.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), specification Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA. Statement G22, section 3.3.3 Transformations, Matrices and Vectors.
