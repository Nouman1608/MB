---
title: "IB DP Mathematics: Applications and Interpretation -- Perpendicular bisectors and Voronoi diagrams Revision Notes"
seoTitle: "IB Maths AI Voronoi Diagrams Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Perpendicular bisectors and Voronoi diagrams"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 3.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-6"
description: "Condensed IB Maths AI revision notes on perpendicular bisectors and Voronoi diagrams: key methods, must-know terms and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, read the [perpendicular bisectors and Voronoi diagrams study guide](/resources/ib-dp-mathematics-ai-voronoi-perpendicular-bisectors/) first.

These revision notes cover perpendicular bisectors and Voronoi diagrams for IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.5 and 3.6, which are common to SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Test yourself afterwards with the [practice questions](/resources/ib-dp-mathematics-ai-voronoi-perpendicular-bisectors-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show the rest of the course.

## What the guide expects

- **3.5:** equations of perpendicular bisectors, given either two points, or the equation of a line segment and its midpoint.
- **3.6:** Voronoi diagrams (sites, vertices, edges, cells); adding a site to an existing diagram; nearest neighbour interpolation; applications of the "toxic waste dump" problem.
- In examinations the coordinates of the sites are given, and you are not required to construct perpendicular bisectors.
- Typical tasks: the equation of a boundary, the site closest to a given point, the area of a region.
- In the toxic waste dump problem, the exam solution point is always at an intersection of three edges.

## Definitions

| Term | Definition |
|---|---|
| Perpendicular bisector of AB | The line through the midpoint of AB at right angles to AB. Every point on it is equidistant from A and B |
| Site | A given point that the diagram is built around |
| Cell | All points closer to one particular site than to any other. One cell per site |
| Edge | Boundary between two cells; part of the perpendicular bisector of their two sites |
| Vertex | Point where edges meet; where three edges meet it is equidistant from three sites |
| Nearest neighbour interpolation | Estimating a value at a point by the value at the nearest site |

## Formulas

| Result | Formula |
|---|---|
| Midpoint of (x₁, y₁) and (x₂, y₂) | ((x₁ + x₂)/2, (y₁ + y₂)/2) |
| Gradient | m = (y₂ − y₁)/(x₂ − x₁) |
| Perpendicular gradients | m₁ × m₂ = −1, so m⊥ = −1/m |
| Point-gradient form | y − y₁ = m(x − x₁) |
| Gradient-intercept form | y = mx + c |
| General form | ax + by + d = 0 |
| Distance between two points | d = √((x₂ − x₁)² + (y₂ − y₁)²) |

## Method in steps

### Perpendicular bisector from two points

```
1. midpoint M
2. gradient of AB
3. perpendicular gradient = −1/m
4. y − yM = m⊥(x − xM), then rearrange
```

Horizontal AB → vertical bisector x = xM. Vertical AB → horizontal bisector y = yM.

### Perpendicular bisector from a segment's equation and midpoint

```
1. read m from the segment's equation
2. m⊥ = −1/m
3. y − yM = m⊥(x − xM)
```

**Worked reminder.** A segment lies on 3x + y = 11 with midpoint (2, 5). Check: 3(2) + 5 = 11. The segment's gradient is −3, so m⊥ = 1/3. Then y − 5 = (1/3)(x − 2), which gives **x − 3y + 13 = 0**.

### Finding a vertex

```
1. write the equations of two edges that meet there
2. solve them simultaneously (GDC)
3. check the point on the third edge
4. distance to any one of the three sites is the same
```

### Closest site to a point P

Either compute the distance from P to each nearby site and take the smallest, or substitute P into an edge equation and see which side it lies on, compared with each site.

### Area of a region

Split the cell into rectangles, triangles and trapezia. Area of a trapezium = (1/2)(a + b)h, where a and b are the parallel sides. Find corner points by solving an edge equation with the boundary (for example, put x = 0 or y = 10).

**Worked reminder.** Sites (1, 1) and (5, 3) share the edge y = −2x + 8 inside the field 0 ≤ x ≤ 8, 0 ≤ y ≤ 6. The edge meets y = 0 at (4, 0) and y = 6 at (1, 6). The cell next to the origin is a trapezium with parallel sides 4 (along y = 0) and 1 (along y = 6), and height 6:

```
area = (1/2)(4 + 1)(6) = 15 square units
other cell = 8 × 6 − 15 = 33 square units
```

**Worked reminder: edge test.** Sites F(1, 4) and G(7, 2) share the edge 3x − y = 9. For H(5, 5), 3(5) − 5 = 10 > 9. For G, 3(7) − 2 = 19 > 9. H and G give the same inequality, so H is in G's cell.

### Adding a site

```
1. find the cell containing the new site
2. bisector of new site and that cell's site → run it to the cell's edges
3. cross into the next cell, bisector with that site, repeat
4. stop when the new cell closes or reaches the boundary
5. delete old edges inside the new cell
```

### Nearest neighbour interpolation

Every point in a cell gets the value of its site. The estimate is constant in each cell and jumps at edges.

### Toxic waste dump

```
1. list the vertices
2. distance from each vertex to one of its three sites
3. choose the LARGEST distance
```

## Must-know distinctions

- **Edge vs perpendicular bisector.** An edge is only the part of a bisector that forms a boundary. It ends at vertices or at the region's boundary.
- **Gradient of the segment vs gradient of the bisector.** They multiply to −1. Only the bisector gradient goes in the answer.
- **Midpoint vs end point.** The bisector passes through the midpoint, never through A or B.
- **Cell vs site.** The site is a point. The cell is a region, and you can find its area.
- **Vertex distance vs any distance.** A vertex is equidistant from its three sites only. Another site will be further away.
- **Largest vs smallest.** The toxic waste dump goes at the vertex that is furthest from its nearest sites.
- **Exact vs 3 s.f.** Leave exact values such as 41/7 until the final line, then give 3 s.f. if the answer is not exact.

## Quick self-test

1. Find the perpendicular bisector of (1, −2) and (5, 6) in the form ax + by + d = 0.
2. Find the perpendicular bisector of (−3, 4) and (5, 4).
3. A segment lies on y = 4x − 3 with midpoint (1, 1). Find its perpendicular bisector.
4. Does (2, 9) lie on the perpendicular bisector of (0, 3) and (6, 5)? Justify.
5. Sites are at (0, 0), (6, 0) and (0, 8). Find the vertex of their Voronoi diagram and its distance from each site.
6. A Voronoi diagram has 7 sites. How many cells does it have?
7. Stations P(0, 0), Q(10, 0) and R(0, 10) record 12 mm, 18 mm and 15 mm of rain. Estimate the rainfall at (7, 4) by nearest neighbour interpolation.
8. Sites A(1, 5), B(5, 3), C(5, 5) and D(5, 1) give vertices (3, 4), for A, B and C, and (2, 2), for A, B and D. Which vertex solves the toxic waste dump problem?
9. A cell has corners (0, 0), (6, 0), (6, 4) and (0, 7). Find its area.
10. A new site is added. Which perpendicular bisector do you draw first?

### Answers

1. M = (3, 2), gradient 2, m⊥ = −1/2: y − 2 = −(1/2)(x − 3), so **x + 2y − 7 = 0**.
2. The segment is horizontal, so the bisector is vertical through (1, 4): **x = 1**.
3. m⊥ = −1/4: y − 1 = −(1/4)(x − 1), so **x + 4y − 5 = 0**.
4. The bisector is y = −3x + 13 (M = (3, 4), gradient 1/3). At x = 2, y = 7, not 9. Also the distances are √40 and √32. **No.**
5. **(3, 4)**, distance **5** from each site.
6. **7** cells, one per site.
7. Distances: 8.06, 5 and 9.22. Q is nearest, so **18 mm**.
8. (3, 4) is √5 = 2.24 from its sites; (2, 2) is √10 = 3.16. Choose **(2, 2)**.
9. Trapezium: (1/2)(4 + 7)(6) = **33** square units.
10. The bisector of the new site and **the site whose cell it lies in**.

## Where marks are usually lost

- Writing y − y₁ = m(x − x₁) with the gradient of AB instead of −1/m.
- Substituting an end point, not the midpoint, into the line equation.
- Giving the answer in the wrong form when a form is asked for, such as ax + by + d = 0 with integer coefficients.
- Using −1/m for a vertical or horizontal segment instead of writing x = … or y = … directly.
- Answering "closest site" with a site name but no distances or edge test to support it.
- In area questions, using the full bisector instead of the edge, which overstates the cell.
- Choosing the vertex nearest the sites in a toxic waste question, instead of the furthest.
- Measuring a vertex's distance to a site that does not meet at that vertex.
- Rounding a vertex early, then using the rounded coordinates for a distance, which loses the accuracy mark.
- Adding a site and leaving old edges inside the new cell.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 -- syllabus sections SL 3.5 and SL 3.6.
