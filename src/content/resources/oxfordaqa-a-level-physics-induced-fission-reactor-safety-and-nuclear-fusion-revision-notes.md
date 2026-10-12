---
title: "OxfordAQA International AS and A-level Physics: Induced fission, reactor safety and nuclear fusion (9630) -- Revision Notes"
seoTitle: "OxfordAQA Physics Fission and Fusion Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on moderators, control rods, coolants, reactor safety, nuclear waste and fusion conditions for OxfordAQA International A-level Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense sections 3.12.3 to 3.12.5 of the OxfordAQA International AS and A-level Physics (9630) specification, version 4.4, for exams from May/June 2020 onwards. All of section 3.12 is International A-level only. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-a-level-physics-induced-fission-reactor-safety-and-nuclear-fusion/), then test yourself with the [practice set](/resources/oxfordaqa-a-level-physics-induced-fission-reactor-safety-and-nuclear-fusion-practice/). Mass-energy is in the [nuclear radius and binding energy guide](/resources/oxfordaqa-a-level-physics-nuclear-radius-mass-energy-and-binding-energy/). Related pages: the [OxfordAQA Physics hub](/boards/oxfordaqa/a-level/physics/), the [printable checklist](/checklists/oxfordaqa/a-level/physics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key definitions

- **Induced fission:** a nucleus absorbs a neutron and splits into two fragments and two or three neutrons.
- **Thermal neutron:** a neutron slowed until its energy is of the order of the thermal energy of its surroundings (about 0.04 eV at room temperature).
- **Chain reaction:** a self-feeding sequence, where some neutrons released by each fission trigger the next fissions.
- **Critical mass:** the least mass of fissile material that sustains a chain reaction.
- **Moderator:** slows fast neutrons by elastic collisions.
- **Control rods:** absorb neutrons to hold the reaction steady or stop it.
- **Coolant:** carries energy out of the core.
- **Fusion:** two small nuclei combine into a larger one, releasing energy.
- **Plasma:** an ionised gas of nuclei and free electrons.

## Equations and data

| Quantity | Relationship |
|---|---|
| Fraction of KE kept, head-on elastic collision with stationary nucleus | ((M − m)/(M + m))² |
| Collisions to slow a neutron | n = ln(E₀/E)/ln(1/f) |
| Coolant flow | P = (m/t) c ΔT |
| Mass difference to energy | ΔE = Δm c², 1 u = 931.5 MeV |
| Mean KE of a particle at temperature T | (3/2)kT |
| Coulomb energy of two nuclei | e²Z₁Z₂/(4πε₀r), r = R₀(A₁^⅓ + A₂^⅓) |
| Radius of path in a magnetic field | r = mv/(Bq) |
| Activity after n half-lives | A = A₀ × (1/2)ⁿ |

The questions in the practice set supply constants such as k = 1.38 × 10⁻²³ J K⁻¹, e = 1.60 × 10⁻¹⁹ C and R₀ = 1.2 × 10⁻¹⁵ m. Read each question for the values it gives.

## 3.12.3 Fission and the reactor core

### Chain reaction in steps

1. Uranium-235 absorbs a thermal neutron.
2. The unstable nucleus breaks into two fragments and frees two or three neutrons.
3. Fragments carry the energy as kinetic energy, which heats the fuel.
4. Neutrons must be slowed (moderated) before they are likely to cause another fission.
5. The mean number of neutrons per fission that cause another fission is k. k = 1 is steady, k > 1 grows, k < 1 dies.

### Critical mass

- Neutrons are made in the volume but escape through the surface.
- For a sphere, surface-to-volume ratio = 3/r, which falls as r rises.
- A small mass loses too many neutrons. A larger mass keeps enough.

### Reactor parts

| Part | Role | Wanted properties | Examples |
|---|---|---|---|
| Moderator | Slow neutrons | Light nuclei, very low absorption, stable | Water, heavy water, graphite |
| Control rods | Absorb neutrons | Strong absorption, high melting point, durable | Boron, cadmium |
| Coolant | Remove energy | High specific heat capacity, low absorption, non-corrosive, easy to pump | Pressurised water, carbon dioxide |

**Method: moderation by collisions.**

1. Write momentum conservation and speed of approach = speed of separation.
2. Solve: v = u(m − M)/(m + M).
3. Square the speed ratio for the fraction of kinetic energy kept.
4. Divide ln(E₀/E) by ln(1/f) and round up.

**Reminder.** A neutron strikes beryllium-9 (M = 9m) head-on. The fraction kept is (8/10)² = 0.64. To go from 1.0 MeV to 0.025 eV in carbon-12 needs ln(4.0 × 10⁷)/ln(1/0.716) = 17.5/0.334 = 52.4, so at least 53 collisions.

**Reminder.** A reactor core that gives 400 MW of thermal power into water warming 50 K needs 400 × 10⁶ ÷ (4.2 × 10³ × 50) = 1.9 × 10³ kg s⁻¹.

## 3.12.4 Safety, waste, risk and benefit

| Topic | Points to state |
|---|---|
| Fuel | Enriched uranium, usually as oxide pellets in sealed metal tubes; natural uranium is about 0.7% uranium-235 |
| Remote handling | Used fuel is intensely radioactive and hot; machines move it, often under water, which shields and cools it |
| Shielding | Steel vessel plus thick concrete; water absorbs neutrons, dense materials absorb gamma rays |
| Emergency shut-down | Control rods drop in under gravity or on an alarm; absorber can be added to the coolant; cooling must continue because of decay heat |
| Low-level waste | Gloves, clothing; sealed, shallow burial |
| Intermediate-level waste | Cladding, filters; shielded and set in concrete |
| High-level waste | Spent fuel and fragments; cooled, sealed in glass and steel, stored deep underground |

**Method: waste decay time.**

1. Find the fraction remaining as a number of half-lives, n = ln(1/fraction)/ln 2.
2. Multiply n by the half-life.

**Reminder.** Strontium-90 has half-life 28.8 years, so 12.5% remains after 3 half-lives = 86.4 years.

**Risk against benefit.** Risk = probability and consequence together.

- Benefits: high energy per kilogram, no carbon dioxide from the reactor in normal use, steady output.
- Risks: severe accidents (rare), long-lived waste, decommissioning cost, weapons links.
- Write a balanced paragraph and finish with a judgement.

## 3.12.5 Fusion

- Suitable nuclei have few protons: deuterium and tritium, written ²₁H and ³₁H.
- Energy release comes from the mass difference. Light products share energy in inverse proportion to their masses.
- Mean KE = (3/2)kT, so a temperature of 1.0 × 10⁸ K corresponds to 2.07 × 10⁻¹⁵ J, about 12.9 keV.

**Method: temperature estimate.**

1. Find the separation r = R₀(A₁^⅓ + A₂^⅓).
2. Calculate Ep = e²/(4πε₀r) for singly charged nuclei.
3. Divide by 2 if both nuclei move towards each other with equal energy.
4. Use KE = (3/2)kT to find T.
5. Note that real temperatures are lower because of tunnelling and the fast tail.

**Solar hydrogen cycle (hydrogen only).** Protons fuse to give deuterium, a positron and a neutrino. Deuterium plus a proton gives helium-3 and a gamma ray. Two helium-3 nuclei give helium-4 and two protons. Net: four protons become helium-4, two positrons, two neutrinos and gamma rays, with 26.7 MeV released.

**Reminder.** Lithium-6 + neutron → tritium + helium-4. With masses Li-6 6.015123 u, n 1.008665 u, H-3 3.016049 u, He-4 4.002603 u, Δm = 0.005136 u and the energy is 4.78 MeV. This reaction in a lithium blanket makes the tritium for deuterium-tritium fusion.

Per kilogram, deuterium-tritium fusion releases about 3.4 × 10¹⁴ J, roughly 4.6 times the 7.4 × 10¹³ J kg⁻¹ for uranium-235 fission.

**Practical problems.** Temperature near 10⁸ K; confinement by magnetic fields; density and time for net energy gain; neutron damage and activation of the structure; tritium supply; steady extraction of energy.

## Must-know distinctions

- Moderator slows; control rods absorb; coolant removes energy.
- Critical mass is about the amount of material; k describes the neutron balance.
- Thermal neutrons are slow neutrons, not hot ones.
- Fission splits a heavy nucleus; fusion joins light nuclei.
- Short half-life means intense but brief; long half-life means weak but lasting.

## Quick self-test

1. Define a thermal neutron.
2. Why must fission neutrons be slowed in a reactor of this type?
3. A neutron hits a helium-4 nucleus (M = 4m) at rest, head-on and elastically. Find the fraction of its kinetic energy that is retained.
4. A spherical piece of fissile material has radius 0.12 m. Find the surface-area-to-volume ratio.
5. A reactor has k = 0.98. How many generations until the number of fissions is 10% of its starting value?
6. Give two properties wanted in a coolant.
7. Why does a reactor still need cooling after the control rods are fully inserted?
8. Name the three classes of nuclear waste.
9. Find the mean kinetic energy, in keV, of nuclei in a plasma at 1.0 × 10⁸ K.
10. State two reasons why neutrons from deuterium-tritium fusion are a problem.

### Answers

1. A neutron whose kinetic energy is of the order of the thermal energy of its surroundings.
2. Uranium-235 absorbs slow neutrons much more readily than fast ones, so fast neutrons would rarely cause further fission.
3. (3/5)² = 0.36.
4. 3/r = 3 ÷ 0.12 = 25 m⁻¹.
5. n = ln 0.1/ln 0.98 = 114 generations.
6. Any two from: high specific heat capacity, good thermal conductivity, low neutron absorption, non-corrosive, not made strongly radioactive.
7. Fission products keep decaying and releasing energy, so the fuel stays hot.
8. Low-level, intermediate-level and high-level waste.
9. (3/2) × 1.38 × 10⁻²³ × 1.0 × 10⁸ = 2.07 × 10⁻¹⁵ J, which is 12.9 keV.
10. They are uncharged, so magnetic fields cannot confine them; they damage the structure and make it radioactive.

## Where marks are usually lost

- Writing that the moderator absorbs neutrons or that control rods slow them down.
- Describing critical mass as a number without explaining surface loss.
- Using atomic masses and nuclear masses together in one calculation.
- Leaving out the factor of 1/2 when the Coulomb energy is shared between two nuclei.
- Using T in degrees Celsius in (3/2)kT.
- Giving risk and benefit as a list with no judgement.
- Stating a number of collisions without rounding up.
- Giving "radioactive waste" a single storage method for all classes.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification version 4.4, for exams from May/June 2020 onwards, published by Oxford International AQA Examinations: sections 3.12.3 Induced fission, 3.12.4 Safety aspects of nuclear reactors and 3.12.5 Nuclear fusion (International A-level only).
