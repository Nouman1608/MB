---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.8 Solving trigonometric equations"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-8"
description: "IB Maths AA 3.8 study guide: solving trig equations in a finite interval analytically and on a GDC, shifted arguments and quadratics in sin, cos or tan."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.8 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) requires you to solve trigonometric equations in a finite interval, both graphically and analytically, including equations that lead to quadratic equations in sin x, cos x or tan x. The general solution of a trigonometric equation is not required. It is SL and HL content and appears on both papers: analytic methods with exact answers on Paper 1, graphical methods with a GDC on Paper 2.

This page goes deeper on 3.8 alone; the wider unit is in the [circular functions and identities study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/). Condense this page with the [3.8 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-8-revision-notes/) and test yourself with the [3.8 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-8-practice/).

## Why there are several solutions

A circular function takes each value in its range many times. The equation sin x = 0.6 has one solution between 0 and π/2, a second between π/2 and π, and two more in every further interval of length 2π. The interval in the question decides which of these you list, so the interval is part of the question, not decoration. Check whether its endpoints are included (≤) or excluded (<).

Each basic equation has a partner solution, found from the symmetry of the graph or the unit circle. With α the value your calculator (or an exact-value table) gives:

| Equation | Solutions in one cycle |
|---|---|
| sin x = k | α and π − α |
| cos x = k | α and 2π − α (or −α) |
| tan x = k | α and π + α |

Then add or subtract whole periods (2π for sin and cos, π for tan) until you have every solution in the interval.

## The analytic method in four steps

1. **Isolate** the circular function, so the equation reads sin(u) = k, cos(u) = k or tan(u) = k.
2. **Transform the interval** to the interval for the argument u.
3. **List** every value of u in that interval, using the partner solution and the period.
4. **Undo** the transformation to find x, and check each value lies in the original interval.

Step 2 is where most marks are lost. If x runs over 0 ≤ x ≤ 2π and u = 3x, then u runs over 0 ≤ u ≤ 6π, which is three full cycles and so up to six solutions.

## Worked examples

### Example 1: a shifted argument

Solve sin(2x + π/3) = 1/2 for 0 ≤ x ≤ π.

```
Let u = 2x + π/3.  0 ≤ x ≤ π  gives  π/3 ≤ u ≤ 7π/3
sin u = 1/2:  candidates π/6, 5π/6, 13π/6, 17π/6
In [π/3, 7π/3]:  u = 5π/6 or 13π/6     (π/6 is too small, 17π/6 too large)
2x = 5π/6 − π/3 = π/2      →  x = π/4
2x = 13π/6 − π/3 = 11π/6   →  x = 11π/12
```

Writing the u-interval explicitly is what stops you keeping u = π/6, which would give a negative x.

### Example 2: degrees

Solve 3 tan(x − 20°) = √3 for 0° ≤ x ≤ 360°.

```
tan(x − 20°) = √3/3, and −20° ≤ x − 20° ≤ 340°
x − 20° = 30° or 210°        (−150° is outside the interval)
x = 50° or 230°
```

When an interval is in degrees, every answer must be in degrees too.

### Example 3: a quadratic using a double angle identity

Solve cos 2x + 5 cos x + 3 = 0 for 0 ≤ x ≤ 2π.

```
cos 2x = 2cos²x − 1, so 2cos²x + 5 cos x + 2 = 0
(2 cos x + 1)(cos x + 2) = 0
cos x = −1/2   or   cos x = −2 (no solution, since −1 ≤ cos x ≤ 1)
x = 2π/3, 4π/3
```

Choose the form of cos 2x that leaves only one ratio. Here the equation already contains cos x, so 2cos²x − 1 is the right choice. The [3.6 double angle identities guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-6/) explains the three forms.

### Example 4: when dividing is safe

Solve sin x = √3 cos x for 0 ≤ x ≤ 2π.

If cos x = 0, then sin x = ±1, and the equation would read ±1 = 0, which is false. So no solution has cos x = 0, and dividing by cos x loses nothing:

```
tan x = √3   →   x = π/3, 4π/3
```

Say why the division is safe. Compare 2 sin x cos x = sin x, where sin x = 0 *is* possible: there you must factorise, sin x(2 cos x − 1) = 0, or you lose x = 0, π and 2π.

### Example 5: a quadratic in tan x with a non-exact root

Solve tan²x − 2 tan x − 3 = 0 for 0 ≤ x ≤ 2π.

```
(tan x − 3)(tan x + 1) = 0
tan x = −1:  x = 3π/4, 7π/4
tan x = 3:   x = arctan 3 = 1.25  or  x = 1.25 + π = 4.39   (3 s.f.)
```

On a calculator-free paper the second pair would be left as arctan 3 and π + arctan 3.

### Example 6: solving graphically

Solve 2 cos x = x² − 1 for −π ≤ x ≤ π.

No algebraic method exists, because x appears both inside and outside a circular function. Graph y = 2 cos x and y = x² − 1 in radian mode and find the intersections in the interval: **x = −1.27 and x = 1.27** (3 s.f.). Both sides are even functions, so the solutions are symmetric about x = 0, which is a useful check.

Write down the equation you graphed and give the solutions to 3 significant figures. Zoom out to the whole interval first so that no intersection is missed.

## Counting solutions without solving

Some questions ask only how many solutions there are. For 4 sin 3x = 3 on 0 ≤ x ≤ 2π: sin 3x = 3/4, and 3x runs over 0 to 6π, which is three cycles. sin takes the value 3/4 twice in each cycle, so there are **6** solutions. If k were 1 or −1, each cycle would give only one solution, and if |k| > 1 there would be none.

## Common mistakes

- Not changing the interval for 2x, 3x or x + c, so solutions are missing or extra.
- Dividing by sin x or cos x without checking whether it can be zero.
- Keeping cos x = −2 or sin x = 1.5 from a quadratic.
- Forgetting endpoint solutions such as x = 0 and x = 2π when the interval includes them.
- Mixing degrees and radians, in the working or on the GDC.
- Giving decimals on Paper 1, or only one of a symmetric pair of solutions.
- Rounding the inner angle before dividing by b, which changes the third significant figure.

## Exam technique

- **Solve**: on Paper 1, analytic working and exact answers are expected. On Paper 2 a GDC method is accepted, but write down the equation you entered.
- **Hence solve**: use the result from the previous part, typically a rewritten quadratic.
- **Find the exact solutions**: give multiples of π or inverse-function expressions, not decimals.
- **Show that the equation can be written as**: write the identity you use, then the rearranged equation in full.
- **How many solutions**: a reasoned count from the cycles or a graph is enough; you do not need to find them.

## Where to go next

- Recall the method with the [3.8 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-8-revision-notes/) and practise with the [3.8 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-8-practice/).
- Revise the graphs that underpin the method in the [3.7 circular functions guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-7/).
- HL students meet equations with sec, cosec and cot in the [3.9 reciprocal and inverse functions guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-9/).
