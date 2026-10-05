---
resourceId: "mb-ap-physcm-7.2-study-guide"
title: "Frequency and Period of SHM: Study Guide (Physics C: Mechanics 7.2)"
description: "Calculus-based period and frequency of SHM: reading ω from d²x/dt² = −ω²x, T = 2π√(m/k) for springs, T = 2π√(ℓ/g) for small-angle pendulums, and linearised data."
course: "physics-c-mechanics"
unit: 7
topics: ["7.2"]
resourceType: "study-guide"
prerequisites:
  - "The SHM condition and the equation d²x/dt² = −(k/m)x (Topic 7.1)"
  - "Springs in series and parallel (Topic 2.8)"
  - "Torque, rotational inertia and τ = Iα (Topics 5.3, 5.4 and 5.6)"
prerequisiteResources: ["mb-ap-physcm-7.1-study-guide"]
learningObjectives:
  - "Convert between period, frequency and angular frequency, with units"
  - "Read the angular frequency from an equation of motion of the form d²x/dt² = −ω²x"
  - "Derive and use T = 2π√(m/k) for an object on an ideal spring, including effective spring constants"
  - "Derive and use T = 2π√(ℓ/g) for a simple pendulum at small angles, and state its conditions"
  - "Predict factors of change in period and frequency, and find k or g from linearised period data"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculator for arithmetic and square roots. g = 9.8 m/s². Angles in radians. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-7.2-revision-notes", "mb-ap-physcm-7.2-practice", "mb-ap-physcm-7.2-checklist"]
next: "mb-ap-physcm-7.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Period T is the time for one cycle; frequency f = 1/T; angular frequency ω = 2πf = 2π/T."
  - "Write Newton's second law as d²x/dt² = −ω²x. Whatever multiplies x is ω², and then T = 2π/ω."
  - "For an object on an ideal spring, ω = √(k/m), so T = 2π√(m/k). Gravity does not change it."
  - "For a simple pendulum at small angles, ω = √(g/ℓ), so T = 2π√(ℓ/g). The bob's mass cancels."
  - "Neither period depends on amplitude, as long as the SHM model holds."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 7.2?"
    answer: "They are separate courses with the same formulas. Physics 1 uses T = 2π√(m/k) and T = 2π√(ℓ/g) as given. Physics C: Mechanics derives them by writing Newton's second law as a differential equation and reading off ω, and applies the method to any system that reduces to d²x/dt² = −ω²x."
  - question: "Is angular frequency the same as angular velocity?"
    answer: "They share the unit rad/s and the symbol ω, but in SHM nothing has to rotate. Angular frequency is 2π times the number of cycles per second."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 7.2 called Frequency and Period of SHM. This guide is the **calculus-based** one. It derives the period formulas from Newton's second law written as a differential equation. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/7-2-frequency-period-shm-study-guide/); do not mix the two when you revise.

## Period, frequency and angular frequency

One **cycle** is a full there-and-back: the object returns to the same position, moving in the same direction.

- **Period T**: the time for one cycle, in seconds.
- **Frequency f**: the number of cycles per second, in hertz (1 Hz = 1 s⁻¹). **f = 1/T**.
- **Angular frequency ω**: 2π radians per cycle, in rad/s. **ω = 2πf = 2π/T**.

For example, an oscillation at f = 4.0 Hz has T = 0.25 s and ω = 2π × 4.0 = 25 rad/s.

## From the equation of motion to the period

In Topic 7.1, Newton's second law for SHM came out as d²x/dt² = −(k/m)x. Write the positive constant as ω²:

**d²x/dt² = −ω²x**

Topic 7.3 shows that the solution is a cosine (or sine) of ωt. A cosine repeats each time its argument grows by 2π, so the motion repeats after ωT = 2π:

**T = 2π/ω = 1/f**

This gives a general method that works for any system:

1. Choose a variable measured from equilibrium (a position, an arc length or an angle).
2. Apply Newton's second law (or τ = Iα) and rearrange to d²(variable)/dt² = −(constant) × (variable).
3. The constant is ω². Then T = 2π/ω.

If the equation will not take this form, the motion is not SHM and these formulas do not apply.

## The object–spring oscillator

For a mass m on an ideal spring of constant k, the constant is k/m:

**ω = √(k/m), T = 2π√(m/k), f = (1/2π)√(k/m)**

Read the dependence carefully:

- A **larger mass** has more inertia: it accelerates less for the same force, so T is longer.
- A **stiffer spring** gives a bigger force for the same displacement, so T is shorter.
- The **amplitude** does not appear. A bigger pull gives a bigger force, and the two effects cancel.
- **Gravity** does not appear. A vertical spring has the same period as a horizontal one, because gravity only shifts the equilibrium (Topic 7.1).

When several springs act together, use the **effective** spring constant from Topic 2.8: k_eff = k₁ + k₂ side by side (parallel), and 1/k_eff = 1/k₁ + 1/k₂ end to end (series).

A useful result for a vertical spring: at equilibrium, kd = mg, where d is the static stretch. So m/k = d/g and **T = 2π√(d/g)**. You can predict the period from how far the spring sags.

## The simple pendulum

A simple pendulum is a point bob of mass m on a light, inextensible string of length ℓ. Let θ be the angle from the vertical, positive counterclockwise (Figure 1).

<figure>
<svg viewBox="0 0 560 350" role="img" aria-labelledby="pcm72-pend-title pcm72-pend-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm72-pend-title">Forces and lever arm on a simple pendulum</title>
<desc id="pcm72-pend-desc">A pivot at the top left. A dashed vertical line hangs straight down from it. A string of length ℓ makes an angle θ with that line, with the bob to the right. A long arrow labelled mg points straight down from the bob. A shorter arrow labelled mg sin θ points along the path of the bob, back toward the dashed vertical line. A horizontal dashed line from the vertical to the bob is labelled lever arm ℓ sin θ. Text on the right gives the torque about the pivot, τ = −mgℓ sin θ, the rotational inertia I = mℓ², and the resulting equation for small angles.</desc>
<defs><marker id="pcm72-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="350" fill="#ffffff"/>
<path d="M100 40 H180" stroke="#1d2b44" stroke-width="3"/>
<circle cx="140" cy="40" r="4" fill="#1d2b44"/>
<path d="M140 40 V280" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<path d="M140 40 L208.4 227.9" stroke="#1d2b44" stroke-width="2"/>
<path d="M140 90 A50 50 0 0 0 157.1 87.0" stroke="#1d2b44" stroke-width="1.5" fill="none"/>
<text x="150" y="110" font-size="13" fill="#1d2b44">θ</text>
<text x="182" y="130" font-size="13" fill="#1d2b44">ℓ</text>
<path d="M140 227.9 H200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="134" y="232" font-size="12" fill="#1d2b44" text-anchor="end">lever arm ℓ sin θ</text>
<circle cx="208.4" cy="227.9" r="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M208.4 237 V327" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm72-arr)"/>
<text x="216" y="320" font-size="13" fill="#1d2b44">mg</text>
<path d="M199.9 231 L169 242.2" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pcm72-arr)"/>
<text x="146" y="266" font-size="12" fill="#1d2b44">mg sin θ</text>
<g font-size="13" fill="#1d2b44">
<text x="300" y="80">Torque of gravity about the pivot:</text>
<text x="300" y="104">τ = −mgℓ sin θ</text>
<text x="300" y="140">Rotational inertia about the pivot:</text>
<text x="300" y="164">I = mℓ²</text>
<text x="300" y="200">τ = I d²θ/dt² gives</text>
<text x="300" y="224">d²θ/dt² = −(g/ℓ) sin θ</text>
<text x="300" y="260">Small angles (radians):</text>
<text x="300" y="284">d²θ/dt² ≈ −(g/ℓ) θ</text>
</g>
</svg>
<figcaption>Figure 1. A simple pendulum displaced by angle θ. Only the weight has a torque about the pivot; the string's tension passes through it. The torque acts to reduce θ, hence the minus sign.</figcaption>
</figure>

The tension acts along the string, through the pivot, so it has no torque. The weight has lever arm ℓ sin θ, so τ = −mgℓ sin θ. With I = mℓ² and τ = I d²θ/dt²:

d²θ/dt² = −(g/ℓ) sin θ

For **small angles in radians**, sin θ ≈ θ, and the equation takes the SHM form with ω² = g/ℓ:

**ω = √(g/ℓ), T = 2π√(ℓ/g)**

- The **mass cancels**. Weight (which drives the motion) and inertia (which resists it) are both proportional to m.
- A **longer** string gives a longer period; a **stronger** gravitational field gives a shorter one.
- The result needs a **small angle**. At larger angles, the true period is a little longer than 2π√(ℓ/g).

A rigid body swinging about a pivot (a physical pendulum) follows the same method with a different I and lever arm. That is Topic 7.5.

## Factors of change

Because T depends on square roots, a factor n in the quantity under the root changes T by √n.

| Change | Spring T = 2π√(m/k) | Pendulum T = 2π√(ℓ/g) |
|---|---|---|
| mass × 4 | T × 2 | no change |
| k × 4 | T × ½ | not relevant |
| length × 4 | not relevant | T × 2 |
| g × 4 | no change | T × ½ |
| amplitude × 2 (still small) | no change | no change |

Frequency changes by the inverse factor, since f = 1/T.

## Worked example 1: from the equation of motion to T and f

**Question.** Take **+y upward**, origin at equilibrium. A 2.0 kg block hangs from two identical ideal springs, each with k = 400 N/m, joined end to end. (a) Write the equation of motion and find ω, T and f. (b) Find T if the same springs are used side by side instead.

1. **(a)** In series: 1/k_eff = 1/400 + 1/400, so k_eff = **200 N/m**.
2. Newton's second law about equilibrium: d²y/dt² = −(200 ÷ 2.0)y = −(100 s⁻²)y.
3. So ω² = 100 s⁻², **ω = 10 rad/s**. T = 2π/10 = **0.63 s**. f = 1/T = **1.6 Hz**.
4. **(b)** Side by side: k_eff = 800 N/m, ω = √(800 ÷ 2.0) = 20 rad/s, T = **0.31 s**.

**Check.** The parallel spring is four times stiffer than the series pair, so T should halve: 0.63 s → 0.31 s. It does. Also, the static stretch in (a) is d = mg/k = 19.6 ÷ 200 = 0.098 m, and 2π√(0.098 ÷ 9.8) = 0.63 s, as the sag rule predicts.

## Worked example 2: k from a graph of T² against m

**Question.** A student hangs different masses m on one spring and finds the period from 20 cycles each time:

| m (kg) | 0.100 | 0.200 | 0.300 | 0.400 | 0.500 |
|---|---|---|---|---|---|
| T (s) | 0.435 | 0.589 | 0.711 | 0.814 | 0.906 |

(a) What should be plotted to give a straight line? (b) Find k from the graph. (c) Explain the intercept.

1. **(a)** Square T = 2π√(m/k): **T² = (4π²/k)m**. A graph of **T² against m** should be a straight line with slope 4π²/k.
2. **(b)** T² values: 0.189, 0.347, 0.506, 0.663, 0.821 s². The best-fit line (Figure 2) has slope **1.58 s²/kg** and intercept **0.031 s²**. So k = 4π² ÷ 1.58 = **25.0 N/m**.
3. **(c)** The theory predicts a line through the origin. A positive intercept means some mass moves that is not in m. Dividing intercept by slope gives about **0.020 kg** of extra effective mass, for example the hanger or the spring itself. (Background, beyond the course: for a uniform spring, theory gives an effective mass of about one third of the spring's mass.)

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm72-t2-title pcm72-t2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm72-t2-title">Graph of period squared against hanging mass</title>
<desc id="pcm72-t2-desc">T squared in seconds squared, from 0 to 1.0, against mass in kilograms, from 0 to 0.5. Five data points lie on a straight line: about 0.19 at 0.1 kg, 0.35 at 0.2 kg, 0.51 at 0.3 kg, 0.66 at 0.4 kg and 0.82 at 0.5 kg. A solid best-fit line passes through them and meets the vertical axis slightly above zero, at 0.031 s squared. The slope is labelled 1.58 seconds squared per kilogram.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M164 290 V50 M248 290 V50 M332 290 V50 M416 290 V50 M500 290 V50"/>
<path d="M80 242 H515 M80 194 H515 M80 146 H515 M80 98 H515 M80 50 H515"/>
</g>
<path d="M80 290 H520 M80 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="308">0</text><text x="164" y="308">0.1</text><text x="248" y="308">0.2</text><text x="332" y="308">0.3</text><text x="416" y="308">0.4</text><text x="500" y="308">0.5</text>
<text x="300" y="326" font-size="13">hanging mass, m (kg)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="294">0</text><text x="72" y="246">0.2</text><text x="72" y="198">0.4</text><text x="72" y="150">0.6</text><text x="72" y="102">0.8</text><text x="72" y="54">1.0</text>
</g>
<text x="24" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 170)">period squared, T² (s²)</text>
<path d="M80 282.5 L516.8 85.4" stroke="#1d2b44" stroke-width="2"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="164" cy="244.6" r="5"/><circle cx="248" cy="206.7" r="5"/><circle cx="332" cy="168.7" r="5"/><circle cx="416" cy="131" r="5"/><circle cx="500" cy="93" r="5"/>
</g>
<text x="250" y="120" font-size="12" fill="#1d2b44">best-fit slope 1.58 s²/kg = 4π²/k</text>
<text x="90" y="272" font-size="12" fill="#1d2b44">intercept 0.031 s²</text>
</svg>
<figcaption>Figure 2. T² against m for the data in Worked example 2. The straight line confirms T² ∝ m apart from a small intercept, which comes from extra moving mass.</figcaption>
</figure>

**Why the graph is better than one reading.** Using only m = 0.300 kg in k = 4π²m/T² gives 23.4 N/m, because it ignores the extra mass. The slope is not affected by it.

## Worked example 3: a pendulum that keeps time with a spring

**Question.** You want a simple pendulum with the same period as the oscillator in Worked example 1(a). (a) Find its length. (b) Compare it with the static stretch of the springs. (c) The 2.0 kg block is replaced by a 4.0 kg block, and the pendulum bob by one twice as heavy. What happens to each period?

1. **(a)** Equal periods need equal ω: √(g/ℓ) = 10 rad/s, so ℓ = 9.8 ÷ 100 = **0.098 m**.
2. **(b)** The static stretch was also d = **0.098 m**. That is no coincidence: T = 2π√(d/g) for the spring and T = 2π√(ℓ/g) for the pendulum, so they match when ℓ = d.
3. **(c)** Spring: T = 2π√(4.0 ÷ 200) = **0.89 s**, a factor √2 longer. Pendulum: mass cancels, so T stays **0.63 s**. The two no longer keep time.

**Condition.** The pendulum is short, so keep the swing small: an arc of 1.0 cm from the lowest point is about 0.10 rad (about 6°), where sin θ ≈ θ is good.

## Measuring a period well

- Time **many cycles** (10 or 20) and divide. Your reaction-time error is shared across all of them.
- Start timing as the object passes **equilibrium**, where it moves fastest and the instant is sharpest.
- Keep pendulum angles **small**, and check that the period does not change when you halve the amplitude.
- **Linearise** before fitting: T² against m, T² against ℓ, or ln T against ln m to test the power.

## Common misconceptions

- **Confusing f and ω.** ω = 2πf. A value in rad/s is not a frequency in Hz.
- **"Heavier pendulum bobs swing more slowly."** Mass cancels for a simple pendulum.
- **"A vertical spring has a different period."** Gravity shifts equilibrium only.
- **"Bigger swings take longer."** Not in SHM; for a pendulum, only once the angle is no longer small.
- **Forgetting the square root.** Doubling m multiplies T by √2, not 2.
- **Using one data point when the graph has an intercept.** Use the slope.
- **Degrees in sin θ ≈ θ.** The approximation needs radians.

## Where this leads

Topic 7.3 writes the motion as x = A cos(ωt + φ) and finds velocity and acceleration from it, using the ω you found here. Topic 7.4 adds energy, and Topic 7.5 applies the same method to physical and torsion pendulums. Next, try the [practice questions](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-checklist/). When you are ready, move on to [Topic 7.3, Representing and Analyzing SHM](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
