---
title: "OCR A Level Mathematics A: The normal distribution and choosing a distribution (H240)"
seoTitle: "OCR A Level Maths Normal Distribution Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "The normal distribution and choosing an appropriate distribution"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 128
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-distributions-ocr-alevel-maths"
description: "Study guide to the normal distribution, standardising, inverse normal and choosing a model for OCR A Level Mathematics A, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers the normal distribution and the choice of a suitable model for **OCR A Level Mathematics A (H240)**, using the OCR specification Version 3.1 (August 2026), for first assessment in 2018. It teaches references 2.04e to 2.04h of the Statistical Distributions content. All four are in the **Stage 2** column, so they are **A Level only**. The specification places statistics content in Paper 2 (Pure Mathematics and Statistics), and it allows a scientific or graphical calculator on every paper.

Links: [OCR Mathematics A hub](/boards/ocr/a-level/mathematics/), [printable checklist](/checklists/ocr/a-level/mathematics/), [revision notes](/resources/ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-revision-notes/), [practice questions](/resources/ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-practice/), [statistics overview](/resources/ocr-a-level-mathematics-statistics/) and [free diagnostics](/diagnostics/). Binomial and discrete distributions have their own pages; this guide only uses them where the choice of model needs them.

## What this unit covers

| Ref | What you must be able to do | Stage |
|---|---|---|
| 2.04e | Understand and use the normal distribution as a model, with the notation X ~ N(μ, σ²) | A Level only |
| 2.04f | Find probabilities using appropriate calculator functions; find x when P(X < x) is known; use Z = (X − μ)/σ | A Level only |
| 2.04g | Link the normal curve to histograms, mean and standard deviation; use the two-thirds, 95% and almost-all facts and the points of inflection | A Level only |
| 2.04h | Select an appropriate distribution for a context, with reasoning; recognise when a binomial or normal model may not be appropriate; know that a binomial with large n can be approximated by a normal | A Level only |

The specification excludes the equation of the normal curve, so you never integrate it. It also excludes questions that explicitly require calculations using the normal approximation to the binomial. You still need to understand the idea, and to choose the parameters (see the last section).

## 2.04e: The normal distribution as a model

A normal distribution models a **continuous** variable whose values cluster around a centre and thin out evenly on both sides. We write **X ~ N(μ, σ²)**.

- μ is the **mean**, and the centre of the curve.
- σ² is the **variance**. The **standard deviation** is σ.
- The curve is a bell shape, symmetrical about x = μ.
- The total area under the curve is 1, and **probability is area**.
- A single value has zero area above it, so P(X = a) = 0 and strict and non-strict inequalities give the same probability.

The variance is the number written second. X ~ N(30, 16) has σ = 4, and X ~ N(30, 4²) also has σ = 4. Read the notation before you do anything else.

```
        |        ***
        |      *     *
        |    *         *
        |  *             *
 _______|**________|_______**______
       μ − σ       μ       μ + σ
```

Changing μ slides the curve along the axis. Changing σ stretches or squeezes it: a larger σ gives a lower, wider curve. The area stays 1 in every case.

## 2.04g: Histograms, mean, standard deviation and shape

A histogram of a large amount of continuous data that is roughly symmetrical and bell-shaped suggests a normal model. The sample mean and standard deviation then estimate μ and σ, and the smooth curve stands in for the tops of the bars. Area still represents proportion.

The specification asks you to know and use these facts for a normal distribution:

1. about **two-thirds** of values lie within μ ± σ;
2. about **95%** of values lie within μ ± 2σ;
3. **almost all** values lie within μ ± 3σ;
4. the **points of inflection** of the curve are at x = μ ± σ.

A point of inflection is where the curve changes between bending upwards and bending downwards. On each side of the peak it is the place where the curve is steepest.

### Worked example 1: reading μ and σ from a curve

A normal curve has points of inflection at x = 41 and x = 59. Find μ and σ, and state the interval containing about 95% of values.

```
μ is halfway between the inflection points: μ = (41 + 59)/2 = 50
The inflection points are μ − σ and μ + σ, so 2σ = 59 − 41 = 18, σ = 9
About 95% lie in μ ± 2σ = 50 ± 18, that is 32 to 68
```

### Worked example 2: using the facts on a sample

A sample of 400 adult heights is bell-shaped with mean 168 cm and standard deviation 6 cm. About how many heights lie between 162 cm and 174 cm?

```
162 = 168 − 6 and 174 = 168 + 6, so this is μ ± σ
About two-thirds of 400 = about 267 heights
```

These are rounded facts, so say "about". Use the calculator functions when an exact probability is needed.

## 2.04f: Calculating probabilities

The specification asks you to find probabilities "using appropriate calculator functions". Enter the lower bound, the upper bound, μ and σ (not σ²). For one-sided probabilities use a very large or very small bound as the other end, or use the upper-tail option if your calculator has one.

### Standardising

The **standard normal** distribution has mean 0 and variance 1, written **Z ~ N(0, 1)**. Subtracting the mean and dividing by the standard deviation converts any normal variable into it:

```
Z = (X − μ)/σ
```

The z-value tells you how many standard deviations a value is from the mean. A negative z means below the mean. You need standardising mainly when μ or σ is unknown.

### Worked example 3: probabilities and expected frequencies

The journey time X minutes on a tram line is modelled by X ~ N(23.4, 1.8²).

(a) Find P(X > 25). (b) Find P(21 < X < 24). (c) In 250 journeys, how many would you expect to take longer than 25 minutes?

```
(a) z = (25 − 23.4)/1.8 = 0.889
    P(X > 25) = 0.187 (3 s.f.)
(b) z = (21 − 23.4)/1.8 = −1.333 and z = (24 − 23.4)/1.8 = 0.333
    P(21 < X < 24) = 0.539 (3 s.f.)
(c) Expected number = 250 × 0.187 = 46.8, so about 47 journeys
```

An expected frequency is probability times total. It need not be a whole number, but you can round when you state it in context.

### Inverse normal: finding x

To find x when P(X < x) is known, use the **inverse normal** function. Give it the area to the **left** of x. If the question gives an upper tail, subtract from 1 first.

### Worked example 4: finding a boundary

The battery life X hours of a tablet is modelled by X ~ N(9.6, 1.1²). Find (a) the time exceeded by 95% of tablets, and (b) the time that only the best 15% of tablets exceed.

```
(a) 95% exceed it, so 5% lie below: P(X < t) = 0.05
    z = −1.645, so t = 9.6 + (−1.645)(1.1) = 7.79 hours (3 s.f.)
(b) 15% lie above, so P(X < t) = 0.85
    z = 1.036, so t = 9.6 + (1.036)(1.1) = 10.7 hours (3 s.f.)
```

Sketch the curve and shade the area first. It stops you putting 0.15 in where 0.85 belongs.

### Finding unknown parameters

When μ or σ is unknown, turn each given probability into a z-value, then write an equation using x = μ + zσ.

### Worked example 5: one unknown

X ~ N(120, σ²) and P(X > 132) = 0.08. Find σ.

```
P(X < 132) = 0.92, so z = 1.405
(132 − 120)/σ = 1.405
σ = 12/1.405 = 8.54 (3 s.f.)
```

### Worked example 6: two unknowns

The volume X ml of juice in a carton is X ~ N(μ, σ²). 10% of cartons hold less than 496 ml and 5% hold more than 508 ml. Find μ and σ.

```
P(X < 496) = 0.10, so z = −1.2816:  496 = μ − 1.2816σ
P(X > 508) = 0.05, so z = 1.6449:   508 = μ + 1.6449σ
Subtract:  12 = 2.9265σ, so σ = 4.10 (3 s.f.)
μ = 496 + 1.2816 × 4.1006 = 501 ml (3 s.f.)
```

Keep the unrounded values in your calculator until the last line. The check is quick: with μ = 501.26 and σ = 4.1006, the two tail probabilities come back as 0.10 and 0.05.

## 2.04h: Choosing an appropriate distribution

The specification asks you to select a distribution "for a context, with appropriate reasoning", including recognising when a binomial or normal model may not be appropriate. A good answer names the model and points to the context.

| Feature of the situation | Points towards |
|---|---|
| Fixed number of trials, two outcomes, constant probability, independent trials; counting successes | Binomial |
| Continuous measurement, roughly symmetrical, one central peak, fairly large sample | Normal |
| Data strongly skewed, or a hard lower limit close to the mean | Normal probably not suitable |
| Probability changes between trials, or trials affect each other | Binomial not suitable |
| Small sample or counts that are tiny | Be cautious with either model |

### Limitations to quote

- The normal curve extends to infinity in both directions, so it gives a small, non-zero probability to impossible values such as negative times.
- It is symmetrical, so it is a poor fit for skewed data.
- It models continuous data, but real measurements are recorded to a finite accuracy.
- A binomial model fails if trials are not independent, for example when selecting without replacement from a small group.

### Worked example 7: testing a normal model

Assembly times are modelled by X ~ N(6, 4²) minutes. Comment on the model.

```
P(X < 0) = P(Z < (0 − 6)/4) = P(Z < −1.5) = 0.0668
```

The model gives about a 6.7% chance of a negative time, which is impossible. The model is therefore unreliable here, and a skewed distribution would suit better.

### Approximating a binomial with large n

The specification says a binomial distribution with large n can be approximated by a normal distribution. It also lists the facts **μ = np** and **σ² = npq** (with q = 1 − p) for choosing the normal model.

For X ~ B(240, 0.35): μ = 240 × 0.35 = 84 and σ² = 240 × 0.35 × 0.65 = 54.6, so the model is N(84, 54.6) with σ = 7.39.

Calculations that explicitly require the approximation are excluded, so this is for understanding. The binomial counts whole numbers while the normal is continuous, so a **continuity correction** treats "X ≤ 90" as "X < 90.5". For the model above the exact binomial P(X ≤ 90) is 0.811. The normal without correction gives 0.792, and with the correction 0.810. The correction is close, which shows why it is taught.

## Common errors

- Entering σ² instead of σ in the calculator.
- Using the variance as the standard deviation, or the reverse, when reading N(μ, σ²).
- Putting an upper-tail area into the inverse normal function without subtracting from 1.
- Rounding z-values to one or two decimal places in a two-unknown problem.
- Saying "the data are normal" as a reason, instead of "the data are continuous, symmetrical and bell-shaped".
- Writing a limitation that does not refer to the context given.

## Next steps

Work through the [revision notes](/resources/ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-revision-notes/), then the [practice questions](/resources/ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-practice/). Check yourself against the [printable checklist](/checklists/ocr/a-level/mathematics/) and take a [free diagnostic](/diagnostics/).

## Official syllabus

OCR Level 3 Advanced GCE in Mathematics A (H240), Version 3.1 (August 2026), for first assessment in 2018, published by OCR. Section 2.04e to 2.04h of the detailed content.
