---
title: "Cambridge A Level Physics (9702): PET scanning"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 24.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-medical-physics"
    subtopic: "a-pet-scanning"
description: "A focused guide to 24.3 PET scanning in Cambridge A Level Physics 9702: tracers, β+ decay, annihilation, gamma-photon energy and locating events from arrival times."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **24.3 PET scanning** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Medical Physics study guide](/resources/a-physics-medical-physics/) outlines positron emission tomography in a short section; this page goes further into what a tracer is and why a β⁺ emitter is chosen, the conservation laws in annihilation, the photon energy calculation, and how arrival times at the detectors are turned into an image. For quick recall use the [PET scanning revision notes](/resources/cambridge-a-level-physics-9702-a-pet-scanning-revision-notes/), and for exam-style questions the [PET scanning practice questions](/resources/cambridge-a-level-physics-9702-a-pet-scanning-practice/).

## What 24.3 asks you to do

The syllabus lists six outcomes. Candidates should be able to:

- understand that a **tracer** is a substance containing radioactive nuclei that can be introduced into the body and is then absorbed by the tissue being studied
- recall that a tracer that decays by **β⁺ decay** is used in positron emission tomography (PET scanning)
- understand that **annihilation** occurs when a particle interacts with its antiparticle and that **mass-energy and momentum are conserved** in the process
- explain that, in PET scanning, positrons emitted by the decay of the tracer annihilate when they interact with electrons in the tissue, producing a **pair of gamma-ray photons travelling in opposite directions**
- **calculate the energy** of the gamma-ray photons emitted during the annihilation of an electron-positron pair
- understand that the gamma-ray photons travel outside the body and can be detected, and an image of the **tracer concentration** in the tissue can be created by processing the **arrival times** of the photons

## Tracers

A **tracer** is a substance that contains radioactive nuclei, is introduced into the body (usually by injection), and is **absorbed by the tissue being studied**. The radiation it emits shows where it has gone.

The tracer is chosen so that the body treats it like a normal chemical. A widely used example is a form of glucose in which one atom is replaced by radioactive fluorine-18 (the compound is called fluorodeoxyglucose, FDG). Tissues that use a lot of glucose, such as the brain or actively growing tumours, take up more of the tracer, so they show as regions of high concentration in the image. PET therefore shows **function** (where a chemical is being used), not just structure.

Desirable properties of a PET tracer, each with its reason:

| Property | Reason |
|---|---|
| Decays by β⁺ emission | Positrons are needed for annihilation and the gamma-ray pair |
| Half-life long enough to prepare, transport and inject it | Activity must still be useful when scanning begins |
| Half-life short enough to limit dose | Activity falls quickly once the scan is over |
| Chemically suitable | Must be absorbed by the tissue being studied |

Fluorine-18 has a half-life of about 110 minutes, which balances these needs.

## β⁺ decay

In β⁺ decay, a proton in the nucleus changes into a neutron, and a **positron** (the antiparticle of the electron) and an electron neutrino are emitted:

```
¹⁸₉F → ¹⁸₈O + ⁰₊₁e + ν
```

Check: nucleon number 18 = 18 + 0; proton number 9 = 8 + 1. The positron has the same mass as an electron and a charge of +e.

## Annihilation

When a particle meets its **antiparticle**, they **annihilate**: the particles cease to exist and their total energy, including the energy equivalent of their rest masses, is converted into photons. Two quantities are conserved:

- **Mass-energy**: total energy after = rest-mass energy of both particles plus any kinetic energy they had.
- **Momentum**: total momentum after = total momentum before.

In PET, the positron travels only a very short distance in tissue (around a millimetre) before slowing down and meeting an electron. At that point the pair has almost **zero total momentum**. This is why **two** photons must be produced, not one:

- A single photon always carries momentum (p = E/c), so it cannot have zero total momentum.
- Two photons of **equal energy** travelling in **exactly opposite directions** have momenta that cancel, satisfying conservation of momentum.

## Worked example 1: the photon energy

Calculate the energy, wavelength and momentum of each gamma-ray photon produced when an electron and a positron, both effectively at rest, annihilate.

```
total rest-mass energy = 2mₑc²
each photon: E = mₑc² = 9.11 × 10⁻³¹ × (3.00 × 10⁸)² = 8.20 × 10⁻¹⁴ J
in MeV: 8.20 × 10⁻¹⁴ / 1.60 × 10⁻¹³ = 0.51 MeV
λ = hc / E = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / 8.20 × 10⁻¹⁴ = 2.43 × 10⁻¹² m
p = E / c = 8.20 × 10⁻¹⁴ / 3.00 × 10⁸ = 2.73 × 10⁻²² kg m s⁻¹
```

*Annotation.* Each photon has the energy of **one** particle's rest mass, because the total 2mₑc² is shared equally between two photons. A common error is to give 2mₑc² as the energy of each photon. The equal and opposite momenta (2.73 × 10⁻²² kg m s⁻¹ each) add to zero, as conservation of momentum requires.

## From photon pairs to an image

The photons of 0.51 MeV are energetic enough to pass out of the body. The patient lies inside a **ring of gamma-ray detectors**.

1. Each annihilation sends two photons in opposite directions, which strike two detectors on opposite sides of the ring.
2. Two detections that occur almost simultaneously are taken to come from the same annihilation. The annihilation must lie on the straight line joining the two detectors.
3. The **difference in arrival times** shows where along that line the annihilation happened. If it occurred at the midpoint, both photons arrive together. If it was a distance x nearer detector A, the photon to A travels x less and the photon to B travels x more, so the path difference is 2x and the time difference is

```
Δt = 2x / c        so        x = cΔt / 2
```

4. A computer processes the arrival times of millions of photon pairs to find where the annihilations occurred, and builds an image showing the **concentration of the tracer** in the tissue: more annihilations from a region mean more tracer there.

## Worked example 2: locating an annihilation

Two detectors on opposite sides of the ring receive the photons from one annihilation. The photon reaches detector A 400 ps before the other photon reaches detector B. Where did the annihilation occur?

```
x = cΔt / 2 = 3.00 × 10⁸ × 400 × 10⁻¹² / 2 = 0.060 m
```

The annihilation occurred 6.0 cm from the midpoint of the line between the detectors, **on the side nearer A**, since A received its photon first.

*Annotation.* Forgetting the factor of 2 gives 12 cm, an error of a factor of two. Note also how short the times are: light travels only 30 cm in a nanosecond, so the detectors need time resolution of a fraction of a nanosecond.

## Worked example 3: tracer activity

A dose of a fluorine-18 tracer (half-life 110 min) is prepared 90 minutes before it is injected. It must have an activity of 400 MBq at injection. What activity must it have when prepared?

```
λ = 0.693 / 110 = 6.30 × 10⁻³ min⁻¹
A₀ = A e^(λt) = 400 × e^(6.30 × 10⁻³ × 90) = 400 × 1.76 = 705 MBq
```

*Annotation.* This links PET to [Radioactive decay](/resources/cambridge-a-level-physics-9702-a-radioactive-decay/). The calculation shows why PET centres are often near the facility that produces the isotope.

## Common mistakes

- **Saying the tracer emits gamma rays directly.** It emits positrons; the gamma rays come from annihilation.
- **Giving each photon an energy of 2mₑc².** Each photon has mₑc².
- **Explaining "two photons" by energy alone.** The reason is conservation of momentum: the pair has nearly zero momentum before, so the photons must travel in opposite directions.
- **Calling a positron "a positive electron in the nucleus".** It is created in the decay and emitted from the nucleus.
- **Using x = cΔt** instead of x = cΔt/2.
- **Saying PET shows bones or structure** like an X-ray image. It shows where the tracer is concentrated.

## Exam technique for the command words

- **State** (what is meant by a tracer): a substance containing radioactive nuclei, introduced into the body and absorbed by the tissue being studied.
- **Explain** (annihilation in PET): positron from β⁺ decay meets an electron; both annihilate; mass-energy converted to two gamma-ray photons; momentum conservation makes them travel in opposite directions.
- **Calculate** (photon energy): E = mₑc² for each photon, using the data-sheet electron mass.
- **Explain** (how the image is formed): coincident detection on opposite sides; time difference locates the event on the line; many events processed to map tracer concentration.
- **Suggest** (properties of a tracer): β⁺ emitter, suitable half-life, absorbed by the target tissue.

## Related resources

- [Medical Physics study guide](/resources/a-physics-medical-physics/) — the whole of Topic 24
- [PET scanning revision notes](/resources/cambridge-a-level-physics-9702-a-pet-scanning-revision-notes/)
- [PET scanning practice questions](/resources/cambridge-a-level-physics-9702-a-pet-scanning-practice/)
- [Production and use of X-rays](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays/) — subtopic 24.2
- [Mass defect and nuclear binding energy](/resources/cambridge-a-level-physics-9702-a-mass-defect-and-nuclear-binding-energy/) — E = mc²
- [Particle Physics](/resources/as-physics-particle-physics/) — β⁺ decay and antiparticles from AS Level

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
