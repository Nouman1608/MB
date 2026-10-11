---
title: "Pearson Edexcel International Advanced Level Mathematics: Exponentials, logarithms and trig equations (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P2 Logs and Trig Equations Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Exponentials and logarithms, and solving trigonometric equations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 143
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-exponentials-and-logarithms-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-trigonometry-edexcel-alevel-maths"
description: "Condensed revision notes on exponential graphs, log laws, solving a^x = b, trig identities and trig equations for Edexcel IAL Mathematics P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense Unit P2 topics 5.1 to 5.3 and 6.1 to 6.2 of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). P2 is a compulsory unit for IAS Mathematics and IAL Mathematics (and Pure Mathematics). For full explanations and fully worked examples, read the [study guide](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric/) first.

Then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric-practice/). Related pages: [Pure Mathematics 2](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) and the [P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/). Course hub: [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/). Printable [checklist](/checklists/edexcel/a-level/mathematics/). Check your level with the [free diagnostics](/diagnostics/).

## 5.1 y = a^x

| Fact | Detail |
|---|---|
| Conditions | a > 0 and a ≠ 1 |
| Passes through | (0, 1), for every such a |
| Asymptote | the x-axis, y = 0 |
| a > 1 | increasing; y → 0 as x → −∞ |
| 0 < a < 1 | decreasing; y → 0 as x → +∞ |
| Range | y > 0 only, so a^x = 0 or a negative number has no solution |
| Link | (1/a)^x = a^(−x): reflect y = a^x in the y-axis |

Finding a from a point (p, q): a^p = q, so a = q^(1/p).

Reminder: if y = a^x passes through (−3, 125/8), then a^(−3) = 125/8, so a³ = 8/125 and a = 2/5.

## 5.2 Laws of logarithms

log_a x = y is the same statement as a^y = x. Valid for a, x, y > 0 and a ≠ 1.

| Law | Statement |
|---|---|
| Product | log_a(xy) = log_a x + log_a y |
| Quotient | log_a(x/y) = log_a x − log_a y |
| Power | log_a(x^k) = k log_a x |
| Reciprocal | log_a(1/x) = −log_a x |
| Same base | log_a a = 1 |

Method for a single logarithm:

1. Turn every coefficient into a power: k log_a x becomes log_a(x^k).
2. Write any constant as a logarithm of the same base (for example, 2 = log_5 25).
3. Add or subtract using the product and quotient laws.
4. Simplify the argument, and evaluate if it is a power of the base.

Small reminders:

```
log_2 48 − log_2 3 = log_2 16 = 4
log_5 (1/25) = −log_5 25 = −2
log_a (a³√x) = 3 + ½ log_a x
```

## 5.3 Solving a^x = b

| Situation | Method |
|---|---|
| b is a power of a | compare indices |
| otherwise | take logs of both sides: x ln a = ln b, so x = ln b / ln a |
| power is a linear expression | solve for the whole power first, then the linear equation |
| inequality | divide by ln a; reverse the sign only if ln a < 0 (that is, 0 < a < 1) |

Change of base. Learn the order as new-base log of the number over new-base log of the old base:

```
log_a b = log_c b / log_c a
log_a b = 1 / log_b a          (so log_a b × log_b a = 1)
```

Example: log_4 8 = log_2 8 / log_2 4 = 3/2.

Worked reminder with a linear power: solve 5^(2x + 1) = 40.

```
(2x + 1) ln 5 = ln 40
2x + 1 = ln 40 / ln 5 = 2.2920
x = (2.2920 − 1) / 2 = 0.646
```

Method in steps for a growth question such as 1.5^n ≥ 100:

```
n ln 1.5 ≥ ln 100
n ≥ ln 100 / ln 1.5 = 11.36
smallest whole number n = 12
```

## 6.1 Identities

| Identity | Useful forms |
|---|---|
| tan θ = sin θ / cos θ | sin θ = tan θ cos θ; undefined when cos θ = 0 |
| sin²θ + cos²θ = 1 | sin²θ = 1 − cos²θ; cos²θ = 1 − sin²θ |

To find an unknown ratio: use sin²θ + cos²θ = 1, choose the sign from the quadrant, then use tan θ = sin θ / cos θ.

To prove an identity: work on one side, write everything in sin and cos, combine fractions, and replace sin²θ + cos²θ by 1.

Reminder: (1 − cos²θ) / (cos θ tan θ) = sin²θ / (cos θ × sin θ / cos θ) = sin²θ / sin θ = sin θ.

## 6.2 Solving trigonometric equations

Method in steps:

1. Get one trigonometric function of one angle equal to a number. Use the identities if needed, and factorise rather than divide.
2. Transform the interval to match the angle (add, subtract or multiply the end points).
3. Find the principal value.
4. List all values in the new interval using the table below.
5. Reverse the transformation and check each answer against the original interval.

| Equation | Solutions for the angle u | Repeat every |
|---|---|---|
| sin u = k | α and 180° − α (π − α) | 360° (2π) |
| cos u = k | α and −α (equivalently 360° − α) | 360° (2π) |
| tan u = k | α | 180° (π) |

Quick sign guide for the quadrants (0° to 360°): sine is positive in the first and second, cosine in the first and fourth, tangent in the first and third. Use it to check that your list of solutions is complete and that each one has the right sign.

| Typical form | Key idea |
|---|---|
| sin(x + 20°) = k | interval shifts by +20° |
| tan 2x = k | interval doubles, so twice as many values to find |
| a cos²x + b sin x + c = 0 | replace cos²x by 1 − sin²x, then solve the quadratic |
| sin x = k tan x or similar | write tan x = sin x / cos x, then factorise |
| sin 2(x + π/6) = k | let u = 2(x + π/6) and transform the interval first |

Worked reminders with other angles.

Multiple angle: cos 3x = 1/2 for 0° ≤ x < 180°.

```
Interval for 3x: 0° ≤ 3x < 540°
cos u = 1/2: u = 60°, 300°, 420°
x = 20°, 100°, 140°
```

Radians: tan(x − π/3) = −1 for 0 ≤ x < 2π.

```
Interval for u = x − π/3: −π/3 ≤ u < 5π/3
tan u = −1: u = −π/4 or 3π/4   (7π/4 is too large)
x = π/12 or 13π/12
```

Shifted angle in degrees: tan(x − 10°) = 1 for 0° ≤ x < 360°.

```
Interval for x − 10°: −10° ≤ u < 350°
tan u = 1: u = 45° or 225°
x = 55° or 235°
```

## Exact values to recall

| Angle | 0° | 30° (π/6) | 45° (π/4) | 60° (π/3) | 90° (π/2) |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | √3/3 | 1 | √3 | undefined |

Equations whose right-hand side is one of these values have exact answers in degrees or in multiples of π. Give exact answers when they are asked for and decimals only when the question says so.

## Choosing a method quickly

| You see | First move |
|---|---|
| unknown in a power, answer not exact | take ln of both sides and use the power law |
| several logarithms to combine | convert coefficients to powers, then product and quotient laws |
| a logarithm in an awkward base | change of base to base 2, 10 or e |
| sin² or cos² with a plain sin or cos | use sin²θ + cos²θ = 1 to leave one function |
| tan with sin or cos | write tan as sin over cos, then factorise |
| "show that" or "prove" | start from one side only and finish on the other side exactly |

## Must-know distinctions

- Exponential (variable in the power) versus power function (variable in the base): 2^x is not x².
- log_a(x) − log_a(y) is log_a(x/y), not log_a(x − y).
- k log_a x is not (log_a x)^k.
- A solution of sin x = 2 or cos x = −1.5 does not exist. A solution of sin x = −1 does.
- Solving for the whole bracket first, then for x.
- Radian interval or degree interval: match every end point and every answer to the unit given.

## Quick self-test

1. State the coordinates where y = 7^x crosses the y-axis.
2. Evaluate log_2 48 − log_2 3.
3. Evaluate log_5(1/25).
4. Solve 3^x = 20, to 3 significant figures.
5. Evaluate log_4 8 exactly.
6. Simplify (1 − cos²θ) / (cos θ tan θ).
7. Solve tan(x − 10°) = 1 for 0° ≤ x < 360°.
8. Find the smallest integer n with 1.5^n ≥ 100.
9. Solve 2 cos²x = 3 sin x for 0° ≤ x < 360°.
10. Solve sin 2x = −1/2 for 0° ≤ x < 180°.

### Answers

1. (0, 1).
2. 4.
3. −2.
4. x = ln 20 / ln 3 = 2.73.
5. 3/2.
6. sin θ.
7. x = 55°, 235°.
8. n = 12 (since n ≥ 11.36).
9. 2(1 − sin²x) = 3 sin x gives (2 sin x − 1)(sin x + 2) = 0, so sin x = 1/2 (sin x = −2 rejected): x = 30°, 150°.
10. 2x in the interval 0° to 360°: 2x = 210° or 330°, so x = 105°, 165°.

## Where marks are usually lost

- Treating log_a(x + y) as log_a x + log_a y.
- Leaving a constant such as 2 or 1 unconverted when combining logarithms.
- Rounding part-way through a solution and carrying the rounded value forward.
- Reversing, or failing to reverse, an inequality when dividing by a logarithm.
- Finding only the principal value of a trigonometric equation.
- Forgetting to transform the interval for x + 20°, 2x or 2(x + π/6).
- Dividing by sin x or cos x and losing solutions.
- Leaving an impossible value such as sin x = −2 in the working without rejecting it.
- Mixing degrees with radians in one answer.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited), Unit P2 topics 5.1 to 5.3 and 6.1 to 6.2.
