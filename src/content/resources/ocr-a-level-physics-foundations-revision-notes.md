---
title: "OCR A Level Physics: Foundations of Physics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Foundations of physics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "foundations-of-physics-ocr-alevel"
description: "Condensed recall notes on physical quantities and SI units, uncertainty handling, and scalars and vectors for OCR A Level Physics A (H556), Module 2."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by iftikhar-azeemi on 2026-09-29; 2026-11-08: reviewed by iftikhar-azeemi."
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Foundations of Physics study guide](/resources/ocr-a-level-physics-foundations-of-physics/).

## Physical quantities and units (2.1)

**Six of the seven SI base quantities examined here** (SI itself defines seven; this specification excludes luminous intensity): mass (kg), length (m), time (s), current (A), temperature (K), amount of substance (mol). **Derived units** built from these — e.g. momentum (kg m s⁻¹), density (kg m⁻³).

**Homogeneity check:** verify an equation's units balance on both sides before treating it as correct — a dimensionally inconsistent equation cannot be physically correct.

**Prefixes:** pico to tera. **Graph/table convention:** label as "quantity / unit," e.g. "speed / m s⁻¹".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-foundations-revision-notes--02-homogeneity-balance.webp" width="900" height="840" alt="Two balances. s = ut + half a t squared has metre on both sides so it balances; v = u + a t squared has metre per second on the left but metre for a t squared, so it tips and cannot be correct." loading="lazy">
  <figcaption>Units must balance on both sides of a correct equation.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--01-units-from-base.webp" width="900" height="890" alt="Six base unit boxes (kg, m, s, A, K, mol) above a chain of derived units. The newton, kg m s^-2, times metre gives the joule, divided by second gives the watt, and divided by ampere gives the volt (OCR). Newton divided by metre squared gives the pascal. Cambridge 9702 does not use the mole." loading="lazy">
  <figcaption>Each derived unit is a product or quotient of base units.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--02-prefix-powers.webp" width="900" height="956" alt="Bars show prefixes from tera 10^12 down to femto 10^-15. Deci is used by Cambridge and OCR only; femto by AQA and OxfordAQA only. Examples: 250 mA = 0.25 A and 5.6 MeV = 5.6 x 10^6 eV." loading="lazy">
  <figcaption>Replace the prefix with its power of ten before substituting.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--04-precision-accuracy.webp" width="900" height="1160" alt="Four targets with six shots each: tight and centred (precise and accurate); tight but off-centre (systematic error); spread with mean on the bullseye (random error); spread and off-centre (both)." loading="lazy">
  <figcaption>Systematic error shifts all readings; random error scatters them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--10-subtraction-rule-temperature-rise.webp" width="900" height="680" alt="Two temperature readings, 22.0 and 41.5 degrees C, each +/-0.5. The rise is 19.5 C and the absolute uncertainties add to +/-1.0 C, which is 5.1% of the rise." loading="lazy">
  <figcaption>When you subtract, add the absolute uncertainties.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--07-error-bars-gradient.webp" width="900" height="1030" alt="Extension against force with +/-2 mm error bars. Best line gradient 12.0, steepest 13.0, shallowest 11.0 mm per N, so gradient = 12.0 +/- 1.0 mm per N." loading="lazy">
  <figcaption>Half the difference between the steepest and shallowest gradients.</figcaption>
</figure>


## Nature of quantities: scalars and vectors (2.3)

| | Has direction? |
|---|---|
| **Scalar** | No (e.g. speed, mass, energy) |
| **Vector** | Yes (e.g. velocity, force, displacement) |

**Resolving a vector into perpendicular components:**

```
Fx = F cos(theta)   [component ALONG the axis from which theta is measured]
Fy = F sin(theta)   [component PERPENDICULAR to that axis]
```

**The most common error in mechanics:** swapping sin and cos when resolving.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-foundations-revision-notes--01-resolve-40n-30deg.webp" width="900" height="830" alt="A 40 N force at 30 degrees above a horizontal axis drawn to scale. The component along the axis is 40 cos 30 = 34.6 N and the perpendicular component is 40 sin 30 = 20 N, and 34.6 squared plus 20 squared equals 40 squared. Cos goes with the axis the angle is measured from." loading="lazy">
  <figcaption>Resolving 40 N at 30 degrees: cos along the axis, sin across it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-physics-forces-and-their-effects--04-scalar-vector.webp" width="900" height="960" alt="A walk of 6 m east then 2 m west on a number line from 0 to 8 m. The distance travelled is 6 plus 2, 8 m, a scalar with no direction. The displacement is an arrow from the start to the end point, 4 m east, a vector. Below, scalars are mass, speed, distance and energy; vectors, drawn with arrows, are force, velocity, displacement and acceleration." loading="lazy">
  <figcaption>Distance versus displacement for a 6 m east, 2 m west walk, with scalar and vector examples from the lesson.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-physics-interacting-forces-vectors-and-free-body-diagrams--03-resolve-components.webp" width="900" height="725" alt="A 100 N rope force on a trolley is drawn as the diagonal of a rectangle in a 3-4-5 triangle. Its components are 80 N horizontally and 60 N vertically. The vertical part partly lifts the trolley so the ground pushes up with less force than the weight." loading="lazy">
  <figcaption>A single force can be replaced by two perpendicular components.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--06-combining-uncertainties.webp" width="900" height="1120" alt="Falling ball: h = 1.200 +/- 0.002 m, t = 0.495 +/- 0.005 s. A bar shows 0.17 percent from h and 1.01 percent from t counted twice, 2.19 percent total, so g = 9.8 +/- 0.2 m s^-2." loading="lazy">
  <figcaption>Percentage uncertainties add for products and quotients; a power multiplies the percentage.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-physics-interacting-forces-vectors-and-free-body-diagrams--02-resultant-perpendicular.webp" width="900" height="665" alt="A scale drawing places a 15 N arrow east and an 8.0 N arrow north head to tail. The resultant joining start to finish is 17 N at 28 degrees north of east. Adding the sizes to get 23 N is marked wrong." loading="lazy">
  <figcaption>Perpendicular forces combine by Pythagoras, not by adding sizes.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--09-vector-addition.webp" width="900" height="910" alt="12 N and 7 N forces with 50 degrees between them drawn tip to tail. Resultant 17.3 N at 18.0 degrees to the 12 N force from the cosine rule (interior angle 130) and checked by components 16.50 N and 5.36 N." loading="lazy">
  <figcaption>The resultant joins the start of the first vector to the tip of the last.</figcaption>
</figure>


## Why estimating quantities matters

The specification explicitly expects candidates to make sensible estimates of physical quantities -- for example, the mass of an apple, the height of a room, or the speed of a walking person -- as part of 2.1.1. This is not a minor add-on: being able to sanity-check a calculated answer against a sensible real-world estimate (does 500,000 m/s for a car's speed look obviously wrong?) is a genuine physics skill the specification tests directly, separate from being able to perform the calculation itself correctly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-foundations-revision-notes--03-sensible-speed-estimate.webp" width="900" height="830" alt="Log scale of speeds from 1 to 10^9 m/s with approximate typical values for walking, a motorway car, sound and light. A calculated car speed of 500 000 m/s is far beyond the car and obviously wrong." loading="lazy">
  <figcaption>Estimate first to spot an impossible answer.</figcaption>
</figure>


## Key terms

**Systematic error** — a consistent bias affecting every reading the same way (e.g. a zero error). **Random error** — unpredictable variation between repeated readings. **Precision** — how closely clustered repeated results are. **Accuracy** — how close results are to the true value. **Scalar** — a quantity with magnitude only. **Vector** — a quantity with magnitude AND direction.

## Common mistakes

- Confusing **precision** (clustered) with **accuracy** (close to true value).
- Adding **absolute** uncertainties instead of **percentage** uncertainties when combining by multiplication/division, or vice versa for addition/subtraction.
- **Swapping sin and cos** when resolving a vector — cos for the component along the axis from which the angle is measured, sin for the component perpendicular to that axis.
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

## Frequently asked questions

**What is a scalar and what is a vector?**
A scalar has magnitude only, such as speed, mass or energy. A vector has magnitude and direction, such as velocity, force or displacement.

**How do you reduce a systematic error?**
A systematic error, including a zero error, is a consistent bias in every reading, and the fix is to recalibrate the instrument. Repeating and averaging reduces random error but does not remove a systematic error.

**What range of prefixes do you need for OCR A Level Physics?**
OCR A Level Physics A (H556) expects the standard prefixes from pico to tera, along with the convention of labelling graph axes and table columns as quantity / unit, for example "speed / m s⁻¹".

**Why do you need to estimate physical quantities?**
Section 2.1.1 of the specification expects sensible estimates of quantities such as the mass of an apple or the speed of a walking person. Estimation lets you sanity-check whether a calculated answer is plausible.

## Related resources

- [Foundations of Physics study guide](/resources/ocr-a-level-physics-foundations-of-physics/)
- [Foundations of Physics practice questions](/resources/ocr-a-level-physics-foundations-practice/)

## Official syllabus

OCR, *A Level GCE Physics A H556 Specification*, version 3.0 (March
2026), Module 2: Foundations of physics,
https://www.ocr.org.uk/images/171726-specification-accredited-a-level-gce-physics-a-h556.pdf,
fetched and verified in full 2026-09-02.
