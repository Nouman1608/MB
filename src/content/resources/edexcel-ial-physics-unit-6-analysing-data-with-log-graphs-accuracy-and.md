---
title: "Pearson Edexcel International A Level Physics: Unit 6: analysing data, log graphs and uncertainties (YPH11)"
seoTitle: "Edexcel IAL Physics Unit 6 Analysis Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
boards: ["edexcel"]
qualifications: ["a-level"]
topic: "Unit 6: analysing data with log graphs, accuracy and compounded uncertainties"
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-6-practical-skills-in-physics-ii"
    subtopic: "analysis-unit-6-yph11"
description: "Study guide to section 6.5 Analysis in Pearson Edexcel International A Level Physics (YPH11): log graphs, accuracy, precision and uncertainties."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by hassan."
---

This study guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics specification (YPH11), Issue 3, and covers section 6.5 Analysis in Unit 6: Practical Skills in Physics II. Unit 6 belongs to IA2, the second half of the International Advanced Level. There are no tiers. Unit 6 builds on the Unit 3 skills, and it asks for things Unit 3 does not: you compound percentage uncertainties, you use the terms precision, accuracy and sensitivity, and you may work with log graphs.

Related pages: the [Edexcel International A Level Physics hub](/boards/edexcel/a-level/physics/), the [printable checklist](/checklists/edexcel/a-level/physics/), the [revision notes](/resources/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and-revision-notes/) and the [practice questions](/resources/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and-practice/). For the physics behind the data sets, see [nuclear decay](/resources/edexcel-ial-physics-nuclear-decay/), [electric and magnetic fields](/resources/edexcel-ial-physics-electric-and-magnetic-fields/) and [oscillations](/resources/edexcel-ial-physics-oscillations-ial/). To find your weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## What section 6.5 asks you to do

| Specification bullet | What you must be able to do |
|---|---|
| Calculations | Give answers to the correct number of significant figures |
| Graphs | Choose a scale and units; the graph could be logarithmic |
| Units | Use correct units throughout |
| Trend | Comment on the trend or pattern |
| Relationship or constant | Use a graph, for example a gradient from a large triangle |
| Vocabulary | Use precision, accuracy and sensitivity appropriately |
| Errors and improvements | Suggest realistic modifications to reduce errors and to improve the experiment |
| Uncertainties | Discuss them qualitatively and quantitatively; compound percentage uncertainties; use half the resolution for a single reading and half the range for repeats |

Students may be given a set of experimental results to analyse, so every skill below is practised on data.

## Significant figures and units

Write a calculated answer to the same number of significant figures as the least precise quantity that went into it. Raw readings are recorded to the resolution of the instrument, so one variable has a consistent number of decimal places. Processed values are usually given to 3 significant figures, which is what you can confidently plot.

**Worked example 1.** A trolley travels 0.910 m in 1.84 s. Both values have 3 significant figures.

```
v = s / t = 0.910 / 1.84 = 0.49456... m s^-1
```

Answer: **v = 0.495 m s⁻¹**. Quoting 0.4945652 would claim far more than the data support.

Check units at every stage. Convert before substituting: 48.2 g is 48.2 × 10⁻³ kg, and 24 mm is 24 × 10⁻³ m. A mixed-up prefix gives a result that is wrong by a power of ten, and the unit will not match the quantity.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--11-sig-figs-trolley-speed.webp" width="900" height="680" alt="A trolley travels 0.910 m in 1.84 s, both 3 s.f. The calculator shows 0.4945652, but the answer is quoted to 3 s.f.: 0.495 m/s." loading="lazy">
  <figcaption>Quote a result to the s.f. of the data.</figcaption>
</figure>


## Uncertainty in a measurement

### Single reading: half the resolution

The resolution is the smallest interval the instrument shows. A single reading has an uncertainty of half the resolution. A micrometer with resolution 0.01 mm reads a wire diameter of 0.46 mm, so the uncertainty is ±0.005 mm.

```
percentage uncertainty = (uncertainty / reading) × 100% = (0.005 / 0.46) × 100% = 1.1%
```

Quote percentage uncertainties to 1 or 2 significant figures.

### Repeated readings: half the range

For repeats, use half the range of the readings as the uncertainty in the mean.

**Worked example 2.** Four timings of a trolley on a ramp: 2.31 s, 2.45 s, 2.38 s, 2.42 s.

```
mean = (2.31 + 2.45 + 2.38 + 2.42) / 4 = 2.39 s
half range = (2.45 - 2.31) / 2 = 0.07 s
percentage uncertainty = (0.07 / 2.39) × 100% = 2.9%
```

So the time is **2.39 s ± 0.07 s, or ±2.9%**. If every repeat gave the same value, use half the resolution instead. A percentage uncertainty below about 5% suggests the measurement is repeatable.

Percentage uncertainty is useful because it does not change when a quantity is rescaled. A radius has the same percentage uncertainty as its diameter.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--09-micrometer-half-resolution.webp" width="900" height="660" alt="A zoomed micrometer scale with a reading of 0.46 mm and a band of +/-0.005 mm, half the 0.01 mm resolution. 0.005 / 0.46 x 100 = 1.1%." loading="lazy">
  <figcaption>Half the resolution gives the uncertainty; divide by the reading for a percentage.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--05-repeat-readings.webp" width="900" height="880" alt="Five timings 1.52, 1.58, 1.55, 1.49 and 1.56 s on a number line with mean 1.54 s. Range 0.09 s, half range 0.045 s, 2.9 percent; result 1.54 +/- 0.05 s." loading="lazy">
  <figcaption>Half the range is a common estimate of the uncertainty in a mean.</figcaption>
</figure>


## Compounding uncertainties

Use these rules when the measured quantities are independent.

| Calculation | Rule |
|---|---|
| Multiply or divide | Add the percentage uncertainties |
| Raise to a power n | Multiply the percentage uncertainty by n |
| Add or subtract | Add the absolute uncertainties |

**Worked example 3.** Resistivity from ρ = RA/L, with A = πd²/4. A wire has R = 2.9 Ω ± 0.1 Ω, length L = 0.650 m ± 0.002 m and diameter d = 0.46 mm ± 0.005 mm.

```
% in R = 0.1 / 2.9 × 100 = 3.4%
% in L = 0.002 / 0.650 × 100 = 0.31%
% in d = 0.005 / 0.46 × 100 = 1.1%
ρ = R π d² / (4L) = 2.9 × π × (0.46 × 10^-3)² / (4 × 0.650) = 7.4 × 10^-7 Ω m
total % = 3.4% + 0.31% + 2 × 1.1% = 5.9%
```

Then ρ = (7.4 × 10⁻⁷ ± 5.9%) Ω m, which is **7.4 × 10⁻⁷ Ω m ± 0.44 × 10⁻⁷ Ω m**. The constants π and 4 have no uncertainty. The diameter contributes 2.2% because it is squared, second only to the resistance at 3.4%, which tells you which measurements to improve first.

**Worked example 4: subtraction.** A liquid warms from 22.0 °C to 41.5 °C, each reading ±0.5 °C. The rise is 19.5 °C, and the absolute uncertainties add: ±1.0 °C. As a percentage, (1.0 / 19.5) × 100% = 5.1%. Subtraction of similar numbers makes the percentage uncertainty larger, so a small difference is measured badly.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--10-subtraction-rule-temperature-rise.webp" width="900" height="680" alt="Two temperature readings, 22.0 and 41.5 degrees C, each +/-0.5. The rise is 19.5 C and the absolute uncertainties add to +/-1.0 C, which is 5.1% of the rise." loading="lazy">
  <figcaption>When you subtract, add the absolute uncertainties.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--06-combining-uncertainties.webp" width="900" height="1120" alt="Falling ball: h = 1.200 +/- 0.002 m, t = 0.495 +/- 0.005 s. A bar shows 0.17 percent from h and 1.01 percent from t counted twice, 2.19 percent total, so g = 9.8 +/- 0.2 m s^-2." loading="lazy">
  <figcaption>Percentage uncertainties add for products and quotients; a power multiplies the percentage.</figcaption>
</figure>


## Graphs and log graphs

For any graph: put the independent variable on the horizontal axis, label each axis with the quantity and its unit, choose a scale that uses more than half of each axis, avoid awkward scales such as 3 or 7 squares per unit, and draw a thin best-fit line with points balanced either side. Comment on the pattern: straight, curved, through the origin or not, and whether any point is off the trend. A point well away from the line should be checked and, if possible, remeasured.

### Gradient with a large triangle

Choose two points on the line, not data points, as far apart as the line allows. Read them to half a small square. A small triangle magnifies reading errors, and its gradient is less trustworthy.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-3-processing-results-graphs-and-uncertainties--03-gradient-large-triangle.webp" width="900" height="1010" alt="Graph of v squared against s with six points and a best-fit line through the origin. A large triangle from (0.20, 0.80) to (1.20, 4.76) has base 1.00 m and height 3.96. The gradient is 3.96 m s^-2 and, since v^2 = 2as, a = 1.98 m s^-2." loading="lazy">
  <figcaption>Take the gradient from two points far apart on the best-fit line, then halve it to get a.</figcaption>
</figure>


### Power laws: log y against log x

If y = kxⁿ, taking logs gives log y = n log x + log k. A plot of log y against log x is a straight line with **gradient n** and **intercept log k**. Both log₁₀ and ln work, and n comes out the same. Logs have no units, so label the axes as log (quantity/unit).

**Worked example 5.** A light meter gives these readings at distance d from a small lamp.

| d / m | 0.20 | 0.30 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|---|
| I / arbitrary units | 128 | 57.5 | 32.9 | 14.2 | 8.1 | 5.2 |
| log d | -0.699 | -0.523 | -0.398 | -0.222 | -0.097 | 0.000 |
| log I | 2.107 | 1.760 | 1.517 | 1.152 | 0.908 | 0.716 |

The points lie on a straight line. Take two points on the best-fit line: (-0.70, 2.11) and (0.00, 0.72).

```
gradient = (0.72 - 2.11) / (0.00 - (-0.70)) = -1.39 / 0.70 = -2.0
```

The intercept is 0.72, so k = 10^0.72 = 5.2. The relationship is **I = 5.2 d⁻²**, an inverse-square law. The graph also tests the law: a straight log-log line shows a power law, and the gradient names the power.

### Exponentials: ln y against x

If y = Ae^(-bx), then ln y = ln A - bx. A plot of ln y against x is a straight line with **gradient -b** and intercept ln A. Plotting log₁₀ y instead gives a gradient of -0.434b, because log₁₀ e is about 0.434. Only the variable on the vertical axis is logged.

**Worked example 6.** A capacitor discharges through a resistor. Readings of potential difference V:

| t / s | 0 | 20 | 40 | 60 | 80 | 100 |
|---|---|---|---|---|---|---|
| V / V | 9.0 | 6.0 | 4.0 | 2.7 | 1.8 | 1.2 |
| ln (V / V) | 2.20 | 1.79 | 1.39 | 0.99 | 0.59 | 0.18 |

A straight line of ln V against t confirms V = V₀e^(-t/RC). Using (0, 2.20) and (100, 0.18):

```
gradient = (0.18 - 2.20) / 100 = -0.0202 s^-1
time constant RC = 1 / 0.0202 = 49.5 s
```

If R = 150 kΩ, then C = 49.5 / (1.5 × 10⁵) = **3.3 × 10⁻⁴ F**, which is 330 μF.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--01-loglog-inverse-square.webp" width="900" height="1040" alt="Graph of log I against log d for six readings on a straight line. A large triangle has change in x 0.70 and change in y -1.39, so the gradient is -2.0 and the power is -2. The intercept 0.72 gives k = 5.2, so I = 5.2 d^-2, an inverse square law." loading="lazy">
  <figcaption>Plot log y against log x: the gradient is the power and the intercept is log k.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--02-ln-v-against-t.webp" width="900" height="1030" alt="Graph of ln V against t for six readings lying on a straight line from (0 s, 2.20) to (100 s, 0.18). The gradient is -0.0202 per second, so RC = 49.5 s and, with R = 150 kilohm, C = 330 microfarad." loading="lazy">
  <figcaption>Plot ln y against x for an exponential: the gradient is -1/RC.</figcaption>
</figure>


## Precision, accuracy and sensitivity

These words have exact meanings in this specification.

* **Accuracy**: how close a result is to the true value. It cannot be given a number, and it is affected by both random and systematic errors.
* **Precision**: how closely repeated measurements agree. It is affected only by random effects, and a small spread means high precision.
* **Resolution**: the smallest measuring interval, and the source of uncertainty in a single reading.
* **Sensitivity**: a term the specification asks you to use but does not define in its glossary. In ordinary use it means how large a change in the reading an instrument gives for a small change in the quantity measured. A more sensitive instrument responds more to small changes. Say how the instrument responds, rather than saying it is "good".

A data set can be precise but inaccurate, for example when a top-pan balance that has not been zeroed gives readings that agree closely but all sit above the true mass. A systematic error shifts every reading the same way; a random error scatters them.

### Judging accuracy from uncertainty

If there is a known value, compare it with the range your result allows. **Worked example 7.** A student finds the speed of sound as 338 m s⁻¹ with a percentage uncertainty of 2%.

```
range = 338 ± 2% = 331 to 345 m s^-1
```

The accepted value of about 343 m s⁻¹ lies inside the range, so the result is accurate within the uncertainty. If no percentage uncertainty is known, use the percentage difference instead: (343 - 338)/343 × 100% = 1.5%, which is below 5%, so the result is accurate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--12-accuracy-from-uncertainty-range.webp" width="900" height="700" alt="A number line with the result 338 m/s and its +/-2% range 331 to 345. The accepted value 343 lies inside, so the result is accurate within the uncertainty. Without a stated uncertainty, a 1.5% difference (below 5%) also counts as accurate." loading="lazy">
  <figcaption>Compare the accepted value with the range your result allows.</figcaption>
</figure>


### Reading a graph for errors

A line that should pass through the origin but has a clear intercept indicates a systematic error, such as a zero error. A large scatter of points about the line indicates large uncertainty, probably from random errors. The specification says you are not expected to add error bars.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--04-precision-accuracy.webp" width="900" height="1160" alt="Four targets with six shots each: tight and centred (precise and accurate); tight but off-centre (systematic error); spread with mean on the bullseye (random error); spread and off-centre (both)." loading="lazy">
  <figcaption>Systematic error shifts all readings; random error scatters them.</figcaption>
</figure>


## Reducing errors and improving the experiment

Be specific and realistic. Name the change, the variable it affects and the effect on the result.

* Timing: time 20 oscillations, not one, which cuts the percentage uncertainty from reaction time.
* Length: use a set square to check a rule is vertical, or a micrometer for a thin wire in place of a rule.
* Zero error: check the instrument reads zero, and subtract a known zero error from each reading.
* Range and number: take more readings over a wider range and repeat each one.
* Control variables: keep temperature or current constant, and let a wire cool between readings.
* Improve the method: use a data logger or light gate rather than a stopwatch, and plot a straight-line graph so that the fit tests the law.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-practical-endorsement-skills-apparatus-and-techniques--02-pe-pendulum-many-oscillations.webp" width="900" height="810" alt="Twenty oscillations take 36.8 s, so T is 1.84 s. The 0.2 s start/stop uncertainty shrinks to 0.01 s in T, 0.54 %, whereas timing one oscillation gives 11 %. A fiducial marker at equilibrium gives a clear start and stop point." loading="lazy">
  <figcaption>Timing 20 oscillations makes the percentage uncertainty twenty times smaller.</figcaption>
</figure>


## Common errors

* Using half the range for a single reading, or the resolution itself rather than half of it.
* Adding percentage uncertainties for a sum or difference, where absolute uncertainties are added.
* Forgetting to multiply by the power, so a squared diameter gets 1.1% rather than 2.2%.
* Reading the gradient from two data points that are close together.
* Taking logs of a quantity with its units still attached; take the log of the number.
* Saying a result is "accurate" because it is repeatable. That describes precision.

## Frequently asked questions

**What does Edexcel IAL Unit 6 add to the Unit 3 practical skills?**
Unit 6 asks you to compound percentage uncertainties, use the terms precision, accuracy and sensitivity, and possibly work with log graphs. Unit 3 does not ask for these.

**Do you take the log of a quantity's units?**
No. Logs have no units, so take the log of the number only and label the axis as log (quantity/unit).

**Why is a small temperature rise measured badly?**
In a subtraction the absolute uncertainties add, so the difference of two similar numbers has a large percentage uncertainty. A rise of 19.5 °C ± 1.0 °C, for example, is uncertain by 5.1%.

**Are error bars needed on Edexcel IAL Unit 6 graphs?**
No. The specification says you are not expected to add error bars.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics specification (YPH11), Issue 3, Pearson Education Limited. This guide covers section 6.5 Analysis, with the glossary of Appendix 10: Uncertainties and practical work used for the key terms.
