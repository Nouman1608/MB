---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.12 Standardization of normal variables (z-values) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on IB DP Maths AA section 4.12: z = (x − μ)/σ, inverse normal with unknown μ or σ, a method checklist, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 4.12, standardization of normal variables (z-values)**, in IB DP
Mathematics: Analysis and Approaches (first assessment 2021), examined at SL and HL. The
[4.12 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-12/)
works through each question type in full; the
[4.12 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-12-practice/)
let you test yourself. The properties of the normal curve from 4.9 are in the
[probability and distributions revision notes](/resources/ib-dp-mathematics-aa-probability-distributions-revision-notes/).

## The essentials

```
z = (x − μ)/σ            number of standard deviations from the mean
x = μ + zσ               the same relationship, solved for x
Z ~ N(0, 1)              the standard normal distribution
P(X < x) = P(Z < z)      left-tail areas are preserved
P(Z < −a) = P(Z > a)     symmetry
```

Probabilities and values come from technology (normal cdf and inverse normal). The algebra around
them is done by hand.

## Condensed recall

- **Interpretation.** z = 2 means two standard deviations above the mean; z = −0.5 means half a
  standard deviation below. z has no units.
- **Comparison.** To compare observations from different normal distributions, compare their z-values.
  The larger z is the better relative performance (when higher is better).
- **One unknown.** Convert the given probability to a left-tail area, use inverse normal on N(0, 1)
  to get z, substitute into (x − μ)/σ = z and solve.
- **Two unknowns.** Each probability gives one equation x = μ + zσ. Two equations, two unknowns:
  subtract to eliminate μ, find σ, then back-substitute.
- **Symmetric intervals.** The middle p of a normal distribution has z = ± the value with left area
  (1 + p)/2. For the middle 95%, use area 0.975, so z = ±1.960.
- **Checking.** μ lies on the side of x where more than half the area is. σ is always positive.
  Re-run normal cdf with your answers to confirm the original probability.

## Method checklist for unknown-parameter questions

1. Sketch the curve, mark x and shade the given region.
2. Rewrite the probability as an area to the left.
3. Inverse normal with mean 0 and standard deviation 1 gives z (keep at least four significant
   figures).
4. Write (x − μ)/σ = z.
5. Solve, using simultaneous equations if both μ and σ are unknown.
6. Check signs and re-calculate the original probability.

## Mini-example: two unknowns

Times are normally distributed; 5% are under 20 minutes and 20% are over 35 minutes.

```
Area 0.05:  z₁ = −1.6449     20 = μ − 1.6449σ
Area 0.80:  z₂ =  0.8416     35 = μ + 0.8416σ
Subtract:   15 = 2.4865σ  →  σ = 6.03 minutes
μ = 20 + 1.6449 × 6.0326 = 29.9 minutes (3 s.f.)
```

Check: μ = 29.9 sits between 20 and 35, closer to 35 because the upper tail (20%) is larger than the
lower tail (5%).

## Key terms

| Term | Meaning |
|---|---|
| Standardization | Transforming X ~ N(μ, σ²) into Z ~ N(0, 1) by Z = (X − μ)/σ |
| z-value (standardized value) | The number of standard deviations an observation lies from the mean |
| Standard normal distribution | The normal distribution with mean 0 and standard deviation 1 |
| Inverse normal | The function that returns the value with a given area to its left |
| Left-tail area | P(X < x), the area under the curve to the left of x |
| Parameters | μ (mean) and σ (standard deviation), which fix a normal distribution |

## Exam traps

- **Trap: the tail.** "8% are heavier than 520 g" means area 0.92 to the left of 520, so z is
  positive.
- **Trap: the variance in the notation.** N(60, 16) has σ = 4. Divide by 4, not 16.
- **Trap: the wrong distribution.** With μ or σ unknown, inverse normal must be applied to N(0, 1).
- **Trap: early rounding.** z = 1.28 instead of 1.2816 can change a three significant figure answer
  for σ.
- **Trap: comparing raw marks.** A higher raw score can be the weaker relative performance if that
  test had a higher mean or a larger spread.
- **Trap: a "percentage above" given as a percentile.** "Top 5%" means area 0.95 to the left of the
  cut-off.

## Self-test

1. X ~ N(30, 4²). Find the z-value of x = 24.
2. X ~ N(70, 10²). Which value of x has z = 1.8?
3. What are the mean and standard deviation of Z?
4. P(Z < a) = 0.3. Is a positive or negative?
5. Write the equation linking x, μ, σ and z.
6. P(X > 85) = 0.1. Write down the area to the left of 85 that you would enter in inverse normal.
7. X ~ N(μ, 3²) and the z-value of 50 is 2. Find μ.
8. X ~ N(40, σ²) and the z-value of 46 is 1.5. Find σ.
9. Ana scored 61 where scores were N(50, 10²); Ben scored 58 where scores were N(50, 5²). Who did
   better relative to their group?
10. 50 = μ − σ and 80 = μ + 2σ. Find μ and σ.
11. For N(0, 1), the value with area 0.975 to the left is 1.960. Write down the interval, symmetric
    about the mean, containing the middle 95% of N(200, 20²).
12. A student finds σ = −4.2. What should they conclude?

**Answers**

1. (24 − 30)/4 = −1.5.
2. x = 70 + 1.8 × 10 = 88.
3. Mean 0, standard deviation 1.
4. Negative, because the area to its left is less than 0.5.
5. z = (x − μ)/σ, or x = μ + zσ.
6. 0.9.
7. (50 − μ)/3 = 2, so μ = 44.
8. (46 − 40)/σ = 1.5, so σ = 4.
9. Ana: z = 1.1. Ben: z = 1.6. Ben did better relative to his group.
10. Subtracting: 30 = 3σ, so σ = 10 and μ = 60.
11. 200 ± 1.960 × 20, so 160.8 to 239.2.
12. There is an error (often a tail or sign mistake), because a standard deviation must be positive.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 4.12: standardization of normal variables (z-values);
inverse normal calculations where mean and standard deviation are unknown.
