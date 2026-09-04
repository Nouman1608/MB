---
title: "OCR A Level Physics: Development of Practical Skills — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Development of practical skills in physics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "For first teaching 2015"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "development-of-practical-skills-in-physics-ocr-alevel"
description: "Condensed recall notes on variables, uncertainty, errors, graphical analysis and experimental technique for OCR A Level Physics H556."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Development of Practical Skills study guide](/resources/ocr-a-level-physics-development-of-practical-skills/).

## Variables and design

**Independent** — what you change. **Dependent** — what you measure. **Control** — kept constant.

A **control variable** is not the same as a **control experiment**: the latter is a parallel run with the independent variable absent, showing the observed effect is caused by the factor being tested.

Choose instruments with **resolution appropriate to the quantity** — a micrometer, not a ruler, for a wire's diameter — and state a sensible **range and interval**, typically at least **six values** spread across the range. A **risk assessment** must be specific: the **hazard**, the **risk** it creates, and the **control measure** — a generic "wear safety goggles" with no link to the actual experiment earns nothing.

## The four words that decide marks

| Term | Meaning |
|---|---|
| **Accurate** | Close to the **true value** |
| **Precise** | Repeat readings agree **with each other** |
| **Repeatable** | Same result, same method, same person |
| **Reproducible** | Same result, **different** method or person |

**Precise but not accurate** is the case examiners test: a miscalibrated instrument gives tightly grouped readings that are all consistently wrong.

**More repeats improve reliability and reveal anomalies — they do not improve accuracy.** Accuracy needs better-calibrated or more sensitive apparatus.

## Errors

**Random** — unpredictable scatter; reduced by repeating and averaging.
**Systematic** — a consistent offset; **repeating does not help**, only recalibration or zeroing.
**Zero error** — the instrument does not read zero when it should.

**A systematic error appears on a graph as the correct gradient with an unexpected intercept.** A line that should pass through the origin but doesn't is the giveaway.

## Uncertainty

```
single reading:  half the smallest scale division
two readings:    double it
percentage uncertainty = (uncertainty / value) x 100
```

| Operation | Rule |
|---|---|
| Add or subtract | Add **absolute** uncertainties |
| Multiply or divide | Add **percentage** uncertainties |
| Power n | **Multiply percentage by n** |

The power rule matters most: a radius measured to 2% gives a volume uncertain to **6%**.

**Reduce percentage uncertainty by measuring a larger quantity** — time 20 oscillations rather than one, then divide. The absolute uncertainty is fixed by the instrument, so it becomes a smaller share of a larger reading.

## Graphs and analysis

- Independent on x, dependent on y; linear scales using **over half** the grid; axes labelled with quantity **and unit**.
- Line of best fit; identify anomalies and exclude them.
- **Rearrange into `y = mx + c` form** so the gradient and intercept give the physical quantities — identifying what to plot against what is usually the first mark.

**Error bars and gradient uncertainty:**

```
uncertainty in gradient = (max gradient - min gradient) / 2
```

Draw the **steepest and shallowest** lines that still pass through all the error bars. Where two data sets' error bars overlap, the difference may not be significant.

**Finding the gradient itself:** use a **large triangle** spanning most of the plotted line, taking coordinates from the **line**, not from individual data points.

## Linearising relationships

Rearrange a relationship into **y = mx + c** form so a straight-line graph gives the gradient a physical meaning.

```
T = 2 pi sqrt(l / g)      ->      T^2 = (4 pi^2 / g) l
```

Plotting **T² against l** gives a straight line through the origin with gradient 4π²/g, so **g = 4π² ÷ gradient**. "What to plot, and what the gradient represents" is the single most common form of practical question.

## Improving an experiment

Generic answers score nothing. Name a **specific** change **and its reason**:

- Use a **micrometer** rather than a ruler, because the smaller scale division reduces percentage uncertainty.
- Use **light gates** rather than a stopwatch, to eliminate human reaction time — a systematic error.
- Repeat and average, to reduce **random** error.
- Measure a larger quantity, to reduce **percentage** uncertainty.
- Use a **fiducial marker** at the equilibrium position, because that is where the object moves fastest and timing is most consistent.

## Worked example: which measurement limits accuracy

A pendulum of length 0.800 m ± 0.005 m gives a period of 1.79 s ± 0.02 s, testing g via T = 2π√(l/g).

```
% uncertainty in l = (0.005 / 0.800) x 100 = 0.63%
% uncertainty in T = (0.02 / 1.79) x 100  = 1.12%
g depends on T^2, so T contributes 2 x 1.12% = 2.24%
Total = 0.63% + 2.24% = 2.87%
```

**Timing dominates.** Timing 20 oscillations and dividing by 20 cuts this far more than a better ruler would — the same principle as reducing percentage uncertainty by measuring a larger quantity.

## Exam traps

- Swapping accuracy and precision.
- Saying repeats reduce systematic error.
- Forgetting to double uncertainty for two-reading measurements.
- Forgetting the power rule.
- Suggesting improvements without reasons.
- Quoting more significant figures than the data justifies.
- Taking the gradient from two data points instead of a large triangle on the line.
- Giving a generic risk assessment not linked to the specific experiment.

## Self-test

1. Distinguish accuracy from precision with an example.
2. Which error type does averaging reduce, and which does it not?
3. A radius is known to 2%. What is the uncertainty in a volume proportional to r³?
4. How is gradient uncertainty found from error bars?
5. Why use light gates instead of a stopwatch?
6. For a simple pendulum, what should be plotted to find g from a straight-line graph, and what does the gradient represent?
7. A pendulum's length is known to 0.63% and its period to 1.12%. Which measurement limits the accuracy of g, and what single change would best reduce it?

**Answers:** 1. Accuracy is closeness to the true value, precision is agreement between repeats; a balance with a zero error gives precise but inaccurate readings. 2. Averaging reduces random error but not systematic error, which requires recalibration. 3. 6% — the percentage uncertainty is multiplied by the power. 4. Draw the steepest and shallowest lines that pass through all error bars and take half the difference between their gradients. 5. They eliminate human reaction time, which is a systematic error that repeating and averaging cannot remove. 6. Plot T² against l; the gradient equals 4π²/g, so g = 4π² divided by the gradient. 7. The period, since it is squared in the relationship for g, doubling its percentage contribution to 2.24% against length's 0.63%; timing many oscillations and dividing by the number of oscillations would reduce this far more effectively than a more precise length measurement.
