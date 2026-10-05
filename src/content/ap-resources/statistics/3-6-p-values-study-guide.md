---
resourceId: "mb-ap-stats-3.6-study-guide"
title: "p-Values: Study Guide (Statistics 3.6)"
description: "Learn what a p-value is, how to find it from a simulated or standard normal null distribution for each alternative, and how to interpret it in context without overclaiming."
course: "statistics"
unit: 3
topics: ["3.6"]
resourceType: "study-guide"
prerequisites:
  - "Writing hypotheses and checking conditions for a test about a proportion (Topic 3.5)"
  - "Finding areas under the standard normal curve (Topic 2.11)"
  - "Estimating probabilities with simulation (Topic 2.3)"
prerequisiteResources: ["mb-ap-stats-3.5-study-guide"]
learningObjectives:
  - "Describe the null distribution as the distribution of the test statistic when the null hypothesis is true"
  - "Find a p-value from a simulated null distribution for a greater-than, less-than or two-sided alternative"
  - "Find a p-value from the standard normal distribution for each type of alternative, given the test statistic"
  - "Interpret a p-value in context, stating that it assumes the null value of the population proportion"
  - "Explain what small and not-small p-values do, and do not, tell you about the hypotheses"
skills: ["4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf(lower, upper, 0, 1) for standard normal areas, with a large number such as 99 for an open end. Give p-values to 3 or 4 decimal places."
related: ["mb-ap-stats-3.6-revision-notes", "mb-ap-stats-3.6-practice", "mb-ap-stats-3.6-checklist"]
next: "mb-ap-stats-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The p-value is the probability, assuming H₀ is true, of a test statistic as extreme as the one observed or more extreme, in the direction of Hₐ."
  - "Hₐ: p > p₀ uses the upper tail, Hₐ: p < p₀ the lower tail, and Hₐ: p ≠ p₀ both tails."
  - "From a simulation, the p-value is the proportion of simulated statistics at least as extreme as the observed one."
  - "A small p-value is evidence for Hₐ; the smaller it is, the more convincing the evidence."
  - "A p-value that is not small is not convincing evidence for Hₐ. It is not evidence that H₀ is true."
faqs:
  - question: "Is the p-value the probability that the null hypothesis is true?"
    answer: "No. The p-value is calculated by assuming H₀ is true. It is the probability of data like ours (or more extreme) if H₀ were true, not the probability that H₀ is true given our data."
  - question: "How small does a p-value have to be?"
    answer: "That depends on the significance level, α, which is chosen before the test. Comparing the p-value with α to make a decision is the next step, in Topic 3.7. In this topic, focus on what the p-value means."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## The question a p-value answers

In Topic 3.5 you set up a test: a parameter p, a null hypothesis H₀: p = p₀ and an alternative Hₐ. Now you have a sample result, such as p̂ = 0.26. That result is almost never exactly p₀. The question is whether the difference is **too big to blame on chance**.

A p-value answers this question:

> If H₀ were true, how likely is it that random sampling alone would give a result **as extreme as ours, or more extreme**, in the direction that Hₐ suggests?

If that probability is very small, our result would be surprising under H₀, and the data give evidence for Hₐ. If it is not small, our result is the kind of thing that happens by chance when H₀ is true.

## The null distribution

To find that probability, you need to know how the test statistic behaves when H₀ is true. Its distribution under that assumption is called the **null distribution**. There are two ways to get it.

- **Simulation.** Use technology to take many random samples of the same size from a population where p really equals p₀, and record the statistic for each one. You met this kind of simulation in Topic 2.3.
- **A probability model.** When the conditions from Topic 3.5 are met, the standardised test statistic z has approximately a **standard normal** distribution when H₀ is true. You will calculate z in Topic 3.7. In this topic the value of z is given to you.

Either way, the p-value is an area or a proportion in the null distribution, in the direction of Hₐ.

## Which tail? The rule for each alternative

"More extreme" always means "further in the direction of Hₐ".

| Alternative | p-value from a normal model (observed z) | p-value from a simulation (observed statistic) |
|---|---|---|
| Hₐ: p > p₀ | P(Z ≥ z), the area **at or above** z | proportion of simulated values **at or above** the observed value |
| Hₐ: p < p₀ | P(Z ≤ z), the area **at or below** z | proportion of simulated values **at or below** the observed value |
| Hₐ: p ≠ p₀ | P(Z ≤ −\|z\|) + P(Z ≥ \|z\|), both tails | proportion of simulated values at least as far from p₀ as the observed value, **on either side** |

For a two-sided test with a normal model, the two tails are equal, so the p-value is 2 × P(Z ≥ |z|).

For a two-sided test with a simulated p̂, measure the distance d = |p̂ − p₀|. Then count simulated values at or below p₀ − d **and** at or above p₀ + d. A simulated distribution is rarely perfectly symmetric, so count both tails rather than doubling one.

## Interpreting a p-value in context

A good interpretation has three parts:

1. **The assumption:** "Assuming the true proportion of [population] who [response] is [p₀]…"
2. **The probability:** "…there is a [p-value] probability…"
3. **The event:** "…of getting a sample proportion of [observed p̂] or [higher / lower / further from p₀] in a random sample of [n] [individuals], by chance alone."

Leaving out part 1 is the most common error. Without it, the statement describes something else, and it is not the p-value.

## What small and not-small p-values tell you

- A **small** p-value means the observed result would be unusual if H₀ were true. So it gives **evidence for Hₐ**. The smaller the p-value, the more convincing the evidence.
- A p-value that is **not small** means the result would not be unusual if H₀ were true. So the data **do not give convincing evidence for Hₐ**. This is **not** evidence that H₀ is true. The true proportion might still differ from p₀, and the sample was simply not able to show it.

A useful comparison is a court case. "Not guilty" means the evidence was not convincing; it does not prove the defendant innocent. A large p-value works the same way.

How small counts as "small" is set by a significance level, α, chosen before collecting data. Comparing the p-value with α to make a formal decision is the job of Topic 3.7.

## What a p-value is not

- It is **not** the probability that H₀ is true.
- It is **not** the probability that Hₐ is true, and 1 − p-value is not that either.
- It is **not** the probability of making a mistake.
- It is **not** the size of the difference. A tiny difference from p₀ can have a small p-value if the sample is very large.

## Worked example 1: a p-value from a simulation

**Question.** The fictional cinema chain Starlite says that 20% of its customers buy a large popcorn. A new manager suspects that the proportion is higher. In a random sample of 50 customers, 13 bought a large popcorn, so p̂ = 13/50 = 0.26. The hypotheses are H₀: p = 0.20 and Hₐ: p > 0.20, where p is the true proportion of all Starlite customers who buy a large popcorn.

The manager uses software to simulate 200 random samples of 50 customers from a population where p = 0.20, and records p̂ for each. Figure 1 shows the results.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="sim36-title sim36-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sim36-title">Simulated null distribution of the sample proportion for 200 samples of 50</title>
<desc id="sim36-desc">A bar chart of 200 simulated sample proportions, each from a sample of 50 with p equal to 0.20. The horizontal axis runs from 0.06 to 0.38 in steps of 0.02. The frequencies are: 0.06: 3, 0.08: 3, 0.10: 7, 0.12: 9, 0.14: 15, 0.16: 19, 0.18: 29, 0.20: 32, 0.22: 28, 0.24: 17, 0.26: 13, 0.28: 12, 0.30: 7, 0.32: 3, 0.34: 1, 0.36: 1, 0.38: 1. The distribution peaks at 0.20 and is roughly symmetric. A dashed vertical line at the left edge of the 0.26 bar marks where the values at or above the observed sample proportion of 0.26 begin. Bars at 0.26 and above are hatched; they contain 38 of the 200 simulated samples.</desc>
<defs><pattern id="sim-hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<line x1="50" y1="230" x2="620" y2="230" stroke="#1d2b44" stroke-width="2"/>
<rect x="52.0" y="217.2" width="29.5" height="12.8" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="85.5" y="217.2" width="29.5" height="12.8" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="119.1" y="200.2" width="29.5" height="29.8" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="152.6" y="191.8" width="29.5" height="38.2" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="186.1" y="166.2" width="29.5" height="63.8" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="219.6" y="149.2" width="29.5" height="80.8" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="253.2" y="106.8" width="29.5" height="123.2" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="286.7" y="94.0" width="29.5" height="136.0" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="320.2" y="111.0" width="29.5" height="119.0" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="353.8" y="157.8" width="29.5" height="72.2" fill="#c9d3e3" stroke="#1d2b44" stroke-width="1"/>
<rect x="387.3" y="174.8" width="29.5" height="55.2" fill="url(#sim-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="420.8" y="179.0" width="29.5" height="51.0" fill="url(#sim-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="454.4" y="200.2" width="29.5" height="29.8" fill="url(#sim-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="487.9" y="217.2" width="29.5" height="12.8" fill="url(#sim-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="521.4" y="225.8" width="29.5" height="4.2" fill="url(#sim-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="554.9" y="225.8" width="29.5" height="4.2" fill="url(#sim-hatch)" stroke="#1d2b44" stroke-width="1"/>
<rect x="588.5" y="225.8" width="29.5" height="4.2" fill="url(#sim-hatch)" stroke="#1d2b44" stroke-width="1"/>
<g font-size="11" fill="#1d2b44" text-anchor="middle"><text x="66.8" y="213.2">3</text><text x="100.3" y="213.2">3</text><text x="133.8" y="196.2">7</text><text x="167.4" y="187.8">9</text><text x="200.9" y="162.2">15</text><text x="234.4" y="145.2">19</text><text x="267.9" y="102.8">29</text><text x="301.5" y="90.0">32</text><text x="335.0" y="107.0">28</text><text x="368.5" y="153.8">17</text><text x="402.1" y="170.8">13</text><text x="435.6" y="175.0">12</text><text x="469.1" y="196.2">7</text><text x="502.6" y="213.2">3</text><text x="536.2" y="221.8">1</text><text x="569.7" y="221.8">1</text><text x="603.2" y="221.8">1</text></g>
<g font-size="10" fill="#1d2b44" text-anchor="middle"><text x="66.8" y="246">0.06</text><text x="100.3" y="246">0.08</text><text x="133.8" y="246">0.10</text><text x="167.4" y="246">0.12</text><text x="200.9" y="246">0.14</text><text x="234.4" y="246">0.16</text><text x="267.9" y="246">0.18</text><text x="301.5" y="246">0.20</text><text x="335.0" y="246">0.22</text><text x="368.5" y="246">0.24</text><text x="402.1" y="246">0.26</text><text x="435.6" y="246">0.28</text><text x="469.1" y="246">0.30</text><text x="502.6" y="246">0.32</text><text x="536.2" y="246">0.34</text><text x="569.7" y="246">0.36</text><text x="603.2" y="246">0.38</text></g>
<text x="335.0" y="270" text-anchor="middle" font-size="13" fill="#1d2b44">Simulated sample proportion p̂ (200 samples of 50, assuming p = 0.20)</text>
<line x1="385.3" y1="40" x2="385.3" y2="230" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="391.3" y="38" font-size="12" fill="#1d2b44">observed p̂ = 0.26</text>
<text x="391.3" y="120" font-size="12" fill="#1d2b44">hatched: 38 of 200 at or above 0.26</text>
</svg>
<figcaption>Figure 1. Simulated null distribution for the Starlite example. Each bar counts simulated samples of 50 customers with that sample proportion when p = 0.20. Hatched bars: samples at or above the observed p̂ = 0.26 (13 + 12 + 7 + 3 + 1 + 1 + 1 = 38 samples).</figcaption>
</figure>

(a) Use the simulation to estimate the p-value.
(b) Interpret the p-value in context.
(c) Do the data give convincing evidence that more than 20% of Starlite customers buy a large popcorn?

**(a)** Hₐ is "greater than", so count the simulated values **at or above** 0.26:

13 + 12 + 7 + 3 + 1 + 1 + 1 = 38. The estimated p-value is 38 ÷ 200 = **0.19**.

**(b)** Assuming the true proportion of Starlite customers who buy a large popcorn is 0.20, there is about a 0.19 probability of getting a sample proportion of 0.26 or higher in a random sample of 50 customers, by chance alone.

**(c)** No. A result like this would happen in about 19% of samples even if the true proportion were 0.20. That is not unusual, so the data do **not** give convincing evidence that the proportion is greater than 0.20. This does **not** show that the proportion is exactly 0.20; it shows only that this sample cannot rule it out.

**Check.** The simulated distribution is centred close to 0.20 (the mean of the 200 values is 0.2004), as it should be when H₀ is true. With a probability model, the exact chance of 13 or more buyers in 50 when p = 0.20 is about 0.186, close to the simulated 0.19.

## Worked example 2: a p-value from the standard normal distribution

**Question.** Records at the fictional bakery chain Hearth & Crumb show that 30% of online orders include a gift note. After a website redesign, the manager wants to know whether this proportion has **changed**. In a random sample of 200 recent online orders, 45 include a gift note (p̂ = 0.225). The hypotheses are H₀: p = 0.30 and Hₐ: p ≠ 0.30. The conditions are met (np₀ = 60 and n(1 − p₀) = 140 are both at least 10, and the chain received far more than 2,000 recent online orders, so 200 ≤ 10% of them). The test statistic is **z = −2.31**.

(a) Find the p-value.
(b) Interpret it in context.
(c) What would the p-value be if the manager had suspected a decrease, Hₐ: p < 0.30? And for Hₐ: p > 0.30?

**(a)** Hₐ is two-sided, so add both tails beyond ±2.31.

1. Lower tail: P(Z ≤ −2.31) = normalcdf(−99, −2.31, 0, 1) ≈ 0.0104.
2. Upper tail: P(Z ≥ 2.31) ≈ 0.0104 (the curve is symmetric).
3. p-value = 0.0104 + 0.0104 ≈ **0.021**.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="norm36-title norm36-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="norm36-title">Two-sided p-value as two tail areas of the standard normal curve</title>
<desc id="norm36-desc">A standard normal curve with a horizontal axis from minus 3 to 3. Dashed vertical lines mark z equals minus 2.31, labelled observed, and z equals 2.31. The area to the left of minus 2.31 and the area to the right of 2.31 are hatched and each labelled area 0.0104. A heading reads p-value equals 0.0104 plus 0.0104, approximately 0.021.</desc>
<defs><pattern id="tail-hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<path d="M40.0,200 L40.0,199.9 L47.0,199.9 L54.0,199.9 L61.0,199.8 L68.0,199.8 L75.0,199.7 L82.0,199.5 L89.0,199.4 L96.0,199.1 L103.0,198.8 L110.0,198.3 L117.0,197.8 L124.0,197.0 L131.0,196.1 L138.0,194.9 L145.0,193.4 L152.0,191.6 L158.3,189.6 L158.3,200 Z" fill="url(#tail-hatch)" stroke="#1d2b44" stroke-width="1"/>
<path d="M481.7,200 L481.7,189.6 L488.0,191.6 L495.0,193.4 L502.0,194.9 L509.0,196.1 L516.0,197.0 L523.0,197.8 L530.0,198.3 L537.0,198.8 L544.0,199.1 L551.0,199.4 L558.0,199.5 L565.0,199.7 L572.0,199.8 L579.0,199.8 L586.0,199.9 L593.0,199.9 L600.0,199.9 L600.0,200 Z" fill="url(#tail-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polyline points="40.0,199.9 47.0,199.9 54.0,199.9 61.0,199.8 68.0,199.8 75.0,199.7 82.0,199.5 89.0,199.4 96.0,199.1 103.0,198.8 110.0,198.3 117.0,197.8 124.0,197.0 131.0,196.1 138.0,194.9 145.0,193.4 152.0,191.6 159.0,189.3 166.0,186.7 173.0,183.5 180.0,179.7 187.0,175.3 194.0,170.3 201.0,164.6 208.0,158.3 215.0,151.3 222.0,143.7 229.0,135.6 236.0,127.0 243.0,118.1 250.0,109.0 257.0,100.0 264.0,91.1 271.0,82.6 278.0,74.7 285.0,67.6 292.0,61.5 299.0,56.6 306.0,53.0 313.0,50.7 320.0,50.0 327.0,50.7 334.0,53.0 341.0,56.6 348.0,61.5 355.0,67.6 362.0,74.7 369.0,82.6 376.0,91.1 383.0,100.0 390.0,109.0 397.0,118.1 404.0,127.0 411.0,135.6 418.0,143.7 425.0,151.3 432.0,158.3 439.0,164.6 446.0,170.3 453.0,175.3 460.0,179.7 467.0,183.5 474.0,186.7 481.0,189.3 488.0,191.6 495.0,193.4 502.0,194.9 509.0,196.1 516.0,197.0 523.0,197.8 530.0,198.3 537.0,198.8 544.0,199.1 551.0,199.4 558.0,199.5 565.0,199.7 572.0,199.8 579.0,199.8 586.0,199.9 593.0,199.9 600.0,199.9" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="40.0" y1="200" x2="600.0" y2="200" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="110.0" y1="200" x2="110.0" y2="206"/><line x1="180.0" y1="200" x2="180.0" y2="206"/><line x1="250.0" y1="200" x2="250.0" y2="206"/><line x1="320.0" y1="200" x2="320.0" y2="206"/><line x1="390.0" y1="200" x2="390.0" y2="206"/><line x1="460.0" y1="200" x2="460.0" y2="206"/><line x1="530.0" y1="200" x2="530.0" y2="206"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="110.0" y="220">−3</text><text x="180.0" y="220">−2</text><text x="250.0" y="220">−1</text><text x="320.0" y="220">0</text><text x="390.0" y="220">1</text><text x="460.0" y="220">2</text><text x="530.0" y="220">3</text></g>
<text x="320" y="244" text-anchor="middle" font-size="13" fill="#1d2b44">z (standard normal null distribution)</text>
<line x1="158.3" y1="110" x2="158.3" y2="200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="154.3" y="106" text-anchor="end" font-size="12" fill="#1d2b44">z = −2.31 (observed)</text>
<line x1="481.7" y1="110" x2="481.7" y2="200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="485.7" y="106" text-anchor="start" font-size="12" fill="#1d2b44">z = 2.31</text>
<text x="96.0" y="170" text-anchor="middle" font-size="12" fill="#1d2b44">area 0.0104</text>
<text x="544.0" y="170" text-anchor="middle" font-size="12" fill="#1d2b44">area 0.0104</text>
<g stroke="#1d2b44" stroke-width="1"><line x1="110" y1="175" x2="145" y2="194"/><line x1="530" y1="175" x2="495" y2="194"/></g>
<text x="320" y="30" text-anchor="middle" font-size="13" fill="#1d2b44">p-value = 0.0104 + 0.0104 ≈ 0.021</text>
</svg>
<figcaption>Figure 2. For Hₐ: p ≠ 0.30, the p-value is the hatched area in both tails, beyond z = −2.31 and z = 2.31.</figcaption>
</figure>

**(b)** Assuming the true proportion of Hearth & Crumb online orders that include a gift note is still 0.30, there is about a 0.021 probability of getting a sample proportion at least as far from 0.30 as 0.225 (in either direction) in a random sample of 200 orders, by chance alone.

This is a small probability. A result this far from 0.30 would be unusual if the proportion had not changed, so the data give evidence that the proportion of orders with a gift note has changed.

**(c)** For Hₐ: p < 0.30, use only the lower tail: p-value = P(Z ≤ −2.31) ≈ **0.0104**. For Hₐ: p > 0.30, use the area **at or above** −2.31: p-value = P(Z ≥ −2.31) ≈ **0.9896**. The sample proportion is *below* 0.30, so it gives no evidence at all that the proportion has *increased*.

**Check.** Whenever the observed statistic is on the opposite side of p₀ from Hₐ, the p-value is greater than 0.5. If you get a p-value near 1, check the direction of the tail before reporting it.

## Common misconceptions

- **"The p-value is the probability that H₀ is true."** The p-value assumes H₀ is true. It measures how surprising the data are under that assumption.
- **Leaving out the assumption** in an interpretation. Always start with "Assuming the true proportion … is p₀".
- **"A large p-value proves H₀."** It means only that the data are not convincing evidence for Hₐ.
- **Using the wrong tail.** For Hₐ: p < p₀, the p-value is the area *at or below* the observed z, not above it.
- **Forgetting to add both tails** for a two-sided alternative.
- **Counting the wrong simulated values.** Count values *at least as extreme* as the observed one, including the observed value itself.
- **Thinking a small p-value means a big difference.** It means the difference is hard to explain by chance; the size of the difference is a separate question.
- **"1 − p-value is the probability that Hₐ is true."** No such probability comes from a test.

## Where this leads

In [Topic 3.7, Carrying Out a Test for a Population Proportion](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-study-guide/), you will calculate z yourself, compare the p-value with a significance level α, and write a full conclusion in context. Before that, try the [practice questions](/advanced-course-resources/statistics/3-6-p-values-practice/), then use the [revision notes](/advanced-course-resources/statistics/3-6-p-values-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-6-p-values-checklist/). To revise how a test is set up, see the [Topic 3.5 study guide](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/).
