---
title: "OxfordAQA International AS and A-level Physics: SI units and conversions, error treatment and order-of-magnitude estimation (9630)"
seoTitle: "OxfordAQA Physics Units, Errors and Estimation Guide"
resourceType: "study-guides"
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
description: "Study guide to SI units, conversions, uncertainty calculations, graph gradients and estimation for OxfordAQA International AS and A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide is aligned to the *OxfordAQA International AS and A-level Physics (9630)* specification, Version 4.4, for International AS and A-level exams from May/June 2020 onwards. It covers section 3.1: 3.1.1 use of SI units and their prefixes, 3.1.2 limitation of physical measurements and 3.1.3 estimation of physical quantities. Section 3.1 is shared content: it is assessed in the International AS and in the full International A-level, and the specification gives no AS/A split inside it.

Use it with the [revision notes](/resources/oxfordaqa-a-level-physics-si-units-and-conversions-error-treatment-and-order-of-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-physics-si-units-and-conversions-error-treatment-and-order-of-practice/). The earlier [measurements and their errors guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/) gives a shorter overview. For the course hub and checklist, see [OxfordAQA A-level Physics](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/). To test yourself cold, try the [free diagnostics](/diagnostics/).

## What this unit covers

| Section | You must be able to |
|---|---|
| 3.1.1 | Use the SI base units for mass, length, time, amount of substance, temperature and current; use derived units; work with the SI prefixes (T, G, M, k, c, m, μ, n, p, f) and standard form; convert between units of one quantity (for example J and eV, J and kW h) |
| 3.1.2 | Identify random and systematic errors and suggest how to remove them; use precision, repeatability, reproducibility, resolution and accuracy; use absolute, fractional and percentage uncertainties; combine them for sums, differences, products, quotients and powers; draw error bars; find the uncertainty in a gradient and intercept; link significant figures to uncertainty |
| 3.1.3 | Estimate quantities to the nearest order of magnitude and use them to make derived estimates |

The specification says you do not need the candela, the definitions of the base quantities, or dimensional analysis. Combinations involving trigonometric or logarithmic functions are not required either.

## 3.1.1 SI units, prefixes and conversions

### Base and derived units

| Quantity | Base unit | Symbol |
|---|---|---|
| length | metre | m |
| time | second | s |
| current | ampere | A |
| mass | kilogram | kg |
| temperature | kelvin | K |
| amount of substance | mole | mol |

A derived unit is a product or quotient of base units. Useful ones, in base units: the newton is kg m s⁻², the joule is kg m² s⁻², the watt is kg m² s⁻³ and the pascal is kg m⁻¹ s⁻². The kilogram is the base unit of mass, so a gram is 10⁻³ kg.

### Prefixes and standard form

| T | G | M | k | c | m | μ | n | p | f |
|---|---|---|---|---|---|---|---|---|---|
| 10¹² | 10⁹ | 10⁶ | 10³ | 10⁻² | 10⁻³ | 10⁻⁶ | 10⁻⁹ | 10⁻¹² | 10⁻¹⁵ |

Standard form is A × 10ⁿ with 1 ≤ A < 10. A prefix belongs to the unit it is attached to, so it is raised to any power the unit carries.

**Method for conversions.** Replace the prefix with its power of ten, apply any power to the whole bracket, then convert any non-SI unit with its stated factor.

### Worked example 1: squared and cubed units

Convert 3.5 mm² to m². One mm is 10⁻³ m, so 1 mm² is (10⁻³)² m² = 10⁻⁶ m².

3.5 mm² = 3.5 × 10⁻⁶ m².

Convert 7.8 g cm⁻³ to kg m⁻³. One g is 10⁻³ kg and one cm³ is (10⁻²)³ m³ = 10⁻⁶ m³.

7.8 × 10⁻³ kg ÷ 10⁻⁶ m³ = 7.8 × 10³ kg m⁻³ = 7800 kg m⁻³.

### Joules and electronvolts

The electronvolt is the energy gained by an electron moving through a potential difference of one volt, so 1 eV = e × 1 V = 1.60 × 10⁻¹⁹ J (the value of e is given as data). Multiply by 1.60 × 10⁻¹⁹ to go from eV to J; divide to go back.

**Worked example 2.** An alpha particle has kinetic energy 5.6 MeV. Express it in J.

5.6 MeV = 5.6 × 10⁶ eV.
Energy = 5.6 × 10⁶ × 1.60 × 10⁻¹⁹ = 8.96 × 10⁻¹³ J, which is **9.0 × 10⁻¹³ J** to 2 significant figures.

### Joules and kilowatt-hours

One kW h is 1 kW for 1 h = 1000 W × 3600 s = 3.6 × 10⁶ J.

**Worked example 3.** A 1.8 kW heater runs for 50 minutes.

Time = 50/60 h = 0.833 h.
Energy = 1.8 kW × 0.833 h = **1.5 kW h**.
In joules: 1.5 × 3.6 × 10⁶ = **5.4 × 10⁶ J**.

## 3.1.2 Limitation of physical measurements

### Types of error and how to reduce them

| | Random error | Systematic error |
|---|---|---|
| Effect | Readings scatter unpredictably above and below the true value | Every reading is shifted the same way |
| Typical causes | Reaction time, reading a scale by eye, fluctuating conditions | Zero error, miscalibrated instrument, reading from the wrong angle (parallax) |
| Reduced by | Repeating and averaging; larger quantities (for example timing many oscillations); finer-resolution instruments | Checking the zero; calibrating against a known standard; changing the method |
| Repeating helps? | Yes | No |

On a graph, a constant zero error moves all points the same way and shifts the line so that it no longer passes through the expected intercept, but leaves the gradient unchanged. Random error shows as scatter about the line.

### Words you must use precisely

- **Accuracy**: a result is accurate when it lies close to the true value.
- **Precision**: how closely repeated readings agree with each other (small spread).
- **Repeatability**: the same person, method and equipment give agreeing results.
- **Reproducibility**: different people, equipment or methods give agreeing results.
- **Resolution**: the least change in the measured quantity that the instrument is able to display.

Readings can be precise but inaccurate (systematic error). Finer resolution reduces the uncertainty from reading a scale; it does not remove a zero error.

### Forms of uncertainty

For a result x with absolute uncertainty Δx:

- absolute uncertainty: Δx, in the unit of x
- fractional uncertainty: Δx / x
- percentage uncertainty: (Δx / x) × 100%

For repeated readings, the mean is the best value. A common estimate of its uncertainty is half the range, (largest − smallest) ÷ 2, unless the resolution is larger.

Worked example 4. Five timings of a trolley are 2.46, 2.52, 2.49, 2.44 and 2.51 s. Mean = 12.42 ÷ 5 = 2.484 s. Half-range = (2.52 − 2.44) ÷ 2 = 0.04 s. Result: **2.48 ± 0.04 s**, a percentage uncertainty of 0.04/2.48 × 100 = 1.6%.

### Combining uncertainties

| Calculation | What to do with the uncertainties |
|---|---|
| sum or difference of two quantities | add the absolute uncertainties |
| product or quotient of two quantities | add the percentage (or fractional) uncertainties |
| aⁿ | the percentage uncertainty becomes n times larger (n can be negative or fractional, as for a root) |

Never subtract uncertainties: a difference of two readings is less certain in percentage terms, not more.

### Worked example 5: products and powers

A ball is dropped from rest through h = 1.200 ± 0.002 m and takes t = 0.495 ± 0.005 s. Use g = 2h/t².

g = 2 × 1.200 ÷ 0.495² = 9.795 m s⁻².
Percentage uncertainty in h = 0.002/1.200 × 100 = 0.17%.
Percentage uncertainty in t = 0.005/0.495 × 100 = 1.01%; t is squared, so this contributes 2 × 1.01 = 2.02%.
Total = 0.17 + 2.02 = 2.19%.
Absolute uncertainty = 2.19% × 9.795 = 0.21 m s⁻².

Result: **g = 9.8 ± 0.2 m s⁻²**.

### Worked example 6: a difference

A liquid warms from 21.0 ± 0.5 °C to 63.5 ± 0.5 °C. The rise is 63.5 − 21.0 = 42.5 °C. The absolute uncertainties add: 0.5 + 0.5 = 1.0 °C. Rise = **42.5 ± 1.0 °C**, which is 2.4%.

### Significant figures and uncertainty

Quote the uncertainty to one significant figure (two at most), then give the value to the same decimal place. The result in example 5 is 9.8 ± 0.2, not 9.795 ± 0.2142 and not 9.8 ± 0.21. Record each reading to the resolution of the instrument: 125.30 g implies a resolution of 0.01 g.

### Error bars, gradient and intercept

An error bar runs from the plotted value minus its uncertainty to the value plus its uncertainty. Vertical bars show uncertainty in y and horizontal bars show uncertainty in x.

**With error bars.** Draw the best-fit line. Then draw the steepest and the shallowest straight lines that still pass through all the error bars. Then:

- best gradient = gradient of the best-fit line
- uncertainty in gradient = half the difference between the steepest and shallowest gradients
- best intercept = intercept of the best-fit line; uncertainty = half the difference between the intercepts of the two extreme lines

**Without error bars.** Use the same method, but draw the extreme lines that still describe the scatter of the points reasonably, so that the lines are judged against the spread of the points.

### Worked example 7: gradient and intercept

A trolley starts with speed u and accelerates uniformly. Graph v² against s, with each value of v² having an uncertainty of ±0.08 m² s⁻².

| s / m | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| v² / m² s⁻² | 0.55 | 0.98 | 1.52 | 1.93 | 2.51 |

The best-fit line has gradient 2.44 and intercept 0.04 m² s⁻². The steepest line through all the bars passes through (0.20, 0.47) and (0.80, 2.01): gradient 2.57, intercept −0.04. The shallowest passes through (0.40, 1.06) and (1.00, 2.43): gradient 2.28, intercept 0.15.

Gradient uncertainty = (2.57 − 2.28) ÷ 2 = 0.14 (to 2 s.f.), so gradient = 2.44 ± 0.14 m s⁻².
Intercept uncertainty = (0.15 − (−0.04)) ÷ 2 = 0.095, so intercept = 0.04 ± 0.10 m² s⁻².

Since v² = u² + 2as, the gradient is 2a, so a = 1.22 ± 0.07 m s⁻². The intercept range includes zero, which agrees with a start from rest.

## 3.1.3 Estimation of physical quantities

You estimate each quantity to the nearest power of ten, then combine estimates using physics. A convention you can apply consistently: a value A × 10ⁿ with A below about 3.2 has order of magnitude 10ⁿ, and above that rounds up to 10ⁿ⁺¹ (3.2 is roughly the square root of 10).

Useful anchors: a person has mass about 10² kg; an atom has diameter about 10⁻¹⁰ m; the Earth's radius is about 10⁷ m.

**Worked example 8: power.** Estimate the power a person develops running up a flight of stairs.
Estimates: mass 60 kg, height gained 3 m, time 6 s.
Work = mgh = 60 × 9.8 × 3 = 1764 J (about 10³ J). Power = 1764 ÷ 6 = 294 W, so about **10² W**.

**Worked example 9: a boundary.** Sound crosses a 100 m pitch at about 340 m s⁻¹.
Time = 100 ÷ 340 = 0.29 s. The leading figure 2.9 is below 3.2, so the order of magnitude is **10⁻¹ s**.

**Worked example 10: counting.** A hair is about 70 μm across and an atom about 2 × 10⁻¹⁰ m. Atoms across the hair = 70 × 10⁻⁶ ÷ (2 × 10⁻¹⁰) = 3.5 × 10⁵, so about **10⁶**.

Rounding every intermediate estimate to a power of ten before multiplying can shift the answer by a factor of ten, so round at the end.

## Common errors

- Converting mm² or cm³ with the linear factor.
- Using grams in a formula that needs kilograms.
- Dividing instead of multiplying by 3.6 × 10⁶ when going from kW h to J.
- Subtracting uncertainties when two readings are subtracted.
- Forgetting that a squared quantity doubles its percentage uncertainty.
- Quoting a result with more decimal places than its uncertainty.
- Treating the steepest line as the best-fit line.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-a-level-physics-si-units-and-conversions-error-treatment-and-order-of-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-physics-si-units-and-conversions-error-treatment-and-order-of-revision-notes/) to check recall. The [earlier measurements practice set](/resources/oxfordaqa-a-level-physics-measurements-practice/) gives extra questions.

## Official syllabus

*OxfordAQA International AS and A-level Physics (9630)*, Version 4.4, section 3.1 Measurements and their errors, for International AS and A-level exams from May/June 2020 onwards. Published by OxfordAQA.
