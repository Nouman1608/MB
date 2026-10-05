---
resourceId: "mb-ap-calcab-8.8-study-guide"
title: "Volumes with Cross Sections: Triangles and Semicircles: Study Guide (Calculus AB 8.8)"
description: "Learn the area formulas for triangular and semicircular cross sections in terms of the side s, and use them in V = ∫ A dx to find volumes of solids built on a base region."
course: "calculus-ab"
unit: 8
topics: ["8.8"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Volumes with square and rectangular cross sections, V = ∫ A(x) dx (Topic 8.7)"
  - "Area between curves with vertical and horizontal strips (Topics 8.4 to 8.6)"
  - "Pythagoras' theorem; areas of a triangle and a circle"
prerequisiteResources: ["mb-ap-calcab-8.7-study-guide"]
learningObjectives:
  - "Derive the area of an equilateral triangle, an isosceles right triangle (leg or hypotenuse in the base) and a semicircle in terms of the side s that lies in the base"
  - "Write and evaluate volume integrals for solids with triangular and semicircular cross sections, perpendicular to the x-axis or the y-axis"
  - "Find volumes for other cross sections described by a shape or by a given area function"
  - "Use a calculator to evaluate a cross-section volume when the limits or the integral need one"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 use no calculator. Worked example 3 is calculator-active: store the intersection value unrounded and give the volume to three decimal places."
related: ["mb-ap-calcab-8.8-revision-notes", "mb-ap-calcab-8.8-practice", "mb-ap-calcab-8.8-checklist"]
next: "mb-ap-calcab-8.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The method is the same as Topic 8.7: V = ∫ A dx (or dy). Only the area formula changes."
  - "Equilateral triangle on side s: A = (√3/4)s². Isosceles right triangle, leg in base: A = s²/2. Hypotenuse in base: A = s²/4."
  - "Semicircle with its diameter in the base: radius s/2, so A = (1/2)π(s/2)² = (π/8)s²."
  - "Every formula is a constant times s², so the constant comes out of the integral: V = c ∫ s² dx."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.8 is common content, so the same page serves AB and BC students."
  - question: "Do I need to memorise the area formulas?"
    answer: "It helps, but you should also be able to derive each one in a line from the triangle and circle area formulas. Deriving it on paper also shows the reader where your constant came from."
  - question: "What does 'leg in the base' versus 'hypotenuse in the base' change?"
    answer: "Only the area. With a leg of length s in the base, A = s²/2. With the hypotenuse of length s in the base, each leg is s/√2, so A = s²/4: half as much."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

Integrals are written in a compact form: **∫ (a to b) A(x) dx** means the definite integral of A(x) from x = a to x = b. **s** always means the length of the side of the cross section that lies in the base: top − bottom for slices perpendicular to the x-axis, right − left (in y) for slices perpendicular to the y-axis.

## Same integral, new shapes

Topic 8.7 built a solid on a base region R and sliced it into thin slabs. A slab at x has volume about A(x) Δx, and adding them gives

**V = ∫ (a to b) A(x) dx**

Nothing about that argument depended on the slice being a square. If the slices are triangles or semicircles, the method is the same. You only need the area of one slice in terms of s.

## The area formulas, derived

Each shape below stands on a segment of length s in the base.

**Equilateral triangle, side s.** The height splits the base into two halves of s/2. By Pythagoras, height = √(s² − (s/2)²) = √(3s²/4) = (√3/2)s. So

**A = (1/2) × s × (√3/2)s = (√3/4)s²**

**Isosceles right triangle with a leg in the base.** Both legs have length s and meet at the right angle, so the other leg stands straight up. A = (1/2) × s × s = **s²/2**.

**Isosceles right triangle with the hypotenuse in the base.** The hypotenuse is s, so each leg is s/√2. A = (1/2)(s/√2)² = **s²/4**. Another way: the height to the hypotenuse is s/2, and (1/2) × s × (s/2) = s²/4.

**Semicircle with its diameter in the base.** The radius is s/2. A = (1/2)π(s/2)² = **(π/8)s²**. Note s/2, not s: the side in the base is the diameter.

**Other shapes.** The same idea works for any shape you can find the area of.
- A triangle with base s and a stated height h: A = (1/2)sh.
- A full circle whose diameter spans the base: A = π(s/2)² = (π/4)s².
- A slice whose area is simply given as a function A(x): integrate it directly.

| Cross section on side s | Area A | Constant c in A = cs² |
|---|---|---|
| Square (Topic 8.7) | s² | 1 |
| Equilateral triangle | (√3/4)s² | √3/4 ≈ 0.433 |
| Isosceles right triangle, leg in base | s²/2 | 1/2 |
| Isosceles right triangle, hypotenuse in base | s²/4 | 1/4 |
| Semicircle, diameter in base | (π/8)s² | π/8 ≈ 0.393 |
| Circle, diameter in base | (π/4)s² | π/4 |

Because A = c s² every time, **V = c ∫ s² dx**. Find ∫ s² dx once and you can get the volume for any of these shapes by multiplying by the right constant.

<figure>
<svg viewBox="0 0 540 240" role="img" aria-labelledby="shapes88-title shapes88-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="shapes88-title">Four cross-section shapes standing on a side of length s</title>
<desc id="shapes88-desc">Four panels, each viewed face on, with the same base segment of length s drawn as a thick line. Panel 1: an equilateral triangle on the segment, height root 3 over 2 times s, area root 3 over 4 times s squared. Panel 2: an isosceles right triangle with one leg on the segment and the other leg vertical, height s, area s squared over 2. Panel 3: an isosceles right triangle with its hypotenuse on the segment, height s over 2, area s squared over 4. Panel 4: a semicircle with its diameter on the segment, radius s over 2, area pi over 8 times s squared.</desc>
<rect x="0" y="0" width="540" height="240" fill="#ffffff"/>
<g fill="#dfe7f3" stroke="#1d2b44" stroke-width="2">
<polygon points="20,170 120,170 70,83"/>
<polygon points="155,170 255,170 155,70"/>
<polygon points="290,170 390,170 340,120"/>
<path d="M 425,170 A 50 50 0 0 1 525,170 Z"/>
</g>
<g stroke="#1d2b44" stroke-width="4">
<line x1="20" y1="170" x2="120" y2="170"/><line x1="155" y1="170" x2="255" y2="170"/><line x1="290" y1="170" x2="390" y2="170"/><line x1="425" y1="170" x2="525" y2="170"/>
</g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3">
<line x1="70" y1="170" x2="70" y2="83"/><line x1="340" y1="170" x2="340" y2="120"/><line x1="475" y1="170" x2="510" y2="135"/>
</g>
<polyline points="155,160 165,160 165,170" fill="none" stroke="#1d2b44" stroke-width="1"/>
<polyline points="333,127 340,134 347,127" fill="none" stroke="#1d2b44" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="186">s</text><text x="205" y="186">s</text><text x="340" y="186">s</text><text x="475" y="186">s</text>
<text x="70" y="206">equilateral</text><text x="205" y="206">right, leg in base</text><text x="340" y="206">right, hypotenuse</text><text x="475" y="206">semicircle</text>
<text x="70" y="226">A = (√3/4)s²</text><text x="205" y="226">A = s²/2</text><text x="340" y="226">A = s²/4</text><text x="475" y="226">A = (π/8)s²</text>
</g>
<g font-size="11" fill="#1d2b44">
<text x="74" y="130">(√3/2)s</text><text x="140" y="125" text-anchor="end">s</text><text x="346" y="150">s/2</text><text x="496" y="148">s/2</text>
</g>
</svg>
<figcaption>Figure 1. Each slice seen face on. The thick line is the side of length s that lies in the base; the dashed line is the height or radius used in the area. A small square marks each right angle. The semicircle's radius is s/2 because the side in the base is its diameter.</figcaption>
</figure>

## The method, step by step

1. **Sketch the base** and mark the direction of the slices.
2. **Choose the variable.** Perpendicular to the x-axis: x and dx. Perpendicular to the y-axis: y and dy.
3. **Find the limits** from the edges of the base.
4. **Find s**: top − bottom, or right − left written in y. Test a point to get the order right.
5. **Read the shape carefully.** Which part of the shape lies in the base: a side, a leg, the hypotenuse or the diameter? Write A in terms of s, and show where the constant comes from.
6. **Write the integral** in full, take the constant outside, evaluate, and give **cubic units**.

## Worked example 1: equilateral triangles across x (no calculator)

**Question.** The base of a solid is the region enclosed by y = x² and y = 4. Cross sections perpendicular to the x-axis are equilateral triangles. Find the volume.

1. **Limits.** x² = 4 gives x = −2 or x = 2.
2. **Side.** The line y = 4 is on top (at x = 0, 4 > 0). s(x) = 4 − x².
3. **Area.** A(x) = (√3/4)(4 − x²)².
4. **Integral.**
   **V = (√3/4) ∫ (−2 to 2) (4 − x²)² dx = (√3/4) ∫ (−2 to 2) (16 − 8x² + x⁴) dx**
5. **Evaluate.** The antiderivative is 16x − 8x³/3 + x⁵/5. The integrand is even, so the integral is 2 × [value at x = 2] = 2 × (32 − 64/3 + 32/5) = 2 × 256/15 = 512/15.
6. **Multiply** by √3/4: V = (√3/4)(512/15) = 128√3/15.

**Answer.** V = **128√3/15 cubic units** (about 14.780).

**Check.** If the slices were squares, the volume would be 512/15 ≈ 34.1. Equilateral triangles cover about 0.433 of a square on the same side, and 0.433 × 34.1 ≈ 14.8. That matches.

## Worked example 2: semicircles across y (no calculator)

**Question.** The base of a solid is the region bounded by y = √x, the y-axis and the line y = 2. Cross sections perpendicular to the y-axis are semicircles with their diameters in the base. Find the volume.

1. **Direction.** Slices perpendicular to the y-axis: work in y with dy.
2. **Limits.** The region runs from y = 0 up to y = 2.
3. **Side.** At height y, a horizontal segment starts on the y-axis, x = 0, and ends on the curve. Rewrite y = √x as x = y². So s(y) = y² − 0 = y².
4. **Area.** The diameter is y², so the radius is y²/2. A(y) = (π/8)(y²)² = (π/8)y⁴.
5. **Integral and value.**
   **V = (π/8) ∫ (0 to 2) y⁴ dy = (π/8)[y⁵/5] from 0 to 2 = (π/8)(32/5) = 4π/5**

**Answer.** V = **4π/5 cubic units** (about 2.513).

**Typical error.** Using s as the radius gives (π/2)(32/5) = 16π/5, four times too big. The side in the base is the diameter.

## Worked example 3: a calculator-active volume

**Question.** R is the region enclosed by y = cos x and y = x². R is the base of a solid whose cross sections perpendicular to the x-axis are isosceles right triangles with the hypotenuse in R. Find the volume. (Calculator allowed.)

1. **Limits.** cos x = x² needs a calculator. By symmetry the solutions are x = −C and x = C, with C ≈ 0.824. Store C.
2. **Top curve.** At x = 0, cos 0 = 1 and 0² = 0, so cos x is on top. s(x) = cos x − x².
3. **Area.** Hypotenuse in the base: A(x) = s²/4 = (cos x − x²)²/4.
4. **Integral.** Write it first:
   **V = ∫ (−C to C) (cos x − x²)²/4 dx**
5. **Evaluate** with stored C: **V ≈ 0.219 cubic units**.

**Sense check.** The widest slice is at x = 0, with s = 1 and A = 1/4. The base is about 1.648 wide, so the volume must be less than (1/4)(1.648) ≈ 0.412. It is. With the leg in the base instead, the answer would double, to about 0.437.

## Other shapes and given areas

**Circles across the base.** Suppose the base is the triangle under y = x for 0 ≤ x ≤ 2, and each slice perpendicular to the x-axis is a full circle whose diameter spans the base (like a horn or funnel). Then A(x) = (π/4)x², and V = (π/4) ∫ (0 to 2) x² dx = (π/4)(8/3) = **2π/3**.

**An area function.** Sometimes you are told the cross-sectional area directly. If a solid lies between x = 0 and x = 3 and the slice at x has area A(x) = 12/(x + 1)², then V = ∫ (0 to 3) 12/(x + 1)² dx = 12[−1/(x + 1)] from 0 to 3 = 12(1 − 1/4) = **9 cubic units**. No base region is needed: the area function already carries all the information.

## Common misconceptions

- **Using s as the radius of a semicircle.** The side in the base is the diameter, so r = s/2 and A = (π/8)s², not (π/2)s².
- **Mixing up the two right-triangle cases.** Leg in the base: s²/2. Hypotenuse in the base: s²/4.
- **Wrong equilateral constant.** It is √3/4, not √3/2 (that is the height factor).
- **Squaring each boundary separately.** Find s = top − bottom first, then square: (f − g)², not f² − g².
- **Forgetting to square s.** Every area here is a constant times s².
- **Mixing variables.** Slices perpendicular to the y-axis need s in terms of y, y-limits and dy.
- **Confusing this with the disc method.** Here the semicircles stand on the base. In Topic 8.9 the circles come from spinning a region about an axis, and the radius is measured from that axis.

## Where this leads

Topic 8.9 uses the same V = ∫ A dx with circular slices of area πr², where the radius comes from revolving a region around an axis. Continue with [Volume with Disc Method: Revolving Around the x- or y-Axis](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-study-guide/), or look back at [Volumes with Cross Sections: Squares and Rectangles](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-checklist/) to consolidate.
