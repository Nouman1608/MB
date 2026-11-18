---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.9 Reciprocal trigonometric ratios and inverse circular functions (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-9"
description: "IB Maths AA HL 3.9 study guide: sec, cosec and cot, the identities 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ, and arcsin, arccos and arctan."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.9 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) is additional higher level (AHL) content, so it is examined at HL only. It has three parts: the definitions of the reciprocal trigonometric ratios sec θ, cosec θ and cot θ; the Pythagorean identities 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ; and the inverse functions arcsin x, arccos x and arctan x, with their domains, ranges and graphs.

This page goes deeper on 3.9 alone; the [circular functions and identities study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/) gives the overview. Condense this page with the [3.9 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-9-revision-notes/) and test yourself with the [3.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-9-practice/).

## The reciprocal ratios

| Ratio | Definition | Undefined where |
|---|---|---|
| sec θ | 1 / cos θ | cos θ = 0, that is θ = π/2 + kπ |
| cosec θ | 1 / sin θ | sin θ = 0, that is θ = kπ |
| cot θ | cos θ / sin θ = 1 / tan θ | sin θ = 0, that is θ = kπ |

Each reciprocal has the same sign as its parent ratio, so the quadrant rules still apply: in the second quadrant only sin and cosec are positive, in the third only tan and cot, in the fourth only cos and sec.

Since −1 ≤ cos θ ≤ 1, its reciprocal satisfies |sec θ| ≥ 1, and likewise |cosec θ| ≥ 1. So an equation such as sec x = 0.5 has no solution. cot θ can take any real value.

To remember the pairing, look at the third letter: the third letter of sec is c, so it pairs with cos; the third letter of cosec is s, so it pairs with sin; the third letter of cot is t, so it pairs with tan.

## The two further Pythagorean identities

Start from cos²θ + sin²θ = 1.

```
Divide by cos²θ:   1 + tan²θ = sec²θ
Divide by sin²θ:   cot²θ + 1 = cosec²θ
```

These are the identities to use when a question mixes tan with sec, or cot with cosec. They also give the squared reciprocal from a known tan or cot without finding the angle.

### Example 1: all six ratios from one

Given that tan θ = −√5/2 and π/2 < θ < π, find sec θ, cosec θ and cot θ.

```
sec²θ = 1 + 5/4 = 9/4
Second quadrant: cos (and so sec) negative  →  sec θ = −3/2,  cos θ = −2/3
sin θ = tan θ cos θ = (−√5/2)(−2/3) = √5/3   →  cosec θ = 3/√5 = 3√5/5
cot θ = 1/tan θ = −2/√5 = −2√5/5
```

### Example 2: proving an identity

Show that sec θ − cos θ = sin θ tan θ.

```
sec θ − cos θ = 1/cos θ − cos θ
             = (1 − cos²θ)/cos θ
             = sin²θ / cos θ
             = sin θ × (sin θ / cos θ) = sin θ tan θ
```

Writing everything in terms of sin and cos is the default strategy when you cannot see a shorter route.

### Example 3: a quadratic in tan

Solve sec²x = 3 + tan x for 0 ≤ x ≤ π.

```
1 + tan²x = 3 + tan x  →  tan²x − tan x − 2 = 0  →  (tan x − 2)(tan x + 1) = 0
tan x = −1:  x = 3π/4
tan x = 2:   x = arctan 2 (≈ 1.11); π + arctan 2 is outside the interval
```

Replacing sec²x with 1 + tan²x turns a mixed equation into a quadratic in a single ratio, exactly as cos²x = 1 − sin²x does at SL. The [3.8 solving equations guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-8/) covers the interval method used in the last step.

## Inverse circular functions

sin x is not one-to-one on ℝ, so it has no inverse there. Restricting the domain to a part where it is one-to-one, and which covers the full range, gives an inverse function. The guide uses these restrictions:

| Function | Restricted domain of the original | Inverse | Domain | Range |
|---|---|---|---|---|
| sin x | −π/2 ≤ x ≤ π/2 | arcsin x | −1 ≤ x ≤ 1 | −π/2 ≤ y ≤ π/2 |
| cos x | 0 ≤ x ≤ π | arccos x | −1 ≤ x ≤ 1 | 0 ≤ y ≤ π |
| tan x | −π/2 < x < π/2 | arctan x | all real x | −π/2 < y < π/2 |

### Graphs

Each graph is the reflection of the restricted original in y = x.

- y = arcsin x runs from (−1, −π/2) through the origin to (1, π/2). It is an odd function.
- y = arccos x runs from (−1, π) through (0, π/2) to (1, 0). It is decreasing and has rotational symmetry about (0, π/2).
- y = arctan x passes through the origin and has horizontal asymptotes y = −π/2 and y = π/2. It is odd and increasing.

The range of each inverse is the key fact: an inverse function returns **one** angle, always from its range.

### Evaluating composites

**Inverse first, then a ratio.** Let θ be the inverse value, use its range to fix the quadrant, then use a triangle or identity.

```
tan(arcsin(3/5)):   θ in [−π/2, π/2] with sin θ = 3/5, so cos θ = 4/5 and tan θ = 3/4
cos(arctan(−2)):    θ in ]−π/2, 0[, where cos is positive; sec²θ = 5, so cos θ = 1/√5 = √5/5
sin(2 arctan(1/2)): sin θ = 1/√5, cos θ = 2/√5, so sin 2θ = 2(1/√5)(2/√5) = 4/5
```

**Ratio first, then the inverse.** The answer must lie in the range of the inverse, so it is not always the angle you started with.

```
arcsin(sin(5π/6)) = arcsin(1/2) = π/6          not 5π/6
arccos(cos(4π/3)) = arccos(−1/2) = 2π/3       not 4π/3
arctan(tan(3π/4)) = arctan(−1) = −π/4
```

### Transformed inverse functions

The usual transformation rules apply. Find the domain from the condition on the argument, and the range by transforming the basic range.

- f(x) = 2 arcsin(x − 1): need −1 ≤ x − 1 ≤ 1, so the domain is 0 ≤ x ≤ 2; the range is −π ≤ f(x) ≤ π.
- g(x) = arccos(x/3) + π/2: domain −3 ≤ x ≤ 3; range π/2 ≤ g(x) ≤ 3π/2.
- h(x) = 3 arctan 2x: domain ℝ; range −3π/2 < h(x) < 3π/2, with horizontal asymptotes y = ±3π/2.

### Example 4: an inverse equation

Solve 3 arccos 2x = π.

```
arccos 2x = π/3  →  2x = cos(π/3) = 1/2  →  x = 1/4
Check: 2x = 1/2 is in [−1, 1], so the solution is valid.
```

## Common mistakes

- Pairing sec with sin or cosec with cos.
- Writing 1 + tan²θ = sec θ (the square is missing) or tan²θ − 1 = sec²θ.
- Using sin⁻¹x to mean cosec x. sin⁻¹x is arcsin x, an angle; cosec x is the ratio 1/sin x.
- Giving arccos of a negative number as a negative angle, or arcsin(sin(5π/6)) as 5π/6.
- Stating the range of arctan with ≤ signs; ±π/2 are never reached.
- Forgetting that |sec θ| ≥ 1, and so trying to solve sec x = 0.5.

## Exam technique

- **Show that** or **prove** an identity: change sec, cosec and cot to sin and cos if no quicker route is obvious, and work from one side.
- **Write down** the domain and range: use inequality or interval notation, with the correct strict or non-strict signs.
- **Find the exact value** of a composite: draw the triangle and state the quadrant that the range of the inverse forces.
- **Sketch** an inverse function: show the endpoints (arcsin, arccos) or the asymptotes (arctan) with coordinates or equations.
- **Hence solve**: use the identity just proved to reduce the equation to one ratio.

The inverse functions return in calculus, where HL students differentiate and integrate them; see the [HL further calculus guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/).

## Where to go next

- Recall the facts with the [3.9 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-9-revision-notes/).
- Test yourself with the [3.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-9-practice/).
- Continue to the [3.10 compound angle identities guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-10/).
