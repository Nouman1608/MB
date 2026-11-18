---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.13 The scalar product of two vectors (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-13"
description: "IB Maths AA HL 3.13 revision notes: scalar product formulas and properties, angles between vectors, perpendicular and parallel tests, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.13 of IB DP Mathematics: Analysis and Approaches (first assessment 2021), which is HL only (AHL): the scalar product of two vectors, the angle between two vectors, and perpendicular and parallel vectors. The worked examples are in the [3.13 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-13/); test yourself afterwards with the [3.13 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-13-practice/). Vectors are written in rows here; use columns in the exam.

## Formulas

| Result | Formula |
|---|---|
| Component form | v · w = v₁w₁ + v₂w₂ + v₃w₃ |
| Geometric form | v · w = \|v\|\|w\| cos θ, with 0 ≤ θ ≤ π |
| Angle between vectors | cos θ = v · w / (\|v\|\|w\|) |
| Length from scalar product | v · v = \|v\|² |
| Perpendicular (non-zero vectors) | v · w = 0 |
| Parallel | \|v · w\| = \|v\|\|w\| (θ = 0 or π) |
| Angle with the x-axis | cos θ = v₁/\|v\| (similarly v₂, v₃ for y and z) |

**Properties:** v · w = w · v; u · (v + w) = u · v + u · w; (kv) · w = k(v · w).

## Key terms

| Term | Meaning |
|---|---|
| Scalar product | The number v · w; also called the dot product |
| Angle between two vectors | The angle between them when drawn from a common point, between 0 and π |
| Perpendicular (orthogonal) | At right angles; scalar product zero |
| Acute / obtuse | Scalar product positive / negative |
| Distributive | u · (v + w) = u · v + u · w, so brackets expand as in algebra |

## Sign check

- v · w > 0: acute angle.
- v · w = 0: right angle.
- v · w < 0: obtuse angle.

Use this as a check on a calculated angle: a negative scalar product must give an angle above 90°.

## Methods

**Angle at a vertex of a triangle**

1. Form both vectors starting at the vertex (for angle ABC: BA and BC).
2. Compute the scalar product and both magnitudes.
3. cos θ = product ÷ (magnitude × magnitude); take arccos.

**Unknown making vectors perpendicular**

1. Write the scalar product in terms of the unknown.
2. Set it equal to zero and solve; a quadratic may give two values.

**Magnitude of a combination**

1. Square: |a + kb|² = (a + kb) · (a + kb).
2. Expand: |a|² + 2k a · b + k²|b|².
3. Substitute the given values and take the square root.

**Vector perpendicular to two given vectors**

1. Let n = (x, y, z); set n · u = 0 and n · v = 0.
2. Choose a convenient value for one component and solve for the others.

**Proof of perpendicularity**

1. Express the two vectors in terms of base vectors.
2. Expand the scalar product using the properties.
3. Use given facts (equal lengths, known products) to show the result is 0.

## Worked reminders

- (3, −1, 2) · (1, 5, 1) = 3 − 5 + 2 = 0: perpendicular.
- (2, 2, 1) and (4, 0, −3): product 5, magnitudes 3 and 5, cos θ = 1/3, θ = 70.5°.
- |v| = 4, |w| = 3, θ = π/3: v · w = 12 × 1/2 = 6.
- |a| = |b| = 1 and a · b = 0: |a + b|² = 1 + 0 + 1 = 2, so |a + b| = √2.
- In 2D, (5, 12) · (12, −5) = 60 − 60 = 0.

## Exam traps

- **The answer is a number.** v · w is never a vector.
- **Vertex direction.** Both vectors must start at the vertex; otherwise you get 180° minus the angle.
- **The middle term.** |a + b|² = |a|² + 2a · b + |b|²; leaving out 2a · b is the most common error.
- **Both magnitudes.** Divide by |v||w|, not by one magnitude.
- **Zero vector.** Perpendicularity applies to non-zero vectors only.
- **Angle mode.** Degrees or radians as the question asks.
- **Exact cosine.** On Paper 1, an answer such as θ = arccos(−1/3) may be expected, not a decimal.

## Self-test

1. Find (2, −1, 4) · (3, 6, 1).
2. Find (i − 2j + k) · (3i + j).
3. Are (4, −2, 1) and (1, 3, 2) perpendicular?
4. Find k so that (k, 2, −3) is perpendicular to (1, k, 2).
5. Find the angle between (1, 0, 1) and (0, 1, 1).
6. Given |a| = 5, |b| = 2 and the angle between them is π/4, find a · b.
7. Given |a| = 2, |b| = 3 and a · b = −1, find |a + b|.
8. Find the angle between (1, 2, 2) and the z-axis.
9. The scalar product of two non-zero vectors is negative. What type is the angle between them?
10. Simplify (a + b) · (a − b).
11. Find a vector perpendicular to (1, 1, 0) and (0, 1, 1).
12. For A(0, 1, 2), B(1, 1, 0) and C(2, 3, 1), find BA · BC and decide whether angle ABC is acute, right or obtuse.

### Answers

1. 6 − 6 + 4 = 4.
2. (1, −2, 1) · (3, 1, 0) = 3 − 2 + 0 = 1.
3. 4 − 6 + 2 = 0, so yes.
4. k + 2k − 6 = 0, so k = 2.
5. cos θ = 1/(√2 × √2) = 1/2, so θ = π/3 (60°).
6. 10 × √2/2 = 5√2.
7. |a + b|² = 4 − 2 + 9 = 11, so √11.
8. cos θ = 2/3, so θ = 48.2°.
9. Obtuse.
10. |a|² − |b|².
11. For example (1, −1, 1).
12. BA = (−1, 0, 2), BC = (1, 2, 1); BA · BC = −1 + 0 + 2 = 1 > 0, so acute.

## Links

Return to the [3.13 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-13/) for the proofs, and see the whole strand in the [HL vectors revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/).
