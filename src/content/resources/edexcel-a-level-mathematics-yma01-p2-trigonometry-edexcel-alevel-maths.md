---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Trigonometry (P2.6)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-trigonometry-edexcel-alevel-maths"
description: "Using tan θ = sin θ/cos θ and sin²θ + cos²θ = 1, and solving trigonometric equations in a given interval, for Edexcel IAL Maths Unit P2, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 6 of Unit P2 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). There are two content statements:

- **6.1** "Knowledge and use of tan θ = sin θ/cos θ and sin²θ + cos²θ = 1"
- **6.2** "Solution of simple trigonometric equations in a given interval", in degrees or radians, including compound angles such as x + 30°, multiple angles such as 2x, and quadratics in sin x or cos x

Both identities are formulae you must know: the specification lists them among those that "will not appear in the booklet".

The [Unit P2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) summarises the unit, and the [guide to exponentials, logarithms and trigonometric equations](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric/) works through the standard equation types. This page concentrates on the decisions that cost marks: which identity to use, how to find every solution in an interval, and when to reject a value. Test yourself afterwards with the [P2 trigonometry revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-trigonometry-edexcel-alevel-maths-revision-notes/) and the [P2 trigonometry practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-trigonometry-edexcel-alevel-maths-practice/). The graphs and symmetries of sine, cosine and tangent come from Unit P1; see the [triangle trigonometry, radians and trigonometric graphs guide](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs/).

## The two identities

For a point on the unit circle at angle θ, its coordinates are (cos θ, sin θ). Pythagoras gives **sin²θ + cos²θ ≡ 1**, and the gradient of the radius gives **tan θ ≡ sin θ/cos θ** (where cos θ ≠ 0).

Useful rearrangements:

- sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ
- sin θ = tan θ cos θ
- sin²θ/cos²θ = tan²θ

### Worked example 1: exact values from one ratio

**Given that sin θ = 2/5 and θ is obtuse, find the exact values of cos θ and tan θ.**

cos²θ = 1 − sin²θ = 1 − 4/25 = 21/25, so cos θ = ±√21/5.

θ is obtuse (between 90° and 180°), where cosine is negative, so **cos θ = −√21/5**.

tan θ = sin θ/cos θ = (2/5) ÷ (−√21/5) = −2/√21 = **−2√21/21**.

The sign decision is a separate step worth a mark: write the quadrant and the reason.

### Worked example 2: proving an identity

**Prove that tan x + 1/tan x ≡ 1/(sin x cos x).**

Start from the more complicated side and change it into the other:

tan x + 1/tan x = sin x/cos x + cos x/sin x

= (sin²x + cos²x)/(sin x cos x)

= 1/(sin x cos x)

The final step uses sin²x + cos²x = 1. In an identity proof, never treat the identity as an equation and work on both sides at once.

## Solving equations in an interval: the method

1. **Rearrange** to a single ratio equal to a number, such as sin(...) = k.
2. **Adjust the interval** if the angle is compound or multiple: if 0° ≤ x < 360°, then 2x lies in 0° ≤ 2x < 720°, and x + 30° lies in 30° ≤ x + 30° < 390°.
3. **Principal value** from the calculator: sin⁻¹, cos⁻¹ or tan⁻¹.
4. **Second value** from symmetry:
   - sin: 180° − α (or π − α)
   - cos: 360° − α (or 2π − α), equivalently −α
   - tan: α + 180° (or α + π)
5. **Add or subtract** 360° (or 2π) repeatedly, or 180° (or π) for tan, to list every value in the adjusted interval.
6. **Undo** the adjustment (divide by 2, subtract 30°, ...) and check every answer lies in the original interval.

### Worked example 3: turning sin and cos into tan

**Solve 3 sin x = 2 cos x for 0° ≤ x < 360°.**

Divide by cos x (cos x = 0 does not satisfy the equation, because then sin x = ±1 and 3 sin x ≠ 0): tan x = 2/3.

Principal value: x = 33.69°. Tan repeats every 180°: x = 33.69° + 180° = 213.69°.

**x = 33.7°, 213.7°** (1 d.p.).

### Worked example 4: a multiple angle in radians

**Solve sin 3x = −½ for 0 ≤ x < π.**

Adjust: 0 ≤ 3x < 3π.

sin⁻¹(−½) = −π/6, which is outside the interval. Sine is negative in the third and fourth quadrants: 3x = π + π/6 = 7π/6 and 3x = 2π − π/6 = 11π/6. Adding 2π gives 19π/6, which exceeds 3π = 18π/6, so stop.

3x = 7π/6 or 11π/6, so **x = 7π/18 or 11π/18**.

### Worked example 5: a quadratic using sin²x + cos²x = 1

**Solve 4 cos²x = 3 − 4 sin x for 0° ≤ x < 360°.**

Replace cos²x so that only sin x appears: 4(1 − sin²x) = 3 − 4 sin x.

Rearrange: 4 sin²x − 4 sin x − 1 = 0.

This does not factorise, so use the quadratic formula with s = sin x:

s = (4 ± √(16 + 16))/8 = (1 ± √2)/2

So sin x = 1.207... or sin x = −0.2071...

**Reject sin x = 1.207**: sine lies between −1 and 1.

For sin x = −0.2071, the principal value is −11.95°. In the interval, x = 180° + 11.95° = 191.95° and x = 360° − 11.95° = 348.05°.

**x = 192.0°, 348.0°** (1 d.p.).

The choice of identity is the key decision: when the equation has both sin x and cos²x, replace cos²x by 1 − sin²x, not the other way round, so a single ratio remains.

### Worked example 6: squared ratios give ± roots

**Solve tan²θ = 3 for 0 ≤ θ < 2π.**

tan θ = √3 or tan θ = −√3. Both signs must be followed through:

- tan θ = √3: θ = π/3, 4π/3
- tan θ = −√3: θ = 2π/3, 5π/3

**θ = π/3, 2π/3, 4π/3, 5π/3.**

## Common mistakes

- **Missing the negative root** after taking a square root, as in Worked example 6.
- **Not adjusting the interval** for 2x or 3x, which loses half or more of the solutions.
- **Dividing by sin x or cos x** when it could be zero. Factorise instead, unless you can show the divisor cannot be zero (as in Worked example 3).
- **Keeping impossible values** such as sin x = 1.207.
- **Wrong mode:** solving in degrees when the interval is in radians, or the reverse.
- **Rounding too early:** use the stored principal value when adding 180° or subtracting from 360°.
- **Writing tan x = sin x ÷ cos x as tan = sin/cos** without the angle; a missing variable loses accuracy marks in identity proofs.

## Exam technique

- **"Solve ... giving your answers to 1 decimal place"** in degrees or **"to 3 significant figures"** in radians: follow the instruction exactly.
- **"Exact"** or **"in terms of π"** means give answers such as 7π/18; a decimal earns no final mark.
- **"Show that the equation can be written as ..."** is often part (a) of a question. Use the identity named or implied, and finish with exactly the printed equation.
- **"Hence solve"** means use the rearranged equation from part (a).
- **"Prove that"** an identity: work on one side only, and show the identity used at each step.
- List the solutions in increasing order, and count them against a quick sketch of the graph over the interval.

## Related resources

- [P2 trigonometry revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-trigonometry-edexcel-alevel-maths-revision-notes/)
- [P2 trigonometry practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-trigonometry-edexcel-alevel-maths-practice/)
- [Exponentials, logarithms and trigonometric equations](/resources/edexcel-ial-mathematics-exponentials-and-logarithms-and-solving-trigonometric/)
- [Triangle trigonometry, radians and trigonometric graphs (Unit P1)](/resources/edexcel-ial-mathematics-triangle-trigonometry-radians-and-trigonometric-graphs/)
- [Further trigonometry: reciprocal and inverse functions (Unit P3)](/resources/edexcel-ial-mathematics-further-trigonometry-reciprocal-and-inverse-functions/)
