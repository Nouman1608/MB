---
title: "OxfordAQA A Level Physics: Measurements and Their Errors — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.1 – Measurements and Their Errors"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "Version 4.4 (International AS and A-level)"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-oxfordaqa-alevel"
description: "Condensed recall notes on SI units, uncertainty, accuracy and precision, error types and graphical analysis for International A Level Physics."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Measurements and Their Errors study guide](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## SI units and homogeneity

Base units: kg, m, s, A, K, mol.

Derived: N = kg m s⁻², J = kg m² s⁻², W = kg m² s⁻³, Pa = kg m⁻¹ s⁻².

> **Aside (not examined):** dimensional analysis is not required by this specification. For background only: checking homogeneity means confirming both sides of an equation have the same base units. Even a homogeneous equation may still be wrong by a **dimensionless constant**, so homogeneity shows an equation *could* be right, not that it definitely is.

**Prefixes:** T 10¹², G 10⁹, M 10⁶, k 10³, c 10⁻², m 10⁻³, μ 10⁻⁶, n 10⁻⁹, p 10⁻¹², f 10⁻¹⁵.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--01-units-from-base.webp" width="900" height="890" alt="Six base unit boxes (kg, m, s, A, K, mol) above a chain of derived units. The newton, kg m s^-2, times metre gives the joule, divided by second gives the watt, and divided by ampere gives the volt (OCR). Newton divided by metre squared gives the pascal. Cambridge 9702 does not use the mole." loading="lazy">
  <figcaption>Each derived unit is a product or quotient of base units.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--02-prefix-powers.webp" width="900" height="956" alt="Bars show prefixes from tera 10^12 down to femto 10^-15. Deci is used by Cambridge and OCR only; femto by AQA and OxfordAQA only. Examples: 250 mA = 0.25 A and 5.6 MeV = 5.6 x 10^6 eV." loading="lazy">
  <figcaption>Replace the prefix with its power of ten before substituting.</figcaption>
</figure>


## Accuracy, precision, resolution

| Term | Meaning |
|---|---|
| **Accurate** | Close to the true value |
| **Precise** | Repeat readings agree closely |
| **Resolution** | Smallest change the instrument can detect |
| **Repeatable** | Same result, same method and operator |
| **Reproducible** | Same result, different method or operator |

**Precise but not accurate** is the case that carries marks: a miscalibrated instrument produces tightly clustered readings that are all wrong by the same amount.

**Higher resolution does not guarantee accuracy** — a micrometer with a zero error reads to 0.01 mm and is still wrong every time, consistently offset from the true value.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--04-precision-accuracy.webp" width="900" height="1160" alt="Four targets with six shots each: tight and centred (precise and accurate); tight but off-centre (systematic error); spread with mean on the bullseye (random error); spread and off-centre (both)." loading="lazy">
  <figcaption>Systematic error shifts all readings; random error scatters them.</figcaption>
</figure>


## Errors

**Random** — scatter about the true value; reduced by **repeating and averaging** and by higher-resolution instruments.

**Systematic** — a consistent offset in the same direction every time; **not reduced by repeating**. Requires recalibration, zeroing, or a technique change.

**On a graph:** an **additive** systematic error (e.g. a zero error) gives the **correct gradient with an unexpected intercept**, while a **proportional** (calibration) systematic error instead changes the **gradient** and leaves the intercept at the origin. Random error shows as scatter of points about the line, in both directions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-measurements-revision-notes--01-errors-on-a-graph.webp" width="900" height="1110" alt="Three small graphs with a dashed true line y = 2x. Random error scatters points about the line. A zero error gives the right gradient but a non-zero intercept. A calibration error gives a changed gradient through the origin." loading="lazy">
  <figcaption>Random scatter, an offset and a wrong gradient look different on a graph.</figcaption>
</figure>


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

**Reduce percentage uncertainty by measuring more** — 20 oscillations rather than 1, a stack of 50 sheets rather than 1. The absolute uncertainty is set by the instrument, so it becomes a smaller proportion of a larger measured quantity.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-measurements-revision-notes--02-reading-uncertainty.webp" width="900" height="990" alt="A ruler with 1 mm divisions measures an object 50 mm long. Each reading is +/-0.5 mm and two readings double it to +/-1 mm, 2 percent. Timing 20 swings instead of 1 cuts a 0.1 s timing uncertainty from 20 percent to 1 percent (illustrative numbers)." loading="lazy">
  <figcaption>Half a division per reading, doubled for two readings; measuring more shrinks the percentage.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-physics-measurements-revision-notes--03-wire-dominant-uncertainty.webp" width="900" height="810" alt="Bars to scale show length 0.12 percent, diameter 2.8 percent and area 5.6 percent (diameter counted twice because A depends on d squared). The diameter dominates." loading="lazy">
  <figcaption>Squaring the diameter doubles its percentage uncertainty and makes it dominate.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--06-combining-uncertainties.webp" width="900" height="1120" alt="Falling ball: h = 1.200 +/- 0.002 m, t = 0.495 +/- 0.005 s. A bar shows 0.17 percent from h and 1.01 percent from t counted twice, 2.19 percent total, so g = 9.8 +/- 0.2 m s^-2." loading="lazy">
  <figcaption>Percentage uncertainties add for products and quotients; a power multiplies the percentage.</figcaption>
</figure>


## Worked example

A wire has length 0.850 m ± 0.001 m and diameter 0.36 mm ± 0.01 mm. Find the percentage uncertainty in the cross-sectional area.

```
Area A = pi d^2 / 4, so A depends on d squared.

% uncertainty in d = (0.01 / 0.36) x 100 = 2.8%
% uncertainty in A = 2 x 2.8% = 5.6%
```

The diameter **dominates** the uncertainty: the length is known to about 0.1%, so improving the ruler would be pointless while the micrometer reading is this uncertain. Identifying the **dominant** uncertainty is usually the mark-earning comment in an evaluation question.

## Graphical analysis

Rearrange to `y = mx + c` so gradient and intercept yield the physical quantities. Deciding what to plot is usually the first mark.

- Linear scales using **more than half** the grid.
- Axes labelled with quantity **and unit**.
- Best-fit line, anomalies identified and excluded.

**Error bars:** draw the steepest and shallowest lines consistent with all the bars.

```
uncertainty in gradient = (max - min gradient) / 2
```

Overlapping error bars between two data sets mean the difference between them may not be statistically significant, and this comparison is a common evaluation question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--07-error-bars-gradient.webp" width="900" height="1030" alt="Extension against force with +/-2 mm error bars. Best line gradient 12.0, steepest 13.0, shallowest 11.0 mm per N, so gradient = 12.0 +/- 1.0 mm per N." loading="lazy">
  <figcaption>Half the difference between the steepest and shallowest gradients.</figcaption>
</figure>


## Estimation

Order-of-magnitude estimates are examinable: state assumptions, use round numbers, and give the answer to one significant figure. The marks are for a **reasoned method**, not precision — so show the assumption explicitly, since a plausible but unstated assumption earns nothing.

## Exam traps

- Swapping accuracy and precision.
- Assuming high resolution implies accuracy.
- Saying repeating reduces systematic error.
- Forgetting to double uncertainty for two-reading measurements.
- Forgetting the power rule.
- Quoting more significant figures than the raw data supports.

## Self-test

1. Distinguish resolution from accuracy.
2. Which error type does averaging reduce?
3. A length is known to 2%. What is the uncertainty in a volume proportional to L³?
4. How do you find the uncertainty in a gradient?
5. A wire has length 0.850 m ± 0.001 m and diameter 0.36 mm ± 0.01 mm. Find the percentage uncertainty in its cross-sectional area, and identify the dominant source.

**Answers:** 1. Resolution is the smallest change an instrument can detect; accuracy is closeness to the true value — a high-resolution instrument with a zero error is precise and high-resolution but inaccurate. 2. Random error only. 3. 6%. 4. Draw the steepest and shallowest lines that pass through all the error bars and take half the difference between their gradients. 5. % uncertainty in d = (0.01 ÷ 0.36) × 100 = 2.8%; since A ∝ d², % uncertainty in A = 2 × 2.8% = 5.6%. The diameter dominates, since the length is known to only about 0.1%.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--08-order-of-magnitude.webp" width="900" height="910" alt="A log ruler with decades 10^5, 10^6, 10^7 and crossover marks at 3.16 times each power. 2 x 10^5 is order 10^5; 3.4 x 10^5 and 8 x 10^5 are order 10^6; 4 x 10^6 is order 10^7. OxfordAQA gives the crossover as about 3.2." loading="lazy">
  <figcaption>Above 3.16 x 10^n the order of magnitude is 10^(n+1).</figcaption>
</figure>

