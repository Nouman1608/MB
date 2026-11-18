---
title: "Cambridge A Level Physics (9702): Errors and uncertainties -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall for Cambridge AS Physics 9702 subtopic 1.3: systematic, zero and random errors, precision and accuracy, uncertainty rules and quoting results."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed for the final weeks. For the full explanation and worked examples, use the [Errors and uncertainties study guide](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties/); for exam-style questions, the [Errors and uncertainties practice questions](/resources/cambridge-a-level-physics-9702-as-errors-and-uncertainties-practice/). These notes cover subtopic **1.3 Errors and uncertainties** of Cambridge International AS & A Level Physics 9702, 2025–2027 series.

## Systematic versus random

| | Systematic error | Random error |
|---|---|---|
| Effect on readings | All shifted the same way by the same amount (or proportion) | Scattered above and below the true value |
| Examples | Zero error; wrongly calibrated scale; consistent parallax | Reaction time; judging a moving marker; small variations in the quantity |
| Affects | Accuracy | Precision |
| Reduced by repeating and averaging? | No | Yes |
| How to deal with it | Find it and correct it (check zero, recalibrate, change method) | Repeat, average, measure larger quantities, plot a graph |
| On a straight-line graph | Line shifted; gradient unchanged for a constant offset | Points scattered about the line |

## Zero errors

- Read the instrument with nothing being measured.
- **Corrected reading = measured reading − zero reading** (keep the sign).
- Zero reading +0.04 mm, measured 3.62 mm → 3.58 mm.
- Zero reading −0.01 mm, measured 3.62 mm → 3.63 mm.

## Precision and accuracy

- **Precision**: how close repeated readings are to each other.
- **Accuracy**: how close the result is to the true value.
- Precise but inaccurate = small scatter, systematic error present.
- Accurate but imprecise = mean near the true value, large scatter.

## Key terms

| Term | Meaning |
|---|---|
| Absolute uncertainty | The ± range in the same unit as the value |
| Fractional uncertainty | Absolute uncertainty ÷ value |
| Percentage uncertainty | Fractional uncertainty × 100 |
| Half the range | (largest − smallest) ÷ 2, an estimate of uncertainty for repeated readings |
| Zero error | A non-zero reading when the true value is zero |
| Calibration | Checking or setting a scale against known values |

## The combination rules

| Calculation | Combine |
|---|---|
| a + b, a − b | Δa + Δb (absolute) |
| ab, a/b | %a + %b |
| aⁿ | n × %a |
| √a | ½ × %a |
| ka with k exact (2, π, ½) | %a unchanged |

**Steps for a derived quantity:** find each percentage uncertainty → apply the rules → total percentage → convert back to absolute → round.

## Recall examples (worked, rounded)

- **Cylinder volume** V = πd²h/4 with d = (12.0 ± 0.1) mm and h = (40.0 ± 0.5) mm: %V = 2 × 0.83% + 1.25% = 2.9%; V = 4520 mm³, ΔV ≈ 130 mm³, so V = (4.5 ± 0.1) × 10³ mm³.
- **Kinetic energy** with m = (0.500 ± 0.005) kg, v = (2.40 ± 0.05) m s⁻¹: %E = 1.0% + 2 × 2.1% = 5.2%; E = 1.44 J, so E = (1.44 ± 0.07) J.
- **Difference** l = (120.0 ± 0.5) mm − (95.0 ± 0.5) mm = (25.0 ± 1.0) mm: 4% uncertainty from two readings of 0.4–0.5% each.

## Quoting a result

- Uncertainty to 1 significant figure (sometimes 2).
- Value rounded to the same decimal place as the uncertainty.
- Format: (value ± uncertainty) unit, for example (2.70 ± 0.07) g cm⁻³.

## Comparing with an accepted value

Percentage difference = (difference ÷ accepted value) × 100. If it is smaller than the percentage uncertainty, the result agrees with the accepted value within the uncertainty.

## Exam traps

- "Repeat and average to remove the zero error": wrong, systematic errors survive averaging.
- Adding percentage uncertainties for a sum or difference.
- Forgetting to double the percentage for a squared term, or to halve it for a square root.
- Giving the uncertainty to three significant figures.
- Calling an instrument with a fine scale "accurate": a fine scale reduces the reading uncertainty, but a zero error can still make it inaccurate.
- Treating π or a counted number of oscillations as uncertain.

## Self-test

1. Define a systematic error.
2. Why does averaging not reduce a systematic error?
3. A micrometer reads −0.03 mm with its jaws closed. A diameter reads 2.84 mm. What is the corrected diameter?
4. Distinguish precision from accuracy.
5. Five times are 2.31, 2.27, 2.35, 2.29 and 2.33 s. State the mean and its uncertainty.
6. How are uncertainties combined when two lengths are subtracted?
7. A quantity is proportional to r³. The percentage uncertainty in r is 1.5%. What is the percentage uncertainty in the quantity?
8. Why does timing 20 oscillations, rather than one, reduce the percentage uncertainty in the period?
9. A force is (4.0 ± 0.1) N and an extension (25 ± 1) mm. Find the percentage uncertainty in k = F/x.
10. A measured value of g is 9.42 m s⁻² with a percentage uncertainty of 3%. Does it agree with 9.81 m s⁻²?
11. Rewrite "(1.4372 ± 0.06) J" correctly.
12. Which type of error is caused by reaction time when using a stopwatch by hand?

### Answers

1. An error that shifts every reading from the true value in the same direction by the same amount or proportion.
2. Every repeated reading contains the same error, so the mean contains it too.
3. 2.84 − (−0.03) = 2.87 mm.
4. Precision is how close repeated readings are to each other; accuracy is how close the result is to the true value.
5. Mean 2.31 s; half-range (2.35 − 2.27) ÷ 2 = 0.04 s, so (2.31 ± 0.04) s.
6. Add the absolute uncertainties.
7. 3 × 1.5% = 4.5%.
8. The timing uncertainty is about the same for one or 20 oscillations, but it is divided by 20 when T is found, so it is a smaller fraction of T.
9. 2.5% + 4% = 6.5%.
10. Percentage difference = 0.39 ÷ 9.81 × 100 ≈ 4%, which is larger than 3%, so it does not agree within the uncertainty.
11. (1.44 ± 0.06) J.
12. Random error (it varies in size and direction from one timing to the next).
