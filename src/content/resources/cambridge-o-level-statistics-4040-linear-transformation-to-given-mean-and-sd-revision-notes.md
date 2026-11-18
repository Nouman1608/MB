---
title: "Cambridge O Level Statistics (4040): Linear transformation of data to a given mean and standard deviation -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 6 – Transformations involving mean and standard deviation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 6.2
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-involving-mean-and-standard-deviation-4040"
    subtopic: "linear-transformation-to-given-mean-and-sd-4040"
description: "Condensed notes on rescaling data to a target mean and standard deviation, standardised scores, reverse problems and exam traps, with a self-test, for 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 6.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: linear transformation of data to a given mean and standard deviation. The full explanation and longer worked examples are in the [linear transformation study guide](/resources/cambridge-o-level-statistics-4040-linear-transformation-to-given-mean-and-sd/), and exam-style questions are in the [linear transformation practice questions](/resources/cambridge-o-level-statistics-4040-linear-transformation-to-given-mean-and-sd-practice/). The rules for adding and multiplying by a constant (section 6.1) are revised in the [topic 6 revision notes](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and-revision-notes/).

Standard deviations here divide by n.

## Core results

For y = a + bx, with original mean x̄ and standard deviation s:

```
mean of y   = a + b x̄
sd of y     = |b| × s          (a has no effect)
variance    = b² × s²
```

To reach a target mean M and target standard deviation S:

```
b = S ÷ s                  find this first
a = M − b x̄                then this
```

Deviation form, useful for single values:

```
y = M + (S ÷ s)(x − x̄)
```

Standardised score, unchanged by the transformation when b > 0:

```
z = (x − x̄) ÷ s = (y − M) ÷ S
```

## Method in four steps

1. Get x̄ and s. If you are given Σx and Σx², use x̄ = Σx ÷ n and s² = Σx² ÷ n − x̄².
2. b = target sd ÷ original sd.
3. a = target mean − b × original mean.
4. Check: a + b x̄ should equal the target mean.

## Key terms

| Term | Meaning |
|---|---|
| Linear transformation | Replacing each value x by a + bx, with a and b constants |
| Scaling | Changing the spread by multiplying by b |
| Shift | Adding the constant a; moves the mean but not the spread |
| Target mean, target sd | The mean and standard deviation the transformed data must have |
| Standardised score | Number of standard deviations a value lies from its mean, (x − x̄) ÷ s |
| Scaled mark | A mark after transformation to a common mean and standard deviation |
| Inverse rule | x = (y − a) ÷ b, used to recover original values or summaries |

## Small worked reminders

### From a short list

Values 2, 4, 4, 4, 5, 5, 7, 9 are to have mean 50 and standard deviation 10.

```
x̄ = 40 ÷ 8 = 5
s² = (9 + 1 + 1 + 1 + 0 + 0 + 4 + 16) ÷ 8 = 32 ÷ 8 = 4,  s = 2
b = 10 ÷ 2 = 5,  a = 50 − 5 × 5 = 25
y = 25 + 5x  →  35, 45, 45, 45, 50, 50, 60, 70
```

Check: the new values total 400, so the mean is 50.

### Changing the spread only

Marks have mean 40 and standard deviation 5. They are to keep mean 40 but have standard deviation 8.

```
b = 8 ÷ 5 = 1.6,  a = 40 − 1.6 × 40 = −24
y = 1.6x − 24
```

A mark of 50 becomes 56 and a mark of 30 becomes 24: values above the mean move up, values below move down, and the mean stays fixed. When only the spread changes, a is not zero, because multiplying by 1.6 also moves the mean.

### Changing the centre only

If the target sd equals the original sd, b = 1 and the rule is a pure shift, y = x + (M − x̄).

## Interpreting transformed data

- **Order is kept** when b > 0, so rankings and the position of the median are unchanged.
- **Shape is kept**: skewed data stay skewed.
- **Relative standing** is what scaled marks compare. A candidate with a lower raw mark on a harder or more spread-out test can have the higher scaled mark.
- **Impossible values** can appear. If a scaled mark exceeds the maximum of the scale or goes below zero, say so and say why the target standard deviation is too large.

## Exam traps

- Finding a before b.
- b = original sd ÷ target sd (upside down).
- Using a target **variance** as if it were the standard deviation; take the square root first.
- Subtracting a when recovering an original standard deviation. Only divide by b.
- Rounding b to 2 or 3 significant figures before finding a, which throws a off.
- Changing the frequencies in a table instead of the values.
- Comparing raw marks across tests with different means and spreads.
- Calling a negative b "a negative standard deviation". The standard deviation is \|b\| × s, always positive.

## Quick self-test

1. Data have mean 12 and standard deviation 4. Find y = a + bx giving mean 50 and standard deviation 20.
2. Data have mean 15 and standard deviation 2.5. Find the rule giving mean 60 and standard deviation 10.
3. Ravi scores 72 on a test with mean 60 and standard deviation 8, and 58 on a test with mean 50 and standard deviation 5. On which test did he do relatively better?
4. Using the rule y = 2x − 10, find the transformed value of 31.
5. Transformed data y = 2x + 10 have mean 50 and standard deviation 6. Find the original mean and standard deviation.
6. What is the standardised score of a value equal to the mean?
7. A target variance of 36 is required. The original standard deviation is 4. Find b.
8. Does the ranking of candidates change when b is positive?
9. When a frequency table is transformed, what happens to the frequencies?
10. Raw marks 10 and 30 become 35 and 75. Find a and b.
11. If the target standard deviation equals the original standard deviation, what is b?
12. Why must b be found before a?

### Answers

1. b = 20 ÷ 4 = 5, a = 50 − 5 × 12 = −10, so y = 5x − 10.
2. b = 10 ÷ 2.5 = 4, a = 60 − 4 × 15 = 0, so y = 4x.
3. Standardised scores: (72 − 60) ÷ 8 = 1.5 and (58 − 50) ÷ 5 = 1.6. He did relatively better on the second test.
4. 2 × 31 − 10 = 52.
5. Mean: (50 − 10) ÷ 2 = 20. Standard deviation: 6 ÷ 2 = 3.
6. Zero.
7. Target sd = √36 = 6, so b = 6 ÷ 4 = 1.5.
8. No. Every value is stretched and shifted by the same amounts.
9. They stay the same; only the values change.
10. 20b = 40, so b = 2, and a = 35 − 20 = 15.
11. b = 1, so the rule is a shift only.
12. The standard deviation equation contains only b, while the mean equation contains both a and b.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 6.2: linear transformation of data to a given mean and standard deviation.
