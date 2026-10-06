---
title: "AQA A-Level Physics: Further mechanics and thermal physics (7408)"
seoTitle: "AQA A-Level Physics Further Mechanics & Thermal Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Further mechanics and thermal physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "further-mechanics-and-thermal-physics"
  - qualification: "a-level"
    topic: "further-mechanics-and-thermal-physics"
    subtopic: "periodic-motion-aqa-alevel"
  - qualification: "a-level"
    topic: "further-mechanics-and-thermal-physics"
    subtopic: "thermal-physics-aqa-alevel"
description: "Study guide to AQA A-Level Physics 7408 further mechanics and thermal physics: circular motion, SHM, resonance, heating, ideal gases and kinetic theory."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches section 3.6 Further mechanics and thermal physics of the AQA AS and A-level Physics specification (7407/7408, version 1.4, AS and A-level exams June 2016 onwards): 3.6.1 Periodic motion and 3.6.2 Thermal physics. All of section 3.6 is **A-level only**. Paper 1 assesses 6.1 (Periodic motion) and Paper 2 assesses 6.2 (Thermal physics). This is core content, not one of the options (sections 3.9 to 3.13), of which you study one for Paper 3 Section B.

Follow it with the [revision notes](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics-revision-notes/) and [practice questions](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics-practice/). See also the [course hub](/boards/aqa/a-level/physics/), the [printable checklist](/checklists/aqa/a-level/physics/) and the [free diagnostics](/diagnostics/). The topic builds on [Mechanics and materials](/resources/aqa-a-level-physics-mechanics-and-materials/) and [Waves](/resources/aqa-a-level-physics-waves/).

## What this topic covers

| Specification (all A-level only) | What you must be able to do |
|---|---|
| 3.6.1.1 Circular motion | Radians; ω = v/r = 2πf; a = v²/r = ω²r; F = mv²/r = mω²r |
| 3.6.1.2 Simple harmonic motion | a = −ω²x; x = A cos ωt; v = ±ω√(A² − x²); graphs; v_max, a_max |
| 3.6.1.3 Simple harmonic systems | Spring and pendulum periods; energy; damping; Required practical 7 |
| 3.6.1.4 Forced vibrations and resonance | Free and forced vibrations; resonance; damping; examples |
| 3.6.2.1 Thermal energy transfer | Internal energy; first law (qualitative); Q = mcΔθ, continuous flow; Q = ml |
| 3.6.2.2 Ideal gases | Gas laws; absolute zero; pV = nRT = NkT; work = pΔV; molar mass; Required practical 8 |
| 3.6.2.3 Molecular kinetic theory model | Brownian motion; pV = ⅓Nm(c_rms)² derivation; ½m(c_rms)² = (3/2)kT |

## 3.6.1.1 Circular motion

An angle in **radians** is arc length divided by radius: θ = s/r. One full turn is 2π rad. Angular speed is the angle turned per second:

```
ω = v/r = 2πf        (rad s⁻¹)
```

Motion in a circle at constant speed still involves an acceleration, because the direction of the velocity keeps changing. The acceleration, and the resultant force, point towards the centre:

```
a = v²/r = ω²r
F = mv²/r = mω²r
```

Centripetal force is the resultant of real forces (tension, friction, contact), not an extra force. The derivation of a = v²/r is not examined.

**Worked example (estimate).** A washing-machine drum of radius 0.25 m spins at 1200 revolutions per minute. Estimate the acceleration of the clothes and the force on 0.50 kg of wet clothing.

```
f = 1200/60 = 20 Hz
ω = 2π × 20 = 126 rad s⁻¹
a = ω²r = 126² × 0.25 = 3.9 × 10³ m s⁻²
F = ma = 0.50 × 3.9 × 10³ = 2.0 × 10³ N
```

## 3.6.1.2 Simple harmonic motion

Motion is simple harmonic when the acceleration is **proportional to the displacement from equilibrium and directed towards equilibrium**: a ∝ −x.

```
a = −ω²x
x = A cos ωt          (timing from maximum displacement)
v = ±ω√(A² − x²)
v_max = ωA            (at x = 0)
a_max = ω²A           (at x = ±A)
```

The period T = 2π/ω does not depend on the amplitude A.

**Graphs.** The v–t graph is the gradient of the x–t graph, and the a–t graph is the gradient of the v–t graph. If x = A cos ωt, v is a negative sine curve and a is a negative cosine curve: v is a quarter cycle out of step with x, and a is in antiphase with x. The a–x graph is a straight line through the origin with gradient −ω².

**Worked example.** An object moves in SHM with amplitude 0.040 m and frequency 2.5 Hz.

```
ω = 2π × 2.5 = 15.7 rad s⁻¹
v_max = ωA = 15.7 × 0.040 = 0.63 m s⁻¹
a_max = ω²A = 15.7² × 0.040 = 9.9 m s⁻²
At x = 0.024 m: v = 15.7 × √(0.040² − 0.024²) = 0.50 m s⁻¹
                a = −15.7² × 0.024 = −5.9 m s⁻²
At t = 0.050 s: x = 0.040 cos(15.7 × 0.050) = 0.040 cos(π/4) = 0.028 m
```

## 3.6.1.3 Simple harmonic systems

```
Mass-spring:      T = 2π√(m/k)
Simple pendulum:  T = 2π√(l/g)
```

A pendulum's restoring force is mg sin θ. The **small-angle approximation** sin θ ≈ θ (in radians) makes it proportional to displacement, so a pendulum is only approximately simple harmonic, and only for small angles. Questions may use other oscillators, such as liquid in a U-tube; the question gives the information you need.

**Energy.** Without damping the total energy is constant and is shared between kinetic and potential:

```
E_k = ½mω²(A² − x²)     E_p = ½mω²x²     E_total = ½mω²A²
```

Against displacement, E_k is an inverted parabola and E_p a parabola, summing to a horizontal line. Against time, each energy completes two cycles per oscillation.

**Damping** removes energy, so amplitude falls. **Light damping**: oscillations with gradually decreasing amplitude and almost unchanged period. **Critical damping**: returns to equilibrium in the shortest time without oscillating. **Heavy damping**: returns slowly without oscillating.

**Worked example.** A 0.40 kg mass on a spring with k = 25 N m⁻¹ oscillates with amplitude 0.050 m.

```
T = 2π√(0.40/25) = 0.79 s
Pendulum with the same period: l = gT²/4π² = 9.81 × 0.40/25 = 0.157 m
E_total = ½kA² = ½ × 25 × 0.050² = 0.031 J        (k = mω²)
At x = 0.030 m: E_k = ½ × 25 × (0.050² − 0.030²) = 0.020 J
```

**Required practical 7.** Investigate SHM with a mass-spring system and a simple pendulum. Time ten or more oscillations, repeat, and start timing as the object passes equilibrium. Plot T² against m (gradient 4π²/k) or T² against l (gradient 4π²/g).

## 3.6.1.4 Forced vibrations and resonance

A **free vibration** follows a single displacement: the system oscillates at its **natural frequency**. A **forced vibration** is driven by a periodic force: the system oscillates at the **driving frequency**.

**Resonance**: when the driving frequency equals the natural frequency, the amplitude is a maximum because energy transfer from the driver is greatest.

More damping gives a **lower and broader** (less sharp) resonance peak, at a slightly lower frequency.

**Examples.** Pushing a swing at its natural frequency; shock absorbers damping car suspension. A string driven by a vibration generator gives large stationary waves only at its harmonic frequencies, and an air column in a wind instrument resonates at the frequencies its stationary waves allow.

## 3.6.2.1 Thermal energy transfer

**Internal energy** is the sum of the randomly distributed kinetic and potential energies of the particles in a body. It increases when energy is transferred to the body by heating or when work is done on it (and decreases in the reverse cases): a qualitative form of the **first law of thermodynamics**.

During a **change of state** the potential energies of the particles change but their kinetic energies don't, so temperature stays constant.

```
Change of temperature: Q = mcΔθ     c = specific heat capacity (J kg⁻¹ K⁻¹)
Change of state:       Q = ml       l = specific latent heat (J kg⁻¹)
Continuous flow:       P = (m/t)cΔθ
```

**Worked example (continuous flow).** A 9.0 kW electric shower heats water from 12 °C to 40 °C. Take c = 4200 J kg⁻¹ K⁻¹. Find the flow rate.

```
m/t = P/(cΔθ) = 9000/(4200 × 28) = 0.077 kg s⁻¹   (about 4.6 kg per minute)
```

**Worked example (method of mixtures).** 0.040 kg of ice at 0 °C is added to 0.30 kg of water at 30 °C in an insulated cup. Take l = 3.34 × 10⁵ J kg⁻¹. Find the final temperature T.

```
Energy lost by warm water = energy to melt ice + energy to warm meltwater
0.30 × 4200 × (30 − T) = 0.040 × 3.34 × 10⁵ + 0.040 × 4200 × T
37 800 − 1260T = 13 360 + 168T
T = 24 440/1428 = 17 °C
```

In the electrical method (E = VIt), energy lost to the surroundings is a systematic error that makes c too large; insulation reduces it.

## 3.6.2.2 Ideal gases

The gas laws are **experimental** relationships for a fixed mass of gas:

| Law | Kept constant | Relationship |
|---|---|---|
| Boyle's law | temperature | pV = constant |
| Charles's law | pressure | V/T = constant |
| Pressure law | volume | p/T = constant |

Extrapolating V against θ (or p against θ) to zero gives about −273 °C for any gas. This is **absolute zero**, 0 K, the lowest possible temperature, where particles have minimum kinetic energy. T (K) = θ (°C) + 273.

```
pV = nRT     (n moles, R = molar gas constant)
pV = NkT     (N molecules, k = Boltzmann constant)
k = R/N_A,  N = nN_A
Work done = pΔV   (at constant pressure)
```

**Molar mass** is the mass of one mole; **molecular mass** is the mass of one molecule = molar mass/N_A.

**Worked example.** A cylinder holds helium (molar mass 4.0 g mol⁻¹) at 3.0 × 10⁵ Pa, volume 0.020 m³ and 290 K. Take R = 8.31 J mol⁻¹ K⁻¹ and N_A = 6.02 × 10²³ mol⁻¹.

```
n = pV/RT = (3.0 × 10⁵ × 0.020)/(8.31 × 290) = 2.49 mol
N = nN_A = 1.50 × 10²⁴ molecules;  mass = 2.49 × 4.0 = 10 g
Heated at constant pressure to 348 K: V = 0.020 × 348/290 = 0.024 m³
Work done by gas = pΔV = 3.0 × 10⁵ × 0.004 = 1200 J
```

**Required practical 8.** Boyle's law: trapped air at constant temperature, changing pressure slowly; plot p against 1/V. Charles's law: trapped air at constant pressure in a water bath; plot V against θ and find the intercept.

## 3.6.2.3 Molecular kinetic theory model

**Brownian motion**: smoke particles in air, seen under a microscope, move randomly because unseen molecules hit them unevenly: evidence that atoms exist.

**Explaining the gas laws.** Pressure comes from molecules hitting the walls and changing momentum. Smaller volume at fixed temperature means more frequent collisions (Boyle). Higher temperature means faster molecules hitting harder and more often (pressure law), or the gas expands to keep pressure constant (Charles).

The gas laws are **empirical** (from measurement); kinetic theory is **theoretical** (from assumptions and Newton's laws). Ideas changed over time: Bernoulli proposed a kinetic model in 1738, Maxwell described the distribution of molecular speeds in 1859, Brown observed particles from pollen grains moving in water in 1827, and Einstein's 1905 explanation of that motion, confirmed by Perrin's experiments from 1908, settled that atoms are real.

**Assumptions**: very many identical molecules in random motion; elastic collisions; molecular volume negligible compared with the container; no forces between molecules except during collisions; collision time negligible.

**Derivation of pV = ⅓Nm(c_rms)²** (cube of side L):

```
1. Molecule with x-velocity u hits a wall: Δp = mu − (−mu) = 2mu
2. Time between hits on that wall: 2L/u
3. Force = 2mu ÷ (2L/u) = mu²/L
4. For N molecules: F = Nm(mean u²)/L
5. Random motion: mean u² = ⅓(c_rms)²   since c² = u² + v² + w²
6. p = F/L² = Nm(c_rms)²/(3L³), so pV = ⅓Nm(c_rms)²
```

With pV = NkT this gives ½m(c_rms)² = (3/2)kT = (3/2)RT/N_A. For an ideal gas there are no intermolecular forces, so the internal energy is **all kinetic**.

**Worked example.** Find the mean kinetic energy and c_rms of nitrogen molecules (mass 4.65 × 10⁻²⁶ kg) at 300 K. Take k = 1.38 × 10⁻²³ J K⁻¹.

```
E_k = (3/2)kT = 1.5 × 1.38 × 10⁻²³ × 300 = 6.21 × 10⁻²¹ J
c_rms = √(3kT/m) = √(3 × 1.38 × 10⁻²³ × 300 / 4.65 × 10⁻²⁶) = 517 m s⁻¹
```

## Common errors

- Using revolutions per minute as f, or a calculator in degrees for A cos ωt.
- Drawing "centripetal force" as an extra force on a free-body diagram.
- Giving energy-time graphs in SHM the same period as the oscillation.
- Using °C in pV = nRT or in Charles's law ratios.
- Mixing grams and kilograms in n = mass/molar mass.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, version 1.4, July 2026, AS and A-level exams June 2016 onwards, published by AQA. Section 3.6 Further mechanics and thermal physics (A-level only).
