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
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--01-units-from-base.webp" width="900" height="890" alt="Six base unit boxes (kg, m, s, A, K, mol) above a chain of derived units. The newton, kg m s^-2, times metre gives the joule, divided by second gives the watt, and divided by ampere gives the volt (OCR). Newton divided by metre squared gives the pascal. Cambridge 9702 does not use the mole." loading="lazy">
  <figcaption>Each derived unit is a product or quotient of base units.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--02-prefix-powers.webp" width="900" height="956" alt="Bars show prefixes from tera 10^12 down to femto 10^-15. Deci is used by Cambridge and OCR only; femto by AQA and OxfordAQA only. Examples: 250 mA = 0.25 A and 5.6 MeV = 5.6 x 10^6 eV." loading="lazy">
  <figcaption>Replace the prefix with its power of ten before substituting.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--03-squared-units.webp" width="900" height="890" alt="A 1 cm square divided into 100 one-millimetre squares shows 1 cm^2 = 100 mm^2. Then 1 mm^2 = 10^-6 m^2, 3.5 mm^2 = 3.5 x 10^-6 m^2, 1 cm^3 = 10^-6 m^3 and 7.8 g cm^-3 = 7800 kg m^-3." loading="lazy">
  <figcaption>The prefix is raised to the same power as the unit.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--06-combining-uncertainties.webp" width="900" height="1120" alt="Falling ball: h = 1.200 +/- 0.002 m, t = 0.495 +/- 0.005 s. A bar shows 0.17 percent from h and 1.01 percent from t counted twice, 2.19 percent total, so g = 9.8 +/- 0.2 m s^-2." loading="lazy">
  <figcaption>Percentage uncertainties add for products and quotients; a power multiplies the percentage.</figcaption>
</figure>


### Graphs (2.2.1(d))

- Error bars show the uncertainty in plotted points. Their length is twice the ± value.
- Best-fit line: balance points about it, do not force it through the origin unless the data support it.
- Worst line: the steepest or shallowest line that passes through all the error bars.
- Gradient uncertainty = (steepest − shallowest) / 2. Percentage uncertainty in gradient = that / best gradient × 100.
- Use a large triangle drawn on the line itself for gradients.
- Intercept uncertainty: compare the intercepts of the best and worst lines in the same way.
- Percentage difference = |measured − reference| / reference × 100. The specification names the term without a formula, so show the one you use.

**Worked reminder.** Best gradient 4.8, steepest 5.2, shallowest 4.4. Uncertainty = 0.4, which is 8.3 % of 4.8.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--04-precision-accuracy.webp" width="900" height="1160" alt="Four targets with six shots each: tight and centred (precise and accurate); tight but off-centre (systematic error); spread with mean on the bullseye (random error); spread and off-centre (both)." loading="lazy">
  <figcaption>Systematic error shifts all readings; random error scatters them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--05-repeat-readings.webp" width="900" height="880" alt="Five timings 1.52, 1.58, 1.55, 1.49 and 1.56 s on a number line with mean 1.54 s. Range 0.09 s, half range 0.045 s, 2.9 percent; result 1.54 +/- 0.05 s." loading="lazy">
  <figcaption>Half the range is a common estimate of the uncertainty in a mean.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--07-error-bars-gradient.webp" width="900" height="1030" alt="Extension against force with +/-2 mm error bars. Best line gradient 12.0, steepest 13.0, shallowest 11.0 mm per N, so gradient = 12.0 +/- 1.0 mm per N." loading="lazy">
  <figcaption>Half the difference between the steepest and shallowest gradients.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--09-vector-addition.webp" width="900" height="910" alt="12 N and 7 N forces with 50 degrees between them drawn tip to tail. Resultant 17.3 N at 18.0 degrees to the 12 N force from the cosine rule (interior angle 130) and checked by components 16.50 N and 5.36 N." loading="lazy">
  <figcaption>The resultant joins the start of the first vector to the tip of the last.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--08-order-of-magnitude.webp" width="900" height="910" alt="A log ruler with decades 10^5, 10^6, 10^7 and crossover marks at 3.16 times each power. 2 x 10^5 is order 10^5; 3.4 x 10^5 and 8 x 10^5 are order 10^6; 4 x 10^6 is order 10^7. OxfordAQA gives the crossover as about 3.2." loading="lazy">
  <figcaption>Above 3.16 x 10^n the order of magnitude is 10^(n+1).</figcaption>
</figure>


## Frequently asked questions

**How do you write a column heading in a results table?**
Write the heading as quantity / unit, for example speed / m s⁻¹ or time / s. The entries below are then pure numbers, so units are not written in every cell.

**How do you estimate the uncertainty from repeated readings?**
A common approach is to take half the range of the repeated readings. For a single scale reading, a common estimate is half the smallest division.

**What is the uncertainty rule for a square root?**
A square root is a power of one half, so halve the percentage uncertainty. For any power n, multiply the percentage uncertainty by n.

**Which sections of OCR A Level Physics A cover units, uncertainty and vectors?**
They are sections 2.1 (Physical quantities and units), 2.2 (Making measurements and analysing data) and 2.3 (Nature of quantities) in Module 2 of OCR H556.

## Official syllabus

OCR, *Advanced GCE in Physics A (H556)* specification, Version 3.0 (March 2026), for first assessment in 2017. Sections 2.1.1, 2.1.2, 2.2.1 and 2.3.1.
