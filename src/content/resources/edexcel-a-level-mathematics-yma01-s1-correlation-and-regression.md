---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Correlation and regression"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-correlation-and-regression-edexcel-alevel-maths"
description: "Edexcel IAL Maths S1 guide to correlation and regression: Sxx, Sxy, least squares lines, coded variables, interpreting r and the dangers of extrapolation."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 4 of **Unit S1: Statistics 1** (WST01) in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: "Scatter diagrams. Linear regression" (4.1); "Explanatory (independent) and response (dependent) variables. Applications and interpretations" (4.2); and "The product moment correlation coefficient, its use, interpretation and limitations" (4.3).

The guidance says the regression line is found by "the method of least squares", that predictions should be made "within the range of values of the explanatory variable", that students should know "the dangers of extrapolation", that "variables other than x and y may be used" and that "linear change of variable may be required". Derivations and significance tests are not required.

The broader S1 guide on [probability, and correlation and regression](/resources/edexcel-ial-mathematics-probability-and-correlation-and-regression/) works one data set through the basic method. This page adds the interpretation skills and the coding problems that carry the later marks in a question. Use the [correlation and regression revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-correlation-and-regression-revision-notes/) for recall and the [correlation and regression practice set](/resources/edexcel-a-level-mathematics-yma01-s1-correlation-and-regression-practice/) to test yourself.

## The summary statistics

Everything in this subtopic is built from three quantities:

```
Sxx = Σx² − (Σx)²/n
Syy = Σy² − (Σy)²/n
Sxy = Σxy − (Σx)(Σy)/n
```

These appear in the formulae booklet, along with

```
r = Sxy / √(Sxx Syy)
regression line of y on x:  y = a + bx,  where  b = Sxy / Sxx  and  a = ȳ − b x̄
```

Sxx and Syy are never negative. Sxy has the same sign as the correlation. If you get a negative Sxx, you have made an arithmetic error.

## What "least squares" means

The regression line of y on x is the line that makes the sum of the squared vertical distances from the points to the line as small as possible. Vertical distances are used because y is the variable being predicted. Two consequences are worth knowing:

- The line always passes through the mean point (x̄, ȳ). This gives a quick check and a way to find a missing mean.
- The line is designed for predicting y from x, which is why the explanatory variable goes on the x-axis.

## Explanatory and response variables

The **explanatory** (independent) variable is the one that is set, controlled or used to explain; the **response** (dependent) variable is the one that responds. In "the amount of fertiliser and the yield of a crop", fertiliser is explanatory and yield is the response. Questions may use letters such as t, h or m instead of x and y, so decide which is which from the context before calculating.

## Worked example 1: the full calculation

Eight students record x, the hours they spent practising typing in a week, and y, their typing speed in words per minute.

| x | 2 | 3 | 5 | 6 | 8 | 9 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|
| y | 15 | 19 | 24 | 30 | 33 | 40 | 44 | 51 |

```
Σx = 56   Σy = 256   Σx² = 484   Σy² = 9288   Σxy = 2107

Sxx = 484 − 56²/8   = 92
Syy = 9288 − 256²/8 = 1096
Sxy = 2107 − 56 × 256/8 = 315

r = 315 / √(92 × 1096) = 0.992 (3 s.f.)

b = 315 / 92 = 3.424
a = 32 − 3.424 × 7 = 8.033
regression line:  y = 8.03 + 3.42x
```

**Interpreting r.** r = 0.992 shows very strong positive linear correlation: students who practised for longer tended to type faster.

**Interpreting b.** Each extra hour of practice per week is associated with an increase of about 3.4 words per minute in typing speed. Write the units and the context: "b = 3.42" alone earns nothing in an interpretation part.

**Interpreting a.** The line gives 8 words per minute for no practice, but x = 0 lies outside the data (2 to 12 hours), so this is extrapolation and should be treated with caution.

**Predicting.** For x = 7, y = 8.03 + 3.42 × 7 ≈ 32 words per minute. This is reliable because 7 lies within the range of the data. For x = 30, the line gives about 111 words per minute, which is extrapolation: there is no evidence that the linear trend continues, and typing speed cannot rise without limit.

## Linear change of variable

Coded data are common because they keep the numbers small. Two facts carry most of the marks.

**The PMCC is unaffected by coding** of the form p = (x − a)/b and q = (y − c)/d, as long as b and d are positive. Shifting and stretching the axes does not change how close the points are to a straight line. If one of the scale factors is negative, the sign of r reverses but its size stays the same.

**A regression line in coded variables must be converted back** by substitution.

## Worked example 2: decoding a regression line

Data are coded using p = (x − 100)/10 and q = (y − 40)/2. The regression line of q on p is q = 1.5 + 0.8p. Find the regression line of y on x.

```
(y − 40)/2 = 1.5 + 0.8 (x − 100)/10
 y − 40    = 3 + 0.16(x − 100)
 y         = 3 + 0.16x − 16 + 40
 y         = 27 + 0.16x
```

Substitute the coding expressions, then rearrange. Do not try to convert the gradient and intercept separately by rule; that is where errors come from.

The summary statistics also change in predictable ways: Sxx = 10² Spp = 100 Spp, Syy = 2² Sqq = 4 Sqq and Sxy = 10 × 2 Spq = 20 Spq. Questions sometimes give coded S values and ask for the uncoded ones.

## Limitations of the PMCC

- **It measures linear association only.** Points lying on a clear curve can give r close to zero. Always look at the scatter diagram before interpreting r.
- **It is sensitive to outliers.** One extreme point can raise or lower r substantially.
- **Correlation does not imply causation.** Two variables can be correlated because both depend on a third. A strong r shows association, not that changing x would change y.
- **It describes only the data collected.** It says nothing about values outside the range sampled.

## Interpreting a value of r

| r | Description |
|---|---|
| Close to 1 | Strong positive linear correlation |
| Around 0.5 | Moderate positive linear correlation |
| Close to 0 | Little or no linear correlation (a non-linear link is still possible) |
| Close to −1 | Strong negative linear correlation |

Always add a sentence in context: "as the age of the car increases, its value tends to decrease".

## Common mistakes

- Swapping the explanatory and response variables, especially when letters other than x and y are used.
- Using Syy instead of Sxx as the denominator of b.
- Rounding b before finding a; keep b to at least four significant figures.
- Interpreting b without units or context.
- Treating a prediction outside the data range as reliable.
- Saying that coding changes the value of r.
- Concluding from a strong r that one variable causes the other.

## Exam technique

- **"Calculate"** Sxx, Sxy or r: show the substituted formula, then the value.
- **"Find the equation of the regression line"**: give b, then a, then the line in the form asked, with the original letters.
- **"Interpret"** the gradient: "for each extra [unit of x], [y] increases by about b [units]".
- **"Comment on the reliability"** of an estimate: say whether it is interpolation or extrapolation, and refer to r.
- **"Give a reason"** why the PMCC supports a linear model: quote r and say it is close to 1 or −1.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S1, section 4 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
