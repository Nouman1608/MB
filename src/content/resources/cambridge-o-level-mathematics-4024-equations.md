---
title: "Cambridge O Level Mathematics (4024): Equations"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.5
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "equations"
description: "Cambridge O Level Maths 4024 subtopic 2.5 in depth: constructing and solving linear, fractional, simultaneous and quadratic equations, and changing the subject."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.5 Equations** in Topic 2, Algebra and graphs, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027 series. The combined [Indices and Equations study guide](/resources/indices-and-equations/) gives one example of each equation type. This page works through every outcome in 2.5 with fresh examples, including word problems that must be turned into equations first, fractional equations that become quadratics, and formulas where the subject appears twice.

Companion pages: the [equations revision notes](/resources/cambridge-o-level-mathematics-4024-equations-revision-notes/) and the [equations practice questions](/resources/cambridge-o-level-mathematics-4024-equations-practice/).

## What the syllabus asks

The 4024 syllabus lists six outcomes for 2.5:

1. Construct expressions, equations and formulas, including simultaneous equations.
2. Solve linear equations in one unknown.
3. Solve fractional equations with numerical and linear algebraic denominators.
4. Solve simultaneous linear equations in two unknowns.
5. Solve quadratic equations by factorisation, completing the square and the quadratic formula. Solutions may be required in surd form, and the formula is given in the List of formulas.
6. Change the subject of formulas, including where the subject appears twice or there is a power or root of the subject.

## 1. Constructing equations

Define each letter clearly, translate each sentence, then solve.

**Worked example.** A rectangle is 3 cm longer than it is wide. Its area is 40 cm². Find its width.

```
let width = x cm, so length = (x + 3) cm
x(x + 3) = 40
x² + 3x − 40 = 0
(x + 8)(x − 5) = 0
x = −8 or x = 5
```

A width cannot be negative, so the width is **5 cm**. Always say why a root is rejected.

**Worked example (simultaneous).** A theatre sold 25 tickets for $248. Adult tickets cost $12 and child tickets $8. How many of each were sold?

```
let a = adult tickets, c = child tickets
a + c = 25          (1)
12a + 8c = 248      (2)
(1) × 8:  8a + 8c = 200
(2) − that:  4a = 48,  a = 12
c = 25 − 12 = 13
```

**12 adult and 13 child tickets.** Check: 12(12) + 8(13) = 144 + 104 = 248. ✓

## 2. Linear equations

Expand brackets, collect the unknown on one side, then divide.

```
4(2x − 3) = 5x + 9
8x − 12 = 5x + 9
3x = 21
x = 7
```

With numerical fractions, multiply every term by the lowest common denominator first.

```
(x + 1)/3 − (x − 2)/4 = 2        multiply by 12
4(x + 1) − 3(x − 2) = 24
4x + 4 − 3x + 6 = 24
x = 14
```

The minus sign in front of the second fraction applies to its whole numerator: −3(x − 2) = −3x + 6.

## 3. Fractional equations with algebraic denominators

Multiply both sides by every denominator. For two single fractions set equal, this is cross-multiplying.

```
5/(x + 1) = 3/(x − 1)
5(x − 1) = 3(x + 1)
5x − 5 = 3x + 3
x = 4
```

When there is a sum of fractions, the result is often a quadratic.

**Worked example.** Solve 2/(x + 1) + 3/(2x − 1) = 1, giving your answers in surd form.

```
multiply every term by (x + 1)(2x − 1):
2(2x − 1) + 3(x + 1) = (x + 1)(2x − 1)
4x − 2 + 3x + 3 = 2x² + x − 1
7x + 1 = 2x² + x − 1
0 = 2x² − 6x − 2
0 = x² − 3x − 1

x = [3 ± √(9 + 4)] / 2 = (3 ± √13)/2
```

Check that neither answer makes a denominator zero (x ≠ −1 and x ≠ ½); here both are valid.

## 4. Simultaneous linear equations

**Elimination** suits equations already in the form ax + by = c. Make the coefficients of one letter equal, then add or subtract.

```
3x + 2y = 16      (1)
5x − 3y = 14      (2)

(1) × 3:  9x + 6y = 48
(2) × 2:  10x − 6y = 28
add:      19x = 76,  x = 4
in (1):   12 + 2y = 16,  y = 2
```

Add when the signs of the matched terms differ; subtract when they are the same.

**Substitution** suits an equation already rearranged, such as y = 2x − 1. Replace y in the other equation and solve for x.

Always substitute the answers into the equation you did not use for the last step, as a check: 5(4) − 3(2) = 14. ✓

## 5. Quadratic equations

Rearrange so that one side is zero, then choose a method.

### By factorisation

```
2x² − x = 6
2x² − x − 6 = 0
(2x + 3)(x − 2) = 0
x = −3/2 or x = 2
```

Never divide both sides by x: in x² = 5x, that loses the root x = 0. Instead write x² − 5x = 0, x(x − 5) = 0, so x = 0 or 5.

### By completing the square

**Worked example.** Solve x² + 6x − 2 = 0, giving your answers in surd form.

```
(x + 3)² − 9 − 2 = 0
(x + 3)² = 11
x + 3 = ±√11
x = −3 ± √11
```

The ± is essential; missing it loses one of the two solutions.

### By the quadratic formula

For ax² + bx + c = 0, x = [−b ± √(b² − 4ac)] / 2a. The formula is on the List of formulas, but you must substitute correctly.

**Worked example.** Solve 3x² − 5x − 4 = 0, giving your answers correct to 2 decimal places.

```
a = 3, b = −5, c = −4
b² − 4ac = 25 − 4(3)(−4) = 25 + 48 = 73
x = [5 ± √73] / 6
x = 2.26 or x = −0.59
```

The two most common slips are writing −b as −5 when b is already negative, and treating −4ac as 25 − 48.

**Choosing a method:** try factorising first; if it does not factorise, or the question asks for surds or decimals, use the formula or completing the square. If the question says "by completing the square", that method must be used.

## 6. Changing the subject

Use inverse operations in reverse order, doing the same to both sides.

### Power or root of the subject

**Worked example.** Make r the subject of V = (1/3)πr²h.

```
3V = πr²h
r² = 3V / (πh)
r = √(3V / (πh))
```

### Subject appearing twice

Collect all terms containing the subject on one side, factorise it out, then divide.

**Worked example.** Make x the subject of a(x + 3) = 2x − 5.

```
ax + 3a = 2x − 5
ax − 2x = −5 − 3a
x(a − 2) = −5 − 3a
x = (−5 − 3a)/(a − 2)   or   x = (5 + 3a)/(2 − a)
```

Both final forms are equivalent; multiplying top and bottom by −1 turns one into the other.

## Exam technique

- **Solve**: show each step. With surds, leave answers exact, such as −3 ± √11; on Paper 2, give decimals to the accuracy asked, or 3 significant figures.
- **Show that** an equation simplifies to a given quadratic: every line must be shown, because the answer is given.
- **Write down** simultaneous equations from a context: define the letters first.
- In context problems, state the final answer in words with units, and reject impossible roots with a reason.

## Common mistakes

- Multiplying only some terms by the common denominator.
- Losing the sign of a second numerator: −(x − 2) is −x + 2.
- Subtracting equations whose matched terms have opposite signs.
- Dividing by x and losing x = 0.
- Missing the ± when taking a square root.
- Substituting b = −5 into −b as −5.
- Not factorising out the subject when it appears twice.

For the factorising and completing-the-square skills used here, see the [algebraic manipulation study guide](/resources/cambridge-o-level-mathematics-4024-algebraic-manipulation/); for fractions, the [algebraic fractions study guide](/resources/cambridge-o-level-mathematics-4024-algebraic-fractions/).
