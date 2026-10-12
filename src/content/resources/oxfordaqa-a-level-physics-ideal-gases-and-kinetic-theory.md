---
title: "OxfordAQA International AS and A-level Physics: Ideal gases and kinetic theory (9630)"
seoTitle: "OxfordAQA A-level Physics Ideal Gases Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Ideal gases and kinetic theory"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 125
syllabusTopics:
  - qualification: "a-level"
    topic: "thermal-physics-oxfordaqa-alevel"
    subtopic: "ideal-gases-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "thermal-physics-oxfordaqa-alevel"
    subtopic: "kinetic-theory-of-gases-oxfordaqa-alevel-physics"
description: "A worked study guide to the gas laws, pV = nRT, work done by a gas and the kinetic theory of gases for OxfordAQA International A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This study guide is aligned to the *OxfordAQA International AS and A-level Physics (9630)* specification, Version 4.4, sections 3.11.3 (ideal gases) and 3.11.4 (kinetic theory of gases). Section 3.11 is marked International A-level only. It is not part of the shared International AS and A-level content in sections 3.1 to 3.5.

Use it with the [revision notes](/resources/oxfordaqa-a-level-physics-ideal-gases-and-kinetic-theory-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-physics-ideal-gases-and-kinetic-theory-practice/). See the [course page](/boards/oxfordaqa/a-level/physics/), the [checklist](/checklists/oxfordaqa/a-level/physics/) and the [free diagnostics](/diagnostics/). Related: [first law and conduction](/resources/oxfordaqa-a-level-physics-first-law-of-thermodynamics-heating-and-conduction/) and [momentum and collisions](/resources/oxfordaqa-a-level-physics-momentum-impulse-and-collisions/).

Values assumed in the examples: the Boltzmann constant k = 1.38 × 10⁻²³ J K⁻¹, the molar gas constant R = 8.31 J mol⁻¹ K⁻¹, and the Avogadro constant N_A = 6.02 × 10²³ mol⁻¹. If a question supplies different values, use those.

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 3.11.3 | Gas laws, absolute zero, pV = nRT, pV = NkT, work done = pΔV, N_A, R, k, molar and molecular mass |
| 3.11.3 | Required practical 9: Boyle's law and Charles's law |
| 3.11.4 | Brownian motion; the molecular model for p, V and T; empirical against theoretical |
| 3.11.4 | Assumptions leading to pV = ⅓Nm(c_rms)²; internal energy; ½m(c_rms)² = 3kT/2 = 3RT/2N_A |

## The gas laws as experimental relationships

Each law below was found by measuring a fixed mass of gas while holding one quantity constant.

- **Boyle's law:** at constant temperature, pressure is inversely proportional to volume, so pV is constant.
- **Charles's law:** at constant pressure, volume is proportional to the temperature in kelvin, so V/T is constant.
- **Pressure law:** at constant volume, pressure is proportional to the temperature in kelvin, so p/T is constant.
- **Mass:** at fixed p and T, V is proportional to the mass of gas.

For a fixed mass the laws combine into pV/T = constant, or p₁V₁/T₁ = p₂V₂/T₂. This states what gases do, not why.

### Absolute zero

Plot the volume of a trapped gas against Celsius temperature at constant pressure. The straight line misses the origin. Extended back to zero volume, it cuts the temperature axis at about −273 °C whatever the gas. The pressure law gives the same intercept.

This intercept defines **absolute zero**, 0 K, the lowest possible temperature. Kelvin and Celsius differ only in the position of the zero:

T / K = θ / °C + 273

A real gas condenses first, so zero volume is an extrapolation. Always use kelvin in gas equations.

**Worked example 1.** A fixed mass of air at constant pressure occupies 29.4 cm³ at 20 °C and 36.2 cm³ at 90 °C. Estimate absolute zero on the Celsius scale.

Gradient = (36.2 − 29.4) / (90 − 20) = 0.0971 cm³ °C⁻¹.

Volume falls to zero after a further 29.4 / 0.0971 = 303 °C below 20 °C, so absolute zero ≈ 20 − 303 = **−283 °C**.

This is 3.5% from −273 °C. A short extrapolation magnifies reading errors.

## The ideal gas equations

An **ideal gas** obeys pV = nRT exactly. Real gases at low pressure and well above their boiling points come close.

- pV = nRT, where n is the number of moles, p is in Pa, V in m³ and T in K.
- pV = NkT, where N is the number of molecules.

Both describe the same gas, so nR = Nk and k = R / N_A = 1.38 × 10⁻²³ J K⁻¹.

### Moles, molar mass and molecular mass

- The **Avogadro constant** N_A is the number of particles in one mole.
- **Molar mass** M is the mass of one mole, in kg mol⁻¹. For argon M = 0.0400 kg mol⁻¹ (40.0 g mol⁻¹).
- **Molecular mass** m is the mass of one molecule, so m = M / N_A.
- Number of moles n = N / N_A = mass / M.

Convert units first: molar mass to kg mol⁻¹ and volumes to m³ (1 dm³ = 10⁻³ m³, 1 cm³ = 10⁻⁶ m³).

**Worked example 2.** A cylinder of volume 12.0 dm³ holds argon at 4.5 × 10⁶ Pa and 290 K. Treat it as ideal. Find the mass of argon and the number of atoms.

V = 1.20 × 10⁻² m³, so n = pV / RT = (4.5 × 10⁶ × 1.20 × 10⁻²) / (8.31 × 290) = 54 000 / 2410 = 22.4 mol.

Mass = nM = 22.4 × 0.0400 = **0.896 kg**. N = nN_A = **1.35 × 10²⁵ atoms**.

**Worked example 3.** A balloon holds 2.0 m³ of helium at 1.01 × 10⁵ Pa and 288 K. At altitude the pressure is 3.5 × 10⁴ Pa and the temperature 235 K. No gas escapes. Find the new volume.

The mass is fixed, so V₂ = p₁V₁T₂ / (T₁p₂) = (1.01 × 10⁵ × 2.0 × 235) / (288 × 3.5 × 10⁴) = **4.7 m³**.

The pressure falls by more than the temperature, so the balloon expands.

## Work done by a gas

When a gas expands at constant pressure p against its surroundings, the work it does is

work done = pΔV

with ΔV the change in volume. On a p–V graph the work done equals the area under the line. For a gas that is compressed, work is done on the gas and the same area gives its size.

**Worked example 4.** Gas at a constant 1.0 × 10⁵ Pa expands from 2.4 × 10⁻³ m³ to 3.1 × 10⁻³ m³, so the work done is 1.0 × 10⁵ × 0.7 × 10⁻³ = **70 J**. At constant pressure pΔV = nRΔT, so 0.20 mol heated by 50 K does 0.20 × 8.31 × 50 = 83 J.

## Required practical 9: Boyle's law and Charles's law

**Boyle's law.** Trap air in a sealed syringe connected to a pressure gauge. Change the volume in steps, move slowly, and wait for the gas to return to room temperature before each reading. Plot p against 1/V: a straight line passing through the origin supports pV = constant. Include any tubing volume in V, or the line will miss the origin.

**Charles's law.** Trap dry air in a narrow, uniform capillary tube sealed at one end, with a short liquid index. Immerse the tube in a stirred water bath so the trapped air is fully below the surface. Heat in steps, waiting for the air to reach the bath temperature each time. Measure the air column length l, which is proportional to V. The index moves freely, so the pressure stays atmospheric. Plot l against θ and extrapolate to l = 0 to estimate absolute zero. Put the thermometer close to the tube.

## Brownian motion

Smoke particles in air, viewed through a microscope with light from the side, appear as bright specks moving in small, jerky, random paths.

Smoke particles are large enough to see. Air molecules are not. The molecules move rapidly and at random, so at any moment more strike one side of a particle than the other. The net force keeps changing in size and direction, so the motion is irregular.

A smooth, continuous fluid would not make a particle jitter, so the motion is evidence that atoms and molecules exist and move randomly.

## The molecular model and the gas laws

Kinetic theory treats a gas as a very large number of identical, tiny molecules in continuous random motion. The assumptions are:

- the molecules have negligible volume compared with the container
- there are no forces between molecules except during collisions, so no potential energy
- collisions between molecules, and with the walls, are perfectly elastic
- a collision lasts a negligible time compared with the time between collisions
- the motion is random, with a very large number of molecules
- Newton's laws of motion apply

**Pressure** comes from molecules rebounding from the walls. Each rebound changes momentum and so exerts a small force. Many rebounds per second give a steady pressure.

- **Smaller V at constant T:** speeds are unchanged but molecules hit the walls more often, so p rises (Boyle's law).
- **Higher T at constant V:** molecules move faster, hit harder and more often, so p rises (pressure law).
- **Higher T at constant p:** the volume must rise so that the collision rate per unit area stays the same (Charles's law).

### Empirical against theoretical

The gas laws are **empirical**: they summarise experimental observations. Kinetic theory is a **theoretical model**: it starts from assumptions about molecules, predicts the gas laws and explains temperature. Their agreement supports the model.

## Deriving pV = ⅓Nm(c_rms)²

Consider a cube of side l holding N molecules of mass m. One molecule has velocity component c_x towards a wall perpendicular to the x-axis.

1. It rebounds elastically, so its momentum change is 2mc_x.
2. It crosses to the opposite wall and back, a distance 2l, so the time between hits on one wall is 2l / c_x.
3. Force from one molecule = momentum change per second = 2mc_x / (2l / c_x) = mc_x² / l.
4. For N molecules F = (Nm / l) × ⟨c_x²⟩, with ⟨c_x²⟩ the mean value of c_x².
5. Pressure p = F / l² = Nm⟨c_x²⟩ / V.
6. The motion is random, so no direction is special: ⟨c²⟩ = ⟨c_x²⟩ + ⟨c_y²⟩ + ⟨c_z²⟩ = 3⟨c_x²⟩.

Therefore **pV = ⅓Nm⟨c²⟩ = ⅓Nm(c_rms)²**.

The **root mean square speed** c_rms is the square root of the mean of the squares of the speeds.

**Worked example 5.** Five molecules have speeds 210, 340, 480, 520 and 650 m s⁻¹. Find the mean speed and c_rms.

Mean speed = 440 m s⁻¹. Mean square speed = (44 100 + 115 600 + 230 400 + 270 400 + 422 500) / 5 = 2.166 × 10⁵ m² s⁻².

c_rms = √(2.166 × 10⁵) = **465 m s⁻¹**, which is larger than the mean speed.

**Worked example 6.** A 0.040 m³ container holds 1.5 × 10²⁴ nitrogen molecules at 1.5 × 10⁵ Pa. The molar mass of nitrogen is 0.0280 kg mol⁻¹. Find c_rms and the temperature.

m = 0.0280 / 6.02 × 10²³ = 4.65 × 10⁻²⁶ kg, so (c_rms)² = 3pV / Nm = (3 × 1.5 × 10⁵ × 0.040) / (1.5 × 10²⁴ × 4.65 × 10⁻²⁶) = 18 000 / 0.0698 = 2.58 × 10⁵ m² s⁻².

c_rms = **508 m s⁻¹**.

T = pV / Nk = 6000 / (1.5 × 10²⁴ × 1.38 × 10⁻²³) = **290 K**.

## Molecular kinetic energy and internal energy

Equate pV = ⅓Nm(c_rms)² with pV = NkT. Cancelling N gives ⅓m(c_rms)² = kT, so

**average kinetic energy of a molecule = ½m(c_rms)² = 3kT/2 = 3RT / 2N_A**

The last form uses k = R / N_A. The average kinetic energy is proportional to the kelvin temperature and independent of the gas.

An ideal gas has no intermolecular forces except during collisions, so it has no potential energy. Its **internal energy is the total kinetic energy of its atoms**: U = N × 3kT/2 = 3nRT/2. Doubling the kelvin temperature doubles the internal energy.

**Worked example 7.** Neon (M = 0.0200 kg mol⁻¹) is at 450 K. Find the average kinetic energy of an atom and c_rms.

Kinetic energy = 3kT/2 = 1.5 × 1.38 × 10⁻²³ × 450 = **9.32 × 10⁻²¹ J**.

With m = 0.0200 / 6.02 × 10²³ = 3.32 × 10⁻²⁶ kg, c_rms = √(2 × 9.315 × 10⁻²¹ / 3.32 × 10⁻²⁶) = **7.49 × 10² m s⁻¹**.

For 2.0 mol at 350 K, U = 1.5 × 2.0 × 8.31 × 350 = 8.7 × 10³ J. Because c_rms varies as √(T/M), a fourfold rise in T doubles c_rms, and at one temperature the lighter molecules are quicker.

## Common errors

- Using °C in pV = nRT, or leaving V in dm³ or M in g mol⁻¹.
- Using molar mass where ⅓Nm(c_rms)² needs the mass of one molecule.
- Taking the mean speed as c_rms.
- Explaining Boyle's law by faster molecules. At constant temperature the speed is unchanged.

## Official syllabus

*OxfordAQA International AS and A-level Physics (9630)*, Version 4.4, for International AS and A-level exams from May/June 2020, published by OxfordAQA. Sections 3.11.3 and 3.11.4.
