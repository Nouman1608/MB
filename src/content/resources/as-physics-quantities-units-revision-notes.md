---
title: "AS Physics: Physical Quantities, Units and Measurement — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Physical quantities and units"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 1.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-physical-quantities-and-units"
    subtopic: "as-physical-quantities"
  - qualification: "a-level"
    topic: "as-physical-quantities-and-units"
    subtopic: "as-si-units"
  - qualification: "a-level"
    topic: "as-physical-quantities-and-units"
    subtopic: "as-errors-and-uncertainties"
  - qualification: "a-level"
    topic: "as-physical-quantities-and-units"
    subtopic: "as-scalars-and-vectors"
description: "Condensed recall notes on SI units, homogeneity, scalars and vectors, uncertainty and errors for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Physical Quantities, Units and Measurement study guide](/resources/as-physics-physical-quantities-units-and-measurement/).

## SI base units (Cambridge 9702)

kilogram (kg), metre (m), second (s), ampere (A), kelvin (K) -- the five base quantities and units required at this level. (The full SI system defines seven base units in total, adding the mole and the candela, but 9702 doesn't require these two.)

All others are **derived**: N = kg m s⁻², J = kg m² s⁻², W = kg m² s⁻³, Pa = kg m⁻¹ s⁻², V = kg m² s⁻³ A⁻¹.

**Homogeneity** — an equation must have the same base units on both sides. This is the fastest check on a derived formula. Note the limit, though: a homogeneous equation can still be wrong by a **dimensionless constant**, so homogeneity proves an equation *could* be right, not that it is — for example, both s = ut + ½at² and s = ut + at² are homogeneous, but only the first is physically correct.

**Prefixes:** T 10¹², G 10⁹, M 10⁶, k 10³, c 10⁻², m 10⁻³, μ 10⁻⁶, n 10⁻⁹, p 10⁻¹².

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-quantities-units-revision-notes--01-homogeneity-limit.webp" width="900" height="830" alt="Two equations are compared term by term. s = ut + 1/2 at^2 and s = ut + at^2 both have units of metres in every term, so both pass the homogeneity check. Only the first is correct; with u = 0, a = 2 m s^-2 and t = 3 s the true s is 9 m and the wrong formula gives 18 m." loading="lazy">
  <figcaption>Homogeneity checks units, not dimensionless constants.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--01-units-from-base.webp" width="900" height="890" alt="Six base unit boxes (kg, m, s, A, K, mol) above a chain of derived units. The newton, kg m s^-2, times metre gives the joule, divided by second gives the watt, and divided by ampere gives the volt (OCR). Newton divided by metre squared gives the pascal. Cambridge 9702 does not use the mole." loading="lazy">
  <figcaption>Each derived unit is a product or quotient of base units.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--02-prefix-powers.webp" width="900" height="956" alt="Bars show prefixes from tera 10^12 down to femto 10^-15. Deci is used by Cambridge and OCR only; femto by AQA and OxfordAQA only. Examples: 250 mA = 0.25 A and 5.6 MeV = 5.6 x 10^6 eV." loading="lazy">
  <figcaption>Replace the prefix with its power of ten before substituting.</figcaption>
</figure>


## Scalars and vectors

**Scalar** — magnitude only: distance, speed, mass, time, energy, temperature.
**Vector** — magnitude and direction: displacement, velocity, acceleration, force, momentum.

**Adding vectors:** tip-to-tail, or by components. For perpendicular vectors use Pythagoras and `tan θ`.

**Resolving:** a vector F at angle θ to the horizontal has components `F cos θ` (horizontal) and `F sin θ` (vertical). Getting sine and cosine the wrong way round is the most common error — check which component is *adjacent* to the angle.

For an object in **equilibrium**, the resultant force is zero, so components in each direction must balance. Three coplanar forces in equilibrium form a **closed triangle**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-physics-forces-and-their-effects--04-scalar-vector.webp" width="900" height="960" alt="A walk of 6 m east then 2 m west on a number line from 0 to 8 m. The distance travelled is 6 plus 2, 8 m, a scalar with no direction. The displacement is an arrow from the start to the end point, 4 m east, a vector. Below, scalars are mass, speed, distance and energy; vectors, drawn with arrows, are force, velocity, displacement and acceleration." loading="lazy">
  <figcaption>Distance versus displacement for a 6 m east, 2 m west walk, with scalar and vector examples from the lesson.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--09-vector-addition.webp" width="900" height="910" alt="12 N and 7 N forces with 50 degrees between them drawn tip to tail. Resultant 17.3 N at 18.0 degrees to the 12 N force from the cosine rule (interior angle 130) and checked by components 16.50 N and 5.36 N." loading="lazy">
  <figcaption>The resultant joins the start of the first vector to the tip of the last.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-physics-interacting-forces-vectors-and-free-body-diagrams--04-equilibrium-triangle.webp" width="900" height="1060" alt="A ring is pulled with 6.0 N east and 8.0 N north, so a third force of 10 N at 53 degrees south of west keeps it in equilibrium. Drawn head to tail, the three arrows close into a right-angled triangle, showing zero resultant." loading="lazy">
  <figcaption>Forces in equilibrium form a closed vector triangle.</figcaption>
</figure>


## Uncertainty

```
uncertainty of a reading  =  half the smallest scale division
percentage uncertainty = (uncertainty / value) x 100
```

A measurement needing **two readings** carries **double** the uncertainty.

| Operation | Combine by |
|---|---|
| Add or subtract | **Add absolute** uncertainties |
| Multiply or divide | **Add percentage** uncertainties |
| Raise to power n | **Multiply percentage** by n |

**To reduce percentage uncertainty, measure a larger quantity** — time 20 oscillations rather than 1, then divide. The absolute uncertainty is fixed by the instrument, so it becomes a smaller fraction of a bigger reading.

**Worked example — raising to a power.** A sphere has radius r = (2.0 ± 0.1) cm. Since V = (4/3)πr³, find the percentage uncertainty in V.

```
% uncertainty in r = (0.1 / 2.0) x 100 = 5%
V depends on r^3, so % uncertainty in V = 3 x 5% = 15%
```

Raising to a power **multiplies** the percentage uncertainty by that power — a small uncertainty in a measured length can become a much larger uncertainty in a volume calculated from it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-quantities-units-revision-notes--02-sphere-volume-uncertainty.webp" width="900" height="840" alt="A sphere of radius 2.0 +/- 0.1 cm is drawn with rings at 1.9, 2.0 and 2.1 cm. The 5% uncertainty in r becomes 3 x 5% = 15% in V, giving V = 33.5 cm^3 with an uncertainty of about 5.0 cm^3." loading="lazy">
  <figcaption>Raising to a power multiplies the percentage uncertainty by that power.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-quantities-units-revision-notes--04-time-20-oscillations.webp" width="900" height="850" alt="Timing one swing as 1.5 +/- 0.2 s gives 13.3% uncertainty; timing 20 swings as 30.0 +/- 0.2 s gives 0.67%. Dividing by 20 gives T = 1.50 +/- 0.01 s. The 0.2 s value is illustrative." loading="lazy">
  <figcaption>The same instrument uncertainty is a smaller fraction of a bigger reading.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-quantities-units-revision-notes--05-two-readings-double.webp" width="900" height="780" alt="Two zoomed ruler windows show readings of 20.0 mm and 100.0 mm, each with a +/- 0.5 mm box. The length 80.0 mm has uncertainty 0.5 + 0.5 = 1 mm, which is 1.25%." loading="lazy">
  <figcaption>A length needing two readings carries double the single-reading uncertainty.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-3-processing-results-graphs-and-uncertainties--08-single-reading-percentage-uncertainty.webp" width="900" height="1000" alt="Zoomed scales show half-division bands. A metre rule reading 250 mm has +/-0.5 mm, 0.2%. A micrometer reading 0.28 mm has +/-0.005 mm, 1.8%. Bars compare the two: the same half-resolution is a bigger percentage of a small quantity." loading="lazy">
  <figcaption>Half the resolution divided by the reading, times 100.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--06-combining-uncertainties.webp" width="900" height="1120" alt="Falling ball: h = 1.200 +/- 0.002 m, t = 0.495 +/- 0.005 s. A bar shows 0.17 percent from h and 1.01 percent from t counted twice, 2.19 percent total, so g = 9.8 +/- 0.2 m s^-2." loading="lazy">
  <figcaption>Percentage uncertainties add for products and quotients; a power multiplies the percentage.</figcaption>
</figure>


## Errors

- **Random** — scatter; reduced by **repeating and averaging**. E.g. human reaction time when starting/stopping a stopwatch causes readings to scatter unpredictably above and below the true value.
- **Systematic** — a consistent offset; **not** reduced by repeating, only by recalibration or zeroing. E.g. a ruler with a worn end makes every length measured read consistently short.
- **Zero error** — the specific case where the instrument does not read zero when it should — a specific example of a systematic error.

**A systematic error's effect on a graph depends on its cause, not a single fixed signature.** A **zero-offset** error (e.g. an instrument not reading zero when it should) shifts the intercept while leaving the gradient correct -- a line that should pass through the origin but doesn't is the classic example of this specific case. A **calibration or scale-factor** error instead changes the gradient (the intercept can still be correct). Other systematic effects can shift both the gradient and the intercept at once, so always identify the specific cause before predicting which feature of the graph it will change.

**Accurate** means close to the true value; **precise** means repeat readings agree closely. Data can be **precise but not accurate** — a miscalibrated instrument gives tightly grouped, consistently wrong readings. Precision reflects the size of random error; accuracy reflects the size of systematic error — the two are independent, so improving one does not automatically improve the other.

## Exam traps

- Swapping sin and cos when resolving.
- Treating homogeneity as proof an equation is correct.
- Saying repeating reduces systematic error.
- Forgetting to double uncertainty for two-reading measurements.
- Forgetting to multiply percentage uncertainty by the power.
- Quoting more significant figures than the data supports — if the least-precise measurement has 2 significant figures, the final answer shouldn't claim 5.
- Using sin θ for the component along a vector's own reference direction — it's cos θ; sin θ is for the perpendicular component.

## Self-test

1. Give the five SI base quantities and units required at this level.
2. What does homogeneity prove, and what does it not?
3. A force F acts at angle θ to the horizontal. Give both components.
4. How do uncertainties combine when dividing?
5. How does a systematic error appear on a graph?
6. A sphere has radius r = (2.0 ± 0.1) cm. Find the percentage uncertainty in its volume.
7. Give one example each of a random error and a systematic error, and state how each is reduced.

**Answers:** 1. Kilogram, metre, second, ampere, kelvin. 2. It proves the equation could be correct; it cannot detect a wrong dimensionless constant. 3. F cos θ horizontally and F sin θ vertically. 4. Add the percentage uncertainties. 5. It depends on the cause: a zero-offset error shifts the intercept but leaves the gradient correct (e.g. a line that should pass through the origin does not); a calibration/scale-factor error instead changes the gradient; some systematic effects change both. 6. % uncertainty in r = (0.1/2.0) × 100 = 5%; since V ∝ r³, % uncertainty in V = 3 × 5% = **15%**. 7. Random: reaction time on a stopwatch — reduced by repeating and averaging. Systematic: a worn ruler reading every length short — reduced only by recalibration, not repetition.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-quantities-units-revision-notes--03-systematic-error-graph.webp" width="900" height="980" alt="Three straight lines on one graph: the true line y = 2x, a zero-error line y = 2x + 1 with the same gradient but shifted intercept, and a scale-error line y = 2.4x through the origin with a larger gradient." loading="lazy">
  <figcaption>A zero error shifts the intercept; a calibration error changes the gradient.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--04-precision-accuracy.webp" width="900" height="1160" alt="Four targets with six shots each: tight and centred (precise and accurate); tight but off-centre (systematic error); spread with mean on the bullseye (random error); spread and off-centre (both)." loading="lazy">
  <figcaption>Systematic error shifts all readings; random error scatters them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-unit-3-planning-an-experiment-and-checking-another--01-zero-error-micrometer.webp" width="900" height="1010" alt="A micrometer with its jaws closed reads +0.02 mm instead of 0.00 mm. A wire reading of 1.5 mm on the sleeve plus 0.27 mm on the thimble is 1.77 mm. On a zoomed number line an arrow moves 1.77 back by 0.02 mm to the true diameter 1.75 mm. The error is systematic, so repeats do not remove it." loading="lazy">
  <figcaption>A positive zero error is subtracted from every reading; repeating does not remove it.</figcaption>
</figure>

## Frequently asked questions

**What does homogeneity of an equation prove?**
A homogeneous equation has the same base units on both sides, so it could be correct, but this does not prove it is. It could still be wrong by a dimensionless constant, as with s = ut + at² compared with s = ut + ½at².

**How do you resolve a vector into components?**
A vector F at angle θ to the horizontal has a horizontal component F cos θ and a vertical component F sin θ. Use cosine for the component adjacent to the angle.

**What is the uncertainty in a reading from a scale?**
The uncertainty of a single reading is usually half the smallest scale division. A measurement needing two readings, such as a length between two marks, has double the uncertainty.

**What is the difference between precision and accuracy?**
Precise means repeat readings agree closely with each other; accurate means close to the true value. Precision reflects the size of random error and accuracy the size of systematic error, so data can be precise but not accurate.
