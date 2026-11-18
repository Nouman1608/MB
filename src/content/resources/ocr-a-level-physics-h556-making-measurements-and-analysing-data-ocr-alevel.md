---
title: "OCR A Level Physics A (H556): Making measurements and analysing data"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Foundations of physics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "foundations-of-physics-ocr-alevel"
    subtopic: "making-measurements-and-analysing-data-ocr-alevel"
description: "Study guide to OCR A Level Physics A 2.2: systematic and random errors, precision, accuracy, combining uncertainties, worst lines and percentage difference."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2.2, Making measurements and analysing data, of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017: learning outcomes 2.2.1(a)-(d), Measurements and uncertainties, in Module 2. The specification states that a rigorous statistical treatment is not expected, and that an elementary knowledge of error bars is expected at A level. This page works through more cases than the combined [units, measurement, uncertainty and vectors study guide](/resources/ocr-a-level-physics-units-measurement-uncertainty-and-vectors/): powers and roots, timing many oscillations, a zero error inside a mean, and a complete worst-line analysis.

Pair it with the [making measurements revision notes](/resources/ocr-a-level-physics-h556-making-measurements-and-analysing-data-ocr-alevel-revision-notes/) and the [making measurements practice questions](/resources/ocr-a-level-physics-h556-making-measurements-and-analysing-data-ocr-alevel-practice/). Units and prefixes are in the [physical quantities and units guide](/resources/ocr-a-level-physics-h556-physical-quantities-and-units-ocr-alevel/).

## What you must be able to do

| Statement | Content |
|---|---|
| 2.2.1(a) | Systematic errors (including zero errors) and random errors in measurements |
| 2.2.1(b) | Precision and accuracy |
| 2.2.1(c) | Absolute and percentage uncertainties when data are combined by addition, subtraction, multiplication, division and raising to powers |
| 2.2.1(d) | Graphical treatment of errors and uncertainties; line of best fit; worst line; absolute and percentage uncertainties; percentage difference |

## Two kinds of error (2.2.1(a))

| | Systematic error | Random error |
|---|---|---|
| Effect | Every reading is shifted the same way, by the same amount or proportion | Readings scatter unpredictably either side of the true value |
| Examples | Zero error on a micrometer or balance; a ruler worn at the end; a stopwatch that runs fast; reading a meniscus from above every time | Reaction time on a stopwatch; small draughts moving a pendulum; fluctuating meter readings |
| Repeating and averaging | Does not help | Reduces its effect |
| Remedy | Correct the readings, recalibrate, or change technique | Repeat, average, use larger measurements, use a data logger |
| On a graph | Shifts the line; a straight line through the origin gains an intercept | Points scatter about the line |

A **zero error** is a systematic error where an instrument shows a non-zero reading when the true value is zero. Subtract the zero reading from every measurement, taking account of its sign: if a micrometer reads −0.01 mm with its jaws closed, add 0.01 mm to each reading.

Parallax can be either kind. Viewing a scale from a slightly different angle each time gives random error; always viewing from the same wrong angle gives a systematic error.

## Precision, accuracy and resolution (2.2.1(b))

The specification points to the ASE *Language of Measurement* for these terms.

- **Accuracy**: how close a measurement is to the true value. Systematic errors reduce accuracy.
- **Precision**: how closely repeated measurements agree with each other. Random errors reduce precision.
- **Resolution**: the smallest change in the quantity that an instrument can show, such as 0.01 mm on a digital caliper.

A set of readings can be precise but inaccurate (tightly grouped, all shifted by a zero error) or accurate on average but imprecise (widely scattered round the true value). Do not use "precise" to mean "has many decimal places".

## Absolute and percentage uncertainty

The **absolute uncertainty** is the range either side of the value within which the true value is expected to lie, written 4.36 ± 0.02 V. The **percentage uncertainty** is (absolute uncertainty ÷ value) × 100.

Common ways to estimate an absolute uncertainty:

- from repeated readings: half the range, (largest − smallest) ÷ 2;
- from a single reading: the resolution of the instrument, or more if the reading is hard to judge;
- for a length found from two scale readings, such as the two ends on a ruler: the uncertainty in each reading counts, so the uncertainties add.

Give an uncertainty to one or two significant figures, and give the value to the same decimal place as the uncertainty.

### Worked example 1: a mean with a zero error

A micrometer reads −0.01 mm with its jaws closed. Five readings of a wire's diameter are 0.46, 0.47, 0.45, 0.47 and 0.46 mm. Find the diameter and the percentage uncertainty in the cross-sectional area.

```
mean reading      = 2.31 / 5 = 0.462 mm
correct zero error: 0.462 − (−0.01) = 0.472 mm
uncertainty       = (0.47 − 0.45) / 2 = 0.01 mm
% in d            = 0.01 / 0.472 × 100 = 2.1 %
A = πd²/4         → % in A = 2 × 2.1 = 4.2 %
A = π(0.472 × 10⁻³)² / 4 = 1.75 × 10⁻⁷ m²  (± 0.07 × 10⁻⁷ m²)
```

Averaging reduced the random scatter but could not remove the zero error, which needed a separate correction.

## Combining uncertainties (2.2.1(c))

| Operation | Rule |
|---|---|
| y = a + b or y = a − b | add the **absolute** uncertainties |
| y = ab or y = a/b | add the **percentage** uncertainties |
| y = aⁿ | multiply the percentage uncertainty by \|n\| |
| y = ka, k exact | same percentage uncertainty as a |

Useful consequences:

- y = √a has half the percentage uncertainty of a (n = ½).
- y = 1/a has the same percentage uncertainty as a (n = −1).
- Subtracting two similar values gives a small result with a large percentage uncertainty.
- The quantity raised to the highest power usually dominates, so measure it most carefully.

### Worked example 2: g from a pendulum

Twenty oscillations take 32.4 ± 0.2 s. The length is 0.652 ± 0.002 m. Find g = 4π²l/T² with its uncertainty.

```
T     = 32.4 / 20 = 1.62 s,  ΔT = 0.2 / 20 = 0.01 s
% in T = 0.01 / 1.62 × 100 = 0.62 %
% in l = 0.002 / 0.652 × 100 = 0.31 %
g = 4π² × 0.652 / 1.62² = 9.81 m s⁻²
% in g = 0.31 + 2 × 0.62 = 1.5 %
Δg = 0.015 × 9.81 = 0.15 m s⁻²
g = 9.81 ± 0.15 m s⁻²
```

Timing twenty oscillations divides the timing uncertainty by twenty. Timing one swing with the same ± 0.2 s would give a 12 % uncertainty in T and about 25 % in g.

## Graphs, error bars and worst lines (2.2.1(d))

1. Plot each point with an **error bar** showing its absolute uncertainty, using the larger uncertainty if only one variable can be shown.
2. Draw the **line of best fit**, with points evenly scattered either side.
3. Draw a **worst line**: the steepest or shallowest straight line that still passes through all the error bars.
4. Find both gradients using large triangles.
5. Uncertainty in the gradient: the difference between the best-fit and worst-line gradients is commonly used; some mark schemes use half the difference between the steepest and shallowest lines. State which you are using.
6. Percentage uncertainty in gradient = (uncertainty ÷ best gradient) × 100. Intercept uncertainties are found the same way from the intercepts of the two lines.

### Worked example 3: g from a T² against l graph

T² = (4π²/g) l, so a graph of T² against l is a straight line through the origin with gradient 4π²/g. The best-fit gradient is 4.02 s² m⁻¹ and the worst line has gradient 4.18 s² m⁻¹.

```
g        = 4π² / 4.02 = 9.82 m s⁻²
% in grad = (4.18 − 4.02) / 4.02 × 100 = 4.0 %
g uses 1/gradient, so % in g = 4.0 %
Δg = 0.040 × 9.82 = 0.39 m s⁻²   →   g = 9.8 ± 0.4 m s⁻²
```

## Percentage difference

The percentage difference compares an experimental value with an accepted one:

percentage difference = |experimental − accepted| ÷ accepted × 100

For worked example 3 against g = 9.81 m s⁻²: |9.82 − 9.81| ÷ 9.81 × 100 = 0.1 %. This is well inside the 4.0 % uncertainty, so the result agrees with the accepted value. If the percentage difference were larger than the percentage uncertainty, look for a systematic error the uncertainty does not include.

## Common errors

- Saying repeat readings remove a zero error.
- Using "precise" when "accurate" is meant, or the reverse.
- Adding percentage uncertainties for a subtraction.
- Forgetting to double the percentage uncertainty of a squared quantity, or doubling it for a square root.
- Drawing a worst line that misses some error bars, or that is forced through the origin when the data do not support it.
- Quoting g = 9.807 ± 0.15 m s⁻²: the value has more decimal places than the uncertainty.

## Exam technique

- **Explain** why a measurement method reduces uncertainty: link it to a smaller percentage uncertainty (larger measured value, many oscillations).
- **Calculate the percentage uncertainty**: show each component on its own line, then combine.
- **Evaluate** whether a result is accurate: compare the percentage difference with the percentage uncertainty and conclude.
- **Suggest** an improvement: name the error and say how the change reduces it.

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), for first assessment in 2017, published by OCR. Module 2, Foundations of physics: section 2.2, learning outcomes 2.2.1(a)-(d).
