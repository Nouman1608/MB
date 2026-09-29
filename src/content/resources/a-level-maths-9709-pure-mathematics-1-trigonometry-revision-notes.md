---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 1 Trigonometry -- Revision Notes"
seoTitle: "Cambridge 9709 Pure 1 Trigonometry Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 1 Trigonometry"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 33
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "trigonometry-cambridge-alevel-maths-1"
description: "Revision notes for Cambridge 9709 Pure 1 Trigonometry (1.5): graph facts, exact values, principal values, identities, equation methods and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

These notes condense **section 1.5 Trigonometry** of Pure Mathematics 1 in the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). The content is examined on **Paper 1** (1 hour 50 minutes, 75 marks), which every AS and A Level candidate takes. A scientific calculator is allowed, but exact values must be found by hand. For full explanations and worked examples, use the [study guide](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry/).

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). Quick check: [AS 10-minute diagnostic](/practice/9709/diagnostic/as/) and the [9709 self-check bank](/practice/9709/). Exam-style questions: [trigonometry practice set](/resources/a-level-maths-9709-pure-mathematics-1-trigonometry-practice/).

## The five things 1.5 asks for

1. Sketch and use graphs of sin, cos, tan, any angle, degrees or radians.
2. Exact values for 30°, 45°, 60° and related angles.
3. sin⁻¹x, cos⁻¹x, tan⁻¹x as principal values of inverse functions.
4. The identities tan θ ≡ sin θ / cos θ and sin²θ + cos²θ ≡ 1.
5. All solutions of simple equations in a given interval (no general solutions).

sec, cosec, cot and compound angles are not in 1.5. They come in [Pure Mathematics 2](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/) (2.3) and [Pure Mathematics 3](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/) (3.3).

## Key facts table

| Fact | Value | In MF19? |
|---|---|---|
| tan θ | sin θ / cos θ | Yes |
| Pythagorean identity | sin²θ + cos²θ ≡ 1 | Yes |
| Principal range of sin⁻¹x | −π/2 ≤ sin⁻¹x ≤ π/2 | Yes |
| Principal range of cos⁻¹x | 0 ≤ cos⁻¹x ≤ π | Yes |
| Principal range of tan⁻¹x | −π/2 < tan⁻¹x < π/2 | Yes |
| Exact values of 30°, 45°, 60° | see below | No, learn them |
| Radians | 180° = π | No, learn it |

## Exact values

| | 0 | π/6 (30°) | π/4 (45°) | π/3 (60°) | π/2 (90°) |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | √3/3 | 1 | √3 | undefined |

Memory aid: the sin row is √0/2, √1/2, √2/2, √3/2, √4/2. The cos row is the same list backwards.

## Signs and related angles

Positive ratios by quadrant, going anticlockwise from 0°: **all**, then **sin**, then **tan**, then **cos**.

**Method: exact value of any angle**

1. Reduce the angle to 0° to 360° by adding or subtracting 360°.
2. Find the quadrant.
3. Find the related acute angle (the angle to the x-axis).
4. Take the ratio of the related angle; attach the sign for that quadrant.

*Reminder.* cos 200° = −cos 20° (third quadrant), sin 290° = −sin 70° (fourth), tan 140° = −tan 40° (second).

## Graph facts

| | sin x | cos x | tan x |
|---|---|---|---|
| Period | 2π (360°) | 2π (360°) | π (180°) |
| Range | [−1, 1] | [−1, 1] | all reals |
| Symmetry | odd: sin(−x) = −sin x | even: cos(−x) = cos x | odd |
| Asymptotes | none | none | x = π/2 + nπ |

For y = a sin bx + c or y = a cos bx + c (a, b > 0):

| Feature | Value |
|---|---|
| Greatest value | c + a |
| Least value | c − a |
| Period | 2π/b (or 360°/b) |
| Cycles in 0 to 2π | b |

y = tan(x + k): shift left by k. Zeros where x + k = 0, π, 2π, …; asymptotes where x + k = π/2, 3π/2, …

*Reminder.* y = 1 + 4 sin 3x for 0° ≤ x ≤ 120°: period 360° ÷ 3 = 120°, so one cycle. It starts at (0, 1), reaches its greatest value 5 at (30°, 5), its least value −3 at (90°, −3), and ends at (120°, 1).

y = −a cos x starts at a minimum, not a maximum. A sketch must show the start and end points, the maximum and minimum points and the axis intercepts, with coordinates.

## Principal values

The calculator's inverse key gives the principal value only. It is the answer to sin⁻¹x, cos⁻¹x or tan⁻¹x, but usually only one answer to an equation.

- sin⁻¹(−1/2) = −π/6 (negative, because the range includes negatives)
- cos⁻¹(−1/2) = 2π/3 (never negative)
- cos⁻¹(cos θ) = θ only when 0 ≤ θ ≤ π

The graph of y = cos⁻¹x is the reflection of y = cos x, for 0 ≤ x ≤ π, in y = x.

## Identities: method box

**Proving** an identity:

1. Start with the more complicated side.
2. Combine fractions, expand brackets, or write tan as sin/cos.
3. Replace 1 − cos²θ by sin²θ (or 1 − sin²θ by cos²θ) when it appears.
4. Finish exactly at the other side. Never cross-multiply both sides.

**Finding one ratio from another:**

1. Use sin²θ + cos²θ = 1 to find the size.
2. Use the quadrant to fix the sign.
3. Use tan = sin/cos for the third ratio.

## Equations: method box

| Equation type | First step |
|---|---|
| sin x = k | x₁ = sin⁻¹k, x₂ = 180° − x₁ (or π − x₁) |
| cos x = k | x₁ = cos⁻¹k, x₂ = 360° − x₁ (or 2π − x₁) |
| tan x = k | x₁ = tan⁻¹k, then add 180° (or π) |
| a sin x = b cos x | divide by cos x → tan x = b/a |
| mix of sin² and cos | replace sin² by 1 − cos² → quadratic in cos |
| mix of cos² and sin | replace cos² by 1 − sin² → quadratic in sin |
| common factor sin x or cos x | factorise, set each factor to zero |
| sin(bx + k) = c | change interval for bx + k first |

Then add or subtract 360° (or 2π) to find every value in the interval, and undo any multiple or shift.

*Reminder (common factor).* Solve 7 sin x cos x = 2 sin x for 0° ≤ x ≤ 360°.

```
sin x (7 cos x − 2) = 0
sin x = 0:     x = 0°, 180°, 360°
cos x = 2/7:   x = 73.4°, 360° − 73.4° = 286.6°
```

Five solutions. Cancelling sin x would lose three.

*Reminder (±).* Solve tan²x = 3 for 0 ≤ x ≤ π.

```
tan x = √3 or tan x = −√3
x = π/3 or x = π − π/3 = 2π/3
```

A square root always gives two signs.

## Must-know distinctions

- **sin⁻¹x vs (sin x)⁻¹.** sin⁻¹x is the inverse function; (sin x)⁻¹ = 1/sin x.
- **sin²x vs sin x².** sin²x = (sin x)²; sin x² means the sine of x².
- **Identity vs equation.** An identity is true for all θ; you prove it. An equation is true for some θ; you solve it.
- **Principal value vs all solutions.** tan⁻¹k is one number; tan x = k has a solution every 180°.
- **Degrees vs radians.** The interval tells you which to use. 0 ≤ x ≤ 2π means radians.
- **Period of sin bx vs tan bx.** 360°/b for sin and cos; 180°/b for tan.
- **"Exact" vs "3 s.f."** Exact means surds, fractions and multiples of π.
- **Dividing vs factorising.** Divide by cos x only when cos x = 0 cannot be a solution; otherwise factorise.

## Quick self-test

1. Find the exact value of cos 330°.
2. Find the exact value of tan(2π/3).
3. Find the exact value of sin(−5π/4).
4. State the period of y = 4 tan 3x, in degrees.
5. State the range of y = 5 − 2 sin x.
6. Find the exact value of cos⁻¹(−√3/2).
7. Find tan⁻¹(1/√3) in degrees.
8. Given sin θ = 0.6 and 90° < θ < 180°, find tan θ.
9. Simplify (1 − sin²θ)/cos θ.
10. Solve tan x = −2 for 0° ≤ x ≤ 360°.
11. Solve 2 sin(x + 30°) = 1 for 0° ≤ x ≤ 360°.
12. State the number of solutions of cos 4x = 0.3 for 0° ≤ x ≤ 180°.

### Answers

1. Fourth quadrant, related 30°, cos positive: **√3/2**.
2. Second quadrant, related π/3, tan negative: **−√3**.
3. −5π/4 is the same as 3π/4 (second quadrant), sin positive: **√2/2**.
4. 180° ÷ 3 = **60°**.
5. sin x runs from −1 to 1, so **3 ≤ y ≤ 7**.
6. **5π/6** (must lie in 0 to π).
7. **30°**.
8. cos θ = −0.8 (second quadrant), so tan θ = 0.6 ÷ (−0.8) = **−0.75**.
9. (1 − sin²θ)/cos θ = cos²θ/cos θ = **cos θ**.
10. tan⁻¹(−2) = −63.4°; add 180° and 360°: **x = 116.6°, 296.6°**.
11. sin(x + 30°) = 1/2 with 30° ≤ x + 30° ≤ 390°: x + 30° = 30°, 150°, 390°, so **x = 0°, 120°, 360°**.
12. 0° ≤ 4x ≤ 720° is two full cycles, each with two solutions: **4**.

## Where marks are usually lost

- Giving only the calculator's principal value when the interval contains two or more solutions.
- Not extending the interval for 2x or 3x, then missing solutions beyond 360°.
- Leaving answers as values of 2x instead of dividing back to x.
- Answers in degrees when the interval is in radians, or the reverse.
- Cancelling a common factor of sin x or cos x and losing the zero solutions.
- Keeping an impossible root such as cos x = −3 without rejecting it.
- Writing cos θ = +√(1 − sin²θ) without checking the quadrant sign.
- In a proof, working on both sides at once or starting from the answer.
- A sketch with no coordinates at the end points, turning points or intercepts.
- Rounding a principal value to 1 d.p. before adding 180° or dividing by 2.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Section 1.5 Trigonometry, in 1 Pure Mathematics 1 (for Paper 1).
