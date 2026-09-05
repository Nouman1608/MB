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

## Scalars and vectors

**Scalar** — magnitude only: distance, speed, mass, time, energy, temperature.
**Vector** — magnitude and direction: displacement, velocity, acceleration, force, momentum.

**Adding vectors:** tip-to-tail, or by components. For perpendicular vectors use Pythagoras and `tan θ`.

**Resolving:** a vector F at angle θ to the horizontal has components `F cos θ` (horizontal) and `F sin θ` (vertical). Getting sine and cosine the wrong way round is the most common error — check which component is *adjacent* to the angle.

For an object in **equilibrium**, the resultant force is zero, so components in each direction must balance. Three coplanar forces in equilibrium form a **closed triangle**.

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
