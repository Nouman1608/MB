---
title: "OxfordAQA International AS and A-level Mathematics: Vectors and vector equations of lines (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Vectors Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Vectors in two and three dimensions and vector equations of lines"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 199
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-vectors-oxfordaqa-alevel-maths"
description: "Condensed recall notes on 2D and 3D vectors, position vectors, vector equations of lines, intersection, parallel and skew lines for OxfordAQA 9660."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed notes for the final weeks, aligned to the OxfordAQA International AS and A-level Mathematics specification (9660, Version 5.2), section P2.10 (first part). This content is part of International A-level (A2) Unit P2 and is not examined at International AS. For full explanations, read the [study guide](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-practice/).

Other links: [course hub](/boards/oxfordaqa/a-level/mathematics/), [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), [exam preparation advice](/resources/oxfordaqa-a-level-mathematics-exam-preparation/) and the [free 10-minute diagnostics](/diagnostics/).

Column vectors are written across the line here: (3, −4, 12) is a column of 3, −4, 12. Questions use columns, but i, j, k is allowed.

## Key results

| Idea | Result |
|---|---|
| Vector in 3D | (x, y, z) = x i + y j + z k |
| Magnitude | √(x² + y² + z²) |
| Add, subtract | Component by component |
| Scalar multiple | Multiply every component |
| Parallel | a = λb for a number λ (negative λ allowed) |
| Position vector | OA, same components as the coordinates of A |
| Vector from A to B | AB = OB − OA ("end minus start") |
| Distance between A and B | \|AB\| |
| Midpoint of AB | OA + ½AB = (OA + OB)/2 |
| Point dividing AB in ratio m : n | OA + m/(m + n) × AB |
| Line | r = a + tb |
| Collinear points | AB = λAC |

## Magnitude and scalar multiples

Squares remove signs, so a negative component never gives a negative contribution.

```
|(1, −2, 2)| = √(1 + 4 + 4) = 3
|(3, 4, 12)| = √(9 + 16 + 144) = 13
```

Doubling a vector doubles its length. Multiplying by −1 reverses it. A unit vector in the direction of a is a divided by |a|.

Geometry: a + b is the diagonal of the parallelogram on a and b, and also the triangle path (a then b). a − b is the vector from the head of b to the head of a.

**Reminder.** a = (1, 3, −2), b = (4, 0, 1). Then 2a − b = (2 − 4, 6 − 0, −4 − 1) = (−2, 6, −5).

## Method: show two vectors are parallel, or find an unknown

1. Compare one pair of components to find λ.
2. Apply λ to every other component. All must agree.
3. If an unknown is in the question, use λ to solve for it.

## Method: AB, distance, midpoint, ratio

1. Write AB = OB − OA.
2. Distance is the magnitude of AB.
3. For a point P with AP : PB = m : n, the fraction along AB is m/(m + n), so OP = OA + m/(m + n) × AB.

**Reminder.** P (1, 2, 3), Q (4, 0, −1). PQ = (3, −2, −4), so |PQ| = √(9 + 4 + 16) = √29.

## Method: proving three points are collinear

1. Find two vectors between the points, for example AB and BC.
2. Show that one vector is a number times the other.
3. Say that they share a point, so the three points lie on one line.

Parallel vectors alone are not enough: the shared point is what makes the points collinear.

## Vector equation of a line

```
r = a + tb     a = a point on the line     b = direction     t any real number
```

- Through two points A and B: use a = OA and b = AB.
- Equivalent forms: a can be any point of the line, b any non-zero multiple of the direction.
- To test whether a point is on the line: find t from one component, then check the rest.
- In 2D, eliminate t to get y = mx + c. The gradient is (y-direction)/(x-direction).

**Reminder (2D).** r = (4, 1) + t(−3, 2) gives x = 4 − 3t and y = 1 + 2t. So t = (4 − x)/3 and y = 1 + 2(4 − x)/3 = (11 − 2x)/3.

## Method: intersection of two lines

Use different letters: s for line 1, t for line 2.

1. Are the directions parallel? If yes, check whether one point of line 1 lies on line 2. If it does, the lines are the same; if not, they are parallel and distinct. Stop.
2. If not parallel, equate components to form equations in s and t.
3. Solve using two of the equations.
4. In 2D: that is the answer. In 3D: test the third equation.
5. Third equation holds: lines intersect. Substitute s into line 1 for the point, and check with t in line 2.
6. Third equation fails: lines are skew.

## Worked reminders for lines

**Intersection in 3D.** Lines r = (2, 0, 1) + s(1, 1, 2) and r = (5, 1, 0) + t(2, 0, −1).

```
x: 2 + s = 5 + 2t
y: s = 1
z: 1 + 2s = −t
```

The y equation gives s = 1. Then z gives t = −3. Check x: 2 + 1 = 3 and 5 − 6 = −1. These differ, so the lines are skew (the directions are not multiples of each other).

**Changing one letter.** If the question gives both lines with the same parameter λ, rename one of them μ before you start.

**Unknown constant.** If a line contains an unknown such as k, solve for s and t from the two equations without k, then use the remaining equation to find k.

**Geometry with vectors.** In a parallelogram ABCD, AB = DC, so OD = OA + OC − OB. The diagonals AC and BD bisect each other, so the midpoint of AC equals the midpoint of BD.

## Must-know distinctions

| Situation | Directions | Common point | Dimension |
|---|---|---|---|
| Intersecting | Not parallel | Exactly one | 2D or 3D |
| Parallel, distinct | Parallel | None | 2D or 3D |
| Same line | Parallel | Infinitely many | 2D or 3D |
| Skew | Not parallel | None | 3D only |

- A position vector OA is fixed to the origin. A general vector AB is only a displacement.
- A direction vector can be any non-zero multiple: (2, −4, 6) and (−1, 2, −3) give parallel lines.
- A vector equation of a line has one free parameter. A parameter has no meaning outside its own line.

## Quick self-test

1. Find the magnitude of (6, −2, 3).
2. Find 2p − 3q when p = (1, 4, −2) and q = (−2, 0, 1).
3. For what value of m is (m, −9, 12) parallel to (2, 3, −4)?
4. A is (3, −1, 2) and B is (−1, 5, 4). Find AB and the distance AB.
5. Find the midpoint of the points in question 4.
6. Write a vector equation of the line through (1, 1, 0) and (3, 0, 4).
7. Does (7, −2, 8) lie on the line r = (1, 1, 0) + t(2, −1, 4)?
8. Write r = (0, 5) + t(2, 1) in the form y = mx + c.
9. Lines r = (2, 0) + s(1, 3) and r = (0, 4) + t(2, 1) meet. Find the point.
10. Lines r = (0, 0, 1) + s(1, 1, 0) and r = (1, 0, 0) + t(0, 1, 1): are they intersecting, parallel or skew?

### Answers

1. √(36 + 4 + 9) = √49 = **7**.
2. 2p = (2, 8, −4), 3q = (−6, 0, 3). So 2p − 3q = **(8, 8, −7)**.
3. λ = −3 from the second component (−9 = λ × 3). The third gives 12 = (−3)(−4) = 12, which agrees. So m = −3 × 2 = **−6**.
4. AB = (−4, 6, 2). Distance = √(16 + 36 + 4) = √56 = **2√14**.
5. ½(3 − 1, −1 + 5, 2 + 4) = **(1, 2, 3)**.
6. Direction (2, −1, 4). **r = (1, 1, 0) + t(2, −1, 4)**.
7. From x: 1 + 2t = 7, t = 3. Then y = 1 − 3 = −2 and z = 12. The point has z = 8, so **no**.
8. x = 2t, y = 5 + t, so t = x/2 and **y = x/2 + 5**.
9. x: 2 + s = 2t; y: 3s = 4 + t. From the first, t = 1 + s/2. Then 3s = 4 + 1 + s/2, so 5s/2 = 5, s = 2, t = 2. Point **(4, 6)**. Check with line 2: (4, 4 + 2) = (4, 6).
10. Directions (1, 1, 0) and (0, 1, 1) are not multiples. x: s = 1. y: s = t, so t = 1. z: 1 + 0 = 1 for the first line, and t = 1 for the second. Both are 1, so the third equation holds. They **intersect** at (1, 1, 1).

## Where marks are usually lost

- Writing AB = OA − OB, which reverses the vector and the sign of every component.
- Reusing t for both lines, which forces the two parameters to be equal.
- Solving two equations in 3D and stating an intersection without checking the third.
- Saying "not parallel, so skew" without showing that the lines fail to meet.
- Giving the position vector when the question asks for coordinates, or the reverse.
- Making a sign slip when subtracting a negative component, such as 5 − (−2).
- Leaving a distance as a decimal when the answer is a surd and the question needs an exact value.
- Testing a point on a line by checking only one coordinate.
- Forgetting that a negative scalar multiple is still parallel.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA. This page covers section P2.10, first part (Unit P2, International A-level only).
