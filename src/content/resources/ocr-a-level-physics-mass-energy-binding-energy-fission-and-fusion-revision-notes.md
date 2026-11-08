---
title: "OCR A Level Physics A: Mass-energy, binding energy, fission and fusion (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics Binding Energy Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Mass-energy, binding energy, fission and fusion"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 72
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-medical-physics"
    subtopic: "nuclear-and-particle-physics-ocr-alevel"
description: "Condensed revision notes on mass-energy, binding energy, fission reactors, nuclear waste and fusion for OCR A Level Physics A, with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense section 6.4.4 (Nuclear fission and fusion), outcomes (a) to (k), of the OCR A Level Physics A (H556) specification, Version 3.0 (March 2026). The [study guide](/resources/ocr-a-level-physics-mass-energy-binding-energy-fission-and-fusion/) has the fuller explanations and longer examples. For timed practice, try the [practice questions](/resources/ocr-a-level-physics-mass-energy-binding-energy-fission-and-fusion-practice/), the [course hub](/boards/ocr/a-level/physics/), the [printable checklist](/checklists/ocr/a-level/physics/) and the [free diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Mass defect | Total mass of the free protons and neutrons, less the nucleus mass |
| Binding energy | Energy required to pull a nucleus apart into free nucleons; equal to mass defect × c² |
| Binding energy per nucleon | Binding energy ÷ nucleon number A; higher means more stable |
| Pair creation | A photon becomes a particle and its antiparticle |
| Annihilation | A particle and its antiparticle become photons |
| Induced fission | A nucleus, usually U-235, splits after absorbing a neutron |
| Chain reaction | Neutrons from one fission cause further fissions |
| Fusion | Light nuclei join to make a heavier nucleus |

## Equations and conversions

| Quantity | Relationship | Units |
|---|---|---|
| Mass-energy | ΔE = Δmc² | J, kg, m s⁻¹ |
| Pair creation threshold | photon energy ≥ 2mc² | J |
| Photon energy | E = hc/λ | J, m |
| Energy released | (mass before − mass after) × c² | J |
| Energy from binding energies | total of products − total of reactants | MeV |
| Mean kinetic energy | (3/2)kT | J, K |
| Electronvolt | 1 MeV = 1.60 × 10⁻¹³ J | |
| Mass equivalent | 1 MeV = 1.78 × 10⁻³⁰ kg (with c = 3.00 × 10⁸ m s⁻¹) | |

Use the constants given in the question. Converting 1 u = 1.661 × 10⁻²⁷ kg with c = 3.00 × 10⁸ m s⁻¹ gives 934 MeV, while 931.5 MeV is the value from more precise constants. Do not mix the two in one answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>


## Method: binding energy from masses

1. Mass of nucleons = Z × m(proton) + (A − Z) × m(neutron).
2. Mass defect = mass of nucleons − mass of nucleus.
3. Convert to kilograms if needed, then ΔE = Δmc².
4. Per nucleon: divide by A.

With atomic masses, replace each proton by a hydrogen atom so that the electron masses cancel.

**Worked reminder.** Iron-56 has a binding energy per nucleon of 8.79 MeV.

```
total binding energy = 56 × 8.79 = 492 MeV
= 492 × 1.60e-13 = 7.87 × 10⁻¹¹ J
mass defect = 7.87e-11 / (3.00e8)² = 8.75 × 10⁻²⁸ kg
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--06-aphy-nuclear-mass-defect.webp" width="900" height="920" alt="The four separate nucleons of helium-4 weigh 4.031882 u but the nucleus 4.001505 u. The mass defect 0.030377 u is equivalent to 28.3 MeV, the binding energy, which is 7.07 MeV per nucleon." loading="lazy">
  <figcaption>The binding energy is the energy equivalent of the mass defect.</figcaption>
</figure>


## Method: energy released in a reaction

1. Write a balanced equation (A and Z both balance).
2. Total the masses on each side, using nuclear masses or atomic masses consistently.
3. Subtract: reactants minus products. A positive result means energy is released; a negative one means energy is absorbed.
4. Convert with ΔE = Δmc² (or 931.5 MeV per u if that is the value you are given).

**Worked reminder.** ²₁H + ²₁H → ³₁H + ¹₁H. Atomic masses: H-2 2.014102 u, H-3 3.016049 u, H-1 1.007825 u.

```
before = 2 × 2.014102 = 4.028204 u
after  = 3.016049 + 1.007825 = 4.023874 u
Δm = 0.004330 u, so energy released = 0.004330 × 931.5 = 4.03 MeV
```

## Pair creation and annihilation

- Electron rest energy is about 0.51 MeV. An electron-positron pair needs a photon of at least about 1.02 MeV.
- Annihilation at rest gives **two** photons in opposite directions, each carrying one rest energy, so momentum stays zero.
- Photon energy above the threshold becomes kinetic energy of the pair.

## Binding energy per nucleon curve

```
BE per nucleon
 8.8 |            . . Fe-56 peak
     |        . .       . . .
     |      .                   . . . U
     |    .
     |  . He-4 (local peak)
     +--------------------------------- nucleon number A
```

| Region | Process that releases energy | Why |
|---|---|---|
| Left of A = 56 | Fusion | Product has a higher binding energy per nucleon |
| Right of A = 56 | Fission | Fragments have a higher binding energy per nucleon |

Near iron no further gain is possible by joining or splitting.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--07-aphy-nuclear-binding-curve.webp" width="900" height="980" alt="Binding energy per nucleon rises steeply for light nuclei, peaks near iron-56 at about 8.8 MeV and falls slowly to about 7.6 MeV for uranium-235. Fusion of light nuclei and fission of heavy nuclei both move nuclei towards the peak and release energy: 17.6 MeV for deuterium plus tritium and about 184 MeV for a uranium-235 fission." loading="lazy">
  <figcaption>Both fusion and fission release energy because their products sit nearer the peak of the curve.</figcaption>
</figure>


## Fission reactor in steps

1. A thermal neutron is absorbed by U-235 in a **fuel rod**.
2. The nucleus splits into two fragments plus two or three fast neutrons, releasing energy.
3. The **moderator** slows the fast neutrons so they are likely to cause further fission.
4. **Control rods** absorb neutrons: in to slow the reaction, out to speed it up. A steady reaction needs one neutron per fission to cause another.
5. A coolant carries the thermal energy to a heat exchanger that raises steam for turbines.

| Part | Typical material | Must have |
|---|---|---|
| Fuel rods | Enriched uranium | Fissile nuclei |
| Moderator | Water, graphite | Light nuclei, low neutron absorption |
| Control rods | Boron, cadmium | Strong neutron absorption |

## Nuclear waste

- Hazards: ionising radiation, heat, very long half-lives for some nuclides, leaks and security during transport and storage.
- Handling: cooling ponds, sealing in glass, shielded containers, deep geological storage.
- Benefits to weigh: no carbon dioxide from fission in operation, small volume of waste.
- Judgement: give an advantage and a disadvantage, each with a reason.

## Fusion and temperature

- Nuclei repel, so they must approach within about 10⁻¹⁵ m, where the strong nuclear force acts.
- High kinetic energy means high temperature (mean energy (3/2)kT), so the fuel is a plasma at millions of kelvin.
- Product binding energy per nucleon is higher, so energy is released.
- Hard to achieve on Earth because the plasma must be heated and contained.

**Worked reminder.** Deuterium has a total binding energy of 2.22 MeV, so 2.22 ÷ 2 = 1.11 MeV per nucleon. Helium-4 has 28.3 MeV, so 28.3 ÷ 4 ≈ 7.1 MeV per nucleon. Fusing light nuclei into helium moves them far up the curve, which is why the energy released per kilogram of fuel is so large.

## Must-know distinctions

- **Mass defect** is a mass; **binding energy** is an energy; **binding energy per nucleon** is energy per particle.
- **Moderator** slows neutrons; **control rods** absorb them.
- **Fission** splits one heavy nucleus; **fusion** joins two light ones. Both move towards the peak of the curve.
- **Pair creation** needs a photon; **annihilation** produces photons.

## Quick self-test

1. Write ΔE = Δmc² with the SI unit of each quantity.
2. A mass of 2.0 × 10⁻³⁰ kg is converted completely to energy. Find the energy in joules.
3. An electron and a positron annihilate at rest. Find the wavelength of each photon. (Electron mass 9.11 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J s.)
4. A nucleus has a binding energy of 1.6 × 10⁻¹¹ J. Find its mass defect in kg.
5. A calcium-40 nucleus has a binding energy of 342 MeV. Find the binding energy per nucleon.
6. Why does fusion of light nuclei release energy?
7. State the job of the moderator.
8. State what happens to the reaction rate if control rods are withdrawn, and why.
9. A small research reactor has a thermal power of 1.0 × 10⁶ W. Each fission releases 3.2 × 10⁻¹¹ J. Find the fissions per second.
10. ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n. Find x.
11. Explain why fusion needs a very high temperature.
12. Give one problem of storing high-level nuclear waste.

### Answers

1. Energy change in J = mass change in kg × (speed of light in m s⁻¹)².
2. E = 2.0 × 10⁻³⁰ × (3.00 × 10⁸)² = 1.8 × 10⁻¹³ J.
3. Each photon carries one rest energy: 9.11 × 10⁻³¹ × (3.00 × 10⁸)² = 8.20 × 10⁻¹⁴ J. λ = hc/E = 6.63 × 10⁻³⁴ × 3.00 × 10⁸ / 8.20 × 10⁻¹⁴ = 2.43 × 10⁻¹² m.
4. Δm = 1.6 × 10⁻¹¹ / (3.00 × 10⁸)² = 1.8 × 10⁻²⁸ kg.
5. 342 ÷ 40 = 8.55 MeV per nucleon.
6. The product has a higher binding energy per nucleon, so some mass is converted to energy.
7. It slows fast neutrons by collisions, so they are more likely to cause fission.
8. The rate rises, because fewer neutrons are absorbed and more fissions are caused.
9. 1.0 × 10⁶ / 3.2 × 10⁻¹¹ = 3.1 × 10¹⁶ per second.
10. Nucleon number: 236 = 141 + 92 + x, so x = 3 (charge: 92 = 56 + 36 balances).
11. Nuclei repel, so they must be given large kinetic energy to reach the range of the strong nuclear force, and kinetic energy rises with temperature.
12. It stays radioactive and hot for a very long time, so it needs secure storage for thousands of years.

## Where marks are usually lost

- Using mass in u or g in ΔE = Δmc² and forgetting to convert to kilograms.
- Giving the energy of one annihilation photon as the total, or writing one photon instead of two.
- Dividing the binding energy by the proton number rather than the nucleon number.
- Mixing atomic and nuclear masses in the same mass-defect sum.
- Saying the control rods slow the neutrons, or that the moderator absorbs them.
- Reading the curve backwards: fission is on the right, fusion on the left.
- Writing a waste answer with no reason or with only advantages.
- Forgetting to check proton number as well as nucleon number in equations.

## Frequently asked questions

**What is mass defect?**
The mass defect is the total mass of the separate protons and neutrons minus the mass of the nucleus. Its energy equivalent is the binding energy.

**What is the minimum photon energy for pair creation?**
The photon must have at least the combined rest energy of the particle and antiparticle, 2mc². Pair creation happens when such a photon passes close to a nucleus.

**Why does fusion need very high temperatures?**
Nuclei are positively charged and repel each other, so they need very high kinetic energies to get close enough to fuse. Fusion needs temperatures of millions of kelvin, and holding a plasma that hot is the main engineering difficulty.

**Which section of OCR A Level Physics A covers fission and fusion?**
It is section 6.4.4 (Nuclear fission and fusion), outcomes (a) to (k), of OCR H556. Radioactive decay and half-life are in section 6.4.3.

## Official syllabus

OCR Level 3 Advanced GCE in Physics A (H556), Version 3.0 (March 2026), first assessment 2017, published by OCR. Section 6.4.4, outcomes (a) to (k).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--08-aphy-nuclear-reactor.webp" width="900" height="960" alt="Cross-section of a reactor with fuel rods in a moderator, control rods that absorb neutrons, coolant leaving hot and returning cool, and thick shielding. Heat passes to a heat exchanger, turbine and generator. Control rods hold k at 1." loading="lazy">
  <figcaption>The moderator slows neutrons and the control rods absorb them.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--09-aphy-nuclear-radius.webp" width="900" height="1110" alt="Nuclei with A = 4, 64 and 216 have radii 1.9, 4.8 and 7.2 fm from R = 1.2 A^(1/3) fm. R plotted against the cube root of A is a straight line of gradient R0. Mass and volume both scale with A, so every nucleus has the same density, about 2.3 x 10^17 kg per cubic metre." loading="lazy">
  <figcaption>Nuclear radius grows as the cube root of A, so nuclear density is constant.</figcaption>
</figure>

