---
title: "Pearson Edexcel International A Level Physics: Unit 6: analysing data, log graphs and uncertainties (YPH11) -- Revision Notes"
seoTitle: "Edexcel IAL Physics Unit 6 Analysis Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for section 6.5 Analysis in Pearson Edexcel International A Level Physics (YPH11): rules, method boxes, self-test and common lost marks."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These revision notes condense section 6.5 Analysis of Unit 6: Practical Skills in Physics II in the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics specification (YPH11), Issue 3. Unit 6 is part of IA2 and has no tiers. For full explanations and longer worked examples, use the [study guide](/resources/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and/). Then test yourself with the [practice questions](/resources/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and-practice/), check coverage on the [printable checklist](/checklists/edexcel/a-level/physics/), see the [course hub](/boards/edexcel/a-level/physics/) and take a [free 10-minute diagnostic](/diagnostics/).

## Key terms

| Term | Meaning in this specification |
|---|---|
| Accuracy | Closeness of a result to the true value; cannot be quantified; affected by random and systematic errors |
| Precision | Closeness of agreement between repeated measurements; affected only by random effects |
| Repeatability | Precision when one operator, one method and a short timescale are used |
| Reproducibility | Precision when different operators or apparatus are used; a harder test |
| Resolution | Smallest measuring interval; the source of uncertainty in a single reading |
| Uncertainty | The interval within which the true value can be taken to lie, such as 20 °C ± 2 °C |
| Error | Difference between a result and the true value; not a mistake |
| Validity | A measurement is valid if it measures what it is meant to measure |
| Sensitivity | Not defined in the specification glossary. Use it for how much an instrument's reading changes for a small change in the quantity |

Systematic errors shift every reading the same way and can be corrected if known, for example by subtracting a zero error. Random errors scatter the readings, and repeating and averaging reduces their effect.

## Formulas and rules

| Task | Rule |
|---|---|
| Percentage uncertainty | (uncertainty / measurement) × 100% |
| Single reading | Uncertainty = half the resolution |
| Repeated readings | Uncertainty in the mean = half the range |
| Multiply or divide | Add percentage uncertainties |
| Raise to a power n | Percentage uncertainty is n times that of the quantity |
| Add or subtract | Add the absolute uncertainties |
| Percentage difference | (measured - accepted) / accepted × 100% |
| Power law y = kxⁿ | log y = n log x + log k: gradient n, intercept log k |
| Exponential y = Ae^(-bx) | ln y = ln A - bx: gradient -b, intercept ln A |

## Method in steps: uncertainty in a result

1. Write each measured value with its absolute uncertainty.
2. Convert each to a percentage uncertainty, to 1 or 2 significant figures.
3. Count powers: a squared quantity counts twice, a cubed quantity three times.
4. Add the percentages for products and quotients.
5. Convert back to an absolute uncertainty: result × total % / 100.
6. Round the uncertainty to 1 or 2 significant figures and match the result to it.

**Worked reminder.** A trolley of mass 0.240 kg ± 0.002 kg moves at 3.40 m s⁻¹ ± 0.05 m s⁻¹. Find its kinetic energy and the uncertainty.

```
KE = ½mv² = 0.5 × 0.240 × 3.40² = 1.387 J, which is 1.39 J
% in m = 0.002 / 0.240 × 100 = 0.83%
% in v = 0.05 / 3.40 × 100 = 1.5%
total % = 0.83% + 2 × 1.5% = 3.8%
absolute = 1.39 × 3.8 / 100 = 0.05 J
```

Result: **KE = 1.39 J ± 0.05 J (3.8%)**.

**Subtraction reminder.** Lengths 15.0 cm ± 0.2 cm and 8.5 cm ± 0.1 cm added give 23.5 cm ± 0.3 cm. Absolute uncertainties add for both sums and differences.

## Method in steps: a straight-line graph from a log plot

1. Decide the form: a power law needs log y against log x; an exponential needs ln y (or log y) against x.
2. Work out the logged column from the numbers only, never the units, and keep 3 significant figures or a consistent number of decimal places.
3. Label axes as log (quantity/unit) or ln (quantity/unit).
4. Plot, using more than half of each axis, and draw a thin best-fit line.
5. Choose two points on the line far apart. Read them carefully and compute rise ÷ run.
6. Link the gradient to the physics: n for a power law, -b or -1/τ for a decay.
7. Read the intercept and convert it back: k = 10^intercept for a log₁₀ plot, A = e^intercept for an ln plot.

Straight and passing through the expected point means the model is supported. Curved means the assumed relationship is wrong. Using log₁₀ in place of ln for an exponential multiplies the gradient by 0.434.

## Must-know distinctions

* Precision (spread) is separate from accuracy (closeness to true value). Tight readings can still be wrong because of a systematic error.
* Resolution is the smallest division. The uncertainty in one reading is half of it.
* Percentage uncertainty of a radius equals that of the diameter. Powers apply only after you have the percentage.
* Absolute uncertainties are added for sums and differences. Percentages are added for products and quotients.
* A line of best fit that misses the origin when it should not indicates a systematic error. Large scatter points to random error.
* Accuracy against a known value: use the range from the percentage uncertainty when you have it. Use the percentage difference only when the uncertainty is not known, and treat under 5% as accurate.
* Error bars are not expected on graphs.

## Improvements and modifications: stock ideas

| Problem | Realistic change |
|---|---|
| Reaction time on short times | Time many oscillations, or use a light gate or data logger |
| Large percentage uncertainty in a small length | Use a micrometer or vernier caliper, or measure a longer length |
| Rule not vertical or level | Use a set square or spirit level |
| Zero error | Check zero first; subtract the error |
| Few readings or narrow range | Take more readings over a wider range, and repeat each |
| Heating of a wire or component | Use low current, switch off between readings |
| Drift in a variable | Control it with a thermostat bath, or wait for it to settle |

## Reporting results

* State the value, the uncertainty and the unit together, for example 1.39 J ± 0.05 J, with the uncertainty to 1 or 2 significant figures.
* A total percentage uncertainty under about 5% suggests the measurement is repeatable.
* To compare with a known value, work out the range the result allows. If the known value falls inside it, say the result is accurate within the uncertainty.
* Give each processed column of a table a consistent number of significant figures, usually 3. Mixing 3 and 4 is acceptable only when the data cross a power of ten.
* Say what the percentage uncertainty is dominated by and name the one measurement to improve.

## Quick self-test

1. A rule has a resolution of 1 mm and gives 37 mm for a single length. Find the percentage uncertainty.
2. Three timings are 12.1 s, 12.6 s and 12.3 s. Give the mean and the percentage uncertainty from the half range.
3. Speed = distance ÷ time, with the distance ±1.2% and the time ±3.0%. Find the percentage uncertainty in the speed.
4. Power P = I²R, with the current ±2% and the resistance ±3%. Find the percentage uncertainty in P.
5. Two lengths, 15.0 cm ± 0.2 cm and 8.5 cm ± 0.1 cm, are added. What is the total and its absolute uncertainty?
6. A log₁₀ y against log₁₀ x graph is a straight line of gradient 1.5 and passes through (0, 0.48). Write y as a function of x.
7. ln N against t has a gradient of -0.35 min⁻¹. Find the half-life.
8. Give 6.1 × 2.35 to the correct number of significant figures.
9. A measured value of 9.5 m s⁻² is compared with an accepted 9.81 m s⁻². Find the percentage difference and decide if it is accurate by the 5% guide.
10. A graph that should pass through the origin has a positive intercept on the y-axis. What does this suggest, and what could you do?

### Answers

1. Uncertainty 0.5 mm; 0.5 / 37 × 100 = 1.35%, so **1.4%**.
2. Mean = 12.33 s, half range = 0.25 s; 0.25 / 12.33 × 100 = **2.0%** (mean 12.3 s).
3. Add the percentages: 1.2% + 3.0% = **4.2%**.
4. 2 × 2% + 3% = **7%**.
5. Total **23.5 cm ± 0.3 cm**.
6. Gradient 1.5 gives n = 1.5. The intercept 0.48 means k = 10^0.48 = 3.0, so **y = 3.0 x^1.5**.
7. λ = 0.35 min⁻¹, half-life = ln 2 / 0.35 = **2.0 min**.
8. The least precise value has 2 significant figures: 14.335 becomes **14**.
9. (9.81 - 9.5) / 9.81 × 100 = **3.2%**, below 5%, so the result is accurate by this guide.
10. A **systematic error**, such as a zero error or a constant offset. Check the instrument zero, correct each reading, and repeat.

## Where marks are usually lost

* Writing an answer with far more significant figures than the data justify.
* Leaving units out, or leaving a prefix unconverted before substituting.
* Using the full resolution as the uncertainty of a single reading.
* Adding percentages for a sum or difference, or adding absolute values for a product.
* Not multiplying by the power when a quantity is squared or cubed.
* Drawing a gradient triangle that is small or uses data points rather than points on the line.
* Using the words precise and accurate as if they were the same.
* Giving vague improvements such as "be more careful" or "use better equipment", with no named instrument, variable or effect.
* Stating a conclusion about a law with no reference to the straight line, the gradient or the scatter.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Physics specification (YPH11), Issue 3, Pearson Education Limited, section 6.5 Analysis and the glossary in Appendix 10.
