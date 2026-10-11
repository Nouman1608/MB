---
title: "Pearson Edexcel International Advanced Level Mathematics: Further trigonometry and R-formulae (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P3: Further Trig Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on reciprocal and inverse trig functions, sec and cosec identities, double angles and R-formulae for Edexcel IAL Mathematics P3."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense Unit P3 section 2 (topics 2.1 to 2.3) of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019. The specification lists P3 as compulsory for IAL Mathematics and Pure Mathematics only; IAS weighting is N/A. Longer explanations and fuller worked examples are in the [study guide](/resources/edexcel-ial-mathematics-further-trigonometry-reciprocal-and-inverse-functions/). Then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-further-trigonometry-reciprocal-and-inverse-functions-practice/).

Course hub: [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/). Printable [checklist](/checklists/edexcel/a-level/mathematics/). Unsure what to revise first? A [free 10-minute diagnostic](/diagnostics/) will show you. Related earlier work: [P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/).

## 2.1 Reciprocal functions

| Function | Definition | Period | Range | Undefined at |
|---|---|---|---|---|
| sec θ | 1/cos θ | 360° | \|sec θ\| ≥ 1 | θ = 90° + 180°n |
| cosec θ | 1/sin θ | 360° | \|cosec θ\| ≥ 1 | θ = 180°n |
| cot θ | 1/tan θ = cos θ/sin θ | 180° | all real | θ = 180°n |

- Reciprocal graphs have vertical asymptotes where the original function is zero.
- Where the original function is ±1, the reciprocal touches it with the same value.
- sec and cosec equations: invert first, then solve cos or sin. If the value is between −1 and 1, there is no solution.

## 2.1 Inverse functions

| Function | Output (radians) | Input |
|---|---|---|
| arcsin x | −π/2 to π/2, ends included | −1 to 1, ends included |
| arccos x | 0 to π, ends included | −1 to 1, ends included |
| arctan x | −π/2 to π/2, ends excluded | any real number |

- Degrees: replace π/2 by 90° and π by 180°.
- Graph of an inverse = reflection of the restricted graph in y = x.
- f(f⁻¹(x)) = x on the inverse's domain. f⁻¹(f(x)) = x only on the restricted domain of f.

## 2.2 and 2.3 Identity table

| Identity | Notes |
|---|---|
| sin² θ + cos² θ ≡ 1 | Base identity |
| sec² θ ≡ 1 + tan² θ | Use when sec and tan appear together |
| cosec² θ ≡ 1 + cot² θ | Use when cosec and cot appear together |
| sin(A ± B) ≡ sin A cos B ± cos A sin B | Signs match |
| cos(A ± B) ≡ cos A cos B ∓ sin A sin B | Signs are opposite |
| tan(A ± B) ≡ (tan A ± tan B)/(1 ∓ tan A tan B) | Denominator sign opposite |
| sin 2A ≡ 2 sin A cos A | |
| cos 2A ≡ cos² A − sin² A ≡ 2 cos² A − 1 ≡ 1 − 2 sin² A | Choose the form that leaves one function |
| tan 2A ≡ 2 tan A/(1 − tan² A) | |
| cos² A ≡ (1 + cos 2A)/2, sin² A ≡ (1 − cos 2A)/2 | Half-angle forms |

Half angles: put A = θ/2. For example cos θ ≡ 1 − 2 sin²(θ/2), so sin²(θ/2) = (1 − cos θ)/2. The sign of the square root depends on the quadrant of θ/2.

## Method boxes

**Equation with a double angle**

1. Replace the double angle: sin 2θ by 2 sin θ cos θ, cos 2θ by the form matching the other terms.
2. Collect everything on one side. Factorise (never divide by a trig function that could be zero).
3. Solve each factor. If the angle is kθ, the interval for kθ is k times as long as the interval for θ, so list every value in it before dividing by k.
4. Rule out impossible values (sine or cosine beyond ±1).

**Equation with sec² or cosec²**

1. Swap sec² for 1 + tan² (or cosec² for 1 + cot²) so a single function remains.
2. Solve the quadratic. Reject values that cannot occur.
3. Find all angles in the interval.

**Proving an identity**

1. Start with the more complicated side. Do not move terms across the ≡ sign.
2. Apply double angle or compound formulae. Convert to sin and cos if stuck.
3. Finish on the other side and write "= RHS".

**a cos θ + b sin θ in R-form**

1. Choose the target form and expand it.
2. Write the two matching equations, for example r cos α = a and r sin α = b.
3. r = √(a² + b²). Find α from the ratio of the two equations, with α acute when both matches are positive.
4. To solve = c: divide by r, take the inverse, then list every value in the interval for the whole bracket before subtracting or adding α.
5. The expression has greatest value r and least value −r. For r cos(θ − α) the greatest value occurs when θ = α and the least when θ = α + 180°.

| Form wanted | Coefficient of cos θ and of sin θ |
|---|---|
| r cos(θ − α) | a = r cos α, b = r sin α |
| r cos(θ + α) | a = r cos α, b = −r sin α |
| r sin(θ + α) | a = r sin α, b = r cos α |
| r sin(θ − α) | a = −r sin α, b = r cos α |

## Small worked reminders

**Reminder 1.** Solve 2 cot² x = 3 cosec x for 0 < x < 360°.

```
2(cosec² x − 1) = 3 cosec x
2 cosec² x − 3 cosec x − 2 = 0
(2 cosec x + 1)(cosec x − 2) = 0
cosec x = −1/2 is impossible. cosec x = 2, so sin x = 1/2
x = 30°, 150°
```

**Reminder 2.** Solve 5 cos θ + 2 sin θ = 3 for 0 ≤ θ < 360°.

```
r = √29, tan α = 2/5, α = 21.8°
cos(θ − 21.8°) = 3/√29,  θ − 21.8° = ±56.1°
θ = 77.9° or θ = −34.3° + 360° = 325.7°
```

**Reminder 3.** Solve √3 cos θ − sin θ = 1 for 0 ≤ θ < 2π.

```
r cos α = √3, r sin α = 1 for r cos(θ + α)
r = 2, tan α = 1/√3, α = π/6
2 cos(θ + π/6) = 1,  cos(θ + π/6) = 1/2
range: π/6 ≤ θ + π/6 < 13π/6
θ + π/6 = π/3 or 5π/3, so θ = π/6 or 3π/2
```

## Graph sketches to know

- y = sec x: branches with minimum points (0, 1) and maximum points (π, −1); asymptotes at x = ±π/2, ±3π/2.
- y = cosec x: branches with minimum point (π/2, 1) and maximum point (3π/2, −1); asymptotes at x = 0, π, 2π.
- y = cot x: decreasing curve through (π/2, 0) with asymptotes at x = 0, π, 2π.
- y = arcsin x: increasing, from (−1, −π/2) through the origin to (1, π/2).
- y = arccos x: decreasing, from (−1, π) through (0, π/2) to (1, 0).
- y = arctan x: increasing through the origin, flattening towards y = ±π/2.

## Must-know distinctions

- **cos(A + B) versus sin(A + B):** cosine changes the sign between the terms; sine keeps it.
- **sec θ versus arccos x:** sec is 1/cos. arccos is the inverse function. cos⁻¹ means arccos, not 1/cos.
- **Reciprocal versus inverse:** the reciprocal of sin is cosec. The inverse of sin is arcsin.
- **Range of arcsin versus arccos:** arcsin is centred on 0 (−π/2 to π/2), arccos runs from 0 to π.
- **Period of cot versus cosec:** cot repeats every 180°, cosec every 360°.
- **Identity versus equation:** an identity (≡) holds for all θ. An equation has solutions in an interval.

## Quick self-test

1. Find the exact value of cosec(7π/6).
2. State the range of y = arccos x in radians.
3. Find the exact value of arctan(−1) in radians.
4. Write 5 − 3 sec² θ in terms of tan θ.
5. Find the exact value of sin 15° using sin(45° − 30°).
6. sin A = 3/5 and A is acute. Find sin 2A and cos 2A.
7. sin x = 1/3. Find cos 2x.
8. Write cos θ + 2 sin θ as r cos(θ − α) with α in degrees to 1 d.p. (state r and α).
9. State the greatest value of 6 + cos θ + 2 sin θ, as an exact value.
10. Solve sin 2θ = sin θ for 0 ≤ θ ≤ 360°.
11. Prove that (1 − cos 2x)/sin 2x ≡ tan x.
12. Explain why sec θ = 0.4 has no solutions.

### Answers

1. cosec(7π/6) = 1/sin(7π/6) = 1/(−1/2) = **−2**.
2. **0 ≤ y ≤ π**.
3. **−π/4**.
4. sec² θ = 1 + tan² θ, so 5 − 3(1 + tan² θ) = **2 − 3 tan² θ**.
5. sin 45° cos 30° − cos 45° sin 30° = (√2/2)(√3/2) − (√2/2)(1/2) = **(√6 − √2)/4**.
6. cos A = 4/5. sin 2A = 2(3/5)(4/5) = **24/25**. cos 2A = 16/25 − 9/25 = **7/25**.
7. cos 2x = 1 − 2 sin² x = 1 − 2/9 = **7/9**.
8. r = √(1 + 4) = **√5**, tan α = 2, α = **63.4°**.
9. Greatest value of cos θ + 2 sin θ is √5, so greatest is **6 + √5**.
10. 2 sin θ cos θ − sin θ = 0, so sin θ(2 cos θ − 1) = 0. sin θ = 0 gives 0°, 180°, 360°. cos θ = 1/2 gives 60°, 300°. Solutions: **0°, 60°, 180°, 300°, 360°**.
11. LHS = 2 sin² x/(2 sin x cos x) = sin x/cos x = tan x = RHS, using 1 − cos 2x = 2 sin² x and sin 2x = 2 sin x cos x.
12. sec θ = 1/cos θ, so cos θ = 2.5. Cosine never exceeds 1, so **there are no solutions**.

## Where marks are usually lost

- Dividing both sides of an equation by sin θ or cos θ and losing the solutions where it is zero.
- Finding one angle for kθ and not listing all values in the longer interval before dividing by k.
- Taking arcsin(sin x) as x without checking the restricted range.
- Wrong sign in cos(A ± B) or in the denominator of tan(A ± B).
- Choosing the wrong form of cos 2A, leaving two different functions in a quadratic.
- Matching a and b to the wrong terms in an R-form, so α comes out as 90° − α.
- Giving α in degrees in a question set in radians, or the reverse.
- Leaving a "prove" answer without a final line showing LHS = RHS, or changing both sides together.
- Rounding too early in R-form solutions, which shifts the third significant figure.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited: Unit P3, section 2 (topics 2.1 to 2.3).
