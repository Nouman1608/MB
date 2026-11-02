---
title: "OxfordAQA International AS and A-level Physics: SI units and conversions, error treatment and order-of-magnitude estimation (9630) -- Revision Notes"
seoTitle: "OxfordAQA Physics Units, Errors, Estimation Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "SI units and conversions, error treatment and order-of-magnitude estimation"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 97
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-oxfordaqa-alevel"
    subtopic: "use-of-si-units-and-their-prefixes-oxfordaqa"
  - qualification: "a-level"
    topic: "measurements-and-their-errors-oxfordaqa-alevel"
    subtopic: "limitation-of-physical-measurements-oxfordaqa"
  - qualification: "a-level"
    topic: "measurements-and-their-errors-oxfordaqa-alevel"
    subtopic: "estimation-of-physical-quantities-oxfordaqa"
description: "Revision notes on SI units, conversions, uncertainties, error bars, graph gradients and estimation for OxfordAQA International AS and A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

Quick-recall notes for section 3.1 (3.1.1 to 3.1.3) of the *OxfordAQA International AS and A-level Physics (9630)* specification, Version 4.4. Section 3.1 is shared content, assessed at International AS and at International A-level. For full explanations and longer worked examples, use the [study guide](/resources/oxfordaqa-a-level-physics-si-units-and-conversions-error-treatment-and-order-of/). To test yourself afterwards, use the [practice questions](/resources/oxfordaqa-a-level-physics-si-units-and-conversions-error-treatment-and-order-of-practice/), the [course hub](/boards/oxfordaqa/a-level/physics/), the [checklist](/checklists/oxfordaqa/a-level/physics/) and the [free diagnostics](/diagnostics/). An earlier set of [measurements revision notes](/resources/oxfordaqa-a-level-physics-measurements-revision-notes/) is also available.

## 3.1.1 Units and conversions

### Base units to know

| Quantity | Unit | Symbol |
|---|---|---|
| length | metre | m |
| time | second | s |
| current | ampere | A |
| mass | kilogram | kg |
| temperature | kelvin | K |
| amount of substance | mole | mol |

Not required: the candela, definitions of the base quantities, dimensional analysis.

Derived units in base form:

| Unit | Base form |
|---|---|
| newton | kg m s⁻² |
| joule | kg m² s⁻² |
| watt | kg m² s⁻³ |
| pascal | kg m⁻¹ s⁻² |

### Prefix table

| Prefix | T | G | M | k | c | m | μ | n | p | f |
|---|---|---|---|---|---|---|---|---|---|---|
| Power of ten | 12 | 9 | 6 | 3 | −2 | −3 | −6 | −9 | −12 | −15 |

Standard form: A × 10ⁿ with 1 ≤ A < 10.

### Method in steps

1. Write the prefix as a power of ten.
2. If the unit is squared or cubed, apply the same power to the whole factor: 1 cm² = 10⁻⁴ m², 1 mm³ = 10⁻⁹ m³.
3. Multiply or divide by the stated factor for any non-SI unit.
4. Check the size: a smaller unit means a bigger number.

### Energy conversions

| Conversion | Rule |
|---|---|
| eV to J | multiply by 1.60 × 10⁻¹⁹ |
| J to eV | divide by 1.60 × 10⁻¹⁹ |
| kW h to J | multiply by 3.6 × 10⁶ |
| J to kW h | divide by 3.6 × 10⁶ |

The kW h figure comes from 1000 W × 3600 s. Use the value of the elementary charge that the question supplies.

**Worked reminder (eV).** A proton in an accelerator has 7.0 TeV. 7.0 × 10¹² × 1.60 × 10⁻¹⁹ = 1.12 × 10⁻⁶ J.

**Worked reminder (kW h).** An 85 W lamp is left on for 8 h. Energy = 0.085 kW × 8 h = 0.68 kW h = 0.68 × 3.6 × 10⁶ = 2.4 × 10⁶ J (2.448 × 10⁶ J before rounding).

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


## 3.1.2 Errors and uncertainty

### Must-know distinctions

| Pair | Difference |
|---|---|
| Random vs systematic | Random scatters both ways and is cut by averaging; systematic shifts everything the same way and is not cut by averaging |
| Accuracy vs precision | An accurate result sits near the true value; a precise set of readings sits close together |
| Repeatable vs reproducible | Repeatable: same operator and kit. Reproducible: different operator, kit or method |
| Resolution vs accuracy | Resolution is the smallest change displayed; a fine scale can still carry a zero error |

Removing systematic error: zero the instrument, calibrate it, correct for the zero error, change the technique (for example read at eye level to avoid parallax). Reducing random error: repeat and average, time many cycles, use a finer-resolution instrument, or a larger measured quantity.

### Forms of uncertainty

| Form | Formula |
|---|---|
| absolute | Δx (with unit) |
| fractional | Δx / x |
| percentage | Δx / x × 100% |

Repeat readings: mean ± half-range is a common estimate. Resolution of a single reading sets a minimum.

### Combination rules

| Calculation | Combine by |
|---|---|
| sum or difference | adding absolute uncertainties |
| product or quotient | adding percentage uncertainties |
| power n (including roots) | percentage uncertainty × n |

No trigonometric or logarithmic combinations are required.

**Worked reminder.** R = V/I with V = 6.0 ± 0.1 V and I = 0.25 ± 0.01 A.
R = 24 Ω. Percentage uncertainties: 1.67% and 4.0%, total 5.67%. Absolute = 0.0567 × 24 = 1.4 Ω, giving **24 ± 1 Ω**.

**Worked reminder (root).** For T ∝ √l with l = 0.640 ± 0.004 m, the percentage uncertainty in l is 0.625%, so in T it is 0.625 ÷ 2 = 0.31%.

### Significant figures

The uncertainty is normally quoted to 1 significant figure, and the value is given to the same decimal place. A value written with more digits than the uncertainty supports, such as 9.795 ± 0.2, is inconsistent. A recorded reading should show the resolution of the instrument.

### Graphs

- Error bar: from value − uncertainty to value + uncertainty, vertical for y and horizontal for x.
- The two extreme lines should still pass through every error bar.
- Gradient uncertainty: subtract the shallow gradient from the steep one and halve it.
- Intercept uncertainty = (larger intercept − smaller intercept) ÷ 2, using the same two extreme lines.
- No error bars: use the extreme lines that still fit the scatter reasonably, then the same half-difference method.
- A line through the origin expected, but with an intercept that is much larger than its uncertainty, points to a systematic error.

**Method in steps**

1. Plot the points and draw the best-fit line.
2. Draw the steepest acceptable line and the shallowest acceptable line.
3. Read two well-separated points on each line and calculate its gradient.
4. Take half the difference for the gradient uncertainty.
5. Read each line's intercept and take half the difference.
6. Convert to the required quantity (for example a = gradient ÷ 2) and carry the percentage uncertainty across.

**Worked reminder (using a gradient).** A graph of T² against l for a pendulum has gradient 4.0 ± 0.2 s² m⁻¹, and T² = (4π²/g) l. Then g = 4π² ÷ gradient = 9.87 m s⁻². The gradient's percentage uncertainty is 5%, and g depends on its reciprocal, so g also has 5% uncertainty: 0.49 m s⁻². Result: **g = 9.9 ± 0.5 m s⁻²**.

Whenever a quantity is found from a gradient or intercept, carry the percentage uncertainty into it using the product, quotient and power rules above.

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


## 3.1.3 Estimation

- Nearest order of magnitude means the nearest power of ten. A common convention: leading figure below about 3.2 rounds down, above rounds up.
- Reference sizes: person about 10² kg; atom about 10⁻¹⁰ m; Earth's radius about 10⁷ m.
- State each estimate, combine with an equation, then round the final answer.
- Check an estimate by asking whether the answer is plausible.

**Worked reminder.** A sprinter of mass 70 kg runs at 8 m s⁻¹. Kinetic energy = ½ × 70 × 8² = 2240 J, so about **10³ J**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--08-order-of-magnitude.webp" width="900" height="910" alt="A log ruler with decades 10^5, 10^6, 10^7 and crossover marks at 3.16 times each power. 2 x 10^5 is order 10^5; 3.4 x 10^5 and 8 x 10^5 are order 10^6; 4 x 10^6 is order 10^7. OxfordAQA gives the crossover as about 3.2." loading="lazy">
  <figcaption>Above 3.16 x 10^n the order of magnitude is 10^(n+1).</figcaption>
</figure>


## Quick self-test

1. Convert 450 cm³ to m³.
2. Write 2.5 ns in seconds, in standard form.
3. Convert 6.4 × 10⁻¹⁰ J into GeV (1 eV = 1.60 × 10⁻¹⁹ J).
4. A 2.5 kW oven runs for 3.0 h. State the energy in kW h and in J.
5. Readings of a length are all 0.5 cm too high. Name the type of error and give one remedy.
6. Two positions are 3.50 ± 0.07 m and 1.20 ± 0.05 m. Give the separation and its uncertainty.
7. A cube edge is 4.00 ± 0.08 cm. State the percentage uncertainty in the volume.
8. The steepest and shallowest lines have gradients 5.2 and 4.6, with the best-fit gradient 4.9. State the gradient with its uncertainty.
9. Write 0.3478 ± 0.0212 with a suitable number of significant figures.
10. State the order of magnitude of 2.9 × 10⁸ and of 3.4 × 10⁸.

### Answers

1. 450 × 10⁻⁶ = **4.5 × 10⁻⁴ m³**.
2. **2.5 × 10⁻⁹ s**.
3. 6.4 × 10⁻¹⁰ ÷ 1.60 × 10⁻¹⁹ = 4.0 × 10⁹ eV = **4.0 GeV**.
4. 2.5 × 3.0 = **7.5 kW h**; 7.5 × 3.6 × 10⁶ = **2.7 × 10⁷ J**.
5. **Systematic** (zero or offset); correct the zero, recalibrate, or subtract the offset.
6. 3.50 − 1.20 = 2.30 m; 0.07 + 0.05 = 0.12 m, so **2.30 ± 0.12 m** (or 2.3 ± 0.1 m).
7. 0.08 ÷ 4.00 = 2%; cubed gives **6%**.
8. (5.2 − 4.6) ÷ 2 = 0.3, so **4.9 ± 0.3**.
9. **0.35 ± 0.02**.
10. **10⁸** and **10⁹**.

## Where marks are usually lost

- Using 10⁻³ for mm² instead of 10⁻⁶.
- Putting grams into a formula that needs kilograms.
- Multiplying when dividing was needed between kW h and J, or between eV and J.
- Adding percentage uncertainties for a sum, or absolute ones for a product.
- Not doubling (or tripling) the percentage uncertainty for squared (or cubed) quantities.
- Saying that repeating readings removes a zero error.
- Mixing up accuracy and precision, or giving resolution as if it were accuracy.
- Quoting an answer to more decimal places than its uncertainty.
- Drawing extreme lines that miss some error bars.
- Giving an estimate as an exact figure with no stated assumptions.

## Official syllabus

*OxfordAQA International AS and A-level Physics (9630)*, Version 4.4, section 3.1 Measurements and their errors, for International AS and A-level exams from May/June 2020 onwards. Published by OxfordAQA.
