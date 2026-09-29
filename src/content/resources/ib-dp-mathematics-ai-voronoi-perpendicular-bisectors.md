---
title: "IB DP Mathematics: Applications and Interpretation -- Perpendicular bisectors and Voronoi diagrams Study Guide"
seoTitle: "IB Maths AI Perpendicular Bisectors and Voronoi Diagrams"
resourceType: "study-guides"
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
description: "Study guide to perpendicular bisectors and Voronoi diagrams for IB DP Maths AI SL and HL (sections 3.5-3.6), with fully worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches perpendicular bisectors and Voronoi diagrams for IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.5 and 3.6, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-ai-voronoi-perpendicular-bisectors-revision-notes/) for quick recall and the [practice questions](/resources/ib-dp-mathematics-ai-voronoi-perpendicular-bisectors-practice/) to test yourself. The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits in the course, and the [geometry and trigonometry strand overview](/resources/ib-dp-mathematics-ai-geometry-trigonometry/) puts it in context.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 3.5 | Find the equation of a perpendicular bisector, given two points, or given the equation of a line segment and its midpoint | SL and HL |
| 3.6 | Use the terms site, vertex, edge and cell; add a site to an existing Voronoi diagram; use nearest neighbour interpolation; solve "toxic waste dump" problems | SL and HL |

The guide says that in examinations you are given the coordinates of the sites, and you are not required to construct perpendicular bisectors. Questions may ask you to find the equation of a boundary, identify the site closest to a given point, or calculate the area of a region.

## 3.5 Perpendicular bisectors

The perpendicular bisector of a line segment AB is the line that passes through the midpoint of AB at right angles to AB. Every point on it is the same distance from A as from B. That property is why it matters for Voronoi diagrams.

This builds on straight lines (SL 2.1). You need:

- gradient m = (y₂ − y₁)/(x₂ − x₁)
- midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
- perpendicular gradients: m₁ × m₂ = −1, so the perpendicular gradient is −1/m
- the three forms of a line: y = mx + c, ax + by + d = 0 and y − y₁ = m(x − x₁)

### Method: given two points

1. Find the midpoint M of AB.
2. Find the gradient of AB.
3. Take the negative reciprocal to get the perpendicular gradient.
4. Substitute M and that gradient into y − y₁ = m(x − x₁), then rearrange to the form asked for.

### Worked example 1

Find the perpendicular bisector of A(2, 1) and B(6, 7). Give your answer in the form ax + by + d = 0 with integer coefficients.

```
M = ((2 + 6)/2, (1 + 7)/2) = (4, 4)
gradient AB = (7 − 1)/(6 − 2) = 6/4 = 3/2
perpendicular gradient = −2/3
y − 4 = −(2/3)(x − 4)
3y − 12 = −2x + 8
2x + 3y − 20 = 0
```

Check: the point (1, 6) satisfies 2(1) + 3(6) − 20 = 0. Its distance from A is √(1² + 5²) = √26 and from B is √(5² + 1²) = √26. The distances are equal, as they should be.

### Method: given the line segment's equation and its midpoint

Here you are told the line that the segment lies on and its midpoint. You do not need the end points.

1. Read the gradient of the segment from its equation (rearrange to y = mx + c if needed).
2. Take the negative reciprocal.
3. Use the midpoint in y − y₁ = m(x − x₁).

### Worked example 2

A line segment lies on y = −3x + 10 and has midpoint (2, 4). Find its perpendicular bisector.

```
check: −3(2) + 10 = 4, so (2, 4) lies on the line
gradient of segment = −3, so perpendicular gradient = 1/3
y − 4 = (1/3)(x − 2)
y = (1/3)x + 10/3      or      x − 3y + 10 = 0
```

### Horizontal and vertical segments

If the segment is horizontal, the bisector is vertical, and the reverse. For (1, 3) and (1, 9) the segment is vertical, so the perpendicular bisector is the horizontal line through the midpoint (1, 6): **y = 6**. Do not try to use −1/m here, because the gradient of a vertical segment is undefined.

## 3.6 Voronoi diagrams

A Voronoi diagram splits a region into parts according to which of a set of points is nearest.

| Term | Meaning |
|---|---|
| Site | One of the given points (a clinic, a weather station, a mast) |
| Cell | The region of all points closer to one site than to any other site. There is one cell per site |
| Edge | A boundary between two neighbouring cells. It lies on the perpendicular bisector of those two sites |
| Vertex | A point where edges meet. At a vertex where three edges meet, the point is the same distance from three sites |

Each edge is only part of a perpendicular bisector. It stops where it meets another edge or the boundary of the region.

### Worked example 3: finding edges and a vertex

Three health clinics are at A(2, 2), B(10, 2) and C(3, 9) in a district 0 ≤ x ≤ 12, 0 ≤ y ≤ 10, with units in km.

**Edge between A and B.** A and B have the same y-coordinate, so the bisector is vertical through the midpoint (6, 2): **x = 6**.

**Edge between B and C.**

```
M = ((10 + 3)/2, (2 + 9)/2) = (6.5, 5.5)
gradient BC = (9 − 2)/(3 − 10) = −1, so perpendicular gradient = 1
y − 5.5 = 1(x − 6.5)  →  y = x − 1
```

**Edge between A and C.** The midpoint is (2.5, 5.5), gradient AC = 7, perpendicular gradient −1/7, which gives **y = −(1/7)x + 41/7**, or x + 7y = 41.

**The vertex.** Solve x = 6 with y = x − 1, giving **(6, 5)**. Check it on the third edge: 6 + 7(5) = 41. So all three edges meet at (6, 5), and it is 5 km from each clinic (for example, √(4² + 3²) = 5 from A).

The cells are: A's cell has corners (0, 0), (6, 0), (6, 5) and (0, 41/7); B's cell lies to the right of x = 6 and below y = x − 1; C's cell is the rest.

### Identifying the closest site

To find which clinic is nearest to P(9, 7), either compare distances or test which side of an edge P lies.

```
PA = √(7² + 5²) = √74 = 8.60 km
PB = √(1² + 5²) = √26 = 5.10 km
PC = √(6² + 2²) = √40 = 6.32 km
```

P is closest to **B**, so P lies in B's cell. As a check, on the edge y = x − 1 the value at x = 9 is 8, and P has y = 7 < 8, which is the same side as B.

### Area of a region

Cells inside a rectangular region are usually triangles, trapezia or shapes you can split into them.

A's cell has vertical sides of length 41/7 (at x = 0) and 5 (at x = 6), and width 6:

```
area = (1/2)(41/7 + 5)(6) = 228/7 = 32.6 km² (3 s.f.)
```

### Adding a site to an existing diagram

The guide lists adding a site to an existing Voronoi diagram. Work through the cells one at a time:

1. Find the cell the new site lies in (the nearest existing site).
2. Draw the perpendicular bisector of the new site and that cell's site until it meets an edge of the cell.
3. Cross that edge into the neighbouring cell. Draw the bisector of the new site and that cell's site.
4. Repeat until the new cell is closed or you reach the boundary of the region.
5. Remove the old edges that are now inside the new cell.

### Worked example 4

A fourth clinic D(2, 6) is added to example 3.

**Step 1.** DA = 4, DB = √80 = 8.94 and DC = √10 = 3.16, so D lies in C's cell.

**Step 2.** Bisector of C and D: midpoint (2.5, 7.5), gradient CD = 3, perpendicular gradient −1/3, so **y = −(1/3)x + 25/3**. Follow it from the left boundary (0, 25/3) until it meets edge BC, y = x − 1: solving gives (7, 6).

**Step 3.** Cross into B's cell. Bisector of B and D: midpoint (6, 4), gradient BD = −1/2, perpendicular gradient 2, so **y = 2x − 8**. It passes through (7, 6) and meets edge AB (x = 6) at (6, 4).

**Step 4.** Cross into A's cell. Bisector of A and D is **y = 4**. Follow it to the left boundary at (0, 4). The new cell is closed.

**Step 5.** Remove the old edge x + 7y = 41 completely, the part of x = 6 above y = 4, and the part of y = x − 1 between (6, 5) and (7, 6). The old vertex (6, 5) disappears.

D's cell has corners (0, 4), (6, 4), (7, 6) and (0, 25/3). A's cell shrinks to the rectangle 6 × 4 = 24 km².

## Nearest neighbour interpolation

If each site has a measured value (rainfall, temperature, pollution level), nearest neighbour interpolation estimates the value at any point as the value at the nearest site. In a Voronoi diagram, every point in a cell is given the same value as its site.

For example, if clinic B recorded 38 mm of rain, the estimate for P(9, 7) is **38 mm**, because P is in B's cell. The estimate jumps suddenly as you cross an edge, which is its main limitation.

## The "toxic waste dump" problem

The aim is to place something unwanted (a waste site, a noisy depot) as far as possible from the nearest site. Each vertex is equally far from three sites, so vertices are natural candidates. The guide says that in examinations the solution point will always be at an intersection of three edges.

Method:

1. List the vertices of the diagram.
2. For each vertex, find its distance to one of the three sites that meet there.
3. Choose the vertex with the **largest** distance.

After worked example 4 the vertices are (6, 4), where cells A, B and D meet, and (7, 6), where cells B, C and D meet.

```
(6, 4) to A(2, 2): √(4² + 2²) = √20 = 4.47 km
(7, 6) to C(3, 9): √(4² + 3²) = √25 = 5 km
```

The waste site goes at **(7, 6)**, 5 km from the nearest clinics.

## Using your GDC

The guide lists technology as required for every AI paper, at SL and HL, so use your GDC to:

- solve two edge equations simultaneously to find a vertex, especially when the coordinates are not whole numbers
- compute distances quickly and store unrounded values
- check a gradient or midpoint

Keep full calculator values until the final answer. Round a vertex to 3 significant figures only at the end, and find distances from the unrounded vertex.

## Common errors

- Using the gradient of AB, not its negative reciprocal, for the bisector.
- Using an end point instead of the midpoint in y − y₁ = m(x − x₁).
- Treating a whole bisector as an edge. Edges stop at vertices and at the boundary.
- Forgetting that a vertical segment gives a horizontal bisector.
- In the toxic waste problem, choosing the vertex with the smallest distance. You want the largest.
- Finding the distance from a vertex to a site that does not meet at that vertex.
- When adding a site, forgetting to delete old edges inside the new cell.
- Rounding a vertex to 3 s.f. and then using the rounded value for a distance.

## Next steps

Condense the methods with the [revision notes](/resources/ib-dp-mathematics-ai-voronoi-perpendicular-bisectors-revision-notes/), then try the [practice questions](/resources/ib-dp-mathematics-ai-voronoi-perpendicular-bisectors-practice/), which have mark-by-mark answers. For the whole course, see the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and the [exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 -- syllabus sections SL 3.5 and SL 3.6.
