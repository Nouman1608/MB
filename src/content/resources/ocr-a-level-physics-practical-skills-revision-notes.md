---
title: "OCR A Level Physics: Development of Practical Skills — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Development of practical skills in physics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "development-of-practical-skills-in-physics-ocr-alevel"
    subtopic: "practical-skills-assessed-in-a-written-examination"
description: "Condensed recall notes on variables, uncertainty, errors, graphical analysis and experimental technique for OCR A Level Physics H556."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Development of Practical Skills study guide](/resources/ocr-a-level-physics-development-of-practical-skills/).

## Variables and design

**Independent** — what you change. **Dependent** — what you measure. **Control** — kept constant.

A **control variable** is not the same as a **control experiment**: the latter is a parallel run with the independent variable absent, showing the observed effect is caused by the factor being tested.

Choose instruments with **resolution appropriate to the quantity** — a micrometer, not a ruler, for a wire's diameter — and state a sensible **range and interval**, typically at least **six values** spread across the range. A **risk assessment** must be specific: the **hazard**, the **risk** it creates, and the **control measure** — a generic "wear safety goggles" with no link to the actual experiment earns nothing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-development-of-practical-skills--02-plan-variables-instrument.webp" width="900" height="900" alt="Independent, dependent and control variables, then instrument choice by resolution: an illustrative 0.50 mm wire read with a ruler (+/-0.5 mm, 100%) or a micrometer (+/-0.005 mm, 1%), and at least six values." loading="lazy">
  <figcaption>Choose variables and an instrument whose resolution suits the quantity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-practical-endorsement-skills-apparatus-and-techniques--07-safety-hazard-harm-control.webp" width="900" height="930" alt="Four apparatus with the harm each could cause and a specific control: laser, hot water, falling mass and high current." loading="lazy">
  <figcaption>Name the hazard, say what could be harmed, then give a control that fits the apparatus.</figcaption>
</figure>


## The four words that decide marks

| Term | Meaning |
|---|---|
| **Accurate** | Close to the **true value** |
| **Precise** | Repeat readings agree **with each other** |
| **Repeatable** | Same result, same method, same person |
| **Reproducible** | Same result, **different** method or person |

**Precise but not accurate** is the case examiners test: a miscalibrated instrument gives tightly grouped readings that are all consistently wrong.

**More repeats improve reliability, reveal anomalies, and improve the accuracy of the mean by reducing the effect of random error — but they do nothing for a systematic error.** Removing a systematic error needs better-calibrated or more sensitive apparatus.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--04-precision-accuracy.webp" width="900" height="1160" alt="Four targets with six shots each: tight and centred (precise and accurate); tight but off-centre (systematic error); spread with mean on the bullseye (random error); spread and off-centre (both)." loading="lazy">
  <figcaption>Systematic error shifts all readings; random error scatters them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--05-repeat-readings.webp" width="900" height="880" alt="Five timings 1.52, 1.58, 1.55, 1.49 and 1.56 s on a number line with mean 1.54 s. Range 0.09 s, half range 0.045 s, 2.9 percent; result 1.54 +/- 0.05 s." loading="lazy">
  <figcaption>Half the range is a common estimate of the uncertainty in a mean.</figcaption>
</figure>


## Errors

**Random** — unpredictable scatter; reduced by repeating and averaging.
**Systematic** — a consistent offset; **repeating does not help**, only recalibration or zeroing.
**Zero error** — the instrument does not read zero when it should.

**An additive systematic error** (e.g. a zero error) appears on a graph as the correct gradient with an **unexpected intercept** — a line that should pass through the origin but doesn't is the giveaway. **A proportional (calibration) systematic error** instead changes the **gradient**, leaving the intercept at the origin.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-practical-skills-revision-notes--04-systematic-error-graph.webp" width="900" height="980" alt="Three lines: true y = 2x through the origin, a zero error y = 2x + 1 with the same gradient but an intercept of 1, and a calibration error y = 2.4x with the origin kept but a different gradient." loading="lazy">
  <figcaption>A zero error shifts the intercept; a calibration error changes the gradient.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-3-planning-an-experiment-and-checking-another--01-zero-error-micrometer.webp" width="900" height="1010" alt="A micrometer with its jaws closed reads +0.02 mm instead of 0.00 mm. A wire reading of 1.5 mm on the sleeve plus 0.27 mm on the thimble is 1.77 mm. On a zoomed number line an arrow moves 1.77 back by 0.02 mm to the true diameter 1.75 mm. The error is systematic, so repeats do not remove it." loading="lazy">
  <figcaption>A positive zero error is subtracted from every reading; repeating does not remove it.</figcaption>
</figure>


## Uncertainty

```
single reading:  half the smallest scale division
two readings:    double it
percentage uncertainty = (uncertainty / value) x 100
```

| Operation | Rule |
|---|---|
| Add or subtract | Add **absolute** uncertainties |
| Multiply or divide | Add **percentage** uncertainties |
| Power n | **Multiply percentage by n** |

The power rule matters most: a radius measured to 2% gives a volume uncertain to **6%**.

**Reduce percentage uncertainty by measuring a larger quantity** — time 20 oscillations rather than one, then divide. The absolute uncertainty is fixed by the instrument, so it becomes a smaller share of a larger reading.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-practical-skills-revision-notes--05-power-rule-percent.webp" width="900" height="890" alt="A radius known to 2 per cent gives 4 per cent for an area proportional to r squared and 6 per cent for a volume proportional to r cubed, shown as bars with icons." loading="lazy">
  <figcaption>Multiply the percentage uncertainty by the power.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-3-processing-results-graphs-and-uncertainties--08-single-reading-percentage-uncertainty.webp" width="900" height="1000" alt="Zoomed scales show half-division bands. A metre rule reading 250 mm has +/-0.5 mm, 0.2%. A micrometer reading 0.28 mm has +/-0.005 mm, 1.8%. Bars compare the two: the same half-resolution is a bigger percentage of a small quantity." loading="lazy">
  <figcaption>Half the resolution divided by the reading, times 100.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-6-analysing-data-with-log-graphs-accuracy-and--10-subtraction-rule-temperature-rise.webp" width="900" height="680" alt="Two temperature readings, 22.0 and 41.5 degrees C, each +/-0.5. The rise is 19.5 C and the absolute uncertainties add to +/-1.0 C, which is 5.1% of the rise." loading="lazy">
  <figcaption>When you subtract, add the absolute uncertainties.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--06-combining-uncertainties.webp" width="900" height="1120" alt="Falling ball: h = 1.200 +/- 0.002 m, t = 0.495 +/- 0.005 s. A bar shows 0.17 percent from h and 1.01 percent from t counted twice, 2.19 percent total, so g = 9.8 +/- 0.2 m s^-2." loading="lazy">
  <figcaption>Percentage uncertainties add for products and quotients; a power multiplies the percentage.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-practical-endorsement-skills-apparatus-and-techniques--02-pe-pendulum-many-oscillations.webp" width="900" height="810" alt="Twenty oscillations take 36.8 s, so T is 1.84 s. The 0.2 s start/stop uncertainty shrinks to 0.01 s in T, 0.54 %, whereas timing one oscillation gives 11 %. A fiducial marker at equilibrium gives a clear start and stop point." loading="lazy">
  <figcaption>Timing 20 oscillations makes the percentage uncertainty twenty times smaller.</figcaption>
</figure>


## Graphs and analysis

- Independent on x, dependent on y; linear scales using **over half** the grid; axes labelled with quantity **and unit**.
- Line of best fit; identify anomalies and exclude them.
- **Rearrange into `y = mx + c` form** so the gradient and intercept give the physical quantities — identifying what to plot against what is usually the first mark.

**Error bars and gradient uncertainty:**

```
uncertainty in gradient = (max gradient - min gradient) / 2
```

Draw the **steepest and shallowest** lines that still pass through all the error bars. Where two data sets' error bars overlap, the difference may not be significant.

**Finding the gradient itself:** use a **large triangle** spanning most of the plotted line, taking coordinates from the **line**, not from individual data points.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-development-of-practical-skills--06-anomalous-result-handling.webp" width="900" height="780" alt="A number line of five repeat timings with one far-out value circled. The mean with all five is 18.78 s and without the anomaly is 18.25 s. Steps: spot it, leave it out of the mean, explain it if you can. Values are illustrative." loading="lazy">
  <figcaption>Spot the anomaly, leave it out of the mean, and explain it if you can.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-development-of-practical-skills--04-best-fit-gradient-triangle.webp" width="900" height="985" alt="Illustrative data with a positive intercept: the best-fit line has three points each side and the line forced through the origin fits badly. A large gradient triangle has corners read from the line." loading="lazy">
  <figcaption>A best-fit line balances points either side and is not forced through the origin; gradients use a large triangle read from the line.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--07-error-bars-gradient.webp" width="900" height="1030" alt="Extension against force with +/-2 mm error bars. Best line gradient 12.0, steepest 13.0, shallowest 11.0 mm per N, so gradient = 12.0 +/- 1.0 mm per N." loading="lazy">
  <figcaption>Half the difference between the steepest and shallowest gradients.</figcaption>
</figure>


## Linearising relationships

Rearrange a relationship into **y = mx + c** form so a straight-line graph gives the gradient a physical meaning.

```
T = 2 pi sqrt(l / g)      ->      T^2 = (4 pi^2 / g) l
```

Plotting **T² against l** gives a straight line through the origin with gradient 4π²/g, so **g = 4π² ÷ gradient**. "What to plot, and what the gradient represents" is the single most common form of practical question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-development-of-practical-skills--05-linearise-pendulum.webp" width="900" height="1020" alt="T = 2 pi sqrt(l/g) is squared to T^2 = (4 pi^2/g) l, matching y = mx + c. Computed graphs show T against l curving and T^2 against l straight with gradient 4 pi^2/g (g = 9.81 used to draw)." loading="lazy">
  <figcaption>Squaring the pendulum equation gives a straight-line graph whose gradient is 4 pi^2/g.</figcaption>
</figure>


## Improving an experiment

Generic answers score nothing. Name a **specific** change **and its reason**:

- Use a **micrometer** rather than a ruler, because the smaller scale division reduces percentage uncertainty.
- Use **light gates** rather than a stopwatch, to eliminate the uncertainty from human reaction time.
- Repeat and average, to reduce **random** error.
- Measure a larger quantity, to reduce **percentage** uncertainty.
- Use a **fiducial marker** at the equilibrium position, because that is where the object moves fastest and timing is most consistent.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-practical-skills-revision-notes--06-fiducial-fastest-point.webp" width="900" height="1030" alt="Pendulum with a fiducial marker at the equilibrium position and a speed against position graph that is a semicircle, maximum at the centre. For illustrative A = 0.10 m and period 1.8 s, a 2 mm slip costs about 6 ms at the centre and 18 ms near the end." loading="lazy">
  <figcaption>Time from the centre where the bob is fastest.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-practical-endorsement-skills-apparatus-and-techniques--03-pe-light-gates-acceleration.webp" width="900" height="840" alt="A 0.050 m card blocks gate 1 for 0.040 s and gate 2 for 0.025 s, giving 1.25 m/s and 2.0 m/s. With 0.35 s between the gates the acceleration is 2.1 m/s squared." loading="lazy">
  <figcaption>Speed is card width over blocking time; acceleration follows from the change in speed.</figcaption>
</figure>


## Worked example: which measurement limits accuracy

A pendulum of length 0.800 m ± 0.005 m gives a period of 1.79 s ± 0.02 s, testing g via T = 2π√(l/g).

```
% uncertainty in l = (0.005 / 0.800) x 100 = 0.63%
% uncertainty in T = (0.02 / 1.79) x 100  = 1.12%
g depends on T^2, so T contributes 2 x 1.12% = 2.24%
Total = 0.63% + 2.24% = 2.87%
```

**Timing dominates.** Timing 20 oscillations and dividing by 20 cuts this far more than a better ruler would — the same principle as reducing percentage uncertainty by measuring a larger quantity.

## Exam traps

- Swapping accuracy and precision.
- Saying repeats reduce systematic error.
- Forgetting to double uncertainty for two-reading measurements.
- Forgetting the power rule.
- Suggesting improvements without reasons.
- Quoting more significant figures than the data justifies.
- Taking the gradient from two data points instead of a large triangle on the line.
- Giving a generic risk assessment not linked to the specific experiment.

## Self-test

1. Distinguish accuracy from precision with an example.
2. Which error type does averaging reduce, and which does it not?
3. A radius is known to 2%. What is the uncertainty in a volume proportional to r³?
4. How is gradient uncertainty found from error bars?
5. Why use light gates instead of a stopwatch?
6. For a simple pendulum, what should be plotted to find g from a straight-line graph, and what does the gradient represent?
7. A pendulum's length is known to 0.63% and its period to 1.12%. Which measurement limits the accuracy of g, and what single change would best reduce it?

**Answers:** 1. Accuracy is closeness to the true value, precision is agreement between repeats; a balance with a zero error gives precise but inaccurate readings. 2. Averaging reduces random error but not systematic error, which requires recalibration. 3. 6% — the percentage uncertainty is multiplied by the power. 4. Draw the steepest and shallowest lines that pass through all error bars and take half the difference between their gradients. 5. They eliminate the uncertainty from human reaction time, which a stopwatch cannot avoid. 6. Plot T² against l; the gradient equals 4π²/g, so g = 4π² divided by the gradient. 7. The period, since it is squared in the relationship for g, doubling its percentage contribution to 2.24% against length's 0.63%; timing many oscillations and dividing by the number of oscillations would reduce this far more effectively than a more precise length measurement.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-development-of-practical-skills--06-worked-uncertainty-pendulum.webp" width="900" height="960" alt="Percentage uncertainties 0.63% (l) and 1.12% (T), doubled to 2.24% for T^2, total 2.87%, so timing dominates." loading="lazy">
  <figcaption>Timing limits the accuracy of g because T is squared.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-a-level-physics-development-of-practical-skills--07-target-dominant-uncertainty.webp" width="900" height="930" alt="Comparison of total percentage uncertainty: original 2.87%, better ruler 2.55%, timing 20 oscillations 0.74% (assuming the same +/-0.02 s timing uncertainty; illustrative)." loading="lazy">
  <figcaption>Improving the dominant measurement cuts the uncertainty far more than improving the other one.</figcaption>
</figure>

## Frequently asked questions

**What is the difference between repeatable and reproducible results?**
Results are repeatable if the same person gets the same result with the same method and equipment. They are reproducible if a different person, method or equipment gives the same result.

**What is the uncertainty in a single reading from a scale?**
For a single reading, the uncertainty is half the smallest scale division. For a measurement taken from two readings, such as a length between two marks, double it.

**How does a systematic error show up on a graph?**
An additive systematic error, such as a zero error, gives the correct gradient but an unexpected intercept. A proportional calibration error changes the gradient while the line still passes through the origin.

**How do you reduce percentage uncertainty in OCR A Level Physics practicals?**
Measure a larger quantity, such as timing 20 oscillations instead of one, or use an instrument with a finer resolution. The absolute uncertainty is fixed by the instrument, so it becomes a smaller share of a larger reading.
