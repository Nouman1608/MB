---
title: "OxfordAQA International AS and A-level Mathematics: Inverse trigonometric functions and secant, cosecant, cotangent (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Inverse Trig and Sec Cosec Cot Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on sin⁻¹, cos⁻¹, tan⁻¹, sec, cosec, cot and the two Pythagorean-type identities for OxfordAQA International A-level Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed for the final weeks. For full explanations and worked examples, use the [study guide](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant/). These notes follow content area P2.4 (Trigonometry, first part) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level Unit P2, so it is A2 content and not examined at International AS. Angles are in radians unless a degree sign appears.

Also useful: the [hub](/boards/oxfordaqa/a-level/mathematics/), the [checklist](/checklists/oxfordaqa/a-level/mathematics/), the [practice set](/resources/oxfordaqa-a-level-mathematics-inverse-trigonometric-functions-and-secant-cosecant-practice/) and the [free diagnostics](/diagnostics/).

## Definitions

```
sec x = 1/cos x      cosec x = 1/sin x      cot x = cos x/sin x = 1/tan x
```

| Function | Undefined at | Range | Period |
|---|---|---|---|
| sec x | x = π/2 + nπ | abs(sec x) ≥ 1 | 2π |
| cosec x | x = nπ | abs(cosec x) ≥ 1 | 2π |
| cot x | x = nπ | all reals | π |

cot(π/2) = 0 even though tan(π/2) does not exist.

## Exact values to know

| Angle | sec | cosec | cot |
|---|---|---|---|
| π/6 | 2/√3 | 2 | √3 |
| π/4 | √2 | √2 | 1 |
| π/3 | 2 | 2/√3 | 1/√3 |
| π/2 | undefined | 1 | 0 |
| 0 | 1 | undefined | undefined |

Get any other angle by finding the reference angle, then fixing the sign with the quadrant: sec has the sign of cos, cosec the sign of sin, and cot the sign of tan.

## Graph features

| Graph | Asymptotes | Turning points / crossings | Shape |
|---|---|---|---|
| y = sec x | x = ±π/2, ±3π/2 ... | minimum (0, 1), maximum (π, −1) | U-shaped branches, never inside −1 < y < 1 |
| y = cosec x | x = 0, ±π, ±2π ... | minimum (π/2, 1), maximum (3π/2, −1) | same shape as sec, shifted by π/2 |
| y = cot x | x = 0, ±π, ±2π ... | crosses the x-axis at ±π/2, ±3π/2 ... | every branch falls left to right |

### Method: sketching a reciprocal graph

1. Sketch the original (cos, sin or tan) lightly.
2. Draw an asymptote at each x-intercept of the original.
3. Where the original equals 1 or −1, the reciprocal passes through the same point.
4. Draw each branch curving away from that point towards the asymptotes.
5. Label asymptote equations and the coordinates of the turning points.

## The two identities

```
sin²x + cos²x = 1
÷ cos²x:   tan²x + 1 = sec²x
÷ sin²x:   1 + cot²x = cosec²x
```

Rearranged: tan²x = sec²x − 1, cot²x = cosec²x − 1.

### Method: equations with sec or cosec squared

1. Spot a squared reciprocal alongside tan (or cot) in the same equation.
2. Replace sec²x by 1 + tan²x (or cosec²x by 1 + cot²x).
3. Collect terms to get a quadratic in tan x (or cot x).
4. Factorise or use the formula, then solve each linear piece.
5. Find every angle in the stated interval for each value.

### Worked reminder: equation with cosec²

Solve 3cosec²x = 7 − cot x for 0° < x < 180°.

```
3(1 + cot²x) = 7 − cot x
3cot²x + cot x − 4 = 0
(3cot x + 4)(cot x − 1) = 0
cot x = 1   or   cot x = −4/3
tan x = 1   or   tan x = −3/4
x = 45°     or   x = 180° − 36.87...° = 143.1° (1 d.p.)
```

Only one solution comes from each value because the interval is a single period of tan x.

### Worked reminder: proof

Prove that cosec x − sin x ≡ cos x cot x.

```
LHS = 1/sin x − sin x = (1 − sin²x)/sin x = cos²x/sin x = cos x × (cos x/sin x) = RHS
```

### Method: proving an identity

1. Pick the more complicated side and work only on that side.
2. Rewrite sec, cosec and cot in terms of sin x and cos x.
3. Combine fractions over a common denominator.
4. Use sin²x + cos²x = 1, or one of the two identities above, to simplify.
5. Stop when the expression matches the other side exactly, and write the final line as the target.

A second route is to substitute the identities directly. To prove sec²x − cosec²x ≡ tan²x − cot²x:

```
LHS = (1 + tan²x) − (1 + cot²x) = tan²x − cot²x = RHS
```

## Inverse functions

| Function | Restricted piece used | Domain | Range |
|---|---|---|---|
| sin⁻¹x | sin x on [−π/2, π/2] | [−1, 1] | [−π/2, π/2] |
| cos⁻¹x | cos x on [0, π] | [−1, 1] | [0, π] |
| tan⁻¹x | tan x on (−π/2, π/2) | all real x | (−π/2, π/2) |

### Graph points

```
sin⁻¹x:  (−1, −π/2), (0, 0), (1, π/2)     increasing
cos⁻¹x:  (−1, π), (0, π/2), (1, 0)        decreasing
tan⁻¹x:  (0, 0), asymptotes y = ±π/2      increasing, defined for all x
```

Each graph is the reflection of the restricted piece of the original in y = x. Swap x and y at each key point.

### Compositions

```
sin(sin⁻¹x) = x for −1 ≤ x ≤ 1         sin⁻¹(sin x) = x for x in [−π/2, π/2] only
```

Outside the principal interval, replace the angle by the one inside it with the same sine, cosine or tangent.

### Method: exact value of sin(cos⁻¹k) and similar

1. Let α = cos⁻¹k, so cos α = k.
2. Use the range of cos⁻¹ to decide the sign of sin α.
3. Find sin α from sin²α = 1 − k².
4. Check with a right-angled triangle if needed.

Worked reminder: cos(tan⁻¹(−3/4)). Let β = tan⁻¹(−3/4), with β in (−π/2, 0). Then cos β is positive, and sec²β = 1 + 9/16 = 25/16, so sec β = 5/4 and cos β = **4/5**.

## Domain and range after a transformation

Write the restriction on the inside of the inverse function, then solve it. For the range, apply the transformation to the end points of the principal range.

| Function | Domain | Range |
|---|---|---|
| 3sin⁻¹x − π/2 | −1 ≤ x ≤ 1 | −2π ≤ y ≤ π |
| cos⁻¹(x/2) | −2 ≤ x ≤ 2 | 0 ≤ y ≤ π |
| tan⁻¹x + π/4 | all real x | −π/4 < y < 3π/4 |

The last graph keeps its shape and moves up by π/4, so its asymptotes are y = −π/4 and y = 3π/4. A stretch or translation changes the range, but the domain of tan⁻¹ stays all real numbers until the input is changed.

## Must-know distinctions

- sin⁻¹x is the inverse function. It is not 1/sin x, which is cosec x.
- sec, cosec and cot are reciprocals or ratios. sin⁻¹, cos⁻¹ and tan⁻¹ are inverses. Their graphs have different origins.
- sin⁻¹ and cos⁻¹ end at x = ±1. tan⁻¹ has asymptotes and is defined for every x.
- cos⁻¹ never returns a negative angle. sin⁻¹ and tan⁻¹ do.
- cot x falls in each branch, and tan x rises.
- Domain of the inverse is the range of the original piece. Range of the inverse is the restricted domain.

## Checking an answer

- Substitute a solution back into the original equation, using the reciprocal definitions.
- For an inverse value, confirm the angle lies in the stated range of the function.
- For a sketch, check that each asymptote sits where the original function crosses the x-axis.
- For a range, test one value from inside the domain and see that the output lies within your stated interval.

## Quick self-test

1. Find the exact value of cosec(5π/3).
2. Find the exact value of cot(π/3).
3. State the values of x that must be excluded from the domain of cosec x.
4. Find sin⁻¹(−1/2) in radians, exactly.
5. Find tan⁻¹(√3) in radians, exactly.
6. Find cos⁻¹(cos(−π/4)).
7. Simplify (1 + tan²θ)cos²θ.
8. State the range of tan⁻¹x.
9. Find the exact value of cos(sin⁻¹(20/29)).
10. Given that tan x = 3/4 and x is acute, find sec x.
11. State the domain of y = sin⁻¹(x/3).

### Answers

1. sin(5π/3) = −√3/2, so cosec(5π/3) = **−2/√3**.
2. tan(π/3) = √3, so cot(π/3) = **1/√3**.
3. sin x = 0, so exclude **x = nπ** for any integer n.
4. **−π/6**.
5. **π/3**.
6. cos(−π/4) = cos(π/4), and π/4 is in [0, π], so the answer is **π/4**.
7. (1 + tan²θ) = sec²θ, and sec²θ cos²θ = **1**.
8. **−π/2 < tan⁻¹x < π/2**.
9. Let α = sin⁻¹(20/29). Then cos α is positive and cos²α = 1 − 400/841 = 441/841, so **21/29**.
10. sec²x = 1 + 9/16 = 25/16, and sec x is positive for an acute angle: **5/4**.
11. −1 ≤ x/3 ≤ 1, so **−3 ≤ x ≤ 3**.

## Where marks are usually lost

- Writing sin⁻¹x for 1/sin x, or the other way round.
- Leaving out the asymptotes on a sketch of sec, cosec or cot, or drawing the curves through them.
- Sketching sec x or cosec x with a branch that enters the strip −1 < y < 1.
- Giving an angle outside the range of the inverse function, for example cos⁻¹(−1/2) = −2π/3.
- Evaluating sin⁻¹(sin x) as x when x lies outside [−π/2, π/2].
- Choosing the wrong sign for the square root when finding sin(cos⁻¹k) or cos(sin⁻¹k).
- Proving an identity by working on both sides at once. Start from one side and reach the other.
- Solving the quadratic in tan x but then listing only one angle per value.
- Mixing degrees and radians in the final answers.
- Stating the domain of sin⁻¹(2x − 1) as −1 ≤ x ≤ 1 instead of solving for the inside expression.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: content area P2.4 Trigonometry (inverse trigonometric functions; secant, cosecant and cotangent).
