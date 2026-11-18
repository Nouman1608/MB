---
title: "Cambridge O Level Statistics (4040): Effect of adding or multiplying by a constant on the mean and standard deviation -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 6 – Transformations involving mean and standard deviation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 6.1
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-involving-mean-and-standard-deviation-4040"
    subtopic: "effect-of-adding-or-multiplying-by-a-constant-4040"
description: "Revision notes on how adding or multiplying every value by a constant changes the mean, variance and standard deviation, with traps and a self-test, for 4040."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 6.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: the effect on the mean and standard deviation of adding a constant to each observation and of multiplying each observation by a constant. The reasoning and worked examples are in the [study guide on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-4040-effect-of-adding-or-multiplying-by-a-constant/), and exam-style drill is in the [practice questions on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-4040-effect-of-adding-or-multiplying-by-a-constant-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Constant | A fixed number applied in the same way to every observation |
| Shift (change of origin) | Adding or subtracting a constant: y = x + a |
| Scaling (change of scale) | Multiplying or dividing by a constant: y = bx |
| Linear transformation | y = bx + a: scale, then shift |
| Deviation | x − x̄, the distance of a value from the mean |
| Coding | Using a transformation to make numbers easier to work with, then undoing it |

## The rules

| Transformation | Mean | Standard deviation | Variance |
|---|---|---|---|
| Add a | + a | no change | no change |
| Subtract a | − a | no change | no change |
| Multiply by b | × b | × \|b\| | × b² |
| Divide by b | ÷ b | ÷ \|b\| | ÷ b² |
| y = bx + a | b x̄ + a | \|b\| σ | b² σ² |

**Memory line:** shifts move the centre, scales stretch the spread (and move the centre too).

## Why, in one line each

- Adding a: every value and the mean move by a, so every deviation is unchanged.
- Multiplying by b: every deviation is multiplied by b, so squared deviations are multiplied by b².

## Order of operations

- "Multiply by 1.1, then add 5": y = 1.1x + 5.
- "Add 5, then multiply by 1.1": y = 1.1(x + 5) = 1.1x + 5.5.
- The standard deviation is 1.1σ in both cases; the means differ by 0.5.

## Worked reminders

**Shift to simplify.** Values 52, 57, 49, 55, 52. Let u = x − 50: 2, 7, −1, 5, 2. Σu = 15, ū = 3, Σu² = 4 + 49 + 1 + 25 + 4 = 83, variance = 16.6 − 9 = 7.6, σ = 2.76. So x̄ = 53 and σ = 2.76.

**Units.** Lengths with mean 1.84 m and σ = 0.12 m. In centimetres (× 100): mean 184 cm, σ = 12 cm, variance 144 cm².

**Negative multiplier.** Data with mean 8 and σ = 3, transformed by y = 20 − 2x: mean 20 − 16 = 4; σ = 2 × 3 = 6.

**From totals.** n = 5, Σx = 40, Σx² = 340. Mean 8, variance 68 − 64 = 4. For y = 4x + 1: mean 33, variance 64, σ = 8.

## Other measures follow the same pattern

| Measure | Behaves like |
|---|---|
| Median, quartiles, mode | The mean: shifted by a and scaled by b |
| Range, interquartile range | The standard deviation: unchanged by a, scaled by \|b\| |

Use this as a quick check: if a shift has changed your range, something has gone wrong.

## Exam traps

- Adding the constant to the standard deviation.
- Multiplying the variance by b, not b².
- A negative standard deviation from a negative b.
- Getting the order wrong for "add then multiply".
- Forgetting to undo coding at the end.
- Treating a percentage rise as an addition: a 5% rise is × 1.05, which changes the standard deviation.
- Leaving units unchanged after a change of units.

## Quick self-test

1. Every value has 7 added. The mean was 15 and σ was 2. Find the new mean and σ.
2. Every value is tripled. The mean was 4 and σ was 1.5. Find the new mean, σ and variance.
3. y = 2x − 3, with x̄ = 10 and σ = 4. Find ȳ and the standard deviation of y.
4. y = −x, with x̄ = 6 and σ = 2. Find ȳ and the standard deviation of y.
5. A mass has mean 3200 g and σ = 150 g. Give both in kilograms.
6. Explain in one sentence why adding a constant does not change the standard deviation.
7. Every wage rises by 10%. What happens to the standard deviation?
8. "Add 4, then double." Write y in terms of x.
9. Coded values u = x − 200 have mean 3.5 and σ = 1.2. Find x̄ and σ of x.
10. The range of some data is 18. Each value is multiplied by 0.5 and then 10 is added. Find the new range.
11. The variance of x is 9. Find the variance of y = 5x + 2.
12. Values 101, 104, 99, 106, 100. Use u = x − 100 to find the mean.

### Answers

1. Mean 22; σ = 2.
2. Mean 12; σ = 4.5; variance 20.25.
3. ȳ = 17; σ = 8.
4. ȳ = −6; σ = 2.
5. Mean 3.2 kg; σ = 0.15 kg.
6. Every value and the mean move by the same amount, so the deviations are unchanged.
7. It is multiplied by 1.1 (rises by 10%).
8. y = 2(x + 4) = 2x + 8.
9. x̄ = 203.5; σ = 1.2.
10. 9.
11. 225.
12. u: 1, 4, −1, 6, 0; ū = 2; x̄ = 102.

## Frequently asked questions

**Is dividing by a constant covered by the same rule?**
Yes. Dividing by b is multiplying by 1/b, so the mean and standard deviation are divided by b and the variance by b².

**Do these rules depend on which standard deviation formula is used?**
No. The divisor is the same before and after the transformation, so the pattern holds either way.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 6, section 6.1: Effect on mean and standard deviation of adding a constant to each observation and of multiplying each observation by a constant.
