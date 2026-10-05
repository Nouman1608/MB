---
resourceId: "mb-ap-calcab-8.7-study-guide"
title: "Volumes with Cross Sections: Squares and Rectangles: Study Guide (Calculus AB 8.7)"
description: "Learn how slicing a solid into thin square or rectangular slabs turns its volume into a definite integral of a cross-sectional area, for slices across x or across y."
course: "calculus-ab"
unit: 8
topics: ["8.7"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definite integral as a limit of Riemann sums (Topic 6.3)"
  - "Evaluating definite integrals with antiderivatives and with a calculator (Topics 6.7 to 6.9)"
  - "Area between curves with vertical and horizontal strips (Topics 8.4 to 8.6)"
  - "Area of a square (side²) and of a rectangle (base × height)"
prerequisiteResources: ["mb-ap-calcab-8.6-study-guide"]
learningObjectives:
  - "Explain why the volume of a solid with known cross sections is the integral of the cross-sectional area A(x) or A(y)"
  - "Find the length of the segment that a cross section stands on, as top minus bottom or right minus left"
  - "Write A(x) or A(y) for square cross sections and for rectangular cross sections whose height is described in words"
  - "Choose dx or dy from the direction of the slices, set the limits, and evaluate the volume exactly or with a calculator"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 use no calculator. Worked example 3 is calculator-active: store the intersection value unrounded and give the volume to three decimal places."
related: ["mb-ap-calcab-8.7-revision-notes", "mb-ap-calcab-8.7-practice", "mb-ap-calcab-8.7-checklist"]
next: "mb-ap-calcab-8.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Volume = ∫ (a to b) A(x) dx, where A(x) is the area of the cross section at x. Add up thin slabs, each with volume about A(x) Δx."
  - "The cross section stands on a segment in the base. Its length s is top − bottom (slices across x) or right − left (slices across y)."
  - "Square cross sections: A = s². Rectangles: A = s × (height), where the question tells you the height."
  - "Slices perpendicular to the x-axis mean dx and x-limits; slices perpendicular to the y-axis mean dy and y-limits."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.7 is common content, so the same page serves AB and BC students."
  - question: "Do I need π for square cross sections?"
    answer: "No. π appears only when the cross sections are circles or parts of circles (Topic 8.8 and the disc method in Topic 8.9). A square slice has area s²."
  - question: "Can I square the top function and the bottom function separately?"
    answer: "No. Find the side first, s = top − bottom, then square the whole difference. (f − g)² is not f² − g²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (a to b) A(x) dx** means the definite integral of A(x) from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. **[s(x)]²** means the whole side length, squared. Keep the dx or dy: it tells the reader which way the slices go.

## The idea: a solid is a stack of thin slabs

Picture a loaf of bread cut into slices. Each slice is thin, and its face has some area. The volume of the loaf is roughly the sum of (face area × thickness) over all the slices. Thinner slices give a better total.

Calculus makes this exact. Suppose a solid lies between the planes x = a and x = b, and the slice through the solid at position x has area **A(x)**. Cut [a, b] into thin pieces of width Δx and pick a point xᵢ in each piece. The slab there is almost a prism, so

**volume of one slab ≈ A(xᵢ) Δx**

Adding the slabs gives a Riemann sum, Σ A(xᵢ) Δx. As Δx → 0, the sum becomes a definite integral:

> **Volume by cross sections.** If the cross section at x, perpendicular to the x-axis, has area A(x) for a ≤ x ≤ b, and A is continuous, then the volume of the solid is ∫ (a to b) A(x) dx.

**A quick check.** If every slice has the same area, the solid is a prism and the formula should give "area × length". For square slices of side 3 along a length of 5, the integral is ∫ (0 to 5) 9 dx = 45, which is exactly 3 × 3 × 5. The integral simply handles slices whose area changes.

## The base and the side length

In this topic, the solid sits on a flat **base**: a region R in the xy-plane, like the regions you found areas of in Topics 8.4 to 8.6. Each cross section stands up out of the base, at right angles to it, and rests on a segment that runs across R.

- **Slices perpendicular to the x-axis.** The segment at x runs vertically across R, from the bottom curve to the top curve. Its length is **s(x) = top − bottom**. This is the same height you used for an area strip in Topic 8.4.
- **Slices perpendicular to the y-axis.** The segment at y runs horizontally across R, from the left curve to the right curve. Its length is **s(y) = right − left**, written in terms of y, as in Topic 8.5.

Then the shape of the cross section turns the length into an area:

| Cross section | Its base edge | Area of the slice |
|---|---|---|
| Square | the segment, length s | A = s² |
| Rectangle with height h | the segment, length s | A = s × h |
| Rectangle whose height is k times its base | the segment, length s | A = s × ks = ks² |
| Rectangle with a fixed height h (a constant) | the segment, length s | A = hs, so V = h × (area of R) |

Read the question carefully for the height of a rectangle. "Height equal to half the length of its base" gives A = s × s/2 = s²/2. "Height 4" gives A = 4s. "Height equal to x" gives A = x × s(x).

<figure>
<svg viewBox="0 0 500 340" role="img" aria-labelledby="base87-title base87-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="base87-title">The base region between y = 2x and y = x², seen from above, with one segment across it</title>
<desc id="base87-desc">Top view of the xy-plane. The straight line y = 2x and the parabola y = x² meet at the origin and at (2, 4). The region between them is shaded; the line is the upper boundary and the parabola the lower boundary. A thin vertical strip at x = 0.5 runs from the parabola at height 0.25 up to the line at height 1. Its length is labelled s(x) = 2x − x², and its width Δx.</desc>
<rect x="0" y="0" width="500" height="340" fill="#ffffff"/>
<polygon points="80,300 380,60 365,83 350,106 335,127 320,146 305,165 290,182 275,199 260,214 245,227 230,240 215,251 200,262 185,271 170,278 155,285 140,290 125,295 110,298 95,299" fill="#dfe7f3"/>
<rect x="150" y="240" width="10" height="45" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="40" y1="300" x2="470" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="330" x2="80" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="50,298 65,299 80,300 95,299 110,298 125,295 140,290 155,285 170,278 185,271 200,262 215,251 230,240 245,227 260,214 275,199 290,182 305,165 320,146 335,127 350,106 365,83 380,60 395,35 410,10" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="50" y1="324" x2="410" y2="36" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="230" y1="296" x2="230" y2="304"/><line x1="380" y1="296" x2="380" y2="304"/>
<line x1="76" y1="240" x2="84" y2="240"/><line x1="76" y1="180" x2="84" y2="180"/><line x1="76" y1="120" x2="84" y2="120"/><line x1="76" y1="60" x2="84" y2="60"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="230" y="318">1</text><text x="380" y="318">2</text><text x="475" y="296">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="244">1</text><text x="72" y="184">2</text><text x="72" y="124">3</text><text x="72" y="64">4</text><text x="72" y="24">y</text>
</g>
<circle cx="380" cy="60" r="4" fill="#1d2b44"/>
<text x="390" y="64" font-size="12" fill="#1d2b44">(2, 4)</text>
<text x="200" y="120" font-size="13" fill="#1d2b44">top: y = 2x (dashed)</text>
<text x="300" y="250" font-size="13" fill="#1d2b44">bottom: y = x² (solid)</text>
<line x1="296" y1="242" x2="252" y2="224" stroke="#1d2b44" stroke-width="1"/>
<text x="100" y="200" font-size="12" fill="#1d2b44">s(x) = 2x − x²</text>
<line x1="140" y1="205" x2="154" y2="238" stroke="#1d2b44" stroke-width="1"/>
<text x="148" y="334" font-size="12" fill="#1d2b44">Δx</text>
</svg>
<figcaption>Figure 1. The base of the solid in Worked example 1, seen from above. At each x between 0 and 2, a segment of length s(x) = 2x − x² runs across the base. A square cross section stands on that segment, rising out of the page. Axes are unitless.</figcaption>
</figure>

<figure>
<svg viewBox="0 0 500 300" role="img" aria-labelledby="slab87-title slab87-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="slab87-title">One square slab standing on a segment of the base</title>
<desc id="slab87-desc">A drawing in perspective. A dashed segment lies flat in the base plane; this is the segment of length s across the base. A square stands upright on it, so its bottom edge is the segment and its vertical edges also have length s. The square has a small thickness Δx in the direction of the x-axis, making a thin slab. Labels: s along the bottom edge, s along a vertical edge, Δx along the thickness, and volume of slab approximately s squared times Δx.</desc>
<rect x="0" y="0" width="500" height="300" fill="#ffffff"/>
<line x1="150" y1="250" x2="340" y2="250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="345" y="254" font-size="12" fill="#1d2b44">x-direction</text>
<polygon points="200,250 310,190 310,65 200,125" fill="#dfe7f3" stroke="#1d2b44" stroke-width="2"/>
<polygon points="310,190 330,190 330,65 310,65" fill="#c3d0e6" stroke="#1d2b44" stroke-width="1.5"/>
<polygon points="200,125 310,65 330,65 220,125" fill="#eef2f9" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="200" y1="250" x2="310" y2="190" stroke="#1d2b44" stroke-width="3"/>
<line x1="170" y1="266" x2="340" y2="174" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 4"/>
<text x="120" y="282" font-size="12" fill="#1d2b44">segment across the base</text>
<text x="238" y="242" font-size="13" fill="#1d2b44">s</text>
<text x="180" y="190" font-size="13" fill="#1d2b44">s</text>
<line x1="192" y1="250" x2="192" y2="125" stroke="#1d2b44" stroke-width="1"/>
<text x="336" y="132" font-size="13" fill="#1d2b44">Δx</text>
<text x="300" y="40" font-size="13" fill="#1d2b44">slab volume ≈ s² × Δx</text>
</svg>
<figcaption>Figure 2. One slice of the solid. The square's bottom edge is the segment across the base, so both of its sides have length s. Its thickness is Δx. Adding up s² Δx over all the slabs and letting Δx → 0 gives ∫ [s(x)]² dx. Shading only separates the faces; the labels carry the meaning.</figcaption>
</figure>

## The method, step by step

1. **Sketch the base** and shade it. Mark the direction of the slices.
2. **Choose the variable.** Perpendicular to the x-axis: use x and dx. Perpendicular to the y-axis: use y and dy.
3. **Find the limits**: the first and last values of x (or y) in the base.
4. **Find the side length** s: top − bottom in terms of x, or right − left in terms of y. Test a point to get the order right.
5. **Write the area** of one cross section, A = s² for squares or A = s × h for rectangles.
6. **Write the integral** in full, V = ∫ A dx (or dy), then evaluate it. Give **cubic units**.

## Worked example 1: square slices across x (no calculator)

**Question.** The base of a solid is the region enclosed by y = 2x and y = x² (Figure 1). Cross sections perpendicular to the x-axis are squares. Find the volume of the solid.

1. **Limits.** 2x = x² gives x(x − 2) = 0, so x = 0 or x = 2.
2. **Top curve.** At x = 1, 2x = 2 and x² = 1. The line is on top for 0 < x < 2.
3. **Side length.** s(x) = 2x − x².
4. **Area of a slice.** A(x) = (2x − x²)² = 4x² − 4x³ + x⁴.
5. **Integral.**
   **V = ∫ (0 to 2) (2x − x²)² dx = ∫ (0 to 2) (4x² − 4x³ + x⁴) dx**
6. **Evaluate.** The antiderivative is 4x³/3 − x⁴ + x⁵/5. At x = 2: 32/3 − 16 + 32/5 = (160 − 240 + 96)/15 = 16/15. At x = 0 it is 0.

**Answer.** V = **16/15 cubic units** (about 1.067).

**Check.** The base has area ∫ (0 to 2) (2x − x²) dx = 4/3, and the widest segment is only 1 unit long (at x = 1), so every square has area at most 1. The volume must be less than 1 × 2 = 2, and it is. A common wrong answer is ∫ (0 to 2) [(2x)² − (x²)²] dx = 64/15, from squaring each function separately.

## Worked example 2: rectangles across y (no calculator)

**Question.** The base of a solid is the region enclosed by x = y² and x = y + 2. Cross sections perpendicular to the y-axis are rectangles whose height is half the length of the side that lies in the base. Find the volume.

1. **Direction.** Slices are perpendicular to the y-axis, so work in y with dy. Each segment across the base is horizontal.
2. **Limits.** y² = y + 2 gives y² − y − 2 = 0, so (y − 2)(y + 1) = 0 and y = −1 or y = 2.
3. **Right and left.** At y = 0, the line gives x = 2 and the parabola gives x = 0, so x = y + 2 is on the right.
4. **Side length.** s(y) = (y + 2) − y² = y + 2 − y².
5. **Area of a slice.** Base s, height s/2, so A(y) = s × s/2 = (y + 2 − y²)²/2.
6. **Integral.**
   **V = ∫ (−1 to 2) (y + 2 − y²)²/2 dy = (1/2) ∫ (−1 to 2) (y⁴ − 2y³ − 3y² + 4y + 4) dy**
7. **Evaluate.** An antiderivative of the bracket is y⁵/5 − y⁴/2 − y³ + 2y² + 4y. At y = 2 it is 32/5. At y = −1 it is −17/10. The difference is 32/5 + 17/10 = 81/10. Halve it: 81/20.

**Answer.** V = **81/20 cubic units** (4.05).

**Why not dx?** Slicing across y is what the question describes. A vertical segment in this base would sometimes end on the lower half of the parabola and sometimes on the line, so x-slices would need two integrals and give the volume of a different solid.

## Worked example 3: a calculator-active volume

**Question.** R is the region in the first quadrant bounded by y = 4 − x, y = e^(x/2) and the y-axis. R is the base of a solid whose cross sections perpendicular to the x-axis are squares. Find the volume. (Calculator allowed.)

1. **Limits.** The left edge is the y-axis, x = 0. The right edge is where 4 − x = e^(x/2). This needs a calculator: x = B ≈ 1.682. Store B unrounded.
2. **Top curve.** At x = 0, 4 − 0 = 4 and e⁰ = 1, so y = 4 − x is on top.
3. **Side and area.** s(x) = 4 − x − e^(x/2), so A(x) = (4 − x − e^(x/2))².
4. **Integral.** Write it before you press keys:
   **V = ∫ (0 to B) (4 − x − e^(x/2))² dx**
5. **Evaluate** with the stored B: **V ≈ 5.510 cubic units**.

**On paper**, show the setup with the rounded limit, "∫ (0 to 1.682) (4 − x − e^(x/2))² dx = 5.510", but use the stored value in the calculation.

**Sense check.** The largest slice is at x = 0, where s = 3 and A = 9, and the slices shrink to 0 at x = B. The volume must be less than 9 × 1.682 ≈ 15.1, and 5.510 is well below that.

## Common misconceptions

- **Squaring each function separately.** The side is f − g; the area is (f − g)². Writing f² − g² is the washer pattern from Topic 8.10, and it gives the wrong number here (64/15 instead of 16/15 in Worked example 1).
- **Forgetting to square.** ∫ s(x) dx is the area of the base, not the volume.
- **Adding π.** Square and rectangular slices have no π in their areas.
- **Mixing variables.** Slices perpendicular to the y-axis need s in terms of y, y-limits and dy. Do not leave an x inside a dy integral.
- **Treating the side as a y-value.** The side is a length across the base (top − bottom), not just the top curve, unless the bottom is the x-axis.
- **Misreading the rectangle's height.** "Height half the base" means A = s²/2, not s/2. Write A = (base)(height) with both parts in terms of s.
- **Rounding the limit early** on a calculator question, or leaving out the integral expression and writing only the decimal.
- **Thinking the solid is the region turned around an axis.** Here the solid stands on the base. Revolving a region is the disc method in Topic 8.9.

## Where this leads

Topic 8.8 keeps the same integral, V = ∫ A dx, and changes only the shape of the slice: triangles and semicircles. Topic 8.9 then makes the slices circles by revolving a region around an axis. Continue with [Volumes with Cross Sections: Triangles and Semicircles](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-study-guide/), or look back at [Topic 8.6](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-study-guide/) for the base regions. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-checklist/) to consolidate.
