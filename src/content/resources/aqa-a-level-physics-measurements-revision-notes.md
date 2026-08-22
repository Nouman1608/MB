---
title: "AQA A Level Physics: Measurements and Their Errors — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Measurements and their errors"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 3.12
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-aqa-alevel"
    subtopic: "limitation-of-physical-measurements"
description: "Condensed recall notes on SI units, uncertainty, accuracy and precision, error types and graphical analysis for AQA A Level Physics 7408."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Measurements and Their Errors study guide](/resources/aqa-alevel-physics-limitation-of-physical-measurements/).

## SI base units

| Quantity | Unit |
|---|---|
| Mass | kilogram (kg) |
| Length | metre (m) |
| Time | second (s) |
| Current | ampere (A) |
| Temperature | kelvin (K) |
| Amount | mole (mol) |

All other units are **derived**: N = kg m s⁻², J = kg m² s⁻², W = kg m² s⁻³, Pa = kg m⁻¹ s⁻².

**Homogeneity of units** is the fastest way to check an equation. If the base units on each side do not match, the equation is wrong. Note the converse does not hold — a dimensionally consistent equation can still be wrong by a numerical factor, and saying so shows understanding.

**Prefixes:** T 10¹², G 10⁹, M 10⁶, k 10³, c 10⁻², m 10⁻³, μ 10⁻⁶, n 10⁻⁹, p 10⁻¹².

## Accuracy, precision, repeatability, reproducibility

| Term | Meaning |
|---|---|
| **Accurate** | Close to the **true value** |
| **Precise** | Repeat readings close **to each other** |
| **Repeatable** | Same result on repeating with the same method and equipment |
| **Reproducible** | Same result with a **different** method or by a different person |

**Precise but not accurate is the key case.** A miscalibrated instrument gives readings that agree closely with each other and are all consistently wrong. This distinction is examined nearly every series.

## Errors

**Random error** — unpredictable scatter around the true value. **Reduced by repeating and averaging**, and by using instruments with finer resolution.

**Systematic error** — every reading is offset in the same direction by the same amount or proportion. **Repeating does not help**; the instrument must be recalibrated or zeroed. A **zero error** is the specific case where the instrument does not read zero when it should.

**How to spot a systematic error on a graph:** the line has the correct gradient but an **unexpected intercept**. A line that should pass through the origin but does not is the classic signature.

## Uncertainty

```
uncertainty of a single reading  =  half the smallest scale division
percentage uncertainty = (uncertainty / value) x 100
```

For a measurement requiring **two readings** — a length between two marks, a temperature change, a burette volume — the uncertainty **doubles**, because each reading carries its own.

**Combining uncertainties:**

| Operation | Rule |
|---|---|
| **Adding or subtracting** | **Add the absolute** uncertainties |
| **Multiplying or dividing** | **Add the percentage** uncertainties |
| **Raising to a power n** | **Multiply the percentage** uncertainty by n |

That last rule matters: if a radius is measured to 2% and you calculate a volume proportional to r³, the volume carries **6%** uncertainty. Small measurement errors amplify quickly in cubed quantities.

**To reduce percentage uncertainty, measure a larger quantity.** The absolute uncertainty is fixed by the instrument, so it forms a smaller proportion of a bigger reading — which is why you time twenty oscillations rather than one, then divide.

## Graphs

- Independent variable on x, dependent on y.
- Scales linear, using **more than half** the grid.
- Axes labelled with quantity **and** unit.
- Line of best fit, not dot-to-dot; identify and exclude anomalies.

**Error bars** show the uncertainty in each point. Draw the **steepest and shallowest** lines that pass through all the error bars:

```
uncertainty in gradient = (max gradient - min gradient) / 2
```

Where error bars for two data sets **overlap**, the difference between them may not be significant.

**Straight-line analysis:** rearrange into `y = mx + c` form, then the gradient and intercept give the physical quantities you want. Identifying what to plot against what is usually the first mark.

## Exam traps

- Swapping accuracy and precision.
- Saying repeating reduces systematic error.
- Forgetting to double the uncertainty for a two-reading measurement.
- Adding absolute uncertainties when multiplying.
- Forgetting to multiply the percentage uncertainty by the power.
- Quoting more significant figures than the data justifies.
- Drawing a line through the origin when the data does not support it.

## Self-test

1. Distinguish accuracy from precision, and give an example of precise but inaccurate data.
2. Which type of error does averaging reduce, and which does it not?
3. How do you combine uncertainties when multiplying two quantities?
4. A radius is known to 3%. What is the uncertainty in a volume proportional to r³?
5. How is the uncertainty in a gradient found from a graph?

**Answers:** 1. Accuracy is closeness to the true value; precision is how closely repeated readings agree. A balance with a zero error gives tightly grouped readings that are all wrong by the same amount. 2. Averaging reduces random error; it does not reduce systematic error, which requires recalibration. 3. Add the percentage uncertainties. 4. 9% — the percentage uncertainty is multiplied by the power. 5. Draw the steepest and shallowest lines that still pass through all the error bars, then take half the difference between their gradients.
