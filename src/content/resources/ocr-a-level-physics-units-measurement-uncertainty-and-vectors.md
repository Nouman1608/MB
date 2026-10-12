---
title: "OCR A Level Physics A: Units, measurement uncertainty and vectors (H556)"
seoTitle: "OCR A Level Physics Units, Uncertainty and Vectors"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Units, measurement uncertainty and vectors"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 41
syllabusTopics:
  - qualification: "a-level"
    topic: "foundations-of-physics-ocr-alevel"
    subtopic: "physical-quantities-and-units-ocr-alevel"
  - qualification: "a-level"
    topic: "foundations-of-physics-ocr-alevel"
    subtopic: "making-measurements-and-analysing-data-ocr-alevel"
  - qualification: "a-level"
    topic: "foundations-of-physics-ocr-alevel"
    subtopic: "nature-of-quantities-ocr-alevel"
description: "A full teaching guide to units, estimates, errors, uncertainty calculations, graphs and vectors for OCR A Level Physics A (H556), sections 2.1 to 2.3."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches sections 2.1, 2.2 and 2.3 of Module 2 in the OCR *Advanced GCE in Physics A* specification (H556), Version 3.0 (March 2026), for first assessment in 2017. It covers units, errors and uncertainties, and scalars and vectors, with worked examples. For a shorter overview, see the [Foundations of Physics study guide](/resources/ocr-a-level-physics-foundations-of-physics/). Condensed recall is in the [revision notes](/resources/ocr-a-level-physics-units-measurement-uncertainty-and-vectors-revision-notes/) and exam-style work is in the [practice questions](/resources/ocr-a-level-physics-units-measurement-uncertainty-and-vectors-practice/). Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/), [checklist](/checklists/ocr/a-level/physics/) and [free diagnostics](/diagnostics/).

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 2.1.1(a)-(b) | Give a quantity as number and unit; estimate quantities |
| 2.1.2(a)-(f) | Base units, derived units, homogeneity, prefixes, axis and column labels |
| 2.2.1(a)-(b) | Systematic (including zero) and random errors; precision and accuracy |
| 2.2.1(c) | Absolute and percentage uncertainties when data are combined |
| 2.2.1(d) | Error bars, best-fit and worst lines, percentage difference |
| 2.3.1(a)-(b) | Scalars and vectors with examples; adding and subtracting vectors |
| 2.3.1(c)-(d) | Vector triangle for two coplanar vectors; perpendicular components |

## 2.1.1 Physical quantities and estimates

A physical quantity is a number multiplied by a unit. "The force is 12" is incomplete; "12 N" is a measurement. The unit is part of the answer.

Make estimates by rounding to one significant figure and stating each assumption.

**Worked example.** Estimate the power of an adult running up a flight of 20 steps in 9 s.

```
height of one step ≈ 0.18 m, so rise h = 20 × 0.18 = 3.6 m
mass m ≈ 65 kg, g = 9.81 m s⁻²
energy gained = mgh = 65 × 9.81 × 3.6 ≈ 2300 J
power = energy / time = 2300 / 9 ≈ 260 W
```

A result of 20 W or 20 kW would tell you to recheck.

## 2.1.2 SI units

### Base quantities

This specification uses six base quantities.

| Symbol | Unit | Quantity |
|---|---|---|
| m | metre | length |
| kg | kilogram | mass |
| s | second | time |
| A | ampere | current |
| K | kelvin | temperature |
| mol | mole | amount of substance |

### Derived units

Other units are built from these. Momentum is mass × velocity, so its unit is kg m s⁻¹. Density is mass / volume, so its unit is kg m⁻³. Some derived units in base form:

| Unit | In base units |
|---|---|
| pascal, Pa | kg m⁻¹ s⁻² |
| volt, V | kg m² s⁻³ A⁻¹ |
| newton, N | kg m s⁻² |
| watt, W | kg m² s⁻³ |
| joule, J | kg m² s⁻² |

Derive these from defining equations. For the volt, use V = P / I, so kg m² s⁻³ divided by A.

### Homogeneity

An equation is homogeneous if every term has the same base units. Check each term in a sum.

**Worked example 1.** The speed of a wave on a stretched string is v = √(T / μ), where T is tension (N) and μ is mass per unit length (kg m⁻¹). Is it homogeneous?

```
T / μ = (kg m s⁻²) / (kg m⁻¹) = m² s⁻²
√(m² s⁻²) = m s⁻¹, which is the unit of speed
```

It is homogeneous.

**Worked example 2.** A student writes s = ut + ½at. The term ut has unit m but at has unit m s⁻¹, so the equation is wrong. The correct term is ½at².

Homogeneity cannot detect a missing factor such as ½ or 2π. It only shows the units balance.

### Prefixes

| Factor | Name | Symbol |
|---|---|---|
| 10⁻¹² | pico | p |
| 10⁻⁹ | nano | n |
| 10⁻⁶ | micro | μ |
| 10⁻³ | milli | m |
| 10⁻² | centi | c |
| 10⁻¹ | deci | d |
| 10³ | kilo | k |
| 10⁶ | mega | M |
| 10⁹ | giga | G |
| 10¹² | tera | T |

**Conversions.**

```
450 nm = 450 × 10⁻⁹ m = 4.5 × 10⁻⁷ m
2.5 mm² = 2.5 × (10⁻³)² m² = 2.5 × 10⁻⁶ m²   (square the prefix too)
0.85 g cm⁻³ = 0.85 × 10⁻³ kg / 10⁻⁶ m³ = 850 kg m⁻³
72 km h⁻¹ = 72 × 1000 m / 3600 s = 20 m s⁻¹
```

### Labelling axes and columns

Write a heading as quantity / unit, for example speed / m s⁻¹ or time / s. The unit then divides the quantity, so the entries below it are pure numbers. Do not put units on every cell.

## 2.2.1 Errors, precision and accuracy

### Systematic and random errors

A **systematic error** shifts every reading by the same amount or the same proportion in one direction. A **zero error** is one example: a micrometer reads 0.02 mm with its jaws closed. Averaging does not remove it; correct for it.

A **random error** scatters readings unpredictably, for example reaction time with a stopwatch. Repeating and averaging reduces its effect.

**Worked example.** The micrometer above reads 1.46 mm on a wire, so the diameter is 1.46 − 0.02 = **1.44 mm**.

### Precision and accuracy

Readings are **precise** when they agree closely with each other. A result is **accurate** when it is close to the true value. A balance that reads 0.9 g too high every time is precise but not accurate. Precision depends on random error. Accuracy is damaged by systematic error too.

### Uncertainty in a measurement

An uncertainty is stated as ± a value. For one scale reading, a common estimate is half the smallest division. For repeats, a common approach is half the range. The specification does not expect rigorous statistics.

**Worked example.** Five timings are 1.52, 1.58, 1.55, 1.49 and 1.56 s.

```
mean = 7.70 / 5 = 1.54 s
half range = (1.58 − 1.49) / 2 = 0.045 s
percentage uncertainty = 0.045 / 1.54 × 100 = 2.9 %
```

Write the result as 1.54 ± 0.05 s.

Percentage uncertainty is (absolute / value) × 100 and has no unit.

## Combining uncertainties

| Operation | Rule |
|---|---|
| a + b or a − b | add the absolute uncertainties |
| a × b or a / b | add the percentage uncertainties |
| aⁿ | multiply the percentage uncertainty by n |

For a power, use the size of n. A square root is n = ½, so halve the percentage uncertainty.

**Worked example (addition and subtraction).** A liquid warms from 21.5 ± 0.5 °C to 64.0 ± 0.5 °C. The rise is 64.0 − 21.5 = 42.5 °C. The uncertainties add: ± 1.0 °C. That is 1.0 / 42.5 = 2.4 %. Subtracting similar numbers inflates the percentage uncertainty.

**Worked example (products and powers).** A solid cylinder has mass 214.6 ± 0.2 g, diameter 2.40 ± 0.02 cm and height 6.10 ± 0.05 cm. Find its density.

```
V = π d² h / 4 = π × 2.40² × 6.10 / 4 = 27.6 cm³
ρ = m / V = 214.6 / 27.6 = 7.78 g cm⁻³
% in m = 0.2 / 214.6 × 100 = 0.093 %
% in d = 0.02 / 2.40 × 100 = 0.833 %   (counts twice)
% in h = 0.05 / 6.10 × 100 = 0.820 %
total % = 0.093 + 2(0.833) + 0.820 = 2.58 %
absolute = 2.58 % of 7.78 = 0.20 g cm⁻³
```

So ρ = 7.78 ± 0.20 g cm⁻³. The diameter dominates because it is squared.

## Graphs, error bars and percentage difference

Plot the data with error bars. A ± 2 mm uncertainty gives a bar 4 mm long. Draw the **line of best fit** with points balanced about it. A **worst line** is the steepest or shallowest straight line that still passes through all the bars.

**Worked example.** Weights are hung on a spring and each extension x is read from a ruler with uncertainty ± 2 mm. Force F is taken as exact.

| F / N | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 |
|---|---|---|---|---|---|
| x / mm | 12 | 25 | 36 | 49 | 60 |

```
best-fit gradient = 12.0 mm N⁻¹
steepest line: (1.0, 10) to (5.0, 62), gradient = 52 / 4 = 13.0 mm N⁻¹
shallowest line: (1.0, 14) to (5.0, 58), gradient = 44 / 4 = 11.0 mm N⁻¹
uncertainty in gradient = (13.0 − 11.0) / 2 = 1.0 mm N⁻¹ (8.3 %)
```

Both worst lines pass inside every bar. Since k = F / x, the gradient of x against F is 1/k. So k = 1000 / 12.0 = 83 N m⁻¹, with the same 8.3 % uncertainty, giving k = 83 ± 7 N m⁻¹. The intercept uncertainty comes from the intercepts of the best and worst lines in the same way.

**Percentage difference.** This compares your result with a reference value. A common form is

```
percentage difference = |measured − reference| / reference × 100
```

The specification names the term without giving a formula, so state the one you use. For the cylinder density 7.78 g cm⁻³ against a reference of 7.87 g cm⁻³, the difference is 0.09 / 7.87 × 100 = 1.1 %. This is smaller than the 2.6 % uncertainty, so the result agrees with the reference within its uncertainty.

## 2.3.1 Scalars and vectors

A **scalar** is fully described by a size. A **vector** needs a size and a direction.

| Scalars | Vectors |
|---|---|
| distance, speed, mass, time | displacement, velocity, acceleration |
| energy, power, work | force, weight, momentum |
| temperature, charge, density | field strength |

Someone who jogs once round a 400 m track has covered 400 m but ends with zero displacement.

### Adding and subtracting vectors

Add vectors **tip to tail**. Draw the first, start the second at its tip, and the resultant joins the start of the first to the tip of the second. To subtract, add the reversed vector: a − b = a + (−b).

**Worked example (change in velocity).** A car travels at 18 m s⁻¹ north and then turns to travel at 18 m s⁻¹ east. Find the change in velocity.

```
Δv = v(final) − v(initial) = (east 18) + (south 18)
magnitude = √(18² + 18²) = 25.5 m s⁻¹
direction = 45° south of east
```

The speed is unchanged but the velocity is not.

### Vector triangle for two coplanar vectors

For perpendicular vectors use Pythagoras and tangent. A boat steers at 2.4 m s⁻¹ across a river that flows at 0.9 m s⁻¹.

```
speed = √(2.4² + 0.9²) = 2.56 m s⁻¹
angle to the intended line = tan⁻¹(0.9 / 2.4) = 20.6°
```

For other angles, draw the triangle and use the cosine and sine rules, or draw it to scale. Two forces of 12 N and 7 N act at a point with 50° between their lines of action. Placing them tip to tail makes the interior angle 130°, because 180° − 50° = 130°.

```
R² = 12² + 7² − 2(12)(7) cos 130° = 193 + 168 cos 50° = 301.0
R = 17.3 N
sin α / 7 = sin 130° / 17.35, so α = 18.0° from the 12 N force
```

Check by components: along the 12 N line 12 + 7 cos 50° = 16.50 N, and perpendicular 7 sin 50° = 5.36 N. Then √(16.50² + 5.36²) = 17.3 N.

For a **scale drawing**, choose a scale such as 1 cm to 2 N, use a protractor for angles, and state the scale.

### Resolving into perpendicular components

A vector F at angle θ to the x-axis has components Fx = F cos θ and Fy = F sin θ. They act independently.

**Worked example.** A sledge is pulled by a rope with tension 85 N at 28° above the horizontal.

```
horizontal = 85 cos 28° = 75.1 N
vertical = 85 sin 28° = 39.9 N
```

**Worked example (slope).** A 12 kg block sits on a 35° slope. Its weight is 12 × 9.81 = 117.7 N. The weight makes an angle of 35° with the line perpendicular to the slope, so:

```
component along the slope = 117.7 sin 35° = 67.5 N
component perpendicular to the slope = 117.7 cos 35° = 96.4 N
```

Sine goes with the component opposite the angle, cosine with the component adjacent to it.

## Common errors

- Giving no unit, or treating 1 mm² as 10⁻³ m².
- Adding percentage uncertainties for a sum, or absolute uncertainties for a product.
- Forgetting that a squared quantity counts its percentage uncertainty twice.
- Taking a gradient from data points rather than points on the line.
- Using sin where cos belongs after misreading which angle is given.
- Treating weight, momentum or velocity as scalars.

Next, try the [practice questions](/resources/ocr-a-level-physics-units-measurement-uncertainty-and-vectors-practice/). The [practical skills guide](/resources/ocr-a-level-physics-development-of-practical-skills/) shows these methods in experiments.

## Official syllabus

OCR, *Advanced GCE in Physics A (H556)* specification, Version 3.0 (March 2026), for first assessment in 2017. Sections 2.1.1, 2.1.2, 2.2.1 and 2.3.1.
