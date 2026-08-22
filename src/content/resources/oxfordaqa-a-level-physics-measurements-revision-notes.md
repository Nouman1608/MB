---
title: "OxfordAQA A Level Physics: Measurements and Their Errors — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.1 – Measurements and Their Errors"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-oxfordaqa-alevel"
description: "Condensed recall notes on SI units, uncertainty, accuracy and precision, error types and graphical analysis for International A Level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Measurements and Their Errors study guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## SI units and homogeneity

Base units: kg, m, s, A, K, mol.

Derived: N = kg m s⁻², J = kg m² s⁻², W = kg m² s⁻³, Pa = kg m⁻¹ s⁻².

**Checking homogeneity** — both sides of an equation must have the same base units. It is the fastest error check available, but note its limit: a homogeneous equation may still be wrong by a **dimensionless constant**, so homogeneity shows an equation *could* be right, not that it is.

**Prefixes:** T 10¹², G 10⁹, M 10⁶, k 10³, c 10⁻², m 10⁻³, μ 10⁻⁶, n 10⁻⁹, p 10⁻¹².

## Accuracy, precision, resolution

| Term | Meaning |
|---|---|
| **Accurate** | Close to the true value |
| **Precise** | Repeat readings agree closely |
| **Resolution** | Smallest change the instrument can detect |
| **Repeatable** | Same result, same method and operator |
| **Reproducible** | Same result, different method or operator |

**Precise but not accurate** is the case that carries marks: a miscalibrated instrument produces tightly clustered readings that are all wrong by the same amount.

**Higher resolution does not guarantee accuracy** — a micrometer with a zero error reads to 0.01 mm and is still wrong.

## Errors

**Random** — scatter about the true value; reduced by **repeating and averaging** and by higher-resolution instruments.

**Systematic** — a consistent offset; **not reduced by repeating**. Requires recalibration, zeroing, or a technique change.

**On a graph:** a systematic error gives the **correct gradient with an unexpected intercept**. Random error shows as scatter about the line.

## Uncertainty

```
reading uncertainty  =  half the smallest scale division
two-reading measurement  =  double it
percentage uncertainty = (uncertainty / value) x 100
```

| Operation | Combine |
|---|---|
| Add / subtract | **Absolute** uncertainties add |
| Multiply / divide | **Percentage** uncertainties add |
| Power n | **Percentage** × n |

The power rule is the one most often forgotten, and it matters most: a length measured to 2% gives a volume uncertain to **6%**.

**Reduce percentage uncertainty by measuring more** — 20 oscillations rather than 1, a stack of 50 sheets rather than 1. The absolute uncertainty is set by the instrument, so it becomes a smaller proportion.

## Graphical analysis

Rearrange to `y = mx + c` so gradient and intercept yield the physical quantities. Deciding what to plot is usually the first mark.

- Linear scales using **more than half** the grid.
- Axes labelled with quantity **and unit**.
- Best-fit line, anomalies identified and excluded.

**Error bars:** draw the steepest and shallowest lines consistent with all the bars.

```
uncertainty in gradient = (max - min gradient) / 2
```

Overlapping error bars between two data sets mean the difference may not be significant.

## Estimation

Order-of-magnitude estimates are examinable: state assumptions, use round numbers, and give the answer to one significant figure. The marks are for a **reasoned method**, not precision — so show the assumption explicitly.

## Exam traps

- Swapping accuracy and precision.
- Assuming high resolution implies accuracy.
- Saying repeating reduces systematic error.
- Forgetting to double uncertainty for two-reading measurements.
- Forgetting the power rule.
- Quoting more significant figures than the raw data supports.

## Self-test

1. What does checking homogeneity prove, and what does it not?
2. Distinguish resolution from accuracy.
3. Which error type does averaging reduce?
4. A length is known to 2%. What is the uncertainty in a volume proportional to L³?
5. How do you find the uncertainty in a gradient?

**Answers:** 1. It proves the equation is dimensionally consistent and so could be correct; it cannot detect an error in a dimensionless constant. 2. Resolution is the smallest change an instrument can detect; accuracy is closeness to the true value — a high-resolution instrument with a zero error is precise and high-resolution but inaccurate. 3. Random error only. 4. 6%. 5. Draw the steepest and shallowest lines that pass through all the error bars and take half the difference between their gradients.
