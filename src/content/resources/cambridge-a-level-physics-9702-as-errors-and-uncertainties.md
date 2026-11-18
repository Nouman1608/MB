---
title: "Cambridge A Level Physics (9702): Errors and uncertainties"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Physical quantities and units"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "as-physical-quantities-and-units"
    subtopic: "as-errors-and-uncertainties"
description: "Subtopic 1.3 of Cambridge AS Physics 9702 in depth: systematic, zero and random errors, precision and accuracy, and combining uncertainties."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **1.3 Errors and uncertainties** of Cambridge International AS & A Level Physics 9702, 2025–2027 series. The [Physical Quantities, Units and Measurement study guide](/resources/as-physics-physical-quantities-units-and-measurement/) introduces the ideas for the whole of Topic 1; this page goes further, with zero-error corrections, uncertainties raised to powers, a pendulum value of g, and how to quote a final result. The same skills are assessed in the practical papers. For quick recall use the [Errors and uncertainties revision notes](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties-revision-notes/), and for exam-style questions the [Errors and uncertainties practice questions](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 1.3**

Candidates should be able to:

1. understand and explain the effects of systematic errors (including zero errors) and random errors in measurements;
2. understand the distinction between precision and accuracy;
3. assess the uncertainty in a derived quantity by simple addition of absolute or percentage uncertainties.

## Systematic errors

A **systematic error** makes every reading differ from the true value by the same amount, or in the same proportion, and in the same direction. Repeating the measurement and averaging does not reduce it, because every repeat carries the same error.

Typical sources:

- **Zero error**: the instrument does not read zero when it should. A micrometer screw gauge that reads +0.03 mm with its jaws closed adds 0.03 mm to every reading.
- **Incorrect calibration**: a thermometer whose scale is slightly stretched reads high at all temperatures above some point.
- **A consistent method fault**: always reading a scale from above the meniscus, or a light gate placed so it triggers late.

**Correcting a zero error.** Subtract the zero reading (taking its sign into account) from every measurement.

```
zero reading:  +0.03 mm        measured diameter: 5.47 mm
corrected diameter = 5.47 - (+0.03) = 5.44 mm

zero reading:  -0.02 mm        measured diameter: 5.47 mm
corrected diameter = 5.47 - (-0.02) = 5.49 mm
```

A negative zero reading means the instrument reads too low, so the correction is added.

**How a systematic error shows on a graph.** If a quantity that should be proportional to another is measured with a constant zero error, the straight line has the correct gradient but does not pass through the origin. This is why many practical analyses use the gradient rather than a single point.

## Random errors

A **random error** makes readings scatter unpredictably above and below the true value. Sources include reaction time when starting and stopping a stopwatch, judging when a swinging pendulum passes a marker, and small fluctuations in the quantity itself, such as a wire whose diameter varies along its length.

Random errors are reduced by:

- **repeating readings and averaging**, so that high and low scatter partly cancel;
- **measuring a larger quantity**, for example timing 20 oscillations instead of one, so that a fixed reaction-time uncertainty is a smaller fraction of the reading;
- **plotting a graph** with many points and drawing a best-fit line.

## Precision and accuracy

| | Meaning | Affected by |
|---|---|---|
| **Precision** | How close repeated readings are to each other | Random errors |
| **Accuracy** | How close a reading (or the mean) is to the true value | Systematic errors (and random errors in a single reading) |

A set of readings 5.44, 5.45, 5.44, 5.45 mm taken with a gauge that has an uncorrected +0.03 mm zero error is **precise but not accurate**. Correcting the zero error improves accuracy but does not change the precision.

## Absolute, fractional and percentage uncertainty

If a length is (0.652 ± 0.002) m, then:

```
absolute uncertainty     = 0.002 m
fractional uncertainty   = 0.002 / 0.652 = 0.0031
percentage uncertainty   = 0.0031 x 100 = 0.31 %
```

For a set of repeated readings, the syllabus's practical section allows the absolute uncertainty to be taken as **half the range**, where this is appropriate. Five diameter readings of 0.36, 0.38, 0.37, 0.35 and 0.38 mm have mean 0.368 mm and half-range (0.38 − 0.35) ÷ 2 = 0.015 mm, so d = (0.37 ± 0.02) mm.

## Combining uncertainties: the rules

| Operation | Rule |
|---|---|
| y = a + b or y = a − b | add **absolute** uncertainties: Δy = Δa + Δb |
| y = ab or y = a/b | add **percentage** uncertainties |
| y = aⁿ | multiply the percentage uncertainty by n |
| y = ka (k an exact constant, such as 2 or π) | same percentage uncertainty as a |

Subtraction never reduces an uncertainty. The difference of two close values can carry a very large percentage uncertainty: a temperature rise from (21.0 ± 0.5) °C to (24.5 ± 0.5) °C is (3.5 ± 1.0) °C, an uncertainty of 29%.

### Worked example 1: resistance from V and I

V = (2.40 ± 0.05) V and I = (0.320 ± 0.005) A.

```
R = V / I = 2.40 / 0.320 = 7.50 ohm
%V = 0.05 / 2.40 x 100 = 2.1 %
%I = 0.005 / 0.320 x 100 = 1.6 %
%R = 2.1 + 1.6 = 3.7 %
dR = 0.037 x 7.50 = 0.28 ohm  ->  R = (7.5 +/- 0.3) ohm
```

### Worked example 2: g from a simple pendulum

A pendulum of length l = (0.652 ± 0.002) m makes 20 oscillations in (32.4 ± 0.2) s. Use g = 4π²l/T².

```
T = 32.4 / 20 = 1.62 s,   dT = 0.2 / 20 = 0.01 s
g = 4 pi^2 x 0.652 / 1.62^2 = 9.81 m s^-2
%l = 0.002 / 0.652 x 100 = 0.31 %
%T = 0.01 / 1.62 x 100 = 0.62 %
%g = %l + 2 x %T = 0.31 + 1.23 = 1.5 %
dg = 0.015 x 9.81 = 0.15 m s^-2  ->  g = (9.8 +/- 0.2) m s^-2
```

Three teaching points: timing 20 oscillations divides the timing uncertainty by 20; T is squared, so its percentage uncertainty counts twice; and 4π² is exact, so it adds nothing.

## Quoting a final result

- Give the absolute uncertainty to one significant figure (occasionally two).
- Round the value to the same decimal place as the uncertainty: (9.8 ± 0.2) m s⁻², not (9.807 ± 0.2) m s⁻².
- Include the unit once, after the bracket.

## Common mistakes

- **Saying that repeating readings removes a systematic error.** It reduces random error only.
- **Adding percentage uncertainties for a subtraction.** Add absolute uncertainties for sums and differences.
- **Forgetting the power.** In a quantity proportional to d³, the percentage uncertainty in d counts three times.
- **Calling a precise result accurate.** Tightly grouped readings can all be wrong in the same direction.
- **Correcting a negative zero error by subtracting its size.** Subtract the signed reading: a −0.02 mm zero error means adding 0.02 mm.
- **Quoting the value to more decimal places than the uncertainty.**

## Exam technique for the command words

- **Explain** the effect of an error: say whether it is systematic or random, which direction it shifts the readings (if systematic), and whether it affects accuracy or precision.
- **Calculate** or **determine** an uncertainty: show each percentage separately, state the rule used, then convert back to an absolute value.
- **Suggest** an improvement: name the specific error it reduces, such as "time 20 oscillations to reduce the percentage uncertainty in T".
- **Justify** a number of significant figures: link it to the precision of the least precise measured quantity.

## Frequently asked questions

**Does averaging repeated readings improve accuracy?**
It reduces the effect of random errors, so the mean is usually closer to the true value. It does nothing to a systematic error, which shifts every reading equally.

**How do I combine uncertainties when a quantity is squared?**
Multiply its percentage uncertainty by 2 (by n for a power n), then add to the other percentage uncertainties.

**How many significant figures should an uncertainty have?**
Usually one, and the value is rounded to match its decimal place.

## Related resources

- [Errors and uncertainties revision notes](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties-revision-notes/)
- [Errors and uncertainties practice questions](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties-practice/)
- [SI units study guide](/resources/cambridge-a-level-physics-9702-as-si-units/) — the previous subtopic
- [Scalars and vectors study guide](/resources/cambridge-a-level-physics-9702-as-scalars-and-vectors/) — the next subtopic

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
