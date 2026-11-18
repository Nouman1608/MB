---
title: "Cambridge IGCSE Mathematics (0580): Equations"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.05
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "equations-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 2.5 Equations: forming and solving linear, simultaneous, fractional and quadratic equations, and changing the subject of formulas."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.5 Equations** in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is one of the most heavily used parts of the course: almost every later topic ends in an equation to solve. Both tiers study it, but Extended goes much further.

| Statement | Core (C2.5) | Extended (E2.5) |
|---|---|---|
| Construct expressions, equations and formulas | simple ones, including linear simultaneous equations | including simultaneous equations of any kind in the syllabus |
| Solve linear equations in one unknown | yes, e.g. 5 − 2x = 3(x + 7) | yes |
| Solve fractional equations with numerical and linear algebraic denominators | no | yes |
| Solve simultaneous linear equations in two unknowns | yes | yes |
| Solve simultaneous equations, one linear and one non-linear | no | yes, with powers no higher than two |
| Solve quadratic equations by factorisation, completing the square and the quadratic formula | no | yes; solutions may be required in surd form |
| Change the subject of formulas | subject appears once, with no power or root of it | subject may appear twice, or with a power or root |

The quadratic formula is given in the List of formulas at the front of the Extended papers, but you still need to substitute into it accurately. After working through this guide, consolidate with the [equations revision notes](/resources/cambridge-igcse-mathematics-0580-equations-cambridge-igcse-maths-revision-notes/) and the [equations practice questions](/resources/cambridge-igcse-mathematics-0580-equations-cambridge-igcse-maths-practice/).

## Constructing equations (Core and Extended)

A word problem becomes an equation in three steps: choose a letter and say what it stands for, write each quantity in terms of it, then use the one fact that links them.

### Worked example 1: consecutive integers

The sum of three consecutive integers is 72. Find them.

```
Let the smallest be n. The others are n + 1 and n + 2.
n + (n + 1) + (n + 2) = 72
3n + 3 = 72
3n = 69  ->  n = 23
The integers are 23, 24 and 25.
```

### Worked example 2: forming simultaneous equations

Three adult tickets and two child tickets cost $41. One adult ticket and four child tickets cost $27. Find the cost of each ticket.

```
Let an adult ticket cost $a and a child ticket $c.
3a + 2c = 41      (1)
 a + 4c = 27      (2)

(2) × 3:  3a + 12c = 81   (3)
(3) - (1):      10c = 40  ->  c = 4
Substitute in (2):  a + 16 = 27  ->  a = 11
Adult $11, child $4.
```

Check in the equation you did **not** substitute into: 3(11) + 2(4) = 33 + 8 = 41. Always state the answer in the context of the question, with units.

## Linear equations (Core and Extended)

### Worked example 3: brackets on both sides

Solve 7 − 2(x − 4) = 3(x + 1).

```
7 - 2x + 8 = 3x + 3       (-2 × -4 = +8)
15 - 2x = 3x + 3
12 = 5x
x = 12/5 = 2.4
```

Collecting the x terms on the side where the coefficient stays positive (here the right) avoids dividing by a negative.

## Changing the subject

### Worked example 4 (Core): the subject appears once

Make a the subject of v = u + at.

```
v - u = at
a = (v - u)/t
```

Undo the operations in the reverse order to the one in which they were applied to a: multiplied by t, then u added. So subtract u first, then divide by t.

### Worked example 5 (Extended): the subject appears twice

Make x the subject of a(x − 2) = bx + 5.

```
ax - 2a = bx + 5          expand
ax - bx = 5 + 2a          collect x terms on one side
x(a - b) = 5 + 2a         factorise
x = (5 + 2a)/(a - b)
```

The key move is to **factorise** once all the x terms are together. That is the only way to get a single x.

### Worked example 6 (Extended): a root of the subject

Make l the subject of T = 2π√(l/g).

```
T/(2π) = √(l/g)
T^2/(4π^2) = l/g          square both sides (the whole of each side)
l = gT^2/(4π^2)
```

## Fractional equations (Extended)

Multiply every term by the lowest common denominator to clear the fractions, then solve what is left.

### Worked example 7: numerical denominators

Solve (x + 1)/3 − (x − 2)/4 = 2.

```
Multiply every term by 12:
4(x + 1) - 3(x - 2) = 24
4x + 4 - 3x + 6 = 24
x + 10 = 24  ->  x = 14
```

The right-hand side 2 must also be multiplied by 12. Leaving it as 2 is a common slip.

### Worked example 8: algebraic denominators

Solve 4/(x + 1) + 3/x = 2.

```
Multiply every term by x(x + 1):
4x + 3(x + 1) = 2x(x + 1)
7x + 3 = 2x^2 + 2x
0 = 2x^2 - 5x - 3
0 = (2x + 1)(x - 3)
x = -1/2  or  x = 3
```

Neither value makes a denominator zero (x = 0 or x = −1), so both are valid. A fractional equation with linear denominators often becomes a quadratic, so expect two answers.

## Quadratic equations (Extended)

Rearrange to ax² + bx + c = 0 first. Then choose the method:

| Method | Use when | Gives |
|---|---|---|
| Factorisation | the quadratic factorises easily | exact answers |
| Completing the square | asked for, or a = 1 and b is even | exact answers, often in surd form |
| Quadratic formula | it does not factorise, or answers to 2 d.p. or 3 s.f. are asked for | decimal or surd answers |

### Worked example 9: completing the square, surd form

Solve x² − 6x + 4 = 0, giving your answers in the form p ± √q.

```
(x - 3)^2 - 9 + 4 = 0
(x - 3)^2 = 5
x - 3 = ±√5
x = 3 ± √5
```

### Worked example 10: the formula

Solve 2x² + 3x − 7 = 0, giving your answers correct to 2 decimal places.

```
a = 2, b = 3, c = -7
x = (-3 ± √(3^2 - 4 × 2 × (-7))) / (2 × 2)
  = (-3 ± √65) / 4
x = 1.27 or x = -2.77     (1.2655... and -2.7655...)
```

Write the substituted formula before using the calculator; that line earns the method marks even if a keying error follows. Watch the sign: −4ac with c = −7 gives +56.

### Worked example 11: forming and solving

A rectangle is 3 cm longer than it is wide, and its area is 40 cm². Find its width.

```
x(x + 3) = 40
x^2 + 3x - 40 = 0
(x + 8)(x - 5) = 0
x = 5 or x = -8;  a width cannot be negative, so the width is 5 cm.
```

## Simultaneous equations, one linear and one non-linear (Extended)

Rearrange the linear equation to make one letter the subject, substitute into the non-linear one, and solve the resulting quadratic.

### Worked example 12

Solve y = 2x − 1 and x² + y² = 13.

```
x^2 + (2x - 1)^2 = 13
x^2 + 4x^2 - 4x + 1 = 13
5x^2 - 4x - 12 = 0
(5x + 6)(x - 2) = 0
x = 2      ->  y = 2(2) - 1 = 3
x = -6/5   ->  y = 2(-6/5) - 1 = -17/5
```

The answers come in **pairs**. Find each y from the linear equation, not the quadratic, so that you do not create extra, false pairs. Graphically, these are the two points where the line meets the circle.

## Common mistakes

- Multiplying only some terms by the common denominator in a fractional equation.
- Sign errors when a bracket follows a minus: −2(x − 4) = −2x + 8.
- Dividing both sides by x in a quadratic such as x² = 5x, which loses the solution x = 0. Factorise instead: x(x − 5) = 0.
- Not rearranging to "= 0" before factorising a quadratic.
- Squaring only part of a side when removing a root.
- Giving x-values only for simultaneous equations, or pairing the wrong y with an x.

## Exam technique

- **"Solve"** means find every solution; a quadratic usually has two.
- **"Show that"** an equation simplifies to a given quadratic: every line of rearrangement must be shown.
- **"Give your answers in surd form"** or **"in the form p ± √q"** means exact answers; decimals score nothing for accuracy.
- **"Correct to 2 decimal places"** signals the formula. Keep full calculator values until the last step.
- **In context**, reject solutions that make no sense (a negative length) and say why.

## Next steps

- [Equations revision notes](/resources/cambridge-igcse-mathematics-0580-equations-cambridge-igcse-maths-revision-notes/) for the methods on one page and a self-test.
- [Equations practice questions](/resources/cambridge-igcse-mathematics-0580-equations-cambridge-igcse-maths-practice/) with marked answers.
- Fractional equations depend on [algebraic fractions](/resources/cambridge-igcse-mathematics-0580-algebraic-fractions-cambridge-igcse-maths/).
- Completing the square is introduced in [algebraic manipulation](/resources/cambridge-igcse-mathematics-0580-algebraic-manipulation-cambridge-igcse-maths/).

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, C2.5 and E2.5 Equations.
