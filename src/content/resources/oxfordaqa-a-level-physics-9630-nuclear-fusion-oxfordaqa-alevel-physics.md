---
title: "OxfordAQA A-Level Physics (9630): Nuclear fusion"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.12 – Nuclear energy"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 12.5
syllabusTopics:
  - qualification: "a-level"
    topic: "nuclear-energy-oxfordaqa-alevel"
    subtopic: "nuclear-fusion-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.12.5: fusion fuels, Coulomb barrier, plasma temperature, energy release, the solar hydrogen cycle and reactor problems."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.12.5, Nuclear fusion, part of Section 3.12 Nuclear energy, which is International A-level only. The deuterium-deuterium temperature estimate, the energy shared between D–T products and the Sun's hydrogen consumption are worked in the [induced fission, reactor safety and nuclear fusion study guide](/resources/oxfordaqa-a-level-physics-induced-fission-reactor-safety-and-nuclear-fusion/). This page compares barriers for different pairs of nuclei to show *why* some nuclei are suitable, works out the energy of each step of the solar hydrogen cycle and compares fusion fuel with fission fuel. Condense it with the [nuclear fusion revision notes](/resources/oxfordaqa-a-level-physics-9630-nuclear-fusion-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [nuclear fusion practice questions](/resources/oxfordaqa-a-level-physics-9630-nuclear-fusion-oxfordaqa-alevel-physics-practice/).

Values used: e = 1.60 × 10⁻¹⁹ C, 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻², k = 1.38 × 10⁻²³ J K⁻¹, R₀ = 1.2 fm, 1 u = 931.5 MeV = 1.66 × 10⁻²⁷ kg, 1 MeV = 1.60 × 10⁻¹³ J.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Knowledge of suitable nuclei for use in a fusion reactor | Name them and justify the choice |
| Estimation of kinetic energy needed for fusion and of plasma temperature | Use the Coulomb equation, R = R₀A^(1/3) and ³⁄₂kT |
| Energy release from fusion of two nuclei | Calculate it from masses |
| Solar fusion cycle limited to the hydrogen cycle | Write and interpret its steps |
| Problems to be overcome to produce a practical reactor | Explain each problem and the physics behind it |

## Why fusion needs extreme conditions

Two nuclei are both positively charged, so they repel. Fusion only happens if they get close enough, roughly to touching, for the short-range strong interaction to pull them together. The electric potential energy at that separation is the **Coulomb barrier**:

E_p = Z₁Z₂e² / (4πε₀r), with r = R₁ + R₂ and each R = R₀A^(1/3)

If two nuclei approach head-on with equal kinetic energies, each needs E_p/2. Setting this equal to the mean kinetic energy of a particle in a hot gas, ³⁄₂kT, gives an estimate of the temperature:

³⁄₂kT = E_p/2, so T = E_p / 3k

## Worked example 1: comparing barriers

| Pair | Z₁Z₂ | r / fm | Barrier E_p / MeV | Estimated T / K |
|---|---|---|---|---|
| ¹H + ¹H | 1 | 2.40 | 0.60 | 2.3 × 10⁹ |
| ²H + ³H | 1 | 3.24 | 0.44 | 1.7 × 10⁹ |
| ³He + ³He | 4 | 3.46 | 1.66 | 6.4 × 10⁹ |
| ¹²C + ¹²C | 36 | 5.49 | 9.4 | 3.6 × 10¹⁰ |

The D–T row in full: r = 1.2 × (2^(1/3) + 3^(1/3)) = 1.2 × (1.260 + 1.442) = 3.24 fm.
E_p = 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / 3.24 × 10⁻¹⁵ = 7.1 × 10⁻¹⁴ J = 0.44 MeV.
T = 7.1 × 10⁻¹⁴ / (3 × 1.38 × 10⁻²³) = **1.7 × 10⁹ K**.

Two lessons follow from the table:

- The barrier grows with Z₁Z₂, so nuclei with **one proton each** are by far the easiest to fuse. Carbon fusion needs a temperature about twenty times higher than hydrogen fusion.
- For the same charge, larger nuclei sit further apart at contact, so the barrier is slightly lower: D–T has a lower barrier than p–p.

## Suitable nuclei for a reactor

The isotopes of hydrogen, deuterium (²H) and tritium (³H), are the chosen fuels:

- Each has charge +e, giving the lowest possible barrier.
- D–T fusion releases a large energy, 17.6 MeV per reaction.
- Deuterium is present in ordinary water, so supplies are plentiful. Tritium is radioactive and rare, so it must be made, which links to reactor problems below.

## The real temperature is lower than the estimate

The Sun's core is at about 1.5 × 10⁷ K, and practical reactor plasmas run at about 10⁸ K, both well below the estimates in the table. Two reasons:

- In a hot gas the energies are spread out. A small fraction of nuclei move much faster than average, and with an enormous number of nuclei that fraction still gives many fusions each second.
- Quantum tunnelling allows some nuclei to fuse without having quite enough energy to climb the whole barrier.

At these temperatures atoms are fully ionised. The fuel is a **plasma**: a gas of bare nuclei and free electrons.

## Energy released from fusion of two nuclei

Use the mass difference, as in section 3.12.2. When proton numbers balance, atomic masses can be used.

### Worked example 2: fusion fuel against fission fuel

²H + ³H → ⁴He + n. Atomic masses: ²H 2.014102 u, ³H 3.016049 u, ⁴He 4.002603 u; neutron 1.008665 u.

Mass before = 5.030151 u; mass after = 5.011268 u; difference = 0.018883 u
Energy = 0.018883 × 931.5 = **17.6 MeV** = 2.81 × 10⁻¹² J

Fuel mass per reaction = 5.030151 × 1.66 × 10⁻²⁷ = 8.35 × 10⁻²⁷ kg
Energy per kg of D–T fuel = 2.81 × 10⁻¹² / 8.35 × 10⁻²⁷ = **3.4 × 10¹⁴ J kg⁻¹**

Fission of uranium-235 at about 200 MeV per fission gives about 8 × 10¹³ J kg⁻¹. Fusion fuel gives roughly four times as much energy per kilogram.

## The solar hydrogen cycle

The specification limits solar fusion to the hydrogen cycle. In three steps, four protons become one helium-4 nucleus:

1. ¹H + ¹H → ²H + e⁺ + ν (twice)
2. ²H + ¹H → ³He + γ (twice)
3. ³He + ³He → ⁴He + ¹H + ¹H

Overall: 4 ¹H → ⁴He + 2e⁺ + 2ν, plus γ photons. Check each step: nucleon number and charge balance (in step 1, two units of charge become one on the deuteron and one on the positron).

### Worked example 3: energy from each step

Atomic masses: ¹H 1.007825 u, ²H 2.014102 u, ³He 3.016029 u, ⁴He 4.002603 u.

| Step | Mass before / u | Mass after / u | Energy / MeV |
|---|---|---|---|
| 1 | 2.015650 | 2.014102 | 1.44 |
| 2 | 3.021927 | 3.016029 | 5.49 |
| 3 | 6.032058 | 6.018253 | 12.86 |

Total for one helium nucleus = 2 × 1.44 + 2 × 5.49 + 12.86 = **26.7 MeV**, which matches 4 × 1.007825 − 4.002603 = 0.028697 u = 26.7 MeV.

Using atomic masses in step 1 automatically includes 1.02 MeV from the positron annihilating with an electron; the nuclear reaction alone releases about 0.42 MeV. Step 3 fuses two nuclei of charge +2e, so it has the highest barrier of the three steps.

## Problems to be overcome for a practical reactor

- **Reaching the temperature.** The plasma must be heated to about 10⁸ K and kept there.
- **Confinement.** No material wall can touch a plasma at this temperature without cooling it and being damaged. Strong magnetic fields hold the plasma away from the walls: charged particles spiral around field lines.
- **Density and time.** The plasma must be dense enough and held for long enough that the fusion energy released exceeds the energy used to heat and confine it.
- **Neutrons.** D–T neutrons carry most of the energy but are uncharged, so magnetic fields cannot hold them. They strike the reactor structure, damaging it and making it radioactive. The structure must withstand this and be replaced or stored safely.
- **Tritium supply.** Tritium is rare. It can be bred by neutrons striking lithium in a blanket around the plasma (⁶Li + n → ⁴He + ³H), and the same blanket absorbs neutron energy as heat.

## Common mistakes

- Giving the whole barrier energy to one nucleus when both approach with equal energy.
- Using A instead of A^(1/3) for each radius, or using only one radius for r.
- Using the charge of a nucleus as e when Z > 1.
- Stating that the Sun's core temperature equals the estimate. It is far lower, because of the energy spread and tunnelling.
- Writing the solar cycle with helium-4 made in one step from four protons.
- Saying magnetic fields confine the neutrons.

## Exam technique

- **Estimate:** state your assumptions (head-on, equal energies, touching spheres) and give one or two significant figures.
- **Explain** why a nucleus is suitable: link charge to the barrier and mention energy released and availability.
- **Explain** a reactor problem: say what the problem is and the physics that causes it, for example "neutrons are uncharged so are not deflected by magnetic fields".
- **Calculate** energy released: show mass before, mass after and difference, then convert.

## Where next

- Condense with the [nuclear fusion revision notes](/resources/oxfordaqa-a-level-physics-9630-nuclear-fusion-oxfordaqa-alevel-physics-revision-notes/).
- Try the [nuclear fusion practice questions](/resources/oxfordaqa-a-level-physics-9630-nuclear-fusion-oxfordaqa-alevel-physics-practice/).
- Review mass differences in the [mass and energy study guide](/resources/oxfordaqa-a-level-physics-9630-mass-and-energy-oxfordaqa-alevel-physics/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.12.5 Nuclear fusion, published by OxfordAQA.
