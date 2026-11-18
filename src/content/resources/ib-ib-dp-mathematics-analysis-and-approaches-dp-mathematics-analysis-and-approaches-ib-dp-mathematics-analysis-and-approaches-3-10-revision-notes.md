---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.10 Compound angle identities (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.10
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-10"
description: "IB Maths AA HL 3.10 revision notes: compound angle identities, tan 2A, exact values from standard angles, sign traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.10 of IB DP Mathematics: Analysis and Approaches (first assessment 2021), which is HL only (AHL): the compound angle identities and the double angle identity for tan. For explanations and longer worked examples, use the [3.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-10/); then test yourself with the [3.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-10-practice/).

## The identities

| Identity | Sign rule |
|---|---|
| sin(A + B) = sin A cos B + cos A sin B | same sign as the bracket |
| sin(A − B) = sin A cos B − cos A sin B | same sign as the bracket |
| cos(A + B) = cos A cos B − sin A sin B | opposite sign to the bracket |
| cos(A − B) = cos A cos B + sin A sin B | opposite sign to the bracket |
| tan(A + B) = (tan A + tan B)/(1 − tan A tan B) | top: same; bottom: opposite |
| tan(A − B) = (tan A − tan B)/(1 + tan A tan B) | top: same; bottom: opposite |
| tan 2A = 2 tan A/(1 − tan²A) | from tan(A + A) |

Patterns: sin mixes the functions (sin cos, cos sin); cos keeps them together (cos cos, sin sin).

## Key terms

| Term | Meaning |
|---|---|
| Compound angle | An angle written as a sum or difference, such as A + B |
| Standard angles | 30°, 45°, 60° (π/6, π/4, π/3) and their multiples, with known exact values |
| Rationalise | Remove a surd from a denominator by multiplying by its conjugate |
| Conjugate | For √3 − 1, the conjugate is √3 + 1 |
| Triple angle | An expression for sin 3θ or cos 3θ found from 2θ + θ |

## Exact values to build

| Angle | Split | sin | cos | tan |
|---|---|---|---|---|
| 15° (π/12) | 45° − 30° | (√6 − √2)/4 | (√6 + √2)/4 | 2 − √3 |
| 75° (5π/12) | 45° + 30° | (√6 + √2)/4 | (√6 − √2)/4 | 2 + √3 |
| 105° (7π/12) | 60° + 45° | (√6 + √2)/4 | (√2 − √6)/4 | −2 − √3 |

Since 75° = 90° − 15°, sin 75° = cos 15°: a quick consistency check.

## Methods

**Two angles from given ratios**

1. Find the missing sin or cos of each angle with cos²θ + sin²θ = 1.
2. Fix each sign from that angle's own quadrant.
3. Substitute into the identity and simplify.
4. Check with sin² + cos² = 1 if you found both.

**Equation with a compound angle**

1. Expand the compound angle.
2. Collect sin x terms on one side and cos x terms on the other.
3. Divide by cos x (after showing cos x = 0 is not a solution) to get tan x = k.
4. Solve in the interval.

**Triple angle proof**

1. Write 3θ = 2θ + θ and expand.
2. Replace sin 2θ and cos 2θ with double angle forms.
3. Use the Pythagorean identity so only one ratio remains.

**tan A from tan 2A**

1. Set 2t/(1 − t²) = k and rearrange to a quadratic in t.
2. Solve, then use the given range of A to choose the root.

## Worked reminders

- cos 5x cos 2x + sin 5x sin 2x = cos 3x.
- sin 70° cos 10° − cos 70° sin 10° = sin 60° = √3/2.
- tan A = 1/2, tan B = 1/3: tan(A + B) = (5/6)/(5/6) = 1.
- tan A = −2: tan 2A = −4/(1 − 4) = 4/3.
- sin(π/2 + x) = sin(π/2) cos x + cos(π/2) sin x = cos x.
- sin 3θ = 3 sin θ − 4sin³θ and cos 3θ = 4cos³θ − 3 cos θ (prove, do not quote).

## Exam traps

- **cos sign flip.** cos(A + B) has a minus.
- **No distributing.** sin(A + B) ≠ sin A + sin B.
- **Each angle has its own quadrant.** An obtuse B makes cos B negative even if A is acute.
- **tan(A − B) denominator.** It is 1 + tan A tan B.
- **Undefined tan 2A.** If tan²A = 1, tan 2A is undefined (2A = π/2 + kπ).
- **Unused range.** Two roots from tan 2A = k; the range of A picks one.
- **Exact form.** Leave answers as surds; rationalise when asked for simplest form.

## Self-test

1. Find the exact value of sin 15°.
2. Simplify sin 2x cos x + cos 2x sin x.
3. Find the exact value of cos 50° cos 10° − sin 50° sin 10°.
4. Given tan A = 3 and tan B = 1/2, find tan(A − B).
5. Given tan θ = 1/3, find tan 2θ.
6. Expand cos(x + π/3).
7. Given sin A = 5/13 (A acute) and sin B = 3/5 (B acute), find cos(A + B).
8. Find the exact value of tan(π/12) using π/3 − π/4.
9. Simplify (tan 4x + tan x)/(1 − tan 4x tan x).
10. Show that sin(x + π) = −sin x.
11. Given tan 2A = −4/3 and 0 < A < π/2, find tan A.
12. Find the greatest value of √3 sin x + cos x, using √3 sin x + cos x = 2 sin(x + π/6).

### Answers

1. (√6 − √2)/4.
2. sin 3x.
3. cos 60° = 1/2.
4. (3 − 1/2)/(1 + 3/2) = (5/2)/(5/2) = 1.
5. (2/3)/(8/9) = 3/4.
6. (1/2) cos x − (√3/2) sin x.
7. cos A = 12/13, cos B = 4/5; cos(A + B) = 48/65 − 15/65 = 33/65.
8. (√3 − 1)/(1 + √3) = 2 − √3.
9. tan 5x.
10. sin x cos π + cos x sin π = −sin x.
11. 2t/(1 − t²) = −4/3 gives 2t² − 3t − 2 = 0, so t = 2 or −1/2; A is acute, so tan A = 2.
12. 2, when x = π/3.

## Links

Re-learn the derivations in the [3.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-10/), and see how they fit the whole unit in the [circular functions revision notes](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities-revision-notes/).
