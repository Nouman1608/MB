---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.12 Standardization of normal variables (z-values)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.93
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-12"
description: "Study guide to IB DP Maths AA section 4.12: z-values, comparing results from different normal distributions and finding an unknown mean or standard deviation."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 4.12 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) covers the
**standardization of normal variables (z-values)** and **inverse normal calculations where the mean
and standard deviation are unknown**. It is SL content, examined at SL and HL. It extends section
4.9, where you found normal probabilities and inverse values with technology for a fully known
distribution N(μ, σ²). In 4.12 one or both parameters are missing, and the z-value is the tool that
recovers them.

The [probability and distributions study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
introduces z and gives one example of each type. This page explains why standardization works, adds
the comparison use of z, and works through more varied parameter problems. Afterwards, use the
[4.12 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-12-revision-notes/)
and the
[4.12 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-12-practice/).

## What the section asks of you

- Calculate and interpret z = (x − μ)/σ.
- Know that Z ~ N(0, 1), the standard normal distribution, and that P(X < x) = P(Z < z).
- Use the inverse normal function on N(0, 1) to find a z-value from a probability.
- Use z-values to find an unknown mean, an unknown standard deviation, or both.

The guide states that probabilities and values of the variable must be found using technology, so
these questions belong to Paper 2. Paper 1 can still test the algebra if the z-values are given.

## Why standardization works

Every normal distribution has the same shape; only its centre (μ) and spread (σ) differ.
Subtracting μ moves the centre to 0. Dividing by σ rescales the spread to 1. The result is the
standard normal variable

```
Z = (X − μ)/σ,   Z ~ N(0, 1)
```

The z-value of an observation is the number of standard deviations it lies from the mean. A
positive z is above the mean, a negative z is below. Because the transformation keeps the order of
values and only changes the scale, the area to the left of x under N(μ, σ²) equals the area to the
left of z under N(0, 1):

```
P(X < x) = P(Z < (x − μ)/σ)
```

That equation is the bridge for every unknown-parameter question: technology gives you z from a
probability, and z links back to μ and σ.

By symmetry of the standard normal curve, P(Z < −a) = P(Z > a). Useful z-values to recognise (to
4 s.f.): area 0.9 to the left gives z = 1.282; area 0.95 gives z = 1.645; area 0.975 gives
z = 1.960.

## Worked example 1: comparing results from different distributions

Priya scored 74 in a mathematics test where the scores were N(62, 8²). She scored 70 in a physics
test where the scores were N(55, 12²). In which test did she perform better relative to the other
candidates?

```
Mathematics: z = (74 − 62)/8  = 1.5
Physics:     z = (70 − 55)/12 = 1.25
```

Her mathematics score is 1.5 standard deviations above the mean, compared with 1.25 for physics, so
she did relatively better in mathematics, even though the raw gap above the mean is larger in
physics (15 marks against 12). As a check with technology, about 93.3% of mathematics candidates
scored below 74 and about 89.4% of physics candidates scored below 70. (Scores invented.)

## Worked example 2: unknown mean

X ~ N(μ, 5²) and P(X < 40) = 0.15. Find μ.

```
Inverse normal on N(0, 1), area 0.15 to the left:  z = −1.0364...
(40 − μ)/5 = −1.0364...
μ = 40 + 5 × 1.0364... = 45.2 (3 s.f.)
```

The sign check: only 15% of values are below 40, so 40 must be below the mean. μ = 45.2 > 40 agrees.

## Worked example 3: unknown standard deviation

The lengths of bolts are normally distributed with mean 250 mm. 6% of bolts are longer than 262 mm.
Find the standard deviation.

```
P(X > 262) = 0.06, so P(X < 262) = 0.94
Inverse normal, area 0.94:  z = 1.5548...
(262 − 250)/σ = 1.5548...
σ = 12/1.5548... = 7.72 mm (3 s.f.)
```

Convert the right-tail probability to a left-tail area before using inverse normal, unless your
calculator has a tail setting and you have set it to "right".

## Worked example 4: both parameters unknown

The masses of bags of flour are normally distributed. 10% of bags weigh less than 1.2 kg and 25% weigh
more than 1.9 kg. Find the mean and standard deviation.

```
Area 0.10 to the left of 1.2:  z₁ = −1.2816...
Area 0.75 to the left of 1.9:  z₂ =  0.6745...

1.2 = μ − 1.2816σ     ...(1)
1.9 = μ + 0.6745σ     ...(2)

(2) − (1):  0.7 = 1.9561σ   →  σ = 0.358 kg
μ = 1.2 + 1.2816 × 0.35787 = 1.66 kg (3 s.f.)
```

Store the unrounded σ before substituting back; rounding it first can move μ in the third
significant figure. You can also solve the pair of equations with the GDC's simultaneous equation
solver. Check the result: with μ = 1.66 and σ = 0.358, normal cdf gives P(X < 1.2) ≈ 0.10.

## Worked example 5: a symmetric interval

Scores on a reasoning test are N(100, 15²). Find the interval, symmetric about the mean, that contains
the middle 90% of scores.

```
Middle 90% leaves 5% in each tail, so use area 0.95 to the left:  z = 1.6449...
x = μ ± zσ = 100 ± 1.6449 × 15 = 100 ± 24.67
Interval: 75.3 to 124.7 (1 d.p.)
```

## Common mistakes

- **Wrong sign of z.** A value below the mean must have a negative z. If P(X < a) is less than 0.5,
  your z for a must be negative.
- **Right-tail area typed as a left-tail area.** For P(X > a) = 0.06, the left area is 0.94, not 0.06.
- **Using σ² as σ.** In X ~ N(120, 25), σ = 5, not 25.
- **Using inverse normal on X instead of Z** when μ or σ is unknown. The calculator cannot use a
  parameter you do not have; you must work with N(0, 1).
- **Rounding z to two decimal places** early. Use the stored value or at least four significant
  figures.
- **Subtracting the simultaneous equations carelessly**, so that σ comes out negative. A standard
  deviation is always positive; a negative answer means an error.

## Exam technique and command words

- **Find** μ or σ: write the probability statement, the z-value from technology, and the equation
  (x − μ)/σ = z before solving. Each of these lines can earn method marks.
- **Show that** a parameter equals a given value: give the z-value to at least four significant figures
  and show the substitution, so the given value follows.
- **Compare** or **justify** which result is better: calculate both z-values and state the conclusion
  in context.
- Sketch a normal curve with the region shaded for every question. It takes seconds and catches tail
  errors.

## Where to go next

Condense the section with the
[4.12 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-12-revision-notes/),
then try the
[4.12 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-12-practice/).
For known-parameter normal questions from 4.9, see the
[probability and distributions practice questions](/resources/ib-dp-mathematics-aa-probability-distributions-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 4.12: standardization of normal variables (z-values);
inverse normal calculations where mean and standard deviation are unknown.
