---
resourceId: "mb-ap-calcbc-9.8-revision-notes"
title: "Area of a Polar Region or the Area Bounded by a Single Polar Curve: Revision Notes (Calculus BC 9.8)"
description: "One-page recap of polar area: where ½∫r² dθ comes from, choosing limits that trace a region once, petals and loops, the identities you need, and common errors."
course: "calculus-bc"
unit: 9
topics: ["9.8"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.8-study-guide"]
learningObjectives:
  - "Recall the polar area formula and how to choose its limits"
  - "Spot the common errors in polar area problems before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Exact areas by hand with power-reducing identities; on calculator questions use radian mode and give 3 decimal places."
related: ["mb-ap-calcbc-9.8-study-guide", "mb-ap-calcbc-9.8-practice", "mb-ap-calcbc-9.8-checklist"]
next: "mb-ap-calcbc-9.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Area = ½ ∫ from α to β of r² dθ."
  - "Choose limits that trace the region exactly once."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the sector diagram, explanations and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-study-guide/). **BC-only material.** Prerequisites (polar curves 9.7, Riemann sums and definite integrals 6.2–6.4) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A polar region is bounded by **rays from the pole** and a curve r = f(θ), so slice it into thin **sectors**, not rectangles.
- A sector of radius r and angle Δθ has area ½ r² Δθ. Adding sectors gives a Riemann sum; its limit is the integral.
- The rate at which area is swept out is dA/dθ = ½ r².
- Limits matter more than the integration. Sketch first.

## Key relationships

| Situation | Area | Note |
|---|---|---|
| Curve and two rays | ½ ∫ from α to β of r² dθ | Region swept once from α to β |
| Whole closed curve, r never 0 | ½ ∫ over one full trace | Often 0 to 2π, but check |
| One petal or loop | ½ ∫ between consecutive zeros of r | r = 0 at the pole |
| Symmetric region | 2 × (area of one half) | Only if the halves match |
| By hand | sin²kθ = ½(1 − cos 2kθ), cos²kθ = ½(1 + cos 2kθ) | Use before integrating |

**Traced twice?** The circle r = 6 cos θ is traced once on [0, π] (area 9π). On [0, 2π] the integral gives 18π, double the true area.

## Mistakes to avoid

1. **Forgetting the ½** or forgetting to **square r**.
2. **Expanding (a + b cos θ)² wrongly**: the middle term 2ab cos θ is easy to lose.
3. **0 to 2π by habit**, which double-counts curves that repeat.
4. **Wrong zeros for a petal**: use consecutive zeros with the petal between them.
5. **Integrating sin²θ without the identity.**
6. **Degree mode** on the calculator, or giving a number with no integral written down.

## Quick self-check

1. Find the area of the region bounded by r = 5 and the rays θ = 0 and θ = π/2. *(25π/4, a quarter disc)*
2. Find the area of one petal of r = sin 4θ. *(Petal on 0 ≤ θ ≤ π/4: ½ ∫ sin²4θ dθ = π/16)*
3. Find the area swept out by r = e^θ for 0 ≤ θ ≤ 1. *((e² − 1)/4 ≈ 1.597)*
4. Why does ½ ∫ from 0 to 2π of (2 cos 3θ)² dθ not give the area of the rose? *(The rose is traced twice on [0, 2π]; the integral gives 2π but the area is π.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-practice/).
