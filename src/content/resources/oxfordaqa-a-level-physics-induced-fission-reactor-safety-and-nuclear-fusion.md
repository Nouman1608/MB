---
title: "OxfordAQA International AS and A-level Physics: Induced fission, reactor safety and nuclear fusion (9630)"
seoTitle: "OxfordAQA Physics Fission, Reactors and Fusion Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Induced fission, reactor safety and nuclear fusion"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 127
syllabusTopics:
  - qualification: "a-level"
    topic: "nuclear-energy-oxfordaqa-alevel"
    subtopic: "induced-fission-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "nuclear-energy-oxfordaqa-alevel"
    subtopic: "safety-aspects-nuclear-reactors-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "nuclear-energy-oxfordaqa-alevel"
    subtopic: "nuclear-fusion-oxfordaqa-alevel-physics"
description: "Study guide to thermal-neutron fission, moderators, control rods, reactor safety, waste and fusion conditions for OxfordAQA International A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches sections 3.12.3 (Induced fission), 3.12.4 (Safety aspects of nuclear reactors) and 3.12.5 (Nuclear fusion) of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4, for exams from May/June 2020 onwards. Section 3.12 is International A-level only. Sections 3.1 to 3.5 are shared AS and A-level content; sections 3.6 to 3.13 are A-level only.

Track progress with the [OxfordAQA Physics hub](/boards/oxfordaqa/a-level/physics/) and the [printable checklist](/checklists/oxfordaqa/a-level/physics/). Condensed recall is in the [revision notes](/resources/oxfordaqa-a-level-physics-induced-fission-reactor-safety-and-nuclear-fusion-revision-notes/) and worked questions are in the [practice set](/resources/oxfordaqa-a-level-physics-induced-fission-reactor-safety-and-nuclear-fusion-practice/). Half-life work is in the [decay modes guide](/resources/oxfordaqa-a-level-physics-radioactive-decay-modes-half-life-radiation-properties/). Try the [free 10-minute diagnostics](/diagnostics/) to see where to start.

## What you must be able to do

| Section | Focus |
|---|---|
| 3.12.3 | Fission by thermal neutrons, a self-sustaining chain reaction, critical mass; moderator, control rods, coolant; mechanical model of moderation by elastic collisions; choice of materials |
| 3.12.4 | Fuel, remote handling, shielding, emergency shut-down; waste production, handling and storage; risk against benefit |
| 3.12.5 | Suitable nuclei; kinetic energy and plasma temperature; energy released; the hydrogen cycle in the Sun; problems of a practical reactor |

Mass-to-energy conversion (1 u = 931.5 MeV) is [section 3.12.2](/resources/oxfordaqa-a-level-physics-nuclear-radius-mass-energy-and-binding-energy/). Details of particular reactors are not required.

## 3.12.3 Induced fission

In **induced fission** a nucleus absorbs a neutron, becomes unstable and splits into two fission fragments and releases two or three free neutrons. The fragments carry off most of the released energy as kinetic energy, which warms the fuel.

A **thermal neutron** has slowed until its energy matches the thermal motion of its surroundings. Uranium-235 absorbs thermal neutrons readily and fast ones poorly. Uranium-238, most of natural uranium, does not undergo fission with thermal neutrons.

**Worked example 1.** Compare the mean kinetic energy of a neutron at 293 K with that of a 2.0 MeV fission neutron. Use k = 1.38 × 10⁻²³ J K⁻¹ and 1 eV = 1.60 × 10⁻¹⁹ J.

```
KE = (3/2)kT = 1.5 × 1.38e-23 × 293 = 6.07e-21 J = 0.0379 eV
ratio = 2.0e6 / 0.0379 = 5.3 × 10⁷
```


### Chain reaction and critical mass

If neutrons from one fission cause further fissions, the process feeds itself: a **chain reaction**. Let k be the mean number of neutrons per fission that go on to cause another fission. k = 1 gives a steady rate, k > 1 a growing rate and k < 1 a dying reaction. After 100 generations, k = 1.05 multiplies the fissions by 1.05¹⁰⁰ = 131, while k = 0.95 leaves 0.95¹⁰⁰ = 0.006. Small changes in k matter, so control must be fast.

The **critical mass** is the least mass of fissile material in which a chain reaction sustains itself. Neutrons are made throughout the volume but escape through the surface. For a sphere the surface-to-volume ratio is 4πr² ÷ (4/3)πr³ = 3/r: 60 m⁻¹ at r = 0.05 m, 30 m⁻¹ at 0.10 m. Doubling r makes the surface 4 times bigger but the volume 8 times bigger, so a large piece loses a smaller fraction of its neutrons.

### Moderator, control rods and coolant

| Part | Job | Examples |
|---|---|---|
| Moderator | Slows fast neutrons to thermal energy | Water, heavy water, graphite |
| Control rods | Absorb neutrons to hold k at 1 or shut down | Boron, cadmium |
| Coolant | Carries energy from the core | Pressurised water, carbon dioxide |

**Mechanical model of moderation.** Let a neutron of mass m and speed u strike a stationary nucleus of mass M head-on, with no loss of kinetic energy. Momentum is conserved, and the speed of approach equals the speed of separation.

```
m u = m v + M V     and     u = V − v
→ v = u (m − M)/(m + M)
fraction of KE kept = ((M − m)/(M + m))²
```

| Nucleus | M/m | KE kept | KE lost |
|---|---|---|---|
| Hydrogen-1 | 1 | 0 | all |
| Deuterium | 2 | 0.111 | 0.889 |
| Carbon-12 | 12 | 0.716 | 0.284 |
| Uranium-238 | 238 | 0.983 | 0.017 |

Light nuclei are the best moderators. For n collisions each keeping fraction f, n = ln(E₀/E)/ln(1/f).

**Worked example 2.** How many head-on collisions slow a 2.0 MeV neutron to 0.025 eV in (a) deuterium, (b) carbon-12?

```
ln(2.0e6 / 0.025) = 18.20
(a) n = 18.20 / ln(1/0.111) = 18.20/2.197 = 8.3 → 9
(b) n = 18.20 / ln(1/0.716) = 18.20/0.334 = 54.5 → 55
```

Head-on is the most efficient collision, so these are minimum numbers.

**Choosing materials.**

- **Moderator:** low mass number, very low neutron absorption, solid or liquid at working temperature, stable under radiation, cheap. Light water absorbs more neutrons than heavy water or graphite, so a light-water reactor needs fuel enriched in uranium-235.
- **Control rods:** very strong neutron absorption, high melting point, resistant to corrosion and radiation damage, able to move reliably.
- **Coolant:** high specific heat capacity and conductivity, low neutron absorption, not made strongly radioactive, non-corrosive, easy to pump.

**Worked example 3.** A reactor gives 1.8 × 10⁹ W of thermal power. The water coolant (c = 4.2 × 10³ J kg⁻¹ K⁻¹) warms by 35 K. Each fission releases 180 MeV (1 MeV = 1.60 × 10⁻¹³ J).

```
m/t = P/(cΔT) = 1.8e9 / (4.2e3 × 35) = 1.2 × 10⁴ kg s⁻¹
fissions per second = 1.8e9 / (180 × 1.60e-13) = 6.3 × 10¹⁹
energy per kg U-235 = 2.88e-11 / (235 × 1.661e-27) = 7.4 × 10¹³ J kg⁻¹
```

Coal gives about 3.0 × 10⁷ J kg⁻¹, so uranium-235 gives roughly 2.5 million times more per kilogram.

**Worked example 4.** U-235 + n → Ba-141 + Kr-92 + 3n. Atomic masses: U-235 235.043930 u, n 1.008665 u, Ba-141 140.914411 u, Kr-92 91.926156 u.

```
before = 236.052595 u     after = 140.914411 + 91.926156 + 3.025995 = 235.866562 u
Δm = 0.186033 u  →  0.186033 × 931.5 = 173 MeV
```

Atomic masses work because both sides hold 92 electrons. Later decays of the fragments add to this, giving about 200 MeV per fission in total.

## 3.12.4 Safety aspects of nuclear reactors

**Fuel.** Natural uranium is about 0.7% uranium-235. Light-water reactors use fuel enriched to a few per cent, usually as uranium dioxide pellets sealed in zirconium alloy tubes.

**Remote handling.** Used fuel is intensely radioactive and hot, so machines move it under water, which shields and cools it, into cooling ponds.

**Shielding.** A steel pressure vessel and thick concrete surround the core. Water absorbs neutrons well; dense steel, lead and concrete absorb gamma rays.

**Emergency shut-down.** Control rods are designed to fall into the core if power fails or an alarm trips, so k drops below 1 within seconds. A neutron absorber can also be added to the coolant. The fission products keep decaying afterwards, so cooling must continue; a loss of cooling can melt fuel even with the chain reaction stopped.

**Waste.** The three broad classes need different handling.

| Class | Examples | Handling |
|---|---|---|
| Low-level | Gloves, clothing, tools | Sealed in drums, shallow burial |
| Intermediate-level | Cladding, filters, reactor parts | Shielded, set in concrete |
| High-level | Spent fuel, fission fragments | Cooled for years, sealed in glass and steel, kept deep underground |

**Worked example 5.** Caesium-137 has half-life 30.1 years. How long until its activity falls to 0.1% of the start?

```
(1/2)ⁿ = 0.001 → n = ln 1000 / ln 2 = 9.97 half-lives
time = 9.97 × 30.1 = 300 years
```

Short-lived nuclei fade quickly; long-lived ones stay hazardous for thousands of years.

**Risk and benefit.** Risk combines the chance of an event with the size of its consequences. Benefits: huge energy per kilogram, no carbon dioxide from the reactor in normal use, continuous output. Risks: rare but severe accidents (Chernobyl in 1986 and Fukushima in 2011 are the usual examples), long-term waste storage, decommissioning cost, and links to weapons materials. A good answer weighs both sides and reaches a judgement.

## 3.12.5 Nuclear fusion

In **fusion**, two small nuclei combine into a larger one and release energy. Suitable nuclei have few protons, so their repulsion is smallest. Hydrogen isotopes are the usual choice:

```
²₁H + ³₁H → ⁴₂He + ¹₀n        ²₁H + ²₁H → ³₂He + ¹₀n
```

**Kinetic energy and temperature.** The nuclei repel, so they need enough energy to approach within range of the strong interaction. Take the closest centre separation as the sum of radii from R = R₀A^(1/3).

**Worked example 6.** Two deuterium nuclei approach head-on with equal energy. R₀ = 1.2 × 10⁻¹⁵ m, e = 1.60 × 10⁻¹⁹ C, ε₀ = 8.85 × 10⁻¹² F m⁻¹.

```
r = 1.2e-15 × (2^⅓ + 2^⅓) = 3.02e-15 m
Ep = e²/(4πε₀r) = (1.60e-19)² / (4π × 8.85e-12 × 3.02e-15) = 7.6 × 10⁻¹⁴ J
each nucleus: KE = 3.8e-14 J
KE = (3/2)kT → T = 2 × 3.8e-14 / (3 × 1.38e-23) = 1.8 × 10⁹ K
```

Practical reactors work near 10⁸ K, lower than the estimate, because the energies are spread so enough nuclei lie in the fast tail, and quantum tunnelling lets some fuse below the full barrier. The matter is a **plasma**: an ionised gas of nuclei and free electrons.

**Energy released.**

**Worked example 7.** Deuterium fusion to helium-3 and a neutron. Atomic masses: He-3 3.016029 u, n 1.008665 u, H-2 2.014102 u.

```
Δm = 2 × 2.014102 − (3.016029 + 1.008665) = 0.003510 u → 3.27 MeV
```

Deuterium-tritium fusion loses 0.018883 u, giving 17.6 MeV. Momentum is conserved, so the products share the energy in inverse proportion to mass: the neutron takes 4.0026/5.0112 = 0.799 of it, about 14.0 MeV, and the helium-4 nucleus about 3.5 MeV.

**The solar hydrogen cycle.** Two protons fuse to give deuterium, a positron and a neutrino. Deuterium fuses with a proton to give helium-3 and a gamma ray. Two helium-3 nuclei fuse to give helium-4 and two protons. Overall, four protons become one helium-4 nucleus, two positrons, two neutrinos and gamma radiation.

**Worked example 8.** Use atomic masses H-1 1.007825 u and He-4 4.002603 u, the Sun's power 3.8 × 10²⁶ W and proton mass 1.673 × 10⁻²⁷ kg.

```
Δm = 4 × 1.007825 − 4.002603 = 0.028697 u → 26.7 MeV = 4.28e-12 J
reactions per second = 3.8e26 / 4.28e-12 = 8.9 × 10³⁷
hydrogen used = 4 × 8.9e37 × 1.673e-27 = 5.95 × 10¹¹ kg s⁻¹
mass lost = P/c² = 3.8e26 / (3.00e8)² = 4.2 × 10⁹ kg s⁻¹
```

**Problems of a practical reactor.**

- The plasma must reach about 10⁸ K with no solid wall touching it. Magnetic fields hold it, since charged particles spiral round field lines.
- Density and confinement time must give more energy out than in.
- Neutrons are uncharged, so magnets cannot hold them. They damage the structure and make it radioactive.
- Tritium is scarce. It can be bred in a lithium blanket, and the blanket must also carry energy away.

**Worked example 9.** A 15 keV deuteron (3.344 × 10⁻²⁷ kg) moves at right angles to a 5.0 T field.

```
KE = 15e3 × 1.60e-19 = 2.4e-15 J → v = √(2KE/m) = 1.20 × 10⁶ m s⁻¹
r = mv/(Bq) = 3.344e-27 × 1.20e6 / (5.0 × 1.60e-19) = 5.0 × 10⁻³ m
```

## Common errors

- Saying the moderator absorbs neutrons. It slows them; control rods absorb them.
- Forgetting decay heat after the control rods go in.
- In the fusion estimate, giving all of Ep to one nucleus.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for exams from May/June 2020 onwards, published by Oxford International AQA Examinations: sections 3.12.3 Induced fission, 3.12.4 Safety aspects of nuclear reactors and 3.12.5 Nuclear fusion (International A-level only).
