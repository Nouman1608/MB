---
resourceId: "mb-ap-chem-5.3-study-guide"
title: "Concentration Changes Over Time: Study Guide (Chemistry 5.3)"
description: "Learn how to find the order of a reaction from concentration–time data, read the rate constant from a straight-line graph, and use half-life for first-order reactions and radioactive decay."
course: "chemistry"
unit: 5
topics: ["5.3"]
resourceType: "study-guide"
prerequisites:
  - "Rate laws, reaction order and the rate constant (Topic 5.2)"
  - "Natural logarithms (ln) and the equation of a straight line, y = mx + b"
prerequisiteResources: ["mb-ap-chem-5.2-study-guide"]
learningObjectives:
  - "Decide whether a reaction is zero, first or second order in a reactant by testing which graph of its concentration against time is straight"
  - "Find the rate constant, with correct units, from the slope of the straight-line graph"
  - "Use the integrated rate laws to predict a concentration at a given time, or the time needed to reach a given concentration"
  - "Explain why the half-life of a first-order reaction is constant and use t½ = 0.693/k"
  - "Treat radioactive decay as a first-order process and calculate how much of a sample remains"
skills: ["5"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use the ln key (natural log), not log; keep unrounded values until the final step"
related: ["mb-ap-chem-5.3-revision-notes", "mb-ap-chem-5.3-practice", "mb-ap-chem-5.3-checklist"]
next: "mb-ap-chem-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Plot the reactant concentration three ways against time: [A], ln[A] and 1/[A]. The plot that is a straight line tells you the order (zero, first or second)."
  - "The slope of the straight line gives k: slope = −k for zero and first order, slope = +k for second order. k itself is always positive."
  - "The units of k show the order: M s⁻¹ (zero), s⁻¹ (first), M⁻¹ s⁻¹ (second)."
  - "Only a first-order reaction has a constant half-life, t½ = 0.693/k, whatever the starting concentration."
  - "Radioactive decay is first order, so every half-life removes half of what is left."
faqs:
  - question: "Do I have to memorise the three integrated rate laws?"
    answer: "No. All three, and t½ = 0.693/k, are on the formula sheet in the exam. You do need to know which graph each one makes straight and what the slope means."
  - question: "Where does 0.693 come from?"
    answer: "It is ln 2, rounded to three significant figures. Half-life is the time for [A] to fall to half, and ln(1/2) = −0.693."
  - question: "Can I plot absorbance instead of concentration?"
    answer: "Yes, if absorbance is directly proportional to concentration (Beer's law). The same plot will be straight and the slope gives the same k for a first-order reaction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From a rate law to a concentration–time graph

In [Topic 5.2](/advanced-course-resources/chemistry/5-2-introduction-rate-law-study-guide/) you found rate laws by comparing **initial rates** from several experiments. This topic uses a different kind of data: you run **one** experiment and measure the concentration of one reactant again and again as the reaction goes on.

Suppose the rate law for the reactant you are watching, A, is

rate = k[A]ⁿ

where n is the order (0, 1 or 2 in this course). If other reactants are present, either they are not in the rate law or they are in such large excess that their concentrations barely change. Then only [A] controls the rate.

As A is used up, [A] falls. What happens next depends on the order:

- **Zero order (n = 0):** rate = k. The rate does not depend on [A], so [A] falls by the same amount in every second. The graph of [A] against time is a straight line.
- **First order (n = 1):** rate = k[A]. When [A] halves, the rate halves. [A] falls quickly at first, then more slowly.
- **Second order (n = 2):** rate = k[A]². When [A] halves, the rate drops to one quarter. The slowing down is even stronger.

So the **shape** of the concentration–time data carries the order. The trick is to turn the curved graphs into straight lines, because a straight line is easy to recognise and its slope is easy to measure.

## The three integrated rate laws

Calculus turns each rate law into an equation that links [A] to time. You will not be asked to derive these. They are on the formula sheet:

| Order | Rate law | Integrated rate law | Plot that is straight | Slope | Units of k |
|---|---|---|---|---|---|
| 0 | rate = k | [A]ₜ − [A]₀ = −kt | [A] vs t | −k | M s⁻¹ |
| 1 | rate = k[A] | ln[A]ₜ − ln[A]₀ = −kt | ln[A] vs t | −k | s⁻¹ |
| 2 | rate = k[A]² | 1/[A]ₜ − 1/[A]₀ = kt | 1/[A] vs t | +k | M⁻¹ s⁻¹ |

[A]₀ is the concentration at the start (t = 0) and [A]ₜ is the concentration at time t. If time is measured in minutes, replace s with min in the units.

Each integrated law has the form y = mx + b. For first order, rearrange it to:

ln[A]ₜ = −kt + ln[A]₀

Here y = ln[A]ₜ, x = t, slope m = −k and intercept b = ln[A]₀. The other two work the same way.

**Why the second-order slope is positive.** As [A] falls, 1/[A] **rises**. So the 1/[A] line slopes upward, and the slope is +k. In all three cases k is a positive number.

## Testing the data: which plot is straight?

<figure>
<svg viewBox="0 0 650 210" role="img" aria-labelledby="order-plots-title order-plots-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="order-plots-title">The same first-order data plotted three ways</title>
<desc id="order-plots-desc">Three small graphs of one set of data for a first-order reaction over 200 seconds, with five measured points marked on each. Left: concentration of A against time is a curve that falls steeply then levels off. Middle: natural log of the concentration against time is a straight line falling from 0 to minus 2. Right: one over the concentration against time is a curve that rises more and more steeply.</desc>
<line x1="40" y1="160" x2="200" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="40" y1="30" x2="40" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="40.0,30.0 48.0,42.4 56.0,53.6 64.0,63.7 72.0,72.9 80.0,81.2 88.0,88.7 96.0,95.4 104.0,101.6 112.0,107.1 120.0,112.2 128.0,116.7 136.0,120.8 144.0,124.6 152.0,127.9 160.0,131.0 168.0,133.8 176.0,136.3 184.0,138.5 192.0,140.6 200.0,142.4" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="40.0" cy="30.0" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="80.0" cy="81.2" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="120.0" cy="112.2" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="160.0" cy="131.0" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="200.0" cy="142.4" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="120" y="18" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">[A] vs time</text>
<text x="120" y="178" text-anchor="middle" font-size="12" fill="#1d2b44">time (s), 0 to 200</text>
<text x="120" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">curve</text>
<line x1="255" y1="160" x2="415" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="255" y1="30" x2="255" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="255.0,30.0 415.0,160.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="255.0" cy="30.0" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="295.0" cy="62.5" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="335.0" cy="95.0" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="375.0" cy="127.5" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="415.0" cy="160.0" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="335" y="18" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">ln[A] vs time</text>
<text x="335" y="178" text-anchor="middle" font-size="12" fill="#1d2b44">time (s), 0 to 200</text>
<text x="335" y="198" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">straight line</text>
<line x1="470" y1="160" x2="630" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="470" y1="30" x2="470" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="470.0,143.8 478.0,142.0 486.0,140.2 494.0,138.1 502.0,135.8 510.0,133.2 518.0,130.4 526.0,127.3 534.0,123.8 542.0,120.0 550.0,115.8 558.0,111.2 566.0,106.0 574.0,100.4 582.0,94.1 590.0,87.2 598.0,79.5 606.0,71.0 614.0,61.7 622.0,51.4 630.0,39.9" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="470.0" cy="143.8" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="510.0" cy="133.2" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="550.0" cy="115.8" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="590.0" cy="87.2" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="630.0" cy="39.9" r="3.5" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="550" y="18" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">1/[A] vs time</text>
<text x="550" y="178" text-anchor="middle" font-size="12" fill="#1d2b44">time (s), 0 to 200</text>
<text x="550" y="198" text-anchor="middle" font-size="13" fill="#1d2b44">curve</text>
</svg>
<figcaption>Figure 1. One invented first-order data set ([A]₀ = 1.00 M, k = 0.0100 s⁻¹) plotted three ways. Only ln[A] against time gives a straight line, so the reaction is first order in A. Its slope is −0.0100 s⁻¹, so k = 0.0100 s⁻¹.</figcaption>
</figure>

The method is always the same:

1. Make three columns from your data: [A], ln[A] and 1/[A].
2. Check which column changes by the **same amount** in each equal time interval (or plot all three and see which is straight).
3. The straight one gives the order. Its slope gives k.

You do not need a graph to spot a straight line. If the times are equally spaced, a straight line means the **differences between neighbouring values are constant**. In Figure 1 the five ln[A] values are 0, −0.5, −1.0, −1.5 and −2.0: each step is −0.5. The [A] values (1.00, 0.607, 0.368, 0.223, 0.135) fall by smaller and smaller amounts, so that plot curves.

**Use enough data.** Over the first few per cent of a reaction, all three plots look almost straight. A fair test needs data covering a large fall in [A], ideally more than one half-life.

## Half-life

The **half-life**, t½, is the time it takes for the concentration of a reactant to fall to half of its value at the start of that time.

For a **first-order** reaction, put [A]ₜ = ½[A]₀ into the integrated law:

ln(½[A]₀) − ln[A]₀ = −kt½, so ln(½) = −kt½, so **t½ = ln 2 / k = 0.693/k**

[A]₀ has cancelled out. The half-life of a first-order reaction does **not** depend on how much you start with. It takes the same time to go from 1.00 M to 0.50 M as from 0.50 M to 0.25 M. That makes it a useful single number to describe how fast the reaction is, and a quick test for first order: if equal times always halve the concentration, the reaction is first order.

After n half-lives the fraction left is (½)ⁿ: one half, then one quarter, one eighth, one sixteenth.

For zero-order and second-order reactions the half-life is **not** constant. A zero-order reaction removes the same amount per second, so each half-life is shorter than the one before. A second-order reaction slows down sharply as [A] falls, so each half-life is longer than the one before. (You do not need half-life equations for these orders; the integrated rate law always works.)

## Radioactive decay: first order in action

A radioactive nucleus decays on its own. It does not need to collide with anything, and each nucleus has the same chance of decaying in the next second. So the number of decays per second is proportional to the number of nuclei still present: rate = kN. This is a first-order rate law.

That is why every radioactive isotope has a fixed half-life. For example, carbon-14 has a half-life of about 5700 years and phosphorus-32 about 14.3 days. You can use exactly the same equations, with the amount of isotope (mass, moles or number of nuclei) in place of concentration.

## Worked example 1: finding the order from a table

**Question.** An invented compound X decomposes at constant temperature. A student records:

| t (s) | 0 | 100 | 200 | 300 | 400 |
|---|---|---|---|---|---|
| [X] (M) | 0.500 | 0.250 | 0.167 | 0.125 | 0.100 |

(a) Determine the order of the reaction in X. (b) Write the rate law and find k. (c) Predict [X] at t = 600 s.

**(a) Test the three columns.**

| t (s) | [X] (M) | ln[X] | 1/[X] (M⁻¹) |
|---|---|---|---|
| 0 | 0.500 | −0.693 | 2.00 |
| 100 | 0.250 | −1.386 | 4.00 |
| 200 | 0.167 | −1.790 | 5.99 |
| 300 | 0.125 | −2.079 | 8.00 |
| 400 | 0.100 | −2.303 | 10.00 |

- The concentration [X] changes by −0.250, −0.083, −0.042, −0.025: not constant, so not zero order.
- ln[X] changes by −0.693, −0.404, −0.289, −0.224: not constant, so not first order.
- 1/[X] changes by +2.00, +1.99, +2.01, +2.00: constant within the rounding of the data (0.167 M is 1/6 M rounded). **The reaction is second order in X.**

**(b)** slope = (10.00 − 2.00) M⁻¹ ÷ (400 − 0) s = 0.0200 M⁻¹ s⁻¹. For second order, slope = +k.

**rate = k[X]², k = 0.0200 M⁻¹ s⁻¹**

**(c)** 1/[X]ₜ = 1/[X]₀ + kt = 2.00 M⁻¹ + (0.0200 M⁻¹ s⁻¹)(600 s) = 14.0 M⁻¹, so [X] = 1 ÷ 14.0 = **0.0714 M**.

**Check with half-lives.** [X] fell from 0.500 to 0.250 M in 100 s, but from 0.250 to 0.125 M took 200 s. The half-life doubled, which fits second order and rules out first order.

## Worked example 2: radioactive decay and half-life

**Question.** A laboratory receives 80.0 μg of phosphorus-32, which has a half-life of 14.3 days. (a) Calculate the rate constant. (b) What mass of phosphorus-32 is left after 30.0 days? (c) How long until only 5.0 μg is left?

**(a)** k = 0.693 / t½ = 0.693 ÷ 14.3 days = **0.0485 day⁻¹** (keep 0.048462 for later steps).

**(b)** Use the first-order integrated law with mass in place of concentration:

ln mₜ = ln m₀ − kt = ln 80.0 − (0.048462 day⁻¹)(30.0 days) = 4.3820 − 1.4538 = 2.9282

mₜ = e^2.9282 = **18.7 μg**

**Check.** 30.0 days is just over two half-lives (30.0 ÷ 14.3 = 2.10). Two half-lives would leave 80.0 → 40.0 → 20.0 μg, so a little under 20 μg is right.

**(c)** 80.0 → 40.0 → 20.0 → 10.0 → 5.0 μg is four half-lives, so t = 4 × 14.3 = **57.2 days**. The integrated law gives the same: t = ln(80.0/5.0) ÷ 0.048462 day⁻¹ = 57.2 days.

## Worked example 3: a zero-order reaction

**Question.** An invented gas Q decomposes on a hot metal surface. [Q] falls from 0.800 M to 0.620 M in the first 60 s, and the [Q] against time graph is a straight line. (a) Find k. (b) How long until all of Q is gone, if the line stays straight?

**(a)** A straight [Q] against t graph means zero order. slope = (0.620 − 0.800) M ÷ 60 s = −0.00300 M s⁻¹, so **k = 3.00 × 10⁻³ M s⁻¹**.

**(b)** [Q]ₜ = 0 when kt = [Q]₀: t = 0.800 M ÷ 0.00300 M s⁻¹ = **267 s**.

**Interpretation.** The first half-life (0.800 → 0.400 M) takes 133 s, but the next (0.400 → 0.200 M) takes only 67 s. Zero-order half-lives get shorter. In real systems the zero-order behaviour usually stops before [Q] reaches zero, because the rate eventually starts to depend on [Q] again.

## Common misconceptions

- **"A first-order reaction is finished after two half-lives."** No. Each half-life removes half of what is **left**, so after two half-lives one quarter remains.
- **"Every reaction has a constant half-life."** Only first-order reactions do. Use changing half-lives as evidence against first order.
- **"The slope of the second-order plot is −k."** For second order, 1/[A] rises, so the slope is +k. k is never negative.
- **Using log instead of ln.** The integrated law and t½ = 0.693/k use the natural log. A plot of log[A] is also straight for first order, but its slope is not −k.
- **Plotting the product.** The test is for the reactant whose order you want. A product's concentration rises, and its plots behave differently.
- **Mixing time units.** If k is in min⁻¹, time must be in minutes. Convert before you substitute.
- **Deciding from a short stretch of data.** Over a small fall in concentration, every plot looks nearly straight.

## Where this leads

This topic builds directly on [Topic 5.2, Introduction to Rate Law](/advanced-course-resources/chemistry/5-2-introduction-rate-law-study-guide/). Next, [Topic 5.4, Elementary Reactions](/advanced-course-resources/chemistry/5-4-elementary-reactions-study-guide/), asks where rate laws come from at the particle level. The link between absorbance and concentration ([Topic 3.13, Beer-Lambert Law](/advanced-course-resources/chemistry/3-13-beer-lambert-law-study-guide/)) is a common way to collect concentration–time data in the lab. Try the [practice questions](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-checklist/) to consolidate.
