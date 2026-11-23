---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.11 Relationships between trigonometric functions and symmetry of their graphs (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-11"
description: "IB Maths AA HL 3.11 study guide: results such as sin(π − θ) = sin θ from graph symmetry, odd and even functions, and using symmetry to find solutions."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.11 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) covers the relationships between trigonometric functions and the symmetry properties of their graphs. It is additional higher level (AHL) content, examined at HL only. Typical results are sin(π − θ) = sin θ and cos(π/2 − θ) = sin θ. The aim is to see each result as a fact about a graph or the unit circle, so you can produce it quickly, check it with a compound angle identity, and use it to simplify expressions and find solutions.

This page goes deeper on 3.11 alone; the [circular functions and identities study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/) gives the overview. Condense this page with the [3.11 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-11-revision-notes/) and test yourself with the [3.11 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-11-practice/).

## Three ways to see the same result

Take sin(π − θ) = sin θ.

- **Graph.** The graph of y = sin x is symmetric about the line x = π/2. The angles θ and π − θ are the same distance either side of π/2, so the graph has the same height at both.
- **Unit circle.** The point at angle π − θ is the reflection of the point at angle θ in the y-axis. Reflection in the y-axis keeps the y-coordinate (sin) and changes the sign of the x-coordinate (cos). So sin(π − θ) = sin θ and cos(π − θ) = −cos θ.
- **Compound angle.** sin(π − θ) = sin π cos θ − cos π sin θ = 0 − (−1) sin θ = sin θ.

Use whichever is quickest, and the compound angle route when a question says "show that".

## The full set of relationships

| Angle | sin | cos | tan | Unit-circle picture |
|---|---|---|---|---|
| −θ | −sin θ | cos θ | −tan θ | reflection in the x-axis |
| π − θ | sin θ | −cos θ | −tan θ | reflection in the y-axis |
| π + θ | −sin θ | −cos θ | tan θ | half-turn about the origin |
| 2π − θ | −sin θ | cos θ | −tan θ | same point as −θ |
| π/2 − θ | cos θ | sin θ | cot θ | reflection in the line y = x |
| π/2 + θ | cos θ | −sin θ | −cot θ | quarter-turn anticlockwise |

You do not need to memorise the table. For any row: (1) decide whether sin and cos swap (they do for π/2 ± θ, not for π ± θ or 2π − θ); (2) decide the sign by imagining θ small and positive and asking which quadrant the new angle is in.

**Example of the sign rule.** cos(π/2 + θ): sin and cos swap, so the answer is ±sin θ. For small θ, π/2 + θ is in the second quadrant, where cos is negative. So cos(π/2 + θ) = −sin θ.

## Odd and even functions

A function is **even** if f(−x) = f(x): its graph is symmetric about the y-axis. It is **odd** if f(−x) = −f(x): its graph has rotational symmetry of order 2 about the origin.

- cos x is even.
- sin x and tan x are odd.
- Products follow sign rules: odd × odd is even, so x sin x is even; odd × even is odd, so sin x cos x and x cos x are odd.

## Symmetries of each graph

| Graph | Lines of symmetry | Centres of rotational symmetry | Translations onto itself |
|---|---|---|---|
| y = sin x | x = π/2 + kπ | (kπ, 0) | 2π to the left or right |
| y = cos x | x = kπ | (π/2 + kπ, 0) | 2π to the left or right |
| y = tan x | none | (kπ/2, 0) | π to the left or right |

The three graphs are also linked by translations: sin(x + π/2) = cos x, so the cosine graph is the sine graph translated π/2 to the left; and cos(x + π/2) = −sin x.

## Worked examples

### Example 1: simplifying

Simplify sin(π − x) + cos(π/2 + x).

```
sin(π − x) = sin x          (symmetry about x = π/2)
cos(π/2 + x) = −sin x        (swap, second quadrant, cos negative)
Sum = sin x − sin x = 0
```

### Example 2: values from one ratio

Given sin α = p, where α is acute, write each in terms of p: sin(π + α), cos(π/2 − α), cos(3π/2 + α) and tan(π − α).

```
sin(π + α) = −p
cos(π/2 − α) = sin α = p
cos(3π/2 + α) = cos(3π/2) cos α − sin(3π/2) sin α = 0 − (−1)p = p
tan(π − α) = −tan α = −p/√(1 − p²)          (cos α = √(1 − p²) as α is acute)
```

The third result is a good example of falling back on the compound angle identity when the table does not have the row you need.

### Example 3: finding every solution from one

Given that x = 0.358 (3 s.f.) is the solution of sin x = 0.35 in [0, π/2], find all the solutions in −2π ≤ x ≤ 2π.

```
sin(π − θ) = sin θ:       π − 0.3576 = 2.78
Subtract one period, 2π:   0.3576 − 2π = −5.93   and   2.784 − 2π = −3.50
Solutions: −5.93, −3.50, 0.358, 2.78
```

Symmetry gives the partner solution in the same cycle; periodicity gives the rest. Keep the unrounded value 0.35757… in the working.

### Example 4: proving a graph has a line of symmetry

Let f(x) = sin x + cos x. Show that f(π/2 − x) = f(x), and interpret the result.

```
f(π/2 − x) = sin(π/2 − x) + cos(π/2 − x) = cos x + sin x = f(x)
```

The inputs x and π/2 − x are the same distance either side of π/4, and they always give the same output, so the graph of f is symmetric about the line **x = π/4**. For example, f(0.2) = f(1.37) = 1.18 (3 s.f.).

### Example 5: an equation via symmetry

Solve sin(π − x) = cos(π + x) for 0 ≤ x ≤ 2π.

```
sin(π − x) = sin x  and  cos(π + x) = −cos x, so sin x = −cos x
cos x = 0 would force sin x = 0, impossible, so tan x = −1
x = 3π/4, 7π/4
```

## Common mistakes

- Treating π − θ like π + θ: sin(π − θ) = sin θ but sin(π + θ) = −sin θ.
- Forgetting that π/2 ± θ swaps sin and cos, so writing sin(π/2 − θ) = sin θ.
- Using the sign of the original angle's quadrant instead of the new angle's.
- Calling cos x odd or sin x even.
- Claiming y = tan x has a line of symmetry; its symmetry is rotational.
- Rounding a solution before subtracting 2π, which can change the last figure.

## Exam technique

- **Write down** a value such as cos(π + α): no working needed, but think about the quadrant before writing.
- **Show that** a symmetry result holds: use a compound angle identity, since a sketch alone may not be accepted as a proof.
- **Hence** find other solutions: use the symmetry just shown, then add or subtract periods.
- **Explain** what a result means for the graph: name the line of symmetry or centre of rotation, with its equation or coordinates.

## Where to go next

- Recall the relationships with the [3.11 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-11-revision-notes/) and practise with the [3.11 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-11-practice/).
- The compound angle identities that prove these results are in the [3.10 compound angle guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-10/).
- The graphs themselves are covered in the [3.7 circular functions guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-7/).
