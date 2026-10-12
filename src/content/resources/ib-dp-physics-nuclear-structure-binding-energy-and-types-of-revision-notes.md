---
title: "IB DP Physics: Nuclear structure, binding energy and types of radioactive decay (DP Physics) -- Revision Notes"
seoTitle: "IB DP Physics E.3 Binding Energy and Decay Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Nuclear structure, binding energy and types of radioactive decay"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 296
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-e"
    subtopic: "ib-dp-physics-e-3"
description: "Condensed IB DP Physics E.3 revision notes on isotopes, binding energy, the strong force and alpha, beta and gamma decay, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense the first part of sub-topic E.3, Radioactive decay, from the IB *Physics guide* (first assessment 2025). They cover nuclear structure, binding energy and the types of decay, for SL and HL, with the five additional higher level understandings marked "HL only". Activity and half-life are the other part of E.3 and are not covered. For full explanations read the [study guide](/resources/ib-dp-physics-nuclear-structure-binding-energy-and-types-of/), then try the [practice questions](/resources/ib-dp-physics-nuclear-structure-binding-energy-and-types-of-practice/). Not sure where you stand? Take a [free 10-minute diagnostic](/diagnostics/). Related pages: the [course hub](/boards/ib/ib-dp/physics/) and the [printable checklist](/checklists/ib/ib-dp/physics/).

## Definitions

| Term | Meaning |
|---|---|
| Nucleon number A | Protons plus neutrons |
| Proton number Z | Number of protons |
| Neutron number N | N = A − Z |
| Isotopes | Same Z, different N |
| Mass defect | Mass of separated nucleons minus mass of the nucleus |
| Binding energy | Energy equivalent of the mass defect; energy needed to separate the nucleus into free nucleons |
| Binding energy per nucleon | Binding energy divided by A; higher means more tightly bound |
| Strong nuclear force | Attractive force between nucleons, acting over only a few fm |
| Spontaneous decay | Happens with no outside trigger; unaffected by temperature or pressure |
| Random decay | The moment a given nucleus decays cannot be predicted |

## Units and conversions

| Quantity | Value |
|---|---|
| 1 u | 1.661 × 10⁻²⁷ kg |
| 1 u | 931.5 MeV/c² |
| 1 MeV/c² | 1.78 × 10⁻³⁰ kg |
| 1 MeV | 1.602 × 10⁻¹³ J |

Stay on one route within a question. Multiplying by c² turns a mass into an energy; dividing by c² does the reverse.

## Method: binding energy from atomic masses

1. Add the masses of Z hydrogen atoms and N neutrons.
2. Subtract the atomic mass of the nuclide. This is the mass defect in u.
3. Multiply by 931.5 to get binding energy in MeV.
4. Divide by A for binding energy per nucleon.

Small reminder, beryllium-9 (Z = 4, N = 5, atomic mass 9.012183 u, hydrogen atom 1.007825 u, neutron 1.008665 u):

```
separated = 4 x 1.007825 + 5 x 1.008665 = 9.074625 u
defect    = 9.074625 - 9.012183 = 0.062442 u
BE        = 0.062442 x 931.5 = 58.2 MeV
per nucleon = 58.2 / 9 = 6.46 MeV
```

For lithium-7 (atomic mass 7.016004 u) the same steps give 39.2 MeV in total and 5.61 MeV per nucleon, so beryllium-9 is the more tightly bound.

## The binding energy per nucleon curve

- Rises steeply for light nuclides, with a high point at helium-4.
- Broad peak near A = 56 to 62 at about 8.8 MeV per nucleon.
- Falls slowly for heavier nuclides, to about 7.6 MeV per nucleon at uranium.
- Energy is released when nucleons end up at higher binding energy per nucleon: light nuclei joining, or a very heavy nucleus splitting.
- Energy released = total binding energy after minus total binding energy before. Equivalently, the mass lost times c².

**Reaction reminder.** Lithium-7 plus a hydrogen-1 atom gives two helium-4 atoms. Masses: Li-7 7.016004 u, H-1 1.007825 u, He-4 4.002603 u.

```
mass lost = 7.016004 + 1.007825 - 2 x 4.002603 = 0.018623 u
energy    = 0.018623 x 931.5 = 17.3 MeV
```

## Decay types

| Decay | Emitted | A | Z | Notes |
|---|---|---|---|---|
| α | He-4 nucleus | −4 | −2 | Heavy nuclides |
| β⁻ | electron + antineutrino | 0 | +1 | Neutron-rich nuclides |
| β⁺ | positron + neutrino | 0 | −1 | Proton-rich nuclides |
| γ | photon | 0 | 0 | Follows another decay; energy lost by the nucleus |

Equation check: top numbers sum to the same total on both sides; bottom numbers (charge) sum to the same total on both sides. The antineutrino and neutrino carry A = 0 and zero charge.

Examples:

```
²¹⁰₈₂Pb → ²¹⁰₈₃Bi + ⁰₋₁e + antineutrino
²³⁴₉₂U  → ²³⁰₉₀Th + ⁴₂He
¹³₇N   → ¹³₆C  + ⁰₊₁e + neutrino
```

## Method: writing a decay equation

1. Write the parent with its A and Z.
2. Choose the decay from the question (or from the neutron excess).
3. Subtract the emitted particle from the top and bottom numbers to find the daughter.
4. Use the periodic table to name the daughter from its new Z.
5. Check that top numbers balance and bottom numbers balance, then add the neutrino or antineutrino if the decay is beta.

## Energy released in a decay

The energy released is the mass lost times c². The products share it as kinetic energy. With the parent at rest, momenta are equal and opposite, so the lighter product takes the larger share, in inverse proportion to the masses.

**Reminder.** Radium-226 decays to radon-222 by alpha emission. Atomic masses: Ra-226 226.025410 u, Rn-222 222.017578 u, He-4 4.002603 u.

```
mass lost = 226.025410 - 222.017578 - 4.002603 = 0.005229 u
energy    = 0.005229 x 931.5 = 4.87 MeV
alpha share = 4.87 x 222/226 = 4.78 MeV
```

For beta decay the same mass-lost idea applies, but the energy is shared between the electron, the antineutrino and the recoiling nucleus. That is why the electron energy takes a range of values (HL only: the continuous spectrum), up to a maximum.

## Penetration and ionizing ability

| Radiation | Ionizing | Stopped by |
|---|---|---|
| α | Highest | Paper, a few cm of air |
| β | Middle | A few mm of aluminium |
| γ | Lowest | Never fully; intensity falls with thickness of lead or concrete |

Match the radiation to the job: a thickness gauge needs partial absorption; a leak detector needs radiation that gets out; a tracer inside the body needs a gamma emitter.

## HL only

- **Evidence for the strong force:** stable nuclei with many protons exist; close-approach scattering departs from the electric prediction.
- **N and Z:** light stable nuclides have N close to Z; heavier ones need up to about 1.5 times as many neutrons as protons. Too many neutrons: β⁻. Too few: β⁺. Very heavy: α.
- **Flat curve above A = 60:** short range means each nucleon bonds with neighbours only, so binding energy grows in proportion to A.
- **Discrete levels:** alpha and gamma line spectra show nuclear energy levels.
- **Continuous β spectrum:** electrons carry any energy up to a maximum, so a third particle shares the energy: the neutrino.

## Must-know distinctions

- Mass defect (a mass) versus binding energy (an energy), linked by c².
- Total binding energy versus binding energy per nucleon.
- Neutrino with β⁺, antineutrino with β⁻.
- Random (timing unpredictable) versus spontaneous (no trigger).
- Ionizing strength versus penetration: they run in opposite order.
- Nuclear mass written in u, kg or MeV/c²: three units for the same quantity.
- Beta-minus (neutron becomes proton) versus beta-plus (proton becomes neutron): Z moves in opposite directions.
- Gamma emission (nucleus loses energy only) versus alpha or beta (nucleus changes identity).

## Quick self-test

1. Oxygen has Z = 8. How many neutrons are in oxygen-16 and in oxygen-18?
2. Convert a mass of 0.0450 u into MeV/c².
3. Convert 3.5 × 10⁻²⁹ kg into MeV/c².
4. State which radiation is most ionizing and which is most penetrating.
5. Complete: ²³⁴₉₂U → Th + α. Give A and Z of thorium.
6. A nuclide has too many neutrons. State the likely decay and what happens to Z.
7. Why does gamma emission usually follow alpha or beta decay?
8. Explain why a stable nucleus with several protons needs the strong force.
9. Nickel-62 has binding energy per nucleon of about 8.8 MeV and uranium about 7.6 MeV. Which is more tightly bound?
10. HL only: why does a continuous beta spectrum suggest a third emitted particle?
11. HL only: what does a set of discrete alpha energies from one nuclide imply?

### Answers

1. 16 − 8 = 8 and 18 − 8 = 10.
2. 0.0450 × 931.5 = 41.9 MeV/c².
3. 3.5 × 10⁻²⁹ ÷ 1.78 × 10⁻³⁰ = 19.7 MeV/c².
4. Alpha is most ionizing; gamma is most penetrating.
5. A = 230, Z = 90.
6. β⁻ decay; Z rises by 1.
7. The daughter nucleus is formed in an excited energy level and loses the excess as a photon.
8. Gravity is far too weak and the electric force between protons is repulsive, so another attractive interaction must act at short range.
9. Nickel-62.
10. If only two bodies were emitted, the electron energy would be fixed. A spread of energies with energy and momentum apparently missing needs a third particle to share them.
11. The daughter nucleus can be left in different discrete levels, so nuclei have quantized energy levels.

## Where marks are usually lost

- Stating "binding energy" when the question wants the energy per nucleon.
- Subtracting the wrong way round, giving a negative mass defect.
- Using u values with MeV/c² conversions twice, or mixing kg and u.
- Omitting the (anti)neutrino from a beta equation, or giving the wrong one.
- Writing the electron as having A = 1 instead of 0.
- Claiming lead "stops" gamma rays completely.
- Confusing the two descriptions: spontaneous means conditions have no effect, random means timing cannot be predicted.
- Describing the curve without giving the numbers for the peak and for uranium.

## Official syllabus

IB *Physics guide*, first assessment 2025, International Baccalaureate Organization: sub-topic E.3, Radioactive decay (nuclear structure, binding energy and decay types, plus the related additional higher level understandings).
