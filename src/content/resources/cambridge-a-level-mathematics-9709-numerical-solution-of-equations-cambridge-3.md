---
title: "Cambridge A Level Mathematics (9709): Numerical solution of equations (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.6
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "numerical-solution-of-equations-cambridge-3"
description: "Study guide to Cambridge 9709 Paper 3 section 3.6: locating roots by graphs and sign change, fixed-point iteration, convergence, failure and stated accuracy."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.6 Numerical solution of equations** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 3 (1 hour 50 minutes, 75 marks). The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) runs one iteration to 3 decimal places. This page covers the whole section: graphical arguments for the number of roots, sign-change proofs, how an iteration relates to its equation, why some rearrangements fail, and how Paper 3 places these steps inside geometry and calculus problems. Afterwards use the [3.6 revision notes](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-revision-notes/) and the [3.6 practice questions](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-practice/).

## What section 3.6 asks for

| Syllabus statement | In practice |
|---|---|
| Locate approximately a root by graphical considerations and/or searching for a sign change | Sketch two graphs to count roots; show f(a) and f(b) have opposite signs, for example for consecutive integers |
| Understand the idea of, and notation for, a sequence of approximations converging to a root | Use x₁, x₂, x₃, … and say what the limit represents |
| Understand how xₙ₊₁ = F(xₙ) relates to the equation; use a given iteration, or one based on a given rearrangement, to a prescribed accuracy | Show the rearrangement, iterate, and state the root to the accuracy asked |

The condition for convergence is **not** required, but you are expected to understand that an iteration may fail to converge. The same content appears in Pure Mathematics 2 section 2.6, taught in the [Paper 2 numerical methods guide](/resources/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations/); at Paper 3 the equation usually comes out of an earlier part on calculus, logarithms or circular measure.

## Locating a root

**By graphs.** Rewrite f(x) = 0 as g(x) = h(x) with two graphs you can sketch. The number of intersections is the number of roots.

**By sign change.** If f is continuous on [a, b] and f(a), f(b) have opposite signs, then f(x) = 0 has a root between a and b. Continuity matters: 1/x changes sign between −1 and 1 but has no root.

*Worked example 1.* By sketching suitable graphs, show that ln x = 3 − x has exactly one real root, and show that it lies between 2 and 3.

```text
y = ln x is increasing for x > 0; y = 3 − x is a decreasing straight line.
An increasing curve and a decreasing line meet at most once, and they do
cross, so there is exactly one root.

Let f(x) = ln x + x − 3.
f(2) = ln 2 − 1 = −0.307   (negative)
f(3) = ln 3 = 1.099        (positive)
f is continuous for x > 0 and changes sign, so the root lies in 2 < x < 3.
```

Always state both values with their signs and write a conclusion sentence. The values alone earn only part of the credit.

## Iteration and what it converges to

Rearrange f(x) = 0 into x = F(x), then use xₙ₊₁ = F(xₙ). If the sequence converges to α, then α = F(α), so α is a root of the original equation.

*Worked example 2.* Use xₙ₊₁ = 3 − ln xₙ with x₁ = 2 to find the root of ln x = 3 − x correct to 2 decimal places. Give each iterate to 4 decimal places.

```text
x₁ = 2
x₂ = 2.3069     x₃ = 2.1641     x₄ = 2.2280     x₅ = 2.1989
x₆ = 2.2120     x₇ = 2.2061     x₈ = 2.2088     x₉ = 2.2076
x₁₀ = 2.2081
Root = 2.21 to 2 d.p.
```

Keep full calculator accuracy between steps and only round what you write down. To confirm the accuracy, check the sign of f at the ends of the rounding interval: f(2.205) = −0.0043 and f(2.215) = +0.0103, so the root lies between 2.205 and 2.215 and rounds to 2.21.

### When an iteration fails

The same equation can be rearranged as x = e^(3 − x).

```text
x₁ = 2,  x₂ = 2.7183,  x₃ = 1.3254,  x₄ = 5.3366,  x₅ = 0.0967,  x₆ = 18.2
```

The values swing further and further from 2.21: the iteration diverges. You do not need to explain why with a convergence condition, but you should recognise and state that this rearrangement does not converge, so another one is needed.

## From an iteration back to its equation

*Worked example 3.* The sequence defined by xₙ₊₁ = ⅓(2xₙ + 10/xₙ²), with x₁ = 2, converges to α. Find the exact value of α.

```text
At the limit, α = ⅓(2α + 10/α²)
3α = 2α + 10/α²
α = 10/α²   →   α³ = 10   →   α = ∛10
```

Iterating gives 2, 2.1667, 2.1545, 2.1544, which agrees with ∛10 = 2.1544. This "replace both xₙ and xₙ₊₁ by α" step is how you show which equation an iteration solves.

## A geometry context

*Worked example 4.* A sector OAB of a circle has centre O, radius r and angle θ radians. The chord AB divides the sector into a triangle and a segment, and the area of the segment is one quarter of the area of the sector.

(a) Show that θ = (4/3) sin θ. (b) Show that the root lies between 1.2 and 1.3. (c) Use the iteration θₙ₊₁ = (4/3) sin θₙ with θ₁ = 1.2 to find θ correct to 2 decimal places.

```text
(a) Segment = sector − triangle = ½r²θ − ½r² sin θ
    ½r²θ − ½r² sin θ = ¼ × ½r²θ
    θ − sin θ = θ/4   →   sin θ = 3θ/4   →   θ = (4/3) sin θ

(b) g(θ) = sin θ − 0.75θ:  g(1.2) = 0.0320 > 0,  g(1.3) = −0.0114 < 0

(c) 1.2, 1.2427, 1.2622, 1.2704, 1.2736, 1.2749, 1.2754, 1.2756, 1.2757
    θ = 1.28 to 2 d.p.
```

Check: g(1.275) = +0.0003 and g(1.285) = −0.0043, so the root lies between 1.275 and 1.285 and is 1.28 to 2 d.p. Iterate until two successive values round to the same answer, and continue a little further if the iterates sit close to a rounding boundary, as 1.2749 does here.

## Common mistakes

- Giving f(a) and f(b) without saying "sign change, so a root lies between".
- Using a sign change on a function that is not continuous in the interval.
- Rounding each iterate before using it in the next step.
- Stopping as soon as one iterate rounds to a value, instead of waiting for two successive iterates to agree.
- Using degrees in an iteration involving sin θ or tan θ when θ is in radians.
- Not stating that a diverging iteration fails, or claiming it finds a root.

## Exam technique

- **Show by calculation that the root lies between a and b**: evaluate, state signs, and conclude.
- **Show that the equation can be written as x = F(x)**: start from the given equation or the context, and finish with the exact form asked for.
- **Use the iterative formula to determine the root correct to n decimal places, showing the result of each iteration to n + 2 decimal places**: list every iterate to that accuracy and then state the root.
- **Find the equation satisfied by α**: replace xₙ and xₙ₊₁ by α and simplify.
- Keep your calculator in radians for the whole of this section unless the question uses degrees.

## Frequently asked questions

**Do I need the condition for convergence in 9709 Paper 3?**
No. The syllabus states that the condition for convergence is not included, but you should understand that an iteration may fail to converge.

**Why do I need continuity for the sign-change argument?**
A function with a break, such as 1/x, can change sign without crossing zero, so a sign change proves a root only for a continuous function.

**How do I prove a root is correct to 2 decimal places?**
Show a sign change between the two values half a unit in the second decimal place either side, such as 2.205 and 2.215.

## Where to go next

- [3.6 revision notes](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-revision-notes/)
- [3.6 practice questions](/resources/cambridge-a-level-mathematics-9709-numerical-solution-of-equations-cambridge-3-practice/)
- Mixed Paper 3 questions: [Pure 3 trigonometry, vectors and complex numbers practice](/resources/a-level-mathematics-pure-3-trig-vectors-complex-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.6 Numerical solution of equations.
