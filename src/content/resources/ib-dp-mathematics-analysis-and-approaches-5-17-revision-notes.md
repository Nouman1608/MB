---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.17 Areas enclosed with the y-axis and volumes of revolution (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.17
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-17"
description: "Revision notes for IB DP Maths AA HL section 5.17: areas with the y-axis, volumes of revolution, washers, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.17 of IB DP Mathematics: Analysis and Approaches: the area of a region enclosed by a curve and the y-axis, and volumes of revolution about the x-axis or y-axis**. It is AHL content, examined at HL only. Derivations and worked examples are in the [section 5.17 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-17/).

## Core formulas

```
Area to the y-axis (y = a to y = b):   ∫ₐᵇ |x| dy
Volume about the x-axis:               V = π ∫ₐᵇ y² dx    (x-limits)
Volume about the y-axis:               V = π ∫ₐᵇ x² dy    (y-limits)
Between two curves (washer):           V = π ∫ (outer² − inner²)
```

- All rotations are through 2π.
- The variable of integration matches the axis of rotation: dx for the x-axis, dy for the y-axis.
- For dy integrals, rearrange to make x (or x²) the subject; limits are y-values.
- A volume is never negative; if an integral of a square comes out negative, a limit or sign is wrong.

## Setting up: a checklist

1. Sketch the region and mark the axis of rotation.
2. Decide dx or dy.
3. Express the radius (y or x) in terms of the variable of integration.
4. Find the limits in that variable.
5. Square the radius (outer² − inner² for a washer); include π.
6. Evaluate: by hand (identities, substitution, parts) or with the GDC.

## Useful integrals for volumes

| Radius | Squared | Integral of the square |
|---|---|---|
| sin x | sin²x = (1 − cos 2x)/2 | x/2 − (sin 2x)/4 |
| cos x | cos²x = (1 + cos 2x)/2 | x/2 + (sin 2x)/4 |
| sec x | sec²x | tan x |
| √x | x | x²/2 |
| eᵏˣ | e^(2kx) | e^(2kx)/(2k) |
| 1/(x + 1) | (x + 1)⁻² | −(x + 1)⁻¹ |

## Two set-ups compared

The same region can be rotated about either axis, and the integrals look quite different. Take the region enclosed by y = x², the y-axis and y = 4, with x ≥ 0.

- **About the y-axis:** discs are horizontal with radius x, so V = π ∫₀⁴ x² dy = π ∫₀⁴ y dy = 8π. Limits are y-values.
- **Area of the same region:** horizontal strips of length x = √y give ∫₀⁴ √y dy = 16/3.

Now take the region under y = x² for 0 ≤ x ≤ 2 (between the curve and the x-axis).

- **About the x-axis:** V = π ∫₀² x⁴ dx = 32π/5. Limits are x-values.

Writing "radius = …, variable = …, limits = …" before the integral prevents most set-up errors.

## Key terms

| Term | Meaning |
|---|---|
| Solid of revolution | solid formed by rotating a region through 2π about an axis |
| Disc | thin slice of the solid, volume about πr² × thickness |
| Washer | disc with a hole, for a region between two curves |
| Integration with respect to y | adding horizontal strips or discs; limits are y-values |

## Exam traps

- π missing, or the radius not squared.
- π ∫ (f − g)² instead of π ∫ (f² − g²) for a washer.
- x-limits used with dy (or the reverse).
- Wrong rearrangement when making x the subject.
- Rotating about the y-axis but squaring y.
- Curve left of the y-axis: area needs |x|.
- On the GDC, not writing the integral first.

## Self-test

1. Find the area between x = 6y − y² and the y-axis.
2. Find the area between y = eˣ, the y-axis and the lines y = 1 and y = e².
3. Find the volume when y = 1/(x + 1), 0 ≤ x ≤ 1, is rotated about the x-axis.
4. Find the volume when y = sec x, 0 ≤ x ≤ π/4, is rotated about the x-axis.
5. Show that rotating y = (r/h)x, 0 ≤ x ≤ h, about the x-axis gives (1/3)πr²h.
6. The region between y = x², the y-axis and y = 9 (x ≥ 0) is rotated about the y-axis. Find the volume.
7. The region between y = 2x and y = x² is rotated about the x-axis. Find the volume.
8. Find the volume when y = sin x, 0 ≤ x ≤ π, is rotated about the x-axis.
9. The part of the circle x² + y² = 25 with 3 ≤ y ≤ 5 is rotated about the y-axis. Find the volume of the cap.
10. y = √x, 0 ≤ x ≤ k, is rotated about the x-axis; the volume is 18π. Find k.
11. Why is π ∫₀¹ (x − x²)² dx not the volume when the region between y = x and y = x² is rotated about the x-axis?
12. State what you must write before quoting a GDC value for a volume.

## Answers

1. 6y − y² = 0 at y = 0, 6; ∫₀⁶ (6y − y²) dy = 108 − 72 = 36.
2. x = ln y: ∫₁^(e²) ln y dy = [y ln y − y]₁^(e²) = e² + 1.
3. π ∫₀¹ (x + 1)⁻² dx = π[−(x + 1)⁻¹]₀¹ = π(1 − 1/2) = π/2.
4. π ∫₀^(π/4) sec²x dx = π[tan x]₀^(π/4) = π.
5. π ∫₀ʰ (r²/h²)x² dx = π(r²/h²)(h³/3) = (1/3)πr²h.
6. π ∫₀⁹ y dy = 81π/2.
7. Meet at x = 0, 2; outer y = 2x: π ∫₀² (4x² − x⁴) dx = π(32/3 − 32/5) = 64π/15.
8. π ∫₀^π sin²x dx = π²/2.
9. x² = 25 − y²: π ∫₃⁵ (25 − y²) dy = π[25y − y³/3]₃⁵ = 52π/3.
10. π ∫₀ᵏ x dx = πk²/2 = 18π, so k = 6.
11. The washer volume subtracts the squared radii, π ∫ (x² − x⁴) dx = 2π/15; squaring the difference gives π/30.
12. The integral, with π, the squared function, the variable of integration and the limits.

## Where next

Work through the [section 5.17 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-17-practice/). The SL areas behind this section are summarised in the [section 5.11 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-11-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.17.
