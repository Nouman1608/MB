---
title: "OxfordAQA International AS and A-level Mathematics: Inverse trigonometric functions and secant, cosecant, cotangent (9660)"
seoTitle: "OxfordAQA 9660 Maths: Inverse Trig, Sec, Cosec, Cot"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Inverse trigonometric functions and secant, cosecant, cotangent"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 191
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-trigonometry-oxfordaqa-alevel-maths"
description: "Study guide to inverse trig functions, sec, cosec and cot, their graphs, domains and two identities, for OxfordAQA International A-level Maths Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, and covers the first part of content area P2.4 (Trigonometry): the inverse functions sin⁻¹, cos⁻¹ and tan⁻¹, and the reciprocal functions secant, cosecant and cotangent. The specification places this content in International A-level Unit P2 (Pure Maths), so it belongs to the A2 year and is not examined at International AS. The compound-angle, double-angle, R-form and equation-solving parts of P2.4 have their own pages and are not repeated here.

Related pages: the [OxfordAQA A-level Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), the [revision notes](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-revision-notes/), the [practice set](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-practice/) and the [exam preparation page](/resources/oxfordaqa-a-level-mathematics-exam-preparation/). To find your weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## What this guide covers

| Spec ref | What you must be able to do |
|---|---|
| P2.4 | Know the functions sin⁻¹, cos⁻¹, tan⁻¹; understand their domains and graphs |
| P2.4 | Know that −π/2 ≤ sin⁻¹x ≤ π/2, 0 ≤ cos⁻¹x ≤ π and −π/2 < tan⁻¹x < π/2 |
| P2.4 | See the inverse graphs as reflections of the relevant parts of the trig graphs in y = x |
| P2.4 | Know secant, cosecant and cotangent, their link to cos, sin and tan, their domains and graphs |
| P2.4 | Know and use 1 + tan²x = sec²x and 1 + cot²x = cosec²x |

The specification states that addition formulae for inverse functions are not required. Angles in this guide are in radians unless a degree sign appears.

## Secant, cosecant and cotangent

These are defined from the three basic functions:

```
sec x = 1/cos x      cosec x = 1/sin x      cot x = cos x/sin x = 1/tan x
```

Each is undefined wherever its denominator is zero.

| Function | Undefined when | Domain (radians) | Range | Period |
|---|---|---|---|---|
| sec x | cos x = 0 | x ≠ π/2 + nπ | outputs satisfy abs(sec x) ≥ 1 | 2π |
| cosec x | sin x = 0 | x ≠ nπ | outputs satisfy abs(cosec x) ≥ 1 | 2π |
| cot x | sin x = 0 | x ≠ nπ | all real numbers | π |

Here n is any integer. Notice that cot x is defined at x = π/2, where it equals 0, even though tan x is not. That is why cot x = cos x/sin x is the safer definition.

### Graphs

You need to sketch these from the graphs of cos, sin and tan.

```
y = sec x   (from y = cos x)
  vertical asymptotes at x = ±π/2, ±3π/2 ...
  U-shaped branches: minimum (0, 1), maximum (π, −1), minimum (2π, 1)
  no part of the graph lies between y = −1 and y = 1

y = cosec x   (from y = sin x)
  vertical asymptotes at x = 0, ±π, ±2π ...
  branch above the axis with minimum (π/2, 1)
  branch below the axis with maximum (3π/2, −1)

y = cot x   (from y = tan x)
  vertical asymptotes at x = 0, ±π, ±2π ...
  falls from left to right in every branch, crossing the x-axis at x = ±π/2, ±3π/2 ...
```

Method for sketching: draw the original curve lightly first. Wherever it crosses the x-axis, draw an asymptote. Wherever it reaches ±1, the reciprocal touches the same point. The reciprocal of a small value is large, so the curve climbs towards the asymptote.

**Worked example 1.** Given that sin θ = 8/17 and θ is obtuse, find the exact values of sec θ, cosec θ and cot θ.

Since θ is obtuse, cos θ is negative.

```
cos²θ = 1 − sin²θ = 1 − 64/289 = 225/289
cos θ = −15/17
sec θ = 1/cos θ = −17/15
cosec θ = 1/sin θ = 17/8
cot θ = cos θ/sin θ = (−15/17)/(8/17) = −15/8
```

**Worked example 2.** Give the exact value of cosec(5π/4).

sin(5π/4) = −√2/2 (the reference angle is π/4 and sine is negative in the third quadrant). So cosec(5π/4) = 1/(−√2/2) = −2/√2 = **−√2**.

## The identities 1 + tan²x = sec²x and 1 + cot²x = cosec²x

Start from sin²x + cos²x = 1 and divide every term.

```
Divide by cos²x:   sin²x/cos²x + 1 = 1/cos²x    so   tan²x + 1 = sec²x
Divide by sin²x:   1 + cos²x/sin²x = 1/sin²x    so   1 + cot²x = cosec²x
```

These hold for every x where all the functions involved are defined. Being able to derive them in two lines is worth more than memorising them, because a derivation also reminds you of the restrictions.

Useful rearrangements: tan²x = sec²x − 1, cot²x = cosec²x − 1, and (sec x − 1)(sec x + 1) = tan²x.

**Worked example 3.** Prove that sec x − cos x ≡ sin x tan x.

```
LHS = 1/cos x − cos x
    = (1 − cos²x)/cos x
    = sin²x/cos x
    = sin x × (sin x/cos x)
    = sin x tan x  = RHS
```

**Worked example 4.** Given that sec²θ + tan θ = 3, find the possible values of tan θ, and the solutions for 0° ≤ θ ≤ 360°.

Replace sec²θ with 1 + tan²θ so that only tan θ remains.

```
1 + tan²θ + tan θ = 3
tan²θ + tan θ − 2 = 0
(tan θ − 1)(tan θ + 2) = 0
tan θ = 1  or  tan θ = −2
```

For tan θ = 1: θ = 45° or 225°.
For tan θ = −2: the acute reference angle is 63.43...°, so θ = 180° − 63.43...° = 116.6° and θ = 360° − 63.43...° = 296.6° (1 d.p.).

Solutions: **θ = 45°, 116.6°, 225°, 296.6°**.

**Worked example 5.** Solve cosec x = 2 for 0 < x < π, then say which solution also satisfies cot x = −√3.

cosec x = 2 means sin x = 1/2, so x = π/6 or 5π/6.

Check each in cot x = cos x/sin x. At π/6: cot = (√3/2)/(1/2) = √3. At 5π/6: cot = (−√3/2)/(1/2) = −√3.

So the solutions of cosec x = 2 are **x = π/6, 5π/6**, and only **5π/6** also gives cot x = −√3.

## Inverse trigonometric functions

### Why the domain must be restricted

A function has an inverse only if each output comes from exactly one input. sin x takes the value 1/2 at x = π/6, 5π/6, 13π/6 and so on, so the full sine function has no inverse. To fix this, restrict sin x to an interval on which it is one-to-one and covers its whole range. The inverse is defined from that restricted piece.

| Function | Restricted piece of the original | Domain of inverse | Range of inverse |
|---|---|---|---|
| sin⁻¹x | sin x on [−π/2, π/2] | [−1, 1] | [−π/2, π/2] |
| cos⁻¹x | cos x on [0, π] | [−1, 1] | [0, π] |
| tan⁻¹x | tan x on (−π/2, π/2) | all real x | (−π/2, π/2) |

The notation sin⁻¹x means "the angle whose sine is x". It does not mean 1/sin x. The reciprocal is cosec x.

### Graphs as reflections in y = x

Reflect the restricted piece of the original graph in the line y = x and you have the inverse graph. Swap the coordinates of each key point.

```
y = sin⁻¹x:  (−1, −π/2), (0, 0), (1, π/2)    increasing, S-shaped, ends at x = ±1
y = cos⁻¹x:  (−1, π), (0, π/2), (1, 0)       decreasing, ends at x = ±1
y = tan⁻¹x:  (0, 0)                          increasing, horizontal asymptotes y = ±π/2
```

The sine and cosine inverses stop at x = −1 and x = 1 because the restricted original only has outputs between −1 and 1. The tangent inverse never stops: tan x takes every real value on its interval, so tan⁻¹x is defined for all x, and it approaches ±π/2 without reaching them.

**Worked example 6.** Find the domain and range of f(x) = 2cos⁻¹x + 1.

The domain is the same as for cos⁻¹x: −1 ≤ x ≤ 1. For the range, 0 ≤ cos⁻¹x ≤ π gives 0 ≤ 2cos⁻¹x ≤ 2π, then adding 1: **1 ≤ f(x) ≤ 1 + 2π**.

**Worked example 7.** Find the domain of g(x) = sin⁻¹(2x − 1).

The input to sin⁻¹ must lie in [−1, 1]: −1 ≤ 2x − 1 ≤ 1, so 0 ≤ 2x ≤ 2, giving **0 ≤ x ≤ 1**.

### Exact values

Work backwards from a known sine, cosine or tangent value, then check the answer lies in the principal range.

```
sin⁻¹(√3/2) = π/3        cos⁻¹(−1/2) = 2π/3        tan⁻¹(−√3) = −π/3
```

For cos⁻¹(−1/2), the angles with cosine −1/2 include 2π/3 and 4π/3, but only 2π/3 lies in [0, π].

### Compositions

Because the functions are inverses on the restricted pieces:

```
sin(sin⁻¹x) = x       for −1 ≤ x ≤ 1
sin⁻¹(sin x) = x      holds just for x in [−π/2, π/2]
```

The same pattern holds for cos⁻¹ (restricted piece [0, π]) and tan⁻¹ (restricted piece (−π/2, π/2)). Outside the restricted interval, find the angle inside it that has the same sine (or cosine, or tangent).

**Worked example 8.** Evaluate sin⁻¹(sin 5π/6) and tan⁻¹(tan 3π/4).

5π/6 is outside [−π/2, π/2]. sin(5π/6) = sin(π/6), and π/6 is in the range, so sin⁻¹(sin 5π/6) = **π/6**.

3π/4 is outside (−π/2, π/2). tan(3π/4) = −1 = tan(−π/4), so tan⁻¹(tan 3π/4) = **−π/4**.

**Worked example 9.** Find the exact value of sin(cos⁻¹(−7/25)).

Let α = cos⁻¹(−7/25). Then cos α = −7/25 and 0 ≤ α ≤ π, so α is obtuse and sin α is positive.

```
sin²α = 1 − 49/625 = 576/625
sin α = 24/25   (positive, since α is in [0, π])
```

So the answer is **24/25**. A sketch of a right-angled triangle with sides 7, 24 and 25 confirms the lengths; the range of cos⁻¹ settles the sign.

**Worked example 10.** Find the exact value of tan(sin⁻¹(−4/5)).

Let β = sin⁻¹(−4/5), so sin β = −4/5 and −π/2 ≤ β ≤ π/2. Since sin β is negative, β lies in [−π/2, 0], where cos β is positive.

```
cos²β = 1 − 16/25 = 9/25,   cos β = 3/5
tan β = sin β/cos β = (−4/5)/(3/5) = −4/3
```

Answer: **−4/3**.

## Common errors

- Writing sin⁻¹x = 1/sin x. The reciprocal of sine is cosec x.
- Giving sin⁻¹(sin x) = x for any x. It only works inside the principal interval.
- Giving cos⁻¹(−1/2) as −2π/3 or 4π/3. The range of cos⁻¹ is [0, π], so negative angles never appear.
- Sketching sec x with branches that dip into the strip −1 < y < 1.
- Drawing cot x rising like tan x. In each branch cot x falls.
- Forgetting that tan⁻¹x has asymptotes but no end points, while sin⁻¹x and cos⁻¹x stop at x = ±1.
- Using 1 + tan²x = sec²x in an equation and then stopping at the quadratic. Solve for tan x, then go back to find the angles, including every solution in the interval.
- Taking the wrong sign for the root when finding sin(cos⁻¹x) or cos(sin⁻¹x). Use the range to decide.

## Next steps

Try the [practice questions](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-practice/), then condense with the [revision notes](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-revision-notes/). Check your progress against the [checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: content area P2.4 Trigonometry (inverse trigonometric functions; secant, cosecant and cotangent).
