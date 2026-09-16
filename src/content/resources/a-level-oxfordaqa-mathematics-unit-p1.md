---
title: "OxfordAQA International A-Level Mathematics: Unit P1 Pure Maths (9660)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Maths (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
description: "Algebra, coordinate geometry, differentiation, integration, and sequences and series -- the full content of Unit P1 for OxfordAQA International AS and A-Level Mathematics (9660)."
author: "marlbridge-academic-team"
publishedDate: 2026-08-21
featured: false
---

This guide covers **Unit P1: Pure Maths**, one of five top-level
units in OxfordAQA International AS and A-level Mathematics (9660):
Unit P1, Unit PSM1, Unit P2, Unit S2 and Unit M2. A candidate for the
full International A-level sits four of these five -- Unit P1, Unit
PSM1, Unit P2, and either Unit S2 or Unit M2 -- since S2 and M2 are
alternatives, not both compulsory.
The qualification is modular: the International AS (Unit P1 + Unit
PSM1) is 50% of the full International A-level content and 40% of its
marks, with the full International A-level adding Unit P2 plus a
choice of Unit S2 (Statistics) or Unit M2 (Mechanics).

## Where this fits in 9660

Unit P1 is one of the two units that make up the International AS,
alongside Unit PSM1 (which itself combines further pure maths,
statistics and mechanics sub-units). The pure maths techniques
introduced here -- differentiation, integration, sequences -- are
applied directly within the statistics and mechanics content
throughout the rest of the qualification.

## Syllabus coverage

**OXFORDAQA INTERNATIONAL A-LEVEL MATHEMATICS (9660) — UNIT P1: PURE
MATHS (INTERNATIONAL AS)**

- P1.1 Algebra — algebraic manipulation and the properties of
algebraic expressions
- P1.2 Coordinate geometry — equations of lines and curves in the
coordinate plane
- P1.3 Differentiation — rates of change and differentiation
techniques
- P1.4 Integration — integration techniques and their applications
- P1.5 Sequences and series — arithmetic and geometric sequences and
series

## How to approach it

Algebra (P1.1) underpins every other sub-topic in this unit, so
fluency here determines how quickly the rest of Unit P1 comes
together. Differentiation and integration (P1.3-P1.4) are best learned
as a connected pair -- one finds rates of change, the other reverses
the process -- and both recur directly within Unit PSM1's mechanics
content, so treat mastery here as an investment across the whole
International AS, not just this unit. Sequences and series (P1.5)
tends to be the most self-contained sub-topic; practise recognising
whether a given sequence is arithmetic or geometric before choosing a
solution method, since misidentifying the type is a common source of
error.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660)
specification, Version 5.2 —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf).

## Algebra and functions

The foundation of P1 is confident algebraic manipulation: indices and surds, expanding and factorising, and completing the square.

```
x^2 + 6x + 1 = (x + 3)^2 - 9 + 1 = (x + 3)^2 - 8
```

Completed square form gives the turning point directly — here (-3, -8) — and is the fastest route to the minimum or maximum value of a quadratic.

The **discriminant** determines the nature of the roots:

```
b^2 - 4ac > 0   two distinct real roots
b^2 - 4ac = 0   one repeated root
b^2 - 4ac < 0   no real roots
```

Questions asking for the range of k for which an equation has real roots almost always reduce to an inequality in the discriminant.

## Coordinate geometry

For a line through two points, gradient is the change in y over the change in x. Perpendicular gradients multiply to -1. The intersection of a straight line and a curve is found algebraically, interpreting equal/distinct/no real roots geometrically. This (P1.2) is the full extent of P1's coordinate geometry -- the circle is not P1 content (see below).

## Differentiation and integration

The gradient of a curve is defined as the limit of the gradient of a chord -- this limit definition **is** required -- but carrying out differentiation from first principles itself is not tested; routine work instead uses the rule that the derivative of ax^n is anx^(n-1).

The derivative gives the gradient of the tangent, so it is used for tangents and normals, and for stationary points where dy/dx = 0. The second derivative classifies them: positive means a minimum, negative a maximum.

Integration reverses differentiation, raising the power and dividing, and requires + c for indefinite integrals. A definite integral evaluates the area under a curve between limits — with the caution that area below the x-axis evaluates as negative and must be handled separately if total area is wanted. (P1 questions will not set regions that are partially above and partially below the x-axis, and will not require identifying points of inflection.)

## Circle geometry and trigonometry — this is Unit PSM1 content, not P1

**P1 has no circle geometry and no trigonometry at all** (the sine, cosine and tangent graphs are PP1.2 content too). Both topics
are genuine 9660 content, but they belong to the *other* AS unit, Unit PSM1's pure maths strand
(PP1.1 Circle and PP1.2 Trigonometry) -- not to P1. Every P1 candidate also sits PSM1, so the
material below is included here as a convenient single reference, but it should not be revised as
if it will be examined on a P1 paper.

A circle with centre (a, b) and radius r has equation:

```
(x - a)^2 + (y - b)^2 = r^2
```

Given the expanded form, complete the square in both x and y to recover the centre and radius. Two circle properties recur: the perpendicular from the centre to a chord bisects it, and the tangent is perpendicular to the radius at the point of contact.

The identities sin^2 x + cos^2 x = 1 and tan x = sin x / cos x convert most equations into a single function that can be solved. Always give **all** solutions in the stated interval, using the symmetry of the graph rather than the calculator's single value. This, too, is PSM1 (PP1.2) content, along with the sine and cosine rules and the area formula.

## Worked example

Find the coordinates and nature of the stationary point of y = x^2 - 6x + 5.

```
dy/dx = 2x - 6

Set to zero:  2x - 6 = 0  ->  x = 3
y = 9 - 18 + 5 = -4       ->  (3, -4)

d2y/dx2 = 2, which is positive  ->  minimum
```

Completing the square gives (x - 3)^2 - 4, confirming the same turning point — a useful check.

## Common mistakes

Omitting + c in indefinite integration. Losing solutions in trigonometric equations by taking only the calculator value. Sign errors when completing the square with a negative coefficient. Treating a negative definite integral as an error rather than as area below the axis. Using the discriminant condition for real roots as b^2 - 4ac > 0 when a repeated root is also real, so the condition should be >= 0.

## Quick revision checklist

- Manipulate indices and surds and complete the square fluently.
- Use the discriminant to determine the nature of roots and solve for an unknown constant.
- Find equations of lines and perpendiculars, and the intersection of a line and a curve (P1).
- Differentiate to find tangents, normals and stationary points, and classify them (P1).
- Integrate, including definite integrals and areas below the axis (P1).
- Find equations of circles and apply circle properties, and solve trigonometric equations giving every solution in the given interval (PSM1, not P1 -- see above).
