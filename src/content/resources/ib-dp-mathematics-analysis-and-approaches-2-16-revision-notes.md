---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.16 Graphs of |f(x)|, f(|x|) and related functions; modulus equations (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-16"
description: "HL revision notes for IB Maths AA 2.16: rules for |f(x)|, f(|x|), 1/f(x), f(ax + b) and [f(x)]², modulus equation methods, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.16 (AHL only)** of IB DP Mathematics: Analysis and Approaches, first assessment 2021: the graphs of y = |f(x)|, y = f(|x|), y = 1/f(x), y = f(ax + b) and y = [f(x)]², and modulus equations and inequalities. Worked sketches are in the [modulus and related graphs study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-16/); exam-style questions are in the [modulus and related graphs practice set](/resources/ib-dp-mathematics-analysis-and-approaches-2-16-practice/).

## Condensed recall

**y = |f(x)|**

- Parts on or above the x-axis stay; parts below are reflected in the x-axis.
- Range: y ≥ 0.
- Corners where f crosses the axis; minima there become points on the axis.
- A minimum (p, q) with q < 0 becomes a maximum (p, −q).

**y = f(|x|)**

- Keep the graph for x ≥ 0; delete x < 0; reflect the kept part in the y-axis.
- Always even, with the y-axis as a line of symmetry.
- Features at (p, q) with p > 0 also appear at (−p, q).
- Usually a corner at x = 0 unless the original graph has gradient 0 there.

**y = 1/f(x)**

- Zeros of f become vertical asymptotes.
- Vertical asymptotes of f become points where 1/f approaches 0.
- If |f| → ∞ as x → ±∞, then y = 0 is a horizontal asymptote.
- If f → k ≠ 0 as x → ±∞, then 1/f → 1/k.
- Maximum (p, q) becomes minimum (p, 1/q), and vice versa, for q ≠ 0.
- Same sign as f everywhere; points with y = ±1 do not move.

**y = f(ax + b)**

- (p, q) → ((p − b)/a, q).
- Translate b units left, then horizontal stretch with scale factor 1/a.
- Or: horizontal stretch with scale factor 1/a, then translate b/a units left.
- Heights and horizontal asymptotes do not change.

**y = [f(x)]²**

- Never negative; zeros of f become touching points.
- (p, q) → (p, q²); points with y = ±1 go to y = 1.
- Smooth at the zeros (no corners), unlike |f(x)|.

**Modulus equations**

- |A| = B: solve A = B and A = −B; keep only solutions with B ≥ 0.
- |A| = |B|: A = B or A = −B (no check needed), or square both sides.
- Graph check: count intersections of y = |A| and y = B.

**Modulus inequalities**

- |A| < k ⇔ −k < A < k (k > 0).
- |A| > k ⇔ A < −k or A > k.
- |A| < |B| ⇔ A² < B².
- |A| ≥ B with B a function: find valid boundary points, then use a sketch.

## Key terms

| Term | Meaning |
|---|---|
| Modulus \|x\| | Distance from 0: x if x ≥ 0, −x if x < 0 |
| \|f(x)\| | Output made non-negative; reflects negative parts |
| f(\|x\|) | Input made non-negative; mirrors the right half |
| Reciprocal graph | y = 1/f(x) |
| Corner | A point where the graph changes direction sharply |
| Invariant point | A point unchanged by the transformation |
| Rejected solution | A case solution that fails the original equation |

## Exam traps

- |f(x)| reflects in the x-axis; f(|x|) reflects in the y-axis. Do not swap them.
- f(|x|) uses the right half of the original graph, never the left.
- 1/f keeps the sign of f; a negative branch stays negative.
- f(2x + 6): the zero at x = 4 moves to (4 − 6)/2 = −1, not to 4/2 − 6.
- [f(x)]² touches the axis at zeros; drawing it crossing loses the shape mark.
- In |A| = B, forgetting to test B ≥ 0 keeps false solutions.
- Squaring is safe only when both sides are non-negative.

## Self-test

1. Describe how to obtain the graph of y = |f(x)| from y = f(x).
2. f(x) = x² − 9. Find the local maximum point of y = |f(x)|.
3. f(x) = (x − 1)(x − 5). Write down the zeros of y = f(|x|).
4. y = f(x) has a zero at x = 3 and a vertical asymptote x = −2. What happens to y = 1/f(x) at x = 3 and near x = −2?
5. y = f(x) has a maximum at (1, 5). Find the corresponding point on y = 1/f(x).
6. (6, −2) lies on y = f(x). Find its image on y = f(3x − 3).
7. (2, −3) lies on y = f(x). Find its image on y = [f(x)]².
8. Solve |x − 6| = 2x.
9. Solve |3x − 1| = |x + 5|.
10. Solve |x − 4| ≤ 3.
11. Solve |x² − 10| > 6.
12. Is y = |f(x)| always an even function?

### Answers

1. Keep the parts on or above the x-axis; reflect the parts below it in the x-axis.
2. The minimum (0, −9) reflects to the local maximum (0, 9).
3. x = −5, −1, 1, 5.
4. Vertical asymptote x = 3; 1/f(x) → 0 as x → −2.
5. A local minimum at (1, 1/5).
6. ((6 + 3)/3, −2) = (3, −2).
7. (2, 9).
8. x − 6 = 2x gives x = −6, rejected (2x < 0); −(x − 6) = 2x gives x = 2. So x = 2.
9. 3x − 1 = x + 5 gives x = 3; 3x − 1 = −(x + 5) gives x = −1.
10. −3 ≤ x − 4 ≤ 3, so 1 ≤ x ≤ 7.
11. x² − 10 < −6 or x² − 10 > 6: x² < 4 or x² > 16, so x < −4, −2 < x < 2 or x > 4.
12. No. y = f(|x|) is always even, but y = |f(x)| is even only in special cases, such as when f is odd or even; |x − 1| is not even.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.16.
