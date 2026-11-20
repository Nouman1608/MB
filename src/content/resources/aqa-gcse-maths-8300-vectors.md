---
title: "AQA GCSE Mathematics 8300: Vectors -- Study Guide"
seoTitle: "AQA GCSE Maths 8300 Vectors Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Geometry and measures"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 4
syllabusTopics:
  - qualification: "gcse"
    topic: "geometry-and-measures-aqa-gcse-maths"
  - qualification: "gcse"
    topic: "geometry-and-measures-aqa-gcse-maths"
    subtopic: "vectors-aqa-gcse-maths"
description: "Study guide for AQA GCSE Maths 8300 section 3.4.3 (G24, G25): translations as column vectors, adding and subtracting vectors, scalar multiples, and vector proofs."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches section **3.4.3 Vectors** of the AQA GCSE Mathematics (8300) specification (content references G24 and G25). It goes deeper than the topic-level [geometry and measures study guide](/resources/aqa-gcse-maths-8300-geometry-and-measures/). Use it with the [revision notes](/resources/aqa-gcse-maths-8300-vectors-revision-notes/) and the [practice questions](/resources/aqa-gcse-maths-8300-vectors-practice/).

Vectors appear on all three papers. Column vector arithmetic can be tested at either tier. Using vectors to build geometric arguments and proofs is Higher tier only.

## What this section covers

| Ref | Content | Tier |
|---|---|---|
| G24 | Describe translations as 2D vectors | Both |
| G25 | Addition and subtraction of vectors, multiplication by a scalar, diagrammatic and column representations | Both |
| G25 | Use vectors to construct geometric arguments and proofs | Higher tier only |

## What is a vector?

A **vector** has both a **size** (magnitude) and a **direction**. A **scalar** has size only, such as a mass of 5 kg. Two vectors are equal if they have the same size and the same direction, wherever they are drawn.

**Notation.**

- In print, a vector is written in bold, for example **a**, or as AB with an arrow above the letters for the journey from A to B (this page writes it simply as AB). In handwriting, underline a letter: a̲.
- The vector from B to A is the **opposite**: BA = −AB.

**Column vectors.** The vector (x, y), written as a column with x on top, means "move x units right, then y units up". A negative x means left; a negative y means down. In this guide a column vector is written as (x, y) with the top entry first.

## Translations as vectors (G24)

A **translation** moves every point of a shape by the same vector.

**Example 1.** Translate the point (1, 4) by the vector (3, −2). New point = (1 + 3, 4 − 2) = **(4, 2)**.

**Example 2.** A shape is translated so that point A (2, 1) goes to point B (7, −3). The translation vector = B − A = (7 − 2, −3 − 1) = **(5, −4)**. When describing a translation, give the vector, not "move 5 right and 4 down", unless the question says otherwise.

To undo a translation, use the **opposite vector**: if a shape is moved by (5, −4), the inverse translation is (−5, 4).

## Adding and subtracting vectors (G25)

Add or subtract column vectors **entry by entry**.

**Example 3.** a = (2, 3) and b = (−1, 4).

- a + b = (2 + (−1), 3 + 4) = **(1, 7)**
- a − b = (2 − (−1), 3 − 4) = **(3, −1)**

**Diagrammatically**, a + b means "follow a, then follow b", placing b's start at a's end. The single vector from the start of a to the end of b is the **resultant**.

**The triangle law.** For any points A, B, C: AB + BC = AC. So the journey from A to C directly equals the journey via B.

**Example 4.** AB = (4, 1) and BC = (−1, 5). Then AC = AB + BC = **(3, 6)** and CA = −AC = **(−3, −6)**.

## Multiplying by a scalar (G25)

Multiplying a vector by a number k multiplies each entry by k.

- If k > 1, the vector gets longer in the same direction.
- If 0 < k < 1, it gets shorter.
- If k is negative, it reverses direction.

**Example 5.** With a = (2, 3) and b = (−1, 4): 3a − 2b = (6, 9) − (−2, 8) = (6 + 2, 9 − 8) = **(8, 1)**.

**Parallel vectors.** Two vectors are **parallel** if one is a scalar multiple of the other. (4, −6) and (6, −9) are parallel, because (6, −9) = 1.5 × (4, −6).

**Equations with vectors.** If (x, 3) + (2, y) = (7, 1), compare entries: x + 2 = 7, so x = 5; 3 + y = 1, so y = −2.

## Vectors in diagrams

Many questions give a shape and label two sides with vectors, such as **a** and **b**, then ask for other vectors in terms of **a** and **b**.

**Method.**

1. Find a route from the start point to the end point along known vectors.
2. Moving along an arrow adds that vector; moving against an arrow subtracts it.
3. Simplify by collecting like terms.

**Example 6.** ABCD is a parallelogram with AB = **p** and AD = **q**.

- AC = AB + BC = **p** + **q** (since BC = AD = **q**)
- BD = BA + AD = −**p** + **q** = **q** − **p**
- DC = **p**, because DC is parallel and equal to AB

**Example 7.** In a triangle OAB, OA = **a** and OB = **b**. Then AB = AO + OB = −**a** + **b** = **b** − **a**. If M is the midpoint of AB, then AM = ½(**b** − **a**), and

OM = OA + AM = **a** + ½(**b** − **a**) = ½**a** + ½**b** = ½(**a** + **b**).

## Higher tier only: geometric arguments and proofs (G25)

At Higher tier you use vectors to prove geometric facts.

**To show two lines are parallel:** show one vector is a scalar multiple of the other.

**To show three points are collinear (lie on a straight line):** show two vectors between them are parallel, and they share a common point.

**To show that a point divides a line in a ratio:** write the position using the ratio.

**Example 8 (Higher tier only): the midpoint theorem.** In triangle OAB, OA = **a**, OB = **b**. M is the midpoint of OA and N is the midpoint of OB. Show that MN is parallel to AB and half its length.

- MN = MO + ON = −½**a** + ½**b** = ½(**b** − **a**)
- AB = **b** − **a**
- So MN = ½AB. A scalar multiple means the lines are parallel, and the length is half.

**Example 9 (Higher tier only): collinear points.** PQ = 3**a** + 6**b** and QR = **a** + 2**b**. Then PQ = 3(**a** + 2**b**) = 3QR. PQ and QR are parallel and share the point Q, so P, Q and R lie on a straight line, with PQ three times QR.

**Example 10 (Higher tier only): dividing in a ratio.** In triangle OAB, OA = **a** and OB = **b**. P is on AB with AP : PB = 2 : 3. Then AP = 2/5 of AB, so

OP = OA + AP = **a** + 2/5(**b** − **a**) = 3/5**a** + 2/5**b**.

**Example 11 (Higher tier only): diagonals of a parallelogram bisect each other.** ABCD is a parallelogram with AB = **a** and AD = **b**. Let M be the midpoint of AC.

- AC = **a** + **b**, so AM = ½(**a** + **b**)
- BM = BA + AM = −**a** + ½(**a** + **b**) = ½(**b** − **a**)
- BD = BA + AD = **b** − **a**, so BM = ½BD

So M lies on BD and is its midpoint. The diagonals bisect each other.

### Writing a vector proof

1. Define the vectors you are given.
2. Find the vectors you need by a route, simplifying carefully.
3. Compare them and state the relationship (scalar multiple, equal, parallel).
4. Write a conclusion in words: "so the lines are parallel" or "so P, Q, R are collinear".

## Vectors and coordinates

Vectors link directly to coordinates. If A is the point (1, 2) and B is (6, −1), the vector from A to B is B − A = (6 − 1, −1 − 2) = **(5, −3)**.

**Example 12.** Find the midpoint M of AB using vectors. AM = ½AB = ½(5, −3) = (2.5, −1.5). So M = A + AM = (1 + 2.5, 2 − 1.5) = **(3.5, 0.5)**. This agrees with the usual midpoint rule of averaging the coordinates.

**Example 13.** Two translations in a row add: translating by (2, 1) and then by (−5, 3) is the same as the single translation (2 − 5, 1 + 3) = **(−3, 4)**.

**Example 14.** The triangle with vertices (1, 1), (4, 1) and (4, 3) is translated by (−3, 2). The image has vertices (−2, 3), (1, 3) and (1, 5). The shape and orientation are unchanged; only the position changes.

## Checking your working

- **Length check on a diagram:** the vector should point the way the arrows point; if you go against an arrow, the sign changes.
- **Reasonableness:** if one vector is "twice" another, check that both entries double.
- **Reverse check:** AB + BA should always be (0, 0).
- **Two routes:** work out the same vector by two different routes; if the answers differ, find the mistake.

## Exam technique

- Show each step in a vector expression rather than writing only the answer.
- Write vectors in bold or with an underline, as your teacher expects, so it is clear what is a vector.
- In a "show that" question, work towards the statement given and finish with a sentence.
- Give column vectors with the top entry first and use brackets.

## Common errors

- Adding the top entry to the bottom entry instead of top to top.
- Forgetting that BA = −AB.
- Sign mistakes when subtracting a vector with negative entries.
- Mixing up the point coordinates (x, y) with the vector (x, y); a translation vector is a movement, not a position.
- (Higher tier only) Concluding that lines are collinear with only a scalar multiple and no common point.
- (Higher tier only) Stopping before writing the conclusion in words.
