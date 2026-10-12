---
title: "OCR A Level Physics A: Units, measurement uncertainty and vectors (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Units and Vectors Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on SI units, errors, uncertainty rules, error bars and vectors for OCR A Level Physics A (H556), with a short self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sections 2.1.1, 2.1.2, 2.2.1 and 2.3.1 of the OCR *Advanced GCE in Physics A* specification (H556), Version 3.0 (March 2026), for first assessment in 2017. For full explanations, use the [study guide](/resources/ocr-a-level-physics-units-measurement-uncertainty-and-vectors/). Then test yourself with the [practice questions](/resources/ocr-a-level-physics-units-measurement-uncertainty-and-vectors-practice/). The wider module is summarised in the [Foundations of Physics revision notes](/resources/ocr-a-level-physics-foundations-revision-notes/). Course pages: [OCR A Level Physics hub](/boards/ocr/a-level/physics/), [checklist](/checklists/ocr/a-level/physics/) and [free diagnostics](/diagnostics/).

## 2.1 Quantities, units and estimates

- A physical quantity = number × unit (2.1.1(a)). Always quote both.
- Estimate (2.1.1(b)): round to one significant figure, state each assumption, then check the answer is plausible.
- Handy anchors: adult mass about 70 kg, walking speed about 1.5 m s⁻¹, car mass about 1000 kg, motorway speed about 30 m s⁻¹, room height about 2.5 m.
- Worked reminder: a 1200 kg car at 30 m s⁻¹ has kinetic energy ½mv² = 0.5 × 1200 × 30² = 5.4 × 10⁵ J.

| Base quantity | Unit |
|---|---|
| length | m |
| mass | kg |
| time | s |
| current | A |
| temperature | K |
| amount of substance | mol |

**Derived units** are products and quotients of base units (2.1.2(b)). Every unit met in the specification (2.1.2(c)), such as the hertz (s⁻¹) and coulomb (A s), reduces to base units through its defining equation.

| Unit | Base form |
|---|---|
| momentum | kg m s⁻¹ |
| density | kg m⁻³ |
| Pa | kg m⁻¹ s⁻² |
| W | kg m² s⁻³ |
| V | kg m² s⁻³ A⁻¹ |
| Ω | kg m² s⁻³ A⁻² |
| J | kg m² s⁻² |
| N | kg m s⁻² |

### Method: homogeneity check (2.1.2(d))

1. Write the base units of every term.
2. Simplify each side.
3. Terms added or subtracted must match, and both sides must match.
4. Remember that a match does not prove the equation is right. Missing constants are invisible.

Reminder: for p = ρgh, kg m⁻³ × m s⁻² × m = kg m⁻¹ s⁻², which is the pascal.

Second reminder: for the energy stored in a spring, E = ½kx², with k in N m⁻¹ (kg s⁻²). Then kg s⁻² × m² = kg m² s⁻², which is the joule. A version without the square, E = ½kx, gives kg m s⁻², which is a newton, so that version fails the check.

### Prefixes (2.1.2(e))

| p | n | μ | m | c | d | k | M | G | T |
|---|---|---|---|---|---|---|---|---|---|
| 10⁻¹² | 10⁻⁹ | 10⁻⁶ | 10⁻³ | 10⁻² | 10⁻¹ | 10³ | 10⁶ | 10⁹ | 10¹² |

Square or cube the prefix when the unit is squared or cubed: 1 cm² = 10⁻⁴ m², 1 cm³ = 10⁻⁶ m³. A speed in km h⁻¹ becomes m s⁻¹ on division by 3.6. Worked: 3.2 GHz = 3.2 × 10⁹ Hz, and 45 kΩ = 4.5 × 10⁴ Ω.

### Labels (2.1.2(f))

Axis and column headings: quantity / unit, for example current / A or speed / m s⁻¹. Entries are pure numbers.

## 2.2 Errors and uncertainty

| | Systematic | Random |
|---|---|---|
| Effect | same offset in every reading | scatter about the true value |
| Example | zero error, uncalibrated scale | timing by hand, parallax varying |
| Reduced by | calibrate, correct, better method | repeat and average, more readings |
| Damages | accuracy | precision |

- Precise: readings close to each other. Accurate: close to the true value.
- Absolute uncertainty: ± value in the unit. Percentage uncertainty = absolute / value × 100.
- Repeats: a common estimate is half the range. One reading: a common estimate is half the smallest division.
- Quote an uncertainty to one significant figure (occasionally two) and match the decimal places of the value to it.
- A bigger spread in repeats means lower precision. A consistent offset means lower accuracy.

### Combining rules (2.2.1(c))

| Operation | Add what? |
|---|---|
| a + b, a − b | absolute uncertainties |
| a × b, a / b | percentage uncertainties |
| aⁿ | n × the percentage uncertainty |

**Worked reminder.** R = V / I, with V = 12.0 ± 0.1 V and I = 0.50 ± 0.01 A.

```
R = 12.0 / 0.50 = 24.0 Ω
% in V = 0.1 / 12.0 × 100 = 0.83 %
% in I = 0.01 / 0.50 × 100 = 2.0 %
total = 2.83 %, so absolute = 0.0283 × 24.0 = 0.68 Ω
R = 24.0 ± 0.7 Ω
```

**Worked reminder (powers).** If a speed is found from v = √(2gh) and h has a 3.0 % uncertainty, then v has 0.5 × 3.0 = 1.5 % from h, because the power is ½.

**Worked reminder.** A length is found as 120.0 − 45.0 = 75.0 cm, each reading ± 0.5 cm. The absolute uncertainty is 0.5 + 0.5 = 1.0 cm, which is 1.3 %.

### Graphs (2.2.1(d))

- Error bars show the uncertainty in plotted points. Their length is twice the ± value.
- Best-fit line: balance points about it, do not force it through the origin unless the data support it.
- Worst line: the steepest or shallowest line that passes through all the error bars.
- Gradient uncertainty = (steepest − shallowest) / 2. Percentage uncertainty in gradient = that / best gradient × 100.
- Use a large triangle drawn on the line itself for gradients.
- Intercept uncertainty: compare the intercepts of the best and worst lines in the same way.
- Percentage difference = |measured − reference| / reference × 100. The specification names the term without a formula, so show the one you use.

**Worked reminder.** Best gradient 4.8, steepest 5.2, shallowest 4.4. Uncertainty = 0.4, which is 8.3 % of 4.8.

## 2.3 Scalars and vectors

| Scalar (size only) | Vector (size and direction) |
|---|---|
| distance, speed, mass, time | displacement, velocity, acceleration |
| energy, work, power | force, weight, momentum |
| temperature, charge, density | field strength |

### Method: resultant of two coplanar vectors (2.3.1(b)-(c))

1. Draw the first vector.
2. Draw the second from the tip of the first (tip to tail).
3. Join the start to the finish: that is the resultant.
4. Find its size and direction by Pythagoras and tangent (right angle), by the cosine and sine rules (other angles), or by scale drawing with the scale stated.
5. To subtract, reverse the vector and add: a − b = a + (−b).

**Worked reminder.** Forces of 24 N and 10 N act at right angles. Resultant = √(24² + 10²) = 26 N at tan⁻¹(10 / 24) = 22.6° from the 24 N force.

### Method: resolving (2.3.1(d))

1. Choose perpendicular axes and mark the angle θ to one of them.
2. Component along that axis: F cos θ. Component perpendicular to it: F sin θ.
3. Sketch both components with arrows before calculating.

**Worked reminder.** A 5.0 kg block on a 20° slope has weight 5.0 × 9.81 = 49.05 N. Along the slope: 49.05 sin 20° = 16.8 N. Perpendicular to the slope: 49.05 cos 20° = 46.1 N.

## Must-know distinctions

- Precision is about spread, accuracy is about closeness to the true value.
- A zero error is systematic, not random.
- Distance is a scalar, displacement a vector. Speed is a scalar, velocity a vector.
- Absolute uncertainty has a unit, percentage uncertainty does not.
- Homogeneous does not mean correct.

## Quick self-test

1. Write the joule in SI base units.
2. Convert 56 pF to farads.
3. A rectangle is 5.0 ± 0.1 cm by 3.0 ± 0.1 cm. Find its area and absolute uncertainty.
4. A radius is 2.5 ± 0.1 mm. What is the percentage uncertainty in r³?
5. A balance reads 0.5 g with nothing on it. Is that a random or systematic error?
6. Which of work, force, speed and momentum are vectors?
7. Resolve a 15 N force at 40° above the horizontal into horizontal and vertical components.
8. Find the resultant of 5.0 N and 12 N acting at right angles.
9. What is the percentage uncertainty in a length of 8.0 ± 0.2 cm?
10. A measurement of 9.4 m s⁻² is compared with a reference of 9.81 m s⁻². Find the percentage difference.
11. State what must be true of terms that are added in a homogeneous equation.

### Answers

1. kg m² s⁻²
2. 56 × 10⁻¹² = 5.6 × 10⁻¹¹ F
3. Area = 15.0 cm². Percentages: 2.0 % + 3.3 % = 5.3 %, so ± 0.8 cm². Area = 15.0 ± 0.8 cm².
4. 4 % in r, so 3 × 4 % = 12 %.
5. Systematic (a zero error). Subtract 0.5 g from readings.
6. Force and momentum.
7. Horizontal 15 cos 40° = 11.5 N. Vertical 15 sin 40° = 9.64 N.
8. √(5.0² + 12²) = 13 N, at 22.6° to the 12 N force.
9. 0.2 / 8.0 × 100 = 2.5 %.
10. |9.4 − 9.81| / 9.81 × 100 = 4.2 %.
11. They must have the same base units.

## Where marks are usually lost

- Leaving out the unit or giving the wrong prefix power.
- Treating mm² or cm³ as if the prefix were not squared or cubed.
- Adding absolute uncertainties in a quotient.
- Forgetting to double the percentage for a squared term.
- Stating the percentage uncertainty but not converting it back to an absolute value when asked.
- Describing a zero error as random.
- Drawing a worst line that misses some error bars.
- Using plotted points rather than points on the line to find a gradient.
- Giving the angle without saying what it is measured from.
- Using more significant figures in an uncertainty than the data justify.

## Official syllabus

OCR, *Advanced GCE in Physics A (H556)* specification, Version 3.0 (March 2026), for first assessment in 2017. Sections 2.1.1, 2.1.2, 2.2.1 and 2.3.1.
