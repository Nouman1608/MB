---
title: "AQA A-Level Physics (7408): Thermal physics"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Further mechanics and thermal physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "further-mechanics-and-thermal-physics"
    subtopic: "thermal-physics-aqa-alevel"
description: "AQA A-Level Physics 7408 thermal physics in depth: heating curves, specific heat and latent heat, ideal gas calculations, rms speed and kinetic theory."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.6.2 Thermal physics of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards): 3.6.2.1 Thermal energy transfer, 3.6.2.2 Ideal gases and 3.6.2.3 Molecular kinetic theory model. It is **A-level only** and is assessed in Paper 2.

The [Further mechanics and thermal physics study guide](/resources/aqa-a-level-physics-further-mechanics-and-thermal-physics/) summarises the whole of section 3.6, including the full derivation of pV = ⅓Nm(c_rms)². Here the focus is on interpreting data, avoiding the common calculation traps and explaining the model. Use the [thermal physics revision notes](/resources/aqa-a-level-physics-7408-thermal-physics-aqa-alevel-revision-notes/) for recall and the [thermal physics practice questions](/resources/aqa-a-level-physics-7408-thermal-physics-aqa-alevel-practice/) to test yourself.

Values used: R = 8.31 J mol⁻¹ K⁻¹, N_A = 6.02 × 10²³ mol⁻¹, k = 1.38 × 10⁻²³ J K⁻¹.

## What this subtopic covers

| Spec ref | Content |
|---|---|
| 3.6.2.1 | Internal energy; qualitative first law; change of state; Q = mcΔθ including continuous flow; Q = ml |
| 3.6.2.2 | Gas laws as experimental relationships; absolute zero; pV = nRT and pV = NkT; work done = pΔV; N_A, R, k; molar and molecular mass; Required practical 8 |
| 3.6.2.3 | Brownian motion; molecular explanation of the gas laws; empirical laws versus theory; assumptions and derivation of pV = ⅓Nm(c_rms)²; ½m(c_rms)² = (3/2)kT; changing understanding over time |

## Internal energy and the first law

Internal energy is the sum of the **randomly distributed** kinetic and potential energies of the particles. "Randomly distributed" matters: the kinetic energy of a moving container, or the gravitational potential energy of a raised object, is not internal energy.

Internal energy rises when energy is transferred **to** the system by heating, or when work is done **on** it. A bicycle pump warms because work is done compressing the air; a gas cools as it expands rapidly and does work on its surroundings. AQA asks only for this qualitative form of the first law in section 3.6.

**Temperature and internal energy are different.** Temperature relates to the mean kinetic energy of the particles. During melting or boiling, energy goes into breaking or loosening bonds, raising the potential energy, while the kinetic energy (and so temperature) stays constant.

## Reading a heating curve

The specification suggests using a data logger to record temperature against time while energy is supplied at a constant rate. On the resulting graph:

- sloping sections are changes of temperature, where Q = mcΔθ;
- flat sections are changes of state, where Q = ml;
- a shallower slope means a larger specific heat capacity, since the same power produces a slower rise.

**Worked example 1: c and l from one graph.** An 80 W immersion heater supplies energy to 0.30 kg of a solid. The temperature rises by 15 K in 120 s, then stays constant for 450 s while the solid melts. Assume all the energy reaches the sample.

```
Solid warming:  Pt = mcΔθ  →  c = (80 × 120)/(0.30 × 15) = 2.1 × 10³ J kg⁻¹ K⁻¹
Melting:        Pt = ml    →  l = (80 × 450)/0.30 = 1.2 × 10⁵ J kg⁻¹
```

The "assume all the energy reaches the sample" line is where marks are won in evaluation questions. Energy lost to the surroundings means the true energy absorbed is less than Pt, so both calculated values are **too large**. This is a systematic error: repeating the experiment does not remove it, but insulating the sample and stirring it do reduce it.

**Worked example 2: the electrical method.** A 1.0 kg aluminium block is heated by a 12 V heater carrying 4.0 A. Its temperature rises 10.4 K in 200 s.

```
c = VIt/(mΔθ) = (12 × 4.0 × 200)/(1.0 × 10.4) = 9.2 × 10² J kg⁻¹ K⁻¹
```

A random error, such as reading the thermometer at slightly different moments, scatters repeat values; a systematic error, such as heat loss or a thermometer that reads consistently high, shifts every value in the same direction. Questions often ask you to identify one of each and suggest a remedy.

## Ideal gases

The three gas laws are **experimental** relationships for a fixed mass of gas. They combine into pV/T = constant, and the constant depends on the amount of gas, giving pV = nRT. Always use kelvin: T (K) = θ (°C) + 273.

**Moles or molecules?** Use pV = nRT when the amount is in moles and pV = NkT when it is a number of molecules. The link is N = nN_A and k = R/N_A. Molar mass (kg mol⁻¹) times n gives the mass of gas; molecular mass is molar mass divided by N_A.

**Worked example 3: an oxygen cylinder.** A 0.050 m³ cylinder holds oxygen (molar mass 0.032 kg mol⁻¹) at 2.0 × 10⁶ Pa and 290 K.

```
n = pV/RT = (2.0 × 10⁶ × 0.050)/(8.31 × 290) = 41.5 mol
mass = 41.5 × 0.032 = 1.3 kg
At 1.0 × 10⁵ Pa and the same temperature the gas would occupy
V = (2.0 × 10⁶ × 0.050)/(1.0 × 10⁵) = 1.0 m³
```

Only 0.95 m³ can leave the cylinder at atmospheric pressure, because 0.050 m³ remains inside it. Spotting that detail is typical of the extended reasoning expected at A-level.

**Work done by a gas.** At constant pressure the work done by an expanding gas is pΔV. On a p–V graph it is the area under the line, which links to the [engineering physics option](/resources/aqa-a-level-physics-engineering-physics/) if your school studies it.

**Required practical 8.** For Boyle's law keep the temperature constant by changing pressure slowly, and plot p against 1/V: a straight line through the origin. For Charles's law heat trapped air in a water bath at constant pressure; extrapolating V against θ to V = 0 gives absolute zero, close to −273 °C.

## Molecular kinetic theory

**Brownian motion** is the random, jerky movement of small visible particles (such as smoke particles in air) caused by uneven bombardment from much smaller, invisible molecules. It was evidence that atoms and molecules exist.

**Explaining the laws.** Pressure is the total force per unit area from molecules changing momentum at the walls. The rate of momentum change depends on how often molecules hit and how hard:

- Halve the volume at constant temperature: molecules hit the walls twice as often, so pressure doubles (Boyle).
- Raise the temperature at constant volume: molecules move faster, hitting harder and more often, so pressure rises (pressure law).
- Raise the temperature at constant pressure: the gas must expand so that the collision rate per unit area falls to compensate (Charles).

**Empirical versus theoretical.** The gas laws came from measurement and do not explain why gases behave as they do. Kinetic theory starts from assumptions about molecules and applies Newton's laws to predict pV = ⅓Nm(c_rms)². Agreement between the two supports the model.

**What c_rms means.** The root mean square speed is found by squaring each speed, taking the mean, then the square root. It is not the same as the mean speed.

**Worked example 4: rms speed of five molecules.** Speeds of 300, 400, 500, 600 and 700 m s⁻¹.

```
mean speed = 2500/5 = 500 m s⁻¹
mean of squares = (9 + 16 + 25 + 36 + 49) × 10⁴ / 5 = 2.7 × 10⁵ m² s⁻²
c_rms = √(2.7 × 10⁵) = 520 m s⁻¹
```

**Temperature and molecular energy.** Combining with pV = NkT gives ½m(c_rms)² = (3/2)kT. At the same temperature, all ideal gases have the same mean kinetic energy per molecule, so lighter molecules move faster: c_rms ∝ 1/√m. Helium molecules (molar mass 4 g mol⁻¹) have a c_rms √(32/4) = 2.8 times that of oxygen molecules at the same temperature.

**Internal energy of an ideal gas.** There are no intermolecular forces, so no potential energy: internal energy is all kinetic. For N molecules, U = (3/2)NkT = (3/2)nRT.

**Worked example 5.** 2.0 mol of an ideal monatomic gas at 300 K has U = 1.5 × 2.0 × 8.31 × 300 = 7.5 × 10³ J.

**Changing ideas.** The specification asks you to appreciate how understanding of gases developed. Gas laws were established by experiment first; kinetic models came later; and the reality of atoms was only widely accepted after Brownian motion was explained in terms of molecular collisions in the early twentieth century.

## Common mistakes

- Using °C in pV = nRT or in a ratio such as p/T.
- Using molar mass in grams per mole in kilograms.
- Mixing n with k, or N with R.
- Treating c_rms as the mean speed.
- Saying temperature rises during melting.
- Claiming heat losses make c too small in the electrical method.

## Exam technique for AQA command words

- **Explain** (gas laws): refer to molecules, collisions with the walls, momentum change and rate of collisions, in that order.
- **State** (assumptions): give the assumption as a statement; reasons are not needed unless the question asks.
- **Calculate**: convert units first (cm³ to m³, g to kg, °C to K) and show each step.
- **Evaluate** (experiments): name an error, say whether it makes the value too high or too low, and give a specific improvement.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.6.2 Thermal physics (A-level only).
