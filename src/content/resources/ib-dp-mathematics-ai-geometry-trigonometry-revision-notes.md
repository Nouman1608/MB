---
title: "IB DP Mathematics: Applications and Interpretation -- Geometry and Trigonometry Strand Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessment 2021"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
description: "Revision notes on the IB DP Maths AI geometry and trigonometry strand: sine and cosine rules, bearings, compound solids and the HL content, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-03
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
---

Geometry and trigonometry carries 18 hours at SL and jumps to 46 at HL -- the largest proportional
SL-to-HL increase of the five strands, as the
[full syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/)
sets out. The additional higher level content behind that jump is radians and circular functions,
matrix transformations, vectors and graph theory (AHL 3.7-3.16). These
notes work through the strand's applied, technology-driven approach, alongside the
[strand revision notes for Statistics and probability](/resources/ib-dp-mathematics-ai-statistics-probability-revision-notes/)
and the [subject overview](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/)
already on the site.

## What makes this strand distinctive in Applications and Interpretation

Unlike Analysis and Approaches' more abstract, proof-oriented treatment of the same strand name, this
course frames geometry and trigonometry around **real-world spatial problems** -- navigation, design,
and physical measurement contexts -- and every external paper allows technology throughout, so
questions routinely expect a graphical display calculator to be used, not avoided.

## Core content

- **Geometry** -- properties of shapes in two and three dimensions, surface area and volume of
  compound solids, and geometric reasoning applied to real contexts such as construction or design.
- **Trigonometry** -- right-angled and non-right-angled triangle trigonometry (sine rule, cosine rule,
  area of a triangle formula), angles of elevation and depression, and bearings -- the classic
  navigation-style application this course favours.
- **Radians and circular functions (HL only, AHL 3.7-3.8)** -- the definition of a radian, and the
  definitions of cosine and sine as circular functions.
- **Matrix transformations (HL only, AHL 3.9)** -- geometric transformations using matrices.
- **Vectors (HL only, AHL 3.10-3.13)** -- position and displacement vectors, the vector equation of a
  line, vector applications to kinematics (problems of motion) and intersection, and the scalar and
  vector products.
- **Graph theory (HL only, AHL 3.14-3.16)** -- graphs, vertices and edges; adjacency matrices and
  walks; tree and cycle algorithms.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--09-adjacency-walks.webp" width="900" height="970" alt="A five-vertex graph with its adjacency matrix M and M squared. The entry for A to D in M squared is 1, the walk A, C, D; the diagonal of M squared lists the vertex degrees 2, 2, 3, 2, 1." loading="lazy">
  <figcaption>Entry (i, j) of M to the power n counts the walks of length n from i to j.</figcaption>
</figure>


## Worked example: bearings and the cosine rule

A ship sails from port A on a bearing of $070°$ for 40 km to point B, then changes course to a bearing
of $150°$ and sails a further 25 km to point C. Find the distance AC.

This is a two-sides-and-the-included-angle (SAS) setup, so the cosine rule applies -- not the sine
rule, per the table above.

```
Back-bearing
at B:            the bearing from B back to A is the bearing A-to-B
                 (070 deg) plus 180 deg, i.e. 250 deg -- this is the
                 step most students lose marks on, since it must be
                 found before the interior angle can be
Angle at B:      interior angle ABC = back-bearing (250 deg) minus the
                 onward bearing (150 deg) = 100 deg
Apply cosine
rule:            AC^2 = AB^2 + BC^2 - 2(AB)(BC)cos(angle ABC)
Substitute:      AC^2 = 40^2 + 25^2 - 2(40)(25)cos(100 deg)
                 Because angle ABC = 100 deg is obtuse, cos(100 deg) is
                 NEGATIVE (approx -0.1736), which makes the whole
                 "-2(40)(25)cos(100 deg)" term ADDITIVE, not
                 subtractive:
                 AC^2 = 1600 + 625 - 2000(-0.1736) = 2225 + 347.3 = 2572.3
Solve:           AC = sqrt(2572.3) = 50.7 km (3 sig figs)
```

The mathematics (cosine rule) is routine once the angle is correctly identified -- the applied skill
this course specifically tests is converting bearings into an interior angle correctly, which is why
bearings problems reward a clear diagram before any calculation begins. A student who mis-derives the
angle as 80° instead of 100° (by forgetting the back-bearing step) would get AC = 43.3 km instead --
exactly the kind of error this worked example is designed to defuse.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--02-bearings-cosine-rule.webp" width="900" height="960" alt="A ship sails 40 km on 070 degrees then 25 km on 150 degrees. The back bearing at B is 250 degrees, so the interior angle at B is 100 degrees and the cosine rule gives AC = 50.7 km." loading="lazy">
  <figcaption>Convert the bearings to the interior angle at B before using the cosine rule.</figcaption>
</figure>


## Sine rule vs cosine rule -- which to use

| Given | Use |
|---|---|
| Two sides and the angle between them (SAS), or three sides (SSS) | Cosine rule |
| Two angles and a side, or two sides and a non-included angle | Sine rule |

Always sketch the triangle first and label knowns before choosing a rule -- misapplying the sine rule
to an SAS triangle is one of the most common technique errors in this strand.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--01-which-rule.webp" width="900" height="1066" alt="Four labelled triangles: SAS (sides 6 and 8, included angle 50 degrees) and SSS (5, 6, 7) use the cosine rule; AAS (40 and 65 degrees, side 6) and SSA (sides 8 and 6, angle 50 degrees) use the sine rule. Given parts are gold and the part to find is marked ?." loading="lazy">
  <figcaption>Two sides and the included angle, or three sides, need the cosine rule; otherwise use the sine rule.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--04-radian-definition.webp" width="900" height="900" alt="A semicircle whose arc is marked off in lengths equal to the radius. One radius length subtends 1 radian (about 57.3 degrees); three fit with 0.14 left over, so pi radians is 180 degrees." loading="lazy">
  <figcaption>One radian is the angle at which the arc length equals the radius.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--05-circular-functions.webp" width="900" height="760" alt="A unit circle point at angle π/3 with legs cos θ and sin θ, and the arc of length θ. A dashed line carries the height across to the graph of y = sin θ from 0 to 2π." loading="lazy">
  <figcaption>Sine is the height of the point on the unit circle plotted against the angle in radians.</figcaption>
</figure>


## Surface area and volume of compound solids

Because this course frames geometry around real-world design and construction contexts, questions
frequently present a **compound solid** — for example a cylinder topped with a hemisphere, or a
pyramid combined with a cuboid — rather than a single standard shape. The reliable method is to
split the compound solid into its recognisable component shapes, calculate each one's surface area
or volume separately using the standard formulae, then add or subtract components as the shape
requires (subtracting, for instance, where one solid has a cavity removed from another). Sketching
the solid and labelling which faces are "internal" (and therefore excluded from a surface area total)
before calculating is the single most effective way to avoid the most common error in this content:
including or excluding the wrong faces from a compound surface area.

## Exam traps

- Converting a bearing into an interior triangle angle incorrectly, especially when the bearing at the
  vertex is a "reverse" bearing (add or subtract 180°) rather than the forward one.
- Choosing the sine rule for an SAS or SSS triangle where the cosine rule is required.
- Forgetting that HL vector questions on lines and intersection require setting the parametric forms
  of two lines equal and solving simultaneously, not just comparing direction vectors alone.
- Not using the graphical display calculator to sanity-check an answer, when every paper in this
  course permits technology throughout.

## Quick revision checklist

- Practise converting a bearing into an interior triangle angle correctly before attempting the
  cosine or sine rule calculation.
- Memorise which rule (sine or cosine) applies to SAS, SSS, ASA and SSA triangle information.
- Split at least three different compound-solid shapes into components and practise both surface area
  and volume calculations for each.
- For HL vectors, practise setting two lines' parametric equations equal to test for intersection.

## Self-test

1. Which rule should be used when given two sides and the included angle?
2. What is the first practical step recommended for any bearings problem?
3. Which parts of this strand are HL-only?
4. How does this strand's framing differ from Analysis and Approaches' treatment of the same strand
   name?
5. Why is checking with a graphical display calculator especially relevant in this course?

**Answers:** 1. The cosine rule (SAS). 2. Sketching the triangle and clearly labelling the known
sides, angles and bearings before starting any calculation. 3. Radians and circular functions,
matrix transformations, vectors, and graph theory (AHL 3.7-3.16). 4. Applications and Interpretation frames geometry and trigonometry
around real-world spatial problems (navigation, design) with heavy technology use, whereas Analysis
and Approaches treats the same strand more abstractly with less emphasis on applied context. 5.
Because every external paper in this course allows technology throughout, so using the calculator to
verify an algebraic or trigonometric answer is both permitted and expected, unlike Analysis and
Approaches' no-technology Paper 1.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--03-compound-solid.webp" width="900" height="840" alt="A cylinder (r = 3, h = 8) with a hemisphere on top. Dome 18π, curved wall 48π and base 9π give surface area 75π (about 235.6); the joint circle is internal and not counted. Volume is 72π + 18π (about 282.7)." loading="lazy">
  <figcaption>Add the outer faces only; the joint between the solids is excluded.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--07-lines-meet-or-skew.webp" width="900" height="1116" alt="Lines l1 and l2 in 3D: x and y equations give s = 2, t = 1 and the z equation holds, so they meet at (5, 0, 5). Changing the z constant of l2 from 3 to 4 gives 5 not equal to 6, so the lines are skew." loading="lazy">
  <figcaption>Solve two coordinate equations, then check the third to decide between intersecting and skew lines.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-geometry-trigonometry--08-scalar-vector-product.webp" width="900" height="1050" alt="For a = (4,1) and b = (2,3): a·b = 11 = |a||b|cos θ with projection 2.67, and |a × b| = 10 = area of the parallelogram, with a × b perpendicular to both." loading="lazy">
  <figcaption>The scalar product measures the projection of one vector on another; the vector product gives parallelogram area.</figcaption>
</figure>

## Frequently asked questions

**How many teaching hours does geometry and trigonometry have in IB Maths AI?**
The strand carries 18 hours at SL and 46 hours at HL, the largest proportional SL-to-HL increase of the five strands in IB DP Maths AI.

**What geometry and trigonometry content is HL only in IB Maths AI?**
The HL-only content is radians and circular functions (AHL 3.7–3.8), matrix transformations (AHL 3.9), vectors (AHL 3.10–3.13) and graph theory (AHL 3.14–3.16).

**How do you find the interior angle from two bearings?**
Find the back bearing at the vertex by adding or subtracting 180° from the bearing you arrived on, then take the difference between the back bearing and the onward bearing. For a bearing of 070° into B and 150° out of B, the back bearing is 250°, so the angle at B is 100°.

**Why does a negative cosine increase the side in the cosine rule?**
When the included angle is obtuse its cosine is negative, so the −2ab cos C term becomes added rather than subtracted. The side opposite an obtuse angle is therefore longer than it would be for an acute angle.
