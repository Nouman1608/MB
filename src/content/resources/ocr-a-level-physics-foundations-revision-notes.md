---
title: "OCR A Level Physics: Foundations of Physics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Foundations of physics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "For first assessment 2017"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "foundations-of-physics-ocr-alevel"
description: "Condensed recall notes on physical quantities and SI units, uncertainty handling, and scalars and vectors for OCR A Level Physics A (H556), Module 2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Foundations of Physics study guide](/resources/ocr-a-level-physics-foundations-of-physics/).

## Physical quantities and units (2.1)

**Six SI base quantities:** mass (kg), length (m), time (s), current (A), temperature (K), amount of substance (mol). **Derived units** built from these — e.g. momentum (kg m s⁻¹), density (kg m⁻³).

**Homogeneity check:** verify an equation's units balance on both sides before treating it as correct — a dimensionally inconsistent equation cannot be physically correct.

**Prefixes:** pico to tera. **Graph/table convention:** label as "quantity / unit," e.g. "speed / m s⁻¹".

## Making measurements and analysing data (2.2)

| Error type | Cause | Fix |
|---|---|---|
| **Systematic** (incl. zero error) | Consistent bias in every reading | Recalibrate instrument |
| **Random** | Unpredictable variation | Repeat and average |

**Precision vs. accuracy:** precise = results closely clustered together; accurate = close to the **true value**. A thermometer with a zero error gives **precise but consistently inaccurate** readings — a systematic error, not random.

```
Combining by ADDITION/SUBTRACTION: add ABSOLUTE uncertainties
Combining by MULTIPLICATION/DIVISION: add PERCENTAGE uncertainties
```

**Graphical treatment:** lines of best fit, worst lines, percentage difference; elementary error bars expected at A Level.

## Nature of quantities: scalars and vectors (2.3)

| | Has direction? |
|---|---|
| **Scalar** | No (e.g. speed, mass, energy) |
| **Vector** | Yes (e.g. velocity, force, displacement) |

**Resolving a vector into perpendicular components:**

```
Fx = F cos(theta)   [component ALONG the stated angle]
Fy = F sin(theta)   [component PERPENDICULAR to it]
```

**The most common error in mechanics:** swapping sin and cos when resolving.

## Worked example: resolving a vector

A force of 40 N acts at 30° above the horizontal.

```
Fx = 40 x cos(30) = 40 x 0.866 = 34.6 N
Fy = 40 x sin(30) = 40 x 0.5 = 20 N
```

This exact method reappears throughout the course whenever an object moves or is acted on at an angle.

## Worked example: combining percentage uncertainties

Length = 12.0 cm ± 0.1 cm; time = 4.0 s ± 0.1 s. Find the percentage uncertainty in speed = length ÷ time.

```
% uncertainty in length = (0.1 / 12.0) x 100 = 0.83%
% uncertainty in time   = (0.1 / 4.0) x 100 = 2.5%

Since speed = length / time (division), ADD percentage uncertainties:
Total % uncertainty = 0.83% + 2.5% = 3.33%
```

## Worked example: finding the resultant of two vectors

Two forces act on an object: 30 N due east and 40 N due north. Find the resultant force's magnitude and direction.

```
Since the two forces are perpendicular, use Pythagoras:
Resultant magnitude = sqrt(30^2 + 40^2) = sqrt(900 + 1600)
                     = sqrt(2500) = 50 N

Direction (angle from east, measured toward north):
tan(theta) = opposite / adjacent = 40 / 30
theta = tan^-1(40/30) = 53.1 degrees
```

For two forces that are NOT perpendicular, a scale drawing (a vector triangle) or resolving both into perpendicular components first is the method the specification names -- practise both approaches, since exam questions may specifically ask for either a calculation method or a scale-drawing method.

## Why estimating quantities matters

The specification explicitly expects candidates to make sensible estimates of physical quantities -- for example, the mass of an apple, the height of a room, or the speed of a walking person -- as part of 2.1.1. This is not a minor add-on: being able to sanity-check a calculated answer against a sensible real-world estimate (does 500,000 m/s for a car's speed look obviously wrong?) is a genuine physics skill the specification tests directly, separate from being able to perform the calculation itself correctly.

## Key terms

**Systematic error** — a consistent bias affecting every reading the same way (e.g. a zero error). **Random error** — unpredictable variation between repeated readings. **Precision** — how closely clustered repeated results are. **Accuracy** — how close results are to the true value. **Scalar** — a quantity with magnitude only. **Vector** — a quantity with magnitude AND direction.

## Common mistakes

- Confusing **precision** (clustered) with **accuracy** (close to true value).
- Adding **absolute** uncertainties instead of **percentage** uncertainties when combining by multiplication/division, or vice versa for addition/subtraction.
- **Swapping sin and cos** when resolving a vector — cos for the component along the stated angle, sin for perpendicular.
- Treating a scalar as if it had direction (or vice versa) — speed (scalar) vs. velocity (vector) is the classic test case.
- Forgetting to **check unit homogeneity** before accepting a derived formula.

## Why Module 2 resurfaces silently

Every later module assumes SI units, uncertainty handling and the vector-scalar distinction **without re-teaching them**: Module 3's kinematics, Module 5's astrophysics, Module 6's particle physics all rely on skills introduced here. Gaps in Module 2 tend to show up as **recurring errors throughout the A Level**, not isolated Module 2 mistakes — over-learn this module rather than revising it once.

## Quick self-test

- Resolve a 60 N force acting at 45° into horizontal and vertical components.
- A length is 8.0 cm ± 0.2 cm; find its percentage uncertainty.
- Explain the difference between a systematic and a random error, with an example of each.
- State which is the scalar and which is the vector: speed/velocity, mass/weight, distance/displacement.
- Explain why an equation that fails a unit-homogeneity check cannot be correct.

## Official syllabus

OCR, *A Level GCE Physics A H556 Specification*, version 3.0 (March
2026), Module 2: Foundations of physics,
https://www.ocr.org.uk/images/171726-specification-accredited-a-level-gce-physics-a-h556.pdf,
fetched and verified in full 2026-09-02.
