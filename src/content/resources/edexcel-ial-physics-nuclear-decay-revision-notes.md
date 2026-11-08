---
title: "Edexcel IAL Physics: Nuclear Decay — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 5.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-5-thermodynamics-radiation-oscillations-and-cosmology"
    subtopic: "nuclear-decay"
description: "Recall notes on radiation types, binding energy, decay equations, the decay law and radiation safety for Edexcel IAL Physics YPH11 (Unit 5, WPH15)."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Nuclear Decay study guide](/resources/edexcel-ial-physics-nuclear-decay/).

## Types of radiation

| | Nature | Charge | Penetration | Ionising |
|---|---|---|---|---|
| **Alpha** | Helium nucleus | +2 | Paper | **Strong** |
| **Beta-minus** | Electron | −1 | ~3 mm aluminium | Moderate |
| **Beta-plus** | Positron | +1 | Annihilates rapidly | Moderate |
| **Gamma** | EM photon | 0 | Thick lead | **Weak** |

**Ionising power and penetration are inversely related.** Alpha ionises strongly, therefore loses energy rapidly, therefore penetrates least. That causal chain — not two separate facts — is what a full answer states, and it is this same reasoning that examiners expect applied consistently across all three radiation types.

## Binding energy, fusion and fission

```
Delta E = c^2 Delta m       (mass deficit -> energy released)
1 u = 1.66 x 10^-27 kg      (equivalent to about 931.5 MeV/c^2)
```

**Mass deficit** is the difference between the mass of separated nucleons and the mass of the assembled nucleus — that "missing" mass is released as **binding energy**. Small masses at this scale are expressed in the **atomic mass unit (u)**. Plotting binding energy per nucleon against nucleon number gives a curve peaking around **iron** — both **fusion** (combining light nuclei) and **fission** (splitting heavy nuclei) release energy because both move nuclei towards this more stable, higher binding-energy-per-nucleon region. Fusion needs very high density and temperature to overcome electrostatic repulsion between nuclei and bring them close enough for the strong nuclear force to act.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--06-aphy-nuclear-mass-defect.webp" width="900" height="920" alt="The four separate nucleons of helium-4 weigh 4.031882 u but the nucleus 4.001505 u. The mass defect 0.030377 u is equivalent to 28.3 MeV, the binding energy, which is 7.07 MeV per nucleon." loading="lazy">
  <figcaption>The binding energy is the energy equivalent of the mass defect.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--07-aphy-nuclear-binding-curve.webp" width="900" height="980" alt="Binding energy per nucleon rises steeply for light nuclei, peaks near iron-56 at about 8.8 MeV and falls slowly to about 7.6 MeV for uranium-235. Fusion of light nuclei and fission of heavy nuclei both move nuclei towards the peak and release energy: 17.6 MeV for deuterium plus tritium and about 184 MeV for a uranium-235 fission." loading="lazy">
  <figcaption>Both fusion and fission release energy because their products sit nearer the peak of the curve.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--09-aphy-nuclear-radius.webp" width="900" height="1110" alt="Nuclei with A = 4, 64 and 216 have radii 1.9, 4.8 and 7.2 fm from R = 1.2 A^(1/3) fm. R plotted against the cube root of A is a straight line of gradient R0. Mass and volume both scale with A, so every nucleus has the same density, about 2.3 x 10^17 kg per cubic metre." loading="lazy">
  <figcaption>Nuclear radius grows as the cube root of A, so nuclear density is constant.</figcaption>
</figure>


## Decay equations

```
alpha:      A -4, Z -2
beta-minus: A same, Z +1        n -> p + e- + antineutrino    (d -> u)
beta-plus:  A same, Z -1        p -> n + e+ + neutrino        (u -> d)
gamma:      no change
```

Both A and Z must balance on each side.

**The neutrino was postulated to preserve conservation of energy and momentum**, because beta particles were emitted with a *range* of energies rather than the single value a two-body decay requires.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--01-aphy-nuclear-radiations.webp" width="900" height="840" alt="Alpha is stopped by paper, beta by a few mm of aluminium and gamma is only reduced by thick lead. Alpha makes the most ion pairs along its short track and gamma the fewest. Alpha is least hazardous outside the body and most hazardous inside it." loading="lazy">
  <figcaption>Alpha, beta and gamma differ in how far they penetrate and how strongly they ionise.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--02-aphy-nuclear-decay-modes.webp" width="900" height="990" alt="Graph of neutron number against proton number with a narrow band of stable nuclei above the N = Z line. Neutron-rich nuclei above the band decay by beta-minus (Z+1, N-1), proton-rich nuclei below it by beta-plus or electron capture (Z-1, N+1), and very heavy nuclei by alpha (Z-2, N-2)." loading="lazy">
  <figcaption>The position of a nucleus relative to the stable band decides its decay mode.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--03-aphy-nuclear-random-decay.webp" width="900" height="1170" alt="100 dice are thrown repeatedly and every six is removed. Which die goes is unpredictable, but the number left follows the smooth curve 100 x (5/6)^n, halving after about 3.8 throws." loading="lazy">
  <figcaption>Each nucleus has a constant chance of decaying, so unpredictable single decays give a smooth exponential for a large sample.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--04-aphy-nuclear-half-life.webp" width="900" height="1010" alt="Corrected count rate against time for a source starting at 800 counts per minute. The rate halves every 14 minutes whether it starts from 800 or 488, so the half-life is constant and lambda = ln 2 / 14 = 0.0495 per minute." loading="lazy">
  <figcaption>The half-life is the same wherever on the decay curve you start.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-nuclear-physics--05-aphy-nuclear-log-graph.webp" width="900" height="990" alt="ln of corrected count rate against time is a straight line falling from 6.461 to 4.710 over 50 minutes. The gradient is -0.0350 per minute, so lambda = 0.0350 per minute and the half-life is 19.8 minutes." loading="lazy">
  <figcaption>A straight ln graph supports the exponential law and its gradient is minus lambda.</figcaption>
</figure>


## Decay law

```
activity   A = lambda N            becquerel, Bq
N = N0 e^(-lambda t)
A = A0 e^(-lambda t)
half-life  t_1/2 = ln2 / lambda
```

**λ is the probability per unit time that a given nucleus decays.** Because decay is **random and spontaneous**, only the average behaviour of a large sample is predictable — which is why half-life is defined statistically.

Half-life is **unaffected by temperature, pressure or chemical state**, because it is a property of the nucleus, not of the atom's environment.

**Graphical method:** a plot of `ln A` against `t` gives a straight line of gradient **−λ**. Turning exponential data into a straight line is the standard analysis technique.

## Practical points

**Background radiation must be subtracted** from measured count rates before any half-life calculation. Sources: radon from rocks, cosmic rays, food and medical procedures.

**The inverse square law** applies to gamma from a point source: `I ∝ 1/r²`. Doubling the distance quarters the intensity — which is why distance is such an effective safety measure. **CORE PRACTICAL 15** investigates the absorption of gamma radiation by lead, typically plotting count rate against absorber thickness.

**Safety:** minimise **time**, maximise **distance**, use **shielding**. Store sources in lead-lined containers and handle with tongs.

**Choosing a source for an application** follows from the penetration table:

- **Medical tracer** → gamma with a **short half-life**, so it penetrates the body to be detected but does not remain radioactive inside the patient.
- **Thickness gauge** → beta, since alpha is fully absorbed and gamma passes through, so neither would respond to thickness.
- **Smoke alarm** → alpha, strongly ionising but safely contained.

## Exam traps

- Saying alpha is most penetrating because it is most ionising.
- Forgetting to subtract background count.
- Failing to balance both A and Z.
- Saying half-life depends on temperature.
- Using A rather than ln A when linearising decay data.
- Choosing a long half-life for a medical tracer.

## Self-test

1. Explain the relationship between ionising power and penetration.
2. Why was the neutrino postulated?
3. What does the decay constant represent?
4. How do you obtain λ graphically from decay data?
5. Why does a medical tracer need a short half-life and gamma emission?
6. What causes mass deficit, and how does it relate to binding energy?
7. A radioactive isotope has a decay constant of 0.0577 per year. Find its half-life, and the fraction of a sample remaining after 36 years.

**Answers:** 1. Strongly ionising radiation transfers energy rapidly through many ionising interactions, so it loses energy quickly and cannot penetrate far; weakly ionising radiation interacts rarely and penetrates deeply. 2. Beta particles were emitted with a range of energies rather than a single value, which appeared to violate conservation of energy and momentum; an undetected particle carrying the balance was proposed. 3. The probability per unit time that any given nucleus will decay. 4. Plot ln A against t; the gradient is −λ. 5. Gamma penetrates the body so it can be detected externally, and a short half-life ensures the activity falls quickly so the patient's exposure is limited. 6. Mass deficit is the difference between the mass of the separated nucleons and the mass of the assembled nucleus; that missing mass is released as binding energy via ΔE = c²Δm. 7. t½ = ln2 ÷ λ = 0.6931 ÷ 0.0577 = 12.0 years; 36 years = 3 half-lives, so the fraction remaining = (½)³ = 0.125 (12.5%).

## Frequently asked questions

**Does temperature affect half-life?**
No. Half-life is unaffected by temperature, pressure or chemical state, because it is a property of the nucleus rather than of the atom's environment.

**What is Core Practical 15 in Edexcel IAL Physics?**
Core Practical 15 investigates the absorption of gamma radiation by lead, typically by plotting count rate against absorber thickness.

**Which radiation is used in a thickness gauge?**
Beta. Alpha would be fully absorbed and gamma would pass straight through, so neither would respond to changes in thickness.

**What is the atomic mass unit?**
The atomic mass unit, u, is used to express small nuclear masses: 1 u = 1.66 × 10⁻²⁷ kg, equivalent to about 931.5 MeV/c².
