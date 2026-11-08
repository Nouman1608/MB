---
title: "AQA A Level Physics: Measurements and Their Errors — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Measurements and their errors"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 3.12
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-aqa-alevel"
    subtopic: "limitation-of-physical-measurements"
description: "Condensed recall notes on SI units, uncertainty, accuracy and precision, error types and graphical analysis for AQA A Level Physics 7408."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Measurements and Their Errors study guide](/resources/aqa-alevel-physics-limitation-of-physical-measurements/).

## SI base units

| Quantity | Unit |
|---|---|
| Mass | kilogram (kg) |
| Length | metre (m) |
| Time | second (s) |
| Current | ampere (A) |
| Temperature | kelvin (K) |
| Amount | mole (mol) |

All other units are **derived**: N = kg m s⁻², J = kg m² s⁻², W = kg m² s⁻³, Pa = kg m⁻¹ s⁻².

> **Aside (not examined):** dimensional analysis / homogeneity of units is not required by the AQA A-level specification and will not be examined, but as background: checking that the base units on each side of an equation match can catch some errors. Note a dimensionally consistent equation can still be wrong by a numerical factor.

**Prefixes:** T 10¹², G 10⁹, M 10⁶, k 10³, c 10⁻², m 10⁻³, μ 10⁻⁶, n 10⁻⁹, p 10⁻¹², f 10⁻¹⁵.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--02-prefix-powers.webp" width="900" height="956" alt="Bars show prefixes from tera 10^12 down to femto 10^-15. Deci is used by Cambridge and OCR only; femto by AQA and OxfordAQA only. Examples: 250 mA = 0.25 A and 5.6 MeV = 5.6 x 10^6 eV." loading="lazy">
  <figcaption>Replace the prefix with its power of ten before substituting.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--01-units-from-base.webp" width="900" height="890" alt="Six base unit boxes (kg, m, s, A, K, mol) above a chain of derived units. The newton, kg m s^-2, times metre gives the joule, divided by second gives the watt, and divided by ampere gives the volt (OCR). Newton divided by metre squared gives the pascal. Cambridge 9702 does not use the mole." loading="lazy">
  <figcaption>Each derived unit is a product or quotient of base units.</figcaption>
</figure>


## Accuracy, precision, resolution, repeatability, reproducibility

| Term | Meaning |
|---|---|
| **Accurate** | Close to the **true value** |
| **Precise** | Repeat readings close **to each other** |
| **Resolution** | The smallest change in a quantity an instrument can detect |
| **Repeatable** | Same result on repeating with the same method and equipment |
| **Reproducible** | Same result with a **different** method or by a different person |

**Precise but not accurate is the key case.** A miscalibrated instrument gives readings that agree closely with each other and are all consistently wrong. This distinction is examined nearly every series.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--04-precision-accuracy.webp" width="900" height="1160" alt="Four targets with six shots each: tight and centred (precise and accurate); tight but off-centre (systematic error); spread with mean on the bullseye (random error); spread and off-centre (both)." loading="lazy">
  <figcaption>Systematic error shifts all readings; random error scatters them.</figcaption>
</figure>


## Errors

**Random error** — unpredictable scatter around the true value. **Reduced by repeating and averaging**, and by using instruments with finer resolution.

**Systematic error** — every reading is offset in the same direction by the same amount or proportion. **Repeating does not help**; the instrument must be recalibrated or zeroed. A **zero error** is the specific case where the instrument does not read zero when it should.

**How to spot a systematic error on a graph:** an **additive** systematic error (e.g. a zero error) gives the correct gradient but an **unexpected intercept** — a line that should pass through the origin but does not is the classic signature. A **proportional** (calibration) systematic error instead changes the **gradient**, while the intercept stays at the origin.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-measurements-revision-notes--06-systematic-error-graph.webp" width="900" height="870" alt="Three lines: true y = 2x through the origin; y = 2x + 3 parallel with intercept 3 (zero error); y = 1.5x through the origin with a different gradient (calibration error)." loading="lazy">
  <figcaption>A zero error shifts the intercept, a calibration error changes the gradient, and repeating does not fix either.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--05-repeat-readings.webp" width="900" height="880" alt="Five timings 1.52, 1.58, 1.55, 1.49 and 1.56 s on a number line with mean 1.54 s. Range 0.09 s, half range 0.045 s, 2.9 percent; result 1.54 +/- 0.05 s." loading="lazy">
  <figcaption>Half the range is a common estimate of the uncertainty in a mean.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-3-planning-an-experiment-and-checking-another--01-zero-error-micrometer.webp" width="900" height="1010" alt="A micrometer with its jaws closed reads +0.02 mm instead of 0.00 mm. A wire reading of 1.5 mm on the sleeve plus 0.27 mm on the thimble is 1.77 mm. On a zoomed number line an arrow moves 1.77 back by 0.02 mm to the true diameter 1.75 mm. The error is systematic, so repeats do not remove it." loading="lazy">
  <figcaption>A positive zero error is subtracted from every reading; repeating does not remove it.</figcaption>
</figure>


## Uncertainty

```
uncertainty of a single reading (analogue scale)  =  half the smallest scale division
uncertainty of a single reading (digital display)  =  ± the resolution (1 unit of the last digit)
fractional uncertainty = uncertainty / value
percentage uncertainty = (uncertainty / value) x 100 = fractional uncertainty x 100
```

For a measurement requiring **two readings** — a length between two marks, a temperature change, a burette volume — the uncertainty **doubles**, because each reading carries its own.

**Combining uncertainties:**

| Operation | Rule |
|---|---|
| **Adding or subtracting** | **Add the absolute** uncertainties |
| **Multiplying or dividing** | **Add the percentage** uncertainties |
| **Raising to a power n** | **Multiply the percentage** uncertainty by n |

That last rule matters: if a radius is measured to 2% and you calculate a volume proportional to r³, the volume carries **6%** uncertainty. Small measurement errors amplify quickly in cubed quantities.

**To reduce percentage uncertainty, measure a larger quantity.** The absolute uncertainty is fixed by the instrument, so it forms a smaller proportion of a bigger reading — which is why you time twenty oscillations rather than one, then divide.

**Worked example.** V = 4.85 ± 0.05 V and I = 0.42 ± 0.01 A. Find R with its uncertainty.

```
R = V/I = 4.85 / 0.42 = 11.55 Ohm
%unc(V) = (0.05/4.85) x 100 = 1.03%     %unc(I) = (0.01/0.42) x 100 = 2.38%
division -> percentages ADD: %unc(R) = 1.03 + 2.38 = 3.41%
absolute uncertainty = 0.0341 x 11.55 = +-0.39 Ohm
R = 11.6 +- 0.4 Ohm
```

The final answer is rounded to match the precision implied by the uncertainty — quoting more figures than that overstates how well the value is actually known.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-physics-measurements-revision-notes--05-power-rule-uncertainty.webp" width="900" height="850" alt="Bars show 2 % for r, 4 % for r squared and 6 % for r cubed when the radius is measured to 2 %. A sphere with r = 5.00 cm has V = 523.6 +/- 31.4 cm^3, about 6 %." loading="lazy">
  <figcaption>Raising to a power n multiplies the percentage uncertainty by n.</figcaption>
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
  <img src="https://img.marlbridge.com/ocr-a-level-physics-development-of-practical-skills--07-target-dominant-uncertainty.webp" width="900" height="930" alt="Comparison of total percentage uncertainty: original 2.87%, better ruler 2.55%, timing 20 oscillations 0.74% (assuming the same +/-0.02 s timing uncertainty; illustrative)." loading="lazy">
  <figcaption>Improving the dominant measurement cuts the uncertainty far more than improving the other one.</figcaption>
</figure>


## Graphs

- Independent variable on x, dependent on y.
- Scales linear, using **more than half** the grid.
- Axes labelled with quantity **and** unit.
- Line of best fit, not dot-to-dot; identify and exclude anomalies.

**Error bars** show the uncertainty in each point. Draw the **steepest and shallowest** lines that pass through all the error bars:

```
uncertainty in gradient = (max gradient - min gradient) / 2
uncertainty in intercept = (max intercept - min intercept) / 2
```

Where error bars for two data sets **overlap**, the difference between them may not be significant.

**Straight-line analysis:** rearrange into `y = mx + c` form, then the gradient and intercept give the physical quantities you want. Identifying what to plot against what is usually the first mark.

## Exam traps

- Swapping accuracy and precision.
- Saying repeating reduces systematic error.
- Forgetting to double the uncertainty for a two-reading measurement.
- Adding absolute uncertainties when multiplying.
- Forgetting to multiply the percentage uncertainty by the power.
- Quoting more significant figures than the data justifies.
- Drawing a line through the origin when the data does not support it.

## Self-test

1. Distinguish accuracy from precision, and give an example of precise but inaccurate data.
2. Which type of error does averaging reduce, and which does it not?
3. How do you combine uncertainties when multiplying two quantities?
4. A radius is known to 3%. What is the uncertainty in a volume proportional to r³?
5. How is the uncertainty in a gradient and in an intercept found from a graph?

**Answers:** 1. Accuracy is closeness to the true value; precision is how closely repeated readings agree. A balance with a zero error gives tightly grouped readings that are all wrong by the same amount. 2. Averaging reduces random error; it does not reduce systematic error, which requires recalibration. 3. Add the percentage uncertainties. 4. 9% — the percentage uncertainty is multiplied by the power. 5. Draw the steepest and shallowest lines that still pass through all the error bars, then take half the difference between their gradients for the gradient uncertainty, and half the difference between their intercepts for the intercept uncertainty.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--07-error-bars-gradient.webp" width="900" height="1030" alt="Extension against force with +/-2 mm error bars. Best line gradient 12.0, steepest 13.0, shallowest 11.0 mm per N, so gradient = 12.0 +/- 1.0 mm per N." loading="lazy">
  <figcaption>Half the difference between the steepest and shallowest gradients.</figcaption>
</figure>

## Frequently asked questions

**What is the uncertainty in a single reading?**
For an analogue scale, the uncertainty of a single reading is half the smallest scale division. For a digital display it is ± the resolution, one unit of the last digit. A measurement needing two readings, such as a length between two marks, has double the uncertainty.

**How can you tell a systematic error from a graph?**
An additive systematic error, such as a zero error, gives the correct gradient but an unexpected intercept. A proportional calibration error changes the gradient while the intercept stays at the origin.

**How do you reduce percentage uncertainty in an experiment?**
Measure a larger quantity. The absolute uncertainty is fixed by the instrument, so it becomes a smaller proportion of a bigger reading.

**Is dimensional analysis examined in AQA A-level Physics 7408?**
No. Dimensional analysis and homogeneity of units are not required by the AQA A-level specification and will not be examined; they appear on this page only as background.
