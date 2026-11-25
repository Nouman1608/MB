---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M1 Moments"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M1: Mechanics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 5.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-moments-edexcel-alevel-maths"
description: "Edexcel IAL Maths M1 moments: moment of a force, conditions for equilibrium under parallel forces, non-uniform rods, tilting, and rods hung from strings."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 6 of Unit M1: Mechanics 1 (WME01) in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3: "Moment of a force", with the guidance "simple problems involving coplanar parallel forces acting on a body and conditions for equilibrium in such situations". In M1 every force in a moments question is parallel to every other, so in practice they are vertical forces on a horizontal rod or beam. Rods at an angle with non-parallel forces, such as ladders, come later in M2.

The broader [momentum, equilibrium and moments guide](/resources/edexcel-ial-mathematics-momentum-and-impulse-equilibrium-of-a-particle-and/) shows a uniform rod on two supports. This guide adds the resultant moment of several forces, non-uniform rods, tilting problems, and rods hanging from strings.

## What the specification asks for

| You must be able to | Typical wording |
|---|---|
| Find the moment of a force about a point | "Find the moment of the force about A" |
| Use the two conditions for equilibrium | "Find the reactions at the supports" |
| Locate the centre of mass of a non-uniform rod | "Find the distance from A of the centre of mass" |
| Use a limiting condition | "The rod is on the point of tilting about D" |

## The moment of a force

The moment of a force about a point P is:

```
moment = force × perpendicular distance from P to the line of action of the force
```

It is measured in newton metres (N m) and has a sense: clockwise or anticlockwise. With vertical forces on a horizontal rod, the perpendicular distance is simply the distance along the rod.

A force whose line of action passes through P has zero moment about P. This is why you take moments about a point where an unknown force acts: that unknown drops out of the equation.

## Resultant moment

To find the total turning effect of several forces about a point, pick a positive sense (say clockwise), and add each moment with its sign.

**Example.** A light rod AB has length 3 m. Forces act at right angles to it: 5 N upwards at A, 8 N downwards at a point 1 m from A, and 4 N downwards at B. About A, the 5 N force has zero moment. The others both turn the rod clockwise (with A on the left):

```
clockwise moment about A = 8(1) + 4(3) = 20 N m
```

## The two conditions for equilibrium

A rigid body is in equilibrium under parallel forces when both of these hold:

1. **The resultant force is zero:** total upward force = total downward force.
2. **The resultant moment about any point is zero:** clockwise moments = anticlockwise moments.

Condition 1 alone is not enough. Two equal and opposite forces with different lines of action have zero resultant but still turn the body. You usually write one moments equation and one resolving equation. A second moments equation about a different point can replace the resolving one, and is a good check.

## Uniform and non-uniform rods

- A **uniform** rod's weight acts at its midpoint.
- A **non-uniform** rod's weight acts at its centre of mass, G. If G is not given, call its distance from one end x and find it.
- A **light** rod has no weight.

## Worked example 1: finding the centre of mass of a non-uniform rod

A non-uniform rod AB has length 4 m and mass 10 kg. It rests horizontally on supports at A and B. A particle of mass 5 kg is placed on the rod 1 m from B. The reaction at A is twice the reaction at B. Find the distance of the centre of mass of the rod from A.

```
resolving:  R_A + R_B = 15g,  and R_A = 2R_B
so  3R_B = 15g,  R_B = 5g,  R_A = 10g
moments about A, with G at x m from A:
R_B(4) = 10g(x) + 5g(3)
20g = 10gx + 15g,  so  x = 0.5 m
```

The rod's centre of mass is 0.5 m from A. Leaving g as a symbol until the end, as here, often makes it cancel.

## Worked example 2: on the point of tilting

A uniform rod AB of length 6 m and mass 20 kg rests horizontally on supports at C and D, where AC = 1 m and DB = 2 m. A particle of mass m kg is placed at B. Find the greatest value of m for which the rod stays in equilibrium.

As m increases, the rod starts to turn about D, and the rod lifts off C. At the point of tilting, **the reaction at C is zero**.

```
the rod's weight acts at 3 m from A, which is 1 m from D (D is 4 m from A)
moments about D, with R_C = 0:
20g(1) = mg(2),  so  m = 10
```

Taking moments about D removes R_D, and R_C is zero, so only the two weights remain. Always ask which support the rod would turn about, and set the reaction at the other one to zero.

## Worked example 3: a rod hanging from two strings

A uniform rod AB has length 5 m and mass 12 kg. It hangs horizontally from two vertical strings, attached at P, where AP = 0.5 m, and at B. A particle of mass 3 kg is attached at a point D of the rod. The tensions in the two strings are equal. Find AD.

```
resolving:  2T = 15g,  so  T = 7.5g
moments about A:  T(0.5) + T(5) = 12g(2.5) + 3g(AD)
7.5g(5.5) = 30g + 3g(AD)
41.25 = 30 + 3AD,  so  AD = 3.75 m
```

Taking moments about A is allowed even though no force acts there. Any point works; a point on an unknown force's line of action is simply the most efficient choice.

## Common mistakes

- Measuring distances from the end of the rod instead of from the point you are taking moments about.
- Forgetting the rod's own weight, or placing a non-uniform rod's weight at the midpoint.
- Setting the wrong reaction to zero in a tilting problem.
- Mixing clockwise and anticlockwise moments on the same side of the equation.
- Using mass instead of weight in some terms and weight in others. Keep g in every term, or in none.
- Giving a position that is off the rod without noticing it is impossible.

## Exam technique

- **Always draw a diagram** with every force, its position, and the distances between them.
- **"Find the reactions"** needs two equations: moments about one point, then resolving (or moments about a second point).
- **"Is on the point of tilting about D"** means set the reaction at the other support to zero. Write that statement in your answer.
- **"Find the greatest distance"** or **"greatest mass"** signals a limiting case, usually tilting.
- **"Explain how you have used the fact that the rod is uniform"** wants: "its weight acts at its midpoint".
- Check that every distance you find lies on the rod.

## Where next

- [M1 moments revision notes](/resources/edexcel-a-level-mathematics-yma01-m1-moments-revision-notes/) for the methods on one page and a self-test.
- [M1 moments practice questions](/resources/edexcel-a-level-mathematics-yma01-m1-moments-practice/) with mark schemes.
- [M1 statics of a particle study guide](/resources/edexcel-a-level-mathematics-yma01-m1-statics-of-a-particle/) for resolving forces in equilibrium.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
