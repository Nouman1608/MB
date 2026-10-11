---
title: "Pearson Edexcel International Advanced Level Mathematics: Further trigonometry and R-formulae (YMA01)"
seoTitle: "Edexcel IAL Maths P3: Further Trigonometry Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Further trigonometry: reciprocal and inverse functions, identities, double angle and R-formulae"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 146
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-trigonometry-edexcel-alevel-maths"
description: "Study guide to sec, cosec, cot, arcsin, arccos, arctan, double angle, compound angle and R-formulae for Edexcel IAL Mathematics P3, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). It covers Unit P3 section 2 (topics 2.1 to 2.3): reciprocal and inverse trigonometric functions, the identities for sec² and cosec², and the double angle, compound angle and a cos θ + b sin θ results. The specification lists P3 and P4 as compulsory for IAL Mathematics and Pure Mathematics only. It gives IAS weighting as N/A, so P3 sits outside IAS.

Pair this guide with the [revision notes](/resources/edexcel-ial-mathematics-further-trigonometry-reciprocal-and-inverse-functions-revision-notes/) and the [practice set](/resources/edexcel-ial-mathematics-further-trigonometry-reciprocal-and-inverse-functions-practice/). Earlier trigonometry is in the [P1 triangle trigonometry guide](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs/) and the [P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/). Course hub: [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/). Printable [checklist](/checklists/edexcel/a-level/mathematics/). If you are unsure where to begin, a [free 10-minute diagnostic](/diagnostics/) will point you to your gaps.

## What this unit covers

| Topic | Skills tested |
|---|---|
| 2.1 | Know sec, cosec, cot and arcsin, arccos, arctan; their links to sin, cos, tan; their graphs and restricted domains; work in degrees and radians |
| 2.2 | Know and use sec² θ = 1 + tan² θ and cosec² θ = 1 + cot² θ |
| 2.3 | Use double angle formulae (including half angles), sin(A ± B), cos(A ± B), tan(A ± B); write a cos θ + b sin θ as r cos(θ ± α) or r sin(θ ± α); solve equations such as a cos θ + b sin θ = c in a given interval; prove identities |

The tan(θ/2) "t-formulae" are not required. The specification's own guidance asks for half angles, equations of the form a cos θ + b sin θ = c and identity proofs. Learn every identity below by heart, because you will need them under time pressure.

## 2.1 Reciprocal functions

```
sec θ = 1/cos θ     cosec θ = 1/sin θ     cot θ = 1/tan θ = cos θ/sin θ
```

Each is undefined where its denominator is zero. Their graphs follow from the graphs of cos, sin and tan.

| Function | Period | Undefined at | Range | Shape |
|---|---|---|---|---|
| y = sec θ | 360° (2π) | θ = 90° + 180°n | y ≥ 1 or y ≤ −1 | U-shaped branches touching y = 1 at 0°, 360° and y = −1 at 180° |
| y = cosec θ | 360° (2π) | θ = 180°n | y ≥ 1 or y ≤ −1 | U-shaped branches touching y = 1 at 90°, y = −1 at 270° |
| y = cot θ | 180° (π) | θ = 180°n | all real y | decreasing between asymptotes, crossing zero at 90° |

Wherever sin θ or cos θ equals ±1, the reciprocal equals the same value. The reciprocal graph never enters the strip −1 < y < 1.

**Example 1.** Solve sec 2x = −3 for 0 ≤ x ≤ 180°.

```
cos 2x = −1/3
0 ≤ 2x ≤ 360°
2x = arccos(−1/3) = 109.47°, or 2x = 360° − 109.47° = 250.53°
x = 54.7°, 125.3°  (1 d.p.)
```

Note the range for 2x first. Doubling the angle doubles the interval, so you must look for both solutions in the new interval.

**Example 2.** Find the exact values of sec(5π/6) and cot 300°.

```
cos(5π/6) = −√3/2, so sec(5π/6) = −2/√3 = −2√3/3
cot 300° = cos 300° / sin 300° = (1/2)/(−√3/2) = −1/√3 = −√3/3
```

## 2.1 Inverse functions and restricted domains

Sine, cosine and tangent are not one-to-one, so each is restricted to a domain on which it has an inverse. The inverse graph is the reflection of the restricted graph in the line y = x.

| Function | Output angle (radians) | Output angle (degrees) | Input allowed |
|---|---|---|---|
| y = arcsin x | from −π/2 to π/2 inclusive | from −90° to 90° inclusive | x between −1 and 1 inclusive |
| y = arccos x | from 0 to π inclusive | from 0° to 180° inclusive | x between −1 and 1 inclusive |
| y = arctan x | between −π/2 and π/2, not including them | between −90° and 90°, not including them | any real x |

Key points: arcsin 0 = 0, arcsin 1 = π/2; arccos 1 = 0, arccos(−1) = π; arctan has horizontal asymptotes at y = ±π/2.

The inverse undoes the function only inside the restricted domain. So sin(arcsin x) = x for −1 ≤ x ≤ 1, but arcsin(sin x) = x only when −π/2 ≤ x ≤ π/2.

**Example 3.** Find the exact value of (a) arcsin(sin 7π/6), (b) cos(arcsin 3/5).

```
(a) sin(7π/6) = −1/2. arcsin(−1/2) must lie in [−π/2, π/2], so the answer is −π/6.
(b) Let α = arcsin 3/5, so sin α = 3/5 and α is acute.
    cos α = √(1 − 9/25) = 4/5.
```

For (b), a right-angled triangle with sides 3, 4, 5 gives the same result.

## 2.2 The identities sec² θ = 1 + tan² θ and cosec² θ = 1 + cot² θ

Divide cos² θ + sin² θ = 1 by cos² θ to get 1 + tan² θ = sec² θ. Divide by sin² θ to get cot² θ + 1 = cosec² θ. Use them to turn an equation with mixed functions into a quadratic in one function.

**Example 4.** Solve 2 cot² θ + cosec θ = 4 for 0 ≤ θ < 360°.

```
2(cosec² θ − 1) + cosec θ = 4
2 cosec² θ + cosec θ − 6 = 0
(2 cosec θ − 3)(cosec θ + 2) = 0
cosec θ = 3/2  or  cosec θ = −2
sin θ = 2/3:   θ = 41.8°, 138.2°
sin θ = −1/2:  θ = 210°, 330°
```

Solutions: θ = 41.8°, 138.2°, 210°, 330°. Both values of cosec θ are allowed here because each has size at least 1. A value such as cosec θ = 1/2 would have to be rejected.

## 2.3 Compound angle formulae

```
sin(A + B) = sin A cos B + cos A sin B
sin(A − B) = sin A cos B − cos A sin B
cos(A + B) = cos A cos B − sin A sin B
cos(A − B) = cos A cos B + sin A sin B
tan(A + B) = (tan A + tan B)/(1 − tan A tan B)
tan(A − B) = (tan A − tan B)/(1 + tan A tan B)
```

Notice that the sign in cos flips: cos(A + B) has a minus. Sine keeps the sign.

**Example 5.** Show that cos 105° = (√2 − √6)/4.

```
cos 105° = cos(60° + 45°) = cos 60° cos 45° − sin 60° sin 45°
         = (1/2)(√2/2) − (√3/2)(√2/2)
         = (√2 − √6)/4
```

**Example 6.** A is acute with sin A = 5/13. B is obtuse with cos B = −3/5. Find sin(A + B) and cos(A + B).

```
cos A = 12/13 (A acute).  sin B = 4/5 (B obtuse, so sin B > 0).
sin(A + B) = (5/13)(−3/5) + (12/13)(4/5) = −15/65 + 48/65 = 33/65
cos(A + B) = (12/13)(−3/5) − (5/13)(4/5) = −36/65 − 20/65 = −56/65
```

Use the quadrant information to choose the sign of the missing ratio.

**Example 7.** tan A = 3 and tan B = 1/2. Find tan(A − B).

```
tan(A − B) = (3 − 1/2)/(1 + 3 × 1/2) = (5/2)/(5/2) = 1
```

## 2.3 Double angle and half angle formulae

Put B = A in the compound formulae:

```
sin 2A = 2 sin A cos A
cos 2A = cos² A − sin² A = 2 cos² A − 1 = 1 − 2 sin² A
tan 2A = 2 tan A/(1 − tan² A)
```

Choose the form of cos 2A to match the rest of the problem. If the equation contains sin θ, use 1 − 2 sin² θ. If it contains cos θ, use 2 cos² θ − 1.

**Half angles.** Replace A by θ/2: for example cos θ = 2 cos²(θ/2) − 1 = 1 − 2 sin²(θ/2). Rearranged, cos² A = (1 + cos 2A)/2 and sin² A = (1 − cos 2A)/2. These are also the forms you need to integrate cos² and sin² later.

**Example 8.** Solve 3 cos 2x + 5 sin x + 1 = 0 for 0 ≤ x < 360°.

```
3(1 − 2 sin² x) + 5 sin x + 1 = 0
6 sin² x − 5 sin x − 4 = 0
(3 sin x − 4)(2 sin x + 1) = 0
sin x = 4/3: impossible, since sin x cannot exceed 1
sin x = −1/2: x = 210°, 330°
```

**Example 9.** (a) cos θ = 7/25 with θ acute. Find cos(θ/2). (b) tan A = 3/4. Find tan 2A.

```
(a) cos(θ/2) = √((1 + cos θ)/2) = √((32/25)/2) = √(16/25) = 4/5   (θ/2 acute, so positive)
(b) tan 2A = 2(3/4)/(1 − 9/16) = (3/2)/(7/16) = 24/7
```

## 2.3 Proving identities

Work on one side only, usually the more complicated one, until it equals the other. Do not move terms across the identity sign. Rewrite everything in sin and cos if you are stuck.

**Example 10.** Prove sin 2x/(1 + cos 2x) ≡ tan x.

```
LHS = 2 sin x cos x/(1 + 2 cos² x − 1) = 2 sin x cos x/(2 cos² x) = sin x/cos x = tan x = RHS
```

**Example 11.** Prove cos x cos 2x + sin x sin 2x ≡ cos x, and prove sin 3x ≡ 3 sin x − 4 sin³ x.

```
First: LHS = cos(2x − x) = cos x = RHS, using cos(A − B) with A = 2x, B = x.

Second: sin 3x = sin(2x + x) = sin 2x cos x + cos 2x sin x
      = 2 sin x cos² x + (1 − 2 sin² x) sin x
      = 2 sin x (1 − sin² x) + sin x − 2 sin³ x
      = 3 sin x − 4 sin³ x = RHS
```

Spot the compound angle pattern in the first proof. Recognising cos A cos B + sin A sin B saves several lines.

## 2.3 Writing a cos θ + b sin θ as r cos(θ ± α) or r sin(θ ± α)

Expand the target form and compare coefficients.

```
r cos(θ − α) = r cos α cos θ + r sin α sin θ
```

So a = r cos α and b = r sin α, which gives r = √(a² + b²) and tan α = b/a. Take r > 0 and α acute when a and b are both positive. If a or b is negative, use a sketch of the point (a, b) or the signs of r cos α and r sin α to choose α.

| You choose | Compare with a cos θ + b sin θ to get |
|---|---|
| r cos(θ − α) | a = r cos α and b = r sin α |
| r cos(θ + α) | a = r cos α and b = −r sin α |
| r sin(θ + α) | a = r sin α and b = r cos α |
| r sin(θ − α) | a = −r sin α and b = r cos α |

Always state the two equations first, then divide to find α.

**Example 12.** (a) Write 7 sin θ − 3 cos θ as r sin(θ − α), r > 0, 0 < α < 90°. (b) Solve 7 sin θ − 3 cos θ = 5 for 0 ≤ θ < 360°. (c) State the greatest value of 7 sin θ − 3 cos θ and the first θ where it occurs.

```
(a) r sin(θ − α) = r sin θ cos α − r cos θ sin α
    r cos α = 7, r sin α = 3
    r = √(49 + 9) = √58,  tan α = 3/7,  α = 23.2°
    7 sin θ − 3 cos θ = √58 sin(θ − 23.2°)
(b) sin(θ − 23.2°) = 5/√58 = 0.6565
    θ − 23.2° = 41.0° or 180° − 41.0° = 139.0°
    θ = 64.2°, 162.2°
(c) Greatest value √58 (≈ 7.62) when θ − 23.2° = 90°, so θ = 113.2°.
```

The range −23.2° ≤ θ − 23.2° < 336.8° means no other solutions are missed. If c is larger than r in size, the equation has no solution because a sine or cosine cannot exceed 1.

**Example 13.** Solve sin x − cos x = 1 for 0 ≤ x < 2π.

```
Write as r sin(x − α): r cos α = 1, r sin α = 1
r = √2, α = π/4, so sin x − cos x = √2 sin(x − π/4)
sin(x − π/4) = 1/√2, with −π/4 ≤ x − π/4 < 7π/4
x − π/4 = π/4 or 3π/4
x = π/2 or x = π
```

Check by substitution: sin π/2 − cos π/2 = 1 and sin π − cos π = 1.

## Common errors

- Writing sec θ as 1/sin θ, or cosec θ as 1/cos θ.
- Forgetting that sec and cosec never lie between −1 and 1, so sec θ = 1/2 has no solution.
- Giving arcsin(sin 7π/6) as 7π/6. The output must lie in the restricted range.
- Using the wrong sign in cos(A ± B).
- Taking a square root in sin(θ/2) without checking which quadrant θ/2 is in.
- Solving cos 2x = k by finding only one angle for 2x. List every value in the doubled interval first.
- Cancelling a common factor such as sin x in an equation and losing solutions. Factorise instead.
- In R-form work, finding α from tan α = a/b when the form needs b/a. Write the two matching equations every time.

Next: condense this into the [revision notes](/resources/edexcel-ial-mathematics-further-trigonometry-reciprocal-and-inverse-functions-revision-notes/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-further-trigonometry-reciprocal-and-inverse-functions-practice/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited: Unit P3, section 2 (topics 2.1 to 2.3).
