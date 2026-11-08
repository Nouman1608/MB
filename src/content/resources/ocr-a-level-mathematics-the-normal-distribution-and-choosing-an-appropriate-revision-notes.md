---
title: "OCR A Level Mathematics A: The normal distribution and choosing a distribution (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Normal Distribution Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall for OCR A Level Mathematics A: normal distribution notation, standardising, inverse normal, unknown parameters and choosing a model."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense references 2.04e to 2.04h of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. All four are Stage 2 content, so they are **A Level only**. For full explanations and longer worked examples, start with the [study guide](/resources/ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate/).

Links: [OCR Mathematics A hub](/boards/ocr/a-level/mathematics/), [printable checklist](/checklists/ocr/a-level/mathematics/), [practice questions](/resources/ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-practice/), [statistics revision notes](/resources/ocr-a-level-mathematics-statistics-revision-notes/) and [free diagnostics](/diagnostics/).

## Key facts: 2.04e and 2.04g

| Item | Fact |
|---|---|
| Notation | X ~ N(μ, σ²): mean μ, variance σ², standard deviation σ |
| Shape | Bell-shaped, symmetrical about x = μ, total area 1 |
| Probability | Area under the curve. A single point has zero area, so P(X = a) = 0 and the two inequalities P(X < a), P(X ≤ a) agree |
| Points of inflection | x = μ − σ and x = μ + σ |
| About two-thirds | of values lie in μ ± σ |
| About 95% | of values lie in μ ± 2σ |
| Almost all | of values lie in μ ± 3σ |
| Not required | The equation of the normal curve (excluded) |

**Effect of the parameters.** Changing μ moves the curve left or right without changing its shape. A larger σ gives a wider, lower curve. The area is always 1.

**Link to histograms.** If a histogram of a large continuous sample is symmetrical and bell-shaped, a normal model may fit. Estimate μ from the sample mean and σ from the sample standard deviation.

### Sketching a normal curve

1. Draw a bell shape with its peak above x = μ and label μ on the axis.
2. Mark x = μ − σ and x = μ + σ where the curve changes from curving upwards to curving downwards, or the reverse.
3. Let the tails approach the axis without touching or crossing it.
4. Shade the area that represents the probability asked for, and label the boundary values.

Two sketches on the same axes with different σ should cross, with the narrower curve taller. If they share μ, they cross twice and are symmetrical about the same line.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--01-amth-normal-shape.webp" width="900" height="1250" alt="Three graphs: two bell curves with means 40 and 60 show that changing the mean slides the curve; two curves centred on 50 with standard deviations 4 and 8 show that a larger spread gives a lower, wider curve of the same area; a curve with mean 50 and sd 9 has points of inflection at 41 and 59. A note says N(30, 16) and N(30, 4²) are the same curve." loading="lazy">
  <figcaption>Changing μ slides the curve, changing σ squeezes or spreads it, and the points of inflection are at μ ± σ; the second number is the variance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--02-amth-normal-spread-rule.webp" width="900" height="850" alt="Plank lengths with mean 2.40 m and sd 0.03 m: nested bands show about 2/3 (0.683) within one sd, about 95% (0.954) within two, and almost all (0.997) within three. About 0.0228 lies above μ + 2σ." loading="lazy">
  <figcaption>About 2/3, 95% and almost all values lie within 1, 2 and 3 standard deviations of the mean.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--07-amth-normal-continuity.webp" width="900" height="780" alt="Bars for B(80, 0.35) with N(28, 18.2) over them. P(X ≤ 25) uses bars up to the edge at 25.5, so it becomes P(Y &lt; 25.5) = 0.279 against an exact 0.282; P(X ≥ 30) becomes P(Y &gt; 29.5) = 0.363; P(X = 28) becomes P(27.5 &lt; Y &lt; 28.5) = 0.0933." loading="lazy">
  <figcaption>A whole number r becomes a band from r − 0.5 to r + 0.5 when approximating with a normal curve.</figcaption>
</figure>


## Key facts: 2.04f

| Item | Fact |
|---|---|
| Standard normal | Z ~ N(0, 1) |
| Standardising | Z = (X − μ)/σ, so X = μ + zσ |
| Calculator inputs | Bounds, μ, and σ (the standard deviation, not the variance) |
| Inverse normal | Input the area to the **left** of x; the output is x |
| Expected frequency | probability × number of items |

### Method: probability

1. Write the distribution, with σ² given as a square.
2. Sketch the curve and shade the required area.
3. Use the calculator, or standardise first, and write the probability statement.
4. Give 3 significant figures unless told otherwise.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--08-amth-normal-uniform.webp" width="900" height="1040" alt="For T uniform on 4 to 10 s the density is a rectangle of height 1/6 and the strip 5 to 8 has area 0.5. The cumulative function rises linearly from 0 at 4 to 1 at 10, with F(5) = 1/6 and F(8) = 2/3. Mean 7, variance 3." loading="lazy">
  <figcaption>The uniform density is a rectangle, its cdf is a straight ramp, and probability is area.</figcaption>
</figure>


### Method: find x for a given probability

1. Shade the area. If it is an upper tail p, the area to the left is 1 − p.
2. Find z from the inverse normal function for that area to the left.
3. Convert: x = μ + zσ.
4. Check the sign: a left-tail area below 0.5 gives a negative z.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--04-amth-normal-inverse.webp" width="900" height="1100" alt="Using the mango model, the top 10% start at k with area 0.90 to the left, z = 1.2816, so k = 335.6 g. The lowest 20% use the mirror value 0.8416, so z = −0.8416 and k = 293.2 g." loading="lazy">
  <figcaption>Work from the area to the left to find z, then use x = μ + zσ; below 0.5 means z is negative.</figcaption>
</figure>


### Method: find unknown μ and/or σ

1. Turn each probability into the area to the left, then into a z-value.
2. Write each as μ + zσ = x (or (x − μ)/σ = z).
3. One unknown: solve directly. Two unknowns: subtract the equations to find σ first, then μ.
4. Keep unrounded z-values until the end.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--03-amth-normal-standardising.webp" width="900" height="945" alt="Mango mass M ~ N(310, 20²): 280 g is z = −1.5 and 325 g is z = 0.75. P(280 &lt; M &lt; 325) = Φ(0.75) − (1 − Φ(1.5)) = 0.7734 − 0.0668 = 0.7066, shown as three small standard normal curves." loading="lazy">
  <figcaption>Standardise with z = (x − μ)/σ, then use Φ and symmetry to find the area between two values.</figcaption>
</figure>


## Worked reminder

X ~ N(64, 3²). Find P(X > 70) and the value exceeded by 80% of the distribution.

```
z = (70 − 64)/3 = 2, so P(X > 70) = 0.0228 (3 s.f.)
80% exceed t, so P(X < t) = 0.2, z = −0.8416
t = 64 − 0.8416 × 3 = 61.5 (3 s.f.)
```

### Useful z-values to recognise

| Area to the left | 0.75 | 0.80 | 0.85 | 0.90 | 0.95 | 0.975 | 0.99 |
|---|---|---|---|---|---|---|---|
| z | 0.6745 | 0.8416 | 1.0364 | 1.2816 | 1.6449 | 1.9600 | 2.3263 |

These come from the inverse normal function on your calculator. By symmetry, an area of 0.25 on the left has z = −0.6745. Recognising them lets you check an answer for sense. For example, a 90% point is a little over one standard deviation above the mean.

### Worked reminder: two unknowns

Y ~ N(μ, σ²) with P(Y < 18) = 0.25 and P(Y < 30) = 0.9. Find μ and σ.

```
18 = μ − 0.6745σ
30 = μ + 1.2816σ
Subtract: 12 = 1.9561σ, so σ = 6.13 (3 s.f.)
μ = 18 + 0.6745 × 6.1348 = 22.1 (3 s.f.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--05-amth-normal-two-unknowns.webp" width="900" height="870" alt="With P(X &lt; 30) = 0.20 and P(X &gt; 46) = 0.10, 30 lies 0.8416σ below the mean and 46 lies 1.2816σ above it, so 16 = 2.1232σ, giving σ = 7.54 and μ = 36.3." loading="lazy">
  <figcaption>Two probability statements give two linear equations in μ and σ.</figcaption>
</figure>


### Worked reminder: histogram facts

A bell-shaped histogram of 500 values has mean 52 and standard deviation 4. About two-thirds, roughly 333 values, lie between 48 and 56. About 95% lie between 44 and 60, and almost all lie between 40 and 64. The curve fitted to it has points of inflection at x = 48 and x = 56.

## 2.04h: Choosing a model

| Context | Model | Reason to quote |
|---|---|---|
| Count of successes in a fixed number of independent trials, constant p | Binomial B(n, p) | The conditions hold in context |
| Continuous measurement, symmetrical, one peak | Normal N(μ, σ²) | Bell-shaped histogram |
| Large n in a binomial | Binomial, or normal as an approximation | See below |
| Skewed data with a hard lower limit | Neither standard model fits well | Normal is symmetrical and unbounded |

**Normal model limitations.** It gives non-zero probability to impossible values (negative lengths or times). It cannot represent skew. Real measurements are recorded to a finite accuracy.

**Binomial model limitations.** The probability may change between trials. Trials may depend on each other, for example when selecting without replacement from a small group. The number of trials may not be fixed.

**Binomial approximated by normal.** If X ~ B(n, p) with n large, X is approximately N(np, npq) where q = 1 − p. The specification excludes questions that explicitly require calculations using this approximation. The continuity correction (treat "X ≤ r" as "X < r + 0.5") is the idea behind it, because a whole-number count is being modelled by a continuous variable.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-continuous-uniform-distribution-and-the-normal--09-amth-normal-model-limits.webp" width="900" height="1070" alt="N(6, 4²) for assembly time gives 0.0668 probability of a negative time, which is impossible. A second graph compares skewed data with a normal curve of the same mean and spread, which fits poorly and puts about 4% below zero." loading="lazy">
  <figcaption>A normal model gives some probability to impossible values and fits skewed data badly.</figcaption>
</figure>


## Must-know distinctions

- **Variance and standard deviation.** In N(25, 9), σ = 3. In N(25, 3²), σ = 3. Calculators need 3.
- **Left and right areas.** Inverse normal gives the point with the stated area to its left.
- **Continuous and discrete.** A normal variable has P(X = a) = 0. A binomial variable has positive probability at each whole number.
- **Stating a model and justifying it.** A bare model name is weaker than a name tied to the context.

## Quick self-test

Let X ~ N(40, 5²) for questions 1 to 6.

1. Find P(X < 46).
2. Find P(X > 35).
3. Find P(34 < X < 47).
4. Find k such that P(X < k) = 0.9.
5. A second variable Y ~ N(40, σ²) has P(Y < 30) = 0.2. Find σ.
6. A third variable W ~ N(μ, 5²) has P(W > 50) = 0.1. Find μ.
7. A normal curve has points of inflection at x = 12 and x = 20. Find μ and σ, and the interval containing about 95% of values.
8. For T ~ N(100, 15²), find P(T < 130).
9. X ~ B(200, 0.3). Write down the normal model that could approximate X.
10. Give one reason why a normal model may be unsuitable for waiting times at an emergency department.

### Answers

1. z = 1.2, so P = 0.885.
2. z = −1, so P = 0.841.
3. P(X < 47) − P(X < 34) = 0.804.
4. z = 1.2816, so k = 40 + 1.2816 × 5 = 46.4.
5. P(Y < 30) = 0.2 gives z = −0.8416, so (30 − 40)/σ = −0.8416 and σ = 11.9.
6. P(W < 50) = 0.9 gives z = 1.2816, so 50 = μ + 1.2816 × 5 and μ = 43.6.
7. μ = (12 + 20)/2 = 16, 2σ = 8 so σ = 4. About 95% lie between 8 and 24.
8. z = 2, so P = 0.977.
9. np = 60 and npq = 200 × 0.3 × 0.7 = 42, so N(60, 42).
10. Waiting times tend to be skewed to the right with a lower limit of zero, but a normal curve is symmetrical and extends below zero.

## Where marks are usually lost

- Typing σ² into the calculator where σ is needed.
- Giving a probability for the wrong tail because no sketch was drawn.
- Using the area to the right in the inverse normal function.
- Rounding z-values early, which shifts a two-unknown answer in the third significant figure.
- Giving "it is normal" as the reason for choosing a normal model, with no reference to continuity, symmetry or the shape of the data.
- Writing a limitation that is generic instead of tied to the context in the question.
- Forgetting to state the distribution and the probability statement before the number.
- Treating P(X = a) as non-zero for a normal variable.
- Subtracting the variance instead of the standard deviation when finding the points of inflection from a given N(μ, σ²).
- Stating the mean as np but forgetting that the variance is npq, not np.
- Quoting the 95% fact as "within one standard deviation", or mixing up the two-thirds and 95% intervals.

Next, test yourself with the [practice questions](/resources/ocr-a-level-mathematics-the-normal-distribution-and-choosing-an-appropriate-practice/) and the [free diagnostics](/diagnostics/).

## Frequently asked questions

**What proportion of values lie within one and two standard deviations of the mean?**
For a normal distribution, about two-thirds of values lie within μ ± σ, about 95% within μ ± 2σ, and almost all within μ ± 3σ.

**Where are the points of inflection on a normal curve?**
At x = μ − σ and x = μ + σ. Use the standard deviation, not the variance, to find them.

**Why is P(X = a) zero for a normal distribution?**
Probability is area under the curve, and a single point has zero area. So P(X < a) and P(X ≤ a) are equal for a normal variable.

**Do you need the equation of the normal curve in OCR A Level Mathematics A (H240)?**
No. The equation of the normal curve is excluded from the specification.

## Official syllabus

OCR Level 3 Advanced GCE in Mathematics A (H240), Version 3.1 (August 2026), for first assessment in 2018, published by OCR. Section 2.04e to 2.04h of the detailed content.
