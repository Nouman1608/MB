---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.16 The vector product of two vectors (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-16"
description: "IB Maths AA HL 3.16 revision notes: the vector product formula and properties, the right-hand rule, parallel tests and areas of triangles, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.16 of IB DP Mathematics: Analysis and Approaches (first assessment 2021), which is HL only (AHL): the definition and properties of the vector product and the geometric interpretation of |v × w|. The worked examples are in the [3.16 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-16/); test yourself afterwards with the [3.16 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-16-practice/). Vectors are written in rows here; use columns in the exam.

## Formulas

| Result | Formula |
|---|---|
| Components | v × w = (v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁) |
| Geometric form | v × w = \|v\|\|w\| sin θ n, n a unit normal by the right-hand rule |
| Magnitude | \|v × w\| = \|v\|\|w\| sin θ |
| Parallelogram with sides v, w | area = \|v × w\| |
| Triangle ABC | area = ½\|AB × AC\| |
| Base vectors | i × j = k, j × k = i, k × i = j; reversed order gives the negative |

## Properties

- v × w = −w × v (anticommutative)
- u × (v + w) = u × v + u × w
- (kv) × w = k(v × w)
- v × v = 0
- For non-zero v, w: v × w = 0 exactly when v and w are parallel
- v × w is perpendicular to both v and w: v · (v × w) = w · (v × w) = 0

## Key terms

| Term | Meaning |
|---|---|
| Vector product | v × w, a vector; also called the cross product |
| Right-hand rule | Fingers along v, curl towards w; the thumb gives the direction of v × w |
| Normal | A vector perpendicular to a plane (or to two directions in it) |
| Anticommutative | Swapping the order changes the sign |
| Unit normal | (v × w)/\|v × w\| |

## Scalar product vs vector product

| | v · w | v × w |
|---|---|---|
| Result | a number | a vector |
| Uses cos or sin? | \|v\|\|w\| cos θ | \|v\|\|w\| sin θ (magnitude) |
| Zero means | perpendicular | parallel |
| Order | v · w = w · v | v × w = −w × v |
| Main use | angles, perpendicular tests | normals, areas |

## Methods

**Compute and check**

1. Work out each component carefully, especially the second.
2. Check that the result has zero scalar product with both vectors.

**Area of a triangle from three points**

1. Form two vectors from one vertex: AB and AC.
2. Compute AB × AC and its magnitude.
3. Halve it.

**Unit vector perpendicular to a plane through A, B, C**

1. n = AB × AC.
2. Divide by |n|. The negative is also valid.

**Unknown from an area**

1. Write the vector product in terms of the unknown.
2. Set ½|AB × AC| (or |v × w|) equal to the given area; square both sides and solve.

**Sine of an angle**

sin θ = |v × w|/(|v||w|); use the sign of v · w to decide whether θ is acute or obtuse.

## Worked reminders

- (1, 0, 2) × (0, 1, 3) = (0·3 − 2·1, 2·0 − 1·3, 1·1 − 0·0) = (−2, −3, 1).
- (0, 1, 0) × (0, 0, 1) = (1, 0, 0), that is j × k = i.
- (1, 2, 2) × (2, −1, 2) = (6, 2, −5); triangle area with these sides = √65/2.
- Parallel test: (4, −2, 6) × (−2, 1, −3) = 0.
- If |v| = 2, |w| = 5 and θ = π/6, then |v × w| = 10 × 1/2 = 5.
- (a − b) × b = a × b − b × b = a × b.

## Exam traps

- **Second component sign.** v₃w₁ − v₁w₃.
- **Order.** b × a = −(a × b); the area is the same but the direction reverses.
- **Triangle ½.** Parallelogram area is |v × w|; triangle is half.
- **Vector vs number.** Areas are magnitudes; v × w itself is a vector.
- **Sine is ambiguous.** sin θ = sin(π − θ); use the scalar product for the angle.
- **Common vertex.** Use AB and AC (both from A), not position vectors OB and OC.
- **Check step.** A non-zero scalar product with either original vector means an arithmetic slip.

## Self-test

1. Find (1, 2, 3) × (4, 5, 6).
2. Write down k × j.
3. Given a × b = (2, −1, 4), write down b × a.
4. Given a × b = (2, −1, 4), write down (3a) × b.
5. Find the area of the parallelogram with sides (1, 1, 0) and (0, 1, 1).
6. Find the area of triangle ABC with A(0, 0, 0), B(2, 0, 0), C(0, 3, 0).
7. Show that (1, −2, 3) and (−2, 4, −6) are parallel using a vector product.
8. Find a unit vector perpendicular to (1, 0, 0) and (0, 1, 1).
9. Simplify a × (a + b).
10. Given |a| = 4, |b| = 3 and a · b = 6, find |a × b|.
11. Is |a × b| ever greater than |a||b|? Explain.
12. Find the area of triangle PQR, P(1, 0, 0), Q(0, 1, 0), R(0, 0, 1).

### Answers

1. (12 − 15, 12 − 6, 5 − 8) = (−3, 6, −3).
2. −i.
3. (−2, 1, −4).
4. (6, −3, 12).
5. (1, −1, 1), so √3.
6. AB × AC = (0, 0, 6), so the area is 3.
7. (12 − 12, −6 + 6, 4 − 4) = (0, 0, 0), so parallel.
8. (1, 0, 0) × (0, 1, 1) = (0, −1, 1), so (0, −1, 1)/√2.
9. a × a + a × b = a × b.
10. cos θ = 6/12 = 1/2, sin θ = √3/2, so |a × b| = 12 × √3/2 = 6√3.
11. No: |a × b| = |a||b| sin θ and sin θ ≤ 1.
12. PQ = (−1, 1, 0), PR = (−1, 0, 1); PQ × PR = (1, 1, 1); area √3/2.

## Links

Return to the [3.16 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-16/) for the proofs, and see the whole strand in the [HL vectors revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/).
