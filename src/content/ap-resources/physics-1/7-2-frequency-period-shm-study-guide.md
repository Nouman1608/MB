---
resourceId: "mb-ap-phys1-7.2-study-guide"
title: "Frequency and Period of SHM: Study Guide (Physics 1 7.2)"
description: "Period and frequency of simple harmonic motion: T = 1/f, the spring–object and small-angle pendulum equations, factor-of-change reasoning and straight-line graphs from timing data."
course: "physics-1"
unit: 7
topics: ["7.2"]
resourceType: "study-guide"
prerequisites:
  - "The SHM condition F_net = −kx and a = −(k/m)x (Topic 7.1)"
  - "Why a small-angle pendulum is close to SHM (Topic 7.1)"
  - "Finding the slope of a best-fit straight line"
prerequisiteResources: ["mb-ap-phys1-7.1-study-guide"]
learningObjectives:
  - "Convert between period and frequency using T = 1/f, with units"
  - "Use T = 2π√(m/k) for an object on an ideal spring and T = 2π√(ℓ/g) for a small-angle pendulum"
  - "Predict the factor by which a period changes when mass, spring constant, length or g changes"
  - "Rearrange the period equations and plot T² against m or ℓ to find k or g from the slope"
  - "Plan a timing experiment that reduces uncertainty in a measured period"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Use the π key, not 3.14. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-7.2-revision-notes", "mb-ap-phys1-7.2-practice", "mb-ap-phys1-7.2-checklist"]
next: "mb-ap-phys1-7.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "The period T is the time for one full cycle; the frequency f is the number of cycles per second. T = 1/f, and 1 Hz = 1 cycle per second."
  - "Object on an ideal spring: T = 2π√(m/k). More mass gives a longer period; a stiffer spring gives a shorter one. g does not appear."
  - "Simple pendulum at small angles: T = 2π√(ℓ/g). A longer string gives a longer period. The mass of the bob does not appear."
  - "Because T depends on a square root, multiplying m (or ℓ) by 4 only doubles the period."
  - "Plot T² against m (or ℓ) to get a straight line through the origin. Its slope is 4π²/k (or 4π²/g)."
faqs:
  - question: "Does a heavier pendulum bob swing more slowly?"
    answer: "No. A heavier bob feels a larger restoring force, but it also has more inertia, in the same proportion. Its acceleration at each angle is the same, so the period is the same. Only the length and g matter, as long as the angle is small."
  - question: "Is the period of a vertical spring different from a horizontal one?"
    answer: "No. Gravity moves the equilibrium position, but measured from there the net force is still −kx. The period is 2π√(m/k) either way."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. You need the SHM condition, F_net = −kx, and the result a = −(k/m)x from Topic 7.1. Both period equations here are on the course equation table; you use them, and you do not need to derive the 2π.

## Period and frequency

The **period**, T, is the time for one complete cycle: from one position, out to both ends, and back to the same position moving the same way. It is measured in seconds.

The **frequency**, f, is the number of complete cycles per second. Its unit is the **hertz** (Hz): 1 Hz = 1 cycle per second = 1 s⁻¹.

**T = 1/f** and **f = 1/T**

A short period means a high frequency. A pendulum with T = 0.50 s has f = 2.0 Hz.

### Measuring a period well

Do not time a single cycle. Your reaction time when starting and stopping a stopwatch is roughly 0.2 s. On one cycle of 0.84 s that is an uncertainty of about 24%. Time **ten cycles** instead: 10 cycles in 8.4 s gives T = 0.84 s, and the same 0.2 s is now spread over ten cycles, about 0.02 s each, or 2%.

Two more habits help:

- Start and stop timing as the object passes through **equilibrium**. It moves fastest there, so the moment it passes is easy to judge.
- Count "zero" as you start the watch, not "one". Otherwise you time one cycle fewer than you count.

## The object–spring oscillator

For an object of mass m on an ideal spring with spring constant k:

**T_s = 2π√(m/k)**

Read the equation as physics, not just algebra:

- **More mass, longer period.** More inertia means a smaller acceleration for the same spring force, so each cycle takes longer.
- **Stiffer spring, shorter period.** A larger k gives a larger restoring force at each displacement, so the object is turned around more quickly.
- **No g.** A vertical spring has the same period as a horizontal one (Topic 7.1 showed that gravity only shifts the equilibrium). So a spring oscillator measures **mass**, not weight. That is how mass can be measured in orbit, where objects are weightless.

Link this to Topic 7.1: a = −(k/m)x. A large k/m means a large acceleration for each metre of displacement, and a short period. T depends on m/k, the inverse of that ratio.

## The simple pendulum

For a simple pendulum of length ℓ (pivot to centre of the bob), swinging through a small angle:

**T_p = 2π√(ℓ/g)**

- **Longer string, longer period.**
- **Stronger gravity, shorter period.** A pendulum would swing more slowly where g is smaller.
- **No mass.** In Topic 7.1 the restoring force along the arc was about (mg/ℓ)s. Divide by m to get the acceleration: a ≈ −(g/ℓ)s. The mass cancels. Compare with a = −(k/m)x: for a pendulum, g/ℓ plays the part of k/m. That is why ℓ/g replaces m/k in the period.
- **Small angles only.** The equation comes from the SHM model, which needs sin θ ≈ θ. At large angles the real period is a little longer.

Neither equation contains the **amplitude**. For SHM, a bigger swing does not take longer: the object travels further but its acceleration is bigger in the same proportion. Topic 7.3 returns to this.

## Factor-of-change reasoning

Many questions ask how a period **changes**, not what it is. Write the equation as a proportion and change one thing at a time.

| Change | Because | New period |
|---|---|---|
| Mass on spring × 4 | T ∝ √m | × √4 = **× 2** |
| Spring constant × 4 | T ∝ 1/√k | × 1/√4 = **× ½** |
| Mass × 2 **and** k × 2 | m/k unchanged | **unchanged** |
| Pendulum length × 9 | T ∝ √ℓ | **× 3** |
| g ÷ 4 | T ∝ 1/√g | **× 2** |
| Bob mass × 3 | m not in T_p | **unchanged** |
| Amplitude × 2 (still SHM) | A not in either equation | **unchanged** |

The square root is the trap. To **double** a period you must **quadruple** the mass (or the length).

## Worked example 1: k from a stopwatch

**Question.** A 0.300 kg block hangs from a spring and oscillates up and down. A student times **20 full cycles** in 15.0 s. (a) Find the period and frequency. (b) Find the spring constant. (c) What mass would give a period of exactly 1.00 s on the same spring?

1. **(a)** T = 15.0 s ÷ 20 = **0.750 s**. f = 1/T = 1 ÷ 0.750 s = **1.33 Hz**.
2. **(b)** Square both sides of T = 2π√(m/k): T² = 4π²m/k, so **k = 4π²m / T²**.
3. k = (39.48 × 0.300) ÷ 0.750² = 11.84 ÷ 0.5625 ≈ **21 N/m**.
4. **(c)** Rearrange for mass: m = kT² / 4π² = (21.06 × 1.00²) ÷ 39.48 ≈ **0.53 kg**.

**Check by factor of change.** The period must rise from 0.750 s to 1.00 s, a factor of 1.333. Mass goes with T², so it must rise by 1.333² = 1.78: 0.300 kg × 1.78 = 0.53 kg. Same answer, no k needed.

**Interpretation.** You found a spring constant with only a stopwatch and a known mass, no ruler. The block hangs vertically, but g does not appear anywhere in the calculation.

## Worked example 2: g from a pendulum graph

**Question.** A student measures the period of a pendulum for five lengths, timing 10 swings each time and dividing by 10.

| ℓ (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| T (s) | 0.90 | 1.27 | 1.56 | 1.79 | 2.01 |

(a) What should be plotted to get a straight line? (b) Plot it and use the slope to find g.

1. **(a)** Square T_p = 2π√(ℓ/g): **T² = (4π²/g) ℓ**. This has the form y = (slope) × x. Plot **T² on the vertical axis against ℓ on the horizontal axis**. The line should pass through the origin with **slope 4π²/g**. (A graph of T against ℓ is a curve, and its slope is not constant.)
2. **(b)** Square each period: T² = 0.81, 1.61, 2.43, 3.20 and 4.04 s².
3. Plot the points and draw one best-fit straight line (Figure 1). Pick two points **on the line**, far apart: (0.10 m, 0.41 s²) and (0.90 m, 3.63 s²).
4. Slope = (3.63 − 0.41) s² ÷ (0.90 − 0.10) m = 3.22 ÷ 0.80 ≈ 4.03 s²/m.
5. g = 4π² ÷ slope = 39.48 ÷ 4.03 ≈ **9.8 m/s²**.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-t2l-title p1-t2l-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-t2l-title">Period squared against length for a pendulum</title>
<desc id="p1-t2l-desc">Period squared in seconds squared, from 0 to 4.5, against pendulum length in metres, from 0 to 1.1. Five square data points at (0.20, 0.81), (0.40, 1.61), (0.60, 2.43), (0.80, 3.20) and (1.00, 4.04) lie on or very close to a straight best-fit line through the origin. Two hollow circles on the line at (0.10, 0.41) and (0.90, 3.63) are joined by a dashed rise-and-run triangle. The slope is about 4.03 seconds squared per metre, which gives g of about 9.8 metres per second squared.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M150 290 V50 M230 290 V50 M310 290 V50 M390 290 V50 M470 290 V50"/>
<path d="M70 236.7 H510 M70 183.3 H510 M70 130 H510 M70 76.7 H510"/>
</g>
<path d="M70 290 H520 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="150" y="308">0.2</text><text x="230" y="308">0.4</text><text x="310" y="308">0.6</text><text x="390" y="308">0.8</text><text x="470" y="308">1.0</text>
<text x="295" y="330" font-size="13">length, ℓ (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="240.7">1</text><text x="62" y="187.3">2</text><text x="62" y="134">3</text><text x="62" y="80.7">4</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">period squared, T² (s²)</text>
<path d="M70 289.7 L510 53.6" stroke="#1d2b44" stroke-width="2"/>
<path d="M110 268.1 H430 V96.4" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4" fill="none"/>
<g fill="#1d2b44">
<rect x="145" y="241.8" width="10" height="10"/><rect x="225" y="199" width="10" height="10"/><rect x="305" y="155.2" width="10" height="10"/><rect x="385" y="114.1" width="10" height="10"/><rect x="465" y="69.5" width="10" height="10"/>
</g>
<circle cx="110" cy="268.1" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="430" cy="96.4" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="284" font-size="12" fill="#1d2b44">run = 0.80 m</text>
<text x="438" y="190" font-size="12" fill="#1d2b44">rise = 3.22 s²</text>
<text x="100" y="70" font-size="12" fill="#1d2b44">slope = 3.22 s² ÷ 0.80 m ≈ 4.03 s²/m</text>
<text x="100" y="88" font-size="12" fill="#1d2b44">g = 4π² ÷ slope ≈ 9.8 m/s²</text>
</svg>
<figcaption>Figure 1. Period squared against length for the data in Worked example 2. The points (filled squares) lie close to a straight line through the origin, as T² = (4π²/g)ℓ predicts. The slope is read from two points on the line (hollow circles), not from data points.</figcaption>
</figure>

**Interpretation.** The line passes through the origin, as the equation predicts, so the data support the model. Using the slope of five points is better than one calculation from one length: a single bad reading barely moves a best-fit line.

The same method works for springs. T_s² = (4π²/k) m, so plot **T² against m**: the slope is 4π²/k.

## Worked example 3: correcting a slow pendulum clock

**Question.** A pendulum clock is built so that each full swing should take 2.00 s. It actually has T = 2.01 s. (a) How many minutes does it lose per day (86 400 s)? (b) Should the pendulum be lengthened or shortened, and by roughly how much?

1. **(a)** In one day the pendulum completes 86 400 ÷ 2.01 ≈ 42 985 swings. The clock counts each as 2.00 s, so it shows 85 970 s. It loses about **430 s, or 7.2 minutes, per day**.
2. **(b)** The period is too long, so the pendulum must be **shortened** (T ∝ √ℓ).
3. Length goes with T²: ℓ_new / ℓ_old = (2.00 ÷ 2.01)² = 0.990.
4. The present length is ℓ = gT² / 4π² = 9.8 × 2.01² ÷ 39.48 ≈ 1.003 m. The new length is 0.990 × 1.003 ≈ 0.993 m, so shorten it by about **1.0 cm**.

**Check.** A 0.5% change in period needs about a 1% change in length, because ℓ ∝ T². The answer agrees.

## Designing an experiment

Suppose the question is "Does the period of a spring–mass system depend on the mass, and how?" A good plan:

1. Hang a known mass from the spring. Pull it a small distance below equilibrium and release it.
2. Time 10 (or 20) full cycles from a pass through equilibrium. Repeat and average.
3. Change only the mass. Keep the spring and the starting displacement the same.
4. Plot T² against m. A straight line through the origin supports T ∝ √m; the slope gives 4π²/k.

Name the variables: **independent** m, **dependent** T, **controlled** the spring (k), and the amplitude, kept small.

## Common misconceptions

- **"A heavier bob makes a pendulum swing slower."** Mass is not in T_p (FAQ above).
- **"Gravity changes the period of a spring."** g is not in T_s; it only moves the equilibrium.
- **"Double the mass, double the period."** T ∝ √m, so the period rises by √2 ≈ 1.41.
- **"A bigger swing takes longer."** Not for SHM: amplitude is in neither equation.
- **"Period and frequency are the same thing."** They are reciprocals: T = 1/f.
- **"ℓ is the string length only."** Measure to the centre of the bob.
- **"T against ℓ should be a straight line."** It curves. T² against ℓ is the straight line.

## Where this leads

Topic 7.3, [Representing and Analyzing SHM](/advanced-course-resources/physics-1/7-3-representing-analyzing-shm-study-guide/), uses the period to write position as a function of time, x = A cos(2πft), and reads the motion from graphs. Topic 7.4 adds energy. Try the [practice questions](/advanced-course-resources/physics-1/7-2-frequency-period-shm-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/7-2-frequency-period-shm-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/7-2-frequency-period-shm-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
