---
title: "Cambridge O Level Mathematics (4024): Perpendicular Lines"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Coordinate geometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 3.7
syllabusTopics:
  - qualification: "o-level"
    topic: "coordinate-geometry"
  - qualification: "o-level"
    topic: "coordinate-geometry"
    subtopic: "perpendicular-lines-4024"
description: "Study guide to 4024 section 3.7: gradients and equations of perpendicular lines, perpendicular bisectors, right-angle tests and the foot of a perpendicular."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section 3.7, Perpendicular lines, in the Coordinate geometry topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus asks you to **find the gradient and equation of a straight line perpendicular to a given line**. Its notes give two example types: finding the gradient of a line perpendicular to a line written like 2y = 3x + 1, and finding the equation of the perpendicular bisector of the line joining two points. A recap is in the [coordinate geometry revision notes](/resources/o-level-mathematics-coordinate-geometry-revision-notes/), and exam-style questions are in the [perpendicular lines practice questions](/resources/cambridge-o-level-mathematics-4024-perpendicular-lines-practice/).

## What section 3.7 asks for

There are three linked skills.

1. Work out the gradient of a line perpendicular to a given line.
2. Write the equation of a line that is perpendicular to a given line and passes through a given point.
3. Find a perpendicular bisector, which needs the midpoint as well.

The fact behind all three is a single rule about gradients.

## The perpendicular gradient rule

Two lines are perpendicular when they meet at a right angle. If their gradients are m₁ and m₂, then

```
m₁ × m₂ = −1
```

Equivalently, the perpendicular gradient is the **negative reciprocal**. To get it, turn the gradient upside down and change its sign.

| Gradient | Perpendicular gradient |
|---|---|
| 2 | −1/2 |
| −3 | 1/3 |
| 2/5 | −5/2 |
| −3/4 | 4/3 |
| 1 | −1 |

Why does this work? Take a line with gradient 2/3. A step of 3 across gives a rise of 2. Turning that step through a right angle swaps the roles: it now goes 2 across and 3 up or down, in the opposite sense. So the new gradient is −3/2. The product (2/3) × (−3/2) is −1.

There are two exceptions. A horizontal line (gradient 0) is perpendicular to a vertical line (gradient undefined). The rule m₁ × m₂ = −1 cannot be used for those two, because 0 has no reciprocal. Simply write the vertical line as x = k and the horizontal line as y = k.

## Finding the gradient of a perpendicular line

Rearrange the given equation into y = mx + c if needed. Read off m, then take the negative reciprocal.

### Worked example 1

Find the gradient of a line perpendicular to 3y = 5x + 2.

```
y = 5/3 x + 2/3
m = 5/3
perpendicular gradient = −3/5
```

Check: (5/3) × (−3/5) = −1.

### Worked example 2

Find the gradient of a line perpendicular to 4x + 3y = 6.

```
3y = −4x + 6
y = −4/3 x + 2
m = −4/3
perpendicular gradient = 3/4
```

A common error is to flip the fraction but keep the sign. Because the original gradient was negative, the perpendicular gradient is positive.

## The equation of a perpendicular through a point

The method matches the parallel-line method with one extra step.

1. Find the gradient of the given line.
2. Take the negative reciprocal.
3. Substitute the point into y = mx + c, or use y − y₁ = m(x − x₁).
4. Tidy the answer.

### Worked example 3

Find the equation of the line perpendicular to y = 3x − 4 that passes through (6, 1).

```
m = 3, so the perpendicular gradient is −1/3
1 = −1/3 (6) + c
1 = −2 + c
c = 3
y = −1/3 x + 3
```

Multiplying by 3 gives 3y = −x + 9, or x + 3y = 9. Check the point: 6 + 3 = 9. Correct.

### Worked example 4

Find the equation of the line perpendicular to 2x + 5y = 10 that passes through (4, −3).

```
5y = −2x + 10, so m = −2/5
perpendicular gradient = 5/2
y − (−3) = 5/2 (x − 4)
y + 3 = 5/2 x − 10
y = 5/2 x − 13
```

In integer form, 2y = 5x − 26, or 5x − 2y = 26. Check the point: 20 + 6 = 26. Correct.

## The perpendicular bisector

A perpendicular bisector of the segment AB cuts AB in half and meets it at a right angle. So it passes through the midpoint of AB and has the perpendicular gradient.

The midpoint of A(x₁, y₁) and B(x₂, y₂) is ((x₁ + x₂)/2, (y₁ + y₂)/2).

### Worked example 5

Find the equation of the perpendicular bisector of the line joining A(−2, 7) and B(6, 1).

```
midpoint = ((−2 + 6)/2, (7 + 1)/2) = (2, 4)
gradient of AB = (1 − 7)/(6 − (−2)) = −6/8 = −3/4
perpendicular gradient = 4/3
y − 4 = 4/3 (x − 2)
3y − 12 = 4x − 8
3y = 4x + 4
```

The perpendicular bisector is 3y = 4x + 4. Check the midpoint: 3(4) = 12 and 4(2) + 4 = 12. Correct.

Write the three stages separately: midpoint, gradient, equation. Each is likely to earn a mark.

## Testing for a right angle

If two sides of a triangle have gradients that multiply to −1, those sides meet at a right angle.

### Worked example 6

P is (1, 1), Q is (4, 3) and R is (2, 6). Show that angle PQR is a right angle.

```
gradient of QP = (3 − 1)/(4 − 1) = 2/3
gradient of QR = (6 − 3)/(2 − 4) = −3/2
product = (2/3) × (−3/2) = −1
```

The product is −1, so QP is perpendicular to QR and angle PQR = 90°. Notice that the order of the points in the gradients does not matter, as the sign cancels in numerator and denominator.

## Unknown values

### Worked example 7

The line 2y = kx + 3 is perpendicular to y = −x/3 + 1. Find k.

```
gradient of first line = k/2
gradient of second line = −1/3
(k/2) × (−1/3) = −1
−k/6 = −1
k = 6
```

Check: with k = 6, the line is y = 3x + 3/2, with gradient 3. The product 3 × (−1/3) = −1. Correct.

## The foot of a perpendicular

The shortest distance from a point to a line is along the perpendicular. The point where the perpendicular meets the line is called the foot. Finding it uses simultaneous equations.

### Worked example 8

Find the foot of the perpendicular from (7, 0) to the line y = 2x + 1.

```
perpendicular gradient = −1/2
line through (7, 0): y = −1/2 (x − 7) = −x/2 + 7/2
meeting the line: 2x + 1 = −x/2 + 7/2
5x/2 = 5/2
x = 1, and y = 2(1) + 1 = 3
```

The foot is (1, 3). The shortest distance from (7, 0) to the line is the distance to (1, 3), which is √(36 + 9) = √45 = 3√5, or about 6.71.

## Using perpendicular and parallel facts together

Longer questions mix the two rules. Keep the rules straight: equal gradients for parallel, product −1 for perpendicular.

### Worked example 9

A is (1, 2), B is (5, 4) and C is (3, −1). The line l passes through C and is perpendicular to AB. Find where l crosses the x-axis. Then find the equation of the line through (1, −6) that is parallel to l.

```
gradient of AB = (4 − 2)/(5 − 1) = 1/2
gradient of l = −2
y + 1 = −2(x − 3)
y = −2x + 5
```

On the x-axis y = 0, so 2x = 5 and x = 2.5. The point is (2.5, 0).

The line through (1, −6) parallel to l has gradient −2. Then −6 = −2(1) + c, so c = −4 and the line is y = −2x − 4.

Notice the two ideas are used one after the other: first perpendicular, then parallel. Each time the gradient is the thing you carry forward.

## Common mistakes

- Changing the sign but forgetting to invert the fraction, or inverting but keeping the sign.
- Taking the perpendicular gradient of the equation 3y = 5x + 2 as −5/3 or −1/5. The gradient is 5/3 first.
- Using the point from the given line instead of the point the new line must pass through.
- In a perpendicular bisector, using the end point of the segment instead of the midpoint.
- Using the gradient of the segment itself as the gradient of the bisector.
- Forgetting that horizontal and vertical lines are perpendicular to each other.

## Exam technique

- **Find the equation** of the perpendicular bisector: give the midpoint, the gradient of the segment, the perpendicular gradient, then the equation.
- **Show that** two lines are perpendicular: calculate both gradients and show the product is −1.
- A diagram sketch helps you check the sign: a line sloping up to the right is perpendicular to a line sloping down to the right.
- Always substitute your point back in to check.

## Next steps

Work through the [perpendicular lines practice questions](/resources/cambridge-o-level-mathematics-4024-perpendicular-lines-practice/) and recap with the [coordinate geometry revision notes](/resources/o-level-mathematics-coordinate-geometry-revision-notes/).


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 3.7 Perpendicular lines.
