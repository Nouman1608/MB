---
title: "AQA A-level Mathematics: Solving Simultaneous Equations by Elimination and Substitution (7357) -- Revision Notes"
seoTitle: "AQA A-level Maths Simultaneous Equations Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Solving Simultaneous Equations by Elimination and Substitution"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b4-simultaneous-equations-aqa-alevel-maths"
description: "Condensed revision notes on simultaneous equations by elimination and substitution, line-curve cases and a self-test, for AQA A-level Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense statement B4 of Section B (Algebra and functions) in the AQA A-level Mathematics specification, first teaching 2017. For full explanations and longer worked examples, read the [study guide](/resources/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and/). When you are ready to test yourself, use the [practice set](/resources/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and-practice/). Course links: [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/), [printable checklist](/checklists/aqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## The B4 statement in one line

Use elimination and substitution on pairs of equations in two unknowns, including one linear and one quadratic. Both methods must be familiar. You choose whichever suits the pair.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and--06-amth-simultaneous-lawns.webp" width="900" height="718" alt="Perimeters give the line a+b=11 and areas give the circle a^2+b^2=61, meeting at (5, 6) and (6, 5). Both points are the same pair of lawns with sides 5 m and 6 m." loading="lazy">
  <figcaption>The line and circle meet at two symmetric points that describe one real-life answer.</figcaption>
</figure>


## Key ideas

| Idea | Summary |
|---|---|
| Solution | A pair of values (x, y) that satisfies both equations |
| Graph meaning | A point lying on both graphs |
| Two lines | One point, no point (parallel) or every point (same line) |
| Line and quadratic curve | Two points, one point (tangent) or none |
| Answer format | Matched pairs, exact where the question asks for exact |

## Method boxes

**Elimination (two linear equations)**

1. Label the equations (1) and (2).
2. Scale one or both so one letter has equal coefficients.
3. Add if the signs differ, subtract if they match.
4. Solve for the remaining letter.
5. Substitute back to find the other letter.
6. Check in the equation you did not use for step 5.

**Substitution (linear and quadratic)**

1. Rearrange the linear equation so one letter stands alone.
2. Replace that letter in the quadratic, with brackets.
3. Expand and gather terms as ax² + bx + c = 0.
4. Solve by factorising, completing the square or the formula.
5. Return to the linear equation for each matching value.
6. Write the answers as pairs.

## Discriminant cases for a line and a curve

After equating, you have ax² + bx + c = 0 in x. Then:

| b² − 4ac | Meaning |
|---|---|
| positive | line cuts the curve at two points |
| zero | line is a tangent: one repeated root |
| negative | line does not meet the curve |

If the line contains a letter such as k, the discriminant is an expression in k. Set it equal to zero, greater than zero or less than zero to answer the question. The tangent case also gives the point of contact: the repeated root is x = −b/(2a).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and--04-amth-simultaneous-discriminant.webp" width="900" height="968" alt="Lines y=2x+k are drawn with the curve y=x^2-4x+6; the discriminant is 12+4k. For k=0 it is 12 (two points), for k=-3 it is 0 (tangent at (3, 3)) and for k=-6 it is -12 (no intersection)." loading="lazy">
  <figcaption>The sign of b^2 - 4ac tells you whether a line cuts, touches or misses a curve.</figcaption>
</figure>


## Worked reminders

**Elimination.** Solve 2x + 5y = 16 and 3x − 2y = 5.

```
(1)×2: 4x + 10y = 32
(2)×5: 15x − 10y = 25
Add:   19x = 57, so x = 3
From (1): 6 + 5y = 16, so y = 2
Check (2): 9 − 4 = 5 ✓
```

**Quadratic term in xy.** Solve x − y = 3 and xy = 28.

```
x = y + 3
(y + 3)y = 28
y² + 3y − 28 = 0
(y + 7)(y − 4) = 0
y = −7 or y = 4
x = −4 or x = 7
```

The solutions are (−4, −7) and (7, 4). Both pairs satisfy xy = 28: (−4)(−7) = 28 and 7 × 4 = 28.

**Tangent condition with a letter.** Find k so that y = 4x + k touches y = x² + 2x + 6.

```
x² + 2x + 6 = 4x + k
x² − 2x + (6 − k) = 0
Discriminant: 4 − 4(6 − k) = 4k − 20
Tangent: 4k − 20 = 0, so k = 5
Contact: x² − 2x + 1 = 0, x = 1, y = 4(1) + 5 = 9
```

For two intersections you would need 4k − 20 > 0, so k > 5. For none, k < 5.

**Context pair.** A rectangle has perimeter 34 cm and area 60 cm². With length x and width y:

```
x + y = 17 and xy = 60
x(17 − x) = 60
x² − 17x + 60 = 0
(x − 5)(x − 12) = 0
```

The sides are 5 cm and 12 cm. Define your letters, state the equations, and finish with a sentence that answers the question.

## Special cases for two linear equations

| What elimination gives | Meaning |
|---|---|
| A single value for x, then y | One solution: the lines cross |
| A false statement such as 0 = 7 | No solution: parallel lines |
| A true statement such as 0 = 0 | Infinitely many solutions: the same line |

Compare the ratios of coefficients before you start. If the x and y coefficients are in the same ratio but the constants are not, the lines are parallel.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and--01-amth-simultaneous-solutions.webp" width="900" height="1200" alt="Three graphs show two lines crossing at (23/11, 15/11), two parallel lines 2x+3y=5 and 4x+6y=7 that never meet, and the coincident lines x+2y=3 and 2x+4y=6. Elimination gives one pair, a false statement 0 = -3, or infinitely many solutions respectively." loading="lazy">
  <figcaption>A solution is a point on both lines, so lines can cross once, never, or coincide.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and--03-amth-simultaneous-line-circle.webp" width="900" height="972" alt="The line y=2x+1 meets the circle x^2+y^2=34 at two points. Substituting gives 5x^2+4x-33=0 so x=11/5 or -3, and the line gives y=27/5 and -5." loading="lazy">
  <figcaption>Substitute the linear equation into the quadratic, then use the line to find each partner value.</figcaption>
</figure>


## Checking your answers

- Put both values back into the equation that you did not use last.
- For a line and curve, check that each point lies on the line and on the curve.
- Check that the number of solutions agrees with the discriminant.
- In a context problem, reject values that cannot happen, such as a negative length.

## Link with coordinate geometry

Finding where a line meets a curve is the algebra behind many coordinate geometry questions. Once you have the two intersection points, you can find the midpoint with ((x₁ + x₂)/2, (y₁ + y₂)/2) and the distance with √((x₂ − x₁)² + (y₂ − y₁)²). For a line y = x + c meeting a curve, the two x-values differ by the square root of the discriminant divided by a, which gives a short route to a chord length. See [coordinate geometry in the plane](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane/) for the geometry.

## Must-know distinctions

- **Elimination versus substitution.** Elimination removes a letter by adding or subtracting scaled equations. Substitution replaces a letter by an expression. With a quadratic in the pair, use substitution.
- **Equating versus substituting.** If both equations start y = ..., setting the right-hand sides equal is a quick substitution.
- **No solution versus no real solution.** Parallel lines give no solution. A line and curve with a negative discriminant give no real intersection.
- **Tangent versus intersection.** A tangent gives one repeated root, so one point, not two.
- **x-values versus points.** The quadratic in x gives only x-values. The question wants points.
- **Exact versus decimal.** Surd answers stay as surds unless you are asked for a rounded form.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and--02-amth-simultaneous-elimination.webp" width="900" height="962" alt="The lines 5x+3y=11 and 2x-7y=4 cross at (89/41, 2/41). Scaling by 7 and 3 and adding gives 41x = 89, a vertical line through the same crossing point; substituting gives y = 2/41." loading="lazy">
  <figcaption>Adding the scaled equations produces a new line through the same intersection point.</figcaption>
</figure>


## Quick self-test

Attempt every question before checking the answers below.

1. Solve 3x + 2y = −1 and 5x − 4y = 13.
2. Solve x + y = 9 and y = x² − 3.
3. Solve x + y = 10 and x² + y² = 52.
4. Find the values of k for which the line y = 2x + k does not meet the curve y = x² + 1.
5. Does the pair 3x − 6y = 2 and x − 2y = 5 have a solution? Explain.
6. Does the line y = 3x − 4 meet the curve y = x²? Show your reasoning.
7. Solve y = x − 1 and y = x² − 2x − 2, giving exact answers.
8. The line y = 4 − x meets the curve x² + y² = 10. Find the points of intersection.
9. The line y = mx, with m > 0, is a tangent to y = x² − 4x + 9. Find m and the point of contact.
10. Write down the quadratic you would solve first to find where y = 5x − 6 meets y = x² − x + 3.

### Answers

1. Double (1) and add to (2): 6x + 4y = −2, plus 5x − 4y = 13 gives 11x = 11, so x = 1. Then y = −2. **(1, −2)**
2. x + x² − 3 = 9, so x² + x − 12 = 0, (x + 4)(x − 3) = 0. **(3, 6) and (−4, 13)**
3. y = 10 − x gives x² + (10 − x)² = 52, so x² − 10x + 24 = 0. **(4, 6) and (6, 4)**
4. x² + 1 = 2x + k gives x² − 2x + (1 − k) = 0. The discriminant is 4k. No meeting needs 4k < 0, so **k < 0**.
5. Multiply the second equation by 3: 3x − 6y = 15. This contradicts 3x − 6y = 2. **No solution: the lines are parallel.**
6. x² = 3x − 4 gives x² − 3x + 4 = 0, with discriminant 9 − 16 = −7. **No, the line does not meet the curve.**
7. x − 1 = x² − 2x − 2 gives x² − 3x − 1 = 0, so x = (3 ± √13)/2 and y = x − 1. **((3 + √13)/2, (1 + √13)/2) and ((3 − √13)/2, (1 − √13)/2)**
8. x² + (4 − x)² = 10 gives x² − 4x + 3 = 0. **(1, 3) and (3, 1)**
9. x² − (4 + m)x + 9 = 0 needs (4 + m)² = 36, so m = 2 (rejecting m = −10). The repeated root is x = 3, y = 6. **m = 2, point (3, 6)**
10. 5x − 6 = x² − x + 3 gives **x² − 6x + 9 = 0**, which is (x − 3)² = 0, so the line is a tangent.

## Exam technique

- Show the substitution line and the rearranged quadratic. They make your method easy to follow and to credit.
- If a question says "show that", reach the printed result with every line of working.
- Read the command words: "solve" wants points, "find the range of k" wants an inequality in k.
- Keep exact fractions and surds in the working and round only at the end.

## Where marks are usually lost

- Scaling one side only, so the equation is no longer balanced.
- Adding when the signs match, or subtracting when they differ.
- Dropping the brackets around a substituted expression before squaring.
- Giving x-values only and not the partner y-values.
- Pairing the wrong y with an x because the substitution went into the quadratic.
- Writing a discriminant with a sign error when b is negative.
- Setting the discriminant greater than zero when the question says "tangent".
- Rounding too early on surd questions.
- Cancelling a common factor of x, which loses the solution x = 0.

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, published by AQA. Statement B4, Section B: Algebra and functions.
