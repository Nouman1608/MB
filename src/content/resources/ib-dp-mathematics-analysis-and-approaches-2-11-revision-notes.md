---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.11 Transformations of graphs -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-11"
description: "Revision notes for IB Maths AA 2.11 transformations of graphs: point mappings, invariant points, order rules, key terms, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 2.11, transformations of graphs**, of IB DP Mathematics: Analysis and Approaches (first assessment 2021). It is SL content, examined at SL and HL. For full explanations and worked examples, use the [transformations study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-11/); for exam-style questions, the [transformations practice set](/resources/ib-dp-mathematics-analysis-and-approaches-2-11-practice/).

## Condensed recall

**The four building blocks (syllabus wording)**

- Translations: y = f(x) + b and y = f(x − a).
- Reflections in both axes: y = −f(x) and y = f(−x).
- Vertical stretch with scale factor p: y = p f(x).
- Horizontal stretch with scale factor 1/q: y = f(qx).
- Composite transformations: any sequence of these.

**Outside acts on y, inside acts on x**

- Outside changes (+b, ×p, a minus sign in front) do what they look like to the y-coordinate.
- Inside changes do the reverse to the x-coordinate: f(x − a) adds a to every x; f(qx) divides every x by q.
- Reason: f(x − 3) reaches the output f(5) only when x = 8, three units later.

**Point images in one line each**

- f(x) + b: (x, y) → (x, y + b)
- f(x − a): (x, y) → (x + a, y)
- −f(x): (x, y) → (x, −y)
- f(−x): (x, y) → (−x, y)
- p f(x): (x, y) → (x, py)
- f(qx): (x, y) → (x/q, y)
- Composite y = p f(x − a) + b: (x, y) → (x + a, py + b)

**Invariant points (points that stay put)**

- Reflection in the x-axis and any vertical stretch: points on the x-axis, so x-intercepts do not move.
- Reflection in the y-axis and any horizontal stretch: points on the y-axis, so the y-intercept does not move.
- A translation leaves no point fixed.

**Order rules**

- Within the vertical direction: y = p f(x) + b is stretch first, then translate. Translating first gives p f(x) + pb.
- A horizontal step and a vertical step can be done in either order.
- Reflection in the x-axis and a vertical stretch can be done in either order (both multiply y).
- Building from words: replace the whole current expression at each step.

**Domain, range and features**

- Domain changes only under horizontal transformations; range changes only under vertical ones.
- Under y = −f(x) the range reverses: if a ≤ f(x) ≤ b, then −b ≤ −f(x) ≤ −a.
- Maxima become minima under a reflection in the x-axis; under y = f(−x) they stay maxima but move.
- Horizontal asymptote y = k → y = pk + b under y = p f(x) + b.
- Vertical asymptote x = c → x = c + a under f(x − a), and x = c/q under f(qx).
- Recalculate intercepts from the new equation: the y-intercept of f(x − 2) is f(−2).

**SL boundary**

- Forms such as f(2x − 6) that combine a horizontal stretch and translation in one bracket are HL (section 2.16).

## Key terms

| Term | Meaning in 2.11 |
|---|---|
| Image | The point or graph after a transformation |
| Translation | Every point moves by the same vector (a, b) |
| Reflection | Mirror image in the x-axis or the y-axis |
| Vertical stretch, scale factor p | Each y-coordinate is multiplied by p; x unchanged |
| Horizontal stretch, scale factor 1/q | Each x-coordinate is multiplied by 1/q; y unchanged |
| Invariant point | A point that maps to itself |
| Composite transformation | Two or more transformations applied in sequence |
| Scale factor | The multiplier on the coordinate being stretched |

## Exam traps

- y = f(x + 2) moves the graph 2 units **left**.
- y = f(4x) is a horizontal stretch with scale factor **1/4**, not 4.
- "Stretch by 3" scores nothing without "vertical" or "horizontal".
- A translation must be given as a vector or with both direction and distance.
- Confusing y = 2f(x) − 6 with y = 2(f(x) − 6) = 2f(x) − 12. Expand to check that your stated order gives the equation in the question.
- Using f(0) as the y-intercept of y = f(x − a).
- Forgetting to reverse the range after a reflection in the x-axis.
- Moving a horizontal asymptote under a horizontal stretch. It does not move.

## Self-test

1. Describe the transformation from y = f(x) to y = f(x + 5).
2. The point (4, −2) lies on y = f(x). Write down its image on y = f(2x).
3. The point (4, −2) lies on y = f(x). Write down its image on y = 3 − f(x).
4. Which points are invariant under y = f(−x)?
5. y = f(x) has range 1 ≤ f(x) ≤ 6. Find the range of y = −2f(x).
6. y = f(x) has domain 0 ≤ x ≤ 8. Find the domain of y = f(x/2).
7. y = f(x) has horizontal asymptote y = 4. Find the asymptote of y = ½f(x) − 1.
8. y = f(x) has vertical asymptote x = 6. Find the asymptote of y = f(3x).
9. f(x) = x³. Write down g(x) after a translation 2 units right then a vertical stretch with scale factor 4.
10. Describe the transformations from y = x² to y = 3x² + 2, in a valid order.
11. Is y = f(−x) the same graph as y = −f(x) when f(x) = x³? Explain.
12. The minimum of y = f(x) is at (2, −3). Find the image of this point on y = −f(x − 1) and state its nature.

### Answers

1. Translation 5 units left, by the vector (−5, 0).
2. (2, −2): halve the x-coordinate.
3. (4, 5): y → 3 − y, so −2 → 5.
4. Points on the y-axis (x = 0).
5. y-values multiply by −2 and the ends swap: −12 ≤ y ≤ −2.
6. x-values double: 0 ≤ x ≤ 16.
7. y = ½(4) − 1 = 1, so y = 1.
8. x = 6/3, so x = 2.
9. g(x) = 4(x − 2)³.
10. Vertical stretch with scale factor 3, then translation by the vector (0, 2). Stretching first matters: translating first gives 3x² + 6.
11. Yes. (−x)³ = −x³, so f(−x) = −f(x) for this function; the two reflections give the same graph.
12. (3, 3); the reflection in the x-axis makes it a maximum.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.11.
